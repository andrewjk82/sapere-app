const fs = require('fs');

const qList = [];

// Helper to shuffle options (not strictly needed since we can just fix the answer position or hardcode)
// I will hardcode them for precise pedagogical control.

// 1. Factors
const q1 = [
  { n: 8, factors: '1, 2, 4, 8', bad1: '1, 2, 4', bad2: '2, 4, 8', bad3: '1, 2, 3, 4, 8' },
  { n: 18, factors: '1, 2, 3, 6, 9, 18', bad1: '1, 2, 3, 9, 18', bad2: '2, 3, 6, 9', bad3: '1, 2, 4, 6, 9, 18' },
  { n: 21, factors: '1, 3, 7, 21', bad1: '1, 3, 21', bad2: '3, 7, 21', bad3: '1, 2, 3, 7, 21' },
  { n: 20, factors: '1, 2, 4, 5, 10, 20', bad1: '1, 2, 4, 10, 20', bad2: '1, 2, 5, 10, 20', bad3: '1, 2, 4, 5, 8, 10, 20' },
  { n: 13, factors: '1, 13', bad1: '13', bad2: '1, 3, 13', bad3: '0, 1, 13' }
];
q1.forEach((q, i) => {
  qList.push({
    question: `Which of the following lists all the factors of $${q.n}$?`,
    options: [`\\{${q.factors}\\}`, `\\{${q.bad1}\\}`, `\\{${q.bad2}\\}`, `\\{${q.bad3}\\}`],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Understand factors</strong><br>A factor is a whole number that divides exactly into another number without leaving a remainder.</p><p><strong>Step 2: Find factor pairs</strong><br>For $${q.n}$, the pairs of factors are what multiply to give $${q.n}$. Listing them out gives $\\{${q.factors}\\}$.</p></div>`,
    difficulty: 'easy'
  });
});

// 2. Factors pairing
const q2 = [
  { n: 10, factors: '1, 2, 5, 10', bad1: '1, 5, 10', bad2: '2, 5', bad3: '1, 2, 10' },
  { n: 16, factors: '1, 2, 4, 8, 16', bad1: '1, 2, 8, 16', bad2: '1, 2, 4, 6, 8, 16', bad3: '2, 4, 8' },
  { n: 17, factors: '1, 17', bad1: '17', bad2: '1, 7, 17', bad3: '1, 3, 17' },
  { n: 24, factors: '1, 2, 3, 4, 6, 8, 12, 24', bad1: '1, 2, 3, 4, 6, 12, 24', bad2: '1, 2, 4, 6, 8, 12, 24', bad3: '1, 2, 3, 6, 8, 12, 24' },
  { n: 36, factors: '1, 2, 3, 4, 6, 9, 12, 18, 36', bad1: '1, 2, 3, 4, 6, 12, 18, 36', bad2: '1, 2, 3, 4, 9, 12, 18, 36', bad3: '1, 2, 3, 4, 6, 8, 9, 12, 18, 36' },
  { n: 15, factors: '1, 3, 5, 15', bad1: '1, 5, 15', bad2: '3, 5', bad3: '1, 3, 15' },
  { n: 28, factors: '1, 2, 4, 7, 14, 28', bad1: '1, 2, 4, 14, 28', bad2: '1, 2, 7, 14, 28', bad3: '1, 2, 4, 7, 8, 14, 28' },
  { n: 19, factors: '1, 19', bad1: '19', bad2: '1, 3, 19', bad3: '1, 9, 19' },
  { n: 27, factors: '1, 3, 9, 27', bad1: '1, 3, 27', bad2: '1, 9, 27', bad3: '1, 3, 7, 9, 27' },
  { n: 64, factors: '1, 2, 4, 8, 16, 32, 64', bad1: '1, 2, 4, 8, 32, 64', bad2: '1, 2, 8, 16, 32, 64', bad3: '1, 2, 4, 8, 12, 16, 32, 64' },
  { n: 40, factors: '1, 2, 4, 5, 8, 10, 20, 40', bad1: '1, 2, 4, 5, 10, 20, 40', bad2: '1, 2, 4, 8, 10, 20, 40', bad3: '1, 2, 4, 5, 8, 12, 20, 40' },
  { n: 50, factors: '1, 2, 5, 10, 25, 50', bad1: '1, 2, 5, 25, 50', bad2: '1, 2, 10, 25, 50', bad3: '1, 2, 4, 5, 10, 25, 50' }
];
q2.forEach(q => {
  qList.push({
    question: `Which list correctly identifies all the factors of $${q.n}$?`,
    options: [`\\{${q.factors}\\}`, `\\{${q.bad1}\\}`, `\\{${q.bad2}\\}`, `\\{${q.bad3}\\}`],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Use factor pairing</strong><br>Write pairs of numbers that multiply to $${q.n}$.</p><p><strong>Step 2: Compile the list</strong><br>Combining all unique numbers from those pairs in ascending order gives $\\{${q.factors}\\}$.</p></div>`,
    difficulty: 'medium'
  });
});

