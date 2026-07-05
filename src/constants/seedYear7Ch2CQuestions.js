export const Y7_CH2C_QUESTIONS = [
  {
    id: "y7-2c-q1a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Prime and composite numbers",
    question: "Which of the following lists the prime numbers that are factors of 12?",
    opts: [
      { text: "\\(3, 4\\)", imageUrl: "" },
      { text: "\\(2, 3\\)", imageUrl: "" },
      { text: "\\(1, 2, 3\\)", imageUrl: "" },
      { text: "\\(2, 3, 6\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Factors of 12 are 1, 2, 3, 4, 6, 12. Remember that 1 is not a prime number, and composite numbers like 4 and 6 are not prime.",
    solution: "First, list all factors of 12: 1, 2, 3, 4, 6, and 12. From these, select only the prime numbers (numbers greater than 1 with exactly two distinct factors: 1 and itself). 2 and 3 are prime, while 1 is not prime, and 4, 6, 12 are composite.",
    solutionSteps: [
      {
        explanation: "Find all the positive integer factors of 12.",
        workingOut: "\\text{Factors of 12} = \\{1, 2, 3, 4, 6, 12\\}",
        graphData: null
      },
      {
        explanation: "Filter the factors to identify which ones are prime numbers.",
        workingOut: "2 \\text{ (prime)}, \\quad 3 \\text{ (prime)}, \\quad 1 \\text{ (neither)}, \\quad 4, 6, 12 \\text{ (composite)}",
        graphData: null
      },
      {
        explanation: "Write down the list of prime factors.",
        workingOut: "\\text{Prime factors} = \\{2, 3\\}",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2c-q1b",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Prime and composite numbers",
    question: "Which of the following lists the prime numbers that are factors of 15?",
    opts: [
      { text: "\\(3, 5\\)", imageUrl: "" },
      { text: "\\(1, 3, 5\\)", imageUrl: "" },
      { text: "\\(3, 5, 15\\)", imageUrl: "" },
      { text: "\\(2, 3, 5\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Factors of 15 are 1, 3, 5, 15. Only include prime factors (1 is not prime).",
    solution: "The factors of 15 are 1, 3, 5, and 15. Out of these, 3 and 5 are prime numbers. 1 is neither prime nor composite, and 15 is composite since it is divisible by 3 and 5.",
    solutionSteps: [
      {
        explanation: "List all positive integer factors of 15.",
        workingOut: "\\text{Factors of 15} = \\{1, 3, 5, 15\\}",
        graphData: null
      },
      {
        explanation: "Check each factor to see if it is a prime number.",
        workingOut: "3 \\text{ and } 5 \\text{ are prime; 1 is not prime; 15 is composite (3 } \\times 5 = 15\\text{)}",
        graphData: null
      },
      {
        explanation: "Form the final list of prime factors.",
        workingOut: "\\text{Prime factors} = \\{3, 5\\}",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2c-q1c",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Prime and composite numbers",
    question: "Which of the following lists the prime numbers that are factors of 21?",
    opts: [
      { text: "\\(1, 3, 7\\)", imageUrl: "" },
      { text: "\\(3, 7, 21\\)", imageUrl: "" },
      { text: "\\(3, 7\\)", imageUrl: "" },
      { text: "\\(2, 3, 7\\)", imageUrl: "" }
    ],
    answer: 2,
    hint: "Find the factors of 21 first, then select those that have only two factors (1 and themselves).",
    solution: "The factors of 21 are 1, 3, 7, and 21. Among these, the prime numbers are 3 and 7. Thus, the prime factors of 21 are 3 and 7.",
    solutionSteps: [
      {
        explanation: "Determine all factors of 21.",
        workingOut: "\\text{Factors of 21} = \\{1, 3, 7, 21\\}",
        graphData: null
      },
      {
        explanation: "Filter out numbers that are not prime (1 is not prime, 21 is composite).",
        workingOut: "3 \\text{ and } 7 \\text{ are prime factors}",
        graphData: null
      },
      {
        explanation: "Conclude the prime factors list.",
        workingOut: "\\text{Prime factors} = \\{3, 7\\}",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2c-q1d",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Prime and composite numbers",
    question: "Which of the following lists the prime numbers that are factors of 32?",
    opts: [
      { text: "\\(2\\)", imageUrl: "" },
      { text: "\\(2, 4\\)", imageUrl: "" },
      { text: "\\(1, 2\\)", imageUrl: "" },
      { text: "\\(2, 16\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Factors of 32 are 1, 2, 4, 8, 16, 32. Which of these is a prime number?",
    solution: "List all factors of 32: 1, 2, 4, 8, 16, 32. 2 is the only prime factor because all other factors greater than 2 (4, 8, 16, 32) are composite, and 1 is not prime.",
    solutionSteps: [
      {
        explanation: "List all positive integer factors of 32.",
        workingOut: "\\text{Factors of 32} = \\{1, 2, 4, 8, 16, 32\\}",
        graphData: null
      },
      {
        explanation: "Check the primality of each factor.",
        workingOut: "2 \\text{ is prime; 1 is not prime; 4, 8, 16, 32 are composite}",
        graphData: null
      },
      {
        explanation: "State the only prime factor.",
        workingOut: "\\text{Prime factors} = \\{2\\}",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2c-q1e",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Prime and composite numbers",
    question: "Which of the following lists the prime numbers that are factors of 35?",
    opts: [
      { text: "\\(5, 7, 35\\)", imageUrl: "" },
      { text: "\\(1, 5, 7\\)", imageUrl: "" },
      { text: "\\(5, 7\\)", imageUrl: "" },
      { text: "\\(3, 5, 7\\)", imageUrl: "" }
    ],
    answer: 2,
    hint: "Factors of 35 are 1, 5, 7, 35. Select only the prime factors.",
    solution: "The factors of 35 are 1, 5, 7, and 35. The prime numbers in this set are 5 and 7. Therefore, the prime factors of 35 are 5 and 7.",
    solutionSteps: [
      {
        explanation: "List all positive integer factors of 35.",
        workingOut: "\\text{Factors of 35} = \\{1, 5, 7, 35\\}",
        graphData: null
      },
      {
        explanation: "Filter the factors to identify prime numbers.",
        workingOut: "5 \\text{ and } 7 \\text{ are prime; 1 is not prime; 35 is composite}",
        graphData: null
      },
      {
        explanation: "Write down the prime factors.",
        workingOut: "\\text{Prime factors} = \\{5, 7\\}",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2c-q2a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Prime and composite numbers",
    question: "What is the first pair of prime numbers that differs by 1?",
    opts: [
      { text: "\\(3, 4\\)", imageUrl: "" },
      { text: "\\(1, 2\\)", imageUrl: "" },
      { text: "\\(2, 3\\)", imageUrl: "" },
      { text: "\\(3, 5\\)", imageUrl: "" }
    ],
    answer: 2,
    hint: "List the smallest prime numbers in ascending order: 2, 3, 5, 7... and find a pair with a difference of 1.",
    solution: "The smallest prime numbers are 2, 3, 5, 7, ... The difference between 3 and 2 is: \\(3 - 2 = 1\\). Since both 2 and 3 are prime numbers, (2, 3) is the first pair of primes differing by 1. Note that 1 is not a prime number, and 4 is not a prime number.",
    solutionSteps: [
      {
        explanation: "List the small prime numbers in order.",
        workingOut: "\\text{Primes} = \\{2, 3, 5, 7, 11, \\dots\\}",
        graphData: null
      },
      {
        explanation: "Find a pair where the difference between them is exactly 1.",
        workingOut: "3 - 2 = 1",
        graphData: null
      },
      {
        explanation: "Verify that both elements of the pair are prime.",
        workingOut: "2 \\text{ is prime and } 3 \\text{ is prime } \\implies \\text{Pair is } (2, 3)",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2c-q2b",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Prime and composite numbers",
    question: "What is the first pair of prime numbers that differs by 2?",
    opts: [
      { text: "\\(3, 5\\)", imageUrl: "" },
      { text: "\\(1, 3\\)", imageUrl: "" },
      { text: "\\(5, 7\\)", imageUrl: "" },
      { text: "\\(11, 13\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Primes that differ by 2 are called twin primes. Smallest primes are 2, 3, 5, 7...",
    solution: "Looking at the prime numbers 2, 3, 5, 7, 11, 13, ... we test small pairs. The pair (1, 3) is invalid because 1 is not prime. The pair (3, 5) consists of two primes, and their difference is: \\(5 - 3 = 2\\). This is the first pair of primes with a difference of 2.",
    solutionSteps: [
      {
        explanation: "List small prime numbers.",
        workingOut: "\\text{Primes} = \\{2, 3, 5, 7, 11, \\dots\\}",
        graphData: null
      },
      {
        explanation: "Test the difference between successive primes.",
        workingOut: "3 - 2 = 1, \\quad 5 - 3 = 2",
        graphData: null
      },
      {
        explanation: "Confirm that both 3 and 5 are prime numbers.",
        workingOut: "3 \\text{ is prime, } 5 \\text{ is prime } \\implies \\text{Pair is } (3, 5)",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2c-q2c",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Prime and composite numbers",
    question: "What is the first pair of prime numbers that differs by 4?",
    opts: [
      { text: "\\(1, 5\\)", imageUrl: "" },
      { text: "\\(3, 7\\)", imageUrl: "" },
      { text: "\\(7, 11\\)", imageUrl: "" },
      { text: "\\(5, 9\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Identify the smallest primes (2, 3, 5, 7, 11...) and check their differences.",
    solution: "Let's check pairs with a difference of 4:\n- (1, 5): 1 is not prime.\n- (3, 7): both 3 and 7 are prime, and \\(7 - 3 = 4\\).\n- (5, 9): 9 is composite (\\(3 \\times 3 = 9\\)).\nThus, (3, 7) is the first pair of primes differing by 4.",
    solutionSteps: [
      {
        explanation: "List prime numbers in ascending order.",
        workingOut: "\\text{Primes} = \\{2, 3, 5, 7, 11, 13, \\dots\\}",
        graphData: null
      },
      {
        explanation: "Test the difference of 4 starting from the smallest prime.",
        workingOut: "2 + 4 = 6 \\text{ (6 is not prime)}, \\quad 3 + 4 = 7 \\text{ (7 is prime)}",
        graphData: null
      },
      {
        explanation: "Verify the first prime pair.",
        workingOut: "\\text{Primes: } 3 \\text{ and } 7 \\implies \\text{Pair: } (3, 7)",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2c-q2d",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Prime and composite numbers",
    question: "What is the first pair of prime numbers that differs by 6?",
    opts: [
      { text: "\\(1, 7\\)", imageUrl: "" },
      { text: "\\(3, 9\\)", imageUrl: "" },
      { text: "\\(5, 11\\)", imageUrl: "" },
      { text: "\\(7, 13\\)", imageUrl: "" }
    ],
    answer: 2,
    hint: "Test the smallest primes: 2, 3, 5, 7, 11, 13... Add 6 to each and check if the result is prime.",
    solution: "Test small primes by adding 6:\n- \\(2 + 6 = 8\\) (8 is composite)\n- \\(3 + 6 = 9\\) (9 is composite)\n- \\(5 + 6 = 11\\) (both 5 and 11 are prime)\nTherefore, the first pair of primes that differs by 6 is (5, 11).",
    solutionSteps: [
      {
        explanation: "List small prime numbers in order.",
        workingOut: "\\text{Primes} = \\{2, 3, 5, 7, 11, 13, \\dots\\}",
        graphData: null
      },
      {
        explanation: "Add 6 to the smallest primes and check if the resulting sum is prime.",
        workingOut: "2 + 6 = 8 \\text{ (composite)}, \\quad 3 + 6 = 9 \\text{ (composite)}, \\quad 5 + 6 = 11 \\text{ (prime)}",
        graphData: null
      },
      {
        explanation: "Confirm the first valid pair.",
        workingOut: "\\text{Primes: } 5 \\text{ and } 11 \\implies \\text{Pair: } (5, 11)",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2c-q3a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Prime and composite numbers",
    question: "What is the largest prime number less than 50?",
    opts: [
      { text: "\\(49\\)", imageUrl: "" },
      { text: "\\(47\\)", imageUrl: "" },
      { text: "\\(45\\)", imageUrl: "" },
      { text: "\\(43\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Test numbers going backwards from 50: 49, 48, 47...",
    solution: "Check numbers less than 50 in descending order:\n- 49 is composite because \\(7 \\times 7 = 49\\).\n- 48 is composite because it is even.\n- 47 has no factors other than 1 and 47, so it is prime.\nThus, 47 is the largest prime number less than 50.",
    solutionSteps: [
      {
        explanation: "Test 49: Check if it has factors other than 1 and 49.",
        workingOut: "49 = 7 \\times 7 \\implies \\text{composite}",
        graphData: null
      },
      {
        explanation: "Test 48: Check for factors.",
        workingOut: "48 = 2 \\times 24 \\implies \\text{composite}",
        graphData: null
      },
      {
        explanation: "Test 47: Check for factors using prime division (test 2, 3, 5).",
        workingOut: "47 \\text{ is not divisible by 2, 3, 5 } \\implies \\text{prime}",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2c-q3b",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Prime and composite numbers",
    question: "What is the largest prime number less than 70?",
    opts: [
      { text: "\\(69\\)", imageUrl: "" },
      { text: "\\(68\\)", imageUrl: "" },
      { text: "\\(67\\)", imageUrl: "" },
      { text: "\\(61\\)", imageUrl: "" }
    ],
    answer: 2,
    hint: "Count backwards from 70 and check each odd number: 69, 67...",
    solution: "Check numbers less than 70 in descending order:\n- 69 is composite because the sum of its digits \\(6 + 9 = 15\\) is divisible by 3 (\\(69 = 3 \\times 23\\)).\n- 68 is composite (even).\n- 67 is prime as it has no prime factors up to \\(\\sqrt{67} \\approx 8.18\\) (testing 2, 3, 5, 7).\nTherefore, 67 is the largest prime less than 70.",
    solutionSteps: [
      {
        explanation: "Test 69 for primality.",
        workingOut: "69 = 3 \\times 23 \\implies \\text{composite}",
        graphData: null
      },
      {
        explanation: "Test 68 for primality.",
        workingOut: "68 = 2 \\times 34 \\implies \\text{composite}",
        graphData: null
      },
      {
        explanation: "Test 67 for primality by checking prime factors 2, 3, 5, 7.",
        workingOut: "67 \\text{ is not divisible by 2, 3, 5, 7 } \\implies \\text{prime}",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2c-q3c",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Prime and composite numbers",
    question: "What is the largest prime number less than 100?",
    opts: [
      { text: "\\(99\\)", imageUrl: "" },
      { text: "\\(97\\)", imageUrl: "" },
      { text: "\\(95\\)", imageUrl: "" },
      { text: "\\(91\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Count backwards from 100 and check the primality of odd numbers: 99, 97...",
    solution: "Check numbers less than 100 in descending order:\n- 99 is composite (\\(99 = 9 \\times 11\\)).\n- 98 is composite (even).\n- 97 has no prime factors up to \\(\\sqrt{97} \\approx 9.85\\) (testing 2, 3, 5, 7).\nTherefore, 97 is the largest prime less than 100.",
    solutionSteps: [
      {
        explanation: "Test 99 for divisors.",
        workingOut: "99 = 9 \\times 11 \\implies \\text{composite}",
        graphData: null
      },
      {
        explanation: "Test 98 for divisors.",
        workingOut: "98 = 2 \\times 49 \\implies \\text{composite}",
        graphData: null
      },
      {
        explanation: "Test 97 for divisors by testing primes 2, 3, 5, 7.",
        workingOut: "97 \\text{ has no divisors } \\implies \\text{prime}",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2c-q4",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Prime and composite numbers",
    question: "Which of the following is a pair of prime numbers whose sum is an odd number?",
    opts: [
      { text: "\\(3, 5\\)", imageUrl: "" },
      { text: "\\(2, 3\\)", imageUrl: "" },
      { text: "\\(5, 7\\)", imageUrl: "" },
      { text: "\\(2, 4\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "For a sum of two integers to be odd, one must be even and one must be odd. Think about the only even prime number.",
    solution: "To get an odd sum, we need: \\(\\text{Even} + \\text{Odd} = \\text{Odd}\\). The only even prime number is 2. Therefore, any pair of primes with an odd sum must contain 2 and another odd prime. Testing the choices:\n- (3, 5) gives \\(3 + 5 = 8\\) (even).\n- (2, 3) gives \\(2 + 3 = 5\\) (odd, and both are prime).\n- (2, 4) contains 4 which is not prime.\nHence, (2, 3) is the correct pair.",
    solutionSteps: [
      {
        explanation: "Analyze the properties of even and odd sums.",
        workingOut: "\\text{Even} + \\text{Odd} = \\text{Odd}",
        graphData: null
      },
      {
        explanation: "Identify prime numbers that satisfy this condition. Since 2 is the only even prime, one number must be 2.",
        workingOut: "2 \\text{ must be one of the prime numbers}",
        graphData: null
      },
      {
        explanation: "Check the options for a pair containing 2 and another prime.",
        workingOut: "2 + 3 = 5 \\quad (\\text{both 2 and 3 are prime})",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2c-q5a",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Prime and composite numbers",
    question: "Goldbach's conjecture states that 'every even number greater than 2 is the sum of two primes'. Show this by writing 32 as the sum of two prime numbers.",
    opts: [
      { text: "\\(5 + 27\\)", imageUrl: "" },
      { text: "\\(3 + 29\\)", imageUrl: "" },
      { text: "\\(1 + 31\\)", imageUrl: "" },
      { text: "\\(9 + 23\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Check which pair sums to 32 and consists ONLY of prime numbers. Remember 1, 9, and 27 are not prime.",
    solution: "We need two prime numbers that add up to 32:\n- \\(1 + 31 = 32\\): 1 is not a prime number.\n- \\(5 + 27 = 32\\): 27 is composite (\\(3 \\times 9 = 27\\)).\n- \\(9 + 23 = 32\\): 9 is composite (\\(3 \\times 3 = 9\\)).\n- \\(3 + 29 = 32\\): both 3 and 29 are prime numbers.\nThus, 32 can be written as \\(3 + 29\\).",
    solutionSteps: [
      {
        explanation: "Evaluate the primality of the numbers in each option.",
        workingOut: "3 \\text{ is prime, } 29 \\text{ is prime}",
        graphData: null
      },
      {
        explanation: "Verify their sum is 32.",
        workingOut: "3 + 29 = 32",
        graphData: null
      },
      {
        explanation: "Confirm that other options contain non-prime numbers.",
        workingOut: "1 \\text{ (not prime)}, \\quad 27 = 3 \\times 9 \\text{ (composite)}, \\quad 9 = 3 \\times 3 \\text{ (composite)}",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2c-q5b",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Prime and composite numbers",
    question: "According to Goldbach's conjecture, write 62 as the sum of two prime numbers.",
    opts: [
      { text: "\\(5 + 57\\)", imageUrl: "" },
      { text: "\\(3 + 59\\)", imageUrl: "" },
      { text: "\\(1 + 61\\)", imageUrl: "" },
      { text: "\\(9 + 53\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Identify which option contains two prime numbers that sum to 62. Check if 57, 9, or 1 is prime.",
    solution: "Verify each sum for primality:\n- \\(1 + 61 = 62\\): 1 is not prime.\n- \\(5 + 57 = 62\\): 57 is composite (\\(3 \\times 19 = 57\\)).\n- \\(9 + 53 = 62\\): 9 is composite (\\(3 \\times 3 = 9\\)).\n- \\(3 + 59 = 62\\): both 3 and 59 are prime numbers.\nThus, 62 can be expressed as \\(3 + 59\\).",
    solutionSteps: [
      {
        explanation: "Check the primality of the terms in the sums.",
        workingOut: "3 \\text{ is prime, } 59 \\text{ is prime}",
        graphData: null
      },
      {
        explanation: "Verify the sum of the prime numbers equals 62.",
        workingOut: "3 + 59 = 62",
        graphData: null
      },
      {
        explanation: "Check why other options are incorrect.",
        workingOut: "1 \\text{ is not prime}, \\quad 57 = 3 \\times 19 \\text{ (composite)}, \\quad 9 = 3 \\times 3 \\text{ (composite)}",
        graphData: null
      }
    ]
  },
  {
    id: "y7-2c-q6",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Prime and composite numbers",
    question: "Find the smallest odd number greater than 3 that is NOT the sum of two prime numbers.",
    opts: [
      { text: "\\(9\\)", imageUrl: "" },
      { text: "\\(15\\)", imageUrl: "" },
      { text: "\\(11\\)", imageUrl: "" },
      { text: "\\(7\\)", imageUrl: "" }
    ],
    answer: 2,
    hint: "For an odd number to be the sum of two primes, one of the primes must be 2 (the only even prime). Therefore, the odd number minus 2 must be prime.",
    solution: "Let the odd number be \\(O\\). Since the sum of two odd numbers is even, any two primes that sum to an odd number \\(O\\) must include one even prime and one odd prime. 2 is the only even prime, so: \\(O = 2 + p\\), where \\(p\\) must be prime.\nThis implies \\(O - 2\\) must be a prime number. Let's test odd numbers greater than 3:\n- 5: \\(5 - 2 = 3\\) (prime) \\(\\implies 5 = 2 + 3\\) (Yes)\n- 7: \\(7 - 2 = 5\\) (prime) \\(\\implies 7 = 2 + 5\\) (Yes)\n- 9: \\(9 - 2 = 7\\) (prime) \\(\\implies 9 = 2 + 7\\) (Yes)\n- 11: \\(11 - 2 = 9\\) (composite!) \\(\\implies\\) 11 cannot be written as the sum of two primes.\nThus, 11 is the smallest odd number greater than 3 that is not the sum of two primes.",
    solutionSteps: [
      {
        explanation: "Understand the sum of primes rule for odd numbers. Since Even + Odd = Odd, and 2 is the only even prime, one prime must be 2.",
        workingOut: "O = 2 + p \\implies p = O - 2 \\text{ must be prime}",
        graphData: null
      },
      {
        explanation: "Test odd numbers greater than 3 sequentially: 5, 7, 9, 11...",
        workingOut: "5 - 2 = 3 \\text{ (prime)}, \\quad 7 - 2 = 5 \\text{ (prime)}, \\quad 9 - 2 = 7 \\text{ (prime)}",
        graphData: null
      },
      {
        explanation: "Identify the first odd number that fails the test.",
        workingOut: "11 - 2 = 9 \\quad (9 = 3 \\times 3 \\implies \\text{composite})",
        graphData: null
      },
      {
        explanation: "Conclude the smallest odd number.",
        workingOut: "\\text{The smallest odd number is } 11",
        graphData: null
      }
    ]
  }
];
