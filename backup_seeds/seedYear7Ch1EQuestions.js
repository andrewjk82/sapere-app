export const Y7_CH1E_QUESTIONS = [
  // Q1 a-i
  {
    id: 'y7-1e-q1a',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Perform the multiplication: \\(23 \\times 10\\)',
    a: '230',
    t: 'Multiplication',
    hint: 'When multiplying a whole number by 10, add one zero to the end of the number.',
    solutionSteps: [
      {
        explanation: 'When multiplying any number by 10, simply append one zero to the end of the number.',
        workingOut: '\\(23 \\times 10 = 230\\)'
      }
    ],
    graphData: null
  },
  {
    id: 'y7-1e-q1b',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Perform the multiplication: \\(47 \\times 0\\)',
    a: '0',
    t: 'Multiplication',
    hint: 'Any number multiplied by 0 is 0.',
    solutionSteps: [
      {
        explanation: 'Any number multiplied by 0 always results in 0.',
        workingOut: '\\(47 \\times 0 = 0\\)'
      }
    ],
    graphData: null
  },
  {
    id: 'y7-1e-q1c',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Perform the multiplication: \\(100 \\times 1\\)',
    a: '100',
    t: 'Multiplication',
    hint: 'Any number multiplied by 1 remains the same.',
    solutionSteps: [
      {
        explanation: 'Any number multiplied by 1 remains unchanged.',
        workingOut: '\\(100 \\times 1 = 100\\)'
      }
    ],
    graphData: null
  },
  {
    id: 'y7-1e-q1d',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Perform the multiplication: \\(26 \\times 1000\\)',
    a: '26000',
    t: 'Multiplication',
    hint: 'When multiplying a whole number by 1000, add three zeroes to the end of the number.',
    solutionSteps: [
      {
        explanation: 'When multiplying a number by 1000, append three zeroes to the end of the number.',
        workingOut: '\\(26 \\times 1000 = 26000\\)'
      }
    ],
    graphData: null
  },
  {
    id: 'y7-1e-q1e',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Perform the multiplication: \\(340 \\times 100\\)',
    a: '34000',
    t: 'Multiplication',
    hint: 'When multiplying by 100, add two zeroes to the end of the number.',
    solutionSteps: [
      {
        explanation: 'When multiplying a number by 100, append two zeroes to the end of the number.',
        workingOut: '\\(340 \\times 100 = 34000\\)'
      }
    ],
    graphData: null
  },
  {
    id: 'y7-1e-q1f',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Perform the multiplication: \\(100 \\times 100\\)',
    a: '10000',
    t: 'Multiplication',
    hint: 'When multiplying numbers with zeroes, multiply the non-zero parts and count the total zeroes.',
    solutionSteps: [
      {
        explanation: 'When multiplying numbers with zeroes, multiply the leading digits first.',
        workingOut: '\\(1 \\times 1 = 1\\)'
      },
      {
        explanation: 'Since both numbers have two zeroes each, append a total of four zeroes.',
        workingOut: '\\(100 \\times 100 = 10000\\)'
      }
    ],
    graphData: null
  },
  {
    id: 'y7-1e-q1g',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Perform the multiplication: \\(1000 \\times 81\\)',
    a: '81000',
    t: 'Multiplication',
    hint: 'When multiplying a whole number by 1000, add three zeroes to the end of the number.',
    solutionSteps: [
      {
        explanation: 'When multiplying by 1000, append three zeroes to the end of the number.',
        workingOut: '\\(1000 \\times 81 = 81000\\)'
      }
    ],
    graphData: null
  },
  {
    id: 'y7-1e-q1h',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Perform the multiplication: \\(10000 \\times 100\\)',
    a: '1000000',
    t: 'Multiplication',
    hint: 'When multiplying numbers with zeroes, multiply the non-zero parts and count the total zeroes.',
    solutionSteps: [
      {
        explanation: 'When multiplying numbers with zeroes, multiply the leading digits first.',
        workingOut: '\\(1 \\times 1 = 1\\)'
      },
      {
        explanation: 'The first number has four zeroes and the second has two, so we append a total of six zeroes.',
        workingOut: '\\(10000 \\times 100 = 1000000\\)'
      }
    ],
    graphData: null
  },
  {
    id: 'y7-1e-q1i',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Perform the multiplication: \\(42910 \\times 1000\\)',
    a: '42910000',
    t: 'Multiplication',
    hint: 'When multiplying a whole number by 1000, add three zeroes to the end of the number.',
    solutionSteps: [
      {
        explanation: 'When multiplying a number by 1000, append three zeroes to the end of the number.',
        workingOut: '\\(42910 \\times 1000 = 42910000\\)'
      }
    ],
    graphData: null
  },

  // Q2 a-i
  {
    id: 'y7-1e-q2a',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Carry out the calculation, using the any-order property for multiplication: \\(25 \\times 4 \\times 8\\)',
    a: '800',
    t: 'Multiplication',
    hint: 'Look for numbers that multiply to make a multiple of 10 or 100 first.',
    solutionSteps: [
      {
        explanation: 'Using the commutative and associative properties, multiply the numbers that are easiest first. 25 multiplied by 4 gives 100.',
        workingOut: '\\(25 \\times 4 = 100\\)'
      },
      {
        explanation: 'Now multiply that result by 8.',
        workingOut: '\\(100 \\times 8 = 800\\)'
      },
      {
        explanation: 'We have found the final answer.',
        workingOut: '\\(\\therefore\\; 25 \\times 4 \\times 8 = 800\\)'
      }
    ],
    graphData: null
  },
  {
    id: 'y7-1e-q2b',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Carry out the calculation, using the any-order property for multiplication: \\(5 \\times 34 \\times 2\\)',
    a: '340',
    t: 'Multiplication',
    hint: 'Look for numbers that multiply to make 10 first.',
    solutionSteps: [
      {
        explanation: 'Using the commutative and associative properties, first multiply 5 and 2. This gives 10, making the calculation easier.',
        workingOut: '\\(5 \\times 2 = 10\\)'
      },
      {
        explanation: 'Now multiply that result by 34.',
        workingOut: '\\(10 \\times 34 = 340\\)'
      },
      {
        explanation: 'We have found the final answer.',
        workingOut: '\\(\\therefore\\; 5 \\times 34 \\times 2 = 340\\)'
      }
    ],
    graphData: null
  },
  {
    id: 'y7-1e-q2c',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Carry out the calculation, using the any-order property for multiplication: \\(5 \\times 67 \\times 20\\)',
    a: '6700',
    t: 'Multiplication',
    hint: 'Multiply 5 and 20 first.',
    solutionSteps: [
      {
        explanation: 'Using the commutative property, multiply 5 and 20 first. This gives 100.',
        workingOut: '\\(5 \\times 20 = 100\\)'
      },
      {
        explanation: 'Now multiply 100 by 67.',
        workingOut: '\\(100 \\times 67 = 6700\\)'
      },
      {
        explanation: 'We have found the final answer.',
        workingOut: '\\(\\therefore\\; 5 \\times 67 \\times 20 = 6700\\)'
      }
    ],
    graphData: null
  },
  {
    id: 'y7-1e-q2d',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Carry out the calculation, using the any-order property for multiplication: \\(50 \\times 81 \\times 2\\)',
    a: '8100',
    t: 'Multiplication',
    hint: 'Multiply 50 and 2 first.',
    solutionSteps: [
      {
        explanation: 'Using the commutative property, multiply 50 and 2 first to get 100.',
        workingOut: '\\(50 \\times 2 = 100\\)'
      },
      {
        explanation: 'Now multiply 100 by 81.',
        workingOut: '\\(100 \\times 81 = 8100\\)'
      },
      {
        explanation: 'We have found the final answer.',
        workingOut: '\\(\\therefore\\; 50 \\times 81 \\times 2 = 8100\\)'
      }
    ],
    graphData: null
  },
  {
    id: 'y7-1e-q2e',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Carry out the calculation, using the any-order property for multiplication: \\(24 \\times 5 \\times 40\\)',
    a: '4800',
    t: 'Multiplication',
    hint: 'Multiply 5 and 40 first.',
    solutionSteps: [
      {
        explanation: 'Using the associative property, multiply 5 and 40 first.',
        workingOut: '\\(5 \\times 40 = 200\\)'
      },
      {
        explanation: 'Now multiply 24 by 200. We can do this by multiplying 24 by 2 and appending two zeroes.',
        workingOut: '\\(24 \\times 2 = 48\\)'
      },
      {
        explanation: 'Append two zeroes to get the final result.',
        workingOut: '\\(\\therefore\\; 48 \\times 100 = 4800\\)'
      }
    ],
    graphData: null
  },
  {
    id: 'y7-1e-q2f',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Carry out the calculation, using the any-order property for multiplication: \\(19 \\times 8 \\times 0\\)',
    a: '0',
    t: 'Multiplication',
    hint: 'Any sequence of multiplications that includes a 0 will result in 0.',
    solutionSteps: [
      {
        explanation: 'Any multiplication sequence that includes a 0 always evaluates to 0.',
        workingOut: '\\(x \\times 0 = 0\\)'
      },
      {
        explanation: 'Therefore, we can immediately know the answer without multiplying the other numbers.',
        workingOut: '\\(\\therefore\\; 19 \\times 8 \\times 0 = 0\\)'
      }
    ],
    graphData: null
  },
  {
    id: 'y7-1e-q2g',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Carry out the calculation, using the any-order property for multiplication: \\(1 \\times 47 \\times 20\\)',
    a: '940',
    t: 'Multiplication',
    hint: '1 multiplied by any number is that number itself.',
    solutionSteps: [
      {
        explanation: 'Multiplying by 1 does not change the value, so this is equivalent to multiplying 47 and 20.',
        workingOut: '\\(1 \\times 47 = 47\\)'
      },
      {
        explanation: 'Multiply 47 by 2, then append one zero.',
        workingOut: '\\(47 \\times 2 = 94\\)'
      },
      {
        explanation: 'We have found the final answer.',
        workingOut: '\\(\\therefore\\; 94 \\times 10 = 940\\)'
      }
    ],
    graphData: null
  },
  {
    id: 'y7-1e-q2h',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Carry out the calculation, using the any-order property for multiplication: \\(8 \\times 10 \\times 10 \\times 2\\)',
    a: '1600',
    t: 'Multiplication',
    hint: 'Multiply the single-digit numbers together first.',
    solutionSteps: [
      {
        explanation: 'Using the commutative property, first multiply the single-digit numbers 8 and 2.',
        workingOut: '\\(8 \\times 2 = 16\\)'
      },
      {
        explanation: 'Multiply the two 10s together to get 100.',
        workingOut: '\\(10 \\times 10 = 100\\)'
      },
      {
        explanation: 'Multiply the two results to get the final answer.',
        workingOut: '\\(\\therefore\\; 16 \\times 100 = 1600\\)'
      }
    ],
    graphData: null
  },
  {
    id: 'y7-1e-q2i',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Carry out the calculation, using the any-order property for multiplication: \\(6 \\times 9 \\times 4 \\times 5\\)',
    a: '1080',
    t: 'Multiplication',
    hint: 'Find numbers that multiply to a multiple of 10, like 4 and 5.',
    solutionSteps: [
      {
        explanation: 'Using the commutative property, first multiply 4 and 5 to get 20.',
        workingOut: '\\(4 \\times 5 = 20\\)'
      },
      {
        explanation: 'Multiply the remaining two numbers, 6 and 9.',
        workingOut: '\\(6 \\times 9 = 54\\)'
      },
      {
        explanation: 'Multiply the two results. Multiply 54 by 2 and append one zero.',
        workingOut: '\\(\\therefore\\; 54 \\times 20 = 1080\\)'
      }
    ],
    graphData: null
  },

  // Q3 a-b
  {
    id: 'y7-1e-q3a',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Fill in the box with a number to make the statement true: \\((4 \\times 5) \\times 8 = 4 \\times (\\Box \\times 8)\\)',
    a: '5',
    t: 'Multiplication',
    hint: 'Think about the associative property of multiplication.',
    solutionSteps: [
      {
        explanation: 'According to the associative property of multiplication, changing the grouping of numbers does not change the product.',
        workingOut: '\\((a \\times b) \\times c = a \\times (b \\times c)\\)'
      },
      {
        explanation: 'Therefore, both sides of the equation must contain the same numbers. The missing number on the right side is 5.',
        workingOut: '\\((4 \\times 5) \\times 8 = 4 \\times (5 \\times 8)\\)'
      },
      {
        explanation: 'We have found the correct number for the box.',
        workingOut: '\\(\\therefore\\; \\text{Box} = 5\\)'
      }
    ],
    graphData: null
  },
  {
    id: 'y7-1e-q3b',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Fill in the box with a number to make the statement true: \\((6 \\times 7) \\times (3 \\times 4) = 7 \\times 4 \\times (\\Box \\times 3)\\)',
    a: '6',
    t: 'Multiplication',
    hint: 'Think about the commutative and associative properties of multiplication.',
    solutionSteps: [
      {
        explanation: 'According to the commutative and associative properties of multiplication, we can reorder and group numbers freely.',
        workingOut: '\\((6 \\times 7) \\times (3 \\times 4) = 6 \\times 7 \\times 3 \\times 4\\)'
      },
      {
        explanation: 'Looking at the right side, the numbers 7, 4, and 3 are present. We need to find the number that is on the left side but missing on the right.',
        workingOut: '\\(7 \\times 4 \\times (\\Box \\times 3)\\)'
      },
      {
        explanation: 'The remaining number is 6, so the value in the box is 6.',
        workingOut: '\\(\\therefore\\; \\text{Box} = 6\\)'
      }
    ],
    graphData: null
  },

  // Q4
  {
    id: 'y7-1e-q4',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'Liam has 17 boxes, each containing 30 marbles. If he decides to redistribute the marbles equally among 30 boxes, how many marbles will there be in each box?',
    a: '17',
    t: 'Multiplication',
    hint: 'Think about the relationship between multiplication and division.',
    solutionSteps: [
      {
        explanation: 'First, find the total number of marbles Liam has. Since there are 17 boxes with 30 marbles each, multiply them.',
        workingOut: '\\(\\text{Total marbles} = 17 \\times 30\\)'
      },
      {
        explanation: 'Since these marbles need to be redistributed equally among 30 boxes, divide the total number by 30.',
        workingOut: '\\(\\text{Marbles per box} = (17 \\times 30) \\div 30\\)'
      },
      {
        explanation: 'Multiplying by 30 and then dividing by 30 leaves the original number, 17. Therefore, each box gets 17 marbles.',
        workingOut: '\\(\\therefore\\; 17 \\text{ marbles}\\)'
      }
    ],
    graphData: null
  },

  // Q5
  {
    id: 'y7-1e-q5',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'Eight friends buy a large box of lollipops. The lollipops come in 4 different flavours. How many lollipops are needed so that every person has three of each flavour?',
    a: '96',
    t: 'Multiplication',
    hint: 'Multiply the number of friends, flavours, and the number of each flavour per person together.',
    solutionSteps: [
      {
        explanation: 'First, find the total number of lollipops one person needs. Since they need 3 of each of the 4 flavours, multiply them.',
        workingOut: '\\(\\text{Lollipops per person} = 4 \\times 3 = 12\\)'
      },
      {
        explanation: 'Since there are 8 friends, multiply the number needed per person by 8 to find the total required.',
        workingOut: '\\(\\text{Total lollipops} = 12 \\times 8\\)'
      },
      {
        explanation: 'Multiply 12 by 8 to get the final answer.',
        workingOut: '\\(\\therefore\\; 96 \\text{ lollipops}\\)'
      }
    ],
    graphData: null
  },

  // Q6
  {
    id: 'y7-1e-q6',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'Tiles are arranged on a concrete floor in 15 rows of 20, and stacked 6 tiles high. How many tiles are there in total?',
    a: '1800',
    t: 'Multiplication',
    hint: 'Find the number of tiles in one layer first, then multiply by the height.',
    solutionSteps: [
      {
        explanation: 'To find the total number of tiles in one layer on the floor, multiply the 15 rows by the 20 columns.',
        workingOut: '\\(\\text{Tiles per layer} = 15 \\times 20\\)'
      },
      {
        explanation: 'Multiply 15 by 2 and append one zero to get 300.',
        workingOut: '\\(15 \\times 20 = 300\\)'
      },
      {
        explanation: 'Since there are 6 layers stacked, multiply the number of tiles in one layer by 6.',
        workingOut: '\\(\\text{Total tiles} = 300 \\times 6\\)'
      },
      {
        explanation: 'Multiply 3 by 6 and append two zeroes to find the total number of tiles.',
        workingOut: '\\(\\therefore\\; 1800 \\text{ tiles}\\)'
      }
    ],
    graphData: null
  },

  // Q7
  {
    id: 'y7-1e-q7',
    type: 'short_answer',
    difficulty: 'hard',
    timeLimit: 120,
    question: 'Sarah has 36 packets of trading cards. Each packet has 8 cards in it. She makes these into 12 new packets when some of her friends do not turn up. How many cards will each person now receive?',
    a: '24',
    t: 'Multiplication',
    hint: 'Calculate the total number of cards first, then divide by the new number of packets.',
    solutionSteps: [
      {
        explanation: 'First, find the total number of trading cards Sarah has. Multiply the 36 packets by the 8 cards in each packet.',
        workingOut: '\\(\\text{Total cards} = 36 \\times 8\\)'
      },
      {
        explanation: 'Multiply 36 by 8 to determine the total number of cards.',
        workingOut: '\\(36 \\times 8 = 288\\)'
      },
      {
        explanation: 'Now, these 288 cards must be divided equally into 12 new packets, so divide the total cards by 12.',
        workingOut: '\\(\\text{Cards per new packet} = 288 \\div 12\\)'
      },
      {
        explanation: 'Divide 288 by 12 to find the number of cards in each new packet.',
        workingOut: '\\(\\therefore\\; 24 \\text{ cards}\\)'
      }
    ],
    graphData: null
  }
];
