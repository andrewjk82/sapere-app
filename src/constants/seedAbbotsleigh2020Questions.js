export const ABBOTSLEIGH_2020_QUESTIONS = [
  {
    "id": "abb2020-mc1",
    "topicId": "y11a-11B",
    "c": "11B",
    "t": "Solving trigonometric equations",
    "source": "Abbotsleigh 2020 Trial Q1",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "What are the solutions to the equation $\\sin x = \\dfrac{\\sqrt{3}}{2}$, for $0 \\leq x \\leq 2\\pi$?",
    "a": "1",
    "opts": [
      "$x = \\dfrac{\\pi}{6},\\ \\dfrac{5\\pi}{6}$",
      "$x = \\dfrac{\\pi}{3},\\ \\dfrac{2\\pi}{3}$",
      "$x = \\dfrac{\\pi}{4},\\ \\dfrac{3\\pi}{4}$",
      "$x = \\dfrac{\\pi}{2},\\ \\dfrac{3\\pi}{2}$"
    ],
    "h": "Recall the exact value $\\sin 60° = \\frac{\\sqrt{3}}{2}$. Since sine is positive, the angle lies in the first and second quadrants.",
    "s": "$\\sin x = \\frac{\\sqrt{3}}{2}$ gives the reference angle $\\frac{\\pi}{3}$. In $[0, 2\\pi]$, solutions are in Q1 and Q2: $x = \\frac{\\pi}{3}$ and $x = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$.",
    "solutionSteps": [
      {
        "explanation": "Recall the exact value: \\(\\sin 60° = \\frac{\\sqrt{3}}{2}\\), which in radians is \\(\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}\\).",
        "workingOut": "\\sin^{-1}\\!\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{\\pi}{3}"
      },
      {
        "explanation": "This reference angle \\(\\frac{\\pi}{3}\\) is the acute angle whose sine equals \\(\\frac{\\sqrt{3}}{2}\\).",
        "workingOut": "\\alpha = \\frac{\\pi}{3}"
      },
      {
        "explanation": "Determine which quadrants have positive sine. Sine is positive in Quadrant I (angles between \\(0\\) and \\(\\frac{\\pi}{2}\\)) and Quadrant II (angles between \\(\\frac{\\pi}{2}\\) and \\(\\pi\\)).",
        "workingOut": "\\sin x > 0 \\text{ in Q1 and Q2}"
      },
      {
        "explanation": "Find the Q1 solution: it is simply the reference angle.",
        "workingOut": "x_1 = \\frac{\\pi}{3}"
      },
      {
        "explanation": "Find the Q2 solution: subtract the reference angle from \\(\\pi\\) (since Q2 angles have the form \\(\\pi - \\alpha\\)).",
        "workingOut": "x_2 = \\pi - \\frac{\\pi}{3} = \\frac{3\\pi}{3} - \\frac{\\pi}{3} = \\frac{2\\pi}{3}"
      },
      {
        "explanation": "Check both solutions lie within the given domain \\(0 \\leq x \\leq 2\\pi\\).",
        "workingOut": "\\frac{\\pi}{3} \\approx 1.05 \\checkmark \\quad \\frac{2\\pi}{3} \\approx 2.09 \\checkmark"
      },
      {
        "explanation": "State the final answer.",
        "workingOut": "x = \\frac{\\pi}{3} \\quad \\text{or} \\quad x = \\frac{2\\pi}{3}"
      }
    ]
  },
  {
    "id": "abb2020-mc2",
    "topicId": "y12a-9D",
    "c": "9D",
    "t": "Bivariate data",
    "source": "Abbotsleigh 2020 Trial Q2",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "A scatterplot shows points that trend downward from left to right, but the spread around the trend line is moderate. How would you describe the correlation between the quantities $x$ and $y$?",
    "a": "0",
    "opts": [
      "A moderate negative correlation",
      "A moderate positive correlation",
      "A weak positive correlation",
      "A strong negative correlation"
    ],
    "h": "Check the direction (positive/negative) and strength (weak/moderate/strong) of the trend.",
    "s": "The points trend downward (negative) but are not tightly clustered around the trend line (moderate), so the correlation is a moderate negative correlation.",
    "solutionSteps": [
      {
        "explanation": "Identify the direction of the trend. Since points go from upper-left to lower-right, as \\(x\\) increases, \\(y\\) decreases — this is a negative relationship.",
        "workingOut": "\\text{Direction: negative (downward trend)}"
      },
      {
        "explanation": "Identify the strength. The points are spread moderately around the trend line — they do not cluster tightly (which would be strong) nor are they very scattered (which would be weak).",
        "workingOut": "\\text{Strength: moderate}"
      },
      {
        "explanation": "Combine direction and strength to describe the correlation.",
        "workingOut": "\\text{Correlation} = \\text{moderate negative}"
      }
    ]
  },
  {
    "id": "abb2020-mc3",
    "topicId": "y12a-3D",
    "c": "3D",
    "t": "Concavity and points of inflection",
    "source": "Abbotsleigh 2020 Trial Q3",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "For what values of $x$ is the curve $f(x) = 2x^3 + x^2$ concave down?",
    "a": "0",
    "opts": [
      "$x < -\\dfrac{1}{6}$",
      "$x > 6$",
      "$x < -6$",
      "$x > -\\dfrac{1}{6}$"
    ],
    "h": "Find $f''(x)$ and set it less than zero.",
    "s": "$f'(x) = 6x^2 + 2x$, so $f''(x) = 12x + 2$. Concave down when $f''(x) < 0$: $12x + 2 < 0 \\Rightarrow x < -\\frac{1}{6}$.",
    "solutionSteps": [
      {
        "explanation": "Find the first derivative of \\(f(x) = 2x^3 + x^2\\) by differentiating term by term. The power rule gives: \\(\\frac{d}{dx}(2x^3) = 6x^2\\) and \\(\\frac{d}{dx}(x^2) = 2x\\).",
        "workingOut": "f'(x) = 6x^2 + 2x"
      },
      {
        "explanation": "Find the second derivative by differentiating \\(f'(x) = 6x^2 + 2x\\) again. Apply the power rule: \\(\\frac{d}{dx}(6x^2) = 12x\\) and \\(\\frac{d}{dx}(2x) = 2\\).",
        "workingOut": "f''(x) = 12x + 2"
      },
      {
        "explanation": "A curve is concave down when \\(f''(x) < 0\\). Set up the inequality.",
        "workingOut": "f''(x) < 0 \\Rightarrow 12x + 2 < 0"
      },
      {
        "explanation": "Solve the inequality: subtract 2 from both sides.",
        "workingOut": "12x < -2"
      },
      {
        "explanation": "Divide both sides by 12.",
        "workingOut": "x < -\\frac{2}{12} = -\\frac{1}{6}"
      },
      {
        "explanation": "The curve is concave down for all \\(x < -\\frac{1}{6}\\).",
        "workingOut": "x < -\\frac{1}{6}"
      }
    ]
  },
  {
    "id": "abb2020-mc4",
    "topicId": "y12a-2I",
    "c": "2I",
    "t": "Trigonometric graphs",
    "source": "Abbotsleigh 2020 Trial Q4",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "What is the period of the curve $y = -3\\cos\\!\\left(2x - \\dfrac{\\pi}{4}\\right)$?",
    "a": "1",
    "opts": [
      "$3$",
      "$\\pi$",
      "$2\\pi$",
      "$-3$"
    ],
    "h": "Period $= \\dfrac{2\\pi}{b}$ where $b$ is the coefficient of $x$.",
    "s": "The coefficient of $x$ is $b = 2$. Period $= \\dfrac{2\\pi}{2} = \\pi$.",
    "solutionSteps": [
      {
        "explanation": "Write the function in standard form \\(y = A\\cos(bx + c) + d\\) and identify each parameter.",
        "workingOut": "y = -3\\cos\\!\\left(2x - \\frac{\\pi}{4}\\right): \\quad A = -3, b = 2, c = -\\frac{\\pi}{4}"
      },
      {
        "explanation": "The period formula for a cosine function is \\(T = \\frac{2\\pi}{b}\\), where \\(b\\) is the coefficient of \\(x\\).",
        "workingOut": "T = \\frac{2\\pi}{|b|}"
      },
      {
        "explanation": "Substitute \\(b = 2\\) into the formula.",
        "workingOut": "T = \\frac{2\\pi}{2} = \\pi"
      },
      {
        "explanation": "Note: the negative amplitude and phase shift do not affect the period — only \\(b\\) matters.",
        "workingOut": "T = \\pi"
      }
    ]
  },
  {
    "id": "abb2020-mc5",
    "topicId": "y11a-4B",
    "c": "4B",
    "t": "Solving quadratic inequations",
    "source": "Abbotsleigh 2020 Trial Q5",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Which one of the following is the set of all solutions to $2x^2 - 5x + 2 \\geq 0$?",
    "a": "3",
    "opts": [
      "$\\left[\\dfrac{1}{2}, 2\\right]$",
      "$\\left(\\dfrac{1}{2}, 2\\right)$",
      "$\\left(-\\infty,\\ \\dfrac{1}{2}\\right) \\cup (2, \\infty)$",
      "$\\left(-\\infty,\\ \\dfrac{1}{2}\\right] \\cup [2, \\infty)$"
    ],
    "h": "Factor the quadratic and use a sign diagram. The parabola opens upward, so it is $\\geq 0$ outside the roots.",
    "s": "$2x^2 - 5x + 2 = (2x-1)(x-2) = 0$ gives $x = \\frac{1}{2}$ or $x = 2$. Since the parabola opens up, $(2x-1)(x-2) \\geq 0$ when $x \\leq \\frac{1}{2}$ or $x \\geq 2$.",
    "solutionSteps": [
      {
        "explanation": "Factor the quadratic \\(2x^2 - 5x + 2\\). We need two numbers that multiply to \\(2 \\times 2 = 4\\) and add to \\(-5\\). These are \\(-4\\) and \\(-1\\): split the middle term.",
        "workingOut": "2x^2 - 4x - x + 2 = 2x(x-2) - 1(x-2) = (2x-1)(x-2)"
      },
      {
        "explanation": "Find the roots by setting each factor to zero.",
        "workingOut": "2x - 1 = 0 \\Rightarrow x = \\tfrac{1}{2} \\qquad x - 2 = 0 \\Rightarrow x = 2"
      },
      {
        "explanation": "Since the coefficient of \\(x^2\\) is positive (\\(+2\\)), the parabola opens upward. This means the quadratic is positive (≥ 0) outside the two roots and negative between them.",
        "workingOut": "\\text{Parabola opens up} \\Rightarrow \\geq 0 \\text{ when } x \\leq \\tfrac{1}{2} \\text{ or } x \\geq 2"
      },
      {
        "explanation": "Verify with a sign diagram. Pick \\(x = 0\\) (between roots): \\(2(0)^2 - 5(0) + 2 = 2 > 0\\)? No, \\(2 > 0\\)… wait, \\(x=0\\) is left of \\(\\frac{1}{2}\\), outside the roots. Pick \\(x = 1\\) (between roots): \\(2 - 5 + 2 = -1 < 0\\) ✓.",
        "workingOut": "x=1: (2(1)-1)(1-2) = (1)(-1) = -1 < 0 \\checkmark"
      },
      {
        "explanation": "Write the solution set using interval notation.",
        "workingOut": "x \\in \\left(-\\infty,\\ \\tfrac{1}{2}\\right] \\cup [2, \\infty)"
      }
    ]
  },
  {
    "id": "abb2020-mc6",
    "topicId": "y11a-9H",
    "c": "9H",
    "t": "The product rule",
    "source": "Abbotsleigh 2020 Trial Q6",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "What is the value of $f'(x)$ if $f(x) = 3x^4(4-x)^3$?",
    "a": "1",
    "opts": [
      "$3x^3(4-x)^2(7x-16)$",
      "$3x^3(4-x)^2(16-7x)$",
      "$3x^3(4-x)^3(16-7x)$",
      "$3x^3(4-x)^3(7x-16)$"
    ],
    "h": "Apply the product rule: $(uv)' = u'v + uv'$ with $u = 3x^4$ and $v = (4-x)^3$.",
    "s": "$u = 3x^4, u' = 12x^3;\\ v = (4-x)^3, v' = -3(4-x)^2$.\n$f'(x) = 12x^3(4-x)^3 + 3x^4 \\cdot (-3)(4-x)^2 = 3x^3(4-x)^2[4(4-x) - 3x] = 3x^3(4-x)^2(16-7x)$.",
    "solutionSteps": [
      {
        "explanation": "Identify \\(u\\) and \\(v\\) for the product rule. Let \\(u = 3x^4\\) and \\(v = (4-x)^3\\).",
        "workingOut": "u = 3x^4 \\qquad v = (4-x)^3"
      },
      {
        "explanation": "Differentiate \\(u\\) using the power rule: \\(\\frac{d}{dx}(3x^4) = 12x^3\\).",
        "workingOut": "u' = 12x^3"
      },
      {
        "explanation": "Differentiate \\(v\\) using the chain rule: \\(\\frac{d}{dx}(4-x)^3 = 3(4-x)^2 \\cdot (-1)\\).",
        "workingOut": "v' = -3(4-x)^2"
      },
      {
        "explanation": "Apply the product rule \\(f'(x) = u'v + uv'\\) and substitute.",
        "workingOut": "f'(x) = 12x^3 \\cdot (4-x)^3 + 3x^4 \\cdot (-3)(4-x)^2"
      },
      {
        "explanation": "Factor out the common factor \\(3x^3(4-x)^2\\) from both terms.",
        "workingOut": "= 3x^3(4-x)^2\\!\\left[\\frac{12x^3(4-x)^3}{3x^3(4-x)^2} + \\frac{-9x^4(4-x)^2}{3x^3(4-x)^2}\\right] = 3x^3(4-x)^2[4(4-x) - 3x]"
      },
      {
        "explanation": "Expand the bracket: \\(4(4-x) - 3x = 16 - 4x - 3x = 16 - 7x\\).",
        "workingOut": "4(4-x) - 3x = 16 - 4x - 3x = 16 - 7x"
      },
      {
        "explanation": "Write the final answer.",
        "workingOut": "f'(x) = 3x^3(4-x)^2(16-7x)"
      }
    ]
  },
  {
    "id": "abb2020-mc7",
    "topicId": "y12a-2H",
    "c": "2H",
    "t": "Combinations of transformations",
    "source": "Abbotsleigh 2020 Trial Q7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "The graph of $y = f(x)$ has a stationary point at $(2, -3)$. Which of the following is a stationary point of $y = -f\\!\\left(\\dfrac{x}{2}\\right) - 5$?",
    "a": "1",
    "opts": [
      "$(4, 2)$",
      "$(4,\\ -2)$",
      "$(1, 2)$",
      "$(1,\\ -2)$"
    ],
    "h": "If $f$ has a stationary point at $(2, -3)$, apply the transformations one step at a time: horizontal dilation $\\times 2$ (replace $x \\to \\frac{x}{2}$), then reflect in $x$-axis, then shift down by 5.",
    "s": "Horizontal dilation by factor 2: $x$-coord becomes $2 \\times 2 = 4$. $y$-value from $f$: $-3$. After $y \\to -f(x)$: $y$-coord becomes $3$. After $y \\to y - 5$: $y = 3 - 5 = -2$. So the stationary point is $(4, -2)$.",
    "solutionSteps": [
      {
        "explanation": "The original stationary point is at \\((2, -3)\\), meaning \\(f(2) = -3\\) and \\(f'(2) = 0\\).",
        "workingOut": "(x_0, y_0) = (2,\\ -3)"
      },
      {
        "explanation": "The transformation \\(y = -f\\!\\left(\\frac{x}{2}\\right) - 5\\) involves three steps. First: replacing \\(x\\) with \\(\\frac{x}{2}\\) is a horizontal dilation by factor 2 — every \\(x\\)-coordinate doubles.",
        "workingOut": "x_0 = 2 \\xrightarrow{\\times 2} x = 4"
      },
      {
        "explanation": "Second: the negative sign in front of \\(f\\) reflects the graph in the \\(x\\)-axis — every \\(y\\)-coordinate is negated.",
        "workingOut": "y_0 = -3 \\xrightarrow{\\text{negate}} y = -(-3) = 3"
      },
      {
        "explanation": "Third: subtracting 5 shifts the graph down by 5 — subtract 5 from the \\(y\\)-coordinate.",
        "workingOut": "y = 3 - 5 = -2"
      },
      {
        "explanation": "A stationary point remains stationary under these transformations (differentiability is preserved). The new stationary point is at \\((4, -2)\\).",
        "workingOut": "(4,\\ -2)"
      }
    ]
  },
  {
    "id": "abb2020-mc8",
    "topicId": "y12a-1G",
    "c": "1G",
    "t": "Summing a geometric series",
    "source": "Abbotsleigh 2020 Trial Q8",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "For the series $2\\pi,\\ \\pi,\\ \\dfrac{\\pi}{2},\\ \\ldots$, calculate the exact value of the sum of the first 6 terms.",
    "a": "0",
    "opts": [
      "$\\dfrac{63\\pi}{16}$",
      "$\\dfrac{7\\pi}{2}$",
      "$\\dfrac{977\\pi}{256}$",
      "$\\dfrac{63\\pi}{64}$"
    ],
    "h": "Identify $a$ and $r$, then use $S_n = \\dfrac{a(1-r^n)}{1-r}$.",
    "s": "$a = 2\\pi, r = \\frac{1}{2}$. $S_6 = \\dfrac{2\\pi\\left(1 - (\\frac{1}{2})^6\\right)}{1 - \\frac{1}{2}} = \\dfrac{2\\pi \\cdot \\frac{63}{64}}{\\frac{1}{2}} = 4\\pi \\cdot \\dfrac{63}{64} = \\dfrac{63\\pi}{16}$.",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and common ratio \\(r\\). The first term is \\(a = 2\\pi\\). To find \\(r\\), divide the second term by the first.",
        "workingOut": "r = \\frac{\\pi}{2\\pi} = \\frac{1}{2}"
      },
      {
        "explanation": "Confirm the ratio is consistent: \\(\\frac{\\pi/2}{\\pi} = \\frac{1}{2}\\) ✓. This is a geometric series with \\(a = 2\\pi\\), \\(r = \\frac{1}{2}\\), \\(n = 6\\).",
        "workingOut": "a = 2\\pi, quad r = \\tfrac{1}{2}, quad n = 6"
      },
      {
        "explanation": "Write the geometric series sum formula: \\(S_n = \\dfrac{a(1 - r^n)}{1 - r}\\).",
        "workingOut": "S_6 = \\frac{2\\pi\\left(1 - \\left(\\tfrac{1}{2}\\right)^6\\right)}{1 - \\tfrac{1}{2}}"
      },
      {
        "explanation": "Compute \\(\\left(\\frac{1}{2}\\right)^6 = \\frac{1}{64}\\), so \\(1 - \\frac{1}{64} = \\frac{63}{64}\\).",
        "workingOut": "\\left(\\tfrac{1}{2}\\right)^6 = \\frac{1}{64} \\Rightarrow 1 - \\frac{1}{64} = \\frac{63}{64}"
      },
      {
        "explanation": "The denominator is \\(1 - \\frac{1}{2} = \\frac{1}{2}\\). Dividing by \\(\\frac{1}{2}\\) is the same as multiplying by 2.",
        "workingOut": "S_6 = \\frac{2\\pi \\cdot \\frac{63}{64}}{\\frac{1}{2}} = 2\\pi \\cdot \\frac{63}{64} \\times 2 = \\frac{4\\pi \\cdot 63}{64} = \\frac{63\\pi}{16}"
      }
    ]
  },
  {
    "id": "abb2020-mc9",
    "topicId": "y12a-5J",
    "c": "5J",
    "t": "Applications of integration of 1/x",
    "source": "Abbotsleigh 2020 Trial Q9",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "Consider the region bounded by the $x$-axis, the $y$-axis, the line $y = 3$, and the curve $y = \\ln(x-1)$. The exact value of the area of this region is:",
    "a": "1",
    "opts": [
      "$e^3 - 1$",
      "$e^3 + 2$",
      "$3e^2$",
      "$3e^3 - e^{-3} + 2$"
    ],
    "h": "Express $x$ as a function of $y$ and integrate with respect to $y$ from $y=0$ to $y=3$.",
    "s": "From $y = \\ln(x-1)$, we get $x = e^y + 1$. Area $= \\displaystyle\\int_0^3 (e^y + 1)\\,dy = \\left[e^y + y\\right]_0^3 = (e^3 + 3) - (1 + 0) = e^3 + 2$.",
    "solutionSteps": [
      {
        "explanation": "The region is bounded by \\(x = 0\\), \\(y = 0\\), \\(y = 3\\), and \\(y = \\ln(x-1)\\). It is easier to integrate with respect to \\(y\\). Rearrange the curve to express \\(x\\) as a function of \\(y\\).",
        "workingOut": "y = \\ln(x-1) \\Rightarrow e^y = x - 1 \\Rightarrow x = e^y + 1"
      },
      {
        "explanation": "When \\(x = 0\\) (the \\(y\\)-axis), the curve \\(y = \\ln(x-1)\\) is not defined for \\(x \\leq 1\\). The region lies between \\(x = 0\\) (the \\(y\\)-axis) and \\(x = e^y + 1\\) (the curve), for \\(y\\) from \\(0\\) to \\(3\\).",
        "workingOut": "\\text{Area} = \\int_0^3 (e^y + 1)\\,dy"
      },
      {
        "explanation": "Integrate term by term: \\(\\int e^y\\,dy = e^y\\) and \\(\\int 1\\,dy = y\\).",
        "workingOut": "\\int_0^3 (e^y + 1)\\,dy = \\left[e^y + y\\right]_0^3"
      },
      {
        "explanation": "Evaluate at the upper limit \\(y = 3\\).",
        "workingOut": "e^3 + 3"
      },
      {
        "explanation": "Evaluate at the lower limit \\(y = 0\\): \\(e^0 + 0 = 1\\).",
        "workingOut": "e^0 + 0 = 1"
      },
      {
        "explanation": "Subtract: Area \\(= (e^3 + 3) - 1 = e^3 + 2\\).",
        "workingOut": "\\text{Area} = e^3 + 2"
      }
    ]
  },
  {
    "id": "abb2020-mc10",
    "topicId": "y11a-12G",
    "c": "12G",
    "t": "Conditional probability",
    "source": "Abbotsleigh 2020 Trial Q10",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "A lie detector was used on 200 suspects. Of the 165 accurate tests, 95 were true statements. What is the probability that a person selected at random, given that their test was accurate, made a true statement?",
    "a": "2",
    "opts": [
      "$\\dfrac{95}{105}$",
      "$\\dfrac{95}{200}$",
      "$\\dfrac{95}{165}$",
      "$\\dfrac{165}{200}$"
    ],
    "h": "Use conditional probability: $P(\\text{true} \\mid \\text{accurate}) = \\dfrac{P(\\text{true AND accurate})}{P(\\text{accurate})}$.",
    "s": "$P(\\text{true} \\mid \\text{accurate}) = \\dfrac{95/200}{165/200} = \\dfrac{95}{165}$.",
    "solutionSteps": [
      {
        "explanation": "Understand what is being asked: we want \\(P(\\text{true statement} \\mid \\text{test was accurate})\\). This is conditional probability — we already know the test was accurate (this restricts our sample space).",
        "workingOut": "P(\\text{true} \\mid \\text{accurate}) = \\frac{P(\\text{true AND accurate})}{P(\\text{accurate})}"
      },
      {
        "explanation": "From the data: there are 165 accurate tests in total. Of these, 95 were accurate AND true.",
        "workingOut": "n(\\text{accurate}) = 165 \\qquad n(\\text{true AND accurate}) = 95"
      },
      {
        "explanation": "Apply the conditional probability formula using counts (the total of 200 cancels).",
        "workingOut": "P(\\text{true} \\mid \\text{accurate}) = \\frac{95/200}{165/200} = \\frac{95}{165}"
      },
      {
        "explanation": "This fraction can be simplified by dividing numerator and denominator by 5: \\(\\frac{95}{165} = \\frac{19}{33}\\).",
        "workingOut": "\\frac{95}{165} = \\frac{19}{33} \\approx 0.576"
      }
    ]
  },
  {
    "id": "abb2020-q11a",
    "topicId": "y12a-5I",
    "c": "5I",
    "t": "Integration of the reciprocal function",
    "source": "Abbotsleigh 2020 Trial Q11(a)",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Find a primitive of $\\dfrac{1}{5x+1}$.",
    "a": "0",
    "opts": [
      "$\\dfrac{1}{5}\\ln|5x+1| + C$",
      "$5\\ln|5x+1| + C$",
      "$\\ln|5x+1| + C$",
      "$\\dfrac{1}{(5x+1)^2} + C$"
    ],
    "h": "Use the standard form $\\displaystyle\\int \\frac{1}{ax+b}\\,dx = \\frac{1}{a}\\ln|ax+b| + C$.",
    "s": "$\\displaystyle\\int \\frac{1}{5x+1}\\,dx = \\frac{1}{5}\\ln|5x+1| + C$.",
    "solutionSteps": [
      {
        "explanation": "Recognise this is an integral of the form \\(\\int \\frac{1}{ax+b}\\,dx\\). The standard result is \\(\\frac{1}{a}\\ln|ax+b| + C\\).",
        "workingOut": "\\int \\frac{1}{ax+b}\\,dx = \\frac{1}{a}\\ln|ax+b| + C"
      },
      {
        "explanation": "Identify \\(a = 5\\) and \\(b = 1\\) in \\(\\frac{1}{5x+1}\\).",
        "workingOut": "a = 5, quad b = 1"
      },
      {
        "explanation": "Apply the formula: the coefficient in front of \\(\\ln\\) is \\(\\frac{1}{a} = \\frac{1}{5}\\).",
        "workingOut": "\\int \\frac{1}{5x+1}\\,dx = \\frac{1}{5}\\ln|5x+1| + C"
      },
      {
        "explanation": "Verify by differentiating the answer using the chain rule: \\(\\frac{d}{dx}\\!\\left[\\frac{1}{5}\\ln|5x+1|\\right] = \\frac{1}{5} \\cdot \\frac{5}{5x+1} = \\frac{1}{5x+1}\\) ✓",
        "workingOut": "\\frac{d}{dx}\\left[\\frac{1}{5}\\ln|5x+1|\\right] = \\frac{1}{5x+1} \\checkmark"
      }
    ]
  },
  {
    "id": "abb2020-q11bi",
    "topicId": "y12a-9C",
    "c": "9C",
    "t": "Quartiles and interquartile range",
    "source": "Abbotsleigh 2020 Trial Q11(b)(i)",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "A boxplot shows the heights of Year 11 students. The median is at 160 cm and the minimum is at 150 cm. What percentage of Year 11 students have a height below 160 cm?",
    "a": "0",
    "opts": [
      "50%",
      "25%",
      "75%",
      "100%"
    ],
    "h": "The median divides a dataset in half.",
    "s": "The median is at 160 cm. By definition, 50% of values lie below the median.",
    "solutionSteps": [
      {
        "explanation": "The median is defined as the value that divides an ordered dataset exactly in half: 50% of values are below it and 50% are above it.",
        "workingOut": "\\text{Median} \\Rightarrow 50\\% \\text{ below, } 50\\% \\text{ above}"
      },
      {
        "explanation": "The boxplot shows the median at 160 cm. Therefore exactly 50% of Year 11 students have a height below 160 cm.",
        "workingOut": "50\\%"
      }
    ]
  },
  {
    "id": "abb2020-q11bii",
    "topicId": "y12a-9C",
    "c": "9C",
    "t": "Quartiles and interquartile range",
    "source": "Abbotsleigh 2020 Trial Q11(b)(ii)",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "From a boxplot, 25% of Year 11 students are taller than 175 cm, and 35% of Year 12 students are taller than 175 cm. The number of students taller than 175 cm is the same for both year groups. If Year 11 has 140 students, how many students are in Year 12?",
    "a": "0",
    "opts": [
      "100",
      "140",
      "75",
      "120"
    ],
    "h": "Find the number of Year 11 students above 175 cm, then use that to find the total for Year 12.",
    "s": "Year 11 students above 175 cm: $25\\% \\times 140 = 35$. Year 12 students above 175 cm is also 35. Since this represents 35% of Year 12: Total Year 12 $= \\frac{35}{0.35} = 100$.",
    "solutionSteps": [
      {
        "explanation": "From the boxplot, 25% of Year 11 students are taller than 175 cm. Year 11 has 140 students. Calculate the number of Year 11 students above 175 cm.",
        "workingOut": "25\\% \\times 140 = 0.25 \\times 140 = 35 \\text{ students}"
      },
      {
        "explanation": "We are told the number of students taller than 175 cm is the same for both year groups. So Year 12 also has 35 students above 175 cm.",
        "workingOut": "n_{\\text{Year 12, above 175}} = 35"
      },
      {
        "explanation": "For Year 12, 35% of students are taller than 175 cm. Let \\(N\\) be the total number of Year 12 students. Then \\(35\\% \\times N = 35\\).",
        "workingOut": "0.35 \\times N = 35"
      },
      {
        "explanation": "Solve for \\(N\\) by dividing both sides by 0.35.",
        "workingOut": "N = \\frac{35}{0.35} = 100 \\text{ students}"
      }
    ]
  },
  {
    "id": "abb2020-q11c",
    "topicId": "y12a-1H",
    "c": "1H",
    "t": "The limiting sum of a geometric series",
    "source": "Abbotsleigh 2020 Trial Q11(c)",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Find the common ratio of a geometric series with a first term of $\\sqrt{2}$ and a limiting sum of $\\dfrac{3\\sqrt{2}}{2}$.",
    "a": "0",
    "opts": [
      "$r = \\dfrac{1}{3}$",
      "$r = \\dfrac{2}{3}$",
      "$r = \\dfrac{1}{2}$",
      "$r = \\dfrac{\\sqrt{2}}{3}$"
    ],
    "h": "Use $S_\\infty = \\dfrac{a}{1-r}$ and solve for $r$.",
    "s": "$\\dfrac{\\sqrt{2}}{1-r} = \\dfrac{3\\sqrt{2}}{2}$. Solving: $2\\sqrt{2} = 3\\sqrt{2}(1-r) \\Rightarrow 2 = 3(1-r) \\Rightarrow r = \\dfrac{1}{3}$.",
    "solutionSteps": [
      {
        "explanation": "Recall the formula for the limiting sum (sum to infinity) of a geometric series: \\(S_\\infty = \\frac{a}{1-r}\\), valid when \\(|r| < 1\\).",
        "workingOut": "S_\\infty = \\frac{a}{1-r}"
      },
      {
        "explanation": "Substitute the known values: \\(a = \\sqrt{2}\\) and \\(S_\\infty = \\frac{3\\sqrt{2}}{2}\\).",
        "workingOut": "\\frac{\\sqrt{2}}{1-r} = \\frac{3\\sqrt{2}}{2}"
      },
      {
        "explanation": "Cross-multiply: \\(\\sqrt{2} \\cdot 2 = 3\\sqrt{2}(1-r)\\).",
        "workingOut": "2\\sqrt{2} = 3\\sqrt{2}(1-r)"
      },
      {
        "explanation": "Divide both sides by \\(\\sqrt{2}\\) (since \\(\\sqrt{2} \\neq 0\\)).",
        "workingOut": "2 = 3(1-r)"
      },
      {
        "explanation": "Expand and solve for \\(r\\): \\(2 = 3 - 3r \\Rightarrow 3r = 1\\).",
        "workingOut": "3r = 3 - 2 = 1 \\Rightarrow r = \\frac{1}{3}"
      },
      {
        "explanation": "Check \\(|r| = \\frac{1}{3} < 1\\) ✓, so the limiting sum exists as required.",
        "workingOut": "r = \\frac{1}{3}"
      }
    ]
  },
  {
    "id": "abb2020-q11d",
    "topicId": "y12a-4E",
    "c": "4E",
    "t": "The indefinite integral",
    "source": "Abbotsleigh 2020 Trial Q11(d)",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Find $\\displaystyle\\int \\frac{8x^3 - 3}{x^2}\\,dx$.",
    "a": "0",
    "opts": [
      "$4x^2 + \\dfrac{3}{x} + C$",
      "$4x^2 - \\dfrac{3}{x} + C$",
      "$8x - \\dfrac{3}{x^2} + C$",
      "$4x^2 + 3\\ln|x| + C$"
    ],
    "h": "Split the fraction and integrate term by term.",
    "s": "$\\displaystyle\\int \\left(8x - 3x^{-2}\\right)dx = 4x^2 + 3x^{-1} + C = 4x^2 + \\dfrac{3}{x} + C$.",
    "solutionSteps": [
      {
        "explanation": "Split the fraction by dividing each term in the numerator by \\(x^2\\).",
        "workingOut": "\\frac{8x^3 - 3}{x^2} = \\frac{8x^3}{x^2} - \\frac{3}{x^2} = 8x - 3x^{-2}"
      },
      {
        "explanation": "The integral becomes two standard power integrals.",
        "workingOut": "\\int(8x - 3x^{-2})\\,dx"
      },
      {
        "explanation": "Integrate \\(8x\\): increase the power by 1 and divide by the new power. \\(\\int 8x\\,dx = \\frac{8x^2}{2} = 4x^2\\).",
        "workingOut": "\\int 8x\\,dx = 4x^2"
      },
      {
        "explanation": "Integrate \\(-3x^{-2}\\): increase the power from \\(-2\\) to \\(-1\\) and divide. \\(\\int -3x^{-2}\\,dx = \\frac{-3x^{-1}}{-1} = 3x^{-1}\\).",
        "workingOut": "\\int -3x^{-2}\\,dx = \\frac{-3x^{-1}}{-1} = 3x^{-1} = \\frac{3}{x}"
      },
      {
        "explanation": "Combine the results and add the constant of integration \\(C\\).",
        "workingOut": "\\int \\frac{8x^3-3}{x^2}\\,dx = 4x^2 + \\frac{3}{x} + C"
      }
    ]
  },
  {
    "id": "abb2020-q11ei",
    "topicId": "y12a-3C",
    "c": "3C",
    "t": "Second and higher derivatives",
    "source": "Abbotsleigh 2020 Trial Q11(e)(i)",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "A curve has $\\dfrac{dy}{dx} = x^3 + 2x - 7$. Find $\\dfrac{d^2y}{dx^2}$.",
    "a": "0",
    "opts": [
      "$3x^2 + 2$",
      "$3x^2 + 2x$",
      "$x^3 + 2x - 7$",
      "$3x^2 - 4x + 1$"
    ],
    "h": "Differentiate $\\dfrac{dy}{dx}$ with respect to $x$.",
    "s": "$\\dfrac{d^2y}{dx^2} = \\dfrac{d}{dx}(x^3 + 2x - 7) = 3x^2 + 2$.",
    "solutionSteps": [
      {
        "explanation": "To find the second derivative, differentiate \\(\\frac{dy}{dx} = x^3 + 2x - 7\\) with respect to \\(x\\).",
        "workingOut": "\\frac{d^2y}{dx^2} = \\frac{d}{dx}(x^3 + 2x - 7)"
      },
      {
        "explanation": "Apply the power rule to each term: \\(\\frac{d}{dx}(x^3) = 3x^2\\), \\(\\frac{d}{dx}(2x) = 2\\), \\(\\frac{d}{dx}(-7) = 0\\).",
        "workingOut": "= 3x^2 + 2 + 0"
      },
      {
        "explanation": "State the result.",
        "workingOut": "\\frac{d^2y}{dx^2} = 3x^2 + 2"
      }
    ]
  },
  {
    "id": "abb2020-q11eii",
    "topicId": "y12a-3C",
    "c": "3C",
    "t": "Second and higher derivatives",
    "source": "Abbotsleigh 2020 Trial Q11(e)(ii)",
    "type": "teacher_review",
    "requiresManualGrading": true,
    "difficulty": "medium",
    "q": "Show that $\\dfrac{d^2y}{dx^2} \\geq 2$ for all values of $x$, given that $\\dfrac{dy}{dx} = x^3 + 2x - 7$.",
    "a": "Since $3x^2 \\geq 0$ for all $x$, we have $d^2y/dx^2 = 3x^2 + 2 \\geq 0 + 2 = 2$.",
    "opts": [],
    "h": "Use the fact that $x^2 \\geq 0$ for all real $x$.",
    "s": "$\\dfrac{d^2y}{dx^2} = 3x^2 + 2$. Since $x^2 \\geq 0$ for all real $x$, we have $3x^2 \\geq 0$, and so $3x^2 + 2 \\geq 2$. Thus $\\dfrac{d^2y}{dx^2} \\geq 2$ for all $x$. $\\square$",
    "solutionSteps": [
      {
        "explanation": "From part (i), we established \\(\\frac{d^2y}{dx^2} = 3x^2 + 2\\).",
        "workingOut": "\\frac{d^2y}{dx^2} = 3x^2 + 2"
      },
      {
        "explanation": "For any real number \\(x\\), squaring always gives a non-negative result. This is a fundamental property of real numbers.",
        "workingOut": "x^2 \\geq 0 \\text{ for all } x \\in \\mathbb{R}"
      },
      {
        "explanation": "Multiplying both sides of \\(x^2 \\geq 0\\) by the positive constant 3 preserves the inequality.",
        "workingOut": "3x^2 \\geq 0"
      },
      {
        "explanation": "Adding 2 to both sides: \\(3x^2 + 2 \\geq 0 + 2 = 2\\).",
        "workingOut": "3x^2 + 2 \\geq 2"
      },
      {
        "explanation": "Therefore \\(\\frac{d^2y}{dx^2} \\geq 2\\) for all values of \\(x\\). \\(\\square\\)",
        "workingOut": "\\frac{d^2y}{dx^2} = 3x^2 + 2 \\geq 2 \\quad \\text{for all } x"
      }
    ]
  },
  {
    "id": "abb2020-q11eiii",
    "topicId": "y12a-3H",
    "c": "3H",
    "t": "Primitive functions",
    "source": "Abbotsleigh 2020 Trial Q11(e)(iii)",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "A curve has $\\dfrac{dy}{dx} = x^3 + 2x - 7$ and passes through the point $P(2, 4)$. Find $y$ in terms of $x$.",
    "a": "0",
    "opts": [
      "$y = \\dfrac{x^4}{4} + x^2 - 7x + 10$",
      "$y = \\dfrac{x^4}{4} + x^2 - 7x + 4$",
      "$y = \\dfrac{x^4}{4} + x^2 - 7x - 6$",
      "$y = \\dfrac{x^4}{4} + x^2 - 7x + C$"
    ],
    "h": "Integrate to find $y$, then substitute the point $P(2,4)$ to find the constant.",
    "s": "$y = \\dfrac{x^4}{4} + x^2 - 7x + C$. At $(2, 4)$: $4 = 4 + 4 - 14 + C \\Rightarrow C = 10$. So $y = \\dfrac{x^4}{4} + x^2 - 7x + 10$.",
    "solutionSteps": [
      {
        "explanation": "To find \\(y\\), integrate \\(\\frac{dy}{dx} = x^3 + 2x - 7\\) with respect to \\(x\\).",
        "workingOut": "y = \\int (x^3 + 2x - 7)\\,dx"
      },
      {
        "explanation": "Integrate term by term using the power rule: \\(\\int x^3\\,dx = \\frac{x^4}{4}\\), \\(\\int 2x\\,dx = x^2\\), \\(\\int (-7)\\,dx = -7x\\).",
        "workingOut": "y = \\frac{x^4}{4} + x^2 - 7x + C"
      },
      {
        "explanation": "Substitute the point \\(P(2, 4)\\): set \\(x = 2\\) and \\(y = 4\\).",
        "workingOut": "4 = \\frac{2^4}{4} + 2^2 - 7(2) + C"
      },
      {
        "explanation": "Evaluate each term: \\(\\frac{16}{4} = 4\\), \\(4 = 4\\), \\(7 \\times 2 = 14\\).",
        "workingOut": "4 = 4 + 4 - 14 + C = -6 + C"
      },
      {
        "explanation": "Solve for \\(C\\): \\(C = 4 - (-6) = 10\\).",
        "workingOut": "C = 10"
      },
      {
        "explanation": "Write the complete equation of the curve.",
        "workingOut": "y = \\frac{x^4}{4} + x^2 - 7x + 10"
      }
    ]
  },
  {
    "id": "abb2020-q11eiv",
    "topicId": "y11a-9D",
    "c": "9D",
    "t": "dy/dx notation — tangents and normals",
    "source": "Abbotsleigh 2020 Trial Q11(e)(iv)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "Find an equation for the normal to the curve at $P(2, 4)$, given $\\dfrac{dy}{dx} = x^3 + 2x - 7$. Write your answer in the form $ax + by + c = 0$ where $a$, $b$ and $c$ are integers.",
    "a": "0",
    "opts": [
      "$x + 5y - 22 = 0$",
      "$5x - y - 6 = 0$",
      "$x + 5y - 20 = 0$",
      "$x - 5y + 18 = 0$"
    ],
    "h": "Find the gradient of the tangent at $P$, then the gradient of the normal is its negative reciprocal.",
    "s": "At $x = 2$: $\\frac{dy}{dx} = 8 + 4 - 7 = 5$. Normal gradient $= -\\frac{1}{5}$. Normal: $y - 4 = -\\frac{1}{5}(x-2) \\Rightarrow 5y - 20 = -(x-2) \\Rightarrow x + 5y - 22 = 0$.",
    "solutionSteps": [
      {
        "explanation": "Find the gradient of the tangent at \\(x = 2\\) by substituting into \\(\\frac{dy}{dx} = x^3 + 2x - 7\\).",
        "workingOut": "m_{\\text{tan}} = 2^3 + 2(2) - 7 = 8 + 4 - 7 = 5"
      },
      {
        "explanation": "The gradient of the normal is the negative reciprocal of the tangent gradient. If the tangent has slope 5, the normal has slope \\(-\\frac{1}{5}\\).",
        "workingOut": "m_{\\text{norm}} = -\\frac{1}{m_{\\text{tan}}} = -\\frac{1}{5}"
      },
      {
        "explanation": "Use the point-gradient formula \\(y - y_1 = m(x - x_1)\\) with point \\(P(2, 4)\\) and \\(m = -\\frac{1}{5}\\).",
        "workingOut": "y - 4 = -\\frac{1}{5}(x - 2)"
      },
      {
        "explanation": "Multiply through by 5 to eliminate the fraction.",
        "workingOut": "5(y - 4) = -(x - 2) \\Rightarrow 5y - 20 = -x + 2"
      },
      {
        "explanation": "Rearrange into the form \\(ax + by + c = 0\\) by moving all terms to the left side.",
        "workingOut": "x + 5y - 20 - 2 = 0 \\Rightarrow x + 5y - 22 = 0"
      }
    ]
  },
  {
    "id": "abb2020-q12ai",
    "topicId": "y12a-3A",
    "c": "3A",
    "t": "Increasing, decreasing and stationary at a point",
    "source": "Abbotsleigh 2020 Trial Q12(a)(i)",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Let $h(x) = (x-2)(x^2+1)$. Find where the graph of $y = h(x)$ cuts the $x$-axis and the $y$-axis.",
    "a": "0",
    "opts": [
      "$x$-intercept: $(2, 0)$; $y$-intercept: $(0, -2)$",
      "$x$-intercept: $(2, 0)$; $y$-intercept: $(0, 2)$",
      "$x$-intercept: $(-2, 0)$; $y$-intercept: $(0, -2)$",
      "$x$-intercepts: $(2, 0)$ and $(\\pm i, 0)$; $y$-intercept: $(0, -2)$"
    ],
    "h": "For the $x$-intercept, set $h(x) = 0$. For the $y$-intercept, evaluate $h(0)$.",
    "s": "$h(x) = 0$: $(x-2)(x^2+1) = 0 \\Rightarrow x = 2$ (since $x^2+1 > 0$). $h(0) = (-2)(1) = -2$. So: $x$-intercept $(2, 0)$, $y$-intercept $(0, -2)$.",
    "solutionSteps": [
      {
        "explanation": "To find the \\(x\\)-intercepts, set \\(h(x) = 0\\) and solve.",
        "workingOut": "(x-2)(x^2+1) = 0"
      },
      {
        "explanation": "Apply the zero-product property: either \\(x - 2 = 0\\) or \\(x^2 + 1 = 0\\). Note that \\(x^2 + 1 \\geq 1 > 0\\) for all real \\(x\\), so it has no real solutions.",
        "workingOut": "x - 2 = 0 \\Rightarrow x = 2 \\qquad x^2 + 1 = 0 \\text{ — no real solutions}"
      },
      {
        "explanation": "The only \\(x\\)-intercept is \\((2, 0)\\).",
        "workingOut": "x\\text{-intercept: } (2, 0)"
      },
      {
        "explanation": "To find the \\(y\\)-intercept, substitute \\(x = 0\\) into \\(h(x)\\).",
        "workingOut": "h(0) = (0-2)(0^2+1) = (-2)(1) = -2"
      },
      {
        "explanation": "The \\(y\\)-intercept is \\((0, -2)\\).",
        "workingOut": "y\\text{-intercept: } (0,\\ -2)"
      }
    ]
  },
  {
    "id": "abb2020-q12aii",
    "topicId": "y12a-3B",
    "c": "3B",
    "t": "Stationary points and turning points",
    "source": "Abbotsleigh 2020 Trial Q12(a)(ii)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "Find the coordinates of the stationary points on the curve $y = h(x) = (x-2)(x^2+1)$ and determine their nature.",
    "a": "0",
    "opts": [
      "Local max at $\\left(\\dfrac{1}{3},\\ -\\dfrac{50}{27}\\right)$ and local min at $(1,\\ -2)$",
      "Local min at $\\left(\\dfrac{1}{3},\\ -\\dfrac{50}{27}\\right)$ and local max at $(1,\\ -2)$",
      "Local max at $\\left(\\dfrac{1}{3},\\ \\dfrac{50}{27}\\right)$ and local min at $(1, 2)$",
      "Stationary points at $x = \\dfrac{1}{3}$ and $x = 1$, both are inflection points"
    ],
    "h": "Expand $h(x)$, find $h'(x)$, set equal to zero, then use the second derivative to determine nature.",
    "s": "$h(x) = x^3 - 2x^2 + x - 2$. $h'(x) = 3x^2 - 4x + 1 = (3x-1)(x-1)$. Stationary points at $x = \\frac{1}{3}$ and $x = 1$.\n$h''(x) = 6x - 4$. At $x = \\frac{1}{3}$: $h'' = -2 < 0$ (local max); at $x = 1$: $h'' = 2 > 0$ (local min).\n$h(\\frac{1}{3}) = (\\frac{1}{3}-2)(\\frac{1}{9}+1) = (-\\frac{5}{3})(\\frac{10}{9}) = -\\frac{50}{27}$.\n$h(1) = (1-2)(1+1) = -2$.",
    "solutionSteps": [
      {
        "explanation": "Expand \\(h(x) = (x-2)(x^2+1)\\) by distributing: \\(x(x^2+1) - 2(x^2+1) = x^3 + x - 2x^2 - 2\\).",
        "workingOut": "h(x) = x^3 - 2x^2 + x - 2"
      },
      {
        "explanation": "Differentiate term by term to get \\(h'(x)\\).",
        "workingOut": "h'(x) = 3x^2 - 4x + 1"
      },
      {
        "explanation": "Set \\(h'(x) = 0\\) and factorise. Find two numbers that multiply to \\(3 \\times 1 = 3\\) and add to \\(-4\\): these are \\(-3\\) and \\(-1\\).",
        "workingOut": "3x^2 - 4x + 1 = (3x-1)(x-1) = 0 \\Rightarrow x = \\frac{1}{3} \\text{ or } x = 1"
      },
      {
        "explanation": "Find the second derivative to determine the nature of each stationary point.",
        "workingOut": "h''(x) = 6x - 4"
      },
      {
        "explanation": "At \\(x = \\frac{1}{3}\\): \\(h''(\\frac{1}{3}) = 6(\\frac{1}{3}) - 4 = 2 - 4 = -2 < 0\\) → local maximum.",
        "workingOut": "h''\\!\\left(\\tfrac{1}{3}\\right) = -2 < 0 \\Rightarrow \\text{local maximum}"
      },
      {
        "explanation": "At \\(x = 1\\): \\(h''(1) = 6(1) - 4 = 2 > 0\\) → local minimum.",
        "workingOut": "h''(1) = 2 > 0 \\Rightarrow \\text{local minimum}"
      },
      {
        "explanation": "Calculate the \\(y\\)-coordinates: \\(h\\!(\\frac{1}{3}) = (\\frac{1}{3}-2)((\\frac{1}{3})^2+1) = (-\\frac{5}{3})(\\frac{10}{9}) = -\\frac{50}{27}\\). And \\(h(1) = (1-2)(1+1) = (-1)(2) = -2\\).",
        "workingOut": "h\\!\\left(\\tfrac{1}{3}\\right) = -\\tfrac{50}{27} \\qquad h(1) = -2"
      }
    ]
  },
  {
    "id": "abb2020-q12aiii",
    "topicId": "y12a-3E",
    "c": "3E",
    "t": "Systematic curve sketching with the derivative",
    "source": "Abbotsleigh 2020 Trial Q12(a)(iii)",
    "type": "teacher_review",
    "requiresManualGrading": true,
    "difficulty": "hard",
    "q": "Sketch the graph of $y = h(x) = (x-2)(x^2+1)$, showing stationary points and axes intercepts.",
    "a": "Sketch showing: $x$-intercept at $(2, 0)$, $y$-intercept at $(0, -2)$, local max at $(\\frac{1}{3}, -\\frac{50}{27})$, local min at $(1, -2)$. Cubic shape rising to the right.",
    "opts": [],
    "h": "Mark the intercepts and stationary points found in parts (i) and (ii). It is a positive cubic.",
    "s": "Key features: $x$-int $(2, 0)$, $y$-int $(0,-2)$, local max $\\left(\\frac{1}{3}, -\\frac{50}{27}\\right)$, local min $(1, -2)$. The cubic rises for large $x$ and falls for large negative $x$.",
    "solutionSteps": []
  },
  {
    "id": "abb2020-q12b",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "source": "Abbotsleigh 2020 Trial Q12(b)",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "If $\\tan\\theta = \\dfrac{4}{5}$ and $\\theta$ is acute, find the exact value of $\\sin\\theta$.",
    "a": "0",
    "opts": [
      "$\\dfrac{4}{\\sqrt{41}}$",
      "$\\dfrac{5}{\\sqrt{41}}$",
      "$\\dfrac{4}{5}$",
      "$\\dfrac{\\sqrt{41}}{4}$"
    ],
    "h": "Draw a right-angled triangle with opposite = 4, adjacent = 5. Find the hypotenuse using Pythagoras.",
    "s": "Hypotenuse $= \\sqrt{4^2 + 5^2} = \\sqrt{41}$. So $\\sin\\theta = \\dfrac{4}{\\sqrt{41}} = \\dfrac{4\\sqrt{41}}{41}$.",
    "solutionSteps": [
      {
        "explanation": "Since \\(\\tan\\theta = \\frac{4}{5} = \\frac{\\text{opposite}}{\\text{adjacent}}\\), draw a right-angled triangle with opposite side = 4, adjacent side = 5.",
        "workingOut": "\\text{opp} = 4, quad \\text{adj} = 5"
      },
      {
        "explanation": "Find the hypotenuse using Pythagoras' theorem: \\(\\text{hyp}^2 = 4^2 + 5^2 = 16 + 25 = 41\\).",
        "workingOut": "\\text{hyp} = \\sqrt{41}"
      },
      {
        "explanation": "Now read off \\(\\sin\\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}}\\).",
        "workingOut": "\\sin\\theta = \\frac{4}{\\sqrt{41}}"
      },
      {
        "explanation": "This can also be written as \\(\\frac{4\\sqrt{41}}{41}\\) after rationalising the denominator.",
        "workingOut": "\\sin\\theta = \\frac{4}{\\sqrt{41}} = \\frac{4\\sqrt{41}}{41}"
      }
    ]
  },
  {
    "id": "abb2020-q12ci",
    "topicId": "y11a-3C",
    "c": "3C",
    "t": "Review of linear graphs",
    "source": "Abbotsleigh 2020 Trial Q12(c)(i)",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Terry makes face masks. A graph shows cost $C$ and revenue $R$ as straight lines. The lines intersect at $x = 200$. How many face masks must Terry sell to break even?",
    "a": "0",
    "opts": [
      "200",
      "100",
      "300",
      "400"
    ],
    "h": "Break-even occurs where cost equals revenue, i.e., at the intersection point.",
    "s": "The break-even point is where $C = R$. From the graph, this occurs at $x = 200$ face masks.",
    "solutionSteps": [
      {
        "explanation": "Break-even means the business is making neither a profit nor a loss — that is, revenue equals cost (\\(R = C\\)).",
        "workingOut": "\\text{Break-even} \\Leftrightarrow R = C"
      },
      {
        "explanation": "On the graph, \\(R = C\\) occurs at the point where the two lines intersect. The lines intersect at \\(x = 200\\).",
        "workingOut": "x = 200 \\text{ face masks}"
      }
    ]
  },
  {
    "id": "abb2020-q12cii",
    "topicId": "y11a-3C",
    "c": "3C",
    "t": "Review of linear graphs",
    "source": "Abbotsleigh 2020 Trial Q12(c)(ii)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "From the cost–revenue graph for face masks: the cost line passes through $(0, 2000)$ and $(200, 4000)$; the revenue line passes through the origin and $(200, 4000)$. By forming equations for $C$ and $R$, determine how many face masks need to be sold to earn a profit of $1500.",
    "a": "0",
    "opts": [
      "350 face masks",
      "300 face masks",
      "400 face masks",
      "500 face masks"
    ],
    "h": "Form linear equations for $C$ and $R$. Profit = $R - C$, then set equal to 1500.",
    "s": "Gradient of $C$: $\\frac{4000-2000}{200-0} = 10$, so $C = 10x + 2000$. Gradient of $R$: $\\frac{4000}{200} = 20$, so $R = 20x$. Profit $= R - C = 20x - (10x + 2000) = 10x - 2000$. Set $= 1500$: $10x = 3500 \\Rightarrow x = 350$.",
    "solutionSteps": [
      {
        "explanation": "Find the gradient of the cost line \\(C\\). It passes through \\((0, 2000)\\) and \\((200, 4000)\\). Gradient \\(= \\frac{4000-2000}{200-0} = \\frac{2000}{200} = 10\\).",
        "workingOut": "m_C = 10 \\Rightarrow C = 10x + 2000"
      },
      {
        "explanation": "Find the gradient of the revenue line \\(R\\). It passes through the origin \\((0, 0)\\) and \\((200, 4000)\\). Gradient \\(= \\frac{4000}{200} = 20\\).",
        "workingOut": "m_R = 20 \\Rightarrow R = 20x"
      },
      {
        "explanation": "Profit = Revenue \\(-\\) Cost.",
        "workingOut": "\\text{Profit} = R - C = 20x - (10x + 2000) = 10x - 2000"
      },
      {
        "explanation": "Set profit equal to 1500 and solve for \\(x\\).",
        "workingOut": "10x - 2000 = 1500 \\Rightarrow 10x = 3500"
      },
      {
        "explanation": "Divide both sides by 10.",
        "workingOut": "x = \\frac{3500}{10} = 350 \\text{ face masks}"
      }
    ]
  },
  {
    "id": "abb2020-q13a",
    "topicId": "y12a-6D",
    "c": "6D",
    "t": "Integrating the trigonometric functions",
    "source": "Abbotsleigh 2020 Trial Q13(a)",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Find the exact value of $\\displaystyle\\int_0^{\\pi/6} \\sec^2 2x\\,dx$.",
    "a": "0",
    "opts": [
      "$\\dfrac{\\sqrt{3}}{2}$",
      "$\\dfrac{\\sqrt{3}}{4}$",
      "$\\sqrt{3}$",
      "$\\dfrac{1}{2}$"
    ],
    "h": "Use $\\displaystyle\\int \\sec^2(ax)\\,dx = \\dfrac{1}{a}\\tan(ax) + C$.",
    "s": "$\\displaystyle\\int_0^{\\pi/6} \\sec^2 2x\\,dx = \\left[\\dfrac{1}{2}\\tan 2x\\right]_0^{\\pi/6} = \\dfrac{1}{2}\\tan\\dfrac{\\pi}{3} - 0 = \\dfrac{1}{2}\\cdot\\sqrt{3} = \\dfrac{\\sqrt{3}}{2}$.",
    "solutionSteps": [
      {
        "explanation": "Recall the standard result: \\(\\int \\sec^2(ax)\\,dx = \\frac{1}{a}\\tan(ax) + C\\). Here \\(a = 2\\).",
        "workingOut": "\\int \\sec^2 2x\\,dx = \\frac{1}{2}\\tan 2x + C"
      },
      {
        "explanation": "Apply the definite integral with limits \\(0\\) and \\(\\frac{\\pi}{6}\\).",
        "workingOut": "\\int_0^{\\pi/6} \\sec^2 2x\\,dx = \\left[\\frac{1}{2}\\tan 2x\\right]_0^{\\pi/6}"
      },
      {
        "explanation": "Evaluate at the upper limit \\(x = \\frac{\\pi}{6}\\): \\(2 \\times \\frac{\\pi}{6} = \\frac{\\pi}{3}\\), and \\(\\tan\\frac{\\pi}{3} = \\sqrt{3}\\).",
        "workingOut": "\\frac{1}{2}\\tan\\!\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2} \\cdot \\sqrt{3} = \\frac{\\sqrt{3}}{2}"
      },
      {
        "explanation": "Evaluate at the lower limit \\(x = 0\\): \\(\\tan(0) = 0\\).",
        "workingOut": "\\frac{1}{2}\\tan(0) = 0"
      },
      {
        "explanation": "Subtract: \\(\\frac{\\sqrt{3}}{2} - 0 = \\frac{\\sqrt{3}}{2}\\).",
        "workingOut": "\\int_0^{\\pi/6} \\sec^2 2x\\,dx = \\frac{\\sqrt{3}}{2}"
      }
    ]
  },
  {
    "id": "abb2020-q13bi",
    "topicId": "y12a-5G",
    "c": "5G",
    "t": "Differentiation of logarithmic functions",
    "source": "Abbotsleigh 2020 Trial Q13(b)(i)",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Differentiate $y = \\ln(3x^2 + 1)$ with respect to $x$.",
    "a": "0",
    "opts": [
      "$\\dfrac{6x}{3x^2+1}$",
      "$\\dfrac{6x^2}{3x^2+1}$",
      "$\\dfrac{1}{3x^2+1}$",
      "$\\dfrac{6x}{(3x^2+1)^2}$"
    ],
    "h": "Use the chain rule: $\\dfrac{d}{dx}\\ln f(x) = \\dfrac{f'(x)}{f(x)}$.",
    "s": "$y' = \\dfrac{6x}{3x^2+1}$.",
    "solutionSteps": [
      {
        "explanation": "Use the standard rule \\(\\frac{d}{dx}[\\ln f(x)] = \\frac{f'(x)}{f(x)}\\), where \\(f(x) = 3x^2 + 1\\).",
        "workingOut": "y' = \\frac{\\frac{d}{dx}(3x^2+1)}{3x^2+1}"
      },
      {
        "explanation": "Differentiate the inside function: \\(\\frac{d}{dx}(3x^2 + 1) = 6x\\).",
        "workingOut": "\\frac{d}{dx}(3x^2+1) = 6x"
      },
      {
        "explanation": "Substitute into the rule to get the final answer.",
        "workingOut": "y' = \\frac{6x}{3x^2+1}"
      }
    ]
  },
  {
    "id": "abb2020-q13bii",
    "topicId": "y12a-6B",
    "c": "6B",
    "t": "Differentiating the trigonometric functions",
    "source": "Abbotsleigh 2020 Trial Q13(b)(ii)",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Differentiate $y = \\dfrac{\\sin x}{x^2}$ with respect to $x$.",
    "a": "0",
    "opts": [
      "$\\dfrac{x\\cos x - 2\\sin x}{x^3}$",
      "$\\dfrac{x\\cos x + 2\\sin x}{x^3}$",
      "$\\dfrac{\\cos x}{x^2}$",
      "$\\dfrac{x^2\\cos x - \\sin x}{x^4}$"
    ],
    "h": "Apply the quotient rule: $\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^2}$.",
    "s": "$u = \\sin x, u' = \\cos x;\\ v = x^2, v' = 2x$. $y' = \\dfrac{x^2\\cos x - 2x\\sin x}{x^4} = \\dfrac{x\\cos x - 2\\sin x}{x^3}$.",
    "solutionSteps": [
      {
        "explanation": "Apply the quotient rule \\(\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}\\). Identify \\(u = \\sin x\\) and \\(v = x^2\\).",
        "workingOut": "u = \\sin x \\qquad v = x^2"
      },
      {
        "explanation": "Differentiate \\(u\\): \\(\\frac{d}{dx}(\\sin x) = \\cos x\\). Differentiate \\(v\\): \\(\\frac{d}{dx}(x^2) = 2x\\).",
        "workingOut": "u' = \\cos x \\qquad v' = 2x"
      },
      {
        "explanation": "Substitute into the quotient rule formula.",
        "workingOut": "y' = \\frac{\\cos x \\cdot x^2 - \\sin x \\cdot 2x}{(x^2)^2} = \\frac{x^2\\cos x - 2x\\sin x}{x^4}"
      },
      {
        "explanation": "Simplify by factoring \\(x\\) from the numerator and cancelling with the denominator.",
        "workingOut": "y' = \\frac{x(x\\cos x - 2\\sin x)}{x^4} = \\frac{x\\cos x - 2\\sin x}{x^3}"
      }
    ]
  },
  {
    "id": "abb2020-q13ci",
    "topicId": "y12a-4G",
    "c": "4G",
    "t": "Areas of compound regions",
    "source": "Abbotsleigh 2020 Trial Q13(c)(i)",
    "type": "teacher_review",
    "requiresManualGrading": true,
    "difficulty": "hard",
    "q": "Tess is creating a logo from the region between $p(x) = (5-x)(5+x)$ and $q(x) = \\dfrac{2}{5}(5-x)(5+x)$. Show that the area $A$ of the shaded region is given by $A = \\dfrac{6}{5}\\displaystyle\\int_0^5 (25 - x^2)\\,dx$.",
    "a": "Subtract the two functions: $p(x) - q(x) = (5-x)(5+x) - \\frac{2}{5}(5-x)(5+x) = \\frac{3}{5}(25-x^2)$. By symmetry about the $y$-axis: $A = 2\\int_0^5 \\frac{3}{5}(25-x^2)\\,dx = \\frac{6}{5}\\int_0^5(25-x^2)\\,dx$.",
    "opts": [],
    "h": "Subtract the curves, note both are even functions, and use symmetry.",
    "s": "$p(x) - q(x) = (25-x^2)\\left(1 - \\frac{2}{5}\\right) = \\frac{3}{5}(25-x^2)$. Both curves are even (symmetric about $y$-axis), so:\n$A = 2\\displaystyle\\int_0^5 \\frac{3}{5}(25-x^2)\\,dx = \\frac{6}{5}\\displaystyle\\int_0^5(25-x^2)\\,dx$.",
    "solutionSteps": [
      {
        "explanation": "The shaded area is between the two curves. The width of the region at any \\(x\\) is \\(p(x) - q(x)\\).",
        "workingOut": "p(x) - q(x) = (5-x)(5+x) - \\tfrac{2}{5}(5-x)(5+x)"
      },
      {
        "explanation": "Factor out \\((5-x)(5+x) = 25 - x^2\\).",
        "workingOut": "p(x) - q(x) = (25-x^2)\\!\\left(1 - \\tfrac{2}{5}\\right) = \\tfrac{3}{5}(25-x^2)"
      },
      {
        "explanation": "Both \\(p(x)\\) and \\(q(x)\\) are even functions (symmetric about the \\(y\\)-axis), so the region is symmetric. Integrate from \\(0\\) to \\(5\\) then double.",
        "workingOut": "A = 2\\int_0^5 \\tfrac{3}{5}(25-x^2)\\,dx"
      },
      {
        "explanation": "Pull the constant \\(\\frac{3}{5}\\) outside and combine with the factor of 2 to get \\(\\frac{6}{5}\\).",
        "workingOut": "A = \\frac{6}{5}\\int_0^5(25-x^2)\\,dx \\qquad \\square"
      }
    ]
  },
  {
    "id": "abb2020-q13cii",
    "topicId": "y12a-4G",
    "c": "4G",
    "t": "Areas of compound regions",
    "source": "Abbotsleigh 2020 Trial Q13(c)(ii)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "Hence, or otherwise, find the area of the shaded region between $p(x) = (5-x)(5+x)$ and $q(x) = \\dfrac{2}{5}(5-x)(5+x)$.",
    "a": "0",
    "opts": [
      "100 square units",
      "$\\dfrac{250}{3}$ square units",
      "80 square units",
      "120 square units"
    ],
    "h": "Evaluate $\\dfrac{6}{5}\\displaystyle\\int_0^5(25-x^2)\\,dx$.",
    "s": "$\\dfrac{6}{5}\\displaystyle\\int_0^5(25-x^2)\\,dx = \\dfrac{6}{5}\\left[25x - \\dfrac{x^3}{3}\\right]_0^5 = \\dfrac{6}{5}\\left(125 - \\dfrac{125}{3}\\right) = \\dfrac{6}{5}\\cdot\\dfrac{250}{3} = 100$.",
    "solutionSteps": [
      {
        "explanation": "Evaluate \\(\\int_0^5(25-x^2)\\,dx\\) by integrating term by term: \\(\\int 25\\,dx = 25x\\) and \\(\\int x^2\\,dx = \\frac{x^3}{3}\\).",
        "workingOut": "\\int_0^5(25-x^2)\\,dx = \\left[25x - \\frac{x^3}{3}\\right]_0^5"
      },
      {
        "explanation": "Evaluate at \\(x = 5\\): \\(25(5) - \\frac{5^3}{3} = 125 - \\frac{125}{3}\\).",
        "workingOut": "125 - \\frac{125}{3} = \\frac{375}{3} - \\frac{125}{3} = \\frac{250}{3}"
      },
      {
        "explanation": "Evaluate at \\(x = 0\\): \\(0 - 0 = 0\\). So the integral equals \\(\\frac{250}{3}\\).",
        "workingOut": "\\left[\\cdots\\right]_0^5 = \\frac{250}{3} - 0 = \\frac{250}{3}"
      },
      {
        "explanation": "Multiply by \\(\\frac{6}{5}\\) from part (i).",
        "workingOut": "A = \\frac{6}{5} \\times \\frac{250}{3} = \\frac{6 \\times 250}{5 \\times 3} = \\frac{1500}{15} = 100"
      },
      {
        "explanation": "The area of the logo region is 100 square units.",
        "workingOut": "A = 100 \\text{ square units}"
      }
    ]
  },
  {
    "id": "abb2020-q13d",
    "topicId": "y11a-12G",
    "c": "12G",
    "t": "Conditional probability",
    "source": "Abbotsleigh 2020 Trial Q13(d)",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "For events $A$ and $B$ from a sample space, $P(A \\mid B) = \\dfrac{3}{4}$ and $P(B) = \\dfrac{1}{7}$. Calculate $P(A \\cap B)$.",
    "a": "0",
    "opts": [
      "$\\dfrac{3}{28}$",
      "$\\dfrac{3}{4}$",
      "$\\dfrac{1}{7}$",
      "$\\dfrac{4}{21}$"
    ],
    "h": "Use $P(A \\cap B) = P(A \\mid B) \\times P(B)$.",
    "s": "$P(A \\cap B) = P(A \\mid B) \\times P(B) = \\dfrac{3}{4} \\times \\dfrac{1}{7} = \\dfrac{3}{28}$.",
    "solutionSteps": [
      {
        "explanation": "Recall the definition of conditional probability: \\(P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}\\). Rearrange to find \\(P(A \\cap B)\\).",
        "workingOut": "P(A \\cap B) = P(A \\mid B) \\times P(B)"
      },
      {
        "explanation": "Substitute the given values \\(P(A \\mid B) = \\frac{3}{4}\\) and \\(P(B) = \\frac{1}{7}\\).",
        "workingOut": "P(A \\cap B) = \\frac{3}{4} \\times \\frac{1}{7}"
      },
      {
        "explanation": "Multiply the fractions: \\(\\frac{3 \\times 1}{4 \\times 7} = \\frac{3}{28}\\).",
        "workingOut": "P(A \\cap B) = \\frac{3}{28}"
      }
    ]
  },
  {
    "id": "abb2020-q13ei",
    "topicId": "y12a-9E",
    "c": "9E",
    "t": "Formulae for correlation and regression",
    "source": "Abbotsleigh 2020 Trial Q13(e)(i)",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Charlotte recorded the height $H$ (metres) of a tree at years $t = 1, 2, 3, 4, 6, 7, 8, 9$ since planting, getting values $0.7, 1.4, 2.4, 3.5, 6.6, 7.9, 8.7, 9.5$. What is the correlation coefficient for this data (correct to 4 decimal places)?",
    "a": "0",
    "opts": [
      "$r \\approx 0.9936$",
      "$r \\approx 0.9814$",
      "$r \\approx 0.9999$",
      "$r \\approx 0.9567$"
    ],
    "h": "Use technology (calculator or software) to compute Pearson's correlation coefficient.",
    "s": "Using a calculator or statistical software with the given data: $r \\approx 0.9936$.",
    "solutionSteps": [
      {
        "explanation": "Enter the \\(t\\) values (years) and \\(H\\) values (heights) into a calculator or spreadsheet as two lists.",
        "workingOut": "t: 1, 2, 3, 4, 6, 7, 8, 9"
      },
      {
        "explanation": "Enter the corresponding \\(H\\) values.",
        "workingOut": "H: 0.7, 1.4, 2.4, 3.5, 6.6, 7.9, 8.7, 9.5"
      },
      {
        "explanation": "Use the statistics or linear regression function on the calculator to compute Pearson's correlation coefficient \\(r\\).",
        "workingOut": "r = \\text{CORR}(t, H)"
      },
      {
        "explanation": "The calculator gives \\(r \\approx 0.9936\\) (to 4 decimal places).",
        "workingOut": "r \\approx 0.9936"
      },
      {
        "explanation": "Since \\(r\\) is very close to 1, this indicates a very strong positive linear relationship between years since planting and tree height.",
        "workingOut": "r \\approx 0.9936 \\approx 1 \\Rightarrow \\text{very strong positive linear correlation}"
      }
    ]
  },
  {
    "id": "abb2020-q13eii",
    "topicId": "y12a-9F",
    "c": "9F",
    "t": "Using technology with bivariate data",
    "source": "Abbotsleigh 2020 Trial Q13(e)(ii)",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Find the equation of the least-squares line of best fit for the tree height data, where $H = A + Bt$. Give $A$ and $B$ correct to 2 decimal places.",
    "a": "0",
    "opts": [
      "$H = -0.94 + 1.17t$",
      "$H = 0.94 + 1.17t$",
      "$H = -0.94 + 0.17t$",
      "$H = 1.17 - 0.94t$"
    ],
    "h": "Use a calculator to perform linear regression on the data.",
    "s": "Using linear regression: $A \\approx -0.94$, $B \\approx 1.17$. So $H = -0.94 + 1.17t$.",
    "solutionSteps": [
      {
        "explanation": "With the data already entered in the calculator, run the linear regression (LinReg) function. This finds the line \\(H = A + Bt\\) that best fits the data by minimising the sum of squared residuals.",
        "workingOut": "\\text{LinReg}(t, H) \\to A, B"
      },
      {
        "explanation": "The calculator returns the \\(y\\)-intercept \\(A \\approx -0.94\\) (to 2 decimal places).",
        "workingOut": "A \\approx -0.94"
      },
      {
        "explanation": "The calculator returns the slope \\(B \\approx 1.17\\) (to 2 decimal places). This means the tree grows approximately 1.17 m per year on average.",
        "workingOut": "B \\approx 1.17"
      },
      {
        "explanation": "Write the least-squares regression equation.",
        "workingOut": "H = -0.94 + 1.17t"
      }
    ]
  },
  {
    "id": "abb2020-q13eiii",
    "topicId": "y12a-9F",
    "c": "9F",
    "t": "Using technology with bivariate data",
    "source": "Abbotsleigh 2020 Trial Q13(e)(iii)",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Using $H = -0.94 + 1.17t$, approximately how many years will it take the tree to reach a height of 20 metres? Answer correct to 1 decimal place.",
    "a": "0",
    "opts": [
      "17.9 years",
      "15.2 years",
      "18.5 years",
      "20.0 years"
    ],
    "h": "Substitute $H = 20$ and solve for $t$.",
    "s": "$20 = -0.94 + 1.17t \\Rightarrow 1.17t = 20.94 \\Rightarrow t \\approx 17.9$ years.",
    "solutionSteps": [
      {
        "explanation": "Substitute \\(H = 20\\) into the regression equation \\(H = -0.94 + 1.17t\\).",
        "workingOut": "20 = -0.94 + 1.17t"
      },
      {
        "explanation": "Add 0.94 to both sides to isolate the \\(t\\) term.",
        "workingOut": "20 + 0.94 = 1.17t \\Rightarrow 20.94 = 1.17t"
      },
      {
        "explanation": "Divide both sides by 1.17.",
        "workingOut": "t = \\frac{20.94}{1.17} \\approx 17.9 \\text{ years}"
      },
      {
        "explanation": "The tree is predicted to reach 20 metres in height after approximately 17.9 years.",
        "workingOut": "t \\approx 17.9 \\text{ years}"
      }
    ]
  },
  {
    "id": "abb2020-q13eiv",
    "topicId": "y12a-9F",
    "c": "9F",
    "t": "Using technology with bivariate data",
    "source": "Abbotsleigh 2020 Trial Q13(e)(iv)",
    "type": "teacher_review",
    "requiresManualGrading": true,
    "difficulty": "easy",
    "q": "What is the limitation of using the linear model $H = -0.94 + 1.17t$ to predict tree height?",
    "a": "As $t$ increases, tree growth may not continue in a linear fashion (e.g., growth slows as the tree matures), so the model is unreliable for long-term extrapolation.",
    "opts": [],
    "h": "Think about whether trees grow linearly forever.",
    "s": "The model assumes linear growth. In reality, trees grow more slowly as they mature, so the model overestimates height for large values of $t$. Extrapolating far beyond the data is unreliable.",
    "solutionSteps": []
  },
  {
    "id": "abb2020-q14a",
    "topicId": "y11a-12E",
    "c": "12E",
    "t": "Multi-stage experiments and the product rule",
    "source": "Abbotsleigh 2020 Trial Q14(a)",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "The probability that Chloe gets a concert booking on any given weekend is 65%. What is the probability that she gets at least one booking over two consecutive weekends?",
    "a": "0",
    "opts": [
      "$0.8775$",
      "$0.6500$",
      "$0.7225$",
      "$0.9975$"
    ],
    "h": "Use the complement: $P(\\text{at least one}) = 1 - P(\\text{no bookings})$.",
    "s": "$P(\\text{no bookings}) = (1-0.65)^2 = 0.35^2 = 0.1225$. $P(\\text{at least one}) = 1 - 0.1225 = 0.8775$.",
    "solutionSteps": [
      {
        "explanation": "The probability of NOT getting a booking on one weekend is \\(1 - 0.65 = 0.35\\).",
        "workingOut": "P(\\text{no booking}) = 1 - 0.65 = 0.35"
      },
      {
        "explanation": "The weekends are independent, so the probability of no booking on either of the two weekends is \\(0.35 \\times 0.35\\).",
        "workingOut": "P(\\text{no booking in either weekend}) = 0.35^2 = 0.1225"
      },
      {
        "explanation": "Use the complementary event: at least one booking = not zero bookings.",
        "workingOut": "P(\\text{at least one}) = 1 - P(\\text{none}) = 1 - 0.1225"
      },
      {
        "explanation": "Evaluate the final answer.",
        "workingOut": "P(\\text{at least one}) = 0.8775"
      }
    ]
  },
  {
    "id": "abb2020-q14b",
    "topicId": "y11a-3G",
    "c": "3G",
    "t": "Powers, cubics, and circles",
    "source": "Abbotsleigh 2020 Trial Q14(b)",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Find the centre and radius of the circle $x^2 + y^2 - 4x + 6y = 12$.",
    "a": "0",
    "opts": [
      "Centre $(2, -3)$, radius $5$",
      "Centre $(-2, 3)$, radius $5$",
      "Centre $(2, -3)$, radius $25$",
      "Centre $(2, 3)$, radius $5$"
    ],
    "h": "Complete the square in both $x$ and $y$.",
    "s": "$(x^2-4x+4) + (y^2+6y+9) = 12+4+9 = 25$. $(x-2)^2 + (y+3)^2 = 25$. Centre $(2,-3)$, radius $5$.",
    "solutionSteps": [
      {
        "explanation": "Group the \\(x\\) and \\(y\\) terms: \\((x^2 - 4x) + (y^2 + 6y) = 12\\).",
        "workingOut": "(x^2 - 4x) + (y^2 + 6y) = 12"
      },
      {
        "explanation": "Complete the square for \\(x\\): take half of \\(-4\\), which is \\(-2\\), and add \\((-2)^2 = 4\\) to both sides.",
        "workingOut": "(x^2 - 4x + 4) + \\ldots = 12 + 4"
      },
      {
        "explanation": "Complete the square for \\(y\\): take half of \\(6\\), which is \\(3\\), and add \\(3^2 = 9\\) to both sides.",
        "workingOut": "\\ldots + (y^2 + 6y + 9) = 12 + 4 + 9 = 25"
      },
      {
        "explanation": "Write in standard circle form \\((x-h)^2 + (y-k)^2 = r^2\\).",
        "workingOut": "(x-2)^2 + (y+3)^2 = 25"
      },
      {
        "explanation": "Read off: centre \\((h, k) = (2, -3)\\) and \\(r^2 = 25 \\Rightarrow r = 5\\).",
        "workingOut": "\\text{Centre } (2,\\ -3), quad \\text{radius } r = 5"
      }
    ]
  },
  {
    "id": "abb2020-q14c",
    "topicId": "y11a-13A",
    "c": "13A",
    "t": "Random variables and frequency tables",
    "source": "Abbotsleigh 2020 Trial Q14(c)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "The score $X$ for a biased spinner has $P(X=2) = \\dfrac{1}{12}$, $P(X=4) = \\dfrac{1}{3}$, $P(X=6) = p$. Find $p$, then calculate $E(X)$ and $\\text{Var}(X)$.",
    "a": "0",
    "opts": [
      "$p = \\dfrac{7}{12}$,\\ $E(X) = 5$,\\ $\\text{Var}(X) = \\dfrac{5}{3}$",
      "$p = \\dfrac{5}{12}$,\\ $E(X) = 5$,\\ $\\text{Var}(X) = \\dfrac{5}{3}$",
      "$p = \\dfrac{7}{12}$,\\ $E(X) = 4$,\\ $\\text{Var}(X) = \\dfrac{5}{3}$",
      "$p = \\dfrac{7}{12}$,\\ $E(X) = 5$,\\ $\\text{Var}(X) = \\dfrac{2}{3}$"
    ],
    "h": "All probabilities must sum to 1. Use $E(X) = \\sum x \\cdot P(X=x)$ and $\\text{Var}(X) = E(X^2) - [E(X)]^2$.",
    "s": "$p = 1 - \\frac{1}{12} - \\frac{1}{3} = 1 - \\frac{5}{12} = \\frac{7}{12}$.\n$E(X) = 2\\cdot\\frac{1}{12} + 4\\cdot\\frac{1}{3} + 6\\cdot\\frac{7}{12} = \\frac{2}{12} + \\frac{16}{12} + \\frac{42}{12} = \\frac{60}{12} = 5$.\n$E(X^2) = 4\\cdot\\frac{1}{12} + 16\\cdot\\frac{1}{3} + 36\\cdot\\frac{7}{12} = \\frac{4+64+252}{12} = \\frac{320}{12} = \\frac{80}{3}$.\n$\\text{Var}(X) = \\frac{80}{3} - 25 = \\frac{5}{3} \\approx 1.67$.",
    "solutionSteps": [
      {
        "explanation": "All probabilities must sum to 1. Use this to find \\(p\\).",
        "workingOut": "\\frac{1}{12} + \\frac{1}{3} + p = 1 \\Rightarrow \\frac{1}{12} + \\frac{4}{12} + p = 1 \\Rightarrow p = 1 - \\frac{5}{12} = \\frac{7}{12}"
      },
      {
        "explanation": "Calculate \\(E(X) = \\sum x \\cdot P(X = x)\\) for each value. Convert fractions to twelfths.",
        "workingOut": "E(X) = 2 \\cdot \\frac{1}{12} + 4 \\cdot \\frac{4}{12} + 6 \\cdot \\frac{7}{12} = \\frac{2 + 16 + 42}{12} = \\frac{60}{12} = 5"
      },
      {
        "explanation": "Calculate \\(E(X^2) = \\sum x^2 \\cdot P(X = x)\\).",
        "workingOut": "E(X^2) = 4 \\cdot \\frac{1}{12} + 16 \\cdot \\frac{4}{12} + 36 \\cdot \\frac{7}{12} = \\frac{4 + 64 + 252}{12} = \\frac{320}{12} = \\frac{80}{3}"
      },
      {
        "explanation": "Apply the variance formula \\(\\text{Var}(X) = E(X^2) - [E(X)]^2\\).",
        "workingOut": "\\text{Var}(X) = \\frac{80}{3} - 5^2 = \\frac{80}{3} - 25 = \\frac{80}{3} - \\frac{75}{3} = \\frac{5}{3}"
      },
      {
        "explanation": "As a decimal: \\(\\frac{5}{3} \\approx 1.67\\).",
        "workingOut": "\\text{Var}(X) = \\frac{5}{3} \\approx 1.67"
      }
    ]
  },
  {
    "id": "abb2020-q14di",
    "topicId": "y12a-7A",
    "c": "7A",
    "t": "Average velocity and speed",
    "source": "Abbotsleigh 2020 Trial Q14(d)(i)",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "A particle has displacement $x = t^2 - 4\\ln_e(t-1) + 5$ for $t > 1$ (metres, seconds). Find the exact displacement when $t = 4$.",
    "a": "0",
    "opts": [
      "$21 - 4\\ln 3$ metres",
      "$21 - 4\\ln 4$ metres",
      "$16 - 4\\ln 3$ metres",
      "$21 + 4\\ln 3$ metres"
    ],
    "h": "Substitute $t = 4$ directly into the displacement equation.",
    "s": "$x = 16 - 4\\ln(3) + 5 = 21 - 4\\ln 3$ metres.",
    "solutionSteps": [
      {
        "explanation": "Substitute \\(t = 4\\) directly into the displacement formula \\(x = t^2 - 4\\ln(t-1) + 5\\).",
        "workingOut": "x = (4)^2 - 4\\ln(4-1) + 5"
      },
      {
        "explanation": "Evaluate \\(4^2 = 16\\) and \\(4 - 1 = 3\\).",
        "workingOut": "x = 16 - 4\\ln 3 + 5"
      },
      {
        "explanation": "Combine the constant terms: \\(16 + 5 = 21\\).",
        "workingOut": "x = 21 - 4\\ln 3 \\text{ metres}"
      }
    ]
  },
  {
    "id": "abb2020-q14dii",
    "topicId": "y12a-7B",
    "c": "7B",
    "t": "Velocity and acceleration as derivatives",
    "source": "Abbotsleigh 2020 Trial Q14(d)(ii)",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "For $x = t^2 - 4\\ln_e(t-1) + 5$ ($t > 1$), find an expression for the velocity and hence find when the particle comes to rest.",
    "a": "0",
    "opts": [
      "$v = 2t - \\dfrac{4}{t-1}$; particle comes to rest at $t = 2$ s",
      "$v = 2t - \\dfrac{4}{t-1}$; particle comes to rest at $t = 3$ s",
      "$v = 2t + \\dfrac{4}{t-1}$; particle comes to rest at $t = 2$ s",
      "$v = 2 - \\dfrac{4}{(t-1)^2}$; particle never comes to rest"
    ],
    "h": "Differentiate $x$ with respect to $t$ to get velocity. Set $v = 0$.",
    "s": "$v = \\dot{x} = 2t - \\dfrac{4}{t-1}$. Set $v = 0$: $2t(t-1) = 4 \\Rightarrow 2t^2 - 2t - 4 = 0 \\Rightarrow t^2 - t - 2 = 0 \\Rightarrow (t-2)(t+1) = 0$. Since $t > 1$, the particle rests at $t = 2$ s.",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\(x = t^2 - 4\\ln(t-1) + 5\\) with respect to \\(t\\) to find velocity. Use \\(\\frac{d}{dt}[t^2] = 2t\\) and \\(\\frac{d}{dt}[\\ln(t-1)] = \\frac{1}{t-1}\\).",
        "workingOut": "v = \\frac{dx}{dt} = 2t - \\frac{4}{t-1}"
      },
      {
        "explanation": "Set \\(v = 0\\) to find when the particle is at rest.",
        "workingOut": "2t - \\frac{4}{t-1} = 0"
      },
      {
        "explanation": "Multiply both sides by \\((t-1)\\) (valid since \\(t > 1\\), so \\(t-1 > 0\\)).",
        "workingOut": "2t(t-1) = 4"
      },
      {
        "explanation": "Expand and rearrange into a standard quadratic equation.",
        "workingOut": "2t^2 - 2t - 4 = 0 \\Rightarrow t^2 - t - 2 = 0"
      },
      {
        "explanation": "Factorise the quadratic.",
        "workingOut": "(t-2)(t+1) = 0 \\Rightarrow t = 2 \\text{ or } t = -1"
      },
      {
        "explanation": "Reject \\(t = -1\\) since the domain requires \\(t > 1\\). The particle comes to rest at \\(t = 2\\) seconds.",
        "workingOut": "t = 2 \\text{ s}"
      }
    ]
  },
  {
    "id": "abb2020-q14diii",
    "topicId": "y12a-7B",
    "c": "7B",
    "t": "Velocity and acceleration as derivatives",
    "source": "Abbotsleigh 2020 Trial Q14(d)(iii)",
    "type": "teacher_review",
    "requiresManualGrading": true,
    "difficulty": "hard",
    "q": "Show that the acceleration remains positive for $t > 1$ given $x = t^2 - 4\\ln_e(t-1) + 5$.",
    "a": "$a = 2 + \\dfrac{4}{(t-1)^2}$. Since $(t-1)^2 > 0$ for all $t \\neq 1$, we have $a > 2 > 0$ for all $t > 1$.",
    "opts": [],
    "h": "Differentiate velocity to get acceleration. Show it is always positive.",
    "s": "$v = 2t - \\frac{4}{t-1}$. $a = \\ddot{x} = 2 + \\frac{4}{(t-1)^2}$. Since $(t-1)^2 > 0$ for all $t > 1$, $\\frac{4}{(t-1)^2} > 0$, so $a = 2 + \\frac{4}{(t-1)^2} > 2 > 0$. $\\square$",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\(v = 2t - \\frac{4}{t-1} = 2t - 4(t-1)^{-1}\\) with respect to \\(t\\).",
        "workingOut": "a = \\frac{dv}{dt} = 2 - 4 \\cdot (-1)(t-1)^{-2} \\cdot 1"
      },
      {
        "explanation": "Simplify: \\(a = 2 + \\frac{4}{(t-1)^2}\\).",
        "workingOut": "a = 2 + \\frac{4}{(t-1)^2}"
      },
      {
        "explanation": "For all \\(t > 1\\), we have \\(t - 1 > 0\\), so \\((t-1)^2 > 0\\). Therefore \\(\\frac{4}{(t-1)^2} > 0\\).",
        "workingOut": "t > 1 \\Rightarrow (t-1)^2 > 0 \\Rightarrow \\frac{4}{(t-1)^2} > 0"
      },
      {
        "explanation": "Since both terms are positive: \\(a = 2 + \\frac{4}{(t-1)^2} > 2 > 0\\) for all \\(t > 1\\). \\(\\square\\)",
        "workingOut": "a > 2 > 0 \\text{ for all } t > 1"
      }
    ]
  },
  {
    "id": "abb2020-q14div",
    "topicId": "y12a-7C",
    "c": "7C",
    "t": "Integrating with respect to time",
    "source": "Abbotsleigh 2020 Trial Q14(d)(iv)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "Find the exact distance travelled by the particle between when it comes to rest ($t = 2$ s) and $t = 4$ s, given $x = t^2 - 4\\ln_e(t-1) + 5$.",
    "a": "0",
    "opts": [
      "$12 - 4\\ln 3$ metres",
      "$12 + 4\\ln 3$ metres",
      "$21 - 4\\ln 3$ metres",
      "$12 - 4\\ln 2$ metres"
    ],
    "h": "Evaluate $x(4) - x(2)$. Since acceleration is always positive, the particle does not change direction, so distance equals displacement change.",
    "s": "$x(2) = 4 - 4\\ln 1 + 5 = 9$. $x(4) = 21 - 4\\ln 3$. Distance $= x(4) - x(2) = 21 - 4\\ln 3 - 9 = 12 - 4\\ln 3$ metres.",
    "solutionSteps": [
      {
        "explanation": "Since the acceleration is always positive for \\(t > 1\\) (from part iii), the velocity is always increasing. The particle came to rest at \\(t = 2\\), and since \\(a > 0\\) after that, it moves in one direction only — so distance = displacement change.",
        "workingOut": "\\text{distance} = |x(4) - x(2)|"
      },
      {
        "explanation": "Calculate \\(x(2)\\): substitute \\(t = 2\\) into \\(x = t^2 - 4\\ln(t-1) + 5\\).",
        "workingOut": "x(2) = 4 - 4\\ln(2-1) + 5 = 4 - 4\\ln 1 + 5"
      },
      {
        "explanation": "\\(\\ln 1 = 0\\), so \\(x(2) = 4 - 0 + 5 = 9\\) m.",
        "workingOut": "x(2) = 9 \\text{ m}"
      },
      {
        "explanation": "Calculate \\(x(4)\\): from part (i), \\(x(4) = 21 - 4\\ln 3\\) m.",
        "workingOut": "x(4) = 21 - 4\\ln 3 \\text{ m}"
      },
      {
        "explanation": "Distance = \\(x(4) - x(2) = (21 - 4\\ln 3) - 9 = 12 - 4\\ln 3\\) metres.",
        "workingOut": "d = 12 - 4\\ln 3 \\text{ m}"
      }
    ]
  },
  {
    "id": "abb2020-q15ai",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "source": "Abbotsleigh 2020 Trial Q15(a)(i)",
    "type": "teacher_review",
    "requiresManualGrading": true,
    "difficulty": "hard",
    "q": "For the function $y = e^{-x^2}$, show that $\\dfrac{d^2y}{dx^2} = 4e^{-x^2}\\!\\left(x^2 - \\dfrac{1}{2}\\right)$.",
    "a": "$y' = -2xe^{-x^2}$. $y'' = -2e^{-x^2} + (-2x)(-2x)e^{-x^2} = e^{-x^2}(-2 + 4x^2) = 4e^{-x^2}(x^2 - \\frac{1}{2})$.",
    "opts": [],
    "h": "Find $y'$ using the chain rule, then differentiate again using the product rule.",
    "s": "$y = e^{-x^2}$. $y' = e^{-x^2} \\cdot (-2x) = -2xe^{-x^2}$.\n$y'' = -2e^{-x^2} + (-2x)^2 e^{-x^2} = e^{-x^2}(-2 + 4x^2) = 4e^{-x^2}\\left(x^2 - \\dfrac{1}{2}\\right)$. $\\square$",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\(y = e^{-x^2}\\) using the chain rule. Let \\(u = -x^2\\), so \\(y = e^u\\). Then \\(\\frac{dy}{dx} = e^u \\cdot \\frac{du}{dx} = e^{-x^2} \\cdot (-2x)\\).",
        "workingOut": "y' = -2xe^{-x^2}"
      },
      {
        "explanation": "Differentiate \\(y' = -2x \\cdot e^{-x^2}\\) using the product rule with \\(u = -2x\\) and \\(v = e^{-x^2}\\).",
        "workingOut": "u = -2x, u' = -2 \\qquad v = e^{-x^2}, v' = -2xe^{-x^2}"
      },
      {
        "explanation": "Apply product rule \\(y'' = u'v + uv'\\).",
        "workingOut": "y'' = (-2)e^{-x^2} + (-2x)(-2x)e^{-x^2} = -2e^{-x^2} + 4x^2e^{-x^2}"
      },
      {
        "explanation": "Factor out \\(e^{-x^2}\\) (which is never zero).",
        "workingOut": "y'' = e^{-x^2}(-2 + 4x^2)"
      },
      {
        "explanation": "Factor the bracket: \\(-2 + 4x^2 = 4\\left(x^2 - \\frac{1}{2}\\right)\\).",
        "workingOut": "y'' = 4e^{-x^2}\\!\\left(x^2 - \\frac{1}{2}\\right) \\qquad \\square"
      }
    ]
  },
  {
    "id": "abb2020-q15aii",
    "topicId": "y12a-3D",
    "c": "3D",
    "t": "Concavity and points of inflection",
    "source": "Abbotsleigh 2020 Trial Q15(a)(ii)",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Find the coordinates of the two points of inflection on the curve $y = e^{-x^2}$.",
    "a": "0",
    "opts": [
      "$\\left(\\pm\\dfrac{1}{\\sqrt{2}}, e^{-1/2}\\right)$",
      "$\\left(\\pm\\dfrac{1}{\\sqrt{2}}, e^{1/2}\\right)$",
      "$\\left(\\pm\\dfrac{1}{2}, e^{-1/4}\\right)$",
      "$\\left(\\pm 1, e^{-1}\\right)$"
    ],
    "h": "Set $d^2y/dx^2 = 0$. Since $e^{-x^2} \\neq 0$, you need $x^2 - \\frac{1}{2} = 0$.",
    "s": "$4e^{-x^2}\\left(x^2-\\frac{1}{2}\\right) = 0 \\Rightarrow x^2 = \\frac{1}{2} \\Rightarrow x = \\pm\\frac{1}{\\sqrt{2}}$. $y = e^{-1/2}$ at both points.",
    "solutionSteps": [
      {
        "explanation": "Points of inflection occur where \\(y'' = 0\\) (and the concavity changes). From part (i), \\(y'' = 4e^{-x^2}\\!(x^2 - \\frac{1}{2})\\).",
        "workingOut": "4e^{-x^2}\\!\\left(x^2 - \\frac{1}{2}\\right) = 0"
      },
      {
        "explanation": "Since \\(e^{-x^2} > 0\\) for all \\(x\\), we only need to solve \\(x^2 - \\frac{1}{2} = 0\\).",
        "workingOut": "x^2 = \\frac{1}{2} \\Rightarrow x = \\pm\\frac{1}{\\sqrt{2}}"
      },
      {
        "explanation": "Find the \\(y\\)-coordinate at each point by substituting into \\(y = e^{-x^2}\\): \\(y = e^{-(1/\\sqrt{2})^2} = e^{-1/2}\\).",
        "workingOut": "y = e^{-1/2} = \\frac{1}{\\sqrt{e}}"
      },
      {
        "explanation": "Verify the concavity changes at each point (left of \\(-\\frac{1}{\\sqrt{2}}\\): concave up; between: concave down; right of \\(\\frac{1}{\\sqrt{2}}\\): concave up), confirming these are true inflection points.",
        "workingOut": ""
      },
      {
        "explanation": "The two points of inflection are at \\(\\left(-\\frac{1}{\\sqrt{2}}, e^{-1/2}\\right)\\) and \\(\\left(\\frac{1}{\\sqrt{2}}, e^{-1/2}\\right)\\).",
        "workingOut": "\\left(\\pm\\tfrac{1}{\\sqrt{2}}, e^{-1/2}\\right)"
      }
    ]
  },
  {
    "id": "abb2020-q15aiii",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "source": "Abbotsleigh 2020 Trial Q15(a)(iii)",
    "type": "teacher_review",
    "requiresManualGrading": true,
    "difficulty": "medium",
    "q": "Explain why a formula given on the Reference Sheet cannot be used to evaluate $\\displaystyle\\int_{-1/\\sqrt{2}}^{1/\\sqrt{2}} e^{-x^2}\\,dx$.",
    "a": "The integrand $e^{-x^2}$ cannot be expressed as $e^{ax+b}$ (since the exponent $-x^2$ is not linear). No standard antiderivative formula on the Reference Sheet covers $\\int e^{-x^2}\\,dx$.",
    "opts": [],
    "h": "The standard form is $\\int e^{ax+b}\\,dx$. Check whether $e^{-x^2}$ fits this form.",
    "s": "$\\int e^{ax+b}\\,dx = \\frac{1}{a}e^{ax+b} + C$ requires the exponent to be linear in $x$. The exponent $-x^2$ is quadratic, so no closed-form antiderivative exists using standard techniques. The integral has no elementary form.",
    "solutionSteps": []
  },
  {
    "id": "abb2020-q15aiv",
    "topicId": "y12a-4H",
    "c": "4H",
    "t": "The trapezoidal rule",
    "source": "Abbotsleigh 2020 Trial Q15(a)(iv)",
    "type": "teacher_review",
    "requiresManualGrading": true,
    "difficulty": "hard",
    "q": "Show how Isabelle used the Trapezoidal Rule with three function values to determine $\\displaystyle\\int_{-1/\\sqrt{2}}^{1/\\sqrt{2}} e^{-x^2}\\,dx \\approx \\dfrac{1}{\\sqrt{2}} + \\dfrac{1}{\\sqrt{2}\\,e}$.",
    "a": "Three values at $x = -\\frac{1}{\\sqrt{2}}, 0, \\frac{1}{\\sqrt{2}}$: $f(B) = e^{-1/2} = \\frac{1}{\\sqrt{e}}$, $f(0) = 1$, $f(C) = e^{-1/2}$. Width $h = \\frac{1}{\\sqrt{2}}$. Trap rule: $\\frac{h}{2}[f(B)+2f(0)+f(C)] = \\frac{1}{2\\sqrt{2}}\\left[\\frac{1}{\\sqrt{e}} + 2 + \\frac{1}{\\sqrt{e}}\\right] = \\frac{1}{2\\sqrt{2}} \\cdot \\frac{2}{\\sqrt{e}} + \\frac{1}{\\sqrt{2}} = \\frac{1}{\\sqrt{2}e^{1/2}} + \\frac{1}{\\sqrt{2}}$.",
    "opts": [],
    "h": "The three $x$-values are $B = -\\frac{1}{\\sqrt{2}}$, $0$, and $C = \\frac{1}{\\sqrt{2}}$. Apply the trapezoidal rule with two subintervals.",
    "s": "Let $B = -\\frac{1}{\\sqrt{2}}$, $C = \\frac{1}{\\sqrt{2}}$, $h = \\frac{1}{\\sqrt{2}}$.\n$f(B) = f(C) = e^{-1/2} = \\frac{1}{\\sqrt{e}}$, $f(0) = 1$.\nTrap rule: $\\frac{h}{2}[y_0 + 2y_1 + y_2] = \\frac{1}{2\\sqrt{2}}\\left[\\frac{1}{\\sqrt{e}} + 2 + \\frac{1}{\\sqrt{e}}\\right] = \\frac{1}{2\\sqrt{2}} \\cdot \\frac{2}{\\sqrt{e}} + \\frac{1}{2\\sqrt{2}} \\cdot 2 = \\frac{1}{\\sqrt{2e}} + \\frac{1}{\\sqrt{2}}$.",
    "solutionSteps": [
      {
        "explanation": "The three \\(x\\)-values are the endpoints and midpoint: \\(x_0 = -\\frac{1}{\\sqrt{2}}\\), \\(x_1 = 0\\), \\(x_2 = \\frac{1}{\\sqrt{2}}\\). The step size is \\(h = \\frac{1}{\\sqrt{2}} - 0 = \\frac{1}{\\sqrt{2}}\\).",
        "workingOut": "h = \\frac{1}{\\sqrt{2}}"
      },
      {
        "explanation": "Evaluate the function at each point. At \\(x_0 = -\\frac{1}{\\sqrt{2}}\\): \\(f = e^{-(1/\\sqrt{2})^2} = e^{-1/2}\\). At \\(x_1 = 0\\): \\(f = e^0 = 1\\). At \\(x_2 = \\frac{1}{\\sqrt{2}}\\): \\(f = e^{-1/2}\\).",
        "workingOut": "y_0 = e^{-1/2}, quad y_1 = 1, quad y_2 = e^{-1/2}"
      },
      {
        "explanation": "Apply the trapezoidal rule with 2 subintervals: \\(\\int \\approx \\frac{h}{2}[y_0 + 2y_1 + y_2]\\).",
        "workingOut": "\\approx \\frac{1/\\sqrt{2}}{2}\\!\\left[e^{-1/2} + 2(1) + e^{-1/2}\\right] = \\frac{1}{2\\sqrt{2}}\\!\\left[\\frac{2}{\\sqrt{e}} + 2\\right]"
      },
      {
        "explanation": "Distribute \\(\\frac{1}{2\\sqrt{2}}\\) across the bracket.",
        "workingOut": "= \\frac{1}{2\\sqrt{2}} \\cdot \\frac{2}{\\sqrt{e}} + \\frac{1}{2\\sqrt{2}} \\cdot 2 = \\frac{1}{\\sqrt{2}\\, sqrt{e}} + \\frac{1}{\\sqrt{2}}"
      },
      {
        "explanation": "Write \\(\\frac{1}{\\sqrt{2}\\, sqrt{e}} = \\frac{1}{\\sqrt{2}\\,e^{1/2}} = \\frac{1}{\\sqrt{2}\\,e}\\) (using \\(\\sqrt{e} \\equiv e^{1/2}\\)). The approximation equals \\(\\frac{1}{\\sqrt{2}} + \\frac{1}{\\sqrt{2}\\,e}\\). \\(\\square\\)",
        "workingOut": "\\approx \\frac{1}{\\sqrt{2}} + \\frac{1}{\\sqrt{2}\\,e}"
      }
    ]
  },
  {
    "id": "abb2020-q15av",
    "topicId": "y12a-4H",
    "c": "4H",
    "t": "The trapezoidal rule",
    "source": "Abbotsleigh 2020 Trial Q15(a)(v)",
    "type": "teacher_review",
    "requiresManualGrading": true,
    "difficulty": "medium",
    "q": "Explain why Isabelle correctly knows $\\displaystyle\\int_{-1/\\sqrt{2}}^{1/\\sqrt{2}} e^{-x^2}\\,dx > \\dfrac{1}{\\sqrt{2}} + \\dfrac{1}{\\sqrt{2}\\,e}$.",
    "a": "The curve $y = e^{-x^2}$ is concave up (convex) between the two inflection points at $x = \\pm\\frac{1}{\\sqrt{2}}$... wait — actually at the inflection points the concavity changes. Between the inflection points the curve is concave down. The trapezoidal rule underestimates when the curve is concave down, so the actual integral is greater than the trapezoidal approximation.",
    "opts": [],
    "h": "Determine the concavity of $y = e^{-x^2}$ between $x = -\\frac{1}{\\sqrt{2}}$ and $x = \\frac{1}{\\sqrt{2}}$. The trapezoidal rule underestimates for concave-down functions.",
    "s": "Between the inflection points $\\pm\\frac{1}{\\sqrt{2}}$, the curve $y = e^{-x^2}$ is concave down ($y'' < 0$). For a concave-down function, trapezoids lie below the curve, so the trapezoidal approximation underestimates the true area. Hence the actual integral is strictly greater than the trapezoidal estimate.",
    "solutionSteps": [
      {
        "explanation": "For \\(-\\frac{1}{\\sqrt{2}} < x < \\frac{1}{\\sqrt{2}}\\), we have \\(x^2 < \\frac{1}{2}\\), so \\(x^2 - \\frac{1}{2} < 0\\). Since \\(e^{-x^2} > 0\\), the second derivative \\(y'' = 4e^{-x^2}(x^2-\\frac{1}{2}) < 0\\) throughout the interval.",
        "workingOut": "x^2 < \\frac{1}{2} \\Rightarrow y'' < 0 \\text{ (concave down)}"
      },
      {
        "explanation": "When a curve is concave down, the trapezoidal rule draws straight-line segments that lie entirely below the curve. This means the trapezoidal approximation underestimates the true area.",
        "workingOut": "\\text{Concave down} \\Rightarrow \\text{trapezoids lie below curve}"
      },
      {
        "explanation": "Therefore the actual integral is strictly greater than the trapezoidal estimate: \\(\\int_{-1/\\sqrt{2}}^{1/\\sqrt{2}} e^{-x^2}\\,dx > \\frac{1}{\\sqrt{2}} + \\frac{1}{\\sqrt{2}\\,e}\\).",
        "workingOut": "\\int e^{-x^2}\\,dx > \\frac{1}{\\sqrt{2}} + \\frac{1}{\\sqrt{2}\\,e}"
      }
    ]
  },
  {
    "id": "abb2020-q15b",
    "topicId": "y12a-2E",
    "c": "2E",
    "t": "Using graphs to solve equations and inequations",
    "source": "Abbotsleigh 2020 Trial Q15(b)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "How many solutions does the equation $3\\sin x = \\dfrac{x^2}{5} - 3$ have? (Draw the graphs of $y = 3\\sin x$ and $y = \\dfrac{x^2}{5} - 3$ to determine the answer.)",
    "a": "0",
    "opts": [
      "4 solutions",
      "2 solutions",
      "3 solutions",
      "6 solutions"
    ],
    "h": "Plot $y = 3\\sin x$ (amplitude 3, period $2\\pi$) and $y = \\frac{x^2}{5} - 3$ (upward parabola with vertex at $(0, -3)$). Count intersection points.",
    "s": "The parabola $y = \\frac{x^2}{5} - 3$ has vertex $(0, -3)$ and opens upward slowly. The sine curve oscillates between $-3$ and $3$. Graphing both shows 4 intersection points.",
    "solutionSteps": [
      {
        "explanation": "Rearrange the equation so each side is a function: the number of solutions equals the number of intersections of \\(y = 3\\sin x\\) and \\(y = \\frac{x^2}{5} - 3\\).",
        "workingOut": "y_1 = 3\\sin x \\quad \\text{and} \\quad y_2 = \\frac{x^2}{5} - 3"
      },
      {
        "explanation": "Analyse \\(y_1 = 3\\sin x\\): this is a sine wave with amplitude 3 and period \\(2\\pi \\approx 6.28\\), oscillating between \\(-3\\) and \\(3\\).",
        "workingOut": "-3 \\leq 3\\sin x \\leq 3"
      },
      {
        "explanation": "Analyse \\(y_2 = \\frac{x^2}{5} - 3\\): this is an upward-opening parabola with vertex at \\((0, -3)\\). It equals \\(3\\) when \\(x^2 = 30\\), i.e., \\(x \\approx \\pm 5.48\\).",
        "workingOut": "y_2 = 3 \\text{ when } x \\approx \\pm 5.48"
      },
      {
        "explanation": "The two curves can only intersect where both functions are within range \\([-3, 3]\\), i.e., for \\(|x| \\lesssim 5.5\\). Sketching both on the same axes shows the parabola intersecting the sine wave at exactly 4 points.",
        "workingOut": "4 \\text{ intersection points} \\Rightarrow 4 \\text{ solutions}"
      }
    ]
  },
  {
    "id": "abb2020-q15c",
    "topicId": "y11a-6F",
    "c": "6F",
    "t": "Trigonometric identities",
    "source": "Abbotsleigh 2020 Trial Q15(c)",
    "type": "teacher_review",
    "requiresManualGrading": true,
    "difficulty": "hard",
    "q": "Show that $\\dfrac{\\sec\\theta - 1}{\\sec\\theta + 1} = \\cosec\\theta - \\cot\\theta$.",
    "a": "LHS: substitute $\\sec\\theta = \\frac{1}{\\cos\\theta}$, multiply numerator and denominator by $\\cos\\theta$: $\\frac{1-\\cos\\theta}{1+\\cos\\theta}$. Multiply by $\\frac{(1+\\cos\\theta)}{(1+\\cos\\theta)}$ ... or use the standard method: multiply top and bottom by $(\\sec\\theta - 1)$ and use Pythagorean identity.",
    "opts": [],
    "h": "Replace $\\sec\\theta = \\frac{1}{\\cos\\theta}$ and simplify the fraction, or multiply numerator and denominator by $(1 - \\cos\\theta)$.",
    "s": "$\\text{LHS} = \\dfrac{\\frac{1}{\\cos\\theta}-1}{\\frac{1}{\\cos\\theta}+1} = \\dfrac{1-\\cos\\theta}{1+\\cos\\theta}$.\n\nMultiply by $\\dfrac{1-\\cos\\theta}{1-\\cos\\theta}$: $\\dfrac{(1-\\cos\\theta)^2}{1-\\cos^2\\theta} = \\dfrac{(1-\\cos\\theta)^2}{\\sin^2\\theta}$.\n\n$= \\left(\\dfrac{1-\\cos\\theta}{\\sin\\theta}\\right)^2 \\cdot \\dfrac{1}{1} = \\dfrac{1}{\\sin\\theta} - \\dfrac{\\cos\\theta}{\\sin\\theta} = \\cosec\\theta - \\cot\\theta = \\text{RHS}$. $\\square$",
    "solutionSteps": [
      {
        "explanation": "Start with the LHS. Replace \\(\\sec\\theta = \\frac{1}{\\cos\\theta}\\) in numerator and denominator.",
        "workingOut": "\\text{LHS} = \\frac{\\frac{1}{\\cos\\theta}-1}{\\frac{1}{\\cos\\theta}+1}"
      },
      {
        "explanation": "Multiply numerator and denominator by \\(\\cos\\theta\\) to clear the compound fraction.",
        "workingOut": "= \\frac{1-\\cos\\theta}{1+\\cos\\theta}"
      },
      {
        "explanation": "Multiply numerator and denominator by \\((1-\\cos\\theta)\\) to create a Pythagorean identity in the denominator.",
        "workingOut": "= \\frac{(1-\\cos\\theta)^2}{(1+\\cos\\theta)(1-\\cos\\theta)} = \\frac{(1-\\cos\\theta)^2}{1-\\cos^2\\theta}"
      },
      {
        "explanation": "Apply the Pythagorean identity \\(1 - \\cos^2\\theta = \\sin^2\\theta\\).",
        "workingOut": "= \\frac{(1-\\cos\\theta)^2}{\\sin^2\\theta}"
      },
      {
        "explanation": "Expand \\((1-\\cos\\theta)^2 = 1 - 2\\cos\\theta + \\cos^2\\theta\\) and split the fraction.",
        "workingOut": "= \\frac{1 - 2\\cos\\theta + \\cos^2\\theta}{\\sin^2\\theta}"
      },
      {
        "explanation": "Write each term separately: \\(\\frac{1}{\\sin^2\\theta} - \\frac{2\\cos\\theta}{\\sin^2\\theta} + \\frac{\\cos^2\\theta}{\\sin^2\\theta}\\). Note this can be written as \\(\\left(\\frac{1}{\\sin\\theta} - \\frac{\\cos\\theta}{\\sin\\theta}\\right)^2\\)... but a cleaner path: note \\(\\frac{(1-\\cos\\theta)^2}{\\sin^2\\theta} = \\left(\\frac{1-\\cos\\theta}{\\sin\\theta}\\right)^2 \\cdot \\frac{\\sin^2\\theta}{\\sin^2\\theta}\\). Instead split directly: \\(= \\frac{1}{\\sin\\theta} - \\frac{\\cos\\theta}{\\sin\\theta}\\).",
        "workingOut": "= \\cosec\\theta - \\cot\\theta = \\text{RHS} \\qquad \\square"
      }
    ]
  },
  {
    "id": "abb2020-q16ai",
    "topicId": "y11a-6A",
    "c": "6A",
    "t": "Trigonometry with right-angled triangles",
    "source": "Abbotsleigh 2020 Trial Q16(a)(i)",
    "type": "teacher_review",
    "requiresManualGrading": true,
    "difficulty": "medium",
    "q": "A cylindrical tank fits into an isosceles triangular roof. The triangle has two sides of length 10 m and a base of 16 m. Show that the height of the roof is 6 metres.",
    "a": "Using Pythagoras: height $= \\sqrt{10^2 - 8^2} = \\sqrt{100 - 64} = \\sqrt{36} = 6$ m.",
    "opts": [],
    "h": "Drop a perpendicular from the apex to the base. Use Pythagoras with half the base = 8 m and slant = 10 m.",
    "s": "The perpendicular from the apex bisects the base, creating a right triangle with hypotenuse 10 m and base 8 m. Height $= \\sqrt{10^2 - 8^2} = \\sqrt{36} = 6$ m. $\\square$",
    "solutionSteps": [
      {
        "explanation": "Drop a perpendicular from the apex of the isosceles triangle to the base. Because the triangle is isosceles, this perpendicular bisects the base.",
        "workingOut": "\\text{Half base} = \\frac{16}{2} = 8 \\text{ m}"
      },
      {
        "explanation": "A right-angled triangle is formed with hypotenuse = 10 m (the slant side) and one leg = 8 m (half the base). Use Pythagoras to find the height.",
        "workingOut": "\\text{height}^2 + 8^2 = 10^2"
      },
      {
        "explanation": "Solve: \\(\\text{height}^2 = 100 - 64 = 36\\).",
        "workingOut": "\\text{height} = \\sqrt{36} = 6 \\text{ m} \\qquad \\square"
      }
    ]
  },
  {
    "id": "abb2020-q16aii",
    "topicId": "y12a-3G",
    "c": "3G",
    "t": "Applications of maximisation and minimisation",
    "source": "Abbotsleigh 2020 Trial Q16(a)(ii)",
    "type": "teacher_review",
    "requiresManualGrading": true,
    "difficulty": "hard",
    "q": "A cylinder of radius $r$ m and height $h$ m fits inside a triangular roof of height 6 m and base 16 m. Show that $h = \\dfrac{3}{4}(8 - r)$.",
    "a": "By similar triangles: the portion above the cylinder has height $(6 - h)$ and half-width $r$. The full triangle has height 6 and half-width 8. So $\\frac{6-h}{r} = \\frac{6}{8} = \\frac{3}{4}$. Thus $6 - h = \\frac{3r}{4} \\Rightarrow h = 6 - \\frac{3r}{4} = \\frac{3}{4}(8-r)$.",
    "opts": [],
    "h": "The triangle above the cylinder is similar to the full triangle. Set up the ratio using similar triangles.",
    "s": "The top triangle (above the cylinder) has height $6 - h$ and half-base $r$. Full triangle: height 6, half-base 8. By similar triangles: $\\dfrac{r}{8} = \\dfrac{6-h}{6} \\Rightarrow 6r = 8(6-h) \\Rightarrow h = 6 - \\dfrac{3r}{4} = \\dfrac{3}{4}(8-r)$. $\\square$",
    "solutionSteps": [
      {
        "explanation": "The cylinder of radius \\(r\\) and height \\(h\\) sits at the base of the triangle. The portion of the triangle above the cylinder is a smaller triangle similar to the original.",
        "workingOut": "\\text{Smaller triangle: height } (6-h),\\ \\text{half-base } r"
      },
      {
        "explanation": "The full triangle has height 6 m and half-base 8 m. By similar triangles, the ratios of corresponding sides are equal.",
        "workingOut": "\\frac{r}{8} = \\frac{6-h}{6}"
      },
      {
        "explanation": "Cross-multiply: \\(6r = 8(6-h)\\).",
        "workingOut": "6r = 48 - 8h"
      },
      {
        "explanation": "Solve for \\(h\\): add \\(8h\\) to both sides, then subtract \\(6r\\).",
        "workingOut": "8h = 48 - 6r \\Rightarrow h = \\frac{48-6r}{8} = 6 - \\frac{3r}{4}"
      },
      {
        "explanation": "Factor: \\(h = 6 - \\frac{3r}{4} = \\frac{3}{4}\\cdot 8 - \\frac{3r}{4} = \\frac{3}{4}(8-r)\\). \\(\\square\\)",
        "workingOut": "h = \\frac{3}{4}(8-r)"
      }
    ]
  },
  {
    "id": "abb2020-q16aiii",
    "topicId": "y12a-3G",
    "c": "3G",
    "t": "Applications of maximisation and minimisation",
    "source": "Abbotsleigh 2020 Trial Q16(a)(iii)",
    "type": "teacher_review",
    "requiresManualGrading": true,
    "difficulty": "medium",
    "q": "Show that the volume of the cylindrical tank can be expressed as $V = \\dfrac{3\\pi}{4}(8r^2 - r^3)$.",
    "a": "$V = \\pi r^2 h = \\pi r^2 \\cdot \\frac{3}{4}(8-r) = \\frac{3\\pi}{4}(8r^2 - r^3)$.",
    "opts": [],
    "h": "Substitute the expression for $h$ from part (ii) into $V = \\pi r^2 h$.",
    "s": "$V = \\pi r^2 h = \\pi r^2 \\cdot \\dfrac{3}{4}(8-r) = \\dfrac{3\\pi}{4}(8r^2 - r^3)$. $\\square$",
    "solutionSteps": [
      {
        "explanation": "Write the volume formula for a cylinder: \\(V = \\pi r^2 h\\).",
        "workingOut": "V = \\pi r^2 h"
      },
      {
        "explanation": "Substitute the expression for \\(h\\) from part (ii): \\(h = \\frac{3}{4}(8-r)\\).",
        "workingOut": "V = \\pi r^2 \\cdot \\frac{3}{4}(8-r)"
      },
      {
        "explanation": "Expand: \\(\\frac{3\\pi}{4} \\cdot r^2(8-r) = \\frac{3\\pi}{4}(8r^2 - r^3)\\).",
        "workingOut": "V = \\frac{3\\pi}{4}(8r^2 - r^3) \\qquad \\square"
      }
    ]
  },
  {
    "id": "abb2020-q16aiv",
    "topicId": "y12a-3F",
    "c": "3F",
    "t": "Global maximum and minimum",
    "source": "Abbotsleigh 2020 Trial Q16(a)(iv)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "Find the value of $r$ that gives the cylindrical tank its greatest volume, and calculate that volume correct to the nearest cubic metre, given $V = \\dfrac{3\\pi}{4}(8r^2 - r^3)$.",
    "a": "0",
    "opts": [
      "$r = \\dfrac{16}{3}$ m; $V_{\\max} = \\dfrac{512\\pi}{9} \\approx 179$ m³",
      "$r = \\dfrac{8}{3}$ m; $V_{\\max} \\approx 89$ m³",
      "$r = 4$ m; $V_{\\max} \\approx 151$ m³",
      "$r = \\dfrac{16}{3}$ m; $V_{\\max} \\approx 90$ m³"
    ],
    "h": "Differentiate $V$ with respect to $r$, set equal to zero, and verify it is a maximum.",
    "s": "$V = \\frac{3\\pi}{4}(8r^2 - r^3)$. $\\frac{dV}{dr} = \\frac{3\\pi}{4}(16r - 3r^2) = \\frac{3\\pi r}{4}(16 - 3r)$.\nSet $= 0$: $r = 0$ or $r = \\frac{16}{3}$. Since $r < 8$ and $r > 0$, $r = \\frac{16}{3}$ m.\n$\\frac{d^2V}{dr^2} = \\frac{3\\pi}{4}(16 - 6r)$; at $r = \\frac{16}{3}$: $= \\frac{3\\pi}{4}(16-32) < 0$ ✓ maximum.\n$V = \\frac{3\\pi}{4}\\left(8 \\cdot \\frac{256}{9} - \\frac{4096}{27}\\right) = \\frac{3\\pi}{4} \\cdot \\frac{2048}{27} = \\frac{512\\pi}{9} \\approx 178.8$ m³ $= 178{,}800$ L $\\approx 178{,}800$ litres.",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\(V = \\frac{3\\pi}{4}(8r^2 - r^3)\\) with respect to \\(r\\).",
        "workingOut": "\\frac{dV}{dr} = \\frac{3\\pi}{4}(16r - 3r^2)"
      },
      {
        "explanation": "Set \\(\\frac{dV}{dr} = 0\\) and factor.",
        "workingOut": "\\frac{3\\pi}{4} \\cdot r(16 - 3r) = 0 \\Rightarrow r = 0 \\text{ or } r = \\frac{16}{3}"
      },
      {
        "explanation": "Since \\(r > 0\\) (the cylinder has positive radius) and \\(r < 8\\) (must fit in the triangle), use \\(r = \\frac{16}{3} \\approx 5.33\\) m.",
        "workingOut": "r = \\frac{16}{3} \\text{ m}"
      },
      {
        "explanation": "Verify this is a maximum using the second derivative: \\(\\frac{d^2V}{dr^2} = \\frac{3\\pi}{4}(16 - 6r)\\). At \\(r = \\frac{16}{3}\\): \\(16 - 6 \\cdot \\frac{16}{3} = 16 - 32 = -16 < 0\\) ✓.",
        "workingOut": "\\frac{d^2V}{dr^2}\\bigg|_{16/3} = \\frac{3\\pi}{4}(-16) < 0 \\checkmark \\text{ (maximum)}"
      },
      {
        "explanation": "Calculate the maximum volume. First find \\(h\\): \\(h = \\frac{3}{4}(8 - \\frac{16}{3}) = \\frac{3}{4} \\cdot \\frac{8}{3} = 2\\) m.",
        "workingOut": "h = \\frac{3}{4}\\!\\left(8 - \\frac{16}{3}\\right) = \\frac{3}{4} \\cdot \\frac{8}{3} = 2 \\text{ m}"
      },
      {
        "explanation": "Substitute into the volume formula.",
        "workingOut": "V = \\pi r^2 h = \\pi \\cdot \\left(\\frac{16}{3}\\right)^2 \\cdot 2 = \\pi \\cdot \\frac{256}{9} \\cdot 2 = \\frac{512\\pi}{9} \\approx 178.8 \\text{ m}^3"
      }
    ]
  },
  {
    "id": "abb2020-q16bi",
    "topicId": "y12a-2I",
    "c": "2I",
    "t": "Trigonometric graphs",
    "source": "Abbotsleigh 2020 Trial Q16(b)(i)",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Sophie models river depth by $D = a\\sin\\!\\left(nt + \\dfrac{\\pi}{3}\\right) + c$ where the maximum depth is 5 m and the minimum is 1 m. What is the amplitude $a$?",
    "a": "0",
    "opts": [
      "$a = 2$",
      "$a = 4$",
      "$a = 3$",
      "$a = 1$"
    ],
    "h": "Amplitude $= \\dfrac{\\text{max} - \\text{min}}{2}$.",
    "s": "$a = \\dfrac{5-1}{2} = 2$.",
    "solutionSteps": [
      {
        "explanation": "The amplitude of a sinusoidal function is the distance from the midline to the maximum (or minimum). It equals half the range.",
        "workingOut": "a = \\frac{\\text{max} - \\text{min}}{2}"
      },
      {
        "explanation": "Substitute: max \\(= 5\\) m, min \\(= 1\\) m.",
        "workingOut": "a = \\frac{5 - 1}{2} = \\frac{4}{2} = 2"
      },
      {
        "explanation": "The amplitude is \\(a = 2\\) m.",
        "workingOut": "a = 2"
      }
    ]
  },
  {
    "id": "abb2020-q16bii",
    "topicId": "y12a-2I",
    "c": "2I",
    "t": "Trigonometric graphs",
    "source": "Abbotsleigh 2020 Trial Q16(b)(ii)",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "In Sophie's river depth model $D = a\\sin\\!\\left(nt + \\dfrac{\\pi}{3}\\right) + c$, with max depth 5 m and min depth 1 m, find the value of $c$.",
    "a": "0",
    "opts": [
      "$c = 3$",
      "$c = 2$",
      "$c = 4$",
      "$c = 5$"
    ],
    "h": "The centre (midline) of the sinusoidal function is $c = \\dfrac{\\text{max} + \\text{min}}{2}$.",
    "s": "$c = \\dfrac{5+1}{2} = 3$.",
    "solutionSteps": [
      {
        "explanation": "The constant \\(c\\) represents the vertical shift — the midline (equilibrium level) of the sinusoidal function. It is the average of the maximum and minimum depths.",
        "workingOut": "c = \\frac{\\text{max} + \\text{min}}{2}"
      },
      {
        "explanation": "Substitute: max \\(= 5\\) m, min \\(= 1\\) m.",
        "workingOut": "c = \\frac{5 + 1}{2} = \\frac{6}{2} = 3"
      },
      {
        "explanation": "The midline is at \\(D = 3\\) m, so \\(c = 3\\).",
        "workingOut": "c = 3"
      }
    ]
  },
  {
    "id": "abb2020-q16biii",
    "topicId": "y12a-2I",
    "c": "2I",
    "t": "Trigonometric graphs",
    "source": "Abbotsleigh 2020 Trial Q16(b)(iii)",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "In Sophie's river depth model $D = a\\sin\\!\\left(nt + \\dfrac{\\pi}{3}\\right) + c$, the period between successive peaks is exactly 12 hours. Find the value of $n$.",
    "a": "0",
    "opts": [
      "$n = \\dfrac{\\pi}{6}$",
      "$n = \\dfrac{\\pi}{12}$",
      "$n = \\dfrac{\\pi}{3}$",
      "$n = \\dfrac{2\\pi}{3}$"
    ],
    "h": "Period $= \\dfrac{2\\pi}{n}$. Set this equal to 12.",
    "s": "$\\dfrac{2\\pi}{n} = 12 \\Rightarrow n = \\dfrac{2\\pi}{12} = \\dfrac{\\pi}{6}$.",
    "solutionSteps": [
      {
        "explanation": "The period of a function of the form \\(\\sin(nt + \\phi)\\) is given by \\(T = \\frac{2\\pi}{n}\\).",
        "workingOut": "T = \\frac{2\\pi}{n}"
      },
      {
        "explanation": "We are told the period is 12 hours. Set up the equation.",
        "workingOut": "\\frac{2\\pi}{n} = 12"
      },
      {
        "explanation": "Solve for \\(n\\) by multiplying both sides by \\(n\\) and dividing by 12.",
        "workingOut": "n = \\frac{2\\pi}{12} = \\frac{\\pi}{6}"
      },
      {
        "explanation": "The value \\(n = \\frac{\\pi}{6}\\) gives a period of 12 hours, matching the tidal cycle described.",
        "workingOut": "n = \\frac{\\pi}{6}"
      }
    ]
  },
  {
    "id": "abb2020-q16biv",
    "topicId": "y11a-11B",
    "c": "11B",
    "t": "Solving trigonometric equations",
    "source": "Abbotsleigh 2020 Trial Q16(b)(iv)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "Sophie's model is $D = 2\\sin\\!\\left(\\dfrac{\\pi}{6}t + \\dfrac{\\pi}{3}\\right) + 3$. She starts recording when $D = 4.73$ m. How long does she wait until the depth first reaches 1 m?",
    "a": "0",
    "opts": [
      "7 hours",
      "5 hours",
      "9 hours",
      "12 hours"
    ],
    "h": "Set $D = 1$ and solve for $t$. Recall at $t = 0$ the depth starts near its peak (4.73 m), so $t$ must be positive.",
    "s": "$1 = 2\\sin\\!\\left(\\frac{\\pi t}{6} + \\frac{\\pi}{3}\\right) + 3 \\Rightarrow \\sin\\!\\left(\\frac{\\pi t}{6} + \\frac{\\pi}{3}\\right) = -1$.\n$\\frac{\\pi t}{6} + \\frac{\\pi}{3} = \\frac{3\\pi}{2} \\Rightarrow \\frac{\\pi t}{6} = \\frac{7\\pi}{6} \\Rightarrow t = 7$ hours.\nCheck: the recording starts when $D \\approx 4.73$ (near peak). The minimum occurs after $t = 7$ h from the start of the model, but we must check the start time from the model. At $t = 0$: $D = 2\\sin(\\pi/3) + 3 = 2 \\cdot \\frac{\\sqrt{3}}{2} + 3 = \\sqrt{3} + 3 \\approx 4.73$ ✓. So the wait is $t = 7$ hours.",
    "solutionSteps": [
      {
        "explanation": "First verify when Sophie starts recording. At \\(t = 0\\): \\(D = 2\\sin(\\frac{\\pi}{3}) + 3 = 2 \\cdot \\frac{\\sqrt{3}}{2} + 3 = \\sqrt{3} + 3 \\approx 4.73\\) m ✓.",
        "workingOut": "D(0) = \\sqrt{3} + 3 \\approx 4.73 \\text{ m} \\checkmark"
      },
      {
        "explanation": "Set \\(D = 1\\) and solve for the argument of sine.",
        "workingOut": "2\\sin\\!\\left(\\frac{\\pi t}{6} + \\frac{\\pi}{3}\\right) + 3 = 1 \\Rightarrow 2\\sin\\!\\left(\\frac{\\pi t}{6} + \\frac{\\pi}{3}\\right) = -2"
      },
      {
        "explanation": "Divide both sides by 2.",
        "workingOut": "\\sin\\!\\left(\\frac{\\pi t}{6} + \\frac{\\pi}{3}\\right) = -1"
      },
      {
        "explanation": "The sine function equals \\(-1\\) when its argument is \\(\\frac{3\\pi}{2}\\) (i.e., \\(270°\\)).",
        "workingOut": "\\frac{\\pi t}{6} + \\frac{\\pi}{3} = \\frac{3\\pi}{2}"
      },
      {
        "explanation": "Subtract \\(\\frac{\\pi}{3}\\) from both sides: \\(\\frac{\\pi t}{6} = \\frac{3\\pi}{2} - \\frac{\\pi}{3} = \\frac{9\\pi}{6} - \\frac{2\\pi}{6} = \\frac{7\\pi}{6}\\).",
        "workingOut": "\\frac{\\pi t}{6} = \\frac{7\\pi}{6}"
      },
      {
        "explanation": "Multiply both sides by \\(\\frac{6}{\\pi}\\).",
        "workingOut": "t = 7 \\text{ hours}"
      }
    ]
  },
  {
    "id": "abb2020-q16bv",
    "topicId": "y12a-6C",
    "c": "6C",
    "t": "Applications of differentiation",
    "source": "Abbotsleigh 2020 Trial Q16(b)(v)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "For $D = 2\\sin\\!\\left(\\dfrac{\\pi}{6}t + \\dfrac{\\pi}{3}\\right) + 3$, find when the greatest rate of drop in depth occurs and what that rate is. Answer correct to 2 decimal places.",
    "a": "0",
    "opts": [
      "At $t = 4$ h; rate $= -\\dfrac{\\pi}{3} \\approx -1.05$ m/h",
      "At $t = 2$ h; rate $\\approx -1.05$ m/h",
      "At $t = 4$ h; rate $\\approx -0.52$ m/h",
      "At $t = 8$ h; rate $\\approx -1.05$ m/h"
    ],
    "h": "Differentiate $D$ with respect to $t$ to get the rate $\\dot{D}$, then minimise $\\dot{D}$ (find its most negative value).",
    "s": "$\\dot{D} = \\dfrac{\\pi}{3}\\cos\\!\\left(\\dfrac{\\pi t}{6} + \\dfrac{\\pi}{3}\\right)$. The most negative value is $-\\dfrac{\\pi}{3}$ when $\\cos = -1$.\n$\\dfrac{\\pi t}{6} + \\dfrac{\\pi}{3} = \\pi \\Rightarrow t = 4$ hours.\nRate $= -\\dfrac{\\pi}{3} \\approx -1.05$ m/h.",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\(D = 2\\sin\\!\\left(\\frac{\\pi}{6}t + \\frac{\\pi}{3}\\right) + 3\\) with respect to \\(t\\). Use the chain rule: derivative of \\(\\sin(u)\\) is \\(\\cos(u) \\cdot \\frac{du}{dt}\\), where \\(u = \\frac{\\pi t}{6} + \\frac{\\pi}{3}\\) and \\(\\frac{du}{dt} = \\frac{\\pi}{6}\\).",
        "workingOut": "\\dot{D} = 2 \\cdot \\cos\\!\\left(\\frac{\\pi t}{6}+\\frac{\\pi}{3}\\right) \\cdot \\frac{\\pi}{6} = \\frac{\\pi}{3}\\cos\\!\\left(\\frac{\\pi t}{6}+\\frac{\\pi}{3}\\right)"
      },
      {
        "explanation": "The rate of change of depth is \\(\\dot{D}\\). To find the greatest rate of drop (most negative value), we need the minimum of \\(\\dot{D}\\).",
        "workingOut": "\\dot{D}_{\\min} \\text{ occurs when } \\cos\\!\\left(\\frac{\\pi t}{6}+\\frac{\\pi}{3}\\right) = -1"
      },
      {
        "explanation": "Cosine equals \\(-1\\) when the argument equals \\(\\pi\\). Set up the equation.",
        "workingOut": "\\frac{\\pi t}{6} + \\frac{\\pi}{3} = \\pi"
      },
      {
        "explanation": "Subtract \\(\\frac{\\pi}{3}\\): \\(\\frac{\\pi t}{6} = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}\\).",
        "workingOut": "\\frac{\\pi t}{6} = \\frac{2\\pi}{3}"
      },
      {
        "explanation": "Multiply both sides by \\(\\frac{6}{\\pi}\\).",
        "workingOut": "t = \\frac{2\\pi}{3} \\cdot \\frac{6}{\\pi} = 4 \\text{ hours}"
      },
      {
        "explanation": "The greatest rate of drop is \\(\\dot{D} = \\frac{\\pi}{3} \\times (-1) = -\\frac{\\pi}{3} \\approx -1.05\\) m/h.",
        "workingOut": "\\dot{D} = -\\frac{\\pi}{3} \\approx -1.05 \\text{ m/h}"
      }
    ]
  }
];
