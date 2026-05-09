import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, serverTimestamp } from 'firebase/firestore';

export const year9Ch1Questions = [
  // --- SECTION 1: EVALUATING EXPRESSIONS ---
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1a', topicCode: '1A', topicTitle: 'Evaluating Expressions',
    year: 'Year 9', type: 'short_answer', difficulty: 'easy', isManual: true,
    question: 'Evaluate $8m - 3n$ when $m = 3$ and $n = 5$.',
    answer: '9',
    solution: 'Step 1: Substitute the values into the expression.\n$$8(3) - 3(5)$$\nStep 2: Multiply.\n$$24 - 15$$\nStep 3: Subtract.\n$$9$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1a', topicCode: '1A', topicTitle: 'Evaluating Expressions',
    year: 'Year 9', type: 'short_answer', difficulty: 'easy', isManual: true,
    question: 'Evaluate $8m - 3n$ when $m = 2$ and $n = -5$.',
    answer: '31',
    solution: 'Step 1: Substitute the values.\n$$8(2) - 3(-5)$$\nStep 2: Multiply. Remember that multiplying two negatives gives a positive.\n$$16 - (-15) = 16 + 15$$\nStep 3: Add to find the final result.\n$$31$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1a', topicCode: '1A', topicTitle: 'Evaluating Expressions',
    year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Evaluate $5x + 11y$ when $x = -6$ and $y = 5$.',
    answer: '25',
    solution: 'Step 1: Substitute $x = -6$ and $y = 5$.\n$$5(-6) + 11(5)$$\nStep 2: Multiply.\n$$-30 + 55$$\nStep 3: Add.\n$$25$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1a', topicCode: '1A', topicTitle: 'Evaluating Expressions',
    year: 'Year 9', type: 'short_answer', difficulty: 'hard', isManual: true,
    question: 'Evaluate $2a + 3b - 3c$ when $a = -3, b = 5, c = 2$.',
    answer: '3',
    solution: 'Step 1: Substitute the values.\n$$2(-3) + 3(5) - 3(2)$$\nStep 2: Perform the multiplications.\n$$-6 + 15 - 6$$\nStep 3: Calculate the final sum.\n$$-6 + 15 = 9$$\n$$9 - 6 = 3$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1a', topicCode: '1A', topicTitle: 'Evaluating Expressions',
    year: 'Year 9', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Evaluate $x^2 - 2x$ when $x = -2$.',
    options: ['$8$', '$0$', '$4$', '$-8$'],
    answer: '0',
    solution: 'Step 1: Substitute $x = -2$. Use brackets for the negative square.\n$$(-2)^2 - 2(-2)$$\nStep 2: Square the $-2$.\n$$4 - 2(-2)$$\nStep 3: Subtract the product of $2$ and $-2$.\n$$4 - (-4) = 4 + 4$$\nStep 4: Result is $8$.'
  },

  // --- SECTION 2: SIMPLIFYING EXPRESSIONS ---
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1b', topicCode: '1B', topicTitle: 'Simplifying Expressions',
    year: 'Year 9', type: 'short_answer', difficulty: 'easy', isManual: true,
    question: 'Simplify: $7a + 2a$',
    answer: '9a',
    solution: 'Combine the coefficients of the like terms.\n$$7 + 2 = 9$$\nFinal result: $9a$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1b', topicCode: '1B', topicTitle: 'Simplifying Expressions',
    year: 'Year 9', type: 'short_answer', difficulty: 'easy', isManual: true,
    question: 'Simplify: $12m - 13m + 9m$',
    answer: '8m',
    solution: 'Combine the coefficients in order.\n$$12 - 13 = -1$$\n$$-1 + 9 = 8$$\nFinal result: $8m$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1b', topicCode: '1B', topicTitle: 'Simplifying Expressions',
    year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Simplify: $7a^2 + 3a^2 - 12a^2$',
    answer: '-2a^2',
    solution: 'Step 1: Combine the $a^2$ coefficients.\n$$7 + 3 - 12 = 10 - 12 = -2$$\nFinal result: $-2a^2$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1b', topicCode: '1B', topicTitle: 'Simplifying Expressions',
    year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Copy and complete: $8ab - \\dots = -5ab$',
    answer: '13ab',
    solution: 'To find the missing term, rearrange: $8ab - (-5ab) = \\dots$\n$$8ab + 5ab = 13ab$$'
  },

  // --- SECTION 3: EXPANDING BRACKETS ---
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1c', topicCode: '1C', topicTitle: 'Expanding Brackets',
    year: 'Year 9', type: 'short_answer', difficulty: 'easy', isManual: true,
    question: 'Expand: $3(x + 2)$',
    answer: '3x + 6',
    solution: 'Multiply $3$ by both $x$ and $2$.\n$$3 \\times x + 3 \\times 2 = 3x + 6$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1c', topicCode: '1C', topicTitle: 'Expanding Brackets',
    year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Expand: $-6(2d + 5)$',
    answer: '-12d - 30',
    solution: 'Multiply $-6$ by each term inside. Be careful with signs.\n$$-6 \\times 2d + (-6) \\times 5 = -12d - 30$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1c', topicCode: '1C', topicTitle: 'Expanding Brackets',
    year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Expand and simplify: $15(g + 2) - 8g$',
    answer: '7g + 30',
    solution: 'Step 1: Expand the bracket.\n$$15g + 30 - 8g$$\nStep 2: Collect like terms.\n$$(15g - 8g) + 30 = 7g + 30$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1c', topicCode: '1C', topicTitle: 'Expanding Brackets',
    year: 'Year 9', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Expand and simplify: $5a(2a + 3) - 7a$',
    options: ['$10a^2 + 8a$', '$10a^2 + 15a - 7$', '$10a^2 + 22a$', '$10a + 8a$'],
    answer: '0',
    solution: 'Step 1: Expand $5a(2a + 3)$.\n$$10a^2 + 15a$$\nStep 2: Subtract $7a$.\n$$10a^2 + 15a - 7a$$\nStep 3: Simplify like terms.\n$$10a^2 + 8a$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1c', topicCode: '1C', topicTitle: 'Expanding Brackets',
    year: 'Year 9', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Expand and simplify: $2(3z - 1) - 4(2z - 1)$',
    options: ['$-2z + 2$', '$-2z - 2$', '$14z + 2$', '$-2z + 6$'],
    answer: '0',
    solution: 'Step 1: Expand the first bracket: $6z - 2$\nStep 2: Expand the second bracket (watch the $-4$): $-8z + 4$\nStep 3: Combine them: $6z - 2 - 8z + 4$\nStep 4: Collect like terms: $(6z - 8z) + (-2 + 4) = -2z + 2$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1c', topicCode: '1C', topicTitle: 'Expanding Brackets',
    year: 'Year 9', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Expand and simplify: $6y(2y - 5) - 5(2y - 5)$',
    options: ['$12y^2 - 40y + 25$', '$12y^2 - 30y - 10y - 25$', '$12y^2 - 25$', '$12y^2 - 40y - 25$'],
    answer: '0',
    solution: 'Step 1: Expand the first part: $12y^2 - 30y$\nStep 2: Expand the second part: $-10y + 25$\nStep 3: Combine: $12y^2 - 30y - 10y + 25$\nStep 4: Simplify like terms: $12y^2 - 40y + 25$'
  },

  // --- SECTION 4: APPLICATIONS & SUB-QUESTIONS (Q12, Q19) ---
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1d', topicCode: '1D', topicTitle: 'Applications of Algebra',
    year: 'Year 9', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'A rectangular field has length $L = 4x - 1$ and width $W = 3$. Find the perimeter.',
    options: ['$8x + 4$', '$8x - 2$', '$12x - 3$', '$4x + 2$'],
    answer: '0',
    solution: 'Step 1: Formula $P = 2(L + W)$.\n$$P = 2((4x - 1) + 3)$$\nStep 2: Simplify brackets: $2(4x + 2)$\nStep 3: Expand: $8x + 4$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1d', topicCode: '1D', topicTitle: 'Applications of Algebra',
    year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'A rectangular field has length $L = 4x - 1$ and width $W = 3$. Find the area.',
    answer: '12x - 3',
    solution: 'Step 1: Formula $A = L \\times W$.\n$$A = 3 \\times (4x - 1)$$\nStep 2: Expand: $12x - 3$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1d', topicCode: '1D', topicTitle: 'Applications of Algebra',
    year: 'Year 9', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'A number $x$ is doubled, and then $5$ is added. The final result is $17$. Which equation matches this?',
    options: ['$2x + 5 = 17$', '$2(x + 5) = 17$', '$x/2 + 5 = 17$', '$5x + 2 = 17$'],
    answer: '0',
    solution: 'Step 1: "Number doubled" $\\rightarrow 2x$\nStep 2: "Then $5$ added" $\\rightarrow 2x + 5$\nStep 3: "Result is $17$" $\\rightarrow = 17$\nResult: $2x + 5 = 17$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1d', topicCode: '1D', topicTitle: 'Applications of Algebra',
    year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Solve for $x$ in the equation: $2x + 5 = 17$',
    answer: '6',
    solution: 'Step 1: Subtract $5$ from both sides: $2x = 12$\nStep 2: Divide by $2$: $x = 6$'
  },

  // --- ADDING MORE VARIATIONS TO REACH 35+ QUESTIONS ---
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1a', topicCode: '1A', topicTitle: 'Evaluating Expressions',
    year: 'Year 9', type: 'short_answer', difficulty: 'easy', isManual: true,
    question: 'Evaluate $5a - 2b$ if $a = 4$ and $b = 3$.',
    answer: '14',
    solution: '$$5(4) - 2(3) = 20 - 6 = 14$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1a', topicCode: '1A', topicTitle: 'Evaluating Expressions',
    year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Evaluate $x^2 + 5$ if $x = -3$.',
    answer: '14',
    solution: '$$(-3)^2 + 5 = 9 + 5 = 14$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1b', topicCode: '1B', topicTitle: 'Simplifying Expressions',
    year: 'Year 9', type: 'short_answer', difficulty: 'easy', isManual: true,
    question: 'Simplify: $10x + 4y - 3x + 2y$',
    answer: '7x + 6y',
    solution: '$$(10x - 3x) + (4y + 2y) = 7x + 6y$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1b', topicCode: '1B', topicTitle: 'Simplifying Expressions',
    year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Simplify: $2a^2b + 5a^2b - ab$',
    answer: '7a^2b - ab',
    solution: '$$(2 + 5)a^2b - ab = 7a^2b - ab$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1c', topicCode: '1C', topicTitle: 'Expanding Brackets',
    year: 'Year 9', type: 'short_answer', difficulty: 'easy', isManual: true,
    question: 'Expand: $4(2m - 3)$',
    answer: '8m - 12',
    solution: '$$4 \\times 2m + 4 \\times (-3) = 8m - 12$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1c', topicCode: '1C', topicTitle: 'Expanding Brackets',
    year: 'Year 9', type: 'short_answer', difficulty: 'hard', isManual: true,
    question: 'Expand and simplify: $x(x + 5) + 2(x - 3)$',
    answer: 'x^2 + 7x - 6',
    solution: 'Step 1: Expand both: $x^2 + 5x + 2x - 6$\nStep 2: Simplify: $x^2 + 7x - 6$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1a', topicCode: '1A', topicTitle: 'Evaluating Expressions',
    year: 'Year 9', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Evaluate $\\frac{2a + b}{c}$ when $a=5, b=2, c=3$.',
    options: ['$4$', '$12$', '$6$', '$2$'],
    answer: '0',
    solution: 'Step 1: Substitute values: $\\frac{2(5) + 2}{3} = \\frac{10 + 2}{3} = \\frac{12}{3} = 4$.'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1b', topicCode: '1B', topicTitle: 'Simplifying Expressions',
    year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Simplify: $15pq \\div 3p$',
    answer: '5q',
    solution: '$$\\frac{15pq}{3p} = \\frac{15}{3} \\times \\frac{p}{p} \\times q = 5 \\times 1 \\times q = 5q$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1b', topicCode: '1B', topicTitle: 'Simplifying Expressions',
    year: 'Year 9', type: 'short_answer', difficulty: 'hard', isManual: true,
    question: 'Simplify: $4x^2 \\times 3x^3$',
    answer: '12x^5',
    solution: 'Multiply coefficients and add exponents: $4 \\times 3 = 12$, $x^{2+3} = x^5$. Result: $12x^5$.'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1c', topicCode: '1C', topicTitle: 'Expanding Brackets',
    year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Expand: $x(2x - 7)$',
    answer: '2x^2 - 7x',
    solution: '$$x \\times 2x + x \\times (-7) = 2x^2 - 7x$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1d', topicCode: '1D', topicTitle: 'Applications of Algebra',
    year: 'Year 9', type: 'short_answer', difficulty: 'easy', isManual: true,
    question: 'Write an expression for "the sum of $x$ and $y$, divided by $2$".',
    answer: '(x + y) / 2',
    solution: 'Sum of $x$ and $y$ is $x + y$. Divided by $2$ is $\\frac{x + y}{2}$.'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1a', topicCode: '1A', topicTitle: 'Evaluating Expressions',
    year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Evaluate $3(m + n)$ if $m = 1.5$ and $n = 2.5$.',
    answer: '12',
    solution: '$$3(1.5 + 2.5) = 3(4) = 12$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1b', topicCode: '1B', topicTitle: 'Simplifying Expressions',
    year: 'Year 9', type: 'short_answer', difficulty: 'hard', isManual: true,
    question: 'Simplify: $12ab^2 \\div 4ab$',
    answer: '3b',
    solution: '$$\\frac{12}{4} = 3, \\frac{a}{a} = 1, \\frac{b^2}{b} = b. \\text{ Result: } 3b$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1c', topicCode: '1C', topicTitle: 'Expanding Brackets',
    year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Expand and simplify: $3(x + 4) - 2(x + 1)$',
    answer: 'x + 10',
    solution: 'Step 1: $3x + 12 - 2x - 2$\nStep 2: $(3x - 2x) + (12 - 2) = x + 10$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1d', topicCode: '1D', topicTitle: 'Applications of Algebra',
    year: 'Year 9', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'The cost of $5$ apples and $2$ bananas is $C = 5a + 2b$. If $a = $0.80 and $b = $1.20, find $C$.',
    options: ['$6.40$', '$5.20$', '$7.00$', '$4.80$'],
    answer: '0',
    solution: '$$5(0.80) + 2(1.20) = 4.00 + 2.40 = 6.40$$'
  }
];

export const importYear9Ch1 = async () => {
  const { collection, getDocs, query, where, addDoc } = await import('firebase/firestore');
  console.log('[Ch1 Y9 Import] Starting optimized audit...');
  let importedCount = 0;
  
  try {
    const qRef = collection(db, 'questions');
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