// 3. Which have 4 as a factor?
qList.push({
  question: 'From the list $\\{8, 12, 14, 25, 30, 41, 48, 55, 60\\}$, which numbers have $4$ as a factor?',
  options: ['$\\{8, 12, 48, 60\\}$', '$\\{8, 12, 30, 48, 60\\}$', '$\\{8, 12, 14, 48\\}$', '$\\{12, 48, 60\\}$'],
  answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Check divisibility by 4</strong><br>A number has $4$ as a factor if it can be divided evenly by $4$.</p><p><strong>Step 2: Test each number</strong><br>$8 \\div 4 = 2$<br>$12 \\div 4 = 3$<br>$48 \\div 4 = 12$<br>$60 \\div 4 = 15$<br>The others ($14, 25, 30, 41, 55$) leave a remainder.</p></div>',
  difficulty: 'easy'
});

// 4. Which have 15 as a factor?
qList.push({
  question: 'From the list $\\{45, 135, 160, 210, 225, 250, 300\\}$, which numbers have $15$ as a factor?',
  options: ['$\\{45, 135, 210, 225, 300\\}$', '$\\{45, 135, 160, 225, 300\\}$', '$\\{45, 210, 225, 300\\}$', '$\\{135, 210, 225, 250, 300\\}$'],
  answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Divide by 15</strong><br>Test each number. Also note that numbers divisible by $15$ must be divisible by both $3$ and $5$.</p><p><strong>Step 2: Filter the list</strong><br>$45, 135, 210, 225, 300$ are all multiples of $15$. $160$ and $250$ are not divisible by $3$, so they are not multiples of $15$.</p></div>',
  difficulty: 'medium'
});

