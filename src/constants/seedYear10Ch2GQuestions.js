export const Y10_CH2G_QUESTIONS = [
  {
    "id": "y10-2g-q1a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Show that \\((\\sqrt{a} + \\sqrt{b})^2 = a + b + 2\\sqrt{ab}\\) for positive real numbers \\(a\\) and \\(b\\). Provide all algebraic expansion steps.",
    "a": "Proof: (\\sqrt{a} + \\sqrt{b})^2 = (\\sqrt{a})^2 + 2\\sqrt{a}\\sqrt{b} + (\\sqrt{b})^2 = a + b + 2\\sqrt{ab}",
    "solution": "Expand the squared binomial using the identity \\((x + y)^2 = x^2 + 2xy + y^2\\):\n\\((\\sqrt{a} + \\sqrt{b})^2 = (\\sqrt{a})^2 + 2(\\sqrt{a})(\\sqrt{b}) + (\\sqrt{b})^2\\).\nSince \\(a, b > 0\\), \\((\\sqrt{a})^2 = a\\) and \\((\\sqrt{b})^2 = b\\).\nCombining the product of surds gives \\(2\\sqrt{a}\\sqrt{b} = 2\\sqrt{ab}\\).\nTherefore, \\((\\sqrt{a} + \\sqrt{b})^2 = a + b + 2\\sqrt{ab}\\).",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square expansion identity \\((u + v)^2 = u^2 + 2uv + v^2\\) to the left-hand side.",
        "workingOut": "\\((\\sqrt{a} + \\sqrt{b})^2 = (\\sqrt{a})^2 + 2\\sqrt{a}\\sqrt{b} + (\\sqrt{b})^2\\)"
      },
      {
        "explanation": "Simplify the squared terms since \\(a\\) and \\(b\\) are positive real numbers.",
        "workingOut": "\\((\\sqrt{a})^2 = a \\quad \\text{and} \\quad (\\sqrt{b})^2 = b\\)"
      },
      {
        "explanation": "Combine the middle terms using the product rule of surds \\(\\sqrt{a}\\sqrt{b} = \\sqrt{ab}\\).",
        "workingOut": "\\(= a + b + 2\\sqrt{ab}\\)"
      }
    ],
    "t": "Challenge exercise"
  },
  {
    "id": "y10-2g-q1bi",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Use the result of the previous question to find the exact value of \\(\\sqrt{14 + 2\\sqrt{33}}\\).",
    "a": "\\sqrt{11}+\\sqrt{3}",
    "solutionSteps": [
      {
        "explanation": "Compare \\(\\sqrt{14 + 2\\sqrt{33}}\\) with \\(\\sqrt{a + b + 2\\sqrt{ab}}\\). We need to find two numbers \\(a\\) and \\(b\\) such that \\(a + b = 14\\) and \\(ab = 33\\).",
        "workingOut": "a + b = 14 \\quad \\text{and} \\quad ab = 33"
      },
      {
        "explanation": "Solve for \\(a\\) and \\(b\\). The factors of 33 that add up to 14 are 11 and 3.",
        "workingOut": "a = 11, \\; b = 3"
      },
      {
        "explanation": "Substitute these values into the expression to rewrite the term under the outer square root as a perfect square.",
        "workingOut": "14 + 2\\sqrt{33} = 11 + 3 + 2\\sqrt{11 \\times 3} = (\\sqrt{11} + \\sqrt{3})^2"
      },
      {
        "explanation": "Take the square root to find the simplified exact value.",
        "workingOut": "\\(\\sqrt{(\\sqrt{11} + \\sqrt{3})^2} = \\sqrt{11} + \\sqrt{3}\\)"
      }
    ],
    "t": "Challenge exercise"
  },
  {
    "id": "y10-2g-q1bii",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Use the result of the previous question to find the exact value of \\(\\sqrt{14 - 2\\sqrt{33}}\\).",
    "a": "\\sqrt{11}-\\sqrt{3}",
    "solutionSteps": [
      {
        "explanation": "Identify two positive numbers \\(a\\) and \\(b\\) where \\(a > b\\) such that \\(a + b = 14\\) and \\(ab = 33\\).",
        "workingOut": "a + b = 14 \\quad \\text{and} \\quad ab = 33"
      },
      {
        "explanation": "The values are 11 and 3.",
        "workingOut": "a = 11, \\; b = 3"
      },
      {
        "explanation": "Express the expression under the square root as a perfect square of a difference.",
        "workingOut": "14 - 2\\sqrt{33} = (\\sqrt{11} - \\sqrt{3})^2"
      },
      {
        "explanation": "Take the square root, ensuring the positive root since \\(\\sqrt{11} > \\sqrt{3}\\).",
        "workingOut": "\\(\\sqrt{(\\sqrt{11} - \\sqrt{3})^2} = \\sqrt{11} - \\sqrt{3}\\)"
      }
    ],
    "t": "Challenge exercise"
  },
  {
    "id": "y10-2g-q1biii",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the exact value of \\(\\sqrt{12 + 2\\sqrt{35}}\\).",
    "a": "\\sqrt{7}+\\sqrt{5}",
    "solutionSteps": [
      {
        "explanation": "Identify two positive numbers \\(a\\) and \\(b\\) such that \\(a + b = 12\\) and \\(ab = 35\\).",
        "workingOut": "a + b = 12 \\quad \\text{and} \\quad ab = 35"
      },
      {
        "explanation": "The numbers are 7 and 5.",
        "workingOut": "a = 7, \\; b = 5"
      },
      {
        "explanation": "Write the term under the square root as a perfect square.",
        "workingOut": "12 + 2\\sqrt{35} = (\\sqrt{7} + \\sqrt{5})^2"
      },
      {
        "explanation": "Take the square root to get the final simplified exact expression.",
        "workingOut": "\\(\\sqrt{(\\sqrt{7} + \\sqrt{5})^2} = \\sqrt{7} + \\sqrt{5}\\)"
      }
    ],
    "t": "Challenge exercise"
  },
  {
    "id": "y10-2g-q2a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Simplify: \\((\\sqrt{x+y} + x)(\\sqrt{x+y} - x)\\).",
    "a": "x+y-x^2",
    "solutionSteps": [
      {
        "explanation": "Recognise the expression as a difference of two squares of the form \\((u + v)(u - v) = u^2 - v^2\\).",
        "workingOut": "(\\sqrt{x+y} + x)(\\sqrt{x+y} - x) = (\\sqrt{x+y})^2 - x^2"
      },
      {
        "explanation": "Simplify the square of \\(\\sqrt{x+y}\\).",
        "workingOut": "(\\sqrt{x+y})^2 = x + y"
      },
      {
        "explanation": "Substitute back to get the final simplified expression.",
        "workingOut": "= x + y - x^2"
      }
    ],
    "t": "Challenge exercise"
  },
  {
    "id": "y10-2g-q2b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Simplify: \\((3\\sqrt{1+y^2} + 2)(3\\sqrt{1+y^2} - 2)\\).",
    "a": "5+9y^2",
    "solutionSteps": [
      {
        "explanation": "Apply the difference of two squares identity \\((u + v)(u - v) = u^2 - v^2\\).",
        "workingOut": "(3\\sqrt{1+y^2})^2 - 2^2"
      },
      {
        "explanation": "Evaluate the square of the first term: \\((3\\sqrt{1+y^2})^2 = 3^2 \\times (\\sqrt{1+y^2})^2 = 9(1 + y^2)\\).",
        "workingOut": "9(1 + y^2) - 4"
      },
      {
        "explanation": "Expand the parenthesis and group constants.",
        "workingOut": "= 9 + 9y^2 - 4 = 5 + 9y^2"
      }
    ],
    "t": "Challenge exercise"
  },
  {
    "id": "y10-2g-q2c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Simplify: \\((\\sqrt{2+a} + \\sqrt{2-a})(\\sqrt{2+a} - \\sqrt{2-a})\\).",
    "a": "2a",
    "solutionSteps": [
      {
        "explanation": "Apply the difference of two squares identity \\((u + v)(u - v) = u^2 - v^2\\).",
        "workingOut": "(\\sqrt{2+a})^2 - (\\sqrt{2-a})^2"
      },
      {
        "explanation": "Remove the square roots since the terms are squared.",
        "workingOut": "= (2 + a) - (2 - a)"
      },
      {
        "explanation": "Expand the negative sign and simplify.",
        "workingOut": "= 2 + a - 2 + a = 2a"
      }
    ],
    "t": "Challenge exercise"
  },
  {
    "id": "y10-2g-q2d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Simplify: \\(\\frac{x - y}{\\sqrt{x} - \\sqrt{y}}\\).",
    "a": "\\sqrt{x}+\\sqrt{y}",
    "solutionSteps": [
      {
        "explanation": "Express the numerator \\(x - y\\) as a difference of squares: \\((\\sqrt{x})^2 - (\\sqrt{y})^2\\).",
        "workingOut": "x - y = (\\sqrt{x} - \\sqrt{y})(\\sqrt{x} + \\sqrt{y})"
      },
      {
        "explanation": "Substitute this factored form into the fraction.",
        "workingOut": "\\frac{(\\sqrt{x} - \\sqrt{y})(\\sqrt{x} + \\sqrt{y})}{\\sqrt{x} - \\sqrt{y}}"
      },
      {
        "explanation": "Cancel the common factor \\(\\sqrt{x} - \\sqrt{y}\\) from numerator and denominator.",
        "workingOut": "= \\sqrt{x} + \\sqrt{y}"
      }
    ],
    "t": "Challenge exercise"
  },
  {
    "id": "y10-2g-q2e",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Simplify: \\((\\sqrt{x+y} + \\sqrt{x-y})^2\\).",
    "a": "2x+2\\sqrt{x^2-y^2}",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square expansion identity \\((u + v)^2 = u^2 + 2uv + v^2\\).",
        "workingOut": "(\\sqrt{x+y})^2 + 2\\sqrt{x+y}\\sqrt{x-y} + (\\sqrt{x-y})^2"
      },
      {
        "explanation": "Simplify the squared terms.",
        "workingOut": "= (x + y) + 2\\sqrt{(x+y)(x-y)} + (x - y)"
      },
      {
        "explanation": "Combine the outer algebraic terms and multiply inside the surd.",
        "workingOut": "= 2x + 2\\sqrt{x^2 - y^2}"
      }
    ],
    "t": "Challenge exercise"
  },
  {
    "id": "y10-2g-q3a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve the equation for \\(x\\): \\(6x - 5\\sqrt{x} = 6\\).",
    "a": "9/4",
    "solutionSteps": [
      {
        "explanation": "Introduce a substitution to simplify the equation. Let \\(u = \\sqrt{x}\\), where \\(u \\ge 0\\). Consequently, \\(x = u^2\\).",
        "workingOut": "6u^2 - 5u - 6 = 0"
      },
      {
        "explanation": "Factor the quadratic equation.",
        "workingOut": "(2u - 3)(3u + 2) = 0"
      },
      {
        "explanation": "Find the roots. Since \\(u \\ge 0\\), we discard the negative root.",
        "workingOut": "2u - 3 = 0 \\implies u = \\frac{3}{2} \\quad \\text{or} \\quad 3u + 2 = 0 \\implies u = -\\frac{2}{3} \\; \\text{(discard)}"
      },
      {
        "explanation": "Convert back to \\(x\\) by squaring \\(u\\).",
        "workingOut": "x = u^2 = \\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}"
      }
    ],
    "t": "Challenge exercise"
  },
  {
    "id": "y10-2g-q3b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve the equation for \\(x\\): \\(\\sqrt{x} - \\sqrt{x - 7} = 1\\).",
    "a": "16",
    "solutionSteps": [
      {
        "explanation": "Isolate one of the square roots by moving the other to the right-hand side.",
        "workingOut": "\\sqrt{x} - 1 = \\sqrt{x - 7}"
      },
      {
        "explanation": "Square both sides of the equation to eliminate the root on the right side.",
        "workingOut": "(\\sqrt{x} - 1)^2 = x - 7"
      },
      {
        "explanation": "Expand the left-hand side.",
        "workingOut": "x - 2\\sqrt{x} + 1 = x - 7"
      },
      {
        "explanation": "Subtract \\(x\\) from both sides and isolate the remaining square root.",
        "workingOut": "-2\\sqrt{x} = -8 \\implies \\sqrt{x} = 4"
      },
      {
        "explanation": "Square both sides to find \\(x\\). Verify that it is valid in the original equation.",
        "workingOut": "x = 16"
      }
    ],
    "t": "Challenge exercise"
  },
  {
    "id": "y10-2g-q3c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve the equation for \\(x\\): \\(\\sqrt{6x - 2} - \\sqrt{3x} = \\sqrt{19 - 6x}\\).",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "Square both sides of the equation to start clearing the square roots.",
        "workingOut": "(\\sqrt{6x - 2} - \\sqrt{3x})^2 = 19 - 6x"
      },
      {
        "explanation": "Expand the left side of the equation.",
        "workingOut": "(6x - 2) - 2\\sqrt{3x(6x - 2)} + 3x = 19 - 6x"
      },
      {
        "explanation": "Group terms and isolate the square root on one side.",
        "workingOut": "9x - 2 - 2\\sqrt{18x^2 - 6x} = 19 - 6x \\implies 15x - 21 = 2\\sqrt{18x^2 - 6x}"
      },
      {
        "explanation": "Square both sides again.",
        "workingOut": "(15x - 21)^2 = 4(18x^2 - 6x)"
      },
      {
        "explanation": "Expand both sides and move all terms to one side.",
        "workingOut": "225x^2 - 630x + 441 = 72x^2 - 24x \\implies 153x^2 - 606x + 441 = 0"
      },
      {
        "explanation": "Divide the equation by 3 and factor to find the solutions.",
        "workingOut": "51x^2 - 202x + 147 = 0 \\implies (x - 3)(51x - 49) = 0"
      },
      {
        "explanation": "Verify the roots in the original equation. Only \\(x = 3\\) satisfies the original constraints.",
        "workingOut": "x = 3"
      }
    ],
    "t": "Challenge exercise"
  },
  {
    "id": "y10-2g-q3d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve the equation: \\(3\\sqrt{x} - \\sqrt{9x - 17} = 1\\).",
    "a": "9",
    "solutionSteps": [
      {
        "explanation": "Rearrange the terms to isolate one square root.",
        "workingOut": "3\\sqrt{x} - 1 = \\sqrt{9x - 17}"
      },
      {
        "explanation": "Square both sides.",
        "workingOut": "(3\\sqrt{x} - 1)^2 = 9x - 17"
      },
      {
        "explanation": "Expand the square.",
        "workingOut": "9x - 6\\sqrt{x} + 1 = 9x - 17"
      },
      {
        "explanation": "Subtract \\(9x\\) from both sides and isolate the square root.",
        "workingOut": "-6\\sqrt{x} = -18 \\implies \\sqrt{x} = 3"
      },
      {
        "explanation": "Square both sides to find \\(x\\).",
        "workingOut": "x = 9"
      }
    ],
    "t": "Challenge exercise"
  },
  {
    "id": "y10-2g-q3e",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve the equation for \\(x\\): \\(\\frac{4\\sqrt{x} - 5}{2\\sqrt{x}} = \\frac{2\\sqrt{x} + 3}{\\sqrt{x} + 4}\\).",
    "a": "16",
    "solutionSteps": [
      {
        "explanation": "Cross-multiply the denominators.",
        "workingOut": "(4\\sqrt{x} - 5)(\\sqrt{x} + 4) = 2\\sqrt{x}(2\\sqrt{x} + 3)"
      },
      {
        "explanation": "Expand both sides.",
        "workingOut": "4x + 11\\sqrt{x} - 20 = 4x + 6\\sqrt{x}"
      },
      {
        "explanation": "Subtract \\(4x\\) from both sides and isolate the \\(\\sqrt{x}\\) terms.",
        "workingOut": "5\\sqrt{x} = 20 \\implies \\sqrt{x} = 4"
      },
      {
        "explanation": "Square both sides to find the final value of \\(x\\).",
        "workingOut": "x = 16"
      }
    ],
    "t": "Challenge exercise"
  },
  {
    "id": "y10-2g-q3f",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve the equation for \\(x\\): \\(\\sqrt{16 + 3x} - \\sqrt{3x} = \\frac{10}{\\sqrt{16 + 3x}}\\).",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "Multiply the entire equation by \\(\\sqrt{16 + 3x}\\) to eliminate the fraction.",
        "workingOut": "(\\sqrt{16 + 3x})(\\sqrt{16 + 3x} - \\sqrt{3x}) = 10"
      },
      {
        "explanation": "Distribute the term.",
        "workingOut": "(16 + 3x) - \\sqrt{3x(16 + 3x)} = 10"
      },
      {
        "explanation": "Isolate the remaining square root.",
        "workingOut": "3x + 6 = \\sqrt{3x(16 + 3x)}"
      },
      {
        "explanation": "Square both sides of the equation.",
        "workingOut": "(3x + 6)^2 = 3x(16 + 3x)"
      },
      {
        "explanation": "Expand both sides.",
        "workingOut": "9x^2 + 36x + 36 = 48x + 9x^2"
      },
      {
        "explanation": "Subtract \\(9x^2\\) from both sides and solve for \\(x\\).",
        "workingOut": "36x + 36 = 48x \\implies 12x = 36 \\implies x = 3"
      }
    ],
    "t": "Challenge exercise"
  },
  {
    "id": "y10-2g-q4",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Expand and simplify: \\(\\left(\\sqrt{a} - 2 + \\frac{1}{\\sqrt{a}}\\right)^2\\).",
    "a": "a-4\\sqrt{a}+6-4/\\sqrt{a}+1/a",
    "solutionSteps": [
      {
        "explanation": "Let \\(u = \\sqrt{a} + \\frac{1}{\\sqrt{a}}\\). Then rewrite the expression as \\((u - 2)^2\\) and expand.",
        "workingOut": "(u - 2)^2 = u^2 - 4u + 4"
      },
      {
        "explanation": "Substitute back \\(u = \\sqrt{a} + \\frac{1}{\\sqrt{a}}\\). First, find \\(u^2\\).",
        "workingOut": "u^2 = \\left(\\sqrt{a} + \\frac{1}{\\sqrt{a}}\\right)^2 = a + 2 + \\frac{1}{a}"
      },
      {
        "explanation": "Now expand \\(-4u\\).",
        "workingOut": "-4u = -4\\left(\\sqrt{a} + \\frac{1}{\\sqrt{a}}\\right) = -4\\sqrt{a} - \\frac{4}{\\sqrt{a}}"
      },
      {
        "explanation": "Combine all parts together: \\(u^2 - 4u + 4\\).",
        "workingOut": "\\left(a + 2 + \\frac{1}{a}\\right) + \\left(-4\\sqrt{a} - \\frac{4}{\\sqrt{a}}\\right) + 4"
      },
      {
        "explanation": "Group terms by decreasing order of powers.",
        "workingOut": "= a - 4\\sqrt{a} + 6 - \\frac{4}{\\sqrt{a}} + \\frac{1}{a}"
      }
    ],
    "t": "Challenge exercise"
  },
  {
    "id": "y10-2g-q5",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Express \\(\\frac{1}{\\sqrt[3]{6}}\\) with a rational denominator.",
    "a": "\\frac{\\sqrt[3]{36}}{6}",
    "solutionSteps": [
      {
        "explanation": "To rationalise the denominator of a cube root, multiply numerator and denominator by \\(\\sqrt[3]{6^2}\\).",
        "workingOut": "\\frac{1 \\times \\sqrt[3]{6^2}}{\\sqrt[3]{6} \\times \\sqrt[3]{6^2}}"
      },
      {
        "explanation": "Simplify the denominator: \\(\\sqrt[3]{6} \\times \\sqrt[3]{6^2} = \\sqrt[3]{6^3} = 6\\).",
        "workingOut": "\\frac{\\sqrt[3]{36}}{6}"
      }
    ],
    "t": "Challenge exercise"
  },
  {
    "id": "y10-2g-q6",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Express \\(\\frac{1}{1 + \\sqrt{2} + \\sqrt{3} + \\sqrt{6}}\\) with a rational denominator.",
    "a": "\\frac{\\sqrt{6}-\\sqrt{2}-\\sqrt{3}+1}{2}",
    "solutionSteps": [
      {
        "explanation": "Factorise the denominator by grouping terms.",
        "workingOut": "1 + \\sqrt{2} + \\sqrt{3} + \\sqrt{6} = (1 + \\sqrt{2}) + \\sqrt{3}(1 + \\sqrt{2}) = (1 + \\sqrt{2})(1 + \\sqrt{3})"
      },
      {
        "explanation": "Rewrite the fraction and rationalise the two factors individually.",
        "workingOut": "\\frac{1}{(1 + \\sqrt{2})(1 + \\sqrt{3})} = \\frac{\\sqrt{2} - 1}{2 - 1} \\times \\frac{\\sqrt{3} - 1}{3 - 1}"
      },
      {
        "explanation": "Multiply the numerators and denominators.",
        "workingOut": "= \\frac{(\\sqrt{2} - 1)(\\sqrt{3} - 1)}{1 \\times 2}"
      },
      {
        "explanation": "Expand the numerator.",
        "workingOut": "= \\frac{\\sqrt{6} - sqrt{2} - \\sqrt{3} + 1}{2}"
      }
    ],
    "t": "Challenge exercise"
  },
  {
    "id": "y10-2g-q7",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Express \\(\\frac{1}{\\sqrt{3} + \\sqrt{5} + \\sqrt{8}}\\) with a rational denominator.",
    "a": "\\frac{3\\sqrt{5}+5\\sqrt{3}-2\\sqrt{30}}{30}",
    "solutionSteps": [
      {
        "explanation": "Group the first two terms in the denominator: \\((\\sqrt{3} + \\sqrt{5}) + 2\\sqrt{2}\\). Multiply the numerator and denominator by the conjugate.",
        "workingOut": "\\frac{(\\sqrt{3} + \\sqrt{5}) - 2\\sqrt{2}}{((\\sqrt{3} + \\sqrt{5}) + 2\\sqrt{2})((\\sqrt{3} + \\sqrt{5}) - 2\\sqrt{2})}"
      },
      {
        "explanation": "Expand the denominator using the difference of squares.",
        "workingOut": "= \\frac{\\sqrt{3} + \\sqrt{5} - 2\\sqrt{2}}{(\\sqrt{3} + \\sqrt{5})^2 - 8} = \\frac{\\sqrt{3} + \\sqrt{5} - 2\\sqrt{2}}{(3 + 2\\sqrt{15} + 5) - 8}"
      },
      {
        "explanation": "Simplify the denominator.",
        "workingOut": "= \\frac{\\sqrt{3} + \\sqrt{5} - 2\\sqrt{2}}{2\\sqrt{15}}"
      },
      {
        "explanation": "Multiply numerator and denominator by \\(\\sqrt{15}\\) to rationalise.",
        "workingOut": "= \\frac{\\sqrt{15}(\\sqrt{3} + \\sqrt{5} - 2\\sqrt{2})}{30}"
      },
      {
        "explanation": "Distribute the term in the numerator.",
        "workingOut": "= \\frac{3\\sqrt{5} + 5\\sqrt{3} - 2\\sqrt{30}}{30}"
      }
    ],
    "t": "Challenge exercise"
  },
  {
    "id": "y10-2g-q8",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Simplify: \\(\\frac{x^2 + xy + y^2}{x + \\sqrt{xy} + y}\\).",
    "a": "x-\\sqrt{xy}+y",
    "solutionSteps": [
      {
        "explanation": "Rewrite the terms to identify factors. Let \\(a = \\sqrt{x}\\) and \\(b = \\sqrt{y}\\). The expression becomes \\(\\frac{a^4 + a^2 b^2 + b^4}{a^2 + ab + b^2}\\).",
        "workingOut": "\\frac{a^4 + a^2 b^2 + b^4}{a^2 + ab + b^2}"
      },
      {
        "explanation": "Factor the quartic expression in the numerator: \\(a^4 + a^2 b^2 + b^4 = (a^2 + ab + b^2)(a^2 - ab + b^2)\\).",
        "workingOut": "\\frac{(a^2 + ab + b^2)(a^2 - ab + b^2)}{a^2 + ab + b^2}"
      },
      {
        "explanation": "Cancel the common factor from numerator and denominator.",
        "workingOut": "= a^2 - ab + b^2"
      },
      {
        "explanation": "Substitute back \\(a = \\sqrt{x}\\) and \\(b = \\sqrt{y}\\).",
        "workingOut": "= x - \\sqrt{xy} + y"
      }
    ],
    "t": "Challenge exercise"
  },
  {
    "id": "y10-2g-q9a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Show that \\(\\sqrt{5\\frac{5}{24}} = 5\\sqrt{\\frac{5}{24}}\\) and \\(\\sqrt{6\\frac{6}{35}} = 6\\sqrt{\\frac{6}{35}}\\). Provide all steps of algebraic verification.",
    "a": "Proof: Show that LHS = RHS for both values by converting mixed fractions to improper fractions.",
    "solution": "1. For \\(\\sqrt{5\\frac{5}{24}}\\):\nImproper fraction conversion: \\(5\\frac{5}{24} = \\frac{5 \\times 24 + 5}{24} = \\frac{125}{24}\\).\nEvaluate LHS: \\(\\sqrt{\\frac{125}{24}} = \\sqrt{\\frac{25 \\times 5}{24}} = 5\\sqrt{\\frac{5}{24}}\\). This matches RHS.\n\n2. For \\(\\sqrt{6\\frac{6}{35}}\\):\nImproper fraction conversion: \\(6\\frac{6}{35} = \\frac{6 \\times 35 + 6}{35} = \\frac{216}{35}\\).\nEvaluate LHS: \\(\\sqrt{\\frac{216}{35}} = \\sqrt{\\frac{36 \\times 6}{35}} = 6\\sqrt{\\frac{6}{35}}\\). This matches RHS.",
    "solutionSteps": [
      {
        "explanation": "For the first equation, convert the mixed number inside the square root to an improper fraction.",
        "workingOut": "5\\frac{5}{24} = \\frac{5 \\times 24 + 5}{24} = \\frac{125}{24}"
      },
      {
        "explanation": "Simplify the root of the numerator using its square factor 25.",
        "workingOut": "\\sqrt{\\frac{125}{24}} = \\sqrt{\\frac{25 \\times 5}{24}} = 5\\sqrt{\\frac{5}{24}}"
      },
      {
        "explanation": "For the second equation, convert the mixed fraction to an improper fraction.",
        "workingOut": "6\\frac{6}{35} = \\frac{6 \\times 35 + 6}{35} = \\frac{216}{35}"
      },
      {
        "explanation": "Factor out 36 from the numerator under the square root.",
        "workingOut": "\\sqrt{\\frac{216}{35}} = \\sqrt{\\frac{36 \\times 6}{35}} = 6\\sqrt{\\frac{6}{35}}"
      }
    ],
    "t": "Challenge exercise"
  },
  {
    "id": "y10-2g-q9b",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Describe all mixed numbers \\(n\\frac{a}{b}\\) that satisfy the property \\(\\sqrt{n\\frac{a}{b}} = n\\sqrt{\\frac{a}{b}}\\). Provide an algebraic proof.",
    "a": "Proof: Mixed numbers must be of the form n(n/(n^2 - 1)) where n > 1.",
    "solution": "Let the mixed number be represented as \\(n + \\frac{a}{b}\\). We require:\n\\(\\sqrt{n + \\frac{a}{b}} = n\\sqrt{\\frac{a}{b}}\\).\nSquaring both sides:\n\\(n + \\frac{a}{b} = n^2 \\frac{a}{b}\\).\nRearrange to solve for \\(\\frac{a}{b}\\):\n\\(n = n^2 \\frac{a}{b} - \\frac{a}{b}\\)\n\\(n = (n^2 - 1) \\frac{a}{b}\\)\n\\(\\frac{a}{b} = \\frac{n}{n^2 - 1}\\).\nTherefore, all such mixed numbers must be of the form \\(n\\frac{n}{n^2 - 1}\\) for integers \\(n > 1\\).",
    "solutionSteps": [
      {
        "explanation": "Write the mixed fraction as \\(n + \\frac{a}{b}\\) and set up the equation.",
        "workingOut": "\\sqrt{n + \\frac{a}{b}} = n\\sqrt{\\frac{a}{b}}"
      },
      {
        "explanation": "Square both sides of the equation to clear the outer roots.",
        "workingOut": "n + \\frac{a}{b} = n^2 \\frac{a}{b}"
      },
      {
        "explanation": "Isolate the fraction term \\(\\frac{a}{b}\\).",
        "workingOut": "n = \\left(n^2 - 1\\right) \\frac{a}{b} \\implies \\frac{a}{b} = \\frac{n}{n^2 - 1}"
      },
      {
        "explanation": "Conclude the general algebraic form of all mixed numbers possessing this property.",
        "workingOut": "\\text{Mixed number} = n\\frac{n}{n^2 - 1} \\quad (n > 1)"
      }
    ],
    "t": "Challenge exercise"
  },
  {
    "id": "y10-2g-q10",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A square box of side 9 cm is leaning against a vertical wall, as shown below. Find the height of point C above the floor in exact form.",
    "a": "4\\sqrt{2}+7",
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -2,
          16,
          16,
          -2
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "elements": [
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "color": "slate",
            "label": {
              "offset": [
                -10,
                -10
              ]
            }
          },
          {
            "type": "point",
            "id": "A",
            "coords": [
              7,
              0
            ],
            "name": "A",
            "color": "blue",
            "label": {
              "offset": [
                10,
                -10
              ]
            }
          },
          {
            "type": "point",
            "id": "D",
            "coords": [
              0,
              5.66
            ],
            "name": "D",
            "color": "blue",
            "label": {
              "offset": [
                -15,
                10
              ]
            }
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              5.66,
              12.66
            ],
            "name": "C",
            "color": "blue",
            "label": {
              "offset": [
                10,
                10
              ]
            }
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              12.66,
              7
            ],
            "name": "B",
            "color": "blue",
            "label": {
              "offset": [
                10,
                10
              ]
            }
          },
          {
            "type": "segment",
            "from": "O",
            "to": "A",
            "color": "slate",
            "strokeWidth": 2
          },
          {
            "type": "segment",
            "from": "O",
            "to": "D",
            "color": "slate",
            "strokeWidth": 2
          },
          {
            "type": "segment",
            "from": "A",
            "to": "B",
            "color": "blue",
            "strokeWidth": 2
          },
          {
            "type": "segment",
            "from": "B",
            "to": "C",
            "color": "blue",
            "strokeWidth": 2
          },
          {
            "type": "segment",
            "from": "C",
            "to": "D",
            "color": "blue",
            "strokeWidth": 2
          },
          {
            "type": "segment",
            "from": "D",
            "to": "A",
            "color": "blue",
            "strokeWidth": 2
          },
          {
            "type": "rightangle",
            "points": [
              "A",
              "B",
              "C"
            ],
            "size": 0.4
          },
          {
            "type": "text",
            "coords": [
              3.5,
              -0.6
            ],
            "content": "7 cm"
          },
          {
            "type": "text",
            "coords": [
              9.8,
              3.5
            ],
            "content": "9 cm"
          }
        ]
      }
    },
    "solutionSteps": [
      {
        "explanation": "Identify the right-angled triangle \\(ODA\\) formed by the wall, floor, and square box side \\(AD = 9\\text{ cm}\\). Let \\(O\\) be the corner of the wall. Using Pythagoras' theorem on \\(\\triangle ODA\\):",
        "workingOut": "OD^2 + OA^2 = AD^2 \\implies OD^2 + 7^2 = 9^2"
      },
      {
        "explanation": "Calculate the height of \\(D\\) above the floor, \\(OD\\).",
        "workingOut": "OD^2 = 81 - 49 = 32 \\implies OD = \\sqrt{32} = 4\\sqrt{2}\\text{ cm}"
      },
      {
        "explanation": "Observe the congruent right triangles: \\(\\triangle ODA\\) is congruent to the right triangle formed by dropping a perpendicular from \\(C\\) to the line of the wall (or using vector components). The height increase from \\(D\\) to \\(C\\) is equal to the horizontal base length \\(OA = 7\\text{ cm}\\).",
        "workingOut": "\\text{Vertical height of } C = OD + OA"
      },
      {
        "explanation": "Add the vertical components to find the height of \\(C\\).",
        "workingOut": "= 4\\sqrt{2} + 7\\text{ cm}"
      }
    ],
    "t": "Challenge exercise"
  },
  {
    "id": "y10-2g-q11",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Simplify: \\(\\frac{1}{\\sqrt{3} + \\sqrt{5}} + \\frac{1}{\\sqrt{5} + \\sqrt{7}} + \\frac{1}{\\sqrt{7} + \\sqrt{9}} + \\frac{1}{\\sqrt{9} + \\sqrt{11}}\\).",
    "a": "\\frac{\\sqrt{11}-\\sqrt{3}}{2}",
    "solutionSteps": [
      {
        "explanation": "Rationalise each term individually by multiplying by the conjugate.",
        "workingOut": "\\frac{1}{\\sqrt{k} + \\sqrt{k+2}} = \\frac{\\sqrt{k+2} - \\sqrt{k}}{2}"
      },
      {
        "explanation": "Apply this simplification to each fraction in the sum.",
        "workingOut": "= \\frac{\\sqrt{5} - \\sqrt{3}}{2} + \\frac{\\sqrt{7} - \\sqrt{5}}{2} + \\frac{3 - \\sqrt{7}}{2} + \\frac{\\sqrt{11} - 3}{2}"
      },
      {
        "explanation": "Sum the fractions together. Notice that intermediate terms cancel out (telescope).",
        "workingOut": "= \\frac{(\\sqrt{5} - \\sqrt{3}) + (\\sqrt{7} - \\sqrt{5}) + (3 - \\sqrt{7}) + (\\sqrt{11} - 3)}{2}"
      },
      {
        "explanation": "State the final simplified exact expression.",
        "workingOut": "= \\frac{\\sqrt{11} - \\sqrt{3}}{2}"
      }
    ],
    "t": "Challenge exercise"
  },
  {
    "id": "y10-2g-q12",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Simplify: \\(\\frac{\\sqrt{2} + 1}{2 + \\sqrt{6 + 4\\sqrt{2}}} - \\frac{\\sqrt{2} - 1}{2 + \\sqrt{6 - 4\\sqrt{2}}}\\).",
    "a": "2/7",
    "solutionSteps": [
      {
        "explanation": "Simplify the nested radical under the square roots first. Note that \\(6 \\pm 4\\sqrt{2} = 6 \\pm 2\\sqrt{8} = (2 \\pm \\sqrt{2})^2\\).",
        "workingOut": "\\sqrt{6 \\pm 4\\sqrt{2}} = 2 \\pm \\sqrt{2}"
      },
      {
        "explanation": "Substitute these back into the denominators of the fractions.",
        "workingOut": "\\frac{\\sqrt{2} + 1}{2 + (2 + \\sqrt{2})} - \\frac{\\sqrt{2} - 1}{2 + (2 - \\sqrt{2})}"
      },
      {
        "explanation": "Simplify the denominators.",
        "workingOut": "= \\frac{\\sqrt{2} + 1}{4 + \\sqrt{2}} - \\frac{\\sqrt{2} - 1}{4 - \\sqrt{2}}"
      },
      {
        "explanation": "Combine the fractions over a common denominator: \\((4 + \\sqrt{2})(4 - \\sqrt{2}) = 16 - 2 = 14\\).",
        "workingOut": "\\frac{(\\sqrt{2} + 1)(4 - \\sqrt{2}) - (\\sqrt{2} - 1)(4 + \\sqrt{2})}{14}"
      },
      {
        "explanation": "Expand the numerator expressions.",
        "workingOut": "\\text{Numerator} = (3\\sqrt{2} + 2) - (3\\sqrt{2} - 2) = 4"
      },
      {
        "explanation": "Calculate the final simplified fraction.",
        "workingOut": "= \\frac{4}{14} = \\frac{2}{7}"
      }
    ],
    "t": "Challenge exercise"
  },
  {
    "id": "y10-2g-q13a",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Calculate the value of the series: \\(1 + [\\sqrt{2}] + [\\sqrt{3}] + 2 + ... + [\\sqrt{80}] + 9\\), where \\([x]\\) is defined as the largest integer \\(n\\) such that \\(n \\le x\\).",
    "a": "453",
    "solutionSteps": [
      {
        "explanation": "Group the terms of the series by their integer value. The value \\([\\sqrt{x}] = k\\) occurs when \\(k^2 \\le x < (k+1)^2\\). The number of such integers \\(x\\) is \\(2k + 1\\).",
        "workingOut": "\\text{Sum} = \\sum_{k=1}^{8} k(2k + 1) + 9"
      },
      {
        "explanation": "Calculate the count and sum for each group of terms:",
        "workingOut": "\\begin{aligned} k=1: &\\quad 3 \\times 1 = 3 \\\\ k=2: &\\quad 5 \\times 2 = 10 \\\\ k=3: &\\quad 7 \\times 3 = 21 \\\\ k=4: &\\quad 9 \\times 4 = 36 \\\\ k=5: &\\quad 11 \\times 5 = 55 \\\\ k=6: &\\quad 13 \\times 6 = 78 \\\\ k=7: &\\quad 15 \\times 7 = 105 \\\\ k=8: &\\quad 17 \\times 8 = 136 \\end{aligned}"
      },
      {
        "explanation": "Add the sums of each group, and include the final term of the series, which is 9.",
        "workingOut": "= 3 + 10 + 21 + 36 + 55 + 78 + 105 + 136 + 9"
      },
      {
        "explanation": "Calculate the total sum.",
        "workingOut": "= 453"
      }
    ],
    "t": "Challenge exercise"
  },
  {
    "id": "y10-2g-q13b",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Calculate: \\(1 + [\\sqrt{2}] + [\\sqrt{3}] + 2 + ... + [\\sqrt{150}]\\), where \\([x]\\) is defined as the largest integer \\(n\\) such that \\(n \\le x\\).",
    "a": "1162",
    "solutionSteps": [
      {
        "explanation": "Find the count of terms for each integer value \\(k\\) from 1 to 12. For \\(k\\) from 1 to 11, the number of terms is \\(2k + 1\\). For \\(k = 12\\), the terms go from \\(x = 144\\) to \\(150\\), which consists of 7 terms.",
        "workingOut": "\\text{Sum} = \\sum_{k=1}^{11} k(2k + 1) + 12 \\times 7"
      },
      {
        "explanation": "Evaluate the sums of the complete groups up to \\(k = 11\\).",
        "workingOut": "\\begin{aligned} \\sum_{k=1}^{8} k(2k + 1) &= 444 \\\\ k=9: &\\quad 19 \\times 9 = 171 \\\\ k=10: &\\quad 21 \\times 10 = 210 \\\\ k=11: &\\quad 23 \\times 11 = 253 \\end{aligned}"
      },
      {
        "explanation": "Add the sum of the last partial group: \\(7 \\times 12 = 84\\).",
        "workingOut": "\\text{Total} = 444 + 171 + 210 + 253 + 84"
      },
      {
        "explanation": "Evaluate the final sum.",
        "workingOut": "= 1162"
      }
    ],
    "t": "Challenge exercise"
  },
  {
    "id": "y10-2g-q14ai",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "In the diagram below, squares AHFD and HBCF are drawn with common side FH of length 3. Diagonal AC is drawn and E is a point on AC such that AE = 3. G is a point on AC so that FG is parallel to DE. Find the exact length of AC.",
    "a": "3\\sqrt{5}",
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          4,
          7,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              0
            ],
            "name": "A",
            "color": "black",
            "label": {
              "offset": [
                -10,
                -10
              ]
            }
          },
          {
            "type": "point",
            "id": "H",
            "coords": [
              3,
              0
            ],
            "name": "H",
            "color": "black",
            "label": {
              "offset": [
                0,
                -15
              ]
            }
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              6,
              0
            ],
            "name": "B",
            "color": "black",
            "label": {
              "offset": [
                10,
                -10
              ]
            }
          },
          {
            "type": "point",
            "id": "D",
            "coords": [
              0,
              3
            ],
            "name": "D",
            "color": "black",
            "label": {
              "offset": [
                -10,
                10
              ]
            }
          },
          {
            "type": "point",
            "id": "F",
            "coords": [
              3,
              3
            ],
            "name": "F",
            "color": "black",
            "label": {
              "offset": [
                0,
                15
              ]
            }
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              6,
              3
            ],
            "name": "C",
            "color": "black",
            "label": {
              "offset": [
                10,
                10
              ]
            }
          },
          {
            "type": "point",
            "id": "E",
            "coords": [
              2.68,
              1.34
            ],
            "name": "E",
            "color": "blue",
            "label": {
              "offset": [
                10,
                -10
              ]
            }
          },
          {
            "type": "point",
            "id": "G",
            "coords": [
              4.34,
              2.17
            ],
            "name": "G",
            "color": "blue",
            "label": {
              "offset": [
                -10,
                10
              ]
            }
          },
          {
            "type": "segment",
            "from": "A",
            "to": "B",
            "color": "black"
          },
          {
            "type": "segment",
            "from": "D",
            "to": "C",
            "color": "black"
          },
          {
            "type": "segment",
            "from": "A",
            "to": "D",
            "color": "black"
          },
          {
            "type": "segment",
            "from": "H",
            "to": "F",
            "color": "black"
          },
          {
            "type": "segment",
            "from": "B",
            "to": "C",
            "color": "black"
          },
          {
            "type": "segment",
            "from": "A",
            "to": "C",
            "color": "blue"
          },
          {
            "type": "segment",
            "from": "D",
            "to": "E",
            "color": "orange"
          },
          {
            "type": "segment",
            "from": "F",
            "to": "G",
            "color": "orange"
          },
          {
            "type": "text",
            "coords": [
              1.5,
              -0.3
            ],
            "content": "3"
          },
          {
            "type": "text",
            "coords": [
              4.5,
              -0.3
            ],
            "content": "3"
          },
          {
            "type": "text",
            "coords": [
              -0.3,
              1.5
            ],
            "content": "3"
          },
          {
            "type": "text",
            "coords": [
              6.3,
              1.5
            ],
            "content": "3"
          },
          {
            "type": "text",
            "coords": [
              1.5,
              3.2
            ],
            "content": "3"
          },
          {
            "type": "text",
            "coords": [
              4.5,
              3.2
            ],
            "content": "3"
          },
          {
            "type": "text",
            "coords": [
              1.2,
              0.8
            ],
            "content": "3"
          }
        ]
      }
    },
    "solutionSteps": [
      {
        "explanation": "Consider right-angled triangle \\(\\triangle ABC\\). The base \\(AB = AH + HB = 3 + 3 = 6\\) and height \\(BC = 3\\). Use Pythagoras' theorem to calculate the diagonal \\(AC\\).",
        "workingOut": "AC^2 = AB^2 + BC^2 = 6^2 + 3^2"
      },
      {
        "explanation": "Calculate the sum of squares.",
        "workingOut": "AC^2 = 36 + 9 = 45"
      },
      {
        "explanation": "Take the square root to find \\(AC\\) in simplest surd form.",
        "workingOut": "AC = \\sqrt{45} = 3\\sqrt{5}"
      }
    ],
    "t": "Challenge exercise"
  },
  {
    "id": "y10-2g-q14aii",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Refer to the same diagram. Find the exact length of EC.",
    "a": "3\\sqrt{5}-3",
    "solutionSteps": [
      {
        "explanation": "Since E lies on the line segment \\(AC\\), the length of \\(EC\\) is the total length \\(AC\\) minus the length \\(AE\\).",
        "workingOut": "EC = AC - AE"
      },
      {
        "explanation": "Substitute the values \\(AC = 3\\sqrt{5}\\) and the given length \\(AE = 3\\).",
        "workingOut": "EC = 3\\sqrt{5} - 3"
      }
    ],
    "t": "Challenge exercise"
  },
  {
    "id": "y10-2g-q14aiii",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Refer to the same diagram. Find the exact length of EG.",
    "a": "\\frac{3\\sqrt{5}-3}{2}",
    "solutionSteps": [
      {
        "explanation": "Let us set up coordinates with A as the origin \\((0,0)\\). D is at \\((0,3)\\), F is at \\((3,3)\\), C is at \\((6,3)\\). Line AC is given by \\(y = \\frac{1}{2}x\\). Since \\(AE = 3\\), point E lies on AC and is at \\(\\left(\\frac{6}{\\sqrt{5}}, frac{3}{\\sqrt{5}}\\right)\\). The vector \\(DE = \\left(\\frac{6}{\\sqrt{5}}, frac{3}{\\sqrt{5}} - 3\\right)\\).",
        "workingOut": ""
      },
      {
        "explanation": "Since \\(FG\\) is parallel to \\(DE\\), they have the same slope. The slope of \\(DE\\) is \\(m = \\frac{\\frac{3}{\\sqrt{5}} - 3}{\\frac{6}{\\sqrt{5}}} = \\frac{1 - \\sqrt{5}}{2}\\). The line \\(FG\\) passes through \\((3,3)\\) with slope \\(m\\), so its equation is \\(y - 3 = \\frac{1 - \\sqrt{5}}{2}(x - 3)\\).",
        "workingOut": ""
      },
      {
        "explanation": "Solve the intersection of \\(FG\\) and line AC (\\(x = 2y\\)) to find G. This gives the coordinates of G as \\(\\left(\\frac{\\sqrt{5}+5}{5} \\times 3, frac{\\sqrt{5}+5}{10} \\times 3\\right)\\).",
        "workingOut": ""
      },
      {
        "explanation": "Compute the distance \\(AG = \\sqrt{x_G^2 + y_G^2} = \\sqrt{5} y_G = \\frac{3(\\sqrt{5}+1)}{2}\\). Then \\(EG = AG - AE = \\frac{3(\\sqrt{5}+1)}{2} - 3 = \\frac{3(\\sqrt{5}-1)}{2}\\).",
        "workingOut": "EG = \\frac{3\\sqrt{5} - 3}{2}"
      }
    ],
    "t": "Challenge exercise"
  },
  {
    "id": "y10-2g-q14aiv",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Refer to the same diagram. Find the exact length of GC.",
    "a": "\\frac{3\\sqrt{5}-3}{2}",
    "solutionSteps": [
      {
        "explanation": "Calculate \\(GC\\) by subtracting the segment \\(AG\\) from the total diagonal length \\(AC\\).",
        "workingOut": "GC = AC - AG"
      },
      {
        "explanation": "Substitute the calculated values \\(AC = 3\\sqrt{5}\\) and \\(AG = \\frac{3(\\sqrt{5}+1)}{2}\\).",
        "workingOut": "GC = 3\\sqrt{5} - \\frac{3\\sqrt{5} + 3}{2}"
      },
      {
        "explanation": "Combine the terms over a common denominator.",
        "workingOut": "GC = \\frac{6\\sqrt{5} - 3\\sqrt{5} - 3}{2} = \\frac{3\\sqrt{5} - 3}{2}"
      }
    ],
    "t": "Challenge exercise"
  },
  {
    "id": "y10-2g-q14b",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Refer to the same diagram. Show that \\(EG^2 + 3EG = 9\\). Provide all algebraic proof steps.",
    "a": "Proof: Substitute EG = 3(sqrt(5)-1)/2 and evaluate EG^2 + 3EG.",
    "solution": "Substitute \\(EG = \\frac{3(\\sqrt{5}-1)}{2}\\) into \\(EG^2 + 3EG\\):\n\\(EG^2 = \\frac{9(6 - 2\\sqrt{5})}{4} = \\frac{9(3 - \\sqrt{5})}{2} = \\frac{27 - 9\\sqrt{5}}{2}\\).\n\\(3EG = 3 \\times \\frac{3\\sqrt{5}-3}{2} = \\frac{9\\sqrt{5}-9}{2}\\).\nNow add them together:\n\\(EG^2 + 3EG = \\frac{27 - 9\\sqrt{5}}{2} + \\frac{9\\sqrt{5}-9}{2} = \\frac{18}{2} = 9\\).\nThus, LHS = RHS, completing the proof.",
    "solutionSteps": [
      {
        "explanation": "Use the exact value \\(EG = \\frac{3\\sqrt{5}-3}{2}\\) and square it.",
        "workingOut": "EG^2 = \\left(\\frac{3\\sqrt{5}-3}{2}\\right)^2 = \\frac{45 - 18\\sqrt{5} + 9}{4} = \\frac{54 - 18\\sqrt{5}}{4} = \\frac{27 - 9\\sqrt{5}}{2}"
      },
      {
        "explanation": "Calculate the value of \\(3EG\\).",
        "workingOut": "3EG = 3 \\times \\frac{3\\sqrt{5}-3}{2} = \\frac{9\\sqrt{5}-9}{2}"
      },
      {
        "explanation": "Add \\(EG^2\\) and \\(3EG\\) together.",
        "workingOut": "EG^2 + 3EG = \\frac{27 - 9\\sqrt{5} + 9\\sqrt{5} - 9}{2}"
      },
      {
        "explanation": "Simplify the numerator to show that the result is 9.",
        "workingOut": "= \\frac{18}{2} = 9"
      }
    ],
    "t": "Challenge exercise"
  }
];
