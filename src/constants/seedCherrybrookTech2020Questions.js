export const CTHS_2020_QUESTIONS = [
  {
    "id": "cths2020-mc1",
    "topicId": "y12a-3D",
    "c": "3D",
    "t": "Concavity and points of inflection",
    "source": "Cherrybrook Tech 2020 Trial Q1",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "For what values of $x$ is the curve $f(x) = 2x^3 + x^2$ concave down?",
    "a": "0",
    "opts": [
      "$x < -\\dfrac{1}{6}$",
      "$x > -\\dfrac{1}{6}$",
      "$x < -6$",
      "$x > 6$"
    ],
    "h": "Find $f''(x)$ and set it less than zero to find where the curve is concave down.",
    "s": "$f'(x) = 6x^2 + 2x$, $f''(x) = 12x + 2$. For concave down: $12x + 2 < 0 \\Rightarrow x < -\\frac{1}{6}$.",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\(f(x) = 2x^3 + x^2\\) once to find the first derivative using the power rule, bringing the power down and reducing the exponent by 1 for each term.",
        "workingOut": "f'(x) = 6x^2 + 2x"
      },
      {
        "explanation": "Differentiate again to find the second derivative \\(f''(x)\\), which measures the concavity of the curve.",
        "workingOut": "f''(x) = 12x + 2"
      },
      {
        "explanation": "A curve is concave down where \\(f''(x) < 0\\). Set up this inequality.",
        "workingOut": "12x + 2 < 0"
      },
      {
        "explanation": "Subtract 2 from both sides to isolate the \\(x\\) term.",
        "workingOut": "12x < -2"
      },
      {
        "explanation": "Divide both sides by 12 to solve for \\(x\\).",
        "workingOut": "x < -\\frac{2}{12} = -\\frac{1}{6}"
      },
      {
        "explanation": "Verify by testing \\(x = -1\\): \\(f''(-1) = 12(-1)+2 = -10 < 0\\) ✓ (concave down). And \\(x = 0\\): \\(f''(0) = 2 > 0\\) (concave up) ✓.",
        "workingOut": "f''(-1) = -10 < 0 \\checkmark"
      },
      {
        "explanation": "State the final answer.",
        "workingOut": "x < -\\frac{1}{6}"
      }
    ]
  },
  {
    "id": "cths2020-mc2",
    "topicId": "y11a-3A",
    "c": "3A",
    "t": "Functions and function notation",
    "source": "Cherrybrook Tech 2020 Trial Q2",
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
    "h": "For $\\sqrt{x}$ we need $x \\geq 0$; for $\\frac{1}{\\sqrt{2-x}}$ we need $2-x > 0$. Combine both restrictions.",
    "s": "$\\sqrt{x}$ requires $x \\geq 0$. $\\frac{1}{\\sqrt{2-x}}$ requires $2 - x > 0$, i.e. $x < 2$ (strict, since denominator cannot be zero). Combined: $0 \\leq x < 2$, i.e. $[0, 2)$.",
    "solutionSteps": [
      {
        "explanation": "Identify the restrictions from each part. For \\(\\sqrt{x}\\) to be defined, the expression under the square root must be non-negative.",
        "workingOut": "x \\geq 0"
      },
      {
        "explanation": "For \\(\\frac{1}{\\sqrt{2-x}}\\) to be defined, the expression under the square root must be positive (strictly, since it is in the denominator and cannot equal zero).",
        "workingOut": "2 - x > 0 \\Rightarrow x < 2"
      },
      {
        "explanation": "Take the intersection of both restrictions: \\(x \\geq 0\\) AND \\(x < 2\\).",
        "workingOut": "0 \\leq x < 2"
      },
      {
        "explanation": "Write this in interval notation. The left endpoint \\(x=0\\) is included (closed bracket), and the right endpoint \\(x=2\\) is excluded (open bracket).",
        "workingOut": "[0, 2)"
      }
    ]
  },
  {
    "id": "cths2020-mc3",
    "topicId": "y11a-12E",
    "c": "12E",
    "t": "Multi-stage experiments",
    "source": "Cherrybrook Tech 2020 Trial Q3",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Two events, $A$ and $B$, are independent, and $P(A)$ and $P(B)$ are both non-zero.\n\nWhich of the following expressions gives the probability that event $A$ occurs and then event $B$ also occurs?",
    "a": "3",
    "opts": [
      "$P(B|A)$",
      "$P(A|B)$",
      "$P(A \\cup B)$",
      "$P(A)P(B)$"
    ],
    "h": "For independent events, knowing $A$ occurred does not affect the probability of $B$. Use the multiplication rule for independent events.",
    "s": "Since $A$ and $B$ are independent, $P(A \\cap B) = P(A) \\cdot P(B)$. This gives the probability that both occur.",
    "solutionSteps": [
      {
        "explanation": "Recall the definition of independent events: \\(A\\) and \\(B\\) are independent if and only if the occurrence of one does not affect the probability of the other.",
        "workingOut": "P(A \\cap B) = P(A) \\cdot P(B)"
      },
      {
        "explanation": "Eliminate option A: \\(P(B|A)\\) is the conditional probability of \\(B\\) given \\(A\\), not the probability of both occurring.",
        "workingOut": "P(B|A) = \\frac{P(A \\cap B)}{P(A)} \\neq P(A)P(B) \\text{ in general}"
      },
      {
        "explanation": "Eliminate option C: \\(P(A \\cup B)\\) is the probability that at least one of \\(A\\) or \\(B\\) occurs, which is not what is asked.",
        "workingOut": "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)"
      },
      {
        "explanation": "For independent events, the multiplication rule gives the probability that both \\(A\\) and \\(B\\) occur.",
        "workingOut": "P(A \\text{ and } B) = P(A) \\cdot P(B)"
      }
    ]
  },
  {
    "id": "cths2020-mc4",
    "topicId": "y12a-10C",
    "c": "10C",
    "t": "Mean and variance of a distribution",
    "source": "Cherrybrook Tech 2020 Trial Q4",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "The variance of a discrete random variable $X$ is $\\text{Var}(X) = 2.6$.\n\nCalculate $\\text{Var}(3X - 1)$.",
    "a": "2",
    "opts": [
      "$6.8$",
      "$7.8$",
      "$23.4$",
      "$22.4$"
    ],
    "h": "Use the rule $\\text{Var}(aX + b) = a^2 \\cdot \\text{Var}(X)$. Note that adding a constant does not change variance.",
    "s": "$\\text{Var}(3X-1) = 3^2 \\cdot \\text{Var}(X) = 9 \\times 2.6 = 23.4$.",
    "solutionSteps": [
      {
        "explanation": "Recall the variance rule for a linear transformation: \\(\\text{Var}(aX + b) = a^2 \\cdot \\text{Var}(X)\\). Adding a constant \\(b\\) shifts all values equally and does not affect spread.",
        "workingOut": "\\text{Var}(aX + b) = a^2 \\cdot \\text{Var}(X)"
      },
      {
        "explanation": "Identify \\(a = 3\\) and \\(b = -1\\) in the expression \\(3X - 1\\).",
        "workingOut": "a = 3, quad b = -1"
      },
      {
        "explanation": "Square the coefficient \\(a\\).",
        "workingOut": "a^2 = 3^2 = 9"
      },
      {
        "explanation": "Multiply by \\(\\text{Var}(X) = 2.6\\).",
        "workingOut": "\\text{Var}(3X-1) = 9 \\times 2.6 = 23.4"
      }
    ]
  },
  {
    "id": "cths2020-mc5",
    "topicId": "y11a-9H",
    "c": "9H",
    "t": "The product rule",
    "source": "Cherrybrook Tech 2020 Trial Q5",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "What is $f'(x)$ if $f(x) = 3x^4(4-x)^3$?",
    "a": "3",
    "opts": [
      "$12x^3(4-x)^2(7x-16)$",
      "$12x^3(4-x)^2(16-7x)$",
      "$3x^3(4-x)^2(7x-16)$",
      "$3x^3(4-x)^2(16-7x)$"
    ],
    "h": "Apply the product rule with $u = 3x^4$ and $v = (4-x)^3$. Factor the result carefully.",
    "s": "$u = 3x^4$, $u' = 12x^3$; $v = (4-x)^3$, $v' = -3(4-x)^2$. $f'= 12x^3(4-x)^3 + 3x^4 \\cdot (-3)(4-x)^2 = 3x^3(4-x)^2[4(4-x)-3x] = 3x^3(4-x)^2(16-7x)$.",
    "solutionSteps": [
      {
        "explanation": "Identify the two factors for the product rule: let \\(u = 3x^4\\) and \\(v = (4-x)^3\\).",
        "workingOut": "u = 3x^4, quad v = (4-x)^3"
      },
      {
        "explanation": "Differentiate \\(u\\) using the power rule.",
        "workingOut": "u' = 12x^3"
      },
      {
        "explanation": "Differentiate \\(v\\) using the chain rule: bring down the power, reduce by 1, then multiply by the derivative of the inner function \\((4-x)\\), which is \\(-1\\).",
        "workingOut": "v' = 3(4-x)^2 \\cdot (-1) = -3(4-x)^2"
      },
      {
        "explanation": "Apply the product rule: \\(f'(x) = u'v + uv'\\).",
        "workingOut": "f'(x) = 12x^3(4-x)^3 + 3x^4 \\cdot (-3)(4-x)^2"
      },
      {
        "explanation": "Factor out the common factor \\(3x^3(4-x)^2\\) from both terms.",
        "workingOut": "f'(x) = 3x^3(4-x)^2\\bigl[4(4-x) - 3x\\bigr]"
      },
      {
        "explanation": "Expand the bracket \\(4(4-x) - 3x = 16 - 4x - 3x = 16 - 7x\\).",
        "workingOut": "4(4-x) - 3x = 16 - 4x - 3x = 16 - 7x"
      },
      {
        "explanation": "Write the final factored answer.",
        "workingOut": "f'(x) = 3x^3(4-x)^2(16-7x)"
      }
    ]
  },
  {
    "id": "cths2020-mc6",
    "topicId": "y11a-3B",
    "c": "3B",
    "t": "Functions, relations, and graphs",
    "source": "Cherrybrook Tech 2020 Trial Q6",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Which type of relation is shown below?\n\nSet $X = {1, 2, 3, 4}$ maps to set $Y = {D, B, C}$ with: $1 \\to D$, $2 \\to B$, $3 \\to B$, $4 \\to C$.",
    "a": "2",
    "opts": [
      "One-to-one",
      "One-to-many",
      "Many-to-one",
      "Many-to-many"
    ],
    "h": "Check: does each input map to one output (function)? Do multiple inputs share the same output?",
    "s": "Each element in $X$ maps to exactly one element in $Y$ (so it is a function), but elements 2 and 3 both map to $B$ (multiple inputs share the same output). This is a many-to-one relation.",
    "solutionSteps": [
      {
        "explanation": "Check if each input maps to more than one output. Each element of \\(X\\) maps to exactly one element of \\(Y\\), so it is not one-to-many.",
        "workingOut": "1 \\to D,\\; 2 \\to B,\\; 3 \\to B,\\; 4 \\to C"
      },
      {
        "explanation": "Check if multiple inputs share the same output. Both 2 and 3 map to \\(B\\), so this is not one-to-one.",
        "workingOut": "2 \\to B \\text{ and } 3 \\to B \\Rightarrow \\text{many inputs share one output}"
      },
      {
        "explanation": "Since multiple inputs (2 and 3) share a single output (\\(B\\)), the relation is many-to-one.",
        "workingOut": "\\text{Many-to-one relation}"
      }
    ]
  },
  {
    "id": "cths2020-mc7",
    "topicId": "y12a-2I",
    "c": "2I",
    "t": "Trigonometric graphs",
    "source": "Cherrybrook Tech 2020 Trial Q7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Which of the following best represents the graph of $g(x) = 2\\cos\\!\\left(\\dfrac{x}{2} + \\dfrac{\\pi}{3}\\right)$?",
    "a": "0",
    "opts": [
      "Graph (A): amplitude 2, period $4\\pi$, shifted left by $\\dfrac{2\\pi}{3}$",
      "Graph (B): amplitude 2, period $4\\pi$, no phase shift",
      "Graph (C): amplitude 2, period $\\pi$, with phase shift",
      "Graph (D): amplitude 2, period $\\pi$, no phase shift"
    ],
    "h": "Identify amplitude $= |a|$, period $= \\frac{2\\pi}{|b|}$, and phase shift $= -\\frac{c}{b}$ from $g(x) = a\\cos(bx+c)$.",
    "s": "$a = 2$ (amplitude), $b = \\frac{1}{2}$ (period $= \\frac{2\\pi}{1/2} = 4\\pi$), phase shift $= -\\frac{\\pi/3}{1/2} = -\\frac{2\\pi}{3}$ (left by $\\frac{2\\pi}{3}$). This matches Graph (A).",
    "solutionSteps": [
      {
        "explanation": "Write \\(g(x) = 2\\cos\\!\\left(\\frac{x}{2} + \\frac{\\pi}{3}\\right)\\) in standard form \\(a\\cos(bx + c)\\). Identify \\(a = 2\\), \\(b = \\frac{1}{2}\\), \\(c = \\frac{\\pi}{3}\\).",
        "workingOut": "a = 2, quad b = \\tfrac{1}{2}, quad c = \\tfrac{\\pi}{3}"
      },
      {
        "explanation": "The amplitude is \\(|a| = 2\\).",
        "workingOut": "\\text{Amplitude} = 2"
      },
      {
        "explanation": "The period is \\(\\frac{2\\pi}{|b|} = \\frac{2\\pi}{1/2} = 4\\pi\\).",
        "workingOut": "\\text{Period} = \\frac{2\\pi}{1/2} = 4\\pi"
      },
      {
        "explanation": "The phase shift is \\(-\\frac{c}{b} = -\\frac{\\pi/3}{1/2} = -\\frac{2\\pi}{3}\\), meaning the graph is shifted left by \\(\\frac{2\\pi}{3}\\).",
        "workingOut": "\\text{Phase shift} = -\\frac{\\pi/3}{1/2} = -\\frac{2\\pi}{3}"
      },
      {
        "explanation": "Select the graph with amplitude 2, period \\(4\\pi\\), and a leftward phase shift of \\(\\frac{2\\pi}{3}\\). This matches Graph (A).",
        "workingOut": "\\text{Answer: Graph (A)}"
      }
    ]
  },
  {
    "id": "cths2020-mc8",
    "topicId": "y12a-1F",
    "c": "1F",
    "t": "Summing an arithmetic series",
    "source": "Cherrybrook Tech 2020 Trial Q8",
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
    "h": "Use log laws to write each term as a multiple of $\\ln 2$, then sum the resulting arithmetic series.",
    "s": "$\\ln 2^k = k\\ln 2$. Sum $= \\ln 2 \\cdot (1+2+3+\\cdots+2n) = \\ln 2 \\cdot \\frac{2n(2n+1)}{2} = n(2n+1)\\ln 2$.",
    "solutionSteps": [
      {
        "explanation": "Apply the logarithm power rule \\(\\ln a^k = k\\ln a\\) to rewrite each term: \\(\\ln 2^k = k\\ln 2\\).",
        "workingOut": "\\ln 2 + \\ln 4 + \\cdots + \\ln 2^{2n} = 1\\cdot\\ln 2 + 2\\cdot\\ln 2 + 3\\cdot\\ln 2 + \\cdots + 2n\\cdot\\ln 2"
      },
      {
        "explanation": "Factor out \\(\\ln 2\\).",
        "workingOut": "= \\ln 2 \\cdot (1 + 2 + 3 + \\cdots + 2n)"
      },
      {
        "explanation": "Recognise the bracketed sum as an arithmetic series with first term 1, last term \\(2n\\), and \\(2n\\) terms. Apply the formula \\(S = \\frac{n_{\\text{terms}}}{2}(\\text{first}+\\text{last})\\).",
        "workingOut": "1 + 2 + \\cdots + 2n = \\frac{2n(2n+1)}{2} = n(2n+1)"
      },
      {
        "explanation": "Substitute back to get the final answer.",
        "workingOut": "\\ln 2 \\cdot n(2n+1) = n(2n+1)\\ln 2"
      }
    ]
  },
  {
    "id": "cths2020-mc9",
    "topicId": "y12a-2H",
    "c": "2H",
    "t": "Combinations of transformations",
    "source": "Cherrybrook Tech 2020 Trial Q9",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "What is the equation of the function $f(x)$ whose graph has undergone transformations in the following order?\n- Translated left 2 units\n- Horizontally dilated by a factor of 3\n- Translated down 4 units",
    "a": "0",
    "opts": [
      "$f\\!\\left(\\dfrac{x}{3} + 2\\right) - 4$",
      "$f(3(x+2)) - 4$",
      "$f\\!\\left(\\dfrac{x+2}{3}\\right) - 4$",
      "$f(3x+2) - 4$"
    ],
    "h": "Apply transformations to the input $x$ in order: first translate, then dilate. Translating left by 2 replaces $x$ with $x+2$; dilating horizontally by 3 replaces $x$ with $x/3$.",
    "s": "Start with $f(x)$. Translate left 2: $f(x+2)$. Then horizontally dilate by 3 (replace $x$ with $x/3$): $f(\\frac{x}{3}+2)$. Then translate down 4: $f(\\frac{x}{3}+2)-4$.",
    "solutionSteps": [
      {
        "explanation": "Start with \\(f(x)\\). Step 1 — Translate left 2 units: replace every \\(x\\) with \\((x+2)\\).",
        "workingOut": "f(x) \\to f(x+2)"
      },
      {
        "explanation": "Step 2 — Horizontally dilate by factor 3: a horizontal dilation by factor \\(k\\) replaces \\(x\\) with \\(x/k\\), so replace \\(x\\) with \\(x/3\\) throughout.",
        "workingOut": "f(x+2) \\to f\\!\\left(\\frac{x}{3}+2\\right)"
      },
      {
        "explanation": "Step 3 — Translate down 4 units: subtract 4 from the entire function.",
        "workingOut": "f\\!\\left(\\frac{x}{3}+2\\right) \\to f\\!\\left(\\frac{x}{3}+2\\right) - 4"
      },
      {
        "explanation": "The final equation is \\(f\\!\\left(\\frac{x}{3}+2\\right)-4\\), which matches option (A).",
        "workingOut": "f\\!\\left(\\frac{x}{3}+2\\right) - 4"
      }
    ]
  },
  {
    "id": "cths2020-mc10",
    "topicId": "y12a-3D",
    "c": "3D",
    "t": "Concavity and points of inflection",
    "source": "Cherrybrook Tech 2020 Trial Q10",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "The graph of $y = f(x)$ is shown below. $x = A$ and $x = C$ are stationary points, and $x = B$ is a point of inflection.\n\nFrom the graph: $A < B < C < 0$, the curve has a local maximum at $A$, decreases to a local minimum at $C$, with $B$ between them, and then increases after $C$.\n\nOver what domain is $f'(x) < 0$ and $f''(x) > 0$?",
    "a": "2",
    "opts": [
      "$(-\\infty, A)$",
      "$(A, B)$",
      "$(B, C)$",
      "$(C, infty)$"
    ],
    "h": "$f'(x) < 0$ where the function is decreasing. $f''(x) > 0$ where the function is concave up. Find the interval where both hold simultaneously.",
    "s": "Between $B$ and $C$: the function is still decreasing ($f'<0$) but the concavity has changed from concave down to concave up at $B$ ($f''>0$). So the domain is $(B,C)$.",
    "solutionSteps": [
      {
        "explanation": "Identify where \\(f'(x) < 0\\): the function is decreasing. From the graph, \\(f\\) decreases from the local maximum at \\(A\\) to the local minimum at \\(C\\), so \\(f'(x) < 0\\) on \\((A, C)\\).",
        "workingOut": "f'(x) < 0 \\text{ on } (A, C)"
      },
      {
        "explanation": "Identify where \\(f''(x) > 0\\): the function is concave up. \\(B\\) is the point of inflection, so concavity changes at \\(B\\). From the graph, the curve is concave up after \\(B\\) (transitioning from the decreasing-concave-down phase to the decreasing-concave-up phase).",
        "workingOut": "f''(x) > 0 \\text{ on } (B, infty)"
      },
      {
        "explanation": "Find the intersection of the two intervals: \\((A,C) \\cap (B, infty) = (B, C)\\).",
        "workingOut": "(A, C) \\cap (B, infty) = (B, C)"
      },
      {
        "explanation": "The domain where both \\(f'(x) < 0\\) (decreasing) and \\(f''(x) > 0\\) (concave up) hold is \\((B, C)\\).",
        "workingOut": "\\text{Answer: } (B, C)"
      }
    ]
  },
  {
    "id": "cths2020-q11",
    "topicId": "y12a-1C",
    "c": "1C",
    "t": "Geometric sequences",
    "source": "Cherrybrook Tech 2020 Trial Q11",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "A geometric sequence has a first term of $\\dfrac{1}{8}$ and the 9th term of the sequence is $8192$. What is the common ratio?",
    "a": "$r = \\pm 4$",
    "opts": [],
    "h": "Use the formula $T_n = ar^{n-1}$ with $a = \\frac{1}{8}$, $T_9 = 8192$, and $n = 9$.",
    "s": "$T_9 = ar^8 \\Rightarrow 8192 = \\frac{1}{8} r^8 \\Rightarrow r^8 = 65536 \\Rightarrow r = \\pm 4$.",
    "solutionSteps": [
      {
        "explanation": "Write the general term formula for a geometric sequence: \\(T_n = ar^{n-1}\\), where \\(a\\) is the first term and \\(r\\) is the common ratio.",
        "workingOut": "T_n = ar^{n-1}"
      },
      {
        "explanation": "Substitute \\(n = 9\\), \\(a = \\frac{1}{8}\\), and \\(T_9 = 8192\\).",
        "workingOut": "8192 = \\frac{1}{8} \\cdot r^{9-1} = \\frac{1}{8} r^8"
      },
      {
        "explanation": "Multiply both sides by 8 to isolate \\(r^8\\).",
        "workingOut": "r^8 = 8192 \\times 8 = 65536"
      },
      {
        "explanation": "Take the 8th root of both sides. Since the index is even, there are two real solutions.",
        "workingOut": "r = \\pm\\, sqrt[8]{65536}"
      },
      {
        "explanation": "Evaluate \\(\\sqrt[8]{65536}\\). Note \\(4^8 = 65536\\).",
        "workingOut": "r = \\pm 4"
      },
      {
        "explanation": "Verify: \\(\\frac{1}{8} \\times 4^8 = \\frac{65536}{8} = 8192\\) ✓.",
        "workingOut": "\\frac{1}{8} \\times 4^8 = 8192 \\checkmark"
      }
    ]
  },
  {
    "id": "cths2020-q12",
    "topicId": "y12a-6D",
    "c": "6D",
    "t": "Integrating the trigonometric functions",
    "source": "Cherrybrook Tech 2020 Trial Q12",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Find the exact value of $\\displaystyle\\int_{\\pi/4}^{\\pi/3} \\cos x\\, dx$.",
    "a": "$\\dfrac{\\sqrt{3} - \\sqrt{2}}{2}$",
    "opts": [],
    "h": "The antiderivative of $\\cos x$ is $\\sin x$. Evaluate $[\\sin x]$ at the limits $\\frac{\\pi}{3}$ and $\\frac{\\pi}{4}$.",
    "s": "$\\int_{\\pi/4}^{\\pi/3}\\cos x\\,dx = [\\sin x]_{\\pi/4}^{\\pi/3} = \\sin\\frac{\\pi}{3} - \\sin\\frac{\\pi}{4} = \\frac{\\sqrt{3}}{2} - \\frac{\\sqrt{2}}{2} = \\frac{\\sqrt{3}-\\sqrt{2}}{2}$.",
    "solutionSteps": [
      {
        "explanation": "Identify the antiderivative of \\(\\cos x\\). Recall that \\(\\frac{d}{dx}(\\sin x) = \\cos x\\), so \\(\\int \\cos x\\, dx = \\sin x + C\\).",
        "workingOut": "\\int \\cos x\\,dx = \\sin x + C"
      },
      {
        "explanation": "Apply the Fundamental Theorem of Calculus: evaluate the antiderivative at the upper limit minus the lower limit.",
        "workingOut": "\\bigl[\\sin x\\bigr]_{\\pi/4}^{\\pi/3} = \\sin\\frac{\\pi}{3} - \\sin\\frac{\\pi}{4}"
      },
      {
        "explanation": "Recall exact values: \\(\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}\\) and \\(\\sin\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}\\).",
        "workingOut": "\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}, quad \\sin\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}"
      },
      {
        "explanation": "Subtract the values and write as a single fraction over 2.",
        "workingOut": "\\frac{\\sqrt{3}}{2} - \\frac{\\sqrt{2}}{2} = \\frac{\\sqrt{3}-\\sqrt{2}}{2}"
      }
    ]
  },
  {
    "id": "cths2020-q13",
    "topicId": "y11a-6I",
    "c": "6I",
    "t": "The cosine rule",
    "source": "Cherrybrook Tech 2020 Trial Q13",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Three towns, $A$, $B$ and $C$ form a triangle. Town $A$ is 80 km from Town $B$ and Town $C$ is 40 km from Town $A$.\n\nThe bearing of Town $B$ from Town $A$ is $130°$. The bearing of Town $C$ from Town $A$ is $240°$.\n\nFind the distance between Town $B$ and Town $C$, to the nearest kilometre.",
    "a": "$BC \\approx 101$ km",
    "opts": [],
    "h": "Find the angle $\\angle BAC$ between the two bearings, then apply the cosine rule: $BC^2 = AB^2 + AC^2 - 2 \\cdot AB \\cdot AC \\cdot \\cos(\\angle BAC)$.",
    "s": "$\\angle BAC = 240° - 130° = 110°$. By cosine rule: $BC^2 = 80^2 + 40^2 - 2(80)(40)\\cos 110° \\approx 10194 \\Rightarrow BC \\approx 101$ km.",
    "solutionSteps": [
      {
        "explanation": "Find the angle at \\(A\\) between the directions to \\(B\\) and \\(C\\). The bearing to \\(B\\) is \\(130°\\) and to \\(C\\) is \\(240°\\), so the angle between them is found by subtraction.",
        "workingOut": "\\angle BAC = 240° - 130° = 110°"
      },
      {
        "explanation": "Set up the cosine rule to find side \\(BC\\), using \\(AB = 80\\) km, \\(AC = 40\\) km, and \\(\\angle BAC = 110°\\).",
        "workingOut": "BC^2 = AB^2 + AC^2 - 2 \\cdot AB \\cdot AC \\cdot \\cos(\\angle BAC)"
      },
      {
        "explanation": "Substitute the known values into the cosine rule.",
        "workingOut": "BC^2 = 80^2 + 40^2 - 2(80)(40)\\cos 110°"
      },
      {
        "explanation": "Evaluate: \\(80^2 = 6400\\), \\(40^2 = 1600\\), \\(2(80)(40) = 6400\\), and \\(\\cos 110° \\approx -0.342\\).",
        "workingOut": "BC^2 = 6400 + 1600 - 6400 \\times (-0.342) = 8000 + 2189 \\approx 10189"
      },
      {
        "explanation": "Take the square root to find \\(BC\\).",
        "workingOut": "BC = \\sqrt{10189} \\approx 100.94"
      },
      {
        "explanation": "Round to the nearest kilometre.",
        "workingOut": "BC \\approx 101 \\text{ km}"
      }
    ]
  },
  {
    "id": "cths2020-q14",
    "topicId": "y11a-9H",
    "c": "9H",
    "t": "The product rule",
    "source": "Cherrybrook Tech 2020 Trial Q14",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Find $\\dfrac{d}{dx}\\left(x^3 \\tan 2x\\right)$.",
    "a": "$x^2(3\\tan 2x + 2x\\sec^2 2x)$",
    "opts": [],
    "h": "Use the product rule with $u = x^3$ and $v = \\tan 2x$. Recall $\\frac{d}{dx}(\\tan kx) = k\\sec^2 kx$.",
    "s": "$u = x^3$, $u' = 3x^2$; $v = \\tan 2x$, $v' = 2\\sec^2 2x$. Product rule: $3x^2\\tan 2x + 2x^3\\sec^2 2x = x^2(3\\tan 2x + 2x\\sec^2 2x)$.",
    "solutionSteps": [
      {
        "explanation": "Identify the two factors for the product rule: \\(u = x^3\\) and \\(v = \\tan 2x\\).",
        "workingOut": "u = x^3, quad v = \\tan 2x"
      },
      {
        "explanation": "Differentiate \\(u\\) using the power rule.",
        "workingOut": "u' = 3x^2"
      },
      {
        "explanation": "Differentiate \\(v = \\tan 2x\\) using the chain rule. The derivative of \\(\\tan(kx)\\) is \\(k\\sec^2(kx)\\), so here \\(k=2\\).",
        "workingOut": "v' = 2\\sec^2 2x"
      },
      {
        "explanation": "Apply the product rule: \\(\\frac{d}{dx}(uv) = u'v + uv'\\).",
        "workingOut": "\\frac{d}{dx}(x^3 \\tan 2x) = 3x^2 \\tan 2x + x^3 \\cdot 2\\sec^2 2x"
      },
      {
        "explanation": "Factor out the common factor \\(x^2\\) to simplify the expression.",
        "workingOut": "= x^2(3\\tan 2x + 2x\\sec^2 2x)"
      }
    ]
  },
  {
    "id": "cths2020-q15",
    "topicId": "y12a-3E",
    "c": "3E",
    "t": "Systematic curve sketching with the derivative",
    "source": "Cherrybrook Tech 2020 Trial Q15",
    "type": "teacher_review",
    "difficulty": "medium",
    "q": "Sketch the graph of $y = -(x+1)(x-2)^3$, showing the intercepts.",
    "a": "Curve with $x$-intercepts at $x = -1$ (single root, crosses axis) and $x = 2$ (triple root, inflection at axis). $y$-intercept at $y = 8$. Curve goes from top-left to bottom-right (negative leading coefficient).",
    "opts": [],
    "h": "Find $x$-intercepts (set $y=0$), $y$-intercept (set $x=0$). Note the multiplicity of each root to determine how the curve behaves at each intercept.",
    "s": "$x$-intercepts: $x = -1$ (odd single root — crosses) and $x = 2$ (odd triple root — crosses with inflection). $y$-intercept: $y = -(1)(-2)^3 = -(-8) = 8$. Leading term: $-(x)(x^3) = -x^4$ (negative quartic shape).",
    "solutionSteps": [
      {
        "explanation": "Find the \\(x\\)-intercepts by setting \\(y = 0\\). Solve \\(-(x+1)(x-2)^3 = 0\\).",
        "workingOut": "x = -1 \\text{ (multiplicity 1)} \\quad x = 2 \\text{ (multiplicity 3)}"
      },
      {
        "explanation": "Determine the behaviour at each intercept. A root of odd multiplicity 1 means the curve crosses the \\(x\\)-axis at \\(x=-1\\). A root of odd multiplicity 3 means the curve crosses with an inflection (flat) at \\(x=2\\).",
        "workingOut": "x=-1: \\text{crosses}\\quad x=2: \\text{inflection crossing}"
      },
      {
        "explanation": "Find the \\(y\\)-intercept by substituting \\(x = 0\\).",
        "workingOut": "y = -(0+1)(0-2)^3 = -(1)(-8) = 8"
      },
      {
        "explanation": "Determine the end behaviour from the leading term. Expanding: \\(-(x+1)(x-2)^3 \\approx -x^4\\) for large \\(|x|\\).",
        "workingOut": "\\text{As } x \\to \\pm\\infty,\\; y \\to -\\infty"
      },
      {
        "explanation": "Sketch the curve: starts from bottom-left, rises through \\((-1, 0)\\), peaks somewhere between \\(-1\\) and \\(2\\), passes through \\((0, 8)\\), inflects through \\((2, 0)\\), then falls to bottom-right.",
        "workingOut": "\\text{Sketch with } (-1,0),\\; (0,8),\\; (2,0)"
      }
    ]
  },
  {
    "id": "cths2020-q16",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trig function, find another",
    "source": "Cherrybrook Tech 2020 Trial Q16",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Given $\\cos\\theta = \\dfrac{2}{7}$ and $270° \\leq \\theta \\leq 360°$, find the exact value of $\\sin\\theta$.",
    "a": "$\\sin\\theta = -\\dfrac{3\\sqrt{5}}{7}$",
    "opts": [],
    "h": "Use the Pythagorean identity $\\sin^2\\theta + \\cos^2\\theta = 1$. Determine the sign of $\\sin\\theta$ from the given quadrant.",
    "s": "$\\sin^2\\theta = 1 - \\left(\\frac{2}{7}\\right)^2 = 1 - \\frac{4}{49} = \\frac{45}{49}$. Since $270° \\leq \\theta \\leq 360°$ (4th quadrant), $\\sin\\theta < 0$. So $\\sin\\theta = -\\frac{\\sqrt{45}}{7} = -\\frac{3\\sqrt{5}}{7}$.",
    "solutionSteps": [
      {
        "explanation": "Use the Pythagorean identity \\(\\sin^2\\theta + \\cos^2\\theta = 1\\) to find \\(\\sin^2\\theta\\).",
        "workingOut": "\\sin^2\\theta = 1 - \\cos^2\\theta = 1 - \\left(\\frac{2}{7}\\right)^2 = 1 - \\frac{4}{49} = \\frac{45}{49}"
      },
      {
        "explanation": "Take the square root to find \\(|\\sin\\theta|\\).",
        "workingOut": "|\\sin\\theta| = \\sqrt{\\frac{45}{49}} = \\frac{\\sqrt{45}}{7} = \\frac{3\\sqrt{5}}{7}"
      },
      {
        "explanation": "Determine the sign of \\(\\sin\\theta\\). Since \\(270° \\leq \\theta \\leq 360°\\), the angle is in the 4th quadrant where \\(\\sin\\) is negative.",
        "workingOut": "270° \\leq \\theta \\leq 360° \\Rightarrow \\sin\\theta < 0"
      },
      {
        "explanation": "Combine to give the exact value.",
        "workingOut": "\\sin\\theta = -\\frac{3\\sqrt{5}}{7}"
      }
    ]
  },
  {
    "id": "cths2020-q17",
    "topicId": "y11a-6F",
    "c": "6F",
    "t": "Trigonometric identities",
    "source": "Cherrybrook Tech 2020 Trial Q17",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Show that $(\\tan x + \\sec x)^2 = \\dfrac{1 + \\sin x}{1 - \\sin x}$.",
    "a": "Proof: expand LHS using $\\tan x = \\frac{\\sin x}{\\cos x}$, $\\sec x = \\frac{1}{\\cos x}$, and $\\cos^2 x = 1-\\sin^2 x$.",
    "opts": [],
    "h": "Expand the LHS by writing $\\tan x$ and $\\sec x$ in terms of $\\sin x$ and $\\cos x$, then use $\\cos^2 x = 1-\\sin^2 x = (1-\\sin x)(1+\\sin x)$ to simplify.",
    "s": "LHS $= \\left(\\frac{\\sin x}{\\cos x}+\\frac{1}{\\cos x}\\right)^2 = \\frac{(\\sin x+1)^2}{\\cos^2 x} = \\frac{(1+\\sin x)^2}{1-\\sin^2 x} = \\frac{(1+\\sin x)^2}{(1-\\sin x)(1+\\sin x)} = \\frac{1+\\sin x}{1-\\sin x}$ = RHS.",
    "solutionSteps": [
      {
        "explanation": "Start with the LHS. Write \\(\\tan x = \\frac{\\sin x}{\\cos x}\\) and \\(\\sec x = \\frac{1}{\\cos x}\\) and combine over a common denominator.",
        "workingOut": "\\text{LHS} = \\left(\\frac{\\sin x}{\\cos x} + \\frac{1}{\\cos x}\\right)^2 = \\left(\\frac{\\sin x + 1}{\\cos x}\\right)^2"
      },
      {
        "explanation": "Square the fraction: square both numerator and denominator.",
        "workingOut": "= \\frac{(\\sin x + 1)^2}{\\cos^2 x}"
      },
      {
        "explanation": "Replace \\(\\cos^2 x\\) in the denominator using the Pythagorean identity \\(\\cos^2 x = 1 - \\sin^2 x\\).",
        "workingOut": "= \\frac{(1 + \\sin x)^2}{1 - \\sin^2 x}"
      },
      {
        "explanation": "Factorise the denominator as a difference of squares: \\(1 - \\sin^2 x = (1-\\sin x)(1+\\sin x)\\).",
        "workingOut": "= \\frac{(1+\\sin x)^2}{(1-\\sin x)(1+\\sin x)}"
      },
      {
        "explanation": "Cancel the common factor \\((1+\\sin x)\\) from numerator and denominator.",
        "workingOut": "= \\frac{1+\\sin x}{1-\\sin x} = \\text{RHS} \\quad \\blacksquare"
      }
    ]
  },
  {
    "id": "cths2020-q18",
    "topicId": "y11a-6G",
    "c": "6G",
    "t": "Trigonometric equations",
    "source": "Cherrybrook Tech 2020 Trial Q18",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Solve $2\\cos^2\\alpha - 3\\cos\\alpha - 2 = 0$ for $0 \\leq \\alpha \\leq \\pi$.",
    "a": "$\\alpha = \\dfrac{2\\pi}{3}$",
    "opts": [],
    "h": "Let $u = \\cos\\alpha$ and solve the resulting quadratic. Reject solutions outside $[-1, 1]$ and use the quadrant to find the angle.",
    "s": "Let $u = \\cos\\alpha$: $2u^2 - 3u - 2 = 0 \\Rightarrow (2u+1)(u-2)=0 \\Rightarrow u = -\\frac{1}{2}$ or $u=2$ (rejected). $\\cos\\alpha = -\\frac{1}{2}$ and $0 \\leq \\alpha \\leq \\pi$: $\\alpha = \\frac{2\\pi}{3}$.",
    "solutionSteps": [
      {
        "explanation": "Substitute \\(u = \\cos\\alpha\\) to convert the trigonometric equation into a quadratic in \\(u\\).",
        "workingOut": "2u^2 - 3u - 2 = 0"
      },
      {
        "explanation": "Factorise the quadratic.",
        "workingOut": "(2u + 1)(u - 2) = 0"
      },
      {
        "explanation": "Solve for \\(u\\): \\(u = -\\frac{1}{2}\\) or \\(u = 2\\).",
        "workingOut": "u = -\\frac{1}{2} \\quad \\text{or} \\quad u = 2"
      },
      {
        "explanation": "Reject \\(u = 2\\) since \\(\\cos\\alpha\\) must lie in \\([-1, 1]\\).",
        "workingOut": "u = 2 \\text{ rejected (out of range)}\\quad \\Rightarrow \\cos\\alpha = -\\frac{1}{2}"
      },
      {
        "explanation": "Solve \\(\\cos\\alpha = -\\frac{1}{2}\\) in \\([0, pi]\\). The reference angle is \\(\\frac{\\pi}{3}\\). Since \\(\\cos\\) is negative in the 2nd quadrant, \\(\\alpha = \\pi - \\frac{\\pi}{3}\\).",
        "workingOut": "\\alpha = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}"
      },
      {
        "explanation": "Verify: \\(\\cos\\frac{2\\pi}{3} = -\\frac{1}{2}\\) ✓ and \\(\\frac{2\\pi}{3} \\in [0, pi]\\) ✓.",
        "workingOut": "\\alpha = \\frac{2\\pi}{3}"
      }
    ]
  },
  {
    "id": "cths2020-q19",
    "topicId": "y11a-5F",
    "c": "5F",
    "t": "Composite functions",
    "source": "Cherrybrook Tech 2020 Trial Q19",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Consider the functions $f(x) = e^x$ and $g(x) = \\ln(x-2)$.\n\n(a) Find the composite function $f(g(x))$.\n\n(b) Find in interval notation the range of the composite function.",
    "a": "(a) $f(g(x)) = x - 2$\n(b) $(0, +\\infty)$",
    "opts": [],
    "h": "For (a): substitute $g(x)$ into $f$, then simplify using $e^{\\ln u} = u$. For (b): the domain of $g$ restricts $x$, and this determines the range of $f(g(x))$.",
    "s": "(a) $f(g(x)) = e^{\\ln(x-2)} = x-2$ (for $x > 2$). (b) When $x > 2$, $x-2 > 0$, so the range is $(0, +\\infty)$.",
    "solutionSteps": [
      {
        "explanation": "Part (a): Form the composite by substituting \\(g(x) = \\ln(x-2)\\) into \\(f(x) = e^x\\).",
        "workingOut": "f(g(x)) = e^{g(x)} = e^{\\ln(x-2)}"
      },
      {
        "explanation": "Simplify using the inverse property \\(e^{\\ln u} = u\\) (valid when \\(u > 0\\)).",
        "workingOut": "f(g(x)) = x - 2"
      },
      {
        "explanation": "Note the domain restriction: \\(g(x) = \\ln(x-2)\\) requires \\(x - 2 > 0\\), so \\(x > 2\\).",
        "workingOut": "\\text{Domain of } f(g(x)): x > 2"
      },
      {
        "explanation": "Part (b): Find the range. When \\(x > 2\\), the output \\(f(g(x)) = x - 2 > 0\\).",
        "workingOut": "x > 2 \\Rightarrow x - 2 > 0"
      },
      {
        "explanation": "As \\(x\\) ranges over \\((2, +\\infty)\\), the value \\(x-2\\) ranges over \\((0, +\\infty)\\). State the range in interval notation.",
        "workingOut": "\\text{Range} = (0, +\\infty)"
      }
    ]
  },
  {
    "id": "cths2020-q20",
    "topicId": "y12a-3H",
    "c": "3H",
    "t": "Primitive functions",
    "source": "Cherrybrook Tech 2020 Trial Q20",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "A curve with the equation $y = f(x)$, has $\\dfrac{dy}{dx} = x^3 + 2x - 7$.\n\n(a) The point $P(2, 4)$ lies on the curve. Find the equation of $y$.\n\n(b) Find the equation of the normal to the curve at point $P$, giving your answer in general form.",
    "a": "(a) $y = \\dfrac{x^4}{4} + x^2 - 7x + 10$\n(b) $x + 5y - 22 = 0$",
    "opts": [],
    "h": "For (a): integrate $\\frac{dy}{dx}$ then use the point $P(2,4)$ to find $C$. For (b): find the gradient of the tangent at $P$, then the normal gradient is $-1/m$.",
    "s": "(a) $y = \\frac{x^4}{4}+x^2-7x+C$. Sub $(2,4)$: $4=4+4-14+C \\Rightarrow C=10$. (b) Tangent gradient at $x=2$: $m=8+4-7=5$. Normal gradient: $-\\frac{1}{5}$. Equation: $y-4=-\\frac{1}{5}(x-2) \\Rightarrow x+5y-22=0$.",
    "solutionSteps": [
      {
        "explanation": "Part (a): Integrate \\(\\frac{dy}{dx} = x^3 + 2x - 7\\) term by term to find \\(y\\), remembering to add the constant of integration \\(C\\).",
        "workingOut": "y = \\frac{x^4}{4} + x^2 - 7x + C"
      },
      {
        "explanation": "Substitute the point \\(P(2, 4)\\) to find \\(C\\): \\(x=2\\), \\(y=4\\).",
        "workingOut": "4 = \\frac{16}{4} + 4 - 14 + C = 4 + 4 - 14 + C = -6 + C"
      },
      {
        "explanation": "Solve for \\(C\\).",
        "workingOut": "C = 4 + 6 = 10"
      },
      {
        "explanation": "Write the complete equation of the curve.",
        "workingOut": "y = \\frac{x^4}{4} + x^2 - 7x + 10"
      },
      {
        "explanation": "Part (b): Find the gradient of the tangent at \\(P\\) by substituting \\(x=2\\) into \\(\\frac{dy}{dx}\\).",
        "workingOut": "m_{\\text{tangent}} = 2^3 + 2(2) - 7 = 8 + 4 - 7 = 5"
      },
      {
        "explanation": "The gradient of the normal is the negative reciprocal of the tangent gradient.",
        "workingOut": "m_{\\text{normal}} = -\\frac{1}{5}"
      },
      {
        "explanation": "Use the point-slope form \\(y - y_1 = m(x - x_1)\\) with \\(P(2,4)\\) and \\(m = -\\frac{1}{5}\\), then rearrange to general form.",
        "workingOut": "y - 4 = -\\frac{1}{5}(x-2) \\Rightarrow 5y - 20 = -x + 2 \\Rightarrow x + 5y - 22 = 0"
      }
    ]
  },
  {
    "id": "cths2020-q21",
    "topicId": "y12a-3B",
    "c": "3B",
    "t": "Stationary points and turning points",
    "source": "Cherrybrook Tech 2020 Trial Q21",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "A function is given by $y = 2x^3 + 3x^2 - 12x - 5$.\n\n(a) Find the stationary points, determine their nature, and find any points of inflection.\n\n(b) Sketch the curve, showing the stationary points, the point(s) of inflection and the $y$-intercept.",
    "a": "(a) Local max at $(-2, 15)$, local min at $(1, -12)$, point of inflection at $\\left(-\\frac{1}{2}, \\frac{3}{2}\\right)$.\n(b) Sketch showing these key features.",
    "opts": [],
    "h": "Find $y'$ and set to zero for stationary points. Use $y''$ to classify. Set $y''=0$ for possible inflection and verify concavity change.",
    "s": "$y'=6x^2+6x-12=6(x+2)(x-1)=0 \\Rightarrow x=-2$ or $x=1$. $y''=12x+6$. At $x=-2$: $y''=-18<0$ (max), $y=15$. At $x=1$: $y''=18>0$ (min), $y=-12$. POI: $y''=0 \\Rightarrow x=-\\frac{1}{2}$, $y=\\frac{3}{2}$.",
    "solutionSteps": [
      {
        "explanation": "Find the first derivative \\(y'\\) using the power rule.",
        "workingOut": "y' = 6x^2 + 6x - 12"
      },
      {
        "explanation": "Set \\(y' = 0\\) and solve for stationary points. Factor out 6, then factorise the quadratic.",
        "workingOut": "6(x^2 + x - 2) = 0 \\Rightarrow 6(x+2)(x-1) = 0 \\Rightarrow x = -2 \\text{ or } x = 1"
      },
      {
        "explanation": "Find the second derivative \\(y''\\) to classify the stationary points.",
        "workingOut": "y'' = 12x + 6"
      },
      {
        "explanation": "At \\(x = -2\\): \\(y'' = 12(-2)+6 = -18 < 0\\) (concave down — local maximum). Find \\(y\\)-value: \\(y=2(-8)+3(4)-12(-2)-5=15\\).",
        "workingOut": "x=-2:\\quad y''=-18<0 \\Rightarrow \\text{local max at }(-2, 15)"
      },
      {
        "explanation": "At \\(x = 1\\): \\(y'' = 12(1)+6 = 18 > 0\\) (concave up — local minimum). Find \\(y\\)-value: \\(y=2+3-12-5=-12\\).",
        "workingOut": "x=1:\\quad y''=18>0 \\Rightarrow \\text{local min at }(1,\\,-12)"
      },
      {
        "explanation": "Find possible points of inflection by setting \\(y'' = 0\\): \\(12x+6=0 \\Rightarrow x=-\\frac{1}{2}\\). Verify concavity changes sign (it does, since \\(y''\\) is linear). Find \\(y\\)-value: \\(y=2(-\\frac{1}{8})+3(\\frac{1}{4})-12(-\\frac{1}{2})-5=-\\frac{1}{4}+\\frac{3}{4}+6-5=\\frac{3}{2}\\).",
        "workingOut": "x=-\\tfrac{1}{2}:\\quad y=\\tfrac{3}{2} \\Rightarrow \\text{POI at }\\left(-\\tfrac{1}{2},\\, tfrac{3}{2}\\right)"
      },
      {
        "explanation": "Part (b): Sketch the curve using the key features: local max \\((-2,15)\\), POI \\((-\\frac{1}{2}, frac{3}{2})\\), local min \\((1,-12)\\), and \\(y\\)-intercept \\((0,-5)\\).",
        "workingOut": "y\\text{-intercept}: y=2(0)+3(0)-12(0)-5=-5"
      }
    ],
    "subQuestions": [
      {
        "id": "cths2020-q21b",
        "type": "teacher_review",
        "difficulty": "medium",
        "question": "(b) Sketch the curve $y = 2x^3 + 3x^2 - 12x - 5$, showing the stationary points, the point(s) of inflection and the $y$-intercept.",
        "answer": "Curve with: local max at $(-2, 15)$, point of inflection at $(-\\frac{1}{2}, \\frac{3}{2})$, local min at $(1, -12)$, $y$-intercept at $(0, -5)$.",
        "hint": "Use the results from part (a). The $y$-intercept is found by substituting $x=0$.",
        "solutionSteps": [
          {
            "explanation": "Plot key points: local max $(-2, 15)$, POI $(-\\frac{1}{2}, \\frac{3}{2})$, local min $(1, -12)$, and $y$-intercept $(0, -5)$.",
            "workingOut": "(-2,15),\\;(-\\tfrac{1}{2},\\tfrac{3}{2}),\\;(1,-12),\\;(0,-5)"
          },
          {
            "explanation": "Draw the cubic curve rising from bottom-left, through the local max, inflection point, local min, then rising to the right.",
            "workingOut": "\\text{Cubic shape with negative middle section}"
          }
        ]
      }
    ]
  },
  {
    "id": "cths2020-q22",
    "topicId": "y12a-2E",
    "c": "2E",
    "t": "Using graphs to solve equations and inequations",
    "source": "Cherrybrook Tech 2020 Trial Q22",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "The graph of $y = \\sin x$ is shown.\n\n(a) Explain why the equation $\\sin x = 1 - \\dfrac{x}{4}$ has three solutions.\n\n(b) Use the graph to approximate the largest solution to the equation $\\sin x = 1 - \\dfrac{x}{4}$.",
    "a": "(a) The line $y = 1 - \\frac{x}{4}$ intersects the curve $y = \\sin x$ exactly three times.\n(b) $x \\approx 5.8$",
    "opts": [],
    "h": "For (a): draw $y = 1 - \\frac{x}{4}$ (a line with $y$-intercept 1 and slope $-\\frac{1}{4}$) on the same axes as $y = \\sin x$ and count intersections. For (b): read off the largest $x$-coordinate of intersection.",
    "s": "(a) The line $y = 1 - \\frac{x}{4}$ passes through $(0,1)$ with gradient $-\\frac{1}{4}$. It intersects $y = \\sin x$ three times within the domain shown. (b) The rightmost intersection occurs at approximately $x \\approx 5.8$.",
    "solutionSteps": [
      {
        "explanation": "Part (a): Rewrite as finding where \\(y=\\sin x\\) and \\(y = 1-\\frac{x}{4}\\) intersect. The line has \\(y\\)-intercept \\((0,1)\\) and slope \\(-\\frac{1}{4}\\).",
        "workingOut": "y_1 = \\sin x, quad y_2 = 1 - \\frac{x}{4}"
      },
      {
        "explanation": "The line starts at \\((0,1)\\) and decreases slowly. The sinusoidal curve oscillates between \\(-1\\) and \\(1\\). In the visible domain, the line cuts the sine curve exactly 3 times.",
        "workingOut": "\\text{3 intersection points} \\Rightarrow \\text{3 solutions}"
      },
      {
        "explanation": "Part (b): Read the \\(x\\)-coordinate of the rightmost intersection from the graph. The sine curve is decreasing towards \\(-1\\) around \\(x \\approx \\frac{3\\pi}{2} \\approx 4.7\\), and the line intersects near \\(x \\approx 5.8\\).",
        "workingOut": "x \\approx 5.8"
      }
    ]
  },
  {
    "id": "cths2020-q23",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "source": "Cherrybrook Tech 2020 Trial Q23",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "If \\(y=\\dfrac{e^{3x}}{x+1}\\), find \\(\\dfrac{dy}{dx}\\).",
    "a": 1,
    "opts": [
      "\\(\\dfrac{3e^{3x}}{(x+1)^{2}}\\)",
      "\\(\\dfrac{e^{3x}(3x+2)}{(x+1)^{2}}\\)",
      "\\(\\dfrac{e^{3x}(3x+3)}{(x+1)^{2}}\\)",
      "\\(\\dfrac{3e^{3x}(x+1)-e^{3x}}{x+1}\\)"
    ],
    "h": "Quotient form \\(y=\\dfrac{e^{3x}}{x+1}\\). Use \\(\\dfrac{vu'-uv'}{v^{2}}\\) with \\(u=e^{3x}\\), \\(v=x+1\\).",
    "s": "\\(u=e^{3x},\\quad v=x+1\\) ; \\(u'=3e^{3x},\\quad v'=1\\) ; \\(\\dfrac{3e^{3x}(x+1)-e^{3x}}{(x+1)^{2}}\\) ; \\(\\dfrac{e^{3x}(3x+2)}{(x+1)^{2}}\\) ; \\(\\dfrac{e^{3x}(3x+2)}{(x+1)^{2}}\\)",
    "solutionSteps": [
      {
        "explanation": "Quotient form \\(y=\\dfrac{e^{3x}}{x+1}\\). Use \\(\\dfrac{vu'-uv'}{v^{2}}\\) with \\(u=e^{3x}\\), \\(v=x+1\\).",
        "workingOut": "\\(u=e^{3x},\\quad v=x+1\\)",
        "graphData": null
      },
      {
        "explanation": "Chain rule on the numerator: \\(u'=3e^{3x}\\). Denominator: \\(v'=1\\).",
        "workingOut": "\\(u'=3e^{3x},\\quad v'=1\\)",
        "graphData": null
      },
      {
        "explanation": "Quotient rule: \\(\\dfrac{3e^{3x}(x+1)-e^{3x}\\cdot 1}{(x+1)^{2}}\\).",
        "workingOut": "\\(\\dfrac{3e^{3x}(x+1)-e^{3x}}{(x+1)^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Factor \\(e^{3x}\\): numerator \\(e^{3x}\\bigl(3(x+1)-1\\bigr)=e^{3x}(3x+3-1)=e^{3x}(3x+2)\\).",
        "workingOut": "\\(\\dfrac{e^{3x}(3x+2)}{(x+1)^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(\\dfrac{dy}{dx}=\\dfrac{e^{3x}(3x+2)}{(x+1)^{2}}\\).",
        "workingOut": "\\(\\dfrac{e^{3x}(3x+2)}{(x+1)^{2}}\\)",
        "graphData": null
      }
    ],
    "question": "If \\(y=\\dfrac{e^{3x}}{x+1}\\), find \\(\\dfrac{dy}{dx}\\).",
    "answer": "1",
    "hint": "Quotient form \\(y=\\dfrac{e^{3x}}{x+1}\\). Use \\(\\dfrac{vu'-uv'}{v^{2}}\\) with \\(u=e^{3x}\\), \\(v=x+1\\).",
    "solution": "Quotient form \\(y=\\dfrac{e^{3x}}{x+1}\\). Use \\(\\dfrac{vu'-uv'}{v^{2}}\\) with \\(u=e^{3x}\\), \\(v=x+1\\). Chain rule on the numerator: \\(u'=3e^{3x}\\). Denominator: \\(v'=1\\). Quotient rule: \\(\\dfrac{3e^{3x}(x+1)-e^{3x}\\cdot 1}{(x+1)^{2}}\\). Factor \\(e^{3x}\\): numerator \\(e^{3x}\\bigl(3(x+1)-1\\bigr)=e^{3x}(3x+3-1)=e^{3x}(3x+2)\\). Therefore \\(\\dfrac{dy}{dx}=\\dfrac{e^{3x}(3x+2)}{(x+1)^{2}}\\)."
  },
  {
    "id": "cths2020-q24",
    "topicId": "y12a-2F",
    "c": "2F",
    "t": "Review of translations and reflections",
    "source": "Cherrybrook Tech 2020 Trial Q24",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "The diagram below shows the graph of $y = f(x)$. The graph has a local maximum at $x = -3$, a local minimum at $x = -1$, and an increasing section leading to a local maximum at $x = 2$.\n\n(a) Sketch $f'(x)$.\n\n(b) Sketch $f(-x)$.",
    "a": "(a) $f'(x)$: zero at $x=-3$, $x=-1$, $x=2$; positive on $(-\\infty,-3)$ and $(-1,2)$; negative on $(-3,-1)$ and $(2,\\infty)$.\n(b) $f(-x)$: reflection of $f(x)$ in the $y$-axis; local max at $x=3$, local min at $x=1$, decreasing for large positive $x$.",
    "opts": [],
    "h": "For (a): $f'(x) = 0$ at each stationary point; $f'(x)>0$ where $f$ is increasing; $f'(x)<0$ where $f$ is decreasing. For (b): reflect the graph in the $y$-axis (replace $x$ with $-x$).",
    "s": "(a) $f'$ is zero at $x=-3,-1,2$; positive on $(-\\infty,-3)\\cup(-1,2)$; negative on $(-3,-1)\\cup(2, infty)$. (b) $f(-x)$ reflects $f$ in the $y$-axis: local max at $x=3$, local min at $x=1$, local max at $x=-2$.",
    "solutionSteps": [
      {
        "explanation": "Part (a): Identify where \\(f'(x) = 0\\): at the stationary points \\(x = -3\\), \\(x = -1\\), and \\(x = 2\\).",
        "workingOut": "f'(-3) = 0,\\; f'(-1) = 0,\\; f'(2) = 0"
      },
      {
        "explanation": "Determine the sign of \\(f'\\): positive where \\(f\\) increases, negative where \\(f\\) decreases. The graph increases on \\((-\\infty,-3)\\) and \\((-1,2)\\); decreases on \\((-3,-1)\\) and \\((2, infty)\\).",
        "workingOut": "f'>0 \\text{ on }(-\\infty,-3)\\cup(-1,2);\\quad f'<0 \\text{ on }(-3,-1)\\cup(2, infty)"
      },
      {
        "explanation": "Sketch \\(f'(x)\\): a curve that is positive, dips to zero at \\(x=-3\\), goes negative, rises through zero at \\(x=-1\\), is positive again, then falls through zero at \\(x=2\\).",
        "workingOut": "\\text{W-shaped derivative with zeros at } x=-3,-1,2"
      },
      {
        "explanation": "Part (b): \\(f(-x)\\) reflects the graph of \\(f(x)\\) in the \\(y\\)-axis. Replace every \\(x\\)-coordinate with its negative.",
        "workingOut": "f(-x) \\text{ is the reflection of } f(x) \\text{ in the } y\\text{-axis}"
      },
      {
        "explanation": "Key features of \\(f(-x)\\): local max originally at \\(x=-3\\) becomes local max at \\(x=3\\); local min at \\(x=-1\\) becomes local min at \\(x=1\\); local max at \\(x=2\\) becomes local max at \\(x=-2\\).",
        "workingOut": "\\text{max at }x=3,\\; \\text{min at }x=1,\\; \\text{max at }x=-2"
      }
    ],
    "subQuestions": [
      {
        "id": "cths2020-q24a",
        "type": "teacher_review",
        "difficulty": "hard",
        "question": "(a) Sketch $f'(x)$.",
        "answer": "$f'(x)$ is zero at $x=-3$, $x=-1$, $x=2$. Positive on $(-\\infty,-3)\\cup(-1,2)$, negative on $(-3,-1)\\cup(2,\\infty)$.",
        "hint": "The derivative is zero at each turning point of $f$. Use the sign of the slope to determine the sign of $f'$.",
        "solutionSteps": [
          {
            "explanation": "Mark zeros of $f'$ at the turning points of $f$: $x=-3,-1,2$.",
            "workingOut": "f'(-3)=f'(-1)=f'(2)=0"
          },
          {
            "explanation": "Sketch a curve positive before $x=-3$, negative between $-3$ and $-1$, positive between $-1$ and $2$, negative after $2$.",
            "workingOut": "\\text{Sign chart: }+,\\,0,-,\\,0,+,\\,0,-"
          }
        ]
      },
      {
        "id": "cths2020-q24b",
        "type": "teacher_review",
        "difficulty": "medium",
        "question": "(b) Sketch $f(-x)$.",
        "answer": "Reflection of $f(x)$ in the $y$-axis. Local max at $x=3$, local min at $x=1$, local max at $x=-2$.",
        "hint": "Reflecting in the $y$-axis maps each point $(a, b)$ to $(-a, b)$.",
        "solutionSteps": [
          {
            "explanation": "Reflect the graph of $f(x)$ in the $y$-axis by mapping each $x$-coordinate to its negative.",
            "workingOut": "(x, y) \\to (-x, y)"
          },
          {
            "explanation": "Key features shift: max at $(-3,\\cdot)\\to(3,\\cdot)$; min at $(-1,\\cdot)\\to(1,\\cdot)$; max at $(2,\\cdot)\\to(-2,\\cdot)$.",
            "workingOut": "\\text{Reflected graph with max at }x=3,\\text{ min at }x=1"
          }
        ]
      }
    ]
  },
  {
    "id": "cths2020-q25",
    "topicId": "y12a-5G",
    "c": "5G",
    "t": "Differentiation of logarithmic functions",
    "source": "Cherrybrook Tech 2020 Trial Q25",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "(a) Show that the derivative of $\\ln\\!\\left(\\dfrac{3+x}{3-x}\\right)$ is $\\dfrac{6}{9-x^2}$.\n\n(b) Hence or otherwise find $\\displaystyle\\int \\dfrac{1}{9-x^2}\\, dx$.",
    "a": "(a) Proof shown.\n(b) $\\dfrac{1}{6}\\ln\\!\\left|\\dfrac{3+x}{3-x}\\right| + C$",
    "opts": [],
    "h": "For (a): use $\\ln(A/B) = \\ln A - \\ln B$, then differentiate using $\\frac{d}{dx}\\ln(ax+b) = \\frac{a}{ax+b}$. For (b): reverse the result from (a).",
    "s": "(a) $\\ln\\frac{3+x}{3-x} = \\ln(3+x)-\\ln(3-x)$. Derivative: $\\frac{1}{3+x} - \\frac{-1}{3-x} = \\frac{1}{3+x}+\\frac{1}{3-x} = \\frac{(3-x)+(3+x)}{(3+x)(3-x)} = \\frac{6}{9-x^2}$. (b) $\\int\\frac{1}{9-x^2}dx = \\frac{1}{6}\\int\\frac{6}{9-x^2}dx = \\frac{1}{6}\\ln|\\frac{3+x}{3-x}|+C$.",
    "solutionSteps": [
      {
        "explanation": "Part (a): Use the log quotient law to split \\(\\ln\\!\\left(\\frac{3+x}{3-x}\\right) = \\ln(3+x) - \\ln(3-x)\\).",
        "workingOut": "\\ln\\!\\left(\\frac{3+x}{3-x}\\right) = \\ln(3+x) - \\ln(3-x)"
      },
      {
        "explanation": "Differentiate each term: \\(\\frac{d}{dx}\\ln(3+x) = \\frac{1}{3+x}\\) and \\(\\frac{d}{dx}\\ln(3-x) = \\frac{-1}{3-x}\\).",
        "workingOut": "\\frac{d}{dx}\\!\\left[\\ln\\!\\left(\\frac{3+x}{3-x}\\right)\\right] = \\frac{1}{3+x} - \\frac{-1}{3-x} = \\frac{1}{3+x} + \\frac{1}{3-x}"
      },
      {
        "explanation": "Combine fractions over the common denominator \\((3+x)(3-x) = 9-x^2\\).",
        "workingOut": "\\frac{(3-x)+(3+x)}{(3+x)(3-x)} = \\frac{6}{9-x^2} \\quad\\blacksquare"
      },
      {
        "explanation": "Part (b): From part (a), \\(\\frac{d}{dx}\\!\\left[\\ln\\!\\left(\\frac{3+x}{3-x}\\right)\\right] = \\frac{6}{9-x^2}\\). Therefore \\(\\int\\frac{6}{9-x^2}\\,dx = \\ln\\!\\left|\\frac{3+x}{3-x}\\right| + C\\).",
        "workingOut": "\\int \\frac{6}{9-x^2}\\,dx = \\ln\\!\\left|\\frac{3+x}{3-x}\\right| + C"
      },
      {
        "explanation": "Divide both sides by 6 to find \\(\\int\\frac{1}{9-x^2}\\,dx\\).",
        "workingOut": "\\int \\frac{1}{9-x^2}\\,dx = \\frac{1}{6}\\ln\\!\\left|\\frac{3+x}{3-x}\\right| + C"
      }
    ]
  },
  {
    "id": "cths2020-q26",
    "topicId": "y12a-4H",
    "c": "4H",
    "t": "The trapezoidal rule",
    "source": "Cherrybrook Tech 2020 Trial Q26",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Use the Trapezoidal rule, with four sub-intervals, to estimate the value of $\\displaystyle\\int_0^2 \\sqrt{4-x^2}\\, dx$, correct to 3 decimal places.",
    "a": "$\\approx 2.996$",
    "opts": [],
    "h": "With 4 sub-intervals over $[0,2]$, the width is $h = 0.5$. Evaluate $f(x) = \\sqrt{4-x^2}$ at $x = 0, 0.5, 1, 1.5, 2$ then apply the trapezoid formula.",
    "s": "$h=0.5$. Values: $f(0)=2$, $f(0.5)=\\frac{\\sqrt{15}}{2}$, $f(1)=\\sqrt{3}$, $f(1.5)=\\frac{\\sqrt{7}}{2}$, $f(2)=0$. Trap rule: $\\frac{0.5}{2}[(2+0)+2(\\frac{\\sqrt{15}}{2}+\\sqrt{3}+\\frac{\\sqrt{7}}{2})] \\approx 2.996$.",
    "solutionSteps": [
      {
        "explanation": "Determine the sub-interval width: \\(h = \\frac{b-a}{n} = \\frac{2-0}{4} = 0.5\\).",
        "workingOut": "h = \\frac{2-0}{4} = 0.5"
      },
      {
        "explanation": "Set up the \\(x\\)-values at each endpoint: \\(x_0=0, x_1=0.5, x_2=1, x_3=1.5, x_4=2\\).",
        "workingOut": "x = 0,\\; 0.5,\\; 1,\\; 1.5,\\; 2"
      },
      {
        "explanation": "Evaluate \\(f(x) = \\sqrt{4-x^2}\\) at each point.",
        "workingOut": "f(0)=2,\\; f(0.5)=\\tfrac{\\sqrt{15}}{2},\\; f(1)=\\sqrt{3},\\; f(1.5)=\\tfrac{\\sqrt{7}}{2},\\; f(2)=0"
      },
      {
        "explanation": "Apply the Trapezoidal rule: \\(\\int_a^b f\\,dx \\approx \\frac{h}{2}\\bigl[f(x_0)+2f(x_1)+2f(x_2)+2f(x_3)+f(x_4)\\bigr]\\).",
        "workingOut": "\\approx \\frac{0.5}{2}\\!\\left[(2+0)+2\\!\\left(\\frac{\\sqrt{15}}{2}+\\sqrt{3}+\\frac{\\sqrt{7}}{2}\\right)\\right]"
      },
      {
        "explanation": "Evaluate numerically.",
        "workingOut": "\\approx \\frac{0.5}{2}\\bigl[2 + 2(1.936 + 1.732 + 1.323)\\bigr] = \\frac{0.5}{2}[2 + 9.982] \\approx 2.996"
      }
    ]
  },
  {
    "id": "cths2020-q27",
    "topicId": "y12a-10B",
    "c": "10B",
    "t": "Continuous distributions",
    "source": "Cherrybrook Tech 2020 Trial Q27",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "The probability density function for the continuous random variable $X$ is given by:\n$$f(x) = \\begin{cases} |1-x| & 0 \\leq x \\leq 2 \\\\ 0 & \\text{otherwise} \\end{cases}$$\nFind $P(X \\leq 1.5)$.",
    "a": "$P(X \\leq 1.5) = \\dfrac{5}{8}$",
    "opts": [],
    "h": "Split $|1-x|$ into cases: $(1-x)$ for $x \\leq 1$ and $(x-1)$ for $x > 1$. Integrate separately on $[0,1]$ and $[1, 1.5]$.",
    "s": "$P(X\\leq 1.5) = \\int_0^1(1-x)dx + \\int_1^{1.5}(x-1)dx = \\left[x-\\frac{x^2}{2}\\right]_0^1 + \\left[\\frac{x^2}{2}-x\\right]_1^{1.5} = \\frac{1}{2} + \\frac{1}{8} = \\frac{5}{8}$.",
    "solutionSteps": [
      {
        "explanation": "Split \\(|1-x|\\): it equals \\((1-x)\\) when \\(x \\leq 1\\) and \\((x-1)\\) when \\(x > 1\\).",
        "workingOut": "|1-x| = \\begin{cases}1-x & x \\leq 1\\\\x-1 & x > 1\\end{cases}"
      },
      {
        "explanation": "Compute the first integral \\(\\int_0^1 (1-x)\\,dx\\).",
        "workingOut": "\\left[x - \\frac{x^2}{2}\\right]_0^1 = \\left(1 - \\frac{1}{2}\\right) - 0 = \\frac{1}{2}"
      },
      {
        "explanation": "Compute the second integral \\(\\int_1^{1.5}(x-1)\\,dx\\).",
        "workingOut": "\\left[\\frac{x^2}{2} - x\\right]_1^{1.5} = \\left(\\frac{2.25}{2}-1.5\\right)-\\left(\\frac{1}{2}-1\\right) = (-0.375)-(-0.5) = 0.125 = \\frac{1}{8}"
      },
      {
        "explanation": "Add both integrals for the total probability.",
        "workingOut": "P(X \\leq 1.5) = \\frac{1}{2} + \\frac{1}{8} = \\frac{4}{8} + \\frac{1}{8} = \\frac{5}{8}"
      }
    ]
  },
  {
    "id": "cths2020-q28",
    "topicId": "y12a-10E",
    "c": "10E",
    "t": "Normal distributions",
    "source": "Cherrybrook Tech 2020 Trial Q28",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "A soft drink company produces a bottled drink. The amount of liquid poured into each bottle by the bottling machine is normally distributed, with a mean of 300 mL and a standard deviation of 10 mL.\n\n(a) A bottle has a $z$-score of $-1.2$. How many mL below the mean is this bottle?\n\n(b) In order to comply with local regulations, at least $97.5\\%$ of bottles must contain more liquid than indicated on the label. What is the largest amount of millilitres the bottle's label should show in order to comply with the regulations?",
    "a": "(a) 12 mL below the mean\n(b) 280 mL",
    "opts": [],
    "h": "For (a): use $x = \\mu + z\\sigma$. For (b): 97.5% above the label means 2.5% are below, which corresponds to $z = -2$ (since 95% lie within 2 standard deviations).",
    "s": "(a) $z = -1.2$: distance $= |z|\\sigma = 1.2 \\times 10 = 12$ mL below the mean. (b) 97.5% above means 2.5% below, so $z = -2$. Label value $= 300 + (-2)(10) = 280$ mL.",
    "solutionSteps": [
      {
        "explanation": "Part (a): The \\(z\\)-score measures how many standard deviations away from the mean. \\(z = -1.2\\) means \\(1.2\\) standard deviations below the mean.",
        "workingOut": "\\text{Distance below mean} = |z| \\times \\sigma = 1.2 \\times 10 = 12 \\text{ mL}"
      },
      {
        "explanation": "Part (b): If 97.5% of bottles must be above the label value, then 2.5% are below. By the empirical rule, 95% of data lies within \\(\\pm 2\\) standard deviations, so 2.5% lies below \\(\\mu - 2\\sigma\\).",
        "workingOut": "P(X < \\text{label}) = 2.5\\%  \\Rightarrow z = -2"
      },
      {
        "explanation": "Convert the \\(z\\)-score to a raw value using \\(x = \\mu + z\\sigma\\).",
        "workingOut": "x = 300 + (-2)(10) = 300 - 20 = 280 \\text{ mL}"
      },
      {
        "explanation": "The label should show at most 280 mL to ensure 97.5% of bottles contain more than the label amount.",
        "workingOut": "\\text{Maximum label value} = 280 \\text{ mL}"
      }
    ]
  },
  {
    "id": "cths2020-q29",
    "topicId": "y11a-12E",
    "c": "12E",
    "t": "Multi-stage experiments",
    "source": "Cherrybrook Tech 2020 Trial Q29",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "It is known at the beginning of winter in a large population, 15% of the people in the population will be infected with a particular virus.\n\n(a) Two people are selected at random, find the probability that both of them have the virus.\n\n(b) Four people are selected at random, find the probability that at least one of them has the virus. Give your answer to 3 decimal places.\n\n(c) What is the smallest number of people a drug company would need to test to have a greater than 95% chance that at least one of the tested people had the virus?",
    "a": "(a) $0.0225$\n(b) $\\approx 0.478$\n(c) $19$ people",
    "opts": [],
    "h": "For (a): multiply probabilities for independent selections. For (b): use complement $P(\\text{at least one}) = 1 - P(\\text{none})$. For (c): solve the inequality $1-(0.85)^n > 0.95$.",
    "s": "(a) $(0.15)^2 = 0.0225$. (b) $1-(0.85)^4 = 1-0.52201 \\approx 0.478$. (c) $1-(0.85)^n > 0.95 \\Rightarrow (0.85)^n < 0.05 \\Rightarrow n > \\frac{\\ln 0.05}{\\ln 0.85} \\approx 18.4 \\Rightarrow n = 19$.",
    "solutionSteps": [
      {
        "explanation": "Part (a): Since selections are independent, multiply the probability that one person has the virus by itself for two people.",
        "workingOut": "P(\\text{both}) = (0.15)^2 = 0.0225"
      },
      {
        "explanation": "Part (b): Use the complement rule. \\(P(\\text{at least one has virus}) = 1 - P(\\text{none have virus})\\).",
        "workingOut": "P(\\text{at least one}) = 1 - P(\\text{none}) = 1 - (0.85)^4"
      },
      {
        "explanation": "Evaluate \\((0.85)^4\\).",
        "workingOut": "(0.85)^4 = 0.52200625 \\approx 0.522"
      },
      {
        "explanation": "Subtract from 1.",
        "workingOut": "1 - 0.522 = 0.478"
      },
      {
        "explanation": "Part (c): Set up the inequality for a greater than 95% chance. \\(P(\\text{at least one}) > 0.95 \\Rightarrow 1-(0.85)^n > 0.95 \\Rightarrow (0.85)^n < 0.05\\).",
        "workingOut": "(0.85)^n < 0.05"
      },
      {
        "explanation": "Take natural logarithm of both sides. Since \\(\\ln(0.85) < 0\\), the inequality reverses when dividing.",
        "workingOut": "n\\ln(0.85) < \\ln(0.05) \\Rightarrow n > \\frac{\\ln(0.05)}{\\ln(0.85)} \\approx \\frac{-2.996}{-0.163} \\approx 18.4"
      },
      {
        "explanation": "Since \\(n\\) must be a whole number, round up to the nearest integer.",
        "workingOut": "n = 19 \\text{ people}"
      }
    ]
  },
  {
    "id": "cths2020-q30",
    "topicId": "y12a-4G",
    "c": "4G",
    "t": "Areas of compound regions",
    "source": "Cherrybrook Tech 2020 Trial Q30",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "The functions $y = \\sqrt{x+1}$ and $y = 11-x$ are sketched below. They intersect at $(8, 3)$.\n\nCalculate the area bounded by the curves $y = \\sqrt{x+1}$ and $y = 11-x$ and the $x$-axis.",
    "a": "$22.5$ square units",
    "opts": [],
    "h": "Split the area into two parts at the intersection point $x=8$: integrate $\\sqrt{x+1}$ from $x=-1$ to $x=8$, then integrate $11-x$ from $x=8$ to $x=11$ (where it meets the $x$-axis).",
    "s": "$A = \\int_{-1}^{8}\\sqrt{x+1}\\,dx + \\int_{8}^{11}(11-x)\\,dx = \\left[\\frac{2(x+1)^{3/2}}{3}\\right]_{-1}^{8} + \\left[11x-\\frac{x^2}{2}\\right]_8^{11} = 18 + \\frac{9}{2} = 22.5$.",
    "solutionSteps": [
      {
        "explanation": "Identify the bounds: \\(y=\\sqrt{x+1}\\) starts at \\(x=-1\\) (where it meets the \\(x\\)-axis). The curves intersect at \\(x=8\\). \\(y=11-x\\) meets the \\(x\\)-axis at \\(x=11\\). Split the area at \\(x=8\\).",
        "workingOut": "A = \\int_{-1}^{8}\\sqrt{x+1}\\,dx + \\int_{8}^{11}(11-x)\\,dx"
      },
      {
        "explanation": "Evaluate the first integral using the substitution or power rule: \\(\\int (x+1)^{1/2}dx = \\frac{2(x+1)^{3/2}}{3}\\).",
        "workingOut": "\\int_{-1}^{8}\\sqrt{x+1}\\,dx = \\left[\\frac{2(x+1)^{3/2}}{3}\\right]_{-1}^{8} = \\frac{2(9)^{3/2}}{3} - 0 = \\frac{2 \\times 27}{3} = 18"
      },
      {
        "explanation": "Evaluate the second integral.",
        "workingOut": "\\int_{8}^{11}(11-x)\\,dx = \\left[11x-\\frac{x^2}{2}\\right]_8^{11} = \\left(121-\\frac{121}{2}\\right)-\\left(88-32\\right) = \\frac{121}{2}-56 = \\frac{9}{2}"
      },
      {
        "explanation": "Add both areas for the total.",
        "workingOut": "A = 18 + \\frac{9}{2} = 18 + 4.5 = 22.5 \\text{ square units}"
      }
    ]
  },
  {
    "id": "cths2020-q31",
    "topicId": "y12a-1C",
    "c": "1C",
    "t": "Geometric sequences",
    "source": "Cherrybrook Tech 2020 Trial Q31",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Find the value(s) of $m$ given that $m$, $3m$ and $m^2 + 20$ are consecutive terms of a geometric sequence.",
    "a": "$m = 4$ or $m = 5$",
    "opts": [],
    "h": "In a geometric sequence, the ratio between consecutive terms is constant: $\\frac{3m}{m} = \\frac{m^2+20}{3m}$. Cross-multiply to form a quadratic equation.",
    "s": "$\\frac{3m}{m} = \\frac{m^2+20}{3m} \\Rightarrow 9m = m^2+20 \\Rightarrow m^2-9m+20=0 \\Rightarrow (m-4)(m-5)=0 \\Rightarrow m=4$ or $m=5$.",
    "solutionSteps": [
      {
        "explanation": "For consecutive terms of a GP, the common ratio must be constant: \\(\\frac{T_2}{T_1} = \\frac{T_3}{T_2}\\).",
        "workingOut": "\\frac{3m}{m} = \\frac{m^2+20}{3m}"
      },
      {
        "explanation": "Simplify the left side and cross-multiply.",
        "workingOut": "3 = \\frac{m^2+20}{3m} \\Rightarrow 9m = m^2 + 20"
      },
      {
        "explanation": "Rearrange into standard quadratic form.",
        "workingOut": "m^2 - 9m + 20 = 0"
      },
      {
        "explanation": "Factorise the quadratic.",
        "workingOut": "(m-4)(m-5) = 0"
      },
      {
        "explanation": "Solve for \\(m\\).",
        "workingOut": "m = 4 \\quad \\text{or} \\quad m = 5"
      },
      {
        "explanation": "Verify \\(m=4\\): terms are \\(4, 12, 36\\) (ratio 3) ✓. Verify \\(m=5\\): terms are \\(5, 15, 45\\) (ratio 3) ✓.",
        "workingOut": "m=4:\\;4,12,36\\;\\checkmark \\quad m=5:\\;5,15,45\\;\\checkmark"
      }
    ]
  },
  {
    "id": "cths2020-q32",
    "topicId": "y12a-10B",
    "c": "10B",
    "t": "Continuous distributions",
    "source": "Cherrybrook Tech 2020 Trial Q32",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "A probability density function is defined as $f(x) = ke^{-x}$ in the domain $[0, 3]$.\n\n(a) Show that $k = 1.0524$, correct to four decimal places.\n\n(b) Hence, find the median value of the probability density function, correct to three decimal places.",
    "a": "(a) $k = \\dfrac{1}{1-e^{-3}} \\approx 1.0524$\n(b) Median $\\approx 0.645$",
    "opts": [],
    "h": "For (a): use $\\int_0^3 ke^{-x}dx = 1$ to solve for $k$. For (b): solve $\\int_0^m ke^{-x}dx = 0.5$ for $m$.",
    "s": "(a) $k[-e^{-x}]_0^3=1 \\Rightarrow k(-e^{-3}+1)=1 \\Rightarrow k=\\frac{1}{1-e^{-3}}\\approx 1.0524$. (b) $[-1.0524e^{-x}]_0^m=0.5 \\Rightarrow -1.0524e^{-m}+1.0524=0.5 \\Rightarrow e^{-m}=\\frac{0.5524}{1.0524} \\Rightarrow m\\approx 0.645$.",
    "solutionSteps": [
      {
        "explanation": "Part (a): For \\(f(x)\\) to be a valid PDF, the total area must equal 1. Set up the integral.",
        "workingOut": "\\int_0^3 ke^{-x}\\,dx = 1"
      },
      {
        "explanation": "Integrate: \\(\\int ke^{-x}dx = -ke^{-x}\\).",
        "workingOut": "\\left[-ke^{-x}\\right]_0^3 = 1 \\Rightarrow -ke^{-3} + k = 1"
      },
      {
        "explanation": "Factor and solve for \\(k\\).",
        "workingOut": "k(1-e^{-3}) = 1 \\Rightarrow k = \\frac{1}{1-e^{-3}} \\approx \\frac{1}{1-0.0498} \\approx \\frac{1}{0.9502} \\approx 1.0524\\quad\\blacksquare"
      },
      {
        "explanation": "Part (b): The median \\(m\\) satisfies \\(\\int_0^m 1.0524e^{-x}\\,dx = 0.5\\).",
        "workingOut": "\\left[-1.0524e^{-x}\\right]_0^m = 0.5 \\Rightarrow -1.0524e^{-m} + 1.0524 = 0.5"
      },
      {
        "explanation": "Isolate \\(e^{-m}\\).",
        "workingOut": "1.0524e^{-m} = 0.5524 \\Rightarrow e^{-m} = \\frac{0.5524}{1.0524}"
      },
      {
        "explanation": "Take the natural logarithm to solve for \\(m\\).",
        "workingOut": "-m = \\ln\\!\\left(\\frac{0.5524}{1.0524}\\right) \\approx -0.6446 \\Rightarrow m \\approx 0.645"
      }
    ]
  },
  {
    "id": "cths2020-q33",
    "topicId": "y12a-10C",
    "c": "10C",
    "t": "Mean and variance of a distribution",
    "source": "Cherrybrook Tech 2020 Trial Q33",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "A six-sided die is biased as shown in the probability distribution below.\n\n| $x$ | 1 | 2 | 3 | 4 | 5 | 6 |\n|---|---|---|---|---|---|---|\n| $P(X=x)$ | 0.1 | 0.25 | 0.05 | $a$ | 0.17 | 0.13 |\n\n(a) Explain why $a = 0.3$.\n(b) Find $P(2 < X \\leq 4)$.\n(c) Find $P(X \\leq 4 \\mid X > 2)$.\n(d) Find the expected value of $X$.\n(e) Find $E(4X+1)$.\n(f) Find the variance of $X$.",
    "a": "(a) All probabilities sum to 1\n(b) $0.35$\n(c) $\\dfrac{7}{13}$\n(d) $E(X) = 3.58$\n(e) $E(4X+1) = 15.32$\n(f) $\\text{Var}(X) \\approx 2.4636$",
    "opts": [],
    "h": "For (a): use $\\sum P = 1$. For (c): use conditional probability formula. For (d)-(f): use $E(X) = \\sum x p_x$ and $\\text{Var}(X) = E(X^2) - [E(X)]^2$.",
    "s": "(a) $0.1+0.25+0.05+a+0.17+0.13=1 \\Rightarrow a=0.3$. (b) $P(3)+P(4)=0.05+0.3=0.35$. (c) $\\frac{0.35}{0.05+0.3+0.17+0.13}=\\frac{0.35}{0.65}=\\frac{7}{13}$. (d) $E(X)=3.58$. (e) $4(3.58)+1=15.32$. (f) $\\text{Var}(X)\\approx 2.4636$.",
    "solutionSteps": [
      {
        "explanation": "Part (a): All probabilities in a distribution must sum to 1. Add all given probabilities and solve for \\(a\\).",
        "workingOut": "0.1+0.25+0.05+a+0.17+0.13 = 1 \\Rightarrow 0.7 + a = 1 \\Rightarrow a = 0.3"
      },
      {
        "explanation": "Part (b): \\(P(2 < X \\leq 4)\\) includes \\(X=3\\) and \\(X=4\\).",
        "workingOut": "P(X=3)+P(X=4) = 0.05+0.3 = 0.35"
      },
      {
        "explanation": "Part (c): Use \\(P(X\\leq 4|X>2) = \\frac{P(2<X\\leq 4)}{P(X>2)}\\). The denominator \\(P(X>2) = P(3)+P(4)+P(5)+P(6) = 0.05+0.3+0.17+0.13 = 0.65\\).",
        "workingOut": "P(X\\leq 4|X>2) = \\frac{0.35}{0.65} = \\frac{35}{65} = \\frac{7}{13}"
      },
      {
        "explanation": "Part (d): Compute \\(E(X) = \\sum x\\cdot P(X=x)\\).",
        "workingOut": "E(X) = 1(0.1)+2(0.25)+3(0.05)+4(0.3)+5(0.17)+6(0.13) = 0.1+0.5+0.15+1.2+0.85+0.78 = 3.58"
      },
      {
        "explanation": "Part (e): Use the linear expectation rule \\(E(aX+b) = aE(X)+b\\).",
        "workingOut": "E(4X+1) = 4E(X)+1 = 4(3.58)+1 = 14.32+1 = 15.32"
      },
      {
        "explanation": "Part (f): Compute \\(E(X^2) = \\sum x^2 P(X=x)\\), then \\(\\text{Var}(X) = E(X^2) - [E(X)]^2\\).",
        "workingOut": "E(X^2) = 1(0.1)+4(0.25)+9(0.05)+16(0.3)+25(0.17)+36(0.13) = 0.1+1+0.45+4.8+4.25+4.68 = 15.28"
      },
      {
        "explanation": "Subtract \\([E(X)]^2\\) to find the variance.",
        "workingOut": "\\text{Var}(X) = 15.28 - (3.58)^2 = 15.28 - 12.8164 = 2.4636"
      }
    ]
  },
  {
    "id": "cths2020-q34",
    "topicId": "y12a-9E",
    "c": "9E",
    "t": "Line of best fit",
    "source": "Cherrybrook Tech 2020 Trial Q34",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Max conducted a survey about age and weekly wage:\n\n| Age ($x$) | 18 | 45 | 28 | 15 | 32 | 68 |\n|---|---|---|---|---|---|---|\n| Wage (\\$/week) ($W$) | 715 | 2350 | 1530 | 438 | 1690 | 1320 |\n\n(a) Using your calculator, find (r) Pearson's correlation coefficient correct to 2 decimal places and describe the type and strength of correlation.\n\n(b) Using your calculator, find the equation of the least-squares regression line in the form $W = Bx + A$ where $A$ and $B$ are integers.\n\n(c) Use your equation to estimate the earnings of a 50 year-old worker.\n\n(d) Justify why the equation from part (b) cannot be used to make valid estimates for ages greater than 68 and less than 15 years.",
    "a": "(a) $r \\approx 0.53$, moderate positive correlation\n(b) $W = 18x + 706$\n(c) $1606\n(d) Extrapolation beyond the data range is unreliable.",
    "opts": [],
    "h": "Enter data into calculator for (a) and (b). For (d): the regression model is only valid within the range of collected data.",
    "s": "(a) $r \\approx 0.53$: moderate positive correlation. (b) $W = 18x + 706$. (c) $W = 18(50)+706 = \\$1606$. (d) The model is only reliable within the data range $[15, 68]$; extrapolating beyond this range may be inaccurate as the relationship may not hold.",
    "solutionSteps": [
      {
        "explanation": "Part (a): Enter the data pairs into a calculator and compute the Pearson correlation coefficient.",
        "workingOut": "r \\approx 0.53 \\Rightarrow \\text{moderate positive correlation}"
      },
      {
        "explanation": "Part (b): Use the calculator's linear regression function to find the least-squares line.",
        "workingOut": "W = 18x + 706"
      },
      {
        "explanation": "Part (c): Substitute \\(x = 50\\) into the regression equation.",
        "workingOut": "W = 18(50) + 706 = 900 + 706 = \\$1606"
      },
      {
        "explanation": "Part (d): The equation is derived from data in the range \\(15 \\leq x \\leq 68\\). Extrapolating beyond this range assumes the linear relationship continues, which may not be valid. For example, substituting \\(x=8\\) gives \\(850 (unrealistic for an 8-year-old).\\)",
        "workingOut": "\\text{Valid only for } 15 \\leq x \\leq 68 \\text{ (interpolation)}"
      }
    ]
  },
  {
    "id": "cths2020-q35",
    "topicId": "y12a-7E",
    "c": "7E",
    "t": "Rates and integration",
    "source": "Cherrybrook Tech 2020 Trial Q35",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "A swimming pool is to be emptied for maintenance. The quantity of water, $Q$ in litres, remaining in the pool at a time, $t$ minutes, is given by:\n$$Q(t) = 2000(25-t)^2, quad 0 \\leq t \\leq 25$$\n\n(a) At what rate (in litres/min) is the water being removed at any time $t$?\n\n(b) How long will it take to remove at least half of the water from the pool? Answer to the nearest minute.\n\n(c) At what time does the rate of flow of water from the pool reach 20 kL/minute?\n\n(d) Describe how the amount of water remaining in the pool changes as the pool empties. Mention how the rate itself changes in your answer.",
    "a": "(a) $4000(25-t)$ L/min\n(b) 8 minutes\n(c) $t = 20$ min\n(d) The water decreases at a decreasing rate (the rate of removal slows down as the pool empties).",
    "opts": [],
    "h": "For (a): differentiate $Q(t)$ and note the rate of removal is $-Q'(t)$. For (b): find when $Q(t) = \\frac{1}{2}Q(0)$. For (c): set $-Q'(t) = 20000$.",
    "s": "(a) $Q'(t)=-4000(25-t)$, so removal rate $=4000(25-t)$ L/min. (b) $Q(0)=1250000$; $Q(t)=625000 \\Rightarrow (25-t)^2=312.5 \\Rightarrow t=25-\\sqrt{312.5}\\approx 7.3$, so 8 min. (c) $4000(25-t)=20000 \\Rightarrow t=20$ min. (d) Rate decreases as pool empties.",
    "solutionSteps": [
      {
        "explanation": "Part (a): Differentiate \\(Q(t) = 2000(25-t)^2\\) using the chain rule.",
        "workingOut": "Q'(t) = 2000 \\cdot 2(25-t) \\cdot (-1) = -4000(25-t)"
      },
      {
        "explanation": "The rate of removal is the rate at which \\(Q\\) decreases, so take \\(-Q'(t)\\).",
        "workingOut": "\\text{Rate of removal} = -Q'(t) = 4000(25-t) \\text{ L/min}"
      },
      {
        "explanation": "Part (b): Initial volume \\(Q(0) = 2000(25)^2 = 1{,}250{,}000\\) L. Half is \\(625{,}000\\) L. Solve \\(2000(25-t)^2 = 625000\\).",
        "workingOut": "(25-t)^2 = 312.5 \\Rightarrow 25-t = \\sqrt{312.5} \\Rightarrow t = 25 - \\sqrt{312.5} \\approx 7.32"
      },
      {
        "explanation": "Round to the nearest minute: \\(t \\approx 8\\) minutes (since we need at least half removed, we take \\(t = 8\\)).",
        "workingOut": "t \\approx 8 \\text{ minutes}"
      },
      {
        "explanation": "Part (c): Set the removal rate equal to 20 kL/min = 20,000 L/min and solve for \\(t\\).",
        "workingOut": "4000(25-t) = 20000 \\Rightarrow 25-t = 5 \\Rightarrow t = 20 \\text{ min}"
      },
      {
        "explanation": "Part (d): As \\(t\\) increases from 0 to 25, \\((25-t)\\) decreases, so the rate \\(4000(25-t)\\) decreases. The pool empties at a decreasing rate — it starts fast and slows down as it empties.",
        "workingOut": "\\text{Rate } = 4000(25-t) \\text{ is decreasing as } t \\text{ increases}"
      }
    ]
  },
  {
    "id": "cths2020-q36",
    "topicId": "y12a-3G",
    "c": "3G",
    "t": "Applications of maximisation and minimisation",
    "source": "Cherrybrook Tech 2020 Trial Q36",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "A 100 centimetre length of wire is cut into two pieces at point P, where $x$ is the length of one of the two pieces of wire.\n\n(a) The piece that is length $x$ cm is used to form a circle and the other is used to form a square. Show that the total area of the circle and square can be given by:\n$$A = \\dfrac{x^2}{4\\pi} + \\dfrac{(100-x)^2}{16}$$\n\n(b) At what length should $x$ be cut to minimise the total area of the circle and square? Give your answer to the nearest centimetre.",
    "a": "(a) Proof shown.\n(b) $x \\approx 44$ cm",
    "opts": [],
    "h": "For (a): circumference of circle $= x$, so $r = \\frac{x}{2\\pi}$; area $= \\pi r^2 = \\frac{x^2}{4\\pi}$. Square side $= \\frac{100-x}{4}$; area $= \\frac{(100-x)^2}{16}$. For (b): differentiate $A$, set $A'=0$.",
    "s": "(a) Circle: $2\\pi r = x$, $r=\\frac{x}{2\\pi}$, area$=\\frac{x^2}{4\\pi}$. Square: side$=\\frac{100-x}{4}$, area$=\\frac{(100-x)^2}{16}$. Total $A=\\frac{x^2}{4\\pi}+\\frac{(100-x)^2}{16}$. (b) $A'=\\frac{x}{2\\pi}-\\frac{100-x}{8}=0 \\Rightarrow x=\\frac{100\\pi}{4+\\pi}\\approx 43.99\\approx 44$ cm.",
    "solutionSteps": [
      {
        "explanation": "Part (a): The piece of length \\(x\\) forms a circle. Its circumference equals \\(x\\), so \\(2\\pi r = x\\), giving \\(r = \\frac{x}{2\\pi}\\).",
        "workingOut": "r = \\frac{x}{2\\pi}"
      },
      {
        "explanation": "The area of the circle is \\(\\pi r^2\\).",
        "workingOut": "A_{\\text{circle}} = \\pi\\left(\\frac{x}{2\\pi}\\right)^2 = \\pi \\cdot \\frac{x^2}{4\\pi^2} = \\frac{x^2}{4\\pi}"
      },
      {
        "explanation": "The piece of length \\((100-x)\\) forms a square. Each side has length \\(\\frac{100-x}{4}\\).",
        "workingOut": "A_{\\text{square}} = \\left(\\frac{100-x}{4}\\right)^2 = \\frac{(100-x)^2}{16}"
      },
      {
        "explanation": "Total area: \\(A = A_{\\text{circle}} + A_{\\text{square}}\\).",
        "workingOut": "A = \\frac{x^2}{4\\pi} + \\frac{(100-x)^2}{16} \\quad\\blacksquare"
      },
      {
        "explanation": "Part (b): Differentiate \\(A\\) with respect to \\(x\\) and set \\(\\frac{dA}{dx} = 0\\).",
        "workingOut": "\\frac{dA}{dx} = \\frac{x}{2\\pi} - \\frac{2(100-x)}{16} = \\frac{x}{2\\pi} - \\frac{100-x}{8} = 0"
      },
      {
        "explanation": "Solve for \\(x\\): multiply through by \\(8\\pi\\) to clear denominators.",
        "workingOut": "4x = \\pi(100-x) \\Rightarrow 4x + \\pi x = 100\\pi \\Rightarrow x(4+\\pi) = 100\\pi \\Rightarrow x = \\frac{100\\pi}{4+\\pi}"
      },
      {
        "explanation": "Evaluate numerically and verify it is a minimum using \\(A'' = \\frac{1}{2\\pi}+\\frac{1}{8} > 0\\).",
        "workingOut": "x = \\frac{100\\pi}{4+\\pi} \\approx \\frac{314.16}{7.142} \\approx 43.99 \\approx 44 \\text{ cm}"
      }
    ]
  }
];
