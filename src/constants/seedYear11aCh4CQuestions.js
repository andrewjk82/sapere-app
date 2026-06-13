export const Y11A_CH4C_QUESTIONS = [
  // Q1a
  {
    id: "y11a-4c-q1a",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "The discriminant of a quadratic function with rational coefficients is given as \\(\\Delta = 5\\). State whether there are any zeroes. If there are zeroes, state whether they are rational or irrational, and whether they are equal or distinct.",
    a: "distinct irrational zeroes",
    solution: "Since \\(\\Delta = 5 > 0\\) and 5 is not a perfect square, the quadratic function has two distinct irrational zeroes.",
    t: "The discriminant",
    hint: "Examine the sign of the discriminant and whether it is a perfect square.",
    solutionSteps: [
      {
        explanation: "Determine the number of zeroes by checking the sign of the discriminant \\(\\Delta\\).",
        workingOut: "\\Delta = 5 > 0",
        graphData: null
      },
      {
        explanation: "Since the discriminant is strictly positive, there are two distinct real zeroes. Next, determine if they are rational or irrational by checking if 5 is a perfect square.",
        workingOut: "\\sqrt{5} \\notin \\mathbb{Q}",
        graphData: null
      },
      {
        explanation: "Since the coefficients are rational and the discriminant is not a perfect square, the zeroes must be irrational and distinct.",
        workingOut: "\\mathrm{Zeroes\\:are\\:distinct\\:and\\:irrational}",
        graphData: null
      }
    ]
  },
  // Q1b
  {
    id: "y11a-4c-q1b",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "The discriminant of a quadratic function with rational coefficients is given as \\(\\Delta = -4\\). State whether there are any zeroes. If there are zeroes, state whether they are rational or irrational, and whether they are equal or distinct.",
    a: "no zeroes",
    solution: "Since \\(\\Delta = -4 < 0\\), the quadratic function has no real zeroes.",
    t: "The discriminant",
    hint: "Recall what a negative discriminant implies about the existence of real roots.",
    solutionSteps: [
      {
        explanation: "Check the sign of the given discriminant.",
        workingOut: "\\Delta = -4",
        graphData: null
      },
      {
        explanation: "Compare the discriminant to zero to see if it is negative.",
        workingOut: "-4 < 0",
        graphData: null
      },
      {
        explanation: "Since the discriminant is less than zero, there are no real zeroes for this quadratic function.",
        workingOut: "\\mathrm{No\\:real\\:zeroes}",
        graphData: null
      }
    ]
  },
  // Q1c
  {
    id: "y11a-4c-q1c",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "The discriminant of a quadratic function with rational coefficients is given as \\(\\Delta = 0\\). State whether there are any zeroes. If there are zeroes, state whether they are rational or irrational, and whether they are equal or distinct.",
    a: "equal rational zeroes",
    solution: "Since \\(\\Delta = 0\\), the quadratic function has two equal rational zeroes (a double root).",
    t: "The discriminant",
    hint: "Consider the case where the term under the square root in the quadratic formula is zero.",
    solutionSteps: [
      {
        explanation: "Observe the value of the discriminant.",
        workingOut: "\\Delta = 0",
        graphData: null
      },
      {
        explanation: "Under the quadratic formula, the square root of the discriminant becomes zero, meaning both roots collapse to a single value.",
        workingOut: "x = -\\frac{b}{2a}",
        graphData: null
      },
      {
        explanation: "Since the coefficients are rational, this single root is rational and represents two equal rational zeroes.",
        workingOut: "\\mathrm{Equal\\:rational\\:zeroes}",
        graphData: null
      }
    ]
  },
  // Q1d
  {
    id: "y11a-4c-q1d",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "The discriminant of a quadratic function with rational coefficients is given as \\(\\Delta = 9\\). State whether there are any zeroes. If there are zeroes, state whether they are rational or irrational, and whether they are equal or distinct.",
    a: "distinct rational zeroes",
    solution: "Since \\(\\Delta = 9 > 0\\) and 9 is a perfect square, the quadratic function has two distinct rational zeroes.",
    t: "The discriminant",
    hint: "Determine if the discriminant is positive and check if it is a perfect square.",
    solutionSteps: [
      {
        explanation: "Determine the sign of the discriminant to find the number of zeroes.",
        workingOut: "\\Delta = 9 > 0",
        graphData: null
      },
      {
        explanation: "Check if the discriminant is a perfect square.",
        workingOut: "\\sqrt{9} = 3 \\in \\mathbb{Q}",
        graphData: null
      },
      {
        explanation: "Since the discriminant is a positive perfect square and the coefficients are rational, the zeroes are distinct and rational.",
        workingOut: "\\mathrm{Distinct\\:rational\\:zeroes}",
        graphData: null
      }
    ]
  },
  // Q1e
  {
    id: "y11a-4c-q1e",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "The discriminant of a quadratic function with rational coefficients is given as \\(\\Delta = -5\\). State whether there are any zeroes. If there are zeroes, state whether they are rational or irrational, and whether they are equal or distinct.",
    a: "no zeroes",
    solution: "Since \\(\\Delta = -5 < 0\\), the quadratic function has no real zeroes.",
    t: "The discriminant",
    hint: "Recall the condition for a quadratic equation to have no real solutions.",
    solutionSteps: [
      {
        explanation: "Examine the sign of the discriminant.",
        workingOut: "\\Delta = -5",
        graphData: null
      },
      {
        explanation: "Compare the discriminant value to zero.",
        workingOut: "-5 < 0",
        graphData: null
      },
      {
        explanation: "A negative discriminant means there are no real zeroes.",
        workingOut: "\\mathrm{No\\:real\\:zeroes}",
        graphData: null
      }
    ]
  },
  // Q1f
  {
    id: "y11a-4c-q1f",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "The discriminant of a quadratic function with rational coefficients is given as \\(\\Delta = 16\\). State whether there are any zeroes. If there are zeroes, state whether they are rational or irrational, and whether they are equal or distinct.",
    a: "distinct rational zeroes",
    solution: "Since \\(\\Delta = 16 > 0\\) and 16 is a perfect square, the quadratic function has two distinct rational zeroes.",
    t: "The discriminant",
    hint: "Determine if 16 is a perfect square and whether it is positive.",
    solutionSteps: [
      {
        explanation: "Verify if the discriminant is positive.",
        workingOut: "\\Delta = 16 > 0",
        graphData: null
      },
      {
        explanation: "Determine if the discriminant is a perfect square.",
        workingOut: "\\sqrt{16} = 4 \\in \\mathbb{Q}",
        graphData: null
      },
      {
        explanation: "Because the discriminant is a positive perfect square, the zeroes are distinct and rational.",
        workingOut: "\\mathrm{Distinct\\:rational\\:zeroes}",
        graphData: null
      }
    ]
  },
  // Q2a
  {
    id: "y11a-4c-q2a",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Find the discriminant \\(\\Delta\\) for the equation \\(x^2 - 6x + 8 = 0\\). Hence state how many roots there are, and whether or not they are rational.",
    a: "4, two rational roots",
    solution: "The discriminant is \\(\\Delta = 4\\). Since \\(\\Delta > 0\\) and is a perfect square, there are two rational roots.",
    t: "The discriminant",
    hint: "Use the formula \\(\\Delta = b^2 - 4ac\\) and evaluate.",
    solutionSteps: [
      {
        explanation: "Identify the coefficients \\(a\\), \\(b\\), and \\(c\\) from the quadratic equation.",
        workingOut: "a = 1, \\quad b = -6, \\quad c = 8",
        graphData: null
      },
      {
        explanation: "Calculate the discriminant using the formula \\(\\Delta = b^2 - 4ac\\).",
        workingOut: "\\Delta = (-6)^2 - 4(1)(8) = 36 - 32 = 4",
        graphData: null
      },
      {
        explanation: "Since \\(\\Delta = 4 > 0\\) is a perfect square, the equation has two rational roots.",
        workingOut: "\\Delta = 4 \\implies \\mathrm{two\\:rational\\:roots}",
        graphData: null
      }
    ]
  },
  // Q2b
  {
    id: "y11a-4c-q2b",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Find the discriminant \\(\\Delta\\) for the equation \\(x^2 + 4x - 6 = 0\\). Hence state how many roots there are, and whether or not they are rational.",
    a: "40, two irrational roots",
    solution: "The discriminant is \\(\\Delta = 40\\). Since \\(\\Delta > 0\\) and is not a perfect square, there are two irrational roots.",
    t: "The discriminant",
    hint: "Identify the coefficients and calculate \\(\\Delta = b^2 - 4ac\\).",
    solutionSteps: [
      {
        explanation: "Write down the coefficients of the quadratic equation.",
        workingOut: "a = 1, \\quad b = 4, \\quad c = -6",
        graphData: null
      },
      {
        explanation: "Substitute the coefficients into the discriminant formula.",
        workingOut: "\\Delta = 4^2 - 4(1)(-6) = 16 + 24 = 40",
        graphData: null
      },
      {
        explanation: "Since the discriminant is positive but not a perfect square, there are two distinct irrational roots.",
        workingOut: "\\Delta = 40 \\implies \\mathrm{two\\:irrational\\:roots}",
        graphData: null
      }
    ]
  },
  // Q2c
  {
    id: "y11a-4c-q2c",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Find the discriminant \\(\\Delta\\) for the equation \\(x^2 + 2x + 5 = 0\\). Hence state how many roots there are, and whether or not they are rational.",
    a: "-16, no real roots",
    solution: "The discriminant is \\(\\Delta = -16\\). Since \\(\\Delta < 0\\), there are no real roots.",
    t: "The discriminant",
    hint: "Calculate the value of \\(b^2 - 4ac\\).",
    solutionSteps: [
      {
        explanation: "Identify the quadratic coefficients.",
        workingOut: "a = 1, \\quad b = 2, \\quad c = 5",
        graphData: null
      },
      {
        explanation: "Evaluate the discriminant.",
        workingOut: "\\Delta = 2^2 - 4(1)(5) = 4 - 20 = -16",
        graphData: null
      },
      {
        explanation: "Since the discriminant is negative, there are no real roots.",
        workingOut: "\\Delta = -16 < 0 \\implies \\mathrm{no\\:real\\:roots}",
        graphData: null
      }
    ]
  },
  // Q2d
  {
    id: "y11a-4c-q2d",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Find the discriminant \\(\\Delta\\) for the equation \\(9x^2 + 6x + 1 = 0\\). Hence state how many roots there are, and whether or not they are rational.",
    a: "0, one double rational root",
    solution: "The discriminant is \\(\\Delta = 0\\). Since \\(\\Delta = 0\\), there is exactly one double rational root.",
    t: "The discriminant",
    hint: "Calculate \\(\\Delta = b^2 - 4ac\\) and evaluate the nature of the roots.",
    solutionSteps: [
      {
        explanation: "State the values of the quadratic coefficients.",
        workingOut: "a = 9, \\quad b = 6, \\quad c = 1",
        graphData: null
      },
      {
        explanation: "Compute the discriminant using the formula.",
        workingOut: "\\Delta = 6^2 - 4(9)(1) = 36 - 36 = 0",
        graphData: null
      },
      {
        explanation: "A discriminant of zero indicates exactly one rational double root.",
        workingOut: "\\Delta = 0 \\implies \\mathrm{one\\:double\\:rational\\:root}",
        graphData: null
      }
    ]
  },
  // Q2e
  {
    id: "y11a-4c-q2e",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Find the discriminant \\(\\Delta\\) for the equation \\(x^2 - 5x + 7 = 0\\). Hence state how many roots there are, and whether or not they are rational.",
    a: "-3, no real roots",
    solution: "The discriminant is \\(\\Delta = -3\\). Since \\(\\Delta < 0\\), there are no real roots.",
    t: "The discriminant",
    hint: "Evaluate \\(b^2 - 4ac\\) for the coefficients \\(a=1\\), \\(b=-5\\), and \\(c=7\\).",
    solutionSteps: [
      {
        explanation: "Identify the coefficients of the equation.",
        workingOut: "a = 1, \\quad b = -5, \\quad c = 7",
        graphData: null
      },
      {
        explanation: "Calculate the value of the discriminant.",
        workingOut: "\\Delta = (-5)^2 - 4(1)(7) = 25 - 28 = -3",
        graphData: null
      },
      {
        explanation: "A negative discriminant value means there are no real roots.",
        workingOut: "\\Delta = -3 < 0 \\implies \\mathrm{no\\:real\\:roots}",
        graphData: null
      }
    ]
  },
  // Q2f
  {
    id: "y11a-4c-q2f",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Find the discriminant \\(\\Delta\\) for the equation \\(4x^2 + 13x - 12 = 0\\). Hence state how many roots there are, and whether or not they are rational.",
    a: "361, two rational roots",
    solution: "The discriminant is \\(\\Delta = 361\\). Since \\(\\Delta = 19^2 > 0\\) and is a perfect square, there are two distinct rational roots.",
    t: "The discriminant",
    hint: "Identify the coefficients and calculate \\(\\Delta\\). Check if it is a perfect square.",
    solutionSteps: [
      {
        explanation: "Determine the coefficients of the quadratic equation.",
        workingOut: "a = 4, \\quad b = 13, \\quad c = -12",
        graphData: null
      },
      {
        explanation: "Calculate the discriminant.",
        workingOut: "\\Delta = 13^2 - 4(4)(-12) = 169 + 192 = 361",
        graphData: null
      },
      {
        explanation: "Check if the discriminant is a perfect square. Since \\(19^2 = 361\\), the roots are rational and distinct.",
        workingOut: "\\sqrt{361} = 19 \\implies \\mathrm{two\\:distinct\\:rational\\:roots}",
        graphData: null
      }
    ]
  },
  // Q3a
  {
    id: "y11a-4c-q3a",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Find the value of \\(k\\) for which the quadratic function \\(y = x^2 + 12x + k\\) has exactly one zero.",
    a: "36",
    solution: "The quadratic has exactly one zero when \\(\\Delta = 0\\). Thus, \\(12^2 - 4(1)(k) = 0 \\implies 144 = 4k \\implies k = 36\\).",
    t: "The discriminant",
    hint: "Set the discriminant \\(\\Delta = b^2 - 4ac\\) to zero and solve for k.",
    solutionSteps: [
      {
        explanation: "State the condition for a quadratic to have exactly one zero.",
        workingOut: "\\Delta = b^2 - 4ac = 0",
        graphData: null
      },
      {
        explanation: "Substitute \\(a = 1\\), \\(b = 12\\), and \\(c = k\\) into the discriminant expression.",
        workingOut: "12^2 - 4(1)(k) = 144 - 4k = 0",
        graphData: null
      },
      {
        explanation: "Solve the linear equation for \\(k\\).",
        workingOut: "4k = 144 \\implies k = 36",
        graphData: null
      }
    ]
  },
  // Q3b
  {
    id: "y11a-4c-q3b",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Find the value of \\(k\\) for which the quadratic function \\(y = kx^2 - 6x + 3\\) has exactly one zero.",
    a: "3",
    solution: "Set \\(\\Delta = 0\\: \\((-6)^2 - 4(k)(3) = 0 \\implies 36 - 12k = 0 \\implies k = 3\\).",
    t: "The discriminant",
    hint: "For exactly one zero, set the discriminant equal to zero.",
    solutionSteps: [
      {
        explanation: "Identify the coefficients in terms of \\(k\\).",
        workingOut: "a = k, \\quad b = -6, \\quad c = 3",
        graphData: null
      },
      {
        explanation: "Apply the discriminant zero condition.",
        workingOut: "\\Delta = (-6)^2 - 4(k)(3) = 36 - 12k = 0",
        graphData: null
      },
      {
        explanation: "Solve the resulting equation for \\(k\\).",
        workingOut: "12k = 36 \\implies k = 3",
        graphData: null
      }
    ]
  },
  // Q3c
  {
    id: "y11a-4c-q3c",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Find the value of \\(k\\) for which the quadratic function \\(y = 3x^2 - 4x + (k + 2)\\) has exactly one zero.",
    a: "-2/3",
    solution: "Set \\(\\Delta = 0\\: \\((-4)^2 - 4(3)(k+2) = 0 \\implies 16 - 12(k+2) = 0 \\implies 16 - 12k - 24 = 0 \\implies -12k = 8 \\implies k = -2/3\\).",
    t: "The discriminant",
    hint: "Use the discriminant formula with \\(c = k + 2\\) and set it to zero.",
    solutionSteps: [
      {
        explanation: "Identify the coefficients of the quadratic equation.",
        workingOut: "a = 3, \\quad b = -4, \\quad c = k + 2",
        graphData: null
      },
      {
        explanation: "Set the discriminant to zero.",
        workingOut: "\\Delta = (-4)^2 - 4(3)(k+2) = 16 - 12(k+2) = 0",
        graphData: null
      },
      {
        explanation: "Expand and solve the linear equation for \\(k\\).",
        workingOut: "16 - 12k - 24 = 0 \\implies -12k = 8 \\implies k = -\\frac{2}{3}",
        graphData: null
      }
    ]
  },
  // Q3d
  {
    id: "y11a-4c-q3d",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Find the value of \\(k\\) for which the quadratic function \\(y = (k - 3)x^2 + 8x + 2\\) has exactly one zero.",
    a: "11",
    solution: "Set \\(\\Delta = 0\\: \\(8^2 - 4(k-3)(2) = 0 \\implies 64 - 8(k-3) = 0 \\implies 8(k-3) = 64 \\implies k-3 = 8 \\implies k = 11\\).",
    t: "The discriminant",
    hint: "Use \\(a = k - 3\\) in the discriminant formula and equate to zero.",
    solutionSteps: [
      {
        explanation: "Write down the coefficients of the quadratic function.",
        workingOut: "a = k - 3, \\quad b = 8, \\quad c = 2",
        graphData: null
      },
      {
        explanation: "Formulate the discriminant and set it equal to zero.",
        workingOut: "\\Delta = 8^2 - 4(k-3)(2) = 64 - 8(k-3) = 0",
        graphData: null
      },
      {
        explanation: "Solve the linear equation to find the value of \\(k\\).",
        workingOut: "8(k-3) = 64 \\implies k - 3 = 8 \\implies k = 11",
        graphData: null
      }
    ]
  },
  // Q4a
  {
    id: "y11a-4c-q4a",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Solve \\(\\Delta \\ge 0\\) to find the values of \\(p\\) for which the roots of \\(x^2 + 4x + p = 0\\) are real numbers.",
    a: "p <= 4",
    solution: "For real roots, \\(\\Delta \\ge 0 \\implies 4^2 - 4(1)(p) \\ge 0 \\implies 16 - 4p \\ge 0 \\implies p \\le 4\\).",
    t: "The discriminant",
    hint: "Set the discriminant greater than or equal to zero to ensure real roots.",
    solutionSteps: [
      {
        explanation: "Write down the condition for real roots using the discriminant.",
        workingOut: "\\Delta \\ge 0 \\implies b^2 - 4ac \\ge 0",
        graphData: null
      },
      {
        explanation: "Substitute \\(a = 1\\), \\(b = 4\\), and \\(c = p\\) into the inequality.",
        workingOut: "4^2 - 4(1)(p) \\ge 0 \\implies 16 - 4p \\ge 0",
        graphData: null
      },
      {
        explanation: "Solve the inequality for \\(p\\).",
        workingOut: "16 \\ge 4p \\implies p \\le 4",
        graphData: null
      }
    ]
  },
  // Q4b
  {
    id: "y11a-4c-q4b",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Solve \\(\\Delta \\ge 0\\) to find the values of \\(p\\) for which the roots of the quadratic equation \\(px^2 - 6x + 3 = 0\\) are real numbers.",
    a: "p <= 3 and p != 0",
    solution: "For real roots, \\(\\Delta \\ge 0 \\implies (-6)^2 - 4(p)(3) \\ge 0 \\implies 36 - 12p \\ge 0 \\implies p \\le 3\\). Since it is a quadratic equation, \\(p \\ne 0\\).",
    t: "The discriminant",
    hint: "Set the discriminant to be non-negative and remember that the lead coefficient of a quadratic equation cannot be zero.",
    solutionSteps: [
      {
        explanation: "Find the discriminant of the quadratic equation.",
        workingOut: "\\Delta = (-6)^2 - 4(p)(3) = 36 - 12p",
        graphData: null
      },
      {
        explanation: "Set the discriminant greater than or equal to zero for real roots.",
        workingOut: "36 - 12p \\ge 0 \\implies 36 \\ge 12p \\implies p \\le 3",
        graphData: null
      },
      {
        explanation: "Since the equation must be quadratic, the coefficient of \\(x^2\\) cannot be zero.",
        workingOut: "p \\ne 0",
        graphData: null
      }
    ]
  },
  // Q4c
  {
    id: "y11a-4c-q4c",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Solve \\(\\Delta \\ge 0\\) to find the values of \\(p\\) for which the roots of \\(2x^2 - 6x + (p + 2) = 0\\) are real numbers.",
    a: "p <= 5/2",
    solution: "For real roots, \\(\\Delta \\ge 0 \\implies (-6)^2 - 4(2)(p+2) \\ge 0 \\implies 36 - 8(p+2) \\ge 0 \\implies 36 - 8p - 16 \\ge 0 \\implies 20 \\ge 8p \\implies p \\le 5/2\\).",
    t: "The discriminant",
    hint: "Set \\(\\Delta = b^2 - 4ac \\ge 0\\) and solve for p.",
    solutionSteps: [
      {
        explanation: "Identify the coefficients and write down the discriminant inequality.",
        workingOut: "\\Delta = (-6)^2 - 4(2)(p+2) \\ge 0",
        graphData: null
      },
      {
        explanation: "Expand the terms and simplify the inequality.",
        workingOut: "36 - 8(p+2) \\ge 0 \\implies 36 - 8p - 16 \\ge 0 \\implies 20 - 8p \\ge 0",
        graphData: null
      },
      {
        explanation: "Isolate the variable \\(p\\) and simplify the fraction.",
        workingOut: "20 \\ge 8p \\implies p \\le \\frac{20}{8} \\implies p \\le \\frac{5}{2}",
        graphData: null
      }
    ]
  },
  // Q4d
  {
    id: "y11a-4c-q4d",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Solve \\(\\Delta \\ge 0\\) to find the values of \\(p\\) for which the roots of the quadratic equation \\((3p - 1)x^2 - 4x + 2 = 0\\) are real numbers.",
    a: "p <= 1",
    solution: "For real roots, \\(\\Delta \\ge 0 \\implies (-4)^2 - 4(3p-1)(2) \\ge 0 \\implies 16 - 8(3p-1) \\ge 0 \\implies 16 - 24p + 8 \\ge 0 \\implies 24 \\ge 24p \\implies p \\le 1\\). Note that for a quadratic equation, \\(p \\ne 1/3\\).",
    t: "The discriminant",
    hint: "Formulate the inequality \\(\\Delta \\ge 0\\) using \\(a = 3p - 1\\).",
    solutionSteps: [
      {
        explanation: "State the discriminant formula in terms of \\(p\\).",
        workingOut: "\\Delta = (-4)^2 - 4(3p - 1)(2)",
        graphData: null
      },
      {
        explanation: "Apply the real roots condition and simplify.",
        workingOut: "16 - 8(3p - 1) \\ge 0 \\implies 16 - 24p + 8 \\ge 0 \\implies 24 - 24p \\ge 0",
        graphData: null
      },
      {
        explanation: "Solve the linear inequality for \\(p\\).",
        workingOut: "24 \\ge 24p \\implies p \\le 1",
        graphData: null
      }
    ]
  },
  // Q5a
  {
    id: "y11a-4c-q5a",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Solve \\(\\Delta < 0\\) to find the values of \\(\\lambda\\) for which the quadratic equation \\(x^2 + 8x + \\lambda = 0\\) has no zeroes.",
    a: "lambda > 16",
    solution: "For no zeroes, \\(\\Delta < 0 \\implies 8^2 - 4(1)(\\lambda) < 0 \\implies 64 - 4\\lambda < 0 \\implies 64 < 4\\lambda \\implies \\lambda > 16\\).",
    t: "The discriminant",
    hint: "No zeroes means the discriminant is negative.",
    solutionSteps: [
      {
        explanation: "Identify the coefficients and write down the discriminant expression.",
        workingOut: "\\Delta = 8^2 - 4(1)(\\lambda) = 64 - 4\\lambda",
        graphData: null
      },
      {
        explanation: "Set the discriminant to be strictly less than zero.",
        workingOut: "64 - 4\\lambda < 0",
        graphData: null
      },
      {
        explanation: "Rearrange the inequality to solve for \\(\\lambda\\).",
        workingOut: "64 < 4\\lambda \\implies \\lambda > 16",
        graphData: null
      }
    ]
  },
  // Q5b
  {
    id: "y11a-4c-q5b",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Solve \\(\\Delta < 0\\) to find the values of \\(\\lambda\\) for which the quadratic equation \\(\\lambda x^2 - 12x + 2 = 0\\) has no zeroes.",
    a: "lambda > 18",
    solution: "For no zeroes, \\(\\Delta < 0 \\implies (-12)^2 - 4(\\lambda)(2) < 0 \\implies 144 - 8\\lambda < 0 \\implies 144 < 8\\lambda \\implies \\lambda > 18\\).",
    t: "The discriminant",
    hint: "Set \\(b^2 - 4ac < 0\\) and solve.",
    solutionSteps: [
      {
        explanation: "Find the discriminant of the quadratic equation in terms of \\(\\lambda\\).",
        workingOut: "\\Delta = (-12)^2 - 4(\\lambda)(2) = 144 - 8\\lambda",
        graphData: null
      },
      {
        explanation: "Set the discriminant to be negative for no real zeroes.",
        workingOut: "144 - 8\\lambda < 0",
        graphData: null
      },
      {
        explanation: "Solve the inequality for \\(\\lambda\\).",
        workingOut: "144 < 8\\lambda \\implies \\lambda > 18",
        graphData: null
      }
    ]
  },
  // Q5c
  {
    id: "y11a-4c-q5c",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Solve \\(\\Delta < 0\\) to find the values of \\(\\lambda\\) for which the quadratic equation \\(3x^2 - 7x + (\\lambda + 1) = 0\\) has no zeroes.",
    a: "lambda > 37/12",
    solution: "For no zeroes, \\(\\Delta < 0 \\implies (-7)^2 - 4(3)(\\lambda+1) < 0 \\implies 49 - 12\\lambda - 12 < 0 \\implies 37 - 12\\lambda < 0 \\implies \\lambda > 37/12\\).",
    t: "The discriminant",
    hint: "Formulate the inequality \\(\\Delta < 0\\) with \\(c = \\lambda + 1\\).",
    solutionSteps: [
      {
        explanation: "State the discriminant formula for the given equation.",
        workingOut: "\\Delta = (-7)^2 - 4(3)(\\lambda + 1) = 49 - 12(\\lambda + 1)",
        graphData: null
      },
      {
        explanation: "Set the discriminant less than zero and expand.",
        workingOut: "49 - 12\\lambda - 12 < 0 \\implies 37 - 12\\lambda < 0",
        graphData: null
      },
      {
        explanation: "Solve for \\(\\lambda\\).",
        workingOut: "37 < 12\\lambda \\implies \\lambda > \\frac{37}{12}",
        graphData: null
      }
    ]
  },
  // Q5d
  {
    id: "y11a-4c-q5d",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Solve \\(\\Delta < 0\\) to find the values of \\(\\lambda\\) for which the quadratic equation \\((\\lambda - 2)x^2 + 8x + 4 = 0\\) has no zeroes.",
    a: "lambda > 6",
    solution: "For no zeroes, \\(\\Delta < 0 \\implies 8^2 - 4(\\lambda-2)(4) < 0 \\implies 64 - 16(\\lambda-2) < 0 \\implies 64 - 16\\lambda + 32 < 0 \\implies 96 - 16\\lambda < 0 \\implies \\lambda > 6\\).",
    t: "The discriminant",
    hint: "Set \\(\\Delta = b^2 - 4ac < 0\\) with \\(a = \\lambda - 2\\).",
    solutionSteps: [
      {
        explanation: "Write down the discriminant of the equation.",
        workingOut: "\\Delta = 8^2 - 4(\\lambda - 2)(4) = 64 - 16(\\lambda - 2)",
        graphData: null
      },
      {
        explanation: "Set \\(\\Delta < 0\\) and simplify.",
        workingOut: "64 - 16\\lambda + 32 < 0 \\implies 96 - 16\\lambda < 0",
        graphData: null
      },
      {
        explanation: "Solve the linear inequality for \\(\\lambda\\).",
        workingOut: "96 < 16\\lambda \\implies \\lambda > 6",
        graphData: null
      }
    ]
  },
  // Q6a
  {
    id: "y11a-4c-q6a",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Determine the discriminant \\(\\Delta\\), then solve \\(\\Delta = 0\\) to find the values of \\(g\\) for which the quadratic function \\(y = gx^2 - 10x + g\\) has exactly one zero.",
    a: "g = 5 or g = -5",
    solution: "The discriminant is \\(\\Delta = (-10)^2 - 4(g)(g) = 100 - 4g^2\\). Set \\(\\Delta = 0 \\implies 100 - 4g^2 = 0 \\implies g^2 = 25 \\implies g = \\pm 5\\).",
    t: "The discriminant",
    hint: "Set the discriminant to zero to find the values of g.",
    solutionSteps: [
      {
        explanation: "Calculate the discriminant using the quadratic coefficients.",
        workingOut: "\\Delta = (-10)^2 - 4(g)(g) = 100 - 4g^2",
        graphData: null
      },
      {
        explanation: "Equate the discriminant to zero for exactly one zero.",
        workingOut: "100 - 4g^2 = 0",
        graphData: null
      },
      {
        explanation: "Solve for \\(g\\) by taking the square root of both sides.",
        workingOut: "4g^2 = 100 \\implies g^2 = 25 \\implies g = \\pm 5",
        graphData: null
      }
    ]
  },
  // Q6b
  {
    id: "y11a-4c-q6b",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Determine the discriminant \\(\\Delta\\), then solve \\(\\Delta = 0\\) to find the values of \\(g\\) for which the quadratic function \\(y = 4x^2 + 2gx + (2g - 3)\\) has exactly one zero.",
    a: "g = 2 or g = 6",
    solution: "The discriminant is \\(\\Delta = (2g)^2 - 4(4)(2g-3) = 4g^2 - 16(2g-3) = 4(g^2 - 8g + 12)\\). Set \\(\\Delta = 0 \\implies g^2 - 8g + 12 = 0 \\implies (g-2)(g-6) = 0 \\implies g = 2 \\text{ or } g = 6\\).",
    t: "The discriminant",
    hint: "Equate the discriminant expression to zero and factorise the quadratic equation in g.",
    solutionSteps: [
      {
        explanation: "Determine the discriminant \\(\\Delta\\) of the function.",
        workingOut: "\\Delta = (2g)^2 - 4(4)(2g - 3) = 4g^2 - 32g + 48",
        graphData: null
      },
      {
        explanation: "Divide the equation by 4 and set it to zero.",
        workingOut: "g^2 - 8g + 12 = 0",
        graphData: null
      },
      {
        explanation: "Factorise the quadratic expression to solve for \\(g\\).",
        workingOut: "(g - 2)(g - 6) = 0 \\implies g = 2 \\quad \\mathrm{or} \\quad g = 6",
        graphData: null
      }
    ]
  },
  // Q6c
  {
    id: "y11a-4c-q6c",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Determine the discriminant \\(\\Delta\\), then solve \\(\\Delta = 0\\) to find the values of \\(g\\) for which the quadratic function \\(y = 4x^2 - 2(g + 2)x + 9\\) has exactly one zero.",
    a: "g = 4 or g = -8",
    solution: "The discriminant is \\(\\Delta = [-2(g+2)]^2 - 4(4)(9) = 4(g+2)^2 - 144\\). Set \\(\\Delta = 0 \\implies 4(g+2)^2 = 144 \\implies (g+2)^2 = 36 \\implies g+2 = \\pm 6 \\implies g = 4 \\text{ or } g = -8\\).",
    t: "The discriminant",
    hint: "Set the discriminant expression equal to zero and solve for g.",
    solutionSteps: [
      {
        explanation: "Calculate the discriminant of the quadratic function.",
        workingOut: "\\Delta = [-2(g + 2)]^2 - 4(4)(9) = 4(g + 2)^2 - 144",
        graphData: null
      },
      {
        explanation: "Set the discriminant to zero and simplify.",
        workingOut: "4(g + 2)^2 - 144 = 0 \\implies (g + 2)^2 = 36",
        graphData: null
      },
      {
        explanation: "Solve for \\(g\\) by finding the square roots.",
        workingOut: "g + 2 = \\pm 6 \\implies g = 4 \\quad \\mathrm{or} \\quad g = -8",
        graphData: null
      }
    ]
  },
  // Q6d
  {
    id: "y11a-4c-q6d",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Determine the discriminant \\(\\Delta\\), then solve \\(\\Delta = 0\\) to find the values of \\(g\\) for which the quadratic function \\(y = (2g - 1)x^2 + (4g - 1)x + (2g + 1)\\) has exactly one zero.",
    a: "5/8",
    solution: "The discriminant is \\(\\Delta = (4g-1)^2 - 4(2g-1)(2g+1) = 16g^2 - 8g + 1 - 4(4g^2 - 1) = -8g + 5\\). Set \\(\\Delta = 0 \\implies -8g + 5 = 0 \\implies g = 5/8\\). Note that \\(2g-1 \\ne 0 \\implies g \\ne 1/2\\).",
    t: "The discriminant",
    hint: "Calculate the discriminant and simplify carefully, paying attention to difference of two squares.",
    solutionSteps: [
      {
        explanation: "Obtain the discriminant formula using \\(a = 2g - 1\\), \\(b = 4g - 1\\), and \\(c = 2g + 1\\).",
        workingOut: "\\Delta = (4g - 1)^2 - 4(2g - 1)(2g + 1)",
        graphData: null
      },
      {
        explanation: "Expand the quadratic terms and simplify the expression.",
        workingOut: "\\Delta = (16g^2 - 8g + 1) - 4(4g^2 - 1) = 16g^2 - 8g + 1 - 16g^2 + 4 = -8g + 5",
        graphData: null
      },
      {
        explanation: "Equate to zero and solve the linear equation for \\(g\\).",
        workingOut: "-8g + 5 = 0 \\implies 8g = 5 \\implies g = \\frac{5}{8}",
        graphData: null
      }
    ]
  },
  // Q7
  {
    id: "y11a-4c-q7",
    type: "teacher_review",
    difficulty: "medium",
    timeLimit: 90,
    question: "A parabola has the equation \\(y = gx^2 - 2gx + 3\\). Complete the sub-questions.",
    a: "Refer to solution steps for parts a, b, c, and d.",
    solution: "See detailed steps below.",
    t: "The discriminant",
    subQuestions: [
      {
        id: "y11a-4c-q7a",
        type: "short_answer",
        difficulty: "easy",
        timeLimit: 60,
        question: "Determine the discriminant.",
        a: "4g^2-12g",
        solutionSteps: [
          {
            explanation: "Identify the coefficients of the quadratic equation.",
            workingOut: "a = g, \\quad b = -2g, \\quad c = 3",
            graphData: null
          },
          {
            explanation: "Substitute into the discriminant formula.",
            workingOut: "\\Delta = (-2g)^2 - 4(g)(3)",
            graphData: null
          },
          {
            explanation: "Simplify the expression.",
            workingOut: "\\Delta = 4g^2 - 12g",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4c-q7b",
        type: "short_answer",
        difficulty: "easy",
        timeLimit: 60,
        question: "Find the values of \\(g\\) which make \\(\\Delta = 0\\).",
        a: "0 or 3",
        solutionSteps: [
          {
            explanation: "Set the discriminant expression equal to zero.",
            workingOut: "4g^2 - 12g = 0",
            graphData: null
          },
          {
            explanation: "Factorise the quadratic expression.",
            workingOut: "4g(g - 3) = 0",
            graphData: null
          },
          {
            explanation: "Solve for the roots.",
            workingOut: "g = 0 \\quad \\mathrm{or} \\quad g = 3",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4c-q7c",
        type: "teacher_review",
        difficulty: "medium",
        timeLimit: 90,
        question: "Explain why the lesser value of \\(g\\) is not valid in this case.",
        a: "If g = 0, the equation ceases to be quadratic (it becomes a line).",
        solutionSteps: [
          {
            explanation: "Identify the lesser value of \\(g\\) obtained.",
            workingOut: "g = 0",
            graphData: null
          },
          {
            explanation: "Substitute \\(g = 0\\) back into the original parabola equation.",
            workingOut: "y = 0x^2 - 2(0)x + 3 \\implies y = 3",
            graphData: null
          },
          {
            explanation: "Analyse the result. The equation \\(y = 3\\) is a straight horizontal line, not a parabola (quadratic function), which violates the definition.",
            workingOut: "\\mathrm{Not\\:a\\:parabola}",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4c-q7d",
        type: "short_answer",
        difficulty: "easy",
        timeLimit: 60,
        question: "Write down the equation of the parabola that has a double zero.",
        a: "y = 3x^2-6x+3",
        solutionSteps: [
          {
            explanation: "Identify the valid non-zero value of \\(g\\) that makes \\(\\Delta = 0\\).",
            workingOut: "g = 3",
            graphData: null
          },
          {
            explanation: "Substitute \\(g = 3\\) into the original equation \\(y = gx^2 - 2gx + 3\\).",
            workingOut: "y = 3x^2 - 2(3)x + 3",
            graphData: null
          },
          {
            explanation: "Simplify the final equation.",
            workingOut: "y = 3x^2 - 6x + 3",
            graphData: null
          }
        ]
      }
    ]
  },
  // Q8a
  {
    id: "y11a-4c-q8a",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "For the quadratic equation \\(x^2 + kx + 9 = 0\\), find the discriminant \\(\\Delta\\) as a function of \\(k\\). Then solve \\(\\Delta \\ge 0\\) to determine the values of \\(k\\) that result in real roots for \\(x\\).",
    a: "k <= -6 or k >= 6",
    solution: "The discriminant is \\(\\Delta = k^2 - 36\\). For real roots, \\(k^2 - 36 \\ge 0 \\implies k \\le -6 \\text{ or } k \\ge 6\\).",
    t: "The discriminant",
    hint: "For real roots, the discriminant must be non-negative.",
    solutionSteps: [
      {
        explanation: "Determine the discriminant \\(\\Delta\\) as a function of \\(k\\).",
        workingOut: "\\Delta = k^2 - 4(1)(9) = k^2 - 36",
        graphData: null
      },
      {
        explanation: "Set the discriminant to be greater than or equal to zero for real roots.",
        workingOut: "k^2 - 36 \\ge 0",
        graphData: null
      },
      {
        explanation: "Solve the quadratic inequality for \\(k\\).",
        workingOut: "(k - 6)(k + 6) \\ge 0 \\implies k \\le -6 \\quad \\mathrm{or} \\quad k \\ge 6",
        graphData: null
      }
    ]
  },
  // Q8b
  {
    id: "y11a-4c-q8b",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "For the quadratic equation \\(x^2 - 2kx + 16 = 0\\), find the discriminant \\(\\Delta\\) as a function of \\(k\\). Then solve \\(\\Delta \\ge 0\\) to determine the values of \\(k\\) that result in real roots for \\(x\\).",
    a: "k <= -4 or k >= 4",
    solution: "The discriminant is \\(\\Delta = (-2k)^2 - 4(1)(16) = 4k^2 - 64 = 4(k^2 - 16)\\). For real roots, \\(k^2 - 16 \\ge 0 \\implies k \\le -4 \\text{ or } k \\ge 4\\).",
    t: "The discriminant",
    hint: "Evaluate \\(b^2 - 4ac\\) and solve \\(\\Delta \\ge 0\\).",
    solutionSteps: [
      {
        explanation: "Find the discriminant expression in terms of \\(k\\).",
        workingOut: "\\Delta = (-2k)^2 - 4(1)(16) = 4k^2 - 64",
        graphData: null
      },
      {
        explanation: "Set the discriminant greater than or equal to zero and divide by 4.",
        workingOut: "4(k^2 - 16) \\ge 0 \\implies k^2 - 16 \\ge 0",
        graphData: null
      },
      {
        explanation: "Solve the inequality to find the range of \\(k\\).",
        workingOut: "(k - 4)(k + 4) \\ge 0 \\implies k \\le -4 \\quad \\mathrm{or} \\quad k \\ge 4",
        graphData: null
      }
    ]
  },
  // Q8c
  {
    id: "y11a-4c-q8c",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "For the quadratic equation \\(x^2 - (2 + k)x + 4 = 0\\), find the discriminant \\(\\Delta\\) as a function of \\(k\\). Then solve \\(\\Delta \\ge 0\\) to determine the values of \\(k\\) that result in real roots for \\(x\\).",
    a: "k <= -6 or k >= 2",
    solution: "The discriminant is \\(\\Delta = [-(2+k)]^2 - 4(1)(4) = (2+k)^2 - 16\\). For real roots, \\((2+k)^2 - 16 \\ge 0 \\implies (2+k)^2 \\ge 16 \\implies 2+k \\le -4 \\text{ or } 2+k \\ge 4 \\implies k \\le -6 \\text{ or } k \\ge 2\\).",
    t: "The discriminant",
    hint: "Use difference of two squares or expand \\((2+k)^2 - 16 \\ge 0\\).",
    solutionSteps: [
      {
        explanation: "Formulate the discriminant.",
        workingOut: "\\Delta = (2 + k)^2 - 16",
        graphData: null
      },
      {
        explanation: "Apply the real roots condition.",
        workingOut: "(2 + k)^2 - 16 \\ge 0 \\implies (2 + k - 4)(2 + k + 4) \\ge 0",
        graphData: null
      },
      {
        explanation: "Factorise and solve the quadratic inequality.",
        workingOut: "(k - 2)(k + 6) \\ge 0 \\implies k \\le -6 \\quad \\mathrm{or} \\quad k \\ge 2",
        graphData: null
      }
    ]
  },
  // Q8d
  {
    id: "y11a-4c-q8d",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "For the quadratic equation \\(x^2 + (k - 3)x + 4 = 0\\), find the discriminant \\(\\Delta\\) as a function of \\(k\\). Then solve \\(\\Delta \\ge 0\\) to determine the values of \\(k\\) that result in real roots for \\(x\\).",
    a: "k <= -1 or k >= 7",
    solution: "The discriminant is \\(\\Delta = (k-3)^2 - 16\\). For real roots, \\((k-3)^2 - 16 \\ge 0 \\implies (k-3 - 4)(k-3 + 4) \\ge 0 \\implies (k-7)(k+1) \\ge 0 \\implies k \\le -1 \\text{ or } k \\ge 7\\).",
    t: "The discriminant",
    hint: "Write the inequality in factorised form.",
    solutionSteps: [
      {
        explanation: "Calculate the discriminant in terms of \\(k\\).",
        workingOut: "\\Delta = (k - 3)^2 - 4(1)(4) = (k - 3)^2 - 16",
        graphData: null
      },
      {
        explanation: "Apply the inequality for real roots and factorise.",
        workingOut: "(k - 3)^2 - 16 \\ge 0 \\implies (k - 3 - 4)(k - 3 + 4) \\ge 0",
        graphData: null
      },
      {
        explanation: "Find the boundary roots and solve.",
        workingOut: "(k - 7)(k + 1) \\ge 0 \\implies k \\le -1 \\quad \\mathrm{or} \\quad k \\ge 7",
        graphData: null
      }
    ]
  },
  // Q9a
  {
    id: "y11a-4c-q9a",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find the discriminant \\(\\Delta\\) and solve \\(\\Delta < 0\\) to find any values of \\(\\lambda\\) for which the parabola \\(y = x^2 + \\lambda x + 4\\) has no \\(x\\)-intercepts.",
    a: "-4 < lambda < 4",
    solution: "The discriminant is \\(\\Delta = \\lambda^2 - 16\\). For no \\(x\\)-intercepts, \\(\\Delta < 0 \\implies \\lambda^2 - 16 < 0 \\implies -4 < \\lambda < 4\\).",
    t: "The discriminant",
    hint: "Parabola has no intercepts when the corresponding quadratic equation has no real roots.",
    solutionSteps: [
      {
        explanation: "Formulate the discriminant of the parabola's quadratic equation.",
        workingOut: "\\Delta = \\lambda^2 - 4(1)(4) = \\lambda^2 - 16",
        graphData: null
      },
      {
        explanation: "Set the discriminant less than zero.",
        workingOut: "\\lambda^2 - 16 < 0",
        graphData: null
      },
      {
        explanation: "Solve the inequality.",
        workingOut: "(\\lambda - 4)(\\lambda + 4) < 0 \\implies -4 < \\lambda < 4",
        graphData: null
      }
    ]
  },
  // Q9b
  {
    id: "y11a-4c-q9b",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find the discriminant \\(\\Delta\\) and solve \\(\\Delta < 0\\) to find any values of \\(\\lambda\\) for which the parabola \\(y = \\lambda x^2 + 8x + \\lambda\\) has no \\(x\\)-intercepts.",
    a: "lambda < -4 or lambda > 4",
    solution: "The discriminant is \\(\\Delta = 64 - 4\\lambda^2\\). For no \\(x\\)-intercepts, \\(64 - 4\\lambda^2 < 0 \\implies 16 - \\lambda^2 < 0 \\implies \\lambda^2 > 16 \\implies \\lambda < -4 \\text{ or } \\lambda > 4\\).",
    t: "The discriminant",
    hint: "Set the discriminant to be negative and solve the quadratic inequality.",
    solutionSteps: [
      {
        explanation: "Determine the discriminant.",
        workingOut: "\\Delta = 8^2 - 4(\\lambda)(\\lambda) = 64 - 4\\lambda^2",
        graphData: null
      },
      {
        explanation: "Set \\(\\Delta < 0\\) and simplify by dividing by -4 (which flips the inequality sign).",
        workingOut: "64 - 4\\lambda^2 < 0 \\implies \\lambda^2 - 16 > 0",
        graphData: null
      },
      {
        explanation: "Solve the inequality.",
        workingOut: "(\\lambda - 4)(\\lambda + 4) > 0 \\implies \\lambda < -4 \\quad \\mathrm{or} \\quad \\lambda > 4",
        graphData: null
      }
    ]
  },
  // Q9c
  {
    id: "y11a-4c-q9c",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find the discriminant \\(\\Delta\\) and solve \\(\\Delta < 0\\) to find any values of \\(\\lambda\\) for which the parabola \\(y = x^2 + (2 - \\lambda)x - \\lambda\\) has no \\(x\\)-intercepts.",
    a: "no real values",
    solution: "The discriminant is \\(\\Delta = (2-\\lambda)^2 - 4(1)(-\\lambda) = \\lambda^2 - 4\\lambda + 4 + 4\\lambda = \\lambda^2 + 4\\). Since \\(\\lambda^2 + 4 \\ge 4 > 0\\) for all real \\(\\lambda\\), there are no real values of \\(\\lambda\\) that satisfy \\(\\Delta < 0\\).",
    t: "The discriminant",
    hint: "Expand the discriminant expression fully and look at the resulting polynomial.",
    solutionSteps: [
      {
        explanation: "Write down the discriminant formula.",
        workingOut: "\\Delta = (2 - \\lambda)^2 - 4(1)(-\\lambda)",
        graphData: null
      },
      {
        explanation: "Expand and simplify the expression.",
        workingOut: "\\Delta = 4 - 4\\lambda + \\lambda^2 + 4\\lambda = \\lambda^2 + 4",
        graphData: null
      },
      {
        explanation: "Observe that \\(\\lambda^2 \\ge 0\\) for all real numbers, so the discriminant is always positive and can never be negative.",
        workingOut: "\\lambda^2 + 4 \\ge 4 > 0",
        graphData: null
      }
    ]
  },
  // Q9d
  {
    id: "y11a-4c-q9d",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find the discriminant \\(\\Delta\\) and solve \\(\\Delta < 0\\) to find any values of \\(\\lambda\\) for which the parabola \\(y = \\lambda x^2 - 4\\lambda x - (\\lambda - 3)\\) has no \\(x\\)-intercepts.",
    a: "0 < lambda < 3/5",
    solution: "The discriminant is \\(\\Delta = (-4\\lambda)^2 - 4(\\lambda)(-(\\lambda-3)) = 16\\lambda^2 + 4\\lambda(\\lambda-3) = 20\\lambda^2 - 12\\lambda = 4\\lambda(5\\lambda-3)\\). Set \\(\\Delta < 0 \\implies 4\\lambda(5\\lambda-3) < 0 \\implies 0 < \\lambda < 3/5\\).",
    t: "The discriminant",
    hint: "Expand the discriminant term and solve the factored quadratic inequality.",
    solutionSteps: [
      {
        explanation: "Obtain the discriminant expression using the coefficients.",
        workingOut: "\\Delta = (-4\\lambda)^2 - 4(\\lambda)[-(\\lambda - 3)]",
        graphData: null
      },
      {
        explanation: "Expand the terms and factorise the resulting quadratic.",
        workingOut: "\\Delta = 16\\lambda^2 + 4\\lambda^2 - 12\\lambda = 20\\lambda^2 - 12\\lambda = 4\\lambda(5\\lambda - 3)",
        graphData: null
      },
      {
        explanation: "Solve the inequality \\(4\\lambda(5\\lambda - 3) < 0\\) for \\(\\lambda\\).",
        workingOut: "0 < \\lambda < \\frac{3}{5}",
        graphData: null
      }
    ]
  },
  // Q10
  {
    id: "y11a-4c-q10",
    type: "teacher_review",
    difficulty: "hard",
    timeLimit: 120,
    question: "Prove the relationships between the discriminant and the zeroes of the general quadratic parabola \\(y = ax^2 + bx + c\\).",
    a: "Complete the proofs for parts a, b, c, and d.",
    solution: "See detailed steps below.",
    t: "The discriminant",
    subQuestions: [
      {
        id: "y11a-4c-q10a",
        type: "teacher_review",
        difficulty: "hard",
        timeLimit: 120,
        question: "Rearrange the equation of the parabola to show that \\(x^2 + \\frac{b}{a}x = \\frac{y-c}{a}\\), then add an appropriate quantity to both sides in order to complete the square on the left hand side.",
        a: "Add (b/(2a))^2 to both sides.",
        solutionSteps: [
          {
            explanation: "Divide the entire equation by \\(a\\) to isolate the quadratic terms.",
            workingOut: "\\frac{y}{a} = x^2 + \\frac{b}{a}x + \\frac{c}{a}",
            graphData: null
          },
          {
            explanation: "Subtract the constant term \\(\\frac{c}{a}\\) from both sides.",
            workingOut: "x^2 + \\frac{b}{a}x = \\frac{y-c}{a}",
            graphData: null
          },
          {
            explanation: "Complete the square by adding the square of half the coefficient of \\(x\\), which is \\(\\left(\\frac{b}{2a}\\right)^2 = \\frac{b^2}{4a^2}\\), to both sides.",
            workingOut: "\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{y-c}{a} + \\frac{b^2}{4a^2}",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4c-q10b",
        type: "teacher_review",
        difficulty: "hard",
        timeLimit: 120,
        question: "Explain why there are no zeroes when \\(\\Delta < 0\\). That is, explain why there is no solution if \\(y = 0\\) and \\(b^2 - 4ac < 0\\).",
        a: "A negative value cannot equal a perfect square.",
        solutionSteps: [
          {
            explanation: "Substitute \\(y = 0\\) into the completed square equation and find a common denominator.",
            workingOut: "\\left(x + \\frac{b}{2a}\\right)^2 = -\\frac{c}{a} + \\frac{b^2}{4a^2} = \\frac{b^2 - 4ac}{4a^2}",
            graphData: null
          },
          {
            explanation: "Define the numerator as the discriminant \\(\\Delta = b^2 - 4ac\\).",
            workingOut: "\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{\\Delta}{4a^2}",
            graphData: null
          },
          {
            explanation: "Since the left side is a perfect square of a real number, it must be non-negative. If \\(\\Delta < 0\\), the right side is negative, which is a contradiction. Thus, no real solutions exist.",
            workingOut: "\\mathrm{No\\:real\\:solutions}",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4c-q10c",
        type: "teacher_review",
        difficulty: "hard",
        timeLimit: 120,
        question: "Explain why there is a double zero when \\(\\Delta = 0\\). That is, explain why there is one solution if \\(y = 0\\) and \\(b^2 - 4ac = 0\\).",
        a: "The square term equals zero, yielding a single root.",
        solutionSteps: [
          {
            explanation: "Set the discriminant to zero in the formula.",
            workingOut: "\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{0}{4a^2} = 0",
            graphData: null
          },
          {
            explanation: "Take the square root of both sides.",
            workingOut: "x + \\frac{b}{2a} = 0",
            graphData: null
          },
          {
            explanation: "Solve for \\(x\\) to show there is only one distinct root.",
            workingOut: "x = -\\frac{b}{2a}",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4c-q10d",
        type: "teacher_review",
        difficulty: "hard",
        timeLimit: 120,
        question: "Explain why there are two zeroes when \\(\\Delta > 0\\) and determine the formula for the zeroes in this case.",
        a: "Taking square root of positive number yields two roots.",
        solutionSteps: [
          {
            explanation: "Since \\(\\Delta > 0\\), we can take the square root on both sides, yielding two distinct branches.",
            workingOut: "x + \\frac{b}{2a} = \\pm \\frac{\\sqrt{\\Delta}}{2a}",
            graphData: null
          },
          {
            explanation: "Move the constant term to the right-hand side.",
            workingOut: "x = -\\frac{b}{2a} \\pm \\frac{\\sqrt{\\Delta}}{2a}",
            graphData: null
          },
          {
            explanation: "Combine the terms over the common denominator to obtain the quadratic formula.",
            workingOut: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
            graphData: null
          }
        ]
      }
    ]
  },
  // Q11a
  {
    id: "y11a-4c-q11a",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Use the discriminant of a suitable quadratic equation to determine whether or not the parabola \\(y = x^2 + 2x + 2\\) intersects the line \\(y = 8x - 7\\). If they do intersect, state how many points of intersection there are and find the \\(x\\)-coordinates.",
    a: "1 intersection at x = 3",
    solution: "Equate the equations: \\(x^2 + 2x + 2 = 8x - 7 \\implies x^2 - 6x + 9 = 0\\). The discriminant is \\(\\Delta = (-6)^2 - 4(1)(9) = 0\\), meaning they intersect at exactly 1 point. Solving \\((x-3)^2 = 0\\) gives \\(x = 3\\).",
    t: "The discriminant",
    hint: "Equate the two expressions and calculate the discriminant of the resulting quadratic equation.",
    solutionSteps: [
      {
        explanation: "Set the parabola equation equal to the line equation to find intersection points.",
        workingOut: "x^2 + 2x + 2 = 8x - 7",
        graphData: null
      },
      {
        explanation: "Rearrange the terms into standard quadratic form.",
        workingOut: "x^2 - 6x + 9 = 0",
        graphData: null
      },
      {
        explanation: "Find the discriminant and solve for \\(x\\).",
        workingOut: "\\Delta = (-6)^2 - 4(1)(9) = 0 \\implies x = 3",
        graphData: null
      }
    ]
  },
  // Q11bi
  {
    id: "y11a-4c-q11bi",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Use the discriminant of a suitable quadratic equation to determine whether or not the parabola \\(y = x^2 - 3x + 8\\) intersects the line \\(y = 5x - 8\\). If they do intersect, state how many points of intersection there are and find the \\(x\\)-coordinates.",
    a: "1 intersection at x = 4",
    solution: "Equate the equations: \\(x^2 - 3x + 8 = 5x - 8 \\implies x^2 - 8x + 16 = 0\\). The discriminant is \\(\\Delta = (-8)^2 - 4(1)(16) = 0\\). Solve \\((x-4)^2 = 0 \\implies x = 4\\).",
    t: "The discriminant",
    hint: "Solve \\(x^2 - 3x + 8 = 5x - 8\\) and find its discriminant.",
    solutionSteps: [
      {
        explanation: "Set the equations equal to each other.",
        workingOut: "x^2 - 3x + 8 = 5x - 8",
        graphData: null
      },
      {
        explanation: "Rearrange to form a quadratic equation.",
        workingOut: "x^2 - 8x + 16 = 0",
        graphData: null
      },
      {
        explanation: "Calculate the discriminant and solve for \\(x\\).",
        workingOut: "\\Delta = (-8)^2 - 4(1)(16) = 0 \\implies x = 4",
        graphData: null
      }
    ]
  },
  // Q11bii
  {
    id: "y11a-4c-q11bii",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Use the discriminant of a suitable quadratic equation to determine whether or not the parabola \\(y = x^2 + 4x + 7\\) intersects the line \\(y = -2x - 3\\). If they do intersect, state how many points of intersection there are and find the \\(x\\)-coordinates.",
    a: "no intersections",
    solution: "Equate the equations: \\(x^2 + 4x + 7 = -2x - 3 \\implies x^2 + 6x + 10 = 0\\). The discriminant is \\(\\Delta = 6^2 - 4(1)(10) = -4 < 0\\), so there are no intersections.",
    t: "The discriminant",
    hint: "Equate the equations and find if \\(\\Delta < 0\\).",
    solutionSteps: [
      {
        explanation: "Equate the two functions.",
        workingOut: "x^2 + 4x + 7 = -2x - 3",
        graphData: null
      },
      {
        explanation: "Rearrange to form standard quadratic form.",
        workingOut: "x^2 + 6x + 10 = 0",
        graphData: null
      },
      {
        explanation: "Find the discriminant to check for real solutions.",
        workingOut: "\\Delta = 6^2 - 4(1)(10) = 36 - 40 = -4 < 0",
        graphData: null
      }
    ]
  },
  // Q12a
  {
    id: "y11a-4c-q12a",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Use the discriminant of a suitable quadratic equation to determine whether or not the parabola \\(y = x^2 + 4x + 2\\) intersects the parabola \\(y = -x^2 + 2x - 3\\). If they do intersect, how many points are there and what are the \\(x\\)-coordinates?",
    a: "no intersections",
    solution: "Equate equations: \\(x^2 + 4x + 2 = -x^2 + 2x - 3 \\implies 2x^2 + 2x + 5 = 0\\). The discriminant is \\(\\Delta = 2^2 - 4(2)(5) = -36 < 0\\). Hence, they do not intersect.",
    t: "The discriminant",
    hint: "Equate the two parabolas to form a single quadratic equation.",
    solutionSteps: [
      {
        explanation: "Set the two parabola equations equal to each other.",
        workingOut: "x^2 + 4x + 2 = -x^2 + 2x - 3",
        graphData: null
      },
      {
        explanation: "Group all terms on one side to get a quadratic equation.",
        workingOut: "2x^2 + 2x + 5 = 0",
        graphData: null
      },
      {
        explanation: "Calculate the discriminant to determine if there are intersection points.",
        workingOut: "\\Delta = 2^2 - 4(2)(5) = 4 - 40 = -36 < 0",
        graphData: null
      }
    ]
  },
  // Q12bi
  {
    id: "y11a-4c-q12bi",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Use the discriminant of a suitable quadratic equation to determine whether or not the parabola \\(y = x^2 + 2x + 3\\) intersects the parabola \\(y = -x^2 - 6x - 5\\). If they do intersect, how many points are there and what are the \\(x\\)-coordinates?",
    a: "1 intersection at x = -2",
    solution: "Equate equations: \\(x^2 + 2x + 3 = -x^2 - 6x - 5 \\implies 2x^2 + 8x + 8 = 0 \\implies x^2 + 4x + 4 = 0\\). The discriminant is \\(\\Delta = 16 - 16 = 0\\). Solve \\((x+2)^2 = 0 \\implies x = -2\\).",
    t: "The discriminant",
    hint: "Equate the functions and solve for the roots.",
    solutionSteps: [
      {
        explanation: "Set the parabolas equal.",
        workingOut: "x^2 + 2x + 3 = -x^2 - 6x - 5",
        graphData: null
      },
      {
        explanation: "Collect all terms and simplify the equation by dividing by 2.",
        workingOut: "2x^2 + 8x + 8 = 0 \\implies x^2 + 4x + 4 = 0",
        graphData: null
      },
      {
        explanation: "Check the discriminant and find the root.",
        workingOut: "\\Delta = 4^2 - 4(1)(4) = 0 \\implies x = -2",
        graphData: null
      }
    ]
  },
  // Q12bii
  {
    id: "y11a-4c-q12bii",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Use the discriminant of a suitable quadratic equation to determine whether or not the parabola \\(y = \\frac{1}{2}x^2 - 2x + 3\\) intersects the parabola \\(y = -\\frac{1}{2}x^2 - 4x + 2\\). If they do intersect, how many points are there and what are the \\(x\\)-coordinates?",
    a: "1 intersection at x = -1",
    solution: "Equate equations: \\(\\frac{1}{2}x^2 - 2x + 3 = -\\frac{1}{2}x^2 - 4x + 2 \\implies x^2 + 2x + 1 = 0\\). The discriminant is \\(\\Delta = 4 - 4 = 0\\). Solve \\((x+1)^2 = 0 \\implies x = -1\\).",
    t: "The discriminant",
    hint: "Equate the equations and add the x^2 terms together.",
    solutionSteps: [
      {
        explanation: "Set the two equations equal.",
        workingOut: "\\frac{1}{2}x^2 - 2x + 3 = -\\frac{1}{2}x^2 - 4x + 2",
        graphData: null
      },
      {
        explanation: "Move all terms to one side.",
        workingOut: "x^2 + 2x + 1 = 0",
        graphData: null
      },
      {
        explanation: "Verify the discriminant and solve for \\(x\\).",
        workingOut: "\\Delta = 2^2 - 4(1)(1) = 0 \\implies x = -1",
        graphData: null
      }
    ]
  },
  // Q13ai
  {
    id: "y11a-4c-q13ai",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Consider the circle \\(x^2 + y^2 = 9\\) and the line \\(y = x + 2\\). Use substitution to obtain a quadratic equation in \\(x\\).",
    a: "2x^2+4x-5=0",
    solution: "Substitute \\(y = x + 2\\) into the circle equation: \\(x^2 + (x+2)^2 = 9 \\implies x^2 + x^2 + 4x + 4 = 9 \\implies 2x^2 + 4x - 5 = 0\\).",
    t: "The discriminant",
    hint: "Substitute the expression for y from the line equation into the circle equation and expand.",
    solutionSteps: [
      {
        explanation: "Write down the circle equation and substitute \\(y = x + 2\\) into it.",
        workingOut: "x^2 + (x + 2)^2 = 9",
        graphData: null
      },
      {
        explanation: "Expand the squared binomial term.",
        workingOut: "x^2 + (x^2 + 4x + 4) = 9",
        graphData: null
      },
      {
        explanation: "Collect the terms and subtract 9 from both sides to form a quadratic equation equal to zero.",
        workingOut: "2x^2 + 4x - 5 = 0",
        graphData: null
      }
    ]
  },
  // Q13aii
  {
    id: "y11a-4c-q13aii",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Consider the circle \\(x^2 + y^2 = 9\\) and the line \\(y = x + 2\\). Find the discriminant for the associated quadratic equation and hence state how many times the line intersects the circle.",
    a: "56, intersects twice",
    solution: "From part ai, the quadratic equation is \\(2x^2 + 4x - 5 = 0\\). The discriminant is \\(\\Delta = 4^2 - 4(2)(-5) = 16 + 40 = 56 > 0\\). Since \\(\\Delta > 0\\), the line intersects the circle twice.",
    t: "The discriminant",
    hint: "Calculate the discriminant \\(b^2 - 4ac\\) of the equation from part ai.",
    solutionSteps: [
      {
        explanation: "Use the quadratic equation obtained from part ai.",
        workingOut: "2x^2 + 4x - 5 = 0",
        graphData: null
      },
      {
        explanation: "Calculate the discriminant value.",
        workingOut: "\\Delta = 4^2 - 4(2)(-5) = 16 + 40 = 56",
        graphData: null
      },
      {
        explanation: "Since the discriminant is strictly positive, there are two distinct real solutions, indicating two intersection points.",
        workingOut: "\\Delta = 56 > 0 \\implies \\mathrm{intersects\\:twice}",
        graphData: null
      }
    ]
  },
  // Q13bi
  {
    id: "y11a-4c-q13bi",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Determine how many times the line \\(y = x + 3\\) intersects the circle \\(x^2 + y^2 = 2\\).",
    a: "0 times",
    solution: "Substitute \\(y = x + 3\\) into the circle equation: \\(x^2 + (x+3)^2 = 2 \\implies 2x^2 + 6x + 9 = 2 \\implies 2x^2 + 6x + 7 = 0\\). The discriminant is \\(\\Delta = 6^2 - 4(2)(7) = 36 - 56 = -20 < 0\\). Thus, they intersect 0 times.",
    t: "The discriminant",
    hint: "Substitute the line equation into the circle equation and check the sign of the discriminant.",
    solutionSteps: [
      {
        explanation: "Substitute the line equation into the circle equation.",
        workingOut: "x^2 + (x + 3)^2 = 2 \\implies 2x^2 + 6x + 9 = 2",
        graphData: null
      },
      {
        explanation: "Formulate the standard quadratic equation.",
        workingOut: "2x^2 + 6x + 7 = 0",
        graphData: null
      },
      {
        explanation: "Calculate the discriminant to find the number of intersections.",
        workingOut: "\\Delta = 6^2 - 4(2)(7) = 36 - 56 = -20 < 0 \\implies 0 \\mathrm{\\:intersections}",
        graphData: null
      }
    ]
  },
  // Q13bii
  {
    id: "y11a-4c-q13bii",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Determine how many times the line \\(y = -3x + 10\\) intersects the circle \\(x^2 + y^2 = 10\\).",
    a: "1 time",
    solution: "Substitute \\(y = -3x + 10\\) into the circle equation: \\(x^2 + (-3x+10)^2 = 10 \\implies 10x^2 - 60x + 100 = 10 \\implies 10x^2 - 60x + 90 = 0 \\implies x^2 - 6x + 9 = 0\\). The discriminant is \\(\\Delta = 36 - 36 = 0\\). Hence, they intersect 1 time (the line is tangent).",
    t: "The discriminant",
    hint: "Substitute, simplify, and evaluate the discriminant.",
    solutionSteps: [
      {
        explanation: "Substitute the line equation into the circle equation.",
        workingOut: "x^2 + (-3x + 10)^2 = 10 \\implies x^2 + 9x^2 - 60x + 100 = 10",
        graphData: null
      },
      {
        explanation: "Rearrange terms and divide the equation by 10.",
        workingOut: "10x^2 - 60x + 90 = 0 \\implies x^2 - 6x + 9 = 0",
        graphData: null
      },
      {
        explanation: "Evaluate the discriminant to find the intersection count.",
        workingOut: "\\Delta = (-6)^2 - 4(1)(9) = 36 - 36 = 0 \\implies 1 \\mathrm{\\:intersection}",
        graphData: null
      }
    ]
  },
  // Q14
  {
    id: "y11a-4c-q14",
    type: "teacher_review",
    difficulty: "medium",
    timeLimit: 90,
    question: "Use algebraic analysis to study the intersection of the line \\(y = x + b\\) and the parabola \\(y = 3x^2 - 5x + 2\\).",
    a: "Refer to parts a and b for verification.",
    solution: "See detailed steps below.",
    t: "The discriminant",
    subQuestions: [
      {
        id: "y11a-4c-q14a",
        type: "teacher_review",
        difficulty: "easy",
        timeLimit: 60,
        question: "Use substitution to show that \\(y = x + b\\) and \\(y = 3x^2 - 5x + 2\\) intersect when \\(3x^2 - 6x + (2 - b) = 0\\).",
        a: "Set equations equal and group terms.",
        solutionSteps: [
          {
            explanation: "Set the line equation equal to the parabola equation.",
            workingOut: "3x^2 - 5x + 2 = x + b",
            graphData: null
          },
          {
            explanation: "Subtract \\(x\\) from both sides.",
            workingOut: "3x^2 - 6x + 2 = b",
            graphData: null
          },
          {
            explanation: "Subtract \\(b\\) from both sides to group the constant term together.",
            workingOut: "3x^2 - 6x + (2 - b) = 0",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4c-q14b",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Solve \\(\\Delta = 0\\) to find the value of \\(b\\) for which the line is tangent to the curve.",
        a: "-1",
        solutionSteps: [
          {
            explanation: "Identify the coefficients from the quadratic equation in part a.",
            workingOut: "a = 3, \\quad b = -6, \\quad c = 2 - b",
            graphData: null
          },
          {
            explanation: "Write the discriminant and set it to zero for tangency.",
            workingOut: "\\Delta = (-6)^2 - 4(3)(2 - b) = 0",
            graphData: null
          },
          {
            explanation: "Expand the terms and solve the linear equation for \\(b\\).",
            workingOut: "36 - 12(2 - b) = 0 \\implies 36 - 24 + 12b = 0 \\implies 12b = -12 \\implies b = -1",
            graphData: null
          }
        ]
      }
    ]
  },
  // Q15
  {
    id: "y11a-4c-q15",
    type: "teacher_review",
    difficulty: "hard",
    timeLimit: 120,
    question: "The straight line function \\(y = mx\\) passes through the origin and is a secant of the circle \\(x^2 + (y-3)^2 = 4\\), intersecting it twice. Complete the sub-questions.",
    a: "Refer to parts a and b for the final answers.",
    solution: "See detailed steps below.",
    t: "The discriminant",
    subQuestions: [
      {
        id: "y11a-4c-q15a",
        type: "short_answer",
        difficulty: "hard",
        timeLimit: 120,
        question: "What values may \\(m\\) take?",
        a: "m < -sqrt(5)/2 or m > sqrt(5)/2",
        solutionSteps: [
          {
            explanation: "Substitute \\(y = mx\\) into the circle equation.",
            workingOut: "x^2 + (mx - 3)^2 = 4 \\implies x^2 + m^2x^2 - 6mx + 9 = 4",
            graphData: null
          },
          {
            explanation: "Group the terms to write a quadratic equation in \\(x\\).",
            workingOut: "(1 + m^2)x^2 - 6mx + 5 = 0",
            graphData: null
          },
          {
            explanation: "Form the discriminant \\(\\Delta\\) and set \\(\\Delta > 0\\) since it must intersect the circle twice.",
            workingOut: "\\Delta = (-6m)^2 - 4(1 + m^2)(5) > 0 \\implies 36m^2 - 20 - 20m^2 > 0",
            graphData: null
          },
          {
            explanation: "Solve the quadratic inequality for \\(m\\).",
            workingOut: "16m^2 > 20 \\implies m^2 > \\frac{5}{4} \\implies m < -\\frac{\\sqrt{5}}{2} \\quad \\mathrm{or} \\quad m > \\frac{\\sqrt{5}}{2}",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4c-q15b",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "There is one secant of the circle which passes through the origin but is not a function. Write down its equation.",
        a: "x = 0",
        solutionSteps: [
          {
            explanation: "A straight line passing through the origin that is not a function must be a vertical line.",
            workingOut: "x = 0",
            graphData: null
          },
          {
            explanation: "Substitute \\(x = 0\\) into the circle equation to verify if it intersects the circle twice.",
            workingOut: "0^2 + (y - 3)^2 = 4 \\implies (y - 3)^2 = 4",
            graphData: null
          },
          {
            explanation: "Solve for \\(y\\) to confirm two distinct intersection points.",
            workingOut: "y - 3 = \\pm 2 \\implies y = 1 \\quad \\mathrm{or} \\quad y = 5",
            graphData: null
          }
        ]
      }
    ]
  },
  // Q16
  {
    id: "y11a-4c-q16",
    type: "teacher_review",
    difficulty: "hard",
    timeLimit: 120,
    question: "The line \\(y = mx + b\\) is tangent to the parabola \\(y = 2x^2\\). Complete the sub-questions.",
    a: "Refer to parts a and b for the final expressions.",
    solution: "See detailed steps below.",
    t: "The discriminant",
    subQuestions: [
      {
        id: "y11a-4c-q16a",
        type: "teacher_review",
        difficulty: "medium",
        timeLimit: 90,
        question: "Show that \\(b = -\\frac{1}{8}m^2\\).",
        solutionSteps: [
          {
            explanation: "Equate the line and the parabola equations to find intersection points.",
            workingOut: "2x^2 = mx + b",
            graphData: null
          },
          {
            explanation: "Rearrange into standard quadratic form.",
            workingOut: "2x^2 - mx - b = 0",
            graphData: null
          },
          {
            explanation: "For the line to be tangent, the discriminant must be zero. Solve \\(\\Delta = 0\\) for \\(b\\).",
            workingOut: "\\Delta = (-m)^2 - 4(2)(-b) = 0 \\implies m^2 + 8b = 0 \\implies b = -\\frac{1}{8}m^2",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4c-q16b",
        type: "short_answer",
        difficulty: "hard",
        timeLimit: 120,
        question: "Hence find the coordinates of the point of contact in terms of \\(m\\).",
        a: "(m/4, m^2/8)",
        solutionSteps: [
          {
            explanation: "Use the quadratic formula root location for a double root \\(\\Delta = 0\\).",
            workingOut: "x = -\\frac{b_{quad}}{2a_{quad}} = -\\frac{-m}{2(2)} = \\frac{m}{4}",
            graphData: null
          },
          {
            explanation: "Substitute the \\(x\\) coordinate back into the parabola equation to find \\(y\\).",
            workingOut: "y = 2 \\left(\\frac{m}{4}\\right)^2 = 2 \\left(\\frac{m^2}{16}\\right)",
            graphData: null
          },
          {
            explanation: "Simplify the expression for the \\(y\\) coordinate.",
            workingOut: "y = \\frac{m^2}{8}",
            graphData: null
          }
        ]
      }
    ]
  },
  // Q17
  {
    id: "y11a-4c-q17",
    type: "short_answer",
    difficulty: "hard",
    timeLimit: 120,
    question: "There are two lines \\(y = mx + b\\) that pass through the point \\((2, 3)\\) and are tangent to the parabola \\(y = x^2\\). Find the equations of these two lines.",
    a: "y = 2x - 1 or y = 6x - 9",
    solution: "Since the lines pass through \\((2, 3)\\), substitute to get \\(3 = 2m + b \\implies b = 3 - 2m\\). Equating the line and parabola gives \\(x^2 - mx - b = 0\\). For tangency, \\(\\Delta = m^2 + 4b = 0 \\implies m^2 + 4(3 - 2m) = 0 \\implies m^2 - 8m + 12 = 0 \\implies (m-2)(m-6) = 0 \\implies m = 2 \\text{ or } m = 6\\). Thus the lines are \\(y = 2x - 1\\) and \\(y = 6x - 9\\).",
    t: "The discriminant",
    hint: "Use the point to express b in terms of m, then set the discriminant of the intersection equation to zero.",
    solutionSteps: [
      {
        explanation: "Substitute the point \\((2, 3)\\) into the line equation to express \\(b\\) in terms of \\(m\\).",
        workingOut: "3 = m(2) + b \\implies b = 3 - 2m",
        graphData: null
      },
      {
        explanation: "Set the parabola equal to the line equation and substitute for \\(b\\).",
        workingOut: "x^2 = mx + (3 - 2m) \\implies x^2 - mx - (3 - 2m) = 0",
        graphData: null
      },
      {
        explanation: "Set the discriminant of this quadratic equation to zero for tangency.",
        workingOut: "\\Delta = (-m)^2 - 4(1)(2m - 3) = m^2 - 8m + 12 = 0",
        graphData: null
      },
      {
        explanation: "Factorise the equation to solve for the two slopes \\(m\\).",
        workingOut: "(m - 2)(m - 6) = 0 \\implies m = 2 \\quad \\mathrm{or} \\quad m = 6",
        graphData: null
      },
      {
        explanation: "Determine the corresponding values of \\(b\\) and write the line equations.",
        workingOut: "m = 2 \\implies b = -1 \\implies y = 2x - 1 \\\\ m = 6 \\implies b = -9 \\implies y = 6x - 9",
        graphData: null
      }
    ]
  },
  // Q18
  {
    id: "y11a-4c-q18",
    type: "short_answer",
    difficulty: "hard",
    timeLimit: 120,
    question: "The line \\(y = mx + b\\) passes through the point \\((-3, -3)\\). What values may \\(m\\) take if this line does not intersect the hyperbola \\(y = -\\frac{16}{x}\\)?",
    a: "1/9 < m < 9",
    solution: "Since the line passes through \\((-3, -3)\\), \\(-3 = -3m + b \\implies b = 3m - 3\\). Equating the equations gives \\(mx + 3m - 3 = -16/x \\implies mx^2 + (3m-3)x + 16 = 0\\). For no intersection, \\(\\Delta < 0 \\implies (3m-3)^2 - 64m < 0 \\implies 9m^2 - 18m + 9 - 64m < 0 \\implies 9m^2 - 82m + 9 < 0 \\implies (9m-1)(m-9) < 0 \\implies 1/9 < m < 9\\).",
    t: "The discriminant",
    hint: "Set up the quadratic equation for intersection, calculate the discriminant, and solve the inequality \\(\\Delta < 0\\).",
    solutionSteps: [
      {
        explanation: "Express \\(b\\) in terms of \\(m\\) using the point \\((-3, -3)\\).",
        workingOut: "-3 = m(-3) + b \\implies b = 3m - 3",
        graphData: null
      },
      {
        explanation: "Set the line equal to the hyperbola and multiply by \\(x\\) to obtain a quadratic equation.",
        workingOut: "mx + 3m - 3 = -\\frac{16}{x} \\implies mx^2 + (3m - 3)x + 16 = 0",
        graphData: null
      },
      {
        explanation: "Set the discriminant of this quadratic equation to be strictly negative.",
        workingOut: "\\Delta = (3m - 3)^2 - 4(m)(16) < 0 \\implies 9m^2 - 18m + 9 - 64m < 0",
        graphData: null
      },
      {
        explanation: "Factorise the quadratic expression in \\(m\\) and solve the inequality.",
        workingOut: "9m^2 - 82m + 9 < 0 \\implies (9m - 1)(m - 9) < 0 \\implies \\frac{1}{9} < m < 9",
        graphData: null
      }
    ]
  },
  // Q19
  {
    id: "y11a-4c-q19",
    type: "teacher_review",
    difficulty: "hard",
    timeLimit: 120,
    question: "Prove the roots properties for the given quadratic equations. Complete the sub-questions.",
    a: "Refer to proof steps for parts a and b.",
    solution: "See detailed steps below.",
    t: "The discriminant",
    subQuestions: [
      {
        id: "y11a-4c-q19a",
        type: "teacher_review",
        difficulty: "hard",
        timeLimit: 120,
        question: "Prove that the roots of each equation are real and distinct for all real values of \\(\\lambda\\).",
        a: "Find the discriminant and show that it is positive.",
        solutionSteps: [
          {
            explanation: "For the first equation \\(x^2 + \\lambda x - 2 = 0\\), compute the discriminant.",
            workingOut: "\\Delta_1 = \\lambda^2 - 4(1)(-2) = \\lambda^2 + 8",
            graphData: null
          },
          {
            explanation: "Since \\(\\lambda^2 \\ge 0\\) for any real number \\(\\lambda\\), the discriminant \\(\\Delta_1\\) is always strictly positive, guaranteeing real and distinct roots.",
            workingOut: "\\lambda^2 + 8 \\ge 8 > 0",
            graphData: null
          },
          {
            explanation: "For the second equation \\(x^2 + (\\lambda + 2)x + (\\lambda - 3) = 0\\), compute the discriminant.",
            workingOut: "\\Delta_2 = (\\lambda + 2)^2 - 4(1)(\\lambda - 3)",
            graphData: null
          },
          {
            explanation: "Expand and simplify the second discriminant.",
            workingOut: "\\Delta_2 = (\\lambda^2 + 4\\lambda + 4) - 4\\lambda + 12 = \\lambda^2 + 16",
            graphData: null
          },
          {
            explanation: "Observe that \\(\\Delta_2\\) is also a sum of a perfect square and a positive number, hence always positive.",
            workingOut: "\\lambda^2 + 16 \\ge 16 > 0",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4c-q19b",
        type: "teacher_review",
        difficulty: "hard",
        timeLimit: 120,
        question: "In the case of equation (i) \\(x^2 + \\lambda x - 2 = 0\\), use the concavity and y-intercept of the associated parabola to give an alternative explanation for why the roots are real and distinct.",
        a: "Parabola opens upwards and has a negative y-intercept, so it must cross the x-axis twice.",
        solutionSteps: [
          {
            explanation: "Identify the concavity of the associated parabola \\(y = x^2 + \\lambda x - 2\\). Since the coefficient of \\(x^2\\) is 1 (positive), the parabola is concave upwards.",
            workingOut: "\\mathrm{Concave\\:upwards}",
            graphData: null
          },
          {
            explanation: "Find the y-intercept of the parabola by setting \\(x = 0\\).",
            workingOut: "y = 0^2 + \\lambda(0) - 2 = -2",
            graphData: null
          },
          {
            explanation: "Since the parabola opens upwards and its vertex/lowest parts must lie below the x-axis (as it passes through the negative y-intercept \\((0, -2)\\)), it must cross the x-axis twice: once on the left and once on the right of the y-axis. This guarantees two real and distinct roots.",
            workingOut: "\\mathrm{Crosses\\:x-axis\\:twice}",
            graphData: null
          }
        ]
      }
    ]
  },
  // Q20
  {
    id: "y11a-4c-q20",
    type: "teacher_review",
    difficulty: "hard",
    timeLimit: 120,
    question: "Each problem in Question 13 could be easily solved by graphing the line and circle. How could part a and part b i be solved using geometry? (Hint: Consider the perpendicular distance from the center of the circle to the line and compare it with the radius.)",
    a: "Calculate the perpendicular distance from the center of the circle (0,0) to the line and compare it to the radius.",
    solution: "The perpendicular distance \\(d\\) from the origin \\((0,0)\\) to the line \\(Ax + By + C = 0\\) is \\(d = \\frac{|C|}{\\sqrt{A^2 + B^2}}\\). If \\(d < r\\), it intersects twice. If \\(d = r\\), it is tangent. If \\(d > r\\), it does not intersect.",
    t: "The discriminant",
    hint: "Use the perpendicular distance formula from a point to a line to compare the distance with the circle's radius.",
    solutionSteps: [
      {
        explanation: "State the geometric criterion for circle-line intersection: calculate the perpendicular distance \\(d\\) from the center \\((0,0)\\) to the line.",
        workingOut: "d = \\frac{|C|}{\\sqrt{A^2 + B^2}}",
        graphData: null
      },
      {
        explanation: "For part a (circle \\(x^2 + y^2 = 9\\) with radius \\(r = 3\\) and line \\(x - y + 2 = 0\\)), compute the perpendicular distance.",
        workingOut: "d = \\frac{|2|}{\\sqrt{1^2 + (-1)^2}} = \\frac{2}{\\sqrt{2}} = \\sqrt{2}",
        graphData: null
      },
      {
        explanation: "Compare the distance \\(d\\) to the radius \\(r\\). Since \\(\\sqrt{2} \\approx 1.41 < 3\\), the line is closer to the center than the boundary, so it intersects twice.",
        workingOut: "\\sqrt{2} < 3 \\implies \\mathrm{intersects\\:twice}",
        graphData: null
      },
      {
        explanation: "For part b i (circle \\(x^2 + y^2 = 2\\) with radius \\(r = \\sqrt{2}\\) and line \\(x - y + 3 = 0\\)), compute the perpendicular distance.",
        workingOut: "d = \\frac{|3|}{\\sqrt{1^2 + (-1)^2}} = \\frac{3}{\\sqrt{2}}",
        graphData: null
      },
      {
        explanation: "Compare the distance \\(d\\) to the radius \\(r\\). Since \\(\\frac{3}{\\sqrt{2}} = 1.5\\sqrt{2} > \\sqrt{2}\\), the line is further from the center than the radius, so they do not intersect.",
        workingOut: "\\frac{3}{\\sqrt{2}} > \\sqrt{2} \\implies \\mathrm{no\\:intersections}",
        graphData: null
      }
    ]
  }
];
