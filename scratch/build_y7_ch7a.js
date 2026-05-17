const fs = require('fs');

const questions = [];

// Helper to double escape backslashes for JS strings
function esc(str) {
  return str.replace(/\\/g, '\\\\');
}

// ========================================================
// Q1: Place values of 354.1809
// ========================================================
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

// ========================================================
// Q2: Write 6.148 as a fraction
// ========================================================
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

// ========================================================
// Q3: Write 69/1000 as a decimal
// ========================================================
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

// ========================================================
// Q4: Place value of digit 4 in different decimals (a-f)
// ========================================================
const q4Data = [
  { val: '54.73', ans: 'Units', step: 'The digit 4 is directly to the left of the decimal point, representing the units (ones) place ($4 \\times 1$).' },
  { val: '3.84', ans: 'Hundredths', step: 'The digit 4 is the second digit to the right of the decimal point, representing the hundredths place ($\\frac{4}{100}$).' },
  { val: '0.41', ans: 'Tenths', step: 'The digit 4 is the first digit to the right of the decimal point, representing the tenths place ($\\frac{4}{10}$).' },
  { val: '47.09', ans: 'Tens', step: 'The digit 4 is in the tens place ($4 \\times 10 = 40$), representing four tens.' },
  { val: '0.004', ans: 'Thousandths', step: 'The digit 4 is the third digit to the right of the decimal point, representing the thousandths place ($\\frac{4}{1000}$).' },
  { val: '67.951842', ans: 'Hundred-thousandths', step: 'Counting the places to the right of the decimal: tenths (9), hundredths (5), thousandths (1), ten-thousandths (8), hundred-thousandths (4). Thus, it represents $\\frac{4}{100000}$.' }
];

