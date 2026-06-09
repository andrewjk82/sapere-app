export const Y12A_CH5B_QUESTIONS = [
  {
    "id": "y12a-5b-q1a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function using the standard form \\( \\frac{d}{dx} e^{ax+b} = a e^{ax+b} \\):\n\\( y = e^{6x} \\)",
    "a": "6e^(6x)",
    "solution": "Using the derivative of \\( e^{kx} \\) which is \\( k e^{kx} \\):\n\\( y' = 6e^{6x} \\).",
    "solutionSteps": [
      {
        "explanation": "Apply the standard form with a = 6, b = 0",
        "workingOut": "\\frac{dy}{dx} = 6 \\cdot e^{6x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Multiply the function by the derivative of the power 6x.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q1b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function:\n\\( y = 3e^{4x} \\)",
    "a": "12e^(4x)",
    "solution": "Using the constant multiple rule and standard form:\n\\( y' = 3 \\cdot (4e^{4x}) = 12e^{4x} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate the exponential term",
        "workingOut": "\\frac{d}{dx}(e^{4x}) = 4e^{4x}"
      },
      {
        "explanation": "Multiply by the coefficient 3",
        "workingOut": "3 \\cdot 4e^{4x} = 12e^{4x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Differentiate e^(4x) to get 4e^(4x), then multiply by 3.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q1c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function:\n\\( y = -e^{6x} \\)",
    "a": "-6e^(6x)",
    "solution": "Using the constant multiple rule with coefficient \\( -1 \\):\n\\( y' = -(6e^{6x}) = -6e^{6x} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate e^(6x) and keep the negative sign",
        "workingOut": "y' = -6e^{6x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Multiply the derivative of e^(6x) by -1.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q1d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function:\n\\( y = 8e^{\\frac{1}{4}x} \\)",
    "a": "2e^(x/4)",
    "solution": "Using the constant multiple rule:\n\\( y' = 8 \\cdot \\left(\\frac{1}{4}e^{\\frac{1}{4}x}\\right) = 2e^{\\frac{1}{4}x} \\).",
    "solutionSteps": [
      {
        "explanation": "Multiply the exponent coefficient by the leading coefficient",
        "workingOut": "8 \\cdot \\frac{1}{4} = 2"
      },
      {
        "explanation": "State the derivative",
        "workingOut": "2e^{\\frac{1}{4}x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "The derivative of e^(x/4) is 1/4 * e^(x/4). Multiply this by 8.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q1e",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function:\n\\( y = -e^{-5x} \\)",
    "a": "5e^(-5x)",
    "solution": "Using the chain rule:\n\\( y' = -(-5e^{-5x}) = 5e^{-5x} \\).",
    "solutionSteps": [
      {
        "explanation": "Multiply the leading coefficient -1 by the exponent derivative -5",
        "workingOut": "-1 \\cdot (-5) = 5"
      },
      {
        "explanation": "Write down the derivative",
        "workingOut": "5e^{-5x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "The derivative of the exponent -5x is -5. Multiply -1 by -5.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q1f",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function:\n\\( y = -\\frac{1}{3}e^{-3x} \\)",
    "a": "e^(-3x)",
    "solution": "Using the chain rule:\n\\( y' = -\\frac{1}{3} \\cdot (-3e^{-3x}) = e^{-3x} \\).",
    "solutionSteps": [
      {
        "explanation": "Multiply coefficients",
        "workingOut": "\\left(-\\frac{1}{3}\\right) \\cdot (-3) = 1"
      },
      {
        "explanation": "State the derivative",
        "workingOut": "e^{-3x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Multiply -1/3 by the derivative of the exponent (-3).",
    "graphData": null
  },
  {
    "id": "y12a-5b-q2a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function using standard rules:\n\\( y = e^{x-5} \\)",
    "a": "e^(x-5)",
    "solution": "Using \\( \\frac{d}{dx} e^{f(x)} = f'(x)e^{f(x)} \\), where \\( f(x) = x - 5 \\implies f'(x) = 1 \\):\n\\( y' = 1 \\cdot e^{x-5} = e^{x-5} \\).",
    "solutionSteps": [
      {
        "explanation": "Find derivative of exponent",
        "workingOut": "\\frac{d}{dx}(x-5) = 1"
      },
      {
        "explanation": "Write down the derivative",
        "workingOut": "y' = e^{x-5}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "The derivative of x - 5 is 1, so the derivative is the same as the original function.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q2b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function:\n\\( y = e^{4x+3} \\)",
    "a": "4e^(4x+3)",
    "solution": "The derivative of the exponent \\( 4x + 3 \\) is \\( 4 \\).\nTherefore:\n\\( y' = 4e^{4x+3} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate exponent",
        "workingOut": "\\frac{d}{dx}(4x+3) = 4"
      },
      {
        "explanation": "Write the derivative",
        "workingOut": "y' = 4e^{4x+3}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Multiply the original function by the derivative of the exponent 4x + 3.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q2c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function:\n\\( y = e^{3x-2} \\)",
    "a": "3e^(3x-2)",
    "solution": "The derivative of the exponent \\( 3x - 2 \\) is \\( 3 \\).\nTherefore:\n\\( y' = 3e^{3x-2} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate exponent",
        "workingOut": "\\frac{d}{dx}(3x-2) = 3"
      },
      {
        "explanation": "Write the derivative",
        "workingOut": "y' = 3e^{3x-2}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Multiply by the derivative of the power.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q2d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function:\n\\( y = e^{5x-4} \\)",
    "a": "5e^(5x-4)",
    "solution": "The derivative of \\( 5x - 4 \\) is \\( 5 \\):\n\\( y' = 5e^{5x-4} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate exponent",
        "workingOut": "\\frac{d}{dx}(5x-4) = 5"
      },
      {
        "explanation": "Write the derivative",
        "workingOut": "y' = 5e^{5x-4}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "The derivative coefficient is 5.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q2e",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function:\n\\( y = e^{-2x+5} \\)",
    "a": "-2e^(-2x+5)",
    "solution": "The derivative of the exponent \\( -2x + 5 \\) is \\( -2 \\).\nTherefore:\n\\( y' = -2e^{-2x+5} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate exponent",
        "workingOut": "\\frac{d}{dx}(-2x+5) = -2"
      },
      {
        "explanation": "Write the derivative",
        "workingOut": "y' = -2e^{-2x+5}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Multiply by the derivative of the power, which is -2.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q2f",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function:\n\\( y = e^{-3x-6} \\)",
    "a": "-3e^(-3x-6)",
    "solution": "The derivative of the exponent \\( -3x - 6 \\) is \\( -3 \\).\nTherefore:\n\\( y' = -3e^{-3x-6} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate exponent",
        "workingOut": "\\frac{d}{dx}(-3x-6) = -3"
      },
      {
        "explanation": "Write the derivative",
        "workingOut": "y' = -3e^{-3x-6}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "The derivative of the exponent -3x-6 is -3.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q3a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function:\n\\( y = e^x - e^{-x} \\)",
    "a": "e^x+e^(-x)",
    "solution": "Differentiate each term separately:\n\\( \\frac{d}{dx}(e^x) = e^x \\)\n\\( \\frac{d}{dx}(-e^{-x}) = -(-e^{-x}) = e^{-x} \\)\nCombining gives:\n\\( y' = e^x + e^{-x} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate first term",
        "workingOut": "\\frac{d}{dx}(e^x) = e^x"
      },
      {
        "explanation": "Differentiate second term using chain rule",
        "workingOut": "\\frac{d}{dx}(-e^{-x}) = e^{-x}"
      },
      {
        "explanation": "Add the derivatives",
        "workingOut": "e^x + e^{-x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Differentiate each term separately. The derivative of -e^(-x) is e^(-x).",
    "graphData": null
  },
  {
    "id": "y12a-5b-q3b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function:\n\\( y = e^{3x} + e^{-2x} \\)",
    "a": "3e^(3x)-2e^(-2x)",
    "solution": "Differentiate each term:\n\\( \\frac{d}{dx}(e^{3x}) = 3e^{3x} \\)\n\\( \\frac{d}{dx}(e^{-2x}) = -2e^{-2x} \\)\nCombining gives:\n\\( y' = 3e^{3x} - 2e^{-2x} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate first term",
        "workingOut": "3e^{3x}"
      },
      {
        "explanation": "Differentiate second term",
        "workingOut": "-2e^{-2x}"
      },
      {
        "explanation": "Write combined derivative",
        "workingOut": "3e^{3x} - 2e^{-2x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Apply the chain rule to each term independently.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q3c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function:\n\\( y = \\frac{e^x + e^{-x}}{2} \\)",
    "a": "(e^x-e^(-x))/2",
    "solution": "Rewrite as \\( y = \\frac{1}{2}(e^x + e^{-x}) \\).\nDifferentiating gives:\n\\( y' = \\frac{1}{2}(e^x - e^{-x}) = \\frac{e^x - e^{-x}}{2} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate the terms inside the parentheses",
        "workingOut": "\\frac{d}{dx}(e^x + e^{-x}) = e^x - e^{-x}"
      },
      {
        "explanation": "Keep the constant multiple 1/2",
        "workingOut": "\\frac{e^x - e^{-x}}{2}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Keep the constant 1/2 outside and differentiate e^x + e^(-x).",
    "graphData": null
  },
  {
    "id": "y12a-5b-q3d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function:\n\\( y = \\frac{e^x - e^{-x}}{4} \\)",
    "a": "(e^x+e^(-x))/4",
    "solution": "Rewrite as \\( y = \\frac{1}{4}(e^x - e^{-x}) \\).\nDifferentiating gives:\n\\( y' = \\frac{1}{4}(e^x - (-e^{-x})) = \\frac{e^x + e^{-x}}{4} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate inside terms",
        "workingOut": "\\frac{d}{dx}(e^x - e^{-x}) = e^x + e^{-x}"
      },
      {
        "explanation": "Multiply by the constant factor 1/4",
        "workingOut": "\\frac{e^x + e^{-x}}{4}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Differentiate the numerator, keeping the denominator of 4 constant.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q3e",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function:\n\\( y = \\frac{e^{3x}}{3} + \\frac{e^{4x}}{4} \\)",
    "a": "e^(3x)+e^(4x)",
    "solution": "Differentiate each fraction:\n\\( \\frac{d}{dx}\\left(\\frac{e^{3x}}{3}\\right) = \\frac{3e^{3x}}{3} = e^{3x} \\)\n\\( \\frac{d}{dx}\\left(\\frac{e^{4x}}{4}\\right) = \\frac{4e^{4x}}{4} = e^{4x} \\)\nThus, \\( y' = e^{3x} + e^{4x} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate the first term",
        "workingOut": "e^{3x}"
      },
      {
        "explanation": "Differentiate the second term",
        "workingOut": "e^{4x}"
      },
      {
        "explanation": "Sum the results",
        "workingOut": "e^{3x} + e^{4x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "The derivative of e^(kx)/k is simply e^(kx) because the k cancels.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q3f",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate the function:\n\\( y = \\frac{e^{5x}}{5} - \\frac{e^{6x}}{6} \\)",
    "a": "e^(5x)-e^(6x)",
    "solution": "Differentiate each fraction:\n\\( \\frac{d}{dx}\\left(\\frac{e^{5x}}{5}\\right) = e^{5x} \\)\n\\( \\frac{d}{dx}\\left(\\frac{e^{6x}}{6}\\right) = e^{6x} \\)\nThus, \\( y' = e^{5x} - e^{6x} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate terms separately",
        "workingOut": "e^{5x} \\text{ and } e^{6x}"
      },
      {
        "explanation": "Combine the terms",
        "workingOut": "e^{5x} - e^{6x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Differentiate each term individually, canceling out the denominators.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q4a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Simplify the expression as a single power of \\( e \\), then differentiate:\n\\( y = e^{2x} \\times e^{3x} \\)",
    "a": "5e^(5x)",
    "solution": "Simplify first:\n\\( y = e^{2x + 3x} = e^{5x} \\).\nDifferentiate:\n\\( y' = 5e^{5x} \\).",
    "solutionSteps": [
      {
        "explanation": "Simplify using index laws",
        "workingOut": "y = e^{5x}"
      },
      {
        "explanation": "Differentiate the simplified function",
        "workingOut": "y' = 5e^{5x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Add the exponents first, then apply standard differentiation.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q4b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Simplify the expression as a single power of \\( e \\), then differentiate:\n\\( y = e^{4x} \\times e^{-2x} \\)",
    "a": "2e^(2x)",
    "solution": "Simplify first:\n\\( y = e^{4x - 2x} = e^{2x} \\).\nDifferentiate:\n\\( y' = 2e^{2x} \\).",
    "solutionSteps": [
      {
        "explanation": "Simplify by adding exponents",
        "workingOut": "y = e^{2x}"
      },
      {
        "explanation": "Differentiate",
        "workingOut": "y' = 2e^{2x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Add 4x and -2x to simplify the power first.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q4c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Simplify the expression as a single power of \\( e \\), then differentiate:\n\\( y = (e^{2x})^3 \\)",
    "a": "6e^(6x)",
    "solution": "Simplify first using the power of a power index law:\n\\( y = e^{2x \\times 3} = e^{6x} \\).\nDifferentiate:\n\\( y' = 6e^{6x} \\).",
    "solutionSteps": [
      {
        "explanation": "Multiply exponents",
        "workingOut": "y = e^{6x}"
      },
      {
        "explanation": "Differentiate",
        "workingOut": "y' = 6e^{6x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Multiply 2x by 3 to simplify the power first.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q4d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Simplify the expression as a single power of \\( e \\), then differentiate:\n\\( y = (e^{3x})^2 \\)",
    "a": "6e^(6x)",
    "solution": "Simplify first:\n\\( y = e^{3x \\times 2} = e^{6x} \\).\nDifferentiate:\n\\( y' = 6e^{6x} \\).",
    "solutionSteps": [
      {
        "explanation": "Simplify index",
        "workingOut": "y = e^{6x}"
      },
      {
        "explanation": "Differentiate",
        "workingOut": "y' = 6e^{6x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Multiply the exponents first.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q4e",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Simplify the expression as a single power of \\( e \\), then differentiate:\n\\( y = \\frac{e^{5x}}{e^{2x}} \\)",
    "a": "3e^(3x)",
    "solution": "Simplify first using division index law:\n\\( y = e^{5x - 2x} = e^{3x} \\).\nDifferentiate:\n\\( y' = 3e^{3x} \\).",
    "solutionSteps": [
      {
        "explanation": "Subtract exponents",
        "workingOut": "y = e^{3x}"
      },
      {
        "explanation": "Differentiate",
        "workingOut": "y' = 3e^{3x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Subtract the power in the denominator from the numerator.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q4f",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Simplify the expression as a single power of \\( e \\), then differentiate:\n\\( y = \\frac{e^{2x}}{e^{4x}} \\)",
    "a": "-2e^(-2x)",
    "solution": "Simplify first:\n\\( y = e^{2x - 4x} = e^{-2x} \\).\nDifferentiate:\n\\( y' = -2e^{-2x} \\).",
    "solutionSteps": [
      {
        "explanation": "Subtract exponents",
        "workingOut": "y = e^{-2x}"
      },
      {
        "explanation": "Differentiate",
        "workingOut": "y' = -2e^{-2x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Subtract 4x from 2x, then differentiate the negative exponent.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q4g",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Simplify the expression as a single power of \\( e \\), then differentiate:\n\\( y = \\frac{1}{e^{4x}} \\)",
    "a": "-4e^(-4x)",
    "solution": "Simplify first:\n\\( y = e^{-4x} \\).\nDifferentiate:\n\\( y' = -4e^{-4x} \\).",
    "solutionSteps": [
      {
        "explanation": "Express with a negative exponent",
        "workingOut": "y = e^{-4x}"
      },
      {
        "explanation": "Differentiate",
        "workingOut": "y' = -4e^{-4x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Rewrite as e^(-4x) first.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q4h",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Simplify the expression as a single power of \\( e \\), then differentiate:\n\\( y = \\frac{1}{e^{6x}} \\)",
    "a": "-6e^(-6x)",
    "solution": "Simplify first:\n\\( y = e^{-6x} \\).\nDifferentiate:\n\\( y' = -6e^{-6x} \\).",
    "solutionSteps": [
      {
        "explanation": "Rewrite index",
        "workingOut": "y = e^{-6x}"
      },
      {
        "explanation": "Differentiate",
        "workingOut": "y' = -6e^{-6x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Rewrite with a negative exponent, then differentiate.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q5ai",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "For the function \\( f(x) = e^{-x} \\), find its first four derivatives: \\( f'(x) \\), \\( f''(x) \\), \\( f'''(x) \\), and \\( f^{(4)}(x) \\).",
    "a": "f'(x) = -e^(-x), f''(x) = e^(-x), f'''(x) = -e^(-x), f^(4)(x) = e^(-x)",
    "solution": "Differentiating sequentially:\n\\( f'(x) = -e^{-x} \\)\n\\( f''(x) = -(-e^{-x}) = e^{-x} \\)\n\\( f'''(x) = -e^{-x} \\)\n\\( f^{(4)}(x) = e^{-x} \\).",
    "solutionSteps": [
      {
        "explanation": "Calculate first derivative",
        "workingOut": "f'(x) = -e^{-x}"
      },
      {
        "explanation": "Calculate second derivative",
        "workingOut": "f''(x) = e^{-x}"
      },
      {
        "explanation": "Calculate third derivative",
        "workingOut": "f'''(x) = -e^{-x}"
      },
      {
        "explanation": "Calculate fourth derivative",
        "workingOut": "f^{(4)}(x) = e^{-x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Every time you differentiate, multiply the coefficient by -1.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q5aii",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "What is the pattern in the successive derivatives of \\( f(x) = e^{-x} \\)?",
    "a": "They alternate sign: odd derivatives are negative and even derivatives are positive",
    "opts": [
      "They alternate sign: odd derivatives are negative and even derivatives are positive",
      "They are always positive",
      "They are always negative",
      "They increase by factor of 2 every step"
    ],
    "solution": "Odd-order derivatives (1st, 3rd, ...) have a negative coefficient: \\( -e^{-x} \\).\nEven-order derivatives (2nd, 4th, ...) have a positive coefficient: \\( e^{-x} \\).",
    "solutionSteps": [
      {
        "explanation": "Observe coefficients",
        "workingOut": "-1, 1, -1, 1, ..."
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Look at the signs of f'(x), f''(x), f'''(x), etc.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q5bi",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "For the function \\( f(x) = e^{3x} \\), find its first four derivatives: \\( f'(x) \\), \\( f''(x) \\), \\( f'''(x) \\), and \\( f^{(4)}(x) \\).",
    "a": "f'(x) = 3e^(3x), f''(x) = 9e^(3x), f'''(x) = 27e^(3x), f^(4)(x) = 81e^(3x)",
    "solution": "Each differentiation multiplies the previous function by 3:\n\\( f'(x) = 3e^{3x} \\)\n\\( f''(x) = 9e^{3x} \\)\n\\( f'''(x) = 27e^{3x} \\)\n\\( f^{(4)}(x) = 81e^{3x} \\).",
    "solutionSteps": [
      {
        "explanation": "Multiply by 3 for each derivative",
        "workingOut": "3e^{3x}, \\quad 9e^{3x}, \\quad 27e^{3x}, \\quad 81e^{3x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Multiply by 3 at each step.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q5bii",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "State the general pattern for the \\( n \\)-th derivative of \\( f(x) = e^{3x} \\).",
    "a": "f^(n)(x) = 3^n * e^(3x)",
    "opts": [
      "f^(n)(x) = 3^n * e^(3x)",
      "f^(n)(x) = 3n * e^(3x)",
      "f^(n)(x) = n^3 * e^(3x)",
      "f^(n)(x) = 3^(n-1) * e^(3x)"
    ],
    "solution": "Since each derivative multiplies the previous expression by 3, the coefficient after \\( n \\) derivatives is \\( 3^n \\).\nTherefore, the general formula is \\( f^{(n)}(x) = 3^n e^{3x} \\).",
    "solutionSteps": [
      {
        "explanation": "Summarize coefficients",
        "workingOut": "3^1, 3^2, 3^3, 3^4 \\implies 3^n"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "The coefficient grows as powers of 3: 3, 9, 27, 81...",
    "graphData": null
  },
  {
    "id": "y12a-5b-q6a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand the brackets and differentiate the function:\n\\( y = e^x(e^x + 2) \\)",
    "a": "2e^(2x)+2e^x",
    "solution": "Expand first:\n\\( y = e^x \\cdot e^x + 2e^x = e^{2x} + 2e^x \\).\nDifferentiate:\n\\( y' = 2e^{2x} + 2e^x \\).",
    "solutionSteps": [
      {
        "explanation": "Expand the expression",
        "workingOut": "y = e^{2x} + 2e^x"
      },
      {
        "explanation": "Differentiate each term",
        "workingOut": "y' = 2e^{2x} + 2e^x"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Expand the brackets to get e^(2x) + 2e^x, then differentiate.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q6b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand the brackets and differentiate the function:\n\\( y = e^{-x}(3e^{-x} - 2) \\)",
    "a": "-6e^(-2x)+2e^(-x)",
    "solution": "Expand first:\n\\( y = 3e^{-x} \\cdot e^{-x} - 2e^{-x} = 3e^{-2x} - 2e^{-x} \\).\nDifferentiate:\n\\( y' = 3(-2e^{-2x}) - 2(-e^{-x}) = -6e^{-2x} + 2e^{-x} \\).",
    "solutionSteps": [
      {
        "explanation": "Expand",
        "workingOut": "y = 3e^{-2x} - 2e^{-x}"
      },
      {
        "explanation": "Differentiate",
        "workingOut": "y' = -6e^{-2x} + 2e^{-x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Multiply e^(-x) by each term inside. Remember that e^(-x) * e^(-x) = e^(-2x).",
    "graphData": null
  },
  {
    "id": "y12a-5b-q6c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand the brackets and differentiate the function:\n\\( y = (e^x + 2)^2 \\)",
    "a": "2e^(2x)+4e^x",
    "solution": "Expand using binomial expansion:\n\\( y = (e^x)^2 + 2(2)(e^x) + 4 = e^{2x} + 4e^x + 4 \\).\nDifferentiate:\n\\( y' = 2e^{2x} + 4e^x \\).",
    "solutionSteps": [
      {
        "explanation": "Expand binomial",
        "workingOut": "y = e^{2x} + 4e^x + 4"
      },
      {
        "explanation": "Differentiate term-by-term",
        "workingOut": "y' = 2e^{2x} + 4e^x"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Expand using (A+B)^2 = A^2 + 2AB + B^2, then differentiate.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q6d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand the brackets and differentiate the function:\n\\( y = (e^x - 3)^2 \\)",
    "a": "2e^(2x)-6e^x",
    "solution": "Expand:\n\\( y = e^{2x} - 6e^x + 9 \\).\nDifferentiate:\n\\( y' = 2e^{2x} - 6e^x \\).",
    "solutionSteps": [
      {
        "explanation": "Expand binomial",
        "workingOut": "y = e^{2x} - 6e^x + 9"
      },
      {
        "explanation": "Differentiate",
        "workingOut": "y' = 2e^{2x} - 6e^x"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Expand the square first, then differentiate.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q6e",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand the brackets and differentiate the function:\n\\( y = (e^x - 2)^2 \\)",
    "a": "2e^(2x)-4e^x",
    "solution": "Expand:\n\\( y = e^{2x} - 4e^x + 4 \\).\nDifferentiate:\n\\( y' = 2e^{2x} - 4e^x \\).",
    "solutionSteps": [
      {
        "explanation": "Expand",
        "workingOut": "y = e^{2x} - 4e^x + 4"
      },
      {
        "explanation": "Differentiate",
        "workingOut": "y' = 2e^{2x} - 4e^x"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Expand the square first.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q6f",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand the brackets and differentiate the function:\n\\( y = (e^x - 1)^2 \\)",
    "a": "2e^(2x)-2e^x",
    "solution": "Expand:\n\\( y = e^{2x} - 2e^x + 1 \\).\nDifferentiate:\n\\( y' = 2e^{2x} - 2e^x \\).",
    "solutionSteps": [
      {
        "explanation": "Expand",
        "workingOut": "y = e^{2x} - 2e^x + 1"
      },
      {
        "explanation": "Differentiate",
        "workingOut": "y' = 2e^{2x} - 2e^x"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Expand (e^x - 1)^2 first.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q6g",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand the brackets and differentiate the function:\n\\( y = (e^x + e^{-x})(e^x - e^{-x}) \\)",
    "a": "2e^(2x)+2e^(-2x)",
    "solution": "Expand using difference of squares:\n\\( y = (e^x)^2 - (e^{-x})^2 = e^{2x} - e^{-2x} \\).\nDifferentiate:\n\\( y' = 2e^{2x} - (-2e^{-2x}) = 2e^{2x} + 2e^{-2x} \\).",
    "solutionSteps": [
      {
        "explanation": "Expand using difference of squares",
        "workingOut": "y = e^{2x} - e^{-2x}"
      },
      {
        "explanation": "Differentiate",
        "workingOut": "y' = 2e^{2x} + 2e^{-2x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Use the identity (A + B)(A - B) = A^2 - B^2, then differentiate.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q6h",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand the brackets and differentiate the function:\n\\( y = (e^{4x} + e^{-4x})(e^{4x} - e^{-4x}) \\)",
    "a": "8e^(8x)+8e^(-8x)",
    "solution": "Expand:\n\\( y = (e^{4x})^2 - (e^{-4x})^2 = e^{8x} - e^{-8x} \\).\nDifferentiate:\n\\( y' = 8e^{8x} - (-8e^{-8x}) = 8e^{8x} + 8e^{-8x} \\).",
    "solutionSteps": [
      {
        "explanation": "Expand the difference of squares",
        "workingOut": "y = e^{8x} - e^{-8x}"
      },
      {
        "explanation": "Differentiate",
        "workingOut": "y' = 8e^{8x} + 8e^{-8x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Simplify to e^(8x) - e^(-8x) first.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q7a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the chain rule to differentiate the function:\n\\( y = e^{3x+2} \\)",
    "a": "3e^(3x+2)",
    "solution": "Let \\( u = 3x + 2 \\implies \\frac{du}{dx} = 3 \\).\nSince \\( y = e^u \\implies \\frac{dy}{du} = e^u \\):\n\\( y' = \\frac{dy}{du} \\cdot \\frac{du}{dx} = e^u \\cdot 3 = 3e^{3x+2} \\).",
    "solutionSteps": [
      {
        "explanation": "Find derivative of exponent",
        "workingOut": "\\frac{d}{dx}(3x+2) = 3"
      },
      {
        "explanation": "Apply the chain rule",
        "workingOut": "3e^{3x+2}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Multiply the original function by the derivative of the exponent.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q7b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the chain rule to differentiate the function:\n\\( y = e^{x^3} \\)",
    "a": "3x^2*e^(x^3)",
    "solution": "Let \\( u = x^3 \\implies \\frac{du}{dx} = 3x^2 \\).\nApplying the chain rule:\n\\( y' = 3x^2 e^{x^3} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate exponent",
        "workingOut": "\\frac{d}{dx}(x^3) = 3x^2"
      },
      {
        "explanation": "Apply chain rule",
        "workingOut": "3x^2 e^{x^3}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "The derivative is the derivative of the exponent multiplied by the original function.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q7c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the chain rule to differentiate the function:\n\\( y = e^{-2x^2} \\)",
    "a": "-4x*e^(-2x^2)",
    "solution": "The exponent is \\( f(x) = -2x^2 \\implies f'(x) = -4x \\).\nTherefore:\n\\( y' = -4x e^{-2x^2} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate exponent",
        "workingOut": "\\frac{d}{dx}(-2x^2) = -4x"
      },
      {
        "explanation": "Multiply exponent derivative by original term",
        "workingOut": "-4x e^{-2x^2}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Multiply -2x^2 derivative by the function.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q7d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the chain rule to differentiate the function:\n\\( y = e^{x^2+3} \\)",
    "a": "2x*e^(x^2+3)",
    "solution": "The exponent is \\( x^2 + 3 \\implies \\text{derivative is } 2x \\).\nTherefore:\n\\( y' = 2x e^{x^2+3} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate exponent",
        "workingOut": "\\frac{d}{dx}(x^2+3) = 2x"
      },
      {
        "explanation": "Apply chain rule",
        "workingOut": "2x e^{x^2+3}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Differentiate the power x^2+3 first.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q7e",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the chain rule to differentiate the function:\n\\( y = e^{2-x^2} \\)",
    "a": "-2x*e^(2-x^2)",
    "solution": "The derivative of the exponent \\( 2-x^2 \\) is \\( -2x \\).\nTherefore:\n\\( y' = -2x e^{2-x^2} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate exponent",
        "workingOut": "-2x"
      },
      {
        "explanation": "Apply chain rule",
        "workingOut": "-2x e^{2-x^2}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Multiply by the derivative of the power 2-x^2.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q7f",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the chain rule to differentiate the function:\n\\( y = e^{x^2+3x} \\)",
    "a": "(2x+3)*e^(x^2+3x)",
    "solution": "The derivative of the exponent \\( x^2 + 3x \\) is \\( 2x + 3 \\).\nUsing the chain rule:\n\\( y' = (2x + 3)e^{x^2+3x} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate the exponent",
        "workingOut": "2x + 3"
      },
      {
        "explanation": "Apply chain rule",
        "workingOut": "(2x + 3)e^{x^2+3x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Remember to put the derivative of the exponent in brackets.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q7g",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the chain rule to differentiate the function:\n\\( y = e^{4+2x-x^2} \\)",
    "a": "(2-2x)*e^(4+2x-x^2)",
    "solution": "The derivative of the exponent \\( 4 + 2x - x^2 \\) is \\( 2 - 2x \\).\nTherefore:\n\\( y' = (2 - 2x)e^{4+2x-x^2} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate exponent",
        "workingOut": "2 - 2x"
      },
      {
        "explanation": "Apply chain rule",
        "workingOut": "(2 - 2x)e^{4+2x-x^2}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Find the derivative of 4 + 2x - x^2 and multiply it by the original function.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q7h",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the chain rule to differentiate the function:\n\\( y = \\frac{1}{2}e^{2x^2-4x+1} \\)",
    "a": "(2x-2)*e^(2x^2-4x+1)",
    "solution": "The derivative of the exponent \\( 2x^2 - 4x + 1 \\) is \\( 4x - 4 \\).\nTherefore:\n\\( y' = \\frac{1}{2} \\cdot (4x - 4)e^{2x^2-4x+1} = (2x - 2)e^{2x^2-4x+1} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate the exponent",
        "workingOut": "4x - 4"
      },
      {
        "explanation": "Multiply exponent derivative by coefficient 1/2",
        "workingOut": "\\frac{1}{2}(4x - 4) = 2x - 2"
      },
      {
        "explanation": "State the derivative",
        "workingOut": "(2x - 2)e^{2x^2-4x+1}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Differentiate the exponent to get 4x - 4, multiply by 1/2, then multiply by the original function.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q8a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the product rule to differentiate the function:\n\\( y = x^2 e^x \\)",
    "a": "x*e^x*(x+2)",
    "solution": "Let \\( u = x^2 \\implies u' = 2x \\) and \\( v = e^x \\implies v' = e^x \\).\nUsing the product rule \\( y' = u'v + uv' \\):\n\\( y' = 2x \\cdot e^x + x^2 \\cdot e^x = x e^x(2 + x) = x e^x(x + 2) \\).",
    "solutionSteps": [
      {
        "explanation": "Identify terms and their derivatives",
        "workingOut": "u = x^2, \\; u' = 2x \\quad \\text{and} \\quad v = e^x, \\; v' = e^x"
      },
      {
        "explanation": "Apply the product rule",
        "workingOut": "y' = 2xe^x + x^2e^x"
      },
      {
        "explanation": "Factorise the expression",
        "workingOut": "x e^x(x + 2)"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Use product rule: (u*v)' = u'*v + u*v'. Factor out x*e^x at the end.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q8b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the product rule to differentiate the function:\n\\( y = x^3 e^{-x} \\)",
    "a": "x^2*e^(-x)*(3-x)",
    "solution": "Let \\( u = x^3 \\implies u' = 3x^2 \\) and \\( v = e^{-x} \\implies v' = -e^{-x} \\).\nUsing the product rule:\n\\( y' = 3x^2 e^{-x} + x^3 (-e^{-x}) = 3x^2 e^{-x} - x^3 e^{-x} = x^2 e^{-x}(3 - x) \\).",
    "solutionSteps": [
      {
        "explanation": "Find derivatives of components",
        "workingOut": "u' = 3x^2, \\; v' = -e^{-x}"
      },
      {
        "explanation": "Apply product rule",
        "workingOut": "3x^2 e^{-x} - x^3 e^{-x}"
      },
      {
        "explanation": "Factor out common terms",
        "workingOut": "x^2 e^{-x}(3 - x)"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Differentiate e^(-x) to get -e^(-x). Factor out x^2 * e^(-x).",
    "graphData": null
  },
  {
    "id": "y12a-5b-q8c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the product rule to differentiate the function:\n\\( y = (x - 2)e^x \\)",
    "a": "(x-1)*e^x",
    "solution": "Let \\( u = x - 2 \\implies u' = 1 \\) and \\( v = e^x \\implies v' = e^x \\).\nUsing the product rule:\n\\( y' = 1 \\cdot e^x + (x - 2)e^x = e^x(1 + x - 2) = (x - 1)e^x \\).",
    "solutionSteps": [
      {
        "explanation": "Apply components to product rule",
        "workingOut": "1 \\cdot e^x + (x-2)e^x"
      },
      {
        "explanation": "Simplify and factor",
        "workingOut": "e^x(1 + x - 2) = (x - 1)e^x"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Differentiate (x - 2) first, which is 1.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q8d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the product rule to differentiate the function:\n\\( y = (x + 2)e^{2x-1} \\)",
    "a": "(2x+5)*e^(2x-1)",
    "solution": "Let \\( u = x + 2 \\implies u' = 1 \\) and \\( v = e^{2x-1} \\implies v' = 2e^{2x-1} \\).\nUsing the product rule:\n\\( y' = 1 \\cdot e^{2x-1} + (x + 2)(2e^{2x-1}) \\)\n\\( = e^{2x-1}[1 + 2(x + 2)] = e^{2x-1}(2x + 5) = (2x + 5)e^{2x-1} \\).",
    "solutionSteps": [
      {
        "explanation": "Find component derivatives",
        "workingOut": "u' = 1, \\; v' = 2e^{2x-1}"
      },
      {
        "explanation": "Apply product rule and expand brackets",
        "workingOut": "e^{2x-1} + (2x + 4)e^{2x-1}"
      },
      {
        "explanation": "Factorise and simplify",
        "workingOut": "(2x + 5)e^{2x-1}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Product rule with chain rule on the exponential term.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q8e",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the product rule to differentiate the function:\n\\( y = x^3 e^{-2x} \\)",
    "a": "x^2*e^(-2x)*(3-2x)",
    "solution": "Let \\( u = x^3 \\implies u' = 3x^2 \\) and \\( v = e^{-2x} \\implies v' = -2e^{-2x} \\).\nUsing the product rule:\n\\( y' = 3x^2 e^{-2x} + x^3 (-2e^{-2x}) = x^2 e^{-2x}(3 - 2x) \\).",
    "solutionSteps": [
      {
        "explanation": "Find components",
        "workingOut": "u' = 3x^2, \\; v' = -2e^{-2x}"
      },
      {
        "explanation": "Apply product rule",
        "workingOut": "3x^2e^{-2x} - 2x^3e^{-2x}"
      },
      {
        "explanation": "Factorise out x^2e^{-2x}",
        "workingOut": "x^2e^{-2x}(3 - 2x)"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Factor out the common terms after applying the product rule.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q8f",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the product rule to differentiate the function:\n\\( y = (2x - 3)e^{3x} \\)",
    "a": "(6x-7)*e^(3x)",
    "solution": "Let \\( u = 2x - 3 \\implies u' = 2 \\) and \\( v = e^{3x} \\implies v' = 3e^{3x} \\).\nUsing the product rule:\n\\( y' = 2e^{3x} + (2x - 3)(3e^{3x}) = e^{3x}[2 + 3(2x - 3)] \\)\n\\( = e^{3x}(2 + 6x - 9) = (6x - 7)e^{3x} \\).",
    "solutionSteps": [
      {
        "explanation": "Set up component derivatives",
        "workingOut": "u' = 2, \\; v' = 3e^{3x}"
      },
      {
        "explanation": "Apply product rule",
        "workingOut": "2e^{3x} + 3(2x - 3)e^{3x}"
      },
      {
        "explanation": "Factorise and simplify the bracket",
        "workingOut": "(6x - 7)e^{3x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Differentiate 2x - 3 and e^(3x), then multiply and simplify.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q8g",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the product rule to differentiate the function:\n\\( y = (x^2 - 3)e^x \\)",
    "a": "(x^2+2x-3)*e^x",
    "solution": "Let \\( u = x^2 - 3 \\implies u' = 2x \\) and \\( v = e^x \\implies v' = e^x \\).\nUsing the product rule:\n\\( y' = 2x e^x + (x^2 - 3)e^x = (x^2 + 2x - 3)e^x \\).",
    "solutionSteps": [
      {
        "explanation": "Identify derivatives",
        "workingOut": "u' = 2x, \\; v' = e^x"
      },
      {
        "explanation": "Apply product rule and factorise",
        "workingOut": "e^x(2x + x^2 - 3)"
      },
      {
        "explanation": "Write in standard quadratic order",
        "workingOut": "(x^2 + 2x - 3)e^x"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Factor out e^x from the sum of derivatives.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q8h",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the product rule to differentiate the function:\n\\( y = x^4 e^{3x} \\)",
    "a": "x^3*e^(3x)*(4+3x)",
    "solution": "Let \\( u = x^4 \\implies u' = 4x^3 \\) and \\( v = e^{3x} \\implies v' = 3e^{3x} \\).\nUsing the product rule:\n\\( y' = 4x^3 e^{3x} + x^4 (3e^{3x}) = x^3 e^{3x}(4 + 3x) \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate components",
        "workingOut": "u' = 4x^3, \\; v' = 3e^{3x}"
      },
      {
        "explanation": "Combine using product rule",
        "workingOut": "4x^3e^{3x} + 3x^4e^{3x}"
      },
      {
        "explanation": "Factor out x^3e^{3x}",
        "workingOut": "x^3e^{3x}(4 + 3x)"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Differentiate each term and factor out the common term x^3 * e^(3x).",
    "graphData": null
  },
  {
    "id": "y12a-5b-q9a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the quotient rule to differentiate the function:\n\\( y = \\frac{e^x}{x^2} \\)",
    "a": "e^x*(x-2)/x^3",
    "solution": "Let \\( u = e^x \\implies u' = e^x \\) and \\( v = x^2 \\implies v' = 2x \\).\nUsing the quotient rule \\( y' = \\frac{u'v - uv'}{v^2} \\):\n\\( y' = \\frac{e^x(x^2) - e^x(2x)}{(x^2)^2} = \\frac{x e^x(x - 2)}{x^4} = \\frac{e^x(x - 2)}{x^3} \\).",
    "solutionSteps": [
      {
        "explanation": "Find derivatives of numerator and denominator",
        "workingOut": "u' = e^x, \\; v' = 2x"
      },
      {
        "explanation": "Apply quotient rule",
        "workingOut": "\\frac{x^2 e^x - 2x e^x}{x^4}"
      },
      {
        "explanation": "Simplify by factorising",
        "workingOut": "\\frac{e^x(x-2)}{x^3}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Recall quotient rule: (u/v)' = (u'v - uv') / v^2. Factor out x from the numerator to cancel one x in the denominator.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q9b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the quotient rule to differentiate the function:\n\\( y = \\frac{x^2}{e^x} \\)",
    "a": "x*(2-x)/e^x",
    "solution": "Let \\( u = x^2 \\implies u' = 2x \\) and \\( v = e^x \\implies v' = e^x \\).\nUsing the quotient rule:\n\\( y' = \\frac{2x e^x - x^2 e^x}{(e^x)^2} = \\frac{e^x(2x - x^2)}{(e^x)^2} = \\frac{x(2 - x)}{e^x} \\).",
    "solutionSteps": [
      {
        "explanation": "Identify derivatives",
        "workingOut": "u' = 2x, \\; v' = e^x"
      },
      {
        "explanation": "Apply quotient rule",
        "workingOut": "\\frac{2x e^x - x^2 e^x}{e^{2x}}"
      },
      {
        "explanation": "Simplify by canceling e^x",
        "workingOut": "\\frac{x(2 - x)}{e^x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Cancel one e^x from the numerator and denominator.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q9c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the quotient rule to differentiate the function:\n\\( y = \\frac{e^x}{x^3} \\)",
    "a": "e^x*(x-3)/x^4",
    "solution": "Let \\( u = e^x \\implies u' = e^x \\) and \\( v = x^3 \\implies v' = 3x^2 \\).\nUsing the quotient rule:\n\\( y' = \\frac{e^x(x^3) - e^x(3x^2)}{(x^3)^2} = \\frac{x^2 e^x(x - 3)}{x^6} = \\frac{e^x(x - 3)}{x^4} \\).",
    "solutionSteps": [
      {
        "explanation": "Set up component derivatives",
        "workingOut": "u' = e^x, \\; v' = 3x^2"
      },
      {
        "explanation": "Apply quotient rule",
        "workingOut": "\\frac{x^3 e^x - 3x^2 e^x}{x^6}"
      },
      {
        "explanation": "Factor out x^2 in the numerator and simplify",
        "workingOut": "\\frac{e^x(x - 3)}{x^4}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Factor out x^2 from the numerator and divide it out.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q9d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the quotient rule to differentiate the function:\n\\( y = \\frac{x^3}{e^x} \\)",
    "a": "x^2*(3-x)/e^x",
    "solution": "Let \\( u = x^3 \\implies u' = 3x^2 \\) and \\( v = e^x \\implies v' = e^x \\).\nUsing the quotient rule:\n\\( y' = \\frac{3x^2 e^x - x^3 e^x}{(e^x)^2} = \\frac{e^x(3x^2 - x^3)}{(e^x)^2} = \\frac{x^2(3 - x)}{e^x} \\).",
    "solutionSteps": [
      {
        "explanation": "Set up components",
        "workingOut": "u' = 3x^2, \\; v' = e^x"
      },
      {
        "explanation": "Apply quotient rule",
        "workingOut": "\\frac{3x^2 e^x - x^3 e^x}{e^{2x}}"
      },
      {
        "explanation": "Simplify",
        "workingOut": "\\frac{x^2(3 - x)}{e^x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Apply quotient rule and factor out x^2 from the numerator.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q9e",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the quotient rule to differentiate the function:\n\\( y = \\frac{e^x}{x + 2} \\)",
    "a": "e^x*(x+1)/(x+2)^2",
    "solution": "Let \\( u = e^x \\implies u' = e^x \\) and \\( v = x + 2 \\implies v' = 1 \\).\nUsing the quotient rule:\n\\( y' = \\frac{e^x(x + 2) - e^x(1)}{(x + 2)^2} = \\frac{e^x(x + 2 - 1)}{(x + 2)^2} = \\frac{e^x(x + 1)}{(x + 2)^2} \\).",
    "solutionSteps": [
      {
        "explanation": "Identify component derivatives",
        "workingOut": "u' = e^x, \\; v' = 1"
      },
      {
        "explanation": "Apply quotient rule",
        "workingOut": "\\frac{e^x(x+2) - e^x}{(x+2)^2}"
      },
      {
        "explanation": "Factor out e^x and simplify numerator",
        "workingOut": "\\frac{e^x(x+1)}{(x+2)^2}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Factor out e^x from the numerator after expanding.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q9f",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the quotient rule to differentiate the function:\n\\( y = \\frac{x + 2}{e^x} \\)",
    "a": "(-x-1)/e^x",
    "solution": "Let \\( u = x + 2 \\implies u' = 1 \\) and \\( v = e^x \\implies v' = e^x \\).\nUsing the quotient rule:\n\\( y' = \\frac{1 \\cdot e^x - (x + 2)e^x}{(e^x)^2} = \\frac{e^x(1 - x - 2)}{(e^x)^2} = \\frac{-x - 1}{e^x} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate numerator and denominator",
        "workingOut": "u' = 1, \\; v' = e^x"
      },
      {
        "explanation": "Apply quotient rule",
        "workingOut": "\\frac{e^x - (x+2)e^x}{e^{2x}}"
      },
      {
        "explanation": "Factorise and cancel e^x",
        "workingOut": "\\frac{-x - 1}{e^x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Be careful with the negative sign when distributing (x + 2).",
    "graphData": null
  },
  {
    "id": "y12a-5b-q9g",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the quotient rule to differentiate the function:\n\\( y = \\frac{x - 2}{e^{3x}} \\)",
    "a": "(7-3x)/e^(3x)",
    "solution": "Let \\( u = x - 2 \\implies u' = 1 \\) and \\( v = e^{3x} \\implies v' = 3e^{3x} \\).\nUsing the quotient rule:\n\\( y' = \\frac{1 \\cdot e^{3x} - (x - 2)(3e^{3x})}{(e^{3x})^2} = \\frac{e^{3x}[1 - 3(x - 2)]}{e^{6x}} = \\frac{1 - 3x + 6}{e^{3x}} = \\frac{7 - 3x}{e^{3x}} \\).",
    "solutionSteps": [
      {
        "explanation": "Find derivatives of numerator and denominator",
        "workingOut": "u' = 1, \\; v' = 3e^{3x}"
      },
      {
        "explanation": "Apply quotient rule",
        "workingOut": "\\frac{e^{3x} - 3(x-2)e^{3x}}{e^{6x}}"
      },
      {
        "explanation": "Simplify the numerator bracket and divide by e^(3x)",
        "workingOut": "\\frac{7 - 3x}{e^{3x}}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Differentiate the denominator using chain rule: d/dx(e^3x) = 3e^3x.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q9h",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the quotient rule to differentiate the function:\n\\( y = \\frac{2 - x^2}{e^x} \\)",
    "a": "(x^2-2x-2)/e^x",
    "solution": "Let \\( u = 2 - x^2 \\implies u' = -2x \\) and \\( v = e^x \\implies v' = e^x \\).\nUsing the quotient rule:\n\\( y' = \\frac{-2x e^x - (2 - x^2)e^x}{(e^x)^2} = \\frac{e^x(x^2 - 2x - 2)}{(e^x)^2} = \\frac{x^2 - 2x - 2}{e^x} \\).",
    "solutionSteps": [
      {
        "explanation": "Set up component derivatives",
        "workingOut": "u' = -2x, \\; v' = e^x"
      },
      {
        "explanation": "Apply quotient rule",
        "workingOut": "\\frac{-2x e^x - (2-x^2)e^x}{e^{2x}}"
      },
      {
        "explanation": "Factor out e^x and simplify numerator",
        "workingOut": "\\frac{x^2 - 2x - 2}{e^x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Combine like terms in the numerator carefully.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q10a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify the expression, then differentiate:\n\\( y = (e^x + 2)(e^x + 3) \\)",
    "a": "2e^(2x)+5e^x",
    "solution": "Expand first:\n\\( y = e^{2x} + 3e^x + 2e^x + 6 = e^{2x} + 5e^x + 6 \\).\nDifferentiate:\n\\( y' = 2e^{2x} + 5e^x \\).",
    "solutionSteps": [
      {
        "explanation": "Expand the brackets",
        "workingOut": "y = e^{2x} + 5e^x + 6"
      },
      {
        "explanation": "Differentiate term-by-term",
        "workingOut": "y' = 2e^{2x} + 5e^x"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Expand using FOIL first, then differentiate each term.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q10b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify the expression, then differentiate:\n\\( y = (e^{3x} + 1)(e^{3x} - 2) \\)",
    "a": "6e^(6x)-3e^(3x)",
    "solution": "Expand first:\n\\( y = e^{6x} - 2e^{3x} + e^{3x} - 2 = e^{6x} - e^{3x} - 2 \\).\nDifferentiate:\n\\( y' = 6e^{6x} - 3e^{3x} \\).",
    "solutionSteps": [
      {
        "explanation": "Expand",
        "workingOut": "y = e^{6x} - e^{3x} - 2"
      },
      {
        "explanation": "Differentiate",
        "workingOut": "y' = 6e^{6x} - 3e^{3x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Multiply out brackets, combine e^(3x) terms, then differentiate.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q10c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify the expression, then differentiate:\n\\( y = (e^{-x} + 3)(e^{-x} + 2) \\)",
    "a": "-2e^(-2x)-5e^(-x)",
    "solution": "Expand first:\n\\( y = e^{-2x} + 2e^{-x} + 3e^{-x} + 6 = e^{-2x} + 5e^{-x} + 6 \\).\nDifferentiate:\n\\( y' = -2e^{-2x} - 5e^{-x} \\).",
    "solutionSteps": [
      {
        "explanation": "Expand",
        "workingOut": "y = e^{-2x} + 5e^{-x} + 6"
      },
      {
        "explanation": "Differentiate",
        "workingOut": "y' = -2e^{-2x} - 5e^{-x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Expand the bracket first, then use the chain rule on each negative exponent term.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q10d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify the expression, then differentiate:\n\\( y = (e^{-2x} - 1)(e^{-2x} - 3) \\)",
    "a": "-4e^(-4x)+8e^(-2x)",
    "solution": "Expand first:\n\\( y = e^{-4x} - 3e^{-2x} - e^{-2x} + 3 = e^{-4x} - 4e^{-2x} + 3 \\).\nDifferentiate:\n\\( y' = -4e^{-4x} - 4(-2e^{-2x}) = -4e^{-4x} + 8e^{-2x} \\).",
    "solutionSteps": [
      {
        "explanation": "Expand the terms",
        "workingOut": "y = e^{-4x} - 4e^{-2x} + 3"
      },
      {
        "explanation": "Differentiate each term",
        "workingOut": "y' = -4e^{-4x} + 8e^{-2x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Expand first, then differentiate using the chain rule.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q10e",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify the expression, then differentiate:\n\\( y = (e^{3x} + 1)(e^x + 2) \\)",
    "a": "4e^(4x)+6e^(3x)+e^x",
    "solution": "Expand first:\n\\( y = e^{4x} + 2e^{3x} + e^x + 2 \\).\nDifferentiate:\n\\( y' = 4e^{4x} + 6e^{3x} + e^x \\).",
    "solutionSteps": [
      {
        "explanation": "Expand brackets using FOIL",
        "workingOut": "y = e^{4x} + 2e^{3x} + e^x + 2"
      },
      {
        "explanation": "Differentiate",
        "workingOut": "y' = 4e^{4x} + 6e^{3x} + e^x"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Expand FOIL first, noting that e^(3x) * e^x = e^(4x).",
    "graphData": null
  },
  {
    "id": "y12a-5b-q10f",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify the expression, then differentiate:\n\\( y = (e^{2x} - 2)(e^{-x} + 1) \\)",
    "a": "e^x+2e^(2x)+2e^(-x)",
    "solution": "Expand first:\n\\( y = e^{2x-x} + e^{2x} - 2e^{-x} - 2 = e^x + e^{2x} - 2e^{-x} - 2 \\).\nDifferentiate:\n\\( y' = e^x + 2e^{2x} - 2(-e^{-x}) = e^x + 2e^{2x} + 2e^{-x} \\).",
    "solutionSteps": [
      {
        "explanation": "Expand brackets",
        "workingOut": "y = e^x + e^{2x} - 2e^{-x} - 2"
      },
      {
        "explanation": "Differentiate",
        "workingOut": "y' = e^x + 2e^{2x} + 2e^{-x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Expand brackets first. Note e^(2x) * e^(-x) = e^x.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q11a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the chain rule to differentiate the function:\n\\( y = (1 - e^x)^4 \\)",
    "a": "-4e^x*(1-e^x)^3",
    "solution": "Using the chain rule, let \\( u = 1 - e^x \\implies \\frac{du}{dx} = -e^x \\).\nSince \\( y = u^4 \\implies \\frac{dy}{du} = 4u^3 \\):\n\\( y' = 4(1 - e^x)^3 \\cdot (-e^x) = -4e^x(1 - e^x)^3 \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate the inside term",
        "workingOut": "\\frac{d}{dx}(1 - e^x) = -e^x"
      },
      {
        "explanation": "Apply the chain rule power formula",
        "workingOut": "4(1-e^x)^3 \\cdot (-e^x)"
      },
      {
        "explanation": "Simplify the final result",
        "workingOut": "-4e^x(1 - e^x)^3"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Differentiate the outer power (4u^3) and multiply it by the derivative of the inside function (-e^x).",
    "graphData": null
  },
  {
    "id": "y12a-5b-q11b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the chain rule to differentiate the function:\n\\( y = (e^{3x} - 4)^5 \\)",
    "a": "15e^(3x)*(e^(3x)-4)^4",
    "solution": "Let \\( u = e^{3x} - 4 \\implies \\frac{du}{dx} = 3e^{3x} \\).\nUsing the chain rule:\n\\( y' = 5(e^{3x} - 4)^4 \\cdot (3e^{3x}) = 15e^{3x}(e^{3x} - 4)^4 \\).",
    "solutionSteps": [
      {
        "explanation": "Find derivative of inside function",
        "workingOut": "\\frac{d}{dx}(e^{3x} - 4) = 3e^{3x}"
      },
      {
        "explanation": "Apply the chain rule",
        "workingOut": "5(e^{3x}-4)^4 \\cdot 3e^{3x}"
      },
      {
        "explanation": "Multiply coefficients",
        "workingOut": "15e^{3x}(e^{3x}-4)^4"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Differentiate the outer power first, then multiply by the derivative of e^(3x) - 4.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q11c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the chain rule to differentiate the function:\n\\( y = \\frac{1}{e^x - 2} \\)",
    "a": "-e^x/(e^x-2)^2",
    "solution": "Rewrite as \\( y = (e^x - 2)^{-1} \\).\nApply the chain rule:\n\\( y' = -1(e^x - 2)^{-2} \\cdot \\frac{d}{dx}(e^x - 2) \\)\n\\( = -(e^x - 2)^{-2} \\cdot e^x = -\\frac{e^x}{(e^x - 2)^2} \\).",
    "solutionSteps": [
      {
        "explanation": "Rewrite as a negative power",
        "workingOut": "y = (e^x - 2)^{-1}"
      },
      {
        "explanation": "Apply chain rule",
        "workingOut": "-(e^x - 2)^{-2} \\cdot e^x"
      },
      {
        "explanation": "Write as a fraction",
        "workingOut": "-\\frac{e^x}{(e^x - 2)^2}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Rewrite the expression as (e^x - 2)^(-1) and apply the power chain rule.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q11d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the chain rule to differentiate the function:\n\\( y = \\frac{1}{(e^{2x} + 3)^3} \\)",
    "a": "-6e^(2x)/(e^(2x)+3)^4",
    "solution": "Rewrite as \\( y = (e^{2x} + 3)^{-3} \\).\nApply the chain rule:\n\\( y' = -3(e^{2x} + 3)^{-4} \\cdot (2e^{2x}) = -\\frac{6e^{2x}}{(e^{2x} + 3)^4} \\).",
    "solutionSteps": [
      {
        "explanation": "Rewrite as negative power",
        "workingOut": "y = (e^{2x} + 3)^{-3}"
      },
      {
        "explanation": "Differentiate inside and outer function",
        "workingOut": "-3(e^{2x} + 3)^{-4} \\cdot 2e^{2x}"
      },
      {
        "explanation": "Simplify coefficients",
        "workingOut": "-\\frac{6e^{2x}}{(e^{2x} + 3)^4}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Express as (e^(2x) + 3)^(-3). The derivative of the inside is 2e^(2x).",
    "graphData": null
  },
  {
    "id": "y12a-5b-q12a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Show by substitution that the function \\( y = e^{6x} \\) satisfies the differential equation \\( \\frac{dy}{dx} = 6y \\).",
    "a": "LHS = dy/dx = 6e^(6x). RHS = 6y = 6e^(6x). LHS = RHS.",
    "solution": "1) Calculate the derivative of the given function:\n\\( \\frac{dy}{dx} = \\frac{d}{dx}(e^{6x}) = 6e^{6x} \\).\n\n2) Substitute \\( y = e^{6x} \\) into the right-hand side (RHS) of the equation:\n\\( 6y = 6(e^{6x}) = 6e^{6x} \\).\n\nSince LHS = RHS = \\( 6e^{6x} \\), the function satisfies the differential equation.",
    "solutionSteps": [
      {
        "explanation": "Differentiate y",
        "workingOut": "\\frac{dy}{dx} = 6e^{6x}"
      },
      {
        "explanation": "Substitute y into RHS",
        "workingOut": "6y = 6e^{6x}"
      },
      {
        "explanation": "Verify LHS = RHS",
        "workingOut": "6e^{6x} = 6e^{6x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Differentiate y, then substitute e^(6x) for y on the right side of the equation.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q12b",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Show by substitution that the function \\( y = 4e^{3x} \\) satisfies the equation \\( \\frac{dy}{dx} = 3y \\).",
    "a": "LHS = dy/dx = 12e^(3x). RHS = 3y = 3(4e^(3x)) = 12e^(3x). LHS = RHS.",
    "solution": "1) Calculate the derivative:\n\\( \\frac{dy}{dx} = 4 \\cdot (3e^{3x}) = 12e^{3x} \\).\n\n2) Substitute \\( y = 4e^{3x} \\) into RHS:\n\\( 3y = 3(4e^{3x}) = 12e^{3x} \\).\n\nSince LHS = RHS, the equation is satisfied.",
    "solutionSteps": [
      {
        "explanation": "Differentiate the function",
        "workingOut": "\\frac{dy}{dx} = 12e^{3x}"
      },
      {
        "explanation": "Substitute y into RHS",
        "workingOut": "3y = 12e^{3x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Calculate the derivative of 4e^(3x) and compare it to 3 times 4e^(3x).",
    "graphData": null
  },
  {
    "id": "y12a-5b-q12c",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Show by substitution that the function \\( y = 3e^{-5x} \\) satisfies the equation \\( \\frac{dy}{dx} = -5y \\).",
    "a": "LHS = dy/dx = -15e^(-5x). RHS = -5y = -5(3e^(-5x)) = -15e^(-5x). LHS = RHS.",
    "solution": "1) Calculate the derivative:\n\\( \\frac{dy}{dx} = 3 \\cdot (-5e^{-5x}) = -15e^{-5x} \\).\n\n2) Substitute \\( y = 3e^{-5x} \\) into RHS:\n\\( -5y = -5(3e^{-5x}) = -15e^{-5x} \\).\n\nSince LHS = RHS, the equation is satisfied.",
    "solutionSteps": [
      {
        "explanation": "Find dy/dx",
        "workingOut": "\\frac{dy}{dx} = -15e^{-5x}"
      },
      {
        "explanation": "Substitute y into RHS",
        "workingOut": "-5y = -15e^{-5x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Differentiate y and check if it equals -5 times y.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q12d",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Show by substitution that the function \\( y = 2e^{-4x} \\) satisfies the equation \\( \\frac{dy}{dx} = -4y \\).",
    "a": "LHS = dy/dx = -8e^(-4x). RHS = -4y = -4(2e^(-4x)) = -8e^(-4x). LHS = RHS.",
    "solution": "1) Calculate the derivative:\n\\( \\frac{dy}{dx} = 2 \\cdot (-4e^{-4x}) = -8e^{-4x} \\).\n\n2) Substitute \\( y = 2e^{-4x} \\) into RHS:\n\\( -4y = -4(2e^{-4x}) = -8e^{-4x} \\).\n\nSince LHS = RHS, the equation is satisfied.",
    "solutionSteps": [
      {
        "explanation": "Calculate dy/dx",
        "workingOut": "\\frac{dy}{dx} = -8e^{-4x}"
      },
      {
        "explanation": "Evaluate -4y",
        "workingOut": "-4y = -8e^{-4x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Differentiate y, then verify it is equal to -4y.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q13a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the function \\( f(x) = e^{3x+1} \\), evaluate both the first derivative \\( f'(x) \\) and the second derivative \\( f''(x) \\) at \\( x = 0 \\). Format answers: f'(0) = _, f''(0) = _",
    "a": "f'(0) = 3e, f''(0) = 9e",
    "solution": "Differentiate the function:\n\\( f'(x) = 3e^{3x+1} \\)\n\\( f''(x) = 9e^{3x+1} \\).\n\nSubstitute \\( x = 0 \\):\n\\( f'(0) = 3e^{3(0)+1} = 3e^1 = 3e \\)\n\\( f''(0) = 9e^{3(0)+1} = 9e^1 = 9e \\).",
    "solutionSteps": [
      {
        "explanation": "Find f'(x)",
        "workingOut": "f'(x) = 3e^{3x+1}"
      },
      {
        "explanation": "Find f''(x)",
        "workingOut": "f''(x) = 9e^{3x+1}"
      },
      {
        "explanation": "Substitute x = 0",
        "workingOut": "f'(0) = 3e, \\; f''(0) = 9e"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Differentiate twice using the chain rule, then substitute x = 0.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q13b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the function \\( f(x) = e^{-2x} \\), evaluate both the first derivative \\( f'(x) \\) and the second derivative \\( f''(x) \\) at \\( x = 1 \\). Format: f'(1) = _, f''(1) = _",
    "a": "f'(1) = -2e^(-2), f''(1) = 4e^(-2)",
    "solution": "Differentiate the function:\n\\( f'(x) = -2e^{-2x} \\)\n\\( f''(x) = 4e^{-2x} \\).\n\nSubstitute \\( x = 1 \\):\n\\( f'(1) = -2e^{-2} \\)\n\\( f''(1) = 4e^{-2} \\).",
    "solutionSteps": [
      {
        "explanation": "Find derivatives",
        "workingOut": "f'(x) = -2e^{-2x}, \\; f''(x) = 4e^{-2x}"
      },
      {
        "explanation": "Substitute x = 1",
        "workingOut": "f'(1) = -2e^{-2}, \\; f''(1) = 4e^{-2}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Differentiate twice using the chain rule, then substitute x = 1.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q13c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the function \\( f(x) = x e^{-2x} \\), evaluate both the first derivative \\( f'(x) \\) and the second derivative \\( f''(x) \\) at \\( x = 1 \\). Format: f'(1) = _, f''(1) = _",
    "a": "f'(1) = -e^(-2), f''(1) = 0",
    "solution": "Using the product rule for \\( f(x) = x e^{-2x} \\):\n\\( f'(x) = 1 \\cdot e^{-2x} + x(-2e^{-2x}) = e^{-2x}(1 - 2x) \\).\n\nDifferentiate again using the product rule:\n\\( f''(x) = -2e^{-2x}(1 - 2x) + e^{-2x}(-2) = e^{-2x}(-2 + 4x - 2) = e^{-2x}(4x - 4) \\).\n\nEvaluate at \\( x = 1 \\):\n\\( f'(1) = e^{-2}(1 - 2) = -e^{-2} \\)\n\\( f''(1) = e^{-2}(4(1) - 4) = 0 \\).",
    "solutionSteps": [
      {
        "explanation": "Find f'(x) using product rule",
        "workingOut": "f'(x) = e^{-2x}(1 - 2x)"
      },
      {
        "explanation": "Find f''(x) using product rule",
        "workingOut": "f''(x) = e^{-2x}(4x - 4)"
      },
      {
        "explanation": "Evaluate at x = 1",
        "workingOut": "f'(1) = -e^{-2}, \\; f''(1) = 0"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Be sure to use the product rule for both the first and second derivatives.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q13d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the function \\( f(x) = e^{-3x^2} \\), evaluate both the first derivative \\( f'(x) \\) and the second derivative \\( f''(x) \\) at \\( x = 0 \\). Format: f'(0) = _, f''(0) = _",
    "a": "f'(0) = 0, f''(0) = -6",
    "solution": "Differentiate using the chain rule:\n\\( f'(x) = -6x e^{-3x^2} \\).\n\nDifferentiate again using the product rule:\n\\( f''(x) = -6e^{-3x^2} + (-6x)(-6x e^{-3x^2}) = e^{-3x^2}(36x^2 - 6) \\).\n\nEvaluate at \\( x = 0 \\):\n\\( f'(0) = -6(0)e^0 = 0 \\)\n\\( f''(0) = e^0(0 - 6) = -6 \\).",
    "solutionSteps": [
      {
        "explanation": "Find f'(x) using chain rule",
        "workingOut": "f'(x) = -6x e^{-3x^2}"
      },
      {
        "explanation": "Find f''(x) using product rule",
        "workingOut": "f''(x) = e^{-3x^2}(36x^2 - 6)"
      },
      {
        "explanation": "Substitute x = 0",
        "workingOut": "f'(0) = 0, \\; f''(0) = -6"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "First derivative is 0 because of the x factor. Second derivative requires product rule.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q14a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate the function using standard derivative rules:\n\\( y = e^{mx} \\)",
    "a": "m*e^(mx)",
    "solution": "The derivative of the exponent \\( mx \\) is \\( m \\).\nApplying the chain rule:\n\\( y' = m e^{mx} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate exponent",
        "workingOut": "\\frac{d}{dx}(mx) = m"
      },
      {
        "explanation": "Write final derivative",
        "workingOut": "y' = m e^{mx}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "The coefficient of x in the exponent is m.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q14b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate the function:\n\\( y = e^{-ax} \\)",
    "a": "-a*e^(-ax)",
    "solution": "The derivative of the exponent \\( -ax \\) is \\( -a \\).\nTherefore:\n\\( y' = -a e^{-ax} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate exponent",
        "workingOut": "\\frac{d}{dx}(-ax) = -a"
      },
      {
        "explanation": "Write derivative",
        "workingOut": "y' = -a e^{-ax}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "The derivative coefficient is -a.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q14c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate the function:\n\\( y = P e^{kx} \\)",
    "a": "k*P*e^(kx)",
    "solution": "Differentiate \\( e^{kx} \\) to get \\( k e^{kx} \\), and multiply by constant \\( P \\):\n\\( y' = kP e^{kx} \\).",
    "solutionSteps": [
      {
        "explanation": "Apply chain rule to exponential term",
        "workingOut": "\\frac{d}{dx}(e^{kx}) = k e^{kx}"
      },
      {
        "explanation": "Multiply by coefficient P",
        "workingOut": "y' = kP e^{kx}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "P is a constant, so it remains in the derivative.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q14d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate the function:\n\\( y = A e^{-cx} \\)",
    "a": "-c*A*e^(-cx)",
    "solution": "Differentiate \\( e^{-cx} \\) to get \\( -c e^{-cx} \\), and multiply by constant \\( A \\):\n\\( y' = -cA e^{-cx} \\).",
    "solutionSteps": [
      {
        "explanation": "Apply chain rule",
        "workingOut": "\\frac{d}{dx}(e^{-cx}) = -c e^{-cx}"
      },
      {
        "explanation": "Multiply by constant A",
        "workingOut": "y' = -cA e^{-cx}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "The constant A remains, and the derivative of the exponent adds a factor of -c.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q14e",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate the function:\n\\( y = e^{ax+b} \\)",
    "a": "a*e^(ax+b)",
    "solution": "The derivative of the exponent \\( ax+b \\) is \\( a \\).\nTherefore:\n\\( y' = a e^{ax+b} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate exponent",
        "workingOut": "\\frac{d}{dx}(ax+b) = a"
      },
      {
        "explanation": "State the derivative",
        "workingOut": "y' = a e^{ax+b}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "The derivative of ax + b is a.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q14f",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate the function:\n\\( y = C e^{px+q} \\)",
    "a": "p*C*e^(px+q)",
    "solution": "Differentiate the exponent \\( px+q \\) to get \\( p \\) and keep the constant \\( C \\):\n\\( y' = pC e^{px+q} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate exponent",
        "workingOut": "p"
      },
      {
        "explanation": "State the derivative",
        "workingOut": "y' = pC e^{px+q}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Multiply by the coefficient p from the exponent.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q14g",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate the function:\n\\( y = \\frac{e^{kx} + e^{-kx}}{2} \\)",
    "a": "k*(e^(kx)-e^(-kx))/2",
    "solution": "Differentiate the numerator:\n\\( \\frac{d}{dx}(e^{kx} + e^{-kx}) = k e^{kx} - k e^{-kx} = k(e^{kx} - e^{-kx}) \\).\nDivide by the constant denominator 2:\n\\( y' = \\frac{k(e^{kx} - e^{-kx})}{2} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate numerator using chain rule",
        "workingOut": "k e^{kx} - k e^{-kx}"
      },
      {
        "explanation": "Factorise out k and divide by 2",
        "workingOut": "\\frac{k(e^{kx} - e^{-kx})}{2}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Factor out k from the derivatives of both terms.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q14h",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate the function:\n\\( y = \\frac{e^{mx}}{a} + \\frac{e^{-mx}}{b} \\)",
    "a": "m*e^(mx)/a-m*e^(-mx)/b",
    "solution": "Differentiate each term:\n\\( \\frac{d}{dx}\\left(\\frac{e^{mx}}{a}\\right) = \\frac{m e^{mx}}{a} \\)\n\\( \\frac{d}{dx}\\left(\\frac{e^{-mx}}{b}\\right) = -\\frac{m e^{-mx}}{b} \\)\nCombining gives:\n\\( y' = \\frac{m e^{mx}}{a} - \\frac{m e^{-mx}}{b} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate first term",
        "workingOut": "\\frac{m e^{mx}}{a}"
      },
      {
        "explanation": "Differentiate second term",
        "workingOut": "-\\frac{m e^{-mx}}{b}"
      },
      {
        "explanation": "State combined derivative",
        "workingOut": "\\frac{m e^{mx}}{a} - \\frac{m e^{-mx}}{b}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Differentiate each fraction term-by-term using chain rule.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q15a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate the function:\n\\( y = (e^x + 2)^4 \\)",
    "a": "4e^x*(e^x+2)^3",
    "solution": "Using the chain rule, let \\( u = e^x + 2 \\implies u' = e^x \\).\nWith \\( y = u^4 \\implies y' = 4u^3 \\cdot u' \\):\n\\( y' = 4(e^x + 2)^3 \\cdot e^x = 4e^x(e^x + 2)^3 \\).",
    "solutionSteps": [
      {
        "explanation": "Apply the power chain rule",
        "workingOut": "4(e^x + 2)^3 \\cdot \\frac{d}{dx}(e^x + 2)"
      },
      {
        "explanation": "Substitute the derivative of the inside function",
        "workingOut": "4(e^x + 2)^3 \\cdot e^x"
      },
      {
        "explanation": "Write in standard form",
        "workingOut": "4e^x(e^x + 2)^3"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Apply the chain rule: multiply the derivative of the outer power (4u^3) by the derivative of the inside (e^x).",
    "graphData": null
  },
  {
    "id": "y12a-5b-q15b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate the function:\n\\( y = (e^x + e^{-x})^3 \\)",
    "a": "3*(e^x-e^(-x))*(e^x+e^(-x))^2",
    "solution": "Using the chain rule, let \\( u = e^x + e^{-x} \\implies u' = e^x - e^{-x} \\).\nThen:\n\\( y' = 3(e^x + e^{-x})^2 \\cdot (e^x - e^{-x}) = 3(e^x - e^{-x})(e^x + e^{-x})^2 \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate the inside function",
        "workingOut": "\\frac{d}{dx}(e^x + e^{-x}) = e^x - e^{-x}"
      },
      {
        "explanation": "Apply the power chain rule",
        "workingOut": "3(e^x + e^{-x})^2 \\cdot (e^x - e^{-x})"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Use chain rule: derivative of inside function is e^x - e^(-x).",
    "graphData": null
  },
  {
    "id": "y12a-5b-q15c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate the function:\n\\( y = (1 + x^3)e^{1+x} \\)",
    "a": "e^(1+x)*(x^3+3x^2+1)",
    "solution": "Using the product rule, let \\( u = 1 + x^3 \\implies u' = 3x^2 \\) and \\( v = e^{1+x} \\implies v' = e^{1+x} \\).\n\\( y' = u'v + uv' = 3x^2 e^{1+x} + (1 + x^3)e^{1+x} \\)\n\\( = e^{1+x}(3x^2 + 1 + x^3) = e^{1+x}(x^3 + 3x^2 + 1) \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate components",
        "workingOut": "u' = 3x^2, \\; v' = e^{1+x}"
      },
      {
        "explanation": "Apply product rule",
        "workingOut": "3x^2 e^{1+x} + (1 + x^3)e^{1+x}"
      },
      {
        "explanation": "Factor out e^(1+x)",
        "workingOut": "e^(1+x)(x^3 + 3x^2 + 1)"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Use the product rule, then factor out the exponential term.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q15d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate the function:\n\\( y = (x^3 - x)e^{3x-1} \\)",
    "a": "e^(3x-1)*(3x^3+3x^2-3x-1)",
    "solution": "Using the product rule, let \\( u = x^3 - x \\implies u' = 3x^2 - 1 \\) and \\( v = e^{3x-1} \\implies v' = 3e^{3x-1} \\).\n\\( y' = u'v + uv' = (3x^2 - 1)e^{3x-1} + (x^3 - x)(3e^{3x-1}) \\)\n\\( = e^{3x-1}[(3x^2 - 1) + 3(x^3 - x)] \\)\n\\( = e^{3x-1}(3x^2 - 1 + 3x^3 - 3x) = e^{3x-1}(3x^3 + 3x^2 - 3x - 1) \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate components",
        "workingOut": "u' = 3x^2 - 1, \\; v' = 3e^{3x-1}"
      },
      {
        "explanation": "Apply product rule",
        "workingOut": "(3x^2 - 1)e^{3x-1} + 3(x^3 - x)e^{3x-1}"
      },
      {
        "explanation": "Factorise and simplify the bracket",
        "workingOut": "e^{3x-1}(3x^3 + 3x^2 - 3x - 1)"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Differentiate the exponent 3x-1 to get the multiplier 3.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q15e",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate the function:\n\\( y = \\frac{e^{2x}}{e^{2x} + 1} \\)",
    "a": "2e^(2x)/(e^(2x)+1)^2",
    "solution": "Using the quotient rule, let \\( u = e^{2x} \\implies u' = 2e^{2x} \\) and \\( v = e^{2x} + 1 \\implies v' = 2e^{2x} \\).\n\\( y' = \\frac{u'v - uv'}{v^2} = \\frac{2e^{2x}(e^{2x} + 1) - e^{2x}(2e^{2x})}{(e^{2x} + 1)^2} \\)\n\\( = \\frac{2e^{4x} + 2e^{2x} - 2e^{4x}}{(e^{2x} + 1)^2} = \\frac{2e^{2x}}{(e^{2x} + 1)^2} \\).",
    "solutionSteps": [
      {
        "explanation": "Find derivatives of numerator and denominator",
        "workingOut": "u' = 2e^{2x}, \\; v' = 2e^{2x}"
      },
      {
        "explanation": "Apply quotient rule",
        "workingOut": "\\frac{2e^{2x}(e^{2x}+1) - 2e^{4x}}{(e^{2x}+1)^2}"
      },
      {
        "explanation": "Simplify the numerator",
        "workingOut": "\\frac{2e^{2x}}{(e^{2x}+1)^2}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Use quotient rule. The terms involving e^(4x) will cancel out in the numerator.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q15f",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate the function:\n\\( y = \\frac{e^{2x} + 1}{e^{2x} - 1} \\)",
    "a": "-4e^(2x)/(e^(2x)-1)^2",
    "solution": "Using the quotient rule, let \\( u = e^{2x} + 1 \\implies u' = 2e^{2x} \\) and \\( v = e^{2x} - 1 \\implies v' = 2e^{2x} \\).\n\\( y' = \\frac{2e^{2x}(e^{2x} - 1) - (e^{2x} + 1)(2e^{2x})}{(e^{2x} - 1)^2} \\)\n\\( = \\frac{2e^{4x} - 2e^{2x} - (2e^{4x} + 2e^{2x})}{(e^{2x} - 1)^2} = \\frac{-4e^{2x}}{(e^{2x} - 1)^2} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate numerator and denominator",
        "workingOut": "u' = 2e^{2x}, \\; v' = 2e^{2x}"
      },
      {
        "explanation": "Apply quotient rule",
        "workingOut": "\\frac{2e^{2x}(e^{2x}-1) - 2e^{2x}(e^{2x}+1)}{(e^{2x}-1)^2}"
      },
      {
        "explanation": "Simplify the numerator",
        "workingOut": "\\frac{-4e^{2x}}{(e^{2x}-1)^2}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Apply the quotient rule, expand the numerator, and simplify.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q16a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Write the expression as a sum of powers of \\( e \\), then differentiate:\n\\( y = \\frac{e^x + 2}{e^x} \\)",
    "a": "-2e^(-x)",
    "solution": "Simplify first:\n\\( y = \\frac{e^x}{e^x} + \\frac{2}{e^x} = 1 + 2e^{-x} \\).\nDifferentiate:\n\\( y' = 0 + 2(-e^{-x}) = -2e^{-x} \\).",
    "solutionSteps": [
      {
        "explanation": "Separate the fraction",
        "workingOut": "y = 1 + 2e^{-x}"
      },
      {
        "explanation": "Differentiate",
        "workingOut": "y' = -2e^{-x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Divide each term in the numerator by e^x to simplify before differentiating.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q16b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Write the expression as a sum of powers of \\( e \\), then differentiate:\n\\( y = \\frac{e^{3x} + e^x}{e^x} \\)",
    "a": "2e^(2x)",
    "solution": "Simplify first:\n\\( y = \\frac{e^{3x}}{e^x} + \\frac{e^x}{e^x} = e^{2x} + 1 \\).\nDifferentiate:\n\\( y' = 2e^{2x} \\).",
    "solutionSteps": [
      {
        "explanation": "Simplify using division index law",
        "workingOut": "y = e^{2x} + 1"
      },
      {
        "explanation": "Differentiate",
        "workingOut": "y' = 2e^{2x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Divide both terms by e^x to get e^(2x) + 1 first.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q16c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Write the expression as a sum of powers of \\( e \\), then differentiate:\n\\( y = \\frac{3 - e^x}{e^{2x}} \\)",
    "a": "-6e^(-2x)+e^(-x)",
    "solution": "Simplify first:\n\\( y = \\frac{3}{e^{2x}} - \\frac{e^x}{e^{2x}} = 3e^{-2x} - e^{-x} \\).\nDifferentiate:\n\\( y' = 3(-2e^{-2x}) - (-e^{-x}) = -6e^{-2x} + e^{-x} \\).",
    "solutionSteps": [
      {
        "explanation": "Rewrite as negative powers",
        "workingOut": "y = 3e^{-2x} - e^{-x}"
      },
      {
        "explanation": "Differentiate using chain rule",
        "workingOut": "y' = -6e^{-2x} + e^{-x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Subtract the denominator's exponent (2x) from each numerator's exponent.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q16d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Write the expression as a sum of powers of \\( e \\), then differentiate:\n\\( y = \\frac{4 + e^x}{e^{5x}} \\)",
    "a": "-20e^(-5x)-4e^(-4x)",
    "solution": "Simplify first:\n\\( y = \\frac{4}{e^{5x}} + \\frac{e^x}{e^{5x}} = 4e^{-5x} + e^{-4x} \\).\nDifferentiate:\n\\( y' = 4(-5e^{-5x}) + (-4e^{-4x}) = -20e^{-5x} - 4e^{-4x} \\) (Wait, let's check: 4e^(-5x) + e^(-4x) derivative is -20e^(-5x) - 4e^(-4x). Yes! Let's ensure answer matches: -20e^(-5x)-4e^(-4x)).",
    "solutionSteps": [
      {
        "explanation": "Simplify index",
        "workingOut": "y = 4e^{-5x} + e^{-4x}"
      },
      {
        "explanation": "Differentiate",
        "workingOut": "y' = -20e^{-5x} - 4e^{-4x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Express as 4e^(-5x) + e^(-4x) before differentiating.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q16e",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Write the expression as a sum of powers of \\( e \\), then differentiate:\n\\( y = \\frac{e^x + e^{3x} - 4e^{5x}}{e^x} \\)",
    "a": "2e^(2x)-16e^(4x)",
    "solution": "Simplify first:\n\\( y = 1 + e^{2x} - 4e^{4x} \\).\nDifferentiate:\n\\( y' = 2e^{2x} - 16e^{4x} \\).",
    "solutionSteps": [
      {
        "explanation": "Simplify terms",
        "workingOut": "y = 1 + e^{2x} - 4e^{4x}"
      },
      {
        "explanation": "Differentiate",
        "workingOut": "y' = 2e^{2x} - 16e^{4x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Divide each term in the numerator by e^x first.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q16f",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Write the expression as a sum of powers of \\( e \\), then differentiate:\n\\( y = \\frac{e^{3x} + 3e^x + 1}{e^{3x}} \\)",
    "a": "-6e^(-2x)-3e^(-3x)",
    "solution": "Simplify first:\n\\( y = 1 + 3e^{-2x} + e^{-3x} \\).\nDifferentiate:\n\\( y' = 3(-2e^{-2x}) + (-3e^{-3x}) = -6e^{-2x} - 3e^{-3x} \\).",
    "solutionSteps": [
      {
        "explanation": "Simplify terms",
        "workingOut": "y = 1 + 3e^{-2x} + e^{-3x}"
      },
      {
        "explanation": "Differentiate",
        "workingOut": "y' = -6e^{-2x} - 3e^{-3x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Rewrite as 1 + 3e^(-2x) + e^(-3x) first.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q17a",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Differentiate the function:\n\\( y = \\sqrt{e^{3x}} \\)",
    "a": "1.5e^(1.5x)",
    "solution": "Rewrite using fractional indices:\n\\( y = (e^{3x})^{\\frac{1}{2}} = e^{\\frac{3}{2}x} = e^{1.5x} \\).\nDifferentiate:\n\\( y' = 1.5e^{1.5x} \\).",
    "solutionSteps": [
      {
        "explanation": "Rewrite square root as index",
        "workingOut": "y = e^{1.5x}"
      },
      {
        "explanation": "Differentiate",
        "workingOut": "y' = 1.5e^{1.5x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Convert the square root to a power of 1/2, multiply the indices, then differentiate.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q17b",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Differentiate the function:\n\\( y = \\sqrt[3]{e^{2x}} \\)",
    "a": "(2/3)*e^(2x/3)",
    "solution": "Rewrite using fractional indices:\n\\( y = (e^{2x})^{\\frac{1}{3}} = e^{\\frac{2}{3}x} \\).\nDifferentiate:\n\\( y' = \\frac{2}{3}e^{\\frac{2}{3}x} \\).",
    "solutionSteps": [
      {
        "explanation": "Rewrite cube root as power 1/3",
        "workingOut": "y = e^{\\frac{2}{3}x}"
      },
      {
        "explanation": "Differentiate",
        "workingOut": "y' = \\frac{2}{3}e^{\\frac{2}{3}x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Rewrite as e^(2x/3) first.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q17c",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Differentiate the function:\n\\( y = \\frac{1}{\\sqrt{e^x}} \\)",
    "a": "-0.5e^(-0.5x)",
    "solution": "Rewrite using fractional indices:\n\\( y = \\frac{1}{e^{0.5x}} = e^{-0.5x} \\).\nDifferentiate:\n\\( y' = -0.5e^{-0.5x} \\).",
    "solutionSteps": [
      {
        "explanation": "Rewrite as a negative power",
        "workingOut": "y = e^{-0.5x}"
      },
      {
        "explanation": "Differentiate",
        "workingOut": "y' = -0.5e^{-0.5x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Express as e^(-x/2) first.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q17d",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Differentiate the function:\n\\( y = \\frac{1}{\\sqrt[3]{e^x}} \\)",
    "a": "-(1/3)*e^(-x/3)",
    "solution": "Rewrite using fractional indices:\n\\( y = (e^x)^{-\\frac{1}{3}} = e^{-\\frac{1}{3}x} \\).\nDifferentiate:\n\\( y' = -\\frac{1}{3}e^{-\\frac{1}{3}x} \\).",
    "solutionSteps": [
      {
        "explanation": "Rewrite as negative fraction power",
        "workingOut": "y = e^{-\\frac{1}{3}x}"
      },
      {
        "explanation": "Differentiate",
        "workingOut": "y' = -\\frac{1}{3}e^{-\\frac{1}{3}x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Express as e^(-x/3) first.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q17e",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Differentiate the function:\n\\( y = e^{\\sqrt{x}} \\)",
    "a": "e^\\sqrt{x}/(2\\sqrt{x})",
    "solution": "Using the chain rule, let the exponent be \\( u = \\sqrt{x} = x^{0.5} \\implies u' = \\frac{1}{2}x^{-0.5} = \\frac{1}{2\\sqrt{x}} \\).\nTherefore:\n\\( y' = u' e^u = \\frac{e^{\\sqrt{x}}}{2\\sqrt{x}} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate exponent",
        "workingOut": "\\frac{d}{dx}(x^{0.5}) = \\frac{1}{2\\sqrt{x}}"
      },
      {
        "explanation": "Apply chain rule",
        "workingOut": "\\frac{e^{\\sqrt{x}}}{2\\sqrt{x}}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Differentiate the exponent sqrt(x) to get 1/(2*sqrt(x)).",
    "graphData": null
  },
  {
    "id": "y12a-5b-q17f",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Differentiate the function:\n\\( y = e^{-\\sqrt{x}} \\)",
    "a": "-e^(-\\sqrt{x})/(2\\sqrt{x})",
    "solution": "Let \\( u = -\\sqrt{x} = -x^{0.5} \\implies u' = -\\frac{1}{2\\sqrt{x}} \\).\nTherefore:\n\\( y' = -\\frac{e^{-\\sqrt{x}}}{2\\sqrt{x}} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate exponent",
        "workingOut": "-\\frac{1}{2\\sqrt{x}}"
      },
      {
        "explanation": "Apply chain rule",
        "workingOut": "-\\frac{e^{-\\sqrt{x}}}{2\\sqrt{x}}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "The derivative of -sqrt(x) is -1/(2*sqrt(x)).",
    "graphData": null
  },
  {
    "id": "y12a-5b-q17g",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Differentiate the function:\n\\( y = e^{\\frac{1}{x}} \\)",
    "a": "-e^(1/x)/x^2",
    "solution": "Let the exponent be \\( u = x^{-1} \\implies u' = -x^{-2} = -\\frac{1}{2} \\) (Wait, derivative of \\( x^{-1} \\) is \\( -x^{-2} = -\\frac{1}{x^2} \\)).\nApplying the chain rule:\n\\( y' = -\\frac{1}{x^2}e^{\\frac{1}{x}} = -\\frac{e^{\\frac{1}{x}}}{x^2} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate exponent",
        "workingOut": "\\frac{d}{dx}(x^{-1}) = -x^{-2} = -\\frac{1}{x^2}"
      },
      {
        "explanation": "Apply chain rule",
        "workingOut": "-\\frac{e^{\\frac{1}{x}}}{x^2}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "The derivative of 1/x is -1/x^2.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q17h",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Differentiate the function:\n\\( y = e^{-\\frac{2}{x}} \\)",
    "a": "2e^(-2/x)/x^2",
    "solution": "Let the exponent be \\( u = -2x^{-1} \\implies u' = 2x^{-2} = \\frac{2}{x^2} \\).\nTherefore:\n\\( y' = \\frac{2e^{-\\frac{2}{x}}}{x^2} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate exponent",
        "workingOut": "\\frac{d}{dx}(-2x^{-1}) = 2x^{-2} = \\frac{2}{x^2}"
      },
      {
        "explanation": "Apply chain rule",
        "workingOut": "\\frac{2e^{-\\frac{2}{x}}}{x^2}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Differentiate -2/x to get 2/x^2.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q17i",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Differentiate the function:\n\\( y = e^{x - \\frac{1}{x}} \\)",
    "a": "(1+1/x^2)*e^(x-1/x)",
    "solution": "The exponent is \\( u = x - x^{-1} \\implies u' = 1 - (-x^{-2}) = 1 + \\frac{1}{x^2} \\).\nUsing the chain rule:\n\\( y' = \\left(1 + \\frac{1}{x^2}\\right)e^{x - \\frac{1}{x}} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate exponent",
        "workingOut": "\\frac{d}{dx}(x - x^{-1}) = 1 + x^{-2} = 1 + \\frac{1}{x^2}"
      },
      {
        "explanation": "Apply chain rule",
        "workingOut": "\\left(1 + \\frac{1}{x^2}\\right)e^{x - \\frac{1}{x}}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Derivative of the power is 1 + 1/x^2.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q17j",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Differentiate the function using the chain rule:\n\\( y = e^{e^x} \\)",
    "a": "e^x*e^(e^x)",
    "solution": "Let \\( u = e^x \\implies u' = e^x \\).\nUsing the chain rule for \\( y = e^u \\):\n\\( y' = u' e^u = e^x e^{e^x} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate exponent",
        "workingOut": "\\frac{d}{dx}(e^x) = e^x"
      },
      {
        "explanation": "Apply chain rule",
        "workingOut": "e^x e^{e^x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Differentiate the exponent e^x, and multiply it by the original function e^(e^x).",
    "graphData": null
  },
  {
    "id": "y12a-5b-q18",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Hyperbolic functions: Define \\( \\cosh x = \\frac{e^x + e^{-x}}{2} \\) and \\( \\sinh x = \\frac{e^x - e^{-x}}{2} \\).\na) Show that \\( \\frac{d}{dx} \\cosh x = \\sinh x \\) and \\( \\frac{d}{dx} \\sinh x = \\cosh x \\).\nb) Find the second derivative of each function, and show that they both satisfy \\( y'' = y \\).\nc) Show that \\( \\cosh^2 x - \\sinh^2 x = 1 \\).",
    "a": "a) Proof shown.\nb) d^2/dx^2 cosh x = cosh x, d^2/dx^2 sinh x = sinh x. Both satisfy y'' = y.\nc) Proof shown.",
    "solution": "a) Differentiating \\( \\cosh x \\):\n\\( \\frac{d}{dx} \\cosh x = \\frac{d}{dx} \\left(\\frac{e^x + e^{-x}}{2}\\right) = \\frac{e^x - e^{-x}}{2} = \\sinh x \\).\nDifferentiating \\( \\sinh x \\):\n\\( \\frac{d}{dx} \\sinh x = \\frac{d}{dx} \\left(\\frac{e^x - e^{-x}}{2}\\right) = \\frac{e^x - (-e^{-x})}{2} = \\frac{e^x + e^{-x}}{2} = \\cosh x \\).\n\nb) Differentiating twice:\nFor \\( y = \\cosh x \\):\n\\( y' = \\sinh x \\implies y'' = \\cosh x = y \\).\nFor \\( y = \\sinh x \\):\n\\( y' = \\cosh x \\implies y'' = \\sinh x = y \\).\n\nc) Calculate \\( \\cosh^2 x - \\sinh^2 x \\):\n\\( \\cosh^2 x - \\sinh^2 x = \\left(\\frac{e^x + e^{-x}}{2}\\right)^2 - \\left(\\frac{e^x - e^{-x}}{2}\\right)^2 \\)\n\\( = \\frac{e^{2x} + 2 + e^{-2x}}{4} - \\frac{e^{2x} - 2 + e^{-2x}}{4} \\)\n\\( = \\frac{(e^{2x} - e^{2x}) + (2 - (-2)) + (e^{-2x} - e^{-2x})}{4} = \\frac{4}{4} = 1 \\).",
    "solutionSteps": [
      {
        "explanation": "Show first derivatives",
        "workingOut": "\\frac{d}{dx}\\cosh x = \\sinh x \\quad \\text{and} \\quad \\frac{d}{dx}\\sinh x = \\cosh x"
      },
      {
        "explanation": "Compute second derivatives",
        "workingOut": "y'' = \\cosh x \\quad \\text{and} \\quad y'' = \\sinh x \\implies y'' = y"
      },
      {
        "explanation": "Expand the squares of both functions",
        "workingOut": "\\cosh^2 x = \\frac{e^{2x}+2+e^{-2x}}{4}, \\quad \\sinh^2 x = \\frac{e^{2x}-2+e^{-2x}}{4}"
      },
      {
        "explanation": "Subtract and simplify to 1",
        "workingOut": "\\frac{(e^{2x}+2+e^{-2x}) - (e^{2x}-2+e^{-2x})}{4} = \\frac{4}{4} = 1"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Substitute the exponential forms of cosh(x) and sinh(x) into the formulas, expand carefully, and simplify.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q19ai",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Show that \\( y = 3e^{4x} \\) is a solution of the differential equation \\( y' = 4y \\).",
    "a": "y' = 12e^(4x) = 4(3e^(4x)) = 4y.",
    "solution": "Differentiate \\( y = 3e^{4x} \\):\n\\( y' = 3(4e^{4x}) = 12e^{4x} \\).\n\nSubstitute \\( y \\) into RHS:\n\\( 4y = 4(3e^{4x}) = 12e^{4x} \\).\n\nSince LHS = RHS, the function is a solution to the equation.",
    "solutionSteps": [
      {
        "explanation": "Differentiate y",
        "workingOut": "y' = 12e^{4x}"
      },
      {
        "explanation": "Substitute into RHS",
        "workingOut": "4y = 12e^{4x}"
      },
      {
        "explanation": "Verify identity",
        "workingOut": "y' = 4y"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Find y' and compare it to 4 times y.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q19aii",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Show that \\( y = 3e^{4x} \\) is a solution of the differential equation \\( y'' - 16y = 0 \\).",
    "a": "y'' = 48e^(4x). y'' - 16y = 48e^(4x) - 16(3e^(4x)) = 0.",
    "solution": "Calculate first and second derivatives:\n\\( y' = 12e^{4x} \\)\n\\( y'' = 12(4e^{4x}) = 48e^{4x} \\).\n\nSubstitute \\( y'' \\) and \\( y \\) into the equation:\n\\( y'' - 16y = 48e^{4x} - 16(3e^{4x}) = 48e^{4x} - 48e^{4x} = 0 \\).\n\nTherefore, \\( y = 3e^{4x} \\) satisfies the equation.",
    "solutionSteps": [
      {
        "explanation": "Find second derivative",
        "workingOut": "y'' = 48e^{4x}"
      },
      {
        "explanation": "Substitute into the differential equation",
        "workingOut": "48e^{4x} - 16(3e^{4x}) = 0"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Find y'' and verify that y'' is equal to 16y.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q19b",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Show that \\( y = \\frac{1}{3}e^{-2x} + 5 \\) is a solution of the equation \\( \\frac{dy}{dx} = -2(y - 5) \\).",
    "a": "dy/dx = -2/3*e^(-2x). -2(y - 5) = -2(1/3*e^(-2x)) = -2/3*e^(-2x). LHS = RHS.",
    "solution": "1) Calculate LHS (derivative of y):\n\\( \\frac{dy}{dx} = -\\frac{2}{3}e^{-2x} \\).\n\n2) Calculate RHS by substituting \\( y \\):\n\\( -2(y - 5) = -2\\left(\\frac{1}{3}e^{-2x} + 5 - 5\\right) = -2\\left(\\frac{1}{3}e^{-2x}\\right) = -\\frac{2}{3}e^{-2x} \\).\n\nSince LHS = RHS, the function is a solution.",
    "solutionSteps": [
      {
        "explanation": "Calculate LHS derivative",
        "workingOut": "\\frac{dy}{dx} = -\\frac{2}{3}e^{-2x}"
      },
      {
        "explanation": "Calculate RHS using substitution",
        "workingOut": "-2(y - 5) = -\\frac{2}{3}e^{-2x}"
      },
      {
        "explanation": "Verify LHS = RHS",
        "workingOut": "-\\frac{2}{3}e^{-2x} = -\\frac{2}{3}e^{-2x}"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Differentiate y, then subtract 5 from y, multiply by -2, and verify that they are equal.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q19ci",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Show that \\( y = e^{-2x} \\) is a solution of the equation \\( y'' + 4y' + 4y = 0 \\).",
    "a": "y' = -2e^(-2x), y'' = 4e^(-2x). y'' + 4y' + 4y = 4e^(-2x) - 8e^(-2x) + 4e^(-2x) = 0.",
    "solution": "1) Find derivatives:\n\\( y' = -2e^{-2x} \\)\n\\( y'' = 4e^{-2x} \\).\n\n2) Substitute into the equation:\n\\( y'' + 4y' + 4y = 4e^{-2x} + 4(-2e^{-2x}) + 4(e^{-2x}) \\)\n\\( = e^{-2x}(4 - 8 + 4) = e^{-2x}(0) = 0 \\).\n\nSince LHS = 0, the equation is satisfied.",
    "solutionSteps": [
      {
        "explanation": "Find derivatives",
        "workingOut": "y' = -2e^{-2x}, \\; y'' = 4e^{-2x}"
      },
      {
        "explanation": "Substitute into equation",
        "workingOut": "4e^{-2x} - 8e^{-2x} + 4e^{-2x} = 0"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Find y' and y'' for e^(-2x), substitute them in, and factor out e^(-2x).",
    "graphData": null
  },
  {
    "id": "y12a-5b-q19cii",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Show that \\( y = x e^{-2x} \\) is a solution of the equation \\( y'' + 4y' + 4y = 0 \\).",
    "a": "y' = e^(-2x)(1 - 2x), y'' = e^(-2x)(4x - 4). y'' + 4y' + 4y = e^(-2x)[(4x - 4) + 4(1 - 2x) + 4x] = 0.",
    "solution": "1) Find derivatives using product rule:\n\\( y' = e^{-2x}(1 - 2x) \\)\n\\( y'' = -2e^{-2x}(1 - 2x) + e^{-2x}(-2) = e^{-2x}(4x - 4) \\).\n\n2) Substitute into the equation:\n\\( y'' + 4y' + 4y = e^{-2x}(4x - 4) + 4e^{-2x}(1 - 2x) + 4(x e^{-2x}) \\)\n\\( = e^{-2x}[(4x - 4) + (4 - 8x) + 4x] \\)\n\\( = e^{-2x}(4x - 8x + 4x - 4 + 4) = e^{-2x}(0) = 0 \\).\n\nTherefore, the equation is satisfied.",
    "solutionSteps": [
      {
        "explanation": "Calculate first and second derivatives",
        "workingOut": "y' = e^{-2x}(1-2x) \\quad \\text{and} \\quad y'' = e^{-2x}(4x-4)"
      },
      {
        "explanation": "Substitute derivatives into LHS",
        "workingOut": "e^{-2x}[(4x - 4) + 4(1 - 2x) + 4x]"
      },
      {
        "explanation": "Simplify terms inside brackets",
        "workingOut": "4x - 8x + 4x = 0 \\text{ and } -4 + 4 = 0 \\implies 0"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Use product rule carefully to find y' and y'', then substitute and group the terms inside the bracket.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q20a",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Find the values of \\( \\lambda \\) that make \\( y = e^{\\lambda x} \\) a solution of: \\( y'' + 2y' - 8y = 0 \\). Format: lambda = _ or _ (order values ascending)",
    "a": "lambda = -4 or 2",
    "solution": "Substitute \\( y = e^{\\lambda x} \\) and its derivatives:\n\\( y' = \\lambda e^{\\lambda x} \\)\n\\( y'' = \\lambda^2 e^{\\lambda x} \\)\ninto the equation:\n\\( \\lambda^2 e^{\\lambda x} + 2\\lambda e^{\\lambda x} - 8e^{\\lambda x} = 0 \\)\n\\( e^{\\lambda x}(\\lambda^2 + 2\\lambda - 8) = 0 \\).\nSince \\( e^{\\lambda x} \\neq 0 \\), solve the characteristic quadratic equation:\n\\( \\lambda^2 + 2\\lambda - 8 = 0 \\implies (\\lambda + 4)(\\lambda - 2) = 0 \\).\nThus, \\( \\lambda = -4 \\) or \\( \\lambda = 2 \\).",
    "solutionSteps": [
      {
        "explanation": "Obtain the characteristic equation",
        "workingOut": "\\lambda^2 + 2\\lambda - 8 = 0"
      },
      {
        "explanation": "Factorise the quadratic",
        "workingOut": "(\\lambda + 4)(\\lambda - 2) = 0"
      },
      {
        "explanation": "State the values of lambda",
        "workingOut": "\\lambda = -4, \\; 2"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Substitute the derivatives of e^(lambda*x) to form the quadratic equation lambda^2 + 2*lambda - 8 = 0.",
    "graphData": null
  },
  {
    "id": "y12a-5b-q20b",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Find the values of \\( \\lambda \\) that make \\( y = e^{\\lambda x} \\) a solution of: \\( y'' - 5y' + 6y = 0 \\). Format: lambda = _ or _ (order values ascending)",
    "a": "lambda = 2 or 3",
    "solution": "Substitute \\( y = e^{\\lambda x} \\), \\( y' = \\lambda e^{\\lambda x} \\), \\( y'' = \\lambda^2 e^{\\lambda x} \\):\n\\( e^{\\lambda x}(\\lambda^2 - 5\\lambda + 6) = 0 \\).\nSince \\( e^{\\lambda x} \\neq 0 \\), solve the quadratic:\n\\( \\lambda^2 - 5\\lambda + 6 = 0 \\implies (\\lambda - 2)(\\lambda - 3) = 0 \\).\nThus, \\( \\lambda = 2 \\) or \\( \\lambda = 3 \\).",
    "solutionSteps": [
      {
        "explanation": "Form the characteristic equation",
        "workingOut": "\\lambda^2 - 5\\lambda + 6 = 0"
      },
      {
        "explanation": "Factorise the equation",
        "workingOut": "(\\lambda - 2)(\\lambda - 3) = 0"
      },
      {
        "explanation": "State the values of lambda",
        "workingOut": "\\lambda = 2, \\; 3"
      }
    ],
    "t": "Differentiation of exponential functions",
    "hint": "Solve the characteristic quadratic equation lambda^2 - 5*lambda + 6 = 0.",
    "graphData": null
  }
];
