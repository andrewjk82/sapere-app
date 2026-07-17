export const Y11_CH1D_QUESTIONS = [
  {
    "id": "02d1a04690899e6dc7ee781d5d9a3f67",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve for \\( x \\): \\( x - 6\\sqrt{x} + 8 = 0 \\)",
    "options": [
      {
        "text": "\\(x = 2, 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 4, 16\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 4, -16\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\pm 2, \\pm 4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Let \\( u = \\sqrt{x} \\). This means \\( u^2 = x \\). Substitute these in to form a quadratic equation.",
    "solution": "\\(x = 4, 16\\)",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( u = \\sqrt{x} \\) to get a quadratic equation.",
        "workingOut": "\\(u^2 - 6u + 8 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the quadratic trinomial.",
        "workingOut": "\\((u - 2)(u - 4) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( u \\).",
        "workingOut": "\\(u = 2 \\quad \\text{or} \\quad u = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute back \\( \\sqrt{x} = u \\) and square both sides.",
        "workingOut": "\\(\\sqrt{x} = 2 \\Rightarrow x = 4, quad \\sqrt{x} = 4 \\Rightarrow x = 16\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "086fb94b948650d6d2106a4ba81a52a1",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve the fractional equation: \\( \\frac{x}{4} + \\frac{4}{x} = \\frac{17}{4} \\)",
    "options": [
      {
        "text": "\\(x = -1, -16\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 4, 16\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 1, 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 1, 16\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Multiply the entire equation by the lowest common denominator, which is \\( 4x \\), to clear the fractions.",
    "solution": "\\(x = 1, 16\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply every term by the common denominator \\(4x \\).",
        "workingOut": "\\(x^2 + 16 = 17x\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange the quadratic equation into standard form.",
        "workingOut": "\\(x^2 - 17x + 16 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the quadratic trinomial.",
        "workingOut": "\\((x - 1)(x - 16) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Find the solutions.",
        "workingOut": "\\(x = 1, 16\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "099f6085179779f125ae5daab2f01746",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve by factoring: \\( x^2 - 4x + 3 = 0 \\)",
    "options": [
      {
        "text": "\\(x = 1, 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 1, 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 1, 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 1, 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 1, -4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 1, -3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Find two numbers that multiply to 3 and add to -4.",
    "solution": "\\( (x-1)(x-3) = 0 \\Rightarrow x = 1, 3 \\)",
    "solutionSteps": [
      {
        "explanation": "Find two numbers that multiply to 3 and add to -4. They are -1 and -3.",
        "workingOut": "\\((x - 1)(x - 3) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(x = 1, 3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "0b7080d06f3b5e95bdad28818d01e0c8",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve the literal quadratic equation for \\( x \\): \\( x^2 - 4ax + 4a^2 - b^2 = 0 \\)",
    "options": [
      {
        "text": "\\(x = b \\pm 2a\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 2a \\pm b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 2a + b^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2a \\pm b\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Recognize the perfect square trinomial in the first three terms, or apply the quadratic formula.",
    "solution": "\\(x = 2a \\pm b\\)",
    "solutionSteps": [
      {
        "explanation": "Group the first three terms to form a perfect square trinomial.",
        "workingOut": "\\((x^2 - 4ax + 4a^2) - b^2 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the perfect square trinomial.",
        "workingOut": "\\((x - 2a)^2 - b^2 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Move the \\( b^2 \\) term to the right side of the equation.",
        "workingOut": "\\((x - 2a)^2 = b^2\\)",
        "graphData": null
      },
      {
        "explanation": "Take the square root of both sides and isolate \\( x \\).",
        "workingOut": "\\(x - 2a = \\pm b \\Rightarrow x = 2a \\pm b\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "0bcec5098f64fe6c448b00c0dfd66c3b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve the equation: \\( 4a^2 - 49 = 0 \\)",
    "options": [
      {
        "text": "\\(a = - \\frac{7}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = \\pm \\frac{7}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = + \\frac{7}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = \\pm 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = \\pm 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Isolate the quadratic variable.",
    "solution": "\\( 4a^2 = 49 \\Rightarrow a^2 = \\frac{49}{4} \\Rightarrow a = \\pm \\frac{7}{2} \\)",
    "solutionSteps": [
      {
        "explanation": "Add 49 to both sides.",
        "workingOut": "\\(4a^2 = 49\\)",
        "graphData": null
      },
      {
        "explanation": "Divide by 4.",
        "workingOut": "\\(a^2 = \\frac{49}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Take the square root of the fraction.",
        "workingOut": "\\(a = \\pm \\frac{7}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "0c5919fc8e1ca95bb7fe7331416472f5",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve by factoring: \\( c^2 + 3c = 0 \\)",
    "options": [
      {
        "text": "\\(c = +4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(c = -4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(c = -3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(c = +3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Factor out the common factor \\( c \\).",
    "solution": "\\( c(c + 3) = 0 \\Rightarrow c = 0 \\text{ or } c = -3 \\)",
    "solutionSteps": [
      {
        "explanation": "Factor out \\( c \\).",
        "workingOut": "\\(c(c + 3) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Set each linear factor to 0.",
        "workingOut": "\\(c = 0 \\quad \\text{or} \\quad c + 3 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the roots.",
        "workingOut": "\\(c = 0, -3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "0c6273f8a1039597ddb2516eacf4a51d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve by factoring: \\( 5x^2 - 26x + 5 = 0 \\)",
    "options": [
      {
        "text": "\\(x = 5, \\frac{1}{5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 5, \\frac{2}{5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 5, \\frac{-1}{5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 5, \\frac{1}{5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 5, \\frac{0}{5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 5, \\frac{-2}{5}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Find factors of 25 that add to -26.",
    "solution": "\\( (5x-1)(x-5) = 0 \\Rightarrow x = 5, \\frac{1}{5} \\)",
    "solutionSteps": [
      {
        "explanation": "Split the middle term.",
        "workingOut": "\\(5x^2 - 25x - x + 5 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor by grouping.",
        "workingOut": "\\(5x(x - 5) - 1(x - 5) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factored form.",
        "workingOut": "\\((5x - 1)(x - 5) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(x = 5, frac{1}{5}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "0d2f65f8e04563b3c602f7cf411fdc33",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve by completing the square: \\( x^2 - 12x + 20 = 0 \\)",
    "options": [
      {
        "text": "\\(x = 2, 11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 2, 10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 2, 10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 2, -11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 2, -10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 2, 9\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Move 20, then add 36 to both sides.",
    "solution": "\\( x^2 - 12x = -20 \\Rightarrow x^2 - 12x + 36 = 16 \\Rightarrow (x-6)^2 = 16 \\Rightarrow x = 2, 10 \\)",
    "solutionSteps": [
      {
        "explanation": "Isolate variables.",
        "workingOut": "\\(x^2 - 12x = -20\\)",
        "graphData": null
      },
      {
        "explanation": "Add 36 to complete the square.",
        "workingOut": "\\(x^2 - 12x + 36 = 16\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\((x - 6)^2 = 16 \\Rightarrow x - 6 = \\pm 4 \\Rightarrow x = 2, 10\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "0d3d8912781f8cac49788fef63ba8f6d",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve the quadratic equation using the quadratic formula or by completing the square: \\( x^2 - 4x - 1 = 0 \\)",
    "options": [
      {
        "text": "\\(x = 2 \\pm 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\pm \\sqrt{5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2 \\pm \\sqrt{5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 2 \\pm \\sqrt{5}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Complete the square by adding \\( \\left(\\frac{b}{2}\\right)^2 \\) to both sides, or use the quadratic formula.",
    "solution": "\\(x = 2 \\pm \\sqrt{5}\\)",
    "solutionSteps": [
      {
        "explanation": "Add 1 to both sides to begin completing the square.",
        "workingOut": "\\(x^2 - 4x = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Add the square of half the x-coefficient to both sides.",
        "workingOut": "\\(x^2 - 4x + 4 = 1 + 4\\)",
        "graphData": null
      },
      {
        "explanation": "Write the left side as a perfect square and simplify the right side.",
        "workingOut": "\\((x - 2)^2 = 5\\)",
        "graphData": null
      },
      {
        "explanation": "Take the square root of both sides and solve for \\( x \\).",
        "workingOut": "\\(x - 2 = \\pm \\sqrt{5} \\Rightarrow x = 2 \\pm \\sqrt{5}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "114db22804ab07b88abccc0b9edb6385",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve for \\( x \\): \\( x - 8\\sqrt{x} + 15 = 0 \\)",
    "options": [
      {
        "text": "\\(x = \\pm 3, \\pm 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 3, 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 9, 25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 9, -25\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Let \\( u = \\sqrt{x} \\). This means \\( u^2 = x \\). Substitute these in to form a quadratic equation.",
    "solution": "\\(x = 9, 25\\)",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( u = \\sqrt{x} \\) to get a quadratic equation.",
        "workingOut": "\\(u^2 - 8u + 15 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the quadratic trinomial.",
        "workingOut": "\\((u - 3)(u - 5) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( u \\).",
        "workingOut": "\\(u = 3 \\quad \\text{or} \\quad u = 5\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute back \\( \\sqrt{x} = u \\) and square both sides.",
        "workingOut": "\\(\\sqrt{x} = 3 \\Rightarrow x = 9, quad \\sqrt{x} = 5 \\Rightarrow x = 25\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "114f420e680907a09a8ef89329fcc05f",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve the equation reducible to a quadratic form: \\( x^4 - 5x^2 + 6 = 0 \\)",
    "options": [
      {
        "text": "\\(x = \\pm \\sqrt{5}, \\pm \\sqrt{6}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\pm \\sqrt{2}, \\pm \\sqrt{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\sqrt{2}, \\sqrt{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\pm 2, \\pm 3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Let \\( u = x^2 \\). Rewrite the equation in terms of \\( u \\) as a quadratic equation, solve for \\( u \\), then substitute back to find \\( x \\).",
    "solution": "\\(x = \\pm \\sqrt{2}, \\pm \\sqrt{3}\\)",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( u = x^2 \\) to rewrite the equation in quadratic form.",
        "workingOut": "\\(u^2 - 5u + 6 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the quadratic equation in terms of \\( u \\).",
        "workingOut": "\\((u - 2)(u - 3) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( u \\).",
        "workingOut": "\\(u = 2\\quad \\text{or} \\quad u = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute back \\( x^2 = u \\) and solve for \\( x \\) by taking the square root.",
        "workingOut": "\\(x = \\pm \\sqrt{2}, pm \\sqrt{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "1180fb889d581bf68b66c8a2c33a756a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve by factoring: \\( t^2 = 2t \\)",
    "options": [
      {
        "text": "\\(t = 0, 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t = 0, -2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t = 0, -3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t = 0, 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t = 0, 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t = 0, 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Move all terms to one side to get zero on the other side before factoring.",
    "solution": "\\( t^2 - 2t = 0 \\Rightarrow t(t - 2) = 0 \\Rightarrow t = 0, 2 \\)",
    "solutionSteps": [
      {
        "explanation": "Subtract \\( 2t \\) from both sides to form a quadratic equal to zero.",
        "workingOut": "\\(t^2 - 2t = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out the common factor \\( t \\).",
        "workingOut": "\\(t(t - 2) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Find the roots using the zero product property.",
        "workingOut": "\\(t = 0, 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "1e971ae40a06aa76588106faf98321b7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Solve \\(2x^2 - 11x + 12 = 0\\)",
    "options": [
      {
        "text": "\\({1.5, -4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\({3, 4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\({-1.5, -4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\({1.5, 4}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Factor by grouping.",
    "solution": "\\((2x-3)(x-4) = 0 \\Rightarrow x=1.5, 4\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Solve 2x^2 - 11x + 12 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\((2x-3)(x-4) = 0 \\Rightarrow x=1.5, 4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "231c10b5ee9072f0f7fefe5843da2498",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve by factoring: \\( 3a^2 = 7a \\)",
    "options": [
      {
        "text": "\\(a = 0, \\frac{6}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 0, \\frac{-8}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 0, \\frac{7}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 0, \\frac{7}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 0, \\frac{-7}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 0, \\frac{8}{3}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Move all terms to one side.",
    "solution": "\\( 3a^2 - 7a = 0 \\Rightarrow a(3a - 7) = 0 \\Rightarrow a = 0, \\frac{7}{3} \\)",
    "solutionSteps": [
      {
        "explanation": "Move \\( 7a \\) to the left side.",
        "workingOut": "\\(3a^2 - 7a = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out \\( a \\).",
        "workingOut": "\\(a(3a - 7) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(a = 0, frac{7}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "23d623cd53221924be0cd12afcdcc3aa",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve by factoring: \\( 3a^2 - 8a + 4 = 0 \\)",
    "options": [
      {
        "text": "\\(a = 2, \\frac{1}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 2, \\frac{2}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 2, \\frac{2}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 2, \\frac{-2}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 2, \\frac{-3}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 2, \\frac{3}{3}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Multiply 3 by 4 to get 12. Find factors of 12 that add to -8.",
    "solution": "\\( (3a-2)(a-2) = 0 \\Rightarrow a = 2, \\frac{2}{3} \\)",
    "solutionSteps": [
      {
        "explanation": "Find factors of 12 that sum to -8. These are -6 and -2. Split the middle term.",
        "workingOut": "\\(3a^2 - 6a - 2a + 4 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor by grouping.",
        "workingOut": "\\(3a(a - 2) - 2(a - 2) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Collect the binomial factors.",
        "workingOut": "\\((3a - 2)(a - 2) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(a = 2, frac{2}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "28816aac456542c5f05d19c1aff4941a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve using the quadratic formula: \\( a^2 + 16 = 9a \\)",
    "options": [
      {
        "text": "\\(a = \\frac{9 \\pm \\sqrt{17}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = \\frac{9 \\pm 0}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = \\frac{9 \\pm \\sqrt{17}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = \\frac{9 \\pm \\sqrt{17}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = \\frac{9 \\pm 1}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = \\frac{9 \\pm \\sqrt{17}}{2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Rearrange and identify coefficient values.",
    "solution": "\\( a^2 - 9a + 16 = 0 \\Rightarrow a = \\frac{9 \\pm \\sqrt{81 - 64}}{2} = \\frac{9 \\pm \\sqrt{17}}{2} \\)",
    "solutionSteps": [
      {
        "explanation": "Rearrange the equation.",
        "workingOut": "\\(a^2 - 9a + 16 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute coefficients into the formula.",
        "workingOut": "\\(a = \\frac{-(-9) \\pm \\sqrt{(-9)^2 - 4(1)(16)}}{2(1)}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify.",
        "workingOut": "\\(a = \\frac{9 \\pm \\sqrt{81 - 64}}{2} = \\frac{9 \\pm \\sqrt{17}}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "28a652188c0b8f1f6eeb8d1ffdbbdd0b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve the equation: \\( \\frac{5x - 2}{x} = x \\)",
    "options": [
      {
        "text": "\\(x = \\frac{5 \\pm 0}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{5 \\pm \\sqrt{17}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{5 \\pm \\sqrt{17}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{5 \\pm 1}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{5 \\pm \\sqrt{17}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{5 \\pm \\sqrt{17}}{2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Multiply both sides by \\( x \\).",
    "solution": "\\( 5x - 2 = x^2 \\Rightarrow x^2 - 5x + 2 = 0 \\Rightarrow x = \\frac{5 \\pm \\sqrt{25 - 8}}{2} = \\frac{5 \\pm \\sqrt{17}}{2} \\)",
    "solutionSteps": [
      {
        "explanation": "Multiply by \\( x \\) to clear the fraction.",
        "workingOut": "\\(5x - 2 = x^2\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange into standard form.",
        "workingOut": "\\(x^2 - 5x + 2 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the quadratic formula.",
        "workingOut": "\\(x = \\frac{5 \\pm \\sqrt{25 - 8}}{2} = \\frac{5 \\pm \\sqrt{17}}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "2d5180e26ec464e23d6308ab01c21c82",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve by dividing both sides by the coefficient of \\( x^2 \\) and completing the square: \\( 4x^2 - 4x - 5 = 0 \\)",
    "options": [
      {
        "text": "\\(x = \\frac{1 \\pm \\sqrt{6}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{1 \\pm 0}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{1 \\pm \\sqrt{6}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{1 \\pm 1}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{1 + \\sqrt{6}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{1 - \\sqrt{6}}{2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Divide by 4 and add \\( 1/4 \\) to both sides.",
    "solution": "\\( x^2 - x - \\frac{5}{4} = 0 \\Rightarrow x^2 - x + \\frac{1}{4} = \\frac{6}{4} \\Rightarrow (x-\\frac{1}{2})^2 = \\frac{6}{4} \\Rightarrow x = \\frac{1 \\pm \\sqrt{6}}{2} \\)",
    "solutionSteps": [
      {
        "explanation": "Divide by 4.",
        "workingOut": "\\(x^2 - x - \\frac{5}{4} = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Isolate constant and complete the square.",
        "workingOut": "\\(x^2 - x + \\frac{1}{4} = \\frac{5}{4} + \\frac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify.",
        "workingOut": "\\(\\left(x - \\frac{1}{2}\\right)^2 = \\frac{6}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(x - \\frac{1}{2} = \\pm \\frac{\\sqrt{6}}{2} \\Rightarrow x = \\frac{1 \\pm \\sqrt{6}}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "2ebe9f173a18356f19879a82e281a353",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve the equation: \\( y^2 = 49 \\)",
    "options": [
      {
        "text": "\\(y = \\pm 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\pm 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\pm 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\pm 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\pm 7\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Take the square root of both sides, keeping both signs.",
    "solution": "\\( y^2 = 49 \\Rightarrow y = \\pm \\sqrt{49} = \\pm 7 \\)",
    "solutionSteps": [
      {
        "explanation": "Take the square root of both sides to isolate \\( y \\).",
        "workingOut": "\\(y = \\pm \\sqrt{49}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the square root.",
        "workingOut": "\\(y = \\pm 7\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "3385b79fb3fca9a2e70a114c9d72d9d0",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve using the quadratic formula: \\( c^2 - 8c + 5 = 0 \\)",
    "options": [
      {
        "text": "\\(c = 4 \\pm \\sqrt{11}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(c = 4 \\pm 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(c = 4 \\pm \\sqrt{11}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(c = 4 \\pm \\sqrt{11}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(c = 4 \\pm 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(c = 4 \\pm \\sqrt{11}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Apply formula and simplify the final surd.",
    "solution": "\\( c = \\frac{8 \\pm \\sqrt{64 - 20}}{2} = \\frac{8 \\pm \\sqrt{44}}{2} = 4 \\pm \\sqrt{11} \\)",
    "solutionSteps": [
      {
        "explanation": "Apply formula.",
        "workingOut": "\\(c = \\frac{-(-8) \\pm \\sqrt{(-8)^2 - 4(1)(5)}}{2(1)}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify.",
        "workingOut": "\\(c = \\frac{8 \\pm \\sqrt{44}}{2} = \\frac{8 \\pm 2\\sqrt{11}}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Divide by 2.",
        "workingOut": "\\(c = 4 \\pm \\sqrt{11}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "34adc3f618d6be2ab81a274bd978b794",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve by dividing both sides by the coefficient of \\( x^2 \\) and completing the square: \\( 2x^2 - 12x + 9 = 0 \\)",
    "options": [
      {
        "text": "\\(x = \\frac{6 \\pm 3\\sqrt{2}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{6 \\pm 1}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{6 \\pm 3\\sqrt{2}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{6 \\pm 3\\sqrt{2}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{6 \\pm 3\\sqrt{2}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{6 \\pm 0}{2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Divide by 2 and add 9 to both sides.",
    "solution": "\\( x^2 - 6x + \\frac{9}{2} = 0 \\Rightarrow x^2 - 6x + 9 = \\frac{9}{2} \\Rightarrow (x-3)^2 = \\frac{9}{2} \\Rightarrow x = 3 \\pm \\frac{3\\sqrt{2}}{2} = \\frac{6 \\pm 3\\sqrt{2}}{2} \\)",
    "solutionSteps": [
      {
        "explanation": "Divide by 2.",
        "workingOut": "\\(x^2 - 6x + \\frac{9}{2} = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Isolate the constant and add 9.",
        "workingOut": "\\(x^2 - 6x + 9 = 9 - \\frac{9}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify.",
        "workingOut": "\\((x - 3)^2 = \\frac{9}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Solve and rationalise.",
        "workingOut": "\\(x - 3 = \\pm \\sqrt{\\frac{9}{2}} = \\pm \\frac{3\\sqrt{2}}{2} \\Rightarrow x = \\frac{6 \\pm 3\\sqrt{2}}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "35d9b3b0b556b9c2360b467c42c7dcfa",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve by factoring: \\( 4t^2 + 9 = 12t \\)",
    "options": [
      {
        "text": "\\(t = \\frac{5}{5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t = \\frac{3}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t = \\frac{5}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t = \\frac{3}{2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Rearrange and recognize the perfect square trinomial.",
    "solution": "\\( 4t^2 - 12t + 9 = 0 \\Rightarrow (2t-3)^2 = 0 \\Rightarrow t = \\frac{3}{2} \\)",
    "solutionSteps": [
      {
        "explanation": "Rearrange terms.",
        "workingOut": "\\(4t^2 - 12t + 9 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Recognize perfect square trinomial \\( (2t-3)^2 \\).",
        "workingOut": "\\((2t - 3)^2 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the single root.",
        "workingOut": "\\(t = \\frac{3}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "370576154e1abb4e78db15e577b54bcf",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve by factoring: \\( x^2 + 7x + 12 = 0 \\)",
    "options": [
      {
        "text": "\\(x = -3, 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = +3, +4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -3, 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -3, -4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -3, -3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -3, -5\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Look for factors of 12 that sum to 7.",
    "solution": "\\( (x+3)(x+4) = 0 \\Rightarrow x = -3, -4 \\)",
    "solutionSteps": [
      {
        "explanation": "Find two numbers whose product is 12 and sum is 7. They are 3 and 4.",
        "workingOut": "\\((x + 3)(x + 4) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(x = -3, -4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "375903b968e0f6233bb1e56ba26f4b2e",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve using the quadratic formula: \\( u^2 + 4u - 1 = 0 \\)",
    "options": [
      {
        "text": "\\(u = -2 \\pm 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(u = -2 \\pm \\sqrt{5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(u = +2 \\pm \\sqrt{5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(u = -2 \\pm 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(u = -2 \\pm \\sqrt{5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(u = -2 \\pm \\sqrt{5}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Simplify the surd in the discriminant.",
    "solution": "\\( u = \\frac{-4 \\pm \\sqrt{16 - 4(1)(-1)}}{2} = \\frac{-4 \\pm \\sqrt{20}}{2} = -2 \\pm \\sqrt{5} \\)",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( a = 1, b = 4, c = -1 \\) into the quadratic formula.",
        "workingOut": "\\(u = \\frac{-4 \\pm \\sqrt{4^2 - 4(1)(-1)}}{2(1)}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the discriminant.",
        "workingOut": "\\(u = \\frac{-4 \\pm \\sqrt{20}}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the surd \\( \\sqrt{20} = 2\\sqrt{5} \\) and divide terms by 2.",
        "workingOut": "\\(u = \\frac{-4 \\pm 2\\sqrt{5}}{2} = -2 \\pm \\sqrt{5}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "3c6d284c837474ac72ccfdcc1ed75078",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve by factoring: \\( 4y^2 - 7y + 3 = 0 \\)",
    "options": [
      {
        "text": "\\(y = 1, \\frac{2}{4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 1, \\frac{3}{4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 1, \\frac{-3}{4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 1, \\frac{3}{4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 1, \\frac{-4}{4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 1, \\frac{4}{4}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Find factors of 12 that sum to -7.",
    "solution": "\\( (4y-3)(y-1) = 0 \\Rightarrow y = 1, \\frac{3}{4} \\)",
    "solutionSteps": [
      {
        "explanation": "Split the middle term using -4 and -3.",
        "workingOut": "\\(4y^2 - 4y - 3y + 3 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor by grouping.",
        "workingOut": "\\(4y(y - 1) - 3(y - 1) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Write as product of binomials.",
        "workingOut": "\\((4y - 3)(y - 1) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(y = 1, frac{3}{4}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "44e5a2f3d228f4e08cf18c4abd24d09e",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve the equation: \\( x = \\frac{3}{x} + 2 \\)",
    "options": [
      {
        "text": "\\(x = 3, -2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 3, -1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 3, 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 3, +1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 3, 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 3, 0\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Multiply all terms by \\( x \\) to clear the fraction.",
    "solution": "\\( x^2 = 2x + 3 \\Rightarrow x^2 - 2x - 3 = 0 \\Rightarrow (x-3)(x+1) = 0 \\Rightarrow x = 3, -1 \\)",
    "solutionSteps": [
      {
        "explanation": "Multiply both sides by \\( x \\).",
        "workingOut": "\\(x^2 = 2x + 3\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange terms.",
        "workingOut": "\\(x^2 - 2x - 3 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor and solve.",
        "workingOut": "\\((x - 3)(x + 1) = 0 \\Rightarrow x = 3, -1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "4559a1324e14e61f17fcda1dba3e762c",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve the literal quadratic equation for \\( x \\): \\( x^2 - 6ax + 9a^2 - b^2 = 0 \\)",
    "options": [
      {
        "text": "\\(x = 3a \\pm b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 3a + b^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -3a \\pm b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = b \\pm 3a\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Recognize the perfect square trinomial in the first three terms, or apply the quadratic formula.",
    "solution": "\\(x = 3a \\pm b\\)",
    "solutionSteps": [
      {
        "explanation": "Group the first three terms to form a perfect square trinomial.",
        "workingOut": "\\((x^2 - 6ax + 9a^2) - b^2 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the perfect square trinomial.",
        "workingOut": "\\((x - 3a)^2 - b^2 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Move the \\( b^2 \\) term to the right side of the equation.",
        "workingOut": "\\((x - 3a)^2 = b^2\\)",
        "graphData": null
      },
      {
        "explanation": "Take the square root of both sides and isolate \\( x \\).",
        "workingOut": "\\(x - 3a = \\pm b \\Rightarrow x = 3a \\pm b\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "480675d9a8ceb9efb67f8a7c1b4f9597",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve by factoring: \\( 4y^2 = 3y \\)",
    "options": [
      {
        "text": "\\(y = 0, \\frac{2}{4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 0, \\frac{-3}{4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 0, \\frac{3}{4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 0, \\frac{3}{4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 0, \\frac{4}{4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 0, \\frac{-4}{4}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Subtract \\( 3y \\) from both sides.",
    "solution": "\\( 4y^2 - 3y = 0 \\Rightarrow y(4y - 3) = 0 \\Rightarrow y = 0, \\frac{3}{4} \\)",
    "solutionSteps": [
      {
        "explanation": "Set the quadratic to zero.",
        "workingOut": "\\(4y^2 - 3y = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out the common term \\( y \\).",
        "workingOut": "\\(y(4y - 3) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the roots.",
        "workingOut": "\\(y = 0, frac{3}{4}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "4c9ac109fd5812b896cf0b9122c8222b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve by dividing both sides by the coefficient of \\( x^2 \\) and completing the square: \\( 3x^2 + 6x + 2 = 0 \\)",
    "options": [
      {
        "text": "\\(x = -1 \\pm 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -1 + \\frac{\\sqrt{3}}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -1 \\pm 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = +1 \\pm \\frac{\\sqrt{3}}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -1 \\pm \\frac{\\sqrt{3}}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -1 - \\frac{\\sqrt{3}}{3}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "4",
    "blanks": [],
    "hint": "Divide by 3 and complete the square.",
    "solution": "\\( x^2 + 2x + \\frac{2}{3} = 0 \\Rightarrow x^2 + 2x = -\\frac{2}{3} \\Rightarrow x^2 + 2x + 1 = \\frac{1}{3} \\Rightarrow (x+1)^2 = \\frac{1}{3} \\Rightarrow x = -1 \\pm \\frac{\\sqrt{3}}{3} \\)",
    "solutionSteps": [
      {
        "explanation": "Divide by 3.",
        "workingOut": "\\(x^2 + 2x + \\frac{2}{3} = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Isolate variables and add 1.",
        "workingOut": "\\(x^2 + 2x + 1 = 1 - \\frac{2}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite as a square.",
        "workingOut": "\\((x + 1)^2 = \\frac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Solve and rationalise.",
        "workingOut": "\\(x + 1 = \\pm \\frac{\\sqrt{3}}{3} \\Rightarrow x = -1 \\pm \\frac{\\sqrt{3}}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "4d1a7d5d00aad318ea10d3af26ee0d17",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve by factoring: \\( 2x^2 + 7x + 3 = 0 \\)",
    "options": [
      {
        "text": "\\(x = -3, -\\frac{-1}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -3, -\\frac{1}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -3, -\\frac{-2}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -3, -\\frac{0}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -3, -\\frac{2}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = +3, +\\frac{1}{2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Find factors of 6 that add to 7.",
    "solution": "\\( (2x+1)(x+3) = 0 \\Rightarrow x = -3, -\\frac{1}{2} \\)",
    "solutionSteps": [
      {
        "explanation": "Split the middle term using 6 and 1.",
        "workingOut": "\\(2x^2 + 6x + x + 3 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor in pairs.",
        "workingOut": "\\(2x(x + 3) + 1(x + 3) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out the common bracket.",
        "workingOut": "\\((2x + 1)(x + 3) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(x = -3, -\\frac{1}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "515667a95b495a96d510fa3e987e0854",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve by dividing both sides by the coefficient of \\( x^2 \\) and completing the square: \\( 4x^2 + 8x - 5 = 0 \\)",
    "options": [
      {
        "text": "\\(x + 1 = \\pm 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{1}{2}, -\\frac{-6}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{1}{2}, -\\frac{5}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{1}{2}, -\\frac{5}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{1}{2}, -\\frac{5}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{1}{2}, +\\frac{5}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{1}{2}, -\\frac{4}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{1}{2}, -\\frac{-5}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x + 1 = \\pm 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{1}{2}, -\\frac{6}{2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Divide by 4 first.",
    "solution": "\\( x^2 + 2x - \\frac{5}{4} = 0 \\Rightarrow x^2 + 2x + 1 = \\frac{9}{4} \\Rightarrow (x+1)^2 = \\frac{9}{4} \\Rightarrow x + 1 = \\pm \\frac{3}{2} \\Rightarrow x = \\frac{1}{2}, -\\frac{5}{2} \\)",
    "solutionSteps": [
      {
        "explanation": "Divide by 4.",
        "workingOut": "\\(x^2 + 2x - \\frac{5}{4} = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Add \\( \\frac{5}{4} \\) and add 1 to complete the square.",
        "workingOut": "\\(x^2 + 2x + 1 = \\frac{5}{4} + 1\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify.",
        "workingOut": "\\((x + 1)^2 = \\frac{9}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(x + 1 = \\pm \\frac{3}{2} \\Rightarrow x = \\frac{1}{2}, -\\frac{5}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "52b544fb41b3e401b217fce205ff2c7c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve the equation: \\( 4 - t^2 = 0 \\)",
    "options": [
      {
        "text": "\\(t = + 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t = - 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t = \\pm 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t = \\pm 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t = \\pm 2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Rearrange to solve for \\( t^2 \\).",
    "solution": "\\( t^2 = 4 \\Rightarrow t = \\pm 2 \\)",
    "solutionSteps": [
      {
        "explanation": "Add \\( t^2 \\) to both sides to make the term positive.",
        "workingOut": "\\(4 = t^2\\)",
        "graphData": null
      },
      {
        "explanation": "Take the square root of both sides.",
        "workingOut": "\\(t = \\pm \\sqrt{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Find the values of \\( t \\).",
        "workingOut": "\\(t = \\pm 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "5394566d3598d91d9908cdffcc55933f",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve by factoring: \\( 10t + 24 = t^2 \\)",
    "options": [
      {
        "text": "\\(t = -2, 12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t = -2, 13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t = +2, 12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t = -2, -12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t = -2, -13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t = -2, 11\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Rearrange terms to get a positive leading coefficient.",
    "solution": "\\( t^2 - 10t - 24 = 0 \\Rightarrow (t-12)(t+2) = 0 \\Rightarrow t = -2, 12 \\)",
    "solutionSteps": [
      {
        "explanation": "Rearrange to get zero on one side.",
        "workingOut": "\\(t^2 - 10t - 24 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the trinomial.",
        "workingOut": "\\((t - 12)(t + 2) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( t \\).",
        "workingOut": "\\(t = -2, 12\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "54b309f8ec6768a1af01005f14c23f20",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve by factoring: \\( x^2 + 5x + 6 = 0 \\)",
    "options": [
      {
        "text": "\\(x = -2, 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2, -3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2, 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = +2, +3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2, -4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2, -2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Find two numbers that multiply to 6 and add to 5.",
    "solution": "\\( (x+2)(x+3) = 0 \\Rightarrow x = -2, -3 \\)",
    "solutionSteps": [
      {
        "explanation": "Find two integers whose product is 6 and whose sum is 5. These are 2 and 3.",
        "workingOut": "\\((x + 2)(x + 3) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Set each factor to zero.",
        "workingOut": "\\(x + 2 = 0 \\quad \\text{or} \\quad x + 3 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( x \\).",
        "workingOut": "\\(x = -2, -3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "54c281b5472f262ca8f385b7ed738835",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve by factoring: \\( 3n^2 - n - 4 = 0 \\)",
    "options": [
      {
        "text": "\\(n = -1, \\frac{5}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(n = -1, \\frac{-5}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(n = +1, \\frac{4}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(n = -1, \\frac{4}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(n = -1, \\frac{3}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(n = -1, \\frac{-4}{3}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Find factors of -12 that add to -1.",
    "solution": "\\( (3n-4)(n+1) = 0 \\Rightarrow n = -1, \\frac{4}{3} \\)",
    "solutionSteps": [
      {
        "explanation": "Split the middle term using -4 and 3.",
        "workingOut": "\\(3n^2 - 4n + 3n - 4 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor by grouping.",
        "workingOut": "\\(n(3n - 4) + 1(3n - 4) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Write factored form.",
        "workingOut": "\\((3n - 4)(n + 1) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(n = -1, frac{4}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "54fcd26960b84aa5e8d7967b78302bbb",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve by factoring: \\( 14t + 8 = 3t^2 \\)",
    "options": [
      {
        "text": "\\(t = -\\frac{2}{3}, -5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t = -\\frac{2}{3}, 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t = +\\frac{2}{3}, 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t = -\\frac{2}{3}, -4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t = -\\frac{2}{3}, 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t = -\\frac{2}{3}, 4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "5",
    "blanks": [],
    "hint": "Rearrange and solve.",
    "solution": "\\( 3t^2 - 14t - 8 = 0 \\Rightarrow (3t+2)(t-4) = 0 \\Rightarrow t = -\\frac{2}{3}, 4 \\)",
    "solutionSteps": [
      {
        "explanation": "Rearrange standard form.",
        "workingOut": "\\(3t^2 - 14t - 8 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Split using -16 and 2.",
        "workingOut": "\\(3t^2 - 16t + 2t - 8 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor.",
        "workingOut": "\\(3t(t - 4) + 2(t - 4) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(t = -\\frac{2}{3}, 4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "5bb9ae7db588fd9d321c963365e9e5f7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve by completing the square: \\( y^2 + 5y = 14 \\)",
    "options": [
      {
        "text": "\\(y = 2, -8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 2, 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 2, -7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 2, -7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 2, -7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\pm 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\pm 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 2, 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 2, -6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 2, +7\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Be comfortable working with fractions when completing the square for an odd linear coefficient.",
    "solution": "\\( y^2 + 5y + \\frac{25}{4} = \\frac{81}{4} \\Rightarrow (y+\\frac{5}{2})^2 = \\frac{81}{4} \\Rightarrow y + \\frac{5}{2} = \\pm \\frac{9}{2} \\Rightarrow y = 2, -7 \\)",
    "solutionSteps": [
      {
        "explanation": "Add \\( \\left(\\frac{5}{2}\\right)^2 = \\frac{25}{4} \\) to both sides.",
        "workingOut": "\\(y^2 + 5y + \\frac{25}{4} = 14 + \\frac{25}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the right side.",
        "workingOut": "\\(\\left(y + \\frac{5}{2}\\right)^2 = \\frac{81}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Take the square root of both sides.",
        "workingOut": "\\(y + \\frac{5}{2} = \\pm \\frac{9}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the two values of \\( y \\).",
        "workingOut": "\\(y = -\\frac{5}{2} \\pm \\frac{9}{2} \\Rightarrow y = 2, -7\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "605289287c3c15b479e554dcf256ea17",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve the equation: \\( \\frac{3m}{2} = 2 + \\frac{2}{m} \\)",
    "options": [
      {
        "text": "\\(m = 2, -\\frac{1}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m = 2, -\\frac{2}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m = 2, -\\frac{-3}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m = 2, +\\frac{2}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m = 2, -\\frac{-2}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m = 2, -\\frac{3}{3}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Multiply all terms by the LCD, which is \\( 2m \\).",
    "solution": "\\( 3m^2 = 4m + 4 \\Rightarrow 3m^2 - 4m - 4 = 0 \\Rightarrow (3m+2)(m-2) = 0 \\Rightarrow m = 2, -\\frac{2}{3} \\)",
    "solutionSteps": [
      {
        "explanation": "Multiply all terms by \\( 2m \\) to clear denominators.",
        "workingOut": "\\(3m^2 = 4m + 4\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange into standard form.",
        "workingOut": "\\(3m^2 - 4m - 4 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor by grouping.",
        "workingOut": "\\((3m + 2)(m - 2) = 0 \\Rightarrow m = 2, -\\frac{2}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "64d8c025de3a960360b82a3632789565",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve by factoring: \\( 2x^2 + 3x - 5 = 0 \\)",
    "options": [
      {
        "text": "\\(x = 1, +\\frac{5}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 1, -\\frac{-5}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 1, -\\frac{6}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 1, -\\frac{-6}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 1, -\\frac{4}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 1, -\\frac{5}{2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "5",
    "blanks": [],
    "hint": "Find factors of -10 that add to 3.",
    "solution": "\\( (2x+5)(x-1) = 0 \\Rightarrow x = 1, -\\frac{5}{2} \\)",
    "solutionSteps": [
      {
        "explanation": "Split the middle term using 5 and -2.",
        "workingOut": "\\(2x^2 + 5x - 2x - 5 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Group terms and factor.",
        "workingOut": "\\(x(2x + 5) - 1(2x + 5) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Obtain the factored form.",
        "workingOut": "\\((2x + 5)(x - 1) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(x = 1, -\\frac{5}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "6f67736c1704b702b3d55dfef615f878",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve the equation: \\( (2b - 1)(3b + 2) = 5 \\)",
    "options": [
      {
        "text": "\\(b = 1, -\\frac{6}{6}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(b = 1, -\\frac{-8}{6}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(b = 1, -\\frac{8}{6}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(b = 1, -\\frac{-7}{6}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(b = 1, -\\frac{7}{6}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(b = 1, +\\frac{7}{6}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "4",
    "blanks": [],
    "hint": "Expand the brackets first, then rearrange into standard form.",
    "solution": "\\( 6b^2 + b - 2 = 5 \\Rightarrow 6b^2 + b - 7 = 0 \\Rightarrow (6b+7)(b-1) = 0 \\Rightarrow b = 1, -\\frac{7}{6} \\)",
    "solutionSteps": [
      {
        "explanation": "Expand the left side of the equation.",
        "workingOut": "\\(6b^2 + 4b - 3b - 2 = 5 \\Rightarrow 6b^2 + b - 2 = 5\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract 5 from both sides.",
        "workingOut": "\\(6b^2 + b - 7 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the quadratic.",
        "workingOut": "\\((6b + 7)(b - 1) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(b = 1, -\\frac{7}{6}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "709a297e51d9d0b669f5a7ba65cc56f4",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve the equation: \\( c^2 - 25 = 0 \\)",
    "options": [
      {
        "text": "\\(c = \\pm 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(c = \\pm 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(c = \\pm 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(c = \\pm 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(c = \\pm 5\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Move the constant term to the right-hand side.",
    "solution": "\\( c^2 = 25 \\Rightarrow c = \\pm \\sqrt{25} = \\pm 5 \\)",
    "solutionSteps": [
      {
        "explanation": "Add 25 to both sides.",
        "workingOut": "\\(c^2 = 25\\)",
        "graphData": null
      },
      {
        "explanation": "Take the square root.",
        "workingOut": "\\(c = \\pm \\sqrt{25}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify to get the solutions.",
        "workingOut": "\\(c = \\pm 5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "7159fc59e9c35d639cfa18441fdcab8a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve the equation: \\( y + \\frac{3}{y} = \\frac{13}{2} \\)",
    "options": [
      {
        "text": "\\(y = 6, \\frac{1}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 6, \\frac{1}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 6, \\frac{2}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 6, \\frac{-2}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 6, \\frac{0}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 6, \\frac{-1}{2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Multiply both sides by \\( 2y \\).",
    "solution": "\\( 2y^2 + 6 = 13y \\Rightarrow 2y^2 - 13y + 6 = 0 \\Rightarrow (2y-1)(y-6) = 0 \\Rightarrow y = 6, \\frac{1}{2} \\)",
    "solutionSteps": [
      {
        "explanation": "Multiply both sides by \\( 2y \\) to remove denominators.",
        "workingOut": "\\(2y^2 + 6 = 13y\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange.",
        "workingOut": "\\(2y^2 - 13y + 6 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor.",
        "workingOut": "\\((2y - 1)(y - 6) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(y = 6, frac{1}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "75e20c0b255e36ef32a90f76359df5ad",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve for \\( x \\): \\( x - 4\\sqrt{x} + 3 = 0 \\)",
    "options": [
      {
        "text": "\\(x = 1, 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 1, -9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 1, 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\pm 1, \\pm 3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Let \\( u = \\sqrt{x} \\). This means \\( u^2 = x \\). Substitute these in to form a quadratic equation.",
    "solution": "\\(x = 1, 9\\)",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( u = \\sqrt{x} \\) to get a quadratic equation.",
        "workingOut": "\\(u^2 - 4u + 3 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the quadratic trinomial.",
        "workingOut": "\\((u - 1)(u - 3) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( u \\).",
        "workingOut": "\\(u = 1 \\quad \\text{or} \\quad u = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute back \\( \\sqrt{x} = u \\) and square both sides.",
        "workingOut": "\\(\\sqrt{x} = 1 \\Rightarrow x = 1, quad \\sqrt{x} = 3 \\Rightarrow x = 9\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "77a9266358341f4251caa08790bf48bb",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve the fractional equation: \\( \\frac{x}{2} + \\frac{2}{x} = \\frac{5}{2} \\)",
    "options": [
      {
        "text": "\\(x = 2, 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 1, 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 1, 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -1, -4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Multiply the entire equation by the lowest common denominator, which is \\( 2x \\), to clear the fractions.",
    "solution": "\\(x = 1, 4\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply every term by the common denominator \\(2x \\).",
        "workingOut": "\\(x^2 + 4 = 5x\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange the quadratic equation into standard form.",
        "workingOut": "\\(x^2 - 5x + 4 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the quadratic trinomial.",
        "workingOut": "\\((x - 1)(x - 4) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Find the solutions.",
        "workingOut": "\\(x = 1, 4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "7912cabc4855b316f3cf210c780395bf",
    "type": "fill_blank",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve the fractional equation: Write answers in ascending order. \\( \\frac{x}{2} + \\frac{2}{x} = \\frac{5}{2} \\)",
    "options": [],
    "answer": "1 | 4",
    "blanks": [
      {
        "label": "x=",
        "answer": "1"
      },
      {
        "label": "x=",
        "answer": "4"
      }
    ],
    "hint": "Multiply the entire equation by the lowest common denominator, which is \\( 2x \\), to clear the fractions.",
    "solution": "\\(x = 1, 4\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply every term by the common denominator \\(2x \\).",
        "workingOut": "\\(x^2 + 4 = 5x\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange the quadratic equation into standard form.",
        "workingOut": "\\(x^2 - 5x + 4 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the quadratic trinomial.",
        "workingOut": "\\((x - 1)(x - 4) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Find the solutions.",
        "workingOut": "\\(x = 1, 4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "798a247e01f3f2dfe1e6c195e39e5a49",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve the quadratic equation using the quadratic formula or by completing the square: \\( x^2 - 2x - 1 = 0 \\)",
    "options": [
      {
        "text": "\\(x = \\pm \\sqrt{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 1 \\pm 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -1 \\pm \\sqrt{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 1 \\pm \\sqrt{2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Complete the square by adding \\( \\left(\\frac{b}{2}\\right)^2 \\) to both sides, or use the quadratic formula.",
    "solution": "\\(x = 1 \\pm \\sqrt{2}\\)",
    "solutionSteps": [
      {
        "explanation": "Add 1 to both sides to begin completing the square.",
        "workingOut": "\\(x^2 - 2x = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Add the square of half the x-coefficient to both sides.",
        "workingOut": "\\(x^2 - 2x + 1 = 1 + 1\\)",
        "graphData": null
      },
      {
        "explanation": "Write the left side as a perfect square and simplify the right side.",
        "workingOut": "\\((x - 1)^2 = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Take the square root of both sides and solve for \\( x \\).",
        "workingOut": "\\(x - 1 = \\pm \\sqrt{2} \\Rightarrow x = 1 \\pm \\sqrt{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "7a1fdf4c6cc33467d3f531070aa7578a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve by factoring: \\( y^2 + 5y = 6 \\)",
    "options": [
      {
        "text": "\\(y = 1, 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 1, +6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 1, -6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 1, -5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 1, -7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = 1, 5\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Move all terms to the left-hand side first.",
    "solution": "\\( y^2 + 5y - 6 = 0 \\Rightarrow (y-1)(y+6) = 0 \\Rightarrow y = 1, -6 \\)",
    "solutionSteps": [
      {
        "explanation": "Subtract 6 from both sides to equal zero.",
        "workingOut": "\\(y^2 + 5y - 6 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Find factors of -6 that add to 5. They are 6 and -1.",
        "workingOut": "\\((y + 6)(y - 1) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(y = 1, -6\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "7b043cac4c5a2fc6df921cf7946fa345",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve by factoring: \\( y^2 + 2y = 0 \\)",
    "options": [
      {
        "text": "\\(y = -2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = +2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = +5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = +4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Factor out the common term \\( y \\).",
    "solution": "\\( y(y + 2) = 0 \\Rightarrow y = 0 \\text{ or } y = -2 \\)",
    "solutionSteps": [
      {
        "explanation": "Factor out \\( y \\) from both terms.",
        "workingOut": "\\(y(y + 2) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the zero product property.",
        "workingOut": "\\(y = 0 \\quad \\text{or} \\quad y + 2 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( y \\).",
        "workingOut": "\\(y = 0, -2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "7b7cb2642d7c3a3228864b3fae93e838",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve using the quadratic formula: \\( y^2 + y = 5 \\)",
    "options": [
      {
        "text": "\\(y = \\frac{-1 \\pm \\sqrt{21}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\frac{-1 \\pm \\sqrt{21}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\frac{-1 \\pm \\sqrt{21}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\frac{+1 \\pm \\sqrt{21}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\frac{-1 \\pm 1}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\frac{-1 \\pm 0}{2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Rearrange into standard form first.",
    "solution": "\\( y^2 + y - 5 = 0 \\Rightarrow y = \\frac{-1 \\pm \\sqrt{1 - 4(1)(-5)}}{2} = \\frac{-1 \\pm \\sqrt{21}}{2} \\)",
    "solutionSteps": [
      {
        "explanation": "Rearrange to make the right side zero.",
        "workingOut": "\\(y^2 + y - 5 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the quadratic formula with \\( a = 1, b = 1, c = -5 \\).",
        "workingOut": "\\(y = \\frac{-1 \\pm \\sqrt{1^2 - 4(1)(-5)}}{2(1)}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(y = \\frac{-1 \\pm \\sqrt{21}}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "7d5420ece8ee69811464da2718d6f3b1",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve by factoring: \\( x^2 - 6x = 0 \\)",
    "options": [
      {
        "text": "\\(x = 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 6\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Factor out the common variable \\( x \\).",
    "solution": "\\( x(x - 6) = 0 \\Rightarrow x = 0 \\text{ or } x = 6 \\)",
    "solutionSteps": [
      {
        "explanation": "Identify and factor out the greatest common factor, which is \\( x \\).",
        "workingOut": "\\(x(x - 6) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Set each factor to zero.",
        "workingOut": "\\(x = 0 \\quad \\text{or} \\quad x - 6 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the linear equations.",
        "workingOut": "\\(x = 0, 6\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "7db2131d9a6645aa529272590d28e3db",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve the equation: \\( \\frac{k + 10}{k - 5} - \\frac{10}{k} = \\frac{11}{6} \\)",
    "options": [
      {
        "text": "\\(k = 15, +4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = 15, -3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = 15, -5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = 15, 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = 15, 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = 15, -4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "5",
    "blanks": [],
    "hint": "Multiply by the LCD \\( 6k(k - 5) \\) and expand.",
    "solution": "\\( \\frac{k + 10}{k - 5} - \\frac{10}{k} = \\frac{11}{6} \\Rightarrow 6k(k+10) - 60(k-5) = 11k(k-5) \\Rightarrow 5k^2 - 55k - 300 = 0 \\Rightarrow k^2 - 11k - 60 = 0 \\Rightarrow k = 15, -4 \\)",
    "solutionSteps": [
      {
        "explanation": "Multiply both sides by \\( 6k(k - 5) \\).",
        "workingOut": "\\(6k(k + 10) - 60(k - 5) = 11k(k - 5)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand both sides.",
        "workingOut": "\\(6k^2 + 60k - 60k + 300 = 11k^2 - 55k \\Rightarrow 6k^2 + 300 = 11k^2 - 55k\\)",
        "graphData": null
      },
      {
        "explanation": "Collect all terms on the right side.",
        "workingOut": "\\(5k^2 - 55k - 300 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Divide by 5 to simplify.",
        "workingOut": "\\(k^2 - 11k - 60 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the quadratic.",
        "workingOut": "\\((k - 15)(k + 4) = 0 \\Rightarrow k = 15, -4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "7e8d57afa2c99c729083966cb777686a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve by completing the square: \\( a^2 + 8a + 12 = 0 \\)",
    "options": [
      {
        "text": "\\(a = -2, -5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = -2, 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = -2, 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = -2, -7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = +2, +6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = -2, -6\\)",
        "imageUrl": ""
      }
    ],
    "answer": "5",
    "blanks": [],
    "hint": "Move the constant to the right side first.",
    "solution": "\\( a^2 + 8a = -12 \\Rightarrow a^2 + 8a + 16 = 4 \\Rightarrow (a+4)^2 = 4 \\Rightarrow a = -2, -6 \\)",
    "solutionSteps": [
      {
        "explanation": "Move 12 to the right.",
        "workingOut": "\\(a^2 + 8a = -12\\)",
        "graphData": null
      },
      {
        "explanation": "Complete the square by adding 16 to both sides.",
        "workingOut": "\\(a^2 + 8a + 16 = -12 + 16\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify and solve.",
        "workingOut": "\\((a + 4)^2 = 4 \\Rightarrow a + 4 = \\pm 2 \\Rightarrow a = -2, -6\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "821515483603f64383cb1e7c1a47134b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve the equation: \\( x = \\frac{x + 3}{x} \\)",
    "options": [
      {
        "text": "\\(x = \\frac{1 \\pm 0}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{1 \\pm 1}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{1 \\pm \\sqrt{13}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{1 \\pm \\sqrt{13}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{1 + \\sqrt{13}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{1 - \\sqrt{13}}{2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Multiply both sides by \\( x \\) to clear the denominator first.",
    "solution": "\\( x^2 = x + 3 \\Rightarrow x^2 - x - 3 = 0 \\Rightarrow x = \\frac{1 \\pm \\sqrt{13}}{2} \\)",
    "solutionSteps": [
      {
        "explanation": "Multiply both sides by \\( x \\) to eliminate the fraction.",
        "workingOut": "\\(x^2 = x + 3\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange into standard quadratic form.",
        "workingOut": "\\(x^2 - x - 3 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve using the quadratic formula.",
        "workingOut": "\\(x = \\frac{-(-1) \\pm \\sqrt{(-1)^2 - 4(1)(-3)}}{2(1)} = \\frac{1 \\pm \\sqrt{13}}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "82ba321ea06ae43a524f5ae0fd58da73",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve the equation: \\( \\frac{3m + 1}{3m - 1} - \\frac{3m - 1}{3m + 1} = 2 \\)",
    "options": [
      {
        "text": "\\(m = \\frac{1 \\pm 0}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m = \\frac{1 \\pm \\sqrt{2}}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m = \\frac{1 - \\sqrt{2}}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m = \\frac{1 \\pm 1}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m = \\frac{1 \\pm \\sqrt{2}}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m = \\frac{1 + \\sqrt{2}}{3}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Find a common denominator and subtract the fractions on the left side.",
    "solution": "\\( 12m = 2(9m^2 - 1) \\Rightarrow 18m^2 - 12m - 2 = 0 \\Rightarrow 9m^2 - 6m - 1 = 0 \\Rightarrow m = \\frac{1 \\pm \\sqrt{2}}{3} \\)",
    "solutionSteps": [
      {
        "explanation": "Combine the fractions by finding a common denominator of \\( (3m - 1)(3m + 1) = 9m^2 - 1 \\).",
        "workingOut": "\\(\\frac{(3m + 1)^2 - (3m - 1)^2}{9m^2 - 1} = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand and simplify the numerator.",
        "workingOut": "\\(\\frac{(9m^2 + 6m + 1) - (9m^2 - 6m + 1)}{9m^2 - 1} = 2 \\Rightarrow \\frac{12m}{9m^2 - 1} = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Clear the fraction.",
        "workingOut": "\\(12m = 2(9m^2 - 1) \\Rightarrow 12m = 18m^2 - 2\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange and divide by 2.",
        "workingOut": "\\(18m^2 - 12m - 2 = 0 \\Rightarrow 9m^2 - 6m - 1 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the quadratic formula to solve for \\( m \\).",
        "workingOut": "\\(m = \\frac{6 \\pm \\sqrt{(-6)^2 - 4(9)(-1)}}{2(9)} = \\frac{6 \\pm \\sqrt{72}}{18} = \\frac{6 \\pm 6\\sqrt{2}}{18} = \\frac{1 \\pm \\sqrt{2}}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "83b0aedc90f675fd1214ba9c6ea9bbea",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve the equation: \\( 2(k - 1) = \\frac{4 - 4k}{k + 1} \\)",
    "options": [
      {
        "text": "\\(k = 1, -2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = 1, 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = 1, -3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = 1, 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = 1, +3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = 1, -4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Multiply by \\( (k + 1) \\) and expand.",
    "solution": "\\( 2(k - 1)(k + 1) = 4 - 4k \\Rightarrow 2(k^2 - 1) = 4 - 4k \\Rightarrow 2k^2 + 4k - 6 = 0 \\Rightarrow k^2 + 2k - 3 = 0 \\Rightarrow k = 1, -3 \\)",
    "solutionSteps": [
      {
        "explanation": "Multiply both sides by \\( (k + 1) \\).",
        "workingOut": "\\(2(k - 1)(k + 1) = 4 - 4k\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the left side (difference of squares product).",
        "workingOut": "\\(2(k^2 - 1) = 4 - 4k \\Rightarrow 2k^2 - 2 = 4 - 4k\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange.",
        "workingOut": "\\(2k^2 + 4k - 6 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify.",
        "workingOut": "\\(k^2 + 2k - 3 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor.",
        "workingOut": "\\((k + 3)(k - 1) = 0 \\Rightarrow k = 1, -3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "87fecf38efb277c416291cf5155ecb90",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Solve \\(x^2 - 9x + 20 = 0\\)",
    "options": [
      {
        "text": "\\({4, 5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\({4, -5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\({10, 2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\({-4, -5}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Find numbers that multiply to 20 and add to -9.",
    "solution": "\\((x-4)(x-5) = 0 \\Rightarrow x=4, 5\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Solve x^2 - 9x + 20 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\((x-4)(x-5) = 0 \\Rightarrow x=4, 5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "88edfed484040a7507250e954c31cf4d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve by factoring: \\( 5u^2 + u = 0 \\)",
    "options": [
      {
        "text": "\\(u = 0, -\\frac{2}{5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(u = 0, -\\frac{0}{5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(u = 0, -\\frac{1}{5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(u = 0, -\\frac{-1}{5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(u = 0, +\\frac{1}{5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(u = 0, -\\frac{-2}{5}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Factor out \\( u \\).",
    "solution": "\\( u(5u + 1) = 0 \\Rightarrow u = 0, -\\frac{1}{5} \\)",
    "solutionSteps": [
      {
        "explanation": "Take out \\( u \\) as the common factor.",
        "workingOut": "\\(u(5u + 1) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Set each factor to zero and solve.",
        "workingOut": "\\(u = 0, -\\frac{1}{5}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "8aec26f0b3682bd67183edcd8c315e3c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Solve \\(x^2 + 2x - 15 = 0\\)",
    "options": [
      {
        "text": "\\({5, 3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\({5, -3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\({-5, 3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\({-5, -3}\\)",
        "imageUrl": ""
      }
    ],
    "answer": 2,
    "blanks": [],
    "hint": "Find numbers that multiply to -15 and add to 2.",
    "solution": "\\((x+5)(x-3) = 0 \\Rightarrow x=-5, 3\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Solve x^2 + 2x - 15 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\((x+5)(x-3) = 0 \\Rightarrow x=-5, 3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "8bef27d06431ecd6626bb5f5b927b92e",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve the equation: \\( a^2 - 9 = 0 \\)",
    "options": [
      {
        "text": "\\(a = \\pm 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = \\pm 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = \\pm 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = \\pm 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = \\pm 3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Rearrange by adding the constant to the other side first.",
    "solution": "\\( a^2 = 9 \\Rightarrow a = \\pm \\sqrt{9} = \\pm 3 \\)",
    "solutionSteps": [
      {
        "explanation": "Add 9 to both sides to isolate the quadratic term.",
        "workingOut": "\\(a^2 = 9\\)",
        "graphData": null
      },
      {
        "explanation": "Take the square root of both sides.",
        "workingOut": "\\(a = \\pm \\sqrt{9}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify.",
        "workingOut": "\\(a = \\pm 3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "8fcb455a3b7a098bf852300201d3f036",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve the equation: \\( 16y^2 = 9 \\)",
    "options": [
      {
        "text": "\\(y = \\pm \\frac{3}{4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = + \\frac{3}{4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = - \\frac{3}{4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\pm 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\pm 0\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Divide by 16 first.",
    "solution": "\\( y^2 = \\frac{9}{16} \\Rightarrow y = \\pm \\frac{3}{4} \\)",
    "solutionSteps": [
      {
        "explanation": "Divide both sides of the equation by 16.",
        "workingOut": "\\(y^2 = \\frac{9}{16}\\)",
        "graphData": null
      },
      {
        "explanation": "Take the square root of the fraction.",
        "workingOut": "\\(y = \\pm \\sqrt{\\frac{9}{16}}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify.",
        "workingOut": "\\(y = \\pm \\frac{3}{4}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "94dac084634e5f99750b11643d6563cc",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve using the quadratic formula: \\( x^2 - x - 3 = 0 \\)",
    "options": [
      {
        "text": "\\(x = \\frac{1 \\pm \\sqrt{13}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{1 \\pm \\sqrt{13}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{1 \\pm \\sqrt{13}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{1 \\pm 0}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{1 \\pm \\sqrt{13}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{1 \\pm 1}{2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Identify \\( a = 1, b = -1, c = -3 \\) and substitute into \\( x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\).",
    "solution": "\\( x = \\frac{-(-1) \\pm \\sqrt{(-1)^2 - 4(1)(-3)}}{2(1)} = \\frac{1 \\pm \\sqrt{13}}{2} \\)",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( a = 1, b = -1, c = -3 \\) into the quadratic formula.",
        "workingOut": "\\(x = \\frac{-(-1) \\pm \\sqrt{(-1)^2 - 4(1)(-3)}}{2(1)}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the discriminant.",
        "workingOut": "\\(x = \\frac{1 \\pm \\sqrt{1 + 12}}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Write the final simplified exact values.",
        "workingOut": "\\(x = \\frac{1 \\pm \\sqrt{13}}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "9bf01712311cd97ca54c64bfc5979586",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve the fractional equation: \\( \\frac{x}{3} + \\frac{3}{x} = \\frac{10}{3} \\)",
    "options": [
      {
        "text": "\\(x = -1, -9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 3, 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 1, 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 1, 9\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Multiply the entire equation by the lowest common denominator, which is \\( 3x \\), to clear the fractions.",
    "solution": "\\(x = 1, 9\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply every term by the common denominator \\(3x \\).",
        "workingOut": "\\(x^2 + 9 = 10x\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange the quadratic equation into standard form.",
        "workingOut": "\\(x^2 - 10x + 9 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the quadratic trinomial.",
        "workingOut": "\\((x - 1)(x - 9) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Find the solutions.",
        "workingOut": "\\(x = 1, 9\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "9dc13ca7075e8f27e4d031007b2a1d0d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve the equation: \\( 9x^2 - 1 = 0 \\)",
    "options": [
      {
        "text": "\\(x = \\pm 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\pm 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = - \\frac{1}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\pm \\frac{1}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = + \\frac{1}{3}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Isolate the \\( x^2 \\) term before taking the square root.",
    "solution": "\\( 9x^2 = 1 \\Rightarrow x^2 = \\frac{1}{9} \\Rightarrow x = \\pm \\frac{1}{3} \\)",
    "solutionSteps": [
      {
        "explanation": "Add 1 to both sides.",
        "workingOut": "\\(9x^2 = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Divide both sides by 9 to isolate the square.",
        "workingOut": "\\(x^2 = \\frac{1}{9}\\)",
        "graphData": null
      },
      {
        "explanation": "Take the square root.",
        "workingOut": "\\(x = \\pm \\sqrt{\\frac{1}{9}} = \\pm \\frac{1}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "9de2e4b23e83becb2a52c82c00cb059d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve by factoring: \\( 3b^2 - 5b - 2 = 0 \\)",
    "options": [
      {
        "text": "\\(b = -\\frac{1}{3}, -2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(b = -\\frac{1}{3}, 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(b = +\\frac{1}{3}, 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(b = -\\frac{1}{3}, -3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(b = -\\frac{1}{3}, 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(b = -\\frac{1}{3}, 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Find factors of -6 that sum to -5.",
    "solution": "\\( (3b+1)(b-2) = 0 \\Rightarrow b = -\\frac{1}{3}, 2 \\)",
    "solutionSteps": [
      {
        "explanation": "Split using -6 and 1.",
        "workingOut": "\\(3b^2 - 6b + b - 2 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor.",
        "workingOut": "\\(3b(b - 2) + 1(b - 2) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Collect terms.",
        "workingOut": "\\((3b + 1)(b - 2) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(b = -\\frac{1}{3}, 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "9e244b31e62001d37ca7a119186503b5",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve by factoring: \\( 6k^2 + 5k = 6 \\)",
    "options": [
      {
        "text": "\\(k = \\frac{2}{3}, -\\frac{2}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = \\frac{2}{3}, -\\frac{3}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = \\frac{2}{3}, -\\frac{4}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = \\frac{2}{3}, +\\frac{3}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = \\frac{2}{3}, -\\frac{-3}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = \\frac{2}{3}, -\\frac{-4}{2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Rearrange and factor.",
    "solution": "\\( 6k^2 + 5k - 6 = 0 \\Rightarrow (3k-2)(2k+3) = 0 \\Rightarrow k = \\frac{2}{3}, -\\frac{3}{2} \\)",
    "solutionSteps": [
      {
        "explanation": "Subtract 6.",
        "workingOut": "\\(6k^2 + 5k - 6 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Split using 9 and -4.",
        "workingOut": "\\(6k^2 + 9k - 4k - 6 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor.",
        "workingOut": "\\(3k(2k + 3) - 2(2k + 3) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(k = \\frac{2}{3}, -\\frac{3}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "a0625e1b66c9a5e39e882b3732e60fd7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve by factoring: \\( n^2 - 10n + 9 = 0 \\)",
    "options": [
      {
        "text": "\\(n = 1, -9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(n = 1, 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(n = 1, 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(n = 1, -10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(n = 1, 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(n = 1, 10\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Factors of 9 that sum to -10.",
    "solution": "\\( (n-1)(n-9) = 0 \\Rightarrow n = 1, 9 \\)",
    "solutionSteps": [
      {
        "explanation": "Find numbers multiplying to 9 and summing to -10. They are -1 and -9.",
        "workingOut": "\\((n - 1)(n - 9) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(n = 1, 9\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "a174000bfaba9c028a235fda64cff65a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve using the quadratic formula: \\( 4x^2 + 8x + 1 = 0 \\)",
    "options": [
      {
        "text": "\\(x = \\frac{-2 \\pm 1}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{-2 \\pm \\sqrt{3}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{-2 \\pm 0}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{-2 \\pm \\sqrt{3}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{-2 \\pm \\sqrt{3}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{+2 \\pm \\sqrt{3}}{2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Be careful to divide all terms in the numerator by the denominator.",
    "solution": "\\( x = \\frac{-8 \\pm \\sqrt{64 - 16}}{8} = \\frac{-8 \\pm \\sqrt{48}}{8} = \\frac{-8 \\pm 4\\sqrt{3}}{8} = \\frac{-2 \\pm \\sqrt{3}}{2} \\)",
    "solutionSteps": [
      {
        "explanation": "Substitute coefficients into the quadratic formula.",
        "workingOut": "\\(x = \\frac{-8 \\pm \\sqrt{8^2 - 4(4)(1)}}{2(4)}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the root.",
        "workingOut": "\\(x = \\frac{-8 \\pm \\sqrt{48}}{8} = \\frac{-8 \\pm 4\\sqrt{3}}{8}\\)",
        "graphData": null
      },
      {
        "explanation": "Divide numerator and denominator by 4.",
        "workingOut": "\\(x = \\frac{-2 \\pm \\sqrt{3}}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "a21763a66004a6457352a3c918d62661",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve by factoring: \\( 12b^2 + 20b + 3 = 0 \\)",
    "options": [
      {
        "text": "\\(b = -\\frac{1}{6}, -\\frac{2}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(b = +\\frac{1}{6}, +\\frac{3}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(b = -\\frac{1}{6}, -\\frac{3}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(b = -\\frac{1}{6}, -\\frac{-3}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(b = -\\frac{1}{6}, -\\frac{4}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(b = -\\frac{1}{6}, -\\frac{-4}{2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Rewrite in standard order and factor.",
    "solution": "\\( (6b+1)(2b+3) = 0 \\Rightarrow b = -\\frac{1}{6}, -\\frac{3}{2} \\)",
    "solutionSteps": [
      {
        "explanation": "Standardize order.",
        "workingOut": "\\(12b^2 + 20b + 3 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Split middle term with 18 and 2.",
        "workingOut": "\\(12b^2 + 18b + 2b + 3 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor by grouping.",
        "workingOut": "\\(6b(2b + 3) + 1(2b + 3) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(b = -\\frac{1}{6}, -\\frac{3}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "a3b7dc28ac1ff438ffa4748819d3ef0a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve by factoring: \\( k^2 - 8k = 0 \\)",
    "options": [
      {
        "text": "\\(k = 0, 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = 0, -8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = 0, 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = 0, -9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = 0, 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = 0, 8\\)",
        "imageUrl": ""
      }
    ],
    "answer": "4",
    "blanks": [],
    "hint": "Take out the common factor.",
    "solution": "\\( k(k - 8) = 0 \\Rightarrow k = 0, 8 \\)",
    "solutionSteps": [
      {
        "explanation": "Factor out \\( k \\).",
        "workingOut": "\\(k(k - 8) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Find values that satisfy the equation.",
        "workingOut": "\\(k = 0, 8\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "a6bf71ac1d30b8b245820e00d3854863",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve by completing the square: \\( x^2 + 6x + 2 = 0 \\)",
    "options": [
      {
        "text": "\\(x = +3 \\pm \\sqrt{7}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -3 + \\sqrt{7}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -3 \\pm 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -3 - \\sqrt{7}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -3 \\pm \\sqrt{7}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -3 \\pm 0\\)",
        "imageUrl": ""
      }
    ],
    "answer": "4",
    "blanks": [],
    "hint": "Subtract 2, then add 9 to both sides.",
    "solution": "\\( x^2 + 6x = -2 \\Rightarrow x^2 + 6x + 9 = 7 \\Rightarrow (x+3)^2 = 7 \\Rightarrow x = -3 \\pm \\sqrt{7} \\)",
    "solutionSteps": [
      {
        "explanation": "Isolate the variable terms.",
        "workingOut": "\\(x^2 + 6x = -2\\)",
        "graphData": null
      },
      {
        "explanation": "Complete the square by adding \\( 3^2 = 9 \\).",
        "workingOut": "\\(x^2 + 6x + 9 = 7\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\((x + 3)^2 = 7 \\Rightarrow x + 3 = \\pm \\sqrt{7} \\Rightarrow x = -3 \\pm \\sqrt{7}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "ac25eadb4575a562fa1c1125dfe11003",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve by factoring: \\( 2a^2 + 9a - 5 = 0 \\)",
    "options": [
      {
        "text": "\\(a = -5, \\frac{-1}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = -5, \\frac{0}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = -5, \\frac{2}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = +5, \\frac{1}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = -5, \\frac{1}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = -5, \\frac{-2}{2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "4",
    "blanks": [],
    "hint": "Find factors of -10 that add to 9.",
    "solution": "\\( (2a-1)(a+5) = 0 \\Rightarrow a = -5, \\frac{1}{2} \\)",
    "solutionSteps": [
      {
        "explanation": "Split using 10 and -1.",
        "workingOut": "\\(2a^2 + 10a - a - 5 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor by grouping.",
        "workingOut": "\\(2a(a + 5) - 1(a + 5) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor.",
        "workingOut": "\\((2a - 1)(a + 5) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(a = -5, frac{1}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "ae58edc91632a21942c1baba7114e214",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve the equation: \\( a + \\frac{12}{a} = 8 \\)",
    "options": [
      {
        "text": "\\(a = 2, 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 2, -7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 2, 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 2, 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 2, 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 2, -6\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Multiply all terms by \\( a \\) to eliminate the fraction.",
    "solution": "\\( a^2 + 12 = 8a \\Rightarrow a^2 - 8a + 12 = 0 \\Rightarrow (a-2)(a-6) = 0 \\Rightarrow a = 2, 6 \\)",
    "solutionSteps": [
      {
        "explanation": "Multiply the entire equation by \\( a \\).",
        "workingOut": "\\(a^2 + 12 = 8a\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange into standard form.",
        "workingOut": "\\(a^2 - 8a + 12 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the quadratic.",
        "workingOut": "\\((a - 2)(a - 6) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( a \\).",
        "workingOut": "\\(a = 2, 6\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "af07a9c3433f5b98d0c57c5d3ace07f1",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve by factoring: \\( p^2 = p + 12 \\)",
    "options": [
      {
        "text": "\\(p = -3, -5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p = +3, 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p = -3, -4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p = -3, 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p = -3, 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p = -3, 4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "5",
    "blanks": [],
    "hint": "Rearrange into standard form \\( ap^2 + bp + c = 0 \\).",
    "solution": "\\( p^2 - p - 12 = 0 \\Rightarrow (p-4)(p+3) = 0 \\Rightarrow p = -3, 4 \\)",
    "solutionSteps": [
      {
        "explanation": "Rearrange the equation.",
        "workingOut": "\\(p^2 - p - 12 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the trinomial.",
        "workingOut": "\\((p - 4)(p + 3) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Find the roots.",
        "workingOut": "\\(p = -3, 4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "b056bc6b12d583d080f050de99e026dc",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve by factoring: \\( 6u^2 + 7u - 3 = 0 \\)",
    "options": [
      {
        "text": "\\(u = \\frac{1}{3}, -\\frac{4}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(u = \\frac{1}{3}, -\\frac{-3}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(u = \\frac{1}{3}, -\\frac{2}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(u = \\frac{1}{3}, +\\frac{3}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(u = \\frac{1}{3}, -\\frac{-4}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(u = \\frac{1}{3}, -\\frac{3}{2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "5",
    "blanks": [],
    "hint": "Find factors of -18 that add to 7.",
    "solution": "\\( (3u-1)(2u+3) = 0 \\Rightarrow u = \\frac{1}{3}, -\\frac{3}{2} \\)",
    "solutionSteps": [
      {
        "explanation": "Split middle term using 9 and -2.",
        "workingOut": "\\(6u^2 + 9u - 2u - 3 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor by grouping.",
        "workingOut": "\\(3u(2u + 3) - 1(2u + 3) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factored form.",
        "workingOut": "\\((3u - 1)(2u + 3) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(u = \\frac{1}{3}, -\\frac{3}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "b36c2c56642822785b8afc00de9ce1c3",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve by factoring: \\( a^2 - 11a - 12 = 0 \\)",
    "options": [
      {
        "text": "\\(a = -1, -13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = +1, 12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = -1, 12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = -1, 11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = -1, 13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = -1, -12\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Factors of -12 that sum to -11.",
    "solution": "\\( (a-12)(a+1) = 0 \\Rightarrow a = -1, 12 \\)",
    "solutionSteps": [
      {
        "explanation": "Factors of -12 summing to -11 are -12 and 1.",
        "workingOut": "\\((a - 12)(a + 1) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(a = -1, 12\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "bc05fc69396fa559c7272ab49c4ff33b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve by factoring: \\( 2x^2 + 5x + 2 = 0 \\)",
    "options": [
      {
        "text": "\\(x = -2, -\\frac{1}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2, -\\frac{-2}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2, -\\frac{0}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2, -\\frac{2}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = +2, +\\frac{1}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2, -\\frac{-1}{2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Find two numbers that multiply to \\( 2 \\times 2 = 4 \\) and add to 5 to split the middle term.",
    "solution": "\\( (2x+1)(x+2) = 0 \\Rightarrow x = -2, -\\frac{1}{2} \\)",
    "solutionSteps": [
      {
        "explanation": "Find two numbers that multiply to 4 and add to 5. These are 4 and 1. Split the middle term.",
        "workingOut": "\\(2x^2 + 4x + x + 2 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor by grouping.",
        "workingOut": "\\(2x(x + 2) + 1(x + 2) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out \\( (x + 2) \\).",
        "workingOut": "\\((2x + 1)(x + 2) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( x \\).",
        "workingOut": "\\(x = -2, -\\frac{1}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "bc11d0ecd9a7a13e1ff273ddc378cb05",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve by factoring: \\( a^2 = a + 90 \\)",
    "options": [
      {
        "text": "\\(a = -9, 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = -9, -11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = -9, 11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = -9, 10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = -9, -10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = +9, 10\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Rearrange and find factors of -90 that add to -1.",
    "solution": "\\( a^2 - a - 90 = 0 \\Rightarrow (a-10)(a+9) = 0 \\Rightarrow a = -9, 10 \\)",
    "solutionSteps": [
      {
        "explanation": "Rearrange the terms.",
        "workingOut": "\\(a^2 - a - 90 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the quadratic.",
        "workingOut": "\\((a - 10)(a + 9) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(a = -9, 10\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "bc639fead639db1cb417e146b93a25c6",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve by factoring: \\( k^2 = 30 + 7k \\)",
    "options": [
      {
        "text": "\\(k = -3, -11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = -3, 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = -3, 11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = +3, 10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = -3, -10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = -3, 10\\)",
        "imageUrl": ""
      }
    ],
    "answer": "5",
    "blanks": [],
    "hint": "Rearrange to get all terms on the left side.",
    "solution": "\\( k^2 - 7k - 30 = 0 \\Rightarrow (k-10)(k+3) = 0 \\Rightarrow k = -3, 10 \\)",
    "solutionSteps": [
      {
        "explanation": "Rearrange the terms.",
        "workingOut": "\\(k^2 - 7k - 30 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor into two binomials.",
        "workingOut": "\\((k - 10)(k + 3) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(k = -3, 10\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "bd6d443d84604f70ef5dbdd8d579d3bb",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve by factoring: \\( a^2 - 8a + 15 = 0 \\)",
    "options": [
      {
        "text": "\\(a = 3, 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 3, 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 3, -5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 3, 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 3, -6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 3, 4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Find two numbers that multiply to 15 and add to -8.",
    "solution": "\\( (a-3)(a-5) = 0 \\Rightarrow a = 3, 5 \\)",
    "solutionSteps": [
      {
        "explanation": "Factors of 15 that sum to -8 are -3 and -5.",
        "workingOut": "\\((a - 3)(a - 5) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(a = 3, 5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "c37da4662128b68d0c27b4b2ec672e60",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve the equation reducible to a quadratic form: \\( x^4 - 3x^2 + 2 = 0 \\)",
    "options": [
      {
        "text": "\\(x = \\pm 1, \\pm 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\pm \\sqrt{3}, \\pm \\sqrt{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\sqrt{1}, \\sqrt{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\pm \\sqrt{1}, \\pm \\sqrt{2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Let \\( u = x^2 \\). Rewrite the equation in terms of \\( u \\) as a quadratic equation, solve for \\( u \\), then substitute back to find \\( x \\).",
    "solution": "\\(x = \\pm \\sqrt{1}, \\pm \\sqrt{2}\\)",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( u = x^2 \\) to rewrite the equation in quadratic form.",
        "workingOut": "\\(u^2 - 3u + 2 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the quadratic equation in terms of \\( u \\).",
        "workingOut": "\\((u - 1)(u - 2) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( u \\).",
        "workingOut": "\\(u = 1\\quad \\text{or} \\quad u = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute back \\( x^2 = u \\) and solve for \\( x \\) by taking the square root.",
        "workingOut": "\\(x = \\pm \\sqrt{1}, pm \\sqrt{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "c44c22e476fa638002bfd1516f491102",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve by factoring: \\( c^2 - 8c + 16 = 0 \\)",
    "options": [
      {
        "text": "\\(c = 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(c = 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(c = 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(c = 4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "This is a perfect square trinomial.",
    "solution": "\\( (c-4)^2 = 0 \\Rightarrow c = 4 \\)",
    "solutionSteps": [
      {
        "explanation": "Recognize this is a perfect square trinomial since \\( (-4)^2 = 16 \\) and \\( 2 \\times (-4) = -8 \\).",
        "workingOut": "\\((c - 4)^2 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Set the factor to zero to find the double root.",
        "workingOut": "\\(c = 4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "c55af95dc55f458a43102e88b5c55e47",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Solve \\(x^2 + 8x + 12 = 0\\)",
    "options": [
      {
        "text": "\\({6, 2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\({-6, 2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\({-4, -3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\({-6, -2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Find numbers that multiply to 12 and add to 8.",
    "solution": "\\((x+6)(x+2) = 0 \\Rightarrow x=-6, -2\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Solve x^2 + 8x + 12 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\((x+6)(x+2) = 0 \\Rightarrow x=-6, -2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "c639e93431d8beca8f2862baae73fc7e",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve by factoring: \\( 9x^2 + 4x = 0 \\)",
    "options": [
      {
        "text": "\\(x = 0, -\\frac{3}{9}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, -\\frac{4}{9}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, -\\frac{-5}{9}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, -\\frac{5}{9}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, +\\frac{4}{9}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, -\\frac{-4}{9}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Factor out \\( x \\).",
    "solution": "\\( x(9x + 4) = 0 \\Rightarrow x = 0, -\\frac{4}{9} \\)",
    "solutionSteps": [
      {
        "explanation": "Factor out \\( x \\).",
        "workingOut": "\\(x(9x + 4) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the linear equations.",
        "workingOut": "\\(x = 0, -\\frac{4}{9}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "c77eb16f6c5cefd9d9210ecd70f35e9d",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve the equation: \\( \\frac{y + 1}{y + 2} = \\frac{3 - y}{y - 4} \\)",
    "options": [
      {
        "text": "\\(y = \\frac{1 + \\sqrt{21}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\frac{1 \\pm 1}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\frac{1 \\pm \\sqrt{21}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\frac{1 - \\sqrt{21}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\frac{1 \\pm \\sqrt{21}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\frac{1 \\pm 0}{2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Cross-multiply.",
    "solution": "\\( (y+1)(y-4) = (3-y)(y+2) \\Rightarrow y^2 - 3y - 4 = 6 - y - y^2 \\Rightarrow 2y^2 - 2y - 10 = 0 \\Rightarrow y^2 - y - 5 = 0 \\Rightarrow y = \\frac{1 \\pm \\sqrt{21}}{2} \\)",
    "solutionSteps": [
      {
        "explanation": "Cross-multiply.",
        "workingOut": "\\((y + 1)(y - 4) = (3 - y)(y + 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand.",
        "workingOut": "\\(y^2 - 3y - 4 = -y^2 + y + 6\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange standard form.",
        "workingOut": "\\(2y^2 - 4y - 10 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Divide by 2.",
        "workingOut": "\\(y^2 - 2y - 5 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve using quadratic formula.",
        "workingOut": "\\(y = \\frac{2 \\pm \\sqrt{4 - 4(1)(-5)}}{2} = 1 \\pm \\sqrt{6}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "c88b8416efda2320d97d2c3033fa1c9e",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve the equation: \\( x^2 = 16 \\)",
    "options": [
      {
        "text": "\\(x = \\pm 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\pm 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\pm 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\pm 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\pm 4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Take the square root of both sides. Remember to include both positive and negative solutions.",
    "solution": "\\( x^2 = 16 \\Rightarrow x = \\pm \\sqrt{16} = \\pm 4 \\)",
    "solutionSteps": [
      {
        "explanation": "Take the square root of both sides to solve for \\( x \\).",
        "workingOut": "\\(x = \\pm \\sqrt{16}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the square root of 16.",
        "workingOut": "\\(x = \\pm 4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "cec4e799cd2dcd486695e69d9232131d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Solve \\(3x^2 + 2x - 5 = 0\\)",
    "options": [
      {
        "text": "\\({5, -1}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\({1, 5/3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\({1, -5/3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\({-1, 5/3}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Factor by grouping.",
    "solution": "\\((3x+5)(x-1) = 0 \\Rightarrow x=1, -5/3\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Solve 3x^2 + 2x - 5 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\((3x+5)(x-1) = 0 \\Rightarrow x=1, -5/3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "d63bc8e7b6be1a354e18fd0e5e614aae",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve by dividing both sides by the coefficient of \\( x^2 \\) and completing the square: \\( 2x^2 + 8x + 5 = 0 \\)",
    "options": [
      {
        "text": "\\(x = -2 + \\frac{\\sqrt{6}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2 \\pm \\frac{\\sqrt{6}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2 \\pm 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2 \\pm 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = +2 \\pm \\frac{\\sqrt{6}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -2 - \\frac{\\sqrt{6}}{2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Divide by 2, then complete the square.",
    "solution": "\\( x^2 + 4x + \\frac{5}{2} = 0 \\Rightarrow x^2 + 4x = -\\frac{5}{2} \\Rightarrow x^2 + 4x + 4 = \\frac{3}{2} \\Rightarrow (x+2)^2 = \\frac{3}{2} \\Rightarrow x = -2 \\pm \\frac{\\sqrt{6}}{2} \\)",
    "solutionSteps": [
      {
        "explanation": "Divide by 2.",
        "workingOut": "\\(x^2 + 4x + \\frac{5}{2} = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract \\( \\frac{5}{2} \\) and add 4 to both sides.",
        "workingOut": "\\(x^2 + 4x + 4 = -\\frac{5}{2} + 4\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify.",
        "workingOut": "\\((x + 2)^2 = \\frac{3}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Take the square root and rationalise the denominator.",
        "workingOut": "\\(x + 2 = \\pm \\sqrt{\\frac{3}{2}} = \\pm \\frac{\\sqrt{6}}{2} \\Rightarrow x = -2 \\pm \\frac{\\sqrt{6}}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "d890412824fe032617ebf99c92f8e0a8",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve the literal quadratic equation for \\( x \\): \\( x^2 - 8ax + 16a^2 - b^2 = 0 \\)",
    "options": [
      {
        "text": "\\(x = 4a \\pm b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 4a + b^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = b \\pm 4a\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -4a \\pm b\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Recognize the perfect square trinomial in the first three terms, or apply the quadratic formula.",
    "solution": "\\(x = 4a \\pm b\\)",
    "solutionSteps": [
      {
        "explanation": "Group the first three terms to form a perfect square trinomial.",
        "workingOut": "\\((x^2 - 8ax + 16a^2) - b^2 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the perfect square trinomial.",
        "workingOut": "\\((x - 4a)^2 - b^2 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Move the \\( b^2 \\) term to the right side of the equation.",
        "workingOut": "\\((x - 4a)^2 = b^2\\)",
        "graphData": null
      },
      {
        "explanation": "Take the square root of both sides and isolate \\( x \\).",
        "workingOut": "\\(x - 4a = \\pm b \\Rightarrow x = 4a \\pm b\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "dad7f166178c5b4e6f39a9d9040b23c3",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve by factoring: \\( a^2 + 18a = 40 \\)",
    "options": [
      {
        "text": "\\(a = 2, +20\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 2, 20\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 2, -21\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 2, -19\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 2, 19\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 2, -20\\)",
        "imageUrl": ""
      }
    ],
    "answer": "5",
    "blanks": [],
    "hint": "Subtract 40 from both sides.",
    "solution": "\\( a^2 + 18a - 40 = 0 \\Rightarrow (a+20)(a-2) = 0 \\Rightarrow a = 2, -20 \\)",
    "solutionSteps": [
      {
        "explanation": "Rearrange to make the right side zero.",
        "workingOut": "\\(a^2 + 18a - 40 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the quadratic.",
        "workingOut": "\\((a + 20)(a - 2) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(a = 2, -20\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "dc1ac50673248d693ff437792cd891d1",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve by factoring: \\( 5n + 7n^2 = 0 \\)",
    "options": [
      {
        "text": "\\(n = 0, +\\frac{5}{7}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(n = 0, -\\frac{5}{7}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(n = 0, -\\frac{-5}{7}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(n = 0, -\\frac{4}{7}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(n = 0, -\\frac{6}{7}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(n = 0, -\\frac{-6}{7}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Factor out \\( n \\).",
    "solution": "\\( n(5 + 7n) = 0 \\Rightarrow n = 0, -\\frac{5}{7} \\)",
    "solutionSteps": [
      {
        "explanation": "Factor out \\( n \\).",
        "workingOut": "\\(n(7n + 5) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(n = 0, -\\frac{5}{7}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "dde2f342bcf7537f8f2cac886a1ae1a0",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve by dividing both sides by the coefficient of \\( x^2 \\) and completing the square: \\( 2x^2 - 6x - 1 = 0 \\)",
    "options": [
      {
        "text": "\\(x = \\frac{3 \\pm \\sqrt{11}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{3 + \\sqrt{11}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{3 - \\sqrt{11}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{3 \\pm \\sqrt{11}}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{3 \\pm 1}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{3 \\pm 0}{2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Divide by 2 first, then isolate the \\( x \\) terms.",
    "solution": "\\( x^2 - 3x - \\frac{1}{2} = 0 \\Rightarrow x^2 - 3x = \\frac{1}{2} \\Rightarrow x^2 - 3x + \\frac{9}{4} = \\frac{11}{4} \\Rightarrow (x-\\frac{3}{2})^2 = \\frac{11}{4} \\Rightarrow x = \\frac{3 \\pm \\sqrt{11}}{2} \\)",
    "solutionSteps": [
      {
        "explanation": "Divide the entire equation by the coefficient of \\( x^2 \\), which is 2.",
        "workingOut": "\\(x^2 - 3x - \\frac{1}{2} = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Add \\( \\frac{1}{2} \\) to both sides.",
        "workingOut": "\\(x^2 - 3x = \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Add \\( \\left(\\frac{-3}{2}\\right)^2 = \\frac{9}{4} \\) to both sides to complete the square.",
        "workingOut": "\\(x^2 - 3x + \\frac{9}{4} = \\frac{1}{2} + \\frac{9}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the fractions on the right side.",
        "workingOut": "\\(\\left(x - \\frac{3}{2}\\right)^2 = \\frac{11}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Take the square root and solve for \\( x \\).",
        "workingOut": "\\(x - \\frac{3}{2} = \\pm \\frac{\\sqrt{11}}{2} \\Rightarrow x = \\frac{3 \\pm \\sqrt{11}}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "e45b19d9c2d886749ba4f46e049df83e",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve the equation: \\( x^2 = \\frac{25}{9} \\)",
    "options": [
      {
        "text": "\\(x = \\pm \\frac{5}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\pm 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\pm 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\pm \\frac{5}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\pm \\frac{5}{3}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Take the square root of both the numerator and denominator.",
    "solution": "\\( x = \\pm \\sqrt{\\frac{25}{9}} = \\pm \\frac{5}{3} \\)",
    "solutionSteps": [
      {
        "explanation": "Apply the square root to both sides of the equation.",
        "workingOut": "\\(x = \\pm \\sqrt{\\frac{25}{9}}\\)",
        "graphData": null
      },
      {
        "explanation": "Distribute the square root to the numerator and denominator.",
        "workingOut": "\\(x = \\pm \\frac{\\sqrt{25}}{\\sqrt{9}}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the roots.",
        "workingOut": "\\(x = \\pm \\frac{5}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "e547efc985a4b5a20b75573d7d4cb0e1",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve by factoring: \\( c^2 + 20 = 9c \\)",
    "options": [
      {
        "text": "\\(c = 4, 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(c = 4, -5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(c = 4, 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(c = 4, 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(c = 4, 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(c = 4, -6\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Subtract \\( 9c \\) from both sides.",
    "solution": "\\( c^2 - 9c + 20 = 0 \\Rightarrow (c-4)(c-5) = 0 \\Rightarrow c = 4, 5 \\)",
    "solutionSteps": [
      {
        "explanation": "Rearrange to make one side zero.",
        "workingOut": "\\(c^2 - 9c + 20 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the quadratic trinomial.",
        "workingOut": "\\((c - 4)(c - 5) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(c = 4, 5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "e646e64ec7c0d2151e120bd8cf35c3ad",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve by factoring: \\( 4a = a^2 \\)",
    "options": [
      {
        "text": "\\(a = 0, 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 0, 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 0, 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 0, -5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 0, -4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 0, 5\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Move all terms to one side first.",
    "solution": "\\( a^2 - 4a = 0 \\Rightarrow a(a - 4) = 0 \\Rightarrow a = 0, 4 \\)",
    "solutionSteps": [
      {
        "explanation": "Rearrange the equation so one side is zero.",
        "workingOut": "\\(a^2 - 4a = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out \\( a \\).",
        "workingOut": "\\(a(a - 4) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the values of \\( a \\).",
        "workingOut": "\\(a = 0, 4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "e6cd81d1e0e2a8238634f18d8f7debef",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve by factoring: \\( p^2 + p - 20 = 0 \\)",
    "options": [
      {
        "text": "\\(p = -5, 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p = -5, -4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p = -5, 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p = +5, 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p = -5, 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p = -5, -5\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Factors of -20 that sum to 1.",
    "solution": "\\( (p+5)(p-4) = 0 \\Rightarrow p = -5, 4 \\)",
    "solutionSteps": [
      {
        "explanation": "Find numbers that multiply to -20 and sum to 1. They are 5 and -4.",
        "workingOut": "\\((p + 5)(p - 4) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(p = -5, 4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "e98453857c8e92d1cda6314de7caab6d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve by factoring: \\( u^2 + u = 72 \\)",
    "options": [
      {
        "text": "\\(u = -9, 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(u = -9, 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(u = +9, 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(u = -9, -8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(u = -9, 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(u = -9, -9\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Rearrange and find factors of -72 that add to 1.",
    "solution": "\\( u^2 + u - 72 = 0 \\Rightarrow (u+9)(u-8) = 0 \\Rightarrow u = -9, 8 \\)",
    "solutionSteps": [
      {
        "explanation": "Subtract 72 from both sides.",
        "workingOut": "\\(u^2 + u - 72 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the quadratic expression.",
        "workingOut": "\\((u + 9)(u - 8) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(u = -9, 8\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "eaeccb15ccb58bb6da411b625b428a00",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve by completing the square: \\( x^2 - 8x = 0 \\)",
    "options": [
      {
        "text": "\\(x - 4 = \\pm 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, -9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, -8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 0, 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x - 4 = \\pm 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Add 16 to both sides.",
    "solution": "\\( x^2 - 8x + 16 = 16 \\Rightarrow (x-4)^2 = 16 \\Rightarrow x - 4 = \\pm 4 \\Rightarrow x = 0, 8 \\)",
    "solutionSteps": [
      {
        "explanation": "Complete the square by adding \\( \\left(\\frac{-8}{2}\\right)^2 = 16 \\) to both sides.",
        "workingOut": "\\(x^2 - 8x + 16 = 16\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify.",
        "workingOut": "\\((x - 4)^2 = 16\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(x - 4 = \\pm 4 \\Rightarrow x = 0, 8\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "ecd027d5ca364f25d5cef8e93849d1ea",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve by factoring: \\( 40 + 13h + h^2 = 0 \\)",
    "options": [
      {
        "text": "\\(h = -5, 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(h = -5, -9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(h = -5, -7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(h = +5, +8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(h = -5, 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(h = -5, -8\\)",
        "imageUrl": ""
      }
    ],
    "answer": "5",
    "blanks": [],
    "hint": "Rewrite in standard order first.",
    "solution": "\\( h^2 + 13h + 40 = 0 \\Rightarrow (h+5)(h+8) = 0 \\Rightarrow h = -5, -8 \\)",
    "solutionSteps": [
      {
        "explanation": "Write in standard quadratic form.",
        "workingOut": "\\(h^2 + 13h + 40 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor finding numbers that multiply to 40 and add to 13.",
        "workingOut": "\\((h + 5)(h + 8) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(h = -5, -8\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "ef7e825ff559a2c109c085cdcfdea1e5",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve by factoring: \\( 2y^2 - 3y - 20 = 0 \\)",
    "options": [
      {
        "text": "\\(y = -\\frac{5}{2}, -4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = +\\frac{5}{2}, 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = -\\frac{5}{2}, 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = -\\frac{5}{2}, -5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = -\\frac{5}{2}, 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = -\\frac{5}{2}, 4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "5",
    "blanks": [],
    "hint": "Find factors of -40 that sum to -3.",
    "solution": "\\( (2y+5)(y-4) = 0 \\Rightarrow y = -\\frac{5}{2}, 4 \\)",
    "solutionSteps": [
      {
        "explanation": "Split using -8 and 5.",
        "workingOut": "\\(2y^2 - 8y + 5y - 20 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor.",
        "workingOut": "\\(2y(y - 4) + 5(y - 4) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factored form.",
        "workingOut": "\\((2y + 5)(y - 4) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(y = -\\frac{5}{2}, 4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "f173d09d43771d29e7cc689657772245",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Solve \\(x^2 - 64 = 0\\)",
    "options": [
      {
        "text": "\\({64, -64}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\({8, -8}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\({8, 0}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\({8}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Use difference of squares.",
    "solution": "\\((x-8)(x+8) = 0 \\Rightarrow x=8, -8\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Solve x^2 - 64 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\((x-8)(x+8) = 0 \\Rightarrow x=8, -8\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "f1adcb78f25a5cf1ca7b44aac0cfb323",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve the equation: \\( \\frac{5k + 7}{k - 1} = 3k + 2 \\)",
    "options": [
      {
        "text": "\\(k = 3, 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = 3, -1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = 3, -2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = 3, 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = 3, 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k = 3, +1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Multiply both sides by \\( (k - 1) \\) and expand.",
    "solution": "\\( 5k + 7 = (3k+2)(k-1) \\Rightarrow 5k + 7 = 3k^2 - k - 2 \\Rightarrow 3k^2 - 6k - 9 = 0 \\Rightarrow k^2 - 2k - 3 = 0 \\Rightarrow k = 3, -1 \\)",
    "solutionSteps": [
      {
        "explanation": "Multiply both sides by \\( (k - 1) \\).",
        "workingOut": "\\(5k + 7 = (3k + 2)(k - 1)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the right side.",
        "workingOut": "\\(5k + 7 = 3k^2 - 3k + 2k - 2 \\Rightarrow 5k + 7 = 3k^2 - k - 2\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange into standard form.",
        "workingOut": "\\(3k^2 - 6k - 9 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Divide by 3 to simplify.",
        "workingOut": "\\(k^2 - 2k - 3 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor and solve.",
        "workingOut": "\\((k - 3)(k + 1) = 0 \\Rightarrow k = 3, -1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "f1ba7b703062efab04fc6544c8a9e05f",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Solve \\(x^2 + 9x = 0\\)",
    "options": [
      {
        "text": "\\({9, -9}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\({0}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\({0, -9}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\({0, 9}\\)",
        "imageUrl": ""
      }
    ],
    "answer": 2,
    "blanks": [],
    "hint": "Factor out x.",
    "solution": "\\(x(x+9) = 0 \\Rightarrow x=0, -9\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Solve x^2 + 9x = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(x(x+9) = 0 \\Rightarrow x=0, -9\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "f1c466b5912eb87a13a5150c714f6188",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve the equation: \\( \\frac{u + 3}{2u - 7} = \\frac{2u - 1}{u - 3} \\)",
    "options": [
      {
        "text": "\\(u = 4, \\frac{-4}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(u = 4, \\frac{4}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(u = 4, \\frac{-5}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(u = 4, \\frac{4}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(u = 4, \\frac{5}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(u = 4, \\frac{3}{3}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "blanks": [],
    "hint": "Cross-multiply to clear the fractions.",
    "solution": "\\( (u+3)(u-3) = (2u-1)(2u-7) \\Rightarrow u^2 - 9 = 4u^2 - 16u + 7 \\Rightarrow 3u^2 - 16u + 16 = 0 \\Rightarrow (3u-4)(u-4) = 0 \\Rightarrow u = 4, \\frac{4}{3} \\)",
    "solutionSteps": [
      {
        "explanation": "Cross-multiply the denominators.",
        "workingOut": "\\((u + 3)(u - 3) = (2u - 1)(2u - 7)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand both sides.",
        "workingOut": "\\(u^2 - 9 = 4u^2 - 14u - 2u + 7\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange to equal zero.",
        "workingOut": "\\(3u^2 - 16u + 16 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the non-monic trinomial.",
        "workingOut": "\\((3u - 4)(u - 4) = 0 \\Rightarrow u = 4, frac{4}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "f346087fa04c6fae381bc6b259cc8cfb",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve by factoring: \\( 3b^2 - b = 0 \\)",
    "options": [
      {
        "text": "\\(b = \\frac{1}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(b = \\frac{4}{6}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(b = \\frac{3}{4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(b = \\frac{1}{3}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Factor out \\( b \\).",
    "solution": "\\( b(3b - 1) = 0 \\Rightarrow b = 0 \\text{ or } b = \\frac{1}{3} \\)",
    "solutionSteps": [
      {
        "explanation": "Factor out the common variable \\( b \\).",
        "workingOut": "\\(b(3b - 1) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Set each factor to zero.",
        "workingOut": "\\(b = 0 \\quad \\text{or} \\quad 3b - 1 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the linear equations.",
        "workingOut": "\\(b = 0, frac{1}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "f3a68530d3e34118d5037c7cb50eb3df",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve by factoring: \\( 6x^2 + 11x + 3 = 0 \\)",
    "options": [
      {
        "text": "\\(x = -\\frac{1}{3}, -\\frac{-3}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = +\\frac{1}{3}, +\\frac{3}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -\\frac{1}{3}, -\\frac{2}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -\\frac{1}{3}, -\\frac{-4}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -\\frac{1}{3}, -\\frac{3}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -\\frac{1}{3}, -\\frac{4}{2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "4",
    "blanks": [],
    "hint": "Find factors of 18 that add to 11.",
    "solution": "\\( (3x+1)(2x+3) = 0 \\Rightarrow x = -\\frac{1}{3}, -\\frac{3}{2} \\)",
    "solutionSteps": [
      {
        "explanation": "Split using 9 and 2.",
        "workingOut": "\\(6x^2 + 9x + 2x + 3 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor by grouping.",
        "workingOut": "\\(3x(2x + 3) + 1(2x + 3) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factored expression.",
        "workingOut": "\\((3x + 1)(2x + 3) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(x = -\\frac{1}{3}, -\\frac{3}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "f464e4f2909c4f5b5da1c2e0136c0001",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve by factoring: \\( t^2 - 3t - 10 = 0 \\)",
    "options": [
      {
        "text": "\\(t = -2, 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t = -2, 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t = +2, 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t = -2, 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t = -2, -6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t = -2, -5\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Find two numbers that multiply to -10 and add to -3.",
    "solution": "\\( (t-5)(t+2) = 0 \\Rightarrow t = -2, 5 \\)",
    "solutionSteps": [
      {
        "explanation": "Find factors of -10 that add to -3. These are -5 and 2.",
        "workingOut": "\\((t - 5)(t + 2) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(t = -2, 5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "f703b921fca6e128bdb3d0dabbf65186",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve the equation reducible to a quadratic form: \\( x^4 - 7x^2 + 12 = 0 \\)",
    "options": [
      {
        "text": "\\(x = \\pm 3, \\pm 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\pm \\sqrt{7}, \\pm \\sqrt{12}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\pm \\sqrt{3}, \\pm \\sqrt{4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\sqrt{3}, \\sqrt{4}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Let \\( u = x^2 \\). Rewrite the equation in terms of \\( u \\) as a quadratic equation, solve for \\( u \\), then substitute back to find \\( x \\).",
    "solution": "\\(x = \\pm \\sqrt{3}, \\pm \\sqrt{4}\\)",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( u = x^2 \\) to rewrite the equation in quadratic form.",
        "workingOut": "\\(u^2 - 7u + 12 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the quadratic equation in terms of \\( u \\).",
        "workingOut": "\\((u - 3)(u - 4) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( u \\).",
        "workingOut": "\\(u = 3\\quad \\text{or} \\quad u = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute back \\( x^2 = u \\) and solve for \\( x \\) by taking the square root.",
        "workingOut": "\\(x = \\pm \\sqrt{3}, pm \\sqrt{4}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "f708723b24ad57eba0d64a3d9279125c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve by factoring: \\( 9x^2 + 1 = 6x \\)",
    "options": [
      {
        "text": "\\(x = \\frac{1}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{1}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{4}{6}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = \\frac{3}{6}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Rearrange and check for a perfect square.",
    "solution": "\\( 9x^2 - 6x + 1 = 0 \\Rightarrow (3x-1)^2 = 0 \\Rightarrow x = \\frac{1}{3} \\)",
    "solutionSteps": [
      {
        "explanation": "Rearrange.",
        "workingOut": "\\(9x^2 - 6x + 1 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Recognize perfect square trinomial.",
        "workingOut": "\\((3x - 1)^2 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(x = \\frac{1}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "fa097cbac5cafda2eed6b38b16ac2b56",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve the equation: \\( \\frac{3}{a + 2} + \\frac{a + 2}{3} = \\frac{10}{3} \\)",
    "options": [
      {
        "text": "\\(a+2 = 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a+2 = 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a+2 = 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = -1, 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = +1, 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a+2 = 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Use a substitution \\( u = a + 2 \\) to simplify the equation first.",
    "solution": "\\( \\text{Let } u = a+2. \\text{ Then } \\frac{3}{u} + \\frac{u}{3} = \\frac{10}{3} \\Rightarrow 9 + u^2 = 10u \\Rightarrow u^2 - 10u + 9 = 0 \\Rightarrow u = 1, 9 \\Rightarrow a+2=1, 9 \\Rightarrow a = -1, 7 \\)",
    "solutionSteps": [
      {
        "explanation": "Use substitution: let \\( u = a + 2 \\).",
        "workingOut": "\\(\\frac{3}{u} + \\frac{u}{3} = \\frac{10}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply all terms by \\( 3u \\).",
        "workingOut": "\\(9 + u^2 = 10u\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange into standard quadratic form.",
        "workingOut": "\\(u^2 - 10u + 9 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the quadratic in terms of \\( u \\).",
        "workingOut": "\\((u - 1)(u - 9) = 0 \\Rightarrow u = 1 \\quad \\text{or} \\quad u = 9\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute back \\( u = a + 2 \\) and solve for \\( a \\).",
        "workingOut": "\\(a + 2 = 1 \\Rightarrow a = -1, quad \\text{and} \\quad a + 2 = 9 \\Rightarrow a = 7\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "fa2d4733c5e2f3ded44b8724cc9ec424",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Solve \\(4x^2 + 7x - 2 = 0\\)",
    "options": [
      {
        "text": "\\({0.25, -2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\({0.5, -1}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\({-0.25, 2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\({1, -2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Factor by grouping.",
    "solution": "\\((4x-1)(x+2) = 0 \\Rightarrow x=0.25, -2\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Solve 4x^2 + 7x - 2 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\((4x-1)(x+2) = 0 \\Rightarrow x=0.25, -2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "fac12404536676995a8cbca934404b2b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve the equation: \\( \\frac{2t}{t^2 - 4} = \\frac{1}{\\sqrt{3}} \\)",
    "options": [
      {
        "text": "\\(t = \\sqrt{3} \\pm \\sqrt{7}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t = \\sqrt{3} \\pm \\sqrt{7}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t = \\sqrt{3} \\pm \\sqrt{7}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t = \\sqrt{3} \\pm \\sqrt{7}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t = \\sqrt{3} \\pm 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t = \\sqrt{3} \\pm 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "blanks": [],
    "hint": "Cross-multiply and solve using the quadratic formula.",
    "solution": "\\( 2\\sqrt{3}t = t^2 - 4 \\Rightarrow t^2 - 2\\sqrt{3}t - 4 = 0 \\Rightarrow t = \\frac{2\\sqrt{3} \\pm \\sqrt{12 + 16}}{2} = \\sqrt{3} \\pm \\sqrt{7} \\)",
    "solutionSteps": [
      {
        "explanation": "Cross-multiply.",
        "workingOut": "\\(2\\sqrt{3}t = t^2 - 4\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange into standard form.",
        "workingOut": "\\(t^2 - 2\\sqrt{3}t - 4 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the quadratic formula with \\( a = 1, b = -2\\sqrt{3}, c = -4 \\).",
        "workingOut": "\\(t = \\frac{-(-2\\sqrt{3}) \\pm \\sqrt{(-2\\sqrt{3})^2 - 4(1)(-4)}}{2(1)}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the values.",
        "workingOut": "\\(t = \\frac{2\\sqrt{3} \\pm \\sqrt{12 + 16}}{2} = \\frac{2\\sqrt{3} \\pm \\sqrt{28}}{2} = \\frac{2\\sqrt{3} \\pm 2\\sqrt{7}}{2} = \\sqrt{3} \\pm \\sqrt{7}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "fae4b83879f895ca5274f1e6917ef8ce",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve the equation: \\( a = \\frac{a + 8}{a - 1} \\)",
    "options": [
      {
        "text": "\\(a = 4, 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 4, -3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 4, 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 4, +2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 4, -2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a = 4, -1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "4",
    "blanks": [],
    "hint": "Multiply both sides by \\( (a - 1) \\).",
    "solution": "\\( a(a - 1) = a + 8 \\Rightarrow a^2 - a = a + 8 \\Rightarrow a^2 - 2a - 8 = 0 \\Rightarrow (a-4)(a+2) = 0 \\Rightarrow a = 4, -2 \\)",
    "solutionSteps": [
      {
        "explanation": "Multiply both sides by \\( (a - 1) \\).",
        "workingOut": "\\(a(a - 1) = a + 8\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the left side.",
        "workingOut": "\\(a^2 - a = a + 8\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange standard form.",
        "workingOut": "\\(a^2 - 2a - 8 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the quadratic trinomial.",
        "workingOut": "\\((a - 4)(a + 2) = 0 \\Rightarrow a = 4, -2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "fb5df3c56963a8986744707123855222",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve by completing the square: \\( x^2 - 4x = 5 \\)",
    "options": [
      {
        "text": "\\(x = 5, 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 5, +1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 5, -2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 5, -1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 5, 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x - 2 = \\pm 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 5, -1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 5, -1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = 5, 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x - 2 = \\pm 0\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "blanks": [],
    "hint": "Add the square of half the coefficient of \\( x \\) to both sides.",
    "solution": "\\( x^2 - 4x + 4 = 9 \\Rightarrow (x-2)^2 = 9 \\Rightarrow x - 2 = \\pm 3 \\Rightarrow x = 5, -1 \\)",
    "solutionSteps": [
      {
        "explanation": "Find the constant to complete the square: \\( \\left(\\frac{-4}{2}\\right)^2 = 4 \\). Add 4 to both sides.",
        "workingOut": "\\(x^2 - 4x + 4 = 5 + 4\\)",
        "graphData": null
      },
      {
        "explanation": "Write the left side as a perfect square.",
        "workingOut": "\\((x - 2)^2 = 9\\)",
        "graphData": null
      },
      {
        "explanation": "Take the square root of both sides.",
        "workingOut": "\\(x - 2 = \\pm 3\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the two equations.",
        "workingOut": "\\(x = 2 \\pm 3 \\Rightarrow x = 5, -1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "fc2c5c3eb5542e33625a2425622cdaed",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve by factoring: \\( 3y^2 + 10y = 8 \\)",
    "options": [
      {
        "text": "\\(y = \\frac{2}{3}, 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\frac{2}{3}, 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\frac{2}{3}, -4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\frac{2}{3}, -3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\frac{2}{3}, +4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = \\frac{2}{3}, -5\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "blanks": [],
    "hint": "Move 8 to the left side and solve.",
    "solution": "\\( 3y^2 + 10y - 8 = 0 \\Rightarrow (3y-2)(y+4) = 0 \\Rightarrow y = \\frac{2}{3}, -4 \\)",
    "solutionSteps": [
      {
        "explanation": "Set to zero.",
        "workingOut": "\\(3y^2 + 10y - 8 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Split using 12 and -2.",
        "workingOut": "\\(3y^2 + 12y - 2y - 8 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factor.",
        "workingOut": "\\(3y(y + 4) - 2(y + 4) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve.",
        "workingOut": "\\(y = \\frac{2}{3}, -4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q17b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For $V = 3600\\left(1 - \\dfrac{t}{60}\\right)^2$ ($0 \\le t \\le 60$), how long will it take for the tank to become half full (to the nearest minute)?",
    "options": [],
    "answer": "$\\approx 18$ minutes ($t \\approx 17.6$)",
    "blanks": [],
    "hint": "Set $V = 1800$, take square roots (both signs), and reject the root outside $0 \\le t \\le 60$.",
    "solution": "Half full is $1800$ L: $3600\\left(1 - \\frac{t}{60}\\right)^2 = 1800 \\Rightarrow \\left(1 - \\frac{t}{60}\\right)^2 = \\frac{1}{2} \\Rightarrow 1 - \\frac{t}{60} = \\pm\\frac{1}{\\sqrt{2}}$. So $t = 60\\left(1 - \\frac{1}{\\sqrt2}\\right) \\approx 17.6$ or $t = 60\\left(1 + \\frac{1}{\\sqrt2}\\right) \\approx 102.4$ (rejected, $>60$). Hence $t \\approx 18$ minutes.",
    "solutionSteps": [
      {
        "explanation": "Set the volume to half of \\(3600\\), i.e. \\(1800\\) L.",
        "workingOut": "3600\\left(1 - \\frac{t}{60}\\right)^2 = 1800"
      },
      {
        "explanation": "Divide and take the square root of both sides (keep both signs).",
        "workingOut": "\\left(1 - \\frac{t}{60}\\right)^2 = \\frac{1}{2} \\Rightarrow 1 - \\frac{t}{60} = \\pm\\frac{1}{\\sqrt2}"
      },
      {
        "explanation": "Solve for \\(t\\) in both cases.",
        "workingOut": "t = 60\\left(1 - \\tfrac{1}{\\sqrt2}\\right) \\approx 17.6 \\;\\text{ or }\\; t = 60\\left(1 + \\tfrac{1}{\\sqrt2}\\right) \\approx 102.4"
      },
      {
        "explanation": "Reject \\(t \\approx 102.4\\) since \\(0 \\le t \\le 60\\), and round the valid root.",
        "workingOut": "t \\approx 17.6 \\approx 18 \\text{ minutes}"
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q5",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For what values of $k$ does the quadratic equation $5x^2 - 2x + (8k - 15) = 0$ have real roots?",
    "options": [],
    "answer": "$k \\leq \\dfrac{19}{10}$",
    "blanks": [],
    "hint": "Real roots require the discriminant $\\Delta = b^2 - 4ac \\geq 0$.",
    "solution": "$\\Delta = (-2)^2 - 4(5)(8k-15) \\geq 0 \\Rightarrow 4 - 160k + 300 \\geq 0 \\Rightarrow 304 \\geq 160k \\Rightarrow k \\leq \\frac{19}{10}$.",
    "solutionSteps": [
      {
        "explanation": "For real roots the discriminant must be non-negative (note: \\(\\geq 0\\) includes equal roots).",
        "workingOut": "\\Delta = b^2 - 4ac \\geq 0"
      },
      {
        "explanation": "Substitute \\(a = 5\\), \\(b = -2\\), \\(c = 8k - 15\\).",
        "workingOut": "(-2)^2 - 4(5)(8k - 15) \\geq 0"
      },
      {
        "explanation": "Expand.",
        "workingOut": "4 - 160k + 300 \\geq 0"
      },
      {
        "explanation": "Collect terms.",
        "workingOut": "304 \\geq 160k"
      },
      {
        "explanation": "Solve for \\(k\\).",
        "workingOut": "k \\leq \\frac{304}{160} = \\frac{19}{10}"
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020s-q17b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For $V = 4900\\left(1 - \\dfrac{t}{70}\\right)^2$ ($0 \\le t \\le 70$), how long until the tank is half full (to the nearest minute)?",
    "options": [],
    "answer": "$\\approx 21$ minutes ($t \\approx 20.5$)",
    "blanks": [],
    "hint": "Set $V = 2450$, take square roots (both signs), reject the root outside $[0, 70]$.",
    "solution": "$4900\\left(1 - \\frac{t}{70}\\right)^2 = 2450 \\Rightarrow \\left(1 - \\frac{t}{70}\\right)^2 = \\frac{1}{2} \\Rightarrow t = 70\\left(1 - \\frac{1}{\\sqrt2}\\right) \\approx 20.5$ or $t \\approx 119.5$ (rejected). So $t \\approx 21$ minutes.",
    "solutionSteps": [
      {
        "explanation": "Set the volume to half of \\(4900\\).",
        "workingOut": "4900\\left(1 - \\frac{t}{70}\\right)^2 = 2450"
      },
      {
        "explanation": "Take the square root (both signs).",
        "workingOut": "1 - \\frac{t}{70} = \\pm\\frac{1}{\\sqrt2}"
      },
      {
        "explanation": "Solve and reject the value \\(> 70\\).",
        "workingOut": "t = 70\\left(1 - \\tfrac{1}{\\sqrt2}\\right) \\approx 20.5"
      },
      {
        "explanation": "Round to the nearest minute.",
        "workingOut": "t \\approx 21 \\text{ minutes}"
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020s-q5",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For what values of $k$ does $3x^2 - 4x + (2k - 7) = 0$ have real roots?",
    "options": [],
    "answer": "$k \\leq \\dfrac{25}{6}$",
    "blanks": [],
    "hint": "Real roots require $\\Delta = b^2 - 4ac \\geq 0$.",
    "solution": "$\\Delta = (-4)^2 - 4(3)(2k-7) \\geq 0 \\Rightarrow 16 - 24k + 84 \\geq 0 \\Rightarrow 100 \\geq 24k \\Rightarrow k \\leq \\frac{25}{6}$.",
    "solutionSteps": [
      {
        "explanation": "For real roots the discriminant is non-negative.",
        "workingOut": "\\Delta = b^2 - 4ac \\geq 0"
      },
      {
        "explanation": "Substitute \\(a = 3\\), \\(b = -4\\), \\(c = 2k - 7\\).",
        "workingOut": "16 - 4(3)(2k - 7) \\geq 0"
      },
      {
        "explanation": "Expand.",
        "workingOut": "16 - 24k + 84 \\geq 0"
      },
      {
        "explanation": "Solve for \\(k\\).",
        "workingOut": "100 \\geq 24k \\Rightarrow k \\leq \\frac{25}{6}"
      }
    ],
    "graphData": null,
    "requiresManualGrading": false
  }
];
