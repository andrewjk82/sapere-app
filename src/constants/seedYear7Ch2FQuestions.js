export const Y7_CH2F_QUESTIONS = [
  {
    id: "y7-2f-q1a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using powers in factorisation",
    question: "Express the number as a product of prime factors in index notation:\n6",
    opts: [
      { text: "\\(2 \\times 3\\)", imageUrl: "" },
      { text: "\\(1 \\times 6\\)", imageUrl: "" },
      { text: "\\(2^2\\)", imageUrl: "" },
      { text: "\\(2 \\times 2 \\times 2\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Identify the smallest prime numbers that multiply to give 6. Note that 1 is not a prime number.",
    solution: "To find the prime factorisation of 6, divide it by its smallest prime factor, which is 2: \\(6 \\div 2 = 3\\). Since 3 is also a prime number, the prime factorisation is: \\(6 = 2 \\times 3\\).",
    solutionSteps: [
      {
        explanation: "Divide 6 by the smallest prime number, 2.",
        workingOut: "6 \\div 2 = 3",
        graphData: null
      },
      {
        explanation: "Since the quotient 3 is prime, write 6 as the product of these primes.",
        workingOut: "6 = 2 \\times 3",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2f-q1b",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using powers in factorisation",
    question: "Express the number as a product of prime factors in index notation:\n8",
    opts: [
      { text: "\\(2^2\\)", imageUrl: "" },
      { text: "\\(2 \\times 4\\)", imageUrl: "" },
      { text: "\\(2^3\\)", imageUrl: "" },
      { text: "\\(2^4\\)", imageUrl: "" }
    ],
    answer: 2,
    hint: "Divide 8 by 2 repeatedly until you reach 1, then write the count as a power of 2.",
    solution: "Divide 8 by 2 repeatedly to factorise it completely:\n\\(8 = 2 \\times 4 = 2 \\times 2 \\times 2\\).\nSince 2 is multiplied by itself 3 times, in index notation this is \\(2^3\\).",
    solutionSteps: [
      {
        explanation: "Divide 8 by the prime factor 2.",
        workingOut: "8 = 2 \\times 4",
        graphData: null
      },
      {
        explanation: "Factorise the composite number 4.",
        workingOut: "4 = 2 \\times 2 \\implies 8 = 2 \\times 2 \\times 2",
        graphData: null
      },
      {
        explanation: "Write the product of identical primes in index notation.",
        workingOut: "2^3",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2f-q1d",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using powers in factorisation",
    question: "Express the number as a product of prime factors in index notation:\n12",
    opts: [
      { text: "\\(2 \\times 3^2\\)", imageUrl: "" },
      { text: "\\(2^2 \\times 3\\)", imageUrl: "" },
      { text: "\\(3 \\times 4\\)", imageUrl: "" },
      { text: "\\(2^3 \\times 3\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Use a factor tree to split 12 into prime factors. Keep factorising composite numbers.",
    solution: "Factorise 12 step-by-step:\n- Divide 12 by 2: \\(12 = 2 \\times 6\\).\n- Factorise 6: \\(6 = 2 \\times 3\\).\n- Combine: \\(12 = 2 \\times 2 \\times 3\\).\n- In index notation: \\(2^2 \\times 3\\) (or \\(2^2 * 3\\)).",
    solutionSteps: [
      {
        explanation: "Begin factorising 12 using the smallest prime factor, 2.",
        workingOut: "12 = 2 \\times 6",
        graphData: null
      },
      {
        explanation: "Factorise the number 6 into prime factors.",
        workingOut: "6 = 2 \\times 3 \\implies 12 = 2 \\times 2 \\times 3",
        graphData: null
      },
      {
        explanation: "Group the factors using exponents.",
        workingOut: "2^2 \\times 3",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2f-q1f",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using powers in factorisation",
    question: "Express the number as a product of prime factors in index notation:\n24",
    opts: [
      { text: "\\(2^3 \\times 3\\)", imageUrl: "" },
      { text: "\\(2^2 \\times 3^2\\)", imageUrl: "" },
      { text: "\\(2 \\times 3^3\\)", imageUrl: "" },
      { text: "\\(2^3 \\times 3^2\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Factorise 24 into 2 * 12, then split 12, and so on, until only primes remain.",
    solution: "Perform prime factorisation on 24:\n\\(24 = 2 \\times 12 = 2 \\times 2 \\times 6 = 2 \\times 2 \\times 2 \\times 3\\).\nIn index notation, three 2s make \\(2^3\\), so the result is \\(2^3 \\times 3\\).",
    solutionSteps: [
      {
        explanation: "Divide 24 by 2.",
        workingOut: "24 = 2 \\times 12",
        graphData: null
      },
      {
        explanation: "Divide 12 by 2.",
        workingOut: "12 = 2 \\times 6 \\implies 24 = 2 \\times 2 \\times 6",
        graphData: null
      },
      {
        explanation: "Factorise 6 into primes.",
        workingOut: "6 = 2 \\times 3 \\implies 24 = 2 \\times 2 \\times 2 \\times 3",
        graphData: null
      },
      {
        explanation: "Write the result in index notation.",
        workingOut: "2^3 \\times 3",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2f-q2b",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using powers in factorisation",
    question: "Express the number as a product of prime factors in index notation:\n75",
    opts: [
      { text: "\\(3^2 \\times 5\\)", imageUrl: "" },
      { text: "\\(3 \\times 5^2\\)", imageUrl: "" },
      { text: "\\(3 \\times 5^3\\)", imageUrl: "" },
      { text: "\\(3 \\times 25\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Identify that 75 is divisible by 3 (since 7+5=12). Divide by 3, then factorise 25.",
    solution: "Factorise 75 step-by-step:\n- Divide 75 by 3: \\(75 = 3 \\times 25\\).\n- Factorise 25: \\(25 = 5 \\times 5 = 5^2\\).\n- Combine: \\(75 = 3 \\times 5^2\\).",
    solutionSteps: [
      {
        explanation: "Divide 75 by the prime divisor 3.",
        workingOut: "75 = 3 \\times 25",
        graphData: null
      },
      {
        explanation: "Factorise the composite number 25.",
        workingOut: "25 = 5 \\times 5 = 5^2",
        graphData: null
      },
      {
        explanation: "Combine into the final index expression.",
        workingOut: "3 \\times 5^2",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2f-q2c",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using powers in factorisation",
    question: "Express the number as a product of prime factors in index notation:\n36",
    opts: [
      { text: "\\(2^2 \\times 3^2\\)", imageUrl: "" },
      { text: "\\(2 \\times 3^3\\)", imageUrl: "" },
      { text: "\\(2^3 \\times 3\\)", imageUrl: "" },
      { text: "\\(4 \\times 9\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Write 36 as 6 * 6, then split each 6 into 2 * 3, and group identical primes.",
    solution: "Factorise 36 completely:\n\\(36 = 6 \\times 6 = (2 \\times 3) \\times (2 \\times 3)\\).\nGroup the factors:\n- Two 2s: \\(2^2\\).\n- Two 3s: \\(3^2\\).\nThus, the index notation is \\(2^2 \\times 3^2\\).",
    solutionSteps: [
      {
        explanation: "Split 36 into two equal factors of 6.",
        workingOut: "36 = 6 \\times 6",
        graphData: null
      },
      {
        explanation: "Factorise each factor 6 into primes.",
        workingOut: "6 = 2 \\times 3 \\implies 36 = (2 \\times 3) \\times (2 \\times 3)",
        graphData: null
      },
      {
        explanation: "Group the matching bases using exponents.",
        workingOut: "2^2 \\times 3^2",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2f-q2d",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Using powers in factorisation",
    question: "Express the number as a product of prime factors in index notation:\n96",
    opts: [
      { text: "\\(2^4 \\times 3\\)", imageUrl: "" },
      { text: "\\(2^5 \\times 3\\)", imageUrl: "" },
      { text: "\\(2^6 \\times 3\\)", imageUrl: "" },
      { text: "\\(2^5 \\times 3^2\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Divide 96 by 2 repeatedly until you obtain an odd number, then factorise that odd number.",
    solution: "Divide 96 by 2 repeatedly:\n- \\(96 = 2 \\times 48\\)\n- \\(48 = 2 \\times 24\\)\n- \\(24 = 2 \\times 12\\)\n- \\(12 = 2 \\times 6\\)\n- \\(6 = 2 \\times 3\\)\nCombining them gives: \\(2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 3 = 2^5 \\times 3\\).",
    solutionSteps: [
      {
        explanation: "Divide by 2 repeatedly to pull out factors of 2.",
        workingOut: "96 = 2 \\times 48 = 2^2 \\times 24 = 2^3 \\times 12 = 2^4 \\times 6",
        graphData: null
      },
      {
        explanation: "Factorise the final term 6 into 2 and 3.",
        workingOut: "6 = 2 \\times 3 \\implies 96 = 2^5 \\times 3",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2f-q2f",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Using powers in factorisation",
    question: "Express the number as a product of prime factors in index notation:\n841",
    opts: [
      { text: "\\(23^2\\)", imageUrl: "" },
      { text: "\\(29^2\\)", imageUrl: "" },
      { text: "\\(31^2\\)", imageUrl: "" },
      { text: "\\(19^2 \\times 3\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Test divisibility of 841 by prime numbers. Note that 841 is a perfect square of a prime number close to 30.",
    solution: "To factorise 841, we test prime factors in order: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29. Checking 29: \\(841 \\div 29 = 29\\). Since 29 is prime, \\(841 = 29 \\times 29 = 29^2\\).",
    solutionSteps: [
      {
        explanation: "Find the square root of 841 to narrow down potential prime factors.",
        workingOut: "\\sqrt{841} = 29",
        graphData: null
      },
      {
        explanation: "Verify if 29 is a prime number and that \\(29 \\times 29 = 841\\).",
        workingOut: "29 \\text{ has no factors other than 1 and 29 (it is prime)} \\implies 29^2 = 841",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2f-q3a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using powers in factorisation",
    question: "What is the number given by this prime factorisation?\n\\( 2^2 \\times 3^2 \\times 5^2 \\)",
    opts: [
      { text: "\\(300\\)", imageUrl: "" },
      { text: "\\(600\\)", imageUrl: "" },
      { text: "\\(900\\)", imageUrl: "" },
      { text: "\\(1800\\)", imageUrl: "" }
    ],
    answer: 2,
    hint: "Calculate the value of each power (2^2, 3^2, 5^2) first, then multiply them together.",
    solution: "Evaluate each power in the expression:\n- \\(2^2 = 4\\)\n- \\(3^2 = 9\\)\n- \\(5^2 = 25\\)\nMultiply them together: \\(4 \\times 9 \\times 25\\). For easier calculation, group 4 and 25: \\( (4 \\times 25) \\times 9 = 100 \\times 9 = 900\\).",
    solutionSteps: [
      {
        explanation: "Evaluate each term raised to a power.",
        workingOut: "2^2 = 4, \\quad 3^2 = 9, \\quad 5^2 = 25",
        graphData: null
      },
      {
        explanation: "Group the factors to make multiplication simpler.",
        workingOut: "4 \\times 25 \\times 9 = (4 \\times 25) \\times 9",
        graphData: null
      },
      {
        explanation: "Perform the final multiplication.",
        workingOut: "100 \\times 9 = 900",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2f-q3b",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Using powers in factorisation",
    question: "What is the number given by this prime factorisation?\n\\( 5^2 \\times 3^3 \\times 2^4 \\)",
    opts: [
      { text: "\\(10,800\\)", imageUrl: "" },
      { text: "\\(5,400\\)", imageUrl: "" },
      { text: "\\(12,800\\)", imageUrl: "" },
      { text: "\\(1,080\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Evaluate each power: \\(5^2 = 25\\), \\(3^3 = 27\\), \\(2^4 = 16\\). Then multiply them.",
    solution: "First, evaluate the powers:\n- \\(5^2 = 25\\)\n- \\(3^3 = 27\\)\n- \\(2^4 = 16\\)\nMultiply: \\(25 \\times 27 \\times 16\\). Grouping 25 and 16 makes the calculation easier: \\( (25 \\times 16) \\times 27 = 400 \\times 27 = 10800\\).",
    solutionSteps: [
      {
        explanation: "Evaluate the exponential terms.",
        workingOut: "5^2 = 25, \\quad 3^3 = 27, \\quad 2^4 = 16",
        graphData: null
      },
      {
        explanation: "Group 25 and 16 together.",
        workingOut: "25 \\times 16 = 400",
        graphData: null
      },
      {
        explanation: "Multiply the intermediate product by 27.",
        workingOut: "400 \\times 27 = 10,800",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2f-q3c",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Using powers in factorisation",
    question: "What is the number given by this prime factorisation?\n\\( 2^8 \\times 3^2 \\times 5^2 \\)",
    opts: [
      { text: "\\(57,600\\)", imageUrl: "" },
      { text: "\\(28,800\\)", imageUrl: "" },
      { text: "\\(115,200\\)", imageUrl: "" },
      { text: "\\(5,760\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Evaluate the powers: \\(2^8 = 256\\), \\(3^2 = 9\\), \\(5^2 = 25\\). Multiply them.",
    solution: "Evaluate the powers:\n- \\(2^8 = 256\\)\n- \\(3^2 = 9\\)\n- \\(5^2 = 25\\)\nMultiply them: \\(256 \\times 9 \\times 25\\). Grouping 256 and 25 simplifies the calculation: \\( (256 \\times 25) \\times 9 = 6400 \\times 9 = 57600\\).",
    solutionSteps: [
      {
        explanation: "Evaluate the exponents.",
        workingOut: "2^8 = 256, \\quad 3^2 = 9, \\quad 5^2 = 25",
        graphData: null
      },
      {
        explanation: "Multiply 256 by 25.",
        workingOut: "256 \\times 25 = 6400",
        graphData: null
      },
      {
        explanation: "Multiply by the remaining factor 9.",
        workingOut: "6400 \\times 9 = 57,600",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2f-q4a1",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using powers in factorisation",
    question: "Express the number as a product of prime factors in index notation:\n105",
    opts: [
      { text: "\\(3 \\times 5 \\times 7\\)", imageUrl: "" },
      { text: "\\(5 \\times 21\\)", imageUrl: "" },
      { text: "\\(3^2 \\times 5 \\times 7\\)", imageUrl: "" },
      { text: "\\(3 \\times 35\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Divide 105 by 5 (since it ends in 5) to get 21, then split 21 into prime factors.",
    solution: "Factorise 105 step-by-step:\n- Divide by 5: \\(105 = 5 \\times 21\\).\n- Factorise 21: \\(21 = 3 \\times 7\\).\n- Combine: \\(105 = 3 \\times 5 \\times 7\\). All these factors are prime numbers.",
    solutionSteps: [
      {
        explanation: "Divide 105 by the prime number 5.",
        workingOut: "105 = 5 \\times 21",
        graphData: null
      },
      {
        explanation: "Factorise the number 21 into prime numbers.",
        workingOut: "21 = 3 \\times 7 \\implies 105 = 5 \\times 3 \\times 7",
        graphData: null
      },
      {
        explanation: "Arrange the prime factors in ascending order.",
        workingOut: "3 \\times 5 \\times 7",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2f-q4a2",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using powers in factorisation",
    question: "Express the number as a product of prime factors in index notation:\n154",
    opts: [
      { text: "\\(2 \\times 77\\)", imageUrl: "" },
      { text: "\\(2 \\times 7 \\times 11\\)", imageUrl: "" },
      { text: "\\(2^2 \\times 7 \\times 11\\)", imageUrl: "" },
      { text: "\\(14 \\times 11\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "154 is an even number, so divide by 2 first to get 77. Then factorise 77.",
    solution: "Factorise 154 step-by-step:\n- Divide by 2: \\(154 \\div 2 = 77\\).\n- Factorise 77: \\(77 = 7 \\times 11\\).\n- Combine: \\(154 = 2 \\times 7 \\times 11\\). All factors are prime.",
    solutionSteps: [
      {
        explanation: "Divide 154 by the smallest prime factor, 2.",
        workingOut: "154 \\div 2 = 77",
        graphData: null
      },
      {
        explanation: "Factorise 77 into prime numbers.",
        workingOut: "77 = 7 \\times 11 \\implies 154 = 2 \\times 7 \\times 11",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2f-q4b",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Using powers in factorisation",
    question: "What is the highest common factor (HCF) of both 105 and 154?",
    opts: [
      { text: "\\(5\\)", imageUrl: "" },
      { text: "\\(7\\)", imageUrl: "" },
      { text: "\\(11\\)", imageUrl: "" },
      { text: "\\(35\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Find the prime factorisations of both numbers and identify the prime factor they have in common.",
    solution: "Compare the prime factorisations:\n- \\(105 = 3 \\times 5 \\times \\mathbf{7}\\)\n- \\(154 = 2 \\times \\mathbf{7} \\times 11\\)\nThe only common prime factor in both expressions is 7. Thus, the Highest Common Factor (HCF) is 7.",
    solutionSteps: [
      {
        explanation: "Compare the prime factorisations of 105 and 154.",
        workingOut: "105 = 3 \\times 5 \\times \\mathbf{7} \\\\ 154 = 2 \\times \\mathbf{7} \\times 11",
        graphData: null
      },
      {
        explanation: "Identify the factor that is common to both lists.",
        workingOut: "\\text{Common prime factor} = 7",
        graphData: null
      },
      {
        explanation: "Conclude the Highest Common Factor.",
        workingOut: "\\text{HCF} = 7",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2f-q5",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Using powers in factorisation",
    question: "Which of the following is a list of all two-digit numbers that are the product of three different prime numbers?",
    opts: [
      { text: "\\(30, 42, 70, 78\\)", imageUrl: "" },
      { text: "\\(30, 42, 66, 70, 78\\)", imageUrl: "" },
      { text: "\\(30, 42, 60, 70, 84\\)", imageUrl: "" },
      { text: "\\(30, 42, 66, 70, 78, 102\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Multiply small distinct primes (e.g. 2, 3, 5, 7, 11...) to find all products that lie between 10 and 99. Note that 60 and 84 have repeated factors, so they are not products of three DIFFERENT primes.",
    solution: "Find combinations of three different prime numbers whose product is a two-digit number (10 to 99):\n- Using 2 and 3:\n  - \\(2 \\times 3 \\times 5 = 30\\)\n  - \\(2 \\times 3 \\times 7 = 42\\)\n  - \\(2 \\times 3 \\times 11 = 66\\)\n  - \\(2 \\times 3 \\times 13 = 78\\)\n  - \\(2 \\times 3 \\times 17 = 102\\) (too large, 3 digits)\n- Using 2 and 5:\n  - \\(2 \\times 5 \\times 7 = 70\\)\n  - \\(2 \\times 5 \\times 11 = 110\\) (too large)\n- Using 3 and 5:\n  - \\(3 \\times 5 \\times 7 = 105\\) (too large)\nThus, the only valid two-digit numbers are 30, 42, 66, 70, and 78.",
    solutionSteps: [
      {
        explanation: "Test combinations starting with the two smallest primes, 2 and 3.",
        workingOut: "2 \\times 3 \\times 5 = 30, \\quad 2 \\times 3 \\times 7 = 42, \\quad 2 \\times 3 \\times 11 = 66, \\quad 2 \\times 3 \\times 13 = 78",
        graphData: null
      },
      {
        explanation: "Test the next combination using 2 and 5.",
        workingOut: "2 \\times 5 \\times 7 = 70",
        graphData: null
      },
      {
        explanation: "Check the boundary cases that exceed 99 (three-digit numbers).",
        workingOut: "2 \\times 3 \\times 17 = 102, \\quad 2 \\times 5 \\times 11 = 110, \\quad 3 \\times 5 \\times 7 = 105",
        graphData: null
      },
      {
        explanation: "List and sort all valid two-digit solutions.",
        workingOut: "\\{30, 42, 66, 70, 78\\}",
        graphData: null
      }
    ]
  }
];
