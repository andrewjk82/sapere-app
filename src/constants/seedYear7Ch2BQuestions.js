export const Y7_CH2B_QUESTIONS = [
  // ── QUESTION 1a ──
  {
    id: "y7-2b-q1a",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    t: "Odd and even numbers",
    question: "List the odd numbers that are factors of 30, separated by commas in ascending order.",
    a: "1, 3, 5, 15",
    hint: "First find all factors of 30, then select only the odd ones.",
    solutionSteps: [
      {
        explanation: "Find all factors of 30.",
        workingOut: "1, 2, 3, 5, 6, 10, 15, 30"
      },
      {
        explanation: "Select only the odd numbers from the list.",
        workingOut: "1, 3, 5, 15"
      }
    ]
  },

  // ── QUESTION 1b ──
  {
    id: "y7-2b-q1b",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    t: "Odd and even numbers",
    question: "List the even numbers that are factors of 30, separated by commas in ascending order.",
    a: "2, 6, 10, 30",
    hint: "First find all factors of 30, then select only the even ones.",
    solutionSteps: [
      {
        explanation: "Find all factors of 30.",
        workingOut: "1, 2, 3, 5, 6, 10, 15, 30"
      },
      {
        explanation: "Select only the even numbers from the list.",
        workingOut: "2, 6, 10, 30"
      }
    ]
  },

  // ── QUESTION 1c ──
  {
    id: "y7-2b-q1c",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    t: "Odd and even numbers",
    question: "List the even multiples of 3 that are less than 60, separated by commas in ascending order.",
    a: "6, 12, 18, 24, 30, 36, 42, 48, 54",
    hint: "Write down the multiples of 3, then keep only the even ones less than 60.",
    solutionSteps: [
      {
        explanation: "List the multiples of 3.",
        workingOut: "3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57"
      },
      {
        explanation: "Filter for only the even multiples.",
        workingOut: "6, 12, 18, 24, 30, 36, 42, 48, 54"
      }
    ]
  },

  // ── QUESTION 2a ──
  {
    id: "y7-2b-q2a",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    t: "Odd and even numbers",
    question: "Write down all the odd numbers between 20 and 34, separated by commas in ascending order.",
    a: "21, 23, 25, 27, 29, 31, 33",
    hint: "Odd numbers end in 1, 3, 5, 7, or 9.",
    solutionSteps: [
      {
        explanation: "List the odd integers strictly between 20 and 34.",
        workingOut: "21, 23, 25, 27, 29, 31, 33"
      }
    ]
  },

  // ── QUESTION 2b ──
  {
    id: "y7-2b-q2b",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    t: "Odd and even numbers",
    question: "Write down all the even numbers between 375 and 393, separated by commas in ascending order.",
    a: "376, 378, 380, 382, 384, 386, 388, 390, 392",
    hint: "Even numbers end in 0, 2, 4, 6, or 8.",
    solutionSteps: [
      {
        explanation: "List the even integers strictly between 375 and 393.",
        workingOut: "376, 378, 380, 382, 384, 386, 388, 390, 392"
      }
    ]
  },

  // ── QUESTION 2c ──
  {
    id: "y7-2b-q2c",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    t: "Odd and even numbers",
    question: "How many odd whole numbers are less than 100?",
    a: "50",
    hint: "Odd numbers less than 100 start at 1 and end at 99.",
    solutionSteps: [
      {
        explanation: "The odd whole numbers less than 100 are 1, 3, 5, ..., 99.",
        workingOut: "\\text{Odd numbers} = \\{1, 3, 5, \\dots, 99\\}"
      },
      {
        explanation: "Calculate the total count using the formula for arithmetic progressions.",
        workingOut: "n = \\frac{99 - 1}{2} + 1 = 50"
      }
    ]
  },

  // ── QUESTION 2d ──
  {
    id: "y7-2b-q2d",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    t: "Odd and even numbers",
    question: "How many even whole numbers are less than 21?",
    a: "11",
    hint: "Remember that whole numbers start at 0, and 0 is an even number.",
    solutionSteps: [
      {
        explanation: "List the even whole numbers less than 21 (including 0).",
        workingOut: "0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20"
      },
      {
        explanation: "Count the number of items in the list.",
        workingOut: "\\text{Count} = 11"
      }
    ]
  },

  // ── QUESTION 3a ──
  {
    id: "y7-2b-q3a",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    t: "Odd and even numbers",
    question: "Write two consecutive odd numbers that add to 432, separated by a comma in ascending order.",
    a: "215, 217",
    hint: "Consecutive odd numbers differ by 2. Let them be \\(x\\) and \\(x + 2\\).",
    solutionSteps: [
      {
        explanation: "Set up the equation for two consecutive odd numbers adding to 432.",
        workingOut: "x + (x + 2) = 432"
      },
      {
        explanation: "Solve for \\(x\\).",
        workingOut: "2x + 2 = 432 \\implies 2x = 430 \\implies x = 215"
      },
      {
        explanation: "Find the next consecutive odd number.",
        workingOut: "x + 2 = 217"
      }
    ]
  },

  // ── QUESTION 3b ──
  {
    id: "y7-2b-q3b",
    type: "medium",
    difficulty: "medium",
    timeLimit: 90,
    t: "Odd and even numbers",
    question: "Write two consecutive odd numbers that add to 984, separated by a comma in ascending order.",
    a: "491, 493",
    hint: "Let the two numbers be \\(x\\) and \\(x + 2\\). Solve \\(2x + 2 = 984\\).",
    solutionSteps: [
      {
        explanation: "Set up the equation.",
        workingOut: "2x + 2 = 984"
      },
      {
        explanation: "Solve for the first number \\(x\\).",
        workingOut: "2x = 982 \\implies x = 491"
      },
      {
        explanation: "Find the second number.",
        workingOut: "x + 2 = 493"
      }
    ]
  },

  // ── QUESTION 3c ──
  {
    id: "y7-2b-q3c",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    t: "Odd and even numbers",
    question: "Write two consecutive odd numbers that add to 1028, separated by a comma in ascending order.",
    a: "513, 515",
    hint: "Let the two numbers be \\(x\\) and \\(x + 2\\). Solve \\(2x + 2 = 1028\\).",
    solutionSteps: [
      {
        explanation: "Set up the equation.",
        workingOut: "2x + 2 = 1028"
      },
      {
        explanation: "Solve for the first number \\(x\\).",
        workingOut: "2x = 1026 \\implies x = 513"
      },
      {
        explanation: "Find the second number.",
        workingOut: "x + 2 = 515"
      }
    ]
  },

  // ── QUESTION 4a ──
  {
    id: "y7-2b-q4a",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Odd and even numbers",
    question: "Which of the following consists of two different even numbers greater than 1, and one odd number that add to 633?",
    a: "2, 4, 627",
    opts: [
      "2, 4, 627",
      "2, 2, 629",
      "3, 4, 626",
      "2, 4, 628"
    ],
    hint: "Verify that two numbers are even, different, greater than 1, one is odd, and they add to 633.",
    solutionSteps: [
      {
        explanation: "Check the sum: \\(2 + 4 + 627 = 633\\).",
        workingOut: "2 + 4 + 627 = 633"
      },
      {
        explanation: "Check the conditions: 2 and 4 are different even numbers greater than 1. 627 is an odd number. All conditions are satisfied.",
        workingOut: "\\text{Valid}"
      }
    ]
  },

  // ── QUESTION 4b ──
  {
    id: "y7-2b-q4b",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Odd and even numbers",
    question: "Which of the following consists of two different even numbers greater than 1, and one odd number that add to 1001?",
    a: "2, 4, 995",
    opts: [
      "2, 4, 995",
      "2, 4, 996",
      "1, 4, 996",
      "2, 2, 997"
    ],
    hint: "Verify that two numbers are even, different, greater than 1, one is odd, and they add to 1001.",
    solutionSteps: [
      {
        explanation: "Check the sum: \\(2 + 4 + 995 = 1001\\).",
        workingOut: "2 + 4 + 995 = 1001"
      },
      {
        explanation: "Check the conditions: 2 and 4 are different even numbers greater than 1. 995 is an odd number.",
        workingOut: "\\text{Valid}"
      }
    ]
  },

  // ── QUESTION 4c ──
  {
    id: "y7-2b-q4c",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Odd and even numbers",
    question: "Which of the following consists of two different even numbers greater than 1, and one odd number that add to 2397?",
    a: "2, 4, 2391",
    opts: [
      "2, 4, 2391",
      "2, 4, 2392",
      "2, 2, 2393",
      "3, 5, 2389"
    ],
    hint: "Verify that two numbers are even, different, greater than 1, one is odd, and they add to 2397.",
    solutionSteps: [
      {
        explanation: "Check the sum: \\(2 + 4 + 2391 = 2397\\).",
        workingOut: "2 + 4 + 2391 = 2397"
      },
      {
        explanation: "Check the conditions: 2 and 4 are different even numbers greater than 1. 2391 is an odd number.",
        workingOut: "\\text{Valid}"
      }
    ]
  },

  // ── QUESTION 5a ──
  {
    id: "y7-2b-q5a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Odd and even numbers",
    question: "Complete the sentence: The sum of two even numbers is an ______ number.",
    a: "even",
    opts: ["even", "odd"],
    hint: "Try an example: 2 + 4 = ?",
    solutionSteps: [
      {
        explanation: "Add two even numbers, for example, 2 and 4.",
        workingOut: "2 + 4 = 6"
      },
      {
        explanation: "6 is an even number. In general, Even + Even = Even.",
        workingOut: "\\text{even}"
      }
    ]
  },

  // ── QUESTION 5b ──
  {
    id: "y7-2b-q5b",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Odd and even numbers",
    question: "Complete the sentence: The sum of two odd numbers is an ______ number.",
    a: "even",
    opts: ["even", "odd"],
    hint: "Try an example: 3 + 5 = ?",
    solutionSteps: [
      {
        explanation: "Add two odd numbers, for example, 3 and 5.",
        workingOut: "3 + 5 = 8"
      },
      {
        explanation: "8 is an even number. In general, Odd + Odd = Even.",
        workingOut: "\\text{even}"
      }
    ]
  },

  // ── QUESTION 5c ──
  {
    id: "y7-2b-q5c",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Odd and even numbers",
    question: "Complete the sentence: The sum of an odd number and an even number is an ______ number.",
    a: "odd",
    opts: ["even", "odd"],
    hint: "Try an example: 3 + 4 = ?",
    solutionSteps: [
      {
        explanation: "Add an odd number and an even number, for example, 3 and 4.",
        workingOut: "3 + 4 = 7"
      },
      {
        explanation: "7 is an odd number. In general, Odd + Even = Odd.",
        workingOut: "\\text{odd}"
      }
    ]
  },

  // ── QUESTION 6ai ──
  {
    id: "y7-2b-q6ai",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    t: "Odd and even numbers",
    question: "Write down the product:\n\\( 6 \\times 8 \\)",
    a: "48",
    hint: "Multiply 6 by 8.",
    solutionSteps: [
      {
        explanation: "Perform the multiplication.",
        workingOut: "6 \\times 8 = 48"
      }
    ]
  },

  // ── QUESTION 6aii ──
  {
    id: "y7-2b-q6aii",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    t: "Odd and even numbers",
    question: "Write down the product:\n\\( 6 \\times 5 \\)",
    a: "30",
    hint: "Multiply 6 by 5.",
    solutionSteps: [
      {
        explanation: "Perform the multiplication.",
        workingOut: "6 \\times 5 = 30"
      }
    ]
  },

  // ── QUESTION 6aiii ──
  {
    id: "y7-2b-q6aiii",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    t: "Odd and even numbers",
    question: "Write down the product:\n\\( 7 \\times 5 \\)",
    a: "35",
    hint: "Multiply 7 by 5.",
    solutionSteps: [
      {
        explanation: "Perform the multiplication.",
        workingOut: "7 \\times 5 = 35"
      }
    ]
  },

  // ── QUESTION 6bi ──
  {
    id: "y7-2b-q6bi",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Odd and even numbers",
    question: "Make the statement true: The product of two even numbers is an ______ number.",
    a: "even",
    opts: ["even", "odd"],
    hint: "Try an example: 2 * 4 = 8.",
    solutionSteps: [
      {
        explanation: "Multiply two even numbers, for example, 2 and 4.",
        workingOut: "2 \\times 4 = 8"
      },
      {
        explanation: "8 is an even number. In general, Even * Even = Even.",
        workingOut: "\\text{even}"
      }
    ]
  },

  // ── QUESTION 6bii ──
  {
    id: "y7-2b-q6bii",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Odd and even numbers",
    question: "Make the statement true: The product of two odd numbers is an ______ number.",
    a: "odd",
    opts: ["even", "odd"],
    hint: "Try an example: 3 * 5 = 15.",
    solutionSteps: [
      {
        explanation: "Multiply two odd numbers, for example, 3 and 5.",
        workingOut: "3 \\times 5 = 15"
      },
      {
        explanation: "15 is an odd number. In general, Odd * Odd = Odd.",
        workingOut: "\\text{odd}"
      }
    ]
  },

  // ── QUESTION 6biii ──
  {
    id: "y7-2b-q6biii",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Odd and even numbers",
    question: "Make the statement true: The product of an odd number and an even number is an ______ number.",
    a: "even",
    opts: ["even", "odd"],
    hint: "Try an example: 3 * 4 = 12.",
    solutionSteps: [
      {
        explanation: "Multiply an odd number and an even number, for example, 3 and 4.",
        workingOut: "3 \\times 4 = 12"
      },
      {
        explanation: "12 is an even number. In general, Odd * Even = Even.",
        workingOut: "\\text{even}"
      }
    ]
  },

  // ── QUESTION 7a ──
  {
    id: "y7-2b-q7a",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Odd and even numbers",
    question: "Olivia notices that writing reflected in one mirror is unreadable, but that writing reflected in two mirrors is readable again. State whether it would be readable or unreadable after 5 reflections.",
    a: "unreadable",
    opts: ["readable", "unreadable"],
    hint: "Odd number of reflections are unreadable, even are readable.",
    solutionSteps: [
      {
        explanation: "Since 5 is an odd number, the writing will undergo an odd number of reflections.",
        workingOut: "\\text{5 is odd}"
      },
      {
        explanation: "Therefore, the writing will be unreadable.",
        workingOut: "\\text{unreadable}"
      }
    ]
  },

  // ── QUESTION 7b ──
  {
    id: "y7-2b-q7b",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Odd and even numbers",
    question: "Olivia notices that writing reflected in one mirror is unreadable, but that writing reflected in two mirrors is readable again. State whether it would be readable or unreadable after 8 reflections.",
    a: "readable",
    opts: ["readable", "unreadable"],
    hint: "Odd number of reflections are unreadable, even are readable.",
    solutionSteps: [
      {
        explanation: "Since 8 is an even number, the writing will undergo an even number of reflections.",
        workingOut: "\\text{8 is even}"
      },
      {
        explanation: "Therefore, the writing will be readable.",
        workingOut: "\\text{readable}"
      }
    ]
  },

  // ── QUESTION 7c ──
  {
    id: "y7-2b-q7c",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Odd and even numbers",
    question: "Olivia notices that writing reflected in one mirror is unreadable, but that writing reflected in two mirrors is readable again. State whether it would be readable or unreadable after 15 reflections.",
    a: "unreadable",
    opts: ["readable", "unreadable"],
    hint: "Odd number of reflections are unreadable, even are readable.",
    solutionSteps: [
      {
        explanation: "Since 15 is an odd number, the writing will undergo an odd number of reflections.",
        workingOut: "\\text{15 is odd}"
      },
      {
        explanation: "Therefore, the writing will be unreadable.",
        workingOut: "\\text{unreadable}"
      }
    ]
  },

  // ── QUESTION 7d ──
  {
    id: "y7-2b-q7d",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Odd and even numbers",
    question: "Olivia notices that writing reflected in one mirror is unreadable, but that writing reflected in two mirrors is readable again. State whether it would be readable or unreadable after 2224 reflections.",
    a: "readable",
    opts: ["readable", "unreadable"],
    hint: "Odd number of reflections are unreadable, even are readable.",
    solutionSteps: [
      {
        explanation: "Since 2224 is an even number, the writing will undergo an even number of reflections.",
        workingOut: "\\text{2224 is even}"
      },
      {
        explanation: "Therefore, the writing will be readable.",
        workingOut: "\\text{readable}"
      }
    ]
  },

  // ── QUESTION 8 ──
  {
    id: "y7-2b-q8",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Odd and even numbers",
    question: "Hosni has lined up all his toy soldiers on a table in front of a mirror. He counts all the soldiers he can see, including those in the mirror. Will the number of soldiers be an odd or an even number?",
    a: "even",
    opts: ["odd", "even"],
    hint: "Each real soldier has exactly one mirror reflection.",
    solutionSteps: [
      {
        explanation: "If Hosni has \\(N\\) real soldiers, each real soldier produces exactly one reflection in the mirror.",
        workingOut: "\\text{Real soldiers} = N, \\text{Reflections} = N"
      },
      {
        explanation: "The total number of soldiers he can see is the sum of real soldiers and reflections.",
        workingOut: "\\text{Total} = N + N = 2N"
      },
      {
        explanation: "Since \\(2N\\) is divisible by 2 for any integer \\(N\\), the total number is always even.",
        workingOut: "\\text{even}"
      }
    ]
  }
];
