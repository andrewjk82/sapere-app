export const Y7_CH1K_QUESTIONS = [
  // Q1a
  {
    id: 'y7-1k-q1a',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Use the long division algorithm to calculate:\n\\(864 \\div 16\\)',
    a: '54',
    t: 'The long division algorithm',
    hint: 'Divide 86 by 16 first, then bring down the 4.',
    solutionSteps: [
      {
        explanation: 'Set up the long division of 864 by 16. Determine how many times 16 goes into 86.',
        workingOut: '16 \\times 5 = 80'
      },
      {
        explanation: 'Subtract 80 from 86 to find the remainder, then bring down the next digit (4) to make 64.',
        workingOut: '86 - 80 = 6 \\implies 64'
      },
      {
        explanation: 'Determine how many times 16 goes into 64.',
        workingOut: '16 \\times 4 = 64'
      },
      {
        explanation: 'Subtract to find that the remainder is 0, giving the final quotient.',
        workingOut: '\\therefore\\; 54'
      }
    ],
    graphData: null
  },
  // Q1b
  {
    id: 'y7-1k-q1b',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Use the long division algorithm to calculate:\n\\(975 \\div 13\\)',
    a: '75',
    t: 'The long division algorithm',
    hint: 'Determine how many times 13 goes into 97.',
    solutionSteps: [
      {
        explanation: 'Set up the long division. Find how many times 13 goes into 97.',
        workingOut: '13 \\times 7 = 91'
      },
      {
        explanation: 'Subtract 91 from 97 and bring down the 5 to make 65.',
        workingOut: '97 - 91 = 6 \\implies 65'
      },
      {
        explanation: 'Divide 65 by 13.',
        workingOut: '13 \\times 5 = 65'
      },
      {
        explanation: 'The remainder is 0, which means the quotient is 75.',
        workingOut: '\\therefore\\; 75'
      }
    ],
    graphData: null
  },
  // Q1c
  {
    id: 'y7-1k-q1c',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Use the long division algorithm to calculate:\n\\(1512 \\div 18\\)',
    a: '84',
    t: 'The long division algorithm',
    hint: 'Divide 151 by 18 first.',
    solutionSteps: [
      {
        explanation: 'Find the largest multiple of 18 that is less than or equal to 151. Since 18 is close to 20, estimate around 8.',
        workingOut: '18 \\times 8 = 144'
      },
      {
        explanation: 'Subtract 144 from 151 and bring down 2 to make 72.',
        workingOut: '151 - 144 = 7 \\implies 72'
      },
      {
        explanation: 'Divide 72 by 18.',
        workingOut: '18 \\times 4 = 72'
      },
      {
        explanation: 'The remainder is 0, so the quotient is 84.',
        workingOut: '\\therefore\\; 84'
      }
    ],
    graphData: null
  },
  // Q1d
  {
    id: 'y7-1k-q1d',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Use the long division algorithm to calculate:\n\\(4158 \\div 22\\)',
    a: '189',
    t: 'The long division algorithm',
    hint: 'Divide 41 by 22 first.',
    solutionSteps: [
      {
        explanation: 'Divide 41 by 22.',
        workingOut: '22 \\times 1 = 22'
      },
      {
        explanation: 'Subtract 22 from 41 and bring down the 5 to make 195.',
        workingOut: '41 - 22 = 19 \\implies 195'
      },
      {
        explanation: 'Divide 195 by 22. Estimate by multiplying 22 by 8.',
        workingOut: '22 \\times 8 = 176'
      },
      {
        explanation: 'Subtract 176 from 195 and bring down the 8 to make 198.',
        workingOut: '195 - 176 = 19 \\implies 198'
      },
      {
        explanation: 'Divide 198 by 22.',
        workingOut: '22 \\times 9 = 198'
      },
      {
        explanation: 'The remainder is 0, so the final quotient is 189.',
        workingOut: '\\therefore\\; 189'
      }
    ],
    graphData: null
  },

  // Q2a
  {
    id: 'y7-1k-q2a',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'Use the long division algorithm to calculate. Provide your answer in the form "quotient r remainder" (e.g. 43 r 15):\n\\(3154 \\div 73\\)',
    a: '43 r 15',
    t: 'The long division algorithm',
    hint: 'Divide 315 by 73 first.',
    solutionSteps: [
      {
        explanation: 'Find the largest multiple of 73 less than or equal to 315. Try 73 multiplied by 4.',
        workingOut: '73 \\times 4 = 292'
      },
      {
        explanation: 'Subtract 292 from 315 and bring down 4 to make 234.',
        workingOut: '315 - 292 = 23 \\implies 234'
      },
      {
        explanation: 'Divide 234 by 73. Try 73 multiplied by 3.',
        workingOut: '73 \\times 3 = 219'
      },
      {
        explanation: 'Subtract 219 from 234 to find the final remainder.',
        workingOut: '234 - 219 = 15'
      },
      {
        explanation: 'The quotient is 43 and the remainder is 15.',
        workingOut: '\\therefore\\; 43 \\text{ r } 15'
      }
    ],
    graphData: null
  },
  // Q2b
  {
    id: 'y7-1k-q2b',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'Use the long division algorithm to calculate. Provide your answer in the form "quotient r remainder" (e.g. 88 r 18):\n\\(4682 \\div 53\\)',
    a: '88 r 18',
    t: 'The long division algorithm',
    hint: 'Divide 468 by 53 first.',
    solutionSteps: [
      {
        explanation: 'Divide 468 by 53. Estimate by multiplying 53 by 8.',
        workingOut: '53 \\times 8 = 424'
      },
      {
        explanation: 'Subtract 424 from 468 and bring down 2 to make 442.',
        workingOut: '468 - 424 = 44 \\implies 442'
      },
      {
        explanation: 'Divide 442 by 53. Try 53 multiplied by 8 again.',
        workingOut: '53 \\times 8 = 424'
      },
      {
        explanation: 'Subtract 424 from 442 to get the remainder.',
        workingOut: '442 - 424 = 18'
      },
      {
        explanation: 'So, the quotient is 88 with a remainder of 18.',
        workingOut: '\\therefore\\; 88 \\text{ r } 18'
      }
    ],
    graphData: null
  },
  // Q2c
  {
    id: 'y7-1k-q2c',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'Use the long division algorithm to calculate. Provide your answer in the form "quotient r remainder" (e.g. 81 r 22):\n\\(3829 \\div 47\\)',
    a: '81 r 22',
    t: 'The long division algorithm',
    hint: 'Divide 382 by 47 first.',
    solutionSteps: [
      {
        explanation: 'Divide 382 by 47. Estimate by multiplying 47 by 8.',
        workingOut: '47 \\times 8 = 376'
      },
      {
        explanation: 'Subtract 376 from 382 and bring down 9 to make 69.',
        workingOut: '382 - 376 = 6 \\implies 69'
      },
      {
        explanation: 'Divide 69 by 47.',
        workingOut: '47 \\times 1 = 47'
      },
      {
        explanation: 'Subtract 47 from 69 to find the remainder.',
        workingOut: '69 - 47 = 22'
      },
      {
        explanation: 'So, the quotient is 81 with a remainder of 22.',
        workingOut: '\\therefore\\; 81 \\text{ r } 22'
      }
    ],
    graphData: null
  },
  // Q2d
  {
    id: 'y7-1k-q2d',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'Use the long division algorithm to calculate. Provide your answer in the form "quotient r remainder" (e.g. 17 r 69):\n\\(1854 \\div 105\\)',
    a: '17 r 69',
    t: 'The long division algorithm',
    hint: 'Divide 185 by 105 first.',
    solutionSteps: [
      {
        explanation: 'Divide 185 by 105.',
        workingOut: '105 \\times 1 = 105'
      },
      {
        explanation: 'Subtract 105 from 185 and bring down 4 to make 804.',
        workingOut: '185 - 105 = 80 \\implies 804'
      },
      {
        explanation: 'Divide 804 by 105. Estimate using 7.',
        workingOut: '105 \\times 7 = 735'
      },
      {
        explanation: 'Subtract 735 from 804 to find the remainder.',
        workingOut: '804 - 735 = 69'
      },
      {
        explanation: 'So, the quotient is 17 with a remainder of 69.',
        workingOut: '\\therefore\\; 17 \\text{ r } 69'
      }
    ],
    graphData: null
  },

  // Q3
  {
    id: 'y7-1k-q3',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'If 5460 dollars is divided equally among 14 people, how much will each person receive? (Do not include the dollar sign or the word dollars in your answer)',
    a: '390',
    t: 'The long division algorithm',
    hint: 'Divide 5460 by 14 using long division.',
    solutionSteps: [
      {
        explanation: 'Set up the long division: divide 5460 by 14.',
        workingOut: '5460 \\div 14'
      },
      {
        explanation: 'Divide 54 by 14. 14 goes into 54 three times.',
        workingOut: '14 \\times 3 = 42'
      },
      {
        explanation: 'Subtract 42 from 54 and bring down the 6 to make 126.',
        workingOut: '54 - 42 = 12 \\implies 126'
      },
      {
        explanation: 'Divide 126 by 14. 14 goes into 126 nine times.',
        workingOut: '14 \\times 9 = 126'
      },
      {
        explanation: 'Bring down the 0 units. 0 divided by 14 is 0.',
        workingOut: '0 \\div 14 = 0'
      },
      {
        explanation: 'Each person receives 390 dollars.',
        workingOut: '\\therefore\\; 390'
      }
    ],
    graphData: null
  },

  // Q4
  {
    id: 'y7-1k-q4',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'If 13650 dollars is divided equally among 25 people, how much will each person receive? (Do not include the dollar sign or the word dollars in your answer)',
    a: '546',
    t: 'The long division algorithm',
    hint: 'Divide 13650 by 25.',
    solutionSteps: [
      {
        explanation: 'Divide 13650 by 25 using long division. First, divide 136 by 25.',
        workingOut: '25 \\times 5 = 125'
      },
      {
        explanation: 'Subtract 125 from 136 and bring down 5 to make 115.',
        workingOut: '136 - 125 = 11 \\implies 115'
      },
      {
        explanation: 'Divide 115 by 25. 25 goes into 115 four times.',
        workingOut: '25 \\times 4 = 100'
      },
      {
        explanation: 'Subtract 100 from 115 and bring down 0 to make 150.',
        workingOut: '115 - 100 = 15 \\implies 150'
      },
      {
        explanation: 'Divide 150 by 25.',
        workingOut: '25 \\times 6 = 150'
      },
      {
        explanation: 'Each person receives 546 dollars.',
        workingOut: '\\therefore\\; 546'
      }
    ],
    graphData: null
  },

  // Q5
  {
    id: 'y7-1k-q5',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'A piece of string that is 1485 cm long is to be cut into 33 equal lengths. How long is each piece? (Do not include units in your answer)',
    a: '45',
    t: 'The long division algorithm',
    hint: 'Divide 1485 by 33.',
    solutionSteps: [
      {
        explanation: 'Divide 1485 by 33. First, divide 148 by 33.',
        workingOut: '33 \\times 4 = 132'
      },
      {
        explanation: 'Subtract 132 from 148 and bring down 5 to make 165.',
        workingOut: '148 - 132 = 16 \\implies 165'
      },
      {
        explanation: 'Divide 165 by 33.',
        workingOut: '33 \\times 5 = 165'
      },
      {
        explanation: 'Each piece of string is 45 cm long.',
        workingOut: '\\therefore\\; 45'
      }
    ],
    graphData: null
  },

  // Q6
  {
    id: 'y7-1k-q6',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'There are 6245 golf balls to be packed into boxes of 35. How many boxes will be filled and how many golf balls will be left over?\nProvide your answer in the form "boxes, left over" (e.g. 178, 15).',
    a: '178, 15',
    t: 'The long division algorithm',
    hint: 'Divide 6245 by 35.',
    solutionSteps: [
      {
        explanation: 'Divide 6245 by 35. Start by dividing 62 by 35.',
        workingOut: '35 \\times 1 = 35'
      },
      {
        explanation: 'Subtract 35 from 62 and bring down 4 to make 274.',
        workingOut: '62 - 35 = 27 \\implies 274'
      },
      {
        explanation: 'Divide 274 by 35. Try multiplying 35 by 7.',
        workingOut: '35 \\times 7 = 245'
      },
      {
        explanation: 'Subtract 245 from 274 and bring down 5 to make 295.',
        workingOut: '274 - 245 = 29 \\implies 295'
      },
      {
        explanation: 'Divide 295 by 35. Try multiplying 35 by 8.',
        workingOut: '35 \\times 8 = 280'
      },
      {
        explanation: 'Subtract 280 from 295 to find the remainder of leftover balls.',
        workingOut: '295 - 280 = 15'
      },
      {
        explanation: 'So, 178 boxes are filled and 15 golf balls are left over.',
        workingOut: '\\text{Boxes} = 178, \\quad \\text{Leftover} = 15'
      }
    ],
    graphData: null
  },

  // Q7
  {
    id: 'y7-1k-q7',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'If 1872 school children are to be transported on 36 buses, how many children will there be on each bus, if each bus contains the same number of children?',
    a: '52',
    t: 'The long division algorithm',
    hint: 'Divide 1872 by 36.',
    solutionSteps: [
      {
        explanation: 'Divide 1872 by 36 using long division. First, divide 187 by 36.',
        workingOut: '36 \\times 5 = 180'
      },
      {
        explanation: 'Subtract 180 from 187 and bring down 2 to make 72.',
        workingOut: '187 - 180 = 7 \\implies 72'
      },
      {
        explanation: 'Divide 72 by 36.',
        workingOut: '36 \\times 2 = 72'
      },
      {
        explanation: 'There will be 52 children on each bus.',
        workingOut: '\\therefore\\; 52'
      }
    ],
    graphData: null
  },

  // Q8
  {
    id: 'y7-1k-q8',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'There are 24 buses available to transport 1128 fans to a football match. How many people will there be on each bus, if each bus contains the same number of people?',
    a: '47',
    t: 'The long division algorithm',
    hint: 'Divide 1128 by 24.',
    solutionSteps: [
      {
        explanation: 'Divide 1128 by 24 using long division. Start by dividing 112 by 24.',
        workingOut: '24 \\times 4 = 96'
      },
      {
        explanation: 'Subtract 96 from 112 and bring down 8 to make 168.',
        workingOut: '112 - 96 = 16 \\implies 168'
      },
      {
        explanation: 'Divide 168 by 24.',
        workingOut: '24 \\times 7 = 168'
      },
      {
        explanation: 'There will be 47 people on each bus.',
        workingOut: '\\therefore\\; 47'
      }
    ],
    graphData: null
  },

  // Q9
  {
    id: 'y7-1k-q9',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'A computer program runs for 8425 seconds. Convert this to hours, minutes and seconds.\nProvide your answer in the form "H hours, M minutes, S seconds" (e.g. 2 hours, 20 minutes, 25 seconds).',
    a: '2 hours, 20 minutes, 25 seconds',
    t: 'The long division algorithm',
    hint: 'Divide 8425 by 3600 to find hours, then divide the remainder by 60 to find minutes.',
    solutionSteps: [
      {
        explanation: 'Divide the total seconds by 3600 (since 1 hour = 3600 seconds) to find the number of hours.',
        workingOut: '8425 \\div 3600 = 2 \\quad \\text{remainder } 1225'
      },
      {
        explanation: 'Divide the remaining seconds (1225) by 60 (since 1 minute = 60 seconds) to find the minutes.',
        workingOut: '1225 \\div 60 = 20 \\quad \\text{remainder } 25'
      },
      {
        explanation: 'The remainder is the remaining seconds. Combine these results.',
        workingOut: '\\text{2 hours, 20 minutes, 25 seconds}'
      }
    ],
    graphData: null
  }
];
