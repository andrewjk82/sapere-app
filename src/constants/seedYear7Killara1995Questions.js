/**
 * Killara High School 1995 Year 7 Half-Yearly Exam
 * Converted to MCQ format with varied numbers/names/context
 * Total: 14 questions across y7-1, y7-4, y7-7, y7-14, y7-17, y7-20
 */

export const Y7_KILLARA_1995_QUESTIONS = [
  // ─────────────────────────────────────────────────────────────────
  // CHAPTER 1: WHOLE NUMBERS
  // ─────────────────────────────────────────────────────────────────

  {
    id: 'y7-1-killara-q1',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Whole numbers',
    question: 'Which calculation is correct?',
    options: [
      '\\( \\frac{1}{3} \\times 4 \\times 6 = 10 \\)',
      '\\( \\frac{1}{2} \\times 5 \\times 6 = 15 \\)',
      '\\( \\frac{1}{4} \\times 3 \\times 8 = 9 \\)',
      '\\( \\frac{1}{5} \\times 7 \\times 10 = 12 \\)'
    ],
    answer: '1',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Evaluate each option step-by-step.',
        workingOut: 'Check: \\( \\frac{1}{3} \\times 4 \\times 6 = \\frac{24}{3} = 8 \\) ✗'
      },
      {
        explanation: 'Try option 2.',
        workingOut: '\\( \\frac{1}{2} \\times 5 \\times 6 = \\frac{30}{2} = 15 \\) ✓'
      },
      {
        explanation: 'This is the correct answer.',
        workingOut: 'Option B is correct.'
      }
    ]
  },

  {
    id: 'y7-1-killara-q2',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 90,
    t: 'Place value',
    question: 'Which comparison is true?',
    options: [
      '\\( 12.4 < 12.04 \\)',
      '\\( 8.2 > 8.02 \\)',
      '\\( 15.3 < 15.03 \\)',
      '\\( 9.1 < 9.01 \\)'
    ],
    answer: '1',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Compare decimal place values.',
        workingOut: '12.4 means 12 and 4 tenths = 12.40\\n12.04 means 12 and 4 hundredths'
      },
      {
        explanation: 'Since 40 hundredths > 4 hundredths, we have 12.40 > 12.04',
        workingOut: '✗ Option A is false'
      },
      {
        explanation: 'Check option B: 8.2 vs 8.02',
        workingOut: '8.2 = 8.20, and 8.20 > 8.02 ✓'
      }
    ]
  },

  {
    id: 'y7-1-killara-q3',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 90,
    t: 'Whole numbers',
    question: 'What is the product of 27 and 8?',
    options: ['216', '215', '210', '224'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Multiply 27 × 8',
        workingOut: '27 × 8 = (20 + 7) × 8 = 160 + 56 = 216'
      }
    ]
  },

  {
    id: 'y7-1-killara-q4',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Place value',
    question: 'Write as a numeral: "Three million and forty-two"',
    options: ['3,000,420', '3,000,042', '3,042,000', '3,420,000'],
    answer: '1',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Break down the number: Three million = 3,000,000',
        workingOut: '3,000,000'
      },
      {
        explanation: 'Add forty-two (the units part)',
        workingOut: 'Forty-two = 42 in the ones and tens place'
      },
      {
        explanation: 'Combine',
        workingOut: '3,000,000 + 42 = 3,000,042'
      }
    ]
  },

  {
    id: 'y7-1-killara-q5',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    t: 'Order of operations',
    question: 'What is the value of \\( 10 ÷ 2 - 2 \\times 2 \\)?',
    options: ['8', '1', '6', '-1'],
    answer: '1',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Follow BODMAS/PEMDAS: Division and Multiplication first (left to right)',
        workingOut: '\\( 10 ÷ 2 = 5 \\)\\n\\( 2 \\times 2 = 4 \\)'
      },
      {
        explanation: 'Then Subtraction',
        workingOut: '\\( 5 - 4 = 1 \\)'
      }
    ]
  },

  {
    id: 'y7-1-killara-q6',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    t: 'Order of operations',
    question: 'Simplify \\( 85 \\times (102 + 8) \\)',
    options: ['9350', '8870', '8500', '9175'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Use the distributive property: \\( a(b + c) = ab + ac \\)',
        workingOut: '\\( 85 \\times (102 + 8) = 85 \\times 110 \\)'
      },
      {
        explanation: 'Alternatively, notice that 102 + 8 = 110',
        workingOut: '\\( 85 \\times 110 = 85 \\times 100 + 85 \\times 10 \\)'
      },
      {
        explanation: 'Calculate',
        workingOut: '= 8500 + 850 = 9350'
      }
    ]
  },

  {
    id: 'y7-1-killara-q7',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Whole numbers',
    question: 'Find \\( \\sqrt{81} \\)',
    options: ['7', '9', '8', '10'],
    answer: '1',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'The square root asks: what number times itself equals 81?',
        workingOut: '? × ? = 81'
      },
      {
        explanation: 'Test: 9 × 9 = 81',
        workingOut: 'Therefore, \\( \\sqrt{81} = 9 \\)'
      }
    ]
  },

  {
    id: 'y7-1-killara-q8',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Whole numbers',
    question: 'In a pile of 96,000 components, 3,200 are faulty. How many are good?',
    options: ['92,800', '93,200', '99,200', '92,000'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Good components = Total − Faulty',
        workingOut: '\\( 96,000 - 3,200 \\)'
      },
      {
        explanation: 'Subtract',
        workingOut: '\\( 96,000 - 3,200 = 92,800 \\)'
      }
    ]
  },

  {
    id: 'y7-1-killara-q9',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 90,
    t: 'Whole numbers',
    question: 'Which Roman numeral represents 1924?',
    options: ['MDCCCC', 'MCMXXIV', 'MCMVIV', 'MMXXIV'],
    answer: '1',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Break down 1924: 1000 + 900 + 20 + 4',
        workingOut: 'M = 1000, CM = 900, XX = 20, IV = 4'
      },
      {
        explanation: 'Combine',
        workingOut: 'M + CM + XX + IV = MCMXXIV'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // CHAPTER 4: FRACTIONS
  // ─────────────────────────────────────────────────────────────────

  {
    id: 'y7-4-killara-q1',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Fractions',
    question: 'Convert \\( \\frac{35}{8} \\) to a mixed numeral',
    options: [
      '\\( 4\\frac{1}{8} \\)',
      '\\( 4\\frac{3}{8} \\)',
      '\\( 5\\frac{1}{8} \\)',
      '\\( 3\\frac{7}{8} \\)'
    ],
    answer: '1',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Divide numerator by denominator: 35 ÷ 8',
        workingOut: '35 ÷ 8 = 4 remainder 3'
      },
      {
        explanation: 'Write as mixed number',
        workingOut: '\\( \\frac{35}{8} = 4\\frac{3}{8} \\)'
      }
    ]
  },

  {
    id: 'y7-4-killara-q2',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Fractions',
    question: 'In a group of 50 students, 30 are boys. What fraction of the group are girls?',
    options: [
      '\\( \\frac{2}{5} \\)',
      '\\( \\frac{3}{5} \\)',
      '\\( \\frac{1}{3} \\)',
      '\\( \\frac{2}{3} \\)'
    ],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Number of girls = Total − Boys',
        workingOut: '50 − 30 = 20 girls'
      },
      {
        explanation: 'Fraction of girls',
        workingOut: '\\( \\frac{20}{50} = \\frac{2}{5} \\) (after simplification)'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // CHAPTER 7: DECIMALS
  // ─────────────────────────────────────────────────────────────────

  {
    id: 'y7-7-killara-q1',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Decimals',
    question: 'Calculate \\( \\frac{9}{10} + \\frac{5}{1000} \\)',
    options: ['0.805', '0.85', '0.905', '0.95'],
    answer: '2',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Convert fractions to decimals',
        workingOut: '\\( \\frac{9}{10} = 0.9 \\)\\n\\( \\frac{5}{1000} = 0.005 \\)'
      },
      {
        explanation: 'Add',
        workingOut: '0.9 + 0.005 = 0.905'
      }
    ]
  },

  {
    id: 'y7-7-killara-q2',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Decimals',
    question: 'What is \\( 2.164 \\times 100 \\)?',
    options: ['21.64', '216.4', '2164', '21640'],
    answer: '1',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Multiplying by 100 moves the decimal point 2 places to the right',
        workingOut: '2.164 × 100'
      },
      {
        explanation: 'Move decimal 2 places right',
        workingOut: '2.164 → 216.4'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // CHAPTER 14: PERCENTAGES AND RATIOS
  // ─────────────────────────────────────────────────────────────────

  {
    id: 'y7-14-killara-q1',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Percentages and ratios',
    question: 'Express \\( \\frac{9}{25} \\) as a percentage',
    options: ['32%', '36%', '44%', '25%'],
    answer: '1',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'To convert to percentage, multiply by 100',
        workingOut: '\\( \\frac{9}{25} \\times 100 \\)'
      },
      {
        explanation: 'Calculate',
        workingOut: '= \\( 9 \\times 4 = 36\\% \\)'
      }
    ]
  },

  {
    id: 'y7-4-killara-q3',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 90,
    t: 'Fractions',
    question: 'Which fractions are equivalent?',
    options: [
      '\\( \\frac{3}{9} \\) and \\( \\frac{4}{12} \\)',
      '\\( \\frac{5}{12} \\) and \\( \\frac{10}{24} \\)',
      '\\( \\frac{7}{14} \\) and \\( \\frac{3}{6} \\)',
      '\\( \\frac{2}{8} \\) and \\( \\frac{3}{12} \\)'
    ],
    answer: '1',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Check each pair by simplification or cross multiplication.',
        workingOut: 'Option B: \\( \\frac{5}{12} \\) and \\( \\frac{10}{24} \\)\\nSimplify \\( \\frac{10}{24} = \\frac{5}{12} \\) ✓'
      }
    ]
  },

  {
    id: 'y7-4-killara-q4',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Fractions',
    question: 'Calculate \\( \\frac{7}{10} + \\frac{2}{10} - \\frac{1}{10} \\)',
    options: [
      '\\( \\frac{6}{10} \\)',
      '\\( \\frac{8}{10} \\)',
      '\\( \\frac{7}{10} \\)',
      '\\( \\frac{9}{10} \\)'
    ],
    answer: '1',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Add and subtract the numerators (same denominator)',
        workingOut: '\\( \\frac{7 + 2 - 1}{10} = \\frac{8}{10} \\)'
      }
    ]
  },

  {
    id: 'y7-7-killara-q3',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Decimals',
    question: 'Solve: ☐ ÷ 10 = 0.75',
    options: ['0.075', '7.5', '75', '0.75'],
    answer: '1',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'If ☐ ÷ 10 = 0.75, then ☐ = 0.75 × 10',
        workingOut: '☐ = 0.75 × 10 = 7.5'
      }
    ]
  },

  {
    id: 'y7-14-killara-q2',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Percentages and ratios',
    question: 'What percentage is 0.08?',
    options: ['0.8%', '8%', '80%', '0.08%'],
    answer: '1',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Convert decimal to percentage by multiplying by 100',
        workingOut: '0.08 × 100 = 8\\%'
      }
    ]
  },

  {
    id: 'y7-17-killara-q1',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Transformations and symmetry',
    question: 'How many axes of symmetry does an ellipse have?',
    options: ['0', '1', '2', '4'],
    answer: '2',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'An ellipse has a vertical and horizontal axis of symmetry.',
        workingOut: 'A standard ellipse has 2 axes of symmetry.'
      }
    ]
  },

  {
    id: 'y7-20-killara-q1',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 90,
    t: 'Polyhedra and three-dimensional drawing',
    question: 'What is the name of this 3D shape?',
    options: ['Triangular prism', 'Rectangular pyramid', 'Triangular pyramid', 'Cube'],
    answer: '2',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'This shape has a triangular base and 4 triangular faces.',
        workingOut: 'This is a triangular pyramid (tetrahedron).'
      }
    ]
  },

  {
    id: 'y7-20-killara-q2',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 90,
    t: 'Polyhedra and three-dimensional drawing',
    question: 'Which solid is NOT a prism?',
    options: [
      'Rectangular prism',
      'Triangular prism',
      'Pentagonal prism',
      'Sphere'
    ],
    answer: '3',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'A prism has two parallel, congruent bases.',
        workingOut: 'A sphere has no flat faces or bases. It is NOT a prism.'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // CHAPTER 1: WHOLE NUMBERS (additional coverage)
  // ─────────────────────────────────────────────────────────────────

  {
    id: 'y7-1-killara-q10',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 90,
    t: 'Whole numbers',
    question: 'Which Roman numeral has a value of 1000?',
    options: ['M', 'D', 'C', 'L'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Recall the values of the main Roman numeral symbols.',
        workingOut: 'M = 1000, D = 500, C = 100, L = 50'
      },
      {
        explanation: 'The symbol worth 1000 is M.',
        workingOut: 'Answer: M'
      }
    ]
  },

  {
    id: 'y7-1-killara-q11',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 90,
    t: 'Whole numbers',
    question: 'Which Roman numeral has a value of 500?',
    options: ['D', 'L', 'C', 'M'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Recall the values of the main Roman numeral symbols.',
        workingOut: 'D = 500, L = 50, C = 100, M = 1000'
      },
      {
        explanation: 'The symbol worth 500 is D.',
        workingOut: 'Answer: D'
      }
    ]
  },

  {
    id: 'y7-1-killara-q12',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 90,
    t: 'Whole numbers',
    question: 'Which sum is equal to \\( 9 \\times 6 \\)?',
    options: [
      '9 + 9 + 9 + 9 + 9 + 9',
      '9 + 9 + 9 + 9 + 9',
      '9 + 9 + 9 + 9 + 9 + 9 + 9',
      '6 + 6 + 6 + 6'
    ],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Multiplication is repeated addition: \\( 9 \\times 6 \\) means 9 added 6 times.',
        workingOut: '9 + 9 + 9 + 9 + 9 + 9 (six lots of 9)'
      },
      {
        explanation: 'Check the total.',
        workingOut: '9 \\times 6 = 54, and 9 + 9 + 9 + 9 + 9 + 9 = 54 ✓'
      }
    ]
  },

  {
    id: 'y7-1-killara-q13',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Whole numbers',
    question: 'What is \\( 34 \\times 7 \\)?',
    options: ['238', '234', '242', '224'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Split 34 into 30 + 4 and multiply each part by 7.',
        workingOut: '30 \\times 7 = 210, \\quad 4 \\times 7 = 28'
      },
      {
        explanation: 'Add the two parts together.',
        workingOut: '210 + 28 = 238'
      }
    ]
  },

  {
    id: 'y7-1-killara-q14',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Place value',
    question: 'Which expanded form correctly represents 4708?',
    options: [
      '\\( 4 \\times 1000 + 7 \\times 100 + 0 \\times 10 + 8 \\times 1 \\)',
      '\\( 4 \\times 1000 + 7 \\times 100 + 8 \\times 10 + 0 \\times 1 \\)',
      '\\( 4 \\times 1000 + 0 \\times 100 + 7 \\times 10 + 8 \\times 1 \\)',
      '\\( 4 \\times 100 + 7 \\times 10 + 0 \\times 10 + 8 \\times 1 \\)'
    ],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Break 4708 into its place values: thousands, hundreds, tens, units.',
        workingOut: '4708 = 4 \\text{ thousands} + 7 \\text{ hundreds} + 0 \\text{ tens} + 8 \\text{ units}'
      },
      {
        explanation: 'Write this as an expanded multiplication sum.',
        workingOut: '4 \\times 1000 + 7 \\times 100 + 0 \\times 10 + 8 \\times 1'
      }
    ]
  },

  {
    id: 'y7-1-killara-q15',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Place value',
    question: 'A base-10 model shows 4 flats (worth 100 each), 3 rods (worth 10 each) and 6 units (worth 1 each). What number does it represent?',
    options: ['436', '463', '346', '634'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Multiply each block type by its value and add.',
        workingOut: '4 \\times 100 = 400, \\quad 3 \\times 10 = 30, \\quad 6 \\times 1 = 6'
      },
      {
        explanation: 'Add the totals together.',
        workingOut: '400 + 30 + 6 = 436'
      }
    ]
  },

  {
    id: 'y7-1-killara-q16',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    t: 'Whole numbers',
    question: 'Estimate \\( \\sqrt{5500} \\) to the nearest whole number.',
    options: ['74', '70', '78', '66'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Find two perfect squares that 5500 sits between.',
        workingOut: '74^2 = 5476, \\quad 75^2 = 5625'
      },
      {
        explanation: '5500 is much closer to 5476 than 5625.',
        workingOut: '\\sqrt{5500} \\approx 74'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // CHAPTER 4: FRACTIONS (additional coverage)
  // ─────────────────────────────────────────────────────────────────

  {
    id: 'y7-4-killara-q5',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Fractions',
    question: 'What is \\( 84 \\times \\frac{1}{4} \\)?',
    options: ['21', '20', '24', '28'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Multiplying by \\( \\frac{1}{4} \\) is the same as dividing by 4.',
        workingOut: '84 \\div 4 = 21'
      }
    ]
  },

  {
    id: 'y7-4-killara-q6',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Fractions',
    question: 'A cake is cut into 6 equal slices and an identical second cake is also cut into 6 slices. Mia eats 2 slices from the first cake and 3 slices from the second. What fraction of a whole cake, in total, did Mia eat?',
    options: ['\\( \\frac{5}{6} \\)', '\\( \\frac{2}{3} \\)', '\\( \\frac{1}{2} \\)', '\\( \\frac{5}{12} \\)'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Both cakes are cut into the same number of slices, so the fractions have the same denominator.',
        workingOut: '\\( \\frac{2}{6} + \\frac{3}{6} \\)'
      },
      {
        explanation: 'Add the numerators, keeping the denominator the same.',
        workingOut: '\\( \\frac{2}{6} + \\frac{3}{6} = \\frac{5}{6} \\)'
      }
    ]
  },

  {
    id: 'y7-4-killara-q7',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Fractions',
    question: 'Arrange \\( \\frac{1}{3}, \\frac{1}{10}, \\frac{1}{4} \\) in ascending order.',
    options: [
      '\\( \\frac{1}{10}, \\frac{1}{4}, \\frac{1}{3} \\)',
      '\\( \\frac{1}{3}, \\frac{1}{4}, \\frac{1}{10} \\)',
      '\\( \\frac{1}{4}, \\frac{1}{10}, \\frac{1}{3} \\)',
      '\\( \\frac{1}{10}, \\frac{1}{3}, \\frac{1}{4} \\)'
    ],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'When the numerator is 1, a larger denominator means a smaller fraction.',
        workingOut: 'Denominators: 10 > 4 > 3, so fractions from smallest to largest: \\( \\frac{1}{10} < \\frac{1}{4} < \\frac{1}{3} \\)'
      },
      {
        explanation: 'Write in ascending (smallest to largest) order.',
        workingOut: '\\( \\frac{1}{10}, \\frac{1}{4}, \\frac{1}{3} \\)'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // CHAPTER 7: DECIMALS (additional coverage)
  // ─────────────────────────────────────────────────────────────────

  {
    id: 'y7-7-killara-q4',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Decimals',
    question: 'Is \\( \\frac{1}{3} = 0.3 \\) true or false?',
    options: ['False — \\( \\frac{1}{3} = 0.\\overline{3} \\)', 'True', 'False — \\( \\frac{1}{3} = 0.03 \\)', 'False — \\( \\frac{1}{3} = 3.0 \\)'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Divide 1 by 3 to convert the fraction to a decimal.',
        workingOut: '1 \\div 3 = 0.3333\\ldots = 0.\\overline{3}'
      },
      {
        explanation: 'Compare to the given decimal.',
        workingOut: '0.3 \\ne 0.\\overline{3}, so the statement is FALSE.'
      }
    ]
  },

  {
    id: 'y7-7-killara-q5',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Decimals',
    question: 'On a number line, point P is exactly halfway between 4.2 and 4.6. What value does point P represent?',
    options: ['4.4', '4.3', '4.5', '4.35'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Find the midpoint by averaging the two endpoint values.',
        workingOut: '(4.2 + 4.6) \\div 2 = 8.8 \\div 2'
      },
      {
        explanation: 'Calculate the result.',
        workingOut: '8.8 \\div 2 = 4.4'
      }
    ]
  },

  {
    id: 'y7-7-killara-q6',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Decimals',
    question: 'A shop sells pens for \\$2.35 each. What is the cost of 6 pens?',
    options: ['\\$14.10', '\\$13.10', '\\$14.70', '\\$12.10'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Multiply the price per pen by the number of pens.',
        workingOut: '2.35 \\times 6'
      },
      {
        explanation: 'Multiply as whole numbers then place the decimal point: \\( 235 \\times 6 = 1410 \\)',
        workingOut: '2.35 \\times 6 = \\$14.10'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // CHAPTER 14: PERCENTAGES AND RATIOS (additional coverage)
  // ─────────────────────────────────────────────────────────────────

  {
    id: 'y7-14-killara-q3',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Percentages and ratios',
    question: 'Write 44% as a fraction in simplest form.',
    options: ['\\( \\frac{11}{25} \\)', '\\( \\frac{9}{20} \\)', '\\( \\frac{12}{25} \\)', '\\( \\frac{7}{25} \\)'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Write the percentage as a fraction out of 100.',
        workingOut: '44\\% = \\frac{44}{100}'
      },
      {
        explanation: 'Simplify by dividing top and bottom by their highest common factor, 4.',
        workingOut: '\\frac{44 \\div 4}{100 \\div 4} = \\frac{11}{25}'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // CHAPTER 5: INTRODUCTION TO GEOMETRY (additional coverage)
  // ─────────────────────────────────────────────────────────────────

  {
    id: 'y7-5-killara-q1',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 90,
    t: 'An introduction to geometry',
    question: 'Which of the following is NOT an octagon (an 8-sided shape)?',
    options: ['Heptagon', 'Regular octagon', 'Stop-sign shape', 'Concave octagon'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'An octagon must have exactly 8 sides.',
        workingOut: 'Regular octagon, stop-sign shape and concave octagon all have 8 sides.'
      },
      {
        explanation: 'A heptagon has 7 sides, not 8.',
        workingOut: 'Heptagon is NOT an octagon.'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // CHAPTER 20: POLYHEDRA AND 3D SHAPES (additional coverage)
  // ─────────────────────────────────────────────────────────────────

  {
    id: 'y7-20-killara-q3',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 90,
    t: 'Polyhedra and three-dimensional drawing',
    question: 'A solid has one square base and four triangular faces meeting at a single point. What is this shape called?',
    options: ['Square pyramid', 'Cone', 'Tetrahedron', 'Cube'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'A square base with triangular faces meeting at an apex is a pyramid.',
        workingOut: 'Since the base is a square, this is a square pyramid.'
      }
    ]
  },

  {
    id: 'y7-20-killara-q4',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 90,
    t: 'Polyhedra and three-dimensional drawing',
    question: 'A solid is formed by cutting a sphere exactly in half. What is this shape called?',
    options: ['Hemisphere', 'Sphere', 'Cylinder', 'Cone'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: '"Hemi-" means half, so half of a sphere is a hemisphere.',
        workingOut: 'Answer: Hemisphere'
      }
    ]
  },

  {
    id: 'y7-20-killara-q5',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 90,
    t: 'Polyhedra and three-dimensional drawing',
    question: 'A solid has one circular base and a curved surface that narrows to a single point. What is this shape called?',
    options: ['Cone', 'Cylinder', 'Pyramid', 'Sphere'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'One circular base plus a curved surface meeting at a point (apex) describes a cone.',
        workingOut: 'A cylinder has two circular bases, so this must be a cone.'
      }
    ]
  },

  {
    id: 'y7-20-killara-q6',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 90,
    t: 'Polyhedra and three-dimensional drawing',
    question: 'A solid has two parallel triangular bases connected by three rectangular faces. What is this shape called?',
    options: ['Triangular prism', 'Triangular pyramid', 'Rectangular prism', 'Tetrahedron'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Two parallel congruent bases connected by rectangles is the definition of a prism.',
        workingOut: 'Since the bases are triangles, this is a triangular prism.'
      }
    ]
  },

  {
    id: 'y7-20-killara-q7',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 90,
    t: 'Polyhedra and three-dimensional drawing',
    question: 'A solid has six identical square faces. What is this shape called?',
    options: ['Cube', 'Rectangular prism', 'Square pyramid', 'Octahedron'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Six identical (congruent) square faces is the definition of a cube.',
        workingOut: 'A rectangular prism has rectangular faces that are not all identical squares.'
      }
    ]
  }
];

