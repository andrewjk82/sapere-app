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
    type: 'mc',
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
    type: 'mc',
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
    type: 'mc',
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
    type: 'mc',
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
    type: 'mc',
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
    type: 'mc',
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
    type: 'mc',
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
    type: 'mc',
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
    type: 'mc',
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
    type: 'mc',
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
    type: 'mc',
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
    type: 'mc',
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
    type: 'mc',
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
    type: 'mc',
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
    type: 'mc',
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
    type: 'mc',
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
    type: 'mc',
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
    type: 'mc',
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
    type: 'mc',
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
    type: 'mc',
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
    type: 'mc',
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
  }
];

export const Y7_KILLARA_1995_SIMILAR = [
  // Variant questions with similar difficulty
  {
    id: 'y7-1-killara-var-q1',
    type: 'mc',
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
    type: 'mc',
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
    type: 'mc',
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
    type: 'mc',
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
    type: 'mc',
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