// 5. Multiples
const q5 = [
  { n: 7, ans: '7, 14, 21, 28, 35', bad1: '14, 21, 28, 35, 42', bad2: '7, 14, 21, 28, 36', bad3: '1, 7, 14, 21, 28' },
  { n: 9, ans: '9, 18, 27, 36, 45', bad1: '18, 27, 36, 45, 54', bad2: '9, 18, 28, 36, 45', bad3: '1, 9, 18, 27, 36' },
  { n: 12, ans: '12, 24, 36, 48, 60', bad1: '24, 36, 48, 60, 72', bad2: '12, 24, 38, 48, 60', bad3: '1, 12, 24, 36, 48' },
  { n: 14, ans: '14, 28, 42, 56, 70', bad1: '28, 42, 56, 70, 84', bad2: '14, 28, 44, 56, 70', bad3: '14, 24, 34, 44, 54' },
  { n: 16, ans: '16, 32, 48, 64, 80', bad1: '32, 48, 64, 80, 96', bad2: '16, 32, 46, 64, 80', bad3: '1, 16, 32, 48, 64' },
  { n: 21, ans: '21, 42, 63, 84, 105', bad1: '42, 63, 84, 105, 126', bad2: '21, 42, 61, 84, 105', bad3: '21, 41, 61, 81, 101' }
];
q5.forEach(q => {
  qList.push({
    question: `Which of the following represents the first $5$ non-zero multiples of $${q.n}$?`,
    options: [`$${q.ans}$`, `$${q.bad1}$`, `$${q.bad2}$`, `$${q.bad3}$`],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Understand multiples</strong><br>Multiples of a number are found by multiplying it by integers ($1, 2, 3, \\dots$).</p><p><strong>Step 2: Calculate the first 5</strong><br>$${q.n} \\times 1 = ${q.n}$<br>$${q.n} \\times 2 = ${q.n * 2}$<br>$${q.n} \\times 3 = ${q.n * 3}$<br>$${q.n} \\times 4 = ${q.n * 4}$<br>$${q.n} \\times 5 = ${q.n * 5}$</p></div>`,
    difficulty: 'easy'
  });
});

// 6, 7
qList.push({
  question: 'Which of the following numbers are multiples of $13$? ($\\dots 39, 52, 70, 91, 115, 130 \\dots$)',
  options: ['$\\{39, 52, 91, 130\\}$', '$\\{39, 52, 70, 91\\}$', '$\\{52, 91, 115, 130\\}$', '$\\{39, 70, 91, 130\\}$'],
  answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Check divisibility by 13</strong><br>$39 \\div 13 = 3$<br>$52 \\div 13 = 4$<br>$91 \\div 13 = 7$<br>$130 \\div 13 = 10$<br>$70$ and $115$ do not divide evenly by $13$.</p></div>',
  difficulty: 'medium'
});

qList.push({
  question: 'Which of these numbers have $60$ as a multiple? ($\\dots 4, 5, 7, 8, 10, 12, 14, 15, 18, 20, 24, 30 \\dots$)',
  options: ['$\\{4, 5, 10, 12, 15, 20, 30\\}$', '$\\{4, 5, 8, 10, 12, 15, 20, 30\\}$', '$\\{4, 5, 10, 12, 14, 15, 20, 30\\}$', '$\\{5, 10, 15, 20, 24, 30\\}$'],
  answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Reword the question</strong><br>Asking which numbers have $60$ as a multiple is the same as asking which numbers are <em>factors</em> of $60$.</p><p><strong>Step 2: Identify factors of 60</strong><br>From the given list, $4, 5, 10, 12, 15, 20$, and $30$ divide evenly into $60$. Numbers like $7, 8, 14, 18, 24$ do not.</p></div>',
  difficulty: 'medium'
});

// 8. Product of two numbers > 10
const q8 = [
  { n: 288, ans: '12 \\times 24', bad1: '8 \\times 36', bad2: '9 \\times 32', bad3: '6 \\times 48' },
  { n: 450, ans: '15 \\times 30', bad1: '9 \\times 50', bad2: '10 \\times 45', bad3: '5 \\times 90' },
  { n: 169, ans: '13 \\times 13', bad1: '1 \\times 169', bad2: '169 \\times 1', bad3: '16 \\times 9' },
  { n: 600, ans: '15 \\times 40', bad1: '10 \\times 60', bad2: '8 \\times 75', bad3: '6 \\times 100' },
  { n: 289, ans: '17 \\times 17', bad1: '1 \\times 289', bad2: '19 \\times 19', bad3: '13 \\times 23' },
  { n: 360, ans: '12 \\times 30', bad1: '9 \\times 40', bad2: '10 \\times 36', bad3: '8 \\times 45' }
];
q8.forEach(q => {
  qList.push({
    question: `Which of the following is a correct expression of $${q.n}$ as a product of two factors, both of which are strictly greater than $10$?`,
    options: [`$${q.ans}$`, `$${q.bad1}$`, `$${q.bad2}$`, `$${q.bad3}$`],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Check the conditions</strong><br>The product must equal $${q.n}$ and BOTH factors must be $> 10$.</p><p><strong>Step 2: Evaluate options</strong><br>In $${q.ans}$, both numbers are greater than $10$. In the incorrect options, at least one factor is $10$ or smaller (or the math is incorrect).</p></div>`,
    difficulty: 'medium'
  });
});

