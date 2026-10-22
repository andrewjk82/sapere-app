/**
 * Hornsby Girls High School — Year 7 Mathematics Assessment 4, Term 4 2021
 * Transcribed from the school's official assessment + solutions paper.
 *
 * Each question is tagged with its REAL chapter/topic id from the actual
 * Cambridge-style curriculum tree (src/constants/curriculumData.js) so it
 * shows up inside the matching topic, not just as a standalone exam paper.
 *
 * The 4 Pythagoras' theorem questions (Q19, Q20, Q23a, Q23b) are NOT part
 * of the Year 7 curriculum in this textbook — Pythagoras is first taught in
 * Year 8 Chapter 8 — so they are tagged y8-8 and exported separately in
 * Y7_TERM4_ASSESSMENT_2021_Y8_PYTHAGORAS_QUESTIONS.
 */

export const Y7_TERM4_ASSESSMENT_2021_QUESTIONS = [
  // ─────────────────────────────────────────────────────────────────
  // MULTIPLE CHOICE — Q1-9 Fractions, Decimals, Percentages
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'hghs-y7-t4-2021-q1',
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4b',
    topicCode: '4B',
    topicTitle: 'Equivalent fractions and simplest form',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 90,
    question: 'The equivalent fraction of \\(\\dfrac{4}{24}\\) is:',
    opts: ['\\(\\dfrac{1}{12}\\)', '\\(\\dfrac{2}{18}\\)', '\\(\\dfrac{3}{18}\\)', '\\(\\dfrac{4}{14}\\)'],
    a: 2,
    answer: '2',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Simplify \\(\\dfrac{4}{24}\\) first by dividing top and bottom by their common factor 4.', workingOut: '\\dfrac{4}{24} = \\dfrac{1}{6}', graphData: null },
      { explanation: 'Now check which option also simplifies to \\(\\dfrac{1}{6}\\). Multiply \\(\\dfrac{1}{6}\\) by \\(\\dfrac{3}{3}\\).', workingOut: '\\dfrac{1}{6} \\times \\dfrac{3}{3} = \\dfrac{3}{18}', graphData: null },
      { explanation: 'Pitfall: \\(\\dfrac{2}{18}\\) looks tempting because 18 also appears, but \\(\\dfrac{2}{18} = \\dfrac{1}{9} \\neq \\dfrac{1}{6}\\) — always simplify fully before comparing.', workingOut: '\\text{Answer: } \\dfrac{3}{18}', graphData: null }
    ]
  },
  {
    id: 'hghs-y7-t4-2021-q2',
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4c',
    topicCode: '4C',
    topicTitle: 'Mixed numerals and division by whole numbers',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    question: '\\(\\dfrac{200}{24}\\) can be written as:',
    opts: ['\\(8\\dfrac{1}{4}\\)', '\\(9\\dfrac{1}{4}\\)', '\\(8\\dfrac{1}{3}\\)', '\\(9\\dfrac{1}{3}\\)'],
    a: 2,
    answer: '2',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Divide 200 by 24 to find the whole number part and the remainder.', workingOut: '200 \\div 24 = 8 \\text{ remainder } 8', graphData: null },
      { explanation: 'Write the remainder over the original denominator, then simplify the fraction part.', workingOut: '8\\dfrac{8}{24} = 8\\dfrac{1}{3}', graphData: null },
      { explanation: 'Pitfall: dividing top and bottom by the wrong factor (e.g. 8/24 → 1/4 instead of 1/3) gives the wrong mixed numeral — always check the simplified fraction against the actual HCF (8).', workingOut: '\\text{Answer: } 8\\dfrac{1}{3}', graphData: null }
    ]
  },
  {
    id: 'hghs-y7-t4-2021-q3',
    chapterId: 'y7-14',
    chapterTitle: 'Chapter 14: Percentages and ratios',
    topicId: 'y7-14a',
    topicCode: '14A',
    topicTitle: 'Percentages, fractions and decimals',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    question: '\\(\\dfrac{2}{3}\\) written as a percentage is:',
    opts: ['\\(60\\%\\)', '\\(66\\dfrac{2}{3}\\%\\)', '\\(66\\%\\)', '\\(66\\dfrac{1}{3}\\%\\)'],
    a: 1,
    answer: '1',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'To convert a fraction to a percentage, multiply by 100%.', workingOut: '\\dfrac{2}{3} \\times 100\\% = \\dfrac{200}{3}\\%', graphData: null },
      { explanation: 'Divide 200 by 3 to get the mixed-numeral percentage.', workingOut: '200 \\div 3 = 66 \\text{ remainder } 2 \\implies 66\\dfrac{2}{3}\\%', graphData: null },
      { explanation: 'Pitfall: rounding to a plain 66% or misplacing the remainder as \\(66\\dfrac{1}{3}\\%\\) both lose the exact value — keep it as an exact fraction unless told to round.', workingOut: '\\text{Answer: } 66\\dfrac{2}{3}\\%', graphData: null }
    ]
  },
  {
    id: 'hghs-y7-t4-2021-q4',
    chapterId: 'y7-7',
    chapterTitle: 'Chapter 7: Decimals',
    topicId: 'y7-7b',
    topicCode: '7B',
    topicTitle: 'Converting decimals to fractions and fractions to decimals',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question: '\\(0.\\dot{6}\\) (0.6 recurring) expressed as a fraction is:',
    opts: ['\\(\\dfrac{1}{3}\\)', '\\(\\dfrac{2}{3}\\)', '\\(\\dfrac{1}{6}\\)', '\\(\\dfrac{5}{6}\\)'],
    a: 1,
    answer: '1',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Let \\(x\\) equal the recurring decimal, and write out enough repeating digits to see the pattern clearly. Label this equation (1).', workingOut: 'x = 0.\\dot{6} = 0.6666\\ldots \\quad (1)', graphData: null },
      { explanation: 'Since exactly ONE digit repeats, multiply both sides of (1) by 10 to shift the decimal point one place — this lines up the repeating part of \\(10x\\) with the repeating part of \\(x\\). Label this equation (2).', workingOut: '10x = 6.6666\\ldots \\quad (2)', graphData: null },
      { explanation: 'Subtract equation (1) from equation (2). Because both sides have exactly the same repeating "…6666…" tail, subtracting cancels the recurring part completely, leaving a whole number.', workingOut: '(2) - (1): \\quad 10x - x = 6.6666\\ldots - 0.6666\\ldots \\implies 9x = 6', graphData: null },
      { explanation: 'Divide both sides by 9, then simplify the fraction by dividing top and bottom by their HCF, 3.', workingOut: 'x = \\dfrac{6}{9} = \\dfrac{2}{3}', graphData: null },
      { explanation: 'Pitfall: multiplying by the wrong power of 10 (e.g. 100x instead of 10x) misaligns the repeating digits so they do NOT cancel in the subtraction — always multiply by \\(10^{(\\text{number of repeating digits})}\\), which is just \\(10^1=10\\) here since only one digit (6) repeats.', workingOut: '\\text{Answer: } x = \\dfrac{2}{3}', graphData: null }
    ]
  },
  {
    id: 'hghs-y7-t4-2021-q5',
    chapterId: 'y7-7',
    chapterTitle: 'Chapter 7: Decimals',
    topicId: 'y7-7h',
    topicCode: '7H',
    topicTitle: 'Rounding of decimals',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 60,
    question: '8.763 rounded to one decimal place is:',
    opts: ['8.7', '8.76', '8.8', '9'],
    a: 2,
    answer: '2',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'To round to one decimal place, look at the second decimal digit (the "rounding" digit).', workingOut: '8.7\\underline{6}3', graphData: null },
      { explanation: 'The digit after the first decimal place is 6, which is 5 or more, so round the first decimal digit up.', workingOut: '8.7 \\to 8.8', graphData: null },
      { explanation: 'Pitfall: rounding to 8.7 mistakenly truncates instead of rounding; rounding all the way to 9 rounds to the nearest whole number instead of one decimal place.', workingOut: '\\text{Answer: } 8.8', graphData: null }
    ]
  },
  {
    id: 'hghs-y7-t4-2021-q6',
    chapterId: 'y7-14',
    chapterTitle: 'Chapter 14: Percentages and ratios',
    topicId: 'y7-14a',
    topicCode: '14A',
    topicTitle: 'Percentages, fractions and decimals',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 150,
    question: '52%, 0.5, 60%, 0.06, 5%, placed in ascending order, is:',
    opts: [
      '\\(5\\%\\), \\(0.06\\), \\(0.5\\), \\(52\\%\\), \\(60\\%\\)',
      '\\(0.06\\), \\(5\\%\\), \\(0.5\\), \\(0.52\\), \\(60\\%\\)',
      '\\(0.06\\), \\(0.5\\), \\(5\\%\\), \\(0.52\\), \\(60\\%\\)',
      '\\(5\\%\\), \\(0.5\\), \\(0.06\\), \\(52\\%\\), \\(60\\%\\)'
    ],
    a: 0,
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Convert every value to a percentage so they can be compared directly.', workingOut: '52\\%,\\ 0.5 = 50\\%,\\ 60\\%,\\ 0.06 = 6\\%,\\ 5\\%', graphData: null },
      { explanation: 'Order the percentages from smallest to largest.', workingOut: '5\\% < 6\\% < 50\\% < 52\\% < 60\\%', graphData: null },
      { explanation: 'Pitfall: comparing digits without converting to the same form (e.g. treating 0.06 as bigger than 5% because "6 > 5") gives a scrambled order — always convert to one common form first.', workingOut: '\\text{Answer: } 5\\%,\\ 0.06,\\ 0.5,\\ 52\\%,\\ 60\\%', graphData: null }
    ]
  },
  {
    id: 'hghs-y7-t4-2021-q7',
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4b',
    topicCode: '4B',
    topicTitle: 'Equivalent fractions and simplest form',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 150,
    question: 'The value of \\(x\\) in the sequence \\(\\dfrac{2}{5},\\ \\dfrac{6}{10},\\ \\dfrac{16}{20},\\ 1,\\ \\dfrac{x}{10},\\ \\dfrac{28}{20}\\) is:',
    opts: ['9', '10', '11', '12'],
    a: 3,
    answer: '3',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Rewrite every term as an equivalent fraction with denominator 5, to see the pattern in the numerators.', workingOut: '\\dfrac{2}{5},\\ \\dfrac{3}{5},\\ \\dfrac{4}{5},\\ \\dfrac{5}{5},\\ \\dfrac{?}{5},\\ \\dfrac{7}{5}', graphData: null },
      { explanation: 'The numerators increase by 1 each term, so the missing fifths-numerator is 6, giving \\(\\dfrac{6}{5}\\).', workingOut: '\\dfrac{6}{5} = \\dfrac{x}{10} \\implies x = 6 \\times 2', graphData: null },
      { explanation: 'Pitfall: reading the pattern directly off \\(\\dfrac{x}{10}\\) without converting first (e.g. guessing \\(x=9\\)) misses that the term needs scaling by 2 to match denominator 10.', workingOut: '\\text{Answer: } x = 12', graphData: null }
    ]
  },
  {
    id: 'hghs-y7-t4-2021-q8',
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4d',
    topicCode: '4D',
    topicTitle: 'Comparison of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 150,
    question: 'The smallest fraction out of \\(\\dfrac{2}{3},\\ \\dfrac{1}{5},\\ \\dfrac{2}{7},\\ \\dfrac{4}{32},\\ \\dfrac{3}{10}\\) is:',
    opts: ['\\(\\dfrac{2}{3}\\)', '\\(\\dfrac{1}{5}\\)', '\\(\\dfrac{2}{7}\\)', '\\(\\dfrac{4}{32}\\)'],
    a: 3,
    answer: '3',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Convert each fraction to a decimal so they can be compared on the same scale.', workingOut: '\\dfrac{2}{3} \\approx 0.67,\\ \\dfrac{1}{5} = 0.2,\\ \\dfrac{2}{7} \\approx 0.29,\\ \\dfrac{4}{32} = 0.125,\\ \\dfrac{3}{10} = 0.3', graphData: null },
      { explanation: 'Compare the decimals to find the smallest.', workingOut: '0.125 < 0.2 < 0.29 < 0.3 < 0.67', graphData: null },
      { explanation: 'Pitfall: judging fraction size by numerator or denominator alone (e.g. assuming \\(\\dfrac{1}{5}\\) is smallest because it has the smallest numerator) ignores that \\(\\dfrac{4}{32}\\) simplifies to \\(\\dfrac{1}{8} = 0.125\\), which is smaller still.', workingOut: '\\text{Answer: } \\dfrac{4}{32}', graphData: null }
    ]
  },
  {
    id: 'hghs-y7-t4-2021-q9',
    chapterId: 'y7-14',
    chapterTitle: 'Chapter 14: Percentages and ratios',
    topicId: 'y7-14c',
    topicCode: '14C',
    topicTitle: 'Percentage of a quantity',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    question: '\\(12\\dfrac{1}{2}\\%\\) of \\$680 can be found by:',
    opts: ['\\(12.5 \\times 680\\)', '\\(680 \\div 4\\)', '\\(680 \\times \\dfrac{3}{4}\\)', '\\(680 \\div 8\\)'],
    a: 3,
    answer: '3',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Write \\(12\\dfrac{1}{2}\\%\\) as a fraction of 100.', workingOut: '12\\dfrac{1}{2}\\% = \\dfrac{12.5}{100} = \\dfrac{125}{1000}', graphData: null },
      { explanation: 'Simplify the fraction to its simplest form.', workingOut: '\\dfrac{125}{1000} = \\dfrac{1}{8}', graphData: null },
      { explanation: 'Pitfall: forgetting the % ÷100 step and using "12.5 × 680" leaves the answer 100 times too big — finding \\(\\dfrac{1}{8}\\) of 680 (i.e. \\(680 \\div 8\\)) is the efficient mental-strategy route.', workingOut: '\\text{Answer: } 680 \\div 8', graphData: null }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // MULTIPLE CHOICE — Q10-14 Equations
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'hghs-y7-t4-2021-q10',
    chapterId: 'y7-15',
    chapterTitle: 'Chapter 15: Solving equations',
    topicId: 'y7-15c',
    topicCode: '15C',
    topicTitle: 'Solving equations involving more than one step',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    question: 'When solving the equation \\(\\dfrac{21+4x}{3} = 18\\), which step should be performed last?',
    opts: ['Dividing both sides by 4', 'Adding 21 to both sides', 'Subtracting 21 from both sides', 'Multiplying both sides by 3'],
    a: 0,
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'To undo the operations in the correct order, work from the outside in: first undo the division by 3, then the addition of 21, then the multiplication by 4.', workingOut: '\\dfrac{21+4x}{3} = 18 \\;\\xrightarrow{\\times 3}\\; 21+4x = 54', graphData: null },
      { explanation: 'Next undo the "+21" by subtracting 21 from both sides.', workingOut: '21+4x = 54 \\;\\xrightarrow{-21}\\; 4x = 33', graphData: null },
      { explanation: 'The last step left to undo the "\\(\\times 4\\)" is to divide both sides by 4. Pitfall: doing "÷4" too early (before removing the ÷3 and +21) breaks the order of operations and gives a wrong value of x.', workingOut: '\\text{Last step: } \\div 4 \\text{ on both sides}', graphData: null }
    ]
  },
  {
    id: 'hghs-y7-t4-2021-q11',
    chapterId: 'y7-15',
    chapterTitle: 'Chapter 15: Solving equations',
    topicId: 'y7-15c',
    topicCode: '15C',
    topicTitle: 'Solving equations involving more than one step',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 90,
    question: 'The solution to the equation \\(2x - 5 = 1\\) is:',
    opts: ['-2', '3', '2', '-3'],
    a: 1,
    answer: '1',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Add 5 to both sides to isolate the term with \\(x\\).', workingOut: '2x - 5 = 1 \\implies 2x = 6', graphData: null },
      { explanation: 'Divide both sides by 2.', workingOut: 'x = 3', graphData: null },
      { explanation: 'Pitfall: a sign slip when moving the "-5" (e.g. writing \\(2x = 1 - 5 = -4\\)) leads to \\(x = -2\\) instead — always add the opposite operation to both sides.', workingOut: '\\text{Answer: } x = 3', graphData: null }
    ]
  },
  {
    id: 'hghs-y7-t4-2021-q12',
    chapterId: 'y7-15',
    chapterTitle: 'Chapter 15: Solving equations',
    topicId: 'y7-15b',
    topicCode: '15B',
    topicTitle: 'Equivalent equations',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    question: 'Equation A: \\(x - 3 = 10\\) is equivalent to Equation B: \\(4x - 12 = 40\\) because:',
    opts: [
      'both sides of equation A have been multiplied by 4 to give equation B.',
      'both sides of equation A have been divided by 4 to give equation B.',
      'both sides of equation A have had 15 subtracted to give equation B.',
      'the two equations are not equivalent'
    ],
    a: 0,
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Multiply every term of equation A by 4 and see if it matches equation B.', workingOut: '4(x-3) = 4(10) \\implies 4x - 12 = 40', graphData: null },
      { explanation: 'Compare the result to equation B — they match exactly.', workingOut: '4x - 12 = 40 \\;\\checkmark', graphData: null },
      { explanation: 'Pitfall: assuming the equations are unrelated (option D) just because they look different — always test a transformation (×, ÷, +, −) on the whole equation before concluding they are not equivalent.', workingOut: '\\text{Answer: both sides of A multiplied by 4}', graphData: null }
    ]
  },
  {
    id: 'hghs-y7-t4-2021-q13',
    chapterId: 'y7-15',
    chapterTitle: 'Chapter 15: Solving equations',
    topicId: 'y7-15e',
    topicCode: '15E',
    topicTitle: 'Expanding brackets and solving equations',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    question: 'The solution to the equation \\(5 - 2(x-3) = 6\\) is:',
    opts: ['\\(\\dfrac{5}{2}\\)', '\\(-\\dfrac{5}{2}\\)', '\\(-\\dfrac{7}{2}\\)', '\\(\\dfrac{7}{2}\\)'],
    a: 0,
    answer: '0',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Expand the bracket first, being careful with the negative sign in front of it.', workingOut: '5 - 2(x-3) = 6 \\implies 5 - 2x + 6 = 6', graphData: null },
      { explanation: 'Simplify the left side, then isolate the \\(x\\)-term.', workingOut: '11 - 2x = 6 \\implies -2x = -5', graphData: null },
      { explanation: 'Divide both sides by \\(-2\\). Pitfall: expanding \\(-2(x-3)\\) as \\(-2x - 6\\) instead of \\(-2x + 6\\) (sign error on the second term) leads to \\(x = -\\dfrac{7}{2}\\) instead of the correct answer.', workingOut: 'x = \\dfrac{-5}{-2} = \\dfrac{5}{2}', graphData: null }
    ]
  },
  {
    id: 'hghs-y7-t4-2021-q14',
    chapterId: 'y7-15',
    chapterTitle: 'Chapter 15: Solving equations',
    topicId: 'y7-15h',
    topicCode: '15H',
    topicTitle: 'Solving problems using equations',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 150,
    question: "Alison is \\(a\\) years old and Brendan is \\(b\\) years old. In 10 years' time their combined age will be 40. An equation that represents this scenario is:",
    opts: ['\\(a + b + 10 = 40\\)', '\\(a + b + 20 = 40\\)', '\\(10(a+b) = 40\\)', '\\(10(a-b) = 40\\)'],
    a: 1,
    answer: '1',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'In 10 years, Alison will be \\(a+10\\) years old and Brendan will be \\(b+10\\) years old.', workingOut: '\\text{Alison: } a+10, \\quad \\text{Brendan: } b+10', graphData: null },
      { explanation: 'Their combined age in 10 years is the sum of these two expressions, which equals 40.', workingOut: '(a+10) + (b+10) = 40', graphData: null },
      { explanation: 'Simplify by collecting the constant terms. Pitfall: adding only one lot of 10 (giving \\(a+b+10=40\\)) forgets that BOTH people age 10 years, not just their combined total.', workingOut: 'a + b + 20 = 40', graphData: null }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // MULTIPLE CHOICE — Q15-18 Measurement, Perimeter, Area
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'hghs-y7-t4-2021-q15',
    chapterId: 'y7-8',
    chapterTitle: 'Chapter 8: Measurement',
    topicId: 'y7-8a',
    topicCode: '8A',
    topicTitle: 'Units of measurement',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'If you were to convert km to mm, you would:',
    opts: ['divide by 100 000', 'multiply by 100 000', 'divide by 1 000 000', 'multiply by 1 000 000'],
    a: 3,
    answer: '3',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Break the conversion into steps: km → m is ×1000, and m → mm is ×1000.', workingOut: '\\text{km} \\xrightarrow{\\times 1000} \\text{m} \\xrightarrow{\\times 1000} \\text{mm}', graphData: null },
      { explanation: 'Multiply the two conversion factors together to get the overall factor.', workingOut: '1000 \\times 1000 = 1\\,000\\,000', graphData: null },
      { explanation: 'Pitfall: converting to a smaller unit means the number of units gets bigger, so it must be a multiplication, not a division — dividing (options A, C) would shrink the number, which is wrong going from a large unit to a small one.', workingOut: '\\text{Answer: multiply by } 1\\,000\\,000', graphData: null }
    ]
  },
  {
    id: 'hghs-y7-t4-2021-q16',
    chapterId: 'y7-8',
    chapterTitle: 'Chapter 8: Measurement',
    topicId: 'y7-8d',
    topicCode: '8D',
    topicTitle: 'Perimeter',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    question: 'The perimeter of the L-shaped figure shown (with sides labelled \\(a\\), \\(b\\), \\(c\\), \\(d\\), where \\(a\\) is the top side, \\(c\\) is the left side, \\(b\\) is the bottom side and \\(d\\) is the inner vertical step), is:',
    opts: ['\\(a+b+c+d\\)', '\\(2a+2c\\)', '\\(2a-2b+2c-2d\\)', '\\(abcd\\)'],
    a: 1,
    answer: '1',
    requiresManualGrading: false,
    graphData: {
      svg: "<svg viewBox=\"0 0 260 220\" xmlns=\"http://www.w3.org/2000/svg\" width=\"50%\" height=\"auto\"><rect x=\"40\" y=\"30\" width=\"180\" height=\"70\" fill=\"none\" stroke=\"#475569\" stroke-width=\"2\"/><rect x=\"40\" y=\"100\" width=\"90\" height=\"70\" fill=\"none\" stroke=\"#475569\" stroke-width=\"2\"/><path d=\"M40 30 L220 30 L220 100 L130 100 L130 170 L40 170 Z\" fill=\"#dbeafe\" opacity=\"0.4\"/><text x=\"128\" y=\"22\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"600\" fill=\"#1e293b\" text-anchor=\"middle\">a</text><text x=\"32\" y=\"100\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"600\" fill=\"#1e293b\" text-anchor=\"middle\">c</text><text x=\"84\" y=\"188\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"600\" fill=\"#1e293b\" text-anchor=\"middle\">b</text><text x=\"140\" y=\"135\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"600\" fill=\"#1e293b\" text-anchor=\"middle\">d</text><rect x=\"40\" y=\"30\" width=\"8\" height=\"8\" fill=\"none\" stroke=\"#475569\"/><rect x=\"212\" y=\"30\" width=\"8\" height=\"8\" fill=\"none\" stroke=\"#475569\"/><rect x=\"40\" y=\"162\" width=\"8\" height=\"8\" fill=\"none\" stroke=\"#475569\"/><rect x=\"122\" y=\"92\" width=\"8\" height=\"8\" fill=\"none\" stroke=\"#475569\"/></svg>"
    },
    solutionSteps: [
      { explanation: 'The missing right-hand vertical side has the same total length as \\(c\\) (the shape is a rectangle with a bite taken out), and the missing lower horizontal segment has the same total length as \\(a\\).', workingOut: '\\text{right side} = c, \\quad \\text{lower missing segment} = a', graphData: null },
      { explanation: 'Add all six sides of the L-shape: the two given labelled horizontal/vertical sides plus their unlabelled matching sides.', workingOut: 'a + c + a + c = 2a + 2c', graphData: null },
      { explanation: 'Pitfall: including \\(b\\) and \\(d\\) again in the total (like option A) double-counts, since \\(b\\) and \\(d\\) are the same total length as \\(a\\) and \\(c\\) respectively, not extra sides.', workingOut: '\\text{Answer: } 2a + 2c', graphData: null }
    ]
  },
  {
    id: 'hghs-y7-t4-2021-q17',
    chapterId: 'y7-8',
    chapterTitle: 'Chapter 8: Measurement',
    topicId: 'y7-8g',
    topicCode: '8G',
    topicTitle: 'Areas of triangles and parallelograms',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 150,
    question: 'Which of these shapes does NOT have an area of 6 cm²?',
    opts: [
      'Rectangle: \\(3\\text{ cm} \\times 2\\text{ cm}\\)',
      'Parallelogram: base \\(4\\text{ cm}\\), height \\(1.5\\text{ cm}\\)',
      'Triangle: base \\(6\\text{ cm}\\), height \\(2\\text{ cm}\\)',
      'Rectangle: \\(8\\text{ cm} \\times 75\\text{ mm}\\)'
    ],
    a: 3,
    answer: '3',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Check (A), (B) and (C) using \\(A = l \\times b\\), \\(A = b \\times h\\) and \\(A = \\dfrac{1}{2}bh\\).', workingOut: '(A)\\ 3\\times2=6,\\ \\ (B)\\ 4\\times1.5=6,\\ \\ (C)\\ \\tfrac{1}{2}\\times6\\times2=6', graphData: null },
      { explanation: 'For (D), convert 75 mm to cm before multiplying, since the other length is in cm.', workingOut: '75\\text{ mm} = 7.5\\text{ cm} \\implies A = 8 \\times 7.5 = 60\\text{ cm}^2', graphData: null },
      { explanation: 'Pitfall: multiplying 8 by 75 directly without converting units (getting 600, or wrongly assuming it also equals 6) — mixed units must always be converted to the same unit first.', workingOut: '\\text{Answer: (D), it is } 60\\text{ cm}^2 \\text{ not } 6\\text{ cm}^2', graphData: null }
    ]
  },
  {
    id: 'hghs-y7-t4-2021-q18',
    chapterId: 'y7-8',
    chapterTitle: 'Chapter 8: Measurement',
    topicId: 'y7-8b',
    topicCode: '8B',
    topicTitle: 'Other units',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'One square metre is the same as:',
    opts: ['10 000 hectare', '10 000 cm²', '1000 cm²', '0.1 km²'],
    a: 1,
    answer: '1',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Since \\(1\\text{ m} = 100\\text{ cm}\\), a square metre is a 100 cm by 100 cm square.', workingOut: '1\\text{ m}^2 = 100\\text{ cm} \\times 100\\text{ cm}', graphData: null },
      { explanation: 'Multiply to find the area in cm².', workingOut: '100 \\times 100 = 10\\,000\\text{ cm}^2', graphData: null },
      { explanation: 'Pitfall: for area conversions, the linear factor (100) must be squared, not just used once — using 1000 cm² (option C) forgets to square the 100.', workingOut: '\\text{Answer: } 10\\,000\\text{ cm}^2', graphData: null }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // QUESTION 21 (worth 9) — Percentages & Algebraic Fractions
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'hghs-y7-t4-2021-q21a',
    chapterId: 'y7-14',
    chapterTitle: 'Chapter 14: Percentages and ratios',
    topicId: 'y7-14c',
    topicCode: '14C',
    topicTitle: 'Percentage of a quantity',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 180,
    question: 'Sarah had 55 cards. She gave 20% of them to her sister, 25% of the remaining to her brother, and the rest to her best friend. What percentage of the cards did she give to her best friend?',
    opts: ['55%', '60%', '75%', '80%'],
    a: 1,
    answer: '1',
    hint: 'Work out how many cards are left after each gift, then convert the final leftover amount to a percentage of the original 55.',
    solution: '60\\%',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Find 20% of the original 55 cards, given to her sister, then find how many remain.', workingOut: '20\\% \\text{ of } 55 = 11 \\implies 55 - 11 = 44 \\text{ left}', graphData: null },
      { explanation: 'Find 25% of the 44 remaining cards, given to her brother, then find how many remain.', workingOut: '25\\% \\text{ of } 44 = 11 \\implies 44 - 11 = 33 \\text{ left}', graphData: null },
      { explanation: 'The 33 leftover cards go to her best friend. Express 33 as a percentage of the ORIGINAL 55, not of 44 — that is the key pitfall in this question.', workingOut: '\\dfrac{33}{55} \\times 100 = \\dfrac{3}{5} \\times 100 = 60', graphData: null },
      { explanation: 'Pitfall: a very common mistake is to compute 33 as a percentage of 44 instead of the original 55, giving 75% (option C); forgetting the second gift entirely and reporting the 44 left after just the first gift as a percentage of 55 gives 80% (option D); wrongly adding the two given percentages (20%+25%=45%) and subtracting from 100% gives 55% (option A) — this ignores that the 25% is of the REMAINING amount, not the original.', workingOut: '\\text{Answer: } 60\\%', graphData: null }
    ]
  },
  {
    id: 'hghs-y7-t4-2021-q21b-i',
    chapterId: 'y7-6',
    chapterTitle: 'Chapter 6: Algebra with fractions',
    topicId: 'y7-6d',
    topicCode: '6D',
    topicTitle: 'Revision',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    question: 'Simplify: \\(\\dfrac{x}{5} + \\dfrac{x}{3}\\)',
    opts: ['\\(\\dfrac{x}{4}\\)', '\\(\\dfrac{8x}{15}\\)', '\\(\\dfrac{2x}{15}\\)', '\\(\\dfrac{4x}{15}\\)'],
    a: 1,
    answer: '1',
    hint: 'Find the lowest common denominator of 5 and 3 (which is 15) before adding.',
    solution: '\\dfrac{8x}{15}',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'The lowest common denominator of 5 and 3 is 15. Rewrite each fraction with denominator 15.', workingOut: '\\dfrac{x}{5} = \\dfrac{3x}{15}, \\qquad \\dfrac{x}{3} = \\dfrac{5x}{15}', graphData: null },
      { explanation: 'Now that both fractions share a denominator, add the numerators.', workingOut: '\\dfrac{3x}{15} + \\dfrac{5x}{15} = \\dfrac{8x}{15}', graphData: null },
      { explanation: 'Pitfall: adding numerators and denominators straight across (\\(\\dfrac{x}{5}+\\dfrac{x}{3} = \\dfrac{2x}{8}=\\dfrac{x}{4}\\), option A) is not valid — fractions can only be added once they share a common denominator.', workingOut: '\\text{Answer: } \\dfrac{8x}{15}', graphData: null },
      { explanation: 'Other pitfalls: converting to the common denominator 15 but forgetting to scale the numerators too (keeping them as \\(x\\) each) gives \\(\\dfrac{2x}{15}\\) (option C); scaling only one of the two numerators correctly gives \\(\\dfrac{4x}{15}\\) (option D).', workingOut: '\\dfrac{x}{5}+\\dfrac{x}{3} \\neq \\dfrac{x+x}{15}', graphData: null }
    ]
  },
  {
    id: 'hghs-y7-t4-2021-q21b-ii',
    chapterId: 'y7-6',
    chapterTitle: 'Chapter 6: Algebra with fractions',
    topicId: 'y7-6b',
    topicCode: '6B',
    topicTitle: 'Multiplication and division in algebra',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    question: 'Simplify: \\(\\dfrac{3ab}{4} \\times \\dfrac{2a}{3b}\\)',
    opts: ['\\(\\dfrac{a^2}{2}\\)', '\\(\\dfrac{a}{2}\\)', '\\(2a^2\\)', '\\(\\dfrac{a^2b}{2}\\)'],
    a: 0,
    answer: '0',
    hint: 'Multiply numerators and denominators first, then cancel common factors — the b terms cancel completely.',
    solution: '\\dfrac{a^2}{2}',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Multiply the numerators together, and the denominators together.', workingOut: '\\dfrac{3ab \\times 2a}{4 \\times 3b} = \\dfrac{6a^2b}{12b}', graphData: null },
      { explanation: 'Cancel the common factor of \\(b\\) (top and bottom), then cancel the common factor of 6 into 12.', workingOut: '\\dfrac{6a^2b}{12b} = \\dfrac{6a^2}{12} = \\dfrac{a^2}{2}', graphData: null },
      { explanation: 'Pitfall: forgetting to cancel the \\(b\\) terms (leaving \\(\\dfrac{a^2b}{2}\\), option D, unsimplified) or cancelling only part of the numeric factor — always cancel every common factor, including pronumerals.', workingOut: '\\text{Answer: } \\dfrac{a^2}{2}', graphData: null },
      { explanation: 'Other pitfalls: losing a factor of \\(a\\) somewhere in the multiplication gives just \\(\\dfrac{a}{2}\\) (option B, only one \\(a\\) instead of \\(a^2\\)); simplifying \\(\\dfrac{6}{3}\\) instead of \\(\\dfrac{6}{12}\\) (using only the second denominator, forgetting the 4) gives \\(2a^2\\) (option C).', workingOut: '6a^2b \\div 12b = \\dfrac{a^2}{2} \\;\\; (\\text{not } 2a^2)', graphData: null }
    ]
  },
  {
    id: 'hghs-y7-t4-2021-q21b-iii',
    chapterId: 'y7-6',
    chapterTitle: 'Chapter 6: Algebra with fractions',
    topicId: 'y7-6c',
    topicCode: '6C',
    topicTitle: 'Dividing and cancelling',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 150,
    question: 'Simplify: \\(\\dfrac{3m^3}{8n} \\div \\dfrac{6m}{4n^2}\\)',
    opts: ['\\(\\dfrac{9m^4}{16n^3}\\)', '\\(\\dfrac{4}{m^2n}\\)', '\\(\\dfrac{m^2n}{4}\\)', '\\(\\dfrac{m^2}{4}\\)'],
    a: 2,
    answer: '2',
    hint: 'To divide by a fraction, multiply by its reciprocal, then cancel common factors.',
    solution: '\\dfrac{m^2n}{4}',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'To divide by a fraction, multiply by its reciprocal (flip the second fraction).', workingOut: '\\dfrac{3m^3}{8n} \\div \\dfrac{6m}{4n^2} = \\dfrac{3m^3}{8n} \\times \\dfrac{4n^2}{6m}', graphData: null },
      { explanation: 'Cancel common factors before multiplying: 4 and 8 share a factor of 4; \\(m^3\\) and \\(m\\) share a factor of \\(m\\); \\(n\\) and \\(n^2\\) share a factor of \\(n\\); 3 and 6 share a factor of 3.', workingOut: '\\dfrac{3m^3}{8n} \\times \\dfrac{4n^2}{6m} = \\dfrac{m^2 \\cdot n}{2 \\cdot 2} = \\dfrac{m^2n}{4}', graphData: null },
      { explanation: 'Pitfall: dividing straight across instead of flipping and multiplying (multiplying \\(\\dfrac{3m^3}{8n}\\) by \\(\\dfrac{6m}{4n^2}\\) directly) gives \\(\\dfrac{9m^4}{16n^3}\\) (option A) — a completely different, incorrect expression.', workingOut: '\\text{Answer: } \\dfrac{m^2n}{4}', graphData: null },
      { explanation: 'Other pitfalls: flipping the FIRST fraction instead of the second gives the reciprocal of the correct answer, \\(\\dfrac{4}{m^2n}\\) (option B); losing the \\(n\\) somewhere during cancelling gives \\(\\dfrac{m^2}{4}\\) (option D).', workingOut: '\\text{Always flip the SECOND (divisor) fraction, not the first.}', graphData: null }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // QUESTION 22 (worth 8) — Solving Equations
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'hghs-y7-t4-2021-q22a-ii',
    chapterId: 'y7-15',
    chapterTitle: 'Chapter 15: Solving equations',
    topicId: 'y7-15g',
    topicCode: '15G',
    topicTitle: 'Equations with pronumerals on both sides',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 150,
    question: 'Solve the equation: \\(3(x+12) = 5 - 2x\\)',
    opts: ['\\(x = -1\\dfrac{2}{5}\\)', '\\(x = -31\\)', '\\(x = -6\\dfrac{1}{5}\\)', '\\(x = 8\\dfrac{1}{5}\\)'],
    a: 2,
    answer: '2',
    hint: 'Expand the bracket, collect the x terms on one side and the numbers on the other.',
    solution: 'x = -6\\dfrac{1}{5}',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Expand the bracket on the left side.', workingOut: '3(x+12) = 5 - 2x \\implies 3x + 36 = 5 - 2x', graphData: null },
      { explanation: 'Add \\(2x\\) to both sides to collect all the \\(x\\) terms on the left, then subtract 36 from both sides to isolate the \\(x\\) term.', workingOut: '3x + 2x = 5 - 36 \\implies 5x = -31', graphData: null },
      { explanation: 'Divide both sides by 5. Pitfall: forgetting to move BOTH the \\(x\\) term and the constant (e.g. only moving one of them) leaves an equation that still has terms on both sides.', workingOut: 'x = \\dfrac{-31}{5} = -6\\dfrac{1}{5}', graphData: null },
      { explanation: 'Other pitfalls: expanding the bracket incorrectly as \\(3x+12\\) (only multiplying the first term, forgetting \\(3\\times12=36\\)) leads to \\(x=-1\\dfrac{2}{5}\\) (option A); stopping after \\(5x=-31\\) without dividing gives \\(x=-31\\) (option B); a sign slip moving 36 across (adding instead of subtracting) gives \\(x=8\\dfrac{1}{5}\\) (option D).', workingOut: '\\text{Answer: } x = -6\\dfrac{1}{5}', graphData: null }
    ]
  },
  {
    id: 'hghs-y7-t4-2021-q22a-iii',
    chapterId: 'y7-15',
    chapterTitle: 'Chapter 15: Solving equations',
    topicId: 'y7-15c',
    topicCode: '15C',
    topicTitle: 'Solving equations involving more than one step',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 120,
    question: 'Solve the equation: \\(\\dfrac{2x-1}{3} = 4\\)',
    answer: 'x = 6\\dfrac{1}{2}',
    hint: 'Multiply both sides by 3 first to clear the fraction.',
    solution: 'x = 6\\dfrac{1}{2}',
    requiresManualGrading: true,
    solutionSteps: [
      { explanation: 'Multiply both sides by 3 to remove the denominator.', workingOut: '\\dfrac{2x-1}{3} = 4 \\implies 2x - 1 = 12', graphData: null },
      { explanation: 'Add 1 to both sides.', workingOut: '2x = 13', graphData: null },
      { explanation: 'Divide both sides by 2. Pitfall: multiplying only the "4" by 3 and forgetting the "−1" needs to stay attached inside the original fraction (not multiplied separately) can cause sign/order errors.', workingOut: 'x = \\dfrac{13}{2} = 6\\dfrac{1}{2}', graphData: null }
    ]
  },
  {
    id: 'hghs-y7-t4-2021-q22a-iv',
    chapterId: 'y7-15',
    chapterTitle: 'Chapter 15: Solving equations',
    topicId: 'y7-15c',
    topicCode: '15C',
    topicTitle: 'Solving equations involving more than one step',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    question: 'Solve the equation: \\(2x^2 = 8\\)',
    opts: ['\\(x = 2\\)', '\\(x = \\pm 2\\)', '\\(x = \\pm 4\\)', '\\(x = \\pm\\sqrt{8}\\)'],
    a: 1,
    answer: '1',
    hint: 'Divide both sides by 2 first, then take the square root of both sides — remember there are two roots.',
    solution: 'x = \\pm 2',
    requiresManualGrading: false,
    solutionSteps: [
      { explanation: 'Divide both sides by 2 to isolate \\(x^2\\).', workingOut: '2x^2 = 8 \\implies x^2 = 4', graphData: null },
      { explanation: 'Take the square root of both sides.', workingOut: 'x = \\pm\\sqrt{4}', graphData: null },
      { explanation: 'Pitfall: giving only the positive root (\\(x=2\\), option A) forgets that squaring a negative number also gives a positive result — \\((-2)^2 = 4\\) too, so both roots must be stated.', workingOut: '\\text{Answer: } x = \\pm 2', graphData: null },
      { explanation: 'Other pitfalls: taking the square root of both sides of the ORIGINAL equation before dividing by 2 gives the un-simplified \\(x=\\pm\\sqrt{8}\\) (option D); simply halving 8 without ever square-rooting gives \\(x=\\pm4\\) (option C).', workingOut: '2x^2 = 8 \\implies x = \\pm\\sqrt{8} \\quad \\text{(divide-by-2 step skipped, not simplified)}', graphData: null }
    ]
  },
  {
    id: 'hghs-y7-t4-2021-q22b',
    chapterId: 'y7-15',
    chapterTitle: 'Chapter 15: Solving equations',
    topicId: 'y7-15d',
    topicCode: '15D',
    topicTitle: 'Equations with negative solutions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 150,
    question: 'A rectangle (not to scale) has one side labelled 10 and the OPPOSITE side labelled \\(4-2x\\). Since opposite sides of a rectangle are equal, write an equation and find the value of \\(x\\).',
    opts: ['3', '7', '-3', '-7'],
    a: 2,
    answer: '2',
    hint: 'Opposite sides of a rectangle are equal in length, so set the two expressions equal to each other: \\(4-2x=10\\).',
    solution: 'x = -3',
    requiresManualGrading: false,
    graphData: null,
    solutionSteps: [
      { explanation: 'Since it is a rectangle, opposite sides are equal in length. Set the two expressions for the pair of opposite sides equal to each other.', workingOut: '4 - 2x = 10', graphData: null },
      { explanation: 'Subtract 4 from both sides to isolate the \\(x\\) term.', workingOut: '-2x = 6', graphData: null },
      { explanation: 'Divide both sides by \\(-2\\). Pitfall: dividing 6 by \\(-2\\) but forgetting to keep the negative sign (giving \\(x=3\\), option A, instead of \\(x=-3\\)) — a negative divided by a negative only gives a positive when BOTH numbers are negative; here only the divisor is.', workingOut: 'x = \\dfrac{6}{-2} = -3', graphData: null },
      { explanation: 'Other pitfalls: moving the "4" to the wrong side (adding instead of subtracting) gives \\(-2x=14 \\implies x=-7\\) (option D); flipping which side is subtracted from which gives \\(x=7\\) (option B).', workingOut: '\\text{Answer: } x = -3', graphData: null }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // QUESTION 23c (worth 2 of 6) — Area of a composite figure
  // (Q23a and Q23b, the Pythagoras "show that" parts, are Year 8 content
  // — see Y7_TERM4_ASSESSMENT_2021_Y8_PYTHAGORAS_QUESTIONS below)
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'hghs-y7-t4-2021-q23c',
    chapterId: 'y7-8',
    chapterTitle: 'Chapter 8: Measurement',
    topicId: 'y7-8f',
    topicCode: '8F',
    topicTitle: 'Areas by addition and subtraction',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 180,
    question: 'A quadrilateral ADCB is made of two right triangles sharing the diagonal AC: triangle ABC has legs \\(AB=5\\text{ cm}\\) and \\(BC=10\\text{ cm}\\); triangle ADC has legs \\(AD=5\\text{ cm}\\) and \\(AC=\\sqrt{125}\\text{ cm}\\). Find the area of quadrilateral ADCB, giving your answer as an exact value.',
    opts: ['\\(25\\text{ cm}^2\\)', '\\(50 + 5\\sqrt{125}\\text{ cm}^2\\)', '\\(25 + \\dfrac{5}{2}\\sqrt{125}\\text{ cm}^2\\)', '\\(\\dfrac{5}{2}\\sqrt{125}\\text{ cm}^2\\)'],
    a: 2,
    answer: '2',
    hint: 'Split the quadrilateral into triangle ABC and triangle ADC, find each area exactly, then add them.',
    solution: '\\left(25 + \\dfrac{5}{2}\\sqrt{125}\\right)\\text{ cm}^2',
    requiresManualGrading: false,
    graphData: {
      svg: "<svg viewBox=\"0 0 300 250\" xmlns=\"http://www.w3.org/2000/svg\" width=\"50%\" height=\"auto\"><polygon points=\"90,100 90,210 240,210\" fill=\"#dbeafe\" opacity=\"0.55\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"90,100 139,33 240,210\" fill=\"#fef3c7\" opacity=\"0.55\" stroke=\"#475569\" stroke-width=\"2\"/><line x1=\"90\" y1=\"100\" x2=\"240\" y2=\"210\" stroke=\"#1e293b\" stroke-width=\"2\"/><polyline points=\"90,196 104,196 104,210\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/><polyline points=\"98.3,88.7 109.5,97 101.3,108.3\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"139\" y=\"28\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"600\" fill=\"#1e293b\" text-anchor=\"middle\">D</text><text x=\"78\" y=\"100\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"600\" fill=\"#1e293b\" text-anchor=\"middle\">A</text><text x=\"78\" y=\"220\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"600\" fill=\"#1e293b\" text-anchor=\"middle\">B</text><text x=\"250\" y=\"220\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"600\" fill=\"#1e293b\" text-anchor=\"middle\">C</text><text x=\"55\" y=\"159\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"600\" fill=\"#1e293b\">5 cm</text><text x=\"165\" y=\"227\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"600\" fill=\"#1e293b\" text-anchor=\"middle\">10 cm</text><text x=\"95\" y=\"55\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"600\" fill=\"#1e293b\" text-anchor=\"end\">5 cm</text><g transform=\"translate(140,168)\"><path d=\"M0,8 L3,12 L7,-2\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"7\" y1=\"-2\" x2=\"31\" y2=\"-2\" stroke=\"#1e293b\" stroke-width=\"1.3\"/><text x=\"8\" y=\"12\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"600\" fill=\"#1e293b\">125 cm</text></g></svg>"
    },
    solutionSteps: [
      { explanation: 'Split quadrilateral ADCB into two triangles along the diagonal AC: triangle ABC and triangle ADC.', workingOut: '\\text{Area}(ADCB) = \\text{Area}(\\triangle ABC) + \\text{Area}(\\triangle ADC)', graphData: null },
      { explanation: 'Find the area of triangle ABC using its two perpendicular legs, \\(AB = 5\\) and \\(BC = 10\\).', workingOut: '\\text{Area}(\\triangle ABC) = \\dfrac{1}{2} \\times 10 \\times 5 = 25\\text{ cm}^2', graphData: null },
      { explanation: 'Find the area of triangle ADC using its two perpendicular legs, \\(AD = 5\\) and \\(AC = \\sqrt{125}\\). Leave the answer in exact (surd) form — do not evaluate \\(\\sqrt{125}\\) as a decimal.', workingOut: '\\text{Area}(\\triangle ADC) = \\dfrac{1}{2} \\times 5 \\times \\sqrt{125} = \\dfrac{5}{2}\\sqrt{125}\\text{ cm}^2', graphData: null },
      { explanation: 'Add the two areas. Pitfall: rounding \\(\\sqrt{125}\\) to a decimal at any point breaks the "exact value" requirement — keep it as a surd all the way to the final answer.', workingOut: '\\text{Total Area} = \\left(25 + \\dfrac{5}{2}\\sqrt{125}\\right)\\text{cm}^2', graphData: null },
      { explanation: 'Other pitfalls: reporting only the area of triangle ABC gives \\(25\\text{ cm}^2\\) (option A, forgot triangle ADC entirely); reporting only the area of triangle ADC gives \\(\\dfrac{5}{2}\\sqrt{125}\\text{ cm}^2\\) (option D, forgot triangle ABC); forgetting the \\(\\times\\dfrac{1}{2}\\) in BOTH area formulas doubles everything to \\(50+5\\sqrt{125}\\text{ cm}^2\\) (option B).', workingOut: '\\text{Answer: } 25 + \\dfrac{5}{2}\\sqrt{125}\\text{ cm}^2', graphData: null }
    ]
  }
];

