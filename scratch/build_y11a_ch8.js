import fs from 'fs';

console.log('Generating 44 Index questions (Easy) for Year 11 Chapter 8A...');

const questions8A = [];

// ========================================================
// Q1: Word problem (Silverlake population growth) [2 questions]
// ========================================================
questions8A.push({
  chapterId: 'y11a-8', chapterTitle: 'Chapter 8: Exponential and logarithmic functions', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-8A', topicCode: '8A', topicTitle: 'Indices', difficulty: 'easy', type: 'multiple_choice',
  question: `The town of Silverlake had a small population in 1970, but the population has been increasing by a factor of $2$ every decade since then. By what factor had the population increased from its 1970 value in 1980, 1990, 2000, 2010, and 2020 respectively?`,
  options: [
    { text: '$2, 4, 8, 16, 32$', imageUrl: '' },
    { text: '$2, 3, 4, 5, 6$', imageUrl: '' },
    { text: '$1, 2, 4, 8, 16$', imageUrl: '' },
    { text: '$2, 4, 16, 256, 65536$', imageUrl: '' }
  ],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Understand the decade intervals**
The years correspond to the following number of decades passed since 1970 ($d$):
- **1980**: $1$ decade passed
- **1990**: $2$ decades passed
- **2000**: $3$ decades passed
- **2010**: $4$ decades passed
- **2020**: $5$ decades passed

**Step 2: State the population scaling formula**
Since the population increases by a factor of $2$ every decade, the increase factor after $d$ decades is:
$$\\text{Factor} = 2^d$$

**Step 3: Calculate the factors for each decade**
- **1980 ($d=1$)**: $2^1 = 2$
- **1990 ($d=2$)**: $2^2 = 4$
- **2000 ($d=3$)**: $2^3 = 8$
- **2010 ($d=4$)**: $2^4 = 16$
- **2020 ($d=5$)**: $2^5 = 32$

**Step 4: Combine the results**
The population increase factors are:
$$2, \\ 4, \\ 8, \\ 16, \\ 32$$`
}, {
  chapterId: 'y11a-8', chapterTitle: 'Chapter 8: Exponential and logarithmic functions', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-8A', topicCode: '8A', topicTitle: 'Indices', difficulty: 'easy', type: 'multiple_choice',
  question: `The population of Silverlake was $5000$ in 1970 and has been doubling every decade. In which decade did the population first pass $1,000,000$?`,
  options: [
    { text: '$\\\text{2040 to 2050}$', imageUrl: '' },
    { text: '$\\\text{2020 to 2030}$', imageUrl: '' },
    { text: '$\\\text{2050 to 2060}$', imageUrl: '' },
    { text: '$\\\text{2030 to 2040}$', imageUrl: '' }
  ],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Formulate the population model**
Let $d$ be the number of decades since 1970. The population after $d$ decades is given by:
$$P(d) = 5000 \\times 2^d$$

**Step 2: Set up the inequality**
We want to find when the population exceeds $1,000,000$:
$$5000 \\times 2^d > 1,000,000$$

**Step 3: Simplify the inequality**
Divide both sides by $5000$:
$$2^d > \\frac{1,000,000}{5000}$$
$$2^d > 200$$

**Step 4: Determine the smallest integer $d$**
Let\'s calculate powers of $2$:
- $2^6 = 64$
- $2^7 = 128$
- $2^8 = 256$ (This is the first power of $2$ greater than $200$)

Thus, $d = 8$ decades.

**Step 5: Convert decades to calendar years**
$8$ decades after 1970 corresponds to:
$$1970 + 80 = 2050$$

So, the population exceeds $1,000,000$ at the end of the 8th decade, which means it first passes $1,000,000$ during the decade **2040 to 2050**.`
});