// 9, 10
qList.push({
  question: 'What are the common factors of $16$ and $24$?',
  options: ['$\\{1, 2, 4, 8\\}$', '$\\{1, 2, 4, 6, 8\\}$', '$\\{1, 2, 4, 8, 16\\}$', '$\\{1, 2, 3, 4, 8\\}$'],
  answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: List factors of 16</strong><br>$\\{1, 2, 4, 8, 16\\}$</p><p><strong>Step 2: List factors of 24</strong><br>$\\{1, 2, 3, 4, 6, 8, 12, 24\\}$</p><p><strong>Step 3: Find common numbers</strong><br>The numbers present in both lists are $\\{1, 2, 4, 8\\}$.</p></div>',
  difficulty: 'easy'
});

qList.push({
  question: 'Which of the following lists the common multiples of $4$ and $6$ that are strictly less than $40$?',
  options: ['$\\{12, 24, 36\\}$', '$\\{12, 24, 30, 36\\}$', '$\\{24, 36\\}$', '$\\{12, 18, 24, 36\\}$'],
  answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Find the Lowest Common Multiple (LCM)</strong><br>The multiples of $4$ are $4, 8, 12, 16 \\dots$<br>The multiples of $6$ are $6, 12, 18 \\dots$<br>The LCM is $12$.</p><p><strong>Step 2: List multiples of the LCM</strong><br>The common multiples will be all multiples of $12$: $12, 24, 36, 48 \\dots$<br>Those less than $40$ are $\\{12, 24, 36\\}$.</p></div>',
  difficulty: 'medium'
});

// 11. Closest multiple
const q11 = [
  { n: 50, ans: 48, bad1: 56, bad2: 42, bad3: 50 },
  { n: 110, ans: 112, bad1: 104, bad2: 120, bad3: 108 },
  { n: 210, ans: 208, bad1: 216, bad2: 200, bad3: 210 },
  { n: 315, ans: 312, bad1: 320, bad2: 304, bad3: 318 }
];
q11.forEach(q => {
  qList.push({
    question: `Find the multiple of $8$ that is closest to $${q.n}$.`,
    options: [`$${q.ans}$`, `$${q.bad1}$`, `$${q.bad2}$`, `$${q.bad3}$`],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Divide by 8 to find bounds</strong><br>$${q.n} \\div 8$ gives a number between two integers.</p><p><strong>Step 2: Test the multiples</strong><br>The nearest multiples of $8$ are $${q.ans}$ and $${q.bad1}$.<br>Distance to $${q.ans}$ is $|${q.n} - ${q.ans}|$.<br>Distance to $${q.bad1}$ is $|${q.n} - ${q.bad1}|$.<br>$${q.ans}$ is closer.</p></div>`,
    difficulty: 'medium'
  });
});

// 12. Divisible by 12 and closest
const q12 = [
  { n: 80, ans: 84, bad1: 72, bad2: 96, bad3: 80 },
  { n: 160, ans: 156, bad1: 168, bad2: 144, bad3: 162 },
  { n: 130, ans: 132, bad1: 120, bad2: 144, bad3: 128 },
  { n: 70, ans: 72, bad1: 60, bad2: 84, bad3: 68 },
  { n: 400, ans: 396, bad1: 408, bad2: 384, bad3: 402 },
  { n: 800, ans: 804, bad1: 792, bad2: 816, bad3: 800 }
];
q12.forEach(q => {
  qList.push({
    question: `Find the number that is divisible by $12$ and closest to $${q.n}$.`,
    options: [`$${q.ans}$`, `$${q.bad1}$`, `$${q.bad2}$`, `$${q.bad3}$`],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Find surrounding multiples of 12</strong><br>Divide $${q.n}$ by $12$ to locate the nearest multiples.</p><p><strong>Step 2: Calculate distances</strong><br>The closest multiples are $${q.ans}$ and $${q.bad1}$. The absolute difference between $${q.ans}$ and $${q.n}$ is the smallest.</p></div>`,
    difficulty: 'hard'
  });
});

