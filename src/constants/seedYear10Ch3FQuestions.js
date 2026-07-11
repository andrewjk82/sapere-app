export const Y10_CH3F_QUESTIONS = [
  // ── EASY & MEDIUM (Q1–Q30) ────────────────────────────────────────────────
  {
    id: "y10-3f-1",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "easy",
    q: "Factorise: \\\\(49 - z^2\\\\)",
    h: "This is a difference of two squares: 49 = 7².",
    opts: ["\\\\((z - 7)(z + 7)\\\\)", "\\\\((7 - z)(7 + z)\\\\)", "\\\\((7 - z)^2\\\\)", "\\\\((49 - z)(1 + z)\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Identify the expression as a difference of two squares. Recognize that 49 is a perfect square equal to 7².", workingOut: "\\\\(49 - z^2 = 7^2 - z^2\\\\)", graphData: null },
      { explanation: "Apply the identity \\\\(a^2 - b^2 = (a - b)(a + b)\\\\) where \\\\(a = 7\\\\) and \\\\(b = z\\\\).", workingOut: "\\\\(7^2 - z^2 = (7 - z)(7 + z)\\\\)", graphData: null },
      { explanation: "Verify by expanding: \\\\((7 - z)(7 + z) = 49 + 7z - 7z - z^2 = 49 - z^2\\\\).", workingOut: "\\\\((7 - z)(7 + z) = 49 - z^2 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-2",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\(1 - 100b^2\\\\)",
    h: "Use the difference of two squares identity, noting that 100b² = (10b)².",
    opts: ["\\\\((1 - 10b)(1 + 10b)\\\\)", "\\\\((1 - 10b)^2\\\\)", "\\\\((10b - 1)(10b + 1)\\\\)", "\\\\((1 - 50b)(1 + 2b)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Write both terms as perfect squares. 1 is 1² and 100b² is (10b)².", workingOut: "\\\\(1 - 100b^2 = 1^2 - (10b)^2\\\\)", graphData: null },
      { explanation: "Factorise using the formula \\\\(a^2 - b^2 = (a - b)(a + b)\\\\) where \\\\(a = 1\\\\) and \\\\(b = 10b\\\\).", workingOut: "\\\\(1^2 - (10b)^2 = (1 - 10b)(1 + 10b)\\\\)", graphData: null },
      { explanation: "Verify the result by expanding.", workingOut: "\\\\((1 - 10b)(1 + 10b) = 1 - 100b^2 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-3",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\(121a^2 - 81b^2\\\\)",
    h: "Both coefficients are perfect squares: 121 = 11² and 81 = 9².",
    opts: ["\\\\((11a - 9b)^2\\\\)", "\\\\((11a + 81b)(11a - b)\\\\)", "\\\\((11a - 9b)(11a + 9b)\\\\)", "\\\\((9b - 11a)(9b + 11a)\\\\)"],
    a: 2,
    solutionSteps: [
      { explanation: "Express both parts as perfect squares.", workingOut: "\\\\(121a^2 - 81b^2 = (11a)^2 - (9b)^2\\\\)", graphData: null },
      { explanation: "Apply the difference of two squares identity.", workingOut: "\\\\((11a)^2 - (9b)^2 = (11a - 9b)(11a + 9b)\\\\)", graphData: null },
      { explanation: "Verify by expansion.", workingOut: "\\\\((11a - 9b)(11a + 9b) = 121a^2 - 81b^2 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-4",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\(9 - 4a^2\\\\)",
    h: "Recognise that 9 = 3² and 4a² = (2a)².",
    opts: ["\\\\((3 - 4a)(3 + 4a)\\\\)", "\\\\((3 - 2a)(3 + 2a)\\\\)", "\\\\((3 - 2a)^2\\\\)", "\\\\((9 - 2a)(1 + 2a)\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Write both terms as perfect squares.", workingOut: "\\\\(9 - 4a^2 = 3^2 - (2a)^2\\\\)", graphData: null },
      { explanation: "Apply the difference of two squares formula.", workingOut: "\\\\(3^2 - (2a)^2 = (3 - 2a)(3 + 2a)\\\\)", graphData: null },
      { explanation: "Verify by expanding.", workingOut: "\\\\((3 - 2a)(3 + 2a) = 9 - 4a^2 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-5",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\(25 - 64x^2\\\\)",
    h: "Note that 25 = 5² and 64x² = (8x)².",
    opts: ["\\\\((5 - 8x)(5 + 8x)\\\\)", "\\\\((5 - 8x)^2\\\\)", "\\rule{0pt}{1.2em}\\\\((8x - 5)(8x + 5)\\\\)", "\\\\((25 - 8x)(1 + 8x)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Write both terms as perfect squares.", workingOut: "\\\\(25 - 64x^2 = 5^2 - (8x)^2\\\\)", graphData: null },
      { explanation: "Apply the difference of two squares identity.", workingOut: "\\\\(5^2 - (8x)^2 = (5 - 8x)(5 + 8x)\\\\)", graphData: null },
      { explanation: "Verify the result by expanding.", workingOut: "\\\\((5 - 8x)(5 + 8x) = 25 - 64x^2 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-6",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\(a^2b^2 - 4c^2d^2\\\\)",
    h: "Notice that a²b² = (ab)² and 4c²d² = (2cd)².",
    opts: ["\\\\((ab - 2cd)^2\\\\)", "\\\\((ab - 2cd)(ab + 2cd)\\\\)", "\\\\((ab + 2cd)(ab - 2cd)\\\\)", "\\\\((a^2b^2 - 2cd)(1 + 2cd)\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Rewrite both terms as perfect squares.", workingOut: "\\\\(a^2b^2 - 4c^2d^2 = (ab)^2 - (2cd)^2\\\\)", graphData: null },
      { explanation: "Factorise using the difference of two squares formula.", workingOut: "\\\\((ab)^2 - (2cd)^2 = (ab - 2cd)(ab + 2cd)\\\\)", graphData: null },
      { explanation: "Check the factors by expanding.", workingOut: "\\\\((ab - 2cd)(ab + 2cd) = a^2b^2 - 4c^2d^2 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-7",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\(9x^2 - 1\\\\)",
    h: "Write 9x² as (3x)² and 1 as 1².",
    opts: ["\\\\((3x - 1)^2\\\\)", "\\\\((3x - 1)(3x + 1)\\\\)", "\\\\((9x - 1)(x + 1)\\\\)", "\\\\((1 - 3x)(1 + 3x)\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Write the expression using perfect squares.", workingOut: "\\\\(9x^2 - 1 = (3x)^2 - 1^2\\\\)", graphData: null },
      { explanation: "Apply the difference of two squares identity.", workingOut: "\\\\((3x)^2 - 1^2 = (3x - 1)(3x + 1)\\\\)", graphData: null },
      { explanation: "Verify by expansion.", workingOut: "\\\\((3x - 1)(3x + 1) = 9x^2 - 1 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-8",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\(36p^2 - 49q^2\\\\)",
    h: "Note that 36p² = (6p)² and 49q² = (7q)².",
    opts: ["\\\\((6p - 7q)^2\\\\)", "\\\\((36p - 7q)(1 + 7q)\\\\)", "\\\\((6p - 7q)(6p + 7q)\\\\)", "\\\\((7q - 6p)(7q + 6p)\\\\)"],
    a: 2,
    solutionSteps: [
      { explanation: "Write both terms as perfect squares.", workingOut: "\\\\(36p^2 - 49q^2 = (6p)^2 - (7q)^2\\\\)", graphData: null },
      { explanation: "Factorise using the difference of two squares identity.", workingOut: "\\\\((6p)^2 - (7q)^2 = (6p - 7q)(6p + 7q)\\\\)", graphData: null },
      { explanation: "Verify the result by expanding.", workingOut: "\\\\((6p - 7q)(6p + 7q) = 36p^2 - 49q^2 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-9",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise using surds: \\\\(x^2 - 11\\\\)",
    h: "Since 11 is not a perfect square, write it as (√11)².",
    opts: ["\\\\((x - \\\\sqrt{11})(x + \\\\sqrt{11})\\\\)", "\\\\((x - 11)(x + 11)\\\\)", "\\\\((x - \\\\sqrt{11})^2\\\\)", "\\\\((11 - x)(11 + x)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Express 11 as a square using surds.", workingOut: "\\\\(x^2 - 11 = x^2 - (\\sqrt{11})^2\\\\)", graphData: null },
      { explanation: "Apply the difference of two squares formula.", workingOut: "\\\\(x^2 - (\\sqrt{11})^2 = (x - \\sqrt{11})(x + \\sqrt{11})\\\\)", graphData: null },
      { explanation: "Verify by expanding: \\\\((x - \\sqrt{11})(x + \\sqrt{11}) = x^2 - 11\\\\).", workingOut: "\\\\((x - \\sqrt{11})(x + \\sqrt{11}) = x^2 - 11 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-10",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise using surds: \\\\(x^2 - 15\\\\)",
    h: "Write 15 as (√15)² to apply the difference of two squares.",
    opts: ["\\\\((x - 15)(x + 15)\\\\)", "\\\\((x - \\\\sqrt{15})(x + \\\\sqrt{15})\\\\)", "\\\\((x - \\\\sqrt{15})^2\\\\)", "\\\\((15 - x)(15 + x)\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Express 15 as a square using surds.", workingOut: "\\\\(x^2 - 15 = x^2 - (\\sqrt{15})^2\\\\)", graphData: null },
      { explanation: "Factorise using the difference of two squares identity.", workingOut: "\\\\(x^2 - (\\sqrt{15})^2 = (x - \\sqrt{15})(x + \\sqrt{15})\\\\)", graphData: null },
      { explanation: "Check by expanding.", workingOut: "\\\\((x - \\sqrt{15})(x + \\sqrt{15}) = x^2 - 15 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-11",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\((a + b)^2 - c^2\\\\)",
    h: "Treat (a + b) as a single term A and apply A² − c².",
    opts: ["\\\\((a + b - c)(a + b + c)\\\\)", "\\\\((a + b - c)^2\\\\)", "\\\\((a + b + c)^2\\\\)", "\\\\((a - b - c)(a - b + c)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Identify this as the difference of two squares where the first term is a binomial.", workingOut: "\\\\(A^2 - c^2\\\\) where \\\\(A = a + b\\\\)", graphData: null },
      { explanation: "Apply the identity \\\\((A - c)(A + c)\\\\).", workingOut: "\\\\((a + b - c)(a + b + c)\\\\)", graphData: null },
      { explanation: "Verify by expansion.", workingOut: "\\\\((a + b - c)(a + b + c) = (a + b)^2 - c^2 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-12",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\((a - b)^2 - c^2\\\\)",
    h: "Treat (a − b) as a single term. Apply the difference of two squares.",
    opts: ["\\\\((a - b - c)^2\\\\)", "\\\\((a - b - c)(a - b + c)\\\\)", "\\\\((a + b - c)(a + b + c)\\\\)", "\\\\((a - b + c)^2\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Identify the expression as a difference of two squares where the first term is the binomial (a - b).", workingOut: "\\\\(A^2 - c^2\\\\) where \\\\(A = a - b\\\\)", graphData: null },
      { explanation: "Apply the difference of two squares identity.", workingOut: "\\\\((a - b - c)(a - b + c)\\\\)", graphData: null },
      { explanation: "Verify the result by expanding.", workingOut: "\\\\((a - b - c)(a - b + c) = (a - b)^2 - c^2 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-13",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\(x^2 - 3x + 2\\\\)",
    h: "Look for two numbers that multiply to 2 and add up to −3.",
    opts: ["\\\\((x - 2)(x - 1)\\\\)", "\\\\((x + 2)(x + 1)\\\\)", "\\\\((x - 2)(x + 1)\\\\)", "\\\\((x + 2)(x - 1)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "This is a monic quadratic trinomial. We need two numbers that multiply to 2 and sum to -3.", workingOut: "\\\\(p \\times q = 2, \\quad p + q = -3\\\\)", graphData: null },
      { explanation: "The two numbers are -2 and -1.", workingOut: "\\\\(-2 \\times -1 = 2, \\quad -2 + (-1) = -3\\\\)", graphData: null },
      { explanation: "Factorise the quadratic expression using these values.", workingOut: "\\\\(x^2 - 3x + 2 = (x - 2)(x - 1)\\\\)", graphData: null },
      { explanation: "Verify by expanding: \\\\((x-2)(x-1) = x^2 - x - 2x + 2 = x^2 - 3x + 2\\\\).", workingOut: "\\\\((x-2)(x-1) = x^2 - 3x + 2 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-14",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\(c^2 + 12c + 11\\\\)",
    h: "Find two numbers that multiply to 11 and sum to 12.",
    opts: ["\\\\((c + 6)(c + 6)\\\\)", "\\\\((c + 11)(c - 1)\\\\)", "\\\\((c + 11)(c + 1)\\\\)", "\\\\((c + 12)(c + 1)\\\\)"],
    a: 2,
    solutionSteps: [
      { explanation: "Find two numbers that multiply to 11 and sum to 12.", workingOut: "\\\\(p \\times q = 11, \\quad p + q = 12\\\\)", graphData: null },
      { explanation: "The two numbers are 11 and 1.", workingOut: "\\\\(11 \\times 1 = 11, \\quad 11 + 1 = 12\\\\)", graphData: null },
      { explanation: "Factorise the quadratic.", workingOut: "\\\\(c^2 + 12c + 11 = (c + 11)(c + 1)\\\\)", graphData: null },
      { explanation: "Verify by expansion.", workingOut: "\\\\((c+11)(c+1) = c^2 + c + 11c + 11 = c^2 + 12c + 11 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-15",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\(x^2 - 4x - 5\\\\)",
    h: "Find two numbers that multiply to −5 and sum to −4.",
    opts: ["\\\\((x - 5)(x + 1)\\\\)", "\\\\((x + 5)(x - 1)\\\\)", "\\\\((x - 5)(x - 1)\\\\)", "\\\\((x + 4)(x - 1)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Find two numbers that multiply to -5 and sum to -4.", workingOut: "\\\\(p \\times q = -5, \\quad p + q = -4\\\\)", graphData: null },
      { explanation: "The numbers are -5 and 1.", workingOut: "\\\\(-5 \\times 1 = -5, \\quad -5 + 1 = -4\\\\)", graphData: null },
      { explanation: "Factorise using these numbers.", workingOut: "\\\\(x^2 - 4x - 5 = (x - 5)(x + 1)\\\\)", graphData: null },
      { explanation: "Verify by expansion.", workingOut: "\\\\((x-5)(x+1) = x^2 + x - 5x - 5 = x^2 - 4x - 5 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-16",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\(y^2 + 9y - 10\\\\)",
    h: "Look for two numbers that multiply to −10 and sum to 9.",
    opts: ["\\\\((y - 10)(y + 1)\\\\)", "\\\\((y + 10)(y - 1)\\\\)", "\\\\((y + 5)(y + 4)\\\\)", "\\\\((y + 9)(y - 1)\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Find two numbers that multiply to -10 and sum to 9.", workingOut: "\\\\(p \\times q = -10, \\quad p + q = 9\\\\)", graphData: null },
      { explanation: "The numbers are 10 and -1.", workingOut: "\\\\(10 \\times -1 = -10, \\quad 10 + (-1) = 9\\\\)", graphData: null },
      { explanation: "Factorise the quadratic trinomial.", workingOut: "\\\\(y^2 + 9y - 10 = (y + 10)(y - 1)\\\\)", graphData: null },
      { explanation: "Verify the result by expanding.", workingOut: "\\\\((y+10)(y-1) = y^2 - y + 10y - 10 = y^2 + 9y - 10 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-17",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\(z^2 - 6z - 16\\\\)",
    h: "Find two numbers that multiply to −16 and sum to −6.",
    opts: ["\\\\((z + 8)(z - 2)\\\\)", "\\\\((z - 4)(z - 4)\\\\)", "\\\\((z - 8)(z + 2)\\\\)", "\\\\((z - 16)(z + 1)\\\\)"],
    a: 2,
    solutionSteps: [
      { explanation: "Find two numbers that multiply to -16 and sum to -6.", workingOut: "\\\\(p \\times q = -16, \\quad p + q = -6\\\\)", graphData: null },
      { explanation: "The numbers are -8 and 2.", workingOut: "\\\\(-8 \\times 2 = -16, \\quad -8 + 2 = -6\\\\)", graphData: null },
      { explanation: "Factorise the quadratic.", workingOut: "\\\\(z^2 - 6z - 16 = (z - 8)(z + 2)\\\\)", graphData: null },
      { explanation: "Verify by expansion.", workingOut: "\\\\((z-8)(z+2) = z^2 + 2z - 8z - 16 = z^2 - 6z - 16 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-18",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\(c^2 + 8c - 20\\\\)",
    h: "We need two factors of −20 that add up to 8.",
    opts: ["\\\\((c + 10)(c - 2)\\\\)", "\\\\((c - 10)(c + 2)\\\\)", "\\\\((c + 4)(c + 5)\\\\)", "\\\\((c + 20)(c - 1)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Find two numbers that multiply to -20 and sum to 8.", workingOut: "\\\\(p \\times q = -20, \\quad p + q = 8\\\\)", graphData: null },
      { explanation: "The numbers are 10 and -2.", workingOut: "\\\\(10 \\times -2 = -20, \\quad 10 + (-2) = 8\\\\)", graphData: null },
      { explanation: "Factorise the trinomial.", workingOut: "\\\\(c^2 + 8c - 20 = (c + 10)(c - 2)\\\\)", graphData: null },
      { explanation: "Verify by expanding.", workingOut: "\\\\((c+10)(c-2) = c^2 - 2c + 10c - 20 = c^2 + 8c - 20 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-19",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Solve: \\\\(x^2 - 5x + 6 = 0\\\\)",
    h: "Factorise the quadratic first, then apply the null factor law.",
    opts: ["\\\\(x = 2, 3\\\\)", "\\\\(x = -2, -3\\\\)", "\\\\(x = 1, 5\\\\)", "\\\\(x = 2, -3\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Find two numbers that multiply to 6 and sum to -5.", workingOut: "\\\\(p \\times q = 6, \\quad p + q = -5\\\\)", graphData: null },
      { explanation: "The numbers are -2 and -3.", workingOut: "\\\\(-2 \\times -3 = 6, \\quad -2 + (-3) = -5\\\\)", graphData: null },
      { explanation: "Factorise the equation.", workingOut: "\\\\((x - 2)(x - 3) = 0\\\\)", graphData: null },
      { explanation: "Apply the null factor law to find the solutions.", workingOut: "\\\\(x - 2 = 0 \\Rightarrow x = 2 \\quad \\text{or} \\quad x - 3 = 0 \\Rightarrow x = 3\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-20",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Solve: \\\\(x^2 + 3x - 10 = 0\\\\)",
    h: "Factorise first: find two numbers that multiply to −10 and sum to 3.",
    opts: ["\\\\(x = -5, -2\\\\)", "\\\\(x = 5, -2\\\\)", "\\\\(x = -5, 2\\\\)", "\\\\(x = 5, 2\\\\)"],
    a: 2,
    solutionSteps: [
      { explanation: "Find two numbers that multiply to -10 and sum to 3.", workingOut: "\\\\(p \\times q = -10, \\quad p + q = 3\\\\)", graphData: null },
      { explanation: "The numbers are 5 and -2.", workingOut: "\\\\(5 \\times -2 = -10, \\quad 5 + (-2) = 3\\\\)", graphData: null },
      { explanation: "Factorise the quadratic expression.", workingOut: "\\\\((x + 5)(x - 2) = 0\\\\)", graphData: null },
      { explanation: "Apply the null factor law.", workingOut: "\\\\(x + 5 = 0 \\Rightarrow x = -5 \\quad \\text{or} \\quad x - 2 = 0 \\Rightarrow x = 2\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-21",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\(x^2 + 10x + 25\\\\)",
    h: "Recognise that this is a perfect square trinomial.",
    opts: ["\\\\((x + 5)^2\\\\)", "\\\\((x - 5)^2\\\\)", "\\\\((x + 25)(x + 1)\\\\)", "\\\\((x + 5)(x - 5)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Identify the expression as a perfect square trinomial because 25 = 5² and 10x = 2 × 5 × x.", workingOut: "\\\\(x^2 + 2(5)x + 5^2\\\\)", graphData: null },
      { explanation: "Apply the perfect square identity \\\\(A^2 + 2AB + B^2 = (A + B)^2\\\\).", workingOut: "\\\\(x^2 + 10x + 25 = (x + 5)^2\\\\)", graphData: null },
      { explanation: "Verify by expansion.", workingOut: "\\\\((x + 5)^2 = x^2 + 10x + 25 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-22",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\(x^2 - 14x + 49\\\\)",
    h: "Note that 49 = 7² and −14x = 2 × (−7) × x.",
    opts: ["\\\\((x + 7)^2\\\\)", "\\\\((x - 7)(x + 7)\\\\)", "\\\\((x - 7)^2\\\\)", "\\\\((x - 49)(x - 1)\\\\)"],
    a: 2,
    solutionSteps: [
      { explanation: "Observe that the expression is a perfect square trinomial.", workingOut: "\\\\(x^2 - 2(7)x + 7^2\\\\)", graphData: null },
      { explanation: "Apply the perfect square identity \\\\(A^2 - 2AB + B^2 = (A - B)^2\\\\).", workingOut: "\\\\(x^2 - 14x + 49 = (x - 7)^2\\\\)", graphData: null },
      { explanation: "Verify the result by expanding.", workingOut: "\\\\((x - 7)^2 = x^2 - 14x + 49 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-23",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise by grouping: \\\\(x^2 + 3x + xy + 3y\\\\)",
    h: "Group the first two terms and the last two terms, then factor out the common bracket.",
    opts: ["\\\\((x + 3)(x + y)\\\\)", "\\\\((x + 3)(y + 3)\\\\)", "\\\\((x + y)(x + 3y)\\\\)", "\\\\((x^2 + 3)(x + y)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Group the terms in pairs.", workingOut: "\\\\((x^2 + 3x) + (xy + 3y)\\\\)", graphData: null },
      { explanation: "Factor out the common factor from each pair. Factor out x from the first pair, and y from the second.", workingOut: "\\\\(x(x + 3) + y(x + 3)\\\\)", graphData: null },
      { explanation: "Factor out the common binomial factor \\\\((x + 3)\\\\).", workingOut: "\\\\((x + 3)(x + y)\\\\)", graphData: null },
      { explanation: "Verify by expanding: \\\\((x+3)(x+y) = x^2 + xy + 3x + 3y\\\\).", workingOut: "\\\\((x + 3)(x + y) = x^2 + 3x + xy + 3y \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-24",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise by grouping: \\\\(ab + 5b - 2a - 10\\\\)",
    h: "Group terms to extract common factors. Pay attention to the negative sign.",
    opts: ["\\\\((a - 5)(b + 2)\\\\)", "\\\\((a + 5)(b - 2)\\\\)", "\\\\((a + 5)(b + 2)\\\\)", "\\\\((a - 5)(b - 2)\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Group the terms in pairs.", workingOut: "\\\\((ab + 5b) + (-2a - 10)\\\\)", graphData: null },
      { explanation: "Factor out b from the first pair, and -2 from the second.", workingOut: "\\\\(b(a + 5) - 2(a + 5)\\\\)", graphData: null },
      { explanation: "Factor out the common binomial factor \\\\((a + 5)\\\\).", workingOut: "\\\\((a + 5)(b - 2)\\\\)", graphData: null },
      { explanation: "Verify by expansion.", workingOut: "\\\\((a + 5)(b - 2) = ab - 2a + 5b - 10 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-25",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise by grouping: \\\\(2xy + 3y + 10x + 15\\\\)",
    h: "Group terms: first two and last two. Factor out y from the first pair.",
    opts: ["\\\\((2x + 3)(y + 5)\\\\)", "\\\\((2x - 3)(y - 5)\\\\)", "\\\\((x + 3)(2y + 5)\\\\)", "\\\\((2x + 3)(y - 5)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Group the terms in pairs.", workingOut: "\\\\((2xy + 3y) + (10x + 15)\\\\)", graphData: null },
      { explanation: "Factor out y from the first pair, and 5 from the second pair.", workingOut: "\\\\(y(2x + 3) + 5(2x + 3)\\\\)", graphData: null },
      { explanation: "Factor out the common binomial factor \\\\((2x + 3)\\\\).", workingOut: "\\\\((2x + 3)(y + 5)\\\\)", graphData: null },
      { explanation: "Verify the factorisation.", workingOut: "\\\\((2x + 3)(y + 5) = 2xy + 10x + 3y + 15 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-26",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\(x^2 - 16x + 60\\\\)",
    h: "Find two numbers that multiply to 60 and sum to −16.",
    opts: ["\\\\((x - 10)(x - 6)\\\\)", "\\\\((x - 12)(x - 5)\\\\)", "\\\\((x + 10)(x + 6)\\\\)", "\\\\((x - 15)(x - 4)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Find two numbers that multiply to 60 and sum to -16.", workingOut: "\\\\(p \\times q = 60, \\quad p + q = -16\\\\)", graphData: null },
      { explanation: "The numbers are -10 and -6.", workingOut: "\\\\(-10 \\times -6 = 60, \\quad -10 + (-6) = -16\\\\)", graphData: null },
      { explanation: "Factorise using these numbers.", workingOut: "\\\\(x^2 - 16x + 60 = (x - 10)(x - 6)\\\\)", graphData: null },
      { explanation: "Verify by expanding.", workingOut: "\\\\((x-10)(x-6) = x^2 - 6x - 10x + 60 = x^2 - 16x + 60 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-27",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\(x^2 + 5x - 36\\\\)",
    h: "We need two numbers that multiply to −36 and sum to 5.",
    opts: ["\\\\((x - 9)(x + 4)\\\\)", "\\\\((x + 6)(x - 6)\\\\)", "\\\\((x + 9)(x - 4)\\\\)", "\\\\((x + 12)(x - 3)\\\\)"],
    a: 2,
    solutionSteps: [
      { explanation: "Find two numbers that multiply to -36 and sum to 5.", workingOut: "\\\\(p \\times q = -36, \\quad p + q = 5\\\\)", graphData: null },
      { explanation: "The numbers are 9 and -4.", workingOut: "\\\\(9 \\times -4 = -36, \\quad 9 + (-4) = 5\\\\)", graphData: null },
      { explanation: "Factorise using these values.", workingOut: "\\\\(x^2 + 5x - 36 = (x + 9)(x - 4)\\\\)", graphData: null },
      { explanation: "Verify by expansion.", workingOut: "\\\\((x+9)(x-4) = x^2 - 4x + 9x - 36 = x^2 + 5x - 36 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-28",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\(x^2 - x - 72\\\\)",
    h: "Find two numbers that multiply to −72 and sum to −1.",
    opts: ["\\\\((x - 9)(x + 8)\\\\)", "\\\\((x + 9)(x - 8)\\\\)", "\\\\((x - 12)(x + 6)\\\\)", "\\\\((x - 8)(x - 9)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Find two numbers that multiply to -72 and sum to -1.", workingOut: "\\\\(p \\times q = -72, \\quad p + q = -1\\\\)", graphData: null },
      { explanation: "The numbers are -9 and 8.", workingOut: "\\\\(-9 \\times 8 = -72, \\quad -9 + 8 = -1\\\\)", graphData: null },
      { explanation: "Factorise using these numbers.", workingOut: "\\\\(x^2 - x - 72 = (x - 9)(x + 8)\\\\)", graphData: null },
      { explanation: "Verify by expanding.", workingOut: "\\\\((x-9)(x+8) = x^2 + 8x - 9x - 72 = x^2 - x - 72 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-29",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\(x^2 + x - 90\\\\)",
    h: "Find two numbers that multiply to −90 and sum to 1.",
    opts: ["\\\\((x - 10)(x + 9)\\\\)", "\\\\((x + 10)(x - 9)\\\\)", "\\\\((x + 15)(x - 6)\\\\)", "\\\\((x + 10)(x + 9)\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Find two numbers that multiply to -90 and sum to 1.", workingOut: "\\\\(p \\times q = -90, \\quad p + q = 1\\\\)", graphData: null },
      { explanation: "The numbers are 10 and -9.", workingOut: "\\\\(10 \\times -9 = -90, \\quad 10 + (-9) = 1\\\\)", graphData: null },
      { explanation: "Factorise using these numbers.", workingOut: "\\\\(x^2 + x - 90 = (x + 10)(x - 9)\\\\)", graphData: null },
      { explanation: "Verify the result.", workingOut: "\\\\((x+10)(x-9) = x^2 - 9x + 10x - 90 = x^2 + x - 90 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-30",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\(x^2 - 20x + 99\\\\)",
    h: "Find two numbers that multiply to 99 and sum to −20.",
    opts: ["\\\\((x - 9)(x - 11)\\\\)", "\\\\((x + 9)(x + 11)\\\\)", "\\rule{0pt}{1.2em}\\\\((x - 9)^2\\\\)", "\\\\((x - 33)(x - 3)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Find two numbers that multiply to 99 and sum to -20.", workingOut: "\\\\(p \\times q = 99, \\quad p + q = -20\\\\)", graphData: null },
      { explanation: "The numbers are -9 and -11.", workingOut: "\\\\(-9 \\times -11 = 99, \\quad -9 + (-11) = -20\\\\)", graphData: null },
      { explanation: "Factorise the trinomial.", workingOut: "\\\\(x^2 - 20x + 99 = (x - 9)(x - 11)\\\\)", graphData: null },
      { explanation: "Verify by expansion.", workingOut: "\\\\((x-9)(x-11) = x^2 - 11x - 9x + 99 = x^2 - 20x + 99 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },

  // ── HARD (Q31–Q60) ─────────────────────────────────────────────────────────
  {
    id: "y10-3f-31",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise completely: \\\\(3a^2 - 75\\\\)",
    h: "Always look for a common factor first. Factor out 3.",
    opts: ["\\\\(3(a - 5)^2\\\\)", "\\\\(3(a - 5)(a + 5)\\\\)", "\\\\((3a - 15)(a + 5)\\\\)", "\\\\(3(a^2 - 25)\\\\Position 3 is incorrect\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Factor out the greatest common factor, which is 3.", workingOut: "\\\\(3a^2 - 75 = 3(a^2 - 25)\\\\)", graphData: null },
      { explanation: "Identify \\\\(a^2 - 25\\\\) as a difference of two squares: \\\\(a^2 - 5^2\\\\).", workingOut: "\\\\(a^2 - 25 = (a - 5)(a + 5)\\\\)", graphData: null },
      { explanation: "Combine the common factor with the factorised difference of squares.", workingOut: "\\\\(3a^2 - 75 = 3(a - 5)(a + 5)\\\\)", graphData: null },
      { explanation: "Verify by expansion.", workingOut: "\\\\(3(a-5)(a+5) = 3(a^2 - 25) = 3a^2 - 75 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-32",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise completely: \\\\(2x^3 - 50x\\\\)",
    h: "Look for a common factor. Factor out 2x first.",
    opts: ["\\\\(2x(x - 5)^2\\\\)", "\\\\(2(x^2 - 25)\\\\)", "\\\\(2x(x - 5)(x + 5)\\\\)", "\\\\((2x^2 - 10x)(x + 5)\\\\)"],
    a: 2,
    solutionSteps: [
      { explanation: "Identify and factor out the greatest common factor of \\\\(2x\\\\).", workingOut: "\\\\(2x^3 - 50x = 2x(x^2 - 25)\\\\)", graphData: null },
      { explanation: "Factorise \\\\(x^2 - 25 = x^2 - 5^2\\\\) as a difference of two squares.", workingOut: "\\\\(x^2 - 25 = (x - 5)(x + 5)\\\\)", graphData: null },
      { explanation: "Combine the factors.", workingOut: "\\\\(2x^3 - 50x = 2x(x - 5)(x + 5)\\\\)", graphData: null },
      { explanation: "Verify the result by expanding.", workingOut: "\\\\(2x(x - 5)(x + 5) = 2x(x^2 - 25) = 2x^3 - 50x \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-33",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise completely: \\\\(2a^2 + 8a - 154\\\\)",
    h: "Factor out the common factor of 2 first, then factorise the remaining quadratic.",
    opts: ["\\\\(2(a - 7)(a + 11)\\\\)", "\\\\(2(a + 7)(a - 11)\\\\)", "\\\\(2(a^2 + 4a - 77)\\\\)", "\\\\((2a - 14)(a + 11)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Factor out the common factor of 2 from all terms.", workingOut: "\\\\(2a^2 + 8a - 154 = 2(a^2 + 4a - 77)\\\\)", graphData: null },
      { explanation: "Find two numbers that multiply to -77 and sum to 4.", workingOut: "\\\\(p \\times q = -77, \\quad p + q = 4\\\\)", graphData: null },
      { explanation: "The numbers are 11 and -7.", workingOut: "\\\\(11 \\times -7 = -77, \\quad 11 + (-7) = 4\\\\)", graphData: null },
      { explanation: "Factorise the trinomial inside the bracket.", workingOut: "\\\\(a^2 + 4a - 77 = (a - 7)(a + 11)\\\\)", graphData: null },
      { explanation: "Write the final fully factorised expression.", workingOut: "\\\\(2a^2 + 8a - 154 = 2(a - 7)(a + 11) \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-34",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise completely: \\\\(3x^2 + 12x - 231\\\\)",
    h: "Factor out 3 first, then factorise the quadratic trinomial.",
    opts: ["\\\\(3(x - 7)(x + 11)\\\\)", "\\\\(3(x + 7)(x - 11)\\\\)", "\\\\(3(x^2 + 4x - 77)\\\\)", "\\\\((3x - 21)(x + 11)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Factor out the greatest common factor of 3.", workingOut: "\\\\(3x^2 + 12x - 231 = 3(x^2 + 4x - 77)\\\\)", graphData: null },
      { explanation: "Factorise the quadratic inside the bracket: find two numbers that multiply to -77 and sum to 4.", workingOut: "\\\\(x^2 + 4x - 77 = (x - 7)(x + 11)\\\\)", graphData: null },
      { explanation: "Write the completely factorised expression.", workingOut: "\\\\(3x^2 + 12x - 231 = 3(x - 7)(x + 11) \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-35",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise completely: \\\\(3x^2 - 33x + 90\\\\)",
    h: "Factor out the GCF of 3 first, then factorise the quadratic inside.",
    opts: ["\\\\(3(x - 5)(x - 6)\\\\)", "\\\\(3(x - 10)(x - 3)\\\\)", "\\\\(3(x - 5)(x - 18)\\\\)", "\\\\(3(x^2 - 11x + 30)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Factor out 3 from all terms.", workingOut: "\\\\(3x^2 - 33x + 90 = 3(x^2 - 11x + 30)\\\\)", graphData: null },
      { explanation: "Find two numbers that multiply to 30 and sum to -11.", workingOut: "\\\\(p \\times q = 30, \\quad p + q = -11\\\\)", graphData: null },
      { explanation: "The numbers are -5 and -6.", workingOut: "\\\\(-5 \\times -6 = 30, \\quad -5 + (-6) = -11\\\\)", graphData: null },
      { explanation: "Factorise the quadratic bracket.", workingOut: "\\\\(x^2 - 11x + 30 = (x - 5)(x - 6)\\\\)", graphData: null },
      { explanation: "Combine for the final factorised form.", workingOut: "\\\\(3x^2 - 33x + 90 = 3(x - 5)(x - 6) \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-36",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise completely: \\\\(5x^2 + 25x - 330\\\\)",
    h: "Factor out the common factor of 5 first.",
    opts: ["\\\\(5(x - 6)(x + 11)\\\\)", "\\\\(5(x + 6)(x - 11)\\\\)", "\\\\(5(x^2 + 5x - 66)\\\\)", "\\\\((5x - 30)(x + 11)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Extract the greatest common factor of 5 from all terms.", workingOut: "\\\\(5x^2 + 25x - 330 = 5(x^2 + 5x - 66)\\\\)", graphData: null },
      { explanation: "Find two numbers that multiply to -66 and sum to 5.", workingOut: "\\\\(p \\times q = -66, \\quad p + q = 5\\\\)", graphData: null },
      { explanation: "The numbers are 11 and -6.", workingOut: "\\\\(11 \\times -6 = -66, \\quad 11 + (-6) = 5\\\\)", graphData: null },
      { explanation: "Factorise the remaining quadratic expression.", workingOut: "\\\\(x^2 + 5x - 66 = (x - 6)(x + 11)\\\\)", graphData: null },
      { explanation: "Write the final factorised answer.", workingOut: "\\\\(5x^2 + 25x - 330 = 5(x - 6)(x + 11) \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-37",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise completely: \\\\(6x^2 + 6x - 12\\\\)",
    h: "Factor out 6 first, then factorise the quadratic trinomial.",
    opts: ["\\\\(6(x - 1)(x + 2)\\\\)", "\\\\(6(x + 1)(x - 2)\\\\)", "\\\\(6(x - 1)(x - 2)\\\\)", "\\\\(6(x^2 + x - 2)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Extract the GCF of 6.", workingOut: "\\\\(6x^2 + 6x - 12 = 6(x^2 + x - 2)\\\\)", graphData: null },
      { explanation: "Factorise the quadratic: find two numbers that multiply to -2 and sum to 1.", workingOut: "\\\\(x^2 + x - 2 = (x - 1)(x + 2)\\\\)", graphData: null },
      { explanation: "Write the final form.", workingOut: "\\\\(6x^2 + 6x - 12 = 6(x - 1)(x + 2) \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-38",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise completely: \\\\(3x^2 - 18x - 21\\\\)",
    h: "Factor out the common factor of 3 first.",
    opts: ["\\\\(3(x + 1)(x - 7)\\\\)", "\\\\(3(x - 1)(x + 7)\\\\)", "\\\\(3(x - 7)^2\\\\)", "\\\\(3(x^2 - 6x - 7)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Factor out 3 from all terms.", workingOut: "\\\\(3x^2 - 18x - 21 = 3(x^2 - 6x - 7)\\\\)", graphData: null },
      { explanation: "Find two numbers that multiply to -7 and sum to -6.", workingOut: "\\\\(p \\times q = -7, \\quad p + q = -6\\\\)", graphData: null },
      { explanation: "The numbers are -7 and 1.", workingOut: "\\\\(-7 \\times 1 = -7, \\quad -7 + 1 = -6\\\\)", graphData: null },
      { explanation: "Factorise the quadratic.", workingOut: "\\\\(x^2 - 6x - 7 = (x - 7)(x + 1)\\\\)", graphData: null },
      { explanation: "Write the completely factorised expression.", workingOut: "\\\\(3x^2 - 18x - 21 = 3(x - 7)(x + 1) \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-39",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise completely: \\\\(3x^2 - 9x - 30\\\\)",
    h: "Factor out 3 first, then factorise the remaining monic quadratic.",
    opts: ["\\\\(3(x - 5)(x + 2)\\\\)", "\\\\(3(x + 5)(x - 2)\\\\)", "\\\\(3(x - 5)(x - 2)\\\\)", "\\\\(3(x^2 - 3x - 10)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Factor out the greatest common factor of 3.", workingOut: "\\\\(3x^2 - 9x - 30 = 3(x^2 - 3x - 10)\\\\)", graphData: null },
      { explanation: "Find two numbers that multiply to -10 and sum to -3.", workingOut: "\\\\(p \\times q = -10, \\quad p + q = -3\\\\)", graphData: null },
      { explanation: "The numbers are -5 and 2.", workingOut: "\\\\(-5 \\times 2 = -10, \\quad -5 + 2 = -3\\\\)", graphData: null },
      { explanation: "Factorise the quadratic bracket.", workingOut: "\\\\(x^2 - 3x - 10 = (x - 5)(x + 2)\\\\)", graphData: null },
      { explanation: "Write the completely factorised form.", workingOut: "\\\\(3x^2 - 9x - 30 = 3(x - 5)(x + 2) \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-40",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise completely: \\\\(2x^2 + 10x - 132\\\\)",
    h: "Start by factoring out the common factor of 2.",
    opts: ["\\\\(2(x + 11)(x - 6)\\\\)", "\\\\(2(x - 11)(x + 6)\\\\)", "\\\\(2(x^2 + 5x - 66)\\\\)", "\\\\((2x - 12)(x + 11)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Factor out the greatest common factor of 2.", workingOut: "\\\\(2x^2 + 10x - 132 = 2(x^2 + 5x - 66)\\\\)", graphData: null },
      { explanation: "Factorise the quadratic: find two numbers that multiply to -66 and sum to 5.", workingOut: "\\\\(x^2 + 5x - 66 = (x - 6)(x + 11)\\\\)", graphData: null },
      { explanation: "Write the fully factorised form.", workingOut: "\\\\(2x^2 + 10x - 132 = 2(x - 6)(x + 11) \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-41",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise: \\\\(x^2 - y^2 + 2x + 1\\\\)",
    h: "Group the x terms with the constant: (x² + 2x + 1) − y².",
    opts: ["\\\\((x - y + 1)^2\\\\)", "\\\\((x + 1 - y)(x + 1 + y)\\\\)", "\\\\((x + y + 1)(x - y - 1)\\\\)", "\\\\((x + 1)^2 - y^2\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Group the terms to form a perfect square trinomial.", workingOut: "\\\\(x^2 - y^2 + 2x + 1 = (x^2 + 2x + 1) - y^2\\\\)", graphData: null },
      { explanation: "Factorise the perfect square trinomial.", workingOut: "\\\\(x^2 + 2x + 1 = (x + 1)^2\\\\)", graphData: null },
      { explanation: "Rewrite the expression as a difference of two squares.", workingOut: "\\\\((x + 1)^2 - y^2\\\\)", graphData: null },
      { explanation: "Apply the difference of two squares identity.", workingOut: "\\\\((x + 1 - y)(x + 1 + y)\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-42",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise: \\\\(8x^2 - 18y^2\\\\)",
    h: "Factor out the common factor of 2 first, then apply the difference of two squares.",
    opts: ["\\\\(2(2x - 3y)(2x + 3y)\\\\)", "\\\\(2(2x - 3y)^2\\\\)", "\\\\(8(x^2 - 2.25y^2)\\\\)", "\\\\((4x - 6y)(2x + 3y)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Factor out the greatest common factor of 2.", workingOut: "\\\\(8x^2 - 18y^2 = 2(4x^2 - 9y^2)\\\\)", graphData: null },
      { explanation: "Identify \\\\(4x^2 - 9y^2\\\\) as a difference of two squares: \\\\((2x)^2 - (3y)^2\\\\).", workingOut: "\\\\(4x^2 - 9y^2 = (2x - 3y)(2x + 3y)\\\\)", graphData: null },
      { explanation: "Combine the results.", workingOut: "\\\\(8x^2 - 18y^2 = 2(2x - 3y)(2x + 3y) \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-43",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise: \\\\(5m^2 - 13m - 6\\\\)",
    h: "This is a non-monic quadratic. Multiply 5 by −6 and split the middle term.",
    opts: ["\\\\((5m - 2)(m + 3)\\\\)", "\\\\((5m + 3)(m - 2)\\\\)", "\\\\((5m + 2)(m - 3)\\\\)", "\\\\((m - 6)(5m + 1)\\\\)"],
    a: 2,
    solutionSteps: [
      { explanation: "Multiply the coefficient of m² by the constant term.", workingOut: "\\\\(5 \\times -6 = -30\\\\)", graphData: null },
      { explanation: "Find two numbers that multiply to -30 and sum to -13.", workingOut: "\\\\(p \\times q = -30, \\quad p + q = -13\\\\)", graphData: null },
      { explanation: "The numbers are -15 and 2. Split the middle term.", workingOut: "\\\\(5m^2 - 15m + 2m - 6\\\\)", graphData: null },
      { explanation: "Factor by grouping: group the first two terms and the last two terms.", workingOut: "\\\\(5m(m - 3) + 2(m - 3) = (5m + 2)(m - 3)\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-44",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise: \\\\(4x^2 + 20x + 25\\\\)",
    h: "Check if this is a perfect square trinomial: (2x)² + 2(2x)(5) + 5².",
    opts: ["\\\\((2x + 5)^2\\\\)", "\\\\((2x - 5)^2\\\\)", "\\\\((4x + 5)(x + 5)\\\\)", "\\\\((2x + 25)(2x + 1)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Recognise the terms as perfect squares: \\\\(4x^2 = (2x)^2\\\\) and \\\\(25 = 5^2\\\\).", workingOut: "\\\\((2x)^2 + 20x + 5^2\\\\)", graphData: null },
      { explanation: "Verify if the middle term matches \\\\(2AB\\\\).", workingOut: "\\\\(2(2x)(5) = 20x \\quad \\text{(Matches middle term)}\\\\)", graphData: null },
      { explanation: "Factorise using the perfect square trinomial identity.", workingOut: "\\\\(4x^2 + 20x + 25 = (2x + 5)^2 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-45",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise: \\\\(4x^2 + 4x - 3\\\\)",
    h: "This is a non-monic quadratic. Multiply 4 by −3 = −12, and split the middle term.",
    opts: ["\\\\((2x - 1)(2x + 3)\\\\)", "\\\\((2x + 1)(2x - 3)\\\\)", "\\\\((4x - 1)(x + 3)\\\\)", "\\\\((2x + 1)(2x + 3)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Multiply the first and last coefficients.", workingOut: "\\\\(4 \\times -3 = -12\\\\)", graphData: null },
      { explanation: "Find two numbers that multiply to -12 and sum to 4. These are 6 and -2.", workingOut: "\\\\(6 \\times -2 = -12, \\quad 6 + (-2) = 4\\\\)", graphData: null },
      { explanation: "Split the middle term.", workingOut: "\\\\(4x^2 + 6x - 2x - 3\\\\)", graphData: null },
      { explanation: "Factor by grouping: group the first two terms and the last two terms.", workingOut: "\\\\(2x(2x + 3) - 1(2x + 3) = (2x - 1)(2x + 3)\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-46",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise: \\\\(2x^2 + 11x + 12\\\\)",
    h: "Multiply 2 by 12 = 24. Find two numbers that multiply to 24 and sum to 11.",
    opts: ["\\\\((2x + 4)(x + 3)\\\\)", "\\\\((2x + 3)(x + 4)\\\\)", "\\\\((x + 6)(2x + 2)\\\\)", "\\\\((2x - 3)(x - 4)\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Multiply the coefficient of x² by the constant term.", workingOut: "\\\\(2 \\times 12 = 24\\\\)", graphData: null },
      { explanation: "Find two numbers that multiply to 24 and sum to 11. These are 8 and 3.", workingOut: "\\\\(8 \\times 3 = 24, \\quad 8 + 3 = 11\\\\)", graphData: null },
      { explanation: "Split the middle term.", workingOut: "\\\\(2x^2 + 8x + 3x + 12\\\\)", graphData: null },
      { explanation: "Factor by grouping: group terms to extract the common bracket.", workingOut: "\\\\(2x(x + 4) + 3(x + 4) = (2x + 3)(x + 4)\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-47",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise: \\\\(6a^2 - 7a - 5\\\\)",
    h: "Multiply 6 by −5 = −30. Find two numbers that multiply to −30 and sum to −7.",
    opts: ["\\\\((3a - 5)(2a + 1)\\\\)", "\\\\((3a + 5)(2a - 1)\\\\)", "\\\\((2a - 5)(3a + 1)\\\\)", "\\\\((6a + 5)(a - 1)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Multiply the leading coefficient by the constant term.", workingOut: "\\\\(6 \\times -5 = -30\\\\)", graphData: null },
      { explanation: "Find two numbers that multiply to -30 and sum to -7. These are -10 and 3.", workingOut: "\\\\(-10 \\times 3 = -30, \\quad -10 + 3 = -7\\\\)", graphData: null },
      { explanation: "Split the middle term.", workingOut: "\\\\(6a^2 - 10a + 3a - 5\\\\)", graphData: null },
      { explanation: "Factor by grouping.", workingOut: "\\\\(2a(3a - 5) + 1(3a - 5) = (3a - 5)(2a + 1)\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-48",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise: \\\\(3y^2 + 14y + 8\\\\)",
    h: "Multiply 3 by 8 = 24. Find two numbers that multiply to 24 and sum to 14.",
    opts: ["\\\\((3y + 2)(y + 4)\\\\)", "\\\\((3y + 4)(y + 2)\\\\)", "\\rule{0pt}{1.2em}\\\\((3y + 8)(y + 1)\\\\)", "\\\\((3y - 2)(y - 4)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Multiply the coefficient of y² by the constant term.", workingOut: "\\\\(3 \\times 8 = 24\\\\)", graphData: null },
      { explanation: "Find factors of 24 that add up to 14. These are 12 and 2.", workingOut: "\\\\(12 \\times 2 = 24, \\quad 12 + 2 = 14\\\\)", graphData: null },
      { explanation: "Split the middle term.", workingOut: "\\\\(3y^2 + 12y + 2y + 8\\\\)", graphData: null },
      { explanation: "Factor by grouping.", workingOut: "\\\\(3y(y + 4) + 2(y + 4) = (3y + 2)(y + 4)\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-49",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise: \\\\(6s^2 - 11st - 10t^2\\\\)",
    h: "Multiply 6 by −10 = −60. Find two numbers that multiply to −60 and sum to −11.",
    opts: ["\\\\((3s - 2t)(2s + 5t)\\\\)", "\\\\((3s + 2t)(2s - 5t)\\\\)", "\\\\((6s + 2t)(s - 5t)\\\\)", "\\\\((3s + 5t)(2s - 2t)\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Multiply the leading coefficient by the constant coefficient.", workingOut: "\\\\(6 \\times -10 = -60\\\\)", graphData: null },
      { explanation: "Find factors of -60 that sum to -11. These are -15 and 4.", workingOut: "\\\\(-15 \\times 4 = -60, \\quad -15 + 4 = -11\\\\)", graphData: null },
      { explanation: "Split the middle term and factor by grouping.", workingOut: "\\\\(6s^2 - 15st + 4st - 10t^2\\\\)", graphData: null },
      { explanation: "Factor out common terms from each pair.", workingOut: "\\\\(3s(2s - 5t) + 2t(2s - 5t) = (3s + 2t)(2s - 5t)\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-50",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise: \\\\(p^2 - 11p - 26\\\\)",
    h: "Find two numbers that multiply to −26 and sum to −11.",
    opts: ["\\\\((p + 13)(p - 2)\\\\)", "\\\\((p - 13)(p + 2)\\\\)", "\\\\((p - 26)(p + 1)\\\\)", "\\\\((p - 11)(p - 2)\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Identify this as a quadratic trinomial. We need two numbers that multiply to -26 and sum to -11.", workingOut: "\\\\(p \\times q = -26, \\quad p + q = -11\\\\)", graphData: null },
      { explanation: "The numbers are -13 and 2.", workingOut: "\\\\(-13 \\times 2 = -26, \\quad -13 + 2 = -11\\\\)", graphData: null },
      { explanation: "Factorise the quadratic.", workingOut: "\\\\(p^2 - 11p - 26 = (p - 13)(p + 2)\\\\)", graphData: null },
      { explanation: "Verify by expansion.", workingOut: "\\\\((p-13)(p+2) = p^2 + 2p - 13p - 26 = p^2 - 11p - 26 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-51",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise: \\\\((x - 3)^2 - 5\\\\)",
    h: "Use difference of two squares by writing 5 as (√5)².",
    opts: ["\\\\((x - 3 - \\\\sqrt{5})(x - 3 + \\\\sqrt{5})\\\\)", "\\\\((x - 3 - 5)(x - 3 + 5)\\\\)", "\\\\((x - 8)(x + 2)\\\\)", "\\\\((x - 3 - \\\\sqrt{5})^2\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Rewrite 5 as a square using a surd.", workingOut: "\\\\((x - 3)^2 - (\\sqrt{5})^2\\\\)", graphData: null },
      { explanation: "Apply the difference of two squares identity.", workingOut: "\\\\((x - 3 - \\sqrt{5})(x - 3 + \\sqrt{5})\\\\)", graphData: null },
      { explanation: "Verify the result by expanding.", workingOut: "\\\\((x-3-\\sqrt{5})(x-3+\\sqrt{5}) = (x-3)^2 - 5 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-52",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise: \\\\(12x^2 - 7x - 12\\\\)",
    h: "Multiply 12 by −12 = −144. Find two numbers that multiply to −144 and sum to −7.",
    opts: ["\\\\((4x + 3)(3x - 4)\\\\)", "\\\\((4x - 3)(3x + 4)\\\\)", "\\\\((6x + 3)(2x - 4)\\\\)", "\\\\((12x + 1)(x - 12)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Multiply the coefficient of x² by the constant term.", workingOut: "\\\\(12 \\times -12 = -144\\\\)", graphData: null },
      { explanation: "Find factors of -144 that sum to -7. These are -16 and 9.", workingOut: "\\\\(-16 \\times 9 = -144, \\quad -16 + 9 = -7\\\\)", graphData: null },
      { explanation: "Split the middle term.", workingOut: "\\\\(12x^2 - 16x + 9x - 12\\\\)", graphData: null },
      { explanation: "Factor by grouping.", workingOut: "\\\\(4x(3x - 4) + 3(3x - 4) = (4x + 3)(3x - 4)\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-53",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise: \\\\(6x^2 + 11x - 10\\\\)",
    h: "Multiply 6 by −10 = −60. Find factors of −60 that sum to 11.",
    opts: ["\\\\((3x + 2)(2x - 5)\\\\)", "\\\\((3x - 2)(2x + 5)\\\\)", "\\\\((6x - 5)(x + 2)\\\\)", "\\\\((2x - 2)(3x + 5)\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Multiply the leading coefficient by the constant term.", workingOut: "\\\\(6 \\times -10 = -60\\\\)", graphData: null },
      { explanation: "Find factors of -60 that sum to 11. These are 15 and -4.", workingOut: "\\\\(15 \\times -4 = -60, \\quad 15 + (-4) = 11\\\\)", graphData: null },
      { explanation: "Split the middle term.", workingOut: "\\\\(6x^2 + 15x - 4x - 10\\\\)", graphData: null },
      { explanation: "Factor by grouping.", workingOut: "\\\\(3x(2x + 5) - 2(2x + 5) = (3x - 2)(2x + 5)\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-54",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise: \\\\((2x + 1)^2 - 20\\\\)",
    h: "Use difference of two squares, writing 20 as (√20)² = (2√5)².",
    opts: ["\\\\((2x + 1 - 2\\\\sqrt{5})(2x + 1 + 2\\\\sqrt{5})\\\\)", "\\\\((2x + 1 - \\\\sqrt{20})(2x + 1 + \\\\sqrt{20})\\\\)", "\\\\((2x - 19)(2x + 21)\\\\)", "\\\\((2x + 1 - 2\\\\sqrt{5})^2\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Rewrite 20 as a simplified square using a surd.", workingOut: "\\\\(20 = (\\sqrt{20})^2 = (2\\sqrt{5})^2\\\\)", graphData: null },
      { explanation: "Apply the difference of two squares identity with A = 2x + 1 and B = 2√5.", workingOut: "\\\\((2x + 1)^2 - (2\\sqrt{5})^2 = (2x + 1 - 2\\sqrt{5})(2x + 1 + 2\\sqrt{5})\\\\)", graphData: null },
      { explanation: "Verify the result by expanding.", workingOut: "\\\\((2x+1-2\\sqrt{5})(2x+1+2\\sqrt{5}) = (2x+1)^2 - 20 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-55",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise: \\\\(a^4 - b^4\\\\)",
    h: "Notice that a⁴ = (a²)² and b⁴ = (b²)². Apply difference of two squares twice.",
    opts: ["\\\\((a^2 - b^2)^2\\\\)", "\\\\((a^2 + b^2)(a^2 - b^2)\\\\)", "\\\\((a^2 + b^2)(a - b)(a + b)\\\\)", "\\\\((a - b)^4\\\\)"],
    a: 2,
    solutionSteps: [
      { explanation: "Rewrite the expression as a difference of two squares of squares.", workingOut: "\\\\(a^4 - b^4 = (a^2)^2 - (b^2)^2\\\\)", graphData: null },
      { explanation: "Factorise using the difference of two squares identity at the first level.", workingOut: "\\\\((a^2)^2 - (b^2)^2 = (a^2 + b^2)(a^2 - b^2)\\\\)", graphData: null },
      { explanation: "Factorise the difference of squares term \\\\((a^2 - b^2)\\\\) further.", workingOut: "\\\\(a^2 - b^2 = (a - b)(a + b)\\\\)", graphData: null },
      { explanation: "Combine all factors for the complete factorisation.", workingOut: "\\\\(a^4 - b^4 = (a^2 + b^2)(a - b)(a + b) \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-56",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise: \\\\(12x^2 + 5x - 2\\\\)",
    h: "Multiply 12 by −2 = −24. Find factors of −24 that sum to 5.",
    opts: ["\\\\((4x + 3)(3x - 2)\\\\)", "\\rule{0pt}{1.2em}\\\\((4x - 1)(3x + 2)\\\\)", "\\\\((4x - 3)(3x + 2)\\\\)", "\\\\((12x - 1)(x + 2)\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Multiply the coefficient of x² by the constant term.", workingOut: "\\\\(12 \\times -2 = -24\\\\)", graphData: null },
      { explanation: "Find factors of -24 that sum to 5. These are 8 and -3.", workingOut: "\\\\(8 \\times -3 = -24, \\quad 8 + (-3) = 5\\\\)", graphData: null },
      { explanation: "Split the middle term.", workingOut: "\\\\(12x^2 + 8x - 3x - 2\\\\)", graphData: null },
      { explanation: "Factor by grouping.", workingOut: "\\\\(4x(3x + 2) - 1(3x + 2) = (4x - 1)(3x + 2)\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-57",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise: \\\\((x + 4)^2 - 2\\\\)",
    h: "Write 2 as (√2)² to apply difference of two squares.",
    opts: ["\\\\((x + 4 - \\\\sqrt{2})(x + 4 + \\\\sqrt{2})\\\\)", "\\\\((x + 4 - 2)(x + 4 + 2)\\\\)", "\\\\((x + 2)(x + 6)\\\\)", "\\\\((x + 4 - \\\\sqrt{2})^2\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Express 2 as a square using surds.", workingOut: "\\\\((x + 4)^2 - (\\sqrt{2})^2\\\\)", graphData: null },
      { explanation: "Apply the difference of two squares identity.", workingOut: "\\\\((x + 4 - \\sqrt{2})(x + 4 + \\sqrt{2})\\\\)", graphData: null },
      { explanation: "Verify the result by expanding.", workingOut: "\\\\((x + 4 - \\sqrt{2})(x + 4 + \\sqrt{2}) = (x + 4)^2 - 2 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-58",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise: \\\\((3 - 2x)^2 - 10\\\\)",
    h: "Write 10 as (√10)² to use difference of two squares.",
    opts: ["\\\\((3 - 2x - 10)(3 - 2x + 10)\\\\)", "\\\\((3 - 2x - \\\\sqrt{10})(3 - 2x + \\\\sqrt{10})\\\\)", "\\\\(( -7 - 2x)(13 - 2x)\\\\)", "\\\\((3 - 2x - \\\\sqrt{10})^2\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Express 10 as a square using a surd.", workingOut: "\\\\((3 - 2x)^2 - (\\sqrt{10})^2\\\\)", graphData: null },
      { explanation: "Apply the difference of two squares formula.", workingOut: "\\\\((3 - 2x - \\sqrt{10})(3 - 2x + \\sqrt{10})\\\\)", graphData: null },
      { explanation: "Verify the factors by expanding.", workingOut: "\\\\((3 - 2x - \\sqrt{10})(3 - 2x + \\sqrt{10}) = (3 - 2x)^2 - 10 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-59",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise: \\\\(3mx - 21x + 2m - 14\\\\)",
    h: "Group terms into pairs and factor out common expressions.",
    opts: ["\\\\((m - 7)(3x + 2)\\\\)", "\\\\((m + 7)(3x - 2)\\\\)", "\\\\((3m - 7)(x + 2)\\\\)", "\\\\((m - 7)(3x - 2)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Group the terms in pairs.", workingOut: "\\\\((3mx - 21x) + (2m - 14)\\\\)", graphData: null },
      { explanation: "Factor out 3x from the first pair, and 2 from the second pair.", workingOut: "\\\\(3x(m - 7) + 2(m - 7)\\\\)", graphData: null },
      { explanation: "Factor out the common binomial factor \\\\((m - 7)\\\\).", workingOut: "\\\\((m - 7)(3x + 2)\\\\)", graphData: null },
      { explanation: "Verify by expansion.", workingOut: "\\\\((m - 7)(3x + 2) = 3mx + 2m - 21x - 14 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3f-60",
    c: "3F",
    t: "Monic quadratics and grouping",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise: \\\\(3x^2 + 8x - 3\\\\)",
    h: "Multiply 3 by −3 = −9. Find two numbers that multiply to −9 and sum to 8.",
    opts: ["\\\\((3x - 1)(x + 3)\\\\)", "\\\\((3x + 1)(x - 3)\\\\)", "\\\\((x + 3)(3x + 1)\\\\)", "\\\\((3x - 3)(x + 1)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Multiply the coefficient of x² by the constant term.", workingOut: "\\\\(3 \\times -3 = -9\\\\)", graphData: null },
      { explanation: "Find factors of -9 that sum to 8. These are 9 and -1.", workingOut: "\\\\(9 \\times -1 = -9, \\quad 9 + (-1) = 8\\\\)", graphData: null },
      { explanation: "Split the middle term.", workingOut: "\\\\(3x^2 + 9x - x - 3\\\\)", graphData: null },
      { explanation: "Factor by grouping: group terms to extract the common bracket.", workingOut: "\\\\(3x(x + 3) - 1(x + 3) = (3x - 1)(x + 3)\\\\)", graphData: null }
    ],
    graphData: undefined
  }
];

