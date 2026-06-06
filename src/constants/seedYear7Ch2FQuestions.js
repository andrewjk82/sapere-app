export const Y7_CH2F_QUESTIONS = [
  // ── QUESTION 1a ──
  {
    id: "y7-2f-q1a",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using powers in factorisation",
    question: "Express the number as a product of prime factors in index notation:\n6",
    a: "2 * 3",
    hint: "Find two prime numbers that multiply to 6.",
    solutionSteps: [
      {
        explanation: "Divide 6 by its smallest prime factor, 2.",
        workingOut: "6 \\div 2 = 3"
      },
      {
        explanation: "3 is also prime, so the prime factorisation is complete.",
        workingOut: "6 = 2 \\times 3"
      }
    ]
  },

  // ── QUESTION 1b ──
  {
    id: "y7-2f-q1b",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using powers in factorisation",
    question: "Express the number as a product of prime factors in index notation:\n8",
    a: "2^3",
    hint: "Recall that 8 is a power of 2.",
    solutionSteps: [
      {
        explanation: "Divide 8 by 2 repeatedly.",
        workingOut: "8 = 2 \\times 4 = 2 \\times 2 \\times 2 = 2^3"
      }
    ]
  },

  // ── QUESTION 1d ──
  {
    id: "y7-2f-q1d",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using powers in factorisation",
    question: "Express the number as a product of prime factors in index notation:\n12",
    a: "2^2 * 3",
    hint: "Divide 12 by its prime factors step-by-step.",
    solutionSteps: [
      {
        explanation: "Factorise 12 using a factor tree.",
        workingOut: "12 = 2 \\times 6 = 2 \\times (2 \\times 3)"
      },
      {
        explanation: "Write using exponents.",
        workingOut: "2^2 \\times 3"
      }
    ]
  },

  // ── QUESTION 1f ──
  {
    id: "y7-2f-q1f",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using powers in factorisation",
    question: "Express the number as a product of prime factors in index notation:\n24",
    a: "2^3 * 3",
    hint: "Divide 24 by prime numbers repeatedly.",
    solutionSteps: [
      {
        explanation: "Factorise 24.",
        workingOut: "24 = 2 \\times 12 = 2 \\times 2 \\times 6 = 2 \\times 2 \\times 2 \\times 3"
      },
      {
        explanation: "Write using index notation.",
        workingOut: "2^3 \\times 3"
      }
    ]
  },

  // ── QUESTION 2b ──
  {
    id: "y7-2f-q2b",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using powers in factorisation",
    question: "Express the number as a product of prime factors in index notation:\n75",
    a: "3 * 5^2",
    hint: "Divide 75 by its prime factors. Try 3 or 5.",
    solutionSteps: [
      {
        explanation: "Factorise 75.",
        workingOut: "75 = 3 \\times 25 = 3 \\times 5 \\times 5"
      },
      {
        explanation: "Write in index notation.",
        workingOut: "3 \\times 5^2"
      }
    ]
  },

  // ── QUESTION 2c ──
  {
    id: "y7-2f-q2c",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using powers in factorisation",
    question: "Express the number as a product of prime factors in index notation:\n36",
    a: "2^2 * 3^2",
    hint: "Divide 36 by prime factors. Note that it is a perfect square.",
    solutionSteps: [
      {
        explanation: "Factorise 36.",
        workingOut: "36 = 6 \\times 6 = (2 \\times 3) \\times (2 \\times 3)"
      },
      {
        explanation: "Group and write in index notation.",
        workingOut: "2^2 \\times 3^2"
      }
    ]
  },

  // ── QUESTION 2d ──
  {
    id: "y7-2f-q2d",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    t: "Using powers in factorisation",
    question: "Express the number as a product of prime factors in index notation:\n96",
    a: "2^5 * 3",
    hint: "Divide 96 by 2 repeatedly.",
    solutionSteps: [
      {
        explanation: "Divide 96 by 2 until you get an odd number.",
        workingOut: "96 = 2 \\times 48 = 2^2 \\times 24 = 2^3 \\times 12 = 2^4 \\times 6 = 2^5 \\times 3"
      }
    ]
  },

  // ── QUESTION 2f ──
  {
    id: "y7-2f-q2f",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    t: "Using powers in factorisation",
    question: "Express the number as a product of prime factors in index notation:\n841",
    a: "29^2",
    hint: "Test prime factors sequentially. 841 is the square of a prime number close to 30.",
    solutionSteps: [
      {
        explanation: "Test primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29. We find 841 is divisible by 29.",
        workingOut: "841 \\div 29 = 29 \\implies 841 = 29^2"
      }
    ]
  },

  // ── QUESTION 3a ──
  {
    id: "y7-2f-q3a",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using powers in factorisation",
    question: "What is the number given by this prime factorisation?\n\\( 2^2 \\times 3^2 \\times 5^2 \\)",
    a: "900",
    hint: "Evaluate each power and multiply.",
    solutionSteps: [
      {
        explanation: "Calculate each individual power.",
        workingOut: "2^2 = 4, \\quad 3^2 = 9, \\quad 5^2 = 25"
      },
      {
        explanation: "Group terms to multiply easily.",
        workingOut: "4 \\times 25 \\times 9 = 100 \\times 9 = 900"
      }
    ]
  },

  // ── QUESTION 3b ──
  {
    id: "y7-2f-q3b",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    t: "Using powers in factorisation",
    question: "What is the number given by this prime factorisation?\n\\( 5^2 \\times 3^3 \\times 2^4 \\)",
    a: "10800",
    hint: "Evaluate each power and multiply.",
    solutionSteps: [
      {
        explanation: "Calculate the powers.",
        workingOut: "5^2 = 25, \\quad 3^3 = 27, \\quad 2^4 = 16"
      },
      {
        explanation: "Multiply the numbers. (Hint: 25 * 16 is 400).",
        workingOut: "25 \\times 16 \\times 27 = 400 \\times 27 = 10800"
      }
    ]
  },

  // ── QUESTION 3c ──
  {
    id: "y7-2f-q3c",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    t: "Using powers in factorisation",
    question: "What is the number given by this prime factorisation?\n\\( 2^8 \\times 3^2 \\times 5^2 \\)",
    a: "57600",
    hint: "Evaluate each power and multiply.",
    solutionSteps: [
      {
        explanation: "Calculate the powers.",
        workingOut: "2^8 = 256, \\quad 3^2 = 9, \\quad 5^2 = 25"
      },
      {
        explanation: "Multiply them. (Hint: 256 * 25 is 6400).",
        workingOut: "256 \\times 25 \\times 9 = 6400 \\times 9 = 57600"
      }
    ]
  },

  // ── QUESTION 4a1 ──
  {
    id: "y7-2f-q4a1",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using powers in factorisation",
    question: "Express the number as a product of prime factors in index notation:\n105",
    a: "3 * 5 * 7",
    hint: "Test division by 3, 5, etc.",
    solutionSteps: [
      {
        explanation: "Factorise 105.",
        workingOut: "105 = 5 \\times 21 = 5 \\times 3 \\times 7 = 3 \\times 5 \\times 7"
      }
    ]
  },

  // ── QUESTION 4a2 ──
  {
    id: "y7-2f-q4a2",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using powers in factorisation",
    question: "Express the number as a product of prime factors in index notation:\n154",
    a: "2 * 7 * 11",
    hint: "154 is even, so divide by 2 first.",
    solutionSteps: [
      {
        explanation: "Divide by 2.",
        workingOut: "154 \\div 2 = 77"
      },
      {
        explanation: "Factorise 77.",
        workingOut: "77 = 7 \\times 11 \\implies 154 = 2 \\times 7 \\times 11"
      }
    ]
  },

  // ── QUESTION 4b ──
  {
    id: "y7-2f-q4b",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    t: "Using powers in factorisation",
    question: "What is the largest factor (highest common factor) of both 105 and 154?",
    a: "7",
    hint: "Compare their prime factorisations and find the common prime factors.",
    solutionSteps: [
      {
        explanation: "Compare the prime factorisations.",
        workingOut: "105 = 3 \\times 5 \\times \\mathbf{7} \\\\ 154 = 2 \\times \\mathbf{7} \\times 11"
      },
      {
        explanation: "The only common prime factor is 7.",
        workingOut: "\\text{HCF} = 7"
      }
    ]
  },

  // ── QUESTION 5 ──
  {
    id: "y7-2f-q5",
    type: "short_answer",
    difficulty: "hard",
    timeLimit: 120,
    t: "Using powers in factorisation",
    question: "Find all two-digit numbers that are the product of three different prime numbers. Separate them with commas in ascending order.",
    a: "30, 42, 66, 70, 78",
    hint: "Multiply small primes like 2, 3, 5, 7, 11... such that the product is between 10 and 99.",
    solutionSteps: [
      {
        explanation: "List products starting with 2 and 3:\n- 2 * 3 * 5 = 30\n- 2 * 3 * 7 = 42\n- 2 * 3 * 11 = 66\n- 2 * 3 * 13 = 78\n- 2 * 3 * 17 = 102 (three digits)",
        workingOut: "30, 42, 66, 78"
      },
      {
        explanation: "List products starting with 2 and 5:\n- 2 * 5 * 7 = 70\n- 2 * 5 * 11 = 110 (three digits)",
        workingOut: "70"
      },
      {
        explanation: "List products starting with 3 and 5:\n- 3 * 5 * 7 = 105 (three digits)",
        workingOut: "\\text{No more two-digit options}"
      },
      {
        explanation: "Collect and sort the results.",
        workingOut: "30, 42, 66, 70, 78"
      }
    ]
  }
];