// 13, 14
qList.push({
  question: 'When $40$ is divided by each of the whole numbers from $1$ to $5$, which of these divisors leaves a remainder of $0$?',
  options: ['$\\{1, 2, 4, 5\\}$', '$\\{1, 2, 3, 4, 5\\}$', '$\\{1, 2, 5\\}$', '$\\{2, 4, 5\\}$'],
  answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Check each division</strong><br>$40 \\div 1 = 40$ (R0)<br>$40 \\div 2 = 20$ (R0)<br>$40 \\div 3 = 13$ (R1)<br>$40 \\div 4 = 10$ (R0)<br>$40 \\div 5 = 8$ (R0)</p><p><strong>Step 2: Conclusion</strong><br>The divisors leaving remainder $0$ are $1, 2, 4, 5$.</p></div>',
  difficulty: 'easy'
});
qList.push({
  question: 'Write down all the factors of $40$.',
  options: ['$\\{1, 2, 4, 5, 8, 10, 20, 40\\}$', '$\\{1, 2, 4, 5, 10, 20, 40\\}$', '$\\{1, 2, 4, 8, 10, 20, 40\\}$', '$\\{1, 2, 5, 8, 10, 20, 40\\}$'],
  answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Pair the factors</strong><br>$1 \\times 40 = 40$<br>$2 \\times 20 = 40$<br>$4 \\times 10 = 40$<br>$5 \\times 8 = 40$</p><p><strong>Step 2: Combine in order</strong><br>$\\{1, 2, 4, 5, 8, 10, 20, 40\\}$</p></div>',
  difficulty: 'medium'
});

qList.push({
  question: 'When $45$ is divided by each of the whole numbers from $1$ to $6$, which of these divisors leaves a remainder of $0$?',
  options: ['$\\{1, 3, 5\\}$', '$\\{1, 3, 5, 6\\}$', '$\\{1, 5\\}$', '$\\{3, 5\\}$'],
  answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Check division</strong><br>$45$ is divisible by $1$. It is not divisible by $2$ (odd number). $4+5=9$, so it is divisible by $3$. It ends in $5$, so it is divisible by $5$. It is not divisible by $4$ or $6$.</p></div>',
  difficulty: 'easy'
});
qList.push({
  question: 'Write down all the factors of $45$.',
  options: ['$\\{1, 3, 5, 9, 15, 45\\}$', '$\\{1, 3, 5, 15, 45\\}$', '$\\{1, 3, 9, 15, 45\\}$', '$\\{1, 5, 9, 15, 45\\}$'],
  answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Pair the factors</strong><br>$1 \\times 45 = 45$<br>$3 \\times 15 = 45$<br>$5 \\times 9 = 45$</p><p><strong>Step 2: Combine in order</strong><br>$\\{1, 3, 5, 9, 15, 45\\}$</p></div>',
  difficulty: 'medium'
});

// 15 Conceptual
qList.push({
  question: 'Which of the following best explains why the number $1$ is a factor of every whole number $N$?',
  options: [
    'Because dividing any whole number $N$ by $1$ results in $N$ with a remainder of zero ($N = 1 \\times N$).',
    'Because $1$ is the smallest whole number, so it fits inside all other numbers.',
    'Because $1$ is an odd number, and odd numbers divide everything.',
    'Because any number multiplied by $1$ becomes $1$.'
  ],
  answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Definition of a factor</strong><br>A factor divides exactly into another number with no remainder.</p><p><strong>Step 2: Apply to 1</strong><br>$N \\div 1 = N$ exactly, meaning $1$ is always a factor of $N$.</p></div>',
  difficulty: 'easy'
});

