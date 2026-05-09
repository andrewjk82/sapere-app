import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

export const year9Ch1Questions = [
  // --- SECTION 1: EVALUATING EXPRESSIONS (Ref Image Q1-Q4) ---
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1a', topicCode: '1A', topicTitle: 'Evaluating Expressions',
    year: 'Year 9', type: 'short_answer', difficulty: 'easy', isManual: true,
    question: 'Evaluate $7m - 4n$ when $m = 4$ and $n = 5$.',
    answer: '8',
    solution: 'Step 1: Substitute $m = 4$ and $n = 5$ into the expression.\n$$7(4) - 4(5)$$\nStep 2: Multiply the values.\n$$28 - 20$$\nStep 3: Subtract to find the final result.\n$$8$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1a', topicCode: '1A', topicTitle: 'Evaluating Expressions',
    year: 'Year 9', type: 'short_answer', difficulty: 'easy', isManual: true,
    question: 'Evaluate $9a + 2b$ when $a = 3$ and $b = -4$.',
    answer: '19',
    solution: 'Step 1: Substitute $a = 3$ and $b = -4$ into the expression.\n$$9(3) + 2(-4)$$\nStep 2: Multiply the values.\n$$27 + (-8)$$\nStep 3: Simplify the addition of a negative number.\n$$27 - 8 = 19$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1a', topicCode: '1A', topicTitle: 'Evaluating Expressions',
    year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Evaluate $3x - 5y + 2z$ when $x = 2$, $y = 3$, and $z = -1$.',
    answer: '-11',
    solution: 'Step 1: Substitute the values for $x, y,$ and $z$.\n$$3(2) - 5(3) + 2(-1)$$\nStep 2: Perform the multiplications.\n$$6 - 15 - 2$$\nStep 3: Calculate the final sum.\n$$6 - 15 = -9$$\n$$-9 - 2 = -11$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1a', topicCode: '1A', topicTitle: 'Evaluating Expressions',
    year: 'Year 9', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Evaluate $x^2 - 3x$ when $x = -4$.',
    options: ['$28$', '$4$', '$-28$', '$-4$'],
    answer: '0',
    solution: 'Step 1: Substitute $x = -4$ into the expression. Remember to use brackets for negative numbers being squared.\n$$(-4)^2 - 3(-4)$$\nStep 2: Calculate the square of $-4$.\n$$16 - 3(-4)$$\nStep 3: Perform the subtraction of a negative product (which becomes addition).\n$$16 + 12$$\nStep 4: Result is $28$.'
  },

  // --- SECTION 2: SIMPLIFYING EXPRESSIONS (Ref Image Q5-Q6) ---
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1b', topicCode: '1B', topicTitle: 'Simplifying Expressions',
    year: 'Year 9', type: 'short_answer', difficulty: 'easy', isManual: true,
    question: 'Simplify by collecting like terms: $8x + 5x + 2y - y$.',
    answer: '13x + y',
    solution: 'Step 1: Group the terms with $x$ and the terms with $y$.\n$$(8x + 5x) + (2y - y)$$\nStep 2: Add the coefficients of the like terms.\n$$13x + y$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1b', topicCode: '1B', topicTitle: 'Simplifying Expressions',
    year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Simplify the expression: $4ab - 7a + 2ab + 10a$.',
    answer: '6ab + 3a',
    solution: 'Step 1: Identify the like terms. Here we have terms with $ab$ and terms with $a$.\n$$(4ab + 2ab) + (-7a + 10a)$$\nStep 2: Combine the coefficients.\n$$6ab + 3a$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1b', topicCode: '1B', topicTitle: 'Simplifying Expressions',
    year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Copy and complete the statement: $5m + \\dots = 14m$',
    answer: '9m',
    solution: 'Step 1: To find the missing term, subtract the first term from the total.\n$$14m - 5m = 9m$$\nStep 2: The missing term is $9m$.'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1b', topicCode: '1B', topicTitle: 'Simplifying Expressions',
    year: 'Year 9', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Simplify: $5x^2 - 3x + 2x^2 + 8x - 10$.',
    options: ['$7x^2 + 5x - 10$', '$7x^2 - 11x - 10$', '$3x^2 + 5x - 10$', '$7x^2 + 5x + 10$'],
    answer: '0',
    solution: 'Step 1: Group the like terms ($x^2$ terms, $x$ terms, and constants).\n$$(5x^2 + 2x^2) + (-3x + 8x) - 10$$\nStep 2: Combine the coefficients.\n$$7x^2 + 5x - 10$$'
  },

  // --- SECTION 3: EXPANDING BRACKETS (Ref Image Q7) ---
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1c', topicCode: '1C', topicTitle: 'Expanding Brackets',
    year: 'Year 9', type: 'short_answer', difficulty: 'easy', isManual: true,
    question: 'Expand: $5(x + 4)$.',
    answer: '5x + 20',
    solution: 'Step 1: Multiply the term outside the bracket by each term inside the bracket.\n$$5 \\times x + 5 \\times 4$$\nStep 2: Simplify the expression.\n$$5x + 20$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1c', topicCode: '1C', topicTitle: 'Expanding Brackets',
    year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Expand and simplify: $3(2a - 5) + 4a$.',
    answer: '10a - 15',
    solution: 'Step 1: Expand the bracket by multiplying $3$ with both $2a$ and $-5$.\n$$6a - 15 + 4a$$\nStep 2: Collect the like terms ($6a$ and $4a$).\n$$(6a + 4a) - 15$$\nStep 3: Result is $10a - 15$.'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1c', topicCode: '1C', topicTitle: 'Expanding Brackets',
    year: 'Year 9', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Expand and simplify: $-2(3x - 1) + 4(x + 2)$.',
    options: ['$-2x + 10$', '$-2x + 6$', '$-10x + 10$', '$-2x - 6$'],
    answer: '0',
    solution: 'Step 1: Expand the first bracket.\n$$-6x + 2$$\nStep 2: Expand the second bracket.\n$$4x + 8$$\nStep 3: Combine both parts.\n$$-6x + 2 + 4x + 8$$\nStep 4: Collect like terms.\n$$(-6x + 4x) + (2 + 8)$$\nStep 5: Result is $-2x + 10$.'
  },

  // --- SECTION 4: SUB-QUESTIONS (Ref User Req Q12, Q19) ---
  // Q12: Perimeter and Area
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1d', topicCode: '1D', topicTitle: 'Applications of Algebra',
    year: 'Year 9', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'A rectangle has a length of $3x + 2$ units and a width of $5$ units. Find the expression for its perimeter.',
    options: ['$6x + 14$', '$3x + 7$', '$15x + 10$', '$6x + 4$'],
    answer: '0',
    solution: 'Step 1: The formula for perimeter $P$ is $2 \\times (\\text{Length} + \\text{Width})$.\n$$P = 2( (3x + 2) + 5 )$$\nStep 2: Simplify the expression inside the brackets.\n$$P = 2( 3x + 7 )$$\nStep 3: Expand the bracket.\n$$P = 6x + 14$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1d', topicCode: '1D', topicTitle: 'Applications of Algebra',
    year: 'Year 9', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'A rectangle has a length of $3x + 2$ units and a width of $5$ units. Find the expression for its area.',
    options: ['$15x + 10$', '$3x + 7$', '$6x + 14$', '$15x + 2$'],
    answer: '0',
    solution: 'Step 1: The formula for area $A$ is $\\text{Length} \\times \\text{Width}$.\n$$A = 5 \\times (3x + 2)$$\nStep 2: Expand the expression.\n$$A = 15x + 10$$'
  },
  // Q19: Problem Solving
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1d', topicCode: '1D', topicTitle: 'Applications of Algebra',
    year: 'Year 9', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'If a number $n$ is tripled and then $8$ is subtracted, the result is $13$. Which equation represents this situation?',
    options: ['$3n - 8 = 13$', '$3(n - 8) = 13$', '$8 - 3n = 13$', '$n/3 - 8 = 13$'],
    answer: '0',
    solution: 'Step 1: Identify the operations. "Number $n$ is tripled" means $3n$.\nStep 2: "Then $8$ is subtracted" means $3n - 8$.\nStep 3: "The result is $13$" means $= 13$.\nResult: $3n - 8 = 13$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1d', topicCode: '1D', topicTitle: 'Applications of Algebra',
    year: 'Year 9', type: 'short_answer', difficulty: 'hard', isManual: true,
    question: 'Solve for $n$ if $3n - 8 = 13$.',
    answer: '7',
    solution: 'Step 1: Add $8$ to both sides of the equation.\n$$3n = 21$$\nStep 2: Divide both sides by $3$.\n$$n = 7$$'
  }
];

export const importYear9Ch1 = async () => {
  const { collection, getDocs, query, where, addDoc } = await import('firebase/firestore');
  console.log('[Ch1 Y9 Import] Starting optimized audit...');
  let importedCount = 0;
  
  try {
    const qRef = collection(db, 'questions');
    // Check if questions for this chapter already exist to prevent duplicates
    const existingSnap = await getDocs(query(qRef, where('chapterId', '==', 'y9-1')));
    const existingQuestions = new Set(existingSnap.docs.map(doc => doc.data().question));
    
    for (const q of year9Ch1Questions) {
      if (!existingQuestions.has(q.question)) {
        await addDoc(collection(db, 'questions'), q);
        importedCount++;
      }
    }
  } catch (error) {
    console.error('[Ch1 Y9 Import] ERROR:', error);
  }
  
  console.log(`[Ch1 Y9 Import] Successfully added ${importedCount} NEW questions.`);
  return importedCount;
};
