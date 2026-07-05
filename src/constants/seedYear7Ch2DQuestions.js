export const Y7_CH2D_QUESTIONS = [
  {
    id: "y7-2d-q1a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Powers of numbers",
    question: "Evaluate:\n\\( 2^5 \\)",
    opts: [
      { text: "\\(10\\)", imageUrl: "" },
      { text: "\\(32\\)", imageUrl: "" },
      { text: "\\(25\\)", imageUrl: "" },
      { text: "\\(64\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Remember that \\(2^5\\) means 2 multiplied by itself 5 times, NOT \\(2 \\times 5\\).",
    solution: "Write the expression as repeated multiplication: \\( 2^5 = 2 \\times 2 \\times 2 \\times 2 \\times 2 \\). Multiplying step-by-step: \\(2 \\times 2 = 4\\), \\(4 \\times 2 = 8\\), \\(8 \\times 2 = 16\\), and \\(16 \\times 2 = 32\\).",
    solutionSteps: [
      {
        explanation: "Write the power in expanded form as repeated multiplication.",
        workingOut: "2^5 = 2 \\times 2 \\times 2 \\times 2 \\times 2",
        graphData: null
      },
      {
        explanation: "Multiply the first few terms.",
        workingOut: "(2 \\times 2 \\times 2) \\times (2 \\times 2) = 8 \\times 4",
        graphData: null
      },
      {
        explanation: "Calculate the final product.",
        workingOut: "8 \\times 4 = 32",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q1b",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Powers of numbers",
    question: "Evaluate:\n\\( 2^7 \\)",
    opts: [
      { text: "\\(14\\)", imageUrl: "" },
      { text: "\\(64\\)", imageUrl: "" },
      { text: "\\(128\\)", imageUrl: "" },
      { text: "\\(256\\)", imageUrl: "" }
    ],
    answer: 2,
    hint: "You can find \\(2^7\\) by multiplying \\(2^5 = 32\\) by 2 twice more (\\(32 \\times 2 \\times 2\\)).",
    solution: "\\(2^7\\) means multiplying 2 by itself 7 times. Since we know \\(2^5 = 32\\), we can multiply that result by 2 twice more: \\(2^7 = 2^5 \\times 2 \\times 2 = 32 \\times 4 = 128\\).",
    solutionSteps: [
      {
        explanation: "Use the relationship between different powers of 2 to simplify calculation.",
        workingOut: "2^7 = 2^5 \\times 2^2",
        graphData: null
      },
      {
        explanation: "Substitute the known values (\\(2^5 = 32\\) and \\(2^2 = 4\\)).",
        workingOut: "2^7 = 32 \\times 4",
        graphData: null
      },
      {
        explanation: "Calculate the final value.",
        workingOut: "32 \\times 4 = 128",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q1c",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Powers of numbers",
    question: "Evaluate:\n\\( 2^9 \\)",
    opts: [
      { text: "\\(512\\)", imageUrl: "" },
      { text: "\\(18\\)", imageUrl: "" },
      { text: "\\(256\\)", imageUrl: "" },
      { text: "\\(1024\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Multiply \\(2^7 = 128\\) by 2 twice more to get \\(2^9\\).",
    solution: "Write the calculation in terms of known powers of 2. We can compute this as \\(2^9 = 2^7 \\times 2^2 = 128 \\times 4 = 512\\).",
    solutionSteps: [
      {
        explanation: "Express the power of 2 using smaller, known powers.",
        workingOut: "2^9 = 2^7 \\times 2^2",
        graphData: null
      },
      {
        explanation: "Substitute the values (\\(2^7 = 128\\) and \\(2^2 = 4\\)).",
        workingOut: "128 \\times 4",
        graphData: null
      },
      {
        explanation: "Perform the multiplication.",
        workingOut: "128 \\times 4 = 512",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q2a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Powers of numbers",
    question: "Evaluate:\n\\( 3^4 \\)",
    opts: [
      { text: "\\(12\\)", imageUrl: "" },
      { text: "\\(27\\)", imageUrl: "" },
      { text: "\\(81\\)", imageUrl: "" },
      { text: "\\(64\\)", imageUrl: "" }
    ],
    answer: 2,
    hint: "Multiply 3 by itself 4 times: \\( (3 \\times 3) \\times (3 \\times 3) \\).",
    solution: "Write out the repeated multiplication: \\( 3^4 = 3 \\times 3 \\times 3 \\times 3 \\). Grouping these gives \\( (3 \\times 3) \\times (3 \\times 3) = 9 \\times 9 = 81\\).",
    solutionSteps: [
      {
        explanation: "Expand the power as repeated multiplication.",
        workingOut: "3^4 = 3 \\times 3 \\times 3 \\times 3",
        graphData: null
      },
      {
        explanation: "Group the factors into pairs to make multiplication easier.",
        workingOut: "(3 \\times 3) \\times (3 \\times 3) = 9 \\times 9",
        graphData: null
      },
      {
        explanation: "Calculate the final result.",
        workingOut: "9 \\times 9 = 81",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q2b",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Powers of numbers",
    question: "Evaluate:\n\\( 3^5 \\)",
    opts: [
      { text: "\\(15\\)", imageUrl: "" },
      { text: "\\(243\\)", imageUrl: "" },
      { text: "\\(81\\)", imageUrl: "" },
      { text: "\\(729\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Multiply \\(3^4 = 81\\) by 3.",
    solution: "Since we know \\(3^4 = 81\\), we can find \\(3^5\\) by multiplying \\(3^4\\) by an additional 3: \\(3^5 = 3^4 \\times 3 = 81 \\times 3 = 243\\).",
    solutionSteps: [
      {
        explanation: "Express the exponent in terms of the next lower power.",
        workingOut: "3^5 = 3^4 \\times 3^1",
        graphData: null
      },
      {
        explanation: "Substitute \\(3^4 = 81\\).",
        workingOut: "81 \\times 3",
        graphData: null
      },
      {
        explanation: "Perform the final multiplication.",
        workingOut: "81 \\times 3 = 243",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q3a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Powers of numbers",
    question: "Evaluate:\n\\( 5^3 \\)",
    opts: [
      { text: "\\(15\\)", imageUrl: "" },
      { text: "\\(25\\)", imageUrl: "" },
      { text: "\\(125\\)", imageUrl: "" },
      { text: "\\(75\\)", imageUrl: "" }
    ],
    answer: 2,
    hint: "Multiply 5 by itself 3 times: \\( 5 \\times 5 \\times 5 \\).",
    solution: "Write the expression as repeated multiplication: \\( 5^3 = 5 \\times 5 \\times 5 \\). First compute \\(5 \\times 5 = 25\\), then multiply by 5 again: \\(25 \\times 5 = 125\\).",
    solutionSteps: [
      {
        explanation: "Write the power out in expanded multiplication form.",
        workingOut: "5^3 = 5 \\times 5 \\times 5",
        graphData: null
      },
      {
        explanation: "Multiply the first two factors.",
        workingOut: "5 \\times 5 = 25 \\implies 25 \\times 5",
        graphData: null
      },
      {
        explanation: "Perform the remaining multiplication.",
        workingOut: "25 \\times 5 = 125",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q3b",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Powers of numbers",
    question: "Evaluate:\n\\( 5^4 \\)",
    opts: [
      { text: "\\(625\\)", imageUrl: "" },
      { text: "\\(125\\)", imageUrl: "" },
      { text: "\\(20\\)", imageUrl: "" },
      { text: "\\(500\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Multiply \\(5^3 = 125\\) by 5.",
    solution: "We can determine \\(5^4\\) by taking the value of \\(5^3 = 125\\) and multiplying it by 5: \\(5^4 = 5^3 \\times 5 = 125 \\times 5 = 625\\).",
    solutionSteps: [
      {
        explanation: "Write the power using the preceding power.",
        workingOut: "5^4 = 5^3 \\times 5",
        graphData: null
      },
      {
        explanation: "Substitute \\(5^3 = 125\\).",
        workingOut: "125 \\times 5",
        graphData: null
      },
      {
        explanation: "Calculate the product.",
        workingOut: "125 \\times 5 = 625",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q3c",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Powers of numbers",
    question: "Evaluate:\n\\( 5^5 \\)",
    opts: [
      { text: "\\(25\\)", imageUrl: "" },
      { text: "\\(3125\\)", imageUrl: "" },
      { text: "\\(625\\)", imageUrl: "" },
      { text: "\\(15625\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Multiply \\(5^4 = 625\\) by 5.",
    solution: "We can find \\(5^5\\) by multiplying \\(5^4 = 625\\) by 5: \\(5^5 = 5^4 \\times 5 = 625 \\times 5 = 3125\\).",
    solutionSteps: [
      {
        explanation: "Relate \\(5^5\\) to \\(5^4\\).",
        workingOut: "5^5 = 5^4 \\times 5",
        graphData: null
      },
      {
        explanation: "Substitute the known value of \\(5^4\\).",
        workingOut: "625 \\times 5",
        graphData: null
      },
      {
        explanation: "Compute the final result.",
        workingOut: "625 \\times 5 = 3125",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q4a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Powers of numbers",
    question: "Rewrite the expression in index notation:\n\\( 4 \\times 4 \\times 4 \\times 4 \\times 4 \\)",
    opts: [
      { text: "\\(5^4\\)", imageUrl: "" },
      { text: "\\(4 \\times 5\\)", imageUrl: "" },
      { text: "\\(4^5\\)", imageUrl: "" },
      { text: "\\(4^6\\)", imageUrl: "" }
    ],
    answer: 2,
    hint: "The base is the number being multiplied. The index (exponent) is how many times it appears.",
    solution: "In the expression \\( 4 \\times 4 \\times 4 \\times 4 \\times 4 \\), the number being multiplied is 4, which is the base. It is multiplied by itself 5 times, which is the index (exponent). Therefore, the index notation is \\(4^5\\).",
    solutionSteps: [
      {
        explanation: "Identify the base (the repeated number).",
        workingOut: "\\text{Base} = 4",
        graphData: null
      },
      {
        explanation: "Count how many times the base is multiplied by itself.",
        workingOut: "\\text{Count} = 5 \\implies \\text{Exponent} = 5",
        graphData: null
      },
      {
        explanation: "Write the final expression in index form (base^exponent).",
        workingOut: "4^5",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q4b",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Powers of numbers",
    question: "Rewrite the expression in index notation:\n\\( 12 \\times 12 \\times 12 \\times 12 \\times 12 \\times 12 \\times 12 \\times 12 \\times 12 \\)",
    opts: [
      { text: "\\(12^9\\)", imageUrl: "" },
      { text: "\\(9^{12}\\)", imageUrl: "" },
      { text: "\\(12 \\times 9\\)", imageUrl: "" },
      { text: "\\(12^8\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Identify the base number 12 and count how many times it is repeated in the product.",
    solution: "The base is 12. Counting the number of times 12 is multiplied, we find it appears 9 times. So, the exponent is 9. In index notation, this is written as \\(12^9\\).",
    solutionSteps: [
      {
        explanation: "Identify the base.",
        workingOut: "\\text{Base} = 12",
        graphData: null
      },
      {
        explanation: "Count the number of factors.",
        workingOut: "\\text{Number of factors} = 9 \\implies \\text{Exponent} = 9",
        graphData: null
      },
      {
        explanation: "Write using index notation.",
        workingOut: "12^9",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q4c",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Powers of numbers",
    question: "Rewrite the expression in index notation:\n\\( 5 \\times 5 \\times 6 \\times 6 \\times 6 \\)",
    opts: [
      { text: "\\((5 \\times 6)^5\\)", imageUrl: "" },
      { text: "\\(5^2 \\times 6^3\\)", imageUrl: "" },
      { text: "\\(5^3 \\times 6^2\\)", imageUrl: "" },
      { text: "\\(2^5 \\times 3^6\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Group matching bases (5s and 6s) separately, count them, and write each group in index form.",
    solution: "Group the terms by base:\n- The base 5 is multiplied 2 times, giving \\(5^2\\).\n- The base 6 is multiplied 3 times, giving \\(6^3\\).\nCombining them with multiplication gives \\(5^2 \\times 6^3\\) (often written as \\(5^2 * 6^3\\)).",
    solutionSteps: [
      {
        explanation: "Group identical bases together.",
        workingOut: "(5 \\times 5) \\times (6 \\times 6 \\times 6)",
        graphData: null
      },
      {
        explanation: "Convert each group to index notation.",
        workingOut: "5 \\text{ appears 2 times} \\implies 5^2, \\quad 6 \\text{ appears 3 times} \\implies 6^3",
        graphData: null
      },
      {
        explanation: "Multiply the parts together.",
        workingOut: "5^2 \\times 6^3",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q4d",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Powers of numbers",
    question: "Rewrite the expression in index notation:\n\\( 7 \\times 7 \\times 7 \\times 11 \\times 11 \\times 11 \\times 11 \\)",
    opts: [
      { text: "\\(7^3 \\times 11^4\\)", imageUrl: "" },
      { text: "\\(7^4 \\times 11^3\\)", imageUrl: "" },
      { text: "\\((7 \\times 11)^7\\)", imageUrl: "" },
      { text: "\\(7^3 + 11^4\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Count the number of 7s and the number of 11s separately.",
    solution: "We count the factors of each base separately:\n- There are three 7s: \\(7 \\times 7 \\times 7 = 7^3\\).\n- There are four 11s: \\(11 \\times 11 \\times 11 \\times 11 = 11^4\\).\nThus, the index expression is \\(7^3 \\times 11^4\\).",
    solutionSteps: [
      {
        explanation: "Group the factors by base.",
        workingOut: "(7 \\times 7 \\times 7) \\times (11 \\times 11 \\times 11 \\times 11)",
        graphData: null
      },
      {
        explanation: "Determine the exponent for each base.",
        workingOut: "7^3 \\quad \\text{and} \\quad 11^4",
        graphData: null
      },
      {
        explanation: "Write the combined expression.",
        workingOut: "7^3 \\times 11^4",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q5a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Powers of numbers",
    question: "Fill in the missing index: \\( 2^2 \\times 2^3 = 2^{\\square} \\)",
    opts: [
      { text: "\\(6\\)", imageUrl: "" },
      { text: "\\(5\\)", imageUrl: "" },
      { text: "\\(8\\)", imageUrl: "" },
      { text: "\\(2.5\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Use the index law for multiplication: when multiplying terms with the same base, add their exponents.",
    solution: "According to the index law for multiplication (\\(a^m \\times a^n = a^{m+n}\\)), when multiplying powers of the same base, you add the exponents. Here, we add 2 and 3: \\(2^2 \\times 2^3 = 2^{2+3} = 2^5\\). The missing index is 5.",
    solutionSteps: [
      {
        explanation: "State the law of indices for multiplication.",
        workingOut: "a^m \\times a^n = a^{m+n}",
        graphData: null
      },
      {
        explanation: "Apply this rule by summing the exponents.",
        workingOut: "2 + 3 = 5",
        graphData: null
      },
      {
        explanation: "Write the simplified base and exponent.",
        workingOut: "2^5",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q5b",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Powers of numbers",
    question: "Fill in the missing index: \\( 6^5 \\times 6^3 = 6^{\\square} \\)",
    opts: [
      { text: "\\(15\\)", imageUrl: "" },
      { text: "\\(2\\)", imageUrl: "" },
      { text: "\\(8\\)", imageUrl: "" },
      { text: "\\(11\\)", imageUrl: "" }
    ],
    answer: 2,
    hint: "Add the exponents 5 and 3 together because the bases are the same.",
    solution: "Since the bases are both 6, we apply the index law of multiplication and add the exponents: \\(5 + 3 = 8\\). Thus, \\(6^5 \\times 6^3 = 6^{5+3} = 6^8\\). The missing index is 8.",
    solutionSteps: [
      {
        explanation: "Identify the base and exponents.",
        workingOut: "\\text{Base} = 6, \\quad \\text{Exponents} = 5 \\text{ and } 3",
        graphData: null
      },
      {
        explanation: "Add the exponents.",
        workingOut: "5 + 3 = 8",
        graphData: null
      },
      {
        explanation: "Express the final index form.",
        workingOut: "6^8",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q5e",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Powers of numbers",
    question: "Fill in the missing index: \\( 7^6 \\times 7 = 7^{\\square} \\)",
    opts: [
      { text: "\\(6\\)", imageUrl: "" },
      { text: "\\(7\\)", imageUrl: "" },
      { text: "\\(13\\)", imageUrl: "" },
      { text: "\\(42\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Remember that any number without a written exponent is implicitly raised to the power of 1, so \\(7 = 7^1\\).",
    solution: "The expression is \\( 7^6 \\times 7 \\). Write 7 as \\(7^1\\). Applying the multiplication index law: \\(7^6 \\times 7^1 = 7^{6+1} = 7^7\\). The missing index is 7.",
    solutionSteps: [
      {
        explanation: "Rewrite the term 7 with an explicit exponent of 1.",
        workingOut: "7 = 7^1",
        graphData: null
      },
      {
        explanation: "Add the exponents using the index law.",
        workingOut: "6 + 1 = 7",
        graphData: null
      },
      {
        explanation: "Conclude the final power.",
        workingOut: "7^7",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q5g",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Powers of numbers",
    question: "Fill in the missing index: \\( 5^4 \\times 5^4 \\times 5^4 = 5^{\\square} \\)",
    opts: [
      { text: "\\(12\\)", imageUrl: "" },
      { text: "\\(64\\)", imageUrl: "" },
      { text: "\\(16\\)", imageUrl: "" },
      { text: "\\(8\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Add the exponents of all three terms together: \\(4 + 4 + 4\\).",
    solution: "When multiplying multiple powers with the same base, you add all their exponents: \\(5^4 \\times 5^4 \\times 5^4 = 5^{4+4+4} = 5^{12}\\). The missing index is 12.",
    solutionSteps: [
      {
        explanation: "Apply the index law of multiplication to the three bases.",
        workingOut: "5^4 \\times 5^4 \\times 5^4 = 5^{4 + 4 + 4}",
        graphData: null
      },
      {
        explanation: "Add the exponents.",
        workingOut: "4 + 4 + 4 = 12",
        graphData: null
      },
      {
        explanation: "Conclude the final index.",
        workingOut: "5^{12}",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q5i",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Powers of numbers",
    question: "Fill in the missing index: \\( 12 \\times 12^{20} \\times 12 \\times 12^2 = 12^{\\square} \\)",
    opts: [
      { text: "\\(22\\)", imageUrl: "" },
      { text: "\\(23\\)", imageUrl: "" },
      { text: "\\(24\\)", imageUrl: "" },
      { text: "\\(25\\)", imageUrl: "" }
    ],
    answer: 2,
    hint: "Write every term with an explicit exponent. A term like 12 is written as \\(12^1\\). Then add all exponents.",
    solution: "First, rewrite the expression making all exponents visible: \\( 12^1 \\times 12^{20} \\times 12^1 \\times 12^2 \\). Add the exponents: \\(1 + 20 + 1 + 2 = 24\\). Thus, the expression simplifies to \\(12^{24}\\). The missing index is 24.",
    solutionSteps: [
      {
        explanation: "Write the numbers 12 as \\(12^1\\).",
        workingOut: "12^1 \\times 12^{20} \\times 12^1 \\times 12^2",
        graphData: null
      },
      {
        explanation: "Sum the exponents of all terms.",
        workingOut: "1 + 20 + 1 + 2 = 24",
        graphData: null
      },
      {
        explanation: "State the final expression.",
        workingOut: "12^{24}",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q6a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Powers of numbers",
    question: "Find the missing index to make the statement true: \\( 2^3 \\times 2^{\\square} = 2^8 \\)",
    opts: [
      { text: "\\(5\\)", imageUrl: "" },
      { text: "\\(4\\)", imageUrl: "" },
      { text: "\\(2.6\\)", imageUrl: "" },
      { text: "\\(11\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Since bases are matching, we use addition: \\(3 + \\text{missing index} = 8\\). What number fills the blank?",
    solution: "Applying the index law for multiplication: \\(2^3 \\times 2^x = 2^{3+x}\\). We are given that this equals \\(2^8\\). Therefore, \\(3 + x = 8\\). Subtract 3 from both sides: \\(x = 8 - 3 = 5\\). The missing index is 5.",
    solutionSteps: [
      {
        explanation: "State the algebraic equation based on the index law.",
        workingOut: "3 + x = 8",
        graphData: null
      },
      {
        explanation: "Solve for the unknown variable x.",
        workingOut: "x = 8 - 3 = 5",
        graphData: null
      },
      {
        explanation: "Substitute back to verify.",
        workingOut: "2^3 \\times 2^5 = 2^{3+5} = 2^8 \\quad (\\text{Correct})",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q6b",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Powers of numbers",
    question: "Find the missing index: \\( 3 \\times 3^{\\square} = 3^{10} \\)",
    opts: [
      { text: "\\(10\\)", imageUrl: "" },
      { text: "\\(9\\)", imageUrl: "" },
      { text: "\\(8\\)", imageUrl: "" },
      { text: "\\(7\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Remember that the first 3 is \\(3^1\\). Solve the equation: \\(1 + x = 10\\).",
    solution: "Recall that \\(3 = 3^1\\). So, the equation becomes \\(3^1 \\times 3^x = 3^{1+x} = 3^{10}\\). Comparing the exponents gives \\(1 + x = 10\\). Solving for \\(x\\): \\(x = 10 - 1 = 9\\). The missing index is 9.",
    solutionSteps: [
      {
        explanation: "Express the base 3 as \\(3^1\\).",
        workingOut: "3^1 \\times 3^x = 3^{10}",
        graphData: null
      },
      {
        explanation: "Set up the equation for the exponents.",
        workingOut: "1 + x = 10",
        graphData: null
      },
      {
        explanation: "Solve for x.",
        workingOut: "x = 10 - 1 = 9",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q6c",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Powers of numbers",
    question: "Find the missing index: \\( 7^{\\square} \\times 7^2 = 7^6 \\)",
    opts: [
      { text: "\\(3\\)", imageUrl: "" },
      { text: "\\(4\\)", imageUrl: "" },
      { text: "\\(8\\)", imageUrl: "" },
      { text: "\\(12\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Solve the equation: \\(\\square + 2 = 6\\). What number added to 2 equals 6?",
    solution: "Using the law of multiplication of exponents: \\(7^x \\times 7^2 = 7^{x+2} = 7^6\\). By equating the exponents, we get: \\(x + 2 = 6\\). Subtracting 2 from both sides gives: \\(x = 6 - 2 = 4\\). The missing index is 4.",
    solutionSteps: [
      {
        explanation: "Set up the exponent sum equation.",
        workingOut: "x + 2 = 6",
        graphData: null
      },
      {
        explanation: "Solve for the unknown exponent x.",
        workingOut: "x = 6 - 2 = 4",
        graphData: null
      },
      {
        explanation: "Verify the result.",
        workingOut: "7^4 \\times 7^2 = 7^{4+2} = 7^6",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q6e",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Powers of numbers",
    question: "Find the missing index: \\( 2^{\\square} \\times 2^2 \\times 2^2 = 2^6 \\)",
    opts: [
      { text: "\\(1\\)", imageUrl: "" },
      { text: "\\(2\\)", imageUrl: "" },
      { text: "\\(3\\)", imageUrl: "" },
      { text: "\\(4\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Add the known exponents first: \\(2^2 \\times 2^2 = 2^4\\). Then solve: \\(\\square + 4 = 6\\).",
    solution: "The equation is \\(2^x \\times 2^2 \\times 2^2 = 2^6\\). Simplify the known part first: \\(2^2 \\times 2^2 = 2^{2+2} = 2^4\\). Now the equation is \\(2^x \\times 2^4 = 2^{x+4} = 2^6\\). Comparing exponents: \\(x + 4 = 6 \\implies x = 2\\). The missing index is 2.",
    solutionSteps: [
      {
        explanation: "Add the exponents of the known terms on the left.",
        workingOut: "2^2 \\times 2^2 = 2^4",
        graphData: null
      },
      {
        explanation: "Write the equation with the simplified term.",
        workingOut: "2^x \\times 2^4 = 2^6 \\implies x + 4 = 6",
        graphData: null
      },
      {
        explanation: "Solve for x.",
        workingOut: "x = 6 - 4 = 2",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q6f",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Powers of numbers",
    question: "Find the missing index: \\( 6 \\times 6 \\times 6^{\\square} = 6^5 \\)",
    opts: [
      { text: "\\(3\\)", imageUrl: "" },
      { text: "\\(4\\)", imageUrl: "" },
      { text: "\\(2\\)", imageUrl: "" },
      { text: "\\(1\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Recall that \\(6 \\times 6 = 6^1 \\times 6^1 = 6^2\\). Solve: \\(2 + \\square = 5\\).",
    solution: "Write the visible coefficients as powers: \\(6^1 \\times 6^1 \\times 6^x = 6^{1+1+x} = 6^{2+x} = 6^5\\). Comparing exponents gives \\(2 + x = 5\\). Solve for \\(x\\): \\(x = 5 - 2 = 3\\). The missing index is 3.",
    solutionSteps: [
      {
        explanation: "Rewrite all simple factors with their implicit exponent of 1.",
        workingOut: "6^1 \\times 6^1 \\times 6^x = 6^5",
        graphData: null
      },
      {
        explanation: "Add the exponents to set up the equation.",
        workingOut: "1 + 1 + x = 5 \\implies 2 + x = 5",
        graphData: null
      },
      {
        explanation: "Solve for the missing index x.",
        workingOut: "x = 5 - 2 = 3",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q7a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Powers of numbers",
    question: "Rewrite the expression in index notation:\n\\( 3 \\times 3 \\times 5 \\times 5 \\)",
    opts: [
      { text: "\\(3^2 \\times 5^2\\)", imageUrl: "" },
      { text: "\\(3^3 \\times 5^2\\)", imageUrl: "" },
      { text: "\\((3 \\times 5)^4\\)", imageUrl: "" },
      { text: "\\(2^3 \\times 2^5\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Count how many times 3 appears and how many times 5 appears, then convert each to a power.",
    solution: "First, group identical factors:\n- 3 appears 2 times, which is \\(3^2\\).\n- 5 appears 2 times, which is \\(5^2\\).\nMultiply the parts together to get \\(3^2 \\times 5^2\\).",
    solutionSteps: [
      {
        explanation: "Identify and count separate base factors.",
        workingOut: "3 \\text{ appears 2 times}, \\quad 5 \\text{ appears 2 times}",
        graphData: null
      },
      {
        explanation: "Convert each count to an exponent.",
        workingOut: "3^2 \\quad \\text{and} \\quad 5^2",
        graphData: null
      },
      {
        explanation: "Write the final combined expression.",
        workingOut: "3^2 \\times 5^2",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q7b",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Powers of numbers",
    question: "Rewrite the expression in index notation:\n\\( 6^2 \\times 6 \\times 7^3 \\times 7 \\)",
    opts: [
      { text: "\\(6^2 \\times 7^3\\)", imageUrl: "" },
      { text: "\\(6^3 \\times 7^4\\)", imageUrl: "" },
      { text: "\\(6^3 \\times 7^3\\)", imageUrl: "" },
      { text: "\\((6 \\times 7)^7\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Recall that \\(6 = 6^1\\) and \\(7 = 7^1\\). Combine matching bases by adding their exponents.",
    solution: "Write out the implicit powers first: \\( 6^2 \\times 6^1 \\times 7^3 \\times 7^1 \\). Group by base:\n- For base 6: \\(6^2 \\times 6^1 = 6^{2+1} = 6^3\\).\n- For base 7: \\(7^3 \\times 7^1 = 7^{3+1} = 7^4\\).\nCombine them to get \\(6^3 \\times 7^4\\).",
    solutionSteps: [
      {
        explanation: "Rewrite with explicit exponents of 1.",
        workingOut: "6^2 \\times 6^1 \\times 7^3 \\times 7^1",
        graphData: null
      },
      {
        explanation: "Apply the index law of multiplication to each base group.",
        workingOut: "6^{2+1} = 6^3 \\quad \\text{and} \\quad 7^{3+1} = 7^4",
        graphData: null
      },
      {
        explanation: "Combine into the final expression.",
        workingOut: "6^3 \\times 7^4",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q7c",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Powers of numbers",
    question: "Rewrite the expression in index notation:\n\\( 2 \\times 2 \\times 2 \\times 2^2 \\times 3 \\times 3 \\times 3^3 \\)",
    opts: [
      { text: "\\(2^5 \\times 3^5\\)", imageUrl: "" },
      { text: "\\(2^4 \\times 3^5\\)", imageUrl: "" },
      { text: "\\(2^6 \\times 3^5\\)", imageUrl: "" },
      { text: "\\(2^5 \\times 3^4\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Combine all base 2 terms first (count the exponents), then combine all base 3 terms.",
    solution: "Group the factors by base:\n- For base 2: \\( 2^1 \\times 2^1 \\times 2^1 \\times 2^2 = 2^{1+1+1+2} = 2^5 \\).\n- For base 3: \\( 3^1 \\times 3^1 \\times 3^3 = 3^{1+1+3} = 3^5 \\).\nMultiplying them together gives \\(2^5 \\times 3^5\\).",
    solutionSteps: [
      {
        explanation: "Group terms with identical bases together.",
        workingOut: "(2^1 \\times 2^1 \\times 2^1 \\times 2^2) \\times (3^1 \\times 3^1 \\times 3^3)",
        graphData: null
      },
      {
        explanation: "Add exponents for the base 2 group.",
        workingOut: "2^{1+1+1+2} = 2^5",
        graphData: null
      },
      {
        explanation: "Add exponents for the base 3 group.",
        workingOut: "3^{1+1+3} = 3^5",
        graphData: null
      },
      {
        explanation: "Combine the simplified base groups.",
        workingOut: "2^5 \\times 3^5",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q7d",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Powers of numbers",
    question: "Rewrite the expression in index notation:\n\\( 2 \\times 3 \\times 2 \\times 3 \\times 2 \\times 3 \\)",
    opts: [
      { text: "\\(2^3 \\times 3^3\\)", imageUrl: "" },
      { text: "\\(2^3 + 3^3\\)", imageUrl: "" },
      { text: "\\((2 \\times 3)^6\\)", imageUrl: "" },
      { text: "\\(6^9\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Rearrange the numbers so that all 2s are together and all 3s are together.",
    solution: "Regroup the factors to put identical bases next to each other: \\( (2 \\times 2 \\times 2) \\times (3 \\times 3 \\times 3) \\). Now convert each group to index notation:\n- Three 2s: \\(2^3\\)\n- Three 3s: \\(3^3\\)\nSo, the expression in index notation is \\(2^3 \\times 3^3\\).",
    solutionSteps: [
      {
        explanation: "Rearrange the factors so that identical numbers are grouped.",
        workingOut: "(2 \\times 2 \\times 2) \\times (3 \\times 3 \\times 3)",
        graphData: null
      },
      {
        explanation: "Count the factors in each group.",
        workingOut: "2 \\text{ appears 3 times}, \\quad 3 \\text{ appears 3 times}",
        graphData: null
      },
      {
        explanation: "Write using exponents.",
        workingOut: "2^3 \\times 3^3",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q7e",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Powers of numbers",
    question: "Rewrite the expression in index notation:\n\\( 2 \\times 5 \\times 7 \\times 5 \\times 7 \\times 7 \\)",
    opts: [
      { text: "\\(2 \\times 5^2 \\times 7^2\\)", imageUrl: "" },
      { text: "\\(2 \\times 5^2 \\times 7^3\\)", imageUrl: "" },
      { text: "\\(2 \\times 5^3 \\times 7^2\\)", imageUrl: "" },
      { text: "\\(2^1 \\times 5^1 \\times 7^1\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Group matching numbers (2s, 5s, 7s) and write their powers. Remember 2 appears once.",
    solution: "Rearrange and group identical numbers:\n- Base 2 occurs 1 time: \\(2\\) (or \\(2^1\\))\n- Base 5 occurs 2 times: \\(5 \\times 5 = 5^2\\)\n- Base 7 occurs 3 times: \\(7 \\times 7 \\times 7 = 7^3\\)\nCombine these factors: \\(2 \\times 5^2 \\times 7^3\\).",
    solutionSteps: [
      {
        explanation: "Regroup the factors by matching bases.",
        workingOut: "2 \\times (5 \\times 5) \\times (7 \\times 7 \\times 7)",
        graphData: null
      },
      {
        explanation: "Write the count of each base as an exponent.",
        workingOut: "2^1 \\times 5^2 \\times 7^3",
        graphData: null
      },
      {
        explanation: "Simplify by writing \\(2^1\\) as 2.",
        workingOut: "2 \\times 5^2 \\times 7^3",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q7f",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Powers of numbers",
    question: "Rewrite the expression in index notation:\n\\( 3^2 \\times 7^2 \\times 3 \\times 7^3 \\)",
    opts: [
      { text: "\\(3^3 \\times 7^5\\)", imageUrl: "" },
      { text: "\\(3^2 \\times 7^5\\)", imageUrl: "" },
      { text: "\\((3 \\times 7)^5\\)", imageUrl: "" },
      { text: "\\(3^3 \\times 7^6\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Rewrite 3 as \\(3^1\\). Combine exponents for base 3, and then for base 7.",
    solution: "Rearrange the terms: \\( (3^2 \\times 3^1) \\times (7^2 \\times 7^3) \\). Apply the index law:\n- For base 3: \\(3^2 \\times 3^1 = 3^{2+1} = 3^3\\).\n- For base 7: \\(7^2 \\times 7^3 = 7^{2+3} = 7^5\\).\nMultiply the parts to get \\(3^3 \\times 7^5\\).",
    solutionSteps: [
      {
        explanation: "Group the factors by identical bases.",
        workingOut: "(3^2 \\times 3^1) \\times (7^2 \\times 7^3)",
        graphData: null
      },
      {
        explanation: "Add exponents for base 3.",
        workingOut: "3^{2+1} = 3^3",
        graphData: null
      },
      {
        explanation: "Add exponents for base 7.",
        workingOut: "7^{2+3} = 7^5",
        graphData: null
      },
      {
        explanation: "Multiply the simplified terms together.",
        workingOut: "3^3 \\times 7^5",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q8a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Powers of numbers",
    question: "Evaluate:\n\\( 6^2 \\times 6 \\)",
    opts: [
      { text: "\\(36\\)", imageUrl: "" },
      { text: "\\(72\\)", imageUrl: "" },
      { text: "\\(216\\)", imageUrl: "" },
      { text: "\\(180\\)", imageUrl: "" }
    ],
    answer: 2,
    hint: "This expression simplifies to \\(6^3\\). Multiply 6 by itself 3 times.",
    solution: "First simplify using the index law: \\(6^2 \\times 6^1 = 6^3\\). Now evaluate \\(6^3 = 6 \\times 6 \\times 6\\). We know \\(6 \\times 6 = 36\\). Finally, compute \\(36 \\times 6 = 216\\).",
    solutionSteps: [
      {
        explanation: "Simplify the expression by adding exponents.",
        workingOut: "6^2 \\times 6^1 = 6^3",
        graphData: null
      },
      {
        explanation: "Expand the power into repeated multiplication.",
        workingOut: "6 \\times 6 \\times 6",
        graphData: null
      },
      {
        explanation: "Perform the multiplication.",
        workingOut: "36 \\times 6 = 216",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q8c",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Powers of numbers",
    question: "Evaluate:\n\\( 2^3 \\times 2 \\)",
    opts: [
      { text: "\\(16\\)", imageUrl: "" },
      { text: "\\(12\\)", imageUrl: "" },
      { text: "\\(8\\)", imageUrl: "" },
      { text: "\\(32\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Simplify to \\(2^4\\) first, or calculate \\(2^3 = 8\\) and then multiply by 2.",
    solution: "Method 1: Evaluate \\(2^3 = 8\\). Then multiply by 2: \\(8 \\times 2 = 16\\).\nMethod 2: Simplify using indices: \\(2^3 \\times 2^1 = 2^4\\). Expand: \\(2 \\times 2 \\times 2 \\times 2 = 16\\).",
    solutionSteps: [
      {
        explanation: "Evaluate the power \\(2^3\\).",
        workingOut: "2^3 = 2 \\times 2 \\times 2 = 8",
        graphData: null
      },
      {
        explanation: "Multiply the result by the remaining factor 2.",
        workingOut: "8 \\times 2 = 16",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q8d",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Powers of numbers",
    question: "Evaluate:\n\\( 5^2 \\times 5^3 \\)",
    opts: [
      { text: "\\(250\\)", imageUrl: "" },
      { text: "\\(3125\\)", imageUrl: "" },
      { text: "\\(625\\)", imageUrl: "" },
      { text: "\\(125\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Using index laws, \\(5^2 \\times 5^3 = 5^5\\). Recall the value of \\(5^5\\).",
    solution: "Simplify using the index law of multiplication: \\(5^2 \\times 5^3 = 5^{2+3} = 5^5\\). Now evaluate \\(5^5\\) by multiplying 5 by itself 5 times: \\(5 \\times 5 \\times 5 \\times 5 \\times 5 = 3125\\).",
    solutionSteps: [
      {
        explanation: "Simplify the indices.",
        workingOut: "5^2 \\times 5^3 = 5^5",
        graphData: null
      },
      {
        explanation: "Expand and calculate.",
        workingOut: "5^5 = 3125",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q8f",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Powers of numbers",
    question: "Evaluate:\n\\( 7^2 \\times 7^3 \\)",
    opts: [
      { text: "\\(2401\\)", imageUrl: "" },
      { text: "\\(16807\\)", imageUrl: "" },
      { text: "\\(343\\)", imageUrl: "" },
      { text: "\\(117649\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "This is equivalent to \\(7^5\\). Multiply 7 by itself 5 times.",
    solution: "Use the index law of multiplication: \\(7^2 \\times 7^3 = 7^{2+3} = 7^5\\). Evaluate \\(7^5\\):\n\\(7 \\times 7 \\times 7 \\times 7 \\times 7 = 16807\\).",
    solutionSteps: [
      {
        explanation: "Simplify exponents.",
        workingOut: "7^2 \\times 7^3 = 7^5",
        graphData: null
      },
      {
        explanation: "Calculate \\(7^5\\).",
        workingOut: "7^5 = 16807",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q9a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Powers of numbers",
    question: "Evaluate:\n\\( 3^2 \\times 2 \\)",
    opts: [
      { text: "\\(12\\)", imageUrl: "" },
      { text: "\\(18\\)", imageUrl: "" },
      { text: "\\(36\\)", imageUrl: "" },
      { text: "\\(9\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Always evaluate the power first before performing multiplication. Calculate \\(3^2\\) first.",
    solution: "Following the order of operations (BODMAS/BIDMAS), evaluate the power first:\n\\(3^2 = 3 \\times 3 = 9\\).\nThen multiply by 2:\n\\(9 \\times 2 = 18\\).",
    solutionSteps: [
      {
        explanation: "Evaluate the exponent first.",
        workingOut: "3^2 = 9",
        graphData: null
      },
      {
        explanation: "Multiply the result by 2.",
        workingOut: "9 \\times 2 = 18",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q9b",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Powers of numbers",
    question: "Evaluate:\n\\( (3 \\times 2)^2 \\)",
    opts: [
      { text: "\\(12\\)", imageUrl: "" },
      { text: "\\(18\\)", imageUrl: "" },
      { text: "\\(36\\)", imageUrl: "" },
      { text: "\\(24\\)", imageUrl: "" }
    ],
    answer: 2,
    hint: "Perform the operation inside the bracket first, then square the result.",
    solution: "Following the order of operations, evaluate inside the brackets first:\n\\(3 \\times 2 = 6\\).\nNow square the result:\n\\(6^2 = 6 \\times 6 = 36\\).",
    solutionSteps: [
      {
        explanation: "Solve the operation inside the brackets.",
        workingOut: "3 \\times 2 = 6",
        graphData: null
      },
      {
        explanation: "Square the number obtained.",
        workingOut: "6^2 = 36",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q9c",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Powers of numbers",
    question: "Evaluate:\n\\( 4 \\times 5^2 \\)",
    opts: [
      { text: "\\(400\\)", imageUrl: "" },
      { text: "\\(100\\)", imageUrl: "" },
      { text: "\\(80\\)", imageUrl: "" },
      { text: "\\(40\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Calculate \\(5^2\\) first, then multiply by 4.",
    solution: "Following the order of operations, evaluate the exponent first:\n\\(5^2 = 25\\).\nNow multiply by 4:\n\\(4 \\times 25 = 100\\).",
    solutionSteps: [
      {
        explanation: "Evaluate the power.",
        workingOut: "5^2 = 25",
        graphData: null
      },
      {
        explanation: "Multiply the result by 4.",
        workingOut: "4 \\times 25 = 100",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q9d",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Powers of numbers",
    question: "Evaluate:\n\\( (4 \\times 5)^2 \\)",
    opts: [
      { text: "\\(100\\)", imageUrl: "" },
      { text: "\\(80\\)", imageUrl: "" },
      { text: "\\(400\\)", imageUrl: "" },
      { text: "\\(1600\\)", imageUrl: "" }
    ],
    answer: 2,
    hint: "Calculate inside the brackets first, then square that result.",
    solution: "First, perform the multiplication inside the brackets:\n\\(4 \\times 5 = 20\\).\nNext, raise the result to the power of 2:\n\\(20^2 = 20 \\times 20 = 400\\).",
    solutionSteps: [
      {
        explanation: "Perform the operation inside the brackets.",
        workingOut: "4 \\times 5 = 20",
        graphData: null
      },
      {
        explanation: "Square the result.",
        workingOut: "20^2 = 400",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q9g",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "Evaluate:\n\\( (3 \\times 10^3) \\times (2 \\times 10^2) \\)",
    hint: "Group the numeric parts and the powers of 10 parts.",
    solutionSteps: [
      {
        explanation: "Regroup the factors.",
        workingOut: "(3 \\times 2) \\times (10^3 \\times 10^2)",
        graphData: null
      },
      {
        explanation: "Simplify the calculation.",
        workingOut: "6 \\times 10^5 = 600,000",
        graphData: null
      }
    ],
    options: [
      {
        text: "60,000",
        imageUrl: ""
      },
      {
        text: "600,000",
        imageUrl: ""
      },
      {
        text: "6,000,000",
        imageUrl: ""
      },
      {
        text: "600",
        imageUrl: ""
      }
    ],
    answer: 1
  },
  {
    id: "y7-2d-q9h",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "Evaluate:\n\\( (4 \\times 10^2) \\times (7 \\times 10^5) \\)",
    hint: "Group the numbers and powers of 10.",
    solutionSteps: [
      {
        explanation: "Regroup factors.",
        workingOut: "(4 \\times 7) \\times (10^2 \\times 10^5)",
        graphData: null
      },
      {
        explanation: "Simplify.",
        workingOut: "28 \\times 10^7 = 280,000,000",
        graphData: null
      },
      {
        explanation: "Wait, let's verify: 10^7 is 10 million. 28 * 10 million = 280 million. Correct option is 280,000,000.",
        workingOut: "280,000,000",
        graphData: null
      }
    ],
    options: [
      {
        text: "2,800,000,000",
        imageUrl: ""
      },
      {
        text: "28,000,000",
        imageUrl: ""
      },
      {
        text: "280,000,000",
        imageUrl: ""
      },
      {
        text: "280,000",
        imageUrl: ""
      }
    ],
    answer: 2
  },
  {
    id: "y7-2d-q10a",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Powers of numbers",
    question: "How many zeros are there in the number \\( 10^{10} \\times 10^{20} \\times 10^{30} \\)?",
    opts: [
      { text: "\\(30\\)", imageUrl: "" },
      { text: "\\(60\\)", imageUrl: "" },
      { text: "\\(50\\)", imageUrl: "" },
      { text: "\\(10\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Use the multiplication index law to find the combined power of 10. The exponent will represent the number of zeros.",
    solution: "First, combine the terms using the index law for multiplication: \\(10^{10} \\times 10^{20} \\times 10^{30} = 10^{10 + 20 + 30} = 10^{60}\\). A base of 10 raised to a power \\(N\\) yields a number with exactly \\(N\\) zeros. Therefore, there are 60 zeros.",
    solutionSteps: [
      {
        explanation: "Apply the index law of multiplication to combine the bases of 10.",
        workingOut: "10^{10} \\times 10^{20} \\times 10^{30} = 10^{10 + 20 + 30}",
        graphData: null
      },
      {
        explanation: "Calculate the sum in the exponent.",
        workingOut: "10 + 20 + 30 = 60 \\implies 10^{60}",
        graphData: null
      },
      {
        explanation: "Explain how the exponent relates to the number of zeros.",
        workingOut: "10^N \\text{ has } N \\text{ zeros } \\implies 10^{60} \\text{ has 60 zeros}",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q10b",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Powers of numbers",
    question: "How many zeros are there in the number \\( (2 \\times 10^5) \\times (3 \\times 10^6) \\times (7 \\times 10^7) \\)?",
    opts: [
      { text: "\\(18\\)", imageUrl: "" },
      { text: "\\(19\\)", imageUrl: "" },
      { text: "\\(17\\)", imageUrl: "" },
      { text: "\\(210\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Multiply the numbers (2, 3, 7) first, and then combine the powers of 10. Check if the product of the numbers adds any additional zeros.",
    solution: "Group coefficients and powers of 10: \\( (2 \\times 3 \\times 7) \\times (10^5 \\times 10^6 \\times 10^7) \\).\n- Compute coefficients: \\(2 \\times 3 \\times 7 = 42\\).\n- Combine powers of 10: \\(10^5 \\times 10^6 \\times 10^7 = 10^{5+6+7} = 10^{18}\\).\nThe final number is \\(42 \\times 10^{18}\\). Since 42 does not end in 0, multiplying it by \\(10^{18}\\) gives exactly 18 zeros.",
    solutionSteps: [
      {
        explanation: "Regroup the numeric factors and the exponential factors.",
        workingOut: "(2 \\times 3 \\times 7) \\times (10^5 \\times 10^6 \\times 10^7)",
        graphData: null
      },
      {
        explanation: "Multiply the numeric constants.",
        workingOut: "2 \\times 3 \\times 7 = 42",
        graphData: null
      },
      {
        explanation: "Combine the exponents of 10.",
        workingOut: "10^{5 + 6 + 7} = 10^{18}",
        graphData: null
      },
      {
        explanation: "Combine both results and count the zeros.",
        workingOut: "42 \\times 10^{18} \\implies 18 \\text{ zeros}",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2d-q11",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Powers of numbers",
    question: "Given that \\( 2^{10} = 1024 \\), find the value of \\( 2^{20} \\).",
    opts: [
      { text: "\\(2048\\)", imageUrl: "" },
      { text: "\\(1,048,576\\)", imageUrl: "" },
      { text: "\\(1,024,000\\)", imageUrl: "" },
      { text: "\\(10,485,760\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Note that \\( 2^{20} = 2^{10} \\times 2^{10} \\). Multiply 1024 by 1024.",
    solution: "Using exponent properties, we can split the power: \\(2^{20} = 2^{10+10} = 2^{10} \\times 2^{10}\\). Since we are given that \\(2^{10} = 1024\\), we substitute this in:\n\\(2^{20} = 1024 \\times 1024 = 1,048,576\\).",
    solutionSteps: [
      {
        explanation: "Express \\(2^{20}\\) as a product of two \\(2^{10}\\) factors using the index law.",
        workingOut: "2^{20} = 2^{10} \\times 2^{10}",
        graphData: null
      },
      {
        explanation: "Substitute the given value \\(2^{10} = 1024\\) into the equation.",
        workingOut: "1024 \\times 1024",
        graphData: null
      },
      {
        explanation: "Calculate the product.",
        workingOut: "1024 \\times 1024 = 1,048,576",
        graphData: null
      }
    ]
  }
];
