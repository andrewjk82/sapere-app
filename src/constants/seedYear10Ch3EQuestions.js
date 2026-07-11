export const Y10_CH3E_QUESTIONS = [
  // ── EASY (Q1–Q20) ─────────────────────────────────────────────────────────
  {
    id: "y10-3e-1",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "easy",
    q: "Factorise: \\\\(x^2 - 9\\\\)",
    h: "Recognise that 9 = 3². Use the identity a² − b² = (a + b)(a − b).",
    opts: ["\\\\((x+3)(x-3)\\\\)", "\\\\((x-3)^2\\\\)", "\\\\((x+9)(x-1)\\\\)", "\\\\((x+3)^2\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Identify this as a difference of two squares. x² is a perfect square and 9 = 3² is also a perfect square, with a minus sign between them — this matches the pattern a² − b² exactly.", workingOut: "\\\\(x^2 - 9 = x^2 - 3^2\\\\)", graphData: null },
      { explanation: "Apply the difference of two squares identity: a² − b² = (a + b)(a − b). Here a = x and b = 3.", workingOut: "\\\\(x^2 - 3^2 = (x + 3)(x - 3)\\\\)", graphData: null },
      { explanation: "Verify by expanding: (x + 3)(x − 3) = x² − 3x + 3x − 9 = x² − 9. This confirms the factorisation is correct.", workingOut: "\\\\((x+3)(x-3) = x^2 - 9 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-2",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "easy",
    q: "Factorise: \\\\(a^2 - 25\\\\)",
    h: "25 = 5². Apply the difference of two squares formula.",
    opts: ["\\\\((a-5)^2\\\\)", "\\\\((a+5)(a+5)\\\\)", "\\\\((a+5)(a-5)\\\\)", "\\\\((a-25)(a+1)\\\\)"],
    a: 2,
    solutionSteps: [
      { explanation: "Write both terms as perfect squares. We have a² and 25 = 5², with a subtraction sign between them — this is the difference of two squares pattern.", workingOut: "\\\\(a^2 - 25 = a^2 - 5^2\\\\)", graphData: null },
      { explanation: "Apply the identity a² − b² = (a + b)(a − b) with a = a and b = 5.", workingOut: "\\\\(a^2 - 5^2 = (a + 5)(a - 5)\\\\)", graphData: null },
      { explanation: "Verify by expanding to confirm correctness.", workingOut: "\\\\((a+5)(a-5) = a^2 - 25 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-3",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "easy",
    q: "Factorise: \\\\(m^2 - 49\\\\)",
    h: "49 = 7². The expression is a difference of two squares.",
    opts: ["\\\\((m+7)(m-7)\\\\)", "\\\\((m-7)^2\\\\)", "\\\\((m+49)(m-1)\\\\)", "\\\\((m+7)^2\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Identify that m² and 49 = 7² are both perfect squares separated by a minus sign.", workingOut: "\\\\(m^2 - 49 = m^2 - 7^2\\\\)", graphData: null },
      { explanation: "Apply the formula a² − b² = (a + b)(a − b) with a = m and b = 7.", workingOut: "\\\\(m^2 - 7^2 = (m + 7)(m - 7)\\\\)", graphData: null },
      { explanation: "Verify by expanding.", workingOut: "\\\\((m+7)(m-7) = m^2 - 49 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-4",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "easy",
    q: "Factorise: \\\\(y^2 - 1\\\\)",
    h: "1 = 1². Apply the difference of two squares identity.",
    opts: ["\\\\((y-1)^2\\\\)", "\\\\((y+1)(y-1)\\\\)", "\\\\((y+1)^2\\\\)", "\\\\(y(y-1)\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Recognise that y² − 1 fits the pattern a² − b² where a = y and b = 1.", workingOut: "\\\\(y^2 - 1 = y^2 - 1^2\\\\)", graphData: null },
      { explanation: "Apply the difference of two squares identity.", workingOut: "\\\\(y^2 - 1^2 = (y + 1)(y - 1)\\\\)", graphData: null },
      { explanation: "Expand to verify: (y + 1)(y − 1) = y² − y + y − 1 = y² − 1.", workingOut: "\\\\((y+1)(y-1) = y^2 - 1 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-5",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "easy",
    q: "Factorise: \\\\(t^2 - 16\\\\)",
    h: "16 = 4². Look for the difference of two squares pattern.",
    opts: ["\\\\((t-4)^2\\\\)", "\\\\((t+16)(t-1)\\\\)", "\\\\((t+8)(t-2)\\\\)", "\\\\((t+4)(t-4)\\\\)"],
    a: 3,
    solutionSteps: [
      { explanation: "Express t² − 16 with both terms as explicit squares. Since 16 = 4², this fits a² − b².", workingOut: "\\\\(t^2 - 16 = t^2 - 4^2\\\\)", graphData: null },
      { explanation: "Use the identity a² − b² = (a + b)(a − b) with a = t, b = 4.", workingOut: "\\\\(t^2 - 4^2 = (t + 4)(t - 4)\\\\)", graphData: null },
      { explanation: "Expand to confirm: (t + 4)(t − 4) = t² − 16.", workingOut: "\\\\((t+4)(t-4) = t^2 - 16 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-6",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "easy",
    q: "Factorise: \\\\(p^2 - 64\\\\)",
    h: "64 = 8². Apply a² − b² = (a + b)(a − b).",
    opts: ["\\\\((p+8)(p-8)\\\\)", "\\\\((p-8)^2\\\\)", "\\\\((p+32)(p-2)\\\\)", "\\\\((p+8)^2\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Identify p² and 64 = 8² as perfect squares, with a minus between them.", workingOut: "\\\\(p^2 - 64 = p^2 - 8^2\\\\)", graphData: null },
      { explanation: "Apply the factorisation identity.", workingOut: "\\\\(p^2 - 8^2 = (p + 8)(p - 8)\\\\)", graphData: null },
      { explanation: "Check by expanding.", workingOut: "\\\\((p+8)(p-8) = p^2 - 64 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-7",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "easy",
    q: "Factorise: \\\\(k^2 - 36\\\\)",
    h: "36 = 6². Use the difference of two squares.",
    opts: ["\\\\((k-6)^2\\\\)", "\\\\((k+6)(k-6)\\\\)", "\\\\((k-4)(k-9)\\\\)", "\\\\((k+36)(k-1)\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Express 36 as 6² to match the difference of two squares pattern.", workingOut: "\\\\(k^2 - 36 = k^2 - 6^2\\\\)", graphData: null },
      { explanation: "Factorise using a² − b² = (a + b)(a − b).", workingOut: "\\\\(k^2 - 6^2 = (k + 6)(k - 6)\\\\)", graphData: null },
      { explanation: "Verify by expansion.", workingOut: "\\\\((k+6)(k-6) = k^2 - 36 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-8",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "easy",
    q: "Factorise: \\\\(n^2 - 100\\\\)",
    h: "100 = 10². The pattern is a² − b².",
    opts: ["\\\\((n-10)^2\\\\)", "\\\\((n+50)(n-2)\\\\)", "\\\\((n+10)(n-10)\\\\)", "\\\\((n+100)(n-1)\\\\)"],
    a: 2,
    solutionSteps: [
      { explanation: "Write 100 as 10² to recognise the difference of two squares structure.", workingOut: "\\\\(n^2 - 100 = n^2 - 10^2\\\\)", graphData: null },
      { explanation: "Apply a² − b² = (a + b)(a − b) with a = n, b = 10.", workingOut: "\\\\(n^2 - 10^2 = (n + 10)(n - 10)\\\\)", graphData: null },
      { explanation: "Verify: (n + 10)(n − 10) = n² − 100.", workingOut: "\\\\((n+10)(n-10) = n^2 - 100 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-9",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "easy",
    q: "Factorise: \\\\(4x^2 - 9\\\\)",
    h: "4x² = (2x)² and 9 = 3². Apply the identity with a = 2x and b = 3.",
    opts: ["\\\\((4x+3)(x-3)\\\\)", "\\\\((2x-3)^2\\\\)", "\\\\((2x+3)(2x-3)\\\\)", "\\\\((2x+9)(2x-1)\\\\)"],
    a: 2,
    solutionSteps: [
      { explanation: "Express both terms as perfect squares. 4x² = (2x)² and 9 = 3². The expression fits a² − b² with a = 2x and b = 3.", workingOut: "\\\\(4x^2 - 9 = (2x)^2 - 3^2\\\\)", graphData: null },
      { explanation: "Apply the difference of two squares identity.", workingOut: "\\\\((2x)^2 - 3^2 = (2x + 3)(2x - 3)\\\\)", graphData: null },
      { explanation: "Verify by expanding using FOIL.", workingOut: "\\\\((2x+3)(2x-3) = 4x^2 - 9 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-10",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "easy",
    q: "Factorise: \\\\(9a^2 - 4\\\\)",
    h: "9a² = (3a)² and 4 = 2². Both are perfect squares.",
    opts: ["\\\\((3a+2)(3a-2)\\\\)", "\\\\((3a-2)^2\\\\)", "\\\\((9a+4)(a-1)\\\\)", "\\\\((3a+4)(3a-1)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Identify the structure: 9a² = (3a)² and 4 = 2², making this a difference of two squares.", workingOut: "\\\\(9a^2 - 4 = (3a)^2 - 2^2\\\\)", graphData: null },
      { explanation: "Factorise using the identity a² − b² = (a + b)(a − b).", workingOut: "\\\\((3a)^2 - 2^2 = (3a + 2)(3a - 2)\\\\)", graphData: null },
      { explanation: "Expand to check: (3a + 2)(3a − 2) = 9a² − 4.", workingOut: "\\\\((3a+2)(3a-2) = 9a^2 - 4 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-11",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "easy",
    q: "Factorise: \\\\(16x^2 - 1\\\\)",
    h: "16x² = (4x)² and 1 = 1².",
    opts: ["\\\\((4x-1)^2\\\\)", "\\\\((4x+1)(4x-1)\\\\)", "\\\\((16x+1)(x-1)\\\\)", "\\\\((8x+1)(2x-1)\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Write the expression with explicit squares: 16x² = (4x)² and 1 = 1².", workingOut: "\\\\(16x^2 - 1 = (4x)^2 - 1^2\\\\)", graphData: null },
      { explanation: "Apply a² − b² = (a + b)(a − b) with a = 4x and b = 1.", workingOut: "\\\\((4x)^2 - 1^2 = (4x + 1)(4x - 1)\\\\)", graphData: null },
      { explanation: "Verify by expanding.", workingOut: "\\\\((4x+1)(4x-1) = 16x^2 - 1 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-12",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "easy",
    q: "Factorise: \\\\(25y^2 - 16\\\\)",
    h: "25y² = (5y)² and 16 = 4².",
    opts: ["\\\\((5y-4)^2\\\\)", "\\\\((5y+16)(y-1)\\\\)", "\\\\((25y+4)(y-4)\\\\)", "\\\\((5y+4)(5y-4)\\\\)"],
    a: 3,
    solutionSteps: [
      { explanation: "Recognise 25y² = (5y)² and 16 = 4². This matches the difference of two squares pattern.", workingOut: "\\\\(25y^2 - 16 = (5y)^2 - 4^2\\\\)", graphData: null },
      { explanation: "Apply the factorisation formula.", workingOut: "\\\\((5y)^2 - 4^2 = (5y + 4)(5y - 4)\\\\)", graphData: null },
      { explanation: "Check by expanding.", workingOut: "\\\\((5y+4)(5y-4) = 25y^2 - 16 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-13",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "easy",
    q: "Evaluate \\\\(83^2 - 17^2\\\\) using the difference of two squares.",
    h: "Apply a² − b² = (a + b)(a − b) with a = 83, b = 17.",
    opts: ["\\\\(7200\\\\)", "\\\\(6600\\\\)", "\\\\(6000\\\\)", "\\\\(5400\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Recognise the numerical difference of two squares pattern to simplify computation.", workingOut: "\\\\(83^2 - 17^2 = (83 + 17)(83 - 17)\\\\)", graphData: null },
      { explanation: "Calculate each bracket.", workingOut: "\\\\(83 + 17 = 100, \\quad 83 - 17 = 66\\\\)", graphData: null },
      { explanation: "Multiply to get the answer.", workingOut: "\\\\(100 \\times 66 = 6600 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-14",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "easy",
    q: "Evaluate \\\\(57^2 - 43^2\\\\) using the difference of two squares.",
    h: "Write 57² − 43² = (57 + 43)(57 − 43) and compute each bracket.",
    opts: ["\\\\(1000\\\\)", "\\\\(900\\\\)", "\\\\(800\\\\)", "\\\\(1400\\\\)"],
    a: 3,
    solutionSteps: [
      { explanation: "Recognise that 57² − 43² is a numerical difference of two squares. The identity a² − b² = (a + b)(a − b) avoids computing large squares directly.", workingOut: "\\\\(57^2 - 43^2 = (57 + 43)(57 - 43)\\\\)", graphData: null },
      { explanation: "Compute each bracket separately.", workingOut: "\\\\(57 + 43 = 100, \\quad 57 - 43 = 14\\\\)", graphData: null },
      { explanation: "Multiply the two results to get the final answer.", workingOut: "\\\\(100 \\times 14 = 1400 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-15",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "easy",
    q: "Which expression is NOT a difference of two squares?",
    h: "A difference of two squares requires both terms to be perfect squares with a minus sign.",
    opts: ["\\\\(x^2 - 4\\\\)", "\\\\(9 - y^2\\\\)", "\\\\(x^2 + 16\\\\)", "\\\\(25 - 4t^2\\\\)"],
    a: 2,
    solutionSteps: [
      { explanation: "Check each option: a difference of two squares has form a² − b², requiring a MINUS sign and both terms to be perfect squares.", workingOut: "\\\\(x^2 - 4 = x^2 - 2^2 \\checkmark\\\\)", graphData: null },
      { explanation: "Check the second and fourth options.", workingOut: "\\\\(9 - y^2 = 3^2 - y^2 \\checkmark, \\quad 25 - 4t^2 = 5^2 - (2t)^2 \\checkmark\\\\)", graphData: null },
      { explanation: "x² + 16 has a PLUS sign, not a minus sign. A sum of two squares cannot be factorised over the reals.", workingOut: "\\\\(x^2 + 16\\\\) has a \\\\(+\\\\) sign — NOT a difference of two squares \\\\(\\times\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-16",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "easy",
    q: "Factorise: \\\\(b^2 - 81\\\\)",
    h: "81 = 9². Apply the difference of two squares.",
    opts: ["\\\\((b+9)(b-9)\\\\)", "\\\\((b-9)^2\\\\)", "\\\\((b+81)(b-1)\\\\)", "\\\\((b+27)(b-3)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Write 81 as 9² to match the a² − b² pattern.", workingOut: "\\\\(b^2 - 81 = b^2 - 9^2\\\\)", graphData: null },
      { explanation: "Apply the factorisation identity a² − b² = (a + b)(a − b).", workingOut: "\\\\(b^2 - 9^2 = (b + 9)(b - 9)\\\\)", graphData: null },
      { explanation: "Expand to verify correctness.", workingOut: "\\\\((b+9)(b-9) = b^2 - 81 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-17",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "easy",
    q: "Factorise: \\\\(c^2 - 144\\\\)",
    h: "144 = 12². Both terms are perfect squares.",
    opts: ["\\\\((c-12)^2\\\\)", "\\\\((c+72)(c-2)\\\\)", "\\\\((c+12)(c-12)\\\\)", "\\\\((c+144)(c-1)\\\\)"],
    a: 2,
    solutionSteps: [
      { explanation: "Identify 144 = 12² to apply the difference of two squares.", workingOut: "\\\\(c^2 - 144 = c^2 - 12^2\\\\)", graphData: null },
      { explanation: "Factorise using a² − b² = (a + b)(a − b).", workingOut: "\\\\(c^2 - 12^2 = (c + 12)(c - 12)\\\\)", graphData: null },
      { explanation: "Verify by expanding.", workingOut: "\\\\((c+12)(c-12) = c^2 - 144 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-18",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "easy",
    q: "Factorise: \\\\(z^2 - 121\\\\)",
    h: "121 = 11². Use the difference of two squares identity.",
    opts: ["\\\\((z-11)^2\\\\)", "\\\\((z+11)(z-11)\\\\)", "\\\\((z+121)(z-1)\\\\)", "\\\\((z+11)^2\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Recognise that 121 = 11², matching the pattern a² − b².", workingOut: "\\\\(z^2 - 121 = z^2 - 11^2\\\\)", graphData: null },
      { explanation: "Apply a² − b² = (a + b)(a − b).", workingOut: "\\\\(z^2 - 11^2 = (z + 11)(z - 11)\\\\)", graphData: null },
      { explanation: "Expand to check.", workingOut: "\\\\((z+11)(z-11) = z^2 - 121 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-19",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "easy",
    q: "What are the two linear factors of \\\\(x^2 - 169\\\\)?",
    h: "169 = 13². The factors are of the form (x + b) and (x − b).",
    opts: ["\\\\((x+13)\\\\) and \\\\((x+13)\\\\)", "\\\\((x+169)\\\\) and \\\\((x-1)\\\\)", "\\\\((x-13)\\\\) and \\\\((x-13)\\\\)", "\\\\((x+13)\\\\) and \\\\((x-13)\\\\)"],
    a: 3,
    solutionSteps: [
      { explanation: "Write 169 as a perfect square: 169 = 13².", workingOut: "\\\\(x^2 - 169 = x^2 - 13^2\\\\)", graphData: null },
      { explanation: "The difference of two squares identity gives two conjugate factors.", workingOut: "\\\\(x^2 - 13^2 = (x + 13)(x - 13)\\\\)", graphData: null },
      { explanation: "The two linear factors are (x + 13) and (x − 13).", workingOut: "\\\\((x+13)(x-13) = x^2 - 169 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-20",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "easy",
    q: "Factorise: \\\\(36 - x^2\\\\)",
    h: "Rewrite as 6² − x². Apply the identity (a + x)(a − x).",
    opts: ["\\\\((x+6)(x-6)\\\\)", "\\\\((6+x)(6-x)\\\\)", "\\\\((6-x)^2\\\\)", "\\\\((36-x)(1+x)\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "The expression 36 − x² = 6² − x² still fits the difference of two squares pattern with terms swapped.", workingOut: "\\\\(36 - x^2 = 6^2 - x^2\\\\)", graphData: null },
      { explanation: "Apply a² − b² = (a + b)(a − b) with a = 6 and b = x.", workingOut: "\\\\(6^2 - x^2 = (6 + x)(6 - x)\\\\)", graphData: null },
      { explanation: "Verify by expanding: (6 + x)(6 − x) = 36 − x².", workingOut: "\\\\((6+x)(6-x) = 36 - x^2 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },

  // ── MEDIUM (Q21–Q45) ───────────────────────────────────────────────────────
  {
    id: "y10-3e-21",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise fully: \\\\(3x^2 - 27\\\\)",
    h: "Take out the common factor of 3 first, then apply the difference of two squares.",
    opts: ["\\\\(3(x+3)(x-3)\\\\)", "\\\\(3(x-3)^2\\\\)", "\\\\((3x+9)(x-3)\\\\)", "\\\\(3(x^2-9)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "First look for a common factor in both terms. Both 3x² and 27 are divisible by 3, so factor out 3.", workingOut: "\\\\(3x^2 - 27 = 3(x^2 - 9)\\\\)", graphData: null },
      { explanation: "Now factorise x² − 9 = x² − 3² as a difference of two squares.", workingOut: "\\\\(x^2 - 9 = (x + 3)(x - 3)\\\\)", graphData: null },
      { explanation: "Combine the common factor with the factorised form.", workingOut: "\\\\(3x^2 - 27 = 3(x + 3)(x - 3)\\\\)", graphData: null },
      { explanation: "Check by expanding: 3(x + 3)(x − 3) = 3(x² − 9) = 3x² − 27.", workingOut: "\\\\(3(x+3)(x-3) = 3x^2 - 27 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-22",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise fully: \\\\(5a^2 - 20\\\\)",
    h: "Remove the common factor first. Then apply the difference of two squares formula.",
    opts: ["\\\\(5(a-2)^2\\\\)", "\\\\((5a+4)(a-5)\\\\)", "\\\\(5(a+2)(a-2)\\\\)", "\\\\((a+2)(5a-10)\\\\)"],
    a: 2,
    solutionSteps: [
      { explanation: "Identify the common factor: both 5a² and 20 are divisible by 5.", workingOut: "\\\\(5a^2 - 20 = 5(a^2 - 4)\\\\)", graphData: null },
      { explanation: "Recognise that a² − 4 = a² − 2² is a difference of two squares.", workingOut: "\\\\(a^2 - 4 = (a + 2)(a - 2)\\\\)", graphData: null },
      { explanation: "Write the fully factorised form.", workingOut: "\\\\(5a^2 - 20 = 5(a + 2)(a - 2) \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-23",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise fully: \\\\(2x^2 - 50\\\\)",
    h: "Factor out the common factor of 2 first.",
    opts: ["\\\\(2(x^2-25)\\\\)", "\\\\((2x+10)(x-5)\\\\)", "\\\\(2(x-5)^2\\\\)", "\\\\(2(x+5)(x-5)\\\\)"],
    a: 3,
    solutionSteps: [
      { explanation: "Extract the common factor of 2 from both terms.", workingOut: "\\\\(2x^2 - 50 = 2(x^2 - 25)\\\\)", graphData: null },
      { explanation: "Factorise x² − 25 = x² − 5² using the difference of two squares.", workingOut: "\\\\(x^2 - 25 = (x + 5)(x - 5)\\\\)", graphData: null },
      { explanation: "State the fully factorised answer.", workingOut: "\\\\(2x^2 - 50 = 2(x + 5)(x - 5) \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-24",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\((x+1)^2 - 4\\\\)",
    h: "Let u = x + 1 so the expression becomes u² − 4. Factorise then substitute back.",
    opts: ["\\\\((x+3)(x-1)\\\\)", "\\\\((x-1)^2\\\\)", "\\\\((x+2)(x-2)\\\\)", "\\\\((x+3)(x+1)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Recognise the form a² − b² where a = (x + 1) and b = 2 (since 4 = 2²). Treat the whole bracket (x + 1) as a single unit.", workingOut: "\\\\((x+1)^2 - 4 = (x+1)^2 - 2^2\\\\)", graphData: null },
      { explanation: "Apply the identity a² − b² = (a + b)(a − b) with a = (x+1) and b = 2.", workingOut: "\\\\((x+1)^2 - 2^2 = [(x+1)+2][(x+1)-2]\\\\)", graphData: null },
      { explanation: "Simplify each bracket.", workingOut: "\\\\(= (x+3)(x-1)\\\\)", graphData: null },
      { explanation: "Verify: (x+3)(x−1) = x²+2x−3 = (x+1)²−4.", workingOut: "\\\\((x+3)(x-1) = x^2 + 2x - 3 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-25",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\((2a-1)^2 - 9\\\\)",
    h: "Let u = 2a − 1 and note that 9 = 3². Apply the difference of two squares.",
    opts: ["\\\\((2a+2)(2a-4)\\\\)", "\\\\((2a-4)^2\\\\)", "\\\\(2(a+1)(a-2)\\\\)", "\\\\((2a-2)(2a-4)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Identify the form (2a − 1)² − 3² — a difference of two squares with a = (2a−1) and b = 3.", workingOut: "\\\\((2a-1)^2 - 9 = (2a-1)^2 - 3^2\\\\)", graphData: null },
      { explanation: "Apply a² − b² = (a + b)(a − b).", workingOut: "\\\\(= [(2a-1)+3][(2a-1)-3]\\\\)", graphData: null },
      { explanation: "Simplify each factor.", workingOut: "\\\\(= (2a+2)(2a-4)\\\\)", graphData: null },
      { explanation: "These can also be written as 4(a+1)(a−2). Both forms are valid.", workingOut: "\\\\((2a+2)(2a-4) = 4(a+1)(a-2) \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-26",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\(x^4 - 16\\\\)",
    h: "Recognise x⁴ = (x²)². Factorise twice — once at the outer level, then again if possible.",
    opts: ["\\\\((x^2+4)(x^2-4)\\\\)", "\\\\((x^2-4)^2\\\\)", "\\\\((x^2+4)(x+2)(x-2)\\\\)", "\\\\((x+4)(x-4)(x^2+1)\\\\)"],
    a: 2,
    solutionSteps: [
      { explanation: "Express x⁴ − 16 as (x²)² − 4². Both terms are perfect squares.", workingOut: "\\\\(x^4 - 16 = (x^2)^2 - 4^2\\\\)", graphData: null },
      { explanation: "Apply the difference of two squares at the first level.", workingOut: "\\\\((x^2)^2 - 4^2 = (x^2 + 4)(x^2 - 4)\\\\)", graphData: null },
      { explanation: "x² + 4 cannot be factorised over the reals. But x² − 4 = x² − 2² is another difference of two squares.", workingOut: "\\\\(x^2 - 4 = (x+2)(x-2)\\\\)", graphData: null },
      { explanation: "Write the fully factorised form combining all factors.", workingOut: "\\\\(x^4 - 16 = (x^2 + 4)(x + 2)(x - 2) \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-27",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise fully: \\\\(8m^2 - 32\\\\)",
    h: "Take out the common factor of 8 first.",
    opts: ["\\\\(8(m-2)^2\\\\)", "\\\\(8(m+2)(m-2)\\\\)", "\\\\((8m+16)(m-2)\\\\)", "\\\\(4(m+2)(2m-4)\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Factor out the GCF from both terms: GCF(8m², 32) = 8.", workingOut: "\\\\(8m^2 - 32 = 8(m^2 - 4)\\\\)", graphData: null },
      { explanation: "Factorise m² − 4 = m² − 2² using the difference of two squares.", workingOut: "\\\\(m^2 - 4 = (m + 2)(m - 2)\\\\)", graphData: null },
      { explanation: "Combine for the fully factorised result.", workingOut: "\\\\(8m^2 - 32 = 8(m + 2)(m - 2) \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-28",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Simplify: \\\\(\\frac{x^2 - 25}{x + 5}\\\\)",
    h: "Factorise the numerator as a difference of two squares, then cancel the common factor.",
    opts: ["\\\\(x + 5\\\\)", "\\\\(x - 5\\\\)", "\\\\(\\frac{x-5}{x+5}\\\\)", "\\\\(x^2 - 5\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Factorise the numerator x² − 25 using the difference of two squares identity.", workingOut: "\\\\(x^2 - 25 = (x+5)(x-5)\\\\)", graphData: null },
      { explanation: "Rewrite the fraction with the factorised numerator.", workingOut: "\\\\(\\frac{x^2-25}{x+5} = \\frac{(x+5)(x-5)}{x+5}\\\\)", graphData: null },
      { explanation: "Cancel the common factor (x + 5) from numerator and denominator, valid when x ≠ −5.", workingOut: "\\\\(= x - 5 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-29",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Simplify: \\\\(\\frac{9x^2 - 1}{3x - 1}\\\\)",
    h: "Factorise 9x² − 1 as a difference of two squares, then cancel.",
    opts: ["\\\\(3x + 1\\\\)", "\\\\(3x - 1\\\\)", "\\\\(9x + 1\\\\)", "\\\\(\\frac{1}{3x+1}\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Factorise the numerator: 9x² − 1 = (3x)² − 1² is a difference of two squares.", workingOut: "\\\\(9x^2 - 1 = (3x + 1)(3x - 1)\\\\)", graphData: null },
      { explanation: "Write the fraction with the factorised numerator.", workingOut: "\\\\(\\frac{9x^2-1}{3x-1} = \\frac{(3x+1)(3x-1)}{3x-1}\\\\)", graphData: null },
      { explanation: "Cancel the common factor (3x − 1), valid when x ≠ 1/3.", workingOut: "\\\\(= 3x + 1 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-30",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\(49p^2 - 36q^2\\\\)",
    h: "49p² = (7p)² and 36q² = (6q)². Both are perfect squares.",
    opts: ["\\\\((7p-6q)^2\\\\)", "\\\\((7p+6q)(7p-6q)\\\\)", "\\\\((49p+6q)(p-6q)\\\\)", "\\\\((7p+36q)(7p-q)\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Identify both terms as perfect squares: 49p² = (7p)² and 36q² = (6q)².", workingOut: "\\\\(49p^2 - 36q^2 = (7p)^2 - (6q)^2\\\\)", graphData: null },
      { explanation: "Apply the difference of two squares identity with a = 7p and b = 6q.", workingOut: "\\\\((7p)^2 - (6q)^2 = (7p + 6q)(7p - 6q)\\\\)", graphData: null },
      { explanation: "Verify by expanding.", workingOut: "\\\\((7p+6q)(7p-6q) = 49p^2 - 36q^2 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-31",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\(16a^2 - 25b^2\\\\)",
    h: "16a² = (4a)² and 25b² = (5b)². Apply the identity.",
    opts: ["\\\\((4a-5b)^2\\\\)", "\\\\((16a+5b)(a-5b)\\\\)", "\\\\((4a+5b)(4a-5b)\\\\)", "\\\\((4a+25b)(4a-b)\\\\)"],
    a: 2,
    solutionSteps: [
      { explanation: "Identify 16a² = (4a)² and 25b² = (5b)² as perfect squares.", workingOut: "\\\\(16a^2 - 25b^2 = (4a)^2 - (5b)^2\\\\)", graphData: null },
      { explanation: "Apply a² − b² = (a + b)(a − b).", workingOut: "\\\\((4a)^2 - (5b)^2 = (4a + 5b)(4a - 5b)\\\\)", graphData: null },
      { explanation: "Check by expanding.", workingOut: "\\\\((4a+5b)(4a-5b) = 16a^2 - 25b^2 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-32",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Evaluate \\\\(998^2 - 2^2\\\\) using factorisation.",
    h: "Apply a² − b² = (a + b)(a − b) with a = 998 and b = 2.",
    opts: ["\\\\(995\\,996\\\\)", "\\\\(996\\,000\\\\)", "\\\\(994\\,004\\\\)", "\\\\(999\\,000\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Recognise 998² − 2² as a difference of two squares to avoid computing large squares.", workingOut: "\\\\(998^2 - 2^2 = (998+2)(998-2)\\\\)", graphData: null },
      { explanation: "Compute each bracket.", workingOut: "\\\\(998+2 = 1000, \\quad 998-2 = 996\\\\)", graphData: null },
      { explanation: "Multiply to get the answer.", workingOut: "\\\\(1000 \\times 996 = 996\\,000 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-33",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Find the value of \\\\(a\\\\) if \\\\(x^2 - a = (x+7)(x-7)\\\\).",
    h: "Expand the right-hand side and compare with x² − a.",
    opts: ["\\\\(a = 14\\\\)", "\\\\(a = 49\\\\)", "\\\\(a = 7\\\\)", "\\\\(a = 28\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Expand the right-hand side using the difference of two squares pattern in reverse.", workingOut: "\\\\((x+7)(x-7) = x^2 - 49\\\\)", graphData: null },
      { explanation: "Compare with x² − a to identify a.", workingOut: "\\\\(x^2 - a = x^2 - 49\\\\)", graphData: null },
      { explanation: "Therefore a = 49.", workingOut: "\\\\(a = 49 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-34",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\(x^2 - \\frac{1}{4}\\\\)",
    h: "Note that 1/4 = (1/2)². Apply the difference of two squares.",
    opts: ["\\\\(\\left(x - \\frac{1}{2}\\right)^2\\\\)", "\\\\(\\left(x + \\frac{1}{4}\\right)\\left(x - \\frac{1}{4}\\right)\\\\)", "\\\\(\\left(x + \\frac{1}{2}\\right)\\left(x - \\frac{1}{2}\\right)\\\\)", "\\\\(\\left(2x + 1\\right)\\left(2x - 1\\right)\\\\)"],
    a: 2,
    solutionSteps: [
      { explanation: "Recognise that 1/4 = (1/2)², making this a difference of two squares with a = x and b = 1/2.", workingOut: "\\\\(x^2 - \\frac{1}{4} = x^2 - \\left(\\frac{1}{2}\\right)^2\\\\)", graphData: null },
      { explanation: "Apply a² − b² = (a + b)(a − b).", workingOut: "\\\\(x^2 - \\left(\\frac{1}{2}\\right)^2 = \\left(x + \\frac{1}{2}\\right)\\left(x - \\frac{1}{2}\\right)\\\\)", graphData: null },
      { explanation: "This is the fully factorised standard form.", workingOut: "\\\\(\\left(x + \\frac{1}{2}\\right)\\left(x - \\frac{1}{2}\\right) \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-35",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise fully: \\\\(12 - 3x^2\\\\)",
    h: "Factor out 3 first. Then factorise 4 − x² as a difference of two squares.",
    opts: ["\\\\(-3(x+2)(x-2)\\\\)", "\\\\(3(2+x)(2-x)\\\\)", "\\\\(3(x+2)(x-2)\\\\)", "\\\\(-3(x-2)^2\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Extract the common factor. 12 − 3x² = 3(4 − x²), keeping the order as written.", workingOut: "\\\\(12 - 3x^2 = 3(4 - x^2)\\\\)", graphData: null },
      { explanation: "Factorise 4 − x² = 2² − x² = (2 + x)(2 − x) using the difference of two squares.", workingOut: "\\\\(4 - x^2 = (2+x)(2-x)\\\\)", graphData: null },
      { explanation: "Write the fully factorised expression.", workingOut: "\\\\(12 - 3x^2 = 3(2+x)(2-x) \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-36",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\(a^2 - b^2 - 2b - 1\\\\)",
    h: "Group the last three terms: b² + 2b + 1 = (b+1)². Then use the difference of two squares.",
    opts: ["\\\\((a+b+1)(a-b+1)\\\\)", "\\\\((a+b-1)(a-b+1)\\\\)", "\\\\((a+b+1)(a-b-1)\\\\)", "\\\\((a-b-1)^2\\\\)"],
    a: 2,
    solutionSteps: [
      { explanation: "Rewrite the expression by grouping the last three terms. Notice that b² + 2b + 1 is a perfect square trinomial.", workingOut: "\\\\(a^2 - b^2 - 2b - 1 = a^2 - (b^2 + 2b + 1)\\\\)", graphData: null },
      { explanation: "Factorise the grouped expression: b² + 2b + 1 = (b + 1)².", workingOut: "\\\\(= a^2 - (b+1)^2\\\\)", graphData: null },
      { explanation: "Apply the difference of two squares identity with A = a and B = (b+1).", workingOut: "\\\\(a^2 - (b+1)^2 = [a+(b+1)][a-(b+1)]\\\\)", graphData: null },
      { explanation: "Simplify each bracket.", workingOut: "\\\\(= (a+b+1)(a-b-1) \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-37",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Solve for \\\\(x\\\\): \\\\(x^2 = 64\\\\)",
    h: "Rearrange to x² − 64 = 0, then factorise using the difference of two squares.",
    opts: ["\\\\(x = 8\\\\) only", "\\\\(x = \\pm 64\\\\)", "\\\\(x = \\pm 8\\\\)", "\\\\(x = -8\\\\) only"],
    a: 2,
    solutionSteps: [
      { explanation: "Rearrange the equation so one side equals zero — this sets up for factorisation.", workingOut: "\\\\(x^2 - 64 = 0\\\\)", graphData: null },
      { explanation: "Factorise the left side as a difference of two squares: x² − 8².", workingOut: "\\\\((x+8)(x-8) = 0\\\\)", graphData: null },
      { explanation: "Apply the null factor law: if a product equals zero, one of the factors must be zero.", workingOut: "\\\\(x + 8 = 0 \\Rightarrow x = -8\\\\)", graphData: null },
      { explanation: "Or the second factor is zero.", workingOut: "\\\\(x - 8 = 0 \\Rightarrow x = 8\\\\)", graphData: null },
      { explanation: "Therefore x = ±8. Both roots make sense since squaring either gives 64.", workingOut: "\\\\(x = \\pm 8 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-38",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Solve for \\\\(x\\\\): \\\\(4x^2 - 49 = 0\\\\)",
    h: "Factorise as a difference of two squares and apply the null factor law.",
    opts: ["\\\\(x = \\frac{7}{4}\\\\) only", "\\\\(x = \\pm \\frac{7}{2}\\\\)", "\\\\(x = \\pm \\frac{4}{7}\\\\)", "\\\\(x = \\pm 7\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Recognise 4x² − 49 = (2x)² − 7² as a difference of two squares.", workingOut: "\\\\(4x^2 - 49 = (2x)^2 - 7^2\\\\)", graphData: null },
      { explanation: "Factorise and set equal to zero.", workingOut: "\\\\((2x + 7)(2x - 7) = 0\\\\)", graphData: null },
      { explanation: "Apply the null factor law.", workingOut: "\\\\(2x + 7 = 0 \\Rightarrow x = -\\frac{7}{2}\\\\)", graphData: null },
      { explanation: "Or from the other factor.", workingOut: "\\\\(2x - 7 = 0 \\Rightarrow x = \\frac{7}{2}\\\\)", graphData: null },
      { explanation: "The two solutions are x = ±7/2.", workingOut: "\\\\(x = \\pm\\frac{7}{2} \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-39",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\(x^2 - 0.04\\\\)",
    h: "0.04 = (0.2)². Apply the difference of two squares.",
    opts: ["\\\\((x+0.2)(x-0.2)\\\\)", "\\\\((x-0.2)^2\\\\)", "\\\\((x+0.04)(x-0.04)\\\\)", "\\\\((x+0.4)(x-0.1)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Express 0.04 as a perfect square decimal: 0.04 = (0.2)².", workingOut: "\\\\(x^2 - 0.04 = x^2 - (0.2)^2\\\\)", graphData: null },
      { explanation: "Apply the difference of two squares identity.", workingOut: "\\\\(x^2 - (0.2)^2 = (x + 0.2)(x - 0.2)\\\\)", graphData: null },
      { explanation: "Verify: (x + 0.2)(x − 0.2) = x² − 0.04.", workingOut: "\\\\((x+0.2)(x-0.2) = x^2 - 0.04 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-40",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\(100 - 9y^2\\\\)",
    h: "100 = 10² and 9y² = (3y)². Apply the identity in reverse order.",
    opts: ["\\\\((10+3y)(10-3y)\\\\)", "\\\\((10-3y)^2\\\\)", "\\\\((100+9y)(1-y)\\\\)", "\\\\((3y+10)^2\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Write both terms as perfect squares: 100 = 10² and 9y² = (3y)².", workingOut: "\\\\(100 - 9y^2 = 10^2 - (3y)^2\\\\)", graphData: null },
      { explanation: "Apply the identity a² − b² = (a + b)(a − b) with a = 10 and b = 3y.", workingOut: "\\\\(10^2 - (3y)^2 = (10 + 3y)(10 - 3y)\\\\)", graphData: null },
      { explanation: "Expand to check: (10 + 3y)(10 − 3y) = 100 − 9y².", workingOut: "\\\\((10+3y)(10-3y) = 100 - 9y^2 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-41",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "medium",
    q: "If \\\\(x^2 - k^2 = (x-5)(x+5)\\\\), what is the value of \\\\(k\\\\)?",
    h: "Expand the right-hand side and identify k.",
    opts: ["\\\\(k = 25\\\\)", "\\\\(k = 5\\\\)", "\\\\(k = 10\\\\)", "\\\\(k = \\pm 5\\\\)"],
    a: 3,
    solutionSteps: [
      { explanation: "Expand the right-hand side using the difference of two squares pattern in reverse.", workingOut: "\\\\((x-5)(x+5) = x^2 - 25\\\\)", graphData: null },
      { explanation: "Compare with x² − k²: we need k² = 25.", workingOut: "\\\\(k^2 = 25\\\\)", graphData: null },
      { explanation: "Solve for k: k = ±5. Both values satisfy k² = 25.", workingOut: "\\\\(k = \\pm 5 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-42",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\((x+2)^2 - 25\\\\)",
    h: "Treat (x+2) as a single unit and 25 = 5². Apply the difference of two squares.",
    opts: ["\\\\((x-3)(x+7)\\\\)", "\\\\((x+3)(x-7)\\\\)", "\\\\((x-3)^2\\\\)", "\\\\((x+2-5)^2\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Identify the structure: a = (x+2), b = 5. Apply a² − b² = (a+b)(a−b).", workingOut: "\\\\((x+2)^2 - 5^2 = [(x+2)+5][(x+2)-5]\\\\)", graphData: null },
      { explanation: "Simplify each bracket.", workingOut: "\\\\(= (x+7)(x-3)\\\\)", graphData: null },
      { explanation: "Verify: (x+7)(x−3) = x²+4x−21 and (x+2)²−25 = x²+4x+4−25 = x²+4x−21.", workingOut: "\\\\((x+7)(x-3) = x^2 + 4x - 21 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-43",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\((3x-1)^2 - 4\\\\)",
    h: "Set a = (3x−1) and b = 2. Apply a² − b² = (a+b)(a−b).",
    opts: ["\\\\((3x-3)(3x+1)\\\\)", "\\\\((3x+1)(3x+3)\\\\)", "\\\\((3x-1-2)^2\\\\)", "\\\\((3x-3)^2\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Write the expression as a difference of two squares with a = (3x−1) and b = 2.", workingOut: "\\\\((3x-1)^2 - 2^2 = [(3x-1)+2][(3x-1)-2]\\\\)", graphData: null },
      { explanation: "Simplify each bracket.", workingOut: "\\\\(= (3x+1)(3x-3)\\\\)", graphData: null },
      { explanation: "Note (3x−3) = 3(x−1), so the fully factorised form is 3(3x+1)(x−1).", workingOut: "\\\\((3x+1)(3x-3) = 3(3x+1)(x-1) \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-44",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\(81x^4 - y^4\\\\)",
    h: "Express as (9x²)² − (y²)². Factorise once, then check if further factorisation is possible.",
    opts: ["\\\\((9x^2+y^2)(9x^2-y^2)\\\\)", "\\\\((9x^2+y^2)(3x+y)(3x-y)\\\\)", "\\\\((3x+y)^2(3x-y)^2\\\\)", "\\\\((81x^2+y^2)(x^2-y^2)\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Write 81x⁴ − y⁴ as a difference of two squares: (9x²)² − (y²)².", workingOut: "\\\\(81x^4 - y^4 = (9x^2)^2 - (y^2)^2\\\\)", graphData: null },
      { explanation: "Apply the identity at the first level.", workingOut: "\\\\(= (9x^2 + y^2)(9x^2 - y^2)\\\\)", graphData: null },
      { explanation: "9x² + y² cannot be factorised (sum of squares). 9x² − y² = (3x)² − y² is another difference of two squares.", workingOut: "\\\\(9x^2 - y^2 = (3x+y)(3x-y)\\\\)", graphData: null },
      { explanation: "Write the fully factorised answer.", workingOut: "\\\\(81x^4 - y^4 = (9x^2+y^2)(3x+y)(3x-y) \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-45",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Factorise: \\\\(x^2 - (y+1)^2\\\\)",
    h: "Treat (y+1) as a single variable b. Apply the difference of two squares identity.",
    opts: ["\\\\((x+y+1)(x-y-1)\\\\)", "\\\\((x-y-1)^2\\\\)", "\\\\((x+y)(x-y-1)\\\\)", "\\\\((x+y-1)(x-y+1)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Identify a = x and b = (y+1). The expression fits a² − b².", workingOut: "\\\\(x^2 - (y+1)^2 = [x + (y+1)][x - (y+1)]\\\\)", graphData: null },
      { explanation: "Expand and simplify each bracket.", workingOut: "\\\\(= (x+y+1)(x-y-1)\\\\)", graphData: null },
      { explanation: "Check by expanding the result to confirm it gives x² − (y+1)².", workingOut: "\\\\((x+y+1)(x-y-1) = x^2 - (y+1)^2 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },

  // ── HARD (Q46–Q60) ────────────────────────────────────────────────────────
  {
    id: "y10-3e-46",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise completely: \\\\(x^4 - 81\\\\)",
    h: "x⁴ − 81 = (x²)² − 9². Apply the identity twice.",
    opts: ["\\\\((x^2+9)(x^2-9)\\\\)", "\\\\((x^2+9)(x+3)(x-3)\\\\)", "\\\\((x+3)^2(x-3)^2\\\\)", "\\\\((x^2-9)^2\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Express x⁴ − 81 as (x²)² − 9² — a difference of two squares at the first level.", workingOut: "\\\\(x^4 - 81 = (x^2)^2 - 9^2\\\\)", graphData: null },
      { explanation: "Apply the identity: (x²)² − 9² = (x² + 9)(x² − 9).", workingOut: "\\\\(= (x^2+9)(x^2-9)\\\\)", graphData: null },
      { explanation: "x² + 9 cannot be factorised over the reals. But x² − 9 = x² − 3² is another difference of two squares.", workingOut: "\\\\(x^2 - 9 = (x+3)(x-3)\\\\)", graphData: null },
      { explanation: "Write the fully factorised answer.", workingOut: "\\\\(x^4 - 81 = (x^2+9)(x+3)(x-3) \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-47",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise: \\\\(a^2 - 4b^2 + 4b - 1\\\\)",
    h: "Group the last three terms: 4b² − 4b + 1 = (2b−1)². Then use difference of two squares.",
    opts: ["\\\\((a+2b-1)(a-2b+1)\\\\)", "\\\\((a+2b+1)(a-2b-1)\\\\)", "\\\\((a-2b+1)^2\\\\)", "\\\\((a+1)(a-2b+1)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Regroup the expression. Notice that 4b² − 4b + 1 is a perfect square trinomial.", workingOut: "\\\\(a^2 - 4b^2 + 4b - 1 = a^2 - (4b^2 - 4b + 1)\\\\)", graphData: null },
      { explanation: "Factorise the grouped trinomial: 4b² − 4b + 1 = (2b − 1)².", workingOut: "\\\\(= a^2 - (2b-1)^2\\\\)", graphData: null },
      { explanation: "Apply the difference of two squares identity with A = a and B = (2b−1).", workingOut: "\\\\(a^2 - (2b-1)^2 = [a+(2b-1)][a-(2b-1)]\\\\)", graphData: null },
      { explanation: "Simplify each bracket to get the final factorised form.", workingOut: "\\\\(= (a+2b-1)(a-2b+1) \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-48",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Simplify: \\\\(\\frac{4x^2 - 9}{2x^2 + x - 3}\\\\)",
    h: "Factorise both numerator and denominator separately, then cancel common factors.",
    opts: ["\\\\(\\frac{2x-3}{x+1}\\\\)", "\\\\(\\frac{2x+3}{x-1}\\\\)", "\\\\(\\frac{2x-3}{x-1}\\\\)", "\\\\(\\frac{2x+3}{x+1}\\\\)"],
    a: 2,
    solutionSteps: [
      { explanation: "Factorise the numerator: 4x² − 9 = (2x)² − 3² is a difference of two squares.", workingOut: "\\\\(4x^2 - 9 = (2x+3)(2x-3)\\\\)", graphData: null },
      { explanation: "Factorise the denominator 2x² + x − 3. Find two numbers that multiply to 2×(−3) = −6 and sum to 1: these are 3 and −2. So 2x² + 3x − 2x − 3 = x(2x+3) − 1(2x+3) = (x−1)(2x+3).", workingOut: "\\\\(2x^2 + x - 3 = (2x+3)(x-1)\\\\)", graphData: null },
      { explanation: "Cancel the common factor (2x+3) from numerator and denominator.", workingOut: "\\\\(\\frac{(2x+3)(2x-3)}{(2x+3)(x-1)} = \\frac{2x-3}{x-1}\\\\)", graphData: null },
      { explanation: "The simplified result is valid for all x except x = 1 and x = −3/2.", workingOut: "\\\\(\\frac{4x^2-9}{2x^2+x-3} = \\frac{2x-3}{x-1} \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-49",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Solve: \\\\(25x^2 - 4 = 0\\\\)",
    h: "Factorise as a difference of two squares, then apply the null factor law.",
    opts: ["\\\\(x = \\pm 5\\\\)", "\\\\(x = \\pm\\frac{2}{5}\\\\)", "\\\\(x = \\frac{4}{25}\\\\)", "\\\\(x = \\pm\\frac{5}{2}\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Express 25x² − 4 as a difference of two squares: (5x)² − 2².", workingOut: "\\\\(25x^2 - 4 = (5x)^2 - 2^2\\\\)", graphData: null },
      { explanation: "Factorise and set equal to zero.", workingOut: "\\\\((5x+2)(5x-2) = 0\\\\)", graphData: null },
      { explanation: "Apply the null factor law.", workingOut: "\\\\(5x + 2 = 0 \\Rightarrow x = -\\frac{2}{5}\\\\)", graphData: null },
      { explanation: "Or from the second factor.", workingOut: "\\\\(5x - 2 = 0 \\Rightarrow x = \\frac{2}{5}\\\\)", graphData: null },
      { explanation: "Both solutions are x = ±2/5.", workingOut: "\\\\(x = \\pm\\frac{2}{5} \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-50",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise: \\\\((x-y)^2 - (x+y)^2\\\\)",
    h: "Treat each bracket as a single term. Apply a² − b² = (a+b)(a−b), then simplify.",
    opts: ["\\\\(-4xy\\\\)", "\\\\(4xy\\\\)", "\\\\(-4x^2 + 4y^2\\\\)", "\\\\(4(x^2-y^2)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Recognise the form a² − b² with a = (x−y) and b = (x+y). Apply the identity.", workingOut: "\\\\((x-y)^2 - (x+y)^2 = [(x-y)+(x+y)][(x-y)-(x+y)]\\\\)", graphData: null },
      { explanation: "Simplify the first bracket: (x−y)+(x+y) = 2x.", workingOut: "\\\\(= (2x)[(x-y)-(x+y)]\\\\)", graphData: null },
      { explanation: "Simplify the second bracket: (x−y)−(x+y) = −2y.", workingOut: "\\\\(= (2x)(-2y)\\\\)", graphData: null },
      { explanation: "Multiply the simplified terms.", workingOut: "\\\\(= -4xy \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-51",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise completely: \\\\(2x^4 - 32\\\\)",
    h: "Take out the common factor of 2, then apply the difference of two squares twice.",
    opts: ["\\\\(2(x^2+4)(x^2-4)\\\\)", "\\\\(2(x+2)^2(x-2)^2\\\\)", "\\\\(2(x^2+4)(x+2)(x-2)\\\\)", "\\\\((2x^2+8)(x+2)(x-2)\\\\)"],
    a: 2,
    solutionSteps: [
      { explanation: "Extract the common factor of 2.", workingOut: "\\\\(2x^4 - 32 = 2(x^4 - 16)\\\\)", graphData: null },
      { explanation: "Factorise x⁴ − 16 = (x²)² − 4² as a first difference of two squares.", workingOut: "\\\\(x^4 - 16 = (x^2+4)(x^2-4)\\\\)", graphData: null },
      { explanation: "Factorise x² − 4 = x² − 2² further.", workingOut: "\\\\(x^2 - 4 = (x+2)(x-2)\\\\)", graphData: null },
      { explanation: "x² + 4 cannot be factorised over the reals. Combine all factors.", workingOut: "\\\\(2x^4 - 32 = 2(x^2+4)(x+2)(x-2) \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-52",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise: \\\\(x^2 - 2xy + y^2 - 9\\\\)",
    h: "Recognise x² − 2xy + y² = (x−y)². Then apply the difference of two squares to (x−y)² − 9.",
    opts: ["\\\\((x-y+3)(x-y-3)\\\\)", "\\\\((x-y-3)^2\\\\)", "\\\\((x+y+3)(x-y-3)\\\\)", "\\\\((x-y+3)^2\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Recognise that x² − 2xy + y² is a perfect square trinomial equal to (x − y)².", workingOut: "\\\\(x^2 - 2xy + y^2 - 9 = (x-y)^2 - 9\\\\)", graphData: null },
      { explanation: "Now apply the difference of two squares: (x−y)² − 3² with a = (x−y) and b = 3.", workingOut: "\\\\((x-y)^2 - 3^2 = [(x-y)+3][(x-y)-3]\\\\)", graphData: null },
      { explanation: "Simplify to the final factorised form.", workingOut: "\\\\(= (x-y+3)(x-y-3) \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-53",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Evaluate \\\\(3.7^2 - 1.3^2\\\\) without a calculator.",
    h: "Apply the difference of two squares: a² − b² = (a+b)(a−b) with a = 3.7 and b = 1.3.",
    opts: ["\\\\(10.0\\\\)", "\\\\(12.0\\\\)", "\\\\(8.0\\\\)", "\\\\(5.0\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Recognise this as a numerical difference of two squares with a = 3.7 and b = 1.3.", workingOut: "\\\\(3.7^2 - 1.3^2 = (3.7 + 1.3)(3.7 - 1.3)\\\\)", graphData: null },
      { explanation: "Compute each bracket.", workingOut: "\\\\(3.7 + 1.3 = 5.0, \\quad 3.7 - 1.3 = 2.4\\\\)", graphData: null },
      { explanation: "Multiply the results.", workingOut: "\\\\(5.0 \\times 2.4 = 12.0 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-54",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise: \\\\(9(x+2)^2 - 4(y-1)^2\\\\)",
    h: "Write as [3(x+2)]² − [2(y−1)]². Apply the difference of two squares.",
    opts: ["\\\\((3x+2y+4)(3x-2y+8)\\\\)", "\\\\([3(x+2)+2(y-1)][3(x+2)-2(y-1)]\\\\)", "\\\\((3x-2y+4)(3x+2y+8)\\\\)", "\\\\((3x+6+2y)(3x+6-2y)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Express as [3(x+2)]² − [2(y−1)]².", workingOut: "\\\\(9(x+2)^2 - 4(y-1)^2 = [3(x+2)]^2 - [2(y-1)]^2\\\\)", graphData: null },
      { explanation: "Apply the identity a² − b² = (a+b)(a−b) with a = 3(x+2) and b = 2(y−1).", workingOut: "\\\\(= [3(x+2)+2(y-1)][3(x+2)-2(y-1)]\\\\)", graphData: null },
      { explanation: "Expand the first bracket: 3(x+2)+2(y−1) = 3x+6+2y−2 = 3x+2y+4.", workingOut: "\\\\(3(x+2)+2(y-1) = 3x+2y+4\\\\)", graphData: null },
      { explanation: "Expand the second bracket: 3(x+2)−2(y−1) = 3x+6−2y+2 = 3x−2y+8.", workingOut: "\\\\(3(x+2)-2(y-1) = 3x-2y+8\\\\)", graphData: null },
      { explanation: "Final factorised form: (3x+2y+4)(3x−2y+8).", workingOut: "\\\\(= (3x+2y+4)(3x-2y+8) \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-55",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise: \\\\(p^4 - q^4\\\\)",
    h: "Apply the difference of two squares twice, noting p⁴ = (p²)² and q⁴ = (q²)².",
    opts: ["\\\\((p^2+q^2)(p+q)(p-q)\\\\)", "\\\\((p+q)^2(p-q)^2\\\\)", "\\\\((p^2-q^2)^2\\\\)", "\\\\((p^2+q^2)(p^2-q^2)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Write p⁴ − q⁴ = (p²)² − (q²)². Both are perfect squares.", workingOut: "\\\\(p^4 - q^4 = (p^2)^2 - (q^2)^2\\\\)", graphData: null },
      { explanation: "Apply the difference of two squares at the first level.", workingOut: "\\\\(= (p^2+q^2)(p^2-q^2)\\\\)", graphData: null },
      { explanation: "p² + q² cannot be factorised over the reals. Factorise p² − q² further.", workingOut: "\\\\(p^2 - q^2 = (p+q)(p-q)\\\\)", graphData: null },
      { explanation: "Combine all factors for the complete factorisation.", workingOut: "\\\\(p^4 - q^4 = (p^2+q^2)(p+q)(p-q) \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-56",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Find all solutions of \\\\(x^4 - 16x^2 = 0\\\\).",
    h: "Factor out x² first, then factorise the remaining quadratic using the difference of two squares.",
    opts: ["\\\\(x = 0, \\pm 4\\\\)", "\\\\(x = \\pm 4\\\\)", "\\\\(x = 0, 4\\\\)", "\\\\(x = \\pm 16\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Factor out the common factor x² from both terms.", workingOut: "\\\\(x^4 - 16x^2 = x^2(x^2 - 16)\\\\)", graphData: null },
      { explanation: "Factorise x² − 16 = x² − 4² using the difference of two squares.", workingOut: "\\\\(x^2 - 16 = (x+4)(x-4)\\\\)", graphData: null },
      { explanation: "Set the fully factorised expression equal to zero.", workingOut: "\\\\(x^2(x+4)(x-4) = 0\\\\)", graphData: null },
      { explanation: "Apply the null factor law to each factor.", workingOut: "\\\\(x^2 = 0 \\Rightarrow x = 0; \\quad x+4=0 \\Rightarrow x=-4; \\quad x-4=0 \\Rightarrow x=4\\\\)", graphData: null },
      { explanation: "The solutions are x = 0 or x = ±4.", workingOut: "\\\\(x = 0, \\pm 4 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-57",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise: \\\\(x^6 - 1\\\\) completely over the reals.",
    h: "Write x⁶ − 1 = (x³)² − 1² first, then apply sum and difference of cubes to the resulting factors.",
    opts: ["\\\\((x^3+1)(x^3-1)\\\\)", "\\\\((x+1)(x-1)(x^2+x+1)(x^2-x+1)\\\\)", "\\\\((x^2-1)^3\\\\)", "\\\\((x-1)^3(x+1)^3\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Write x⁶ − 1 as (x³)² − 1². Apply the difference of two squares identity at the top level.", workingOut: "\\\\(x^6 - 1 = (x^3)^2 - 1^2 = (x^3+1)(x^3-1)\\\\)", graphData: null },
      { explanation: "Factorise x³ − 1 as a difference of cubes: x³ − 1 = (x−1)(x²+x+1).", workingOut: "\\\\(x^3 - 1 = (x-1)(x^2+x+1)\\\\)", graphData: null },
      { explanation: "Factorise x³ + 1 as a sum of cubes: x³ + 1 = (x+1)(x²−x+1).", workingOut: "\\\\(x^3 + 1 = (x+1)(x^2-x+1)\\\\)", graphData: null },
      { explanation: "Combine all factors for the complete factorisation.", workingOut: "\\\\(x^6 - 1 = (x+1)(x-1)(x^2+x+1)(x^2-x+1) \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-58",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Simplify: \\\\(\\frac{x^4 - 1}{x^2 - 1}\\\\)",
    h: "Factorise the numerator completely, then cancel common factors with the denominator.",
    opts: ["\\\\(x^2 + 1\\\\)", "\\\\(x^2 - 1\\\\)", "\\\\(x + 1\\\\)", "\\\\((x^2+1)(x-1)\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Factorise the numerator x⁴ − 1 = (x²)² − 1² using the difference of two squares.", workingOut: "\\\\(x^4 - 1 = (x^2+1)(x^2-1)\\\\)", graphData: null },
      { explanation: "Factorise x² − 1 further: x² − 1 = (x+1)(x−1).", workingOut: "\\\\(x^2 - 1 = (x+1)(x-1)\\\\)", graphData: null },
      { explanation: "Rewrite the full fraction with factorised numerator and denominator.", workingOut: "\\\\(\\frac{x^4-1}{x^2-1} = \\frac{(x^2+1)(x+1)(x-1)}{(x+1)(x-1)}\\\\)", graphData: null },
      { explanation: "Cancel the common factors (x+1)(x−1), valid when x ≠ ±1.", workingOut: "\\\\(= x^2 + 1 \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-59",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Factorise: \\\\(4x^2 - 12x + 9 - y^2\\\\)",
    h: "Recognise 4x² − 12x + 9 = (2x−3)². Then apply the difference of two squares.",
    opts: ["\\\\((2x-3+y)(2x-3-y)\\\\)", "\\\\((2x+y-3)(2x-y-3)\\\\)", "\\\\((2x-3)^2 - y^2\\\\)", "\\\\((2x-3-y)^2\\\\)"],
    a: 1,
    solutionSteps: [
      { explanation: "Recognise that 4x² − 12x + 9 = (2x)² − 2·(2x)·3 + 3² = (2x−3)², a perfect square trinomial.", workingOut: "\\\\(4x^2 - 12x + 9 - y^2 = (2x-3)^2 - y^2\\\\)", graphData: null },
      { explanation: "Apply the difference of two squares identity with a = (2x−3) and b = y.", workingOut: "\\\\((2x-3)^2 - y^2 = [(2x-3)+y][(2x-3)-y]\\\\)", graphData: null },
      { explanation: "Simplify each bracket.", workingOut: "\\\\(= (2x-3+y)(2x-3-y)\\\\)", graphData: null },
      { explanation: "Rewriting in standard form: (2x+y−3)(2x−y−3).", workingOut: "\\\\((2x+y-3)(2x-y-3) \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  },
  {
    id: "y10-3e-60",
    c: "3E",
    t: "Factorising a difference of two squares",
    type: "multiple_choice",
    difficulty: "hard",
    q: "A rectangular garden has area \\\\(A = 36 - x^2\\\\) square metres. One side has length \\\\((6-x)\\\\) metres. Find the length of the other side.",
    h: "Factorise the area expression and divide by the known side length.",
    opts: ["\\\\((6+x) \\text{ m}\\\\)", "\\\\((6-x) \\text{ m}\\\\)", "\\\\((36+x) \\text{ m}\\\\)", "\\\\((x+6)^2 \\text{ m}\\\\)"],
    a: 0,
    solutionSteps: [
      { explanation: "Recognise that the area A = 36 − x² = 6² − x² is a difference of two squares. Factorising it reveals the two dimensions of the rectangle.", workingOut: "\\\\(36 - x^2 = (6+x)(6-x)\\\\)", graphData: null },
      { explanation: "Since Area = length × width and one side is (6−x), the other side is found by dividing Area by (6−x).", workingOut: "\\\\(\\text{Other side} = \\frac{(6+x)(6-x)}{6-x}\\\\)", graphData: null },
      { explanation: "Cancel the common factor (6−x), valid when x ≠ 6.", workingOut: "\\\\(= 6 + x\\\\)", graphData: null },
      { explanation: "The other dimension of the garden is (6 + x) metres. This is physically meaningful as long as x < 6 so both sides are positive.", workingOut: "\\\\(\\text{Other side} = (6+x) \\text{ m} \\checkmark\\\\)", graphData: null }
    ],
    graphData: undefined
  }
];