// ========================================================
// Q2: Tables of powers [2 questions]
// ========================================================
questions8A.push({
  chapterId: 'y11a-8', chapterTitle: 'Chapter 8: Exponential and logarithmic functions', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-8A', topicCode: '8A', topicTitle: 'Indices', difficulty: 'easy', type: 'multiple_choice',
  question: `Which of the following represents the correct sequence of powers of $3$ from $3^0$ to $3^5$?`,
  options: [
    { text: '$1, 3, 9, 27, 81, 243$', imageUrl: '' },
    { text: '$3, 9, 27, 81, 243, 729$', imageUrl: '' },
    { text: '$0, 3, 9, 27, 81, 243$', imageUrl: '' },
    { text: '$1, 3, 6, 9, 12, 15$', imageUrl: '' }
  ],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Calculate each power of 3**
- $3^0 = 1$ (Any non-zero number to power $0$ is $1$)
- $3^1 = 3$
- $3^2 = 3 \\times 3 = 9$
- $3^3 = 3 \\times 3 \\times 3 = 27$
- $3^4 = 27 \\times 3 = 81$
- $3^5 = 81 \\times 3 = 243$

**Step 2: Arrange the list**
The correct sequence is:
$$1, \\ 3, \\ 9, \\ 27, \\ 81, \\ 243$$`
}, {
  chapterId: 'y11a-8', chapterTitle: 'Chapter 8: Exponential and logarithmic functions', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-8A', topicCode: '8A', topicTitle: 'Indices', difficulty: 'easy', type: 'multiple_choice',
  question: `Express $16^3$ as a power of base $2$.`,
  options: [
    { text: '$2^{12}$', imageUrl: '' },
    { text: '$2^7$', imageUrl: '' },
    { text: '$2^8$', imageUrl: '' },
    { text: '$2^{64}$', imageUrl: '' }
  ],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Express $16$ as a power of $2$**
$$16 = 2^4$$

**Step 2: Substitute this into the expression**
$$16^3 = (2^4)^3$$

**Step 3: Apply the index law for power of a power**
Multiply the indices: $(a^m)^n = a^{m \\times n}$
$$16^3 = 2^{4 \\times 3} = 2^{12}$$`
});

// ========================================================
// Q3: Positive Index Values [4 questions]
// ========================================================
const q3Data = [
  { val: '3^4', ans: '81', opt: ['81', '12', '27', '64'], steps: '3 \\times 3 \\times 3 \\times 3' },
  { val: '5^3', ans: '125', opt: ['125', '15', '25', '75'], steps: '5 \\times 5 \\times 5' },
  { val: '\\left(\\frac{3}{4}\\right)^3', ans: '\\frac{27}{64}', opt: ['\\frac{27}{64}', '\\frac{9}{12}', '\\frac{9}{64}', '\\frac{27}{16}'], steps: '\\frac{3^3}{4^3} = \\frac{27}{64}' },
  { val: '\\left(\\frac{2}{5}\\right)^4', ans: '\\frac{16}{625}', opt: ['\\frac{16}{625}', '\\frac{8}{20}', '\\frac{16}{125}', '\\frac{8}{625}'], steps: '\\frac{2^4}{5^4} = \\frac{16}{625}' }
];

q3Data.forEach(d => {
  questions8A.push({
    chapterId: 'y11a-8', chapterTitle: 'Chapter 8: Exponential and logarithmic functions', year: 'Year 11', course: 'Advanced', isManual: true,
    topicId: 'y11a-8A', topicCode: '8A', topicTitle: 'Indices', difficulty: 'easy', type: 'multiple_choice',
    question: `Simplify: $${d.val}$`,
    options: d.opt.map(o => ({ text: `$${o}$`, imageUrl: '' })),
    answer: "0",
    solution: `### Step-by-Step Solution

**Step 1: Expand the expression**
$$${d.val} = ${d.steps}$$

**Step 2: State the final value**
$$${d.ans}$$`
  });
});

// ========================================================
// Q4: Negative and Zero Index Values [4 questions]
// ========================================================
const q4Data = [
  { val: '8^0', ans: '1', opt: ['1', '0', '8', '80'], steps: '\\text{Any non-zero base raised to the power of } 0 \\text{ is } 1.' },
  { val: '4^{-2}', ans: '\\frac{1}{16}', opt: ['\\frac{1}{16}', '-8', '-16', '16'], steps: '\\frac{1}{4^2} = \\frac{1}{16}' },
  { val: '2^{-4}', ans: '\\frac{1}{16}', opt: ['\\frac{1}{16}', '-8', '-16', '\\frac{1}{8}'], steps: '\\frac{1}{2^4} = \\frac{1}{16}' },
  { val: '10^{-3}', ans: '0.001', opt: ['0.001', '-30', '0.01', '-1000'], steps: '\\frac{1}{10^3} = \\frac{1}{1000} = 0.001' }
];

