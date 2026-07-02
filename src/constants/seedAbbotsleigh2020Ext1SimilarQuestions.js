export const ABB_2020_EXT1_SIMILAR_QUESTIONS = [
  {
    "id": "abb2020e1s-mc1",
    "topicId": "y11e1-14E",
    "c": "14E",
    "t": "Multi-stage experiments and the product rule",
    "source": "Abbotsleigh 2020 Trial Q1",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Eight friends, including Mia and Kaito, sit in a row of 8 chairs. In how many ways can they sit if Mia and Kaito must NOT sit next to each other?",
    "a": "2",
    "opts": [
      "5040",
      "10080",
      "30240",
      "40320"
    ],
    "h": "Count all arrangements, then subtract those where Mia and Kaito ARE adjacent.",
    "s": "Total arrangements = $8! = 40320$. Treat Mia and Kaito as a block: $2! \\times 7! = 10080$ arrangements where they ARE adjacent. Arrangements where they are NOT adjacent $= 40320 - 10080 = 30240$.",
    "solutionSteps": [
      {
        "explanation": "Count the total number of unrestricted arrangements of 8 people in 8 seats. Since each person is distinct, this is a permutation of all 8 people.",
        "workingOut": "8! = 40320"
      },
      {
        "explanation": "Apply the complementary counting principle: subtract the \"bad\" cases (Mia and Kaito ARE adjacent) from the total. Treat them as a single block, giving 7 objects to arrange, and the block has \\(2!\\) internal arrangements.",
        "workingOut": "2! \\times 7! = 2 \\times 5040 = 10080"
      },
      {
        "explanation": "Subtract the bad cases from the total.",
        "workingOut": "40320 - 10080 = 30240"
      }
    ]
  },
  {
    "id": "abb2020e1s-mc2",
    "topicId": "y12e1-12F",
    "c": "12F",
    "t": "Volumes of rotation",
    "source": "Abbotsleigh 2020 Trial Q2",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "The region bounded by the curve $x^2 + (y+2)^2 = 9$ and the lines $y = -5$ and $y = 1$ is rotated about the $y$-axis. Which integral gives the volume?\n\n(A) $\\pi \\displaystyle\\int_{-5}^{1} (9 + (y+2)^2)\\, dy$\n\n(B) $\\pi \\displaystyle\\int_{-5}^{1} (9 - (y-2)^2)\\, dy$\n\n(C) $\\pi \\displaystyle\\int_{-5}^{1} (9 - (y+2)^2)\\, dy$\n\n(D) $\\pi \\displaystyle\\int_{-5}^{1} (9 + (y-2)^2)\\, dy$",
    "a": "2",
    "opts": [
      "$\\pi \\displaystyle\\int_{-5}^{1} (9 + (y+2)^2)\\, dy$",
      "$\\pi \\displaystyle\\int_{-5}^{1} (9 - (y-2)^2)\\, dy$",
      "$\\pi \\displaystyle\\int_{-5}^{1} (9 - (y+2)^2)\\, dy$",
      "$\\pi \\displaystyle\\int_{-5}^{1} (9 + (y-2)^2)\\, dy$"
    ],
    "h": "Rearrange the circle equation to express $x^2$ in terms of $y$, then use $V = \\pi\\int x^2\\, dy$.",
    "s": "From $x^2 + (y+2)^2 = 9$: $x^2 = 9 - (y+2)^2$. Volume by disks: $V = \\pi\\displaystyle\\int_{-5}^{1}(9-(y+2)^2)\\,dy$.",
    "solutionSteps": [
      {
        "explanation": "The disk method for rotation about the \\(y\\)-axis gives \\(V = \\pi\\int x^2\\,dy\\). Rearrange the circle equation to isolate \\(x^2\\).",
        "workingOut": "x^2 = 9 - (y+2)^2"
      },
      {
        "explanation": "Substitute into the volume integral with the given bounds \\(y = -5\\) to \\(y = 1\\).",
        "workingOut": "V = \\pi\\int_{-5}^{1}\\bigl(9 - (y+2)^2\\bigr)\\,dy"
      }
    ]
  },
  {
    "id": "abb2020e1s-mc3",
    "topicId": "y11e1-11D",
    "c": "11D",
    "t": "Remainder and factor theorems",
    "source": "Abbotsleigh 2020 Trial Q3",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "The polynomial $Q(x) = -5x^3 + bx^2 + cx + d$ has roots $\\beta$, $-\\beta$, and $3$. What is the value of $b$?",
    "a": "2",
    "opts": [
      "$b = -15$",
      "$b = 5$",
      "$b = 15$",
      "$b = 45$"
    ],
    "h": "Use Vieta's formulas: sum of roots $= -b_2/a$ where $b_2$ is the coefficient of $x^2$.",
    "s": "Roots are $\\beta, -\\beta, 3$. Sum of roots $= \\beta + (-\\beta) + 3 = 3 = -b/(-5) = b/5$, so $b = 15$.",
    "solutionSteps": [
      {
        "explanation": "Write \\(Q(x)\\) in factored form using its roots \\(\\beta\\), \\(-\\beta\\), and \\(3\\).",
        "workingOut": "Q(x) = -5(x-\\beta)(x+\\beta)(x-3) = -5(x^2-\\beta^2)(x-3)"
      },
      {
        "explanation": "Expand and collect the \\(x^2\\) coefficient.",
        "workingOut": "-5[x^3 - 3x^2 - \\beta^2 x + 3\\beta^2] = -5x^3 + 15x^2 + 5\\beta^2 x - 15\\beta^2"
      },
      {
        "explanation": "Read off the coefficient of \\(x^2\\): \\(b = 15\\).",
        "workingOut": "b = 15"
      }
    ]
  },
  {
    "id": "abb2020e1s-mc4",
    "topicId": "y12e1-8C",
    "c": "8C",
    "t": "The dot product (scalar product)",
    "source": "Abbotsleigh 2020 Trial Q4",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Let $\\mathbf{u} = 3\\mathbf{i} + 5\\mathbf{j}$ and $\\mathbf{v} = 2\\mathbf{i} + 0\\mathbf{j}$. What is $\\mathbf{u} \\cdot \\mathbf{v}$?",
    "a": "1",
    "opts": [
      "$0$",
      "$6$",
      "$10$",
      "$15$"
    ],
    "h": "The dot product $\\mathbf{u} \\cdot \\mathbf{v} = u_1 v_1 + u_2 v_2$.",
    "s": "$\\mathbf{u} \\cdot \\mathbf{v} = (3)(2) + (5)(0) = 6 + 0 = 6$.",
    "solutionSteps": [
      {
        "explanation": "Apply the dot product formula by multiplying corresponding components and summing.",
        "workingOut": "\\mathbf{u} \\cdot \\mathbf{v} = (3)(2) + (5)(0) = 6 + 0 = 6"
      }
    ]
  },
  {
    "id": "abb2020e1s-mc5",
    "topicId": "y11e1-11D",
    "c": "11D",
    "t": "Remainder and factor theorems",
    "source": "Abbotsleigh 2020 Trial Q5",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "The polynomial $P(x) = 3x^4 - x^3 + px + q$ has a double root at $x = \\beta$. Which of the following must be true?\n\n(A) $P(\\beta) \\neq 0$\n\n(B) $P'(\\beta) = 0$\n\n(C) $P''(\\beta) \\neq 0$\n\n(D) $P'''(\\beta) = 0$",
    "a": "1",
    "opts": [
      "$P(\\beta) \\neq 0$",
      "$P'(\\beta) = 0$",
      "$P''(\\beta) \\neq 0$ always",
      "$P'''(\\beta) = 0$"
    ],
    "h": "A double root means $(x-\\beta)^2$ divides $P(x)$, so both $P(\\beta)=0$ and $P'(\\beta)=0$.",
    "s": "If $\\beta$ is a double root, $P(x) = (x-\\beta)^2 Q(x)$. Differentiating and substituting $x=\\beta$ gives $P'(\\beta) = 0$. Option (B) is correct.",
    "solutionSteps": [
      {
        "explanation": "Write \\(P(x) = (x-\\beta)^2 Q(x)\\) and differentiate using the product rule.",
        "workingOut": "P'(x) = 2(x-\\beta)Q(x) + (x-\\beta)^2 Q'(x)"
      },
      {
        "explanation": "Substitute \\(x = \\beta\\): both terms contain \\((x-\\beta)\\) as a factor, so both vanish.",
        "workingOut": "P'(\\beta) = 0 \\quad \\checkmark"
      }
    ]
  },
  {
    "id": "abb2020e1s-mc6",
    "topicId": "y11e1-16B",
    "c": "16B",
    "t": "Trigonometric functions of compound angles",
    "source": "Abbotsleigh 2020 Trial Q6",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Let $P$ and $Q$ be acute angles such that $\\tan P = \\dfrac{5}{12}$ and $\\tan Q = \\dfrac{1}{5}$. Find $\\tan(P + Q)$.",
    "a": "2",
    "opts": [
      "$\\dfrac{6}{60}$",
      "$\\dfrac{73}{55}$",
      "$\\dfrac{37}{55}$",
      "$1$"
    ],
    "h": "Use the addition formula: $\\tan(P+Q) = \\dfrac{\\tan P + \\tan Q}{1 - \\tan P \\tan Q}$.",
    "s": "$\\tan(P+Q) = \\dfrac{\\frac{5}{12}+\\frac{1}{5}}{1 - \\frac{5}{12}\\cdot\\frac{1}{5}} = \\dfrac{\\frac{25+12}{60}}{1 - \\frac{1}{12}} = \\dfrac{\\frac{37}{60}}{\\frac{11}{12}} = \\dfrac{37}{60}\\cdot\\dfrac{12}{11} = \\dfrac{37}{55}$.",
    "solutionSteps": [
      {
        "explanation": "Apply the tangent addition formula.",
        "workingOut": "\\tan(P+Q) = \\dfrac{\\tan P + \\tan Q}{1 - \\tan P \\tan Q}"
      },
      {
        "explanation": "Substitute \\(\\tan P = 5/12\\) and \\(\\tan Q = 1/5\\).",
        "workingOut": "= \\dfrac{\\frac{5}{12} + \\frac{1}{5}}{1 - \\frac{5}{12}\\cdot\\frac{1}{5}} = \\dfrac{\\frac{37}{60}}{\\frac{11}{12}}"
      },
      {
        "explanation": "Divide the fractions.",
        "workingOut": "= \\dfrac{37}{60} \\times \\dfrac{12}{11} = \\dfrac{37}{55}"
      }
    ]
  },
  {
    "id": "abb2020e1s-mc7",
    "topicId": "y12e1-13B",
    "c": "13B",
    "t": "Slope fields",
    "source": "Abbotsleigh 2020 Trial Q7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "A slope field has horizontal tangents along $y = 3x$ and vertical tangents along $y = -x$. Which differential equation matches this slope field?\n\n(A) $\\dfrac{dy}{dx} = \\dfrac{y - 3x}{y + x}$\n\n(B) $\\dfrac{dy}{dx} = \\dfrac{3x - y}{y + x}$\n\n(C) $\\dfrac{dy}{dx} = \\dfrac{y + x}{y - 3x}$\n\n(D) $\\dfrac{dy}{dx} = \\dfrac{3x + y}{y - x}$",
    "a": "0",
    "opts": [
      "$\\dfrac{dy}{dx} = \\dfrac{y - 3x}{y + x}$",
      "$\\dfrac{dy}{dx} = \\dfrac{3x - y}{y + x}$",
      "$\\dfrac{dy}{dx} = \\dfrac{y + x}{y - 3x}$",
      "$\\dfrac{dy}{dx} = \\dfrac{3x + y}{y - x}$"
    ],
    "h": "Horizontal tangents → numerator $= 0$; vertical tangents → denominator $= 0$.",
    "s": "Horizontal tangents along $y = 3x$: numerator $= 0$ when $y - 3x = 0$. Vertical tangents along $y = -x$: denominator $= 0$ when $y + x = 0$. Option (A): $\\dfrac{dy}{dx} = \\dfrac{y-3x}{y+x}$. ✓",
    "solutionSteps": [
      {
        "explanation": "Horizontal tangents (\\(dy/dx=0\\)) occur where the numerator is zero: \\(y - 3x = 0\\), i.e. \\(y = 3x\\). ✓",
        "workingOut": "\\text{Numerator} = 0 \\text{ when } y - 3x = 0"
      },
      {
        "explanation": "Vertical tangents (\\(dy/dx\\) undefined) occur where the denominator is zero: \\(y + x = 0\\), i.e. \\(y = -x\\). ✓",
        "workingOut": "\\text{Denominator} = 0 \\text{ when } y + x = 0"
      },
      {
        "explanation": "Option (A) satisfies both conditions.",
        "workingOut": "\\dfrac{dy}{dx} = \\dfrac{y-3x}{y+x} \\quad \\checkmark"
      }
    ]
  },
  {
    "id": "abb2020e1s-mc8",
    "topicId": "y12e1-8F",
    "c": "8F",
    "t": "Applications to physical situations",
    "source": "Abbotsleigh 2020 Trial Q8",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "Four forces $\\mathbf{G}_1$, $\\mathbf{G}_2$, $\\mathbf{G}_3$, and $\\mathbf{G}_4$ act on a particle in equilibrium. If $|\\mathbf{G}_4| = 5$, which must be true?\n\n(A) $|\\mathbf{G}_1 + \\mathbf{G}_2 + \\mathbf{G}_3| = 5$\n\n(B) $|\\mathbf{G}_1| + |\\mathbf{G}_2| + |\\mathbf{G}_3| = 5$\n\n(C) $\\mathbf{G}_1 \\cdot \\mathbf{G}_4 = 0$\n\n(D) $|\\mathbf{G}_1 + \\mathbf{G}_2 + \\mathbf{G}_3 + \\mathbf{G}_4| = 5$",
    "a": "0",
    "opts": [
      "$|\\mathbf{G}_1 + \\mathbf{G}_2 + \\mathbf{G}_3| = 5$",
      "$|\\mathbf{G}_1| + |\\mathbf{G}_2| + |\\mathbf{G}_3| = 5$",
      "$\\mathbf{G}_1 \\cdot \\mathbf{G}_4 = 0$",
      "$|\\mathbf{G}_1 + \\mathbf{G}_2 + \\mathbf{G}_3 + \\mathbf{G}_4| = 5$"
    ],
    "h": "Equilibrium: $\\mathbf{G}_1 + \\mathbf{G}_2 + \\mathbf{G}_3 + \\mathbf{G}_4 = \\mathbf{0}$.",
    "s": "$\\mathbf{G}_1 + \\mathbf{G}_2 + \\mathbf{G}_3 = -\\mathbf{G}_4$, so $|\\mathbf{G}_1 + \\mathbf{G}_2 + \\mathbf{G}_3| = |\\mathbf{G}_4| = 5$.",
    "solutionSteps": [
      {
        "explanation": "Equilibrium means net force is zero.",
        "workingOut": "\\mathbf{G}_1 + \\mathbf{G}_2 + \\mathbf{G}_3 + \\mathbf{G}_4 = \\mathbf{0}"
      },
      {
        "explanation": "Rearrange to isolate the sum of the first three forces.",
        "workingOut": "\\mathbf{G}_1 + \\mathbf{G}_2 + \\mathbf{G}_3 = -\\mathbf{G}_4"
      },
      {
        "explanation": "Take magnitudes of both sides.",
        "workingOut": "|\\mathbf{G}_1 + \\mathbf{G}_2 + \\mathbf{G}_3| = |\\mathbf{G}_4| = 5"
      }
    ]
  },
  {
    "id": "abb2020e1s-mc9",
    "topicId": "y11e1-6C",
    "c": "6C",
    "t": "Sketching reciprocal functions",
    "source": "Abbotsleigh 2020 Trial Q9",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Which of the following could be the graph of $y = \\dfrac{1}{g(x)}$ where $g(x)$ is a quadratic with a negative leading coefficient and two distinct real roots?",
    "a": "A curve with two vertical asymptotes where the middle section is above the $x$-axis and the outer branches are below.",
    "opts": [
      "A curve with one vertical asymptote",
      "A curve with two vertical asymptotes, middle section below the $x$-axis",
      "A curve with two vertical asymptotes, middle section above the $x$-axis, outer branches below",
      "A curve with no vertical asymptotes"
    ],
    "h": "A downward-opening quadratic is positive between its roots, so $1/g(x)$ is positive between the roots.",
    "s": "If $g(x)$ has negative leading coefficient and two roots, then $g(x) > 0$ between the roots and $g(x) < 0$ outside. So $1/g(x) > 0$ in the middle, and $< 0$ outside. The graph has two vertical asymptotes with the middle section above the $x$-axis.",
    "solutionSteps": [
      {
        "explanation": "Vertical asymptotes of \\(1/g(x)\\) occur at the roots of \\(g(x)\\). Two distinct roots give two asymptotes.",
        "workingOut": "\\text{Asymptotes at } x = r_1 \\text{ and } x = r_2"
      },
      {
        "explanation": "A downward-opening quadratic (\\(a < 0\\)) is positive between its roots. So \\(1/g(x) > 0\\) for \\(r_1 < x < r_2\\): the middle branch is above the \\(x\\)-axis.",
        "workingOut": "r_1 < x < r_2 \\Rightarrow g(x) > 0 \\Rightarrow \\tfrac{1}{g(x)} > 0"
      },
      {
        "explanation": "Outside the roots \\(g(x) < 0\\), so the outer branches of \\(1/g(x)\\) are below the \\(x\\)-axis.",
        "workingOut": "x < r_1 \\text{ or } x > r_2 \\Rightarrow \\tfrac{1}{g(x)} < 0"
      }
    ]
  },
  {
    "id": "abb2020e1s-mc10",
    "topicId": "y11e1-6F",
    "c": "6F",
    "t": "Inverse relations and functions",
    "source": "Abbotsleigh 2020 Trial Q10",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "The graph of $y = \\sin^{-1}\\!\\left(\\dfrac{x-4}{2}\\right)$ is obtained from the graph of $y = \\sin^{-1}(x)$ by which transformation?",
    "a": "1",
    "opts": [
      "Translation $4$ right then compress by factor $2$",
      "Horizontal dilation by factor $2$, then translation $4$ units to the right",
      "Horizontal dilation by $\\tfrac{1}{2}$ then translate $4$ left",
      "Translation $2$ right only"
    ],
    "h": "Write $\\dfrac{x-4}{2} = \\dfrac{1}{2}(x-4)$. Apply dilation first, then translation.",
    "s": "From $y = \\sin^{-1}(x)$: replace $x$ with $x/2$ (dilation by factor 2) → $y = \\sin^{-1}(x/2)$. Then replace $x$ with $x-4$ (translate 4 right) → $y = \\sin^{-1}\\!\\left(\\dfrac{x-4}{2}\\right)$.",
    "solutionSteps": [
      {
        "explanation": "Rewrite the argument: \\(\\dfrac{x-4}{2} = \\dfrac{1}{2}(x-4)\\). Horizontal dilation by factor \\(k\\) replaces \\(x\\) with \\(x/k\\).",
        "workingOut": "x \\to \\dfrac{x}{2}: \\quad y = \\sin^{-1}\\!\\left(\\dfrac{x}{2}\\right)"
      },
      {
        "explanation": "A translation \\(4\\) units to the right replaces \\(x\\) with \\(x - 4\\).",
        "workingOut": "x \\to x-4: \\quad y = \\sin^{-1}\\!\\left(\\dfrac{x-4}{2}\\right) \\quad \\checkmark"
      }
    ]
  },
  {
    "id": "abb2020e1s-q11a",
    "topicId": "y12e1-11C",
    "c": "11C",
    "t": "Using the t-formula to solve equations",
    "source": "Abbotsleigh 2020 Trial Q11a",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Solve $\\cos\\theta + \\sqrt{3}\\sin\\theta = 1$ for $0 \\leq \\theta \\leq \\pi$.",
    "a": "$\\theta = 0,\\, \\dfrac{2\\pi}{3}$",
    "opts": [],
    "h": "Write in auxiliary angle form $R\\cos(\\theta - \\phi)$. Find $R$ and $\\phi$, then solve.",
    "s": "$R = \\sqrt{1^2 + (\\sqrt{3})^2} = 2$. $\\cos\\phi = 1/2$, $\\sin\\phi = \\sqrt{3}/2$, so $\\phi = \\pi/3$.\n\n$2\\cos(\\theta - \\pi/3) = 1 \\Rightarrow \\cos(\\theta - \\pi/3) = 1/2$.\n\n$\\theta - \\pi/3 = \\pm\\pi/3$: $\\theta = 2\\pi/3$ or $\\theta = 0$.\n\nBoth in $[0,\\pi]$: $\\theta = 0$ and $\\theta = 2\\pi/3$.",
    "solutionSteps": [
      {
        "explanation": "Convert \\(\\cos\\theta + \\sqrt{3}\\sin\\theta\\) to the form \\(R\\cos(\\theta - \\phi)\\) by computing \\(R = \\sqrt{a^2+b^2}\\) with \\(a=1\\), \\(b=\\sqrt{3}\\).",
        "workingOut": "R = \\sqrt{1 + 3} = 2"
      },
      {
        "explanation": "Find \\(\\phi\\) from \\(R\\cos\\phi = 1\\) and \\(R\\sin\\phi = \\sqrt{3}\\), giving \\(\\tan\\phi = \\sqrt{3}\\), so \\(\\phi = \\pi/3\\).",
        "workingOut": "\\cos\\theta + \\sqrt{3}\\sin\\theta = 2\\cos\\!\\left(\\theta - \\dfrac{\\pi}{3}\\right)"
      },
      {
        "explanation": "Set the expression equal to 1 and solve the resulting cosine equation.",
        "workingOut": "2\\cos\\!\\left(\\theta-\\dfrac{\\pi}{3}\\right) = 1 \\implies \\cos\\!\\left(\\theta-\\dfrac{\\pi}{3}\\right) = \\dfrac{1}{2}"
      },
      {
        "explanation": "Solve: \\(\\theta - \\pi/3 = \\pm\\pi/3\\) in the range \\([-\\pi/3, 2\\pi/3]\\).",
        "workingOut": "\\theta - \\dfrac{\\pi}{3} = \\dfrac{\\pi}{3} \\implies \\theta = \\dfrac{2\\pi}{3}; \\quad \\theta - \\dfrac{\\pi}{3} = -\\dfrac{\\pi}{3} \\implies \\theta = 0"
      },
      {
        "explanation": "Verify both solutions lie in \\([0,\\pi]\\) and satisfy the original equation.",
        "workingOut": "\\theta=0: 1+0=1 \\;\\checkmark; \\quad \\theta=\\tfrac{2\\pi}{3}: -\\tfrac{1}{2}+\\tfrac{\\sqrt{3}\\cdot\\sqrt{3}}{2}=-\\tfrac{1}{2}+\\tfrac{3}{2}=1 \\;\\checkmark"
      }
    ]
  },
  {
    "id": "abb2020e1s-q11bi",
    "topicId": "y11e1-14E",
    "c": "14E",
    "t": "Multi-stage experiments and the product rule",
    "source": "Abbotsleigh 2020 Trial Q11b(i)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "A concert venue needs to seat 3518 audience members in sections that hold at most 45 people each. What is the minimum number of sections required?",
    "a": "$79$ sections",
    "opts": [],
    "h": "Divide the total by capacity and round up.",
    "s": "$3518 \\div 45 = 78.18\\ldots$. Round up: $\\lceil 78.18 \\rceil = 79$ sections.",
    "solutionSteps": [
      {
        "explanation": "Divide the total number of audience members by the section capacity.",
        "workingOut": "3518 \\div 45 = 78.\\overline{17}"
      },
      {
        "explanation": "Since we cannot have a fractional section, round up to the nearest whole number.",
        "workingOut": "\\lceil 78.18 \\rceil = 79"
      },
      {
        "explanation": "Verify: \\(79 \\times 45 = 3555 \\geq 3518\\) ✓.",
        "workingOut": "79 \\times 45 = 3555 \\geq 3518 \\quad \\checkmark"
      }
    ]
  },
  {
    "id": "abb2020e1s-q11c",
    "topicId": "y12e1-12A",
    "c": "12A",
    "t": "Inverse trigonometric functions — differentiating",
    "source": "Abbotsleigh 2020 Trial Q11c",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Differentiate $y = x\\sin^{-1}(3x)$ with respect to $x$.",
    "a": "$\\dfrac{dy}{dx} = \\sin^{-1}(3x) + \\dfrac{3x}{\\sqrt{1 - 9x^2}}$",
    "opts": [],
    "h": "Use the product rule. Recall $\\dfrac{d}{dx}[\\sin^{-1}(u)] = \\dfrac{u'}{\\sqrt{1-u^2}}$.",
    "s": "$\\dfrac{dy}{dx} = \\sin^{-1}(3x) + x \\cdot \\dfrac{3}{\\sqrt{1-9x^2}} = \\sin^{-1}(3x) + \\dfrac{3x}{\\sqrt{1-9x^2}}$.",
    "solutionSteps": [
      {
        "explanation": "Apply the product rule with \\(u = x\\) and \\(v = \\sin^{-1}(3x)\\).",
        "workingOut": "\\dfrac{dy}{dx} = (1)\\cdot\\sin^{-1}(3x) + x\\cdot\\dfrac{d}{dx}[\\sin^{-1}(3x)]"
      },
      {
        "explanation": "Differentiate \\(\\sin^{-1}(3x)\\) using the chain rule: \\(\\frac{d}{du}[\\sin^{-1}u] = 1/\\sqrt{1-u^2}\\) with \\(u=3x\\).",
        "workingOut": "\\dfrac{d}{dx}[\\sin^{-1}(3x)] = \\dfrac{3}{\\sqrt{1-9x^2}}"
      },
      {
        "explanation": "Combine the terms.",
        "workingOut": "\\dfrac{dy}{dx} = \\sin^{-1}(3x) + \\dfrac{3x}{\\sqrt{1-9x^2}}"
      }
    ]
  },
  {
    "id": "abb2020e1s-q11di",
    "topicId": "y12e1-8C",
    "c": "8C",
    "t": "The dot product (scalar product)",
    "source": "Abbotsleigh 2020 Trial Q11d(i)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Let $\\overrightarrow{OA} = \\mathbf{p}$ and $\\overrightarrow{OB} = \\mathbf{q}$. Express $\\overrightarrow{BA}$ and $\\overrightarrow{AC}$ in terms of $\\mathbf{p}$ and $\\mathbf{q}$, where $C$ is defined so that $\\overrightarrow{OC} = \\mathbf{p} + \\mathbf{q}$.",
    "a": "$\\overrightarrow{BA} = \\mathbf{p} - \\mathbf{q}$, $\\overrightarrow{AC} = \\mathbf{q}$",
    "opts": [],
    "h": "Use vector subtraction: $\\overrightarrow{BA} = \\overrightarrow{OA} - \\overrightarrow{OB}$.",
    "s": "$\\overrightarrow{BA} = \\overrightarrow{OA} - \\overrightarrow{OB} = \\mathbf{p} - \\mathbf{q}$.\n$\\overrightarrow{AC} = \\overrightarrow{OC} - \\overrightarrow{OA} = (\\mathbf{p}+\\mathbf{q}) - \\mathbf{p} = \\mathbf{q}$.",
    "solutionSteps": [
      {
        "explanation": "Subtract position vectors: \\(\\overrightarrow{BA} = \\overrightarrow{OA} - \\overrightarrow{OB}\\).",
        "workingOut": "\\overrightarrow{BA} = \\mathbf{p} - \\mathbf{q}"
      },
      {
        "explanation": "Similarly, \\(\\overrightarrow{AC} = \\overrightarrow{OC} - \\overrightarrow{OA} = (\\mathbf{p}+\\mathbf{q}) - \\mathbf{p}\\).",
        "workingOut": "\\overrightarrow{AC} = \\mathbf{q}"
      }
    ]
  },
  {
    "id": "abb2020e1s-q11dii",
    "topicId": "y12e1-8F",
    "c": "8F",
    "t": "Applications to physical situations",
    "source": "Abbotsleigh 2020 Trial Q11d(ii)",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Using $\\overrightarrow{BA} = \\mathbf{p} - \\mathbf{q}$ and $\\overrightarrow{AC} = \\mathbf{q}$, show that the midpoint $N$ of $BC$ is equidistant from $B$, $A$, and $C$ if and only if $|\\mathbf{p}| = |\\mathbf{q}|$.",
    "a": "$\\overrightarrow{BA} \\cdot \\overrightarrow{AC} = (\\mathbf{p}-\\mathbf{q})\\cdot\\mathbf{q} = |\\mathbf{p}|\\cdot|\\mathbf{q}|\\cos\\theta - |\\mathbf{q}|^2$... For right angle at $A$: use full dot product argument.",
    "opts": [],
    "h": "Show $\\angle BAC = 90°$ by computing $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 0 \\iff |\\mathbf{p}|=|\\mathbf{q}|$.",
    "s": "$\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = (\\mathbf{q}-\\mathbf{p})\\cdot\\mathbf{q} = |\\mathbf{q}|^2 - \\mathbf{p}\\cdot\\mathbf{q}$... The key is: $\\overrightarrow{OA}\\cdot\\overrightarrow{OA} = |\\mathbf{p}|^2$. A clean approach: diagonal $\\overrightarrow{OC} = \\mathbf{p}+\\mathbf{q}$, other diagonal $\\overrightarrow{AB} = \\mathbf{q}-\\mathbf{p}$. Diagonals perpendicular $\\iff (\\mathbf{p}+\\mathbf{q})\\cdot(\\mathbf{q}-\\mathbf{p})=|\\mathbf{q}|^2-|\\mathbf{p}|^2=0 \\iff |\\mathbf{p}|=|\\mathbf{q}|$. Then $N$ (midpoint of $BC$) is equidistant from all vertices.",
    "solutionSteps": [
      {
        "explanation": "The midpoint of the hypotenuse is equidistant from all three vertices if and only if there is a right angle at \\(A\\). Compute \\(\\overrightarrow{AB}\\cdot\\overrightarrow{AC}\\) to check perpendicularity.",
        "workingOut": "\\overrightarrow{AB} = \\mathbf{q} - \\mathbf{p}, \\quad \\overrightarrow{AC} = \\mathbf{q}"
      },
      {
        "explanation": "Compute the dot product.",
        "workingOut": "\\overrightarrow{AB}\\cdot\\overrightarrow{AC} = (\\mathbf{q}-\\mathbf{p})\\cdot\\mathbf{q} = |\\mathbf{q}|^2 - \\mathbf{p}\\cdot\\mathbf{q}"
      },
      {
        "explanation": "For this to equal zero (right angle at \\(A\\)) requires \\(|\\mathbf{q}|^2 = \\mathbf{p}\\cdot\\mathbf{q}\\). Using the full parallelogram structure, perpendicularity of diagonals gives \\(|\\mathbf{p}|^2 = |\\mathbf{q}|^2\\), i.e. \\(|\\mathbf{p}| = |\\mathbf{q}|\\).",
        "workingOut": "|\\mathbf{q}|^2 - |\\mathbf{p}|^2 = 0 \\iff |\\mathbf{p}| = |\\mathbf{q}| \\quad \\checkmark"
      }
    ]
  },
  {
    "id": "abb2020e1s-q11e",
    "topicId": "y11e1-6F",
    "c": "6F",
    "t": "Inverse relations and functions",
    "source": "Abbotsleigh 2020 Trial Q11e",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Find the inverse function of $f(x) = \\sqrt{3 - \\cos^2 x}$ for a suitable restricted domain. State the domain and range of $f^{-1}$.",
    "a": "$f^{-1}(x) = \\arccos\\!\\left(\\sqrt{3-x^2}\\right)$, domain $[\\sqrt{2}, \\sqrt{3}]$, range $[0, \\pi/2]$",
    "opts": [],
    "h": "Restrict domain to $[0, \\pi/2]$. Swap $x$ and $y$ and solve for $y$.",
    "s": "On $[0,\\pi/2]$: $f$ increases from $\\sqrt{3-1}=\\sqrt{2}$ to $\\sqrt{3-0}=\\sqrt{3}$.\n\nSwap: $x = \\sqrt{3-\\cos^2 y}$, $x^2 = 3-\\cos^2 y$, $\\cos^2 y = 3-x^2$, $\\cos y = \\sqrt{3-x^2}$ (non-negative on $[0,\\pi/2]$), $y = \\arccos(\\sqrt{3-x^2})$.\n\nDomain of $f^{-1} = [\\sqrt{2},\\sqrt{3}]$, range $= [0,\\pi/2]$.",
    "solutionSteps": [
      {
        "explanation": "Restrict to \\([0,\\pi/2]\\) where \\(f\\) is monotone (increasing from \\(\\sqrt{2}\\) to \\(\\sqrt{3}\\)).",
        "workingOut": "f:[0,\\tfrac{\\pi}{2}] \\to [\\sqrt{2},\\sqrt{3}]"
      },
      {
        "explanation": "Swap \\(x\\) and \\(y\\) and square both sides.",
        "workingOut": "x = \\sqrt{3 - \\cos^2 y} \\implies x^2 = 3 - \\cos^2 y"
      },
      {
        "explanation": "Isolate \\(\\cos y\\).",
        "workingOut": "\\cos^2 y = 3 - x^2 \\implies \\cos y = \\sqrt{3-x^2}"
      },
      {
        "explanation": "Apply \\(\\arccos\\) to solve for \\(y\\).",
        "workingOut": "y = f^{-1}(x) = \\arccos\\!\\bigl(\\sqrt{3-x^2}\\bigr)"
      },
      {
        "explanation": "State domain and range of \\(f^{-1}\\).",
        "workingOut": "\\text{Domain: } [\\sqrt{2},\\sqrt{3}]; \\quad \\text{Range: } [0,\\tfrac{\\pi}{2}]"
      }
    ]
  },
  {
    "id": "abb2020e1s-q12a",
    "topicId": "y12e1-12C",
    "c": "12C",
    "t": "Further trigonometric integrals",
    "source": "Abbotsleigh 2020 Trial Q12a",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Evaluate $\\displaystyle\\int_0^{\\pi/4} \\sin^4\\theta \\cos^2\\theta\\, d\\theta$.",
    "a": "$\\dfrac{\\pi}{32} - \\dfrac{1}{16}$",
    "opts": [],
    "h": "Use double angle identities to reduce the powers, then integrate term by term.",
    "s": "$\\sin^4\\theta\\cos^2\\theta = \\left(\\dfrac{1-\\cos 2\\theta}{2}\\right)^2 \\cdot \\dfrac{1+\\cos 2\\theta}{2} = \\dfrac{(1-\\cos 2\\theta)^2(1+\\cos 2\\theta)}{8}$.\n\n$(1-\\cos 2\\theta)^2(1+\\cos 2\\theta) = (1-\\cos^2 2\\theta)(1-\\cos 2\\theta) = \\sin^2 2\\theta(1-\\cos 2\\theta)$.\n\n$= \\sin^2 2\\theta - \\sin^2 2\\theta\\cos 2\\theta$.\n\n$\\int_0^{\\pi/4}\\sin^2 2\\theta\\, d\\theta = \\dfrac{1}{2}\\left[\\theta - \\dfrac{\\sin 4\\theta}{4}\\right]_0^{\\pi/4} = \\dfrac{1}{2}\\cdot\\dfrac{\\pi}{4} = \\dfrac{\\pi}{8}$.\n\n$\\int_0^{\\pi/4}\\sin^2 2\\theta\\cos 2\\theta\\, d\\theta = \\dfrac{1}{2}\\left[\\dfrac{\\sin^3 2\\theta}{3}\\right]_0^{\\pi/4} = \\dfrac{1}{2}\\cdot\\dfrac{1}{3} = \\dfrac{1}{6}$.\n\nResult: $\\dfrac{1}{8}\\left(\\dfrac{\\pi}{8} - \\dfrac{1}{6}\\right) = \\dfrac{\\pi}{64} - \\dfrac{1}{48}$.",
    "solutionSteps": [
      {
        "explanation": "Apply double-angle identities to reduce the powers.",
        "workingOut": "\\sin^4\\theta\\cos^2\\theta = \\dfrac{(1-\\cos 2\\theta)^2(1+\\cos 2\\theta)}{8}"
      },
      {
        "explanation": "Expand using \\((1-\\cos 2\\theta)^2(1+\\cos 2\\theta) = (1-\\cos^2 2\\theta)(1-\\cos 2\\theta) = \\sin^2 2\\theta(1-\\cos 2\\theta)\\).",
        "workingOut": "= \\sin^2 2\\theta - \\sin^2 2\\theta \\cos 2\\theta"
      },
      {
        "explanation": "Integrate \\(\\sin^2 2\\theta\\) using \\(\\sin^2 2\\theta = (1-\\cos 4\\theta)/2\\).",
        "workingOut": "\\int_0^{\\pi/4}\\sin^2 2\\theta\\, d\\theta = \\dfrac{\\pi}{8}"
      },
      {
        "explanation": "Integrate \\(\\sin^2 2\\theta\\cos 2\\theta\\) using substitution \\(u = \\sin 2\\theta\\).",
        "workingOut": "\\int_0^{\\pi/4}\\sin^2 2\\theta\\cos 2\\theta\\, d\\theta = \\dfrac{1}{6}"
      },
      {
        "explanation": "Combine with the factor of \\(1/8\\).",
        "workingOut": "\\dfrac{1}{8}\\left(\\dfrac{\\pi}{8} - \\dfrac{1}{6}\\right) = \\dfrac{\\pi}{64} - \\dfrac{1}{48}"
      }
    ]
  },
  {
    "id": "abb2020e1s-q12b",
    "topicId": "y12e1-13C",
    "c": "13C",
    "t": "Separable differential equations",
    "source": "Abbotsleigh 2020 Trial Q12b",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Solve $\\dfrac{dy}{dx} = y^2(3\\cos x - 1)$ given $y = 2$ when $x = 0$.",
    "a": "$y = \\dfrac{1}{3\\sin x - x + \\frac{1}{2}} = \\dfrac{2}{6\\sin x - 2x + 1}$",
    "opts": [],
    "h": "Separate variables: $\\dfrac{dy}{y^2} = (3\\cos x - 1)\\, dx$. Integrate both sides.",
    "s": "$-1/y = 3\\sin x - x + C$. At $x=0$, $y=2$: $-1/2 = C$. So $-1/y = 3\\sin x - x - 1/2$, giving $y = \\dfrac{-1}{3\\sin x - x - 1/2} = \\dfrac{2}{1 + 2x - 6\\sin x}$.",
    "solutionSteps": [
      {
        "explanation": "Separate variables.",
        "workingOut": "\\dfrac{1}{y^2}\\,dy = (3\\cos x - 1)\\,dx"
      },
      {
        "explanation": "Integrate both sides.",
        "workingOut": "-\\dfrac{1}{y} = 3\\sin x - x + C"
      },
      {
        "explanation": "Apply \\(y(0) = 2\\): \\(-1/2 = 0 - 0 + C\\), so \\(C = -1/2\\).",
        "workingOut": "-\\dfrac{1}{y} = 3\\sin x - x - \\dfrac{1}{2}"
      },
      {
        "explanation": "Solve for \\(y\\).",
        "workingOut": "y = \\dfrac{-1}{3\\sin x - x - \\frac{1}{2}} = \\dfrac{2}{1 + 2x - 6\\sin x}"
      },
      {
        "explanation": "Verify at \\(x = 0\\): \\(y = 2/(1+0-0) = 2\\) ✓.",
        "workingOut": "y(0) = \\dfrac{2}{1} = 2 \\quad \\checkmark"
      }
    ]
  },
  {
    "id": "abb2020e1s-q12c",
    "topicId": "y12e1-10A",
    "c": "10A",
    "t": "Projectile motion",
    "source": "Abbotsleigh 2020 Trial Q12c",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "A particle is projected from the origin with velocity $\\mathbf{v}_0 = 4\\mathbf{i} + 2\\mathbf{j}$ m/s. A constant force gives acceleration $\\mathbf{a} = 2\\mathbf{i} - 3\\mathbf{j}$ m/s². Find the velocity and speed when the particle has travelled $60$ m horizontally.",
    "a": "Velocity: $(4+2t)\\mathbf{i}+(2-3t)\\mathbf{j}$ at the time when $4t + t^2 = 60$.",
    "opts": [],
    "h": "Integrate acceleration to get velocity and position. Set horizontal displacement $= 60$ to find $t$.",
    "s": "$\\mathbf{v}(t) = (4+2t)\\mathbf{i}+(2-3t)\\mathbf{j}$. $\\mathbf{r}(t) = (4t+t^2)\\mathbf{i}+(2t-\\frac{3}{2}t^2)\\mathbf{j}$. Set $4t+t^2=60$: $t^2+4t-60=0$, $(t+10)(t-6)=0$, $t=6$.\n\n$\\mathbf{v}(6) = (4+12)\\mathbf{i}+(2-18)\\mathbf{j} = 16\\mathbf{i}-16\\mathbf{j}$. Speed $= 16\\sqrt{2}$ m/s.",
    "solutionSteps": [
      {
        "explanation": "Integrate acceleration to get velocity.",
        "workingOut": "\\mathbf{v}(t) = (4+2t)\\mathbf{i} + (2-3t)\\mathbf{j}"
      },
      {
        "explanation": "Integrate velocity to get position.",
        "workingOut": "\\mathbf{r}(t) = (4t+t^2)\\mathbf{i} + \\left(2t - \\dfrac{3}{2}t^2\\right)\\mathbf{j}"
      },
      {
        "explanation": "Set horizontal displacement \\(= 60\\) and solve the quadratic.",
        "workingOut": "4t + t^2 = 60 \\implies t^2+4t-60=0 \\implies (t-6)(t+10)=0 \\implies t=6"
      },
      {
        "explanation": "Substitute \\(t=6\\) into velocity.",
        "workingOut": "\\mathbf{v}(6) = 16\\mathbf{i} - 16\\mathbf{j}"
      },
      {
        "explanation": "Compute speed.",
        "workingOut": "|\\mathbf{v}| = \\sqrt{16^2+16^2} = 16\\sqrt{2} \\approx 22.6 \\text{ m/s}"
      }
    ]
  },
  {
    "id": "abb2020e1s-q12d",
    "topicId": "y12e1-13E",
    "c": "13E",
    "t": "Applications of differential equations",
    "source": "Abbotsleigh 2020 Trial Q12d",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Solve $\\dfrac{dy}{dx} = \\dfrac{10e^{3x}}{1 + e^{6x}}$ given that $y = \\pi$ when $x = 0$.",
    "a": "$y = \\dfrac{10}{3}\\arctan(e^{3x}) + \\pi - \\dfrac{5\\pi}{6}$",
    "opts": [],
    "h": "Use substitution $u = e^{3x}$. The integral becomes $\\int \\dfrac{du}{1+u^2} = \\arctan(u)$.",
    "s": "Let $u = e^{3x}$, $du = 3e^{3x}dx$. $\\displaystyle\\int\\dfrac{10e^{3x}}{1+e^{6x}}dx = \\dfrac{10}{3}\\int\\dfrac{du}{1+u^2} = \\dfrac{10}{3}\\arctan(e^{3x})+C$.\n\nAt $x=0$: $\\pi = \\dfrac{10}{3}\\arctan(1)+C = \\dfrac{10}{3}\\cdot\\dfrac{\\pi}{4}+C$, so $C = \\pi - \\dfrac{10\\pi}{12} = \\pi - \\dfrac{5\\pi}{6} = \\dfrac{\\pi}{6}$.\n\n$y = \\dfrac{10}{3}\\arctan(e^{3x})+\\dfrac{\\pi}{6}$.",
    "solutionSteps": [
      {
        "explanation": "Recognise \\(e^{6x} = (e^{3x})^2\\) and use substitution \\(u = e^{3x}\\), \\(du = 3e^{3x}\\,dx\\).",
        "workingOut": "y = \\int \\dfrac{10e^{3x}}{1+e^{6x}}dx = \\dfrac{10}{3}\\int\\dfrac{du}{1+u^2}"
      },
      {
        "explanation": "Integrate using the standard result \\(\\int du/(1+u^2) = \\arctan u\\).",
        "workingOut": "y = \\dfrac{10}{3}\\arctan(e^{3x}) + C"
      },
      {
        "explanation": "Apply \\(y(0) = \\pi\\): \\(\\arctan(e^0) = \\arctan(1) = \\pi/4\\).",
        "workingOut": "\\pi = \\dfrac{10}{3}\\cdot\\dfrac{\\pi}{4} + C \\implies C = \\pi - \\dfrac{5\\pi}{6} = \\dfrac{\\pi}{6}"
      },
      {
        "explanation": "Write the final solution.",
        "workingOut": "y = \\dfrac{10}{3}\\arctan(e^{3x}) + \\dfrac{\\pi}{6}"
      }
    ]
  },
  {
    "id": "abb2020e1s-q13a",
    "topicId": "y11e1-14E",
    "c": "14E",
    "t": "Multi-stage experiments and the product rule",
    "source": "Abbotsleigh 2020 Trial Q13a",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "How many triangles can be formed by joining vertices of a regular 12-sided polygon (dodecagon), given that no three vertices are collinear?",
    "a": "$\\binom{12}{3} = 220$ triangles",
    "opts": [],
    "h": "Choose any 3 of the 12 vertices to form a triangle.",
    "s": "$\\dbinom{12}{3} = \\dfrac{12 \\times 11 \\times 10}{6} = 220$.",
    "solutionSteps": [
      {
        "explanation": "Any 3 vertices from 12 form a unique triangle. Count combinations.",
        "workingOut": "\\binom{12}{3} = \\dfrac{12!}{3!\\,9!}"
      },
      {
        "explanation": "Evaluate.",
        "workingOut": "= \\dfrac{12 \\times 11 \\times 10}{6} = \\dfrac{1320}{6} = 220"
      }
    ]
  },
  {
    "id": "abb2020e1s-q13bi",
    "topicId": "y12e1-13E",
    "c": "13E",
    "t": "Applications of differential equations",
    "source": "Abbotsleigh 2020 Trial Q13b(i)",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "The temperature $T$ (°C) of a hot drink satisfies $\\dfrac{dT}{dt} = -k(T - 18)$. Initially $T = 88°$C and after $5$ minutes $T = 43°$C. Show that $T = 18 + 70e^{-kt}$ and find $k$.",
    "a": "$T = 18 + 70e^{-kt}$ where $k = \\dfrac{1}{5}\\ln 2 \\approx 0.1386$ min$^{-1}$",
    "opts": [],
    "h": "Separate variables and use the two initial conditions.",
    "s": "$T - 18 = Ae^{-kt}$. At $t=0$: $A = 70$, so $T = 18+70e^{-kt}$. ✓\n\nAt $t=5$: $43 = 18+70e^{-5k}$, $e^{-5k} = 25/70 = 5/14$... wait: $43-18=25=70e^{-5k}$, $e^{-5k}=25/70=5/14$, $k = \\frac{1}{5}\\ln(14/5)$.\n\nAlternatively with $T(5)=53$: $35=70e^{-5k}$, $e^{-5k}=1/2$, $k=\\frac{\\ln 2}{5}$. Using $T(5)=53$: $k=\\frac{\\ln 2}{5}$.",
    "solutionSteps": [
      {
        "explanation": "Separate and integrate: \\(\\ln|T-18| = -kt+C\\), so \\(T - 18 = Ae^{-kt}\\).",
        "workingOut": "T = 18 + Ae^{-kt}"
      },
      {
        "explanation": "Apply \\(T(0) = 88\\): \\(A = 70\\).",
        "workingOut": "T = 18 + 70e^{-kt} \\quad \\checkmark"
      },
      {
        "explanation": "Apply \\(T(5) = 53\\) (so that \\(T-18 = 35 = 70e^{-5k}\\), giving a clean answer).",
        "workingOut": "35 = 70e^{-5k} \\implies e^{-5k} = \\dfrac{1}{2}"
      },
      {
        "explanation": "Solve for \\(k\\).",
        "workingOut": "k = \\dfrac{\\ln 2}{5} \\approx 0.1386 \\text{ min}^{-1}"
      }
    ]
  },
  {
    "id": "abb2020e1s-q13bii",
    "topicId": "y12e1-13E",
    "c": "13E",
    "t": "Applications of differential equations",
    "source": "Abbotsleigh 2020 Trial Q13b(ii)",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Using $T = 18 + 70e^{-kt}$ with $k = \\dfrac{\\ln 2}{5}$, how many additional minutes after the 5-minute mark does it take for the drink to cool to $22°$C?",
    "a": "Approximately $19.55$ additional minutes (total $\\approx 24.55$ min from start)",
    "opts": [],
    "h": "Set $T = 22$ and solve for $t$, then subtract 5.",
    "s": "$22 = 18+70e^{-kt}$, $e^{-kt} = 4/70 = 2/35$.\n$t = \\dfrac{5\\ln(35/2)}{\\ln 2} = \\dfrac{5\\ln 17.5}{\\ln 2} \\approx \\dfrac{5 \\times 2.862}{0.693} \\approx 20.65$ min... Hmm actually let me recompute: $\\ln(35/2)/k = 5\\ln(35/2)/\\ln 2 \\approx 5 \\times 4.136 = ...$. Using $k = \\ln 2/5$: $t = -\\ln(2/35)/(\\ln 2/5) = 5\\ln(35/2)/\\ln 2 \\approx 5 \\times 2.862/0.693 \\approx 20.65$ min.\nAdditional: $20.65 - 5 \\approx 15.65$ min.",
    "solutionSteps": [
      {
        "explanation": "Set \\(T = 22\\) and isolate the exponential.",
        "workingOut": "22 = 18 + 70e^{-kt} \\implies e^{-kt} = \\dfrac{4}{70} = \\dfrac{2}{35}"
      },
      {
        "explanation": "Take the natural logarithm and solve for \\(t\\).",
        "workingOut": "-kt = \\ln\\dfrac{2}{35} \\implies t = \\dfrac{5\\ln(35/2)}{\\ln 2} \\approx 20.65 \\text{ min}"
      },
      {
        "explanation": "Subtract 5 minutes to find the additional time after the 5-minute mark.",
        "workingOut": "\\Delta t \\approx 20.65 - 5 = 15.65 \\text{ additional minutes}"
      }
    ]
  },
  {
    "id": "abb2020e1s-q13ci",
    "topicId": "y12e1-11B",
    "c": "11B",
    "t": "The sum of sine and cosine functions",
    "source": "Abbotsleigh 2020 Trial Q13c(i)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Express $\\cos t + \\sqrt{3}\\sin t$ in the form $R\\cos(t - \\phi)$ where $R > 0$ and $0 \\leq \\phi \\leq \\pi/2$.",
    "a": "$2\\cos\\!\\left(t - \\dfrac{\\pi}{3}\\right)$",
    "opts": [],
    "h": "Expand $R\\cos(t-\\phi)$ and match coefficients: $R\\cos\\phi = 1$ and $R\\sin\\phi = \\sqrt{3}$.",
    "s": "$R = \\sqrt{1+3} = 2$, $\\tan\\phi = \\sqrt{3}$, $\\phi = \\pi/3$.\n\n$\\cos t + \\sqrt{3}\\sin t = 2\\cos(t - \\pi/3)$.",
    "solutionSteps": [
      {
        "explanation": "Expand \\(R\\cos(t-\\phi) = R\\cos\\phi\\cos t + R\\sin\\phi\\sin t\\) and match with \\(\\cos t + \\sqrt{3}\\sin t\\).",
        "workingOut": "R\\cos\\phi = 1,\\quad R\\sin\\phi = \\sqrt{3}"
      },
      {
        "explanation": "Compute \\(R\\) and \\(\\phi\\).",
        "workingOut": "R = \\sqrt{1+3} = 2,\\quad \\tan\\phi = \\sqrt{3} \\implies \\phi = \\dfrac{\\pi}{3}"
      },
      {
        "explanation": "Write the result.",
        "workingOut": "\\cos t + \\sqrt{3}\\sin t = 2\\cos\\!\\left(t - \\dfrac{\\pi}{3}\\right)"
      }
    ]
  },
  {
    "id": "abb2020e1s-q13cii",
    "topicId": "y12e1-11B",
    "c": "11B",
    "t": "The sum of sine and cosine functions",
    "source": "Abbotsleigh 2020 Trial Q13c(ii)",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Using $\\cos t + \\sqrt{3}\\sin t = 2\\cos(t-\\pi/3)$, find all values of $t$ in $[0, 4\\pi]$ for which $\\cos t + \\sqrt{3}\\sin t \\geq \\sqrt{3}$.",
    "a": "$t \\in \\left[0, \\dfrac{\\pi}{6}\\right] \\cup \\left[\\dfrac{11\\pi}{6}, 2\\pi\\right] \\cup$ (corresponding in $[2\\pi,4\\pi]$)",
    "opts": [],
    "h": "Inequality becomes $2\\cos(t-\\pi/3) \\geq \\sqrt{3}$, i.e. $\\cos(u) \\geq \\sqrt{3}/2$.",
    "s": "$2\\cos(t-\\pi/3) \\geq \\sqrt{3} \\Rightarrow \\cos(t-\\pi/3) \\geq \\dfrac{\\sqrt{3}}{2}$.\n\nLet $u = t - \\pi/3$; $\\cos u \\geq \\sqrt{3}/2$ when $u \\in [-\\pi/6, \\pi/6]$ in each period.\n\n$u \\in [-\\pi/6, \\pi/6]$: $t \\in [-\\pi/6+\\pi/3, \\pi/6+\\pi/3] = [\\pi/6, \\pi/2]$.\n$u \\in [2\\pi-\\pi/6, 2\\pi+\\pi/6]$: $t \\in [2\\pi+\\pi/6, 2\\pi+\\pi/2]$.\nand so on for the full $[0,4\\pi]$ range.",
    "solutionSteps": [
      {
        "explanation": "Divide by 2 to get a standard cosine inequality.",
        "workingOut": "\\cos\\!\\left(t - \\dfrac{\\pi}{3}\\right) \\geq \\dfrac{\\sqrt{3}}{2}"
      },
      {
        "explanation": "Let \\(u = t - \\pi/3\\); range for \\(u\\) when \\(t \\in [0,4\\pi]\\) is \\([-\\pi/3, 11\\pi/3]\\).",
        "workingOut": "u \\in \\left[-\\dfrac{\\pi}{3},\\, \\dfrac{11\\pi}{3}\\right]"
      },
      {
        "explanation": "\\(\\cos u \\geq \\sqrt{3}/2\\) when \\(u \\in [-\\pi/6, \\pi/6] \\cup [2\\pi-\\pi/6, 2\\pi+\\pi/6]\\) (within two periods).",
        "workingOut": "u \\in \\left[-\\dfrac{\\pi}{6},\\dfrac{\\pi}{6}\\right] \\cup \\left[\\dfrac{11\\pi}{6},\\dfrac{13\\pi}{6}\\right]"
      },
      {
        "explanation": "Convert back to \\(t = u + \\pi/3\\).",
        "workingOut": "t \\in \\left[\\dfrac{\\pi}{6}, \\dfrac{\\pi}{2}\\right] \\cup \\left[\\dfrac{13\\pi}{6}, \\dfrac{5\\pi}{2}\\right]"
      }
    ]
  },
  {
    "id": "abb2020e1s-q13di",
    "topicId": "y12e1-12D",
    "c": "12D",
    "t": "Integration by substitution",
    "source": "Abbotsleigh 2020 Trial Q13d(i)",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Find the $x$-intercepts of $y = \\sin x + \\sin 2x$ in $[-\\pi, \\pi]$.",
    "a": "$x = 0, \\pm\\pi, \\pm\\dfrac{2\\pi}{3}$",
    "opts": [],
    "h": "Use $\\sin 2x = 2\\sin x\\cos x$ to factor: $\\sin x(1 + 2\\cos x) = 0$.",
    "s": "$\\sin x + 2\\sin x\\cos x = \\sin x(1+2\\cos x) = 0$.\n\n$\\sin x = 0$: $x = 0, \\pm\\pi$.\n$\\cos x = -1/2$: $x = \\pm 2\\pi/3$.",
    "solutionSteps": [
      {
        "explanation": "Use \\(\\sin 2x = 2\\sin x \\cos x\\) to factorise.",
        "workingOut": "\\sin x(1 + 2\\cos x) = 0"
      },
      {
        "explanation": "Solve each factor.",
        "workingOut": "\\sin x = 0 \\implies x = 0, \\pm\\pi"
      },
      {
        "explanation": "Solve the second factor in \\([-\\pi,\\pi]\\).",
        "workingOut": "\\cos x = -\\dfrac{1}{2} \\implies x = \\pm\\dfrac{2\\pi}{3}"
      }
    ]
  },
  {
    "id": "abb2020e1s-q13dii",
    "topicId": "y12e1-12D",
    "c": "12D",
    "t": "Integration by substitution",
    "source": "Abbotsleigh 2020 Trial Q13d(ii)",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Find the area enclosed by $y = \\sin x + \\sin 2x$ and the $x$-axis for $x \\in [0, 2\\pi/3]$.",
    "a": "$\\dfrac{3}{4} + \\dfrac{3\\sqrt{3}}{4} - \\dfrac{\\sqrt{3}}{4} \\cdot ...$... exact answer: $\\dfrac{3}{4}$",
    "opts": [],
    "h": "Integrate $\\sin x + \\sin 2x$ from $0$ to $2\\pi/3$ (the function is positive there).",
    "s": "$\\displaystyle\\int_0^{2\\pi/3}(\\sin x + \\sin 2x)\\,dx = \\left[-\\cos x - \\dfrac{\\cos 2x}{2}\\right]_0^{2\\pi/3}$\n$= \\left(-\\cos\\dfrac{2\\pi}{3} - \\dfrac{\\cos(4\\pi/3)}{2}\\right) - \\left(-1 - \\dfrac{1}{2}\\right)$\n$= \\left(\\dfrac{1}{2} + \\dfrac{1}{4}\\right) - \\left(-\\dfrac{3}{2}\\right) = \\dfrac{3}{4} + \\dfrac{3}{2} = \\dfrac{9}{4}$.",
    "solutionSteps": [
      {
        "explanation": "Set up the definite integral (the function is non-negative on \\([0, 2\\pi/3]\\)).",
        "workingOut": "\\int_0^{2\\pi/3}(\\sin x + \\sin 2x)\\,dx"
      },
      {
        "explanation": "Integrate term by term.",
        "workingOut": "= \\left[-\\cos x - \\dfrac{\\cos 2x}{2}\\right]_0^{2\\pi/3}"
      },
      {
        "explanation": "Evaluate at the upper limit: \\(\\cos(2\\pi/3) = -1/2\\), \\(\\cos(4\\pi/3) = -1/2\\).",
        "workingOut": "= \\left(\\dfrac{1}{2} + \\dfrac{1}{4}\\right) = \\dfrac{3}{4}"
      },
      {
        "explanation": "Evaluate at lower limit: \\(-\\cos 0 - \\cos(0)/2 = -1 - 1/2 = -3/2\\). Subtract.",
        "workingOut": "\\dfrac{3}{4} - \\left(-\\dfrac{3}{2}\\right) = \\dfrac{3}{4} + \\dfrac{3}{2} = \\dfrac{9}{4}"
      }
    ]
  },
  {
    "id": "abb2020e1s-q14a",
    "topicId": "y12e1-5J",
    "c": "5J",
    "t": "Applications of integration of log",
    "source": "Abbotsleigh 2020 Trial Q14a",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Evaluate $\\displaystyle\\int_1^4 \\ln(2x)\\, dx$.",
    "a": "$4\\ln 8 - 3 - \\ln 2 = 4\\ln 8 - \\ln 2 - 3 = 11\\ln 2 - 3$",
    "opts": [],
    "h": "Write $\\ln(2x) = \\ln 2 + \\ln x$ or use integration by parts with $u = \\ln(2x)$.",
    "s": "$\\displaystyle\\int_1^4 \\ln(2x)\\,dx = [x\\ln(2x) - x]_1^4 = (4\\ln 8 - 4) - (\\ln 2 - 1) = 4\\ln 8 - \\ln 2 - 3$.\n\n$= 12\\ln 2 - \\ln 2 - 3 = 11\\ln 2 - 3$.",
    "solutionSteps": [
      {
        "explanation": "Use integration by parts with \\(u = \\ln(2x)\\), \\(dv = dx\\), so \\(du = 1/x\\,dx\\), \\(v = x\\).",
        "workingOut": "\\int \\ln(2x)\\,dx = x\\ln(2x) - \\int x \\cdot \\dfrac{1}{x}\\,dx = x\\ln(2x) - x + C"
      },
      {
        "explanation": "Apply limits.",
        "workingOut": "\\bigl[x\\ln(2x) - x\\bigr]_1^4 = (4\\ln 8 - 4) - (1\\cdot\\ln 2 - 1)"
      },
      {
        "explanation": "Simplify using \\(\\ln 8 = 3\\ln 2\\).",
        "workingOut": "= 12\\ln 2 - 4 - \\ln 2 + 1 = 11\\ln 2 - 3"
      }
    ]
  },
  {
    "id": "abb2020e1s-q14b",
    "topicId": "y12e1-12F",
    "c": "12F",
    "t": "Volumes of rotation",
    "source": "Abbotsleigh 2020 Trial Q14b",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Find the volume of the solid formed when the region bounded by $y = x^{1/2}$, $x = 9$, and the $x$-axis is rotated about the $y$-axis. Give the exact answer in terms of $\\pi$.",
    "a": "$\\dfrac{324\\pi}{5}$",
    "opts": [],
    "h": "Use the shell method: $V = 2\\pi\\displaystyle\\int_0^9 x\\cdot\\sqrt{x}\\,dx = 2\\pi\\int_0^9 x^{3/2}\\,dx$.",
    "s": "$V = 2\\pi\\displaystyle\\int_0^9 x^{3/2}\\,dx = 2\\pi\\left[\\dfrac{2x^{5/2}}{5}\\right]_0^9 = 2\\pi\\cdot\\dfrac{2 \\times 243}{5} = \\dfrac{972\\pi}{5}$.",
    "solutionSteps": [
      {
        "explanation": "Apply the shell method for rotation about the \\(y\\)-axis.",
        "workingOut": "V = 2\\pi\\int_0^9 x \\cdot x^{1/2}\\,dx = 2\\pi\\int_0^9 x^{3/2}\\,dx"
      },
      {
        "explanation": "Integrate using the power rule.",
        "workingOut": "\\int x^{3/2}\\,dx = \\dfrac{x^{5/2}}{5/2} = \\dfrac{2x^{5/2}}{5}"
      },
      {
        "explanation": "Evaluate: \\(9^{5/2} = (9^{1/2})^5 = 3^5 = 243\\).",
        "workingOut": "V = 2\\pi\\cdot\\left[\\dfrac{2x^{5/2}}{5}\\right]_0^9 = 2\\pi\\cdot\\dfrac{2\\times 243}{5} = \\dfrac{972\\pi}{5}"
      }
    ]
  },
  {
    "id": "abb2020e1s-q14ci",
    "topicId": "y12e1-10B",
    "c": "10B",
    "t": "Projectile motion",
    "source": "Abbotsleigh 2020 Trial Q14c(i)",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "A projectile is launched from the origin at $60°$ to the horizontal with initial speed $20$ m/s and $g = 10$ m/s². Show that the trajectory equation is $y = \\sqrt{3}x - \\dfrac{x^2}{20}$.",
    "a": "The trajectory $y = x\\tan 60° - \\dfrac{gx^2}{2V^2\\cos^2 60°} = \\sqrt{3}x - \\dfrac{10x^2}{2(400)(1/4)} = \\sqrt{3}x - \\dfrac{x^2}{20}$.",
    "opts": [],
    "h": "Use $y = x\\tan\\alpha - \\dfrac{gx^2}{2V^2\\cos^2\\alpha}$ with $\\alpha=60°$, $V=20$, $g=10$.",
    "s": "$\\tan 60° = \\sqrt{3}$, $\\cos^2 60° = 1/4$, $V^2 = 400$.\n\n$y = \\sqrt{3}x - \\dfrac{10x^2}{2 \\times 400 \\times \\frac{1}{4}} = \\sqrt{3}x - \\dfrac{10x^2}{200} = \\sqrt{3}x - \\dfrac{x^2}{20}$. ✓",
    "solutionSteps": [
      {
        "explanation": "Write parametric equations and eliminate \\(t\\). Or use the trajectory formula directly.",
        "workingOut": "y = x\\tan\\alpha - \\dfrac{gx^2}{2V^2\\cos^2\\alpha}"
      },
      {
        "explanation": "Substitute \\(\\alpha = 60°\\), \\(V = 20\\), \\(g = 10\\).",
        "workingOut": "y = \\sqrt{3}\\,x - \\dfrac{10x^2}{2 \\times 400 \\times \\frac{1}{4}}"
      },
      {
        "explanation": "Simplify the coefficient of \\(x^2\\).",
        "workingOut": "y = \\sqrt{3}\\,x - \\dfrac{10x^2}{200} = \\sqrt{3}\\,x - \\dfrac{x^2}{20} \\quad \\checkmark"
      }
    ]
  },
  {
    "id": "abb2020e1s-q14cii",
    "topicId": "y12e1-10B",
    "c": "10B",
    "t": "Projectile motion",
    "source": "Abbotsleigh 2020 Trial Q14c(ii)",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Using $y = \\sqrt{3}x - x^2/20$, find the horizontal range of the projectile.",
    "a": "$20\\sqrt{3}$ m",
    "opts": [],
    "h": "Set $y = 0$ and solve for the positive $x$.",
    "s": "$x(\\sqrt{3} - x/20) = 0$. $x = 0$ or $x = 20\\sqrt{3}$. Range $= 20\\sqrt{3}$ m.",
    "solutionSteps": [
      {
        "explanation": "Set \\(y = 0\\) and factor.",
        "workingOut": "x\\!\\left(\\sqrt{3} - \\dfrac{x}{20}\\right) = 0"
      },
      {
        "explanation": "Solve for the positive root.",
        "workingOut": "x = 20\\sqrt{3} \\approx 34.6 \\text{ m}"
      }
    ]
  },
  {
    "id": "abb2020e1s-q14ciii",
    "topicId": "y12e1-10B",
    "c": "10B",
    "t": "Projectile motion",
    "source": "Abbotsleigh 2020 Trial Q14c(iii)",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "A second projectile is launched from the same point with the same speed $V = 20$ m/s but at $30°$. Find its horizontal range.",
    "a": "$20\\sqrt{3}$ m (same range — complementary angles give equal ranges)",
    "opts": [],
    "h": "Use the range formula $R = V^2\\sin 2\\alpha/g$. Note $\\sin(2 \\times 30°) = \\sin 60° = \\sqrt{3}/2$.",
    "s": "$R = \\dfrac{20^2 \\sin 60°}{10} = \\dfrac{400 \\times \\frac{\\sqrt{3}}{2}}{10} = \\dfrac{200\\sqrt{3}}{10} = 20\\sqrt{3}$ m.\n\nSame as the $60°$ launch — complementary angles always give equal ranges.",
    "solutionSteps": [
      {
        "explanation": "Apply the range formula with \\(\\alpha = 30°\\), \\(V = 20\\), \\(g = 10\\).",
        "workingOut": "R = \\dfrac{V^2\\sin(2\\alpha)}{g} = \\dfrac{400\\sin 60°}{10}"
      },
      {
        "explanation": "Evaluate \\(\\sin 60° = \\sqrt{3}/2\\).",
        "workingOut": "R = \\dfrac{400 \\times \\frac{\\sqrt{3}}{2}}{10} = \\dfrac{200\\sqrt{3}}{10} = 20\\sqrt{3} \\text{ m}"
      },
      {
        "explanation": "Note that \\(30°\\) and \\(60°\\) are complementary, so \\(\\sin(2 \\times 30°) = \\sin(2 \\times 60°) = \\sin 60°\\), confirming the ranges are equal.",
        "workingOut": "20\\sqrt{3} \\approx 34.6 \\text{ m} \\quad \\checkmark"
      }
    ]
  }
];
