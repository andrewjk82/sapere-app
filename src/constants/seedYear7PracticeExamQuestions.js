/**
 * Year 7 Mixed Practice Exam
 * Independently authored multiple-choice questions covering the same
 * topic/difficulty spread as a typical Year 7 half-yearly exam.
 * Total: 46 questions across y7-1, y7-2, y7-4, y7-7, y7-14, y7-17, y7-20.
 */

export const Y7_PRACTICE_EXAM_QUESTIONS = [
  // ─────────────────────────────────────────────────────────────────
  // CHAPTER 1: WHOLE NUMBERS
  // ─────────────────────────────────────────────────────────────────

  {
    id: 'y7-1-practice-q1',
    chapterId: 'y7-1',
    topicId: 'y7-1d',
    topicCode: '1D',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Subtraction',
    question: 'A tank holds 84,500 litres of water. After a leak, 12,750 litres have been lost. How much water remains?',
    options: ['71,750 L', '72,750 L', '71,250 L', '70,750 L'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Subtract the lost amount from the total.', workingOut: '84,500 - 12,750' },
      { explanation: 'Line up place values and subtract.', workingOut: '84,500 - 12,750 = 71,750' }
    ]
  },
  {
    id: 'y7-1-practice-q2',
    chapterId: 'y7-1',
    topicId: 'y7-1e',
    topicCode: '1E',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 90,
    t: 'Multiplication',
    question: 'Find the product of 46 and 7.',
    options: ['322', '312', '332', '302'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Split 46 into 40 + 6 and multiply each part by 7.', workingOut: '40 \\times 7 = 280, \\quad 6 \\times 7 = 42' },
      { explanation: 'Add the two parts.', workingOut: '280 + 42 = 322' }
    ]
  },
  {
    id: 'y7-1-practice-q3',
    chapterId: 'y7-1',
    topicId: 'y7-1e',
    topicCode: '1E',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 90,
    t: 'Multiplication',
    question: 'Which sum is equal to \\( 8 \\times 5 \\)?',
    options: [
      '5 + 5 + 5 + 5 + 5 + 5 + 5 + 5',
      '5 + 5 + 5 + 5 + 5 + 5 + 5',
      '5 + 5 + 5 + 5 + 5 + 5 + 5 + 5 + 5',
      '8 + 8 + 8 + 8'
    ],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Multiplication is repeated addition: \\( 8 \\times 5 \\) means 5 added 8 times.', workingOut: '5 + 5 + 5 + 5 + 5 + 5 + 5 + 5 (eight lots of 5)' },
      { explanation: 'Check the total matches.', workingOut: '8 \\times 5 = 40, and adding eight 5s gives 40 ✓' }
    ]
  },
  {
    id: 'y7-1-practice-q4',
    chapterId: 'y7-1',
    topicId: 'y7-1e',
    topicCode: '1E',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Multiplication',
    question: 'What is \\( 19 \\times 9 \\)?',
    options: ['171', '181', '161', '190'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Write 19 as 20 - 1 to make the multiplication easier.', workingOut: '19 \\times 9 = (20 - 1) \\times 9 = 180 - 9' },
      { explanation: 'Subtract to find the answer.', workingOut: '180 - 9 = 171' }
    ]
  },
  {
    id: 'y7-1-practice-q5',
    chapterId: 'y7-1',
    topicId: 'y7-1f',
    topicCode: '1F',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    t: 'Mental strategies and distributive law',
    question: 'Simplify \\( 62 \\times (45 + 5) \\).',
    options: ['3100', '3000', '3200', '2900'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Work out the bracket first.', workingOut: '45 + 5 = 50' },
      { explanation: 'Multiply.', workingOut: '62 \\times 50 = 3100' }
    ]
  },
  {
    id: 'y7-1-practice-q6',
    chapterId: 'y7-1',
    topicId: 'y7-1g',
    topicCode: '1G',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Place value',
    question: 'Write as a numeral: "Five million and seventeen"',
    options: ['5,000,017', '5,017,000', '5,000,170', '5,170,000'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Five million is 5,000,000.', workingOut: '5,000,000' },
      { explanation: 'Add seventeen (the units part).', workingOut: '5,000,000 + 17 = 5,000,017' }
    ]
  },
  {
    id: 'y7-1-practice-q7',
    chapterId: 'y7-1',
    topicId: 'y7-1g',
    topicCode: '1G',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Place value',
    question: 'Which expanded form correctly represents 6042?',
    options: [
      '\\( 6 \\times 1000 + 0 \\times 100 + 4 \\times 10 + 2 \\times 1 \\)',
      '\\( 6 \\times 1000 + 4 \\times 100 + 0 \\times 10 + 2 \\times 1 \\)',
      '\\( 6 \\times 100 + 0 \\times 10 + 4 \\times 10 + 2 \\times 1 \\)',
      '\\( 6 \\times 1000 + 0 \\times 100 + 2 \\times 10 + 4 \\times 1 \\)'
    ],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Break 6042 into thousands, hundreds, tens and units.', workingOut: '6042 = 6 \\text{ thousands} + 0 \\text{ hundreds} + 4 \\text{ tens} + 2 \\text{ units}' },
      { explanation: 'Write as an expanded multiplication sum.', workingOut: '6 \\times 1000 + 0 \\times 100 + 4 \\times 10 + 2 \\times 1' }
    ]
  },
  {
    id: 'y7-1-practice-q8',
    chapterId: 'y7-1',
    topicId: 'y7-1g',
    topicCode: '1G',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Place value',
    question: 'A base-10 model shows 3 flats (worth 100 each), 5 rods (worth 10 each) and 2 units (worth 1 each). What number does it represent?',
    options: ['352', '325', '235', '523'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Multiply each block type by its value.', workingOut: '3 \\times 100 = 300, \\quad 5 \\times 10 = 50, \\quad 2 \\times 1 = 2' },
      { explanation: 'Add the totals.', workingOut: '300 + 50 + 2 = 352' }
    ]
  },
  {
    id: 'y7-1-practice-q9',
    chapterId: 'y7-1',
    topicId: 'y7-1l',
    topicCode: '1L',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    t: 'Order of operations',
    question: 'Evaluate \\( 20 \\div 4 + 3 \\times 2 \\).',
    options: ['11', '22', '26', '7'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Follow order of operations: division and multiplication first, left to right.', workingOut: '20 \\div 4 = 5, \\quad 3 \\times 2 = 6' },
      { explanation: 'Then add.', workingOut: '5 + 6 = 11' }
    ]
  },
  {
    id: 'y7-1-practice-q10',
    chapterId: 'y7-1',
    topicId: 'y7-1m',
    topicCode: '1M',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 90,
    t: 'Revision',
    question: 'Which number sentence is true?',
    options: ['\\( 15 - 6 = 9 \\)', '\\( 12 + 5 = 18 \\)', '\\( 7 \\times 6 = 36 \\)', '\\( 45 \\div 5 = 8 \\)'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Check each option.', workingOut: '15 - 6 = 9 ✓ (the others are all incorrect)' }
    ]
  },
  {
    id: 'y7-1-practice-q11',
    chapterId: 'y7-1',
    topicId: 'y7-1m',
    topicCode: '1M',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Revision',
    question: 'What is the value of the digit 7 in the number 47,281?',
    options: ['7000', '700', '70', '7'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Identify the place-value column the digit 7 sits in.', workingOut: '47,281 — the 7 is in the thousands column' },
      { explanation: 'State its value.', workingOut: '7 \\text{ thousands} = 7000' }
    ]
  },
  {
    id: 'y7-1-practice-q12',
    chapterId: 'y7-1',
    topicId: 'y7-1m',
    topicCode: '1M',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Revision',
    question: 'Arrange 4021, 4012, 4102 and 4201 from smallest to largest.',
    options: [
      '4012, 4021, 4102, 4201',
      '4021, 4012, 4102, 4201',
      '4012, 4021, 4201, 4102',
      '4201, 4102, 4021, 4012'
    ],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Compare the digits from left to right (thousands are all 4, so compare hundreds next).', workingOut: '4012 and 4021 have 0 hundreds; 4102 has 1 hundred; 4201 has 2 hundreds' },
      { explanation: 'Order accordingly, smallest to largest.', workingOut: '4012 < 4021 < 4102 < 4201' }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // CHAPTER 2: FACTORS, MULTIPLES, PRIMES AND SQUARES
  // ─────────────────────────────────────────────────────────────────

  {
    id: 'y7-1-practice-q13',
    chapterId: 'y7-2',
    topicId: 'y7-2g',
    topicCode: '2G',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Squares and square roots',
    question: 'Find \\( \\sqrt{121} \\).',
    options: ['11', '10', '12', '21'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Ask: what number times itself equals 121?', workingOut: '? \\times ? = 121' },
      { explanation: 'Test 11.', workingOut: '11 \\times 11 = 121, so \\( \\sqrt{121} = 11 \\)' }
    ]
  },
  {
    id: 'y7-1-practice-q14',
    chapterId: 'y7-2',
    topicId: 'y7-2g',
    topicCode: '2G',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    t: 'Squares and square roots',
    question: 'Estimate \\( \\sqrt{3000} \\) to the nearest whole number.',
    options: ['55', '54', '58', '50'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Find two perfect squares that 3000 sits between.', workingOut: '54^2 = 2916, \\quad 55^2 = 3025' },
      { explanation: '3000 is much closer to 3025 than 2916.', workingOut: '\\sqrt{3000} \\approx 55' }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // CHAPTER 4: FRACTIONS
  // ─────────────────────────────────────────────────────────────────

  {
    id: 'y7-4-practice-q1',
    chapterId: 'y7-4',
    topicId: 'y7-4b',
    topicCode: '4B',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Equivalent fractions and simplest form',
    question: 'Simplify \\( \\frac{18}{24} \\) to simplest form.',
    options: ['\\( \\frac{3}{4} \\)', '\\( \\frac{2}{3} \\)', '\\( \\frac{5}{8} \\)', '\\( \\frac{4}{5} \\)'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Find the highest common factor of 18 and 24, which is 6.', workingOut: '\\frac{18 \\div 6}{24 \\div 6}' },
      { explanation: 'Divide.', workingOut: '\\frac{18 \\div 6}{24 \\div 6} = \\frac{3}{4}' }
    ]
  },
  {
    id: 'y7-4-practice-q2',
    chapterId: 'y7-4',
    topicId: 'y7-4b',
    topicCode: '4B',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Equivalent fractions and simplest form',
    question: 'A choir has 60 students, and 24 of them are in Year 7. What fraction, in simplest form, of the choir is NOT in Year 7?',
    options: ['\\( \\frac{3}{5} \\)', '\\( \\frac{2}{5} \\)', '\\( \\frac{3}{4} \\)', '\\( \\frac{5}{8} \\)'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Find how many are NOT in Year 7.', workingOut: '60 - 24 = 36' },
      { explanation: 'Write as a fraction of the whole choir and simplify (divide by 12).', workingOut: '\\frac{36}{60} = \\frac{3}{5}' }
    ]
  },
  {
    id: 'y7-4-practice-q3',
    chapterId: 'y7-4',
    topicId: 'y7-4c',
    topicCode: '4C',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Mixed numerals and division by whole numbers',
    question: 'Convert \\( \\frac{47}{6} \\) to a mixed numeral.',
    options: ['\\( 7\\frac{5}{6} \\)', '\\( 7\\frac{1}{6} \\)', '\\( 8\\frac{5}{6} \\)', '\\( 6\\frac{5}{6} \\)'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Divide 47 by 6.', workingOut: '47 \\div 6 = 7 \\text{ remainder } 5' },
      { explanation: 'Write as a mixed numeral.', workingOut: '\\frac{47}{6} = 7\\frac{5}{6}' }
    ]
  },
  {
    id: 'y7-4-practice-q4',
    chapterId: 'y7-4',
    topicId: 'y7-4c',
    topicCode: '4C',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Mixed numerals and division by whole numbers',
    question: 'Convert \\( \\frac{54}{9} \\) to a mixed numeral.',
    options: ['6', '5\\( \\frac{4}{9} \\)', '6\\( \\frac{1}{9} \\)', '5\\( \\frac{5}{9} \\)'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Divide 54 by 9.', workingOut: '54 \\div 9 = 6 \\text{ exactly}' },
      { explanation: 'Since it divides exactly, the result is a whole number.', workingOut: '\\frac{54}{9} = 6' }
    ]
  },
  {
    id: 'y7-4-practice-q5',
    chapterId: 'y7-4',
    topicId: 'y7-4d',
    topicCode: '4D',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Comparison of fractions',
    question: 'Arrange \\( \\frac{1}{6}, \\frac{1}{9}, \\frac{1}{4} \\) in descending order.',
    options: [
      '\\( \\frac{1}{4}, \\frac{1}{6}, \\frac{1}{9} \\)',
      '\\( \\frac{1}{9}, \\frac{1}{6}, \\frac{1}{4} \\)',
      '\\( \\frac{1}{6}, \\frac{1}{4}, \\frac{1}{9} \\)',
      '\\( \\frac{1}{4}, \\frac{1}{9}, \\frac{1}{6} \\)'
    ],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'When the numerator is 1, a smaller denominator means a larger fraction.', workingOut: 'Denominators: 4 < 6 < 9, so \\( \\frac{1}{4} > \\frac{1}{6} > \\frac{1}{9} \\)' },
      { explanation: 'Write in descending (largest to smallest) order.', workingOut: '\\frac{1}{4}, \\frac{1}{6}, \\frac{1}{9}' }
    ]
  },
  {
    id: 'y7-4-practice-q6',
    chapterId: 'y7-4',
    topicId: 'y7-4e',
    topicCode: '4E',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Addition and subtraction of fractions',
    question: 'Calculate \\( \\frac{5}{12} + \\frac{3}{12} - \\frac{2}{12} \\).',
    options: ['\\( \\frac{1}{2} \\)', '\\( \\frac{2}{3} \\)', '\\( \\frac{3}{4} \\)', '\\( \\frac{5}{12} \\)'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'The denominators are already the same, so combine the numerators.', workingOut: '5 + 3 - 2 = 6, \\text{ so } \\frac{6}{12}' },
      { explanation: 'Simplify by dividing by 6.', workingOut: '\\frac{6}{12} = \\frac{1}{2}' }
    ]
  },
  {
    id: 'y7-4-practice-q7',
    chapterId: 'y7-4',
    topicId: 'y7-4e',
    topicCode: '4E',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Addition and subtraction of fractions',
    question: 'Two thirds of a class walk to school and one sixth of the class cycle. What fraction of the class walk or cycle?',
    options: ['\\( \\frac{5}{6} \\)', '\\( \\frac{3}{4} \\)', '\\( \\frac{1}{2} \\)', '\\( \\frac{2}{3} \\)'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Convert to a common denominator of 6.', workingOut: '\\frac{2}{3} = \\frac{4}{6}' },
      { explanation: 'Add the two fractions.', workingOut: '\\frac{4}{6} + \\frac{1}{6} = \\frac{5}{6}' }
    ]
  },
  {
    id: 'y7-4-practice-q8',
    chapterId: 'y7-4',
    topicId: 'y7-4h',
    topicCode: '4H',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Multiplication of fractions',
    question: 'Evaluate \\( \\frac{1}{4} \\times 8 \\times 10 \\).',
    options: ['20', '18', '22', '24'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Multiply the whole numbers first.', workingOut: '8 \\times 10 = 80' },
      { explanation: 'Multiplying by \\( \\frac{1}{4} \\) is the same as dividing by 4.', workingOut: '80 \\div 4 = 20' }
    ]
  },
  {
    id: 'y7-4-practice-q9',
    chapterId: 'y7-4',
    topicId: 'y7-4h',
    topicCode: '4H',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Multiplication of fractions',
    question: 'Calculate \\( 96 \\times \\frac{1}{6} \\).',
    options: ['16', '14', '18', '20'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Multiplying by \\( \\frac{1}{6} \\) is the same as dividing by 6.', workingOut: '96 \\div 6 = 16' }
    ]
  },
  {
    id: 'y7-4-practice-q10',
    chapterId: 'y7-4',
    topicId: 'y7-4h',
    topicCode: '4H',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Multiplication of fractions',
    question: 'What is \\( 72 \\times \\frac{5}{8} \\)?',
    options: ['45', '40', '50', '54'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Divide 72 by the denominator, 8.', workingOut: '72 \\div 8 = 9' },
      { explanation: 'Multiply the result by the numerator, 5.', workingOut: '9 \\times 5 = 45' }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // CHAPTER 7: DECIMALS
  // ─────────────────────────────────────────────────────────────────

  {
    id: 'y7-7-practice-q1',
    chapterId: 'y7-7',
    topicId: 'y7-7a',
    topicCode: '7A',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 90,
    t: 'Place value and comparison of decimals',
    question: 'Which comparison is true?',
    options: ['\\( 6.4 > 6.04 \\)', '\\( 11.02 > 11.2 \\)', '\\( 3.5 < 3.05 \\)', '\\( 9.09 > 9.9 \\)'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Compare 6.4 and 6.04 by writing them with the same number of decimal places.', workingOut: '6.4 = 6.40' },
      { explanation: 'Since 40 hundredths is more than 4 hundredths, 6.40 > 6.04.', workingOut: '6.4 > 6.04 ✓' }
    ]
  },
  {
    id: 'y7-7-practice-q2',
    chapterId: 'y7-7',
    topicId: 'y7-7a',
    topicCode: '7A',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Place value and comparison of decimals',
    question: 'Which decimal is the smallest?',
    options: ['0.045', '0.405', '0.45', '0.54'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Write all decimals to the same number of places to compare fairly.', workingOut: '0.045, \\quad 0.405, \\quad 0.450, \\quad 0.540' },
      { explanation: 'Compare the tenths digit first.', workingOut: '0.045 has 0 tenths — smaller than all the others' }
    ]
  },
  {
    id: 'y7-7-practice-q3',
    chapterId: 'y7-7',
    topicId: 'y7-7a',
    topicCode: '7A',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Place value and comparison of decimals',
    question: 'On a number line, point Q is exactly halfway between 5.6 and 6.0. What value does point Q represent?',
    options: ['5.8', '5.7', '5.9', '5.75'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Find the midpoint by averaging the two endpoint values.', workingOut: '(5.6 + 6.0) \\div 2 = 11.6 \\div 2' },
      { explanation: 'Calculate the result.', workingOut: '11.6 \\div 2 = 5.8' }
    ]
  },
  {
    id: 'y7-7-practice-q4',
    chapterId: 'y7-7',
    topicId: 'y7-7a',
    topicCode: '7A',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Place value and comparison of decimals',
    question: 'Write \\( \\frac{4}{10} + \\frac{7}{1000} \\) as a single decimal.',
    options: ['0.407', '0.047', '0.47', '0.0407'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: '\\( \\frac{4}{10} \\) is 4 tenths and \\( \\frac{7}{1000} \\) is 7 thousandths.', workingOut: '4 \\text{ tenths} = 0.400, \\quad 7 \\text{ thousandths} = 0.007' },
      { explanation: 'Add the place values.', workingOut: '0.400 + 0.007 = 0.407' }
    ]
  },
  {
    id: 'y7-7-practice-q5',
    chapterId: 'y7-7',
    topicId: 'y7-7b',
    topicCode: '7B',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Converting decimals to fractions and fractions to decimals',
    question: 'Is \\( \\frac{2}{5} = 0.4 \\) true or false?',
    options: ['True', 'False — \\( \\frac{2}{5} = 0.25 \\)', 'False — \\( \\frac{2}{5} = 0.04 \\)', 'False — \\( \\frac{2}{5} = 4.0 \\)'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Divide 2 by 5 to convert the fraction to a decimal.', workingOut: '2 \\div 5 = 0.4' },
      { explanation: 'Compare to the given decimal.', workingOut: '0.4 = 0.4, so the statement is TRUE' }
    ]
  },
  {
    id: 'y7-7-practice-q6',
    chapterId: 'y7-7',
    topicId: 'y7-7d',
    topicCode: '7D',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Multiplication and division by powers of 10',
    question: 'What is \\( 5.283 \\times 100 \\)?',
    options: ['528.3', '52.83', '5283', '58.23'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Multiplying by 100 moves the decimal point 2 places to the right.', workingOut: '5.283 \\times 100 = 528.3' }
    ]
  },
  {
    id: 'y7-7-practice-q7',
    chapterId: 'y7-7',
    topicId: 'y7-7d',
    topicCode: '7D',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Multiplication and division by powers of 10',
    question: 'Solve: \\( \\square \\div 100 = 0.36 \\)',
    options: ['36', '3.6', '360', '0.036'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Reverse the operation: multiply both sides by 100.', workingOut: '\\square = 0.36 \\times 100' },
      { explanation: 'Calculate.', workingOut: '0.36 \\times 100 = 36' }
    ]
  },
  {
    id: 'y7-7-practice-q8',
    chapterId: 'y7-7',
    topicId: 'y7-7d',
    topicCode: '7D',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Multiplication and division by powers of 10',
    question: 'What is \\( 12.7 \\times 1000 \\)?',
    options: ['12,700', '1,270', '127,000', '1.27'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Multiplying by 1000 moves the decimal point 3 places to the right.', workingOut: '12.7 \\times 1000 = 12,700' }
    ]
  },
  {
    id: 'y7-7-practice-q9',
    chapterId: 'y7-7',
    topicId: 'y7-7e',
    topicCode: '7E',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Multiplication of one decimal by another',
    question: 'A ribbon costs \\( \\$3.15 \\) per metre. What is the cost of 4 metres?',
    options: ['\\( \\$12.60 \\)', '\\( \\$11.60 \\)', '\\( \\$13.60 \\)', '\\( \\$12.15 \\)'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Multiply the price per metre by the number of metres.', workingOut: '\\( 3.15 \\times 4 \\)' },
      { explanation: 'Multiply as whole numbers, then place the decimal point: \\( 315 \\times 4 = 1260 \\)', workingOut: '\\( 3.15 \\times 4 = \\$12.60 \\)' }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // CHAPTER 14: PERCENTAGES AND RATIOS
  // ─────────────────────────────────────────────────────────────────

  {
    id: 'y7-14-practice-q1',
    chapterId: 'y7-14',
    topicId: 'y7-14a',
    topicCode: '14A',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Percentages, fractions and decimals',
    question: 'Write 68% as a fraction in simplest form.',
    options: ['\\( \\frac{17}{25} \\)', '\\( \\frac{9}{20} \\)', '\\( \\frac{13}{25} \\)', '\\( \\frac{7}{20} \\)'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Write the percentage as a fraction out of 100.', workingOut: '68\\% = \\frac{68}{100}' },
      { explanation: 'Simplify by dividing top and bottom by their highest common factor, 4.', workingOut: '\\frac{68 \\div 4}{100 \\div 4} = \\frac{17}{25}' }
    ]
  },
  {
    id: 'y7-14-practice-q2',
    chapterId: 'y7-14',
    topicId: 'y7-14a',
    topicCode: '14A',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Percentages, fractions and decimals',
    question: 'What percentage is 0.72?',
    options: ['72%', '7.2%', '720%', '27%'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Multiply the decimal by 100 to convert to a percentage.', workingOut: '0.72 \\times 100 = 72' },
      { explanation: 'Add the percent symbol.', workingOut: '0.72 = 72\\%' }
    ]
  },
  {
    id: 'y7-14-practice-q3',
    chapterId: 'y7-14',
    topicId: 'y7-14a',
    topicCode: '14A',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Percentages, fractions and decimals',
    question: 'Express \\( \\frac{11}{20} \\) as a percentage.',
    options: ['55%', '45%', '11%', '20%'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Convert the fraction to a denominator of 100.', workingOut: '\\frac{11}{20} = \\frac{55}{100}' },
      { explanation: 'A fraction out of 100 is that number as a percentage.', workingOut: '\\frac{55}{100} = 55\\%' }
    ]
  },
  {
    id: 'y7-14-practice-q4',
    chapterId: 'y7-14',
    topicId: 'y7-14a',
    topicCode: '14A',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 90,
    t: 'Percentages, fractions and decimals',
    question: 'Is \\( 0.6 = 60\\% \\) true or false?',
    options: ['True', 'False — \\( 0.6 = 6\\% \\)', 'False — \\( 0.6 = 600\\% \\)', 'False — \\( 0.6 = 0.6\\% \\)'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Multiply the decimal by 100 to convert to a percentage.', workingOut: '0.6 \\times 100 = 60' },
      { explanation: 'Compare.', workingOut: '0.6 = 60\\%, \\text{ so the statement is TRUE}' }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // CHAPTER 17: TRANSFORMATIONS AND SYMMETRY
  // ─────────────────────────────────────────────────────────────────

  {
    id: 'y7-17-practice-q1',
    chapterId: 'y7-17',
    topicId: 'y7-17f',
    topicCode: '17F',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Symmetry',
    question: 'How many axes of symmetry does an isosceles triangle (with exactly two equal sides) have?',
    options: ['1', '0', '2', '3'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'An isosceles triangle can only be folded along the line from its apex to the midpoint of the unequal side.', workingOut: 'This gives exactly 1 axis of symmetry' }
    ]
  },
  {
    id: 'y7-17-practice-q2',
    chapterId: 'y7-17',
    topicId: 'y7-17g',
    topicCode: '17G',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Regular polygons',
    question: 'Which of the following is NOT a regular polygon?',
    options: ['Rectangle', 'Equilateral triangle', 'Square', 'Regular pentagon'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'A regular polygon must have all sides equal AND all angles equal.', workingOut: 'Equilateral triangle, square and regular pentagon all satisfy this' },
      { explanation: 'A rectangle has equal angles but its sides are not all equal.', workingOut: 'Rectangle is NOT a regular polygon' }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // CHAPTER 20: POLYHEDRA AND THREE-DIMENSIONAL DRAWING
  // ─────────────────────────────────────────────────────────────────

  {
    id: 'y7-20-practice-q1',
    chapterId: 'y7-20',
    topicId: 'y7-20a',
    topicCode: '20A',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 90,
    t: 'Polyhedra',
    question: 'A solid has 6 rectangular faces, with opposite faces equal in size. What is this shape called?',
    options: ['Cuboid', 'Cube', 'Square pyramid', 'Triangular prism'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Six rectangular faces (not all identical squares) describes a rectangular prism.', workingOut: 'This shape is also called a cuboid' }
    ]
  },
  {
    id: 'y7-20-practice-q2',
    chapterId: 'y7-20',
    topicId: 'y7-20a',
    topicCode: '20A',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 90,
    t: 'Polyhedra',
    question: 'A solid has one square base and four triangular faces meeting at a single point. What is this shape called?',
    options: ['Square pyramid', 'Cone', 'Tetrahedron', 'Cube'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'A square base with triangular faces meeting at an apex is a pyramid.', workingOut: 'Since the base is a square, this is a square pyramid' }
    ]
  },
  {
    id: 'y7-20-practice-q3',
    chapterId: 'y7-20',
    topicId: 'y7-20a',
    topicCode: '20A',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 90,
    t: 'Polyhedra',
    question: 'A solid is formed by cutting a sphere exactly in half. What is this shape called?',
    options: ['Hemisphere', 'Sphere', 'Cylinder', 'Cone'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: '"Hemi-" means half, so half of a sphere is a hemisphere.', workingOut: 'Answer: Hemisphere' }
    ]
  },
  {
    id: 'y7-20-practice-q4',
    chapterId: 'y7-20',
    topicId: 'y7-20a',
    topicCode: '20A',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 90,
    t: 'Polyhedra',
    question: 'A solid has one circular base and a curved surface that narrows to a single point. What is this shape called?',
    options: ['Cone', 'Cylinder', 'Pyramid', 'Sphere'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'One circular base plus a curved surface meeting at an apex describes a cone.', workingOut: 'A cylinder has two circular bases, so this must be a cone' }
    ]
  },
  {
    id: 'y7-20-practice-q5',
    chapterId: 'y7-20',
    topicId: 'y7-20a',
    topicCode: '20A',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 90,
    t: 'Polyhedra',
    question: 'A solid has two parallel triangular bases connected by three rectangular faces. What is this shape called?',
    options: ['Triangular prism', 'Triangular pyramid', 'Rectangular prism', 'Tetrahedron'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Two parallel congruent bases connected by rectangles is the definition of a prism.', workingOut: 'Since the bases are triangles, this is a triangular prism' }
    ]
  },
  {
    id: 'y7-20-practice-q6',
    chapterId: 'y7-20',
    topicId: 'y7-20a',
    topicCode: '20A',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 90,
    t: 'Polyhedra',
    question: 'A solid has six identical square faces. What is this shape called?',
    options: ['Cube', 'Rectangular prism', 'Square pyramid', 'Octahedron'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Six identical (congruent) square faces is the definition of a cube.', workingOut: 'A rectangular prism has rectangular faces that are not all identical squares' }
    ]
  },
  {
    id: 'y7-20-practice-q7',
    chapterId: 'y7-20',
    topicId: 'y7-20a',
    topicCode: '20A',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    t: 'Polyhedra',
    question: 'Which of these solids is NOT a polyhedron (i.e. has at least one curved surface)?',
    options: ['Cone', 'Cube', 'Triangular prism', 'Rectangular prism'],
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'A polyhedron is a solid made entirely of flat polygon faces.', workingOut: 'Cube, triangular prism and rectangular prism are all made of flat faces only' },
      { explanation: 'A cone has a curved surface, so it is not a polyhedron.', workingOut: 'Answer: Cone' }
    ]
  }
];