q4Data.forEach(d => {
  questions8A.push({
    chapterId: 'y11a-8', chapterTitle: 'Chapter 8: Exponential and logarithmic functions', year: 'Year 11', course: 'Advanced', isManual: true,
    topicId: 'y11a-8A', topicCode: '8A', topicTitle: 'Indices', difficulty: 'easy', type: 'multiple_choice',
    question: `Simplify: $${d.val}$`,
    options: d.opt.map(o => ({ text: `$${o}$`, imageUrl: '' })),
    answer: "0",
    solution: `### Step-by-Step Solution

**Step 1: Understand negative / zero index rules**
- Zero index: $a^0 = 1$
- Negative index: $a^{-n} = \\frac{1}{a^n}$

**Step 2: Evaluate the expression**
$$${d.val} = ${d.steps}$$

**Step 3: State final value**
$$${d.ans}$$`
  });
});

// ========================================================
// Q5: Reciprocals of Fractions with Negative Exponents [4 questions]
// ========================================================
const q5Data = [
  { val: '\\left(\\frac{1}{6}\\right)^{-1}', ans: '6', opt: ['6', '-6', '\\frac{1}{6}', '1'], base: '\\frac{1}{6}' },
  { val: '\\left(\\frac{3}{5}\\right)^{-1}', ans: '\\frac{5}{3}', opt: ['\\frac{5}{3}', '-\\frac{3}{5}', '\\frac{3}{5}', '\\frac{25}{9}'], base: '\\frac{3}{5}' },
  { val: '\\left(\\frac{8}{15}\\right)^{-1}', ans: '\\frac{15}{8}', opt: ['\\frac{15}{8}', '\\frac{8}{15}', '-\\frac{8}{15}', '1'], base: '\\frac{8}{15}' },
  { val: '(0.25)^{-1}', ans: '4', opt: ['4', '0.25', '-4', '\\frac{1}{4}'], base: '\\frac{1}{4}' }
];

q5Data.forEach(d => {
  questions8A.push({
    chapterId: 'y11a-8', chapterTitle: 'Chapter 8: Exponential and logarithmic functions', year: 'Year 11', course: 'Advanced', isManual: true,
    topicId: 'y11a-8A', topicCode: '8A', topicTitle: 'Indices', difficulty: 'easy', type: 'multiple_choice',
    question: `Simplify: $${d.val}$`,
    options: d.opt.map(o => ({ text: `$${o}$`, imageUrl: '' })),
    answer: "0",
    solution: `### Step-by-Step Solution

**Step 1: Apply the reciprocal index rule**
A negative exponent of $-1$ represents taking the reciprocal of the fraction:
$$\\left(\\frac{a}{b}\\right)^{-1} = \\frac{b}{a}$$

${d.base !== d.val ? `**Step 2: Convert decimal base if applicable**\n$$0.25 = \\frac{1}{4}$$\n` : ''}
**Step ${d.base !== d.val ? '3' : '2'}: Calculate the reciprocal**
$$\\text{Reciprocal of } ${d.base} \\text{ is } ${d.ans}$$`
  });
});

// ========================================================
// Q6: Advanced Negative Index Fractions & Bases [4 questions]
// ========================================================
const q6Data = [
  { val: '\\left(\\frac{1}{3}\\right)^{-2}', ans: '9', opt: ['9', '\\frac{1}{9}', '-9', '6'] },
  { val: '\\left(\\frac{3}{4}\\right)^{-2}', ans: '\\frac{16}{9}', opt: ['\\frac{16}{9}', '\\frac{9}{16}', '-\\frac{9}{16}', '\\frac{8}{6}'] },
  { val: '\\left(\\frac{2}{3}\\right)^{-3}', ans: '\\frac{27}{8}', opt: ['\\frac{27}{8}', '\\frac{8}{27}', '-\\frac{8}{27}', '\\frac{9}{6}'] },
  { val: '\\left(\\frac{4}{9}\\right)^0', ans: '1', opt: ['1', '0', '\\frac{4}{9}', '\\frac{9}{4}'] }
];