/**
 * Pythagoras' theorem is not part of the Year 7 curriculum in this
 * textbook (it is introduced in Year 8 Chapter 8) — these 4 questions are
 * tagged to Year 8 accordingly.
 */
export const Y7_TERM4_ASSESSMENT_2021_Y8_PYTHAGORAS_QUESTIONS = [
  {
    id: 'hghs-y7-t4-2021-q19',
    chapterId: 'y8-8',
    chapterTitle: "Chapter 8: Pythagoras' theorem",
    topicId: 'y8-8b',
    topicCode: '8B',
    topicTitle: 'Finding a shorter side',
    year: 'Year 8',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    question: 'For the right-angled triangle shown, with hypotenuse 0.5 and one leg 0.4, the value of \\(x\\) (the other leg) is given by:',
    opts: ['\\(\\sqrt{0.5^2 + 0.4^2}\\)', '\\(\\sqrt{0.4^2 - 0.5^2}\\)', '\\(\\sqrt{0.5^2 - 0.4^2}\\)', '\\(\\sqrt{(0.5-0.4)^2}\\)'],
    a: 2,
    answer: '2',
    requiresManualGrading: false,
    graphData: {
      svg: "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" width=\"50%\" height=\"auto\"><polygon points=\"40,150 220,150 220,30\" fill=\"#dbeafe\" opacity=\"0.5\" stroke=\"#475569\" stroke-width=\"2\"/><rect x=\"205\" y=\"135\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"120\" y=\"75\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"600\" fill=\"#1e293b\" text-anchor=\"middle\">0.5</text><text x=\"235\" y=\"92\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"600\" fill=\"#1e293b\" text-anchor=\"middle\">x</text><text x=\"130\" y=\"168\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"600\" fill=\"#1e293b\" text-anchor=\"middle\">0.4</text></svg>"
    },
    solutionSteps: [
      { explanation: "Identify the hypotenuse (0.5, opposite the right angle) and the two legs (0.4 and x). Pythagoras' theorem states the square of the hypotenuse equals the sum of the squares of the legs.", workingOut: '0.5^2 = 0.4^2 + x^2', graphData: { svg: "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" width=\"50%\" height=\"auto\"><polygon points=\"40,150 220,150 220,30\" fill=\"#dbeafe\" opacity=\"0.4\" stroke=\"#475569\" stroke-width=\"2\"/><line x1=\"40\" y1=\"150\" x2=\"220\" y2=\"30\" stroke=\"#f43f5e\" stroke-width=\"3\"/><text x=\"120\" y=\"77\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"600\" fill=\"#f43f5e\" text-anchor=\"middle\">0.5 (hyp)</text></svg>" } },
      { explanation: 'Rearrange to make \\(x^2\\) the subject, since we need the shorter side, not the hypotenuse.', workingOut: 'x^2 = 0.5^2 - 0.4^2', graphData: null },
      { explanation: 'Pitfall: writing \\(x^2 = 0.5^2 + 0.4^2\\) (option A) applies the formula for finding the hypotenuse instead of a shorter side — when solving for a leg, it is always hypotenuse² − other leg².', workingOut: 'x = \\sqrt{0.5^2 - 0.4^2}', graphData: null }
    ]
  },
  {
    id: 'hghs-y7-t4-2021-q20',
    chapterId: 'y8-8',
    chapterTitle: "Chapter 8: Pythagoras' theorem",
    topicId: 'y8-8a',
    topicCode: '8A',
    topicTitle: "Applying Pythagoras' theorem",
    year: 'Year 8',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 150,
    question: 'For the rectangular prism shown, with base diagonal 5 (from face dimensions 3 and 4) and vertical edge 12, what is the length of the space diagonal \\(AB\\)?',
    opts: ['\\(\\sqrt{12^2+5^2}\\)', '\\(\\sqrt{12^2-5^2}\\)', '\\(\\sqrt{12^2+3^2}\\)', '\\(\\sqrt{12^2+4^2}\\)'],
    a: 0,
    answer: '0',
    requiresManualGrading: false,
    graphData: {
      svg: "<svg viewBox=\"0 0 260 240\" xmlns=\"http://www.w3.org/2000/svg\" width=\"50%\" height=\"auto\"><polygon points=\"60,190 160,190 200,150 100,150\" fill=\"#e0e7ff\" opacity=\"0.5\"/><line x1=\"60\" y1=\"190\" x2=\"60\" y2=\"60\" stroke=\"#475569\" stroke-width=\"2\"/><line x1=\"160\" y1=\"190\" x2=\"160\" y2=\"60\" stroke=\"#475569\" stroke-width=\"2\"/><line x1=\"200\" y1=\"150\" x2=\"200\" y2=\"20\" stroke=\"#475569\" stroke-width=\"2\"/><line x1=\"100\" y1=\"150\" x2=\"100\" y2=\"20\" stroke=\"#94a3b8\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><line x1=\"60\" y1=\"60\" x2=\"160\" y2=\"60\" stroke=\"#475569\" stroke-width=\"2\"/><line x1=\"160\" y1=\"60\" x2=\"200\" y2=\"20\" stroke=\"#475569\" stroke-width=\"2\"/><line x1=\"200\" y1=\"20\" x2=\"100\" y2=\"20\" stroke=\"#475569\" stroke-width=\"2\"/><line x1=\"100\" y1=\"20\" x2=\"60\" y2=\"60\" stroke=\"#475569\" stroke-width=\"2\"/><line x1=\"60\" y1=\"190\" x2=\"160\" y2=\"190\" stroke=\"#475569\" stroke-width=\"2\"/><line x1=\"160\" y1=\"190\" x2=\"200\" y2=\"150\" stroke=\"#475569\" stroke-width=\"2\"/><line x1=\"100\" y1=\"150\" x2=\"60\" y2=\"190\" stroke=\"#94a3b8\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><line x1=\"100\" y1=\"150\" x2=\"200\" y2=\"150\" stroke=\"#94a3b8\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><line x1=\"100\" y1=\"150\" x2=\"160\" y2=\"190\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"3 2\"/><polyline points=\"100,140 108.3,145.5 108.3,155.5\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.3\"/><line x1=\"100\" y1=\"20\" x2=\"160\" y2=\"190\" stroke-dasharray=\"4 3\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"100\" y=\"12\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"600\" fill=\"#1e293b\" text-anchor=\"middle\">A</text><text x=\"160\" y=\"205\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"600\" fill=\"#1e293b\" text-anchor=\"middle\">B</text><text x=\"45\" y=\"125\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"600\" fill=\"#1e293b\">12</text><text x=\"135\" y=\"163\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"600\" fill=\"#64748b\" text-anchor=\"middle\">5</text></svg>"
    },
    solutionSteps: [
      { explanation: 'The space diagonal AB is the hypotenuse of a right triangle formed by the vertical edge (12) and the diagonal of the base rectangle (5, found from the 3 and 4 base edges).', workingOut: '\\text{base diagonal} = \\sqrt{3^2+4^2} = \\sqrt{25} = 5', graphData: null },
      { explanation: "Apply Pythagoras' theorem to the right triangle with legs 12 and 5 to find the hypotenuse AB.", workingOut: 'AB^2 = 12^2 + 5^2', graphData: null },
      { explanation: 'Pitfall: using the original base edges 3 or 4 directly with 12 (options C, D) skips the step of first finding the base diagonal — the vertical leg must be paired with the base *diagonal*, not a single base edge.', workingOut: 'AB = \\sqrt{12^2+5^2}', graphData: null }
    ]
  },
  {
    id: 'hghs-y7-t4-2021-q23a',
    chapterId: 'y8-8',
    chapterTitle: "Chapter 8: Pythagoras' theorem",
    topicId: 'y8-8b',
    topicCode: '8B',
    topicTitle: 'Finding a shorter side',
    year: 'Year 8',
    type: 'teacher_review',
    difficulty: 'hard',
    timeLimit: 180,
    question: 'In the diagram, triangle ABC is right-angled at B, with \\(AB = x\\text{ cm}\\), \\(BC = 2x\\text{ cm}\\) and \\(AC = \\sqrt{125}\\text{ cm}\\). Show that \\(x = 5\\text{ cm}\\).',
    answer: 'x^2 + (2x)^2 = (\\sqrt{125})^2 \\implies 5x^2 = 125 \\implies x^2 = 25 \\implies x = 5 \\text{ cm } (x>0)',
    hint: "Apply Pythagoras' theorem in triangle ABC, then justify why the negative root is rejected.",
    solution: 'x^2 + (2x)^2 = (\\sqrt{125})^2 \\implies 5x^2 = 125 \\implies x^2 = 25 \\implies x = 5 \\text{ cm } (x>0)',
    requiresManualGrading: true,
    graphData: {
      svg: "<svg viewBox=\"0 0 300 220\" xmlns=\"http://www.w3.org/2000/svg\" width=\"50%\" height=\"auto\"><polygon points=\"90,50 90,190 260,190\" fill=\"#dbeafe\" opacity=\"0.55\" stroke=\"#475569\" stroke-width=\"2\"/><line x1=\"90\" y1=\"50\" x2=\"260\" y2=\"190\" stroke=\"#475569\" stroke-width=\"2\"/><polyline points=\"90,176 104,176 104,190\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"78\" y=\"50\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"600\" fill=\"#1e293b\" text-anchor=\"middle\">A</text><text x=\"78\" y=\"200\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"600\" fill=\"#1e293b\" text-anchor=\"middle\">B</text><text x=\"270\" y=\"200\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"600\" fill=\"#1e293b\" text-anchor=\"middle\">C</text><text x=\"55\" y=\"124\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"600\" fill=\"#1e293b\">x cm</text><text x=\"165\" y=\"207\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"600\" fill=\"#1e293b\">2x cm</text><g transform=\"translate(162.5,88)\"><path d=\"M0,8 L3,12 L7,-2\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"7\" y1=\"-2\" x2=\"31\" y2=\"-2\" stroke=\"#1e293b\" stroke-width=\"1.3\"/><text x=\"8\" y=\"12\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"600\" fill=\"#1e293b\">125 cm</text></g></svg>"
    },
    solutionSteps: [
      { explanation: 'In right triangle ABC (right angle at B), identify the hypotenuse (AC = √125) and the two legs (AB = x, BC = 2x).', workingOut: '\\text{hyp} = AC = \\sqrt{125}, \\quad \\text{legs} = x, 2x', graphData: null },
      { explanation: "Apply Pythagoras' theorem: the sum of the squares of the legs equals the square of the hypotenuse.", workingOut: 'x^2 + (2x)^2 = (\\sqrt{125})^2', graphData: null },
      { explanation: 'Expand and simplify.', workingOut: 'x^2 + 4x^2 = 125 \\implies 5x^2 = 125 \\implies x^2 = 25', graphData: null },
      { explanation: 'Take the square root of both sides. Since \\(x\\) is a length, reject the negative root.', workingOut: 'x = \\pm 5 \\implies x = 5\\text{ cm} \\; (x>0)', graphData: null }
    ]
  },
  {
    id: 'hghs-y7-t4-2021-q23b',
    chapterId: 'y8-8',
    chapterTitle: "Chapter 8: Pythagoras' theorem",
    topicId: 'y8-8a',
    topicCode: '8A',
    topicTitle: "Applying Pythagoras' theorem",
    year: 'Year 8',
    type: 'teacher_review',
    difficulty: 'hard',
    timeLimit: 180,
    question: 'In the same diagram, \\(D\\) is such that triangle ADC is right-angled at A, with \\(AD = x\\text{ cm}\\), \\(AC = \\sqrt{125}\\text{ cm}\\) and \\(DC = y\\text{ cm}\\). Using \\(x = 5\\) from part (a), show that \\(y = \\sqrt{150}\\text{ cm}\\).',
    answer: 'x^2 + (\\sqrt{125})^2 = y^2 \\implies 25 + 125 = y^2 \\implies y^2 = 150 \\implies y = \\sqrt{150}\\text{ cm } (y>0)',
    hint: "Apply Pythagoras' theorem in triangle ADC using the value of x found in part (a).",
    solution: 'x^2 + (\\sqrt{125})^2 = y^2 \\implies 25 + 125 = y^2 \\implies y^2 = 150 \\implies y = \\sqrt{150}\\text{ cm } (y>0)',
    requiresManualGrading: true,
    graphData: {
      svg: "<svg viewBox=\"0 0 300 250\" xmlns=\"http://www.w3.org/2000/svg\" width=\"50%\" height=\"auto\"><polygon points=\"90,100 90,210 240,210\" fill=\"#dbeafe\" opacity=\"0.25\" stroke=\"#94a3b8\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><polygon points=\"90,100 139,33 240,210\" fill=\"#fef3c7\" opacity=\"0.55\" stroke=\"#475569\" stroke-width=\"2\"/><line x1=\"90\" y1=\"100\" x2=\"240\" y2=\"210\" stroke=\"#475569\" stroke-width=\"2\"/><line x1=\"139\" y1=\"33\" x2=\"240\" y2=\"210\" stroke=\"#f43f5e\" stroke-width=\"3\"/><polyline points=\"98.3,88.7 109.5,97 101.3,108.3\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/><polyline points=\"90,196 104,196 104,210\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"139\" y=\"28\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"600\" fill=\"#1e293b\" text-anchor=\"middle\">D</text><text x=\"78\" y=\"100\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"600\" fill=\"#1e293b\" text-anchor=\"middle\">A</text><text x=\"78\" y=\"220\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"600\" fill=\"#1e293b\" text-anchor=\"middle\">B</text><text x=\"250\" y=\"220\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"600\" fill=\"#1e293b\" text-anchor=\"middle\">C</text><text x=\"95\" y=\"55\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"600\" fill=\"#1e293b\" text-anchor=\"end\">x cm</text><text x=\"55\" y=\"155\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"600\" fill=\"#1e293b\">x cm</text><text x=\"150\" y=\"227\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"600\" fill=\"#1e293b\">2x cm</text><g transform=\"translate(140,168)\"><path d=\"M0,8 L3,12 L7,-2\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"7\" y1=\"-2\" x2=\"31\" y2=\"-2\" stroke=\"#1e293b\" stroke-width=\"1.3\"/><text x=\"8\" y=\"12\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"600\" fill=\"#1e293b\">125 cm</text></g><text x=\"195\" y=\"112\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" fill=\"#f43f5e\">y cm</text></svg>"
    },
    solutionSteps: [
      { explanation: 'In right triangle ADC (right angle at A), identify the hypotenuse (DC = y) and the two legs (AD = x = 5, AC = √125).', workingOut: '\\text{hyp} = DC = y, \\quad \\text{legs} = x = 5, \\; \\sqrt{125}', graphData: null },
      { explanation: "Apply Pythagoras' theorem: the sum of the squares of the legs equals the square of the hypotenuse.", workingOut: 'x^2 + (\\sqrt{125})^2 = y^2', graphData: null },
      { explanation: 'Substitute \\(x=5\\) and simplify. Pitfall: forgetting that \\((\\sqrt{125})^2\\) simplifies back to exactly 125, not needing further square-rooting at this stage.', workingOut: '5^2 + 125 = y^2 \\implies 25 + 125 = 150 \\implies y^2 = 150', graphData: null },
      { explanation: 'Take the square root of both sides. Since \\(y\\) is a length, reject the negative root. 150 has no square factor other than 1 and 25 (giving \\(5\\sqrt{6}\\)) — but the question asks to show \\(y=\\sqrt{150}\\), so leave it unsimplified as required.', workingOut: 'y = \\sqrt{150}\\text{ cm} \\; (y>0)', graphData: null }
    ]
  }
];
