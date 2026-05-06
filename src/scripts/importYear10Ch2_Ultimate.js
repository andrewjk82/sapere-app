import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

const allQuestions = [
  // 1. Simplify Basics
  {
    chapterId: 'y10-2',
    chapterTitle: 'Chapter 2: Review of surds',
    topicId: 'y10-2b',
    topicCode: '2B',
    topicTitle: 'Addition and subtraction of surds',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Simplify: 2√2 + 3√2 - √2',
    answer: '4√2',
    solution: '(2 + 3 - 1)√2 = 4√2',
    difficulty: 'easy',
    isManual: true
  },
  {
    chapterId: 'y10-2',
    chapterTitle: 'Chapter 2: Review of surds',
    topicId: 'y10-2b',
    topicCode: '2B',
    topicTitle: 'Addition and subtraction of surds',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Simplify: -4√6 - 3√6 + 8√6',
    answer: '√6',
    solution: '(-4 - 3 + 8)√6 = 1√6 = √6',
    difficulty: 'easy',
    isManual: true
  },
  {
    chapterId: 'y10-2',
    chapterTitle: 'Chapter 2: Review of surds',
    topicId: 'y10-2b',
    topicCode: '2B',
    topicTitle: 'Addition and subtraction of surds',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Simplify: √3 - 2√2 + 2√3 + √2',
    answer: '3√3 - √2',
    solution: '(√3 + 2√3) + (-2√2 + √2) = 3√3 - √2',
    difficulty: 'easy',
    isManual: true
  },
  // 2. Simplify with simplification first
  {
    chapterId: 'y10-2',
    chapterTitle: 'Chapter 2: Review of surds',
    topicId: 'y10-2b',
    topicCode: '2B',
    topicTitle: 'Addition and subtraction of surds',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Simplify: √32 - √18',
    answer: '√2',
    solution: '√32 = 4√2, √18 = 3√2. So 4√2 - 3√2 = √2',
    difficulty: 'medium',
    isManual: true
  },
  {
    chapterId: 'y10-2',
    chapterTitle: 'Chapter 2: Review of surds',
    topicId: 'y10-2b',
    topicCode: '2B',
    topicTitle: 'Addition and subtraction of surds',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Simplify: √28 - 6√7',
    answer: '-4√7',
    solution: '√28 = 2√7. So 2√7 - 6√7 = -4√7',
    difficulty: 'medium',
    isManual: true
  },
  // 3. Multiplication
  {
    chapterId: 'y10-2',
    chapterTitle: 'Chapter 2: Review of surds',
    topicId: 'y10-2c',
    topicCode: '2C',
    topicTitle: 'Multiplication and division of surds',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Simplify: 2√3 × 5√6',
    answer: '30√2',
    solution: '2 × 5 × √3 × √6 = 10√18 = 10 × 3√2 = 30√2',
    difficulty: 'medium',
    isManual: true
  },
  // 4. Simplify √n -> a√b
  {
    chapterId: 'y10-2',
    chapterTitle: 'Chapter 2: Review of surds',
    topicId: 'y10-2a',
    topicCode: '2A',
    topicTitle: 'Irrational numbers and surds',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Simplify: √72',
    answer: '6√2',
    solution: '√72 = √(36 × 2) = 6√2',
    difficulty: 'easy',
    isManual: true
  },
  {
    chapterId: 'y10-2',
    chapterTitle: 'Chapter 2: Review of surds',
    topicId: 'y10-2a',
    topicCode: '2A',
    topicTitle: 'Irrational numbers and surds',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Simplify: √45',
    answer: '3√5',
    solution: '√45 = √(9 × 5) = 3√5',
    difficulty: 'easy',
    isManual: true
  },
  {
    chapterId: 'y10-2',
    chapterTitle: 'Chapter 2: Review of surds',
    topicId: 'y10-2a',
    topicCode: '2A',
    topicTitle: 'Irrational numbers and surds',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Simplify: √80',
    answer: '4√5',
    solution: '√80 = √(16 × 5) = 4√5',
    difficulty: 'easy',
    isManual: true
  },
  // 5. a√b -> √n
  {
    chapterId: 'y10-2',
    chapterTitle: 'Chapter 2: Review of surds',
    topicId: 'y10-2a',
    topicCode: '2A',
    topicTitle: 'Irrational numbers and surds',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Write as a single surd: 5√3',
    answer: '√75',
    solution: '5√3 = √(25 × 3) = √75',
    difficulty: 'easy',
    isManual: true
  },
  // 8. Expand
  {
    chapterId: 'y10-2',
    chapterTitle: 'Chapter 2: Review of surds',
    topicId: 'y10-2d',
    topicCode: '2D',
    topicTitle: 'Special products',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Expand: 2√3(3 + √3)',
    answer: '6√3 + 6',
    solution: '2√3 * 3 + 2√3 * √3 = 6√3 + 2 * 3 = 6√3 + 6',
    difficulty: 'medium',
    isManual: true
  },
  // 9. Expand binomial
  {
    chapterId: 'y10-2',
    chapterTitle: 'Chapter 2: Review of surds',
    topicId: 'y10-2d',
    topicCode: '2D',
    topicTitle: 'Special products',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Expand and simplify: (2√2 + 1)(3√2 - 2)',
    answer: '10 - √2',
    solution: '2√2*3√2 - 2√2*2 + 1*3√2 - 1*2 = 6*2 - 4√2 + 3√2 - 2 = 12 - √2 - 2 = 10 - √2',
    difficulty: 'hard',
    isManual: true
  },
  {
    chapterId: 'y10-2',
    chapterTitle: 'Chapter 2: Review of surds',
    topicId: 'y10-2d',
    topicCode: '2D',
    topicTitle: 'Special products',
    year: 'Year 10',
    type: 'multiple_choice',
    question: 'Expand and simplify: (√7 - √5)(√7 + √5)',
    options: ['2', '12', '√2', '14'],
    answer: '0', // 2
    solution: '(√7)² - (√5)² = 7 - 5 = 2',
    difficulty: 'medium',
    isManual: true
  },
  // 10. Rationalise
  {
    chapterId: 'y10-2',
    chapterTitle: 'Chapter 2: Review of surds',
    topicId: 'y10-2e',
    topicCode: '2E',
    topicTitle: 'Rationalising denominators',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Rationalise the denominator of 5/√3',
    answer: '5√3/3',
    solution: '(5 * √3) / (√3 * √3) = 5√3/3',
    difficulty: 'medium',
    isManual: true
  },
  {
    chapterId: 'y10-2',
    chapterTitle: 'Chapter 2: Review of surds',
    topicId: 'y10-2e',
    topicCode: '2E',
    topicTitle: 'Rationalising denominators',
    year: 'Year 10',
    type: 'multiple_choice',
    question: 'Rationalise the denominator of 1/(√5 - √7)',
    options: ['-(√5 + √7)/2', '(√5 + √7)/2', '√5 + √7', '-(√5 - √7)/2'],
    answer: '0',
    solution: '1(√5 + √7) / ((√5 - √7)(√5 + √7)) = (√5 + √7) / (5 - 7) = (√5 + √7) / -2 = -(√5 + √7)/2',
    difficulty: 'hard',
    isManual: true
  },
  // 13. Integers p, q
  {
    chapterId: 'y10-2',
    chapterTitle: 'Chapter 2: Review of surds',
    topicId: 'y10-2e',
    topicCode: '2E',
    topicTitle: 'Rationalising denominators',
    year: 'Year 10',
    type: 'multiple_choice',
    question: 'Find integers p and q such that √5/(√5 - 2) = p + q√5',
    options: ['p=5, q=2', 'p=5, q=1', 'p=2, q=5', 'p=5, q=-2'],
    answer: '0',
    solution: '√5(√5 + 2) / ((√5 - 2)(√5 + 2)) = (5 + 2√5) / (5 - 4) = 5 + 2√5. So p=5, q=2.',
    difficulty: 'hard',
    isManual: true
  },
  // 17. Square Area
  {
    chapterId: 'y10-2',
    chapterTitle: 'Chapter 2: Review of surds',
    topicId: 'y10-2d',
    topicCode: '2D',
    topicTitle: 'Special products',
    year: 'Year 10',
    type: 'short_answer',
    question: 'A square has sides of length 2 + √3. Find its area in simplest form.',
    answer: '7 + 4√3',
    solution: 'Area = (2 + √3)² = 4 + 4√3 + 3 = 7 + 4√3',
    difficulty: 'medium',
    isManual: true
  },
  // 19. Triangles (Geometry)
  {
    chapterId: 'y10-2',
    chapterTitle: 'Chapter 2: Review of surds',
    topicId: 'y10-2d',
    topicCode: '2D',
    topicTitle: 'Special products',
    year: 'Year 10',
    type: 'multiple_choice',
    question: 'A right-angled triangle has legs of length 2 + √3 and 2 - √3. Find the length of the hypotenuse x.',
    options: ['√14', '14', '√7', '4'],
    answer: '0',
    solution: 'x² = (2 + √3)² + (2 - √3)²\nx² = (7 + 4√3) + (7 - 4√3) = 14\nx = √14',
    difficulty: 'hard',
    isManual: true
  },
  {
    chapterId: 'y10-2',
    chapterTitle: 'Chapter 2: Review of surds',
    topicId: 'y10-2d',
    topicCode: '2D',
    topicTitle: 'Special products',
    year: 'Year 10',
    type: 'short_answer',
    question: 'A right-angled triangle has one leg of length 2√3 and a hypotenuse of 4√3. Find the length of the other leg x.',
    answer: '6',
    solution: 'x² + (2√3)² = (4√3)²\nx² + 12 = 48\nx² = 36\nx = 6',
    difficulty: 'hard',
    isManual: true
  },
  // 20. Golden Ratio
  {
    chapterId: 'y10-2',
    chapterTitle: 'Chapter 2: Review of surds',
    topicId: 'y10-2d',
    topicCode: '2D',
    topicTitle: 'Special products',
    year: 'Year 10',
    type: 'multiple_choice',
    question: 'The golden ratio is φ = (√5 + 1)/2. Find φ² in simplest form.',
    options: ['(3 + √5)/2', '(√5 + 1)/2', '3 + √5', '(5 + √5)/2'],
    answer: '0',
    solution: 'φ² = [(√5 + 1)/2]² = (5 + 2√5 + 1) / 4 = (6 + 2√5) / 4 = (3 + √5) / 2',
    difficulty: 'hard',
    isManual: true
  },
  {
    chapterId: 'y10-2',
    chapterTitle: 'Chapter 2: Review of surds',
    topicId: 'y10-2d',
    topicCode: '2D',
    topicTitle: 'Special products',
    year: 'Year 10',
    type: 'multiple_choice',
    question: 'A square has area 50. Find its perimeter in simplest surd form.',
    options: ['20√2', '10√2', '25√2', '40'],
    answer: '0',
    solution: 'Side = √50 = 5√2. Perimeter = 4 * side = 20√2.',
    difficulty: 'medium',
    isManual: true
  }
];

export const importYear10Ch2Ultimate = async () => {
  console.log('Starting Ultimate Year 10 Chapter 2 (Surds) question import...');
  let importedCount = 0;
  
  for (const q of allQuestions) {
    try {
      const qRef = collection(db, 'questions');
      const dupQuery = query(qRef, where('question', '==', q.question));
      const dupSnap = await getDocs(dupQuery);
      
      if (dupSnap.empty) {
        await addDoc(collection(db, 'questions'), q);
        importedCount++;
      } else {
        console.log(`Skipping duplicate Surds: ${q.question.slice(0, 30)}...`);
      }
    } catch (error) {
      console.error('Error importing Surds question:', error);
    }
  }
  
  console.log(`Successfully imported ${importedCount} Surds questions.`);
  return importedCount;
};