q6Data.forEach(d => {
  questions8A.push({
    chapterId: 'y11a-8', chapterTitle: 'Chapter 8: Exponential and logarithmic functions', year: 'Year 11', course: 'Advanced', isManual: true,
    topicId: 'y11a-8A', topicCode: '8A', topicTitle: 'Indices', difficulty: 'easy', type: 'multiple_choice',
    question: `Simplify: $${d.val}$`,
    options: d.opt.map(o => ({ text: `$${o}$`, imageUrl: '' })),
    answer: "0",
    solution: `### Step-by-Step Solution

**Step 1: Apply the negative exponent law for fractions**
$$\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n$$

**Step 2: Evaluate the positive power**
For $${d.val}$:
${d.val.includes('^0') ? '$$\\text{Any non-zero base to the power of } 0 \\text{ is } 1$$' : `$$= \\text{Reciprocal squared/cubed} = ${d.ans}$$`}

**Step 3: State final value**
$$${d.ans}$$`
  });
});

// ========================================================
// Q7: Multiplication Law [4 questions]
// ========================================================
const q7Data = [
  { val: 'b^9 \\times b^6', ans: 'b^{15}', opt: ['b^{15}', 'b^{54}', 'b^3', '9b^6'], law: 'b^{9+6} = b^{15}' },
  { val: '5^3 \\times 5^{-8}', ans: '5^{-5}', opt: ['5^{-5}', '5^{11}', '5^{-24}', '25^{-5}'], law: '5^{3 + (-8)} = 5^{-5}' },
  { val: 'y^{12} \\times y^{-8}', ans: 'y^4', opt: ['y^4', 'y^{20}', 'y^{-96}', 'y^8'], law: 'y^{12 + (-8)} = y^4' },
  { val: '6^5 \\times 6 \\times 6^{-5}', ans: '6', opt: ['6', '6^{11}', '1', '6^{-25}'], law: '6^{5 + 1 - 5} = 6^1 = 6' }
];

q7Data.forEach(d => {
  questions8A.push({
    chapterId: 'y11a-8', chapterTitle: 'Chapter 8: Exponential and logarithmic functions', year: 'Year 11', course: 'Advanced', isManual: true,
    topicId: 'y11a-8A', topicCode: '8A', topicTitle: 'Indices', difficulty: 'easy', type: 'multiple_choice',
    question: `Simplify, leaving your answer in index form: $${d.val}$`,
    options: d.opt.map(o => ({ text: `$${o}$`, imageUrl: '' })),
    answer: "0",
    solution: `### Step-by-Step Solution

**Step 1: State the multiplication index law**
When multiplying terms with the same base, add their indices:
$$a^m \\times a^n = a^{m + n}$$

**Step 2: Add indices**
For $${d.val}$:
$$${d.law}$$

**Step 3: State final form**
$$${d.ans}$$`
  });
});

// ========================================================
// Q8: Division Law [4 questions]
// ========================================================
const q8Data = [
  { val: '5^9 \\div 5^4', ans: '5^5', opt: ['5^5', '5^{13}', '5^{36}', '1^5'], law: '5^{9 - 4} = 5^5' },
  { val: 'y^{12} \\div y^{-3}', ans: 'y^{15}', opt: ['y^{15}', 'y^9', 'y^{-4}', 'y^{-36}'], law: 'y^{12 - (-3)} = y^{12 + 3} = y^{15}' },
  { val: '3^6 \\div 3^{-6}', ans: '3^{12}', opt: ['3^{12}', '3^0', '1', '3^{-36}'], law: '3^{6 - (-6)} = 3^{6 + 6} = 3^{12}' },
  { val: 'z \\div z^{15}', ans: 'z^{-14}', opt: ['z^{-14}', 'z^{14}', 'z^{15}', 'z^{-15}'], law: 'z^{1 - 15} = z^{-14}' }
];

q8Data.forEach(d => {
  questions8A.push({
    chapterId: 'y11a-8', chapterTitle: 'Chapter 8: Exponential and logarithmic functions', year: 'Year 11', course: 'Advanced', isManual: true,
    topicId: 'y11a-8A', topicCode: '8A', topicTitle: 'Indices', difficulty: 'easy', type: 'multiple_choice',
    question: `Simplify, leaving your answer in index form: $${d.val}$`,
    options: d.opt.map(o => ({ text: `$${o}$`, imageUrl: '' })),
    answer: "0",
    solution: `### Step-by-Step Solution

**Step 1: State the division index law**
When dividing terms with the same base, subtract their indices:
$$a^m \\div a^n = a^{m - n}$$

**Step 2: Subtract indices**
For $${d.val}$:
$$${d.law}$$

**Step 3: State final form**
$$${d.ans}$$`
  });
});

