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

  // --- SECTION 5: BINOMIAL EXPANSION (Ref Image Q8) ---
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1e', topicCode: '1E', topicTitle: 'Binomial Expansion',
    year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Expand and collect like terms: $(x + 3)(x + 5)$',
    answer: 'x^2 + 8x + 15',
    solution: 'Step 1: Use FOIL (First, Outside, Inside, Last).\n$$x \\times x + x \\times 5 + 3 \\times x + 3 \\times 5$$\nStep 2: Simplify each term.\n$$x^2 + 5x + 3x + 15$$\nStep 3: Collect like terms.\n$$x^2 + 8x + 15$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1e', topicCode: '1E', topicTitle: 'Binomial Expansion',
    year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Expand and collect like terms: $(a - 6)(a - 4)$',
    answer: 'a^2 - 10a + 24',
    solution: 'Step 1: Multiply the terms.\n$$a \\times a + a \\times (-4) - 6 \\times a - 6 \\times (-4)$$\nStep 2: Simplify.\n$$a^2 - 4a - 6a + 24$$\nStep 3: Collect like terms.\n$$a^2 - 10a + 24$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1e', topicCode: '1E', topicTitle: 'Binomial Expansion',
    year: 'Year 9', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Expand and simplify: $(3x + 2)(2x + 4)$',
    options: ['$6x^2 + 16x + 8$', '$6x^2 + 10x + 8$', '$5x^2 + 16x + 8$', '$6x^2 + 16x + 6$'],
    answer: '0',
    solution: 'Step 1: FOIL method.\n$$3x(2x) + 3x(4) + 2(2x) + 2(4)$$\nStep 2: Multiply terms.\n$$6x^2 + 12x + 4x + 8$$\nStep 3: Combine $x$ terms.\n$$6x^2 + 16x + 8$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1e', topicCode: '1E', topicTitle: 'Binomial Expansion',
    year: 'Year 9', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Expand and simplify: $(4a - 1)(5a + 3)$',
    options: ['$20a^2 + 7a - 3$', '$20a^2 + 13a - 3$', '$20a^2 - 7a - 3$', '$20a^2 + 7a + 3$'],
    answer: '0',
    solution: 'Step 1: FOIL.\n$$4a(5a) + 4a(3) - 1(5a) - 1(3)$$\nStep 2: Simplify.\n$$20a^2 + 12a - 5a - 3$$\nStep 3: Combine terms.\n$$20a^2 + 7a - 3$$'
  },

  // --- SECTION 6: PERFECT SQUARES (Ref Image Q9) ---
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1f', topicCode: '1F', topicTitle: 'Perfect Squares',
    year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Expand: $(x + 8)^2$',
    answer: 'x^2 + 16x + 64',
    solution: 'Step 1: Use the identity $(a + b)^2 = a^2 + 2ab + b^2$.\nStep 2: Substitute $a = x$ and $b = 8$.\n$$x^2 + 2(x)(8) + 8^2$$\nStep 3: Simplify.\n$$x^2 + 16x + 64$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1f', topicCode: '1F', topicTitle: 'Perfect Squares',
    year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Expand: $(a - 7)^2$',
    answer: 'a^2 - 14a + 49',
    solution: 'Step 1: Use the identity $(a - b)^2 = a^2 - 2ab + b^2$.\nStep 2: Substitute $a = a$ and $b = 7$.\n$$a^2 - 2(a)(7) + 7^2$$\nStep 3: Simplify.\n$$a^2 - 14a + 49$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1f', topicCode: '1F', topicTitle: 'Perfect Squares',
    year: 'Year 9', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Expand: $(3x - 5y)^2$',
    options: ['$9x^2 - 30xy + 25y^2$', '$9x^2 + 30xy + 25y^2$', '$9x^2 - 15xy + 25y^2$', '$6x^2 - 30xy + 10y^2$'],
    answer: '0',
    solution: 'Step 1: Apply $(A - B)^2 = A^2 - 2AB + B^2$.\nStep 2: $A = 3x, B = 5y$.\n$$(3x)^2 - 2(3x)(5y) + (5y)^2$$\nStep 3: Calculate each term.\n$$9x^2 - 30xy + 25y^2$$'
  },

  // --- SECTION 7: DIFFERENCE OF TWO SQUARES (Ref Image Q10) ---
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1g', topicCode: '1G', topicTitle: 'Difference of Two Squares',
    year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Expand: $(x - 12)(x + 12)$',
    answer: 'x^2 - 144',
    solution: 'Step 1: Use the identity $(a - b)(a + b) = a^2 - b^2$.\nStep 2: $a = x, b = 12$.\n$$x^2 - 12^2$$\nStep 3: Simplify.\n$$x^2 - 144$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1g', topicCode: '1G', topicTitle: 'Difference of Two Squares',
    year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Expand: $(4a + 5)(4a - 5)$',
    answer: '16a^2 - 25',
    solution: 'Step 1: Identity $(A+B)(A-B) = A^2 - B^2$.\nStep 2: $A = 4a, B = 5$.\n$$(4a)^2 - 5^2$$\nStep 3: Simplify.\n$$16a^2 - 25$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1g', topicCode: '1G', topicTitle: 'Difference of Two Squares',
    year: 'Year 9', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Expand: $(7x - 3y)(7x + 3y)$',
    options: ['$49x^2 - 9y^2$', '$49x^2 + 9y^2$', '$14x^2 - 6y^2$', '$49x^2 - 21xy - 9y^2$'],
    answer: '0',
    solution: 'Step 1: Difference of two squares.\nStep 2: $(7x)^2 - (3y)^2$\nStep 3: Result is $49x^2 - 9y^2$.'
  },

  // --- SECTION 8: ADVANCED EXPANSION (Ref Image Q11, Q12) ---
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1h', topicCode: '1H', topicTitle: 'Advanced Expansion',
    year: 'Year 9', type: 'short_answer', difficulty: 'hard', isManual: true,
    question: 'Expand and collect like terms: $(2x + y)(3x - 2y)$',
    answer: '6x^2 - xy - 2y^2',
    solution: 'Step 1: FOIL.\n$$2x(3x) - 2x(2y) + y(3x) - y(2y)$$\nStep 2: Multiply.\n$$6x^2 - 4xy + 3xy - 2y^2$$\nStep 3: Combine middle terms.\n$$6x^2 - xy - 2y^2$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1h', topicCode: '1H', topicTitle: 'Advanced Expansion',
    year: 'Year 9', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Expand and simplify: $(\\frac{x}{2} + 3)(\\frac{x}{2} - 3)$',
    options: ['$x^2/4 - 9$', '$x^2/4 + 9$', '$x^2/2 - 9$', '$x/4 - 9$'],
    answer: '0',
    solution: 'Step 1: Difference of two squares.\nStep 2: $(\\frac{x}{2})^2 - 3^2$\nStep 3: Simplify.\n$$\\frac{x^2}{4} - 9$$'
  },
  {
    chapterId: 'y9-1', chapterTitle: 'Chapter 1: Algebra', topicId: 'y9-1h', topicCode: '1H', topicTitle: 'Advanced Expansion',
    year: 'Year 9', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Expand: $(\\frac{a}{3} + 1)(\\frac{a}{2} - 4)$',
    options: ['$a^2/6 - 5a/6 - 4$', '$a^2/6 - 4a/3 + a/2 - 4$', '$a^2/5 - 4$', '$a^2/6 + 5a/6 - 4$'],
    answer: '0',
    solution: 'Step 1: Multiply terms.\n$$\\frac{a}{3} \\times \\frac{a}{2} + \\frac{a}{3} \\times (-4) + 1 \\times \\frac{a}{2} + 1 \\times (-4)$$\nStep 2: Simplify.\n$$\\frac{a^2}{6} - \\frac{4a}{3} + \\frac{a}{2} - 4$$\nStep 3: Combine $\\frac{a}{2} - \\frac{4a}{3} = \\frac{3a-8a}{6} = -\\frac{5a}{6}$.\nResult: $\\frac{a^2}{6} - \\frac{5a}{6} - 4$'
  },

  // --- MANY MORE VARIATIONS TO ENSURE "ALL QUESTIONS" FROM IMAGE ARE COVERED ---
  // Q8 Variations
  { chapterId: 'y9-1', topicId: 'y9-1e', topicCode: '1E', topicTitle: 'Binomial Expansion', year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true, question: 'Expand: $(p + 4)(p + 7)$', answer: 'p^2 + 11p + 28', solution: 'FOIL: $p^2 + 7p + 4p + 28 = p^2 + 11p + 28$' },
  { chapterId: 'y9-1', topicId: 'y9-1e', topicCode: '1E', topicTitle: 'Binomial Expansion', year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true, question: 'Expand: $(m - 3)(m - 10)$', answer: 'm^2 - 13m + 30', solution: 'FOIL: $m^2 - 10m - 3m + 30 = m^2 - 13m + 30$' },
  { chapterId: 'y9-1', topicId: 'y9-1e', topicCode: '1E', topicTitle: 'Binomial Expansion', year: 'Year 9', type: 'short_answer', difficulty: 'hard', isManual: true, question: 'Expand: $(3k + 1)(2k - 5)$', answer: '6k^2 - 13k - 5', solution: 'FOIL: $6k^2 - 15k + 2k - 5 = 6k^2 - 13k - 5$' },
  
  // Q9 Variations
  { chapterId: 'y9-1', topicId: 'y9-1f', topicCode: '1F', topicTitle: 'Perfect Squares', year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true, question: 'Expand: $(2y + 3)^2$', answer: '4y^2 + 12y + 9', solution: '$(2y)^2 + 2(2y)(3) + 3^2 = 4y^2 + 12y + 9$' },
  { chapterId: 'y9-1', topicId: 'y9-1f', topicCode: '1F', topicTitle: 'Perfect Squares', year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true, question: 'Expand: $(x - 10)^2$', answer: 'x^2 - 20x + 100', solution: '$x^2 - 2(x)(10) + 10^2 = x^2 - 20x + 100$' },
  { chapterId: 'y9-1', topicId: 'y9-1f', topicCode: '1F', topicTitle: 'Perfect Squares', year: 'Year 9', type: 'short_answer', difficulty: 'hard', isManual: true, question: 'Expand: $(5a + 2b)^2$', answer: '25a^2 + 20ab + 4b^2', solution: '$(5a)^2 + 2(5a)(2b) + (2b)^2 = 25a^2 + 20ab + 4b^2$' },
  
  // Q10 Variations
  { chapterId: 'y9-1', topicId: 'y9-1g', topicCode: '1G', topicTitle: 'Difference of Two Squares', year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true, question: 'Expand: $(3z - 4)(3z + 4)$', answer: '9z^2 - 16', solution: '$(3z)^2 - 4^2 = 9z^2 - 16$' },
  { chapterId: 'y9-1', topicId: 'y9-1g', topicCode: '1G', topicTitle: 'Difference of Two Squares', year: 'Year 9', type: 'short_answer', difficulty: 'medium', isManual: true, question: 'Expand: $(10 - x)(10 + x)$', answer: '100 - x^2', solution: '$10^2 - x^2 = 100 - x^2$' },
  
  // Q11/Q12 Variations
  { chapterId: 'y9-1', topicId: 'y9-1h', topicCode: '1H', topicTitle: 'Advanced Expansion', year: 'Year 9', type: 'short_answer', difficulty: 'hard', isManual: true, question: 'Expand: $(3a + 2b)(a - 4b)$', answer: '3a^2 - 10ab - 8b^2', solution: 'FOIL: $3a^2 - 12ab + 2ab - 8b^2 = 3a^2 - 10ab - 8b^2$' },
  { chapterId: 'y9-1', topicId: 'y9-1h', topicCode: '1H', topicTitle: 'Advanced Expansion', year: 'Year 9', type: 'multiple_choice', difficulty: 'hard', isManual: true, question: 'Expand: $(\\frac{x}{4} + 2)(\\frac{x}{4} - 2)$', options: ['$x^2/16 - 4$', '$x^2/8 - 4$', '$x^2/16 + 4$', '$x/16 - 4$'], answer: '0', solution: 'Identity: $(\\frac{x}{4})^2 - 2^2 = \\frac{x^2}{16} - 4$' },
  
  // SECTION 1-4 AGAIN (from previous images)
  { chapterId: 'y9-1', topicId: 'y9-1a', topicCode: '1A', topicTitle: 'Evaluating Expressions', year: 'Year 9', type: 'short_answer', difficulty: 'easy', question: 'Evaluate $7x - 4$ when $x = 5$.', answer: '31', solution: '$7(5) - 4 = 35 - 4 = 31$' },
  { chapterId: 'y9-1', topicId: 'y9-1b', topicCode: '1B', topicTitle: 'Simplifying Expressions', year: 'Year 9', type: 'short_answer', difficulty: 'medium', question: 'Simplify: $3ab + 2ba - a$', answer: '5ab - a', solution: '$3ab$ and $2ba$ are like terms. $3ab + 2ab = 5ab$. Result: $5ab - a$' },
  
  // MORE TO ENSURE A LARGE POOL
  { chapterId: 'y9-1', topicId: 'y9-1e', topicCode: '1E', topicTitle: 'Binomial Expansion', year: 'Year 9', type: 'short_answer', difficulty: 'medium', question: 'Expand: $(y + 6)(y - 5)$', answer: 'y^2 + y - 30', solution: '$y^2 - 5y + 6y - 30 = y^2 + y - 30$' },
  { chapterId: 'y9-1', topicId: 'y9-1f', topicCode: '1F', topicTitle: 'Perfect Squares', year: 'Year 9', type: 'short_answer', difficulty: 'medium', question: 'Expand: $(2n - 1)^2$', answer: '4n^2 - 4n + 1', solution: '$(2n)^2 - 2(2n)(1) + 1^2 = 4n^2 - 4n + 1$' },
  { chapterId: 'y9-1', topicId: 'y9-1g', topicCode: '1G', topicTitle: 'Difference of Two Squares', year: 'Year 9', type: 'short_answer', difficulty: 'hard', question: 'Expand: $(12x - y)(12x + y)$', answer: '144x^2 - y^2', solution: '$(12x)^2 - y^2 = 144x^2 - y^2$' }
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
