export const Y7_CH2I_QUESTIONS = [
  {
    id: "y7-2i-q1a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Divisibility tests",
    question: "Is 536 divisible by 2?",
    opts: [
      { text: "Yes", imageUrl: "" },
      { text: "No", imageUrl: "" }
    ],
    answer: 0,
    hint: "A number is divisible by 2 if its last digit is even (0, 2, 4, 6, or 8). Check the last digit of 536.",
    solution: "The last digit of 536 is 6, which is even. Therefore, 536 is divisible by 2.",
    solutionSteps: [
      {
        explanation: "Check the last digit of the number.",
        workingOut: "\\text{Last digit of } 536 \\text{ is } 6",
        graphData: null
      },
      {
        explanation: "Verify if the last digit is even.",
        workingOut: "6 \\text{ is even} \\implies \\text{divisible by } 2",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2i-q1b",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Divisibility tests",
    question: "Is 22253 divisible by 2?",
    opts: [
      { text: "Yes", imageUrl: "" },
      { text: "No", imageUrl: "" }
    ],
    answer: 1,
    hint: "Look at the last digit of 22253. Is it even or odd?",
    solution: "The last digit of 22253 is 3. Since 3 is an odd number, the entire number is not divisible by 2.",
    solutionSteps: [
      {
        explanation: "Inspect the last digit of 22253.",
        workingOut: "\\text{Last digit} = 3",
        graphData: null
      },
      {
        explanation: "Determine if it is odd or even.",
        workingOut: "3 \\text{ is odd} \\implies \\text{not divisible by } 2",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2i-q2a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Divisibility tests",
    question: "Is 72 divisible by 4?",
    opts: [
      { text: "Yes", imageUrl: "" },
      { text: "No", imageUrl: "" }
    ],
    answer: 0,
    hint: "A number is divisible by 4 if the number formed by its last two digits is divisible by 4. For 72, check \\(72 \\div 4\\).",
    solution: "A number is divisible by 4 if its last two digits form a multiple of 4. For the number 72, the last two digits form 72 itself. Dividing 72 by 4: \\(72 \\div 4 = 18\\). Since it divides exactly, the answer is Yes.",
    solutionSteps: [
      {
        explanation: "Extract the last two digits.",
        workingOut: "\\text{Last two digits} = 72",
        graphData: null
      },
      {
        explanation: "Divide the two-digit number by 4.",
        workingOut: "72 \\div 4 = 18 \\quad (\\text{exact quotient}) \\implies \\text{divisible by } 4",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2i-q2c",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Divisibility tests",
    question: "Is 682 divisible by 4?",
    opts: [
      { text: "Yes", imageUrl: "" },
      { text: "No", imageUrl: "" }
    ],
    answer: 1,
    hint: "Check the last two digits of 682, which form the number 82. Is 82 divisible by 4?",
    solution: "Check the last two digits of 682, which are 82. Divide 82 by 4: \\(82 \\div 4 = 20.5\\). Since it does not divide exactly, 682 is not divisible by 4.",
    solutionSteps: [
      {
        explanation: "Extract the last two digits of 682.",
        workingOut: "\\text{Last two digits} = 82",
        graphData: null
      },
      {
        explanation: "Divide 82 by 4 and check for a remainder.",
        workingOut: "82 \\div 4 = 20.5 \\quad (\\text{not an integer}) \\implies \\text{not divisible}",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2i-q2e",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Divisibility tests",
    question: "Is 387232 divisible by 4?",
    opts: [
      { text: "Yes", imageUrl: "" },
      { text: "No", imageUrl: "" }
    ],
    answer: 0,
    hint: "Look at the last two digits: 32. Is 32 in the 4 times table?",
    solution: "The last two digits of 387232 form 32. Since \\(32 \\div 4 = 8\\) is a whole number, the entire number 387232 is divisible by 4.",
    solutionSteps: [
      {
        explanation: "Identify the last two digits.",
        workingOut: "\\text{Last two digits} = 32",
        graphData: null
      },
      {
        explanation: "Check if 32 is divisible by 4.",
        workingOut: "32 \\div 4 = 8 \\implies \\text{divisible}",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2i-q3b",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Divisibility tests",
    question: "Is 1128 divisible by 8?",
    opts: [
      { text: "Yes", imageUrl: "" },
      { text: "No", imageUrl: "" }
    ],
    answer: 0,
    hint: "A number is divisible by 8 if its last three digits form a number divisible by 8. Check \\(128 \\div 8\\).",
    solution: "Check the last three digits of 1128, which are 128. Dividing 128 by 8: \\(128 \\div 8 = 16\\). Since it divides exactly, the entire number 1128 is divisible by 8.",
    solutionSteps: [
      {
        explanation: "Isolate the last three digits.",
        workingOut: "\\text{Last three digits} = 128",
        graphData: null
      },
      {
        explanation: "Divide this value by 8.",
        workingOut: "128 \\div 8 = 16 \\implies \\text{divisible}",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2i-q3d",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Divisibility tests",
    question: "Is 22500 divisible by 8?",
    opts: [
      { text: "Yes", imageUrl: "" },
      { text: "No", imageUrl: "" }
    ],
    answer: 1,
    hint: "Check the last three digits: 500. Divide 500 by 8 to see if it leaves a remainder.",
    solution: "Check the last three digits, which are 500. Dividing by 8: \\(500 \\div 8 = 62.5\\). Since it does not divide exactly, 22500 is not divisible by 8.",
    solutionSteps: [
      {
        explanation: "Check the last three digits.",
        workingOut: "\\text{Last three digits} = 500",
        graphData: null
      },
      {
        explanation: "Divide by 8.",
        workingOut: "500 \\div 8 = 62.5 \\implies \\text{not divisible}",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2i-q4b",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Divisibility tests",
    question: "Is 543 divisible by 3?",
    opts: [
      { text: "Yes", imageUrl: "" },
      { text: "No", imageUrl: "" }
    ],
    answer: 0,
    hint: "A number is divisible by 3 if the sum of its digits is divisible by 3. Add 5 + 4 + 3.",
    solution: "Add the digits of 543: \\(5 + 4 + 3 = 12\\). Since 12 is divisible by 3 (\\(12 \\div 3 = 4\\)), the number 543 is divisible by 3.",
    solutionSteps: [
      {
        explanation: "Sum the digits of the number.",
        workingOut: "5 + 4 + 3 = 12",
        graphData: null
      },
      {
        explanation: "Verify if the sum is divisible by 3.",
        workingOut: "12 \\div 3 = 4 \\implies \\text{divisible}",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2i-q4c",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Divisibility tests",
    question: "Is 8987 divisible by 3?",
    opts: [
      { text: "Yes", imageUrl: "" },
      { text: "No", imageUrl: "" }
    ],
    answer: 1,
    hint: "Find the sum of the digits of 8987. Check if this sum can be divided by 3.",
    solution: "Find the sum of the digits: \\(8 + 9 + 8 + 7 = 32\\). Since 32 is not divisible by 3 (\\(32 \\div 3 = 10.67\\)), 8987 is not divisible by 3.",
    solutionSteps: [
      {
        explanation: "Calculate the sum of the digits.",
        workingOut: "8 + 9 + 8 + 7 = 32",
        graphData: null
      },
      {
        explanation: "Check if the sum is a multiple of 3.",
        workingOut: "32 \\div 3 = 10.67 \\implies \\text{not divisible}",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2i-q5b",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Divisibility tests",
    question: "Is 33543 divisible by 9?",
    opts: [
      { text: "Yes", imageUrl: "" },
      { text: "No", imageUrl: "" }
    ],
    answer: 0,
    hint: "A number is divisible by 9 if the sum of its digits is divisible by 9. Calculate the sum of 3, 3, 5, 4, and 3.",
    solution: "Find the sum of the digits: \\(3 + 3 + 5 + 4 + 3 = 18\\). Since 18 is a multiple of 9 (\\(18 \\div 9 = 2\\)), the number 33543 is divisible by 9.",
    solutionSteps: [
      {
        explanation: "Sum the digits of the number.",
        workingOut: "3 + 3 + 5 + 4 + 3 = 18",
        graphData: null
      },
      {
        explanation: "Determine if this sum is divisible by 9.",
        workingOut: "18 \\div 9 = 2 \\implies \\text{divisible}",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2i-q5e",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Divisibility tests",
    question: "Is 1357911 divisible by 9?",
    opts: [
      { text: "Yes", imageUrl: "" },
      { text: "No", imageUrl: "" }
    ],
    answer: 0,
    hint: "Add the digits of 1357911: 1 + 3 + 5 + 7 + 9 + 1 + 1.",
    solution: "Find the sum of the digits: \\(1 + 3 + 5 + 7 + 9 + 1 + 1 = 27\\). Since 27 is divisible by 9 (\\(27 \\div 9 = 3\\)), the number 1357911 is divisible by 9.",
    solutionSteps: [
      {
        explanation: "Sum the digits of 1357911.",
        workingOut: "1 + 3 + 5 + 7 + 9 + 1 + 1 = 27",
        graphData: null
      },
      {
        explanation: "Check if 27 is divisible by 9.",
        workingOut: "27 \\div 9 = 3 \\implies \\text{divisible}",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2i-q6a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Divisibility tests",
    question: "Which of the following numbers is NOT divisible by 3?",
    opts: [
      { text: "\\(792\\)", imageUrl: "" },
      { text: "\\(5838\\)", imageUrl: "" },
      { text: "\\(179\\)", imageUrl: "" },
      { text: "\\(45891\\)", imageUrl: "" }
    ],
    answer: 2,
    hint: "Test the digit sum for each option. The one whose digit sum is not a multiple of 3 is not divisible by 3.",
    solution: "Apply the divisibility test for 3 to each number:\n- 179: \\(1 + 7 + 9 = 17\\) (not divisible)\n- 792: \\(7 + 9 + 2 = 18\\) (divisible)\n- 5838: \\(5 + 8 + 3 + 8 = 24\\) (divisible)\n- 45891: \\(4 + 5 + 8 + 9 + 1 = 27\\) (divisible)\nTherefore, 179 is the only number that is not divisible by 3.",
    solutionSteps: [
      {
        explanation: "Check the digit sum for 179.",
        workingOut: "1 + 7 + 9 = 17 \\quad (\\text{not divisible})",
        graphData: null
      },
      {
        explanation: "Check the digit sum for 792.",
        workingOut: "7 + 9 + 2 = 18 \\quad (\\text{divisible})",
        graphData: null
      },
      {
        explanation: "Check the remaining options.",
        workingOut: "5838 \\to 24 \\text{ (divisible)}, \\quad 45891 \\to 27 \\text{ (divisible)}",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2i-q7",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Divisibility tests",
    question: "Which of the numbers: 2, 3, 4, 5, 6, 8, 9, 10 divide the number 584,760?",
    opts: [
      { text: "2, 3, 4, 5, 6, 8, 10", imageUrl: "" },
      { text: "2, 3, 4, 5, 6, 9, 10", imageUrl: "" },
      { text: "2, 3, 4, 5, 6, 8, 9, 10", imageUrl: "" },
      { text: "2, 4, 5, 8, 10", imageUrl: "" }
    ],
    answer: 0,
    hint: "Apply divisibility tests for each value. Sum of digits is 30. Last three digits are 760.",
    solution: "Test each digit on 584760:\n- 2: ends in 0 (Yes)\n- 3: digit sum is 30 (divisible by 3) (Yes)\n- 4: ends in 60 (divisible by 4) (Yes)\n- 5: ends in 0 (Yes)\n- 6: divisible by both 2 and 3 (Yes)\n- 8: last three digits form 760, and \\(760 \\div 8 = 95\\) (Yes)\n- 9: digit sum is 30 (not divisible by 9) (No)\n- 10: ends in 0 (Yes)\nHence, the correct set of divisors is 2, 3, 4, 5, 6, 8, 10.",
    solutionSteps: [
      {
        explanation: "Test divisibility by 2, 5, and 10 using the ending digit.",
        workingOut: "\\text{Ends in 0} \\implies \\text{Divisible by 2, 5, and 10}",
        graphData: null
      },
      {
        explanation: "Test divisibility by 3 and 9 using the digit sum.",
        workingOut: "\\text{Digit sum} = 5+8+4+7+6+0 = 30 \\implies \\text{Divisible by 3, but not 9}",
        graphData: null
      },
      {
        explanation: "Check divisibility by 6.",
        workingOut: "\\text{Divisible by 2 and 3} \\implies \\text{Divisible by 6}",
        graphData: null
      },
      {
        explanation: "Check divisibility by 4 and 8.",
        workingOut: "\\text{Last two: } 60 \\div 4 = 15 \\text{ (Yes)}, \\quad \\text{Last three: } 760 \\div 8 = 95 \\text{ (Yes)}",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2i-q8",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Divisibility tests",
    question: "Which of the numbers: 2, 3, 4, 5, 6, 8, 9, 10 divide the number 38,190,306?",
    opts: [
      { text: "2, 3", imageUrl: "" },
      { text: "2, 3, 6", imageUrl: "" },
      { text: "2, 3, 4, 6", imageUrl: "" },
      { text: "2, 3, 6, 9", imageUrl: "" }
    ],
    answer: 1,
    hint: "Apply tests. Sum of digits is 30. Last two digits are 06. Last digit is 6.",
    solution: "Test divisors on 38190306:\n- 2: ends in 6 (Yes)\n- 3: digit sum is 30 (divisible by 3) (Yes)\n- 4: ends in 06 (not divisible) (No)\n- 5: ends in 6 (No)\n- 6: divisible by 2 and 3 (Yes)\n- 8: last three digits form 306 (not divisible by 8) (No)\n- 9: digit sum is 30 (not divisible by 9) (No)\n- 10: ends in 6 (No)\nThus, only 2, 3, and 6 divide the number.",
    solutionSteps: [
      {
        explanation: "Check the last digit to test divisibility by 2, 5, and 10.",
        workingOut: "\\text{Ends in 6} \\implies \\text{Divisible by 2, but not 5 or 10}",
        graphData: null
      },
      {
        explanation: "Check the sum of digits to test divisibility by 3 and 9.",
        workingOut: "\\text{Digit sum} = 3+8+1+9+0+3+0+6 = 30 \\implies \\text{Divisible by 3, but not 9}",
        graphData: null
      },
      {
        explanation: "Check divisibility by 6, 4, and 8.",
        workingOut: "\\text{Divisible by 2 and 3} \\implies \\text{Divisible by 6}. \\quad 06 \\text{ is not divisible by 4} \\implies \\text{not divisible by 4 or 8}.",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2i-q9a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Divisibility tests",
    question: "Find the smallest number that is greater than 1000 and divisible by 3.",
    opts: [
      { text: "\\(1001\\)", imageUrl: "" },
      { text: "\\(1002\\)", imageUrl: "" },
      { text: "\\(1003\\)", imageUrl: "" },
      { text: "\\(1005\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Check numbers starting from 1001. Find the first one whose digits sum to a multiple of 3.",
    solution: "Test sequentially starting from 1001:\n- 1001: digit sum is \\(1 + 0 + 0 + 1 = 2\\) (No)\n- 1002: digit sum is \\(1 + 0 + 0 + 2 = 3\\) (Yes)\nTherefore, the smallest number greater than 1000 divisible by 3 is 1002.",
    solutionSteps: [
      {
        explanation: "Test the first candidate 1001.",
        workingOut: "1001 \\to 1+0+0+1 = 2 \\quad (\\text{no})",
        graphData: null
      },
      {
        explanation: "Test the next candidate 1002.",
        workingOut: "1002 \\to 1+0+0+2 = 3 \\quad (\\text{yes})",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2i-q9b",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Divisibility tests",
    question: "Find the smallest number that is greater than 1000 and divisible by 8.",
    opts: [
      { text: "\\(1004\\)", imageUrl: "" },
      { text: "\\(1008\\)", imageUrl: "" },
      { text: "\\(1016\\)", imageUrl: "" },
      { text: "\\(1000\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Note that 1000 is divisible by 8. We need a number GREATER than 1000.",
    solution: "First check 1000: \\(1000 \\div 8 = 125\\). Since 1000 is divisible by 8, the next multiple of 8 is simply \\(1000 + 8 = 1008\\).",
    solutionSteps: [
      {
        explanation: "Test the divisibility of 1000 by 8.",
        workingOut: "1000 \\div 8 = 125 \\quad (\\text{integer})",
        graphData: null
      },
      {
        explanation: "Find the next consecutive multiple of 8.",
        workingOut: "1000 + 8 = 1008",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2i-q9f",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Divisibility tests",
    question: "Find the smallest number that is greater than 1000 and divisible by 3, 4, and 5.",
    opts: [
      { text: "\\(1020\\)", imageUrl: "" },
      { text: "\\(1060\\)", imageUrl: "" },
      { text: "\\(1005\\)", imageUrl: "" },
      { text: "\\(1012\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Divisibility by 3, 4, and 5 means the number must be a multiple of their Lowest Common Multiple (LCM), which is 60.",
    solution: "Find the LCM of 3, 4, and 5. Since they are pairwise coprime, \\(LCM = 3 \\times 4 \\times 5 = 60\\). We need the smallest multiple of 60 greater than 1000:\n- Divide 1000 by 60: \\(1000 \\div 60 \\approx 16.67\\)\n- Round up to 17: \\(17 \\times 60 = 1020\\).\nThus, 1020 is the smallest value.",
    solutionSteps: [
      {
        explanation: "Find the Lowest Common Multiple (LCM) of 3, 4, and 5.",
        workingOut: "\\text{LCM}(3, 4, 5) = 60",
        graphData: null
      },
      {
        explanation: "Divide 1000 by 60 to find the nearest multiple.",
        workingOut: "1000 \\div 60 \\approx 16.67",
        graphData: null
      },
      {
        explanation: "Multiply the next whole number by 60.",
        workingOut: "17 \\times 60 = 1020",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2i-q10c",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "Which of the following digit values for the boxes will make the five-digit number \\( 7\\square42\\square \\) divisible by 5?",
    hint: "To be divisible by 5, the last digit must be 0 or 5.",
    solutionSteps: [
      {
        explanation: "A number is divisible by 5 if it ends in 0 or 5.",
        workingOut: "\\text{Last digit } = 5 \\implies \\text{divisible}",
        graphData: null
      },
      {
        explanation: "Among the options, only '1 and 5' provides a last digit of 5 (yielding the number 71425).",
        workingOut: "71425",
        graphData: null
      }
    ],
    options: [
      {
        text: "1 and 2",
        imageUrl: ""
      },
      {
        text: "1 and 5",
        imageUrl: ""
      },
      {
        text: "2 and 3",
        imageUrl: ""
      },
      {
        text: "3 and 4",
        imageUrl: ""
      }
    ],
    answer: 1
  },
  {
    id: "y7-2i-q10f",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "Which of the following digit values for the boxes will make the five-digit number \\( 7\\square42\\square \\) divisible by both 4 and 5?",
    hint: "The last digit must be 0 or 5 for divisibility by 5, and the last two digits must be divisible by 4.",
    solutionSteps: [
      {
        explanation: "Divisibility by 5 requires the last digit to be 0 or 5.",
        workingOut: "\\text{Ends in 0 or 5}",
        graphData: null
      },
      {
        explanation: "Divisibility by 4 requires the last two digits to be divisible by 4. If it ends in 5, the last two digits are 25 (not divisible). If it ends in 0, the last two digits are 20 (divisible by 4).",
        workingOut: "20 \\div 4 = 5 \\implies \\text{Ends in 0}",
        graphData: null
      },
      {
        explanation: "Choose the option ending in 0: '3 and 0' (giving 73420).",
        workingOut: "73420",
        graphData: null
      }
    ],
    options: [
      {
        text: "3 and 5",
        imageUrl: ""
      },
      {
        text: "2 and 4",
        imageUrl: ""
      },
      {
        text: "3 and 0",
        imageUrl: ""
      },
      {
        text: "4 and 2",
        imageUrl: ""
      }
    ],
    answer: 2
  },
  {
    id: "y7-2i-q10i",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Divisibility tests",
    question: "Which of the following digit values for the boxes will make the five-digit number \\( 7\\square42\\square \\) divisible by both 9 and 10?",
    opts: [
      { text: "5 and 0 (making 75420)", imageUrl: "" },
      { text: "6 and 0 (making 76420)", imageUrl: "" },
      { text: "5 and 5 (making 75425)", imageUrl: "" },
      { text: "9 and 0 (making 79420)", imageUrl: "" }
    ],
    answer: 0,
    hint: "To be divisible by 10, the last digit must be 0. To be divisible by 9, the sum of all digits must be a multiple of 9.",
    solution: "1. For divisibility by 10, the last digit (second box) must be 0.\n2. For divisibility by 9, the sum of all digits must be a multiple of 9. Let the first box be \\(x\\):\n\\(7 + x + 4 + 2 + 0 = 13 + x\\).\nSince \\(x\\) is a single digit (0-9), the only value making \\(13 + x\\) a multiple of 9 (namely, 18) is \\(x = 5\\).\nThus, the digits are 5 and 0.",
    solutionSteps: [
      {
        explanation: "Determine the last digit based on divisibility by 10.",
        workingOut: "\\text{Last digit (second box)} = 0",
        graphData: null
      },
      {
        explanation: "Sum the digits including a variable x for the first box.",
        workingOut: "\\text{Sum} = 7 + x + 4 + 2 + 0 = 13 + x",
        graphData: null
      },
      {
        explanation: "Solve for the single-digit value x that makes the sum a multiple of 9.",
        workingOut: "13 + x = 18 \\implies x = 5 \\implies \\text{First box} = 5",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2i-q11a",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Divisibility tests",
    question: "Which of the following is the list of all factors of 147?",
    opts: [
      { text: "1, 3, 7, 21, 49, 147", imageUrl: "" },
      { text: "1, 3, 7, 49, 147", imageUrl: "" },
      { text: "1, 7, 21, 49, 147", imageUrl: "" },
      { text: "1, 3, 9, 21, 49, 147", imageUrl: "" }
    ],
    answer: 0,
    hint: "Check divisibility by small prime numbers. Since the digit sum of 147 is 12, it is divisible by 3.",
    solution: "Find factors by dividing: \\(147 \\div 3 = 49\\), which factorises into \\(7 \\times 7\\). Thus, the prime factorisation is \\(3 \\times 7^2\\). Combinations of these factors give: 1, 3, 7, \\(3 \\times 7 = 21\\), \\(7^2 = 49\\), and 147.",
    solutionSteps: [
      {
        explanation: "Test divisibility by 3.",
        workingOut: "1 + 4 + 7 = 12 \\implies 147 \\div 3 = 49",
        graphData: null
      },
      {
        explanation: "Factorise the composite result 49.",
        workingOut: "49 = 7 \\times 7 \\implies 147 = 3 \\times 7^2",
        graphData: null
      },
      {
        explanation: "Form all possible products from the prime factors 3, 7, 7.",
        workingOut: "\\text{Factors} = {1, 3, 7, 21, 49, 147}",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2i-q11b",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Divisibility tests",
    question: "Which of the following is the list of all factors of 345?",
    opts: [
      { text: "1, 3, 5, 15, 69, 115, 345", imageUrl: "" },
      { text: "1, 3, 5, 15, 23, 69, 115, 345", imageUrl: "" },
      { text: "1, 5, 15, 23, 69, 115, 345", imageUrl: "" },
      { text: "1, 3, 5, 23, 115, 345", imageUrl: "" }
    ],
    answer: 1,
    hint: "345 ends in 5, so it is divisible by 5. Its digit sum is 12, so it is also divisible by 3.",
    solution: "Factorise 345 step-by-step:\n- Divisible by 5: \\(345 \\div 5 = 69\\)\n- Divisible by 3: \\(69 \\div 3 = 23\\) (prime)\nSo, the prime factorisation is \\(3 \\times 5 \\times 23\\).\nGenerate all factors: 1, 3, 5, \\(3 \\times 5 = 15\\), 23, \\(3 \\times 23 = 69\\), \\(5 \\times 23 = 115\\), and 345.",
    solutionSteps: [
      {
        explanation: "Find divisibility by prime numbers 3 and 5.",
        workingOut: "345 \\div 5 = 69, \\quad 69 \\div 3 = 23 \\implies 345 = 3 \\times 5 \\times 23",
        graphData: null
      },
      {
        explanation: "Generate all factors by taking combinations of these prime components.",
        workingOut: "\\text{Factors: } 1, 3, 5, (3 \\times 5), 23, (3 \\times 23), (5 \\times 23), (3 \\times 5 \\times 23)",
        graphData: null
      },
      {
        explanation: "List and sort all factors.",
        workingOut: "{1, 3, 5, 15, 23, 69, 115, 345}",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2i-q12a1",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Divisibility tests",
    question: "What is the smallest three-digit number that is a multiple of 9?",
    opts: [
      { text: "\\(100\\)", imageUrl: "" },
      { text: "\\(108\\)", imageUrl: "" },
      { text: "\\(117\\)", imageUrl: "" },
      { text: "\\(109\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Check numbers starting from 100. The digits of the number must add up to 9.",
    solution: "The first three-digit number is 100. We test numbers sequentially to find one whose digits sum to a multiple of 9:\n- 100: \\(1 + 0 + 0 = 1\\) (No)\n- ...\n- 108: \\(1 + 0 + 8 = 9\\) (Yes)\nThus, 108 is the smallest.",
    solutionSteps: [
      {
        explanation: "Estimate using nearby division. Divide 100 by 9.",
        workingOut: "100 \\div 9 = 11.11",
        graphData: null
      },
      {
        explanation: "Round up to the next integer (12) and multiply by 9.",
        workingOut: "12 \\times 9 = 108",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2i-q12a2",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Divisibility tests",
    question: "What is the largest three-digit number that is a multiple of 9?",
    opts: [
      { text: "\\(990\\)", imageUrl: "" },
      { text: "\\(999\\)", imageUrl: "" },
      { text: "\\(989\\)", imageUrl: "" },
      { text: "\\(998\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "The largest three-digit number is 999. Check if the sum of its digits is divisible by 9.",
    solution: "The largest three-digit number is 999. The sum of its digits is \\(9 + 9 + 9 = 27\\), which is divisible by 9. Therefore, 999 is the largest three-digit multiple of 9.",
    solutionSteps: [
      {
        explanation: "Test the maximum possible 3-digit integer, 999.",
        workingOut: "\\text{Digit sum of } 999 = 9 + 9 + 9 = 27",
        graphData: null
      },
      {
        explanation: "Verify divisibility of this sum by 9.",
        workingOut: "27 \\div 9 = 3 \\implies \\text{999 is divisible by 9}",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2i-q12b1",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Divisibility tests",
    question: "What is the smallest three-digit number that is a multiple of 23?",
    opts: [
      { text: "\\(115\\)", imageUrl: "" },
      { text: "\\(105\\)", imageUrl: "" },
      { text: "\\(123\\)", imageUrl: "" },
      { text: "\\(138\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Divide 100 by 23, round up to the next integer, and multiply it back.",
    solution: "1. Find how many times 23 goes into 100: \\(100 \\div 23 \\approx 4.35\\).\n2. Since we need a three-digit number (>= 100), round 4.35 up to 5.\n3. Multiply: \\(5 \\times 23 = 115\\).\nHence, 115 is the smallest.",
    solutionSteps: [
      {
        explanation: "Divide the lower boundary of three-digit numbers (100) by 23.",
        workingOut: "100 \\div 23 \\approx 4.35",
        graphData: null
      },
      {
        explanation: "Round the result up to the next integer to guarantee a value >= 100.",
        workingOut: "\\text{Round } 4.35 \\text{ up } \\to 5",
        graphData: null
      },
      {
        explanation: "Multiply 5 by 23.",
        workingOut: "5 \\times 23 = 115",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2i-q12b2",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Divisibility tests",
    question: "What is the largest three-digit number that is a multiple of 23?",
    opts: [
      { text: "\\(966\\)", imageUrl: "" },
      { text: "\\(989\\)", imageUrl: "" },
      { text: "\\(992\\)", imageUrl: "" },
      { text: "\\(999\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Divide 1000 by 23, round down to the nearest integer, and multiply it by 23.",
    solution: "1. Find how many times 23 goes into 1000: \\(1000 \\div 23 \\approx 43.48\\).\n2. Round down to 43 to find the multiplier for the largest multiple below 1000.\n3. Calculate: \\(43 \\times 23 = 989\\).\nHence, 989 is the largest.",
    solutionSteps: [
      {
        explanation: "Divide 1000 (the first four-digit number) by 23.",
        workingOut: "1000 \\div 23 \\approx 43.48",
        graphData: null
      },
      {
        explanation: "Round down to the nearest integer to ensure the product remains a three-digit number.",
        workingOut: "\\text{Round } 43.48 \\text{ down } \\to 43",
        graphData: null
      },
      {
        explanation: "Multiply 43 by 23.",
        workingOut: "43 \\times 23 = 989",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2i-q13a",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Divisibility tests",
    question: "Find the number of positive integers less than 100 that are divisible by 2 or 3, or both.",
    opts: [
      { text: "\\(66\\)", imageUrl: "" },
      { text: "\\(82\\)", imageUrl: "" },
      { text: "\\(50\\)", imageUrl: "" },
      { text: "\\(72\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Use inclusion-exclusion: Count(divisible by 2) + Count(divisible by 3) - Count(divisible by 6). Total integers less than 100 is 99.",
    solution: "Use the principle of inclusion-exclusion on the positive integers from 1 to 99:\n- Divisible by 2: \\(99 \\div 2 = 49.5 \\implies 49\\) integers.\n- Divisible by 3: \\(99 \\div 3 = 33\\) integers.\n- Divisible by both (divisible by 6): \\(99 \\div 6 = 16.5 \\implies 16\\) integers.\nApply formula: \\(49 + 33 - 16 = 66\\) integers.",
    solutionSteps: [
      {
        explanation: "Count positive integers less than 100 divisible by 2.",
        workingOut: "\\lfloor 99 \\div 2 \\rfloor = 49",
        graphData: null
      },
      {
        explanation: "Count positive integers less than 100 divisible by 3.",
        workingOut: "\\lfloor 99 \\div 3 \\rfloor = 33",
        graphData: null
      },
      {
        explanation: "Count positive integers less than 100 divisible by both (multiples of 6).",
        workingOut: "\\lfloor 99 \\div 6 \\rfloor = 16",
        graphData: null
      },
      {
        explanation: "Apply the inclusion-exclusion principle.",
        workingOut: "49 + 33 - 16 = 66",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2i-q13b",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Divisibility tests",
    question: "Find the number of positive integers less than 100 that are NOT divisible by 2 or 3.",
    opts: [
      { text: "\\(33\\)", imageUrl: "" },
      { text: "\\(34\\)", imageUrl: "" },
      { text: "\\(49\\)", imageUrl: "" },
      { text: "\\(17\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Subtract the number of integers divisible by 2 or 3 (66) from the total count of positive integers less than 100 (which is 99).",
    solution: "The total number of positive integers less than 100 is 99. The number of these integers that are divisible by 2 or 3 (or both) is 66. Subtracting these gives: \\(99 - 66 = 33\\) integers.",
    solutionSteps: [
      {
        explanation: "Identify the total count of positive integers less than 100.",
        workingOut: "\\text{Total integers} = 99",
        graphData: null
      },
      {
        explanation: "Subtract the count of integers divisible by 2 or 3 (which is 66).",
        workingOut: "99 - 66 = 33",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2i-q13c",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Divisibility tests",
    question: "Find the number of positive integers less than 500 that are NOT divisible by 2 or 3.",
    opts: [
      { text: "\\(167\\)", imageUrl: "" },
      { text: "\\(250\\)", imageUrl: "" },
      { text: "\\(332\\)", imageUrl: "" },
      { text: "\\(166\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Find the total integers divisible by 2 or 3 less than 500 using inclusion-exclusion, then subtract from 499.",
    solution: "1. Total positive integers less than 500: 499.\n2. Find count divisible by 2 or 3:\n- Divisible by 2: \\(499 \\div 2 = 249.5 \\implies 249\\)\n- Divisible by 3: \\(499 \\div 3 = 166.33 \\implies 166\\)\n- Divisible by 6: \\(499 \\div 6 = 83.17 \\implies 83\\)\n- Divisible by 2 or 3: \\(249 + 166 - 83 = 332\\).\n3. Subtract from 499: \\(499 - 332 = 167\\).",
    solutionSteps: [
      {
        explanation: "Count positive integers less than 500 divisible by 2 and 3 individually.",
        workingOut: "\\lfloor 499 \\div 2 \\rfloor = 249, \\quad \\lfloor 499 \\div 3 \\rfloor = 166",
        graphData: null
      },
      {
        explanation: "Count multiples of 6 (divisible by both 2 and 3) below 500.",
        workingOut: "\\lfloor 499 \\div 6 \\rfloor = 83",
        graphData: null
      },
      {
        explanation: "Calculate those divisible by 2 or 3 using inclusion-exclusion.",
        workingOut: "249 + 166 - 83 = 332",
        graphData: null
      },
      {
        explanation: "Subtract this count from the total positive integers (499).",
        workingOut: "499 - 332 = 167",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2i-q14",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Divisibility tests",
    question: "Find the least positive integer divisible by 1, 2, 3, 4, 5, 6, 7, 8, 9, and 10.",
    opts: [
      { text: "\\(1260\\)", imageUrl: "" },
      { text: "\\(2520\\)", imageUrl: "" },
      { text: "\\(5040\\)", imageUrl: "" },
      { text: "\\(840\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "This is equivalent to finding the Lowest Common Multiple (LCM) of the integers from 1 to 10.",
    solution: "Write out the prime factorisations of the numbers from 2 to 10:\n- \\(2 = 2\\), \\(3 = 3\\), \\(4 = 2^2\\), \\(5 = 5\\), \\(6 = 2 \\times 3\\), \\(7 = 7\\), \\(8 = 2^3\\), \\(9 = 3^2\\), \\(10 = 2 \\times 5\\)\nTake the highest power of each prime factor present:\n\\(LCM = 2^3 \\times 3^2 \\times 5^1 \\times 7^1 = 8 \\times 9 \\times 5 \\times 7 = 2520\\).",
    solutionSteps: [
      {
        explanation: "List prime factorisations of the numbers 2 through 10.",
        workingOut: "2, \\ 3, \\ 2^2, \\ 5, \\ 2 \\times 3, \\ 7, \\ 2^3, \\ 3^2, \\ 2 \\times 5",
        graphData: null
      },
      {
        explanation: "Identify the highest power of each prime factor that occurs.",
        workingOut: "2^3, \\quad 3^2, \\quad 5^1, \\quad 7^1",
        graphData: null
      },
      {
        explanation: "Multiply these highest powers to calculate the LCM.",
        workingOut: "8 \\times 9 \\times 5 \\times 7 = 360 \\times 7 = 2520",
        graphData: null
      }
    ]
  }
];
