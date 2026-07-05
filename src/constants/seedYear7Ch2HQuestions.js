export const Y7_CH2H_QUESTIONS = [
  {
    id: "y7-2h-q1a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Lowest common multiple and highest common factor",
    question: "Find the Lowest Common Multiple (LCM) of:\n8 and 12",
    opts: [
      { text: "\\(16\\)", imageUrl: "" },
      { text: "\\(24\\)", imageUrl: "" },
      { text: "\\(48\\)", imageUrl: "" },
      { text: "\\(4\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "List the multiples of 12 (12, 24, 36...) and find the smallest one that is also divisible by 8.",
    solution: "To find the Lowest Common Multiple (LCM) of 8 and 12:\n- Multiples of 8: 8, 16, 24, 32, 40, 48...\n- Multiples of 12: 12, 24, 36, 48...\nThe smallest multiple that appears in both lists is 24. Thus, \\(LCM = 24\\).",
    solutionSteps: [
      {
        explanation: "List multiples of the larger number, 12.",
        workingOut: "\\text{Multiples of 12} = \\{12, 24, 36, 48, \\dots\\}",
        graphData: null
      },
      {
        explanation: "Check these multiples starting from the smallest for divisibility by 8.",
        workingOut: "12 \\div 8 = 1.5 \\quad (\\text{no}), \\quad 24 \\div 8 = 3 \\quad (\\text{yes})",
        graphData: null
      },
      {
        explanation: "Conclude the lowest common multiple.",
        workingOut: "\\text{LCM} = 24",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2h-q1b",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Lowest common multiple and highest common factor",
    question: "Find the Lowest Common Multiple (LCM) of:\n8 and 9",
    opts: [
      { text: "\\(72\\)", imageUrl: "" },
      { text: "\\(18\\)", imageUrl: "" },
      { text: "\\(36\\)", imageUrl: "" },
      { text: "\\(54\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Since 8 and 9 share no common factors other than 1, their LCM is simply their product.",
    solution: "Because 8 and 9 are coprime (they have no common factors other than 1), their LCM is found by multiplying them together:\n\\(LCM = 8 \\times 9 = 72\\).",
    solutionSteps: [
      {
        explanation: "Check for any common prime factors between 8 and 9.",
        workingOut: "8 = 2^3, \\quad 9 = 3^2 \\implies \\text{No common factors}",
        graphData: null
      },
      {
        explanation: "For numbers sharing no common prime factors, the LCM is their product.",
        workingOut: "\\text{LCM} = 8 \\times 9 = 72",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2h-q1d",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Lowest common multiple and highest common factor",
    question: "Find the Lowest Common Multiple (LCM) of:\n12 and 15",
    opts: [
      { text: "\\(30\\)", imageUrl: "" },
      { text: "\\(45\\)", imageUrl: "" },
      { text: "\\(60\\)", imageUrl: "" },
      { text: "\\(180\\)", imageUrl: "" }
    ],
    answer: 2,
    hint: "List multiples of 15 (15, 30, 45, 60...) and test when they can be divided exactly by 12.",
    solution: "List the multiples of the larger number:\n- Multiples of 15: 15 (no), 30 (no), 45 (no), 60 (yes, \\(60 \\div 12 = 5\\)).\nThus, the LCM of 12 and 15 is 60.",
    solutionSteps: [
      {
        explanation: "List multiples of 15.",
        workingOut: "\\text{Multiples of 15} = \\{15, 30, 45, 60, 75, \\dots\\}",
        graphData: null
      },
      {
        explanation: "Check the multiples in order for divisibility by 12.",
        workingOut: "15 \\text{ (no)}, \\quad 30 \\text{ (no)}, \\quad 45 \\text{ (no)}, \\quad 60 \\div 12 = 5 \\text{ (yes)}",
        graphData: null
      },
      {
        explanation: "Conclude the lowest common multiple.",
        workingOut: "\\text{LCM} = 60",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2h-q1f",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Lowest common multiple and highest common factor",
    question: "Find the Lowest Common Multiple (LCM) of:\n20 and 90",
    opts: [
      { text: "\\(90\\)", imageUrl: "" },
      { text: "\\(180\\)", imageUrl: "" },
      { text: "\\(270\\)", imageUrl: "" },
      { text: "\\(360\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "List multiples of 90 (90, 180, 270...) and check which is divisible by 20.",
    solution: "List multiples of 90:\n- 90 (not divisible by 20)\n- 180 (divisible by 20 since \\(180 \\div 20 = 9\\)).\nTherefore, the LCM of 20 and 90 is 180.",
    solutionSteps: [
      {
        explanation: "List the multiples of 90.",
        workingOut: "\\text{Multiples} = \\{90, 180, 270, \\dots\\}",
        graphData: null
      },
      {
        explanation: "Check divisibility by 20.",
        workingOut: "90 \\div 20 = 4.5 \\quad (\\text{no}), \\quad 180 \\div 20 = 9 \\quad (\\text{yes})",
        graphData: null
      },
      {
        explanation: "Determine the LCM.",
        workingOut: "\\text{LCM} = 180",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2h-q1g",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Lowest common multiple and highest common factor",
    question: "Find the Lowest Common Multiple (LCM) of:\n3, 4 and 6",
    opts: [
      { text: "\\(6\\)", imageUrl: "" },
      { text: "\\(12\\)", imageUrl: "" },
      { text: "\\(18\\)", imageUrl: "" },
      { text: "\\(24\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Find the smallest number that is in the times tables of 3, 4, and 6.",
    solution: "List the multiples of 6:\n- 6 (divisible by 3, but not 4)\n- 12 (divisible by both 3 and 4).\nTherefore, the Lowest Common Multiple is 12.",
    solutionSteps: [
      {
        explanation: "List the multiples of the largest number, 6.",
        workingOut: "\\text{Multiples of 6} = \\{6, 12, 18, 24, \\dots\\}",
        graphData: null
      },
      {
        explanation: "Check the multiples in order for divisibility by 3 and 4.",
        workingOut: "6 \\div 4 = 1.5 \\quad (\\text{no}), \\quad 12 \\div 3 = 4 \\text{ and } 12 \\div 4 = 3 \\quad (\\text{yes})",
        graphData: null
      },
      {
        explanation: "Conclude the LCM.",
        workingOut: "\\text{LCM} = 12",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2h-q1h",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Lowest common multiple and highest common factor",
    question: "Find the Lowest Common Multiple (LCM) of:\n8, 9 and 12",
    opts: [
      { text: "\\(36\\)", imageUrl: "" },
      { text: "\\(48\\)", imageUrl: "" },
      { text: "\\(72\\)", imageUrl: "" },
      { text: "\\(144\\)", imageUrl: "" }
    ],
    answer: 2,
    hint: "Find the LCM of 8 and 12 first (24), then find the LCM of that result and 9.",
    solution: "We can break the problem down:\n1. Find LCM of 8 and 12. Multiples of 12 are 12, 24... since 24 is divisible by 8, \\(LCM(8, 12) = 24\\).\n2. Find LCM of 24 and 9. Multiples of 24: 24 (no), 48 (no), 72 (yes, \\(72 \\div 9 = 8\\)).\nThus, the LCM is 72.",
    solutionSteps: [
      {
        explanation: "Determine the LCM of the first two numbers: 8 and 12.",
        workingOut: "\\text{LCM}(8, 12) = 24",
        graphData: null
      },
      {
        explanation: "List multiples of 24 to find the common multiple with 9.",
        workingOut: "\\text{Multiples of 24} = \\{24, 48, 72, \\dots\\}",
        graphData: null
      },
      {
        explanation: "Test divisibility of these multiples by 9.",
        workingOut: "24 \\div 9 \\text{ (no)}, \\quad 48 \\div 9 \\text{ (no)}, \\quad 72 \\div 9 = 8 \\text{ (yes)}",
        graphData: null
      },
      {
        explanation: "State the final LCM.",
        workingOut: "\\text{LCM} = 72",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2h-q1i",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Lowest common multiple and highest common factor",
    question: "Find the Lowest Common Multiple (LCM) of:\n12, 8, 10 and 30",
    opts: [
      { text: "\\(60\\)", imageUrl: "" },
      { text: "\\(120\\)", imageUrl: "" },
      { text: "\\(240\\)", imageUrl: "" },
      { text: "\\(180\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Find LCM of {8, 12} first (which is 24) and LCM of {10, 30} (which is 30). Then find the LCM of 24 and 30.",
    solution: "Group the numbers to simplify the search:\n- \\(LCM(8, 12) = 24\\)\n- \\(LCM(10, 30) = 30\\)\nNow find the LCM of 24 and 30. List multiples of 30: 30, 60, 90, 120. Since 120 is divisible by 24 (\\(120 \\div 24 = 5\\)), the LCM of all four numbers is 120.",
    solutionSteps: [
      {
        explanation: "Find the LCMs of two sub-groups.",
        workingOut: "\\text{LCM}(8, 12) = 24 \\quad \\text{and} \\quad \\text{LCM}(10, 30) = 30",
        graphData: null
      },
      {
        explanation: "List multiples of the larger intermediate result, 30.",
        workingOut: "\\text{Multiples of 30} = \\{30, 60, 90, 120, \\dots\\}",
        graphData: null
      },
      {
        explanation: "Check when a multiple of 30 is divisible by 24.",
        workingOut: "30, 60, 90 \\text{ are not divisible by 24; } 120 \\div 24 = 5",
        graphData: null
      },
      {
        explanation: "State the combined LCM.",
        workingOut: "\\text{LCM} = 120",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2h-q2a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Lowest common multiple and highest common factor",
    question: "Find the Highest Common Factor (HCF) of:\n30 and 24",
    opts: [
      { text: "\\(3\\)", imageUrl: "" },
      { text: "\\(6\\)", imageUrl: "" },
      { text: "\\(8\\)", imageUrl: "" },
      { text: "\\(12\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "List the factors of both numbers and choose the largest factor they share.",
    solution: "List the factors of each:\n- Factors of 30: 1, 2, 3, 5, 6, 10, 15, 30\n- Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24\nThe common factors are 1, 2, 3, and 6. The highest of these is 6.",
    solutionSteps: [
      {
        explanation: "Identify all factors of 30.",
        workingOut: "\\text{Factors of 30} = {1, 2, 3, 5, 6, 10, 15, 30}",
        graphData: null
      },
      {
        explanation: "Identify all factors of 24.",
        workingOut: "\\text{Factors of 24} = {1, 2, 3, 4, 6, 8, 12, 24}",
        graphData: null
      },
      {
        explanation: "Find the largest factor present in both groups.",
        workingOut: "\\text{Common factors} = {1, 2, 3, 6} \\implies \\text{HCF} = 6",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2h-q2b",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Lowest common multiple and highest common factor",
    question: "Find the Highest Common Factor (HCF) of:\n15 and 21",
    opts: [
      { text: "\\(3\\)", imageUrl: "" },
      { text: "\\(5\\)", imageUrl: "" },
      { text: "\\(7\\)", imageUrl: "" },
      { text: "\\(15\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "List the factors of 15 and 21. Look for the largest number that divides both.",
    solution: "Find factors of both numbers:\n- Factors of 15: 1, 3, 5, 15\n- Factors of 21: 1, 3, 7, 21\nThe common factors are 1 and 3. The highest is 3.",
    solutionSteps: [
      {
        explanation: "Find all factors of 15.",
        workingOut: "\\text{Factors of 15} = {1, 3, 5, 15}",
        graphData: null
      },
      {
        explanation: "Find all factors of 21.",
        workingOut: "\\text{Factors of 21} = {1, 3, 7, 21}",
        graphData: null
      },
      {
        explanation: "Identify the highest factor they share.",
        workingOut: "\\text{Common factors} = {1, 3} \\implies \\text{HCF} = 3",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2h-q2d",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Lowest common multiple and highest common factor",
    question: "Find the Highest Common Factor (HCF) of:\n25 and 16",
    opts: [
      { text: "\\(5\\)", imageUrl: "" },
      { text: "\\(4\\)", imageUrl: "" },
      { text: "\\(1\\)", imageUrl: "" },
      { text: "\\(2\\)", imageUrl: "" }
    ],
    answer: 2,
    hint: "Do 25 (5 * 5) and 16 (2 * 2 * 2 * 2) share any prime factors? If not, their HCF is 1.",
    solution: "Write down the prime factorisations:\n- \\(25 = 5^2\\)\n- \\(16 = 2^4\\)\nSince there are no common prime factors between the two numbers, the only common factor they share is 1. Thus, \\(HCF = 1\\).",
    solutionSteps: [
      {
        explanation: "List prime factorisations of 25 and 16.",
        workingOut: "25 = 5 \\times 5, \\quad 16 = 2 \\times 2 \\times 2 \\times 2",
        graphData: null
      },
      {
        explanation: "Observe that they have no common prime factors.",
        workingOut: "\\text{No shared prime factors}",
        graphData: null
      },
      {
        explanation: "Conclude that their highest common divisor is 1.",
        workingOut: "\\text{HCF} = 1",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2h-q2e",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Lowest common multiple and highest common factor",
    question: "Find the Highest Common Factor (HCF) of:\n36 and 16",
    opts: [
      { text: "\\(2\\)", imageUrl: "" },
      { text: "\\(4\\)", imageUrl: "" },
      { text: "\\(8\\)", imageUrl: "" },
      { text: "\\(12\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "List the factors of 16 and 36, or look at their prime factorisations and take common powers.",
    solution: "Using prime factorisations:\n- \\(36 = 2^2 \\times 3^2\\)\n- \\(16 = 2^4\\)\nThe only common prime factor is 2. The lowest power of 2 present in both is \\(2^2 = 4\\). Therefore, \\(HCF = 4\\).",
    solutionSteps: [
      {
        explanation: "Write the prime factorisations of 36 and 16.",
        workingOut: "36 = 2^2 \\times 3^2, \\quad 16 = 2^4",
        graphData: null
      },
      {
        explanation: "Identify the common prime factors and select their lowest power.",
        workingOut: "\\text{Common factor base} = 2, \\quad \\text{Lowest power} = 2^2",
        graphData: null
      },
      {
        explanation: "Calculate the HCF.",
        workingOut: "\\text{HCF} = 2^2 = 4",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2h-q2f",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Lowest common multiple and highest common factor",
    question: "Find the Highest Common Factor (HCF) of:\n26 and 65",
    opts: [
      { text: "\\(13\\)", imageUrl: "" },
      { text: "\\(26\\)", imageUrl: "" },
      { text: "\\(5\\)", imageUrl: "" },
      { text: "\\(2\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Factorise both numbers. Note that \\(26 = 2 \\times 13\\) and \\(65 = 5 \\times 13\\).",
    solution: "Factorise the numbers:\n- \\(26 = 2 \\times 13\\)\n- \\(65 = 5 \\times 13\\)\nThe highest factor they share in common is 13. Therefore, \\(HCF = 13\\).",
    solutionSteps: [
      {
        explanation: "Write the prime factorisations.",
        workingOut: "26 = 2 \\times 13, \\quad 65 = 5 \\times 13",
        graphData: null
      },
      {
        explanation: "Identify the common factor.",
        workingOut: "\\text{Common factor} = 13",
        graphData: null
      },
      {
        explanation: "Conclude HCF.",
        workingOut: "\\text{HCF} = 13",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2h-q2g",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Lowest common multiple and highest common factor",
    question: "Find the Highest Common Factor (HCF) of:\n12, 18 and 30",
    opts: [
      { text: "\\(3\\)", imageUrl: "" },
      { text: "\\(6\\)", imageUrl: "" },
      { text: "\\(2\\)", imageUrl: "" },
      { text: "\\(12\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "List the factors of all three numbers and pick the largest one that appears in all three lists.",
    solution: "Find factors of all three numbers:\n- Factors of 12: 1, 2, 3, 4, 6, 12\n- Factors of 18: 1, 2, 3, 6, 9, 18\n- Factors of 30: 1, 2, 3, 5, 6, 10, 15, 30\nThe common factors are 1, 2, 3, and 6. The largest is 6. Thus, \\(HCF = 6\\).",
    solutionSteps: [
      {
        explanation: "Write out the factors for 12, 18, and 30.",
        workingOut: "12: {1, 2, 3, 4, 6, 12} \\\\ 18: {1, 2, 3, 6, 9, 18} \\\\ 30: {1, 2, 3, 5, 6, 10, 15, 30}",
        graphData: null
      },
      {
        explanation: "Determine the common factors.",
        workingOut: "\\text{Common factors} = {1, 2, 3, 6}",
        graphData: null
      },
      {
        explanation: "Identify the highest value.",
        workingOut: "\\text{HCF} = 6",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2h-q2h",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Lowest common multiple and highest common factor",
    question: "Find the Highest Common Factor (HCF) of:\n15, 6 and 14",
    opts: [
      { text: "\\(3\\)", imageUrl: "" },
      { text: "\\(2\\)", imageUrl: "" },
      { text: "\\(1\\)", imageUrl: "" },
      { text: "\\(6\\)", imageUrl: "" }
    ],
    answer: 2,
    hint: "List the factors of all three numbers. Check if there is any factor greater than 1 that divides all three.",
    solution: "List factors of all three:\n- Factors of 15: 1, 3, 5, 15\n- Factors of 6: 1, 2, 3, 6\n- Factors of 14: 1, 2, 7, 14\nThe only number that divides all three is 1. Thus, \\(HCF = 1\\).",
    solutionSteps: [
      {
        explanation: "List factors for each number.",
        workingOut: "15: {1, 3, 5, 15} \\\\ 6: {1, 2, 3, 6} \\\\ 14: {1, 2, 7, 14}",
        graphData: null
      },
      {
        explanation: "Find the intersection of all three sets.",
        workingOut: "\\text{Common factors} = {1}",
        graphData: null
      },
      {
        explanation: "Conclude HCF.",
        workingOut: "\\text{HCF} = 1",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2h-q2i",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Lowest common multiple and highest common factor",
    question: "Find the Highest Common Factor (HCF) of:\n60, 20 and 10",
    opts: [
      { text: "\\(10\\)", imageUrl: "" },
      { text: "\\(20\\)", imageUrl: "" },
      { text: "\\(5\\)", imageUrl: "" },
      { text: "\\(60\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Note that 10 is the smallest number. Can 10 divide both 20 and 60?",
    solution: "Observe the relationships between the numbers:\n- 10 divides 10 (1 time)\n- 10 divides 20 (2 times)\n- 10 divides 60 (6 times)\nSince 10 is a factor of all three, and it is the smallest of the three, it is impossible to have a common factor larger than 10. Thus, \\(HCF = 10\\).",
    solutionSteps: [
      {
        explanation: "Examine divisibility by the smallest number, 10.",
        workingOut: "20 \\div 10 = 2 \\quad (\\text{yes}), \\quad 60 \\div 10 = 6 \\quad (\\text{yes})",
        graphData: null
      },
      {
        explanation: "Since the smallest number divides the larger numbers, it is the HCF.",
        workingOut: "\\text{HCF} = 10",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2h-q3a1",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Lowest common multiple and highest common factor",
    question: "Find the Highest Common Factor (HCF) of 224 and 336.",
    opts: [
      { text: "\\(56\\)", imageUrl: "" },
      { text: "\\(112\\)", imageUrl: "" },
      { text: "\\(16\\)", imageUrl: "" },
      { text: "\\(224\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Use prime factorisation: \\(224 = 2^5 \\times 7\\) and \\(336 = 2^4 \\times 3 \\times 7\\). Pick the lowest powers of common factors.",
    solution: "Perform prime factorisation:\n- \\(224 = 2^5 \\times 7\\)\n- \\(336 = 2^4 \\times 3 \\times 7\\)\nIdentify common prime factors and take their lowest powers: \\(2^4 \\times 7\\). Calculate the value: \\(16 \\times 7 = 112\\). Thus, \\(HCF = 112\\).",
    solutionSteps: [
      {
        explanation: "Find the prime factorisation of 224 and 336.",
        workingOut: "224 = 2^5 \\times 7, \\quad 336 = 2^4 \\times 3 \\times 7",
        graphData: null
      },
      {
        explanation: "Multiply the lowest powers of the common prime factors (2 and 7).",
        workingOut: "\\text{HCF} = 2^4 \\times 7 = 16 \\times 7",
        graphData: null
      },
      {
        explanation: "Calculate the product.",
        workingOut: "16 \\times 7 = 112",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2h-q3a2",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Lowest common multiple and highest common factor",
    question: "Find the Lowest Common Multiple (LCM) of 224 and 336.",
    opts: [
      { text: "\\(672\\)", imageUrl: "" },
      { text: "\\(896\\)", imageUrl: "" },
      { text: "\\(1008\\)", imageUrl: "" },
      { text: "\\(1344\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "From the prime factorisations (\\(224 = 2^5 \\times 7\\) and \\(336 = 2^4 \\times 3 \\times 7\\)), select the highest powers of all prime factors present.",
    solution: "Using the prime factorisations:\n- \\(224 = 2^5 \\times 7\\)\n- \\(336 = 2^4 \\times 3 \\times 7\\)\nTo find the LCM, take the highest power of all prime factors that appear: \\(2^5 \\times 3^1 \\times 7^1\\). Calculate the product: \\(32 \\times 3 \\times 7 = 32 \\times 21 = 672\\).",
    solutionSteps: [
      {
        explanation: "Write down the prime factorisations.",
        workingOut: "224 = 2^5 \\times 7, \\quad 336 = 2^4 \\times 3 \\times 7",
        graphData: null
      },
      {
        explanation: "Form the LCM by taking the highest powers of all factors (2, 3, and 7).",
        workingOut: "\\text{LCM} = 2^5 \\times 3^1 \\times 7^1 = 32 \\times 3 \\times 7",
        graphData: null
      },
      {
        explanation: "Calculate the product.",
        workingOut: "32 \\times 21 = 672",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2h-q3b1",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Lowest common multiple and highest common factor",
    question: "Find the Highest Common Factor (HCF) of 18 and 42.",
    opts: [
      { text: "\\(3\\)", imageUrl: "" },
      { text: "\\(2\\)", imageUrl: "" },
      { text: "\\(6\\)", imageUrl: "" },
      { text: "\\(9\\)", imageUrl: "" }
    ],
    answer: 2,
    hint: "What is the largest number dividing both 18 and 42? Use factorisation.",
    solution: "Using prime factorisation:\n- \\(18 = 2 \\times 3^2\\)\n- \\(42 = 2 \\times 3 \\times 7\\)\nPick the lowest powers of the common factors (2 and 3): \\(2^1 \\times 3^1 = 6\\). Thus, \\(HCF = 6\\).",
    solutionSteps: [
      {
        explanation: "Factorise 18 and 42 into prime factors.",
        workingOut: "18 = 2 \\times 3^2, \\quad 42 = 2 \\times 3 \\times 7",
        graphData: null
      },
      {
        explanation: "Extract the common factors with their lowest exponents.",
        workingOut: "\\text{HCF} = 2^1 \\times 3^1",
        graphData: null
      },
      {
        explanation: "Calculate the value.",
        workingOut: "2 \\times 3 = 6",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2h-q3b2",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Lowest common multiple and highest common factor",
    question: "Find the Lowest Common Multiple (LCM) of 18 and 42.",
    opts: [
      { text: "\\(84\\)", imageUrl: "" },
      { text: "\\(126\\)", imageUrl: "" },
      { text: "\\(252\\)", imageUrl: "" },
      { text: "\\(168\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Using prime factorisations, pick the highest powers of all prime factors: \\(2^1\\), \\(3^2\\), and \\(7^1\\).",
    solution: "Refer to the prime factorisations:\n- \\(18 = 2 \\times 3^2\\)\n- \\(42 = 2 \\times 3 \\times 7\\)\nTo find the LCM, select the highest powers of all prime factors that appear: \\(2^1 \\times 3^2 \\times 7^1 = 2 \\times 9 \\times 7 = 126\\).",
    solutionSteps: [
      {
        explanation: "Identify prime factor structures.",
        workingOut: "18 = 2 \\times 3^2, \\quad 42 = 2 \\times 3 \\times 7",
        graphData: null
      },
      {
        explanation: "Choose the highest powers of all prime factors.",
        workingOut: "\\text{LCM} = 2^1 \\times 3^2 \\times 7^1 = 2 \\times 9 \\times 7",
        graphData: null
      },
      {
        explanation: "Compute the result.",
        workingOut: "18 \\times 7 = 126",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2h-q3c1",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Lowest common multiple and highest common factor",
    question: "Find the Highest Common Factor (HCF) of 45 and 150.",
    opts: [
      { text: "\\(5\\)", imageUrl: "" },
      { text: "\\(15\\)", imageUrl: "" },
      { text: "\\(30\\)", imageUrl: "" },
      { text: "\\(45\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Use prime factorisation: \\(45 = 3^2 \\times 5\\) and \\(150 = 2 \\times 3 \\times 5^2\\). Look for common factors.",
    solution: "Find prime factorisations:\n- \\(45 = 3^2 \\times 5\\)\n- \\(150 = 2 \\times 3 \\times 5^2\\)\nTake the lowest powers of the common factors (3 and 5): \\(3^1 \\times 5^1 = 15\\). Therefore, \\(HCF = 15\\).",
    solutionSteps: [
      {
        explanation: "Factorise 45 and 150 into prime factors.",
        workingOut: "45 = 3^2 \\times 5, \\quad 150 = 2 \\times 3 \\times 5^2",
        graphData: null
      },
      {
        explanation: "Identify common bases (3 and 5) and choose the lowest powers.",
        workingOut: "\\text{HCF} = 3^1 \\times 5^1",
        graphData: null
      },
      {
        explanation: "Compute the product.",
        workingOut: "3 \\times 5 = 15",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2h-q3c2",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Lowest common multiple and highest common factor",
    question: "Find the Lowest Common Multiple (LCM) of 45 and 150.",
    opts: [
      { text: "\\(300\\)", imageUrl: "" },
      { text: "\\(450\\)", imageUrl: "" },
      { text: "\\(600\\)", imageUrl: "" },
      { text: "\\(900\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Using the prime factorisations (\\(45 = 3^2 \\times 5\\) and \\(150 = 2 \\times 3 \\times 5^2\\)), take the highest powers of all prime factors: 2, 3^2, 5^2.",
    solution: "Identify prime factor structures:\n- \\(45 = 3^2 \\times 5\\)\n- \\(150 = 2 \\times 3 \\times 5^2\\)\nTo find the LCM, take the highest power of all prime factors present: \\(2^1 \\times 3^2 \\times 5^2 = 2 \\times 9 \\times 25 = 450\\).",
    solutionSteps: [
      {
        explanation: "Examine prime factor structures.",
        workingOut: "45 = 3^2 \\times 5, \\quad 150 = 2 \\times 3 \\times 5^2",
        graphData: null
      },
      {
        explanation: "Take the highest power of each prime factor (2, 3, and 5).",
        workingOut: "\\text{LCM} = 2^1 \\times 3^2 \\times 5^2 = 2 \\times 9 \\times 25",
        graphData: null
      },
      {
        explanation: "Multiply the values.",
        workingOut: "18 \\times 25 = 450",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2h-q4",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Lowest common multiple and highest common factor",
    question: "A bell rings every 15 minutes and a whistle is blown every 18 minutes. The bell is rung and the whistle blown at 8 a.m. How many minutes will it be before the bell is rung and the whistle blown at the same time again?",
    opts: [
      { text: "\\(60\\) minutes", imageUrl: "" },
      { text: "\\(90\\) minutes", imageUrl: "" },
      { text: "\\(120\\) minutes", imageUrl: "" },
      { text: "\\(180\\) minutes", imageUrl: "" }
    ],
    answer: 1,
    hint: "This problem requires finding the Lowest Common Multiple (LCM) of 15 and 18.",
    solution: "Find the LCM of 15 and 18 using prime factorisation:\n- \\(15 = 3 \\times 5\\)\n- \\(18 = 2 \\times 3^2\\)\nCalculate LCM by taking the highest powers: \\(2 \\times 3^2 \\times 5 = 2 \\times 9 \\times 5 = 90\\) minutes.",
    solutionSteps: [
      {
        explanation: "Determine the prime factorisations of 15 and 18.",
        workingOut: "15 = 3 \\times 5, \\quad 18 = 2 \\times 3^2",
        graphData: null
      },
      {
        explanation: "Take the highest power of each factor (2, 3, and 5).",
        workingOut: "\\text{LCM} = 2^1 \\times 3^2 \\times 5^1 = 2 \\times 9 \\times 5",
        graphData: null
      },
      {
        explanation: "Multiply to find the minutes.",
        workingOut: "18 \\times 5 = 90 \\text{ minutes}",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2h-q5",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "Three patients visit the doctor at intervals of 8 days, 15 days and 24 days, respectively. If they all go to the doctor on 1 March, what will be the date when they next all go to the doctor on the same day?",
    hint: "First find the LCM of 8, 15, and 24, then add that number of days to March 1.",
    solutionSteps: [
      {
        explanation: "Find the LCM of 8, 15, and 24.",
        workingOut: "\\text{LCM}(8, 24) = 24 \\\\ \\text{LCM}(24, 15) = 120",
        graphData: null
      },
      {
        explanation: "Add 120 days starting from March 1.",
        workingOut: "\\text{March (remaining): } 30 \\text{ days (reaches March 31)} \\\\ \\text{April: } 30 \\text{ days (reaches April 30)} \\\\ \\text{May: } 31 \\text{ days (reaches May 31)} \\\\ \\text{Total so far} = 30 + 30 + 31 = 91 \\text{ days}",
        graphData: null
      },
      {
        explanation: "Find the remaining days for June.",
        workingOut: "120 - 91 = 29 \\implies 29 \\text{ June}",
        graphData: null
      }
    ],
    options: [
      {
        text: "30 June",
        imageUrl: ""
      },
      {
        text: "29 June",
        imageUrl: ""
      },
      {
        text: "28 June",
        imageUrl: ""
      },
      {
        text: "1 July",
        imageUrl: ""
      }
    ],
    answer: 1
  },
  {
    id: "y7-2h-q6",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Lowest common multiple and highest common factor",
    question: "Three swimmers take 28 seconds, 44 seconds and 68 seconds to complete a lap of the pool. If they start together, how many seconds will it be before they are side by side at one end of the pool again?",
    opts: [
      { text: "\\(2618\\) seconds", imageUrl: "" },
      { text: "\\(5236\\) seconds", imageUrl: "" },
      { text: "\\(10472\\) seconds", imageUrl: "" },
      { text: "\\(1309\\) seconds", imageUrl: "" }
    ],
    answer: 1,
    hint: "This question requires finding the Lowest Common Multiple (LCM) of 28, 44, and 68.",
    solution: "Find the LCM of 28, 44, and 68 using prime factorisation:\n- \\(28 = 2^2 \\times 7\\)\n- \\(44 = 2^2 \\times 11\\)\n- \\(68 = 2^2 \\times 17\\)\nLCM is the product of the highest power of each prime factor: \\(2^2 \\times 7 \\times 11 \\times 17 = 4 \\times 7 \\times 11 \\times 17 = 5236\\) seconds.",
    solutionSteps: [
      {
        explanation: "Determine the prime factorisations of 28, 44, and 68.",
        workingOut: "28 = 2^2 \\times 7, \\quad 44 = 2^2 \\times 11, \\quad 68 = 2^2 \\times 17",
        graphData: null
      },
      {
        explanation: "Form the LCM by taking the highest powers of all prime factors.",
        workingOut: "\\text{LCM} = 2^2 \\times 7 \\times 11 \\times 17",
        graphData: null
      },
      {
        explanation: "Calculate the final product.",
        workingOut: "4 \\times 7 \\times 11 \\times 17 = 5236 \\text{ seconds}",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2h-q7",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Lowest common multiple and highest common factor",
    question: "A rectangular region of dimensions 30 m by 28 m is covered by square tiles. What is the smallest number of tiles required?",
    opts: [
      { text: "\\(105\\)", imageUrl: "" },
      { text: "\\(420\\)", imageUrl: "" },
      { text: "\\(210\\)", imageUrl: "" },
      { text: "\\(140\\)", imageUrl: "" }
    ],
    answer: 2,
    hint: "To minimize the number of tiles, maximize the size of each square tile by finding the HCF of 30 and 28. Then divide the total area by the area of one tile.",
    solution: "1. Maximize tile size by finding HCF of 30 and 28:\n- \\(30 = 2 \\times 3 \\times 5\\)\n- \\(28 = 2^2 \\times 7 \\implies HCF = 2\\) m.\n2. Divide the total area of the floor by the area of one tile:\n- Total Area = \\(30 \\times 28 = 840\\) m\\(^2\\).\n- Tile Area = \\(2 \\times 2 = 4\\) m\\(^2\\).\n- Number of tiles = \\(840 \\div 4 = 210\\) tiles.",
    solutionSteps: [
      {
        explanation: "Find the HCF of 30 and 28 to determine the maximum size of a square tile.",
        workingOut: "30 = 2 \\times 3 \\times 5, \\quad 28 = 2^2 \\times 7 \\implies \\text{HCF} = 2",
        graphData: null
      },
      {
        explanation: "State the dimensions of the largest possible square tile.",
        workingOut: "\\text{Tile side length} = 2\\text{ m}",
        graphData: null
      },
      {
        explanation: "Determine the total area and the area of one tile.",
        workingOut: "\\text{Total area} = 30 \\times 28 = 840\\text{ m}^2 \\\\ \\text{Tile area} = 2 \\times 2 = 4\\text{ m}^2",
        graphData: null
      },
      {
        explanation: "Divide total area by tile area.",
        workingOut: "840 \\div 4 = 210 \\text{ tiles}",
        graphData: null
      }
    ]
  }
];
