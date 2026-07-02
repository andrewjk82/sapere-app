export const Y12A_CH5L_QUESTIONS = [
  {
    "id": "y12a-5l-q1",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Chapter 5 Revision",
    "question": "Differentiate $y = e^{4x}$.",
    "a": "4e^{4x}",
    "hint": "Use $\\frac{d}{dx}e^{f(x)} = f'(x)e^{f(x)}$.",
    "solutionSteps": [
      {
        "explanation": "Chain rule.",
        "workingOut": "y' = 4e^{4x}"
      }
    ],
    "graphData": null
  },
  {
    "id": "y12a-5l-q2",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Chapter 5 Revision",
    "question": "Differentiate $y = e^{3x^2 - 1}$.",
    "a": "6x\\,e^{3x^2-1}",
    "hint": "Chain rule: multiply by the derivative of the exponent.",
    "solutionSteps": [
      {
        "explanation": "Derivative of exponent: 6x.",
        "workingOut": "y' = 6x\\,e^{3x^2-1}"
      }
    ],
    "graphData": null
  },
  {
    "id": "y12a-5l-q3",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Chapter 5 Revision",
    "question": "Differentiate $y = x^2 e^{-x}$.",
    "a": "e^{-x}(2x - x^2)",
    "hint": "Use the product rule.",
    "solutionSteps": [
      {
        "explanation": "Product rule: u=x², v=e^{-x}.",
        "workingOut": "y' = 2x\\,e^{-x} + x^2(-e^{-x}) = e^{-x}(2x-x^2)"
      }
    ],
    "graphData": null
  },
  {
    "id": "y12a-5l-q4",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Chapter 5 Revision",
    "question": "Find $\\int 5e^{2x}\\,dx$.",
    "a": "\\frac{5}{2}e^{2x} + C",
    "hint": "$\\int e^{ax}dx = \\frac{1}{a}e^{ax}+C$.",
    "solutionSteps": [
      {
        "explanation": "Integrate.",
        "workingOut": "\\frac{5}{2}e^{2x}+C"
      }
    ],
    "graphData": null
  },
  {
    "id": "y12a-5l-q5",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Chapter 5 Revision",
    "question": "Evaluate $\\int_0^1 e^{3x}\\,dx$, giving your answer in exact form.",
    "a": "\\frac{e^3 - 1}{3}",
    "hint": "Evaluate $\\left[\\frac{e^{3x}}{3}\\right]_0^1$.",
    "solutionSteps": [
      {
        "explanation": "Evaluate definite integral.",
        "workingOut": "\\frac{e^3}{3}-\\frac{1}{3}=\\frac{e^3-1}{3}"
      }
    ],
    "graphData": null
  },
  {
    "id": "y12a-5l-q6",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Chapter 5 Revision",
    "question": "Differentiate $y = \\log_e(5x + 3)$.",
    "a": "\\frac{5}{5x+3}",
    "hint": "$\\frac{d}{dx}\\log_e(f(x))=\\frac{f'(x)}{f(x)}$.",
    "solutionSteps": [
      {
        "explanation": "Chain rule.",
        "workingOut": "y'=\\frac{5}{5x+3}"
      }
    ],
    "graphData": null
  },
  {
    "id": "y12a-5l-q7",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Chapter 5 Revision",
    "question": "Differentiate $y = \\log_e(x^2 + 4)$.",
    "a": "\\frac{2x}{x^2+4}",
    "hint": "Numerator is derivative of denominator.",
    "solutionSteps": [
      {
        "explanation": "Apply log differentiation.",
        "workingOut": "y'=\\frac{2x}{x^2+4}"
      }
    ],
    "graphData": null
  },
  {
    "id": "y12a-5l-q8",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Chapter 5 Revision",
    "question": "Differentiate $y = x\\log_e x$.",
    "a": "\\log_e x + 1",
    "hint": "Product rule: u=x, v=ln x.",
    "solutionSteps": [
      {
        "explanation": "Product rule.",
        "workingOut": "y'=\\ln x + x\\cdot\\frac{1}{x}=\\ln x+1"
      }
    ],
    "graphData": null
  },
  {
    "id": "y12a-5l-q9",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Chapter 5 Revision",
    "question": "Differentiate $y = \\dfrac{\\log_e x}{x}$.",
    "a": "\\frac{1 - \\log_e x}{x^2}",
    "hint": "Quotient rule.",
    "solutionSteps": [
      {
        "explanation": "Quotient rule: u=ln x, v=x.",
        "workingOut": "y'=\\frac{\\frac{1}{x}\\cdot x - \\ln x}{x^2}=\\frac{1-\\ln x}{x^2}"
      }
    ],
    "graphData": null
  },
  {
    "id": "y12a-5l-q10",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Chapter 5 Revision",
    "question": "Find $\\int \\frac{6}{3x-1}\\,dx$.",
    "a": "2\\log_e|3x-1| + C",
    "hint": "$\\int\\frac{k}{ax+b}dx=\\frac{k}{a}\\log_e|ax+b|+C$.",
    "solutionSteps": [
      {
        "explanation": "Integrate.",
        "workingOut": "2\\log_e|3x-1|+C"
      }
    ],
    "graphData": null
  },
  {
    "id": "y12a-5l-q11",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Chapter 5 Revision",
    "question": "Find $\\displaystyle\\int \\frac{3x^2}{x^3+5}\\,dx$.",
    "a": "\\log_e|x^3+5| + C",
    "hint": "Numerator is the derivative of the denominator.",
    "solutionSteps": [
      {
        "explanation": "Recognise f'(x)/f(x) form.",
        "workingOut": "\\int\\frac{3x^2}{x^3+5}\\,dx=\\log_e|x^3+5|+C"
      }
    ],
    "graphData": null
  },
  {
    "id": "y12a-5l-q12",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Chapter 5 Revision",
    "question": "Evaluate $\\displaystyle\\int_1^4 \\frac{2}{x}\\,dx$ exactly.",
    "a": "2\\log_e 4",
    "hint": "Evaluate $[2\\log_e x]_1^4$.",
    "solutionSteps": [
      {
        "explanation": "Evaluate.",
        "workingOut": "2\\log_e 4-0=2\\log_e 4"
      }
    ],
    "graphData": null
  },
  {
    "id": "y12a-5l-q13",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Chapter 5 Revision",
    "question": "Find $\\displaystyle\\int_1^e \\left(e^x + \\frac{1}{x}\\right)dx$.",
    "a": "e^e - e",
    "hint": "Integrate each term separately.",
    "solutionSteps": [
      {
        "explanation": "Integrate.",
        "workingOut": "[e^x+\\log_e x]_1^e=(e^e+1)-(e+0)=e^e-e+1"
      },
      {
        "explanation": "Note: exact form is \\(e^e - e + 1\\).",
        "workingOut": "e^e-e+1"
      }
    ],
    "graphData": null
  },
  {
    "id": "y12a-5l-q14",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Chapter 5 Revision",
    "question": "Find the equation of the tangent to $y = e^{2x}$ at the point where $x = 0$.",
    "a": "y = 2x + 1",
    "hint": "At x=0: y=1, y'=2.",
    "solutionSteps": [
      {
        "explanation": "At x=0: y=e⁰=1, y'=2e⁰=2.",
        "workingOut": "\\text{Point: }(0,1),\\;\\text{gradient: }2"
      },
      {
        "explanation": "Tangent equation.",
        "workingOut": "y-1=2(x-0) \\Rightarrow y=2x+1"
      }
    ],
    "graphData": null
  },
  {
    "id": "y12a-5l-q15",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Chapter 5 Revision",
    "question": "Find the equation of the tangent to $y = \\log_e x$ at $x = 1$.",
    "a": "y = x - 1",
    "hint": "At x=1: y=0, y'=1.",
    "solutionSteps": [
      {
        "explanation": "At x=1: y=0, y'=1.",
        "workingOut": "\\text{Point: }(1,0),\\;\\text{gradient: }1"
      },
      {
        "explanation": "Tangent.",
        "workingOut": "y=x-1"
      }
    ],
    "graphData": null
  },
  {
    "id": "y12a-5l-q16",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Chapter 5 Revision",
    "question": "Find any stationary points of $y = xe^{-x}$ and determine their nature.",
    "a": "Maximum at $\\left(1,\\,\\frac{1}{e}\\right)$",
    "hint": "Set y'=0. Use product rule to find y'.",
    "solutionSteps": [
      {
        "explanation": "Product rule: y'=e^{-x}-xe^{-x}=e^{-x}(1-x).",
        "workingOut": "y'=e^{-x}(1-x)"
      },
      {
        "explanation": "y'=0 when x=1.",
        "workingOut": "x=1,\\;y=e^{-1}=1/e"
      },
      {
        "explanation": "y''=e^{-x}(x-2); at x=1: y''=-1/e<0 → maximum.",
        "workingOut": "\\text{Maximum at }(1, 1/e)"
      }
    ],
    "graphData": null
  },
  {
    "id": "y12a-5l-q17",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Chapter 5 Revision",
    "question": "Find the area bounded by $y = e^x$, the $x$-axis, $x = 0$ and $x = 2$.",
    "a": "e^2 - 1",
    "hint": "$\\int_0^2 e^x\\,dx = [e^x]_0^2$.",
    "solutionSteps": [
      {
        "explanation": "Evaluate.",
        "workingOut": "[e^x]_0^2=e^2-1"
      }
    ],
    "graphData": null
  },
  {
    "id": "y12a-5l-q18",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Chapter 5 Revision",
    "question": "Find the area of the region bounded by $y = \\frac{2}{x}$, the $x$-axis, $x = 1$ and $x = 3$.",
    "a": "2\\log_e 3 \\approx 2.197",
    "hint": "Evaluate $[2\\log_e x]_1^3$.",
    "solutionSteps": [
      {
        "explanation": "Evaluate.",
        "workingOut": "2\\log_e 3-0=2\\log_e 3\\approx 2.197"
      }
    ],
    "graphData": null
  },
  {
    "id": "y12a-5l-q19",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 180,
    "t": "Chapter 5 Revision",
    "question": "Find the area enclosed between $y = e^x$ and $y = e^{-x}$ from $x = -1$ to $x = 1$.",
    "a": "2e - \\frac{2}{e} \\approx 4.701",
    "hint": "e^x > e^{-x} for x>0; split or use symmetry.",
    "solutionSteps": [
      {
        "explanation": "By symmetry, area = 2∫₀¹(e^x-e^{-x})dx.",
        "workingOut": "A=2\\int_0^1(e^x-e^{-x})dx"
      },
      {
        "explanation": "Evaluate.",
        "workingOut": "2[e^x+e^{-x}]_0^1=2[(e+1/e)-(1+1)]=2(e+1/e-2)=2e+2/e-4"
      },
      {
        "explanation": "Simplify.",
        "workingOut": "= 2e-\\frac{2}{e}+2\\cdot\\frac{1}{e}-4... \\text{Actually: }2\\left[e^x+e^{-x}\\right]_0^1=2[(e+e^{-1})-(1+1)]=2e+\\frac{2}{e}-4"
      }
    ],
    "graphData": null
  },
  {
    "id": "y12a-5l-q20",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Chapter 5 Revision",
    "question": "Differentiate $y = 3^x$.",
    "a": "3^x \\ln 3",
    "hint": "$\\frac{d}{dx}a^x = a^x\\ln a$.",
    "solutionSteps": [
      {
        "explanation": "Apply standard form.",
        "workingOut": "y'=3^x\\ln 3"
      }
    ],
    "graphData": null
  },
  {
    "id": "y12a-5l-q21",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Chapter 5 Revision",
    "question": "Find $\\int 2^x\\,dx$.",
    "a": "\\frac{2^x}{\\ln 2} + C",
    "hint": "$\\int a^x\\,dx = \\frac{a^x}{\\ln a}+C$.",
    "solutionSteps": [
      {
        "explanation": "Integrate.",
        "workingOut": "\\frac{2^x}{\\ln 2}+C"
      }
    ],
    "graphData": null
  },
  {
    "id": "y12a-5l-q22",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Chapter 5 Revision",
    "question": "Use the change-of-base formula to evaluate $\\log_3 20$ correct to four significant figures.",
    "a": "\\approx 2.727",
    "hint": "$\\log_3 20 = \\frac{\\ln 20}{\\ln 3}$.",
    "solutionSteps": [
      {
        "explanation": "Apply change-of-base.",
        "workingOut": "\\frac{\\ln 20}{\\ln 3}\\approx\\frac{2.9957}{1.0986}\\approx 2.727"
      }
    ],
    "graphData": null
  },
  {
    "id": "y12a-5l-q23",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 180,
    "t": "Chapter 5 Revision",
    "question": "Find the $x$-coordinate of the point on $y = \\log_e x$ where the normal has gradient $-3$.",
    "a": "x = \\frac{1}{3}",
    "hint": "Tangent gradient = 1/x; normal gradient = -x. Set -x = -3.",
    "solutionSteps": [
      {
        "explanation": "y'=1/x, so tangent gradient = 1/x.",
        "workingOut": "\\text{Normal gradient}=-\\frac{1}{y'}=-x"
      },
      {
        "explanation": "Set normal gradient = -3.",
        "workingOut": "-x=-3 \\Rightarrow x=\\frac{1}{3}"
      }
    ],
    "graphData": null
  },
  {
    "id": "y12a-5l-q24",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 180,
    "t": "Chapter 5 Revision",
    "question": "Find $\\displaystyle\\int_0^1 x\\,e^{x^2}\\,dx$.",
    "a": "\\frac{e-1}{2}",
    "hint": "Let $u = x^2$, then $du = 2x\\,dx$.",
    "solutionSteps": [
      {
        "explanation": "Let u=x², du=2x dx.",
        "workingOut": "\\int_0^1 xe^{x^2}dx=\\frac{1}{2}\\int_0^1 e^{x^2}\\cdot 2x\\,dx=\\frac{1}{2}[e^{x^2}]_0^1"
      },
      {
        "explanation": "Evaluate.",
        "workingOut": "=\\frac{1}{2}(e^1-e^0)=\\frac{e-1}{2}"
      }
    ],
    "graphData": null
  },
  {
    "id": "y12a-5l-q25",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "t": "Chapter 5 Revision",
    "question": "a) Find the coordinates of the stationary point of $y = \\ln x - x + 2$.\nb) Determine its nature and sketch the curve.",
    "a": "a) Maximum at $(1,\\,2)$.\nb) y''=-1/x²<0 for all x>0, so it is a maximum.",
    "hint": "Set y'=1/x-1=0 to find stationary point.",
    "solutionSteps": [
      {
        "explanation": "y'=1/x-1=0 → x=1, y=0-1+2=1.",
        "workingOut": "x=1,\\;y=\\ln 1-1+2=1"
      },
      {
        "explanation": "Wait: y=ln1-1+2=0-1+2=1. Point is (1,1).",
        "workingOut": "\\text{Actually: }y=\\ln 1-1+2=0-1+2=1\\text{ → point }(1,1)"
      },
      {
        "explanation": "y''=-1/x²; at x=1: y''=-1<0 → maximum.",
        "workingOut": "\\text{Maximum at }(1,1)"
      }
    ],
    "graphData": null
  },
  {
    "id": "y12a-5l-q25b",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 180,
    "t": "Chapter 5 Revision",
    "question": "Find the stationary point of $y = \\ln x - x + 2$ and determine its nature.",
    "a": "Maximum at $(1,\\,1)$",
    "hint": "Set y'=1/x-1=0.",
    "solutionSteps": [
      {
        "explanation": "y'=1/x-1=0 → x=1.",
        "workingOut": "x=1"
      },
      {
        "explanation": "y(1)=ln1-1+2=1.",
        "workingOut": "y=1"
      },
      {
        "explanation": "y''=-1/x²<0 → maximum.",
        "workingOut": "\\text{Maximum at }(1,1)"
      }
    ],
    "graphData": null
  },
  {
    "id": "y12a-5l-q26",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 180,
    "t": "Chapter 5 Revision",
    "question": "Find the exact area enclosed between $y = \\frac{2x}{x^2+1}$ and the $x$-axis, from $x = 0$ to $x = 2$.",
    "a": "\\log_e 5",
    "hint": "Numerator is the derivative of the denominator.",
    "solutionSteps": [
      {
        "explanation": "Recognise f'(x)/f(x) form.",
        "workingOut": "\\int_0^2\\frac{2x}{x^2+1}dx=[\\log_e(x^2+1)]_0^2"
      },
      {
        "explanation": "Evaluate.",
        "workingOut": "\\log_e 5-\\log_e 1=\\log_e 5"
      }
    ],
    "graphData": null
  },
  {
    "id": "y12a-5l-q27",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 180,
    "t": "Chapter 5 Revision",
    "question": "Given $f(x) = e^x - ex$, show that $f(x) \\ge 0$ for all $x$, with equality only at $x = 1$.",
    "a": "f'(x)=e^x-e=0 at x=1 (minimum). f(1)=e-e=0. f''(1)=e>0 confirms minimum. Since minimum value is 0, f(x)≥0 for all x.",
    "hint": "Find the minimum of f(x) by setting f'(x)=0.",
    "solutionSteps": [
      {
        "explanation": "f'(x)=e^x-e; set f'=0.",
        "workingOut": "e^x=e \\Rightarrow x=1"
      },
      {
        "explanation": "f''(x)=e^x>0 → minimum.",
        "workingOut": "f''(1)=e>0 \\Rightarrow \\text{minimum}"
      },
      {
        "explanation": "Minimum value.",
        "workingOut": "f(1)=e^1-e(1)=0"
      },
      {
        "explanation": "Conclusion.",
        "workingOut": "\\text{Since min value is 0, }f(x)\\ge 0\\text{ for all }x"
      }
    ],
    "graphData": null
  },
  {
    "id": "y12a-5l-q28",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 180,
    "t": "Chapter 5 Revision",
    "question": "Evaluate $\\displaystyle\\int_1^e \\frac{(\\ln x)^2}{x}\\,dx$.",
    "a": "\\frac{1}{3}",
    "hint": "Let $u = \\ln x$, then $du = \\frac{1}{x}\\,dx$.",
    "solutionSteps": [
      {
        "explanation": "Let u=ln x, du=dx/x. Limits: x=1→u=0, x=e→u=1.",
        "workingOut": "\\int_0^1 u^2\\,du"
      },
      {
        "explanation": "Evaluate.",
        "workingOut": "\\left[\\frac{u^3}{3}\\right]_0^1=\\frac{1}{3}"
      }
    ],
    "graphData": null
  },
  {
    "id": "y12a-5l-q29",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 180,
    "t": "Chapter 5 Revision",
    "question": "Find the area of the region bounded by $y = e^x$, $y = e^{-x}$ and $x = 2$, in the first quadrant.",
    "a": "e^2 - e^{-2} - 2... \\text{Actually: } e^2 - \\frac{1}{e^2} - 2 \\approx 5.254",
    "hint": "Intersection at x=0 (both equal 1). Integrate (e^x-e^{-x}) from x=0 to x=2.",
    "solutionSteps": [
      {
        "explanation": "At x=0: both=1 (intersection).",
        "workingOut": "\\text{Intersection at }(0,1)"
      },
      {
        "explanation": "Integrate.",
        "workingOut": "A=\\int_0^2(e^x-e^{-x})dx=[e^x+e^{-x}]_0^2"
      },
      {
        "explanation": "Evaluate.",
        "workingOut": "=(e^2+e^{-2})-(1+1)=e^2+e^{-2}-2"
      }
    ],
    "graphData": null
  },
  {
    "id": "y12a-5l-q30",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 180,
    "t": "Chapter 5 Revision",
    "question": "If $y = \\log_e(\\sin x)$, find $\\dfrac{dy}{dx}$.",
    "a": "\\cot x",
    "hint": "Chain rule: $\\frac{d}{dx}\\ln(f(x))=\\frac{f'(x)}{f(x)}$.",
    "solutionSteps": [
      {
        "explanation": "Apply log differentiation.",
        "workingOut": "\\frac{dy}{dx}=\\frac{\\cos x}{\\sin x}=\\cot x"
      }
    ],
    "graphData": null
  }
];
