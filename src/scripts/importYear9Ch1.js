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

  // --- SECTION 9: GEOMETRIC APPLICATIONS (Ref Image Q1, Q2) ---
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1i', topicCode: '1I', topicTitle: 'Geometric Applications',
    year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Find the perimeter of a rectangle with length $x + 5$ and width $x$.',
    answer: '4x + 10',
    solution: 'Step 1: Perimeter $P = 2 \\times (\\text{Length} + \\text{Width})$.\n$$P = 2 \\times ((x + 5) + x)$$\nStep 2: Combine terms inside brackets.\n$$P = 2 \\times (2x + 5)$$\nStep 3: Expand.\n$$P = 4x + 10$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1i', topicCode: '1I', topicTitle: 'Geometric Applications',
    year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Find the perimeter of a rectangle with length $x + 5$ and width $x$, if $x = 3$.',
    answer: '22',
    solution: 'Step 1: Substitute $x = 3$ into the perimeter expression $4x + 10$.\n$$4(3) + 10 = 12 + 10 = 22$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1i', topicCode: '1I', topicTitle: 'Geometric Applications',
    year: 'Year 9', type: 'short_answer', difficulty: 'hard', isManual: true,
    question: 'Find the value of $x$ if the perimeter of a rectangle with length $x+5$ and width $x$ is $50$ cm.',
    answer: '10',
    solution: 'Step 1: Set up the equation $4x + 10 = 50$.\nStep 2: Subtract $10$ from both sides: $4x = 40$.\nStep 3: Divide by $4$: $x = 10$.'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1i', topicCode: '1I', topicTitle: 'Geometric Applications',
    year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Find the area of a rectangle with length $x + 5$ and width $x$ in terms of $x$.',
    answer: 'x^2 + 5x',
    solution: 'Step 1: Area $A = \\text{Length} \\times \\text{Width}$.\n$$A = (x + 5) \\times x$$\nStep 2: Expand the bracket.\n$$A = x^2 + 5x$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1i', topicCode: '1I', topicTitle: 'Geometric Applications',
    year: 'Year 9', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'A rectangle has width $x+2$ and length $3x+4$. If each side is increased by 50%, what is the new length?',
    options: ['$4.5x + 6$', '$4.5x + 4$', '$3x + 9$', '$3x + 6$'],
    answer: '0',
    solution: 'Step 1: "Increased by 50%" means multiplying by $1.5$.\nStep 2: New Length $= 1.5 \\times (3x + 4)$.\nStep 3: Expand: $4.5x + 6$.'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1i', topicCode: '1I', topicTitle: 'Geometric Applications',
    year: 'Year 9', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'A rectangle has width $x+2$ and length $3x+4$. If each side is increased by 50%, what is the new area?',
    options: ['$2.25(3x^2 + 10x + 8)$', '$1.5(3x^2 + 10x + 8)$', '$3x^2 + 10x + 8$', '$4.5x^2 + 6$'],
    answer: '0',
    solution: 'Step 1: Original Area $= (x+2)(3x+4) = 3x^2 + 4x + 6x + 8 = 3x^2 + 10x + 8$.\nStep 2: Scale factor for area is $1.5^2 = 2.25$.\nStep 3: New Area $= 2.25 \\times (3x^2 + 10x + 8)$.'
  },

  // --- SECTION 10: NUMBER PATTERNS (Ref Image Q3, Q4, Q5) ---
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1j', topicCode: '1J', topicTitle: 'Number Patterns',
    year: 'Year 9', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Expand the expression: $(a + b + c)(x + y + z)$',
    options: ['$ax+ay+az+bx+by+bz+cx+cy+cz$', '$ax+by+cz$', '$a(x+y+z)+b(x+y+z)+c$', '$3(x+y+z)$'],
    answer: '0',
    solution: 'Each term in the first bracket must multiply every term in the second bracket. There are $3 \\times 3 = 9$ terms total.'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1j', topicCode: '1J', topicTitle: 'Number Patterns',
    year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Consider 4 consecutive whole numbers: $n, n+1, n+2, n+3$. What is the product of the outer pair?',
    answer: 'n^2 + 3n',
    solution: 'Outer pair: $n$ and $n+3$.\nProduct: $n(n+3) = n^2 + 3n$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1j', topicCode: '1J', topicTitle: 'Number Patterns',
    year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Consider 4 consecutive whole numbers: $n, n+1, n+2, n+3$. What is the product of the inner pair?',
    answer: 'n^2 + 3n + 2',
    solution: 'Inner pair: $n+1$ and $n+2$.\nProduct: $(n+1)(n+2) = n^2 + 2n + n + 2 = n^2 + 3n + 2$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1j', topicCode: '1J', topicTitle: 'Number Patterns',
    year: 'Year 9', type: 'short_answer', difficulty: 'hard', isManual: true,
    question: 'What is the difference between the inner product $(n^2+3n+2)$ and the outer product $(n^2+3n)$ for any 4 consecutive whole numbers?',
    answer: '2',
    solution: 'Difference: $(n^2+3n+2) - (n^2+3n) = 2$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1j', topicCode: '1J', topicTitle: 'Number Patterns',
    year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Consider 4 consecutive even numbers: $n, n+2, n+4, n+6$. What is the product of the outer pair?',
    answer: 'n^2 + 6n',
    solution: 'Outer pair: $n$ and $n+6$. Product: $n(n+6) = n^2 + 6n$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1j', topicCode: '1J', topicTitle: 'Number Patterns',
    year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Consider 4 consecutive even numbers: $n, n+2, n+4, n+6$. What is the product of the inner pair?',
    answer: 'n^2 + 6n + 8',
    solution: 'Inner pair: $n+2$ and $n+4$. Product: $(n+2)(n+4) = n^2 + 6n + 8$'
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
