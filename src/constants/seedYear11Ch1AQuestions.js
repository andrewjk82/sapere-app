export const Y11_CH1A_QUESTIONS = [
  {
    "id": "0020afdcda6504b35f3882205e8211b9",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand: \\((4y - 1)^3\\)",
    "options": [
      {
        "text": "\\(64y^3 - 96y^2 + 24y - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(64y^3 - 48y^2 - 12y - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(64y^3 - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(64y^3 - 48y^2 + 12y - 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    "solution": "\\((4y - 1)^3 = 64y^3 - 48y^2 + 12y - 1\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the first term A = \\(4y\\) and second term B = \\(1\\), then apply the cubic expansion formula.",
        "workingOut": "\\((4y - 1)^3 = (4y)^3 - 3(4y)^2(1) + 3(4y)(1)^2 - (1)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the squares and products inside each term.",
        "workingOut": "\\(= 64y^3 - 3(16y^2)(1) + 3(4y)(1) - 1\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the coefficients to state the final polynomial expression.",
        "workingOut": "\\(= 64y^3 - 48y^2 + 12y - 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "00b38d80a36d4d2299dcb396fbfbf031",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x^2 - \\frac{1}{x^2})^2\\)",
    "options": [
      {
        "text": "\\(x^4  + 2 + \\frac{1}{x^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 - 2 + \\frac{1}{x^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 - 2 + \\frac{1}{x^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4  + \\frac{1}{x^4}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    "solution": "\\((x^2 - \\frac{1}{x^2})^2 = x^4 - 2 + \\frac{1}{x^4}\\)",
    "solutionSteps": [
      {
        "explanation": "Identify A and B for expansion, then apply the formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\).",
        "workingOut": "\\(A = x^2, \\quad B = \\frac{1}{x^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the expansion expression.",
        "workingOut": "\\((x^2 - \\frac{1}{x^2})^2 = \\left(x^2\\right)^2 - 2\\left(x^2\\right)\\left(\\frac{1}{x^2}\\right) + \\left(\\frac{1}{x^2}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the squaring of the terms and simplify the middle multiplication product.",
        "workingOut": "\\(= x^4 - 2 + \\frac{1}{x^4}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "03832022b0a22f0e935270f33b507588",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand: \\((x - y + z)^2\\)",
    "options": [
      {
        "text": "\\(x^2 - y^2 + z^2 - 2xy + 2yz - 2zx\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + y^2 + z^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + y^2 + z^2 - 2xy - 2yz + 2zx\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + y^2 + z^2 - 2xy + 2yz + 2zx\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    "solution": "\\((x - y + z)^2 = x^2 + y^2 + z^2 - 2xy - 2yz + 2zx\\)",
    "solutionSteps": [
      {
        "explanation": "Group the trinomial and apply the algebraic identity for squaring a trinomial.",
        "workingOut": "\\((x - y + z)^2 = (x)^2 + (-y)^2 + (+z)^2 + 2(x)(-y) + 2(-y)(+z) + 2(+z)(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares of the individual terms (note that negative terms squared become positive).",
        "workingOut": "\\(= x^2 + y^2 + z^2 + 2(x)(-y) + 2(-y)(+z) + 2(+z)(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the remaining products, adjusting the signs appropriately to obtain the simplified expression.",
        "workingOut": "\\(= x^2 + y^2 + z^2 - 2xy - 2yz + 2zx\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "067b500417f518fb02defeaaa5287eab",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\(-4(y + 3)\\)",
    "options": [],
    "answer": "-4y-12",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(-4y - 12\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(-4 \\times (y) + -4 \\times (3)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(-4y-12\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "08854c29d728e6058361515d5a7565b3",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\((A + B)(A + B)\\)",
    "options": [
      {
        "text": "\\(2A + 2B\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(A^2 + 2AB + B^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(A^2 + AB + B^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(A^2 + B^2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(A^2 + 2AB + B^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the difference of squares identity: (A - B)(A + B) = A² - B².",
        "workingOut": "\\((A - B)(A + B) = (A)^2 - (B)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the squares.",
        "workingOut": "\\(A^2 + 2AB + B^2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "0a8034a4950b914844c8485647e52c8e",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((w^2 + 3w + 1)(w^2 - 3w + 1)\\)",
    "options": [
      {
        "text": "\\(w^4 - 7w^2 + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 - 7w^2 + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(w^4 + 7w^2 - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(w^4 - 7w^2 + 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    "solution": "\\((w^2 + 3w + 1)(w^2 - 3w + 1) = w^4 - 7w^2 + 1\\)",
    "solutionSteps": [
      {
        "explanation": "Regroup the trinomials to isolate a common part and a part with opposite signs.",
        "workingOut": "\\((w^2 + 3w + 1)(w^2 - 3w + 1) = [(w^2 + 1) + 3w][(w^2 + 1) - 3w]\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= (w^2 + 1)^2 - (3w)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the perfect square and simplify by combining like terms.",
        "workingOut": "\\(= w^4 - 7w^2 + 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "0a91d9414544bed305189fe3a96851f3",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x - y)(x^2 + xy + y^2)\\)",
    "options": [
      {
        "text": "\\(x^3 - 3x^2y + 3xy^2 - y^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x - y)^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + y^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - y^3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "",
    "solution": "This is the difference of cubes identity: \\(x^3 - y^3\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the brackets by multiplying each term of the first binomial by each term of the second.",
        "workingOut": "\\((x - y)(x^2 + xy + y^2) = x \\times x^2 + x \\times xy + y^2 - y \\times x^2 -+ y \\times xy + y^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the multiplication products and combine like terms.",
        "workingOut": "\\(This is the difference of cubes identity: x^3 - y^3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "0aec8aff2244829ef70fff1efccd1df6",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand: \\((y + 4)^3\\)",
    "options": [
      {
        "text": "\\(y^3 + 24y^2 + 96y + 64\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^3 + 12y^2 - 48y + 64\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^3 + 12y^2 + 48y + 64\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^3 + 64\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    "solution": "\\((y + 4)^3 = y^3 + 12y^2 + 48y + 64\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the first term A = \\(y\\) and second term B = \\(4\\), then apply the cubic expansion formula.",
        "workingOut": "\\((y + 4)^3 = (y)^3 + 3(y)^2(4) + 3(y)(4)^2 + (4)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the squares and products inside each term.",
        "workingOut": "\\(= y^3 + 3(y^2)(4) + 3(y)(16) + 64\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the coefficients to state the final polynomial expression.",
        "workingOut": "\\(= y^3 + 12y^2 + 48y + 64\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "0c350a9d804cdae50ff5e8c70c74d2dd",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\((5x - 2y)^2\\)",
    "options": [
      {
        "text": "\\(5x^2 - 20xy + 2y^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(25x^2 + 4y^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(25x^2 - 20xy + 4y^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(25x^2 - 10xy + 4y^2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(25x^2 - 20xy + 4y^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((5x - 2y)^2 = (5x)^2 - 2(5x)(2y) + (2y)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(25x^2 - 20xy + 4y^2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "0c98e3c3dc54f2b5d330c778de46ae5e",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\(-k(k^2 - 4)\\)",
    "options": [],
    "answer": "-k^3+4k",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(-k^3 + 4k\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(-k \\times (k^2) - -k \\times (4)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(-k^3+4k\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "11ae84244b8aa2a3e82b279a8906422f",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((2a + 3b)(4a^2 - 6ab + 3b^2)\\)",
    "options": [
      {
        "text": "\\(8a^3 - 3b^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2a^2 + 3b^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8a^3 + 32a3b + 3b^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8a^3 + 3b^3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    "solution": "\\((2a + 3b)(4a^2 - 6ab + 3b^2) = 8a^3 + 3b^3\\)",
    "solutionSteps": [
      {
        "explanation": "Identify that the expression is in the form \\((A \\pm B)(A^2 \\mp AB + B^2)\\) with A = \\(2a\\) and B = \\(3b\\).",
        "workingOut": "\\(A = 2a, \\quad B = 3b\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum/difference of cubes identity directly.",
        "workingOut": "\\((2a + 3b)((2a)^2 - (2a)(3b) + (3b)^2) = (2a)^3 + (3b)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers to find the final result.",
        "workingOut": "\\(= 8a^3 + 3b^3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "126e507491110e75870fd99e054fa1e9",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand: \\((x + 1)^3\\)",
    "options": [
      {
        "text": "\\(x^3 + 3x^2 + 3x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 6x^2 + 6x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 3x^2 - 3x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    "solution": "\\((x + 1)^3 = x^3 + 3x^2 + 3x + 1\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the first term A = \\(x\\) and second term B = \\(1\\), then apply the cubic expansion formula.",
        "workingOut": "\\((x + 1)^3 = (x)^3 + 3(x)^2(1) + 3(x)(1)^2 + (1)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the squares and products inside each term.",
        "workingOut": "\\(= x^3 + 3(x^2)(1) + 3(x)(1) + 1\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the coefficients to state the final polynomial expression.",
        "workingOut": "\\(= x^3 + 3x^2 + 3x + 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "13ae5c9d99e2677dd6f2ae1e85cef642",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x - 1)(x - 1)(x - 1)\\)",
    "options": [
      {
        "text": "\\(x^3 + 3x^2 - 3x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 - 3x^2 + 3x - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + -1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 3x^2 + 3x - 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    "solution": "\\((x - 1)(x - 1)(x - 1) = x^3 - 3x^2 + 3x - 1\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply the first two binomials first.",
        "workingOut": "\\((x - 1)(x - 1) = x^2 + (-1 + -1)x + (-1 \\times -1) = x^2 - 2x + 1\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the resulting quadratic expression by the third binomial.",
        "workingOut": "\\((x^2 - 2x + 1)(x - 1) = x(x^2 - 2x + 1) - 1(x^2 - 2x + 1)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the full distribution and combine like terms.",
        "workingOut": "\\(= x^3 - 3x^2 + 3x - 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "14dbd0fcdecc60271a7dfb1cf5a4d5d8",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\((x + 5)^2\\)",
    "options": [],
    "answer": "x^2+10x+25",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(x^2 + 10x + 25\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((x + 5)^2 = (x)^2 + 2(x)(5) + (5)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(x^2+10x+25\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "15413390b7e096180b1c55c6737db65a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify: \\(x(x + 2) - x(x - 3)\\)",
    "options": [
      {
        "text": "\\(-x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2x^2 + 5x\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(5x\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(x(x + 2) - x(x - 3)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(5x\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "173915e09f765549ebf4ac727e1c31a3",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((a^2 + \\frac{3}{a^2})^2\\)",
    "options": [
      {
        "text": "\\(a^4  + \\frac{9}{a^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^4 + 6 + \\frac{9}{a^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^4 + 6 + \\frac{9}{a^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^4  - 6 + \\frac{9}{a^4}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    "solution": "\\((a^2 + \\frac{3}{a^2})^2 = a^4 + 6 + \\frac{9}{a^4}\\)",
    "solutionSteps": [
      {
        "explanation": "Identify A and B for expansion, then apply the formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\).",
        "workingOut": "\\(A = a^2, \\quad B = \\frac{3}{a^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the expansion expression.",
        "workingOut": "\\((a^2 + \\frac{3}{a^2})^2 = \\left(a^2\\right)^2 + 2\\left(a^2\\right)\\left(\\frac{3}{a^2}\\right) + \\left(\\frac{3}{a^2}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the squaring of the terms and simplify the middle multiplication product.",
        "workingOut": "\\(= a^4 + 6 + \\frac{9}{a^4}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "17f36b17c641b8e11592e6ed4b476543",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((t + 4)^2\\)",
    "options": [
      {
        "text": "\\(t^2 + 8t + 16\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t^2 + 4t + 16\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t^2 + 8t + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t^2 + 16\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(t^2 + 8t + 16\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((t + 4)^2 = (t)^2 + 2(t)(4) + (4)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(t^2 + 8t + 16\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "18146ea0b4d35bd4dbbfeb5a8f30e599",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((2a - 1)(2a + 1)\\)",
    "options": [
      {
        "text": "\\(2a^2 - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4a^2 - 4a - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4a^2 - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4a^2 + 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(4a^2 - 1\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the difference of squares identity: (A - B)(A + B) = A² - B².",
        "workingOut": "\\((2a - 1)(2a + 1) = (2a)^2 - (1)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the squares.",
        "workingOut": "\\(4a^2 - 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "18b75eaedde35094e636779d537b59b4",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\((m + n)^2\\)",
    "options": [],
    "answer": "m^2+2mn+n^2",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(m^2 + 2mn + n^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((m + n)^2 = (m)^2 + 2(m)(n) + (n)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(m^2+2mn+n^2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "1a71d27d7687a5b2a936b7602307e2fc",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x - 1)(x - 2)(x - 3)\\)",
    "options": [
      {
        "text": "\\(x^3 + -6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 6x^2 + 11x - 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 6x^2 - 11x + 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 - 6x^2 + 11x - 6\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    "solution": "\\((x - 1)(x - 2)(x - 3) = x^3 - 6x^2 + 11x - 6\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply the first two binomials first.",
        "workingOut": "\\((x - 1)(x - 2) = x^2 + (-1 + -2)x + (-1 \\times -2) = x^2 - 3x + 2\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the resulting quadratic expression by the third binomial.",
        "workingOut": "\\((x^2 - 3x + 2)(x - 3) = x(x^2 - 3x + 2) - 3(x^2 - 3x + 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the full distribution and combine like terms.",
        "workingOut": "\\(= x^3 - 6x^2 + 11x - 6\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "1b5899a9c5cd56129ebf33fb25f07a88",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x + 3)^2 - (x + 2)^2\\)",
    "options": [],
    "answer": "2x+5",
    "blanks": [],
    "hint": "",
    "solution": "1. \\((x^2 + 6x + 9) - (x^2 + 4x + 4)\\)\n2. \\(x^2 + 6x + 9 - x^2 - 4x - 4 = 2x + 5\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\((x + 3)^2 - (x + 2)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(2x+5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "1b81dda55f85ab640214ef848ce88887",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((2k - 5)(4k^2 + 10k + 25)\\)",
    "options": [
      {
        "text": "\\(2k^2 - 25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8k^3 + 125\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8k^3 - 32k5 - 125\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8k^3 - 125\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    "solution": "\\((2k - 5)(4k^2 + 10k + 25) = 8k^3 - 125\\)",
    "solutionSteps": [
      {
        "explanation": "Identify that the expression is in the form \\((A \\pm B)(A^2 \\mp AB + B^2)\\) with A = \\(2k\\) and B = \\(5\\).",
        "workingOut": "\\(A = 2k, \\quad B = 5\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum/difference of cubes identity directly.",
        "workingOut": "\\((2k - 5)((2k)^2 + (2k)(5) + (5)^2) = (2k)^3 - (5)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers to find the final result.",
        "workingOut": "\\(= 8k^3 - 125\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "1d3dea947f7b4a31390d6260a27595ef",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the value of \\(302 \\times 298\\) using special expansions.",
    "options": [],
    "answer": "89996",
    "blanks": [],
    "hint": "",
    "solution": "1. \\((300 + 2)(300 - 2) = 300^2 - 2^2\\)\n2. \\(90000 - 4 = 89996\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Find the value of 302 \\times 298 using special expansions.\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(89996\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "1d878044fafb2233b9bf1871293f844a",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((3a + \\frac{1}{3a})^2\\)",
    "options": [
      {
        "text": "\\(9a^2  - 2 + \\frac{1}{9a^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9a^2 + 2 + \\frac{1}{9a^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9a^2 + 2 + \\frac{1}{9a^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9a^2  + \\frac{1}{9a^2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    "solution": "\\((3a + \\frac{1}{3a})^2 = 9a^2 + 2 + \\frac{1}{9a^2}\\)",
    "solutionSteps": [
      {
        "explanation": "Identify A and B for expansion, then apply the formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\).",
        "workingOut": "\\(A = 3a, \\quad B = \\frac{1}{3a}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the expansion expression.",
        "workingOut": "\\((3a + \\frac{1}{3a})^2 = \\left(3a\\right)^2 + 2\\left(3a\\right)\\left(\\frac{1}{3a}\\right) + \\left(\\frac{1}{3a}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the squaring of the terms and simplify the middle multiplication product.",
        "workingOut": "\\(= 9a^2 + 2 + \\frac{1}{9a^2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "1df31b465f9383be6d44abeb33bc6df9",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\((5a + 2b)^2\\)",
    "options": [
      {
        "text": "\\(10a^2 + 20ab + 4b^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(25a^2 + 10ab + 4b^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(25a^2 + 20ab + 4b^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(25a^2 + 4b^2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(25a^2 + 20ab + 4b^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((5a + 2b)^2 = (5a)^2 + 2(5a)(2b) + (2b)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(25a^2 + 20ab + 4b^2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "218f468e597a23ba218d1b965f78ac4a",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x + 2y)(x^2 - 2xy + 2y^2)\\)",
    "options": [
      {
        "text": "\\(x^3 + 2y^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 2y^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 2y^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 3x2y + 2y^3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    "solution": "\\((x + 2y)(x^2 - 2xy + 2y^2) = x^3 + 2y^3\\)",
    "solutionSteps": [
      {
        "explanation": "Identify that the expression is in the form \\((A \\pm B)(A^2 \\mp AB + B^2)\\) with A = \\(x\\) and B = \\(2y\\).",
        "workingOut": "\\(A = x, \\quad B = 2y\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum/difference of cubes identity directly.",
        "workingOut": "\\((x + 2y)((x)^2 - (x)(2y) + (2y)^2) = (x)^3 + (2y)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers to find the final result.",
        "workingOut": "\\(= x^3 + 2y^3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "22f6daad4970191f111500e1ec8ee683",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Simplify: \\((a + b + c)^2 - 2(ab + bc + ca)\\)",
    "options": [
      {
        "text": "\\(0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((a + b + c)^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^2 + b^2 + c^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^2 + b^2 + c^2 + 4(ab+bc+ca)\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "",
    "solution": "1. \\((a^2 + b^2 + c^2 + 2ab + 2bc + 2ca) - 2(ab + bc + ca) = a^2 + b^2 + c^2\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\((a + b + c)^2 - 2(ab + bc + ca)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\((a^2 + b^2 + c^2 + 2ab + 2bc + 2ca) - 2(ab + bc + ca) = a^2 + b^2 + c^2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "25292ed7b12208eefa2308b913b66284",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((p^2 + \\frac{4}{p^2})^2\\)",
    "options": [
      {
        "text": "\\(p^4 + 8 + \\frac{16}{p^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p^4  - 8 + \\frac{16}{p^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p^4 + 8 + \\frac{16}{p^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p^4  + \\frac{16}{p^4}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    "solution": "\\((p^2 + \\frac{4}{p^2})^2 = p^4 + 8 + \\frac{16}{p^4}\\)",
    "solutionSteps": [
      {
        "explanation": "Identify A and B for expansion, then apply the formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\).",
        "workingOut": "\\(A = p^2, \\quad B = \\frac{4}{p^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the expansion expression.",
        "workingOut": "\\((p^2 + \\frac{4}{p^2})^2 = \\left(p^2\\right)^2 + 2\\left(p^2\\right)\\left(\\frac{4}{p^2}\\right) + \\left(\\frac{4}{p^2}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the squaring of the terms and simplify the middle multiplication product.",
        "workingOut": "\\(= p^4 + 8 + \\frac{16}{p^4}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "2623d16268a367abc83eec2ce8e3a808",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((3t^2 - \\frac{1}{2t^2})^2\\)",
    "options": [
      {
        "text": "\\(9t^4 - 3 + \\frac{1}{4t^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9t^4  + \\frac{1}{4t^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9t^4  + 3 + \\frac{1}{4t^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9t^4 - 3 + \\frac{1}{4t^4}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    "solution": "\\((3t^2 - \\frac{1}{2t^2})^2 = 9t^4 - 3 + \\frac{1}{4t^4}\\)",
    "solutionSteps": [
      {
        "explanation": "Identify A and B for expansion, then apply the formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\).",
        "workingOut": "\\(A = 3t^2, \\quad B = \\frac{1}{2t^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the expansion expression.",
        "workingOut": "\\((3t^2 - \\frac{1}{2t^2})^2 = \\left(3t^2\\right)^2 - 2\\left(3t^2\\right)\\left(\\frac{1}{2t^2}\\right) + \\left(\\frac{1}{2t^2}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the squaring of the terms and simplify the middle multiplication product.",
        "workingOut": "\\(= 9t^4 - 3 + \\frac{1}{4t^4}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "262ba50f8f1cb57e89a629605edcb118",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "\\((3t - 4)^2\\)",
    "options": [
      "\\(9t^2 - 24t + 16\\)",
      "\\(9t^2 + 16\\)",
      "\\(9t^2 - 12t + 16\\)",
      "\\(9t^2 - 24t - 16\\)"
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Use $(a-b)^2 = a^2 - 2ab + b^2$.",
    "solution": "\\((3t)^2 - 2(3t)(4) + 4^2 = 9t^2 - 24t + 16\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((3t - 4)^2 = (3t)^2 - 2(3t)(4) + (4)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\((3t)^2 - 2(3t)(4) + 4^2 = 9t^2 - 24t + 16\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "26c6195673df71f4f88bfc471128d0d0",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand: \\((2x - y)^3\\)",
    "options": [
      {
        "text": "\\(8x^3 - y^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8x^3 - 24x^2y + 12xy^2 - y^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8x^3 - 12x^2y - 6xy^2 - y^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8x^3 - 12x^2y + 6xy^2 - y^3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    "solution": "\\((2x - y)^3 = 8x^3 - 12x^2y + 6xy^2 - y^3\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the first term A = \\(2x\\) and second term B = \\(y\\), then apply the cubic expansion formula.",
        "workingOut": "\\((2x - y)^3 = (2x)^3 - 3(2x)^2(y) + 3(2x)(y)^2 - (y)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the squares and products inside each term.",
        "workingOut": "\\(= 8x^3 - 3(4x^2)(y) + 3(2x)(y^2) - y^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the coefficients to state the final polynomial expression.",
        "workingOut": "\\(= 8x^3 - 12x^2y + 6xy^2 - y^3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "27217c58e85d0d37e446547862fd1977",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\(3(a + 4)\\)",
    "options": [],
    "answer": "3a+12",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(3a + 12\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(3 \\times (a) + 3 \\times (4)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(3a+12\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "2782ed52b40362bf547a2785b68edc10",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\((k + 8)^2\\)",
    "options": [],
    "answer": "k^2+16k+64",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(k^2 + 16k + 64\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((k + 8)^2 = (k)^2 + 2(k)(8) + (8)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(k^2+16k+64\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "285ac4c17dab3b4b06a2cf2561ffe8bc",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((a^2 + b)(a^4 - ba^2 + b^2)\\)",
    "options": [
      {
        "text": "\\(a^6 - b^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^6 + 3a^2b + b^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^2^2 + b^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^6 + b^3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    "solution": "\\((a^2 + b)(a^4 - ba^2 + b^2) = a^6 + b^3\\)",
    "solutionSteps": [
      {
        "explanation": "Identify that the expression is in the form \\((A \\pm B)(A^2 \\mp AB + B^2)\\) with A = \\(a^2\\) and B = \\(b\\).",
        "workingOut": "\\(A = a^2, \\quad B = b\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum/difference of cubes identity directly.",
        "workingOut": "\\((a^2 + b)((a^2)^2 - (a^2)(b) + (b)^2) = (a^2)^3 + (b)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers to find the final result.",
        "workingOut": "\\(= a^6 + b^3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "28b668b8ea9d68284275dfb9c0cd899e",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((m^2 + \\frac{2}{m^2})^2\\)",
    "options": [
      {
        "text": "\\(m^4  - 4 + \\frac{4}{m^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m^4 + 4 + \\frac{4}{m^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m^4  + \\frac{4}{m^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m^4 + 4 + \\frac{4}{m^4}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    "solution": "\\((m^2 + \\frac{2}{m^2})^2 = m^4 + 4 + \\frac{4}{m^4}\\)",
    "solutionSteps": [
      {
        "explanation": "Identify A and B for expansion, then apply the formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\).",
        "workingOut": "\\(A = m^2, \\quad B = \\frac{2}{m^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the expansion expression.",
        "workingOut": "\\((m^2 + \\frac{2}{m^2})^2 = \\left(m^2\\right)^2 + 2\\left(m^2\\right)\\left(\\frac{2}{m^2}\\right) + \\left(\\frac{2}{m^2}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the squaring of the terms and simplify the middle multiplication product.",
        "workingOut": "\\(= m^4 + 4 + \\frac{4}{m^4}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "2ac0dfdc6d8b10406eea1731129dc170",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand: \\((x^2 - x + 1)^2\\)",
    "options": [
      {
        "text": "\\(x^4 - 2x^3 + 3x^2 + 2x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 - 2x^3 - x^2 - 2x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 + x^2 + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 - 2x^3 + 3x^2 - 2x + 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    "solution": "\\((x^2 - x + 1)^2 = x^4 - 2x^3 + 3x^2 - 2x + 1\\)",
    "solutionSteps": [
      {
        "explanation": "Group the trinomial and apply the algebraic identity for squaring a trinomial.",
        "workingOut": "\\((x^2 - x + 1)^2 = (x^2)^2 + (-x)^2 + (+1)^2 + 2(x^2)(-x) + 2(-x)(+1) + 2(+1)(x^2)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares of the individual terms (note that negative terms squared become positive).",
        "workingOut": "\\(= x^4 + x^2 + 1 + 2(x^2)(-x) + 2(-x)(+1) + 2(+1)(x^2)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the remaining products, adjusting the signs appropriately to obtain the simplified expression.",
        "workingOut": "\\(= x^4 - 2x^3 + 3x^2 - 2x + 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "2d8924be0f47a2677c07d81d1d397e61",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify: \\(5(x + 1) - 3x\\)",
    "options": [
      {
        "text": "\\(2x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2x - 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2x + 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8x + 5\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(2x + 5\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(5(x + 1) - 3x\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(2x + 5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "2d9e85410314eea49c006c5d1de13c97",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\((a - 7)(a + 7)\\)",
    "options": [],
    "answer": "a^2-49",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(a^2 - 49\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the difference of squares identity: (A - B)(A + B) = A² - B².",
        "workingOut": "\\((a - 7)(a + 7) = (a)^2 - (7)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the squares.",
        "workingOut": "\\(a^2-49\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "2de4a42f81a78f7a5fa195c8e7decf7c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify: \\(2(x - 3) - 3(x - 1)\\)",
    "options": [
      {
        "text": "\\(-x - 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-x - 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-x + 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x - 3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(-x - 3\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(2(x - 3) - 3(x - 1)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(-x - 3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "2e0c51d23979d58e0086d2a5bfbe13a0",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((m^2 + 3m + 9)(m^2 - 3m + 9)\\)",
    "options": [
      {
        "text": "\\(m^4 - 9m^2 - 81\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m^4 + 9m^2 + 81\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 9m^2 + 81\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m^4 + 9m^2 + 81\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    "solution": "\\((m^2 + 3m + 9)(m^2 - 3m + 9) = m^4 + 9m^2 + 81\\)",
    "solutionSteps": [
      {
        "explanation": "Regroup the trinomials to isolate a common part and a part with opposite signs.",
        "workingOut": "\\((m^2 + 3m + 9)(m^2 - 3m + 9) = [(m^2 + 9) + 3m][(m^2 + 9) - 3m]\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= (m^2 + 9)^2 - (3m)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the perfect square and simplify by combining like terms.",
        "workingOut": "\\(= m^4 + 9m^2 + 81\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "2f025b72944f9b300e7ec0cb70ff86e4",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\((9 - 2m)^2\\)",
    "options": [
      {
        "text": "\\(81 - 18m + 4m^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(81 - 36m + 4m^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(18 - 36m + 4m^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(81 + 4m^2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(81 - 36m + 4m^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((9 - 2m)^2 = (9)^2 - 2(9)(2m) + (2m)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(81 - 36m + 4m^2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "2f6f780cdaff54742f802391871d7f27",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((t + 5)(t^2 - 5t + 25)\\)",
    "options": [
      {
        "text": "\\(t^2 + 25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t^3 + 125\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t^3 + 3t5 + 125\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t^3 - 125\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    "solution": "\\((t + 5)(t^2 - 5t + 25) = t^3 + 125\\)",
    "solutionSteps": [
      {
        "explanation": "Identify that the expression is in the form \\((A \\pm B)(A^2 \\mp AB + B^2)\\) with A = \\(t\\) and B = \\(5\\).",
        "workingOut": "\\(A = t, \\quad B = 5\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum/difference of cubes identity directly.",
        "workingOut": "\\((t + 5)((t)^2 - (t)(5) + (5)^2) = (t)^3 + (5)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers to find the final result.",
        "workingOut": "\\(= t^3 + 125\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "3236461fe0cf2defdedf099ebb39d9e3",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x + 1)(x - 1)(x + 5)\\)",
    "options": [
      {
        "text": "\\(x^3 + -5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 5x^2 + x + 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 5x^2 - x - 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 5x^2 - x - 5\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    "solution": "\\((x + 1)(x - 1)(x + 5) = x^3 + 5x^2 - x - 5\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply the first two binomials first.",
        "workingOut": "\\((x + 1)(x - 1) = x^2 + (1 + -1)x + (1 \\times -1) = x^2  1\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the resulting quadratic expression by the third binomial.",
        "workingOut": "\\((x^2  1)(x + 5) = x(x^2  1) + 5(x^2  1)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the full distribution and combine like terms.",
        "workingOut": "\\(= x^3 + 5x^2 - x - 5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "326967100407fd68a210906e4974b111",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "3(x + 5) + 4(3x - 2)",
    "options": [
      "\\(15x + 23\\)",
      "\\(7x + 7\\)",
      "\\(15x + 7\\)",
      "\\(15x - 7\\)"
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Distribute the 3 and 4 across the brackets.",
    "solution": "\\(3x + 15 + 12x - 8 = 15x + 7\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(3(x + 5) + 4(3x - 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(3x + 15 + 12x - 8 = 15x + 7\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "32920bf54887429d7349a118ec17bbe2",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((4m - \\frac{1}{4m})^2\\)",
    "options": [
      {
        "text": "\\(16m^2  + \\frac{1}{16m^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(16m^2 - 2 + \\frac{1}{16m^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(16m^2 - 2 + \\frac{1}{16m^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(16m^2  + 2 + \\frac{1}{16m^2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    "solution": "\\((4m - \\frac{1}{4m})^2 = 16m^2 - 2 + \\frac{1}{16m^2}\\)",
    "solutionSteps": [
      {
        "explanation": "Identify A and B for expansion, then apply the formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\).",
        "workingOut": "\\(A = 4m, \\quad B = \\frac{1}{4m}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the expansion expression.",
        "workingOut": "\\((4m - \\frac{1}{4m})^2 = \\left(4m\\right)^2 - 2\\left(4m\\right)\\left(\\frac{1}{4m}\\right) + \\left(\\frac{1}{4m}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the squaring of the terms and simplify the middle multiplication product.",
        "workingOut": "\\(= 16m^2 - 2 + \\frac{1}{16m^2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "32b85d39dbdeb8aa35548f870098684f",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((t + \\frac{1}{t})^2\\)",
    "options": [
      {
        "text": "\\(t^2 + \\frac{2}{t} + \\frac{1}{t^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t^2 + 2 + \\frac{1}{t^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2t + \\frac{2}{t}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t^2 + \\frac{1}{t^2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "",
    "solution": "1. \\((t)^2 + 2(t)(\\frac{1}{t}) + (\\frac{1}{t})^2\\)\n2. \\(t^2 + 2 + \\frac{1}{t^2}\\)\n\nResult: **\\(t^2 + 2 + \\frac{1}{t^2}\\)**",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\(\\left(t + \\frac\\{1\\}\\{t\\}\\right)^2 = (t)^2 + 2\\left(t\\right)\\left(\\frac\\{1\\}\\{t\\}\\right) + \\left(\\frac\\{1\\}\\{t\\}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(= t^2 + 2 + \\frac\\{1\\}\\{t\\}\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified expression.",
        "workingOut": "\\((t)^2 + 2(t)(\\frac\\{1\\}\\{t\\}) + (\\frac\\{1\\}\\{t\\})^2\n2. t^2 + 2 + \\frac\\{1\\}\\{t^2\\}\n\nResult: **t^2 + 2 + \\frac\\{1\\}\\{t^2\\}**\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "33e8e3887bc40446da6bc748d4eb48bc",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x^2 - 1)(x^4 + 1x^2 + 1)\\)",
    "options": [
      {
        "text": "\\(x^4 - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^6 + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^6 - 3x^21 - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^6 - 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    "solution": "\\((x^2 - 1)(x^4 + 1x^2 + 1) = x^6 - 1\\)",
    "solutionSteps": [
      {
        "explanation": "Identify that the expression is in the form \\((A \\pm B)(A^2 \\mp AB + B^2)\\) with A = \\(x^2\\) and B = \\(1\\).",
        "workingOut": "\\(A = x^2, \\quad B = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum/difference of cubes identity directly.",
        "workingOut": "\\((x^2 - 1)((x^2)^2 + (x^2)(1) + (1)^2) = (x^2)^3 - (1)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers to find the final result.",
        "workingOut": "\\(= x^6 - 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "33f3d8efa1fe5aa97c00690e4244c8db",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\((4y - 5)^2\\)",
    "options": [
      {
        "text": "\\(8y^2 - 40y + 25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(16y^2 - 20y + 25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(16y^2 - 40y + 25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(16y^2 - 25\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(16y^2 - 40y + 25\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((4y - 5)^2 = (4y)^2 - 2(4y)(5) + (5)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(16y^2 - 40y + 25\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "34f94d0b177c324ceea9e6ac5b541dad",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand: \\((a - 2b - c)^2\\)",
    "options": [
      {
        "text": "\\(a^2 + 4b^2 + c^2 - 4ab + 4bc - 2ca\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^2 - 4b^2 + c^2 - 4ab + 4bc - 2ca\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^2 + 4b^2 + c^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^2 + 4b^2 + c^2 - 4ab - 4bc + 2ca\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    "solution": "\\((a - 2b - c)^2 = a^2 + 4b^2 + c^2 - 4ab + 4bc - 2ca\\)",
    "solutionSteps": [
      {
        "explanation": "Group the trinomial and apply the algebraic identity for squaring a trinomial.",
        "workingOut": "\\((a - 2b - c)^2 = (a)^2 + (-2b)^2 + (-c)^2 + 2(a)(-2b) + 2(-2b)(-c) + 2(-c)(a)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares of the individual terms (note that negative terms squared become positive).",
        "workingOut": "\\(= a^2 + 4b^2 + c^2 + 2(a)(-2b) + 2(-2b)(-c) + 2(-c)(a)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the remaining products, adjusting the signs appropriately to obtain the simplified expression.",
        "workingOut": "\\(= a^2 + 4b^2 + c^2 - 4ab + 4bc - 2ca\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "3519b72b8eb9941ff3b42b06371560a3",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((5x + \\frac{1}{5x})^2\\)",
    "options": [
      {
        "text": "\\(25x^2  - 2 + \\frac{1}{25x^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(25x^2 + 2 + \\frac{1}{25x^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(25x^2 + 2 + \\frac{1}{25x^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(25x^2  + \\frac{1}{25x^2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    "solution": "\\((5x + \\frac{1}{5x})^2 = 25x^2 + 2 + \\frac{1}{25x^2}\\)",
    "solutionSteps": [
      {
        "explanation": "Identify A and B for expansion, then apply the formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\).",
        "workingOut": "\\(A = 5x, \\quad B = \\frac{1}{5x}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the expansion expression.",
        "workingOut": "\\((5x + \\frac{1}{5x})^2 = \\left(5x\\right)^2 + 2\\left(5x\\right)\\left(\\frac{1}{5x}\\right) + \\left(\\frac{1}{5x}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the squaring of the terms and simplify the middle multiplication product.",
        "workingOut": "\\(= 25x^2 + 2 + \\frac{1}{25x^2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "35be4c6aea2df381022d0b8d2d33ab49",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand: \\((x^2 + x + 1)^2\\)",
    "options": [
      {
        "text": "\\(x^4 + x^2 + 1 + 2x^x + 2x + 2x^\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 - x^2 + 1 - 2x^x + 2x - 2x^\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 + x^2 + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 + x^2 + 1 + 2x^x + 2x + 2x^\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    "solution": "\\((x^2 + x + 1)^2 = x^4 + x^2 + 1 + 2x^x + 2x + 2x^\\)",
    "solutionSteps": [
      {
        "explanation": "Group the trinomial and apply the algebraic identity for squaring a trinomial.",
        "workingOut": "\\((x^2 + x + 1)^2 = (x^2)^2 + (+x)^2 + (+1)^2 + 2(x^2)(+x) + 2(+x)(+1) + 2(+1)(x^2)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares of the individual terms (note that negative terms squared become positive).",
        "workingOut": "\\(= x^4 + x^2 + 1 + 2(x^2)(+x) + 2(+x)(+1) + 2(+1)(x^2)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the remaining products, adjusting the signs appropriately to obtain the simplified expression.",
        "workingOut": "\\(= x^4 + x^2 + 1 + 2x^x + 2x + 2x^\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "378c40dcdf92bad1a15ba5a2c75ea620",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x + 1)(x - 3)(x + 5)\\)",
    "options": [
      {
        "text": "\\(x^2 + 3x^2 - 13x - 15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 3x^2 - 13x - 15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 3x^2 + 13x + 15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + -15\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    "solution": "\\((x + 1)(x - 3)(x + 5) = x^3 + 3x^2 - 13x - 15\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply the first two binomials first.",
        "workingOut": "\\((x + 1)(x - 3) = x^2 + (1 + -3)x + (1 \\times -3) = x^2 - 2x - 3\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the resulting quadratic expression by the third binomial.",
        "workingOut": "\\((x^2 - 2x - 3)(x + 5) = x(x^2 - 2x - 3) + 5(x^2 - 2x - 3)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the full distribution and combine like terms.",
        "workingOut": "\\(= x^3 + 3x^2 - 13x - 15\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "37f3c82ec3ad9696f5353306a38cfd37",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\((2z + 3)^2\\)",
    "options": [
      {
        "text": "\\(4z^2 + 6z + 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4z^2 + 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2z^2 + 12z + 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4z^2 + 12z + 9\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(4z^2 + 12z + 9\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((2z + 3)^2 = (2z)^2 + 2(2z)(3) + (3)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(4z^2 + 12z + 9\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "387638a35ff96f119508e0461fbc0413",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify: \\(3(2a + b) + 2(a - 2b)\\)",
    "options": [
      {
        "text": "\\(8a + b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4a - b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8a - 3b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8a - b\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(8a - b\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(3(2a + b) + 2(a - 2b)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(8a - b\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "3abb0585a23cb51f1c5b1e76b06817b6",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((2x + 1)(x - 2) - (x - 3)(x + 2)\\)",
    "options": [],
    "answer": "x^2-2x+4",
    "blanks": [],
    "hint": "",
    "solution": "1. \\((2x^2 - 4x + x - 2) - (x^2 + 2x - 3x - 6)\\)\n2. \\((2x^2 - 3x - 2) - (x^2 - x - 6)\\)\n3. \\(x^2 - 2x + 4\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\((2x + 1)(x - 2) - (x - 3)(x + 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(x^2-2x+4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "3b2decd987cf0200254a889859ec03c2",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\(7(x - 2)\\)",
    "options": [],
    "answer": "7x-14",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(7x - 14\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(7 \\times (x) - 7 \\times (2)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(7x-14\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "3b429019908ed2e1896ffbc6907efcae",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify: \\(3(x + 2) - 2x\\)",
    "options": [
      {
        "text": "\\(x + 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x + 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5x + 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x - 6\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(x + 6\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(3(x + 2) - 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(x + 6\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "3e9e6f5e2a915b6a7a28cf83427eac67",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((3m + 2)(9m^2 - 6m + 4)\\)",
    "options": [
      {
        "text": "\\(27m^3 + 33m2 + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(27m^3 + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(27m^3 - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3m^2 + 4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    "solution": "\\((3m + 2)(9m^2 - 6m + 4) = 27m^3 + 8\\)",
    "solutionSteps": [
      {
        "explanation": "Identify that the expression is in the form \\((A \\pm B)(A^2 \\mp AB + B^2)\\) with A = \\(3m\\) and B = \\(2\\).",
        "workingOut": "\\(A = 3m, \\quad B = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum/difference of cubes identity directly.",
        "workingOut": "\\((3m + 2)((3m)^2 - (3m)(2) + (2)^2) = (3m)^3 + (2)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers to find the final result.",
        "workingOut": "\\(= 27m^3 + 8\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "3ee10ae2b4b6be5b82b76ad630d300cd",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\((u - v)(u + v)\\)",
    "options": [],
    "answer": "u^2-v^2",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(u^2 - v^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the difference of squares identity: (A - B)(A + B) = A² - B².",
        "workingOut": "\\((u - v)(u + v) = (u)^2 - (v)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the squares.",
        "workingOut": "\\(u^2-v^2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "3eec009d1f553be60ad33fb0985a6711",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x + 1)(x + 2)(x + 4)\\)",
    "options": [
      {
        "text": "\\(x^3 - 7x^2 - 14x - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 7x^2 + 14x + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 7x^2 + 14x + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 8\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    "solution": "\\((x + 1)(x + 2)(x + 4) = x^3 + 7x^2 + 14x + 8\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply the first two binomials first.",
        "workingOut": "\\((x + 1)(x + 2) = x^2 + (1 + 2)x + (1 \\times 2) = x^2 + 3x + 2\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the resulting quadratic expression by the third binomial.",
        "workingOut": "\\((x^2 + 3x + 2)(x + 4) = x(x^2 + 3x + 2) + 4(x^2 + 3x + 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the full distribution and combine like terms.",
        "workingOut": "\\(= x^3 + 7x^2 + 14x + 8\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "3fa68c56fa138e73f10de3639790cd98",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand: \\((x + 2y + 3z)^2\\)",
    "options": [
      {
        "text": "\\(x^2 + 4y^2 + 9z^2 + 4xy + 12yz + 6zx\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 4y^2 + 9z^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 4y^2 + 9z^2 + 4xy + 12yz + 6zx\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 - 4y^2 + 9z^2 - 4xy + 12yz - 6zx\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    "solution": "\\((x + 2y + 3z)^2 = x^2 + 4y^2 + 9z^2 + 4xy + 12yz + 6zx\\)",
    "solutionSteps": [
      {
        "explanation": "Group the trinomial and apply the algebraic identity for squaring a trinomial.",
        "workingOut": "\\((x + 2y + 3z)^2 = (x)^2 + (+2y)^2 + (+3z)^2 + 2(x)(+2y) + 2(+2y)(+3z) + 2(+3z)(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares of the individual terms (note that negative terms squared become positive).",
        "workingOut": "\\(= x^2 + 4y^2 + 9z^2 + 2(x)(+2y) + 2(+2y)(+3z) + 2(+3z)(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the remaining products, adjusting the signs appropriately to obtain the simplified expression.",
        "workingOut": "\\(= x^2 + 4y^2 + 9z^2 + 4xy + 12yz + 6zx\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "415bcb87f834277f3a83ddb8c038ec8c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\((y - 3)^2\\)",
    "options": [],
    "answer": "y^2-6y+9",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(y^2 - 6y + 9\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((y - 3)^2 = (y)^2 - 2(y)(3) + (3)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(y^2-6y+9\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "419c41e35029d8f76b4ad1215416b685",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand: \\((2a + 2b - c)^2\\)",
    "options": [
      {
        "text": "\\(4a^2 + 4b^2 + c^2 + 8ab - 4bc + 4ca\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4a^2 + 4b^2 + c^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4a^2 - 4b^2 + c^2 - 8ab + 4bc - 4ca\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4a^2 + 4b^2 + c^2 + 8ab - 4bc - 4ca\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    "solution": "\\((2a + 2b - c)^2 = 4a^2 + 4b^2 + c^2 + 8ab - 4bc - 4ca\\)",
    "solutionSteps": [
      {
        "explanation": "Group the trinomial and apply the algebraic identity for squaring a trinomial.",
        "workingOut": "\\((2a + 2b - c)^2 = (2a)^2 + (+2b)^2 + (-c)^2 + 2(2a)(+2b) + 2(+2b)(-c) + 2(-c)(2a)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares of the individual terms (note that negative terms squared become positive).",
        "workingOut": "\\(= 4a^2 + 4b^2 + c^2 + 2(2a)(+2b) + 2(+2b)(-c) + 2(-c)(2a)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the remaining products, adjusting the signs appropriately to obtain the simplified expression.",
        "workingOut": "\\(= 4a^2 + 4b^2 + c^2 + 8ab - 4bc - 4ca\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "4222bb235925314e2ae2519a271c1ab5",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify: \\(2(p - q) - (p + q)\\)",
    "options": [
      {
        "text": "\\(p - 3q\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p - q\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p + q\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3p - q\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(p - 3q\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(2(p - q) - (p + q)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(p - 3q\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "42fb9493fe0e0c6af16e28c956a7e50d",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Evaluate using algebraic expansion: \\(29.8^2\\)",
    "options": [
      {
        "text": "\\(888.04\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(878.04\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(898.04\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(896.9204\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Express the number as \\((B \\pm d)^2\\) where B is a round base, then apply the perfect square identity.",
    "solution": "\\((30 - 0.2)^2 = 30^2 - 2(30)(0.2) + 0.2^2 = 888.04\\)",
    "solutionSteps": [
      {
        "explanation": "Rewrite the number as a sum or difference of a round base and a decimal/number.",
        "workingOut": "\\(29.8^2 = (30 - 0.2)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the perfect square binomial identity: (A ± B)^2 = A^2 ± 2AB + B^2.",
        "workingOut": "\\(= 30^2 - 2(30)(0.2) + (0.2)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the calculations and add the terms to obtain the final simplified value.",
        "workingOut": "\\(= 900 - 12 + 0.04000000000000001 = 888.04\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "438f2e0d5beeee35d31c04fa5e4efc53",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\(-3(p - 2q)\\)",
    "options": [],
    "answer": "-3p+6q",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(-3p + 6q\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(-3 \\times (p) - -3 \\times (2q)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(-3p+6q\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "45b598c53ff9f5fda8e4e8e7185d608c",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand: \\((a + 3b)^3\\)",
    "options": [
      {
        "text": "\\(a^3 + 3a^23b - 3a3b^2 + 3b^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^3 + 3a^23b + 3a3b^2 + 3b^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^3 + 3b^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^3 + 6a^23b + 6a3b^2 + 3b^3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    "solution": "\\((a + 3b)^3 = a^3 + 3a^23b + 3a3b^2 + 3b^3\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the first term A = \\(a\\) and second term B = \\(3b\\), then apply the cubic expansion formula.",
        "workingOut": "\\((a + 3b)^3 = (a)^3 + 3(a)^2(3b) + 3(a)(3b)^2 + (3b)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the squares and products inside each term.",
        "workingOut": "\\(= a^3 + 3(a^2)(3b) + 3(a)(3b^2) + 3b^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the coefficients to state the final polynomial expression.",
        "workingOut": "\\(= a^3 + 3a^23b + 3a3b^2 + 3b^3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "463c6f47799eeb0a4681a122cbfb459f",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "\\((2y - 7)(2y + 7)\\)",
    "options": [
      "\\(4y^2 - 49\\)",
      "\\(2y^2 - 49\\)",
      "\\(4y^2 + 49\\)",
      "\\(4y^2 - 28y - 49\\)"
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Difference of squares pattern: $(a-b)(a+b) = a^2 - b^2$.",
    "solution": "\\((2y)^2 - 7^2 = 4y^2 - 49\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the difference of squares identity: (A - B)(A + B) = A² - B².",
        "workingOut": "\\((2y - 7)(2y + 7) = (2y)^2 - (7)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the squares.",
        "workingOut": "\\((2y)^2 - 7^2 = 4y^2 - 49\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "475951ae2f4bd6abbf742e2919f15fe2",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\((5 + c)^2\\)",
    "options": [],
    "answer": "c^2+10c+25",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(25 + 10c + c^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((5 + c)^2 = (5)^2 + 2(5)(c) + (c)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(c^2+10c+25\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "47d4eb00cda18dca856793ff8345b2a9",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x - 2)(x - 3)(x + 4)\\)",
    "options": [
      {
        "text": "\\(x^3 - x^2 - 14x + 24\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 24\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 - x^2 - 14x + 24\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + x^2 + 14x - 24\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    "solution": "\\((x - 2)(x - 3)(x + 4) = x^3 - x^2 - 14x + 24\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply the first two binomials first.",
        "workingOut": "\\((x - 2)(x - 3) = x^2 + (-2 + -3)x + (-2 \\times -3) = x^2 - 5x + 6\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the resulting quadratic expression by the third binomial.",
        "workingOut": "\\((x^2 - 5x + 6)(x + 4) = x(x^2 - 5x + 6) + 4(x^2 - 5x + 6)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the full distribution and combine like terms.",
        "workingOut": "\\(= x^3 - x^2 - 14x + 24\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "4864d425af8910a1201060618085c822",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Evaluate using difference of squares: \\(1002 \\times 998\\)",
    "options": [
      {
        "text": "\\(999996\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1000006\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(999986\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1009995.9600\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Express the numbers as \\((B + d)(B - d)\\) where B is the round base, then apply the difference of squares identity.",
    "solution": "\\((1000 + 2)(1000 - 2) = 1000^2 - 2^2 = 1000000 - 4 = 999996\\)",
    "solutionSteps": [
      {
        "explanation": "Rewrite the product using a round base and a small symmetric difference.",
        "workingOut": "\\(1002 \\times 998 = (1000 + 2)(1000 - 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= 1000^2 - 2^2\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares and subtract to find the final result.",
        "workingOut": "\\(= 1000000 - 4 = 999996\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "48fdb8e005e1815c03690adfa9295cd8",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((y^4 - \\frac{1}{y^4})^2\\)",
    "options": [
      {
        "text": "\\(y^8  + \\frac{1}{y^8}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^8 - 2 + \\frac{1}{y^8}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^8  + 2 + \\frac{1}{y^8}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^8 - 2 + \\frac{1}{y^8}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    "solution": "\\((y^4 - \\frac{1}{y^4})^2 = y^8 - 2 + \\frac{1}{y^8}\\)",
    "solutionSteps": [
      {
        "explanation": "Identify A and B for expansion, then apply the formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\).",
        "workingOut": "\\(A = y^4, \\quad B = \\frac{1}{y^4}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the expansion expression.",
        "workingOut": "\\((y^4 - \\frac{1}{y^4})^2 = \\left(y^4\\right)^2 - 2\\left(y^4\\right)\\left(\\frac{1}{y^4}\\right) + \\left(\\frac{1}{y^4}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the squaring of the terms and simplify the middle multiplication product.",
        "workingOut": "\\(= y^8 - 2 + \\frac{1}{y^8}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "4c7505d63219604b87464c4eaee8ada9",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x + 2)(x + 3)(x + 4)\\)",
    "options": [
      {
        "text": "\\(x^3 - 9x^2 - 26x - 24\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 9x^2 + 26x + 24\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 24\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 9x^2 + 26x + 24\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    "solution": "\\((x + 2)(x + 3)(x + 4) = x^3 + 9x^2 + 26x + 24\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply the first two binomials first.",
        "workingOut": "\\((x + 2)(x + 3) = x^2 + (2 + 3)x + (2 \\times 3) = x^2 + 5x + 6\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the resulting quadratic expression by the third binomial.",
        "workingOut": "\\((x^2 + 5x + 6)(x + 4) = x(x^2 + 5x + 6) + 4(x^2 + 5x + 6)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the full distribution and combine like terms.",
        "workingOut": "\\(= x^3 + 9x^2 + 26x + 24\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "4f246d1c5de74e69f87373f9665528f0",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\((A - B)(A + B)\\)",
    "options": [
      {
        "text": "\\(A^2 - 2AB + B^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(A^2 - B^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(A^2 + 2AB + B^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(A^2 + B^2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(A^2 - B^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the difference of squares identity: (A - B)(A + B) = A² - B².",
        "workingOut": "\\((A - B)(A + B) = (A)^2 - (B)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the squares.",
        "workingOut": "\\(A^2 - B^2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "5005ebb331bda31ef0e43450cee534ef",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand: \\((x + y + z)^2\\)",
    "options": [
      {
        "text": "\\(x^2 + y^2 + z^2 + 2xy + 2yz + 2zx\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + y^2 + z^2 + 2xy + 2yz + 2zx\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 - y^2 + z^2 - 2xy + 2yz - 2zx\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + y^2 + z^2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    "solution": "\\((x + y + z)^2 = x^2 + y^2 + z^2 + 2xy + 2yz + 2zx\\)",
    "solutionSteps": [
      {
        "explanation": "Group the trinomial and apply the algebraic identity for squaring a trinomial.",
        "workingOut": "\\((x + y + z)^2 = (x)^2 + (+y)^2 + (+z)^2 + 2(x)(+y) + 2(+y)(+z) + 2(+z)(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares of the individual terms (note that negative terms squared become positive).",
        "workingOut": "\\(= x^2 + y^2 + z^2 + 2(x)(+y) + 2(+y)(+z) + 2(+z)(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the remaining products, adjusting the signs appropriately to obtain the simplified expression.",
        "workingOut": "\\(= x^2 + y^2 + z^2 + 2xy + 2yz + 2zx\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "501681aad198d8161bf3b58097952475",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\(2x(y - z)\\)",
    "options": [],
    "answer": "2xy-2xz",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(2xy - 2xz\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(2x \\times (y) - 2x \\times (z)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(2xy-2xz\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "518e780768399722b458fde25f55ad15",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x + 1)(x + 4)\\)",
    "options": [
      {
        "text": "\\(x^2 + 5x + 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 4x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 5x + 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2x + 5\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(x^2 + 5x + 4\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the brackets by multiplying each term of the first binomial by each term of the second.",
        "workingOut": "\\((x + 1)(x + 4) = x \\times x + x \\times 4 + 1 \\times x ++ 1 \\times 4\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the multiplication products and combine like terms.",
        "workingOut": "\\(x^2 + 5x + 4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "5267033be0aafdf8735eb2083e411abb",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((2y + 1)(y + 3)\\)",
    "options": [
      {
        "text": "\\(2y^2 + 7y + 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2y^2 + 6y + 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2y^2 + 5y + 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3y^2 + 7y + 3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(2y^2 + 7y + 3\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the brackets by multiplying each term of the first binomial by each term of the second.",
        "workingOut": "\\((2y + 1)(y + 3) = 2y \\times y + 2y \\times 3 + 1 \\times y ++ 1 \\times 3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the multiplication products and combine like terms.",
        "workingOut": "\\(2y^2 + 7y + 3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "5350c33f080cc436b5c02e8ce2e49fbe",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x - 2)^3\\)",
    "options": [
      {
        "text": "\\(x^3 - 2x^2 + 4x - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 6x^2 + 12x - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 4x^2 + 8x - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 8\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "",
    "solution": "1. \\((x - 2)(x^2 - 4x + 4)\\)\n2. \\(x(x^2 - 4x + 4) - 2(x^2 - 4x + 4)\\)\n3. \\(x^3 - 4x^2 + 4x - 2x^2 + 8x - 8 = x^3 - 6x^2 + 12x - 8\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\((x - 2)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\((x - 2)(x^2 - 4x + 4)\n2. x(x^2 - 4x + 4) - 2(x^2 - 4x + 4)\n3. x^3 - 4x^2 + 4x - 2x^2 + 8x - 8 = x^3 - 6x^2 + 12x - 8\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "53861ceb1598290b006c361e3630718f",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((z^2 + 3z + 5)(z^2 - 3z + 5)\\)",
    "options": [
      {
        "text": "\\(x^2 + z^2 + 25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(z^4 - z^2 - 25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(z^4 + z^2 + 25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(z^4 + z^2 + 25\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    "solution": "\\((z^2 + 3z + 5)(z^2 - 3z + 5) = z^4 + z^2 + 25\\)",
    "solutionSteps": [
      {
        "explanation": "Regroup the trinomials to isolate a common part and a part with opposite signs.",
        "workingOut": "\\((z^2 + 3z + 5)(z^2 - 3z + 5) = [(z^2 + 5) + 3z][(z^2 + 5) - 3z]\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= (z^2 + 5)^2 - (3z)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the perfect square and simplify by combining like terms.",
        "workingOut": "\\(= z^4 + z^2 + 25\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "541254c774322eaa3863e74f0cd9a31b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x^3 - \\frac{2}{x^3})^2\\)",
    "options": [
      {
        "text": "\\(x^6  + 4 + \\frac{4}{x^6}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^6 - 4 + \\frac{4}{x^6}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^6  + \\frac{4}{x^6}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^6 - 4 + \\frac{4}{x^6}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    "solution": "\\((x^3 - \\frac{2}{x^3})^2 = x^6 - 4 + \\frac{4}{x^6}\\)",
    "solutionSteps": [
      {
        "explanation": "Identify A and B for expansion, then apply the formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\).",
        "workingOut": "\\(A = x^3, \\quad B = \\frac{2}{x^3}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the expansion expression.",
        "workingOut": "\\((x^3 - \\frac{2}{x^3})^2 = \\left(x^3\\right)^2 - 2\\left(x^3\\right)\\left(\\frac{2}{x^3}\\right) + \\left(\\frac{2}{x^3}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the squaring of the terms and simplify the middle multiplication product.",
        "workingOut": "\\(= x^6 - 4 + \\frac{4}{x^6}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "54919daf3ba6a6159796300d5d511798",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Evaluate using difference of squares: \\(403 \\times 397\\)",
    "options": [
      {
        "text": "\\(160001\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(161590.9100\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(159981\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(159991\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Express the numbers as \\((B + d)(B - d)\\) where B is the round base, then apply the difference of squares identity.",
    "solution": "\\((400 + 3)(400 - 3) = 400^2 - 3^2 = 160000 - 9 = 159991\\)",
    "solutionSteps": [
      {
        "explanation": "Rewrite the product using a round base and a small symmetric difference.",
        "workingOut": "\\(403 \\times 397 = (400 + 3)(400 - 3)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= 400^2 - 3^2\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares and subtract to find the final result.",
        "workingOut": "\\(= 160000 - 9 = 159991\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "54ad7c3b1fcb6e37da867bce8cb9973d",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x^2 + \\frac{1}{x^2})^2\\)",
    "options": [
      {
        "text": "\\(x^4  - 2 + \\frac{1}{x^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4  + \\frac{1}{x^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 + 2 + \\frac{1}{x^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 + 2 + \\frac{1}{x^4}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    "solution": "\\((x^2 + \\frac{1}{x^2})^2 = x^4 + 2 + \\frac{1}{x^4}\\)",
    "solutionSteps": [
      {
        "explanation": "Identify A and B for expansion, then apply the formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\).",
        "workingOut": "\\(A = x^2, \\quad B = \\frac{1}{x^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the expansion expression.",
        "workingOut": "\\((x^2 + \\frac{1}{x^2})^2 = \\left(x^2\\right)^2 + 2\\left(x^2\\right)\\left(\\frac{1}{x^2}\\right) + \\left(\\frac{1}{x^2}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the squaring of the terms and simplify the middle multiplication product.",
        "workingOut": "\\(= x^4 + 2 + \\frac{1}{x^4}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "54ca2f47ebae4a1b2b732899bd8953dc",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((y + \\frac{3}{y})(y - \\frac{3}{y})\\)",
    "options": [
      {
        "text": "\\(y^2 - \\frac{9}{y^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^2 + \\frac{9}{y^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^2 - 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^2 - 3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(y^2 - (\\frac{3}{y})^2 = y^2 - \\frac{9}{y^2}\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the difference of squares identity: (A - B)(A + B) = A² - B².",
        "workingOut": "\\((y - \\frac\\{3\\}\\{y\\})(y + \\frac\\{3\\}\\{y\\}) = (y)^2 - (\\frac\\{3\\}\\{y\\})^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the squares.",
        "workingOut": "\\(y^2 - (\\frac\\{3\\}\\{y\\})^2 = y^2 - \\frac\\{9\\}\\{y^2\\}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "54cf7eb6ef6a2a124ae416fa28e42a9f",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand: \\((2a + 3)^3\\)",
    "options": [
      {
        "text": "\\(8a^3 + 36a^2 + 54a + 27\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8a^3 + 72a^2 + 108a + 27\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8a^3 + 36a^2 - 54a + 27\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8a^3 + 27\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    "solution": "\\((2a + 3)^3 = 8a^3 + 36a^2 + 54a + 27\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the first term A = \\(2a\\) and second term B = \\(3\\), then apply the cubic expansion formula.",
        "workingOut": "\\((2a + 3)^3 = (2a)^3 + 3(2a)^2(3) + 3(2a)(3)^2 + (3)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the squares and products inside each term.",
        "workingOut": "\\(= 8a^3 + 3(4a^2)(3) + 3(2a)(9) + 27\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the coefficients to state the final polynomial expression.",
        "workingOut": "\\(= 8a^3 + 36a^2 + 54a + 27\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "5a6ecd3bfb422babecea7536604ff6c0",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\(-3y(2y + 1)\\)",
    "options": [],
    "answer": "-6y^2-3y",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(-6y^2 - 3y\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(-3y \\times (2y) + -3y \\times (1)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(-6y^2-3y\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "5b3c83aeb94126b2bce2a719ac492bca",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Evaluate using algebraic expansion: \\(1005^2\\)",
    "options": [
      {
        "text": "\\(1010015\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1010025\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1010035\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1020125.2500\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Express the number as \\((B \\pm d)^2\\) where B is a round base, then apply the perfect square identity.",
    "solution": "\\((1000 + 5)^2 = 1000^2 + 2(1000)(5) + 5^2 = 1010025\\)",
    "solutionSteps": [
      {
        "explanation": "Rewrite the number as a sum or difference of a round base and a decimal/number.",
        "workingOut": "\\(1005^2 = (1000 + 5)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the perfect square binomial identity: (A ± B)^2 = A^2 ± 2AB + B^2.",
        "workingOut": "\\(= 1000^2 + 2(1000)(5) + (5)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the calculations and add the terms to obtain the final simplified value.",
        "workingOut": "\\(= 1000000 + 10000 + 25 = 1010025\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "5c3828e6cf06d4caa13685f78f9d2d42",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\(-2(5 - z)\\)",
    "options": [],
    "answer": "-10+2z",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(-10 + 2z\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(-2 \\times (5) - -2 \\times (z)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(-10+2z\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "5cb6bfb8d0429d397582cd10d3b60954",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand: \\((m + n - 3)^2\\)",
    "options": [
      {
        "text": "\\(m^2 - n^2 + 9 - 2mn + 6n - 6m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m^2 + n^2 + 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m^2 + n^2 + 9 + 2mn - 6n + 6m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m^2 + n^2 + 9 + 2mn - 6n - 6m\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    "solution": "\\((m + n - 3)^2 = m^2 + n^2 + 9 + 2mn - 6n - 6m\\)",
    "solutionSteps": [
      {
        "explanation": "Group the trinomial and apply the algebraic identity for squaring a trinomial.",
        "workingOut": "\\((m + n - 3)^2 = (m)^2 + (+n)^2 + (-3)^2 + 2(m)(+n) + 2(+n)(-3) + 2(-3)(m)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares of the individual terms (note that negative terms squared become positive).",
        "workingOut": "\\(= m^2 + n^2 + 9 + 2(m)(+n) + 2(+n)(-3) + 2(-3)(m)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the remaining products, adjusting the signs appropriately to obtain the simplified expression.",
        "workingOut": "\\(= m^2 + n^2 + 9 + 2mn - 6n - 6m\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "5cf72bf6b564775a161299ef3379c290",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\((h + 12)(h - 12)\\)",
    "options": [],
    "answer": "h^2-144",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(h^2 - 144\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the difference of squares identity: (A - B)(A + B) = A² - B².",
        "workingOut": "\\((h - 12)(h + 12) = (h)^2 - (12)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the squares.",
        "workingOut": "\\(h^2-144\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "600c5ccef8db70bd0d4ad24eb5757995",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Evaluate using algebraic expansion: \\(200.5^2\\)",
    "options": [
      {
        "text": "\\(40190.25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(40602.2525\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(40210.25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(40200.25\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Express the number as \\((B \\pm d)^2\\) where B is a round base, then apply the perfect square identity.",
    "solution": "\\((200 + 0.5)^2 = 200^2 + 2(200)(0.5) + 0.5^2 = 40200.25\\)",
    "solutionSteps": [
      {
        "explanation": "Rewrite the number as a sum or difference of a round base and a decimal/number.",
        "workingOut": "\\(200.5^2 = (200 + 0.5)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the perfect square binomial identity: (A ± B)^2 = A^2 ± 2AB + B^2.",
        "workingOut": "\\(= 200^2 + 2(200)(0.5) + (0.5)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the calculations and add the terms to obtain the final simplified value.",
        "workingOut": "\\(= 40000 + 200 + 0.25 = 40200.25\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "6033155045ff7e4d353367f9655c53ec",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "\\(-3x^2(2x + 4) - 4x^2(x - 2)\\)",
    "options": [
      "\\(-10x^3 + 4x^2\\)",
      "\\(-10x^3 - 20x^2\\)",
      "\\(-2x^3 - 4x^2\\)",
      "\\(-10x^3 - 4x^2\\)"
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Multiply coefficients and add powers of x.",
    "solution": "\\(-6x^3 - 12x^2 - 4x^3 + 8x^2 = -10x^3 - 4x^2\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(-3x^2(2x + 4) - 4x^2(x - 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(-6x^3 - 12x^2 - 4x^3 + 8x^2 = -10x^3 - 4x^2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "6074afedb162ad9115f5f7d4f7092020",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\(2a(a - 3)\\)",
    "options": [],
    "answer": "2a^2-6a",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(2a^2 - 6a\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(2a \\times (a) - 2a \\times (3)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(2a^2-6a\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "60a65a49a17544b674fa202511953442",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((3x - 2y) - (2x - 3y)\\)",
    "options": [
      {
        "text": "\\(x - 5y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x + y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x - y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5x + y\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(x + y\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\((3x - 2y) - (2x - 3y)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(x + y\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "614626aeaef400ec904466975bffb15a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify: \\(4(x - 2) - 3(x + 1)\\)",
    "options": [
      {
        "text": "\\(7x - 11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x - 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x - 11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x + 5\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(x - 11\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(4(x - 2) - 3(x + 1)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(x - 11\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "61a47cae2fb9a3114e71de41ad347f0c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x + 6)(x - 6)\\)",
    "options": [
      {
        "text": "\\(x^2 - 12x + 36\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 36\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 - 12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 - 36\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(x^2 - 36\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the difference of squares identity: (A - B)(A + B) = A² - B².",
        "workingOut": "\\((x - 6)(x + 6) = (x)^2 - (6)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the squares.",
        "workingOut": "\\(x^2 - 36\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "62385a403d22366e756dfd2afabc44b0",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((a - 3)(a - 4)\\)",
    "options": [
      {
        "text": "\\(a^2 - 7a + 12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^2 + 7a + 12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^2 - 7a - 12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^2 - 12\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(a^2 - 7a + 12\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the brackets by multiplying each term of the first binomial by each term of the second.",
        "workingOut": "\\((a - 3)(a - 4) = a \\times a - a \\times 4 - 3 \\times a -- 3 \\times 4\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the multiplication products and combine like terms.",
        "workingOut": "\\(a^2 - 7a + 12\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "62e8f87a81851f0ee11e092be50699ac",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((t + 5)(t - 2)\\)",
    "options": [
      {
        "text": "\\(t^2 + 3t - 10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t^2 + 3t + 10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t^2 + 7t - 10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t^2 - 3t - 10\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(t^2 + 3t - 10\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the brackets by multiplying each term of the first binomial by each term of the second.",
        "workingOut": "\\((t + 5)(t - 2) = t \\times t - t \\times 2 + 5 \\times t +- 5 \\times 2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the multiplication products and combine like terms.",
        "workingOut": "\\(t^2 + 3t - 10\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "636766061dbb89d1374c3cdb775fea5c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "\\((2p + 9)^2\\)",
    "options": [
      "\\(4p^2 + 18p + 81\\)",
      "\\(4p^2 + 81\\)",
      "\\(4p^2 + 36p + 81\\)",
      "\\(4p^2 + 36p + 18\\)"
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Square the first, twice the product, square the last.",
    "solution": "\\(4p^2 + 18p + 18p + 81 = 4p^2 + 36p + 81\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((2p + 9)^2 = (2p)^2 + 2(2p)(9) + (9)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(4p^2 + 18p + 18p + 81 = 4p^2 + 36p + 81\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "6625701025b0f59a1353d11b8e97d2fb",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x + 3)(x^2 - 3x + 9)\\)",
    "options": [
      {
        "text": "\\(x^2 + 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 27\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 27\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 3x3 + 27\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    "solution": "\\((x + 3)(x^2 - 3x + 9) = x^3 + 27\\)",
    "solutionSteps": [
      {
        "explanation": "Identify that the expression is in the form \\((A \\pm B)(A^2 \\mp AB + B^2)\\) with A = \\(x\\) and B = \\(3\\).",
        "workingOut": "\\(A = x, \\quad B = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum/difference of cubes identity directly.",
        "workingOut": "\\((x + 3)((x)^2 - (x)(3) + (3)^2) = (x)^3 + (3)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers to find the final result.",
        "workingOut": "\\(= x^3 + 27\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "6641951d9a6ae846e2f8b3a8b78f7745",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x + 3)(x - 3)(x + 2)\\)",
    "options": [
      {
        "text": "\\(x^3 - 2x^2 + 9x + 18\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 2x^2 - 9x - 18\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + -18\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 2x^2 - 9x - 18\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    "solution": "\\((x + 3)(x - 3)(x + 2) = x^3 + 2x^2 - 9x - 18\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply the first two binomials first.",
        "workingOut": "\\((x + 3)(x - 3) = x^2 + (3 + -3)x + (3 \\times -3) = x^2  9\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the resulting quadratic expression by the third binomial.",
        "workingOut": "\\((x^2  9)(x + 2) = x(x^2  9) + 2(x^2  9)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the full distribution and combine like terms.",
        "workingOut": "\\(= x^3 + 2x^2 - 9x - 18\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "66f6fe1adffcf957a7f5b2a644581362",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand: \\((a - b - c)^2\\)",
    "options": [
      {
        "text": "\\(a^2 + b^2 + c^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^2 + b^2 + c^2 - 2ab + 2bc - 2ca\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^2 - b^2 + c^2 - 2ab + 2bc - 2ca\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^2 + b^2 + c^2 - 2ab - 2bc + 2ca\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    "solution": "\\((a - b - c)^2 = a^2 + b^2 + c^2 - 2ab + 2bc - 2ca\\)",
    "solutionSteps": [
      {
        "explanation": "Group the trinomial and apply the algebraic identity for squaring a trinomial.",
        "workingOut": "\\((a - b - c)^2 = (a)^2 + (-b)^2 + (-c)^2 + 2(a)(-b) + 2(-b)(-c) + 2(-c)(a)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares of the individual terms (note that negative terms squared become positive).",
        "workingOut": "\\(= a^2 + b^2 + c^2 + 2(a)(-b) + 2(-b)(-c) + 2(-c)(a)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the remaining products, adjusting the signs appropriately to obtain the simplified expression.",
        "workingOut": "\\(= a^2 + b^2 + c^2 - 2ab + 2bc - 2ca\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "67d9575398da5867d11ea421110d61dd",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x^2 + 5x + 25)(x^2 - 5x + 25)\\)",
    "options": [
      {
        "text": "\\(x^4 + 25x^2 + 625\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 25x^2 + 625\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 - 25x^2 - 625\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 + 25x^2 + 625\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    "solution": "\\((x^2 + 5x + 25)(x^2 - 5x + 25) = x^4 + 25x^2 + 625\\)",
    "solutionSteps": [
      {
        "explanation": "Regroup the trinomials to isolate a common part and a part with opposite signs.",
        "workingOut": "\\((x^2 + 5x + 25)(x^2 - 5x + 25) = [(x^2 + 25) + 5x][(x^2 + 25) - 5x]\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= (x^2 + 25)^2 - (5x)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the perfect square and simplify by combining like terms.",
        "workingOut": "\\(= x^4 + 25x^2 + 625\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "6a4e1a401223d4deceb73300ac471064",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Evaluate using algebraic expansion: \\(10.02^2\\)",
    "options": [
      {
        "text": "\\(110.4004\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(90.4004\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(100.4004\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(101.4044\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Express the number as \\((B \\pm d)^2\\) where B is a round base, then apply the perfect square identity.",
    "solution": "\\((10 + 0.02)^2 = 10^2 + 2(10)(0.02) + 0.02^2 = 100.4004\\)",
    "solutionSteps": [
      {
        "explanation": "Rewrite the number as a sum or difference of a round base and a decimal/number.",
        "workingOut": "\\(10.02^2 = (10 + 0.02)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the perfect square binomial identity: (A ± B)^2 = A^2 ± 2AB + B^2.",
        "workingOut": "\\(= 10^2 + 2(10)(0.02) + (0.02)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the calculations and add the terms to obtain the final simplified value.",
        "workingOut": "\\(= 100 + 0.4 + 0.0004 = 100.4004\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "6ac9484975fc1e82df2dba20ab0947b0",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x - \\frac{2}{x})^2\\)",
    "options": [
      {
        "text": "\\(x^2 - 4x + \\frac{4}{x^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 - 4 + \\frac{4}{x^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + \\frac{4}{x^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 - 2 + \\frac{4}{x^2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(x^2 - 2(x)(\\frac{2}{x}) + (\\frac{2}{x})^2 = x^2 - 4 + \\frac{4}{x^2}\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\(\\left(x - \\frac\\{2\\}\\{x\\}\\right)^2 = (x)^2 - 2\\left(x\\right)\\left(\\frac\\{2\\}\\{x\\}\\right) + \\left(\\frac\\{2\\}\\{x\\}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(= x - 2 + \\frac\\{2\\}\\{x\\}\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified expression.",
        "workingOut": "\\(x^2 - 2(x)(\\frac\\{2\\}\\{x\\}) + (\\frac\\{2\\}\\{x\\})^2 = x^2 - 4 + \\frac\\{4\\}\\{x^2\\}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "6d0af750c053c61946cda6edac3db12a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\((4j + 3)^2\\)",
    "options": [
      {
        "text": "\\(16j^2 + 24j + 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(16j^2 + 12j + 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(16j^2 + 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8j^2 + 24j + 9\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(16j^2 + 24j + 9\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((4j + 3)^2 = (4j)^2 + 2(4j)(3) + (3)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(16j^2 + 24j + 9\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "6e3543ff31313ce1735d42261ef28a3b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "\\((5c + 4)(5c - 4)\\)",
    "options": [
      "\\(25c^2 - 40c - 16\\)",
      "\\(10c^2 - 16\\)",
      "\\(25c^2 - 16\\)",
      "\\(25c^2 + 16\\)"
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Difference of squares.",
    "solution": "\\((5c)^2 - 4^2 = 25c^2 - 16\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the difference of squares identity: (A - B)(A + B) = A² - B².",
        "workingOut": "\\((5c - 4)(5c + 4) = (5c)^2 - (4)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the squares.",
        "workingOut": "\\((5c)^2 - 4^2 = 25c^2 - 16\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "6f11828461d59918658b1ce9684cdfee",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((y - 1)(y^2 + 1y + 1)\\)",
    "options": [
      {
        "text": "\\(y^2 - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^3 + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^3 - 3y1 - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^3 - 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    "solution": "\\((y - 1)(y^2 + 1y + 1) = y^3 - 1\\)",
    "solutionSteps": [
      {
        "explanation": "Identify that the expression is in the form \\((A \\pm B)(A^2 \\mp AB + B^2)\\) with A = \\(y\\) and B = \\(1\\).",
        "workingOut": "\\(A = y, \\quad B = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum/difference of cubes identity directly.",
        "workingOut": "\\((y - 1)((y)^2 + (y)(1) + (1)^2) = (y)^3 - (1)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers to find the final result.",
        "workingOut": "\\(= y^3 - 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "75693548b706af8a9faca9cf7cd3eb8e",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x^2 + 4x + 2)(x^2 - 4x + 2)\\)",
    "options": [
      {
        "text": "\\(x^4 - 12x^2 + 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 - 12x^2 + 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 - 12x^2 + 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 + 12x^2 - 4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    "solution": "\\((x^2 + 4x + 2)(x^2 - 4x + 2) = x^4 - 12x^2 + 4\\)",
    "solutionSteps": [
      {
        "explanation": "Regroup the trinomials to isolate a common part and a part with opposite signs.",
        "workingOut": "\\((x^2 + 4x + 2)(x^2 - 4x + 2) = [(x^2 + 2) + 4x][(x^2 + 2) - 4x]\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= (x^2 + 2)^2 - (4x)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the perfect square and simplify by combining like terms.",
        "workingOut": "\\(= x^4 - 12x^2 + 4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "76c4d5a1a60d12710f2b6b514cae5187",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "\\((2n + 5)(n - 4)\\)",
    "options": [
      "\\(2n^2 - 3n + 20\\)",
      "\\(2n^2 + 13n - 20\\)",
      "\\(2n^2 - 3n - 20\\)",
      "\\(2n^2 + 3n - 20\\)"
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Use FOIL method.",
    "solution": "\\(2n^2 - 8n + 5n - 20 = 2n^2 - 3n - 20\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the brackets by multiplying each term of the first binomial by each term of the second.",
        "workingOut": "\\((2n + 5)(n - 4) = 2n \\times n - 2n \\times 4 + 5 \\times n +- 5 \\times 4\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the multiplication products and combine like terms.",
        "workingOut": "\\(2n^2 - 8n + 5n - 20 = 2n^2 - 3n - 20\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "77eb4d1853ff4875c55b696dcfb71b78",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x + 1)(x + 2)(x + 3)\\)",
    "options": [
      {
        "text": "\\(x^3 + 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 6x^2 + 11x + 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 6x^2 - 11x - 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 6x^2 + 11x + 6\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    "solution": "\\((x + 1)(x + 2)(x + 3) = x^3 + 6x^2 + 11x + 6\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply the first two binomials first.",
        "workingOut": "\\((x + 1)(x + 2) = x^2 + (1 + 2)x + (1 \\times 2) = x^2 + 3x + 2\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the resulting quadratic expression by the third binomial.",
        "workingOut": "\\((x^2 + 3x + 2)(x + 3) = x(x^2 + 3x + 2) + 3(x^2 + 3x + 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the full distribution and combine like terms.",
        "workingOut": "\\(= x^3 + 6x^2 + 11x + 6\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "78014166638f347f4e03c729be618af6",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((3a + 1)(a + 2)\\)",
    "options": [
      {
        "text": "\\(3a^2 + 7a + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4a^2 + 7a + 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3a^2 + 7a + 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3a^2 + 6a + 2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(3a^2 + 7a + 2\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the brackets by multiplying each term of the first binomial by each term of the second.",
        "workingOut": "\\((3a + 1)(a + 2) = 3a \\times a + 3a \\times 2 + 1 \\times a ++ 1 \\times 2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the multiplication products and combine like terms.",
        "workingOut": "\\(3a^2 + 7a + 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "78aa422221c73da1127a736edc4519e2",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((2x - 3)^2\\)",
    "options": [
      {
        "text": "\\(2x^2 - 12x + 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4x^2 - 12x + 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4x^2 - 6x + 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4x^2 + 9\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(4x^2 - 12x + 9\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((2x - 3)^2 = (2x)^2 - 2(2x)(3) + (3)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(4x^2 - 12x + 9\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "7a3dd28d7df2a9cf6a4112bff143fc4c",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((a^2 + ab + b^2)(a^2 - ab + b^2)\\)",
    "options": [
      {
        "text": "\\(a^4 + a^2b^2 + b^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + a^2b^2 + b^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^4 - a^2b^2 - b^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^4 + a^2b^2 + b^4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    "solution": "\\((a^2 + ab + b^2)(a^2 - ab + b^2) = a^4 + a^2b^2 + b^4\\)",
    "solutionSteps": [
      {
        "explanation": "Regroup the trinomials to isolate a common part and a part with opposite signs.",
        "workingOut": "\\((a^2 + ab + b^2)(a^2 - ab + b^2) = [(a^2 + b^2) + ab][(a^2 + b^2) - ab]\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= (a^2 + b^2)^2 - (ab)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the perfect square and simplify by combining like terms.",
        "workingOut": "\\(= a^4 + a^2b^2 + b^4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "7ad07e88a517d825565161b955175767",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand: \\((2x + 1)^3\\)",
    "options": [
      {
        "text": "\\(8x^3 + 24x^2 + 12x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8x^3 + 12x^2 + 6x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8x^3 + 12x^2 - 6x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8x^3 + 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    "solution": "\\((2x + 1)^3 = 8x^3 + 12x^2 + 6x + 1\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the first term A = \\(2x\\) and second term B = \\(1\\), then apply the cubic expansion formula.",
        "workingOut": "\\((2x + 1)^3 = (2x)^3 + 3(2x)^2(1) + 3(2x)(1)^2 + (1)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the squares and products inside each term.",
        "workingOut": "\\(= 8x^3 + 3(4x^2)(1) + 3(2x)(1) + 1\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the coefficients to state the final polynomial expression.",
        "workingOut": "\\(= 8x^3 + 12x^2 + 6x + 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "7bc0be865ff2485f61db508bfacc1a7e",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x^2 + 6x + 36)(x^2 - 6x + 36)\\)",
    "options": [
      {
        "text": "\\(x^4 + 36x^2 + 1296\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 + 36x^2 + 1296\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 36x^2 + 1296\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 - 36x^2 - 1296\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    "solution": "\\((x^2 + 6x + 36)(x^2 - 6x + 36) = x^4 + 36x^2 + 1296\\)",
    "solutionSteps": [
      {
        "explanation": "Regroup the trinomials to isolate a common part and a part with opposite signs.",
        "workingOut": "\\((x^2 + 6x + 36)(x^2 - 6x + 36) = [(x^2 + 36) + 6x][(x^2 + 36) - 6x]\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= (x^2 + 36)^2 - (6x)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the perfect square and simplify by combining like terms.",
        "workingOut": "\\(= x^4 + 36x^2 + 1296\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "7e67ce97bec038e63db84ca7c011119d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\(6(2x + 3)\\)",
    "options": [],
    "answer": "12x+18",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(12x + 18\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(6 \\times (2x) + 6 \\times (3)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(12x+18\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "7f229ad53fcb15c4ca69184748a2d4ac",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the value of \\(998^2\\) using special expansions.",
    "options": [],
    "answer": "996004",
    "blanks": [],
    "hint": "",
    "solution": "1. \\((1000 - 2)^2 = 1000^2 - 2(1000)(2) + 2^2\\)\n2. \\(1000000 - 4000 + 4 = 996004\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Find the value of 998^2 using special expansions.\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(996004\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "8180c153c3fa3e75f9c3ed3b10dab619",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((a + 4)(a^2 - 4a + 16)\\)",
    "options": [
      {
        "text": "\\(a^3 + 64\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^3 - 64\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^3 + 3a4 + 64\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^2 + 16\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    "solution": "\\((a + 4)(a^2 - 4a + 16) = a^3 + 64\\)",
    "solutionSteps": [
      {
        "explanation": "Identify that the expression is in the form \\((A \\pm B)(A^2 \\mp AB + B^2)\\) with A = \\(a\\) and B = \\(4\\).",
        "workingOut": "\\(A = a, \\quad B = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum/difference of cubes identity directly.",
        "workingOut": "\\((a + 4)((a)^2 - (a)(4) + (4)^2) = (a)^3 + (4)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers to find the final result.",
        "workingOut": "\\(= a^3 + 64\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "822bb69b8185c671cfa6b27489376125",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\((10 + b)(10 - b)\\)",
    "options": [],
    "answer": "100-b^2",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(100 - b^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the difference of squares identity: (A - B)(A + B) = A² - B².",
        "workingOut": "\\((10 - b)(10 + b) = (10)^2 - (b)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the squares.",
        "workingOut": "\\(100-b^2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "834ee672d7b0a66cacf4908844956e79",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\((3x + 1)^2\\)",
    "options": [
      {
        "text": "\\(9x^2 + 3x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9x^2 + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6x^2 + 6x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9x^2 + 6x + 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(9x^2 + 6x + 1\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((3x + 1)^2 = (3x)^2 + 2(3x)(1) + (1)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(9x^2 + 6x + 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "83b7af89485183047cbb50aac04b6c6d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\(-y(y - 2)\\)",
    "options": [],
    "answer": "-y^2+2y",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(-y^2 + 2y\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(-y \\times (y) - -y \\times (2)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(-y^2+2y\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "8464bd25ae6be56751215575e5742085",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\(-2(y - 5)\\)",
    "options": [],
    "answer": "-2y+10",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(-2y + 10\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(-2 \\times (y) - -2 \\times (5)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(-2y+10\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "84b10bd1a754e27fb3d79f48a0282e90",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Evaluate using difference of squares: \\(50.1 \\times 49.9\\)",
    "options": [
      {
        "text": "\\(2524.9899\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2499.99\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2489.99\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2509.99\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Express the numbers as \\((B + d)(B - d)\\) where B is the round base, then apply the difference of squares identity.",
    "solution": "\\((50 + 0.1)(50 - 0.1) = 50^2 - 0.1^2 = 2500 - 0.010000000000000002 = 2499.99\\)",
    "solutionSteps": [
      {
        "explanation": "Rewrite the product using a round base and a small symmetric difference.",
        "workingOut": "\\(50.1 \\times 49.9 = (50 + 0.1)(50 - 0.1)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= 50^2 - 0.1^2\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares and subtract to find the final result.",
        "workingOut": "\\(= 2500 - 0.010000000000000002 = 2499.99\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "86ac34985f8e30d0453bd7c11b93accb",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\((3p + 4q)(3p - 4q)\\)",
    "options": [
      {
        "text": "\\(9p^2 + 16q^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3p^2 - 4q^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9p^2 - 24pq + 16q^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9p^2 - 16q^2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(9p^2 - 16q^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the difference of squares identity: (A - B)(A + B) = A² - B².",
        "workingOut": "\\((3p - 4q)(3p + 4q) = (3p)^2 - (4q)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the squares.",
        "workingOut": "\\(9p^2 - 16q^2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "873ee7c142a6245ffa91056c47deedf6",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((u^2 + uv + v^2)(u^2 - uv + v^2)\\)",
    "options": [
      {
        "text": "\\(u^4 + u^2v^2 + v^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(u^4 + u^2v^2 + v^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(u^4 - u^2v^2 - v^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + u^2v^2 + v^4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    "solution": "\\((u^2 + uv + v^2)(u^2 - uv + v^2) = u^4 + u^2v^2 + v^4\\)",
    "solutionSteps": [
      {
        "explanation": "Regroup the trinomials to isolate a common part and a part with opposite signs.",
        "workingOut": "\\((u^2 + uv + v^2)(u^2 - uv + v^2) = [(u^2 + v^2) + uv][(u^2 + v^2) - uv]\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= (u^2 + v^2)^2 - (uv)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the perfect square and simplify by combining like terms.",
        "workingOut": "\\(= u^4 + u^2v^2 + v^4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "875688f6f5e5cb3834e68e5bb42a4633",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\((10 - 7k)^2\\)",
    "options": [
      {
        "text": "\\(100 - 140k + 49k^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(100 - 70k + 49k^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(20 - 140k + 49k^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(100 + 49k^2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(100 - 140k + 49k^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((10 - 7k)^2 = (10)^2 - 2(10)(7k) + (7k)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(100 - 140k + 49k^2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "8846ac6a99572e541906b4444022981a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\(-3(z + 4)\\)",
    "options": [],
    "answer": "-3z-12",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(-3z - 12\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(-3 \\times (z) + -3 \\times (4)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(-3z-12\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "8f794b5b8a4b9fa5b64e5781a6dd6ae8",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand: \\((x^2 + 2)^3\\)",
    "options": [
      {
        "text": "\\(x^6 + 12x^4 + 24x^ + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^6 + 6x^4 + 12x^ + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^6 + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^6 + 6x^4 - 12x^ + 8\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    "solution": "\\((x^2 + 2)^3 = x^6 + 6x^4 + 12x^ + 8\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the first term A = \\(x^2\\) and second term B = \\(2\\), then apply the cubic expansion formula.",
        "workingOut": "\\((x^2 + 2)^3 = (x^2)^3 + 3(x^2)^2(2) + 3(x^2)(2)^2 + (2)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the squares and products inside each term.",
        "workingOut": "\\(= x^6 + 3(x^4)(2) + 3(x^2)(4) + 8\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the coefficients to state the final polynomial expression.",
        "workingOut": "\\(= x^6 + 6x^4 + 12x^ + 8\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "8f83c4cf5789f6366d5f1e32e3fdc543",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x + 1)(x + 3)(x - 2)\\)",
    "options": [
      {
        "text": "\\(x^2 + 2x^2 - 5x - 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 2x^2 - 5x - 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 2x^2 + 5x + 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + -6\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    "solution": "\\((x + 1)(x + 3)(x - 2) = x^3 + 2x^2 - 5x - 6\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply the first two binomials first.",
        "workingOut": "\\((x + 1)(x + 3) = x^2 + (1 + 3)x + (1 \\times 3) = x^2 + 4x + 3\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the resulting quadratic expression by the third binomial.",
        "workingOut": "\\((x^2 + 4x + 3)(x - 2) = x(x^2 + 4x + 3) - 2(x^2 + 4x + 3)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the full distribution and combine like terms.",
        "workingOut": "\\(= x^3 + 2x^2 - 5x - 6\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "8fda8af26c79eaae282af61b19bb6c64",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x - 2)(x^2 + 2x + 4)\\)",
    "options": [
      {
        "text": "\\(x^3 - 3x2 - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 - 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 8\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    "solution": "\\((x - 2)(x^2 + 2x + 4) = x^3 - 8\\)",
    "solutionSteps": [
      {
        "explanation": "Identify that the expression is in the form \\((A \\pm B)(A^2 \\mp AB + B^2)\\) with A = \\(x\\) and B = \\(2\\).",
        "workingOut": "\\(A = x, \\quad B = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum/difference of cubes identity directly.",
        "workingOut": "\\((x - 2)((x)^2 + (x)(2) + (2)^2) = (x)^3 - (2)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers to find the final result.",
        "workingOut": "\\(= x^3 - 8\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "8fe44db1d9f71b29550b1aec86953a93",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((4y - 3)(16y^2 + 12y + 9)\\)",
    "options": [
      {
        "text": "\\(4y^2 - 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(64y^3 - 34y3 - 27\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(64y^3 + 27\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(64y^3 - 27\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    "solution": "\\((4y - 3)(16y^2 + 12y + 9) = 64y^3 - 27\\)",
    "solutionSteps": [
      {
        "explanation": "Identify that the expression is in the form \\((A \\pm B)(A^2 \\mp AB + B^2)\\) with A = \\(4y\\) and B = \\(3\\).",
        "workingOut": "\\(A = 4y, \\quad B = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum/difference of cubes identity directly.",
        "workingOut": "\\((4y - 3)((4y)^2 + (4y)(3) + (3)^2) = (4y)^3 - (3)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers to find the final result.",
        "workingOut": "\\(= 64y^3 - 27\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "90a0105375acf84578c6b2c2db938185",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x + 2)(x + 2)(x - 2)\\)",
    "options": [
      {
        "text": "\\(x^2 + 2x^2 - 4x - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 2x^2 + 4x + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + -8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 2x^2 - 4x - 8\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    "solution": "\\((x + 2)(x + 2)(x - 2) = x^3 + 2x^2 - 4x - 8\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply the first two binomials first.",
        "workingOut": "\\((x + 2)(x + 2) = x^2 + (2 + 2)x + (2 \\times 2) = x^2 + 4x + 4\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the resulting quadratic expression by the third binomial.",
        "workingOut": "\\((x^2 + 4x + 4)(x - 2) = x(x^2 + 4x + 4) - 2(x^2 + 4x + 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the full distribution and combine like terms.",
        "workingOut": "\\(= x^3 + 2x^2 - 4x - 8\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "9195a4ed44c56bcfa887fce0f6cb1961",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify: \\(10 - 2(y + 4)\\)",
    "options": [
      {
        "text": "\\(18 - 2y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6 - 2y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2 - 2y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2y + 2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(2 - 2y\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(10 - 2(y + 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(2 - 2y\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "93669424b250fedc270dcb3f58c3c337",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\((p - q)^2\\)",
    "options": [],
    "answer": "p^2-2pq+q^2",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(p^2 - 2pq + q^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((p - q)^2 = (p)^2 - 2(p)(q) + (q)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(p^2-2pq+q^2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "9478d1dbe54362c7c22a313b57849364",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand: \\((x + y)^3\\)",
    "options": [
      {
        "text": "\\(x^3 + 3x^2y - 3xy^2 + y^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 3x^2y + 3xy^2 + y^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 6x^2y + 6xy^2 + y^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + y^3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    "solution": "\\((x + y)^3 = x^3 + 3x^2y + 3xy^2 + y^3\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the first term A = \\(x\\) and second term B = \\(y\\), then apply the cubic expansion formula.",
        "workingOut": "\\((x + y)^3 = (x)^3 + 3(x)^2(y) + 3(x)(y)^2 + (y)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the squares and products inside each term.",
        "workingOut": "\\(= x^3 + 3(x^2)(y) + 3(x)(y^2) + y^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the coefficients to state the final polynomial expression.",
        "workingOut": "\\(= x^3 + 3x^2y + 3xy^2 + y^3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "9b3dd8329cb670333a80ae5c671a2557",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand: \\((3u - 2v)^3\\)",
    "options": [
      {
        "text": "\\(27u^3 - 2v^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(27u^3 - 27u^22v + 9u2v^2 - 2v^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(27u^3 - 27u^22v - 9u2v^2 - 2v^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(27u^3 - 54u^22v + 18u2v^2 - 2v^3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    "solution": "\\((3u - 2v)^3 = 27u^3 - 27u^22v + 9u2v^2 - 2v^3\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the first term A = \\(3u\\) and second term B = \\(2v\\), then apply the cubic expansion formula.",
        "workingOut": "\\((3u - 2v)^3 = (3u)^3 - 3(3u)^2(2v) + 3(3u)(2v)^2 - (2v)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the squares and products inside each term.",
        "workingOut": "\\(= 27u^3 - 3(9u^2)(2v) + 3(3u)(2v^2) - 2v^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the coefficients to state the final polynomial expression.",
        "workingOut": "\\(= 27u^3 - 27u^22v + 9u2v^2 - 2v^3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "9c330c8a29bcd02a5c3e5bd9bb767876",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((2x - \\frac{3}{2x})^2\\)",
    "options": [
      {
        "text": "\\(4x^2 - 6 + \\frac{9}{4x^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4x^2  + \\frac{9}{4x^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4x^2 - 6 + \\frac{9}{4x^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4x^2  + 6 + \\frac{9}{4x^2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    "solution": "\\((2x - \\frac{3}{2x})^2 = 4x^2 - 6 + \\frac{9}{4x^2}\\)",
    "solutionSteps": [
      {
        "explanation": "Identify A and B for expansion, then apply the formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\).",
        "workingOut": "\\(A = 2x, \\quad B = \\frac{3}{2x}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the expansion expression.",
        "workingOut": "\\((2x - \\frac{3}{2x})^2 = \\left(2x\\right)^2 - 2\\left(2x\\right)\\left(\\frac{3}{2x}\\right) + \\left(\\frac{3}{2x}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the squaring of the terms and simplify the middle multiplication product.",
        "workingOut": "\\(= 4x^2 - 6 + \\frac{9}{4x^2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "9eb95b6add1acf06f4aa32cb8bca5154",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x^2 + 2x + 2)(x^2 - 2x + 2)\\)",
    "options": [
      {
        "text": "\\(x^4 + 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 - 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 + 4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    "solution": "\\((x^2 + 2x + 2)(x^2 - 2x + 2) = x^4 + 4\\)",
    "solutionSteps": [
      {
        "explanation": "Regroup the trinomials to isolate a common part and a part with opposite signs.",
        "workingOut": "\\((x^2 + 2x + 2)(x^2 - 2x + 2) = [(x^2 + 2) + 2x][(x^2 + 2) - 2x]\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= (x^2 + 2)^2 - (2x)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the perfect square and simplify by combining like terms.",
        "workingOut": "\\(= x^4 + 4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "a3a4b50a55c1e3e67a0795d7ba093bed",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify: \\(2(3a - 4) + 5\\)",
    "options": [
      {
        "text": "\\(6a - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3a - 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6a - 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6a + 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(6a - 3\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(2(3a - 4) + 5\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(6a - 3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "a5b110a09194ef9f32b7ca945fce8072",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand: \\((a - 3b + 2)^2\\)",
    "options": [
      {
        "text": "\\(a^2 - 9b^2 + 4 - 6ab + 12b - 4a\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^2 + 9b^2 + 4 - 6ab - 12b + 4a\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^2 + 9b^2 + 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^2 + 9b^2 + 4 - 6ab + 12b + 4a\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    "solution": "\\((a - 3b + 2)^2 = a^2 + 9b^2 + 4 - 6ab - 12b + 4a\\)",
    "solutionSteps": [
      {
        "explanation": "Group the trinomial and apply the algebraic identity for squaring a trinomial.",
        "workingOut": "\\((a - 3b + 2)^2 = (a)^2 + (-3b)^2 + (+2)^2 + 2(a)(-3b) + 2(-3b)(+2) + 2(+2)(a)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares of the individual terms (note that negative terms squared become positive).",
        "workingOut": "\\(= a^2 + 9b^2 + 4 + 2(a)(-3b) + 2(-3b)(+2) + 2(+2)(a)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the remaining products, adjusting the signs appropriately to obtain the simplified expression.",
        "workingOut": "\\(= a^2 + 9b^2 + 4 - 6ab - 12b + 4a\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "a6b7379f519277b96acc59b17fd8e384",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\((2u - 5v)(2u + 5v)\\)",
    "options": [
      {
        "text": "\\(4u^2 + 25v^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2u^2 - 5v^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4u^2 - 25v^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4u^2 - 20uv + 25v^2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(4u^2 - 25v^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the difference of squares identity: (A - B)(A + B) = A² - B².",
        "workingOut": "\\((2u - 5v)(2u + 5v) = (2u)^2 - (5v)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the squares.",
        "workingOut": "\\(4u^2 - 25v^2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "a8c558bf44ac7a09392ffde0f2156f91",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x - 1)(x + 2)(x + 4)\\)",
    "options": [
      {
        "text": "\\(x^3 + -8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 5x^2 + 2x - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 5x^2 - 2x + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 5x^2 + 2x - 8\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    "solution": "\\((x - 1)(x + 2)(x + 4) = x^3 + 5x^2 + 2x - 8\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply the first two binomials first.",
        "workingOut": "\\((x - 1)(x + 2) = x^2 + (-1 + 2)x + (-1 \\times 2) = x^2 + 1x - 2\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the resulting quadratic expression by the third binomial.",
        "workingOut": "\\((x^2 + 1x - 2)(x + 4) = x(x^2 + 1x - 2) + 4(x^2 + 1x - 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the full distribution and combine like terms.",
        "workingOut": "\\(= x^3 + 5x^2 + 2x - 8\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "a9ad4cb7ecb6b4f53f67bf3e53da8427",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x + 1)(x + 2)(x - 3)\\)",
    "options": [
      {
        "text": "\\(x^2 - 7x - 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + -6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 7x + 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 7x - 6\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    "solution": "\\((x + 1)(x + 2)(x - 3) = x^3 - 7x - 6\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply the first two binomials first.",
        "workingOut": "\\((x + 1)(x + 2) = x^2 + (1 + 2)x + (1 \\times 2) = x^2 + 3x + 2\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the resulting quadratic expression by the third binomial.",
        "workingOut": "\\((x^2 + 3x + 2)(x - 3) = x(x^2 + 3x + 2) - 3(x^2 + 3x + 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the full distribution and combine like terms.",
        "workingOut": "\\(= x^3 - 7x - 6\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "aaaba67f5403f55636a29df6b694926f",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand: \\((p + q - r)^2\\)",
    "options": [
      {
        "text": "\\(p^2 + q^2 + r^2 + 2pq - 2qr - 2rp\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p^2 + q^2 + r^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p^2 + q^2 + r^2 + 2pq - 2qr + 2rp\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p^2 - q^2 + r^2 - 2pq + 2qr - 2rp\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    "solution": "\\((p + q - r)^2 = p^2 + q^2 + r^2 + 2pq - 2qr - 2rp\\)",
    "solutionSteps": [
      {
        "explanation": "Group the trinomial and apply the algebraic identity for squaring a trinomial.",
        "workingOut": "\\((p + q - r)^2 = (p)^2 + (+q)^2 + (-r)^2 + 2(p)(+q) + 2(+q)(-r) + 2(-r)(p)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares of the individual terms (note that negative terms squared become positive).",
        "workingOut": "\\(= p^2 + q^2 + r^2 + 2(p)(+q) + 2(+q)(-r) + 2(-r)(p)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the remaining products, adjusting the signs appropriately to obtain the simplified expression.",
        "workingOut": "\\(= p^2 + q^2 + r^2 + 2pq - 2qr - 2rp\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "ab8d533a4730a42645defea9eaa87fba",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Evaluate using algebraic expansion: \\(9997^2\\)",
    "options": [
      {
        "text": "\\(100939409.0900\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(99939999\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(99940009\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(99940019\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Express the number as \\((B \\pm d)^2\\) where B is a round base, then apply the perfect square identity.",
    "solution": "\\((10000 - 3)^2 = 10000^2 - 2(10000)(3) + 3^2 = 99940009\\)",
    "solutionSteps": [
      {
        "explanation": "Rewrite the number as a sum or difference of a round base and a decimal/number.",
        "workingOut": "\\(9997^2 = (10000 - 3)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the perfect square binomial identity: (A ± B)^2 = A^2 ± 2AB + B^2.",
        "workingOut": "\\(= 10000^2 - 2(10000)(3) + (3)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the calculations and add the terms to obtain the final simplified value.",
        "workingOut": "\\(= 100000000 - 60000 + 9 = 99940009\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "aba4cc9411144cb3c382006e15973594",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Evaluate using algebraic expansion: \\(99.5^2\\)",
    "options": [
      {
        "text": "\\(9910.25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9890.25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9999.2525\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9900.25\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Express the number as \\((B \\pm d)^2\\) where B is a round base, then apply the perfect square identity.",
    "solution": "\\((100 - 0.5)^2 = 100^2 - 2(100)(0.5) + 0.5^2 = 9900.25\\)",
    "solutionSteps": [
      {
        "explanation": "Rewrite the number as a sum or difference of a round base and a decimal/number.",
        "workingOut": "\\(99.5^2 = (100 - 0.5)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the perfect square binomial identity: (A ± B)^2 = A^2 ± 2AB + B^2.",
        "workingOut": "\\(= 100^2 - 2(100)(0.5) + (0.5)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the calculations and add the terms to obtain the final simplified value.",
        "workingOut": "\\(= 10000 - 100 + 0.25 = 9900.25\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "ac18a4cf31141b0861fecce5695457d5",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((p^2 + 2p + 5)(p^2 - 2p + 5)\\)",
    "options": [
      {
        "text": "\\(p^4 - 6p^2 - 25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p^4 + 6p^2 + 25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 6p^2 + 25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p^4 + 6p^2 + 25\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    "solution": "\\((p^2 + 2p + 5)(p^2 - 2p + 5) = p^4 + 6p^2 + 25\\)",
    "solutionSteps": [
      {
        "explanation": "Regroup the trinomials to isolate a common part and a part with opposite signs.",
        "workingOut": "\\((p^2 + 2p + 5)(p^2 - 2p + 5) = [(p^2 + 5) + 2p][(p^2 + 5) - 2p]\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= (p^2 + 5)^2 - (2p)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the perfect square and simplify by combining like terms.",
        "workingOut": "\\(= p^4 + 6p^2 + 25\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "af3b769ff778d9cb1a3dc9e9de443ce8",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the value of \\(103^2\\) using special expansions.",
    "options": [],
    "answer": "10609",
    "blanks": [],
    "hint": "",
    "solution": "1. \\((100 + 3)^2 = 100^2 + 2(100)(3) + 3^2\\)\n2. \\(10000 + 600 + 9 = 10609\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Find the value of 103^2 using special expansions.\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(10609\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "b12ba318cac0703eee7a8dfd84df1a1e",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand: \\((x + 2)^3\\)",
    "options": [
      {
        "text": "\\(x^3 + 6x^2 - 12x + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 6x^2 + 12x + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 12x^2 + 24x + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 8\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    "solution": "\\((x + 2)^3 = x^3 + 6x^2 + 12x + 8\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the first term A = \\(x\\) and second term B = \\(2\\), then apply the cubic expansion formula.",
        "workingOut": "\\((x + 2)^3 = (x)^3 + 3(x)^2(2) + 3(x)(2)^2 + (2)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the squares and products inside each term.",
        "workingOut": "\\(= x^3 + 3(x^2)(2) + 3(x)(4) + 8\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the coefficients to state the final polynomial expression.",
        "workingOut": "\\(= x^3 + 6x^2 + 12x + 8\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "b3e4b358ae5305ba2c7fb7f27eaf86a6",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\(4(3x - 2y)\\)",
    "options": [],
    "answer": "12x-8y",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(12x - 8y\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(4 \\times (3x) - 4 \\times (2y)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(12x-8y\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "b4bf9576a5389ddedd9367525f7bcbc6",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((3k - 2)(k + 4)\\)",
    "options": [
      {
        "text": "\\(3k^2 - 10k - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3k^2 + 10k - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3k^2 + 10k + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3k^2 + 12k - 8\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(3k^2 + 10k - 8\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the brackets by multiplying each term of the first binomial by each term of the second.",
        "workingOut": "\\((3k - 2)(k + 4) = 3k \\times k + 3k \\times 4 - 2 \\times k -+ 2 \\times 4\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the multiplication products and combine like terms.",
        "workingOut": "\\(3k^2 + 10k - 8\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "b6c600a1feb66c0ef210d4f0bddb4339",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\(4(x - 3)\\)",
    "options": [],
    "answer": "4x-12",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(4x - 12\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(4 \\times (x) - 4 \\times (3)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(4x-12\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "b95551a331c1f79d6004faea9ab095d2",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x^2 - \\frac{5}{x^2})^2\\)",
    "options": [
      {
        "text": "\\(x^4 - 10 + \\frac{25}{x^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4  + \\frac{25}{x^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 - 10 + \\frac{25}{x^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4  + 10 + \\frac{25}{x^4}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    "solution": "\\((x^2 - \\frac{5}{x^2})^2 = x^4 - 10 + \\frac{25}{x^4}\\)",
    "solutionSteps": [
      {
        "explanation": "Identify A and B for expansion, then apply the formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\).",
        "workingOut": "\\(A = x^2, \\quad B = \\frac{5}{x^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the expansion expression.",
        "workingOut": "\\((x^2 - \\frac{5}{x^2})^2 = \\left(x^2\\right)^2 - 2\\left(x^2\\right)\\left(\\frac{5}{x^2}\\right) + \\left(\\frac{5}{x^2}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the squaring of the terms and simplify the middle multiplication product.",
        "workingOut": "\\(= x^4 - 10 + \\frac{25}{x^4}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "bad544268ea88a90fef3728da02cb05c",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand: \\((x - 3)^3\\)",
    "options": [
      {
        "text": "\\(x^3 - 27\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 18x^2 + 54x - 27\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 9x^2 + 27x - 27\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 9x^2 - 27x - 27\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    "solution": "\\((x - 3)^3 = x^3 - 9x^2 + 27x - 27\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the first term A = \\(x\\) and second term B = \\(3\\), then apply the cubic expansion formula.",
        "workingOut": "\\((x - 3)^3 = (x)^3 - 3(x)^2(3) + 3(x)(3)^2 - (3)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the squares and products inside each term.",
        "workingOut": "\\(= x^3 - 3(x^2)(3) + 3(x)(9) - 27\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the coefficients to state the final polynomial expression.",
        "workingOut": "\\(= x^3 - 9x^2 + 27x - 27\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "bb16cc8cd28522791b40372c22d4832e",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x + 2)(x + 3)(x - 5)\\)",
    "options": [
      {
        "text": "\\(x^2 - 19x - 30\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 19x + 30\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 19x - 30\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + -30\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    "solution": "\\((x + 2)(x + 3)(x - 5) = x^3 - 19x - 30\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply the first two binomials first.",
        "workingOut": "\\((x + 2)(x + 3) = x^2 + (2 + 3)x + (2 \\times 3) = x^2 + 5x + 6\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the resulting quadratic expression by the third binomial.",
        "workingOut": "\\((x^2 + 5x + 6)(x - 5) = x(x^2 + 5x + 6) - 5(x^2 + 5x + 6)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the full distribution and combine like terms.",
        "workingOut": "\\(= x^3 - 19x - 30\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "bb58cca282a5452627f8836127f60dfb",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\((6 + 7n)(6 - 7n)\\)",
    "options": [
      {
        "text": "\\(36 - 14n\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(49n^2 - 36\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(36 + 49n^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(36 - 49n^2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(36 - 49n^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the difference of squares identity: (A - B)(A + B) = A² - B².",
        "workingOut": "\\((6 - 7n)(6 + 7n) = (6)^2 - (7n)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the squares.",
        "workingOut": "\\(36 - 49n^2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "bc3bf8b668a797bdf19f540a3375917c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\((11 - g)^2\\)",
    "options": [],
    "answer": "121-22g+g^2",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(121 - 22g + g^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((11 - g)^2 = (11)^2 - 2(11)(g) + (g)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(121-22g+g^2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "bdf4a25350a86886fd26d7b48df6d158",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\(-(x + 7)\\)",
    "options": [],
    "answer": "-x-7",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(-x - 7\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(-(x + 7)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(-x-7\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "c08b48a08fd4ed4724aa98c8847ba54d",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand: \\((5t + 2)^3\\)",
    "options": [
      {
        "text": "\\(125t^3 + 150t^2 + 60t + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(125t^3 + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(125t^3 + 150t^2 - 60t + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(125t^3 + 300t^2 + 120t + 8\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    "solution": "\\((5t + 2)^3 = 125t^3 + 150t^2 + 60t + 8\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the first term A = \\(5t\\) and second term B = \\(2\\), then apply the cubic expansion formula.",
        "workingOut": "\\((5t + 2)^3 = (5t)^3 + 3(5t)^2(2) + 3(5t)(2)^2 + (2)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the squares and products inside each term.",
        "workingOut": "\\(= 125t^3 + 3(25t^2)(2) + 3(5t)(4) + 8\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the coefficients to state the final polynomial expression.",
        "workingOut": "\\(= 125t^3 + 150t^2 + 60t + 8\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "c287f0e4bd209f746ac8bc0d5b30616b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand: \\((3x - 2)^3\\)",
    "options": [
      {
        "text": "\\(27x^3 - 54x^2 + 36x - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(27x^3 - 108x^2 + 72x - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(27x^3 - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(27x^3 - 54x^2 - 36x - 8\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    "solution": "\\((3x - 2)^3 = 27x^3 - 54x^2 + 36x - 8\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the first term A = \\(3x\\) and second term B = \\(2\\), then apply the cubic expansion formula.",
        "workingOut": "\\((3x - 2)^3 = (3x)^3 - 3(3x)^2(2) + 3(3x)(2)^2 - (2)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the squares and products inside each term.",
        "workingOut": "\\(= 27x^3 - 3(9x^2)(2) + 3(3x)(4) - 8\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the coefficients to state the final polynomial expression.",
        "workingOut": "\\(= 27x^3 - 54x^2 + 36x - 8\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "c54fd16af88fa9f5e34d2f4c962df923",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\(x(x + 5)\\)",
    "options": [],
    "answer": "x^2+5x",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(x^2 + 5x\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(x \\times (x) + x \\times (5)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(x^2+5x\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "c74ab9663795b54a6beb6c4df6c735e0",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((2x - 1)(4x^2 + 2x + 1)\\)",
    "options": [
      {
        "text": "\\(8x^3 - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2x^2 - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8x^3 + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8x^3 - 32x1 - 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    "solution": "\\((2x - 1)(4x^2 + 2x + 1) = 8x^3 - 1\\)",
    "solutionSteps": [
      {
        "explanation": "Identify that the expression is in the form \\((A \\pm B)(A^2 \\mp AB + B^2)\\) with A = \\(2x\\) and B = \\(1\\).",
        "workingOut": "\\(A = 2x, \\quad B = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum/difference of cubes identity directly.",
        "workingOut": "\\((2x - 1)((2x)^2 + (2x)(1) + (1)^2) = (2x)^3 - (1)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers to find the final result.",
        "workingOut": "\\(= 8x^3 - 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "c80dbf27bc4d091dd73caa7f9c7f64a5",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand: \\((a - 5)^3\\)",
    "options": [
      {
        "text": "\\(a^3 - 125\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^3 - 15a^2 - 75a - 125\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^3 - 30a^2 + 150a - 125\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^3 - 15a^2 + 75a - 125\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    "solution": "\\((a - 5)^3 = a^3 - 15a^2 + 75a - 125\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the first term A = \\(a\\) and second term B = \\(5\\), then apply the cubic expansion formula.",
        "workingOut": "\\((a - 5)^3 = (a)^3 - 3(a)^2(5) + 3(a)(5)^2 - (5)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the squares and products inside each term.",
        "workingOut": "\\(= a^3 - 3(a^2)(5) + 3(a)(25) - 125\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the coefficients to state the final polynomial expression.",
        "workingOut": "\\(= a^3 - 15a^2 + 75a - 125\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "c88361554ffd9cc8f75e75cecdf8a6b5",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((a - 4)^2 - (a - 4)(a + 4)\\)",
    "options": [],
    "answer": "-8a+32",
    "blanks": [],
    "hint": "",
    "solution": "1. \\((a^2 - 8a + 16) - (a^2 - 16)\\)\n2. \\(a^2 - 8a + 16 - a^2 + 16 = -8a + 32\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\((a - 4)^2 - (a - 4)(a + 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(-8a+32\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "c8e33bec4228918577f2a979d38cc4aa",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand: \\((3x - 2y - z)^2\\)",
    "options": [
      {
        "text": "\\(9x^2 - 4y^2 + z^2 - 12xy + 4yz - 6zx\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9x^2 + 4y^2 + z^2 - 12xy - 4yz + 6zx\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9x^2 + 4y^2 + z^2 - 12xy + 4yz - 6zx\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9x^2 + 4y^2 + z^2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    "solution": "\\((3x - 2y - z)^2 = 9x^2 + 4y^2 + z^2 - 12xy + 4yz - 6zx\\)",
    "solutionSteps": [
      {
        "explanation": "Group the trinomial and apply the algebraic identity for squaring a trinomial.",
        "workingOut": "\\((3x - 2y - z)^2 = (3x)^2 + (-2y)^2 + (-z)^2 + 2(3x)(-2y) + 2(-2y)(-z) + 2(-z)(3x)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares of the individual terms (note that negative terms squared become positive).",
        "workingOut": "\\(= 9x^2 + 4y^2 + z^2 + 2(3x)(-2y) + 2(-2y)(-z) + 2(-z)(3x)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the remaining products, adjusting the signs appropriately to obtain the simplified expression.",
        "workingOut": "\\(= 9x^2 + 4y^2 + z^2 - 12xy + 4yz - 6zx\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "cd80c4c72b9e0fb0e277e4e4944244e2",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x^2 + x + 1)(x^2 - x + 1)\\)",
    "options": [
      {
        "text": "\\(x^4 - x^2 - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + x^2 + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 + x^2 + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 + x^2 + 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    "solution": "\\((x^2 + x + 1)(x^2 - x + 1) = x^4 + x^2 + 1\\)",
    "solutionSteps": [
      {
        "explanation": "Regroup the trinomials to isolate a common part and a part with opposite signs.",
        "workingOut": "\\((x^2 + x + 1)(x^2 - x + 1) = [(x^2 + 1) + x][(x^2 + 1) - x]\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= (x^2 + 1)^2 - (x)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the perfect square and simplify by combining like terms.",
        "workingOut": "\\(= x^4 + x^2 + 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "ce171b80f1e9031b8fcdc2516f86c7a8",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((p - q)(p^2 + qp + q^2)\\)",
    "options": [
      {
        "text": "\\(p^2 - q^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p^3 + q^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p^3 - 3pq - q^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p^3 - q^3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    "solution": "\\((p - q)(p^2 + qp + q^2) = p^3 - q^3\\)",
    "solutionSteps": [
      {
        "explanation": "Identify that the expression is in the form \\((A \\pm B)(A^2 \\mp AB + B^2)\\) with A = \\(p\\) and B = \\(q\\).",
        "workingOut": "\\(A = p, \\quad B = q\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum/difference of cubes identity directly.",
        "workingOut": "\\((p - q)((p)^2 + (p)(q) + (q)^2) = (p)^3 - (q)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers to find the final result.",
        "workingOut": "\\(= p^3 - q^3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "cedaa53bd385e1dbd8354de2dbbf64e3",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand: \\((x + y - z)^2\\)",
    "options": [
      {
        "text": "\\(x^2 - y^2 + z^2 - 2xy + 2yz - 2zx\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + y^2 + z^2 + 2xy - 2yz - 2zx\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + y^2 + z^2 + 2xy - 2yz + 2zx\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + y^2 + z^2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    "solution": "\\((x + y - z)^2 = x^2 + y^2 + z^2 + 2xy - 2yz - 2zx\\)",
    "solutionSteps": [
      {
        "explanation": "Group the trinomial and apply the algebraic identity for squaring a trinomial.",
        "workingOut": "\\((x + y - z)^2 = (x)^2 + (+y)^2 + (-z)^2 + 2(x)(+y) + 2(+y)(-z) + 2(-z)(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares of the individual terms (note that negative terms squared become positive).",
        "workingOut": "\\(= x^2 + y^2 + z^2 + 2(x)(+y) + 2(+y)(-z) + 2(-z)(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the remaining products, adjusting the signs appropriately to obtain the simplified expression.",
        "workingOut": "\\(= x^2 + y^2 + z^2 + 2xy - 2yz - 2zx\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "cf3aa66ab87a2e8f8e12c0e69cad355f",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\(2(x + 3y)\\)",
    "options": [],
    "answer": "2x+6y",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(2x + 6y\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(2 \\times (x) + 2 \\times (3y)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(2x+6y\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "d56435de23d30297015954c609a9f8f1",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((t^2 + 4t + 16)(t^2 - 4t + 16)\\)",
    "options": [
      {
        "text": "\\(t^4 + 16t^2 + 256\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 16t^2 + 256\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t^4 + 16t^2 + 256\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t^4 - 16t^2 - 256\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    "solution": "\\((t^2 + 4t + 16)(t^2 - 4t + 16) = t^4 + 16t^2 + 256\\)",
    "solutionSteps": [
      {
        "explanation": "Regroup the trinomials to isolate a common part and a part with opposite signs.",
        "workingOut": "\\((t^2 + 4t + 16)(t^2 - 4t + 16) = [(t^2 + 16) + 4t][(t^2 + 16) - 4t]\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= (t^2 + 16)^2 - (4t)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the perfect square and simplify by combining like terms.",
        "workingOut": "\\(= t^4 + 16t^2 + 256\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "d58d04a4591143b86d87081cfde11bf5",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\((8a + 3b)^2\\)",
    "options": [
      {
        "text": "\\(64a^2 + 48ab + 9b^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(64a^2 + 24ab + 9b^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(16a^2 + 48ab + 6b^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(64a^2 + 9b^2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(64a^2 + 48ab + 9b^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((8a + 3b)^2 = (8a)^2 + 2(8a)(3b) + (3b)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(64a^2 + 48ab + 9b^2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "d71ea15ba82ccd89451822f800660528",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "\\((4u - 5)^2\\)",
    "options": [
      "\\(16u^2 - 20u + 25\\)",
      "\\(16u^2 + 25\\)",
      "\\(16u^2 - 40u - 25\\)",
      "\\(16u^2 - 40u + 25\\)"
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Square the first, twice the product, square the last.",
    "solution": "\\(16u^2 - 20u - 20u + 25 = 16u^2 - 40u + 25\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((4u - 5)^2 = (4u)^2 - 2(4u)(5) + (5)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(16u^2 - 20u - 20u + 25 = 16u^2 - 40u + 25\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "d77d2e081d1cd73f9f9c2f5c644619b1",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((y^2 + 2y + 4)(y^2 - 2y + 4)\\)",
    "options": [
      {
        "text": "\\(y^4 + 4y^2 + 16\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^4 + 4y^2 + 16\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 4y^2 + 16\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^4 - 4y^2 - 16\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    "solution": "\\((y^2 + 2y + 4)(y^2 - 2y + 4) = y^4 + 4y^2 + 16\\)",
    "solutionSteps": [
      {
        "explanation": "Regroup the trinomials to isolate a common part and a part with opposite signs.",
        "workingOut": "\\((y^2 + 2y + 4)(y^2 - 2y + 4) = [(y^2 + 4) + 2y][(y^2 + 4) - 2y]\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= (y^2 + 4)^2 - (2y)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the perfect square and simplify by combining like terms.",
        "workingOut": "\\(= y^4 + 4y^2 + 16\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "d88c5b48aee9daeef75738a4deb8ff22",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((3u - v)(9u^2 + 3uv + v^2)\\)",
    "options": [
      {
        "text": "\\(27u^3 - v^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(27u^3 - 33uv - v^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3u^2 - v^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(27u^3 + v^3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    "solution": "\\((3u - v)(9u^2 + 3uv + v^2) = 27u^3 - v^3\\)",
    "solutionSteps": [
      {
        "explanation": "Identify that the expression is in the form \\((A \\pm B)(A^2 \\mp AB + B^2)\\) with A = \\(3u\\) and B = \\(v\\).",
        "workingOut": "\\(A = 3u, \\quad B = v\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum/difference of cubes identity directly.",
        "workingOut": "\\((3u - v)((3u)^2 + (3u)(v) + (v)^2) = (3u)^3 - (v)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers to find the final result.",
        "workingOut": "\\(= 27u^3 - v^3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "d8e0ccd8678f49e677fe74a04044afd8",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\((i + 13)^2\\)",
    "options": [],
    "answer": "i^2+26i+169",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(i^2 + 26i + 169\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((i + 13)^2 = (i)^2 + 2(i)(13) + (13)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(i^2+26i+169\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "d95106501963f53befad825c74aae4eb",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Evaluate using algebraic expansion: \\(1.003^2\\)",
    "options": [
      {
        "text": "\\(1.0161\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(11.006009\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1.006009\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-8.993991\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Express the number as \\((B \\pm d)^2\\) where B is a round base, then apply the perfect square identity.",
    "solution": "\\((1 + 0.003)^2 = 1^2 + 2(1)(0.003) + 0.003^2 = 1.006009\\)",
    "solutionSteps": [
      {
        "explanation": "Rewrite the number as a sum or difference of a round base and a decimal/number.",
        "workingOut": "\\(1.003^2 = (1 + 0.003)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the perfect square binomial identity: (A ± B)^2 = A^2 ± 2AB + B^2.",
        "workingOut": "\\(= 1^2 + 2(1)(0.003) + (0.003)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the calculations and add the terms to obtain the final simplified value.",
        "workingOut": "\\(= 1 + 0.006 + 0.000009 = 1.006009\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "e365e257490ef1db888687e68cb34719",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((k^2 + k + 2)(k^2 - k + 2)\\)",
    "options": [
      {
        "text": "\\(k^4 + 3k^2 + 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k^4 + 3k^2 + 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k^4 - 3k^2 - 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 3k^2 + 4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    "solution": "\\((k^2 + k + 2)(k^2 - k + 2) = k^4 + 3k^2 + 4\\)",
    "solutionSteps": [
      {
        "explanation": "Regroup the trinomials to isolate a common part and a part with opposite signs.",
        "workingOut": "\\((k^2 + k + 2)(k^2 - k + 2) = [(k^2 + 2) + k][(k^2 + 2) - k]\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= (k^2 + 2)^2 - (k)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the perfect square and simplify by combining like terms.",
        "workingOut": "\\(= k^4 + 3k^2 + 4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "e3ebf1ce9443eabd71617c0500f30ec4",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x - 3)(x + 1)\\)",
    "options": [
      {
        "text": "\\(x^2 - 4x - 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 - 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 2x - 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 - 2x - 3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(x^2 - 2x - 3\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the brackets by multiplying each term of the first binomial by each term of the second.",
        "workingOut": "\\((x - 3)(x + 1) = x \\times x + x \\times 1 - 3 \\times x -+ 3 \\times 1\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the multiplication products and combine like terms.",
        "workingOut": "\\(x^2 - 2x - 3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "e4090d21948122be1bbba8562ef7acd7",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\(5(a - 2)\\)",
    "options": [],
    "answer": "5a-10",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(5a - 10\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(5 \\times (a) - 5 \\times (2)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(5a-10\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "e54335b0e14819294690237705b908ed",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "-(2x - 3y) - (3x + 2y)",
    "options": [
      "\\(-x + y\\)",
      "\\(-5x + y\\)",
      "\\(x - 5y\\)",
      "\\(-5x - y\\)"
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Distribute the negative sign to both terms in each bracket.",
    "solution": "\\(-2x + 3y - 3x - 2y = -5x + y\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(-(2x - 3y) - (3x + 2y)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(-2x + 3y - 3x - 2y = -5x + y\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "e76bac8db2c7d29ac7dfb28070a15681",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((y + 3)(y + 2)\\)",
    "options": [
      {
        "text": "\\(y^2 + 5y + 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^2 + 6y + 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^2 + 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^2 + 5y + 5\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(y^2 + 5y + 6\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the brackets by multiplying each term of the first binomial by each term of the second.",
        "workingOut": "\\((y + 3)(y + 2) = y \\times y + y \\times 2 + 3 \\times y ++ 3 \\times 2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the multiplication products and combine like terms.",
        "workingOut": "\\(y^2 + 5y + 6\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "e77a551ce169321aab44d54da80b29f0",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((2a^2 + \\frac{3}{a^2})^2\\)",
    "options": [
      {
        "text": "\\(4a^4 + 12 + \\frac{9}{a^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4a^4  + \\frac{9}{a^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4a^4  - 12 + \\frac{9}{a^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4a^4 + 12 + \\frac{9}{a^4}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    "solution": "\\((2a^2 + \\frac{3}{a^2})^2 = 4a^4 + 12 + \\frac{9}{a^4}\\)",
    "solutionSteps": [
      {
        "explanation": "Identify A and B for expansion, then apply the formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\).",
        "workingOut": "\\(A = 2a^2, \\quad B = \\frac{3}{a^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the expansion expression.",
        "workingOut": "\\((2a^2 + \\frac{3}{a^2})^2 = \\left(2a^2\\right)^2 + 2\\left(2a^2\\right)\\left(\\frac{3}{a^2}\\right) + \\left(\\frac{3}{a^2}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the squaring of the terms and simplify the middle multiplication product.",
        "workingOut": "\\(= 4a^4 + 12 + \\frac{9}{a^4}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "e9292b02a25adc1cc5a2bac50acfc49f",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "7(a - 3b) - 5(2a - 4b)",
    "options": [
      "\\(17a - 41b\\)",
      "\\(3a - b\\)",
      "\\(-3a - b\\)",
      "\\(-3a + b\\)"
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Careful with the negative sign when distributing the -5.",
    "solution": "\\(7a - 21b - 10a + 20b = -3a - b\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(7(a - 3b) - 5(2a - 4b)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(7a - 21b - 10a + 20b = -3a - b\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "ea05ffbc962a5e3def2b1b1984802b90",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify: \\(2a + 4 + 3(a - 1)\\)",
    "options": [
      {
        "text": "\\(5a + 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5a + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5a - 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(5a + 1\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(2a + 4 + 3(a - 1)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(5a + 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "ea630096c7f3b14e1a75fc3b439cdd5b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify: \\(7 - (x + 2)\\)",
    "options": [
      {
        "text": "\\(5 - x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-x + 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x + 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9 - x\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(5 - x\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(7 - (x + 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(5 - x\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "eaa38edeb109ec40aac306929337583f",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand: \\((2x + y + z)^2\\)",
    "options": [
      {
        "text": "\\(4x^2 + y^2 + z^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4x^2 + y^2 + z^2 + 4xy + 2yz + 4zx\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4x^2 + y^2 + z^2 + 4xy + 2yz + 4zx\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4x^2 - y^2 + z^2 - 4xy + 2yz - 4zx\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    "solution": "\\((2x + y + z)^2 = 4x^2 + y^2 + z^2 + 4xy + 2yz + 4zx\\)",
    "solutionSteps": [
      {
        "explanation": "Group the trinomial and apply the algebraic identity for squaring a trinomial.",
        "workingOut": "\\((2x + y + z)^2 = (2x)^2 + (+y)^2 + (+z)^2 + 2(2x)(+y) + 2(+y)(+z) + 2(+z)(2x)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares of the individual terms (note that negative terms squared become positive).",
        "workingOut": "\\(= 4x^2 + y^2 + z^2 + 2(2x)(+y) + 2(+y)(+z) + 2(+z)(2x)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the remaining products, adjusting the signs appropriately to obtain the simplified expression.",
        "workingOut": "\\(= 4x^2 + y^2 + z^2 + 4xy + 2yz + 4zx\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "eacab14cc2e044edfae21a9e74d617eb",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((a^2 + 2ab + 2b^2)(a^2 - 2ab + 2b^2)\\)",
    "options": [
      {
        "text": "\\(a^4 + 4b^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^4 + 4b^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^4 - 4b^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 4b^4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    "solution": "\\((a^2 + 2ab + 2b^2)(a^2 - 2ab + 2b^2) = a^4 + 4b^4\\)",
    "solutionSteps": [
      {
        "explanation": "Regroup the trinomials to isolate a common part and a part with opposite signs.",
        "workingOut": "\\((a^2 + 2ab + 2b^2)(a^2 - 2ab + 2b^2) = [(a^2 + 2b^2) + 2ab][(a^2 + 2b^2) - 2ab]\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= (a^2 + 2b^2)^2 - (2ab)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the perfect square and simplify by combining like terms.",
        "workingOut": "\\(= a^4 + 4b^4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "ed2df844ef9b8038d96970c0822341ed",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand: \\((2u - v + 4w)^2\\)",
    "options": [
      {
        "text": "\\(4u^2 + v^2 + 16w^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4u^2 + v^2 + 16w^2 - 4uv + 8vw + 16wu\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4u^2 - v^2 + 16w^2 - 4uv + 8vw - 16wu\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4u^2 + v^2 + 16w^2 - 4uv - 8vw + 16wu\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    "solution": "\\((2u - v + 4w)^2 = 4u^2 + v^2 + 16w^2 - 4uv - 8vw + 16wu\\)",
    "solutionSteps": [
      {
        "explanation": "Group the trinomial and apply the algebraic identity for squaring a trinomial.",
        "workingOut": "\\((2u - v + 4w)^2 = (2u)^2 + (-v)^2 + (+4w)^2 + 2(2u)(-v) + 2(-v)(+4w) + 2(+4w)(2u)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares of the individual terms (note that negative terms squared become positive).",
        "workingOut": "\\(= 4u^2 + v^2 + 16w^2 + 2(2u)(-v) + 2(-v)(+4w) + 2(+4w)(2u)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the remaining products, adjusting the signs appropriately to obtain the simplified expression.",
        "workingOut": "\\(= 4u^2 + v^2 + 16w^2 - 4uv - 8vw + 16wu\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "ef9c2b627672ac450202d14033a6cd7b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x + 2)(x + 5)\\)",
    "options": [
      {
        "text": "\\(x^2 + 7x + 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 10x + 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 7x + 10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2x + 7\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(x^2 + 7x + 10\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the brackets by multiplying each term of the first binomial by each term of the second.",
        "workingOut": "\\((x + 2)(x + 5) = x \\times x + x \\times 5 + 2 \\times x ++ 2 \\times 5\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the multiplication products and combine like terms.",
        "workingOut": "\\(x^2 + 7x + 10\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "f1e5b02aa7fc26ae9cbf63140f404f2b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((y^3 + \\frac{1}{y^3})^2\\)",
    "options": [
      {
        "text": "\\(y^6 + 2 + \\frac{1}{y^6}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^6  + \\frac{1}{y^6}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^6  - 2 + \\frac{1}{y^6}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^6 + 2 + \\frac{1}{y^6}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    "solution": "\\((y^3 + \\frac{1}{y^3})^2 = y^6 + 2 + \\frac{1}{y^6}\\)",
    "solutionSteps": [
      {
        "explanation": "Identify A and B for expansion, then apply the formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\).",
        "workingOut": "\\(A = y^3, \\quad B = \\frac{1}{y^3}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the expansion expression.",
        "workingOut": "\\((y^3 + \\frac{1}{y^3})^2 = \\left(y^3\\right)^2 + 2\\left(y^3\\right)\\left(\\frac{1}{y^3}\\right) + \\left(\\frac{1}{y^3}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the squaring of the terms and simplify the middle multiplication product.",
        "workingOut": "\\(= y^6 + 2 + \\frac{1}{y^6}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "fb199bfa88eddded10d740e126ee43c5",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "\\((4x - 3)(3x - 2)\\)",
    "options": [
      "\\(12x^2 - 17x + 6\\)",
      "\\(12x^2 + 17x + 6\\)",
      "\\(7x^2 - 17x + 6\\)",
      "\\(12x^2 - 17x - 6\\)"
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Use FOIL.",
    "solution": "\\(12x^2 - 8x - 9x + 6 = 12x^2 - 17x + 6\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the brackets by multiplying each term of the first binomial by each term of the second.",
        "workingOut": "\\((4x - 3)(3x - 2) = 4x \\times 3x - 4x \\times 2 - 3 \\times 3x -- 3 \\times 2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the multiplication products and combine like terms.",
        "workingOut": "\\(12x^2 - 8x - 9x + 6 = 12x^2 - 17x + 6\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "fbe5343b63e5f1ed835ed1468d3c5374",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "\\((2r + 5)^2\\)",
    "options": [
      "\\(2r^2 + 20r + 25\\)",
      "\\(4r^2 + 25\\)",
      "\\(4r^2 + 20r + 25\\)",
      "\\(4r^2 + 10r + 25\\)"
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Use $(a+b)^2 = a^2 + 2ab + b^2$.",
    "solution": "\\((2r)^2 + 2(2r)(5) + 5^2 = 4r^2 + 20r + 25\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((2r + 5)^2 = (2r)^2 + 2(2r)(5) + (5)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\((2r)^2 + 2(2r)(5) + 5^2 = 4r^2 + 20r + 25\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "fda842019b9441b6e26f00de6b25a577",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Expand and simplify: \\((x + 2)(x - 2)(x + 3)\\)",
    "options": [
      {
        "text": "\\(x^3 + -12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 3x^2 + 4x + 12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 3x^2 - 4x - 12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 3x^2 - 4x - 12\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    "solution": "\\((x + 2)(x - 2)(x + 3) = x^3 + 3x^2 - 4x - 12\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply the first two binomials first.",
        "workingOut": "\\((x + 2)(x - 2) = x^2 + (2 + -2)x + (2 \\times -2) = x^2  4\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the resulting quadratic expression by the third binomial.",
        "workingOut": "\\((x^2  4)(x + 3) = x(x^2  4) + 3(x^2  4)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the full distribution and combine like terms.",
        "workingOut": "\\(= x^3 + 3x^2 - 4x - 12\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "feca23651598484bfc36393ea96d936d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\(k(x - 5)\\)",
    "options": [],
    "answer": "kx-5k",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(kx - 5k\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(k \\times (x) - k \\times (5)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(kx-5k\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "fed13b15a7557fe63eaf8ddf308448cc",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Expand: \\((A - B)^2\\)",
    "options": [
      {
        "text": "\\(A^2 - 2AB - B^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(A^2 + 2AB + B^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(A^2 - 2AB + B^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(A^2 - B^2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "",
    "solution": "1. \\(A^2 - 2AB + B^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((A - B)^2 = (A)^2 - 2(A)(B) + (B)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(A^2 - 2AB + B^2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  }
];