export const Y7_KILLARA_1995_SIMILAR = [
  // Variant questions with similar difficulty
  {
    id: 'y7-1-killara-var-q1',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Whole numbers',
    question: 'Which calculation is correct?',
    options: [
      '\\( \\frac{1}{2} \\times 7 \\times 8 = 26 \\)',
      '\\( \\frac{1}{3} \\times 6 \\times 9 = 18 \\)',
      '\\( \\frac{1}{4} \\times 4 \\times 10 = 12 \\)',
      '\\( \\frac{1}{5} \\times 5 \\times 12 = 10 \\)'
    ],
    answer: '1',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Evaluate each option.',
        workingOut: 'Option B: \\( \\frac{1}{3} \\times 6 \\times 9 = \\frac{54}{3} = 18 \\) ✓'
      }
    ]
  },

  {
    id: 'y7-1-killara-var-q2',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Place value',
    question: 'Which comparison is correct?',
    options: [
      '\\( 7.5 < 7.05 \\)',
      '\\( 14.3 > 14.03 \\)',
      '\\( 6.2 < 6.02 \\)',
      '\\( 11.1 < 11.01 \\)'
    ],
    answer: '1',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Compare: 14.3 vs 14.03',
        workingOut: '14.3 = 14.30 > 14.03 ✓'
      }
    ]
  },

  {
    id: 'y7-4-killara-var-q1',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Fractions',
    question: 'Convert \\( \\frac{42}{7} \\) to a mixed numeral',
    options: [
      '\\( 5\\frac{2}{7} \\)',
      '\\( 6 \\)',
      '\\( 6\\frac{1}{7} \\)',
      '\\( 5\\frac{5}{7} \\)'
    ],
    answer: '1',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Divide: 42 ÷ 7 = 6 exactly',
        workingOut: '\\( \\frac{42}{7} = 6 \\)'
      }
    ]
  },

  {
    id: 'y7-7-killara-var-q1',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Decimals',
    question: 'What is \\( 3.456 \\times 100 \\)?',
    options: ['34.56', '345.6', '3456', '34560'],
    answer: '1',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Moving decimal 2 places to the right',
        workingOut: '3.456 × 100 = 345.6'
      }
    ]
  },

  {
    id: 'y7-14-killara-var-q1',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Percentages and ratios',
    question: 'Express \\( \\frac{3}{20} \\) as a percentage',
    options: ['15%', '20%', '25%', '30%'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Multiply by 100 to get percentage',
        workingOut: '\\( \\frac{3}{20} \\times 100 = \\frac{300}{20} = 15\\% \\)'
      }
    ]
  }
];
