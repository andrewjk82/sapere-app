import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

const allQuestions = [
  // SECTION 1: Simplify by collecting like terms
  {
    chapterId: 'y10-3',
    chapterTitle: 'Chapter 3: Algebraic Expressions and Equations',
    topicId: 'y10-3a',
    topicCode: '3A',
    topicTitle: 'Collecting like terms',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Simplify the expression: 4x + 9x',
    answer: '13x',
    solution: '4x + 9x = (4 + 9)x = 13x',
    difficulty: 'easy',
    isManual: true
  },
  {
    chapterId: 'y10-3',
    chapterTitle: 'Chapter 3: Algebraic Expressions and Equations',
    topicId: 'y10-3a',
    topicCode: '3A',
    topicTitle: 'Collecting like terms',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Simplify the expression: 5p³q - 9p³q + 11p³q',
    answer: '7p³q',
    solution: '(5 - 9 + 11)p³q = 7p³q',
    difficulty: 'medium',
    isManual: true
  },
  {
    chapterId: 'y10-3',
    chapterTitle: 'Chapter 3: Algebraic Expressions and Equations',
    topicId: 'y10-3a',
    topicCode: '3A',
    topicTitle: 'Collecting like terms',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Simplify the expression: ab - 2ab² - 6ab + ab²',
    answer: '-5ab - ab²',
    solution: '(ab - 6ab) + (-2ab² + ab²) = -5ab - ab²',
    difficulty: 'hard',
    isManual: true
  },

  // SECTION 2: Expand each expression
  {
    chapterId: 'y10-3',
    chapterTitle: 'Chapter 3: Algebraic Expressions and Equations',
    topicId: 'y10-3b',
    topicCode: '3B',
    topicTitle: 'Expansion',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Expand the expression: -2(a + 4)',
    answer: '-2a - 8',
    solution: '-2 * a + (-2) * 4 = -2a - 8',
    difficulty: 'easy',
    isManual: true
  },
  {
    chapterId: 'y10-3',
    chapterTitle: 'Chapter 3: Algebraic Expressions and Equations',
    topicId: 'y10-3b',
    topicCode: '3B',
    topicTitle: 'Expansion',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Expand the expression: -4(3b - 5)',
    answer: '-12b + 20',
    solution: '-4 * 3b - (-4) * 5 = -12b + 20',
    difficulty: 'medium',
    isManual: true
  },
  {
    chapterId: 'y10-3',
    chapterTitle: 'Chapter 3: Algebraic Expressions and Equations',
    topicId: 'y10-3b',
    topicCode: '3B',
    topicTitle: 'Expansion',
    year: 'Year 10',
    type: 'multiple_choice',
    question: 'Expand the expression: 2/3(12p + 6)',
    options: ['8p + 4', '12p + 4', '8p + 6', '24p + 12'],
    answer: '0',
    solution: '(2/3 * 12p) + (2/3 * 6) = 8p + 4',
    difficulty: 'medium',
    isManual: true
  },

  // SECTION 3: Expand (Variable multiplication)
  {
    chapterId: 'y10-3',
    chapterTitle: 'Chapter 3: Algebraic Expressions and Equations',
    topicId: 'y10-3b',
    topicCode: '3B',
    topicTitle: 'Expansion',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Expand the expression: d(d - 9)',
    answer: 'd² - 9d',
    solution: 'd * d - d * 9 = d² - 9d',
    difficulty: 'medium',
    isManual: true
  },
  {
    chapterId: 'y10-3',
    chapterTitle: 'Chapter 3: Algebraic Expressions and Equations',
    topicId: 'y10-3b',
    topicCode: '3B',
    topicTitle: 'Expansion',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Expand the expression: -3n(5n + 7)',
    answer: '-15n² - 21n',
    solution: '-3n * 5n + (-3n) * 7 = -15n² - 21n',
    difficulty: 'hard',
    isManual: true
  },

  // SECTION 4: Expand and collect like terms
  {
    chapterId: 'y10-3',
    chapterTitle: 'Chapter 3: Algebraic Expressions and Equations',
    topicId: 'y10-3b',
    topicCode: '3B',
    topicTitle: 'Expansion',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Expand and collect like terms: 2(c + 7) - 9',
    answer: '2c + 5',
    solution: '(2c + 14) - 9 = 2c + 5',
    difficulty: 'medium',
    isManual: true
  },
  {
    chapterId: 'y10-3',
    chapterTitle: 'Chapter 3: Algebraic Expressions and Equations',
    topicId: 'y10-3b',
    topicCode: '3B',
    topicTitle: 'Expansion',
    year: 'Year 10',
    type: 'multiple_choice',
    question: 'Expand and collect like terms: 5/6(x - 4) + 3x/4',
    options: ['19x/12 - 10/3', '15x/12 - 4', '19x/12 - 20/6', 'x/2 - 3'],
    answer: '0',
    solution: '5x/6 - 20/6 + 3x/4 = (10x/12 + 9x/12) - 10/3 = 19x/12 - 10/3',
    difficulty: 'hard',
    isManual: true
  },
  {
    chapterId: 'y10-3',
    chapterTitle: 'Chapter 3: Algebraic Expressions and Equations',
    topicId: 'y10-3b',
    topicCode: '3B',
    topicTitle: 'Expansion',
    year: 'Year 10',
    type: 'multiple_choice',
    question: 'Expand: (m + 3n)(2m + n)',
    options: ['2m² + 7mn + 3n²', '2m² + 6mn + 3n²', '2m² + 3n²', '2m² + mn + 3n²'],
    answer: '0',
    solution: 'm(2m) + m(n) + 3n(2m) + 3n(n) = 2m² + mn + 6mn + 3n² = 2m² + 7mn + 3n²',
    difficulty: 'hard',
    isManual: true
  },

  // SECTION 5: Solve each equation
  {
    chapterId: 'y10-3',
    chapterTitle: 'Chapter 3: Algebraic Expressions and Equations',
    topicId: 'y10-3c',
    topicCode: '3C',
    topicTitle: 'Solving equations',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Solve for x: 7x - 4 = 17',
    answer: '3',
    solution: '7x = 21 => x = 3',
    difficulty: 'easy',
    isManual: true
  },
  {
    chapterId: 'y10-3',
    chapterTitle: 'Chapter 3: Algebraic Expressions and Equations',
    topicId: 'y10-3c',
    topicCode: '3C',
    topicTitle: 'Solving equations',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Solve for x: 3x = 25 - 2x',
    answer: '5',
    solution: '5x = 25 => x = 5',
    difficulty: 'medium',
    isManual: true
  },
  {
    chapterId: 'y10-3',
    chapterTitle: 'Chapter 3: Algebraic Expressions and Equations',
    topicId: 'y10-3c',
    topicCode: '3C',
    topicTitle: 'Solving equations',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Solve for x: x/2 + x/5 = 14',
    answer: '20',
    solution: '5x/10 + 2x/10 = 14 => 7x/10 = 14 => 7x = 140 => x = 20',
    difficulty: 'hard',
    isManual: true
  },

  // SECTION 6: Inequalities (Sketching/Drawing)
  {
    chapterId: 'y10-3',
    chapterTitle: 'Chapter 3: Algebraic Expressions and Equations',
    topicId: 'y10-3d',
    topicCode: '3D',
    topicTitle: 'Inequalities',
    year: 'Year 10',
    type: 'graph_sketch',
    question: 'Solve and graph on a number line: x + 1 > 5',
    answer: 'x > 4',
    solution: 'x > 5 - 1 => x > 4. Draw an open circle at 4 and an arrow pointing to the right.',
    difficulty: 'medium',
    isManual: true
  },
  {
    chapterId: 'y10-3',
    chapterTitle: 'Chapter 3: Algebraic Expressions and Equations',
    topicId: 'y10-3d',
    topicCode: '3D',
    topicTitle: 'Inequalities',
    year: 'Year 10',
    type: 'graph_sketch',
    question: 'Solve and graph on a number line: -2x + 1 ≤ 6',
    answer: 'x ≥ -2.5',
    solution: '-2x ≤ 5 => x ≥ -5/2 => x ≥ -2.5. Draw a solid circle at -2.5 and an arrow pointing to the right.',
    difficulty: 'hard',
    isManual: true
  },
  {
    chapterId: 'y10-3',
    chapterTitle: 'Chapter 3: Algebraic Expressions and Equations',
    topicId: 'y10-3d',
    topicCode: '3D',
    topicTitle: 'Inequalities',
    year: 'Year 10',
    type: 'graph_sketch',
    question: 'Solve and graph on a number line: (2x - 1)/3 ≤ (x + 1)/4',
    answer: 'x ≤ 1.4',
    solution: '4(2x - 1) ≤ 3(x + 1) => 8x - 4 ≤ 3x + 3 => 5x ≤ 7 => x ≤ 1.4. Draw a solid circle at 1.4 and arrow left.',
    difficulty: 'hard',
    isManual: true
  }
];

export const importYear10Ch3 = async () => {
  console.log('Starting Year 10 Chapter 3 question import...');
  let importedCount = 0;
  
  for (const q of allQuestions) {
    try {
      const qRef = collection(db, 'questions');
      const dupQuery = query(qRef, where('question', '==', q.question));
      const dupSnap = await getDocs(dupQuery);
      
      if (dupSnap.empty) {
        await addDoc(collection(db, 'questions'), q);
        importedCount++;
      }
    } catch (error) {
      console.error('Error importing question:', error);
    }
  }
  
  console.log(`Successfully imported ${importedCount} Year 10 Ch 3 questions.`);
  return importedCount;
};
