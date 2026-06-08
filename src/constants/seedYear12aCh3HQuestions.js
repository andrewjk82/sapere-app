export const Y12A_CH3H_QUESTIONS = [
  {
    "id": "y12a-3h-q1a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function:\n\\( f(x) = x^5 \\)",
    "a": "\\frac{x^6}{6} + C",
    "t": "Primitive functions",
    "hint": "Use the power rule for integration: add 1 to the power and divide by the new power.",
    "solutionSteps": [
      {
        "explanation": "Apply the power rule of integration",
        "workingOut": "\\int x^5 \\, dx = \\frac{x^{5+1}}{5+1} + C"
      },
      {
        "explanation": "Simplify the expression",
        "workingOut": "\\frac{x^6}{6} + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q1b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function:\n\\( f(x) = x^4 \\)",
    "a": "\\frac{x^5}{5} + C",
    "t": "Primitive functions",
    "hint": "Add 1 to the power of 4, then divide by the new power.",
    "solutionSteps": [
      {
        "explanation": "Apply the power rule of integration",
        "workingOut": "\\int x^4 \\, dx = \\frac{x^{4+1}}{4+1} + C"
      },
      {
        "explanation": "Simplify the expression",
        "workingOut": "\\frac{x^5}{5} + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q1c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function:\n\\( f(x) = x^8 \\)",
    "a": "\\frac{x^9}{9} + C",
    "t": "Primitive functions",
    "hint": "Integrate using the power rule.",
    "solutionSteps": [
      {
        "explanation": "Apply the power rule of integration",
        "workingOut": "\\int x^8 \\, dx = \\frac{x^{8+1}}{8+1} + C"
      },
      {
        "explanation": "Simplify the expression",
        "workingOut": "\\frac{x^9}{9} + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q1d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function:\n\\( f(x) = 4x \\)",
    "a": "2x^2 + C",
    "t": "Primitive functions",
    "hint": "Integrate term-by-term. The primitive of x is x^2 / 2.",
    "solutionSteps": [
      {
        "explanation": "Apply the power rule to 4x",
        "workingOut": "\\int 4x \\, dx = 4 \\left( \\frac{x^2}{2} \\right) + C"
      },
      {
        "explanation": "Simplify the coefficient",
        "workingOut": "2x^2 + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q1e",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the constant function:\n\\( f(x) = 7 \\)",
    "a": "7x + C",
    "t": "Primitive functions",
    "hint": "The primitive of a constant k is kx + C.",
    "solutionSteps": [
      {
        "explanation": "Integrate the constant term",
        "workingOut": "\\int 7 \\, dx = 7x + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q1f",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function:\n\\( f(x) = 6x^5 \\)",
    "a": "x^6 + C",
    "t": "Primitive functions",
    "hint": "Integrate by adding 1 to the power and dividing the coefficient by the new power.",
    "solutionSteps": [
      {
        "explanation": "Apply the power rule to 6x^5",
        "workingOut": "\\int 6x^5 \\, dx = 6 \\left( \\frac{x^6}{6} \\right) + C"
      },
      {
        "explanation": "Simplify the fraction",
        "workingOut": "x^6 + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q1g",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function:\n\\( f(x) = 16x^7 \\)",
    "a": "2x^8 + C",
    "t": "Primitive functions",
    "hint": "The constant multiplier remains. Integrate x^7 to x^8 / 8.",
    "solutionSteps": [
      {
        "explanation": "Apply the power rule to 16x^7",
        "workingOut": "\\int 16x^7 \\, dx = 16 \\left( \\frac{x^8}{8} \\right) + C"
      },
      {
        "explanation": "Simplify the coefficient",
        "workingOut": "2x^8 + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q1h",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the constant function:\n\\( f(x) = 0 \\)",
    "a": "C",
    "t": "Primitive functions",
    "hint": "The derivative of any constant is 0.",
    "solutionSteps": [
      {
        "explanation": "Integrate the constant 0",
        "workingOut": "\\int 0 \\, dx = C"
      }
    ]
  },
  {
    "id": "y12a-3h-q2a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function:\n\\( f(x) = x^3 + x^5 \\)",
    "a": "\\frac{x^4}{4} + \\frac{x^6}{6} + C",
    "t": "Primitive functions",
    "hint": "Integrate each term individually using the power rule.",
    "solutionSteps": [
      {
        "explanation": "Integrate each term term-by-term",
        "workingOut": "\\int (x^3 + x^5) \\, dx = \\frac{x^4}{4} + \\frac{x^6}{6} + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q2b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function:\n\\( f(x) = 3x^2 - 4x^3 \\)",
    "a": "x^3 - x^4 + C",
    "t": "Primitive functions",
    "hint": "Integrate 3x^2 to x^3 and 4x^3 to x^4.",
    "solutionSteps": [
      {
        "explanation": "Integrate term-by-term",
        "workingOut": "\\int (3x^2 - 4x^3) \\, dx = 3 \\left( \\frac{x^3}{3} \\right) - 4 \\left( \\frac{x^4}{4} \\right) + C"
      },
      {
        "explanation": "Simplify terms",
        "workingOut": "x^3 - x^4 + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q2c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function:\n\\( f(x) = 3x^2 + 6x^5 \\)",
    "a": "x^3 + x^6 + C",
    "t": "Primitive functions",
    "hint": "The primitive of 6x^5 is x^6.",
    "solutionSteps": [
      {
        "explanation": "Integrate term-by-term",
        "workingOut": "\\int (3x^2 + 6x^5) \\, dx = 3 \\left( \\frac{x^3}{3} \\right) + 6 \\left( \\frac{x^6}{6} \\right) + C"
      },
      {
        "explanation": "Simplify terms",
        "workingOut": "x^3 + x^6 + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q2d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function:\n\\( f(x) = x^2 - 2x + 3 \\)",
    "a": "\\frac{x^3}{3} - x^2 + 3x + C",
    "t": "Primitive functions",
    "hint": "Integrate each of the three terms separately.",
    "solutionSteps": [
      {
        "explanation": "Integrate term-by-term",
        "workingOut": "\\int (x^2 - 2x + 3) \\, dx = \\frac{x^3}{3} - 2 \\left( \\frac{x^2}{2} \\right) + 3x + C"
      },
      {
        "explanation": "Simplify coefficients",
        "workingOut": "\\frac{x^3}{3} - x^2 + 3x + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q2e",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function:\n\\( f(x) = 4 - 6x + 24x^7 \\)",
    "a": "4x - 3x^2 + 3x^8 + C",
    "t": "Primitive functions",
    "hint": "The primitive of 24x^7 is 3x^8.",
    "solutionSteps": [
      {
        "explanation": "Integrate term-by-term",
        "workingOut": "\\int (4 - 6x + 24x^7) \\, dx = 4x - 6 \\left( \\frac{x^2}{2} \\right) + 24 \\left( \\frac{x^8}{8} \\right) + C"
      },
      {
        "explanation": "Simplify terms",
        "workingOut": "4x - 3x^2 + 3x^8 + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q2f",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function:\n\\( f(x) = 4x^3 - 5x^4 - 6x^5 \\)",
    "a": "x^4 - x^5 - x^6 + C",
    "t": "Primitive functions",
    "hint": "Integrate each polynomial term individually.",
    "solutionSteps": [
      {
        "explanation": "Integrate term-by-term",
        "workingOut": "\\int (4x^3 - 5x^4 - 6x^5) \\, dx = 4 \\left( \\frac{x^4}{4} \\right) - 5 \\left( \\frac{x^5}{5} \\right) - 6 \\left( \\frac{x^6}{6} \\right) + C"
      },
      {
        "explanation": "Simplify the constants",
        "workingOut": "x^4 - x^5 - x^6 + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q3a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function after first expanding the product:\n\\( f(x) = x(x - 4) \\)",
    "a": "\\frac{x^3}{3} - 2x^2 + C",
    "t": "Primitive functions",
    "hint": "Expand to get x^2 - 4x, then apply the power rule.",
    "solutionSteps": [
      {
        "explanation": "Expand the expression",
        "workingOut": "x(x - 4) = x^2 - 4x"
      },
      {
        "explanation": "Integrate term-by-term",
        "workingOut": "\\int (x^2 - 4x) \\, dx = \\frac{x^3}{3} - 4 \\left( \\frac{x^2}{2} \\right) + C"
      },
      {
        "explanation": "Simplify terms",
        "workingOut": "\\frac{x^3}{3} - 2x^2 + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q3b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function after first expanding the product:\n\\( f(x) = (x + 2)(x - 3) \\)",
    "a": "\\frac{x^3}{3} - \\frac{x^2}{2} - 6x + C",
    "t": "Primitive functions",
    "hint": "Expand using FOIL to get x^2 - x - 6, then integrate.",
    "solutionSteps": [
      {
        "explanation": "Expand the product",
        "workingOut": "(x + 2)(x - 3) = x^2 - x - 6"
      },
      {
        "explanation": "Integrate term-by-term",
        "workingOut": "\\int (x^2 - x - 6) \\, dx = \\frac{x^3}{3} - \\frac{x^2}{2} - 6x + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q3c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function after first expanding the product:\n\\( f(x) = (2x - 1)(x + 3) \\)",
    "a": "\\frac{2x^3}{3} + \\frac{5x^2}{2} - 3x + C",
    "t": "Primitive functions",
    "hint": "Expand to get 2x^2 + 5x - 3, then integrate.",
    "solutionSteps": [
      {
        "explanation": "Expand the binomial product",
        "workingOut": "(2x - 1)(x + 3) = 2x^2 + 6x - x - 3 = 2x^2 + 5x - 3"
      },
      {
        "explanation": "Integrate term-by-term",
        "workingOut": "\\int (2x^2 + 5x - 3) \\, dx = \\frac{2x^3}{3} + \\frac{5x^2}{2} - 3x + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q3d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function after first expanding the product:\n\\( f(x) = x^2(4x^3 - 3x) \\)",
    "a": "\\frac{2x^6}{3} - \\frac{3x^4}{4} + C",
    "t": "Primitive functions",
    "hint": "Distribute x^2 to get 4x^5 - 3x^3.",
    "solutionSteps": [
      {
        "explanation": "Expand the product",
        "workingOut": "x^2(4x^3 - 3x) = 4x^5 - 3x^3"
      },
      {
        "explanation": "Integrate term-by-term",
        "workingOut": "\\int (4x^5 - 3x^3) \\, dx = 4 \\left( \\frac{x^6}{6} \\right) - 3 \\left( \\frac{x^4}{4} \\right) + C"
      },
      {
        "explanation": "Simplify fraction coefficients",
        "workingOut": "\\frac{2x^6}{3} - \\frac{3x^4}{4} + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q3e",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function after first expanding the product:\n\\( f(x) = 3x^2(3x^3 + 2) \\)",
    "a": "\\frac{3x^6}{2} + 2x^3 + C",
    "t": "Primitive functions",
    "hint": "Distribute 3x^2 to get 9x^5 + 6x^2.",
    "solutionSteps": [
      {
        "explanation": "Expand the product",
        "workingOut": "3x^2(3x^3 + 2) = 9x^5 + 6x^2"
      },
      {
        "explanation": "Integrate term-by-term",
        "workingOut": "\\int (9x^5 + 6x^2) \\, dx = 9 \\left( \\frac{x^6}{6} \\right) + 6 \\left( \\frac{x^3}{3} \\right) + C"
      },
      {
        "explanation": "Simplify fractions",
        "workingOut": "\\frac{3x^6}{2} + 2x^3 + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q3f",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function after first expanding the product:\n\\( f(x) = (x - 2)(1 + x^2) \\)",
    "a": "\\frac{x^4}{4} - \\frac{2x^3}{3} + \\frac{x^2}{2} - 2x + C",
    "t": "Primitive functions",
    "hint": "Expand using FOIL to get x^3 - 2x^2 + x - 2.",
    "solutionSteps": [
      {
        "explanation": "Expand the product",
        "workingOut": "(x - 2)(1 + x^2) = x + x^3 - 2 - 2x^2 = x^3 - 2x^2 + x - 2"
      },
      {
        "explanation": "Integrate term-by-term",
        "workingOut": "\\int (x^3 - 2x^2 + x - 2) \\, dx = \\frac{x^4}{4} - \\frac{2x^3}{3} + \\frac{x^2}{2} - 2x + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q4ai",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find \\( y \\) as a function of \\( x \\) if:\n\\( y' = 2x + 5 \\) and \\( y = 4 \\) when \\( x = 0 \\).",
    "a": "y = x^2 + 5x + 4",
    "t": "Primitive functions",
    "hint": "Integrate y' to find the general form y = f(x) + C, then solve for C using the given point.",
    "solutionSteps": [
      {
        "explanation": "Integrate the derivative to find the general equation",
        "workingOut": "y = \\int (2x + 5) \\, dx = x^2 + 5x + C"
      },
      {
        "explanation": "Substitute the point (0, 4) into the equation",
        "workingOut": "4 = (0)^2 + 5(0) + C \\implies C = 4"
      },
      {
        "explanation": "State the final equation",
        "workingOut": "y = x^2 + 5x + 4"
      }
    ]
  },
  {
    "id": "y12a-3h-q4aii",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find \\( y \\) as a function of \\( x \\) if:\n\\( y' = 2x + 5 \\) and \\( y = 10 \\) when \\( x = 1 \\).",
    "a": "y = x^2 + 5x + 4",
    "t": "Primitive functions",
    "hint": "Integrate y' and then use the condition y(1) = 10 to find C.",
    "solutionSteps": [
      {
        "explanation": "Integrate the derivative",
        "workingOut": "y = \\int (2x + 5) \\, dx = x^2 + 5x + C"
      },
      {
        "explanation": "Substitute x = 1, y = 10 to solve for C",
        "workingOut": "10 = 1^2 + 5(1) + C \\implies 10 = 6 + C \\implies C = 4"
      },
      {
        "explanation": "State the final equation",
        "workingOut": "y = x^2 + 5x + 4"
      }
    ]
  },
  {
    "id": "y12a-3h-q4bi",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find \\( y \\) as a function of \\( x \\) if:\n\\( y' = 6x^2 + 3 \\) and \\( y = 2 \\) when \\( x = 0 \\).",
    "a": "y = 2x^3 + 3x + 2",
    "t": "Primitive functions",
    "hint": "Find the general antiderivative, then use the initial value at x = 0.",
    "solutionSteps": [
      {
        "explanation": "Integrate the derivative",
        "workingOut": "y = \\int (6x^2 + 3) \\, dx = 2x^3 + 3x + C"
      },
      {
        "explanation": "Substitute x = 0, y = 2 to find C",
        "workingOut": "2 = 2(0)^3 + 3(0) + C \\implies C = 2"
      },
      {
        "explanation": "State the final equation",
        "workingOut": "y = 2x^3 + 3x + 2"
      }
    ]
  },
  {
    "id": "y12a-3h-q4bii",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find \\( y \\) as a function of \\( x \\) if:\n\\( y' = 6x^2 + 3 \\) and \\( y = 7 \\) when \\( x = 1 \\).",
    "a": "y = 2x^3 + 3x + 2",
    "t": "Primitive functions",
    "hint": "Integrate the derivative first, then use y(1) = 7 to find C.",
    "solutionSteps": [
      {
        "explanation": "Integrate the derivative",
        "workingOut": "y = \\int (6x^2 + 3) \\, dx = 2x^3 + 3x + C"
      },
      {
        "explanation": "Substitute x = 1, y = 7 to find C",
        "workingOut": "7 = 2(1)^3 + 3(1) + C \\implies 7 = 5 + C \\implies C = 2"
      },
      {
        "explanation": "State the final equation",
        "workingOut": "y = 2x^3 + 3x + 2"
      }
    ]
  },
  {
    "id": "y12a-3h-q4ci",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find \\( y \\) as a function of \\( x \\) if:\n\\( y' = 3x^2 - 6x + 4 \\) and \\( y = 1 \\) when \\( x = 0 \\).",
    "a": "y = x^3 - 3x^2 + 4x + 1",
    "t": "Primitive functions",
    "hint": "Integrate term-by-term and use the initial condition to find the constant C.",
    "solutionSteps": [
      {
        "explanation": "Integrate the derivative",
        "workingOut": "y = \\int (3x^2 - 6x + 4) \\, dx = x^3 - 3x^2 + 4x + C"
      },
      {
        "explanation": "Substitute x = 0, y = 1 to solve for C",
        "workingOut": "1 = 0 - 0 + 0 + C \\implies C = 1"
      },
      {
        "explanation": "State the final equation",
        "workingOut": "y = x^3 - 3x^2 + 4x + 1"
      }
    ]
  },
  {
    "id": "y12a-3h-q4cii",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find \\( y \\) as a function of \\( x \\) if:\n\\( y' = 3x^2 - 6x + 4 \\) and \\( y = 3 \\) when \\( x = 1 \\).",
    "a": "y = x^3 - 3x^2 + 4x + 1",
    "t": "Primitive functions",
    "hint": "Integrate and then solve for C using the point (1, 3).",
    "solutionSteps": [
      {
        "explanation": "Integrate the derivative",
        "workingOut": "y = \\int (3x^2 - 6x + 4) \\, dx = x^3 - 3x^2 + 4x + C"
      },
      {
        "explanation": "Substitute x = 1, y = 3 to solve for C",
        "workingOut": "3 = 1^3 - 3(1)^2 + 4(1) + C \\implies 3 = 1 - 3 + 4 + C \\implies 3 = 2 + C \\implies C = 1"
      },
      {
        "explanation": "State the final equation",
        "workingOut": "y = x^3 - 3x^2 + 4x + 1"
      }
    ]
  },
  {
    "id": "y12a-3h-q5a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Write the function using a negative power of \\( x \\), and hence find its primitive as a fraction without a negative index:\n\\( f(x) = \\frac{1}{x^3} \\)",
    "a": "-\\frac{1}{2x^2} + C",
    "t": "Primitive functions",
    "hint": "Rewrite as x^(-3) first, integrate, and then convert back to fraction format.",
    "solutionSteps": [
      {
        "explanation": "Rewrite with a negative exponent",
        "workingOut": "f(x) = x^{-3}"
      },
      {
        "explanation": "Apply the power rule of integration",
        "workingOut": "\\int x^{-3} \\, dx = \\frac{x^{-2}}{-2} + C = -\\frac{1}{2}x^{-2} + C"
      },
      {
        "explanation": "Convert back to fraction form",
        "workingOut": "-\\frac{1}{2x^2} + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q5b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Write the function using a negative power of \\( x \\), and hence find its primitive as a fraction without a negative index:\n\\( f(x) = \\frac{1}{x^4} \\)",
    "a": "-\\frac{1}{3x^3} + C",
    "t": "Primitive functions",
    "hint": "Rewrite as x^(-4), integrate, and then convert back to positive exponent fraction.",
    "solutionSteps": [
      {
        "explanation": "Rewrite with a negative exponent",
        "workingOut": "f(x) = x^{-4}"
      },
      {
        "explanation": "Apply the power rule of integration",
        "workingOut": "\\int x^{-4} \\, dx = \\frac{x^{-3}}{-3} + C"
      },
      {
        "explanation": "Convert back to positive exponent form",
        "workingOut": "-\\frac{1}{3x^3} + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q5c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Write the function using a negative power of \\( x \\), and hence find its primitive as a fraction without a negative index:\n\\( f(x) = -\\frac{3}{x^4} \\)",
    "a": "\\frac{1}{x^3} + C",
    "t": "Primitive functions",
    "hint": "Rewrite as -3x^(-4) and integrate.",
    "solutionSteps": [
      {
        "explanation": "Rewrite with a negative exponent",
        "workingOut": "f(x) = -3x^{-4}"
      },
      {
        "explanation": "Integrate using power rule",
        "workingOut": "\\int -3x^{-4} \\, dx = -3 \\left( \\frac{x^{-3}}{-3} \\right) + C = x^{-3} + C"
      },
      {
        "explanation": "Write as a positive index fraction",
        "workingOut": "\\frac{1}{x^3} + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q5d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Write the function using a negative power of \\( x \\), and hence find its primitive as a fraction without a negative index:\n\\( f(x) = -\\frac{4}{x^5} \\)",
    "a": "\\frac{1}{x^4} + C",
    "t": "Primitive functions",
    "hint": "Rewrite as -4x^(-5) and integrate.",
    "solutionSteps": [
      {
        "explanation": "Rewrite with negative index",
        "workingOut": "f(x) = -4x^{-5}"
      },
      {
        "explanation": "Integrate using the power rule",
        "workingOut": "\\int -4x^{-5} \\, dx = -4 \\left( \\frac{x^{-4}}{-4} \\right) + C = x^{-4} + C"
      },
      {
        "explanation": "Convert back to fraction form",
        "workingOut": "\\frac{1}{x^4} + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q5e",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Write the function using negative powers of \\( x \\), and hence find its primitive as a fraction without negative indices:\n\\( f(x) = \\frac{1}{x^3} - \\frac{1}{x^4} \\)",
    "a": "-\\frac{1}{2x^2} + \\frac{1}{3x^3} + C",
    "t": "Primitive functions",
    "hint": "Rewrite as x^(-3) - x^(-4) and integrate term-by-term.",
    "solutionSteps": [
      {
        "explanation": "Rewrite with negative exponents",
        "workingOut": "f(x) = x^{-3} - x^{-4}"
      },
      {
        "explanation": "Integrate term-by-term",
        "workingOut": "\\int (x^{-3} - x^{-4}) \\, dx = -\\frac{1}{2}x^{-2} - \\left( -\\frac{1}{3}x^{-3} \\right) + C"
      },
      {
        "explanation": "Convert to fraction form",
        "workingOut": "-\\frac{1}{2x^2} + \\frac{1}{3x^3} + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q6a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Write the function using a fractional index, and hence find its primitive:\n\\( f(x) = \\sqrt[3]{x} \\)",
    "a": "\\frac{3}{4}x^{\\frac{4}{3}} + C",
    "t": "Primitive functions",
    "hint": "Write root(3, x) as x^(1/3) and integrate.",
    "solutionSteps": [
      {
        "explanation": "Rewrite with a fractional exponent",
        "workingOut": "f(x) = x^{\\frac{1}{3}}"
      },
      {
        "explanation": "Apply the power rule of integration",
        "workingOut": "\\int x^{\\frac{1}{3}} \\, dx = \\frac{x^{\\frac{1}{3} + 1}}{\\frac{1}{3} + 1} + C = \\frac{x^{\\frac{4}{3}}}{\\frac{4}{3}} + C"
      },
      {
        "explanation": "Simplify the coefficient",
        "workingOut": "\\frac{3}{4}x^{\\frac{4}{3}} + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q6b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Write the function using a fractional index, and hence find its primitive:\n\\( f(x) = \\frac{1}{\\sqrt[3]{x}} \\)",
    "a": "\\frac{3}{2}x^{\\frac{2}{3}} + C",
    "t": "Primitive functions",
    "hint": "Write 1/root(3, x) as x^(-1/3) and integrate.",
    "solutionSteps": [
      {
        "explanation": "Rewrite with a negative fractional exponent",
        "workingOut": "f(x) = x^{-\\frac{1}{3}}"
      },
      {
        "explanation": "Apply the power rule of integration",
        "workingOut": "\\int x^{-\\frac{1}{3}} \\, dx = \\frac{x^{-\\frac{1}{3} + 1}}{-\\frac{1}{3} + 1} + C = \\frac{x^{\\frac{2}{3}}}{\\frac{2}{3}} + C"
      },
      {
        "explanation": "Simplify the coefficient",
        "workingOut": "\\frac{3}{2}x^{\\frac{2}{3}} + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q6c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Write the function using a fractional index, and hence find its primitive:\n\\( f(x) = \\sqrt{x} \\)",
    "a": "\\frac{2}{3}x^{\\frac{3}{2}} + C",
    "t": "Primitive functions",
    "hint": "Write sqrt(x) as x^(1/2) and integrate.",
    "solutionSteps": [
      {
        "explanation": "Rewrite with a fractional exponent",
        "workingOut": "f(x) = x^{\\frac{1}{2}}"
      },
      {
        "explanation": "Apply the power rule of integration",
        "workingOut": "\\int x^{\\frac{1}{2}} \\, dx = \\frac{x^{\\frac{3}{2}}}{\\frac{3}{2}} + C"
      },
      {
        "explanation": "Simplify the coefficient",
        "workingOut": "\\frac{2}{3}x^{\\frac{3}{2}} + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q6d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Write the function using a fractional index, and hence find its primitive:\n\\( f(x) = \\frac{3}{\\sqrt{x}} \\)",
    "a": "6\\sqrt{x} + C",
    "t": "Primitive functions",
    "hint": "Rewrite as 3x^(-1/2) and integrate.",
    "solutionSteps": [
      {
        "explanation": "Rewrite with negative fractional index",
        "workingOut": "f(x) = 3x^{-\\frac{1}{2}}"
      },
      {
        "explanation": "Integrate using power rule",
        "workingOut": "\\int 3x^{-\\frac{1}{2}} \\, dx = 3 \\left( \\frac{x^{\\frac{1}{2}}}{\\frac{1}{2}} \\right) + C = 6x^{\\frac{1}{2}} + C"
      },
      {
        "explanation": "Express in radical form",
        "workingOut": "6\\sqrt{x} + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q6e",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Write the function using a fractional index, and hence find its primitive:\n\\( f(x) = \\sqrt[4]{x^3} \\)",
    "a": "\\frac{4}{7}x^{\\frac{7}{4}} + C",
    "t": "Primitive functions",
    "hint": "Recall that root(a, x^b) is x^(b/a). Integrate x^(3/4).",
    "solutionSteps": [
      {
        "explanation": "Rewrite with a fractional exponent",
        "workingOut": "f(x) = x^{\\frac{3}{4}}"
      },
      {
        "explanation": "Apply the power rule of integration",
        "workingOut": "\\int x^{\\frac{3}{4}} \\, dx = \\frac{x^{\\frac{7}{4}}}{\\frac{7}{4}} + C"
      },
      {
        "explanation": "Simplify the coefficient fraction",
        "workingOut": "\\frac{4}{7}x^{\\frac{7}{4}} + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q7a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find \\( y \\) as a function of \\( x \\) if:\n\\( \\frac{dy}{dx} = \\frac{1}{\\sqrt{x}} \\) and \\( y = 3 \\) when \\( x = 0 \\).",
    "a": "y = 2\\sqrt{x} + 3",
    "t": "Primitive functions",
    "hint": "Rewrite the derivative as x^(-1/2) and integrate. Then solve for C.",
    "solutionSteps": [
      {
        "explanation": "Write derivative with negative exponent and integrate",
        "workingOut": "y = \\int x^{-\\frac{1}{2}} \\, dx = 2x^{\\frac{1}{2}} + C = 2\\sqrt{x} + C"
      },
      {
        "explanation": "Substitute initial condition (0, 3) to find C",
        "workingOut": "3 = 2\\sqrt{0} + C \\implies C = 3"
      },
      {
        "explanation": "State the final equation",
        "workingOut": "y = 2\\sqrt{x} + 3"
      }
    ]
  },
  {
    "id": "y12a-3h-q7b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find \\( y \\) as a function of \\( x \\) if:\n\\( \\frac{dy}{dx} = \\frac{1}{\\sqrt{x}} \\) and \\( y = 10 \\) when \\( x = 4 \\).",
    "a": "y = 2\\sqrt{x} + 6",
    "t": "Primitive functions",
    "hint": "Integrate to get y = 2*sqrt(x) + C. Use y(4) = 10 to find C.",
    "solutionSteps": [
      {
        "explanation": "Integrate the derivative",
        "workingOut": "y = \\int x^{-\\frac{1}{2}} \\, dx = 2\\sqrt{x} + C"
      },
      {
        "explanation": "Substitute x = 4, y = 10 to solve for C",
        "workingOut": "10 = 2\\sqrt{4} + C \\implies 10 = 4 + C \\implies C = 6"
      },
      {
        "explanation": "State the final equation",
        "workingOut": "y = 2\\sqrt{x} + 6"
      }
    ]
  },
  {
    "id": "y12a-3h-q8a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the member of the family of curves with gradient function \\( \\frac{dy}{dx} = -2x \\) that passes through the point \\( A(1, 3) \\).",
    "a": "y = -x^2 + 4",
    "t": "Primitive functions",
    "hint": "Integrate to find the family y = -x^2 + C, then solve for C using point A.",
    "solutionSteps": [
      {
        "explanation": "Integrate the gradient function to find the family of curves",
        "workingOut": "y = \\int -2x \\, dx = -x^2 + C"
      },
      {
        "explanation": "Substitute x = 1, y = 3 to solve for C",
        "workingOut": "3 = -1^2 + C \\implies 3 = -1 + C \\implies C = 4"
      },
      {
        "explanation": "Formulate the final equation",
        "workingOut": "y = -x^2 + 4"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-3, 8, 3, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.8,0], [2.8,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){return -x*x + 6;}, -3, 3], {strokeColor: 'gray', strokeWidth: 1, dash: 2});\nboard.create('functiongraph', [function(x){return -x*x + 2;}, -3, 3], {strokeColor: 'gray', strokeWidth: 1, dash: 2});\nboard.create('functiongraph', [function(x){return -x*x;}, -3, 3], {strokeColor: 'gray', strokeWidth: 1, dash: 2});\nboard.create('functiongraph', [function(x){return -x*x + 4;}, -3, 3], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [1, 3], {name: 'A(1,3)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3h-q8b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the member of the family of curves with gradient function \\( \\frac{dy}{dx} = 2 \\) that passes through the point \\( A(1, 4) \\).",
    "a": "y = 2x + 2",
    "t": "Primitive functions",
    "hint": "Integrate to find the linear family y = 2x + C, then plug in coordinates (1, 4).",
    "solutionSteps": [
      {
        "explanation": "Integrate the gradient function to find the family of lines",
        "workingOut": "y = \\int 2 \\, dx = 2x + C"
      },
      {
        "explanation": "Substitute coordinates (1, 4) to solve for C",
        "workingOut": "4 = 2(1) + C \\implies C = 2"
      },
      {
        "explanation": "State the final line equation",
        "workingOut": "y = 2x + 2"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2, 8, 4, -2],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.8,0], [3.8,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){return 2*x - 2;}, -2, 4], {strokeColor: 'gray', strokeWidth: 1, dash: 2});\nboard.create('functiongraph', [function(x){return 2*x;}, -2, 4], {strokeColor: 'gray', strokeWidth: 1, dash: 2});\nboard.create('functiongraph', [function(x){return 2*x + 4;}, -2, 4], {strokeColor: 'gray', strokeWidth: 1, dash: 2});\nboard.create('functiongraph', [function(x){return 2*x + 2;}, -2, 4], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [1, 4], {name: 'A(1,4)', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, 12]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3h-q8c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the member of the family of curves with gradient function \\( \\frac{dy}{dx} = 6x^2 \\) that passes through the point \\( A(1, 5) \\).",
    "a": "y = 2x^3 + 3",
    "t": "Primitive functions",
    "hint": "Integrate to get y = 2x^3 + C, then solve for C with point (1, 5).",
    "solutionSteps": [
      {
        "explanation": "Integrate to get the cubic curve family",
        "workingOut": "y = \\int 6x^2 \\, dx = 2x^3 + C"
      },
      {
        "explanation": "Substitute coordinates (1, 5)",
        "workingOut": "5 = 2(1)^3 + C \\implies C = 3"
      },
      {
        "explanation": "State the specific member",
        "workingOut": "y = 2x^3 + 3"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2, 10, 3, -2],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.8,0], [2.8,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,9.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){return 2*x*x*x - 1;}, -2, 2.5], {strokeColor: 'gray', strokeWidth: 1, dash: 2});\nboard.create('functiongraph', [function(x){return 2*x*x*x + 1;}, -2, 2.5], {strokeColor: 'gray', strokeWidth: 1, dash: 2});\nboard.create('functiongraph', [function(x){return 2*x*x*x + 5;}, -2, 2.5], {strokeColor: 'gray', strokeWidth: 1, dash: 2});\nboard.create('functiongraph', [function(x){return 2*x*x*x + 3;}, -2, 2.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [1, 5], {name: 'A(1,5)', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, 12]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3h-q8d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the member of the family of curves with gradient function \\( \\frac{dy}{dx} = -\\frac{2}{x^2} \\) that passes through the point \\( A(2, 3) \\).",
    "a": "y = \\frac{2}{x} + 2",
    "t": "Primitive functions",
    "hint": "Integrate -2/x^2 to find family y = 2/x + C. Solve for C with (2, 3).",
    "solutionSteps": [
      {
        "explanation": "Integrate the gradient function",
        "workingOut": "y = \\int -2x^{-2} \\, dx = \\frac{-2x^{-1}}{-1} + C = \\frac{2}{x} + C"
      },
      {
        "explanation": "Substitute coordinates (2, 3) to find C",
        "workingOut": "3 = \\frac{2}{2} + C \\implies 3 = 1 + C \\implies C = 2"
      },
      {
        "explanation": "State the curve equation",
        "workingOut": "y = \\frac{2}{x} + 2"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-1, 8, 5, -1],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.8,0], [4.8,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-0.8], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){return 2/x;}, 0.2, 5], {strokeColor: 'gray', strokeWidth: 1, dash: 2});\nboard.create('functiongraph', [function(x){return 2/x + 4;}, 0.2, 5], {strokeColor: 'gray', strokeWidth: 1, dash: 2});\nboard.create('functiongraph', [function(x){return 2/x + 2;}, 0.2, 5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [2, 3], {name: 'A(2,3)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3h-q9a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the linear composite integration rule to find the primitive:\n\\( f(x) = (x+2)^3 \\)",
    "a": "\\frac{(x+2)^4}{4} + C",
    "t": "Primitive functions",
    "hint": "The primitive of (ax+b)^n is (ax+b)^(n+1) / a(n+1). Here, a = 1.",
    "solutionSteps": [
      {
        "explanation": "Apply the composite integration rule",
        "workingOut": "\\int (x+2)^3 \\, dx = \\frac{(x+2)^4}{1 \\times 4} + C"
      },
      {
        "explanation": "Simplify terms",
        "workingOut": "\\frac{(x+2)^4}{4} + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q9b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the linear composite integration rule to find the primitive:\n\\( f(x) = (x-3)^4 \\)",
    "a": "\\frac{(x-3)^5}{5} + C",
    "t": "Primitive functions",
    "hint": "Apply the rule with a = 1 and n = 4.",
    "solutionSteps": [
      {
        "explanation": "Apply the integration rule",
        "workingOut": "\\int (x-3)^4 \\, dx = \\frac{(x-3)^5}{5} + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q9c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the linear composite integration rule to find the primitive:\n\\( f(x) = (x+4)^3 \\)",
    "a": "\\frac{(x+4)^4}{4} + C",
    "t": "Primitive functions",
    "hint": "Integrate composite linear function where a = 1 and n = 3.",
    "solutionSteps": [
      {
        "explanation": "Integrate the composite function",
        "workingOut": "\\int (x+4)^3 \\, dx = \\frac{(x+4)^4}{4} + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q9d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the linear composite integration rule to find the primitive:\n\\( f(x) = (3x+2)^4 \\)",
    "a": "\\frac{(3x+2)^5}{15} + C",
    "t": "Primitive functions",
    "hint": "Divide by the coefficient of x, which is a = 3, multiplied by the new power n+1 = 5.",
    "solutionSteps": [
      {
        "explanation": "Apply composite integration rule",
        "workingOut": "\\int (3x+2)^4 \\, dx = \\frac{(3x+2)^5}{3 \\times 5} + C"
      },
      {
        "explanation": "Simplify the denominator",
        "workingOut": "\\frac{(3x+2)^5}{15} + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q9e",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the linear composite integration rule to find the primitive:\n\\( f(x) = (2x-5)^5 \\)",
    "a": "\\frac{(2x-5)^6}{12} + C",
    "t": "Primitive functions",
    "hint": "Here a = 2 and n = 5. Divide the result by 2 * 6.",
    "solutionSteps": [
      {
        "explanation": "Apply composite integration rule",
        "workingOut": "\\int (2x-5)^5 \\, dx = \\frac{(2x-5)^6}{2 \\times 6} + C"
      },
      {
        "explanation": "Simplify the denominator",
        "workingOut": "\\frac{(2x-5)^6}{12} + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q9f",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the linear composite integration rule to find the primitive:\n\\( f(x) = (4x-1)^3 \\)",
    "a": "\\frac{(4x-1)^4}{16} + C",
    "t": "Primitive functions",
    "hint": "Here a = 4, n = 3. Denominator will be 4 * 4.",
    "solutionSteps": [
      {
        "explanation": "Integrate composite linear function",
        "workingOut": "\\int (4x-1)^3 \\, dx = \\frac{(4x-1)^4}{4 \\times 4} + C"
      },
      {
        "explanation": "Simplify terms",
        "workingOut": "\\frac{(4x-1)^4}{16} + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q9g",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the linear composite integration rule to find the primitive:\n\\( f(x) = (1-2x)^3 \\)",
    "a": "-\\frac{(1-2x)^4}{8} + C",
    "t": "Primitive functions",
    "hint": "Be careful of the negative sign from the coefficient of x, which is a = -2.",
    "solutionSteps": [
      {
        "explanation": "Identify a and n, and integrate",
        "workingOut": "\\int (1-2x)^3 \\, dx = \\frac{(1-2x)^4}{-2 \\times 4} + C"
      },
      {
        "explanation": "Simplify fractions",
        "workingOut": "\\frac{(1-2x)^4}{-8} + C = -\\frac{(1-2x)^4}{8} + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q9h",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the linear composite integration rule to find the primitive:\n\\( f(x) = (2-3x)^4 \\)",
    "a": "-\\frac{(2-3x)^5}{15} + C",
    "t": "Primitive functions",
    "hint": "The coefficient of x is a = -3. Divide by -3 * 5 = -15.",
    "solutionSteps": [
      {
        "explanation": "Apply composite integration rule",
        "workingOut": "\\int (2-3x)^4 \\, dx = \\frac{(2-3x)^5}{-3 \\times 5} + C"
      },
      {
        "explanation": "Simplify denominator",
        "workingOut": "-\\frac{(2-3x)^5}{15} + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q9i",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the linear composite integration rule to find the primitive:\n\\( f(x) = \\frac{1}{(x-3)^5} \\)",
    "a": "-\\frac{1}{4(x-3)^4} + C",
    "t": "Primitive functions",
    "hint": "Rewrite as (x-3)^(-5) and integrate.",
    "solutionSteps": [
      {
        "explanation": "Write with a negative exponent",
        "workingOut": "f(x) = (x-3)^{-5}"
      },
      {
        "explanation": "Apply composite integration rule",
        "workingOut": "\\int (x-3)^{-5} \\, dx = \\frac{(x-3)^{-4}}{1 \\times (-4)} + C"
      },
      {
        "explanation": "Convert to positive exponent fractional form",
        "workingOut": "-\\frac{1}{4(x-3)^4} + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q9j",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the linear composite integration rule to find the primitive:\n\\( f(x) = \\frac{1}{(1-2x)^6} \\)",
    "a": "\\frac{1}{10(1-2x)^5} + C",
    "t": "Primitive functions",
    "hint": "Rewrite as (1-2x)^(-6) and integrate. The coefficient of x is -2.",
    "solutionSteps": [
      {
        "explanation": "Write with negative index",
        "workingOut": "f(x) = (1-2x)^{-6}"
      },
      {
        "explanation": "Apply composite integration rule",
        "workingOut": "\\int (1-2x)^{-6} \\, dx = \\frac{(1-2x)^{-5}}{-2 \\times (-5)} + C"
      },
      {
        "explanation": "Simplify denominator and negative signs",
        "workingOut": "\\frac{1}{10(1-2x)^5} + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q10a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the primitive of the function:\n\\( f(x) = \\sqrt{x+3} \\)",
    "a": "\\frac{2}{3}(x+3)^{\\frac{3}{2}} + C",
    "t": "Primitive functions",
    "hint": "Express as (x+3)^(1/2), then apply the composite linear integration rule.",
    "solutionSteps": [
      {
        "explanation": "Convert radical to rational exponent",
        "workingOut": "f(x) = (x+3)^{\\frac{1}{2}}"
      },
      {
        "explanation": "Apply composite linear integration rule with a = 1",
        "workingOut": "\\int (x+3)^{\\frac{1}{2}} \\, dx = \\frac{(x+3)^{\\frac{3}{2}}}{1 \\times \\frac{3}{2}} + C"
      },
      {
        "explanation": "Simplify coefficient",
        "workingOut": "\\frac{2}{3}(x+3)^{\\frac{3}{2}} + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q10b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the primitive of the function:\n\\( f(x) = \\sqrt{x-2} \\)",
    "a": "\\frac{2}{3}(x-2)^{\\frac{3}{2}} + C",
    "t": "Primitive functions",
    "hint": "Integrate (x-2)^(1/2).",
    "solutionSteps": [
      {
        "explanation": "Convert to index form",
        "workingOut": "f(x) = (x-2)^{\\frac{1}{2}}"
      },
      {
        "explanation": "Integrate composite linear function",
        "workingOut": "\\int (x-2)^{\\frac{1}{2}} \\, dx = \\frac{2}{3}(x-2)^{\\frac{3}{2}} + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q10c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the primitive of the function:\n\\( f(x) = \\sqrt{3-x} \\)",
    "a": "-\\frac{2}{3}(3-x)^{\\frac{3}{2}} + C",
    "t": "Primitive functions",
    "hint": "Be careful, the coefficient of x is -1.",
    "solutionSteps": [
      {
        "explanation": "Convert to index form",
        "workingOut": "f(x) = (3-x)^{\\frac{1}{2}}"
      },
      {
        "explanation": "Integrate composite linear function, dividing by a = -1",
        "workingOut": "\\int (3-x)^{\\frac{1}{2}} \\, dx = \\frac{(3-x)^{\\frac{3}{2}}}{-1 \\times \\frac{3}{2}} + C"
      },
      {
        "explanation": "Simplify coefficient",
        "workingOut": "-\\frac{2}{3}(3-x)^{\\frac{3}{2}} + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q10d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the primitive of the function:\n\\( f(x) = \\sqrt{3x-5} \\)",
    "a": "\\frac{2}{9}(3x-5)^{\\frac{3}{2}} + C",
    "t": "Primitive functions",
    "hint": "Divide by coefficient a = 3 multiplied by rational power 3/2.",
    "solutionSteps": [
      {
        "explanation": "Convert to index form",
        "workingOut": "f(x) = (3x-5)^{\\frac{1}{2}}"
      },
      {
        "explanation": "Integrate composite linear function",
        "workingOut": "\\int (3x-5)^{\\frac{1}{2}} \\, dx = \\frac{(3x-5)^{\\frac{3}{2}}}{3 \\times \\frac{3}{2}} + C"
      },
      {
        "explanation": "Simplify denominator",
        "workingOut": "\\frac{2}{9}(3x-5)^{\\frac{3}{2}} + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q10e",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the primitive of the function:\n\\( f(x) = \\sqrt{2x-3} \\)",
    "a": "\\frac{1}{3}(2x-3)^{\\frac{3}{2}} + C",
    "t": "Primitive functions",
    "hint": "Divide by a = 2 multiplied by 3/2.",
    "solutionSteps": [
      {
        "explanation": "Convert to index form",
        "workingOut": "f(x) = (2x-3)^{\\frac{1}{2}}"
      },
      {
        "explanation": "Integrate composite linear function",
        "workingOut": "\\int (2x-3)^{\\frac{1}{2}} \\, dx = \\frac{(2x-3)^{\\frac{3}{2}}}{2 \\times \\frac{3}{2}} + C"
      },
      {
        "explanation": "Simplify coefficient",
        "workingOut": "\\frac{1}{3}(2x-3)^{\\frac{3}{2}} + C"
      }
    ]
  },
  {
    "id": "y12a-3h-q11a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find \\( y \\) if \\( y' = (x-2)^4 \\), given that \\( y = 3 \\) when \\( x = 2 \\).",
    "a": "y = \\frac{(x-2)^5}{5} + 3",
    "t": "Primitive functions",
    "hint": "Integrate composite linear function and solve for C with initial coordinates.",
    "solutionSteps": [
      {
        "explanation": "Integrate composite derivative",
        "workingOut": "y = \\int (x-2)^4 \\, dx = \\frac{(x-2)^5}{5} + C"
      },
      {
        "explanation": "Use initial condition x = 2, y = 3 to solve for C",
        "workingOut": "3 = \\frac{(2-2)^5}{5} + C \\implies C = 3"
      },
      {
        "explanation": "State the final equation",
        "workingOut": "y = \\frac{(x-2)^5}{5} + 3"
      }
    ]
  },
  {
    "id": "y12a-3h-q11b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find \\( y \\) if \\( y' = (3x+1)^3 \\), given that \\( y = -2 \\) when \\( x = 0 \\).",
    "a": "y = \\frac{(3x+1)^4}{12} - \\frac{25}{12}",
    "t": "Primitive functions",
    "hint": "Remember to divide by 3 * 4 = 12 when integrating.",
    "solutionSteps": [
      {
        "explanation": "Integrate composite linear function",
        "workingOut": "y = \\int (3x+1)^3 \\, dx = \\frac{(3x+1)^4}{3 \\times 4} + C = \\frac{(3x+1)^4}{12} + C"
      },
      {
        "explanation": "Substitute initial condition (0, -2) to solve for C",
        "workingOut": "-2 = \\frac{(3(0)+1)^4}{12} + C \\implies -2 = \\frac{1}{12} + C \\implies C = -2 - \\frac{1}{12} = -\\frac{25}{12}"
      },
      {
        "explanation": "State the final equation",
        "workingOut": "y = \\frac{(3x+1)^4}{12} - \\frac{25}{12}"
      }
    ]
  },
  {
    "id": "y12a-3h-q11c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find \\( y \\) if \\( y' = \\sqrt{3x+1} \\), given that \\( y = 1 \\) when \\( x = 0 \\).",
    "a": "y = \\frac{2}{9}(3x+1)^{\\frac{3}{2}} + \\frac{7}{9}",
    "t": "Primitive functions",
    "hint": "Integrate composite root to power 3/2, dividing by 3 * (3/2) = 9/2.",
    "solutionSteps": [
      {
        "explanation": "Integrate composite rational exponent",
        "workingOut": "y = \\int (3x+1)^{\\frac{1}{2}} \\, dx = \\frac{(3x+1)^{\\frac{3}{2}}}{3 \\times \\frac{3}{2}} + C = \\frac{2}{9}(3x+1)^{\\frac{3}{2}} + C"
      },
      {
        "explanation": "Substitute initial values to find C",
        "workingOut": "1 = \\frac{2}{9}(3(0)+1)^{\\frac{3}{2}} + C \\implies 1 = \\frac{2}{9} + C \\implies C = 1 - \\frac{2}{9} = \\frac{7}{9}"
      },
      {
        "explanation": "State the final equation",
        "workingOut": "y = \\frac{2}{9}(3x+1)^{\\frac{3}{2}} + \\frac{7}{9}"
      }
    ]
  },
  {
    "id": "y12a-3h-q12a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the equation of the curve through the origin whose gradient is:\n\\( \\frac{dy}{dx} = 5x^4 - 3x^2 + 2 \\)",
    "a": "y = x^5 - x^3 + 2x",
    "t": "Primitive functions",
    "hint": "Origin coordinates are (0, 0). Integrate and solve for C.",
    "solutionSteps": [
      {
        "explanation": "Integrate gradient function term-by-term",
        "workingOut": "y = \\int (5x^4 - 3x^2 + 2) \\, dx = x^5 - x^3 + 2x + C"
      },
      {
        "explanation": "Substitute coordinates (0, 0) of the origin",
        "workingOut": "0 = 0 - 0 + 0 + C \\implies C = 0"
      },
      {
        "explanation": "State final equation",
        "workingOut": "y = x^5 - x^3 + 2x"
      }
    ]
  },
  {
    "id": "y12a-3h-q12b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the curve passing through \\( (2, 5) \\) with gradient function:\n\\( \\frac{dy}{dx} = 3 + 4x - 3x^2 \\)",
    "a": "y = -x^3 + 2x^2 + 3x - 1",
    "t": "Primitive functions",
    "hint": "Integrate and use condition y(2) = 5 to find C.",
    "solutionSteps": [
      {
        "explanation": "Integrate gradient function",
        "workingOut": "y = \\int (3 + 4x - 3x^2) \\, dx = 3x + 2x^2 - x^3 + C"
      },
      {
        "explanation": "Substitute x = 2, y = 5 to solve for C",
        "workingOut": "5 = 3(2) + 2(2)^2 - 2^3 + C \\implies 5 = 6 + 8 - 8 + C \\implies 5 = 6 + C \\implies C = -1"
      },
      {
        "explanation": "State final equation",
        "workingOut": "y = -x^3 + 2x^2 + 3x - 1"
      }
    ]
  },
  {
    "id": "y12a-3h-q12c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the curve through the point \\( (\\frac{1}{3}, 2) \\) with gradient function:\n\\( y' = (2-3x)^3 \\)",
    "a": "y = -\\frac{(2-3x)^4}{12} + \\frac{25}{12}",
    "t": "Primitive functions",
    "hint": "Use linear composite integration and substitute coordinates to solve for C.",
    "solutionSteps": [
      {
        "explanation": "Integrate gradient function using composite rule",
        "workingOut": "y = \\int (2-3x)^3 \\, dx = \\frac{(2-3x)^4}{-3 \\times 4} + C = -\\frac{(2-3x)^4}{12} + C"
      },
      {
        "explanation": "Substitute coordinate point x = 1/3, y = 2 to solve for C",
        "workingOut": "2 = -\\frac{(2-3(1/3))^4}{12} + C \\implies 2 = -\\frac{(2-1)^4}{12} + C \\implies 2 = -\\frac{1}{12} + C \\implies C = 2 + \\frac{1}{12} = \\frac{25}{12}"
      },
      {
        "explanation": "State final equation",
        "workingOut": "y = -\\frac{(2-3x)^4}{12} + \\frac{25}{12}"
      }
    ]
  },
  {
    "id": "y12a-3h-q13",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find \\( y \\) if \\( \\frac{dy}{dt} = 4t^3 - 6t^2 + 3 \\), and \\( y = 5 \\) when \\( t = 0 \\). Hence, find the value of \\( y \\) when \\( t = 2 \\).",
    "a": "11",
    "t": "Primitive functions",
    "hint": "Integrate to get y(t), solve for C, then evaluate y(2).",
    "solutionSteps": [
      {
        "explanation": "Integrate the derivative with respect to t",
        "workingOut": "y = \\int (4t^3 - 6t^2 + 3) \\, dt = t^4 - 2t^3 + 3t + C"
      },
      {
        "explanation": "Substitute initial condition (0, 5) to find C",
        "workingOut": "5 = 0^4 - 2(0)^3 + 3(0) + C \\implies C = 5"
      },
      {
        "explanation": "Write down the equation for y",
        "workingOut": "y = t^4 - 2t^3 + 3t + 5"
      },
      {
        "explanation": "Evaluate the equation at t = 2",
        "workingOut": "y(2) = 2^4 - 2(2)^3 + 3(2) + 5 = 16 - 16 + 6 + 5 = 11"
      }
    ]
  },
  {
    "id": "y12a-3h-q14",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "Explain why the rule for finding the primitive of \\( x^n \\), which is \\( \\frac{x^{n+1}}{n+1} \\) (for \\( n \\ne -1 \\)), cannot be applied when \\( n = -1 \\).",
    "a": "Substituting n = -1 yields division by zero in the fraction, which is mathematically undefined.",
    "t": "Primitive functions",
    "hint": "Look at what happens to the denominator when you plug in n = -1.",
    "solutionSteps": [
      {
        "explanation": "Examine the denominator of the standard integration formula",
        "workingOut": "\\text{The denominator is } n + 1"
      },
      {
        "explanation": "Substitute n = -1 into the denominator expression",
        "workingOut": "-1 + 1 = 0"
      },
      {
        "explanation": "Conclude why division by zero is invalid",
        "workingOut": "\\text{Division by zero is undefined, so the rule fails. The primitive of } x^{-1} \\text{ is instead } \\ln|x| + C."
      }
    ]
  },
  {
    "id": "y12a-3h-q15",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "Find \\( y \\) as a function of \\( x \\) if \\( y'' = 12x + 2 \\), given that when \\( x = 1 \\), \\( y' = 5 \\) and \\( y = 3 \\).",
    "a": "y = 2x^3 + x^2 - 3x + 3",
    "t": "Primitive functions",
    "hint": "Integrate twice. Find the constant of integration for y' first, then integrate again to find the constant for y.",
    "solutionSteps": [
      {
        "explanation": "Integrate y'' once to find the general expression for y'",
        "workingOut": "y' = \\int (12x + 2) \\, dx = 6x^2 + 2x + C_1"
      },
      {
        "explanation": "Use the condition y'(1) = 5 to find C1",
        "workingOut": "5 = 6(1)^2 + 2(1) + C_1 \\implies 5 = 8 + C_1 \\implies C_1 = -3"
      },
      {
        "explanation": "Write down the expression for y'",
        "workingOut": "y' = 6x^2 + 2x - 3"
      },
      {
        "explanation": "Integrate y' to find the general expression for y",
        "workingOut": "y = \\int (6x^2 + 2x - 3) \\, dx = 2x^3 + x^2 - 3x + C_2"
      },
      {
        "explanation": "Use the condition y(1) = 3 to find C2",
        "workingOut": "3 = 2(1)^3 + 1^2 - 3(1) + C_2 \\implies 3 = 2 + 1 - 3 + C_2 \\implies 3 = C_2"
      },
      {
        "explanation": "Formulate final equation for y",
        "workingOut": "y = 2x^3 + x^2 - 3x + 3"
      }
    ]
  },
  {
    "id": "y12a-3h-q16",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "A function \\( f(x) \\) has second derivative \\( f''(x) = 2x - 6 \\). Its graph passes through the point \\( (3, 20) \\), and at this point the tangent has a gradient of \\( 11 \\). Complete parts a) and b).",
    "t": "Primitive functions",
    "solutionSteps": [],
    "subQuestions": [
      {
        "id": "y12a-3h-q16a",
        "type": "teacher_review",
        "question": "a) Show that \\( f'(x) = x^2 - 6x + 20 \\).",
        "a": "Integrating f''(x) gives f'(x) = x^2 - 6x + C. Substituting x = 3 and f'(3) = 11 gives 11 = 9 - 18 + C, which yields C = 20. Thus, f'(x) = x^2 - 6x + 20.",
        "solutionSteps": [
          {
            "explanation": "Integrate the second derivative",
            "workingOut": "f'(x) = \\int (2x - 6) \\, dx = x^2 - 6x + C_1"
          },
          {
            "explanation": "Substitute coordinates x = 3 and tangent gradient = 11",
            "workingOut": "11 = 3^2 - 6(3) + C_1 \\implies 11 = 9 - 18 + C_1"
          },
          {
            "explanation": "Solve for the constant C1",
            "workingOut": "11 = -9 + C_1 \\implies C_1 = 20 \\implies f'(x) = x^2 - 6x + 20"
          }
        ]
      },
      {
        "id": "y12a-3h-q16b",
        "type": "teacher_review",
        "question": "b) Hence find \\( f(x) \\), and show that its graph cuts the y-axis at \\( (0, -22) \\).",
        "a": "Integrating f'(x) gives f(x) = x^3/3 - 3x^2 + 20x - 22. Evaluating f(0) gives -22, which shows the y-intercept is (0, -22).",
        "solutionSteps": [
          {
            "explanation": "Integrate the first derivative function f'(x)",
            "workingOut": "f(x) = \\int (x^2 - 6x + 20) \\, dx = \\frac{x^3}{3} - 3x^2 + 20x + C_2"
          },
          {
            "explanation": "Substitute the point (3, 20) to find C2",
            "workingOut": "20 = \\frac{3^3}{3} - 3(3)^2 + 20(3) + C_2 \\implies 20 = 9 - 27 + 60 + C_2"
          },
          {
            "explanation": "Solve for the constant C2",
            "workingOut": "20 = 42 + C_2 \\implies C_2 = -22 \\implies f(x) = \\frac{x^3}{3} - 3x^2 + 20x - 22"
          },
          {
            "explanation": "Find the y-intercept of the curve",
            "workingOut": "f(0) = -22 \\implies \\text{cuts the y-axis at } (0, -22)"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3h-q17",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "If \\( y'' = 12 - 6x \\), complete parts a) and b).",
    "t": "Primitive functions",
    "solutionSteps": [],
    "subQuestions": [
      {
        "id": "y12a-3h-q17a",
        "type": "teacher_review",
        "question": "a) Show that \\( y = 6x^2 - x^3 + Cx + D \\), for some constants \\( C \\) and \\( D \\).",
        "a": "Integrating y'' = 12 - 6x once gives y' = 12x - 3x^2 + C. Integrating again gives y = 6x^2 - x^3 + Cx + D.",
        "solutionSteps": [
          {
            "explanation": "Integrate y'' to find y'",
            "workingOut": "y' = \\int (12 - 6x) \\, dx = 12x - 3x^2 + C"
          },
          {
            "explanation": "Integrate y' to find y",
            "workingOut": "y = \\int (12x - 3x^2 + C) \\, dx = 6x^2 - x^3 + Cx + D"
          }
        ]
      },
      {
        "id": "y12a-3h-q17b",
        "type": "short_answer",
        "question": "b) Hence find the equation of the curve given that it passes through the points \\( (1, 10) \\) and \\( (-1, 2) \\).",
        "a": "y = -x^3 + 6x^2 + 5x",
        "solutionSteps": [
          {
            "explanation": "Substitute coordinates of the first point (1, 10)",
            "workingOut": "10 = 6(1)^2 - 1^3 + C(1) + D \\implies C + D = 5"
          },
          {
            "explanation": "Substitute coordinates of the second point (-1, 2)",
            "workingOut": "2 = 6(-1)^2 - (-1)^3 + C(-1) + D \\implies 2 = 6 + 1 - C + D \\implies -C + D = -5"
          },
          {
            "explanation": "Solve the system of linear equations",
            "workingOut": "(C + D) + (-C + D) = 5 - 5 \\implies 2D = 0 \\implies D = 0 \\implies C = 5"
          },
          {
            "explanation": "State the final curve equation",
            "workingOut": "y = -x^3 + 6x^2 + 5x"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3h-q18",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "Consider the derivative \\( f'(x) = -\\frac{4}{x^2} \\). We know that a continuous curve passing through \\( A(2, 3) \\) has equation \\( y = \\frac{4}{x} + 1 \\). This is not strictly true, because the asymptote at \\( x = 0 \\) allows the two branches of the curve to move independently so that each branch has its own arbitrary constant. Complete parts a) and b).",
    "t": "Primitive functions",
    "solutionSteps": [],
    "subQuestions": [
      {
        "id": "y12a-3h-q18a",
        "type": "teacher_review",
        "question": "a) Prove that the piecewise-defined function \\( g(x) = \\begin{cases} \\frac{4}{x} + 1, & \\text{for } x > 0 \\\\ \\frac{4}{x} + 5, & \\text{for } x < 0 \\end{cases} \\) also satisfies the two conditions: (1) \\( g'(x) = -\\frac{4}{x^2} \\) for all \\( x \\ne 0 \\), and (2) passes through \\( A(2, 3) \\).",
        "a": "1) For x > 0, g'(x) = d/dx(4/x + 1) = -4/x^2. For x < 0, g'(x) = d/dx(4/x + 5) = -4/x^2. Thus g'(x) = -4/x^2 for all x != 0. 2) Since 2 > 0, we use the first branch: g(2) = 4/2 + 1 = 3. Thus the graph passes through A(2, 3). Both conditions are satisfied.",
        "solutionSteps": [
          {
            "explanation": "Differentiate each branch of the piecewise function",
            "workingOut": "\\text{For } x > 0, \\, g'(x) = -\\frac{4}{x^2}. \\quad \\text{For } x < 0, \\, g'(x) = -\\frac{4}{x^2}."
          },
          {
            "explanation": "Evaluate g(x) at x = 2",
            "workingOut": "\\text{Since } 2 > 0, \\, g(2) = \\frac{4}{2} + 1 = 3"
          },
          {
            "explanation": "Conclude the proof",
            "workingOut": "\\text{Both conditions of derivative and point alignment are satisfied.}"
          }
        ]
      },
      {
        "id": "y12a-3h-q18b",
        "type": "teacher_review",
        "question": "b) Find the piecewise-defined equation of the function \\( h(x) \\) with the same derivative \\( h'(x) = -\\frac{4}{x^2} \\) passing through the points \\( A(1, 6) \\) and \\( B(-2, 1) \\).",
        "a": "h(x) = { 4/x + 2 for x > 0, 4/x + 3 for x < 0 }",
        "solutionSteps": [
          {
            "explanation": "Integrate derivative for general piecewise branches",
            "workingOut": "h(x) = \\begin{cases} \\frac{4}{x} + C_1, & \\text{for } x > 0 \\\\ \\frac{4}{x} + C_2, & \\text{for } x < 0 \\end{cases}"
          },
          {
            "explanation": "Use coordinates of A(1, 6) to solve for C1",
            "workingOut": "\\text{Since } 1 > 0, \\, 6 = \\frac{4}{1} + C_1 \\implies C_1 = 2"
          },
          {
            "explanation": "Use coordinates of B(-2, 1) to solve for C2",
            "workingOut": "\\text{Since } -2 < 0, \\, 1 = \\frac{4}{-2} + C_2 \\implies 1 = -2 + C_2 \\implies C_2 = 3"
          },
          {
            "explanation": "Formulate final piecewise equation",
            "workingOut": "h(x) = \\begin{cases} \\frac{4}{x} + 2, & \\text{for } x > 0 \\\\ \\frac{4}{x} + 3, & \\text{for } x < 0 \\end{cases}"
          }
        ],
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 250,
            "boundingbox": [-5, 10, 5, -6],
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.8,0], [4.8,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,9.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){return 4/x + 2;}, 0.1, 5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('functiongraph', [function(x){return 4/x + 3;}, -5, -0.1], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [1, 6], {name: 'A(1,6)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [-2, 1], {name: 'B(-2,1)', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, -15]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ]
  }
];