qList.push({
  question: 'Which of the following best explains why any non-zero whole number $N$ is a factor of $0$?',
  options: [
    'Because $0$ can be written as $N \\times 0$, leaving no remainder when divided by $N$.',
    'Because dividing by $0$ is always zero.',
    'Because $0$ is the smallest whole number.',
    'Because all non-zero numbers are multiples of $0$.'
  ],
  answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Definition of a factor</strong><br>If $A$ is a factor of $B$, then $A \\times k = B$ for some whole number $k$.</p><p><strong>Step 2: Apply to zero</strong><br>$N \\times 0 = 0$. This means $N$ divides exactly into $0$ with a quotient of $0$ and no remainder.</p></div>',
  difficulty: 'hard'
});

qList.push({
  question: 'What are all the factors of $1$?',
  options: ['$\\{1\\}$', '$\\{0, 1\\}$', 'None', '$\\{1, 2\\}$'],
  answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Find numbers that multiply to 1</strong><br>The only whole numbers that multiply to $1$ are $1 \\times 1$.</p><p><strong>Step 2: Compile the list</strong><br>The only factor is $1$.</p></div>',
  difficulty: 'easy'
});

qList.push({
  question: 'Which of the following best explains why zero is a multiple of every whole number $N$?',
  options: [
    'Because any whole number $N$ multiplied by $0$ yields $0$.',
    'Because zero is an even number.',
    'Because you cannot divide by zero.',
    'Because zero is less than $N$.'
  ],
  answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Definition of a multiple</strong><br>A multiple of $N$ is formed by multiplying $N$ by any whole number.</p><p><strong>Step 2: Apply to zero</strong><br>Since $N \\times 0 = 0$, $0$ fits the definition of being a multiple of $N$.</p></div>',
  difficulty: 'medium'
});

// 16 Perfect numbers
qList.push({
  question: 'A "perfect number" is a number that equals the sum of its own factors (excluding itself). The first perfect number is $6$ (since $1+2+3=6$). The second perfect number is $28$. Which of the following correctly shows that $28$ is a perfect number?',
  options: [
    'The factors of $28$ (excluding $28$) are $1, 2, 4, 7,$ and $14$, and their sum is $28$.',
    'The factors of $28$ (excluding $28$) are $1, 2, 4, 14,$ and $28$, and their sum is $49$.',
    'The multiples of $28$ are $1, 2, 4, 7,$ and $14$.',
    'The prime factors of $28$ are $2$ and $7$, and $2 \\times 14 = 28$.'
  ],
  answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: List the factors of 28</strong><br>$\\{1, 2, 4, 7, 14, 28\\}$.</p><p><strong>Step 2: Exclude the number itself</strong><br>The "proper factors" are $1, 2, 4, 7, 14$.</p><p><strong>Step 3: Sum them up</strong><br>$1 + 2 + 4 + 7 + 14 = 28$. Because the sum equals the number, $28$ is a perfect number.</p></div>',
  difficulty: 'hard'
});

qList.push({
  question: 'The next perfect number after $28$ is $496$. Which of the following represents the sum of the proper factors (factors excluding the number itself) of $496$?',
  options: [
    '$1 + 2 + 4 + 8 + 16 + 31 + 62 + 124 + 248 = 496$',
    '$1 + 2 + 4 + 8 + 16 + 32 + 64 + 128 + 256 = 496$',
    '$1 + 3 + 9 + 27 + 81 + 124 + 251 = 496$',
    '$2 + 4 + 8 + 16 + 31 + 62 + 124 + 248 = 495$'
  ],
  answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Find factors of 496</strong><br>Dividing by $2$: $248$. Dividing by $2$: $124$. By $2$: $62$. By $2$: $31$ (prime).</p><p><strong>Step 2: List all proper factors</strong><br>$1, 2, 4, 8, 16, 31, 62, 124, 248$.</p><p><strong>Step 3: Verify the sum</strong><br>$1 + 2 + 4 + 8 + 16 + 31 + 62 + 124 + 248 = 496$.</p></div>',
  difficulty: 'hard'
});