q4Data.forEach((q, idx) => {
  const opts = ['Tenths', 'Hundredths', 'Units', 'Thousandths', 'Tens', 'Hundred-thousandths'];
  // Ensure the correct answer is present and place it at index 0
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

// ========================================================
// Q5: Decimals made from digits 1, 3, 5, 7
// ========================================================
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

// ========================================================
// Q6: Closest whole numbers (a-f)
// ========================================================
const q6Data = [
  { val: '4.09', ans: '4', step: 'Since the tenths digit is 0 (which is less than 5), we round down to the nearest whole number, which is $4$.' },
  { val: '4.8', ans: '5', step: 'Since the tenths digit is 8 (which is 5 or greater), we round up to the nearest whole number, which is $5$.' },
  { val: '2.17984', ans: '2', step: 'Since the tenths digit is 1 (less than 5), we round down to the nearest whole number, which is $2$.' },
  { val: '6.800002', ans: '7', step: 'Since the tenths digit is 8 (5 or greater), we round up to the nearest whole number, which is $7$.' },
  { val: '5.499', ans: '5', step: 'To find the closest whole number, look at the tenths place: it is 4 (less than 5). Thus we round down to $5$.' },
  { val: '7.09999', ans: '7', step: 'Looking at the tenths place: it is 0 (less than 5). Thus we round down to $7$.' }
];

q6Data.forEach((q, idx) => {
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

// ========================================================
// Q7: Larger of each pair (a-l)
// ========================================================
const q7Data = [
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

q7Data.forEach((q, idx) => {
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

// ========================================================
// Q8: Ordering numbers smallest to largest (a-d)
// ========================================================
const q8Data = [
  { list: '3.4, 0.3, 9.264, 8.3, 5.09', sorted: '$0.3, 3.4, 5.09, 8.3, 9.264$', step: 'Compare the whole numbers: 0 is smallest, then 3, then 5, then 8, then 9. This instantly gives us: $0.3 < 3.4 < 5.09 < 8.3 < 9.264$.' },
  { list: '2.08, 2.84, 2.48, 2.8, 2.40', sorted: '$2.08, 2.40, 2.48, 2.8, 2.84$', step: 'All whole numbers are 2. Compare the decimal parts: 08 hundredths is smallest. Then 40 hundredths ($2.40$), then 48 hundredths ($2.48$), then 80 hundredths ($2.8$), then 84 hundredths ($2.84$).' },
  { list: '6.000034, 6.340000, 6.99, 6.5208673, 6.0859', sorted: '$6.000034, 6.0859, 6.340000, 6.5208673, 6.99$', step: 'Compare tenths: 6.0... are smallest. Comparing 6.000034 and 6.0859: 6.000034 has 0 hundredths, while 6.0859 has 8 hundredths. So $6.000034 < 6.0859$. Next is 6.34, then 6.52, then 6.99.' },
  { list: '5.55, 5.3, 5.8143, 5.777, 5.89463', sorted: '$5.3, 5.55, 5.777, 5.8143, 5.89463$', step: 'Compare tenths place: 3 tenths ($5.3$) < 5 tenths ($5.55$) < 7 tenths ($5.777$) < 8 tenths. Compare 5.8143 and 5.89463: 1 hundredth is less than 9 hundredths. So $5.8143 < 5.89463$.' }
];

q8Data.forEach((q, idx) => {
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

// ========================================================
// Q9: Closer to 6 or closer to 7 (a-l)
// ========================================================
const q9Data = [
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

q9Data.forEach((q, idx) => {
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

// ========================================================
// Q10: 8 tenths conversions (a-f)
// ========================================================
const q10Data = [
  { name: 'thousandths', ans: '800', step: '8 tenths = 800 thousandths. (multiply by 100)' },
  { name: 'hundredths', ans: '80', step: '8 tenths = 80 hundredths. (multiply by 10)' },
  { name: 'units', ans: '0.8', step: '8 tenths = 0.8 units. (divide by 10)' },
  { name: 'tens', ans: '0.08', step: '8 tenths = 0.08 tens. (divide by 100)' },
  { name: 'hundreds', ans: '0.008', step: '8 tenths = 0.008 hundreds. (divide by 1000)' },
  { name: 'thousands', ans: '0.0008', step: '8 tenths = 0.0008 thousands. (divide by 10000)' }
];

q10Data.forEach((q, idx) => {
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

// ========================================================
// Q11: 45 hundredths conversions (a-f)
// ========================================================
const q11Data = [
  { name: 'thousandths', ans: '450', step: '45 hundredths = 450 thousandths. (multiply by 10)' },
  { name: 'tenths', ans: '4.5', step: '45 hundredths = 4.5 tenths. (divide by 10)' },
  { name: 'units', ans: '0.45', step: '45 hundredths = 0.45 units. (divide by 100)' },
  { name: 'tens', ans: '0.045', step: '45 hundredths = 0.045 tens. (divide by 1000)' },
  { name: 'hundreds', ans: '0.0045', step: '45 hundredths = 0.0045 hundreds. (divide by 10000)' },
  { name: 'thousands', ans: '0.00045', step: '45 hundredths = 0.00045 thousands. (divide by 100000)' }
];

q11Data.forEach((q, idx) => {
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

// ========================================================
// Q12: 618 thousandths conversions (a-f)
// ========================================================
const q12Data = [
  { name: 'hundredths', ans: '61.8', step: '618 thousandths = 61.8 hundredths. (divide by 10)' },
  { name: 'tenths', ans: '6.18', step: '618 thousandths = 6.18 tenths. (divide by 100)' },
  { name: 'units', ans: '0.618', step: '618 thousandths = 0.618 units. (divide by 1000)' },
  { name: 'tens', ans: '0.0618', step: '618 thousandths = 0.0618 tens. (divide by 10000)' },
  { name: 'hundreds', ans: '0.00618', step: '618 thousandths = 0.00618 hundreds. (divide by 100000)' },
  { name: 'thousands', ans: '0.000618', step: '618 thousandths = 0.000618 thousands. (divide by 1000000)' }
];

q12Data.forEach((q, idx) => {
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
      <p>${q.step}</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

console.log('Total questions built:', questions.length);

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
      console.log('Force reset enabled. Deleting existing Y7 Ch7A questions...');
      const existingSnap = await getDocs(query(qRef, where('topicId', '==', 'y7-7a')));
      for (const doc of existingSnap.docs) {
        await deleteDoc(doc.ref);
      }
      console.log('Deleted ' + existingSnap.size + ' existing questions.');
    }

    const existingSnap = await getDocs(query(qRef, where('topicId', '==', 'y7-7a')));
    const existingQuestions = new Set(existingSnap.docs.map(doc => doc.data().question.trim()));
    
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