// ========================================================
// Q9: Power of a Power [4 questions]
// ========================================================
const q9Data = [
  { val: '(y^6)^4', ans: 'y^{24}', opt: ['y^{24}', 'y^{10}', 'y^2', '4y^6'], law: 'y^{6 \\times 4} = y^{24}' },
  { val: 'b^{-3} \\times b^{-3} \\times b^{-3}', ans: 'b^{-9}', opt: ['b^{-9}', 'b^{-27}', 'b^9', 'b^{-6}'], law: 'b^{-3 + (-3) + (-3)} = b^{-9}' },
  { val: '(c^{-3})^4', ans: 'c^{-12}', opt: ['c^{-12}', 'c^{-7}', 'c^{12}', 'c^{-1}'], law: 'c^{-3 \\times 4} = c^{-12}' },
  { val: '(x^{-3})^{-4}', ans: 'x^{12}', opt: ['x^{12}', 'x^{-12}', 'x^7', 'x^{-7}'], law: 'x^{-3 \\times (-4)} = x^{12}' }
];

q9Data.forEach(d => {
  questions8A.push({
    chapterId: 'y11a-8', chapterTitle: 'Chapter 8: Exponential and logarithmic functions', year: 'Year 11', course: 'Advanced', isManual: true,
    topicId: 'y11a-8A', topicCode: '8A', topicTitle: 'Indices', difficulty: 'easy', type: 'multiple_choice',
    question: `Simplify, leaving your answer in index form: $${d.val}$`,
    options: d.opt.map(o => ({ text: `$${o}$`, imageUrl: '' })),
    answer: "0",
    solution: `### Step-by-Step Solution

**Step 1: Apply index laws**
- Power of a Power: $(a^m)^n = a^{m \\times n}$
- Product: $a^m \\times a^n = a^{m+n}$

**Step 2: Evaluate**
For $${d.val}$:
$$${d.law}$$

**Step 3: State final form**
$$${d.ans}$$`
  });
});

// ========================================================
// Q10: Index Equations [6 questions]
// ========================================================
const q10Data = [
  { val: '4^x = 64', ans: '3', opt: ['3', '4', '16', '2'], base: '4^3 = 64' },
  { val: '3^x = 243', ans: '5', opt: ['5', '4', '6', '3'], base: '3^5 = 243' },
  { val: '5^x = \\frac{1}{5}', ans: '-1', opt: ['-1', '1', '5', '0'], base: '5^{-1} = \\frac{1}{5}' },
  { val: '4^x = \\frac{1}{64}', ans: '-3', opt: ['-3', '3', '-4', '\\frac{1}{3}'], base: '4^{-3} = \\frac{1}{64}' },
  { val: '\\left(\\frac{1}{5}\\right)^x = 25', ans: '-2', opt: ['-2', '2', '-5', '5'], base: '5^{-x} = 5^2' },
  { val: '15^x = 1', ans: '0', opt: ['0', '1', '15', '-1'], base: '15^0 = 1' }
];

q10Data.forEach(d => {
  questions8A.push({
    chapterId: 'y11a-8', chapterTitle: 'Chapter 8: Exponential and logarithmic functions', year: 'Year 11', course: 'Advanced', isManual: true,
    topicId: 'y11a-8A', topicCode: '8A', topicTitle: 'Indices', difficulty: 'easy', type: 'multiple_choice',
    question: `Solve the index equation: $${d.val}$`,
    options: d.opt.map(o => ({ text: `$x = ${o}$`, imageUrl: '' })),
    answer: "0",
    solution: `### Step-by-Step Solution

**Step 1: Express both sides with the same base**
For $${d.val}$:
$$${d.base}$$

**Step 2: Equate indices**
By matching exponents:
$$x = ${d.ans}$$`
  });
});

