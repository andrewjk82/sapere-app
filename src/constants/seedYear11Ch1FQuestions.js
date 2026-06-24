export const Y11_CH1F_QUESTIONS = [
  {
    "id": "02ce85204da7e409394d44a6490c1853",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve: \\( x^2 = 4x + 12 \\)",
    "options": [
      {
        "text": "\\(x = -2, 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 2, 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2, -6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 2, -6\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Rearrange to standard form first.",
    "solution": "\\( x^2 - 4x - 12 = 0 \\Rightarrow (x - 6)(x + 2) = 0 \\Rightarrow x = -2, 6 \\)",
    "solutionSteps": [
      {
        "explanation": "Rearrange.",
        "workingOut": "x^2 - 4x - 12 = 0",
        "graphData": null
      },
      {
        "explanation": "Factor.",
        "workingOut": "(x - 6)(x + 2) = 0",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "x = -2, 6",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "0e8f7c548ff6440ab6c58c7662933142",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve the simultaneous equations:\\n\\( y = x^2 \\)\\n\\( y = 2x + 3 \\)",
    "options": [
      {
        "text": "\\(x = -1, y = 1 \\text{ \\text{ and } } x = 3, y = 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -1, y = -1 \\text{ \\text{ and } } x = -3, y = -9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 1, y = 1 \\text{ \\text{ and } } x = -3, y = 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = --1, y = -1 \\text{ \\text{ and } } x = 3, y = -9\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Set the two expressions for \\( y \\) equal and solve the quadratic.",
    "solution": "\\( x^2 = 2x + 3 \\Rightarrow x^2 - 2x - 3 = 0 \\Rightarrow (x - 3)(x + 1) = 0 \\)",
    "solutionSteps": [
      {
        "explanation": "Set equal.",
        "workingOut": "x^2 = 2x + 3",
        "graphData": null
      },
      {
        "explanation": "Rearrange.",
        "workingOut": "x^2 - 2x - 3 = 0",
        "graphData": null
      },
      {
        "explanation": "Factor.",
        "workingOut": "(x - 3)(x + 1) = 0",
        "graphData": null
      },
      {
        "explanation": "Solve for x.",
        "workingOut": "x = 3 \\text{ or } x = -1",
        "graphData": null
      },
      {
        "explanation": "Find y values.",
        "workingOut": "y = 9 \\text{ or } y = 1",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "1455afe452f25d2f528133c9a5a23d4c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Factor: \\( 25 - (x + 3)^2 \\)",
    "options": [
      {
        "text": "\\((2 - x)(8 + x)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((2 + x)(8 + x)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((2 - x)(8 - x)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((2 + x)(8 - x)\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Treat \\( 25 = 5^2 \\) and apply \\( a^2 - b^2 \\).",
    "solution": "\\( 25 - (x + 3)^2 = (5 - (x+3))(5 + (x+3)) = (2 - x)(8 + x) \\)",
    "solutionSteps": [
      {
        "explanation": "Write as \\( 5^2 - (x+3)^2 \\).",
        "workingOut": "5^2 - (x + 3)^2",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares formula.",
        "workingOut": "(5 - (x+3))(5 + (x+3))",
        "graphData": null
      },
      {
        "explanation": "Simplify each factor.",
        "workingOut": "(2 - x)(8 + x)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "196187cb06f1d3380d341c7526d17ac6",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve: \\( \\frac{2}{x - 1} + \\frac{3}{x + 2} = 2 \\)",
    "options": [
      {
        "text": "\\(x = \\frac{5}{2}, -1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -5, -1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 5, 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -5, 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Multiply through by \\( (x-1)(x+2) \\) to clear fractions.",
    "solution": "\\( 2(x+2) + 3(x-1) = 2(x-1)(x+2) \\Rightarrow 5x + 1 = 2x^2 + 2x - 4 \\Rightarrow 2x^2 - 3x - 5 = 0 \\Rightarrow (2x - 5)(x + 1) = 0 \\)",
    "solutionSteps": [
      {
        "explanation": "Multiply through by \\( (x-1)(x+2) \\).",
        "workingOut": "2(x+2) + 3(x-1) = 2(x-1)(x+2)",
        "graphData": null
      },
      {
        "explanation": "Expand left side.",
        "workingOut": "2x + 4 + 3x - 3 = 5x + 1",
        "graphData": null
      },
      {
        "explanation": "Expand right side.",
        "workingOut": "2(x^2 + x - 2) = 2x^2 + 2x - 4",
        "graphData": null
      },
      {
        "explanation": "Rearrange.",
        "workingOut": "2x^2 - 3x - 5 = 0",
        "graphData": null
      },
      {
        "explanation": "Factor.",
        "workingOut": "(2x - 5)(x + 1) = 0",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "x = \\frac{5}{2} \\text{ or } x = -1",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "1a00994206ee223f719d6f3822cdd982",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve: \\( (x + 2)(x - 5) = 18 \\)",
    "options": [
      {
        "text": "\\(x = -4, 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 4, 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -4, -7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 4, -7\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Expand, rearrange, then factor.",
    "solution": "\\( x^2 - 3x - 10 = 18 \\Rightarrow x^2 - 3x - 28 = 0 \\Rightarrow (x - 7)(x + 4) = 0 \\)",
    "solutionSteps": [
      {
        "explanation": "Expand the left side.",
        "workingOut": "x^2 - 5x + 2x - 10 = 18 \\Rightarrow x^2 - 3x - 10 = 18",
        "graphData": null
      },
      {
        "explanation": "Rearrange.",
        "workingOut": "x^2 - 3x - 28 = 0",
        "graphData": null
      },
      {
        "explanation": "Factor.",
        "workingOut": "(x - 7)(x + 4) = 0",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "x = -4, 7",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "1ab0b4e1084a71f9ce7de42ab2edbe66",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve the simultaneous equations:\\n\\( 3x + 2y = 16 \\)\\n\\( x - 2y = 0 \\)",
    "options": [
      {
        "text": "\\(x = 4, y = 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -4, y = 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 4, y = -2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -4, y = -2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Add the equations to eliminate \\( y \\).",
    "solution": "Add: \\( 4x = 16 \\Rightarrow x = 4, y = 2 \\).",
    "solutionSteps": [
      {
        "explanation": "Add the equations.",
        "workingOut": "4x = 16",
        "graphData": null
      },
      {
        "explanation": "Solve for x.",
        "workingOut": "x = 4",
        "graphData": null
      },
      {
        "explanation": "Find y: \\( 4 - 2y = 0 \\).",
        "workingOut": "y = 2",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "29897def37c00a48a4fba7eac17b33e7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve: \\( \\frac{x}{x + 2} = \\frac{3}{x + 4} \\)",
    "options": [
      {
        "text": "\\(x = -3, 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 3, 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -3, -2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 3, -2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Cross-multiply and solve the resulting quadratic.",
    "solution": "\\( x(x+4) = 3(x+2) \\Rightarrow x^2 + x - 6 = 0 \\Rightarrow (x+3)(x-2) = 0 \\)",
    "solutionSteps": [
      {
        "explanation": "Cross-multiply.",
        "workingOut": "x(x + 4) = 3(x + 2)",
        "graphData": null
      },
      {
        "explanation": "Expand.",
        "workingOut": "x^2 + 4x = 3x + 6",
        "graphData": null
      },
      {
        "explanation": "Rearrange.",
        "workingOut": "x^2 + x - 6 = 0",
        "graphData": null
      },
      {
        "explanation": "Factor.",
        "workingOut": "(x + 3)(x - 2) = 0",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "x = -3 \\text{ or } x = 2",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "2d5fef8b2d5d2d4c5a8b93f371299f80",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Solve \\(x^2 + 12x + 10 = 0\\) by completing the square.",
    "options": [
      {
        "text": "\\(-6 \\pm \\sqrt{10}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-12 \\pm \\sqrt{26}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-6 \\pm \\sqrt{26}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6 \\pm \\sqrt{26}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Add $(b/2)^2 = 36$.",
    "solution": "\\(x^2 + 12x + 36 = 26 \\Rightarrow (x+6)^2 = 26 \\Rightarrow x = -6 \\pm \\sqrt{26}\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Solve x^2 + 12x + 10 = 0 by completing the square.\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(x^2 + 12x + 36 = 26 \\Rightarrow (x+6)^2 = 26 \\Rightarrow x = -6 \\pm \\sqrt{26}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "316c644a1d05261ea3ec3b873ffbab94",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve the simultaneous equations:\\n\\( 2x + y = 7 \\)\\n\\( x - y = 2 \\)",
    "options": [
      {
        "text": "\\(x = 3, y = 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -3, y = 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 3, y = -1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -3, y = -1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Add the two equations to eliminate \\( y \\).",
    "solution": "Add: \\( 3x = 9 \\Rightarrow x = 3, y = 1 \\)",
    "solutionSteps": [
      {
        "explanation": "Add equations.",
        "workingOut": "3x = 9",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "x = 3",
        "graphData": null
      },
      {
        "explanation": "Find y.",
        "workingOut": "y = 7 - 2(3) = 1",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "3861404245232cfa6b5efbc01941e337",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Two numbers have a sum of 11 and a product of 28. Find the two numbers.",
    "options": [
      {
        "text": "\\(4 \\text{ \\text{ and } } 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4 \\text{ \\text{ and } } 7 + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4 \\text{ \\text{ and } } 7 - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4 \\text{ \\text{ and } } 7 + 3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Let one number be \\( x \\) and express the other in terms of \\( x \\).",
    "solution": "Let the numbers be \\( x \\) and \\( 11 - x \\). Then \\( x(11 - x) = 28 \\Rightarrow x^2 - 11x + 28 = 0 \\Rightarrow (x - 4)(x - 7) = 0 \\).",
    "solutionSteps": [
      {
        "explanation": "Set up.",
        "workingOut": "x + y = 11, \\quad xy = 28",
        "graphData": null
      },
      {
        "explanation": "Substitute \\( y = 11 - x \\).",
        "workingOut": "x(11 - x) = 28",
        "graphData": null
      },
      {
        "explanation": "Rearrange.",
        "workingOut": "x^2 - 11x + 28 = 0",
        "graphData": null
      },
      {
        "explanation": "Factor.",
        "workingOut": "(x - 4)(x - 7) = 0",
        "graphData": null
      },
      {
        "explanation": "Answer.",
        "workingOut": "\\text{The numbers are 4 and 7.}",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "3968c5630a4edb767635333d4122753b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve: \\( 2x^2 + 7x + 3 = 0 \\)",
    "options": [
      {
        "text": "\\(x = -3, -\\frac{1}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 3, -1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -3, 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 3, 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Factor the quadratic with leading coefficient 2.",
    "solution": "\\( (2x + 1)(x + 3) = 0 \\Rightarrow x = -3, -\\frac{1}{2} \\)",
    "solutionSteps": [
      {
        "explanation": "Factor.",
        "workingOut": "(2x + 1)(x + 3) = 0",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "x = -\\frac{1}{2} \\text{ or } x = -3",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "3a6520926a9d007ab799508f3215e2f2",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Factor: \\( 4a^2 - 25 \\)",
    "options": [
      {
        "text": "\\((2a - 5)(2a + 5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((2a + 5)(2a + 5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((2a - 5)(2a - 5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((2a + 5)(2a - 5)\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Write each term as a perfect square first.",
    "solution": "\\( 4a^2 - 25 = (2a)^2 - 5^2 = (2a - 5)(2a + 5) \\)",
    "solutionSteps": [
      {
        "explanation": "Express each term as a square.",
        "workingOut": "(2a)^2 - 5^2",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares formula.",
        "workingOut": "(2a - 5)(2a + 5)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "41b587abf81daca012bf2ff6936ba675",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve using the quadratic formula: \\( 5x^2 - 3x - 1 = 0 \\)",
    "options": [
      {
        "text": "\\(x = \\frac{3 \\pm \\sqrt{29}}{10}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{-3 \\pm \\sqrt{29}}{10}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{3 \\pm \\sqrt{31}}{12}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{3 \\pm \\sqrt{29}}{12}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Use the quadratic formula with \\( a = 5, b = -3, c = -1 \\).",
    "solution": "\\( x = \\frac{3 \\pm \\sqrt{9 + 20}}{10} = \\frac{3 \\pm \\sqrt{29}}{10} \\)",
    "solutionSteps": [
      {
        "explanation": "Identify coefficients.",
        "workingOut": "a = 5, \\quad b = -3, \\quad c = -1",
        "graphData": null
      },
      {
        "explanation": "Calculate discriminant.",
        "workingOut": "\\Delta = 9 + 20 = 29",
        "graphData": null
      },
      {
        "explanation": "Apply formula.",
        "workingOut": "x = \\frac{3 \\pm \\sqrt{29}}{10}",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "45b66e2403056802772c8fe691e2748e",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the value(s) of \\( k \\) such that \\( x^2 + kx + 9 = 0 \\) has equal roots.",
    "options": [
      {
        "text": "\\(k = \\pm 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = \\pm 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = \\pm 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = \\pm 6 + 3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Equal roots means \\( \\Delta = b^2 - 4ac = 0 \\).",
    "solution": "For equal roots, \\( \\Delta = 0 \\): \\( k^2 - 4(1)(9) = 0 \\Rightarrow k^2 = 36 \\Rightarrow k = \\pm 6 \\).",
    "solutionSteps": [
      {
        "explanation": "Set discriminant to zero.",
        "workingOut": "k^2 - 4(1)(9) = 0",
        "graphData": null
      },
      {
        "explanation": "Simplify.",
        "workingOut": "k^2 = 36",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "k = \\pm 6",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "469c57724e00c12c2743ef52c468ed7d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Simplify: \\( \\frac{x^2 - 4}{x + 2} \\)",
    "options": [
      {
        "text": "\\(x - 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x - 2 + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x  2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x - 2 - 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Factor the numerator as a difference of two squares.",
    "solution": "\\( \\frac{x^2 - 4}{x + 2} = \\frac{(x-2)(x+2)}{x+2} = x - 2 \\)",
    "solutionSteps": [
      {
        "explanation": "Factor the numerator.",
        "workingOut": "x^2 - 4 = (x - 2)(x + 2)",
        "graphData": null
      },
      {
        "explanation": "Cancel the common factor \\( (x + 2) \\).",
        "workingOut": "\\frac{(x-2)(x+2)}{x+2} = x - 2",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "53037202d8f048a474954093189ab340",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Simplify: \\( \\frac{5}{x + 2} - \\frac{3}{x + 4} \\)",
    "options": [
      {
        "text": "\\((2x + 14)/((x + 2)(x + 4))\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((2x - 14)/((x - 2)(x - 4))\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((2x + 14)/((x + 2)(x + 4)) + 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((2x + 14)/((x + 2)(x + 4)) + 3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Find a common denominator.",
    "solution": "\\( \\frac{5(x+4) - 3(x+2)}{(x+2)(x+4)} = \\frac{2x + 14}{(x+2)(x+4)} \\)",
    "solutionSteps": [
      {
        "explanation": "LCD is \\( (x+2)(x+4) \\).",
        "workingOut": "\\text{LCD} = (x+2)(x+4)",
        "graphData": null
      },
      {
        "explanation": "Expand.",
        "workingOut": "\\frac{5(x+4) - 3(x+2)}{(x+2)(x+4)} = \\frac{5x + 20 - 3x - 6}{(x+2)(x+4)}",
        "graphData": null
      },
      {
        "explanation": "Simplify.",
        "workingOut": "\\frac{2x + 14}{(x+2)(x+4)} = \\frac{2(x + 7)}{(x+2)(x+4)}",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "578d17d37b70f2fe289d13f6f8325920",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve the simultaneous equations:\\n\\( y = 2x + 1 \\)\\n\\( 3x + y = 11 \\)",
    "options": [
      {
        "text": "\\(x = 2, y = 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2, y = 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 2, y = -5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2, y = -5\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Substitute \\( y = 2x + 1 \\) into the second equation.",
    "solution": "\\( 3x + (2x + 1) = 11 \\Rightarrow 5x = 10 \\Rightarrow x = 2, y = 5 \\)",
    "solutionSteps": [
      {
        "explanation": "Substitute.",
        "workingOut": "3x + 2x + 1 = 11",
        "graphData": null
      },
      {
        "explanation": "Simplify.",
        "workingOut": "5x = 10 \\Rightarrow x = 2",
        "graphData": null
      },
      {
        "explanation": "Find y.",
        "workingOut": "y = 2(2) + 1 = 5",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "58147252bdc92d59f284c90760ee55c8",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve using the quadratic formula: \\( x^2 - 6x + 2 = 0 \\)",
    "options": [
      {
        "text": "\\(x = 3 \\pm \\sqrt{7}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 4 \\pm \\sqrt{8}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 2 \\pm \\sqrt{6}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 3 \\pm \\sqrt{7} + 3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Use \\( x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\).",
    "solution": "\\( x = \\frac{6 \\pm \\sqrt{36 - 8}}{2} = \\frac{6 \\pm \\sqrt{28}}{2} = 3 \\pm \\sqrt{7} \\)",
    "solutionSteps": [
      {
        "explanation": "Identify coefficients: \\( a=1, b=-6, c=2 \\).",
        "workingOut": "a = 1, \\quad b = -6, \\quad c = 2",
        "graphData": null
      },
      {
        "explanation": "Calculate the discriminant.",
        "workingOut": "\\Delta = 36 - 8 = 28",
        "graphData": null
      },
      {
        "explanation": "Apply the formula.",
        "workingOut": "x = \\frac{6 \\pm \\sqrt{28}}{2} = \\frac{6 \\pm 2\\sqrt{7}}{2} = 3 \\pm \\sqrt{7}",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "5aaf24ef22abd07f873ee231e0551c86",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Simplify: \\( \\frac{3}{x + 1} + \\frac{2}{x - 1} \\)",
    "options": [
      {
        "text": "\\((5x - 1)/((x + 1)(x - 1))\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((5x + 1)/((x + 1)(x + 1))\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((5x - 1)/((x - 1)(x - 1))\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((5x + 1)/((x - 1)(x - 1))\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Find a common denominator \\( (x+1)(x-1) \\).",
    "solution": "\\( \\frac{3(x-1) + 2(x+1)}{(x+1)(x-1)} = \\frac{5x - 1}{(x+1)(x-1)} \\)",
    "solutionSteps": [
      {
        "explanation": "Find the LCD: \\( (x+1)(x-1) \\).",
        "workingOut": "\\text{LCD} = (x+1)(x-1)",
        "graphData": null
      },
      {
        "explanation": "Rewrite each fraction.",
        "workingOut": "\\frac{3(x-1)}{(x+1)(x-1)} + \\frac{2(x+1)}{(x+1)(x-1)}",
        "graphData": null
      },
      {
        "explanation": "Expand and combine.",
        "workingOut": "\\frac{3x - 3 + 2x + 2}{(x+1)(x-1)} = \\frac{5x - 1}{(x+1)(x-1)}",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "5b3e3d6536e3c6d1fc6c8b72f1489c33",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Factor completely: \\( 2x^3 - 18x \\)",
    "options": [
      {
        "text": "\\(2x(x - 3)(x + 3)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2x(x + 3)(x + 3)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2x(x - 3)(x - 3)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2x(x + 3)(x - 3)\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Take out the common factor first, then use the difference of squares.",
    "solution": "\\( 2x(x^2 - 9) = 2x(x - 3)(x + 3) \\)",
    "solutionSteps": [
      {
        "explanation": "Factor out 2x.",
        "workingOut": "2x(x^2 - 9)",
        "graphData": null
      },
      {
        "explanation": "Apply difference of squares.",
        "workingOut": "2x(x - 3)(x + 3)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "5c949eea20fc545bbbfdd1b435a395b8",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve the simultaneous equations:\\n\\( y = x + 1 \\)\\n\\( x^2 + y^2 = 13 \\)",
    "options": [
      {
        "text": "\\(x = -3, y = -2 \\text{ \\text{ and } } x = 2, y = 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = --3, y = -2 \\text{ \\text{ and } } x = 2, y = -3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -3, y = -2 \\text{ \\text{ and } } x = 2, y = 3 + 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -3, y = -2 \\text{ \\text{ and } } x = 2, y = 3 + 3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Substitute \\( y = x + 1 \\) into the second equation.",
    "solution": "\\( x^2 + (x+1)^2 = 13 \\Rightarrow 2x^2 + 2x - 12 = 0 \\Rightarrow x^2 + x - 6 = 0 \\)",
    "solutionSteps": [
      {
        "explanation": "Substitute.",
        "workingOut": "x^2 + (x + 1)^2 = 13",
        "graphData": null
      },
      {
        "explanation": "Expand.",
        "workingOut": "x^2 + x^2 + 2x + 1 = 13 \\Rightarrow 2x^2 + 2x - 12 = 0",
        "graphData": null
      },
      {
        "explanation": "Simplify.",
        "workingOut": "x^2 + x - 6 = 0",
        "graphData": null
      },
      {
        "explanation": "Factor.",
        "workingOut": "(x + 3)(x - 2) = 0",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "x = -3, y = -2 \\quad \\text{or} \\quad x = 2, y = 3",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "6a3766a0fbc302aa01b76faedab8369f",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve: \\( 3x^2 + 2x - 5 = 0 \\)",
    "options": [
      {
        "text": "\\(x = 1, -\\frac{5}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -1, -5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 1, 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -1, 5\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Try factoring first. If not, use the quadratic formula.",
    "solution": "\\( (3x + 5)(x - 1) = 0 \\Rightarrow x = 1, -\\frac{5}{3} \\)",
    "solutionSteps": [
      {
        "explanation": "Factor.",
        "workingOut": "(3x + 5)(x - 1) = 0",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "x = 1 \\text{ or } x = -\\frac{5}{3}",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "70c2061c2fca226473cfbd8a030f1bd4",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve: \\( x^2 + 3x - 10 = 0 \\)",
    "options": [
      {
        "text": "\\(x = -5, 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 5, 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -5, -2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 5, -2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Find two numbers that multiply to -10 and add to 3.",
    "solution": "\\( (x+5)(x-2) = 0 \\Rightarrow x = -5, 2 \\)",
    "solutionSteps": [
      {
        "explanation": "Factor.",
        "workingOut": "(x + 5)(x - 2) = 0",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "x = -5, 2",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "72da63c396800c935a3742cbc67a0029",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A rectangle has area \\( 24 \\text{ cm}^2 \\) and perimeter \\( 22 \\text{ cm} \\). Find its dimensions.",
    "options": [
      {
        "text": "\\(3 cm \\times 8 cm\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3 cm \\times 8 cm + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3 cm \\times 8 cm - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3 cm \\times 8 cm + 3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Set up two equations using area and perimeter.",
    "solution": "Let length = \\( l \\), width = \\( w \\). \\( lw = 24 \\), \\( 2l + 2w = 22 \\Rightarrow l + w = 11 \\). So \\( w = 11 - l \\), \\( l(11 - l) = 24 \\Rightarrow l^2 - 11l + 24 = 0 \\Rightarrow (l - 3)(l - 8) = 0 \\).",
    "solutionSteps": [
      {
        "explanation": "Set up equations.",
        "workingOut": "lw = 24 \\quad \\text{and} \\quad l + w = 11",
        "graphData": null
      },
      {
        "explanation": "Substitute.",
        "workingOut": "l(11 - l) = 24",
        "graphData": null
      },
      {
        "explanation": "Rearrange.",
        "workingOut": "l^2 - 11l + 24 = 0",
        "graphData": null
      },
      {
        "explanation": "Factor.",
        "workingOut": "(l - 3)(l - 8) = 0",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "l = 3, w = 8 \\quad \\text{or} \\quad l = 8, w = 3",
        "graphData": null
      },
      {
        "explanation": "Answer.",
        "workingOut": "\\text{Dimensions: } 3 \\text{ cm} \\times 8 \\text{ cm}",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "7aa46455cd7b1b00e9a66f644444a2a1",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Solve \\(x^2 - 4x = 11\\) by completing the square.",
    "options": [
      {
        "text": "\\(2 \\pm \\sqrt{11}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-2 \\pm \\sqrt{15}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2 \\pm \\sqrt{15}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4 \\pm \\sqrt{15}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Add $(b/2)^2 = 4$.",
    "solution": "\\(x^2 - 4x + 4 = 15 \\Rightarrow (x-2)^2 = 15 \\Rightarrow x = 2 \\pm \\sqrt{15}\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Solve x^2 - 4x = 11 by completing the square.\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(x^2 - 4x + 4 = 15 \\Rightarrow (x-2)^2 = 15 \\Rightarrow x = 2 \\pm \\sqrt{15}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "82385ffcefb4b46570ad4c7ae7639e2c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Simplify: \\( \\frac{x^2 - 9}{x^2 - x - 6} \\)",
    "options": [
      {
        "text": "\\(\\frac{x + 3}{x + 2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x - 3}{x - 2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x + 3}{x + 2} + 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x + 3}{x + 2} + 3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Factor both the numerator and denominator.",
    "solution": "\\( \\frac{(x-3)(x+3)}{(x-3)(x+2)} = \\frac{x+3}{x+2} \\)",
    "solutionSteps": [
      {
        "explanation": "Factor the numerator.",
        "workingOut": "x^2 - 9 = (x - 3)(x + 3)",
        "graphData": null
      },
      {
        "explanation": "Factor the denominator.",
        "workingOut": "x^2 - x - 6 = (x - 3)(x + 2)",
        "graphData": null
      },
      {
        "explanation": "Cancel the common factor \\( (x-3) \\).",
        "workingOut": "\\frac{x + 3}{x + 2}",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "8deb039ae1b458643459bfda4b399f5a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve: \\( x^2 - 5x + 6 = 0 \\)",
    "options": [
      {
        "text": "\\(x = 2, 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2, 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 2, -3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2, -3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Factor the quadratic.",
    "solution": "\\( (x-2)(x-3) = 0 \\Rightarrow x = 2, 3 \\)",
    "solutionSteps": [
      {
        "explanation": "Factor.",
        "workingOut": "(x - 2)(x - 3) = 0",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "x = 2 \\text{ or } x = 3",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "8df9bc6027880306a76b3e5f623ec60c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Solve \\(x^2 + 6x = 5\\) by completing the square.",
    "options": [
      {
        "text": "\\(3 \\pm \\sqrt{14}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-3 \\pm \\sqrt{5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-3 \\pm \\sqrt{14}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-6 \\pm \\sqrt{14}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Add $(b/2)^2 = 9$ to both sides.",
    "solution": "\\(x^2 + 6x + 9 = 14 \\Rightarrow (x+3)^2 = 14 \\Rightarrow x = -3 \\pm \\sqrt{14}\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Solve x^2 + 6x = 5 by completing the square.\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(x^2 + 6x + 9 = 14 \\Rightarrow (x+3)^2 = 14 \\Rightarrow x = -3 \\pm \\sqrt{14}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "8e255461b5cb152124f6fa334ce970d0",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Factor: \\( x^2 + 7x + 12 \\)",
    "options": [
      {
        "text": "\\((x + 3)(x + 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x - 3)(x - 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x + 3)(x + 4) + 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x + 3)(x + 4) + 3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Find two numbers that multiply to 12 and add to 7.",
    "solution": "\\( x^2 + 7x + 12 = (x + 3)(x + 4) \\)",
    "solutionSteps": [
      {
        "explanation": "Find two numbers whose product is 12 and sum is 7: 3 and 4.",
        "workingOut": "3 \\times 4 = 12, \\quad 3 + 4 = 7",
        "graphData": null
      },
      {
        "explanation": "Write the factored form.",
        "workingOut": "(x + 3)(x + 4)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "8fe204292b3eb597966dd9927308c371",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Factor: \\( 3x^2 - 11x - 4 \\)",
    "options": [
      {
        "text": "\\((3x + 1)(x - 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((3x + 1)(x + 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((3x - 1)(x - 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((3x + 1)(x - 4) + 3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Find two numbers that multiply to \\( 3 \\times (-4) = -12 \\) and add to -11.",
    "solution": "\\( 3x^2 - 11x - 4 = (3x + 1)(x - 4) \\)",
    "solutionSteps": [
      {
        "explanation": "Find two numbers with product -12 and sum -11: -12 and 1.",
        "workingOut": "-12 \\times 1 = -12, \\quad -12 + 1 = -11",
        "graphData": null
      },
      {
        "explanation": "Split the middle term.",
        "workingOut": "3x^2 - 12x + x - 4 = 3x(x - 4) + 1(x - 4)",
        "graphData": null
      },
      {
        "explanation": "Factor.",
        "workingOut": "(3x + 1)(x - 4)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "993af9d3605e38d0749ea1f3d561bf68",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Solve \\(x^2 - 8x + 4 = 0\\) by completing the square.",
    "options": [
      {
        "text": "\\(-4 \\pm 2\\sqrt{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4 \\pm 2\\sqrt{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4 \\pm \\sqrt{12}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8 \\pm 2\\sqrt{3}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Add $(b/2)^2 = 16$ after moving constant.",
    "solution": "\\(x^2 - 8x + 16 = 12 \\Rightarrow (x-4)^2 = 12 \\Rightarrow x = 4 \\pm \\sqrt{12} = 4 \\pm 2\\sqrt{3}\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Solve x^2 - 8x + 4 = 0 by completing the square.\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(x^2 - 8x + 16 = 12 \\Rightarrow (x-4)^2 = 12 \\Rightarrow x = 4 \\pm \\sqrt{12} = 4 \\pm 2\\sqrt{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "9a235c7d045de31b3b184769dfe862e6",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Factor: \\( x^3 - 8 \\)",
    "options": [
      {
        "text": "\\((x - 2)(x^2 + 2x + 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x + 2)(x^2 + 2x + 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x - 2)(x^2 - 2x - 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x + 2)(x^2 - 2x + 4)\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Use the difference of cubes formula: \\( a^3 - b^3 = (a - b)(a^2 + ab + b^2) \\).",
    "solution": "\\( x^3 - 8 = (x - 2)(x^2 + 2x + 4) \\)",
    "solutionSteps": [
      {
        "explanation": "Identify \\( a = x, b = 2 \\) since \\( 8 = 2^3 \\).",
        "workingOut": "x^3 - 2^3",
        "graphData": null
      },
      {
        "explanation": "Apply the formula \\( a^3 - b^3 = (a-b)(a^2+ab+b^2) \\).",
        "workingOut": "(x - 2)(x^2 + 2x + 4)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "a0ad87daccd6c3b2e3fa255b9709c93f",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Factor: \\( 2x^2 + 5x + 3 \\)",
    "options": [
      {
        "text": "\\((2x + 3)(x + 1)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((2x - 3)(x - 1)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((2x + 3)(x + 1) + 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((2x + 3)(x + 1) + 3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "For \\( ax^2 + bx + c \\), find two numbers that multiply to \\( ac = 6 \\) and add to 5.",
    "solution": "\\( 2x^2 + 5x + 3 = (2x + 3)(x + 1) \\)",
    "solutionSteps": [
      {
        "explanation": "Find two numbers with product \\( 2 \\times 3 = 6 \\) and sum 5: 2 and 3.",
        "workingOut": "2 \\times 3 = 6, \\quad 2 + 3 = 5",
        "graphData": null
      },
      {
        "explanation": "Split the middle term and group.",
        "workingOut": "2x^2 + 2x + 3x + 3 = 2x(x + 1) + 3(x + 1)",
        "graphData": null
      },
      {
        "explanation": "Factor out the common binomial.",
        "workingOut": "(2x + 3)(x + 1)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "b2def30b1f7337611a5ceb7012758200",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Simplify: \\( \\frac{x^2 + 5x + 6}{x^2 + 3x + 2} \\div \\frac{x + 3}{x + 1} \\)",
    "options": [
      {
        "text": "\\(1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1 + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1 - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1 + 3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Flip the divisor and multiply. Factor everything first.",
    "solution": "\\( \\frac{(x+2)(x+3)}{(x+1)(x+2)} \\times \\frac{x+1}{x+3} = 1 \\)",
    "solutionSteps": [
      {
        "explanation": "Factor everything.",
        "workingOut": "\\frac{(x+2)(x+3)}{(x+1)(x+2)} \\times \\frac{x+1}{x+3}",
        "graphData": null
      },
      {
        "explanation": "Cancel common factors.",
        "workingOut": "\\frac{\\cancel{(x+2)}\\cancel{(x+3)}}{\\cancel{(x+1)}\\cancel{(x+2)}} \\times \\frac{\\cancel{(x+1)}}{\\cancel{(x+3)}} = 1",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "bab7a4c4fa4f3a76cb3413888cf8fa7f",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve the simultaneous equations:\\n\\( 3x + 2y = 12 \\)\\n\\( x + 2y = 8 \\)",
    "options": [
      {
        "text": "\\(x = 2, y = 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2, y = 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 2, y = -3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2, y = -3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Subtract the second equation from the first.",
    "solution": "Subtract: \\( 2x = 4 \\Rightarrow x = 2 \\), then \\( y = 3 \\).",
    "solutionSteps": [
      {
        "explanation": "Subtract.",
        "workingOut": "(3x + 2y) - (x + 2y) = 12 - 8 \\Rightarrow 2x = 4",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "x = 2",
        "graphData": null
      },
      {
        "explanation": "Find y.",
        "workingOut": "2 + 2y = 8 \\Rightarrow y = 3",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "bf64dfbabcdddbd2f3536781c189b76f",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Factor: \\( x^2 - 5x - 14 \\)",
    "options": [
      {
        "text": "\\((x - 7)(x + 2)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x + 7)(x + 2)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x - 7)(x - 2)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x + 7)(x - 2)\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Find two numbers that multiply to -14 and add to -5.",
    "solution": "\\( x^2 - 5x - 14 = (x - 7)(x + 2) \\)",
    "solutionSteps": [
      {
        "explanation": "Find factors of -14 that sum to -5: -7 and 2.",
        "workingOut": "-7 \\times 2 = -14, \\quad -7 + 2 = -5",
        "graphData": null
      },
      {
        "explanation": "Write the factored form.",
        "workingOut": "(x - 7)(x + 2)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "c63d4b982201c4f837f6848fff919cf0",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Simplify: \\( \\frac{2x}{x - 3} \\times \\frac{x^2 - 9}{4x^2} \\)",
    "options": [
      {
        "text": "\\(\\frac{x + 3}{2x}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x - 3}{2x}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x + 3}{2x} + 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x + 3}{2x} + 3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Factor and cancel common factors before multiplying.",
    "solution": "\\( \\frac{2x}{x-3} \\times \\frac{(x-3)(x+3)}{4x^2} = \\frac{x+3}{2x} \\)",
    "solutionSteps": [
      {
        "explanation": "Factor \\( x^2 - 9 \\).",
        "workingOut": "x^2 - 9 = (x-3)(x+3)",
        "graphData": null
      },
      {
        "explanation": "Cancel \\( (x-3) \\) and \\( 2x \\).",
        "workingOut": "\\frac{2x \\cdot (x-3)(x+3)}{(x-3) \\cdot 4x^2} = \\frac{x+3}{2x}",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "c73e70f580b6918f3c239cc9fbb99496",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve the simultaneous equations:\\n\\( 4x + 3y = 11 \\)\\n\\( 3x + 2y = 8 \\)",
    "options": [
      {
        "text": "\\(x = 2, y = 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2, y = 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 2, y = -1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2, y = -1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Use elimination by making coefficients of \\( y \\) equal.",
    "solution": "Multiply first by 2 and second by 3 to eliminate y: \\( 8x + 6y = 22, 9x + 6y = 24 \\), subtract: \\( x = 2, y = 1 \\).",
    "solutionSteps": [
      {
        "explanation": "Multiply equation 1 by 2.",
        "workingOut": "8x + 6y = 22",
        "graphData": null
      },
      {
        "explanation": "Multiply equation 2 by 3.",
        "workingOut": "9x + 6y = 24",
        "graphData": null
      },
      {
        "explanation": "Subtract.",
        "workingOut": "x = 2",
        "graphData": null
      },
      {
        "explanation": "Substitute back.",
        "workingOut": "3(2) + 2y = 8 \\Rightarrow y = 1",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "c7b5c47b38ddc174bd1f2a1d35debff8",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the discriminant of \\( 2x^2 - 5x + 1 = 0 \\) and state the nature of the roots.",
    "options": [
      {
        "text": "\\(17; two distinct irrational roots\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(17; two distinct irrational roots + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(17; two distinct irrational roots - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(17; two distinct irrational roots + 3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Use \\( \\Delta = b^2 - 4ac \\).",
    "solution": "\\( \\Delta = (-5)^2 - 4(2)(1) = 25 - 8 = 17 > 0 \\), so two distinct real roots.",
    "solutionSteps": [
      {
        "explanation": "Identify coefficients.",
        "workingOut": "a = 2, b = -5, c = 1",
        "graphData": null
      },
      {
        "explanation": "Calculate.",
        "workingOut": "\\Delta = 25 - 8 = 17",
        "graphData": null
      },
      {
        "explanation": "Interpret.",
        "workingOut": "\\Delta > 0 \\text{ and not a perfect square, so two distinct irrational roots}",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "e1ec0aca96c562a5acfb6fc027a8a99f",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve the simultaneous equations:\\n\\( 2x + 3y = 13 \\)\\n\\( 5x - 3y = 1 \\)",
    "options": [
      {
        "text": "\\(x = 2, y = 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2, y = 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 2, y = -3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2, y = -3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Add the equations to eliminate \\( y \\).",
    "solution": "Add: \\( 7x = 14 \\Rightarrow x = 2 \\), then \\( 2(2) + 3y = 13 \\Rightarrow y = 3 \\).",
    "solutionSteps": [
      {
        "explanation": "Add equations to eliminate y.",
        "workingOut": "7x = 14",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "x = 2",
        "graphData": null
      },
      {
        "explanation": "Substitute back.",
        "workingOut": "4 + 3y = 13 \\Rightarrow y = 3",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "e6884c695333476b98b1d4f8ca987a07",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Simplify: \\( \\frac{6x^2 - x - 2}{3x - 2} \\)",
    "options": [
      {
        "text": "\\(2x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2x + 1 + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2x + 1 - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2x + 1 + 3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Factor the numerator, then cancel.",
    "solution": "\\( \\frac{(3x - 2)(2x + 1)}{3x - 2} = 2x + 1 \\)",
    "solutionSteps": [
      {
        "explanation": "Factor the numerator: \\( 6x^2 - x - 2 \\).",
        "workingOut": "(3x - 2)(2x + 1)",
        "graphData": null
      },
      {
        "explanation": "Cancel the common factor.",
        "workingOut": "\\frac{(3x-2)(2x+1)}{3x-2} = 2x + 1",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "f57c3a5d3098026b92e3543a344b41ac",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Factor: \\( x^2 - 9 \\)",
    "options": [
      {
        "text": "\\((x - 3)(x + 3)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x + 3)(x + 3)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x - 3)(x - 3)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x + 3)(x - 3)\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Recognise this as a difference of two squares \\( a^2 - b^2 = (a-b)(a+b) \\).",
    "solution": "\\( x^2 - 9 = (x - 3)(x + 3) \\)",
    "solutionSteps": [
      {
        "explanation": "Identify as a difference of two squares where \\( a = x \\) and \\( b = 3 \\).",
        "workingOut": "x^2 - 9 = x^2 - 3^2",
        "graphData": null
      },
      {
        "explanation": "Apply the formula \\( a^2 - b^2 = (a-b)(a+b) \\).",
        "workingOut": "(x - 3)(x + 3)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Factor completely: \\( (3x + 4)^2 - (2x + 6)^2 \\)",
    "options": [
      {
        "text": "\\((5x + 10)(1x - 2)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((5x - 10)(1x - 2)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((5x + 10)(1x + 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((3x + 4)(2x + 6)\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Apply the difference of squares identity: \\( A^2 - B^2 = (A - B)(A + B) \\).",
    "solution": "\\( ((3x + 4) - (2x + 6))((3x + 4) + (2x + 6)) = (1x - 2)(5x + 10) \\)",
    "solutionSteps": [
      {
        "explanation": "Identify the terms for the difference of squares identity.",
        "workingOut": "\\(A = 3x + 4, \\quad B = 2x + 6\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the factorization \\( (A - B)(A + B) \\).",
        "workingOut": "\\(((3x + 4) - (2x + 6))((3x + 4) + (2x + 6))\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms inside each pair of brackets.",
        "workingOut": "\\((1x - 2)(5x + 10)\\)",
        "graphData": null
      }
    ],
    "t": "Algebraic factoring",
    "id": "y11-1f-h1"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Factor completely: \\( (4x + 5)^2 - (3x + 7)^2 \\)",
    "options": [
      {
        "text": "\\((7x + 12)(1x - 2)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((7x - 12)(1x - 2)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((7x + 12)(1x + 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((4x + 5)(3x + 7)\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Apply the difference of squares identity: \\( A^2 - B^2 = (A - B)(A + B) \\).",
    "solution": "\\( ((4x + 5) - (3x + 7))((4x + 5) + (3x + 7)) = (1x - 2)(7x + 12) \\)",
    "solutionSteps": [
      {
        "explanation": "Identify the terms for the difference of squares identity.",
        "workingOut": "\\(A = 4x + 5, \\quad B = 3x + 7\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the factorization \\( (A - B)(A + B) \\).",
        "workingOut": "\\(((4x + 5) - (3x + 7))((4x + 5) + (3x + 7))\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms inside each pair of brackets.",
        "workingOut": "\\((1x - 2)(7x + 12)\\)",
        "graphData": null
      }
    ],
    "t": "Algebraic factoring",
    "id": "y11-1f-h2"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Factor completely: \\( (5x + 6)^2 - (4x + 8)^2 \\)",
    "options": [
      {
        "text": "\\((9x + 14)(1x - 2)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((9x - 14)(1x - 2)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((9x + 14)(1x + 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((5x + 6)(4x + 8)\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Apply the difference of squares identity: \\( A^2 - B^2 = (A - B)(A + B) \\).",
    "solution": "\\( ((5x + 6) - (4x + 8))((5x + 6) + (4x + 8)) = (1x - 2)(9x + 14) \\)",
    "solutionSteps": [
      {
        "explanation": "Identify the terms for the difference of squares identity.",
        "workingOut": "\\(A = 5x + 6, \\quad B = 4x + 8\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the factorization \\( (A - B)(A + B) \\).",
        "workingOut": "\\(((5x + 6) - (4x + 8))((5x + 6) + (4x + 8))\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms inside each pair of brackets.",
        "workingOut": "\\((1x - 2)(9x + 14)\\)",
        "graphData": null
      }
    ],
    "t": "Algebraic factoring",
    "id": "y11-1f-h3"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Factor completely: \\( (6x + 7)^2 - (5x + 9)^2 \\)",
    "options": [
      {
        "text": "\\((11x + 16)(1x - 2)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((11x - 16)(1x - 2)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((11x + 16)(1x + 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((6x + 7)(5x + 9)\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Apply the difference of squares identity: \\( A^2 - B^2 = (A - B)(A + B) \\).",
    "solution": "\\( ((6x + 7) - (5x + 9))((6x + 7) + (5x + 9)) = (1x - 2)(11x + 16) \\)",
    "solutionSteps": [
      {
        "explanation": "Identify the terms for the difference of squares identity.",
        "workingOut": "\\(A = 6x + 7, \\quad B = 5x + 9\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the factorization \\( (A - B)(A + B) \\).",
        "workingOut": "\\(((6x + 7) - (5x + 9))((6x + 7) + (5x + 9))\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms inside each pair of brackets.",
        "workingOut": "\\((1x - 2)(11x + 16)\\)",
        "graphData": null
      }
    ],
    "t": "Algebraic factoring",
    "id": "y11-1f-h4"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Factor completely by grouping: \\( x^3 + 3x^2 - 4x - 12 \\)",
    "options": [
      {
        "text": "\\((x + 3)(x - 2)(x + 2)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x - 3)(x^2 - 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x + 3)(x^2 + 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x + 3)(x - 4)(x + 1)\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Group the terms as \\( (x^3 + ax^2) - (bx + ab) \\) and factor out common terms.",
    "solution": "\\( x^2(x + 3) - 4(x + 3) = (x^2 - 4)(x + 3) = (x + 3)(x - 2)(x + 2) \\)",
    "solutionSteps": [
      {
        "explanation": "Group the polynomial into two pairs.",
        "workingOut": "\\((x^3 + 3x^2) - (4x + 12)\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out the greatest common divisor from each pair.",
        "workingOut": "\\(x^2(x + 3) - 4(x + 3)\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out the common binomial and expand the difference of squares.",
        "workingOut": "\\((x + 3)(x^2 - 4) = (x + 3)(x - 2)(x + 2)\\)",
        "graphData": null
      }
    ],
    "t": "Factoring by grouping",
    "id": "y11-1f-h5"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Factor completely by grouping: \\( x^3 + 4x^2 - 9x - 36 \\)",
    "options": [
      {
        "text": "\\((x + 4)(x - 3)(x + 3)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x - 4)(x^2 - 9)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x + 4)(x^2 + 9)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x + 4)(x - 9)(x + 1)\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Group the terms as \\( (x^3 + ax^2) - (bx + ab) \\) and factor out common terms.",
    "solution": "\\( x^2(x + 4) - 9(x + 4) = (x^2 - 9)(x + 4) = (x + 4)(x - 3)(x + 3) \\)",
    "solutionSteps": [
      {
        "explanation": "Group the polynomial into two pairs.",
        "workingOut": "\\((x^3 + 4x^2) - (9x + 36)\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out the greatest common divisor from each pair.",
        "workingOut": "\\(x^2(x + 4) - 9(x + 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out the common binomial and expand the difference of squares.",
        "workingOut": "\\((x + 4)(x^2 - 9) = (x + 4)(x - 3)(x + 3)\\)",
        "graphData": null
      }
    ],
    "t": "Factoring by grouping",
    "id": "y11-1f-h6"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Factor completely by grouping: \\( x^3 + 5x^2 - 16x - 80 \\)",
    "options": [
      {
        "text": "\\((x + 5)(x - 4)(x + 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x - 5)(x^2 - 16)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x + 5)(x^2 + 16)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x + 5)(x - 16)(x + 1)\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Group the terms as \\( (x^3 + ax^2) - (bx + ab) \\) and factor out common terms.",
    "solution": "\\( x^2(x + 5) - 16(x + 5) = (x^2 - 16)(x + 5) = (x + 5)(x - 4)(x + 4) \\)",
    "solutionSteps": [
      {
        "explanation": "Group the polynomial into two pairs.",
        "workingOut": "\\((x^3 + 5x^2) - (16x + 80)\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out the greatest common divisor from each pair.",
        "workingOut": "\\(x^2(x + 5) - 16(x + 5)\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out the common binomial and expand the difference of squares.",
        "workingOut": "\\((x + 5)(x^2 - 16) = (x + 5)(x - 4)(x + 4)\\)",
        "graphData": null
      }
    ],
    "t": "Factoring by grouping",
    "id": "y11-1f-h7"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Factor completely by grouping: \\( x^3 + 6x^2 - 25x - 150 \\)",
    "options": [
      {
        "text": "\\((x + 6)(x - 5)(x + 5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x - 6)(x^2 - 25)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x + 6)(x^2 + 25)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x + 6)(x - 25)(x + 1)\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Group the terms as \\( (x^3 + ax^2) - (bx + ab) \\) and factor out common terms.",
    "solution": "\\( x^2(x + 6) - 25(x + 6) = (x^2 - 25)(x + 6) = (x + 6)(x - 5)(x + 5) \\)",
    "solutionSteps": [
      {
        "explanation": "Group the polynomial into two pairs.",
        "workingOut": "\\((x^3 + 6x^2) - (25x + 150)\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out the greatest common divisor from each pair.",
        "workingOut": "\\(x^2(x + 6) - 25(x + 6)\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out the common binomial and expand the difference of squares.",
        "workingOut": "\\((x + 6)(x^2 - 25) = (x + 6)(x - 5)(x + 5)\\)",
        "graphData": null
      }
    ],
    "t": "Factoring by grouping",
    "id": "y11-1f-h8"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Factor: \\( 8x^3 + 27 \\)",
    "options": [
      {
        "text": "\\((2x + 3)(4x^2 - 6x + 9)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((2x - 3)(4x^2 + 6x + 9)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((2x + 3)^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((2x + 3)(4x^2 - 12x + 9)\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Use the sum of cubes formula: \\( A^3 + B^3 = (A + B)(A^2 - AB + B^2) \\).",
    "solution": "\\( (2x)^3 + 3^3 = (2x + 3)((2x)^2 - (2x)(3) + 3^2) = (2x + 3)(4x^2 - 6x + 9) \\)",
    "solutionSteps": [
      {
        "explanation": "Identify the cube roots of each term.",
        "workingOut": "\\(A = 2x, \\quad B = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum of cubes identity.",
        "workingOut": "\\((2x + 3)((2x)^2 - (2x)(3) + 3^2)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms inside the quadratic factor.",
        "workingOut": "\\((2x + 3)(4x^2 - 6x + 9)\\)",
        "graphData": null
      }
    ],
    "t": "Sum of cubes",
    "id": "y11-1f-h9"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Factor: \\( 27x^3 + 64 \\)",
    "options": [
      {
        "text": "\\((3x + 4)(9x^2 - 12x + 16)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((3x - 4)(9x^2 + 12x + 16)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((3x + 4)^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((3x + 4)(9x^2 - 24x + 16)\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Use the sum of cubes formula: \\( A^3 + B^3 = (A + B)(A^2 - AB + B^2) \\).",
    "solution": "\\( (3x)^3 + 4^3 = (3x + 4)((3x)^2 - (3x)(4) + 4^2) = (3x + 4)(9x^2 - 12x + 16) \\)",
    "solutionSteps": [
      {
        "explanation": "Identify the cube roots of each term.",
        "workingOut": "\\(A = 3x, \\quad B = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum of cubes identity.",
        "workingOut": "\\((3x + 4)((3x)^2 - (3x)(4) + 4^2)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms inside the quadratic factor.",
        "workingOut": "\\((3x + 4)(9x^2 - 12x + 16)\\)",
        "graphData": null
      }
    ],
    "t": "Sum of cubes",
    "id": "y11-1f-h10"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Factor: \\( 64x^3 + 125 \\)",
    "options": [
      {
        "text": "\\((4x + 5)(16x^2 - 20x + 25)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((4x - 5)(16x^2 + 20x + 25)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((4x + 5)^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((4x + 5)(16x^2 - 40x + 25)\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Use the sum of cubes formula: \\( A^3 + B^3 = (A + B)(A^2 - AB + B^2) \\).",
    "solution": "\\( (4x)^3 + 5^3 = (4x + 5)((4x)^2 - (4x)(5) + 5^2) = (4x + 5)(16x^2 - 20x + 25) \\)",
    "solutionSteps": [
      {
        "explanation": "Identify the cube roots of each term.",
        "workingOut": "\\(A = 4x, \\quad B = 5\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum of cubes identity.",
        "workingOut": "\\((4x + 5)((4x)^2 - (4x)(5) + 5^2)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms inside the quadratic factor.",
        "workingOut": "\\((4x + 5)(16x^2 - 20x + 25)\\)",
        "graphData": null
      }
    ],
    "t": "Sum of cubes",
    "id": "y11-1f-h11"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Factor: \\( 125x^3 + 216 \\)",
    "options": [
      {
        "text": "\\((5x + 6)(25x^2 - 30x + 36)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((5x - 6)(25x^2 + 30x + 36)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((5x + 6)^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((5x + 6)(25x^2 - 60x + 36)\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Use the sum of cubes formula: \\( A^3 + B^3 = (A + B)(A^2 - AB + B^2) \\).",
    "solution": "\\( (5x)^3 + 6^3 = (5x + 6)((5x)^2 - (5x)(6) + 6^2) = (5x + 6)(25x^2 - 30x + 36) \\)",
    "solutionSteps": [
      {
        "explanation": "Identify the cube roots of each term.",
        "workingOut": "\\(A = 5x, \\quad B = 6\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum of cubes identity.",
        "workingOut": "\\((5x + 6)((5x)^2 - (5x)(6) + 6^2)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms inside the quadratic factor.",
        "workingOut": "\\((5x + 6)(25x^2 - 30x + 36)\\)",
        "graphData": null
      }
    ],
    "t": "Sum of cubes",
    "id": "y11-1f-h12"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Factor: \\( x^4 - 5x^2 + 6 \\)",
    "options": [
      {
        "text": "\\((x^2 - 2)(x^2 - 3)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x^2 + 2)(x^2 + 3)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x - 2)(x - 3)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x^2 - 5)(x^2 - 1)\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Substitute \\( u = x^2 \\) to convert the quartic trinomial into a standard quadratic.",
    "solution": "\\( u = x^2 \\Rightarrow u^2 - 5u + 6 = (u - 2)(u - 3) = (x^2 - 2)(x^2 - 3) \\)",
    "solutionSteps": [
      {
        "explanation": "Let \\( u = x^2 \\) and rewrite the expression.",
        "workingOut": "\\(u^2 - 5u + 6\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the quadratic trinomial in terms of \\( u \\).",
        "workingOut": "\\((u - 2)(u - 3)\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\( x^2 \\) back in place of \\( u \\).",
        "workingOut": "\\((x^2 - 2)(x^2 - 3)\\)",
        "graphData": null
      }
    ],
    "t": "Quartic trinomials",
    "id": "y11-1f-h13"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Factor: \\( x^4 - 7x^2 + 12 \\)",
    "options": [
      {
        "text": "\\((x^2 - 3)(x^2 - 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x^2 + 3)(x^2 + 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x - 3)(x - 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x^2 - 7)(x^2 - 1)\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Substitute \\( u = x^2 \\) to convert the quartic trinomial into a standard quadratic.",
    "solution": "\\( u = x^2 \\Rightarrow u^2 - 7u + 12 = (u - 3)(u - 4) = (x^2 - 3)(x^2 - 4) \\)",
    "solutionSteps": [
      {
        "explanation": "Let \\( u = x^2 \\) and rewrite the expression.",
        "workingOut": "\\(u^2 - 7u + 12\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the quadratic trinomial in terms of \\( u \\).",
        "workingOut": "\\((u - 3)(u - 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\( x^2 \\) back in place of \\( u \\).",
        "workingOut": "\\((x^2 - 3)(x^2 - 4)\\)",
        "graphData": null
      }
    ],
    "t": "Quartic trinomials",
    "id": "y11-1f-h14"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Factor: \\( x^4 - 9x^2 + 20 \\)",
    "options": [
      {
        "text": "\\((x^2 - 4)(x^2 - 5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x^2 + 4)(x^2 + 5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x - 4)(x - 5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x^2 - 9)(x^2 - 1)\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Substitute \\( u = x^2 \\) to convert the quartic trinomial into a standard quadratic.",
    "solution": "\\( u = x^2 \\Rightarrow u^2 - 9u + 20 = (u - 4)(u - 5) = (x^2 - 4)(x^2 - 5) \\)",
    "solutionSteps": [
      {
        "explanation": "Let \\( u = x^2 \\) and rewrite the expression.",
        "workingOut": "\\(u^2 - 9u + 20\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the quadratic trinomial in terms of \\( u \\).",
        "workingOut": "\\((u - 4)(u - 5)\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\( x^2 \\) back in place of \\( u \\).",
        "workingOut": "\\((x^2 - 4)(x^2 - 5)\\)",
        "graphData": null
      }
    ],
    "t": "Quartic trinomials",
    "id": "y11-1f-h15"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Factor: \\( x^4 - 11x^2 + 30 \\)",
    "options": [
      {
        "text": "\\((x^2 - 5)(x^2 - 6)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x^2 + 5)(x^2 + 6)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x - 5)(x - 6)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x^2 - 11)(x^2 - 1)\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Substitute \\( u = x^2 \\) to convert the quartic trinomial into a standard quadratic.",
    "solution": "\\( u = x^2 \\Rightarrow u^2 - 11u + 30 = (u - 5)(u - 6) = (x^2 - 5)(x^2 - 6) \\)",
    "solutionSteps": [
      {
        "explanation": "Let \\( u = x^2 \\) and rewrite the expression.",
        "workingOut": "\\(u^2 - 11u + 30\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the quadratic trinomial in terms of \\( u \\).",
        "workingOut": "\\((u - 5)(u - 6)\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\( x^2 \\) back in place of \\( u \\).",
        "workingOut": "\\((x^2 - 5)(x^2 - 6)\\)",
        "graphData": null
      }
    ],
    "t": "Quartic trinomials",
    "id": "y11-1f-h16"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Factor completely using the Sophie Germain identity: \\( x^4 + 64 \\)",
    "options": [
      {
        "text": "\\((x^2 - 4x + 8)(x^2 + 4x + 8)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x^2 - 4x - 8)(x^2 + 4x - 8)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x^2 + 32)^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x^2 - 32)^2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Add and subtract \\( 4a^2x^2 \\) to complete the square, then apply the difference of squares.",
    "solution": "\\( x^4 + 4a^4 = (x^2 + 2a^2)^2 - 4a^2x^2 = (x^2 - 2ax + 2a^2)(x^2 + 2ax + 2a^2) \\)",
    "solutionSteps": [
      {
        "explanation": "Add and subtract a term to complete the perfect square.",
        "workingOut": "\\((x^4 + 64 + 16x^2) - 16x^2\\)",
        "graphData": null
      },
      {
        "explanation": "Write the first part as a binomial squared.",
        "workingOut": "\\((x^2 + 8)^2 - (4x)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity to factorize.",
        "workingOut": "\\((x^2 - 4x + 8)(x^2 + 4x + 8)\\)",
        "graphData": null
      }
    ],
    "t": "Sophie Germain identity",
    "id": "y11-1f-h17"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Factor completely using the Sophie Germain identity: \\( x^4 + 324 \\)",
    "options": [
      {
        "text": "\\((x^2 - 6x + 18)(x^2 + 6x + 18)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x^2 - 6x - 18)(x^2 + 6x - 18)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x^2 + 162)^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x^2 - 162)^2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Add and subtract \\( 4a^2x^2 \\) to complete the square, then apply the difference of squares.",
    "solution": "\\( x^4 + 4a^4 = (x^2 + 2a^2)^2 - 4a^2x^2 = (x^2 - 2ax + 2a^2)(x^2 + 2ax + 2a^2) \\)",
    "solutionSteps": [
      {
        "explanation": "Add and subtract a term to complete the perfect square.",
        "workingOut": "\\((x^4 + 324 + 36x^2) - 36x^2\\)",
        "graphData": null
      },
      {
        "explanation": "Write the first part as a binomial squared.",
        "workingOut": "\\((x^2 + 18)^2 - (6x)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity to factorize.",
        "workingOut": "\\((x^2 - 6x + 18)(x^2 + 6x + 18)\\)",
        "graphData": null
      }
    ],
    "t": "Sophie Germain identity",
    "id": "y11-1f-h18"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Factor completely using the Sophie Germain identity: \\( x^4 + 1024 \\)",
    "options": [
      {
        "text": "\\((x^2 - 8x + 32)(x^2 + 8x + 32)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x^2 - 8x - 32)(x^2 + 8x - 32)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x^2 + 512)^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x^2 - 512)^2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Add and subtract \\( 4a^2x^2 \\) to complete the square, then apply the difference of squares.",
    "solution": "\\( x^4 + 4a^4 = (x^2 + 2a^2)^2 - 4a^2x^2 = (x^2 - 2ax + 2a^2)(x^2 + 2ax + 2a^2) \\)",
    "solutionSteps": [
      {
        "explanation": "Add and subtract a term to complete the perfect square.",
        "workingOut": "\\((x^4 + 1024 + 64x^2) - 64x^2\\)",
        "graphData": null
      },
      {
        "explanation": "Write the first part as a binomial squared.",
        "workingOut": "\\((x^2 + 32)^2 - (8x)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity to factorize.",
        "workingOut": "\\((x^2 - 8x + 32)(x^2 + 8x + 32)\\)",
        "graphData": null
      }
    ],
    "t": "Sophie Germain identity",
    "id": "y11-1f-h19"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Factor completely using the Sophie Germain identity: \\( x^4 + 2500 \\)",
    "options": [
      {
        "text": "\\((x^2 - 10x + 50)(x^2 + 10x + 50)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x^2 - 10x - 50)(x^2 + 10x - 50)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x^2 + 1250)^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x^2 - 1250)^2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Add and subtract \\( 4a^2x^2 \\) to complete the square, then apply the difference of squares.",
    "solution": "\\( x^4 + 4a^4 = (x^2 + 2a^2)^2 - 4a^2x^2 = (x^2 - 2ax + 2a^2)(x^2 + 2ax + 2a^2) \\)",
    "solutionSteps": [
      {
        "explanation": "Add and subtract a term to complete the perfect square.",
        "workingOut": "\\((x^4 + 2500 + 100x^2) - 100x^2\\)",
        "graphData": null
      },
      {
        "explanation": "Write the first part as a binomial squared.",
        "workingOut": "\\((x^2 + 50)^2 - (10x)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity to factorize.",
        "workingOut": "\\((x^2 - 10x + 50)(x^2 + 10x + 50)\\)",
        "graphData": null
      }
    ],
    "t": "Sophie Germain identity",
    "id": "y11-1f-h20"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Simplify: \\( \\frac{x^3 - 8}{x^2 - 4} \\)",
    "options": [
      {
        "text": "\\(\\frac{x^2 + 2x + 4}{x + 2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x^2 - 2x + 4}{x - 2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x - 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x^2 + 2x + 4}{x - 2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Factor the numerator using the difference of cubes and the denominator using the difference of squares.",
    "solution": "\\( \\frac{(x - 2)(x^2 + 2x + 4)}{(x - 2)(x + 2)} = \\frac{x^2 + 2x + 4}{x + 2} \\)",
    "solutionSteps": [
      {
        "explanation": "Factor the numerator using difference of cubes.",
        "workingOut": "\\(x^3 - 8 = (x - 2)(x^2 + 2x + 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the denominator using difference of squares.",
        "workingOut": "\\(x^2 - 4 = (x - 2)(x + 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Cancel the common binomial factor \\( (x - ${a}) \\).",
        "workingOut": "\\(\\frac{x^2 + 2x + 4}{x + 2}\\)",
        "graphData": null
      }
    ],
    "t": "Algebraic fractions",
    "id": "y11-1f-h21"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Simplify: \\( \\frac{x^3 - 27}{x^2 - 9} \\)",
    "options": [
      {
        "text": "\\(\\frac{x^2 + 3x + 9}{x + 3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x^2 - 3x + 9}{x - 3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x - 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x^2 + 3x + 9}{x - 3}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Factor the numerator using the difference of cubes and the denominator using the difference of squares.",
    "solution": "\\( \\frac{(x - 3)(x^2 + 3x + 9)}{(x - 3)(x + 3)} = \\frac{x^2 + 3x + 9}{x + 3} \\)",
    "solutionSteps": [
      {
        "explanation": "Factor the numerator using difference of cubes.",
        "workingOut": "\\(x^3 - 27 = (x - 3)(x^2 + 3x + 9)\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the denominator using difference of squares.",
        "workingOut": "\\(x^2 - 9 = (x - 3)(x + 3)\\)",
        "graphData": null
      },
      {
        "explanation": "Cancel the common binomial factor \\( (x - ${a}) \\).",
        "workingOut": "\\(\\frac{x^2 + 3x + 9}{x + 3}\\)",
        "graphData": null
      }
    ],
    "t": "Algebraic fractions",
    "id": "y11-1f-h22"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Simplify: \\( \\frac{x^3 - 64}{x^2 - 16} \\)",
    "options": [
      {
        "text": "\\(\\frac{x^2 + 4x + 16}{x + 4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x^2 - 4x + 16}{x - 4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x - 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x^2 + 4x + 16}{x - 4}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Factor the numerator using the difference of cubes and the denominator using the difference of squares.",
    "solution": "\\( \\frac{(x - 4)(x^2 + 4x + 16)}{(x - 4)(x + 4)} = \\frac{x^2 + 4x + 16}{x + 4} \\)",
    "solutionSteps": [
      {
        "explanation": "Factor the numerator using difference of cubes.",
        "workingOut": "\\(x^3 - 64 = (x - 4)(x^2 + 4x + 16)\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the denominator using difference of squares.",
        "workingOut": "\\(x^2 - 16 = (x - 4)(x + 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Cancel the common binomial factor \\( (x - ${a}) \\).",
        "workingOut": "\\(\\frac{x^2 + 4x + 16}{x + 4}\\)",
        "graphData": null
      }
    ],
    "t": "Algebraic fractions",
    "id": "y11-1f-h23"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Simplify: \\( \\frac{x^3 - 125}{x^2 - 25} \\)",
    "options": [
      {
        "text": "\\(\\frac{x^2 + 5x + 25}{x + 5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x^2 - 5x + 25}{x - 5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x - 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x^2 + 5x + 25}{x - 5}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Factor the numerator using the difference of cubes and the denominator using the difference of squares.",
    "solution": "\\( \\frac{(x - 5)(x^2 + 5x + 25)}{(x - 5)(x + 5)} = \\frac{x^2 + 5x + 25}{x + 5} \\)",
    "solutionSteps": [
      {
        "explanation": "Factor the numerator using difference of cubes.",
        "workingOut": "\\(x^3 - 125 = (x - 5)(x^2 + 5x + 25)\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the denominator using difference of squares.",
        "workingOut": "\\(x^2 - 25 = (x - 5)(x + 5)\\)",
        "graphData": null
      },
      {
        "explanation": "Cancel the common binomial factor \\( (x - ${a}) \\).",
        "workingOut": "\\(\\frac{x^2 + 5x + 25}{x + 5}\\)",
        "graphData": null
      }
    ],
    "t": "Algebraic fractions",
    "id": "y11-1f-h24"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Simplify: \\( \\frac{x^2 - 4}{x^2 - 9} \\times \\frac{x^2 + 6x + 9}{(x - 2)^2} \\)",
    "options": [
      {
        "text": "\\(\\frac{(x + 2)(x + 3)}{(x - 2)(x - 3)}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x + 2}{x - 3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{(x - 2)(x + 3)}{(x + 2)(x - 3)}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Factor all quadratics first, then cancel terms.",
    "solution": "\\( \\frac{(x-2)(x+2)}{(x-3)(x+3)} \\times \\frac{(x+3)^2}{(x-2)^2} = \\frac{(x+2)(x+3)}{(x-2)(x-3)} \\)",
    "solutionSteps": [
      {
        "explanation": "Factor each quadratic expression.",
        "workingOut": "\\(x^2 - 4 = (x - 2)(x + 2), \\quad x^2 - 9 = (x - 3)(x + 3), \\quad x^2 + 6x + 9 = (x + 3)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the factors into the product expression.",
        "workingOut": "\\(\\frac{(x - 2)(x + 2)}{(x - 3)(x + 3)} \\times \\frac{(x + 3)^2}{(x - 2)^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Cancel out the common terms from numerator and denominator.",
        "workingOut": "\\(\\frac{(x + 2)(x + 3)}{(x - 2)(x - 3)}\\)",
        "graphData": null
      }
    ],
    "t": "Algebraic fractions",
    "id": "y11-1f-h25"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Simplify: \\( \\frac{x^2 - 9}{x^2 - 16} \\times \\frac{x^2 + 8x + 16}{(x - 3)^2} \\)",
    "options": [
      {
        "text": "\\(\\frac{(x + 3)(x + 4)}{(x - 3)(x - 4)}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x + 3}{x - 4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{(x - 3)(x + 4)}{(x + 3)(x - 4)}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Factor all quadratics first, then cancel terms.",
    "solution": "\\( \\frac{(x-3)(x+3)}{(x-4)(x+4)} \\times \\frac{(x+4)^2}{(x-3)^2} = \\frac{(x+3)(x+4)}{(x-3)(x-4)} \\)",
    "solutionSteps": [
      {
        "explanation": "Factor each quadratic expression.",
        "workingOut": "\\(x^2 - 9 = (x - 3)(x + 3), \\quad x^2 - 16 = (x - 4)(x + 4), \\quad x^2 + 8x + 16 = (x + 4)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the factors into the product expression.",
        "workingOut": "\\(\\frac{(x - 3)(x + 3)}{(x - 4)(x + 4)} \\times \\frac{(x + 4)^2}{(x - 3)^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Cancel out the common terms from numerator and denominator.",
        "workingOut": "\\(\\frac{(x + 3)(x + 4)}{(x - 3)(x - 4)}\\)",
        "graphData": null
      }
    ],
    "t": "Algebraic fractions",
    "id": "y11-1f-h26"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Simplify: \\( \\frac{x^2 - 16}{x^2 - 25} \\times \\frac{x^2 + 10x + 25}{(x - 4)^2} \\)",
    "options": [
      {
        "text": "\\(\\frac{(x + 4)(x + 5)}{(x - 4)(x - 5)}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x + 4}{x - 5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{(x - 4)(x + 5)}{(x + 4)(x - 5)}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Factor all quadratics first, then cancel terms.",
    "solution": "\\( \\frac{(x-4)(x+4)}{(x-5)(x+5)} \\times \\frac{(x+5)^2}{(x-4)^2} = \\frac{(x+4)(x+5)}{(x-4)(x-5)} \\)",
    "solutionSteps": [
      {
        "explanation": "Factor each quadratic expression.",
        "workingOut": "\\(x^2 - 16 = (x - 4)(x + 4), \\quad x^2 - 25 = (x - 5)(x + 5), \\quad x^2 + 10x + 25 = (x + 5)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the factors into the product expression.",
        "workingOut": "\\(\\frac{(x - 4)(x + 4)}{(x - 5)(x + 5)} \\times \\frac{(x + 5)^2}{(x - 4)^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Cancel out the common terms from numerator and denominator.",
        "workingOut": "\\(\\frac{(x + 4)(x + 5)}{(x - 4)(x - 5)}\\)",
        "graphData": null
      }
    ],
    "t": "Algebraic fractions",
    "id": "y11-1f-h27"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Simplify: \\( \\frac{x^2 - 25}{x^2 - 36} \\times \\frac{x^2 + 12x + 36}{(x - 5)^2} \\)",
    "options": [
      {
        "text": "\\(\\frac{(x + 5)(x + 6)}{(x - 5)(x - 6)}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x + 5}{x - 6}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{(x - 5)(x + 6)}{(x + 5)(x - 6)}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Factor all quadratics first, then cancel terms.",
    "solution": "\\( \\frac{(x-5)(x+5)}{(x-6)(x+6)} \\times \\frac{(x+6)^2}{(x-5)^2} = \\frac{(x+5)(x+6)}{(x-5)(x-6)} \\)",
    "solutionSteps": [
      {
        "explanation": "Factor each quadratic expression.",
        "workingOut": "\\(x^2 - 25 = (x - 5)(x + 5), \\quad x^2 - 36 = (x - 6)(x + 6), \\quad x^2 + 12x + 36 = (x + 6)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the factors into the product expression.",
        "workingOut": "\\(\\frac{(x - 5)(x + 5)}{(x - 6)(x + 6)} \\times \\frac{(x + 6)^2}{(x - 5)^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Cancel out the common terms from numerator and denominator.",
        "workingOut": "\\(\\frac{(x + 5)(x + 6)}{(x - 5)(x - 6)}\\)",
        "graphData": null
      }
    ],
    "t": "Algebraic fractions",
    "id": "y11-1f-h28"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Simplify into a single fraction: \\( \\frac{1}{x - 2} - \\frac{1}{x + 2} + \\frac{2x + 4}{x^2 - 4} \\)",
    "options": [
      {
        "text": "\\(\\frac{2x + 8}{(x - 2)(x + 2)}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{2x}{(x - 2)(x + 2)}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{4x + 4}{(x - 2)(x + 2)}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Use the common denominator \\( x^2 - a^2 = (x-a)(x+a) \\).",
    "solution": "\\( \\frac{(x+2) - (x-2) + 2x + 4}{x^2 - 4} = \\frac{2x + 8}{x^2 - 4} \\)",
    "solutionSteps": [
      {
        "explanation": "Find a common denominator for all terms.",
        "workingOut": "\\(\\text{LCD} = (x - 2)(x + 2) = x^2 - 4\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite each fraction with the common denominator.",
        "workingOut": "\\(\\frac{x + 2}{x^2 - 4} - \\frac{x - 2}{x^2 - 4} + \\frac{2x + 4}{x^2 - 4}\\)",
        "graphData": null
      },
      {
        "explanation": "Combine the numerators.",
        "workingOut": "\\(\\frac{x + 2 - x + 2 + 2x + 4}{x^2 - 4} = \\frac{2x + 8}{x^2 - 4}\\)",
        "graphData": null
      }
    ],
    "t": "Algebraic fractions",
    "id": "y11-1f-h29"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Simplify into a single fraction: \\( \\frac{1}{x - 3} - \\frac{1}{x + 3} + \\frac{2x + 6}{x^2 - 9} \\)",
    "options": [
      {
        "text": "\\(\\frac{2x + 12}{(x - 3)(x + 3)}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{2x}{(x - 3)(x + 3)}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{4x + 6}{(x - 3)(x + 3)}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Use the common denominator \\( x^2 - a^2 = (x-a)(x+a) \\).",
    "solution": "\\( \\frac{(x+3) - (x-3) + 2x + 6}{x^2 - 9} = \\frac{2x + 12}{x^2 - 9} \\)",
    "solutionSteps": [
      {
        "explanation": "Find a common denominator for all terms.",
        "workingOut": "\\(\\text{LCD} = (x - 3)(x + 3) = x^2 - 9\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite each fraction with the common denominator.",
        "workingOut": "\\(\\frac{x + 3}{x^2 - 9} - \\frac{x - 3}{x^2 - 9} + \\frac{2x + 6}{x^2 - 9}\\)",
        "graphData": null
      },
      {
        "explanation": "Combine the numerators.",
        "workingOut": "\\(\\frac{x + 3 - x + 3 + 2x + 6}{x^2 - 9} = \\frac{2x + 12}{x^2 - 9}\\)",
        "graphData": null
      }
    ],
    "t": "Algebraic fractions",
    "id": "y11-1f-h30"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Simplify into a single fraction: \\( \\frac{1}{x - 4} - \\frac{1}{x + 4} + \\frac{2x + 8}{x^2 - 16} \\)",
    "options": [
      {
        "text": "\\(\\frac{2x + 16}{(x - 4)(x + 4)}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{2x}{(x - 4)(x + 4)}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{4x + 8}{(x - 4)(x + 4)}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Use the common denominator \\( x^2 - a^2 = (x-a)(x+a) \\).",
    "solution": "\\( \\frac{(x+4) - (x-4) + 2x + 8}{x^2 - 16} = \\frac{2x + 16}{x^2 - 16} \\)",
    "solutionSteps": [
      {
        "explanation": "Find a common denominator for all terms.",
        "workingOut": "\\(\\text{LCD} = (x - 4)(x + 4) = x^2 - 16\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite each fraction with the common denominator.",
        "workingOut": "\\(\\frac{x + 4}{x^2 - 16} - \\frac{x - 4}{x^2 - 16} + \\frac{2x + 8}{x^2 - 16}\\)",
        "graphData": null
      },
      {
        "explanation": "Combine the numerators.",
        "workingOut": "\\(\\frac{x + 4 - x + 4 + 2x + 8}{x^2 - 16} = \\frac{2x + 16}{x^2 - 16}\\)",
        "graphData": null
      }
    ],
    "t": "Algebraic fractions",
    "id": "y11-1f-h31"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Simplify into a single fraction: \\( \\frac{1}{x - 5} - \\frac{1}{x + 5} + \\frac{2x + 10}{x^2 - 25} \\)",
    "options": [
      {
        "text": "\\(\\frac{2x + 20}{(x - 5)(x + 5)}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{2x}{(x - 5)(x + 5)}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{4x + 10}{(x - 5)(x + 5)}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Use the common denominator \\( x^2 - a^2 = (x-a)(x+a) \\).",
    "solution": "\\( \\frac{(x+5) - (x-5) + 2x + 10}{x^2 - 25} = \\frac{2x + 20}{x^2 - 25} \\)",
    "solutionSteps": [
      {
        "explanation": "Find a common denominator for all terms.",
        "workingOut": "\\(\\text{LCD} = (x - 5)(x + 5) = x^2 - 25\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite each fraction with the common denominator.",
        "workingOut": "\\(\\frac{x + 5}{x^2 - 25} - \\frac{x - 5}{x^2 - 25} + \\frac{2x + 10}{x^2 - 25}\\)",
        "graphData": null
      },
      {
        "explanation": "Combine the numerators.",
        "workingOut": "\\(\\frac{x + 5 - x + 5 + 2x + 10}{x^2 - 25} = \\frac{2x + 20}{x^2 - 25}\\)",
        "graphData": null
      }
    ],
    "t": "Algebraic fractions",
    "id": "y11-1f-h32"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Simplify the complex fraction: \\( \\frac{1 - \\frac{a}{x}}{1 - \\frac{a^2}{x^2}} \\) where \\( a = 2 \\)",
    "options": [
      {
        "text": "\\(\\frac{x}{x + 2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x}{x - 2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{1}{x + 2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x - 2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Multiply the numerator and denominator by \\( x^2 \\) to clear the internal fractions.",
    "solution": "\\( \\frac{1 - \\frac{2}{x}}{1 - \\frac{4}{x^2}} = \\frac{x^2(1 - \\frac{2}{x})}{x^2(1 - \\frac{4}{x^2})} = \\frac{x^2 - 2x}{x^2 - 4} = \\frac{x(x - 2)}{(x - 2)(x + 2)} = \\frac{x}{x + 2} \\)",
    "solutionSteps": [
      {
        "explanation": "Find common denominators for the numerator and denominator separately.",
        "workingOut": "\\(\\text{Numerator} = \\frac{x - 2}{x}, \\quad \\text{Denominator} = \\frac{x^2 - 4}{x^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite the division as a multiplication by the reciprocal.",
        "workingOut": "\\(\\frac{x - 2}{x} \\times \\frac{x^2}{x^2 - 4}\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the quadratic difference of squares and cancel common terms.",
        "workingOut": "\\(\\frac{(x - 2)x^2}{x(x - 2)(x + 2)} = \\frac{x}{x + 2}\\)",
        "graphData": null
      }
    ],
    "t": "Complex fractions",
    "id": "y11-1f-h33"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Simplify the complex fraction: \\( \\frac{1 - \\frac{a}{x}}{1 - \\frac{a^2}{x^2}} \\) where \\( a = 3 \\)",
    "options": [
      {
        "text": "\\(\\frac{x}{x + 3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x}{x - 3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{1}{x + 3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x - 3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Multiply the numerator and denominator by \\( x^2 \\) to clear the internal fractions.",
    "solution": "\\( \\frac{1 - \\frac{3}{x}}{1 - \\frac{9}{x^2}} = \\frac{x^2(1 - \\frac{3}{x})}{x^2(1 - \\frac{9}{x^2})} = \\frac{x^2 - 3x}{x^2 - 9} = \\frac{x(x - 3)}{(x - 3)(x + 3)} = \\frac{x}{x + 3} \\)",
    "solutionSteps": [
      {
        "explanation": "Find common denominators for the numerator and denominator separately.",
        "workingOut": "\\(\\text{Numerator} = \\frac{x - 3}{x}, \\quad \\text{Denominator} = \\frac{x^2 - 9}{x^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite the division as a multiplication by the reciprocal.",
        "workingOut": "\\(\\frac{x - 3}{x} \\times \\frac{x^2}{x^2 - 9}\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the quadratic difference of squares and cancel common terms.",
        "workingOut": "\\(\\frac{(x - 3)x^2}{x(x - 3)(x + 3)} = \\frac{x}{x + 3}\\)",
        "graphData": null
      }
    ],
    "t": "Complex fractions",
    "id": "y11-1f-h34"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Simplify the complex fraction: \\( \\frac{1 - \\frac{a}{x}}{1 - \\frac{a^2}{x^2}} \\) where \\( a = 4 \\)",
    "options": [
      {
        "text": "\\(\\frac{x}{x + 4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x}{x - 4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{1}{x + 4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x - 4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Multiply the numerator and denominator by \\( x^2 \\) to clear the internal fractions.",
    "solution": "\\( \\frac{1 - \\frac{4}{x}}{1 - \\frac{16}{x^2}} = \\frac{x^2(1 - \\frac{4}{x})}{x^2(1 - \\frac{16}{x^2})} = \\frac{x^2 - 4x}{x^2 - 16} = \\frac{x(x - 4)}{(x - 4)(x + 4)} = \\frac{x}{x + 4} \\)",
    "solutionSteps": [
      {
        "explanation": "Find common denominators for the numerator and denominator separately.",
        "workingOut": "\\(\\text{Numerator} = \\frac{x - 4}{x}, \\quad \\text{Denominator} = \\frac{x^2 - 16}{x^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite the division as a multiplication by the reciprocal.",
        "workingOut": "\\(\\frac{x - 4}{x} \\times \\frac{x^2}{x^2 - 16}\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the quadratic difference of squares and cancel common terms.",
        "workingOut": "\\(\\frac{(x - 4)x^2}{x(x - 4)(x + 4)} = \\frac{x}{x + 4}\\)",
        "graphData": null
      }
    ],
    "t": "Complex fractions",
    "id": "y11-1f-h35"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Simplify the complex fraction: \\( \\frac{1 - \\frac{a}{x}}{1 - \\frac{a^2}{x^2}} \\) where \\( a = 5 \\)",
    "options": [
      {
        "text": "\\(\\frac{x}{x + 5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x}{x - 5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{1}{x + 5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x - 5\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Multiply the numerator and denominator by \\( x^2 \\) to clear the internal fractions.",
    "solution": "\\( \\frac{1 - \\frac{5}{x}}{1 - \\frac{25}{x^2}} = \\frac{x^2(1 - \\frac{5}{x})}{x^2(1 - \\frac{25}{x^2})} = \\frac{x^2 - 5x}{x^2 - 25} = \\frac{x(x - 5)}{(x - 5)(x + 5)} = \\frac{x}{x + 5} \\)",
    "solutionSteps": [
      {
        "explanation": "Find common denominators for the numerator and denominator separately.",
        "workingOut": "\\(\\text{Numerator} = \\frac{x - 5}{x}, \\quad \\text{Denominator} = \\frac{x^2 - 25}{x^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite the division as a multiplication by the reciprocal.",
        "workingOut": "\\(\\frac{x - 5}{x} \\times \\frac{x^2}{x^2 - 25}\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the quadratic difference of squares and cancel common terms.",
        "workingOut": "\\(\\frac{(x - 5)x^2}{x(x - 5)(x + 5)} = \\frac{x}{x + 5}\\)",
        "graphData": null
      }
    ],
    "t": "Complex fractions",
    "id": "y11-1f-h36"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Simplify: \\( \\frac{x^2 - 6x + 8}{x^2 - 4x + 4} \\div \\frac{x^2 - 3x}{x^2 - 2x} \\)",
    "options": [
      {
        "text": "\\(\\frac{x - 4}{x - 2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x - 4}{x + 2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x - 4}{x - 3}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Factor all polynomials, change division to multiplication by the reciprocal, then simplify.",
    "solution": "\\( \\frac{(x - 2)(x - 4)}{(x - 2)^2} \\times \\frac{x(x - 2)}{x(x - 3)} = \\frac{x - 4}{x - 3} \\)",
    "solutionSteps": [
      {
        "explanation": "Factor each of the quadratic expressions.",
        "workingOut": "\\(x^2 - 6x + 8 = (x - 2)(x - 4), \\quad x^2 - 4x + 4 = (x - 2)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the numerator and denominator of the divisor.",
        "workingOut": "\\(x^2 - 3x = x(x - 3), \\quad x^2 - 2x = x(x - 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Invert the divisor, multiply, and cancel common factors.",
        "workingOut": "\\(\\frac{(x - 2)(x - 4)}{(x - 2)^2} \\times \\frac{x(x - 2)}{x(x - 3)} = \\frac{x - 4}{x - 3}\\)",
        "graphData": null
      }
    ],
    "t": "Algebraic fractions",
    "id": "y11-1f-h37"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Simplify: \\( \\frac{x^2 - 8x + 15}{x^2 - 6x + 9} \\div \\frac{x^2 - 4x}{x^2 - 3x} \\)",
    "options": [
      {
        "text": "\\(\\frac{x - 5}{x - 3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x - 5}{x + 3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x - 5}{x - 4}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Factor all polynomials, change division to multiplication by the reciprocal, then simplify.",
    "solution": "\\( \\frac{(x - 3)(x - 5)}{(x - 3)^2} \\times \\frac{x(x - 3)}{x(x - 4)} = \\frac{x - 5}{x - 4} \\)",
    "solutionSteps": [
      {
        "explanation": "Factor each of the quadratic expressions.",
        "workingOut": "\\(x^2 - 8x + 15 = (x - 3)(x - 5), \\quad x^2 - 6x + 9 = (x - 3)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the numerator and denominator of the divisor.",
        "workingOut": "\\(x^2 - 4x = x(x - 4), \\quad x^2 - 3x = x(x - 3)\\)",
        "graphData": null
      },
      {
        "explanation": "Invert the divisor, multiply, and cancel common factors.",
        "workingOut": "\\(\\frac{(x - 3)(x - 5)}{(x - 3)^2} \\times \\frac{x(x - 3)}{x(x - 4)} = \\frac{x - 5}{x - 4}\\)",
        "graphData": null
      }
    ],
    "t": "Algebraic fractions",
    "id": "y11-1f-h38"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Simplify: \\( \\frac{x^2 - 10x + 24}{x^2 - 8x + 16} \\div \\frac{x^2 - 5x}{x^2 - 4x} \\)",
    "options": [
      {
        "text": "\\(\\frac{x - 6}{x - 4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x - 6}{x + 4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x - 6}{x - 5}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Factor all polynomials, change division to multiplication by the reciprocal, then simplify.",
    "solution": "\\( \\frac{(x - 4)(x - 6)}{(x - 4)^2} \\times \\frac{x(x - 4)}{x(x - 5)} = \\frac{x - 6}{x - 5} \\)",
    "solutionSteps": [
      {
        "explanation": "Factor each of the quadratic expressions.",
        "workingOut": "\\(x^2 - 10x + 24 = (x - 4)(x - 6), \\quad x^2 - 8x + 16 = (x - 4)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the numerator and denominator of the divisor.",
        "workingOut": "\\(x^2 - 5x = x(x - 5), \\quad x^2 - 4x = x(x - 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Invert the divisor, multiply, and cancel common factors.",
        "workingOut": "\\(\\frac{(x - 4)(x - 6)}{(x - 4)^2} \\times \\frac{x(x - 4)}{x(x - 5)} = \\frac{x - 6}{x - 5}\\)",
        "graphData": null
      }
    ],
    "t": "Algebraic fractions",
    "id": "y11-1f-h39"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Simplify: \\( \\frac{x^2 - 12x + 35}{x^2 - 10x + 25} \\div \\frac{x^2 - 6x}{x^2 - 5x} \\)",
    "options": [
      {
        "text": "\\(\\frac{x - 7}{x - 5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x - 7}{x + 5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x - 7}{x - 6}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Factor all polynomials, change division to multiplication by the reciprocal, then simplify.",
    "solution": "\\( \\frac{(x - 5)(x - 7)}{(x - 5)^2} \\times \\frac{x(x - 5)}{x(x - 6)} = \\frac{x - 7}{x - 6} \\)",
    "solutionSteps": [
      {
        "explanation": "Factor each of the quadratic expressions.",
        "workingOut": "\\(x^2 - 12x + 35 = (x - 5)(x - 7), \\quad x^2 - 10x + 25 = (x - 5)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the numerator and denominator of the divisor.",
        "workingOut": "\\(x^2 - 6x = x(x - 6), \\quad x^2 - 5x = x(x - 5)\\)",
        "graphData": null
      },
      {
        "explanation": "Invert the divisor, multiply, and cancel common factors.",
        "workingOut": "\\(\\frac{(x - 5)(x - 7)}{(x - 5)^2} \\times \\frac{x(x - 5)}{x(x - 6)} = \\frac{x - 7}{x - 6}\\)",
        "graphData": null
      }
    ],
    "t": "Algebraic fractions",
    "id": "y11-1f-h40"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve for real roots: \\( (x^2 - 2x)^2 - 4(x^2 - 2x) - 8 = 0 \\)",
    "options": [
      {
        "text": "\\(x = -1, 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 1, -3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2, 4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Substitute \\( u = x^2 - ax \\) to form a quadratic equation.",
    "solution": "\\( u = x^2 - 2x \\Rightarrow u^2 - 4u - 8 = 0 \\Rightarrow (u - 4)(u + 2) = 0 \\Rightarrow x^2 - 2x = -2 \\) (no real roots) or \\( x^2 - 2x = 4 \\Rightarrow x = -1, 3 \\)",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( u = x^2 - ${a}x \\) and solve for \\( u \\).",
        "workingOut": "\\(u^2 - 4u - 8 = 0 \\Rightarrow (u - 4)(u + 2) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the first case: \\( x^2 - ${a}x = -2 \\).",
        "workingOut": "\\(x^2 - 2x + 2 = 0 \\Rightarrow \\Delta = 4 - 8 < 0 \\quad \\text{(No real roots)}\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the second case: \\( x^2 - ${a}x = ${a + 2} \\).",
        "workingOut": "\\(x^2 - 2x - 4 = 0 \\Rightarrow (x - 3)(x + 1) = 0 \\Rightarrow x = -1, 3\\)",
        "graphData": null
      }
    ],
    "t": "Reducible quadratic equations",
    "id": "y11-1f-h41"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve for real roots: \\( (x^2 - 3x)^2 - 5(x^2 - 3x) - 10 = 0 \\)",
    "options": [
      {
        "text": "\\(x = -1, 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 1, -4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2, 5\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Substitute \\( u = x^2 - ax \\) to form a quadratic equation.",
    "solution": "\\( u = x^2 - 3x \\Rightarrow u^2 - 5u - 10 = 0 \\Rightarrow (u - 5)(u + 2) = 0 \\Rightarrow x^2 - 3x = -2 \\) (no real roots) or \\( x^2 - 3x = 5 \\Rightarrow x = -1, 4 \\)",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( u = x^2 - ${a}x \\) and solve for \\( u \\).",
        "workingOut": "\\(u^2 - 5u - 10 = 0 \\Rightarrow (u - 5)(u + 2) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the first case: \\( x^2 - ${a}x = -2 \\).",
        "workingOut": "\\(x^2 - 3x + 2 = 0 \\Rightarrow \\Delta = 9 - 8 < 0 \\quad \\text{(No real roots)}\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the second case: \\( x^2 - ${a}x = ${a + 2} \\).",
        "workingOut": "\\(x^2 - 3x - 5 = 0 \\Rightarrow (x - 4)(x + 1) = 0 \\Rightarrow x = -1, 4\\)",
        "graphData": null
      }
    ],
    "t": "Reducible quadratic equations",
    "id": "y11-1f-h42"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve for real roots: \\( (x^2 - 4x)^2 - 6(x^2 - 4x) - 12 = 0 \\)",
    "options": [
      {
        "text": "\\(x = -1, 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 1, -5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2, 6\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Substitute \\( u = x^2 - ax \\) to form a quadratic equation.",
    "solution": "\\( u = x^2 - 4x \\Rightarrow u^2 - 6u - 12 = 0 \\Rightarrow (u - 6)(u + 2) = 0 \\Rightarrow x^2 - 4x = -2 \\) (no real roots) or \\( x^2 - 4x = 6 \\Rightarrow x = -1, 5 \\)",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( u = x^2 - ${a}x \\) and solve for \\( u \\).",
        "workingOut": "\\(u^2 - 6u - 12 = 0 \\Rightarrow (u - 6)(u + 2) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the first case: \\( x^2 - ${a}x = -2 \\).",
        "workingOut": "\\(x^2 - 4x + 2 = 0 \\Rightarrow \\Delta = 16 - 8 < 0 \\quad \\text{(No real roots)}\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the second case: \\( x^2 - ${a}x = ${a + 2} \\).",
        "workingOut": "\\(x^2 - 4x - 6 = 0 \\Rightarrow (x - 5)(x + 1) = 0 \\Rightarrow x = -1, 5\\)",
        "graphData": null
      }
    ],
    "t": "Reducible quadratic equations",
    "id": "y11-1f-h43"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve for real roots: \\( (x^2 - 5x)^2 - 7(x^2 - 5x) - 14 = 0 \\)",
    "options": [
      {
        "text": "\\(x = -1, 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 1, -6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2, 7\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Substitute \\( u = x^2 - ax \\) to form a quadratic equation.",
    "solution": "\\( u = x^2 - 5x \\Rightarrow u^2 - 7u - 14 = 0 \\Rightarrow (u - 7)(u + 2) = 0 \\Rightarrow x^2 - 5x = -2 \\) (no real roots) or \\( x^2 - 5x = 7 \\Rightarrow x = -1, 6 \\)",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( u = x^2 - ${a}x \\) and solve for \\( u \\).",
        "workingOut": "\\(u^2 - 7u - 14 = 0 \\Rightarrow (u - 7)(u + 2) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the first case: \\( x^2 - ${a}x = -2 \\).",
        "workingOut": "\\(x^2 - 5x + 2 = 0 \\Rightarrow \\Delta = 25 - 8 < 0 \\quad \\text{(No real roots)}\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the second case: \\( x^2 - ${a}x = ${a + 2} \\).",
        "workingOut": "\\(x^2 - 5x - 7 = 0 \\Rightarrow (x - 6)(x + 1) = 0 \\Rightarrow x = -1, 6\\)",
        "graphData": null
      }
    ],
    "t": "Reducible quadratic equations",
    "id": "y11-1f-h44"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve: \\( \\frac{x}{x - 2} + \\frac{x - 6}{x} = 2 \\)",
    "options": [
      {
        "text": "\\(x = 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 2, -4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2, 6\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Multiply through by the lowest common denominator \\( x(x - a) \\) to eliminate fractions.",
    "solution": "\\( x^2 + (x - 6)(x - 2) = 2x(x - 2) \\Rightarrow x^2 + x^2 - 8x + 12 = 2x^2 - 4x \\Rightarrow -4x + 12 = 0 ... \\text{ wait } \\)",
    "solutionSteps": [
      {
        "explanation": "Multiply through by \\( x(x - ${a}) \\).",
        "workingOut": "\\(x^2 + (x - 6)(x - 2) = 2x(x - 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand both sides.",
        "workingOut": "\\(x^2 + x^2 - 8x + 12 = 2x^2 - 4x\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange and solve for \\( x \\).",
        "workingOut": "\\(-4x + 12 = 0 \\Rightarrow x = \\frac{3}{2}2\\)",
        "graphData": null
      }
    ],
    "t": "Fractional equations",
    "id": "y11-1f-h45"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve: \\( \\frac{x}{x - 3} + \\frac{x - 9}{x} = 2 \\)",
    "options": [
      {
        "text": "\\(x = 4.5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 3, -6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -3, 9\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Multiply through by the lowest common denominator \\( x(x - a) \\) to eliminate fractions.",
    "solution": "\\( x^2 + (x - 9)(x - 3) = 2x(x - 3) \\Rightarrow x^2 + x^2 - 12x + 27 = 2x^2 - 6x \\Rightarrow -6x + 27 = 0 ... \\text{ wait } \\)",
    "solutionSteps": [
      {
        "explanation": "Multiply through by \\( x(x - ${a}) \\).",
        "workingOut": "\\(x^2 + (x - 9)(x - 3) = 2x(x - 3)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand both sides.",
        "workingOut": "\\(x^2 + x^2 - 12x + 27 = 2x^2 - 6x\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange and solve for \\( x \\).",
        "workingOut": "\\(-6x + 27 = 0 \\Rightarrow x = \\frac{3}{2}3\\)",
        "graphData": null
      }
    ],
    "t": "Fractional equations",
    "id": "y11-1f-h46"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve: \\( \\frac{x}{x - 4} + \\frac{x - 12}{x} = 2 \\)",
    "options": [
      {
        "text": "\\(x = 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 4, -8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, 12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -4, 12\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Multiply through by the lowest common denominator \\( x(x - a) \\) to eliminate fractions.",
    "solution": "\\( x^2 + (x - 12)(x - 4) = 2x(x - 4) \\Rightarrow x^2 + x^2 - 16x + 48 = 2x^2 - 8x \\Rightarrow -8x + 48 = 0 ... \\text{ wait } \\)",
    "solutionSteps": [
      {
        "explanation": "Multiply through by \\( x(x - ${a}) \\).",
        "workingOut": "\\(x^2 + (x - 12)(x - 4) = 2x(x - 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand both sides.",
        "workingOut": "\\(x^2 + x^2 - 16x + 48 = 2x^2 - 8x\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange and solve for \\( x \\).",
        "workingOut": "\\(-8x + 48 = 0 \\Rightarrow x = \\frac{3}{2}4\\)",
        "graphData": null
      }
    ],
    "t": "Fractional equations",
    "id": "y11-1f-h47"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve: \\( \\frac{x}{x - 5} + \\frac{x - 15}{x} = 2 \\)",
    "options": [
      {
        "text": "\\(x = 7.5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 5, -10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, 15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -5, 15\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Multiply through by the lowest common denominator \\( x(x - a) \\) to eliminate fractions.",
    "solution": "\\( x^2 + (x - 15)(x - 5) = 2x(x - 5) \\Rightarrow x^2 + x^2 - 20x + 75 = 2x^2 - 10x \\Rightarrow -10x + 75 = 0 ... \\text{ wait } \\)",
    "solutionSteps": [
      {
        "explanation": "Multiply through by \\( x(x - ${a}) \\).",
        "workingOut": "\\(x^2 + (x - 15)(x - 5) = 2x(x - 5)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand both sides.",
        "workingOut": "\\(x^2 + x^2 - 20x + 75 = 2x^2 - 10x\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange and solve for \\( x \\).",
        "workingOut": "\\(-10x + 75 = 0 \\Rightarrow x = \\frac{3}{2}5\\)",
        "graphData": null
      }
    ],
    "t": "Fractional equations",
    "id": "y11-1f-h48"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the value(s) of \\( k \\) for which the quadratic equation \\( x^2 - kx + 16 = 0 \\) has equal roots.",
    "options": [
      {
        "text": "\\(k = \\pm 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = \\pm 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = \\pm 16\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = 8\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "For equal roots, the discriminant \\( \\Delta = b^2 - 4ac \\) must be equal to 0.",
    "solution": "\\( \\Delta = (-k)^2 - 4(1)(16) = 0 \\Rightarrow k^2 - 64 = 0 \\Rightarrow k = \\pm 8 \\) ",
    "solutionSteps": [
      {
        "explanation": "Set the discriminant \\( b^2 - 4ac \\) to 0.",
        "workingOut": "\\((-k)^2 - 4(1)(16) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the equation.",
        "workingOut": "\\(k^2 - 64 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( k \\).",
        "workingOut": "\\(k = \\pm 8\\)",
        "graphData": null
      }
    ],
    "t": "Discriminant",
    "id": "y11-1f-h49"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the value(s) of \\( k \\) for which the quadratic equation \\( x^2 - kx + 36 = 0 \\) has equal roots.",
    "options": [
      {
        "text": "\\(k = \\pm 12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = \\pm 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = \\pm 24\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = 12\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "For equal roots, the discriminant \\( \\Delta = b^2 - 4ac \\) must be equal to 0.",
    "solution": "\\( \\Delta = (-k)^2 - 4(1)(36) = 0 \\Rightarrow k^2 - 144 = 0 \\Rightarrow k = \\pm 12 \\) ",
    "solutionSteps": [
      {
        "explanation": "Set the discriminant \\( b^2 - 4ac \\) to 0.",
        "workingOut": "\\((-k)^2 - 4(1)(36) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the equation.",
        "workingOut": "\\(k^2 - 144 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( k \\).",
        "workingOut": "\\(k = \\pm 12\\)",
        "graphData": null
      }
    ],
    "t": "Discriminant",
    "id": "y11-1f-h50"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the value(s) of \\( k \\) for which the quadratic equation \\( x^2 - kx + 64 = 0 \\) has equal roots.",
    "options": [
      {
        "text": "\\(k = \\pm 16\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = \\pm 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = \\pm 32\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = 16\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "For equal roots, the discriminant \\( \\Delta = b^2 - 4ac \\) must be equal to 0.",
    "solution": "\\( \\Delta = (-k)^2 - 4(1)(64) = 0 \\Rightarrow k^2 - 256 = 0 \\Rightarrow k = \\pm 16 \\) ",
    "solutionSteps": [
      {
        "explanation": "Set the discriminant \\( b^2 - 4ac \\) to 0.",
        "workingOut": "\\((-k)^2 - 4(1)(64) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the equation.",
        "workingOut": "\\(k^2 - 256 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( k \\).",
        "workingOut": "\\(k = \\pm 16\\)",
        "graphData": null
      }
    ],
    "t": "Discriminant",
    "id": "y11-1f-h51"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the value(s) of \\( k \\) for which the quadratic equation \\( x^2 - kx + 100 = 0 \\) has equal roots.",
    "options": [
      {
        "text": "\\(k = \\pm 20\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = \\pm 10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = \\pm 40\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = 20\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "For equal roots, the discriminant \\( \\Delta = b^2 - 4ac \\) must be equal to 0.",
    "solution": "\\( \\Delta = (-k)^2 - 4(1)(100) = 0 \\Rightarrow k^2 - 400 = 0 \\Rightarrow k = \\pm 20 \\) ",
    "solutionSteps": [
      {
        "explanation": "Set the discriminant \\( b^2 - 4ac \\) to 0.",
        "workingOut": "\\((-k)^2 - 4(1)(100) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the equation.",
        "workingOut": "\\(k^2 - 400 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( k \\).",
        "workingOut": "\\(k = \\pm 20\\)",
        "graphData": null
      }
    ],
    "t": "Discriminant",
    "id": "y11-1f-h52"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the range of \\( k \\) for which \\( x^2 + kx + 9 = 0 \\) has no real roots.",
    "options": [
      {
        "text": "\\(-6 < k < 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k < -6 \\text{ or } k > 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-3 < k < 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k < -3 \\text{ or } k > 3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "The discriminant \\( \\Delta = b^2 - 4ac \\) must be strictly less than 0 for no real roots.",
    "solution": "\\( \\Delta = k^2 - 4(1)(9) < 0 \\Rightarrow k^2 - 36 < 0 \\Rightarrow -6 < k < 6 \\)",
    "solutionSteps": [
      {
        "explanation": "State the condition for no real roots.",
        "workingOut": "\\(\\Delta = b^2 - 4ac < 0\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the coefficients into the inequality.",
        "workingOut": "\\(k^2 - 4(1)(9) < 0 \\Rightarrow k^2 - 36 < 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the quadratic inequality.",
        "workingOut": "\\(-6 < k < 6\\)",
        "graphData": null
      }
    ],
    "t": "Discriminant",
    "id": "y11-1f-h53"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the range of \\( k \\) for which \\( x^2 + kx + 16 = 0 \\) has no real roots.",
    "options": [
      {
        "text": "\\(-8 < k < 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k < -8 \\text{ or } k > 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-4 < k < 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k < -4 \\text{ or } k > 4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "The discriminant \\( \\Delta = b^2 - 4ac \\) must be strictly less than 0 for no real roots.",
    "solution": "\\( \\Delta = k^2 - 4(1)(16) < 0 \\Rightarrow k^2 - 64 < 0 \\Rightarrow -8 < k < 8 \\)",
    "solutionSteps": [
      {
        "explanation": "State the condition for no real roots.",
        "workingOut": "\\(\\Delta = b^2 - 4ac < 0\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the coefficients into the inequality.",
        "workingOut": "\\(k^2 - 4(1)(16) < 0 \\Rightarrow k^2 - 64 < 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the quadratic inequality.",
        "workingOut": "\\(-8 < k < 8\\)",
        "graphData": null
      }
    ],
    "t": "Discriminant",
    "id": "y11-1f-h54"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the range of \\( k \\) for which \\( x^2 + kx + 25 = 0 \\) has no real roots.",
    "options": [
      {
        "text": "\\(-10 < k < 10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k < -10 \\text{ or } k > 10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-5 < k < 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k < -5 \\text{ or } k > 5\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "The discriminant \\( \\Delta = b^2 - 4ac \\) must be strictly less than 0 for no real roots.",
    "solution": "\\( \\Delta = k^2 - 4(1)(25) < 0 \\Rightarrow k^2 - 100 < 0 \\Rightarrow -10 < k < 10 \\)",
    "solutionSteps": [
      {
        "explanation": "State the condition for no real roots.",
        "workingOut": "\\(\\Delta = b^2 - 4ac < 0\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the coefficients into the inequality.",
        "workingOut": "\\(k^2 - 4(1)(25) < 0 \\Rightarrow k^2 - 100 < 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the quadratic inequality.",
        "workingOut": "\\(-10 < k < 10\\)",
        "graphData": null
      }
    ],
    "t": "Discriminant",
    "id": "y11-1f-h55"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the range of \\( k \\) for which \\( x^2 + kx + 36 = 0 \\) has no real roots.",
    "options": [
      {
        "text": "\\(-12 < k < 12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k < -12 \\text{ or } k > 12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-6 < k < 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k < -6 \\text{ or } k > 6\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "The discriminant \\( \\Delta = b^2 - 4ac \\) must be strictly less than 0 for no real roots.",
    "solution": "\\( \\Delta = k^2 - 4(1)(36) < 0 \\Rightarrow k^2 - 144 < 0 \\Rightarrow -12 < k < 12 \\)",
    "solutionSteps": [
      {
        "explanation": "State the condition for no real roots.",
        "workingOut": "\\(\\Delta = b^2 - 4ac < 0\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the coefficients into the inequality.",
        "workingOut": "\\(k^2 - 4(1)(36) < 0 \\Rightarrow k^2 - 144 < 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the quadratic inequality.",
        "workingOut": "\\(-12 < k < 12\\)",
        "graphData": null
      }
    ],
    "t": "Discriminant",
    "id": "y11-1f-h56"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "If the roots of the quadratic equation \\( x^2 - 4x - k = 0 \\) differ by 2, find the value of \\( k \\).",
    "options": [
      {
        "text": "\\(k = -3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = -5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = 0\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Let the roots be \\( \\alpha \\) and \\( \\alpha + 2 \\). Use the sum and product of roots.",
    "solution": "\\( \\alpha + \\beta = 4 \\Rightarrow \\alpha + (\\alpha + 2) = 4 \\Rightarrow 2\\alpha = 2 \\Rightarrow \\alpha = 1 \\). Product: \\( \\alpha\\beta = -k \\Rightarrow (1)(3) = -k \\Rightarrow 3 = -k \\Rightarrow k = -3 \\)",
    "solutionSteps": [
      {
        "explanation": "Set up the equations for sum of roots.",
        "workingOut": "\\(\\alpha + \\beta = 4, \\quad \\beta - \\alpha = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the individual roots.",
        "workingOut": "\\(\\beta = \\alpha + 2 \\Rightarrow 2\\alpha + 2 = 4 \\Rightarrow \\alpha = 1, \\quad \\beta = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Use the product of roots formula to solve for \\( k \\).",
        "workingOut": "\\(\\alpha \\times \\beta = -k \\Rightarrow (1)(3) = -k \\Rightarrow 3 = -k \\Rightarrow k = -3\\)",
        "graphData": null
      }
    ],
    "t": "Roots of quadratics",
    "id": "y11-1f-h57"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "If the roots of the quadratic equation \\( x^2 - 6x - k = 0 \\) differ by 2, find the value of \\( k \\).",
    "options": [
      {
        "text": "\\(k = -8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = -10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = 0\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Let the roots be \\( \\alpha \\) and \\( \\alpha + 2 \\). Use the sum and product of roots.",
    "solution": "\\( \\alpha + \\beta = 6 \\Rightarrow \\alpha + (\\alpha + 2) = 6 \\Rightarrow 2\\alpha = 4 \\Rightarrow \\alpha = 2 \\). Product: \\( \\alpha\\beta = -k \\Rightarrow (2)(4) = -k \\Rightarrow 8 = -k \\Rightarrow k = -8 \\)",
    "solutionSteps": [
      {
        "explanation": "Set up the equations for sum of roots.",
        "workingOut": "\\(\\alpha + \\beta = 6, \\quad \\beta - \\alpha = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the individual roots.",
        "workingOut": "\\(\\beta = \\alpha + 2 \\Rightarrow 2\\alpha + 2 = 6 \\Rightarrow \\alpha = 2, \\quad \\beta = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Use the product of roots formula to solve for \\( k \\).",
        "workingOut": "\\(\\alpha \\times \\beta = -k \\Rightarrow (2)(4) = -k \\Rightarrow 8 = -k \\Rightarrow k = -8\\)",
        "graphData": null
      }
    ],
    "t": "Roots of quadratics",
    "id": "y11-1f-h58"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "If the roots of the quadratic equation \\( x^2 - 8x - k = 0 \\) differ by 2, find the value of \\( k \\).",
    "options": [
      {
        "text": "\\(k = -15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = -17\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = 15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = 0\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Let the roots be \\( \\alpha \\) and \\( \\alpha + 2 \\). Use the sum and product of roots.",
    "solution": "\\( \\alpha + \\beta = 8 \\Rightarrow \\alpha + (\\alpha + 2) = 8 \\Rightarrow 2\\alpha = 6 \\Rightarrow \\alpha = 3 \\). Product: \\( \\alpha\\beta = -k \\Rightarrow (3)(5) = -k \\Rightarrow 15 = -k \\Rightarrow k = -15 \\)",
    "solutionSteps": [
      {
        "explanation": "Set up the equations for sum of roots.",
        "workingOut": "\\(\\alpha + \\beta = 8, \\quad \\beta - \\alpha = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the individual roots.",
        "workingOut": "\\(\\beta = \\alpha + 2 \\Rightarrow 2\\alpha + 2 = 8 \\Rightarrow \\alpha = 3, \\quad \\beta = 5\\)",
        "graphData": null
      },
      {
        "explanation": "Use the product of roots formula to solve for \\( k \\).",
        "workingOut": "\\(\\alpha \\times \\beta = -k \\Rightarrow (3)(5) = -k \\Rightarrow 15 = -k \\Rightarrow k = -15\\)",
        "graphData": null
      }
    ],
    "t": "Roots of quadratics",
    "id": "y11-1f-h59"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "If the roots of the quadratic equation \\( x^2 - 10x - k = 0 \\) differ by 2, find the value of \\( k \\).",
    "options": [
      {
        "text": "\\(k = -24\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = -26\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = 24\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = 0\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Let the roots be \\( \\alpha \\) and \\( \\alpha + 2 \\). Use the sum and product of roots.",
    "solution": "\\( \\alpha + \\beta = 10 \\Rightarrow \\alpha + (\\alpha + 2) = 10 \\Rightarrow 2\\alpha = 8 \\Rightarrow \\alpha = 4 \\). Product: \\( \\alpha\\beta = -k \\Rightarrow (4)(6) = -k \\Rightarrow 24 = -k \\Rightarrow k = -24 \\)",
    "solutionSteps": [
      {
        "explanation": "Set up the equations for sum of roots.",
        "workingOut": "\\(\\alpha + \\beta = 10, \\quad \\beta - \\alpha = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the individual roots.",
        "workingOut": "\\(\\beta = \\alpha + 2 \\Rightarrow 2\\alpha + 2 = 10 \\Rightarrow \\alpha = 4, \\quad \\beta = 6\\)",
        "graphData": null
      },
      {
        "explanation": "Use the product of roots formula to solve for \\( k \\).",
        "workingOut": "\\(\\alpha \\times \\beta = -k \\Rightarrow (4)(6) = -k \\Rightarrow 24 = -k \\Rightarrow k = -24\\)",
        "graphData": null
      }
    ],
    "t": "Roots of quadratics",
    "id": "y11-1f-h60"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the intersection points of the circle \\( x^2 + y^2 = 25 \\) and the line \\( y = 0 \\).",
    "options": [
      {
        "text": "\\(x = -5, y = 0 \\text{ or } x = 5, y = 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, y = -5 \\text{ or } x = 0, y = 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -5, y = -5 \\text{ or } x = 5, y = 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 5, y = 0\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Substitute the line equation into the circle equation and solve for \\( x \\).",
    "solution": "\\( x^2 + 0^2 = 25 \\Rightarrow x^2 = 25 \\Rightarrow x = \\pm 5 \\Rightarrow y = 0 \\)",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( y = 0 \\) into the circle equation.",
        "workingOut": "\\(x^2 + 0^2 = 25\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( x \\).",
        "workingOut": "\\(x^2 = 25 \\Rightarrow x = \\pm 5\\)",
        "graphData": null
      },
      {
        "explanation": "List the coordinates of the intersection points.",
        "workingOut": "\\((-5, 0) \\quad \\text{and} \\quad (5, 0)\\)",
        "graphData": null
      }
    ],
    "t": "Simultaneous equations",
    "id": "y11-1f-h61"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the intersection points of the circle \\( x^2 + y^2 = 36 \\) and the line \\( y = 0 \\).",
    "options": [
      {
        "text": "\\(x = -6, y = 0 \\text{ or } x = 6, y = 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, y = -6 \\text{ or } x = 0, y = 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -6, y = -6 \\text{ or } x = 6, y = 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 6, y = 0\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Substitute the line equation into the circle equation and solve for \\( x \\).",
    "solution": "\\( x^2 + 0^2 = 36 \\Rightarrow x^2 = 36 \\Rightarrow x = \\pm 6 \\Rightarrow y = 0 \\)",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( y = 0 \\) into the circle equation.",
        "workingOut": "\\(x^2 + 0^2 = 36\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( x \\).",
        "workingOut": "\\(x^2 = 36 \\Rightarrow x = \\pm 6\\)",
        "graphData": null
      },
      {
        "explanation": "List the coordinates of the intersection points.",
        "workingOut": "\\((-6, 0) \\quad \\text{and} \\quad (6, 0)\\)",
        "graphData": null
      }
    ],
    "t": "Simultaneous equations",
    "id": "y11-1f-h62"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the intersection points of the circle \\( x^2 + y^2 = 49 \\) and the line \\( y = 0 \\).",
    "options": [
      {
        "text": "\\(x = -7, y = 0 \\text{ or } x = 7, y = 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, y = -7 \\text{ or } x = 0, y = 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -7, y = -7 \\text{ or } x = 7, y = 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 7, y = 0\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Substitute the line equation into the circle equation and solve for \\( x \\).",
    "solution": "\\( x^2 + 0^2 = 49 \\Rightarrow x^2 = 49 \\Rightarrow x = \\pm 7 \\Rightarrow y = 0 \\)",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( y = 0 \\) into the circle equation.",
        "workingOut": "\\(x^2 + 0^2 = 49\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( x \\).",
        "workingOut": "\\(x^2 = 49 \\Rightarrow x = \\pm 7\\)",
        "graphData": null
      },
      {
        "explanation": "List the coordinates of the intersection points.",
        "workingOut": "\\((-7, 0) \\quad \\text{and} \\quad (7, 0)\\)",
        "graphData": null
      }
    ],
    "t": "Simultaneous equations",
    "id": "y11-1f-h63"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the intersection points of the circle \\( x^2 + y^2 = 64 \\) and the line \\( y = 0 \\).",
    "options": [
      {
        "text": "\\(x = -8, y = 0 \\text{ or } x = 8, y = 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, y = -8 \\text{ or } x = 0, y = 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -8, y = -8 \\text{ or } x = 8, y = 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 8, y = 0\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Substitute the line equation into the circle equation and solve for \\( x \\).",
    "solution": "\\( x^2 + 0^2 = 64 \\Rightarrow x^2 = 64 \\Rightarrow x = \\pm 8 \\Rightarrow y = 0 \\)",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( y = 0 \\) into the circle equation.",
        "workingOut": "\\(x^2 + 0^2 = 64\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( x \\).",
        "workingOut": "\\(x^2 = 64 \\Rightarrow x = \\pm 8\\)",
        "graphData": null
      },
      {
        "explanation": "List the coordinates of the intersection points.",
        "workingOut": "\\((-8, 0) \\quad \\text{and} \\quad (8, 0)\\)",
        "graphData": null
      }
    ],
    "t": "Simultaneous equations",
    "id": "y11-1f-h64"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve simultaneous equations: \\( y = x^2 + 2x \\) and \\( y = 5x - 2 \\).",
    "options": [
      {
        "text": "\\(x = 1, y = 3 \\text{ or } x = 2, y = 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -1, y = -2 \\text{ or } x = -2, y = -4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, y = 0 \\text{ or } x = 2, y = 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 1, y = 3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Equate the two expressions for \\( y \\) to form a quadratic in terms of \\( x \\).",
    "solution": "\\( x^2 + 2x = 5x - 2 \\Rightarrow x^2 - 3x + 2 = 0 \\Rightarrow (x - 1)(x - 2) = 0 \\Rightarrow x = 1 \\text{ or } 2. \\text{ Substitute back to find } y. \\)",
    "solutionSteps": [
      {
        "explanation": "Equate the quadratic and linear equations.",
        "workingOut": "\\(x^2 + 2x = 5x - 2\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange into standard form and factor.",
        "workingOut": "\\(x^2 - 3x + 2 = 0 \\Rightarrow (x - 1)(x - 2) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Find the corresponding \\( y \\) values by substituting \\( x \\) back.",
        "workingOut": "\\(x = 1 \\Rightarrow y = 3, \\quad x = 2 \\Rightarrow y = 6\\)",
        "graphData": null
      }
    ],
    "t": "Simultaneous equations",
    "id": "y11-1f-h65"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve simultaneous equations: \\( y = x^2 + 3x \\) and \\( y = 6x - 2 \\).",
    "options": [
      {
        "text": "\\(x = 1, y = 4 \\text{ or } x = 2, y = 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -1, y = -3 \\text{ or } x = -2, y = -6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, y = 0 \\text{ or } x = 2, y = 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 1, y = 4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Equate the two expressions for \\( y \\) to form a quadratic in terms of \\( x \\).",
    "solution": "\\( x^2 + 3x = 6x - 2 \\Rightarrow x^2 - 3x + 2 = 0 \\Rightarrow (x - 1)(x - 2) = 0 \\Rightarrow x = 1 \\text{ or } 2. \\text{ Substitute back to find } y. \\)",
    "solutionSteps": [
      {
        "explanation": "Equate the quadratic and linear equations.",
        "workingOut": "\\(x^2 + 3x = 6x - 2\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange into standard form and factor.",
        "workingOut": "\\(x^2 - 3x + 2 = 0 \\Rightarrow (x - 1)(x - 2) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Find the corresponding \\( y \\) values by substituting \\( x \\) back.",
        "workingOut": "\\(x = 1 \\Rightarrow y = 4, \\quad x = 2 \\Rightarrow y = 8\\)",
        "graphData": null
      }
    ],
    "t": "Simultaneous equations",
    "id": "y11-1f-h66"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve simultaneous equations: \\( y = x^2 + 4x \\) and \\( y = 7x - 2 \\).",
    "options": [
      {
        "text": "\\(x = 1, y = 5 \\text{ or } x = 2, y = 10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -1, y = -4 \\text{ or } x = -2, y = -8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, y = 0 \\text{ or } x = 2, y = 10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 1, y = 5\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Equate the two expressions for \\( y \\) to form a quadratic in terms of \\( x \\).",
    "solution": "\\( x^2 + 4x = 7x - 2 \\Rightarrow x^2 - 3x + 2 = 0 \\Rightarrow (x - 1)(x - 2) = 0 \\Rightarrow x = 1 \\text{ or } 2. \\text{ Substitute back to find } y. \\)",
    "solutionSteps": [
      {
        "explanation": "Equate the quadratic and linear equations.",
        "workingOut": "\\(x^2 + 4x = 7x - 2\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange into standard form and factor.",
        "workingOut": "\\(x^2 - 3x + 2 = 0 \\Rightarrow (x - 1)(x - 2) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Find the corresponding \\( y \\) values by substituting \\( x \\) back.",
        "workingOut": "\\(x = 1 \\Rightarrow y = 5, \\quad x = 2 \\Rightarrow y = 10\\)",
        "graphData": null
      }
    ],
    "t": "Simultaneous equations",
    "id": "y11-1f-h67"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve simultaneous equations: \\( y = x^2 + 5x \\) and \\( y = 8x - 2 \\).",
    "options": [
      {
        "text": "\\(x = 1, y = 6 \\text{ or } x = 2, y = 12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -1, y = -5 \\text{ or } x = -2, y = -10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, y = 0 \\text{ or } x = 2, y = 12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 1, y = 6\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Equate the two expressions for \\( y \\) to form a quadratic in terms of \\( x \\).",
    "solution": "\\( x^2 + 5x = 8x - 2 \\Rightarrow x^2 - 3x + 2 = 0 \\Rightarrow (x - 1)(x - 2) = 0 \\Rightarrow x = 1 \\text{ or } 2. \\text{ Substitute back to find } y. \\)",
    "solutionSteps": [
      {
        "explanation": "Equate the quadratic and linear equations.",
        "workingOut": "\\(x^2 + 5x = 8x - 2\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange into standard form and factor.",
        "workingOut": "\\(x^2 - 3x + 2 = 0 \\Rightarrow (x - 1)(x - 2) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Find the corresponding \\( y \\) values by substituting \\( x \\) back.",
        "workingOut": "\\(x = 1 \\Rightarrow y = 6, \\quad x = 2 \\Rightarrow y = 12\\)",
        "graphData": null
      }
    ],
    "t": "Simultaneous equations",
    "id": "y11-1f-h68"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve: \\( xy = 12 \\) and \\( x + y = 7 \\).",
    "options": [
      {
        "text": "\\(x = 3, y = 4 \\text{ or } x = 4, y = 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -3, y = -4 \\text{ or } x = -4, y = -3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 12, y = 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 7, y = 0\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Substitute \\( y = sum - x \\) into the hyperbola equation.",
    "solution": "\\( x(7 - x) = 12 \\Rightarrow x^2 - 7x + 12 = 0 \\Rightarrow (x - 3)(x - 4) = 0 \\Rightarrow x = 3, y = 4 \\text{ or } x = 4, y = 3 \\)",
    "solutionSteps": [
      {
        "explanation": "Express \\( y \\) in terms of \\( x \\).",
        "workingOut": "\\(y = 7 - x\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute into the hyperbola equation.",
        "workingOut": "\\(x(7 - x) = 12 \\Rightarrow 7x - x^2 = 12\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange terms and solve the quadratic.",
        "workingOut": "\\(x^2 - 7x + 12 = 0 \\Rightarrow (x - 3)(x - 4) = 0 \\Rightarrow x = 3 \\text{ or } 4\\)",
        "graphData": null
      }
    ],
    "t": "Simultaneous equations",
    "id": "y11-1f-h69"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve: \\( xy = 20 \\) and \\( x + y = 9 \\).",
    "options": [
      {
        "text": "\\(x = 4, y = 5 \\text{ or } x = 5, y = 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -4, y = -5 \\text{ or } x = -5, y = -4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 20, y = 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 9, y = 0\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Substitute \\( y = sum - x \\) into the hyperbola equation.",
    "solution": "\\( x(9 - x) = 20 \\Rightarrow x^2 - 9x + 20 = 0 \\Rightarrow (x - 4)(x - 5) = 0 \\Rightarrow x = 4, y = 5 \\text{ or } x = 5, y = 4 \\)",
    "solutionSteps": [
      {
        "explanation": "Express \\( y \\) in terms of \\( x \\).",
        "workingOut": "\\(y = 9 - x\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute into the hyperbola equation.",
        "workingOut": "\\(x(9 - x) = 20 \\Rightarrow 9x - x^2 = 20\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange terms and solve the quadratic.",
        "workingOut": "\\(x^2 - 9x + 20 = 0 \\Rightarrow (x - 4)(x - 5) = 0 \\Rightarrow x = 4 \\text{ or } 5\\)",
        "graphData": null
      }
    ],
    "t": "Simultaneous equations",
    "id": "y11-1f-h70"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve: \\( xy = 30 \\) and \\( x + y = 11 \\).",
    "options": [
      {
        "text": "\\(x = 5, y = 6 \\text{ or } x = 6, y = 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -5, y = -6 \\text{ or } x = -6, y = -5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 30, y = 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 11, y = 0\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Substitute \\( y = sum - x \\) into the hyperbola equation.",
    "solution": "\\( x(11 - x) = 30 \\Rightarrow x^2 - 11x + 30 = 0 \\Rightarrow (x - 5)(x - 6) = 0 \\Rightarrow x = 5, y = 6 \\text{ or } x = 6, y = 5 \\)",
    "solutionSteps": [
      {
        "explanation": "Express \\( y \\) in terms of \\( x \\).",
        "workingOut": "\\(y = 11 - x\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute into the hyperbola equation.",
        "workingOut": "\\(x(11 - x) = 30 \\Rightarrow 11x - x^2 = 30\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange terms and solve the quadratic.",
        "workingOut": "\\(x^2 - 11x + 30 = 0 \\Rightarrow (x - 5)(x - 6) = 0 \\Rightarrow x = 5 \\text{ or } 6\\)",
        "graphData": null
      }
    ],
    "t": "Simultaneous equations",
    "id": "y11-1f-h71"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve: \\( xy = 42 \\) and \\( x + y = 13 \\).",
    "options": [
      {
        "text": "\\(x = 6, y = 7 \\text{ or } x = 7, y = 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -6, y = -7 \\text{ or } x = -7, y = -6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 42, y = 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 13, y = 0\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Substitute \\( y = sum - x \\) into the hyperbola equation.",
    "solution": "\\( x(13 - x) = 42 \\Rightarrow x^2 - 13x + 42 = 0 \\Rightarrow (x - 6)(x - 7) = 0 \\Rightarrow x = 6, y = 7 \\text{ or } x = 7, y = 6 \\)",
    "solutionSteps": [
      {
        "explanation": "Express \\( y \\) in terms of \\( x \\).",
        "workingOut": "\\(y = 13 - x\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute into the hyperbola equation.",
        "workingOut": "\\(x(13 - x) = 42 \\Rightarrow 13x - x^2 = 42\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange terms and solve the quadratic.",
        "workingOut": "\\(x^2 - 13x + 42 = 0 \\Rightarrow (x - 6)(x - 7) = 0 \\Rightarrow x = 6 \\text{ or } 7\\)",
        "graphData": null
      }
    ],
    "t": "Simultaneous equations",
    "id": "y11-1f-h72"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the intersection points: \\( y = x^2 - 2 \\) and \\( y = 8 - x^2 \\).",
    "options": [
      {
        "text": "\\(x = -2.23606797749979, y = 3.000000000000001 \\text{ or } x = 2.23606797749979, y = 3.000000000000001\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, y = -2 \\text{ or } x = 0, y = 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2.23606797749979, y = 8 \\text{ or } x = 2.23606797749979, y = -2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 2.23606797749979, y = 3.000000000000001\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Equate the two parabolas to solve for \\( x \\).",
    "solution": "\\( x^2 - 2 = 8 - x^2 \\Rightarrow 2x^2 = 10 \\Rightarrow x^2 = 5 \\Rightarrow x = \\pm 2.23606797749979 \\Rightarrow y = 3.000000000000001 \\)",
    "solutionSteps": [
      {
        "explanation": "Equate both parabola equations.",
        "workingOut": "\\(x^2 - 2 = 8 - x^2\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( x \\).",
        "workingOut": "\\(2x^2 = 10 \\Rightarrow x^2 = 5 \\Rightarrow x = \\pm 2.23606797749979\\)",
        "graphData": null
      },
      {
        "explanation": "Find the corresponding \\( y \\) coordinates.",
        "workingOut": "\\(y = (2.23606797749979)^2 - 2 = 3.000000000000001\\)",
        "graphData": null
      }
    ],
    "t": "Simultaneous equations",
    "id": "y11-1f-h73"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the intersection points: \\( y = x^2 - 3 \\) and \\( y = 9 - x^2 \\).",
    "options": [
      {
        "text": "\\(x = -2.449489742783178, y = 2.999999999999999 \\text{ or } x = 2.449489742783178, y = 2.999999999999999\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, y = -3 \\text{ or } x = 0, y = 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2.449489742783178, y = 9 \\text{ or } x = 2.449489742783178, y = -3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 2.449489742783178, y = 2.999999999999999\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Equate the two parabolas to solve for \\( x \\).",
    "solution": "\\( x^2 - 3 = 9 - x^2 \\Rightarrow 2x^2 = 12 \\Rightarrow x^2 = 6 \\Rightarrow x = \\pm 2.449489742783178 \\Rightarrow y = 2.999999999999999 \\)",
    "solutionSteps": [
      {
        "explanation": "Equate both parabola equations.",
        "workingOut": "\\(x^2 - 3 = 9 - x^2\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( x \\).",
        "workingOut": "\\(2x^2 = 12 \\Rightarrow x^2 = 6 \\Rightarrow x = \\pm 2.449489742783178\\)",
        "graphData": null
      },
      {
        "explanation": "Find the corresponding \\( y \\) coordinates.",
        "workingOut": "\\(y = (2.449489742783178)^2 - 3 = 2.999999999999999\\)",
        "graphData": null
      }
    ],
    "t": "Simultaneous equations",
    "id": "y11-1f-h74"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the intersection points: \\( y = x^2 - 4 \\) and \\( y = 10 - x^2 \\).",
    "options": [
      {
        "text": "\\(x = -2.6457513110645907, y = 3.000000000000001 \\text{ or } x = 2.6457513110645907, y = 3.000000000000001\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, y = -4 \\text{ or } x = 0, y = 10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2.6457513110645907, y = 10 \\text{ or } x = 2.6457513110645907, y = -4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 2.6457513110645907, y = 3.000000000000001\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Equate the two parabolas to solve for \\( x \\).",
    "solution": "\\( x^2 - 4 = 10 - x^2 \\Rightarrow 2x^2 = 14 \\Rightarrow x^2 = 7 \\Rightarrow x = \\pm 2.6457513110645907 \\Rightarrow y = 3.000000000000001 \\)",
    "solutionSteps": [
      {
        "explanation": "Equate both parabola equations.",
        "workingOut": "\\(x^2 - 4 = 10 - x^2\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( x \\).",
        "workingOut": "\\(2x^2 = 14 \\Rightarrow x^2 = 7 \\Rightarrow x = \\pm 2.6457513110645907\\)",
        "graphData": null
      },
      {
        "explanation": "Find the corresponding \\( y \\) coordinates.",
        "workingOut": "\\(y = (2.6457513110645907)^2 - 4 = 3.000000000000001\\)",
        "graphData": null
      }
    ],
    "t": "Simultaneous equations",
    "id": "y11-1f-h75"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the intersection points: \\( y = x^2 - 5 \\) and \\( y = 11 - x^2 \\).",
    "options": [
      {
        "text": "\\(x = -2.8284271247461903, y = 3.0000000000000018 \\text{ or } x = 2.8284271247461903, y = 3.0000000000000018\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, y = -5 \\text{ or } x = 0, y = 11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2.8284271247461903, y = 11 \\text{ or } x = 2.8284271247461903, y = -5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 2.8284271247461903, y = 3.0000000000000018\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Equate the two parabolas to solve for \\( x \\).",
    "solution": "\\( x^2 - 5 = 11 - x^2 \\Rightarrow 2x^2 = 16 \\Rightarrow x^2 = 8 \\Rightarrow x = \\pm 2.8284271247461903 \\Rightarrow y = 3.0000000000000018 \\)",
    "solutionSteps": [
      {
        "explanation": "Equate both parabola equations.",
        "workingOut": "\\(x^2 - 5 = 11 - x^2\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( x \\).",
        "workingOut": "\\(2x^2 = 16 \\Rightarrow x^2 = 8 \\Rightarrow x = \\pm 2.8284271247461903\\)",
        "graphData": null
      },
      {
        "explanation": "Find the corresponding \\( y \\) coordinates.",
        "workingOut": "\\(y = (2.8284271247461903)^2 - 5 = 3.0000000000000018\\)",
        "graphData": null
      }
    ],
    "t": "Simultaneous equations",
    "id": "y11-1f-h76"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve simultaneously: \\( y - 2x = 4 \\) and \\( x^2 + y^2 = 16 \\).",
    "options": [
      {
        "text": "\\(x = -3.2, y = -2.4 \\text{ or } x = 0, y = 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 2, y = 8 \\text{ or } x = 0, y = -4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2, y = 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, y = 4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Substitute \\( y = ax + b \\) into the second equation.",
    "solution": "\\( x^2 + (2x + 4)^2 = 16 ... \\text{ wait } \\)",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( y = ${a}x + ${b} \\) into the circle equation.",
        "workingOut": "\\(x^2 + (2x + 4)^2 = 16\\)",
        "graphData": null
      },
      {
        "explanation": "Expand and simplify.",
        "workingOut": "\\(x^2 + 4x^2 + 16x + 16 = 16 \\Rightarrow (5)x^2 + 16x = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( x \\) and find \\( y \\).",
        "workingOut": "\\(x( (5)x + 16 ) = 0 \\Rightarrow x = 0 \\text{ or } x = -\\frac{2*a*b}{5} \\)",
        "graphData": null
      }
    ],
    "t": "Simultaneous equations",
    "id": "y11-1f-h77"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve simultaneously: \\( y - 3x = 9 \\) and \\( x^2 + y^2 = 81 \\).",
    "options": [
      {
        "text": "\\(x = -5.4, y = -7.2 \\text{ or } x = 0, y = 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 3, y = 18 \\text{ or } x = 0, y = -9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -3, y = 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, y = 9\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Substitute \\( y = ax + b \\) into the second equation.",
    "solution": "\\( x^2 + (3x + 9)^2 = 81 ... \\text{ wait } \\)",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( y = ${a}x + ${b} \\) into the circle equation.",
        "workingOut": "\\(x^2 + (3x + 9)^2 = 81\\)",
        "graphData": null
      },
      {
        "explanation": "Expand and simplify.",
        "workingOut": "\\(x^2 + 9x^2 + 54x + 81 = 81 \\Rightarrow (10)x^2 + 54x = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( x \\) and find \\( y \\).",
        "workingOut": "\\(x( (10)x + 54 ) = 0 \\Rightarrow x = 0 \\text{ or } x = -\\frac{2*a*b}{10} \\)",
        "graphData": null
      }
    ],
    "t": "Simultaneous equations",
    "id": "y11-1f-h78"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve simultaneously: \\( y - 4x = 16 \\) and \\( x^2 + y^2 = 256 \\).",
    "options": [
      {
        "text": "\\(x = -\\frac{128}{17}, y = -\\frac{240}{17} \\text{ or } x = 0, y = 16\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 4, y = 32 \\text{ or } x = 0, y = -16\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -4, y = 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, y = 16\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Substitute \\( y = ax + b \\) into the second equation.",
    "solution": "\\( x^2 + (4x + 16)^2 = 256 ... \\text{ wait } \\)",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( y = ${a}x + ${b} \\) into the circle equation.",
        "workingOut": "\\(x^2 + (4x + 16)^2 = 256\\)",
        "graphData": null
      },
      {
        "explanation": "Expand and simplify.",
        "workingOut": "\\(x^2 + 16x^2 + 128x + 256 = 256 \\Rightarrow (17)x^2 + 128x = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( x \\) and find \\( y \\).",
        "workingOut": "\\(x( (17)x + 128 ) = 0 \\Rightarrow x = 0 \\text{ or } x = -\\frac{2*a*b}{17} \\)",
        "graphData": null
      }
    ],
    "t": "Simultaneous equations",
    "id": "y11-1f-h79"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve simultaneously: \\( y - 5x = 25 \\) and \\( x^2 + y^2 = 625 \\).",
    "options": [
      {
        "text": "\\(x = -\\frac{125}{13}, y = -\\frac{300}{13} \\text{ or } x = 0, y = 25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 5, y = 50 \\text{ or } x = 0, y = -25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -5, y = 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, y = 25\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Substitute \\( y = ax + b \\) into the second equation.",
    "solution": "\\( x^2 + (5x + 25)^2 = 625 ... \\text{ wait } \\)",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( y = ${a}x + ${b} \\) into the circle equation.",
        "workingOut": "\\(x^2 + (5x + 25)^2 = 625\\)",
        "graphData": null
      },
      {
        "explanation": "Expand and simplify.",
        "workingOut": "\\(x^2 + 25x^2 + 250x + 625 = 625 \\Rightarrow (26)x^2 + 250x = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( x \\) and find \\( y \\).",
        "workingOut": "\\(x( (26)x + 250 ) = 0 \\Rightarrow x = 0 \\text{ or } x = -\\frac{2*a*b}{26} \\)",
        "graphData": null
      }
    ],
    "t": "Simultaneous equations",
    "id": "y11-1f-h80"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A right-angled triangle has a hypotenuse of length \\( 10 \\) cm. The difference between the lengths of the other two sides is \\( 2 \\) cm. Find their lengths.",
    "options": [
      {
        "text": "\\(6 \\text{ cm and } 8 \\text{ cm}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2 \\text{ cm and } 4 \\text{ cm}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4 \\text{ cm and } 6 \\text{ cm}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8 \\text{ cm and } 10 \\text{ cm}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Let the sides be \\( x \\) and \\( x + a \\). Use Pythagoras theorem.",
    "solution": "\\( x^2 + (x + 2)^2 = 100 \\Rightarrow 2x^2 + 4x + 4 = 100 \\Rightarrow 2x^2 + 4x - 96 = 0 \\Rightarrow x = 6 \\)",
    "solutionSteps": [
      {
        "explanation": "Set up the Pythagoras equation.",
        "workingOut": "\\(x^2 + (x + 2)^2 = 10^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand and rearrange into standard quadratic form.",
        "workingOut": "\\(2x^2 + 4x + 4 = 100 \\Rightarrow 2x^2 + 4x - 96 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the quadratic equation for positive \\( x \\).",
        "workingOut": "\\(x = 6 \\quad \\text{so the sides are } 6 \\text{ cm and } 8 \\text{ cm}\\)",
        "graphData": null
      }
    ],
    "t": "Geometric quadratics",
    "id": "y11-1f-h81"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A right-angled triangle has a hypotenuse of length \\( 15 \\) cm. The difference between the lengths of the other two sides is \\( 3 \\) cm. Find their lengths.",
    "options": [
      {
        "text": "\\(9 \\text{ cm and } 12 \\text{ cm}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3 \\text{ cm and } 6 \\text{ cm}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6 \\text{ cm and } 9 \\text{ cm}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12 \\text{ cm and } 15 \\text{ cm}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Let the sides be \\( x \\) and \\( x + a \\). Use Pythagoras theorem.",
    "solution": "\\( x^2 + (x + 3)^2 = 225 \\Rightarrow 2x^2 + 6x + 9 = 225 \\Rightarrow 2x^2 + 6x - 216 = 0 \\Rightarrow x = 9 \\)",
    "solutionSteps": [
      {
        "explanation": "Set up the Pythagoras equation.",
        "workingOut": "\\(x^2 + (x + 3)^2 = 15^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand and rearrange into standard quadratic form.",
        "workingOut": "\\(2x^2 + 6x + 9 = 225 \\Rightarrow 2x^2 + 6x - 216 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the quadratic equation for positive \\( x \\).",
        "workingOut": "\\(x = 9 \\quad \\text{so the sides are } 9 \\text{ cm and } 12 \\text{ cm}\\)",
        "graphData": null
      }
    ],
    "t": "Geometric quadratics",
    "id": "y11-1f-h82"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A right-angled triangle has a hypotenuse of length \\( 20 \\) cm. The difference between the lengths of the other two sides is \\( 4 \\) cm. Find their lengths.",
    "options": [
      {
        "text": "\\(12 \\text{ cm and } 16 \\text{ cm}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4 \\text{ cm and } 8 \\text{ cm}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8 \\text{ cm and } 12 \\text{ cm}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(16 \\text{ cm and } 20 \\text{ cm}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Let the sides be \\( x \\) and \\( x + a \\). Use Pythagoras theorem.",
    "solution": "\\( x^2 + (x + 4)^2 = 400 \\Rightarrow 2x^2 + 8x + 16 = 400 \\Rightarrow 2x^2 + 8x - 384 = 0 \\Rightarrow x = 12 \\)",
    "solutionSteps": [
      {
        "explanation": "Set up the Pythagoras equation.",
        "workingOut": "\\(x^2 + (x + 4)^2 = 20^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand and rearrange into standard quadratic form.",
        "workingOut": "\\(2x^2 + 8x + 16 = 400 \\Rightarrow 2x^2 + 8x - 384 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the quadratic equation for positive \\( x \\).",
        "workingOut": "\\(x = 12 \\quad \\text{so the sides are } 12 \\text{ cm and } 16 \\text{ cm}\\)",
        "graphData": null
      }
    ],
    "t": "Geometric quadratics",
    "id": "y11-1f-h83"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A right-angled triangle has a hypotenuse of length \\( 25 \\) cm. The difference between the lengths of the other two sides is \\( 5 \\) cm. Find their lengths.",
    "options": [
      {
        "text": "\\(15 \\text{ cm and } 20 \\text{ cm}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5 \\text{ cm and } 10 \\text{ cm}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10 \\text{ cm and } 15 \\text{ cm}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(20 \\text{ cm and } 25 \\text{ cm}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Let the sides be \\( x \\) and \\( x + a \\). Use Pythagoras theorem.",
    "solution": "\\( x^2 + (x + 5)^2 = 625 \\Rightarrow 2x^2 + 10x + 25 = 625 \\Rightarrow 2x^2 + 10x - 600 = 0 \\Rightarrow x = 15 \\)",
    "solutionSteps": [
      {
        "explanation": "Set up the Pythagoras equation.",
        "workingOut": "\\(x^2 + (x + 5)^2 = 25^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand and rearrange into standard quadratic form.",
        "workingOut": "\\(2x^2 + 10x + 25 = 625 \\Rightarrow 2x^2 + 10x - 600 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the quadratic equation for positive \\( x \\).",
        "workingOut": "\\(x = 15 \\quad \\text{so the sides are } 15 \\text{ cm and } 20 \\text{ cm}\\)",
        "graphData": null
      }
    ],
    "t": "Geometric quadratics",
    "id": "y11-1f-h84"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Pipe A can fill a tank in \\( x \\) hours. Pipe B takes \\( 4 \\) hours longer than Pipe A. Together they fill the tank in \\( 3 \\) hours. Find the time taken by Pipe A. (Format: 'x' hours)",
    "options": [
      {
        "text": "\\(1 + \\sqrt{13} \\approx 4.61 \\text{ hours}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4 hours\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8 hours\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10 hours\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "The combined work rate is \\( \\frac{1}{x} + \\frac{1}{x + D} = \\frac{1}{T} \\).",
    "solution": "\\( \\frac{1}{x} + \\frac{1}{x + 4} = \\frac{1}{3} \\Rightarrow x(x + 4) = 3(2x + 4) \\Rightarrow x^2 - 2x - 12 = 0 \\)",
    "solutionSteps": [
      {
        "explanation": "Set up the work-rate equation.",
        "workingOut": "\\(\\frac{1}{x} + \\frac{1}{x + 4} = \\frac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Clear fractions by multiplying by the LCD.",
        "workingOut": "\\(x(x + 4) = 3(2x + 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange into a quadratic equation and solve.",
        "workingOut": "\\(x^2 + 4x = 6x + 12 \\Rightarrow x^2 - 2x - 12 = 0\\)",
        "graphData": null
      }
    ],
    "t": "Work-rate word problems",
    "id": "y11-1f-h85"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Pipe A can fill a tank in \\( x \\) hours. Pipe B takes \\( 5 \\) hours longer than Pipe A. Together they fill the tank in \\( 4 \\) hours. Find the time taken by Pipe A. (Format: 'x' hours)",
    "options": [
      {
        "text": "\\(\\frac{3 + \\sqrt{89}}{2} \\approx 6.22 \\text{ hours}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4 hours\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8 hours\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10 hours\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "The combined work rate is \\( \\frac{1}{x} + \\frac{1}{x + D} = \\frac{1}{T} \\).",
    "solution": "\\( \\frac{1}{x} + \\frac{1}{x + 5} = \\frac{1}{4} \\Rightarrow x(x + 5) = 4(2x + 5) \\Rightarrow x^2 - 3x - 20 = 0 \\)",
    "solutionSteps": [
      {
        "explanation": "Set up the work-rate equation.",
        "workingOut": "\\(\\frac{1}{x} + \\frac{1}{x + 5} = \\frac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Clear fractions by multiplying by the LCD.",
        "workingOut": "\\(x(x + 5) = 4(2x + 5)\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange into a quadratic equation and solve.",
        "workingOut": "\\(x^2 + 5x = 8x + 20 \\Rightarrow x^2 - 3x - 20 = 0\\)",
        "graphData": null
      }
    ],
    "t": "Work-rate word problems",
    "id": "y11-1f-h86"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Pipe A can fill a tank in \\( x \\) hours. Pipe B takes \\( 6 \\) hours longer than Pipe A. Together they fill the tank in \\( 5 \\) hours. Find the time taken by Pipe A. (Format: 'x' hours)",
    "options": [
      {
        "text": "\\(2 + \\sqrt{34} \\approx 7.83 \\text{ hours}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4 hours\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8 hours\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10 hours\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "The combined work rate is \\( \\frac{1}{x} + \\frac{1}{x + D} = \\frac{1}{T} \\).",
    "solution": "\\( \\frac{1}{x} + \\frac{1}{x + 6} = \\frac{1}{5} \\Rightarrow x(x + 6) = 5(2x + 6) \\Rightarrow x^2 - 4x - 30 = 0 \\)",
    "solutionSteps": [
      {
        "explanation": "Set up the work-rate equation.",
        "workingOut": "\\(\\frac{1}{x} + \\frac{1}{x + 6} = \\frac{1}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Clear fractions by multiplying by the LCD.",
        "workingOut": "\\(x(x + 6) = 5(2x + 6)\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange into a quadratic equation and solve.",
        "workingOut": "\\(x^2 + 6x = 10x + 30 \\Rightarrow x^2 - 4x - 30 = 0\\)",
        "graphData": null
      }
    ],
    "t": "Work-rate word problems",
    "id": "y11-1f-h87"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Pipe A can fill a tank in \\( x \\) hours. Pipe B takes \\( 7 \\) hours longer than Pipe A. Together they fill the tank in \\( 6 \\) hours. Find the time taken by Pipe A. (Format: 'x' hours)",
    "options": [
      {
        "text": "\\(\\frac{5 + \\sqrt{193}}{2} \\approx 9.44 \\text{ hours}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4 hours\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8 hours\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10 hours\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "The combined work rate is \\( \\frac{1}{x} + \\frac{1}{x + D} = \\frac{1}{T} \\).",
    "solution": "\\( \\frac{1}{x} + \\frac{1}{x + 7} = \\frac{1}{6} \\Rightarrow x(x + 7) = 6(2x + 7) \\Rightarrow x^2 - 5x - 42 = 0 \\)",
    "solutionSteps": [
      {
        "explanation": "Set up the work-rate equation.",
        "workingOut": "\\(\\frac{1}{x} + \\frac{1}{x + 7} = \\frac{1}{6}\\)",
        "graphData": null
      },
      {
        "explanation": "Clear fractions by multiplying by the LCD.",
        "workingOut": "\\(x(x + 7) = 6(2x + 7)\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange into a quadratic equation and solve.",
        "workingOut": "\\(x^2 + 7x = 12x + 42 \\Rightarrow x^2 - 5x - 42 = 0\\)",
        "graphData": null
      }
    ],
    "t": "Work-rate word problems",
    "id": "y11-1f-h88"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A boat travels \\( 13 \\) km upstream and then returns. The speed of the stream is \\( 2 \\) km/h. If the total round trip takes \\( 4 \\) hours, find the speed of the boat in still water.",
    "options": [
      {
        "text": "\\(8 km/h\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6 km/h\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10 km/h\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12 km/h\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Upstream speed is \\( v - s \\), downstream speed is \\( v + s \\). Set up the time equation.",
    "solution": "\\( \\frac{13}{v - 2} + \\frac{13}{v + 2} = 4 \\Rightarrow 13(2v) = 4(v^2 - 4) \\)",
    "solutionSteps": [
      {
        "explanation": "Set up the total time equation.",
        "workingOut": "\\(\\frac{13}{v - 2} + \\frac{13}{v + 2} = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Clear denominators.",
        "workingOut": "\\(13(v + 2) + 13(v - 2) = 4(v^2 - 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the resulting quadratic equation for positive \\( v \\).",
        "workingOut": "\\(26v = 4v^2 - 16\\)",
        "graphData": null
      }
    ],
    "t": "Speed-distance-time",
    "id": "y11-1f-h89"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A boat travels \\( 14 \\) km upstream and then returns. The speed of the stream is \\( 3 \\) km/h. If the total round trip takes \\( 5 \\) hours, find the speed of the boat in still water.",
    "options": [
      {
        "text": "\\(6.90 \\text{ km/h}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6 km/h\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10 km/h\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12 km/h\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Upstream speed is \\( v - s \\), downstream speed is \\( v + s \\). Set up the time equation.",
    "solution": "\\( \\frac{14}{v - 3} + \\frac{14}{v + 3} = 5 \\Rightarrow 14(2v) = 5(v^2 - 9) \\)",
    "solutionSteps": [
      {
        "explanation": "Set up the total time equation.",
        "workingOut": "\\(\\frac{14}{v - 3} + \\frac{14}{v + 3} = 5\\)",
        "graphData": null
      },
      {
        "explanation": "Clear denominators.",
        "workingOut": "\\(14(v + 3) + 14(v - 3) = 5(v^2 - 9)\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the resulting quadratic equation for positive \\( v \\).",
        "workingOut": "\\(28v = 5v^2 - 45\\)",
        "graphData": null
      }
    ],
    "t": "Speed-distance-time",
    "id": "y11-1f-h90"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A boat travels \\( 15 \\) km upstream and then returns. The speed of the stream is \\( 4 \\) km/h. If the total round trip takes \\( 6 \\) hours, find the speed of the boat in still water.",
    "options": [
      {
        "text": "\\(\\frac{5 + \\sqrt{89}}{2} \\approx 7.22 \\text{ km/h}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6 km/h\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10 km/h\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12 km/h\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Upstream speed is \\( v - s \\), downstream speed is \\( v + s \\). Set up the time equation.",
    "solution": "\\( \\frac{15}{v - 4} + \\frac{15}{v + 4} = 6 \\Rightarrow 15(2v) = 6(v^2 - 16) \\)",
    "solutionSteps": [
      {
        "explanation": "Set up the total time equation.",
        "workingOut": "\\(\\frac{15}{v - 4} + \\frac{15}{v + 4} = 6\\)",
        "graphData": null
      },
      {
        "explanation": "Clear denominators.",
        "workingOut": "\\(15(v + 4) + 15(v - 4) = 6(v^2 - 16)\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the resulting quadratic equation for positive \\( v \\).",
        "workingOut": "\\(30v = 6v^2 - 96\\)",
        "graphData": null
      }
    ],
    "t": "Speed-distance-time",
    "id": "y11-1f-h91"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A boat travels \\( 16 \\) km upstream and then returns. The speed of the stream is \\( 5 \\) km/h. If the total round trip takes \\( 7 \\) hours, find the speed of the boat in still water.",
    "options": [
      {
        "text": "\\(\\frac{16 + \\sqrt{1481}}{7} \\approx 7.78 \\text{ km/h}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6 km/h\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10 km/h\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12 km/h\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Upstream speed is \\( v - s \\), downstream speed is \\( v + s \\). Set up the time equation.",
    "solution": "\\( \\frac{16}{v - 5} + \\frac{16}{v + 5} = 7 \\Rightarrow 16(2v) = 7(v^2 - 25) \\)",
    "solutionSteps": [
      {
        "explanation": "Set up the total time equation.",
        "workingOut": "\\(\\frac{16}{v - 5} + \\frac{16}{v + 5} = 7\\)",
        "graphData": null
      },
      {
        "explanation": "Clear denominators.",
        "workingOut": "\\(16(v + 5) + 16(v - 5) = 7(v^2 - 25)\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the resulting quadratic equation for positive \\( v \\).",
        "workingOut": "\\(32v = 7v^2 - 175\\)",
        "graphData": null
      }
    ],
    "t": "Speed-distance-time",
    "id": "y11-1f-h92"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the dimensions of a rectangle with a perimeter of \\( 22 \\) cm and an area of \\( 28 \\) cm\\(^2\\).",
    "options": [
      {
        "text": "\\(4 \\text{ cm } \\times 7 \\text{ cm}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3 \\text{ cm } \\times 8 \\text{ cm}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2 \\text{ cm } \\times 9 \\text{ cm}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4 \\text{ cm } \\times 9 \\text{ cm}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Use the formulas \\( 2(w+l) = P \\) and \\( wl = A \\) to set up simultaneous equations.",
    "solution": "\\( w + l = 11 \\Rightarrow l = 11 - w \\Rightarrow w(11 - w) = 28 \\Rightarrow w^2 - 11w + 28 = 0 \\Rightarrow (w - 4)(w - 7) = 0 \\)",
    "solutionSteps": [
      {
        "explanation": "Set up equations for area and perimeter.",
        "workingOut": "\\(2(w + l) = 22, \\quad wl = 28\\)",
        "graphData": null
      },
      {
        "explanation": "Form a single quadratic equation for the width \\( w \\).",
        "workingOut": "\\(w(11 - w) = 28 \\Rightarrow w^2 - 11w + 28 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the quadratic equation to find both dimensions.",
        "workingOut": "\\((w - 4)(w - 7) = 0 \\Rightarrow w = 4, \\quad l = 7\\)",
        "graphData": null
      }
    ],
    "t": "Geometric quadratics",
    "id": "y11-1f-h93"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the dimensions of a rectangle with a perimeter of \\( 26 \\) cm and an area of \\( 40 \\) cm\\(^2\\).",
    "options": [
      {
        "text": "\\(5 \\text{ cm } \\times 8 \\text{ cm}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4 \\text{ cm } \\times 9 \\text{ cm}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3 \\text{ cm } \\times 10 \\text{ cm}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5 \\text{ cm } \\times 10 \\text{ cm}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Use the formulas \\( 2(w+l) = P \\) and \\( wl = A \\) to set up simultaneous equations.",
    "solution": "\\( w + l = 13 \\Rightarrow l = 13 - w \\Rightarrow w(13 - w) = 40 \\Rightarrow w^2 - 13w + 40 = 0 \\Rightarrow (w - 5)(w - 8) = 0 \\)",
    "solutionSteps": [
      {
        "explanation": "Set up equations for area and perimeter.",
        "workingOut": "\\(2(w + l) = 26, \\quad wl = 40\\)",
        "graphData": null
      },
      {
        "explanation": "Form a single quadratic equation for the width \\( w \\).",
        "workingOut": "\\(w(13 - w) = 40 \\Rightarrow w^2 - 13w + 40 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the quadratic equation to find both dimensions.",
        "workingOut": "\\((w - 5)(w - 8) = 0 \\Rightarrow w = 5, \\quad l = 8\\)",
        "graphData": null
      }
    ],
    "t": "Geometric quadratics",
    "id": "y11-1f-h94"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the dimensions of a rectangle with a perimeter of \\( 30 \\) cm and an area of \\( 54 \\) cm\\(^2\\).",
    "options": [
      {
        "text": "\\(6 \\text{ cm } \\times 9 \\text{ cm}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5 \\text{ cm } \\times 10 \\text{ cm}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4 \\text{ cm } \\times 11 \\text{ cm}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6 \\text{ cm } \\times 11 \\text{ cm}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Use the formulas \\( 2(w+l) = P \\) and \\( wl = A \\) to set up simultaneous equations.",
    "solution": "\\( w + l = 15 \\Rightarrow l = 15 - w \\Rightarrow w(15 - w) = 54 \\Rightarrow w^2 - 15w + 54 = 0 \\Rightarrow (w - 6)(w - 9) = 0 \\)",
    "solutionSteps": [
      {
        "explanation": "Set up equations for area and perimeter.",
        "workingOut": "\\(2(w + l) = 30, \\quad wl = 54\\)",
        "graphData": null
      },
      {
        "explanation": "Form a single quadratic equation for the width \\( w \\).",
        "workingOut": "\\(w(15 - w) = 54 \\Rightarrow w^2 - 15w + 54 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the quadratic equation to find both dimensions.",
        "workingOut": "\\((w - 6)(w - 9) = 0 \\Rightarrow w = 6, \\quad l = 9\\)",
        "graphData": null
      }
    ],
    "t": "Geometric quadratics",
    "id": "y11-1f-h95"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the dimensions of a rectangle with a perimeter of \\( 34 \\) cm and an area of \\( 70 \\) cm\\(^2\\).",
    "options": [
      {
        "text": "\\(7 \\text{ cm } \\times 10 \\text{ cm}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6 \\text{ cm } \\times 11 \\text{ cm}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5 \\text{ cm } \\times 12 \\text{ cm}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7 \\text{ cm } \\times 12 \\text{ cm}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Use the formulas \\( 2(w+l) = P \\) and \\( wl = A \\) to set up simultaneous equations.",
    "solution": "\\( w + l = 17 \\Rightarrow l = 17 - w \\Rightarrow w(17 - w) = 70 \\Rightarrow w^2 - 17w + 70 = 0 \\Rightarrow (w - 7)(w - 10) = 0 \\)",
    "solutionSteps": [
      {
        "explanation": "Set up equations for area and perimeter.",
        "workingOut": "\\(2(w + l) = 34, \\quad wl = 70\\)",
        "graphData": null
      },
      {
        "explanation": "Form a single quadratic equation for the width \\( w \\).",
        "workingOut": "\\(w(17 - w) = 70 \\Rightarrow w^2 - 17w + 70 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the quadratic equation to find both dimensions.",
        "workingOut": "\\((w - 7)(w - 10) = 0 \\Rightarrow w = 7, \\quad l = 10\\)",
        "graphData": null
      }
    ],
    "t": "Geometric quadratics",
    "id": "y11-1f-h96"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A ball is projected upwards. Its height \\( h \\) meters after \\( t \\) seconds is given by \\( h = -5t^2 + 25t + 10 \\). Find the time taken to reach the maximum height.",
    "options": [
      {
        "text": "\\(2.5 \\text{ seconds}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5 \\text{ seconds}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1.25 \\text{ seconds}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1 \\text{ second}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "The maximum height of a quadratic \\( at^2 + bt + c \\) is reached at the axis of symmetry \\( t = -\\frac{b}{2a} \\).",
    "solution": "\\( t = -\\frac{25}{2(-5)} = \\frac{25}{10} \\)",
    "solutionSteps": [
      {
        "explanation": "Identify the coefficients from the quadratic formula for height.",
        "workingOut": "\\(a = -5, \\quad b = 25, \\quad c = 10\\)",
        "graphData": null
      },
      {
        "explanation": "Use the vertex time formula \\( t = -\\frac{b}{2a} \\).",
        "workingOut": "\\(t = -\\frac{25}{2(-5)}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify to find the final time.",
        "workingOut": "\\(t = 2.5 \\text{ seconds}\\)",
        "graphData": null
      }
    ],
    "t": "Projectile motion",
    "id": "y11-1f-h97"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A ball is projected upwards. Its height \\( h \\) meters after \\( t \\) seconds is given by \\( h = -5t^2 + 30t + 10 \\). Find the time taken to reach the maximum height.",
    "options": [
      {
        "text": "\\(3 \\text{ seconds}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6 \\text{ seconds}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1.5 \\text{ seconds}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1 \\text{ second}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "The maximum height of a quadratic \\( at^2 + bt + c \\) is reached at the axis of symmetry \\( t = -\\frac{b}{2a} \\).",
    "solution": "\\( t = -\\frac{30}{2(-5)} = \\frac{30}{10} \\)",
    "solutionSteps": [
      {
        "explanation": "Identify the coefficients from the quadratic formula for height.",
        "workingOut": "\\(a = -5, \\quad b = 30, \\quad c = 10\\)",
        "graphData": null
      },
      {
        "explanation": "Use the vertex time formula \\( t = -\\frac{b}{2a} \\).",
        "workingOut": "\\(t = -\\frac{30}{2(-5)}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify to find the final time.",
        "workingOut": "\\(t = 3 \\text{ seconds}\\)",
        "graphData": null
      }
    ],
    "t": "Projectile motion",
    "id": "y11-1f-h98"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A ball is projected upwards. Its height \\( h \\) meters after \\( t \\) seconds is given by \\( h = -5t^2 + 35t + 10 \\). Find the time taken to reach the maximum height.",
    "options": [
      {
        "text": "\\(3.5 \\text{ seconds}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7 \\text{ seconds}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1.75 \\text{ seconds}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1 \\text{ second}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "The maximum height of a quadratic \\( at^2 + bt + c \\) is reached at the axis of symmetry \\( t = -\\frac{b}{2a} \\).",
    "solution": "\\( t = -\\frac{35}{2(-5)} = \\frac{35}{10} \\)",
    "solutionSteps": [
      {
        "explanation": "Identify the coefficients from the quadratic formula for height.",
        "workingOut": "\\(a = -5, \\quad b = 35, \\quad c = 10\\)",
        "graphData": null
      },
      {
        "explanation": "Use the vertex time formula \\( t = -\\frac{b}{2a} \\).",
        "workingOut": "\\(t = -\\frac{35}{2(-5)}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify to find the final time.",
        "workingOut": "\\(t = 3.5 \\text{ seconds}\\)",
        "graphData": null
      }
    ],
    "t": "Projectile motion",
    "id": "y11-1f-h99"
  },
  {
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A ball is projected upwards. Its height \\( h \\) meters after \\( t \\) seconds is given by \\( h = -5t^2 + 40t + 10 \\). Find the time taken to reach the maximum height.",
    "options": [
      {
        "text": "\\(4 \\text{ seconds}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8 \\text{ seconds}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2 \\text{ seconds}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1 \\text{ second}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "The maximum height of a quadratic \\( at^2 + bt + c \\) is reached at the axis of symmetry \\( t = -\\frac{b}{2a} \\).",
    "solution": "\\( t = -\\frac{40}{2(-5)} = \\frac{40}{10} \\)",
    "solutionSteps": [
      {
        "explanation": "Identify the coefficients from the quadratic formula for height.",
        "workingOut": "\\(a = -5, \\quad b = 40, \\quad c = 10\\)",
        "graphData": null
      },
      {
        "explanation": "Use the vertex time formula \\( t = -\\frac{b}{2a} \\).",
        "workingOut": "\\(t = -\\frac{40}{2(-5)}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify to find the final time.",
        "workingOut": "\\(t = 4 \\text{ seconds}\\)",
        "graphData": null
      }
    ],
    "t": "Projectile motion",
    "id": "y11-1f-h100"
  }
];
