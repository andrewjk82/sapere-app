export const SURDS_QUESTIONS_Y11A = [
  // 2A: Real numbers and intervals (Q1-Q16)
  {
    "id": "s2a_1",
    "c": "2A",
    "t": "Real numbers and intervals",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Is \\(\\sqrt{45}\\) rational or irrational?",
    "opts": [
      "Irrational",
      "Rational",
      "Integer",
      "Fraction"
    ],
    "a": 0,
    "h": "Factorise the number under the square root to see if it has a perfect square factor.",
    "solutionSteps": [
      {
        "explanation": "To determine whether \\(\\sqrt{45}\\) is rational or irrational, we first check if the number 45 is a perfect square.",
        "workingOut": "\\sqrt{45}"
      },
      {
        "explanation": "We can factor 45 into a product of its prime factors to check for any perfect square numbers.",
        "workingOut": "45 = 9 \\times 5 = 3^2 \\times 5"
      },
      {
        "explanation": "Apply the square root multiplication rule to simplify the expression by taking the square root of the perfect square factor.",
        "workingOut": "\\sqrt{45} = \\sqrt{9} \\times \\sqrt{5} = 3\\sqrt{5}"
      },
      {
        "explanation": "Since \\(\\sqrt{5}\\) is a surd and cannot be expressed as a fraction of two integers, the entire number \\(3\\sqrt{5}\\) is irrational.",
        "workingOut": "\\text{Irrational}"
      }
    ]
  },
  {
    "id": "s2a_2",
    "c": "2A",
    "t": "Real numbers and intervals",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Identify if \\(\\sqrt[3]{64}\\) is rational or irrational.",
    "opts": [
      "Rational",
      "Irrational",
      "Surd",
      "Complex"
    ],
    "a": 0,
    "h": "Find an integer which, when multiplied by itself three times, equals 64.",
    "solutionSteps": [
      {
        "explanation": "To determine if \\(\\sqrt[3]{64}\\) is rational, we check if 64 is a perfect cube of an integer.",
        "workingOut": "\\sqrt[3]{64}"
      },
      {
        "explanation": "Find a number that raised to the power of 3 equals 64. We know that 4 times 4 times 4 equals 64.",
        "workingOut": "4^3 = 64"
      },
      {
        "explanation": "Apply the cube root to the perfect cube expression. The cube root of a base cubed is simply the base.",
        "workingOut": "\\sqrt[3]{64} = \\sqrt[3]{4^3} = 4"
      },
      {
        "explanation": "Because 4 is a whole number (which can be written as \\(\\frac{4}{1}\\)), the result is rational.",
        "workingOut": "\\text{Rational}"
      }
    ]
  },
  {
    "id": "s2a_3",
    "c": "2A",
    "t": "Real numbers and intervals",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Express \\(0.32\\) as a fraction in simplest form.",
    "opts": [
      "\\(\\frac{8}{25}\\)",
      "\\(\\frac{32}{100}\\)",
      "\\(\\frac{4}{12}\\)",
      "\\(\\frac{16}{50}\\)"
    ],
    "a": 0,
    "h": "Convert the decimal to a fraction over 100, then find the greatest common divisor to simplify.",
    "solutionSteps": [
      {
        "explanation": "Convert the decimal number to a fraction using the place value of the digits. Since there are two decimal places, the denominator is 100.",
        "workingOut": "0.32 = \\frac{32}{100}"
      },
      {
        "explanation": "To simplify the fraction, find the greatest common divisor (GCD) of the numerator 32 and denominator 100.",
        "workingOut": "\\text{GCD}(32, 100) = 4"
      },
      {
        "explanation": "Divide both the numerator and the denominator by their greatest common divisor 4.",
        "workingOut": "\\frac{32 \\div 4}{100 \\div 4} = \\frac{8}{25}"
      },
      {
        "explanation": "Since 8 and 25 have no common factors other than 1, the fraction is in its simplest form.",
        "workingOut": "\\frac{8}{25}"
      }
    ]
  },
  {
    "id": "s2a_4",
    "c": "2A",
    "t": "Real numbers and intervals",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Classify \\(\\pi + 2\\) as rational or irrational.",
    "opts": [
      "Irrational",
      "Rational",
      "Algebraic",
      "Integer"
    ],
    "a": 0,
    "h": "Recall that the sum of an irrational number and a rational number is always irrational.",
    "solutionSteps": [
      {
        "explanation": "Identify the mathematical properties of each component in the expression \\(\\pi + 2\\).",
        "workingOut": "\\pi + 2"
      },
      {
        "explanation": "Recall that \\(\\pi\\) is a transcendental number with a non-terminating and non-repeating decimal expansion.",
        "workingOut": "\\pi \\approx 3.14159... \\implies \\text{Irrational}"
      },
      {
        "explanation": "Adding a rational number like 2 to an irrational number does not make the decimal terminate or repeat. Hence, the sum remains irrational.",
        "workingOut": "\\pi + 2 \\approx 5.14159... \\implies \\text{Irrational}"
      }
    ]
  },
  {
    "id": "s2a_5",
    "c": "2A",
    "t": "Real numbers and intervals",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Write the interval \\(x < 5\\) using bracket notation.",
    "opts": [
      "\\((-\\infty, 5)\\)",
      "\\([-\\infty, 5)\\)",
      "\\((-\\infty, 5]\\)",
      "\\((5, \\infty)\\)"
    ],
    "a": 0,
    "h": "Identify the boundaries of the interval and check if the boundary values are included.",
    "solutionSteps": [
      {
        "explanation": "Analyze the inequality \\(x < 5\\) to find the lower limit and upper limit of the values \\(x\\) can take.",
        "workingOut": "x < 5"
      },
      {
        "explanation": "Since there is no lower bound specified, the interval extends all the way to negative infinity.",
        "workingOut": "\\text{Lower bound: } -\\infty"
      },
      {
        "explanation": "The upper bound is 5. Because the inequality symbol is strictly less than \\( < \\) (not inclusive), we use a round parenthesis for the upper limit.",
        "workingOut": "\\text{Upper bound: } 5 \\implies \\text{exclusive}"
      },
      {
        "explanation": "Combine the bounds into interval notation. Infinity boundaries are always written with round brackets.",
        "workingOut": "\\text{Interval notation: } (-\\infty, 5)"
      }
    ]
  },
  {
    "id": "s2a_6",
    "c": "2A",
    "t": "Real numbers and intervals",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Express the interval \\([-2, 7]\\) using inequalities.",
    "opts": [
      "\\(-2 \\le x \\le 7\\)",
      "\\(-2 < x < 7\\)",
      "\\(-2 \\le x < 7\\)",
      "\\(-2 < x \\le 7\\)"
    ],
    "a": 0,
    "h": "Look at the brackets. Square brackets indicate inclusive boundaries.",
    "solutionSteps": [
      {
        "explanation": "Identify the boundary values and the types of brackets used in the interval notation.",
        "workingOut": "[-2, 7]"
      },
      {
        "explanation": "The square bracket \\( [ \\) at \\(-2\\) means the lower bound is inclusive, so we use the greater than or equal to symbol.",
        "workingOut": "-2 \\le x"
      },
      {
        "explanation": "The square bracket \\( ] \\) at \\(7\\) means the upper bound is also inclusive, so we use the less than or equal to symbol.",
        "workingOut": "x \\le 7"
      },
      {
        "explanation": "Combine the individual boundary conditions into a single compound inequality.",
        "workingOut": "-2 \\le x \\le 7"
      }
    ]
  },
  {
    "id": "s2a_7",
    "c": "2A",
    "t": "Real numbers and intervals",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Write the inequality \\(-3 < x \\le 4\\) in bracket notation.",
    "opts": [
      "\\((-3, 4]\\)",
      "\\([-3, 4]\\)",
      "\\((-3, 4)\\)",
      "\\([-3, 4)\\)"
    ],
    "a": 0,
    "h": "Check if the boundaries are strictly greater/less than or inclusive.",
    "solutionSteps": [
      {
        "explanation": "Examine the left-hand inequality to determine if the lower boundary value \\(-3\\) is included.",
        "workingOut": "-3 < x \\implies \\text{Strict inequality, use round parenthesis } ("
      },
      {
        "explanation": "Examine the right-hand inequality to determine if the upper boundary value \\(4\\) is included.",
        "workingOut": "x \\le 4 \\implies \\text{Inclusive inequality, use square bracket } ]"
      },
      {
        "explanation": "Combine these boundaries together to write the complete interval notation.",
        "workingOut": "(-3, 4]"
      }
    ]
  },
  {
    "id": "s2a_8",
    "c": "2A",
    "t": "Real numbers and intervals",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Write the interval \\((-\\infty, -4]\\) using inequalities.",
    "opts": [
      "\\(x \\le -4\\)",
      "\\(x < -4\\)",
      "\\(x \\ge -4\\)",
      "\\(x > -4\\)"
    ],
    "a": 0,
    "h": "Find the limit values and check if the boundary is inclusive.",
    "solutionSteps": [
      {
        "explanation": "Analyze the bounds in the interval notation. The lower bound is negative infinity, meaning there is no lower limit.",
        "workingOut": "(-\\infty, -4]"
      },
      {
        "explanation": "The upper bound is \\(-4\\). The square bracket \\( ] \\) shows that the upper bound is inclusive.",
        "workingOut": "\\text{Upper limit: } x \\le -4"
      },
      {
        "explanation": "Write this as a simple one-sided inequality since the lower bound extends to infinity.",
        "workingOut": "x \\le -4"
      }
    ]
  },
  {
    "id": "s2a_9",
    "c": "2A",
    "t": "Real numbers and intervals",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Classify \\(\\sqrt{1.44}\\) as rational or irrational.",
    "opts": [
      "Rational",
      "Irrational",
      "Surd",
      "Imaginary"
    ],
    "a": 0,
    "h": "Convert the decimal under the square root to a fraction, then evaluate.",
    "solutionSteps": [
      {
        "explanation": "Convert the decimal number inside the square root into a fraction to analyze its square factors.",
        "workingOut": "1.44 = \\frac{144}{100}"
      },
      {
        "explanation": "Apply the square root to both the numerator and the denominator separately.",
        "workingOut": "\\sqrt{\\frac{144}{100}} = \\frac{\\sqrt{144}}{\\sqrt{100}}"
      },
      {
        "explanation": "Evaluate the square roots of the numerator and the denominator. Both 144 and 100 are perfect squares.",
        "workingOut": "\\frac{12}{10} = 1.2 = \\frac{6}{5}"
      },
      {
        "explanation": "Since the result can be written as a simple fraction \\(\\frac{6}{5}\\) of two integers, the number is rational.",
        "workingOut": "\\text{Rational}"
      }
    ]
  },
  {
    "id": "s2a_10",
    "c": "2A",
    "t": "Real numbers and intervals",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Identify if \\(3\\sqrt{7}\\) is rational or irrational.",
    "opts": [
      "Irrational",
      "Rational",
      "Integer",
      "Fraction"
    ],
    "a": 0,
    "h": "Check the factor parts. An irrational factor makes the entire product irrational.",
    "solutionSteps": [
      {
        "explanation": "Examine the components of the product \\(3\\sqrt{7}\\). We have a rational integer multiplier 3 and a radical term \\(\\sqrt{7}\\).",
        "workingOut": "3 \\times \\sqrt{7}"
      },
      {
        "explanation": "Determine the nature of the radical term \\(\\sqrt{7}\\). Since 7 is not a perfect square, its square root cannot be written as a fraction.",
        "workingOut": "\\sqrt{7} \\approx 2.64575... \\implies \\text{Irrational}"
      },
      {
        "explanation": "Multiplying any non-zero rational number by an irrational number results in an irrational number.",
        "workingOut": "3 \\times \\text{Irrational} = \\text{Irrational}"
      }
    ]
  },
  {
    "id": "s2a_11",
    "c": "2A",
    "t": "Real numbers and intervals",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Write \\(-4 \\le x < 6\\) in interval notation.",
    "opts": [
      "\\([-4, 6)\\)",
      "\\((-4, 6]\\)",
      "\\([-4, 6]\\)",
      "\\((-4, 6)\\)"
    ],
    "a": 0,
    "h": "Check the inequality signs to determine inclusion.",
    "solutionSteps": [
      {
        "explanation": "Identify the left boundary value and check if it is inclusive.",
        "workingOut": "-4 \\le x \\implies \\text{Inclusive lower limit, use square bracket } ["
      },
      {
        "explanation": "Identify the right boundary value and check if it is inclusive.",
        "workingOut": "x < 6 \\implies \\text{Exclusive upper limit, use round parenthesis } )"
      },
      {
        "explanation": "Combine the boundaries to form the complete interval notation.",
        "workingOut": "[-4, 6)"
      }
    ]
  },
  {
    "id": "s2a_12",
    "c": "2A",
    "t": "Real numbers and intervals",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Write \\(x > -4\\) in interval notation.",
    "opts": [
      "\\((-4, \\infty)\\)",
      "\\([-4, \\infty)\\)",
      "\\((-\\infty, -4)\\)",
      "\\((-\\infty, -4]\\)"
    ],
    "a": 0,
    "h": "Greater than means values extend towards positive infinity.",
    "solutionSteps": [
      {
        "explanation": "Determine the lower bound from the inequality \\(x > -4\\).",
        "workingOut": "\\text{Lower bound: } -4 \\implies \\text{exclusive (strictly greater than), use } ("
      },
      {
        "explanation": "Determine the upper bound. Since \\(x\\) can be infinitely large, the upper bound is infinity.",
        "workingOut": "\\text{Upper bound: } \\infty \\implies \\text{always use round parenthesis } )"
      },
      {
        "explanation": "Combine these values to write the interval.",
        "workingOut": "(-4, \\infty)"
      }
    ]
  },
  {
    "id": "s2a_13",
    "c": "2A",
    "t": "Real numbers and intervals",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Express \\((-5, 3)\\) using inequalities.",
    "opts": [
      "\\(-5 < x < 3\\)",
      "\\(-5 \\le x \\le 3\\)",
      "\\(-5 < x \\le 3\\)",
      "\\(-5 \\le x < 3\\)"
    ],
    "a": 0,
    "h": "Round brackets mean strictly greater/less than.",
    "solutionSteps": [
      {
        "explanation": "Identify the boundary values and the types of brackets used.",
        "workingOut": "(-5, 3)"
      },
      {
        "explanation": "The round bracket \\( ( \\) on the left indicates that \\(-5\\) is excluded.",
        "workingOut": "-5 < x"
      },
      {
        "explanation": "The round bracket \\( ) \\) on the right indicates that \\(3\\) is excluded.",
        "workingOut": "x < 3"
      },
      {
        "explanation": "Combine both expressions to write a compound inequality.",
        "workingOut": "-5 < x < 3"
      }
    ]
  },
  {
    "id": "s2a_14",
    "c": "2A",
    "t": "Real numbers and intervals",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Express \\([-5, 3]\\) using inequalities.",
    "opts": [
      "\\(-5 \\le x \\le 3\\)",
      "\\(-5 < x < 3\\)",
      "\\(-5 \\le x < 3\\)",
      "\\(-5 < x \\le 3\\)"
    ],
    "a": 0,
    "h": "Square brackets mean inclusive.",
    "solutionSteps": [
      {
        "explanation": "Identify the boundary values and bracket types in the interval notation.",
        "workingOut": "[-5, 3]"
      },
      {
        "explanation": "The square bracket \\( [ \\) at \\(-5\\) means that the lower bound is inclusive.",
        "workingOut": "-5 \\le x"
      },
      {
        "explanation": "The square bracket \\( ] \\) at \\(3\\) means that the upper bound is inclusive.",
        "workingOut": "x \\le 3"
      },
      {
        "explanation": "Write the complete compound inequality combining these bounds.",
        "workingOut": "-5 \\le x \\le 3"
      }
    ]
  },
  {
    "id": "s2a_15",
    "c": "2A",
    "t": "Real numbers and intervals",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Express \\((3, \\infty)\\) using inequalities.",
    "opts": [
      "\\(x > 3\\)",
      "\\(x \\ge 3\\)",
      "\\(x < 3\\)",
      "\\(x \\le 3\\)"
    ],
    "a": 0,
    "h": "Infinity means there is no upper limit.",
    "solutionSteps": [
      {
        "explanation": "Analyze the bounds of the interval \\((3, \\infty)\\). The lower bound is 3 and the upper bound is infinity.",
        "workingOut": "(3, \\infty)"
      },
      {
        "explanation": "The round bracket \\( ( \\) at 3 means the boundary value is excluded, requiring a strict inequality.",
        "workingOut": "x > 3"
      },
      {
        "explanation": "Since there is no upper bound (it is infinity), we only need a single inequality to represent the interval.",
        "workingOut": "x > 3"
      }
    ]
  },
  {
    "id": "s2a_16",
    "c": "2A",
    "t": "Real numbers and intervals",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Express \\((-\\infty, -5]\\) using inequalities.",
    "opts": [
      "\\(x \\le -5\\)",
      "\\(x < -5\\)",
      "\\(x \\ge -5\\)",
      "\\(x > -5\\)"
    ],
    "a": 0,
    "h": "Check if the boundary value is inclusive.",
    "solutionSteps": [
      {
        "explanation": "Identify the boundary values in the interval notation. The lower bound is negative infinity, meaning there is no lower limit.",
        "workingOut": "(-\\infty, -5]"
      },
      {
        "explanation": "The upper bound is \\(-5\\), and the square bracket \\( ] \\) indicates it is inclusive.",
        "workingOut": "x \\le -5"
      },
      {
        "explanation": "Write this as a single inequality since the interval has no lower limit.",
        "workingOut": "x \\le -5"
      }
    ]
  },

  // 2B & 2C: Surds and their arithmetic / Further simplification (Q6-Q8)
  {
    "id": "s2bc_1",
    "c": "2C",
    "t": "Further simplification of surds",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Simplify \\(\\sqrt{48}\\).",
    "opts": [
      "\\(4\\sqrt{3}\\)",
      "\\(2\\sqrt{12}\\)",
      "\\(16\\sqrt{3}\\)",
      "\\(3\\sqrt{4}\\)"
    ],
    "a": 0,
    "h": "Find the largest perfect square factor of 48.",
    "solutionSteps": [
      {
        "explanation": "To simplify the surd \\(\\sqrt{48}\\), we need to find the largest perfect square factor of 48.",
        "workingOut": "\\sqrt{48}"
      },
      {
        "explanation": "Let us factor 48. We find that 16 is a factor of 48 and it is a perfect square.",
        "workingOut": "48 = 16 \\times 3"
      },
      {
        "explanation": "Rewrite the expression using the multiplication property of radicals, \\(\\sqrt{a \\times b} = \\sqrt{a} \\times \\sqrt{b}\\).",
        "workingOut": "\\sqrt{48} = \\sqrt{16 \\times 3} = \\sqrt{16} \\times \\sqrt{3}"
      },
      {
        "explanation": "Evaluate the square root of the perfect square factor 16 to find the simplified surd.",
        "workingOut": "4\\sqrt{3}"
      }
    ]
  },
  {
    "id": "s2bc_2",
    "c": "2C",
    "t": "Further simplification of surds",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Simplify \\(\\sqrt{150}\\).",
    "opts": [
      "\\(5\\sqrt{6}\\)",
      "\\(25\\sqrt{6}\\)",
      "\\(6\\sqrt{5}\\)",
      "\\(10\\sqrt{1.5}\\)"
    ],
    "a": 0,
    "h": "Factorise 150 to find its largest perfect square factor.",
    "solutionSteps": [
      {
        "explanation": "To simplify \\(\\sqrt{150}\\), find the largest perfect square number that divides 150.",
        "workingOut": "\\sqrt{150}"
      },
      {
        "explanation": "Factor 150. We notice that 25 divides 150 and it is a perfect square.",
        "workingOut": "150 = 25 \\times 6"
      },
      {
        "explanation": "Use radical rules to split the expression.",
        "workingOut": "\\sqrt{150} = \\sqrt{25} \\times \\sqrt{6}"
      },
      {
        "explanation": "Compute the square root of 25 to obtain the final simplified expression.",
        "workingOut": "5\\sqrt{6}"
      }
    ]
  },
  {
    "id": "s2bc_3",
    "c": "2C",
    "t": "Further simplification of surds",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Simplify \\(3\\sqrt{24}\\).",
    "opts": [
      "\\(6\\sqrt{6}\\)",
      "\\(12\\sqrt{6}\\)",
      "\\(3\\sqrt{6}\\)",
      "\\(6\\sqrt{4}\\)"
    ],
    "a": 0,
    "h": "First simplify \\(\\sqrt{24}\\) and then multiply the result by 3.",
    "solutionSteps": [
      {
        "explanation": "To simplify \\(3\\sqrt{24}\\), we should first look at the term inside the square root and find its square factors.",
        "workingOut": "3\\sqrt{24}"
      },
      {
        "explanation": "Factor 24 to locate the largest perfect square factor, which is 4.",
        "workingOut": "24 = 4 \\times 6"
      },
      {
        "explanation": "Simplify the radical part by taking the square root of 4.",
        "workingOut": "\\sqrt{24} = \\sqrt{4 \\times 6} = 2\\sqrt{6}"
      },
      {
        "explanation": "Multiply the simplified radical by the outer coefficient 3.",
        "workingOut": "3 \\times (2\\sqrt{6}) = 6\\sqrt{6}"
      }
    ]
  },
  {
    "id": "s2bc_4",
    "c": "2C",
    "t": "Further simplification of surds",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Simplify \\(2\\sqrt{80}\\).",
    "opts": [
      "\\(8\\sqrt{5}\\)",
      "\\(4\\sqrt{20}\\)",
      "\\(16\\sqrt{5}\\)",
      "\\(4\\sqrt{5}\\)"
    ],
    "a": 0,
    "h": "Simplify the radical term first, then multiply by the constant multiplier.",
    "solutionSteps": [
      {
        "explanation": "Identify the radical expression \\(2\\sqrt{80}\\) and look for factors of 80.",
        "workingOut": "2\\sqrt{80}"
      },
      {
        "explanation": "Factor 80. The largest perfect square factor of 80 is 16.",
        "workingOut": "80 = 16 \\times 5"
      },
      {
        "explanation": "Simplify \\(\\sqrt{80}\\) by evaluating the square root of 16.",
        "workingOut": "\\sqrt{80} = \\sqrt{16 \\times 5} = 4\\sqrt{5}"
      },
      {
        "explanation": "Multiply the coefficient 2 by the simplified radical value.",
        "workingOut": "2 \\times (4\\sqrt{5}) = 8\\sqrt{5}"
      }
    ]
  },
  {
    "id": "s2bc_5",
    "c": "2B",
    "t": "Surds and their arithmetic",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Simplify \\(5\\sqrt{8} + 2\\sqrt{18}\\).",
    "opts": [
      "\\(16\\sqrt{2}\\)",
      "\\(7\\sqrt{26}\\)",
      "\\(10\\sqrt{2}\\)",
      "\\(14\\sqrt{2}\\)"
    ],
    "a": 0,
    "h": "Simplify both surds to form like surds, then add their coefficients.",
    "solutionSteps": [
      {
        "explanation": "To add these radicals, we first simplify each term to see if they are like surds.",
        "workingOut": "5\\sqrt{8} + 2\\sqrt{18}"
      },
      {
        "explanation": "Simplify the first term, \\(5\\sqrt{8}\\), by finding square factors of 8.",
        "workingOut": "5\\sqrt{8} = 5\\sqrt{4 \\times 2} = 5 \\times 2\\sqrt{2} = 10\\sqrt{2}"
      },
      {
        "explanation": "Simplify the second term, \\(2\\sqrt{18}\\), by finding square factors of 18.",
        "workingOut": "2\\sqrt{18} = 2\\sqrt{9 \\times 2} = 2 \\times 3\\sqrt{2} = 6\\sqrt{2}"
      },
      {
        "explanation": "Since both terms have \\(\\sqrt{2}\\), add the simplified terms together by summing their coefficients.",
        "workingOut": "10\\sqrt{2} + 6\\sqrt{2} = (10 + 6)\\sqrt{2} = 16\\sqrt{2}"
      }
    ]
  },
  {
    "id": "s2bc_6",
    "c": "2B",
    "t": "Surds and their arithmetic",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Simplify \\(3\\sqrt{7} \\times 2\\sqrt{5}\\).",
    "opts": [
      "\\(6\\sqrt{35}\\)",
      "\\(5\\sqrt{12}\\)",
      "\\(6\\sqrt{12}\\)",
      "\\(12\\sqrt{35}\\)"
    ],
    "a": 0,
    "h": "Multiply the integer parts together, and multiply the radical parts together.",
    "solutionSteps": [
      {
        "explanation": "State the rule for multiplying radicals: \\(a\\sqrt{x} \\times b\\sqrt{y} = (a \\times b)\\sqrt{x \\times y}\\).",
        "workingOut": "3\\sqrt{7} \\times 2\\sqrt{5}"
      },
      {
        "explanation": "Multiply the outer coefficients together.",
        "workingOut": "3 \\times 2 = 6"
      },
      {
        "explanation": "Multiply the numbers inside the square roots together.",
        "workingOut": "\\sqrt{7} \\times \\sqrt{5} = \\sqrt{7 \\times 5} = \\sqrt{35}"
      },
      {
        "explanation": "Combine the results to obtain the final product.",
        "workingOut": "6\\sqrt{35}"
      }
    ]
  },
  {
    "id": "s2bc_7",
    "c": "2B",
    "t": "Surds and their arithmetic",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Simplify \\(\\sqrt{40} \\div \\sqrt{8}\\).",
    "opts": [
      "\\(\\sqrt{5}\\)",
      "\\(5\\)",
      "\\(\\sqrt{32}\\)",
      "\\(2\\sqrt{5}\\)"
    ],
    "a": 0,
    "h": "Use the division property of radicals: \\(\\sqrt{a} / \\sqrt{b} = \\sqrt{a/b}\\).",
    "solutionSteps": [
      {
        "explanation": "Recall the division rule for radicals, which allows us to combine the quotient under a single square root.",
        "workingOut": "\\frac{\\sqrt{40}}{\\sqrt{8}} = \\sqrt{\\frac{40}{8}}"
      },
      {
        "explanation": "Simplify the fraction inside the square root by division.",
        "workingOut": "\\frac{40}{8} = 5"
      },
      {
        "explanation": "Write down the final simplified radical.",
        "workingOut": "\\sqrt{5}"
      }
    ]
  },
  {
    "id": "s2bc_8",
    "c": "2B",
    "t": "Surds and their arithmetic",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Simplify \\((4\\sqrt{6})^2\\).",
    "opts": [
      "\\(96\\)",
      "\\(24\\)",
      "\\(144\\)",
      "\\(36\\)"
    ],
    "a": 0,
    "h": "Apply the power property \\((ab)^2 = a^2 b^2\\).",
    "solutionSteps": [
      {
        "explanation": "To square the product \\(4\\sqrt{6}\\), square the individual factors according to exponent laws.",
        "workingOut": "(4\\sqrt{6})^2 = 4^2 \\times (\\sqrt{6})^2"
      },
      {
        "explanation": "Calculate the square of the outer coefficient 4.",
        "workingOut": "4^2 = 16"
      },
      {
        "explanation": "Calculate the square of the radical term \\(\\sqrt{6}\\). Squaring a square root yields the original number.",
        "workingOut": "(\\sqrt{6})^2 = 6"
      },
      {
        "explanation": "Multiply the two squared values together.",
        "workingOut": "16 \\times 6 = 96"
      }
    ]
  },
  {
    "id": "s2bc_9",
    "c": "2C",
    "t": "Further simplification of surds",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Simplify \\(\\sqrt{27} - \\sqrt{12}\\).",
    "opts": [
      "\\(\\sqrt{3}\\)",
      "\\(\\sqrt{15}\\)",
      "\\(3\\sqrt{3}\\)",
      "\\(-3\\sqrt{3}\\)"
    ],
    "a": 0,
    "h": "Simplify both terms to form like surds, then subtract.",
    "solutionSteps": [
      {
        "explanation": "Simplify both surds to see if they can be combined as like terms.",
        "workingOut": "\\sqrt{27} - \\sqrt{12}"
      },
      {
        "explanation": "Simplify the first term \\(\\sqrt{27}\\) by factoring out the perfect square 9.",
        "workingOut": "\\sqrt{27} = \\sqrt{9 \\times 3} = 3\\sqrt{3}"
      },
      {
        "explanation": "Simplify the second term \\(\\sqrt{12}\\) by factoring out the perfect square 4.",
        "workingOut": "\\sqrt{12} = \\sqrt{4 \\times 3} = 2\\sqrt{3}"
      },
      {
        "explanation": "Subtract the like terms by subtracting their outer coefficients.",
        "workingOut": "3\\sqrt{3} - 2\\sqrt{3} = (3 - 2)\\sqrt{3} = \\sqrt{3}"
      }
    ]
  },
  {
    "id": "s2bc_10",
    "c": "2C",
    "t": "Further simplification of surds",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Simplify \\(3\\sqrt{2} + 4\\sqrt{50} - \\sqrt{32}\\).",
    "opts": [
      "\\(19\\sqrt{2}\\)",
      "\\(23\\sqrt{2}\\)",
      "\\(15\\sqrt{2}\\)",
      "\\(27\\sqrt{2}\\)"
    ],
    "a": 0,
    "h": "Simplify each radical to see if all terms contain a like surd.",
    "solutionSteps": [
      {
        "explanation": "Simplify the three individual terms to express them as like surds.",
        "workingOut": "3\\sqrt{2} + 4\\sqrt{50} - \\sqrt{32}"
      },
      {
        "explanation": "The first term \\(3\\sqrt{2}\\) is already simplified. Simplify the second term \\(4\\sqrt{50}\\).",
        "workingOut": "4\\sqrt{50} = 4\\sqrt{25 \\times 2} = 4 \\times 5\\sqrt{2} = 20\\sqrt{2}"
      },
      {
        "explanation": "Simplify the third term \\(\\sqrt{32}\\).",
        "workingOut": "\\sqrt{32} = \\sqrt{16 \\times 2} = 4\\sqrt{2}"
      },
      {
        "explanation": "Combine all three simplified like terms by performing addition and subtraction on their coefficients.",
        "workingOut": "3\\sqrt{2} + 20\\sqrt{2} - 4\\sqrt{2} = (3 + 20 - 4)\\sqrt{2} = 19\\sqrt{2}"
      }
    ]
  },
  {
    "id": "s2bc_11",
    "c": "2C",
    "t": "Further simplification of surds",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Simplify \\(\\sqrt{54} - \\sqrt{24} + \\sqrt{150}\\).",
    "opts": [
      "\\(6\\sqrt{6}\\)",
      "\\(4\\sqrt{6}\\)",
      "\\(\\sqrt{180}\\)",
      "\\(12\\sqrt{6}\\)"
    ],
    "a": 0,
    "h": "Express each surd in its simplest form and then combine.",
    "solutionSteps": [
      {
        "explanation": "Simplify each surd individually to identify like terms.",
        "workingOut": "\\sqrt{54} - \\sqrt{24} + \\sqrt{150}"
      },
      {
        "explanation": "Simplify \\(\\sqrt{54}\\) by factoring out the perfect square 9.",
        "workingOut": "\\sqrt{54} = \\sqrt{9 \\times 6} = 3\\sqrt{6}"
      },
      {
        "explanation": "Simplify \\(\\sqrt{24}\\) by factoring out the perfect square 4.",
        "workingOut": "\\sqrt{24} = \\sqrt{4 \\times 6} = 2\\sqrt{6}"
      },
      {
        "explanation": "Simplify \\(\\sqrt{150}\\) by factoring out the perfect square 25.",
        "workingOut": "\\sqrt{150} = \\sqrt{25 \\times 6} = 5\\sqrt{6}"
      },
      {
        "explanation": "Combine the coefficients of the simplified terms.",
        "workingOut": "3\\sqrt{6} - 2\\sqrt{6} + 5\\sqrt{6} = (3 - 2 + 5)\\sqrt{6} = 6\\sqrt{6}"
      }
    ]
  },
  {
    "id": "s2bc_12",
    "c": "2B",
    "t": "Surds and their arithmetic",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Simplify \\(\\sqrt{20} \\times \\sqrt{5}\\).",
    "opts": [
      "\\(10\\)",
      "\\(\\sqrt{100}\\)",
      "\\(5\\sqrt{2}\\)",
      "\\(25\\)"
    ],
    "a": 0,
    "h": "Multiply the values inside the radicals first.",
    "solutionSteps": [
      {
        "explanation": "Multiply the numbers under the square roots together using the multiplication rule.",
        "workingOut": "\\sqrt{20} \\times \\sqrt{5} = \\sqrt{20 \\times 5}"
      },
      {
        "explanation": "Evaluate the product inside the radical.",
        "workingOut": "\\sqrt{100}"
      },
      {
        "explanation": "Evaluate the square root of 100, which is a perfect square.",
        "workingOut": "10"
      }
    ]
  },
  {
    "id": "s2bc_13",
    "c": "2B",
    "t": "Surds and their arithmetic",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Simplify \\(2\\sqrt{6} \\times 4\\sqrt{3}\\).",
    "opts": [
      "\\(24\\sqrt{2}\\)",
      "\\(8\\sqrt{18}\\)",
      "\\(12\\sqrt{2}\\)",
      "\\(24\\)"
    ],
    "a": 0,
    "h": "Multiply the coefficients and multiply the radicals, then simplify the result.",
    "solutionSteps": [
      {
        "explanation": "Multiply the outer numbers and the inner numbers separately.",
        "workingOut": "(2 \\times 4)\\sqrt{6 \\times 3}"
      },
      {
        "explanation": "Evaluate the products.",
        "workingOut": "8\\sqrt{18}"
      },
      {
        "explanation": "Simplify the radical term \\(\\sqrt{18}\\) by factoring out the perfect square 9.",
        "workingOut": "8\\sqrt{9 \\times 2} = 8 \\times 3\\sqrt{2}"
      },
      {
        "explanation": "Multiply the simplified coefficient to obtain the final answer.",
        "workingOut": "24\\sqrt{2}"
      }
    ]
  },
  {
    "id": "s2bc_14",
    "c": "2C",
    "t": "Further simplification of surds",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Simplify \\(\\sqrt{98} - \\sqrt{72}\\).",
    "opts": [
      "\\(\\sqrt{2}\\)",
      "\\(2\\sqrt{2}\\)",
      "\\(\\sqrt{26}\\)",
      "\\(0\\)"
    ],
    "a": 0,
    "h": "Express each surd in terms of its simplest radical form and subtract.",
    "solutionSteps": [
      {
        "explanation": "Simplify both terms to see if they can be combined.",
        "workingOut": "\\sqrt{98} - \\sqrt{72}"
      },
      {
        "explanation": "Simplify the first term \\(\\sqrt{98}\\) by identifying 49 as its largest perfect square factor.",
        "workingOut": "\\sqrt{98} = \\sqrt{49 \\times 2} = 7\\sqrt{2}"
      },
      {
        "explanation": "Simplify the second term \\(\\sqrt{72}\\) by identifying 36 as its largest perfect square factor.",
        "workingOut": "\\sqrt{72} = \\sqrt{36 \\times 2} = 6\\sqrt{2}"
      },
      {
        "explanation": "Subtract the two like terms.",
        "workingOut": "7\\sqrt{2} - 6\\sqrt{2} = (7 - 6)\\sqrt{2} = \\sqrt{2}"
      }
    ]
  },
  {
    "id": "s2bc_15",
    "c": "2C",
    "t": "Further simplification of surds",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Simplify \\(2\\sqrt{45} - \\sqrt{20} + 3\\sqrt{5}\\).",
    "opts": [
      "\\(7\\sqrt{5}\\)",
      "\\(9\\sqrt{5}\\)",
      "\\(5\\sqrt{5}\\)",
      "\\(11\\sqrt{5}\\)"
    ],
    "a": 0,
    "h": "Simplify all terms to a common radical and combine.",
    "solutionSteps": [
      {
        "explanation": "Simplify each radical term to see if they can be combined.",
        "workingOut": "2\\sqrt{45} - \\sqrt{20} + 3\\sqrt{5}"
      },
      {
        "explanation": "Simplify the first term \\(2\\sqrt{45}\\).",
        "workingOut": "2\\sqrt{45} = 2\\sqrt{9 \\times 5} = 2 \\times 3\\sqrt{5} = 6\\sqrt{5}"
      },
      {
        "explanation": "Simplify the second term \\(\\sqrt{20}\\).",
        "workingOut": "\\sqrt{20} = \\sqrt{4 \\times 5} = 2\\sqrt{5}"
      },
      {
        "explanation": "Combine all three terms since they are like surds.",
        "workingOut": "6\\sqrt{5} - 2\\sqrt{5} + 3\\sqrt{5} = (6 - 2 + 3)\\sqrt{5} = 7\\sqrt{5}"
      }
    ]
  },
  {
    "id": "s2bc_16",
    "c": "2B",
    "t": "Surds and their arithmetic",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Simplify \\(\\sqrt{5} + \\sqrt{5}\\).",
    "opts": [
      "\\(2\\sqrt{5}\\)",
      "\\(\\sqrt{10}\\)",
      "\\(5\\)",
      "\\(\\sqrt{25}\\)"
    ],
    "a": 0,
    "h": "Combine the coefficients of the like terms.",
    "solutionSteps": [
      {
        "explanation": "Identify that the terms are identical, which means they are like surds.",
        "workingOut": "\\sqrt{5} + \\sqrt{5}"
      },
      {
        "explanation": "Add the coefficients of both terms together. Each has an implicit coefficient of 1.",
        "workingOut": "1\\sqrt{5} + 1\\sqrt{5} = (1 + 1)\\sqrt{5} = 2\\sqrt{5}"
      }
    ]
  },
  {
    "id": "s2bc_17",
    "c": "2B",
    "t": "Surds and their arithmetic",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Simplify \\(\\sqrt{5} \\times \\sqrt{5}\\).",
    "opts": [
      "\\(5\\)",
      "\\(\\sqrt{10}\\)",
      "\\(25\\)",
      "\\(\\sqrt{5}\\)"
    ],
    "a": 0,
    "h": "Remember that multiplying a square root by itself results in the original number.",
    "solutionSteps": [
      {
        "explanation": "Multiply the numbers inside the square roots together.",
        "workingOut": "\\sqrt{5} \\times \\sqrt{5} = \\sqrt{5 \\times 5}"
      },
      {
        "explanation": "Evaluate the product under the radical.",
        "workingOut": "\\sqrt{25}"
      },
      {
        "explanation": "Take the square root of 25 to find the final simplified value.",
        "workingOut": "5"
      }
    ]
  },
  {
    "id": "s2bc_18",
    "c": "2B",
    "t": "Surds and their arithmetic",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Simplify \\(2\\sqrt{5} + \\sqrt{7} - 3\\sqrt{5}\\).",
    "opts": [
      "\\(\\sqrt{7} - \\sqrt{5}\\)",
      "\\(\\sqrt{7} + \\sqrt{5}\\)",
      "\\(-\\sqrt{5}\\)",
      "\\(\\sqrt{2}\\)"
    ],
    "a": 0,
    "h": "Combine the coefficients of the like terms.",
    "solutionSteps": [
      {
        "explanation": "Group the like terms in the expression.",
        "workingOut": "(2\\sqrt{5} - 3\\sqrt{5}) + \\sqrt{7}"
      },
      {
        "explanation": "Combine the coefficients of the \\(\\sqrt{5}\\) terms.",
        "workingOut": "(2 - 3)\\sqrt{5} + \\sqrt{7} = -\\sqrt{5} + \\sqrt{7}"
      },
      {
        "explanation": "Rearrange the terms for standard presentation.",
        "workingOut": "\\sqrt{7} - \\sqrt{5}"
      }
    ]
  },
  {
    "id": "s2bc_19",
    "c": "2B",
    "t": "Surds and their arithmetic",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Simplify \\(\\sqrt{35} \\div \\sqrt{5}\\).",
    "opts": [
      "\\(\\sqrt{7}\\)",
      "\\(7\\)",
      "\\(\\sqrt{30}\\)",
      "\\(30\\)"
    ],
    "a": 0,
    "h": "Use the division property of radicals.",
    "solutionSteps": [
      {
        "explanation": "Recall the division rule for radicals to write the quotient under a single square root.",
        "workingOut": "\\frac{\\sqrt{35}}{\\sqrt{5}} = \\sqrt{\\frac{35}{5}}"
      },
      {
        "explanation": "Divide the numbers inside the root.",
        "workingOut": "\\frac{35}{5} = 7"
      },
      {
        "explanation": "State the simplified radical.",
        "workingOut": "\\sqrt{7}"
      }
    ]
  },
  {
    "id": "s2bc_20",
    "c": "2B",
    "t": "Surds and their arithmetic",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Simplify \\(6\\sqrt{55} \\div 2\\sqrt{11}\\).",
    "opts": [
      "\\(3\\sqrt{5}\\)",
      "\\(4\\sqrt{44}\\)",
      "\\(3\\sqrt{11}\\)",
      "\\(3\\)"
    ],
    "a": 0,
    "h": "Divide the outer numbers and the inner numbers separately.",
    "solutionSteps": [
      {
        "explanation": "Divide the coefficients and the radical terms separately.",
        "workingOut": "\\left(\\frac{6}{2}\\right)\\sqrt{\\frac{55}{11}}"
      },
      {
        "explanation": "Simplify the coefficient division.",
        "workingOut": "\\frac{6}{2} = 3"
      },
      {
        "explanation": "Simplify the radical division.",
        "workingOut": "\\sqrt{\\frac{55}{11}} = \\sqrt{5}"
      },
      {
        "explanation": "Combine both simplified parts to get the final answer.",
        "workingOut": "3\\sqrt{5}"
      }
    ]
  },
  {
    "id": "s2bc_21",
    "c": "2B",
    "t": "Surds and their arithmetic",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Simplify \\(\\sqrt{8} \\times \\sqrt{2}\\).",
    "opts": [
      "\\(4\\)",
      "\\(\\sqrt{16}\\)",
      "\\(2\\sqrt{2}\\)",
      "\\(16\\)"
    ],
    "a": 0,
    "h": "Multiply the numbers inside the square root first.",
    "solutionSteps": [
      {
        "explanation": "Multiply the values inside the square roots together.",
        "workingOut": "\\sqrt{8} \\times \\sqrt{2} = \\sqrt{8 \\times 2}"
      },
      {
        "explanation": "Evaluate the product.",
        "workingOut": "\\sqrt{16}"
      },
      {
        "explanation": "Determine the square root of 16, which is a perfect square.",
        "workingOut": "4"
      }
    ]
  },
  {
    "id": "s2bc_22",
    "c": "2B",
    "t": "Surds and their arithmetic",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Simplify \\(\\sqrt{10} \\times \\sqrt{2}\\).",
    "opts": [
      "\\(2\\sqrt{5}\\)",
      "\\(\\sqrt{20}\\)",
      "\\(10\\sqrt{2}\\)",
      "\\(5\\sqrt{2}\\)"
    ],
    "a": 0,
    "h": "Multiply the numbers inside the square root first, then simplify.",
    "solutionSteps": [
      {
        "explanation": "Use the multiplication property of radicals.",
        "workingOut": "\\sqrt{10} \\times \\sqrt{2} = \\sqrt{10 \\times 2}"
      },
      {
        "explanation": "Evaluate the product.",
        "workingOut": "\\sqrt{20}"
      },
      {
        "explanation": "Simplify \\(\\sqrt{20}\\) by factoring out the perfect square 4.",
        "workingOut": "\\sqrt{20} = \\sqrt{4 \\times 5} = 2\\sqrt{5}"
      }
    ]
  },
  {
    "id": "s2bc_23",
    "c": "2B",
    "t": "Surds and their arithmetic",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Simplify \\(2\\sqrt{6} \\times 4\\sqrt{15}\\).",
    "opts": [
      "\\(24\\sqrt{10}\\)",
      "\\(8\\sqrt{90}\\)",
      "\\(24\\sqrt{15}\\)",
      "\\(80\\)"
    ],
    "a": 0,
    "h": "Multiply the coefficients and multiply the radicals, then simplify the result.",
    "solutionSteps": [
      {
        "explanation": "Multiply the coefficients and the numbers under the square roots separately.",
        "workingOut": "(2 \\times 4)\\sqrt{6 \\times 15}"
      },
      {
        "explanation": "Evaluate the products.",
        "workingOut": "8\\sqrt{90}"
      },
      {
        "explanation": "Simplify the radical term \\(\\sqrt{90}\\) by factoring out the perfect square 9.",
        "workingOut": "8\\sqrt{9 \\times 10} = 8 \\times 3\\sqrt{10}"
      },
      {
        "explanation": "Multiply the coefficient by the outer multiplier to find the final simplified answer.",
        "workingOut": "24\\sqrt{10}"
      }
    ]
  },

  // 2E: Binomial expansion (Q9-Q10)
  {
    "id": "s2e_1",
    "c": "2E",
    "t": "Binomial expansion of surds",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Expand and simplify: \\(\\sqrt{5}(3 - \\sqrt{5})\\).",
    "opts": [
      "\\(3\\sqrt{5} - 5\\)",
      "\\(3\\sqrt{5} - 25\\)",
      "\\(15 - 5\\)",
      "\\(3\\sqrt{5} + 5\\)"
    ],
    "a": 0,
    "h": "Distribute the term outside the bracket to both terms inside.",
    "solutionSteps": [
      {
        "explanation": "Use the distributive law \\(a(b - c) = ab - ac\\) to expand the expression.",
        "workingOut": "\\sqrt{5} \\times 3 - \\sqrt{5} \\times \\sqrt{5}"
      },
      {
        "explanation": "Simplify the first term of the expansion.",
        "workingOut": "3\\sqrt{5}"
      },
      {
        "explanation": "Simplify the second term of the expansion. A square root multiplied by itself yields the original value.",
        "workingOut": "\\sqrt{5} \\times \\sqrt{5} = 5"
      },
      {
        "explanation": "Combine both simplified parts to get the final expanded expression.",
        "workingOut": "3\\sqrt{5} - 5"
      }
    ]
  },
  {
    "id": "s2e_2",
    "c": "2E",
    "t": "Binomial expansion of surds",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Expand and simplify: \\(2\\sqrt{3}(\\sqrt{6} + 4)\\).",
    "opts": [
      "\\(6\\sqrt{2} + 8\\sqrt{3}\\)",
      "\\(2\\sqrt{18} + 8\\sqrt{3}\\)",
      "\\(12 + 8\\sqrt{3}\\)",
      "\\(6\\sqrt{3} + 8\\sqrt{3}\\)"
    ],
    "a": 0,
    "h": "Distribute the outer term, then simplify \\(\\sqrt{18}\\).",
    "solutionSteps": [
      {
        "explanation": "Use the distributive property to expand the expression.",
        "workingOut": "(2\\sqrt{3} \\times \\sqrt{6}) + (2\\sqrt{3} \\times 4)"
      },
      {
        "explanation": "Evaluate both terms in the expansion.",
        "workingOut": "2\\sqrt{18} + 8\\sqrt{3}"
      },
      {
        "explanation": "Simplify the radical term \\(\\sqrt{18}\\) by factoring out the perfect square 9.",
        "workingOut": "2\\sqrt{9 \\times 2} + 8\\sqrt{3} = 2 \\times 3\\sqrt{2} + 8\\sqrt{3}"
      },
      {
        "explanation": "Multiply the coefficients to find the final expanded answer.",
        "workingOut": "6\\sqrt{2} + 8\\sqrt{3}"
      }
    ]
  },
  {
    "id": "s2e_3",
    "c": "2E",
    "t": "Binomial expansion of surds",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Expand: \\((\\sqrt{3} + 4)(\\sqrt{3} - 1)\\).",
    "opts": [
      "\\(-1 + 3\\sqrt{3}\\)",
      "\\(3 + 3\\sqrt{3} - 4\\)",
      "\\(-1 - 3\\sqrt{3}\\)",
      "\\(7 + 3\\sqrt{3}\\)"
    ],
    "a": 0,
    "h": "Use the FOIL method to expand the brackets, then simplify.",
    "solutionSteps": [
      {
        "explanation": "Expand the two brackets using the FOIL method.",
        "workingOut": "\\sqrt{3} \\times \\sqrt{3} - 1 \\times \\sqrt{3} + 4 \\times \\sqrt{3} - 4"
      },
      {
        "explanation": "Simplify the individual parts of the expansion.",
        "workingOut": "3 - \\sqrt{3} + 4\\sqrt{3} - 4"
      },
      {
        "explanation": "Group the integer terms and the like radical terms.",
        "workingOut": "(3 - 4) + (-\\sqrt{3} + 4\\sqrt{3})"
      },
      {
        "explanation": "Combine the terms to get the final expanded expression.",
        "workingOut": "-1 + 3\\sqrt{3}"
      }
    ]
  },
  {
    "id": "s2e_4",
    "c": "2E",
    "t": "Binomial expansion of surds",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Expand and simplify: \\((2\\sqrt{5} + 3)(3\\sqrt{5} - 2)\\).",
    "opts": [
      "\\(24 + 5\\sqrt{5}\\)",
      "\\(30 + 5\\sqrt{5} - 6\\)",
      "\\(24 - 5\\sqrt{5}\\)",
      "\\(36 + 5\\sqrt{5}\\)"
    ],
    "a": 0,
    "h": "Apply FOIL, then simplify the product of the square roots.",
    "solutionSteps": [
      {
        "explanation": "Apply the FOIL expansion method to the brackets.",
        "workingOut": "(2\\sqrt{5})(3\\sqrt{5}) - (2\\sqrt{5})(2) + (3)(3\\sqrt{5}) - (3)(2)"
      },
      {
        "explanation": "Evaluate each term in the expansion.",
        "workingOut": "(6 \\times 5) - 4\\sqrt{5} + 9\\sqrt{5} - 6"
      },
      {
        "explanation": "Simplify the product and combine the like radical terms.",
        "workingOut": "30 + 5\\sqrt{5} - 6"
      },
      {
        "explanation": "Combine the constant numbers to get the final simplified expression.",
        "workingOut": "24 + 5\\sqrt{5}"
      }
    ]
  },
  {
    "id": "s2e_5",
    "c": "2E",
    "t": "Binomial expansion of surds",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Simplify: \\((\\sqrt{11} - 3)(\\sqrt{11} + 3)\\).",
    "opts": [
      "\\(2\\)",
      "\\(8\\)",
      "\\(121 - 9\\)",
      "\\(20\\)"
    ],
    "a": 0,
    "h": "Use the difference of squares identity: \\((a-b)(a+b) = a^2 - b^2\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the difference of two squares form \\((a - b)(a + b)\\), where \\(a = \\sqrt{11}\\) and \\(b = 3\\).",
        "workingOut": "(\\sqrt{11})^2 - 3^2"
      },
      {
        "explanation": "Calculate the square of both terms.",
        "workingOut": "11 - 9"
      },
      {
        "explanation": "Subtract the values to find the final simplified answer.",
        "workingOut": "2"
      }
    ]
  },
  {
    "id": "s2e_6",
    "c": "2E",
    "t": "Binomial expansion of surds",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Expand: \\((\\sqrt{6} - 2)^2\\).",
    "opts": [
      "\\(10 - 4\\sqrt{6}\\)",
      "\\(8 - 4\\sqrt{6}\\)",
      "\\(10 + 4\\sqrt{6}\\)",
      "\\(2\\)"
    ],
    "a": 0,
    "h": "Apply the identity \\((a - b)^2 = a^2 - 2ab + b^2\\).",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square expansion identity \\((a - b)^2 = a^2 - 2ab + b^2\\), where \\(a = \\sqrt{6}\\) and \\(b = 2\\).",
        "workingOut": "(\\sqrt{6})^2 - 2(\\sqrt{6})(2) + 2^2"
      },
      {
        "explanation": "Evaluate the terms in the expansion.",
        "workingOut": "6 - 4\\sqrt{6} + 4"
      },
      {
        "explanation": "Combine the constant integers.",
        "workingOut": "10 - 4\\sqrt{6}"
      }
    ]
  },
  {
    "id": "s2e_7",
    "c": "2E",
    "t": "Binomial expansion of surds",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Expand: \\((3 + 2\\sqrt{2})^2\\).",
    "opts": [
      "\\(17 + 12\\sqrt{2}\\)",
      "\\(11 + 12\\sqrt{2}\\)",
      "\\(17 + 6\\sqrt{2}\\)",
      "\\(25\\)"
    ],
    "a": 0,
    "h": "Apply the perfect square expansion identity \\((a + b)^2 = a^2 + 2ab + b^2\\).",
    "solutionSteps": [
      {
        "explanation": "Use the perfect square expansion identity \\((a + b)^2 = a^2 + 2ab + b^2\\) where \\(a = 3\\) and \\(b = 2\\sqrt{2}\\).",
        "workingOut": "3^2 + 2(3)(2\\sqrt{2}) + (2\\sqrt{2})^2"
      },
      {
        "explanation": "Evaluate each term in the expansion. Note that \\((2\\sqrt{2})^2 = 4 \\times 2 = 8\\).",
        "workingOut": "9 + 12\\sqrt{2} + 8"
      },
      {
        "explanation": "Add the constant values together to get the final simplified expression.",
        "workingOut": "17 + 12\\sqrt{2}"
      }
    ]
  },
  {
    "id": "s2e_8",
    "c": "2E",
    "t": "Binomial expansion of surds",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Expand and simplify: \\((\\sqrt{5} + 2)(3 - \\sqrt{5})\\).",
    "opts": [
      "\\(\\sqrt{5} + 1\\)",
      "\\(\\sqrt{5} - 1\\)",
      "\\(3\\sqrt{5} - 5 + 6 - 2\\sqrt{5}\\)",
      "\\(11\\)"
    ],
    "a": 0,
    "h": "Apply FOIL and combine the rational parts and the surd parts.",
    "solutionSteps": [
      {
        "explanation": "Use the FOIL method to expand the product of these brackets.",
        "workingOut": "(\\sqrt{5})(3) - (\\sqrt{5})(\\sqrt{5}) + (2)(3) - (2)(\\sqrt{5})"
      },
      {
        "explanation": "Simplify each individual term in the expansion.",
        "workingOut": "3\\sqrt{5} - 5 + 6 - 2\\sqrt{5}"
      },
      {
        "explanation": "Combine the constant integers and group the like surd terms.",
        "workingOut": "(-5 + 6) + (3\\sqrt{5} - 2\\sqrt{5})"
      },
      {
        "explanation": "Simplify to get the final result.",
        "workingOut": "1 + \\sqrt{5}"
      }
    ]
  },
  {
    "id": "s2e_9",
    "c": "2E",
    "t": "Binomial expansion of surds",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Expand: \\((2\\sqrt{3} - 1)(3\\sqrt{3} + 5)\\).",
    "opts": [
      "\\(13 + 7\\sqrt{3}\\)",
      "\\(18 + 7\\sqrt{3} - 5\\)",
      "\\(23 + 7\\sqrt{3}\\)",
      "\\(13 - 7\\sqrt{3}\\)"
    ],
    "a": 0,
    "h": "Apply FOIL, then simplify the product of the square roots.",
    "solutionSteps": [
      {
        "explanation": "Apply the FOIL method to expand the brackets.",
        "workingOut": "(2\\sqrt{3})(3\\sqrt{3}) + (2\\sqrt{3})(5) - (1)(3\\sqrt{3}) - (1)(5)"
      },
      {
        "explanation": "Evaluate the terms in the expression.",
        "workingOut": "(6 \\times 3) + 10\\sqrt{3} - 3\\sqrt{3} - 5"
      },
      {
        "explanation": "Multiply the integers and combine the like surd terms.",
        "workingOut": "18 + 7\\sqrt{3} - 5"
      },
      {
        "explanation": "Combine the constant integers to find the final simplified form.",
        "workingOut": "13 + 7\\sqrt{3}"
      }
    ]
  },
  {
    "id": "s2e_10",
    "c": "2E",
    "t": "Binomial expansion of surds",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Expand: \\((\\sqrt{10} - 3)(\\sqrt{10} + 3)\\).",
    "opts": [
      "\\(1\\)",
      "\\(7\\)",
      "\\(19\\)",
      "\\(10 - 9\\)"
    ],
    "a": 0,
    "h": "Use the difference of squares identity.",
    "solutionSteps": [
      {
        "explanation": "Apply the difference of squares identity \\((a - b)(a + b) = a^2 - b^2\\) where \\(a = \\sqrt{10}\\) and \\(b = 3\\).",
        "workingOut": "(\\sqrt{10})^2 - 3^2"
      },
      {
        "explanation": "Evaluate the squared values.",
        "workingOut": "10 - 9"
      },
      {
        "explanation": "Subtract to obtain the final simplified answer.",
        "workingOut": "1"
      }
    ]
  },
  {
    "id": "s2e_11",
    "c": "2E",
    "t": "Binomial expansion of surds",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Expand: \\((\\sqrt{7} - 2)^2\\).",
    "opts": [
      "\\(11 - 4\\sqrt{7}\\)",
      "\\(9 - 4\\sqrt{7}\\)",
      "\\(11 + 4\\sqrt{7}\\)",
      "\\(3\\)"
    ],
    "a": 0,
    "h": "Apply the identity \\((a - b)^2 = a^2 - 2ab + b^2\\).",
    "solutionSteps": [
      {
        "explanation": "Use the perfect square expansion identity \\((a - b)^2 = a^2 - 2ab + b^2\\) with \\(a = \\sqrt{7}\\) and \\(b = 2\\).",
        "workingOut": "(\\sqrt{7})^2 - 2(\\sqrt{7})(2) + 2^2"
      },
      {
        "explanation": "Simplify each term in the expansion.",
        "workingOut": "7 - 4\\sqrt{7} + 4"
      },
      {
        "explanation": "Sum the constant integers.",
        "workingOut": "11 - 4\\sqrt{7}"
      }
    ]
  },
  {
    "id": "s2e_12",
    "c": "2E",
    "t": "Binomial expansion of surds",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Expand: \\((\\sqrt{5} + \\sqrt{2})^2\\).",
    "opts": [
      "\\(7 + 2\\sqrt{10}\\)",
      "\\(5 + 2\\)",
      "\\(7 + \\sqrt{10}\\)",
      "\\(9\\)"
    ],
    "a": 0,
    "h": "Apply the identity \\((a + b)^2 = a^2 + 2ab + b^2\\).",
    "solutionSteps": [
      {
        "explanation": "Use the perfect square expansion identity \\((a + b)^2 = a^2 + 2ab + b^2\\) with \\(a = \\sqrt{5}\\) and \\(b = \\sqrt{2}\\).",
        "workingOut": "(\\sqrt{5})^2 + 2(\\sqrt{5})(\\sqrt{2}) + (\\sqrt{2})^2"
      },
      {
        "explanation": "Evaluate the square terms and simplify the product inside the square root.",
        "workingOut": "5 + 2\\sqrt{10} + 2"
      },
      {
        "explanation": "Add the constant values together.",
        "workingOut": "7 + 2\\sqrt{10}"
      }
    ]
  },
  {
    "id": "s2e_13",
    "c": "2E",
    "t": "Binomial expansion of surds",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Expand: \\((4 - 3\\sqrt{2})^2\\).",
    "opts": [
      "\\(34 - 24\\sqrt{2}\\)",
      "\\(16 - 18 + 24\\sqrt{2}\\)",
      "\\(22 - 24\\sqrt{2}\\)",
      "\\(16 - 24\\sqrt{2} + 18\\)"
    ],
    "a": 0,
    "h": "Apply the identity \\((a - b)^2 = a^2 - 2ab + b^2\\).",
    "solutionSteps": [
      {
        "explanation": "Use the perfect square expansion identity \\((a - b)^2 = a^2 - 2ab + b^2\\) with \\(a = 4\\) and \\(b = 3\\sqrt{2}\\).",
        "workingOut": "4^2 - 2(4)(3\\sqrt{2}) + (3\\sqrt{2})^2"
      },
      {
        "explanation": "Evaluate each term. Note that \\((3\\sqrt{2})^2 = 9 \\times 2 = 18\\).",
        "workingOut": "16 - 24\\sqrt{2} + 18"
      },
      {
        "explanation": "Combine the constant integers.",
        "workingOut": "34 - 24\\sqrt{2}"
      }
    ]
  },

  // 2D & 2F: Rationalizing (Q11-Q13, Q15, Q17)
  {
    "id": "s2f_1",
    "c": "2D",
    "t": "Rationalising the denominator",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Rationalize \\(\\frac{5}{\\sqrt{7}}\\).",
    "opts": [
      "\\(\\frac{5\\sqrt{7}}{7}\\)",
      "\\(\\frac{\\sqrt{35}}{7}\\)",
      "\\(\\frac{5}{7}\\)",
      "\\(5\\sqrt{7}\\)"
    ],
    "a": 0,
    "h": "Multiply the numerator and denominator by \\(\\sqrt{7}\\).",
    "solutionSteps": [
      {
        "explanation": "To eliminate the square root from the denominator, multiply both the numerator and the denominator by the same square root term \\(\\sqrt{7}\\).",
        "workingOut": "\\frac{5}{\\sqrt{7}} \\times \\frac{\\sqrt{7}}{\\sqrt{7}}"
      },
      {
        "explanation": "Multiply the numerators together and the denominators together.",
        "workingOut": "\\frac{5 \\times \\sqrt{7}}{\\sqrt{7} \\times \\sqrt{7}}"
      },
      {
        "explanation": "Simplify the denominator. A square root multiplied by itself gives the original value.",
        "workingOut": "\\frac{5\\sqrt{7}}{7}"
      }
    ]
  },
  {
    "id": "s2f_2",
    "c": "2D",
    "t": "Rationalising the denominator",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Rationalize \\(\\frac{\\sqrt{3}}{2\\sqrt{5}}\\).",
    "opts": [
      "\\(\\frac{\\sqrt{15}}{10}\\)",
      "\\(\\frac{\\sqrt{3}}{10}\\)",
      "\\(\\frac{3}{10}\\)",
      "\\(\\frac{\\sqrt{15}}{5}\\)"
    ],
    "a": 0,
    "h": "Multiply both numerator and denominator by \\(\\sqrt{5}\\).",
    "solutionSteps": [
      {
        "explanation": "To rationalize the denominator, multiply the numerator and the denominator by \\(\\sqrt{5}\\).",
        "workingOut": "\\frac{\\sqrt{3}}{2\\sqrt{5}} \\times \\frac{\\sqrt{5}}{\\sqrt{5}}"
      },
      {
        "explanation": "Multiply the numerators and combine them under a single radical, and multiply the denominators.",
        "workingOut": "\\frac{\\sqrt{3 \\times 5}}{2 \\times (\\sqrt{5} \\times \\sqrt{5})} = \\frac{\\sqrt{15}}{2 \\times 5}"
      },
      {
        "explanation": "Evaluate the product in the denominator.",
        "workingOut": "\\frac{\\sqrt{15}}{10}"
      }
    ]
  },
  {
    "id": "s2f_3",
    "c": "2F",
    "t": "Further rationalising the denominator",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Rationalize \\(\\frac{1}{\\sqrt{5} + 2}\\).",
    "opts": [
      "\\(\\sqrt{5} - 2\\)",
      "\\(\\frac{\\sqrt{5}-2}{1}\\)",
      "\\(\\sqrt{5} + 2\\)",
      "\\(\\frac{1}{\\sqrt{5}-2}\\)"
    ],
    "a": 0,
    "h": "Multiply both numerator and denominator by the conjugate \\(\\sqrt{5} - 2\\).",
    "solutionSteps": [
      {
        "explanation": "To rationalize a binomial denominator, multiply the numerator and the denominator by its conjugate. The conjugate of \\(\\sqrt{5} + 2\\) is \\(\\sqrt{5} - 2\\).",
        "workingOut": "\\frac{1}{\\sqrt{5} + 2} \\times \\frac{\\sqrt{5} - 2}{\\sqrt{5} - 2}"
      },
      {
        "explanation": "Multiply the numerators and use the difference of squares identity \\((a+b)(a-b) = a^2 - b^2\\) to simplify the denominator.",
        "workingOut": "\\frac{\\sqrt{5} - 2}{(\\sqrt{5})^2 - 2^2}"
      },
      {
        "explanation": "Evaluate the squared values in the denominator.",
        "workingOut": "\\frac{\\sqrt{5} - 2}{5 - 4}"
      },
      {
        "explanation": "Simplify the denominator and write down the final expression.",
        "workingOut": "\\frac{\\sqrt{5} - 2}{1} = \\sqrt{5} - 2"
      }
    ]
  },
  {
    "id": "s2f_4",
    "c": "2F",
    "t": "Further rationalising the denominator",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Rationalize \\(\\frac{6}{\\sqrt{5} - \\sqrt{2}}\\).",
    "opts": [
      "\\(2(\\sqrt{5} + \\sqrt{2})\\)",
      "\\(\\frac{6(\\sqrt{5}+\\sqrt{2})}{3}\\)",
      "\\(3(\\sqrt{5} + \\sqrt{2})\\)",
      "\\(2\\sqrt{5} + 2\\sqrt{2}\\)"
    ],
    "a": 0,
    "h": "Multiply by the conjugate \\(\\sqrt{5} + \\sqrt{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Multiply the numerator and the denominator by the conjugate of the denominator, which is \\(\\sqrt{5} + \\sqrt{2}\\).",
        "workingOut": "\\frac{6}{\\sqrt{5} - \\sqrt{2}} \\times \\frac{\\sqrt{5} + \\sqrt{2}}{\\sqrt{5} + \\sqrt{2}}"
      },
      {
        "explanation": "Multiply the terms, using the difference of squares identity in the denominator.",
        "workingOut": "\\frac{6(\\sqrt{5} + \\sqrt{2})}{(\\sqrt{5})^2 - (\\sqrt{2})^2}"
      },
      {
        "explanation": "Evaluate the squares in the denominator.",
        "workingOut": "\\frac{6(\\sqrt{5} + \\sqrt{2})}{5 - 2} = \\frac{6(\\sqrt{5} + \\sqrt{2})}{3}"
      },
      {
        "explanation": "Divide the numerator coefficient by the denominator to simplify.",
        "workingOut": "2(\\sqrt{5} + \\sqrt{2})"
      }
    ]
  },
  {
    "id": "s2f_5",
    "c": "2F",
    "t": "Further rationalising the denominator",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Rationalize \\(\\frac{\\sqrt{2}}{\\sqrt{6} + 2}\\).",
    "opts": [
      "\\(\\sqrt{3} - \\sqrt{2}\\)",
      "\\(\\frac{2\\sqrt{3} - 2\\sqrt{2}}{2}\\)",
      "\\(\\frac{\\sqrt{12} - 2\\sqrt{2}}{2}\\)",
      "\\(\\frac{\\sqrt{12} + 2\\sqrt{2}}{2}\\)"
    ],
    "a": 0,
    "h": "Multiply by the conjugate \\(\\sqrt{6} - 2\\), then simplify \\(\\sqrt{12}\\).",
    "solutionSteps": [
      {
        "explanation": "Multiply the numerator and the denominator by the conjugate of the denominator, which is \\(\\sqrt{6} - 2\\).",
        "workingOut": "\\frac{\\sqrt{2}}{\\sqrt{6} + 2} \\times \\frac{\\sqrt{6} - 2}{\\sqrt{6} - 2}"
      },
      {
        "explanation": "Multiply the terms. Expand the numerator and apply difference of squares to the denominator.",
        "workingOut": "\\frac{\\sqrt{2} \\times \\sqrt{6} - 2\\sqrt{2}}{(\\sqrt{6})^2 - 2^2} = \\frac{\\sqrt{12} - 2\\sqrt{2}}{6 - 4}"
      },
      {
        "explanation": "Simplify the denominator and factor \\(\\sqrt{12}\\) in the numerator.",
        "workingOut": "\\frac{2\\sqrt{3} - 2\\sqrt{2}}{2}"
      },
      {
        "explanation": "Divide both terms in the numerator by the denominator 2.",
        "workingOut": "\\sqrt{3} - \\sqrt{2}"
      }
    ]
  },
  {
    "id": "s2f_6",
    "c": "2F",
    "t": "Further rationalising the denominator",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Simplify \\(\\frac{3}{\\sqrt{5}-2} + \\frac{3}{\\sqrt{5}+2}\\).",
    "opts": [
      "\\(6\\sqrt{5}\\)",
      "\\(12\\)",
      "\\(6\\)",
      "\\(2\\sqrt{5}\\)"
    ],
    "a": 0,
    "h": "Find a common denominator, which is the product of the two denominators.",
    "solutionSteps": [
      {
        "explanation": "To add the fractions, find a common denominator by multiplying the two denominators.",
        "workingOut": "\\frac{3(\\sqrt{5} + 2) + 3(\\sqrt{5} - 2)}{(\\sqrt{5} - 2)(\\sqrt{5} + 2)}"
      },
      {
        "explanation": "Expand the numerator and simplify the denominator using difference of squares.",
        "workingOut": "\\frac{3\\sqrt{5} + 6 + 3\\sqrt{5} - 6}{(\\sqrt{5})^2 - 2^2}"
      },
      {
        "explanation": "Combine the constant integers and the like surds in the numerator, and evaluate the denominator.",
        "workingOut": "\\frac{6\\sqrt{5}}{5 - 4}"
      },
      {
        "explanation": "Simplify the fraction.",
        "workingOut": "\\frac{6\\sqrt{5}}{1} = 6\\sqrt{5}"
      }
    ]
  },
  {
    "id": "s2f_7",
    "c": "2F",
    "t": "Further rationalising the denominator",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Rationalize \\(\\frac{\\sqrt{7} - \\sqrt{5}}{\\sqrt{7} + \\sqrt{5}}\\).",
    "opts": [
      "\\(6 - \\sqrt{35}\\)",
      "\\(12 - 2\\sqrt{35}\\)",
      "\\(\\frac{12-2\\sqrt{35}}{2}\\)",
      "\\(1\\)"
    ],
    "a": 0,
    "h": "Multiply both numerator and denominator by the conjugate \\(\\sqrt{7} - \\sqrt{5}\\).",
    "solutionSteps": [
      {
        "explanation": "Multiply the numerator and the denominator by the conjugate \\(\\sqrt{7} - \\sqrt{5}\\).",
        "workingOut": "\\frac{\\sqrt{7} - \\sqrt{5}}{\\sqrt{7} + \\sqrt{5}} \\times \\frac{\\sqrt{7} - \\sqrt{5}}{\\sqrt{7} - \\sqrt{5}}"
      },
      {
        "explanation": "Expand the numerator using perfect square rules and simplify the denominator using the difference of squares.",
        "workingOut": "\\frac{(\\sqrt{7})^2 - 2\\sqrt{7}\\sqrt{5} + (\\sqrt{5})^2}{(\\sqrt{7})^2 - (\\sqrt{5})^2}"
      },
      {
        "explanation": "Evaluate the terms in the numerator and denominator.",
        "workingOut": "\\frac{7 - 2\\sqrt{35} + 5}{7 - 5} = \\frac{12 - 2\\sqrt{35}}{2}"
      },
      {
        "explanation": "Simplify the fraction by dividing both terms in the numerator by the denominator 2.",
        "workingOut": "6 - \\sqrt{35}"
      }
    ]
  },
  {
    "id": "s2f_8",
    "c": "2F",
    "t": "Further rationalising the denominator",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Rationalize \\(\\frac{3\\sqrt{2} + 1}{3\\sqrt{2} - 1}\\).",
    "opts": [
      "\\(\\frac{19 + 6\\sqrt{2}}{17}\\)",
      "\\(\\frac{19 - 6\\sqrt{2}}{17}\\)",
      "\\(\\frac{17 + 6\\sqrt{2}}{19}\\)",
      "\\(1\\)"
    ],
    "a": 0,
    "h": "Multiply numerator and denominator by the conjugate \\(3\\sqrt{2} + 1\\).",
    "solutionSteps": [
      {
        "explanation": "Multiply the numerator and the denominator by the conjugate \\(3\\sqrt{2} + 1\\).",
        "workingOut": "\\frac{3\\sqrt{2} + 1}{3\\sqrt{2} - 1} \\times \\frac{3\\sqrt{2} + 1}{3\\sqrt{2} + 1}"
      },
      {
        "explanation": "Expand the numerator and apply the difference of squares to the denominator.",
        "workingOut": "\\frac{(3\\sqrt{2})^2 + 2(3\\sqrt{2})(1) + 1^2}{(3\\sqrt{2})^2 - 1^2}"
      },
      {
        "explanation": "Calculate the squares. Note that \\((3\\sqrt{2})^2 = 9 \\times 2 = 18\\).",
        "workingOut": "\\frac{18 + 6\\sqrt{2} + 1}{18 - 1}"
      },
      {
        "explanation": "Combine the constant integers to find the final simplified expression.",
        "workingOut": "\\frac{19 + 6\\sqrt{2}}{17}"
      }
    ]
  },
  {
    "id": "s2f_9",
    "c": "2D",
    "t": "Rationalising the denominator",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Rationalize \\(\\frac{1}{\\sqrt{5}}\\).",
    "opts": [
      "\\(\\frac{\\sqrt{5}}{5}\\)",
      "\\(\\sqrt{5}\\)",
      "\\(\\frac{1}{5}\\)",
      "\\(\\frac{5}{\\sqrt{5}}\\)"
    ],
    "a": 0,
    "h": "Multiply the top and bottom by \\(\\sqrt{5}\\).",
    "solutionSteps": [
      {
        "explanation": "Multiply both the numerator and denominator by the radical term \\(\\sqrt{5}\\).",
        "workingOut": "\\frac{1}{\\sqrt{5}} \\times \\frac{\\sqrt{5}}{\\sqrt{5}}"
      },
      {
        "explanation": "Multiply the numerators and the denominators together.",
        "workingOut": "\\frac{1 \\times \\sqrt{5}}{\\sqrt{5} \\times \\sqrt{5}}"
      },
      {
        "explanation": "Simplify the product in the denominator to get the rationalized result.",
        "workingOut": "\\frac{\\sqrt{5}}{5}"
      }
    ]
  },
  {
    "id": "s2f_10",
    "c": "2D",
    "t": "Rationalising the denominator",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Rationalize \\(\\frac{3}{\\sqrt{2}}\\).",
    "opts": [
      "\\(\\frac{3\\sqrt{2}}{2}\\)",
      "\\(3\\sqrt{2}\\)",
      "\\(\\frac{\\sqrt{6}}{2}\\)",
      "\\(\\frac{2\\sqrt{3}}{3}\\)"
    ],
    "a": 0,
    "h": "Multiply top and bottom by \\(\\sqrt{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Multiply both the numerator and denominator by \\(\\sqrt{2}\\).",
        "workingOut": "\\frac{3}{\\sqrt{2}} \\times \\frac{\\sqrt{2}}{\\sqrt{2}}"
      },
      {
        "explanation": "Combine the terms by multiplying numerators and denominators.",
        "workingOut": "\\frac{3 \\times \\sqrt{2}}{\\sqrt{2} \\times \\sqrt{2}}"
      },
      {
        "explanation": "Evaluate the denominator product to write the final simplified answer.",
        "workingOut": "\\frac{3\\sqrt{2}}{2}"
      }
    ]
  },
  {
    "id": "s2f_11",
    "c": "2D",
    "t": "Rationalising the denominator",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Rationalize \\(\\frac{1}{5\\sqrt{3}}\\).",
    "opts": [
      "\\(\\frac{\\sqrt{3}}{15}\\)",
      "\\(\\frac{5\\sqrt{3}}{15}\\)",
      "\\(\\frac{\\sqrt{3}}{5}\\)",
      "\\(\\frac{1}{15}\\)"
    ],
    "a": 0,
    "h": "Multiply top and bottom by \\(\\sqrt{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Multiply the numerator and denominator by \\(\\sqrt{3}\\) to remove the root from the denominator.",
        "workingOut": "\\frac{1}{5\\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}}"
      },
      {
        "explanation": "Multiply the terms together.",
        "workingOut": "\\frac{1 \\times \\sqrt{3}}{5 \\times (\\sqrt{3} \\times \\sqrt{3})} = \\frac{\\sqrt{3}}{5 \\times 3}"
      },
      {
        "explanation": "Evaluate the product in the denominator.",
        "workingOut": "\\frac{\\sqrt{3}}{15}"
      }
    ]
  },
  {
    "id": "s2f_12",
    "c": "2F",
    "t": "Further rationalising the denominator",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Rationalize \\(\\frac{1}{\\sqrt{5} + \\sqrt{2}}\\).",
    "opts": [
      "\\(\\frac{\\sqrt{5} - \\sqrt{2}}{3}\\)",
      "\\(\\frac{\\sqrt{5} + \\sqrt{2}}{3}\\)",
      "\\(\\sqrt{5} - \\sqrt{2}\\)",
      "\\(\\frac{\\sqrt{3}}{3}\\)"
    ],
    "a": 0,
    "h": "Multiply top and bottom by the conjugate \\(\\sqrt{5} - \\sqrt{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Multiply the numerator and the denominator by the conjugate \\(\\sqrt{5} - \\sqrt{2}\\).",
        "workingOut": "\\frac{1}{\\sqrt{5} + \\sqrt{2}} \\times \\frac{\\sqrt{5} - \\sqrt{2}}{\\sqrt{5} - \\sqrt{2}}"
      },
      {
        "explanation": "Multiply the terms, using the difference of squares property in the denominator.",
        "workingOut": "\\frac{\\sqrt{5} - \\sqrt{2}}{(\\sqrt{5})^2 - (\\sqrt{2})^2}"
      },
      {
        "explanation": "Evaluate the squares in the denominator to find the final simplified answer.",
        "workingOut": "\\frac{\\sqrt{5} - \\sqrt{2}}{5 - 2} = \\frac{\\sqrt{5} - \\sqrt{2}}{3}"
      }
    ]
  },
  {
    "id": "s2f_13",
    "c": "2F",
    "t": "Further rationalising the denominator",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Rationalize \\(\\frac{\\sqrt{3}}{\\sqrt{3} + 1}\\).",
    "opts": [
      "\\(\\frac{3 - \\sqrt{3}}{2}\\)",
      "\\(\\frac{3 + \\sqrt{3}}{2}\\)",
      "\\(1 - \\sqrt{3}\\)",
      "\\(\\frac{\\sqrt{3}-3}{2}\\)"
    ],
    "a": 0,
    "h": "Multiply top and bottom by the conjugate \\(\\sqrt{3} - 1\\).",
    "solutionSteps": [
      {
        "explanation": "Multiply the numerator and the denominator by the conjugate \\(\\sqrt{3} - 1\\).",
        "workingOut": "\\frac{\\sqrt{3}}{\\sqrt{3} + 1} \\times \\frac{\\sqrt{3} - 1}{\\sqrt{3} - 1}"
      },
      {
        "explanation": "Expand the numerator and apply difference of squares to the denominator.",
        "workingOut": "\\frac{\\sqrt{3} \\times \\sqrt{3} - \\sqrt{3}}{(\\sqrt{3})^2 - 1^2}"
      },
      {
        "explanation": "Simplify the products and evaluate the denominator.",
        "workingOut": "\\frac{3 - \\sqrt{3}}{3 - 1}"
      },
      {
        "explanation": "Write down the final expression.",
        "workingOut": "\\frac{3 - \\sqrt{3}}{2}"
      }
    ]
  },
  {
    "id": "s2f_14",
    "c": "2F",
    "t": "Further rationalising the denominator",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Rationalize \\(\\frac{3\\sqrt{7}}{2\\sqrt{5} - \\sqrt{7}}\\).",
    "opts": [
      "\\(\\frac{6\\sqrt{35} + 21}{13}\\)",
      "\\(\\frac{6\\sqrt{35} - 21}{13}\\)",
      "\\(\\frac{3\\sqrt{35} + 21}{13}\\)",
      "\\(21\\)"
    ],
    "a": 0,
    "h": "Multiply top and bottom by the conjugate \\(2\\sqrt{5} + \\sqrt{7}\\).",
    "solutionSteps": [
      {
        "explanation": "Multiply the numerator and the denominator by the conjugate \\(2\\sqrt{5} + \\sqrt{7}\\).",
        "workingOut": "\\frac{3\\sqrt{7}}{2\\sqrt{5} - \\sqrt{7}} \\times \\frac{2\\sqrt{5} + \\sqrt{7}}{2\\sqrt{5} + \\sqrt{7}}"
      },
      {
        "explanation": "Expand the numerator and apply the difference of squares to the denominator.",
        "workingOut": "\\frac{3\\sqrt{7} \\times 2\\sqrt{5} + 3\\sqrt{7} \\times \\sqrt{7}}{(2\\sqrt{5})^2 - (\\sqrt{7})^2}"
      },
      {
        "explanation": "Evaluate the terms. Note that \\((2\\sqrt{5})^2 = 4 \\times 5 = 20\\).",
        "workingOut": "\\frac{6\\sqrt{35} + 3 \\times 7}{20 - 7}"
      },
      {
        "explanation": "Simplify the expression to find the final simplified fraction.",
        "workingOut": "\\frac{6\\sqrt{35} + 21}{13}"
      }
    ]
  },

  // 2G: Equations (Q14, Q16)
  {
    "id": "s2g_1",
    "c": "2G",
    "t": "Surd equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Find \\(x\\) if \\(\\sqrt{12} + \\sqrt{27} = \\sqrt{x}\\).",
    "opts": [
      "\\(75\\)",
      "\\(39\\)",
      "\\(15\\)",
      "\\(45\\)"
    ],
    "a": 0,
    "h": "Simplify both surds on the left hand side first.",
    "solutionSteps": [
      {
        "explanation": "First, simplify the two radical terms on the left side of the equation.",
        "workingOut": "\\sqrt{12} + \\sqrt{27} = \\sqrt{x}"
      },
      {
        "explanation": "Simplify \\(\\sqrt{12}\\) by factoring out 4, and simplify \\(\\sqrt{27}\\) by factoring out 9.",
        "workingOut": "\\sqrt{4 \\times 3} + \\sqrt{9 \\times 3} = 2\\sqrt{3} + 3\\sqrt{3}"
      },
      {
        "explanation": "Add the simplified like terms together.",
        "workingOut": "5\\sqrt{3} = \\sqrt{x}"
      },
      {
        "explanation": "To find \\(x\\), convert the coefficient 5 back inside the square root by squaring it.",
        "workingOut": "5\\sqrt{3} = \\sqrt{5^2 \\times 3} = \\sqrt{25 \\times 3} = \\sqrt{75}"
      },
      {
        "explanation": "Equate the values inside the square roots to solve for \\(x\\).",
        "workingOut": "x = 75"
      }
    ]
  },
  {
    "id": "s2g_2",
    "c": "2G",
    "t": "Surd equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Find \\(x\\) if \\(\\sqrt{18} + \\sqrt{50} = \\sqrt{x}\\).",
    "opts": [
      "\\(128\\)",
      "\\(68\\)",
      "\\(32\\)",
      "\\(98\\)"
    ],
    "a": 0,
    "h": "Simplify the surds on the left, add them, and then convert to a single radical.",
    "solutionSteps": [
      {
        "explanation": "Analyze the equation and plan to simplify the left-hand side.",
        "workingOut": "\\sqrt{18} + \\sqrt{50} = \\sqrt{x}"
      },
      {
        "explanation": "Simplify \\(\\sqrt{18}\\) using 9, and simplify \\(\\sqrt{50}\\) using 25.",
        "workingOut": "\\sqrt{9 \\times 2} + \\sqrt{25 \\times 2} = 3\\sqrt{2} + 5\\sqrt{2}"
      },
      {
        "explanation": "Sum the like terms.",
        "workingOut": "8\\sqrt{2} = \\sqrt{x}"
      },
      {
        "explanation": "Move the coefficient 8 inside the square root by squaring it.",
        "workingOut": "\\sqrt{8^2 \\times 2} = \\sqrt{64 \\times 2} = \\sqrt{128}"
      },
      {
        "explanation": "Equate the terms under the square root to solve for \\(x\\).",
        "workingOut": "x = 128"
      }
    ]
  },
  {
    "id": "s2g_3",
    "c": "2G",
    "t": "Surd equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Find \\(a\\) and \\(b\\) if \\(\\frac{2}{\\sqrt{3}-1} = a + b\\sqrt{3}\\).",
    "opts": [
      "\\(a=1, b=1\\)",
      "\\(a=2, b=1\\)",
      "\\(a=1, b=2\\)",
      "\\(a=1, b=-1\\)"
    ],
    "a": 0,
    "h": "Rationalize the left hand side first, then equate coefficients.",
    "solutionSteps": [
      {
        "explanation": "To solve for \\(a\\) and \\(b\\), we must first rationalize the denominator of the fraction on the left side.",
        "workingOut": "\\frac{2}{\\sqrt{3}-1}"
      },
      {
        "explanation": "Multiply the numerator and denominator by the conjugate \\(\\sqrt{3} + 1\\).",
        "workingOut": "\\frac{2(\\sqrt{3}+1)}{(\\sqrt{3}-1)(\\sqrt{3}+1)} = \\frac{2(\\sqrt{3}+1)}{(\\sqrt{3})^2 - 1^2}"
      },
      {
        "explanation": "Evaluate the denominator and simplify the fraction.",
        "workingOut": "\\frac{2(\\sqrt{3}+1)}{3-1} = \\frac{2(\\sqrt{3}+1)}{2} = 1 + \\sqrt{3}"
      },
      {
        "explanation": "Equate the rationalized expression to the right-hand side \\(a + b\\sqrt{3}\\) to find \\(a\\) and \\(b\\).",
        "workingOut": "1 + 1\\sqrt{3} = a + b\\sqrt{3} \\implies a=1, \\quad b=1"
      }
    ]
  },
  {
    "id": "s2g_4",
    "c": "2G",
    "t": "Surd equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Find \\(p\\) and \\(q\\) if \\(\\frac{\\sqrt{5}}{\\sqrt{5}-2} = p + q\\sqrt{5}\\).",
    "opts": [
      "\\(p=5, q=2\\)",
      "\\(p=10, q=2\\)",
      "\\(p=5, q=1\\)",
      "\\(p=2, q=1\\)"
    ],
    "a": 0,
    "h": "Rationalize the left hand side first, then equate coefficients.",
    "solutionSteps": [
      {
        "explanation": "Rationalize the denominator of the fraction on the left side.",
        "workingOut": "\\frac{\\sqrt{5}}{\\sqrt{5}-2}"
      },
      {
        "explanation": "Multiply the numerator and denominator by the conjugate \\(\\sqrt{5} + 2\\).",
        "workingOut": "\\frac{\\sqrt{5}(\\sqrt{5}+2)}{(\\sqrt{5}-2)(\\sqrt{5}+2)} = \\frac{\\sqrt{5} \\times \\sqrt{5} + 2\\sqrt{5}}{(\\sqrt{5})^2 - 2^2}"
      },
      {
        "explanation": "Evaluate the numerator and denominator.",
        "workingOut": "\\frac{5 + 2\\sqrt{5}}{5 - 4} = \\frac{5 + 2\\sqrt{5}}{1} = 5 + 2\\sqrt{5}"
      },
      {
        "explanation": "Equate this expression to \\(p + q\\sqrt{5}\\) to solve for \\(p\\) and \\(q\\).",
        "workingOut": "5 + 2\\sqrt{5} = p + q\\sqrt{5} \\implies p=5, \\quad q=2"
      }
    ]
  },
  {
    "id": "s2g_5",
    "c": "2G",
    "t": "Surd equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "If \\(\\sqrt{20} + \\sqrt{45} = \\sqrt{x}\\), find \\(x\\).",
    "opts": [
      "\\(125\\)",
      "\\(65\\)",
      "\\(25\\)",
      "\\(100\\)"
    ],
    "a": 0,
    "h": "Simplify both surds on the left hand side first, then combine.",
    "solutionSteps": [
      {
        "explanation": "Analyze the equation and plan to simplify the left-hand side.",
        "workingOut": "\\sqrt{20} + \\sqrt{45} = \\sqrt{x}"
      },
      {
        "explanation": "Simplify \\(\\sqrt{20}\\) using 4, and simplify \\(\\sqrt{45}\\) using 9.",
        "workingOut": "\\sqrt{4 \\times 5} + \\sqrt{9 \\times 5} = 2\\sqrt{5} + 3\\sqrt{5}"
      },
      {
        "explanation": "Sum the like terms.",
        "workingOut": "5\\sqrt{5} = \\sqrt{x}"
      },
      {
        "explanation": "Move the coefficient 5 inside the square root by squaring it.",
        "workingOut": "\\sqrt{5^2 \\times 5} = \\sqrt{25 \\times 5} = \\sqrt{125}"
      },
      {
        "explanation": "Equate the terms under the square root to solve for \\(x\\).",
        "workingOut": "x = 125"
      }
    ]
  },

  // 2A: Pythagoras Theorem Applications (Appended)
  {
    "id": "y9-2a-1a",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "A right-angled triangle has two shorter sides of length 9 cm and 12 cm. Use Pythagoras' theorem to find the length of the hypotenuse \\(c\\).",
    "a": 0,
    "opts": ["\\(15\\text{ cm}\\)", "\\(21\\text{ cm}\\)", "\\(13\\text{ cm}\\)", "\\(17\\text{ cm}\\)"],
    "h": "Use Pythagoras' theorem \\(a^2 + b^2 = c^2\\).",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "State the given values of the shorter sides and write down Pythagoras' theorem formula.",
        "workingOut": "a = 9, \\quad b = 12 \\implies a^2 + b^2 = c^2"
      },
      {
        "explanation": "Substitute the side lengths into the theorem and calculate the squares of the sides.",
        "workingOut": "c^2 = 9^2 + 12^2 = 81 + 144"
      },
      {
        "explanation": "Add the squared values together to obtain the square of the hypotenuse.",
        "workingOut": "c^2 = 225"
      },
      {
        "explanation": "Take the square root of both sides of the equation to find the positive length of the hypotenuse.",
        "workingOut": "c = \\sqrt{225} = 15"
      }
    ]
  },
  {
    "id": "y9-2a-1b",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "A right-angled triangle has two shorter sides of length 8 cm and 15 cm. Use Pythagoras' theorem to find the length of the hypotenuse \\(h\\).",
    "a": 0,
    "opts": ["\\(17\\text{ cm}\\)", "\\(23\\text{ cm}\\)", "\\(19\\text{ cm}\\)", "\\(16\\text{ cm}\\)"],
    "h": "Use Pythagoras' theorem \\(a^2 + b^2 = c^2\\).",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "State the given lengths of the perpendicular sides and recall Pythagoras' theorem.",
        "workingOut": "a = 8, \\quad b = 15 \\implies a^2 + b^2 = h^2"
      },
      {
        "explanation": "Substitute the values to calculate the sum of the squares of the shorter sides.",
        "workingOut": "h^2 = 8^2 + 15^2 = 64 + 225"
      },
      {
        "explanation": "Combine the values to find the squared value of the hypotenuse.",
        "workingOut": "h^2 = 289"
      },
      {
        "explanation": "Find the square root of the value to solve for the hypotenuse length.",
        "workingOut": "h = \\sqrt{289} = 17"
      }
    ]
  },
  {
    "id": "y9-2a-1c",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "A right-angled triangle has two shorter sides of length 1.5 cm and 2 cm. Use Pythagoras' theorem to find the length of the hypotenuse \\(p\\).",
    "a": 0,
    "opts": ["\\(2.5\\text{ cm}\\)", "\\(3.5\\text{ cm}\\)", "\\(2.25\\text{ cm}\\)", "\\(3.0\\text{ cm}\\)"],
    "h": "Use Pythagoras' theorem \\(a^2 + b^2 = c^2\\).",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Identify the perpendicular side lengths and set up Pythagoras' formula.",
        "workingOut": "a = 1.5, \\quad b = 2 \\implies a^2 + b^2 = p^2"
      },
      {
        "explanation": "Substitute the values to evaluate the squares.",
        "workingOut": "p^2 = 1.5^2 + 2^2 = 2.25 + 4"
      },
      {
        "explanation": "Sum the squared values to get the square of the hypotenuse.",
        "workingOut": "p^2 = 6.25"
      },
      {
        "explanation": "Solve for the hypotenuse by taking the square root.",
        "workingOut": "p = \\sqrt{6.25} = 2.5"
      }
    ]
  },
  {
    "id": "y9-2a-1d",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "A right-angled triangle has two shorter sides of length 20 cm and 21 cm. Use Pythagoras' theorem to find the length of the hypotenuse \\(m\\).",
    "a": 0,
    "opts": ["\\(29\\text{ cm}\\)", "\\(41\\text{ cm}\\)", "\\(31\\text{ cm}\\)", "\\(25\\text{ cm}\\)"],
    "h": "Use Pythagoras' theorem \\(a^2 + b^2 = c^2\\).",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "List the lengths of the two legs and write the equation for Pythagoras' theorem.",
        "workingOut": "a = 20, \\quad b = 21 \\implies a^2 + b^2 = m^2"
      },
      {
        "explanation": "Substitute the values to find the squared sum.",
        "workingOut": "m^2 = 20^2 + 21^2 = 400 + 441"
      },
      {
        "explanation": "Add the values together.",
        "workingOut": "m^2 = 841"
      },
      {
        "explanation": "Find the square root of the sum to find the hypotenuse.",
        "workingOut": "m = \\sqrt{841} = 29"
      }
    ]
  },
  {
    "id": "y9-2a-2a",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "A right-angled triangle has a hypotenuse of 13 cm and one shorter side of 5 cm. Use Pythagoras' theorem to find the length of the unknown side \\(k\\).",
    "a": 0,
    "opts": ["\\(12\\text{ cm}\\)", "\\(8\\text{ cm}\\)", "\\(14\\text{ cm}\\)", "\\(18\\text{ cm}\\)"],
    "h": "Use Pythagoras' theorem \\(a^2 + b^2 = c^2\\).",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Identify the hypotenuse and one leg, and set up the equation for the remaining leg.",
        "workingOut": "c = 13, \\quad a = 5 \\implies k^2 = c^2 - a^2"
      },
      {
        "explanation": "Substitute the values to calculate the squares of the sides.",
        "workingOut": "k^2 = 13^2 - 5^2 = 169 - 25"
      },
      {
        "explanation": "Subtract the squared leg from the squared hypotenuse.",
        "workingOut": "k^2 = 144"
      },
      {
        "explanation": "Take the square root to determine the length of the unknown leg.",
        "workingOut": "k = \\sqrt{144} = 12"
      }
    ]
  },
  {
    "id": "y9-2a-2b",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "A right-angled triangle has a hypotenuse of 25 cm and one shorter side of 24 cm. Use Pythagoras' theorem to find the length of the unknown side \\(w\\).",
    "a": 0,
    "opts": ["\\(7\\text{ cm}\\)", "\\(1\\text{ cm}\\)", "\\(12\\text{ cm}\\)", "\\(15\\text{ cm}\\)"],
    "h": "Use Pythagoras' theorem \\(a^2 + b^2 = c^2\\).",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Identify the hypotenuse and one leg, and set up the equation to find the other leg.",
        "workingOut": "c = 25, \\quad a = 24 \\implies w^2 = c^2 - a^2"
      },
      {
        "explanation": "Evaluate the squares of the known lengths.",
        "workingOut": "w^2 = 25^2 - 24^2 = 625 - 576"
      },
      {
        "explanation": "Perform the subtraction to get the square of the leg.",
        "workingOut": "w^2 = 49"
      },
      {
        "explanation": "Solve for the side length by taking the square root.",
        "workingOut": "w = \\sqrt{49} = 7"
      }
    ]
  },
  {
    "id": "y9-2a-2c",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "A right-angled triangle has a hypotenuse of 39 cm and one shorter side of 15 cm. Use Pythagoras' theorem to find the length of the unknown side \\(n\\).",
    "a": 0,
    "opts": ["\\(36\\text{ cm}\\)", "\\(24\\text{ cm}\\)", "\\(34\\text{ cm}\\)", "\\(20\\text{ cm}\\)"],
    "h": "Use Pythagoras' theorem \\(a^2 + b^2 = c^2\\).",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Set up the equation to solve for the missing shorter side.",
        "workingOut": "c = 39, \\quad a = 15 \\implies n^2 = c^2 - a^2"
      },
      {
        "explanation": "Calculate the squares of the hypotenuse and the known leg.",
        "workingOut": "n^2 = 39^2 - 15^2 = 1521 - 225"
      },
      {
        "explanation": "Subtract the squared leg from the squared hypotenuse.",
        "workingOut": "n^2 = 1296"
      },
      {
        "explanation": "Find the square root of the result to solve for the side.",
        "workingOut": "n = \\sqrt{1296} = 36"
      }
    ]
  },
  {
    "id": "y9-2a-2d",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "A right-angled triangle has a hypotenuse of 41 cm and one shorter side of 9 cm. Use Pythagoras' theorem to find the length of the unknown side \\(r\\).",
    "a": 0,
    "opts": ["\\(40\\text{ cm}\\)", "\\(32\\text{ cm}\\)", "\\(30\\text{ cm}\\)", "\\(35\\text{ cm}\\)"],
    "h": "Use Pythagoras' theorem \\(a^2 + b^2 = c^2\\).",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Set up the equation for finding the unknown leg.",
        "workingOut": "c = 41, \\quad a = 9 \\implies r^2 = c^2 - a^2"
      },
      {
        "explanation": "Substitute the values to calculate the squares.",
        "workingOut": "r^2 = 41^2 - 9^2 = 1681 - 81"
      },
      {
        "explanation": "Subtract the squared values.",
        "workingOut": "r^2 = 1600"
      },
      {
        "explanation": "Take the square root of the result to get the side length.",
        "workingOut": "r = \\sqrt{1600} = 40"
      }
    ]
  },
  {
    "id": "y9-2a-2e",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "A right-angled triangle has a hypotenuse of 37 cm and one shorter side of 35 cm. Use Pythagoras' theorem to find the length of the unknown side \\(t\\).",
    "a": 0,
    "opts": ["\\(12\\text{ cm}\\)", "\\(2\\text{ cm}\\)", "\\(8\\text{ cm}\\)", "\\(16\\text{ cm}\\)"],
    "h": "Use Pythagoras' theorem \\(a^2 + b^2 = c^2\\).",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Identify the values and write down the formula for the leg.",
        "workingOut": "c = 37, \\quad a = 35 \\implies t^2 = c^2 - a^2"
      },
      {
        "explanation": "Calculate the squares of the side lengths.",
        "workingOut": "t^2 = 37^2 - 35^2 = 1369 - 1225"
      },
      {
        "explanation": "Perform the subtraction.",
        "workingOut": "t^2 = 144"
      },
      {
        "explanation": "Solve for the side length by taking the square root.",
        "workingOut": "t = \\sqrt{144} = 12"
      }
    ]
  },
  {
    "id": "y9-2a-2f",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "A right-angled triangle has a hypotenuse of 65 cm and one shorter side of 63 cm. Use Pythagoras' theorem to find the length of the unknown side \\(z\\).",
    "a": 0,
    "opts": ["\\(16\\text{ cm}\\)", "\\(2\\text{ cm}\\)", "\\(8\\text{ cm}\\)", "\\(12\\text{ cm}\\)"],
    "h": "Use Pythagoras' theorem \\(a^2 + b^2 = c^2\\).",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Write down the equation to find the missing shorter side.",
        "workingOut": "c = 65, \\quad a = 63 \\implies z^2 = c^2 - a^2"
      },
      {
        "explanation": "Substitute the values to calculate the squares.",
        "workingOut": "z^2 = 65^2 - 63^2 = 4225 - 3969"
      },
      {
        "explanation": "Perform the subtraction.",
        "workingOut": "z^2 = 256"
      },
      {
        "explanation": "Take the square root of the result.",
        "workingOut": "z = \\sqrt{256} = 16"
      }
    ]
  },
  {
    "id": "y9-2a-3a",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Find the decimal approximation to 2 decimal places for \\(\\sqrt{21}\\).",
    "a": 0,
    "opts": ["\\(4.58\\)", "\\(4.59\\)", "\\(4.60\\)", "\\(4.57\\)"],
    "h": "Enter the number in your calculator and round the second decimal digit.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Find the square root of 21 using a calculator.",
        "workingOut": "\\sqrt{21} \\approx 4.582575..."
      },
      {
        "explanation": "Round the value to two decimal places by checking the third decimal place.",
        "workingOut": "\\text{Rounded value} = 4.58"
      }
    ]
  },
  {
    "id": "y9-2a-3b",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Find the decimal approximation to 2 decimal places for \\(\\sqrt{43}\\).",
    "a": 0,
    "opts": ["\\(6.56\\)", "\\(6.55\\)", "\\(6.57\\)", "\\(6.60\\)"],
    "h": "Enter the number in your calculator and round the second decimal digit.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Evaluate the square root of 43 using a calculator.",
        "workingOut": "\\sqrt{43} \\approx 6.55743..."
      },
      {
        "explanation": "Round this value to 2 decimal places.",
        "workingOut": "\\text{Rounded value} = 6.56"
      }
    ]
  },
  {
    "id": "y9-2a-3c",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Find the decimal approximation to 2 decimal places for \\(\\sqrt{79}\\).",
    "a": 0,
    "opts": ["\\(8.89\\)", "\\(8.88\\)", "\\(8.90\\)", "\\(8.99\\)"],
    "h": "Enter the number in your calculator and round the second decimal digit.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Determine the square root of 79.",
        "workingOut": "\\sqrt{79} \\approx 8.88819..."
      },
      {
        "explanation": "Round the number to two decimal places.",
        "workingOut": "\\text{Rounded value} = 8.89"
      }
    ]
  },
  {
    "id": "y9-2a-3d",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Find the decimal approximation to 2 decimal places for \\(\\sqrt{515}\\).",
    "a": 0,
    "opts": ["\\(22.69\\)", "\\(22.70\\)", "\\(22.68\\)", "\\(22.75\\)"],
    "h": "Enter the number in your calculator and round the second decimal digit.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Compute the square root of 515 using a calculator.",
        "workingOut": "\\sqrt{515} \\approx 22.6936..."
      },
      {
        "explanation": "Round the result to 2 decimal places.",
        "workingOut": "\\text{Rounded value} = 22.69"
      }
    ]
  },
  {
    "id": "y9-2a-4a",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Use Pythagoras' theorem to find the length of the hypotenuse \\(c\\) in a right-angled triangle with shorter sides 4 cm and 7 cm.",
    "a": 0,
    "opts": ["\\(\\sqrt{65}\\text{ cm} \\approx 8.06\\text{ cm}\\)", "\\(\\sqrt{33}\\text{ cm} \\approx 5.74\\text{ cm}\\)", "\\(\\sqrt{65}\\text{ cm} \\approx 8.10\\text{ cm}\\)", "\\(11\\text{ cm}\\)"],
    "h": "Use Pythagoras' theorem \\(a^2 + b^2 = c^2\\).",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Set up Pythagoras' theorem to find the square of the hypotenuse.",
        "workingOut": "c^2 = 4^2 + 7^2"
      },
      {
        "explanation": "Evaluate the squares and sum them.",
        "workingOut": "c^2 = 16 + 49 = 65"
      },
      {
        "explanation": "Take the square root to get the exact value and find the decimal approximation.",
        "workingOut": "c = \\sqrt{65} \\approx 8.06"
      }
    ]
  },
  {
    "id": "y9-2a-4b",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Use Pythagoras' theorem to find the length of the hypotenuse \\(d\\) in a right-angled triangle with shorter sides 5 cm and 9 cm.",
    "a": 0,
    "opts": ["\\(\\sqrt{106}\\text{ cm} \\approx 10.30\\text{ cm}\\)", "\\(\\sqrt{56}\\text{ cm} \\approx 7.48\\text{ cm}\\)", "\\(\\sqrt{106}\\text{ cm} \\approx 10.33\\text{ cm}\\)", "\\(14\\text{ cm}\\)"],
    "h": "Use Pythagoras' theorem \\(a^2 + b^2 = c^2\\).",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Set up Pythagoras' theorem for the given side lengths.",
        "workingOut": "d^2 = 5^2 + 9^2"
      },
      {
        "explanation": "Square the values and add them.",
        "workingOut": "d^2 = 25 + 81 = 106"
      },
      {
        "explanation": "Take the square root to find the exact and approximate values.",
        "workingOut": "d = \\sqrt{106} \\approx 10.30"
      }
    ]
  },
  {
    "id": "y9-2a-4c",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Use Pythagoras' theorem to find the length of the hypotenuse \\(m\\) in a right-angled triangle with shorter sides 8 cm and 3 cm.",
    "a": 0,
    "opts": ["\\(\\sqrt{73}\\text{ cm} \\approx 8.54\\text{ cm}\\)", "\\(\\sqrt{55}\\text{ cm} \\approx 7.42\\text{ cm}\\)", "\\(\\sqrt{73}\\text{ cm} \\approx 8.50\\text{ cm}\\)", "\\(11\\text{ cm}\\)"],
    "h": "Use Pythagoras' theorem \\(a^2 + b^2 = c^2\\).",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Set up the theorem to find the square of the hypotenuse.",
        "workingOut": "m^2 = 8^2 + 3^2"
      },
      {
        "explanation": "Evaluate the squares and sum them.",
        "workingOut": "m^2 = 64 + 9 = 73"
      },
      {
        "explanation": "Determine the exact surd value and round the decimal value.",
        "workingOut": "m = \\sqrt{73} \\approx 8.54"
      }
    ]
  },
  {
    "id": "y9-2a-4d",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Use Pythagoras' theorem to find the length of the hypotenuse \\(n\\) in a right-angled triangle with shorter sides 6 cm and 4 cm.",
    "a": 0,
    "opts": ["\\(\\sqrt{52}\\text{ cm} \\approx 7.21\\text{ cm}\\)", "\\(\\sqrt{20}\\text{ cm} \\approx 4.47\\text{ cm}\\)", "\\(\\sqrt{52}\\text{ cm} \\approx 7.20\\text{ cm}\\)", "\\(10\\text{ cm}\\)"],
    "h": "Use Pythagoras' theorem \\(a^2 + b^2 = c^2\\).",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Set up Pythagoras' theorem to calculate the squared hypotenuse.",
        "workingOut": "n^2 = 6^2 + 4^2"
      },
      {
        "explanation": "Evaluate and sum the squared terms.",
        "workingOut": "n^2 = 36 + 16 = 52"
      },
      {
        "explanation": "Obtain the exact and approximate values.",
        "workingOut": "n = \\sqrt{52} \\approx 7.21"
      }
    ]
  },
  {
    "id": "y9-2a-4e",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Use Pythagoras' theorem to find the length of the hypotenuse \\(p\\) in a right-angled triangle with shorter sides 10 cm and 6 cm.",
    "a": 0,
    "opts": ["\\(\\sqrt{136}\\text{ cm} \\approx 11.66\\text{ cm}\\)", "\\(\\sqrt{64}\\text{ cm} = 8\\text{ cm}\\)", "\\(\\sqrt{136}\\text{ cm} \\approx 11.70\\text{ cm}\\)", "\\(16\\text{ cm}\\)"],
    "h": "Use Pythagoras' theorem \\(a^2 + b^2 = c^2\\).",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Set up Pythagoras' theorem to find the square of the hypotenuse.",
        "workingOut": "p^2 = 10^2 + 6^2"
      },
      {
        "explanation": "Square the values and add them.",
        "workingOut": "p^2 = 100 + 36 = 136"
      },
      {
        "explanation": "Find the exact root and approximate to 2 decimal places.",
        "workingOut": "p = \\sqrt{136} \\approx 11.66"
      }
    ]
  },
  {
    "id": "y9-2a-4f",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Use Pythagoras' theorem to find the length of the hypotenuse \\(q\\) in a right-angled triangle with shorter sides 8 cm and 5 cm.",
    "a": 0,
    "opts": ["\\(\\sqrt{89}\\text{ cm} \\approx 9.43\\text{ cm}\\)", "\\(\\sqrt{39}\\text{ cm} \\approx 6.24\\text{ cm}\\)", "\\(\\sqrt{89}\\text{ cm} \\approx 9.40\\text{ cm}\\)", "\\(13\\text{ cm}\\)"],
    "h": "Use Pythagoras' theorem \\(a^2 + b^2 = c^2\\).",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "State Pythagoras' theorem for the sides 8 cm and 5 cm.",
        "workingOut": "q^2 = 8^2 + 5^2"
      },
      {
        "explanation": "Sum the squared values.",
        "workingOut": "q^2 = 64 + 25 = 89"
      },
      {
        "explanation": "Take the square root to find the exact and approximate values.",
        "workingOut": "q = \\sqrt{89} \\approx 9.43"
      }
    ]
  },
  {
    "id": "y9-2a-4g",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Use Pythagoras' theorem to find the length of the shorter side \\(a\\) in a right-angled triangle with hypotenuse 15 cm and the other side 5 cm.",
    "a": 0,
    "opts": ["\\(\\sqrt{200}\\text{ cm} \\approx 14.14\\text{ cm}\\)", "\\(\\sqrt{250}\\text{ cm} \\approx 15.81\\text{ cm}\\)", "\\(10\\text{ cm}\\)", "\\(\\sqrt{200}\\text{ cm} \\approx 14.10\\text{ cm}\\)"],
    "h": "Use Pythagoras' theorem \\(a^2 + b^2 = c^2\\).",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Set up Pythagoras' theorem to solve for the missing shorter side.",
        "workingOut": "a^2 = 15^2 - 5^2"
      },
      {
        "explanation": "Calculate the squares and subtract.",
        "workingOut": "a^2 = 225 - 25 = 200"
      },
      {
        "explanation": "Find the exact square root and round the decimal approximation.",
        "workingOut": "a = \\sqrt{200} \\approx 14.14"
      }
    ]
  },
  {
    "id": "y9-2a-4h",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Use Pythagoras' theorem to find the length of the shorter side \\(b\\) in a right-angled triangle with hypotenuse 12 cm and the other side 8 cm.",
    "a": 0,
    "opts": ["\\(\\sqrt{80}\\text{ cm} \\approx 8.94\\text{ cm}\\)", "\\(\\sqrt{208}\\text{ cm} \\approx 14.42\\text{ cm}\\)", "\\(4\\text{ cm}\\)", "\\(\\sqrt{80}\\text{ cm} \\approx 8.90\\text{ cm}\\)"],
    "h": "Use Pythagoras' theorem \\(a^2 + b^2 = c^2\\).",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Write down the equation for the unknown side.",
        "workingOut": "b^2 = 12^2 - 8^2"
      },
      {
        "explanation": "Evaluate the squares and find the difference.",
        "workingOut": "b^2 = 144 - 64 = 80"
      },
      {
        "explanation": "Solve for \\(b\\) in exact and decimal formats.",
        "workingOut": "b = \\sqrt{80} \\approx 8.94"
      }
    ]
  },
  {
    "id": "y9-2a-4i",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "An isosceles triangle has a base of 8 cm and a height of 5 cm. Use Pythagoras' theorem to find the slant length \\(x\\).",
    "a": 0,
    "opts": ["\\(\\sqrt{41}\\text{ cm} \\approx 6.40\\text{ cm}\\)", "\\(\\sqrt{89}\\text{ cm} \\approx 9.43\\text{ cm}\\)", "\\(\\sqrt{41}\\text{ cm} \\approx 6.45\\text{ cm}\\)", "\\(9\\text{ cm}\\)"],
    "h": "Use Pythagoras' theorem \\(a^2 + b^2 = c^2\\).",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Split the isosceles triangle in half to create a right-angled triangle. Find the half-base length.",
        "workingOut": "\\text{Half-base} = \\frac{8}{2} = 4"
      },
      {
        "explanation": "Set up Pythagoras' theorem using the half-base and height.",
        "workingOut": "x^2 = 4^2 + 5^2 = 16 + 25 = 41"
      },
      {
        "explanation": "Solve for the slant length \\(x\\).",
        "workingOut": "x = \\sqrt{41} \\approx 6.40"
      }
    ]
  },
  {
    "id": "y9-2a-4j",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "An isosceles triangle has a slant length of 10 cm and a height of 7 cm. Use Pythagoras' theorem to find the total base length \\(y\\).",
    "a": 0,
    "opts": ["\\(2\\sqrt{51}\\text{ cm} \\approx 14.28\\text{ cm}\\)", "\\(\\sqrt{51}\\text{ cm} \\approx 7.14\\text{ cm}\\)", "\\(2\\sqrt{149}\\text{ cm} \\approx 24.41\\text{ cm}\\)", "\\(6\\text{ cm}\\)"],
    "h": "Use Pythagoras' theorem \\(a^2 + b^2 = c^2\\).",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Calculate half the base using the hypotenuse and the height in a right-angled triangle.",
        "workingOut": "\\text{Half-base}^2 = 10^2 - 7^2 = 100 - 49 = 51"
      },
      {
        "explanation": "Find the length of half the base.",
        "workingOut": "\\text{Half-base} = \\sqrt{51}"
      },
      {
        "explanation": "Double the half-base length to find the total base length \\(y\\).",
        "workingOut": "y = 2\\sqrt{51} \\approx 14.28"
      }
    ]
  },
  {
    "id": "y9-2a-5a",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Determine whether or not the triangle with the side lengths 12, 35, 37 is right-angled.",
    "a": 0,
    "opts": [
      "Yes, it is right-angled",
      "No, it is obtuse-angled",
      "No, it is acute-angled",
      "Cannot be determined"
    ],
    "h": "Check if the sum of the squares of the two smaller sides equals the square of the largest side.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Square all three sides.",
        "workingOut": "12^2 = 144, \\quad 35^2 = 1225, \\quad 37^2 = 1369"
      },
      {
        "explanation": "Check if $a^2 + b^2 = c^2$.",
        "workingOut": "144 + 1225 = 1369. This equals 1369. Therefore, Yes."
      }
    ]
  },
  {
    "id": "y9-2a-5b",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Determine whether or not the triangle with the side lengths 14, 48, 50 is right-angled.",
    "a": 0,
    "opts": [
      "Yes, it is right-angled",
      "No, it is obtuse-angled",
      "No, it is acute-angled",
      "Cannot be determined"
    ],
    "h": "Check if the sum of the squares of the two smaller sides equals the square of the largest side.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Square all three sides.",
        "workingOut": "14^2 = 196, \\quad 48^2 = 2304, \\quad 50^2 = 2500"
      },
      {
        "explanation": "Check if $a^2 + b^2 = c^2$.",
        "workingOut": "196 + 2304 = 2500. This equals 2500. Therefore, Yes."
      }
    ]
  },
  {
    "id": "y9-2a-5c",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Determine whether or not the triangle with the side lengths 5, 7, 9 is right-angled.",
    "a": 1,
    "opts": [
      "Yes, it is right-angled",
      "No, it is not right-angled",
      "No, it is equilateral",
      "Cannot be determined"
    ],
    "h": "Check if the sum of the squares of the two smaller sides equals the square of the largest side.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Square all three sides.",
        "workingOut": "5^2 = 25, \\quad 7^2 = 49, \\quad 9^2 = 81"
      },
      {
        "explanation": "Check if $a^2 + b^2 = c^2$.",
        "workingOut": "25 + 49 = 74. This does not equal 81. Therefore, No."
      }
    ]
  },
  {
    "id": "y9-2a-5d",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Determine whether or not the triangle with the side lengths 2.5, 6, 6.5 is right-angled.",
    "a": 0,
    "opts": [
      "Yes, it is right-angled",
      "No, it is obtuse-angled",
      "No, it is acute-angled",
      "Cannot be determined"
    ],
    "h": "Check if the sum of the squares of the two smaller sides equals the square of the largest side.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Square all three sides.",
        "workingOut": "2.5^2 = 6.25, \\quad 6^2 = 36, \\quad 6.5^2 = 42.25"
      },
      {
        "explanation": "Check if $a^2 + b^2 = c^2$.",
        "workingOut": "6.25 + 36 = 42.25. This equals 42.25. Therefore, Yes."
      }
    ]
  },
  {
    "id": "y9-2a-5e",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Determine whether or not the triangle with the side lengths 8, 12, 15 is right-angled.",
    "a": 1,
    "opts": [
      "Yes, it is right-angled",
      "No, it is not right-angled",
      "No, it is isosceles",
      "Cannot be determined"
    ],
    "h": "Check if the sum of the squares of the two smaller sides equals the square of the largest side.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Square all three sides.",
        "workingOut": "8^2 = 64, \\quad 12^2 = 144, \\quad 15^2 = 225"
      },
      {
        "explanation": "Check if $a^2 + b^2 = c^2$.",
        "workingOut": "64 + 144 = 208. This does not equal 225. Therefore, No."
      }
    ]
  },
  {
    "id": "y9-2a-5f",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Determine whether or not the triangle with the side lengths 11, 60, 61 is right-angled.",
    "a": 0,
    "opts": [
      "Yes, it is right-angled",
      "No, it is obtuse-angled",
      "No, it is acute-angled",
      "Cannot be determined"
    ],
    "h": "Check if the sum of the squares of the two smaller sides equals the square of the largest side.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Square all three sides.",
        "workingOut": "11^2 = 121, \\quad 60^2 = 3600, \\quad 61^2 = 3721"
      },
      {
        "explanation": "Check if $a^2 + b^2 = c^2$.",
        "workingOut": "121 + 3600 = 3721. This equals 3721. Therefore, Yes."
      }
    ]
  },
  {
    "id": "y9-2a-6a",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Lengths of the two shortest sides of a right-angled triangle are 5 cm and 12 cm. Find the length of the hypotenuse.",
    "a": 0,
    "opts": ["\\(13\\text{ cm}\\)", "\\(17\\text{ cm}\\)", "\\(15\\text{ cm}\\)", "\\(\\sqrt{119}\\text{ cm}\\)"],
    "h": "Use Pythagoras' theorem \\(a^2 + b^2 = c^2\\).",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Write down Pythagoras' theorem formula using the given legs.",
        "workingOut": "c^2 = 5^2 + 12^2"
      },
      {
        "explanation": "Compute the squares and add the values.",
        "workingOut": "c^2 = 25 + 144 = 169"
      },
      {
        "explanation": "Take the square root of the sum to find the hypotenuse length.",
        "workingOut": "c = \\sqrt{169} = 13"
      }
    ]
  },
  {
    "id": "y9-2a-6b",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Lengths of the two shortest sides of a right-angled triangle are 4 cm and 7 cm. Find the length of the hypotenuse.",
    "a": 0,
    "opts": ["\\(\\sqrt{65}\\text{ cm}\\)", "\\(\\sqrt{33}\\text{ cm}\\)", "\\(9\\text{ cm}\\)", "\\(\\sqrt{53}\\text{ cm}\\)"],
    "h": "Use Pythagoras' theorem \\(a^2 + b^2 = c^2\\).",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Set up the relation for the sum of the squares of the sides.",
        "workingOut": "c^2 = 4^2 + 7^2"
      },
      {
        "explanation": "Simplify the squares.",
        "workingOut": "c^2 = 16 + 49 = 65"
      },
      {
        "explanation": "Find the length of the hypotenuse.",
        "workingOut": "c = \\sqrt{65}"
      }
    ]
  },
  {
    "id": "y9-2a-6c",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "In a right-angled triangle, the hypotenuse is 11 cm and one shorter side is 5 cm. Find the length of the other shorter side.",
    "a": 0,
    "opts": ["\\(\\sqrt{96}\\text{ cm}\\)", "\\(6\\text{ cm}\\)", "\\(\\sqrt{146}\\text{ cm}\\)", "\\(\\sqrt{71}\\text{ cm}\\)"],
    "h": "Use Pythagoras' theorem \\(a^2 + b^2 = c^2\\).",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Set up Pythagoras' theorem to find the missing leg.",
        "workingOut": "b^2 = 11^2 - 5^2"
      },
      {
        "explanation": "Evaluate the squares and subtract.",
        "workingOut": "b^2 = 121 - 25 = 96"
      },
      {
        "explanation": "Find the side length.",
        "workingOut": "b = \\sqrt{96}"
      }
    ]
  },
  {
    "id": "y9-2a-6d",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Lengths of the two shortest sides of a right-angled triangle are 7 cm and 9 cm. Find the length of the hypotenuse.",
    "a": 0,
    "opts": ["\\(\\sqrt{130}\\text{ cm}\\)", "\\(\\sqrt{32}\\text{ cm}\\)", "\\(16\\text{ cm}\\)", "\\(\\sqrt{118}\\text{ cm}\\)"],
    "h": "Use Pythagoras' theorem \\(a^2 + b^2 = c^2\\).",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Write down the formula for the squared hypotenuse.",
        "workingOut": "c^2 = 7^2 + 9^2"
      },
      {
        "explanation": "Evaluate the squares and find the sum.",
        "workingOut": "c^2 = 49 + 81 = 130"
      },
      {
        "explanation": "Take the square root to determine the hypotenuse.",
        "workingOut": "c = \\sqrt{130}"
      }
    ]
  },
  {
    "id": "y9-2a-6e",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "In a right-angled triangle, the hypotenuse is 14 cm and one shorter side is 6 cm. Find the length of the other shorter side.",
    "a": 0,
    "opts": ["\\(\\sqrt{160}\\text{ cm}\\)", "\\(8\\text{ cm}\\)", "\\(\\sqrt{232}\\text{ cm}\\)", "\\(\\sqrt{120}\\text{ cm}\\)"],
    "h": "Use Pythagoras' theorem \\(a^2 + b^2 = c^2\\).",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Set up Pythagoras' theorem to find the missing leg.",
        "workingOut": "b^2 = 14^2 - 6^2"
      },
      {
        "explanation": "Evaluate the squares and find the difference.",
        "workingOut": "b^2 = 196 - 36 = 160"
      },
      {
        "explanation": "Take the square root.",
        "workingOut": "b = \\sqrt{160}"
      }
    ]
  },
  {
    "id": "y9-2a-7",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "A window frame has height 1.5 m and width 0.8 m. Will a piece of glass 1.8 m wide fit through the opening diagonally?",
    "a": 1,
    "opts": [
      "Yes, it will fit easily",
      "No, the diagonal is too small",
      "It will fit exactly with no margin",
      "Cannot be determined without glass thickness"
    ],
    "h": "Calculate the diagonal of the window frame and compare it to 1.8 m.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Calculate the diagonal of the window frame using Pythagoras' theorem.",
        "workingOut": "\\text{Diagonal}^2 = 1.5^2 + 0.8^2 = 2.25 + 0.64 = 2.89"
      },
      {
        "explanation": "Take the square root to find the actual diagonal length.",
        "workingOut": "\\text{Diagonal} = \\sqrt{2.89} = 1.7\\text{ m}"
      },
      {
        "explanation": "Compare the diagonal dimension with the width of the glass to see if it fits.",
        "workingOut": "1.7\\text{ m} < 1.8\\text{ m}"
      }
    ]
  },
  {
    "id": "y9-2a-8",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "A wooden rectangular frame for a gate is 1.4 m wide and 2.2 m high. Find the length of a diagonal reinforcing piece of wood, in metres, correct to 3 decimal places.",
    "a": 0,
    "opts": ["\\(2.608\\text{ m}\\)", "\\(2.600\\text{ m}\\)", "\\(3.600\\text{ m}\\)", "\\(2.800\\text{ m}\\)"],
    "h": "Use Pythagoras' theorem \\(a^2 + b^2 = c^2\\).",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Use Pythagoras' theorem to relate the diagonal to the width and height.",
        "workingOut": "d^2 = 1.4^2 + 2.2^2"
      },
      {
        "explanation": "Evaluate the squares and sum them.",
        "workingOut": "d^2 = 1.96 + 4.84 = 6.8"
      },
      {
        "explanation": "Find the square root of the sum and round to 3 decimal places.",
        "workingOut": "d = \\sqrt{6.8} \\approx 2.608"
      }
    ]
  },
  {
    "id": "y9-2a-9",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "A signwriter leans his 5 m ladder against a vertical wall. If the top of the ladder is 4.5 m above the horizontal ground, how far (correct to 1 decimal place) should the foot of the ladder be placed from the wall?",
    "a": 0,
    "opts": ["\\(2.2\\text{ m}\\)", "\\(0.5\\text{ m}\\)", "\\(2.5\\text{ m}\\)", "\\(3.1\\text{ m}\\)"],
    "h": "Use Pythagoras' theorem \\(a^2 + b^2 = c^2\\).",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Express Pythagoras' theorem where the ladder is the hypotenuse.",
        "workingOut": "x^2 + 4.5^2 = 5^2"
      },
      {
        "explanation": "Solve for the horizontal distance squared.",
        "workingOut": "x^2 = 25 - 20.25 = 4.75"
      },
      {
        "explanation": "Take the square root and round to 1 decimal place.",
        "workingOut": "x = \\sqrt{4.75} \\approx 2.2"
      }
    ]
  },
  {
    "id": "y9-2a-10",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "teacher_review",
    "difficulty": "medium",
    "q": "A boat builder needs to calculate the lengths of the stays needed to support a mast on a yacht. The mast is supported by two identical side stays ($AB$ and $AD$) going from point $A$ on the mast to each side of the boat, and a front stay ($AE$) going to the front of the boat. The base of the mast is $C$.\nGiven $AC = 4$ m, $CB = CD = 1.5$ m, and $CE = 2.2$ m:\n\na) Find the length, to the nearest centimetre, of one of the side stays, $AB$ or $AD$.\nb) Find the length, to the nearest centimetre, of the front stay, $AE$.\nc) Find the total length of stainless steel wire needed to make the three stays.",
    "a": "a) 427 cm, b) 457 cm, c) 1311 cm",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "a) Use Pythagoras in $\\triangle ACB$.",
        "workingOut": "AB = \\sqrt{AC^2 + CB^2} = \\sqrt{4^2 + 1.5^2} = \\sqrt{16 + 2.25} = \\sqrt{18.25} \\approx 4.272 \\text{ m} = 427 \\text{ cm}"
      },
      {
        "explanation": "b) Use Pythagoras in $\\triangle ACE$.",
        "workingOut": "AE = \\sqrt{AC^2 + CE^2} = \\sqrt{4^2 + 2.2^2} = \\sqrt{16 + 4.84} = \\sqrt{20.84} \\approx 4.565 \\text{ m} = 457 \\text{ cm}"
      },
      {
        "explanation": "c) Sum the lengths of the three stays.",
        "workingOut": "\\text{Total} = 2 \\times 4.272 + 4.565 = 8.544 + 4.565 = 13.109 \\text{ m} = 1311 \\text{ cm}"
      }
    ]
  },
  {
    "id": "y9-2a-11",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "teacher_review",
    "difficulty": "medium",
    "q": "As part of a design, an artist draws a circle passing through the four corners (vertices) of a square.\n\na) If the square has side lengths of 6 cm, what is the radius, to the nearest millimetre, of the circle?\nb) If the circle has a radius of 5 cm, what are the side lengths, to the nearest millimetre, of the square?",
    "a": "a) 42 mm, b) 71 mm",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "a) The diagonal of the square is the diameter of the circle.",
        "workingOut": "\\text{Diagonal} = \\sqrt{6^2 + 6^2} = \\sqrt{72} \\approx 8.485 \\text{ cm}"
      },
      {
        "explanation": "Find the radius (half the diameter).",
        "workingOut": "\\text{Radius} = 8.485 / 2 = 4.243 \\text{ cm} = 42 \\text{ mm}"
      },
      {
        "explanation": "b) If radius is 5 cm, diameter is 10 cm. Let the side be $s$.",
        "workingOut": "s^2 + s^2 = 10^2 \\Rightarrow 2s^2 = 100 \\Rightarrow s^2 = 50"
      },
      {
        "explanation": "Take the square root to find the side length.",
        "workingOut": "s = \\sqrt{50} \\approx 7.071 \\text{ cm} = 71 \\text{ mm}"
      }
    ]
  },
  {
    "id": "y9-2a-12",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "Two triangular flags can be made from one square piece of material by cutting on the diagonal. If this diagonal side length is to be 120 cm long, what must be the side length of the square piece of material to the nearest millimetre?",
    "a": 0,
    "opts": ["\\(849\\text{ mm}\\)", "\\(848\\text{ mm}\\)", "\\(600\\text{ mm}\\)", "\\(850\\text{ mm}\\)"],
    "h": "Use Pythagoras' theorem \\(a^2 + b^2 = c^2\\).",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Let the side length of the square be \\(s\\). The diagonal forms the hypotenuse.",
        "workingOut": "s^2 + s^2 = 120^2"
      },
      {
        "explanation": "Solve for the square of the side length.",
        "workingOut": "2s^2 = 14400 \\implies s^2 = 7200"
      },
      {
        "explanation": "Take the square root of both sides to get the length in cm, then convert to mm.",
        "workingOut": "s = \\sqrt{7200} \\approx 84.853\\text{ cm} = 849\\text{ mm}"
      }
    ]
  },
  {
    "id": "y9-2a-13",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "A girl planned to swim straight across a river of width 30 m. After she had swum across the river, she found she had been swept 5 m downstream. How far did she actually swim? Calculate your answer, in metres, correct to 1 decimal place.",
    "a": 0,
    "opts": ["\\(30.4\\text{ m}\\)", "\\(35.0\\text{ m}\\)", "\\(30.0\\text{ m}\\)", "\\(30.8\\text{ m}\\)"],
    "h": "Use Pythagoras' theorem \\(a^2 + b^2 = c^2\\).",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "The river width and the downstream drift distance form the legs of a right-angled triangle.",
        "workingOut": "\\text{Distance}^2 = 30^2 + 5^2"
      },
      {
        "explanation": "Simplify the squares and sum them.",
        "workingOut": "\\text{Distance}^2 = 900 + 25 = 925"
      },
      {
        "explanation": "Take the square root and round to 1 decimal place.",
        "workingOut": "\\text{Distance} = \\sqrt{925} \\approx 30.4\\text{ m}"
      }
    ]
  },
  {
    "id": "y9-2a-14",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "A yachtsman wishes to build a shed with a rectangular base to store his sailing equipment. If the shed is to be 3.0 m wide and must be able to house a 5.2 m steel beam, which is to be stored diagonally across the floor, how long must the shed be? Calculate your answer, in metres, correct to 1 decimal place.",
    "a": 0,
    "opts": ["\\(4.2\\text{ m}\\)", "\\(4.5\\text{ m}\\)", "\\(2.2\\text{ m}\\)", "\\(6.0\\text{ m}\\)"],
    "h": "Use Pythagoras' theorem \\(a^2 + b^2 = c^2\\).",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "The floor forms a right-angled triangle with the diagonal beam as the hypotenuse.",
        "workingOut": "\\text{Length}^2 + 3.0^2 = 5.2^2"
      },
      {
        "explanation": "Solve for the length squared.",
        "workingOut": "\\text{Length}^2 = 27.04 - 9 = 18.04"
      },
      {
        "explanation": "Take the square root and round to 1 decimal place.",
        "workingOut": "\\text{Length} = \\sqrt{18.04} \\approx 4.2\\text{ m}"
      }
    ]
  },
  {
    "id": "y9-2a-15",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "teacher_review",
    "difficulty": "hard",
    "q": "In triangle $PQR$, the angle at $Q$ is a right angle. The line $QS$ is drawn perpendicular to $PR$. $h$ is the length of $QS$ and $x$ is the length of $RS$. Given $PQ = 15$ and $QR = 8$:\n\na) Show that the length of $PR$ is 17.\nb) Find the area of triangle $PQR$ in two ways to show that $17h = 120$.\nc) Use Pythagoras' theorem to find $x$.",
    "a": "a) $15^2 + 8^2 = 17^2$, b) Area is 60. $0.5 \\times 17 \\times h = 60$, c) $x \\approx 3.76$",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "a) Use Pythagoras in $\\triangle PQR$.",
        "workingOut": "PR^2 = 15^2 + 8^2 = 225 + 64 = 289 \\Rightarrow PR = 17"
      },
      {
        "explanation": "b) Calculate the area using legs $PQ$ and $QR$.",
        "workingOut": "Area = \\frac{1}{2} \\times 15 \\times 8 = 60"
      },
      {
        "explanation": "Calculate the area using base $PR$ and height $QS$.",
        "workingOut": "Area = \\frac{1}{2} \\times 17 \\times h = 8.5h"
      },
      {
        "explanation": "Equate the two areas.",
        "workingOut": "8.5h = 60 \\Rightarrow 17h = 120"
      },
      {
        "explanation": "c) First, find $h$.",
        "workingOut": "h = 120 / 17"
      },
      {
        "explanation": "Use Pythagoras in $\\triangle QSR$ to find $x$.",
        "workingOut": "x^2 + h^2 = 8^2 \\Rightarrow x^2 + \\left(\\frac{120}{17}\\right)^2 = 64"
      },
      {
        "explanation": "Solve for $x$.",
        "workingOut": "x^2 = 64 - \\frac{14400}{289} = \\frac{18496 - 14400}{289} = \\frac{4096}{289} \\Rightarrow x = \\frac{64}{17} \\approx 3.76"
      }
    ]
  },
  {
    "id": "y9-2a-16",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "teacher_review",
    "difficulty": "hard",
    "q": "In two identical squares of side length $c+d$, the first square contains an inner tilted quadrilateral formed by joining points that divide each side in the ratio $c:d$. The second square is divided into two smaller squares of sides $c$ and $d$, and two rectangles of dimensions $c \\times d$.\n\na) Prove that the tilted inner quadrilateral in the first square is a square.\nb) Using the areas of both large squares, prove Pythagoras' theorem ($a^2+b^2=c^2$ equivalent for the right triangles formed).",
    "a": "Teacher review required for proofs.",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "a) Show all four sides of the inner quadrilateral are equal.",
        "workingOut": "\\text{Each side is the hypotenuse of a right triangle with legs } c \\text{ and } d. \\text{ Length } = \\sqrt{c^2 + d^2}."
      },
      {
        "explanation": "Show the inner angles are $90^\\circ$.",
        "workingOut": "\\text{The acute angles of the corner triangles sum to } 90^\\circ. \\text{ The straight line angle is } 180^\\circ, \\text{ leaving } 90^\\circ \\text{ for the inner quadrilateral's corners.}"
      },
      {
        "explanation": "b) Relate the areas.",
        "workingOut": "\\text{Area of large square} = (c+d)^2. \\text{ From the first square, this is } 4 \\times (\\frac{1}{2}cd) + \\text{Area}(\\text{inner square})."
      },
      {
        "explanation": "Equate areas.",
        "workingOut": "c^2 + 2cd + d^2 = 2cd + \\text{Hypotenuse}^2 \\Rightarrow c^2 + d^2 = \\text{Hypotenuse}^2"
      }
    ]
  }
];

// Year 9 Ch2A questions (Pythagoras' theorem) - separate export for seeding
export const Y9_CH2A_QUESTIONS = SURDS_QUESTIONS_Y11A.filter(q => q.id && q.id.startsWith('y9-2a-'));
