export const Y12A_CH6B_QUESTIONS = [
  {
    "id": "y12a-6b-q11a",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Differentiate: \\( f(x) = e^{\\tan x} \\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "3",
    "origin": "seed",
    "isActive": true,
    "title": "Differentiate:  f(x) = e^{\\tan x} ...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "isNew": false,
    "a": 3,
    "opts": [
      "\\(e^{\\sin x} \\sec^2 x\\)",
      "\\(e^{\\tan x+1} \\sec^2 x\\)",
      "\\(e^{\\tan x} \\sec x\\)",
      "\\(e^{\\tan x} \\sec^2 x\\)"
    ],
    "options": [
      {
        "text": "\\(e^{\\sin x} \\sec^2 x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(e^{\\tan x+1} \\sec^2 x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(e^{\\tan x} \\sec x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(e^{\\tan x} \\sec^2 x\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(f(x) = e^{\\tan x}\\). Composition: exponential outside, tangent inside. Use the chain rule.",
        "workingOut": "\\(f(x) = e^{\\tan x}\\)",
        "graphData": null
      },
      {
        "explanation": "Write \\(f = e^{u}\\) with \\(u = \\tan x\\). Then \\(f' = e^{u}\\,u' = e^{\\tan x}\\,u'\\).",
        "workingOut": "\\(f' = e^{\\tan x}\\,u',\\quad u = \\tan x\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate the inside: \\(u' = \\sec^{2}x\\) (standard form).",
        "workingOut": "\\(u' = \\sec^{2}x\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(f'(x) = e^{\\tan x}\\sec^{2}x\\). A common slip is writing \\(\\sec x\\) instead of \\(\\sec^{2}x\\), or forgetting to multiply by the exponential factor.",
        "workingOut": "\\(f'(x) = e^{\\tan x}\\sec^{2}x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(e^{\\tan x}\\sec^{2}x\\).",
        "workingOut": "\\(e^{\\tan x}\\sec^{2}x\\)",
        "graphData": null
      }
    ],
    "solution": "The correct answer is \\(e^{\\tan x}\\sec^{2}x\\).",
    "hint": "Chain rule: \\(\\dfrac{d}{dx}e^{\\tan x} = e^{\\tan x}\\cdot\\sec^{2}x\\)."
  },
  {
    "id": "y12a-6b-q11b",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Differentiate: \\( f(x) = e^{\\sin 2x} \\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "2",
    "origin": "seed",
    "isActive": true,
    "title": "Differentiate:  f(x) = e^{\\sin 2x} ...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "isNew": false,
    "a": 2,
    "opts": [
      "\\(2e^{-\\sin 2x} -\\cos 2x\\)",
      "\\(2e^{\\sin 2x+1} \\cos 2x\\)",
      "\\(2e^{\\sin 2x} \\cos 2x\\)",
      "\\(2e^{\\sin 2x} \\sin 2x\\)"
    ],
    "options": [
      {
        "text": "\\(2e^{-\\sin 2x} -\\cos 2x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2e^{\\sin 2x+1} \\cos 2x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2e^{\\sin 2x} \\cos 2x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2e^{\\sin 2x} \\sin 2x\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(f(x) = e^{\\sin 2x}\\). This is a composition of three functions: exponential outside, sine in the middle, and linear \\(2x\\) inside. Use the chain rule from the outside in.",
        "workingOut": "\\(f(x) = e^{\\sin 2x}\\)",
        "graphData": null
      },
      {
        "explanation": "Outer layer: write \\(f = e^{u}\\) with \\(u = \\sin 2x\\). The derivative of \\(e^{u}\\) is \\(e^{u}\\,u'\\), so \\(f'(x) = e^{\\sin 2x}\\cdot u'\\).",
        "workingOut": "\\(f' = e^{u}\\,u',\\quad u = \\sin 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Middle layer: differentiate \\(u = \\sin 2x\\). Write \\(u = \\sin v\\) with \\(v = 2x\\). Then \\(u' = \\cos v\\cdot v' = \\cos 2x\\cdot 2 = 2\\cos 2x\\).",
        "workingOut": "\\(u' = 2\\cos 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Combine: \\(f'(x) = e^{\\sin 2x}\\cdot 2\\cos 2x = 2e^{\\sin 2x}\\cos 2x\\). A common slip is forgetting the factor 2 from \\(\\dfrac{d}{dx}(2x)\\), or writing \\(\\sin 2x\\) instead of \\(\\cos 2x\\).",
        "workingOut": "\\(f'(x) = 2e^{\\sin 2x}\\cos 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(2e^{\\sin 2x}\\cos 2x\\).",
        "workingOut": "\\(2e^{\\sin 2x}\\cos 2x\\)",
        "graphData": null
      }
    ],
    "solution": "The correct answer is \\(2e^{\\sin 2x}\\cos 2x\\).",
    "hint": "Chain rule in layers: \\(\\dfrac{d}{dx}e^{u}=e^{u}u'\\) with \\(u=\\sin 2x\\), and \\(\\dfrac{d}{dx}\\sin 2x=2\\cos 2x\\)."
  },
  {
    "id": "y12a-6b-q11c",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Differentiate: \\( f(x) = \\sin(e^{2x}) \\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "1",
    "origin": "seed",
    "isActive": true,
    "title": "Differentiate:  f(x) = \\sin(e^{2x}) ...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "isNew": false,
    "a": 1,
    "opts": [
      "\\(2e^{2x} -\\cos(e^{2x})\\)",
      "\\(2e^{2x} \\cos(e^{2x})\\)",
      "\\(2e^{2x} \\sin(e^{2x})\\)",
      "\\(e^{2x}\\cos(e^{2x})\\)"
    ],
    "options": [
      {
        "text": "\\(2e^{2x} -\\cos(e^{2x})\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2e^{2x} \\cos(e^{2x})\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2e^{2x} \\sin(e^{2x})\\)",
        "imageUrl": null
      },
      {
        "text": "\\(e^{2x}\\cos(e^{2x})\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(f(x) = \\sin(e^{2x})\\). Composition: sine outside, exponential in the middle, linear \\(2x\\) inside.",
        "workingOut": "\\(f(x) = \\sin(e^{2x})\\)",
        "graphData": null
      },
      {
        "explanation": "Outer layer: write \\(f = \\sin u\\) with \\(u = e^{2x}\\). Then \\(f' = \\cos u\\cdot u' = \\cos(e^{2x})\\,u'\\).",
        "workingOut": "\\(f' = \\cos(e^{2x})\\,u',\\quad u = e^{2x}\\)",
        "graphData": null
      },
      {
        "explanation": "Inside: differentiate \\(u = e^{2x}\\). Write \\(u = e^{v}\\) with \\(v = 2x\\). Then \\(u' = e^{v}\\cdot v' = e^{2x}\\cdot 2 = 2e^{2x}\\).",
        "workingOut": "\\(u' = 2e^{2x}\\)",
        "graphData": null
      },
      {
        "explanation": "Combine: \\(f'(x) = \\cos(e^{2x})\\cdot 2e^{2x} = 2e^{2x}\\cos(e^{2x})\\). A common slip is forgetting the factor 2, or writing \\(\\sin\\) instead of \\(\\cos\\).",
        "workingOut": "\\(f'(x) = 2e^{2x}\\cos(e^{2x})\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(2e^{2x}\\cos(e^{2x})\\).",
        "workingOut": "\\(2e^{2x}\\cos(e^{2x})\\)",
        "graphData": null
      }
    ],
    "solution": "The correct answer is \\(2e^{2x}\\cos(e^{2x})\\).",
    "hint": "Chain rule: \\(\\dfrac{d}{dx}\\sin(e^{2x}) = \\cos(e^{2x})\\cdot 2e^{2x}\\)."
  },
  {
    "id": "y12a-6b-q11d",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Differentiate: \\( f(x) = \\log_e(\\cos x) \\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "1",
    "solution": "The correct answer is \\(-\\tan x\\).",
    "origin": "seed",
    "isActive": true,
    "title": "Differentiate:  f(x) = \\log_e(\\cos x) ...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "isNew": false,
    "a": 1,
    "opts": [
      "\\(-\\sin x\\)",
      "\\(-\\tan x\\)",
      "\\(-\\tan x + 1\\)",
      "\\(\\tan x\\)"
    ],
    "options": [
      {
        "text": "\\(-\\sin x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-\\tan x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-\\tan x + 1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\tan x\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(f(x) = \\log_e(\\cos x) = \\ln(\\cos x)\\) (where \\(\\cos x > 0\\)). Strategy: chain rule for natural log.",
        "workingOut": "\\(f(x) = \\ln(\\cos x)\\)",
        "graphData": null
      },
      {
        "explanation": "Rule: \\(\\dfrac{d}{dx}\\ln u = \\dfrac{1}{u}\\,u'\\). Let \\(u = \\cos x\\), so \\(u' = -\\sin x\\).",
        "workingOut": "\\(u = \\cos x,\\quad u' = -\\sin x\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(f'(x) = \\dfrac{1}{\\cos x}\\cdot(-\\sin x) = -\\dfrac{\\sin x}{\\cos x}\\).",
        "workingOut": "\\(f'(x) = -\\dfrac{\\sin x}{\\cos x}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify: \\(-\\dfrac{\\sin x}{\\cos x} = -\\tan x\\). A common slip is dropping the minus sign from \\(\\dfrac{d}{dx}\\cos x\\).",
        "workingOut": "\\(f'(x) = -\\tan x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-\\tan x\\).",
        "workingOut": "\\(-\\tan x\\)",
        "graphData": null
      }
    ],
    "hint": "Use \\(\\dfrac{d}{dx}\\ln u = \\dfrac{u'}{u}\\) with \\(u=\\cos x\\)."
  },
  {
    "id": "y12a-6b-q11e",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Differentiate: \\( f(x) = \\log_e(\\sin x) \\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "0",
    "solution": "The correct answer is \\(\\cot x\\).",
    "origin": "seed",
    "isActive": true,
    "title": "Differentiate:  f(x) = \\log_e(\\sin x) ...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "isNew": true,
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "Given: \\(f(x) = \\log_e(\\sin x)\\). Why start here? The expression is a composition of the natural logarithm and sine, so we cannot differentiate term-by-term. What we will use is the chain rule for natural log: if \\(f = \\ln u\\) with \\(u > 0\\), then \\(f' = \\dfrac{1}{u}\\,u'\\). Note that \\(\\log_e\\) means the same as \\(\\ln\\). A common slip is treating \\(\\log_e(\\sin x)\\) as if the derivative of log were simply \\(\\dfrac{1}{\\sin x}\\) without multiplying by the derivative of the inside.",
        "workingOut": "\\(f(x) = \\ln(\\sin x)\\)",
        "graphData": null
      },
      {
        "explanation": "Set the inside function carefully: let \\(u = \\sin x\\) (requiring \\(\\sin x > 0\\) for the real logarithm). Why this substitution? It separates the outer log from the inner trig so each piece has a standard derivative. What: differentiate the inside using the standard form \\(\\dfrac{d}{dx}\\sin x = \\cos x\\). This \\(u'\\) will be multiplied by \\(\\dfrac{1}{u}\\) in the next step.",
        "workingOut": "\\(u = \\sin x,\\quad u' = \\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the log chain rule fully: \\(f'(x) = \\dfrac{1}{u}\\cdot u' = \\dfrac{1}{\\sin x}\\cdot\\cos x = \\dfrac{\\cos x}{\\sin x}\\). Why write it as a single fraction? That form matches a standard reciprocal identity. A common mistake is stopping at \\(\\dfrac{1}{\\sin x}\\) (forgetting \\(u'\\)), or writing \\(\\dfrac{\\sin x}{\\cos x}\\) by inverting the fraction.",
        "workingOut": "\\(f'(x) = \\dfrac{\\cos x}{\\sin x}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify with the identity \\(\\dfrac{\\cos x}{\\sin x} = \\cot x\\). Why name it? The options use \\(\\cot x\\) rather than the fraction form. What this means: the derivative of \\(\\ln(\\sin x)\\) is cot x wherever the log is defined. Connect: this matches option A and is the natural analogue of \\(\\dfrac{d}{dx}\\ln(\\cos x) = -\\tan x\\).",
        "workingOut": "\\(f'(x) = \\cot x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\cot x\\). In context, this is the gradient of \\(y = \\log_e(\\sin x)\\) for \\(\\sin x > 0\\). Check: at a value where \\(\\sin x\\) increases, cot x is positive near acute angles, which is consistent. Reject distractors such as \\(\\tan x\\) (inverted ratio) or \\(-\\tan x\\) (that is for \\(\\ln(\\cos x)\\)).",
        "workingOut": "\\(\\cot x\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(\\cot x\\)",
      "\\(\\cot x + 1\\)",
      "\\(\\tan x\\)",
      "\\(-\\tan x\\)"
    ],
    "hint": "Use the chain rule: \\(\\dfrac{d}{dx}\\ln u = \\dfrac{u'}{u}\\) with \\(u = \\sin x\\), then simplify to \\(\\cot x\\).",
    "options": [
      {
        "text": "\\(\\cot x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\cot x + 1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\tan x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-\\tan x\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q11f",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Differentiate: \\( f(x) = \\log_e(\\cos 4x) \\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "1",
    "origin": "seed",
    "isActive": true,
    "title": "Differentiate:  f(x) = \\log_e(\\cos 4x) ...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "isNew": false,
    "a": 1,
    "opts": [
      "\\(-4 \\sin 4x\\)",
      "\\(-4 \\tan 4x\\)",
      "\\(-4 \\tan 4x + 1\\)",
      "\\(4 \\tan 4x\\)"
    ],
    "options": [
      {
        "text": "\\(-4 \\sin 4x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-4 \\tan 4x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-4 \\tan 4x + 1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(4 \\tan 4x\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(f(x) = \\log_e(\\cos 4x) = \\ln(\\cos 4x)\\). Strategy: chain rule for \\(\\ln u\\) with a composite inside.",
        "workingOut": "\\(f(x) = \\ln(\\cos 4x)\\)",
        "graphData": null
      },
      {
        "explanation": "Let \\(u = \\cos 4x\\). Then \\(f' = \\dfrac{1}{u}\\,u' = \\dfrac{1}{\\cos 4x}\\,u'\\).",
        "workingOut": "\\(u = \\cos 4x\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate the inside: \\(u = \\cos v\\) with \\(v = 4x\\). So \\(u' = -\\sin v\\cdot v' = -\\sin 4x\\cdot 4 = -4\\sin 4x\\).",
        "workingOut": "\\(u' = -4\\sin 4x\\)",
        "graphData": null
      },
      {
        "explanation": "Combine: \\(f'(x) = \\dfrac{1}{\\cos 4x}\\cdot(-4\\sin 4x) = -4\\dfrac{\\sin 4x}{\\cos 4x} = -4\\tan 4x\\).",
        "workingOut": "\\(f'(x) = -4\\tan 4x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-4\\tan 4x\\).",
        "workingOut": "\\(-4\\tan 4x\\)",
        "graphData": null
      }
    ],
    "solution": "The correct answer is \\(-4\\tan 4x\\).",
    "hint": "Chain rule twice: log, then cos 4x (factor of 4)."
  },
  {
    "id": "y12a-6b-q12a",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Differentiate this function: \\( y = \\sin x \\cos x \\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "2",
    "origin": "seed",
    "isActive": true,
    "title": "Differentiate this function:  y = \\sin x...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 2,
    "isNew": false,
    "graphData": null,
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = \\sin x\\cos x\\). Strategy: product rule \\((uv)' = u'v + uv'\\).",
        "workingOut": "\\(y = \\sin x\\,\\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "Set \\(u = \\sin x\\) and \\(v = \\cos x\\). Then \\(u' = \\cos x\\) and \\(v' = -\\sin x\\).",
        "workingOut": "\\(u' = \\cos x,\\quad v' = -\\sin x\\)",
        "graphData": null
      },
      {
        "explanation": "Product rule: \\(y' = \\cos x\\cdot\\cos x + \\sin x\\cdot(-\\sin x) = \\cos^{2}x - \\sin^{2}x\\).",
        "workingOut": "\\(y' = \\cos^{2}x - \\sin^{2}x\\)",
        "graphData": null
      },
      {
        "explanation": "Note: this is also equal to \\(\\cos 2x\\) by the double-angle identity. Final answer: \\(\\cos^{2}x - \\sin^{2}x\\).",
        "workingOut": "\\(\\cos^{2}x - \\sin^{2}x\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(\\cos^{2}x + \\sin^{2}x\\)",
      "\\(\\cos x - \\sin x\\)",
      "\\(\\cos^{2}x - \\sin^{2}x\\)",
      "\\(2\\sin x\\cos x\\)"
    ],
    "solution": "The correct answer is \\(\\cos^{2}x - \\sin^{2}x\\).",
    "hint": "Use the product rule with \\(u = \\sin x\\) and \\(v = \\cos x\\).",
    "options": [
      {
        "text": "\\(\\cos^{2}x + \\sin^{2}x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\cos x - \\sin x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\cos^{2}x - \\sin^{2}x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\sin x\\cos x\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q12b",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Differentiate this function: \\( y = \\sin^2 7x \\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "2",
    "origin": "seed",
    "isActive": true,
    "title": "Differentiate this function:  y = \\sin^2...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 2,
    "isNew": false,
    "graphData": null,
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = \\sin^{2} 7x = (\\sin 7x)^{2}\\). Strategy: chain rule for a power of a composite sine.",
        "workingOut": "\\(y = (\\sin 7x)^{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Outer power: if \\(y = u^{2}\\) with \\(u = \\sin 7x\\), then \\(y' = 2u\\,u'\\).",
        "workingOut": "\\(y' = 2\\sin 7x\\cdot u'\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate the inside: \\(u = \\sin v\\) with \\(v = 7x\\). So \\(u' = \\cos v\\cdot v' = \\cos 7x\\cdot 7 = 7\\cos 7x\\).",
        "workingOut": "\\(u' = 7\\cos 7x\\)",
        "graphData": null
      },
      {
        "explanation": "Combine: \\(y' = 2\\sin 7x\\cdot 7\\cos 7x = 14\\sin 7x\\cos 7x\\). A common slip is forgetting the factor 7 from \\(\\dfrac{d}{dx}(7x)\\).",
        "workingOut": "\\(y' = 14\\sin 7x\\cos 7x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(14\\sin 7x\\cos 7x\\).",
        "workingOut": "\\(14\\sin 7x\\cos 7x\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(-14\\sin 7x\\cos 7x\\)",
      "\\(14\\sin 7x\\)",
      "\\(14\\sin 7x\\cos 7x\\)",
      "\\(14\\sin^{2} 7x\\)"
    ],
    "solution": "The correct answer is \\(14\\sin 7x\\cos 7x\\).",
    "hint": "Write as \\((\\sin 7x)^{2}\\) and use the chain rule twice.",
    "options": [
      {
        "text": "\\(-14\\sin 7x\\cos 7x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(14\\sin 7x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(14\\sin 7x\\cos 7x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(14\\sin^{2} 7x\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q12c",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Differentiate this function: \\( y = \\cos^5 3x \\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "1",
    "origin": "seed",
    "isActive": true,
    "title": "Differentiate this function:  y = \\cos^5...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 1,
    "isNew": false,
    "graphData": null,
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = \\cos^{5} 3x = (\\cos 3x)^{5}\\). Strategy: chain rule in layers — power outside, then cosine, then the linear angle \\(3x\\).",
        "workingOut": "\\(y = (\\cos 3x)^{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Outer power: let \\(u = \\cos 3x\\), so \\(y = u^{5}\\). Then \\(y' = 5u^{4}\\,u' = 5(\\cos 3x)^{4}\\,u'\\).",
        "workingOut": "\\(y' = 5\\cos^{4} 3x\\cdot u'\\)",
        "graphData": null
      },
      {
        "explanation": "Middle: differentiate \\(u = \\cos 3x\\). Let \\(v = 3x\\), so \\(u = \\cos v\\). Then \\(u' = -\\sin v\\cdot v' = -\\sin 3x\\cdot 3 = -3\\sin 3x\\).",
        "workingOut": "\\(u' = -3\\sin 3x\\)",
        "graphData": null
      },
      {
        "explanation": "Combine: \\(y' = 5\\cos^{4} 3x\\cdot(-3\\sin 3x) = -15\\cos^{4} 3x\\,\\sin 3x\\).",
        "workingOut": "\\(y' = -15\\cos^{4} 3x\\,\\sin 3x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-15\\cos^{4} 3x\\,\\sin 3x\\). A common slip is forgetting the factor 3, or missing the minus from the derivative of cosine.",
        "workingOut": "\\(-15\\cos^{4} 3x\\,\\sin 3x\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(-15\\cos 3x\\sin 3x\\)",
      "\\(-15\\cos^{4} 3x\\,\\sin 3x\\)",
      "\\(-15\\sin^{4} 3x\\,\\sin 3x\\)",
      "\\(15\\cos^{4} 3x\\,\\sin 3x\\)"
    ],
    "solution": "The correct answer is \\(-15\\cos^{4} 3x\\,\\sin 3x\\).",
    "hint": "Write as \\((\\cos 3x)^{5}\\). Chain rule: power, then cosine, then the 3 from \\(3x\\).",
    "options": [
      {
        "text": "\\(-15\\cos 3x\\sin 3x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-15\\cos^{4} 3x\\,\\sin 3x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-15\\sin^{4} 3x\\,\\sin 3x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(15\\cos^{4} 3x\\,\\sin 3x\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q12d",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Differentiate this function: \\( y = (1 - \\cos 3x)^3 \\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "2",
    "origin": "seed",
    "isActive": true,
    "title": "Differentiate this function:  y = (1 - \\...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 2,
    "isNew": false,
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = (1 - \\cos 3x)^{3}\\). Strategy: chain rule with outer power 3.",
        "workingOut": "\\(y = (1 - \\cos 3x)^{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Let \\(u = 1 - \\cos 3x\\), so \\(y = u^{3}\\). Then \\(y' = 3u^{2}\\,u' = 3(1 - \\cos 3x)^{2}\\,u'\\).",
        "workingOut": "\\(y' = 3(1 - \\cos 3x)^{2}\\,u'\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate the inside: \\(u' = 0 - (-\\sin 3x)\\cdot 3 = 3\\sin 3x\\) (chain rule on \\(\\cos 3x\\)).",
        "workingOut": "\\(u' = 3\\sin 3x\\)",
        "graphData": null
      },
      {
        "explanation": "Combine: \\(y' = 3(1 - \\cos 3x)^{2}\\cdot 3\\sin 3x = 9(1 - \\cos 3x)^{2}\\sin 3x\\).",
        "workingOut": "\\(y' = 9(1 - \\cos 3x)^{2}\\sin 3x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(9(1 - \\cos 3x)^{2}\\sin 3x\\).",
        "workingOut": "\\(9(1 - \\cos 3x)^{2}\\sin 3x\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(9(1 - \\cos 3x)^{2}\\cos 3x\\)",
      "\\(9(1 - \\cos 3x)\\sin 3x\\)",
      "\\(9(1 - \\cos 3x)^{2}\\sin 3x\\)",
      "\\(9(1 - \\sin 3x)^{2}\\sin 3x\\)"
    ],
    "solution": "The correct answer is \\(9(1 - \\cos 3x)^{2}\\sin 3x\\).",
    "hint": "Chain rule: power of \\(1 - \\cos 3x\\), then differentiate the inside.",
    "options": [
      {
        "text": "\\(9(1 - \\cos 3x)^{2}\\cos 3x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(9(1 - \\cos 3x)\\sin 3x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(9(1 - \\cos 3x)^{2}\\sin 3x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(9(1 - \\sin 3x)^{2}\\sin 3x\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q12e",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Differentiate this function: \\( y = \\sin 2x \\sin 4x \\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "2",
    "origin": "seed",
    "isActive": true,
    "title": "Differentiate this function:  y = \\sin 2...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 2,
    "isNew": false,
    "graphData": null,
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = \\sin 2x\\,\\sin 4x\\). Strategy: product rule, and chain rule on each sine.",
        "workingOut": "\\(y = \\sin 2x\\,\\sin 4x\\)",
        "graphData": null
      },
      {
        "explanation": "Set \\(u = \\sin 2x\\) and \\(v = \\sin 4x\\). Then \\(u' = 2\\cos 2x\\) and \\(v' = 4\\cos 4x\\).",
        "workingOut": "\\(u' = 2\\cos 2x,\\quad v' = 4\\cos 4x\\)",
        "graphData": null
      },
      {
        "explanation": "Product rule: \\(y' = u'v + uv' = (2\\cos 2x)(\\sin 4x) + (\\sin 2x)(4\\cos 4x)\\).",
        "workingOut": "\\(y' = 2\\cos 2x\\sin 4x + 4\\sin 2x\\cos 4x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(2\\cos 2x\\sin 4x + 4\\sin 2x\\cos 4x\\). A common slip is forgetting the chain factors 2 or 4.",
        "workingOut": "\\(2\\cos 2x\\sin 4x + 4\\sin 2x\\cos 4x\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(-2\\cos 2x\\sin 4x + 4\\sin 2x\\cos 4x\\)",
      "\\(2\\cos 2x\\sin 4x - 4\\sin 2x\\cos 4x\\)",
      "\\(2\\cos 2x\\sin 4x + 4\\sin 2x\\cos 4x\\)",
      "\\(2\\sin 2x\\sin 4x + 4\\sin 2x\\sin 4x\\)"
    ],
    "solution": "The correct answer is \\(2\\cos 2x\\sin 4x + 4\\sin 2x\\cos 4x\\).",
    "hint": "Product rule; each factor also needs a chain-rule factor (2 and 4).",
    "options": [
      {
        "text": "\\(-2\\cos 2x\\sin 4x + 4\\sin 2x\\cos 4x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\cos 2x\\sin 4x - 4\\sin 2x\\cos 4x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\cos 2x\\sin 4x + 4\\sin 2x\\cos 4x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\sin 2x\\sin 4x + 4\\sin 2x\\sin 4x\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q12f",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Differentiate this function: \\( y = \\tan^3(5x - 4) \\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "3",
    "origin": "seed",
    "isActive": true,
    "title": "Differentiate this function:  y = \\tan^3...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 3,
    "isNew": false,
    "graphData": null,
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = \\tan^{3}(5x - 4) = \\bigl(\\tan(5x - 4)\\bigr)^{3}\\). Strategy: chain rule in layers.",
        "workingOut": "\\(y = \\bigl(\\tan(5x - 4)\\bigr)^{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Outer power: let \\(u = \\tan(5x - 4)\\), so \\(y = u^{3}\\). Then \\(y' = 3u^{2}\\,u' = 3\\tan^{2}(5x - 4)\\,u'\\).",
        "workingOut": "\\(y' = 3\\tan^{2}(5x - 4)\\,u'\\)",
        "graphData": null
      },
      {
        "explanation": "Middle: \\(\\dfrac{d}{dx}\\tan w = \\sec^{2}w\\cdot w'\\) with \\(w = 5x - 4\\). So \\(u' = \\sec^{2}(5x - 4)\\cdot 5 = 5\\sec^{2}(5x - 4)\\).",
        "workingOut": "\\(u' = 5\\sec^{2}(5x - 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Combine: \\(y' = 3\\tan^{2}(5x - 4)\\cdot 5\\sec^{2}(5x - 4) = 15\\tan^{2}(5x - 4)\\sec^{2}(5x - 4)\\).",
        "workingOut": "\\(y' = 15\\tan^{2}(5x - 4)\\sec^{2}(5x - 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(15\\tan^{2}(5x - 4)\\sec^{2}(5x - 4)\\). A common slip is forgetting the factor 5 from \\(w'\\).",
        "workingOut": "\\(15\\tan^{2}(5x - 4)\\sec^{2}(5x - 4)\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(-15\\tan^{2}(5x-4)\\sec^{2}(5x-4)\\)",
      "\\(15\\tan^{2}(5x-4)\\sec(5x-4)\\)",
      "\\(15\\tan(5x-4)\\sec^{2}(5x-4)\\)",
      "\\(15\\tan^{2}(5x-4)\\sec^{2}(5x-4)\\)"
    ],
    "solution": "The correct answer is \\(15\\tan^{2}(5x-4)\\sec^{2}(5x-4)\\).",
    "hint": "Write as \\([\\tan(5x-4)]^{3}\\). Chain: power, then tan, then factor 5.",
    "options": [
      {
        "text": "\\(-15\\tan^{2}(5x-4)\\sec^{2}(5x-4)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(15\\tan^{2}(5x-4)\\sec(5x-4)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(15\\tan(5x-4)\\sec^{2}(5x-4)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(15\\tan^{2}(5x-4)\\sec^{2}(5x-4)\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q13a",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Find \\( f'(x) \\), given that: \\( f(x) = \\frac{1}{1 + \\sin x} \\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "3",
    "origin": "seed",
    "isActive": true,
    "title": "Find  f'(x) , given that:  f(x) = \\frac{...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 3,
    "isNew": false,
    "solutionSteps": [
      {
        "explanation": "Given: \\(f(x) = \\dfrac{1}{1 + \\sin x}\\). Strategy: rewrite as a power and use the chain rule (or use the quotient rule).",
        "workingOut": "\\(f(x) = (1 + \\sin x)^{-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Chain rule for powers: \\(\\dfrac{d}{dx}[u^{n}] = n u^{n-1} u'\\). Here \\(u = 1 + \\sin x\\) and \\(n = -1\\), so \\(u' = \\cos x\\).",
        "workingOut": "\\(u = 1 + \\sin x,\\quad u' = \\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate: \\(f'(x) = -1\\cdot(1 + \\sin x)^{-2}\\cdot\\cos x = -\\dfrac{\\cos x}{(1 + \\sin x)^{2}}\\).",
        "workingOut": "\\(f'(x) = -\\dfrac{\\cos x}{(1 + \\sin x)^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Alternatively by quotient rule with \\(u = 1\\), \\(v = 1 + \\sin x\\): \\(f' = \\dfrac{0\\cdot v - 1\\cdot\\cos x}{v^{2}} = -\\dfrac{\\cos x}{(1 + \\sin x)^{2}}\\) (same result).",
        "workingOut": "\\(f'(x) = -\\dfrac{\\cos x}{(1 + \\sin x)^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-\\dfrac{\\cos x}{(1 + \\sin x)^{2}}\\). A common slip is forgetting the minus from the power \\(-1\\), or missing the chain factor \\(\\cos x\\).",
        "workingOut": "\\(-\\dfrac{\\cos x}{(1 + \\sin x)^{2}}\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(\\dfrac{\\cos x}{(1 + \\sin x)^{2}}\\)",
      "\\(-\\dfrac{(1 + \\sin x)^{2}}{\\cos x}\\)",
      "\\(-\\dfrac{1}{(1 + \\sin x)^{2}}\\)",
      "\\(-\\dfrac{\\cos x}{(1 + \\sin x)^{2}}\\)"
    ],
    "solution": "The correct answer is \\(-\\dfrac{\\cos x}{(1 + \\sin x)^{2}}\\).",
    "hint": "Rewrite as \\((1+\\sin x)^{-1}\\) and use the chain rule, or use the quotient rule.",
    "options": [
      {
        "text": "\\(\\dfrac{\\cos x}{(1 + \\sin x)^{2}}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-\\dfrac{(1 + \\sin x)^{2}}{\\cos x}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-\\dfrac{1}{(1 + \\sin x)^{2}}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-\\dfrac{\\cos x}{(1 + \\sin x)^{2}}\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q13b",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Find \\( f'(x) \\), given that: \\( f(x) = \\frac{\\sin x}{1 + \\cos x} \\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "2",
    "origin": "seed",
    "isActive": true,
    "title": "Find  f'(x) , given that:  f(x) = \\frac{...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 2,
    "isNew": false,
    "solutionSteps": [
      {
        "explanation": "Given: \\(f(x) = \\dfrac{\\sin x}{1 + \\cos x}\\). Strategy: quotient rule \\(\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^{2}}\\).",
        "workingOut": "\\(u = \\sin x,\\quad v = 1 + \\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate: \\(u' = \\cos x\\) and \\(v' = -\\sin x\\).",
        "workingOut": "\\(u' = \\cos x,\\quad v' = -\\sin x\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute: \\(f'(x) = \\dfrac{\\cos x(1 + \\cos x) - (\\sin x)(-\\sin x)}{(1 + \\cos x)^{2}} = \\dfrac{\\cos x + \\cos^{2}x + \\sin^{2}x}{(1 + \\cos x)^{2}}\\).",
        "workingOut": "\\(f' = \\dfrac{\\cos x + \\cos^{2}x + \\sin^{2}x}{(1 + \\cos x)^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Use \\(\\sin^{2}x + \\cos^{2}x = 1\\): numerator becomes \\(\\cos x + 1\\). So \\(f'(x) = \\dfrac{1 + \\cos x}{(1 + \\cos x)^{2}} = \\dfrac{1}{1 + \\cos x}\\) (for \\(1 + \\cos x \\neq 0\\)).",
        "workingOut": "\\(f'(x) = \\dfrac{1}{1 + \\cos x}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{1}{1 + \\cos x}\\). A common slip is stopping before cancelling the factor \\(1 + \\cos x\\).",
        "workingOut": "\\(\\dfrac{1}{1 + \\cos x}\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(-\\dfrac{1}{1 + \\cos x}\\)",
      "\\(1 + \\cos x\\)",
      "\\(\\dfrac{1}{1 + \\cos x}\\)",
      "\\(\\dfrac{1}{1 + \\sin x}\\)"
    ],
    "solution": "The correct answer is \\(\\dfrac{1}{1 + \\cos x}\\).",
    "hint": "Use the quotient rule with \\(u = \\sin x\\) and \\(v = 1 + \\cos x\\), then simplify.",
    "options": [
      {
        "text": "\\(-\\dfrac{1}{1 + \\cos x}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1 + \\cos x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{1}{1 + \\cos x}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{1}{1 + \\sin x}\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q13c",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Find \\( f'(x) \\), given that: \\( f(x) = \\frac{1 - \\sin x}{\\cos x} \\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "3",
    "origin": "seed",
    "isActive": true,
    "title": "Find  f'(x) , given that:  f(x) = \\frac{...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 3,
    "isNew": false,
    "solutionSteps": [
      {
        "explanation": "Given: \\(f(x) = \\dfrac{1 - \\sin x}{\\cos x}\\). Strategy: quotient rule, or split into two fractions.",
        "workingOut": "\\(f(x) = \\dfrac{1 - \\sin x}{\\cos x}\\)",
        "graphData": null
      },
      {
        "explanation": "Split: \\(f(x) = \\dfrac{1}{\\cos x} - \\dfrac{\\sin x}{\\cos x} = \\sec x - \\tan x\\).",
        "workingOut": "\\(f(x) = \\sec x - \\tan x\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate standard forms: \\(\\dfrac{d}{dx}\\sec x = \\sec x\\tan x\\) and \\(\\dfrac{d}{dx}\\tan x = \\sec^{2}x\\).",
        "workingOut": "\\(f'(x) = \\sec x\\tan x - \\sec^{2}x\\)",
        "graphData": null
      },
      {
        "explanation": "Factor: \\(f'(x) = \\sec x(\\tan x - \\sec x)\\). Equivalently, after algebra this simplifies to \\(-\\dfrac{1}{1 + \\sin x}\\).",
        "workingOut": "\\(f'(x) = \\sec x\\tan x - \\sec^{2}x\\)",
        "graphData": null
      },
      {
        "explanation": "Check by quotient rule: \\(u = 1 - \\sin x\\), \\(v = \\cos x\\) gives the same simplified result \\(-\\dfrac{1}{1 + \\sin x}\\).",
        "workingOut": "\\(f'(x) = -\\dfrac{1}{1 + \\sin x}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-\\dfrac{1}{1 + \\sin x}\\).",
        "workingOut": "\\(-\\dfrac{1}{1 + \\sin x}\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(\\dfrac{1}{1 + \\sin x}\\)",
      "\\(-(1 + \\sin x)\\)",
      "\\(-\\dfrac{1}{1 - \\sin x}\\)",
      "\\(-\\dfrac{1}{1 + \\sin x}\\)"
    ],
    "solution": "The correct answer is \\(-\\dfrac{1}{1 + \\sin x}\\).",
    "hint": "Quotient rule, or rewrite as \\(\\sec x - \\tan x\\) and differentiate.",
    "options": [
      {
        "text": "\\(\\dfrac{1}{1 + \\sin x}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-(1 + \\sin x)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-\\dfrac{1}{1 - \\sin x}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-\\dfrac{1}{1 + \\sin x}\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q13d",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Find \\( f'(x) \\), given that: \\( f(x) = \\frac{\\cos x}{\\cos x + \\sin x} \\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "2",
    "origin": "seed",
    "isActive": true,
    "title": "Find  f'(x) , given that:  f(x) = \\frac{...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 2,
    "isNew": false,
    "opts": [
      "\\(\\dfrac{1}{(\\cos x + \\sin x)^{2}}\\)",
      "\\(-(\\cos x + \\sin x)^{2}\\)",
      "\\(-\\dfrac{1}{(\\cos x + \\sin x)^{2}}\\)",
      "\\(-\\dfrac{1}{(\\sin x)^{2}}\\)"
    ],
    "solution": "The correct answer is \\(-\\dfrac{1}{(\\cos x + \\sin x)^{2}}\\).",
    "hint": "Use the quotient rule with \\(u = \\cos x\\) and \\(v = \\cos x + \\sin x\\).",
    "options": [
      {
        "text": "\\(\\dfrac{1}{(\\cos x + \\sin x)^{2}}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-(\\cos x + \\sin x)^{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-\\dfrac{1}{(\\cos x + \\sin x)^{2}}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-\\dfrac{1}{(\\sin x)^{2}}\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(f(x) = \\dfrac{\\cos x}{\\cos x + \\sin x}\\). Strategy: quotient rule.",
        "workingOut": "\\(u = \\cos x,\\quad v = \\cos x + \\sin x\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate: \\(u' = -\\sin x\\) and \\(v' = -\\sin x + \\cos x\\).",
        "workingOut": "\\(u' = -\\sin x,\\quad v' = \\cos x - \\sin x\\)",
        "graphData": null
      },
      {
        "explanation": "Quotient rule: \\(f'(x) = \\dfrac{(-\\sin x)v - u(\\cos x - \\sin x)}{v^{2}}\\).",
        "workingOut": "\\(f' = \\dfrac{(-\\sin x)(\\cos x + \\sin x) - \\cos x(\\cos x - \\sin x)}{(\\cos x + \\sin x)^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the numerator: \\(-\\sin x\\cos x - \\sin^{2}x - \\cos^{2}x + \\cos x\\sin x = -(\\sin^{2}x + \\cos^{2}x) = -1\\).",
        "workingOut": "\\(\\text{numerator} = -1\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(f'(x) = \\dfrac{-1}{(\\cos x + \\sin x)^{2}} = -\\dfrac{1}{(\\cos x + \\sin x)^{2}}\\).",
        "workingOut": "\\(f'(x) = -\\dfrac{1}{(\\cos x + \\sin x)^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-\\dfrac{1}{(\\cos x + \\sin x)^{2}}\\). A common slip is an algebra error in the numerator expansion.",
        "workingOut": "\\(-\\dfrac{1}{(\\cos x + \\sin x)^{2}}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q14",
    "topicId": "y12a-6B",
    "chapterId": "y12a-6",
    "c": "6B",
    "t": "Differentiating the trigonometric functions",
    "origin": "seed",
    "isNew": true,
    "requiresManualGrading": false,
    "type": "multi_part",
    "difficulty": "hard",
    "timeLimit": 600,
    "question": "Let \\(y = \\cos x\\). This question explores successive derivatives of cosine and related differential equations.",
    "answer": "",
    "hint": "Work through the parts in order. Keep a clear list of \\(y,\\ y',\\ y'',\\ y''',\\ y''''\\).",
    "solution": "",
    "solutionSteps": [],
    "graphData": null,
    "subQuestions": [
      {
        "id": "y12a-6b-q14a",
        "type": "multiple_choice",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "Which statement correctly describes the graph of \\(y = \\cos x\\) on the interval \\([-3\\pi,\\,3\\pi]\\)?",
        "opts": [
          "Period \\(2\\pi\\), range \\([-1,1]\\), local maxima at \\(x = 0,\\,\\pm 2\\pi\\) (within the interval), crosses the \\(x\\)-axis at odd multiples of \\(\\dfrac{\\pi}{2}\\)",
          "Period \\(\\pi\\), range \\([-1,1]\\), maxima only at \\(x = \\pm\\pi\\)",
          "Period \\(2\\pi\\), range \\([0,1]\\), never crosses the \\(x\\)-axis",
          "Period \\(4\\pi\\), range \\([-2,2]\\), maxima at every multiple of \\(\\pi\\)"
        ],
        "options": [
          {
            "text": "Period \\(2\\pi\\), range \\([-1,1]\\), local maxima at \\(x = 0,\\,\\pm 2\\pi\\) (within the interval), crosses the \\(x\\)-axis at odd multiples of \\(\\dfrac{\\pi}{2}\\)",
            "imageUrl": null
          },
          {
            "text": "Period \\(\\pi\\), range \\([-1,1]\\), maxima only at \\(x = \\pm\\pi\\)",
            "imageUrl": null
          },
          {
            "text": "Period \\(2\\pi\\), range \\([0,1]\\), never crosses the \\(x\\)-axis",
            "imageUrl": null
          },
          {
            "text": "Period \\(4\\pi\\), range \\([-2,2]\\), maxima at every multiple of \\(\\pi\\)",
            "imageUrl": null
          }
        ],
        "a": 0,
        "answer": "0",
        "hint": "Recall the standard features of \\(y = \\cos x\\): period, amplitude and zeros.",
        "solution": "The correct answer is Period \\(2\\pi\\), range \\([-1,1]\\), local maxima at \\(x = 0,\\,\\pm 2\\pi\\) (within the interval), crosses the \\(x\\)-axis at odd multiples of \\(\\dfrac{\\pi}{2}\\).",
        "solutionSteps": [
          {
            "explanation": "Given: describe (and sketch) \\(y = \\cos x\\) for \\(-3\\pi \\le x \\le 3\\pi\\). The sketch belongs in the solution, not in the question stem.",
            "workingOut": "\\(y = \\cos x\\)",
            "graphData": null
          },
          {
            "explanation": "Sketch of \\(y = \\cos x\\) on a wide window covering about \\([-3\\pi, 3\\pi]\\). Period \\(2\\pi\\), amplitude 1, maxima at multiples of \\(2\\pi\\), minima at odd multiples of \\(\\pi\\).",
            "workingOut": "\\(y = \\cos x\\)",
            "graphData": {
              "jsxGraph": {
                "width": 420,
                "height": 240,
                "boundingbox": [
                  -10.2,
                  1.6,
                  10.2,
                  -1.6
                ],
                "showAxisLabels": true,
                "showGrid": true,
                "script": "board.suspendUpdate();board.create('arrow', [[-10,0],[10,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('arrow', [[0,-1.5],[0,1.5]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('text', [9.2, -0.35, 'x'], {fontSize:13, color:'#64748b'});board.create('text', [0.25, 1.35, 'y'], {fontSize:13, color:'#64748b'});board.create('functiongraph', [function(x){ return Math.cos(x); }, -9.5, 9.5], {strokeColor:'#6366f1', strokeWidth:2.6});board.create('text', [2.2, 1.15, 'y = cos x'], {fontSize:13, color:'#4f46e5'});board.create('point', [0,1], {name:'', size:2, color:'#6366f1'});board.create('point', [Math.PI,-1], {name:'', size:2, color:'#6366f1'});board.create('point', [-Math.PI,-1], {name:'', size:2, color:'#6366f1'});board.create('point', [2*Math.PI,1], {name:'', size:2, color:'#6366f1'});board.create('point', [-2*Math.PI,1], {name:'', size:2, color:'#6366f1'});board.create('text', [0.15, 1.15, '1'], {fontSize:11, color:'#64748b'});board.create('text', [Math.PI-0.3, -1.35, 'π'], {fontSize:11, color:'#64748b'});board.create('text', [2*Math.PI-0.4, 1.15, '2π'], {fontSize:11, color:'#64748b'});board.unsuspendUpdate();"
              }
            }
          },
          {
            "explanation": "Period: \\(\\cos(x + 2\\pi) = \\cos x\\), so the fundamental period is \\(2\\pi\\). On \\([-3\\pi, 3\\pi]\\) the graph completes three full periods.",
            "workingOut": "\\(\\text{period } = 2\\pi\\)",
            "graphData": null
          },
          {
            "explanation": "Range: cosine takes all values in \\([-1, 1]\\). Local maxima \\(y = 1\\) at \\(x = 2k\\pi\\) (e.g. \\(0,\\,\\pm 2\\pi\\)). Local minima \\(y = -1\\) at \\(x = (2k+1)\\pi\\).",
            "workingOut": "\\(\\text{range }[-1,1]\\)",
            "graphData": null
          },
          {
            "explanation": "Zeros: \\(\\cos x = 0\\) at \\(x = \\dfrac{\\pi}{2} + k\\pi\\) (odd multiples of \\(\\dfrac{\\pi}{2}\\)).",
            "workingOut": "\\(\\text{zeros at odd multiples of }\\pi/2\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: period \\(2\\pi\\), range \\([-1,1]\\), maxima at multiples of \\(2\\pi\\), zeros at odd multiples of \\(\\dfrac{\\pi}{2}\\).",
            "workingOut": "\\(\\text{period }2\\pi,\\ \\text{range }[-1,1]\\)",
            "graphData": null
          }
        ],
        "graphData": null,
        "requiresManualGrading": false
      },
      {
        "id": "y12a-6b-q14b",
        "type": "multiple_choice",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "For \\(y = \\cos x\\), which list correctly gives \\(y',\\ y'',\\ y''',\\ y''''\\)?",
        "opts": [
          "\\(y' = \\sin x,\\; y'' = \\cos x,\\; y''' = -\\sin x,\\; y'''' = -\\cos x\\)",
          "\\(y' = -\\sin x,\\; y'' = \\cos x,\\; y''' = \\sin x,\\; y'''' = -\\cos x\\)",
          "\\(y' = -\\sin x,\\; y'' = -\\cos x,\\; y''' = \\sin x,\\; y'''' = \\cos x\\)",
          "\\(y' = -\\sin x,\\; y'' = -\\cos x,\\; y''' = -\\sin x,\\; y'''' = -\\cos x\\)"
        ],
        "options": [
          {
            "text": "\\(y' = \\sin x,\\; y'' = \\cos x,\\; y''' = -\\sin x,\\; y'''' = -\\cos x\\)",
            "imageUrl": null
          },
          {
            "text": "\\(y' = -\\sin x,\\; y'' = \\cos x,\\; y''' = \\sin x,\\; y'''' = -\\cos x\\)",
            "imageUrl": null
          },
          {
            "text": "\\(y' = -\\sin x,\\; y'' = -\\cos x,\\; y''' = \\sin x,\\; y'''' = \\cos x\\)",
            "imageUrl": null
          },
          {
            "text": "\\(y' = -\\sin x,\\; y'' = -\\cos x,\\; y''' = -\\sin x,\\; y'''' = -\\cos x\\)",
            "imageUrl": null
          }
        ],
        "a": 2,
        "answer": "2",
        "hint": "Differentiate repeatedly: each derivative of sine/cosine cycles every four steps, with careful signs.",
        "solution": "The correct answer is \\(y' = -\\sin x,\\; y'' = -\\cos x,\\; y''' = \\sin x,\\; y'''' = \\cos x\\).",
        "solutionSteps": [
          {
            "explanation": "Given: \\(y = \\cos x\\). Strategy: differentiate four times using the standard forms.",
            "workingOut": "\\(y = \\cos x\\)",
            "graphData": null
          },
          {
            "explanation": "First derivative: \\(\\dfrac{d}{dx}\\cos x = -\\sin x\\). So \\(y' = -\\sin x\\).",
            "workingOut": "\\(y' = -\\sin x\\)",
            "graphData": null
          },
          {
            "explanation": "Second: \\(\\dfrac{d}{dx}(-\\sin x) = -\\cos x\\). So \\(y'' = -\\cos x\\).",
            "workingOut": "\\(y'' = -\\cos x\\)",
            "graphData": null
          },
          {
            "explanation": "Third: \\(\\dfrac{d}{dx}(-\\cos x) = \\sin x\\). So \\(y''' = \\sin x\\).",
            "workingOut": "\\(y''' = \\sin x\\)",
            "graphData": null
          },
          {
            "explanation": "Fourth: \\(\\dfrac{d}{dx}\\sin x = \\cos x\\). So \\(y'''' = \\cos x\\). Notice \\(y'''' = y\\) and \\(y'' = -y\\).",
            "workingOut": "\\(y'''' = \\cos x\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: \\(y' = -\\sin x,\\; y'' = -\\cos x,\\; y''' = \\sin x,\\; y'''' = \\cos x\\).",
            "workingOut": "\\(-\\sin x,\\ -\\cos x,\\ \\sin x,\\ \\cos x\\)",
            "graphData": null
          }
        ],
        "graphData": null,
        "requiresManualGrading": false
      },
      {
        "id": "y12a-6b-q14c_i",
        "type": "multiple_choice",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "For \\(y = \\cos x\\) we have \\(y'' = -y\\). What geometric relationship does this describe between the graphs of \\(y\\) and \\(y''\\)?",
        "opts": [
          "The graph of \\(y''\\) is the reflection of the graph of \\(y\\) in the \\(x\\)-axis",
          "The graph of \\(y''\\) is a horizontal translation of \\(y\\) by \\(\\pi\\)",
          "The two graphs are identical",
          "The graph of \\(y''\\) is the reflection of \\(y\\) in the \\(y\\)-axis"
        ],
        "options": [
          {
            "text": "The graph of \\(y''\\) is the reflection of the graph of \\(y\\) in the \\(x\\)-axis",
            "imageUrl": null
          },
          {
            "text": "The graph of \\(y''\\) is a horizontal translation of \\(y\\) by \\(\\pi\\)",
            "imageUrl": null
          },
          {
            "text": "The two graphs are identical",
            "imageUrl": null
          },
          {
            "text": "The graph of \\(y''\\) is the reflection of \\(y\\) in the \\(y\\)-axis",
            "imageUrl": null
          }
        ],
        "a": 0,
        "answer": "0",
        "hint": "Use successive differentiation of sine and cosine, and compare each derivative with the original function.",
        "solution": "The correct answer is The graph of \\(y''\\) is the reflection of the graph of \\(y\\) in the \\(x\\)-axis.",
        "solutionSteps": [
          {
            "explanation": "From successive differentiation: if \\(y = \\cos x\\), then \\(y'' = -\\cos x = -y\\).",
            "workingOut": "\\(y'' = -y\\)",
            "graphData": null
          },
          {
            "explanation": "Multiplying a function by \\(-1\\) reflects its graph in the \\(x\\)-axis. So the graph of \\(y''\\) is the \\(x\\)-axis reflection of the graph of \\(y\\).",
            "workingOut": "\\(\\text{reflect }y\\text{ in the }x\\text{-axis}\\)",
            "graphData": null
          },
          {
            "explanation": "Check: at a maximum of \\(\\cos x\\) (\\(y = 1\\)), we have \\(y'' = -1\\) (a minimum). The shapes match after a vertical flip.",
            "workingOut": "\\(\\text{max }\\leftrightarrow\\text{ min}\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: reflection of \\(y\\) in the \\(x\\)-axis.",
            "workingOut": "\\(\\text{reflection in the }x\\text{-axis}\\)",
            "graphData": null
          }
        ],
        "graphData": null,
        "requiresManualGrading": false
      },
      {
        "id": "y12a-6b-q14c_ii",
        "type": "multiple_choice",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "For \\(y = \\cos x\\) we have \\(y'''' = y\\). What geometric relationship does this describe between the graphs of \\(y\\) and \\(y''''\\)?",
        "opts": [
          "The graphs of \\(y\\) and \\(y''''\\) are identical",
          "The graph of \\(y''''\\) is the reflection of \\(y\\) in the \\(x\\)-axis",
          "The graph of \\(y''''\\) is a vertical stretch of \\(y\\) by factor 2",
          "The two graphs are unrelated"
        ],
        "options": [
          {
            "text": "The graphs of \\(y\\) and \\(y''''\\) are identical",
            "imageUrl": null
          },
          {
            "text": "The graph of \\(y''''\\) is the reflection of \\(y\\) in the \\(x\\)-axis",
            "imageUrl": null
          },
          {
            "text": "The graph of \\(y''''\\) is a vertical stretch of \\(y\\) by factor 2",
            "imageUrl": null
          },
          {
            "text": "The two graphs are unrelated",
            "imageUrl": null
          }
        ],
        "a": 0,
        "answer": "0",
        "hint": "Use successive differentiation of sine and cosine, and compare each derivative with the original function.",
        "solution": "The correct answer is The graphs of \\(y\\) and \\(y''''\\) are identical.",
        "solutionSteps": [
          {
            "explanation": "From successive differentiation: \\(y'''' = \\cos x = y\\).",
            "workingOut": "\\(y'''' = y\\)",
            "graphData": null
          },
          {
            "explanation": "If two functions are equal for all \\(x\\) in the domain, their graphs coincide — they are identical.",
            "workingOut": "\\(\\text{graphs identical}\\)",
            "graphData": null
          },
          {
            "explanation": "This is the four-step cycle of differentiating sine/cosine: after four derivatives you return to the original function.",
            "workingOut": "\\(\\text{4-step differentiation cycle}\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: the graphs of \\(y\\) and \\(y''''\\) are identical.",
            "workingOut": "\\(\\text{identical graphs}\\)",
            "graphData": null
          }
        ],
        "graphData": null,
        "requiresManualGrading": false
      },
      {
        "id": "y12a-6b-q14d_i",
        "type": "multiple_choice",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "Which of \\(y = e^{x}\\), \\(y = e^{-x}\\), \\(y = \\sin x\\) and \\(y = x^{n}\\) (\\(n\\) a positive integer) satisfy \\(y' = y\\)?",
        "opts": [
          "\\(y = e^{-x}\\) only",
          "\\(y = \\sin x\\) only",
          "\\(y = e^{x}\\) only",
          "\\(y = e^{x}\\) and \\(y = e^{-x}\\)"
        ],
        "options": [
          {
            "text": "\\(y = e^{-x}\\) only",
            "imageUrl": null
          },
          {
            "text": "\\(y = \\sin x\\) only",
            "imageUrl": null
          },
          {
            "text": "\\(y = e^{x}\\) only",
            "imageUrl": null
          },
          {
            "text": "\\(y = e^{x}\\) and \\(y = e^{-x}\\)",
            "imageUrl": null
          }
        ],
        "a": 2,
        "answer": "2",
        "hint": "Use successive differentiation of sine and cosine, and compare each derivative with the original function.",
        "solution": "The correct answer is \\(y = e^{x}\\) only.",
        "solutionSteps": [
          {
            "explanation": "Condition: \\(y' = y\\). Test each candidate by differentiating.",
            "workingOut": "\\(y' = y\\)",
            "graphData": null
          },
          {
            "explanation": "For \\(y = e^{x}\\): \\(y' = e^{x} = y\\). Satisfies.",
            "workingOut": "\\(e^{x}:\\checkmark\\)",
            "graphData": null
          },
          {
            "explanation": "For \\(y = e^{-x}\\): \\(y' = -e^{-x} = -y \\neq y\\) (unless \\(y = 0\\)). Does not satisfy.",
            "workingOut": "\\(e^{-x}:\\times\\)",
            "graphData": null
          },
          {
            "explanation": "For \\(y = \\sin x\\): \\(y' = \\cos x \\neq \\sin x\\) in general. For \\(y = x^{n}\\): \\(y' = n x^{n-1} \\neq x^{n}\\) in general.",
            "workingOut": "\\(\\sin x,\\ x^{n}:\\times\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: only \\(y = e^{x}\\).",
            "workingOut": "\\(y = e^{x}\\ \\text{only}\\)",
            "graphData": null
          }
        ],
        "graphData": null,
        "requiresManualGrading": false
      },
      {
        "id": "y12a-6b-q14d_ii",
        "type": "multiple_choice",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "Which of \\(y = e^{x}\\), \\(y = e^{-x}\\), \\(y = \\sin x\\) and \\(y = x^{n}\\) satisfy \\(y'' = y\\)?",
        "opts": [
          "\\(y = e^{x}\\) only",
          "\\(y = e^{-x}\\) only",
          "\\(y = e^{x}\\) and \\(y = \\sin x\\)",
          "\\(y = e^{x}\\) and \\(y = e^{-x}\\)"
        ],
        "options": [
          {
            "text": "\\(y = e^{x}\\) only",
            "imageUrl": null
          },
          {
            "text": "\\(y = e^{-x}\\) only",
            "imageUrl": null
          },
          {
            "text": "\\(y = e^{x}\\) and \\(y = \\sin x\\)",
            "imageUrl": null
          },
          {
            "text": "\\(y = e^{x}\\) and \\(y = e^{-x}\\)",
            "imageUrl": null
          }
        ],
        "a": 3,
        "answer": "3",
        "hint": "Use successive differentiation of sine and cosine, and compare each derivative with the original function.",
        "solution": "The correct answer is \\(y = e^{x}\\) and \\(y = e^{-x}\\).",
        "solutionSteps": [
          {
            "explanation": "Condition: \\(y'' = y\\). Differentiate each candidate twice.",
            "workingOut": "\\(y'' = y\\)",
            "graphData": null
          },
          {
            "explanation": "For \\(y = e^{x}\\): \\(y' = e^{x}\\), \\(y'' = e^{x} = y\\). Satisfies.",
            "workingOut": "\\(e^{x}:\\checkmark\\)",
            "graphData": null
          },
          {
            "explanation": "For \\(y = e^{-x}\\): \\(y' = -e^{-x}\\), \\(y'' = e^{-x} = y\\). Satisfies.",
            "workingOut": "\\(e^{-x}:\\checkmark\\)",
            "graphData": null
          },
          {
            "explanation": "For \\(y = \\sin x\\): \\(y' = \\cos x\\), \\(y'' = -\\sin x = -y \\neq y\\). Does not satisfy. Powers \\(x^{n}\\) fail in general.",
            "workingOut": "\\(\\sin x,\\ x^{n}:\\times\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: \\(y = e^{x}\\) and \\(y = e^{-x}\\).",
            "workingOut": "\\(y = e^{x}\\ \\text{and}\\ y = e^{-x}\\)",
            "graphData": null
          }
        ],
        "graphData": null,
        "requiresManualGrading": false
      },
      {
        "id": "y12a-6b-q14d_iii",
        "type": "multiple_choice",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "Which of \\(y = e^{x}\\), \\(y = e^{-x}\\), \\(y = \\sin x\\) and \\(y = x^{n}\\) satisfy \\(y''' = y\\)?",
        "opts": [
          "\\(y = e^{-x}\\) only",
          "\\(y = \\sin x\\) only",
          "\\(y = e^{x}\\) only",
          "none of these"
        ],
        "options": [
          {
            "text": "\\(y = e^{-x}\\) only",
            "imageUrl": null
          },
          {
            "text": "\\(y = \\sin x\\) only",
            "imageUrl": null
          },
          {
            "text": "\\(y = e^{x}\\) only",
            "imageUrl": null
          },
          {
            "text": "none of these",
            "imageUrl": null
          }
        ],
        "a": 2,
        "answer": "2",
        "hint": "Use successive differentiation of sine and cosine, and compare each derivative with the original function.",
        "solution": "The correct answer is \\(y = e^{x}\\) only.",
        "solutionSteps": [
          {
            "explanation": "Condition: \\(y''' = y\\). Differentiate three times.",
            "workingOut": "\\(y''' = y\\)",
            "graphData": null
          },
          {
            "explanation": "For \\(y = e^{x}\\): every derivative is still \\(e^{x}\\), so \\(y''' = e^{x} = y\\). Satisfies.",
            "workingOut": "\\(e^{x}:\\checkmark\\)",
            "graphData": null
          },
          {
            "explanation": "For \\(y = e^{-x}\\): \\(y' = -e^{-x}\\), \\(y'' = e^{-x}\\), \\(y''' = -e^{-x} = -y \\neq y\\). Fails.",
            "workingOut": "\\(e^{-x}:\\times\\)",
            "graphData": null
          },
          {
            "explanation": "For \\(y = \\sin x\\): \\(y' = \\cos x\\), \\(y'' = -\\sin x\\), \\(y''' = -\\cos x \\neq \\sin x\\). Fails. Powers fail in general.",
            "workingOut": "\\(\\sin x,\\ x^{n}:\\times\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: only \\(y = e^{x}\\).",
            "workingOut": "\\(y = e^{x}\\ \\text{only}\\)",
            "graphData": null
          }
        ],
        "graphData": null,
        "requiresManualGrading": false
      },
      {
        "id": "y12a-6b-q14d_iv",
        "type": "multiple_choice",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "Which of \\(y = e^{x}\\), \\(y = e^{-x}\\), \\(y = \\sin x\\) and \\(y = x^{n}\\) satisfy \\(y'''' = y\\)?",
        "opts": [
          "\\(y = e^{x}\\) only",
          "\\(y = e^{x}\\) and \\(y = e^{-x}\\) only",
          "\\(y = e^{x}\\) and \\(y = \\sin x\\) only",
          "\\(y = e^{x},\\ y = e^{-x}\\) and \\(y = \\sin x\\)"
        ],
        "options": [
          {
            "text": "\\(y = e^{x}\\) only",
            "imageUrl": null
          },
          {
            "text": "\\(y = e^{x}\\) and \\(y = e^{-x}\\) only",
            "imageUrl": null
          },
          {
            "text": "\\(y = e^{x}\\) and \\(y = \\sin x\\) only",
            "imageUrl": null
          },
          {
            "text": "\\(y = e^{x},\\ y = e^{-x}\\) and \\(y = \\sin x\\)",
            "imageUrl": null
          }
        ],
        "a": 3,
        "answer": "3",
        "hint": "Use successive differentiation of sine and cosine, and compare each derivative with the original function.",
        "solution": "The correct answer is \\(y = e^{x},\\ y = e^{-x}\\) and \\(y = \\sin x\\).",
        "solutionSteps": [
          {
            "explanation": "Condition: \\(y'''' = y\\) (fourth derivative equals the function).",
            "workingOut": "\\(y'''' = y\\)",
            "graphData": null
          },
          {
            "explanation": "For \\(y = e^{x}\\): all derivatives equal \\(e^{x}\\), so \\(y'''' = y\\). Satisfies.",
            "workingOut": "\\(e^{x}:\\checkmark\\)",
            "graphData": null
          },
          {
            "explanation": "For \\(y = e^{-x}\\): derivatives cycle every 2 with a sign, but the fourth derivative returns to \\(e^{-x}\\). So \\(y'''' = y\\). Satisfies.",
            "workingOut": "\\(e^{-x}:\\checkmark\\)",
            "graphData": null
          },
          {
            "explanation": "For \\(y = \\sin x\\): the derivatives cycle every 4 steps and \\(y'''' = \\sin x = y\\). Satisfies. For \\(x^{n}\\), the fourth derivative is not equal to \\(x^{n}\\) in general.",
            "workingOut": "\\(\\sin x:\\checkmark;\\ x^{n}:\\times\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: \\(y = e^{x}\\), \\(y = e^{-x}\\) and \\(y = \\sin x\\).",
            "workingOut": "\\(e^{x},\\ e^{-x},\\ \\sin x\\)",
            "graphData": null
          }
        ],
        "graphData": null,
        "requiresManualGrading": false
      }
    ],
    "isActive": true
  },
  {
    "id": "y12a-6b-q16a",
    "topicId": "y12a-6B",
    "chapterId": "y12a-6",
    "c": "6B",
    "t": "Differentiating the trigonometric functions",
    "origin": "seed",
    "isNew": true,
    "requiresManualGrading": false,
    "type": "multi_part",
    "difficulty": "hard",
    "timeLimit": 360,
    "question": "Let \\(y = e^{x}\\sin x\\).",
    "answer": "",
    "hint": "Use the product rule for \\(y'\\) and \\(y''\\), then substitute into the left-hand side of the differential equation.",
    "solution": "",
    "solutionSteps": [],
    "graphData": null,
    "subQuestions": [
      {
        "id": "y12a-6b-q16a_1",
        "type": "multiple_choice",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "Find \\(y'\\) for \\(y = e^{x}\\sin x\\).",
        "opts": [
          "\\(e^{x}(\\cos x - \\sin x)\\)",
          "\\(e^{x}(\\sin x + \\cos x)\\)",
          "\\(e^{x}(\\sin x - \\cos x)\\)",
          "\\(2e^{x}\\sin x\\)"
        ],
        "options": [
          {
            "text": "\\(e^{x}(\\cos x - \\sin x)\\)",
            "imageUrl": null
          },
          {
            "text": "\\(e^{x}(\\sin x + \\cos x)\\)",
            "imageUrl": null
          },
          {
            "text": "\\(e^{x}(\\sin x - \\cos x)\\)",
            "imageUrl": null
          },
          {
            "text": "\\(2e^{x}\\sin x\\)",
            "imageUrl": null
          }
        ],
        "a": 1,
        "answer": "1",
        "hint": "Product rule: \\((uv)' = u'v + uv'\\) with \\(u = e^{x}\\) and \\(v = \\sin x\\).",
        "solution": "The correct answer is \\(e^{x}(\\sin x + \\cos x)\\).",
        "solutionSteps": [
          {
            "explanation": "Given: \\(y = e^{x}\\sin x\\). Strategy: product rule with \\(u = e^{x}\\) and \\(v = \\sin x\\).",
            "workingOut": "\\(y = e^{x}\\sin x\\)",
            "graphData": null
          },
          {
            "explanation": "Differentiate each factor: \\(u' = e^{x}\\) and \\(v' = \\cos x\\).",
            "workingOut": "\\(u' = e^{x},\\quad v' = \\cos x\\)",
            "graphData": null
          },
          {
            "explanation": "Product rule: \\(y' = u'v + uv' = e^{x}\\sin x + e^{x}\\cos x\\).",
            "workingOut": "\\(y' = e^{x}\\sin x + e^{x}\\cos x\\)",
            "graphData": null
          },
          {
            "explanation": "Factor out the common \\(e^{x}\\): \\(y' = e^{x}(\\sin x + \\cos x)\\). A common slip is a sign error on the cosine term, or forgetting one of the two product-rule terms.",
            "workingOut": "\\(y' = e^{x}(\\sin x + \\cos x)\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: \\(e^{x}(\\sin x + \\cos x)\\).",
            "workingOut": "\\(e^{x}(\\sin x + \\cos x)\\)",
            "graphData": null
          }
        ],
        "graphData": null,
        "requiresManualGrading": false
      },
      {
        "id": "y12a-6b-q16a_2",
        "type": "multiple_choice",
        "difficulty": "medium",
        "timeLimit": 150,
        "question": "Find \\(y''\\) for \\(y = e^{x}\\sin x\\).",
        "opts": [
          "\\(-2e^{x}\\cos x\\)",
          "\\(2e^{x}\\sin x\\)",
          "\\(2e^{x}\\cos x\\)",
          "\\(e^{x}(\\sin x + \\cos x)\\)"
        ],
        "options": [
          {
            "text": "\\(-2e^{x}\\cos x\\)",
            "imageUrl": null
          },
          {
            "text": "\\(2e^{x}\\sin x\\)",
            "imageUrl": null
          },
          {
            "text": "\\(2e^{x}\\cos x\\)",
            "imageUrl": null
          },
          {
            "text": "\\(e^{x}(\\sin x + \\cos x)\\)",
            "imageUrl": null
          }
        ],
        "a": 2,
        "answer": "2",
        "hint": "Differentiate \\(y' = e^{x}(\\sin x + \\cos x)\\) using the product rule again.",
        "solution": "The correct answer is \\(2e^{x}\\cos x\\).",
        "solutionSteps": [
          {
            "explanation": "From the previous part: \\(y' = e^{x}(\\sin x + \\cos x)\\). Strategy: product rule again to find \\(y''\\).",
            "workingOut": "\\(y' = e^{x}(\\sin x + \\cos x)\\)",
            "graphData": null
          },
          {
            "explanation": "Write \\(y' = e^{x}\\cdot w\\) with \\(w = \\sin x + \\cos x\\). Then \\(w' = \\cos x - \\sin x\\).",
            "workingOut": "\\(w = \\sin x + \\cos x,\\quad w' = \\cos x - \\sin x\\)",
            "graphData": null
          },
          {
            "explanation": "Product rule: \\(y'' = e^{x}\\,w + e^{x}\\,w' = e^{x}\\bigl[(\\sin x + \\cos x) + (\\cos x - \\sin x)\\bigr]\\).",
            "workingOut": "\\(y'' = e^{x}\\bigl[\\sin x + \\cos x + \\cos x - \\sin x\\bigr]\\)",
            "graphData": null
          },
          {
            "explanation": "Simplify inside the brackets: \\(\\sin x - \\sin x + \\cos x + \\cos x = 2\\cos x\\).",
            "workingOut": "\\(y'' = e^{x}\\cdot 2\\cos x\\)",
            "graphData": null
          },
          {
            "explanation": "Therefore \\(y'' = 2e^{x}\\cos x\\). A common slip is dropping a sign when differentiating \\(\\cos x\\), or forgetting the product rule on the exponential factor.",
            "workingOut": "\\(y'' = 2e^{x}\\cos x\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: \\(2e^{x}\\cos x\\).",
            "workingOut": "\\(2e^{x}\\cos x\\)",
            "graphData": null
          }
        ],
        "graphData": null,
        "requiresManualGrading": false
      },
      {
        "id": "y12a-6b-q16a_3",
        "type": "multiple_choice",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "Given \\(y = e^{x}\\sin x\\) with \\(y' = e^{x}(\\sin x + \\cos x)\\) and \\(y'' = 2e^{x}\\cos x\\), which calculation correctly shows that \\(y'' - 2y' + 2y = 0\\)?",
        "opts": [
          "\\(2e^{x}\\cos x - 2e^{x}(\\sin x + \\cos x) + 2e^{x}\\sin x = 2e^{x}\\cos x - 2e^{x}\\sin x - 2e^{x}\\cos x + 2e^{x}\\sin x = 0\\)",
          "\\(2e^{x}\\cos x - 2e^{x}(\\sin x + \\cos x) + 2e^{x}\\sin x = 4e^{x}\\cos x \\neq 0\\)",
          "\\(2e^{x}\\cos x + 2e^{x}(\\sin x + \\cos x) - 2e^{x}\\sin x = 0\\) (wrong signs on the middle term)",
          "\\(y'' - 2y' + 2y = e^{x}\\sin x \\neq 0\\)"
        ],
        "options": [
          {
            "text": "\\(2e^{x}\\cos x - 2e^{x}(\\sin x + \\cos x) + 2e^{x}\\sin x = 2e^{x}\\cos x - 2e^{x}\\sin x - 2e^{x}\\cos x + 2e^{x}\\sin x = 0\\)",
            "imageUrl": null
          },
          {
            "text": "\\(2e^{x}\\cos x - 2e^{x}(\\sin x + \\cos x) + 2e^{x}\\sin x = 4e^{x}\\cos x \\neq 0\\)",
            "imageUrl": null
          },
          {
            "text": "\\(2e^{x}\\cos x + 2e^{x}(\\sin x + \\cos x) - 2e^{x}\\sin x = 0\\) (wrong signs on the middle term)",
            "imageUrl": null
          },
          {
            "text": "\\(y'' - 2y' + 2y = e^{x}\\sin x \\neq 0\\)",
            "imageUrl": null
          }
        ],
        "a": 0,
        "answer": "0",
        "hint": "Substitute the expressions for \\(y', y''\\) and \\(y\\), expand, and cancel like terms.",
        "solution": "The correct answer is \\(2e^{x}\\cos x - 2e^{x}(\\sin x + \\cos x) + 2e^{x}\\sin x = 2e^{x}\\cos x - 2e^{x}\\sin x - 2e^{x}\\cos x + 2e^{x}\\sin x = 0\\).",
        "solutionSteps": [
          {
            "explanation": "Goal: show \\(y'' - 2y' + 2y = 0\\) for \\(y = e^{x}\\sin x\\). Use the expressions already found.",
            "workingOut": "\\(y = e^{x}\\sin x,\\quad y' = e^{x}(\\sin x + \\cos x),\\quad y'' = 2e^{x}\\cos x\\)",
            "graphData": null
          },
          {
            "explanation": "Substitute into the left-hand side: \\(y'' - 2y' + 2y = 2e^{x}\\cos x - 2\\cdot e^{x}(\\sin x + \\cos x) + 2\\cdot e^{x}\\sin x\\).",
            "workingOut": "\\(2e^{x}\\cos x - 2e^{x}(\\sin x + \\cos x) + 2e^{x}\\sin x\\)",
            "graphData": null
          },
          {
            "explanation": "Expand the middle term: \\(-2e^{x}(\\sin x + \\cos x) = -2e^{x}\\sin x - 2e^{x}\\cos x\\).",
            "workingOut": "\\(2e^{x}\\cos x - 2e^{x}\\sin x - 2e^{x}\\cos x + 2e^{x}\\sin x\\)",
            "graphData": null
          },
          {
            "explanation": "Group like terms: \\((2e^{x}\\cos x - 2e^{x}\\cos x) + (-2e^{x}\\sin x + 2e^{x}\\sin x) = 0 + 0 = 0\\).",
            "workingOut": "\\(0\\)",
            "graphData": null
          },
          {
            "explanation": "Therefore \\(y'' - 2y' + 2y = 0\\), as required. A common slip is a sign error when expanding \\(-2y'\\).",
            "workingOut": "\\(y'' - 2y' + 2y = 0\\)",
            "graphData": null
          }
        ],
        "graphData": null,
        "requiresManualGrading": false
      }
    ],
    "isActive": true
  },
  {
    "id": "y12a-6b-q16b",
    "topicId": "y12a-6B",
    "chapterId": "y12a-6",
    "c": "6B",
    "t": "Differentiating the trigonometric functions",
    "origin": "seed",
    "isNew": true,
    "requiresManualGrading": false,
    "type": "multi_part",
    "difficulty": "hard",
    "timeLimit": 360,
    "question": "Let \\(y = e^{-x}\\cos x\\).",
    "answer": "",
    "hint": "Use the product rule for \\(y'\\) and \\(y''\\), then substitute into the left-hand side of the differential equation.",
    "solution": "",
    "solutionSteps": [],
    "graphData": null,
    "subQuestions": [
      {
        "id": "y12a-6b-q16b_1",
        "type": "multiple_choice",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "Find \\(y'\\) for \\(y = e^{-x}\\cos x\\).",
        "opts": [
          "\\(e^{-x}(\\cos x - \\sin x)\\)",
          "\\(e^{-x}(\\sin x - \\cos x)\\)",
          "\\(-e^{-x}(\\cos x + \\sin x)\\)",
          "\\(-e^{-x}(\\cos x - \\sin x)\\)"
        ],
        "options": [
          {
            "text": "\\(e^{-x}(\\cos x - \\sin x)\\)",
            "imageUrl": null
          },
          {
            "text": "\\(e^{-x}(\\sin x - \\cos x)\\)",
            "imageUrl": null
          },
          {
            "text": "\\(-e^{-x}(\\cos x + \\sin x)\\)",
            "imageUrl": null
          },
          {
            "text": "\\(-e^{-x}(\\cos x - \\sin x)\\)",
            "imageUrl": null
          }
        ],
        "a": 2,
        "answer": "2",
        "hint": "Product rule with \\(u = e^{-x}\\) and \\(v = \\cos x\\). Remember \\(\\dfrac{d}{dx}e^{-x} = -e^{-x}\\).",
        "solution": "The correct answer is \\(-e^{-x}(\\cos x + \\sin x)\\).",
        "solutionSteps": [
          {
            "explanation": "Given: \\(y = e^{-x}\\cos x\\). Strategy: product rule with \\(u = e^{-x}\\) and \\(v = \\cos x\\).",
            "workingOut": "\\(y = e^{-x}\\cos x\\)",
            "graphData": null
          },
          {
            "explanation": "Differentiate each factor: \\(u' = -e^{-x}\\) and \\(v' = -\\sin x\\).",
            "workingOut": "\\(u' = -e^{-x},\\quad v' = -\\sin x\\)",
            "graphData": null
          },
          {
            "explanation": "Product rule: \\(y' = u'v + uv' = (-e^{-x})\\cos x + e^{-x}(-\\sin x) = -e^{-x}\\cos x - e^{-x}\\sin x\\).",
            "workingOut": "\\(y' = -e^{-x}\\cos x - e^{-x}\\sin x\\)",
            "graphData": null
          },
          {
            "explanation": "Factor out \\(-e^{-x}\\): \\(y' = -e^{-x}(\\cos x + \\sin x)\\). A common slip is missing a minus from either the exponential or the cosine derivative.",
            "workingOut": "\\(y' = -e^{-x}(\\cos x + \\sin x)\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: \\(-e^{-x}(\\cos x + \\sin x)\\).",
            "workingOut": "\\(-e^{-x}(\\cos x + \\sin x)\\)",
            "graphData": null
          }
        ],
        "graphData": null,
        "requiresManualGrading": false
      },
      {
        "id": "y12a-6b-q16b_2",
        "type": "multiple_choice",
        "difficulty": "medium",
        "timeLimit": 150,
        "question": "Find \\(y''\\) for \\(y = e^{-x}\\cos x\\).",
        "opts": [
          "\\(-2e^{-x}\\sin x\\)",
          "\\(2e^{-x}\\cos x\\)",
          "\\(-2e^{-x}\\cos x\\)",
          "\\(2e^{-x}\\sin x\\)"
        ],
        "options": [
          {
            "text": "\\(-2e^{-x}\\sin x\\)",
            "imageUrl": null
          },
          {
            "text": "\\(2e^{-x}\\cos x\\)",
            "imageUrl": null
          },
          {
            "text": "\\(-2e^{-x}\\cos x\\)",
            "imageUrl": null
          },
          {
            "text": "\\(2e^{-x}\\sin x\\)",
            "imageUrl": null
          }
        ],
        "a": 3,
        "answer": "3",
        "hint": "Differentiate \\(y' = -e^{-x}(\\cos x + \\sin x)\\) using the product rule again.",
        "solution": "The correct answer is \\(2e^{-x}\\sin x\\).",
        "solutionSteps": [
          {
            "explanation": "From the previous part: \\(y' = -e^{-x}(\\cos x + \\sin x)\\). Strategy: product rule to find \\(y''\\).",
            "workingOut": "\\(y' = -e^{-x}(\\cos x + \\sin x)\\)",
            "graphData": null
          },
          {
            "explanation": "Write \\(y' = (-e^{-x})\\cdot w\\) with \\(w = \\cos x + \\sin x\\). Then \\(w' = -\\sin x + \\cos x = \\cos x - \\sin x\\).",
            "workingOut": "\\(w = \\cos x + \\sin x,\\quad w' = \\cos x - \\sin x\\)",
            "graphData": null
          },
          {
            "explanation": "Product rule on \\((-e^{-x})w\\): derivative of \\(-e^{-x}\\) is \\(e^{-x}\\), so\n\\(y'' = e^{-x}\\,w + (-e^{-x})\\,w' = e^{-x}\\bigl[w - w'\\bigr]\\).",
            "workingOut": "\\(y'' = e^{-x}\\bigl[(\\cos x + \\sin x) - (\\cos x - \\sin x)\\bigr]\\)",
            "graphData": null
          },
          {
            "explanation": "Simplify inside: \\(\\cos x + \\sin x - \\cos x + \\sin x = 2\\sin x\\).",
            "workingOut": "\\(y'' = e^{-x}\\cdot 2\\sin x\\)",
            "graphData": null
          },
          {
            "explanation": "Therefore \\(y'' = 2e^{-x}\\sin x\\). A common slip is a sign error when differentiating \\(-e^{-x}\\) or \\(w\\).",
            "workingOut": "\\(y'' = 2e^{-x}\\sin x\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: \\(2e^{-x}\\sin x\\).",
            "workingOut": "\\(2e^{-x}\\sin x\\)",
            "graphData": null
          }
        ],
        "graphData": null,
        "requiresManualGrading": false
      },
      {
        "id": "y12a-6b-q16b_3",
        "type": "multiple_choice",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "Given \\(y = e^{-x}\\cos x\\) with \\(y' = -e^{-x}(\\cos x + \\sin x)\\) and \\(y'' = 2e^{-x}\\sin x\\), which calculation correctly shows that \\(y'' + 2y' + 2y = 0\\)?",
        "opts": [
          "\\(2e^{-x}\\sin x + 2\\bigl(-e^{-x}(\\cos x + \\sin x)\\bigr) + 2e^{-x}\\cos x = 2e^{-x}\\sin x - 2e^{-x}\\cos x - 2e^{-x}\\sin x + 2e^{-x}\\cos x = 0\\)",
          "\\(2e^{-x}\\sin x + 2\\bigl(-e^{-x}(\\cos x + \\sin x)\\bigr) + 2e^{-x}\\cos x = 4e^{-x}\\sin x \\neq 0\\)",
          "\\(2e^{-x}\\sin x - 2\\bigl(-e^{-x}(\\cos x + \\sin x)\\bigr) + 2e^{-x}\\cos x = 0\\) (wrong sign on the middle term)",
          "\\(y'' + 2y' + 2y = e^{-x}\\cos x \\neq 0\\)"
        ],
        "options": [
          {
            "text": "\\(2e^{-x}\\sin x + 2\\bigl(-e^{-x}(\\cos x + \\sin x)\\bigr) + 2e^{-x}\\cos x = 2e^{-x}\\sin x - 2e^{-x}\\cos x - 2e^{-x}\\sin x + 2e^{-x}\\cos x = 0\\)",
            "imageUrl": null
          },
          {
            "text": "\\(2e^{-x}\\sin x + 2\\bigl(-e^{-x}(\\cos x + \\sin x)\\bigr) + 2e^{-x}\\cos x = 4e^{-x}\\sin x \\neq 0\\)",
            "imageUrl": null
          },
          {
            "text": "\\(2e^{-x}\\sin x - 2\\bigl(-e^{-x}(\\cos x + \\sin x)\\bigr) + 2e^{-x}\\cos x = 0\\) (wrong sign on the middle term)",
            "imageUrl": null
          },
          {
            "text": "\\(y'' + 2y' + 2y = e^{-x}\\cos x \\neq 0\\)",
            "imageUrl": null
          }
        ],
        "a": 0,
        "answer": "0",
        "hint": "Substitute the expressions for \\(y'', y'\\) and \\(y\\), expand, and cancel like terms.",
        "solution": "The correct answer is \\(2e^{-x}\\sin x + 2\\bigl(-e^{-x}(\\cos x + \\sin x)\\bigr) + 2e^{-x}\\cos x = 2e^{-x}\\sin x - 2e^{-x}\\cos x - 2e^{-x}\\sin x + 2e^{-x}\\cos x = 0\\).",
        "solutionSteps": [
          {
            "explanation": "Goal: show \\(y'' + 2y' + 2y = 0\\) for \\(y = e^{-x}\\cos x\\). Use the expressions already found.",
            "workingOut": "\\(y = e^{-x}\\cos x,\\quad y' = -e^{-x}(\\cos x + \\sin x),\\quad y'' = 2e^{-x}\\sin x\\)",
            "graphData": null
          },
          {
            "explanation": "Substitute: \\(y'' + 2y' + 2y = 2e^{-x}\\sin x + 2\\bigl(-e^{-x}(\\cos x + \\sin x)\\bigr) + 2e^{-x}\\cos x\\).",
            "workingOut": "\\(2e^{-x}\\sin x - 2e^{-x}(\\cos x + \\sin x) + 2e^{-x}\\cos x\\)",
            "graphData": null
          },
          {
            "explanation": "Expand the middle term: \\(-2e^{-x}(\\cos x + \\sin x) = -2e^{-x}\\cos x - 2e^{-x}\\sin x\\).",
            "workingOut": "\\(2e^{-x}\\sin x - 2e^{-x}\\cos x - 2e^{-x}\\sin x + 2e^{-x}\\cos x\\)",
            "graphData": null
          },
          {
            "explanation": "Group like terms: \\((2e^{-x}\\sin x - 2e^{-x}\\sin x) + (-2e^{-x}\\cos x + 2e^{-x}\\cos x) = 0 + 0 = 0\\).",
            "workingOut": "\\(0\\)",
            "graphData": null
          },
          {
            "explanation": "Therefore \\(y'' + 2y' + 2y = 0\\), as required. A common slip is a sign error when expanding \\(2y'\\).",
            "workingOut": "\\(y'' + 2y' + 2y = 0\\)",
            "graphData": null
          }
        ],
        "graphData": null,
        "requiresManualGrading": false
      }
    ],
    "isActive": true
  },
  {
    "id": "y12a-6b-q17",
    "topicId": "y12a-6B",
    "chapterId": "y12a-6",
    "c": "6B",
    "t": "Differentiating the trigonometric functions",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "type": "multi_part",
    "difficulty": "hard",
    "timeLimit": 300,
    "question": "Consider the function \\(y = \\dfrac{1}{3}\\tan^{3}x - \\tan x + x\\).",
    "answer": "",
    "hint": "Differentiate term by term, then simplify using \\(\\sec^{2}x = 1 + \\tan^{2}x\\).",
    "solution": "",
    "solutionSteps": [],
    "graphData": null,
    "subQuestions": [
      {
        "id": "y12a-6b-q17a",
        "type": "multiple_choice",
        "difficulty": "medium",
        "timeLimit": 150,
        "question": "Let \\(y = \\dfrac{1}{3}\\tan^{3}x - \\tan x + x\\). Which expression equals \\(\\dfrac{dy}{dx}\\)?",
        "opts": [
          "\\(\\tan^{2}x\\,\\sec^{2}x - \\sec^{2}x + 1\\)",
          "\\(\\tan^{2}x\\,\\sec^{2}x + \\sec^{2}x + 1\\)",
          "\\(\\tan^{3}x\\,\\sec^{2}x - \\sec^{2}x\\)",
          "\\(\\tan^{2}x\\,\\sec x - \\sec^{2}x + 1\\)"
        ],
        "a": 0,
        "answer": "0",
        "hint": "Differentiate term by term. For \\(\\tan^{3}x\\) use the chain rule.",
        "solution": "The correct answer is \\(\\tan^{2}x\\,\\sec^{2}x - \\sec^{2}x + 1\\).",
        "solutionSteps": [
          {
            "explanation": "Given: \\(y = \\dfrac{1}{3}\\tan^{3}x - \\tan x + x\\). Strategy: differentiate term by term.",
            "workingOut": "\\(y = \\dfrac{1}{3}\\tan^{3}x - \\tan x + x\\)",
            "graphData": null
          },
          {
            "explanation": "First term: \\(\\dfrac{d}{dx}\\!\\left(\\dfrac{1}{3}\\tan^{3}x\\right) = \\tan^{2}x\\,\\sec^{2}x\\).",
            "workingOut": "\\(\\tan^{2}x\\,\\sec^{2}x\\)",
            "graphData": null
          },
          {
            "explanation": "Second: \\(\\dfrac{d}{dx}(-\\tan x) = -\\sec^{2}x\\). Third: \\(\\dfrac{d}{dx}(x) = 1\\).",
            "workingOut": "\\(-\\sec^{2}x + 1\\)",
            "graphData": null
          },
          {
            "explanation": "Combine: \\(\\dfrac{dy}{dx} = \\tan^{2}x\\,\\sec^{2}x - \\sec^{2}x + 1\\).",
            "workingOut": "\\(\\dfrac{dy}{dx} = \\tan^{2}x\\,\\sec^{2}x - \\sec^{2}x + 1\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: \\(\\tan^{2}x\\,\\sec^{2}x - \\sec^{2}x + 1\\).",
            "workingOut": "\\(\\tan^{2}x\\,\\sec^{2}x - \\sec^{2}x + 1\\)",
            "graphData": null
          }
        ],
        "graphData": null,
        "requiresManualGrading": false,
        "options": [
          {
            "text": "\\(\\tan^{2}x\\,\\sec^{2}x - \\sec^{2}x + 1\\)",
            "imageUrl": null
          },
          {
            "text": "\\(\\tan^{2}x\\,\\sec^{2}x + \\sec^{2}x + 1\\)",
            "imageUrl": null
          },
          {
            "text": "\\(\\tan^{3}x\\,\\sec^{2}x - \\sec^{2}x\\)",
            "imageUrl": null
          },
          {
            "text": "\\(\\tan^{2}x\\,\\sec x - \\sec^{2}x + 1\\)",
            "imageUrl": null
          }
        ]
      },
      {
        "id": "y12a-6b-q17b",
        "type": "multiple_choice",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "Hence, using \\(\\sec^{2}x = 1 + \\tan^{2}x\\), simplify \\(\\dfrac{dy}{dx}\\) for \\(y = \\dfrac{1}{3}\\tan^{3}x - \\tan x + x\\).",
        "opts": [
          "\\(\\tan^{4}x\\)",
          "\\(\\tan^{2}x\\)",
          "\\(\\sec^{4}x\\)",
          "\\(\\tan^{2}x\\,\\sec^{2}x\\)"
        ],
        "a": 0,
        "answer": "0",
        "hint": "Start from part (a) and replace every \\(\\sec^{2}x\\).",
        "solution": "The correct answer is \\(\\tan^{4}x\\).",
        "solutionSteps": [
          {
            "explanation": "From part (a): \\(\\dfrac{dy}{dx} = \\tan^{2}x\\,\\sec^{2}x - \\sec^{2}x + 1\\).",
            "workingOut": "\\(\\dfrac{dy}{dx} = \\tan^{2}x\\,\\sec^{2}x - \\sec^{2}x + 1\\)",
            "graphData": null
          },
          {
            "explanation": "Replace \\(\\sec^{2}x\\) by \\(1+\\tan^{2}x\\): \\(\\tan^{2}x(1+\\tan^{2}x)-(1+\\tan^{2}x)+1\\).",
            "workingOut": "\\(\\tan^{2}x + \\tan^{4}x - 1 - \\tan^{2}x + 1\\)",
            "graphData": null
          },
          {
            "explanation": "Simplify: \\(\\tan^{4}x\\).",
            "workingOut": "\\(\\dfrac{dy}{dx} = \\tan^{4}x\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: \\(\\tan^{4}x\\).",
            "workingOut": "\\(\\tan^{4}x\\)",
            "graphData": null
          }
        ],
        "graphData": null,
        "requiresManualGrading": false,
        "options": [
          {
            "text": "\\(\\tan^{4}x\\)",
            "imageUrl": null
          },
          {
            "text": "\\(\\tan^{2}x\\)",
            "imageUrl": null
          },
          {
            "text": "\\(\\sec^{4}x\\)",
            "imageUrl": null
          },
          {
            "text": "\\(\\tan^{2}x\\,\\sec^{2}x\\)",
            "imageUrl": null
          }
        ]
      }
    ],
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6b-q1a",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Use the standard forms to differentiate with respect to \\( x \\): \\( y = \\sin x \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "1",
    "solution": "The correct answer is \\(\\cos x\\).",
    "origin": "seed",
    "isNew": true,
    "graphData": null,
    "isActive": true,
    "title": "Use the standard forms to differentiate ...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 1,
    "opts": [
      "\\(-\\cos x\\)",
      "\\(\\cos x\\)",
      "\\(\\cos x + 1\\)",
      "\\(\\sin x\\)"
    ],
    "hint": "Standard form: \\(\\dfrac{d}{dx}\\sin x = \\cos x\\).",
    "options": [
      {
        "text": "\\(-\\cos x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\cos x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\cos x + 1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\sin x\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = \\sin x\\). Strategy: use the standard derivative of sine.",
        "workingOut": "\\(y = \\sin x\\)",
        "graphData": null
      },
      {
        "explanation": "Standard form: \\(\\dfrac{d}{dx}\\sin x = \\cos x\\).",
        "workingOut": "\\(\\dfrac{d}{dx}\\sin x = \\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(y' = \\cos x\\).",
        "workingOut": "\\(y' = \\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\cos x\\).",
        "workingOut": "\\(\\cos x\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q1b",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Use the standard forms to differentiate with respect to \\( x \\): \\( y = \\cos x \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "1",
    "solution": "The correct answer is \\(-\\sin x\\).",
    "origin": "seed",
    "isNew": true,
    "graphData": null,
    "isActive": true,
    "title": "Use the standard forms to differentiate ...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 1,
    "opts": [
      "\\(--\\sin x\\)",
      "\\(-\\sin x\\)",
      "\\(-\\sin x + 1\\)",
      "\\(\\sin x\\)"
    ],
    "hint": "Standard form: \\(\\dfrac{d}{dx}\\cos x = -\\sin x\\).",
    "options": [
      {
        "text": "\\(--\\sin x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-\\sin x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-\\sin x + 1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\sin x\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = \\cos x\\). Strategy: use the standard derivative of cosine.",
        "workingOut": "\\(y = \\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "Standard form: \\(\\dfrac{d}{dx}\\cos x = -\\sin x\\).",
        "workingOut": "\\(\\dfrac{d}{dx}\\cos x = -\\sin x\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(y' = -\\sin x\\). Watch the minus sign.",
        "workingOut": "\\(y' = -\\sin x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-\\sin x\\).",
        "workingOut": "\\(-\\sin x\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q1c",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Use the standard forms to differentiate with respect to \\( x \\): \\( y = \\tan x \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "1",
    "origin": "seed",
    "isNew": true,
    "graphData": null,
    "isActive": true,
    "title": "Use the standard forms to differentiate ...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 1,
    "opts": [
      "\\(\\sec x\\)",
      "\\(\\sec^{2} x\\)",
      "\\(\\sec^{2} x + 1\\)",
      "\\(\\sec^{4} x\\)"
    ],
    "solution": "The correct answer is \\(\\sec^{2}x\\).",
    "hint": "Standard form: \\(\\dfrac{d}{dx}\\tan x = \\sec^{2}x\\).",
    "options": [
      {
        "text": "\\(\\sec x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\sec^{2} x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\sec^{2} x + 1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\sec^{4} x\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = \\tan x\\). Strategy: use the standard derivative of tangent.",
        "workingOut": "\\(y = \\tan x\\)",
        "graphData": null
      },
      {
        "explanation": "Standard form: \\(\\dfrac{d}{dx}\\tan x = \\sec^{2}x\\). (Equivalently, write \\(\\tan x = \\dfrac{\\sin x}{\\cos x}\\) and use the quotient rule to derive the same result.)",
        "workingOut": "\\(\\dfrac{d}{dx}\\tan x = \\sec^{2}x\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(y' = \\sec^{2}x\\).",
        "workingOut": "\\(y' = \\sec^{2}x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\sec^{2}x\\).",
        "workingOut": "\\(\\sec^{2}x\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q1d",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Use the standard forms to differentiate with respect to \\( x \\): \\( y = 2 \\sin x \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "2",
    "solution": "The correct answer is \\(2\\cos x\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "Use the standard forms to differentiate ...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 2,
    "opts": [
      "\\(-2 \\cos x\\)",
      "\\(2 -\\cos x\\)",
      "\\(2 \\cos x\\)",
      "\\(2 \\sin x\\)"
    ],
    "hint": "Constant multiple rule: \\(\\dfrac{d}{dx}\\bigl(2\\sin x\\bigr) = 2\\cos x\\).",
    "options": [
      {
        "text": "\\(-2 \\cos x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2 -\\cos x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2 \\cos x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2 \\sin x\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = 2\\sin x\\). Strategy: constant multiple of the sine standard form.",
        "workingOut": "\\(y = 2\\sin x\\)",
        "graphData": null
      },
      {
        "explanation": "Standard form: \\(\\dfrac{d}{dx}\\sin x = \\cos x\\). Multiply by the constant 2.",
        "workingOut": "\\(\\dfrac{d}{dx}(2\\sin x) = 2\\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(y' = 2\\cos x\\).",
        "workingOut": "\\(y' = 2\\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(2\\cos x\\).",
        "workingOut": "\\(2\\cos x\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q1e",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Use the standard forms to differentiate with respect to \\( x \\): \\( y = \\sin 2x \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "2",
    "solution": "The correct answer is \\(2\\cos 2x\\).",
    "origin": "seed",
    "isNew": true,
    "graphData": null,
    "isActive": true,
    "title": "Use the standard forms to differentiate ...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 2,
    "opts": [
      "\\(-2 \\cos 2x\\)",
      "\\(2 -\\cos 2x\\)",
      "\\(2 \\cos 2x\\)",
      "\\(2 \\sin 2x\\)"
    ],
    "hint": "Chain rule: \\(\\dfrac{d}{dx}\\sin 2x = \\cos 2x\\cdot 2\\).",
    "options": [
      {
        "text": "\\(-2 \\cos 2x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2 -\\cos 2x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2 \\cos 2x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2 \\sin 2x\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = \\sin 2x\\). Strategy: chain rule with inside \\(u = 2x\\).",
        "workingOut": "\\(y = \\sin 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Write \\(y = \\sin u\\) with \\(u = 2x\\). Then \\(y' = \\cos u\\cdot u'\\) and \\(u' = 2\\).",
        "workingOut": "\\(u = 2x,\\quad u' = 2\\)",
        "graphData": null
      },
      {
        "explanation": "So \\(y' = \\cos 2x\\cdot 2 = 2\\cos 2x\\). A common slip is forgetting the factor 2.",
        "workingOut": "\\(y' = 2\\cos 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(2\\cos 2x\\).",
        "workingOut": "\\(2\\cos 2x\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q1f",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Use the standard forms to differentiate with respect to \\( x \\): \\( y = 3 \\cos x \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "1",
    "solution": "The correct answer is \\(-3\\sin x\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "Use the standard forms to differentiate ...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 1,
    "opts": [
      "\\(-3 -\\sin x\\)",
      "\\(-3 \\sin x\\)",
      "\\(-4 \\sin x\\)",
      "\\(3 \\sin x\\)"
    ],
    "hint": "Constant multiple: \\(\\dfrac{d}{dx}(3\\cos x) = 3(-\\sin x) = -3\\sin x\\).",
    "options": [
      {
        "text": "\\(-3 -\\sin x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-3 \\sin x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-4 \\sin x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3 \\sin x\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = 3\\cos x\\). Strategy: constant multiple of the cosine standard form.",
        "workingOut": "\\(y = 3\\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "Standard form: \\(\\dfrac{d}{dx}\\cos x = -\\sin x\\). Multiply by 3.",
        "workingOut": "\\(\\dfrac{d}{dx}(3\\cos x) = 3(-\\sin x)\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(y' = -3\\sin x\\).",
        "workingOut": "\\(y' = -3\\sin x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-3\\sin x\\).",
        "workingOut": "\\(-3\\sin x\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q1g",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Use the standard forms to differentiate with respect to \\( x \\): \\( y = \\cos 3x \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "1",
    "solution": "The correct answer is \\(-3\\sin 3x\\).",
    "origin": "seed",
    "isNew": true,
    "graphData": null,
    "isActive": true,
    "title": "Use the standard forms to differentiate ...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 1,
    "opts": [
      "\\(-3 -\\sin 3x\\)",
      "\\(-3 \\sin 3x\\)",
      "\\(-4 \\sin 4x\\)",
      "\\(3 \\sin 3x\\)"
    ],
    "hint": "Chain rule: \\(\\dfrac{d}{dx}\\cos 3x = -\\sin 3x\\cdot 3 = -3\\sin 3x\\).",
    "options": [
      {
        "text": "\\(-3 -\\sin 3x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-3 \\sin 3x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-4 \\sin 4x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3 \\sin 3x\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = \\cos 3x\\). Strategy: chain rule with \\(u = 3x\\).",
        "workingOut": "\\(y = \\cos 3x\\)",
        "graphData": null
      },
      {
        "explanation": "Write \\(y = \\cos u\\) with \\(u = 3x\\). Then \\(y' = -\\sin u\\cdot u'\\) and \\(u' = 3\\).",
        "workingOut": "\\(u = 3x,\\quad u' = 3\\)",
        "graphData": null
      },
      {
        "explanation": "So \\(y' = -\\sin 3x\\cdot 3 = -3\\sin 3x\\).",
        "workingOut": "\\(y' = -3\\sin 3x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-3\\sin 3x\\).",
        "workingOut": "\\(-3\\sin 3x\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q1h",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Use the standard forms to differentiate with respect to \\( x \\): \\( y = \\tan 4x \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "1",
    "solution": "The correct answer is \\(4\\sec^{2} 4x\\).",
    "origin": "seed",
    "isNew": true,
    "graphData": null,
    "isActive": true,
    "title": "Use the standard forms to differentiate ...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 1,
    "opts": [
      "\\(-4 \\sec^2 4x\\)",
      "\\(4 \\sec^2 4x\\)",
      "\\(4 \\sec^2 4x + 1\\)",
      "\\(4 \\sec^4 4x\\)"
    ],
    "hint": "Chain rule: \\(\\dfrac{d}{dx}\\tan 4x = \\sec^{2} 4x\\cdot 4\\).",
    "options": [
      {
        "text": "\\(-4 \\sec^2 4x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(4 \\sec^2 4x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(4 \\sec^2 4x + 1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(4 \\sec^4 4x\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = \\tan 4x\\). Strategy: chain rule with \\(u = 4x\\).",
        "workingOut": "\\(y = \\tan 4x\\)",
        "graphData": null
      },
      {
        "explanation": "Write \\(y = \\tan u\\) with \\(u = 4x\\). Then \\(y' = \\sec^{2}u\\cdot u'\\) and \\(u' = 4\\).",
        "workingOut": "\\(u = 4x,\\quad u' = 4\\)",
        "graphData": null
      },
      {
        "explanation": "So \\(y' = \\sec^{2} 4x\\cdot 4 = 4\\sec^{2} 4x\\).",
        "workingOut": "\\(y' = 4\\sec^{2} 4x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(4\\sec^{2} 4x\\).",
        "workingOut": "\\(4\\sec^{2} 4x\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q1i",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Use the standard forms to differentiate with respect to \\( x \\): \\( y = 4 \\tan x \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "1",
    "solution": "The correct answer is \\(4\\sec^{2}x\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "Use the standard forms to differentiate ...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 1,
    "opts": [
      "\\(-4 \\sec^2 x\\)",
      "\\(4 \\sec^2 x\\)",
      "\\(4 \\sec^2 x + 1\\)",
      "\\(4 \\sec^4 x\\)"
    ],
    "hint": "Constant multiple: \\(\\dfrac{d}{dx}(4\\tan x) = 4\\sec^{2}x\\).",
    "options": [
      {
        "text": "\\(-4 \\sec^2 x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(4 \\sec^2 x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(4 \\sec^2 x + 1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(4 \\sec^4 x\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = 4\\tan x\\). Strategy: constant multiple of the tangent standard form.",
        "workingOut": "\\(y = 4\\tan x\\)",
        "graphData": null
      },
      {
        "explanation": "Standard form: \\(\\dfrac{d}{dx}\\tan x = \\sec^{2}x\\). Multiply by 4.",
        "workingOut": "\\(\\dfrac{d}{dx}(4\\tan x) = 4\\sec^{2}x\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(y' = 4\\sec^{2}x\\).",
        "workingOut": "\\(y' = 4\\sec^{2}x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(4\\sec^{2}x\\).",
        "workingOut": "\\(4\\sec^{2}x\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q1j",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Use the standard forms to differentiate with respect to \\( x \\): \\( y = 2 \\sin 3x \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "2",
    "solution": "The correct answer is \\(6\\cos 3x\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "Use the standard forms to differentiate ...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 2,
    "opts": [
      "\\(-6 \\cos 3x\\)",
      "\\(6 -\\cos 3x\\)",
      "\\(6 \\cos 3x\\)",
      "\\(6 \\sin 3x\\)"
    ],
    "hint": "Constant and chain: \\(\\dfrac{d}{dx}(2\\sin 3x) = 2\\cdot\\cos 3x\\cdot 3 = 6\\cos 3x\\).",
    "options": [
      {
        "text": "\\(-6 \\cos 3x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(6 -\\cos 3x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(6 \\cos 3x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(6 \\sin 3x\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = 2\\sin 3x\\). Strategy: constant multiple and chain rule.",
        "workingOut": "\\(y = 2\\sin 3x\\)",
        "graphData": null
      },
      {
        "explanation": "First, \\(\\dfrac{d}{dx}\\sin 3x = \\cos 3x\\cdot 3 = 3\\cos 3x\\) (chain rule with \\(u = 3x\\)).",
        "workingOut": "\\(\\dfrac{d}{dx}\\sin 3x = 3\\cos 3x\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply by the constant 2: \\(y' = 2\\cdot 3\\cos 3x = 6\\cos 3x\\).",
        "workingOut": "\\(y' = 6\\cos 3x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(6\\cos 3x\\).",
        "workingOut": "\\(6\\cos 3x\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q1k",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Use the standard forms to differentiate with respect to \\( x \\): \\( y = 2 \\tan 2x \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "1",
    "solution": "The correct answer is \\(4\\sec^{2} 2x\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "Use the standard forms to differentiate ...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 1,
    "opts": [
      "\\(-4 \\sec^2 2x\\)",
      "\\(4 \\sec^2 2x\\)",
      "\\(4 \\sec^2 2x + 1\\)",
      "\\(4 \\sec^4 4x\\)"
    ],
    "hint": "Constant and chain: \\(\\dfrac{d}{dx}(2\\tan 2x) = 2\\cdot\\sec^{2} 2x\\cdot 2 = 4\\sec^{2} 2x\\).",
    "options": [
      {
        "text": "\\(-4 \\sec^2 2x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(4 \\sec^2 2x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(4 \\sec^2 2x + 1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(4 \\sec^4 4x\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = 2\\tan 2x\\). Strategy: constant multiple and chain rule.",
        "workingOut": "\\(y = 2\\tan 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Inner: \\(\\dfrac{d}{dx}\\tan 2x = \\sec^{2} 2x\\cdot 2 = 2\\sec^{2} 2x\\).",
        "workingOut": "\\(\\dfrac{d}{dx}\\tan 2x = 2\\sec^{2} 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply by 2: \\(y' = 2\\cdot 2\\sec^{2} 2x = 4\\sec^{2} 2x\\).",
        "workingOut": "\\(y' = 4\\sec^{2} 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(4\\sec^{2} 2x\\).",
        "workingOut": "\\(4\\sec^{2} 2x\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q1l",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Use the standard forms to differentiate with respect to \\( x \\): \\( y = 4 \\cos 2x \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "1",
    "solution": "The correct answer is \\(-8\\sin 2x\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "Use the standard forms to differentiate ...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 1,
    "opts": [
      "\\(-8 -\\sin 2x\\)",
      "\\(-8 \\sin 2x\\)",
      "\\(-8 \\sin 4x\\)",
      "\\(8 \\sin 2x\\)"
    ],
    "hint": "Constant and chain: \\(\\dfrac{d}{dx}(4\\cos 2x) = 4(-\\sin 2x)\\cdot 2 = -8\\sin 2x\\).",
    "options": [
      {
        "text": "\\(-8 -\\sin 2x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-8 \\sin 2x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-8 \\sin 4x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(8 \\sin 2x\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = 4\\cos 2x\\). Strategy: constant multiple and chain rule.",
        "workingOut": "\\(y = 4\\cos 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Inner: \\(\\dfrac{d}{dx}\\cos 2x = -\\sin 2x\\cdot 2 = -2\\sin 2x\\).",
        "workingOut": "\\(\\dfrac{d}{dx}\\cos 2x = -2\\sin 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply by 4: \\(y' = 4\\cdot(-2\\sin 2x) = -8\\sin 2x\\).",
        "workingOut": "\\(y' = -8\\sin 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-8\\sin 2x\\).",
        "workingOut": "\\(-8\\sin 2x\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q1m",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Use the standard forms to differentiate with respect to \\( x \\): \\( y = -\\sin 2x \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "1",
    "solution": "The correct answer is \\(-2\\cos 2x\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "Use the standard forms to differentiate ...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 1,
    "opts": [
      "\\(-2 -\\cos 2x\\)",
      "\\(-2 \\cos 2x\\)",
      "\\(-2 \\sin 2x\\)",
      "\\(2 \\cos 2x\\)"
    ],
    "hint": "Chain rule with a leading minus: \\(\\dfrac{d}{dx}(-\\sin 2x) = -\\cos 2x\\cdot 2 = -2\\cos 2x\\).",
    "options": [
      {
        "text": "\\(-2 -\\cos 2x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-2 \\cos 2x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-2 \\sin 2x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2 \\cos 2x\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = -\\sin 2x\\). Strategy: chain rule, then apply the leading minus.",
        "workingOut": "\\(y = -\\sin 2x\\)",
        "graphData": null
      },
      {
        "explanation": "First, \\(\\dfrac{d}{dx}\\sin 2x = 2\\cos 2x\\).",
        "workingOut": "\\(\\dfrac{d}{dx}\\sin 2x = 2\\cos 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply by \\(-1\\): \\(y' = -2\\cos 2x\\).",
        "workingOut": "\\(y' = -2\\cos 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-2\\cos 2x\\).",
        "workingOut": "\\(-2\\cos 2x\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q1n",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Use the standard forms to differentiate with respect to \\( x \\): \\( y = -\\cos 2x \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "2",
    "solution": "The correct answer is \\(2\\sin 2x\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "Use the standard forms to differentiate ...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 2,
    "opts": [
      "\\(-2 \\sin 2x\\)",
      "\\(2 -\\sin 2x\\)",
      "\\(2 \\sin 2x\\)",
      "\\(4 \\sin 4x\\)"
    ],
    "hint": "Chain rule with a leading minus: \\(\\dfrac{d}{dx}(-\\cos 2x) = -(-\\sin 2x)\\cdot 2 = 2\\sin 2x\\).",
    "options": [
      {
        "text": "\\(-2 \\sin 2x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2 -\\sin 2x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2 \\sin 2x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(4 \\sin 4x\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = -\\cos 2x\\). Strategy: chain rule, then apply the leading minus.",
        "workingOut": "\\(y = -\\cos 2x\\)",
        "graphData": null
      },
      {
        "explanation": "First, \\(\\dfrac{d}{dx}\\cos 2x = -2\\sin 2x\\).",
        "workingOut": "\\(\\dfrac{d}{dx}\\cos 2x = -2\\sin 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply by \\(-1\\): \\(y' = -(-2\\sin 2x) = 2\\sin 2x\\).",
        "workingOut": "\\(y' = 2\\sin 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(2\\sin 2x\\).",
        "workingOut": "\\(2\\sin 2x\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q1o",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Use the standard forms to differentiate with respect to \\( x \\): \\( y = -\\tan 2x \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "0",
    "solution": "The correct answer is \\(-2\\sec^{2} 2x\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "Use the standard forms to differentiate ...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 0,
    "opts": [
      "\\(-2 \\sec^2 2x\\)",
      "\\(-2 \\sec^2 2x + 1\\)",
      "\\(-4 \\sec^4 4x\\)",
      "\\(2 \\sec^2 2x\\)"
    ],
    "hint": "Chain rule with a leading minus: \\(\\dfrac{d}{dx}(-\\tan 2x) = -\\sec^{2} 2x\\cdot 2 = -2\\sec^{2} 2x\\).",
    "options": [
      {
        "text": "\\(-2 \\sec^2 2x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-2 \\sec^2 2x + 1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-4 \\sec^4 4x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2 \\sec^2 2x\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = -\\tan 2x\\). Strategy: chain rule, then apply the leading minus.",
        "workingOut": "\\(y = -\\tan 2x\\)",
        "graphData": null
      },
      {
        "explanation": "First, \\(\\dfrac{d}{dx}\\tan 2x = 2\\sec^{2} 2x\\).",
        "workingOut": "\\(\\dfrac{d}{dx}\\tan 2x = 2\\sec^{2} 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply by \\(-1\\): \\(y' = -2\\sec^{2} 2x\\).",
        "workingOut": "\\(y' = -2\\sec^{2} 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-2\\sec^{2} 2x\\).",
        "workingOut": "\\(-2\\sec^{2} 2x\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q1p",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Use the standard forms to differentiate with respect to \\( x \\): \\( y = \\tan \\frac{1}{2}x \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "1",
    "solution": "The correct answer is \\(\\dfrac{1}{2}\\sec^{2}\\dfrac{1}{2}x\\).",
    "origin": "seed",
    "isNew": true,
    "graphData": null,
    "isActive": true,
    "title": "Use the standard forms to differentiate ...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 1,
    "opts": [
      "\\(-\\frac{1}{2} \\sec^2 \\frac{1}{2}x\\)",
      "\\(\\frac{1}{2} \\sec^2 \\frac{1}{2}x\\)",
      "\\(\\frac{1}{4} \\sec^4 \\frac{1}{4}x\\)",
      "\\(\\frac{2}{1} \\sec^2 \\frac{1}{2}x\\)"
    ],
    "hint": "Chain rule: \\(\\dfrac{d}{dx}\\tan\\!\\left(\\dfrac{1}{2}x\\right) = \\sec^{2}\\!\\left(\\dfrac{1}{2}x\\right)\\cdot\\dfrac{1}{2}\\).",
    "options": [
      {
        "text": "\\(-\\frac{1}{2} \\sec^2 \\frac{1}{2}x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\frac{1}{2} \\sec^2 \\frac{1}{2}x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\frac{1}{4} \\sec^4 \\frac{1}{4}x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\frac{2}{1} \\sec^2 \\frac{1}{2}x\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = \\tan\\!\\left(\\dfrac{1}{2}x\\right)\\). Strategy: chain rule with \\(u = \\dfrac{1}{2}x\\).",
        "workingOut": "\\(y = \\tan\\!\\left(\\dfrac{1}{2}x\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Then \\(u' = \\dfrac{1}{2}\\) and \\(y' = \\sec^{2}u\\cdot u'\\).",
        "workingOut": "\\(u = \\dfrac{1}{2}x,\\quad u' = \\dfrac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "So \\(y' = \\sec^{2}\\!\\left(\\dfrac{1}{2}x\\right)\\cdot\\dfrac{1}{2} = \\dfrac{1}{2}\\sec^{2}\\!\\left(\\dfrac{1}{2}x\\right)\\).",
        "workingOut": "\\(y' = \\dfrac{1}{2}\\sec^{2}\\dfrac{1}{2}x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{1}{2}\\sec^{2}\\dfrac{1}{2}x\\).",
        "workingOut": "\\(\\dfrac{1}{2}\\sec^{2}\\dfrac{1}{2}x\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q1q",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Use the standard forms to differentiate with respect to \\( x \\): \\( y = \\cos \\frac{1}{2}x \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "2",
    "solution": "The correct answer is \\(-\\dfrac{1}{2}\\sin\\dfrac{1}{2}x\\).",
    "origin": "seed",
    "isNew": true,
    "graphData": null,
    "isActive": true,
    "title": "Use the standard forms to differentiate ...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 2,
    "opts": [
      "\\(--\\frac{1}{2} \\sin \\frac{1}{2}x\\)",
      "\\(-\\frac{1}{2} -\\sin \\frac{1}{2}x\\)",
      "\\(-\\frac{1}{2} \\sin \\frac{1}{2}x\\)",
      "\\(-\\frac{2}{1} \\sin \\frac{1}{2}x\\)"
    ],
    "hint": "Chain rule: \\(\\dfrac{d}{dx}\\cos\\!\\left(\\dfrac{1}{2}x\\right) = -\\sin\\!\\left(\\dfrac{1}{2}x\\right)\\cdot\\dfrac{1}{2}\\).",
    "options": [
      {
        "text": "\\(--\\frac{1}{2} \\sin \\frac{1}{2}x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-\\frac{1}{2} -\\sin \\frac{1}{2}x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-\\frac{1}{2} \\sin \\frac{1}{2}x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-\\frac{2}{1} \\sin \\frac{1}{2}x\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = \\cos\\!\\left(\\dfrac{1}{2}x\\right)\\). Strategy: chain rule with \\(u = \\dfrac{1}{2}x\\).",
        "workingOut": "\\(y = \\cos\\!\\left(\\dfrac{1}{2}x\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Then \\(u' = \\dfrac{1}{2}\\) and \\(y' = -\\sin u\\cdot u'\\).",
        "workingOut": "\\(u = \\dfrac{1}{2}x,\\quad u' = \\dfrac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "So \\(y' = -\\sin\\!\\left(\\dfrac{1}{2}x\\right)\\cdot\\dfrac{1}{2} = -\\dfrac{1}{2}\\sin\\dfrac{1}{2}x\\).",
        "workingOut": "\\(y' = -\\dfrac{1}{2}\\sin\\dfrac{1}{2}x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-\\dfrac{1}{2}\\sin\\dfrac{1}{2}x\\).",
        "workingOut": "\\(-\\dfrac{1}{2}\\sin\\dfrac{1}{2}x\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q1r",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Use the standard forms to differentiate with respect to \\( x \\): \\( y = \\sin \\frac{x}{2} \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "1",
    "solution": "The correct answer is \\(\\dfrac{1}{2}\\cos\\dfrac{x}{2}\\).",
    "origin": "seed",
    "isNew": true,
    "graphData": null,
    "isActive": true,
    "title": "Use the standard forms to differentiate ...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 1,
    "opts": [
      "\\(-\\frac{1}{2} \\cos \\frac{x}{2}\\)",
      "\\(\\frac{1}{2} \\cos \\frac{x}{2}\\)",
      "\\(\\frac{1}{2} \\sin \\frac{x}{2}\\)",
      "\\(\\frac{2}{1} \\cos \\frac{x}{2}\\)"
    ],
    "hint": "Chain rule: \\(\\dfrac{d}{dx}\\sin\\!\\left(\\dfrac{x}{2}\\right) = \\cos\\!\\left(\\dfrac{x}{2}\\right)\\cdot\\dfrac{1}{2}\\).",
    "options": [
      {
        "text": "\\(-\\frac{1}{2} \\cos \\frac{x}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\frac{1}{2} \\cos \\frac{x}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\frac{1}{2} \\sin \\frac{x}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\frac{2}{1} \\cos \\frac{x}{2}\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = \\sin\\!\\left(\\dfrac{x}{2}\\right)\\). Strategy: chain rule with \\(u = \\dfrac{x}{2}\\).",
        "workingOut": "\\(y = \\sin\\!\\left(\\dfrac{x}{2}\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Then \\(u' = \\dfrac{1}{2}\\) and \\(y' = \\cos u\\cdot u'\\).",
        "workingOut": "\\(u = \\dfrac{x}{2},\\quad u' = \\dfrac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "So \\(y' = \\cos\\!\\left(\\dfrac{x}{2}\\right)\\cdot\\dfrac{1}{2} = \\dfrac{1}{2}\\cos\\dfrac{x}{2}\\).",
        "workingOut": "\\(y' = \\dfrac{1}{2}\\cos\\dfrac{x}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{1}{2}\\cos\\dfrac{x}{2}\\).",
        "workingOut": "\\(\\dfrac{1}{2}\\cos\\dfrac{x}{2}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q1s",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Use the standard forms to differentiate with respect to \\( x \\): \\( y = 5 \\tan \\frac{1}{3}x \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "3",
    "solution": "The correct answer is \\(\\dfrac{5}{3}\\sec^{2}\\dfrac{1}{3}x\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "Use the standard forms to differentiate ...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 3,
    "opts": [
      "\\(-\\frac{5}{3} \\sec^2 \\frac{1}{3}x\\)",
      "\\(\\frac{1}{3} \\sec^2 \\frac{1}{3}x\\)",
      "\\(\\frac{3}{5} \\sec^2 \\frac{1}{3}x\\)",
      "\\(\\frac{5}{3} \\sec^2 \\frac{1}{3}x\\)"
    ],
    "hint": "Constant and chain: \\(\\dfrac{d}{dx}\\!\\left(5\\tan\\dfrac{x}{3}\\right) = 5\\sec^{2}\\!\\left(\\dfrac{x}{3}\\right)\\cdot\\dfrac{1}{3}\\).",
    "options": [
      {
        "text": "\\(-\\frac{5}{3} \\sec^2 \\frac{1}{3}x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\frac{1}{3} \\sec^2 \\frac{1}{3}x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\frac{3}{5} \\sec^2 \\frac{1}{3}x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\frac{5}{3} \\sec^2 \\frac{1}{3}x\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = 5\\tan\\!\\left(\\dfrac{1}{3}x\\right)\\). Strategy: constant multiple and chain rule.",
        "workingOut": "\\(y = 5\\tan\\!\\left(\\dfrac{1}{3}x\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Inner: \\(\\dfrac{d}{dx}\\tan\\!\\left(\\dfrac{x}{3}\\right) = \\sec^{2}\\!\\left(\\dfrac{x}{3}\\right)\\cdot\\dfrac{1}{3}\\).",
        "workingOut": "\\(\\dfrac{1}{3}\\sec^{2}\\dfrac{x}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply by 5: \\(y' = 5\\cdot\\dfrac{1}{3}\\sec^{2}\\dfrac{x}{3} = \\dfrac{5}{3}\\sec^{2}\\dfrac{1}{3}x\\).",
        "workingOut": "\\(y' = \\dfrac{5}{3}\\sec^{2}\\dfrac{1}{3}x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{5}{3}\\sec^{2}\\dfrac{1}{3}x\\).",
        "workingOut": "\\(\\dfrac{5}{3}\\sec^{2}\\dfrac{1}{3}x\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q1t",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Use the standard forms to differentiate with respect to \\( x \\): \\( y = 6 \\cos \\frac{x}{3} \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "3",
    "solution": "The correct answer is \\(-2\\sin\\dfrac{x}{3}\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "Use the standard forms to differentiate ...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 3,
    "opts": [
      "\\(--2 \\sin \\frac{x}{3}\\)",
      "\\(-2 \\sin \\frac{1}{3}\\)",
      "\\(-2 \\sin \\frac{3}{x}\\)",
      "\\(-2 \\sin \\frac{x}{3}\\)"
    ],
    "hint": "Constant and chain: \\(\\dfrac{d}{dx}\\!\\left(6\\cos\\dfrac{x}{3}\\right) = 6\\left(-\\sin\\dfrac{x}{3}\\right)\\cdot\\dfrac{1}{3} = -2\\sin\\dfrac{x}{3}\\).",
    "options": [
      {
        "text": "\\(--2 \\sin \\frac{x}{3}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-2 \\sin \\frac{1}{3}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-2 \\sin \\frac{3}{x}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-2 \\sin \\frac{x}{3}\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = 6\\cos\\!\\left(\\dfrac{x}{3}\\right)\\). Strategy: constant multiple and chain rule.",
        "workingOut": "\\(y = 6\\cos\\!\\left(\\dfrac{x}{3}\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Inner: \\(\\dfrac{d}{dx}\\cos\\!\\left(\\dfrac{x}{3}\\right) = -\\sin\\!\\left(\\dfrac{x}{3}\\right)\\cdot\\dfrac{1}{3} = -\\dfrac{1}{3}\\sin\\dfrac{x}{3}\\).",
        "workingOut": "\\(-\\dfrac{1}{3}\\sin\\dfrac{x}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply by 6: \\(y' = 6\\cdot\\left(-\\dfrac{1}{3}\\sin\\dfrac{x}{3}\\right) = -2\\sin\\dfrac{x}{3}\\).",
        "workingOut": "\\(y' = -2\\sin\\dfrac{x}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-2\\sin\\dfrac{x}{3}\\).",
        "workingOut": "\\(-2\\sin\\dfrac{x}{3}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q1u",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Use the standard forms to differentiate with respect to \\( x \\): \\( y = 12 \\sin \\frac{x}{4} \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "3",
    "solution": "The correct answer is \\(3\\cos\\dfrac{x}{4}\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "Use the standard forms to differentiate ...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 3,
    "opts": [
      "\\(-3 \\cos \\frac{x}{4}\\)",
      "\\(3 \\cos \\frac{1}{4}\\)",
      "\\(3 \\cos \\frac{4}{x}\\)",
      "\\(3 \\cos \\frac{x}{4}\\)"
    ],
    "hint": "Constant and chain: \\(\\dfrac{d}{dx}\\!\\left(12\\sin\\dfrac{x}{4}\\right) = 12\\cos\\!\\left(\\dfrac{x}{4}\\right)\\cdot\\dfrac{1}{4} = 3\\cos\\dfrac{x}{4}\\).",
    "options": [
      {
        "text": "\\(-3 \\cos \\frac{x}{4}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3 \\cos \\frac{1}{4}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3 \\cos \\frac{4}{x}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3 \\cos \\frac{x}{4}\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = 12\\sin\\!\\left(\\dfrac{x}{4}\\right)\\). Strategy: constant multiple and chain rule.",
        "workingOut": "\\(y = 12\\sin\\!\\left(\\dfrac{x}{4}\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Inner: \\(\\dfrac{d}{dx}\\sin\\!\\left(\\dfrac{x}{4}\\right) = \\cos\\!\\left(\\dfrac{x}{4}\\right)\\cdot\\dfrac{1}{4}\\).",
        "workingOut": "\\(\\dfrac{1}{4}\\cos\\dfrac{x}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply by 12: \\(y' = 12\\cdot\\dfrac{1}{4}\\cos\\dfrac{x}{4} = 3\\cos\\dfrac{x}{4}\\).",
        "workingOut": "\\(y' = 3\\cos\\dfrac{x}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(3\\cos\\dfrac{x}{4}\\).",
        "workingOut": "\\(3\\cos\\dfrac{x}{4}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q2a",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Differentiate with respect to \\( x \\): \\( \\sin 2\\pi x \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "2",
    "solution": "The correct answer is \\(2\\pi \\cos 2\\pi x\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "Differentiate with respect to  x :  \\sin...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 2,
    "opts": [
      "\\(-2\\pi \\cos 2\\pi x\\)",
      "\\(2\\pi -\\cos 2\\pi x\\)",
      "\\(2\\pi \\cos 2\\pi x\\)",
      "\\(2\\pi \\sin 2\\pi x\\)"
    ],
    "hint": "Use the standard derivatives of \\(\\sin\\), \\(\\cos\\) and \\(\\tan\\), with the chain, product or quotient rule as required.",
    "options": [
      {
        "text": "\\(-2\\pi \\cos 2\\pi x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\pi -\\cos 2\\pi x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\pi \\cos 2\\pi x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\pi \\sin 2\\pi x\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y=\\sin 2\\pi x\\). Strategy: chain rule with linear angle \\(2\\pi x\\).",
        "workingOut": "\\(y=\\sin 2\\pi x\\)",
        "graphData": null
      },
      {
        "explanation": "Let \\(u=2\\pi x\\). Then \\(u'=2\\pi\\) and \\(y'=\\cos u\\cdot u'=2\\pi\\cos 2\\pi x\\).",
        "workingOut": "\\(2\\pi \\cos 2\\pi x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(2\\pi \\cos 2\\pi x\\).",
        "workingOut": "\\(2\\pi \\cos 2\\pi x\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q2b",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Differentiate with respect to \\( x \\): \\( \\tan \\frac{\\pi}{2} x \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "3",
    "solution": "The correct answer is \\(\\frac{\\pi}{2} \\sec^2 \\frac{\\pi}{2} x\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "Differentiate with respect to  x :  \\tan...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 3,
    "opts": [
      "\\(-\\frac{\\pi}{2} \\sec^2 \\frac{\\pi}{2} x\\)",
      "\\(\\frac{1}{2} \\sec^2 \\frac{\\pi}{2} x\\)",
      "\\(\\frac{2}{\\pi} \\sec^2 \\frac{\\pi}{2} x\\)",
      "\\(\\frac{\\pi}{2} \\sec^2 \\frac{\\pi}{2} x\\)"
    ],
    "hint": "Use the standard derivatives of \\(\\sin\\), \\(\\cos\\) and \\(\\tan\\), with the chain, product or quotient rule as required.",
    "options": [
      {
        "text": "\\(-\\frac{\\pi}{2} \\sec^2 \\frac{\\pi}{2} x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\frac{1}{2} \\sec^2 \\frac{\\pi}{2} x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\frac{2}{\\pi} \\sec^2 \\frac{\\pi}{2} x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\frac{\\pi}{2} \\sec^2 \\frac{\\pi}{2} x\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y=\\tan\\!\\left(\\dfrac{\\pi}{2}x\\right)\\). Strategy: chain rule.",
        "workingOut": "\\(y=\\tan\\!\\left(\\dfrac{\\pi}{2}x\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Let \\(u=\\dfrac{\\pi}{2}x\\). Then \\(u'=\\dfrac{\\pi}{2}\\) and \\(y'=\\sec^{2}u\\cdot u'\\).",
        "workingOut": "\\(\\frac{\\pi}{2} \\sec^2 \\frac{\\pi}{2} x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\frac{\\pi}{2} \\sec^2 \\frac{\\pi}{2} x\\).",
        "workingOut": "\\(\\frac{\\pi}{2} \\sec^2 \\frac{\\pi}{2} x\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q2c",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Differentiate with respect to \\( x \\): \\( 3 \\sin x + \\cos 5x \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "2",
    "solution": "The correct answer is \\(3 \\cos x - 5 \\sin 5x\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "Differentiate with respect to  x :  3 \\s...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 2,
    "opts": [
      "\\(-3 \\cos x - 5 \\sin 5x\\)",
      "\\(3 -\\cos x - 5 -\\sin 5x\\)",
      "\\(3 \\cos x - 5 \\sin 5x\\)",
      "\\(3 \\sin x - 5 \\sin 5x\\)"
    ],
    "hint": "Use the standard derivatives of \\(\\sin\\), \\(\\cos\\) and \\(\\tan\\), with the chain, product or quotient rule as required.",
    "options": [
      {
        "text": "\\(-3 \\cos x - 5 \\sin 5x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3 -\\cos x - 5 -\\sin 5x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3 \\cos x - 5 \\sin 5x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3 \\sin x - 5 \\sin 5x\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y=3\\sin x+\\cos 5x\\). Strategy: differentiate term by term.",
        "workingOut": "\\(y=3\\sin x+\\cos 5x\\)",
        "graphData": null
      },
      {
        "explanation": "First term: \\(3\\cos x\\). Second: \\(-\\sin 5x\\cdot 5=-5\\sin 5x\\).",
        "workingOut": "\\(3\\cos x-5\\sin 5x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(3 \\cos x - 5 \\sin 5x\\).",
        "workingOut": "\\(3 \\cos x - 5 \\sin 5x\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q2d",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Differentiate with respect to \\( x \\): \\( 4 \\sin \\pi x + 3 \\cos \\pi x \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "2",
    "solution": "The correct answer is \\(4\\pi \\cos \\pi x - 3\\pi \\sin \\pi x\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "Differentiate with respect to  x :  4 \\s...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 2,
    "opts": [
      "\\(-4\\pi \\cos \\pi x - 3\\pi \\sin \\pi x\\)",
      "\\(4\\pi -\\cos \\pi x - 3\\pi -\\sin \\pi x\\)",
      "\\(4\\pi \\cos \\pi x - 3\\pi \\sin \\pi x\\)",
      "\\(4\\pi \\sin \\pi x - 3\\pi \\sin \\pi x\\)"
    ],
    "hint": "Use the standard derivatives of \\(\\sin\\), \\(\\cos\\) and \\(\\tan\\), with the chain, product or quotient rule as required.",
    "options": [
      {
        "text": "\\(-4\\pi \\cos \\pi x - 3\\pi \\sin \\pi x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(4\\pi -\\cos \\pi x - 3\\pi -\\sin \\pi x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(4\\pi \\cos \\pi x - 3\\pi \\sin \\pi x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(4\\pi \\sin \\pi x - 3\\pi \\sin \\pi x\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y=4\\sin\\pi x+3\\cos\\pi x\\). Strategy: term by term with chain factor \\(\\pi\\).",
        "workingOut": "\\(y=4\\sin\\pi x+3\\cos\\pi x\\)",
        "graphData": null
      },
      {
        "explanation": "First: \\(4\\cos\\pi x\\cdot\\pi=4\\pi\\cos\\pi x\\). Second: \\(3(-\\sin\\pi x)\\cdot\\pi=-3\\pi\\sin\\pi x\\).",
        "workingOut": "\\(4\\pi \\cos \\pi x - 3\\pi \\sin \\pi x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(4\\pi \\cos \\pi x - 3\\pi \\sin \\pi x\\).",
        "workingOut": "\\(4\\pi \\cos \\pi x - 3\\pi \\sin \\pi x\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q2e",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Differentiate with respect to \\( x \\): \\( \\sin(2x - 1) \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "2",
    "solution": "The correct answer is \\(2 \\cos(2x - 1)\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "Differentiate with respect to  x :  \\sin...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 2,
    "opts": [
      "\\(-2 \\cos(2x - 1)\\)",
      "\\(2 -\\cos(2x - 1)\\)",
      "\\(2 \\cos(2x - 1)\\)",
      "\\(2 \\sin(2x - 1)\\)"
    ],
    "hint": "Use the standard derivatives of \\(\\sin\\), \\(\\cos\\) and \\(\\tan\\), with the chain, product or quotient rule as required.",
    "options": [
      {
        "text": "\\(-2 \\cos(2x - 1)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2 -\\cos(2x - 1)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2 \\cos(2x - 1)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2 \\sin(2x - 1)\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y=\\sin(2x-1)\\). Strategy: chain rule with \\(u=2x-1\\).",
        "workingOut": "\\(y=\\sin(2x-1)\\)",
        "graphData": null
      },
      {
        "explanation": "Then \\(u'=2\\) and \\(y'=\\cos(2x-1)\\cdot 2=2\\cos(2x-1)\\).",
        "workingOut": "\\(2 \\cos(2x - 1)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(2 \\cos(2x - 1)\\).",
        "workingOut": "\\(2 \\cos(2x - 1)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q2f",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Differentiate with respect to \\( x \\): \\( \\tan(1 + 3x) \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "1",
    "solution": "The correct answer is \\(3 \\sec^2(1 + 3x)\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "Differentiate with respect to  x :  \\tan...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 1,
    "opts": [
      "\\(-3 \\sec^2(1 + 3x)\\)",
      "\\(3 \\sec^2(1 + 3x)\\)",
      "\\(3 \\sec^2(1 + 3x) + 1\\)",
      "\\(4 \\sec^4(1 + 4x)\\)"
    ],
    "hint": "Use the standard derivatives of \\(\\sin\\), \\(\\cos\\) and \\(\\tan\\), with the chain, product or quotient rule as required.",
    "options": [
      {
        "text": "\\(-3 \\sec^2(1 + 3x)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3 \\sec^2(1 + 3x)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3 \\sec^2(1 + 3x) + 1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(4 \\sec^4(1 + 4x)\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y=\\tan(1+3x)\\). Strategy: chain rule with \\(u=1+3x\\).",
        "workingOut": "\\(y=\\tan(1+3x)\\)",
        "graphData": null
      },
      {
        "explanation": "Then \\(u'=3\\) and \\(y'=\\sec^{2}(1+3x)\\cdot 3=3\\sec^{2}(1+3x)\\).",
        "workingOut": "\\(3 \\sec^2(1 + 3x)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(3 \\sec^2(1 + 3x)\\).",
        "workingOut": "\\(3 \\sec^2(1 + 3x)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q2g",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Differentiate with respect to \\( x \\): \\( 2 \\cos(1 - x) \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "2",
    "solution": "The correct answer is \\(2 \\sin(1 - x)\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "Differentiate with respect to  x :  2 \\c...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 2,
    "opts": [
      "\\(-2 \\sin(1 - x)\\)",
      "\\(2 -\\sin(1 - x)\\)",
      "\\(2 \\sin(1 - x)\\)",
      "\\(4 \\sin(1 - x)\\)"
    ],
    "hint": "Use the standard derivatives of \\(\\sin\\), \\(\\cos\\) and \\(\\tan\\), with the chain, product or quotient rule as required.",
    "options": [
      {
        "text": "\\(-2 \\sin(1 - x)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2 -\\sin(1 - x)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2 \\sin(1 - x)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(4 \\sin(1 - x)\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y=2\\cos(1-x)\\). Strategy: constant multiple and chain rule.",
        "workingOut": "\\(y=2\\cos(1-x)\\)",
        "graphData": null
      },
      {
        "explanation": "Inner: \\(\\dfrac{d}{dx}\\cos(1-x)=-\\sin(1-x)\\cdot(-1)=\\sin(1-x)\\). Then multiply by 2.",
        "workingOut": "\\(2 \\sin(1 - x)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(2 \\sin(1 - x)\\).",
        "workingOut": "\\(2 \\sin(1 - x)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q2h",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Differentiate with respect to \\( x \\): \\( \\cos(5x + 4) \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "1",
    "solution": "The correct answer is \\(-5 \\sin(5x + 4)\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "Differentiate with respect to  x :  \\cos...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 1,
    "opts": [
      "\\(-5 -\\sin(5x + 4)\\)",
      "\\(-5 \\sin(5x + 4)\\)",
      "\\(-5 \\sin(5x + 4) + 1\\)",
      "\\(5 \\sin(5x + 4)\\)"
    ],
    "hint": "Use the standard derivatives of \\(\\sin\\), \\(\\cos\\) and \\(\\tan\\), with the chain, product or quotient rule as required.",
    "options": [
      {
        "text": "\\(-5 -\\sin(5x + 4)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-5 \\sin(5x + 4)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-5 \\sin(5x + 4) + 1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(5 \\sin(5x + 4)\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y=\\cos(5x+4)\\). Strategy: chain rule with \\(u=5x+4\\).",
        "workingOut": "\\(y=\\cos(5x+4)\\)",
        "graphData": null
      },
      {
        "explanation": "Then \\(u'=5\\) and \\(y'=-\\sin(5x+4)\\cdot 5=-5\\sin(5x+4)\\).",
        "workingOut": "\\(-5 \\sin(5x + 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-5 \\sin(5x + 4)\\).",
        "workingOut": "\\(-5 \\sin(5x + 4)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q2i",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Differentiate with respect to \\( x \\): \\( 7 \\sin(2 - 3x) \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "1",
    "solution": "The correct answer is \\(-21 \\cos(2 - 3x)\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "Differentiate with respect to  x :  7 \\s...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 1,
    "opts": [
      "\\(-21 -\\cos(2 - 3x)\\)",
      "\\(-21 \\cos(2 - 3x)\\)",
      "\\(-21 \\sin(2 - 3x)\\)",
      "\\(21 \\cos(2 - 3x)\\)"
    ],
    "hint": "Use the standard derivatives of \\(\\sin\\), \\(\\cos\\) and \\(\\tan\\), with the chain, product or quotient rule as required.",
    "options": [
      {
        "text": "\\(-21 -\\cos(2 - 3x)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-21 \\cos(2 - 3x)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-21 \\sin(2 - 3x)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(21 \\cos(2 - 3x)\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y=7\\sin(2-3x)\\). Strategy: constant multiple and chain rule.",
        "workingOut": "\\(y=7\\sin(2-3x)\\)",
        "graphData": null
      },
      {
        "explanation": "Inner: \\(\\dfrac{d}{dx}\\sin(2-3x)=\\cos(2-3x)\\cdot(-3)=-3\\cos(2-3x)\\). Multiply by 7: \\(-21\\cos(2-3x)\\).",
        "workingOut": "\\(-21 \\cos(2 - 3x)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-21 \\cos(2 - 3x)\\).",
        "workingOut": "\\(-21 \\cos(2 - 3x)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q2j",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Differentiate with respect to \\( x \\): \\( 10 \\tan(10 - x) \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "0",
    "solution": "The correct answer is \\(-10 \\sec^2(10 - x)\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "Differentiate with respect to  x :  10 \\...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 0,
    "opts": [
      "\\(-10 \\sec^2(10 - x)\\)",
      "\\(-10 \\sec^2(10 - x) + 1\\)",
      "\\(-10 \\sec^4(10 - x)\\)",
      "\\(10 \\sec^2(10 - x)\\)"
    ],
    "hint": "Use the standard derivatives of \\(\\sin\\), \\(\\cos\\) and \\(\\tan\\), with the chain, product or quotient rule as required.",
    "options": [
      {
        "text": "\\(-10 \\sec^2(10 - x)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-10 \\sec^2(10 - x) + 1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-10 \\sec^4(10 - x)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(10 \\sec^2(10 - x)\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y=10\\tan(10-x)\\). Strategy: constant multiple and chain rule.",
        "workingOut": "\\(y=10\\tan(10-x)\\)",
        "graphData": null
      },
      {
        "explanation": "Inner: \\(\\dfrac{d}{dx}\\tan(10-x)=\\sec^{2}(10-x)\\cdot(-1)=-\\sec^{2}(10-x)\\). Multiply by 10.",
        "workingOut": "\\(-10 \\sec^2(10 - x)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-10 \\sec^2(10 - x)\\).",
        "workingOut": "\\(-10 \\sec^2(10 - x)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q2k",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Differentiate with respect to \\( x \\): \\( 6 \\sin\\left(\\frac{x+1}{2}\\right) \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "3",
    "solution": "The correct answer is \\(3 \\cos\\left(\\frac{x+1}{2}\\right)\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "Differentiate with respect to  x :  6 \\s...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 3,
    "opts": [
      "\\(-3 \\cos\\left(\\frac{x+1}{2}\\right)\\)",
      "\\(3 \\cos\\left(\\frac{1}{2}\\right)\\)",
      "\\(3 \\cos\\left(\\frac{2}{x+1}\\right)\\)",
      "\\(3 \\cos\\left(\\frac{x+1}{2}\\right)\\)"
    ],
    "hint": "Use the standard derivatives of \\(\\sin\\), \\(\\cos\\) and \\(\\tan\\), with the chain, product or quotient rule as required.",
    "options": [
      {
        "text": "\\(-3 \\cos\\left(\\frac{x+1}{2}\\right)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3 \\cos\\left(\\frac{1}{2}\\right)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3 \\cos\\left(\\frac{2}{x+1}\\right)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3 \\cos\\left(\\frac{x+1}{2}\\right)\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y=6\\sin\\!\\left(\\dfrac{x+1}{2}\\right)\\). Strategy: constant multiple and chain rule.",
        "workingOut": "\\(y=6\\sin\\!\\left(\\dfrac{x+1}{2}\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Inner derivative of \\(\\dfrac{x+1}{2}\\) is \\(\\dfrac{1}{2}\\). So factor is \\(6\\cdot\\cos(\\cdots)\\cdot\\dfrac{1}{2}=3\\cos\\!\\left(\\dfrac{x+1}{2}\\right)\\).",
        "workingOut": "\\(3 \\cos\\left(\\frac{x+1}{2}\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(3 \\cos\\left(\\frac{x+1}{2}\\right)\\).",
        "workingOut": "\\(3 \\cos\\left(\\frac{x+1}{2}\\right)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q2l",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Differentiate with respect to \\( x \\): \\( 15 \\cos\\left(\\frac{2x+1}{5}\\right) \\)",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "2",
    "solution": "The correct answer is \\(-6 \\sin\\left(\\frac{2x+1}{5}\\right)\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "Differentiate with respect to  x :  15 \\...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 2,
    "opts": [
      "\\(--6 \\sin\\left(\\frac{2x+1}{5}\\right)\\)",
      "\\(-6 \\sin\\left(\\frac{1}{5}\\right)\\)",
      "\\(-6 \\sin\\left(\\frac{2x+1}{5}\\right)\\)",
      "\\(-6 \\sin\\left(\\frac{5}{2x+1}\\right)\\)"
    ],
    "hint": "Use the standard derivatives of \\(\\sin\\), \\(\\cos\\) and \\(\\tan\\), with the chain, product or quotient rule as required.",
    "options": [
      {
        "text": "\\(--6 \\sin\\left(\\frac{2x+1}{5}\\right)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-6 \\sin\\left(\\frac{1}{5}\\right)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-6 \\sin\\left(\\frac{2x+1}{5}\\right)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-6 \\sin\\left(\\frac{5}{2x+1}\\right)\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Given: \\(y=15\\cos\\!\\left(\\dfrac{2x+1}{5}\\right)\\). Strategy: constant multiple and chain rule.",
        "workingOut": "\\(y=15\\cos\\!\\left(\\dfrac{2x+1}{5}\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Inner derivative of \\(\\dfrac{2x+1}{5}\\) is \\(\\dfrac{2}{5}\\). So \\(y'=15\\left(-\\sin(\\cdots)\\right)\\cdot\\dfrac{2}{5}=-6\\sin\\!\\left(\\dfrac{2x+1}{5}\\right)\\).",
        "workingOut": "\\(-6 \\sin\\left(\\frac{2x+1}{5}\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-6 \\sin\\left(\\frac{2x+1}{5}\\right)\\).",
        "workingOut": "\\(-6 \\sin\\left(\\frac{2x+1}{5}\\right)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q3a",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Find the first, second, third and fourth derivatives of \\( y = \\sin 2x \\).",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "2",
    "solution": "The correct answer is \\(2\\cos 2x,\\ -4\\sin 2x,\\ -8\\cos 2x,\\ 16\\sin 2x\\).",
    "origin": "seed",
    "isNew": true,
    "graphData": null,
    "isActive": true,
    "title": "Find the first, second, third and fourth...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 2,
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = \\sin 2x\\). Strategy: differentiate four times using the chain rule.",
        "workingOut": "\\(y = \\sin 2x\\)",
        "graphData": null
      },
      {
        "explanation": "First: \\(y' = \\cos 2x\\cdot 2 = 2\\cos 2x\\).",
        "workingOut": "\\(y' = 2\\cos 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Second: \\(y'' = -2\\sin 2x\\cdot 2 = -4\\sin 2x\\).",
        "workingOut": "\\(y'' = -4\\sin 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Third: \\(y''' = -4\\cos 2x\\cdot 2 = -8\\cos 2x\\).",
        "workingOut": "\\(y''' = -8\\cos 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Fourth: \\(y'''' = 8\\sin 2x\\cdot 2 = 16\\sin 2x\\).",
        "workingOut": "\\(y'''' = 16\\sin 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(2\\cos 2x,\\ -4\\sin 2x,\\ -8\\cos 2x,\\ 16\\sin 2x\\).",
        "workingOut": "\\(2\\cos 2x,\\ -4\\sin 2x,\\ -8\\cos 2x,\\ 16\\sin 2x\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(-2\\cos 2x,\\ -4\\sin 2x,\\ -8\\cos 2x,\\ 16\\sin 2x\\)",
      "\\(2\\cos 2x,\\ 4\\sin 2x,\\ 8\\cos 2x,\\ 16\\sin 2x\\)",
      "\\(2\\cos 2x,\\ -4\\sin 2x,\\ -8\\cos 2x,\\ 16\\sin 2x\\)",
      "\\(2\\sin 2x,\\ -4\\sin 2x,\\ -8\\sin 2x,\\ 16\\sin 2x\\)"
    ],
    "hint": "Differentiate repeatedly: each step multiplies by 2 and cycles sine/cosine with the correct sign.",
    "options": [
      {
        "text": "\\(-2\\cos 2x,\\ -4\\sin 2x,\\ -8\\cos 2x,\\ 16\\sin 2x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\cos 2x,\\ 4\\sin 2x,\\ 8\\cos 2x,\\ 16\\sin 2x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\cos 2x,\\ -4\\sin 2x,\\ -8\\cos 2x,\\ 16\\sin 2x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\sin 2x,\\ -4\\sin 2x,\\ -8\\sin 2x,\\ 16\\sin 2x\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q3a_amp",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "In part a (\\( y = \\sin 2x \\)), write down the amplitudes of the four resulting functions.",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "0",
    "solution": "The correct answer is \\(2,\\ 4,\\ 8,\\ 16\\).",
    "origin": "seed",
    "isNew": true,
    "graphData": null,
    "isActive": true,
    "title": "In part a ( y = \\sin 2x ), write down th...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 0,
    "opts": [
      "\\(2,\\ 4,\\ 8,\\ 16\\)",
      "\\(1,\\ 2,\\ 4,\\ 8\\)",
      "\\(2,\\ -4,\\ -8,\\ 16\\)",
      "\\(4,\\ 8,\\ 16,\\ 32\\)"
    ],
    "hint": "Amplitude of \\(A\\sin(kx)\\) or \\(A\\cos(kx)\\) is \\(|A|\\).",
    "options": [
      {
        "text": "\\(2,\\ 4,\\ 8,\\ 16\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1,\\ 2,\\ 4,\\ 8\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2,\\ -4,\\ -8,\\ 16\\)",
        "imageUrl": null
      },
      {
        "text": "\\(4,\\ 8,\\ 16,\\ 32\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "From part (a), the four derivatives are \\(2\\cos 2x\\), \\(-4\\sin 2x\\), \\(-8\\cos 2x\\), \\(16\\sin 2x\\).",
        "workingOut": "\\(2\\cos 2x,\\ -4\\sin 2x,\\ -8\\cos 2x,\\ 16\\sin 2x\\)",
        "graphData": null
      },
      {
        "explanation": "The amplitude of \\(A\\sin(kx)\\) or \\(A\\cos(kx)\\) is the absolute value \\(|A|\\).",
        "workingOut": "\\(\\text{amplitude } = |A|\\)",
        "graphData": null
      },
      {
        "explanation": "So the amplitudes are \\(|2| = 2\\), \\(|-4| = 4\\), \\(|-8| = 8\\), \\(|16| = 16\\).",
        "workingOut": "\\(2,\\ 4,\\ 8,\\ 16\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(2,\\ 4,\\ 8,\\ 16\\).",
        "workingOut": "\\(2,\\ 4,\\ 8,\\ 16\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q3b",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Find the first, second, third and fourth derivatives of \\( y = \\cos 10x \\).",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "0",
    "solution": "The correct answer is \\(-10\\sin 10x,\\ -100\\cos 10x,\\ 1000\\sin 10x,\\ 10000\\cos 10x\\).",
    "origin": "seed",
    "isNew": true,
    "graphData": null,
    "isActive": true,
    "title": "Find the first, second, third and fourth...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "Given: \\(y = \\cos 10x\\). Strategy: differentiate four times with chain factor 10.",
        "workingOut": "\\(y = \\cos 10x\\)",
        "graphData": null
      },
      {
        "explanation": "First: \\(y' = -\\sin 10x\\cdot 10 = -10\\sin 10x\\).",
        "workingOut": "\\(y' = -10\\sin 10x\\)",
        "graphData": null
      },
      {
        "explanation": "Second: \\(y'' = -10\\cos 10x\\cdot 10 = -100\\cos 10x\\).",
        "workingOut": "\\(y'' = -100\\cos 10x\\)",
        "graphData": null
      },
      {
        "explanation": "Third: \\(y''' = 100\\sin 10x\\cdot 10 = 1000\\sin 10x\\).",
        "workingOut": "\\(y''' = 1000\\sin 10x\\)",
        "graphData": null
      },
      {
        "explanation": "Fourth: \\(y'''' = 1000\\cos 10x\\cdot 10 = 10000\\cos 10x\\).",
        "workingOut": "\\(y'''' = 10000\\cos 10x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-10\\sin 10x,\\ -100\\cos 10x,\\ 1000\\sin 10x,\\ 10000\\cos 10x\\).",
        "workingOut": "\\(-10\\sin 10x,\\ -100\\cos 10x,\\ 1000\\sin 10x,\\ 10000\\cos 10x\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(-10\\sin 10x,\\ -100\\cos 10x,\\ 1000\\sin 10x,\\ 10000\\cos 10x\\)",
      "\\(-10\\sin 10x,\\ -100\\sin 10x,\\ 1000\\sin 10x,\\ 10000\\sin 10x\\)",
      "\\(10\\sin 10x,\\ -100\\cos 10x,\\ 1000\\sin 10x,\\ 10000\\cos 10x\\)",
      "\\(-10\\cos 10x,\\ -100\\sin 10x,\\ 1000\\cos 10x,\\ 10000\\sin 10x\\)"
    ],
    "hint": "Each derivative multiplies by 10 and cycles cosine/sine with the correct sign.",
    "options": [
      {
        "text": "\\(-10\\sin 10x,\\ -100\\cos 10x,\\ 1000\\sin 10x,\\ 10000\\cos 10x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-10\\sin 10x,\\ -100\\sin 10x,\\ 1000\\sin 10x,\\ 10000\\sin 10x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(10\\sin 10x,\\ -100\\cos 10x,\\ 1000\\sin 10x,\\ 10000\\cos 10x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-10\\cos 10x,\\ -100\\sin 10x,\\ 1000\\cos 10x,\\ 10000\\sin 10x\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q3c",
    "year": "Year 12",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "6B",
    "question": "Find the first, second, third and fourth derivatives of \\( y = \\sin \\frac{1}{2}x \\).",
    "isNew": true,
    "title": "Find the first, second, third and fourth...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "topicId": "y12a-6B",
    "answer": "1",
    "solution": "The correct answer is \\(\\dfrac{1}{2}\\cos\\dfrac{1}{2}x,\\ -\\dfrac{1}{4}\\sin\\dfrac{1}{2}x,\\ -\\dfrac{1}{8}\\cos\\dfrac{1}{2}x,\\ \\dfrac{1}{16}\\sin\\dfrac{1}{2}x\\).",
    "chapterId": "y12a-6",
    "graphData": null,
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "a": 1,
    "solutionSteps": [
      {
        "explanation": "Given: \\(y=\\sin\\dfrac{1}{2}x\\). Differentiate four times with chain factor \\(\\dfrac{1}{2}\\).",
        "workingOut": "\\(y=\\sin\\dfrac{1}{2}x\\)",
        "graphData": null
      },
      {
        "explanation": "First: \\(\\dfrac{d}{dx}\\sin\\dfrac{1}{2}x=\\dfrac{1}{2}\\cos\\dfrac{1}{2}x\\).",
        "workingOut": "\\(\\dfrac{1}{2}\\cos\\dfrac{1}{2}x\\)",
        "graphData": null
      },
      {
        "explanation": "Second: derivative of \\(\\dfrac{1}{2}\\cos\\dfrac{1}{2}x\\) is \\(-\\dfrac{1}{4}\\sin\\dfrac{1}{2}x\\).",
        "workingOut": "\\(-\\dfrac{1}{4}\\sin\\dfrac{1}{2}x\\)",
        "graphData": null
      },
      {
        "explanation": "Third: derivative of \\(-\\dfrac{1}{4}\\sin\\dfrac{1}{2}x\\) is \\(-\\dfrac{1}{8}\\cos\\dfrac{1}{2}x\\).",
        "workingOut": "\\(-\\dfrac{1}{8}\\cos\\dfrac{1}{2}x\\)",
        "graphData": null
      },
      {
        "explanation": "Fourth: derivative of \\(-\\dfrac{1}{8}\\cos\\dfrac{1}{2}x\\) is \\(\\dfrac{1}{16}\\sin\\dfrac{1}{2}x\\).",
        "workingOut": "\\(\\dfrac{1}{16}\\sin\\dfrac{1}{2}x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{1}{2}\\cos\\dfrac{1}{2}x,\\ -\\dfrac{1}{4}\\sin\\dfrac{1}{2}x,\\ -\\dfrac{1}{8}\\cos\\dfrac{1}{2}x,\\ \\dfrac{1}{16}\\sin\\dfrac{1}{2}x\\).",
        "workingOut": "\\(\\dfrac{1}{2}\\cos\\dfrac{1}{2}x,\\ -\\dfrac{1}{4}\\sin\\dfrac{1}{2}x,\\ -\\dfrac{1}{8}\\cos\\dfrac{1}{2}x,\\ \\dfrac{1}{16}\\sin\\dfrac{1}{2}x\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(-\\frac{1}{2} \\cos \\frac{1}{2}x, -\\frac{1}{4} \\sin \\frac{1}{2}x, -\\frac{1}{8} \\cos \\frac{1}{2}x, \\frac{1}{16} \\sin \\frac{1}{2}x\\)",
      "\\(\\frac{1}{2} \\cos \\frac{1}{2}x, -\\frac{1}{4} \\sin \\frac{1}{2}x, -\\frac{1}{8} \\cos \\frac{1}{2}x, \\frac{1}{16} \\sin \\frac{1}{2}x\\)",
      "\\(\\frac{1}{2} \\sin \\frac{1}{2}x, -\\frac{1}{4} \\sin \\frac{1}{2}x, -\\frac{1}{8} \\sin \\frac{1}{2}x, \\frac{1}{16} \\sin \\frac{1}{2}x\\)",
      "\\(\\frac{2}{1} \\cos \\frac{1}{2}x, -\\frac{1}{4} \\sin \\frac{1}{2}x, -\\frac{1}{8} \\cos \\frac{1}{2}x, \\frac{1}{16} \\sin \\frac{1}{2}x\\)"
    ],
    "hint": "Use the standard derivatives of \\(\\sin\\), \\(\\cos\\) and \\(\\tan\\), with the chain, product or quotient rule as required.",
    "options": [
      {
        "text": "\\(-\\frac{1}{2} \\cos \\frac{1}{2}x, -\\frac{1}{4} \\sin \\frac{1}{2}x, -\\frac{1}{8} \\cos \\frac{1}{2}x, \\frac{1}{16} \\sin \\frac{1}{2}x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\frac{1}{2} \\cos \\frac{1}{2}x, -\\frac{1}{4} \\sin \\frac{1}{2}x, -\\frac{1}{8} \\cos \\frac{1}{2}x, \\frac{1}{16} \\sin \\frac{1}{2}x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\frac{1}{2} \\sin \\frac{1}{2}x, -\\frac{1}{4} \\sin \\frac{1}{2}x, -\\frac{1}{8} \\sin \\frac{1}{2}x, \\frac{1}{16} \\sin \\frac{1}{2}x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\frac{2}{1} \\cos \\frac{1}{2}x, -\\frac{1}{4} \\sin \\frac{1}{2}x, -\\frac{1}{8} \\cos \\frac{1}{2}x, \\frac{1}{16} \\sin \\frac{1}{2}x\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q3d",
    "year": "Year 12",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "6B",
    "question": "Find the first, second, third and fourth derivatives of \\( y = \\cos \\frac{1}{3}x \\).",
    "isNew": true,
    "title": "Find the first, second, third and fourth...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "topicId": "y12a-6B",
    "answer": "1",
    "solution": "The correct answer is \\(-\\dfrac{1}{3}\\sin\\dfrac{1}{3}x,\\ -\\dfrac{1}{9}\\cos\\dfrac{1}{3}x,\\ \\dfrac{1}{27}\\sin\\dfrac{1}{3}x,\\ \\dfrac{1}{81}\\cos\\dfrac{1}{3}x\\).",
    "chapterId": "y12a-6",
    "graphData": null,
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "a": 1,
    "solutionSteps": [
      {
        "explanation": "Given: \\(y=\\cos\\dfrac{1}{3}x\\). Each derivative multiplies by \\(\\dfrac{1}{3}\\).",
        "workingOut": "\\(y=\\cos\\dfrac{1}{3}x\\)",
        "graphData": null
      },
      {
        "explanation": "First: \\(-\\dfrac{1}{3}\\sin\\dfrac{1}{3}x\\).",
        "workingOut": "\\(-\\dfrac{1}{3}\\sin\\dfrac{1}{3}x\\)",
        "graphData": null
      },
      {
        "explanation": "Second: \\(-\\dfrac{1}{9}\\cos\\dfrac{1}{3}x\\).",
        "workingOut": "\\(-\\dfrac{1}{9}\\cos\\dfrac{1}{3}x\\)",
        "graphData": null
      },
      {
        "explanation": "Third: \\(\\dfrac{1}{27}\\sin\\dfrac{1}{3}x\\).",
        "workingOut": "\\(\\dfrac{1}{27}\\sin\\dfrac{1}{3}x\\)",
        "graphData": null
      },
      {
        "explanation": "Fourth: \\(\\dfrac{1}{81}\\cos\\dfrac{1}{3}x\\).",
        "workingOut": "\\(\\dfrac{1}{81}\\cos\\dfrac{1}{3}x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-\\dfrac{1}{3}\\sin\\dfrac{1}{3}x,\\ -\\dfrac{1}{9}\\cos\\dfrac{1}{3}x,\\ \\dfrac{1}{27}\\sin\\dfrac{1}{3}x,\\ \\dfrac{1}{81}\\cos\\dfrac{1}{3}x\\).",
        "workingOut": "\\(-\\dfrac{1}{3}\\sin\\dfrac{1}{3}x,\\ -\\dfrac{1}{9}\\cos\\dfrac{1}{3}x,\\ \\dfrac{1}{27}\\sin\\dfrac{1}{3}x,\\ \\dfrac{1}{81}\\cos\\dfrac{1}{3}x\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(--\\frac{1}{3} \\sin \\frac{1}{3}x, -\\frac{1}{9} \\cos \\frac{1}{3}x, \\frac{1}{27} \\sin \\frac{1}{3}x, \\frac{1}{81} \\cos \\frac{1}{3}x\\)",
      "\\(-\\frac{1}{3} \\sin \\frac{1}{3}x, -\\frac{1}{9} \\cos \\frac{1}{3}x, \\frac{1}{27} \\sin \\frac{1}{3}x, \\frac{1}{81} \\cos \\frac{1}{3}x\\)",
      "\\(-\\frac{1}{3} \\sin \\frac{1}{3}x, -\\frac{1}{9} \\sin \\frac{1}{3}x, \\frac{1}{27} \\sin \\frac{1}{3}x, \\frac{1}{81} \\sin \\frac{1}{3}x\\)",
      "\\(-\\frac{3}{1} \\sin \\frac{1}{3}x, -\\frac{1}{9} \\cos \\frac{1}{3}x, \\frac{1}{27} \\sin \\frac{1}{3}x, \\frac{1}{81} \\cos \\frac{1}{3}x\\)"
    ],
    "hint": "Use the standard derivatives of \\(\\sin\\), \\(\\cos\\) and \\(\\tan\\), with the chain, product or quotient rule as required.",
    "options": [
      {
        "text": "\\(--\\frac{1}{3} \\sin \\frac{1}{3}x, -\\frac{1}{9} \\cos \\frac{1}{3}x, \\frac{1}{27} \\sin \\frac{1}{3}x, \\frac{1}{81} \\cos \\frac{1}{3}x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-\\frac{1}{3} \\sin \\frac{1}{3}x, -\\frac{1}{9} \\cos \\frac{1}{3}x, \\frac{1}{27} \\sin \\frac{1}{3}x, \\frac{1}{81} \\cos \\frac{1}{3}x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-\\frac{1}{3} \\sin \\frac{1}{3}x, -\\frac{1}{9} \\sin \\frac{1}{3}x, \\frac{1}{27} \\sin \\frac{1}{3}x, \\frac{1}{81} \\sin \\frac{1}{3}x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-\\frac{3}{1} \\sin \\frac{1}{3}x, -\\frac{1}{9} \\cos \\frac{1}{3}x, \\frac{1}{27} \\sin \\frac{1}{3}x, \\frac{1}{81} \\cos \\frac{1}{3}x\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q3d_amp",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "In part d (\\( y = \\cos \\frac{1}{3}x \\)), write down the amplitudes of the four resulting functions.",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "1",
    "solution": "The correct answer is \\(\\dfrac{1}{3},\\ \\dfrac{1}{9},\\ \\dfrac{1}{27},\\ \\dfrac{1}{81}\\).",
    "origin": "seed",
    "isNew": true,
    "graphData": null,
    "isActive": true,
    "title": "In part d ( y = \\cos \\frac{1}{3}x ), wri...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 1,
    "opts": [
      "\\(-1/3, 1/9, 1/27, 1/81\\)",
      "\\(1/3, 1/9, 1/27, 1/81\\)",
      "\\(1/3, 1/9, 1/27, 1/81 + 1\\)",
      "\\(1/4, 1/9, 1/47, 1/81\\)"
    ],
    "hint": "Use the standard derivatives of \\(\\sin\\), \\(\\cos\\) and \\(\\tan\\), with the chain, product or quotient rule as required.",
    "options": [
      {
        "text": "\\(-1/3, 1/9, 1/27, 1/81\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1/3, 1/9, 1/27, 1/81\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1/3, 1/9, 1/27, 1/81 + 1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1/4, 1/9, 1/47, 1/81\\)",
        "imageUrl": null
      }
    ],
    "solutionSteps": [
      {
        "explanation": "From part (d), take absolute values of the four coefficients.",
        "workingOut": "\\(\\left|-\\dfrac{1}{3}\\right|,\\ \\left|-\\dfrac{1}{9}\\right|,\\ \\dfrac{1}{27},\\ \\dfrac{1}{81}\\)",
        "graphData": null
      },
      {
        "explanation": "Amplitudes: \\(\\dfrac{1}{3},\\ \\dfrac{1}{9},\\ \\dfrac{1}{27},\\ \\dfrac{1}{81}\\).",
        "workingOut": "\\(\\dfrac{1}{3},\\ \\dfrac{1}{9},\\ \\dfrac{1}{27},\\ \\dfrac{1}{81}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{1}{3},\\ \\dfrac{1}{9},\\ \\dfrac{1}{27},\\ \\dfrac{1}{81}\\).",
        "workingOut": "\\(\\dfrac{1}{3},\\ \\dfrac{1}{9},\\ \\dfrac{1}{27},\\ \\dfrac{1}{81}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6b-q4a",
    "topicId": "y12a-6B",
    "chapterId": "y12a-6",
    "c": "6B",
    "t": "Differentiating the trigonometric functions",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "If \\(f(x) = \\cos 2x\\), find \\(f'(0)\\).",
    "opts": [
      "\\(0\\)",
      "\\(-1\\)",
      "\\(-2\\)",
      "\\(1\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Differentiate first: \\(f'(x)=-2\\sin 2x\\), then substitute.",
    "solution": "The correct answer is \\(0\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(f(x)=\\cos 2x\\). Find \\(f'(0)\\).",
        "workingOut": "\\(f(x)=\\cos 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Chain rule: \\(f'(x)=-\\sin 2x\\cdot 2=-2\\sin 2x\\).",
        "workingOut": "\\(f'(x)=-2\\sin 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\(x=0\\): \\(f'(0)=-2\\sin 0=-2\\cdot 0=0\\).",
        "workingOut": "\\(f'(0)=0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(0\\).",
        "workingOut": "\\(0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(0\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q4b",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "If \\( f(x) = \\cos 2x \\), find \\( f'(\\frac{\\pi}{12}) \\).",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "0",
    "solution": "The correct answer is \\(-1\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "If  f(x) = \\cos 2x , find  f'(\\frac{\\pi}...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "Given: \\(f(x)=\\cos 2x\\). Find \\(f'(\\pi/12)\\).",
        "workingOut": "\\(f(x)=\\cos 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate: \\(f'(x)=-2\\sin 2x\\).",
        "workingOut": "\\(f'(x)=-2\\sin 2x\\)",
        "graphData": null
      },
      {
        "explanation": "At \\(x=\\dfrac{\\pi}{12}\\): \\(2x=\\dfrac{\\pi}{6}\\), so \\(f'\\!\\left(\\dfrac{\\pi}{12}\\right)=-2\\sin\\dfrac{\\pi}{6}=-2\\cdot\\dfrac{1}{2}=-1\\).",
        "workingOut": "\\(f'(\\pi/12)=-1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-1\\).",
        "workingOut": "\\(-1\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(-1\\)",
      "\\(-2\\)",
      "\\(0\\)",
      "\\(1\\)"
    ],
    "hint": "\\(f'(x)=-2\\sin 2x\\). Use \\(\\sin(\\pi/6)=1/2\\).",
    "options": [
      {
        "text": "\\(-1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(0\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q4c",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "If \\( f(x) = \\cos 2x \\), find \\( f'(\\frac{\\pi}{6}) \\).",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "0",
    "solution": "The correct answer is \\(-\\sqrt{3}\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "If  f(x) = \\cos 2x , find  f'(\\frac{\\pi}...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "Given: \\(f(x)=\\cos 2x\\). Find \\(f'(\\pi/6)\\).",
        "workingOut": "\\(f(x)=\\cos 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate: \\(f'(x)=-2\\sin 2x\\).",
        "workingOut": "\\(f'(x)=-2\\sin 2x\\)",
        "graphData": null
      },
      {
        "explanation": "At \\(x=\\dfrac{\\pi}{6}\\): \\(2x=\\dfrac{\\pi}{3}\\), so \\(f'\\!\\left(\\dfrac{\\pi}{6}\\right)=-2\\sin\\dfrac{\\pi}{3}=-2\\cdot\\dfrac{\\sqrt{3}}{2}=-\\sqrt{3}\\).",
        "workingOut": "\\(f'(\\pi/6)=-\\sqrt{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-\\sqrt{3}\\).",
        "workingOut": "\\(-\\sqrt{3}\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(-\\sqrt{3}\\)",
      "\\(-1\\)",
      "\\(0\\)",
      "\\(\\sqrt{3}\\)"
    ],
    "hint": "\\(f'(x)=-2\\sin 2x\\). Use \\(\\sin(\\pi/3)=\\sqrt{3}/2\\).",
    "options": [
      {
        "text": "\\(-\\sqrt{3}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(0\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\sqrt{3}\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q4d",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "If \\( f(x) = \\cos 2x \\), find \\( f'(\\frac{\\pi}{4}) \\).",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "1",
    "solution": "The correct answer is \\(-2\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "If  f(x) = \\cos 2x , find  f'(\\frac{\\pi}...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 1,
    "solutionSteps": [
      {
        "explanation": "Given: \\(f(x)=\\cos 2x\\). Find \\(f'(\\pi/4)\\).",
        "workingOut": "\\(f(x)=\\cos 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate: \\(f'(x)=-2\\sin 2x\\).",
        "workingOut": "\\(f'(x)=-2\\sin 2x\\)",
        "graphData": null
      },
      {
        "explanation": "At \\(x=\\dfrac{\\pi}{4}\\): \\(2x=\\dfrac{\\pi}{2}\\), so \\(f'\\!\\left(\\dfrac{\\pi}{4}\\right)=-2\\sin\\dfrac{\\pi}{2}=-2\\cdot 1=-2\\).",
        "workingOut": "\\(f'(\\pi/4)=-2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-2\\).",
        "workingOut": "\\(-2\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(-1\\)",
      "\\(-2\\)",
      "\\(-3\\)",
      "\\(2\\)"
    ],
    "hint": "\\(f'(x)=-2\\sin 2x\\). Use \\(\\sin(\\pi/2)=1\\).",
    "options": [
      {
        "text": "\\(-1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-3\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q5a",
    "topicId": "y12a-6B",
    "chapterId": "y12a-6",
    "c": "6B",
    "t": "Differentiating the trigonometric functions",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "If \\(f(x) = \\sin\\!\\left(\\dfrac{1}{4}x + \\dfrac{\\pi}{2}\\right)\\), find \\(f'(0)\\).",
    "opts": [
      "\\(0\\)",
      "\\(\\dfrac{1}{4}\\)",
      "\\(-\\dfrac{1}{4}\\)",
      "\\(1\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "\\(f'(x)=-\\dfrac{1}{4}\\sin\\dfrac{x}{4}\\) (or equivalent). Evaluate at 0.",
    "solution": "The correct answer is \\(0\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(f(x)=\\sin\\!\\left(\\dfrac{x}{4}+\\dfrac{\\pi}{2}\\right)\\). Find \\(f'(0)\\).",
        "workingOut": "\\(f(x)=\\sin\\!\\left(\\dfrac{x}{4}+\\dfrac{\\pi}{2}\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Note \\(\\sin(\\theta+\\pi/2)=\\cos\\theta\\), so \\(f(x)=\\cos\\dfrac{x}{4}\\). Then \\(f'(x)=-\\dfrac{1}{4}\\sin\\dfrac{x}{4}\\).",
        "workingOut": "\\(f'(x)=-\\dfrac{1}{4}\\sin\\dfrac{x}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "At \\(x=0\\): \\(f'(0)=-\\dfrac{1}{4}\\sin 0=0\\).",
        "workingOut": "\\(f'(0)=0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(0\\).",
        "workingOut": "\\(0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(0\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{1}{4}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-\\dfrac{1}{4}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q5b",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "If \\( f(x) = \\sin(\\frac{1}{4}x + \\frac{\\pi}{2}) \\), find \\( f'(2\\pi) \\).",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "0",
    "solution": "The correct answer is \\(-\\dfrac{1}{4}\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "If  f(x) = \\sin(\\frac{1}{4}x + \\frac{\\pi...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "Given: \\(f(x)=\\sin\\!\\left(\\dfrac{x}{4}+\\dfrac{\\pi}{2}\\right)=\\cos\\dfrac{x}{4}\\). Find \\(f'(2\\pi)\\).",
        "workingOut": "\\(f'(x)=-\\dfrac{1}{4}\\sin\\dfrac{x}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "At \\(x=2\\pi\\): \\(f'(2\\pi)=-\\dfrac{1}{4}\\sin\\dfrac{2\\pi}{4}=-\\dfrac{1}{4}\\sin\\dfrac{\\pi}{2}=-\\dfrac{1}{4}\\cdot 1=-\\dfrac{1}{4}\\).",
        "workingOut": "\\(f'(2\\pi)=-\\dfrac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-\\dfrac{1}{4}\\).",
        "workingOut": "\\(-\\dfrac{1}{4}\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(-\\dfrac{1}{4}\\)",
      "\\(0\\)",
      "\\(\\dfrac{1}{4}\\)",
      "\\(-\\dfrac{1}{2}\\)"
    ],
    "hint": "\\(f'(x)=-\\dfrac{1}{4}\\sin\\dfrac{x}{4}\\). At \\(x=2\\pi\\): \\(\\sin(\\pi/2)=1\\).",
    "options": [
      {
        "text": "\\(-\\dfrac{1}{4}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(0\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{1}{4}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-\\dfrac{1}{2}\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q5c",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "If \\( f(x) = \\sin(\\frac{1}{4}x + \\frac{\\pi}{2}) \\), find \\( f'(-\\pi) \\).",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "1",
    "solution": "The correct answer is \\(\\dfrac{1}{4\\sqrt{2}}\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "If  f(x) = \\sin(\\frac{1}{4}x + \\frac{\\pi...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 1,
    "solutionSteps": [
      {
        "explanation": "Given \\(f(x)=\\cos\\dfrac{x}{4}\\), so \\(f'(x)=-\\dfrac{1}{4}\\sin\\dfrac{x}{4}\\). Find \\(f'(-\\pi)\\).",
        "workingOut": "\\(f'(x)=-\\dfrac{1}{4}\\sin\\dfrac{x}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "At \\(x=-\\pi\\): \\(f'(-\\pi)=-\\dfrac{1}{4}\\sin\\!\\left(-\\dfrac{\\pi}{4}\\right)=-\\dfrac{1}{4}\\left(-\\sin\\dfrac{\\pi}{4}\\right)=\\dfrac{1}{4}\\cdot\\dfrac{\\sqrt{2}}{2}=\\dfrac{\\sqrt{2}}{8}=\\dfrac{1}{4\\sqrt{2}}\\).",
        "workingOut": "\\(f'(-\\pi)=\\dfrac{1}{4\\sqrt{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{1}{4\\sqrt{2}}\\).",
        "workingOut": "\\(\\dfrac{1}{4\\sqrt{2}}\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(-\\dfrac{1}{4\\sqrt{2}}\\)",
      "\\(\\dfrac{1}{4\\sqrt{2}}\\)",
      "\\(\\dfrac{1}{4}\\)",
      "\\(\\dfrac{\\sqrt{2}}{4}\\)"
    ],
    "hint": "\\(f'(x)=-\\dfrac{1}{4}\\sin\\dfrac{x}{4}\\). Use \\(\\sin(-\\pi/4)=-\\sin(\\pi/4)\\).",
    "options": [
      {
        "text": "\\(-\\dfrac{1}{4\\sqrt{2}}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{1}{4\\sqrt{2}}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{1}{4}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{\\sqrt{2}}{4}\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q5d",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "If \\( f(x) = \\sin(\\frac{1}{4}x + \\frac{\\pi}{2}) \\), find \\( f'(\\pi) \\).",
    "difficulty": "easy",
    "timeLimit": 90,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "1",
    "solution": "The correct answer is \\(-\\dfrac{1}{4\\sqrt{2}}\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "If  f(x) = \\sin(\\frac{1}{4}x + \\frac{\\pi...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 1,
    "solutionSteps": [
      {
        "explanation": "Given \\(f'(x)=-\\dfrac{1}{4}\\sin\\dfrac{x}{4}\\). Find \\(f'(\\pi)\\).",
        "workingOut": "\\(f'(x)=-\\dfrac{1}{4}\\sin\\dfrac{x}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "At \\(x=\\pi\\): \\(f'(\\pi)=-\\dfrac{1}{4}\\sin\\dfrac{\\pi}{4}=-\\dfrac{1}{4}\\cdot\\dfrac{\\sqrt{2}}{2}=-\\dfrac{\\sqrt{2}}{8}=-\\dfrac{1}{4\\sqrt{2}}\\).",
        "workingOut": "\\(f'(\\pi)=-\\dfrac{1}{4\\sqrt{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-\\dfrac{1}{4\\sqrt{2}}\\).",
        "workingOut": "\\(-\\dfrac{1}{4\\sqrt{2}}\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(\\dfrac{1}{4\\sqrt{2}}\\)",
      "\\(-\\dfrac{1}{4\\sqrt{2}}\\)",
      "\\(-\\dfrac{1}{4}\\)",
      "\\(\\dfrac{\\sqrt{2}}{4}\\)"
    ],
    "hint": "\\(f'(x)=-\\dfrac{1}{4}\\sin\\dfrac{x}{4}\\). At \\(x=\\pi\\): \\(\\sin(\\pi/4)=\\sqrt{2}/2\\).",
    "options": [
      {
        "text": "\\(\\dfrac{1}{4\\sqrt{2}}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-\\dfrac{1}{4\\sqrt{2}}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-\\dfrac{1}{4}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{\\sqrt{2}}{4}\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q6a",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Find \\( \\frac{dy}{dx} \\) using the product rule: \\( y = x \\sin x \\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "2",
    "solution": "The correct answer is \\(\\sin x + x\\cos x\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "Find  \\frac{dy}{dx}  using the product r...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 2,
    "solutionSteps": [
      {
        "explanation": "Given: \\(y=x\\sin x\\). Why product rule? This is a product of two non-constant functions of \\(x\\) (a polynomial factor and a trig factor). What we will use is the product rule \\(y'=u'v+uv'\\). A common slip is differentiating only one factor and treating the other as constant.",
        "workingOut": "\\(y = x\\sin x\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the factors carefully: let \\(u=x\\) and \\(v=\\sin x\\). Why this split? Each piece has a standard derivative. What: \\(u'=1\\) (power rule) and \\(v'=\\cos x\\) (standard sine derivative). Do not confuse with the chain rule yet — there is no composite angle here.",
        "workingOut": "\\(u = x,\\quad v = \\sin x,\\quad u' = 1,\\quad v' = \\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the product rule fully: \\(y' = u'v + uv' = (1)(\\sin x) + (x)(\\cos x)\\). Why both terms? Dropping either term is the classic product-rule error. Expand carefully so the order of factors matches the options.",
        "workingOut": "\\(y' = \\sin x + x\\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify: nothing cancels further. The answer can be written \\(\\sin x + x\\cos x\\) (or factored as \\(\\sin x + x\\cos x\\) only). Connect: this is not the same as \\(x\\cos x\\) alone, nor \\(\\sin x + x\\sin x\\).",
        "workingOut": "\\(y' = \\sin x + x\\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\sin x + x\\cos x\\). Check: at \\(x=0\\), \\(y=0\\) and \\(y'=\\sin 0 + 0\\cdot\\cos 0=0\\), which matches the product rule evaluation. Reject distractors that flip a sign on cos or replace cos with sin in the second term.",
        "workingOut": "\\(\\sin x + x\\cos x\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(-\\sin x + x -\\cos x\\)",
      "\\(-\\sin x + x \\cos x\\)",
      "\\(\\sin x + x \\cos x\\)",
      "\\(\\sin x + x \\sin x\\)"
    ],
    "hint": "Product rule: if \\(y=uv\\) then \\(y'=u'v+uv'\\). Take \\(u=x\\) and \\(v=\\sin x\\).",
    "options": [
      {
        "text": "\\(-\\sin x + x -\\cos x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-\\sin x + x \\cos x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\sin x + x \\cos x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\sin x + x \\sin x\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q6b",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Find \\( \\frac{dy}{dx} \\) using the product rule: \\( y = 2x \\tan 2x \\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "3",
    "solution": "The correct answer is \\(2\\tan 2x + 4x\\sec^{2} 2x\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "Find  \\frac{dy}{dx}  using the product r...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 3,
    "solutionSteps": [
      {
        "explanation": "Given: \\(y=2x\\tan 2x\\). Why both product and chain? It is a product, and the second factor is a composite (tan of \\(2x\\)). What we will use is \\(y'=u'v+uv'\\) with a chain-rule derivative for \\(v\\). A common slip is using \\(\\sec^{2} 2x\\) without the factor \\(2\\) from the inner derivative.",
        "workingOut": "\\(y = 2x\\tan 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Set \\(u=2x\\) and \\(v=\\tan 2x\\). Then \\(u'=2\\). For \\(v\\), write the chain rule carefully: outer derivative of tan is \\(\\sec^{2}\\) of the same argument, times the derivative of the inside \\(2x\\). So \\(v'=\\sec^{2}(2x)\\cdot 2=2\\sec^{2} 2x\\).",
        "workingOut": "\\(u' = 2,\\quad v' = 2\\sec^{2} 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute into the product rule: \\(y' = u'v + uv' = 2\\cdot\\tan 2x + (2x)\\cdot(2\\sec^{2} 2x)\\). Why keep the argument as \\(2x\\) everywhere? Replacing \\(\\tan 2x\\) by \\(\\tan x\\) or dropping a power of sec is a frequent multiple-choice trap.",
        "workingOut": "\\(y' = 2\\tan 2x + 4x\\sec^{2} 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the second term: \\(2x\\cdot 2\\sec^{2} 2x = 4x\\sec^{2} 2x\\). The first term stays \\(2\\tan 2x\\). No further trig identity is required to match the options.",
        "workingOut": "\\(y' = 2\\tan 2x + 4x\\sec^{2} 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(2\\tan 2x + 4x\\sec^{2} 2x\\). Reject options that use \\(\\sec 2x\\) (not squared), that replace tan by sin, or that put a minus on the first term from confusing product with quotient.",
        "workingOut": "\\(2\\tan 2x + 4x\\sec^{2} 2x\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(-2 \\tan 2x + 4x \\sec^2 2x\\)",
      "\\(2 \\sin 2x + 4x \\sec^2 2x\\)",
      "\\(2 \\tan 2x + 4x \\sec 2x\\)",
      "\\(2 \\tan 2x + 4x \\sec^2 2x\\)"
    ],
    "hint": "Product rule with \\(u=2x\\), \\(v=\\tan 2x\\). Use the chain rule: \\(\\dfrac{d}{dx}\\tan 2x = 2\\sec^{2} 2x\\).",
    "options": [
      {
        "text": "\\(-2 \\tan 2x + 4x \\sec^2 2x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2 \\sin 2x + 4x \\sec^2 2x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2 \\tan 2x + 4x \\sec 2x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2 \\tan 2x + 4x \\sec^2 2x\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q6c",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Find \\( \\frac{dy}{dx} \\) using the product rule: \\( y = x^2 \\cos 2x \\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "2",
    "solution": "The correct answer is \\(2x\\cos 2x - 2x^{2}\\sin 2x\\).",
    "origin": "seed",
    "isNew": true,
    "graphData": null,
    "isActive": true,
    "title": "Find  \\frac{dy}{dx}  using the product r...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 2,
    "solutionSteps": [
      {
        "explanation": "Given: \\(y=x^{2}\\cos 2x\\). Why product + chain? Polynomial times a composite cosine. What: product rule \\(y'=u'v+uv'\\) with chain rule on the cosine factor. A common slip is using \\(-\\sin 2x\\) without the chain factor \\(2\\).",
        "workingOut": "\\(y = x^{2}\\cos 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Let \\(u=x^{2}\\) and \\(v=\\cos 2x\\). Then \\(u'=2x\\). For \\(v\\): derivative of cos of the inside is \\(-\\sin(\\text{inside})\\) times the inside derivative. Inside is \\(2x\\), so \\(v'=-\\sin(2x)\\cdot 2=-2\\sin 2x\\).",
        "workingOut": "\\(u' = 2x,\\quad v' = -2\\sin 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the product rule: \\(y' = (2x)\\cos 2x + x^{2}(-2\\sin 2x)\\). Keep the signs explicit so the second term becomes a subtraction after simplifying.",
        "workingOut": "\\(y' = 2x\\cos 2x + x^{2}(-2\\sin 2x)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify: \\(x^{2}(-2\\sin 2x)=-2x^{2}\\sin 2x\\). Therefore \\(y'=2x\\cos 2x - 2x^{2}\\sin 2x\\). Do not reduce the power of \\(x\\) in the second term to \\(2x\\sin 2x\\) (that would drop an \\(x\\)).",
        "workingOut": "\\(y' = 2x\\cos 2x - 2x^{2}\\sin 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(2x\\cos 2x - 2x^{2}\\sin 2x\\). Check structure: first term has cos (from differentiating \\(x^{2}\\) only), second has sin (from differentiating the cosine factor). Reject options with wrong powers of \\(x\\) or missing the minus.",
        "workingOut": "\\(2x\\cos 2x - 2x^{2}\\sin 2x\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(2x -\\cos 2x - 2x^2 -\\sin 2x\\)",
      "\\(2x \\cos 2x - 2x \\sin 2x\\)",
      "\\(2x \\cos 2x - 2x^2 \\sin 2x\\)",
      "\\(2x \\sin 2x - 2x^2 \\sin 2x\\)"
    ],
    "hint": "Product rule: \\(u=x^{2}\\), \\(v=\\cos 2x\\). Chain rule on cos: \\(v'=-2\\sin 2x\\).",
    "options": [
      {
        "text": "\\(2x -\\cos 2x - 2x^2 -\\sin 2x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2x \\cos 2x - 2x \\sin 2x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2x \\cos 2x - 2x^2 \\sin 2x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2x \\sin 2x - 2x^2 \\sin 2x\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q6d",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Find \\( \\frac{dy}{dx} \\) using the product rule: \\( y = x^3 \\sin 3x \\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "2",
    "solution": "The correct answer is \\(3x^{2}\\sin 3x + 3x^{3}\\cos 3x\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "Find  \\frac{dy}{dx}  using the product r...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 2,
    "solutionSteps": [
      {
        "explanation": "Given: \\(y=x^{3}\\sin 3x\\). Why product + chain? Cubic power times sine of a multiple angle. What: \\(y'=u'v+uv'\\) with chain rule on \\(\\sin 3x\\). A common slip is using \\(\\cos 3x\\) without the factor \\(3\\).",
        "workingOut": "\\(y = x^{3}\\sin 3x\\)",
        "graphData": null
      },
      {
        "explanation": "Let \\(u=x^{3}\\) and \\(v=\\sin 3x\\). Power rule: \\(u'=3x^{2}\\). Chain rule for sine: outer cos of the same argument, times derivative of \\(3x\\). So \\(v'=\\cos(3x)\\cdot 3=3\\cos 3x\\).",
        "workingOut": "\\(u' = 3x^{2},\\quad v' = 3\\cos 3x\\)",
        "graphData": null
      },
      {
        "explanation": "Product rule: \\(y' = (3x^{2})(\\sin 3x) + (x^{3})(3\\cos 3x)\\). Both terms are positive here because the derivative of sine is cos (no automatic minus).",
        "workingOut": "\\(y' = 3x^{2}\\sin 3x + 3x^{3}\\cos 3x\\)",
        "graphData": null
      },
      {
        "explanation": "You may factor \\(3x^{2}\\) if you wish: \\(y'=3x^{2}(\\sin 3x + x\\cos 3x)\\), but the expanded form matches the options directly. Keep the argument as \\(3x\\) in both trig functions.",
        "workingOut": "\\(y' = 3x^{2}\\sin 3x + 3x^{3}\\cos 3x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(3x^{2}\\sin 3x + 3x^{3}\\cos 3x\\). Reject options that use \\(\\sin\\) in both terms, drop an \\(x\\) power, or put a minus between the terms from confusing sin with cos differentiation.",
        "workingOut": "\\(3x^{2}\\sin 3x + 3x^{3}\\cos 3x\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(3x \\sin 3x + 3x^3 \\cos 3x\\)",
      "\\(3x^2 -\\sin 3x + 3x^3 -\\cos 3x\\)",
      "\\(3x^2 \\sin 3x + 3x^3 \\cos 3x\\)",
      "\\(3x^2 \\sin 3x + 3x^3 \\sin 3x\\)"
    ],
    "hint": "Product rule: \\(u=x^{3}\\), \\(v=\\sin 3x\\). Chain rule: \\(v'=3\\cos 3x\\).",
    "options": [
      {
        "text": "\\(3x \\sin 3x + 3x^3 \\cos 3x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3x^2 -\\sin 3x + 3x^3 -\\cos 3x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3x^2 \\sin 3x + 3x^3 \\cos 3x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3x^2 \\sin 3x + 3x^3 \\sin 3x\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q7a",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Find \\( \\frac{dy}{dx} \\) using the quotient rule: \\( y = \\frac{\\sin x}{x} \\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "2",
    "solution": "The correct answer is \\(\\dfrac{x\\cos x - \\sin x}{x^{2}}\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "Find  \\frac{dy}{dx}  using the quotient ...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 2,
    "solutionSteps": [
      {
        "explanation": "Given: \\(y=\\dfrac{\\sin x}{x}\\). Why quotient rule? A fraction where both numerator and denominator depend on \\(x\\). What: \\(\\left(\\dfrac{u}{v}\\right)'=\\dfrac{u'v-uv'}{v^{2}}\\). A common slip is writing \\(u'v+uv'\\) (product-rule signs) or forgetting to square the denominator.",
        "workingOut": "\\(y = \\dfrac{\\sin x}{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Set \\(u=\\sin x\\) and \\(v=x\\). Then \\(u'=\\cos x\\) and \\(v'=1\\). Why these? Standard sine derivative and power rule on \\(x^{1}\\). Do not treat the denominator as constant (that would give only \\(\\dfrac{\\cos x}{x}\\)).",
        "workingOut": "\\(u = \\sin x,\\quad v = x,\\quad u' = \\cos x,\\quad v' = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute into the quotient formula carefully: numerator is \\(u'v - uv' = (\\cos x)(x) - (\\sin x)(1) = x\\cos x - \\sin x\\). Denominator is \\(v^{2}=x^{2}\\). The minus between the two numerator terms is essential.",
        "workingOut": "\\(y' = \\dfrac{x\\cos x - \\sin x}{x^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Leave the answer in this simplified form. You could write \\(\\dfrac{\\cos x}{x}-\\dfrac{\\sin x}{x^{2}}\\) by splitting, but the single-fraction form matches the options. Domain note: undefined at \\(x=0\\).",
        "workingOut": "\\(y' = \\dfrac{x\\cos x - \\sin x}{x^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{x\\cos x - \\sin x}{x^{2}}\\). Reject a global minus sign in front of the whole fraction, or the reciprocal of the derivative expression.",
        "workingOut": "\\(\\dfrac{x\\cos x - \\sin x}{x^{2}}\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(-\\frac{x \\cos x - \\sin x}{x^2}\\)",
      "\\(\\frac{1}{x^2}\\)",
      "\\(\\frac{x \\cos x - \\sin x}{x^2}\\)",
      "\\(\\frac{x^2}{x \\cos x - \\sin x}\\)"
    ],
    "hint": "Quotient rule: \\(\\left(\\dfrac{u}{v}\\right)'=\\dfrac{u'v-uv'}{v^{2}}\\) with \\(u=\\sin x\\), \\(v=x\\).",
    "options": [
      {
        "text": "\\(-\\frac{x \\cos x - \\sin x}{x^2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\frac{1}{x^2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\frac{x \\cos x - \\sin x}{x^2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\frac{x^2}{x \\cos x - \\sin x}\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q7b",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Find \\( \\frac{dy}{dx} \\) using the quotient rule: \\( y = \\frac{\\cos x}{x} \\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "1",
    "solution": "The correct answer is \\(\\dfrac{-x\\sin x - \\cos x}{x^{2}}\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "Find  \\frac{dy}{dx}  using the quotient ...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 1,
    "solutionSteps": [
      {
        "explanation": "Given: \\(y=\\dfrac{\\cos x}{x}\\). Why quotient rule? Fraction of two functions of \\(x\\). What: \\(\\dfrac{u'v-uv'}{v^{2}}\\). A common slip is using \\(u'=\\sin x\\) (missing the minus from the cosine derivative).",
        "workingOut": "\\(y = \\dfrac{\\cos x}{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Let \\(u=\\cos x\\) and \\(v=x\\). Then \\(u'=-\\sin x\\) and \\(v'=1\\). Keep the minus on \\(u'\\) visible in every later line so it does not disappear.",
        "workingOut": "\\(u = \\cos x,\\quad v = x,\\quad u' = -\\sin x,\\quad v' = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Numerator: \\(u'v - uv' = (-\\sin x)(x) - (\\cos x)(1) = -x\\sin x - \\cos x\\). Denominator: \\(x^{2}\\). Both terms in the numerator end up with a minus.",
        "workingOut": "\\(y' = \\dfrac{-x\\sin x - \\cos x}{x^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Equivalent forms: \\(-\\dfrac{x\\sin x + \\cos x}{x^{2}}\\) factors out a global minus. The option form \\(\\dfrac{-x\\sin x - \\cos x}{x^{2}}\\) is the same. Do not flip only one of the two minus signs.",
        "workingOut": "\\(y' = \\dfrac{-x\\sin x - \\cos x}{x^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{-x\\sin x - \\cos x}{x^{2}}\\). Reject versions that use \\(+x\\sin x\\) in the numerator (from forgetting that the derivative of cos is \\(-\\sin\\)).",
        "workingOut": "\\(\\dfrac{-x\\sin x - \\cos x}{x^{2}}\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(-\\frac{-x \\sin x - \\cos x}{x^2}\\)",
      "\\(\\frac{-x \\sin x - \\cos x}{x^2}\\)",
      "\\(\\frac{x \\sin x - \\cos x}{x^2}\\)",
      "\\(\\frac{x^2}{-x \\sin x - \\cos x}\\)"
    ],
    "hint": "Quotient rule with \\(u=\\cos x\\), \\(v=x\\). Remember \\(u'=-\\sin x\\).",
    "options": [
      {
        "text": "\\(-\\frac{-x \\sin x - \\cos x}{x^2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\frac{-x \\sin x - \\cos x}{x^2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\frac{x \\sin x - \\cos x}{x^2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\frac{x^2}{-x \\sin x - \\cos x}\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q7c",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Find \\( \\frac{dy}{dx} \\) using the quotient rule: \\( y = \\frac{x^2}{\\cos x} \\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "2",
    "solution": "The correct answer is \\(\\dfrac{2x\\cos x + x^{2}\\sin x}{\\cos^{2}x}\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "Find  \\frac{dy}{dx}  using the quotient ...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 2,
    "solutionSteps": [
      {
        "explanation": "Given: \\(y=\\dfrac{x^{2}}{\\cos x}\\). Why quotient? Power in the numerator, cosine in the denominator. What: quotient rule. A common slip is writing the denominator as \\(\\cos x\\) instead of \\(\\cos^{2}x\\).",
        "workingOut": "\\(y = \\dfrac{x^{2}}{\\cos x}\\)",
        "graphData": null
      },
      {
        "explanation": "Let \\(u=x^{2}\\) and \\(v=\\cos x\\). Then \\(u'=2x\\) and \\(v'=-\\sin x\\). The minus on \\(v'\\) will create a double minus in the next step — handle it carefully.",
        "workingOut": "\\(u = x^{2},\\quad v = \\cos x,\\quad u' = 2x,\\quad v' = -\\sin x\\)",
        "graphData": null
      },
      {
        "explanation": "Numerator: \\(u'v - uv' = (2x)(\\cos x) - (x^{2})(-\\sin x)\\). The second term is minus times a negative: \\(-(x^{2})(-\\sin x)=+x^{2}\\sin x\\). So the numerator is \\(2x\\cos x + x^{2}\\sin x\\).",
        "workingOut": "\\(\\text{numerator} = 2x\\cos x + x^{2}\\sin x\\)",
        "graphData": null
      },
      {
        "explanation": "Denominator is always \\(v^{2}=\\cos^{2}x\\) (never just \\(\\cos x\\)). Combine: \\(y'=\\dfrac{2x\\cos x + x^{2}\\sin x}{\\cos^{2}x}\\). You may also write this as \\(2x\\sec x + x^{2}\\sec x\\tan x\\), but the fraction form matches the options.",
        "workingOut": "\\(y' = \\dfrac{2x\\cos x + x^{2}\\sin x}{\\cos^{2}x}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{2x\\cos x + x^{2}\\sin x}{\\cos^{2}x}\\). Reject a global minus in front of the fraction (that comes from mishandling the double minus).",
        "workingOut": "\\(\\dfrac{2x\\cos x + x^{2}\\sin x}{\\cos^{2}x}\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(-\\frac{2x \\cos x + x^2 \\sin x}{\\cos^2 x}\\)",
      "\\(\\frac{1}{\\cos^2 x}\\)",
      "\\(\\frac{2x \\cos x + x^2 \\sin x}{\\cos^2 x}\\)",
      "\\(\\frac{\\cos^2 x}{2x \\cos x + x^2 \\sin x}\\)"
    ],
    "hint": "Quotient rule: \\(u=x^{2}\\), \\(v=\\cos x\\). Watch the double minus when subtracting \\(u v'\\).",
    "options": [
      {
        "text": "\\(-\\frac{2x \\cos x + x^2 \\sin x}{\\cos^2 x}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\frac{1}{\\cos^2 x}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\frac{2x \\cos x + x^2 \\sin x}{\\cos^2 x}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\frac{\\cos^2 x}{2x \\cos x + x^2 \\sin x}\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q7d",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Find \\( \\frac{dy}{dx} \\) using the quotient rule: \\( y = \\frac{x}{1 + \\sin x} \\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "2",
    "solution": "The correct answer is \\(\\dfrac{1+\\sin x - x\\cos x}{(1+\\sin x)^{2}}\\).",
    "origin": "seed",
    "isNew": true,
    "isActive": true,
    "title": "Find  \\frac{dy}{dx}  using the quotient ...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 2,
    "solutionSteps": [
      {
        "explanation": "Given: \\(y=\\dfrac{x}{1+\\sin x}\\). Why quotient? Linear numerator over a trig binomial. What: \\(\\dfrac{u'v-uv'}{v^{2}}\\). A common slip is differentiating only the numerator and ignoring the chain/sum in the denominator.",
        "workingOut": "\\(y = \\dfrac{x}{1+\\sin x}\\)",
        "graphData": null
      },
      {
        "explanation": "Let \\(u=x\\) and \\(v=1+\\sin x\\). Then \\(u'=1\\). For \\(v\\), derivative of a constant plus sine is just cos: \\(v'=\\cos x\\). The \\(1\\) contributes zero.",
        "workingOut": "\\(u = x,\\quad v = 1+\\sin x,\\quad u' = 1,\\quad v' = \\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "Numerator: \\(u'v - uv' = (1)(1+\\sin x) - (x)(\\cos x) = 1+\\sin x - x\\cos x\\). Keep the three-term expression; do not cancel the \\(1+\\sin x\\) against the denominator yet (they are not identical factors after the subtraction).",
        "workingOut": "\\(\\text{numerator} = 1 + \\sin x - x\\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "Denominator: \\(v^{2}=(1+\\sin x)^{2}\\). Therefore \\(y'=\\dfrac{1+\\sin x - x\\cos x}{(1+\\sin x)^{2}}\\). Do not leave the denominator as only \\(1+\\sin x\\).",
        "workingOut": "\\(y' = \\dfrac{1+\\sin x - x\\cos x}{(1+\\sin x)^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{1+\\sin x - x\\cos x}{(1+\\sin x)^{2}}\\). Reject a global minus (from swapping the order in \\(u'v-uv'\\)) or the reciprocal of this expression.",
        "workingOut": "\\(\\dfrac{1+\\sin x - x\\cos x}{(1+\\sin x)^{2}}\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(-\\frac{1 + \\sin x - x \\cos x}{(1 + \\sin x)^2}\\)",
      "\\(\\frac{(1 + \\sin x)^2}{1 + \\sin x - x \\cos x}\\)",
      "\\(\\frac{1 + \\sin x - x \\cos x}{(1 + \\sin x)^2}\\)",
      "\\(\\frac{1}{(1 + \\sin x)^2}\\)"
    ],
    "hint": "Quotient rule: \\(u=x\\), \\(v=1+\\sin x\\). Then \\(v'=\\cos x\\).",
    "options": [
      {
        "text": "\\(-\\frac{1 + \\sin x - x \\cos x}{(1 + \\sin x)^2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\frac{(1 + \\sin x)^2}{1 + \\sin x - x \\cos x}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\frac{1 + \\sin x - x \\cos x}{(1 + \\sin x)^2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\frac{1}{(1 + \\sin x)^2}\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q8a",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Find \\( \\frac{dy}{dx} \\) using the chain rule: \\( y = \\sin(x^2) \\). Remember that \\( \\cos^2 x \\) means \\( (\\cos x)^2 \\).",
    "difficulty": "medium",
    "timeLimit": 120,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "2",
    "solution": "The correct answer is \\(2x\\cos(x^{2})\\).",
    "origin": "seed",
    "isNew": true,
    "graphData": null,
    "isActive": true,
    "title": "Find  \\frac{dy}{dx}  using the chain rul...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 2,
    "solutionSteps": [
      {
        "explanation": "Given: \\(y=\\sin(x^{2})\\). Strategy: chain rule.",
        "workingOut": "\\(y=\\sin(x^{2})\\)",
        "graphData": null
      },
      {
        "explanation": "Let \\(u=x^{2}\\). Then \\(y=\\sin u\\) and \\(y'=\\cos u\\cdot u'\\) with \\(u'=2x\\).",
        "workingOut": "\\(u=x^{2},\\ u'=2x\\)",
        "graphData": null
      },
      {
        "explanation": "So \\(y'=\\cos(x^{2})\\cdot 2x=2x\\cos(x^{2})\\).",
        "workingOut": "\\(y'=2x\\cos(x^{2})\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(2x\\cos(x^{2})\\).",
        "workingOut": "\\(2x\\cos(x^{2})\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(2x -\\cos(x^2)\\)",
      "\\(2x \\cos(x)\\)",
      "\\(2x \\cos(x^2)\\)",
      "\\(2x \\sin(x^2)\\)"
    ],
    "hint": "Chain rule: outer sin, inner \\(x^{2}\\).",
    "options": [
      {
        "text": "\\(2x -\\cos(x^2)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2x \\cos(x)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2x \\cos(x^2)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2x \\sin(x^2)\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q8b",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Find \\( \\frac{dy}{dx} \\) using the chain rule: \\( y = \\sin(1 - x^2) \\). Remember that \\( \\cos^2 x \\) means \\( (\\cos x)^2 \\).",
    "difficulty": "medium",
    "timeLimit": 120,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "2",
    "solution": "The correct answer is \\(-2x\\cos(1-x^{2})\\).",
    "origin": "seed",
    "isNew": true,
    "graphData": null,
    "isActive": true,
    "title": "Find  \\frac{dy}{dx}  using the chain rul...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 2,
    "solutionSteps": [
      {
        "explanation": "Given: \\(y=\\sin(1-x^{2})\\). Why chain rule? Sine of a non-linear expression in \\(x\\) — a composition. What: if \\(y=\\sin u\\) then \\(y'=\\cos u\\cdot u'\\). A common slip is differentiating the inside incorrectly as \\(-x\\) or \\(-2\\) only.",
        "workingOut": "\\(y = \\sin(1-x^{2})\\)",
        "graphData": null
      },
      {
        "explanation": "Set the inside carefully: let \\(u=1-x^{2}\\). Why? Outer function is sin; everything inside the brackets is \\(u\\). Differentiate the inside: derivative of \\(1\\) is \\(0\\), derivative of \\(-x^{2}\\) is \\(-2x\\), so \\(u'=-2x\\).",
        "workingOut": "\\(u = 1 - x^{2},\\quad u' = -2x\\)",
        "graphData": null
      },
      {
        "explanation": "Outer derivative first: \\(\\dfrac{d}{du}\\sin u = \\cos u\\). Multiply by the inside derivative: \\(y'=\\cos u\\cdot u'=\\cos(1-x^{2})\\cdot(-2x)\\). Keep the full argument \\(1-x^{2}\\) — do not replace it by \\(1-x\\).",
        "workingOut": "\\(y' = \\cos(1-x^{2})\\cdot(-2x)\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite with the constant factor in front (standard option form): \\(y'=-2x\\cos(1-x^{2})\\). The minus comes only from \\(u'\\); the outer sin still contributes cos, not sin or a second minus.",
        "workingOut": "\\(y' = -2x\\cos(1-x^{2})\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-2x\\cos(1-x^{2})\\). Reject \\(-2x\\sin(1-x^{2})\\) (wrong outer derivative) and any option that changes the argument to \\(1-x\\).",
        "workingOut": "\\(-2x\\cos(1-x^{2})\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(-2x -\\cos(1 - x^2)\\)",
      "\\(-2x \\cos(1 - x)\\)",
      "\\(-2x \\cos(1 - x^2)\\)",
      "\\(-2x \\sin(1 - x^2)\\)"
    ],
    "hint": "Chain rule: outer sin, inner \\(1-x^{2}\\). Then \\(y'=\\cos(1-x^{2})\\cdot(-2x)\\).",
    "options": [
      {
        "text": "\\(-2x -\\cos(1 - x^2)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-2x \\cos(1 - x)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-2x \\cos(1 - x^2)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-2x \\sin(1 - x^2)\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q8c",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Find \\( \\frac{dy}{dx} \\) using the chain rule: \\( y = \\cos(x^3 + 1) \\). Remember that \\( \\cos^2 x \\) means \\( (\\cos x)^2 \\).",
    "difficulty": "medium",
    "timeLimit": 120,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "2",
    "solution": "The correct answer is \\(-3x^{2}\\sin(x^{3}+1)\\).",
    "origin": "seed",
    "isNew": true,
    "graphData": null,
    "isActive": true,
    "title": "Find  \\frac{dy}{dx}  using the chain rul...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 2,
    "solutionSteps": [
      {
        "explanation": "Given: \\(y=\\cos(x^{3}+1)\\). Why chain rule? Cosine of a polynomial composite. What: if \\(y=\\cos u\\) then \\(y'=-\\sin u\\cdot u'\\). A common slip is dropping the automatic minus from the cosine derivative.",
        "workingOut": "\\(y = \\cos(x^{3}+1)\\)",
        "graphData": null
      },
      {
        "explanation": "Let \\(u=x^{3}+1\\). Then power rule: \\(u'=3x^{2}\\) (constant \\(+1\\) vanishes). Do not write \\(u'=3x\\) — the power rule multiplies by the old power, leaving \\(x^{2}\\).",
        "workingOut": "\\(u = x^{3}+1,\\quad u' = 3x^{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the chain rule: \\(y'=-\\sin u\\cdot u'=-\\sin(x^{3}+1)\\cdot 3x^{2}\\). The minus is from differentiating cos; the factor \\(3x^{2}\\) is from the inside.",
        "workingOut": "\\(y' = -\\sin(x^{3}+1)\\cdot 3x^{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Combine coefficients: \\(y'=-3x^{2}\\sin(x^{3}+1)\\). Keep the argument exactly \\(x^{3}+1\\). Positive \\(3x^{2}\\sin(\\ldots)\\) would mean you dropped the outer minus.",
        "workingOut": "\\(y' = -3x^{2}\\sin(x^{3}+1)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-3x^{2}\\sin(x^{3}+1)\\). Reject options with only \\(3x\\) instead of \\(3x^{2}\\), or a plus sign in front of the sine term.",
        "workingOut": "\\(-3x^{2}\\sin(x^{3}+1)\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(-3x \\sin(x^3 + 1)\\)",
      "\\(-3x^2 -\\sin(x^3 + 1)\\)",
      "\\(-3x^2 \\sin(x^3 + 1)\\)",
      "\\(3x^2 \\sin(x^3 + 1)\\)"
    ],
    "hint": "Chain rule: outer cos, inner \\(x^{3}+1\\). Outer derivative is \\(-\\sin\\) of the same argument.",
    "options": [
      {
        "text": "\\(-3x \\sin(x^3 + 1)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-3x^2 -\\sin(x^3 + 1)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-3x^2 \\sin(x^3 + 1)\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3x^2 \\sin(x^3 + 1)\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q8d",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Find \\( \\frac{dy}{dx} \\) using the chain rule: \\( y = \\sin \\frac{1}{x} \\). Remember that \\( \\cos^2 x \\) means \\( (\\cos x)^2 \\).",
    "difficulty": "medium",
    "timeLimit": 120,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "1",
    "solution": "The correct answer is \\(-\\dfrac{1}{x^{2}}\\cos\\dfrac{1}{x}\\).",
    "origin": "seed",
    "isNew": true,
    "graphData": null,
    "isActive": true,
    "title": "Find  \\frac{dy}{dx}  using the chain rul...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 1,
    "solutionSteps": [
      {
        "explanation": "Given: \\(y=\\sin\\dfrac{1}{x}\\). Why chain rule? Sine of a reciprocal function. What: \\(y=\\sin u\\) with \\(u=\\dfrac{1}{x}\\), so \\(y'=\\cos u\\cdot u'\\). A common slip is treating \\(\\dfrac{1}{x}\\) as if its derivative were \\(\\dfrac{1}{x^{2}}\\) without the minus.",
        "workingOut": "\\(y = \\sin\\dfrac{1}{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite the inside as a power if helpful: \\(u=x^{-1}\\). Power rule: \\(u'=-1\\cdot x^{-2}=-x^{-2}=-\\dfrac{1}{x^{2}}\\). Domain: \\(x\\neq 0\\).",
        "workingOut": "\\(u = x^{-1},\\quad u' = -\\dfrac{1}{x^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Outer derivative of sin is cos of the same argument: \\(\\cos u=\\cos\\dfrac{1}{x}\\). Multiply: \\(y'=\\cos\\dfrac{1}{x}\\cdot\\left(-\\dfrac{1}{x^{2}}\\right)\\).",
        "workingOut": "\\(y' = \\cos\\dfrac{1}{x}\\cdot\\left(-\\dfrac{1}{x^{2}}\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Write as a single expression: \\(y'=-\\dfrac{1}{x^{2}}\\cos\\dfrac{1}{x}\\). There is only one minus overall. A double minus (plus) would be wrong.",
        "workingOut": "\\(y' = -\\dfrac{1}{x^{2}}\\cos\\dfrac{1}{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-\\dfrac{1}{x^{2}}\\cos\\dfrac{1}{x}\\). Reject options that use sin instead of cos after differentiating the outer function, or that invert the factor to \\(-x^{2}\\).",
        "workingOut": "\\(-\\dfrac{1}{x^{2}}\\cos\\dfrac{1}{x}\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(--\\frac{1}{x^2} \\cos \\frac{1}{x}\\)",
      "\\(-\\frac{1}{x^2} \\cos \\frac{1}{x}\\)",
      "\\(-\\frac{1}{x^2} \\sin \\frac{1}{x}\\)",
      "\\(-\\frac{x^2}{1} \\cos \\frac{1}{x}\\)"
    ],
    "hint": "Chain rule with inner \\(u=x^{-1}\\). Then \\(u'=-x^{-2}=-\\dfrac{1}{x^{2}}\\).",
    "options": [
      {
        "text": "\\(--\\frac{1}{x^2} \\cos \\frac{1}{x}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-\\frac{1}{x^2} \\cos \\frac{1}{x}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-\\frac{1}{x^2} \\sin \\frac{1}{x}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-\\frac{x^2}{1} \\cos \\frac{1}{x}\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q8e",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Find \\( \\frac{dy}{dx} \\) using the chain rule: \\( y = \\cos^2 x \\). Remember that \\( \\cos^2 x \\) means \\( (\\cos x)^2 \\).",
    "difficulty": "medium",
    "timeLimit": 120,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "1",
    "solution": "The correct answer is \\(-2\\cos x\\sin x\\).",
    "origin": "seed",
    "isNew": true,
    "graphData": null,
    "isActive": true,
    "title": "Find  \\frac{dy}{dx}  using the chain rul...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 1,
    "solutionSteps": [
      {
        "explanation": "Given: \\(y=\\cos^{2}x\\). Why rewrite? The notation \\(\\cos^{2}x\\) means \\((\\cos x)^{2}\\), not \\(\\cos(\\cos x)\\). What: power chain rule on \\(u^{2}\\) with \\(u=\\cos x\\). A common slip is differentiating as if it were \\(\\cos(x^{2})\\).",
        "workingOut": "\\(y = (\\cos x)^{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Let \\(u=\\cos x\\), so \\(y=u^{2}\\). Power rule: \\(\\dfrac{d}{du}u^{2}=2u\\). Inside: \\(u'=-\\sin x\\). Therefore \\(y'=2u\\cdot u'=2\\cos x\\cdot(-\\sin x)\\).",
        "workingOut": "\\(y' = 2\\cos x\\cdot(-\\sin x)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the product: \\(y'=-2\\cos x\\sin x\\). Equivalently \\(-\\sin 2x\\) by the double-angle identity, but the product form matches the options.",
        "workingOut": "\\(y' = -2\\cos x\\sin x\\)",
        "graphData": null
      },
      {
        "explanation": "Sign check: near \\(x=0^{+}\\), cos is positive and sin is positive, so the derivative of \\(\\cos^{2}x\\) (which starts at 1 and decreases) should be negative — consistent with \\(-2\\cos x\\sin x\\).",
        "workingOut": "\\(y' = -2\\cos x\\sin x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-2\\cos x\\sin x\\). Reject the positive \\(2\\cos x\\sin x\\) (dropped the minus from the cosine derivative) and garbled products like \\(-2\\sin x\\sin x\\).",
        "workingOut": "\\(-2\\cos x\\sin x\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(-2 -\\cos x -\\sin x\\)",
      "\\(-2 \\cos x \\sin x\\)",
      "\\(-2 \\sin x \\sin x\\)",
      "\\(2 \\cos x \\sin x\\)"
    ],
    "hint": "Write \\(\\cos^{2}x=(\\cos x)^{2}\\). Chain rule: \\(2\\cos x\\cdot(-\\sin x)\\).",
    "options": [
      {
        "text": "\\(-2 -\\cos x -\\sin x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-2 \\cos x \\sin x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-2 \\sin x \\sin x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2 \\cos x \\sin x\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q8f",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Find \\( \\frac{dy}{dx} \\) using the chain rule: \\( y = \\sin^3 x \\). Remember that \\( \\cos^2 x \\) means \\( (\\cos x)^2 \\).",
    "difficulty": "medium",
    "timeLimit": 120,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "2",
    "solution": "The correct answer is \\(3\\sin^{2}x\\cos x\\).",
    "origin": "seed",
    "isNew": true,
    "graphData": null,
    "isActive": true,
    "title": "Find  \\frac{dy}{dx}  using the chain rul...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 2,
    "solutionSteps": [
      {
        "explanation": "Given: \\(y=\\sin^{3}x\\). Why rewrite? \\(\\sin^{3}x=(\\sin x)^{3}\\) — a power of sine, not sine of a cube. What: chain rule for \\(u^{3}\\) with \\(u=\\sin x\\). A common slip is writing \\(3\\sin x\\cos x\\) (as if the power were 2, or confusing with the double-angle derivative of \\(\\sin^{2}\\)).",
        "workingOut": "\\(y = (\\sin x)^{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Let \\(u=\\sin x\\), so \\(y=u^{3}\\). Then \\(\\dfrac{d}{du}u^{3}=3u^{2}\\) and \\(u'=\\cos x\\). Multiply: \\(y'=3u^{2}\\cdot u'=3(\\sin x)^{2}\\cos x\\).",
        "workingOut": "\\(y' = 3(\\sin x)^{2}\\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite with standard squared-trig notation: \\(y'=3\\sin^{2}x\\cos x\\). The power 2 stays on sin; cos is not squared. Do not write \\(3\\sin x\\cos x\\) or \\(3\\sin^{2}x\\sin x\\).",
        "workingOut": "\\(y' = 3\\sin^{2}x\\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "Structure check: power rule contributes the factor 3 and reduces the power from 3 to 2; chain rule multiplies by the derivative of the inside, which is cos. Both pieces are required.",
        "workingOut": "\\(y' = 3\\sin^{2}x\\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(3\\sin^{2}x\\cos x\\). Reject options missing the square on sin or replacing cos by another sin.",
        "workingOut": "\\(3\\sin^{2}x\\cos x\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(3 -\\sin^2 x -\\cos x\\)",
      "\\(3 \\sin x \\cos x\\)",
      "\\(3 \\sin^2 x \\cos x\\)",
      "\\(3 \\sin^2 x \\sin x\\)"
    ],
    "hint": "Write \\(\\sin^{3}x=(\\sin x)^{3}\\). Then \\(y'=3(\\sin x)^{2}\\cdot\\cos x\\).",
    "options": [
      {
        "text": "\\(3 -\\sin^2 x -\\cos x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3 \\sin x \\cos x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3 \\sin^2 x \\cos x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3 \\sin^2 x \\sin x\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q8g",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Find \\( \\frac{dy}{dx} \\) using the chain rule: \\( y = \\tan^2 x \\). Remember that \\( \\cos^2 x \\) means \\( (\\cos x)^2 \\).",
    "difficulty": "medium",
    "timeLimit": 120,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "3",
    "solution": "The correct answer is \\(2\\tan x\\sec^{2}x\\).",
    "origin": "seed",
    "isNew": true,
    "graphData": null,
    "isActive": true,
    "title": "Find  \\frac{dy}{dx}  using the chain rul...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 3,
    "solutionSteps": [
      {
        "explanation": "Given: \\(y=\\tan^{2}x\\). Why rewrite? \\(\\tan^{2}x=(\\tan x)^{2}\\). What: power chain rule with inside tan. A common slip is using \\(\\sec x\\) (not squared) for the derivative of tan, or putting a minus from confusing tan with cot.",
        "workingOut": "\\(y = (\\tan x)^{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Let \\(u=\\tan x\\), so \\(y=u^{2}\\). Then \\(\\dfrac{d}{du}u^{2}=2u\\) and the standard derivative \\(u'=\\sec^{2}x\\). Therefore \\(y'=2u\\cdot u'=2\\tan x\\cdot\\sec^{2}x\\).",
        "workingOut": "\\(y' = 2\\tan x\\sec^{2}x\\)",
        "graphData": null
      },
      {
        "explanation": "No further simplification is required for the options. Equivalent forms like \\(2\\dfrac{\\sin x}{\\cos^{3}x}\\) exist but are not needed here. Keep both factors: the 2 from the power, and \\(\\sec^{2}x\\) from differentiating tan.",
        "workingOut": "\\(y' = 2\\tan x\\sec^{2}x\\)",
        "graphData": null
      },
      {
        "explanation": "Sign check: for small positive \\(x\\), tan increases from 0, so \\(\\tan^{2}x\\) increases and the derivative should be positive — matches \\(2\\tan x\\sec^{2}x\\) (all factors positive in the first quadrant).",
        "workingOut": "\\(y' = 2\\tan x\\sec^{2}x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(2\\tan x\\sec^{2}x\\). Reject \\(-2\\tan x\\sec^{2}x\\) and \\(2\\tan x\\sec x\\) (sec not squared).",
        "workingOut": "\\(2\\tan x\\sec^{2}x\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(-2 \\tan x \\sec^2 x\\)",
      "\\(2 \\sin x \\sec^2 x\\)",
      "\\(2 \\tan x \\sec x\\)",
      "\\(2 \\tan x \\sec^2 x\\)"
    ],
    "hint": "Write \\(\\tan^{2}x=(\\tan x)^{2}\\). Chain rule: \\(2\\tan x\\cdot\\sec^{2}x\\).",
    "options": [
      {
        "text": "\\(-2 \\tan x \\sec^2 x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2 \\sin x \\sec^2 x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2 \\tan x \\sec x\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2 \\tan x \\sec^2 x\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6b-q8h",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicId": "y12a-6B",
    "topicCode": "6B",
    "year": "Year 12",
    "isManual": true,
    "question": "Find \\( \\frac{dy}{dx} \\) using the chain rule: \\( y = \\tan \\sqrt{x} \\). Remember that \\( \\cos^2 x \\) means \\( (\\cos x)^2 \\).",
    "difficulty": "medium",
    "timeLimit": 120,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782855871,
      "_nanoseconds": 746000000
    },
    "answer": "1",
    "solution": "The correct answer is \\(\\dfrac{\\sec^{2}\\sqrt{x}}{2\\sqrt{x}}\\).",
    "origin": "seed",
    "isNew": true,
    "graphData": null,
    "isActive": true,
    "title": "Find  \\frac{dy}{dx}  using the chain rul...",
    "type": "multiple_choice",
    "topicTitle": "Differentiating the trigonometric functions",
    "a": 1,
    "solutionSteps": [
      {
        "explanation": "Given: \\(y=\\tan\\sqrt{x}\\). Why chain rule? Tan of a square-root composite. What: if \\(y=\\tan u\\) then \\(y'=\\sec^{2}u\\cdot u'\\). A common slip is forgetting the derivative of \\(\\sqrt{x}\\) or putting a minus on it.",
        "workingOut": "\\(y = \\tan\\sqrt{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Let \\(u=\\sqrt{x}=x^{1/2}\\). Power rule: \\(u'=\\dfrac{1}{2}x^{-1/2}=\\dfrac{1}{2\\sqrt{x}}\\). Domain: \\(x>0\\) (and where tan is defined).",
        "workingOut": "\\(u = \\sqrt{x},\\quad u' = \\dfrac{1}{2\\sqrt{x}}\\)",
        "graphData": null
      },
      {
        "explanation": "Outer derivative of tan is sec squared of the same argument: \\(\\sec^{2}u=\\sec^{2}\\sqrt{x}\\). Multiply by the inside derivative: \\(y'=\\sec^{2}\\sqrt{x}\\cdot\\dfrac{1}{2\\sqrt{x}}\\).",
        "workingOut": "\\(y' = \\sec^{2}\\sqrt{x}\\cdot\\dfrac{1}{2\\sqrt{x}}\\)",
        "graphData": null
      },
      {
        "explanation": "Write as a single fraction: \\(y'=\\dfrac{\\sec^{2}\\sqrt{x}}{2\\sqrt{x}}\\). Do not square the entire fraction or put the 2 only under the sec.",
        "workingOut": "\\(y' = \\dfrac{\\sec^{2}\\sqrt{x}}{2\\sqrt{x}}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{\\sec^{2}\\sqrt{x}}{2\\sqrt{x}}\\). Reject a leading minus, an extra \\(+1\\), or \\(\\sec^{4}\\) from confusing the power on sec.",
        "workingOut": "\\(\\dfrac{\\sec^{2}\\sqrt{x}}{2\\sqrt{x}}\\)",
        "graphData": null
      }
    ],
    "opts": [
      "\\(-\\frac{\\sec^2 \\sqrt{x}}{2\\sqrt{x}}\\)",
      "\\(\\frac{\\sec^2 \\sqrt{x}}{2\\sqrt{x}}\\)",
      "\\(\\frac{\\sec^2 \\sqrt{x}}{2\\sqrt{x}} + 1\\)",
      "\\(\\frac{\\sec^4 \\sqrt{x}}{4\\sqrt{x}}\\)"
    ],
    "hint": "Chain rule: outer tan, inner \\(\\sqrt{x}\\). \\(\\dfrac{d}{dx}\\sqrt{x}=\\dfrac{1}{2\\sqrt{x}}\\).",
    "options": [
      {
        "text": "\\(-\\frac{\\sec^2 \\sqrt{x}}{2\\sqrt{x}}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\frac{\\sec^2 \\sqrt{x}}{2\\sqrt{x}}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\frac{\\sec^2 \\sqrt{x}}{2\\sqrt{x}} + 1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\frac{\\sec^4 \\sqrt{x}}{4\\sqrt{x}}\\)",
        "imageUrl": null
      }
    ]
  }
];

export default Y12A_CH6B_QUESTIONS;
