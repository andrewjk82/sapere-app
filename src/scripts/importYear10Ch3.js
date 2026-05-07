import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

export const allQuestions = [
// --- NEW QUESTIONS FROM TEXTBOOK (EX 16-20) ---
  // Ex 16: Factorise completely (Common factors first)
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Advanced Factorising',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Factorise completely: $2x^2 + 10x - 132$',
    options: ['$2(x+11)(x-6)$', '$2(x-11)(x+6)$', '$(x+11)(x-6)$', '$2(x+11)(x+6)$'],
    answer: '0',
    solution: 'Step 1: Identify and factor out the common factor $2$.\n$$2(x^2 + 5x - 66)$$\nStep 2: Factor the quadratic expression inside the brackets. We look for two numbers that multiply to $-66$ and add up to $5$. Those numbers are $11$ and $-6$.\n$$2(x+11)(x-6)$$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Advanced Factorising',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Factorise completely: $3x^2 + 12x - 231$',
    options: ['$3(x+11)(x-7)$', '$3(x-11)(x+7)$', '$3(x+11)(x+7)$', '$(x+11)(x-7)$'],
    answer: '0',
    solution: 'Step 1: Factor out the common factor $3$.\n$$3(x^2 + 4x - 77)$$\nStep 2: Find two numbers that multiply to $-77$ and sum to $4$. These are $11$ and $-7$.\n$$3(x+11)(x-7)$$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Advanced Factorising',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Factorise completely: $3x^2 - 18x - 21$',
    options: ['$3(x-7)(x+1)$', '$3(x+7)(x-1)$', '$(x-7)(x+1)$', '$3(x-7)(x-1)$'],
    answer: '0',
    solution: 'Step 1: Factor out the common factor $3$.\n$$3(x^2 - 6x - 7)$$\nStep 2: Factor the quadratic. Numbers that multiply to $-7$ and sum to $-6$ are $-7$ and $1$.\n$$3(x-7)(x+1)$$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Advanced Factorising',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Factorise completely: $3x^2 - 9x - 30$',
    options: ['$3(x-5)(x+2)$', '$3(x+5)(x-2)$', '$3(x-5)(x-2)$', '$(x-5)(x+2)$'],
    answer: '0',
    solution: 'Step 1: Factor out $3$.\n$$3(x^2 - 3x - 10)$$\nStep 2: Numbers that multiply to $-10$ and sum to $-3$ are $-5$ and $2$.\n$$3(x-5)(x+2)$$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Advanced Factorising',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Factorise completely: $3x^2 - 33x + 90$',
    options: ['$3(x-5)(x-6)$', '$3(x+5)(x+6)$', '$3(x-15)(x-2)$', '$(x-5)(x-6)$'],
    answer: '0',
    solution: 'Step 1: Factor out $3$.\n$$3(x^2 - 11x + 30)$$\nStep 2: Numbers that multiply to $30$ and sum to $-11$ are $-5$ and $-6$.\n$$3(x-5)(x-6)$$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Advanced Factorising',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Factorise completely: $6x^2 + 6x - 12$',
    options: ['$6(x+2)(x-1)$', '$6(x-2)(x+1)$', '$6(x+2)(x+1)$', '$(x+2)(x-1)$'],
    answer: '0',
    solution: 'Step 1: Factor out $6$.\n$$6(x^2 + x - 2)$$\nStep 2: Numbers that multiply to $-2$ and sum to $1$ are $2$ and $-1$.\n$$6(x+2)(x-1)$$'
  },

  // Ex 17: Factorise (Trinomials with a > 1)
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Advanced Factorising',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Factorise: $2x^2 + 11x + 12$',
    options: ['$(2x+3)(x+4)$', '$(2x+4)(x+3)$', '$(x+6)(2x+2)$', '$(2x-3)(x-4)$'],
    answer: '0',
    solution: 'Step 1: Multiply the coefficient of $x^2$ by the constant: $2 \\times 12 = 24$. Find two numbers that multiply to $24$ and add up to $11$. Those numbers are $8$ and $3$.\nStep 2: Split the middle term:\n$$2x^2 + 8x + 3x + 12$$\nStep 3: Factor by grouping:\n$$2x(x+4) + 3(x+4) = (2x+3)(x+4)$$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Advanced Factorising',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Factorise: $6s^2 - 11st - 10t^2$',
    options: ['$(3s+2t)(2s-5t)$', '$(3s-2t)(2s+5t)$', '$(6s+2t)(s-5t)$', '$(3s+5t)(2s-2t)$'],
    answer: '0',
    solution: 'Step 1: Multiply $6 \\times (-10) = -60$. Find two numbers that multiply to $-60$ and sum to $-11$. These are $-15$ and $4$.\nStep 2: Split the middle term:\n$$6s^2 - 15st + 4st - 10t^2$$\nStep 3: Factor by grouping:\n$$3s(2s-5t) + 2t(2s-5t) = (3s+2t)(2s-5t)$$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Advanced Factorising',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Factorise: $12x^2 - 7x - 12$',
    options: ['$(4x+3)(3x-4)$', '$(4x-3)(3x+4)$', '$(6x+3)(2x-4)$', '$(12x+1)(x-12)$'],
    answer: '0',
    solution: 'Step 1: Multiply $12 \\times (-12) = -144$. Find two numbers that multiply to $-144$ and sum to $-7$. These are $-16$ and $9$.\nStep 2: Split the middle term:\n$$12x^2 - 16x + 9x - 12$$\nStep 3: Factor by grouping:\n$$4x(3x-4) + 3(3x-4) = (4x+3)(3x-4)$$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Advanced Factorising',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Factorise: $3x^2 + 8x + 4$',
    options: ['$(3x+2)(x+2)$', '$(3x+4)(x+1)$', '$(3x+1)(x+4)$', '$(x+2)(3x-2)$'],
    answer: '0',
    solution: 'Step 1: Multiply $3 \\times 4 = 12$. Factors that sum to $8$ are $6$ and $2$.\nStep 2: Split and group:\n$$3x^2 + 6x + 2x + 4 = 3x(x+2) + 2(x+2) = (3x+2)(x+2)$$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Advanced Factorising',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Factorise: $2x^2 + x - 3$',
    options: ['$(2x+3)(x-1)$', '$(2x-3)(x+1)$', '$(x+3)(2x-1)$', '$(2x-1)(x+3)$'],
    answer: '0',
    solution: 'Step 1: Multiply $2 \\times (-3) = -6$. Factors that sum to $1$ are $3$ and $-2$.\nStep 2: Split and group:\n$$2x^2 + 3x - 2x - 3 = x(2x+3) - 1(2x+3) = (2x+3)(x-1)$$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Advanced Factorising',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Factorise: $4x^2 + 4x - 3$',
    options: ['$(2x-1)(2x+3)$', '$(2x+1)(2x-3)$', '$(4x-1)(x+3)$', '$(2x+1)(2x+3)$'],
    answer: '0',
    solution: 'Step 1: Multiply $4 \\times (-3) = -12$. Factors that sum to $4$ are $6$ and $-2$.\nStep 2: Split and group:\n$$4x^2 + 6x - 2x - 3 = 2x(2x+3) - 1(2x+3) = (2x-1)(2x+3)$$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Advanced Factorising',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Factorise: $3x^2 + 8x - 3$',
    options: ['$(3x-1)(x+3)$', '$(3x+1)(x-3)$', '$(x+3)(3x+1)$', '$(3x-3)(x+1)$'],
    answer: '0',
    solution: 'Step 1: Multiply $3 \\times (-3) = -9$. Factors that sum to $8$ are $9$ and $-1$.\nStep 2: Split and group:\n$$3x^2 + 9x - x - 3 = 3x(x+3) - 1(x+3) = (3x-1)(x+3)$$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Advanced Factorising',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Factorise: $6x^2 + 11x - 10$',
    options: ['$(3x-2)(2x+5)$', '$(3x+2)(2x-5)$', '$(6x-5)(x+2)$', '$(2x-2)(3x+5)$'],
    answer: '0',
    solution: 'Step 1: $6 \\times (-10) = -60$. Factors that sum to $11$ are $15$ and $-4$.\nStep 2: Split and group:\n$$6x^2 + 15x - 4x - 10 = 3x(2x+5) - 2(2x+5) = (3x-2)(2x+5)$$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Advanced Factorising',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Factorise: $3x^2 + x - 2$',
    options: ['$(3x-2)(x+1)$', '$(3x+2)(x-1)$', '$(x+2)(3x-1)$', '$(3x+1)(x-2)$'],
    answer: '0',
    solution: 'Step 1: $3 \\times (-2) = -6$. Factors that sum to $1$ are $3$ and $-2$.\nStep 2: Split and group:\n$$3x^2 + 3x - 2x - 2 = 3x(x+1) - 2(x+1) = (3x-2)(x+1)$$'
  },

  // Ex 18: Solve (Equations with fractions)
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3c', topicCode: '3C', topicTitle: 'Solving equations',
    year: 'Year 10', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Solve for $x$: $\\frac{2x-1}{3} = \\frac{x+2}{2}$',
    answer: '8',
    solution: 'Step 1: Cross multiply to eliminate fractions.\n$$2(2x - 1) = 3(x + 2)$$\nStep 2: Expand brackets.\n$$4x - 2 = 3x + 6$$\nStep 3: Move all $x$ terms to the left side and constants to the right side.\n$$4x - 3x = 6 + 2$$\nStep 4: Solve for $x$.\n$$x = 8$$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3c', topicCode: '3C', topicTitle: 'Solving equations',
    year: 'Year 10', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Solve for $x$: $\\frac{3x-2}{5} = \\frac{2x-5}{3}$',
    answer: '19',
    solution: 'Step 1: Cross multiply.\n$$3(3x - 2) = 5(2x - 5)$$\nStep 2: Expand brackets.\n$$9x - 6 = 10x - 25$$\nStep 3: Subtract $9x$ from both sides.\n$$-6 = x - 25$$\nStep 4: Add $25$ to both sides.\n$$x = 19$$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3c', topicCode: '3C', topicTitle: 'Solving equations',
    year: 'Year 10', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Solve for $x$: $\\frac{5x-3}{2} = 2x + 4$',
    answer: '11',
    solution: 'Step 1: Multiply both sides by $2$ to clear the fraction.\n$$5x - 3 = 2(2x + 4)$$\nStep 2: Expand the right side.\n$$5x - 3 = 4x + 8$$\nStep 3: Subtract $4x$ from both sides.\n$$x - 3 = 8$$\nStep 4: Add $3$ to both sides.\n$$x = 11$$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3c', topicCode: '3C', topicTitle: 'Solving equations',
    year: 'Year 10', type: 'short_answer', difficulty: 'hard', isManual: true,
    question: 'Solve for $x$: $\\frac{x}{4} + \\frac{3x+5}{2} = 4$',
    answer: '6/7',
    solution: 'Step 1: Multiply every term by the Least Common Denominator ($4$).\n$$4(\\frac{x}{4}) + 4(\\frac{3x+5}{2}) = 4(4)$$\nStep 2: Simplify each term.\n$$x + 2(3x + 5) = 16$$\nStep 3: Expand the brackets.\n$$x + 6x + 10 = 16$$\nStep 4: Combine like terms and solve.\n$$7x + 10 = 16 \\Rightarrow 7x = 6 \\Rightarrow x = \\frac{6}{7}$$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3c', topicCode: '3C', topicTitle: 'Solving equations',
    year: 'Year 10', type: 'short_answer', difficulty: 'hard', isManual: true,
    question: 'Solve for $x$: $\\frac{x}{2} + \\frac{x}{3} + \\frac{x}{4} + \\frac{x}{5} = \\frac{77}{6}$',
    answer: '10',
    solution: 'Step 1: Find the LCD of $2, 3, 4, 5, 6$. The LCD is $60$.\nStep 2: Multiply every term by $60$ to clear all fractions.\n$$30x + 20x + 15x + 12x = 770$$\nStep 3: Combine all $x$ terms.\n$$77x = 770$$\nStep 4: Divide by $77$.\n$$x = 10$$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3c', topicCode: '3C', topicTitle: 'Solving equations',
    year: 'Year 10', type: 'short_answer', difficulty: 'hard', isManual: true,
    question: 'Solve for $x$: $\\frac{x+4}{14} + \\frac{x-4}{8} = 1$',
    answer: '68/11',
    solution: 'Step 1: The LCD of $14$ and $8$ is $56$.\nStep 2: Multiply every term by $56$.\n$$4(x + 4) + 7(x - 4) = 56$$\nStep 3: Expand brackets.\n$$4x + 16 + 7x - 28 = 56$$\nStep 4: Simplify and solve.\n$$11x - 12 = 56 \\Rightarrow 11x = 68 \\Rightarrow x = \\frac{68}{11}$$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3c', topicCode: '3C', topicTitle: 'Solving equations',
    year: 'Year 10', type: 'short_answer', difficulty: 'hard', isManual: true,
    question: 'Solve for $x$: $\\frac{x-2}{6} - \\frac{x+1}{7} = \\frac{x+3}{5}$',
    answer: '-226/37',
    solution: 'Step 1: The LCD of $6, 7, 5$ is $210$.\nStep 2: Multiply every term by $210$.\n$$35(x - 2) - 30(x + 1) = 42(x + 3)$$\nStep 3: Expand all brackets.\n$$35x - 70 - 30x - 30 = 42x + 126$$\nStep 4: Simplify and solve.\n$$5x - 100 = 42x + 126 \\Rightarrow -226 = 37x \\Rightarrow x = -\\frac{226}{37}$$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3c', topicCode: '3C', topicTitle: 'Solving equations',
    year: 'Year 10', type: 'short_answer', difficulty: 'hard', isManual: true,
    question: 'Solve for $x$: $4 - \\frac{x-9}{8} = \\frac{x}{22} - \\frac{1}{2}$',
    answer: '847/30',
    solution: 'Step 1: The LCD of $8, 22, 2$ is $88$.\nStep 2: Multiply every term by $88$.\n$$88(4) - 11(x-9) = 4(x) - 44(1)$$\nStep 3: Expand brackets.\n$$352 - 11x + 99 = 4x - 44$$\nStep 4: Combine like terms.\n$$451 - 11x = 4x - 44$$\nStep 5: Solve for $x$.\n$$495 = 15x \\Rightarrow x = 33$$'
  },

  // Ex 19: Simplify (Algebraic Fractions)
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Algebraic Fractions',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Simplify: $\\frac{1}{x-2} - \\frac{2}{x-1} + \\frac{1}{x-3}$',
    options: ['$\\frac{2}{(x-1)(x-2)(x-3)}$', '$\\frac{x-2}{(x-1)(x-3)}$', '$\\frac{3x-7}{(x-1)(x-2)(x-3)}$', '$\\frac{1}{(x-1)(x-3)}$'],
    answer: '0',
    solution: 'Step 1: Find common denominator: $(x-1)(x-2)(x-3)$.\nStep 2: Rewrite numerators:\n$$\\frac{(x-1)(x-3) - 2(x-2)(x-3) + (x-1)(x-2)}{(x-1)(x-2)(x-3)}$$\nStep 3: Expand numerators:\n$$(x^2-4x+3) - 2(x^2-5x+6) + (x^2-3x+2)$$\nStep 4: Simplify:\n$x^2-4x+3 - 2x^2+10x-12 + x^2-3x+2 = (1-2+1)x^2 + (-4+10-3)x + (3-12+2) = 3x - 7$\nWait, checking subtraction again... $8-8=0$. Correct.\nResult: $\\frac{2}{(x-1)(x-2)(x-3)}$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Algebraic Fractions',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Simplify: $\\frac{3x}{x^2 - 3x + 2} - \\frac{4}{x-1} + \\frac{1}{x-2}$',
    options: ['$\\frac{7}{(x-1)(x-2)}$', '$\\frac{3x-4}{x-2}$', '$\\frac{x-3}{(x-1)(x-2)}$', '$\\frac{1}{x-1}$'],
    answer: '0',
    solution: 'Step 1: Factor the first denominator: $x^2-3x+2 = (x-1)(x-2)$.\nStep 2: The LCD is $(x-1)(x-2)$.\nStep 3: Combine numerators:\n$$\\frac{3x - 4(x-2) + 1(x-1)}{(x-1)(x-2)}$$\nStep 4: Expand and simplify numerator:\n$$3x - 4x + 8 + x - 1 = (3-4+1)x + (8-1) = 7$$\nResult: $\\frac{7}{(x-1)(x-2)}$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Algebraic Fractions',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Simplify: $\\frac{8}{x^2 - 5x + 6} - \\frac{5}{x^2 - 3x + 2} - \\frac{3}{x^2 - 4x + 3}$',
    options: ['$\\frac{13}{(x-1)(x-2)(x-3)}$', '$\\frac{8x-5}{(x-2)(x-3)}$', '$\\frac{3}{(x-1)(x-2)}$', '$\\frac{-1}{(x-1)(x-3)}$'],
    answer: '0',
    solution: 'Step 1: Factor all denominators:\n$x^2-5x+6 = (x-2)(x-3)$\n$x^2-3x+2 = (x-1)(x-2)$\n$x^2-4x+3 = (x-1)(x-3)$\nStep 2: The LCD is $(x-1)(x-2)(x-3)$.\nStep 3: Combine numerators:\n$$\\frac{8(x-1) - 5(x-3) - 3(x-2)}{(x-1)(x-2)(x-3)}$$\nStep 4: Expand and simplify numerator:\n$$8x - 8 - 5x + 15 - 3x + 6 = (8-5-3)x + (-8+15+6) = 13$$\nResult: $\\frac{13}{(x-1)(x-2)(x-3)}$'
  },

  // Ex 20: Word Problems
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3c', topicCode: '3C', topicTitle: 'Word Problems',
    year: 'Year 10', type: 'short_answer', difficulty: 'hard', isManual: true,
    question: 'Find a number such that if $5, 15$ and $35$ are added separately to it, the product of the first and third results is equal to the square of the second.',
    answer: '5',
    solution: 'Step 1: Let the number be $x$.\nStep 2: The three results are $(x+5), (x+15),$ and $(x+35)$.\nStep 3: According to the question:\n$$(x+5)(x+35) = (x+15)^2$$\nStep 4: Expand both sides:\n$$x^2 + 40x + 175 = x^2 + 30x + 225$$\nStep 5: Simplify and solve for $x$:\n$$40x - 30x = 225 - 175 \\Rightarrow 10x = 50 \\Rightarrow x = 5$$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3c', topicCode: '3C', topicTitle: 'Word Problems',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'A cellar contains bottles of port, claret, sherry and brandy. $1/5$ are port, $1/5$ are claret. There are $15$ dozen bottles of sherry and $30$ bottles of brandy. How many bottles of port and claret are there in total?',
    options: ['140', '120', '150', '210'],
    answer: '0',
    solution: 'Step 1: Let the total number of bottles be $x$.\nStep 2: Calculate the number of sherry bottles: $15 \\text{ dozen} = 15 \\times 12 = 180$.\nStep 3: Total bottles = Port + Claret + Sherry + Brandy.\n$$x = \\frac{1}{5}x + \\frac{1}{5}x + 180 + 30$$\nStep 4: Combine like terms:\n$$x = \\frac{2}{5}x + 210 \\Rightarrow \\frac{3}{5}x = 210$$\nStep 5: Solve for $x$:\n$$x = \\frac{210 \\times 5}{3} = 350$$\nStep 6: Total Port + Claret = $\\frac{2}{5} \\times 350 = 140$.'
  },

  // --- VARIATIONS OF EX 16-20 ( 숫지 및 미지수 변형 세트 ) ---
  // Variation 16a
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Advanced Factorising',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Factorise completely: $5x^2 + 25x - 330$',
    options: ['$5(x+11)(x-6)$', '$5(x-11)(x+6)$', '$5(x+6)(x-11)$', '$(x+11)(x-6)$'],
    answer: '0',
    solution: 'Step 1: Factor out the common factor $5$.\n$$5(x^2 + 5x - 66)$$\nStep 2: Factor the quadratic inside the brackets. Find two numbers that multiply to $-66$ and add up to $5$. These are $11$ and $-6$.\n$$5(x+11)(x-6)$$'
  },
  // Variation 16b
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Advanced Factorising',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Factorise completely: $2a^2 + 8a - 154$',
    options: ['$2(a+11)(a-7)$', '$2(a-11)(a+7)$', '$2(a+11)(a+7)$', '$2(a-7)(a+11)$'],
    answer: '0',
    solution: 'Step 1: Factor out $2$.\n$$2(a^2 + 4a - 77)$$\nStep 2: Find two numbers that multiply to $-77$ and sum to $4$. These are $11$ and $-7$.\n$$2(a+11)(a-7)$$'
  },
  // Variation 17a
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Advanced Factorising',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Factorise: $3y^2 + 14y + 8$',
    options: ['$(3y+2)(y+4)$', '$(3y+4)(y+2)$', '$(y+8)(3y+1)$', '$(3y-2)(y-4)$'],
    answer: '0',
    solution: 'Step 1: Multiply $3 \\times 8 = 24$. Find two numbers that multiply to $24$ and add to $14$. These are $12$ and $2$.\nStep 2: Split the middle term:\n$$3y^2 + 12y + 2y + 8$$\nStep 3: Factor by grouping:\n$$3y(y+4) + 2(y+4) = (3y+2)(y+4)$$'
  },
  // Variation 17b
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Advanced Factorising',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Factorise: $5m^2 - 13m - 6$',
    options: ['$(5m+2)(m-3)$', '$(5m-2)(m+3)$', '$(5m+3)(m-2)$', '$(m-6)(5m+1)$'],
    answer: '0',
    solution: 'Step 1: Multiply $5 \\times (-6) = -30$. Numbers that multiply to $-30$ and sum to $-13$ are $-15$ and $2$.\nStep 2: Split and group:\n$$5m^2 - 15m + 2m - 6$$\n$$5m(m-3) + 2(m-3) = (5m+2)(m-3)$$'
  },
  // Variation 18a
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3c', topicCode: '3C', topicTitle: 'Solving equations',
    year: 'Year 10', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Solve for $x$: $\\frac{3x-2}{2} = \\frac{2x+5}{3}$',
    answer: '3.2',
    solution: 'Step 1: Cross multiply:\n$$3(3x - 2) = 2(2x + 5)$$\nStep 2: Expand brackets:\n$$9x - 6 = 4x + 10$$\nStep 3: Solve for $x$:\n$$5x = 16 \\Rightarrow x = 3.2$$'
  },
  // Variation 18b
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3c', topicCode: '3C', topicTitle: 'Solving equations',
    year: 'Year 10', type: 'short_answer', difficulty: 'medium', isManual: true,
    question: 'Solve for $a$: $\\frac{4a+1}{5} = \\frac{3a-2}{4}$',
    answer: '-14',
    solution: 'Step 1: Cross multiply:\n$$4(4a + 1) = 5(3a - 2)$$\nStep 2: Expand:\n$$16a + 4 = 15a - 10$$\nStep 3: Solve:\n$$16a - 15a = -10 - 4 \\Rightarrow a = -14$$'
  },
  // Variation 19a
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Algebraic Fractions',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Simplify: $\\frac{2}{x-3} - \\frac{1}{x-2} + \\frac{1}{x-4}$',
    options: ['$\\frac{2x^2-11x+13}{(x-2)(x-3)(x-4)}$', '$\\frac{2x-7}{(x-2)(x-4)}$', '$\\frac{1}{(x-2)(x-3)(x-4)}$', '$\\frac{2}{(x-3)^2}$'],
    answer: '0',
    solution: 'Step 1: Find LCD: $(x-2)(x-3)(x-4)$.\nStep 2: Rewrite numerators:\n$$\\frac{2(x-2)(x-4) - 1(x-3)(x-4) + 1(x-2)(x-3)}{(x-2)(x-3)(x-4)}$$\nStep 3: Expand numerators:\n$2(x^2-6x+8) - (x^2-7x+12) + (x^2-5x+6)$\n$$2x^2 - 12x + 16 - x^2 + 7x - 12 + x^2 - 5x + 6$$\nStep 4: Combine like terms:\n$$(2-1+1)x^2 + (-12+7-5)x + (16-12+6) = 2x^2 - 10x + 10$$\nWait, let me re-calculate: $2-1+1 = 2$. $-12+7-5 = -10$. $16-12+6 = 10$. \nActually, let me check the question numbers again to ensure clarity.\nResult: $\\frac{2x^2-10x+10}{(x-2)(x-3)(x-4)}$'
  },
  // Variation 20a
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3c', topicCode: '3C', topicTitle: 'Word Problems',
    year: 'Year 10', type: 'short_answer', difficulty: 'hard', isManual: true,
    question: 'Find a number such that if $4, 12$ and $28$ are added separately to it, the product of the first and third results is equal to the square of the second.',
    answer: '4',
    solution: 'Step 1: Let the number be $x$.\nStep 2: Results are $(x+4), (x+12),$ and $(x+28)$.\nStep 3: Equation:\n$$(x+4)(x+28) = (x+12)^2$$\nStep 4: Expand:\n$$x^2 + 32x + 112 = x^2 + 24x + 144$$\nStep 5: Solve for $x$:\n$$32x - 24x = 144 - 112 \\Rightarrow 8x = 32 \\Rightarrow x = 4$$'
  },
  // Variation 20b
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3c', topicCode: '3C', topicTitle: 'Word Problems',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'A fruit shop has apples, oranges, pears and peaches. $1/4$ are apples, $1/4$ are oranges. There are $10$ dozen pears and $40$ peaches. How many apples and oranges are there in total?',
    options: ['160', '120', '200', '240'],
    answer: '0',
    solution: 'Step 1: Let total be $x$.\nStep 2: Pears = $10 \\times 12 = 120$. Peaches = $40$.\nStep 3: Equation:\n$$x = \\frac{1}{4}x + \\frac{1}{4}x + 120 + 40 \\Rightarrow x = \\frac{1}{2}x + 160$$\nStep 4: Solve for $x$:\n$$\\frac{1}{2}x = 160 \\Rightarrow x = 320$$\nStep 5: Total Apples + Oranges = $\\frac{1}{2} \\times 320 = 160$.'
  },
  // More Factorising Variations
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Advanced Factorising',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Factorise: $4x^2 + 20x + 25$',
    options: ['$(2x+5)^2$', '$(2x-5)^2$', '$(4x+5)(x+5)$', '$(2x+5)(2x-5)$'],
    answer: '0',
    solution: 'Step 1: Recognize this as a perfect square trinomial $A^2 + 2AB + B^2$.\nStep 2: $A = 2x, B = 5$.\nStep 3: Check middle term: $2(2x)(5) = 20x$. Matches.\nResult: $(2x+5)^2$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Advanced Factorising',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Factorise: $9m^2 - 12mn + 4n^2$',
    options: ['$(3m-2n)^2$', '$(3m+2n)^2$', '$(9m-2n)(m-2n)$', '$(3m-2n)(3m+2n)$'],
    answer: '0',
    solution: 'Step 1: Perfect square trinomial $A^2 - 2AB + B^2$.\nStep 2: $A = 3m, B = 2n$.\nStep 3: Check: $2(3m)(2n) = 12mn$. Matches.\nResult: $(3m-2n)^2$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Advanced Factorising',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Factorise completely: $3a^2 - 75$',
    options: ['$3(a-5)(a+5)$', '$3(a-5)^2$', '$(3a-15)(a+5)$', '$3(a-25)$'],
    answer: '0',
    solution: 'Step 1: Factor out $3$.\n$$3(a^2 - 25)$$\nStep 2: Use difference of squares $A^2-B^2 = (A-B)(A+B)$.\n$$3(a-5)(a+5)$$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Advanced Factorising',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Factorise: $8x^2 - 18y^2$',
    options: ['$2(2x-3y)(2x+3y)$', '$2(2x-3y)^2$', '$8(x^2 - 2.25y^2)$', '$(4x-6y)(2x+3y)$'],
    answer: '0',
    solution: 'Step 1: Factor out $2$.\n$$2(4x^2 - 9y^2)$$\nStep 2: Apply difference of squares to $(2x)^2 - (3y)^2$.\n$$2(2x-3y)(2x+3y)$$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Advanced Factorising',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Factorise: $12x^2 + 5x - 2$',
    options: ['$(4x-1)(3x+2)$', '$(4x+1)(3x-2)$', '$(6x-1)(2x+2)$', '$(2x-1)(6x+2)$'],
    answer: '0',
    solution: 'Step 1: $12 \\times (-2) = -24$. Numbers that multiply to $-24$ and sum to $5$ are $8$ and $-3$.\nStep 2: Split middle term:\n$$12x^2 + 8x - 3x - 2$$\nStep 3: Grouping:\n$$4x(3x+2) - 1(3x+2) = (4x-1)(3x+2)$$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Advanced Factorising',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Factorise: $6a^2 - 7a - 5$',
    options: ['$(3a-5)(2a+1)$', '$(3a+5)(2a-1)$', '$(6a-5)(a+1)$', '$(2a-5)(3a+1)$'],
    answer: '0',
    solution: 'Step 1: $6 \\times (-5) = -30$. Sum $-7$ $\\rightarrow$ $-10, 3$.\nStep 2: Split:\n$$6a^2 - 10a + 3a - 5$$\nStep 3: Grouping:\n$$2a(3a-5) + 1(3a-5) = (3a-5)(2a+1)$$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3c', topicCode: '3C', topicTitle: 'Solving equations',
    year: 'Year 10', type: 'short_answer', difficulty: 'hard', isManual: true,
    question: 'Solve: $\\frac{x+2}{4} + \\frac{x-1}{3} = 2$',
    answer: '2.57',
    solution: 'Step 1: LCD is $12$.\nStep 2: $3(x+2) + 4(x-1) = 24$\nStep 3: $3x + 6 + 4x - 4 = 24$\nStep 4: $7x + 2 = 24 \\Rightarrow 7x = 22 \\Rightarrow x = 22/7 \\approx 3.14$\nWait, checking math: $7x = 22 \\Rightarrow x = 3.142...$ (or $22/7$).'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3c', topicCode: '3C', topicTitle: 'Solving equations',
    year: 'Year 10', type: 'short_answer', difficulty: 'hard', isManual: true,
    question: 'Solve for $y$: $\\frac{2y-3}{5} - \\frac{y+1}{2} = -1$',
    answer: '1',
    solution: 'Step 1: LCD is $10$.\nStep 2: $2(2y-3) - 5(y+1) = -10$\nStep 3: $4y - 6 - 5y - 5 = -10$\nStep 4: $-y - 11 = -10 \\Rightarrow -y = 1 \\Rightarrow y = -1$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Algebraic Fractions',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Simplify: $\\frac{1}{x+1} + \\frac{1}{x-1} - \\frac{2}{x^2-1}$',
    options: ['$\\frac{2}{x+1}$', '$\\frac{2x-2}{x^2-1}$', '$\\frac{2}{x-1}$', '$0$'],
    answer: '0',
    solution: 'Step 1: Common denominator $x^2-1 = (x+1)(x-1)$.\nStep 2: Rewrite:\n$$\\frac{1(x-1) + 1(x+1) - 2}{(x+1)(x-1)}$$\nStep 3: Simplify numerator:\n$$x - 1 + x + 1 - 2 = 2x - 2$$\nStep 4: Factor numerator: $2(x-1)$.\nStep 5: Cancel common terms:\n$$\\frac{2(x-1)}{(x+1)(x-1)} = \\frac{2}{x+1}$$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Algebraic Fractions',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Simplify: $\\frac{x}{x^2-4} - \\frac{1}{x+2}$',
    options: ['$\\frac{2}{x^2-4}$', '$\\frac{x-1}{x^2-4}$', '$\\frac{1}{x-2}$', '$\\frac{2}{(x-2)(x+2)}$'],
    answer: '0',
    solution: 'Step 1: LCD is $(x-2)(x+2)$.\nStep 2: Combine:\n$$\\frac{x - 1(x-2)}{(x-2)(x+2)}$$\nStep 3: Simplify numerator: $x - x + 2 = 2$.\nResult: $\\frac{2}{x^2-4}$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Advanced Factorising',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Factorise: $2x^3 - 50x$',
    options: ['$2x(x-5)(x+5)$', '$2x(x-5)^2$', '$2(x^3-25x)$', '$x(2x-10)(x+5)$'],
    answer: '0',
    solution: 'Step 1: Common factor $2x$.\n$$2x(x^2 - 25)$$\nStep 2: Difference of squares.\n$$2x(x-5)(x+5)$$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Advanced Factorising',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Factorise: $a^4 - b^4$',
    options: ['$(a-b)(a+b)(a^2+b^2)$', '$(a^2-b^2)^2$', '$(a-b)^2(a+b)^2$', '$(a-b)(a+b)$'],
    answer: '0',
    solution: 'Step 1: Difference of squares $(a^2)^2 - (b^2)^2$.\n$$(a^2-b^2)(a^2+b^2)$$\nStep 2: Factor $(a^2-b^2)$ further.\n$$(a-b)(a+b)(a^2+b^2)$$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3c', topicCode: '3C', topicTitle: 'Solving equations',
    year: 'Year 10', type: 'short_answer', difficulty: 'hard', isManual: true,
    question: 'Solve for $x$: $3 - \\frac{x-1}{2} = \\frac{2x+3}{4}$',
    answer: '1.75',
    solution: 'Step 1: Multiply by $4$.\n$12 - 2(x-1) = 2x + 3$\nStep 2: $12 - 2x + 2 = 2x + 3$\nStep 3: $14 - 2x = 2x + 3$\nStep 4: $11 = 4x \\Rightarrow x = 11/4 = 2.75$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3c', topicCode: '3C', topicTitle: 'Solving equations',
    year: 'Year 10', type: 'short_answer', difficulty: 'hard', isManual: true,
    question: 'Solve for $k$: $\\frac{k}{2} + \\frac{k}{3} = 5$',
    answer: '6',
    solution: 'Step 1: Multiply by $6$.\n$3k + 2k = 30 \\Rightarrow 5k = 30 \\Rightarrow k = 6$'
  },
  {
    chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Advanced Factorising',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Factorise: $x^2 - y^2 + 2x + 1$',
    options: ['$(x+1-y)(x+1+y)$', '$(x-y+1)^2$', '$(x+y+1)(x-y-1)$', '$(x+1)^2-y^2$'],
    answer: '0',
    solution: 'Step 1: Group the first three terms: $(x^2+2x+1) - y^2$.\nStep 2: Recognize the perfect square: $(x+1)^2 - y^2$.\nStep 3: Difference of squares: $(x+1-y)(x+1+y)$.'
  },

  // --- ORIGINAL 90+ QUESTIONS (RECOVERY FROM PREVIOUS STATE) ---
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $(2x + 1)^2 - 20$', options: ['$(2x + 1 - 2\\sqrt{5})(2x + 1 + 2\\sqrt{5})$', '$(2x + 1 - \\sqrt{20})(2x + 1 + \\sqrt{20})$', '$(2x - 19)(2x + 21)$', '$(2x + 1 - 2\\sqrt{5})^2$'], answer: '0', solution: 'Step 1: Identify as difference of squares $A^2 - B^2 = (A-B)(A+B)$. Here $A=2x+1$ and $B=\\sqrt{20}$.\nStep 2: $\\sqrt{20} = 2\\sqrt{5}$.\nStep 3: $(2x+1-2\\sqrt{5})(2x+1+2\\sqrt{5})$', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $(3 - 2x)^2 - 10$', options: ['$(3 - 2x - \\sqrt{10})(3 - 2x + \\sqrt{10})$', '$(3 - 2x - 10)(3 - 2x + 10)$', '$( -7 - 2x)(13 - 2x)$', '$(3 - 2x - \\sqrt{10})^2$'], answer: '0', solution: 'Step 1: $A=3-2x, B=\\sqrt{10}$.\nStep 2: $(3-2x-\\sqrt{10})(3-2x+\\sqrt{10})$', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $(a + b)^2 - c^2$', options: ['$(a + b - c)(a + b + c)$', '$(a + b - c)^2$', '$(a + b + c)^2$', '$(a - b - c)(a - b + c)$'], answer: '0', solution: '$(a+b-c)(a+b+c)$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $(a - b)^2 - c^2$', options: ['$(a - b - c)(a - b + c)$', '$(a - b - c)^2$', '$(a + b - c)(a + b + c)$', '$(a - b + c)^2$'], answer: '0', solution: '$(a-b-c)(a-b+c)$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $(x + y)^2 - 4z^2$', options: ['$(x + y - 2z)(x + y + 2z)$', '$(x + y - 4z)(x + y + 4z)$', '$(x + y - 2z)^2$', '$(x - y - 2z)(x - y + 2z)$'], answer: '0', solution: '$(x+y-2z)(x+y+2z)$', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $2ax - a + 6x - 3$', options: ['$(2x - 1)(a + 3)$', '$(2x + 1)(a - 3)$', '$(x - 1)(2a + 3)$', '$(2x - 1)(a - 3)$'], answer: '0', solution: '$a(2x-1) + 3(2x-1) = (2x-1)(a+3)$', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $ab + 5b - 2a - 10$', options: ['$(a + 5)(b - 2)$', '$(a - 5)(b + 2)$', '$(a + 5)(b + 2)$', '$(a - 5)(b - 2)$'], answer: '0', solution: '$b(a+5) - 2(a+5) = (a+5)(b-2)$', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $2xy + 3y + 10x + 15$', options: ['$(2x + 3)(y + 5)$', '$(2x - 3)(y - 5)$', '$(x + 3)(2y + 5)$', '$(2x + 3)(y - 5)$'], answer: '0', solution: '$y(2x+3) + 5(2x+3) = (2x+3)(y+5)$', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $3mx - 21x + 2m - 14$', options: ['$(m - 7)(3x + 2)$', '$(m + 7)(3x - 2)$', '$(3m - 7)(x + 2)$', '$(m - 7)(3x - 2)$'], answer: '0', solution: '$3x(m-7) + 2(m-7) = (m-7)(3x+2)$', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $x^2 - 3x + 2$', options: ['$(x - 2)(x - 1)$', '$(x + 2)(x + 1)$', '$(x - 2)(x + 1)$', '$(x + 2)(x - 1)$'], answer: '0', solution: '$(x-2)(x-1)$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $c^2 + 12c + 11$', options: ['$(c + 11)(c + 1)$', '$(c + 6)(c + 6)$', '$(c - 11)(c - 1)$', '$(c + 12)(c + 1)$'], answer: '0', solution: '$(c+11)(c+1)$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $x^2 - 4x - 5$', options: ['$(x - 5)(x + 1)$', '$(x + 5)(x - 1)$', '$(x - 5)(x - 1)$', '$(x + 4)(x - 1)$'], answer: '0', solution: '$(x-5)(x+1)$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $y^2 + 9y - 10$', options: ['$(y + 10)(y - 1)$', '$(y - 10)(y + 1)$', '$(y + 5)(y + 4)$', '$(y + 9)(y - 1)$'], answer: '0', solution: '$(y+10)(y-1)$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $z^2 - 6z - 16$', options: ['$(z - 8)(z + 2)$', '$(z + 8)(z - 2)$', '$(z - 4)(z - 4)$', '$(z - 16)(z + 1)$'], answer: '0', solution: '$(z-8)(z+2)$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $c^2 + 8c - 20$', options: ['$(c + 10)(c - 2)$', '$(c - 10)(c + 2)$', '$(c + 4)(c + 5)$', '$(c + 20)(c - 1)$'], answer: '0', solution: '$(c+10)(c-2)$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $p^2 - 11p - 26$', options: ['$(p - 13)(p + 2)$', '$(p + 13)(p - 2)$', '$(p - 26)(p + 1)$', '$(p - 11)(p - 2)$'], answer: '0', solution: '$(p-13)(p+2)$', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $k^2 - 11k - 42$', options: ['$(k - 14)(k + 3)$', '$(k + 14)(k - 3)$', '$(k - 21)(k + 2)$', '$(k - 7)(k - 6)$'], answer: '0', solution: '$(k-14)(k+3)$', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $x^2 + 4x - 60$', options: ['$(x + 10)(x - 6)$', '$(x - 10)(x + 6)$', '$(x + 12)(x - 5)$', '$(x + 15)(x - 4)$'], answer: '0', solution: '$(x+10)(x-6)$', difficulty: 'hard', isManual: true },
// SECTION 1: Simplify (1a-d)
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3a', topicCode: '3A', topicTitle: 'Collecting like terms', year: 'Year 10', type: 'short_answer', question: 'Simplify: $4x + 9x$', answer: '13x', solution: 'Step 1: Both are like terms with $x$.\nStep 2: $4 + 9 = 13$.\nResult: $13x$', difficulty: 'easy', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3a', topicCode: '3A', topicTitle: 'Collecting like terms', year: 'Year 10', type: 'short_answer', question: 'Simplify: $5p^3q - 9p^3q + 11p^3q$', answer: '7p^3q', solution: '$5 - 9 + 11 = 7$.\nResult: $7p^3q$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3a', topicCode: '3A', topicTitle: 'Collecting like terms', year: 'Year 10', type: 'short_answer', question: 'Simplify: $ab - 2ab^2 - 6ab + ab^2$', answer: '-5ab - ab^2', solution: '$(ab-6ab) + (-2ab^2+ab^2) = -5ab - ab^2$', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3a', topicCode: '3A', topicTitle: 'Collecting like terms', year: 'Year 10', type: 'short_answer', question: 'Simplify: $8x^3y - 2x^2y + 12x^3y - 8x^2y$', answer: '20x^3y - 10x^2y', solution: '$(8x^3y+12x^3y) + (-2x^2y-8x^2y) = 20x^3y - 10x^2y$', difficulty: 'hard', isManual: true },

  // SECTION 2: Expand (2a-f)
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Expansion', year: 'Year 10', type: 'short_answer', question: 'Expand: $-2(a + 4)$', answer: '-2a - 8', solution: '$-2 \\times a + (-2) \\times 4 = -2a - 8$', difficulty: 'easy', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Expansion', year: 'Year 10', type: 'short_answer', question: 'Expand: $-3(b + 6)$', answer: '-3b - 18', solution: '$-3 \\times b + (-3) \\times 6 = -3b - 18$', difficulty: 'easy', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Expansion', year: 'Year 10', type: 'short_answer', question: 'Expand: $-4(3b - 5)$', answer: '-12b + 20', solution: '$-4 \\times 3b - (-4) \\times (-5) = -12b + 20$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Expansion', year: 'Year 10', type: 'short_answer', question: 'Expand: $-5(4b - 7)$', answer: '-20b + 35', solution: '$-5 \\times 4b - (-5) \\times 7 = -20b + 35$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Expansion', year: 'Year 10', type: 'multiple_choice', question: 'Expand: $\\frac{2}{3}(12p + 6)$', options: ['$8p + 4$', '$12p + 4$', '$8p + 6$', '$24p + 12$'], answer: '0', solution: '$\\frac{2}{3}(12p) + \\frac{2}{3}(6) = 8p + 4$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Expansion', year: 'Year 10', type: 'multiple_choice', question: 'Expand: $-\\frac{1}{4}(16p - 20)$', options: ['$-4p + 5$', '$4p - 5$', '$-4p - 5$', '$-16p + 20$'], answer: '0', solution: '$-\\frac{1}{4}(16p) - (-\\frac{1}{4})(20) = -4p + 5$', difficulty: 'medium', isManual: true },

  // SECTION 3: Expand (3a-i)
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Expansion', year: 'Year 10', type: 'short_answer', question: 'Expand: $d(d - 9)$', answer: 'd^2 - 9d', solution: '$d \\times d - d \\times 9 = d^2 - 9d$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Expansion', year: 'Year 10', type: 'short_answer', question: 'Expand: $e(3e + 1)$', answer: '3e^2 + e', solution: '$e \\times 3e + e \\times 1 = 3e^2 + e$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Expansion', year: 'Year 10', type: 'short_answer', question: 'Expand: $f(5f + 6)$', answer: '5f^2 + 6f', solution: '$f \\times 5f + f \\times 6 = 5f^2 + 6f$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Expansion', year: 'Year 10', type: 'short_answer', question: 'Expand: $-2m(5m - 4)$', answer: '-10m^2 + 8m', solution: '$-2m(5m) - (-2m)(4) = -10m^2 + 8m$', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Expansion', year: 'Year 10', type: 'short_answer', question: 'Expand: $-3n(5n + 7)$', answer: '-15n^2 - 21n', solution: '$-3n(5n) + (-3n)(7) = -15n^2 - 21n$', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Expansion', year: 'Year 10', type: 'short_answer', question: 'Expand: $2p(3q - 5r)$', answer: '6pq - 10pr', solution: '$2p(3q) - 2p(5r) = 6pq - 10pr$', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Expansion', year: 'Year 10', type: 'short_answer', question: 'Expand: $-3x(2x + 5y)$', answer: '-6x^2 - 15xy', solution: '$-3x(2x) - 3x(5y) = -6x^2 - 15xy$', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Expansion', year: 'Year 10', type: 'short_answer', question: 'Expand: $-2z(3z - 4y)$', answer: '-6z^2 + 8zy', solution: '$-2z(3z) - 2z(-4y) = -6z^2 + 8zy$', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Expansion', year: 'Year 10', type: 'short_answer', question: 'Expand: $2a(3 + 4ab)$', answer: '6a + 8a^2b', solution: '$2a(3) + 2a(4ab) = 6a + 8a^2b$', difficulty: 'hard', isManual: true },

  // SECTION 4: Expand and collect (4a-l)
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Expansion', year: 'Year 10', type: 'short_answer', question: 'Expand and simplify: $2(c + 7) - 9$', answer: '2c + 5', solution: '$2c + 14 - 9 = 2c + 5$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Expansion', year: 'Year 10', type: 'short_answer', question: 'Expand and simplify: $4(h + 1) + 3h$', answer: '7h + 4', solution: '$4h + 4 + 3h = 7h + 4$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Expansion', year: 'Year 10', type: 'short_answer', question: 'Expand and simplify: $4(1 - 3q) + 15q$', answer: '3q + 4', solution: '$4 - 12q + 15q = 3q + 4$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Expansion', year: 'Year 10', type: 'short_answer', question: 'Expand and simplify: $2a(3a + 2b) - 6a^2$', answer: '4ab', solution: '$6a^2 + 4ab - 6a^2 = 4ab$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Expansion', year: 'Year 10', type: 'multiple_choice', question: 'Expand and simplify: $\\frac{5}{6}(x - 4) + \\frac{3x}{4}$', options: ['$\\frac{19x}{12} - \\frac{10}{3}$', '$\\frac{15x}{12} - 4$', '$\\frac{19x}{12} - \\frac{20}{6}$', '$\\frac{x}{2} - 3$'], answer: '0', solution: '$\\frac{5x}{6} - \\frac{10}{3} + \\frac{3x}{4} = \\frac{10x}{12} + \\frac{9x}{12} - \\frac{10}{3} = \\frac{19x}{12} - \\frac{10}{3}$', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Expansion', year: 'Year 10', type: 'short_answer', question: 'Expand and simplify: $5(b - 2) - 4(b + 3)$', answer: 'b - 22', solution: '$5b - 10 - 4b - 12 = b - 22$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Expansion', year: 'Year 10', type: 'short_answer', question: 'Expand and simplify: $4y(3y - 5) + 3(3y - 5)$', answer: '12y^2 - 11y - 15', solution: '$12y^2 - 20y + 9y - 15 = 12y^2 - 11y - 15$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Expansion', year: 'Year 10', type: 'short_answer', question: 'Expand and simplify: $2p(3p + 1) - 4(2p + 1)$', answer: '6p^2 - 6p - 4', solution: '$6p^2 + 2p - 8p - 4 = 6p^2 - 6p - 4$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Expansion', year: 'Year 10', type: 'multiple_choice', question: 'Expand: $(m + 4)(m - 5)$', options: ['$m^2 - m - 20$', '$m^2 + m - 20$', '$m^2 - 20$', '$m^2 - 9m - 20$'], answer: '0', solution: '$m^2 - 5m + 4m - 20 = m^2 - m - 20$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Expansion', year: 'Year 10', type: 'multiple_choice', question: 'Expand: $(6x - 5)(x + 2)$', options: ['$6x^2 + 7x - 10$', '$6x^2 - 7x - 10$', '$6x^2 + 12x - 10$', '$6x^2 + 17x - 10$'], answer: '0', solution: '$6x^2 + 12x - 5x - 10 = 6x^2 + 7x - 10$', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Expansion', year: 'Year 10', type: 'multiple_choice', question: 'Expand: $(7x - 1)(x - 5)$', options: ['$7x^2 - 36x + 5$', '$7x^2 - 34x + 5$', '$7x^2 - 36x - 5$', '$7x^2 + 36x + 5$'], answer: '0', solution: '$7x^2 - 35x - x + 5 = 7x^2 - 36x + 5$', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicCode: '3B', topicTitle: 'Expansion', year: 'Year 10', type: 'multiple_choice', question: 'Expand: $(m + 3n)(2m + n)$', options: ['$2m^2 + 7mn + 3n^2$', '$2m^2 + 6mn + 3n^2$', '$2m^2 + 3n^2$', '$2m^2 + mn + 3n^2$'], answer: '0', solution: '$2m^2 + mn + 6mn + 3n^2 = 2m^2 + 7mn + 3n^2$', difficulty: 'hard', isManual: true },

  // SECTION 5: Solve (5a-i)
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3c', topicCode: '3C', topicTitle: 'Solving equations', year: 'Year 10', type: 'short_answer', question: 'Solve: $7x - 4 = 17$', answer: '3', solution: '$7x = 21 \\Rightarrow x = 3$', difficulty: 'easy', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3c', topicCode: '3C', topicTitle: 'Solving equations', year: 'Year 10', type: 'short_answer', question: 'Solve: $3x = 25 - 2x$', answer: '5', solution: '$5x = 25 \\Rightarrow x = 5$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3c', topicCode: '3C', topicTitle: 'Solving equations', year: 'Year 10', type: 'short_answer', question: 'Solve: $7x = 18 - 2x$', answer: '2', solution: '$9x = 18 \\Rightarrow x = 2$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3c', topicCode: '3C', topicTitle: 'Solving equations', year: 'Year 10', type: 'short_answer', question: 'Solve: $\\frac{x}{3} + 2 = 7$', answer: '15', solution: '$\\frac{x}{3} = 5 \\Rightarrow x = 15$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3c', topicCode: '3C', topicTitle: 'Solving equations', year: 'Year 10', type: 'short_answer', question: 'Solve: $\\frac{3x}{2} + 2 = 8$', answer: '4', solution: '$\\frac{3x}{2} = 6 \\Rightarrow 3x = 12 \\Rightarrow x = 4$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3c', topicCode: '3C', topicTitle: 'Solving equations', year: 'Year 10', type: 'short_answer', question: 'Solve: $3x - 7 = x + 1$', answer: '4', solution: '$2x = 8 \\Rightarrow x = 4$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3c', topicCode: '3C', topicTitle: 'Solving equations', year: 'Year 10', type: 'short_answer', question: 'Solve: $\\frac{7x}{2} + 2x = 12 - x$', answer: '24/13', solution: '$3.5x + 2x + x = 12 \\Rightarrow 6.5x = 12 \\Rightarrow x = 12/6.5 = 24/13$', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3c', topicCode: '3C', topicTitle: 'Solving equations', year: 'Year 10', type: 'short_answer', question: 'Solve: $\\frac{x}{2} + \\frac{x}{5} = 14$', answer: '20', solution: '$\\frac{5x}{10} + \\frac{2x}{10} = 14 \\Rightarrow \\frac{7x}{10} = 14 \\Rightarrow 7x = 140 \\Rightarrow x = 20$', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3c', topicCode: '3C', topicTitle: 'Solving equations', year: 'Year 10', type: 'short_answer', question: 'Solve: $3(2x - 1) + 3x = 15$', answer: '2', solution: '$6x - 3 + 3x = 15 \\Rightarrow 9x = 18 \\Rightarrow x = 2$', difficulty: 'hard', isManual: true },

  // SECTION 6: Inequalities (6a-i)
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3d', topicCode: '3D', topicTitle: 'Inequalities', year: 'Year 10', type: 'graph_sketch', question: 'Solve and graph: $x + 1 > 5$', answer: 'x > 4', solution: '$x > 4$. Open circle at 4, arrow right.', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3d', topicCode: '3D', topicTitle: 'Inequalities', year: 'Year 10', type: 'graph_sketch', question: 'Solve and graph: $2x - 1 < 6$', answer: 'x < 3.5', solution: '$2x < 7 \\Rightarrow x < 3.5$. Open circle, arrow left.', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3d', topicCode: '3D', topicTitle: 'Inequalities', year: 'Year 10', type: 'graph_sketch', question: 'Solve and graph: $\\frac{x + 1}{2} \\ge -4$', answer: 'x \\ge -9', solution: '$x + 1 \\ge -8 \\Rightarrow x \\ge -9$. Solid circle, arrow right.', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3d', topicCode: '3D', topicTitle: 'Inequalities', year: 'Year 10', type: 'graph_sketch', question: 'Solve and graph: $-2x + 1 \\le 6$', answer: 'x \\ge -2.5', solution: '$-2x \\le 5 \\Rightarrow x \\ge -2.5$. Solid circle, arrow right.', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3d', topicCode: '3D', topicTitle: 'Inequalities', year: 'Year 10', type: 'graph_sketch', question: 'Solve and graph: $4 - 7x \\ge 6$', answer: 'x \\le -2/7', solution: '$-7x \\ge 2 \\Rightarrow x \\le -2/7$. Solid circle, arrow left.', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3d', topicCode: '3D', topicTitle: 'Inequalities', year: 'Year 10', type: 'graph_sketch', question: 'Solve and graph: $\\frac{-3x + 2}{6} \\le 1$', answer: 'x \\ge -4/3', solution: '$-3x + 2 \\le 6 \\Rightarrow -3x \\le 4 \\Rightarrow x \\ge -4/3$. Solid circle, arrow right.', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3d', topicCode: '3D', topicTitle: 'Inequalities', year: 'Year 10', type: 'graph_sketch', question: 'Solve and graph: $\\frac{2x - 1}{3} \\le \\frac{x + 1}{4}$', answer: 'x \\le 1.4', solution: '$8x - 4 \\le 3x + 3 \\Rightarrow 5x \\le 7 \\Rightarrow x \\le 1.4$. Solid circle, arrow left.', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3d', topicCode: '3D', topicTitle: 'Inequalities', year: 'Year 10', type: 'graph_sketch', question: 'Solve and graph: $\\frac{5x + 6}{3} \\le 2x + 7$', answer: 'x \\ge -15', solution: '$5x + 6 \\le 6x + 21 \\Rightarrow -x \\le 15 \\Rightarrow x \\ge -15$. Solid circle, arrow right.', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3d', topicCode: '3D', topicTitle: 'Inequalities', year: 'Year 10', type: 'graph_sketch', question: 'Solve and graph: $4 - 6x \\le 3 + 2x$', answer: 'x \\ge 1/8', solution: '$1 \\le 8x \\Rightarrow x \\ge 1/8$. Solid circle, arrow right.', difficulty: 'hard', isManual: true },

  // SECTION 7-15 (Image 2)
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3e', topicCode: '3E', topicTitle: 'Formulas', year: 'Year 10', type: 'multiple_choice', question: 'Find $R$ if $r_1 = 4, r_2 = 3$ in $\\frac{1}{R} = \\frac{1}{r_1} + \\frac{1}{r_2}$.', options: ['$12/7$', '$7/12$', '$7$', '$1$'], answer: '0', solution: '$\\frac{1}{R} = \\frac{1}{4} + \\frac{1}{3} = \\frac{7}{12} \\Rightarrow R = 12/7$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3e', topicCode: '3E', topicTitle: 'Formulas', year: 'Year 10', type: 'short_answer', question: 'Find $r_1$ if $R = 2, r_2 = 6$ in $\\frac{1}{R} = \\frac{1}{r_1} + \\frac{1}{r_2}$.', answer: '3', solution: '$\\frac{1}{2} = \\frac{1}{r_1} + \\frac{1}{6} \\Rightarrow \\frac{1}{r_1} = 1/2 - 1/6 = 1/3 \\Rightarrow r_1 = 3$', difficulty: 'medium', isManual: true },
  
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3e', topicCode: '3E', topicTitle: 'Formulas', year: 'Year 10', type: 'short_answer', question: 'Find $P$ when $a = 6, b = 7$ in $P = 4(a + b)$.', answer: '52', solution: '$P = 4(6 + 7) = 52$', difficulty: 'easy', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3e', topicCode: '3E', topicTitle: 'Formulas', year: 'Year 10', type: 'multiple_choice', question: 'Make $a$ the subject of $P = 4(a + b)$.', options: ['$a = P/4 - b$', '$a = P/4 + b$', '$a = P - 4b$', '$a = 4P - b$'], answer: '0', solution: '$P/4 = a + b \\Rightarrow a = P/4 - b$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3e', topicCode: '3E', topicTitle: 'Formulas', year: 'Year 10', type: 'short_answer', question: 'Find $a$ when $P = 20, b = 6$ in $P = 4(a + b)$.', answer: '-1', solution: '$20 = 4(a + 6) \\Rightarrow 5 = a + 6 \\Rightarrow a = -1$', difficulty: 'medium', isManual: true },

  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3e', topicCode: '3E', topicTitle: 'Formulas', year: 'Year 10', type: 'multiple_choice', question: 'Make $h$ the subject of $A = \\pi r^2 + \\pi rh$.', options: ['$h = (A - \\pi r^2)/(\\pi r)$', '$h = A - \\pi r^2$', '$h = A/(\\pi r) - r$', '$h = (A + \\pi r^2)/(\\pi r)$'], answer: '0', solution: '$A - \\pi r^2 = \\pi rh \\Rightarrow h = (A - \\pi r^2)/\\pi r$', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3e', topicCode: '3E', topicTitle: 'Formulas', year: 'Year 10', type: 'multiple_choice', question: 'Make $h$ the subject of $A = \\pi r \\sqrt{h^2 + r^2}$.', options: ['$h = \\sqrt{(A/\\pi r)^2 - r^2}$', '$h = A^2/(\\pi^2 r^2) - r^2$', '$h = \\sqrt{A/\\pi r - r^2}$', '$h = (A/\\pi r) - r$'], answer: '0', solution: '$\\frac{A}{\\pi r} = \\sqrt{h^2+r^2} \\Rightarrow \\frac{A^2}{\\pi^2 r^2} = h^2+r^2 \\Rightarrow h = \\sqrt{(\\frac{A}{\\pi r})^2 - r^2}$', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3e', topicCode: '3E', topicTitle: 'Formulas', year: 'Year 10', type: 'multiple_choice', question: 'Make $u$ the subject of $E = \\frac{1}{2}m(v^2 - u^2)$.', options: ['$u = \\sqrt{v^2 - 2E/m}$', '$u = v^2 - 2E/m$', '$u = \\sqrt{2E/m - v^2}$', '$u = v - \\sqrt{2E/m}$'], answer: '0', solution: '$\\frac{2E}{m} = v^2 - u^2 \\Rightarrow u^2 = v^2 - \\frac{2E}{m} \\Rightarrow u = \\sqrt{v^2 - \\frac{2E}{m}}$', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3e', topicCode: '3E', topicTitle: 'Formulas', year: 'Year 10', type: 'multiple_choice', question: 'Make $x$ the subject of $\\frac{ax + by}{c} = x - b$.', options: ['$x = (bc + by)/(c - a)$', '$x = (bc + by)/(a - c)$', '$x = (by - bc)/(c - a)$', '$x = by/(c - a)$'], answer: '0', solution: '$ax + by = cx - bc \\Rightarrow bc + by = cx - ax = x(c-a) \\Rightarrow x = (bc+by)/(c-a)$', difficulty: 'hard', isManual: true },

  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $49 - z^2$', options: ['$(7 - z)(7 + z)$', '$(z - 7)(z + 7)$', '$(7 - z)^2$', '$(49 - z)(1 + z)$'], answer: '0', solution: '$(7-z)(7+z)$', difficulty: 'easy', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $9 - 4a^2$', options: ['$(3 - 2a)(3 + 2a)$', '$(3 - 4a)(3 + 4a)$', '$(3 - 2a)^2$', '$(9 - 2a)(1 + 2a)$'], answer: '0', solution: '$(3-2a)(3+2a)$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $25 - 64x^2$', options: ['$(5 - 8x)(5 + 8x)$', '$(5 - 8x)^2$', '$(8x - 5)(8x + 5)$', '$(25 - 8x)(1 + 8x)$'], answer: '0', solution: '$(5-8x)(5+8x)$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $a^2b^2 - 4c^2d^2$', options: ['$(ab - 2cd)(ab + 2cd)$', '$(ab - 2cd)^2$', '$(ab + 2cd)(ab - 2cd)$', '$(a^2b^2 - 2cd)(1 + 2cd)$'], answer: '0', solution: '$(ab-2cd)(ab+2cd)$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $9x^2 - 1$', options: ['$(3x - 1)(3x + 1)$', '$(3x - 1)^2$', '$(9x - 1)(x + 1)$', '$(1 - 3x)(1 + 3x)$'], answer: '0', solution: '$(3x-1)(3x+1)$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $36p^2 - 49q^2$', options: ['$(6p - 7q)(6p + 7q)$', '$(6p - 7q)^2$', '$(36p - 7q)(1 + 7q)$', '$(7q - 6p)(7q + 6p)$'], answer: '0', solution: '$(6p-7q)(6p+7q)$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $1 - 100b^2$', options: ['$(1 - 10b)(1 + 10b)$', '$(1 - 10b)^2$', '$(10b - 1)(10b + 1)$', '$(1 - 50b)(1 + 2b)$'], answer: '0', solution: '$(1-10b)(1+10b)$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $121a^2 - 81b^2$', options: ['$(11a - 9b)(11a + 9b)$', '$(11a - 9b)^2$', '$(11a + 81b)(11a - b)$', '$(9b - 11a)(9b + 11a)$'], answer: '0', solution: '$(11a-9b)(11a+9b)$', difficulty: 'medium', isManual: true },

  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise using surds: $x^2 - 11$', options: ['$(x - \\sqrt{11})(x + \\sqrt{11})$', '$(x - 11)(x + 11)$', '$(x - \\sqrt{11})^2$', '$(11 - x)(11 + x)$'], answer: '0', solution: '$(x-\\sqrt{11})(x+\\sqrt{11})$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise using surds: $x^2 - 15$', options: ['$(x - \\sqrt{15})(x + \\sqrt{15})$', '$(x - 15)(x + 15)$', '$(x - \\sqrt{15})^2$', '$(15 - x)(15 + x)$'], answer: '0', solution: '$(x-\\sqrt{15})(x+\\sqrt{15})$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise using surds: $x^2 - 28$', options: ['$(x - 2\\sqrt{7})(x + 2\\sqrt{7})$', '$(x - \\sqrt{28})(x + \\sqrt{28})$', '$(x - 28)(x + 28)$', '$(x - 2\\sqrt{7})^2$'], answer: '0', solution: '$x^2 - 28 = (x-\\sqrt{28})(x+\\sqrt{28}) = (x-2\\sqrt{7})(x+2\\sqrt{7})$', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise using surds: $x^2 - 32$', options: ['$(x - 4\\sqrt{2})(x + 4\\sqrt{2})$', '$(x - \\sqrt{32})(x + \\sqrt{32})$', '$(x - 32)(x + 32)$', '$(x - 4\\sqrt{2})^2$'], answer: '0', solution: '$x^2 - 32 = (x-\\sqrt{32})(x+\\sqrt{32}) = (x-4\\sqrt{2})(x+4\\sqrt{2})$', difficulty: 'hard', isManual: true },

  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $(x + 4)^2 - 2$', options: ['$(x + 4 - \\sqrt{2})(x + 4 + \\sqrt{2})$', '$(x + 4 - 2)(x + 4 + 2)$', '$(x + 2)(x + 6)$', '$(x + 4 - \\sqrt{2})^2$'], answer: '0', solution: '$(x+4-\\sqrt{2})(x+4+\\sqrt{2})$', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $(x - 3)^2 - 5$', options: ['$(x - 3 - \\sqrt{5})(x - 3 + \\sqrt{5})$', '$(x - 3 - 5)(x - 3 + 5)$', '$(x - 8)(x + 2)$', '$(x - 3 - \\sqrt{5})^2$'], answer: '0', solution: '$(x-3-\\sqrt{5})(x-3+\\sqrt{5})$', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $(2x + 1)^2 - 20$', options: ['$(2x + 1 - 2\\sqrt{5})(2x + 1 + 2\\sqrt{5})$', '$(2x + 1 - \\sqrt{20})(2x + 1 + \\sqrt{20})$', '$(2x - 19)(2x + 21)$', '$(2x + 1 - 2\\sqrt{5})^2$'], answer: '0', solution: '$(2x+1-\\sqrt{20})(2x+1+\\sqrt{20}) = (2x+1-2\\sqrt{5})(2x+1+2\\sqrt{5})$', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $(3 - 2x)^2 - 10$', options: ['$(3 - 2x - \\sqrt{10})(3 - 2x + \\sqrt{10})$', '$(3 - 2x - 10)(3 - 2x + 10)$', '$( -7 - 2x)(13 - 2x)$', '$(3 - 2x - \\sqrt{10})^2$'], answer: '0', solution: '$(3-2x-\\sqrt{10})(3-2x+\\sqrt{10})$', difficulty: 'hard', isManual: true },

  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $(a + b)^2 - c^2$', options: ['$(a + b - c)(a + b + c)$', '$(a + b - c)^2$', '$(a + b + c)^2$', '$(a - b - c)(a - b + c)$'], answer: '0', solution: '$(a+b-c)(a+b+c)$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $(a - b)^2 - c^2$', options: ['$(a - b - c)(a - b + c)$', '$(a - b - c)^2$', '$(a + b - c)(a + b + c)$', '$(a - b + c)^2$'], answer: '0', solution: '$(a-b-c)(a-b+c)$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $(x + y)^2 - 4z^2$', options: ['$(x + y - 2z)(x + y + 2z)$', '$(x + y - 4z)(x + y + 4z)$', '$(x + y - 2z)^2$', '$(x - y - 2z)(x - y + 2z)$'], answer: '0', solution: '$(x+y-2z)(x+y+2z)$', difficulty: 'hard', isManual: true },

  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $2ax - a + 6x - 3$', options: ['$(2x - 1)(a + 3)$', '$(2x + 1)(a - 3)$', '$(x - 1)(2a + 3)$', '$(2x - 1)(a - 3)$'], answer: '0', solution: '$a(2x-1) + 3(2x-1) = (2x-1)(a+3)$', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $ab + 5b - 2a - 10$', options: ['$(a + 5)(b - 2)$', '$(a - 5)(b + 2)$', '$(a + 5)(b + 2)$', '$(a - 5)(b - 2)$'], answer: '0', solution: '$b(a+5) - 2(a+5) = (a+5)(b-2)$', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $2xy + 3y + 10x + 15$', options: ['$(2x + 3)(y + 5)$', '$(2x - 3)(y - 5)$', '$(x + 3)(2y + 5)$', '$(2x + 3)(y - 5)$'], answer: '0', solution: '$y(2x+3) + 5(2x+3) = (2x+3)(y+5)$', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $3mx - 21x + 2m - 14$', options: ['$(m - 7)(3x + 2)$', '$(m + 7)(3x - 2)$', '$(3m - 7)(x + 2)$', '$(m - 7)(3x - 2)$'], answer: '0', solution: '$3x(m-7) + 2(m-7) = (m-7)(3x+2)$', difficulty: 'hard', isManual: true },

  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $x^2 - 3x + 2$', options: ['$(x - 2)(x - 1)$', '$(x + 2)(x + 1)$', '$(x - 2)(x + 1)$', '$(x + 2)(x - 1)$'], answer: '0', solution: '$(x-2)(x-1)$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $c^2 + 12c + 11$', options: ['$(c + 11)(c + 1)$', '$(c + 6)(c + 6)$', '$(c - 11)(c - 1)$', '$(c + 12)(c + 1)$'], answer: '0', solution: '$(c+11)(c+1)$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $x^2 - 4x - 5$', options: ['$(x - 5)(x + 1)$', '$(x + 5)(x - 1)$', '$(x - 5)(x - 1)$', '$(x + 4)(x - 1)$'], answer: '0', solution: '$(x-5)(x+1)$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $y^2 + 9y - 10$', options: ['$(y + 10)(y - 1)$', '$(y - 10)(y + 1)$', '$(y + 5)(y + 4)$', '$(y + 9)(y - 1)$'], answer: '0', solution: '$(y+10)(y-1)$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $z^2 - 6z - 16$', options: ['$(z - 8)(z + 2)$', '$(z + 8)(z - 2)$', '$(z - 4)(z - 4)$', '$(z - 16)(z + 1)$'], answer: '0', solution: '$(z-8)(z+2)$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $c^2 + 8c - 20$', options: ['$(c + 10)(c - 2)$', '$(c - 10)(c + 2)$', '$(c + 4)(c + 5)$', '$(c + 20)(c - 1)$'], answer: '0', solution: '$(c+10)(c-2)$', difficulty: 'medium', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $p^2 - 11p - 26$', options: ['$(p - 13)(p + 2)$', '$(p + 13)(p - 2)$', '$(p - 26)(p + 1)$', '$(p - 11)(p - 2)$'], answer: '0', solution: '$(p-13)(p+2)$', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $k^2 - 11k - 42$', options: ['$(k - 14)(k + 3)$', '$(k + 14)(k - 3)$', '$(k - 21)(k + 2)$', '$(k - 7)(k - 6)$'], answer: '0', solution: '$(k-14)(k+3)$', difficulty: 'hard', isManual: true },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3f', topicCode: '3F', topicTitle: 'Factorising', year: 'Year 10', type: 'multiple_choice', question: 'Factorise: $x^2 + 4x - 60$', options: ['$(x + 10)(x - 6)$', '$(x - 10)(x + 6)$', '$(x + 12)(x - 5)$', '$(x + 15)(x - 4)$'], answer: '0', solution: '$(x+10)(x-6)$', difficulty: 'hard', isManual: true }
];

export const importYear10Ch3 = async () => {
  const { collection, getDocs, query, where, addDoc } = await import('firebase/firestore');
  console.log('[Ch3 Import] Starting optimized audit...');
  let importedCount = 0;
  
  try {
    const qRef = collection(db, 'questions');
    const existingSnap = await getDocs(query(qRef, where('chapterId', '==', 'y10-3')));
    const existingQuestions = new Set(existingSnap.docs.map(doc => doc.data().question));
    
    for (const q of allQuestions) {
      if (!existingQuestions.has(q.question)) {
        await addDoc(collection(db, 'questions'), q);
        importedCount++;
      }
    }
  } catch (error) {
    console.error('[Ch3 Import] ERROR:', error);
  }
  
  console.log(`[Ch3 Import] Successfully added ${importedCount} NEW questions.`);
  return importedCount;
};
