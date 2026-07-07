export const Y8_CH3F_QUESTIONS = [
  {
    "id": "y8-3f-q1a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 45,
    "question": "Find all the factors of \\\\(18\\\\).",
    "t": "Review of factors and indices",
    "hint": "Factors are numbers that divide 18 exactly without remainder. Find them in pairs.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(1, 2, 3, 4, 6, 9, 18\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(1, 2, 3, 6, 9, 18\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(2, 3, 6, 9\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(1, 2, 3, 6, 12, 18\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "To find all factors, we test divisibility starting from 1. We list factors in multiplication pairs.",
        "workingOut": "\\\\(1 \\\\times 18 = 18\\\\)",
        "graphData": null
      },
      {
        "explanation": "Test 2 since 18 is even. Then test 3.",
        "workingOut": "\\\\(2 \\\\times 9 = 18, \\\\quad 3 \\\\times 6 = 18\\\\)",
        "graphData": null
      },
      {
        "explanation": "Test 4 and 5. Neither divides 18 exactly. The next integer is 6, which is already in our list, so we have found all pairs.",
        "workingOut": "\\\\(\\text{Pairs}: (1, 18), (2, 9), (3, 6)\\\\)",
        "graphData": null
      },
      {
        "explanation": "Combine and sort these values in ascending order to list all distinct factors of 18.",
        "workingOut": "\\\\(\\\\text{Factors} = \\{1, 2, 3, 6, 9, 18\\}\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q1b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 45,
    "question": "Find all the factors of \\\\(19\\\\).",
    "t": "Review of factors and indices",
    "hint": "Is 19 a prime number?",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(1, 3, 9, 19\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(1, 2, 19\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(1, 19\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(19\\\\) only",
        "imageUrl": ""
      }
    ],
    "answer": 2,
    "solutionSteps": [
      {
        "explanation": "We check integers starting from 1 to see if they divide 19 exactly.",
        "workingOut": "\\\\(1 \\\\times 19 = 19\\\\)",
        "graphData": null
      },
      {
        "explanation": "We test divisibility by prime numbers up to the square root of 19 (which is approximately 4.36). None of 2, 3, or 4 divide 19 exactly.",
        "workingOut": "\\\\(19 \\\\div 2 = 9.5, \\\\quad 19 \\\\div 3 = 6.33\\\\)",
        "graphData": null
      },
      {
        "explanation": "Since 19 has no positive divisors other than 1 and itself, it is a prime number.",
        "workingOut": "\\\\(\\\\text{Factors of } 19 = \\{1, 19\\}\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q1c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 60,
    "question": "Find all the factors of \\\\(140\\\\).",
    "t": "Review of factors and indices",
    "hint": "List all divisibility pairs starting from 1.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(1, 2, 4, 5, 7, 10, 14, 20, 28, 35, 70, 140\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(1, 2, 4, 5, 7, 10, 14, 20, 35, 70, 140\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(1, 2, 5, 7, 10, 14, 20, 28, 35, 70, 140\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(1, 2, 4, 5, 7, 10, 12, 14, 20, 28, 70, 140\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "Find all factor pairs starting from 1.",
        "workingOut": "\\\\(1 \\\\times 140 = 140, \\\\quad 2 \\\\times 70 = 140\\\\)",
        "graphData": null
      },
      {
        "explanation": "Check divisibility by 3 (fails), 4, 5, and 7.",
        "workingOut": "\\\\(4 \\\\times 35 = 140, \\\\quad 5 \\\\times 28 = 140, \\\\quad 7 \\\\times 20 = 140\\\\)",
        "graphData": null
      },
      {
        "explanation": "Check divisibility by 8, 9 (fail), and 10.",
        "workingOut": "\\\\(10 \\\\times 14 = 140\\\\)",
        "graphData": null
      },
      {
        "explanation": "No other integers between 10 and 14 divide 140. Combine all pairs in order.",
        "workingOut": "\\\\(\\\\text{Factors} = \\{1, 2, 4, 5, 7, 10, 14, 20, 28, 35, 70, 140\\}\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q1d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 60,
    "question": "Find all the factors of \\\\(105\\\\).",
    "t": "Review of factors and indices",
    "hint": "List factor pairs. Since it is odd, skip even numbers.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(1, 3, 5, 7, 12, 15, 21, 35, 105\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(1, 3, 5, 7, 15, 21, 35, 105\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(3, 5, 7, 15, 21, 35\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(1, 3, 5, 15, 21, 35, 105\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "Find factor pairs beginning with 1. Since 105 is odd, skip even integers.",
        "workingOut": "\\\\(1 \\\\times 105 = 105, \\\\quad 3 \\\\times 35 = 105\\\\)",
        "graphData": null
      },
      {
        "explanation": "Check divisibility by 5 and 7.",
        "workingOut": "\\\\(5 \\\\times 21 = 105, \\\\quad 7 \\\\times 15 = 105\\\\)",
        "graphData": null
      },
      {
        "explanation": "No integers between 7 and 15 other than these divide 105 exactly. List all factors.",
        "workingOut": "\\\\(\\\\text{Factors} = \\{1, 3, 5, 7, 15, 21, 35, 105\\}\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q1e",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 45,
    "question": "Find all the factors of \\\\(46\\\\).",
    "t": "Review of factors and indices",
    "hint": "List divisibility pairs starting from 1.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(1, 2, 23, 46\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(1, 2, 4, 23, 46\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(1, 2, 13, 23, 46\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(2, 23\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "Begin with 1 and 46.",
        "workingOut": "\\\\(1 \\\\times 46 = 46\\\\)",
        "graphData": null
      },
      {
        "explanation": "Since 46 is even, divide by 2.",
        "workingOut": "\\\\(2 \\\\times 23 = 46\\\\)",
        "graphData": null
      },
      {
        "explanation": "23 is a prime number, so there are no other integer factors between 2 and 23.",
        "workingOut": "\\\\(\\\\text{Factors} = \\{1, 2, 23, 46\\}\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q1f",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 60,
    "question": "Find all the factors of \\\\(100\\\\).",
    "t": "Review of factors and indices",
    "hint": "List all factor pairs. 100 is a square number.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(1, 2, 4, 5, 10, 20, 50, 100\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(1, 2, 4, 5, 10, 20, 25, 50, 100\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(1, 2, 5, 10, 20, 25, 50, 100\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(1, 2, 4, 5, 8, 10, 20, 25, 50, 100\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "List factor pairs starting from 1.",
        "workingOut": "\\\\(1 \\\\times 100 = 100, \\\\quad 2 \\\\times 50 = 100\\\\)",
        "graphData": null
      },
      {
        "explanation": "Check 4 and 5.",
        "workingOut": "\\\\(4 \\\\times 25 = 100, \\\\quad 5 \\\\times 20 = 100\\\\)",
        "graphData": null
      },
      {
        "explanation": "Since 100 is a perfect square, 10 pairs with itself.",
        "workingOut": "\\\\(10 \\\\times 10 = 100\\\\)",
        "graphData": null
      },
      {
        "explanation": "Combine all distinct factors in order.",
        "workingOut": "\\\\(\\\\text{Factors} = \\{1, 2, 4, 5, 10, 20, 25, 50, 100\\}\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q2",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 60,
    "question": "Which of the following lists all the prime numbers between \\\\(60\\\\) and \\\\(100\\\\)?",
    "t": "Review of factors and indices",
    "hint": "Primes have no divisors other than 1 and themselves. Check odd numbers in this range.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(61, 67, 71, 73, 79, 83, 89, 91, 97\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(61, 67, 71, 73, 79, 83, 87, 89, 97\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(61, 67, 71, 73, 79, 83, 89, 97\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(61, 67, 71, 73, 77, 79, 83, 89, 97\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 2,
    "solutionSteps": [
      {
        "explanation": "We test odd numbers in the range 60 to 100, as even numbers greater than 2 are not prime.",
        "workingOut": "\\\\(\\text{Check: } 61, 63, 65, \\\\ldots, 99\\\\)",
        "graphData": null
      },
      {
        "explanation": "Eliminate numbers ending in 5 (multiples of 5) and numbers whose digits sum to a multiple of 3.",
        "workingOut": "\\\\(63, 69, 75, 81, 87, 93, 99 \\text{ are multiples of 3. } 65, 85, 95 \\text{ end in 5.}\\\\)",
        "graphData": null
      },
      {
        "explanation": "Eliminate multiples of 7 (e.g. 77, 91). Note: \\\\(91 = 7 \\\\times 13\\\\).",
        "workingOut": "\\\\(77 = 7 \\\\times 11, \\\\quad 91 = 7 \\\\times 13\\\\)",
        "graphData": null
      },
      {
        "explanation": "The remaining numbers have no small prime factors and are prime.",
        "workingOut": "\\\\(\\\\text{Primes} = \\{61, 67, 71, 73, 79, 83, 89, 97\\}\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q3a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the lowest common multiple (LCM) of \\\\(4\\\\) and \\\\(28\\\\).",
    "t": "Review of factors and indices",
    "hint": "Does 4 divide into 28 exactly?",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(4\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(28\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(56\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(112\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "Since 28 is a multiple of 4, the lowest multiple they share is 28 itself.",
        "workingOut": "\\\\(28 = 4 \\\\times 7\\\\)",
        "graphData": null
      },
      {
        "explanation": "When the larger number is divisible by the smaller, the LCM is the larger number.",
        "workingOut": "\\\\(\\\\text{LCM}(4, 28) = 28\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q3b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 45,
    "question": "Find the lowest common multiple (LCM) of \\\\(12\\\\) and \\\\(30\\\\).",
    "t": "Review of factors and indices",
    "hint": "Write the prime factorisations of both numbers.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(60\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(120\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(30\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(360\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "Prime factorise both numbers.",
        "workingOut": "\\\\(12 = 2^2 \\\\times 3, \\\\quad 30 = 2 \\\\times 3 \\\\times 5\\\\)",
        "graphData": null
      },
      {
        "explanation": "To find the LCM, take the highest power of each prime factor present in either number.",
        "workingOut": "\\\\(\\text{Highest powers}: 2^2, 3^1, 5^1\\\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply these powers together.",
        "workingOut": "\\\\(\\text{LCM} = 4 \\\\times 3 \\\\times 5 = 60\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q3c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 60,
    "question": "Find the lowest common multiple (LCM) of \\\\(140\\\\) and \\\\(55\\\\).",
    "t": "Review of factors and indices",
    "hint": "Find the prime factorisation of 140 and 55.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(7700\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(1540\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(385\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(3080\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "Find prime factorisations.",
        "workingOut": "\\\\(140 = 2^2 \\\\times 5 \\\\times 7, \\\\quad 55 = 5 \\\\times 11\\\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the highest powers of all prime factors present: \\\\(2^2, 5^1, 7^1, 11^1\\\\).",
        "workingOut": "\\\\(\\text{LCM} = 2^2 \\\\times 5 \\\\times 7 \\\\times 11\\\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the product.",
        "workingOut": "\\\\(\\text{LCM} = 20 \\\\times 77 = 1540\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q3d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 60,
    "question": "Find the lowest common multiple (LCM) of \\\\(15\\\\), \\\\(20\\\\) and \\\\(50\\\\).",
    "t": "Review of factors and indices",
    "hint": "Find prime factorisations and take the highest power of each prime.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(3000\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(150\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(300\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(600\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 2,
    "solutionSteps": [
      {
        "explanation": "Prime factorise all three numbers.",
        "workingOut": "\\\\(15 = 3 \\\\times 5, \\\\quad 20 = 2^2 \\\\times 5, \\\\quad 50 = 2 \\\\times 5^2\\\\)",
        "graphData": null
      },
      {
        "explanation": "Take the highest power of each prime factor present: \\\\(2^2, 3^1, 5^2\\\\).",
        "workingOut": "\\\\(\\text{LCM} = 2^2 \\\\times 3 \\\\times 5^2\\\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the final product.",
        "workingOut": "\\\\(\\text{LCM} = 4 \\\\times 3 \\\\times 25 = 12 \\\\times 25 = 300\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q4a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the highest common factor (HCF) of \\\\(13\\\\) and \\\\(20\\\\).",
    "t": "Review of factors and indices",
    "hint": "Is 13 a prime number?",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(1\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(13\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(2\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(260\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "13 is a prime number. Its only factors are 1 and 13.",
        "workingOut": "\\\\(\\text{Factors of } 13 = \\{1, 13\\}\\\\)",
        "graphData": null
      },
      {
        "explanation": "13 does not divide 20 exactly, so 13 is not a factor of 20.",
        "workingOut": "\\\\(20 = 13 \\\\times 1 + 7\\\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore, the only common factor they share is 1.",
        "workingOut": "\\\\(\\\\text{HCF}(13, 20) = 1\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q4b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 45,
    "question": "Find the highest common factor (HCF) of \\\\(84\\\\) and \\\\(35\\\\).",
    "t": "Review of factors and indices",
    "hint": "Prime factorise both numbers.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(7\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(14\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(5\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(420\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "Prime factorise 84 and 35.",
        "workingOut": "\\\\(84 = 2^2 \\\\times 3 \\\\times 7, \\\\quad 35 = 5 \\\\times 7\\\\)",
        "graphData": null
      },
      {
        "explanation": "Identify shared prime factors. The only shared prime is 7 (power 1).",
        "workingOut": "\\\\(\\\\text{HCF} = 7\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q4c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 45,
    "question": "Find the highest common factor (HCF) of \\\\(120\\\\) and \\\\(36\\\\).",
    "t": "Review of factors and indices",
    "hint": "Prime factorise both and take the lowest power of shared primes.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(6\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(12\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(18\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(360\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "Prime factorise 120 and 36.",
        "workingOut": "\\\\(120 = 2^3 \\\\times 3 \\\\times 5, \\\\quad 36 = 2^2 \\\\times 3^2\\\\)",
        "graphData": null
      },
      {
        "explanation": "Take the lowest power of each shared prime factor: \\\\(2^2\\\\) and \\\\(3^1\\\\).",
        "workingOut": "\\\\(\\\\text{HCF} = 2^2 \\\\times 3 = 12\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q4d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 60,
    "question": "Find the highest common factor (HCF) of \\\\(420\\\\), \\\\(280\\\\) and \\\\(700\\\\).",
    "t": "Review of factors and indices",
    "hint": "Prime factorise all three and find shared primes with lowest powers.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(70\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(140\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(280\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(10\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "Prime factorise all three numbers.",
        "workingOut": "\\\\(\\begin{aligned} 420 &= 2^2 \\\\times 3 \\\\times 5 \\\\times 7 \\\\ 280 &= 2^3 \\\\times 5 \\\\times 7 \\\\ 700 &= 2^2 \\\\times 5^2 \\\\times 7 \\end{aligned}\\\\)",
        "graphData": null
      },
      {
        "explanation": "Identify shared prime factors present in all three: 2, 5, and 7. Take their lowest powers: \\\\(2^2, 5^1, 7^1\\\\).",
        "workingOut": "\\\\(\\text{HCF} = 2^2 \\\\times 5 \\\\times 7\\\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply to find the final HCF.",
        "workingOut": "\\\\(\\text{HCF} = 4 \\\\times 5 \\\\times 7 = 140\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q5a1",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 60,
    "question": "For the numbers \\\\(18\\\\) and \\\\(42\\\\), find the product of their HCF and LCM.",
    "t": "Review of factors and indices",
    "hint": "Calculate HCF and LCM first, then multiply them.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(378\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(756\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(252\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(180\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "First, find the prime factorisations.",
        "workingOut": "\\\\(18 = 2 \\\\times 3^2, \\\\quad 42 = 2 \\\\times 3 \\\\times 7\\\\)",
        "graphData": null
      },
      {
        "explanation": "Find HCF (lowest powers of shared primes) and LCM (highest powers of all primes).",
        "workingOut": "\\\\(\\text{HCF} = 2 \\\\times 3 = 6, \\\\quad \\text{LCM} = 2 \\\\times 3^2 \\\\times 7 = 126\\\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply HCF and LCM.",
        "workingOut": "\\\\(\\text{Product} = 6 \\\\times 126 = 756\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q5a2",
    "type": "teacher_review",
    "difficulty": "easy",
    "question": "For the numbers $18$ and $42$, compare the product of their HCF and LCM to the product of the original pair. What do you notice?",
    "a": "The product of the HCF and LCM of 18 and 42 is equal to the product of the original numbers (18 × 42 = 756).",
    "solution": "The product of the HCF and LCM of 18 and 42 is equal to the product of the original numbers (18 × 42 = 756).",
    "t": "Review of factors and indices",
    "hint": "Calculate the product of the original pair.",
    "solutionSteps": [
      {
        "explanation": "Calculate the product of the HCF and LCM from the previous step.",
        "workingOut": "\\\\(\\text{HCF} \\\\times \\text{LCM} = 6 \\\\times 126 = 756\\\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the product of the original numbers.",
        "workingOut": "\\\\(\\text{Product} = 18 \\\\times 42 = 756\\\\)",
        "graphData": null
      },
      {
        "explanation": "Compare the two results to conclude they are equal.",
        "workingOut": "\\\\(756 = 756 \\\\quad \\\\checkmark\\\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y8-3f-q5b1",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 60,
    "question": "For the numbers \\\\(60\\\\) and \\\\(48\\\\), find the product of their HCF and LCM.",
    "t": "Review of factors and indices",
    "hint": "Recall that HCF(a,b) × LCM(a,b) = a × b.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(2880\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(1440\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(5760\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(120\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "Use the mathematical identity: for any two positive integers \\\\(a\\\\) and \\\\(b\\\\), the product of their HCF and LCM equals their product.",
        "workingOut": "\\\\(\\text{HCF}(a, b) \\\\times \\text{LCM}(a, b) = a \\\\times b\\\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given numbers: \\\\(a = 60\\\\) and \\\\(b = 48\\\\).",
        "workingOut": "\\\\(\\text{Product} = 60 \\\\times 48\\\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the multiplication.",
        "workingOut": "\\\\(\\text{Product} = 2880\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q5b2",
    "type": "teacher_review",
    "difficulty": "easy",
    "question": "For the numbers $60$ and $48$, compare the product of their HCF and LCM to the product of the original pair. What do you notice?",
    "a": "The product of the HCF and LCM of 60 and 48 is equal to the product of the original numbers (60 × 48 = 2880).",
    "solution": "The product of the HCF and LCM of 60 and 48 is equal to the product of the original numbers (60 × 48 = 2880).",
    "t": "Review of factors and indices",
    "hint": "Calculate the product of the original pair.",
    "solutionSteps": [
      {
        "explanation": "Calculate the product of the HCF and LCM from the previous step.",
        "workingOut": "\\\\(\\text{HCF} \\\\times \\text{LCM} = 12 \\\\times 240 = 2880\\\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the product of the original numbers.",
        "workingOut": "\\\\(\\text{Product} = 60 \\\\times 48 = 2880\\\\)",
        "graphData": null
      },
      {
        "explanation": "Compare the two results to conclude they are equal.",
        "workingOut": "\\\\(2880 = 2880 \\\\quad \\\\checkmark\\\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y8-3f-q6a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 45,
    "question": "Find the value of \\\\(x\\\\) that makes the statement true: \\\\(3^7 \\\\div 3^3 = 3^x\\\\)",
    "t": "Review of factors and indices",
    "hint": "Subtract the indices when dividing powers with the same base.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(10\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(21\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(4\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(5\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 2,
    "solutionSteps": [
      {
        "explanation": "Use the index law for division: \\\\(a^m \\\\div a^n = a^{m-n}\\\\).",
        "workingOut": "\\\\(3^7 \\\\div 3^3 = 3^{7-3}\\\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the exponents.",
        "workingOut": "\\\\(3^{7-3} = 3^4\\\\)",
        "graphData": null
      },
      {
        "explanation": "Equate the exponents to find \\\\(x\\\\).",
        "workingOut": "\\\\(x = 4\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q6b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 45,
    "question": "Find the value of \\\\(x\\\\) that makes the statement true: \\\\(7^4 \\\\times 7^2 = 7^x\\\\)",
    "t": "Review of factors and indices",
    "hint": "Add the indices when multiplying powers with the same base.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(8\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(6\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(2\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(14\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "Use the index law for multiplication: \\\\(a^m \\\\times a^n = a^{m+n}\\\\).",
        "workingOut": "\\\\(7^4 \\\\times 7^2 = 7^{4+2}\\\\)",
        "graphData": null
      },
      {
        "explanation": "Add the exponents.",
        "workingOut": "\\\\(7^{4+2} = 7^6\\\\)",
        "graphData": null
      },
      {
        "explanation": "Equate exponents.",
        "workingOut": "\\\\(x = 6\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q6c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 60,
    "question": "Find the value of \\\\(x\\\\) that makes the statement true: \\\\(9^2 \\\\times 9^3 = 3^x\\\\)",
    "t": "Review of factors and indices",
    "hint": "Convert the base 9 to base 3 first.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(5\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(6\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(10\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(12\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 2,
    "solutionSteps": [
      {
        "explanation": "First, combine the terms using multiplication law.",
        "workingOut": "\\\\(9^2 \\\\times 9^3 = 9^{2+3} = 9^5\\\\)",
        "graphData": null
      },
      {
        "explanation": "Express 9 as a power of 3: \\\\(9 = 3^2\\\\).",
        "workingOut": "\\\\(9^5 = (3^2)^5\\\\)",
        "graphData": null
      },
      {
        "explanation": "Use the power of a power law: \\\\((a^m)^n = a^{m \\\\times n}\\\\).",
        "workingOut": "\\\\((3^2)^5 = 3^{2 \\\\times 5} = 3^{10}\\\\)",
        "graphData": null
      },
      {
        "explanation": "Equate exponents.",
        "workingOut": "\\\\(x = 10\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q6d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 60,
    "question": "Find the value of \\\\(x\\\\) that makes the statement true: \\\\(10^5 \\\\div 2^5 = x^5\\\\)",
    "t": "Review of factors and indices",
    "hint": "Use index law for division with different bases but the same exponent.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(5\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(8\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(20\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(12\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "Apply the power division law: \\\\(a^m \\\\div b^m = (a \\\\div b)^m\\\\).",
        "workingOut": "\\\\(10^5 \\\\div 2^5 = (10 \\\\div 2)^5\\\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the base division.",
        "workingOut": "\\\\((10 \\\\div 2)^5 = 5^5\\\\)",
        "graphData": null
      },
      {
        "explanation": "Equate bases.",
        "workingOut": "\\\\(x = 5\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q6e",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 45,
    "question": "Find the value of \\\\(x\\\\) that makes the statement true: \\\\((2^3)^2 = x\\\\)",
    "t": "Review of factors and indices",
    "hint": "Calculate the value inside the bracket first or apply index law.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(32\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(64\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(16\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(12\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "Apply power of a power law.",
        "workingOut": "\\\\((2^3)^2 = 2^{3 \\\\times 2} = 2^6\\\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the value of \\\\(2^6\\\\).",
        "workingOut": "\\\\(2^6 = 64\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q6f",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 45,
    "question": "Find the value of \\\\(x\\\\) that makes the statement true: \\\\(x^4 \\\\div 8^4 = 1\\\\)",
    "t": "Review of factors and indices",
    "hint": "If division of two non-zero numbers equals 1, they must be equal.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(1\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(4\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(8\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(16\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 2,
    "solutionSteps": [
      {
        "explanation": "A number divided by itself equals 1 (for non-zero numbers).",
        "workingOut": "\\\\(\\text{If } \\frac{A}{B} = 1 \\implies A = B\\\\)",
        "graphData": null
      },
      {
        "explanation": "Apply this to the terms.",
        "workingOut": "\\\\(x^4 = 8^4\\\\)",
        "graphData": null
      },
      {
        "explanation": "Since the exponents are equal, the positive base must be equal.",
        "workingOut": "\\\\(x = 8\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q6g",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 60,
    "question": "Find the value of \\\\(x\\\\) that makes the statement true: \\\\(2^4 \\\\times 2^x = 64\\\\)",
    "t": "Review of factors and indices",
    "hint": "Express 64 as a power of 2.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(4\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(2\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(3\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(6\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "Express 64 as a power of 2.",
        "workingOut": "\\\\(64 = 2^6\\\\)",
        "graphData": null
      },
      {
        "explanation": "Use multiplication law on LHS.",
        "workingOut": "\\\\(2^{4+x} = 2^6\\\\)",
        "graphData": null
      },
      {
        "explanation": "Equate exponents and solve.",
        "workingOut": "\\\\(4 + x = 6 \\implies x = 2\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q6h",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 60,
    "question": "Find the value of \\\\(x\\\\) that makes the statement true: \\\\((4^x)^3 = 4^{15}\\\\)",
    "t": "Review of factors and indices",
    "hint": "Apply the power of a power law.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(5\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(12\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(3\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(4\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "Apply power law on LHS.",
        "workingOut": "\\\\(4^{3x} = 4^{15}\\\\)",
        "graphData": null
      },
      {
        "explanation": "Equate exponents.",
        "workingOut": "\\\\(3x = 15\\\\)",
        "graphData": null
      },
      {
        "explanation": "Divide by 3.",
        "workingOut": "\\\\(x = 5\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q6i",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the value of \\\\(x\\\\) that makes the statement true: \\\\((5^{12} \\\\div 5^8)^x = 5^{20}\\\\)",
    "t": "Review of factors and indices",
    "hint": "Simplify inside brackets first.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(4\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(2\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(5\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(10\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 2,
    "solutionSteps": [
      {
        "explanation": "Apply division index law inside the brackets.",
        "workingOut": "\\\\(5^{12} \\\\div 5^8 = 5^{12-8} = 5^4\\\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute back into the equation.",
        "workingOut": "\\\\((5^4)^x = 5^{20}\\\\)",
        "graphData": null
      },
      {
        "explanation": "Apply power law.",
        "workingOut": "\\\\(5^{4x} = 5^{20}\\\\)",
        "graphData": null
      },
      {
        "explanation": "Equate exponents and solve.",
        "workingOut": "\\\\(4x = 20 \\implies x = 5\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q7a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Evaluate: \\\\(7^2\\\\)",
    "t": "Review of factors and indices",
    "hint": "Multiply 7 by itself.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(14\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(49\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(35\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(9\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "Exponent 2 means multiplying the base by itself.",
        "workingOut": "\\\\(7^2 = 7 \\\\times 7\\\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplication.",
        "workingOut": "\\\\(7 \\\\times 7 = 49\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q7b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Evaluate: \\\\(\\\\sqrt{144}\\\\)",
    "t": "Review of factors and indices",
    "hint": "Which positive number multiplied by itself is 144?",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(12\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(14\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(72\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(16\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "The square root operation finds a non-negative number which, when squared, yields 144.",
        "workingOut": "\\\\(x^2 = 144\\\\)",
        "graphData": null
      },
      {
        "explanation": "Since 12 × 12 = 144:",
        "workingOut": "\\\\(\\\\sqrt{144} = 12\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q7c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Evaluate: \\\\(\\\\sqrt{83^2}\\\\)",
    "t": "Review of factors and indices",
    "hint": "Squaring and taking the square root are inverse operations.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(166\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(83\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(6889\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(9\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "For any positive number \\\\(a\\\\), taking the square root of \\\\(a^2\\\\) simply yields \\\\(a\\\\). They undo each other.",
        "workingOut": "\\\\(\\\\sqrt{a^2} = a\\\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\\\(a = 83\\\\).",
        "workingOut": "\\\\(\\\\sqrt{83^2} = 83\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q7d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 60,
    "question": "Evaluate: \\\\(\\\\sqrt{3^6}\\\\)",
    "t": "Review of factors and indices",
    "hint": "Express the square root as exponent 1/2, or write 3^6 as a square.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(9\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(27\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(81\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(243\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "Express \\\\(3^6\\\\) as a square: \\\\(3^6 = (3^3)^2\\\\).",
        "workingOut": "\\\\(3^6 = 27^2\\\\)",
        "graphData": null
      },
      {
        "explanation": "Take the square root.",
        "workingOut": "\\\\(\\\\sqrt{27^2} = 27\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q7e",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 45,
    "question": "Evaluate: \\\\((5^2)^2\\\\)",
    "t": "Review of factors and indices",
    "hint": "Calculate inside brackets first, or apply index law.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(125\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(625\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(25\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(3125\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "Evaluate the bracket first.",
        "workingOut": "\\\\(5^2 = 25\\\\)",
        "graphData": null
      },
      {
        "explanation": "Square the result.",
        "workingOut": "\\\\(25^2 = 25 \\\\times 25 = 625\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q7f",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 60,
    "question": "Evaluate: \\\\(\\\\sqrt{3481}\\\\)",
    "t": "Review of factors and indices",
    "hint": "Estimate using known squares: 50^2 = 2500, 60^2 = 3600. It ends in 1.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(49\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(51\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(59\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(69\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 2,
    "solutionSteps": [
      {
        "explanation": "Observe that 3481 is between \\\\(2500 = 50^2\\\\) and \\\\(3600 = 60^2\\\\). Thus, its square root must be between 50 and 60.",
        "workingOut": "\\\\(50^2 < 3481 < 60^2\\\\)",
        "graphData": null
      },
      {
        "explanation": "The number ends in 1, so the square root must end in either 1 or 9.",
        "workingOut": "\\\\(\\text{Candidates}: 51 \\text{ or } 59\\\\)",
        "graphData": null
      },
      {
        "explanation": "Test 59.",
        "workingOut": "\\\\(59 \\\\times 59 = 3481 \\\\quad \\\\checkmark\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q7g",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 45,
    "question": "Evaluate: \\\\(20^3\\\\)",
    "t": "Review of factors and indices",
    "hint": "Calculate 20 × 20 × 20.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(6000\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(8000\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(400\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(800\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "Cubing means multiplying a base by itself twice.",
        "workingOut": "\\\\(20^3 = 20 \\\\times 20 \\\\times 20\\\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply.",
        "workingOut": "\\\\(20 \\\\times 20 = 400, \\\\quad 400 \\\\times 20 = 8000\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q8a1",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 60,
    "question": "Find all possible values of the missing digit \\\\(x\\\\) so that the number \\\\(34,82x\\\\) is divisible by \\\\(3\\\\).",
    "t": "Review of factors and indices",
    "hint": "A number is divisible by 3 if the sum of its digits is divisible by 3.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(1, 4, 7\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(0, 3, 6, 9\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(2, 5, 8\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(3, 6, 9\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "A number is divisible by 3 if and only if the sum of its digits is divisible by 3.",
        "workingOut": "\\\\(\\text{Sum} = 3 + 4 + 8 + 2 + x = 17 + x\\\\)",
        "graphData": null
      },
      {
        "explanation": "Find single digits \\\\(x\\\\) from 0 to 9 such that \\\\(17 + x\\\\) is a multiple of 3 (18, 21, 24).",
        "workingOut": "\\\\(\\begin{aligned} 17 + x &= 18 \\implies x = 1 \\\\ 17 + x &= 21 \\implies x = 4 \\\\ 17 + x &= 24 \\implies x = 7 \\end{aligned}\\\\)",
        "graphData": null
      },
      {
        "explanation": "List all solutions.",
        "workingOut": "\\\\(x \\\\in \\\\{1, 4, 7\\\\}\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q8a2",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 60,
    "question": "Find all possible values of the missing digit \\\\(x\\\\) so that the number \\\\(288x5\\\\) is divisible by \\\\(3\\\\).",
    "t": "Review of factors and indices",
    "hint": "Calculate the sum of the digits and check divisibility by 3.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(2, 5, 8\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(1, 4, 7\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(0, 3, 6, 9\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(3, 6, 9\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "Calculate sum of digits.",
        "workingOut": "\\\\(\\text{Sum} = 2 + 8 + 8 + x + 5 = 23 + x\\\\)",
        "graphData": null
      },
      {
        "explanation": "We need \\\\(23 + x\\\\) to be divisible by 3. The multiples of 3 larger than 23 are 24, 27, and 30.",
        "workingOut": "\\\\(\\begin{aligned} 23 + x &= 24 \\implies x = 1 \\\\ 23 + x &= 27 \\implies x = 4 \\\\ 23 + x &= 30 \\implies x = 7 \\end{aligned}\\\\)",
        "graphData": null
      },
      {
        "explanation": "List all solutions.",
        "workingOut": "\\\\(x \\\\in \\\\{1, 4, 7\\\\}\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q8a3",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 60,
    "question": "Find all possible values of the missing digit \\\\(x\\\\) (which cannot be 0) so that the number \\\\(x47\\\\) is divisible by \\\\(3\\\\).",
    "t": "Review of factors and indices",
    "hint": "Calculate digit sum. Note that x is the first digit, so x cannot be 0.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(1, 4, 7\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(2, 5, 8\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(0, 3, 6, 9\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(3, 6, 9\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "Digit sum of \\\\(x47\\\\) is:",
        "workingOut": "\\\\(\\text{Sum} = x + 4 + 7 = x + 11\\\\)",
        "graphData": null
      },
      {
        "explanation": "We need \\\\(x + 11\\\\) to be a multiple of 3 (12, 15, 18).",
        "workingOut": "\\\\(\\begin{aligned} x + 11 &= 12 \\implies x = 1 \\\\ x + 11 &= 15 \\implies x = 4 \\\\ x + 11 &= 18 \\implies x = 7 \\end{aligned}\\\\)",
        "graphData": null
      },
      {
        "explanation": "List solutions.",
        "workingOut": "\\\\(x \\\\in \\\\{1, 4, 7\\\\}\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q8b1",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 60,
    "question": "Find all possible values of the missing digit \\\\(x\\\\) so that the number \\\\(84,73x\\\\) is divisible by \\\\(6\\\\).",
    "t": "Review of factors and indices",
    "hint": "A number is divisible by 6 if it is even AND the sum of its digits is divisible by 3.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(2, 8\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\·(2, 5, 8\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(0, 6\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(4, 6\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "Divisibility by 6 requires the number to be divisible by both 2 and 3. For divisibility by 2, \\\\(x\\\\) must be even.",
        "workingOut": "\\\\(x \\\\in \\\\{0, 2, 4, 6, 8\\\\}\\\\)",
        "graphData": null
      },
      {
        "explanation": "For divisibility by 3, digit sum must be divisible by 3.",
        "workingOut": "\\\\(\\text{Sum} = 8+4+7+3+x = 22 + x\\\\)",
        "graphData": null
      },
      {
        "explanation": "Test only even candidates: 22+0=22 (no), 22+2=24 (yes), 22+4=26 (no), 22+6=28 (no), 22+8=30 (yes).",
        "workingOut": "\\\\(x = 2 \\text{ or } 8\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q8b2",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 60,
    "question": "Find all possible values of the missing digit \\\\(x\\\\) so that the number \\\\(2x04\\\\) is divisible by \\\\(6\\\\).",
    "t": "Review of factors and indices",
    "hint": "The number ends in 4, so it is even. Check digit sum divisibility by 3.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(1, 4, 7\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(0, 3, 6, 9\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(2, 5, 8\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(0, 6\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "The number ends in 4, so it is even (divisible by 2). We only need to ensure divisibility by 3.",
        "workingOut": "\\\\(\\text{Ends in } 4 \\implies \\text{even}\\\\)",
        "graphData": null
      },
      {
        "explanation": "Digit sum must be divisible by 3.",
        "workingOut": "\\\\(\\text{Sum} = 2 + x + 0 + 4 = 6 + x\\\\)",
        "graphData": null
      },
      {
        "explanation": "For \\\\(6+x\\\\) to be a multiple of 3, \\\\(x\\\\) must be a multiple of 3.",
        "workingOut": "\\\\(x \\\\in \\\\{0, 3, 6, 9\\\\}\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q8b3",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 60,
    "question": "Find all possible values of the missing digit \\\\(x\\\\) so that the number \\\\(333x\\\\) is divisible by \\\\(6\\\\).",
    "t": "Review of factors and indices",
    "hint": "x must be even. Check digit sum.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(0, 6\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(2, 8\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(0, 3, 6, 9\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(4, 6\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "For divisibility by 6, \\\\(x\\\\) must be an even digit.",
        "workingOut": "\\\\(x \\\\in \\\\{0, 2, 4, 6, 8\\\\}\\\\)",
        "graphData": null
      },
      {
        "explanation": "Digit sum must be a multiple of 3.",
        "workingOut": "\\\\(\\text{Sum} = 3 + 3 + 3 + x = 9 + x\\\\)",
        "graphData": null
      },
      {
        "explanation": "Test even digits: 9+0=9 (yes), 9+2=11 (no), 9+4=13 (no), 9+6=15 (yes), 9+8=17 (no).",
        "workingOut": "\\\\(x = 0 \\text{ or } 6\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q8c1",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the missing digit \\\\(x\\\\) so that the number \\\\(20x0\\\\) is divisible by \\\\(3, 4\\\\) and \\\\(5\\\\).",
    "t": "Review of factors and indices",
    "hint": "LCM of 3, 4 and 5 is 60. Ends in 0, so it is divisible by 5. For 4, the last two digits (x0) must be a multiple of 4.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(2\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(4\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(6\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(8\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "Divisibility by 5 is guaranteed since the last digit is 0. For divisibility by 4, the last two digits \\\\(x0\\\\) must be divisible by 4.",
        "workingOut": "\\\\(x0 \\in \\{00, 20, 40, 60, 80\\} \\implies x \\in \\{0, 2, 4, 6, 8\\}\\\\)",
        "graphData": null
      },
      {
        "explanation": "For divisibility by 3, digit sum must be divisible by 3.",
        "workingOut": "\\\\(\\text{Sum} = 2 + 0 + x + 0 = 2 + x\\\\)",
        "graphData": null
      },
      {
        "explanation": "Test candidates: 2+0=2, 2+2=4, 2+4=6 (yes!), 2+6=8, 2+8=10. The only valid digit is 4.",
        "workingOut": "\\\\(x = 4\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q8c2",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the missing digit \\\\(x\\\\) so that the number \\\\(121,92x\\\\) is divisible by \\\\(3, 4\\\\) and \\\\(5\\\\).",
    "t": "Review of factors and indices",
    "hint": "Any integer divisible by 5 must end in 0 or 5. If it is divisible by 4, it must also be even.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(0\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(5\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(4\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(2\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "For divisibility by 5, the last digit \\\\(x\\\\) must be 0 or 5. But for divisibility by 4, it must be even, so \\\\(x\\\\) must be 0.",
        "workingOut": "\\\\(x = 0\\\\)",
        "graphData": null
      },
      {
        "explanation": "Check if x = 0 satisfies divisibility by 3.",
        "workingOut": "\\\\(\\text{Sum} = 1 + 2 + 1 + 9 + 2 + 0 = 15 \\quad \\text{(divisible by 3)}\\\\)",
        "graphData": null
      },
      {
        "explanation": "Check if last two digits (20) are divisible by 4.",
        "workingOut": "\\\\(20 \\\\div 4 = 5 \\quad \\text{(divisible by 4)}\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q8c3",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find all possible values of the missing digit \\\\(x\\\\) so that the number \\\\(68x40\\\\) is divisible by \\\\(3, 4\\\\) and \\\\(5\\\\).",
    "t": "Review of factors and indices",
    "hint": "The number ends in 40, which is divisible by 4 and 5. Only check divisibility by 3.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(0, 3, 6, 9\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(1, 4, 7\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(2, 5, 8\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(0, 6\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "The last two digits are 40, which is divisible by 4, and it ends in 0, so it is divisible by 5. We only need to check divisibility by 3.",
        "workingOut": "\\\\(40 \\implies \\text{divisible by 4 and 5}\\\\)",
        "graphData": null
      },
      {
        "explanation": "Find the digit sum.",
        "workingOut": "\\\\(\\text{Sum} = 6 + 8 + x + 4 + 0 = 18 + x\\\\)",
        "graphData": null
      },
      {
        "explanation": "For \\\\(18 + x\\\\) to be a multiple of 3, \\\\(x\\\\) must be a multiple of 3.",
        "workingOut": "\\\\(x \\\\in \\\\{0, 3, 6, 9\\\\}\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q9",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the missing digit \\\\(x\\\\) so that the number \\\\(34x20\\\\) is divisible by \\\\(11\\\\).",
    "t": "Review of factors and indices",
    "hint": "The alternating sum of digits must be a multiple of 11 (including 0).",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(1\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(3\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(5\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(7\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "A number is divisible by 11 if the alternating sum of its digits is divisible by 11.",
        "workingOut": "\\\\(\\text{Alternating Sum} = (3 + x + 0) - (4 + 2) = x - 3\\\\)",
        "graphData": null
      },
      {
        "explanation": "We need \\\\(x - 3\\\\) to be divisible by 11. Since \\\\(x\\\\) is a digit (0 to 9), the only way is if the sum is 0.",
        "workingOut": "\\\\(x - 3 = 0 \\implies x = 3\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q10a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 60,
    "question": "Find the prime factorisation of \\\\(330\\\\).",
    "t": "Review of factors and indices",
    "hint": "Factorise 330 into prime factors in ascending order.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(2 \\\\times 3^2 \\\\times 5 \\\\times 11\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(2 \\\\times 3 \\\\times 5 \\\\times 11\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(2 \\\\times 5 \\\\times 33\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(6 \\\\times 5 \\\\times 11\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "Divide 330 by 2.",
        "workingOut": "\\\\(330 \\\\div 2 = 165\\\\)",
        "graphData": null
      },
      {
        "explanation": "165 is odd. Try dividing by 3.",
        "workingOut": "\\\\(165 \\\\div 3 = 55\\\\)",
        "graphData": null
      },
      {
        "explanation": "Divide 55 by 5.",
        "workingOut": "\\\\(55 \\\\div 5 = 11\\\\)",
        "graphData": null
      },
      {
        "explanation": "11 is prime. Write as product.",
        "workingOut": "\\\\(330 = 2 \\\\times 3 \\\\times 5 \\\\times 11\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q10b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 60,
    "question": "Find the prime factorisation of \\\\(2520\\\\).",
    "t": "Review of factors and indices",
    "hint": "Perform prime factorisation and write in index notation.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(2^3 \\\\times 3^2 \\\\times 5 \\\\times 7\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(2^2 \\\\times 3^2 \\\\times 5 \\\\times 7\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(2^3 \\\\times 3 \\\\times 5 \\\\times 7\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(8 \\\\times 9 \\\\times 5 \\\\times 7\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "Keep dividing by 2.",
        "workingOut": "\\\\(2520 \\\\div 2 = 1260 \\implies 1260 \\\\div 2 = 630 \\implies 630 \\\\div 2 = 315\\\\)",
        "graphData": null
      },
      {
        "explanation": "Divide 315 by 3.",
        "workingOut": "\\\\(315 \\\\div 3 = 105 \\implies 105 \\\\div 3 = 35\\\\)",
        "graphData": null
      },
      {
        "explanation": "Divide 35 by 5.",
        "workingOut": "\\\\(35 \\\\div 5 = 7\\\\)",
        "graphData": null
      },
      {
        "explanation": "Collect all factors using exponents.",
        "workingOut": "\\\\(2520 = 2^3 \\\\times 3^2 \\\\times 5 \\\\times 7\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q10c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 60,
    "question": "Find the prime factorisation of \\\\(228\\\\).",
    "t": "Review of factors and indices",
    "hint": "Divide by primes in ascending order.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(2 \\\\times 3 \\\\times 19\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(2^2 \\\\times 3 \\\\times 19\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(4 \\\\times 3 \\\\times 19\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(2^2 \\\\times 5 \\\\times 11\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "Divide by 2.",
        "workingOut": "\\\\(228 \\\\div 2 = 114 \\implies 114 \\\\div 2 = 57\\\\)",
        "graphData": null
      },
      {
        "explanation": "Divide 57 by 3.",
        "workingOut": "\\\\(57 \\\\div 3 = 19\\\\)",
        "graphData": null
      },
      {
        "explanation": "19 is prime. Write as product.",
        "workingOut": "\\\\(228 = 2^2 \\\\times 3 \\\\times 19\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q10d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 60,
    "question": "Find the prime factorisation of \\\\(1170\\\\).",
    "t": "Review of factors and indices",
    "hint": "Divide by primes.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(2 \\\\times 3^2 \\\\times 5 \\\\times 13\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(2^2 \\\\times 3 \\\\times 5 \\\\times 13\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(2 \\\\times 3 \\\\times 5 \\\\times 13\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(2 \\\\times 9 \\\\times 5 \\\\times 13\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "Divide 1170 by 2.",
        "workingOut": "\\\\(1170 \\\\div 2 = 585\\\\)",
        "graphData": null
      },
      {
        "explanation": "Divide 585 by 3.",
        "workingOut": "\\\\(585 \\\\div 3 = 195 \\implies 195 \\\\div 3 = 65\\\\)",
        "graphData": null
      },
      {
        "explanation": "Divide 65 by 5.",
        "workingOut": "\\\\(65 \\\\div 5 = 13\\\\)",
        "graphData": null
      },
      {
        "explanation": "13 is prime. Write in index form.",
        "workingOut": "\\\\(1170 = 2 \\\\times 3^2 \\\\times 5 \\\\times 13\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q11a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 45,
    "question": "Evaluate: \\\\(3^2 \\\\times 5^3\\\\)",
    "t": "Review of factors and indices",
    "hint": "Evaluate powers first, then multiply.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(135\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(1125\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(675\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(3375\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "Evaluate each power separately.",
        "workingOut": "\\\\(3^2 = 9, \\\\quad 5^3 = 125\\\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the results.",
        "workingOut": "\\\\(9 \\\\times 125 = 1125\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q11b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 45,
    "question": "Evaluate: \\\\(7 \\\\times 11^2\\\\)",
    "t": "Review of factors and indices",
    "hint": "Remember order of operations: indices before multiplication.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(847\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(154\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(77\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(539\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "Evaluate the index power first.",
        "workingOut": "\\\\(11^2 = 121\\\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply by 7.",
        "workingOut": "\\\\(7 \\\\times 121 = 847\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q11c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 60,
    "question": "Evaluate: \\\\(2^2 \\\\times 5 \\\\times 9 \\\\times 14\\\\)",
    "t": "Review of factors and indices",
    "hint": "Evaluate the power of 2 first.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(1260\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(2520\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(5040\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(2500\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "Evaluate \\\\(2^2\\\\).",
        "workingOut": "\\\\(2^2 = 4\\\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply in order.",
        "workingOut": "\\\\(4 \\\\times 5 = 20, \\\\quad 20 \\\\times 9 = 180\\\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply by 14.",
        "workingOut": "\\\\(180 \\\\times 14 = 2520\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q11d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 60,
    "question": "Write \\\\(2520\\\\) as a product of powers of primes.",
    "t": "Review of factors and indices",
    "hint": "Recall the prime factorisation of 2520 from previous calculations.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(2^3 \\\\times 3^2 \\\\times 5 \\\\times 7\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(2^2 \\\\times 3^2 \\\\times 5 \\\\times 7\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(2^3 \\\\times 3 \\\\times 5 \\\\times 7\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(2^3 \\\\times 3^2 \\\\times 35\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "Refer to prime factorisation steps of 2520.",
        "workingOut": "\\\\(2520 = 2 \\\\times 2 \\\\times 2 \\\\times 3 \\\\times 3 \\\\times 5 \\\\times 7\\\\)",
        "graphData": null
      },
      {
        "explanation": "Express in index notation.",
        "workingOut": "\\\\(2520 = 2^3 \\\\times 3^2 \\\\times 5 \\\\times 7\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q12a1",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Using prime factorisation, find the highest common factor (HCF) of \\\\(5400\\\\) and \\\\(1260\\\\).",
    "t": "Review of factors and indices",
    "hint": "Find prime factorisations and take lowest powers of shared primes.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(60\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(180\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(360\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(90\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "Find prime factorisations.",
        "workingOut": "\\\\(5400 = 2^3 \\\\times 3^3 \\\\times 5^2, \\\\quad 1260 = 2^2 \\\\times 3^2 \\\\times 5 \\\\times 7\\\\)",
        "graphData": null
      },
      {
        "explanation": "Take lowest powers of shared primes 2, 3, and 5.",
        "workingOut": "\\\\(\\text{HCF} = 2^2 \\\\times 3^2 \\\\times 5^1\\\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply.",
        "workingOut": "\\\\(\\text{HCF} = 4 \\\\times 9 \\\\times 5 = 180\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q12a2",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Using prime factorisation, find the lowest common multiple (LCM) of \\\\(5400\\\\) and \\\\(1260\\\\).",
    "t": "Review of factors and indices",
    "hint": "Find prime factorisations and take highest powers of all primes.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(37800\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(18900\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(75600\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(54000\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "Refer to prime factorisations.",
        "workingOut": "\\\\(5400 = 2^3 \\\\times 3^3 \\\\times 5^2, \\\\quad 1260 = 2^2 \\\\times 3^2 \\\\times 5 \\\\times 7\\\\)",
        "graphData": null
      },
      {
        "explanation": "Take highest powers of all primes present: \\\\(2^3, 3^3, 5^2, 7^1\\\\).",
        "workingOut": "\\\\(\\text{LCM} = 2^3 \\\\times 3^3 \\\\times 5^2 \\\\times 7\\\\)",
        "graphData": null
      },
      {
        "explanation": "Compute product.",
        "workingOut": "\\\\(\\text{LCM} = 8 \\\\times 27 \\\\times 25 \\\\times 7 = 37800\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q12b1",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Using prime factorisation, find the highest common factor (HCF) of \\\\(1350\\\\) and \\\\(882\\\\).",
    "t": "Review of factors and indices",
    "hint": "Factorise both and take lowest powers of common primes.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(18\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(9\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(6\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(36\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "Find prime factorisations.",
        "workingOut": "\\\\(1350 = 2 \\\\times 3^3 \\\\times 5^2, \\\\quad 882 = 2 \\\\times 3^2 \\\\times 7^2\\\\)",
        "graphData": null
      },
      {
        "explanation": "Take lowest powers of shared primes 2 and 3.",
        "workingOut": "\\\\(\\text{HCF} = 2^1 \\\\times 3^2\\\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply.",
        "workingOut": "\\\\(\\text{HCF} = 2 \\\\times 9 = 18\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q12b2",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Using prime factorisation, find the lowest common multiple (LCM) of \\\\(1350\\\\) and \\\\(882\\\\).",
    "t": "Review of factors and indices",
    "hint": "Factorise both and take highest powers of all primes.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(66150\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(33075\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(132300\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(110250\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "Refer to prime factorisations.",
        "workingOut": "\\\\(1350 = 2 \\\\times 3^3 \\\\times 5^2, \\\\quad 882 = 2 \\\\times 3^2 \\\\times 7^2\\\\)",
        "graphData": null
      },
      {
        "explanation": "Take highest powers of all primes: \\\\(2^1, 3^3, 5^2, 7^2\\\\).",
        "workingOut": "\\\\(\\text{LCM} = 2 \\\\times 3^3 \\\\times 5^2 \\\\times 7^2\\\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply.",
        "workingOut": "\\\\(\\text{LCM} = 2 \\\\times 27 \\\\times 25 \\\\times 49 = 66150\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q13a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Calculate mentally: \\\\(25 \\\\times 24\\\\)",
    "t": "Review of factors and indices",
    "hint": "Use grouping: 25 × 4 = 100.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(500\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(600\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(550\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(1000\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "Split 24 into \\\\(4 \\\\times 6\\\\).",
        "workingOut": "\\\\(25 \\\\times 24 = 25 \\\\times (4 \\\\times 6)\\\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply 25 by 4 first to get 100.",
        "workingOut": "\\\\(= (25 \\\\times 4) \\\\times 6 = 100 \\\\times 6\\\\)",
        "graphData": null
      },
      {
        "explanation": "Final multiplication.",
        "workingOut": "\\\\(= 600\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q13b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 45,
    "question": "Calculate mentally: \\\\(125 \\\\times 48\\\\)",
    "t": "Review of factors and indices",
    "hint": "Recall 125 × 8 = 1000.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(6000\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(5000\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(12000\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(8000\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "Split 48 into \\\\(8 \\\\times 6\\\\).",
        "workingOut": "\\\\(125 \\\\times 48 = 125 \\\\times (8 \\\\times 6)\\\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply 125 by 8 first.",
        "workingOut": "\\\\(= (125 \\\\times 8) \\\\times 6 = 1000 \\\\times 6\\\\)",
        "graphData": null
      },
      {
        "explanation": "Final multiplication.",
        "workingOut": "\\\\(= 6000\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q13c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 45,
    "question": "Calculate mentally: \\\\(75 \\\\times 60\\\\)",
    "t": "Review of factors and indices",
    "hint": "Recall 75 = 3 × 25.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(4200\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(4500\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(3000\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(5000\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "Split 60 into \\\\(4 \\\\times 15\\\\).",
        "workingOut": "\\\\(75 \\\\times 60 = 75 \\\\times (4 \\\\times 15)\\\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply 75 by 4 first to get 300.",
        "workingOut": "\\\\(= (75 \\\\times 4) \\\\times 15 = 300 \\\\times 15\\\\)",
        "graphData": null
      },
      {
        "explanation": "Final calculation.",
        "workingOut": "\\\\(300 \\\\times 15 = 4500\\\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y8-3f-q13d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 45,
    "question": "Calculate mentally: \\\\(5 \\\\times 648\\\\)",
    "t": "Review of factors and indices",
    "hint": "Recall that multiplying by 5 is the same as multiplying by 10 and dividing by 2.",
    "graphData": null,
    "options": [
      {
        "text": "\\\\(3240\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(3140\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(3200\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(32400\\\\)",
        "imageUrl": ""
      }
    ],
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "Rewrite 5 as \\\\(10 \\\\div 2\\\\).",
        "workingOut": "\\\\(5 \\\\times 648 = \\frac{10}{2} \\\\times 648 = 10 \\\\times \\left(\\frac{648}{2}\\right)\\\\)",
        "graphData": null
      },
      {
        "explanation": "Divide 648 by 2.",
        "workingOut": "\\\\(648 \\\\div 2 = 324\\\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply by 10.",
        "workingOut": "\\\\(324 \\\\times 10 = 3240\\\\)",
        "graphData": null
      }
    ]
  }
];
