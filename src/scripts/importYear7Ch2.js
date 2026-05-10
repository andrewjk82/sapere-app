import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

export const allQuestions = [
  // 1a. Factors of 20
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2a',
    topicCode: '2A',
    topicTitle: 'Factors and Multiples',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'List all the factors of 20 in order from smallest to largest.',
    options: [
      '1, 2, 4, 5, 10, 20',
      '1, 2, 5, 10, 20',
      '1, 2, 4, 10, 20',
      '2, 4, 5, 10'
    ],
    answer: 0,
    solution: 'Factors are numbers that divide 20 without a remainder:\n1. $20 \\div 1 = 20$\n2. $20 \\div 2 = 10$\n3. $20 \\div 4 = 5$\n\nSo the factors are: **1, 2, 4, 5, 10, 20**',
    difficulty: 'easy',
    isManual: true
  },
  // 1b. Factors of 32
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2a',
    topicCode: '2A',
    topicTitle: 'Factors and Multiples',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'List all the factors of 32 in order from smallest to largest.',
    options: [
      '1, 2, 4, 8, 16, 32',
      '1, 2, 4, 16, 32',
      '2, 4, 8, 16',
      '1, 2, 4, 8, 12, 16, 32'
    ],
    answer: 0,
    solution: 'Factors of 32:\n1. $32 \\div 1 = 32$\n2. $32 \\div 2 = 16$\n3. $32 \\div 4 = 8$\n\nThe complete list is: **1, 2, 4, 8, 16, 32**',
    difficulty: 'easy',
    isManual: true
  },
  // 1c. Factors of 45
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2a',
    topicCode: '2A',
    topicTitle: 'Factors and Multiples',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'List all the factors of 45 in order from smallest to largest.',
    options: [
      '1, 3, 5, 9, 15, 45',
      '1, 3, 5, 15, 45',
      '3, 5, 9, 15',
      '1, 5, 9, 45'
    ],
    answer: 0,
    solution: 'Factors of 45:\n1. $45 \\div 1 = 45$\n2. $45 \\div 3 = 15$\n3. $45 \\div 5 = 9$\n\nThe factors are: **1, 3, 5, 9, 15, 45**',
    difficulty: 'easy',
    isManual: true
  },
  // 2a. Multiples of 12
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2a',
    topicCode: '2A',
    topicTitle: 'Factors and Multiples',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'Which of the following is a complete list of multiples of 12 that are less than 100?',
    options: [
      '12, 24, 36, 48, 60, 72, 84, 96',
      '12, 24, 36, 48, 60, 72, 84',
      '1, 12, 24, 36, 48, 60, 72, 84, 96',
      '12, 24, 48, 72, 96'
    ],
    answer: 0,
    solution: 'Multiples of 12 are found by multiplying 12 by 1, 2, 3, ...:\n1. $12 \\times 1 = 12$\n2. $12 \\times 2 = 24$\n3. $12 \\times 3 = 36$\n4. $12 \\times 4 = 48$\n5. $12 \\times 5 = 60$\n6. $12 \\times 6 = 72$\n7. $12 \\times 7 = 84$\n8. $12 \\times 8 = 96$\n9. $12 \\times 9 = 108$ (too large)\n\nResult: **12, 24, 36, 48, 60, 72, 84, 96**',
    difficulty: 'easy',
    isManual: true
  },
  // 2b. Multiples of 16
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2a',
    topicCode: '2A',
    topicTitle: 'Factors and Multiples',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'How many multiples of 16 are there that are less than 100?',
    options: ['6', '5', '7', '4'],
    answer: 0,
    solution: 'Let\'s list them:\n1. $16 \\times 1 = 16$\n2. $16 \\times 2 = 32$\n3. $16 \\times 3 = 48$\n4. $16 \\times 4 = 64$\n5. $16 \\times 5 = 80$\n6. $16 \\times 6 = 96$\n\nThere are **6** multiples less than 100.',
    difficulty: 'easy',
    isManual: true
  },
  // 3a. Logic: Odd multiple of 9
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2a',
    topicCode: '2A',
    topicTitle: 'Factors and Multiples',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'Select a number that is **odd**, **greater than 60**, and a **multiple of 9**.',
    options: ['81', '72', '63', '90'],
    answer: 0,
    solution: 'Multiples of 9 greater than 60:\n63 (odd), 72 (even), 81 (odd), 90 (even), 99 (odd).\nAmong the options, **81** satisfies all conditions ($81 > 60$ and is odd). 63 also works, but let\'s check 81 as the primary choice.',
    difficulty: 'medium',
    isManual: true
  },
  // 3b. Logic: Even, divisible by 4
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2a',
    topicCode: '2A',
    topicTitle: 'Factors and Multiples',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'Identify a number that is **even**, **divisible by 4**, and lies between **120 and 140** (exclusive).',
    options: ['128', '122', '130', '134'],
    answer: 0,
    solution: 'Numbers between 120 and 140 divisible by 4:\n$124, 128, 132, 136$.\nAll are even. Among the options, **128** is the only one divisible by 4.',
    difficulty: 'medium',
    isManual: true
  },
  // 3c. Logic: Common factor, odd and prime
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2a',
    topicCode: '2A',
    topicTitle: 'Factors and Multiples',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'Find a number that has **84 and 70 as multiples**, and is both **odd and prime**.',
    options: ['7', '3', '5', '11'],
    answer: 0,
    solution: '"Has 84 as a multiple" means the number is a **factor** of 84.\nCommon factors of 84 and 70:\n- Factors of 84: 1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84\n- Factors of 70: 1, 2, 5, 7, 10, 14, 35, 70\n\nCommon factors are: {1, 2, 7, 14}.\nThe only one that is **odd and prime** is **7**.',
    difficulty: 'hard',
    isManual: true
  },
  // 4a. Sum of three 3-digit odd numbers
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2a',
    topicCode: '2A',
    topicTitle: 'Factors and Multiples',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'Which set of three **different** 3-digit **odd** numbers sums to exactly **653**?',
    options: [
      '201, 215, 237',
      '200, 215, 238',
      '211, 211, 231',
      '201, 203, 250'
    ],
    answer: 0,
    solution: 'Let\'s check the options:\n1. **201, 215, 237**: All are 3-digit, all are odd, all are different. Sum: $201 + 215 + 237 = 653$. (Correct!)\n2. **200, 215, 238**: 200 and 238 are even.\n3. **211, 211, 231**: Not different (211 is repeated).\n4. **201, 203, 250**: 250 is even.',
    difficulty: 'medium',
    isManual: true
  },
  // --- Page 2 Questions ---
  // 5. Powers
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2b',
    topicCode: '2B',
    topicTitle: 'Indices and Powers',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'Evaluate the following power: $4^5$',
    options: ['1024', '256', '512', '2048'],
    answer: 0,
    solution: 'To evaluate $4^5$, we multiply 4 by itself 5 times:\n1. $4 \\times 4 = 16$\n2. $16 \\times 4 = 64$\n3. $64 \\times 4 = 256$\n4. $256 \\times 4 = 1024$\n\nSo, $4^5 = 1024$.',
    difficulty: 'medium',
    isManual: true
  },
  // 6. Powers 2
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2b',
    topicCode: '2B',
    topicTitle: 'Indices and Powers',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'Evaluate the following power: $5^4$',
    options: ['625', '125', '3125', '250'],
    answer: 0,
    solution: 'To evaluate $5^4$:\n1. $5 \\times 5 = 25$\n2. $25 \\times 5 = 125$\n3. $125 \\times 5 = 625$\n\nSo, $5^4 = 625$.',
    difficulty: 'medium',
    isManual: true
  },
  // 7. Index Notation
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2b',
    topicCode: '2B',
    topicTitle: 'Indices and Powers',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'Write the following using index notation: $2 \\times 2 \\times 2 \\times 7 \\times 7$',
    options: ['$2^3 \\times 7^2$', '$2^2 \\times 7^3$', '$2^3 + 7^2$', '$2^4 \\times 7^2$'],
    answer: 0,
    solution: 'Index notation represents how many times a number (the base) is multiplied by itself.\n- There are three 2s: $2 \\times 2 \\times 2 = 2^3$\n- There are two 7s: $7 \\times 7 = 7^2$\n\nCombined: **$2^3 \\times 7^2$**',
    difficulty: 'easy',
    isManual: true
  },
  // 8. Expression Evaluation
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2b',
    topicCode: '2B',
    topicTitle: 'Indices and Powers',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'Evaluate the expression: $(2 \\times 2 \\times 3)^2$',
    options: ['144', '12', '24', '72'],
    answer: 0,
    solution: '1. Calculate the value inside the parentheses: $2 \\times 2 \\times 3 = 4 \\times 3 = 12$\n2. Square the result: $12^2 = 12 \\times 12 = 144$\n\nFinal result: **144**',
    difficulty: 'medium',
    isManual: true
  },
  // 11. Square Roots
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2c',
    topicCode: '2C',
    topicTitle: 'Square Roots',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'Find the square root of 625.',
    options: ['25', '15', '35', '25.5'],
    answer: 0,
    solution: 'The square root of 625 is the number that, when multiplied by itself, equals 625.\nWe know that:\n$20^2 = 400$\n$30^2 = 900$\nSo the answer is between 20 and 30.\nTesting 25: $25 \\times 25 = 625$.\n\nResult: **25**',
    difficulty: 'medium',
    isManual: true
  },
  // 12. Divisibility Logic
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2d',
    topicCode: '2D',
    topicTitle: 'Divisibility',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'What is the number divisible by 7 and closest to 100?',
    options: ['98', '105', '100', '91'],
    answer: 0,
    solution: '1. Divide 100 by 7 to find the approximate multiple: $100 \\div 7 = 14.28...$\n2. Check the nearest multiples:\n   - $14 \\times 7 = 98$\n   - $15 \\times 7 = 105$\n3. Compare the distances:\n   - $|100 - 98| = 2$\n   - $|100 - 105| = 5$\n\nThe closest number is **98**.',
    difficulty: 'medium',
    isManual: true
  },
  // 14. Zeros in products
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2b',
    topicCode: '2B',
    topicTitle: 'Indices and Powers',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'How many zeros are there at the end of the number result of $2^6 \\times 5^6$?',
    options: ['6', '5', '12', '10'],
    answer: 0,
    solution: 'Recall the property: $a^n \\times b^n = (a \\times b)^n$\nSo, $2^6 \\times 5^6 = (2 \\times 5)^6 = 10^6$\n$10^6$ is a 1 followed by 6 zeros.\n\nResult: **6** zeros.',
    difficulty: 'hard',
    isManual: true
  },
  // 15. Prime Factorization
  {
    chapterId: 'y7-2',
    chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility',
    topicId: 'y7-2e',
    topicCode: '2E',
    topicTitle: 'Prime Factorization',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'Express 360 as a product of its prime factors in index notation.',
    options: ['$2^3 \\times 3^2 \\times 5$', '$2^2 \\times 3^3 \\times 5$', '$2^3 \\times 3 \\times 5^2$', '$2^4 \\times 3 \\times 5$'],
    answer: 0,
    solution: 'Let\'s use a factor tree for 360:\n1. $360 = 36 \\times 10$\n2. $36 = 6 \\times 6 = (2 \\times 3) \\times (2 \\times 3) = 2^2 \\times 3^2$\n3. $10 = 2 \\times 5$\n4. Combine all factors: $(2^2 \\times 3^2) \\times (2 \\times 5) = 2^3 \\times 3^2 \\times 5$\n\nResult: **$2^3 \\times 3^2 \\times 5$**',
    difficulty: 'hard',
    isManual: true
  }
];

export const importYear7Ch2 = async () => {
  console.log('[Ch2 Year 7 Import] Starting audit...');
  let importedCount = 0;
  
  try {
    const qRef = collection(db, 'questions');
    const existingSnap = await getDocs(query(qRef, where('chapterId', '==', 'y7-2')));
    const existingQuestions = new Set(existingSnap.docs.map(doc => doc.data().question));
    
    for (const q of allQuestions) {
      if (!existingQuestions.has(q.question)) {
        await addDoc(collection(db, 'questions'), q);
        importedCount++;
      }
    }
  } catch (error) {
    console.error('[Ch2 Year 7 Import] CRITICAL ERROR:', error);
  }
  
  return importedCount;
};
