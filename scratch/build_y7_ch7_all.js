const fs = require('fs');

const questions = [];

// ========================================================
// 1. ORIGINAL 63 PLACE VALUE & COMPARISON QUESTIONS (y7-7a)
// ========================================================

// Q1: Place values of 354.1809
questions.push({
  chapterId: 'y7-7',
  chapterTitle: 'Chapter 7: Decimals',
  topicId: 'y7-7a',
  topicCode: '7A',
  topicTitle: 'Place value and comparison of decimals',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'Using the place values of the digits, write the decimal number $354.1809$ as a sum of hundreds, tens, units, tenths, hundredths, thousandths and ten-thousandths.',
  options: [
    '$300 + 50 + 4 + \\frac{1}{10} + \\frac{8}{100} + \\frac{0}{1000} + \\frac{9}{10000}$',
    '$300 + 50 + 4 + \\frac{1}{100} + \\frac{8}{1000} + \\frac{9}{10000}$',
    '$3 + 5 + 4 + 0.1 + 0.08 + 0.009$',
    '$300 + 50 + 4 + \\frac{1}{10} + \\frac{8}{100} + \\frac{9}{1000}$'
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <ul>
      <li>The digit <strong>$3$</strong> is in the hundreds place: $3 \\times 100 = 300$</li>
      <li>The digit <strong>$5$</strong> is in the tens place: $5 \\times 10 = 50$</li>
      <li>The digit <strong>$4$</strong> is in the units place: $4 \\times 1 = 4$</li>
      <li>The digit <strong>$1$</strong> is in the tenths place: $\\frac{1}{10}$</li>
      <li>The digit <strong>$8$</strong> is in the hundredths place: $\\frac{8}{100}$</li>
      <li>The digit <strong>$0$</strong> is in the thousandths place: $\\frac{0}{1000}$</li>
      <li>The digit <strong>$9$</strong> is in the ten-thousandths place: $\\frac{9}{10000}$</li>
    </ul>
    <p>Combining these, we get: $300 + 50 + 4 + \\frac{1}{10} + \\frac{8}{100} + \\frac{0}{1000} + \\frac{9}{10000}$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// Q2: Write 6.148 as a fraction
questions.push({
  chapterId: 'y7-7',
  chapterTitle: 'Chapter 7: Decimals',
  topicId: 'y7-7a',
  topicCode: '7A',
  topicTitle: 'Place value and comparison of decimals',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'Write $6.148$ as a fraction whose denominator is a power of $10$.',
  options: [
    '\\frac{6148}{1000}',
    '\\frac{6148}{100}',
    '\\frac{6148}{10000}',
    '\\frac{6148}{10}'
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Count the number of decimal places in $6.148$. There are 3 digits after the decimal point ($1, 4, 8$).</p>
    <p><strong>Step 2:</strong> A decimal with 3 decimal places has a denominator of $10^3 = 1000$ when written as a fraction.</p>
    <p><strong>Step 3:</strong> Place the entire number (without the decimal point) in the numerator: $\\frac{6148}{1000}$.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// Q3: Write 69/1000 as a decimal
questions.push({
  chapterId: 'y7-7',
  chapterTitle: 'Chapter 7: Decimals',
  topicId: 'y7-7a',
  topicCode: '7A',
  topicTitle: 'Place value and comparison of decimals',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'Write $\\frac{69}{1000}$ as a decimal.',
  options: [
    '0.069',
    '0.69',
    '0.0069',
    '6.9'
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> The denominator is $1000$, which has 3 zeros.</p>
    <p><strong>Step 2:</strong> Dividing by $1000$ shifts the decimal point of the numerator ($69.0$) 3 places to the left:</p>
    <ul>
      <li>Shift 1: $6.9$</li>
      <li>Shift 2: $0.69$</li>
      <li>Shift 3: $0.069$</li>
    </ul>
    <p>Therefore, $\\frac{69}{1000} = 0.069$.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// Q4: Place value of digit 4 in different decimals (a-f)
const q4aData = [
  { val: '54.73', ans: 'Units', step: 'The digit 4 is directly to the left of the decimal point, representing the units (ones) place ($4 \\times 1$).' },
  { val: '3.84', ans: 'Hundredths', step: 'The digit 4 is the second digit to the right of the decimal point, representing the hundredths place ($\\frac{4}{100}$).' },
  { val: '0.41', ans: 'Tenths', step: 'The digit 4 is the first digit to the right of the decimal point, representing the tenths place ($\\frac{4}{10}$).' },
  { val: '47.09', ans: 'Tens', step: 'The digit 4 is in the tens place ($4 \\times 10 = 40$), representing four tens.' },
  { val: '0.004', ans: 'Thousandths', step: 'The digit 4 is the third digit to the right of the decimal point, representing the thousandths place ($\\frac{4}{1000}$).' },
  { val: '67.951842', ans: 'Hundred-thousandths', step: 'Counting the places to the right of the decimal: tenths (9), hundredths (5), thousandths (1), ten-thousandths (8), hundred-thousandths (4). Thus, it represents $\\frac{4}{100000}$.' }
];

q4aData.forEach((q, idx) => {
  const opts = ['Tenths', 'Hundredths', 'Units', 'Thousandths', 'Tens', 'Hundred-thousandths'];
  const filteredOpts = opts.filter(o => o !== q.ans);
  const finalOpts = [q.ans, ...filteredOpts.slice(0, 3)];

  questions.push({
    chapterId: 'y7-7',
    chapterTitle: 'Chapter 7: Decimals',
    topicId: 'y7-7a',
    topicCode: '7A',
    topicTitle: 'Place value and comparison of decimals',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: idx < 4 ? 'easy' : 'medium',
    isActive: true,
    isManual: true,
    question: `Write down the place value of the digit $4$ in the decimal $${q.val}$.`,
    options: finalOpts,
    answer: 0,
    solution: `<div style="text-align: left;">
      <p><strong>Step-by-step breakdown:</strong></p>
      <p>${q.step}</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

// Q5: Decimals made from digits 1, 3, 5, 7
questions.push({
  chapterId: 'y7-7',
  chapterTitle: 'Chapter 7: Decimals',
  topicId: 'y7-7a',
  topicCode: '7A',
  topicTitle: 'Place value and comparison of decimals',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Which of the following decimals can be formed using the digits $1, 3, 5, 7$ and a decimal point exactly once?',
  options: [
    '$13.57$',
    '$133.57$',
    '$1.35$',
    '$1.3577$'
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p>To form a valid decimal using the digits $1, 3, 5, 7$ and a decimal point exactly once, the number must contain exactly all four digits and one decimal point.</p>
    <ul>
      <li>$13.57$ uses $1, 3, 5, 7$ exactly once. (Valid!)</li>
      <li>$133.57$ repeats the digit 3. (Invalid!)</li>
      <li>$1.35$ is missing the digit 7. (Invalid!)</li>
      <li>$1.3577$ repeats the digit 7. (Invalid!)</li>
    </ul>
  </div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-7',
  chapterTitle: 'Chapter 7: Decimals',
  topicId: 'y7-7a',
  topicCode: '7A',
  topicTitle: 'Place value and comparison of decimals',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Which of the following is NOT a valid decimal that can be formed using the digits $2, 4, 6, 8$ and a decimal point exactly once?',
  options: [
    '$2.46$',
    '$2.468$',
    '$246.8$',
    '$24.68$'
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p>A valid number must contain all four digits $2, 4, 6, 8$ exactly once along with the decimal point.</p>
    <ul>
      <li>$2.46$ is missing the digit 8, making it invalid. (Correct Answer)</li>
      <li>$2.468$, $246.8$, and $24.68$ each contain exactly $2, 4, 6, 8$ once, which makes them valid.</li>
    </ul>
  </div>`,
  createdAt: new Date().toISOString()
});

// Q6: Closest whole numbers (a-f)
const q6aData = [
  { val: '4.09', ans: '4', step: 'Since the tenths digit is 0 (which is less than 5), we round down to the nearest whole number, which is $4$.' },
  { val: '4.8', ans: '5', step: 'Since the tenths digit is 8 (which is 5 or greater), we round up to the nearest whole number, which is $5$.' },
  { val: '2.17984', ans: '2', step: 'Since the tenths digit is 1 (less than 5), we round down to the nearest whole number, which is $2$.' },
  { val: '6.800002', ans: '7', step: 'Since the tenths digit is 8 (5 or greater), we round up to the nearest whole number, which is $7$.' },
  { val: '5.499', ans: '5', step: 'To find the closest whole number, look at the tenths place: it is 4 (less than 5). Thus we round down to $5$.' },
  { val: '7.09999', ans: '7', step: 'Looking at the tenths place: it is 0 (less than 5). Thus we round down to $7$.' }
];

q6aData.forEach((q, idx) => {
  const wrongAns = (parseInt(q.ans) + 1).toString();
  const wrongAns2 = (parseInt(q.ans) - 1).toString();
  const options = [q.ans, wrongAns, wrongAns2, q.val + '0'];

  questions.push({
    chapterId: 'y7-7',
    chapterTitle: 'Chapter 7: Decimals',
    topicId: 'y7-7a',
    topicCode: '7A',
    topicTitle: 'Place value and comparison of decimals',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Find the whole number closest to the decimal $${q.val}$.`,
    options: options,
    answer: 0,
    solution: `<div style="text-align: left;">
      <p><strong>Step-by-step breakdown:</strong></p>
      <p>${q.step}</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

// Q7: Larger of each pair (a-l)
const q7aData = [
  { a: '0.5', b: '0.42', ans: '0.5', step: 'Compare tenths place: 5 tenths is greater than 4 tenths. Thus $0.5 > 0.42$.' },
  { a: '2.7', b: '2.83', ans: '2.83', step: 'Compare tenths place: 8 tenths is greater than 7 tenths. Thus $2.83 > 2.7$.' },
  { a: '7.9', b: '7.09', ans: '7.9', step: 'Compare tenths place: 9 tenths is greater than 0 tenths. Thus $7.9 > 7.09$.' },
  { a: '4.82', b: '4.083', ans: '4.82', step: 'Compare tenths place: 8 tenths is greater than 0 tenths. Thus $4.82 > 4.083$.' },
  { a: '8.56', b: '8.5613', ans: '8.5613', step: 'Since $8.56 = 8.5600$, we compare the thousandths place: 1 thousandth is greater than 0. Thus $8.5613 > 8.56$.' },
  { a: '6.002', b: '6.2', ans: '6.2', step: 'Compare tenths place: 2 tenths is greater than 0 tenths. Thus $6.2 > 6.002$.' },
  { a: '9.88867', b: '9.453', ans: '9.88867', step: 'Compare tenths place: 8 tenths is greater than 4 tenths. Thus $9.88867 > 9.453$.' },
  { a: '4.58', b: '4.4', ans: '4.58', step: 'Compare tenths place: 5 tenths is greater than 4 tenths. Thus $4.58 > 4.4$.' },
  { a: '185.3468', b: '185.34', ans: '185.3468', step: 'Since $185.34 = 185.3400$, we compare thousandths place: 6 thousandths is greater than 0. Thus $185.3468 > 185.34$.' },
  { a: '12.4', b: '1.24', ans: '12.4', step: 'Compare whole number parts: 12 is greater than 1. Thus $12.4 > 1.24$.' },
  { a: '323.78658', b: '323.71189', ans: '323.78658', step: 'Compare tenths place (both are 7), then hundredths place: 8 hundredths is greater than 1 hundredth. Thus $323.78658 > 323.71189$.' },
  { a: '4.67', b: '4.59999', ans: '4.67', step: 'Compare tenths place: 6 tenths is greater than 5 tenths. Thus $4.67 > 4.59999$.' }
];

q7aData.forEach((q, idx) => {
  questions.push({
    chapterId: 'y7-7',
    chapterTitle: 'Chapter 7: Decimals',
    topicId: 'y7-7a',
    topicCode: '7A',
    topicTitle: 'Place value and comparison of decimals',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Which of the following numbers is the larger one: $${q.a}$ or $${q.b}$?`,
    options: [`$${q.ans}$`, `$${q.ans === q.a ? q.b : q.a}$`, 'They are equal', 'None of these'],
    answer: 0,
    solution: `<div style="text-align: left;">
      <p><strong>Step-by-step breakdown:</strong></p>
      <p>${q.step}</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

// Q8: Ordering numbers smallest to largest (a-d)
const q8aData = [
  { list: '3.4, 0.3, 9.264, 8.3, 5.09', sorted: '$0.3, 3.4, 5.09, 8.3, 9.264$', step: 'Compare the whole numbers: 0 is smallest, then 3, then 5, then 8, then 9. This instantly gives us: $0.3 < 3.4 < 5.09 < 8.3 < 9.264$.' },
  { list: '2.08, 2.84, 2.48, 2.8, 2.40', sorted: '$2.08, 2.40, 2.48, 2.8, 2.84$', step: 'All whole numbers are 2. Compare the decimal parts: 08 hundredths is smallest. Then 40 hundredths ($2.40$), then 48 hundredths ($2.48$), then 80 hundredths ($2.8$), then 84 hundredths ($2.84$).' },
  { list: '6.000034, 6.340000, 6.99, 6.5208673, 6.0859', sorted: '$6.000034, 6.0859, 6.340000, 6.5208673, 6.99$', step: 'Compare tenths: 6.0... are smallest. Comparing 6.000034 and 6.0859: 6.000034 has 0 hundredths, while 6.0859 has 8 hundredths. So $6.000034 < 6.0859$. Next is 6.34, then 6.52, then 6.99.' },
  { list: '5.55, 5.3, 5.8143, 5.777, 5.89463', sorted: '$5.3, 5.55, 5.777, 5.8143, 5.89463$', step: 'Compare tenths place: 3 tenths ($5.3$) < 5 tenths ($5.55$) < 7 tenths ($5.777$) < 8 tenths. Compare 5.8143 and 5.89463: 1 hundredth is less than 9 hundredths. So $5.8143 < 5.89463$.' }
];

q8aData.forEach((q, idx) => {
  const opts = [
    q.sorted,
    q.sorted.replace(/5\.09, 8\.3/, '8.3, 5.09').replace(/2\.40, 2\.48/, '2.48, 2.40').replace(/6\.0859, 6\.340000/, '6.340000, 6.0859').replace(/5\.777, 5\.8143/, '5.8143, 5.777'),
    q.sorted.replace(/0\.3, 3\.4/, '3.4, 0.3').replace(/2\.8, 2\.84/, '2.84, 2.8').replace(/6\.5208673, 6\.99/, '6.99, 6.5208673').replace(/5\.3, 5\.55/, '5.55, 5.3'),
    q.sorted.replace(/3\.4, 5\.09/, '5.09, 3.4').replace(/2\.08, 2\.40/, '2.40, 2.08').replace(/6\.000034, 6\.0859/, '6.0859, 6.000034').replace(/5\.8143, 5\.89463/, '5.89463, 5.8143')
  ];

  questions.push({
    chapterId: 'y7-7',
    chapterTitle: 'Chapter 7: Decimals',
    topicId: 'y7-7a',
    topicCode: '7A',
    topicTitle: 'Place value and comparison of decimals',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Order these numbers from smallest to largest: $${q.list}$.`,
    options: opts,
    answer: 0,
    solution: `<div style="text-align: left;">
      <p><strong>Step-by-step breakdown:</strong></p>
      <p>${q.step}</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

// Q9: Closer to 6 or closer to 7 (a-l)
const q9aData = [
  { val: '6.102534', ans: '6', step: 'tenths digit is 1 (less than 5), so it is closer to 6.' },
  { val: '6.99', ans: '7', step: 'tenths digit is 9 (5 or greater), so it is closer to 7.' },
  { val: '6.6', ans: '7', step: 'tenths digit is 6 (5 or greater), so it is closer to 7.' },
  { val: '6.52', ans: '7', step: 'tenths digit is 5 (5 or greater), so it is closer to 7.' },
  { val: '6.01', ans: '6', step: 'tenths digit is 0 (less than 5), so it is closer to 6.' },
  { val: '6.09879562', ans: '6', step: 'tenths digit is 0 (less than 5), so it is closer to 6.' },
  { val: '6.49', ans: '6', step: 'tenths digit is 4 (less than 5), so it is closer to 6.' },
  { val: '6.00003', ans: '6', step: 'tenths digit is 0 (less than 5), so it is closer to 6.' },
  { val: '6.499989', ans: '6', step: 'tenths digit is 4 (less than 5), so it is closer to 6.' },
  { val: '6.49494', ans: '6', step: 'tenths digit is 4 (less than 5), so it is closer to 6.' },
  { val: '6.83112', ans: '7', step: 'tenths digit is 8 (5 or greater), so it is closer to 7.' },
  { val: '6.12109', ans: '6', step: 'tenths digit is 1 (less than 5), so it is closer to 6.' }
];

q9aData.forEach((q, idx) => {
  questions.push({
    chapterId: 'y7-7',
    chapterTitle: 'Chapter 7: Decimals',
    topicId: 'y7-7a',
    topicCode: '7A',
    topicTitle: 'Place value and comparison of decimals',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `State whether the decimal $${q.val}$ is closer to $6$ or closer to $7$.`,
    options: [`Closer to $${q.ans}$`, `Closer to $${q.ans === '6' ? '7' : '6'}$`, 'Exactly halfway between $6$ and $7$', 'None of these'],
    answer: 0,
    solution: `<div style="text-align: left;">
      <p><strong>Step-by-step breakdown:</strong></p>
      <p>Compare the tenths place of $${q.val}$: ${q.step}</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

// Q10: 8 tenths conversions (a-f)
const q10aData = [
  { name: 'thousandths', ans: '800', step: '8 tenths = 800 thousandths. (multiply by 100)' },
  { name: 'hundredths', ans: '80', step: '8 tenths = 80 hundredths. (multiply by 10)' },
  { name: 'units', ans: '0.8', step: '8 tenths = 0.8 units. (divide by 10)' },
  { name: 'tens', ans: '0.08', step: '8 tenths = 0.08 tens. (divide by 100)' },
  { name: 'hundreds', ans: '0.008', step: '8 tenths = 0.008 hundreds. (divide by 1000)' },
  { name: 'thousands', ans: '0.0008', step: '8 tenths = 0.0008 thousands. (divide by 10000)' }
];

q10aData.forEach((q, idx) => {
  questions.push({
    chapterId: 'y7-7',
    chapterTitle: 'Chapter 7: Decimals',
    topicId: 'y7-7a',
    topicCode: '7A',
    topicTitle: 'Place value and comparison of decimals',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: idx < 3 ? 'easy' : 'medium',
    isActive: true,
    isManual: true,
    question: `Complete the statement: $8$ tenths = ____ ${q.name}.`,
    options: [`$${q.ans}$`, `$${(parseFloat(q.ans) * 10).toString()}$`, `$${(parseFloat(q.ans) / 10).toString()}$`, `$${(parseFloat(q.ans) * 100).toString()}$`],
    answer: 0,
    solution: `<div style="text-align: left;">
      <p><strong>Step-by-step breakdown:</strong></p>
      <p>${q.step}</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

// Q11: 45 hundredths conversions (a-f)
const q11aData = [
  { name: 'thousandths', ans: '450', step: '45 hundredths = 450 thousandths. (multiply by 10)' },
  { name: 'tenths', ans: '4.5', step: '45 hundredths = 4.5 tenths. (divide by 10)' },
  { name: 'units', ans: '0.45', step: '45 hundredths = 0.45 units. (divide by 100)' },
  { name: 'tens', ans: '0.045', step: '45 hundredths = 0.045 tens. (divide by 1000)' },
  { name: 'hundreds', ans: '0.0045', step: '45 hundredths = 0.0045 hundreds. (divide by 10000)' },
  { name: 'thousands', ans: '0.00045', step: '45 hundredths = 0.00045 thousands. (divide by 100000)' }
];

q11aData.forEach((q, idx) => {
  questions.push({
    chapterId: 'y7-7',
    chapterTitle: 'Chapter 7: Decimals',
    topicId: 'y7-7a',
    topicCode: '7A',
    topicTitle: 'Place value and comparison of decimals',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: idx < 3 ? 'easy' : 'medium',
    isActive: true,
    isManual: true,
    question: `Complete the statement: $45$ hundredths = ____ ${q.name}.`,
    options: [`$${q.ans}$`, `$${(parseFloat(q.ans) * 10).toString()}$`, `$${(parseFloat(q.ans) / 10).toString()}$`, `$${(parseFloat(q.ans) * 100).toString()}$`],
    answer: 0,
    solution: `<div style="text-align: left;">
      <p><strong>Step-by-step breakdown:</strong></p>
      <p>${q.step}</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

// Q12: 618 thousandths conversions (a-f)
const q12aData = [
  { name: 'hundredths', ans: '61.8', step: '618 thousandths = 61.8 hundredths. (divide by 10)' },
  { name: 'tenths', ans: '6.18', step: '618 thousandths = 6.18 tenths. (divide by 100)' },
  { name: 'units', ans: '0.618', step: '618 thousandths = 0.618 units. (divide by 1000)' },
  { name: 'tens', ans: '0.0618', step: '618 thousandths = 0.0618 tens. (divide by 10000)' },
  { name: 'hundreds', ans: '0.00618', stroke: '618 thousandths = 0.00618 hundreds. (divide by 100000)' },
  { name: 'thousands', ans: '0.000618', step: '618 thousandths = 0.000618 thousands. (divide by 1000000)' }
];

q12aData.forEach((q, idx) => {
  questions.push({
    chapterId: 'y7-7',
    chapterTitle: 'Chapter 7: Decimals',
    topicId: 'y7-7a',
    topicCode: '7A',
    topicTitle: 'Place value and comparison of decimals',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: idx < 3 ? 'easy' : 'medium',
    isActive: true,
    isManual: true,
    question: `Complete the statement: $618$ thousandths = ____ ${q.name}.`,
    options: [`$${q.ans}$`, `$${(parseFloat(q.ans) * 10).toString()}$`, `$${(parseFloat(q.ans) / 10).toString()}$`, `$${(parseFloat(q.ans) * 100).toString()}$`],
    answer: 0,
    solution: `<div style="text-align: left;">
      <p><strong>Step-by-step breakdown:</strong></p>
      <p>${q.step || q.stroke}</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});


// ========================================================
// 2. NEW 65 REVIEW QUESTIONS (Q1 to Q8 from textbook review)
// ========================================================

// Q1: Place value of 6 (8 questions - 7A)
const reviewQ1 = [
  { val: '46.809', ans: 'Units', step: 'The digit 6 is located directly to the left of the decimal point, representing the units place ($6 \\times 1$).' },
  { val: '683.712', ans: 'Hundreds', step: 'The digit 6 is the third digit to the left of the decimal point, representing the hundreds place ($6 \\times 100$).' },
  { val: '3.6', ans: 'Tenths', step: 'The digit 6 is the first digit to the right of the decimal point, representing the tenths place ($\\frac{6}{10}$).' },
  { val: '7.8886', ans: 'Ten-thousandths', step: 'The digit 6 is the fourth digit to the right of the decimal point, representing the ten-thousandths place ($\\frac{6}{10000}$).' },
  { val: '5.69', ans: 'Tenths', step: 'The digit 6 is the first digit to the right of the decimal point, representing the tenths place ($\\frac{6}{10}$).' },
  { val: '8.136', ans: 'Thousandths', step: 'The digit 6 is the third digit to the right of the decimal point, representing the thousandths place ($\\frac{6}{1000}$).' },
  { val: '9.06', ans: 'Hundredths', step: 'The digit 6 is the second digit to the right of the decimal point, representing the hundredths place ($\\frac{6}{100}$).' },
  { val: '2.4286', ans: 'Ten-thousandths', step: 'The digit 6 is the fourth digit to the right of the decimal point, representing the ten-thousandths place ($\\frac{6}{10000}$).' }
];

reviewQ1.forEach((q, idx) => {
  const opts = ['Tenths', 'Hundredths', 'Units', 'Thousandths', 'Hundreds', 'Ten-thousandths'];
  const filteredOpts = opts.filter(o => o !== q.ans);
  const finalOpts = [q.ans, ...filteredOpts.slice(0, 3)];

  questions.push({
    chapterId: 'y7-7',
    chapterTitle: 'Chapter 7: Decimals',
    topicId: 'y7-7a',
    topicCode: '7A',
    topicTitle: 'Place value and comparison of decimals',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Write the place value of the digit $6$ in the number $${q.val}$.`,
    options: finalOpts,
    answer: 0,
    solution: `<div style="text-align: left;">
      <p><strong>Step-by-step breakdown:</strong></p>
      <p>${q.step}</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

// Q2: Larger number in each pair (9 questions - 7A)
const reviewQ2 = [
  { a: '0.9', b: '0.54', ans: '0.9', step: 'Compare tenths place: 9 tenths is greater than 5 tenths. Thus $0.9 > 0.54$.' },
  { a: '0.6', b: '0.87', ans: '0.87', step: 'Compare tenths place: 8 tenths is greater than 6 tenths. Thus $0.87 > 0.6$.' },
  { a: '4.6', b: '4.53', ans: '4.6', step: 'Compare tenths place: 6 tenths is greater than 5 tenths. Thus $4.6 > 4.53$.' },
  { a: '3.2', b: '3.1976', ans: '3.2', step: 'Compare tenths place: 2 tenths is greater than 1 tenth. Thus $3.2 > 3.1976$.' },
  { a: '8.7', b: '8.31415', ans: '8.7', step: 'Compare tenths place: 7 tenths is greater than 3 tenths. Thus $8.7 > 8.31415$.' },
  { a: '12.4', b: '12.63', ans: '12.63', step: 'Compare tenths place: 6 tenths is greater than 4 tenths. Thus $12.63 > 12.4$.' },
  { a: '2.00004', b: '2.04', ans: '2.04', step: 'Compare tenths place (both are 0), then hundredths place: 4 hundredths is greater than 0 hundredths. Thus $2.04 > 2.00004$.' },
  { a: '5.67', b: '5.81', ans: '5.81', step: 'Compare tenths place: 8 tenths is greater than 6 tenths. Thus $5.81 > 5.67$.' },
  { a: '0.48', b: '0.32', ans: '0.48', step: 'Compare tenths place: 4 tenths is greater than 3 tenths. Thus $0.48 > 0.32$.' }
];

reviewQ2.forEach((q) => {
  questions.push({
    chapterId: 'y7-7',
    chapterTitle: 'Chapter 7: Decimals',
    topicId: 'y7-7a',
    topicCode: '7A',
    topicTitle: 'Place value and comparison of decimals',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Which of the following numbers is the larger one: $${q.a}$ or $${q.b}$?`,
    options: [`$${q.ans}$`, `$${q.ans === q.a ? q.b : q.a}$`, 'They are equal', 'None of these'],
    answer: 0,
    solution: `<div style="text-align: left;">
      <p><strong>Step-by-step breakdown:</strong></p>
      <p>${q.step}</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

// Q3: Ordering numbers (2 questions - 7A)
const reviewQ3 = [
  { list: '4.56, 4.072, 4.068, 4.2, 4.007', sorted: '$4.007, 4.068, 4.072, 4.2, 4.56$', step: 'Compare the tenths place: 4.0... is smallest. Then 4.2, then 4.56. Within the 4.0... numbers: $4.007$ has 0 hundredths, $4.068$ has 6 hundredths, and $4.072$ has 7 hundredths. So: $4.007 < 4.068 < 4.072 < 4.2 < 4.56$.' },
  { list: '5.43, 5.304, 5.33333, 5.0003, 5.4', sorted: '$5.0003, 5.304, 5.33333, 5.4, 5.43$', step: 'Compare the tenths place: 5.0... is smallest. Next is 5.3... (comparing $5.304$ and $5.33333$: 0 hundredths is less than 3 hundredths, so $5.304 < 5.33333$). Finally 5.4 and 5.43. So: $5.0003 < 5.304 < 5.33333 < 5.4 < 5.43$.' }
];

reviewQ3.forEach((q) => {
  const opts = [
    q.sorted,
    q.sorted.replace(/4\.068, 4\.072/, '4.072, 4.068').replace(/5\.304, 5\.33333/, '5.33333, 5.304'),
    q.sorted.replace(/4\.2, 4\.56/, '4.56, 4.2').replace(/5\.4, 5\.43/, '5.43, 5.4'),
    q.sorted.replace(/4\.007, 4\.068/, '4.068, 4.007').replace(/5\.0003, 5\.304/, '5.304, 5.0003')
  ];

  questions.push({
    chapterId: 'y7-7',
    chapterTitle: 'Chapter 7: Decimals',
    topicId: 'y7-7a',
    topicCode: '7A',
    topicTitle: 'Place value and comparison of decimals',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Order these numbers from smallest to largest: $${q.list}$.`,
    options: opts,
    answer: 0,
    solution: `<div style="text-align: left;">
      <p><strong>Step-by-step breakdown:</strong></p>
      <p>${q.step}</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

// Q4: Decimal to Fraction conversion (12 questions - 7B)
const reviewQ4 = [
  { val: '0.7', ans: '\\frac{7}{10}', opts: ['\\frac{7}{10}', '\\frac{7}{100}', '\\frac{7}{5}', '0.07'], step: '$0.7$ has 1 decimal place, so the denominator is $10$. Thus, $0.7 = \\frac{7}{10}$ (already in simplest form).' },
  { val: '0.75', ans: '\\frac{3}{4}', opts: ['\\frac{3}{4}', '\\frac{75}{10}', '\\frac{3}{5}', '\\frac{1}{4}'], step: '$0.75 = \\frac{75}{100}$. Dividing the numerator and denominator by their greatest common divisor ($25$):<br>$\\frac{75 \\div 25}{100 \\div 25} = \\frac{3}{4}$.' },
  { val: '0.8', ans: '\\frac{4}{5}', opts: ['\\frac{4}{5}', '\\frac{8}{100}', '\\frac{2}{3}', '\\frac{3}{5}'], step: '$0.8 = \\frac{8}{10}$. Simplifying by dividing numerator and denominator by $2$:<br>$\\frac{8 \\div 2}{10 \\div 2} = \\frac{4}{5}$.' },
  { val: '2.63', ans: '2\\frac{63}{100}', opts: ['2\\frac{63}{100}', '\\frac{263}{10}', '2\\frac{63}{1000}', '2\\frac{6.3}{10}'], step: '$2.63$ consists of the whole number $2$ and the decimal $0.63$. Since $0.63 = \\frac{63}{100}$ (cannot be simplified further), we get: $2\\frac{63}{100}$.' },
  { val: '3.1256', ans: '3\\frac{157}{1250}', opts: ['3\\frac{157}{1250}', '3\\frac{314}{2500}', '3\\frac{1256}{1000}', '3\\frac{78}{625}'], step: '$3.1256 = 3\\frac{1256}{10000}$. Let us simplify $\\frac{1256}{10000}$:<br>Divide by $8$: $1256 \\div 8 = 157$ and $10000 \\div 8 = 1250$. <br>Therefore, the simplest mixed fraction is: $3\\frac{157}{1250}$.' },
  { val: '3.05', ans: '3\\frac{1}{20}', opts: ['3\\frac{1}{20}', '3\\frac{5}{10}', '3\\frac{1}{200}', '3\\frac{5}{100}'], step: '$3.05 = 3\\frac{5}{100}$. Simplify $\\frac{5}{100}$ by dividing both by $5$:<br>$\\frac{5 \\div 5}{100 \\div 5} = \\frac{1}{20}$. Thus, $3.05 = 3\\frac{1}{20}$.' },
  { val: '8.5', ans: '8\\frac{1}{2}', opts: ['8\\frac{1}{2}', '8\\frac{5}{100}', '\\frac{85}{100}', '8.5'], step: '$8.5 = 8\\frac{5}{10} = 8\\frac{1}{2}$.' },
  { val: '12.408', ans: '12\\frac{51}{125}', opts: ['12\\frac{51}{125}', '12\\frac{102}{250}', '12\\frac{408}{100}', '12\\frac{51}{250}'], step: '$12.408 = 12\\frac{408}{1000}$. Simplify $\\frac{408}{1000}$ by dividing both by their GCD ($8$):<br>$408 \\div 8 = 51$ and $1000 \\div 8 = 125$. Thus, $12.408 = 12\\frac{51}{125}$.' },
  { val: '0.0008', ans: '\\frac{1}{1250}', opts: ['\\frac{1}{1250}', '\\frac{8}{1000}', '\\frac{2}{2500}', '\\frac{4}{5000}'], step: '$0.0008 = \\frac{8}{10000}$. Divide numerator and denominator by $8$:<br>$\\frac{8 \\div 8}{10000 \\div 8} = \\frac{1}{1250}$.' },
  { val: '5.003', ans: '5\\frac{3}{1000}', opts: ['5\\frac{3}{1000}', '5\\frac{3}{100}', '5\\frac{3}{10000}', '\\frac{5003}{100}'], step: '$5.003$ has $3$ decimal places, representing thousandths. So, $5.003 = 5\\frac{3}{1000}$. Since $3$ is prime, it cannot be simplified further.' },
  { val: '8.8037', ans: '8\\frac{8037}{10000}', opts: ['8\\frac{8037}{10000}', '8\\frac{8037}{1000}', '8\\frac{8037}{100000}', '8\\frac{803.7}{1000}'], step: '$8.8037 = 8\\frac{8037}{10000}$. Since $8037$ and $10000$ share no common factors, this is in simplest form.' },
  { val: '12.625', ans: '12\\frac{5}{8}', opts: ['12\\frac{5}{8}', '12\\frac{5}{80}', '12\\frac{625}{100}', '12\\frac{1}{4}'], step: '$12.625 = 12\\frac{625}{1000}$. Simplify $\\frac{625}{1000}$ by dividing both by their GCD ($125$):<br>$625 \\div 125 = 5$ and $1000 \\div 125 = 8$. Thus, $12.625 = 12\\frac{5}{8}$.' }
];

reviewQ4.forEach((q) => {
  questions.push({
    chapterId: 'y7-7',
    chapterTitle: 'Chapter 7: Decimals',
    topicId: 'y7-7b',
    topicCode: '7B',
    topicTitle: 'Converting decimals to fractions and fractions to decimals',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Express the decimal $${q.val}$ as a fraction or mixed fraction in simplest form.`,
    options: q.opts.map(o => `$${o}$`),
    answer: 0,
    solution: `<div style="text-align: left;">
      <p><strong>Step-by-step breakdown:</strong></p>
      <p>${q.step}</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

// Q5: Fraction to Decimal conversion (12 questions - 7B/7G)
const reviewQ5 = [
  { val: '\\frac{1}{4}', ans: '0.25', opts: ['0.25', '0.4', '0.14', '0.75'], topic: 'y7-7b', title: 'Converting decimals to fractions and fractions to decimals', step: 'Divide $1$ by $4$: <br>$1 \\div 4 = 0.25$.' },
  { val: '\\frac{5}{2}', ans: '2.5', opts: ['2.5', '0.25', '2.2', '5.2'], topic: 'y7-7b', title: 'Converting decimals to fractions and fractions to decimals', step: 'Divide $5$ by $2$: <br>$5 \\div 2 = 2.5$.' },
  { val: '\\frac{3}{10}', ans: '0.3', opts: ['0.3', '0.03', '3.0', '0.003'], topic: 'y7-7b', title: 'Converting decimals to fractions and fractions to decimals', step: 'Dividing by $10$ moves the decimal point 1 place to the left:<br>$3 \\div 10 = 0.3$.' },
  { val: '\\frac{35}{100}', ans: '0.35', opts: ['0.35', '0.035', '3.5', '35.0'], topic: 'y7-7b', title: 'Converting decimals to fractions and fractions to decimals', step: 'Dividing by $100$ moves the decimal point 2 places to the left:<br>$35 \\div 100 = 0.35$.' },
  { val: '\\frac{8}{100}', ans: '0.08', opts: ['0.08', '0.8', '0.008', '8.0'], topic: 'y7-7b', title: 'Converting decimals to fractions and fractions to decimals', step: 'Dividing by $100$ moves the decimal point 2 places to the left:<br>$8 \\div 100 = 0.08$.' },
  { val: '\\frac{456}{1000}', ans: '0.456', opts: ['0.456', '0.0456', '4.56', '45.6'], topic: 'y7-7b', title: 'Converting decimals to fractions and fractions to decimals', step: 'Dividing by $1000$ moves the decimal point 3 places to the left:<br>$456 \\div 1000 = 0.456$.' },
  { val: '\\frac{3}{5}', ans: '0.6', opts: ['0.6', '0.3', '0.06', '0.5'], topic: 'y7-7b', title: 'Converting decimals to fractions and fractions to decimals', step: 'Convert the fraction to have a denominator of $10$:<br>$\\frac{3 \\times 2}{5 \\times 2} = \\frac{6}{10} = 0.6$.' },
  { val: '2\\frac{3}{20}', ans: '2.15', opts: ['2.15', '2.3', '2.03', '2.75'], topic: 'y7-7b', title: 'Converting decimals to fractions and fractions to decimals', step: 'First convert the fractional part $\\frac{3}{20}$:<br>$\\frac{3 \\times 5}{20 \\times 5} = \\frac{15}{100} = 0.15$.<br>Adding to the whole number $2$: $2 + 0.15 = 2.15$.' },
  { val: '\\frac{24}{15}', ans: '1.6', opts: ['1.6', '1.4', '1.8', '2.4'], topic: 'y7-7b', title: 'Converting decimals to fractions and fractions to decimals', step: 'First simplify the fraction by dividing numerator and denominator by $3$:<br>$\\frac{24 \\div 3}{15 \\div 3} = \\frac{8}{5}$.<br>Next, convert to tenths:<br>$\\frac{8 \\times 2}{5 \\times 2} = \\frac{16}{10} = 1.6$.' },
  { val: '\\frac{1}{3}', ans: '0.\\dot{3}', opts: ['0.\\dot{3}', '0.3', '0.33', '0.\\dot{1}\\dot{3}'], topic: 'y7-7g', title: 'Recurring decimals', step: 'Divide $1$ by $3$ using long division:<br>$1.000... \\div 3 = 0.3333...$<br>Since the digit $3$ repeats indefinitely, we write it as a recurring decimal: $0.\\dot{3}$.' },
  { val: '\\frac{4}{3}', ans: '1.\\dot{3}', opts: ['1.\\dot{3}', '1.3', '1.\\dot{4}', '1.33'], topic: 'y7-7g', title: 'Recurring decimals', step: 'Convert to mixed fraction first:<br>$\\frac{4}{3} = 1\\frac{1}{3}$.<br>Since $\\frac{1}{3} = 0.\\dot{3}$, adding the whole number $1$ gives: $1.\\dot{3}$.' },
  { val: '\\frac{3}{7}', ans: '0.\\dot{4}2857\\dot{1}', opts: ['0.\\dot{4}2857\\dot{1}', '0.\\dot{3}2857\\dot{1}', '0.428571', '0.\\dot{4}28571\\dot{4}'], topic: 'y7-7g', title: 'Recurring decimals', step: 'Divide $3$ by $7$ using long division:<br>$3.000... \\div 7 = 0.428571428571...$<br>The group of digits $428571$ repeats, so we place recurring dots on the first and last digits of the repeating sequence: $0.\\dot{4}2857\\dot{1}$.' }
];

reviewQ5.forEach((q) => {
  questions.push({
    chapterId: 'y7-7',
    chapterTitle: 'Chapter 7: Decimals',
    topicId: q.topic,
    topicCode: q.topic === 'y7-7b' ? '7B' : '7G',
    topicTitle: q.title,
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: q.topic === 'y7-7b' ? 'easy' : 'medium',
    isActive: true,
    isManual: true,
    question: `Express the fraction $${q.val}$ as a decimal.`,
    options: q.opts.map(o => `$${o}$`),
    answer: 0,
    solution: `<div style="text-align: left;">
      <p><strong>Step-by-step breakdown:</strong></p>
      <p>${q.step}</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

// Q6: Calculations (12 questions - 7C / 7D / 7E / 7F)
const reviewQ6 = [
  { val: '5.827 + 4.65', ans: '10.477', opts: ['10.477', '10.432', '9.477', '10.577'], topic: 'y7-7c', title: 'Addition and subtraction of decimals', code: '7C', step: 'Align the decimal points and add:<br>$$\\begin{array}{r@{\\quad}l} &5.827 \\\\ + &4.650 \\\\ \\hline &10.477 \\end{array}$$' },
  { val: '45.783 - 39.94', ans: '5.843', opts: ['5.843', '5.883', '6.843', '5.243'], topic: 'y7-7c', title: 'Addition and subtraction of decimals', code: '7C', step: 'Align the decimal points and subtract:<br>$$\\begin{array}{r@{\\quad}l} &45.783 \\\\ - &39.940 \\\\ \\hline &\\phantom{0}5.843 \\end{array}$$' },
  { val: '3.8041 + 74.295', ans: '78.0991', opts: ['78.0991', '78.991', '77.0991', '78.1091'], topic: 'y7-7c', title: 'Addition and subtraction of decimals', code: '7C', step: 'Align the decimal points and add:<br>$$\\begin{array}{r@{\\quad}l} &\\phantom{0}3.8041 \\\\ + &74.2950 \\\\ \\hline &78.0991 \\end{array}$$' },
  { val: '34.5 \\times 16', ans: '552', opts: ['552', '55.2', '5520', '345'], topic: 'y7-7e', title: 'Multiplication of one decimal by another', code: '7E', step: 'Step 1: Multiply ignoring the decimal point: $345 \\times 16 = 5520$.<br>Step 2: Re-introduce the single decimal place: $552.0 = 552$.' },
  { val: '345.006 - 287.45', ans: '57.556', opts: ['57.556', '57.550', '58.556', '57.656'], topic: 'y7-7c', title: 'Addition and subtraction of decimals', code: '7C', step: 'Align the decimal points and subtract:<br>$$\\begin{array}{r@{\\quad}l} &345.006 \\\\ - &287.450 \\\\ \\hline &\\phantom{0}57.556 \\end{array}$$' },
  { val: '86.55 \\div 0.5', ans: '173.1', opts: ['173.1', '43.275', '1731', '17.31'], topic: 'y7-7f', title: 'Division of decimals', code: '7F', step: 'Step 1: Multiply both numbers by 10 to clear the decimal in the divisor:<br>$(86.55 \\times 10) \\div (0.5 \\times 10) = 865.5 \\div 5$.<br>Step 2: Carry out long division:<br>$865.5 \\div 5 = 173.1$.' },
  { val: '7.304 \\times 100', ans: '730.4', opts: ['730.4', '73.04', '7304', '0.07304'], topic: 'y7-7d', title: 'Multiplication and division by powers of 10', code: '7D', step: 'Multiplying by $100$ shifts the decimal point two places to the right:<br>$7.304 \\rightarrow 73.04 \\rightarrow 730.4$.' },
  { val: '58.0387 + 253.4831', ans: '311.5218', opts: ['311.5218', '311.4218', '312.5218', '301.5218'], topic: 'y7-7c', title: 'Addition and subtraction of decimals', code: '7C', step: 'Align the decimal points and add:<br>$$\\begin{array}{r@{\\quad}l} &\\phantom{0}58.0387 \\\\ + &253.4831 \\\\ \\hline &311.5218 \\end{array}$$' },
  { val: '38.65 \\div 0.3', ans: '128.8\\dot{3}', opts: ['128.8\\dot{3}', '128.83', '12.88\\dot{3}', '128.\\dot{8}'], topic: 'y7-7f', title: 'Division of decimals', code: '7F', step: 'Step 1: Multiply both numbers by 10:<br>$386.5 \\div 3$.<br>Step 2: Perform division:<br>$386.5 \\div 3 = 128.8333...$<br>Thus, $128.8\\dot{3}$.' },
  { val: '14.0045 + 2.386884', ans: '16.391384', opts: ['16.391384', '16.381384', '16.391', '15.391384'], topic: 'y7-7c', title: 'Addition and subtraction of decimals', code: '7C', step: 'Align and add:<br>$$\\begin{array}{r@{\\quad}l} &14.004500 \\\\ + &\\phantom{0}2.386884 \\\\ \\hline &16.391384 \\end{array}$$' },
  { val: '35.084 \\times 8', ans: '280.672', opts: ['280.672', '280.64', '28.0672', '2806.72'], topic: 'y7-7e', title: 'Multiplication of one decimal by another', code: '7E', step: 'Multiply ignoring decimal: $35084 \\times 8 = 280672$.<br>Reintroduce 3 decimal places: $280.672$.' },
  { val: '347.6812 \\div 0.04', ans: '8692.03', opts: ['8692.03', '8692.3', '869.203', '86920.3'], topic: 'y7-7f', title: 'Division of decimals', code: '7F', step: 'Step 1: Multiply by 100 to clear the divisor:<br>$34768.12 \\div 4$.<br>Step 2: Carry out division:<br>$34768.12 \\div 4 = 8692.03$.' }
];

reviewQ6.forEach((q) => {
  questions.push({
    chapterId: 'y7-7',
    chapterTitle: 'Chapter 7: Decimals',
    topicId: q.topic,
    topicCode: q.code,
    topicTitle: q.title,
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Calculate: $${q.val}$.`,
    options: q.opts.map(o => `$${o}$`),
    answer: 0,
    solution: `<div style="text-align: left;">
      <p><strong>Step-by-step breakdown:</strong></p>
      <p>${q.step}</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

// Q7: Equivalent Fraction or Decimal (5 questions - 7B)
const reviewQ7 = [
  { text: 'Find the equivalent fraction in simplest form for the decimal $0.875$.', ans: '\\frac{7}{8}', opts: ['\\frac{7}{8}', '\\frac{7}{80}', '\\frac{875}{100}', '\\frac{3}{4}'], step: '$0.875 = \\frac{875}{1000}$. Simplify by dividing both by their GCD ($125$):<br>$\\frac{875 \\div 125}{1000 \\div 125} = \\frac{7}{8}$.' },
  { text: 'Find the equivalent decimal for the fraction $\\frac{4}{5}$.', ans: '0.8', opts: ['0.8', '0.08', '0.45', '0.4'], step: 'Convert to tenths:<br>$\\frac{4 \\times 2}{5 \\times 2} = \\frac{8}{10} = 0.8$.' },
  { text: 'Find the equivalent fraction in simplest form for the decimal $0.25$.', ans: '\\frac{1}{4}', opts: ['\\frac{1}{4}', '\\frac{25}{10}', '\\frac{1}{5}', '\\frac{3}{4}'], step: '$0.25 = \\frac{25}{100} = \\frac{1}{4}$.' },
  { text: 'Find the equivalent decimal for the mixed fraction $3\\frac{1}{4}$.', ans: '3.25', opts: ['3.25', '3.14', '3.5', '3.025'], step: '$\\frac{1}{4} = 0.25$. Adding to the whole number $3$ gives: $3.25$.' },
  { text: 'Find the equivalent mixed fraction in simplest form for the decimal $4.375$.', ans: '4\\frac{3}{8}', opts: ['4\\frac{3}{8}', '4\\frac{375}{100}', '4\\frac{3}{4}', '4\\frac{5}{8}'], step: '$4.375 = 4\\frac{375}{1000}$. Simplify the fraction by dividing by $125$:<br>$\\frac{375 \\div 125}{1000 \\div 125} = \\frac{3}{8}$. Thus, $4\\frac{3}{8}$.' }
];

reviewQ7.forEach((q) => {
  questions.push({
    chapterId: 'y7-7',
    chapterTitle: 'Chapter 7: Decimals',
    topicId: 'y7-7b',
    topicCode: '7B',
    topicTitle: 'Converting decimals to fractions and fractions to decimals',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: q.text,
    options: q.opts.map(o => `$${o}$`),
    answer: 0,
    solution: `<div style="text-align: left;">
      <p><strong>Step-by-step breakdown:</strong></p>
      <p>${q.step}</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

// Q8: Recurring Decimals (5 questions - 7G)
const reviewQ8 = [
  { val: '\\frac{5}{6}', ans: '0.8\\dot{3}', opts: ['0.8\\dot{3}', '0.\\dot{8}3', '0.83', '0.\\dot{8}\\dot{3}'], step: 'Divide $5$ by $6$ using division:<br>$5.000... \\div 6 = 0.8333...$<br>Since $3$ repeats, it is written as: $0.8\\dot{3}$.' },
  { val: '\\frac{4}{7}', ans: '0.\\dot{5}7142\\dot{8}', opts: ['0.\\dot{5}7142\\dot{8}', '0.571428', '0.\\dot{5}71428\\dot{5}', '0.\\dot{4}2857\\dot{1}'], step: 'Divide $4$ by $7$ using division:<br>$4.000... \\div 7 = 0.571428571428...$<br>The sequence $571428$ repeats. Thus, it is written as: $0.\\dot{5}7142\\dot{8}$.' },
  { val: '\\frac{5}{11}', ans: '0.\\dot{4}\\dot{5}', opts: ['0.\\dot{4}\\dot{5}', '0.45', '0.4\\dot{5}', '0.\\dot{4}5\\dot{4}'], step: 'Divide $5$ by $11$ using division:<br>$5.000... \\div 11 = 0.454545...$<br>The digits $4$ and $5$ repeat. Thus: $0.\\dot{4}\\dot{5}$.' },
  { val: '\\frac{1}{6}', ans: '0.1\\dot{6}', opts: ['0.1\\dot{6}', '0.\\dot{1}6', '0.16', '0.\\dot{1}\\dot{6}'], step: 'Divide $1$ by $6$ using division:<br>$1.000... \\div 6 = 0.16666...$<br>Since $6$ repeats, we get: $0.1\\dot{6}$.' },
  { val: '\\frac{5}{7}', ans: '0.\\dot{7}1428\\dot{5}', opts: ['0.\\dot{7}1428\\dot{5}', '0.714285', '0.\\dot{7}14285\\dot{7}', '0.\\dot{5}7142\\dot{8}'], step: 'Divide $5$ by $7$ using division:<br>$5.000... \\div 7 = 0.714285714285...$<br>The sequence $714285$ repeats. Thus: $0.\\dot{7}1428\\dot{5}$.' }
];

reviewQ8.forEach((q) => {
  questions.push({
    chapterId: 'y7-7',
    chapterTitle: 'Chapter 7: Decimals',
    topicId: 'y7-7g',
    topicCode: '7G',
    topicTitle: 'Recurring decimals',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isActive: true,
    isManual: true,
    question: `Write the fraction $${q.val}$ as a recurring decimal.`,
    options: q.opts.map(o => `$${o}$`),
    answer: 0,
    solution: `<div style="text-align: left;">
      <p><strong>Step-by-step breakdown:</strong></p>
      <p>${q.step}</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

console.log('Total combined questions built:', questions.length);

// Generate file content
const output = `import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = ${JSON.stringify(questions, null, 2)};

export const importYear7Ch7A = async (forceReset = false) => {
  console.log('[Ch7A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting existing Y7 Ch7 (7a to 7g) review & place value questions...');
      const topicsToDelete = ['y7-7a', 'y7-7b', 'y7-7c', 'y7-7d', 'y7-7e', 'y7-7f', 'y7-7g'];
      for (const tId of topicsToDelete) {
        const existingSnap = await getDocs(query(qRef, where('topicId', '==', tId)));
        for (const doc of existingSnap.docs) {
          await deleteDoc(doc.ref);
        }
      }
      console.log('Deleted existing Ch7 topic questions.');
    }

    // To prevent duplicates, query all existing questions in Ch7 topics
    const existingQuestions = new Set();
    const topicsToCheck = ['y7-7a', 'y7-7b', 'y7-7c', 'y7-7d', 'y7-7e', 'y7-7f', 'y7-7g'];
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
    console.log('[Ch7A Year 7 Import] SUCCESS! ' + importedCount + ' new questions imported.');
    return importedCount;
  } catch (error) {
    console.error('[Ch7A Year 7 Import] ERROR:', error);
    return 0;
  }
};
`;

fs.writeFileSync('src/scripts/importYear7Ch7A.js', output);
console.log('Done!');
