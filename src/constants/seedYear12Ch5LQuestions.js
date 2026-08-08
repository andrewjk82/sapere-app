export const Y12A_CH5L_QUESTIONS = [
  {
    "id": "y12a-5l-q1",
    "topicId": "y12a-5L",
    "c": "5L",
    "t": "Chapter 5 Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Differentiate \\(y = e^{4x}\\).",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(4e^{4x}\\)",
      "\\(e^{4x}\\)",
      "\\(4e^{x}\\)",
      "\\(e^{4x}\\ln 4\\)"
    ],
    "hint": "Use standard derivatives and integrals of exponential and logarithmic functions.",
    "solution": "The correct answer is \\(4e^{4x}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = e^{4x}\\). Strategy: chain rule for the exponential. Write the inside as \\(u = 4x\\). Why? The derivative of \\(e^{u}\\) is \\(e^{u}\\,u'\\), so we need \\(u'\\) first.",
        "workingOut": "\\(y = e^{4x},\\quad u = 4x\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate the inside: \\(u' = 4\\). Apply the chain rule: \\(\\dfrac{dy}{dx} = e^{u}\\cdot u' = e^{4x}\\cdot 4\\).",
        "workingOut": "\\(y' = 4e^{4x}\\)",
        "graphData": null
      },
      {
        "explanation": "A common slip is forgetting the chain-rule factor 4 (giving only \\(e^{4x}\\)), or writing \\(e^{4x}\\ln 4\\) (that rule is for \\(a^{x}\\), not \\(e^{kx}\\)).",
        "workingOut": "\\(y' = 4e^{4x}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(4e^{4x}\\).",
        "workingOut": "\\(4e^{4x}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(4e^{4x}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(e^{4x}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(4e^{x}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(e^{4x}\\ln 4\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-5l-q2",
    "topicId": "y12a-5L",
    "c": "5L",
    "t": "Chapter 5 Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Differentiate \\(y = e^{3x^{2}-1}\\).",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(6x e^{3x^{2}-1}\\)",
      "\\(3e^{3x^{2}-1}\\)",
      "\\((6x-1)e^{3x^{2}-1}\\)",
      "\\(e^{6x}\\)"
    ],
    "hint": "Use standard derivatives and integrals of exponential and logarithmic functions.",
    "solution": "The correct answer is \\(6x e^{3x^{2}-1}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = e^{3x^{2}-1}\\). Strategy: chain rule with inside \\(u = 3x^{2}-1\\). Why? Again, \\(\\dfrac{d}{dx}e^{u} = e^{u}u'\\).",
        "workingOut": "\\(u = 3x^{2}-1\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate the inside: \\(u' = 6x\\). (Derivative of \\(3x^{2}\\) is \\(6x\\); the constant \\(-1\\) vanishes.)",
        "workingOut": "\\(u' = 6x\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(y' = e^{3x^{2}-1}\\cdot 6x = 6x\\,e^{3x^{2}-1}\\). A common slip is taking only the coefficient 3 (missing the chain factor from \\(x^{2}\\)), or writing \\((6x-1)e^{\\ldots}\\) by incorrectly differentiating the constant inside.",
        "workingOut": "\\(y' = 6x e^{3x^{2}-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(6x e^{3x^{2}-1}\\).",
        "workingOut": "\\(6x e^{3x^{2}-1}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(6x e^{3x^{2}-1}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3e^{3x^{2}-1}\\)",
        "imageUrl": null
      },
      {
        "text": "\\((6x-1)e^{3x^{2}-1}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(e^{6x}\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-5l-q3",
    "topicId": "y12a-5L",
    "c": "5L",
    "t": "Chapter 5 Revision",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate \\(y = x^{2}e^{-x}\\).",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(e^{-x}(2x-x^{2})\\)",
      "\\(e^{-x}(2x+x^{2})\\)",
      "\\(2xe^{-x}\\)",
      "\\(-x^{2}e^{-x}\\)"
    ],
    "hint": "Use standard derivatives and integrals of exponential and logarithmic functions.",
    "solution": "The correct answer is \\(e^{-x}(2x-x^{2})\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = x^{2}e^{-x}\\). Strategy: product rule. Set \\(u = x^{2}\\) and \\(v = e^{-x}\\). Why product rule? The expression is a product of a power and an exponential.",
        "workingOut": "\\(u = x^{2},\\quad v = e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate each factor: \\(u' = 2x\\). For \\(v\\), chain rule gives \\(v' = -e^{-x}\\).",
        "workingOut": "\\(u' = 2x,\\quad v' = -e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "Product rule: \\(y' = u'v + uv' = 2x\\,e^{-x} + x^{2}(-e^{-x}) = 2x e^{-x} - x^{2}e^{-x}\\).",
        "workingOut": "\\(y' = 2x e^{-x} - x^{2}e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out the common \\(e^{-x}\\): \\(y' = e^{-x}(2x - x^{2})\\). A common slip is the sign on the second term (forgetting that \\(\\dfrac{d}{dx}e^{-x} = -e^{-x}\\)).",
        "workingOut": "\\(y' = e^{-x}(2x - x^{2})\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(e^{-x}(2x - x^{2})\\).",
        "workingOut": "\\(e^{-x}(2x - x^{2})\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(e^{-x}(2x-x^{2})\\)",
        "imageUrl": null
      },
      {
        "text": "\\(e^{-x}(2x+x^{2})\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2xe^{-x}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-x^{2}e^{-x}\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-5l-q4",
    "topicId": "y12a-5L",
    "c": "5L",
    "t": "Chapter 5 Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Find \\(\\displaystyle\\int 5e^{2x}\\,dx\\).",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(\\dfrac{5}{2}e^{2x}+C\\)",
      "\\(5e^{2x}+C\\)",
      "\\(10e^{2x}+C\\)",
      "\\(\\dfrac{5}{2}e^{x}+C\\)"
    ],
    "hint": "Use standard derivatives and integrals of exponential and logarithmic functions.",
    "solution": "The correct answer is \\(\\dfrac{5}{2}e^{2x}+C\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(\\displaystyle\\int 5e^{2x}\\,dx\\). Strategy: use \\(\\displaystyle\\int e^{kx}\\,dx = \\dfrac{1}{k}e^{kx}+C\\) with constant factor 5 and \\(k = 2\\).",
        "workingOut": "\\(\\int 5e^{2x}\\,dx = 5\\int e^{2x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Integrate: \\(5\\cdot\\dfrac{1}{2}e^{2x}+C = \\dfrac{5}{2}e^{2x}+C\\). Check by differentiating: derivative of \\(\\dfrac{5}{2}e^{2x}\\) is \\(\\dfrac{5}{2}\\cdot 2e^{2x} = 5e^{2x}\\).",
        "workingOut": "\\(\\dfrac{5}{2}e^{2x}+C\\)",
        "graphData": null
      },
      {
        "explanation": "A common slip is forgetting to divide by 2 (writing \\(5e^{2x}+C\\)), or multiplying by 2 instead of dividing.",
        "workingOut": "\\(\\dfrac{5}{2}e^{2x}+C\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{5}{2}e^{2x}+C\\).",
        "workingOut": "\\(\\dfrac{5}{2}e^{2x}+C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(\\dfrac{5}{2}e^{2x}+C\\)",
        "imageUrl": null
      },
      {
        "text": "\\(5e^{2x}+C\\)",
        "imageUrl": null
      },
      {
        "text": "\\(10e^{2x}+C\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{5}{2}e^{x}+C\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-5l-q5",
    "topicId": "y12a-5L",
    "c": "5L",
    "t": "Chapter 5 Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Evaluate \\(\\displaystyle\\int_0^{1} e^{3x}\\,dx\\) exactly.",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(\\dfrac{e^{3}-1}{3}\\)",
      "\\(e^{3}-1\\)",
      "\\(\\dfrac{e^{3}}{3}\\)",
      "\\(3(e^{3}-1)\\)"
    ],
    "hint": "Use standard derivatives and integrals of exponential and logarithmic functions.",
    "solution": "The correct answer is \\(\\dfrac{e^{3}-1}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(\\displaystyle\\int_0^{1} e^{3x}\\,dx\\). Strategy: find the antiderivative, then evaluate at the limits.",
        "workingOut": "\\(\\int_0^{1} e^{3x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative of \\(e^{3x}\\) is \\(\\dfrac{1}{3}e^{3x}\\) (because the chain-rule factor 3 must be cancelled by dividing by 3).",
        "workingOut": "\\(\\dfrac{1}{3}e^{3x}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\(\\left[\\dfrac{1}{3}e^{3x}\\right]_0^{1} = \\dfrac{1}{3}e^{3} - \\dfrac{1}{3}e^{0} = \\dfrac{1}{3}e^{3} - \\dfrac{1}{3}\\cdot 1 = \\dfrac{e^{3}-1}{3}\\).",
        "workingOut": "\\(\\dfrac{e^{3}-1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "A common slip is forgetting the factor \\(\\dfrac{1}{3}\\) (leaving \\(e^{3}-1\\)), or evaluating only at the upper limit.",
        "workingOut": "\\(\\dfrac{e^{3}-1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{e^{3}-1}{3}\\).",
        "workingOut": "\\(\\dfrac{e^{3}-1}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(\\dfrac{e^{3}-1}{3}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(e^{3}-1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{e^{3}}{3}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3(e^{3}-1)\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-5l-q6",
    "topicId": "y12a-5L",
    "c": "5L",
    "t": "Chapter 5 Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Differentiate \\(y = \\ln(5x+3)\\).",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(\\dfrac{5}{5x+3}\\)",
      "\\(\\dfrac{1}{5x+3}\\)",
      "\\(\\dfrac{5}{x+3}\\)",
      "\\(5\\ln(5x+3)\\)"
    ],
    "hint": "Use standard derivatives and integrals of exponential and logarithmic functions.",
    "solution": "The correct answer is \\(\\dfrac{5}{5x+3}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = \\ln(5x+3)\\). Strategy: chain rule for natural log. Recall \\(\\dfrac{d}{dx}\\ln u = \\dfrac{1}{u}\\,u'\\) with \\(u = 5x+3\\).",
        "workingOut": "\\(u = 5x+3\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate the inside: \\(u' = 5\\). Therefore \\(y' = \\dfrac{1}{5x+3}\\cdot 5 = \\dfrac{5}{5x+3}\\).",
        "workingOut": "\\(y' = \\dfrac{5}{5x+3}\\)",
        "graphData": null
      },
      {
        "explanation": "A common slip is omitting the chain-rule factor 5 (writing only \\(\\dfrac{1}{5x+3}\\)), or differentiating the 5 incorrectly in the denominator.",
        "workingOut": "\\(\\dfrac{5}{5x+3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{5}{5x+3}\\).",
        "workingOut": "\\(\\dfrac{5}{5x+3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(\\dfrac{5}{5x+3}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{1}{5x+3}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{5}{x+3}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(5\\ln(5x+3)\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-5l-q7",
    "topicId": "y12a-5L",
    "c": "5L",
    "t": "Chapter 5 Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Differentiate \\(y = \\ln(x^{2}+4)\\).",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(\\dfrac{2x}{x^{2}+4}\\)",
      "\\(\\dfrac{1}{x^{2}+4}\\)",
      "\\(\\dfrac{2x}{x+4}\\)",
      "\\(\\dfrac{x}{x^{2}+4}\\)"
    ],
    "hint": "Use standard derivatives and integrals of exponential and logarithmic functions.",
    "solution": "The correct answer is \\(\\dfrac{2x}{x^{2}+4}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = \\ln(x^{2}+4)\\). Strategy: chain rule with \\(u = x^{2}+4\\), so \\(y' = \\dfrac{u'}{u}\\).",
        "workingOut": "\\(u = x^{2}+4\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate the inside: \\(u' = 2x\\). Therefore \\(y' = \\dfrac{2x}{x^{2}+4}\\).",
        "workingOut": "\\(y' = \\dfrac{2x}{x^{2}+4}\\)",
        "graphData": null
      },
      {
        "explanation": "A common slip is forgetting the 2 (writing \\(\\dfrac{x}{x^{2}+4}\\)), or writing the denominator as \\(x+4\\) instead of \\(x^{2}+4\\).",
        "workingOut": "\\(\\dfrac{2x}{x^{2}+4}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{2x}{x^{2}+4}\\).",
        "workingOut": "\\(\\dfrac{2x}{x^{2}+4}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(\\dfrac{2x}{x^{2}+4}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{1}{x^{2}+4}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{2x}{x+4}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{x}{x^{2}+4}\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-5l-q8",
    "topicId": "y12a-5L",
    "c": "5L",
    "t": "Chapter 5 Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Differentiate \\(y = x\\ln x\\).",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(\\ln x + 1\\)",
      "\\(\\ln x\\)",
      "\\(\\dfrac{1}{x}\\)",
      "\\(x+\\ln x\\)"
    ],
    "hint": "Use standard derivatives and integrals of exponential and logarithmic functions.",
    "solution": "The correct answer is \\(\\ln x + 1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = x\\ln x\\). Strategy: product rule with \\(u = x\\) and \\(v = \\ln x\\).",
        "workingOut": "\\(u = x,\\quad v = \\ln x\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate: \\(u' = 1\\) and \\(v' = \\dfrac{1}{x}\\). Then \\(y' = u'v + uv' = 1\\cdot\\ln x + x\\cdot\\dfrac{1}{x} = \\ln x + 1\\).",
        "workingOut": "\\(y' = \\ln x + 1\\)",
        "graphData": null
      },
      {
        "explanation": "A common slip is stopping at \\(\\ln x\\) (forgetting the product-rule second term), or writing only \\(\\dfrac{1}{x}\\).",
        "workingOut": "\\(\\ln x + 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\ln x + 1\\).",
        "workingOut": "\\(\\ln x + 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(\\ln x + 1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\ln x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{1}{x}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(x+\\ln x\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-5l-q9",
    "topicId": "y12a-5L",
    "c": "5L",
    "t": "Chapter 5 Revision",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate \\(y = \\dfrac{\\ln x}{x}\\).",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(\\dfrac{1-\\ln x}{x^{2}}\\)",
      "\\(\\dfrac{\\ln x-1}{x^{2}}\\)",
      "\\(\\dfrac{1}{x^{2}}\\)",
      "\\(\\dfrac{1}{x}\\)"
    ],
    "hint": "Use standard derivatives and integrals of exponential and logarithmic functions.",
    "solution": "The correct answer is \\(\\dfrac{1-\\ln x}{x^{2}}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = \\dfrac{\\ln x}{x}\\). Strategy: quotient rule \\(\\dfrac{u}{v}\\) with \\(u = \\ln x\\), \\(v = x\\).",
        "workingOut": "\\(u = \\ln x,\\quad v = x\\)",
        "graphData": null
      },
      {
        "explanation": "Then \\(u' = \\dfrac{1}{x}\\) and \\(v' = 1\\). Quotient rule: \\(y' = \\dfrac{u'v - uv'}{v^{2}} = \\dfrac{\\dfrac{1}{x}\\cdot x - (\\ln x)\\cdot 1}{x^{2}} = \\dfrac{1 - \\ln x}{x^{2}}\\).",
        "workingOut": "\\(y' = \\dfrac{1 - \\ln x}{x^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Alternatively, rewrite \\(y = x^{-1}\\ln x\\) and use the product rule: \\(y' = -x^{-2}\\ln x + x^{-1}\\cdot\\dfrac{1}{x} = \\dfrac{1-\\ln x}{x^{2}}\\) (same result).",
        "workingOut": "\\(\\dfrac{1 - \\ln x}{x^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "A common slip is reversing the numerator to \\(\\ln x - 1\\) (sign error in the quotient rule).",
        "workingOut": "\\(\\dfrac{1 - \\ln x}{x^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{1-\\ln x}{x^{2}}\\).",
        "workingOut": "\\(\\dfrac{1-\\ln x}{x^{2}}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(\\dfrac{1-\\ln x}{x^{2}}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{\\ln x-1}{x^{2}}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{1}{x^{2}}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{1}{x}\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-5l-q10",
    "topicId": "y12a-5L",
    "c": "5L",
    "t": "Chapter 5 Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Find \\(\\displaystyle\\int\\dfrac{6}{3x-1}\\,dx\\).",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(2\\ln|3x-1|+C\\)",
      "\\(6\\ln|3x-1|+C\\)",
      "\\(\\dfrac{6}{3}\\ln|x|+C\\)",
      "\\(\\ln|3x-1|+C\\)"
    ],
    "hint": "Use standard derivatives and integrals of exponential and logarithmic functions.",
    "solution": "The correct answer is \\(2\\ln|3x-1|+C\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(\\displaystyle\\int\\dfrac{6}{3x-1}\\,dx\\). Strategy: recognise the form \\(\\displaystyle\\int\\dfrac{f'}{f}\\,dx = \\ln|f|+C\\), or substitute.",
        "workingOut": "\\(\\int\\dfrac{6}{3x-1}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Let \\(u = 3x-1\\), so \\(du = 3\\,dx\\) and \\(dx = \\dfrac{du}{3}\\). Then the integral becomes \\(\\displaystyle\\int\\dfrac{6}{u}\\cdot\\dfrac{du}{3} = 2\\int\\dfrac{1}{u}\\,du = 2\\ln|u|+C\\).",
        "workingOut": "\\(2\\ln|u|+C\\)",
        "graphData": null
      },
      {
        "explanation": "Back-substitute: \\(2\\ln|3x-1|+C\\). Check: derivative is \\(2\\cdot\\dfrac{3}{3x-1} = \\dfrac{6}{3x-1}\\).",
        "workingOut": "\\(2\\ln|3x-1|+C\\)",
        "graphData": null
      },
      {
        "explanation": "A common slip is writing \\(6\\ln|3x-1|\\) (forgetting to divide by the chain-rule factor 3).",
        "workingOut": "\\(2\\ln|3x-1|+C\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(2\\ln|3x-1|+C\\).",
        "workingOut": "\\(2\\ln|3x-1|+C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(2\\ln|3x-1|+C\\)",
        "imageUrl": null
      },
      {
        "text": "\\(6\\ln|3x-1|+C\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{6}{3}\\ln|x|+C\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\ln|3x-1|+C\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-5l-q11",
    "topicId": "y12a-5L",
    "c": "5L",
    "t": "Chapter 5 Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Find \\(\\displaystyle\\int\\dfrac{3x^{2}}{x^{3}+5}\\,dx\\).",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(\\ln|x^{3}+5|+C\\)",
      "\\(3\\ln|x^{3}+5|+C\\)",
      "\\(\\dfrac{3x^{2}}{x^{3}+5}+C\\)",
      "\\(\\ln|3x^{2}|+C\\)"
    ],
    "hint": "Use standard derivatives and integrals of exponential and logarithmic functions.",
    "solution": "The correct answer is \\(\\ln|x^{3}+5|+C\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(\\displaystyle\\int\\dfrac{3x^{2}}{x^{3}+5}\\,dx\\). Strategy: the numerator is (almost) the derivative of the denominator. Let \\(u = x^{3}+5\\).",
        "workingOut": "\\(u = x^{3}+5\\)",
        "graphData": null
      },
      {
        "explanation": "Then \\(u' = 3x^{2}\\), so \\(du = 3x^{2}\\,dx\\). The integral is exactly \\(\\displaystyle\\int\\dfrac{1}{u}\\,du = \\ln|u|+C\\).",
        "workingOut": "\\(\\ln|u|+C\\)",
        "graphData": null
      },
      {
        "explanation": "Back-substitute: \\(\\ln|x^{3}+5|+C\\). A common slip is inserting an extra factor of 3 in front of the log, or integrating numerator and denominator separately.",
        "workingOut": "\\(\\ln|x^{3}+5|+C\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\ln|x^{3}+5|+C\\).",
        "workingOut": "\\(\\ln|x^{3}+5|+C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(\\ln|x^{3}+5|+C\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3\\ln|x^{3}+5|+C\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{3x^{2}}{x^{3}+5}+C\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\ln|3x^{2}|+C\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-5l-q12",
    "topicId": "y12a-5L",
    "c": "5L",
    "t": "Chapter 5 Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Evaluate \\(\\displaystyle\\int_1^{4}\\dfrac{2}{x}\\,dx\\) exactly.",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(2\\ln 4\\)",
      "\\(\\ln 4\\)",
      "\\(2\\ln 3\\)",
      "\\(8\\)"
    ],
    "hint": "Use standard derivatives and integrals of exponential and logarithmic functions.",
    "solution": "The correct answer is \\(2\\ln 4\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(\\displaystyle\\int_1^{4}\\dfrac{2}{x}\\,dx\\). Strategy: write as \\(2\\displaystyle\\int_1^{4}\\dfrac{1}{x}\\,dx\\) and use the antiderivative \\(\\ln|x|\\).",
        "workingOut": "\\(2\\int_1^{4}\\dfrac{1}{x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative: \\(2\\ln|x|\\). Evaluate: \\([2\\ln x]_1^{4} = 2\\ln 4 - 2\\ln 1 = 2\\ln 4 - 0 = 2\\ln 4\\).",
        "workingOut": "\\(2\\ln 4\\)",
        "graphData": null
      },
      {
        "explanation": "Note that \\(2\\ln 4 = \\ln 16 = 4\\ln 2\\) (equivalent forms). A common slip is forgetting the factor 2, or writing \\(2\\ln 3\\) by using upper limit minus lower incorrectly.",
        "workingOut": "\\(2\\ln 4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(2\\ln 4\\).",
        "workingOut": "\\(2\\ln 4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(2\\ln 4\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\ln 4\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\ln 3\\)",
        "imageUrl": null
      },
      {
        "text": "\\(8\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-5l-q13",
    "topicId": "y12a-5L",
    "c": "5L",
    "t": "Chapter 5 Revision",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Evaluate \\(\\displaystyle\\int_1^{e}\\left(e^{x}+\\dfrac{1}{x}\\right)dx\\).",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(e^{e}-e+1\\)",
      "\\(e^{e}-e\\)",
      "\\(e^{e}+1\\)",
      "\\(e-1\\)"
    ],
    "hint": "Use standard derivatives and integrals of exponential and logarithmic functions.",
    "solution": "The correct answer is \\(e^{e}-e+1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(\\displaystyle\\int_1^{e}\\left(e^{x}+\\dfrac{1}{x}\\right)dx\\). Strategy: integrate term by term.",
        "workingOut": "\\(\\int_1^{e} e^{x}\\,dx + \\int_1^{e}\\dfrac{1}{x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative: \\(e^{x} + \\ln|x|\\). (Derivative of \\(e^{x}\\) is \\(e^{x}\\); derivative of \\(\\ln|x|\\) is \\(\\dfrac{1}{x}\\).)",
        "workingOut": "\\(e^{x} + \\ln|x|\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate at the limits: \\([e^{x} + \\ln x]_1^{e} = \\bigl(e^{e} + \\ln e\\bigr) - \\bigl(e^{1} + \\ln 1\\bigr)\\).",
        "workingOut": "\\((e^{e}+1) - (e+0)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify: \\(\\ln e = 1\\) and \\(\\ln 1 = 0\\), so the value is \\(e^{e} + 1 - e\\). A common slip is dropping the \\(+1\\) from \\(\\ln e\\).",
        "workingOut": "\\(e^{e} - e + 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(e^{e}-e+1\\).",
        "workingOut": "\\(e^{e}-e+1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(e^{e}-e+1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(e^{e}-e\\)",
        "imageUrl": null
      },
      {
        "text": "\\(e^{e}+1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(e-1\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-5l-q14",
    "topicId": "y12a-5L",
    "c": "5L",
    "t": "Chapter 5 Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Find the equation of the tangent to \\(y=e^{2x}\\) at the point where \\(x=0\\).",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(y=2x+1\\)",
      "\\(y=2x\\)",
      "\\(y=x+1\\)",
      "\\(y=e^{2}x+1\\)"
    ],
    "hint": "Use standard derivatives and integrals of exponential and logarithmic functions.",
    "solution": "The correct answer is \\(y=2x+1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: tangent to \\(y = e^{2x}\\) at the point where \\(x = 0\\). Strategy: find the point \\((x_0,y_0)\\) and the gradient \\(m = y'(x_0)\\), then use point–slope form.",
        "workingOut": "\\(y = e^{2x}\\)",
        "graphData": null
      },
      {
        "explanation": "At \\(x = 0\\): \\(y = e^{0} = 1\\). So the point of contact is \\((0,1)\\).",
        "workingOut": "\\(P(0,1)\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate: \\(y' = 2e^{2x}\\) (chain rule). At \\(x = 0\\): \\(m = 2e^{0} = 2\\).",
        "workingOut": "\\(m = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Point–slope: \\(y - 1 = 2(x - 0)\\Rightarrow y = 2x + 1\\). A common slip is using gradient 1, or writing the tangent through the origin.",
        "workingOut": "\\(y = 2x + 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(y = 2x + 1\\).",
        "workingOut": "\\(y = 2x + 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(y=2x+1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(y=2x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(y=x+1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(y=e^{2}x+1\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-5l-q15",
    "topicId": "y12a-5L",
    "c": "5L",
    "t": "Chapter 5 Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Find the equation of the tangent to \\(y=\\ln x\\) at \\(x=1\\).",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(y=x-1\\)",
      "\\(y=x\\)",
      "\\(y=x+1\\)",
      "\\(y=\\dfrac{1}{x}\\)"
    ],
    "hint": "Use standard derivatives and integrals of exponential and logarithmic functions.",
    "solution": "The correct answer is \\(y=x-1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: tangent to \\(y = \\ln x\\) at \\(x = 1\\). Strategy: find the point and the gradient, then write the tangent line.",
        "workingOut": "\\(y = \\ln x\\)",
        "graphData": null
      },
      {
        "explanation": "At \\(x = 1\\): \\(y = \\ln 1 = 0\\). Point of contact: \\((1,0)\\).",
        "workingOut": "\\(P(1,0)\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate: \\(y' = \\dfrac{1}{x}\\). At \\(x = 1\\): \\(m = 1\\).",
        "workingOut": "\\(m = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Point–slope: \\(y - 0 = 1(x - 1)\\Rightarrow y = x - 1\\). A common slip is writing \\(y = x\\) (forgetting it must pass through \\((1,0)\\)).",
        "workingOut": "\\(y = x - 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(y = x - 1\\).",
        "workingOut": "\\(y = x - 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(y=x-1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(y=x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(y=x+1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(y=\\dfrac{1}{x}\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-5l-q16",
    "topicId": "y12a-5L",
    "c": "5L",
    "t": "Chapter 5 Revision",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the stationary point of \\(y = x e^{-x}\\) and determine its nature.",
    "a": 0,
    "answer": "0",
    "opts": [
      "Maximum at \\(\\left(1,\\,\\dfrac{1}{e}\\right)\\)",
      "Minimum at \\(\\left(1,\\,\\dfrac{1}{e}\\right)\\)",
      "Maximum at \\((0,\\,0)\\)",
      "Maximum at \\((e,\\,1)\\)"
    ],
    "hint": "Differentiate using the product rule. Set \\(y' = 0\\) to find the stationary point, then use the first-derivative sign test (or second derivative) to decide max/min.",
    "solution": "Using the product rule, \\(y' = e^{-x}(1 - x)\\). Stationary when \\(x = 1\\), and \\(y(1) = \\dfrac{1}{e}\\). Sign change of \\(y'\\) from positive to negative shows a maximum at \\(\\left(1,\\,\\dfrac{1}{e}\\right)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = x e^{-x}\\). Strategy: product rule with \\(u = x\\) and \\(v = e^{-x}\\). Why product rule? The expression is a product of a polynomial factor and an exponential factor.",
        "workingOut": "\\(y = x e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate: \\(u' = 1\\) and \\(v' = -e^{-x}\\). Then \\(y' = u'v + uv' = 1\\cdot e^{-x} + x(-e^{-x}) = e^{-x} - x e^{-x}\\). Factor: \\(y' = e^{-x}(1 - x)\\).",
        "workingOut": "\\(y' = e^{-x}(1 - x)\\)",
        "graphData": null
      },
      {
        "explanation": "Stationary points occur where \\(y' = 0\\). Since \\(e^{-x} \\neq 0\\) for all real \\(x\\), we need \\(1 - x = 0\\), so \\(x = 1\\). A common mistake is also treating \\(e^{-x} = 0\\) as a solution (it never is).",
        "workingOut": "\\(x = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Find the corresponding \\(y\\)-value: \\(y(1) = 1\\cdot e^{-1} = \\dfrac{1}{e}\\). So the only stationary point is \\(\\left(1,\\,\\dfrac{1}{e}\\right)\\).",
        "workingOut": "\\(\\left(1,\\,\\dfrac{1}{e}\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Nature (first-derivative test): for \\(x < 1\\) (near 1), \\(1 - x > 0\\) and \\(e^{-x} > 0\\), so \\(y' > 0\\) (increasing). For \\(x > 1\\), \\(1 - x < 0\\), so \\(y' < 0\\) (decreasing). Therefore the stationary point is a local maximum.",
        "workingOut": "\\(y' > 0\\ (x<1),\\quad y' < 0\\ (x>1)\\)",
        "graphData": null
      },
      {
        "explanation": "Alternatively, second derivative: expand \\(y' = e^{-x} - x e^{-x}\\). Then \\(y'' = -e^{-x} - (e^{-x} - x e^{-x}) = -2e^{-x} + x e^{-x} = e^{-x}(x - 2)\\). At \\(x = 1\\): \\(y''(1) = e^{-1}(1-2) = -\\dfrac{1}{e} < 0\\), confirming a maximum.",
        "workingOut": "\\(y''(1) = -\\dfrac{1}{e} < 0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: maximum at \\(\\left(1,\\,\\dfrac{1}{e}\\right)\\). Why this step? It isolates one clear calculation so the next step stays exact. A common slip is a sign error or forgetting the product-rule second term.",
        "workingOut": "\\(\\text{Maximum at }\\left(1,\\,\\dfrac{1}{e}\\right)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "Maximum at \\(\\left(1,\\,\\dfrac{1}{e}\\right)\\)",
        "imageUrl": null
      },
      {
        "text": "Minimum at \\(\\left(1,\\,\\dfrac{1}{e}\\right)\\)",
        "imageUrl": null
      },
      {
        "text": "Maximum at \\((0,\\,0)\\)",
        "imageUrl": null
      },
      {
        "text": "Maximum at \\((e,\\,1)\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-5l-q17",
    "topicId": "y12a-5L",
    "c": "5L",
    "t": "Chapter 5 Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Find the area bounded by \\(y=e^{x}\\), the \\(x\\)-axis, \\(x=0\\) and \\(x=2\\).",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(e^{2}-1\\)",
      "\\(e^{2}\\)",
      "\\(e^{2}+1\\)",
      "\\(2e\\)"
    ],
    "hint": "Use standard derivatives and integrals of exponential and logarithmic functions.",
    "solution": "The correct answer is \\(e^{2}-1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: area under \\(y = e^{x}\\) from \\(x = 0\\) to \\(x = 2\\) (above the \\(x\\)-axis). Strategy: definite integral of a positive continuous function.",
        "workingOut": "\\(A = \\displaystyle\\int_0^{2} e^{x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative of \\(e^{x}\\) is \\(e^{x}\\). Evaluate: \\([e^{x}]_0^{2} = e^{2} - e^{0} = e^{2} - 1\\).",
        "workingOut": "\\(e^{2} - 1\\)",
        "graphData": null
      },
      {
        "explanation": "A common slip is writing only \\(e^{2}\\) (forgetting to subtract the lower-limit value 1), or adding 1 instead of subtracting.",
        "workingOut": "\\(e^{2} - 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(e^{2}-1\\).",
        "workingOut": "\\(e^{2}-1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(e^{2}-1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(e^{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(e^{2}+1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2e\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-5l-q18",
    "topicId": "y12a-5L",
    "c": "5L",
    "t": "Chapter 5 Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Find the area bounded by \\(y=\\dfrac{2}{x}\\), the \\(x\\)-axis, \\(x=1\\) and \\(x=3\\).",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(2\\ln 3\\)",
      "\\(\\ln 3\\)",
      "\\(2\\ln 2\\)",
      "\\(6\\)"
    ],
    "hint": "Use standard derivatives and integrals of exponential and logarithmic functions.",
    "solution": "The correct answer is \\(2\\ln 3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: area under \\(y = \\dfrac{2}{x}\\) from \\(x = 1\\) to \\(x = 3\\). On \\([1,3]\\) we have \\(y > 0\\), so the area is the definite integral.",
        "workingOut": "\\(A = \\displaystyle\\int_1^{3}\\dfrac{2}{x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative: \\(2\\ln|x|\\). Evaluate: \\([2\\ln x]_1^{3} = 2\\ln 3 - 2\\ln 1 = 2\\ln 3\\).",
        "workingOut": "\\(2\\ln 3\\)",
        "graphData": null
      },
      {
        "explanation": "A common slip is dropping the factor 2, or evaluating \\(2(\\ln 3 - \\ln 1)\\) incorrectly as \\(2\\ln 2\\).",
        "workingOut": "\\(2\\ln 3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(2\\ln 3\\).",
        "workingOut": "\\(2\\ln 3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(2\\ln 3\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\ln 3\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\ln 2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(6\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-5l-q19",
    "topicId": "y12a-5L",
    "c": "5L",
    "t": "Chapter 5 Revision",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the area enclosed between \\(y=e^{x}\\) and \\(y=e^{-x}\\) from \\(x=-1\\) to \\(x=1\\).",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(2e+\\dfrac{2}{e}-4\\)",
      "\\(2e-\\dfrac{2}{e}\\)",
      "\\(e-\\dfrac{1}{e}\\)",
      "\\(2e+\\dfrac{2}{e}\\)"
    ],
    "hint": "Use standard derivatives and integrals of exponential and logarithmic functions.",
    "solution": "The correct answer is \\(2e+\\dfrac{2}{e}-4\\).",
    "solutionSteps": [
      {
        "explanation": "Given: area enclosed between \\(y = e^{x}\\) and \\(y = e^{-x}\\) from \\(x = -1\\) to \\(x = 1\\). Strategy: integrate the absolute difference of the two curves.",
        "workingOut": "\\(A = \\displaystyle\\int_{-1}^{1}\\bigl|e^{x}-e^{-x}\\bigr|\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "For \\(x \\ge 0\\), \\(e^{x} \\ge e^{-x}\\); for \\(x \\le 0\\), \\(e^{-x} \\ge e^{x}\\). The integrand is even (\\(|e^{x}-e^{-x}| = |e^{-x}-e^{x}|\\)), so \\(A = 2\\displaystyle\\int_0^{1}(e^{x}-e^{-x})\\,dx\\).",
        "workingOut": "\\(A = 2\\int_0^{1}(e^{x}-e^{-x})\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative of \\(e^{x}-e^{-x}\\) is \\(e^{x}+e^{-x}\\). Evaluate: \\([e^{x}+e^{-x}]_0^{1} = \\bigl(e+e^{-1}\\bigr) - \\bigl(1+1\\bigr) = e + \\dfrac{1}{e} - 2\\).",
        "workingOut": "\\(e + \\dfrac{1}{e} - 2\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply by 2: \\(A = 2\\left(e + \\dfrac{1}{e} - 2\\right) = 2e + \\dfrac{2}{e} - 4\\). A common slip is forgetting the lower-limit contribution of 2, or the outer factor of 2.",
        "workingOut": "\\(2e + \\dfrac{2}{e} - 4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(2e+\\dfrac{2}{e}-4\\).",
        "workingOut": "\\(2e+\\dfrac{2}{e}-4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(2e+\\dfrac{2}{e}-4\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2e-\\dfrac{2}{e}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(e-\\dfrac{1}{e}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2e+\\dfrac{2}{e}\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-5l-q20",
    "topicId": "y12a-5L",
    "c": "5L",
    "t": "Chapter 5 Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Differentiate \\(y=3^{x}\\).",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(3^{x}\\ln 3\\)",
      "\\(3^{x}\\)",
      "\\(x3^{x-1}\\)",
      "\\(\\dfrac{3^{x}}{\\ln 3}\\)"
    ],
    "hint": "Use standard derivatives and integrals of exponential and logarithmic functions.",
    "solution": "The correct answer is \\(3^{x}\\ln 3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = 3^{x}\\). Strategy: rewrite as a natural exponential, or use the standard rule \\(\\dfrac{d}{dx}a^{x} = a^{x}\\ln a\\).",
        "workingOut": "\\(y = 3^{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Write \\(3^{x} = e^{x\\ln 3}\\). Chain rule: \\(y' = e^{x\\ln 3}\\cdot\\ln 3 = 3^{x}\\ln 3\\).",
        "workingOut": "\\(y' = 3^{x}\\ln 3\\)",
        "graphData": null
      },
      {
        "explanation": "A common slip is treating it like a power rule (\\(x\\,3^{x-1}\\)), which applies only when the base is the variable and the exponent is constant.",
        "workingOut": "\\(3^{x}\\ln 3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(3^{x}\\ln 3\\).",
        "workingOut": "\\(3^{x}\\ln 3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(3^{x}\\ln 3\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3^{x}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(x3^{x-1}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{3^{x}}{\\ln 3}\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-5l-q21",
    "topicId": "y12a-5L",
    "c": "5L",
    "t": "Chapter 5 Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Find \\(\\displaystyle\\int 2^{x}\\,dx\\).",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(\\dfrac{2^{x}}{\\ln 2}+C\\)",
      "\\(2^{x}\\ln 2+C\\)",
      "\\(\\dfrac{2^{x}}{2}+C\\)",
      "\\(x2^{x-1}+C\\)"
    ],
    "hint": "Use standard derivatives and integrals of exponential and logarithmic functions.",
    "solution": "The correct answer is \\(\\dfrac{2^{x}}{\\ln 2}+C\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(\\displaystyle\\int 2^{x}\\,dx\\). Strategy: use \\(\\displaystyle\\int a^{x}\\,dx = \\dfrac{a^{x}}{\\ln a}+C\\) for \\(a > 0\\), \\(a \\neq 1\\).",
        "workingOut": "\\(\\int 2^{x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "With \\(a = 2\\): \\(\\dfrac{2^{x}}{\\ln 2}+C\\). Check by differentiating: derivative of \\(\\dfrac{2^{x}}{\\ln 2}\\) is \\(\\dfrac{2^{x}\\ln 2}{\\ln 2} = 2^{x}\\).",
        "workingOut": "\\(\\dfrac{2^{x}}{\\ln 2}+C\\)",
        "graphData": null
      },
      {
        "explanation": "A common slip is multiplying by \\(\\ln 2\\) instead of dividing, or using the power-rule antiderivative.",
        "workingOut": "\\(\\dfrac{2^{x}}{\\ln 2}+C\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{2^{x}}{\\ln 2}+C\\).",
        "workingOut": "\\(\\dfrac{2^{x}}{\\ln 2}+C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(\\dfrac{2^{x}}{\\ln 2}+C\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2^{x}\\ln 2+C\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{2^{x}}{2}+C\\)",
        "imageUrl": null
      },
      {
        "text": "\\(x2^{x-1}+C\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-5l-q22",
    "topicId": "y12a-5L",
    "c": "5L",
    "t": "Chapter 5 Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Use change of base to evaluate \\(\\log_3 20\\) correct to four significant figures.",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(\\approx 2.727\\)",
      "\\(\\approx 1.301\\)",
      "\\(\\approx 2.996\\)",
      "\\(\\approx 0.367\\)"
    ],
    "hint": "Use standard derivatives and integrals of exponential and logarithmic functions.",
    "solution": "The correct answer is \\(\\approx 2.727\\).",
    "solutionSteps": [
      {
        "explanation": "Given: evaluate \\(\\log_3 20\\) to four significant figures. Strategy: change-of-base formula \\(\\log_b a = \\dfrac{\\ln a}{\\ln b}\\) (or common logs).",
        "workingOut": "\\(\\log_3 20 = \\dfrac{\\ln 20}{\\ln 3}\\)",
        "graphData": null
      },
      {
        "explanation": "Using a calculator: \\(\\ln 20 \\approx 2.995732\\) and \\(\\ln 3 \\approx 1.098612\\). Divide: \\(\\dfrac{2.995732}{1.098612} \\approx 2.72683\\).",
        "workingOut": "\\(\\approx 2.72683\\)",
        "graphData": null
      },
      {
        "explanation": "To four significant figures: \\(2.727\\). A common slip is computing \\(\\dfrac{\\ln 3}{\\ln 20}\\) (reciprocal), or reporting too few/many digits.",
        "workingOut": "\\(\\approx 2.727\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\approx 2.727\\).",
        "workingOut": "\\(\\approx 2.727\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(\\approx 2.727\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\approx 1.301\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\approx 2.996\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\approx 0.367\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-5l-q23",
    "topicId": "y12a-5L",
    "c": "5L",
    "t": "Chapter 5 Revision",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the \\(x\\)-coordinate of the point on \\(y=\\ln x\\) where the normal has gradient \\(-3\\).",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(x=3\\)",
      "\\(x=\\dfrac{1}{3}\\)",
      "\\(x=1\\)",
      "\\(x=-3\\)"
    ],
    "hint": "Use standard derivatives and integrals of exponential and logarithmic functions.",
    "solution": "The correct answer is \\(x=3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: on \\(y = \\ln x\\), the normal has gradient \\(-3\\). Strategy: relate normal gradient to the tangent gradient, then solve for \\(x\\).",
        "workingOut": "\\(y = \\ln x\\)",
        "graphData": null
      },
      {
        "explanation": "If the normal has gradient \\(-3\\), the tangent (perpendicular) has gradient \\(m_t\\) satisfying \\(m_t\\cdot(-3) = -1\\), so \\(m_t = \\dfrac{1}{3}\\).",
        "workingOut": "\\(m_t = \\dfrac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "But \\(y' = \\dfrac{1}{x}\\), so at the required point \\(\\dfrac{1}{x} = \\dfrac{1}{3}\\Rightarrow x = 3\\) (and \\(x > 0\\) for \\(\\ln x\\)).",
        "workingOut": "\\(x = 3\\)",
        "graphData": null
      },
      {
        "explanation": "A common slip is setting the tangent gradient equal to \\(-3\\) instead of the normal, which would give the wrong equation \\(\\dfrac{1}{x} = -3\\).",
        "workingOut": "\\(x = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(x = 3\\).",
        "workingOut": "\\(x = 3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(x=3\\)",
        "imageUrl": null
      },
      {
        "text": "\\(x=\\dfrac{1}{3}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(x=1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(x=-3\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-5l-q24",
    "topicId": "y12a-5L",
    "c": "5L",
    "t": "Chapter 5 Revision",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Evaluate \\(\\displaystyle\\int_0^{1} x e^{x^{2}}\\,dx\\).",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(\\dfrac{e-1}{2}\\)",
      "\\(e-1\\)",
      "\\(\\dfrac{e}{2}\\)",
      "\\(e^{2}-1\\)"
    ],
    "hint": "Use standard derivatives and integrals of exponential and logarithmic functions.",
    "solution": "The correct answer is \\(\\dfrac{e-1}{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(\\displaystyle\\int_0^{1} x e^{x^{2}}\\,dx\\). Strategy: substitution. The exponent's derivative is proportional to the factor \\(x\\) in front.",
        "workingOut": "\\(\\int_0^{1} x e^{x^{2}}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Let \\(u = x^{2}\\). Then \\(du = 2x\\,dx\\), so \\(x\\,dx = \\dfrac{1}{2}\\,du\\). Limits: \\(x = 0\\Rightarrow u = 0\\); \\(x = 1\\Rightarrow u = 1\\).",
        "workingOut": "\\(u = x^{2},\\quad x\\,dx = \\dfrac{1}{2}\\,du\\)",
        "graphData": null
      },
      {
        "explanation": "Integral becomes \\(\\displaystyle\\int_0^{1} e^{u}\\cdot\\dfrac{1}{2}\\,du = \\dfrac{1}{2}[e^{u}]_0^{1} = \\dfrac{1}{2}(e - 1) = \\dfrac{e-1}{2}\\).",
        "workingOut": "\\(\\dfrac{e-1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "A common slip is forgetting the factor \\(\\dfrac{1}{2}\\) from \\(du = 2x\\,dx\\).",
        "workingOut": "\\(\\dfrac{e-1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{e-1}{2}\\).",
        "workingOut": "\\(\\dfrac{e-1}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(\\dfrac{e-1}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(e-1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{e}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(e^{2}-1\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-5l-q26",
    "topicId": "y12a-5L",
    "c": "5L",
    "t": "Chapter 5 Revision",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the exact area between \\(y=\\dfrac{2x}{x^{2}+1}\\) and the \\(x\\)-axis from \\(x=0\\) to \\(x=2\\).",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(\\ln 5\\)",
      "\\(\\ln 4\\)",
      "\\(2\\ln 5\\)",
      "\\(\\dfrac{1}{2}\\ln 5\\)"
    ],
    "hint": "Use standard derivatives and integrals of exponential and logarithmic functions.",
    "solution": "The correct answer is \\(\\ln 5\\).",
    "solutionSteps": [
      {
        "explanation": "Given: area under \\(y = \\dfrac{2x}{x^{2}+1}\\) from \\(x = 0\\) to \\(x = 2\\). Strategy: substitution matching the derivative of the denominator.",
        "workingOut": "\\(A = \\displaystyle\\int_0^{2}\\dfrac{2x}{x^{2}+1}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Let \\(u = x^{2}+1\\). Then \\(du = 2x\\,dx\\). Limits: \\(x = 0\\Rightarrow u = 1\\); \\(x = 2\\Rightarrow u = 5\\).",
        "workingOut": "\\(u = x^{2}+1,\\quad du = 2x\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Integral: \\(\\displaystyle\\int_1^{5}\\dfrac{1}{u}\\,du = [\\ln|u|]_1^{5} = \\ln 5 - \\ln 1 = \\ln 5\\).",
        "workingOut": "\\(\\ln 5\\)",
        "graphData": null
      },
      {
        "explanation": "A common slip is writing \\(2\\ln 5\\) (extra factor of 2) or using upper limit \\(u = 4\\) instead of 5.",
        "workingOut": "\\(\\ln 5\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\ln 5\\).",
        "workingOut": "\\(\\ln 5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(\\ln 5\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\ln 4\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\ln 5\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{1}{2}\\ln 5\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-5l-q27",
    "topicId": "y12a-5L",
    "c": "5L",
    "t": "Chapter 5 Revision",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 150,
    "question": "Given \\(f(x)=e^{x}-ex\\), which argument correctly shows \\(f(x)\\ge 0\\) for all real \\(x\\), with equality only at \\(x=1\\)?",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(f'(x)=e^{x}-e=0\\) only at \\(x=1\\); \\(f''(1)=e>0\\) so a minimum; \\(f(1)=0\\); hence \\(f\\ge 0\\)",
      "\\(f'(x)=0\\) at \\(x=0\\) and \\(f(0)=1>0\\)",
      "\\(f(x)=e^{x}(1-x)\\) which is always positive",
      "\\(f''(x)<0\\) everywhere so the graph is always above the axis"
    ],
    "hint": "Use standard derivatives and integrals of exponential and logarithmic functions.",
    "solution": "The correct answer is \\(f'(x)=e^{x}-e=0\\) only at \\(x=1\\); \\(f''(1)=e>0\\) so a minimum; \\(f(1)=0\\); hence \\(f\\ge 0\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(f(x) = e^{x} - ex\\). Goal: show \\(f(x)\\ge 0\\) for all real \\(x\\), with equality only at \\(x = 1\\). Strategy: analyse critical points of \\(f\\).",
        "workingOut": "\\(f(x) = e^{x} - ex\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate: \\(f'(x) = e^{x} - e\\). Set \\(f'(x) = 0\\): \\(e^{x} = e\\Rightarrow x = 1\\) (only solution, since the exponential is one-to-one).",
        "workingOut": "\\(f'(x) = 0 \\Rightarrow x = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Second derivative: \\(f''(x) = e^{x}\\). At \\(x = 1\\): \\(f''(1) = e > 0\\), so \\(x = 1\\) is a local minimum. Also \\(f(1) = e - e\\cdot 1 = 0\\).",
        "workingOut": "\\(f''(1) = e > 0,\\quad f(1) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Since this is the only critical point and it is a global minimum (\\(f'' > 0\\) and \\(f'\\) changes from negative to positive), we have \\(f(x)\\ge f(1) = 0\\) for all real \\(x\\), with equality only at \\(x = 1\\).",
        "workingOut": "\\(f(x)\\ge 0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: the argument that uses \\(f'(x)=0\\) only at \\(x=1\\), \\(f''(1)=e>0\\), and \\(f(1)=0\\).",
        "workingOut": "\\(f\\ge 0\\text{ with equality only at }x=1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(f'(x)=e^{x}-e=0\\) only at \\(x=1\\); \\(f''(1)=e>0\\) so a minimum; \\(f(1)=0\\); hence \\(f\\ge 0\\)",
        "imageUrl": null
      },
      {
        "text": "\\(f'(x)=0\\) at \\(x=0\\) and \\(f(0)=1>0\\)",
        "imageUrl": null
      },
      {
        "text": "\\(f(x)=e^{x}(1-x)\\) which is always positive",
        "imageUrl": null
      },
      {
        "text": "\\(f''(x)<0\\) everywhere so the graph is always above the axis",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-5l-q28",
    "topicId": "y12a-5L",
    "c": "5L",
    "t": "Chapter 5 Revision",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Evaluate \\(\\displaystyle\\int_1^{e}\\dfrac{(\\ln x)^{2}}{x}\\,dx\\).",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(\\dfrac{1}{3}\\)",
      "\\(1\\)",
      "\\(\\dfrac{1}{2}\\)",
      "\\(e\\)"
    ],
    "hint": "Use standard derivatives and integrals of exponential and logarithmic functions.",
    "solution": "The correct answer is \\(\\dfrac{1}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(\\displaystyle\\int_1^{e}\\dfrac{(\\ln x)^{2}}{x}\\,dx\\). Strategy: substitution with \\(u = \\ln x\\).",
        "workingOut": "\\(\\int_1^{e}\\dfrac{(\\ln x)^{2}}{x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Let \\(u = \\ln x\\). Then \\(du = \\dfrac{1}{x}\\,dx\\). Limits: \\(x = 1\\Rightarrow u = 0\\); \\(x = e\\Rightarrow u = 1\\).",
        "workingOut": "\\(u = \\ln x,\\quad du = \\dfrac{1}{x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Integral becomes \\(\\displaystyle\\int_0^{1} u^{2}\\,du = \\left[\\dfrac{u^{3}}{3}\\right]_0^{1} = \\dfrac{1}{3} - 0 = \\dfrac{1}{3}\\).",
        "workingOut": "\\(\\dfrac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "A common slip is integrating \\((\\ln x)^{2}\\) without the substitution factor, or getting \\(\\dfrac{1}{2}\\) from a wrong power rule.",
        "workingOut": "\\(\\dfrac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{1}{3}\\).",
        "workingOut": "\\(\\dfrac{1}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(\\dfrac{1}{3}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{1}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(e\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-5l-q29",
    "topicId": "y12a-5L",
    "c": "5L",
    "t": "Chapter 5 Revision",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 150,
    "question": "Find the area of the region bounded by \\(y=e^{x}\\), \\(y=e^{-x}\\) and \\(x=2\\) in the first quadrant.",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(e^{2}+e^{-2}-2\\)",
      "\\(e^{2}-e^{-2}-2\\)",
      "\\(e^{2}-2\\)",
      "\\(e^{2}+e^{-2}\\)"
    ],
    "hint": "Use standard derivatives and integrals of exponential and logarithmic functions.",
    "solution": "The correct answer is \\(e^{2}+e^{-2}-2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: region bounded by \\(y = e^{x}\\), \\(y = e^{-x}\\) and \\(x = 2\\) in the first quadrant. The curves meet when \\(e^{x} = e^{-x}\\Rightarrow x = 0\\). From \\(x = 0\\) to \\(x = 2\\), \\(e^{x}\\ge e^{-x}\\).",
        "workingOut": "\\(A = \\displaystyle\\int_0^{2}\\bigl(e^{x}-e^{-x}\\bigr)\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative: \\(e^{x}+e^{-x}\\). Evaluate: \\([e^{x}+e^{-x}]_0^{2} = \\bigl(e^{2}+e^{-2}\\bigr) - \\bigl(e^{0}+e^{0}\\bigr) = e^{2}+e^{-2}-2\\).",
        "workingOut": "\\(e^{2}+e^{-2}-2\\)",
        "graphData": null
      },
      {
        "explanation": "A common slip is the sign on the lower limit (writing \\(-2\\) as something else), or integrating only one of the two curves.",
        "workingOut": "\\(e^{2}+e^{-2}-2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(e^{2}+e^{-2}-2\\).",
        "workingOut": "\\(e^{2}+e^{-2}-2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(e^{2}+e^{-2}-2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(e^{2}-e^{-2}-2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(e^{2}-2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(e^{2}+e^{-2}\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-5l-q30",
    "topicId": "y12a-5L",
    "c": "5L",
    "t": "Chapter 5 Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "If \\(y=\\ln(\\sin x)\\), find \\(\\dfrac{dy}{dx}\\).",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(\\cot x\\)",
      "\\(\\tan x\\)",
      "\\(\\dfrac{1}{\\sin x}\\)",
      "\\(-\\cot x\\)"
    ],
    "hint": "Use standard derivatives and integrals of exponential and logarithmic functions.",
    "solution": "The correct answer is \\(\\cot x\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = \\ln(\\sin x)\\). Strategy: chain rule for \\(\\ln u\\) with \\(u = \\sin x\\) (where \\(\\sin x > 0\\) in the intended domain).",
        "workingOut": "\\(u = \\sin x\\)",
        "graphData": null
      },
      {
        "explanation": "Then \\(y' = \\dfrac{1}{u}\\cdot u' = \\dfrac{1}{\\sin x}\\cdot\\cos x = \\dfrac{\\cos x}{\\sin x} = \\cot x\\).",
        "workingOut": "\\(y' = \\cot x\\)",
        "graphData": null
      },
      {
        "explanation": "A common slip is writing \\(\\dfrac{1}{\\sin x}\\) (forgetting to multiply by \\(\\cos x\\)), or getting \\(\\tan x\\) by inverting incorrectly.",
        "workingOut": "\\(\\cot x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\cot x\\).",
        "workingOut": "\\(\\cot x\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(\\cot x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\tan x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{1}{\\sin x}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-\\cot x\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-5l-q25",
    "topicId": "y12a-5L",
    "c": "5L",
    "t": "Chapter 5 Revision",
    "type": "multi_part",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Consider the function \\(y=\\ln x - x + 2\\).",
    "answer": "",
    "hint": "Work through the parts in order.",
    "solution": "",
    "solutionSteps": [],
    "subQuestions": [
      {
        "id": "y12a-5l-q25a",
        "type": "multiple_choice",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "Find the coordinates of the stationary point of \\(y=\\ln x - x + 2\\).",
        "opts": [
          "\\((1,\\ 1)\\)",
          "\\((1,\\ 2)\\)",
          "\\((e,\\ 1)\\)",
          "\\((1,\\ 0)\\)"
        ],
        "a": 0,
        "answer": "0",
        "hint": "Use standard derivatives and integrals of exponential and logarithmic functions.",
        "solution": "The correct answer is \\((1,\\ 1)\\).",
        "solutionSteps": [
          {
            "explanation": "Given: \\(y = \\ln x - x + 2\\) (domain \\(x > 0\\)). Strategy: find stationary points by setting \\(y' = 0\\).",
            "workingOut": "\\(y = \\ln x - x + 2\\)",
            "graphData": null
          },
          {
            "explanation": "Differentiate: \\(y' = \\dfrac{1}{x} - 1\\). Set \\(y' = 0\\): \\(\\dfrac{1}{x} - 1 = 0\\Rightarrow \\dfrac{1}{x} = 1\\Rightarrow x = 1\\).",
            "workingOut": "\\(x = 1\\)",
            "graphData": null
          },
          {
            "explanation": "Corresponding \\(y\\)-value: \\(y(1) = \\ln 1 - 1 + 2 = 0 - 1 + 2 = 1\\). So the stationary point is \\((1,1)\\).",
            "workingOut": "\\((1,\\ 1)\\)",
            "graphData": null
          },
          {
            "explanation": "A common slip is computing \\(y(1) = 2\\) (forgetting \\(-x\\)), or solving \\(\\dfrac{1}{x}-1=0\\) incorrectly.",
            "workingOut": "\\((1,\\ 1)\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: \\((1,\\ 1)\\).",
            "workingOut": "\\((1,\\ 1)\\)",
            "graphData": null
          }
        ],
        "graphData": null,
        "requiresManualGrading": false,
        "options": [
          {
            "text": "\\((1,\\ 1)\\)",
            "imageUrl": null
          },
          {
            "text": "\\((1,\\ 2)\\)",
            "imageUrl": null
          },
          {
            "text": "\\((e,\\ 1)\\)",
            "imageUrl": null
          },
          {
            "text": "\\((1,\\ 0)\\)",
            "imageUrl": null
          }
        ]
      },
      {
        "id": "y12a-5l-q25b",
        "type": "multiple_choice",
        "difficulty": "easy",
        "timeLimit": 120,
        "question": "Determine the nature of the stationary point of \\(y=\\ln x - x + 2\\).",
        "opts": [
          "Maximum (since \\(y''=-\\dfrac{1}{x^{2}}<0\\) for all \\(x>0\\))",
          "Minimum (since \\(y''>0\\))",
          "Point of inflection",
          "Neither max nor min"
        ],
        "a": 0,
        "answer": "0",
        "hint": "Use standard derivatives and integrals of exponential and logarithmic functions.",
        "solution": "The correct answer is Maximum (since \\(y''=-\\dfrac{1}{x^{2}}<0\\) for all \\(x>0\\)).",
        "solutionSteps": [
          {
            "explanation": "Given the stationary point of \\(y = \\ln x - x + 2\\) at \\(x = 1\\). Strategy: second-derivative test (or first-derivative sign chart).",
            "workingOut": "\\(y' = \\dfrac{1}{x} - 1\\)",
            "graphData": null
          },
          {
            "explanation": "Differentiate again: \\(y'' = -\\dfrac{1}{x^{2}}\\). For all \\(x > 0\\), \\(y'' < 0\\).",
            "workingOut": "\\(y'' = -\\dfrac{1}{x^{2}} < 0\\)",
            "graphData": null
          },
          {
            "explanation": "In particular at \\(x = 1\\): \\(y''(1) = -1 < 0\\), so the stationary point is a local maximum. (First-derivative test: \\(y' > 0\\) for \\(0 < x < 1\\) and \\(y' < 0\\) for \\(x > 1\\), same conclusion.)",
            "workingOut": "\\(\\text{Maximum}\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: Maximum (since \\(y''=-\\dfrac{1}{x^{2}}<0\\) for all \\(x>0\\)).",
            "workingOut": "\\(\\text{Maximum}\\)",
            "graphData": null
          }
        ],
        "graphData": null,
        "requiresManualGrading": false,
        "options": [
          {
            "text": "Maximum (since \\(y''=-\\dfrac{1}{x^{2}}<0\\) for all \\(x>0\\))",
            "imageUrl": null
          },
          {
            "text": "Minimum (since \\(y''>0\\))",
            "imageUrl": null
          },
          {
            "text": "Point of inflection",
            "imageUrl": null
          },
          {
            "text": "Neither max nor min",
            "imageUrl": null
          }
        ]
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  }
];

export default Y12A_CH5L_QUESTIONS;
