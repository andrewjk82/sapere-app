export const Y12A_CH5B_QUESTIONS = [
  {
    "id": "y12a-5b-q1a",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function using the standard form \\( \\frac{d}{dx} e^{ax+b} = a e^{ax+b} \\):\n\\( y = e^{6x} \\)",
    "a": 3,
    "solution": "The standard rule is \\(\\dfrac{d}{dx}e^{ax+b}=a e^{ax+b}\\). Here the function is \\(y=e^{6x}\\), so the exponent is \\(6x\\) (that is \\(a=6\\), \\(b=0\\)). Differentiate the exponent: \\(\\dfrac{d}{dx}(6x)=6\\). By the chain rule the exponential is multiplied by this factor 6. Therefore \\(\\dfrac{dy}{dx}=6e^{6x}\\). (If you forget the chain-rule factor you would wrongly write just \\(e^{6x}\\).)",
    "solutionSteps": [
      {
        "explanation": "The standard rule is \\(\\dfrac{d}{dx}e^{ax+b}=a e^{ax+b}\\). Here the function is \\(y=e^{6x}\\), so the exponent is \\(6x\\) (that is \\(a=6\\), \\(b=0\\)).",
        "workingOut": "\\(y=e^{6x}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate the exponent: \\(\\dfrac{d}{dx}(6x)=6\\). By the chain rule the exponential is multiplied by this factor 6.",
        "workingOut": "\\(u=6x,\\quad u'=6\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(\\dfrac{dy}{dx}=6e^{6x}\\). (If you forget the chain-rule factor you would wrongly write just \\(e^{6x}\\).)",
        "workingOut": "\\(6e^{6x}\\)",
        "graphData": null
      }
    ],
    "hint": "Multiply the function by the derivative of the power 6x.",
    "graphData": null,
    "opts": [
      "\\(-6e^{6x}\\)",
      "\\(e^{6x}\\)",
      "\\(5e^{6x}\\)",
      "\\(6e^{6x}\\)"
    ],
    "answer": "3",
    "isNew": true
  },
  {
    "id": "y12a-5b-q1b",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function:\n\\( y = 3e^{4x} \\)",
    "a": 0,
    "solution": "Write \\(y=3e^{4x}\\) as a constant times an exponential. The constant 3 factors out of the derivative by the constant-multiple rule. Differentiate the exponential factor with the chain rule: exponent \\(4x\\) has derivative 4, so \\(\\dfrac{d}{dx}e^{4x}=4e^{4x}\\). Multiply by the leading coefficient 3: \\(3\\cdot 4e^{4x}=12e^{4x}\\). So \\(y'=12e^{4x}\\).",
    "solutionSteps": [
      {
        "explanation": "Write \\(y=3e^{4x}\\) as a constant times an exponential. The constant 3 factors out of the derivative by the constant-multiple rule.",
        "workingOut": "\\(y=3\\cdot e^{4x}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate the exponential factor with the chain rule: exponent \\(4x\\) has derivative 4, so \\(\\dfrac{d}{dx}e^{4x}=4e^{4x}\\).",
        "workingOut": "\\(\\dfrac{d}{dx}e^{4x}=4e^{4x}\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply by the leading coefficient 3: \\(3\\cdot 4e^{4x}=12e^{4x}\\).",
        "workingOut": "\\(3\\cdot 4e^{4x}=12e^{4x}\\)",
        "graphData": null
      },
      {
        "explanation": "So \\(y'=12e^{4x}\\).",
        "workingOut": "\\(12e^{4x}\\)",
        "graphData": null
      }
    ],
    "hint": "Differentiate e^{4x} to get 4e^{4x}, then multiply by 3.",
    "graphData": null,
    "opts": [
      "\\(12e^{4x}\\)",
      "\\(-12e^{4x}\\)",
      "\\(e^{4x}\\)",
      "\\(11e^{4x}\\)"
    ],
    "answer": "0",
    "isNew": true
  },
  {
    "id": "y12a-5b-q1c",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function:\n\\( y = -e^{6x} \\)",
    "a": 1,
    "solution": "The function is \\(y=-e^{6x}\\). Treat this as the constant \\(-1\\) times \\(e^{6x}\\). First differentiate \\(e^{6x}\\): chain rule gives \\(6e^{6x}\\). Multiply by the constant \\(-1\\): \\(y'=-6e^{6x}\\). The minus sign stays with the answer.",
    "solutionSteps": [
      {
        "explanation": "The function is \\(y=-e^{6x}\\). Treat this as the constant \\(-1\\) times \\(e^{6x}\\).",
        "workingOut": "\\(y=(-1)\\cdot e^{6x}\\)",
        "graphData": null
      },
      {
        "explanation": "First differentiate \\(e^{6x}\\): chain rule gives \\(6e^{6x}\\).",
        "workingOut": "\\(\\dfrac{d}{dx}e^{6x}=6e^{6x}\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply by the constant \\(-1\\): \\(y'=-6e^{6x}\\). The minus sign stays with the answer.",
        "workingOut": "\\(y'=-6e^{6x}\\)",
        "graphData": null
      }
    ],
    "hint": "Multiply the derivative of e^{6x} by -1.",
    "graphData": null,
    "opts": [
      "\\(6e^{6x}\\)",
      "\\(-6e^{6x}\\)",
      "\\(e^{6x}\\)",
      "\\(-5e^{6x}\\)"
    ],
    "answer": "1",
    "isNew": true
  },
  {
    "id": "y12a-5b-q1d",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function:\n\\( y = 8e^{\\frac{1}{4}x} \\)",
    "a": 2,
    "solution": "Given \\(y=8e^{\\frac{x}{4}}\\). Chain rule: \\(y'=8\\cdot\\dfrac{1}{4}e^{\\frac{x}{4}}=2e^{\\frac{x}{4}}\\).",
    "solutionSteps": [
      {
        "explanation": "The function is a constant multiple of an exponential: \\(y=8e^{\\frac{x}{4}}\\). Use the chain rule \\(\\dfrac{d}{dx}e^{u}=e^{u}u'\\) with \\(u=\\dfrac{x}{4}\\).",
        "workingOut": "\\(y=8e^{\\frac{x}{4}},\\quad u=\\dfrac{x}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate the exponent: \\(u'=\\dfrac{1}{4}\\).",
        "workingOut": "\\(u'=\\dfrac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the constant-multiple rule and chain rule: \\(y'=8\\cdot e^{\\frac{x}{4}}\\cdot\\dfrac{1}{4}=\\dfrac{8}{4}e^{\\frac{x}{4}}=2e^{\\frac{x}{4}}\\).",
        "workingOut": "\\(y'=2e^{\\frac{x}{4}}\\)",
        "graphData": null
      },
      {
        "explanation": "Write the answer as \\(2e^{\\frac{x}{4}}\\) (or equivalently \\(2e^{x/4}\\)). Do not use broken forms such as a fraction with the exponent split incorrectly.",
        "workingOut": "\\(y'=2e^{\\frac{x}{4}}\\)",
        "graphData": null
      }
    ],
    "hint": "Multiply the constant 8 by the chain-rule factor \\(\\dfrac{1}{4}\\): \\(8\\cdot\\dfrac{1}{4}=2\\).",
    "graphData": null,
    "opts": [
      "\\(-2e^{\\frac{x}{4}}\\)",
      "\\(e^{\\frac{x}{4}}\\)",
      "\\(2e^{\\frac{x}{4}}\\)",
      "\\(8e^{\\frac{x}{4}}\\)"
    ],
    "answer": "2",
    "isNew": true
  },
  {
    "id": "y12a-5b-q1e",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function:\n\\( y = -e^{-5x} \\)",
    "a": 3,
    "solution": "The function is a sum (or difference) of exponential terms: \\(-e^{-5x}\\). Differentiation is linear, so differentiate each term separately and add the results. For each term of the form \\(c\\,e^{u(x)}\\), use \\(\\dfrac{d}{dx}[c e^{u}]=c e^{u}u'\\). If a term is simply \\(e^{x}\\), its derivative is itself. For \\(e^{-x}\\), the chain rule gives \\(-e^{-x}\\) (or carefully track signs if there is already a minus in front). Write every term's derivative, then combine like terms if possible. Do not cancel factors that are not identical. Therefore \\(\\dfrac{dy}{dx}=5e^{-5x}\\).",
    "solutionSteps": [
      {
        "explanation": "The function is a sum (or difference) of exponential terms: \\(-e^{-5x}\\). Differentiation is linear, so differentiate each term separately and add the results.",
        "workingOut": "\\(-e^{-5x}\\)",
        "graphData": null
      },
      {
        "explanation": "For each term of the form \\(c\\,e^{u(x)}\\), use \\(\\dfrac{d}{dx}[c e^{u}]=c e^{u}u'\\). If a term is simply \\(e^{x}\\), its derivative is itself. For \\(e^{-x}\\), the chain rule gives \\(-e^{-x}\\) (or carefully track signs if there is already a minus in front).",
        "workingOut": "\\(\\dfrac{d}{dx}e^{u}=e^{u}u'\\)",
        "graphData": null
      },
      {
        "explanation": "Write every term's derivative, then combine like terms if possible. Do not cancel factors that are not identical.",
        "workingOut": "\\(5e^{-5x}\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(\\dfrac{dy}{dx}=5e^{-5x}\\).",
        "workingOut": "\\(5e^{-5x}\\)",
        "graphData": null
      }
    ],
    "hint": "The derivative of the exponent -5x is -5. Multiply -1 by -5.",
    "graphData": null,
    "opts": [
      "\\(-5e^{-5x}\\)",
      "\\(e^{-5x}\\)",
      "\\(4e^{-5x}\\)",
      "\\(5e^{-5x}\\)"
    ],
    "answer": "3",
    "isNew": true
  },
  {
    "id": "y12a-5b-q1f",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function:\n\\( y = -\\frac{1}{3}e^{-3x} \\)",
    "a": 0,
    "solution": "The function involves a fraction: \\(-\\frac{1}{3}e^{-3x}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials. Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative. Differentiate each rewritten term with the chain rule, then recombine. The derivative is \\(e^{-3x}\\).",
    "solutionSteps": [
      {
        "explanation": "The function involves a fraction: \\(-\\frac{1}{3}e^{-3x}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials.",
        "workingOut": "\\(-\\frac{1}{3}e^{-3x}\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative.",
        "workingOut": "\\(\\text{rewrite as }c\\,e^{u(x)}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate each rewritten term with the chain rule, then recombine.",
        "workingOut": "\\(e^{-3x}\\)",
        "graphData": null
      },
      {
        "explanation": "The derivative is \\(e^{-3x}\\).",
        "workingOut": "\\(e^{-3x}\\)",
        "graphData": null
      }
    ],
    "hint": "Multiply -1/3 by the derivative of the exponent (-3).",
    "graphData": null,
    "opts": [
      "\\(e^{-3x}\\)",
      "\\(-e^{-3x}\\)",
      "\\(e^{x}\\)",
      "\\(0\\)"
    ],
    "answer": "0",
    "isNew": true
  },
  {
    "id": "y12a-5b-q2a",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function using standard rules:\n\\( y = e^{x-5} \\)",
    "a": 2,
    "solution": "We are asked to differentiate \\(e^{x-5}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\). Identify the exponent (the inner function). Here the exponent is \\(x-5\\). Differentiate that exponent with respect to \\(x\\) — this factor multiplies the exponential after differentiation. Apply the rule: the derivative of \\(e^{u}\\) is \\(e^{u}\\cdot u'\\). Then apply the constant-multiple rule if there is a coefficient in front of the exponential. Multiply the coefficient carefully (watch the sign). So the derivative is \\(e^{x-5}\\). Check the answer against common errors: forgetting the chain-rule factor from the exponent, or dropping a leading constant.",
    "solutionSteps": [
      {
        "explanation": "We are asked to differentiate \\(e^{x-5}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\).",
        "workingOut": "\\(\\dfrac{d}{dx}e^{u}=e^{u}\\,u'\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the exponent (the inner function). Here the exponent is \\(x-5\\). Differentiate that exponent with respect to \\(x\\) — this factor multiplies the exponential after differentiation.",
        "workingOut": "\\(u=x-5,\\quad u'=\\text{(derivative of exponent)}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the rule: the derivative of \\(e^{u}\\) is \\(e^{u}\\cdot u'\\). Then apply the constant-multiple rule if there is a coefficient in front of the exponential. Multiply the coefficient carefully (watch the sign).",
        "workingOut": "\\(e^{x-5}\\)",
        "graphData": null
      },
      {
        "explanation": "So the derivative is \\(e^{x-5}\\). Check the answer against common errors: forgetting the chain-rule factor from the exponent, or dropping a leading constant.",
        "workingOut": "\\(e^{x-5}\\)",
        "graphData": null
      }
    ],
    "hint": "The derivative of x - 5 is 1, so the derivative is the same as the original function.",
    "graphData": null,
    "opts": [
      "\\(-e^{x-5}\\)",
      "\\(e^{x}\\)",
      "\\(e^{x-5}\\)",
      "\\(0\\)"
    ],
    "answer": "2",
    "isNew": true
  },
  {
    "id": "y12a-5b-q2b",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function:\n\\( y = e^{4x+3} \\)",
    "a": 3,
    "solution": "For \\(y=e^{4x+3}\\) the exponent is the linear expression \\(u=4x+3\\). Use \\(\\dfrac{d}{dx}e^{u}=e^{u}u'\\). Differentiate the exponent: \\(u'=4\\). (The constant 3 disappears.) Therefore \\(y'=e^{4x+3}\\cdot 4=4e^{4x+3}\\).",
    "solutionSteps": [
      {
        "explanation": "For \\(y=e^{4x+3}\\) the exponent is the linear expression \\(u=4x+3\\). Use \\(\\dfrac{d}{dx}e^{u}=e^{u}u'\\).",
        "workingOut": "\\(u=4x+3\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate the exponent: \\(u'=4\\). (The constant 3 disappears.)",
        "workingOut": "\\(u'=4\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(y'=e^{4x+3}\\cdot 4=4e^{4x+3}\\).",
        "workingOut": "\\(4e^{4x+3}\\)",
        "graphData": null
      }
    ],
    "hint": "Multiply the original function by the derivative of the exponent 4x + 3.",
    "graphData": null,
    "opts": [
      "\\(-4e^{4x+3}\\)",
      "\\(e^{4x+3}\\)",
      "\\(3e^{4x+3}\\)",
      "\\(4e^{4x+3}\\)"
    ],
    "answer": "3",
    "isNew": true
  },
  {
    "id": "y12a-5b-q2c",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function:\n\\( y = e^{3x-2} \\)",
    "a": 0,
    "solution": "We are asked to differentiate \\(e^{3x-2}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\). Identify the exponent (the inner function). Here the exponent is \\(3x-2\\). Differentiate that exponent with respect to \\(x\\) — this factor multiplies the exponential after differentiation. Apply the rule: the derivative of \\(e^{u}\\) is \\(e^{u}\\cdot u'\\). Then apply the constant-multiple rule if there is a coefficient in front of the exponential. Multiply the coefficient carefully (watch the sign). So the derivative is \\(3e^{3x-2}\\). Check the answer against common errors: forgetting the chain-rule factor from the exponent, or dropping a leading constant.",
    "solutionSteps": [
      {
        "explanation": "We are asked to differentiate \\(e^{3x-2}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\).",
        "workingOut": "\\(\\dfrac{d}{dx}e^{u}=e^{u}\\,u'\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the exponent (the inner function). Here the exponent is \\(3x-2\\). Differentiate that exponent with respect to \\(x\\) — this factor multiplies the exponential after differentiation.",
        "workingOut": "\\(u=3x-2,\\quad u'=\\text{(derivative of exponent)}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the rule: the derivative of \\(e^{u}\\) is \\(e^{u}\\cdot u'\\). Then apply the constant-multiple rule if there is a coefficient in front of the exponential. Multiply the coefficient carefully (watch the sign).",
        "workingOut": "\\(3e^{3x-2}\\)",
        "graphData": null
      },
      {
        "explanation": "So the derivative is \\(3e^{3x-2}\\). Check the answer against common errors: forgetting the chain-rule factor from the exponent, or dropping a leading constant.",
        "workingOut": "\\(3e^{3x-2}\\)",
        "graphData": null
      }
    ],
    "hint": "Multiply by the derivative of the power.",
    "graphData": null,
    "opts": [
      "\\(3e^{3x-2}\\)",
      "\\(-3e^{3x-2}\\)",
      "\\(e^{3x-2}\\)",
      "\\(2e^{3x-2}\\)"
    ],
    "answer": "0",
    "isNew": true
  },
  {
    "id": "y12a-5b-q2d",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function:\n\\( y = e^{5x-4} \\)",
    "a": 1,
    "solution": "We are asked to differentiate \\(e^{5x-4}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\). Identify the exponent (the inner function). Here the exponent is \\(5x-4\\). Differentiate that exponent with respect to \\(x\\) — this factor multiplies the exponential after differentiation. Apply the rule: the derivative of \\(e^{u}\\) is \\(e^{u}\\cdot u'\\). Then apply the constant-multiple rule if there is a coefficient in front of the exponential. Multiply the coefficient carefully (watch the sign). So the derivative is \\(5e^{5x-4}\\). Check the answer against common errors: forgetting the chain-rule factor from the exponent, or dropping a leading constant.",
    "solutionSteps": [
      {
        "explanation": "We are asked to differentiate \\(e^{5x-4}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\).",
        "workingOut": "\\(\\dfrac{d}{dx}e^{u}=e^{u}\\,u'\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the exponent (the inner function). Here the exponent is \\(5x-4\\). Differentiate that exponent with respect to \\(x\\) — this factor multiplies the exponential after differentiation.",
        "workingOut": "\\(u=5x-4,\\quad u'=\\text{(derivative of exponent)}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the rule: the derivative of \\(e^{u}\\) is \\(e^{u}\\cdot u'\\). Then apply the constant-multiple rule if there is a coefficient in front of the exponential. Multiply the coefficient carefully (watch the sign).",
        "workingOut": "\\(5e^{5x-4}\\)",
        "graphData": null
      },
      {
        "explanation": "So the derivative is \\(5e^{5x-4}\\). Check the answer against common errors: forgetting the chain-rule factor from the exponent, or dropping a leading constant.",
        "workingOut": "\\(5e^{5x-4}\\)",
        "graphData": null
      }
    ],
    "hint": "The derivative coefficient is 5.",
    "graphData": null,
    "opts": [
      "\\(-5e^{5x-4}\\)",
      "\\(5e^{5x-4}\\)",
      "\\(e^{5x-4}\\)",
      "\\(4e^{5x-4}\\)"
    ],
    "answer": "1",
    "isNew": true
  },
  {
    "id": "y12a-5b-q2e",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function:\n\\( y = e^{-2x+5} \\)",
    "a": 2,
    "solution": "We are asked to differentiate \\(e^{-2x+5}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\). Identify the exponent (the inner function). Here the exponent is \\(-2x+5\\). Differentiate that exponent with respect to \\(x\\) — this factor multiplies the exponential after differentiation. Apply the rule: the derivative of \\(e^{u}\\) is \\(e^{u}\\cdot u'\\). Then apply the constant-multiple rule if there is a coefficient in front of the exponential. Multiply the coefficient carefully (watch the sign). So the derivative is \\(-2e^{-2x+5}\\). Check the answer against common errors: forgetting the chain-rule factor from the exponent, or dropping a leading constant.",
    "solutionSteps": [
      {
        "explanation": "We are asked to differentiate \\(e^{-2x+5}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\).",
        "workingOut": "\\(\\dfrac{d}{dx}e^{u}=e^{u}\\,u'\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the exponent (the inner function). Here the exponent is \\(-2x+5\\). Differentiate that exponent with respect to \\(x\\) — this factor multiplies the exponential after differentiation.",
        "workingOut": "\\(u=-2x+5,\\quad u'=\\text{(derivative of exponent)}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the rule: the derivative of \\(e^{u}\\) is \\(e^{u}\\cdot u'\\). Then apply the constant-multiple rule if there is a coefficient in front of the exponential. Multiply the coefficient carefully (watch the sign).",
        "workingOut": "\\(-2e^{-2x+5}\\)",
        "graphData": null
      },
      {
        "explanation": "So the derivative is \\(-2e^{-2x+5}\\). Check the answer against common errors: forgetting the chain-rule factor from the exponent, or dropping a leading constant.",
        "workingOut": "\\(-2e^{-2x+5}\\)",
        "graphData": null
      }
    ],
    "hint": "Multiply by the derivative of the power, which is -2.",
    "graphData": null,
    "opts": [
      "\\(2e^{-2x+5}\\)",
      "\\(e^{-2x+5}\\)",
      "\\(-2e^{-2x+5}\\)",
      "\\(-1e^{-2x+5}\\)"
    ],
    "answer": "2",
    "isNew": true
  },
  {
    "id": "y12a-5b-q2f",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function:\n\\( y = e^{-3x-6} \\)",
    "a": 3,
    "solution": "We are asked to differentiate \\(e^{-3x-6}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\). Identify the exponent (the inner function). Here the exponent is \\(-3x-6\\). Differentiate that exponent with respect to \\(x\\) — this factor multiplies the exponential after differentiation. Apply the rule: the derivative of \\(e^{u}\\) is \\(e^{u}\\cdot u'\\). Then apply the constant-multiple rule if there is a coefficient in front of the exponential. Multiply the coefficient carefully (watch the sign). So the derivative is \\(-3e^{-3x-6}\\). Check the answer against common errors: forgetting the chain-rule factor from the exponent, or dropping a leading constant.",
    "solutionSteps": [
      {
        "explanation": "We are asked to differentiate \\(e^{-3x-6}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\).",
        "workingOut": "\\(\\dfrac{d}{dx}e^{u}=e^{u}\\,u'\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the exponent (the inner function). Here the exponent is \\(-3x-6\\). Differentiate that exponent with respect to \\(x\\) — this factor multiplies the exponential after differentiation.",
        "workingOut": "\\(u=-3x-6,\\quad u'=\\text{(derivative of exponent)}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the rule: the derivative of \\(e^{u}\\) is \\(e^{u}\\cdot u'\\). Then apply the constant-multiple rule if there is a coefficient in front of the exponential. Multiply the coefficient carefully (watch the sign).",
        "workingOut": "\\(-3e^{-3x-6}\\)",
        "graphData": null
      },
      {
        "explanation": "So the derivative is \\(-3e^{-3x-6}\\). Check the answer against common errors: forgetting the chain-rule factor from the exponent, or dropping a leading constant.",
        "workingOut": "\\(-3e^{-3x-6}\\)",
        "graphData": null
      }
    ],
    "hint": "The derivative of the exponent -3x-6 is -3.",
    "graphData": null,
    "opts": [
      "\\(3e^{-3x-6}\\)",
      "\\(e^{-3x-6}\\)",
      "\\(-2e^{-3x-6}\\)",
      "\\(-3e^{-3x-6}\\)"
    ],
    "answer": "3",
    "isNew": true
  },
  {
    "id": "y12a-5b-q3a",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function:\n\\( y = e^x - e^{-x} \\)",
    "a": 1,
    "solution": "The function is a sum: \\(y=e^{x}-e^{-x}\\). Differentiate each term separately. First term: \\(\\dfrac{d}{dx}e^{x}=e^{x}\\). Second term: write \\(-e^{-x}\\). Chain rule on \\(e^{-x}\\) gives \\(-e^{-x}\\), then the outer minus makes \\(-(-e^{-x})=+e^{-x}\\). Equivalently, \\(\\dfrac{d}{dx}[-e^{-x}]=e^{-x}\\). Add the two derivatives: \\(y'=e^{x}+e^{-x}\\).",
    "solutionSteps": [
      {
        "explanation": "The function is a sum: \\(y=e^{x}-e^{-x}\\). Differentiate each term separately.",
        "workingOut": "\\(y=e^{x}-e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "First term: \\(\\dfrac{d}{dx}e^{x}=e^{x}\\).",
        "workingOut": "\\(e^{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Second term: write \\(-e^{-x}\\). Chain rule on \\(e^{-x}\\) gives \\(-e^{-x}\\), then the outer minus makes \\(-(-e^{-x})=+e^{-x}\\). Equivalently, \\(\\dfrac{d}{dx}[-e^{-x}]=e^{-x}\\).",
        "workingOut": "\\(\\dfrac{d}{dx}(-e^{-x})=e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "Add the two derivatives: \\(y'=e^{x}+e^{-x}\\).",
        "workingOut": "\\(e^{x}+e^{-x}\\)",
        "graphData": null
      }
    ],
    "hint": "Differentiate each term separately. The derivative of -e^{-x} is e^{-x}.",
    "graphData": null,
    "opts": [
      "\\(-e^{x}+e^{-x}\\)",
      "\\(e^{x}+e^{-x}\\)",
      "\\(e^{x}\\)",
      "\\(0\\)"
    ],
    "answer": "1",
    "isNew": true
  },
  {
    "id": "y12a-5b-q3b",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function:\n\\( y = e^{3x} + e^{-2x} \\)",
    "a": 2,
    "solution": "The function is a sum (or difference) of exponential terms: \\(e^{3x} + e^{-2x}\\). Differentiation is linear, so differentiate each term separately and add the results. For each term of the form \\(c\\,e^{u(x)}\\), use \\(\\dfrac{d}{dx}[c e^{u}]=c e^{u}u'\\). If a term is simply \\(e^{x}\\), its derivative is itself. For \\(e^{-x}\\), the chain rule gives \\(-e^{-x}\\) (or carefully track signs if there is already a minus in front). Write every term's derivative, then combine like terms if possible. Do not cancel factors that are not identical. Therefore \\(\\dfrac{dy}{dx}=3e^{3x}-2e^{-2x}\\).",
    "solutionSteps": [
      {
        "explanation": "The function is a sum (or difference) of exponential terms: \\(e^{3x} + e^{-2x}\\). Differentiation is linear, so differentiate each term separately and add the results.",
        "workingOut": "\\(e^{3x} + e^{-2x}\\)",
        "graphData": null
      },
      {
        "explanation": "For each term of the form \\(c\\,e^{u(x)}\\), use \\(\\dfrac{d}{dx}[c e^{u}]=c e^{u}u'\\). If a term is simply \\(e^{x}\\), its derivative is itself. For \\(e^{-x}\\), the chain rule gives \\(-e^{-x}\\) (or carefully track signs if there is already a minus in front).",
        "workingOut": "\\(\\dfrac{d}{dx}e^{u}=e^{u}u'\\)",
        "graphData": null
      },
      {
        "explanation": "Write every term's derivative, then combine like terms if possible. Do not cancel factors that are not identical.",
        "workingOut": "\\(3e^{3x}-2e^{-2x}\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(\\dfrac{dy}{dx}=3e^{3x}-2e^{-2x}\\).",
        "workingOut": "\\(3e^{3x}-2e^{-2x}\\)",
        "graphData": null
      }
    ],
    "hint": "Apply the chain rule to each term independently.",
    "graphData": null,
    "opts": [
      "\\(-3e^{3x}-2e^{-2x}\\)",
      "\\(e^{3x}-2e^{-2x}\\)",
      "\\(3e^{3x}-2e^{-2x}\\)",
      "\\(2e^{3x}-2e^{-2x}\\)"
    ],
    "answer": "2",
    "isNew": true
  },
  {
    "id": "y12a-5b-q3c",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function:\n\\( y = \\frac{e^x + e^{-x}}{2} \\)",
    "a": 3,
    "solution": "The function involves a fraction: \\(\\frac{e^{x} + e^{-x}}{2}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials. Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative. Differentiate each rewritten term with the chain rule, then recombine. The derivative is \\((e^{x}-e^{-x})/2\\).",
    "solutionSteps": [
      {
        "explanation": "The function involves a fraction: \\(\\frac{e^{x} + e^{-x}}{2}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials.",
        "workingOut": "\\(\\frac{e^{x} + e^{-x}}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative.",
        "workingOut": "\\(\\text{rewrite as }c\\,e^{u(x)}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate each rewritten term with the chain rule, then recombine.",
        "workingOut": "\\(\\dfrac{(e^{x}-e^{-x})}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "The derivative is \\(\\dfrac{(e^{x}-e^{-x})}{2}\\).",
        "workingOut": "\\(\\dfrac{(e^{x}-e^{-x})}{2}\\)",
        "graphData": null
      }
    ],
    "hint": "Keep the constant 1/2 outside and differentiate e^{x} + e^{-x}.",
    "graphData": null,
    "opts": [
      "\\(-\\dfrac{(e^{x}-e^{-x})}{2}\\)",
      "\\(e^{x}\\)",
      "\\(0\\)",
      "\\(\\dfrac{(e^{x}-e^{-x})}{2}\\)"
    ],
    "answer": "3",
    "isNew": true
  },
  {
    "id": "y12a-5b-q3d",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function:\n\\( y = \\frac{e^x - e^{-x}}{4} \\)",
    "a": 0,
    "solution": "The function involves a fraction: \\(\\frac{e^{x} - e^{-x}}{4}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials. Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative. Differentiate each rewritten term with the chain rule, then recombine. The derivative is \\((e^{x}+e^{-x})/4\\).",
    "solutionSteps": [
      {
        "explanation": "The function involves a fraction: \\(\\frac{e^{x} - e^{-x}}{4}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials.",
        "workingOut": "\\(\\frac{e^{x} - e^{-x}}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative.",
        "workingOut": "\\(\\text{rewrite as }c\\,e^{u(x)}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate each rewritten term with the chain rule, then recombine.",
        "workingOut": "\\(\\dfrac{(e^{x}+e^{-x})}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "The derivative is \\(\\dfrac{(e^{x}+e^{-x})}{4}\\).",
        "workingOut": "\\(\\dfrac{(e^{x}+e^{-x})}{4}\\)",
        "graphData": null
      }
    ],
    "hint": "Differentiate the numerator, keeping the denominator of 4 constant.",
    "graphData": null,
    "opts": [
      "\\(\\dfrac{(e^{x}+e^{-x})}{4}\\)",
      "\\(-\\dfrac{(e^{x}+e^{-x})}{4}\\)",
      "\\(e^{x}\\)",
      "\\(0\\)"
    ],
    "answer": "0",
    "isNew": true
  },
  {
    "id": "y12a-5b-q3e",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function:\n\\( y = \\frac{e^{3x}}{3} + \\frac{e^{4x}}{4} \\)",
    "a": 1,
    "solution": "The function involves a fraction: \\(\\frac{e^{3x}}{3} + \\frac{e^{4x}}{4}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials. Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative. Differentiate each rewritten term with the chain rule, then recombine. The derivative is \\(e^{3x}+e^{4x}\\).",
    "solutionSteps": [
      {
        "explanation": "The function involves a fraction: \\(\\frac{e^{3x}}{3} + \\frac{e^{4x}}{4}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials.",
        "workingOut": "\\(\\frac{e^{3x}}{3} + \\frac{e^{4x}}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative.",
        "workingOut": "\\(\\text{rewrite as }c\\,e^{u(x)}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate each rewritten term with the chain rule, then recombine.",
        "workingOut": "\\(e^{3x}+e^{4x}\\)",
        "graphData": null
      },
      {
        "explanation": "The derivative is \\(e^{3x}+e^{4x}\\).",
        "workingOut": "\\(e^{3x}+e^{4x}\\)",
        "graphData": null
      }
    ],
    "hint": "The derivative of e^{kx}/k is simply e^{kx} because the k cancels.",
    "graphData": null,
    "opts": [
      "\\(-e^{3x}+e^{4x}\\)",
      "\\(e^{3x}+e^{4x}\\)",
      "\\(e^{x}\\)",
      "\\(0\\)"
    ],
    "answer": "1",
    "isNew": true
  },
  {
    "id": "y12a-5b-q3f",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function:\n\\( y = \\frac{e^{5x}}{5} - \\frac{e^{6x}}{6} \\)",
    "a": 2,
    "solution": "The function involves a fraction: \\(\\frac{e^{5x}}{5} - \\frac{e^{6x}}{6}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials. Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative. Differentiate each rewritten term with the chain rule, then recombine. The derivative is \\(e^{5x}-e^{6x}\\).",
    "solutionSteps": [
      {
        "explanation": "The function involves a fraction: \\(\\frac{e^{5x}}{5} - \\frac{e^{6x}}{6}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials.",
        "workingOut": "\\(\\frac{e^{5x}}{5} - \\frac{e^{6x}}{6}\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative.",
        "workingOut": "\\(\\text{rewrite as }c\\,e^{u(x)}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate each rewritten term with the chain rule, then recombine.",
        "workingOut": "\\(e^{5x}-e^{6x}\\)",
        "graphData": null
      },
      {
        "explanation": "The derivative is \\(e^{5x}-e^{6x}\\).",
        "workingOut": "\\(e^{5x}-e^{6x}\\)",
        "graphData": null
      }
    ],
    "hint": "Differentiate each term individually, canceling out the denominators.",
    "graphData": null,
    "opts": [
      "\\(-e^{5x}-e^{6x}\\)",
      "\\(e^{x}\\)",
      "\\(e^{5x}-e^{6x}\\)",
      "\\(0\\)"
    ],
    "answer": "2",
    "isNew": true
  },
  {
    "id": "y12a-5b-q4a",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Simplify the expression as a single power of \\( e \\), then differentiate:\n\\( y = e^{2x} \\times e^{3x} \\)",
    "a": 0,
    "solution": "The given function is not yet a single power of \\(e\\): \\(y=e^{2x} \\times e^{3x}\\). Use index laws first — do not differentiate a product/quotient of exponentials raw if it simplifies. Apply the relevant law carefully:\n• product of powers with the same base → add exponents\n• quotient → subtract exponents \n• power of a power → multiply exponents\nWrite the simplified single power explicitly. Now differentiate the simplified form. For \\(e^{kx}\\) the derivative is \\(k e^{kx}\\) (here the chain-rule factor is the coefficient of \\(x\\) in the exponent). Check: the final answer should be \\(5e^{5x}\\). A common error is differentiating before simplifying, which produces a messier but equivalent form that may not match the options.",
    "solutionSteps": [
      {
        "explanation": "The given function is not yet a single power of \\(e\\): \\(y=e^{2x} \\times e^{3x}\\). Use index laws first — do not differentiate a product/quotient of exponentials raw if it simplifies.",
        "workingOut": "\\(e^{2x} \\times e^{3x}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the relevant law carefully:\n• product of powers with the same base → add exponents\n• quotient → subtract exponents \n• power of a power → multiply exponents\nWrite the simplified single power explicitly.",
        "workingOut": "\\(e^{5x}\\)",
        "graphData": null
      },
      {
        "explanation": "Now differentiate the simplified form. For \\(e^{kx}\\) the derivative is \\(k e^{kx}\\) (here the chain-rule factor is the coefficient of \\(x\\) in the exponent).",
        "workingOut": "\\(5e^{5x}\\)",
        "graphData": null
      },
      {
        "explanation": "Check: the final answer should be \\(5e^{5x}\\). A common error is differentiating before simplifying, which produces a messier but equivalent form that may not match the options.",
        "workingOut": "\\(5e^{5x}\\)",
        "graphData": null
      }
    ],
    "hint": "Add the exponents first, then apply standard differentiation.",
    "graphData": null,
    "opts": [
      "\\(5e^{5x}\\)",
      "\\(-5e^{5x}\\)",
      "\\(e^{5x}\\)",
      "\\(4e^{5x}\\)"
    ],
    "answer": "0",
    "isNew": true
  },
  {
    "id": "y12a-5b-q4b",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Simplify the expression as a single power of \\( e \\), then differentiate:\n\\( y = e^{4x} \\times e^{-2x} \\)",
    "a": 1,
    "solution": "The given function is not yet a single power of \\(e\\): \\(y=e^{4x} \\times e^{-2x}\\). Use index laws first — do not differentiate a product/quotient of exponentials raw if it simplifies. Apply the relevant law carefully:\n• product of powers with the same base → add exponents\n• quotient → subtract exponents \n• power of a power → multiply exponents\nWrite the simplified single power explicitly. Now differentiate the simplified form. For \\(e^{kx}\\) the derivative is \\(k e^{kx}\\) (here the chain-rule factor is the coefficient of \\(x\\) in the exponent). Check: the final answer should be \\(2e^{2x}\\). A common error is differentiating before simplifying, which produces a messier but equivalent form that may not match the options.",
    "solutionSteps": [
      {
        "explanation": "The given function is not yet a single power of \\(e\\): \\(y=e^{4x} \\times e^{-2x}\\). Use index laws first — do not differentiate a product/quotient of exponentials raw if it simplifies.",
        "workingOut": "\\(e^{4x} \\times e^{-2x}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the relevant law carefully:\n• product of powers with the same base → add exponents\n• quotient → subtract exponents \n• power of a power → multiply exponents\nWrite the simplified single power explicitly.",
        "workingOut": "\\(e^{2x}\\)",
        "graphData": null
      },
      {
        "explanation": "Now differentiate the simplified form. For \\(e^{kx}\\) the derivative is \\(k e^{kx}\\) (here the chain-rule factor is the coefficient of \\(x\\) in the exponent).",
        "workingOut": "\\(2e^{2x}\\)",
        "graphData": null
      },
      {
        "explanation": "Check: the final answer should be \\(2e^{2x}\\). A common error is differentiating before simplifying, which produces a messier but equivalent form that may not match the options.",
        "workingOut": "\\(2e^{2x}\\)",
        "graphData": null
      }
    ],
    "hint": "Add 4x and -2x to simplify the power first.",
    "graphData": null,
    "opts": [
      "\\(-2e^{2x}\\)",
      "\\(2e^{2x}\\)",
      "\\(e^{2x}\\)",
      "\\(1e^{2x}\\)"
    ],
    "answer": "1",
    "isNew": true
  },
  {
    "id": "y12a-5b-q4c",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Simplify the expression as a single power of \\( e \\), then differentiate:\n\\( y = (e^{2x})^3 \\)",
    "a": 2,
    "solution": "The given function is not yet a single power of \\(e\\): \\(y=(e^{2x})^3\\). Use index laws first — do not differentiate a product/quotient of exponentials raw if it simplifies. Apply the relevant law carefully:\n• product of powers with the same base → add exponents\n• quotient → subtract exponents \n• power of a power → multiply exponents\nWrite the simplified single power explicitly. Now differentiate the simplified form. For \\(e^{kx}\\) the derivative is \\(k e^{kx}\\) (here the chain-rule factor is the coefficient of \\(x\\) in the exponent). Check: the final answer should be \\(6e^{6x}\\). A common error is differentiating before simplifying, which produces a messier but equivalent form that may not match the options.",
    "solutionSteps": [
      {
        "explanation": "The given function is not yet a single power of \\(e\\): \\(y=(e^{2x})^3\\). Use index laws first — do not differentiate a product/quotient of exponentials raw if it simplifies.",
        "workingOut": "\\((e^{2x})^3\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the relevant law carefully:\n• product of powers with the same base → add exponents\n• quotient → subtract exponents \n• power of a power → multiply exponents\nWrite the simplified single power explicitly.",
        "workingOut": "\\(e^{6x}\\)",
        "graphData": null
      },
      {
        "explanation": "Now differentiate the simplified form. For \\(e^{kx}\\) the derivative is \\(k e^{kx}\\) (here the chain-rule factor is the coefficient of \\(x\\) in the exponent).",
        "workingOut": "\\(6e^{6x}\\)",
        "graphData": null
      },
      {
        "explanation": "Check: the final answer should be \\(6e^{6x}\\). A common error is differentiating before simplifying, which produces a messier but equivalent form that may not match the options.",
        "workingOut": "\\(6e^{6x}\\)",
        "graphData": null
      }
    ],
    "hint": "Multiply 2x by 3 to simplify the power first.",
    "graphData": null,
    "opts": [
      "\\(-6e^{6x}\\)",
      "\\(e^{6x}\\)",
      "\\(6e^{6x}\\)",
      "\\(5e^{6x}\\)"
    ],
    "answer": "2",
    "isNew": true
  },
  {
    "id": "y12a-5b-q4d",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Simplify the expression as a single power of \\( e \\), then differentiate:\n\\( y = (e^{3x})^2 \\)",
    "a": 3,
    "solution": "The given function is not yet a single power of \\(e\\): \\(y=(e^{3x})^2\\). Use index laws first — do not differentiate a product/quotient of exponentials raw if it simplifies. Apply the relevant law carefully:\n• product of powers with the same base → add exponents\n• quotient → subtract exponents \n• power of a power → multiply exponents\nWrite the simplified single power explicitly. Now differentiate the simplified form. For \\(e^{kx}\\) the derivative is \\(k e^{kx}\\) (here the chain-rule factor is the coefficient of \\(x\\) in the exponent). Check: the final answer should be \\(6e^{6x}\\). A common error is differentiating before simplifying, which produces a messier but equivalent form that may not match the options.",
    "solutionSteps": [
      {
        "explanation": "The given function is not yet a single power of \\(e\\): \\(y=(e^{3x})^2\\). Use index laws first — do not differentiate a product/quotient of exponentials raw if it simplifies.",
        "workingOut": "\\((e^{3x})^2\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the relevant law carefully:\n• product of powers with the same base → add exponents\n• quotient → subtract exponents \n• power of a power → multiply exponents\nWrite the simplified single power explicitly.",
        "workingOut": "\\(e^{6x}\\)",
        "graphData": null
      },
      {
        "explanation": "Now differentiate the simplified form. For \\(e^{kx}\\) the derivative is \\(k e^{kx}\\) (here the chain-rule factor is the coefficient of \\(x\\) in the exponent).",
        "workingOut": "\\(6e^{6x}\\)",
        "graphData": null
      },
      {
        "explanation": "Check: the final answer should be \\(6e^{6x}\\). A common error is differentiating before simplifying, which produces a messier but equivalent form that may not match the options.",
        "workingOut": "\\(6e^{6x}\\)",
        "graphData": null
      }
    ],
    "hint": "Multiply the exponents first.",
    "graphData": null,
    "opts": [
      "\\(-6e^{6x}\\)",
      "\\(e^{6x}\\)",
      "\\(5e^{6x}\\)",
      "\\(6e^{6x}\\)"
    ],
    "answer": "3",
    "isNew": true
  },
  {
    "id": "y12a-5b-q4e",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Simplify the expression as a single power of \\( e \\), then differentiate:\n\\( y = \\frac{e^{5x}}{e^{2x}} \\)",
    "a": 0,
    "solution": "The given function is not yet a single power of \\(e\\): \\(y=\\frac{e^{5x}}{e^{2x}}\\). Use index laws first — do not differentiate a product/quotient of exponentials raw if it simplifies. Apply the relevant law carefully:\n• product of powers with the same base → add exponents\n• quotient → subtract exponents \n• power of a power → multiply exponents\nWrite the simplified single power explicitly. Now differentiate the simplified form. For \\(e^{kx}\\) the derivative is \\(k e^{kx}\\) (here the chain-rule factor is the coefficient of \\(x\\) in the exponent). Check: the final answer should be \\(3e^{3x}\\). A common error is differentiating before simplifying, which produces a messier but equivalent form that may not match the options.",
    "solutionSteps": [
      {
        "explanation": "The given function is not yet a single power of \\(e\\): \\(y=\\frac{e^{5x}}{e^{2x}}\\). Use index laws first — do not differentiate a product/quotient of exponentials raw if it simplifies.",
        "workingOut": "\\(\\frac{e^{5x}}{e^{2x}}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the relevant law carefully:\n• product of powers with the same base → add exponents\n• quotient → subtract exponents \n• power of a power → multiply exponents\nWrite the simplified single power explicitly.",
        "workingOut": "\\(e^{3x}\\)",
        "graphData": null
      },
      {
        "explanation": "Now differentiate the simplified form. For \\(e^{kx}\\) the derivative is \\(k e^{kx}\\) (here the chain-rule factor is the coefficient of \\(x\\) in the exponent).",
        "workingOut": "\\(3e^{3x}\\)",
        "graphData": null
      },
      {
        "explanation": "Check: the final answer should be \\(3e^{3x}\\). A common error is differentiating before simplifying, which produces a messier but equivalent form that may not match the options.",
        "workingOut": "\\(3e^{3x}\\)",
        "graphData": null
      }
    ],
    "hint": "Subtract the power in the denominator from the numerator.",
    "graphData": null,
    "opts": [
      "\\(3e^{3x}\\)",
      "\\(-3e^{3x}\\)",
      "\\(e^{3x}\\)",
      "\\(2e^{3x}\\)"
    ],
    "answer": "0",
    "isNew": true
  },
  {
    "id": "y12a-5b-q4f",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Simplify the expression as a single power of \\( e \\), then differentiate:\n\\( y = \\frac{e^{2x}}{e^{4x}} \\)",
    "a": 1,
    "solution": "The given function is not yet a single power of \\(e\\): \\(y=\\frac{e^{2x}}{e^{4x}}\\). Use index laws first — do not differentiate a product/quotient of exponentials raw if it simplifies. Apply the relevant law carefully:\n• product of powers with the same base → add exponents\n• quotient → subtract exponents \n• power of a power → multiply exponents\nWrite the simplified single power explicitly. Now differentiate the simplified form. For \\(e^{kx}\\) the derivative is \\(k e^{kx}\\) (here the chain-rule factor is the coefficient of \\(x\\) in the exponent). Check: the final answer should be \\(-2e^{-2x}\\). A common error is differentiating before simplifying, which produces a messier but equivalent form that may not match the options.",
    "solutionSteps": [
      {
        "explanation": "The given function is not yet a single power of \\(e\\): \\(y=\\frac{e^{2x}}{e^{4x}}\\). Use index laws first — do not differentiate a product/quotient of exponentials raw if it simplifies.",
        "workingOut": "\\(\\frac{e^{2x}}{e^{4x}}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the relevant law carefully:\n• product of powers with the same base → add exponents\n• quotient → subtract exponents \n• power of a power → multiply exponents\nWrite the simplified single power explicitly.",
        "workingOut": "\\(e^{-2x}\\)",
        "graphData": null
      },
      {
        "explanation": "Now differentiate the simplified form. For \\(e^{kx}\\) the derivative is \\(k e^{kx}\\) (here the chain-rule factor is the coefficient of \\(x\\) in the exponent).",
        "workingOut": "\\(-2e^{-2x}\\)",
        "graphData": null
      },
      {
        "explanation": "Check: the final answer should be \\(-2e^{-2x}\\). A common error is differentiating before simplifying, which produces a messier but equivalent form that may not match the options.",
        "workingOut": "\\(-2e^{-2x}\\)",
        "graphData": null
      }
    ],
    "hint": "Subtract 4x from 2x, then differentiate the negative exponent.",
    "graphData": null,
    "opts": [
      "\\(2e^{-2x}\\)",
      "\\(-2e^{-2x}\\)",
      "\\(e^{-2x}\\)",
      "\\(-1e^{-2x}\\)"
    ],
    "answer": "1",
    "isNew": true
  },
  {
    "id": "y12a-5b-q4g",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Simplify the expression as a single power of \\( e \\), then differentiate:\n\\( y = \\frac{1}{e^{4x}} \\)",
    "a": 2,
    "solution": "The given function is not yet a single power of \\(e\\): \\(y=\\frac{1}{e^{4x}}\\). Use index laws first — do not differentiate a product/quotient of exponentials raw if it simplifies. Apply the relevant law carefully:\n• product of powers with the same base → add exponents\n• quotient → subtract exponents \n• power of a power → multiply exponents\nWrite the simplified single power explicitly. Now differentiate the simplified form. For \\(e^{kx}\\) the derivative is \\(k e^{kx}\\) (here the chain-rule factor is the coefficient of \\(x\\) in the exponent). Check: the final answer should be \\(-4e^{-4x}\\). A common error is differentiating before simplifying, which produces a messier but equivalent form that may not match the options.",
    "solutionSteps": [
      {
        "explanation": "The given function is not yet a single power of \\(e\\): \\(y=\\frac{1}{e^{4x}}\\). Use index laws first — do not differentiate a product/quotient of exponentials raw if it simplifies.",
        "workingOut": "\\(\\frac{1}{e^{4x}}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the relevant law carefully:\n• product of powers with the same base → add exponents\n• quotient → subtract exponents \n• power of a power → multiply exponents\nWrite the simplified single power explicitly.",
        "workingOut": "\\(e^{-4x}\\)",
        "graphData": null
      },
      {
        "explanation": "Now differentiate the simplified form. For \\(e^{kx}\\) the derivative is \\(k e^{kx}\\) (here the chain-rule factor is the coefficient of \\(x\\) in the exponent).",
        "workingOut": "\\(-4e^{-4x}\\)",
        "graphData": null
      },
      {
        "explanation": "Check: the final answer should be \\(-4e^{-4x}\\). A common error is differentiating before simplifying, which produces a messier but equivalent form that may not match the options.",
        "workingOut": "\\(-4e^{-4x}\\)",
        "graphData": null
      }
    ],
    "hint": "Rewrite as e^{-4x} first.",
    "graphData": null,
    "opts": [
      "\\(4e^{-4x}\\)",
      "\\(e^{-4x}\\)",
      "\\(-4e^{-4x}\\)",
      "\\(-3e^{-4x}\\)"
    ],
    "answer": "2",
    "isNew": true
  },
  {
    "id": "y12a-5b-q4h",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Simplify the expression as a single power of \\( e \\), then differentiate:\n\\( y = \\frac{1}{e^{6x}} \\)",
    "a": 3,
    "solution": "The given function is not yet a single power of \\(e\\): \\(y=\\frac{1}{e^{6x}}\\). Use index laws first — do not differentiate a product/quotient of exponentials raw if it simplifies. Apply the relevant law carefully:\n• product of powers with the same base → add exponents\n• quotient → subtract exponents \n• power of a power → multiply exponents\nWrite the simplified single power explicitly. Now differentiate the simplified form. For \\(e^{kx}\\) the derivative is \\(k e^{kx}\\) (here the chain-rule factor is the coefficient of \\(x\\) in the exponent). Check: the final answer should be \\(-6e^{-6x}\\). A common error is differentiating before simplifying, which produces a messier but equivalent form that may not match the options.",
    "solutionSteps": [
      {
        "explanation": "The given function is not yet a single power of \\(e\\): \\(y=\\frac{1}{e^{6x}}\\). Use index laws first — do not differentiate a product/quotient of exponentials raw if it simplifies.",
        "workingOut": "\\(\\frac{1}{e^{6x}}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the relevant law carefully:\n• product of powers with the same base → add exponents\n• quotient → subtract exponents \n• power of a power → multiply exponents\nWrite the simplified single power explicitly.",
        "workingOut": "\\(e^{-6x}\\)",
        "graphData": null
      },
      {
        "explanation": "Now differentiate the simplified form. For \\(e^{kx}\\) the derivative is \\(k e^{kx}\\) (here the chain-rule factor is the coefficient of \\(x\\) in the exponent).",
        "workingOut": "\\(-6e^{-6x}\\)",
        "graphData": null
      },
      {
        "explanation": "Check: the final answer should be \\(-6e^{-6x}\\). A common error is differentiating before simplifying, which produces a messier but equivalent form that may not match the options.",
        "workingOut": "\\(-6e^{-6x}\\)",
        "graphData": null
      }
    ],
    "hint": "Rewrite with a negative exponent, then differentiate.",
    "graphData": null,
    "opts": [
      "\\(6e^{-6x}\\)",
      "\\(e^{-6x}\\)",
      "\\(-5e^{-6x}\\)",
      "\\(-6e^{-6x}\\)"
    ],
    "answer": "3",
    "isNew": true
  },
  {
    "id": "y12a-5b-q5ai",
    "answer": "1",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "For the function \\( f(x) = e^{-x} \\), find its first four derivatives \\( f'(x) \\), \\( f''(x) \\), \\( f'''(x) \\), and \\( f^{(4)}(x) \\).",
    "a": 1,
    "solution": "Each differentiation multiplies by \\(-1\\): \\(f'=-e^{-x}\\), \\(f''=e^{-x}\\), \\(f'''=-e^{-x}\\), \\(f^{(4)}=e^{-x}\\). Signs alternate.",
    "solutionSteps": [
      {
        "explanation": "Given \\(f(x)=e^{-x}\\). Use the chain rule: the exponent \\(-x\\) contributes a factor of \\(-1\\) at every differentiation.",
        "workingOut": "\\(f(x)=e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "First derivative: \\(f'(x)=-e^{-x}\\).",
        "workingOut": "\\(f'(x)=-e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "Second derivative: multiply by another \\(-1\\). \\(f''(x)=(-1)(-e^{-x})=e^{-x}\\).",
        "workingOut": "\\(f''(x)=e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "Third derivative: again multiply by \\(-1\\). \\(f'''(x)=-e^{-x}\\). Fourth: \\(f^{(4)}(x)=e^{-x}\\).",
        "workingOut": "\\(f'''(x)=-e^{-x},\\quad f^{(4)}(x)=e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "So the first four derivatives are \\(-e^{-x},\\; e^{-x},\\; -e^{-x},\\; e^{-x}\\). Odd-order derivatives are negative; even-order are positive.",
        "workingOut": "\\(f'=-e^{-x},\\; f''=e^{-x},\\; f'''=-e^{-x},\\; f^{(4)}=e^{-x}\\)",
        "graphData": null
      }
    ],
    "hint": "Each differentiation multiplies by \\(-1\\). Signs alternate.",
    "graphData": null,
    "opts": [
      "\\(f'=-e^{-x},\\; f''=-e^{-x},\\; f'''=-e^{-x},\\; f^{(4)}=-e^{-x}\\)",
      "\\(f'=-e^{-x},\\; f''=e^{-x},\\; f'''=-e^{-x},\\; f^{(4)}=e^{-x}\\)",
      "\\(f'=e^{-x},\\; f''=e^{-x},\\; f'''=e^{-x},\\; f^{(4)}=e^{-x}\\)",
      "\\(f'=-e^{-x},\\; f''=e^{-x},\\; f'''=e^{-x},\\; f^{(4)}=-e^{-x}\\)"
    ],
    "isNew": true
  },
  {
    "id": "y12a-5b-q5aii",
    "answer": "0",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "What is the pattern in the successive derivatives of \\( f(x) = e^{-x} \\)?",
    "a": 0,
    "solution": "From \\(f^{(n)}(x)=(-1)^{n}e^{-x}\\): odd \\(n\\) give a minus sign, even \\(n\\) give a plus sign.",
    "solutionSteps": [
      {
        "explanation": "From part (i), the derivatives of \\(e^{-x}\\) are \\(-e^{-x},\\; e^{-x},\\; -e^{-x},\\; e^{-x},\\ldots\\).",
        "workingOut": "\\(f',\\;f'',\\;f''',\\;f^{(4)}:\\; -e^{-x},\\; e^{-x},\\; -e^{-x},\\; e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "The pattern is that the sign alternates with each differentiation. In general, \\(f^{(n)}(x)=(-1)^{n}e^{-x}\\).",
        "workingOut": "\\(f^{(n)}(x)=(-1)^{n}e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "When \\(n\\) is odd, \\((-1)^{n}=-1\\) (negative). When \\(n\\) is even, \\((-1)^{n}=+1\\) (positive).",
        "workingOut": "\\(\\text{odd }n\\Rightarrow -,\\quad \\text{even }n\\Rightarrow +\\)",
        "graphData": null
      }
    ],
    "hint": "Compare the signs of the first, second, third, and fourth derivatives.",
    "graphData": null,
    "opts": [
      "Odd-order derivatives are negative; even-order derivatives are positive (signs alternate).",
      "All successive derivatives are positive.",
      "All successive derivatives are negative.",
      "Each derivative doubles the previous coefficient."
    ]
  ,
    "isNew": true
  },
  {
    "id": "y12a-5b-q5bi",
    "answer": "3",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "For the function \\( f(x) = e^{3x} \\), find its first four derivatives \\( f'(x) \\), \\( f''(x) \\), \\( f'''(x) \\), and \\( f^{(4)}(x) \\).",
    "a": 3,
    "solution": "Each differentiation multiplies by 3: \\(f'=3e^{3x}\\), \\(f''=9e^{3x}\\), \\(f'''=27e^{3x}\\), \\(f^{(4)}=81e^{3x}\\).",
    "solutionSteps": [
      {
        "explanation": "Given \\(f(x)=e^{3x}\\). Chain rule: each differentiation multiplies by the factor 3 from the exponent.",
        "workingOut": "\\(f(x)=e^{3x}\\)",
        "graphData": null
      },
      {
        "explanation": "First derivative: \\(f'(x)=3e^{3x}\\).",
        "workingOut": "\\(f'(x)=3e^{3x}\\)",
        "graphData": null
      },
      {
        "explanation": "Second: multiply by 3 again. \\(f''(x)=3\\cdot 3e^{3x}=9e^{3x}\\).",
        "workingOut": "\\(f''(x)=9e^{3x}\\)",
        "graphData": null
      },
      {
        "explanation": "Third: \\(f'''(x)=3\\cdot 9e^{3x}=27e^{3x}\\). Fourth: \\(f^{(4)}(x)=3\\cdot 27e^{3x}=81e^{3x}\\).",
        "workingOut": "\\(f'''(x)=27e^{3x},\\quad f^{(4)}(x)=81e^{3x}\\)",
        "graphData": null
      },
      {
        "explanation": "The coefficients are powers of 3: \\(3=3^{1}\\), \\(9=3^{2}\\), \\(27=3^{3}\\), \\(81=3^{4}\\).",
        "workingOut": "\\(f'=3e^{3x},\\; f''=9e^{3x},\\; f'''=27e^{3x},\\; f^{(4)}=81e^{3x}\\)",
        "graphData": null
      }
    ],
    "hint": "Multiply by 3 at each differentiation: coefficients 3, 9, 27, 81.",
    "graphData": null,
    "opts": [
      "\\(f'=3e^{3x},\\; f''=6e^{3x},\\; f'''=9e^{3x},\\; f^{(4)}=12e^{3x}\\)",
      "\\(f'=3e^{3x},\\; f''=9e^{3x},\\; f'''=27e^{3x},\\; f^{(4)}=54e^{3x}\\)",
      "\\(f'=e^{3x},\\; f''=e^{3x},\\; f'''=e^{3x},\\; f^{(4)}=e^{3x}\\)",
      "\\(f'=3e^{3x},\\; f''=9e^{3x},\\; f'''=27e^{3x},\\; f^{(4)}=81e^{3x}\\)"
    ],
    "isNew": true
  },
  {
    "id": "y12a-5b-q5bii",
    "answer": "2",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "State the general pattern for the \\( n \\)-th derivative of \\( f(x) = e^{3x} \\).",
    "a": 2,
    "solution": "From the pattern \\(3,9,27,81=3^{1},3^{2},3^{3},3^{4}\\), the general formula is \\(f^{(n)}(x)=3^{n}e^{3x}\\).",
    "solutionSteps": [
      {
        "explanation": "From part (i): \\(f'=3e^{3x}\\), \\(f''=9e^{3x}\\), \\(f'''=27e^{3x}\\), \\(f^{(4)}=81e^{3x}\\).",
        "workingOut": "\\(3,\\;9,\\;27,\\;81\\)",
        "graphData": null
      },
      {
        "explanation": "These coefficients are powers of 3: \\(3^{1},\\;3^{2},\\;3^{3},\\;3^{4}\\). The exponential factor remains \\(e^{3x}\\) throughout.",
        "workingOut": "\\(3^{n}\\text{ for the }n\\text{-th derivative}\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore the general formula is \\(f^{(n)}(x)=3^{n}e^{3x}\\).",
        "workingOut": "\\(f^{(n)}(x)=3^{n}e^{3x}\\)",
        "graphData": null
      },
      {
        "explanation": "Common errors: writing \\(3n\\) (linear) instead of \\(3^{n}\\) (exponential growth of the coefficient), or using \\(3^{n-1}\\).",
        "workingOut": "\\(f^{(n)}(x)=3^{n}e^{3x}\\)",
        "graphData": null
      }
    ],
    "hint": "The coefficients are \\(3^{1},3^{2},3^{3},3^{4},\\ldots\\).",
    "graphData": null,
    "opts": [
      "\\(f^{(n)}(x)=3n\\,e^{3x}\\)",
      "\\(f^{(n)}(x)=n^{3}e^{3x}\\)",
      "\\(f^{(n)}(x)=3^{n}e^{3x}\\)",
      "\\(f^{(n)}(x)=3^{n-1}e^{3x}\\)"
    ]
  ,
    "isNew": true
  },
  {
    "id": "y12a-5b-q6a",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand the brackets and differentiate the function:\n\\( y = e^x(e^x + 2) \\)",
    "a": 2,
    "solution": "The function is given as a product: \\(y=e^{x}(e^{x} + 2)\\). Expand first so each term is a simple multiple of a power of \\(e\\). Multiply the factor outside the brackets through each term inside. Distributing gives the expanded form \\(e^{x+x}+2e^x\\). (When multiplying two powers of \\(e\\), add the exponents.) Now differentiate term by term. For a term \\(c e^{kx}\\) the derivative is \\(ck\\,e^{kx}\\). Apply this to every term, keeping all signs. The derivative is \\(2e^{2x}+2e^x\\).",
    "solutionSteps": [
      {
        "explanation": "The function is a product: \\(y=e^{x}(e^{x}+2)\\). Expand before differentiating so each term is a simple exponential.",
        "workingOut": "\\(y=e^{x}(e^{x}+2)\\)",
        "graphData": null
      },
      {
        "explanation": "Distribute: \\(e^{x}\\cdot e^{x}+e^{x}\\cdot 2\\). Product of powers of \\(e\\) adds exponents: \\(e^{x}\\cdot e^{x}=e^{2x}\\). So the expanded form is \\(y=e^{2x}+2e^{x}\\).",
        "workingOut": "\\(y=e^{2x}+2e^{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate term by term: \\(\\dfrac{d}{dx}e^{2x}=2e^{2x}\\) and \\(\\dfrac{d}{dx}(2e^{x})=2e^{x}\\).",
        "workingOut": "\\(2e^{2x}+2e^{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(y'=2e^{2x}+2e^{x}\\). You may factor \\(2e^{x}(e^{x}+1)\\) if you wish, but the sum form matches the options.",
        "workingOut": "\\(2e^{2x}+2e^{x}\\)",
        "graphData": null
      }
    ],
    "hint": "Expand the brackets to get e^{2x} + 2e^{x}, then differentiate.",
    "graphData": null,
    "opts": [
      "\\(-2e^{2x}+2e^x\\)",
      "\\(e^{2x}+2e^x\\)",
      "\\(2e^{2x}+2e^x\\)",
      "\\(1e^{2x}+2e^x\\)"
    ],
    "answer": "2",
    "isNew": true
  },
  {
    "id": "y12a-5b-q6b",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand the brackets and differentiate the function:\n\\( y = e^{-x}(3e^{-x} - 2) \\)",
    "a": 3,
    "solution": "The function is given as a product: \\(y=e^{-x}(3e^{-x} - 2)\\). Expand first so each term is a simple multiple of a power of \\(e\\). Multiply the factor outside the brackets through each term inside. Expand fully. When two powers of \\(e\\) multiply, add their exponents; when a constant multiplies \\(e^{u}\\), the constant stays as a coefficient. Now differentiate term by term. For a term \\(c e^{kx}\\) the derivative is \\(ck\\,e^{kx}\\). Apply this to every term, keeping all signs. The derivative is \\(-6e^{-2x}+2e^{-x}\\).",
    "solutionSteps": [
      {
        "explanation": "The function is given as a product: \\(y=e^{-x}(3e^{-x} - 2)\\). Expand first so each term is a simple multiple of a power of \\(e\\). Multiply the factor outside the brackets through each term inside.",
        "workingOut": "\\(e^{-x}(3e^{-x} - 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand fully. When two powers of \\(e\\) multiply, add their exponents; when a constant multiplies \\(e^{u}\\), the constant stays as a coefficient.",
        "workingOut": "\\(\\text{expanded form}\\)",
        "graphData": null
      },
      {
        "explanation": "Now differentiate term by term. For a term \\(c e^{kx}\\) the derivative is \\(ck\\,e^{kx}\\). Apply this to every term, keeping all signs.",
        "workingOut": "\\(-6e^{-2x}+2e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "The derivative is \\(-6e^{-2x}+2e^{-x}\\).",
        "workingOut": "\\(-6e^{-2x}+2e^{-x}\\)",
        "graphData": null
      }
    ],
    "hint": "Multiply e^{-x} by each term inside. Remember that e^{-x} e^{-x} = e^{-2x}.",
    "graphData": null,
    "opts": [
      "\\(6e^{-2x}+2e^{-x}\\)",
      "\\(e^{-2x}+2e^{-x}\\)",
      "\\(-5e^{-2x}+2e^{-x}\\)",
      "\\(-6e^{-2x}+2e^{-x}\\)"
    ],
    "answer": "3",
    "isNew": true
  },
  {
    "id": "y12a-5b-q6c",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand the brackets and differentiate the function:\n\\( y = (e^x + 2)^2 \\)",
    "a": 0,
    "solution": "The function is given as a product: \\(y=(e^{x} + 2)^2\\). Expand first so each term is a simple multiple of a power of \\(e\\). Multiply the factor outside the brackets through each term inside. Expand fully. When two powers of \\(e\\) multiply, add their exponents; when a constant multiplies \\(e^{u}\\), the constant stays as a coefficient. Now differentiate term by term. For a term \\(c e^{kx}\\) the derivative is \\(ck\\,e^{kx}\\). Apply this to every term, keeping all signs. The derivative is \\(2e^{2x}+4e^x\\).",
    "solutionSteps": [
      {
        "explanation": "The function is given as a product: \\(y=(e^{x} + 2)^2\\). Expand first so each term is a simple multiple of a power of \\(e\\). Multiply the factor outside the brackets through each term inside.",
        "workingOut": "\\((e^{x} + 2)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand fully. When two powers of \\(e\\) multiply, add their exponents; when a constant multiplies \\(e^{u}\\), the constant stays as a coefficient.",
        "workingOut": "\\(\\text{expanded form}\\)",
        "graphData": null
      },
      {
        "explanation": "Now differentiate term by term. For a term \\(c e^{kx}\\) the derivative is \\(ck\\,e^{kx}\\). Apply this to every term, keeping all signs.",
        "workingOut": "\\(2e^{2x}+4e^x\\)",
        "graphData": null
      },
      {
        "explanation": "The derivative is \\(2e^{2x}+4e^x\\).",
        "workingOut": "\\(2e^{2x}+4e^x\\)",
        "graphData": null
      }
    ],
    "hint": "Expand using (A+B)^2 = A^2 + 2AB + B^2, then differentiate.",
    "graphData": null,
    "opts": [
      "\\(2e^{2x}+4e^x\\)",
      "\\(-2e^{2x}+4e^x\\)",
      "\\(e^{2x}+4e^x\\)",
      "\\(1e^{2x}+4e^x\\)"
    ],
    "answer": "0",
    "isNew": true
  },
  {
    "id": "y12a-5b-q6d",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand the brackets and differentiate the function:\n\\( y = (e^x - 3)^2 \\)",
    "a": 1,
    "solution": "The function is given as a product: \\(y=(e^{x} - 3)^2\\). Expand first so each term is a simple multiple of a power of \\(e\\). Multiply the factor outside the brackets through each term inside. Expand fully. When two powers of \\(e\\) multiply, add their exponents; when a constant multiplies \\(e^{u}\\), the constant stays as a coefficient. Now differentiate term by term. For a term \\(c e^{kx}\\) the derivative is \\(ck\\,e^{kx}\\). Apply this to every term, keeping all signs. The derivative is \\(2e^{2x}-6e^x\\).",
    "solutionSteps": [
      {
        "explanation": "The function is given as a product: \\(y=(e^{x} - 3)^2\\). Expand first so each term is a simple multiple of a power of \\(e\\). Multiply the factor outside the brackets through each term inside.",
        "workingOut": "\\((e^{x} - 3)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand fully. When two powers of \\(e\\) multiply, add their exponents; when a constant multiplies \\(e^{u}\\), the constant stays as a coefficient.",
        "workingOut": "\\(\\text{expanded form}\\)",
        "graphData": null
      },
      {
        "explanation": "Now differentiate term by term. For a term \\(c e^{kx}\\) the derivative is \\(ck\\,e^{kx}\\). Apply this to every term, keeping all signs.",
        "workingOut": "\\(2e^{2x}-6e^x\\)",
        "graphData": null
      },
      {
        "explanation": "The derivative is \\(2e^{2x}-6e^x\\).",
        "workingOut": "\\(2e^{2x}-6e^x\\)",
        "graphData": null
      }
    ],
    "hint": "Expand the square first, then differentiate.",
    "graphData": null,
    "opts": [
      "\\(-2e^{2x}-6e^x\\)",
      "\\(2e^{2x}-6e^x\\)",
      "\\(e^{2x}-6e^x\\)",
      "\\(1e^{2x}-6e^x\\)"
    ],
    "answer": "1",
    "isNew": true
  },
  {
    "id": "y12a-5b-q6e",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand the brackets and differentiate the function:\n\\( y = (e^x - 2)^2 \\)",
    "a": 2,
    "solution": "The function is given as a product: \\(y=(e^{x} - 2)^2\\). Expand first so each term is a simple multiple of a power of \\(e\\). Multiply the factor outside the brackets through each term inside. Expand fully. When two powers of \\(e\\) multiply, add their exponents; when a constant multiplies \\(e^{u}\\), the constant stays as a coefficient. Now differentiate term by term. For a term \\(c e^{kx}\\) the derivative is \\(ck\\,e^{kx}\\). Apply this to every term, keeping all signs. The derivative is \\(2e^{2x}-4e^x\\).",
    "solutionSteps": [
      {
        "explanation": "The function is given as a product: \\(y=(e^{x} - 2)^2\\). Expand first so each term is a simple multiple of a power of \\(e\\). Multiply the factor outside the brackets through each term inside.",
        "workingOut": "\\((e^{x} - 2)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand fully. When two powers of \\(e\\) multiply, add their exponents; when a constant multiplies \\(e^{u}\\), the constant stays as a coefficient.",
        "workingOut": "\\(\\text{expanded form}\\)",
        "graphData": null
      },
      {
        "explanation": "Now differentiate term by term. For a term \\(c e^{kx}\\) the derivative is \\(ck\\,e^{kx}\\). Apply this to every term, keeping all signs.",
        "workingOut": "\\(2e^{2x}-4e^x\\)",
        "graphData": null
      },
      {
        "explanation": "The derivative is \\(2e^{2x}-4e^x\\).",
        "workingOut": "\\(2e^{2x}-4e^x\\)",
        "graphData": null
      }
    ],
    "hint": "Expand the square first.",
    "graphData": null,
    "opts": [
      "\\(-2e^{2x}-4e^x\\)",
      "\\(e^{2x}-4e^x\\)",
      "\\(2e^{2x}-4e^x\\)",
      "\\(1e^{2x}-4e^x\\)"
    ],
    "answer": "2",
    "isNew": true
  },
  {
    "id": "y12a-5b-q6f",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand the brackets and differentiate the function:\n\\( y = (e^x - 1)^2 \\)",
    "a": 3,
    "solution": "The function is given as a product: \\(y=(e^{x} - 1)^2\\). Expand first so each term is a simple multiple of a power of \\(e\\). Multiply the factor outside the brackets through each term inside. Expand fully. When two powers of \\(e\\) multiply, add their exponents; when a constant multiplies \\(e^{u}\\), the constant stays as a coefficient. Now differentiate term by term. For a term \\(c e^{kx}\\) the derivative is \\(ck\\,e^{kx}\\). Apply this to every term, keeping all signs. The derivative is \\(2e^{2x}-2e^x\\).",
    "solutionSteps": [
      {
        "explanation": "The function is given as a product: \\(y=(e^{x} - 1)^2\\). Expand first so each term is a simple multiple of a power of \\(e\\). Multiply the factor outside the brackets through each term inside.",
        "workingOut": "\\((e^{x} - 1)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand fully. When two powers of \\(e\\) multiply, add their exponents; when a constant multiplies \\(e^{u}\\), the constant stays as a coefficient.",
        "workingOut": "\\(\\text{expanded form}\\)",
        "graphData": null
      },
      {
        "explanation": "Now differentiate term by term. For a term \\(c e^{kx}\\) the derivative is \\(ck\\,e^{kx}\\). Apply this to every term, keeping all signs.",
        "workingOut": "\\(2e^{2x}-2e^x\\)",
        "graphData": null
      },
      {
        "explanation": "The derivative is \\(2e^{2x}-2e^x\\).",
        "workingOut": "\\(2e^{2x}-2e^x\\)",
        "graphData": null
      }
    ],
    "hint": "Expand (e^{x} - 1)^2 first.",
    "graphData": null,
    "opts": [
      "\\(-2e^{2x}-2e^x\\)",
      "\\(e^{2x}-2e^x\\)",
      "\\(1e^{2x}-2e^x\\)",
      "\\(2e^{2x}-2e^x\\)"
    ],
    "answer": "3",
    "isNew": true
  },
  {
    "id": "y12a-5b-q6g",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand the brackets and differentiate the function:\n\\( y = (e^x + e^{-x})(e^x - e^{-x}) \\)",
    "a": 0,
    "solution": "The function is given as a product: \\(y=(e^{x} + e^{-x})(e^{x} - e^{-x})\\). Expand first so each term is a simple multiple of a power of \\(e\\). Multiply the factor outside the brackets through each term inside. Expand fully. When two powers of \\(e\\) multiply, add their exponents; when a constant multiplies \\(e^{u}\\), the constant stays as a coefficient. Now differentiate term by term. For a term \\(c e^{kx}\\) the derivative is \\(ck\\,e^{kx}\\). Apply this to every term, keeping all signs. The derivative is \\(2e^{2x}+2e^{-2x}\\).",
    "solutionSteps": [
      {
        "explanation": "The function is given as a product: \\(y=(e^{x} + e^{-x})(e^{x} - e^{-x})\\). Expand first so each term is a simple multiple of a power of \\(e\\). Multiply the factor outside the brackets through each term inside.",
        "workingOut": "\\((e^{x} + e^{-x})(e^{x} - e^{-x})\\)",
        "graphData": null
      },
      {
        "explanation": "Expand fully. When two powers of \\(e\\) multiply, add their exponents; when a constant multiplies \\(e^{u}\\), the constant stays as a coefficient.",
        "workingOut": "\\(\\text{expanded form}\\)",
        "graphData": null
      },
      {
        "explanation": "Now differentiate term by term. For a term \\(c e^{kx}\\) the derivative is \\(ck\\,e^{kx}\\). Apply this to every term, keeping all signs.",
        "workingOut": "\\(2e^{2x}+2e^{-2x}\\)",
        "graphData": null
      },
      {
        "explanation": "The derivative is \\(2e^{2x}+2e^{-2x}\\).",
        "workingOut": "\\(2e^{2x}+2e^{-2x}\\)",
        "graphData": null
      }
    ],
    "hint": "Use the identity (A + B)(A - B) = A^2 - B^2, then differentiate.",
    "graphData": null,
    "opts": [
      "\\(2e^{2x}+2e^{-2x}\\)",
      "\\(-2e^{2x}+2e^{-2x}\\)",
      "\\(e^{2x}+2e^{-2x}\\)",
      "\\(1e^{2x}+2e^{-2x}\\)"
    ],
    "answer": "0",
    "isNew": true
  },
  {
    "id": "y12a-5b-q6h",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand the brackets and differentiate the function:\n\\( y = (e^{4x} + e^{-4x})(e^{4x} - e^{-4x}) \\)",
    "a": 1,
    "solution": "The function is given as a product: \\(y=(e^{4x} + e^{-4x})(e^{4x} - e^{-4x})\\). Expand first so each term is a simple multiple of a power of \\(e\\). Multiply the factor outside the brackets through each term inside. Expand fully. When two powers of \\(e\\) multiply, add their exponents; when a constant multiplies \\(e^{u}\\), the constant stays as a coefficient. Now differentiate term by term. For a term \\(c e^{kx}\\) the derivative is \\(ck\\,e^{kx}\\). Apply this to every term, keeping all signs. The derivative is \\(8e^{8x}+8e^{-8x}\\).",
    "solutionSteps": [
      {
        "explanation": "The function is given as a product: \\(y=(e^{4x} + e^{-4x})(e^{4x} - e^{-4x})\\). Expand first so each term is a simple multiple of a power of \\(e\\). Multiply the factor outside the brackets through each term inside.",
        "workingOut": "\\((e^{4x} + e^{-4x})(e^{4x} - e^{-4x})\\)",
        "graphData": null
      },
      {
        "explanation": "Expand fully. When two powers of \\(e\\) multiply, add their exponents; when a constant multiplies \\(e^{u}\\), the constant stays as a coefficient.",
        "workingOut": "\\(\\text{expanded form}\\)",
        "graphData": null
      },
      {
        "explanation": "Now differentiate term by term. For a term \\(c e^{kx}\\) the derivative is \\(ck\\,e^{kx}\\). Apply this to every term, keeping all signs.",
        "workingOut": "\\(8e^{8x}+8e^{-8x}\\)",
        "graphData": null
      },
      {
        "explanation": "The derivative is \\(8e^{8x}+8e^{-8x}\\).",
        "workingOut": "\\(8e^{8x}+8e^{-8x}\\)",
        "graphData": null
      }
    ],
    "hint": "Simplify to e^{8x} - e^{-8x} first.",
    "graphData": null,
    "opts": [
      "\\(-8e^{8x}+8e^{-8x}\\)",
      "\\(8e^{8x}+8e^{-8x}\\)",
      "\\(e^{8x}+8e^{-8x}\\)",
      "\\(7e^{8x}+8e^{-8x}\\)"
    ],
    "answer": "1",
    "isNew": true
  },
  {
    "id": "y12a-5b-q7a",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the chain rule to differentiate the function:\n\\( y = e^{3x+2} \\)",
    "a": 1,
    "solution": "We are asked to differentiate \\(e^{3x+2}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\). Identify the exponent (the inner function). Here the exponent is \\(3x+2\\). Differentiate that exponent with respect to \\(x\\) — this factor multiplies the exponential after differentiation. Apply the rule: the derivative of \\(e^{u}\\) is \\(e^{u}\\cdot u'\\). Then apply the constant-multiple rule if there is a coefficient in front of the exponential. Multiply the coefficient carefully (watch the sign). So the derivative is \\(3e^{3x+2}\\). Check the answer against common errors: forgetting the chain-rule factor from the exponent, or dropping a leading constant.",
    "solutionSteps": [
      {
        "explanation": "We are asked to differentiate \\(e^{3x+2}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\).",
        "workingOut": "\\(\\dfrac{d}{dx}e^{u}=e^{u}\\,u'\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the exponent (the inner function). Here the exponent is \\(3x+2\\). Differentiate that exponent with respect to \\(x\\) — this factor multiplies the exponential after differentiation.",
        "workingOut": "\\(u=3x+2,\\quad u'=\\text{(derivative of exponent)}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the rule: the derivative of \\(e^{u}\\) is \\(e^{u}\\cdot u'\\). Then apply the constant-multiple rule if there is a coefficient in front of the exponential. Multiply the coefficient carefully (watch the sign).",
        "workingOut": "\\(3e^{3x+2}\\)",
        "graphData": null
      },
      {
        "explanation": "So the derivative is \\(3e^{3x+2}\\). Check the answer against common errors: forgetting the chain-rule factor from the exponent, or dropping a leading constant.",
        "workingOut": "\\(3e^{3x+2}\\)",
        "graphData": null
      }
    ],
    "hint": "Multiply the original function by the derivative of the exponent.",
    "graphData": null,
    "opts": [
      "\\(-3e^{3x+2}\\)",
      "\\(3e^{3x+2}\\)",
      "\\(e^{3x+2}\\)",
      "\\(2e^{3x+2}\\)"
    ],
    "answer": "1",
    "isNew": true
  },
  {
    "id": "y12a-5b-q7b",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the chain rule to differentiate the function:\n\\( y = e^{x^3} \\)",
    "a": 2,
    "solution": "We are asked to differentiate \\(e^{x^3}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\). Identify the exponent (the inner function). Here the exponent is \\(x^3\\). Differentiate that exponent with respect to \\(x\\) — this factor multiplies the exponential after differentiation. Apply the rule: the derivative of \\(e^{u}\\) is \\(e^{u}\\cdot u'\\). Then apply the constant-multiple rule if there is a coefficient in front of the exponential. Multiply the coefficient carefully (watch the sign). So the derivative is \\(3x^2e^{x^3}\\). Check the answer against common errors: forgetting the chain-rule factor from the exponent, or dropping a leading constant.",
    "solutionSteps": [
      {
        "explanation": "We are asked to differentiate \\(e^{x^3}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\).",
        "workingOut": "\\(\\dfrac{d}{dx}e^{u}=e^{u}\\,u'\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the exponent (the inner function). Here the exponent is \\(x^3\\). Differentiate that exponent with respect to \\(x\\) — this factor multiplies the exponential after differentiation.",
        "workingOut": "\\(u=x^3,\\quad u'=\\text{(derivative of exponent)}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the rule: the derivative of \\(e^{u}\\) is \\(e^{u}\\cdot u'\\). Then apply the constant-multiple rule if there is a coefficient in front of the exponential. Multiply the coefficient carefully (watch the sign).",
        "workingOut": "\\(3x^2e^{x^3}\\)",
        "graphData": null
      },
      {
        "explanation": "So the derivative is \\(3x^2e^{x^3}\\). Check the answer against common errors: forgetting the chain-rule factor from the exponent, or dropping a leading constant.",
        "workingOut": "\\(3x^2e^{x^3}\\)",
        "graphData": null
      }
    ],
    "hint": "The derivative is the derivative of the exponent multiplied by the original function.",
    "graphData": null,
    "opts": [
      "\\(-3x^2e^{x^3}\\)",
      "\\(x^2e^{x^3}\\)",
      "\\(3x^2e^{x^3}\\)",
      "\\(2x^2e^{x^3}\\)"
    ],
    "answer": "2",
    "isNew": true
  },
  {
    "id": "y12a-5b-q7c",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the chain rule to differentiate the function:\n\\( y = e^{-2x^2} \\)",
    "a": 3,
    "solution": "We are asked to differentiate \\(e^{-2x^2}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\). Identify the exponent (the inner function). Here the exponent is \\(-2x^2\\). Differentiate that exponent with respect to \\(x\\) — this factor multiplies the exponential after differentiation. Apply the rule: the derivative of \\(e^{u}\\) is \\(e^{u}\\cdot u'\\). Then apply the constant-multiple rule if there is a coefficient in front of the exponential. Multiply the coefficient carefully (watch the sign). So the derivative is \\(-4xe^{-2x^2}\\). Check the answer against common errors: forgetting the chain-rule factor from the exponent, or dropping a leading constant.",
    "solutionSteps": [
      {
        "explanation": "We are asked to differentiate \\(e^{-2x^2}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\).",
        "workingOut": "\\(\\dfrac{d}{dx}e^{u}=e^{u}\\,u'\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the exponent (the inner function). Here the exponent is \\(-2x^2\\). Differentiate that exponent with respect to \\(x\\) — this factor multiplies the exponential after differentiation.",
        "workingOut": "\\(u=-2x^2,\\quad u'=\\text{(derivative of exponent)}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the rule: the derivative of \\(e^{u}\\) is \\(e^{u}\\cdot u'\\). Then apply the constant-multiple rule if there is a coefficient in front of the exponential. Multiply the coefficient carefully (watch the sign).",
        "workingOut": "\\(-4xe^{-2x^2}\\)",
        "graphData": null
      },
      {
        "explanation": "So the derivative is \\(-4xe^{-2x^2}\\). Check the answer against common errors: forgetting the chain-rule factor from the exponent, or dropping a leading constant.",
        "workingOut": "\\(-4xe^{-2x^2}\\)",
        "graphData": null
      }
    ],
    "hint": "Multiply -2x^2 derivative by the function.",
    "graphData": null,
    "opts": [
      "\\(4xe^{-2x^2}\\)",
      "\\(xe^{-2x^2}\\)",
      "\\(-3xe^{-2x^2}\\)",
      "\\(-4xe^{-2x^2}\\)"
    ],
    "answer": "3",
    "isNew": true
  },
  {
    "id": "y12a-5b-q7d",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the chain rule to differentiate the function:\n\\( y = e^{x^2+3} \\)",
    "a": 0,
    "solution": "We are asked to differentiate \\(e^{x^2+3}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\). Identify the exponent (the inner function). Here the exponent is \\(x^2+3\\). Differentiate that exponent with respect to \\(x\\) — this factor multiplies the exponential after differentiation. Apply the rule: the derivative of \\(e^{u}\\) is \\(e^{u}\\cdot u'\\). Then apply the constant-multiple rule if there is a coefficient in front of the exponential. Multiply the coefficient carefully (watch the sign). So the derivative is \\(2xe^{x^2+3}\\). Check the answer against common errors: forgetting the chain-rule factor from the exponent, or dropping a leading constant.",
    "solutionSteps": [
      {
        "explanation": "We are asked to differentiate \\(e^{x^2+3}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\).",
        "workingOut": "\\(\\dfrac{d}{dx}e^{u}=e^{u}\\,u'\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the exponent (the inner function). Here the exponent is \\(x^2+3\\). Differentiate that exponent with respect to \\(x\\) — this factor multiplies the exponential after differentiation.",
        "workingOut": "\\(u=x^2+3,\\quad u'=\\text{(derivative of exponent)}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the rule: the derivative of \\(e^{u}\\) is \\(e^{u}\\cdot u'\\). Then apply the constant-multiple rule if there is a coefficient in front of the exponential. Multiply the coefficient carefully (watch the sign).",
        "workingOut": "\\(2xe^{x^2+3}\\)",
        "graphData": null
      },
      {
        "explanation": "So the derivative is \\(2xe^{x^2+3}\\). Check the answer against common errors: forgetting the chain-rule factor from the exponent, or dropping a leading constant.",
        "workingOut": "\\(2xe^{x^2+3}\\)",
        "graphData": null
      }
    ],
    "hint": "Differentiate the power x^2+3 first.",
    "graphData": null,
    "opts": [
      "\\(2xe^{x^2+3}\\)",
      "\\(-2xe^{x^2+3}\\)",
      "\\(xe^{x^2+3}\\)",
      "\\(1xe^{x^2+3}\\)"
    ],
    "answer": "0",
    "isNew": true
  },
  {
    "id": "y12a-5b-q7e",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the chain rule to differentiate the function:\n\\( y = e^{2-x^2} \\)",
    "a": 1,
    "solution": "We are asked to differentiate \\(e^{2-x^2}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\). Identify the exponent (the inner function). Here the exponent is \\(2-x^2\\). Differentiate that exponent with respect to \\(x\\) — this factor multiplies the exponential after differentiation. Apply the rule: the derivative of \\(e^{u}\\) is \\(e^{u}\\cdot u'\\). Then apply the constant-multiple rule if there is a coefficient in front of the exponential. Multiply the coefficient carefully (watch the sign). So the derivative is \\(-2xe^{2-x^2}\\). Check the answer against common errors: forgetting the chain-rule factor from the exponent, or dropping a leading constant.",
    "solutionSteps": [
      {
        "explanation": "We are asked to differentiate \\(e^{2-x^2}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\).",
        "workingOut": "\\(\\dfrac{d}{dx}e^{u}=e^{u}\\,u'\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the exponent (the inner function). Here the exponent is \\(2-x^2\\). Differentiate that exponent with respect to \\(x\\) — this factor multiplies the exponential after differentiation.",
        "workingOut": "\\(u=2-x^2,\\quad u'=\\text{(derivative of exponent)}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the rule: the derivative of \\(e^{u}\\) is \\(e^{u}\\cdot u'\\). Then apply the constant-multiple rule if there is a coefficient in front of the exponential. Multiply the coefficient carefully (watch the sign).",
        "workingOut": "\\(-2xe^{2-x^2}\\)",
        "graphData": null
      },
      {
        "explanation": "So the derivative is \\(-2xe^{2-x^2}\\). Check the answer against common errors: forgetting the chain-rule factor from the exponent, or dropping a leading constant.",
        "workingOut": "\\(-2xe^{2-x^2}\\)",
        "graphData": null
      }
    ],
    "hint": "Multiply by the derivative of the power 2-x^2.",
    "graphData": null,
    "opts": [
      "\\(2xe^{2-x^2}\\)",
      "\\(-2xe^{2-x^2}\\)",
      "\\(xe^{2-x^2}\\)",
      "\\(-1xe^{2-x^2}\\)"
    ],
    "answer": "1",
    "isNew": true
  },
  {
    "id": "y12a-5b-q7f",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the chain rule to differentiate the function:\n\\( y = e^{x^2+3x} \\)",
    "a": 2,
    "solution": "We are asked to differentiate \\(e^{x^2+3x}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\). Identify the exponent (the inner function). Here the exponent is \\(x^2+3x\\). Differentiate that exponent with respect to \\(x\\) — this factor multiplies the exponential after differentiation. Apply the rule: the derivative of \\(e^{u}\\) is \\(e^{u}\\cdot u'\\). Then apply the constant-multiple rule if there is a coefficient in front of the exponential. Multiply the coefficient carefully (watch the sign). So the derivative is \\((2x+3)e^{x^2+3x}\\). Check the answer against common errors: forgetting the chain-rule factor from the exponent, or dropping a leading constant.",
    "solutionSteps": [
      {
        "explanation": "We are asked to differentiate \\(e^{x^2+3x}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\).",
        "workingOut": "\\(\\dfrac{d}{dx}e^{u}=e^{u}\\,u'\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the exponent (the inner function). Here the exponent is \\(x^2+3x\\). Differentiate that exponent with respect to \\(x\\) — this factor multiplies the exponential after differentiation.",
        "workingOut": "\\(u=x^2+3x,\\quad u'=\\text{(derivative of exponent)}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the rule: the derivative of \\(e^{u}\\) is \\(e^{u}\\cdot u'\\). Then apply the constant-multiple rule if there is a coefficient in front of the exponential. Multiply the coefficient carefully (watch the sign).",
        "workingOut": "\\((2x+3)e^{x^2+3x}\\)",
        "graphData": null
      },
      {
        "explanation": "So the derivative is \\((2x+3)e^{x^2+3x}\\). Check the answer against common errors: forgetting the chain-rule factor from the exponent, or dropping a leading constant.",
        "workingOut": "\\((2x+3)e^{x^2+3x}\\)",
        "graphData": null
      }
    ],
    "hint": "Remember to put the derivative of the exponent in brackets.",
    "graphData": null,
    "opts": [
      "\\(-(2x+3)e^{x^2+3x}\\)",
      "\\(e^{x}\\)",
      "\\((2x+3)e^{x^2+3x}\\)",
      "\\(0\\)"
    ],
    "answer": "2",
    "isNew": true
  },
  {
    "id": "y12a-5b-q7g",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the chain rule to differentiate the function:\n\\( y = e^{4+2x-x^2} \\)",
    "a": 3,
    "solution": "We are asked to differentiate \\(e^{4+2x-x^2}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\). Identify the exponent (the inner function). Here the exponent is \\(4+2x-x^2\\). Differentiate that exponent with respect to \\(x\\) — this factor multiplies the exponential after differentiation. Apply the rule: the derivative of \\(e^{u}\\) is \\(e^{u}\\cdot u'\\). Then apply the constant-multiple rule if there is a coefficient in front of the exponential. Multiply the coefficient carefully (watch the sign). So the derivative is \\((2-2x)e^{4+2x-x^2}\\). Check the answer against common errors: forgetting the chain-rule factor from the exponent, or dropping a leading constant.",
    "solutionSteps": [
      {
        "explanation": "We are asked to differentiate \\(e^{4+2x-x^2}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\).",
        "workingOut": "\\(\\dfrac{d}{dx}e^{u}=e^{u}\\,u'\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the exponent (the inner function). Here the exponent is \\(4+2x-x^2\\). Differentiate that exponent with respect to \\(x\\) — this factor multiplies the exponential after differentiation.",
        "workingOut": "\\(u=4+2x-x^2,\\quad u'=\\text{(derivative of exponent)}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the rule: the derivative of \\(e^{u}\\) is \\(e^{u}\\cdot u'\\). Then apply the constant-multiple rule if there is a coefficient in front of the exponential. Multiply the coefficient carefully (watch the sign).",
        "workingOut": "\\((2-2x)e^{4+2x-x^2}\\)",
        "graphData": null
      },
      {
        "explanation": "So the derivative is \\((2-2x)e^{4+2x-x^2}\\). Check the answer against common errors: forgetting the chain-rule factor from the exponent, or dropping a leading constant.",
        "workingOut": "\\((2-2x)e^{4+2x-x^2}\\)",
        "graphData": null
      }
    ],
    "hint": "Find the derivative of 4 + 2x - x^2 and multiply it by the original function.",
    "graphData": null,
    "opts": [
      "\\(-(2-2x)e^{4+2x-x^2}\\)",
      "\\(e^{x}\\)",
      "\\(0\\)",
      "\\((2-2x)e^{4+2x-x^2}\\)"
    ],
    "answer": "3",
    "isNew": true
  },
  {
    "id": "y12a-5b-q7h",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the chain rule to differentiate the function:\n\\( y = \\frac{1}{2}e^{2x^2-4x+1} \\)",
    "a": 0,
    "solution": "The function involves a fraction: \\(\\frac{1}{2}e^{2x^2-4x+1}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials. Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative. Differentiate each rewritten term with the chain rule, then recombine. The derivative is \\((2x-2)e^{2x^2-4x+1}\\).",
    "solutionSteps": [
      {
        "explanation": "The function involves a fraction: \\(\\frac{1}{2}e^{2x^2-4x+1}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials.",
        "workingOut": "\\(\\frac{1}{2}e^{2x^2-4x+1}\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative.",
        "workingOut": "\\(\\text{rewrite as }c\\,e^{u(x)}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate each rewritten term with the chain rule, then recombine.",
        "workingOut": "\\((2x-2)e^{2x^2-4x+1}\\)",
        "graphData": null
      },
      {
        "explanation": "The derivative is \\((2x-2)e^{2x^2-4x+1}\\).",
        "workingOut": "\\((2x-2)e^{2x^2-4x+1}\\)",
        "graphData": null
      }
    ],
    "hint": "Differentiate the exponent to get 4x - 4, multiply by 1/2, then multiply by the original function.",
    "graphData": null,
    "opts": [
      "\\((2x-2)e^{2x^2-4x+1}\\)",
      "\\(-(2x-2)e^{2x^2-4x+1}\\)",
      "\\(e^{x}\\)",
      "\\(0\\)"
    ],
    "answer": "0",
    "isNew": true
  },
  {
    "id": "y12a-5b-q8a",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the product rule to differentiate the function:\n\\( y = x^2 e^x \\)",
    "a": 0,
    "solution": "We are asked to differentiate \\(x^2 e^x\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\). Differentiate term by term (or with the chain rule) until every exponential and power has been handled. The simplified derivative is \\(xe^{x}(x+2)\\).",
    "solutionSteps": [
      {
        "explanation": "We are asked to differentiate \\(x^2 e^x\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\).",
        "workingOut": "\\(\\dfrac{d}{dx}e^{u}=e^{u}\\,u'\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate term by term (or with the chain rule) until every exponential and power has been handled.",
        "workingOut": "\\(xe^{x}(x+2)\\)",
        "graphData": null
      },
      {
        "explanation": "The simplified derivative is \\(xe^{x}(x+2)\\).",
        "workingOut": "\\(xe^{x}(x+2)\\)",
        "graphData": null
      }
    ],
    "hint": "Use product rule: (uv)' = u'v + uv'. Factor out xe^{x} at the end.",
    "graphData": null,
    "opts": [
      "\\(xe^{x}(x+2)\\)",
      "\\(-xe^{x}(x+2)\\)",
      "\\(e^{x}\\)",
      "\\(0\\)"
    ],
    "answer": "0",
    "isNew": true
  },
  {
    "id": "y12a-5b-q8b",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the product rule to differentiate the function:\n\\( y = x^3 e^{-x} \\)",
    "a": 1,
    "solution": "We are asked to differentiate \\(x^3 e^{-x}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\). Differentiate term by term (or with the chain rule) until every exponential and power has been handled. The simplified derivative is \\(x^2e^{-x}(3-x)\\).",
    "solutionSteps": [
      {
        "explanation": "We are asked to differentiate \\(x^3 e^{-x}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\).",
        "workingOut": "\\(\\dfrac{d}{dx}e^{u}=e^{u}\\,u'\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate term by term (or with the chain rule) until every exponential and power has been handled.",
        "workingOut": "\\(x^2e^{-x}(3-x)\\)",
        "graphData": null
      },
      {
        "explanation": "The simplified derivative is \\(x^2e^{-x}(3-x)\\).",
        "workingOut": "\\(x^2e^{-x}(3-x)\\)",
        "graphData": null
      }
    ],
    "hint": "Differentiate e^{-x} to get -e^{-x}. Factor out x^2 e^{-x}.",
    "graphData": null,
    "opts": [
      "\\(-x^2e^{-x}(3-x)\\)",
      "\\(x^2e^{-x}(3-x)\\)",
      "\\(e^{x}\\)",
      "\\(0\\)"
    ],
    "answer": "1",
    "isNew": true
  },
  {
    "id": "y12a-5b-q8c",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the product rule to differentiate the function:\n\\( y = (x - 2)e^x \\)",
    "a": 2,
    "solution": "The function is a sum (or difference) of exponential terms: \\((x - 2)e^x\\). Differentiation is linear, so differentiate each term separately and add the results. For each term of the form \\(c\\,e^{u(x)}\\), use \\(\\dfrac{d}{dx}[c e^{u}]=c e^{u}u'\\). If a term is simply \\(e^{x}\\), its derivative is itself. For \\(e^{-x}\\), the chain rule gives \\(-e^{-x}\\) (or carefully track signs if there is already a minus in front). Write every term's derivative, then combine like terms if possible. Do not cancel factors that are not identical. Therefore \\(\\dfrac{dy}{dx}=(x-1)e^x\\).",
    "solutionSteps": [
      {
        "explanation": "The function is a sum (or difference) of exponential terms: \\((x - 2)e^x\\). Differentiation is linear, so differentiate each term separately and add the results.",
        "workingOut": "\\((x - 2)e^x\\)",
        "graphData": null
      },
      {
        "explanation": "For each term of the form \\(c\\,e^{u(x)}\\), use \\(\\dfrac{d}{dx}[c e^{u}]=c e^{u}u'\\). If a term is simply \\(e^{x}\\), its derivative is itself. For \\(e^{-x}\\), the chain rule gives \\(-e^{-x}\\) (or carefully track signs if there is already a minus in front).",
        "workingOut": "\\(\\dfrac{d}{dx}e^{u}=e^{u}u'\\)",
        "graphData": null
      },
      {
        "explanation": "Write every term's derivative, then combine like terms if possible. Do not cancel factors that are not identical.",
        "workingOut": "\\((x-1)e^x\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(\\dfrac{dy}{dx}=(x-1)e^x\\).",
        "workingOut": "\\((x-1)e^x\\)",
        "graphData": null
      }
    ],
    "hint": "Differentiate (x - 2) first, which is 1.",
    "graphData": null,
    "opts": [
      "\\(-(x-1)e^x\\)",
      "\\(e^{x}\\)",
      "\\((x-1)e^x\\)",
      "\\(0\\)"
    ],
    "answer": "2",
    "isNew": true
  },
  {
    "id": "y12a-5b-q8d",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the product rule to differentiate the function:\n\\( y = (x + 2)e^{2x-1} \\)",
    "a": 3,
    "solution": "The function is a sum (or difference) of exponential terms: \\((x + 2)e^{2x-1}\\). Differentiation is linear, so differentiate each term separately and add the results. For each term of the form \\(c\\,e^{u(x)}\\), use \\(\\dfrac{d}{dx}[c e^{u}]=c e^{u}u'\\). If a term is simply \\(e^{x}\\), its derivative is itself. For \\(e^{-x}\\), the chain rule gives \\(-e^{-x}\\) (or carefully track signs if there is already a minus in front). Write every term's derivative, then combine like terms if possible. Do not cancel factors that are not identical. Therefore \\(\\dfrac{dy}{dx}=(2x+5)e^{2x-1}\\).",
    "solutionSteps": [
      {
        "explanation": "The function is a sum (or difference) of exponential terms: \\((x + 2)e^{2x-1}\\). Differentiation is linear, so differentiate each term separately and add the results.",
        "workingOut": "\\((x + 2)e^{2x-1}\\)",
        "graphData": null
      },
      {
        "explanation": "For each term of the form \\(c\\,e^{u(x)}\\), use \\(\\dfrac{d}{dx}[c e^{u}]=c e^{u}u'\\). If a term is simply \\(e^{x}\\), its derivative is itself. For \\(e^{-x}\\), the chain rule gives \\(-e^{-x}\\) (or carefully track signs if there is already a minus in front).",
        "workingOut": "\\(\\dfrac{d}{dx}e^{u}=e^{u}u'\\)",
        "graphData": null
      },
      {
        "explanation": "Write every term's derivative, then combine like terms if possible. Do not cancel factors that are not identical.",
        "workingOut": "\\((2x+5)e^{2x-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(\\dfrac{dy}{dx}=(2x+5)e^{2x-1}\\).",
        "workingOut": "\\((2x+5)e^{2x-1}\\)",
        "graphData": null
      }
    ],
    "hint": "Product rule with chain rule on the exponential term.",
    "graphData": null,
    "opts": [
      "\\(-(2x+5)e^{2x-1}\\)",
      "\\(e^{x}\\)",
      "\\(0\\)",
      "\\((2x+5)e^{2x-1}\\)"
    ],
    "answer": "3",
    "isNew": true
  },
  {
    "id": "y12a-5b-q8e",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the product rule to differentiate the function:\n\\( y = x^3 e^{-2x} \\)",
    "a": 0,
    "solution": "We are asked to differentiate \\(x^3 e^{-2x}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\). Differentiate term by term (or with the chain rule) until every exponential and power has been handled. The simplified derivative is \\(x^2e^{-2x}(3-2x)\\).",
    "solutionSteps": [
      {
        "explanation": "We are asked to differentiate \\(x^3 e^{-2x}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\).",
        "workingOut": "\\(\\dfrac{d}{dx}e^{u}=e^{u}\\,u'\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate term by term (or with the chain rule) until every exponential and power has been handled.",
        "workingOut": "\\(x^2e^{-2x}(3-2x)\\)",
        "graphData": null
      },
      {
        "explanation": "The simplified derivative is \\(x^2e^{-2x}(3-2x)\\).",
        "workingOut": "\\(x^2e^{-2x}(3-2x)\\)",
        "graphData": null
      }
    ],
    "hint": "Factor out the common terms after applying the product rule.",
    "graphData": null,
    "opts": [
      "\\(x^2e^{-2x}(3-2x)\\)",
      "\\(-x^2e^{-2x}(3-2x)\\)",
      "\\(e^{x}\\)",
      "\\(0\\)"
    ],
    "answer": "0",
    "isNew": true
  },
  {
    "id": "y12a-5b-q8f",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the product rule to differentiate the function:\n\\( y = (2x - 3)e^{3x} \\)",
    "a": 1,
    "solution": "The function is a sum (or difference) of exponential terms: \\((2x - 3)e^{3x}\\). Differentiation is linear, so differentiate each term separately and add the results. For each term of the form \\(c\\,e^{u(x)}\\), use \\(\\dfrac{d}{dx}[c e^{u}]=c e^{u}u'\\). If a term is simply \\(e^{x}\\), its derivative is itself. For \\(e^{-x}\\), the chain rule gives \\(-e^{-x}\\) (or carefully track signs if there is already a minus in front). Write every term's derivative, then combine like terms if possible. Do not cancel factors that are not identical. Therefore \\(\\dfrac{dy}{dx}=(6x-7)e^{3x}\\).",
    "solutionSteps": [
      {
        "explanation": "The function is a sum (or difference) of exponential terms: \\((2x - 3)e^{3x}\\). Differentiation is linear, so differentiate each term separately and add the results.",
        "workingOut": "\\((2x - 3)e^{3x}\\)",
        "graphData": null
      },
      {
        "explanation": "For each term of the form \\(c\\,e^{u(x)}\\), use \\(\\dfrac{d}{dx}[c e^{u}]=c e^{u}u'\\). If a term is simply \\(e^{x}\\), its derivative is itself. For \\(e^{-x}\\), the chain rule gives \\(-e^{-x}\\) (or carefully track signs if there is already a minus in front).",
        "workingOut": "\\(\\dfrac{d}{dx}e^{u}=e^{u}u'\\)",
        "graphData": null
      },
      {
        "explanation": "Write every term's derivative, then combine like terms if possible. Do not cancel factors that are not identical.",
        "workingOut": "\\((6x-7)e^{3x}\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(\\dfrac{dy}{dx}=(6x-7)e^{3x}\\).",
        "workingOut": "\\((6x-7)e^{3x}\\)",
        "graphData": null
      }
    ],
    "hint": "Differentiate 2x - 3 and e^{3x}, then multiply and simplify.",
    "graphData": null,
    "opts": [
      "\\(-(6x-7)e^{3x}\\)",
      "\\((6x-7)e^{3x}\\)",
      "\\(e^{x}\\)",
      "\\(0\\)"
    ],
    "answer": "1",
    "isNew": true
  },
  {
    "id": "y12a-5b-q8g",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the product rule to differentiate the function:\n\\( y = (x^2 - 3)e^x \\)",
    "a": 2,
    "solution": "The function is a sum (or difference) of exponential terms: \\((x^2 - 3)e^x\\). Differentiation is linear, so differentiate each term separately and add the results. For each term of the form \\(c\\,e^{u(x)}\\), use \\(\\dfrac{d}{dx}[c e^{u}]=c e^{u}u'\\). If a term is simply \\(e^{x}\\), its derivative is itself. For \\(e^{-x}\\), the chain rule gives \\(-e^{-x}\\) (or carefully track signs if there is already a minus in front). Write every term's derivative, then combine like terms if possible. Do not cancel factors that are not identical. Therefore \\(\\dfrac{dy}{dx}=(x^2+2x-3)e^x\\).",
    "solutionSteps": [
      {
        "explanation": "The function is a sum (or difference) of exponential terms: \\((x^2 - 3)e^x\\). Differentiation is linear, so differentiate each term separately and add the results.",
        "workingOut": "\\((x^2 - 3)e^x\\)",
        "graphData": null
      },
      {
        "explanation": "For each term of the form \\(c\\,e^{u(x)}\\), use \\(\\dfrac{d}{dx}[c e^{u}]=c e^{u}u'\\). If a term is simply \\(e^{x}\\), its derivative is itself. For \\(e^{-x}\\), the chain rule gives \\(-e^{-x}\\) (or carefully track signs if there is already a minus in front).",
        "workingOut": "\\(\\dfrac{d}{dx}e^{u}=e^{u}u'\\)",
        "graphData": null
      },
      {
        "explanation": "Write every term's derivative, then combine like terms if possible. Do not cancel factors that are not identical.",
        "workingOut": "\\((x^2+2x-3)e^x\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(\\dfrac{dy}{dx}=(x^2+2x-3)e^x\\).",
        "workingOut": "\\((x^2+2x-3)e^x\\)",
        "graphData": null
      }
    ],
    "hint": "Factor out e^{x} from the sum of derivatives.",
    "graphData": null,
    "opts": [
      "\\(-(x^2+2x-3)e^x\\)",
      "\\(e^{x}\\)",
      "\\((x^2+2x-3)e^x\\)",
      "\\(0\\)"
    ],
    "answer": "2",
    "isNew": true
  },
  {
    "id": "y12a-5b-q8h",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the product rule to differentiate the function:\n\\( y = x^4 e^{3x} \\)",
    "a": 3,
    "solution": "We are asked to differentiate \\(x^4 e^{3x}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\). Differentiate term by term (or with the chain rule) until every exponential and power has been handled. The simplified derivative is \\(x^3e^{3x}(4+3x)\\).",
    "solutionSteps": [
      {
        "explanation": "We are asked to differentiate \\(x^4 e^{3x}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\).",
        "workingOut": "\\(\\dfrac{d}{dx}e^{u}=e^{u}\\,u'\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate term by term (or with the chain rule) until every exponential and power has been handled.",
        "workingOut": "\\(x^3e^{3x}(4+3x)\\)",
        "graphData": null
      },
      {
        "explanation": "The simplified derivative is \\(x^3e^{3x}(4+3x)\\).",
        "workingOut": "\\(x^3e^{3x}(4+3x)\\)",
        "graphData": null
      }
    ],
    "hint": "Differentiate each term and factor out the common term x^3 e^{3x}.",
    "graphData": null,
    "opts": [
      "\\(-x^3e^{3x}(4+3x)\\)",
      "\\(e^{x}\\)",
      "\\(0\\)",
      "\\(x^3e^{3x}(4+3x)\\)"
    ],
    "answer": "3",
    "isNew": true
  },
  {
    "id": "y12a-5b-q9a",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the quotient rule to differentiate the function:\n\\( y = \\frac{e^x}{x^2} \\)",
    "a": 3,
    "solution": "The function involves a fraction: \\(\\frac{e^{x}}{x^2}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials. Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative. Differentiate each rewritten term with the chain rule, then recombine. The derivative is \\(e^{x}(x-2)/x^3\\).",
    "solutionSteps": [
      {
        "explanation": "The function involves a fraction: \\(\\frac{e^{x}}{x^2}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials.",
        "workingOut": "\\(\\frac{e^{x}}{x^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative.",
        "workingOut": "\\(\\text{rewrite as }c\\,e^{u(x)}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate each rewritten term with the chain rule, then recombine.",
        "workingOut": "\\(\\dfrac{e^{x}(x-2)}{x^{3}}\\)",
        "graphData": null
      },
      {
        "explanation": "The derivative is \\(\\dfrac{e^{x}(x-2)}{x^{3}}\\).",
        "workingOut": "\\(\\dfrac{e^{x}(x-2)}{x^{3}}\\)",
        "graphData": null
      }
    ],
    "hint": "Recall quotient rule: (u/v)' = (u'v - uv') / v^2. Factor out x from the numerator to cancel one x in the denominator.",
    "graphData": null,
    "opts": [
      "\\(-\\dfrac{e^{x}(x-2)}{x^{3}}\\)",
      "\\(e^{x}\\)",
      "\\(0\\)",
      "\\(\\dfrac{e^{x}(x-2)}{x^{3}}\\)"
    ],
    "answer": "3",
    "isNew": true
  },
  {
    "id": "y12a-5b-q9b",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the quotient rule to differentiate the function:\n\\( y = \\frac{x^2}{e^x} \\)",
    "a": 0,
    "solution": "The function involves a fraction: \\(\\frac{x^2}{e^{x}}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials. Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative. Differentiate each rewritten term with the chain rule, then recombine. The derivative is \\(x(2-x)/e^x\\).",
    "solutionSteps": [
      {
        "explanation": "The function involves a fraction: \\(\\frac{x^2}{e^{x}}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials.",
        "workingOut": "\\(\\frac{x^2}{e^{x}}\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative.",
        "workingOut": "\\(\\text{rewrite as }c\\,e^{u(x)}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate each rewritten term with the chain rule, then recombine.",
        "workingOut": "\\(\\dfrac{x(2-x)}{e^{x}}\\)",
        "graphData": null
      },
      {
        "explanation": "The derivative is \\(\\dfrac{x(2-x)}{e^{x}}\\).",
        "workingOut": "\\(\\dfrac{x(2-x)}{e^{x}}\\)",
        "graphData": null
      }
    ],
    "hint": "Cancel one e^{x} from the numerator and denominator.",
    "graphData": null,
    "opts": [
      "\\(\\dfrac{x(2-x)}{e^{x}}\\)",
      "\\(-\\dfrac{x(2-x)}{e^{x}}\\)",
      "\\(e^{x}\\)",
      "\\(0\\)"
    ],
    "answer": "0",
    "isNew": true
  },
  {
    "id": "y12a-5b-q9c",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the quotient rule to differentiate the function:\n\\( y = \\frac{e^x}{x^3} \\)",
    "a": 1,
    "solution": "The function involves a fraction: \\(\\frac{e^{x}}{x^3}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials. Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative. Differentiate each rewritten term with the chain rule, then recombine. The derivative is \\(e^{x}(x-3)/x^4\\).",
    "solutionSteps": [
      {
        "explanation": "The function involves a fraction: \\(\\frac{e^{x}}{x^3}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials.",
        "workingOut": "\\(\\frac{e^{x}}{x^3}\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative.",
        "workingOut": "\\(\\text{rewrite as }c\\,e^{u(x)}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate each rewritten term with the chain rule, then recombine.",
        "workingOut": "\\(\\dfrac{e^{x}(x-3)}{x^{4}}\\)",
        "graphData": null
      },
      {
        "explanation": "The derivative is \\(\\dfrac{e^{x}(x-3)}{x^{4}}\\).",
        "workingOut": "\\(\\dfrac{e^{x}(x-3)}{x^{4}}\\)",
        "graphData": null
      }
    ],
    "hint": "Factor out x^2 from the numerator and divide it out.",
    "graphData": null,
    "opts": [
      "\\(-\\dfrac{e^{x}(x-3)}{x^{4}}\\)",
      "\\(\\dfrac{e^{x}(x-3)}{x^{4}}\\)",
      "\\(e^{x}\\)",
      "\\(0\\)"
    ],
    "answer": "1",
    "isNew": true
  },
  {
    "id": "y12a-5b-q9d",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the quotient rule to differentiate the function:\n\\( y = \\frac{x^3}{e^x} \\)",
    "a": 2,
    "solution": "The function involves a fraction: \\(\\frac{x^3}{e^{x}}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials. Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative. Differentiate each rewritten term with the chain rule, then recombine. The derivative is \\(x^2(3-x)/e^x\\).",
    "solutionSteps": [
      {
        "explanation": "The function involves a fraction: \\(\\frac{x^3}{e^{x}}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials.",
        "workingOut": "\\(\\frac{x^3}{e^{x}}\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative.",
        "workingOut": "\\(\\text{rewrite as }c\\,e^{u(x)}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate each rewritten term with the chain rule, then recombine.",
        "workingOut": "\\(\\dfrac{x^{2}(3-x)}{e^{x}}\\)",
        "graphData": null
      },
      {
        "explanation": "The derivative is \\(\\dfrac{x^{2}(3-x)}{e^{x}}\\).",
        "workingOut": "\\(\\dfrac{x^{2}(3-x)}{e^{x}}\\)",
        "graphData": null
      }
    ],
    "hint": "Apply quotient rule and factor out x^2 from the numerator.",
    "graphData": null,
    "opts": [
      "\\(-\\dfrac{x^{2}(3-x)}{e^{x}}\\)",
      "\\(e^{x}\\)",
      "\\(\\dfrac{x^{2}(3-x)}{e^{x}}\\)",
      "\\(0\\)"
    ],
    "answer": "2",
    "isNew": true
  },
  {
    "id": "y12a-5b-q9e",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the quotient rule to differentiate the function:\n\\( y = \\frac{e^x}{x + 2} \\)",
    "a": 3,
    "solution": "The function involves a fraction: \\(\\frac{e^{x}}{x + 2}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials. Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative. Differentiate each rewritten term with the chain rule, then recombine. The derivative is \\(e^{x}(x+1)/(x+2)^2\\).",
    "solutionSteps": [
      {
        "explanation": "The function involves a fraction: \\(\\frac{e^{x}}{x + 2}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials.",
        "workingOut": "\\(\\frac{e^{x}}{x + 2}\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative.",
        "workingOut": "\\(\\text{rewrite as }c\\,e^{u(x)}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate each rewritten term with the chain rule, then recombine.",
        "workingOut": "\\(\\dfrac{e^{x}(x+1)}{(x+2)^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "The derivative is \\(\\dfrac{e^{x}(x+1)}{(x+2)^{2}}\\).",
        "workingOut": "\\(\\dfrac{e^{x}(x+1)}{(x+2)^{2}}\\)",
        "graphData": null
      }
    ],
    "hint": "Factor out e^{x} from the numerator after expanding.",
    "graphData": null,
    "opts": [
      "\\(-\\dfrac{e^{x}(x+1)}{(x+2)^{2}}\\)",
      "\\(e^{x}\\)",
      "\\(0\\)",
      "\\(\\dfrac{e^{x}(x+1)}{(x+2)^{2}}\\)"
    ],
    "answer": "3",
    "isNew": true
  },
  {
    "id": "y12a-5b-q9f",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the quotient rule to differentiate the function:\n\\( y = \\frac{x + 2}{e^x} \\)",
    "a": 0,
    "solution": "The function involves a fraction: \\(\\frac{x + 2}{e^{x}}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials. Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative. Differentiate each rewritten term with the chain rule, then recombine. The derivative is \\((-x-1)/e^x\\).",
    "solutionSteps": [
      {
        "explanation": "The function involves a fraction: \\(\\frac{x + 2}{e^{x}}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials.",
        "workingOut": "\\(\\frac{x + 2}{e^{x}}\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative.",
        "workingOut": "\\(\\text{rewrite as }c\\,e^{u(x)}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate each rewritten term with the chain rule, then recombine.",
        "workingOut": "\\(\\dfrac{(-x-1)}{e^x}\\)",
        "graphData": null
      },
      {
        "explanation": "The derivative is \\(\\dfrac{(-x-1)}{e^x}\\).",
        "workingOut": "\\(\\dfrac{(-x-1)}{e^x}\\)",
        "graphData": null
      }
    ],
    "hint": "Be careful with the negative sign when distributing (x + 2).",
    "graphData": null,
    "opts": [
      "\\(\\dfrac{(-x-1)}{e^x}\\)",
      "\\(-\\dfrac{(-x-1)}{e^x}\\)",
      "\\(e^{x}\\)",
      "\\(0\\)"
    ],
    "answer": "0",
    "isNew": true
  },
  {
    "id": "y12a-5b-q9g",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the quotient rule to differentiate the function:\n\\( y = \\frac{x - 2}{e^{3x}} \\)",
    "a": 1,
    "solution": "The function involves a fraction: \\(\\frac{x - 2}{e^{3x}}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials. Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative. Differentiate each rewritten term with the chain rule, then recombine. The derivative is \\((7-3x)/e^{3x}\\).",
    "solutionSteps": [
      {
        "explanation": "The function involves a fraction: \\(\\frac{x - 2}{e^{3x}}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials.",
        "workingOut": "\\(\\frac{x - 2}{e^{3x}}\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative.",
        "workingOut": "\\(\\text{rewrite as }c\\,e^{u(x)}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate each rewritten term with the chain rule, then recombine.",
        "workingOut": "\\(\\dfrac{(7-3x)}{e^{3x}}\\)",
        "graphData": null
      },
      {
        "explanation": "The derivative is \\(\\dfrac{(7-3x)}{e^{3x}}\\).",
        "workingOut": "\\(\\dfrac{(7-3x)}{e^{3x}}\\)",
        "graphData": null
      }
    ],
    "hint": "Differentiate the denominator using chain rule: d/dx(e^{3x}) = 3e^{3x}.",
    "graphData": null,
    "opts": [
      "\\(-\\dfrac{(7-3x)}{e^{3x}}\\)",
      "\\(\\dfrac{(7-3x)}{e^{3x}}\\)",
      "\\(e^{x}\\)",
      "\\(0\\)"
    ],
    "answer": "1",
    "isNew": true
  },
  {
    "id": "y12a-5b-q9h",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the quotient rule to differentiate the function:\n\\( y = \\frac{2 - x^2}{e^x} \\)",
    "a": 2,
    "solution": "The function involves a fraction: \\(\\frac{2 - x^2}{e^{x}}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials. Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative. Differentiate each rewritten term with the chain rule, then recombine. The derivative is \\((x^2-2x-2)/e^x\\).",
    "solutionSteps": [
      {
        "explanation": "The function involves a fraction: \\(\\frac{2 - x^2}{e^{x}}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials.",
        "workingOut": "\\(\\frac{2 - x^2}{e^{x}}\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative.",
        "workingOut": "\\(\\text{rewrite as }c\\,e^{u(x)}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate each rewritten term with the chain rule, then recombine.",
        "workingOut": "\\(\\dfrac{(x^2-2x-2)}{e^x}\\)",
        "graphData": null
      },
      {
        "explanation": "The derivative is \\(\\dfrac{(x^2-2x-2)}{e^x}\\).",
        "workingOut": "\\(\\dfrac{(x^2-2x-2)}{e^x}\\)",
        "graphData": null
      }
    ],
    "hint": "Combine like terms in the numerator carefully.",
    "graphData": null,
    "opts": [
      "\\(-\\dfrac{(x^2-2x-2)}{e^x}\\)",
      "\\(e^{x}\\)",
      "\\(\\dfrac{(x^2-2x-2)}{e^x}\\)",
      "\\(0\\)"
    ],
    "answer": "2",
    "isNew": true
  },
  {
    "id": "y12a-5b-q10a",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify the expression, then differentiate:\n\\( y = (e^x + 2)(e^x + 3) \\)",
    "a": 3,
    "solution": "Expand first: \\((e^{x}+2)(e^{x}+3)=e^{2x}+5e^{x}+6\\). Differentiate term by term: \\(y'=2e^{2x}+5e^{x}\\).",
    "solutionSteps": [
      {
        "explanation": "The question asks you to expand first, then differentiate. Do not use the product rule on the unexpanded form unless you want more work — expanding gives simple exponential terms that are easy to differentiate.",
        "workingOut": "\\(y=(e^{x}+2)(e^{x}+3)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand using FOIL (or the distributive law):\n\\(e^{x}\\cdot e^{x}=e^{2x}\\) (add exponents),\n\\(e^{x}\\cdot 3=3e^{x}\\),\n\\(2\\cdot e^{x}=2e^{x}\\),\n\\(2\\cdot 3=6\\).",
        "workingOut": "\\(y=e^{2x}+3e^{x}+2e^{x}+6\\)",
        "graphData": null
      },
      {
        "explanation": "Combine like terms: the two middle terms are both multiples of \\(e^{x}\\), so \\(3e^{x}+2e^{x}=5e^{x}\\). The expanded simplified form is \\(y=e^{2x}+5e^{x}+6\\).",
        "workingOut": "\\(y=e^{2x}+5e^{x}+6\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate term by term.\n• \\(\\dfrac{d}{dx}e^{2x}=2e^{2x}\\) (chain rule: factor 2 from the exponent),\n• \\(\\dfrac{d}{dx}(5e^{x})=5e^{x}\\),\n• \\(\\dfrac{d}{dx}(6)=0\\) (constant vanishes).",
        "workingOut": "\\(y'=2e^{2x}+5e^{x}+0\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(y'=2e^{2x}+5e^{x}\\). Common errors: forgetting the chain-rule factor 2 on \\(e^{2x}\\) (which gives the wrong option \\(e^{2x}+5e^{x}\\)), or dropping the constant 6 before differentiating (the constant does not affect the derivative).",
        "workingOut": "\\(y'=2e^{2x}+5e^{x}\\)",
        "graphData": null
      }
    ],
    "hint": "Expand using FOIL first to get \\(e^{2x}+5e^{x}+6\\), then differentiate each term.",
    "graphData": null,
    "opts": [
      "\\(-2e^{2x}+5e^{x}\\)",
      "\\(e^{2x}+5e^{x}\\)",
      "\\(2e^{2x}+6e^{x}\\)",
      "\\(2e^{2x}+5e^{x}\\)"
    ],
    "answer": "3",
    "isNew": true
  },
  {
    "id": "y12a-5b-q10b",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify the expression, then differentiate:\n\\( y = (e^{3x} + 1)(e^{3x} - 2) \\)",
    "a": 0,
    "solution": "Expand first with FOIL: \\((e^{3x}+1)(e^{3x}-2)=e^{6x}-2e^{3x}+e^{3x}-2=e^{6x}-e^{3x}-2\\). Differentiate term by term: \\(y'=6e^{6x}-3e^{3x}\\).",
    "solutionSteps": [
      {
        "explanation": "The question asks you to expand first, then differentiate. Expanding turns the product into a sum of simple exponential terms that are easy to differentiate with the chain rule.",
        "workingOut": "\\(y=(e^{3x}+1)(e^{3x}-2)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand using FOIL (distributive law):\n\\(e^{3x}\\cdot e^{3x}=e^{6x}\\) (add exponents: \\(3x+3x=6x\\)),\n\\(e^{3x}\\cdot(-2)=-2e^{3x}\\),\n\\(1\\cdot e^{3x}=e^{3x}\\),\n\\(1\\cdot(-2)=-2\\).",
        "workingOut": "\\(y=e^{6x}-2e^{3x}+e^{3x}-2\\)",
        "graphData": null
      },
      {
        "explanation": "Combine like terms: the two middle terms are both multiples of \\(e^{3x}\\), so \\(-2e^{3x}+e^{3x}=-e^{3x}\\). The expanded simplified form is \\(y=e^{6x}-e^{3x}-2\\).",
        "workingOut": "\\(y=e^{6x}-e^{3x}-2\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate term by term.\n\\(\\bullet\\) \\(\\dfrac{d}{dx}e^{6x}=6e^{6x}\\) (chain rule: factor 6 from the exponent),\n\\(\\bullet\\) \\(\\dfrac{d}{dx}(-e^{3x})=-3e^{3x}\\) (factor 3 from the exponent, keep the minus),\n\\(\\bullet\\) \\(\\dfrac{d}{dx}(-2)=0\\) (constant vanishes).",
        "workingOut": "\\(y'=6e^{6x}-3e^{3x}\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(y'=6e^{6x}-3e^{3x}\\). Common errors: forgetting the chain-rule factor 6 on \\(e^{6x}\\), or combining the middle terms incorrectly as \\(-2e^{3x}\\) instead of \\(-e^{3x}\\) before differentiating.",
        "workingOut": "\\(y'=6e^{6x}-3e^{3x}\\)",
        "graphData": null
      }
    ],
    "hint": "Multiply out brackets, combine e^{3x} terms, then differentiate.",
    "graphData": null,
    "opts": [
      "\\(6e^{6x}-3e^{3x}\\)",
      "\\(-6e^{6x}-3e^{3x}\\)",
      "\\(e^{6x}-3e^{3x}\\)",
      "\\(5e^{6x}-3e^{3x}\\)"
    ],
    "answer": "0",
    "isNew": true
  },
  {
    "id": "y12a-5b-q10c",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify the expression, then differentiate:\n\\( y = (e^{-x} + 3)(e^{-x} + 2) \\)",
    "a": 1,
    "solution": "Expand first: \\((e^{-x}+3)(e^{-x}+2)=e^{-2x}+5e^{-x}+6\\). Differentiate: \\(y'=-2e^{-2x}-5e^{-x}\\).",
    "solutionSteps": [
      {
        "explanation": "Expand first, then differentiate. Do not leave the product unexpanded — FOIL gives simple exponential terms.",
        "workingOut": "\\(y=(e^{-x}+3)(e^{-x}+2)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand with FOIL:\n\\(e^{-x}\\cdot e^{-x}=e^{-2x}\\) (add exponents: \\(-x+(-x)=-2x\\)),\n\\(e^{-x}\\cdot 2=2e^{-x}\\),\n\\(3\\cdot e^{-x}=3e^{-x}\\),\n\\(3\\cdot 2=6\\).",
        "workingOut": "\\(y=e^{-2x}+2e^{-x}+3e^{-x}+6\\)",
        "graphData": null
      },
      {
        "explanation": "Combine like terms: \\(2e^{-x}+3e^{-x}=5e^{-x}\\). The expanded form is \\(y=e^{-2x}+5e^{-x}+6\\).",
        "workingOut": "\\(y=e^{-2x}+5e^{-x}+6\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate term by term. For each negative exponent, the chain rule contributes a minus:\n\\(\\bullet\\) \\(\\dfrac{d}{dx}e^{-2x}=-2e^{-2x}\\),\n\\(\\bullet\\) \\(\\dfrac{d}{dx}(5e^{-x})=5(-e^{-x})=-5e^{-x}\\),\n\\(\\bullet\\) \\(\\dfrac{d}{dx}(6)=0\\).",
        "workingOut": "\\(y'=-2e^{-2x}-5e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(y'=-2e^{-2x}-5e^{-x}\\). Common errors: dropping a chain-rule minus (which can produce the wrong option \\(2e^{-2x}-5e^{-x}\\)), or forgetting that both exponential terms get a negative factor from the chain rule.",
        "workingOut": "\\(y'=-2e^{-2x}-5e^{-x}\\)",
        "graphData": null
      }
    ],
    "hint": "Expand the bracket first, then use the chain rule on each negative exponent term.",
    "graphData": null,
    "opts": [
      "\\(2e^{-2x}-5e^{-x}\\)",
      "\\(-2e^{-2x}-5e^{-x}\\)",
      "\\(e^{-2x}-5e^{-x}\\)",
      "\\(-1e^{-2x}-5e^{-x}\\)"
    ],
    "answer": "1",
    "isNew": true
  },
  {
    "id": "y12a-5b-q10d",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify the expression, then differentiate:\n\\( y = (e^{-2x} - 1)(e^{-2x} - 3) \\)",
    "a": 2,
    "solution": "Expand first: \\((e^{-2x}-1)(e^{-2x}-3)=e^{-4x}-4e^{-2x}+3\\). Differentiate: \\(y'=-4e^{-4x}+8e^{-2x}\\).",
    "solutionSteps": [
      {
        "explanation": "Expand first, then differentiate. The product becomes a sum of exponential terms after FOIL.",
        "workingOut": "\\(y=(e^{-2x}-1)(e^{-2x}-3)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand with FOIL:\n\\(e^{-2x}\\cdot e^{-2x}=e^{-4x}\\),\n\\(e^{-2x}\\cdot(-3)=-3e^{-2x}\\),\n\\((-1)\\cdot e^{-2x}=-e^{-2x}\\),\n\\((-1)\\cdot(-3)=+3\\).",
        "workingOut": "\\(y=e^{-4x}-3e^{-2x}-e^{-2x}+3\\)",
        "graphData": null
      },
      {
        "explanation": "Combine like terms: \\(-3e^{-2x}-e^{-2x}=-4e^{-2x}\\). The expanded form is \\(y=e^{-4x}-4e^{-2x}+3\\).",
        "workingOut": "\\(y=e^{-4x}-4e^{-2x}+3\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate term by term:\n\\(\\bullet\\) \\(\\dfrac{d}{dx}e^{-4x}=-4e^{-4x}\\),\n\\(\\bullet\\) \\(\\dfrac{d}{dx}(-4e^{-2x})=-4\\cdot(-2e^{-2x})=+8e^{-2x}\\) (two minuses: the coefficient and the chain-rule factor),\n\\(\\bullet\\) \\(\\dfrac{d}{dx}(3)=0\\).",
        "workingOut": "\\(y'=-4e^{-4x}+8e^{-2x}\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(y'=-4e^{-4x}+8e^{-2x}\\). Watch the double negative when differentiating \\(-4e^{-2x}\\): the chain rule multiplies by \\(-2\\), so the middle term becomes positive \\(+8e^{-2x}\\).",
        "workingOut": "\\(y'=-4e^{-4x}+8e^{-2x}\\)",
        "graphData": null
      }
    ],
    "hint": "Expand first, then differentiate using the chain rule.",
    "graphData": null,
    "opts": [
      "\\(4e^{-4x}+8e^{-2x}\\)",
      "\\(e^{-4x}+8e^{-2x}\\)",
      "\\(-4e^{-4x}+8e^{-2x}\\)",
      "\\(-3e^{-4x}+8e^{-2x}\\)"
    ],
    "answer": "2",
    "isNew": true
  },
  {
    "id": "y12a-5b-q10e",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify the expression, then differentiate:\n\\( y = (e^{3x} + 1)(e^x + 2) \\)",
    "a": 3,
    "solution": "Expand first: \\((e^{3x}+1)(e^{x}+2)=e^{4x}+2e^{3x}+e^{x}+2\\). Differentiate: \\(y'=4e^{4x}+6e^{3x}+e^{x}\\).",
    "solutionSteps": [
      {
        "explanation": "Expand first, then differentiate. Note that the exponents on the two factors are different (\\(3x\\) and \\(x\\)), so FOIL produces several distinct exponential terms.",
        "workingOut": "\\(y=(e^{3x}+1)(e^{x}+2)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand with FOIL:\n\\(e^{3x}\\cdot e^{x}=e^{4x}\\) (add exponents: \\(3x+x=4x\\)),\n\\(e^{3x}\\cdot 2=2e^{3x}\\),\n\\(1\\cdot e^{x}=e^{x}\\),\n\\(1\\cdot 2=2\\).",
        "workingOut": "\\(y=e^{4x}+2e^{3x}+e^{x}+2\\)",
        "graphData": null
      },
      {
        "explanation": "There are no like terms to combine here — each exponential has a different exponent. The expanded form is already simplified: \\(y=e^{4x}+2e^{3x}+e^{x}+2\\).",
        "workingOut": "\\(y=e^{4x}+2e^{3x}+e^{x}+2\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate term by term:\n\\(\\bullet\\) \\(\\dfrac{d}{dx}e^{4x}=4e^{4x}\\),\n\\(\\bullet\\) \\(\\dfrac{d}{dx}(2e^{3x})=2\\cdot 3e^{3x}=6e^{3x}\\),\n\\(\\bullet\\) \\(\\dfrac{d}{dx}e^{x}=e^{x}\\),\n\\(\\bullet\\) \\(\\dfrac{d}{dx}(2)=0\\).",
        "workingOut": "\\(y'=4e^{4x}+6e^{3x}+e^{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(y'=4e^{4x}+6e^{3x}+e^{x}\\). Common errors: writing \\(e^{3x}\\cdot e^{x}=e^{3x}\\) instead of \\(e^{4x}\\), or forgetting the factor 3 when differentiating \\(2e^{3x}\\) (which would give \\(2e^{3x}\\) instead of \\(6e^{3x}\\)).",
        "workingOut": "\\(y'=4e^{4x}+6e^{3x}+e^{x}\\)",
        "graphData": null
      }
    ],
    "hint": "Expand FOIL first, noting that e^{3x} e^{x} = e^{4x}.",
    "graphData": null,
    "opts": [
      "\\(-4e^{4x}+6e^{3x}+e^x\\)",
      "\\(e^{4x}+6e^{3x}+e^x\\)",
      "\\(3e^{4x}+6e^{3x}+e^x\\)",
      "\\(4e^{4x}+6e^{3x}+e^x\\)"
    ],
    "answer": "3",
    "isNew": true
  },
  {
    "id": "y12a-5b-q10f",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify the expression, then differentiate:\n\\( y = (e^{2x} - 2)(e^{-x} + 1) \\)",
    "a": 0,
    "solution": "Expand first: \\((e^{2x}-2)(e^{-x}+1)=e^{x}+e^{2x}-2e^{-x}-2\\). Differentiate: \\(y'=e^{x}+2e^{2x}+2e^{-x}\\).",
    "solutionSteps": [
      {
        "explanation": "Expand first, then differentiate. Positive and negative exponents appear together — add them carefully when multiplying.",
        "workingOut": "\\(y=(e^{2x}-2)(e^{-x}+1)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand with FOIL:\n\\(e^{2x}\\cdot e^{-x}=e^{x}\\) (add exponents: \\(2x+(-x)=x\\)),\n\\(e^{2x}\\cdot 1=e^{2x}\\),\n\\((-2)\\cdot e^{-x}=-2e^{-x}\\),\n\\((-2)\\cdot 1=-2\\).",
        "workingOut": "\\(y=e^{x}+e^{2x}-2e^{-x}-2\\)",
        "graphData": null
      },
      {
        "explanation": "No like terms to combine (exponents \\(x\\), \\(2x\\), and \\(-x\\) are all different). The expanded form is \\(y=e^{x}+e^{2x}-2e^{-x}-2\\).",
        "workingOut": "\\(y=e^{x}+e^{2x}-2e^{-x}-2\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate term by term:\n\\(\\bullet\\) \\(\\dfrac{d}{dx}e^{x}=e^{x}\\),\n\\(\\bullet\\) \\(\\dfrac{d}{dx}e^{2x}=2e^{2x}\\),\n\\(\\bullet\\) \\(\\dfrac{d}{dx}(-2e^{-x})=-2\\cdot(-e^{-x})=+2e^{-x}\\) (minus times chain-rule minus),\n\\(\\bullet\\) \\(\\dfrac{d}{dx}(-2)=0\\).",
        "workingOut": "\\(y'=e^{x}+2e^{2x}+2e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(y'=e^{x}+2e^{2x}+2e^{-x}\\). The sign flip on the \\(e^{-x}\\) term is important: differentiating \\(-2e^{-x}\\) gives \\(+2e^{-x}\\), not \\(-2e^{-x}\\).",
        "workingOut": "\\(y'=e^{x}+2e^{2x}+2e^{-x}\\)",
        "graphData": null
      }
    ],
    "hint": "Expand brackets first. Note e^{2x} e^{-x} = e^{x}.",
    "graphData": null,
    "opts": [
      "\\(e^{x}+2e^{2x}+2e^{-x}\\)",
      "\\(-e^{x}+2e^{2x}+2e^{-x}\\)",
      "\\(e^{x}\\)",
      "\\(0\\)"
    ],
    "answer": "0",
    "isNew": true
  },
  {
    "id": "y12a-5b-q11a",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the chain rule to differentiate the function:\n\\( y = (1 - e^x)^4 \\)",
    "a": 2,
    "solution": "Let \\(u=1-e^{x}\\), so \\(y=u^{4}\\). Then \\(u'=-e^{x}\\) and \\(y'=4u^{3}\\cdot(-e^{x})=-4e^{x}(1-e^{x})^{3}\\).",
    "solutionSteps": [
      {
        "explanation": "This is a composite function: outer power 4, inner function \\(1-e^{x}\\). Set \\(u=1-e^{x}\\) so that \\(y=u^{4}\\).",
        "workingOut": "\\(u=1-e^{x},\\quad y=u^{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate the outer power with respect to \\(u\\): \\(\\dfrac{dy}{du}=4u^{3}\\).",
        "workingOut": "\\(\\dfrac{dy}{du}=4u^{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate the inner function carefully. The constant 1 has derivative 0. For \\(-e^{x}\\), the derivative is \\(-e^{x}\\) (since \\(\\dfrac{d}{dx}e^{x}=e^{x}\\)). So \\(u'=-e^{x}\\).",
        "workingOut": "\\(u'=-e^{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Chain rule: \\(\\dfrac{dy}{dx}=4u^{3}\\cdot u'=4u^{3}\\cdot(-e^{x})=-4e^{x}u^{3}\\). Substitute \\(u=1-e^{x}\\) back in.",
        "workingOut": "\\(y'=-4e^{x}(1-e^{x})^{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(y'=-4e^{x}(1-e^{x})^{3}\\). Common errors: forgetting the minus from \\(u'\\) (which produces the wrong positive option \\(4e^{x}(1-e^{x})^{3}\\)), or reducing the outer power incorrectly (using 3 instead of 4 as the coefficient).",
        "workingOut": "\\(y'=-4e^{x}(1-e^{x})^{3}\\)",
        "graphData": null
      }
    ],
    "hint": "Differentiate the outer power (4u^3) and multiply it by the derivative of the inside function (-e^{x}).",
    "graphData": null,
    "opts": [
      "\\(4e^{x}(1-e^{x})^3\\)",
      "\\(e^{x}(1-e^{x})^3\\)",
      "\\(-4e^{x}(1-e^{x})^3\\)",
      "\\(-3e^{x}(1-e^{x})^3\\)"
    ],
    "answer": "2",
    "isNew": true
  },
  {
    "id": "y12a-5b-q11b",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the chain rule to differentiate the function:\n\\( y = (e^{3x} - 4)^5 \\)",
    "a": 3,
    "solution": "Let \\(u=e^{3x}-4\\), so \\(y=u^{5}\\). Then \\(u'=3e^{3x}\\) and \\(y'=5u^{4}\\cdot 3e^{3x}=15e^{3x}(e^{3x}-4)^{4}\\).",
    "solutionSteps": [
      {
        "explanation": "Composite function: outer power 5, inner function \\(e^{3x}-4\\). Set \\(u=e^{3x}-4\\) so that \\(y=u^{5}\\).",
        "workingOut": "\\(u=e^{3x}-4,\\quad y=u^{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate the outer power: \\(\\dfrac{dy}{du}=5u^{4}\\). The power drops by 1 (from 5 to 4) and the coefficient is 5.",
        "workingOut": "\\(\\dfrac{dy}{du}=5u^{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate the inner function. The constant \\(-4\\) vanishes. For \\(e^{3x}\\) use the chain rule: the exponent contributes a factor of 3, so \\(u'=3e^{3x}\\).",
        "workingOut": "\\(u'=3e^{3x}\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply outer derivative by inner derivative: \\(\\dfrac{dy}{dx}=5u^{4}\\cdot 3e^{3x}=15e^{3x}u^{4}\\). Then replace \\(u\\) with \\(e^{3x}-4\\).",
        "workingOut": "\\(y'=15e^{3x}(e^{3x}-4)^{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(y'=15e^{3x}(e^{3x}-4)^{4}\\). Common errors: forgetting the chain-rule factor 3 (which would give \\(5e^{3x}(e^{3x}-4)^{4}\\) instead of 15), or writing the outer power as 5 instead of 4 after differentiating.",
        "workingOut": "\\(y'=15e^{3x}(e^{3x}-4)^{4}\\)",
        "graphData": null
      }
    ],
    "hint": "Outer power first, then multiply by the derivative of \\(e^{3x}-4\\).",
    "graphData": null,
    "opts": [
      "\\(-15e^{3x}(e^{3x}-4)^{4}\\)",
      "\\(e^{3x}(e^{3x}-4)^{4}\\)",
      "\\(14e^{3x}(e^{3x}-4)^{4}\\)",
      "\\(15e^{3x}(e^{3x}-4)^{4}\\)"
    ],
    "answer": "3",
    "isNew": true
  },
  {
    "id": "y12a-5b-q11c",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the chain rule to differentiate the function:\n\\( y = \\dfrac{1}{e^{x} - 2} \\)",
    "a": 0,
    "solution": "Rewrite as \\(y=(e^{x}-2)^{-1}\\). Chain rule: \\(y'=(-1)(e^{x}-2)^{-2}\\cdot e^{x}=-\\dfrac{e^{x}}{(e^{x}-2)^{2}}\\).",
    "solutionSteps": [
      {
        "explanation": "Rewrite the reciprocal as a negative power so the power chain rule applies cleanly: \\(y=(e^{x}-2)^{-1}\\).",
        "workingOut": "\\(y=(e^{x}-2)^{-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Set the inner function \\(u=e^{x}-2\\), so \\(y=u^{-1}\\). Differentiate the outer power: \\(\\dfrac{dy}{du}=-1\\cdot u^{-2}=-u^{-2}=-\\dfrac{1}{u^{2}}\\).",
        "workingOut": "\\(u=e^{x}-2,\\quad \\dfrac{dy}{du}=-u^{-2}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate the inner function: \\(u'=e^{x}\\) (the constant \\(-2\\) has derivative 0).",
        "workingOut": "\\(u'=e^{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Chain rule: \\(y'=-u^{-2}\\cdot e^{x}=-\\dfrac{e^{x}}{u^{2}}\\). Substitute \\(u=e^{x}-2\\) back in.",
        "workingOut": "\\(y'=-\\dfrac{e^{x}}{(e^{x}-2)^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(y'=-\\dfrac{e^{x}}{(e^{x}-2)^{2}}\\). Common errors: dropping the minus from the outer power rule (positive fraction option), or forgetting to multiply by the inner derivative \\(e^{x}\\) (which would give \\(-\\dfrac{1}{(e^{x}-2)^{2}}\\)).",
        "workingOut": "\\(y'=-\\dfrac{e^{x}}{(e^{x}-2)^{2}}\\)",
        "graphData": null
      }
    ],
    "hint": "Rewrite as \\((e^{x}-2)^{-1}\\) and apply the power chain rule.",
    "graphData": null,
    "opts": [
      "\\(-\\dfrac{e^{x}}{(e^{x}-2)^{2}}\\)",
      "\\(\\dfrac{e^{x}}{(e^{x}-2)^{2}}\\)",
      "\\(-\\dfrac{1}{(e^{x}-2)^{2}}\\)",
      "\\(\\dfrac{1}{(e^{x}-2)^{2}}\\)"
    ],
    "answer": "0",
    "isNew": true
  },
  {
    "id": "y12a-5b-q11d",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the chain rule to differentiate the function:\n\\( y = \\frac{1}{(e^{2x} + 3)^3} \\)",
    "a": 1,
    "solution": "Rewrite as \\(y=(e^{2x}+3)^{-3}\\). Let \\(u=e^{2x}+3\\), so \\(u'=2e^{2x}\\) and \\(y'=-3u^{-4}\\cdot 2e^{2x}=-\\dfrac{6e^{2x}}{(e^{2x}+3)^{4}}\\).",
    "solutionSteps": [
      {
        "explanation": "Rewrite the fraction as a negative power: \\(\\dfrac{1}{(e^{2x}+3)^{3}}=(e^{2x}+3)^{-3}\\). This makes the power chain rule direct.",
        "workingOut": "\\(y=(e^{2x}+3)^{-3}\\)",
        "graphData": null
      },
      {
        "explanation": "Set the inner function \\(u=e^{2x}+3\\), so \\(y=u^{-3}\\). Outer derivative: \\(\\dfrac{dy}{du}=-3u^{-4}=-\\dfrac{3}{u^{4}}\\).",
        "workingOut": "\\(u=e^{2x}+3,\\quad \\dfrac{dy}{du}=-3u^{-4}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate the inner function. Constant 3 vanishes. For \\(e^{2x}\\) the chain rule gives factor 2: \\(u'=2e^{2x}\\).",
        "workingOut": "\\(u'=2e^{2x}\\)",
        "graphData": null
      },
      {
        "explanation": "Chain rule: \\(y'=(-3u^{-4})\\cdot(2e^{2x})=-6e^{2x}u^{-4}=-\\dfrac{6e^{2x}}{u^{4}}\\). Substitute \\(u=e^{2x}+3\\).",
        "workingOut": "\\(y'=-\\dfrac{6e^{2x}}{(e^{2x}+3)^{4}}\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(y'=-\\dfrac{6e^{2x}}{(e^{2x}+3)^{4}}\\). Common errors: forgetting the factor 2 from \\(u'\\) (which would give 3 instead of 6 in the numerator), dropping the overall minus, or reducing the outer power from \\(-3\\) to \\(-2\\) instead of \\(-4\\).",
        "workingOut": "\\(y'=-\\dfrac{6e^{2x}}{(e^{2x}+3)^{4}}\\)",
        "graphData": null
      }
    ],
    "hint": "Express as (e^{2x} + 3)^(-3). The derivative of the inside is 2e^{2x}.",
    "graphData": null,
    "opts": [
      "\\(\\dfrac{6e^{2x}}{(e^{2x}+3)^{4}}\\)",
      "\\(-\\dfrac{6e^{2x}}{(e^{2x}+3)^{4}}\\)",
      "\\(\\dfrac{e^{2x}}{(e^{2x}+3)^{4}}\\)",
      "\\(-\\dfrac{5e^{2x}}{(e^{2x}+3)^{4}}\\)"
    ],
    "answer": "1",
    "isNew": true
  },
  {
    "id": "y12a-5b-q12a",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Show by substitution that the function \\( y = e^{6x} \\) satisfies the differential equation \\( \\dfrac{dy}{dx} = 6y \\).",
    "a": "\\(y = e^{6x}.\\)\n\\(\\text{LHS} = \\dfrac{dy}{dx} = 6e^{6x}.\\)\n\\(\\text{RHS} = 6y = 6e^{6x}.\\)\n\\(\\text{LHS} = \\text{RHS}.\\)",
    "answer": "\\(y = e^{6x}.\\)\n\\(\\text{LHS} = \\dfrac{dy}{dx} = 6e^{6x}.\\)\n\\(\\text{RHS} = 6y = 6e^{6x}.\\)\n\\(\\text{LHS} = \\text{RHS}.\\)",
    "solution": "Given \\(y = e^{6x}\\). Differentiate: \\(\\dfrac{dy}{dx} = 6e^{6x}\\) (chain rule on the exponential). Right-hand side: \\(6y = 6e^{6x}\\). Both sides equal \\(6e^{6x}\\), so the DE is satisfied.",
    "solutionSteps": [
      {
        "explanation": "We must show that \\(y = e^{6x}\\) satisfies \\(\\dfrac{dy}{dx} = 6y\\). Evaluate the left-hand side and the right-hand side separately, then compare.",
        "workingOut": "\\(y = e^{6x}\\)",
        "graphData": null
      },
      {
        "explanation": "Left-hand side: differentiate \\(y\\). Using \\(\\dfrac{d}{dx}e^{u} = e^{u}u'\\) with the appropriate constant multiple, \\(\\dfrac{dy}{dx} = 6e^{6x}\\).",
        "workingOut": "\\(\\text{LHS} = \\dfrac{dy}{dx} = 6e^{6x}\\)",
        "graphData": null
      },
      {
        "explanation": "Right-hand side: substitute the given function into \\(6y\\). \\(6y = 6e^{6x}\\).",
        "workingOut": "\\(\\text{RHS} = 6y = 6e^{6x}\\)",
        "graphData": null
      },
      {
        "explanation": "Compare: both sides equal \\(6e^{6x}\\). Therefore \\(\\text{LHS} = \\text{RHS}\\), and \\(y = e^{6x}\\) satisfies the differential equation.",
        "workingOut": "\\(\\text{LHS} = \\text{RHS} = 6e^{6x}\\)",
        "graphData": null
      }
    ],
    "hint": "Differentiate y, then substitute e^{6x} for y on the right side of the equation.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q12b",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Show by substitution that the function \\( y = 4e^{3x} \\) satisfies the equation \\( \\dfrac{dy}{dx} = 3y \\).",
    "a": "\\(y = 4e^{3x}.\\)\n\\(\\text{LHS} = \\dfrac{dy}{dx} = 4\\cdot 3e^{3x} = 12e^{3x}.\\)\n\\(\\text{RHS} = 3y = 3(4e^{3x}) = 12e^{3x}.\\)\n\\(\\text{LHS} = \\text{RHS}.\\)",
    "answer": "\\(y = 4e^{3x}.\\)\n\\(\\text{LHS} = \\dfrac{dy}{dx} = 4\\cdot 3e^{3x} = 12e^{3x}.\\)\n\\(\\text{RHS} = 3y = 3(4e^{3x}) = 12e^{3x}.\\)\n\\(\\text{LHS} = \\text{RHS}.\\)",
    "solution": "Given \\(y = 4e^{3x}\\). Differentiate: \\(\\dfrac{dy}{dx} = 12e^{3x}\\) (chain rule on the exponential). Right-hand side: \\(3y = 3(4e^{3x}) = 12e^{3x}\\). Both sides equal \\(12e^{3x}\\), so the DE is satisfied.",
    "solutionSteps": [
      {
        "explanation": "We must show that \\(y = 4e^{3x}\\) satisfies \\(\\dfrac{dy}{dx} = 3y\\). Evaluate the left-hand side and the right-hand side separately, then compare.",
        "workingOut": "\\(y = 4e^{3x}\\)",
        "graphData": null
      },
      {
        "explanation": "Left-hand side: differentiate \\(y\\). Using \\(\\dfrac{d}{dx}e^{u} = e^{u}u'\\) with the appropriate constant multiple, \\(\\dfrac{dy}{dx} = 12e^{3x}\\).",
        "workingOut": "\\(\\text{LHS} = \\dfrac{dy}{dx} = 12e^{3x}\\)",
        "graphData": null
      },
      {
        "explanation": "Right-hand side: substitute the given function into \\(3y\\). \\(3y = 3(4e^{3x}) = 12e^{3x}\\).",
        "workingOut": "\\(\\text{RHS} = 3y = 3(4e^{3x}) = 12e^{3x}\\)",
        "graphData": null
      },
      {
        "explanation": "Compare: both sides equal \\(12e^{3x}\\). Therefore \\(\\text{LHS} = \\text{RHS}\\), and \\(y = 4e^{3x}\\) satisfies the differential equation.",
        "workingOut": "\\(\\text{LHS} = \\text{RHS} = 12e^{3x}\\)",
        "graphData": null
      }
    ],
    "hint": "Calculate the derivative of 4e^{3x} and compare it to 3 times 4e^{3x}.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q12c",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Show by substitution that the function \\( y = 3e^{-5x} \\) satisfies the equation \\( \\dfrac{dy}{dx} = -5y \\).",
    "a": "\\(y = 3e^{-5x}.\\)\n\\(\\text{LHS} = \\dfrac{dy}{dx} = 3\\cdot(-5)e^{-5x} = -15e^{-5x}.\\)\n\\(\\text{RHS} = -5y = -5(3e^{-5x}) = -15e^{-5x}.\\)\n\\(\\text{LHS} = \\text{RHS}.\\)",
    "answer": "\\(y = 3e^{-5x}.\\)\n\\(\\text{LHS} = \\dfrac{dy}{dx} = 3\\cdot(-5)e^{-5x} = -15e^{-5x}.\\)\n\\(\\text{RHS} = -5y = -5(3e^{-5x}) = -15e^{-5x}.\\)\n\\(\\text{LHS} = \\text{RHS}.\\)",
    "solution": "Given \\(y = 3e^{-5x}\\). Differentiate: \\(\\dfrac{dy}{dx} = -15e^{-5x}\\) (chain rule on the exponential). Right-hand side: \\(-5y = -5(3e^{-5x}) = -15e^{-5x}\\). Both sides equal \\(-15e^{-5x}\\), so the DE is satisfied.",
    "solutionSteps": [
      {
        "explanation": "We must show that \\(y = 3e^{-5x}\\) satisfies \\(\\dfrac{dy}{dx} = -5y\\). Evaluate the left-hand side and the right-hand side separately, then compare.",
        "workingOut": "\\(y = 3e^{-5x}\\)",
        "graphData": null
      },
      {
        "explanation": "Left-hand side: differentiate \\(y\\). Using \\(\\dfrac{d}{dx}e^{u} = e^{u}u'\\) with the appropriate constant multiple, \\(\\dfrac{dy}{dx} = -15e^{-5x}\\).",
        "workingOut": "\\(\\text{LHS} = \\dfrac{dy}{dx} = -15e^{-5x}\\)",
        "graphData": null
      },
      {
        "explanation": "Right-hand side: substitute the given function into \\(-5y\\). \\(-5y = -5(3e^{-5x}) = -15e^{-5x}\\).",
        "workingOut": "\\(\\text{RHS} = -5y = -5(3e^{-5x}) = -15e^{-5x}\\)",
        "graphData": null
      },
      {
        "explanation": "Compare: both sides equal \\(-15e^{-5x}\\). Therefore \\(\\text{LHS} = \\text{RHS}\\), and \\(y = 3e^{-5x}\\) satisfies the differential equation.",
        "workingOut": "\\(\\text{LHS} = \\text{RHS} = -15e^{-5x}\\)",
        "graphData": null
      }
    ],
    "hint": "Differentiate y and check if it equals -5 times y.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q12d",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Show by substitution that the function \\( y = 2e^{-4x} \\) satisfies the equation \\( \\dfrac{dy}{dx} = -4y \\).",
    "a": "\\(y = 2e^{-4x}.\\)\n\\(\\text{LHS} = \\dfrac{dy}{dx} = 2\\cdot(-4)e^{-4x} = -8e^{-4x}.\\)\n\\(\\text{RHS} = -4y = -4(2e^{-4x}) = -8e^{-4x}.\\)\n\\(\\text{LHS} = \\text{RHS}.\\)",
    "answer": "\\(y = 2e^{-4x}.\\)\n\\(\\text{LHS} = \\dfrac{dy}{dx} = 2\\cdot(-4)e^{-4x} = -8e^{-4x}.\\)\n\\(\\text{RHS} = -4y = -4(2e^{-4x}) = -8e^{-4x}.\\)\n\\(\\text{LHS} = \\text{RHS}.\\)",
    "solution": "Given \\(y = 2e^{-4x}\\). Differentiate: \\(\\dfrac{dy}{dx} = -8e^{-4x}\\) (chain rule on the exponential). Right-hand side: \\(-4y = -4(2e^{-4x}) = -8e^{-4x}\\). Both sides equal \\(-8e^{-4x}\\), so the DE is satisfied.",
    "solutionSteps": [
      {
        "explanation": "We must show that \\(y = 2e^{-4x}\\) satisfies \\(\\dfrac{dy}{dx} = -4y\\). Evaluate the left-hand side and the right-hand side separately, then compare.",
        "workingOut": "\\(y = 2e^{-4x}\\)",
        "graphData": null
      },
      {
        "explanation": "Left-hand side: differentiate \\(y\\). Using \\(\\dfrac{d}{dx}e^{u} = e^{u}u'\\) with the appropriate constant multiple, \\(\\dfrac{dy}{dx} = -8e^{-4x}\\).",
        "workingOut": "\\(\\text{LHS} = \\dfrac{dy}{dx} = -8e^{-4x}\\)",
        "graphData": null
      },
      {
        "explanation": "Right-hand side: substitute the given function into \\(-4y\\). \\(-4y = -4(2e^{-4x}) = -8e^{-4x}\\).",
        "workingOut": "\\(\\text{RHS} = -4y = -4(2e^{-4x}) = -8e^{-4x}\\)",
        "graphData": null
      },
      {
        "explanation": "Compare: both sides equal \\(-8e^{-4x}\\). Therefore \\(\\text{LHS} = \\text{RHS}\\), and \\(y = 2e^{-4x}\\) satisfies the differential equation.",
        "workingOut": "\\(\\text{LHS} = \\text{RHS} = -8e^{-4x}\\)",
        "graphData": null
      }
    ],
    "hint": "Differentiate y, then verify it is equal to -4y.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q13a",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the function \\( f(x) = e^{3x+1} \\), evaluate both the first derivative and the second derivative at \\( x = 0 \\).",
    "a": 2,
    "solution": "\\(f(x)=e^{3x+1}\\). Chain rule: \\(f'(x)=3e^{3x+1}\\), \\(f''(x)=9e^{3x+1}\\). At \\(x=0\\): \\(f'(0)=3e^{1}=3e\\), \\(f''(0)=9e\\).",
    "solutionSteps": [
      {
        "explanation": "Given \\(f(x)=e^{3x+1}\\). The exponent is linear: use the chain rule \\(\\dfrac{d}{dx}e^{u}=e^{u}u'\\) with \\(u=3x+1\\).",
        "workingOut": "\\(f(x)=e^{3x+1},\\quad u=3x+1\\)",
        "graphData": null
      },
      {
        "explanation": "First derivative: \\(u'=3\\), so \\(f'(x)=3e^{3x+1}\\). Differentiate again: the same chain-rule factor 3 multiplies once more, giving \\(f''(x)=9e^{3x+1}\\).",
        "workingOut": "\\(f'(x)=3e^{3x+1},\\quad f''(x)=9e^{3x+1}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\(x=0\\). Note that \\(e^{3(0)+1}=e^{1}=e\\):\\n\\(f'(0)=3e\\),\\n\\(f''(0)=9e\\).",
        "workingOut": "\\(f'(0)=3e,\\quad f''(0)=9e\\)",
        "graphData": null
      },
      {
        "explanation": "Common errors: forgetting the constant in the exponent and writing \\(e^{0}=1\\) (which gives the wrong option \\(3,\\;9\\)), or reusing the factor 3 only once on the second derivative (\\(3e\\) instead of \\(9e\\)).",
        "workingOut": "\\(f'(0)=3e,\\; f''(0)=9e\\)",
        "graphData": null
      }
    ],
    "hint": "Differentiate twice with the chain rule, then substitute x = 0. Remember e^{3(0)+1} = e.",
    "graphData": null,
    "opts": [
      "\\(f'(0) = 3,\\; f''(0) = 9\\)",
      "\\(f'(0) = 3e,\\; f''(0) = 3e\\)",
      "\\(f'(0) = 3e,\\; f''(0) = 9e\\)",
      "\\(f'(0) = e,\\; f''(0) = 9e\\)"
    ],
    "answer": "2",
    "isNew": true
  },
  {
    "id": "y12a-5b-q13b",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the function \\( f(x) = e^{-2x} \\), evaluate both the first derivative and the second derivative at \\( x = 1 \\).",
    "a": 0,
    "solution": "\\(f(x)=e^{-2x}\\). Then \\(f'(x)=-2e^{-2x}\\), \\(f''(x)=4e^{-2x}\\). At \\(x=1\\): \\(f'(1)=-2e^{-2}\\), \\(f''(1)=4e^{-2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given \\(f(x)=e^{-2x}\\). Chain rule with exponent \\(u=-2x\\): \\(u'=-2\\).",
        "workingOut": "\\(f(x)=e^{-2x}\\)",
        "graphData": null
      },
      {
        "explanation": "First derivative: \\(f'(x)=-2e^{-2x}\\). Differentiate again: the chain-rule factor is still \\(-2\\), so \\(f''(x)=(-2)(-2)e^{-2x}=4e^{-2x}\\).",
        "workingOut": "\\(f'(x)=-2e^{-2x},\\quad f''(x)=4e^{-2x}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\(x=1\\):\\n\\(f'(1)=-2e^{-2}\\),\\n\\(f''(1)=4e^{-2}\\).",
        "workingOut": "\\(f'(1)=-2e^{-2},\\quad f''(1)=4e^{-2}\\)",
        "graphData": null
      },
      {
        "explanation": "Common errors: dropping the minus on \\(f'\\) (option \\(2e^{-2}\\)), keeping a minus on \\(f''\\) (option \\(-4e^{-2}\\)), or evaluating the exponential as \\(e\\) instead of \\(e^{-2}\\).",
        "workingOut": "\\(f'(1)=-2e^{-2},\\; f''(1)=4e^{-2}\\)",
        "graphData": null
      }
    ],
    "hint": "Chain rule twice. At x = 1 the exponential becomes e^{-2}, not e.",
    "graphData": null,
    "opts": [
      "\\(f'(1) = -2e^{-2},\\; f''(1) = 4e^{-2}\\)",
      "\\(f'(1) = 2e^{-2},\\; f''(1) = 4e^{-2}\\)",
      "\\(f'(1) = -2e^{-2},\\; f''(1) = -4e^{-2}\\)",
      "\\(f'(1) = -2e,\\; f''(1) = 4e\\)"
    ],
    "answer": "0",
    "isNew": true
  },
  {
    "id": "y12a-5b-q13c",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the function \\( f(x) = x e^{-2x} \\), evaluate both the first derivative and the second derivative at \\( x = 1 \\).",
    "a": 3,
    "solution": "Product rule: \\(f'(x)=e^{-2x}(1-2x)\\). At \\(x=1\\): \\(f'(1)=-e^{-2}\\). Second derivative: \\(f''(x)=e^{-2x}(4x-4)\\). At \\(x=1\\): \\(f''(1)=0\\).",
    "solutionSteps": [
      {
        "explanation": "This is a product: \\(f(x)=x\\cdot e^{-2x}\\). Use the product rule \\((uv)'=u'v+uv'\\) with \\(u=x\\), \\(v=e^{-2x}\\).",
        "workingOut": "\\(u=x,\\quad v=e^{-2x}\\)",
        "graphData": null
      },
      {
        "explanation": "\\(u'=1\\) and \\(v'=-2e^{-2x}\\). So\\n\\(f'(x)=1\\cdot e^{-2x}+x(-2e^{-2x})=e^{-2x}-2x e^{-2x}=e^{-2x}(1-2x)\\).",
        "workingOut": "\\(f'(x)=e^{-2x}(1-2x)\\)",
        "graphData": null
      },
      {
        "explanation": "At \\(x=1\\): \\(f'(1)=e^{-2}(1-2)=-e^{-2}\\).",
        "workingOut": "\\(f'(1)=-e^{-2}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate again with the product rule on \\(e^{-2x}(1-2x)\\):\\n\\(f''(x)=(-2e^{-2x})(1-2x)+e^{-2x}(-2)=e^{-2x}\\bigl[-2(1-2x)-2\\bigr]=e^{-2x}(4x-4)\\).\\nAt \\(x=1\\): \\(f''(1)=e^{-2}(4-4)=0\\).",
        "workingOut": "\\(f''(1)=0\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(f'(1)=-e^{-2}\\) and \\(f''(1)=0\\). Common errors: treating it as pure exponential (missing product rule), or mis-evaluating \\(f''(1)\\) as nonzero.",
        "workingOut": "\\(f'(1)=-e^{-2},\\; f''(1)=0\\)",
        "graphData": null
      }
    ],
    "hint": "Use the product rule for both derivatives. f''(1) simplifies to 0.",
    "graphData": null,
    "opts": [
      "\\(f'(1) = -e^{-2},\\; f''(1) = 4e^{-2}\\)",
      "\\(f'(1) = -2e^{-2},\\; f''(1) = 0\\)",
      "\\(f'(1) = e^{-2},\\; f''(1) = 0\\)",
      "\\(f'(1) = -e^{-2},\\; f''(1) = 0\\)"
    ],
    "answer": "3",
    "isNew": true
  },
  {
    "id": "y12a-5b-q13d",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the function \\( f(x) = e^{-3x^{2}} \\), evaluate both the first derivative and the second derivative at \\( x = 0 \\).",
    "a": 1,
    "solution": "Chain rule: \\(f'(x)=-6x e^{-3x^{2}}\\), so \\(f'(0)=0\\). Product rule on \\(f'\\): \\(f''(x)=-6e^{-3x^{2}}(1-6x^{2})\\), so \\(f''(0)=-6\\).",
    "solutionSteps": [
      {
        "explanation": "Given \\(f(x)=e^{-3x^{2}}\\). Chain rule with inner function \\(u=-3x^{2}\\): \\(u'=-6x\\).",
        "workingOut": "\\(f(x)=e^{-3x^{2}},\\quad u=-3x^{2}\\)",
        "graphData": null
      },
      {
        "explanation": "First derivative: \\(f'(x)=e^{-3x^{2}}\\cdot(-6x)=-6x e^{-3x^{2}}\\). At \\(x=0\\) the factor of \\(x\\) forces \\(f'(0)=0\\).",
        "workingOut": "\\(f'(x)=-6x e^{-3x^{2}},\\quad f'(0)=0\\)",
        "graphData": null
      },
      {
        "explanation": "Second derivative: apply the product rule to \\(-6x\\cdot e^{-3x^{2}}\\).\\n\\(f''(x)=-6\\bigl[e^{-3x^{2}}+x\\cdot(-6x)e^{-3x^{2}}\\bigr]=-6e^{-3x^{2}}(1-6x^{2})\\).",
        "workingOut": "\\(f''(x)=-6e^{-3x^{2}}(1-6x^{2})\\)",
        "graphData": null
      },
      {
        "explanation": "At \\(x=0\\): \\(f''(0)=-6e^{0}(1-0)=-6\\).",
        "workingOut": "\\(f''(0)=-6\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(f'(0)=0\\) and \\(f''(0)=-6\\). Common errors: flipping the sign of \\(f''(0)\\) to \\(+6\\), or claiming both derivatives are zero.",
        "workingOut": "\\(f'(0)=0,\\; f''(0)=-6\\)",
        "graphData": null
      }
    ],
    "hint": "f' has a factor of x so f'(0)=0. Use the product rule for f''.",
    "graphData": null,
    "opts": [
      "\\(f'(0) = 0,\\; f''(0) = 6\\)",
      "\\(f'(0) = 0,\\; f''(0) = -6\\)",
      "\\(f'(0) = -6,\\; f''(0) = -6\\)",
      "\\(f'(0) = 0,\\; f''(0) = 0\\)"
    ],
    "answer": "1",
    "isNew": true
  },
  {
    "id": "y12a-5b-q14a",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate the function using standard derivative rules:\n\\( y = e^{mx} \\)",
    "a": 3,
    "solution": "We are asked to differentiate \\(e^{mx}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\). Identify the exponent (the inner function). Here the exponent is \\(mx\\). Differentiate that exponent with respect to \\(x\\) — this factor multiplies the exponential after differentiation. Apply the rule: the derivative of \\(e^{u}\\) is \\(e^{u}\\cdot u'\\). Then apply the constant-multiple rule if there is a coefficient in front of the exponential. Multiply the coefficient carefully (watch the sign). So the derivative is \\(me^{mx}\\). Check the answer against common errors: forgetting the chain-rule factor from the exponent, or dropping a leading constant.",
    "solutionSteps": [
      {
        "explanation": "We are asked to differentiate \\(e^{mx}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\).",
        "workingOut": "\\(\\dfrac{d}{dx}e^{u}=e^{u}\\,u'\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the exponent (the inner function). Here the exponent is \\(mx\\). Differentiate that exponent with respect to \\(x\\) — this factor multiplies the exponential after differentiation.",
        "workingOut": "\\(u=mx,\\quad u'=\\text{(derivative of exponent)}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the rule: the derivative of \\(e^{u}\\) is \\(e^{u}\\cdot u'\\). Then apply the constant-multiple rule if there is a coefficient in front of the exponential. Multiply the coefficient carefully (watch the sign).",
        "workingOut": "\\(me^{mx}\\)",
        "graphData": null
      },
      {
        "explanation": "So the derivative is \\(me^{mx}\\). Check the answer against common errors: forgetting the chain-rule factor from the exponent, or dropping a leading constant.",
        "workingOut": "\\(me^{mx}\\)",
        "graphData": null
      }
    ],
    "hint": "The coefficient of x in the exponent is m.",
    "graphData": null,
    "opts": [
      "\\(-me^{mx}\\)",
      "\\(e^{x}\\)",
      "\\(0\\)",
      "\\(me^{mx}\\)"
    ],
    "answer": "3",
    "isNew": true
  },
  {
    "id": "y12a-5b-q14b",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate the function:\n\\( y = e^{-ax} \\)",
    "a": 0,
    "solution": "We are asked to differentiate \\(e^{-ax}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\). Identify the exponent (the inner function). Here the exponent is \\(-ax\\). Differentiate that exponent with respect to \\(x\\) — this factor multiplies the exponential after differentiation. Apply the rule: the derivative of \\(e^{u}\\) is \\(e^{u}\\cdot u'\\). Then apply the constant-multiple rule if there is a coefficient in front of the exponential. Multiply the coefficient carefully (watch the sign). So the derivative is \\(-ae^{-ax}\\). Check the answer against common errors: forgetting the chain-rule factor from the exponent, or dropping a leading constant.",
    "solutionSteps": [
      {
        "explanation": "We are asked to differentiate \\(e^{-ax}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\).",
        "workingOut": "\\(\\dfrac{d}{dx}e^{u}=e^{u}\\,u'\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the exponent (the inner function). Here the exponent is \\(-ax\\). Differentiate that exponent with respect to \\(x\\) — this factor multiplies the exponential after differentiation.",
        "workingOut": "\\(u=-ax,\\quad u'=\\text{(derivative of exponent)}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the rule: the derivative of \\(e^{u}\\) is \\(e^{u}\\cdot u'\\). Then apply the constant-multiple rule if there is a coefficient in front of the exponential. Multiply the coefficient carefully (watch the sign).",
        "workingOut": "\\(-ae^{-ax}\\)",
        "graphData": null
      },
      {
        "explanation": "So the derivative is \\(-ae^{-ax}\\). Check the answer against common errors: forgetting the chain-rule factor from the exponent, or dropping a leading constant.",
        "workingOut": "\\(-ae^{-ax}\\)",
        "graphData": null
      }
    ],
    "hint": "The derivative coefficient is -a.",
    "graphData": null,
    "opts": [
      "\\(-ae^{-ax}\\)",
      "\\(ae^{-ax}\\)",
      "\\(e^{x}\\)",
      "\\(0\\)"
    ],
    "answer": "0",
    "isNew": true
  },
  {
    "id": "y12a-5b-q14c",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate the function:\n\\( y = P e^{kx} \\)",
    "a": 1,
    "solution": "We are asked to differentiate \\(P e^{kx}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\). Differentiate term by term (or with the chain rule) until every exponential and power has been handled. The simplified derivative is \\(kPe^{kx}\\).",
    "solutionSteps": [
      {
        "explanation": "We are asked to differentiate \\(P e^{kx}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\).",
        "workingOut": "\\(\\dfrac{d}{dx}e^{u}=e^{u}\\,u'\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate term by term (or with the chain rule) until every exponential and power has been handled.",
        "workingOut": "\\(kPe^{kx}\\)",
        "graphData": null
      },
      {
        "explanation": "The simplified derivative is \\(kPe^{kx}\\).",
        "workingOut": "\\(kPe^{kx}\\)",
        "graphData": null
      }
    ],
    "hint": "P is a constant, so it remains in the derivative.",
    "graphData": null,
    "opts": [
      "\\(-kPe^{kx}\\)",
      "\\(kPe^{kx}\\)",
      "\\(e^{x}\\)",
      "\\(0\\)"
    ],
    "answer": "1",
    "isNew": true
  },
  {
    "id": "y12a-5b-q14d",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate the function:\n\\( y = A e^{-cx} \\)",
    "a": 2,
    "solution": "We are asked to differentiate \\(A e^{-cx}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\). Differentiate term by term (or with the chain rule) until every exponential and power has been handled. The simplified derivative is \\(-cAe^{-cx}\\).",
    "solutionSteps": [
      {
        "explanation": "We are asked to differentiate \\(A e^{-cx}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\).",
        "workingOut": "\\(\\dfrac{d}{dx}e^{u}=e^{u}\\,u'\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate term by term (or with the chain rule) until every exponential and power has been handled.",
        "workingOut": "\\(-cAe^{-cx}\\)",
        "graphData": null
      },
      {
        "explanation": "The simplified derivative is \\(-cAe^{-cx}\\).",
        "workingOut": "\\(-cAe^{-cx}\\)",
        "graphData": null
      }
    ],
    "hint": "The constant A remains, and the derivative of the exponent adds a factor of -c.",
    "graphData": null,
    "opts": [
      "\\(cAe^{-cx}\\)",
      "\\(e^{x}\\)",
      "\\(-cAe^{-cx}\\)",
      "\\(0\\)"
    ],
    "answer": "2",
    "isNew": true
  },
  {
    "id": "y12a-5b-q14e",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate the function:\n\\( y = e^{ax+b} \\)",
    "a": 3,
    "solution": "We are asked to differentiate \\(e^{ax+b}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\). Identify the exponent (the inner function). Here the exponent is \\(ax+b\\). Differentiate that exponent with respect to \\(x\\) — this factor multiplies the exponential after differentiation. Apply the rule: the derivative of \\(e^{u}\\) is \\(e^{u}\\cdot u'\\). Then apply the constant-multiple rule if there is a coefficient in front of the exponential. Multiply the coefficient carefully (watch the sign). So the derivative is \\(ae^{ax+b}\\). Check the answer against common errors: forgetting the chain-rule factor from the exponent, or dropping a leading constant.",
    "solutionSteps": [
      {
        "explanation": "We are asked to differentiate \\(e^{ax+b}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\).",
        "workingOut": "\\(\\dfrac{d}{dx}e^{u}=e^{u}\\,u'\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the exponent (the inner function). Here the exponent is \\(ax+b\\). Differentiate that exponent with respect to \\(x\\) — this factor multiplies the exponential after differentiation.",
        "workingOut": "\\(u=ax+b,\\quad u'=\\text{(derivative of exponent)}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the rule: the derivative of \\(e^{u}\\) is \\(e^{u}\\cdot u'\\). Then apply the constant-multiple rule if there is a coefficient in front of the exponential. Multiply the coefficient carefully (watch the sign).",
        "workingOut": "\\(ae^{ax+b}\\)",
        "graphData": null
      },
      {
        "explanation": "So the derivative is \\(ae^{ax+b}\\). Check the answer against common errors: forgetting the chain-rule factor from the exponent, or dropping a leading constant.",
        "workingOut": "\\(ae^{ax+b}\\)",
        "graphData": null
      }
    ],
    "hint": "The derivative of ax + b is a.",
    "graphData": null,
    "opts": [
      "\\(-ae^{ax+b}\\)",
      "\\(e^{x}\\)",
      "\\(0\\)",
      "\\(ae^{ax+b}\\)"
    ],
    "answer": "3",
    "isNew": true
  },
  {
    "id": "y12a-5b-q14f",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate the function:\n\\( y = C e^{px+q} \\)",
    "a": 0,
    "solution": "We are asked to differentiate \\(C e^{px+q}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\). Differentiate term by term (or with the chain rule) until every exponential and power has been handled. The simplified derivative is \\(pCe^{px+q}\\).",
    "solutionSteps": [
      {
        "explanation": "We are asked to differentiate \\(C e^{px+q}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\).",
        "workingOut": "\\(\\dfrac{d}{dx}e^{u}=e^{u}\\,u'\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate term by term (or with the chain rule) until every exponential and power has been handled.",
        "workingOut": "\\(pCe^{px+q}\\)",
        "graphData": null
      },
      {
        "explanation": "The simplified derivative is \\(pCe^{px+q}\\).",
        "workingOut": "\\(pCe^{px+q}\\)",
        "graphData": null
      }
    ],
    "hint": "Multiply by the coefficient p from the exponent.",
    "graphData": null,
    "opts": [
      "\\(pCe^{px+q}\\)",
      "\\(-pCe^{px+q}\\)",
      "\\(e^{x}\\)",
      "\\(0\\)"
    ],
    "answer": "0",
    "isNew": true
  },
  {
    "id": "y12a-5b-q14g",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate the function:\n\\( y = \\dfrac{e^{kx} + e^{-kx}}{2} \\)",
    "a": 1,
    "solution": "Rewrite \\(y=\\dfrac{1}{2}e^{kx}+\\dfrac{1}{2}e^{-kx}\\). Differentiate term by term: \\(y'=\\dfrac{k}{2}e^{kx}-\\dfrac{k}{2}e^{-kx}=\\dfrac{k}{2}(e^{kx}-e^{-kx})\\).",
    "solutionSteps": [
      {
        "explanation": "Write each term with the constant factor outside: \\(y=\\dfrac{e^{kx}+e^{-kx}}{2}=\\dfrac{1}{2}e^{kx}+\\dfrac{1}{2}e^{-kx}\\).",
        "workingOut": "\\(y=\\dfrac{1}{2}e^{kx}+\\dfrac{1}{2}e^{-kx}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate term by term using the chain rule.\\n\\(\\dfrac{d}{dx}\\left(\\dfrac{1}{2}e^{kx}\\right)=\\dfrac{1}{2}\\cdot k e^{kx}=\\dfrac{k}{2}e^{kx}\\),\\n\\(\\dfrac{d}{dx}\\left(\\dfrac{1}{2}e^{-kx}\\right)=\\dfrac{1}{2}\\cdot(-k)e^{-kx}=-\\dfrac{k}{2}e^{-kx}\\).",
        "workingOut": "\\(y'=\\dfrac{k}{2}e^{kx}-\\dfrac{k}{2}e^{-kx}\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out the common coefficient: \\(y'=\\dfrac{k}{2}(e^{kx}-e^{-kx})\\). Use \\(\\dfrac{k}{2}\\), not a slash form like \\(k(\\cdots)/2\\).",
        "workingOut": "\\(y'=\\dfrac{k}{2}(e^{kx}-e^{-kx})\\)",
        "graphData": null
      }
    ],
    "hint": "Differentiate each term: factor \\(\\dfrac{k}{2}\\) out of both.",
    "graphData": null,
    "opts": [
      "\\(-\\dfrac{k}{2}(e^{kx}-e^{-kx})\\)",
      "\\(\\dfrac{k}{2}(e^{kx}-e^{-kx})\\)",
      "\\(\\dfrac{k}{2}(e^{kx}+e^{-kx})\\)",
      "\\(k(e^{kx}-e^{-kx})\\)"
    ],
    "answer": "1",
    "isNew": true
  },
  {
    "id": "y12a-5b-q14h",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate the function:\n\\( y = \\dfrac{e^{mx}}{a} + \\dfrac{e^{-mx}}{b} \\)",
    "a": 2,
    "solution": "Rewrite \\(y=\\dfrac{1}{a}e^{mx}+\\dfrac{1}{b}e^{-mx}\\). Differentiate: \\(y'=\\dfrac{m}{a}e^{mx}-\\dfrac{m}{b}e^{-mx}\\).",
    "solutionSteps": [
      {
        "explanation": "Rewrite each fraction as a constant times an exponential: \\(y=\\dfrac{e^{mx}}{a}+\\dfrac{e^{-mx}}{b}=\\dfrac{1}{a}e^{mx}+\\dfrac{1}{b}e^{-mx}\\).",
        "workingOut": "\\(y=\\dfrac{1}{a}e^{mx}+\\dfrac{1}{b}e^{-mx}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate the first term. Constants \\(a\\) and \\(m\\) give: \\(\\dfrac{d}{dx}\\left(\\dfrac{1}{a}e^{mx}\\right)=\\dfrac{1}{a}\\cdot m e^{mx}=\\dfrac{m}{a}e^{mx}\\).",
        "workingOut": "\\(\\dfrac{d}{dx}\\left(\\dfrac{e^{mx}}{a}\\right)=\\dfrac{m}{a}e^{mx}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate the second term. The chain-rule factor from \\(-mx\\) is \\(-m\\): \\(\\dfrac{d}{dx}\\left(\\dfrac{1}{b}e^{-mx}\\right)=\\dfrac{1}{b}\\cdot(-m)e^{-mx}=-\\dfrac{m}{b}e^{-mx}\\).",
        "workingOut": "\\(\\dfrac{d}{dx}\\left(\\dfrac{e^{-mx}}{b}\\right)=-\\dfrac{m}{b}e^{-mx}\\)",
        "graphData": null
      },
      {
        "explanation": "Add the two results: \\(y'=\\dfrac{m}{a}e^{mx}-\\dfrac{m}{b}e^{-mx}\\). These are two separate terms — do not merge them into one fraction with a combined denominator.",
        "workingOut": "\\(y'=\\dfrac{m}{a}e^{mx}-\\dfrac{m}{b}e^{-mx}\\)",
        "graphData": null
      }
    ],
    "hint": "Each term differentiates separately: \\(\\dfrac{m}{a}e^{mx}\\) and \\(-\\dfrac{m}{b}e^{-mx}\\).",
    "graphData": null,
    "opts": [
      "\\(-\\dfrac{m}{a}e^{mx}+\\dfrac{m}{b}e^{-mx}\\)",
      "\\(\\dfrac{m}{a}e^{mx}+\\dfrac{m}{b}e^{-mx}\\)",
      "\\(\\dfrac{m}{a}e^{mx}-\\dfrac{m}{b}e^{-mx}\\)",
      "\\(\\dfrac{m e^{mx}}{a+b}\\)"
    ],
    "answer": "2",
    "isNew": true
  },
  {
    "id": "y12a-5b-q15a",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate the function:\n\\( y = (e^x + 2)^4 \\)",
    "a": 2,
    "solution": "The outer structure is a power of an inner expression: \\((e^{x} + 2)^4\\). Set \\(u\\) equal to the inside, so the outside is a power of \\(u\\). Differentiate the inner function carefully (each term separately). This \\(u'\\) is the chain-rule factor that multiplies the outer derivative. Chain rule: \\(\\dfrac{dy}{dx}=n u^{n-1}\\cdot u'\\). Substitute the inner expression back for \\(u\\). The derivative is \\(4e^{x}(e^{x}+2)^3\\). Common errors: forgetting to multiply by \\(u'\\), or using the wrong outer power \\(n-1\\).",
    "solutionSteps": [
      {
        "explanation": "The outer structure is a power of an inner expression: \\((e^{x} + 2)^4\\). Set \\(u\\) equal to the inside, so the outside is a power of \\(u\\).",
        "workingOut": "\\(y=u^{n},\\quad u=\\text{(inner)}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate the inner function carefully (each term separately). This \\(u'\\) is the chain-rule factor that multiplies the outer derivative.",
        "workingOut": "\\(u'=\\text{(derivative of inner)}\\)",
        "graphData": null
      },
      {
        "explanation": "Chain rule: \\(\\dfrac{dy}{dx}=n u^{n-1}\\cdot u'\\). Substitute the inner expression back for \\(u\\).",
        "workingOut": "\\(4e^{x}(e^{x}+2)^3\\)",
        "graphData": null
      },
      {
        "explanation": "The derivative is \\(4e^{x}(e^{x}+2)^3\\). Common errors: forgetting to multiply by \\(u'\\), or using the wrong outer power \\(n-1\\).",
        "workingOut": "\\(4e^{x}(e^{x}+2)^3\\)",
        "graphData": null
      }
    ],
    "hint": "Apply the chain rule: multiply the derivative of the outer power (4u^3) by the derivative of the inside (e^{x}).",
    "graphData": null,
    "opts": [
      "\\(-4e^{x}(e^{x}+2)^3\\)",
      "\\(e^{x}(e^{x}+2)^3\\)",
      "\\(4e^{x}(e^{x}+2)^3\\)",
      "\\(3e^{x}(e^{x}+2)^3\\)"
    ],
    "answer": "2",
    "isNew": true
  },
  {
    "id": "y12a-5b-q15b",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate the function:\n\\( y = (e^x + e^{-x})^3 \\)",
    "a": 3,
    "solution": "The outer structure is a power of an inner expression: \\((e^{x} + e^{-x})^3\\). Set \\(u\\) equal to the inside, so the outside is a power of \\(u\\). Differentiate the inner function carefully (each term separately). This \\(u'\\) is the chain-rule factor that multiplies the outer derivative. Chain rule: \\(\\dfrac{dy}{dx}=n u^{n-1}\\cdot u'\\). Substitute the inner expression back for \\(u\\). The derivative is \\(3(e^{x}-e^{-x})(e^{x}+e^{-x})^2\\). Common errors: forgetting to multiply by \\(u'\\), or using the wrong outer power \\(n-1\\).",
    "solutionSteps": [
      {
        "explanation": "The outer structure is a power of an inner expression: \\((e^{x} + e^{-x})^3\\). Set \\(u\\) equal to the inside, so the outside is a power of \\(u\\).",
        "workingOut": "\\(y=u^{n},\\quad u=\\text{(inner)}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate the inner function carefully (each term separately). This \\(u'\\) is the chain-rule factor that multiplies the outer derivative.",
        "workingOut": "\\(u'=\\text{(derivative of inner)}\\)",
        "graphData": null
      },
      {
        "explanation": "Chain rule: \\(\\dfrac{dy}{dx}=n u^{n-1}\\cdot u'\\). Substitute the inner expression back for \\(u\\).",
        "workingOut": "\\(3(e^{x}-e^{-x})(e^{x}+e^{-x})^2\\)",
        "graphData": null
      },
      {
        "explanation": "The derivative is \\(3(e^{x}-e^{-x})(e^{x}+e^{-x})^2\\). Common errors: forgetting to multiply by \\(u'\\), or using the wrong outer power \\(n-1\\).",
        "workingOut": "\\(3(e^{x}-e^{-x})(e^{x}+e^{-x})^2\\)",
        "graphData": null
      }
    ],
    "hint": "Use chain rule: derivative of inside function is e^{x} - e^{-x}.",
    "graphData": null,
    "opts": [
      "\\(-3(e^{x}-e^{-x})(e^{x}+e^{-x})^2\\)",
      "\\((e^{x}-e^{-x})(e^{x}+e^{-x})^2\\)",
      "\\(2(e^{x}-e^{-x})(e^{x}+e^{-x})^2\\)",
      "\\(3(e^{x}-e^{-x})(e^{x}+e^{-x})^2\\)"
    ],
    "answer": "3",
    "isNew": true
  },
  {
    "id": "y12a-5b-q15c",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate the function:\n\\( y = (1 + x^3)e^{1+x} \\)",
    "a": 0,
    "solution": "The function is a sum (or difference) of exponential terms: \\((1 + x^3)e^{1+x}\\). Differentiation is linear, so differentiate each term separately and add the results. For each term of the form \\(c\\,e^{u(x)}\\), use \\(\\dfrac{d}{dx}[c e^{u}]=c e^{u}u'\\). If a term is simply \\(e^{x}\\), its derivative is itself. For \\(e^{-x}\\), the chain rule gives \\(-e^{-x}\\) (or carefully track signs if there is already a minus in front). Write every term's derivative, then combine like terms if possible. Do not cancel factors that are not identical. Therefore \\(\\dfrac{dy}{dx}=e^{1+x}(x^3+3x^2+1)\\).",
    "solutionSteps": [
      {
        "explanation": "The function is a sum (or difference) of exponential terms: \\((1 + x^3)e^{1+x}\\). Differentiation is linear, so differentiate each term separately and add the results.",
        "workingOut": "\\((1 + x^3)e^{1+x}\\)",
        "graphData": null
      },
      {
        "explanation": "For each term of the form \\(c\\,e^{u(x)}\\), use \\(\\dfrac{d}{dx}[c e^{u}]=c e^{u}u'\\). If a term is simply \\(e^{x}\\), its derivative is itself. For \\(e^{-x}\\), the chain rule gives \\(-e^{-x}\\) (or carefully track signs if there is already a minus in front).",
        "workingOut": "\\(\\dfrac{d}{dx}e^{u}=e^{u}u'\\)",
        "graphData": null
      },
      {
        "explanation": "Write every term's derivative, then combine like terms if possible. Do not cancel factors that are not identical.",
        "workingOut": "\\(e^{1+x}(x^3+3x^2+1)\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(\\dfrac{dy}{dx}=e^{1+x}(x^3+3x^2+1)\\).",
        "workingOut": "\\(e^{1+x}(x^3+3x^2+1)\\)",
        "graphData": null
      }
    ],
    "hint": "Use the product rule, then factor out the exponential term.",
    "graphData": null,
    "opts": [
      "\\(e^{1+x}(x^3+3x^2+1)\\)",
      "\\(-e^{1+x}(x^3+3x^2+1)\\)",
      "\\(e^{x}\\)",
      "\\(0\\)"
    ],
    "answer": "0",
    "isNew": true
  },
  {
    "id": "y12a-5b-q15d",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate the function:\n\\( y = (x^3 - x)e^{3x-1} \\)",
    "a": 1,
    "solution": "The function is a sum (or difference) of exponential terms: \\((x^3 - x)e^{3x-1}\\). Differentiation is linear, so differentiate each term separately and add the results. For each term of the form \\(c\\,e^{u(x)}\\), use \\(\\dfrac{d}{dx}[c e^{u}]=c e^{u}u'\\). If a term is simply \\(e^{x}\\), its derivative is itself. For \\(e^{-x}\\), the chain rule gives \\(-e^{-x}\\) (or carefully track signs if there is already a minus in front). Write every term's derivative, then combine like terms if possible. Do not cancel factors that are not identical. Therefore \\(\\dfrac{dy}{dx}=e^{3x-1}(3x^3+3x^2-3x-1)\\).",
    "solutionSteps": [
      {
        "explanation": "The function is a sum (or difference) of exponential terms: \\((x^3 - x)e^{3x-1}\\). Differentiation is linear, so differentiate each term separately and add the results.",
        "workingOut": "\\((x^3 - x)e^{3x-1}\\)",
        "graphData": null
      },
      {
        "explanation": "For each term of the form \\(c\\,e^{u(x)}\\), use \\(\\dfrac{d}{dx}[c e^{u}]=c e^{u}u'\\). If a term is simply \\(e^{x}\\), its derivative is itself. For \\(e^{-x}\\), the chain rule gives \\(-e^{-x}\\) (or carefully track signs if there is already a minus in front).",
        "workingOut": "\\(\\dfrac{d}{dx}e^{u}=e^{u}u'\\)",
        "graphData": null
      },
      {
        "explanation": "Write every term's derivative, then combine like terms if possible. Do not cancel factors that are not identical.",
        "workingOut": "\\(e^{3x-1}(3x^3+3x^2-3x-1)\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(\\dfrac{dy}{dx}=e^{3x-1}(3x^3+3x^2-3x-1)\\).",
        "workingOut": "\\(e^{3x-1}(3x^3+3x^2-3x-1)\\)",
        "graphData": null
      }
    ],
    "hint": "Differentiate the exponent 3x-1 to get the multiplier 3.",
    "graphData": null,
    "opts": [
      "\\(-e^{3x-1}(3x^3+3x^2-3x-1)\\)",
      "\\(e^{3x-1}(3x^3+3x^2-3x-1)\\)",
      "\\(e^{x}\\)",
      "\\(0\\)"
    ],
    "answer": "1",
    "isNew": true
  },
  {
    "id": "y12a-5b-q15e",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate the function:\n\\( y = \\frac{e^{2x}}{e^{2x} + 1} \\)",
    "a": 2,
    "solution": "The function involves a fraction: \\(\\frac{e^{2x}}{e^{2x} + 1}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials. Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative. Differentiate each rewritten term with the chain rule, then recombine. The derivative is \\(\\dfrac{2e^{2x}}{(e^{2x}+1)^{2}}\\).",
    "solutionSteps": [
      {
        "explanation": "The function involves a fraction: \\(\\frac{e^{2x}}{e^{2x} + 1}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials.",
        "workingOut": "\\(\\frac{e^{2x}}{e^{2x} + 1}\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative.",
        "workingOut": "\\(\\text{rewrite as }c\\,e^{u(x)}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate each rewritten term with the chain rule, then recombine.",
        "workingOut": "\\(\\dfrac{2e^{2x}}{(e^{2x}+1)^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "The derivative is \\(\\dfrac{2e^{2x}}{(e^{2x}+1)^{2}}\\).",
        "workingOut": "\\(\\dfrac{2e^{2x}}{(e^{2x}+1)^{2}}\\)",
        "graphData": null
      }
    ],
    "hint": "Use quotient rule. The terms involving e^{4x} will cancel out in the numerator.",
    "graphData": null,
    "opts": [
      "\\(-\\dfrac{2e^{2x}}{(e^{2x}+1)^{2}}\\)",
      "\\(\\dfrac{e^{2x}}{(e^{2x}+1)^{2}}\\)",
      "\\(\\dfrac{2e^{2x}}{(e^{2x}+1)^{2}}\\)",
      "\\(\\dfrac{1e^{2x}}{(e^{2x}+1)^{2}}\\)"
    ],
    "answer": "2",
    "isNew": true
  },
  {
    "id": "y12a-5b-q15f",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate the function:\n\\( y = \\frac{e^{2x} + 1}{e^{2x} - 1} \\)",
    "a": 3,
    "solution": "The function involves a fraction: \\(\\frac{e^{2x} + 1}{e^{2x} - 1}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials. Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative. Differentiate each rewritten term with the chain rule, then recombine. The derivative is \\(-\\dfrac{4e^{2x}}{(e^{2x}-1)^{2}}\\).",
    "solutionSteps": [
      {
        "explanation": "The function involves a fraction: \\(\\frac{e^{2x} + 1}{e^{2x} - 1}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials.",
        "workingOut": "\\(\\frac{e^{2x} + 1}{e^{2x} - 1}\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative.",
        "workingOut": "\\(\\text{rewrite as }c\\,e^{u(x)}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate each rewritten term with the chain rule, then recombine.",
        "workingOut": "\\(-\\dfrac{4e^{2x}}{(e^{2x}-1)^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "The derivative is \\(-\\dfrac{4e^{2x}}{(e^{2x}-1)^{2}}\\).",
        "workingOut": "\\(-\\dfrac{4e^{2x}}{(e^{2x}-1)^{2}}\\)",
        "graphData": null
      }
    ],
    "hint": "Apply the quotient rule, expand the numerator, and simplify.",
    "graphData": null,
    "opts": [
      "\\(\\dfrac{4e^{2x}}{(e^{2x}-1)^{2}}\\)",
      "\\(\\dfrac{e^{2x}}{(e^{2x}-1)^{2}}\\)",
      "\\(-\\dfrac{3e^{2x}}{(e^{2x}-1)^{2}}\\)",
      "\\(-\\dfrac{4e^{2x}}{(e^{2x}-1)^{2}}\\)"
    ],
    "answer": "3",
    "isNew": true
  },
  {
    "id": "y12a-5b-q16a",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Write the expression as a sum of powers of \\( e \\), then differentiate:\n\\( y = \\frac{e^x + 2}{e^x} \\)",
    "a": 1,
    "solution": "The function involves a fraction: \\(\\frac{e^{x} + 2}{e^{x}}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials. Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative. Differentiate each rewritten term with the chain rule, then recombine. The derivative is \\(-2e^{-x}\\).",
    "solutionSteps": [
      {
        "explanation": "The function involves a fraction: \\(\\frac{e^{x} + 2}{e^{x}}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials.",
        "workingOut": "\\(\\frac{e^{x} + 2}{e^{x}}\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative.",
        "workingOut": "\\(\\text{rewrite as }c\\,e^{u(x)}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate each rewritten term with the chain rule, then recombine.",
        "workingOut": "\\(-2e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "The derivative is \\(-2e^{-x}\\).",
        "workingOut": "\\(-2e^{-x}\\)",
        "graphData": null
      }
    ],
    "hint": "Divide each term in the numerator by e^{x} to simplify before differentiating.",
    "graphData": null,
    "opts": [
      "\\(2e^{-x}\\)",
      "\\(-2e^{-x}\\)",
      "\\(e^{-x}\\)",
      "\\(-1e^{-x}\\)"
    ],
    "answer": "1",
    "isNew": true
  },
  {
    "id": "y12a-5b-q16b",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Write the expression as a sum of powers of \\( e \\), then differentiate:\n\\( y = \\frac{e^{3x} + e^x}{e^x} \\)",
    "a": 2,
    "solution": "The function involves a fraction: \\(\\frac{e^{3x} + e^{x}}{e^{x}}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials. Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative. Differentiate each rewritten term with the chain rule, then recombine. The derivative is \\(2e^{2x}\\).",
    "solutionSteps": [
      {
        "explanation": "The function involves a fraction: \\(\\frac{e^{3x} + e^{x}}{e^{x}}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials.",
        "workingOut": "\\(\\frac{e^{3x} + e^{x}}{e^{x}}\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative.",
        "workingOut": "\\(\\text{rewrite as }c\\,e^{u(x)}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate each rewritten term with the chain rule, then recombine.",
        "workingOut": "\\(2e^{2x}\\)",
        "graphData": null
      },
      {
        "explanation": "The derivative is \\(2e^{2x}\\).",
        "workingOut": "\\(2e^{2x}\\)",
        "graphData": null
      }
    ],
    "hint": "Divide both terms by e^{x} to get e^{2x} + 1 first.",
    "graphData": null,
    "opts": [
      "\\(-2e^{2x}\\)",
      "\\(e^{2x}\\)",
      "\\(2e^{2x}\\)",
      "\\(1e^{2x}\\)"
    ],
    "answer": "2",
    "isNew": true
  },
  {
    "id": "y12a-5b-q16c",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Write the expression as a sum of powers of \\( e \\), then differentiate:\n\\( y = \\frac{3 - e^x}{e^{2x}} \\)",
    "a": 3,
    "solution": "The function involves a fraction: \\(\\frac{3 - e^{x}}{e^{2x}}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials. Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative. Differentiate each rewritten term with the chain rule, then recombine. The derivative is \\(-6e^{-2x}+e^{-x}\\).",
    "solutionSteps": [
      {
        "explanation": "The function involves a fraction: \\(\\frac{3 - e^{x}}{e^{2x}}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials.",
        "workingOut": "\\(\\frac{3 - e^{x}}{e^{2x}}\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative.",
        "workingOut": "\\(\\text{rewrite as }c\\,e^{u(x)}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate each rewritten term with the chain rule, then recombine.",
        "workingOut": "\\(-6e^{-2x}+e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "The derivative is \\(-6e^{-2x}+e^{-x}\\).",
        "workingOut": "\\(-6e^{-2x}+e^{-x}\\)",
        "graphData": null
      }
    ],
    "hint": "Subtract the denominator's exponent (2x) from each numerator's exponent.",
    "graphData": null,
    "opts": [
      "\\(6e^{-2x}+e^{-x}\\)",
      "\\(e^{-2x}+e^{-x}\\)",
      "\\(-5e^{-2x}+e^{-x}\\)",
      "\\(-6e^{-2x}+e^{-x}\\)"
    ],
    "answer": "3",
    "isNew": true
  },
  {
    "id": "y12a-5b-q16d",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Write the expression as a sum of powers of \\( e \\), then differentiate:\n\\( y = \\frac{4 + e^x}{e^{5x}} \\)",
    "a": 0,
    "solution": "The function involves a fraction: \\(\\frac{4 + e^{x}}{e^{5x}}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials. Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative. Differentiate each rewritten term with the chain rule, then recombine. The derivative is \\(-20e^{-5x}-4e^{-4x}\\).",
    "solutionSteps": [
      {
        "explanation": "The function involves a fraction: \\(\\frac{4 + e^{x}}{e^{5x}}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials.",
        "workingOut": "\\(\\frac{4 + e^{x}}{e^{5x}}\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative.",
        "workingOut": "\\(\\text{rewrite as }c\\,e^{u(x)}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate each rewritten term with the chain rule, then recombine.",
        "workingOut": "\\(-20e^{-5x}-4e^{-4x}\\)",
        "graphData": null
      },
      {
        "explanation": "The derivative is \\(-20e^{-5x}-4e^{-4x}\\).",
        "workingOut": "\\(-20e^{-5x}-4e^{-4x}\\)",
        "graphData": null
      }
    ],
    "hint": "Express as 4e^{-5x} + e^{-4x} before differentiating.",
    "graphData": null,
    "opts": [
      "\\(-20e^{-5x}-4e^{-4x}\\)",
      "\\(20e^{-5x}-4e^{-4x}\\)",
      "\\(e^{-5x}-4e^{-4x}\\)",
      "\\(-19e^{-5x}-4e^{-4x}\\)"
    ],
    "answer": "0",
    "isNew": true
  },
  {
    "id": "y12a-5b-q16e",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Write the expression as a sum of powers of \\( e \\), then differentiate:\n\\( y = \\frac{e^x + e^{3x} - 4e^{5x}}{e^x} \\)",
    "a": 1,
    "solution": "The function involves a fraction: \\(\\frac{e^{x} + e^{3x} - 4e^{5x}}{e^{x}}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials. Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative. Differentiate each rewritten term with the chain rule, then recombine. The derivative is \\(2e^{2x}-16e^{4x}\\).",
    "solutionSteps": [
      {
        "explanation": "The function involves a fraction: \\(\\frac{e^{x} + e^{3x} - 4e^{5x}}{e^{x}}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials.",
        "workingOut": "\\(\\frac{e^{x} + e^{3x} - 4e^{5x}}{e^{x}}\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative.",
        "workingOut": "\\(\\text{rewrite as }c\\,e^{u(x)}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate each rewritten term with the chain rule, then recombine.",
        "workingOut": "\\(2e^{2x}-16e^{4x}\\)",
        "graphData": null
      },
      {
        "explanation": "The derivative is \\(2e^{2x}-16e^{4x}\\).",
        "workingOut": "\\(2e^{2x}-16e^{4x}\\)",
        "graphData": null
      }
    ],
    "hint": "Divide each term in the numerator by e^{x} first.",
    "graphData": null,
    "opts": [
      "\\(-2e^{2x}-16e^{4x}\\)",
      "\\(2e^{2x}-16e^{4x}\\)",
      "\\(e^{2x}-16e^{4x}\\)",
      "\\(1e^{2x}-16e^{4x}\\)"
    ],
    "answer": "1",
    "isNew": true
  },
  {
    "id": "y12a-5b-q16f",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Write the expression as a sum of powers of \\( e \\), then differentiate:\n\\( y = \\frac{e^{3x} + 3e^x + 1}{e^{3x}} \\)",
    "a": 2,
    "solution": "The function involves a fraction: \\(\\frac{e^{3x} + 3e^{x} + 1}{e^{3x}}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials. Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative. Differentiate each rewritten term with the chain rule, then recombine. The derivative is \\(-6e^{-2x}-3e^{-3x}\\).",
    "solutionSteps": [
      {
        "explanation": "The function involves a fraction: \\(\\frac{e^{3x} + 3e^{x} + 1}{e^{3x}}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials.",
        "workingOut": "\\(\\frac{e^{3x} + 3e^{x} + 1}{e^{3x}}\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative.",
        "workingOut": "\\(\\text{rewrite as }c\\,e^{u(x)}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate each rewritten term with the chain rule, then recombine.",
        "workingOut": "\\(-6e^{-2x}-3e^{-3x}\\)",
        "graphData": null
      },
      {
        "explanation": "The derivative is \\(-6e^{-2x}-3e^{-3x}\\).",
        "workingOut": "\\(-6e^{-2x}-3e^{-3x}\\)",
        "graphData": null
      }
    ],
    "hint": "Rewrite as 1 + 3e^{-2x} + e^{-3x} first.",
    "graphData": null,
    "opts": [
      "\\(6e^{-2x}-3e^{-3x}\\)",
      "\\(e^{-2x}-3e^{-3x}\\)",
      "\\(-6e^{-2x}-3e^{-3x}\\)",
      "\\(-5e^{-2x}-3e^{-3x}\\)"
    ],
    "answer": "2",
    "isNew": true
  },
  {
    "id": "y12a-5b-q17a",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Differentiate the function:\n\\( y = \\sqrt{e^{3x}} \\)",
    "a": 2,
    "solution": "Rewrite the square root as a power: \\(y=\\sqrt{e^{3x}}=(e^{3x})^{\\frac{1}{2}}=e^{\\frac{3x}{2}}\\). Chain rule: \\(y'=\\dfrac{3}{2}e^{\\frac{3}{2}x}\\).",
    "solutionSteps": [
      {
        "explanation": "Rewrite the root as an exponential power. \\(\\sqrt{e^{3x}}=(e^{3x})^{\\frac{1}{2}}\\). Using \\((e^{u})^{v}=e^{uv}\\), this becomes \\(e^{\\frac{3x}{2}}\\).",
        "workingOut": "\\(y=\\sqrt{e^{3x}}=e^{\\frac{3x}{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate with the chain rule: \\(\\dfrac{d}{dx}e^{u}=e^{u}u'\\) where \\(u=\\dfrac{3}{2}x\\), so \\(u'=\\dfrac{3}{2}\\).",
        "workingOut": "\\(y'=\\dfrac{3}{2}e^{\\frac{3}{2}x}\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(y'=\\dfrac{3}{2}e^{\\frac{3}{2}x}\\). Common errors: writing the coefficient as a decimal \\(1.5\\), forgetting the chain-rule factor, or leaving the exponent as \\(3x\\) instead of \\(\\dfrac{3}{2}x\\).",
        "workingOut": "\\(y'=\\dfrac{3}{2}e^{\\frac{3}{2}x}\\)",
        "graphData": null
      }
    ],
    "hint": "Rewrite as \\(e^{\\frac{3x}{2}}\\), then multiply by the chain-rule factor \\(\\dfrac{3}{2}\\).",
    "graphData": null,
    "opts": [
      "\\(\\dfrac{3}{2}e^{3x}\\)",
      "\\(-\\dfrac{3}{2}e^{\\frac{3}{2}x}\\)",
      "\\(\\dfrac{3}{2}e^{\\frac{3}{2}x}\\)",
      "\\(e^{\\frac{3}{2}x}\\)"
    ],
    "answer": "2",
    "isNew": true
  },
  {
    "id": "y12a-5b-q17b",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Differentiate the function:\n\\( y = \\sqrt[3]{e^{2x}} \\)",
    "a": 1,
    "solution": "Rewrite the cube root: \\(y=\\sqrt[3]{e^{2x}}=(e^{2x})^{\\frac{1}{3}}=e^{\\frac{2x}{3}}\\). Chain rule: \\(y'=\\dfrac{2}{3}e^{\\frac{2x}{3}}\\).",
    "solutionSteps": [
      {
        "explanation": "Rewrite the cube root as a power. \\(\\sqrt[3]{e^{2x}}=(e^{2x})^{\\frac{1}{3}}\\). Using \\((e^{u})^{v}=e^{uv}\\) gives \\(y=e^{\\frac{2x}{3}}\\).",
        "workingOut": "\\(y=\\sqrt[3]{e^{2x}}=e^{\\frac{2x}{3}}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate: let \\(u=\\dfrac{2x}{3}\\), so \\(u'=\\dfrac{2}{3}\\). Then \\(y'=e^{u}\\cdot u'=\\dfrac{2}{3}e^{\\frac{2x}{3}}\\).",
        "workingOut": "\\(y'=\\dfrac{2}{3}e^{\\frac{2x}{3}}\\)",
        "graphData": null
      },
      {
        "explanation": "You may also write the answer as \\(\\dfrac{2}{3}\\sqrt[3]{e^{2x}}\\), since \\(e^{\\frac{2x}{3}}=\\sqrt[3]{e^{2x}}\\). Both forms are equivalent.",
        "workingOut": "\\(y'=\\dfrac{2}{3}e^{\\frac{2x}{3}}=\\dfrac{2}{3}\\sqrt[3]{e^{2x}}\\)",
        "graphData": null
      },
      {
        "explanation": "Common errors: writing the coefficient as the slash form \\((2/3)\\) without LaTeX, forgetting the minus when it belongs, or leaving the exponent as \\(2x\\) instead of \\(\\dfrac{2x}{3}\\).",
        "workingOut": "\\(y'=\\dfrac{2}{3}e^{\\frac{2x}{3}}\\)",
        "graphData": null
      }
    ],
    "hint": "Rewrite as \\(e^{\\frac{2x}{3}}\\), then the derivative coefficient is \\(\\dfrac{2}{3}\\).",
    "graphData": null,
    "opts": [
      "\\(-\\dfrac{2}{3}e^{\\frac{2x}{3}}\\)",
      "\\(\\dfrac{2}{3}e^{\\frac{2x}{3}}\\)",
      "\\(\\dfrac{2}{3}e^{2x}\\)",
      "\\(2e^{\\frac{2x}{3}}\\)"
    ],
    "answer": "1",
    "isNew": true
  },
  {
    "id": "y12a-5b-q17c",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Differentiate the function:\n\\( y = \\dfrac{1}{\\sqrt{e^{x}}} \\)",
    "a": 0,
    "solution": "Rewrite: \\(y=\\dfrac{1}{\\sqrt{e^{x}}}=(e^{x})^{-\\frac{1}{2}}=e^{-\\frac{x}{2}}\\). Chain rule: \\(y'=-\\dfrac{1}{2}e^{-\\frac{x}{2}}\\).",
    "solutionSteps": [
      {
        "explanation": "Rewrite the reciprocal square root as a negative power of \\(e\\): \\(y=\\dfrac{1}{\\sqrt{e^{x}}}=(e^{x})^{-\\frac{1}{2}}=e^{-\\frac{x}{2}}\\).",
        "workingOut": "\\(y=e^{-\\frac{x}{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Chain rule with \\(u=-\\dfrac{x}{2}\\), so \\(u'=-\\dfrac{1}{2}\\). Then \\(y'=e^{u}\\cdot u'=-\\dfrac{1}{2}e^{-\\frac{x}{2}}\\).",
        "workingOut": "\\(y'=-\\dfrac{1}{2}e^{-\\frac{x}{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Do not leave the answer as a decimal \\(-0.5e^{-0.5x}\\). Use exact fractions: \\(-\\dfrac{1}{2}e^{-\\frac{x}{2}}\\).",
        "workingOut": "\\(y'=-\\dfrac{1}{2}e^{-\\frac{x}{2}}\\)",
        "graphData": null
      }
    ],
    "hint": "Rewrite as \\(e^{-\\frac{x}{2}}\\), then multiply by \\(-\\dfrac{1}{2}\\).",
    "graphData": null,
    "opts": [
      "\\(-\\dfrac{1}{2}e^{-\\frac{x}{2}}\\)",
      "\\(\\dfrac{1}{2}e^{-\\frac{x}{2}}\\)",
      "\\(-\\dfrac{1}{2}e^{-x}\\)",
      "\\(-e^{-\\frac{x}{2}}\\)"
    ],
    "answer": "0",
    "isNew": true
  },
  {
    "id": "y12a-5b-q17d",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Differentiate the function:\n\\( y = \\dfrac{1}{\\sqrt[3]{e^{x}}} \\)",
    "a": 3,
    "solution": "Rewrite: \\(y=\\dfrac{1}{\\sqrt[3]{e^{x}}}=(e^{x})^{-\\frac{1}{3}}=e^{-\\frac{x}{3}}\\). Chain rule: \\(y'=-\\dfrac{1}{3}e^{-\\frac{x}{3}}\\).",
    "solutionSteps": [
      {
        "explanation": "Rewrite the reciprocal cube root: \\(y=\\dfrac{1}{\\sqrt[3]{e^{x}}}=(e^{x})^{-\\frac{1}{3}}=e^{-\\frac{x}{3}}\\).",
        "workingOut": "\\(y=e^{-\\frac{x}{3}}\\)",
        "graphData": null
      },
      {
        "explanation": "Chain rule with \\(u=-\\dfrac{x}{3}\\), so \\(u'=-\\dfrac{1}{3}\\). Then \\(y'=-\\dfrac{1}{3}e^{-\\frac{x}{3}}\\).",
        "workingOut": "\\(y'=-\\dfrac{1}{3}e^{-\\frac{x}{3}}\\)",
        "graphData": null
      },
      {
        "explanation": "Equivalently, \\(y'=-\\dfrac{1}{3}\\cdot\\dfrac{1}{\\sqrt[3]{e^{x}}}\\). Prefer the exponential form with LaTeX fractions, not slash notation like \\((1/3)\\).",
        "workingOut": "\\(y'=-\\dfrac{1}{3}e^{-\\frac{x}{3}}\\)",
        "graphData": null
      }
    ],
    "hint": "Rewrite as \\(e^{-\\frac{x}{3}}\\), then the chain-rule factor is \\(-\\dfrac{1}{3}\\).",
    "graphData": null,
    "opts": [
      "\\(\\dfrac{1}{3}e^{-\\frac{x}{3}}\\)",
      "\\(-\\dfrac{1}{3}e^{-x}\\)",
      "\\(-e^{-\\frac{x}{3}}\\)",
      "\\(-\\dfrac{1}{3}e^{-\\frac{x}{3}}\\)"
    ],
    "answer": "3",
    "isNew": true
  },
  {
    "id": "y12a-5b-q17e",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Differentiate the function:\n\\( y = e^{\\sqrt{x}} \\)",
    "a": 0,
    "solution": "Chain rule: \\(y=e^{\\sqrt{x}}\\), so \\(y'=e^{\\sqrt{x}}\\cdot\\dfrac{d}{dx}(\\sqrt{x})=e^{\\sqrt{x}}\\cdot\\dfrac{1}{2\\sqrt{x}}=\\dfrac{e^{\\sqrt{x}}}{2\\sqrt{x}}\\).",
    "solutionSteps": [
      {
        "explanation": "Outer function is exponential of an inner function. Set \\(u=\\sqrt{x}=x^{\\frac{1}{2}}\\), so \\(y=e^{u}\\).",
        "workingOut": "\\(u=\\sqrt{x},\\quad y=e^{u}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate the inner function: \\(u'=\\dfrac{1}{2}x^{-\\frac{1}{2}}=\\dfrac{1}{2\\sqrt{x}}\\).",
        "workingOut": "\\(u'=\\dfrac{1}{2\\sqrt{x}}\\)",
        "graphData": null
      },
      {
        "explanation": "Chain rule: \\(y'=e^{u}\\cdot u'=e^{\\sqrt{x}}\\cdot\\dfrac{1}{2\\sqrt{x}}=\\dfrac{e^{\\sqrt{x}}}{2\\sqrt{x}}\\).",
        "workingOut": "\\(y'=\\dfrac{e^{\\sqrt{x}}}{2\\sqrt{x}}\\)",
        "graphData": null
      },
      {
        "explanation": "Write the quotient with \\(\\dfrac{\\cdots}{\\cdots}\\), not a slash like \\(e^{\\sqrt{x}}/(2\\sqrt{x})\\).",
        "workingOut": "\\(y'=\\dfrac{e^{\\sqrt{x}}}{2\\sqrt{x}}\\)",
        "graphData": null
      }
    ],
    "hint": "Multiply \\(e^{\\sqrt{x}}\\) by the derivative of \\(\\sqrt{x}\\), which is \\(\\dfrac{1}{2\\sqrt{x}}\\).",
    "graphData": null,
    "opts": [
      "\\(\\dfrac{e^{\\sqrt{x}}}{2\\sqrt{x}}\\)",
      "\\(-\\dfrac{e^{\\sqrt{x}}}{2\\sqrt{x}}\\)",
      "\\(\\dfrac{e^{\\sqrt{x}}}{\\sqrt{x}}\\)",
      "\\(e^{\\sqrt{x}}\\)"
    ],
    "answer": "0",
    "isNew": true
  },
  {
    "id": "y12a-5b-q17f",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Differentiate the function:\n\\( y = e^{-\\sqrt{x}} \\)",
    "a": 1,
    "solution": "Chain rule: \\(y=e^{-\\sqrt{x}}\\), \\(y'=e^{-\\sqrt{x}}\\cdot\\left(-\\dfrac{1}{2\\sqrt{x}}\\right)=-\\dfrac{e^{-\\sqrt{x}}}{2\\sqrt{x}}\\).",
    "solutionSteps": [
      {
        "explanation": "Set \\(u=-\\sqrt{x}\\), so \\(y=e^{u}\\).",
        "workingOut": "\\(u=-\\sqrt{x},\\quad y=e^{u}\\)",
        "graphData": null
      },
      {
        "explanation": "Inner derivative: \\(u'=-\\dfrac{1}{2\\sqrt{x}}\\).",
        "workingOut": "\\(u'=-\\dfrac{1}{2\\sqrt{x}}\\)",
        "graphData": null
      },
      {
        "explanation": "Chain rule: \\(y'=e^{u}\\cdot u'=e^{-\\sqrt{x}}\\cdot\\left(-\\dfrac{1}{2\\sqrt{x}}\\right)=-\\dfrac{e^{-\\sqrt{x}}}{2\\sqrt{x}}\\).",
        "workingOut": "\\(y'=-\\dfrac{e^{-\\sqrt{x}}}{2\\sqrt{x}}\\)",
        "graphData": null
      },
      {
        "explanation": "Keep the overall minus sign. Write the answer with \\(\\dfrac{\\cdots}{\\cdots}\\), not slash notation.",
        "workingOut": "\\(y'=-\\dfrac{e^{-\\sqrt{x}}}{2\\sqrt{x}}\\)",
        "graphData": null
      }
    ],
    "hint": "The inner derivative of \\(-\\sqrt{x}\\) is \\(-\\dfrac{1}{2\\sqrt{x}}\\).",
    "graphData": null,
    "opts": [
      "\\(\\dfrac{e^{-\\sqrt{x}}}{2\\sqrt{x}}\\)",
      "\\(-\\dfrac{e^{-\\sqrt{x}}}{2\\sqrt{x}}\\)",
      "\\(-\\dfrac{e^{-\\sqrt{x}}}{\\sqrt{x}}\\)",
      "\\(e^{-\\sqrt{x}}\\)"
    ],
    "answer": "1",
    "isNew": true
  },
  {
    "id": "y12a-5b-q17g",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Differentiate the function:\n\\( y = e^{\\frac{1}{x}} \\)",
    "a": 2,
    "solution": "Chain rule: \\(y=e^{\\frac{1}{x}}\\), \\(u=\\dfrac{1}{x}\\), \\(u'=-\\dfrac{1}{x^{2}}\\), so \\(y'=-\\dfrac{1}{x^{2}}e^{\\frac{1}{x}}\\).",
    "solutionSteps": [
      {
        "explanation": "Set the exponent as the inner function: \\(u=\\dfrac{1}{x}=x^{-1}\\), so \\(y=e^{u}\\).",
        "workingOut": "\\(u=\\dfrac{1}{x},\\quad y=e^{u}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate the inner function: \\(u'=-x^{-2}=-\\dfrac{1}{x^{2}}\\).",
        "workingOut": "\\(u'=-\\dfrac{1}{x^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Chain rule: \\(y'=e^{u}\\cdot u'=e^{\\frac{1}{x}}\\cdot\\left(-\\dfrac{1}{x^{2}}\\right)=-\\dfrac{1}{x^{2}}e^{\\frac{1}{x}}\\).",
        "workingOut": "\\(y'=-\\dfrac{1}{x^{2}}e^{\\frac{1}{x}}\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(y'=-\\dfrac{1}{x^{2}}e^{\\frac{1}{x}}\\). Equivalent form: \\(-\\dfrac{e^{\\frac{1}{x}}}{x^{2}}\\). Common errors: dropping the minus, or using \\(\\dfrac{1}{x}\\) instead of \\(\\dfrac{1}{x^{2}}\\) as the chain-rule factor.",
        "workingOut": "\\(y'=-\\dfrac{1}{x^{2}}e^{\\frac{1}{x}}\\)",
        "graphData": null
      }
    ],
    "hint": "Differentiate the exponent \\(\\dfrac{1}{x}\\) to get \\(-\\dfrac{1}{x^{2}}\\), then multiply by \\(e^{\\frac{1}{x}}\\).",
    "graphData": null,
    "opts": [
      "\\(\\dfrac{1}{x^{2}}e^{\\frac{1}{x}}\\)",
      "\\(-\\dfrac{1}{x}e^{\\frac{1}{x}}\\)",
      "\\(-\\dfrac{1}{x^{2}}e^{\\frac{1}{x}}\\)",
      "\\(e^{\\frac{1}{x}}\\)"
    ],
    "answer": "2",
    "isNew": true
  },
  {
    "id": "y12a-5b-q17h",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Differentiate the function:\n\\( y = e^{-\\frac{2}{x}} \\)",
    "a": 3,
    "solution": "Chain rule: \\(y=e^{-\\frac{2}{x}}\\), \\(u=-\\dfrac{2}{x}\\), \\(u'=\\dfrac{2}{x^{2}}\\), so \\(y'=\\dfrac{2}{x^{2}}e^{-\\frac{2}{x}}\\).",
    "solutionSteps": [
      {
        "explanation": "Set \\(u=-\\dfrac{2}{x}=-2x^{-1}\\), so \\(y=e^{u}\\).",
        "workingOut": "\\(u=-\\dfrac{2}{x},\\quad y=e^{u}\\)",
        "graphData": null
      },
      {
        "explanation": "Inner derivative: \\(u'=(-2)(-1)x^{-2}=\\dfrac{2}{x^{2}}\\).",
        "workingOut": "\\(u'=\\dfrac{2}{x^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Chain rule: \\(y'=e^{u}\\cdot u'=e^{-\\frac{2}{x}}\\cdot\\dfrac{2}{x^{2}}=\\dfrac{2}{x^{2}}e^{-\\frac{2}{x}}\\).",
        "workingOut": "\\(y'=\\dfrac{2}{x^{2}}e^{-\\frac{2}{x}}\\)",
        "graphData": null
      },
      {
        "explanation": "The two minuses (from the constant \\(-2\\) and the power rule on \\(x^{-1}\\)) make the coefficient positive. Use proper LaTeX: \\(\\dfrac{2}{x^{2}}e^{-\\frac{2}{x}}\\).",
        "workingOut": "\\(y'=\\dfrac{2}{x^{2}}e^{-\\frac{2}{x}}\\)",
        "graphData": null
      }
    ],
    "hint": "Differentiate \\(-\\dfrac{2}{x}\\) to get \\(\\dfrac{2}{x^{2}}\\), then multiply by the exponential.",
    "graphData": null,
    "opts": [
      "\\(-\\dfrac{2}{x^{2}}e^{-\\frac{2}{x}}\\)",
      "\\(\\dfrac{1}{x^{2}}e^{-\\frac{2}{x}}\\)",
      "\\(\\dfrac{2}{x}e^{-\\frac{2}{x}}\\)",
      "\\(\\dfrac{2}{x^{2}}e^{-\\frac{2}{x}}\\)"
    ],
    "answer": "3",
    "isNew": true
  },
  {
    "id": "y12a-5b-q17i",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Differentiate the function:\n\\( y = e^{x - \\frac{1}{x}} \\)",
    "a": 0,
    "solution": "Chain rule: \\(y=e^{x-\\frac{1}{x}}\\), \\(u=x-\\dfrac{1}{x}\\), \\(u'=1+\\dfrac{1}{x^{2}}\\), so \\(y'=\\left(1+\\dfrac{1}{x^{2}}\\right)e^{x-\\frac{1}{x}}\\).",
    "solutionSteps": [
      {
        "explanation": "Set the exponent as the inner function: \\(u=x-\\dfrac{1}{x}\\), so \\(y=e^{u}\\).",
        "workingOut": "\\(u=x-\\dfrac{1}{x},\\quad y=e^{u}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate the exponent term by term: \\(\\dfrac{d}{dx}(x)=1\\) and \\(\\dfrac{d}{dx}\\left(-\\dfrac{1}{x}\\right)=\\dfrac{1}{x^{2}}\\). So \\(u'=1+\\dfrac{1}{x^{2}}\\).",
        "workingOut": "\\(u'=1+\\dfrac{1}{x^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Chain rule: \\(y'=e^{u}\\cdot u'=\\left(1+\\dfrac{1}{x^{2}}\\right)e^{x-\\frac{1}{x}}\\).",
        "workingOut": "\\(y'=\\left(1+\\dfrac{1}{x^{2}}\\right)e^{x-\\frac{1}{x}}\\)",
        "graphData": null
      },
      {
        "explanation": "Write fractions with \\(\\dfrac{1}{x^{2}}\\) and \\(\\dfrac{1}{x}\\), not slash forms like \\(1/x^{2}\\) or \\(1/x\\) inside the exponent when you can avoid it.",
        "workingOut": "\\(y'=\\left(1+\\dfrac{1}{x^{2}}\\right)e^{x-\\frac{1}{x}}\\)",
        "graphData": null
      }
    ],
    "hint": "The derivative of the exponent \\(x-\\dfrac{1}{x}\\) is \\(1+\\dfrac{1}{x^{2}}\\).",
    "graphData": null,
    "opts": [
      "\\(\\left(1+\\dfrac{1}{x^{2}}\\right)e^{x-\\frac{1}{x}}\\)",
      "\\(\\left(1-\\dfrac{1}{x^{2}}\\right)e^{x-\\frac{1}{x}}\\)",
      "\\(\\left(1+\\dfrac{1}{x^{2}}\\right)e^{x}\\)",
      "\\(e^{x-\\frac{1}{x}}\\)"
    ],
    "answer": "0",
    "isNew": true
  },
  {
    "id": "y12a-5b-q17j",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Differentiate the function using the chain rule:\n\\( y = e^{e^x} \\)",
    "a": 1,
    "solution": "Chain rule: \\(y=e^{e^{x}}\\), \\(u=e^{x}\\), \\(u'=e^{x}\\), so \\(y'=e^{e^{x}}\\cdot e^{x}=e^{x}e^{e^{x}}\\).",
    "solutionSteps": [
      {
        "explanation": "This is a nested exponential. Set the inner function \\(u=e^{x}\\), so \\(y=e^{u}=e^{e^{x}}\\).",
        "workingOut": "\\(u=e^{x},\\quad y=e^{u}\\)",
        "graphData": null
      },
      {
        "explanation": "Inner derivative: \\(u'=e^{x}\\) (the exponential is its own derivative).",
        "workingOut": "\\(u'=e^{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Chain rule: \\(y'=e^{u}\\cdot u'=e^{e^{x}}\\cdot e^{x}=e^{x}e^{e^{x}}\\). You may also write this as \\(e^{x+e^{x}}\\).",
        "workingOut": "\\(y'=e^{x}e^{e^{x}}\\)",
        "graphData": null
      },
      {
        "explanation": "Common error: differentiating only the outer exponential and forgetting to multiply by \\(e^{x}\\).",
        "workingOut": "\\(y'=e^{x}e^{e^{x}}\\)",
        "graphData": null
      }
    ],
    "hint": "Multiply the outer exponential by the derivative of the inner exponent \\(e^{x}\\).",
    "graphData": null,
    "opts": [
      "\\(-e^{x}e^{e^{x}}\\)",
      "\\(e^{x}e^{e^{x}}\\)",
      "\\(e^{e^{x}}\\)",
      "\\(e^{x}\\)"
    ],
    "answer": "1",
    "isNew": true
  },
  {
    "id": "y12a-5b-q18",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "subquestions",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "Hyperbolic functions. Define\n\\( \\cosh x = \\dfrac{e^{x} + e^{-x}}{2} \\) and \\( \\sinh x = \\dfrac{e^{x} - e^{-x}}{2} \\).",
    "a": "See parts (a)–(c).",
    "answer": "See parts (a)–(c).",
    "solution": "See sub-question solutions.",
    "solutionSteps": [],
    "hint": "Start from the exponential definitions. Differentiate term by term, then expand products carefully for part (c).",
    "graphData": null,
    "isNew": true,
    "subQuestions": [
      {
        "id": "y12a-5b-q18a",
        "type": "teacher_review",
        "difficulty": "hard",
        "question": "Show that \\(\\dfrac{d}{dx}\\cosh x = \\sinh x\\) and \\(\\dfrac{d}{dx}\\sinh x = \\cosh x\\).",
        "a": "\\(\\cosh x = \\dfrac{e^{x}+e^{-x}}{2}.\\)\n\\(\\dfrac{d}{dx}\\cosh x = \\dfrac{1}{2}e^{x}-\\dfrac{1}{2}e^{-x} = \\dfrac{e^{x}-e^{-x}}{2} = \\sinh x.\\)\n\\(\\sinh x = \\dfrac{e^{x}-e^{-x}}{2}.\\)\n\\(\\dfrac{d}{dx}\\sinh x = \\dfrac{1}{2}e^{x}+\\dfrac{1}{2}e^{-x} = \\dfrac{e^{x}+e^{-x}}{2} = \\cosh x.\\)",
        "answer": "\\(\\cosh x = \\dfrac{e^{x}+e^{-x}}{2}.\\)\n\\(\\dfrac{d}{dx}\\cosh x = \\dfrac{1}{2}e^{x}-\\dfrac{1}{2}e^{-x} = \\dfrac{e^{x}-e^{-x}}{2} = \\sinh x.\\)\n\\(\\sinh x = \\dfrac{e^{x}-e^{-x}}{2}.\\)\n\\(\\dfrac{d}{dx}\\sinh x = \\dfrac{1}{2}e^{x}+\\dfrac{1}{2}e^{-x} = \\dfrac{e^{x}+e^{-x}}{2} = \\cosh x.\\)",
        "solution": "Differentiate the exponential definitions term by term to obtain the hyperbolic identities for the first derivatives.",
        "solutionSteps": [
          {
            "explanation": "Start from the definition of cosh: \\(\\cosh x = \\dfrac{e^{x}+e^{-x}}{2}=\\dfrac{1}{2}e^{x}+\\dfrac{1}{2}e^{-x}\\).",
            "workingOut": "\\(\\cosh x = \\dfrac{1}{2}e^{x}+\\dfrac{1}{2}e^{-x}\\)",
            "graphData": null
          },
          {
            "explanation": "Differentiate term by term: \\(\\dfrac{d}{dx}\\left(\\dfrac{1}{2}e^{x}\\right)=\\dfrac{1}{2}e^{x}\\) and \\(\\dfrac{d}{dx}\\left(\\dfrac{1}{2}e^{-x}\\right)=\\dfrac{1}{2}(-e^{-x})=-\\dfrac{1}{2}e^{-x}\\).",
            "workingOut": "\\(\\dfrac{d}{dx}\\cosh x = \\dfrac{1}{2}e^{x}-\\dfrac{1}{2}e^{-x}\\)",
            "graphData": null
          },
          {
            "explanation": "Factor: \\(\\dfrac{1}{2}e^{x}-\\dfrac{1}{2}e^{-x}=\\dfrac{e^{x}-e^{-x}}{2}=\\sinh x\\). Therefore \\(\\dfrac{d}{dx}\\cosh x = \\sinh x\\).",
            "workingOut": "\\(\\dfrac{d}{dx}\\cosh x = \\sinh x\\)",
            "graphData": null
          },
          {
            "explanation": "Now start from the definition of sinh: \\(\\sinh x = \\dfrac{e^{x}-e^{-x}}{2}=\\dfrac{1}{2}e^{x}-\\dfrac{1}{2}e^{-x}\\).",
            "workingOut": "\\(\\sinh x = \\dfrac{1}{2}e^{x}-\\dfrac{1}{2}e^{-x}\\)",
            "graphData": null
          },
          {
            "explanation": "Differentiate: \\(\\dfrac{d}{dx}\\sinh x = \\dfrac{1}{2}e^{x}-\\dfrac{1}{2}(-e^{-x})=\\dfrac{1}{2}e^{x}+\\dfrac{1}{2}e^{-x}=\\dfrac{e^{x}+e^{-x}}{2}=\\cosh x\\).",
            "workingOut": "\\(\\dfrac{d}{dx}\\sinh x = \\cosh x\\)",
            "graphData": null
          }
        ],
        "hint": "Write each hyperbolic function as a sum of two exponentials, then differentiate each term."
      },
      {
        "id": "y12a-5b-q18b",
        "type": "teacher_review",
        "difficulty": "hard",
        "question": "Find the second derivative of each function, and show that both satisfy \\(y'' = y\\).",
        "a": "\\(\\dfrac{d}{dx}\\cosh x = \\sinh x \\implies \\dfrac{d^{2}}{dx^{2}}\\cosh x = \\cosh x.\\)\nFor \\(y=\\cosh x\\): \\(y''=y.\\)\n\\(\\dfrac{d}{dx}\\sinh x = \\cosh x \\implies \\dfrac{d^{2}}{dx^{2}}\\sinh x = \\sinh x.\\)\nFor \\(y=\\sinh x\\): \\(y''=y.\\)",
        "answer": "\\(\\dfrac{d}{dx}\\cosh x = \\sinh x \\implies \\dfrac{d^{2}}{dx^{2}}\\cosh x = \\cosh x.\\)\nFor \\(y=\\cosh x\\): \\(y''=y.\\)\n\\(\\dfrac{d}{dx}\\sinh x = \\cosh x \\implies \\dfrac{d^{2}}{dx^{2}}\\sinh x = \\sinh x.\\)\nFor \\(y=\\sinh x\\): \\(y''=y.\\)",
        "solution": "Differentiate part (a) results once more: the second derivatives return the original functions.",
        "solutionSteps": [
          {
            "explanation": "From part (a), \\(\\dfrac{d}{dx}\\cosh x = \\sinh x\\). Differentiate again: \\(\\dfrac{d^{2}}{dx^{2}}\\cosh x = \\dfrac{d}{dx}(\\sinh x)=\\cosh x\\) (using part (a) again).",
            "workingOut": "\\(\\dfrac{d^{2}}{dx^{2}}\\cosh x = \\cosh x\\)",
            "graphData": null
          },
          {
            "explanation": "So if \\(y=\\cosh x\\), then \\(y''=\\cosh x=y\\). That is, cosh satisfies \\(y''=y\\).",
            "workingOut": "\\(y=\\cosh x \\implies y''=y\\)",
            "graphData": null
          },
          {
            "explanation": "Similarly, \\(\\dfrac{d}{dx}\\sinh x = \\cosh x\\), so \\(\\dfrac{d^{2}}{dx^{2}}\\sinh x = \\dfrac{d}{dx}(\\cosh x)=\\sinh x\\).",
            "workingOut": "\\(\\dfrac{d^{2}}{dx^{2}}\\sinh x = \\sinh x\\)",
            "graphData": null
          },
          {
            "explanation": "If \\(y=\\sinh x\\), then \\(y''=\\sinh x=y\\). Both hyperbolic functions satisfy the differential equation \\(y''=y\\).",
            "workingOut": "\\(y=\\sinh x \\implies y''=y\\)",
            "graphData": null
          }
        ],
        "hint": "Use the first-derivative results from (a) and differentiate once more."
      },
      {
        "id": "y12a-5b-q18c",
        "type": "teacher_review",
        "difficulty": "hard",
        "question": "Show that \\(\\cosh^{2} x - \\sinh^{2} x = 1\\).",
        "a": "\\(\\cosh^{2} x - \\sinh^{2} x = \\dfrac{(e^{x}+e^{-x})^{2}-(e^{x}-e^{-x})^{2}}{4}\\)\n\\(= \\dfrac{(e^{2x}+2+e^{-2x})-(e^{2x}-2+e^{-2x})}{4}\\)\n\\(= \\dfrac{4}{4} = 1.\\)",
        "answer": "\\(\\cosh^{2} x - \\sinh^{2} x = \\dfrac{(e^{x}+e^{-x})^{2}-(e^{x}-e^{-x})^{2}}{4}\\)\n\\(= \\dfrac{(e^{2x}+2+e^{-2x})-(e^{2x}-2+e^{-2x})}{4}\\)\n\\(= \\dfrac{4}{4} = 1.\\)",
        "solution": "Expand the product of the exponential definitions; cross terms cancel and you are left with 1.",
        "solutionSteps": [
          {
            "explanation": "Write both functions from their definitions: \\(\\cosh x = \\dfrac{e^{x}+e^{-x}}{2}\\) and \\(\\sinh x = \\dfrac{e^{x}-e^{-x}}{2}\\).",
            "workingOut": "\\(\\cosh x = \\dfrac{e^{x}+e^{-x}}{2},\\quad \\sinh x = \\dfrac{e^{x}-e^{-x}}{2}\\)",
            "graphData": null
          },
          {
            "explanation": "Form the difference of squares: \\(\\cosh^{2} x - \\sinh^{2} x = \\left(\\dfrac{e^{x}+e^{-x}}{2}\\right)^{2}-\\left(\\dfrac{e^{x}-e^{-x}}{2}\\right)^{2}\\).",
            "workingOut": "\\(\\cosh^{2} x - \\sinh^{2} x = \\dfrac{(e^{x}+e^{-x})^{2}-(e^{x}-e^{-x})^{2}}{4}\\)",
            "graphData": null
          },
          {
            "explanation": "Expand the numerator. \\((e^{x}+e^{-x})^{2}=e^{2x}+2+e^{-2x}\\) and \\((e^{x}-e^{-x})^{2}=e^{2x}-2+e^{-2x}\\).",
            "workingOut": "\\((e^{x}+e^{-x})^{2}=e^{2x}+2+e^{-2x},\\quad (e^{x}-e^{-x})^{2}=e^{2x}-2+e^{-2x}\\)",
            "graphData": null
          },
          {
            "explanation": "Subtract: \\((e^{2x}+2+e^{-2x})-(e^{2x}-2+e^{-2x})=e^{2x}+2+e^{-2x}-e^{2x}+2-e^{-2x}=4\\).",
            "workingOut": "\\((e^{x}+e^{-x})^{2}-(e^{x}-e^{-x})^{2}=4\\)",
            "graphData": null
          },
          {
            "explanation": "Therefore \\(\\cosh^{2} x - \\sinh^{2} x = \\dfrac{4}{4}=1\\).",
            "workingOut": "\\(\\cosh^{2} x - \\sinh^{2} x = 1\\)",
            "graphData": null
          }
        ],
        "hint": "Expand both squares using \\((A\\pm B)^{2}=A^{2}\\pm 2AB+B^{2}\\) and simplify."
      }
    ]
  },
  {
    "id": "y12a-5b-q19ai",
    "answer": "\\(\\text{LHS} = y' = \\dfrac{d}{dx}(3e^{4x}) = 3\\cdot 4e^{4x} = 12e^{4x}.\\)\n\\(\\text{RHS} = 4y = 4(3e^{4x}) = 12e^{4x}.\\)\n\\(\\text{LHS} = \\text{RHS}.\\)",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Show that \\( y = 3e^{4x} \\) is a solution of the differential equation \\( y' = 4y \\).",
    "a": "\\(\\text{LHS} = y' = \\dfrac{d}{dx}(3e^{4x}) = 3\\cdot 4e^{4x} = 12e^{4x}.\\)\n\\(\\text{RHS} = 4y = 4(3e^{4x}) = 12e^{4x}.\\)\n\\(\\text{LHS} = \\text{RHS}.\\)",
    "solution": "Given \\(y=3e^{4x}\\). Differentiate: \\(y'=12e^{4x}\\). Right-hand side: \\(4y=4\\cdot 3e^{4x}=12e^{4x}\\). Both sides match.",
    "solutionSteps": [
      {
        "explanation": "We must show that \\(y=3e^{4x}\\) satisfies \\(y'=4y\\). Evaluate both sides separately.",
        "workingOut": "\\(y=3e^{4x}\\)",
        "graphData": null
      },
      {
        "explanation": "Left-hand side: differentiate using the chain rule. \\(\\dfrac{d}{dx}(3e^{4x})=3\\cdot 4e^{4x}=12e^{4x}\\). So \\(y'=12e^{4x}\\).",
        "workingOut": "\\(y'=12e^{4x}\\)",
        "graphData": null
      },
      {
        "explanation": "Right-hand side: substitute the given function into \\(4y\\). \\(4y=4\\cdot 3e^{4x}=12e^{4x}\\).",
        "workingOut": "\\(4y=12e^{4x}\\)",
        "graphData": null
      },
      {
        "explanation": "Both sides equal \\(12e^{4x}\\). Therefore \\(y'=4y\\), and \\(y=3e^{4x}\\) is a solution.",
        "workingOut": "\\(y'=4y=12e^{4x}\\)",
        "graphData": null
      }
    ],
    "hint": "Find \\(y'\\) and compare it with \\(4y\\).",
    "graphData": null
  },
  {
    "id": "y12a-5b-q19aii",
    "answer": "\\(y = 3e^{4x}.\\)\n\\(y' = 12e^{4x}.\\)\n\\(y'' = 48e^{4x}.\\)\n\\(\\text{LHS} = y'' - 16y = 48e^{4x} - 16(3e^{4x}) = 48e^{4x} - 48e^{4x} = 0.\\)\n\\(\\text{RHS} = 0.\\)\n\\(\\text{LHS} = \\text{RHS}.\\)",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Show that \\( y = 3e^{4x} \\) is a solution of the differential equation \\( y'' - 16y = 0 \\).",
    "a": "\\(y = 3e^{4x}.\\)\n\\(y' = 12e^{4x}.\\)\n\\(y'' = 48e^{4x}.\\)\n\\(\\text{LHS} = y'' - 16y = 48e^{4x} - 16(3e^{4x}) = 48e^{4x} - 48e^{4x} = 0.\\)\n\\(\\text{RHS} = 0.\\)\n\\(\\text{LHS} = \\text{RHS}.\\)",
    "solution": "Given \\(y=3e^{4x}\\). Then \\(y'=12e^{4x}\\) and \\(y''=48e^{4x}\\). \\(y''-16y=48e^{4x}-16\\cdot 3e^{4x}=0\\).",
    "solutionSteps": [
      {
        "explanation": "We must show that \\(y=3e^{4x}\\) satisfies \\(y''-16y=0\\). First find \\(y'\\) and \\(y''\\).",
        "workingOut": "\\(y=3e^{4x}\\)",
        "graphData": null
      },
      {
        "explanation": "First derivative: \\(y'=3\\cdot 4e^{4x}=12e^{4x}\\).",
        "workingOut": "\\(y'=12e^{4x}\\)",
        "graphData": null
      },
      {
        "explanation": "Second derivative: differentiate again. \\(y''=12\\cdot 4e^{4x}=48e^{4x}\\).",
        "workingOut": "\\(y''=48e^{4x}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute into the left-hand side of the DE: \\(y''-16y=48e^{4x}-16(3e^{4x})=48e^{4x}-48e^{4x}=0\\).",
        "workingOut": "\\(y''-16y=0\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore the DE is satisfied. Note that \\(16=4^{2}\\): for \\(y=Ae^{kx}\\) one has \\(y''=k^{2}y\\), so \\(y''-k^{2}y=0\\).",
        "workingOut": "\\(y''-16y=0\\)",
        "graphData": null
      }
    ],
    "hint": "Find \\(y''\\) and check that it equals \\(16y\\).",
    "graphData": null
  },
  {
    "id": "y12a-5b-q19b",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Show that \\( y = \\dfrac{1}{3}e^{-2x} + 5 \\) is a solution of the equation \\( \\dfrac{dy}{dx} = -2(y - 5) \\).",
    "a": "\\(y = \\dfrac{1}{3}e^{-2x} + 5.\\)\n\\(\\text{LHS} = \\dfrac{dy}{dx} = \\dfrac{1}{3}\\cdot(-2)e^{-2x} + 0 = -\\dfrac{2}{3}e^{-2x}.\\)\n\\(y - 5 = \\dfrac{1}{3}e^{-2x}.\\)\n\\(\\text{RHS} = -2(y - 5) = -2\\left(\\dfrac{1}{3}e^{-2x}\\right) = -\\dfrac{2}{3}e^{-2x}.\\)\n\\(\\text{LHS} = \\text{RHS}.\\)",
    "answer": "\\(y = \\dfrac{1}{3}e^{-2x} + 5.\\)\n\\(\\text{LHS} = \\dfrac{dy}{dx} = \\dfrac{1}{3}\\cdot(-2)e^{-2x} + 0 = -\\dfrac{2}{3}e^{-2x}.\\)\n\\(y - 5 = \\dfrac{1}{3}e^{-2x}.\\)\n\\(\\text{RHS} = -2(y - 5) = -2\\left(\\dfrac{1}{3}e^{-2x}\\right) = -\\dfrac{2}{3}e^{-2x}.\\)\n\\(\\text{LHS} = \\text{RHS}.\\)",
    "solution": "Given \\(y = \\dfrac{1}{3}e^{-2x} + 5\\). Differentiate: \\(\\dfrac{dy}{dx} = \\dfrac{1}{3}\\cdot(-2)e^{-2x} = -\\dfrac{2}{3}e^{-2x}\\). Right-hand side: \\(y - 5 = \\dfrac{1}{3}e^{-2x}\\), so \\(-2(y - 5) = -2\\cdot\\dfrac{1}{3}e^{-2x} = -\\dfrac{2}{3}e^{-2x}\\). Both sides match, so the DE is satisfied.",
    "solutionSteps": [
      {
        "explanation": "We must show that \\(y = \\dfrac{1}{3}e^{-2x} + 5\\) satisfies \\(\\dfrac{dy}{dx} = -2(y - 5)\\). Work out each side separately.",
        "workingOut": "\\(y = \\dfrac{1}{3}e^{-2x} + 5\\)",
        "graphData": null
      },
      {
        "explanation": "Left-hand side: differentiate term by term. \\(\\dfrac{d}{dx}\\left(\\dfrac{1}{3}e^{-2x}\\right) = \\dfrac{1}{3}\\cdot(-2)e^{-2x} = -\\dfrac{2}{3}e^{-2x}\\), and the constant 5 vanishes. So \\(\\dfrac{dy}{dx} = -\\dfrac{2}{3}e^{-2x}\\).",
        "workingOut": "\\(\\text{LHS} = \\dfrac{dy}{dx} = -\\dfrac{2}{3}e^{-2x}\\)",
        "graphData": null
      },
      {
        "explanation": "Right-hand side: first simplify \\(y - 5\\). \\(y - 5 = \\dfrac{1}{3}e^{-2x} + 5 - 5 = \\dfrac{1}{3}e^{-2x}\\). Then multiply by \\(-2\\): \\(-2(y - 5) = -2\\cdot\\dfrac{1}{3}e^{-2x} = -\\dfrac{2}{3}e^{-2x}\\).",
        "workingOut": "\\(\\text{RHS} = -2(y - 5) = -\\dfrac{2}{3}e^{-2x}\\)",
        "graphData": null
      },
      {
        "explanation": "Both sides equal \\(-\\dfrac{2}{3}e^{-2x}\\). Therefore \\(\\text{LHS} = \\text{RHS}\\), and the given function satisfies the equation.",
        "workingOut": "\\(\\text{LHS} = \\text{RHS} = -\\dfrac{2}{3}e^{-2x}\\)",
        "graphData": null
      }
    ],
    "hint": "Differentiate y, then subtract 5 from y, multiply by -2, and verify that they are equal.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q19ci",
    "answer": "\\(y = e^{-2x}.\\)\n\\(y' = -2e^{-2x}.\\)\n\\(y'' = 4e^{-2x}.\\)\n\\(\\text{LHS} = y'' + 4y' + 4y\\)\n\\(= 4e^{-2x} + 4(-2e^{-2x}) + 4(e^{-2x})\\)\n\\(= 4e^{-2x} - 8e^{-2x} + 4e^{-2x}\\)\n\\(= 0.\\)\n\\(\\text{RHS} = 0.\\)\n\\(\\text{LHS} = \\text{RHS}.\\)",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Show that \\( y = e^{-2x} \\) is a solution of the equation \\( y'' + 4y' + 4y = 0 \\).",
    "a": "\\(y = e^{-2x}.\\)\n\\(y' = -2e^{-2x}.\\)\n\\(y'' = 4e^{-2x}.\\)\n\\(\\text{LHS} = y'' + 4y' + 4y\\)\n\\(= 4e^{-2x} + 4(-2e^{-2x}) + 4(e^{-2x})\\)\n\\(= 4e^{-2x} - 8e^{-2x} + 4e^{-2x}\\)\n\\(= 0.\\)\n\\(\\text{RHS} = 0.\\)\n\\(\\text{LHS} = \\text{RHS}.\\)",
    "solution": "For \\(y=e^{-2x}\\): \\(y'=-2e^{-2x}\\), \\(y''=4e^{-2x}\\). Then \\(y''+4y'+4y=e^{-2x}(4-8+4)=0\\).",
    "solutionSteps": [
      {
        "explanation": "Given \\(y=e^{-2x}\\). We must show that \\(y''+4y'+4y=0\\).",
        "workingOut": "\\(y=e^{-2x}\\)",
        "graphData": null
      },
      {
        "explanation": "First derivative (chain rule, factor \\(-2\\)): \\(y'=-2e^{-2x}\\).",
        "workingOut": "\\(y'=-2e^{-2x}\\)",
        "graphData": null
      },
      {
        "explanation": "Second derivative: multiply by another factor of \\(-2\\): \\(y''=(-2)(-2)e^{-2x}=4e^{-2x}\\).",
        "workingOut": "\\(y''=4e^{-2x}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute into the DE: \\(y''+4y'+4y=4e^{-2x}+4(-2e^{-2x})+4(e^{-2x})\\).",
        "workingOut": "\\(y''+4y'+4y=4e^{-2x}-8e^{-2x}+4e^{-2x}\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out \\(e^{-2x}\\): \\(e^{-2x}(4-8+4)=e^{-2x}\\cdot 0=0\\). Therefore \\(y=e^{-2x}\\) is a solution.",
        "workingOut": "\\(y''+4y'+4y=0\\)",
        "graphData": null
      }
    ],
    "hint": "Find \\(y'\\) and \\(y''\\), substitute, and factor out \\(e^{-2x}\\).",
    "graphData": null
  },
  {
    "id": "y12a-5b-q19cii",
    "answer": "\\(y = x e^{-2x}.\\)\n\\(y' = e^{-2x} + x(-2e^{-2x}) = e^{-2x}(1 - 2x).\\)\n\\(y'' = (-2e^{-2x})(1 - 2x) + e^{-2x}(-2) = e^{-2x}(4x - 4).\\)\n\\(\\text{LHS} = y'' + 4y' + 4y\\)\n\\(= e^{-2x}(4x - 4) + 4e^{-2x}(1 - 2x) + 4(x e^{-2x})\\)\n\\(= e^{-2x}\\bigl[(4x - 4) + 4(1 - 2x) + 4x\\bigr]\\)\n\\(= e^{-2x}\\bigl[4x - 4 + 4 - 8x + 4x\\bigr]\\)\n\\(= e^{-2x}\\cdot 0 = 0.\\)\n\\(\\text{RHS} = 0.\\)\n\\(\\text{LHS} = \\text{RHS}.\\)",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Show that \\( y = x e^{-2x} \\) is a solution of the equation \\( y'' + 4y' + 4y = 0 \\).",
    "a": "\\(y = x e^{-2x}.\\)\n\\(y' = e^{-2x} + x(-2e^{-2x}) = e^{-2x}(1 - 2x).\\)\n\\(y'' = (-2e^{-2x})(1 - 2x) + e^{-2x}(-2) = e^{-2x}(4x - 4).\\)\n\\(\\text{LHS} = y'' + 4y' + 4y\\)\n\\(= e^{-2x}(4x - 4) + 4e^{-2x}(1 - 2x) + 4(x e^{-2x})\\)\n\\(= e^{-2x}\\bigl[(4x - 4) + 4(1 - 2x) + 4x\\bigr]\\)\n\\(= e^{-2x}\\bigl[4x - 4 + 4 - 8x + 4x\\bigr]\\)\n\\(= e^{-2x}\\cdot 0 = 0.\\)\n\\(\\text{RHS} = 0.\\)\n\\(\\text{LHS} = \\text{RHS}.\\)",
    "solution": "Product rule for \\(y=xe^{-2x}\\) gives \\(y'=e^{-2x}(1-2x)\\) and \\(y''=e^{-2x}(4x-4)\\). Substituting into the DE yields 0.",
    "solutionSteps": [
      {
        "explanation": "Given \\(y=x e^{-2x}\\) (a product). Use the product rule for both derivatives.",
        "workingOut": "\\(y=x e^{-2x}\\)",
        "graphData": null
      },
      {
        "explanation": "Let \\(u=x\\), \\(v=e^{-2x}\\). Then \\(u'=1\\), \\(v'=-2e^{-2x}\\). \\(y'=u'v+uv'=e^{-2x}+x(-2e^{-2x})=e^{-2x}(1-2x)\\).",
        "workingOut": "\\(y'=e^{-2x}(1-2x)\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate again with the product rule on \\(e^{-2x}(1-2x)\\): \\(y''=(-2e^{-2x})(1-2x)+e^{-2x}(-2)=e^{-2x}\\bigl[-2(1-2x)-2\\bigr]=e^{-2x}(4x-4)\\).",
        "workingOut": "\\(y''=e^{-2x}(4x-4)\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute into the DE: \\(y''+4y'+4y=e^{-2x}(4x-4)+4e^{-2x}(1-2x)+4(xe^{-2x})\\).",
        "workingOut": "\\(y''+4y'+4y=e^{-2x}\\bigl[(4x-4)+4(1-2x)+4x\\bigr]\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the bracket: \\((4x-4)+4-8x+4x=4x-4+4-8x+4x=0\\). Therefore the whole expression is 0, and \\(y=xe^{-2x}\\) is a solution.",
        "workingOut": "\\(y''+4y'+4y=0\\)",
        "graphData": null
      }
    ],
    "hint": "Use the product rule carefully for \\(y'\\) and \\(y''\\), then collect coefficients of \\(e^{-2x}\\).",
    "graphData": null
  },
  {
    "id": "y12a-5b-q20a",
    "answer": "1",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Find the values of \\(\\lambda\\) that make \\(y=e^{\\lambda x}\\) a solution of \\(y''+2y'-8y=0\\).",
    "a": 1,
    "solution": "Substitute \\(y=e^{\\lambda x}\\): \\((\\lambda^{2}+2\\lambda-8)e^{\\lambda x}=0\\). Characteristic equation \\(\\lambda^{2}+2\\lambda-8=0\\) factors as \\((\\lambda+4)(\\lambda-2)=0\\), so \\(\\lambda=-4\\) or \\(\\lambda=2\\).",
    "solutionSteps": [
      {
        "explanation": "Assume a solution of the form \\(y=e^{\\lambda x}\\). Differentiate twice: \\(y'=\\lambda e^{\\lambda x}\\) and \\(y''=\\lambda^{2}e^{\\lambda x}\\).",
        "workingOut": "\\(y=e^{\\lambda x},\\quad y'=\\lambda e^{\\lambda x},\\quad y''=\\lambda^{2}e^{\\lambda x}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute into the DE \\(y''+2y'-8y=0\\): \\(\\lambda^{2}e^{\\lambda x}+2\\lambda e^{\\lambda x}-8e^{\\lambda x}=0\\).",
        "workingOut": "\\((\\lambda^{2}+2\\lambda-8)e^{\\lambda x}=0\\)",
        "graphData": null
      },
      {
        "explanation": "Since \\(e^{\\lambda x}\\neq 0\\) for all real \\(x\\), the characteristic equation is \\(\\lambda^{2}+2\\lambda-8=0\\).",
        "workingOut": "\\(\\lambda^{2}+2\\lambda-8=0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor: \\(\\lambda^{2}+2\\lambda-8=(\\lambda+4)(\\lambda-2)=0\\). Therefore \\(\\lambda=-4\\) or \\(\\lambda=2\\).",
        "workingOut": "\\(\\lambda=-4\\text{ or }\\lambda=2\\)",
        "graphData": null
      }
    ],
    "hint": "Form the characteristic quadratic \\(\\lambda^{2}+2\\lambda-8=0\\) and solve.",
    "graphData": null,
    "opts": [
      "\\(\\lambda=-2\\text{ or }4\\)",
      "\\(\\lambda=-4\\text{ or }2\\)",
      "\\(\\lambda=2\\text{ or }4\\)",
      "\\(\\lambda=-4\\text{ or }-2\\)"
    ],
    "isNew": true
  },
  {
    "id": "y12a-5b-q20b",
    "answer": "2",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Find the values of \\(\\lambda\\) that make \\(y=e^{\\lambda x}\\) a solution of \\(y''-5y'+6y=0\\).",
    "a": 2,
    "solution": "Substitute \\(y=e^{\\lambda x}\\): \\((\\lambda^{2}-5\\lambda+6)e^{\\lambda x}=0\\). Characteristic equation \\(\\lambda^{2}-5\\lambda+6=0\\) factors as \\((\\lambda-2)(\\lambda-3)=0\\), so \\(\\lambda=2\\) or \\(\\lambda=3\\).",
    "solutionSteps": [
      {
        "explanation": "Assume \\(y=e^{\\lambda x}\\). Then \\(y'=\\lambda e^{\\lambda x}\\) and \\(y''=\\lambda^{2}e^{\\lambda x}\\).",
        "workingOut": "\\(y=e^{\\lambda x},\\quad y'=\\lambda e^{\\lambda x},\\quad y''=\\lambda^{2}e^{\\lambda x}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute into \\(y''-5y'+6y=0\\): \\(\\lambda^{2}e^{\\lambda x}-5\\lambda e^{\\lambda x}+6e^{\\lambda x}=0\\).",
        "workingOut": "\\((\\lambda^{2}-5\\lambda+6)e^{\\lambda x}=0\\)",
        "graphData": null
      },
      {
        "explanation": "Since the exponential never vanishes, solve the characteristic equation \\(\\lambda^{2}-5\\lambda+6=0\\).",
        "workingOut": "\\(\\lambda^{2}-5\\lambda+6=0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor: \\(\\lambda^{2}-5\\lambda+6=(\\lambda-2)(\\lambda-3)=0\\). Therefore \\(\\lambda=2\\) or \\(\\lambda=3\\).",
        "workingOut": "\\(\\lambda=2\\text{ or }\\lambda=3\\)",
        "graphData": null
      }
    ],
    "hint": "Solve the characteristic equation \\(\\lambda^{2}-5\\lambda+6=0\\).",
    "graphData": null,
    "opts": [
      "\\(\\lambda=-2\\text{ or }-3\\)",
      "\\(\\lambda=1\\text{ or }6\\)",
      "\\(\\lambda=2\\text{ or }3\\)",
      "\\(\\lambda=-3\\text{ or }2\\)"
    ],
    "isNew": true
  }
];
