export const Y12A_CH3H_QUESTIONS = [
  {
    "id": "y12a-3h-q1a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function:\n\\( f(x) = x^5 \\)",
    "a": 3,
    "t": "Primitive functions",
    "hint": "Use the power rule for integration: add 1 to the power and divide by the new power.",
    "solutionSteps": [
      {
        "explanation": "State the power rule for integration.",
        "workingOut": "To find the primitive (integral), we use the power rule: add 1 to the exponent, then divide by the new exponent.\n\\[ \\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C \\]",
        "graphData": null
      },
      {
        "explanation": "Apply the rule to the given function.",
        "workingOut": "For \\( f(x) = x^5 \\), the exponent is 5. We add 1 to get 6, and divide by 6:\n\\[ \\int x^5 \\, dx = \\frac{x^{5+1}}{5+1} + C \\]\n\\[ = \\frac{x^6}{6} + C \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(5x^4 + C\\)",
      "\\(\\frac{x^5}{6} + C\\)",
      "\\(x^6 + C\\)",
      "\\(\\frac{x^6}{6} + C\\)"
    ],
    "options": [
      {
        "text": "\\(5x^4 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x^5}{6} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^6 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x^6}{6} + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3"
  },
  {
    "id": "y12a-3h-q1b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function:\n\\( f(x) = x^4 \\)",
    "a": 2,
    "t": "Primitive functions",
    "hint": "Add 1 to the power of 4, then divide by the new power.",
    "solutionSteps": [
      {
        "explanation": "State the power rule for integration.",
        "workingOut": "To find the primitive (integral), we use the power rule: add 1 to the exponent, then divide by the new exponent.\n\\[ \\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C \\]",
        "graphData": null
      },
      {
        "explanation": "Apply the rule to the given function.",
        "workingOut": "For \\( f(x) = x^4 \\), the exponent is 4. We add 1 to get 5, and divide by 5:\n\\[ \\int x^4 \\, dx = \\frac{x^{4+1}}{4+1} + C \\]\n\\[ = \\frac{x^5}{5} + C \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(4x^3 + C\\)",
      "\\(x^5 + C\\)",
      "\\(\\frac{x^5}{5} + C\\)",
      "\\(\\frac{x^4}{5} + C\\)"
    ],
    "options": [
      {
        "text": "\\(4x^3 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^5 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x^5}{5} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x^4}{5} + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2"
  },
  {
    "id": "y12a-3h-q1c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function:\n\\( f(x) = x^8 \\)",
    "a": 0,
    "t": "Primitive functions",
    "hint": "Integrate using the power rule.",
    "solutionSteps": [
      {
        "explanation": "State the power rule for integration.",
        "workingOut": "To find the primitive (integral), we use the power rule: add 1 to the exponent, then divide by the new exponent.\n\\[ \\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C \\]",
        "graphData": null
      },
      {
        "explanation": "Apply the rule to the given function.",
        "workingOut": "For \\( f(x) = x^8 \\), the exponent is 8. We add 1 to get 9, and divide by 9:\n\\[ \\int x^8 \\, dx = \\frac{x^{8+1}}{8+1} + C \\]\n\\[ = \\frac{x^9}{9} + C \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(\\frac{x^9}{9} + C\\)",
      "\\(\\frac{x^8}{9} + C\\)",
      "\\(8x^7 + C\\)",
      "\\(x^9 + C\\)"
    ],
    "options": [
      {
        "text": "\\(\\frac{x^9}{9} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x^8}{9} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8x^7 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^9 + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0"
  },
  {
    "id": "y12a-3h-q1d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function:\n\\( f(x) = 4x \\)",
    "a": 2,
    "t": "Primitive functions",
    "hint": "Integrate term-by-term. The primitive of x is x^2 / 2.",
    "solutionSteps": [
      {
        "explanation": "State the power rule for integration.",
        "workingOut": "To find the primitive, we use the power rule. The coefficient 4 stays in front, and we integrate \\( x^1 \\).\n\\[ \\int ax^n \\, dx = a \\left( \\frac{x^{n+1}}{n+1} \\right) + C \\]",
        "graphData": null
      },
      {
        "explanation": "Apply the rule to the given function.",
        "workingOut": "For \\( f(x) = 4x \\), the exponent is 1. We add 1 to get 2, and divide by 2:\n\\[ \\int 4x^1 \\, dx = 4 \\left( \\frac{x^{1+1}}{1+1} \\right) + C \\]\n\\[ = \\frac{4x^2}{2} + C \\]\n\\[ = 2x^2 + C \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(4 + C\\)",
      "\\(\\frac{4x^2}{2} + C\\)",
      "\\(2x^2 + C\\)",
      "\\(4x^2 + C\\)"
    ],
    "options": [
      {
        "text": "\\(4 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{4x^2}{2} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2x^2 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4x^2 + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2"
  },
  {
    "id": "y12a-3h-q1e",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the constant function:\n\\( f(x) = 7 \\)",
    "a": 3,
    "t": "Primitive functions",
    "hint": "The primitive of a constant k is kx + C.",
    "solutionSteps": [
      {
        "explanation": "Integrate a constant.",
        "workingOut": "The primitive of a constant number \\( k \\) is simply \\( kx + C \\).",
        "graphData": null
      },
      {
        "explanation": "Apply to the given function.",
        "workingOut": "For \\( f(x) = 7 \\):\n\\[ \\int 7 \\, dx = 7x + C \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(\\frac{7}{2}x^2 + C\\)",
      "\\(0\\)",
      "\\(x + C\\)",
      "\\(7x + C\\)"
    ],
    "options": [
      {
        "text": "\\(\\frac{7}{2}x^2 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7x + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3"
  },
  {
    "id": "y12a-3h-q1f",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function:\n\\( f(x) = 6x^5 \\)",
    "a": 3,
    "t": "Primitive functions",
    "hint": "Integrate by adding 1 to the power and dividing the coefficient by the new power.",
    "solutionSteps": [
      {
        "explanation": "State the power rule for integration.",
        "workingOut": "To find the primitive, we use the power rule. The coefficient 6 stays in front.\n\\[ \\int ax^n \\, dx = a \\left( \\frac{x^{n+1}}{n+1} \\right) + C \\]",
        "graphData": null
      },
      {
        "explanation": "Apply the rule to the given function.",
        "workingOut": "For \\( f(x) = 6x^5 \\), the exponent is 5. We add 1 to get 6, and divide by 6:\n\\[ \\int 6x^5 \\, dx = 6 \\left( \\frac{x^{5+1}}{5+1} \\right) + C \\]\n\\[ = \\frac{6x^6}{6} + C \\]\n\\[ = x^6 + C \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(\\frac{6x^6}{5} + C\\)",
      "\\(30x^4 + C\\)",
      "\\(6x^6 + C\\)",
      "\\(x^6 + C\\)"
    ],
    "options": [
      {
        "text": "\\(\\frac{6x^6}{5} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(30x^4 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6x^6 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^6 + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3"
  },
  {
    "id": "y12a-3h-q1g",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function:\n\\( f(x) = 16x^7 \\)",
    "a": 2,
    "t": "Primitive functions",
    "hint": "The constant multiplier remains. Integrate x^7 to x^8 / 8.",
    "solutionSteps": [
      {
        "explanation": "State the power rule for integration.",
        "workingOut": "To find the primitive, we use the power rule. The coefficient 16 stays in front.\n\\[ \\int ax^n \\, dx = a \\left( \\frac{x^{n+1}}{n+1} \\right) + C \\]",
        "graphData": null
      },
      {
        "explanation": "Apply the rule to the given function.",
        "workingOut": "For \\( f(x) = 16x^7 \\), the exponent is 7. We add 1 to get 8, and divide by 8:\n\\[ \\int 16x^7 \\, dx = 16 \\left( \\frac{x^{7+1}}{7+1} \\right) + C \\]\n\\[ = \\frac{16x^8}{8} + C \\]\n\\[ = 2x^8 + C \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(112x^6 + C\\)",
      "\\(16x^8 + C\\)",
      "\\(2x^8 + C\\)",
      "\\(\\frac{16x^8}{7} + C\\)"
    ],
    "options": [
      {
        "text": "\\(112x^6 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(16x^8 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2x^8 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{16x^8}{7} + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2"
  },
  {
    "id": "y12a-3h-q1h",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the constant function:\n\\( f(x) = 0 \\)",
    "a": 2,
    "t": "Primitive functions",
    "hint": "The derivative of any constant is 0.",
    "solutionSteps": [
      {
        "explanation": "Integrate zero.",
        "workingOut": "The primitive of 0 is just a constant \\( C \\), because the derivative of any constant is 0.",
        "graphData": null
      },
      {
        "explanation": "State the answer.",
        "workingOut": "\\[ \\int 0 \\, dx = C \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(x + C\\)",
      "\\(1 + C\\)",
      "\\(C\\)",
      "\\(0\\)"
    ],
    "options": [
      {
        "text": "\\(x + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(0\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2"
  },
  {
    "id": "y12a-3h-q2a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function:\n\\( f(x) = x^3 + x^5 \\)",
    "a": 2,
    "t": "Primitive functions",
    "hint": "Integrate each term individually using the power rule.",
    "solutionSteps": [
      {
        "explanation": "Integrate the polynomial term by term.",
        "workingOut": "We apply the power rule to each term individually.\n\\[ \\int (x^3 + x^5) \\, dx \\]",
        "graphData": null
      },
      {
        "explanation": "Apply the power rule.",
        "workingOut": "Add 1 to the exponent of each term and divide by the new exponent:\n\\[ = \\frac{x^{3+1}}{3+1} + \\frac{x^{5+1}}{5+1} + C \\]\n\\[ = \\frac{x^4}{4} + \\frac{x^6}{6} + C \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(3x^2 + 5x^4 + C\\)",
      "\\(\\frac{x^4}{3} + \\frac{x^6}{5} + C\\)",
      "\\(\\frac{x^4}{4} + \\frac{x^6}{6} + C\\)",
      "\\(\\frac{x^3}{4} + \\frac{x^5}{6} + C\\)"
    ],
    "options": [
      {
        "text": "\\(3x^2 + 5x^4 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x^4}{3} + \\frac{x^6}{5} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x^4}{4} + \\frac{x^6}{6} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x^3}{4} + \\frac{x^5}{6} + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2"
  },
  {
    "id": "y12a-3h-q2b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function:\n\\( f(x) = 3x^2 - 4x^3 \\)",
    "a": 3,
    "t": "Primitive functions",
    "hint": "Integrate 3x^2 to x^3 and 4x^3 to x^4.",
    "solutionSteps": [
      {
        "explanation": "Integrate the polynomial term by term.",
        "workingOut": "We apply the power rule to each term individually.\n\\[ \\int (3x^2 - 4x^3) \\, dx \\]",
        "graphData": null
      },
      {
        "explanation": "Apply the power rule.",
        "workingOut": "Add 1 to the exponent of each term and divide by the new exponent:\n\\[ = \\frac{3x^{2+1}}{2+1} - \\frac{4x^{3+1}}{3+1} + C \\]\n\\[ = \\frac{3x^3}{3} - \\frac{4x^4}{4} + C \\]",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression.",
        "workingOut": "Simplify the fractions:\n\\[ = x^3 - x^4 + C \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(3x^3 - 4x^4 + C\\)",
      "\\(6x - 12x^2 + C\\)",
      "\\(x^3 - \\frac{4}{3}x^4 + C\\)",
      "\\(x^3 - x^4 + C\\)"
    ],
    "options": [
      {
        "text": "\\(3x^3 - 4x^4 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6x - 12x^2 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - \\frac{4}{3}x^4 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - x^4 + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3"
  },
  {
    "id": "y12a-3h-q2c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function:\n\\( f(x) = 3x^2 + 6x^5 \\)",
    "a": 2,
    "t": "Primitive functions",
    "hint": "The primitive of 6x^5 is x^6.",
    "solutionSteps": [
      {
        "explanation": "Integrate the polynomial term by term.",
        "workingOut": "We apply the power rule to each term individually.\n\\[ \\int (3x^2 + 6x^5) \\, dx \\]",
        "graphData": null
      },
      {
        "explanation": "Apply the power rule.",
        "workingOut": "Add 1 to the exponent of each term and divide by the new exponent:\n\\[ = \\frac{3x^{2+1}}{2+1} + \\frac{6x^{5+1}}{5+1} + C \\]\n\\[ = \\frac{3x^3}{3} + \\frac{6x^6}{6} + C \\]",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression.",
        "workingOut": "Simplify the fractions:\n\\[ = x^3 + x^6 + C \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(x^3 + \\frac{6}{5}x^6 + C\\)",
      "\\(3x^3 + 6x^6 + C\\)",
      "\\(x^3 + x^6 + C\\)",
      "\\(6x + 30x^4 + C\\)"
    ],
    "options": [
      {
        "text": "\\(x^3 + \\frac{6}{5}x^6 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3x^3 + 6x^6 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + x^6 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6x + 30x^4 + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2"
  },
  {
    "id": "y12a-3h-q2d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function:\n\\( f(x) = x^2 - 2x + 3 \\)",
    "a": 3,
    "t": "Primitive functions",
    "hint": "Integrate each of the three terms separately.",
    "solutionSteps": [
      {
        "explanation": "Integrate the polynomial term by term.",
        "workingOut": "We apply the power rule to each term individually. Remember that a constant \\( k \\) becomes \\( kx \\).\n\\[ \\int (x^2 - 2x + 3) \\, dx \\]",
        "graphData": null
      },
      {
        "explanation": "Apply the power rule.",
        "workingOut": "Add 1 to the exponent of each term and divide by the new exponent:\n\\[ = \\frac{x^{2+1}}{2+1} - \\frac{2x^{1+1}}{1+1} + 3x + C \\]\n\\[ = \\frac{x^3}{3} - \\frac{2x^2}{2} + 3x + C \\]",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression.",
        "workingOut": "Simplify the fractions:\n\\[ = \\frac{x^3}{3} - x^2 + 3x + C \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(\\frac{x^3}{3} - 2x^2 + 3 + C\\)",
      "\\(2x - 2 + C\\)",
      "\\(\\frac{x^3}{3} - \\frac{1}{2}x^2 + 3x + C\\)",
      "\\(\\frac{x^3}{3} - x^2 + 3x + C\\)"
    ],
    "options": [
      {
        "text": "\\(\\frac{x^3}{3} - 2x^2 + 3 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2x - 2 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x^3}{3} - \\frac{1}{2}x^2 + 3x + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x^3}{3} - x^2 + 3x + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3"
  },
  {
    "id": "y12a-3h-q2e",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function:\n\\( f(x) = 4 - 6x + 24x^7 \\)",
    "a": 0,
    "t": "Primitive functions",
    "hint": "The primitive of 24x^7 is 3x^8.",
    "solutionSteps": [
      {
        "explanation": "Integrate the polynomial term by term.",
        "workingOut": "We apply the power rule to each term individually.\n\\[ \\int (4 - 6x + 24x^7) \\, dx \\]",
        "graphData": null
      },
      {
        "explanation": "Apply the power rule.",
        "workingOut": "Add 1 to the exponent of each term and divide by the new exponent:\n\\[ = 4x - \\frac{6x^{1+1}}{1+1} + \\frac{24x^{7+1}}{7+1} + C \\]\n\\[ = 4x - \\frac{6x^2}{2} + \\frac{24x^8}{8} + C \\]",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression.",
        "workingOut": "Simplify the fractions:\n\\[ = 4x - 3x^2 + 3x^8 + C \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(4x - 3x^2 + 3x^8 + C\\)",
      "\\(4x - 6x^2 + 24x^8 + C\\)",
      "\\(-6 + 168x^6 + C\\)",
      "\\(4 - 3x^2 + 3x^8 + C\\)"
    ],
    "options": [
      {
        "text": "\\(4x - 3x^2 + 3x^8 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4x - 6x^2 + 24x^8 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-6 + 168x^6 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4 - 3x^2 + 3x^8 + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0"
  },
  {
    "id": "y12a-3h-q2f",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function:\n\\( f(x) = 4x^3 - 5x^4 - 6x^5 \\)",
    "a": 0,
    "t": "Primitive functions",
    "hint": "Integrate each polynomial term individually.",
    "solutionSteps": [
      {
        "explanation": "Integrate the polynomial term by term.",
        "workingOut": "We apply the power rule to each term individually.\n\\[ \\int (4x^3 - 5x^4 - 6x^5) \\, dx \\]",
        "graphData": null
      },
      {
        "explanation": "Apply the power rule.",
        "workingOut": "Add 1 to the exponent of each term and divide by the new exponent:\n\\[ = \\frac{4x^{3+1}}{3+1} - \\frac{5x^{4+1}}{4+1} - \\frac{6x^{5+1}}{5+1} + C \\]\n\\[ = \\frac{4x^4}{4} - \\frac{5x^5}{5} - \\frac{6x^6}{6} + C \\]",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression.",
        "workingOut": "Simplify the fractions:\n\\[ = x^4 - x^5 - x^6 + C \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(x^4 - x^5 - x^6 + C\\)",
      "\\(12x^2 - 20x^3 - 30x^4 + C\\)",
      "\\(\\frac{4}{3}x^4 - \\frac{5}{4}x^5 - \\frac{6}{5}x^6 + C\\)",
      "\\(4x^4 - 5x^5 - 6x^6 + C\\)"
    ],
    "options": [
      {
        "text": "\\(x^4 - x^5 - x^6 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12x^2 - 20x^3 - 30x^4 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{4}{3}x^4 - \\frac{5}{4}x^5 - \\frac{6}{5}x^6 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4x^4 - 5x^5 - 6x^6 + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0"
  },
  {
    "id": "y12a-3h-q3a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function after first expanding the product:\n\\( f(x) = x(x - 4) \\)",
    "a": 1,
    "t": "Primitive functions",
    "hint": "Expand to get x^2 - 4x, then apply the power rule.",
    "solutionSteps": [
      {
        "explanation": "Expand the expression first.",
        "workingOut": "Before integrating, expand the brackets:\n\\[f(x) = x(x - 4)\\]",
        "graphData": null
      },
      {
        "explanation": "Integrate term by term.",
        "workingOut": "Apply the power rule \\(\\int x^n dx = \\frac{x^{n+1}}{n+1}\\) to each term:\n\\[\\int f(x) dx = \\frac{x^3}{3} - 2x^2 + C\\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(\\frac{x^2}{2} - 4x + C\\)",
      "\\(\\frac{x^3}{3} - 2x^2 + C\\)",
      "\\(2x - 4 + C\\)",
      "\\(\\frac{x^3}{3} - 4x^2 + C\\)"
    ],
    "options": [
      {
        "text": "\\(\\frac{x^2}{2} - 4x + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x^3}{3} - 2x^2 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2x - 4 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x^3}{3} - 4x^2 + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1"
  },
  {
    "id": "y12a-3h-q3b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function after first expanding the product:\n\\( f(x) = (x + 2)(x - 3) \\)",
    "a": 2,
    "t": "Primitive functions",
    "hint": "Expand using FOIL to get x^2 - x - 6, then integrate.",
    "solutionSteps": [
      {
        "explanation": "Expand the expression first.",
        "workingOut": "Before integrating, expand the brackets:\n\\[f(x) = (x + 2)(x - 3)\\]",
        "graphData": null
      },
      {
        "explanation": "Integrate term by term.",
        "workingOut": "Apply the power rule \\(\\int x^n dx = \\frac{x^{n+1}}{n+1}\\) to each term:\n\\[\\int f(x) dx = \\frac{x^3}{3} - \\frac{x^2}{2} - 6x + C\\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(x^3 - x^2 - 6x + C\\)",
      "\\(2x - 1 + C\\)",
      "\\(\\frac{x^3}{3} - \\frac{x^2}{2} - 6x + C\\)",
      "\\(\\frac{x^3}{3} - x^2 - 6x + C\\)"
    ],
    "options": [
      {
        "text": "\\(x^3 - x^2 - 6x + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2x - 1 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x^3}{3} - \\frac{x^2}{2} - 6x + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x^3}{3} - x^2 - 6x + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2"
  },
  {
    "id": "y12a-3h-q3c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function after first expanding the product:\n\\( f(x) = (2x - 1)(x + 3) \\)",
    "a": 0,
    "t": "Primitive functions",
    "hint": "Expand to get 2x^2 + 5x - 3, then integrate.",
    "solutionSteps": [
      {
        "explanation": "Expand the expression first.",
        "workingOut": "Before integrating, expand the brackets:\n\\[f(x) = (2x - 1)(x + 3)\\]",
        "graphData": null
      },
      {
        "explanation": "Integrate term by term.",
        "workingOut": "Apply the power rule \\(\\int x^n dx = \\frac{x^{n+1}}{n+1}\\) to each term:\n\\[\\int f(x) dx = \\frac{2x^3}{3} + \\frac{5x^2}{2} - 3x + C\\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(\\frac{2x^3}{3} + \\frac{5x^2}{2} - 3x + C\\)",
      "\\(\\frac{2x^3}{3} + 5x^2 - 3x + C\\)",
      "\\(4x + 5 + C\\)",
      "\\(2x^3 + \\frac{5}{2}x^2 - 3x + C\\)"
    ],
    "options": [
      {
        "text": "\\(\\frac{2x^3}{3} + \\frac{5x^2}{2} - 3x + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{2x^3}{3} + 5x^2 - 3x + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4x + 5 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2x^3 + \\frac{5}{2}x^2 - 3x + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0"
  },
  {
    "id": "y12a-3h-q3d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function after first expanding the product:\n\\( f(x) = x^2(4x^3 - 3x) \\)",
    "a": 2,
    "t": "Primitive functions",
    "hint": "Distribute x^2 to get 4x^5 - 3x^3.",
    "solutionSteps": [
      {
        "explanation": "Expand the expression first.",
        "workingOut": "Before integrating, expand the brackets:\n\\[f(x) = x^2(4x^3 - 3x)\\]",
        "graphData": null
      },
      {
        "explanation": "Integrate term by term.",
        "workingOut": "Apply the power rule \\(\\int x^n dx = \\frac{x^{n+1}}{n+1}\\) to each term:\n\\[\\int f(x) dx = \\frac{2x^6}{3} - \\frac{3x^4}{4} + C\\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(\\frac{2x^6}{3} - x^4 + C\\)",
      "\\(\\frac{4x^6}{5} - \\frac{3x^4}{3} + C\\)",
      "\\(\\frac{2x^6}{3} - \\frac{3x^4}{4} + C\\)",
      "\\(20x^4 - 9x^2 + C\\)"
    ],
    "options": [
      {
        "text": "\\(\\frac{2x^6}{3} - x^4 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{4x^6}{5} - \\frac{3x^4}{3} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{2x^6}{3} - \\frac{3x^4}{4} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(20x^4 - 9x^2 + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2"
  },
  {
    "id": "y12a-3h-q3e",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function after first expanding the product:\n\\( f(x) = 3x^2(3x^3 + 2) \\)",
    "a": 1,
    "t": "Primitive functions",
    "hint": "Distribute 3x^2 to get 9x^5 + 6x^2.",
    "solutionSteps": [
      {
        "explanation": "Expand the expression first.",
        "workingOut": "Before integrating, expand the brackets:\n\\[f(x) = 3x^2(3x^3 + 2)\\]",
        "graphData": null
      },
      {
        "explanation": "Integrate term by term.",
        "workingOut": "Apply the power rule \\(\\int x^n dx = \\frac{x^{n+1}}{n+1}\\) to each term:\n\\[\\int f(x) dx = \\frac{3x^6}{2} + 2x^3 + C\\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(45x^4 + 12x + C\\)",
      "\\(\\frac{3x^6}{2} + 2x^3 + C\\)",
      "\\(\\frac{9x^6}{5} + 2x^3 + C\\)",
      "\\(\\frac{3x^6}{2} + 6x^3 + C\\)"
    ],
    "options": [
      {
        "text": "\\(45x^4 + 12x + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{3x^6}{2} + 2x^3 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{9x^6}{5} + 2x^3 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{3x^6}{2} + 6x^3 + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1"
  },
  {
    "id": "y12a-3h-q3f",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the primitive of the function after first expanding the product:\n\\( f(x) = (x - 2)(1 + x^2) \\)",
    "a": 1,
    "t": "Primitive functions",
    "hint": "Expand using FOIL to get x^3 - 2x^2 + x - 2.",
    "solutionSteps": [
      {
        "explanation": "Expand the expression first.",
        "workingOut": "Before integrating, expand the brackets:\n\\[f(x) = (x - 2)(1 + x^2)\\]",
        "graphData": null
      },
      {
        "explanation": "Integrate term by term.",
        "workingOut": "Apply the power rule \\(\\int x^n dx = \\frac{x^{n+1}}{n+1}\\) to each term:\n\\[\\int f(x) dx = \\frac{x^4}{4} - \\frac{2x^3}{3} + \\frac{x^2}{2} - 2x + C\\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(x^4 - 2x^3 + x^2 - 2x + C\\)",
      "\\(\\frac{x^4}{4} - \\frac{2x^3}{3} + \\frac{x^2}{2} - 2x + C\\)",
      "\\(3x^2 - 4x + 1 + C\\)",
      "\\(\\frac{x^4}{4} - \\frac{2x^3}{3} + x^2 - 2x + C\\)"
    ],
    "options": [
      {
        "text": "\\(x^4 - 2x^3 + x^2 - 2x + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x^4}{4} - \\frac{2x^3}{3} + \\frac{x^2}{2} - 2x + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3x^2 - 4x + 1 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x^4}{4} - \\frac{2x^3}{3} + x^2 - 2x + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1"
  },
  {
    "id": "y12a-3h-q4ai",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find \\( y \\) as a function of \\( x \\) if:\n\\( y' = 2x + 5 \\) and \\( y = 4 \\) when \\( x = 0 \\).",
    "a": 1,
    "t": "Primitive functions",
    "hint": "Integrate y' to find the general form y = f(x) + C, then solve for C using the given point.",
    "solutionSteps": [
      {
        "explanation": "Set up the integral.",
        "workingOut": "To find \\( y \\), we must integrate the derivative function:\n\\[ y = \\int (2x + 5) \\, dx \\]",
        "graphData": null
      },
      {
        "explanation": "Integrate term by term.",
        "workingOut": "Apply the power rule to each term and add the constant of integration \\( C \\):\n\\[ y = \\frac{2x^2}{2} + 5x + C \\]\n\\[ y = x^2 + 5x + C \\]",
        "graphData": null
      },
      {
        "explanation": "Use the initial condition to find \\( C \\).",
        "workingOut": "We are given that \\( y = 4 \\) when \\( x = 0 \\). Substitute these values into the general equation:\n\\[ 4 = (0)^2 + 5(0) + C \\]\n\\[ 4 = 0 + C \\]\n\\[ C = 4 \\]",
        "graphData": null
      },
      {
        "explanation": "State the final equation.",
        "workingOut": "Substitute \\( C = 4 \\) back into the equation:\n\\[ y = x^2 + 5x + 4 \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(y = x^2 + 5x\\)",
      "\\(y = x^2 + 5x + 4\\)",
      "\\(y = x^2 + 5x - 4\\)",
      "\\(y = 2x^2 + 5x + 4\\)"
    ],
    "options": [
      {
        "text": "\\(y = x^2 + 5x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = x^2 + 5x + 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = x^2 + 5x - 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 2x^2 + 5x + 4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1"
  },
  {
    "id": "y12a-3h-q4aii",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find \\( y \\) as a function of \\( x \\) if:\n\\( y' = 2x + 5 \\) and \\( y = 10 \\) when \\( x = 1 \\).",
    "a": 0,
    "t": "Primitive functions",
    "hint": "Integrate y' and then use the condition y(1) = 10 to find C.",
    "solutionSteps": [
      {
        "explanation": "Set up the integral.",
        "workingOut": "To find \\( y \\), we must integrate the derivative function:\n\\[ y = \\int (2x + 5) \\, dx \\]",
        "graphData": null
      },
      {
        "explanation": "Integrate term by term.",
        "workingOut": "Apply the power rule to each term and add the constant of integration \\( C \\):\n\\[ y = \\frac{2x^2}{2} + 5x + C \\]\n\\[ y = x^2 + 5x + C \\]",
        "graphData": null
      },
      {
        "explanation": "Use the initial condition to find \\( C \\).",
        "workingOut": "We are given that \\( y = 10 \\) when \\( x = 1 \\). Substitute these values into the general equation:\n\\[ 10 = (1)^2 + 5(1) + C \\]\n\\[ 10 = 1 + 5 + C \\]\n\\[ 10 = 6 + C \\]\n\\[ C = 4 \\]",
        "graphData": null
      },
      {
        "explanation": "State the final equation.",
        "workingOut": "Substitute \\( C = 4 \\) back into the equation:\n\\[ y = x^2 + 5x + 4 \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(y = x^2 + 5x + 4\\)",
      "\\(y = x^2 + 5x + 5\\)",
      "\\(y = 2x^2 + 5x + 4\\)",
      "\\(y = x^2 + 5x + 10\\)"
    ],
    "options": [
      {
        "text": "\\(y = x^2 + 5x + 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = x^2 + 5x + 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 2x^2 + 5x + 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = x^2 + 5x + 10\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0"
  },
  {
    "id": "y12a-3h-q4bi",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find \\( y \\) as a function of \\( x \\) if:\n\\( y' = 6x^2 + 3 \\) and \\( y = 2 \\) when \\( x = 0 \\).",
    "a": 2,
    "t": "Primitive functions",
    "hint": "Find the general antiderivative, then use the initial value at x = 0.",
    "solutionSteps": [
      {
        "explanation": "Set up the integral.",
        "workingOut": "To find \\( y \\), we must integrate the derivative function:\n\\[ y = \\int (6x^2 + 3) \\, dx \\]",
        "graphData": null
      },
      {
        "explanation": "Integrate term by term.",
        "workingOut": "Apply the power rule to each term and add the constant of integration \\( C \\):\n\\[ y = \\frac{6x^3}{3} + 3x + C \\]\n\\[ y = 2x^3 + 3x + C \\]",
        "graphData": null
      },
      {
        "explanation": "Use the initial condition to find \\( C \\).",
        "workingOut": "We are given that \\( y = 2 \\) when \\( x = 0 \\). Substitute these values:\n\\[ 2 = 2(0)^3 + 3(0) + C \\]\n\\[ 2 = 0 + C \\]\n\\[ C = 2 \\]",
        "graphData": null
      },
      {
        "explanation": "State the final equation.",
        "workingOut": "Substitute \\( C = 2 \\) back into the equation:\n\\[ y = 2x^3 + 3x + 2 \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(y = 2x^3 + 3x\\)",
      "\\(y = 2x^3 + 3x - 2\\)",
      "\\(y = 2x^3 + 3x + 2\\)",
      "\\(y = 6x^3 + 3x + 2\\)"
    ],
    "options": [
      {
        "text": "\\(y = 2x^3 + 3x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 2x^3 + 3x - 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 2x^3 + 3x + 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 6x^3 + 3x + 2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2"
  },
  {
    "id": "y12a-3h-q4bii",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find \\( y \\) as a function of \\( x \\) if:\n\\( y' = 6x^2 + 3 \\) and \\( y = 7 \\) when \\( x = 1 \\).",
    "a": 2,
    "t": "Primitive functions",
    "hint": "Integrate the derivative first, then use y(1) = 7 to find C.",
    "solutionSteps": [
      {
        "explanation": "Set up the integral.",
        "workingOut": "To find \\( y \\), we must integrate the derivative function:\n\\[ y = \\int (6x^2 + 3) \\, dx \\]",
        "graphData": null
      },
      {
        "explanation": "Integrate term by term.",
        "workingOut": "Apply the power rule to each term and add the constant of integration \\( C \\):\n\\[ y = \\frac{6x^3}{3} + 3x + C \\]\n\\[ y = 2x^3 + 3x + C \\]",
        "graphData": null
      },
      {
        "explanation": "Use the initial condition to find \\( C \\).",
        "workingOut": "We are given that \\( y = 7 \\) when \\( x = 1 \\). Substitute these values:\n\\[ 7 = 2(1)^3 + 3(1) + C \\]\n\\[ 7 = 2 + 3 + C \\]\n\\[ 7 = 5 + C \\]\n\\[ C = 2 \\]",
        "graphData": null
      },
      {
        "explanation": "State the final equation.",
        "workingOut": "Substitute \\( C = 2 \\) back into the equation:\n\\[ y = 2x^3 + 3x + 2 \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(y = 6x^3 + 3x + 2\\)",
      "\\(y = 2x^3 + 3x + 7\\)",
      "\\(y = 2x^3 + 3x + 2\\)",
      "\\(y = 2x^3 + 3x + 4\\)"
    ],
    "options": [
      {
        "text": "\\(y = 6x^3 + 3x + 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 2x^3 + 3x + 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 2x^3 + 3x + 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 2x^3 + 3x + 4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2"
  },
  {
    "id": "y12a-3h-q4ci",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find \\( y \\) as a function of \\( x \\) if:\n\\( y' = 3x^2 - 6x + 4 \\) and \\( y = 1 \\) when \\( x = 0 \\).",
    "a": 1,
    "t": "Primitive functions",
    "hint": "Integrate term-by-term and use the initial condition to find the constant C.",
    "solutionSteps": [
      {
        "explanation": "Set up the integral.",
        "workingOut": "To find \\( y \\), we must integrate the derivative function:\n\\[ y = \\int (3x^2 - 6x + 4) \\, dx \\]",
        "graphData": null
      },
      {
        "explanation": "Integrate term by term.",
        "workingOut": "Apply the power rule to each term and add the constant of integration \\( C \\):\n\\[ y = \\frac{3x^3}{3} - \\frac{6x^2}{2} + 4x + C \\]\n\\[ y = x^3 - 3x^2 + 4x + C \\]",
        "graphData": null
      },
      {
        "explanation": "Use the initial condition to find \\( C \\).",
        "workingOut": "We are given that \\( y = 1 \\) when \\( x = 0 \\). Substitute these values:\n\\[ 1 = (0)^3 - 3(0)^2 + 4(0) + C \\]\n\\[ 1 = 0 + C \\]\n\\[ C = 1 \\]",
        "graphData": null
      },
      {
        "explanation": "State the final equation.",
        "workingOut": "Substitute \\( C = 1 \\) back into the equation:\n\\[ y = x^3 - 3x^2 + 4x + 1 \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(y = x^3 - 3x^2 + 4x\\)",
      "\\(y = x^3 - 3x^2 + 4x + 1\\)",
      "\\(y = x^3 - 6x^2 + 4x + 1\\)",
      "\\(y = 3x^3 - 6x^2 + 4x + 1\\)"
    ],
    "options": [
      {
        "text": "\\(y = x^3 - 3x^2 + 4x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = x^3 - 3x^2 + 4x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = x^3 - 6x^2 + 4x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 3x^3 - 6x^2 + 4x + 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1"
  },
  {
    "id": "y12a-3h-q4cii",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find \\( y \\) as a function of \\( x \\) if:\n\\( y' = 3x^2 - 6x + 4 \\) and \\( y = 3 \\) when \\( x = 1 \\).",
    "a": 1,
    "t": "Primitive functions",
    "hint": "Integrate and then solve for C using the point (1, 3).",
    "solutionSteps": [
      {
        "explanation": "Set up the integral.",
        "workingOut": "To find \\( y \\), we must integrate the derivative function:\n\\[ y = \\int (3x^2 - 6x + 4) \\, dx \\]",
        "graphData": null
      },
      {
        "explanation": "Integrate term by term.",
        "workingOut": "Apply the power rule to each term and add the constant of integration \\( C \\):\n\\[ y = \\frac{3x^3}{3} - \\frac{6x^2}{2} + 4x + C \\]\n\\[ y = x^3 - 3x^2 + 4x + C \\]",
        "graphData": null
      },
      {
        "explanation": "Use the initial condition to find \\( C \\).",
        "workingOut": "We are given that \\( y = 3 \\) when \\( x = 1 \\). Substitute these values:\n\\[ 3 = (1)^3 - 3(1)^2 + 4(1) + C \\]\n\\[ 3 = 1 - 3 + 4 + C \\]\n\\[ 3 = 2 + C \\]\n\\[ C = 1 \\]",
        "graphData": null
      },
      {
        "explanation": "State the final equation.",
        "workingOut": "Substitute \\( C = 1 \\) back into the equation:\n\\[ y = x^3 - 3x^2 + 4x + 1 \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(y = 3x^3 - 6x^2 + 4x + 1\\)",
      "\\(y = x^3 - 3x^2 + 4x + 1\\)",
      "\\(y = x^3 - 3x^2 + 4x + 3\\)",
      "\\(y = x^3 - 3x^2 + 4x + 2\\)"
    ],
    "options": [
      {
        "text": "\\(y = 3x^3 - 6x^2 + 4x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = x^3 - 3x^2 + 4x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = x^3 - 3x^2 + 4x + 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = x^3 - 3x^2 + 4x + 2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1"
  },
  {
    "id": "y12a-3h-q5a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Write the function using a negative power of \\( x \\), and hence find its primitive as a fraction without a negative index:\n\\( f(x) = \\frac{1}{x^3} \\)",
    "a": 0,
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
    ],
    "opts": [
      "\\(-\\frac{1}{2x^2} + C\\)",
      "\\(\\frac{1}{2x^2} + C\\)",
      "\\(-\\frac{1}{4x^4} + C\\)",
      "\\(-\\frac{3}{x^4} + C\\)"
    ],
    "options": [
      {
        "text": "\\(-\\frac{1}{2x^2} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{1}{2x^2} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-\\frac{1}{4x^4} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-\\frac{3}{x^4} + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0"
  },
  {
    "id": "y12a-3h-q5b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Write the function using a negative power of \\( x \\), and hence find its primitive as a fraction without a negative index:\n\\( f(x) = \\frac{1}{x^4} \\)",
    "a": 2,
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
    ],
    "opts": [
      "\\(-\\frac{1}{5x^5} + C\\)",
      "\\(\\frac{1}{3x^3} + C\\)",
      "\\(-\\frac{1}{3x^3} + C\\)",
      "\\(-\\frac{4}{x^5} + C\\)"
    ],
    "options": [
      {
        "text": "\\(-\\frac{1}{5x^5} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{1}{3x^3} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-\\frac{1}{3x^3} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-\\frac{4}{x^5} + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2"
  },
  {
    "id": "y12a-3h-q5c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Write the function using a negative power of \\( x \\), and hence find its primitive as a fraction without a negative index:\n\\( f(x) = -\\frac{3}{x^4} \\)",
    "a": 3,
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
    ],
    "opts": [
      "\\(-\\frac{1}{x^3} + C\\)",
      "\\(\\frac{3}{x^3} + C\\)",
      "\\(\\frac{1}{x^5} + C\\)",
      "\\(\\frac{1}{x^3} + C\\)"
    ],
    "options": [
      {
        "text": "\\(-\\frac{1}{x^3} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{3}{x^3} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{1}{x^5} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{1}{x^3} + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3"
  },
  {
    "id": "y12a-3h-q5d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Write the function using a negative power of \\( x \\), and hence find its primitive as a fraction without a negative index:\n\\( f(x) = -\\frac{4}{x^5} \\)",
    "a": 1,
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
    ],
    "opts": [
      "\\(-\\frac{1}{x^4} + C\\)",
      "\\(\\frac{1}{x^4} + C\\)",
      "\\(\\frac{4}{x^4} + C\\)",
      "\\(\\frac{1}{x^6} + C\\)"
    ],
    "options": [
      {
        "text": "\\(-\\frac{1}{x^4} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{1}{x^4} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{4}{x^4} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{1}{x^6} + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1"
  },
  {
    "id": "y12a-3h-q5e",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Write the function using negative powers of \\( x \\), and hence find its primitive as a fraction without negative indices:\n\\( f(x) = \\frac{1}{x^3} - \\frac{1}{x^4} \\)",
    "a": 1,
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
    ],
    "opts": [
      "\\(\\frac{1}{2x^2} - \\frac{1}{3x^3} + C\\)",
      "\\(-\\frac{1}{2x^2} + \\frac{1}{3x^3} + C\\)",
      "\\(-\\frac{1}{4x^4} + \\frac{1}{5x^5} + C\\)",
      "\\(-\\frac{3}{x^4} + \\frac{4}{x^5} + C\\)"
    ],
    "options": [
      {
        "text": "\\(\\frac{1}{2x^2} - \\frac{1}{3x^3} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-\\frac{1}{2x^2} + \\frac{1}{3x^3} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-\\frac{1}{4x^4} + \\frac{1}{5x^5} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-\\frac{3}{x^4} + \\frac{4}{x^5} + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1"
  },
  {
    "id": "y12a-3h-q6a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Write the function using a fractional index, and hence find its primitive:\n\\( f(x) = \\sqrt[3]{x} \\)",
    "a": 2,
    "t": "Primitive functions",
    "hint": "Write root(3, x) as x^(1/3) and integrate.",
    "solutionSteps": [
      {
        "explanation": "Convert the root to a fractional index.",
        "workingOut": "Rewrite the cube root as a fractional power:\n\\[ f(x) = \\sqrt[3]{x} = x^{\\frac{1}{3}} \\]",
        "graphData": null
      },
      {
        "explanation": "Apply the power rule.",
        "workingOut": "To integrate, we add 1 to the power and divide by the new power:\n\\[ \\int x^{\\frac{1}{3}} \\, dx = \\frac{x^{\\frac{1}{3} + 1}}{\\frac{1}{3} + 1} + C \\]",
        "graphData": null
      },
      {
        "explanation": "Simplify the fraction addition.",
        "workingOut": "To add 1 to the fraction, write it with a common denominator (\\(1 = \\frac{3}{3}\\)):\n\\[ \\frac{1}{3} + \\frac{3}{3} = \\frac{4}{3} \\]\nSo the expression becomes:\n\\[ = \\frac{x^{\\frac{4}{3}}}{\\frac{4}{3}} + C \\]",
        "graphData": null
      },
      {
        "explanation": "State the final expression.",
        "workingOut": "Dividing by a fraction is mathematically identical to multiplying by its reciprocal (flip the fraction):\n\\[ = \\frac{3}{4}x^{\\frac{4}{3}} + C \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(\\frac{4}{3}x^{\\frac{3}{4}} + C\\)",
      "\\(\\frac{3}{4}x^{\\frac{1}{3}} + C\\)",
      "\\(\\frac{3}{4}x^{\\frac{4}{3}} + C\\)",
      "\\(\\frac{1}{3}x^{-\\frac{2}{3}} + C\\)"
    ],
    "options": [
      {
        "text": "\\(\\frac{4}{3}x^{\\frac{3}{4}} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{3}{4}x^{\\frac{1}{3}} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{3}{4}x^{\\frac{4}{3}} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{1}{3}x^{-\\frac{2}{3}} + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2"
  },
  {
    "id": "y12a-3h-q6b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Write the function using a fractional index, and hence find its primitive:\n\\( f(x) = \\frac{1}{\\sqrt[3]{x}} \\)",
    "a": 0,
    "t": "Primitive functions",
    "hint": "Write 1/root(3, x) as x^(-1/3) and integrate.",
    "solutionSteps": [
      {
        "explanation": "Convert the root to a fractional index.",
        "workingOut": "Rewrite the root in the denominator as a negative fractional power:\n\\[ f(x) = \\frac{1}{\\sqrt[3]{x}} = \\frac{1}{x^{\\frac{1}{3}}} = x^{-\\frac{1}{3}} \\]",
        "graphData": null
      },
      {
        "explanation": "Apply the power rule.",
        "workingOut": "To integrate, we add 1 to the power and divide by the new power:\n\\[ \\int x^{-\\frac{1}{3}} \\, dx = \\frac{x^{-\\frac{1}{3} + 1}}{-\\frac{1}{3} + 1} + C \\]",
        "graphData": null
      },
      {
        "explanation": "Simplify the fraction addition.",
        "workingOut": "Write 1 with a common denominator (\\(1 = \\frac{3}{3}\\)):\n\\[ -\\frac{1}{3} + \\frac{3}{3} = \\frac{2}{3} \\]\nSo the expression becomes:\n\\[ = \\frac{x^{\\frac{2}{3}}}{\\frac{2}{3}} + C \\]",
        "graphData": null
      },
      {
        "explanation": "State the final expression.",
        "workingOut": "Dividing by a fraction is mathematically identical to multiplying by its reciprocal (flip the fraction):\n\\[ = \\frac{3}{2}x^{\\frac{2}{3}} + C \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(\\frac{3}{2}x^{\\frac{2}{3}} + C\\)",
      "\\(-\\frac{1}{3}x^{-\\frac{4}{3}} + C\\)",
      "\\(\\frac{2}{3}x^{\\frac{3}{2}} + C\\)",
      "\\(\\frac{3}{2}x^{\\frac{1}{3}} + C\\)"
    ],
    "options": [
      {
        "text": "\\(\\frac{3}{2}x^{\\frac{2}{3}} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-\\frac{1}{3}x^{-\\frac{4}{3}} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{2}{3}x^{\\frac{3}{2}} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{3}{2}x^{\\frac{1}{3}} + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0"
  },
  {
    "id": "y12a-3h-q6c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Write the function using a fractional index, and hence find its primitive:\n\\( f(x) = \\sqrt{x} \\)",
    "a": 3,
    "t": "Primitive functions",
    "hint": "Write sqrt(x) as x^(1/2) and integrate.",
    "solutionSteps": [
      {
        "explanation": "Convert the root to a fractional index.",
        "workingOut": "Rewrite the square root as a fractional power:\n\\[ f(x) = \\sqrt{x} = x^{\\frac{1}{2}} \\]",
        "graphData": null
      },
      {
        "explanation": "Apply the power rule.",
        "workingOut": "To integrate, we add 1 to the power and divide by the new power:\n\\[ \\int x^{\\frac{1}{2}} \\, dx = \\frac{x^{\\frac{1}{2} + 1}}{\\frac{1}{2} + 1} + C \\]",
        "graphData": null
      },
      {
        "explanation": "Simplify the fraction addition.",
        "workingOut": "Write 1 with a common denominator (\\(1 = \\frac{2}{2}\\)):\n\\[ \\frac{1}{2} + \\frac{2}{2} = \\frac{3}{2} \\]\nSo the expression becomes:\n\\[ = \\frac{x^{\\frac{3}{2}}}{\\frac{3}{2}} + C \\]",
        "graphData": null
      },
      {
        "explanation": "State the final expression.",
        "workingOut": "Dividing by a fraction is mathematically identical to multiplying by its reciprocal (flip the fraction):\n\\[ = \\frac{2}{3}x^{\\frac{3}{2}} + C \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(\\frac{3}{2}x^{\\frac{2}{3}} + C\\)",
      "\\(\\frac{1}{2}x^{-\\frac{1}{2}} + C\\)",
      "\\(\\frac{2}{3}x^{\\frac{1}{2}} + C\\)",
      "\\(\\frac{2}{3}x^{\\frac{3}{2}} + C\\)"
    ],
    "options": [
      {
        "text": "\\(\\frac{3}{2}x^{\\frac{2}{3}} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{1}{2}x^{-\\frac{1}{2}} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{2}{3}x^{\\frac{1}{2}} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{2}{3}x^{\\frac{3}{2}} + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3"
  },
  {
    "id": "y12a-3h-q6d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Write the function using a fractional index, and hence find its primitive:\n\\( f(x) = \\frac{3}{\\sqrt{x}} \\)",
    "a": 3,
    "t": "Primitive functions",
    "hint": "Rewrite as 3x^(-1/2) and integrate.",
    "solutionSteps": [
      {
        "explanation": "Convert the root to a fractional index.",
        "workingOut": "Rewrite the root in the denominator as a negative fractional power. The constant 3 stays in front:\n\\[ f(x) = \\frac{3}{\\sqrt{x}} = \\frac{3}{x^{\\frac{1}{2}}} = 3x^{-\\frac{1}{2}} \\]",
        "graphData": null
      },
      {
        "explanation": "Apply the power rule.",
        "workingOut": "To integrate, we add 1 to the power and divide by the new power:\n\\[ \\int 3x^{-\\frac{1}{2}} \\, dx = 3 \\left( \\frac{x^{-\\frac{1}{2} + 1}}{-\\frac{1}{2} + 1} \\right) + C \\]",
        "graphData": null
      },
      {
        "explanation": "Simplify the fraction addition.",
        "workingOut": "Write 1 with a common denominator (\\(1 = \\frac{2}{2}\\)):\n\\[ -\\frac{1}{2} + \\frac{2}{2} = \\frac{1}{2} \\]\nSo the expression becomes:\n\\[ = 3 \\left( \\frac{x^{\\frac{1}{2}}}{\\frac{1}{2}} \\right) + C \\]",
        "graphData": null
      },
      {
        "explanation": "State the final expression.",
        "workingOut": "Dividing by \\( \\frac{1}{2} \\) is mathematically identical to multiplying by 2:\n\\[ = 3 \\left( 2x^{\\frac{1}{2}} \\right) + C \\]\n\\[ = 6x^{\\frac{1}{2}} + C = 6\\sqrt{x} + C \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(\\frac{3}{2}x^{\\frac{1}{2}} + C\\)",
      "\\(3\\sqrt{x} + C\\)",
      "\\(-\\frac{3}{2}x^{-\\frac{3}{2}} + C\\)",
      "\\(6\\sqrt{x} + C\\)"
    ],
    "options": [
      {
        "text": "\\(\\frac{3}{2}x^{\\frac{1}{2}} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3\\sqrt{x} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-\\frac{3}{2}x^{-\\frac{3}{2}} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6\\sqrt{x} + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3"
  },
  {
    "id": "y12a-3h-q6e",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Write the function using a fractional index, and hence find its primitive:\n\\( f(x) = \\sqrt[4]{x^3} \\)",
    "a": 2,
    "t": "Primitive functions",
    "hint": "Recall that root(a, x^b) is x^(b/a). Integrate x^(3/4).",
    "solutionSteps": [
      {
        "explanation": "Convert the root to a fractional index.",
        "workingOut": "Rewrite the root as a fractional power. Remember the mathematical rule that \\( \\sqrt[a]{x^b} = x^{\\frac{b}{a}} \\):\n\\[ f(x) = \\sqrt[4]{x^3} = x^{\\frac{3}{4}} \\]",
        "graphData": null
      },
      {
        "explanation": "Apply the power rule.",
        "workingOut": "To integrate, we add 1 to the power and divide by the new power:\n\\[ \\int x^{\\frac{3}{4}} \\, dx = \\frac{x^{\\frac{3}{4} + 1}}{\\frac{3}{4} + 1} + C \\]",
        "graphData": null
      },
      {
        "explanation": "Simplify the fraction addition.",
        "workingOut": "Write 1 with a common denominator (\\(1 = \\frac{4}{4}\\)):\n\\[ \\frac{3}{4} + \\frac{4}{4} = \\frac{7}{4} \\]\nSo the expression becomes:\n\\[ = \\frac{x^{\\frac{7}{4}}}{\\frac{7}{4}} + C \\]",
        "graphData": null
      },
      {
        "explanation": "State the final expression.",
        "workingOut": "Dividing by a fraction is mathematically identical to multiplying by its reciprocal (flip the fraction):\n\\[ = \\frac{4}{7}x^{\\frac{7}{4}} + C \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(\\frac{7}{4}x^{\\frac{4}{7}} + C\\)",
      "\\(\\frac{3}{4}x^{-\\frac{1}{4}} + C\\)",
      "\\(\\frac{4}{7}x^{\\frac{7}{4}} + C\\)",
      "\\(\\frac{4}{7}x^{\\frac{3}{4}} + C\\)"
    ],
    "options": [
      {
        "text": "\\(\\frac{7}{4}x^{\\frac{4}{7}} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{3}{4}x^{-\\frac{1}{4}} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{4}{7}x^{\\frac{7}{4}} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{4}{7}x^{\\frac{3}{4}} + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2"
  },
  {
    "id": "y12a-3h-q7a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find \\( y \\) as a function of \\( x \\) if:\n\\( \\frac{dy}{dx} = \\frac{1}{\\sqrt{x}} \\) and \\( y = 3 \\) when \\( x = 0 \\).",
    "a": 0,
    "t": "Primitive functions",
    "hint": "Rewrite the derivative as x^(-1/2) and integrate. Then solve for C.",
    "solutionSteps": [
      {
        "explanation": "Set up the integral.",
        "workingOut": "To find the curve \\( y \\), we integrate the gradient function \\( \\frac{dy}{dx} \\):\n\\[ y = \\int \\frac{1}{\\sqrt{x}} \\, dx \\]",
        "graphData": null
      },
      {
        "explanation": "Integrate to find the general equation.",
        "workingOut": "First, rewrite the root as a fractional index: \\( x^{-\\frac{1}{2}} \\).\nNow integrate using the power rule:\n\\[ y = \\frac{x^{\\frac{1}{2}}}{\\frac{1}{2}} + C \\]\n\\[ y = 2\\sqrt{x} + C \\]",
        "graphData": null
      },
      {
        "explanation": "Solve for the constant C.",
        "workingOut": "We are given that \\( y = 3 \\) when \\( x = 0 \\). Substitute these values into our general equation:\n\\[ 3 = 2\\sqrt{0} + C \\]\n\\[ 3 = 0 + C \\]\n\\[ C = 3 \\]",
        "graphData": null
      },
      {
        "explanation": "State the final equation.",
        "workingOut": "Substitute \\( C = 3 \\) back into the general equation:\n\\[ y = 2\\sqrt{x} + 3 \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(y = 2\\sqrt{x} + 3\\)",
      "\\(y = \\frac{1}{2\\sqrt{x}} + 3\\)",
      "\\(y = 2\\sqrt{x}\\)",
      "\\(y = \\sqrt{x} + 3\\)"
    ],
    "options": [
      {
        "text": "\\(y = 2\\sqrt{x} + 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\frac{1}{2\\sqrt{x}} + 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 2\\sqrt{x}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\sqrt{x} + 3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0"
  },
  {
    "id": "y12a-3h-q7b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find \\( y \\) as a function of \\( x \\) if:\n\\( \\frac{dy}{dx} = \\frac{1}{\\sqrt{x}} \\) and \\( y = 10 \\) when \\( x = 4 \\).",
    "a": 1,
    "t": "Primitive functions",
    "hint": "Integrate to get y = 2*sqrt(x) + C. Use y(4) = 10 to find C.",
    "solutionSteps": [
      {
        "explanation": "Set up the integral.",
        "workingOut": "To find the curve \\( y \\), we integrate the gradient function \\( \\frac{dy}{dx} \\):\n\\[ y = \\int \\frac{1}{\\sqrt{x}} \\, dx \\]",
        "graphData": null
      },
      {
        "explanation": "Integrate to find the general equation.",
        "workingOut": "First, rewrite the root as a fractional index: \\( x^{-\\frac{1}{2}} \\).\nNow integrate using the power rule:\n\\[ y = \\frac{x^{\\frac{1}{2}}}{\\frac{1}{2}} + C \\]\n\\[ y = 2\\sqrt{x} + C \\]",
        "graphData": null
      },
      {
        "explanation": "Solve for the constant C.",
        "workingOut": "We are given that \\( y = 10 \\) when \\( x = 4 \\). Substitute these values into our general equation:\n\\[ 10 = 2\\sqrt{4} + C \\]\n\\[ 10 = 2(2) + C \\]\n\\[ 10 = 4 + C \\]\n\\[ C = 6 \\]",
        "graphData": null
      },
      {
        "explanation": "State the final equation.",
        "workingOut": "Substitute \\( C = 6 \\) back into the general equation:\n\\[ y = 2\\sqrt{x} + 6 \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(y = 2\\sqrt{x} + 2\\)",
      "\\(y = 2\\sqrt{x} + 6\\)",
      "\\(y = \\sqrt{x} + 8\\)",
      "\\(y = 2\\sqrt{x} + 10\\)"
    ],
    "options": [
      {
        "text": "\\(y = 2\\sqrt{x} + 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 2\\sqrt{x} + 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\sqrt{x} + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 2\\sqrt{x} + 10\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1"
  },
  {
    "id": "y12a-3h-q8a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the member of the family of curves with gradient function \\( \\frac{dy}{dx} = -2x \\) that passes through the point \\( A(1, 3) \\).",
    "a": 1,
    "t": "Primitive functions",
    "hint": "Integrate to find the family y = -x^2 + C, then solve for C using point A.",
    "solutionSteps": [
      {
        "explanation": "Set up the integral.",
        "workingOut": "To find the curve \\( y \\), we integrate the gradient function \\( \\frac{dy}{dx} \\):\n\\[ y = \\int -2x \\, dx \\]",
        "graphData": null
      },
      {
        "explanation": "Integrate to find the general equation.",
        "workingOut": "Integrate using the power rule:\n\\[ y = \\frac{-2x^2}{2} + C \\]\n\\[ y = -x^2 + C \\]",
        "graphData": null
      },
      {
        "explanation": "Solve for the constant C.",
        "workingOut": "We are given that the curve passes through the point \\( A(1, 3) \\), meaning \\( y = 3 \\) when \\( x = 1 \\). Substitute these values:\n\\[ 3 = -(1)^2 + C \\]\n\\[ 3 = -1 + C \\]\n\\[ C = 4 \\]",
        "graphData": null
      },
      {
        "explanation": "State the final equation.",
        "workingOut": "Substitute \\( C = 4 \\) back into the general equation:\n\\[ y = -x^2 + 4 \\]",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 250,
            "boundingbox": [
              -3,
              8,
              3,
              -4
            ],
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.8,0], [2.8,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){return -x*x + 6;}, -3, 3], {strokeColor: 'gray', strokeWidth: 1, dash: 2});\nboard.create('functiongraph', [function(x){return -x*x + 2;}, -3, 3], {strokeColor: 'gray', strokeWidth: 1, dash: 2});\nboard.create('functiongraph', [function(x){return -x*x;}, -3, 3], {strokeColor: 'gray', strokeWidth: 1, dash: 2});\nboard.create('functiongraph', [function(x){return -x*x + 4;}, -3, 3], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [1, 3], {name: 'A(1,3)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "opts": [
      "\\(y = -2x^2 + 5\\)",
      "\\(y = -x^2 + 4\\)",
      "\\(y = x^2 + 2\\)",
      "\\(y = -x^2 + 3\\)"
    ],
    "options": [
      {
        "text": "\\(y = -2x^2 + 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = -x^2 + 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = x^2 + 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = -x^2 + 3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1"
  },
  {
    "id": "y12a-3h-q8b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the member of the family of curves with gradient function \\( \\frac{dy}{dx} = 2 \\) that passes through the point \\( A(1, 4) \\).",
    "a": 0,
    "t": "Primitive functions",
    "hint": "Integrate to find the linear family y = 2x + C, then plug in coordinates (1, 4).",
    "solutionSteps": [
      {
        "explanation": "Set up the integral.",
        "workingOut": "To find the curve \\( y \\), we integrate the gradient function \\( \\frac{dy}{dx} \\):\n\\[ y = \\int 2 \\, dx \\]",
        "graphData": null
      },
      {
        "explanation": "Integrate to find the general equation.",
        "workingOut": "Integrate the constant:\n\\[ y = 2x + C \\]",
        "graphData": null
      },
      {
        "explanation": "Solve for the constant C.",
        "workingOut": "We are given that the curve passes through \\( A(1, 4) \\), meaning \\( y = 4 \\) when \\( x = 1 \\). Substitute these values:\n\\[ 4 = 2(1) + C \\]\n\\[ 4 = 2 + C \\]\n\\[ C = 2 \\]",
        "graphData": null
      },
      {
        "explanation": "State the final equation.",
        "workingOut": "Substitute \\( C = 2 \\) back into the general equation:\n\\[ y = 2x + 2 \\]",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 250,
            "boundingbox": [
              -2,
              8,
              4,
              -2
            ],
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.8,0], [3.8,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){return 2*x - 2;}, -2, 4], {strokeColor: 'gray', strokeWidth: 1, dash: 2});\nboard.create('functiongraph', [function(x){return 2*x;}, -2, 4], {strokeColor: 'gray', strokeWidth: 1, dash: 2});\nboard.create('functiongraph', [function(x){return 2*x + 4;}, -2, 4], {strokeColor: 'gray', strokeWidth: 1, dash: 2});\nboard.create('functiongraph', [function(x){return 2*x + 2;}, -2, 4], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [1, 4], {name: 'A(1,4)', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, 12]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "opts": [
      "\\(y = 2x + 2\\)",
      "\\(y = 2x + 3\\)",
      "\\(y = x^2 + 3\\)",
      "\\(y = 2x + 4\\)"
    ],
    "options": [
      {
        "text": "\\(y = 2x + 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 2x + 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = x^2 + 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 2x + 4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0"
  },
  {
    "id": "y12a-3h-q8c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the member of the family of curves with gradient function \\( \\frac{dy}{dx} = 6x^2 \\) that passes through the point \\( A(1, 5) \\).",
    "a": 2,
    "t": "Primitive functions",
    "hint": "Integrate to get y = 2x^3 + C, then solve for C with point (1, 5).",
    "solutionSteps": [
      {
        "explanation": "Set up the integral.",
        "workingOut": "To find the curve \\( y \\), we integrate the gradient function \\( \\frac{dy}{dx} \\):\n\\[ y = \\int 6x^2 \\, dx \\]",
        "graphData": null
      },
      {
        "explanation": "Integrate to find the general equation.",
        "workingOut": "Integrate using the power rule:\n\\[ y = \\frac{6x^3}{3} + C \\]\n\\[ y = 2x^3 + C \\]",
        "graphData": null
      },
      {
        "explanation": "Solve for the constant C.",
        "workingOut": "We are given that the curve passes through \\( A(1, 5) \\), meaning \\( y = 5 \\) when \\( x = 1 \\). Substitute these values:\n\\[ 5 = 2(1)^3 + C \\]\n\\[ 5 = 2 + C \\]\n\\[ C = 3 \\]",
        "graphData": null
      },
      {
        "explanation": "State the final equation.",
        "workingOut": "Substitute \\( C = 3 \\) back into the general equation:\n\\[ y = 2x^3 + 3 \\]",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 250,
            "boundingbox": [
              -2,
              10,
              3,
              -2
            ],
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.8,0], [2.8,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,9.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){return 2*x*x*x - 1;}, -2, 2.5], {strokeColor: 'gray', strokeWidth: 1, dash: 2});\nboard.create('functiongraph', [function(x){return 2*x*x*x + 1;}, -2, 2.5], {strokeColor: 'gray', strokeWidth: 1, dash: 2});\nboard.create('functiongraph', [function(x){return 2*x*x*x + 5;}, -2, 2.5], {strokeColor: 'gray', strokeWidth: 1, dash: 2});\nboard.create('functiongraph', [function(x){return 2*x*x*x + 3;}, -2, 2.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [1, 5], {name: 'A(1,5)', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, 12]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "opts": [
      "\\(y = 2x^3 + 5\\)",
      "\\(y = 6x^3 - 1\\)",
      "\\(y = 2x^3 + 3\\)",
      "\\(y = 3x^3 + 2\\)"
    ],
    "options": [
      {
        "text": "\\(y = 2x^3 + 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 6x^3 - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 2x^3 + 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 3x^3 + 2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2"
  },
  {
    "id": "y12a-3h-q8d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the member of the family of curves with gradient function \\( \\frac{dy}{dx} = -\\frac{2}{x^2} \\) that passes through the point \\( A(2, 3) \\).",
    "a": 2,
    "t": "Primitive functions",
    "hint": "Integrate -2/x^2 to find family y = 2/x + C. Solve for C with (2, 3).",
    "solutionSteps": [
      {
        "explanation": "Set up the integral.",
        "workingOut": "To find the curve \\( y \\), we integrate the gradient function \\( \\frac{dy}{dx} \\):\n\\[ y = \\int -\\frac{2}{x^2} \\, dx \\]",
        "graphData": null
      },
      {
        "explanation": "Integrate to find the general equation.",
        "workingOut": "First, rewrite with a negative index: \\( -2x^{-2} \\).\nNow integrate using the power rule:\n\\[ y = \\frac{-2x^{-1}}{-1} + C \\]\n\\[ y = 2x^{-1} + C \\]\n\\[ y = \\frac{2}{x} + C \\]",
        "graphData": null
      },
      {
        "explanation": "Solve for the constant C.",
        "workingOut": "We are given that the curve passes through \\( A(2, 3) \\), meaning \\( y = 3 \\) when \\( x = 2 \\). Substitute these values:\n\\[ 3 = \\frac{2}{2} + C \\]\n\\[ 3 = 1 + C \\]\n\\[ C = 2 \\]",
        "graphData": null
      },
      {
        "explanation": "State the final equation.",
        "workingOut": "Substitute \\( C = 2 \\) back into the general equation:\n\\[ y = \\frac{2}{x} + 2 \\]",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 250,
            "boundingbox": [
              -1,
              8,
              5,
              -1
            ],
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.8,0], [4.8,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-0.8], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){return 2/x;}, 0.2, 5], {strokeColor: 'gray', strokeWidth: 1, dash: 2});\nboard.create('functiongraph', [function(x){return 2/x + 4;}, 0.2, 5], {strokeColor: 'gray', strokeWidth: 1, dash: 2});\nboard.create('functiongraph', [function(x){return 2/x + 2;}, 0.2, 5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [2, 3], {name: 'A(2,3)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "opts": [
      "\\(y = \\frac{1}{x} + \\frac{5}{2}\\)",
      "\\(y = -\\frac{2}{x} + 4\\)",
      "\\(y = \\frac{2}{x} + 2\\)",
      "\\(y = \\frac{2}{x^3} + \\frac{11}{4}\\)"
    ],
    "options": [
      {
        "text": "\\(y = \\frac{1}{x} + \\frac{5}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = -\\frac{2}{x} + 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\frac{2}{x} + 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\frac{2}{x^3} + \\frac{11}{4}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2"
  },
  {
    "id": "y12a-3h-q9a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the linear composite integration rule to find the primitive:\n\\( f(x) = (x+2)^3 \\)",
    "a": 0,
    "t": "Primitive functions",
    "hint": "The primitive of (ax+b)^n is (ax+b)^(n+1) / a(n+1). Here, a = 1.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters for the composite rule.",
        "workingOut": "For the function \\((x-2)^4\\), it is in the form \\((ax+b)^n\\).\nHere, \\(a = 1\\) (the coefficient of \\(x\\)) and \\(n = 4\\) (the exponent).",
        "graphData": null
      },
      {
        "explanation": "Apply the composite integration rule.",
        "workingOut": "The rule is:\n\\[ \\int (ax+b)^n \\, dx = \\frac{(ax+b)^{n+1}}{a(n+1)} + C \\]\nSubstitute our values into the formula:\n\\[ = \\frac{(x-2)^{4+1}}{1(4+1)} + C \\]",
        "graphData": null
      },
      {
        "explanation": "Simplify the arithmetic.",
        "workingOut": "Calculate the numbers in the exponent and the denominator:\n\\[ = \\frac{(x-2)^5}{1(5)} + C \\]\n\\[ = \\frac{(x-2)^5}{5} + C \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(\\frac{(x+2)^4}{4} + C\\)",
      "\\(3(x+2)^2 + C\\)",
      "\\(\\frac{(x+2)^3}{4} + C\\)",
      "\\(\\frac{(x+2)^4}{3} + C\\)"
    ],
    "options": [
      {
        "text": "\\(\\frac{(x+2)^4}{4} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3(x+2)^2 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{(x+2)^3}{4} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{(x+2)^4}{3} + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0"
  },
  {
    "id": "y12a-3h-q9b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the linear composite integration rule to find the primitive:\n\\( f(x) = (x-3)^4 \\)",
    "a": 2,
    "t": "Primitive functions",
    "hint": "Apply the rule with a = 1 and n = 4.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters for the composite rule.",
        "workingOut": "For the function \\((x+3)^5\\), it is in the form \\((ax+b)^n\\).\nHere, \\(a = 1\\) (the coefficient of \\(x\\)) and \\(n = 5\\) (the exponent).",
        "graphData": null
      },
      {
        "explanation": "Apply the composite integration rule.",
        "workingOut": "The rule is:\n\\[ \\int (ax+b)^n \\, dx = \\frac{(ax+b)^{n+1}}{a(n+1)} + C \\]\nSubstitute our values into the formula:\n\\[ = \\frac{(x+3)^{5+1}}{1(5+1)} + C \\]",
        "graphData": null
      },
      {
        "explanation": "Simplify the arithmetic.",
        "workingOut": "Calculate the numbers in the exponent and the denominator:\n\\[ = \\frac{(x+3)^6}{1(6)} + C \\]\n\\[ = \\frac{(x+3)^6}{6} + C \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(\\frac{(x-3)^5}{4} + C\\)",
      "\\(\\frac{(x-3)^4}{5} + C\\)",
      "\\(\\frac{(x-3)^5}{5} + C\\)",
      "\\(4(x-3)^3 + C\\)"
    ],
    "options": [
      {
        "text": "\\(\\frac{(x-3)^5}{4} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{(x-3)^4}{5} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{(x-3)^5}{5} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4(x-3)^3 + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2"
  },
  {
    "id": "y12a-3h-q9c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the linear composite integration rule to find the primitive:\n\\( f(x) = (x+4)^3 \\)",
    "a": 0,
    "t": "Primitive functions",
    "hint": "Integrate composite linear function where a = 1 and n = 3.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters for the composite rule.",
        "workingOut": "For the function \\((x+2)^2\\), it is in the form \\((ax+b)^n\\).\nHere, \\(a = 1\\) (the coefficient of \\(x\\)) and \\(n = 2\\) (the exponent).",
        "graphData": null
      },
      {
        "explanation": "Apply the composite integration rule.",
        "workingOut": "The rule is:\n\\[ \\int (ax+b)^n \\, dx = \\frac{(ax+b)^{n+1}}{a(n+1)} + C \\]\nSubstitute our values into the formula:\n\\[ = \\frac{(x+2)^{2+1}}{1(2+1)} + C \\]",
        "graphData": null
      },
      {
        "explanation": "Simplify the arithmetic.",
        "workingOut": "Calculate the numbers in the exponent and the denominator:\n\\[ = \\frac{(x+2)^3}{1(3)} + C \\]\n\\[ = \\frac{(x+2)^3}{3} + C \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(\\frac{(x+4)^4}{4} + C\\)",
      "\\(\\frac{(x+4)^4}{3} + C\\)",
      "\\(3(x+4)^2 + C\\)",
      "\\(\\frac{(x+4)^3}{4} + C\\)"
    ],
    "options": [
      {
        "text": "\\(\\frac{(x+4)^4}{4} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{(x+4)^4}{3} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3(x+4)^2 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{(x+4)^3}{4} + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0"
  },
  {
    "id": "y12a-3h-q9d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the linear composite integration rule to find the primitive:\n\\( f(x) = (3x+2)^4 \\)",
    "a": 0,
    "t": "Primitive functions",
    "hint": "Divide by the coefficient of x, which is a = 3, multiplied by the new power n+1 = 5.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters for the composite rule.",
        "workingOut": "For the function \\((3x+1)^4\\), it is in the form \\((ax+b)^n\\).\nHere, \\(a = 3\\) (the coefficient of \\(x\\)) and \\(n = 4\\) (the exponent).",
        "graphData": null
      },
      {
        "explanation": "Apply the composite integration rule.",
        "workingOut": "The rule is:\n\\[ \\int (ax+b)^n \\, dx = \\frac{(ax+b)^{n+1}}{a(n+1)} + C \\]\nSubstitute our values into the formula:\n\\[ = \\frac{(3x+1)^{4+1}}{3(4+1)} + C \\]",
        "graphData": null
      },
      {
        "explanation": "Simplify the arithmetic.",
        "workingOut": "Calculate the numbers in the exponent and the denominator:\n\\[ = \\frac{(3x+1)^5}{3(5)} + C \\]\n\\[ = \\frac{(3x+1)^5}{15} + C \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(\\frac{(3x+2)^5}{15} + C\\)",
      "\\(\\frac{(3x+2)^5}{3} + C\\)",
      "\\(\\frac{(3x+2)^5}{5} + C\\)",
      "\\(12(3x+2)^3 + C\\)"
    ],
    "options": [
      {
        "text": "\\(\\frac{(3x+2)^5}{15} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{(3x+2)^5}{3} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{(3x+2)^5}{5} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12(3x+2)^3 + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0"
  },
  {
    "id": "y12a-3h-q9e",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the linear composite integration rule to find the primitive:\n\\( f(x) = (2x-5)^5 \\)",
    "a": 0,
    "t": "Primitive functions",
    "hint": "Here a = 2 and n = 5. Divide the result by 2 * 6.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters for the composite rule.",
        "workingOut": "For the function \\((2x-5)^5\\), it is in the form \\((ax+b)^n\\).\nHere, \\(a = 2\\) (the coefficient of \\(x\\)) and \\(n = 5\\) (the exponent).",
        "graphData": null
      },
      {
        "explanation": "Apply the composite integration rule.",
        "workingOut": "The rule is:\n\\[ \\int (ax+b)^n \\, dx = \\frac{(ax+b)^{n+1}}{a(n+1)} + C \\]\nSubstitute our values into the formula:\n\\[ = \\frac{(2x-5)^{5+1}}{2(5+1)} + C \\]",
        "graphData": null
      },
      {
        "explanation": "Simplify the arithmetic.",
        "workingOut": "Calculate the numbers in the exponent and the denominator:\n\\[ = \\frac{(2x-5)^6}{2(6)} + C \\]\n\\[ = \\frac{(2x-5)^6}{12} + C \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(\\frac{(2x-5)^6}{12} + C\\)",
      "\\(\\frac{(2x-5)^6}{2} + C\\)",
      "\\(\\frac{(2x-5)^6}{6} + C\\)",
      "\\(10(2x-5)^4 + C\\)"
    ],
    "options": [
      {
        "text": "\\(\\frac{(2x-5)^6}{12} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{(2x-5)^6}{2} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{(2x-5)^6}{6} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10(2x-5)^4 + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0"
  },
  {
    "id": "y12a-3h-q9f",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the linear composite integration rule to find the primitive:\n\\( f(x) = (4x-1)^3 \\)",
    "a": 3,
    "t": "Primitive functions",
    "hint": "Here a = 4, n = 3. Denominator will be 4 * 4.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters for the composite rule.",
        "workingOut": "For the function \\((4x-1)^3\\), it is in the form \\((ax+b)^n\\).\nHere, \\(a = 4\\) (the coefficient of \\(x\\)) and \\(n = 3\\) (the exponent).",
        "graphData": null
      },
      {
        "explanation": "Apply the composite integration rule.",
        "workingOut": "The rule is:\n\\[ \\int (ax+b)^n \\, dx = \\frac{(ax+b)^{n+1}}{a(n+1)} + C \\]\nSubstitute our values into the formula:\n\\[ = \\frac{(4x-1)^{3+1}}{4(3+1)} + C \\]",
        "graphData": null
      },
      {
        "explanation": "Simplify the arithmetic.",
        "workingOut": "Calculate the numbers in the exponent and the denominator:\n\\[ = \\frac{(4x-1)^4}{4(4)} + C \\]\n\\[ = \\frac{(4x-1)^4}{16} + C \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(\\frac{(4x-1)^4}{12} + C\\)",
      "\\(12(4x-1)^2 + C\\)",
      "\\(\\frac{(4x-1)^4}{4} + C\\)",
      "\\(\\frac{(4x-1)^4}{16} + C\\)"
    ],
    "options": [
      {
        "text": "\\(\\frac{(4x-1)^4}{12} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12(4x-1)^2 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{(4x-1)^4}{4} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{(4x-1)^4}{16} + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3"
  },
  {
    "id": "y12a-3h-q9g",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the linear composite integration rule to find the primitive:\n\\( f(x) = (1-2x)^3 \\)",
    "a": 0,
    "t": "Primitive functions",
    "hint": "Be careful of the negative sign from the coefficient of x, which is a = -2.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters for the composite rule.",
        "workingOut": "For the function \\((1-2x)^3\\), it is in the form \\((ax+b)^n\\).\nHere, \\(a = -2\\) (the coefficient of \\(x\\)) and \\(n = 3\\) (the exponent).",
        "graphData": null
      },
      {
        "explanation": "Apply the composite integration rule.",
        "workingOut": "The rule is:\n\\[ \\int (ax+b)^n \\, dx = \\frac{(ax+b)^{n+1}}{a(n+1)} + C \\]\nSubstitute our values into the formula:\n\\[ = \\frac{(1-2x)^{3+1}}{-2(3+1)} + C \\]",
        "graphData": null
      },
      {
        "explanation": "Simplify the arithmetic.",
        "workingOut": "Calculate the numbers in the exponent and the denominator:\n\\[ = \\frac{(1-2x)^4}{-2(4)} + C \\]\n\\[ = -\\frac{(1-2x)^4}{8} + C \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(-\\frac{(1-2x)^4}{8} + C\\)",
      "\\(-\\frac{(1-2x)^4}{4} + C\\)",
      "\\(\\frac{(1-2x)^4}{8} + C\\)",
      "\\(-6(1-2x)^2 + C\\)"
    ],
    "options": [
      {
        "text": "\\(-\\frac{(1-2x)^4}{8} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-\\frac{(1-2x)^4}{4} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{(1-2x)^4}{8} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-6(1-2x)^2 + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0"
  },
  {
    "id": "y12a-3h-q9h",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the linear composite integration rule to find the primitive:\n\\( f(x) = (2-3x)^4 \\)",
    "a": 0,
    "t": "Primitive functions",
    "hint": "The coefficient of x is a = -3. Divide by -3 * 5 = -15.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters for the composite rule.",
        "workingOut": "For the function \\((2-3x)^4\\), it is in the form \\((ax+b)^n\\).\nHere, \\(a = -3\\) (the coefficient of \\(x\\)) and \\(n = 4\\) (the exponent).",
        "graphData": null
      },
      {
        "explanation": "Apply the composite integration rule.",
        "workingOut": "The rule is:\n\\[ \\int (ax+b)^n \\, dx = \\frac{(ax+b)^{n+1}}{a(n+1)} + C \\]\nSubstitute our values into the formula:\n\\[ = \\frac{(2-3x)^{4+1}}{-3(4+1)} + C \\]",
        "graphData": null
      },
      {
        "explanation": "Simplify the arithmetic.",
        "workingOut": "Calculate the numbers in the exponent and the denominator:\n\\[ = \\frac{(2-3x)^5}{-3(5)} + C \\]\n\\[ = -\\frac{(2-3x)^5}{15} + C \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(-\\frac{(2-3x)^5}{15} + C\\)",
      "\\(\\frac{(2-3x)^5}{15} + C\\)",
      "\\(-12(2-3x)^3 + C\\)",
      "\\(-\\frac{(2-3x)^5}{5} + C\\)"
    ],
    "options": [
      {
        "text": "\\(-\\frac{(2-3x)^5}{15} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{(2-3x)^5}{15} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-12(2-3x)^3 + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-\\frac{(2-3x)^5}{5} + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0"
  },
  {
    "id": "y12a-3h-q9i",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the linear composite integration rule to find the primitive:\n\\( f(x) = \\frac{1}{(x-3)^5} \\)",
    "a": 3,
    "t": "Primitive functions",
    "hint": "Rewrite as (x-3)^(-5) and integrate.",
    "solutionSteps": [
      {
        "explanation": "Rewrite with a negative exponent.",
        "workingOut": "First, rewrite the fraction using a negative index:\n\\[ f(x) = (x-3)^{-5} \\]",
        "graphData": null
      },
      {
        "explanation": "Identify the parameters.",
        "workingOut": "Here, \\(a = 1\\) (the coefficient of \\(x\\)) and \\(n = -5\\) (the exponent).",
        "graphData": null
      },
      {
        "explanation": "Apply the composite integration rule.",
        "workingOut": "Substitute our values into the formula:\n\\[ \\int (x-3)^{-5} \\, dx = \\frac{(x-3)^{-5+1}}{1(-5+1)} + C \\]",
        "graphData": null
      },
      {
        "explanation": "Simplify the arithmetic.",
        "workingOut": "Calculate the numbers in the exponent and the denominator:\n\\[ = \\frac{(x-3)^{-4}}{-4} + C \\]\n\\[ = -\\frac{1}{4(x-3)^4} + C \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(\\frac{1}{4(x-3)^4} + C\\)",
      "\\(-\\frac{1}{6(x-3)^6} + C\\)",
      "\\(-\\frac{5}{(x-3)^6} + C\\)",
      "\\(-\\frac{1}{4(x-3)^4} + C\\)"
    ],
    "options": [
      {
        "text": "\\(\\frac{1}{4(x-3)^4} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-\\frac{1}{6(x-3)^6} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-\\frac{5}{(x-3)^6} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-\\frac{1}{4(x-3)^4} + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3"
  },
  {
    "id": "y12a-3h-q9j",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the linear composite integration rule to find the primitive:\n\\( f(x) = \\frac{1}{(1-2x)^6} \\)",
    "a": 2,
    "t": "Primitive functions",
    "hint": "Rewrite as (1-2x)^(-6) and integrate. The coefficient of x is -2.",
    "solutionSteps": [
      {
        "explanation": "Rewrite with a negative exponent.",
        "workingOut": "First, rewrite the fraction using a negative index:\n\\[ f(x) = (1-2x)^{-6} \\]",
        "graphData": null
      },
      {
        "explanation": "Identify the parameters.",
        "workingOut": "Here, \\(a = -2\\) (the coefficient of \\(x\\)) and \\(n = -6\\) (the exponent).",
        "graphData": null
      },
      {
        "explanation": "Apply the composite integration rule.",
        "workingOut": "Substitute our values into the formula:\n\\[ \\int (1-2x)^{-6} \\, dx = \\frac{(1-2x)^{-6+1}}{-2(-6+1)} + C \\]",
        "graphData": null
      },
      {
        "explanation": "Simplify the arithmetic.",
        "workingOut": "Calculate the numbers in the exponent and the denominator. Note that a negative times a negative becomes positive:\n\\[ = \\frac{(1-2x)^{-5}}{-2(-5)} + C \\]\n\\[ = \\frac{(1-2x)^{-5}}{10} + C \\]\n\\[ = \\frac{1}{10(1-2x)^5} + C \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(\\frac{1}{12(1-2x)^7} + C\\)",
      "\\(-\\frac{1}{10(1-2x)^5} + C\\)",
      "\\(\\frac{1}{10(1-2x)^5} + C\\)",
      "\\(\\frac{1}{5(1-2x)^5} + C\\)"
    ],
    "options": [
      {
        "text": "\\(\\frac{1}{12(1-2x)^7} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-\\frac{1}{10(1-2x)^5} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{1}{10(1-2x)^5} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{1}{5(1-2x)^5} + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2"
  },
  {
    "id": "y12a-3h-q10a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the primitive of the function:\n\\( f(x) = \\sqrt{x+3} \\)",
    "a": 3,
    "t": "Primitive functions",
    "hint": "Express as (x+3)^(1/2), then apply the composite linear integration rule.",
    "solutionSteps": [
      {
        "explanation": "Convert to a fractional index.",
        "workingOut": "Rewrite the root as a fractional power:\n\\[f(x) = \\sqrt{x+3}\\]",
        "graphData": null
      },
      {
        "explanation": "Apply the composite integration rule.",
        "workingOut": "Use the rule \\(\\int (ax+b)^n dx = \\frac{(ax+b)^{n+1}}{a(n+1)} + C\\). Remember to divide by the inner derivative \\(a\\)!",
        "graphData": null
      },
      {
        "explanation": "State the final primitive.",
        "workingOut": "Evaluating this gives:\n\\[\\frac{2}{3}(x+3)^{\\frac{3}{2}} + C\\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(\\frac{1}{2}(x+3)^{-\\frac{1}{2}} + C\\)",
      "\\(\\frac{3}{2}(x+3)^{\\frac{2}{3}} + C\\)",
      "\\(\\frac{2}{3}(x+3)^{\\frac{1}{2}} + C\\)",
      "\\(\\frac{2}{3}(x+3)^{\\frac{3}{2}} + C\\)"
    ],
    "options": [
      {
        "text": "\\(\\frac{1}{2}(x+3)^{-\\frac{1}{2}} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{3}{2}(x+3)^{\\frac{2}{3}} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{2}{3}(x+3)^{\\frac{1}{2}} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{2}{3}(x+3)^{\\frac{3}{2}} + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3"
  },
  {
    "id": "y12a-3h-q10b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the primitive of the function:\n\\( f(x) = \\sqrt{x-2} \\)",
    "a": 3,
    "t": "Primitive functions",
    "hint": "Integrate (x-2)^(1/2).",
    "solutionSteps": [
      {
        "explanation": "Convert to a fractional index.",
        "workingOut": "Rewrite the root as a fractional power:\n\\[f(x) = \\sqrt{x-2}\\]",
        "graphData": null
      },
      {
        "explanation": "Apply the composite integration rule.",
        "workingOut": "Use the rule \\(\\int (ax+b)^n dx = \\frac{(ax+b)^{n+1}}{a(n+1)} + C\\). Remember to divide by the inner derivative \\(a\\)!",
        "graphData": null
      },
      {
        "explanation": "State the final primitive.",
        "workingOut": "Evaluating this gives:\n\\[\\frac{2}{3}(x-2)^{\\frac{3}{2}} + C\\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(\\frac{3}{2}(x-2)^{\\frac{2}{3}} + C\\)",
      "\\(\\frac{2}{3}(x-2)^{-\\frac{1}{2}} + C\\)",
      "\\(\\frac{1}{3}(x-2)^{\\frac{3}{2}} + C\\)",
      "\\(\\frac{2}{3}(x-2)^{\\frac{3}{2}} + C\\)"
    ],
    "options": [
      {
        "text": "\\(\\frac{3}{2}(x-2)^{\\frac{2}{3}} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{2}{3}(x-2)^{-\\frac{1}{2}} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{1}{3}(x-2)^{\\frac{3}{2}} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{2}{3}(x-2)^{\\frac{3}{2}} + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3"
  },
  {
    "id": "y12a-3h-q10c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the primitive of the function:\n\\( f(x) = \\sqrt{3-x} \\)",
    "a": 1,
    "t": "Primitive functions",
    "hint": "Be careful, the coefficient of x is -1.",
    "solutionSteps": [
      {
        "explanation": "Convert to a fractional index.",
        "workingOut": "Rewrite the root as a fractional power:\n\\[f(x) = \\sqrt{3-x}\\]",
        "graphData": null
      },
      {
        "explanation": "Apply the composite integration rule.",
        "workingOut": "Use the rule \\(\\int (ax+b)^n dx = \\frac{(ax+b)^{n+1}}{a(n+1)} + C\\). Remember to divide by the inner derivative \\(a\\)!",
        "graphData": null
      },
      {
        "explanation": "State the final primitive.",
        "workingOut": "Evaluating this gives:\n\\[-\\frac{2}{3}(3-x)^{\\frac{3}{2}} + C\\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(\\frac{2}{3}(3-x)^{\\frac{3}{2}} + C\\)",
      "\\(-\\frac{2}{3}(3-x)^{\\frac{3}{2}} + C\\)",
      "\\(-\\frac{3}{2}(3-x)^{\\frac{2}{3}} + C\\)",
      "\\(-\\frac{1}{2}(3-x)^{-\\frac{1}{2}} + C\\)"
    ],
    "options": [
      {
        "text": "\\(\\frac{2}{3}(3-x)^{\\frac{3}{2}} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-\\frac{2}{3}(3-x)^{\\frac{3}{2}} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-\\frac{3}{2}(3-x)^{\\frac{2}{3}} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-\\frac{1}{2}(3-x)^{-\\frac{1}{2}} + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1"
  },
  {
    "id": "y12a-3h-q10d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the primitive of the function:\n\\( f(x) = \\sqrt{3x-5} \\)",
    "a": 3,
    "t": "Primitive functions",
    "hint": "Divide by coefficient a = 3 multiplied by rational power 3/2.",
    "solutionSteps": [
      {
        "explanation": "Convert to a fractional index.",
        "workingOut": "Rewrite the root as a fractional power:\n\\[f(x) = \\sqrt{3x-5}\\]",
        "graphData": null
      },
      {
        "explanation": "Apply the composite integration rule.",
        "workingOut": "Use the rule \\(\\int (ax+b)^n dx = \\frac{(ax+b)^{n+1}}{a(n+1)} + C\\). Remember to divide by the inner derivative \\(a\\)!",
        "graphData": null
      },
      {
        "explanation": "State the final primitive.",
        "workingOut": "Evaluating this gives:\n\\[\\frac{2}{9}(3x-5)^{\\frac{3}{2}} + C\\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(\\frac{2}{3}(3x-5)^{\\frac{3}{2}} + C\\)",
      "\\(\\frac{2}{9}(3x-5)^{-\\frac{1}{2}} + C\\)",
      "\\(\\frac{1}{6}(3x-5)^{\\frac{3}{2}} + C\\)",
      "\\(\\frac{2}{9}(3x-5)^{\\frac{3}{2}} + C\\)"
    ],
    "options": [
      {
        "text": "\\(\\frac{2}{3}(3x-5)^{\\frac{3}{2}} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{2}{9}(3x-5)^{-\\frac{1}{2}} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{1}{6}(3x-5)^{\\frac{3}{2}} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{2}{9}(3x-5)^{\\frac{3}{2}} + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3"
  },
  {
    "id": "y12a-3h-q10e",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the primitive of the function:\n\\( f(x) = \\sqrt{2x-3} \\)",
    "a": 2,
    "t": "Primitive functions",
    "hint": "Divide by a = 2 multiplied by 3/2.",
    "solutionSteps": [
      {
        "explanation": "Convert to a fractional index.",
        "workingOut": "Rewrite the root as a fractional power:\n\\[f(x) = \\sqrt{2x-3}\\]",
        "graphData": null
      },
      {
        "explanation": "Apply the composite integration rule.",
        "workingOut": "Use the rule \\(\\int (ax+b)^n dx = \\frac{(ax+b)^{n+1}}{a(n+1)} + C\\). Remember to divide by the inner derivative \\(a\\)!",
        "graphData": null
      },
      {
        "explanation": "State the final primitive.",
        "workingOut": "Evaluating this gives:\n\\[\\frac{1}{3}(2x-3)^{\\frac{3}{2}} + C\\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(\\frac{1}{3}(2x-3)^{\\frac{1}{2}} + C\\)",
      "\\(\\frac{2}{3}(2x-3)^{\\frac{3}{2}} + C\\)",
      "\\(\\frac{1}{3}(2x-3)^{\\frac{3}{2}} + C\\)",
      "\\(\\frac{1}{6}(2x-3)^{\\frac{3}{2}} + C\\)"
    ],
    "options": [
      {
        "text": "\\(\\frac{1}{3}(2x-3)^{\\frac{1}{2}} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{2}{3}(2x-3)^{\\frac{3}{2}} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{1}{3}(2x-3)^{\\frac{3}{2}} + C\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{1}{6}(2x-3)^{\\frac{3}{2}} + C\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2"
  },
  {
    "id": "y12a-3h-q11a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find \\( y \\) if \\( y' = (x-2)^4 \\), given that \\( y = 3 \\) when \\( x = 2 \\).",
    "a": 2,
    "t": "Primitive functions",
    "hint": "Integrate composite linear function and solve for C with initial coordinates.",
    "solutionSteps": [
      {
        "explanation": "Set up the integral.",
        "workingOut": "To find the curve \\( y \\), we integrate the gradient function \\( y' \\):\n\\[ y = \\int (x-2)^4 \\, dx \\]",
        "graphData": null
      },
      {
        "explanation": "Integrate to find the general equation.",
        "workingOut": "Use the composite integration rule \\( \\int (ax+b)^n \\, dx = \\frac{(ax+b)^{n+1}}{a(n+1)} \\):\n\\[ y = \\frac{(x-2)^5}{(1)(5)} + C \\]\n\\[ y = \\frac{(x-2)^5}{5} + C \\]",
        "graphData": null
      },
      {
        "explanation": "Solve for the constant C.",
        "workingOut": "We are given that \\( y = 3 \\) when \\( x = 2 \\). Substitute these values into our general equation:\n\\[ 3 = \\frac{(2-2)^5}{5} + C \\]\n\\[ 3 = \\frac{0^5}{5} + C \\]\n\\[ 3 = 0 + C \\]\n\\[ C = 3 \\]",
        "graphData": null
      },
      {
        "explanation": "State the final equation.",
        "workingOut": "Substitute \\( C = 3 \\) back into the general equation:\n\\[ y = \\frac{(x-2)^5}{5} + 3 \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(y = 4(x-2)^3 + 3\\)",
      "\\(y = \\frac{(x-2)^5}{5} - 3\\)",
      "\\(y = \\frac{(x-2)^5}{5} + 3\\)",
      "\\(y = \\frac{(x-2)^5}{5} + 2\\)"
    ],
    "options": [
      {
        "text": "\\(y = 4(x-2)^3 + 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\frac{(x-2)^5}{5} - 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\frac{(x-2)^5}{5} + 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\frac{(x-2)^5}{5} + 2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2"
  },
  {
    "id": "y12a-3h-q11b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find \\( y \\) if \\( y' = (3x+1)^3 \\), given that \\( y = -2 \\) when \\( x = 0 \\).",
    "a": 2,
    "t": "Primitive functions",
    "hint": "Remember to divide by 3 * 4 = 12 when integrating.",
    "solutionSteps": [
      {
        "explanation": "Set up the integral.",
        "workingOut": "To find the curve \\( y \\), we integrate the gradient function \\( y' \\):\n\\[ y = \\int (3x+1)^3 \\, dx \\]",
        "graphData": null
      },
      {
        "explanation": "Integrate to find the general equation.",
        "workingOut": "Use the composite integration rule. Remember to multiply the denominator by the inner derivative (3):\n\\[ y = \\frac{(3x+1)^4}{(3)(4)} + C \\]\n\\[ y = \\frac{(3x+1)^4}{12} + C \\]",
        "graphData": null
      },
      {
        "explanation": "Solve for the constant C.",
        "workingOut": "We are given that \\( y = -2 \\) when \\( x = 0 \\). Substitute these values:\n\\[ -2 = \\frac{(3(0)+1)^4}{12} + C \\]\n\\[ -2 = \\frac{(1)^4}{12} + C \\]\n\\[ -2 = \\frac{1}{12} + C \\]\n\\[ C = -2 - \\frac{1}{12} = -\\frac{25}{12} \\]",
        "graphData": null
      },
      {
        "explanation": "State the final equation.",
        "workingOut": "Substitute \\( C = -\\frac{25}{12} \\) back into the general equation:\n\\[ y = \\frac{(3x+1)^4}{12} - \\frac{25}{12} \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(y = \\frac{(3x+1)^4}{3} - \\frac{7}{3}\\)",
      "\\(y = \\frac{(3x+1)^4}{4} - 2\\)",
      "\\(y = \\frac{(3x+1)^4}{12} - \\frac{25}{12}\\)",
      "\\(y = \\frac{(3x+1)^4}{12} - 2\\)"
    ],
    "options": [
      {
        "text": "\\(y = \\frac{(3x+1)^4}{3} - \\frac{7}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\frac{(3x+1)^4}{4} - 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\frac{(3x+1)^4}{12} - \\frac{25}{12}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\frac{(3x+1)^4}{12} - 2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2"
  },
  {
    "id": "y12a-3h-q11c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find \\( y \\) if \\( y' = \\sqrt{3x+1} \\), given that \\( y = 1 \\) when \\( x = 0 \\).",
    "a": 2,
    "t": "Primitive functions",
    "hint": "Integrate composite root to power 3/2, dividing by 3 * (3/2) = 9/2.",
    "solutionSteps": [
      {
        "explanation": "Set up the integral.",
        "workingOut": "To find the curve \\( y \\), we integrate the gradient function \\( y' \\):\n\\[ y = \\int \\sqrt{3x+1} \\, dx \\]",
        "graphData": null
      },
      {
        "explanation": "Integrate to find the general equation.",
        "workingOut": "Rewrite as a fractional index \\( (3x+1)^{\\frac{1}{2}} \\) and use the composite rule:\n\\[ y = \\frac{(3x+1)^{\\frac{3}{2}}}{(3)(\\frac{3}{2})} + C \\]\n\\[ y = \\frac{(3x+1)^{\\frac{3}{2}}}{\\frac{9}{2}} + C \\]\n\\[ y = \\frac{2}{9}(3x+1)^{\\frac{3}{2}} + C \\]",
        "graphData": null
      },
      {
        "explanation": "Solve for the constant C.",
        "workingOut": "We are given that \\( y = 1 \\) when \\( x = 0 \\). Substitute these values:\n\\[ 1 = \\frac{2}{9}(3(0)+1)^{\\frac{3}{2}} + C \\]\n\\[ 1 = \\frac{2}{9}(1)^{\\frac{3}{2}} + C \\]\n\\[ 1 = \\frac{2}{9} + C \\]\n\\[ C = 1 - \\frac{2}{9} = \\frac{7}{9} \\]",
        "graphData": null
      },
      {
        "explanation": "State the final equation.",
        "workingOut": "Substitute \\( C = \\frac{7}{9} \\) back into the general equation:\n\\[ y = \\frac{2}{9}(3x+1)^{\\frac{3}{2}} + \\frac{7}{9} \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(y = \\frac{1}{6}(3x+1)^{\\frac{3}{2}} + \\frac{5}{6}\\)",
      "\\(y = \\frac{2}{9}(3x+1)^{\\frac{3}{2}} + 1\\)",
      "\\(y = \\frac{2}{9}(3x+1)^{\\frac{3}{2}} + \\frac{7}{9}\\)",
      "\\(y = \\frac{2}{3}(3x+1)^{\\frac{3}{2}} + \\frac{1}{3}\\)"
    ],
    "options": [
      {
        "text": "\\(y = \\frac{1}{6}(3x+1)^{\\frac{3}{2}} + \\frac{5}{6}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\frac{2}{9}(3x+1)^{\\frac{3}{2}} + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\frac{2}{9}(3x+1)^{\\frac{3}{2}} + \\frac{7}{9}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\frac{2}{3}(3x+1)^{\\frac{3}{2}} + \\frac{1}{3}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2"
  },
  {
    "id": "y12a-3h-q12a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the equation of the curve through the origin whose gradient is:\n\\( \\frac{dy}{dx} = 5x^4 - 3x^2 + 2 \\)",
    "a": 0,
    "t": "Primitive functions",
    "hint": "Origin coordinates are (0, 0). Integrate and solve for C.",
    "solutionSteps": [
      {
        "explanation": "Set up the integral.",
        "workingOut": "To find the curve \\( y \\), we integrate the gradient function \\( \\frac{dy}{dx} \\):\n\\[ y = \\int (5x^4 - 3x^2 + 2) \\, dx \\]",
        "graphData": null
      },
      {
        "explanation": "Integrate to find the general equation.",
        "workingOut": "Integrate term by term using the power rule:\n\\[ y = \\frac{5x^5}{5} - \\frac{3x^3}{3} + 2x + C \\]\n\\[ y = x^5 - x^3 + 2x + C \\]",
        "graphData": null
      },
      {
        "explanation": "Solve for the constant C.",
        "workingOut": "The curve passes through the origin \\( (0,0) \\), meaning \\( y = 0 \\) when \\( x = 0 \\). Substitute these values:\n\\[ 0 = (0)^5 - (0)^3 + 2(0) + C \\]\n\\[ 0 = 0 + C \\]\n\\[ C = 0 \\]",
        "graphData": null
      },
      {
        "explanation": "State the final equation.",
        "workingOut": "Since \\( C = 0 \\), the final equation is:\n\\[ y = x^5 - x^3 + 2x \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(y = x^5 - x^3 + 2x\\)",
      "\\(y = 20x^3 - 6x\\)",
      "\\(y = x^5 - x^3 + 2x + 1\\)",
      "\\(y = x^5 - 3x^3 + 2x\\)"
    ],
    "options": [
      {
        "text": "\\(y = x^5 - x^3 + 2x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 20x^3 - 6x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = x^5 - x^3 + 2x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = x^5 - 3x^3 + 2x\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0"
  },
  {
    "id": "y12a-3h-q12b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the curve passing through \\( (2, 5) \\) with gradient function:\n\\( \\frac{dy}{dx} = 3 + 4x - 3x^2 \\)",
    "a": 0,
    "t": "Primitive functions",
    "hint": "Integrate and use condition y(2) = 5 to find C.",
    "solutionSteps": [
      {
        "explanation": "Set up the integral.",
        "workingOut": "To find the curve \\( y \\), we integrate the gradient function \\( \\frac{dy}{dx} \\):\n\\[ y = \\int (3 + 4x - 3x^2) \\, dx \\]",
        "graphData": null
      },
      {
        "explanation": "Integrate to find the general equation.",
        "workingOut": "Integrate term by term using the power rule:\n\\[ y = 3x + \\frac{4x^2}{2} - \\frac{3x^3}{3} + C \\]\n\\[ y = 3x + 2x^2 - x^3 + C \\]\n\\[ y = -x^3 + 2x^2 + 3x + C \\]",
        "graphData": null
      },
      {
        "explanation": "Solve for the constant C.",
        "workingOut": "The curve passes through \\( (2,5) \\), meaning \\( y = 5 \\) when \\( x = 2 \\). Substitute these values:\n\\[ 5 = -(2)^3 + 2(2)^2 + 3(2) + C \\]\n\\[ 5 = -8 + 8 + 6 + C \\]\n\\[ 5 = 6 + C \\]\n\\[ C = -1 \\]",
        "graphData": null
      },
      {
        "explanation": "State the final equation.",
        "workingOut": "Substitute \\( C = -1 \\) back into the general equation:\n\\[ y = -x^3 + 2x^2 + 3x - 1 \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(y = -x^3 + 2x^2 + 3x - 1\\)",
      "\\(y = -x^3 + 2x^2 + 3x + 1\\)",
      "\\(y = -3x^3 + 4x^2 + 3x - 5\\)",
      "\\(y = -x^3 + 2x^2 + 3x - 5\\)"
    ],
    "options": [
      {
        "text": "\\(y = -x^3 + 2x^2 + 3x - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = -x^3 + 2x^2 + 3x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = -3x^3 + 4x^2 + 3x - 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = -x^3 + 2x^2 + 3x - 5\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0"
  },
  {
    "id": "y12a-3h-q12c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the curve through the point \\( (\\frac{1}{3}, 2) \\) with gradient function:\n\\( y' = (2-3x)^3 \\)",
    "a": 2,
    "t": "Primitive functions",
    "hint": "Use linear composite integration and substitute coordinates to solve for C.",
    "solutionSteps": [
      {
        "explanation": "Set up the integral.",
        "workingOut": "To find the curve \\( y \\), we integrate the gradient function \\( y' \\):\n\\[ y = \\int (2-3x)^3 \\, dx \\]",
        "graphData": null
      },
      {
        "explanation": "Integrate to find the general equation.",
        "workingOut": "Use the composite integration rule. Remember to divide by the inner derivative (-3):\n\\[ y = \\frac{(2-3x)^4}{(-3)(4)} + C \\]\n\\[ y = -\\frac{(2-3x)^4}{12} + C \\]",
        "graphData": null
      },
      {
        "explanation": "Solve for the constant C.",
        "workingOut": "The curve passes through \\( (\\frac{1}{3}, 2) \\), meaning \\( y = 2 \\) when \\( x = \\frac{1}{3} \\). Substitute these values:\n\\[ 2 = -\\frac{(2 - 3(\\frac{1}{3}))^4}{12} + C \\]\n\\[ 2 = -\\frac{(2 - 1)^4}{12} + C \\]\n\\[ 2 = -\\frac{1}{12} + C \\]\n\\[ C = 2 + \\frac{1}{12} = \\frac{25}{12} \\]",
        "graphData": null
      },
      {
        "explanation": "State the final equation.",
        "workingOut": "Substitute \\( C = \\frac{25}{12} \\) back into the general equation:\n\\[ y = -\\frac{(2-3x)^4}{12} + \\frac{25}{12} \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(y = -\\frac{(2-3x)^4}{12} + 2\\)",
      "\\(y = -\\frac{(2-3x)^4}{4} + \\frac{9}{4}\\)",
      "\\(y = -\\frac{(2-3x)^4}{12} + \\frac{25}{12}\\)",
      "\\(y = \\frac{(2-3x)^4}{12} + \\frac{25}{12}\\)"
    ],
    "options": [
      {
        "text": "\\(y = -\\frac{(2-3x)^4}{12} + 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = -\\frac{(2-3x)^4}{4} + \\frac{9}{4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = -\\frac{(2-3x)^4}{12} + \\frac{25}{12}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\frac{(2-3x)^4}{12} + \\frac{25}{12}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2"
  },
  {
    "id": "y12a-3h-q13",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find \\( y \\) if \\( \\frac{dy}{dt} = 4t^3 - 6t^2 + 3 \\), and \\( y = 5 \\) when \\( t = 0 \\). Hence, find the value of \\( y \\) when \\( t = 2 \\).",
    "a": 1,
    "t": "Primitive functions",
    "hint": "Integrate to get y(t), solve for C, then evaluate y(2).",
    "solutionSteps": [
      {
        "explanation": "Set up the integral.",
        "workingOut": "To find the equation for \\( y \\), we integrate the derivative \\( \\frac{dy}{dt} \\):\n\\[ y = \\int (4t^3 - 6t^2 + 3) \\, dt \\]",
        "graphData": null
      },
      {
        "explanation": "Integrate to find the general equation.",
        "workingOut": "Integrate term by term:\n\\[ y = \\frac{4t^4}{4} - \\frac{6t^3}{3} + 3t + C \\]\n\\[ y = t^4 - 2t^3 + 3t + C \\]",
        "graphData": null
      },
      {
        "explanation": "Solve for the constant C.",
        "workingOut": "We are given that \\( y = 5 \\) when \\( t = 0 \\). Substitute these values:\n\\[ 5 = (0)^4 - 2(0)^3 + 3(0) + C \\]\n\\[ 5 = 0 + C \\]\n\\[ C = 5 \\]\n\nThe specific equation is \\( y = t^4 - 2t^3 + 3t + 5 \\).",
        "graphData": null
      },
      {
        "explanation": "Find the value of y when t = 2.",
        "workingOut": "Now substitute \\( t = 2 \\) into our specific equation:\n\\[ y = (2)^4 - 2(2)^3 + 3(2) + 5 \\]\n\\[ y = 16 - 2(8) + 6 + 5 \\]\n\\[ y = 16 - 16 + 11 \\]\n\\[ y = 11 \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(12\\)",
      "\\(11\\)",
      "\\(10\\)",
      "\\(9\\)"
    ],
    "options": [
      {
        "text": "\\(12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1"
  },
  {
    "id": "y12a-3h-q14",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "Explain why the rule for finding the primitive of \\( x^n \\), which is \\( \\frac{x^{n+1}}{n+1} \\) (for \\( n \ne -1 \\)), cannot be applied when \\( n = -1 \\).",
    "a": 0,
    "t": "Primitive functions",
    "hint": "Look at what happens to the denominator when you plug in n = -1.",
    "solutionSteps": [
      {
        "explanation": "Write down the power rule formula.",
        "workingOut": "The power rule for integration states that to find the primitive of \\( x^n \\), we add 1 to the power and divide by the new power:\n\\[ \\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C \\]",
        "graphData": null
      },
      {
        "explanation": "Substitute n = -1 into the formula.",
        "workingOut": "Let's try to apply this rule blindly when \\( n = -1 \\) (which represents \\( \\frac{1}{x} \\)):\n\\[ \\int x^{-1} \\, dx = \\frac{x^{-1+1}}{-1+1} + C \\]",
        "graphData": null
      },
      {
        "explanation": "Simplify the mathematical expression.",
        "workingOut": "Simplify the mathematical operations in the exponent and the denominator:\n\\[ \\int x^{-1} \\, dx = \\frac{x^0}{0} + C \\]\n\\[ \\int x^{-1} \\, dx = \\frac{1}{0} + C \\]",
        "graphData": null
      },
      {
        "explanation": "Conclude using the rules of mathematics.",
        "workingOut": "In mathematics, division by zero is strictly undefined. Because applying the formula results in a zero in the denominator (\\( \\frac{1}{0} \\)), the power rule completely breaks down and cannot be used here.\n\n*(Note: This is why the primitive of \\( x^{-1} \\) is defined separately using the natural logarithm: \\( \\ln|x| + C \\)).*",
        "graphData": null
      }
    ],
    "opts": [
      "Because substituting \\( n = -1 \\) yields a division by zero in the denominator, which is mathematically undefined.",
      "Because substituting \\( n = -1 \\) results in a negative area under the curve.",
      "Because substituting \\( n = -1 \\) makes the numerator zero, which violates the power rule.",
      "Because the power rule only works for positive integers."
    ],
    "options": [
      {
        "text": "Because substituting \\( n = -1 \\) yields a division by zero in the denominator, which is mathematically undefined.",
        "imageUrl": ""
      },
      {
        "text": "Because substituting \\( n = -1 \\) results in a negative area under the curve.",
        "imageUrl": ""
      },
      {
        "text": "Because substituting \\( n = -1 \\) makes the numerator zero, which violates the power rule.",
        "imageUrl": ""
      },
      {
        "text": "Because the power rule only works for positive integers.",
        "imageUrl": ""
      }
    ],
    "answer": "0"
  },
  {
    "id": "y12a-3h-q15",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "Find \\( y \\) as a function of \\( x \\) if \\( y'' = 12x + 2 \\), given that when \\( x = 1 \\), \\( y' = 5 \\) and \\( y = 3 \\).",
    "a": 0,
    "t": "Primitive functions",
    "hint": "Integrate twice. Find the constant of integration for y' first, then integrate again to find the constant for y.",
    "solutionSteps": [
      {
        "explanation": "Integrate y'' to find y'.",
        "workingOut": "The second derivative is \\( y'' = 12x + 2 \\). To find the first derivative \\( y' \\), we integrate:\n\\[ y' = \\int (12x + 2) \\, dx \\]\n\\[ y' = \\frac{12x^2}{2} + 2x + C_1 \\]\n\\[ y' = 6x^2 + 2x + C_1 \\]",
        "graphData": null
      },
      {
        "explanation": "Solve for C1 using the first initial condition.",
        "workingOut": "We are given that \\( y' = 5 \\) when \\( x = 1 \\). Substitute these values to find \\( C_1 \\):\n\\[ 5 = 6(1)^2 + 2(1) + C_1 \\]\n\\[ 5 = 6 + 2 + C_1 \\]\n\\[ 5 = 8 + C_1 \\]\n\\[ C_1 = -3 \\]\nSo, the equation for the first derivative is:\n\\[ y' = 6x^2 + 2x - 3 \\]",
        "graphData": null
      },
      {
        "explanation": "Integrate y' to find y.",
        "workingOut": "Now, integrate the first derivative to find the original function \\( y \\):\n\\[ y = \\int (6x^2 + 2x - 3) \\, dx \\]\n\\[ y = \\frac{6x^3}{3} + \\frac{2x^2}{2} - 3x + C_2 \\]\n\\[ y = 2x^3 + x^2 - 3x + C_2 \\]",
        "graphData": null
      },
      {
        "explanation": "Solve for C2 using the second initial condition.",
        "workingOut": "We are given that \\( y = 3 \\) when \\( x = 1 \\). Substitute these values to find \\( C_2 \\):\n\\[ 3 = 2(1)^3 + (1)^2 - 3(1) + C_2 \\]\n\\[ 3 = 2 + 1 - 3 + C_2 \\]\n\\[ 3 = 0 + C_2 \\]\n\\[ C_2 = 3 \\]\n\nSubstitute \\( C_2 = 3 \\) back into the equation for our final answer:\n\\[ y = 2x^3 + x^2 - 3x + 3 \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(y = 2x^3 + x^2 - 3x + 3\\)",
      "\\(y = 2x^3 + x^2 + 3x - 3\\)",
      "\\(y = 6x^2 + 2x - 3\\)",
      "\\(y = 2x^3 + x^2 - 3x + 5\\)"
    ],
    "options": [
      {
        "text": "\\(y = 2x^3 + x^2 - 3x + 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 2x^3 + x^2 + 3x - 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 6x^2 + 2x - 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 2x^3 + x^2 - 3x + 5\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0"
  },
  {
    "id": "y12a-3h-q16",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "A function \\( f(x) \\) has second derivative \\( f''(x) = 2x - 6 \\). Its graph passes through the point \\( (3, 20) \\), and at this point the tangent has a gradient of \\( 11 \\). Complete parts a), b), and c).",
    "t": "Primitive functions",
    "solutionSteps": [],
    "subQuestions": [
      {
        "id": "y12a-3h-q16a",
        "type": "multiple_choice",
        "question": "a) Find \\( f'(x) \\).",
        "solutionSteps": [
          {
            "explanation": "Integrate the second derivative",
            "workingOut": "f'(x) = \\int (2x - 6) \\, dx = x^2 - 6x + C_1"
          },
          {
            "explanation": "Substitute coordinates x = 3 and tangent gradient = 11",
            "workingOut": "11 = (3)^2 - 6(3) + C_1 \\implies 11 = 9 - 18 + C_1"
          },
          {
            "explanation": "Solve for the constant C1",
            "workingOut": "11 = -9 + C_1 \\implies C_1 = 20 \\implies f'(x) = x^2 - 6x + 20"
          }
        ],
        "options": [
          {
            "text": "\\( f'(x) = x^2 - 6x + 11 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( f'(x) = x^2 - 6x - 20 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( f'(x) = x^2 - 6x + 20 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( f'(x) = 2x^2 - 6x + 20 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "a": 2
      },
      {
        "id": "y12a-3h-q16b",
        "type": "multiple_choice",
        "question": "b) Find \\( f(x) \\).",
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
          }
        ],
        "options": [
          {
            "text": "\\( f(x) = x^3 - 3x^2 + 20x - 22 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( f(x) = \\frac{x^3}{3} - 3x^2 + 20x + 22 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( f(x) = \\frac{x^3}{3} - 6x^2 + 20x - 22 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( f(x) = \\frac{x^3}{3} - 3x^2 + 20x - 22 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "a": 3
      },
      {
        "id": "y12a-3h-q16c",
        "type": "multiple_choice",
        "question": "c) Find the y-intercept of the curve.",
        "solutionSteps": [
          {
            "explanation": "Find the y-intercept",
            "workingOut": "The y-intercept occurs when \\( x = 0 \\). Substitute \\( x = 0 \\) into the equation for \\( f(x) \\):\n\\[ f(0) = \\frac{0^3}{3} - 3(0)^2 + 20(0) - 22 \\]\n\\[ f(0) = -22 \\]\nThus, the y-intercept is \\( (0, -22) \\)."
          }
        ],
        "options": [
          {
            "text": "\\( (0, 20) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (-22, 0) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (0, 22) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (0, -22) \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "a": 3
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
        "type": "multiple_choice",
        "question": "a) Find the general equation for \\( y \\), using integration constants \\( C \\) and \\( D \\).",
        "solutionSteps": [
          {
            "explanation": "Integrate y'' to find the first derivative y'.",
            "workingOut": "The second derivative is \\( y'' = 12 - 6x \\). Integrate it to find \\( y' \\):\n\\[ y' = \\int (12 - 6x) \\, dx \\]\n\\[ y' = 12x - \\frac{6x^2}{2} + C \\]\n\\[ y' = 12x - 3x^2 + C \\]"
          },
          {
            "explanation": "Integrate y' to find the general equation for y.",
            "workingOut": "Now integrate \\( y' \\) to find \\( y \\). Remember to add a second constant \\( D \\):\n\\[ y = \\int (12x - 3x^2 + C) \\, dx \\]\n\\[ y = \\frac{12x^2}{2} - \\frac{3x^3}{3} + Cx + D \\]\n\\[ y = 6x^2 - x^3 + Cx + D \\]\n\\[ y = -x^3 + 6x^2 + Cx + D \\]"
          }
        ],
        "options": [
          {
            "text": "\\( y = x^3 - 6x^2 + Cx + D \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y = -x^3 + 6x^2 + Cx + D \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y = -x^3 + 6x^2 + C \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y = -3x^3 + 12x^2 + Cx + D \\)",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "a": 1
      },
      {
        "id": "y12a-3h-q17b",
        "type": "multiple_choice",
        "question": "b) Hence find the exact equation of the curve given that it passes through the points \\( (1, 10) \\) and \\( (-1, 2) \\).",
        "solutionSteps": [
          {
            "explanation": "Substitute the first point (1, 10) to create Equation 1.",
            "workingOut": "We know the curve passes through \\( (1, 10) \\). Substitute \\( x = 1, y = 10 \\) into our general equation:\n\\[ 10 = -(1)^3 + 6(1)^2 + C(1) + D \\]\n\\[ 10 = -1 + 6 + C + D \\]\n\\[ 10 = 5 + C + D \\]\n\\[ C + D = 5 \\quad \\text{--- (Equation 1)} \\]"
          },
          {
            "explanation": "Substitute the second point (-1, 2) to create Equation 2.",
            "workingOut": "We know the curve passes through \\( (-1, 2) \\). Substitute \\( x = -1, y = 2 \\):\n\\[ 2 = -(-1)^3 + 6(-1)^2 + C(-1) + D \\]\n\\[ 2 = -(-1) + 6(1) - C + D \\]\n\\[ 2 = 1 + 6 - C + D \\]\n\\[ 2 = 7 - C + D \\]\n\\[ -C + D = -5 \\quad \\text{--- (Equation 2)} \\]"
          },
          {
            "explanation": "Solve the simultaneous equations for C and D.",
            "workingOut": "We have a system of linear equations:\n1) \\( C + D = 5 \\)\n2) \\( -C + D = -5 \\)\n\nAdd Equation 1 and Equation 2 together:\n\\[ (C + D) + (-C + D) = 5 + (-5) \\]\n\\[ 2D = 0 \\implies D = 0 \\]\n\nSubstitute \\( D = 0 \\) back into Equation 1:\n\\[ C + 0 = 5 \\implies C = 5 \\]"
          },
          {
            "explanation": "State the final curve equation.",
            "workingOut": "Substitute \\( C = 5 \\) and \\( D = 0 \\) back into the general equation:\n\\[ y = -x^3 + 6x^2 + 5x + 0 \\]\n\\[ y = -x^3 + 6x^2 + 5x \\]"
          }
        ],
        "options": [
          {
            "text": "\\( y = -x^3 + 6x^2 + 5x \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y = -x^3 + 6x^2 + 5x + 1 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y = x^3 - 6x^2 + 5x \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y = -x^3 + 12x^2 + 5x \\)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "a": 0
      }
    ]
  },
  {
    "id": "y12a-3h-q18",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "Consider the derivative \\( f'(x) = -\\frac{4}{x^2} \\). We know that a continuous curve passing through \\( A(2, 3) \\) has equation \\( y = \\frac{4}{x} + 1 \\). This is not strictly true, because the asymptote at \\( x = 0 \\) allows the two branches of the curve to move independently so that each branch has its own arbitrary constant. Complete parts a), b), and c).",
    "t": "Primitive functions",
    "solutionSteps": [],
    "subQuestions": [
      {
        "id": "y12a-3h-q18a",
        "type": "multiple_choice",
        "question": "a) Find \\( g'(x) \\) for the piecewise-defined function \\( g(x) = \\begin{cases} \\frac{4}{x} + 1, & \\text{for } x > 0 \\\\ \\frac{4}{x} + 5, & \\text{for } x < 0 \\end{cases} \\).",
        "solutionSteps": [
          {
            "explanation": "Differentiate the first branch (x > 0).",
            "workingOut": "For \\( x > 0 \\), the function is \\( g(x) = 4x^{-1} + 1 \\). Using the power rule:\n\\[ g'(x) = -4x^{-2} + 0 = -\\frac{4}{x^2} \\]"
          },
          {
            "explanation": "Differentiate the second branch (x < 0).",
            "workingOut": "For \\( x < 0 \\), the function is \\( g(x) = 4x^{-1} + 5 \\). Using the power rule:\n\\[ g'(x) = -4x^{-2} + 0 = -\\frac{4}{x^2} \\]"
          },
          {
            "explanation": "Combine the results.",
            "workingOut": "Since both branches have the exact same derivative, we can combine them and write:\n\\[ g'(x) = -\\frac{4}{x^2} \\quad \\text{for all } x \\neq 0 \\]"
          }
        ],
        "options": [
          {
            "text": "\\( g'(x) = -\\frac{4}{x^2} \\text{ for all } x \\neq 0 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( g'(x) = \\frac{4}{x^2} \\text{ for all } x \\neq 0 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( g'(x) = -\\frac{4}{x^2} \\text{ for } x > 0, \\text{ and } g'(x) = -\\frac{4}{x^2} + 4 \\text{ for } x < 0 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( g'(x) = -\\frac{4}{x^2} + 1 \\text{ for all } x \\neq 0 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "a": 0
      },
      {
        "id": "y12a-3h-q18b",
        "type": "multiple_choice",
        "question": "b) Which of the following points does the graph of \\( g(x) \\) pass through?",
        "solutionSteps": [
          {
            "explanation": "Check the given points against the piecewise function conditions.",
            "workingOut": "The function \\( g(x) \\) uses different formulas depending on whether the x-coordinate is positive or negative."
          },
          {
            "explanation": "Evaluate point A(2, 3).",
            "workingOut": "For \\( x = 2 \\), since \\( 2 > 0 \\), we must use the top branch \\( g(x) = \\frac{4}{x} + 1 \\).\n\\[ g(2) = \\frac{4}{2} + 1 \\]\n\\[ g(2) = 2 + 1 = 3 \\]\nThis matches the y-coordinate of \\( A(2, 3) \\), so the graph correctly passes through this point."
          }
        ],
        "options": [
          {
            "text": "\\( A(2, 3) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( B(2, 5) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( C(-2, 1) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( D(4, 3) \\)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "a": 0
      },
      {
        "id": "y12a-3h-q18c",
        "type": "multiple_choice",
        "question": "c) Find the piecewise-defined equation of the function \\( h(x) \\) with the same derivative \\( h'(x) = -\\frac{4}{x^2} \\) passing through the points \\( A(1, 6) \\) and \\( B(-2, 1) \\).",
        "solutionSteps": [
          {
            "explanation": "Set up the general piecewise function for h(x).",
            "workingOut": "Since the derivative is \\( h'(x) = -\\frac{4}{x^2} \\) for all \\( x \\neq 0 \\), we integrate it to find the general branches. Because of the asymptote at \\( x=0 \\), each branch gets its own independent constant:\n\\[ h(x) = \\begin{cases} \\frac{4}{x} + C_1, & \\text{for } x > 0 \\\\ \\frac{4}{x} + C_2, & \\text{for } x < 0 \\end{cases} \\]"
          },
          {
            "explanation": "Solve for C1 using point A(1, 6).",
            "workingOut": "Point A has \\( x = 1 \\). Since \\( 1 > 0 \\), we must use the top branch and substitute \\( (1, 6) \\):\n\\[ 6 = \\frac{4}{1} + C_1 \\]\n\\[ 6 = 4 + C_1 \\]\n\\[ C_1 = 2 \\]"
          },
          {
            "explanation": "Solve for C2 using point B(-2, 1).",
            "workingOut": "Point B has \\( x = -2 \\). Since \\( -2 < 0 \\), we must use the bottom branch and substitute \\( (-2, 1) \\):\n\\[ 1 = \\frac{4}{-2} + C_2 \\]\n\\[ 1 = -2 + C_2 \\]\n\\[ C_2 = 3 \\]"
          },
          {
            "explanation": "State the final piecewise function.",
            "workingOut": "Substitute the constants back into the original branches to get the final answer:\n\\[ h(x) = \\begin{cases} \\frac{4}{x} + 2, & \\text{for } x > 0 \\\\ \\frac{4}{x} + 3, & \\text{for } x < 0 \\end{cases} \\]",
            "graphData": {
              "jsxGraph": {
                "width": 350,
                "height": 250,
                "boundingbox": [
                  -5,
                  10,
                  5,
                  -6
                ],
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.8,0], [4.8,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,9.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){return 4/x + 2;}, 0.1, 5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('functiongraph', [function(x){return 4/x + 3;}, -5, -0.1], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [1, 6], {name: 'A(1,6)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [-2, 1], {name: 'B(-2,1)', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, -15]}});\nboard.unsuspendUpdate();"
              }
            }
          }
        ],
        "options": [
          {
            "text": "\\( h(x) = \\begin{cases} \\frac{4}{x} + 2, & \\text{for } x > 0 \\\\ \\frac{4}{x} + 3, & \\text{for } x < 0 \\end{cases} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( h(x) = \\begin{cases} \\frac{4}{x} + 3, & \\text{for } x > 0 \\\\ \\frac{4}{x} + 2, & \\text{for } x < 0 \\end{cases} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( h(x) = \\frac{4}{x} + 2 \\text{ for all } x \\neq 0 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( h(x) = \\begin{cases} -\\frac{4}{x} + 10, & \\text{for } x > 0 \\\\ -\\frac{4}{x} - 1, & \\text{for } x < 0 \\end{cases} \\)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "a": 0
      }
    ]
  }
];
