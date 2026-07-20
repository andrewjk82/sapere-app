export const Y12A_CH5D_QUESTIONS = [
  {
    "id": "y12a-5d-q1a",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "Find the indefinite integral:\n\\( \\int e^{4x} \\, dx \\)",
    "hint": "Use the formula \\( \\int e^{ax} \\, dx = \\frac{1}{a}e^{ax} + C \\).",
    "solution": "Using the standard formula \\( \\int e^{ax+b} \\, dx = \\frac{1}{a}e^{ax+b} + C \\) with \\( a = 4, b = 0 \\):\n\\( \\int e^{4x} \\, dx = \\frac{1}{4}e^{4x} + C \\).",
    "solutionSteps": [
      {
        "explanation": "We integrate an exponential of the form \\(e^{ax}\\). The standard result is \\(\\int e^{ax}\\,dx=\\dfrac{1}{a}e^{ax}+C\\) for \\(a\\neq 0\\). Here the exponent is \\(4x\\), so identify \\(a=4\\).",
        "workingOut": "\\(a=4\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the formula: divide by the coefficient of \\(x\\) in the exponent. Do not multiply by 4 (a common slip that produces \\(4e^{4x}\\)).",
        "workingOut": "\\(\\int e^{4x}\\,dx=\\dfrac{1}{4}e^{4x}+C\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore the indefinite integral is \\(\\dfrac{1}{4}e^{4x}+C\\). Differentiating recovers \\(e^{4x}\\), confirming the factor \\(\\dfrac{1}{4}\\).",
        "workingOut": "\\(\\dfrac{1}{4}e^{4x}+C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(4e^{4x} + C\\)",
      "\\(\\dfrac{1}{4}e^{4x} + C\\)",
      "\\(e^{4x} + C\\)",
      "\\(\\dfrac{1}{4}e^{x} + C\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5d-q1b",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "Find the indefinite integral:\n\\( \\int e^{5x} \\, dx \\)",
    "hint": "Identify the coefficient in the exponent and divide by it.",
    "solution": "Using the standard formula \\( \\int e^{ax+b} \\, dx = \\frac{1}{a}e^{ax+b} + C \\) with \\( a = 5, b = 0 \\):\n\\( \\int e^{5x} \\, dx = \\frac{1}{5}e^{5x} + C \\).",
    "solutionSteps": [
      {
        "explanation": "For \\(\\int e^{ax}\\,dx\\) use \\(\\dfrac{1}{a}e^{ax}+C\\). The exponent is \\(5x\\), so \\(a=5\\).",
        "workingOut": "\\(a=5\\)",
        "graphData": null
      },
      {
        "explanation": "Divide by 5: \\(\\int e^{5x}\\,dx=\\dfrac{1}{5}e^{5x}+C\\). Multiplying by 5 instead would give the wrong answer \\(5e^{5x}+C\\).",
        "workingOut": "\\(\\dfrac{1}{5}e^{5x}+C\\)",
        "graphData": null
      },
      {
        "explanation": "Check: \\(\\dfrac{d}{dx}\\!\\left(\\dfrac{1}{5}e^{5x}\\right)=e^{5x}\\). The antiderivative is correct.",
        "workingOut": "\\(\\dfrac{1}{5}e^{5x}+C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(5e^{5x} + C\\)",
      "\\(e^{5x} + C\\)",
      "\\(\\dfrac{1}{5}e^{5x} + C\\)",
      "\\(\\dfrac{1}{5}e^{x} + C\\)"
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-5d-q1c",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "Find the indefinite integral:\n\\( \\int e^{\\frac{x}{4}} \\, dx \\)",
    "hint": "Dividing by a fraction is the same as multiplying by its reciprocal.",
    "solution": "Using the standard formula \\( \\int e^{ax+b} \\, dx = \\frac{1}{a}e^{ax+b} + C \\) with \\( a = \\frac{1}{4} \\):\n\\( \\int e^{\\frac{x}{4}} \\, dx = \\frac{1}{\\frac{1}{4}}e^{\\frac{x}{4}} + C = 4e^{\\frac{x}{4}} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Here \\(a=\\dfrac{1}{4}\\). The formula gives a factor of \\(\\dfrac{1}{a}=4\\), not \\(\\dfrac{1}{4}\\). Dividing by a fraction multiplies by its reciprocal.",
        "workingOut": "\\(a=\\dfrac{1}{4},\\; \\dfrac{1}{a}=4\\)",
        "graphData": null
      },
      {
        "explanation": "Integrate: \\(\\int e^{\\frac{x}{4}}\\,dx=4e^{\\frac{x}{4}}+C\\).",
        "workingOut": "\\(4e^{\\frac{x}{4}}+C\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate to verify: chain rule multiplies by \\(\\dfrac{1}{4}\\), so \\(4\\cdot\\dfrac{1}{4}e^{\\frac{x}{4}}=e^{\\frac{x}{4}}\\).",
        "workingOut": "\\(4e^{\\frac{x}{4}}+C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\dfrac{1}{4}e^{\\frac{x}{4}} + C\\)",
      "\\(e^{\\frac{x}{4}} + C\\)",
      "\\(4e^{4x} + C\\)",
      "\\(4e^{\\frac{x}{4}} + C\\)"
    ],
    "a": 3,
    "answer": "3"
  },
  {
    "id": "y12a-5d-q1d",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "Find the indefinite integral:\n\\( \\int e^{\\frac{x}{5}} \\, dx \\)",
    "hint": "Find the reciprocal of the fraction 1/5 and multiply it by the exponential term.",
    "solution": "Using the standard formula \\( \\int e^{ax+b} \\, dx = \\frac{1}{a}e^{ax+b} + C \\) with \\( a = \\frac{1}{5} \\):\n\\( \\int e^{\\frac{x}{5}} \\, dx = \\frac{1}{\\frac{1}{5}}e^{\\frac{x}{5}} + C = 5e^{\\frac{x}{5}} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Coefficient of \\(x\\) is \\(a=\\dfrac{1}{5}\\), so the antiderivative multiplies by 5.",
        "workingOut": "\\(a=\\dfrac{1}{5},\\; \\dfrac{1}{a}=5\\)",
        "graphData": null
      },
      {
        "explanation": "Hence \\(\\int e^{\\frac{x}{5}}\\,dx=5e^{\\frac{x}{5}}+C\\).",
        "workingOut": "\\(5e^{\\frac{x}{5}}+C\\)",
        "graphData": null
      },
      {
        "explanation": "Check by differentiation: factor 5 times chain-rule factor \\(\\dfrac{1}{5}\\) recovers the integrand.",
        "workingOut": "\\(5e^{\\frac{x}{5}}+C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(5e^{\\frac{x}{5}} + C\\)",
      "\\(\\dfrac{1}{5}e^{\\frac{x}{5}} + C\\)",
      "\\(e^{\\frac{x}{5}} + C\\)",
      "\\(5e^{5x} + C\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5d-q1e",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "Find the indefinite integral:\n\\( \\int 6e^{2x} \\, dx \\)",
    "hint": "Integrate e^{2x} first, then multiply the result by 6.",
    "solution": "Factor out the constant first:\n\\( \\int 6e^{2x} \\, dx = 6 \\int e^{2x} \\, dx = 6 \\left( \\frac{1}{2}e^{2x} \\right) + C = 3e^{2x} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Pull out the constant 6: \\(\\int 6e^{2x}\\,dx=6\\int e^{2x}\\,dx\\). Constants factor through the integral sign.",
        "workingOut": "\\(6\\int e^{2x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Integrate \\(e^{2x}\\): divide by 2 to get \\(\\dfrac{1}{2}e^{2x}\\). Then multiply by 6.",
        "workingOut": "\\(6\\cdot\\dfrac{1}{2}e^{2x}+C\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify \\(6\\cdot\\dfrac{1}{2}=3\\). The result is \\(3e^{2x}+C\\). Equivalently, coefficient over exponent coefficient: \\(3=3\\).",
        "workingOut": "\\(3e^{2x}+C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(6e^{2x} + C\\)",
      "\\(3e^{2x} + C\\)",
      "\\(12e^{2x} + C\\)",
      "\\(3e^{x} + C\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5d-q1f",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "Find the indefinite integral:\n\\( \\int 15e^{3x} \\, dx \\)",
    "hint": "Divide the coefficient 15 by the exponent coefficient 3.",
    "solution": "Factor out the constant first:\n\\( \\int 15e^{3x} \\, dx = 15 \\int e^{3x} \\, dx = 15 \\left( \\frac{1}{3}e^{3x} \\right) + C = 5e^{3x} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Factor out 15: \\(\\int 15e^{3x}\\,dx=15\\int e^{3x}\\,dx\\).",
        "workingOut": "\\(15\\int e^{3x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Integrate \\(e^{3x}\\) to get \\(\\dfrac{1}{3}e^{3x}\\), then multiply by 15: \\(15\\cdot\\dfrac{1}{3}=5\\).",
        "workingOut": "\\(15\\cdot\\dfrac{1}{3}e^{3x}+C\\)",
        "graphData": null
      },
      {
        "explanation": "The indefinite integral is \\(5e^{3x}+C\\).",
        "workingOut": "\\(5e^{3x}+C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(15e^{3x} + C\\)",
      "\\(45e^{3x} + C\\)",
      "\\(5e^{3x} + C\\)",
      "\\(5e^{x} + C\\)"
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-5d-q2a",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "Find the indefinite integral:\n\\( \\int e^{3x+2} \\, dx \\)",
    "hint": "The constant +2 in the exponent does not change the factor outside the integral.",
    "solution": "Using the standard formula \\( \\int e^{ax+b} \\, dx = \\frac{1}{a}e^{ax+b} + C \\) with \\( a = 3, b = 2 \\):\n\\( \\int e^{3x+2} \\, dx = \\frac{1}{3}e^{3x+2} + C \\).",
    "solutionSteps": [
      {
        "explanation": "For \\(\\int e^{ax+b}\\,dx\\) the constant \\(b\\) stays in the exponential; only divide by \\(a\\). Here \\(a=3\\), \\(b=2\\).",
        "workingOut": "\\(a=3,\\; b=2\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the formula: \\(\\int e^{3x+2}\\,dx=\\dfrac{1}{3}e^{3x+2}+C\\). Do not drop the +2 from the exponent.",
        "workingOut": "\\(\\dfrac{1}{3}e^{3x+2}+C\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiating multiplies by 3 via the chain rule, cancelling \\(\\dfrac{1}{3}\\) and recovering \\(e^{3x+2}\\).",
        "workingOut": "\\(\\dfrac{1}{3}e^{3x+2}+C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\dfrac{1}{3}e^{3x+2} + C\\)",
      "\\(3e^{3x+2} + C\\)",
      "\\(\\dfrac{1}{3}e^{3x} + C\\)",
      "\\(e^{3x+2} + C\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5d-q2b",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "Find the indefinite integral:\n\\( \\int e^{5x-4} \\, dx \\)",
    "hint": "Divide by the coefficient of x, which is 5.",
    "solution": "Using the standard formula \\( \\int e^{ax+b} \\, dx = \\frac{1}{a}e^{ax+b} + C \\) with \\( a = 5, b = -4 \\):\n\\( \\int e^{5x-4} \\, dx = \\frac{1}{5}e^{5x-4} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Identify \\(a=5\\) and constant term \\(-4\\) in the exponent. The formula is still \\(\\dfrac{1}{a}e^{ax+b}+C\\).",
        "workingOut": "\\(a=5,\\; b=-4\\)",
        "graphData": null
      },
      {
        "explanation": "Integrate: \\(\\int e^{5x-4}\\,dx=\\dfrac{1}{5}e^{5x-4}+C\\).",
        "workingOut": "\\(\\dfrac{1}{5}e^{5x-4}+C\\)",
        "graphData": null
      },
      {
        "explanation": "The constant \\(-4\\) remains inside the exponential in the answer.",
        "workingOut": "\\(\\dfrac{1}{5}e^{5x-4}+C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(5e^{5x-4} + C\\)",
      "\\(\\dfrac{1}{5}e^{5x-4} + C\\)",
      "\\(\\dfrac{1}{5}e^{5x} + C\\)",
      "\\(e^{5x-4} + C\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5d-q2c",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "Find the indefinite integral:\n\\( \\int 8e^{2x+3} \\, dx \\)",
    "hint": "Divide the multiplier 8 by the coefficient of x in the exponent.",
    "solution": "Factor out the constant coefficient 8:\n\\( \\int 8e^{2x+3} \\, dx = 8 \\int e^{2x+3} \\, dx = 8 \\left( \\frac{1}{2}e^{2x+3} \\right) + C = 4e^{2x+3} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Write \\(\\int 8e^{2x+3}\\,dx=8\\int e^{2x+3}\\,dx\\). The inner integral divides by 2.",
        "workingOut": "\\(8\\int e^{2x+3}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Compute \\(8\\cdot\\dfrac{1}{2}e^{2x+3}=4e^{2x+3}\\). Keep +3 in the exponent.",
        "workingOut": "\\(4e^{2x+3}+C\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(4e^{2x+3}+C\\).",
        "workingOut": "\\(4e^{2x+3}+C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(8e^{2x+3} + C\\)",
      "\\(4e^{2x} + C\\)",
      "\\(4e^{2x+3} + C\\)",
      "\\(\\dfrac{1}{4}e^{2x+3} + C\\)"
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-5d-q2d",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "Find the indefinite integral:\n\\( \\int 12e^{4x+1} \\, dx \\)",
    "hint": "Divide 12 by 4.",
    "solution": "Factor out the constant coefficient 12:\n\\( \\int 12e^{4x+1} \\, dx = 12 \\int e^{4x+1} \\, dx = 12 \\left( \\frac{1}{4}e^{4x+1} \\right) + C = 3e^{4x+1} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Factor 12: \\(12\\int e^{4x+1}\\,dx\\). Divide by the exponent coefficient 4.",
        "workingOut": "\\(12\\int e^{4x+1}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify \\(12\\cdot\\dfrac{1}{4}=3\\) to obtain \\(3e^{4x+1}+C\\).",
        "workingOut": "\\(3e^{4x+1}+C\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate to check: chain-rule factor 4 times 3 gives 12, recovering the integrand.",
        "workingOut": "\\(3e^{4x+1}+C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(12e^{4x+1} + C\\)",
      "\\(3e^{4x} + C\\)",
      "\\(\\dfrac{1}{3}e^{4x+1} + C\\)",
      "\\(3e^{4x+1} + C\\)"
    ],
    "a": 3,
    "answer": "3"
  },
  {
    "id": "y12a-5d-q2e",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "Find the indefinite integral:\n\\( \\int e^{5-3x} \\, dx \\)",
    "hint": "Be careful with the sign: the coefficient of x is -3.",
    "solution": "Using the standard formula \\( \\int e^{ax+b} \\, dx = \\frac{1}{a}e^{ax+b} + C \\) with \\( a = -3, b = 5 \\):\n\\( \\int e^{5-3x} \\, dx = -\\frac{1}{3}e^{5-3x} + C \\).",
    "solutionSteps": [
      {
        "explanation": "The exponent is \\(5-3x\\), so the coefficient of \\(x\\) is \\(a=-3\\). Division by a negative coefficient produces a minus sign.",
        "workingOut": "\\(a=-3\\)",
        "graphData": null
      },
      {
        "explanation": "Integrate: \\(\\int e^{5-3x}\\,dx=\\dfrac{1}{-3}e^{5-3x}+C=-\\dfrac{1}{3}e^{5-3x}+C\\).",
        "workingOut": "\\(-\\dfrac{1}{3}e^{5-3x}+C\\)",
        "graphData": null
      },
      {
        "explanation": "Check: derivative multiplies by \\(-3\\), and \\(-3\\cdot\\left(-\\dfrac{1}{3}\\right)=1\\), recovering \\(e^{5-3x}\\).",
        "workingOut": "\\(-\\dfrac{1}{3}e^{5-3x}+C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{1}{3}e^{5-3x} + C\\)",
      "\\(\\dfrac{1}{3}e^{5-3x} + C\\)",
      "\\(-3e^{5-3x} + C\\)",
      "\\(-\\dfrac{1}{3}e^{5+3x} + C\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5d-q2f",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "Find the indefinite integral:\n\\( \\int \\frac{1}{3}e^{2-6x} \\, dx \\)",
    "hint": "Multiply 1/3 by the reciprocal of the x coefficient, which is -1/6.",
    "solution": "Using the standard formula \\( \\int e^{ax+b} \\, dx = \\frac{1}{a}e^{ax+b} + C \\) with \\( a = -6 \\):\n\\( \\int \\frac{1}{3}e^{2-6x} \\, dx = \\frac{1}{3} \\cdot \\left(-\\frac{1}{6}e^{2-6x}\\right) + C = -\\frac{1}{18}e^{2-6x} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Write \\(\\int \\dfrac{1}{3}e^{2-6x}\\,dx=\\dfrac{1}{3}\\int e^{2-6x}\\,dx\\). The exponent coefficient is \\(a=-6\\).",
        "workingOut": "\\(\\dfrac{1}{3}\\int e^{2-6x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Inner integral: \\(\\dfrac{1}{-6}e^{2-6x}\\). Multiply by \\(\\dfrac{1}{3}\\): \\(\\dfrac{1}{3}\\cdot\\left(-\\dfrac{1}{6}\\right)=-\\dfrac{1}{18}\\).",
        "workingOut": "\\(-\\dfrac{1}{18}e^{2-6x}+C\\)",
        "graphData": null
      },
      {
        "explanation": "So the antiderivative is \\(-\\dfrac{1}{18}e^{2-6x}+C\\).",
        "workingOut": "\\(-\\dfrac{1}{18}e^{2-6x}+C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{1}{6}e^{2-6x} + C\\)",
      "\\(-\\dfrac{1}{18}e^{2-6x} + C\\)",
      "\\(\\dfrac{1}{18}e^{2-6x} + C\\)",
      "\\(-\\dfrac{1}{3}e^{2-6x} + C\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5d-q3a",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 240,
    "question": "Evaluate the definite integral:\n\\( \\int_{0}^{1} e^{2x} \\, dx \\)",
    "hint": "Recall that \\( e^0 = 1 \\).",
    "solution": "Find the antiderivative:\n\\( \\int e^{2x} \\, dx = \\frac{1}{2}e^{2x} \\).\nEvaluate from 0 to 1:\n\\( \\left[ \\frac{1}{2}e^{2x} \\right]_{0}^{1} = \\frac{1}{2}e^{2} - \\frac{1}{2}e^{0} = \\frac{e^2 - 1}{2} \\).",
    "solutionSteps": [
      {
        "explanation": "The antiderivative of \\(e^{2x}\\) is \\(\\dfrac{1}{2}e^{2x}\\). Evaluate from 0 to 1 using the fundamental theorem.",
        "workingOut": "\\(\\left[\\dfrac{1}{2}e^{2x}\\right]_{0}^{1}\\)",
        "graphData": null
      },
      {
        "explanation": "Upper limit \\(x=1\\): \\(\\dfrac{1}{2}e^{2}\\). Lower limit \\(x=0\\): \\(\\dfrac{1}{2}e^{0}=\\dfrac{1}{2}\\).",
        "workingOut": "\\(\\dfrac{1}{2}e^{2}-\\dfrac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Factor: \\(\\dfrac{e^{2}-1}{2}\\). Do not forget to subtract the lower-limit value.",
        "workingOut": "\\(\\dfrac{e^{2}-1}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\dfrac{e^{2}+1}{2}\\)",
      "\\(e^{2}-1\\)",
      "\\(\\dfrac{e^{2}}{2}\\)",
      "\\(\\dfrac{e^{2}-1}{2}\\)"
    ],
    "a": 3,
    "answer": "3"
  },
  {
    "id": "y12a-5d-q3b",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 240,
    "question": "Evaluate the definite integral:\n\\( \\int_{1}^{2} e^{x} \\, dx \\)",
    "hint": "The integral of e^x is e^x.",
    "solution": "Find the antiderivative:\n\\( \\int e^{x} \\, dx = e^{x} \\).\nEvaluate from 1 to 2:\n\\( \\left[ e^{x} \\right]_{1}^{2} = e^{2} - e^{1} = e^2 - e \\).",
    "solutionSteps": [
      {
        "explanation": "Antiderivative of \\(e^{x}\\) is \\(e^{x}\\). Evaluate from 1 to 2.",
        "workingOut": "\\(\\left[e^{x}\\right]_{1}^{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Compute \\(e^{2}-e^{1}=e^{2}-e\\).",
        "workingOut": "\\(e^{2}-e\\)",
        "graphData": null
      },
      {
        "explanation": "The exact value is \\(e^{2}-e\\).",
        "workingOut": "\\(e^{2}-e\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(e^{2}-e\\)",
      "\\(e^{2}+e\\)",
      "\\(e^{2}-1\\)",
      "\\(e-e^{2}\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5d-q3c",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 240,
    "question": "Evaluate the definite integral:\n\\( \\int_{-1}^{2} e^{-x} \\, dx \\)",
    "hint": "The derivative of -e^{-x} is e^{-x}. Keep track of signs.",
    "solution": "Find the antiderivative:\n\\( \\int e^{-x} \\, dx = -e^{-x} \\).\nEvaluate from -1 to 2:\n\\( \\left[ -e^{-x} \\right]_{-1}^{2} = -e^{-2} - (-e^{-(-1)}) = -e^{-2} + e^1 = e - e^{-2} \\).",
    "solutionSteps": [
      {
        "explanation": "Antiderivative of \\(e^{-x}\\) is \\(-e^{-x}\\). Evaluate from \\(-1\\) to 2.",
        "workingOut": "\\(\\left[-e^{-x}\\right]_{-1}^{2}\\)",
        "graphData": null
      },
      {
        "explanation": "At 2: \\(-e^{-2}\\). At \\(-1\\): \\(-e^{-(-1)}=-e\\). Difference: \\(-e^{-2}-(-e)=e-e^{-2}\\).",
        "workingOut": "\\(e-e^{-2}\\)",
        "graphData": null
      },
      {
        "explanation": "So \\(\\int_{-1}^{2}e^{-x}\\,dx=e-e^{-2}\\).",
        "workingOut": "\\(e-e^{-2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(e+e^{-2}\\)",
      "\\(e-e^{-2}\\)",
      "\\(e^{-2}-e\\)",
      "\\(1-e^{-2}\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5d-q3d",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 240,
    "question": "Evaluate the definite integral:\n\\( \\int_{-3}^{0} e^{-x} \\, dx \\)",
    "hint": "Evaluate at the upper limit 0 first, then subtract the evaluation at -3.",
    "solution": "Find the antiderivative:\n\\( \\int e^{-x} \\, dx = -e^{-x} \\).\nEvaluate from -3 to 0:\n\\( \\left[ -e^{-x} \\right]_{-3}^{0} = -e^{0} - (-e^{-(-3)}) = -1 + e^3 = e^3 - 1 \\).",
    "solutionSteps": [
      {
        "explanation": "Antiderivative of \\(e^{-x}\\) is \\(-e^{-x}\\). Limits from \\(-3\\) to 0.",
        "workingOut": "\\(\\left[-e^{-x}\\right]_{-3}^{0}\\)",
        "graphData": null
      },
      {
        "explanation": "At 0: \\(-e^{0}=-1\\). At \\(-3\\): \\(-e^{3}\\). Difference: \\(-1-(-e^{3})=e^{3}-1\\).",
        "workingOut": "\\(e^{3}-1\\)",
        "graphData": null
      },
      {
        "explanation": "Exact value: \\(e^{3}-1\\).",
        "workingOut": "\\(e^{3}-1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(1-e^{3}\\)",
      "\\(e^{3}+1\\)",
      "\\(e^{3}-1\\)",
      "\\(e^{-3}-1\\)"
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-5d-q3e",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 240,
    "question": "Evaluate the definite integral:\n\\( \\int_{0}^{2} e^{3x} \\, dx \\)",
    "hint": "The exponent becomes 3 * 2 = 6.",
    "solution": "Find the antiderivative:\n\\( \\int e^{3x} \\, dx = \\frac{1}{3}e^{3x} \\).\nEvaluate from 0 to 2:\n\\( \\left[ \\frac{1}{3}e^{3x} \\right]_{0}^{2} = \\frac{1}{3}e^{6} - \\frac{1}{3}e^{0} = \\frac{e^6 - 1}{3} \\).",
    "solutionSteps": [
      {
        "explanation": "Antiderivative of \\(e^{3x}\\) is \\(\\dfrac{1}{3}e^{3x}\\). Evaluate 0 to 2.",
        "workingOut": "\\(\\left[\\dfrac{1}{3}e^{3x}\\right]_{0}^{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Upper: \\(\\dfrac{1}{3}e^{6}\\). Lower: \\(\\dfrac{1}{3}\\). Difference: \\(\\dfrac{e^{6}-1}{3}\\).",
        "workingOut": "\\(\\dfrac{e^{6}-1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final exact value \\(\\dfrac{e^{6}-1}{3}\\).",
        "workingOut": "\\(\\dfrac{e^{6}-1}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\dfrac{e^{6}+1}{3}\\)",
      "\\(e^{6}-1\\)",
      "\\(\\dfrac{e^{6}}{3}\\)",
      "\\(\\dfrac{e^{6}-1}{3}\\)"
    ],
    "a": 3,
    "answer": "3"
  },
  {
    "id": "y12a-5d-q3f",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 240,
    "question": "Evaluate the definite integral:\n\\( \\int_{-1}^{1} e^{2x} \\, dx \\)",
    "hint": "Substitute x = 1 and x = -1 into the antiderivative.",
    "solution": "Find the antiderivative:\n\\( \\int e^{2x} \\, dx = \\frac{1}{2}e^{2x} \\).\nEvaluate from -1 to 1:\n\\( \\left[ \\frac{1}{2}e^{2x} \\right]_{-1}^{1} = \\frac{1}{2}e^{2} - \\frac{1}{2}e^{-2} = \\frac{e^2 - e^{-2}}{2} \\).",
    "solutionSteps": [
      {
        "explanation": "Antiderivative \\(\\dfrac{1}{2}e^{2x}\\) from \\(-1\\) to 1.",
        "workingOut": "\\(\\left[\\dfrac{1}{2}e^{2x}\\right]_{-1}^{1}\\)",
        "graphData": null
      },
      {
        "explanation": "Upper \\(\\dfrac{1}{2}e^{2}\\), lower \\(\\dfrac{1}{2}e^{-2}\\). Subtract: \\(\\dfrac{e^{2}-e^{-2}}{2}\\).",
        "workingOut": "\\(\\dfrac{e^{2}-e^{-2}}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "This equals \\(\\sinh 2\\) but leave in exponential form as required.",
        "workingOut": "\\(\\dfrac{e^{2}-e^{-2}}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\dfrac{e^{2}-e^{-2}}{2}\\)",
      "\\(\\dfrac{e^{2}+e^{-2}}{2}\\)",
      "\\(e^{2}-e^{-2}\\)",
      "\\(\\dfrac{e^{2}-1}{2}\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5d-q3g",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 240,
    "question": "Evaluate the definite integral:\n\\( \\int_{-1}^{1} 15e^{-3x} \\, dx \\)",
    "hint": "Divide 15 by -3 to find the constant multiplier of the primitive.",
    "solution": "Find the antiderivative:\n\\( \\int 15e^{-3x} \\, dx = 15 \\left( -\\frac{1}{3}e^{-3x} \\right) = -5e^{-3x} \\).\nEvaluate from -1 to 1:\n\\( \\left[ -5e^{-3x} \\right]_{-1}^{1} = -5e^{-3} - (-5e^{-3(-1)}) = -5e^{-3} + 5e^{3} = 5e^3 - 5e^{-3} \\).",
    "solutionSteps": [
      {
        "explanation": "Integrate \\(15e^{-3x}\\): antiderivative \\(15\\cdot\\left(-\\dfrac{1}{3}\\right)e^{-3x}=-5e^{-3x}\\).",
        "workingOut": "\\(-5e^{-3x}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate from \\(-1\\) to 1: \\([-5e^{-3x}]_{-1}^{1}=-5e^{-3}-(-5e^{3})=-5e^{-3}+5e^{3}\\).",
        "workingOut": "\\(5e^{3}-5e^{-3}\\)",
        "graphData": null
      },
      {
        "explanation": "Write as \\(5e^{3}-5e^{-3}\\).",
        "workingOut": "\\(5e^{3}-5e^{-3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(5e^{3}+5e^{-3}\\)",
      "\\(5e^{3}-5e^{-3}\\)",
      "\\(15e^{3}-15e^{-3}\\)",
      "\\(5e^{3}-5\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5d-q3h",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 240,
    "question": "Evaluate the definite integral:\n\\( \\int_{-2}^{0} 6e^{-2x} \\, dx \\)",
    "hint": "Recall that e^0 = 1, and -2 * -2 = 4 in the exponent.",
    "solution": "Find the antiderivative:\n\\( \\int 6e^{-2x} \\, dx = 6 \\left( -\\frac{1}{2}e^{-2x} \\right) = -3e^{-2x} \\).\nEvaluate from -2 to 0:\n\\( \\left[ -3e^{-2x} \\right]_{-2}^{0} = -3e^{0} - (-3e^{-2(-2)}) = -3 + 3e^{4} = 3e^4 - 3 \\).",
    "solutionSteps": [
      {
        "explanation": "Antiderivative of \\(6e^{-2x}\\) is \\(6\\cdot\\left(-\\dfrac{1}{2}\\right)e^{-2x}=-3e^{-2x}\\).",
        "workingOut": "\\(-3e^{-2x}\\)",
        "graphData": null
      },
      {
        "explanation": "From \\(-2\\) to 0: at 0, \\(-3\\); at \\(-2\\), \\(-3e^{4}\\). Difference \\(-3-(-3e^{4})=3e^{4}-3\\).",
        "workingOut": "\\(3e^{4}-3\\)",
        "graphData": null
      },
      {
        "explanation": "Exact value \\(3e^{4}-3\\).",
        "workingOut": "\\(3e^{4}-3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(3e^{4}+3\\)",
      "\\(3-3e^{4}\\)",
      "\\(3e^{4}-3\\)",
      "\\(6e^{4}-6\\)"
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-5d-q3i",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 240,
    "question": "Evaluate the definite integral:\n\\( \\int_{-1}^{2} 8e^{4x} \\, dx \\)",
    "hint": "Multiply 8 by 1/4 to find the coefficient of the antiderivative.",
    "solution": "Find the antiderivative:\n\\( \\int 8e^{4x} \\, dx = 8 \\left( \\frac{1}{4}e^{4x} \\right) = 2e^{4x} \\).\nEvaluate from -1 to 2:\n\\( \\left[ 2e^{4x} \\right]_{-1}^{2} = 2e^{8} - 2e^{-4} \\).",
    "solutionSteps": [
      {
        "explanation": "Antiderivative of \\(8e^{4x}\\) is \\(8\\cdot\\dfrac{1}{4}e^{4x}=2e^{4x}\\).",
        "workingOut": "\\(2e^{4x}\\)",
        "graphData": null
      },
      {
        "explanation": "From \\(-1\\) to 2: \\(2e^{8}-2e^{-4}\\).",
        "workingOut": "\\(2e^{8}-2e^{-4}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer \\(2e^{8}-2e^{-4}\\).",
        "workingOut": "\\(2e^{8}-2e^{-4}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(2e^{8}+2e^{-4}\\)",
      "\\(2e^{8}-2\\)",
      "\\(8e^{8}-8e^{-4}\\)",
      "\\(2e^{8}-2e^{-4}\\)"
    ],
    "a": 3,
    "answer": "3"
  },
  {
    "id": "y12a-5d-q4a",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 240,
    "question": "Evaluate the definite integral:\n\\( \\int_{0}^{2} e^{x-2} \\, dx \\)",
    "hint": "Substitute the upper limit 2 first to get e^{2-2} = e^0 = 1.",
    "solution": "Find the antiderivative:\n\\( \\int e^{x-2} \\, dx = e^{x-2} \\).\nEvaluate from 0 to 2:\n\\( \\left[ e^{x-2} \\right]_{0}^{2} = e^{2-2} - e^{0-2} = e^0 - e^{-2} = 1 - e^{-2} \\).",
    "solutionSteps": [
      {
        "explanation": "Find the antiderivative. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(e^{x-2}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\left[ e^{x-2} \\right]_{0}^{2} = e^{2-2} - e^{0-2} = e^0 - e^{-2} = 1 - e^{-2} \\).",
        "graphData": null
      },
      {
        "explanation": "Apply the limits of integration. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(e^0 - e^{-2}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(1 - e^{-2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-1 - e^{-2}\\)",
      "\\(1 - e^{2}\\)",
      "\\(1 - e^{-2}\\)",
      "\\(1 - e^{-2+1}\\)"
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-5d-q4b",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 240,
    "question": "Evaluate the definite integral:\n\\( \\int_{-1}^{1} e^{3x+2} \\, dx \\)",
    "hint": "Divide by the coefficient of x, which is 3, when integrating.",
    "solution": "Find the antiderivative:\n\\( \\int e^{3x+2} \\, dx = \\frac{1}{3}e^{3x+2} \\).\nEvaluate from -1 to 1:\n\\( \\left[ \\frac{1}{3}e^{3x+2} \\right]_{-1}^{1} = \\frac{1}{3}e^{3(1)+2} - \\frac{1}{3}e^{3(-1)+2} = \\frac{1}{3}e^5 - \\frac{1}{3}e^{-1} = \\frac{e^5 - e^{-1}}{3} \\).",
    "solutionSteps": [
      {
        "explanation": "Find the antiderivative. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{1}{3}e^{3x+2}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\left[ \\dfrac{1}{3}e^{3x+2} \\right]_{-1}^{1} = \\dfrac{1}{3}e^{3(1)+2} - \\dfrac{1}{3}e^{3(-1)+2} = \\dfrac{1}{3}e^5 - \\dfrac{1}{3}e^{-1} = \\dfrac{e^5 - e^{-1}}{3} \\).",
        "graphData": null
      },
      {
        "explanation": "Evaluate at limits. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{1}{3}e^5 - \\dfrac{1}{3}e^{-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify fractions. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{e^5 - e^{-1}}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{e^5 - e^{-1}}{3}\\)",
      "\\(\\dfrac{e^5 - e^{1}}{3}\\)",
      "\\(\\dfrac{e^5 - e^{-1+1}}{3}\\)",
      "\\(\\dfrac{e^5 - e^{-1}}{3}\\)"
    ],
    "a": 3,
    "answer": "3"
  },
  {
    "id": "y12a-5d-q4c",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 240,
    "question": "Evaluate the definite integral:\n\\( \\int_{-2}^{0} e^{2x-1} \\, dx \\)",
    "hint": "Substitute 0 first to get e^{-1}, then substitute -2 to get e^{-5}.",
    "solution": "Find the antiderivative:\n\\( \\int e^{2x-1} \\, dx = \\frac{1}{2}e^{2x-1} \\).\nEvaluate from -2 to 0:\n\\( \\left[ \\frac{1}{2}e^{2x-1} \\right]_{-2}^{0} = \\frac{1}{2}e^{2(0)-1} - \\frac{1}{2}e^{2(-2)-1} = \\frac{1}{2}e^{-1} - \\frac{1}{2}e^{-5} = \\frac{e^{-1} - e^{-5}}{2} \\).",
    "solutionSteps": [
      {
        "explanation": "Find the antiderivative. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{1}{2}e^{2x-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\left[ \\dfrac{1}{2}e^{2x-1} \\right]_{-2}^{0} = \\dfrac{1}{2}e^{2(0)-1} - \\dfrac{1}{2}e^{2(-2)-1} = \\dfrac{1}{2}e^{-1} - \\dfrac{1}{2}e^{-5} = \\dfrac{e^{-1} - e^{-5}}{2} \\).",
        "graphData": null
      },
      {
        "explanation": "Substitute the upper limit 0 and lower limit -2.",
        "workingOut": "\\(\\dfrac{1}{2}e^{-1} - \\dfrac{1}{2}e^{-5}\\)",
        "graphData": null
      },
      {
        "explanation": "Write as a single fraction. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{e^{-1} - e^{-5}}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\dfrac{e^{-1} - e^{-5}}{2}\\)",
      "\\(-\\dfrac{e^{-1} - e^{-5}}{2}\\)",
      "\\(\\dfrac{e^{1} - e^{5}}{2}\\)",
      "\\(\\dfrac{e^{-1+1} - e^{-5+1}}{2}\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5d-q4d",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 240,
    "question": "Evaluate the definite integral:\n\\( \\int_{-1}^{0} e^{4x+3} \\, dx \\)",
    "hint": "Divide by the coefficient of x, which is 4.",
    "solution": "Find the antiderivative:\n\\( \\int e^{4x+3} \\, dx = \\frac{1}{4}e^{4x+3} \\).\nEvaluate from -1 to 0:\n\\( \\left[ \\frac{1}{4}e^{4x+3} \\right]_{-1}^{0} = \\frac{1}{4}e^{4(0)+3} - \\frac{1}{4}e^{4(-1)+3} = \\frac{1}{4}e^3 - \\frac{1}{4}e^{-1} = \\frac{e^3 - e^{-1}}{4} \\).",
    "solutionSteps": [
      {
        "explanation": "Find the antiderivative. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{1}{4}e^{4x+3}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\left[ \\dfrac{1}{4}e^{4x+3} \\right]_{-1}^{0} = \\dfrac{1}{4}e^{4(0)+3} - \\dfrac{1}{4}e^{4(-1)+3} = \\dfrac{1}{4}e^3 - \\dfrac{1}{4}e^{-1} = \\dfrac{e^3 - e^{-1}}{4} \\).",
        "graphData": null
      },
      {
        "explanation": "Apply integration limits. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{1}{4}e^3 - \\dfrac{1}{4}e^{-1} = \\dfrac{e^3 - e^{-1}}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(\\dfrac{e^3 - e^{-1}}{4}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{e^3 - e^{-1}}{4}\\)",
      "\\(\\dfrac{e^3 - e^{-1}}{4}\\)",
      "\\(\\dfrac{e^3 - e^{1}}{4}\\)",
      "\\(\\dfrac{e^3 - e^{-1+1}}{4}\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5d-q4e",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 240,
    "question": "Evaluate the definite integral:\n\\( \\int_{-0.5}^{0.5} e^{2-4x} \\, dx \\)",
    "hint": "Notice that the exponent 2 - 4x becomes 0 when x = 0.5, and 4 when x = -0.5.",
    "solution": "Find the antiderivative:\n\\( \\int e^{2-4x} \\, dx = -\\frac{1}{4}e^{2-4x} \\).\nEvaluate from -0.5 to 0.5:\n\\( \\left[ -\\frac{1}{4}e^{2-4x} \\right]_{-0.5}^{0.5} = -\\frac{1}{4}e^{2-4(0.5)} - \\left( -\\frac{1}{4}e^{2-4(-0.5)} \\right) \\)\n\\( = -\\frac{1}{4}e^0 + \\frac{1}{4}e^4 = \\frac{e^4 - 1}{4} \\). Wait! Let's check: at lower limit x = -0.5, 2 - 4(-0.5) = 2 + 2 = 4, so e^4. At upper limit x = 0.5, 2 - 4(0.5) = 2 - 2 = 0, so e^0 = 1. So it evaluates to: \\( -\\frac{1}{4} + \\frac{1}{4}e^4 = \\frac{e^4 - 1}{4} \\). Let's write the answerText as \\( \\frac{e^4 - 1}{4} \\).",
    "solutionSteps": [
      {
        "explanation": "Find the antiderivative. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(-\\dfrac{1}{4}e^{2-4x}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( = -\\dfrac{1}{4}e^0 + \\dfrac{1}{4}e^4 = \\dfrac{e^4 - 1}{4} \\). Wait! Let's check: at lower limit x = -0.5, 2 - 4(-0.5) = 2 + 2 = 4, so e^4. At upper limit x = 0.5, 2 - 4(0.5) = 2 - 2 = 0, so e^0 = 1. So it evaluates to: \\( -\\dfrac{1}{4} + \\dfrac{1}{4}e^4 = \\dfrac{e^4 - 1}{4} \\). Let's write the answerText as \\( \\dfrac{e^4 - 1}{4} \\).",
        "graphData": null
      },
      {
        "explanation": "Evaluate at the upper limit x = 0.5. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(-\\dfrac{1}{4}e^{2-2} = -\\dfrac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract evaluation at the lower limit x = -0.5.",
        "workingOut": "\\(-\\dfrac{1}{4} - \\left(-\\dfrac{1}{4}e^{2+2}\\right) = \\dfrac{e^4 - 1}{4}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{e^4 - 1}{4}\\)",
      "\\(\\dfrac{4}{e^4 - 1}\\)",
      "\\(\\dfrac{e^4 - 1}{4}\\)",
      "\\(-(\\dfrac{e^4 - 1}{4})\\)"
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-5d-q4f",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 240,
    "question": "Evaluate the definite integral:\n\\( \\int_{-\\frac{1}{2}}^{\\frac{1}{2}} e^{3+2x} \\, dx \\)",
    "hint": "Substitute x = 1/2 and x = -1/2 into the exponent.",
    "solution": "Find the antiderivative:\n\\( \\int e^{3+2x} \\, dx = \\frac{1}{2}e^{3+2x} \\).\nEvaluate from -0.5 to 0.5:\n\\( \\left[ \\frac{1}{2}e^{3+2x} \\right]_{-0.5}^{0.5} = \\frac{1}{2}e^{3+2(0.5)} - \\frac{1}{2}e^{3+2(-0.5)} = \\frac{1}{2}e^4 - \\frac{1}{2}e^2 = \\frac{e^4 - e^2}{2} \\).",
    "solutionSteps": [
      {
        "explanation": "Find the antiderivative. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{1}{2}e^{3+2x}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\left[ \\dfrac{1}{2}e^{3+2x} \\right]_{-0.5}^{0.5} = \\dfrac{1}{2}e^{3+2(0.5)} - \\dfrac{1}{2}e^{3+2(-0.5)} = \\dfrac{1}{2}e^4 - \\dfrac{1}{2}e^2 = \\dfrac{e^4 - e^2}{2} \\).",
        "graphData": null
      },
      {
        "explanation": "Apply the limits of integration. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{1}{2}e^4 - \\dfrac{1}{2}e^2 = \\dfrac{e^4 - e^2}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(\\dfrac{e^4 - e^2}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{e^4 - e^2}{2}\\)",
      "\\(\\dfrac{2}{e^4 - e^2}\\)",
      "\\(\\dfrac{e^4 - e^4}{4}\\)",
      "\\(\\dfrac{e^4 - e^2}{2}\\)"
    ],
    "a": 3,
    "answer": "3"
  },
  {
    "id": "y12a-5d-q4g",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 240,
    "question": "Evaluate the definite integral:\n\\( \\int_{1}^{2} 8e^{2x+1} \\, dx \\)",
    "hint": "Divide the coefficient 8 by 2, then apply the limits.",
    "solution": "Find the antiderivative:\n\\( \\int 8e^{2x+1} \\, dx = 8 \\left( \\frac{1}{2}e^{2x+1} \\right) = 4e^{2x+1} \\).\nEvaluate from 1 to 2:\n\\( \\left[ 4e^{2x+1} \\right]_{1}^{2} = 4e^{2(2)+1} - 4e^{2(1)+1} = 4e^5 - 4e^3 \\).",
    "solutionSteps": [
      {
        "explanation": "Find the antiderivative. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(4e^{2x+1}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\left[ 4e^{2x+1} \\right]_{1}^{2} = 4e^{2(2)+1} - 4e^{2(1)+1} = 4e^5 - 4e^3 \\).",
        "graphData": null
      },
      {
        "explanation": "Substitute limits. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(4e^5 - 4e^3\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(4e^5 - 4e^3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(4e^5 - 4e^3\\)",
      "\\(-4e^5 - 4e^3\\)",
      "\\(4e^5 - 4e^2\\)",
      "\\(-(4e^5 - 4e^3)\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5d-q4h",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 240,
    "question": "Evaluate the definite integral:\n\\( \\int_{2}^{3} 10e^{5x-4} \\, dx \\)",
    "hint": "The multiplier becomes 10 / 5 = 2. Evaluate the exponents at x = 3 and x = 2.",
    "solution": "Find the antiderivative:\n\\( \\int 10e^{5x-4} \\, dx = 10 \\left( \\frac{1}{5}e^{5x-4} \\right) = 2e^{5x-4} \\).\nEvaluate from 2 to 3:\n\\( \\left[ 2e^{5x-4} \\right]_{2}^{3} = 2e^{5(3)-4} - 2e^{5(2)-4} = 2e^{11} - 2e^6 \\).",
    "solutionSteps": [
      {
        "explanation": "Find the antiderivative. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(2e^{5x-4}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\left[ 2e^{5x-4} \\right]_{2}^{3} = 2e^{5(3)-4} - 2e^{5(2)-4} = 2e^{11} - 2e^6 \\).",
        "graphData": null
      },
      {
        "explanation": "Apply the limits of integration. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(2e^{11} - 2e^6\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(2e^{11} - 2e^6\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-2e^{11} - 2e^6\\)",
      "\\(2e^{11} - 2e^6\\)",
      "\\(2e^{-11} - 2e^6\\)",
      "\\(2e^{11+1} - 2e^6\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5d-q4i",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 240,
    "question": "Evaluate the definite integral:\n\\( \\int_{1}^{2} 9e^{7-3x} \\, dx \\)",
    "hint": "Recall that 9 / -3 = -3. Be careful when subtracting the lower limit evaluation.",
    "solution": "Find the antiderivative:\n\\( \\int 9e^{7-3x} \\, dx = 9 \\left( -\\frac{1}{3}e^{7-3x} \\right) = -3e^{7-3x} \\).\nEvaluate from 1 to 2:\n\\( \\left[ -3e^{7-3x} \\right]_{1}^{2} = -3e^{7-3(2)} - (-3e^{7-3(1)}) = -3e^1 + 3e^4 = 3e^4 - 3e \\).",
    "solutionSteps": [
      {
        "explanation": "Find the antiderivative. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(-3e^{7-3x}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\left[ -3e^{7-3x} \\right]_{1}^{2} = -3e^{7-3(2)} - (-3e^{7-3(1)}) = -3e^1 + 3e^4 = 3e^4 - 3e \\).",
        "graphData": null
      },
      {
        "explanation": "Evaluate at limits of integration. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(-3e^1 - (-3e^4) = 3e^4 - 3e\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(3e^4 - 3e\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-3e^4 - 3e\\)",
      "\\(-(3e^4 - 3e)\\)",
      "\\(3e^4 - 3e\\)",
      "\\(2(3e^4 - 3e)\\)"
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-5d-q5a",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "Express the function using a negative index and find its primitive:\n\\( \\frac{2}{e^x} \\)",
    "hint": "Rewrite 1/e^x as e^{-x} first.",
    "solution": "Express as index:\n\\( \\frac{2}{e^x} = 2e^{-x} \\).\nFind the primitive (indefinite integral):\n\\( \\int 2e^{-x} \\, dx = -2e^{-x} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Rewrite the expression with negative indices.",
        "workingOut": "\\(2e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int 2e^{-x} \\, dx = -2e^{-x} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate using standard rules. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\int 2e^{-x} \\, dx = -2e^{-x} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(-2e^{-x} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(2e^{-x} + C\\)",
      "\\(-2e^{-x} + C\\)",
      "\\(-2e^{-x}\\)",
      "\\(-2e^{x} + C\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5d-q5b",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "Express the function using a negative index and find its primitive:\n\\( \\frac{3}{e^{2x}} \\)",
    "hint": "Rewrite the term as 3e^{-2x} and divide by the coefficient of x, which is -2.",
    "solution": "Express as index:\n\\( \\frac{3}{e^{2x}} = 3e^{-2x} \\).\nFind the primitive:\n\\( \\int 3e^{-2x} \\, dx = 3 \\left( -\\frac{1}{2}e^{-2x} \\right) + C = -\\frac{3}{2}e^{-2x} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Rewrite the expression with negative indices.",
        "workingOut": "\\(3e^{-2x}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int 3e^{-2x} \\, dx = 3 \\left( -\\dfrac{1}{2}e^{-2x} \\right) + C = -\\dfrac{3}{2}e^{-2x} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate using standard rules. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\int 3e^{-2x} \\, dx = -\\dfrac{3}{2}e^{-2x} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(-\\dfrac{3}{2}e^{-2x} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\dfrac{3}{2}e^{-2x} + C\\)",
      "\\(-\\dfrac{2}{3}e^{-2x} + C\\)",
      "\\(-\\dfrac{3}{2}e^{-2x} + C\\)",
      "\\(-3e^{-2x} + C\\)"
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-5d-q5c",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "Express the function using a negative index and find its primitive:\n\\( \\frac{1}{e^{4x}} \\)",
    "hint": "Move the exponent to the numerator by negating its sign.",
    "solution": "Express as index:\n\\( \\frac{1}{e^{4x}} = e^{-4x} \\).\nFind the primitive:\n\\( \\int e^{-4x} \\, dx = -\\frac{1}{4}e^{-4x} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Rewrite the expression with negative indices.",
        "workingOut": "\\(e^{-4x}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int e^{-4x} \\, dx = -\\dfrac{1}{4}e^{-4x} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate using standard rules. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(-\\dfrac{1}{4}e^{-4x} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(-\\dfrac{1}{4}e^{-4x} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\dfrac{1}{4}e^{-4x} + C\\)",
      "\\(-4e^{-4x} + C\\)",
      "\\(-\\dfrac{1}{4}e^{-4x}\\)",
      "\\(-\\dfrac{1}{4}e^{-4x} + C\\)"
    ],
    "a": 3,
    "answer": "3"
  },
  {
    "id": "y12a-5d-q5d",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "Express the function using a negative index and find its primitive:\n\\( -\\frac{5}{e^{2x}} \\)",
    "hint": "Note that two negatives multiply to make a positive coefficient.",
    "solution": "Express as index:\n\\( -\\frac{5}{e^{2x}} = -5e^{-2x} \\).\nFind the primitive:\n\\( \\int -5e^{-2x} \\, dx = -5 \\left( -\\frac{1}{2}e^{-2x} \\right) + C = \\frac{5}{2}e^{-2x} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Rewrite the expression with negative indices.",
        "workingOut": "\\(-5e^{-2x}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int -5e^{-2x} \\, dx = -5 \\left( -\\dfrac{1}{2}e^{-2x} \\right) + C = \\dfrac{5}{2}e^{-2x} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate using standard rules. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\int -5e^{-2x} \\, dx = \\dfrac{5}{2}e^{-2x} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(\\dfrac{5}{2}e^{-2x} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\dfrac{5}{2}e^{-2x} + C\\)",
      "\\(-\\dfrac{5}{2}e^{-2x} + C\\)",
      "\\(\\dfrac{2}{5}e^{-2x} + C\\)",
      "\\(\\dfrac{10}{2}e^{-2x} + C\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5d-q5e",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "Express the function using a negative index and find its primitive:\n\\( \\frac{10}{e^{3x}} \\)",
    "hint": "Rewrite as 10e^{-3x} first.",
    "solution": "Express as index:\n\\( \\frac{10}{e^{3x}} = 10e^{-3x} \\).\nFind the primitive:\n\\( \\int 10e^{-3x} \\, dx = -\\frac{10}{3}e^{-3x} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Rewrite the expression with negative indices.",
        "workingOut": "\\(10e^{-3x}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int 10e^{-3x} \\, dx = -\\dfrac{10}{3}e^{-3x} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate using standard rules. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(-\\dfrac{10}{3}e^{-3x} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(-\\dfrac{10}{3}e^{-3x} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\dfrac{10}{3}e^{-3x} + C\\)",
      "\\(-\\dfrac{10}{3}e^{-3x} + C\\)",
      "\\(-\\dfrac{3}{10}e^{-3x} + C\\)",
      "\\(-\\dfrac{20}{3}e^{-3x} + C\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5d-q5f",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "Express the function using a negative index and find its primitive:\n\\( \\frac{6}{e^{-4x}} \\)",
    "hint": "Recall that 1 / e^{-4x} is equal to e^{4x}.",
    "solution": "Express as index:\n\\( \\frac{6}{e^{-4x}} = 6e^{4x} \\).\nFind the primitive:\n\\( \\int 6e^{4x} \\, dx = 6 \\left( \\frac{1}{4}e^{4x} \\right) + C = \\frac{3}{2}e^{4x} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Rewrite the expression with positive index.",
        "workingOut": "\\(6e^{4x}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int 6e^{4x} \\, dx = 6 \\left( \\dfrac{1}{4}e^{4x} \\right) + C = \\dfrac{3}{2}e^{4x} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate using standard rules. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(6 \\times \\dfrac{1}{4}e^{4x} + C = \\dfrac{3}{2}e^{4x} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(\\dfrac{3}{2}e^{4x} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{3}{2}e^{4x} + C\\)",
      "\\(\\dfrac{2}{3}e^{4x} + C\\)",
      "\\(\\dfrac{3}{2}e^{4x} + C\\)",
      "\\(3e^{4x} + C\\)"
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-5d-q6a",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Find the general equation of \\(f(x)\\) (include the arbitrary constant). Given \\(f'(x)=e^{3x}\\).",
    "hint": "Integrate \\(e^{3x}\\) and include \\(+C\\).",
    "solution": "The correct antiderivative / value is \\(f(x)=\\dfrac{1}{3}e^{3x}+C\\).",
    "solutionSteps": [
      {
        "explanation": "Since \\(f'(x)=e^{3x}\\), integrate both sides: \\(f(x)=\\int e^{3x}\\,dx\\).",
        "workingOut": "\\(f(x)=\\int e^{3x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Use \\(\\int e^{3x}\\,dx=\\dfrac{1}{3}e^{3x}+C\\).",
        "workingOut": "\\(f(x)=\\dfrac{1}{3}e^{3x}+C\\)",
        "graphData": null
      },
      {
        "explanation": "This is the general antiderivative; the constant is still free until an initial condition is used.",
        "workingOut": "\\(f(x)=\\dfrac{1}{3}e^{3x}+C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(f(x)=\\dfrac{1}{3}e^{3x}+C\\)",
      "\\(f(x)=3e^{3x}+C\\)",
      "\\(f(x)=e^{3x}+C\\)",
      "\\(f(x)=\\dfrac{1}{3}e^{3x}\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5d-q6b",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Given also \\(f(0)=-3\\), find \\(C\\) and write the particular equation of \\(f(x)\\).",
    "hint": "Substitute \\(x=0\\) into the general solution.",
    "solution": "The correct antiderivative / value is \\(C=-\\dfrac{10}{3},\\; f(x)=\\dfrac{1}{3}e^{3x}-\\dfrac{10}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "From part (a), \\(f(x)=\\dfrac{1}{3}e^{3x}+C\\). Use \\(f(0)=-3\\).",
        "workingOut": "\\(f(0)=\\dfrac{1}{3}e^{0}+C=-3\\)",
        "graphData": null
      },
      {
        "explanation": "Since \\(e^{0}=1\\), \\(\\dfrac{1}{3}+C=-3\\), so \\(C=-3-\\dfrac{1}{3}=-\\dfrac{10}{3}\\).",
        "workingOut": "\\(C=-\\dfrac{10}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(f(x)=\\dfrac{1}{3}e^{3x}-\\dfrac{10}{3}\\).",
        "workingOut": "\\(f(x)=\\dfrac{1}{3}e^{3x}-\\dfrac{10}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(C=-3,\\; f(x)=\\dfrac{1}{3}e^{3x}-3\\)",
      "\\(C=-\\dfrac{10}{3},\\; f(x)=\\dfrac{1}{3}e^{3x}-\\dfrac{10}{3}\\)",
      "\\(C=-\\dfrac{8}{3},\\; f(x)=\\dfrac{1}{3}e^{3x}-\\dfrac{8}{3}\\)",
      "\\(C=\\dfrac{10}{3},\\; f(x)=\\dfrac{1}{3}e^{3x}+\\dfrac{10}{3}\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5d-q6c",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "With this particular \\(f\\), find the exact values of \\(f(1)\\) and \\(f(2)\\).",
    "hint": "Substitute \\(x=1\\) and \\(x=2\\) into \\(f(x)=\\dfrac{1}{3}e^{3x}-\\dfrac{10}{3}\\).",
    "solution": "The correct antiderivative / value is \\(f(1)=\\dfrac{e^{3}-10}{3},\\; f(2)=\\dfrac{e^{6}-10}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Use \\(f(x)=\\dfrac{1}{3}e^{3x}-\\dfrac{10}{3}=\\dfrac{e^{3x}-10}{3}\\).",
        "workingOut": "\\(f(x)=\\dfrac{e^{3x}-10}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "At \\(x=1\\): \\(f(1)=\\dfrac{e^{3}-10}{3}\\).",
        "workingOut": "\\(f(1)=\\dfrac{e^{3}-10}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "At \\(x=2\\): \\(f(2)=\\dfrac{e^{6}-10}{3}\\).",
        "workingOut": "\\(f(2)=\\dfrac{e^{6}-10}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(f(1)=\\dfrac{e^{3}+10}{3},\\; f(2)=\\dfrac{e^{6}+10}{3}\\)",
      "\\(f(1)=\\dfrac{e^{3}-10}{3},\\; f(2)=\\dfrac{e^{6}-10}{6}\\)",
      "\\(f(1)=\\dfrac{e^{3}-10}{3},\\; f(2)=\\dfrac{e^{6}-10}{3}\\)",
      "\\(f(1)=e^{3}-\\dfrac{10}{3},\\; f(2)=e^{6}-\\dfrac{10}{3}\\)"
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-5d-q7a",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Find \\( f(x) \\) given that \\( f'(x) = 2 + 3e^x \\) and \\( f(0) = 2 \\).",
    "hint": "Integrate each term: the integral of 2 is 2x, and the integral of 3e^x is 3e^x.",
    "solution": "Find general antiderivative:\n\\( f(x) = \\int (2 + 3e^x) \\, dx = 2x + 3e^x + C \\).\nUse the initial condition \\( f(0) = 2 \\):\n\\( 2 = 2(0) + 3e^0 + C \\implies 2 = 3 + C \\implies C = -1 \\).\nSo, \\( f(x) = 2x + 3e^x - 1 \\).",
    "solutionSteps": [
      {
        "explanation": "Integrate f'(x) term-by-term. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(f(x) = 2x + 3e^x + C\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "So, \\( f(x) = 2x + 3e^x - 1 \\).",
        "graphData": null
      },
      {
        "explanation": "Substitute x = 0 and solve for C. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(2 = 3 + C \\implies C = -1\\)",
        "graphData": null
      },
      {
        "explanation": "Formulate final equation. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(f(x) = 2x + 3e^x - 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-f(x) = 2x + 3e^x - 1\\)",
      "\\(f(x) = 2x + 3e^x +1\\)",
      "\\(-(f(x) = 2x + 3e^x - 1)\\)",
      "\\(f(x) = 2x + 3e^x - 1\\)"
    ],
    "a": 3,
    "answer": "3"
  },
  {
    "id": "y12a-5d-q7b",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Find \\( f(x) \\) given that \\( f'(x) = 2 - 4e^x \\) and \\( f(0) = -2 \\).",
    "hint": "Integrate the derivative first, then plug in x = 0 and f(x) = -2.",
    "solution": "Find general antiderivative:\n\\( f(x) = \\int (2 - 4e^x) \\, dx = 2x - 4e^x + C \\).\nUse the initial condition \\( f(0) = -2 \\):\n\\( -2 = 2(0) - 4e^0 + C \\implies -2 = -4 + C \\implies C = 2 \\).\nSo, \\( f(x) = 2x - 4e^x + 2 \\).",
    "solutionSteps": [
      {
        "explanation": "Integrate f'(x). Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(f(x) = 2x - 4e^x + C\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "So, \\( f(x) = 2x - 4e^x + 2 \\).",
        "graphData": null
      },
      {
        "explanation": "Substitute initial values. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(-2 = -4 + C \\implies C = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Formulate final equation. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(f(x) = 2x - 4e^x + 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(f(x) = 2x - 4e^x + 2\\)",
      "\\(-f(x) = 2x - 4e^x + 2\\)",
      "\\(f(x) = 2x - 4e^x -2\\)",
      "\\(f(x) = 2x - 4e^x + 4\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5d-q7c",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Find \\( f(x) \\) given that \\( f'(x) = 3 + e^{-x} \\) and \\( f(0) = 1 \\).",
    "hint": "The integral of e^{-x} is -e^{-x}. Don't forget the negative sign.",
    "solution": "Find general antiderivative:\n\\( f(x) = \\int (3 + e^{-x}) \\, dx = 3x - e^{-x} + C \\).\nUse the initial condition \\( f(0) = 1 \\):\n\\( 1 = 3(0) - e^0 + C \\implies 1 = -1 + C \\implies C = 2 \\).\nSo, \\( f(x) = 3x - e^{-x} + 2 \\).",
    "solutionSteps": [
      {
        "explanation": "Integrate f'(x). Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(f(x) = 3x - e^{-x} + C\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "So, \\( f(x) = 3x - e^{-x} + 2 \\).",
        "graphData": null
      },
      {
        "explanation": "Find constant C. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(1 = -1 + C \\implies C = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Formulate final equation. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(f(x) = 3x - e^{-x} + 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-f(x) = 3x - e^{-x} + 2\\)",
      "\\(f(x) = 3x - e^{-x} + 2\\)",
      "\\(f(x) = 3x - e^{x} + 2\\)",
      "\\(f(x) = 3x - e^{-x} -2\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5d-q7d",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Find \\( f(x) \\) given that \\( f'(x) = 5 - e^{-x} \\) and \\( f(0) = 3 \\).",
    "hint": "Integrating -e^{-x} gives +e^{-x}.",
    "solution": "Find general antiderivative:\n\\( f(x) = \\int (5 - e^{-x}) \\, dx = 5x - (-e^{-x}) + C = 5x + e^{-x} + C \\).\nUse the initial condition \\( f(0) = 3 \\):\n\\( 3 = 5(0) + e^0 + C \\implies 3 = 1 + C \\implies C = 2 \\).\nSo, \\( f(x) = 5x + e^{-x} + 2 \\).",
    "solutionSteps": [
      {
        "explanation": "Integrate f'(x). Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(f(x) = 5x + e^{-x} + C\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "So, \\( f(x) = 5x + e^{-x} + 2 \\).",
        "graphData": null
      },
      {
        "explanation": "Solve for constant C. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(3 = 1 + C \\implies C = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Formulate final equation. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(f(x) = 5x + e^{-x} + 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-f(x) = 5x + e^{-x} + 2\\)",
      "\\(f(x) = 5x + e^{x} + 2\\)",
      "\\(f(x) = 5x + e^{-x} + 2\\)",
      "\\(f(x) = 5x + e^{-x} -2\\)"
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-5d-q7e",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Find \\( f(x) \\) given that \\( f'(x) = e^{2x-2} \\) and \\( f(1) = 4 \\).",
    "hint": "Integrate to get 0.5*e^{2x-2} + C, then solve for C when x = 1.",
    "solution": "Find general antiderivative:\n\\( f(x) = \\int e^{2x-2} \\, dx = \\frac{1}{2}e^{2x-2} + C \\).\nUse initial condition \\( f(1) = 4 \\):\n\\( 4 = \\frac{1}{2}e^{2(1)-2} + C \\implies 4 = \\frac{1}{2}(1) + C \\implies C = 3.5 \\).\nSo, \\( f(x) = \\frac{1}{2}e^{2x-2} + 3.5 \\).",
    "solutionSteps": [
      {
        "explanation": "Integrate using chain rule reverse. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(f(x) = \\dfrac{1}{2}e^{2x-2} + C\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "So, \\( f(x) = \\dfrac{1}{2}e^{2x-2} + 3.5 \\).",
        "graphData": null
      },
      {
        "explanation": "Substitute x = 1 to find C. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(4 = 0.5 + C \\implies C = 3.5\\)",
        "graphData": null
      },
      {
        "explanation": "Formulate final equation. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(f(x) = \\dfrac{1}{2}e^{2x-2} + 3.5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-f(x) = \\dfrac{1}{2}e^{2x-2} + 3.5\\)",
      "\\(f(x) = 2e^{2x-2} + 3.5\\)",
      "\\(e^{x}+C\\)",
      "\\(f(x) = \\dfrac{1}{2}e^{2x-2} + 3.5\\)"
    ],
    "a": 3,
    "answer": "3"
  },
  {
    "id": "y12a-5d-q7f",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Find \\( f(x) \\) given that \\( f'(x) = e^{1-2x} \\) and \\( f(0.5) = 2 \\).",
    "hint": "Divide by the x coefficient, which is -2.",
    "solution": "Find general antiderivative:\n\\( f(x) = \\int e^{1-2x} \\, dx = -\\frac{1}{2}e^{1-2x} + C \\).\nUse initial condition \\( f(0.5) = 2 \\):\n\\( 2 = -\\frac{1}{2}e^{1-2(0.5)} + C \\implies 2 = -\\frac{1}{2}(1) + C \\implies C = 2.5 \\).\nSo, \\( f(x) = -\\frac{1}{2}e^{1-2x} + 2.5 \\).",
    "solutionSteps": [
      {
        "explanation": "Integrate f'(x). Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(f(x) = -\\dfrac{1}{2}e^{1-2x} + C\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "So, \\( f(x) = -\\dfrac{1}{2}e^{1-2x} + 2.5 \\).",
        "graphData": null
      },
      {
        "explanation": "Find constant C. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(2 = -0.5 + C \\implies C = 2.5\\)",
        "graphData": null
      },
      {
        "explanation": "Formulate final equation. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(f(x) = -\\dfrac{1}{2}e^{1-2x} + 2.5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(f(x) = -\\dfrac{1}{2}e^{1-2x} + 2.5\\)",
      "\\(-f(x) = -\\dfrac{1}{2}e^{1-2x} + 2.5\\)",
      "\\(f(x) = -2e^{1-2x} + 2.5\\)",
      "\\(e^{x}+C\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5d-q7g",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Find \\( f(x) \\) given that \\( f'(x) = e^{0.5x+2} \\) and \\( f(-4) = -2 \\).",
    "hint": "The multiplier is 1 / (1/2) = 2. Note that 0.5 * -4 + 2 = 0.",
    "solution": "Find general antiderivative:\n\\( f(x) = \\int e^{0.5x+2} \\, dx = \\frac{1}{0.5}e^{0.5x+2} + C = 2e^{0.5x+2} + C \\).\nUse initial condition \\( f(-4) = -2 \\):\n\\( -2 = 2e^{0.5(-4)+2} + C \\implies -2 = 2e^0 + C \\implies -2 = 2 + C \\implies C = -4 \\).\nSo, \\( f(x) = 2e^{0.5x+2} - 4 \\).",
    "solutionSteps": [
      {
        "explanation": "Integrate the derivative. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(f(x) = 2e^{0.5x+2} + C\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "So, \\( f(x) = 2e^{0.5x+2} - 4 \\).",
        "graphData": null
      },
      {
        "explanation": "Solve for the constant C. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(-2 = 2 + C \\implies C = -4\\)",
        "graphData": null
      },
      {
        "explanation": "Formulate final equation. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(f(x) = 2e^{0.5x+2} - 4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-f(x) = 2e^{0.5x+2} - 4\\)",
      "\\(f(x) = 2e^{0.5x+2} - 4\\)",
      "\\(f(x) = 2e^{-0.5x+2} - 4\\)",
      "\\(f(x) = 2e^{0.5x+2+1} - 4\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5d-q7h",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Find \\( f(x) \\) given that \\( f'(x) = e^{\\frac{1}{3}x+1} \\) and \\( f(-3) = 3 \\).",
    "hint": "The reciprocal of 1/3 is 3. At x = -3, the exponent becomes 0.",
    "solution": "Find general antiderivative:\n\\( f(x) = \\int e^{\\frac{1}{3}x+1} \\, dx = 3e^{\\frac{1}{3}x+1} + C \\).\nUse initial condition \\( f(-3) = 3 \\):\n\\( 3 = 3e^{\\frac{1}{3}(-3)+1} + C \\implies 3 = 3e^0 + C \\implies 3 = 3 + C \\implies C = 0 \\).\nSo, \\( f(x) = 3e^{\\frac{1}{3}x+1} \\).",
    "solutionSteps": [
      {
        "explanation": "Integrate the derivative. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(f(x) = 3e^{\\frac{1}{3}x+1} + C\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "So, \\( f(x) = 3e^{\\frac{1}{3}x+1} \\).",
        "graphData": null
      },
      {
        "explanation": "Substitute values to find C. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(3 = 3(1) + C \\implies C = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Formulate final equation. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(f(x) = 3e^{\\frac{1}{3}x+1}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-f(x) = 3e^{\\frac{1}{3}x+1}\\)",
      "\\(f(x) = 3e^{3x+1}\\)",
      "\\(f(x) = 3e^{\\frac{1}{3}x+1}\\)",
      "\\(e^{x}+C\\)"
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-5d-q8a",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Expand brackets and find the primitive:\n\\( e^x(e^x + 2) \\)",
    "hint": "Multiply e^x by both terms inside the brackets first. Note e^x * e^x = e^{2x}.",
    "solution": "Expand: \\( e^x(e^x + 2) = e^{2x} + 2e^x \\).\nIntegrate:\n\\( \\int (e^{2x} + 2e^x) \\, dx = \\frac{1}{2}e^{2x} + 2e^x + C \\).",
    "solutionSteps": [
      {
        "explanation": "Expand the bracket expression. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(e^{2x} + 2e^x\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int (e^{2x} + 2e^x) \\, dx = \\dfrac{1}{2}e^{2x} + 2e^x + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate term-by-term. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{1}{2}e^{2x} + 2e^x + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(\\dfrac{1}{2}e^{2x} + 2e^x + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{1}{2}e^{2x} + 2e^x + C\\)",
      "\\(2e^{2x} + 2e^x + C\\)",
      "\\(\\dfrac{1}{2}e^{2x} + 2e^x + C\\)",
      "\\(\\dfrac{1}{2}e^{2x} + 2e^x\\)"
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-5d-q8b",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Expand brackets and find the primitive:\n\\( e^x(e^x - 3) \\)",
    "hint": "Expand the brackets, then integrate e^{2x} and -3e^x separately.",
    "solution": "Expand: \\( e^x(e^x - 3) = e^{2x} - 3e^x \\).\nIntegrate:\n\\( \\int (e^{2x} - 3e^x) \\, dx = \\frac{1}{2}e^{2x} - 3e^x + C \\).",
    "solutionSteps": [
      {
        "explanation": "Expand the bracket expression. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(e^{2x} - 3e^x\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int (e^{2x} - 3e^x) \\, dx = \\dfrac{1}{2}e^{2x} - 3e^x + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate term-by-term. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{1}{2}e^{2x} - 3e^x + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(\\dfrac{1}{2}e^{2x} - 3e^x + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{1}{2}e^{2x} - 3e^x + C\\)",
      "\\(2e^{2x} - 3e^x + C\\)",
      "\\(\\dfrac{1}{2}e^{2x} - 3e^x\\)",
      "\\(\\dfrac{1}{2}e^{2x} - 3e^x + C\\)"
    ],
    "a": 3,
    "answer": "3"
  },
  {
    "id": "y12a-5d-q8c",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Expand brackets and find the primitive:\n\\( e^{-x}(3e^{-x} - 2) \\)",
    "hint": "Recall that e^{-x} * e^{-x} = e^{-2x}, and the integral of -2e^{-x} is 2e^{-x}.",
    "solution": "Expand: \\( e^{-x}(3e^{-x} - 2) = 3e^{-2x} - 2e^{-x} \\).\nIntegrate:\n\\( \\int (3e^{-2x} - 2e^{-x}) \\, dx = 3\\left(-\\frac{1}{2}e^{-2x}\\right) - 2(-e^{-x}) + C = -\\frac{3}{2}e^{-2x} + 2e^{-x} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Expand the brackets. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(3e^{-2x} - 2e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int (3e^{-2x} - 2e^{-x}) \\, dx = 3\\left(-\\dfrac{1}{2}e^{-2x}\\right) - 2(-e^{-x}) + C = -\\dfrac{3}{2}e^{-2x} + 2e^{-x} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate term-by-term. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(3\\left(-\\dfrac{1}{2}e^{-2x}\\right) - 2(-e^{-x}) + C\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the final signs. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(-\\dfrac{3}{2}e^{-2x} + 2e^{-x} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{3}{2}e^{-2x} + 2e^{-x} + C\\)",
      "\\(\\dfrac{3}{2}e^{-2x} + 2e^{-x} + C\\)",
      "\\(-\\dfrac{2}{3}e^{-2x} + 2e^{-x} + C\\)",
      "\\(-3e^{-2x} + 2e^{-x} + C\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5d-q8d",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Expand the brackets and find the primitive:\n\\( (e^x + 2)^2 \\)",
    "hint": "Don't forget that the integral of the constant 4 is 4x.",
    "solution": "Expand the perfect square: \\( (e^x + 2)^2 = (e^x)^2 + 2(e^x)(2) + 2^2 = e^{2x} + 4e^x + 4 \\).\nIntegrate:\n\\( \\int (e^{2x} + 4e^x + 4) \\, dx = \\frac{1}{2}e^{2x} + 4e^x + 4x + C \\).",
    "solutionSteps": [
      {
        "explanation": "Apply the expansion identity (a+b)^2. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(e^{2x} + 4e^x + 4\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int (e^{2x} + 4e^x + 4) \\, dx = \\dfrac{1}{2}e^{2x} + 4e^x + 4x + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate each term individually. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{1}{2}e^{2x} + 4e^x + 4x + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(\\dfrac{1}{2}e^{2x} + 4e^x + 4x + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{1}{2}e^{2x} + 4e^x + 4x + C\\)",
      "\\(\\dfrac{1}{2}e^{2x} + 4e^x + 4x + C\\)",
      "\\(2e^{2x} + 4e^x + 4x + C\\)",
      "\\(\\dfrac{1}{2}e^{2x} + 4e^x + 4x\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5d-q8e",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Expand the brackets and find the primitive:\n\\( (e^x + 4)^2 \\)",
    "hint": "Expand using (e^x)^2 + 2*(e^x)*4 + 4^2.",
    "solution": "Expand: \\( (e^x + 4)^2 = e^{2x} + 8e^x + 16 \\).\nIntegrate:\n\\( \\int (e^{2x} + 8e^x + 16) \\, dx = \\frac{1}{2}e^{2x} + 8e^x + 16x + C \\).",
    "solutionSteps": [
      {
        "explanation": "Apply expansion identity. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(e^{2x} + 8e^x + 16\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int (e^{2x} + 8e^x + 16) \\, dx = \\dfrac{1}{2}e^{2x} + 8e^x + 16x + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate term-by-term. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{1}{2}e^{2x} + 8e^x + 16x + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(\\dfrac{1}{2}e^{2x} + 8e^x + 16x + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{1}{2}e^{2x} + 8e^x + 16x + C\\)",
      "\\(2e^{2x} + 8e^x + 16x + C\\)",
      "\\(\\dfrac{1}{2}e^{2x} + 8e^x + 16x + C\\)",
      "\\(\\dfrac{1}{2}e^{2x} + 8e^x + 16x\\)"
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-5d-q8f",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Expand the brackets and find the primitive:\n\\( (e^x - 2)^2 \\)",
    "hint": "The middle term expands to -4e^x, which integrates to -4e^x.",
    "solution": "Expand: \\( (e^x - 2)^2 = e^{2x} - 4e^x + 4 \\).\nIntegrate:\n\\( \\int (e^{2x} - 4e^x + 4) \\, dx = \\frac{1}{2}e^{2x} - 4e^x + 4x + C \\).",
    "solutionSteps": [
      {
        "explanation": "Apply expansion identity. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(e^{2x} - 4e^x + 4\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int (e^{2x} - 4e^x + 4) \\, dx = \\dfrac{1}{2}e^{2x} - 4e^x + 4x + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate term-by-term. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{1}{2}e^{2x} - 4e^x + 4x + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(\\dfrac{1}{2}e^{2x} - 4e^x + 4x + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{1}{2}e^{2x} - 4e^x + 4x + C\\)",
      "\\(2e^{2x} - 4e^x + 4x + C\\)",
      "\\(\\dfrac{1}{2}e^{2x} - 4e^x + 4x\\)",
      "\\(\\dfrac{1}{2}e^{2x} - 4e^x + 4x + C\\)"
    ],
    "a": 3,
    "answer": "3"
  },
  {
    "id": "y12a-5d-q8g",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Expand the brackets and find the primitive:\n\\( (e^x - 3)^2 \\)",
    "hint": "The square of -3 is +9, which integrates to 9x.",
    "solution": "Expand: \\( (e^x - 3)^2 = e^{2x} - 6e^x + 9 \\).\nIntegrate:\n\\( \\int (e^{2x} - 6e^x + 9) \\, dx = \\frac{1}{2}e^{2x} - 6e^x + 9x + C \\).",
    "solutionSteps": [
      {
        "explanation": "Apply expansion identity. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(e^{2x} - 6e^x + 9\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int (e^{2x} - 6e^x + 9) \\, dx = \\dfrac{1}{2}e^{2x} - 6e^x + 9x + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate term-by-term. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{1}{2}e^{2x} - 6e^x + 9x + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(\\dfrac{1}{2}e^{2x} - 6e^x + 9x + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\dfrac{1}{2}e^{2x} - 6e^x + 9x + C\\)",
      "\\(-\\dfrac{1}{2}e^{2x} - 6e^x + 9x + C\\)",
      "\\(2e^{2x} - 6e^x + 9x + C\\)",
      "\\(\\dfrac{1}{2}e^{2x} - 6e^x + 9x\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5d-q8h",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Expand the brackets and find the primitive:\n\\( (e^x + e^{-x})(e^x - e^{-x}) \\)",
    "hint": "Expand first. Remember that integrating -e^{-2x} changes the sign to positive.",
    "solution": "Expand using the difference of two squares identity \\( (a+b)(a-b) = a^2 - b^2 \\):\n\\( (e^x + e^{-x})(e^x - e^{-x}) = (e^x)^2 - (e^{-x})^2 = e^{2x} - e^{-2x} \\).\nIntegrate:\n\\( \\int (e^{2x} - e^{-2x}) \\, dx = \\frac{1}{2}e^{2x} - \\left(-\\frac{1}{2}e^{-2x}\\right) + C = \\frac{1}{2}e^{2x} + \\frac{1}{2}e^{-2x} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Apply difference of squares. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(e^{2x} - e^{-2x}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int (e^{2x} - e^{-2x}) \\, dx = \\dfrac{1}{2}e^{2x} - \\left(-\\dfrac{1}{2}e^{-2x}\\right) + C = \\dfrac{1}{2}e^{2x} + \\dfrac{1}{2}e^{-2x} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate term-by-term. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{1}{2}e^{2x} - \\left(-\\dfrac{1}{2}e^{-2x}\\right) + C\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify signs. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{1}{2}e^{2x} + \\dfrac{1}{2}e^{-2x} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{1}{2}e^{2x} + \\dfrac{1}{2}e^{-2x} + C\\)",
      "\\(\\dfrac{1}{2}e^{2x} + \\dfrac{1}{2}e^{-2x} + C\\)",
      "\\(2e^{2x} + \\dfrac{1}{2}e^{-2x} + C\\)",
      "\\(\\dfrac{1}{2}e^{2x} + \\dfrac{1}{2}e^{-2x}\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5d-q8i",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Expand the brackets and find the primitive:\n\\( (e^{3x} + e^{-3x})(e^{3x} - e^{-3x}) \\)",
    "hint": "The exponents double: (e^{3x})^2 = e^{6x}.",
    "solution": "Expand using difference of squares:\n\\( (e^{3x})^2 - (e^{-3x})^2 = e^{6x} - e^{-6x} \\).\nIntegrate:\n\\( \\int (e^{6x} - e^{-6x}) \\, dx = \\frac{1}{6}e^{6x} - \\left(-\\frac{1}{6}e^{-6x}\\right) + C = \\frac{1}{6}e^{6x} + \\frac{1}{6}e^{-6x} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Apply difference of squares. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(e^{6x} - e^{-6x}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int (e^{6x} - e^{-6x}) \\, dx = \\dfrac{1}{6}e^{6x} - \\left(-\\dfrac{1}{6}e^{-6x}\\right) + C = \\dfrac{1}{6}e^{6x} + \\dfrac{1}{6}e^{-6x} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate and simplify signs. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{1}{6}e^{6x} + \\dfrac{1}{6}e^{-6x} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(\\dfrac{1}{6}e^{6x} + \\dfrac{1}{6}e^{-6x} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{1}{6}e^{6x} + \\dfrac{1}{6}e^{-6x} + C\\)",
      "\\(6e^{6x} + \\dfrac{1}{6}e^{-6x} + C\\)",
      "\\(\\dfrac{1}{6}e^{6x} + \\dfrac{1}{6}e^{-6x} + C\\)",
      "\\(\\dfrac{1}{6}e^{6x} + \\dfrac{1}{6}e^{-6x}\\)"
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-5d-q9a",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Find the indefinite integral (treat \\( a \\) as a constant):\n\\( \\int e^{3x+a} \\, dx \\)",
    "hint": "Only divide by the coefficient of x. Treat \\( a \\) as a constant.",
    "solution": "Using the standard formula \\( \\int e^{mx+c} \\, dx = \\frac{1}{m}e^{mx+c} + C \\) where the variable is x:\n\\( \\int e^{3x+a} \\, dx = \\frac{1}{3}e^{3x+a} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Identify the coefficient of x. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(3\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int e^{3x+a} \\, dx = \\dfrac{1}{3}e^{3x+a} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Divide by the coefficient of x. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{1}{3}e^{3x+a} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(\\dfrac{1}{3}e^{3x+a} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{1}{3}e^{3x+a} + C\\)",
      "\\(\\dfrac{1}{3}e^{3x+a} + C\\)",
      "\\(3e^{3x+a} + C\\)",
      "\\(\\dfrac{1}{3}e^{3x+a}\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5d-q9b",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Find the indefinite integral (treat \\( b \\) as a constant):\n\\( \\int e^{5x+b} \\, dx \\)",
    "hint": "Identify the multiplier of x and divide the exponential term by it.",
    "solution": "Integrating with respect to x:\n\\( \\int e^{5x+b} \\, dx = \\frac{1}{5}e^{5x+b} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Identify the coefficient of x. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(5\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int e^{5x+b} \\, dx = \\dfrac{1}{5}e^{5x+b} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Apply the standard formula. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{1}{5}e^{5x+b} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(\\dfrac{1}{5}e^{5x+b} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{1}{5}e^{5x+b} + C\\)",
      "\\(5e^{5x+b} + C\\)",
      "\\(\\dfrac{1}{5}e^{5x+b} + C\\)",
      "\\(\\dfrac{1}{5}e^{5x+b}\\)"
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-5d-q9c",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Find the indefinite integral (treat \\( m \\) as a constant):\n\\( \\int e^{2x-m} \\, dx \\)",
    "hint": "Treat -m as a constant exponent shift.",
    "solution": "Integrating with respect to x:\n\\( \\int e^{2x-m} \\, dx = \\frac{1}{2}e^{2x-m} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Identify the coefficient of x. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(2\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int e^{2x-m} \\, dx = \\dfrac{1}{2}e^{2x-m} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Apply the standard formula. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{1}{2}e^{2x-m} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(\\dfrac{1}{2}e^{2x-m} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{1}{2}e^{2x-m} + C\\)",
      "\\(2e^{2x-m} + C\\)",
      "\\(\\dfrac{1}{2}e^{2x-m}\\)",
      "\\(\\dfrac{1}{2}e^{2x-m} + C\\)"
    ],
    "a": 3,
    "answer": "3"
  },
  {
    "id": "y12a-5d-q9d",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Find the indefinite integral (treat \\( \\alpha \\) as a constant):\n\\( \\int e^{4x-\\alpha} \\, dx \\)",
    "hint": "Divide by the coefficient of x, which is 4.",
    "solution": "Integrating with respect to x:\n\\( \\int e^{4x-\\alpha} \\, dx = \\frac{1}{4}e^{4x-\\alpha} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Identify the coefficient of x. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(4\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int e^{4x-\\alpha} \\, dx = \\dfrac{1}{4}e^{4x-\\alpha} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Apply standard form. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{1}{4}e^{4x-\\alpha} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(\\dfrac{1}{4}e^{4x-\\alpha} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\dfrac{1}{4}e^{4x-\\alpha} + C\\)",
      "\\(-\\dfrac{1}{4}e^{4x-\\alpha} + C\\)",
      "\\(4e^{4x-\\alpha} + C\\)",
      "\\(\\dfrac{1}{4}e^{4x-\\alpha}\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5d-q9e",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Find the indefinite integral (treat \\( m \\) as the variable coefficient):\n\\( \\int e^{mx+5} \\, dx \\)",
    "hint": "Since the integration variable is x, the coefficient is m. Assume m is non-zero.",
    "solution": "Integrating with respect to x, the coefficient of x is \\( m \\):\n\\( \\int e^{mx+5} \\, dx = \\frac{1}{m}e^{mx+5} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Identify the coefficient of the variable x.",
        "workingOut": "\\(m\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int e^{mx+5} \\, dx = \\dfrac{1}{m}e^{mx+5} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate dividing by the coefficient. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{1}{m}e^{mx+5} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(\\dfrac{1}{m}e^{mx+5} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{1}{m}e^{mx+5} + C\\)",
      "\\(\\dfrac{1}{m}e^{mx+5} + C\\)",
      "\\(\\dfrac{m}{1}e^{mx+5} + C\\)",
      "\\(\\dfrac{2}{m}e^{mx+5} + C\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5d-q9f",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Find the indefinite integral (treat \\( k \\) as a constant coefficient):\n\\( \\int e^{kx+2} \\, dx \\)",
    "hint": "Divide the exponential term by k.",
    "solution": "Integrating with respect to x:\n\\( \\int e^{kx+2} \\, dx = \\frac{1}{k}e^{kx+2} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Identify the coefficient of x. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(k\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int e^{kx+2} \\, dx = \\dfrac{1}{k}e^{kx+2} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate dividing by k. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{1}{k}e^{kx+2} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(\\dfrac{1}{k}e^{kx+2} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{1}{k}e^{kx+2} + C\\)",
      "\\(\\dfrac{k}{1}e^{kx+2} + C\\)",
      "\\(\\dfrac{1}{k}e^{kx+2} + C\\)",
      "\\(\\dfrac{2}{k}e^{kx+2} + C\\)"
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-5d-q9g",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Find the indefinite integral (treat \\( a \\) as a constant coefficient):\n\\( \\int e^{ax-3} \\, dx \\)",
    "hint": "Divide by the coefficient of x, which is a.",
    "solution": "Integrating with respect to x:\n\\( \\int e^{ax-3} \\, dx = \\frac{1}{a}e^{ax-3} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Identify the coefficient of x. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(a\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int e^{ax-3} \\, dx = \\dfrac{1}{a}e^{ax-3} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{1}{a}e^{ax-3} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(\\dfrac{1}{a}e^{ax-3} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{1}{a}e^{ax-3} + C\\)",
      "\\(\\dfrac{a}{1}e^{ax-3} + C\\)",
      "\\(\\dfrac{2}{a}e^{ax-3} + C\\)",
      "\\(\\dfrac{1}{a}e^{ax-3} + C\\)"
    ],
    "a": 3,
    "answer": "3"
  },
  {
    "id": "y12a-5d-q9h",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Find the indefinite integral (treat \\( r \\) as a constant coefficient):\n\\( \\int e^{rx-1} \\, dx \\)",
    "hint": "Divide the term by r.",
    "solution": "Integrating with respect to x:\n\\( \\int e^{rx-1} \\, dx = \\frac{1}{r}e^{rx-1} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Identify the coefficient of x. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(r\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int e^{rx-1} \\, dx = \\dfrac{1}{r}e^{rx-1} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{1}{r}e^{rx-1} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(\\dfrac{1}{r}e^{rx-1} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\dfrac{1}{r}e^{rx-1} + C\\)",
      "\\(-\\dfrac{1}{r}e^{rx-1} + C\\)",
      "\\(\\dfrac{r}{1}e^{rx-1} + C\\)",
      "\\(\\dfrac{2}{r}e^{rx-1} + C\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5d-q9i",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Find the indefinite integral (treat \\( c \\) and \\( d \\) as constants):\n\\( \\int e^{cx+d} \\, dx \\)",
    "hint": "The multiplier is 1/c, where c is the coefficient of x.",
    "solution": "Integrating with respect to x:\n\\( \\int e^{cx+d} \\, dx = \\frac{1}{c}e^{cx+d} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Identify the coefficient of x. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(c\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int e^{cx+d} \\, dx = \\dfrac{1}{c}e^{cx+d} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{1}{c}e^{cx+d} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(\\dfrac{1}{c}e^{cx+d} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{1}{c}e^{cx+d} + C\\)",
      "\\(\\dfrac{1}{c}e^{cx+d} + C\\)",
      "\\(\\dfrac{c}{1}e^{cx+d} + C\\)",
      "\\(\\dfrac{2}{c}e^{cx+d} + C\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5d-q9j",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Find the indefinite integral (treat \\( k \\) and \\( m \\) as constants):\n\\( \\int k e^{kx+m} \\, dx \\)",
    "hint": "Notice that the derivative of e^{kx+m} is exactly k*e^{kx+m}.",
    "solution": "Integrating with respect to x:\n\\( \\int k e^{kx+m} \\, dx = k \\cdot \\left( \\frac{1}{k}e^{kx+m} \\right) + C = e^{kx+m} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Factor out the constant coefficient. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(k \\int e^{kx+m} \\, dx\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int k e^{kx+m} \\, dx = k \\cdot \\left( \\dfrac{1}{k}e^{kx+m} \\right) + C = e^{kx+m} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate and simplify the coefficients.",
        "workingOut": "\\(k \\times \\dfrac{1}{k}e^{kx+m} + C = e^{kx+m} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(e^{kx+m} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-e^{kx+m} + C\\)",
      "\\(e^{kx+m}\\)",
      "\\(e^{kx+m} + C\\)",
      "\\(e^{x}+C\\)"
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-5d-q9k",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Find the indefinite integral (treat \\( P \\), \\( q \\), and \\( r \\) as constants):\n\\( \\int P e^{qx-r} \\, dx \\)",
    "hint": "Multiply P by 1/q.",
    "solution": "Integrating with respect to x:\n\\( \\int P e^{qx-r} \\, dx = P \\cdot \\left( \\frac{1}{q}e^{qx-r} \\right) + C = \\frac{P}{q}e^{qx-r} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Factor out the constant P. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(P \\int e^{qx-r} \\, dx\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int P e^{qx-r} \\, dx = P \\cdot \\left( \\dfrac{1}{q}e^{qx-r} \\right) + C = \\dfrac{P}{q}e^{qx-r} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate the exponential term and combine.",
        "workingOut": "\\(\\dfrac{P}{q}e^{qx-r} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(\\dfrac{P}{q}e^{qx-r} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{P}{q}e^{qx-r} + C\\)",
      "\\(\\dfrac{q}{P}e^{qx-r} + C\\)",
      "\\(\\dfrac{P}{q}e^{qx-r}\\)",
      "\\(\\dfrac{P}{q}e^{qx-r} + C\\)"
    ],
    "a": 3,
    "answer": "3"
  },
  {
    "id": "y12a-5d-q9l",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Find the indefinite integral (treat \\( A \\), \\( m \\), and \\( n \\) as constants):\n\\( \\int A e^{mx-n} \\, dx \\)",
    "hint": "Divide the leading coefficient A by the x-coefficient m.",
    "solution": "Integrating with respect to x:\n\\( \\int A e^{mx-n} \\, dx = A \\cdot \\left( \\frac{1}{m}e^{mx-n} \\right) + C = \\frac{A}{m}e^{mx-n} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Factor out the constant coefficient A. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(A \\int e^{mx-n} \\, dx\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int A e^{mx-n} \\, dx = A \\cdot \\left( \\dfrac{1}{m}e^{mx-n} \\right) + C = \\dfrac{A}{m}e^{mx-n} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate and simplify. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{A}{m}e^{mx-n} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(\\dfrac{A}{m}e^{mx-n} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\dfrac{A}{m}e^{mx-n} + C\\)",
      "\\(-\\dfrac{A}{m}e^{mx-n} + C\\)",
      "\\(\\dfrac{m}{A}e^{mx-n} + C\\)",
      "\\(\\dfrac{A}{m}e^{mx-n}\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5d-q10a",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 200,
    "question": "Express the function as a power of \\( e \\) and find its primitive:\n\\( \\frac{1}{e^{x-2}} \\)",
    "hint": "Negate the entire exponent: -(x - 2) = 2 - x.",
    "solution": "Rewrite with a negative exponent:\n\\( \\frac{1}{e^{x-2}} = e^{-(x-2)} = e^{2-x} \\).\nFind the primitive:\n\\( \\int e^{2-x} \\, dx = -e^{2-x} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Rewrite the term as a power of e. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(e^{2-x}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int e^{2-x} \\, dx = -e^{2-x} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate dividing by the x coefficient (-1).",
        "workingOut": "\\(-e^{2-x} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(-e^{2-x} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(e^{2-x} + C\\)",
      "\\(-e^{2-x} + C\\)",
      "\\(-e^{2-x}\\)",
      "\\(-e^{-2-x} + C\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5d-q10b",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 200,
    "question": "Express the function as a power of \\( e \\) and find its primitive:\n\\( \\frac{1}{e^{2x-1}} \\)",
    "hint": "The exponent becomes -(2x - 1) = 1 - 2x.",
    "solution": "Rewrite with a negative exponent:\n\\( \\frac{1}{e^{2x-1}} = e^{-(2x-1)} = e^{1-2x} \\).\nFind the primitive:\n\\( \\int e^{1-2x} \\, dx = -\\frac{1}{2}e^{1-2x} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Rewrite the term as a power of e. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(e^{1-2x}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int e^{1-2x} \\, dx = -\\dfrac{1}{2}e^{1-2x} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate dividing by the x coefficient (-2).",
        "workingOut": "\\(-\\dfrac{1}{2}e^{1-2x} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(-\\dfrac{1}{2}e^{1-2x} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\dfrac{1}{2}e^{1-2x} + C\\)",
      "\\(-2e^{1-2x} + C\\)",
      "\\(-\\dfrac{1}{2}e^{1-2x} + C\\)",
      "\\(-\\dfrac{1}{2}e^{1-2x}\\)"
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-5d-q10c",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 200,
    "question": "Express the function as a power of \\( e \\) and find its primitive:\n\\( \\frac{1}{e^{3x+4}} \\)",
    "hint": "Negate both terms in the exponent: -(3x + 4) = -3x - 4.",
    "solution": "Rewrite with a negative exponent:\n\\( \\frac{1}{e^{3x+4}} = e^{-(3x+4)} = e^{-3x-4} \\).\nFind the primitive:\n\\( \\int e^{-3x-4} \\, dx = -\\frac{1}{3}e^{-3x-4} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Rewrite the term as a power of e. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(e^{-3x-4}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int e^{-3x-4} \\, dx = -\\dfrac{1}{3}e^{-3x-4} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate dividing by the x coefficient (-3).",
        "workingOut": "\\(-\\dfrac{1}{3}e^{-3x-4} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(-\\dfrac{1}{3}e^{-3x-4} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\dfrac{1}{3}e^{-3x-4} + C\\)",
      "\\(-3e^{-3x-4} + C\\)",
      "\\(-\\dfrac{1}{3}e^{-3x-4}\\)",
      "\\(-\\dfrac{1}{3}e^{-3x-4} + C\\)"
    ],
    "a": 3,
    "answer": "3"
  },
  {
    "id": "y12a-5d-q10d",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 200,
    "question": "Express the function as a power of \\( e \\) and find its primitive:\n\\( \\frac{5}{e^{3x-2}} \\)",
    "hint": "Rewrite the function as 5*e^{2-3x} first.",
    "solution": "Rewrite with a negative exponent:\n\\( \\frac{5}{e^{3x-2}} = 5e^{-(3x-2)} = 5e^{2-3x} \\).\nFind the primitive:\n\\( \\int 5e^{2-3x} \\, dx = 5 \\left(-\\frac{1}{3}e^{2-3x}\\right) + C = -\\frac{5}{3}e^{2-3x} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Rewrite the term as a power of e. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(5e^{2-3x}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int 5e^{2-3x} \\, dx = 5 \\left(-\\dfrac{1}{3}e^{2-3x}\\right) + C = -\\dfrac{5}{3}e^{2-3x} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate dividing by the x coefficient (-3).",
        "workingOut": "\\(-\\dfrac{5}{3}e^{2-3x} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(-\\dfrac{5}{3}e^{2-3x} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{5}{3}e^{2-3x} + C\\)",
      "\\(\\dfrac{5}{3}e^{2-3x} + C\\)",
      "\\(-\\dfrac{3}{5}e^{2-3x} + C\\)",
      "\\(-\\dfrac{10}{3}e^{2-3x} + C\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5d-q10e",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 200,
    "question": "Express the function as a power of \\( e \\) and find its primitive:\n\\( \\frac{8}{e^{3-2x}} \\)",
    "hint": "Negating 3 - 2x yields 2x - 3. Differentiate 4*e^{2x-3} to check your answer.",
    "solution": "Rewrite with a negative exponent:\n\\( \\frac{8}{e^{3-2x}} = 8e^{-(3-2x)} = 8e^{2x-3} \\).\nFind the primitive:\n\\( \\int 8e^{2x-3} \\, dx = 8 \\left(\\frac{1}{2}e^{2x-3}\\right) + C = 4e^{2x-3} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Rewrite the term as a power of e. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(8e^{2x-3}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int 8e^{2x-3} \\, dx = 8 \\left(\\dfrac{1}{2}e^{2x-3}\\right) + C = 4e^{2x-3} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate dividing by the x coefficient (2).",
        "workingOut": "\\(4e^{2x-3} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(4e^{2x-3} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-4e^{2x-3} + C\\)",
      "\\(4e^{2x-3} + C\\)",
      "\\(4e^{2x-3}\\)",
      "\\(4e^{-2x-3} + C\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5d-q10f",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 200,
    "question": "Express the function as a power of \\( e \\) and find its primitive:\n\\( \\frac{15}{e^{4x-3}} \\)",
    "hint": "Negate the exponent 4x - 3 to get 3 - 4x.",
    "solution": "Rewrite with a negative exponent:\n\\( \\frac{15}{e^{4x-3}} = 15e^{-(4x-3)} = 15e^{3-4x} \\).\nFind the primitive:\n\\( \\int 15e^{3-4x} \\, dx = -\\frac{15}{4}e^{3-4x} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Rewrite the term as a power of e. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(15e^{3-4x}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int 15e^{3-4x} \\, dx = -\\dfrac{15}{4}e^{3-4x} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate dividing by the x coefficient (-4).",
        "workingOut": "\\(-\\dfrac{15}{4}e^{3-4x} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(-\\dfrac{15}{4}e^{3-4x} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\dfrac{15}{4}e^{3-4x} + C\\)",
      "\\(-\\dfrac{4}{15}e^{3-4x} + C\\)",
      "\\(-\\dfrac{15}{4}e^{3-4x} + C\\)",
      "\\(-\\dfrac{30}{4}e^{3-4x} + C\\)"
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-5d-q11a",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Integrate the function by writing the integrand as a sum of powers of \\( e \\):\n\\( \\int \\frac{e^x + 2}{e^x} \\, dx \\)",
    "hint": "Split the fraction: (e^x)/(e^x) + 2/(e^x).",
    "solution": "Divide each term in the numerator by the denominator:\n\\( \\frac{e^x + 2}{e^x} = \\frac{e^x}{e^x} + \\frac{2}{e^x} = 1 + 2e^{-x} \\).\nNow integrate:\n\\( \\int (1 + 2e^{-x}) \\, dx = x - 2e^{-x} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Divide the terms in the numerator. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(1 + 2e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int (1 + 2e^{-x}) \\, dx = x - 2e^{-x} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate term-by-term. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(x - 2e^{-x} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(x - 2e^{-x} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(x - 2e^{-x} + C\\)",
      "\\(-x - 2e^{-x} + C\\)",
      "\\(x - 2e^{-x}\\)",
      "\\(x - 2e^{x} + C\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5d-q11b",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Integrate the function by writing the integrand as a sum of powers of \\( e \\):\n\\( \\int \\frac{e^{2x} + 3}{e^x} \\, dx \\)",
    "hint": "Simplify e^{2x} / e^x to e^x. Simplify 3 / e^x to 3e^{-x}.",
    "solution": "Divide each term by the denominator:\n\\( \\frac{e^{2x} + 3}{e^x} = \\frac{e^{2x}}{e^x} + \\frac{3}{e^x} = e^x + 3e^{-x} \\).\nNow integrate:\n\\( \\int (e^x + 3e^{-x}) \\, dx = e^x - 3e^{-x} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Divide the terms in the numerator. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(e^x + 3e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int (e^x + 3e^{-x}) \\, dx = e^x - 3e^{-x} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate term-by-term. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(e^x - 3e^{-x} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(e^x - 3e^{-x} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-e^x - 3e^{-x} + C\\)",
      "\\(e^x - 3e^{-x} + C\\)",
      "\\(e^x - 3e^{-x}\\)",
      "\\(e^x - 3e^{x} + C\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5d-q11c",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Integrate the function by writing the integrand as a sum of powers of \\( e \\):\n\\( \\int \\frac{e^x - 2}{e^{3x}} \\, dx \\)",
    "hint": "e^x / e^{3x} = e^{-2x}. Treat -2/e^{3x} as -2e^{-3x}.",
    "solution": "Divide each term by the denominator:\n\\( \\frac{e^x - 2}{e^{3x}} = e^{-2x} - 2e^{-3x} \\).\nNow integrate:\n\\( \\int (e^{-2x} - 2e^{-3x}) \\, dx = -\\frac{1}{2}e^{-2x} - 2\\left(-\\frac{1}{3}e^{-3x}\\right) + C = -\\frac{1}{2}e^{-2x} + \\frac{2}{3}e^{-3x} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Divide the terms in the numerator. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(e^{-2x} - 2e^{-3x}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int (e^{-2x} - 2e^{-3x}) \\, dx = -\\dfrac{1}{2}e^{-2x} - 2\\left(-\\dfrac{1}{3}e^{-3x}\\right) + C = -\\dfrac{1}{2}e^{-2x} + \\dfrac{2}{3}e^{-3x} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate each term. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(-\\dfrac{1}{2}e^{-2x} + \\dfrac{2}{3}e^{-3x} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(-\\dfrac{1}{2}e^{-2x} + \\dfrac{2}{3}e^{-3x} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\dfrac{1}{2}e^{-2x} + \\dfrac{2}{3}e^{-3x} + C\\)",
      "\\(-2e^{-2x} + \\dfrac{2}{3}e^{-3x} + C\\)",
      "\\(-\\dfrac{1}{2}e^{-2x} + \\dfrac{2}{3}e^{-3x} + C\\)",
      "\\(-\\dfrac{1}{2}e^{-2x} + \\dfrac{2}{3}e^{-3x}\\)"
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-5d-q11d",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Integrate the function by writing the integrand as a sum of powers of \\( e \\):\n\\( \\int \\frac{e^x - 4}{e^{2x}} \\, dx \\)",
    "hint": "Recall that -4 * -1/2 = +2.",
    "solution": "Divide each term by the denominator:\n\\( \\frac{e^x - 4}{e^{2x}} = e^{-x} - 4e^{-2x} \\).\nNow integrate:\n\\( \\int (e^{-x} - 4e^{-2x}) \\, dx = -e^{-x} - 4\\left(-\\frac{1}{2}e^{-2x}\\right) + C = -e^{-x} + 2e^{-2x} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Divide numerator terms. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(e^{-x} - 4e^{-2x}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int (e^{-x} - 4e^{-2x}) \\, dx = -e^{-x} - 4\\left(-\\dfrac{1}{2}e^{-2x}\\right) + C = -e^{-x} + 2e^{-2x} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate and simplify. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(-e^{-x} + 2e^{-2x} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(-e^{-x} + 2e^{-2x} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(e^{-x} + 2e^{-2x} + C\\)",
      "\\(-e^{-x} + 2e^{-2x}\\)",
      "\\(-e^{x} + 2e^{2x} + C\\)",
      "\\(-e^{-x} + 2e^{-2x} + C\\)"
    ],
    "a": 3,
    "answer": "3"
  },
  {
    "id": "y12a-5d-q11e",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Integrate the function by writing the integrand as a sum of powers of \\( e \\):\n\\( \\int \\frac{3e^{2x} - 2e^x}{e^{3x}} \\, dx \\)",
    "hint": "Separate into two fractions and simplify exponents: 2x - 3x = -x, and x - 3x = -2x.",
    "solution": "Divide each term by the denominator:\n\\( \\frac{3e^{2x} - 2e^x}{e^{3x}} = 3e^{-x} - 2e^{-2x} \\).\nNow integrate:\n\\( \\int (3e^{-x} - 2e^{-2x}) \\, dx = 3(-e^{-x}) - 2\\left(-\\frac{1}{2}e^{-2x}\\right) + C = -3e^{-x} + e^{-2x} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Divide numerator terms. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(3e^{-x} - 2e^{-2x}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int (3e^{-x} - 2e^{-2x}) \\, dx = 3(-e^{-x}) - 2\\left(-\\dfrac{1}{2}e^{-2x}\\right) + C = -3e^{-x} + e^{-2x} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate each term and simplify coefficients.",
        "workingOut": "\\(-3e^{-x} + e^{-2x} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(-3e^{-x} + e^{-2x} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-3e^{-x} + e^{-2x} + C\\)",
      "\\(3e^{-x} + e^{-2x} + C\\)",
      "\\(-3e^{-x} + e^{-2x}\\)",
      "\\(-3e^{x} + e^{2x} + C\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5d-q11f",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Integrate the function by writing the integrand as a sum of powers of \\( e \\):\n\\( \\int \\frac{4e^x - e^{2x}}{e^{4x}} \\, dx \\)",
    "hint": "Divide by e^{4x} by subtracting 4 from the numerator exponents.",
    "solution": "Divide each term by the denominator:\n\\( \\frac{4e^x - e^{2x}}{e^{4x}} = 4e^{-3x} - e^{-2x} \\).\nNow integrate:\n\\( \\int (4e^{-3x} - e^{-2x}) \\, dx = 4\\left(-\\frac{1}{3}e^{-3x}\\right) - \\left(-\\frac{1}{2}e^{-2x}\\right) + C = -\\frac{4}{3}e^{-3x} + \\frac{1}{2}e^{-2x} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Divide numerator terms. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(4e^{-3x} - e^{-2x}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int (4e^{-3x} - e^{-2x}) \\, dx = 4\\left(-\\dfrac{1}{3}e^{-3x}\\right) - \\left(-\\dfrac{1}{2}e^{-2x}\\right) + C = -\\dfrac{4}{3}e^{-3x} + \\dfrac{1}{2}e^{-2x} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate term-by-term. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(-\\dfrac{4}{3}e^{-3x} + \\dfrac{1}{2}e^{-2x} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(-\\dfrac{4}{3}e^{-3x} + \\dfrac{1}{2}e^{-2x} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\dfrac{4}{3}e^{-3x} + \\dfrac{1}{2}e^{-2x} + C\\)",
      "\\(-\\dfrac{4}{3}e^{-3x} + \\dfrac{1}{2}e^{-2x} + C\\)",
      "\\(-\\dfrac{4}{3}e^{-3x} + 2e^{-2x} + C\\)",
      "\\(-\\dfrac{3}{4}e^{-3x} + \\dfrac{1}{2}e^{-2x} + C\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5d-q12a",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Find the y-intercept of the curve \\( y \\) if its gradient is given by \\( y' = e^{x-2} \\) and \\( y = 2 \\) when \\( x = 2 \\).",
    "hint": "Integrate to get y = e^{x-2} + C, solve for C, then find y when x = 0.",
    "solution": "Integrate the gradient function:\n\\( y = \\int e^{x-2} \\, dx = e^{x-2} + C \\).\nUse the boundary condition \\( x = 2, y = 2 \\):\n\\( 2 = e^{2-2} + C \\implies 2 = e^0 + C \\implies 2 = 1 + C \\implies C = 1 \\).\nSo, the curve is \\( y = e^{x-2} + 1 \\).\nTo find the y-intercept, set \\( x = 0 \\):\n\\( y(0) = e^{0-2} + 1 = e^{-2} + 1 \\).",
    "solutionSteps": [
      {
        "explanation": "Integrate the derivative to find general y.",
        "workingOut": "\\(y = e^{x-2} + C\\)",
        "graphData": null
      },
      {
        "explanation": "Use the point (2,2) to solve for C. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(2 = e^0 + C \\implies C = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Formulate final curve equation. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(y = e^{x-2} + 1\\)",
        "graphData": null
      },
      {
        "explanation": "Find y-intercept by setting x = 0. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(y(0) = e^{-2} + 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-e^{-2} + 1\\)",
      "\\(e^{2} + 1\\)",
      "\\(e^{-2+1} + 1\\)",
      "\\(e^{-2} + 1\\)"
    ],
    "a": 3,
    "answer": "3"
  },
  {
    "id": "y12a-5d-q12b",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "The gradient of a curve is given by \\( y' = e^{3-x} \\) and the curve passes through the point \\( (3, 2) \\). Find the equation of this curve and its horizontal asymptote.",
    "hint": "Recall that integrating e^{3-x} introduces a negative sign because the derivative of 3-x is -1. Solve for C, then analyze limit as x -> infinity.",
    "solution": "Integrate the gradient function:\n\\( y = \\int e^{3-x} \\, dx = -e^{3-x} + C \\).\nUse the boundary condition \\( x = 3, y = 2 \\):\n\\( 2 = -e^{3-3} + C \\implies 2 = -1 + C \\implies C = 3 \\).\nSo the curve is \\( y = -e^{3-x} + 3 \\).\nAs \\( x \\to \\infty \\), \\( e^{3-x} \\to 0 \\), which means \\( y \\to 3 \\).\nSo the horizontal asymptote is \\( y = 3 \\).",
    "solutionSteps": [
      {
        "explanation": "Integrate to find the general equation. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(y = -e^{3-x} + C\\)",
        "graphData": null
      },
      {
        "explanation": "Use the boundary condition (3, 2) to find C.",
        "workingOut": "\\(2 = -1 + C \\implies C = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Formulate the curve equation. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(y = -e^{3-x} + 3\\)",
        "graphData": null
      },
      {
        "explanation": "Find the horizontal asymptote by letting x go to infinity.",
        "workingOut": "\\(x \\to \\infty \\implies y \\to 3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(y = -e^{3-x} + 3, Asymptote: y = 3\\)",
      "\\(-y = -e^{3-x} + 3, Asymptote: y = 3\\)",
      "\\(y = -e^{-3-x} + 3, Asymptote: y = 3\\)",
      "\\(y =  + 3, Asymptote: y = 3\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5d-q12c",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "It is known that \\( f'(x) = e^x + \\frac{2}{e} \\) and that \\( f(-1) = -1 \\). Find the exact value of \\( f(0) \\).",
    "hint": "Notice that 2/e is a constant. Its integral is (2/e)*x.",
    "solution": "Integrate the derivative:\n\\( f(x) = \\int \\left(e^x + 2e^{-1}\\right) \\, dx = e^x + 2e^{-1}x + C \\).\nUse the boundary condition \\( f(-1) = -1 \\):\n\\( -1 = e^{-1} + 2e^{-1}(-1) + C \\implies -1 = e^{-1} - 2e^{-1} + C \\implies -1 = -e^{-1} + C \\implies C = e^{-1} - 1 \\).\nSo, \\( f(x) = e^x + 2e^{-1}x + e^{-1} - 1 \\).\nNow evaluate at \\( x = 0 \\):\n\\( f(0) = e^0 + 2e^{-1}(0) + e^{-1} - 1 = 1 + 0 + e^{-1} - 1 = e^{-1} \\). Wait! Let's check: the boundary condition is: \\( C = e^{-1} - 1 \\). Then \\( f(0) = e^0 + C = 1 + (e^{-1} - 1) = e^{-1} \\). Let's write the answerText as \\( e^{-1} \\).",
    "solutionSteps": [
      {
        "explanation": "Integrate f'(x). Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(f(x) = e^x + 2e^{-1}x + C\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( f(0) = e^0 + 2e^{-1}(0) + e^{-1} - 1 = 1 + 0 + e^{-1} - 1 = e^{-1} \\). Wait! Let's check: the boundary condition is: \\( C = e^{-1} - 1 \\). Then \\( f(0) = e^0 + C = 1 + (e^{-1} - 1) = e^{-1} \\). Let's write the answerText as \\( e^{-1} \\).",
        "graphData": null
      },
      {
        "explanation": "Substitute x = -1 to find C. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(-1 = e^{-1} - 2e^{-1} + C \\implies C = e^{-1} - 1\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate f(0). Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(f(0) = e^0 + e^{-1} - 1 = e^{-1}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-e^{-1}\\)",
      "\\(e^{-1}\\)",
      "\\(e^{1}\\)",
      "\\(e^{-1+1}\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5d-q12d",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Given that \\( f'(x) = e^x - e^{-x} \\) and that \\( y = f(x) \\) passes through the origin, find the equation of \\( f(x) \\).",
    "hint": "Integrating -e^{-x} gives +e^{-x}. The origin is (0,0), so substitute x=0 and f(x)=0.",
    "solution": "Integrate the derivative:\n\\( f(x) = \\int (e^x - e^{-x}) \\, dx = e^x + e^{-x} + C \\).\nSince the curve passes through the origin \\( (0, 0) \\):\n\\( 0 = e^0 + e^{-0} + C \\implies 0 = 1 + 1 + C \\implies C = -2 \\).\nSo, \\( f(x) = e^x + e^{-x} - 2 \\).",
    "solutionSteps": [
      {
        "explanation": "Integrate f'(x). Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(f(x) = e^x + e^{-x} + C\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "So, \\( f(x) = e^x + e^{-x} - 2 \\).",
        "graphData": null
      },
      {
        "explanation": "Substitute (0,0) to find C. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(0 = 1 + 1 + C \\implies C = -2\\)",
        "graphData": null
      },
      {
        "explanation": "Formulate final equation. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(f(x) = e^x + e^{-x} - 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-f(x) = e^x + e^{-x} - 2\\)",
      "\\(f(x) = e^x + e^{x} - 2\\)",
      "\\(f(x) = e^x + e^{-x} - 2\\)",
      "\\(f(x) = e^x + e^{-x+1} - 2\\)"
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-5d-q13a",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 300,
    "question": "Evaluate the definite integral by first writing the integrand as a sum of powers of \\( e \\):\n\\( \\int_{0}^{1} e^x(3e^x - 1) \\, dx \\)",
    "hint": "Expand the brackets first to get 3e^{2x} - e^x. Evaluate carefully at lower limit 0.",
    "solution": "Expand the integrand:\n\\( e^x(3e^x - 1) = 3e^{2x} - e^x \\).\nIntegrate:\n\\( \\int (3e^{2x} - e^x) \\, dx = \\frac{3}{2}e^{2x} - e^x \\).\nEvaluate from 0 to 1:\n\\( \\left[ \\frac{3}{2}e^{2x} - e^x \\right]_{0}^{1} = \\left( \\frac{3}{2}e^2 - e \\right) - \\left( \\frac{3}{2}e^0 - e^0 \\right) = \\frac{3e^2 - 2e}{2} - \\left( \\frac{3}{2} - 1 \\right) = \\frac{3e^2 - 2e - 1}{2} \\).",
    "solutionSteps": [
      {
        "explanation": "Expand the integrand. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(3e^{2x} - e^x\\)",
        "graphData": null
      },
      {
        "explanation": "Find the antiderivative. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{3}{2}e^{2x} - e^x\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the limits of integration. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\left(\\dfrac{3}{2}e^2 - e\\right) - \\left(\\dfrac{3}{2} - 1\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify fractions. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{3e^2 - 2e - 1}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{3e^2 - 2e - 1}{2}\\)",
      "\\(\\dfrac{2}{3e^2 - 2e - 1}\\)",
      "\\(\\dfrac{3e^2 - 2e - 1}{2}\\)",
      "\\(\\dfrac{3e^4 - 2e - 1}{4}\\)"
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-5d-q13b",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 300,
    "question": "Evaluate the definite integral:\n\\( \\int_{-1}^{1} (e^x + 1)^2 \\, dx \\)",
    "hint": "Expand using perfect square identity, then integrate term-by-term.",
    "solution": "Expand the integrand:\n\\( (e^x + 1)^2 = e^{2x} + 2e^x + 1 \\).\nIntegrate:\n\\( \\int (e^{2x} + 2e^x + 1) \\, dx = \\frac{1}{2}e^{2x} + 2e^x + x \\).\nEvaluate from -1 to 1:\n\\( \\left[ \\frac{1}{2}e^{2x} + 2e^x + x \\right]_{-1}^{1} = \\left( \\frac{1}{2}e^2 + 2e + 1 \\right) - \\left( \\frac{1}{2}e^{-2} + 2e^{-1} - 1 \\right) \\)\n\\( = \\frac{e^2 - e^{-2}}{2} + 2e - 2e^{-1} + 2 \\).",
    "solutionSteps": [
      {
        "explanation": "Expand perfect square. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(e^{2x} + 2e^x + 1\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( = \\dfrac{e^2 - e^{-2}}{2} + 2e - 2e^{-1} + 2 \\).",
        "graphData": null
      },
      {
        "explanation": "Find antiderivative. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{1}{2}e^{2x} + 2e^x + x\\)",
        "graphData": null
      },
      {
        "explanation": "Apply limits and simplify. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{e^2 - e^{-2}}{2} + 2e - 2e^{-1} + 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{e^2 - e^{-2}}{2} + 2e - 2e^{-1} + 2\\)",
      "\\(\\dfrac{e^2 - e^{2}}{2} + 2e - 2e^{1} + 2\\)",
      "\\(\\dfrac{e^2 - e^{-2+1}}{2} + 2e - 2e^{-1+1} + 2\\)",
      "\\(\\dfrac{e^2 - e^{-2}}{2} + 2e - 2e^{-1} + 2\\)"
    ],
    "a": 3,
    "answer": "3"
  },
  {
    "id": "y12a-5d-q13c",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 300,
    "question": "Evaluate the definite integral:\n\\( \\int_{0}^{1} (e^x - 2)(e^{-x} + 2) \\, dx \\)",
    "hint": "Expand the terms using FOIL. Note that e^x * e^{-x} = e^0 = 1.",
    "solution": "Expand: \\( (e^x - 2)(e^{-x} + 2) = e^x \\cdot e^{-x} + 2e^x - 2e^{-x} - 4 = 1 + 2e^x - 2e^{-x} - 4 = 2e^x - 2e^{-x} - 3 \\).\nIntegrate:\n\\( \\int (2e^x - 2e^{-x} - 3) \\, dx = 2e^x + 2e^{-x} - 3x \\).\nEvaluate from 0 to 1:\n\\( \\left[ 2e^x + 2e^{-x} - 3x \\right]_{0}^{1} = (2e + 2e^{-1} - 3) - (2e^0 + 2e^0 - 0) \\)\n\\( = 2e + 2e^{-1} - 3 - 4 = 2e + 2e^{-1} - 7 \\). Wait, let's double check the integration: \\( \\int -2e^{-x} \\, dx = 2e^{-x} \\). Correct. At x = 0, \\( 2e^0 + 2e^0 = 2+2=4 \\). So the final answer is \\( 2e + 2e^{-1} - 7 \\). Let's write the answerText as \\( 2e + 2e^{-1} - 7 \\).",
    "solutionSteps": [
      {
        "explanation": "Expand the product of binomials. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(2e^x - 2e^{-x} - 3\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( = 2e + 2e^{-1} - 3 - 4 = 2e + 2e^{-1} - 7 \\). Wait, let's double check the integration: \\( \\int -2e^{-x} \\, dx = 2e^{-x} \\). Correct. At x = 0, \\( 2e^0 + 2e^0 = 2+2=4 \\). So the final answer is \\( 2e + 2e^{-1} - 7 \\). Let's write the answerText as \\( 2e + 2e^{-1} - 7 \\).",
        "graphData": null
      },
      {
        "explanation": "Find antiderivative. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(2e^x + 2e^{-x} - 3x\\)",
        "graphData": null
      },
      {
        "explanation": "Apply limits and simplify. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\((2e + 2e^{-1} - 3) - 4 = 2e + 2e^{-1} - 7\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(2e + 2e^{-1} - 7\\)",
      "\\(-2e + 2e^{-1} - 7\\)",
      "\\(2e + 2e^{1} - 7\\)",
      "\\(2e + 2e^{-1+1} - 7\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5d-q13d",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 300,
    "question": "Evaluate the definite integral:\n\\( \\int_{-1}^{1} (e^{2x} + e^{-2x})(e^{2x} - e^{-2x}) \\, dx \\)",
    "hint": "An odd function integrated from -a to a is always 0.",
    "solution": "Expand using difference of squares:\n\\( (e^{2x} + e^{-2x})(e^{2x} - e^{-2x}) = e^{4x} - e^{-4x} \\).\nIntegrate:\n\\( \\int (e^{4x} - e^{-4x}) \\, dx = \\frac{1}{4}e^{4x} + \\frac{1}{4}e^{-4x} \\).\nEvaluate from -1 to 1:\n\\( \\left[ \\frac{1}{4}e^{4x} + \\frac{1}{4}e^{-4x} \\right]_{-1}^{1} = \\left( \\frac{1}{4}e^4 + \\frac{1}{4}e^{-4} \\right) - \\left( \\frac{1}{4}e^{-4} + \\frac{1}{4}e^4 \\right) = 0 \\). Wait, let's verify if the integral is zero. Indeed, \\( f(x) = e^{4x} - e^{-4x} \\) is an odd function because \\( f(-x) = e^{-4x} - e^{4x} = -f(x) \\). The integral of any odd function over a symmetric interval \\( [-1, 1] \\) is always 0. So let's write answerText as 0.",
    "solutionSteps": [
      {
        "explanation": "Apply the difference of squares identity.",
        "workingOut": "\\(e^{4x} - e^{-4x}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\left[ \\dfrac{1}{4}e^{4x} + \\dfrac{1}{4}e^{-4x} \\right]_{-1}^{1} = \\left( \\dfrac{1}{4}e^4 + \\dfrac{1}{4}e^{-4} \\right) - \\left( \\dfrac{1}{4}e^{-4} + \\dfrac{1}{4}e^4 \\right) = 0 \\). Wait, let's verify if the integral is zero. Indeed, \\( f(x) = e^{4x} - e^{-4x} \\) is an odd function because \\( f(-x) = e^{-4x} - e^{4x} = -f(x) \\). The integral of any odd function over a symmetric interval \\( [-1, 1] \\) is always 0. So let's write answerText as 0.",
        "graphData": null
      },
      {
        "explanation": "Recognise that the integrand is an odd function.",
        "workingOut": "\\(f(-x) = -f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Integrate over symmetric interval [-1, 1].",
        "workingOut": "\\(0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-0\\)",
      "\\(0\\)",
      "\\(1\\)",
      "\\(-1\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5d-q13e",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 300,
    "question": "Evaluate the definite integral:\n\\( \\int_{0}^{1} \\frac{e^{4x} + e^x}{e^{2x}} \\, dx \\)",
    "hint": "Divide each term in the numerator by e^{2x} first.",
    "solution": "Simplify the integrand:\n\\( \\frac{e^{4x} + e^x}{e^{2x}} = e^{2x} + e^{-x} \\).\nIntegrate:\n\\( \\int (e^{2x} + e^{-x}) \\, dx = \\frac{1}{2}e^{2x} - e^{-x} \\).\nEvaluate from 0 to 1:\n\\( \\left[ \\frac{1}{2}e^{2x} - e^{-x} \\right]_{0}^{1} = \\left( \\frac{1}{2}e^2 - e^{-1} \\right) - \\left( \\frac{1}{2}e^0 - e^0 \\right) = \\frac{1}{2}e^2 - e^{-1} - \\left( \\frac{1}{2} - 1 \\right) = \\frac{1}{2}e^2 - e^{-1} + \\frac{1}{2} = \\frac{e^2 - 2e^{-1} + 1}{2} \\).",
    "solutionSteps": [
      {
        "explanation": "Simplify the rational expression. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(e^{2x} + e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\left[ \\dfrac{1}{2}e^{2x} - e^{-x} \\right]_{0}^{1} = \\left( \\dfrac{1}{2}e^2 - e^{-1} \\right) - \\left( \\dfrac{1}{2}e^0 - e^0 \\right) = \\dfrac{1}{2}e^2 - e^{-1} - \\left( \\dfrac{1}{2} - 1 \\right) = \\dfrac{1}{2}e^2 - e^{-1} + \\dfrac{1}{2} = \\dfrac{e^2 - 2e^{-1} + 1}{2} \\).",
        "graphData": null
      },
      {
        "explanation": "Find the antiderivative. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{1}{2}e^{2x} - e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate limits of integration. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\left(\\dfrac{1}{2}e^2 - e^{-1}\\right) - \\left(-\\dfrac{1}{2}\\right) = \\dfrac{e^2 - 2e^{-1} + 1}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{e^2 - 2e^{-1} + 1}{2}\\)",
      "\\(\\dfrac{e^2 - 2e^{1} + 1}{2}\\)",
      "\\(\\dfrac{e^2 - 2e^{-1} + 1}{2}\\)",
      "\\(\\dfrac{e^2 - 2e^{-1+1} + 1}{2}\\)"
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-5d-q13f",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 300,
    "question": "Evaluate the definite integral:\n\\( \\int_{-1}^{1} \\frac{e^x - 2}{e^{3x}} \\, dx \\)",
    "hint": "Split the fraction and use negative indices. Be careful with signs when substituting limits.",
    "solution": "Simplify integrand: \\( e^{-2x} - 2e^{-3x} \\).\nIntegrate:\n\\( \\int (e^{-2x} - 2e^{-3x}) \\, dx = -\\frac{1}{2}e^{-2x} + \\frac{2}{3}e^{-3x} \\).\nEvaluate from -1 to 1:\n\\( \\left[ -\\frac{1}{2}e^{-2x} + \\frac{2}{3}e^{-3x} \\right]_{-1}^{1} = \\left( -\\frac{1}{2}e^{-2} + \\frac{2}{3}e^{-3} \\right) - \\left( -\\frac{1}{2}e^2 + \\frac{2}{3}e^3 \\right) \\)\n\\( = \\frac{1}{2}e^2 - \\frac{1}{2}e^{-2} - \\frac{2}{3}e^3 + \\frac{2}{3}e^{-3} = \\frac{3e^2 - 3e^{-2} - 4e^3 + 4e^{-3}}{6} \\).",
    "solutionSteps": [
      {
        "explanation": "Simplify the fraction. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(e^{-2x} - 2e^{-3x}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( = \\dfrac{1}{2}e^2 - \\dfrac{1}{2}e^{-2} - \\dfrac{2}{3}e^3 + \\dfrac{2}{3}e^{-3} = \\dfrac{3e^2 - 3e^{-2} - 4e^3 + 4e^{-3}}{6} \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate to get antiderivative. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(-\\dfrac{1}{2}e^{-2x} + \\dfrac{2}{3}e^{-3x}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply limits and simplify fractions. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{3e^2 - 3e^{-2} - 4e^3 + 4e^{-3}}{6}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{3e^2 - 3e^{-2} - 4e^3 + 4e^{-3}}{6}\\)",
      "\\(\\dfrac{3e^2 - 3e^{2} - 4e^3 + 4e^{3}}{6}\\)",
      "\\(\\dfrac{3e^2 - 3e^{-2+1} - 4e^3 + 4e^{-3+1}}{6}\\)",
      "\\(\\dfrac{3e^2 - 3e^{-2} - 4e^3 + 4e^{-3}}{6}\\)"
    ],
    "a": 3,
    "answer": "3"
  },
  {
    "id": "y12a-5d-q14ai",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 300,
    "question": "Differentiate the function with respect to x:\n\\( y = e^{x^2+3} \\)",
    "hint": "Differentiate the exponent first, then multiply it by the original exponential term.",
    "solution": "Using the chain rule:\nLet \\( u = x^2 + 3 \\implies \\frac{du}{dx} = 2x \\).\n\\( \\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx} = e^u \\cdot 2x = 2x e^{x^2+3} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate the exponent. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{d}{dx}(x^2+3) = 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\dfrac{dy}{dx} = \\dfrac{dy}{du} \\cdot \\dfrac{du}{dx} = e^u \\cdot 2x = 2x e^{x^2+3} \\).",
        "graphData": null
      },
      {
        "explanation": "Apply the chain rule. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{dy}{dx} = 2x e^{x^2+3}\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(2x e^{x^2+3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(2x e^{x^2+3}\\)",
      "\\(-2x e^{x^2+3}\\)",
      "\\(2x e^{x^2+3+1}\\)",
      "\\(2x e^{x^2+2}\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5d-q14aii",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 300,
    "question": "Using the result from the previous differentiation, find the indefinite integral:\n\\( \\int 2x e^{x^2+3} \\, dx \\)",
    "hint": "Integration is the reverse process of differentiation.",
    "solution": "Since \\( \\frac{d}{dx} \\left( e^{x^2+3} \\right) = 2x e^{x^2+3} \\):\n\\( \\int 2x e^{x^2+3} \\, dx = e^{x^2+3} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Relate the integrand to the previous derivative result.",
        "workingOut": "\\(\\int \\dfrac{d}{dx}\\left(e^{x^2+3}\\right) \\, dx\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int 2x e^{x^2+3} \\, dx = e^{x^2+3} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Write the antiderivative. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(e^{x^2+3} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(e^{x^2+3} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-e^{x^2+3} + C\\)",
      "\\(e^{x^2+3} + C\\)",
      "\\(e^{x^2+3}\\)",
      "\\(e^{x^2+2} + C\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5d-q14bi",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 300,
    "question": "Differentiate the function with respect to x:\n\\( y = e^{x^2-2x+3} \\)",
    "hint": "Differentiate the quadratic exponent using standard rules.",
    "solution": "Using the chain rule:\nLet \\( u = x^2 - 2x + 3 \\implies \\frac{du}{dx} = 2x - 2 \\).\n\\( \\frac{dy}{dx} = (2x - 2)e^{x^2-2x+3} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate the inner function (exponent).",
        "workingOut": "\\(2x - 2\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\dfrac{dy}{dx} = (2x - 2)e^{x^2-2x+3} \\).",
        "graphData": null
      },
      {
        "explanation": "Multiply by the exponential function. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\((2x - 2)e^{x^2-2x+3}\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\((2x - 2)e^{x^2-2x+3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-(2x - 2)e^{x^2-2x+3}\\)",
      "\\((2x - 2)e^{x^2-2x+3+1}\\)",
      "\\((2x - 2)e^{x^2-2x+2}\\)",
      "\\((2x - 2)e^{x^2-2x+3}\\)"
    ],
    "a": 3,
    "answer": "3"
  },
  {
    "id": "y12a-5d-q14bii",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 300,
    "question": "Using the result that \\( \\frac{d}{dx} \\left(e^{x^2-2x+3}\\right) = (2x-2)e^{x^2-2x+3} \\), find the indefinite integral:\n\\( \\int (x - 1)e^{x^2-2x+3} \\, dx \\)",
    "hint": "Write (x - 1) as 0.5 * (2x - 2) and factor out the constant.",
    "solution": "Notice that \\( (x - 1)e^{x^2-2x+3} = \\frac{1}{2} (2x - 2)e^{x^2-2x+3} \\).\nTherefore:\n\\( \\int (x - 1)e^{x^2-2x+3} \\, dx = \\frac{1}{2} \\int (2x - 2)e^{x^2-2x+3} \\, dx = \\frac{1}{2}e^{x^2-2x+3} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Express the integrand in terms of the known derivative.",
        "workingOut": "\\(\\int (x-1)e^{x^2-2x+3} \\, dx = \\dfrac{1}{2} \\int (2x-2)e^{x^2-2x+3} \\, dx\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int (x - 1)e^{x^2-2x+3} \\, dx = \\dfrac{1}{2} \\int (2x - 2)e^{x^2-2x+3} \\, dx = \\dfrac{1}{2}e^{x^2-2x+3} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Apply the known derivative to integrate.",
        "workingOut": "\\(\\dfrac{1}{2}e^{x^2-2x+3} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(\\dfrac{1}{2}e^{x^2-2x+3} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{1}{2}e^{x^2-2x+3} + C\\)",
      "\\(2e^{x^2-2x+3} + C\\)",
      "\\(\\dfrac{1}{2}e^{x^2-2x+3} + C\\)",
      "\\(\\dfrac{1}{2}e^{x^2-2x+3}\\)"
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-5d-q14ci",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 300,
    "question": "Differentiate the function with respect to x:\n\\( y = e^{3x^2+4x+1} \\)",
    "hint": "Multiply the derivative of 3x^2 + 4x + 1 by the exponential function.",
    "solution": "Using the chain rule:\nLet \\( u = 3x^2 + 4x + 1 \\implies \\frac{du}{dx} = 6x + 4 \\).\n\\( \\frac{dy}{dx} = (6x + 4)e^{3x^2+4x+1} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate the quadratic exponent. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(6x + 4\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\dfrac{dy}{dx} = (6x + 4)e^{3x^2+4x+1} \\).",
        "graphData": null
      },
      {
        "explanation": "Apply chain rule. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\((6x + 4)e^{3x^2+4x+1}\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\((6x + 4)e^{3x^2+4x+1}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-(6x + 4)e^{3x^2+4x+1}\\)",
      "\\((6x + 4)e^{-3x^2+4x+1}\\)",
      "\\((6x + 4)e^{3x^2+4x+1}\\)",
      "\\((6x + 4)e^{3x^2+4x+1+1}\\)"
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-5d-q14cii",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 300,
    "question": "Using the result that \\( \\frac{d}{dx} \\left(e^{3x^2+4x+1}\\right) = (6x+4)e^{3x^2+4x+1} \\), find the indefinite integral:\n\\( \\int (3x + 2)e^{3x^2+4x+1} \\, dx \\)",
    "hint": "Identify that 3x + 2 is exactly half of 6x + 4.",
    "solution": "Notice that \\( 3x + 2 = \\frac{1}{2}(6x + 4) \\).\nTherefore:\n\\( \\int (3x + 2)e^{3x^2+4x+1} \\, dx = \\frac{1}{2} \\int (6x + 4)e^{3x^2+4x+1} \\, dx = \\frac{1}{2}e^{3x^2+4x+1} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Rewrite the integrand multiplier as a fraction of the known derivative.",
        "workingOut": "\\(\\dfrac{1}{2} (6x+4)\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int (3x + 2)e^{3x^2+4x+1} \\, dx = \\dfrac{1}{2} \\int (6x + 4)e^{3x^2+4x+1} \\, dx = \\dfrac{1}{2}e^{3x^2+4x+1} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{1}{2}e^{3x^2+4x+1} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(\\dfrac{1}{2}e^{3x^2+4x+1} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{1}{2}e^{3x^2+4x+1} + C\\)",
      "\\(2e^{3x^2+4x+1} + C\\)",
      "\\(\\dfrac{1}{2}e^{3x^2+4x+1}\\)",
      "\\(\\dfrac{1}{2}e^{3x^2+4x+1} + C\\)"
    ],
    "a": 3,
    "answer": "3"
  },
  {
    "id": "y12a-5d-q14di",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 300,
    "question": "Differentiate the function with respect to x:\n\\( y = e^{x^3} \\)",
    "hint": "Differentiate the cubic exponent using the power rule.",
    "solution": "Using the chain rule:\nLet \\( u = x^3 \\implies \\frac{du}{dx} = 3x^2 \\).\n\\( \\frac{dy}{dx} = 3x^2 e^{x^3} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate the exponent x^3. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(3x^2\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\dfrac{dy}{dx} = 3x^2 e^{x^3} \\).",
        "graphData": null
      },
      {
        "explanation": "Apply the chain rule formula. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(3x^2 e^{x^3}\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(3x^2 e^{x^3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-3x^2 e^{x^3}\\)",
      "\\(3x^2 e^{x^3}\\)",
      "\\(3x^2 e^{x^3+1}\\)",
      "\\(3x^2 e^{x^2}\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5d-q14dii",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 300,
    "question": "Using the result that \\( \\frac{d}{dx} \\left(e^{x^3}\\right) = 3x^2 e^{x^3} \\), evaluate the definite integral:\n\\( \\int_{-1}^{0} x^2 e^{x^3} \\, dx \\)",
    "hint": "Recall that (-1)^3 = -1, and e^0 = 1.",
    "solution": "Find the antiderivative first:\n\\( \\int x^2 e^{x^3} \\, dx = \\frac{1}{3} \\int 3x^2 e^{x^3} \\, dx = \\frac{1}{3}e^{x^3} \\).\nEvaluate from -1 to 0:\n\\( \\left[ \\frac{1}{3}e^{x^3} \\right]_{-1}^{0} = \\frac{1}{3}e^0 - \\frac{1}{3}e^{(-1)^3} = \\frac{1}{3} - \\frac{1}{3}e^{-1} = \\frac{1 - e^{-1}}{3} \\).",
    "solutionSteps": [
      {
        "explanation": "Find the antiderivative using the derivative result.",
        "workingOut": "\\(\\dfrac{1}{3}e^{x^3}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\left[ \\dfrac{1}{3}e^{x^3} \\right]_{-1}^{0} = \\dfrac{1}{3}e^0 - \\dfrac{1}{3}e^{(-1)^3} = \\dfrac{1}{3} - \\dfrac{1}{3}e^{-1} = \\dfrac{1 - e^{-1}}{3} \\).",
        "graphData": null
      },
      {
        "explanation": "Evaluate at the upper limit 0 and lower limit -1.",
        "workingOut": "\\(\\dfrac{1}{3}e^0 - \\dfrac{1}{3}e^{-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the final result. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{1 - e^{-1}}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\dfrac{1 - e^{-1}}{3}\\)",
      "\\(-\\dfrac{1 - e^{-1}}{3}\\)",
      "\\(\\dfrac{1 - e^{1}}{3}\\)",
      "\\(\\dfrac{1 - e^{-1+1}}{3}\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5d-q15a",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Write the integrand as a power of \\( e \\) and find the indefinite integral:\n\\( \\int \\frac{1}{(e^x)^3} \\, dx \\)",
    "hint": "Simplify (e^x)^3 to e^{3x}, then move it to the numerator.",
    "solution": "Simplify the integrand:\n\\( \\frac{1}{(e^x)^3} = \\frac{1}{e^{3x}} = e^{-3x} \\).\nIntegrate:\n\\( \\int e^{-3x} \\, dx = -\\frac{1}{3}e^{-3x} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Simplify the denominator using index laws.",
        "workingOut": "\\((e^x)^3 = e^{3x}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int e^{-3x} \\, dx = -\\dfrac{1}{3}e^{-3x} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Rewrite with a negative exponent. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(e^{-3x}\\)",
        "graphData": null
      },
      {
        "explanation": "Integrate dividing by the exponent coefficient (-3).",
        "workingOut": "\\(-\\dfrac{1}{3}e^{-3x} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{1}{3}e^{-3x} + C\\)",
      "\\(\\dfrac{1}{3}e^{-3x} + C\\)",
      "\\(-3e^{-3x} + C\\)",
      "\\(-\\dfrac{1}{3}e^{3x} + C\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5d-q15b",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Write the integrand as a power of \\( e \\) and find the indefinite integral:\n\\( \\int \\frac{1}{(e^x)^4} \\, dx \\)",
    "hint": "Negate the exponent 4x to move the term from the denominator to the numerator.",
    "solution": "Simplify the integrand:\n\\( \\frac{1}{(e^x)^4} = e^{-4x} \\).\nIntegrate:\n\\( \\int e^{-4x} \\, dx = -\\frac{1}{4}e^{-4x} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Simplify using index laws. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(e^{-4x}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int e^{-4x} \\, dx = -\\dfrac{1}{4}e^{-4x} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate using standard form. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(-\\dfrac{1}{4}e^{-4x} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(-\\dfrac{1}{4}e^{-4x} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\dfrac{1}{4}e^{-4x} + C\\)",
      "\\(-\\dfrac{1}{4}e^{-4x} + C\\)",
      "\\(-4e^{-4x} + C\\)",
      "\\(-\\dfrac{1}{4}e^{4x} + C\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5d-q15c",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Write the integrand as a power of \\( e \\) and find the indefinite integral:\n\\( \\int \\sqrt{e^{3x}} \\, dx \\)",
    "hint": "A square root is equivalent to raising to the power of 1/2. Multiply exponents.",
    "solution": "Write the square root as a fractional exponent:\n\\( \\sqrt{e^{3x}} = (e^{3x})^{\\frac{1}{2}} = e^{\\frac{3x}{2}} \\).\nIntegrate:\n\\( \\int e^{\\frac{3x}{2}} \\, dx = \\frac{1}{3/2}e^{\\frac{3x}{2}} + C = \\frac{2}{3}e^{\\frac{3x}{2}} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Rewrite the square root as a fractional exponent.",
        "workingOut": "\\((e^{3x})^{1/2} = e^{\\frac{3x}{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int e^{\\frac{3x}{2}} \\, dx = \\dfrac{1}{3/2}e^{\\frac{3x}{2}} + C = \\dfrac{2}{3}e^{\\frac{3x}{2}} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate by dividing by 3/2. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{2}{3}e^{\\frac{3x}{2}} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(\\dfrac{2}{3}e^{\\frac{3x}{2}} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{2}{3}e^{\\frac{3x}{2}} + C\\)",
      "\\(\\dfrac{3}{2}e^{\\frac{3x}{2}} + C\\)",
      "\\(\\dfrac{2}{3}e^{\\frac{3x}{2}} + C\\)",
      "\\(\\dfrac{2}{3}e^{\\frac{2x}{3}} + C\\)"
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-5d-q15d",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Write the integrand as a power of \\( e \\) and find the indefinite integral:\n\\( \\int \\sqrt[3]{e^{2x}} \\, dx \\)",
    "hint": "A cube root corresponds to the exponent 1/3.",
    "solution": "Write the cube root as a fractional exponent:\n\\( \\sqrt[3]{e^{2x}} = (e^{2x})^{\\frac{1}{3}} = e^{\\frac{2x}{3}} \\).\nIntegrate:\n\\( \\int e^{\\frac{2x}{3}} \\, dx = \\frac{1}{2/3}e^{\\frac{2x}{3}} + C = \\frac{3}{2}e^{\\frac{2x}{3}} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Rewrite the cube root as fractional exponent.",
        "workingOut": "\\(e^{\\frac{2x}{3}}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int e^{\\frac{2x}{3}} \\, dx = \\dfrac{1}{2/3}e^{\\frac{2x}{3}} + C = \\dfrac{3}{2}e^{\\frac{2x}{3}} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate by dividing by the x coefficient.",
        "workingOut": "\\(\\dfrac{3}{2}e^{\\frac{2x}{3}} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(\\dfrac{3}{2}e^{\\frac{2x}{3}} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{3}{2}e^{\\frac{2x}{3}} + C\\)",
      "\\(\\dfrac{2}{3}e^{\\frac{2x}{3}} + C\\)",
      "\\(\\dfrac{3}{2}e^{\\frac{3x}{2}} + C\\)",
      "\\(\\dfrac{3}{2}e^{\\frac{2x}{3}} + C\\)"
    ],
    "a": 3,
    "answer": "3"
  },
  {
    "id": "y12a-5d-q15e",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Write the integrand as a power of \\( e \\) and find the indefinite integral:\n\\( \\int \\frac{1}{\\sqrt{e^{3x}}} \\, dx \\)",
    "hint": "The square root in the denominator represents the power of -1/2.",
    "solution": "Rewrite using a negative fractional exponent:\n\\( \\frac{1}{\\sqrt{e^{3x}}} = \\frac{1}{e^{\\frac{3x}{2}}} = e^{-\\frac{3x}{2}} \\).\nIntegrate:\n\\( \\int e^{-\\frac{3x}{2}} \\, dx = -\\frac{2}{3}e^{-\\frac{3x}{2}} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Convert to a negative fractional power of e.",
        "workingOut": "\\(e^{-\\frac{3x}{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int e^{-\\frac{3x}{2}} \\, dx = -\\dfrac{2}{3}e^{-\\frac{3x}{2}} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate dividing by -3/2. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(-\\dfrac{2}{3}e^{-\\frac{3x}{2}} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(-\\dfrac{2}{3}e^{-\\frac{3x}{2}} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{2}{3}e^{-\\frac{3x}{2}} + C\\)",
      "\\(\\dfrac{2}{3}e^{-\\frac{3x}{2}} + C\\)",
      "\\(-\\dfrac{3}{2}e^{-\\frac{3x}{2}} + C\\)",
      "\\(-\\dfrac{2}{3}e^{\\frac{3x}{2}} + C\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5d-q15f",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Write the integrand as a power of \\( e \\) and find the indefinite integral:\n\\( \\int \\frac{1}{\\sqrt[3]{e^x}} \\, dx \\)",
    "hint": "A cube root in the denominator represents the power of -1/3.",
    "solution": "Rewrite using a negative fractional exponent:\n\\( \\frac{1}{\\sqrt[3]{e^x}} = \\frac{1}{e^{\\frac{x}{3}}} = e^{-\\frac{x}{3}} \\).\nIntegrate:\n\\( \\int e^{-\\frac{x}{3}} \\, dx = \\frac{1}{-1/3}e^{-\\frac{x}{3}} + C = -3e^{-\\frac{x}{3}} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Convert to negative fractional exponent.",
        "workingOut": "\\(e^{-\\frac{x}{3}}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int e^{-\\frac{x}{3}} \\, dx = \\dfrac{1}{-1/3}e^{-\\frac{x}{3}} + C = -3e^{-\\frac{x}{3}} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate dividing by the x coefficient.",
        "workingOut": "\\(-3e^{-\\frac{x}{3}} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(-3e^{-\\frac{x}{3}} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(3e^{-\\frac{x}{3}} + C\\)",
      "\\(-3e^{-\\frac{x}{3}} + C\\)",
      "\\(-3e^{-3x} + C\\)",
      "\\(-\\dfrac{1}{3}e^{-\\frac{x}{3}} + C\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5d-q16ai",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 300,
    "question": "Differentiate the function with respect to x:\n\\( y = x e^x - e^x \\)",
    "hint": "The derivative of u*v is u'*v + u*v'. Note that the e^x terms cancel out.",
    "solution": "Apply the product rule to the first term \\( x e^x \\):\n\\( \\frac{d}{dx}(x e^x) = 1 \\cdot e^x + x e^x = e^x + x e^x \\).\nNow subtract the derivative of \\( e^x \\):\n\\( \\frac{dy}{dx} = (e^x + x e^x) - e^x = x e^x \\).",
    "solutionSteps": [
      {
        "explanation": "Apply the product rule to the first term.",
        "workingOut": "\\(\\dfrac{d}{dx}(x e^x) = e^x + x e^x\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\dfrac{dy}{dx} = (e^x + x e^x) - e^x = x e^x \\).",
        "graphData": null
      },
      {
        "explanation": "Subtract the derivative of the second term.",
        "workingOut": "\\(e^x + x e^x - e^x = x e^x\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(x e^x\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-x e^x\\)",
      "\\(-(x e^x)\\)",
      "\\(x e^x\\)",
      "\\(2(x e^x)\\)"
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-5d-q16aii",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 300,
    "question": "Using the result that \\( \\frac{d}{dx}\\left( x e^x - e^x \\right) = x e^x \\), evaluate the definite integral:\n\\( \\int_{0}^{1} x e^x \\, dx \\)",
    "hint": "Substitute x = 1 and x = 0. Remember that e^0 = 1, so the lower limit value is -1.",
    "solution": "The antiderivative of \\( x e^x \\) is \\( x e^x - e^x \\).\nEvaluate from 0 to 1:\n\\( \\left[ x e^x - e^x \\right]_{0}^{1} = (1 \\cdot e^1 - e^1) - (0 \\cdot e^0 - e^0) = 0 - (-1) = 1 \\).",
    "solutionSteps": [
      {
        "explanation": "Identify the antiderivative from the differentiation step.",
        "workingOut": "\\(x e^x - e^x\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\left[ x e^x - e^x \\right]_{0}^{1} = (1 \\cdot e^1 - e^1) - (0 \\cdot e^0 - e^0) = 0 - (-1) = 1 \\).",
        "graphData": null
      },
      {
        "explanation": "Apply the integration limits. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\((e - e) - (0 - 1)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the final expression. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(0 - (-1) = 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-1\\)",
      "\\(2\\)",
      "\\(0\\)",
      "\\(1\\)"
    ],
    "a": 3,
    "answer": "3"
  },
  {
    "id": "y12a-5d-q16bi",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 300,
    "question": "Differentiate the function with respect to x:\n\\( y = x e^{-x} + e^{-x} \\)",
    "hint": "Carefully differentiate using product rule and chain rule.",
    "solution": "Apply the product rule to \\( x e^{-x} \\):\n\\( \\frac{d}{dx}(x e^{-x}) = 1 \\cdot e^{-x} + x (-e^{-x}) = e^{-x} - x e^{-x} \\).\nAdd the derivative of \\( e^{-x} \\):\n\\( \\frac{dy}{dx} = (e^{-x} - x e^{-x}) + (-e^{-x}) = -x e^{-x} \\).",
    "solutionSteps": [
      {
        "explanation": "Apply the product rule to the first term.",
        "workingOut": "\\(e^{-x} - x e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\dfrac{dy}{dx} = (e^{-x} - x e^{-x}) + (-e^{-x}) = -x e^{-x} \\).",
        "graphData": null
      },
      {
        "explanation": "Add the derivative of the second term. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(e^{-x} - x e^{-x} - e^{-x} = -x e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(-x e^{-x}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(x e^{-x}\\)",
      "\\(-x e^{-x}\\)",
      "\\(-x e^{x}\\)",
      "\\(-x e^{-x+1}\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5d-q16bii",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 300,
    "question": "Using the result that \\( \\frac{d}{dx}\\left( x e^{-x} + e^{-x} \\right) = -x e^{-x} \\), evaluate the definite integral:\n\\( \\int_{-1}^{0} x e^{-x} \\, dx \\)",
    "hint": "Notice that since d/dx(x*e^{-x} + e^{-x}) = -x*e^{-x}, the integral of x*e^{-x} is -(x*e^{-x} + e^{-x}).",
    "solution": "From the derivative, we know that \\( \\int -x e^{-x} \\, dx = x e^{-x} + e^{-x} \\), so:\n\\( \\int x e^{-x} \\, dx = -x e^{-x} - e^{-x} \\).\nEvaluate from -1 to 0:\n\\( \\left[ -x e^{-x} - e^{-x} \\right]_{-1}^{0} = (0 - e^0) - (-(-1)e^{-(-1)} - e^{-(-1)}) = -1 - (e - e) \\) Wait! Let's check: at upper limit x=0, \\( -0 \\cdot e^0 - e^0 = -1 \\). At lower limit x=-1, \\( -(-1)e^{-(-1)} - e^{-(-1)} = e^1 - e^1 = 0 \\). So \\( -1 - 0 = -1 \\). Let's write the answerText as -1. Wait, let's verify if \\( \\int_{-1}^0 x e^{-x} \\, dx = -1 \\). Since \\( y = -x e^{-x} - e^{-x} \\), at x = 0, y = -1. At x = -1, y = \\( -(-1)e^1 - e^1 = e - e = 0 \\). Yes, the evaluation is exactly -1. Let's write the answerText as -1.",
    "solutionSteps": [
      {
        "explanation": "Find the antiderivative of the term. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(-x e^{-x} - e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the upper limit x = 0. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(-1\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the lower limit x = -1. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(e - e = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the values. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(-1 - 0 = -1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-1\\)",
      "\\(1\\)",
      "\\(0\\)",
      "\\(-2\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5d-q17a",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 300,
    "question": "Simplify the integrand first, then determine the indefinite integral:\n\\( \\int \\frac{e^{2x} - e^{-2x}}{\\sqrt{e^x}} \\, dx \\)",
    "hint": "Write the denominator as e^{\\frac{x}{2}}, subtract this exponent from the numerator's exponents, then integrate.",
    "solution": "Simplify by dividing each term by \\( e^{\\frac{x}{2}} \\):\n\\( \\frac{e^{2x} - e^{-2x}}{e^{\\frac{x}{2}}} = e^{2x - \\frac{1}{2}x} - e^{-2x - \\frac{1}{2}x} = e^{\\frac{3x}{2}} - e^{-\\frac{5x}{2}} \\).\nNow integrate:\n\\( \\int \\left( e^{\\frac{3x}{2}} - e^{-\\frac{5x}{2}} \\right) \\, dx = \\frac{2}{3}e^{\\frac{3x}{2}} - \\left(-\\frac{2}{5}e^{-\\frac{5x}{2}}\\right) + C = \\frac{2}{3}e^{\\frac{3x}{2}} + \\frac{2}{5}e^{-\\frac{5x}{2}} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Divide both terms by e^{\\frac{x}{2}}. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(e^{\\frac{3x}{2}} - e^{-\\frac{5x}{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int \\left( e^{\\frac{3x}{2}} - e^{-\\frac{5x}{2}} \\right) \\, dx = \\dfrac{2}{3}e^{\\frac{3x}{2}} - \\left(-\\dfrac{2}{5}e^{-\\frac{5x}{2}}\\right) + C = \\dfrac{2}{3}e^{\\frac{3x}{2}} + \\dfrac{2}{5}e^{-\\frac{5x}{2}} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate each term individually. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{2}{3}e^{\\frac{3x}{2}} + \\dfrac{2}{5}e^{-\\frac{5x}{2}} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(\\dfrac{2}{3}e^{\\frac{3x}{2}} + \\dfrac{2}{5}e^{-\\frac{5x}{2}} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{2}{3}e^{\\frac{3x}{2}} + \\dfrac{2}{5}e^{-\\frac{5x}{2}} + C\\)",
      "\\(\\dfrac{3}{2}e^{\\frac{3x}{2}} + \\dfrac{2}{5}e^{-\\frac{5x}{2}} + C\\)",
      "\\(\\dfrac{2}{3}e^{\\frac{3x}{2}} + \\dfrac{2}{5}e^{-\\frac{5x}{2}} + C\\)",
      "\\(\\dfrac{4}{3}e^{\\frac{3x}{2}} + \\dfrac{2}{5}e^{-\\frac{5x}{2}} + C\\)"
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-5d-q17b",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 300,
    "question": "Simplify the integrand first, then determine the indefinite integral:\n\\( \\int \\frac{e^{2x} + e^{-2x}}{\\sqrt[3]{e^x}} \\, dx \\)",
    "hint": "Express the cube root as e^{\\frac{x}{3}} and subtract the exponent from the numerator before integrating.",
    "solution": "Simplify by dividing each term by \\( e^{\\frac{x}{3}} \\):\n\\( \\frac{e^{2x} + e^{-2x}}{e^{\\frac{x}{3}}} = e^{2x - \\frac{1}{3}x} + e^{-2x - \\frac{1}{3}x} = e^{\\frac{5x}{3}} + e^{-\\frac{7x}{3}} \\).\nNow integrate:\n\\( \\int \\left( e^{\\frac{5x}{3}} + e^{-\\frac{7x}{3}} \\right) \\, dx = \\frac{3}{5}e^{\\frac{5x}{3}} + \\left(-\\frac{3}{7}e^{-\\frac{7x}{3}}\\right) + C = \\frac{3}{5}e^{\\frac{5x}{3}} - \\frac{3}{7}e^{-\\frac{7x}{3}} + C \\).",
    "solutionSteps": [
      {
        "explanation": "Divide both terms by e^{\\frac{x}{3}}. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(e^{\\frac{5x}{3}} + e^{-\\frac{7x}{3}}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.",
        "workingOut": "\\( \\int \\left( e^{\\frac{5x}{3}} + e^{-\\frac{7x}{3}} \\right) \\, dx = \\dfrac{3}{5}e^{\\frac{5x}{3}} + \\left(-\\dfrac{3}{7}e^{-\\frac{7x}{3}}\\right) + C = \\dfrac{3}{5}e^{\\frac{5x}{3}} - \\dfrac{3}{7}e^{-\\frac{7x}{3}} + C \\).",
        "graphData": null
      },
      {
        "explanation": "Integrate each term individually. Work carefully with the exponential coefficients and simplify fully before moving on.",
        "workingOut": "\\(\\dfrac{3}{5}e^{\\frac{5x}{3}} - \\dfrac{3}{7}e^{-\\frac{7x}{3}} + C\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified answer and confirm it matches one of the options.",
        "workingOut": "\\(\\dfrac{3}{5}e^{\\frac{5x}{3}} - \\dfrac{3}{7}e^{-\\frac{7x}{3}} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-\\dfrac{3}{5}e^{\\frac{5x}{3}} - \\dfrac{3}{7}e^{-\\frac{7x}{3}} + C\\)",
      "\\(\\dfrac{5}{3}e^{\\frac{5x}{3}} - \\dfrac{3}{7}e^{-\\frac{7x}{3}} + C\\)",
      "\\(\\dfrac{6}{5}e^{\\frac{5x}{3}} - \\dfrac{3}{7}e^{-\\frac{7x}{3}} + C\\)",
      "\\(\\dfrac{3}{5}e^{\\frac{5x}{3}} - \\dfrac{3}{7}e^{-\\frac{7x}{3}} + C\\)"
    ],
    "a": 3,
    "answer": "3"
  },
  {
    "id": "y12a-5d-q18a",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "Which calculation correctly shows that \\(f(x)=x e^{-x^{2}}\\) is an odd function?",
    "hint": "Compute \\(f(-x)\\) carefully: \\((-x)^{2}=x^{2}\\).",
    "solution": "The correct antiderivative / value is \\(f(-x)=(-x)e^{-(-x)^{2}}=-x e^{-x^{2}}=-f(x)\\).",
    "solutionSteps": [
      {
        "explanation": "A function is odd if \\(f(-x)=-f(x)\\) for all \\(x\\) in the domain. Substitute \\(-x\\) into \\(f(x)=x e^{-x^{2}}\\).",
        "workingOut": "\\(f(-x)=(-x)\\,e^{-(-x)^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the exponent: \\((-x)^{2}=x^{2}\\), so \\(e^{-(-x)^{2}}=e^{-x^{2}}\\).",
        "workingOut": "\\(f(-x)=(-x)e^{-x^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the minus sign: \\(f(-x)=-x e^{-x^{2}}=-f(x)\\). Hence \\(f\\) is odd.",
        "workingOut": "\\(f(-x)=-f(x)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(f(-x)=(-x)e^{-(-x)^{2}}=x e^{-x^{2}}=f(x)\\)",
      "\\(f(-x)=(-x)e^{-(-x)^{2}}=-x e^{-x^{2}}=-f(x)\\)",
      "\\(f(-x)=x e^{-x^{2}}=f(x)\\)",
      "\\(f(-x)=(-x)e^{x^{2}}=-f(x)\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5d-q18b",
    "topicId": "y12a-5D",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "Hence evaluate \\(\\displaystyle\\int_{-\\sqrt{3}}^{\\sqrt{3}} x e^{-x^{2}}\\,dx\\) without finding a primitive.",
    "hint": "Odd integrand over a symmetric interval.",
    "solution": "The correct antiderivative / value is \\(0\\).",
    "solutionSteps": [
      {
        "explanation": "From part (a), \\(f(x)=x e^{-x^{2}}\\) is odd. The interval \\([-\\sqrt{3},\\sqrt{3}]\\) is symmetric about 0.",
        "workingOut": "\\(f\\text{ odd on }[-a,a]\\)",
        "graphData": null
      },
      {
        "explanation": "For an integrable odd function, \\(\\int_{-a}^{a}f(x)\\,dx=0\\). Here \\(a=\\sqrt{3}\\).",
        "workingOut": "\\(\\int_{-\\sqrt{3}}^{\\sqrt{3}}f(x)\\,dx=0\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore the definite integral equals 0 without computing an antiderivative explicitly.",
        "workingOut": "\\(0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(2\\)",
      "\\(1\\)",
      "\\(0\\)",
      "\\(\\sqrt{3}\\)"
    ],
    "a": 2,
    "answer": "2"
  }
];
