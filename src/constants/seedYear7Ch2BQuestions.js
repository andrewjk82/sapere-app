export const Y7_CH2B_QUESTIONS = [
  {
    "id": "y7-2b-q1a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Odd and even numbers",
    "question": "Which of the following lists all the odd numbers that are factors of \\(30\\)?",
    "hint": "First find all factors of 30, then select only the odd ones.",
    "solutionSteps": [
      {
        "explanation": "First find ALL the factors of \\(30\\). Work in pairs: test \\(1, 2, 3, \\dots\\) in order and stop once the pairs start repeating.",
        "workingOut": "1 \\times 30,\\quad 2 \\times 15,\\quad 3 \\times 10,\\quad 5 \\times 6"
      },
      {
        "explanation": "Write out the full factor list in ascending order.",
        "workingOut": "1, 2, 3, 5, 6, 10, 15, 30"
      },
      {
        "explanation": "Remember what odd means: an odd number is NOT divisible by \\(2\\) — it ends in \\(1, 3, 5, 7\\) or \\(9\\)."
      },
      {
        "explanation": "Keep only the odd numbers from the factor list. Cross out \\(2, 6, 10\\) and \\(30\\) because they are even.",
        "workingOut": "1, 3, 5, 15"
      }
    ],
    "options": [
      { "text": "1, 3, 5, 15", "imageUrl": "" },
      { "text": "1, 3, 5", "imageUrl": "" },
      { "text": "3, 5, 15", "imageUrl": "" },
      { "text": "1, 3, 5, 9, 15", "imageUrl": "" }
    ],
    "answer": "0"
  },
  {
    "id": "y7-2b-q1b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Odd and even numbers",
    "question": "Which of the following lists all the even numbers that are factors of \\(30\\)?",
    "hint": "First find all factors of 30, then select only the even ones.",
    "solutionSteps": [
      {
        "explanation": "First find ALL the factors of \\(30\\). Work in pairs: test \\(1, 2, 3, \\dots\\) in order and stop once the pairs start repeating.",
        "workingOut": "1 \\times 30,\\quad 2 \\times 15,\\quad 3 \\times 10,\\quad 5 \\times 6"
      },
      {
        "explanation": "Write out the full factor list in ascending order.",
        "workingOut": "1, 2, 3, 5, 6, 10, 15, 30"
      },
      {
        "explanation": "Remember what even means: an even number IS divisible by \\(2\\) — it ends in \\(0, 2, 4, 6\\) or \\(8\\)."
      },
      {
        "explanation": "Keep only the even numbers from the factor list. Cross out \\(1, 3, 5\\) and \\(15\\) because they are odd. Do not forget \\(30\\) itself!",
        "workingOut": "2, 6, 10, 30"
      }
    ],
    "options": [
      { "text": "2, 6, 10, 30", "imageUrl": "" },
      { "text": "2, 6, 10", "imageUrl": "" },
      { "text": "2, 4, 6, 10, 30", "imageUrl": "" },
      { "text": "6, 10, 30", "imageUrl": "" }
    ],
    "answer": "0"
  },
  {
    "id": "y7-2b-q1c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Odd and even numbers",
    "question": "Which of the following lists all the even multiples of \\(3\\) that are less than \\(60\\)?",
    "hint": "Write down the multiples of 3, then keep only the even ones less than 60.",
    "solutionSteps": [
      {
        "explanation": "List the multiples of \\(3\\) in order, stopping before \\(60\\).",
        "workingOut": "3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57"
      },
      {
        "explanation": "Notice the pattern: the multiples of \\(3\\) alternate odd, even, odd, even, \\(\\dots\\) so every SECOND one is even."
      },
      {
        "explanation": "Keep only the even ones. These are exactly the multiples of \\(6\\).",
        "workingOut": "6, 12, 18, 24, 30, 36, 42, 48, 54"
      },
      {
        "explanation": "Check the boundary: \\(60\\) is also an even multiple of \\(3\\), but the question says LESS THAN \\(60\\), so the list must stop at \\(54\\)."
      }
    ],
    "options": [
      { "text": "6, 12, 18, 24, 30, 36, 42, 48, 54", "imageUrl": "" },
      { "text": "6, 12, 18, 24, 30, 36, 42, 48, 54, 60", "imageUrl": "" },
      { "text": "3, 9, 15, 21, 27, 33, 39, 45, 51, 57", "imageUrl": "" },
      { "text": "6, 12, 18, 24, 30, 36, 42, 48", "imageUrl": "" }
    ],
    "answer": "0"
  },
  {
    "id": "y7-2b-q2a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Odd and even numbers",
    "question": "Which of the following lists all the odd numbers between \\(20\\) and \\(34\\)?",
    "hint": "Odd numbers end in 1, 3, 5, 7, or 9.",
    "solutionSteps": [
      {
        "explanation": "\"Between \\(20\\) and \\(34\\)\" means strictly between: start counting after \\(20\\) and stop before \\(34\\)."
      },
      {
        "explanation": "Odd numbers end in \\(1, 3, 5, 7\\) or \\(9\\). The first odd number after \\(20\\) is \\(21\\); from there, count up in steps of \\(2\\).",
        "workingOut": "21, 23, 25, 27, 29, 31, 33"
      },
      {
        "explanation": "Check both ends: \\(21\\) is the first odd number after \\(20\\), and \\(33\\) is the last odd number before \\(34\\). Do not include \\(35\\) — it is past \\(34\\)."
      }
    ],
    "options": [
      { "text": "21, 23, 25, 27, 29, 31, 33", "imageUrl": "" },
      { "text": "21, 23, 25, 27, 29, 31", "imageUrl": "" },
      { "text": "19, 21, 23, 25, 27, 29, 31, 33", "imageUrl": "" },
      { "text": "21, 23, 25, 27, 29, 31, 33, 35", "imageUrl": "" }
    ],
    "answer": "0"
  },
  {
    "id": "y7-2b-q2b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Odd and even numbers",
    "question": "Which of the following lists all the even numbers between \\(375\\) and \\(393\\)?",
    "hint": "Even numbers end in 0, 2, 4, 6, or 8.",
    "solutionSteps": [
      {
        "explanation": "\"Between \\(375\\) and \\(393\\)\" means strictly between: start counting after \\(375\\) and stop before \\(393\\)."
      },
      {
        "explanation": "Even numbers end in \\(0, 2, 4, 6\\) or \\(8\\). The first even number after \\(375\\) is \\(376\\); from there, count up in steps of \\(2\\).",
        "workingOut": "376, 378, 380, 382, 384, 386, 388, 390, 392"
      },
      {
        "explanation": "Check both ends: \\(376\\) is the first even number after \\(375\\), and \\(392\\) is the last even number before \\(393\\). \\(374\\) and \\(394\\) are outside the range."
      }
    ],
    "options": [
      { "text": "376, 378, 380, 382, 384, 386, 388, 390, 392", "imageUrl": "" },
      { "text": "374, 376, 378, 380, 382, 384, 386, 388, 390, 392", "imageUrl": "" },
      { "text": "376, 378, 380, 382, 384, 386, 388, 390, 392, 394", "imageUrl": "" },
      { "text": "377, 379, 381, 383, 385, 387, 389, 391", "imageUrl": "" }
    ],
    "answer": "0"
  },
  {
    "id": "y7-2b-q2c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Odd and even numbers",
    "question": "How many odd whole numbers are less than \\(100\\)?",
    "hint": "Odd numbers less than 100 start at 1 and end at 99.",
    "solutionSteps": [
      {
        "explanation": "The odd whole numbers less than \\(100\\) are \\(1, 3, 5, \\dots, 99\\).",
        "workingOut": "\\{1, 3, 5, \\dots, 99\\}"
      },
      {
        "explanation": "Use the pairing trick: the \\(100\\) whole numbers from \\(0\\) to \\(99\\) alternate even, odd, even, odd, \\(\\dots\\) so exactly HALF of them are odd.",
        "workingOut": "100 \\div 2 = 50"
      },
      {
        "explanation": "Double-check with the counting formula: count the steps of \\(2\\) from \\(1\\) to \\(99\\), then add \\(1\\) for the starting number.",
        "workingOut": "\\frac{99 - 1}{2} + 1 = 50"
      },
      {
        "explanation": "Watch the trap: the answer is not \\(99\\) (that is the biggest odd number, not how many there are), and it is not \\(49\\) (do not forget to add \\(1\\) for the first number)."
      }
    ],
    "options": [
      { "text": "50", "imageUrl": "" },
      { "text": "49", "imageUrl": "" },
      { "text": "51", "imageUrl": "" },
      { "text": "99", "imageUrl": "" }
    ],
    "answer": "0"
  },
  {
    "id": "y7-2b-q2d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Odd and even numbers",
    "question": "How many even whole numbers are less than \\(21\\)?",
    "hint": "Remember that whole numbers start at 0, and 0 is an even number.",
    "solutionSteps": [
      {
        "explanation": "Whole numbers start at \\(0\\) — and \\(0\\) IS an even number. This is the step most people miss!"
      },
      {
        "explanation": "List the even whole numbers below \\(21\\), starting from \\(0\\).",
        "workingOut": "0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20"
      },
      {
        "explanation": "Count them with the formula: count the steps of \\(2\\) from \\(0\\) to \\(20\\), then add \\(1\\) for the starting number.",
        "workingOut": "\\frac{20 - 0}{2} + 1 = 11"
      },
      {
        "explanation": "Watch the trap: if you forget \\(0\\), you get \\(10\\) — but the correct answer is \\(11\\)."
      }
    ],
    "options": [
      { "text": "11", "imageUrl": "" },
      { "text": "10", "imageUrl": "" },
      { "text": "12", "imageUrl": "" },
      { "text": "20", "imageUrl": "" }
    ],
    "answer": "0"
  },
  {
    "id": "y7-2b-q3a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Odd and even numbers",
    "question": "Which two consecutive odd numbers add to \\(432\\)?",
    "hint": "Consecutive odd numbers differ by 2. Let them be \\(x\\) and \\(x + 2\\).",
    "solutionSteps": [
      {
        "explanation": "Consecutive odd numbers are \\(2\\) apart (like \\(7\\) and \\(9\\)). Call the smaller one \\(x\\), so the next one is \\(x + 2\\)."
      },
      {
        "explanation": "Their sum is \\(432\\), so set up an equation.",
        "workingOut": "x + (x + 2) = 432"
      },
      {
        "explanation": "Solve it step by step: collect the \\(x\\) terms, subtract \\(2\\) from both sides, then divide by \\(2\\).",
        "workingOut": "2x + 2 = 432,\\quad 2x = 430,\\quad x = 215"
      },
      {
        "explanation": "So the two numbers are \\(215\\) and \\(217\\). Quick sense check: each should be close to half of \\(432\\), which is \\(216\\) — one just below, one just above.",
        "workingOut": "215 + 217 = 432"
      },
      {
        "explanation": "Watch the trap: \\(216\\) and \\(218\\) also differ by \\(2\\), but they are EVEN numbers, so they do not fit the question."
      }
    ],
    "options": [
      { "text": "215, 217", "imageUrl": "" },
      { "text": "216, 218", "imageUrl": "" },
      { "text": "213, 215", "imageUrl": "" },
      { "text": "217, 219", "imageUrl": "" }
    ],
    "answer": "0"
  },
  {
    "id": "y7-2b-q3b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Odd and even numbers",
    "question": "Which two consecutive odd numbers add to \\(984\\)?",
    "hint": "Let the two numbers be \\(x\\) and \\(x + 2\\). Solve \\(2x + 2 = 984\\).",
    "solutionSteps": [
      {
        "explanation": "Consecutive odd numbers are \\(2\\) apart. Call the smaller one \\(x\\), so the next one is \\(x + 2\\)."
      },
      {
        "explanation": "Their sum is \\(984\\), so set up an equation.",
        "workingOut": "x + (x + 2) = 984"
      },
      {
        "explanation": "Solve it step by step: collect the \\(x\\) terms, subtract \\(2\\) from both sides, then divide by \\(2\\).",
        "workingOut": "2x + 2 = 984,\\quad 2x = 982,\\quad x = 491"
      },
      {
        "explanation": "So the two numbers are \\(491\\) and \\(493\\). Quick sense check: each should be close to half of \\(984\\), which is \\(492\\) — one just below, one just above.",
        "workingOut": "491 + 493 = 984"
      },
      {
        "explanation": "Watch the trap: \\(492\\) and \\(494\\) also differ by \\(2\\), but they are EVEN numbers, so they do not fit the question."
      }
    ],
    "options": [
      { "text": "491, 493", "imageUrl": "" },
      { "text": "492, 494", "imageUrl": "" },
      { "text": "489, 491", "imageUrl": "" },
      { "text": "493, 495", "imageUrl": "" }
    ],
    "answer": "0"
  },
  {
    "id": "y7-2b-q3c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Odd and even numbers",
    "question": "Which two consecutive odd numbers add to \\(1028\\)?",
    "hint": "Let the two numbers be \\(x\\) and \\(x + 2\\). Solve \\(2x + 2 = 1028\\).",
    "solutionSteps": [
      {
        "explanation": "Consecutive odd numbers are \\(2\\) apart. Call the smaller one \\(x\\), so the next one is \\(x + 2\\)."
      },
      {
        "explanation": "Their sum is \\(1028\\), so set up an equation.",
        "workingOut": "x + (x + 2) = 1028"
      },
      {
        "explanation": "Solve it step by step: collect the \\(x\\) terms, subtract \\(2\\) from both sides, then divide by \\(2\\).",
        "workingOut": "2x + 2 = 1028,\\quad 2x = 1026,\\quad x = 513"
      },
      {
        "explanation": "So the two numbers are \\(513\\) and \\(515\\). Quick sense check: each should be close to half of \\(1028\\), which is \\(514\\) — one just below, one just above.",
        "workingOut": "513 + 515 = 1028"
      },
      {
        "explanation": "Watch the trap: \\(514\\) and \\(516\\) also differ by \\(2\\), but they are EVEN numbers, so they do not fit the question."
      }
    ],
    "options": [
      { "text": "513, 515", "imageUrl": "" },
      { "text": "514, 516", "imageUrl": "" },
      { "text": "511, 513", "imageUrl": "" },
      { "text": "515, 517", "imageUrl": "" }
    ],
    "answer": "0"
  },
  {
    "id": "y7-2b-q4a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Odd and even numbers",
    "question": "Which of the following consists of two different even numbers greater than 1, and one odd number that add to \\(633\\)?",
    "hint": "Check three things: the two even numbers are different and greater than 1, one number is odd, and the sum is 633.",
    "solutionSteps": [
      {
        "explanation": "Read the conditions carefully — there are three: (1) two even numbers that are DIFFERENT from each other and greater than \\(1\\), (2) one odd number, (3) the three numbers add to \\(633\\)."
      },
      {
        "explanation": "A parity check tells us what to look for: even \\(+\\) even \\(+\\) odd \\(=\\) odd, and \\(633\\) is odd — so a correct answer needs exactly one odd number."
      },
      {
        "explanation": "Test \\(2, 4, 627\\): the numbers \\(2\\) and \\(4\\) are different even numbers greater than \\(1\\), and \\(627\\) is odd. Now check the sum.",
        "workingOut": "2 + 4 + 627 = 633"
      },
      {
        "explanation": "Rule out the others: \\(2, 2, 629\\) repeats the SAME even number twice; \\(2, 4, 628\\) has no odd number and adds to \\(634\\); \\(3, 5, 625\\) has no even numbers at all."
      }
    ],
    "options": [
      { "text": "2, 4, 627", "imageUrl": "" },
      { "text": "2, 2, 629", "imageUrl": "" },
      { "text": "2, 4, 628", "imageUrl": "" },
      { "text": "3, 5, 625", "imageUrl": "" }
    ],
    "answer": "0"
  },
  {
    "id": "y7-2b-q4b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Odd and even numbers",
    "question": "Which of the following consists of two different even numbers greater than 1, and one odd number that add to \\(1001\\)?",
    "hint": "Check three things: the two even numbers are different and greater than 1, one number is odd, and the sum is 1001.",
    "solutionSteps": [
      {
        "explanation": "Read the conditions carefully — there are three: (1) two even numbers that are DIFFERENT from each other and greater than \\(1\\), (2) one odd number, (3) the three numbers add to \\(1001\\)."
      },
      {
        "explanation": "A parity check tells us what to look for: even \\(+\\) even \\(+\\) odd \\(=\\) odd, and \\(1001\\) is odd — so a correct answer needs exactly one odd number."
      },
      {
        "explanation": "Test \\(2, 4, 995\\): the numbers \\(2\\) and \\(4\\) are different even numbers greater than \\(1\\), and \\(995\\) is odd. Now check the sum.",
        "workingOut": "2 + 4 + 995 = 1001"
      },
      {
        "explanation": "Rule out the others: \\(2, 2, 997\\) repeats the SAME even number twice; \\(2, 4, 996\\) has no odd number and adds to \\(1002\\); \\(3, 5, 993\\) has no even numbers at all."
      }
    ],
    "options": [
      { "text": "2, 4, 995", "imageUrl": "" },
      { "text": "2, 2, 997", "imageUrl": "" },
      { "text": "2, 4, 996", "imageUrl": "" },
      { "text": "3, 5, 993", "imageUrl": "" }
    ],
    "answer": "0"
  },
  {
    "id": "y7-2b-q4c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Odd and even numbers",
    "question": "Which of the following consists of two different even numbers greater than 1, and one odd number that add to \\(2397\\)?",
    "hint": "Check three things: the two even numbers are different and greater than 1, one number is odd, and the sum is 2397.",
    "solutionSteps": [
      {
        "explanation": "Read the conditions carefully — there are three: (1) two even numbers that are DIFFERENT from each other and greater than \\(1\\), (2) one odd number, (3) the three numbers add to \\(2397\\)."
      },
      {
        "explanation": "A parity check tells us what to look for: even \\(+\\) even \\(+\\) odd \\(=\\) odd, and \\(2397\\) is odd — so a correct answer needs exactly one odd number."
      },
      {
        "explanation": "Test \\(2, 4, 2391\\): the numbers \\(2\\) and \\(4\\) are different even numbers greater than \\(1\\), and \\(2391\\) is odd. Now check the sum.",
        "workingOut": "2 + 4 + 2391 = 2397"
      },
      {
        "explanation": "Rule out the others: \\(2, 2, 2393\\) repeats the SAME even number twice; \\(2, 4, 2392\\) has no odd number and adds to \\(2398\\); \\(3, 5, 2389\\) has no even numbers at all."
      }
    ],
    "options": [
      { "text": "2, 4, 2391", "imageUrl": "" },
      { "text": "2, 2, 2393", "imageUrl": "" },
      { "text": "2, 4, 2392", "imageUrl": "" },
      { "text": "3, 5, 2389", "imageUrl": "" }
    ],
    "answer": "0"
  },
  {
    "id": "y7-2b-q5a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Odd and even numbers",
    "question": "Complete the sentence: The sum of two even numbers is an ______ number.",
    "hint": "Try an example: 2 + 4 = ?",
    "solutionSteps": [
      {
        "explanation": "Try some examples first: \\(2 + 4 = 6\\) and \\(10 + 8 = 18\\). Both answers are even.",
        "workingOut": "2 + 4 = 6,\\quad 10 + 8 = 18"
      },
      {
        "explanation": "See WHY it always works: an even number is a stack of \\(2\\)s. Adding two stacks of \\(2\\)s just gives a bigger stack of \\(2\\)s — nothing is left over.",
        "workingOut": "2m + 2n = 2(m + n)"
      },
      {
        "explanation": "So the rule is: Even \\(+\\) Even \\(=\\) Even, always — no matter which even numbers you pick.",
        "workingOut": "\\text{even}"
      }
    ],
    "options": [
      { "text": "even", "imageUrl": "" },
      { "text": "odd", "imageUrl": "" }
    ],
    "answer": "0"
  },
  {
    "id": "y7-2b-q5b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Odd and even numbers",
    "question": "Complete the sentence: The sum of two odd numbers is an ______ number.",
    "hint": "Try an example: 3 + 5 = ?",
    "solutionSteps": [
      {
        "explanation": "Try some examples first: \\(3 + 5 = 8\\) and \\(7 + 9 = 16\\). Both answers are even.",
        "workingOut": "3 + 5 = 8,\\quad 7 + 9 = 16"
      },
      {
        "explanation": "See WHY it always works: an odd number is a stack of \\(2\\)s with \\(1\\) left over. Two odd numbers give two leftovers — and those two leftovers pair up to make one more \\(2\\)!",
        "workingOut": "(2m + 1) + (2n + 1) = 2(m + n + 1)"
      },
      {
        "explanation": "So the rule is: Odd \\(+\\) Odd \\(=\\) Even, always. It surprises many people that adding two ODD numbers always gives an EVEN answer.",
        "workingOut": "\\text{even}"
      }
    ],
    "options": [
      { "text": "even", "imageUrl": "" },
      { "text": "odd", "imageUrl": "" }
    ],
    "answer": "0"
  },
  {
    "id": "y7-2b-q5c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Odd and even numbers",
    "question": "Complete the sentence: The sum of an odd number and an even number is an ______ number.",
    "hint": "Try an example: 3 + 4 = ?",
    "solutionSteps": [
      {
        "explanation": "Try some examples first: \\(3 + 4 = 7\\) and \\(10 + 5 = 15\\). Both answers are odd.",
        "workingOut": "3 + 4 = 7,\\quad 10 + 5 = 15"
      },
      {
        "explanation": "See WHY it always works: the odd number has \\(1\\) left over and the even number has none — so exactly \\(1\\) is still left over at the end.",
        "workingOut": "(2m + 1) + 2n = 2(m + n) + 1"
      },
      {
        "explanation": "So the rule is: Odd \\(+\\) Even \\(=\\) Odd, always.",
        "workingOut": "\\text{odd}"
      }
    ],
    "options": [
      { "text": "even", "imageUrl": "" },
      { "text": "odd", "imageUrl": "" }
    ],
    "answer": "1"
  },
  {
    "id": "y7-2b-q6ai",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Odd and even numbers",
    "question": "Write down the product:\n\\( 6 \\times 8 \\)",
    "hint": "Multiply 6 by 8.",
    "solutionSteps": [
      {
        "explanation": "Use the times table: \\(6 \\times 8\\) means \\(6\\) groups of \\(8\\).",
        "workingOut": "6 \\times 8 = 48"
      },
      {
        "explanation": "Notice the parity: even \\(\\times\\) even gives an even answer, and \\(48\\) is even — this matches the rule for this topic."
      }
    ],
    "options": [
      { "text": "48", "imageUrl": "" },
      { "text": "42", "imageUrl": "" },
      { "text": "54", "imageUrl": "" },
      { "text": "46", "imageUrl": "" }
    ],
    "answer": "0"
  },
  {
    "id": "y7-2b-q6aii",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Odd and even numbers",
    "question": "Write down the product:\n\\( 6 \\times 5 \\)",
    "hint": "Multiply 6 by 5.",
    "solutionSteps": [
      {
        "explanation": "Use the times table: \\(6 \\times 5\\) means \\(6\\) groups of \\(5\\).",
        "workingOut": "6 \\times 5 = 30"
      },
      {
        "explanation": "Notice the parity: even \\(\\times\\) odd gives an even answer, and \\(30\\) is even — one even factor is enough to make the whole product even."
      }
    ],
    "options": [
      { "text": "30", "imageUrl": "" },
      { "text": "35", "imageUrl": "" },
      { "text": "36", "imageUrl": "" },
      { "text": "25", "imageUrl": "" }
    ],
    "answer": "0"
  },
  {
    "id": "y7-2b-q6aiii",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Odd and even numbers",
    "question": "Write down the product:\n\\( 7 \\times 5 \\)",
    "hint": "Multiply 7 by 5.",
    "solutionSteps": [
      {
        "explanation": "Use the times table: \\(7 \\times 5\\) means \\(7\\) groups of \\(5\\).",
        "workingOut": "7 \\times 5 = 35"
      },
      {
        "explanation": "Notice the parity: odd \\(\\times\\) odd gives an odd answer, and \\(35\\) is odd — there is no factor \\(2\\) anywhere in \\(7 \\times 5\\)."
      }
    ],
    "options": [
      { "text": "35", "imageUrl": "" },
      { "text": "30", "imageUrl": "" },
      { "text": "42", "imageUrl": "" },
      { "text": "45", "imageUrl": "" }
    ],
    "answer": "0"
  },
  {
    "id": "y7-2b-q6bi",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Odd and even numbers",
    "question": "Make the statement true: The product of two even numbers is an ______ number.",
    "hint": "Try an example: 2 * 4 = 8.",
    "solutionSteps": [
      {
        "explanation": "Try some examples first: \\(2 \\times 4 = 8\\) and \\(6 \\times 8 = 48\\). Both answers are even.",
        "workingOut": "2 \\times 4 = 8,\\quad 6 \\times 8 = 48"
      },
      {
        "explanation": "See WHY it always works: each even number contains a factor of \\(2\\), so the product contains a factor of \\(2\\) as well (two of them, in fact).",
        "workingOut": "2m \\times 2n = 2(2mn)"
      },
      {
        "explanation": "So the rule is: Even \\(\\times\\) Even \\(=\\) Even, always.",
        "workingOut": "\\text{even}"
      }
    ],
    "options": [
      { "text": "even", "imageUrl": "" },
      { "text": "odd", "imageUrl": "" }
    ],
    "answer": "0"
  },
  {
    "id": "y7-2b-q6bii",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Odd and even numbers",
    "question": "Make the statement true: The product of two odd numbers is an ______ number.",
    "hint": "Try an example: 3 * 5 = 15.",
    "solutionSteps": [
      {
        "explanation": "Try some examples first: \\(3 \\times 5 = 15\\) and \\(7 \\times 9 = 63\\). Both answers are odd.",
        "workingOut": "3 \\times 5 = 15,\\quad 7 \\times 9 = 63"
      },
      {
        "explanation": "See WHY it always works: a product is even only if a factor of \\(2\\) sneaks in somewhere. Odd numbers contain no factor of \\(2\\), so the product cannot be even.",
        "workingOut": "(2m + 1)(2n + 1) = 2(2mn + m + n) + 1"
      },
      {
        "explanation": "So the rule is: Odd \\(\\times\\) Odd \\(=\\) Odd, always.",
        "workingOut": "\\text{odd}"
      }
    ],
    "options": [
      { "text": "even", "imageUrl": "" },
      { "text": "odd", "imageUrl": "" }
    ],
    "answer": "1"
  },
  {
    "id": "y7-2b-q6biii",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Odd and even numbers",
    "question": "Make the statement true: The product of an odd number and an even number is an ______ number.",
    "hint": "Try an example: 3 * 4 = 12.",
    "solutionSteps": [
      {
        "explanation": "Try some examples first: \\(3 \\times 4 = 12\\) and \\(5 \\times 6 = 30\\). Both answers are even.",
        "workingOut": "3 \\times 4 = 12,\\quad 5 \\times 6 = 30"
      },
      {
        "explanation": "See WHY it always works: the even number brings a factor of \\(2\\) into the product, and one factor of \\(2\\) is enough to make the whole product even.",
        "workingOut": "(2m + 1) \\times 2n = 2n(2m + 1)"
      },
      {
        "explanation": "So the rule is: Odd \\(\\times\\) Even \\(=\\) Even, always."
      }
    ],
    "options": [
      { "text": "even", "imageUrl": "" },
      { "text": "odd", "imageUrl": "" }
    ],
    "answer": "0"
  },
  {
    "id": "y7-2b-q7a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Odd and even numbers",
    "question": "Olivia notices that writing reflected in one mirror is unreadable, but that writing reflected in two mirrors is readable again. State whether it would be readable or unreadable after 5 reflections.",
    "hint": "Odd number of reflections are unreadable, even are readable.",
    "solutionSteps": [
      {
        "explanation": "Find the pattern first: \\(1\\) reflection = unreadable, \\(2\\) reflections = readable, \\(3\\) = unreadable, \\(4\\) = readable, \\(\\dots\\) Each extra reflection flips the writing back again."
      },
      {
        "explanation": "So only the PARITY of the number of reflections matters: odd number of reflections = unreadable, even number = readable."
      },
      {
        "explanation": "Decide whether \\(5\\) is odd or even: \\(5\\) ends in \\(5\\), so it is odd.",
        "workingOut": "5 = 2 \\times 2 + 1"
      },
      {
        "explanation": "An odd number of reflections leaves the writing flipped, so after \\(5\\) reflections it is unreadable.",
        "workingOut": "\\text{unreadable}"
      }
    ],
    "options": [
      { "text": "readable", "imageUrl": "" },
      { "text": "unreadable", "imageUrl": "" }
    ],
    "answer": "1"
  },
  {
    "id": "y7-2b-q7b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Odd and even numbers",
    "question": "Olivia notices that writing reflected in one mirror is unreadable, but that writing reflected in two mirrors is readable again. State whether it would be readable or unreadable after 8 reflections.",
    "hint": "Odd number of reflections are unreadable, even are readable.",
    "solutionSteps": [
      {
        "explanation": "Find the pattern first: \\(1\\) reflection = unreadable, \\(2\\) reflections = readable, \\(3\\) = unreadable, \\(4\\) = readable, \\(\\dots\\) Each extra reflection flips the writing back again."
      },
      {
        "explanation": "So only the PARITY of the number of reflections matters: odd number of reflections = unreadable, even number = readable."
      },
      {
        "explanation": "Decide whether \\(8\\) is odd or even: \\(8\\) ends in \\(8\\), so it is even.",
        "workingOut": "8 = 2 \\times 4"
      },
      {
        "explanation": "An even number of reflections flips the writing back to normal, so after \\(8\\) reflections it is readable.",
        "workingOut": "\\text{readable}"
      }
    ],
    "options": [
      { "text": "readable", "imageUrl": "" },
      { "text": "unreadable", "imageUrl": "" }
    ],
    "answer": "0"
  },
  {
    "id": "y7-2b-q7c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Odd and even numbers",
    "question": "Olivia notices that writing reflected in one mirror is unreadable, but that writing reflected in two mirrors is readable again. State whether it would be readable or unreadable after 15 reflections.",
    "hint": "Odd number of reflections are unreadable, even are readable.",
    "solutionSteps": [
      {
        "explanation": "Find the pattern first: \\(1\\) reflection = unreadable, \\(2\\) reflections = readable, \\(3\\) = unreadable, \\(4\\) = readable, \\(\\dots\\) Each extra reflection flips the writing back again."
      },
      {
        "explanation": "So only the PARITY of the number of reflections matters: odd number of reflections = unreadable, even number = readable."
      },
      {
        "explanation": "Decide whether \\(15\\) is odd or even: \\(15\\) ends in \\(5\\), so it is odd.",
        "workingOut": "15 = 2 \\times 7 + 1"
      },
      {
        "explanation": "An odd number of reflections leaves the writing flipped, so after \\(15\\) reflections it is unreadable.",
        "workingOut": "\\text{unreadable}"
      }
    ],
    "options": [
      { "text": "readable", "imageUrl": "" },
      { "text": "unreadable", "imageUrl": "" }
    ],
    "answer": "1"
  },
  {
    "id": "y7-2b-q7d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Odd and even numbers",
    "question": "Olivia notices that writing reflected in one mirror is unreadable, but that writing reflected in two mirrors is readable again. State whether it would be readable or unreadable after 2224 reflections.",
    "hint": "Odd number of reflections are unreadable, even are readable.",
    "solutionSteps": [
      {
        "explanation": "Find the pattern first: \\(1\\) reflection = unreadable, \\(2\\) reflections = readable, \\(3\\) = unreadable, \\(4\\) = readable, \\(\\dots\\) Each extra reflection flips the writing back again."
      },
      {
        "explanation": "So only the PARITY of the number of reflections matters: odd number of reflections = unreadable, even number = readable."
      },
      {
        "explanation": "For a big number like \\(2224\\), do not count — just look at the LAST digit. It ends in \\(4\\), so \\(2224\\) is even.",
        "workingOut": "2224 = 2 \\times 1112"
      },
      {
        "explanation": "An even number of reflections flips the writing back to normal, so after \\(2224\\) reflections it is readable.",
        "workingOut": "\\text{readable}"
      }
    ],
    "options": [
      { "text": "readable", "imageUrl": "" },
      { "text": "unreadable", "imageUrl": "" }
    ],
    "answer": "0"
  },
  {
    "id": "y7-2b-q8",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Odd and even numbers",
    "question": "Hosni has lined up all his toy soldiers on a table in front of a mirror. He counts all the soldiers he can see, including those in the mirror. Will the number of soldiers be an odd or an even number?",
    "hint": "Each real soldier has exactly one mirror reflection.",
    "solutionSteps": [
      {
        "explanation": "Say Hosni has \\(N\\) real soldiers. The mirror shows exactly one reflection for each real soldier — that is another \\(N\\) soldiers in the mirror."
      },
      {
        "explanation": "The total he can see is the real soldiers plus the reflections.",
        "workingOut": "N + N = 2N"
      },
      {
        "explanation": "\\(2N\\) means \"double something\", and doubling ANY whole number always gives an even number — it does not matter how many soldiers Hosni actually has."
      },
      {
        "explanation": "Try it with a small example to be sure: \\(3\\) real soldiers give \\(3\\) reflections, and \\(3 + 3 = 6\\), which is even.",
        "workingOut": "\\text{even}"
      }
    ],
    "options": [
      { "text": "odd", "imageUrl": "" },
      { "text": "even", "imageUrl": "" }
    ],
    "answer": "1"
  }
];
