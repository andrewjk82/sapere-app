import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

export const allQuestions = [
  // --- TOPIC 2A: IRRATIONAL NUMBERS AND SURDS ---
  {
    chapterId: 'y10-2',
    chapterTitle: 'Chapter 2: Review of surds',
    topicId: 'y10-2a',
    topicCode: '2A',
    topicTitle: 'Irrational numbers and surds',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Simplify the surd: √48',
    answer: '4√3',
    solution: '√48 = √(16 × 3) = √16 × √3 = 4√3',
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
    question: 'Simplify the surd: √200',
    answer: '10√2',
    solution: '√200 = √(100 × 2) = √100 × √2 = 10√2',
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
    question: 'Simplify the surd: √150',
    answer: '5√6',
    solution: '√150 = √(25 × 6) = √25 × √6 = 5√6',
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
    question: 'Simplify the surd: √128',
    answer: '8√2',
    solution: '√128 = √(64 × 2) = √64 × √2 = 8√2',
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
    question: 'Simplify the surd: √98',
    answer: '7√2',
    solution: '√98 = √(49 × 2) = √49 × √2 = 7√2',
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
    question: 'Simplify the surd: √28',
    answer: '2√7',
    solution: '√28 = √(4 × 7) = √4 × √7 = 2√7',
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
    question: 'Simplify the surd: √63',
    answer: '3√7',
    solution: '√63 = √(9 × 7) = √9 × √7 = 3√7',
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
    question: 'Simplify the surd: √108',
    answer: '6√3',
    solution: '√108 = √(36 × 3) = √36 × √3 = 6√3',
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
    question: 'Simplify the surd: √147',
    answer: '7√3',
    solution: '√147 = √(49 × 3) = √49 × √3 = 7√3',
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
    question: 'Simplify the surd: √242',
    answer: '11√2',
    solution: '√242 = √(121 × 2) = √121 × √2 = 11√2',
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
    question: 'Simplify the surd: √300',
    answer: '10√3',
    solution: '√300 = √(100 × 3) = √100 × √3 = 10√3',
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
    question: 'Write as a single surd: 2√7',
    answer: '√28',
    solution: '2√7 = √(2² × 7) = √(4 × 7) = √28',
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
    question: 'Write as a single surd: 3√11',
    answer: '√99',
    solution: '3√11 = √(3² × 11) = √(9 × 11) = √99',
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
    question: 'Write as a single surd: 4√3',
    answer: '√48',
    solution: '4√3 = √(4² × 3) = √(16 × 3) = √48',
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
    question: 'Write as a single surd: 6√2',
    answer: '√72',
    solution: '6√2 = √(6² × 2) = √(36 × 2) = √72',
    difficulty: 'easy',
    isManual: true
  },

  // --- TOPIC 2B: ADDITION AND SUBTRACTION OF SURDS ---
  {
    chapterId: 'y10-2',
    chapterTitle: 'Chapter 2: Review of surds',
    topicId: 'y10-2b',
    topicCode: '2B',
    topicTitle: 'Addition and subtraction of surds',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Simplify: 4√3 + 5√3 - 2√3',
    answer: '7√3',
    solution: '(4 + 5 - 2)√3 = 7√3',
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
    question: 'Simplify: -2√7 - 6√7 + 10√7',
    answer: '2√7',
    solution: '(-2 - 6 + 10)√7 = 2√7',
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
    question: 'Simplify: √5 - 3√2 + 4√5 + 2√2',
    answer: '5√5 - √2',
    solution: '(√5 + 4√5) + (-3√2 + 2√2) = 5√5 - √2',
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
    question: 'Simplify: √50 - √32',
    answer: '√2',
    solution: '√50 = 5√2, √32 = 4√2. So 5√2 - 4√2 = √2',
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
    question: 'Simplify: √75 - √48',
    answer: '√3',
    solution: '√75 = 5√3, √48 = 4√3. So 5√3 - 4√3 = √3',
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
    question: 'Simplify: √18 + √50',
    answer: '8√2',
    solution: '√18 = 3√2, √50 = 5√2. So 3√2 + 5√2 = 8√2',
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
    question: 'Simplify: 3√20 + 2√45',
    answer: '12√5',
    solution: '3(2√5) + 2(3√5) = 6√5 + 6√5 = 12√5',
    difficulty: 'hard',
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
    question: 'Simplify: 5√20 - 2√45 + 3√80',
    answer: '16√5',
    solution: '5(2√5) - 2(3√5) + 3(4√5) = 10√5 - 6√5 + 12√5 = 16√5',
    difficulty: 'hard',
    isManual: true
  },

  // --- TOPIC 2C: MULTIPLICATION AND DIVISION OF SURDS ---
  {
    chapterId: 'y10-2',
    chapterTitle: 'Chapter 2: Review of surds',
    topicId: 'y10-2c',
    topicCode: '2C',
    topicTitle: 'Multiplication and division of surds',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Simplify: 3√2 × 4√5',
    answer: '12√10',
    solution: '(3 × 4) × (√2 × √5) = 12√10',
    difficulty: 'easy',
    isManual: true
  },
  {
    chapterId: 'y10-2',
    chapterTitle: 'Chapter 2: Review of surds',
    topicId: 'y10-2c',
    topicCode: '2C',
    topicTitle: 'Multiplication and division of surds',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Simplify: 5√3 × 2√6',
    answer: '30√2',
    solution: '(5 × 2) × (√3 × √6) = 10√18 = 10(3√2) = 30√2',
    difficulty: 'medium',
    isManual: true
  },
  {
    chapterId: 'y10-2',
    chapterTitle: 'Chapter 2: Review of surds',
    topicId: 'y10-2c',
    topicCode: '2C',
    topicTitle: 'Multiplication and division of surds',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Simplify: 6√10 × 3√2',
    answer: '36√5',
    solution: '18√20 = 18(2√5) = 36√5',
    difficulty: 'medium',
    isManual: true
  },

  // --- TOPIC 2D: SPECIAL PRODUCTS (EXPANDING) ---
  {
    chapterId: 'y10-2',
    chapterTitle: 'Chapter 2: Review of surds',
    topicId: 'y10-2d',
    topicCode: '2D',
    topicTitle: 'Special products',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Expand: 3√2(4 + √2)',
    answer: '12√2 + 6',
    solution: '3√2 × 4 + 3√2 × √2 = 12√2 + 3(2) = 12√2 + 6',
    difficulty: 'medium',
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
    question: 'Expand: 2√3(√3 - 5)',
    answer: '6 - 10√3',
    solution: '2√3 × √3 - 2√3 × 5 = 2(3) - 10√3 = 6 - 10√3',
    difficulty: 'medium',
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
    question: 'Expand and simplify: (√2 + 3)(√2 - 1)',
    answer: '2√2 - 1',
    solution: '(√2 × √2) - √2 + 3√2 - 3 = 2 + 2√2 - 3 = 2√2 - 1',
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
    question: 'Expand and simplify: (2√5 - 1)(√5 + 2)',
    answer: '8 + 3√5',
    solution: '(2√5 × √5) + 4√5 - √5 - 2 = 2(5) + 3√5 - 2 = 10 + 3√5 - 2 = 8 + 3√5',
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
    question: 'Expand and simplify: (√7 + √3)(√7 - √3)',
    options: ['4', '10', '√4', '14'],
    answer: '0',
    solution: '(√7)² - (√3)² = 7 - 3 = 4',
    difficulty: 'medium',
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
    question: 'Expand and simplify: (3√2 - √5)(3√2 + √5)',
    options: ['13', '1', '18', '7'],
    answer: '0',
    solution: '(3√2)² - (√5)² = 18 - 5 = 13',
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
    question: 'Expand and simplify: (√3 + √2)²',
    options: ['5 + 2√6', '5', '5 + √6', '1'],
    answer: '0',
    solution: '(√3)² + 2(√3)(√2) + (√2)² = 3 + 2√6 + 2 = 5 + 2√6',
    difficulty: 'hard',
    isManual: true
  },

  // --- TOPIC 2E: RATIONALISING DENOMINATORS & GEOMETRY ---
  {
    chapterId: 'y10-2',
    chapterTitle: 'Chapter 2: Review of surds',
    topicId: 'y10-2e',
    topicCode: '2E',
    topicTitle: 'Rationalising denominators',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Rationalise the denominator: 10/√2',
    answer: '5√2',
    solution: '(10 × √2) / (√2 × √2) = 10√2 / 2 = 5√2',
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
    type: 'short_answer',
    question: 'Rationalise the denominator: 1/(√3 - √2)',
    answer: '√3 + √2',
    solution: '(1 × (√3 + √2)) / ((√3 - √2)(√3 + √2)) = (√3 + √2) / (3 - 2) = √3 + √2',
    difficulty: 'hard',
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
    question: 'Rationalise the denominator: 3/(2 - √3)',
    options: ['6 + 3√3', '6 - 3√3', '3 + √3', '2 + √3'],
    answer: '0',
    solution: '(3 × (2 + √3)) / ((2 - √3)(2 + √3)) = (6 + 3√3) / (4 - 3) = 6 + 3√3',
    difficulty: 'hard',
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
    question: 'Find integers p and q such that √3/(√3 - 1) = p + q√3',
    options: ['p=1.5, q=0.5', 'p=1, q=1', 'p=3, q=1', 'p=1.5, q=-0.5'],
    answer: '0',
    solution: '√3(√3 + 1) / ((√3 - 1)(√3 + 1)) = (3 + √3) / 2 = 1.5 + 0.5√3. So p=1.5, q=0.5.',
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
    question: 'A right-angled triangle has legs of length 3 and √7. Find the hypotenuse x.',
    options: ['4', '√10', '16', '√16'],
    answer: '0',
    solution: 'x² = 3² + (√7)² = 9 + 7 = 16. So x = √16 = 4.',
    difficulty: 'medium',
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
    question: 'A right-angled triangle has legs of length 4 + √3 and 4 - √3. Find the hypotenuse squared (x²).',
    options: ['38', '19', '32', '35'],
    answer: '0',
    solution: 'x² = (4 + √3)² + (4 - √3)² = (16 + 8√3 + 3) + (16 - 8√3 + 3) = 19 + 19 = 38.',
    difficulty: 'hard',
    isManual: true
  }
];

export const importYear10Ch2Ultimate = async () => {
  console.log('[Ch2 Import] Starting optimized audit...');
  let importedCount = 0;
  
  try {
    const qRef = collection(db, 'questions');
    const existingSnap = await getDocs(query(qRef, where('chapterId', '==', 'y10-2')));
    const existingQuestions = new Set(existingSnap.docs.map(doc => doc.data().question));
    
    console.log(`[Ch2 Import] Found ${existingQuestions.size} existing questions in DB.`);

    for (const q of allQuestions) {
      if (!existingQuestions.has(q.question)) {
        await addDoc(collection(db, 'questions'), q);
        importedCount++;
      }
    }
  } catch (error) {
    console.error('[Ch2 Import] CRITICAL ERROR:', error);
  }
  
  console.log(`[Ch2 Import] Successfully added ${importedCount} NEW questions.`);
  return importedCount;
};
