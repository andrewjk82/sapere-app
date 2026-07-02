export const CARINGBAH_2020_QUESTIONS = [
  {
    "id": "car2020-mc1",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trig function, find another",
    "source": "Caringbah 2020 Trial Q1",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "If $\\cos\\theta = -\\dfrac{12}{13}$ and $180° \\leq \\theta \\leq 360°$, then $\\cot\\theta =$",
    "a": "3",
    "opts": [
      "$-\\dfrac{5}{12}$",
      "$-\\dfrac{12}{5}$",
      "$\\dfrac{5}{12}$",
      "$\\dfrac{12}{5}$"
    ],
    "h": "Use the Pythagorean identity to find $\\sin\\theta$, then recall $\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}$. Determine the sign using the quadrant.",
    "s": "Since $\\cos\\theta = -\\frac{12}{13}$ and $180° \\leq \\theta \\leq 360°$, the angle is in the third or fourth quadrant. With $\\cos\\theta < 0$, $\\theta$ is in Q3. Using the Pythagorean identity: $\\sin^2\\theta = 1 - \\left(\\frac{12}{13}\\right)^2 = 1 - \\frac{144}{169} = \\frac{25}{169}$, so $\\sin\\theta = -\\frac{5}{13}$ (negative in Q3). Therefore $\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta} = \\frac{-12/13}{-5/13} = \\frac{12}{5}$.",
    "solutionSteps": [
      {
        "explanation": "Identify the quadrant. Since \\(\\cos\\theta < 0\\) and \\(180° \\leq \\theta \\leq 360°\\), the angle must be in the third quadrant (Q3), where both sine and cosine are negative.",
        "workingOut": "180° \\leq \\theta \\leq 270°,\\ \\text{Q3}"
      },
      {
        "explanation": "Apply the Pythagorean identity \\(\\sin^2\\theta + \\cos^2\\theta = 1\\) to find \\(\\sin\\theta\\).",
        "workingOut": "\\sin^2\\theta = 1 - \\cos^2\\theta = 1 - \\left(\\dfrac{12}{13}\\right)^2 = 1 - \\dfrac{144}{169} = \\dfrac{25}{169}"
      },
      {
        "explanation": "Take the square root. In Q3, sine is negative, so we take the negative root.",
        "workingOut": "\\sin\\theta = -\\dfrac{5}{13}"
      },
      {
        "explanation": "Use the definition \\(\\cot\\theta = \\dfrac{\\cos\\theta}{\\sin\\theta}\\) to compute the answer.",
        "workingOut": "\\cot\\theta = \\dfrac{-12/13}{-5/13} = \\dfrac{12}{5}"
      },
      {
        "explanation": "Confirm the sign: both numerator and denominator are negative in Q3, so \\(\\cot\\theta\\) is positive.",
        "workingOut": "\\cot\\theta = \\dfrac{12}{5}"
      }
    ]
  },
  {
    "id": "car2020-mc2",
    "topicId": "y12a-2B",
    "c": "2B",
    "t": "Vertical and horizontal asymptotes",
    "source": "Caringbah 2020 Trial Q2",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "What are the asymptotes of the graph of $y = \\dfrac{1}{x^2 - 9}$?",
    "a": "0",
    "opts": [
      "$x = \\pm 3$",
      "$x = \\pm 9$",
      "$y = \\pm 3$",
      "$y = \\pm 9$"
    ],
    "h": "Vertical asymptotes occur where the denominator equals zero. Factorise $x^2 - 9$ to find these values.",
    "s": "Vertical asymptotes occur where the denominator is zero: $x^2 - 9 = 0 \\Rightarrow (x-3)(x+3) = 0 \\Rightarrow x = \\pm 3$. There is also a horizontal asymptote at $y = 0$ (as $x \\to \\pm\\infty$), but this is not listed among the options.",
    "solutionSteps": [
      {
        "explanation": "Vertical asymptotes occur where the denominator equals zero. Set \\(x^2 - 9 = 0\\) and solve.",
        "workingOut": "x^2 - 9 = 0"
      },
      {
        "explanation": "Factorise the difference of squares.",
        "workingOut": "(x-3)(x+3) = 0"
      },
      {
        "explanation": "Solve for \\(x\\) to get both vertical asymptotes.",
        "workingOut": "x = 3 \\quad \\text{or} \\quad x = -3"
      },
      {
        "explanation": "State the vertical asymptotes. Note that \\(y = 0\\) is a horizontal asymptote, but the question asks only about the asymptotes that match the options.",
        "workingOut": "x = \\pm 3"
      }
    ]
  },
  {
    "id": "car2020-mc3",
    "topicId": "y11a-9C",
    "c": "9C",
    "t": "Differentiating powers of x",
    "source": "Caringbah 2020 Trial Q3",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "For the function $f(x) = \\dfrac{x^3}{3} - 5x^2 + 2x + 10$, the gradient is $-14$ at two points. What are the values of the $x$-coordinates at these points?",
    "a": "1",
    "opts": [
      "$-8, 2$",
      "$8, 2$",
      "$8,\\ -2$",
      "$-8,\\ -2$"
    ],
    "h": "Differentiate $f(x)$, set $f'(x) = -14$, then solve the resulting quadratic equation.",
    "s": "$f'(x) = x^2 - 10x + 2$. Setting $f'(x) = -14$: $x^2 - 10x + 2 = -14 \\Rightarrow x^2 - 10x + 16 = 0 \\Rightarrow (x-8)(x-2) = 0 \\Rightarrow x = 8$ or $x = 2$.",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\(f(x)\\) with respect to \\(x\\) using the power rule to find the gradient function.",
        "workingOut": "f'(x) = x^2 - 10x + 2"
      },
      {
        "explanation": "Set the gradient function equal to \\(-14\\) as required by the question.",
        "workingOut": "x^2 - 10x + 2 = -14"
      },
      {
        "explanation": "Rearrange to form a standard quadratic equation equal to zero.",
        "workingOut": "x^2 - 10x + 16 = 0"
      },
      {
        "explanation": "Factorise the quadratic by finding two numbers that multiply to \\(16\\) and add to \\(-10\\).",
        "workingOut": "(x - 8)(x - 2) = 0"
      },
      {
        "explanation": "Solve for both values of \\(x\\).",
        "workingOut": "x = 8 \\quad \\text{or} \\quad x = 2"
      }
    ]
  },
  {
    "id": "car2020-mc4",
    "topicId": "y11a-3A",
    "c": "3A",
    "t": "Functions and function notation",
    "source": "Caringbah 2020 Trial Q4",
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
    "h": "For $\\sqrt{x}$ we need $x \\geq 0$. For $\\frac{1}{\\sqrt{2-x}}$ we need $2-x > 0$. Combine both conditions.",
    "s": "For $\\sqrt{x}$: need $x \\geq 0$. For $\\frac{1}{\\sqrt{2-x}}$: need $2-x > 0$, i.e., $x < 2$ (strict inequality since the denominator cannot be zero). Combining: $0 \\leq x < 2$, written as $[0, 2)$.",
    "solutionSteps": [
      {
        "explanation": "For the first term \\(\\sqrt{x}\\), the expression under the square root must be non-negative.",
        "workingOut": "x \\geq 0"
      },
      {
        "explanation": "For the second term \\(\\frac{1}{\\sqrt{2-x}}\\), the expression under the square root must be strictly positive (it cannot be zero because it is in the denominator).",
        "workingOut": "2 - x > 0 \\implies x < 2"
      },
      {
        "explanation": "Combine both conditions by taking their intersection.",
        "workingOut": "x \\geq 0 \\text{ AND } x < 2"
      },
      {
        "explanation": "Write the domain in interval notation. The left endpoint is included (closed bracket) and the right is excluded (open bracket).",
        "workingOut": "[0, 2)"
      }
    ]
  },
  {
    "id": "car2020-mc5",
    "topicId": "y12a-10D",
    "c": "10D",
    "t": "The standard normal distribution",
    "source": "Caringbah 2020 Trial Q5",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "If the $z$ scores on an examination are normally distributed and $P(z \\leq N) = 0.6$ for some number $N$, what is the value of $P(-N \\leq z \\leq N)$?",
    "a": "2",
    "opts": [
      "$0.1$",
      "$0.3$",
      "$0.2$",
      "$0.4$"
    ],
    "h": "By symmetry of the standard normal, $P(z \\leq -N) = 1 - P(z \\leq N)$. Then use $P(-N \\leq z \\leq N) = P(z \\leq N) - P(z \\leq -N)$.",
    "s": "Since $P(z \\leq N) = 0.6 > 0.5$, we have $N > 0$. By symmetry, $P(z \\leq -N) = 1 - 0.6 = 0.4$. Therefore $P(-N \\leq z \\leq N) = P(z \\leq N) - P(z \\leq -N) = 0.6 - 0.4 = 0.2$.",
    "solutionSteps": [
      {
        "explanation": "Since \\(P(z \\leq N) = 0.6 > 0.5\\), the value \\(N\\) is positive (above the mean).",
        "workingOut": "N > 0"
      },
      {
        "explanation": "Use the symmetry of the normal distribution: \\(P(z \\leq -N) = 1 - P(z \\leq N)\\), because the distribution is symmetric about zero.",
        "workingOut": "P(z \\leq -N) = 1 - 0.6 = 0.4"
      },
      {
        "explanation": "Express \\(P(-N \\leq z \\leq N)\\) as the difference between two cumulative probabilities.",
        "workingOut": "P(-N \\leq z \\leq N) = P(z \\leq N) - P(z \\leq -N)"
      },
      {
        "explanation": "Substitute the known values.",
        "workingOut": "= 0.6 - 0.4 = 0.2"
      }
    ]
  },
  {
    "id": "car2020-mc6",
    "topicId": "y11a-11D",
    "c": "11D",
    "t": "Trig graphs in radians",
    "source": "Caringbah 2020 Trial Q6",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "What is the change in amplitude and period when the function $f(x) = \\dfrac{1}{2}\\sin 4x$ is transformed into $g(x) = \\sin 2x$?",
    "a": "3",
    "opts": [
      "The amplitude is halved and the period is halved",
      "The amplitude is halved and the period is doubled",
      "The amplitude is doubled and the period is halved",
      "The amplitude is doubled and the period is doubled"
    ],
    "h": "Compare the amplitudes (the coefficients) and periods ($2\\pi$ divided by the coefficient of $x$) of both functions.",
    "s": "$f(x) = \\frac{1}{2}\\sin 4x$ has amplitude $\\frac{1}{2}$ and period $\\frac{2\\pi}{4} = \\frac{\\pi}{2}$. $g(x) = \\sin 2x$ has amplitude $1$ and period $\\frac{2\\pi}{2} = \\pi$. Amplitude goes from $\\frac{1}{2}$ to $1$ (doubled). Period goes from $\\frac{\\pi}{2}$ to $\\pi$ (doubled).",
    "solutionSteps": [
      {
        "explanation": "For \\(f(x) = \\frac{1}{2}\\sin 4x\\), identify the amplitude as the coefficient of sine, and the period as \\(\\frac{2\\pi}{b}\\) where \\(b\\) is the coefficient of \\(x\\).",
        "workingOut": "A_f = \\tfrac{1}{2}, quad T_f = \\dfrac{2\\pi}{4} = \\dfrac{\\pi}{2}"
      },
      {
        "explanation": "For \\(g(x) = \\sin 2x\\), identify the amplitude and period in the same way.",
        "workingOut": "A_g = 1, quad T_g = \\dfrac{2\\pi}{2} = \\pi"
      },
      {
        "explanation": "Compare amplitudes: the amplitude increases from \\(\\frac{1}{2}\\) to \\(1\\), which is a doubling.",
        "workingOut": "\\dfrac{A_g}{A_f} = \\dfrac{1}{1/2} = 2 \\quad (\\text{doubled})"
      },
      {
        "explanation": "Compare periods: the period increases from \\(\\frac{\\pi}{2}\\) to \\(\\pi\\), which is also a doubling.",
        "workingOut": "\\dfrac{T_g}{T_f} = \\dfrac{\\pi}{\\pi/2} = 2 \\quad (\\text{doubled})"
      }
    ]
  },
  {
    "id": "car2020-mc7",
    "topicId": "y12a-9C",
    "c": "9C",
    "t": "Quartiles and interquartile range",
    "source": "Caringbah 2020 Trial Q7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "Which statement is true for an ungrouped data set with no outliers?",
    "a": "2",
    "opts": [
      "The largest possible range is 2 times the IQR",
      "The largest possible range is 3 times the IQR",
      "The largest possible range is 4 times the IQR",
      "The largest possible range is 5 times the IQR"
    ],
    "h": "With no outliers, the minimum and maximum lie within $1.5 \\times \\text{IQR}$ of the lower and upper quartiles. Use this to express the range in terms of the IQR.",
    "s": "With no outliers, all data lie within $Q_1 - 1.5\\times\\text{IQR}$ and $Q_3 + 1.5\\times\\text{IQR}$. The maximum possible range is $(Q_3 + 1.5\\, text{IQR}) - (Q_1 - 1.5\\, text{IQR}) = (Q_3 - Q_1) + 3\\, text{IQR} = \\text{IQR} + 3\\, text{IQR} = 4\\, text{IQR}$.",
    "solutionSteps": [
      {
        "explanation": "Recall the outlier rule: a data value is an outlier if it lies more than \\(1.5 \\times \\text{IQR}\\) below \\(Q_1\\) or above \\(Q_3\\). If there are no outliers, the data must lie within these fences.",
        "workingOut": "\\text{Lower fence} = Q_1 - 1.5\\, text{IQR}, quad \\text{Upper fence} = Q_3 + 1.5\\, text{IQR}"
      },
      {
        "explanation": "The maximum possible range occurs when the minimum is at the lower fence and the maximum is at the upper fence.",
        "workingOut": "\\text{Max range} = (Q_3 + 1.5\\, text{IQR}) - (Q_1 - 1.5\\, text{IQR})"
      },
      {
        "explanation": "Expand the expression.",
        "workingOut": "= (Q_3 - Q_1) + 3\\, text{IQR}"
      },
      {
        "explanation": "Substitute \\(Q_3 - Q_1 = \\text{IQR}\\).",
        "workingOut": "= \\text{IQR} + 3\\, text{IQR} = 4\\, text{IQR}"
      }
    ]
  },
  {
    "id": "car2020-mc8",
    "topicId": "y11a-7D",
    "c": "7D",
    "t": "Further equations of lines",
    "source": "Caringbah 2020 Trial Q8",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Which line is perpendicular to $3x + 4y + 7 = 0$?",
    "a": "2",
    "opts": [
      "$4x + 3y - 7 = 0$",
      "$3x - 4y + 7 = 0$",
      "$8x - 6y - 7 = 0$",
      "$4x - 7y + 7 = 0$"
    ],
    "h": "Find the gradient of the given line, then the perpendicular gradient is its negative reciprocal. Check which option has that gradient.",
    "s": "Rearranging $3x+4y+7=0$: $y = -\\frac{3}{4}x - \\frac{7}{4}$, so $m = -\\frac{3}{4}$. Perpendicular gradient: $m_\\perp = \\frac{4}{3}$. Check option C: $8x - 6y - 7 = 0 \\Rightarrow y = \\frac{8}{6}x - \\frac{7}{6} = \\frac{4}{3}x - \\frac{7}{6}$. Gradient $= \\frac{4}{3}$ ✓.",
    "solutionSteps": [
      {
        "explanation": "Rearrange \\(3x + 4y + 7 = 0\\) into gradient-intercept form \\(y = mx + b\\) to identify the gradient.",
        "workingOut": "4y = -3x - 7 \\implies y = -\\dfrac{3}{4}x - \\dfrac{7}{4}, quad m = -\\dfrac{3}{4}"
      },
      {
        "explanation": "The gradient of a perpendicular line is the negative reciprocal of the original gradient.",
        "workingOut": "m_\\perp = -\\dfrac{1}{m} = -\\dfrac{1}{-3/4} = \\dfrac{4}{3}"
      },
      {
        "explanation": "Check option C: rearrange \\(8x - 6y - 7 = 0\\) into gradient-intercept form.",
        "workingOut": "6y = 8x - 7 \\implies y = \\dfrac{4}{3}x - \\dfrac{7}{6}"
      },
      {
        "explanation": "Confirm the gradient matches \\(\\frac{4}{3}\\) and verify the product of gradients is \\(-1\\).",
        "workingOut": "m_1 \\times m_2 = -\\dfrac{3}{4} \\times \\dfrac{4}{3} = -1 \\checkmark"
      }
    ]
  },
  {
    "id": "car2020-mc9",
    "topicId": "y12a-5K",
    "c": "5K",
    "t": "Calculus with other bases",
    "source": "Caringbah 2020 Trial Q9",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "What is the derivative of $3^{4x+5}$?",
    "a": "0",
    "opts": [
      "$\\ln 3 \\times 4 \\times 3^{4x+5}$",
      "$(4x+5) \\times 3^{4x+5}$",
      "$\\ln 3 \\times 3^{4x+5}$",
      "$4 \\times 3^{4x+5}$"
    ],
    "h": "Use the rule: $\\frac{d}{dx}[a^{f(x)}] = \\ln a \\cdot f'(x) \\cdot a^{f(x)}$.",
    "s": "Using the rule $\\frac{d}{dx}[a^{f(x)}] = \\ln a \\cdot f'(x) \\cdot a^{f(x)}$ with $a=3$ and $f(x)=4x+5$: $\\frac{d}{dx}[3^{4x+5}] = \\ln 3 \\cdot 4 \\cdot 3^{4x+5}$.",
    "solutionSteps": [
      {
        "explanation": "Recall the derivative rule for an exponential function with a constant base: \\(\\frac{d}{dx}[a^{f(x)}] = \\ln a \\cdot f'(x) \\cdot a^{f(x)}\\). This comes from writing \\(a^{f(x)} = e^{f(x)\\ln a}\\) and applying the chain rule.",
        "workingOut": "\\dfrac{d}{dx}\\left[a^{f(x)}\\right] = \\ln a \\cdot f'(x) \\cdot a^{f(x)}"
      },
      {
        "explanation": "Identify \\(a = 3\\) and \\(f(x) = 4x + 5\\), then differentiate \\(f(x)\\).",
        "workingOut": "f'(x) = 4"
      },
      {
        "explanation": "Substitute into the rule.",
        "workingOut": "\\dfrac{d}{dx}\\left[3^{4x+5}\\right] = \\ln 3 \\times 4 \\times 3^{4x+5}"
      }
    ]
  },
  {
    "id": "car2020-mc10",
    "topicId": "y12a-1F",
    "c": "1F",
    "t": "Summing an arithmetic series",
    "source": "Caringbah 2020 Trial Q10",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "What is the value of $\\ln 2 + \\ln 4 + \\ln 8 + \\cdots + \\ln 2^{2n}$?",
    "a": "3",
    "opts": [
      "$n^2 \\ln 2$",
      "$n(n+1)\\ln 2$",
      "$n(n+2)\\ln 2$",
      "$n(2n+1)\\ln 2$"
    ],
    "h": "Rewrite each term as a multiple of $\\ln 2$, then identify the arithmetic series $1 + 2 + 3 + \\cdots + 2n$ and use the sum formula.",
    "s": "$\\ln 2 + \\ln 4 + \\cdots + \\ln 2^{2n} = \\ln 2^1 + \\ln 2^2 + \\cdots + \\ln 2^{2n} = (1 + 2 + \\cdots + 2n)\\ln 2$. This is an AP with $a=1$, $l=2n$, $n_{\\text{terms}}=2n$: sum $= \\frac{2n}{2}(1+2n) = n(2n+1)$. So the answer is $n(2n+1)\\ln 2$.",
    "solutionSteps": [
      {
        "explanation": "Rewrite each logarithm term using the log power rule \\(\\ln a^k = k\\ln a\\), expressing everything as a multiple of \\(\\ln 2\\).",
        "workingOut": "\\ln 2^1 + \\ln 2^2 + \\ln 2^3 + \\cdots + \\ln 2^{2n} = (1 + 2 + 3 + \\cdots + 2n)\\ln 2"
      },
      {
        "explanation": "Identify the inner sum as an arithmetic series with first term \\(a = 1\\), last term \\(l = 2n\\), and \\(2n\\) terms in total.",
        "workingOut": "a = 1, quad l = 2n, quad n_{\\text{terms}} = 2n"
      },
      {
        "explanation": "Apply the arithmetic series sum formula \\(S = \\frac{n_{\\text{terms}}}{2}(a + l)\\).",
        "workingOut": "S = \\dfrac{2n}{2}(1 + 2n) = n(1 + 2n)"
      },
      {
        "explanation": "Multiply by \\(\\ln 2\\) to get the final answer.",
        "workingOut": "n(2n+1)\\ln 2"
      }
    ]
  },
  {
    "id": "car2020-q11",
    "topicId": "y11a-2D",
    "c": "2D",
    "t": "Rationalising the denominator",
    "source": "Caringbah 2020 Trial Q11",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Find the values of $a$ and $b$ (in simplified form) such that $\\dfrac{3}{4 - \\sqrt{2}} = a + \\sqrt{b}$.",
    "a": "$a = \\dfrac{6}{7},\\ b = \\dfrac{9}{98}$",
    "opts": [],
    "h": "Rationalise the denominator by multiplying by $\\frac{4+\\sqrt{2}}{4+\\sqrt{2}}$, then match the rational and irrational parts.",
    "s": "$\\frac{3}{4-\\sqrt{2}} \\times \\frac{4+\\sqrt{2}}{4+\\sqrt{2}} = \\frac{12+3\\sqrt{2}}{16-2} = \\frac{12+3\\sqrt{2}}{14} = \\frac{6}{7} + \\frac{3}{14}\\sqrt{2}$. Matching with $a + \\sqrt{b}$: $a = \\frac{6}{7}$ and $\\sqrt{b} = \\frac{3\\sqrt{2}}{14}$, so $b = \\frac{9 \\times 2}{196} = \\frac{18}{196} = \\frac{9}{98}$.",
    "solutionSteps": [
      {
        "explanation": "Rationalise the denominator by multiplying the numerator and denominator by the conjugate \\(4 + \\sqrt{2}\\). This eliminates the surd from the denominator using the difference of squares identity \\((a-b)(a+b) = a^2 - b^2\\).",
        "workingOut": "\\dfrac{3}{4-\\sqrt{2}} \\times \\dfrac{4+\\sqrt{2}}{4+\\sqrt{2}} = \\dfrac{3(4+\\sqrt{2})}{(4)^2 - (\\sqrt{2})^2}"
      },
      {
        "explanation": "Expand the numerator and simplify the denominator.",
        "workingOut": "= \\dfrac{12 + 3\\sqrt{2}}{16 - 2} = \\dfrac{12 + 3\\sqrt{2}}{14}"
      },
      {
        "explanation": "Separate into rational and irrational parts.",
        "workingOut": "= \\dfrac{6}{7} + \\dfrac{3}{14}\\sqrt{2}"
      },
      {
        "explanation": "Match with \\(a + \\sqrt{b}\\): the rational part gives \\(a\\), and the irrational part gives \\(\\sqrt{b} = \\frac{3\\sqrt{2}}{14}\\), so solve for \\(b\\) by squaring.",
        "workingOut": "a = \\dfrac{6}{7}, quad \\sqrt{b} = \\dfrac{3\\sqrt{2}}{14}"
      },
      {
        "explanation": "Square both sides to find \\(b\\).",
        "workingOut": "b = \\left(\\dfrac{3\\sqrt{2}}{14}\\right)^2 = \\dfrac{9 \\times 2}{196} = \\dfrac{18}{196} = \\dfrac{9}{98}"
      }
    ]
  },
  {
    "id": "car2020-q12",
    "topicId": "y11a-6I",
    "c": "6I",
    "t": "The cosine rule",
    "source": "Caringbah 2020 Trial Q12",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "Find the value of $\\theta$, correct to the nearest minute, in a triangle with sides $16$, $12$, and $20$, where $\\theta$ is the angle opposite the side of length $12$.",
    "a": "$\\theta = 36°52'$",
    "opts": [],
    "h": "Apply the cosine rule: $\\cos\\theta = \\frac{a^2 + b^2 - c^2}{2ab}$ where $c$ is the side opposite $\\theta$.",
    "s": "Using the cosine rule with the sides adjacent to $\\theta$ being $16$ and $20$, and the opposite side being $12$: $\\cos\\theta = \\frac{16^2 + 20^2 - 12^2}{2 \\times 16 \\times 20} = \\frac{256 + 400 - 144}{640} = \\frac{512}{640} = \\frac{4}{5}$. Therefore $\\theta = \\cos^{-1}\\!\\left(\\frac{4}{5}\\right) = 36°52'$.",
    "solutionSteps": [
      {
        "explanation": "Apply the cosine rule to find \\(\\theta\\). Label the sides: the two sides forming the angle \\(\\theta\\) are \\(a = 16\\) and \\(b = 20\\), and the side opposite is \\(c = 12\\).",
        "workingOut": "\\cos\\theta = \\dfrac{a^2 + b^2 - c^2}{2ab} = \\dfrac{16^2 + 20^2 - 12^2}{2 \\times 16 \\times 20}"
      },
      {
        "explanation": "Evaluate the numerator and denominator.",
        "workingOut": "= \\dfrac{256 + 400 - 144}{640} = \\dfrac{512}{640}"
      },
      {
        "explanation": "Simplify the fraction.",
        "workingOut": "= \\dfrac{4}{5}"
      },
      {
        "explanation": "Take the inverse cosine to find \\(\\theta\\), then convert the decimal degrees to degrees and minutes.",
        "workingOut": "\\theta = \\cos^{-1}\\!\\left(\\dfrac{4}{5}\\right) \\approx 36.87° = 36°52'"
      }
    ]
  },
  {
    "id": "car2020-q13",
    "topicId": "y12a-4F",
    "c": "4F",
    "t": "Finding areas by integration",
    "source": "Caringbah 2020 Trial Q13",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "The diagram below shows the graph of $y = x^2 - x - 6$. Point $A$ is where the curve crosses the $x$-axis between $x = 0$ and $x = 6$.\n\n(a) What is the coordinate of $A$?\n\n(b) Find the area bounded by the $x$-axis and the curve $y = x^2 - x - 6$ for the interval $0 \\leq x \\leq 6$.",
    "a": "(a) $A = (3,\\ 0)$\n\n(b) $45$ square units",
    "opts": [],
    "h": "For (a), solve $x^2 - x - 6 = 0$. For (b), the curve is below the $x$-axis on $[0,3]$ and above on $[3,6]$, so split the integral and take the absolute value of each part.",
    "s": "(a) $x^2-x-6=0 \\Rightarrow (x-3)(x+2)=0$. For $0 \\leq x \\leq 6$, the x-intercept is $x=3$, so $A=(3,0)$.\n\n(b) The curve is negative on $[0,3]$ and positive on $[3,6]$:\n$A = \\left|\\int_0^3(x^2-x-6)\\,dx\\right| + \\int_3^6(x^2-x-6)\\,dx$\n$= \\left|\\left[\\frac{x^3}{3}-\\frac{x^2}{2}-6x\\right]_0^3\\right| + \\left[\\frac{x^3}{3}-\\frac{x^2}{2}-6x\\right]_3^6$\n$= |-13.5| + 31.5 = 13.5 + 31.5 = 45$ square units.",
    "solutionSteps": [
      {
        "explanation": "For part (a), find the x-intercept by setting \\(y = 0\\) and solving the quadratic.",
        "workingOut": "x^2 - x - 6 = 0 \\implies (x-3)(x+2) = 0 \\implies x = 3 \\text{ or } x = -2"
      },
      {
        "explanation": "Since \\(A\\) is in the interval \\(0 \\leq x \\leq 6\\), the coordinate is \\(A = (3, 0)\\).",
        "workingOut": "A = (3, 0)"
      },
      {
        "explanation": "For part (b), note that the curve is below the \\(x\\)-axis on \\([0,3]\\) (where \\(y < 0\\)) and above on \\([3,6]\\) (where \\(y > 0\\)). Split the integral at \\(x = 3\\).",
        "workingOut": "A = \\left|\\int_0^3(x^2-x-6)\\,dx\\right| + \\int_3^6(x^2-x-6)\\,dx"
      },
      {
        "explanation": "Integrate and evaluate the antiderivative at the endpoints for each sub-interval. At \\(x=3\\): \\(\\frac{27}{3}-\\frac{9}{2}-18 = 9-4.5-18=-13.5\\). At \\(x=0\\): \\(0\\).",
        "workingOut": "\\int_0^3 = -13.5 - 0 = -13.5, quad \\left|-13.5\\right| = 13.5"
      },
      {
        "explanation": "For the second integral: at \\(x=6\\): \\(\\frac{216}{3}-\\frac{36}{2}-36 = 72-18-36=18\\). At \\(x=3\\): \\(-13.5\\).",
        "workingOut": "\\int_3^6 = 18 - (-13.5) = 31.5"
      },
      {
        "explanation": "Add both parts to get the total area.",
        "workingOut": "A = 13.5 + 31.5 = 45 \\text{ square units}"
      }
    ]
  },
  {
    "id": "car2020-q14",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of e^x",
    "source": "Caringbah 2020 Trial Q14",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Differentiate:\n\n(a) $y = x^2 e^x$\n\n(b) $f(x) = \\dfrac{e^x + 1}{2x}$",
    "a": "(a) $y' = xe^x(x+2)$\n\n(b) $f'(x) = \\dfrac{xe^x - e^x - 1}{2x^2}$",
    "opts": [],
    "h": "For (a) use the product rule. For (b) use the quotient rule.",
    "s": "(a) Product rule: $y' = x^2 e^x + 2xe^x = xe^x(x+2)$.\n\n(b) Quotient rule: $f'(x) = \\frac{2x \\cdot e^x - (e^x+1) \\cdot 2}{(2x)^2} = \\frac{2xe^x - 2e^x - 2}{4x^2} = \\frac{xe^x - e^x - 1}{2x^2}$.",
    "solutionSteps": [
      {
        "explanation": "For part (a), apply the product rule \\(\\frac{d}{dx}[uv] = u'v + uv'\\) with \\(u = x^2\\) and \\(v = e^x\\).",
        "workingOut": "y' = 2x \\cdot e^x + x^2 \\cdot e^x"
      },
      {
        "explanation": "Factorise by taking out the common factor \\(xe^x\\).",
        "workingOut": "= xe^x(2 + x) = xe^x(x+2)"
      },
      {
        "explanation": "For part (b), apply the quotient rule \\(\\frac{d}{dx}\\left[\\frac{u}{v}\\right] = \\frac{u'v - uv'}{v^2}\\) with \\(u = e^x+1\\) and \\(v = 2x\\).",
        "workingOut": "f'(x) = \\dfrac{2x \\cdot e^x - (e^x+1) \\cdot 2}{(2x)^2}"
      },
      {
        "explanation": "Expand the numerator and simplify.",
        "workingOut": "= \\dfrac{2xe^x - 2e^x - 2}{4x^2}"
      },
      {
        "explanation": "Cancel the common factor of \\(2\\) from numerator and denominator.",
        "workingOut": "f'(x) = \\dfrac{xe^x - e^x - 1}{2x^2}"
      }
    ]
  },
  {
    "id": "car2020-q15",
    "topicId": "y12a-4H",
    "c": "4H",
    "t": "The trapezoidal rule",
    "source": "Caringbah 2020 Trial Q15",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "Use two applications of the trapezoidal rule to find an approximation to the area given in the diagram. The three parallel heights are $6$ m, $7$ m, and $10$ m, and each strip has width $6$ m.",
    "a": "$90 \\text{ m}^2$",
    "opts": [],
    "h": "Apply the trapezoidal rule: $A \\approx \\frac{h}{2}(y_0 + 2y_1 + y_2)$ where $h$ is the common width and $y_0, y_1, y_2$ are the three heights.",
    "s": "Using the composite trapezoidal rule with $h = 6$, $y_0 = 6$, $y_1 = 7$, $y_2 = 10$: $A \\approx \\frac{6}{2}(6 + 2(7) + 10) = 3(6 + 14 + 10) = 3 \\times 30 = 90$ m².",
    "solutionSteps": [
      {
        "explanation": "Write down the composite trapezoidal rule for two strips (three function values): \\(A \\approx \\frac{h}{2}(y_0 + 2y_1 + y_2)\\), where \\(h\\) is the width of each strip.",
        "workingOut": "A \\approx \\dfrac{h}{2}(y_0 + 2y_1 + y_2)"
      },
      {
        "explanation": "Substitute \\(h = 6\\), \\(y_0 = 6\\), \\(y_1 = 7\\), \\(y_2 = 10\\).",
        "workingOut": "A \\approx \\dfrac{6}{2}(6 + 2(7) + 10) = 3(6 + 14 + 10)"
      },
      {
        "explanation": "Evaluate the sum inside the brackets and multiply.",
        "workingOut": "= 3 \\times 30 = 90 \\text{ m}^2"
      }
    ]
  },
  {
    "id": "car2020-q16",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "source": "Caringbah 2020 Trial Q16",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "$ABC$ is a triangular airfield with $AB = BC = 6.4$ km. The bearing of $B$ from $A$ is $140°$ and the bearing of $C$ from $B$ is $032°$.\n\n(a) Show that $\\angle ABC = 72°$.\n\n(b) Find the area of the airfield, correct to the nearest square kilometre.",
    "a": "(a) $\\angle ABC = \\angle ABN + \\angle NBC = 40° + 32° = 72°$\n\n(b) $\\approx 19 \\text{ km}^2$",
    "opts": [],
    "h": "For (a), use the property that alternate angles on parallel north lines are equal. For (b), use the area formula $A = \\frac{1}{2}ab\\sin C$.",
    "s": "(a) The bearing of $B$ from $A$ is $140°$, so the angle from south at $A$ toward $B$ is $180°-140°=40°$. By alternate angles (parallel north lines), the angle at $B$ from the $A$-direction to north is also $40°$. The bearing of $C$ from $B$ is $032°$, so $\\angle NBC = 32°$. Therefore $\\angle ABC = 40° + 32° = 72°$.\n\n(b) $A = \\frac{1}{2} \\times 6.4 \\times 6.4 \\times \\sin 72° = \\frac{1}{2}(40.96)(0.9511) \\approx 19$ km².",
    "solutionSteps": [
      {
        "explanation": "For (a): The bearing of \\(B\\) from \\(A\\) is \\(140°\\). The angle between the north direction at \\(A\\) and the line \\(AB\\) measured clockwise is \\(140°\\), so the angle between line \\(AB\\) and the south direction is \\(180°-140° = 40°\\).",
        "workingOut": "\\angle \\text{(south at }A\\text{, toward }B) = 180° - 140° = 40°"
      },
      {
        "explanation": "By alternate interior angles on parallel north lines (north at \\(A\\) \\!\\!\\parallel\\!\\! north at \\(B\\)), the angle \\(\\angle ABN\\) (from line \\(BA\\) to north at \\(B\\)) is also \\(40°\\).",
        "workingOut": "\\angle ABN = 40° \\quad (\\text{alternate angles, parallel north lines})"
      },
      {
        "explanation": "The bearing of \\(C\\) from \\(B\\) is \\(032°\\), so \\(\\angle NBC = 32°\\). Adding the two angles at \\(B\\):",
        "workingOut": "\\angle ABC = \\angle ABN + \\angle NBC = 40° + 32° = 72° \\checkmark"
      },
      {
        "explanation": "For (b): use the area formula \\(A = \\frac{1}{2}ab\\sin C\\) with \\(a = b = 6.4\\) km and \\(C = 72°\\).",
        "workingOut": "A = \\tfrac{1}{2} \\times 6.4 \\times 6.4 \\times \\sin 72°"
      },
      {
        "explanation": "Evaluate and round to the nearest square kilometre.",
        "workingOut": "= \\tfrac{1}{2} \\times 40.96 \\times 0.9511 \\approx 19.47 \\approx 19 \\text{ km}^2"
      }
    ]
  },
  {
    "id": "car2020-q17",
    "topicId": "y11a-6G",
    "c": "6G",
    "t": "Trigonometric equations",
    "source": "Caringbah 2020 Trial Q17",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Solve $|2\\cos x - 1| = 1$ for $0 \\leq x \\leq \\pi$.",
    "a": "$x = 0,\\ \\dfrac{\\pi}{2}$",
    "opts": [],
    "h": "Remove the absolute value by considering two cases: $2\\cos x - 1 = 1$ and $2\\cos x - 1 = -1$.",
    "s": "Case 1: $2\\cos x - 1 = 1 \\Rightarrow \\cos x = 1 \\Rightarrow x = 0$.\nCase 2: $2\\cos x - 1 = -1 \\Rightarrow \\cos x = 0 \\Rightarrow x = \\frac{\\pi}{2}$ (within $[0, pi]$).\nSolutions: $x = 0,\\ \\frac{\\pi}{2}$.",
    "solutionSteps": [
      {
        "explanation": "Remove the absolute value by writing two cases: the expression inside equals \\(+1\\) or \\(-1\\).",
        "workingOut": "2\\cos x - 1 = 1 \\quad \\text{or} \\quad 2\\cos x - 1 = -1"
      },
      {
        "explanation": "Solve Case 1: \\(2\\cos x - 1 = 1\\).",
        "workingOut": "2\\cos x = 2 \\implies \\cos x = 1 \\implies x = 0"
      },
      {
        "explanation": "Solve Case 2: \\(2\\cos x - 1 = -1\\).",
        "workingOut": "2\\cos x = 0 \\implies \\cos x = 0 \\implies x = \\dfrac{\\pi}{2}$ (in $[0, pi]$)"
      },
      {
        "explanation": "Verify both solutions are in the domain \\(0 \\leq x \\leq \\pi\\) and state the answer.",
        "workingOut": "x = 0 \\quad \\text{and} \\quad x = \\dfrac{\\pi}{2}"
      }
    ]
  },
  {
    "id": "car2020-q18",
    "topicId": "y12a-3B",
    "c": "3B",
    "t": "Stationary points and turning points",
    "source": "Caringbah 2020 Trial Q18",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Consider the curve $y = 2x^3 - 9x^2 + 12x$.\n\n(a) Find the coordinates of the stationary points and determine their nature.\n\n(b) Show that a point of inflection occurs at $x = \\dfrac{3}{2}$.\n\n(c) Sketch the graph $y = 2x^3 - 9x^2 + 12x$, indicating clearly all important features.",
    "a": "(a) Local maximum at $(1, 5)$, local minimum at $(2, 4)$.\n\n(b) $y'' = 12x - 18 = 0 \\Rightarrow x = \\frac{3}{2}$, and $y''$ changes sign, confirming an inflection point.\n\n(c) See sketch.",
    "opts": [],
    "h": "Differentiate to find $y'$, set $y' = 0$ for stationary points. Use $y''$ to determine nature. For inflection, set $y'' = 0$ and check sign change.",
    "s": "(a) $y' = 6x^2 - 18x + 12 = 6(x-1)(x-2)$. Stationary at $x=1$: $y=5$; $x=2$: $y=4$. $y'' = 12x-18$. At $x=1$: $y''=-6<0$ (max). At $x=2$: $y''=6>0$ (min).\n\n(b) $y'' = 12x - 18 = 0 \\Rightarrow x=\\frac{3}{2}$. At $x=1.25$: $y''=-3<0$; at $x=1.75$: $y''=3>0$. Sign change confirms inflection.",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\(y = 2x^3 - 9x^2 + 12x\\) with respect to \\(x\\) to find the gradient function.",
        "workingOut": "y' = 6x^2 - 18x + 12"
      },
      {
        "explanation": "Set \\(y' = 0\\) to find stationary points. Factorise the quadratic.",
        "workingOut": "6(x^2 - 3x + 2) = 0 \\implies 6(x-1)(x-2) = 0 \\implies x = 1 \\text{ or } x = 2"
      },
      {
        "explanation": "Find the \\(y\\)-coordinates by substituting each \\(x\\) value into the original equation.",
        "workingOut": "x=1: y = 2-9+12 = 5 \\quad (1,5) \\qquad x=2: y = 16-36+24 = 4 \\quad (2,4)"
      },
      {
        "explanation": "Find the second derivative to determine the nature of each stationary point.",
        "workingOut": "y'' = 12x - 18"
      },
      {
        "explanation": "Test each point: at \\(x=1\\), \\(y''=-6<0\\) so \\((1,5)\\) is a local maximum. At \\(x=2\\), \\(y''=6>0\\) so \\((2,4)\\) is a local minimum.",
        "workingOut": "y''(1) = -6 < 0 \\implies \\text{max} \\qquad y''(2) = 6 > 0 \\implies \\text{min}"
      },
      {
        "explanation": "For part (b), set \\(y'' = 0\\) to find the candidate inflection point.",
        "workingOut": "12x - 18 = 0 \\implies x = \\dfrac{18}{12} = \\dfrac{3}{2}"
      },
      {
        "explanation": "Verify by checking that \\(y''\\) changes sign on either side of \\(x = \\frac{3}{2}\\).",
        "workingOut": "y''(1.25) = -3 < 0 \\quad \\text{and} \\quad y''(1.75) = 3 > 0 \\implies \\text{sign change confirms inflection}"
      }
    ]
  },
  {
    "id": "car2020-q19",
    "topicId": "y12a-4C",
    "c": "4C",
    "t": "The definite integral and its properties",
    "source": "Caringbah 2020 Trial Q19",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "The graph of the function $f$ is shown in the diagram. The shaded areas are bounded by $y = f(x)$ and the $x$-axis. The shaded area $A$ is $8$ square units, the shaded area $B$ is $3$ square units and the shaded area $C$ is $1$ square unit. Evaluate $\\displaystyle\\int_{-2}^{5} f(x)\\, dx$.",
    "a": "$6$",
    "opts": [],
    "h": "Use the signed area property: a definite integral equals the area above the $x$-axis minus the area below. Identify where $f$ is positive or negative.",
    "s": "Region $A$ (from $x=-2$ to $0$) is above the $x$-axis: contributes $+8$. Region $B$ (from $0$ to $2$) is below: contributes $-3$. Region $C$ (from $2$ to $5$) is above: contributes $+1$. Total: $\\int_{-2}^{5} f(x)\\,dx = 8 - 3 + 1 = 6$.",
    "solutionSteps": [
      {
        "explanation": "Recall that a definite integral gives the signed area: regions where \\(f(x) > 0\\) (above the \\(x\\)-axis) contribute positively, and regions where \\(f(x) < 0\\) (below) contribute negatively.",
        "workingOut": "\\int_{-2}^{5} f(x)\\,dx = (\\text{area above}) - (\\text{area below})"
      },
      {
        "explanation": "Identify each shaded region: \\(A\\) is above the \\(x\\)-axis (positive contribution), \\(B\\) is below (negative), and \\(C\\) is above (positive).",
        "workingOut": "\\int_{-2}^{5} f(x)\\,dx = +A - B + C"
      },
      {
        "explanation": "Substitute the given area values.",
        "workingOut": "= 8 - 3 + 1 = 6"
      }
    ]
  },
  {
    "id": "car2020-q20",
    "topicId": "y12a-4G",
    "c": "4G",
    "t": "Areas of compound regions",
    "source": "Caringbah 2020 Trial Q20",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "The diagram shows the curves $y = 2 - \\dfrac{3}{x}$ and $y = x - 2$ for $x \\geq 0$.\n\n(a) Find the coordinates of the two points $P$ and $Q$ where the two curves intersect.\n\n(b) Hence, find in simplest form, the area of the shaded region contained between the two curves.",
    "a": "(a) $P(1,\\ -1)$ and $Q(3,\\ 1)$\n\n(b) $(4 - 3\\ln 3)$ square units",
    "opts": [],
    "h": "For (a), equate the two expressions and solve. For (b), integrate the top curve minus the bottom curve between the intersection points.",
    "s": "(a) $2 - \\frac{3}{x} = x - 2 \\Rightarrow 4x - 3 = x^2 - 2x \\Rightarrow x^2 - 4x + 3 = 0 \\Rightarrow (x-1)(x-3) = 0$. So $x=1, y=-1$ giving $P(1,-1)$ and $x=3, y=1$ giving $Q(3,1)$.\n\n(b) $A = \\int_1^3\\left[(2-\\frac{3}{x}) - (x-2)\\right]dx = \\int_1^3\\left(4 - \\frac{3}{x} - x\\right)dx = \\left[4x - 3\\ln x - \\frac{x^2}{2}\\right]_1^3 = (12-3\\ln3-\\frac{9}{2})-(4-0-\\frac{1}{2}) = (4 - 3\\ln 3)$.",
    "solutionSteps": [
      {
        "explanation": "For part (a), find the intersection points by equating the two expressions and rearranging.",
        "workingOut": "2 - \\dfrac{3}{x} = x - 2 \\implies 4x - 3 = x^2 - 2x \\implies x^2 - 4x + 3 = 0"
      },
      {
        "explanation": "Factorise and solve for \\(x\\).",
        "workingOut": "(x-1)(x-3)=0 \\implies x=1 \\text{ or } x=3"
      },
      {
        "explanation": "Find the corresponding \\(y\\) values. At \\(x=1\\): \\(y = 1-2 = -1\\). At \\(x=3\\): \\(y = 3-2 = 1\\).",
        "workingOut": "P(1, -1) \\quad \\text{and} \\quad Q(3, 1)"
      },
      {
        "explanation": "For part (b), the top curve on \\([1,3]\\) is \\(y = 2 - \\frac{3}{x}\\) and the bottom is \\(y = x-2\\). Integrate their difference.",
        "workingOut": "A = \\int_1^3 \\left[(2 - \\tfrac{3}{x}) - (x-2)\\right]dx = \\int_1^3 \\left(4 - \\tfrac{3}{x} - x\\right)dx"
      },
      {
        "explanation": "Find the antiderivative term by term.",
        "workingOut": "= \\left[4x - 3\\ln x - \\dfrac{x^2}{2}\\right]_1^3"
      },
      {
        "explanation": "Evaluate at \\(x=3\\) and \\(x=1\\), then subtract.",
        "workingOut": "= \\left(12 - 3\\ln 3 - \\dfrac{9}{2}\\right) - \\left(4 - 0 - \\dfrac{1}{2}\\right) = 12 - 3\\ln3 - 4.5 - 3.5 = 4 - 3\\ln 3"
      }
    ]
  },
  {
    "id": "car2020-q21",
    "topicId": "y11a-8D",
    "c": "8D",
    "t": "Laws for logarithms",
    "source": "Caringbah 2020 Trial Q21",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "(a) Show that $\\log_x 2 = \\dfrac{1}{\\log_2 x}$.\n\n(b) Solve the equation $\\log_2 x = 4\\log_x 2$.",
    "a": "(a) Change of base proof.\n\n(b) $x = 4$ or $x = \\dfrac{1}{4}$",
    "opts": [],
    "h": "For (a), apply the change of base rule with base 2. For (b), substitute the result from (a) to create a quadratic in $\\log_2 x$.",
    "s": "(a) By the change of base rule: $\\log_x 2 = \\frac{\\log_2 2}{\\log_2 x} = \\frac{1}{\\log_2 x}$ ✓.\n\n(b) Using (a): $\\log_2 x = \\frac{4}{\\log_2 x}$. Let $u = \\log_2 x$: $u^2 = 4 \\Rightarrow u = \\pm 2$. So $\\log_2 x = 2 \\Rightarrow x=4$ or $\\log_2 x = -2 \\Rightarrow x = \\frac{1}{4}$.",
    "solutionSteps": [
      {
        "explanation": "For (a), apply the change of base formula: \\(\\log_x 2 = \\frac{\\log_2 2}{\\log_2 x}\\), because any logarithm can be expressed as a ratio of logarithms to any common base.",
        "workingOut": "\\log_x 2 = \\dfrac{\\log_2 2}{\\log_2 x} = \\dfrac{1}{\\log_2 x} \\checkmark"
      },
      {
        "explanation": "For (b), substitute the result from (a) into the equation \\(\\log_2 x = 4\\log_x 2\\).",
        "workingOut": "\\log_2 x = \\dfrac{4}{\\log_2 x}"
      },
      {
        "explanation": "Let \\(u = \\log_2 x\\) to simplify. Multiply both sides by \\(u\\).",
        "workingOut": "u^2 = 4 \\implies u = \\pm 2"
      },
      {
        "explanation": "Solve for \\(x\\) from \\(\\log_2 x = 2\\).",
        "workingOut": "x = 2^2 = 4"
      },
      {
        "explanation": "Solve for \\(x\\) from \\(\\log_2 x = -2\\).",
        "workingOut": "x = 2^{-2} = \\dfrac{1}{4}"
      }
    ]
  },
  {
    "id": "car2020-q22",
    "topicId": "y12a-10F",
    "c": "10F",
    "t": "Applications of the normal distribution",
    "source": "Caringbah 2020 Trial Q22",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "The completion times for the Oztown triathlon race were normally distributed with mean $60$ minutes and standard deviation $5$ minutes. Using the empirical rule, find Ozzie's completion time if he finished ahead of $84\\%$ of competitors.",
    "a": "$55$ minutes",
    "opts": [],
    "h": "Finishing ahead of $84\\%$ means $84\\%$ had a longer time than Ozzie. By the empirical rule, $50\\% + 34\\% = 84\\%$ of values lie above $\\mu - \\sigma$.",
    "s": "Finishing ahead of $84\\%$ means $84\\%$ had slower (longer) times than Ozzie, so Ozzie's time is at the $16$th percentile. By the empirical rule, $50\\% + 34\\% = 84\\%$ of times lie above $\\mu - \\sigma$. Therefore Ozzie's time $= \\mu - \\sigma = 60 - 5 = 55$ minutes.",
    "solutionSteps": [
      {
        "explanation": "\"Finished ahead of 84%\" means Ozzie was faster than 84% of competitors, so 84% had a longer (slower) time than Ozzie. Ozzie's time corresponds to the 16th percentile.",
        "workingOut": "P(X > t_{\\text{Ozzie}}) = 84\\%"
      },
      {
        "explanation": "By the empirical rule, approximately \\(68\\%\\) of data lies within one standard deviation of the mean, so \\(34\\%\\) lies between \\(\\mu - \\sigma\\) and \\(\\mu\\).",
        "workingOut": "P(X > \\mu - \\sigma) = 50\\% + 34\\% = 84\\%"
      },
      {
        "explanation": "Therefore Ozzie's time equals \\(\\mu - \\sigma\\).",
        "workingOut": "t_{\\text{Ozzie}} = \\mu - \\sigma = 60 - 5 = 55 \\text{ minutes}"
      }
    ]
  },
  {
    "id": "car2020-q23",
    "topicId": "y12a-10A",
    "c": "10A",
    "t": "Probability distributions",
    "source": "Caringbah 2020 Trial Q23",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "The discrete random variable $X$ has a mean of $2$ and probability distribution:\n\n| $x$ | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|\n| $p(x)$ | $0.3$ | $0.45$ | $a$ | $b$ |\n\n(a) Show that the two equations in terms of $a$ and $b$ are $a + b = 0.25$ and $3a + 4b = 0.8$.\n\n(b) Hence find the values of $a$ and $b$.",
    "a": "(a) Shown using sum-to-one and mean conditions.\n\n(b) $a = 0.2,\\ b = 0.05$",
    "opts": [],
    "h": "Use the two conditions: (1) all probabilities sum to 1, and (2) $E(X) = \\sum x \\cdot p(x) = 2$.",
    "s": "(a) Sum = 1: $0.3 + 0.45 + a + b = 1 \\Rightarrow a+b = 0.25$. Mean = 2: $1(0.3)+2(0.45)+3a+4b = 2 \\Rightarrow 1.2 + 3a + 4b = 2 \\Rightarrow 3a+4b = 0.8$ ✓.\n\n(b) $4(a+b) = 1$, subtract: $4a+4b-(3a+4b)=1-0.8 \\Rightarrow a=0.2$, then $b=0.05$.",
    "solutionSteps": [
      {
        "explanation": "For part (a): All probabilities must sum to 1.",
        "workingOut": "0.3 + 0.45 + a + b = 1 \\implies a + b = 0.25"
      },
      {
        "explanation": "The expected value must equal 2: \\(E(X) = \\sum x \\cdot p(x) = 2\\).",
        "workingOut": "1(0.3) + 2(0.45) + 3a + 4b = 2 \\implies 1.2 + 3a + 4b = 2 \\implies 3a + 4b = 0.8"
      },
      {
        "explanation": "For part (b): solve the simultaneous equations. Multiply the first equation by 4.",
        "workingOut": "4a + 4b = 1 \\quad \\cdots (1)"
      },
      {
        "explanation": "Subtract the second equation from (1).",
        "workingOut": "(4a+4b) - (3a+4b) = 1 - 0.8 \\implies a = 0.2"
      },
      {
        "explanation": "Substitute \\(a = 0.2\\) back to find \\(b\\).",
        "workingOut": "0.2 + b = 0.25 \\implies b = 0.05"
      }
    ]
  },
  {
    "id": "car2020-q24",
    "topicId": "y11a-5F",
    "c": "5F",
    "t": "Composite functions",
    "source": "Caringbah 2020 Trial Q24",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Consider the functions $f(x) = e^x$ and $g(x) = \\ln(x-2)$.\n\n(a) Find the composite function $f(g(x))$.\n\n(b) Find the interval notation for the range of the composite function.",
    "a": "(a) $f(g(x)) = x - 2$, for $x > 2$\n\n(b) $(0,\\ +\\infty)$",
    "opts": [],
    "h": "For (a), substitute $g(x)$ into $f$. Note that the domain of $g$ restricts the overall domain. For (b), determine what values $x - 2$ takes when $x > 2$.",
    "s": "(a) $f(g(x)) = e^{\\ln(x-2)} = x-2$ for $x > 2$ (since $\\ln$ requires $x-2 > 0$).\n\n(b) When $x > 2$, $x - 2 > 0$, so the range is $(0, +\\infty)$.",
    "solutionSteps": [
      {
        "explanation": "The domain of \\(g(x) = \\ln(x-2)\\) requires \\(x-2 > 0\\), i.e., \\(x > 2\\). This restricts the domain of the composite function.",
        "workingOut": "\\text{Domain of } g: x > 2"
      },
      {
        "explanation": "Form the composite function by substituting \\(g(x)\\) into \\(f(x) = e^x\\).",
        "workingOut": "f(g(x)) = e^{g(x)} = e^{\\ln(x-2)}"
      },
      {
        "explanation": "Simplify using \\(e^{\\ln u} = u\\).",
        "workingOut": "f(g(x)) = x - 2 \\quad (x > 2)"
      },
      {
        "explanation": "For the range: when \\(x > 2\\), \\(x - 2 > 0\\). The composite function takes all positive values.",
        "workingOut": "\\text{Range} = (0, +\\infty)"
      }
    ]
  },
  {
    "id": "car2020-q25",
    "topicId": "y12a-6B",
    "c": "6B",
    "t": "Differentiating the trig functions",
    "source": "Caringbah 2020 Trial Q25",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "If $y = x\\sin 2x$, find $\\dfrac{dy}{dx}$.",
    "a": "$\\dfrac{dy}{dx} = 2x\\cos 2x + \\sin 2x$",
    "opts": [],
    "h": "Apply the product rule with $u = x$ and $v = \\sin 2x$. Remember the chain rule when differentiating $\\sin 2x$.",
    "s": "Using the product rule with $u = x$ and $v = \\sin 2x$: $\\frac{dy}{dx} = (1)(\\sin 2x) + x(2\\cos 2x) = \\sin 2x + 2x\\cos 2x$.",
    "solutionSteps": [
      {
        "explanation": "Identify \\(u = x\\) and \\(v = \\sin 2x\\) for the product rule \\(\\frac{d}{dx}[uv] = u'v + uv'\\).",
        "workingOut": "u = x, u' = 1 \\qquad v = \\sin 2x, v' = 2\\cos 2x"
      },
      {
        "explanation": "Apply the product rule.",
        "workingOut": "\\dfrac{dy}{dx} = (1)(\\sin 2x) + x(2\\cos 2x)"
      },
      {
        "explanation": "Simplify to the final answer.",
        "workingOut": "= \\sin 2x + 2x\\cos 2x"
      }
    ]
  },
  {
    "id": "car2020-q26",
    "topicId": "y12a-9E",
    "c": "9E",
    "t": "Line of best fit",
    "source": "Caringbah 2020 Trial Q26",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "The table below shows the English marks ($x$) and Mathematics marks ($y$) for a class of 12 students (A–L). Only the English mark is available for student $L$ ($x = 80$).\n\n(a) Calculate the correlation coefficient between $x$ and $y$ for students $A$ to $K$. Describe the nature of the correlation.\n\n(b) Find the equation of the least squares regression line of $y$ on $x$ for students $A$ to $K$. Estimate the Mathematics mark of student $L$.",
    "a": "(a) $r \\approx 0.9$; strong positive correlation.\n\n(b) $y = 18 + 0.72x$; student $L$'s estimated mark $\\approx 76$.",
    "opts": [],
    "h": "Use a calculator in statistics mode. Describe the sign and strength of $r$. Substitute $x = 80$ into the regression line to predict $L$'s mark.",
    "s": "(a) Using a calculator: $r \\approx 0.9$. This indicates a strong positive correlation between English and Mathematics marks.\n\n(b) Regression line: $y = 18 + 0.72x$. For student $L$ with $x = 80$: $y = 18 + 0.72(80) = 18 + 57.6 = 75.6 \\approx 76$.",
    "solutionSteps": [
      {
        "explanation": "Enter the data for students A to K into a calculator and compute the correlation coefficient \\(r\\).",
        "workingOut": "r \\approx 0.9"
      },
      {
        "explanation": "Interpret \\(r\\): since \\(r\\) is close to \\(+1\\), the correlation is strong and positive — as English marks increase, Mathematics marks tend to increase as well.",
        "workingOut": "\\text{Strong positive correlation}"
      },
      {
        "explanation": "Using the calculator's linear regression function, find the least squares regression line.",
        "workingOut": "y = 18 + 0.72x"
      },
      {
        "explanation": "Substitute student \\(L\\)'s English mark \\(x = 80\\) into the regression equation.",
        "workingOut": "y = 18 + 0.72(80) = 18 + 57.6 = 75.6"
      },
      {
        "explanation": "Round to the nearest whole mark.",
        "workingOut": "\\text{Student } L's \\text{ estimated mark} \\approx 76"
      }
    ]
  },
  {
    "id": "car2020-q27",
    "topicId": "y12a-5G",
    "c": "5G",
    "t": "Differentiation of logarithmic functions",
    "source": "Caringbah 2020 Trial Q27",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "If $y = \\dfrac{e^x}{x+1}$, find $\\dfrac{dy}{dx}$.",
    "a": "$\\dfrac{dy}{dx} = \\dfrac{xe^x}{(x+1)^2}$",
    "opts": [],
    "h": "Apply the quotient rule with $u = e^x$ and $v = x+1$.",
    "s": "$\\frac{dy}{dx} = \\frac{(x+1)e^x - e^x(1)}{(x+1)^2} = \\frac{xe^x + e^x - e^x}{(x+1)^2} = \\frac{xe^x}{(x+1)^2}$.",
    "solutionSteps": [
      {
        "explanation": "Apply the quotient rule \\(\\frac{d}{dx}\\left[\\frac{u}{v}\\right] = \\frac{u'v - uv'}{v^2}\\) with \\(u = e^x\\) and \\(v = x+1\\).",
        "workingOut": "\\dfrac{dy}{dx} = \\dfrac{(x+1)e^x - e^x(1)}{(x+1)^2}"
      },
      {
        "explanation": "Expand the numerator.",
        "workingOut": "= \\dfrac{xe^x + e^x - e^x}{(x+1)^2}"
      },
      {
        "explanation": "Simplify by cancelling \\(+e^x\\) and \\(-e^x\\).",
        "workingOut": "= \\dfrac{xe^x}{(x+1)^2}"
      }
    ]
  },
  {
    "id": "car2020-q28",
    "topicId": "y12a-6D",
    "c": "6D",
    "t": "Integrating the trig functions",
    "source": "Caringbah 2020 Trial Q28",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Find $\\displaystyle\\int \\tan^2 x\\, dx$.",
    "a": "$\\tan x - x + C$",
    "opts": [],
    "h": "Use the Pythagorean identity $\\tan^2 x = \\sec^2 x - 1$ to rewrite the integrand in a form that can be integrated directly.",
    "s": "$\\int \\tan^2 x\\,dx = \\int (\\sec^2 x - 1)\\,dx = \\tan x - x + C$.",
    "solutionSteps": [
      {
        "explanation": "Apply the Pythagorean identity \\(\\tan^2 x = \\sec^2 x - 1\\) to rewrite the integrand, since \\(\\sec^2 x\\) has a known antiderivative but \\(\\tan^2 x\\) does not directly.",
        "workingOut": "\\int \\tan^2 x\\,dx = \\int (\\sec^2 x - 1)\\,dx"
      },
      {
        "explanation": "Integrate term by term: \\(\\int \\sec^2 x\\,dx = \\tan x\\) and \\(\\int 1\\,dx = x\\).",
        "workingOut": "= \\tan x - x + C"
      }
    ]
  },
  {
    "id": "car2020-q29",
    "topicId": "y12a-4B",
    "c": "4B",
    "t": "The fundamental theorem of calculus",
    "source": "Caringbah 2020 Trial Q29",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Evaluate $\\displaystyle\\int_0^2 x(x^2-4)^3\\, dx$.",
    "a": "$-32$",
    "opts": [],
    "h": "Use the reverse chain rule (substitution). Let $u = x^2 - 4$ so that $du = 2x\\,dx$.",
    "s": "Let $u = x^2 - 4$, $du = 2x\\,dx$, so $x\\,dx = \\frac{1}{2}du$. When $x=0$, $u=-4$; when $x=2$, $u=0$.\n$\\frac{1}{2}\\int_{-4}^{0} u^3\\,du = \\frac{1}{2}\\left[\\frac{u^4}{4}\\right]_{-4}^{0} = \\frac{1}{8}[0 - (-4)^4] = \\frac{1}{8}(0-256) = -32$.",
    "solutionSteps": [
      {
        "explanation": "Use the substitution \\(u = x^2 - 4\\) to simplify. Differentiate to find \\(du\\).",
        "workingOut": "u = x^2 - 4 \\implies du = 2x\\,dx \\implies x\\,dx = \\dfrac{1}{2}\\,du"
      },
      {
        "explanation": "Change the limits: when \\(x=0\\), \\(u=-4\\); when \\(x=2\\), \\(u=0\\).",
        "workingOut": "x=0 \\implies u = -4 \\qquad x=2 \\implies u = 0"
      },
      {
        "explanation": "Rewrite the integral in terms of \\(u\\).",
        "workingOut": "\\dfrac{1}{2}\\int_{-4}^{0} u^3\\,du"
      },
      {
        "explanation": "Integrate using the power rule.",
        "workingOut": "= \\dfrac{1}{2}\\left[\\dfrac{u^4}{4}\\right]_{-4}^{0} = \\dfrac{1}{8}\\left[u^4\\right]_{-4}^{0}"
      },
      {
        "explanation": "Evaluate at the limits.",
        "workingOut": "= \\dfrac{1}{8}\\left[0 - (-4)^4\\right] = \\dfrac{1}{8}(0 - 256) = -32"
      }
    ]
  },
  {
    "id": "car2020-q30",
    "topicId": "y12a-3G",
    "c": "3G",
    "t": "Applications of maximisation and minimisation",
    "source": "Caringbah 2020 Trial Q30",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "A metal crate of fixed volume $9\\text{ m}^3$ is to be made in the shape of a rectangular prism with length $2x$ metres, width $x$ metres and height $h$ metres.\n\n(a) Show that the area $A\\text{ m}^2$ of metal required is given by $A = 4x^2 + \\dfrac{27}{x}$.\n\n(b) Hence find the minimum area of metal required.",
    "a": "(a) Shown.\n\n(b) $27\\text{ m}^2$",
    "opts": [],
    "h": "For (a), express $h$ from the volume constraint, then substitute into the total surface area formula. For (b), find $dA/dx = 0$ and verify it is a minimum.",
    "s": "(a) $V = 2x \\cdot x \\cdot h = 2x^2 h = 9 \\Rightarrow h = \\frac{9}{2x^2}$. $A = 2(2x)(x) + 2(2x)h + 2(x)h = 4x^2 + 6xh = 4x^2 + 6x\\cdot\\frac{9}{2x^2} = 4x^2 + \\frac{27}{x}$ ✓.\n\n(b) $\\frac{dA}{dx} = 8x - \\frac{27}{x^2} = 0 \\Rightarrow 8x^3 = 27 \\Rightarrow x = \\frac{3}{2}$. $A_{\\min} = 4(\\frac{3}{2})^2 + \\frac{27}{3/2} = 9 + 18 = 27\\text{ m}^2$.",
    "solutionSteps": [
      {
        "explanation": "For (a): use the volume constraint to express \\(h\\) in terms of \\(x\\).",
        "workingOut": "V = 2x \\cdot x \\cdot h = 2x^2 h = 9 \\implies h = \\dfrac{9}{2x^2}"
      },
      {
        "explanation": "Write the total surface area formula for a closed rectangular prism with dimensions \\(2x \\times x \\times h\\).",
        "workingOut": "A = 2(2x)(x) + 2(2x)h + 2(x)h = 4x^2 + 6xh"
      },
      {
        "explanation": "Substitute \\(h = \\frac{9}{2x^2}\\) and simplify.",
        "workingOut": "A = 4x^2 + 6x \\cdot \\dfrac{9}{2x^2} = 4x^2 + \\dfrac{27}{x} \\checkmark"
      },
      {
        "explanation": "For (b): differentiate \\(A\\) with respect to \\(x\\) and set \\(\\frac{dA}{dx} = 0\\).",
        "workingOut": "\\dfrac{dA}{dx} = 8x - \\dfrac{27}{x^2} = 0 \\implies 8x^3 = 27 \\implies x^3 = \\dfrac{27}{8} \\implies x = \\dfrac{3}{2}"
      },
      {
        "explanation": "Verify this is a minimum using the second derivative test.",
        "workingOut": "\\dfrac{d^2A}{dx^2} = 8 + \\dfrac{54}{x^3} > 0 \\implies \\text{minimum}"
      },
      {
        "explanation": "Substitute \\(x = \\frac{3}{2}\\) to find the minimum area.",
        "workingOut": "A_{\\min} = 4\\left(\\dfrac{3}{2}\\right)^2 + \\dfrac{27}{3/2} = 4 \\cdot \\dfrac{9}{4} + 18 = 9 + 18 = 27\\text{ m}^2"
      }
    ]
  },
  {
    "id": "car2020-q31",
    "topicId": "y12a-6E",
    "c": "6E",
    "t": "Applications of integration of trig",
    "source": "Caringbah 2020 Trial Q31",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "At time $t$ hours after $12\\!:\\!00$ am, the height ($h$ metres) of the deck of a boat above the level of the jetty is given by $h = 2\\cos\\!\\left(\\dfrac{4\\pi}{25}t\\right) + 1$. Find, correct to the nearest minute, the first time after $12\\!:\\!00$ am when the deck of the boat is level with the jetty.",
    "a": "$4\\!:\\!10$ am",
    "opts": [],
    "h": "Set $h = 0$ and solve $\\cos\\!\\left(\\frac{4\\pi}{25}t\\right) = -\\frac{1}{2}$. Find the smallest positive $t$ and convert to hours and minutes.",
    "s": "$h=0 \\Rightarrow 2\\cos\\!\\left(\\frac{4\\pi}{25}t\\right)+1=0 \\Rightarrow \\cos\\!\\left(\\frac{4\\pi}{25}t\\right) = -\\frac{1}{2}$. Reference angle: $\\frac{2\\pi}{3}$. In Q2/Q3: $\\frac{4\\pi}{25}t = \\frac{2\\pi}{3}$ or $\\frac{4\\pi}{3}$. First solution: $t = \\frac{25}{6}$ hours $= 4$ h $10$ min $\\Rightarrow 4\\!:\\!10$ am.",
    "solutionSteps": [
      {
        "explanation": "Set \\(h = 0\\) (deck level with jetty) and rearrange.",
        "workingOut": "2\\cos\\!\\left(\\dfrac{4\\pi}{25}t\\right) + 1 = 0 \\implies \\cos\\!\\left(\\dfrac{4\\pi}{25}t\\right) = -\\dfrac{1}{2}"
      },
      {
        "explanation": "The reference angle for \\(\\cos = \\frac{1}{2}\\) is \\(\\frac{\\pi}{3}\\). Since cosine is negative, the solutions are in Q2 and Q3.",
        "workingOut": "\\dfrac{4\\pi}{25}t = \\dfrac{2\\pi}{3} \\quad \\text{or} \\quad \\dfrac{4\\pi}{25}t = \\dfrac{4\\pi}{3}"
      },
      {
        "explanation": "Solve for \\(t\\) from the first (smaller) equation to find the first time.",
        "workingOut": "t = \\dfrac{25}{6} \\text{ hours}"
      },
      {
        "explanation": "Convert \\(\\frac{25}{6}\\) hours to hours and minutes: \\(\\frac{25}{6} = 4\\frac{1}{6}\\) hours \\(= 4\\) hours \\(10\\) minutes.",
        "workingOut": "\\dfrac{1}{6} \\times 60 = 10 \\text{ min} \\implies \\text{4:10 am}"
      }
    ]
  },
  {
    "id": "car2020-q32",
    "topicId": "y12a-2H",
    "c": "2H",
    "t": "Combinations of transformations",
    "source": "Caringbah 2020 Trial Q32",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "The function $f(x) = x^2$ is transformed into a new function whose graph is shown in the diagram. The graph has vertex at $(-1, -3)$ and $y$-intercept at $(0, -5)$. Find the equation of the new function in the form $g(x) = kf(x+b) + c$ for some constants $k$, $b$ and $c$.",
    "a": "$g(x) = -2(x+1)^2 - 3$",
    "opts": [],
    "h": "The vertex is at $(-1,-3)$, giving $b=1$ and $c=-3$. Use the $y$-intercept to find $k$.",
    "s": "The vertex $(-1,-3)$ is below the $x$-axis and the parabola opens downward, so $k < 0$. Form: $g(x) = k(x+1)^2 - 3$. Using $g(0) = -5$: $k(1)^2 - 3 = -5 \\Rightarrow k = -2$. Therefore $g(x) = -2(x+1)^2 - 3$.",
    "solutionSteps": [
      {
        "explanation": "Read the vertex \\((-1, -3)\\) from the diagram. The vertex form \\(g(x) = k(x+b)^2 + c\\) gives \\(b = 1\\) and \\(c = -3\\).",
        "workingOut": "g(x) = k(x+1)^2 - 3"
      },
      {
        "explanation": "Substitute the \\(y\\)-intercept \\((0, -5)\\) to find \\(k\\).",
        "workingOut": "g(0) = k(0+1)^2 - 3 = k - 3 = -5"
      },
      {
        "explanation": "Solve for \\(k\\).",
        "workingOut": "k = -2"
      },
      {
        "explanation": "Verify: \\(g(-1) = -2(0)^2 - 3 = -3\\) ✓ and \\(g(0) = -2(1) - 3 = -5\\) ✓. Write the final equation.",
        "workingOut": "g(x) = -2(x+1)^2 - 3"
      }
    ]
  },
  {
    "id": "car2020-q33",
    "topicId": "y12a-2I",
    "c": "2I",
    "t": "Trigonometric graphs",
    "source": "Caringbah 2020 Trial Q33",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "(a) On the number plane, draw the graphs of $y = \\cos\\pi x$ and $y = 1 - |x|$ for $-3 \\leq x \\leq 3$.\n\n(b) Hence find the number of solutions of the equation $\\cos\\pi x = 1 - |x|$ in the domain $(-\\infty, infty)$.",
    "a": "(a) See sketches.\n\n(b) $5$ solutions",
    "opts": [],
    "h": "For (a), $y = \\cos\\pi x$ has period $2$ and amplitude $1$. $y = 1-|x|$ is a V-shape with vertex at $(0,1)$. For (b), count all intersection points over all real $x$.",
    "s": "(a) $y = \\cos\\pi x$: period $= \\frac{2\\pi}{\\pi} = 2$, amplitude $1$. $y = 1-|x|$: V-shape, vertex $(0,1)$, passes through $(-1,0)$ and $(1,0)$, then is negative for $|x|>1$.\n\n(b) The graphs intersect at $5$ points in the domain $(-\\infty, infty)$.",
    "solutionSteps": [
      {
        "explanation": "Analyse \\(y = \\cos\\pi x\\): it has period \\(\\frac{2\\pi}{\\pi} = 2\\), amplitude \\(1\\), and passes through \\((0,1)\\), \\((1,0)\\), \\((2,-1)\\), \\((-1,0)\\), \\((-2,-1)\\), etc.",
        "workingOut": "\\text{Period} = 2, quad \\text{Amplitude} = 1"
      },
      {
        "explanation": "Analyse \\(y = 1 - |x|\\): it is a V-shape with vertex \\((0,1)\\), crossing the \\(x\\)-axis at \\(x = \\pm 1\\), and is negative for \\(|x| > 1\\).",
        "workingOut": "y = 1 - |x|: \\text{vertex at }(0,1), text{ x-intercepts at }\\pm 1"
      },
      {
        "explanation": "From the graph, the two curves intersect at exactly \\(5\\) points over all real \\(x\\): one at \\(x=0\\) and two pairs of symmetric intersections.",
        "workingOut": "\\text{Number of solutions} = 5"
      }
    ]
  },
  {
    "id": "car2020-q34",
    "topicId": "y12a-6B",
    "c": "6B",
    "t": "Differentiating the trig functions",
    "source": "Caringbah 2020 Trial Q34",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "If $y = \\tan^2 x$, find the values of the constants $a$ and $b$ such that $\\dfrac{d^2y}{dx^2} = ay^2 + by + 2$.",
    "a": "$a = 6,\\ b = 8$",
    "opts": [],
    "h": "Find $y'$ and $y''$, then substitute $y = \\tan^2 x$ to express $y''$ in terms of $y$.",
    "s": "$y' = 2\\tan x \\sec^2 x = 2\\tan x(1+\\tan^2 x)$. $y'' = 2\\sec^2 x + 6\\tan^2 x \\sec^2 x = 2(1+\\tan^2 x) + 6\\tan^2 x(1+\\tan^2 x) = 2 + 8\\tan^2 x + 6\\tan^4 x = 2 + 8y + 6y^2$. So $a = 6$, $b = 8$.",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\(y = \\tan^2 x\\) using the chain rule: bring down the power and multiply by the derivative of \\(\\tan x\\).",
        "workingOut": "\\dfrac{dy}{dx} = 2\\tan x \\cdot \\sec^2 x"
      },
      {
        "explanation": "Use \\(\\sec^2 x = 1 + \\tan^2 x\\) to rewrite.",
        "workingOut": "= 2\\tan x(1 + \\tan^2 x) = 2\\tan x + 2\\tan^3 x"
      },
      {
        "explanation": "Differentiate again to find \\(\\frac{d^2y}{dx^2}\\), applying the product rule and chain rule to each term.",
        "workingOut": "\\dfrac{d^2y}{dx^2} = 2\\sec^2 x + 6\\tan^2 x \\cdot \\sec^2 x"
      },
      {
        "explanation": "Substitute \\(\\sec^2 x = 1 + \\tan^2 x\\) in both terms.",
        "workingOut": "= 2(1+\\tan^2 x) + 6\\tan^2 x(1+\\tan^2 x) = 2 + 8\\tan^2 x + 6\\tan^4 x"
      },
      {
        "explanation": "Replace \\(\\tan^2 x\\) with \\(y\\) and \\(\\tan^4 x\\) with \\(y^2\\).",
        "workingOut": "= 2 + 8y + 6y^2"
      },
      {
        "explanation": "Match coefficients with \\(ay^2 + by + 2\\).",
        "workingOut": "a = 6, quad b = 8"
      }
    ]
  },
  {
    "id": "car2020-q35",
    "topicId": "y12a-10B",
    "c": "10B",
    "t": "Continuous distributions",
    "source": "Caringbah 2020 Trial Q35",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "The continuous random variable $X$ has probability density function $f(x) = \\dfrac{1}{2}\\sin x$ for $0 \\leq x \\leq \\pi$.\n\n(a) Find the cumulative distribution function (CDF).\n\n(b) Find the first quartile of the distribution.",
    "a": "(a) $F(x) = \\dfrac{1}{2}(1 - \\cos x)$\n\n(b) $x = \\dfrac{\\pi}{3}$",
    "opts": [],
    "h": "For (a), integrate $f(x)$ from $0$ to $x$. For (b), set $F(x) = 0.25$ and solve.",
    "s": "(a) $F(x) = \\int_0^x \\frac{1}{2}\\sin t\\,dt = \\left[-\\frac{1}{2}\\cos t\\right]_0^x = -\\frac{1}{2}\\cos x + \\frac{1}{2} = \\frac{1}{2}(1-\\cos x)$.\n\n(b) $F(x) = 0.25$: $\\frac{1}{2}(1-\\cos x) = \\frac{1}{4} \\Rightarrow 1-\\cos x = \\frac{1}{2} \\Rightarrow \\cos x = \\frac{1}{2} \\Rightarrow x = \\frac{\\pi}{3}$.",
    "solutionSteps": [
      {
        "explanation": "For (a), the CDF is the integral of the PDF from the lower bound of the domain to \\(x\\).",
        "workingOut": "F(x) = \\int_0^x \\dfrac{1}{2}\\sin t\\,dt"
      },
      {
        "explanation": "Evaluate the integral.",
        "workingOut": "= \\left[-\\dfrac{1}{2}\\cos t\\right]_0^x = -\\dfrac{1}{2}\\cos x + \\dfrac{1}{2}"
      },
      {
        "explanation": "Write in simplified form.",
        "workingOut": "F(x) = \\dfrac{1}{2}(1-\\cos x)"
      },
      {
        "explanation": "For (b), the first quartile \\(Q_1\\) satisfies \\(F(Q_1) = 0.25\\).",
        "workingOut": "\\dfrac{1}{2}(1-\\cos x) = \\dfrac{1}{4} \\implies 1 - \\cos x = \\dfrac{1}{2}"
      },
      {
        "explanation": "Solve for \\(x\\).",
        "workingOut": "\\cos x = \\dfrac{1}{2} \\implies x = \\dfrac{\\pi}{3}"
      }
    ]
  },
  {
    "id": "car2020-q36",
    "topicId": "y12a-5I",
    "c": "5I",
    "t": "Integration of the reciprocal function",
    "source": "Caringbah 2020 Trial Q36",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "(a) Differentiate $x\\log_e x$.\n\n(b) Hence or otherwise, evaluate (in exact form), $\\displaystyle\\int_1^2 \\log_e x\\, dx$.",
    "a": "(a) $1 + \\log_e x$\n\n(b) $2\\ln 2 - 1$",
    "opts": [],
    "h": "For (a), use the product rule. For (b), use the result from (a) to reverse-engineer the antiderivative of $\\ln x$.",
    "s": "(a) $\\frac{d}{dx}(x\\ln x) = x \\cdot \\frac{1}{x} + \\ln x = 1 + \\ln x$.\n\n(b) Since $\\frac{d}{dx}(x\\ln x) = 1 + \\ln x$, we have $\\int \\ln x\\,dx = x\\ln x - x + C$. So $\\int_1^2 \\ln x\\,dx = [x\\ln x - x]_1^2 = (2\\ln 2 - 2) - (0 - 1) = 2\\ln 2 - 1$.",
    "solutionSteps": [
      {
        "explanation": "For (a), apply the product rule to \\(x \\cdot \\log_e x\\) with \\(u = x\\) and \\(v = \\ln x\\).",
        "workingOut": "\\dfrac{d}{dx}(x\\ln x) = x \\cdot \\dfrac{1}{x} + \\ln x \\cdot 1 = 1 + \\ln x"
      },
      {
        "explanation": "For (b), rearrange the result from (a) to express \\(\\ln x\\) as a derivative: \\(\\ln x = \\frac{d}{dx}(x\\ln x) - 1\\).",
        "workingOut": "\\int \\ln x\\,dx = x\\ln x - x + C"
      },
      {
        "explanation": "Apply the antiderivative to the definite integral.",
        "workingOut": "\\int_1^2 \\ln x\\,dx = \\big[x\\ln x - x\\big]_1^2"
      },
      {
        "explanation": "Evaluate at \\(x=2\\) and \\(x=1\\).",
        "workingOut": "= (2\\ln 2 - 2) - (1 \\cdot \\ln 1 - 1) = (2\\ln 2 - 2) - (0 - 1)"
      },
      {
        "explanation": "Simplify.",
        "workingOut": "= 2\\ln 2 - 2 + 1 = 2\\ln 2 - 1"
      }
    ]
  },
  {
    "id": "car2020-q37",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "source": "Caringbah 2020 Trial Q37",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "At time $t$ years after it was purchased the value $V$ of a car is given by $V = 25\\,000e^{-0.5t}$.\n\n(a) Find the loss in value of the car during the third year.\n\n(b) Find the year in which the car is losing value at a rate of $100 per year.",
    "a": "(a) $\\approx \\$3620$\n\n(b) During the $10$th year",
    "opts": [],
    "h": "For (a), compute $V(2) - V(3)$. For (b), set $|dV/dt| = 100$ and solve for $t$.",
    "s": "(a) Loss $= V(2) - V(3) = 25000e^{-1} - 25000e^{-1.5} = 25000(e^{-1}-e^{-1.5}) \\approx \\$3620$.\n\n(b) $\\frac{dV}{dt} = -12500e^{-0.5t}$. Set $12500e^{-0.5t} = 100 \\Rightarrow e^{-0.5t} = \\frac{1}{125} \\Rightarrow -0.5t = -\\ln 125 \\Rightarrow t = 2\\ln 125 \\approx 9.66$ years, so during the 10th year.",
    "solutionSteps": [
      {
        "explanation": "For (a): the loss during the third year is the value at the start of year 3 (\\(t=2\\)) minus the value at the end (\\(t=3\\)).",
        "workingOut": "\\text{Loss} = V(2) - V(3) = 25000e^{-1} - 25000e^{-1.5}"
      },
      {
        "explanation": "Factor and evaluate numerically.",
        "workingOut": "= 25000(e^{-1} - e^{-1.5}) \\approx 25000(0.3679 - 0.2231) \\approx $3620"
      },
      {
        "explanation": "For (b): differentiate \\(V\\) with respect to \\(t\\) to find the rate of change.",
        "workingOut": "\\dfrac{dV}{dt} = -12500e^{-0.5t}"
      },
      {
        "explanation": "The rate of loss is \\(\\left|\\frac{dV}{dt}\\right| = 100\\). Set up the equation.",
        "workingOut": "12500e^{-0.5t} = 100 \\implies e^{-0.5t} = \\dfrac{1}{125}"
      },
      {
        "explanation": "Take the natural log of both sides and solve for \\(t\\).",
        "workingOut": "-0.5t = -\\ln 125 \\implies t = 2\\ln 125 \\approx 9.66 \\text{ years}"
      },
      {
        "explanation": "Since \\(t \\approx 9.66\\) years (between years 9 and 10), the car loses value at \\(100 per year during the 10th year.\\)",
        "workingOut": "\\text{During the 10th year}"
      }
    ]
  },
  {
    "id": "car2020-q38",
    "topicId": "y12a-1H",
    "c": "1H",
    "t": "The limiting sum of a geometric series",
    "source": "Caringbah 2020 Trial Q38",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "The first term of a geometric series is $16$ and the fourth term is $\\dfrac{1}{4}$.\n\n(a) Find the common ratio.\n\n(b) Find the limiting sum of the series.",
    "a": "(a) $r = \\dfrac{1}{4}$\n\n(b) $S_\\infty = \\dfrac{64}{3} = 21\\dfrac{1}{3}$",
    "opts": [],
    "h": "Use $T_4 = ar^3$ to find $r$. The limiting sum exists when $|r| < 1$: $S_\\infty = \\frac{a}{1-r}$.",
    "s": "(a) $T_4 = ar^3 = 16r^3 = \\frac{1}{4} \\Rightarrow r^3 = \\frac{1}{64} \\Rightarrow r = \\frac{1}{4}$.\n\n(b) $|r| = \\frac{1}{4} < 1$ so $S_\\infty = \\frac{16}{1-1/4} = \\frac{16}{3/4} = \\frac{64}{3} = 21\\frac{1}{3}$.",
    "solutionSteps": [
      {
        "explanation": "Use the formula for the \\(n\\)-th term: \\(T_n = ar^{n-1}\\). With \\(a = 16\\) and \\(T_4 = \\frac{1}{4}\\):",
        "workingOut": "16r^3 = \\dfrac{1}{4} \\implies r^3 = \\dfrac{1}{64}"
      },
      {
        "explanation": "Take the cube root.",
        "workingOut": "r = \\dfrac{1}{4}"
      },
      {
        "explanation": "Since \\(|r| = \\frac{1}{4} < 1\\), the series has a limiting sum. Apply \\(S_\\infty = \\frac{a}{1-r}\\).",
        "workingOut": "S_\\infty = \\dfrac{16}{1 - \\frac{1}{4}} = \\dfrac{16}{\\frac{3}{4}} = \\dfrac{64}{3} = 21\\tfrac{1}{3}"
      }
    ]
  },
  {
    "id": "car2020-q39",
    "topicId": "y12a-7B",
    "c": "7B",
    "t": "Velocity and acceleration as derivatives",
    "source": "Caringbah 2020 Trial Q39",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "A particle is moving in a straight line. At time $t$ seconds it has a displacement $x$ metres from a fixed point $O$ on the line, velocity $v$ ms$^{-1}$, and acceleration $a$ ms$^{-2}$ given by $a = 6t - 12$. Initially, the particle is at rest at $O$.\n\n(a) Find expressions for $v$ and $x$ in terms of $t$.\n\n(b) Find when and where the particle is next at rest.",
    "a": "(a) $v = 3t^2 - 12t$,\\ $x = t^3 - 6t^2$\n\n(b) Next at rest at $t = 4$ s, position $x = -32$ m (32 m to the left of $O$)",
    "opts": [],
    "h": "Integrate $a$ to get $v$, then integrate $v$ to get $x$. Use initial conditions to find constants. For (b), set $v = 0$ and solve, excluding $t = 0$.",
    "s": "(a) $v = \\int(6t-12)\\,dt = 3t^2-12t+C$. At $t=0$, $v=0$: $C=0$. $x = \\int(3t^2-12t)\\,dt = t^3-6t^2+C$. At $t=0$, $x=0$: $C=0$.\n\n(b) $v=0$: $3t^2-12t=0 \\Rightarrow 3t(t-4)=0 \\Rightarrow t=0$ or $t=4$. Next at rest: $t=4$, $x=64-96=-32$ m.",
    "solutionSteps": [
      {
        "explanation": "Integrate the acceleration to find velocity.",
        "workingOut": "v = \\int(6t-12)\\,dt = 3t^2 - 12t + C"
      },
      {
        "explanation": "Apply the initial condition: at \\(t=0\\), \\(v=0\\) (initially at rest).",
        "workingOut": "v(0) = C = 0 \\implies v = 3t^2 - 12t"
      },
      {
        "explanation": "Integrate velocity to find displacement.",
        "workingOut": "x = \\int(3t^2-12t)\\,dt = t^3 - 6t^2 + C"
      },
      {
        "explanation": "Apply the initial condition: at \\(t=0\\), \\(x=0\\) (initially at \\(O\\)).",
        "workingOut": "x(0) = C = 0 \\implies x = t^3 - 6t^2"
      },
      {
        "explanation": "For (b), set \\(v = 0\\) to find when the particle is at rest again.",
        "workingOut": "3t^2 - 12t = 0 \\implies 3t(t-4) = 0 \\implies t = 0 \\text{ or } t = 4"
      },
      {
        "explanation": "Exclude \\(t = 0\\) (the initial condition). The particle is next at rest at \\(t = 4\\) s. Find the position.",
        "workingOut": "x(4) = 4^3 - 6(4^2) = 64 - 96 = -32 \\text{ m}"
      },
      {
        "explanation": "Interpret: \\(x = -32\\) m means the particle is 32 m to the left of \\(O\\).",
        "workingOut": "\\text{At } t=4\\text{ s, particle is at } x=-32\\text{ m (32 m left of }O\\text{)}"
      }
    ]
  },
  {
    "id": "car2020-q40",
    "topicId": "y12a-5J",
    "c": "5J",
    "t": "Applications of integration of log",
    "source": "Caringbah 2020 Trial Q40",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "The diagram shows the graph of the curve $y = \\dfrac{e^x - e^{-x}}{e^x + e^{-x}}$.\n\n(a) Show that the shaded region bounded by the curve, the $x$-axis and the line $x = k$, where $k > 0$, has area $\\ln\\!\\left(\\dfrac{e^k + e^{-k}}{2}\\right)$.\n\n(b) Find, in simplest exact form, the value of $k$ such that the shaded region has area $1$ square unit.",
    "a": "(a) Shown by integrating and simplifying.\n\n(b) $k = \\ln\\!\\left(e + \\sqrt{e^2 - 1}\\right)$",
    "opts": [],
    "h": "For (a), integrate the function and note the antiderivative of $\\frac{u'}{u}$ is $\\ln|u|$. For (b), set the area equal to 1 and solve using a quadratic substitution.",
    "s": "(a) $\\int_0^k \\frac{e^x-e^{-x}}{e^x+e^{-x}}\\,dx = \\left[\\ln(e^x+e^{-x})\\right]_0^k = \\ln(e^k+e^{-k}) - \\ln(e^0+e^0) = \\ln(e^k+e^{-k}) - \\ln 2 = \\ln\\!\\left(\\frac{e^k+e^{-k}}{2}\\right)$ ✓.\n\n(b) $\\ln\\!\\left(\\frac{e^k+e^{-k}}{2}\\right) = 1 \\Rightarrow e^k+e^{-k} = 2e$. Let $m = e^k$: $m + m^{-1} = 2e \\Rightarrow m^2 - 2em + 1 = 0 \\Rightarrow m = e \\pm \\sqrt{e^2-1}$. Since $k>0$, $m > 1$, so $m = e + \\sqrt{e^2-1}$, giving $k = \\ln(e+\\sqrt{e^2-1})$.",
    "solutionSteps": [
      {
        "explanation": "For (a), note that the numerator \\(e^x - e^{-x}\\) is the derivative of the denominator \\(e^x + e^{-x}\\). So the integral is of the form \\(\\int \\frac{u'}{u}\\,dx = \\ln|u| + C\\).",
        "workingOut": "\\int_0^k \\dfrac{e^x - e^{-x}}{e^x + e^{-x}}\\,dx = \\Big[\\ln(e^x + e^{-x})\\Big]_0^k"
      },
      {
        "explanation": "Evaluate at the bounds.",
        "workingOut": "= \\ln(e^k + e^{-k}) - \\ln(e^0 + e^0) = \\ln(e^k + e^{-k}) - \\ln 2"
      },
      {
        "explanation": "Use the log quotient rule to combine into one logarithm.",
        "workingOut": "= \\ln\\!\\left(\\dfrac{e^k + e^{-k}}{2}\\right) \\checkmark"
      },
      {
        "explanation": "For (b): set the area equal to 1 and solve for \\(k\\).",
        "workingOut": "\\ln\\!\\left(\\dfrac{e^k+e^{-k}}{2}\\right) = 1 \\implies e^k + e^{-k} = 2e"
      },
      {
        "explanation": "Let \\(m = e^k\\). Multiply through by \\(m\\) to form a quadratic.",
        "workingOut": "m + m^{-1} = 2e \\implies m^2 - 2em + 1 = 0"
      },
      {
        "explanation": "Apply the quadratic formula.",
        "workingOut": "m = \\dfrac{2e \\pm \\sqrt{4e^2-4}}{2} = e \\pm \\sqrt{e^2-1}"
      },
      {
        "explanation": "Since \\(k > 0\\), we need \\(m = e^k > 1\\). The solution \\(e - \\sqrt{e^2-1} < 1\\), so take the positive root.",
        "workingOut": "m = e + \\sqrt{e^2-1} \\implies k = \\ln\\!\\left(e + \\sqrt{e^2-1}\\right)"
      }
    ]
  }
];