// ========================================================
// Q11: Bracket Expansion product / quotient laws [6 questions]
// ========================================================
const q11Data = [
  { val: '(4x)^2', ans: '16x^2', opt: ['16x^2', '4x^2', '8x^2', '16x'], law: '4^2 \\times x^2 = 16x^2' },
  { val: '(2st)^5', ans: '32s^5t^5', opt: ['32s^5t^5', '10s^5t^5', '2s^5t^5', '32st'], law: '2^5 \\times s^5 \\times t^5 = 32s^5t^5' },
  { val: '(5xyz)^3', ans: '125x^3y^3z^3', opt: ['125x^3y^3z^3', '15x^3y^3z^3', '5x^3y^3z^3', '125xyz'], law: '5^3 \\times x^3 \\times y^3 \\times z^3 = 125x^3y^3z^3' },
  { val: '\\left(\\frac{2}{y}\\right)^4', ans: '\\frac{16}{y^4}', opt: ['\\frac{16}{y^4}', '\\frac{8}{y^4}', '\\frac{16}{y}', '\\frac{2}{y^4}'], law: '\\\frac{2^4}{y^4} = \\frac{16}{y^4}' },
  { val: '\\left(\\frac{5a}{3}\\right)^3', ans: '\\frac{125a^3}{27}', opt: ['\\frac{125a^3}{27}', '\\frac{15a^3}{9}', '\\frac{125a}{27}', '\\frac{5a^3}{3}'], law: '\\frac{5^3 \\times a^3}{3^3} = \\frac{125a^3}{27}' },
  { val: '\\left(\\frac{4x}{3y}\\right)^3', ans: '\\frac{64x^3}{27y^3}', opt: ['\\frac{64x^3}{27y^3}', '\\frac{12x^3}{9y^3}', '\\frac{64x}{27y}', '\\frac{64x^3}{3y^3}'], law: '\\frac{4^3 \\times x^3}{3^3 \\times y^3} = \\frac{64x^3}{27y^3}' }
];

q11Data.forEach(d => {
  questions8A.push({
    chapterId: 'y11a-8', chapterTitle: 'Chapter 8: Exponential and logarithmic functions', year: 'Year 11', course: 'Advanced', isManual: true,
    topicId: 'y11a-8A', topicCode: '8A', topicTitle: 'Indices', difficulty: 'easy', type: 'multiple_choice',
    question: `Expand the brackets: $${d.val}$`,
    options: d.opt.map(o => ({ text: `$${o}$`, imageUrl: '' })),
    answer: "0",
    solution: `### Step-by-Step Solution

**Step 1: State bracket expansion law**
- Product raised to a power: $(ab)^n = a^n b^n$
- Quotient raised to a power: $\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$

**Step 2: Expand each component**
For $${d.val}$:
$$= ${d.ans}$$`
  });
});

console.log(`Successfully generated ${questions8A.length} Index questions.`);

// Write backup JSON
fs.writeFileSync('scratch/questions8A.json', JSON.stringify(questions8A, null, 2));

// Generate the fully unified import script content for Chapter 8
const outputCh8 = `import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp, getDocs, query, where, writeBatch } from 'firebase/firestore';

const chapterData = {
  chapterId: 'y11a-8',
  chapterTitle: 'Chapter 8: Exponential and logarithmic functions',
  year: 'Year 11',
  course: 'Advanced',
  isManual: true
};

export const questions8A = ${JSON.stringify(questions8A, null, 2)};

export const importYear11AdvCh8 = async (forceReset = false) => {
  console.log(\`Starting sync of Y11 Adv Ch8A (Total \${questions8A.length})...\` + '\\n' + \`Chapter: Exponential and logarithmic functions\`);
  try {
    const qSnap = await getDocs(query(collection(db, 'questions'), 
      where('chapterId', '==', 'y11a-8'),
      where('topicCode', '==', '8A')
    ));
    
    const batch = writeBatch(db);
    qSnap.forEach(d => batch.delete(d.ref));
    await batch.commit();
    console.log(\`Cleared \${qSnap.size} old questions under chapter y11a-8, topicCode 8A.\`);

    let count = 0;
    for (const q of questions8A) {
        await addDoc(collection(db, 'questions'), { 
          ...q, 
          createdAt: serverTimestamp(), 
          updatedAt: serverTimestamp(), 
          isActive: true 
        });
        count++;
    }
    console.log(\`Successfully imported \${count} questions.\`);
    return count;
  } catch (err) {
    console.error('Import failed:', err);
    throw err;
  }
};
`;

fs.writeFileSync('src/scripts/importYear11AdvCh8.js', outputCh8);
console.log('Successfully wrote Chapter 8 import script to src/scripts/importYear11AdvCh8.js!');