// 17 Odd number of factors
qList.push({
  question: 'Why does the number $36$ have an odd number of factors?',
  options: [
    'Because it is a perfect square, so one of its factor pairs consists of a number multiplied by itself ($6 \\times 6$), which is counted only once.',
    'Because it is an even number, and all even numbers have an odd number of factors.',
    'Because its digits ($3+6$) add up to $9$, which is an odd number.',
    'Because it has only prime factors.'
  ],
  answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: List the factors of 36</strong><br>$\\{1, 2, 3, 4, 6, 9, 12, 18, 36\\}$. There are $9$ factors (an odd amount).</p><p><strong>Step 2: Analyze the pairs</strong><br>$1 \\times 36$<br>$2 \\times 18$<br>$3 \\times 12$<br>$4 \\times 9$<br>$6 \\times 6$<br>Because $6$ is paired with itself, it does not contribute two distinct factors, leaving the total count odd.</p></div>',
  difficulty: 'medium'
});

qList.push({
  question: 'What is the next whole number after $36$ to have an odd number of factors?',
  options: ['$49$', '$40$', '$38$', '$64$'],
  answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Understand the rule</strong><br>Only perfect squares have an odd number of factors.</p><p><strong>Step 2: Find the next perfect square</strong><br>$36$ is $6 \\times 6$. The next whole number squared is $7 \\times 7 = 49$.</p></div>',
  difficulty: 'hard'
});

qList.push({
  question: 'What is the largest two-digit number with an odd number of factors?',
  options: ['$81$', '$99$', '$96$', '$100$'],
  answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Apply the rule</strong><br>Numbers with an odd number of factors are perfect squares.</p><p><strong>Step 2: Find the largest two-digit perfect square</strong><br>$9^2 = 81$.<br>$10^2 = 100$ (which has $3$ digits).<br>Therefore, $81$ is the largest.</p></div>',
  difficulty: 'hard'
});

let fileContent = `import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = [
`;

qList.forEach(q => {
  fileContent += `  {
    chapterId: 'y7-2',
    topicId: 'y7-2a',
    topicCode: '2A',
    topicTitle: 'Factors and multiples',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: '${q.difficulty}',
    isManual: true,
    isActive: true,
    question: \`${q.question.replace(/\\/g, '\\\\')}\`,
    options: ${JSON.stringify(q.options)},
    answer: ${q.answer},
    solution: \`${q.solution.replace(/\\/g, '\\\\')}\`,
    createdAt: new Date().toISOString()
  },
`;
});

fileContent += `];

export const importYear7Ch2A = async (forceReset = false) => {
  console.log('[Ch2A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    if (forceReset) {
      const oldSnap = await getDocs(query(qRef, where('topicId', '==', 'y7-2a')));
      for (const d of oldSnap.docs) { await deleteDoc(d.ref); }
    }
    const existingSnap = await getDocs(query(qRef, where('topicId', '==', 'y7-2a')));
    const existingQuestions = new Set(existingSnap.docs.map(doc => doc.data().question.trim()));
    
    for (const q of allQuestions) {
      if (!existingQuestions.has(q.question.trim())) {
        await addDoc(collection(db, 'questions'), q);
        importedCount++;
      }
    }
  } catch (error) { 
    console.error(error); 
    throw error; 
  }
  return importedCount;
};
`;

fs.writeFileSync('src/scripts/importYear7Ch2A.js', fileContent);
console.log('Generated src/scripts/importYear7Ch2A.js with ' + qList.length + ' questions.');

const runnerScript = `import { importYear7Ch2A } from './importYear7Ch2A.js';

const run = async () => {
  try {
    const added = await importYear7Ch2A(true);
    console.log(\`Successfully added \${added} questions for Year 7 Ch 2A.\`);
    process.exit(0);
  } catch (err) {
    console.error('Error running import:', err);
    process.exit(1);
  }
};

run();
`;

fs.writeFileSync('src/scripts/runImportYear7Ch2A.js', runnerScript);
console.log('Runner script created.');
