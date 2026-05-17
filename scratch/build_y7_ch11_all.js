const fs = require('fs');

const questions = [];

// ========================================================
// Q1: Evaluate expressions for x = -2 (12 questions)
// ========================================================
// a: 2x (Variation: 3x for x = -3)
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $3x$ for $x = -3$.',
  options: ['$-9$', '$9$', '$-6$', '$6$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Replace the variable $x$ with the integer value $-3$ inside the expression:</p>
    <p>$$3x = 3 \\times (-3)$$</p>
    <p><strong>Step 2:</strong> Multiply a positive integer by a negative integer to get a negative product:</p>
    <p>$$3 \\times (-3) = -9$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// b: -x (Variation: -x for x = -5)
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $-x$ for $x = -5$.',
  options: ['$5$', '$-5$', '$0$', '$1$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Substitute $x = -5$ into the expression:</p>
    <p>$$-x = -(-5)$$</p>
    <p><strong>Step 2:</strong> The negative of a negative number is positive:</p>
    <p>$$-(-5) = 5$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// c: x + 2 (Variation: x + 4 for x = -3)
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $x + 4$ for $x = -3$.',
  options: ['$1$', '$-7$', '$-1$', '$7$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Substitute $x = -3$ into the expression:</p>
    <p>$$x + 4 = -3 + 4$$</p>
    <p><strong>Step 2:</strong> Add $-3$ and $4$:</p>
    <p>$$-3 + 4 = 1$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// d: x - 3 (Variation: x - 5 for x = -4)
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $x - 5$ for $x = -4$.',
  options: ['$-9$', '$1$', '$-1$', '$9$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Substitute $x = -4$ into the expression:</p>
    <p>$$x - 5 = -4 - 5$$</p>
    <p><strong>Step 2:</strong> Subtracting $5$ from $-4$ yields:</p>
    <p>$$-4 - 5 = -9$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// e: 2x + 3 (Variation: 3x + 5 for x = -2)
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $3x + 5$ for $x = -2$.',
  options: ['$-1$', '$11$', '$1$', '$-11$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Substitute $x = -2$ into the expression:</p>
    <p>$$3x + 5 = 3 \\times (-2) + 5$$</p>
    <p><strong>Step 2:</strong> Apply the order of operations (multiplication first):</p>
    <p>$$3 \\times (-2) = -6$$</p>
    <p><strong>Step 3:</strong> Perform the addition:</p>
    <p>$$-6 + 5 = -1$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// f: x^3 (Variation: x^3 for x = -4)
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $x^3$ for $x = -4$.',
  options: ['$-64$', '$64$', '$-12$', '$16$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Substitute $x = -4$ into the expression:</p>
    <p>$$x^3 = (-4)^3$$</p>
    <p><strong>Step 2:</strong> Cube the negative number by multiplying it by itself three times:</p>
    <p>$$(-4) \\times (-4) \\times (-4) = 16 \\times (-4) = -64$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// g: -x^3 (Variation: -x^3 for x = -3)
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $-x^3$ for $x = -3$.',
  options: ['$27$', '$-27$', '$9$', '$-9$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Substitute $x = -3$ into the expression:</p>
    <p>$$-x^3 = -(-3)^3$$</p>
    <p><strong>Step 2:</strong> Cube the negative number first:</p>
    <p>$$(-3)^3 = (-3) \\times (-3) \\times (-3) = -27$$</p>
    <p><strong>Step 3:</strong> Apply the negative sign outside the brackets:</p>
    <p>$$-(-27) = 27$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// h: (-x)^2 (Variation: (-x)^2 for x = -4)
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $(-x)^2$ for $x = -4$.',
  options: ['$16$', '$-16$', '$8$', '$-8$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Substitute $x = -4$ into the expression:</p>
    <p>$$(-x)^2 = (-(-4))^2$$</p>
    <p><strong>Step 2:</strong> Simplify the inner double negative:</p>
    <p>$$-(-4) = 4$$</p>
    <p><strong>Step 3:</strong> Square the positive result:</p>
    <p>$$4^2 = 16$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// i: 3 - x (Variation: 5 - x for x = -3)
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $5 - x$ for $x = -3$.',
  options: ['$8$', '$2$', '$-8$', '$-2$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Substitute $x = -3$ into the expression:</p>
    <p>$$5 - x = 5 - (-3)$$</p>
    <p><strong>Step 2:</strong> Convert the subtraction of a negative into addition:</p>
    <p>$$5 + 3 = 8$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// j: 3 - 2x (Variation: 4 - 3x for x = -2)
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $4 - 3x$ for $x = -2$.',
  options: ['$10$', '$-2$', '$2$', '$-10$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Substitute $x = -2$ into the expression:</p>
    <p>$$4 - 3x = 4 - 3 \\times (-2)$$</p>
    <p><strong>Step 2:</strong> Multiply $-3$ by $-2$ first:</p>
    <p>$$-3 \\times (-2) = +6$$</p>
    <p><strong>Step 3:</strong> Perform the final addition:</p>
    <p>$$4 + 6 = 10$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// k: 5 + 2x (Variation: 7 + 3x for x = -3)
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $7 + 3x$ for $x = -3$.',
  options: ['$-2$', '$16$', '$2$', '$-16$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Substitute $x = -3$ into the expression:</p>
    <p>$$7 + 3x = 7 + 3 \\times (-3)$$</p>
    <p><strong>Step 2:</strong> Multiply first:</p>
    <p>$$3 \\times (-3) = -9$$</p>
    <p><strong>Step 3:</strong> Add the negative product to $7$:</p>
    <p>$$7 + (-9) = 7 - 9 = -2$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// l: 2 - 5x (Variation: 3 - 4x for x = -3)
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $3 - 4x$ for $x = -3$.',
  options: ['$15$', '$-9$', '$9$', '$-15$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Substitute $x = -3$ into the expression:</p>
    <p>$$3 - 4x = 3 - 4 \\times (-3)$$</p>
    <p><strong>Step 2:</strong> Multiply $-4$ by $-3$ first (negative times negative is positive):</p>
    <p>$$-4 \\times (-3) = +12$$</p>
    <p><strong>Step 3:</strong> Perform the final addition:</p>
    <p>$$3 + 12 = 15$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});


// ========================================================
// Q2: Evaluate expressions for x = -30 (8 questions)
// ========================================================
// a: 2x + 3 (Variation: 3x + 7 for x = -20)
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $3x + 7$ for $x = -20$.',
  options: ['$-53$', '$67$', '$-67$', '$53$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Substitute $x = -20$ into the expression:</p>
    <p>$$3x + 7 = 3 \\times (-20) + 7$$</p>
    <p><strong>Step 2:</strong> Multiply:</p>
    <p>$$3 \\times (-20) = -60$$</p>
    <p><strong>Step 3:</strong> Add $7$:</p>
    <p>$$-60 + 7 = -53$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// b: -x + 6 (Variation: -x + 12 for x = -40)
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $-x + 12$ for $x = -40$.',
  options: ['$52$', '$-28$', '$28$', '$-52$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Substitute $x = -40$ into the expression:</p>
    <p>$$-x + 12 = -(-40) + 12$$</p>
    <p><strong>Step 2:</strong> Simplify the double negative:</p>
    <p>$$40 + 12 = 52$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// c: 2x - 4 (Variation: 4x - 9 for x = -15)
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $4x - 9$ for $x = -15$.',
  options: ['$-69$', '$-51$', '$69$', '$51$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Substitute $x = -15$ into the expression:</p>
    <p>$$4x - 9 = 4 \\times (-15) - 9$$</p>
    <p><strong>Step 2:</strong> Multiply:</p>
    <p>$$4 \\times (-15) = -60$$</p>
    <p><strong>Step 3:</strong> Subtract $9$:</p>
    <p>$$-60 - 9 = -69$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// d: 5 - x (Variation: 15 - x for x = -25)
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $15 - x$ for $x = -25$.',
  options: ['$40$', '$-10$', '$10$', '$-40$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Substitute $x = -25$ into the expression:</p>
    <p>$$15 - x = 15 - (-25)$$</p>
    <p><strong>Step 2:</strong> Simplify subtraction of a negative:</p>
    <p>$$15 + 25 = 40$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// e: 6 - 2x (Variation: 8 - 3x for x = -12)
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $8 - 3x$ for $x = -12$.',
  options: ['$44$', '$-28$', '$28$', '$-44$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Substitute $x = -12$ into the expression:</p>
    <p>$$8 - 3x = 8 - 3 \\times (-12)$$</p>
    <p><strong>Step 2:</strong> Multiply $-3$ by $-12$ (negative times negative is positive):</p>
    <p>$$-3 \\times (-12) = +36$$</p>
    <p><strong>Step 3:</strong> Add to $8$:</p>
    <p>$$8 + 36 = 44$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// f: 5 - 4x (Variation: 7 - 5x for x = -10)
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $7 - 5x$ for $x = -10$.',
  options: ['$57$', '$-43$', '$43$', '$-57$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Substitute $x = -10$ into the expression:</p>
    <p>$$7 - 5x = 7 - 5 \\times (-10)$$</p>
    <p><strong>Step 2:</strong> Multiply $-5$ by $-10$:</p>
    <p>$$-5 \\times (-10) = +50$$</p>
    <p><strong>Step 3:</strong> Perform final addition:</p>
    <p>$$7 + 50 = 57$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// g: x/2 (Variation: x/3 for x = -45)
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $\\frac{x}{3}$ for $x = -45$.',
  options: ['$-15$', '$15$', '$-135$', '$135$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Substitute $x = -45$ into the fraction:</p>
    <p>$$\\frac{x}{3} = \\frac{-45}{3}$$</p>
    <p><strong>Step 2:</strong> Divide a negative number by a positive number to yield a negative quotient:</p>
    <p>$$\\frac{-45}{3} = -15$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// h: (x - 4)/2 (Variation: (x - 5)/3 for x = -25)
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $\\frac{x - 5}{3}$ for $x = -25$.',
  options: ['$-10$', '$-6$', '$10$', '$6$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Substitute $x = -25$ into the expression:</p>
    <p>$$\\frac{x - 5}{3} = \\frac{-25 - 5}{3}$$</p>
    <p><strong>Step 2:</strong> Simplify the numerator first:</p>
    <p>$$-25 - 5 = -30$$</p>
    <p><strong>Step 3:</strong> Perform the division:</p>
    <p>$$\\frac{-30}{3} = -10$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});


// ========================================================
// Q3: Substitute m = -3, n = 5 and p = -60 (8 questions)
// ========================================================
const q3Config = { m: -3, n: 5, p: -60 };

// a: m + n
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: `Substitute $m = ${q3Config.m}$, $n = ${q3Config.n}$ and $p = ${q3Config.p}$ to evaluate the expression: $m + n$.`,
  options: ['$2$', '$-8$', '$-2$', '$8$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Substitute $m = -3$ and $n = 5$ into the expression:</p>
    <p>$$m + n = -3 + 5$$</p>
    <p><strong>Step 2:</strong> Add the integers:</p>
    <p>$$-3 + 5 = 2$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// b: m + p
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: `Substitute $m = ${q3Config.m}$, $n = ${q3Config.n}$ and $p = ${q3Config.p}$ to evaluate the expression: $m + p$.`,
  options: ['$-63$', '$-57$', '$63$', '$57$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Substitute $m = -3$ and $p = -60$ into the expression:</p>
    <p>$$m + p = -3 + (-60)$$</p>
    <p><strong>Step 2:</strong> Add the two negative numbers:</p>
    <p>$$-3 - 60 = -63$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// c: m - p
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: `Substitute $m = ${q3Config.m}$, $n = ${q3Config.n}$ and $p = ${q3Config.p}$ to evaluate the expression: $m - p$.`,
  options: ['$57$', '$-63$', '$-57$', '$63$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Substitute $m = -3$ and $p = -60$ into the expression:</p>
    <p>$$m - p = -3 - (-60)$$</p>
    <p><strong>Step 2:</strong> Simplify subtraction of negative number:</p>
    <p>$$-3 + 60 = 57$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// d: mp
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: `Substitute $m = ${q3Config.m}$, $n = ${q3Config.n}$ and $p = ${q3Config.p}$ to evaluate the expression: $mp$.`,
  options: ['$180$', '$-180$', '$63$', '$-63$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Substitute $m = -3$ and $p = -60$ into the multiplication:</p>
    <p>$$mp = (-3) \\times (-60)$$</p>
    <p><strong>Step 2:</strong> Two negative factors multiplied result in a positive product:</p>
    <p>$$(-3) \\times (-60) = 180$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// e: np
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: `Substitute $m = ${q3Config.m}$, $n = ${q3Config.n}$ and $p = ${q3Config.p}$ to evaluate the expression: $np$.`,
  options: ['$-300$', '$300$', '$-12$', '$12$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Substitute $n = 5$ and $p = -60$:</p>
    <p>$$np = 5 \\times (-60)$$</p>
    <p><strong>Step 2:</strong> Multiply positive by negative to get a negative product:</p>
    <p>$$5 \\times (-60) = -300$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// f: p/m
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: `Substitute $m = ${q3Config.m}$, $n = ${q3Config.n}$ and $p = ${q3Config.p}$ to evaluate the expression: $\\frac{p}{m}$.`,
  options: ['$20$', '$-20$', '$180$', '$-180$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Substitute $p = -60$ and $m = -3$ into the fraction:</p>
    <p>$$\\frac{p}{m} = \\frac{-60}{-3}$$</p>
    <p><strong>Step 2:</strong> Negative divided by negative is positive:</p>
    <p>$$\\frac{-60}{-3} = 20$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// g: mnp
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: `Substitute $m = ${q3Config.m}$, $n = ${q3Config.n}$ and $p = ${q3Config.p}$ to evaluate the expression: $mnp$.`,
  options: ['$900$', '$-900$', '$180$', '$-180$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Substitute $m = -3$, $n = 5$, and $p = -60$ into the expression:</p>
    <p>$$mnp = (-3) \\times 5 \\times (-60)$$</p>
    <p><strong>Step 2:</strong> Multiply from left to right:</p>
    <p>$$(-3) \\times 5 = -15$$</p>
    <p><strong>Step 3:</strong> Multiply the result by $-60$:</p>
    <p>$$(-15) \\times (-60) = 900$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// h: p/n
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: `Substitute $m = ${q3Config.m}$, $n = ${q3Config.n}$ and $p = ${q3Config.p}$ to evaluate the expression: $\\frac{p}{n}$.`,
  options: ['$-12$', '$12$', '$-300$', '$300$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Substitute $p = -60$ and $n = 5$ into the fraction:</p>
    <p>$$\\frac{p}{n} = \\frac{-60}{5}$$</p>
    <p><strong>Step 2:</strong> Divide to find the quotient:</p>
    <p>$$\\frac{-60}{5} = -12$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});


// ========================================================
// Q4: Evaluate expressions for x = -3 (6 questions)
// ========================================================
// a: 5x + 4 -> 4x + 6 for x = -3
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $4x + 6$ for $x = -3$.',
  options: ['$-6$', '$18$', '$-18$', '$6$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p>$$4x + 6 = 4 \\times (-3) + 6$$</p>
    <p>$$= -12 + 6$$</p>
    <p>$$= -6$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// b: -5x + 4 -> -3x + 8 for x = -3
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $-3x + 8$ for $x = -3$.',
  options: ['$17$', '$-1$', '$1$', '$-17$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p>$$-3x + 8 = -3 \\times (-3) + 8$$</p>
    <p>$$= 9 + 8$$</p>
    <p>$$= 17$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// c: 5(x + 4) -> 6(x + 5) for x = -3
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $6(x + 5)$ for $x = -3$.',
  options: ['$12$', '$-13$', '$48$', '$-48$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p>$$6(x + 5) = 6(-3 + 5)$$</p>
    <p>$$= 6(2)$$</p>
    <p>$$= 12$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// d: -5(x + 4) -> -4(x + 7) for x = -3
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $-4(x + 7)$ for $x = -3$.',
  options: ['$-16$', '$16$', '$-40$', '$40$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p>$$-4(x + 7) = -4(-3 + 7)$$</p>
    <p>$$= -4(4)$$</p>
    <p>$$= -16$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// e: -5x^2 -> -3x^2 for x = -3
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $-3x^2$ for $x = -3$.',
  options: ['$-27$', '$27$', '$-81$', '$81$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Square the integer first according to order of operations:</p>
    <p>$$x^2 = (-3)^2 = 9$$</p>
    <p><strong>Step 2:</strong> Multiply by the coefficient $-3$:</p>
    <p>$$-3 \\times 9 = -27$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// f: (-5x)^2 -> (-2x)^2 for x = -3
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $(-2x)^2$ for $x = -3$.',
  options: ['$36$', '$-36$', '$12$', '$-12$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Calculate the expression inside the brackets first:</p>
    <p>$$-2x = -2 \\times (-3) = 6$$</p>
    <p><strong>Step 2:</strong> Square the result:</p>
    <p>$$6^2 = 36$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});


// ========================================================
// Q5: Evaluate expressions for a = -2 (9 questions)
// ========================================================
// a: 5 + 2a -> 6 + 3a for a = -2
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $6 + 3a$ for $a = -2$.',
  options: ['$0$', '$12$', '$-12$', '$18$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$6 + 3a = 6 + 3(-2)$$</p>
    <p>$$= 6 - 6 = 0$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// b: 6 - 3a -> 8 - 4a for a = -2
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $8 - 4a$ for $a = -2$.',
  options: ['$16$', '$0$', '$-16$', '$8$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$8 - 4a = 8 - 4(-2)$$</p>
    <p>$$= 8 + 8 = 16$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// c: 2a + 3 -> 5a + 12 for a = -2
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $5a + 12$ for $a = -2$.',
  options: ['$2$', '$-2$', '$22$', '$-22$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$5a + 12 = 5(-2) + 12$$</p>
    <p>$$= -10 + 12 = 2$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// d: 4 - a -> 9 - a for a = -2
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $9 - a$ for $a = -2$.',
  options: ['$11$', '$7$', '$-11$', '$-7$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$9 - a = 9 - (-2)$$</p>
    <p>$$= 9 + 2 = 11$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// e: (-a)^3 -> (-a)^3 for a = -2
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $(-a)^3$ for $a = -2$.',
  options: ['$8$', '$-8$', '$6$', '$-6$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$(-a)^3 = (-(-2))^3$$</p>
    <p>$$= (2)^3 = 8$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// f: -a^3 -> -a^3 for a = -2
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $-a^3$ for $a = -2$.',
  options: ['$8$', '$-8$', '$6$', '$-6$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$-a^3 = -(-2)^3$$</p>
    <p>$$= -(-8) = 8$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// g: (-2a)^2 -> (-3a)^2 for a = -2
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $(-3a)^2$ for $a = -2$.',
  options: ['$36$', '$-36$', '$12$', '$-12$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$(-3a)^2 = (-3(-2))^2$$</p>
    <p>$$= (6)^2 = 36$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// h: (-2a)^3 -> (-3a)^3 for a = -2
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'hard',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $(-3a)^3$ for $a = -2$.',
  options: ['$216$', '$-216$', '$18$', '$-18$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$(-3a)^3 = (-3(-2))^3$$</p>
    <p>$$= (6)^3 = 216$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// i: a^3 + 2 -> a^3 + 5 for a = -2
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $a^3 + 5$ for $a = -2$.',
  options: ['$-3$', '$13$', '$-1$', '$11$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$a^3 + 5 = (-2)^3 + 5$$</p>
    <p>$$= -8 + 5 = -3$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});


// ========================================================
// Q6: Evaluate expressions for z = -4 (6 questions)
// ========================================================
// a: -3z -> -5z for z = -4
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $-5z$ for $z = -4$.',
  options: ['$20$', '$-20$', '$9$', '$-9$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$-5z = -5 \\times (-4) = 20$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// b: z^4 -> z^4 for z = -4
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'hard',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $z^4$ for $z = -4$.',
  options: ['$256$', '$-256$', '$64$', '$-64$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$z^4 = (-4)^4$$</p>
    <p>$$= (-4) \\times (-4) \\times (-4) \\times (-4) = 256$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// c: 5 - 2z -> 7 - 3z for z = -4
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $7 - 3z$ for $z = -4$.',
  options: ['$19$', '$-5$', '$5$', '$-19$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$7 - 3z = 7 - 3 \\times (-4)$$</p>
    <p>$$= 7 + 12 = 19$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// d: (2z)^3 -> (2z)^3 for z = -3
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'hard',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $(2z)^3$ for $z = -3$.',
  options: ['$-216$', '$216$', '$-18$', '$18$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$(2z)^3 = (2 \\times (-3))^3$$</p>
    <p>$$= (-6)^3 = -216$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// e: (-z)^3 -> (-z)^3 for z = -4
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $(-z)^3$ for $z = -4$.',
  options: ['$64$', '$-64$', '$12$', '$-12$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$(-z)^3 = (-(-4))^3$$</p>
    <p>$$= (4)^3 = 64$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// f: -2z^2 -> -3z^2 for z = -4
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $-3z^2$ for $z = -4$.',
  options: ['$-48$', '$48$', '$-144$', '$144$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$-3z^2 = -3 \\times (-4)^2$$</p>
    <p>$$= -3 \\times 16 = -48$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});


// ========================================================
// Q7: Substitute m = -30, n = -15 and p = 90 (8 questions)
// ========================================================
const q7Config = { m: -30, n: -15, p: 90 };

// a: m + n
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: `Substitute $m = ${q7Config.m}$, $n = ${q7Config.n}$ and $p = ${q7Config.p}$ to evaluate: $m + n$.`,
  options: ['$-45$', '$-15$', '$45$', '$15$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$m + n = -30 + (-15) = -45$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// b: p + m
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: `Substitute $m = ${q7Config.m}$, $n = ${q7Config.n}$ and $p = ${q7Config.p}$ to evaluate: $p + m$.`,
  options: ['$60$', '$-60$', '$120$', '$-120$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$p + m = 90 + (-30) = 60$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// c: n - p
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: `Substitute $m = ${q7Config.m}$, $n = ${q7Config.n}$ and $p = ${q7Config.p}$ to evaluate: $n - p$.`,
  options: ['$-105$', '$75$', '$-75$', '$105$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$n - p = -15 - 90 = -105$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// d: mn
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: `Substitute $m = ${q7Config.m}$, $n = ${q7Config.n}$ and $p = ${q7Config.p}$ to evaluate: $mn$.`,
  options: ['$450$', '$-450$', '$45$', '$-45$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$mn = (-30) \\times (-15) = 450$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// e: mp
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: `Substitute $m = ${q7Config.m}$, $n = ${q7Config.n}$ and $p = ${q7Config.p}$ to evaluate: $mp$.`,
  options: ['$-2700$', '$2700$', '$-120$', '$120$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$mp = (-30) \\times 90 = -2700$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// f: m/p
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: `Substitute $m = ${q7Config.m}$, $n = ${q7Config.n}$ and $p = ${q7Config.p}$ to evaluate: $\\frac{m}{p}$.`,
  options: ['$-\\frac{1}{3}$', '$\\frac{1}{3}$', '$-3$', '$3$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$\\frac{m}{p} = \\frac{-30}{90} = -\\frac{30}{90} = -\\frac{1}{3}$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// g: p/m
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: `Substitute $m = ${q7Config.m}$, $n = ${q7Config.n}$ and $p = ${q7Config.p}$ to evaluate: $\\frac{p}{m}$.`,
  options: ['$-3$', '$3$', '$2700$', '$-2700$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$\\frac{p}{m} = \\frac{90}{-30} = -3$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// h: mnp
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'hard',
  isActive: true,
  isManual: true,
  question: `Substitute $m = ${q7Config.m}$, $n = ${q7Config.n}$ and $p = ${q7Config.p}$ to evaluate: $mnp$.`,
  options: ['$40500$', '$-40500$', '$27000$', '$-27000$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$mnp = (-30) \\times (-15) \\times 90$$</p>
    <p>$$= 450 \\times 90 = 40500$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});


// ========================================================
// Q8: Evaluate expressions for w = 5 (6 questions)
// ========================================================
// a: -40w -> -25w for w = 5
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $-25w$ for $w = 5$.',
  options: ['$-125$', '$125$', '$-20$', '$20$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$-25w = -25 \\times 5 = -125$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// b: -w^4 -> -w^4 for w = 5
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'hard',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $-w^4$ for $w = 5$.',
  options: ['$-625$', '$625$', '$-20$', '$20$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$-w^4 = -(5^4) = -625$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// c: 10 - 2w -> 15 - 4w for w = 5
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $15 - 4w$ for $w = 5$.',
  options: ['$-5$', '$5$', '$-35$', '$35$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$15 - 4w = 15 - 4(5)$$</p>
    <p>$$= 15 - 20 = -5$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// d: (-2w)^3 -> (-3w)^3 for w = 5
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'hard',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $(-3w)^3$ for $w = 5$.',
  options: ['$-3375$', '$3375$', '$-45$', '$45$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$(-3w)^3 = (-3 \\times 5)^3$$</p>
    <p>$$= (-15)^3 = -3375$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// e: (-w)^3 + w^2 for w = 5
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'hard',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $(-w)^3 + w^2$ for $w = 5$.',
  options: ['$-100$', '$-150$', '$100$', '$150$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$(-w)^3 + w^2 = (-5)^3 + 5^2$$</p>
    <p>$$= -125 + 25 = -100$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// f: w^3 - 10w^2 -> w^3 - 8w^2 for w = 5
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $w^3 - 8w^2$ for $w = 5$.',
  options: ['$-75$', '$75$', '$-175$', '$175$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$w^3 - 8w^2 = 5^3 - 8 \\times 5^2$$</p>
    <p>$$= 125 - 8(25)$$</p>
    <p>$$= 125 - 200 = -75$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});


// ========================================================
// Q9: Evaluate expressions for w = -3 (6 questions)
// ========================================================
// a: -20w -> -15w for w = -3
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $-15w$ for $w = -3$.',
  options: ['$45$', '$-45$', '$18$', '$-18$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$-15w = -15 \\times (-3) = 45$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// b: -w^4 -> -w^4 for w = -3
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'hard',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $-w^4$ for $w = -3$.',
  options: ['$-81$', '$81$', '$-12$', '$12$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$-w^4 = -((-3)^4)$$</p>
    <p>$$= -(81) = -81$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// c: 10 - 2w -> 12 - 5w for w = -3
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $12 - 5w$ for $w = -3$.',
  options: ['$27$', '$-3$', '$3$', '$-27$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$12 - 5w = 12 - 5(-3)$$</p>
    <p>$$= 12 + 15 = 27$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// d: (-2w)^3 -> (-2w)^3 for w = -3
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'hard',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $(-2w)^3$ for $w = -3$.',
  options: ['$216$', '$-216$', '$18$', '$-18$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$(-2w)^3 = (-2 \\times (-3))^3$$</p>
    <p>$$= (6)^3 = 216$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// e: (-w)^3 + w^2 for w = -3
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'hard',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $(-w)^3 + w^2$ for $w = -3$.',
  options: ['$36$', '$18$', '$-36$', '$-18$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$(-w)^3 + w^2 = (-(-3))^3 + (-3)^2$$</p>
    <p>$$= 3^3 + 9$$</p>
    <p>$$= 27 + 9 = 36$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// f: w^3 - 10w^2 -> w^3 - 5w^2 for w = -3
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Evaluate the expression $w^3 - 5w^2$ for $w = -3$.',
  options: ['$-72$', '$72$', '$-18$', '$18$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>$$w^3 - 5w^2 = (-3)^3 - 5 \\times (-3)^2$$</p>
    <p>$$= -27 - 5(9)$$</p>
    <p>$$= -27 - 45 = -72$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});


// ========================================================
// Q10: Buffy money scenario (5 questions)
// ========================================================
// Buffy has $1500, takes $y every day.
// a_i: 1 day
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Buffy has $\\$1500$ in a bank account. She takes $\\$y$ from the bank account every day. Write an expression for the amount of money she has in the account after $1$ day.',
  options: ['$1500 - y$', '$1500 + y$', '$1500 - 2y$', '$1500y$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p>Buffy starts with $\\$1500$. After $1$ day, she has withdrawn $\\$y$ once. <br>
    The remaining balance is: <br>
    $$1500 - y$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// a_ii: 8 days
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Buffy has $\\$1500$ in a bank account. She takes $\\$y$ from the bank account every day. Write an expression for the amount of money she has in the account after $8$ days.',
  options: ['$1500 - 8y$', '$1500 + 8y$', '$1500 - y$', '$8(1500 - y)$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p>Buffy withdraws $\\$y$ every day. After $8$ days, the total amount withdrawn is:<br>
    $$8 \\times y = 8y$$</p>
    <p>Subtract this total withdrawal from the initial balance:<br>
    $$1500 - 8y$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// b_i: value after 8 days if y = 80
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Buffy has $\\$1500$ in a bank account and takes $\\$y$ from it every day. Find the value of her bank account after $8$ days if $y = 80$.',
  options: ['$\\$860$', '$\\$940$', '$\\$1420$', '$\\$1340$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Use the 8-day balance expression:<br>
    $$\\text{Balance} = 1500 - 8y$$</p>
    <p><strong>Step 2:</strong> Substitute $y = 80$ into the expression:<br>
    $$\\text{Balance} = 1500 - 8(80)$$</p>
    <p><strong>Step 3:</strong> Calculate the values:<br>
    $$8 \\times 80 = 640$$<br>
    $$1500 - 640 = 860$$</p>
    <p>Buffy has $\\$860$ remaining.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// b_ii: value after 8 days if y = 120
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Buffy has $\\$1500$ in a bank account and takes $\\$y$ from it every day. Find the value of her bank account after $8$ days if $y = 120$.',
  options: ['$\\$540$', '$\\$960$', '$\\$640$', '$\\$480$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Substitute $y = 120$ into the 8-day balance expression:<br>
    $$\\text{Balance} = 1500 - 8(120)$$</p>
    <p><strong>Step 2:</strong> Multiply and subtract:<br>
    $$8 \\times 120 = 960$$<br>
    $$1500 - 960 = 540$$</p>
    <p>Buffy has $\\$540$ remaining.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// b_iii: value after 8 days if y = 150
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Buffy has $\\$1500$ in a bank account and takes $\\$y$ from it every day. Find the value of her bank account after $8$ days if $y = 150$.',
  options: ['$\\$300$', '$\\$1200$', '$\\$450$', '$\\$0$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Substitute $y = 150$ into the 8-day balance expression:<br>
    $$\\text{Balance} = 1500 - 8(150)$$</p>
    <p><strong>Step 2:</strong> Calculate:<br>
    $$8 \\times 150 = 1200$$<br>
    $$1500 - 1200 = 300$$</p>
    <p>Buffy has $\\$300$ remaining.</p>
  </div>`,
  createdAt: new Date().toISOString()
});


// ========================================================
// Q11: Room temperature scenario (3 questions)
// ========================================================
// Temperature in room drops by t °C every hour. At 12 p.m. it is 28 °C.
// a_i: 2 p.m.
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'The temperature in a room drops by $t^\\circ\\text{C}$ every hour. The temperature in the room at $12\\text{ p.m.}$ is $28^\\circ\\text{C}$. Write an expression for the temperature at $2\\text{ p.m.}$',
  options: ['$28 - 2t$', '$28 + 2t$', '$28 - t$', '$28 - 14t$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Determine the elapsed time from $12\\text{ p.m.}$ to $2\\text{ p.m.}$:<br>
    $$\\text{Time} = 2\\text{ hours}$$</p>
    <p><strong>Step 2:</strong> In $2$ hours, the total temperature drop is:<br>
    $$2 \\times t = 2t^\\circ\\text{C}$$</p>
    <p><strong>Step 3:</strong> Subtract the drop from the initial temperature:<br>
    $$28 - 2t$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// a_ii: 8 p.m.
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'The temperature in a room drops by $t^\\circ\\text{C}$ every hour. The temperature in the room at $12\\text{ p.m.}$ is $28^\\circ\\text{C}$. Write an expression for the temperature at $8\\text{ p.m.}$',
  options: ['$28 - 8t$', '$28 + 8t$', '$28 - t$', '$8(28 - t)$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Determine elapsed time from $12\\text{ p.m.}$ to $8\\text{ p.m.}$:<br>
    $$\\text{Time} = 8\\text{ hours}$$</p>
    <p><strong>Step 2:</strong> Write the expression for the total drop:<br>
    $$8t^\\circ\\text{C}$$</p>
    <p><strong>Step 3:</strong> The resulting temperature expression is:<br>
    $$28 - 8t$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// b: value at 6 p.m. if t = 3
questions.push({
  chapterId: 'y7-11',
  chapterTitle: 'Chapter 11: Linear equations',
  topicId: 'y7-11a',
  topicCode: '11A',
  topicTitle: 'Substitution with integers',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'The temperature in a room drops by $t^\\circ\\text{C}$ every hour. The temperature in the room at $12\\text{ p.m.}$ is $28^\\circ\\text{C}$. If $t = 3$, what will the temperature be at $6\\text{ p.m.}$?',
  options: ['$10^\\circ\\text{C}$', '$18^\\circ\\text{C}$', '$46^\\circ\\text{C}$', '$22^\\circ\\text{C}$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> The time elapsed from $12\\text{ p.m.}$ to $6\\text{ p.m.}$ is $6\\text{ hours}$.</p>
    <p><strong>Step 2:</strong> Use the general drop expression for $6\\text{ hours}$:<br>
    $$\\text{Temperature} = 28 - 6t$$</p>
    <p><strong>Step 3:</strong> Substitute $t = 3$ into the equation:<br>
    $$\\text{Temperature} = 28 - 6(3)$$</p>
    <p><strong>Step 4:</strong> Calculate:<br>
    $$6 \\times 3 = 18$$<br>
    $$28 - 18 = 10^\\circ\\text{C}$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});


console.log('Total combined Chapter 11 questions built:', questions.length);

// Generate file content
const output = `import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = ${JSON.stringify(questions, null, 2)};

export const importYear7Ch11A = async (forceReset = false) => {
  console.log('[Ch11A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting existing Y7 Ch11 (11a to 11d) questions...');
      const topicsToDelete = ['y7-11a', 'y7-11b', 'y7-11c', 'y7-11d'];
      for (const tId of topicsToDelete) {
        const existingSnap = await getDocs(query(qRef, where('topicId', '==', tId)));
        for (const doc of existingSnap.docs) {
          await deleteDoc(doc.ref);
        }
      }
      console.log('Deleted existing Ch11 topic questions.');
    }

    // To prevent duplicates, query all existing questions in Ch11 topics
    const existingQuestions = new Set();
    const topicsToCheck = ['y7-11a', 'y7-11b', 'y7-11c', 'y7-11d'];
    for (const tId of topicsToCheck) {
      const existingSnap = await getDocs(query(qRef, where('topicId', '==', tId)));
      existingSnap.docs.forEach(doc => {
        existingQuestions.add(doc.data().question.trim());
      });
    }
    
    for (const q of allQuestions) {
      if (!existingQuestions.has(q.question.trim())) {
        await addDoc(collection(db, 'questions'), q);
        importedCount++;
      }
    }
    console.log('[Ch11A Year 7 Import] SUCCESS! ' + importedCount + ' new questions imported.');
    return importedCount;
  } catch (error) {
    console.error('[Ch11A Year 7 Import] ERROR:', error);
    return 0;
  }
};
`;

fs.writeFileSync('src/scripts/importYear7Ch11A.js', output);
console.log('Done!');
