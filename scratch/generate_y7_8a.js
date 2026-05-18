const fs = require('fs');
const path = require('path');

const allQuestions = [];

// Q1: Write the decimal number as a sum of place values
allQuestions.push({
  chapterId: 'y7-8',
  topicId: 'y7-8a',
  topicCode: '8A',
  topicTitle: 'Decimals and Place Value',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isManual: true,
  isActive: true,
  question: `Using the place values of the digits, write the decimal number $482.7306$ as a sum of hundreds, tens, units, tenths, hundredths, thousandths and ten-thousandths.`,
  options: [
    `$400 + 80 + 2 + \\frac{7}{10} + \\frac{3}{100} + \\frac{0}{1000} + \\frac{6}{10000}$`,
    `$400 + 80 + 2 + \\frac{7}{100} + \\frac{3}{1000} + \\frac{6}{100000}$`,
    `$4 + 8 + 2 + 0.7 + 0.03 + 0.006$`,
    `$400 + 80 + 2 + \\frac{7}{10} + \\frac{3}{100} + \\frac{6}{1000}$`
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>Let's break down the decimal number $482.7306$ into its place values:</p>
    <ul>
      <li>$4$ is in the hundreds place: $400$</li>
      <li>$8$ is in the tens place: $80$</li>
      <li>$2$ is in the units (ones) place: $2$</li>
      <li>$7$ is in the tenths place: $\\frac{7}{10}$</li>
      <li>$3$ is in the hundredths place: $\\frac{3}{100}$</li>
      <li>$0$ is in the thousandths place: $\\frac{0}{1000}$</li>
      <li>$6$ is in the ten-thousandths place: $\\frac{6}{10000}$</li>
    </ul>
    <p>Adding these together gives: $400 + 80 + 2 + \\frac{7}{10} + \\frac{3}{100} + \\frac{0}{1000} + \\frac{6}{10000}$.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// Q2: Write as a fraction whose denominator is a power of 10
allQuestions.push({
  chapterId: 'y7-8',
  topicId: 'y7-8a',
  topicCode: '8A',
  topicTitle: 'Decimals and Place Value',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isManual: true,
  isActive: true,
  question: `Write $3.719$ as a fraction whose denominator is a power of 10.`,
  options: [
    `$\\frac{3719}{1000}$`,
    `$\\frac{3719}{100}$`,
    `$\\frac{3719}{10000}$`,
    `$3\\frac{719}{100}$`
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>The decimal $3.719$ has three decimal places (tenths, hundredths, thousandths).</p>
    <p>To convert this into a fraction, we write the entire number without the decimal point as the numerator, and $10^3$ ($1000$) as the denominator:</p>
    <p>$$3.719 = \\frac{3719}{1000}$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// Q3: Write a fraction as a decimal
allQuestions.push({
  chapterId: 'y7-8',
  topicId: 'y7-8a',
  topicCode: '8A',
  topicTitle: 'Decimals and Place Value',
  year: 'Year 7',
  type: 'short_answer',
  difficulty: 'easy',
  isManual: false,
  isActive: true,
  question: `Write $\\frac{63}{1000}$ as a decimal.`,
  options: [],
  answer: '0.063',
  solution: `<div style="text-align: left;">
    <p>Dividing by $1000$ shifts the decimal point of $63.0$ three places to the left:</p>
    <ul>
      <li>1 shift left: $6.3$</li>
      <li>2 shifts left: $0.63$</li>
      <li>3 shifts left: $0.063$</li>
    </ul>
    <p>Therefore, $\\frac{63}{1000} = 0.063$.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// Q4: Write down the place value of the digit (a to f)
const q4SubData = [
  { char: 'a', num: '47.39', digit: '7', ans: 'units', options: ['tens', 'units', 'tenths', 'hundredths'] },
  { char: 'b', num: '5.68', digit: '8', ans: 'hundredths', options: ['tenths', 'hundredths', 'thousandths', 'units'] },
  { char: 'c', num: '0.43', digit: '4', ans: 'tenths', options: ['units', 'tenths', 'hundredths', 'thousandths'] },
  { char: 'd', num: '91.82', digit: '9', ans: 'tens', options: ['hundreds', 'tens', 'units', 'tenths'] },
  { char: 'e', num: '0.005', digit: '5', ans: 'thousandths', options: ['tenths', 'hundredths', 'thousandths', 'ten-thousandths'] },
  { char: 'f', num: '12.45638', digit: '3', ans: 'ten-thousandths', options: ['thousandths', 'ten-thousandths', 'hundred-thousandths', 'millionths'] }
];

q4SubData.forEach(sq => {
  allQuestions.push({
    chapterId: 'y7-8',
    topicId: 'y7-8a',
    topicCode: '8A',
    topicTitle: 'Decimals and Place Value',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: `Write down the place value of the digit $${sq.digit}$ in the decimal number $${sq.num}$.`,
    options: sq.options.map(opt => `$${opt}$`),
    answer: sq.options.indexOf(sq.ans),
    solution: `<div style="text-align: left;">
      <p>Let's map out the positions in $${sq.num}$ relative to the decimal point:</p>
      <p>In $${sq.num}$, the digit $${sq.digit}$ sits in the <strong>${sq.ans}</strong> column.</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

// Q5: Largest decimal formed by unique digits
allQuestions.push({
  chapterId: 'y7-8',
  topicId: 'y7-8a',
  topicCode: '8A',
  topicTitle: 'Decimals and Place Value',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isManual: true,
  isActive: true,
  question: `What is the largest possible decimal number less than 100 that can be formed using each of the digits $2, 4, 6, 8$ and a decimal point exactly once?`,
  options: [
    `$86.42$`,
    `$864.2$`,
    `$8.642$`,
    `$68.42$`
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>To make the largest possible decimal number <strong>less than 100</strong>, we must maximize the place values starting from the tens place (since it must be less than 100, we can have at most 2 digits before the decimal point):</p>
    <p>1. Arrange digits in descending order to place the largest digit in the highest place value: $8, 6, 4, 2$.</p>
    <p>2. Put the decimal point after the tens digit to make it less than 100: $86.42$.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// Q6: Closest whole number (a to f)
const q6SubData = [
  { char: 'a', num: '4.07', ans: '4', reason: '$0.07$ is less than $0.5$, so we round down to $4$.' },
  { char: 'b', num: '5.8', ans: '6', reason: '$0.8$ is greater than $0.5$, so we round up to $6$.' },
  { char: 'c', num: '2.31758', ans: '2', reason: '$0.317...$ is less than $0.5$, so we round down to $2$.' },
  { char: 'd', num: '6.800002', ans: '7', reason: '$0.800...$ is greater than $0.5$, so we round up to $7$.' },
  { char: 'e', num: '5.498', ans: '5', reason: '$0.498$ is less than $0.5$, so we round down to $5$.' },
  { char: 'f', num: '8.08888', ans: '8', reason: '$0.088...$ is less than $0.5$, so we round down to $8$.' }
];

q6SubData.forEach(sq => {
  allQuestions.push({
    chapterId: 'y7-8',
    topicId: 'y7-8a',
    topicCode: '8A',
    topicTitle: 'Decimals and Place Value',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isManual: false,
    isActive: true,
    question: `Find the whole number closest to the decimal $${sq.num}$.`,
    options: [],
    answer: sq.ans,
    solution: `<div style="text-align: left;">
      <p>To find the closest whole number, look at the tenths digit (the first digit to the right of the decimal point):</p>
      <p>In $${sq.num}$, the tenths value indicates that ${sq.reason}</p>
      <p>Therefore, the closest whole number is <strong>$${sq.ans}$</strong>.</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

// Q7: Larger of two decimals (a to l)
const q7SubData = [
  { char: 'a', n1: '0.6', n2: '0.47', ans: '0.6' },
  { char: 'b', n1: '2.7', n2: '2.84', ans: '2.84' },
  { char: 'c', n1: '7.9', n2: '7.09', ans: '7.9' },
  { char: 'd', n1: '4.72', n2: '4.073', ans: '4.72' },
  { char: 'e', n1: '6.25', n2: '6.2519', ans: '6.2519' },
  { char: 'f', n1: '3.002', n2: '3.2', ans: '3.2' },
  { char: 'g', n1: '9.99967', n2: '9.453', ans: '9.99967' },
  { char: 'h', n1: '4.58', n2: '4.3', ans: '4.58' },
  { char: 'i', n1: '186.3472', n2: '186.34', ans: '186.3472' },
  { char: 'j', n1: '12.4', n2: '1.24', ans: '12.4' },
  { char: 'k', n1: '325.78958', n2: '325.71189', ans: '325.78958' },
  { char: 'l', n1: '4.67', n2: '4.59999', ans: '4.67' }
];

q7SubData.forEach(sq => {
  allQuestions.push({
    chapterId: 'y7-8',
    topicId: 'y7-8a',
    topicCode: '8A',
    topicTitle: 'Decimals and Place Value',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: `Identify the larger number between these two values: $${sq.n1}$ or $${sq.n2}$.`,
    options: [`$${sq.n1}$`, `$${sq.n2}$`],
    answer: sq.ans === sq.n1 ? 0 : 1,
    solution: `<div style="text-align: left;">
      <p>Compare the numbers place value by place value from left to right:</p>
      <ul>
        <li>First compare the whole number part.</li>
        <li>If they are the same, compare the tenths, then hundredths, and so on.</li>
      </ul>
      <p>Comparing $${sq.n1}$ and $${sq.n2}$, we find that $${sq.ans}$ is larger.</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

// Q8: Order numbers from smallest to largest (a to d)
const q8SubData = [
  {
    char: 'a',
    nums: ['3.4', '0.3', '9.264', '8.3', '5.09'],
    sorted: ['0.3', '3.4', '5.09', '8.3', '9.264']
  },
  {
    char: 'b',
    nums: ['2.08', '2.82', '2.28', '2.8', '2.20'],
    sorted: ['2.08', '2.20', '2.28', '2.8', '2.82']
  },
  {
    char: 'c',
    nums: ['8.000034', '8.340000', '8.99', '8.5208643', '8.0859'],
    sorted: ['8.000034', '8.0859', '8.340000', '8.5208643', '8.99']
  },
  {
    char: 'd',
    nums: ['5.55', '5.3', '5.8345', '5.777', '5.89685'],
    sorted: ['5.3', '5.55', '5.777', '5.8345', '5.89685']
  }
];

q8SubData.forEach(sq => {
  // Let's create options with one correct and three scrambled
  const correctOption = sq.sorted.join(', ');
  const scrambled1 = [...sq.sorted].reverse().join(', ');
  const scrambled2 = [sq.sorted[1], sq.sorted[0], sq.sorted[3], sq.sorted[2], sq.sorted[4]].join(', ');
  const scrambled3 = [sq.sorted[0], sq.sorted[2], sq.sorted[1], sq.sorted[3], sq.sorted[4]].join(', ');

  const options = [correctOption, scrambled1, scrambled2, scrambled3];

  allQuestions.push({
    chapterId: 'y7-8',
    topicId: 'y7-8a',
    topicCode: '8A',
    topicTitle: 'Decimals and Place Value',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Which of the following lists correctly orders these numbers from smallest to largest: $${sq.nums.join(', ')}$?`,
    options: options.map(opt => `$${opt}$`),
    answer: 0,
    solution: `<div style="text-align: left;">
      <p>Let's line up the decimals by their place value to compare them:</p>
      <ol>
        ${sq.sorted.map(num => `<li>$${num}$</li>`).join('')}
      </ol>
      <p>Ordering them from smallest to largest gives: <strong>$${correctOption}$</strong>.</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

// Q9: State whether each number is closer to 7 or closer to 8 (a to l)
const q9SubData = [
  { char: 'a', num: '7.103645', ans: '7' },
  { char: 'b', num: '7.98', ans: '8' },
  { char: 'c', num: '7.7', ans: '8' },
  { char: 'd', num: '7.53', ans: '8' },
  { char: 'e', num: '7.02', ans: '7' },
  { char: 'f', num: '7.08968453', ans: '7' },
  { char: 'g', num: '7.48', ans: '7' },
  { char: 'h', num: '7.00004', ans: '7' },
  { char: 'i', num: '7.499978', ans: '7' },
  { char: 'j', num: '7.48484', ans: '7' },
  { char: 'k', num: '7.84223', ans: '8' },
  { char: 'l', num: '7.13108', ans: '7' }
];

q9SubData.forEach(sq => {
  allQuestions.push({
    chapterId: 'y7-8',
    topicId: 'y7-8a',
    topicCode: '8A',
    topicTitle: 'Decimals and Place Value',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: `Is the number $${sq.num}$ closer to $7$ or closer to $8$?`,
    options: [`$7$`, `$8$`],
    answer: sq.ans === '7' ? 0 : 1,
    solution: `<div style="text-align: left;">
      <p>Find the midpoint between $7$ and $8$, which is $7.5$.</p>
      <ul>
        <li>If the number is less than $7.5$, it is closer to $7$.</li>
        <li>If the number is greater than $7.5$, it is closer to $8$.</li>
      </ul>
      <p>Since $${sq.num}$ is ${Number(sq.num) < 7.5 ? 'less' : 'greater'} than $7.5$, it is closer to <strong>$${sq.ans}$</strong>.</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

// Q10: Complete statements for 6 tenths (a to f)
const q10SubData = [
  { char: 'a', statement: '8 tenths = \\dots thousandths', ans: '800', explanation: '8 tenths $= \\frac{8}{10} = \\frac{800}{1000} = 800$ thousandths.' },
  { char: 'b', statement: '5 tenths = \\dots hundredths', ans: '50', explanation: '5 tenths $= \\frac{5}{10} = \\frac{50}{100} = 50$ hundredths.' },
  { char: 'c', statement: '9 tenths = \\dots units', ans: '0.9', explanation: '9 tenths $= \\frac{9}{10} = 0.9$ units.' },
  { char: 'd', statement: '8 tenths = \\dots tens', ans: '0.08', explanation: '8 tenths $= \\frac{8}{10} = 0.8$ units $= \\frac{0.8}{10} = 0.08$ tens.' },
  { char: 'e', statement: '7 tenths = \\dots hundreds', ans: '0.007', explanation: '7 tenths $= \\frac{7}{10} = 0.7$ units $= \\frac{0.7}{100} = 0.007$ hundreds.' },
  { char: 'f', statement: '9 tenths = \\dots thousands', ans: '0.0009', explanation: '9 tenths $= \\frac{9}{10} = 0.7$ units $= \\frac{0.9}{1000} = 0.0009$ thousands.' }
];

q10SubData.forEach(sq => {
  allQuestions.push({
    chapterId: 'y7-8',
    topicId: 'y7-8a',
    topicCode: '8A',
    topicTitle: 'Decimals and Place Value',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: false,
    isActive: true,
    question: `Complete the statement to make it mathematically true: $${sq.statement}$.`,
    options: [],
    answer: sq.ans,
    solution: `<div style="text-align: left;">
      <p>Let's convert the place values step-by-step:</p>
      <p>${sq.explanation}</p>
      <p>Therefore, the blank should be filled with <strong>$${sq.ans}$</strong>.</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

// Q11: Complete statements for 89 hundredths (a to f)
const q11SubData = [
  { char: 'a', statement: '74 hundredths = \\dots thousandths', ans: '740', explanation: '74 hundredths $= \\frac{74}{100} = \\frac{740}{1000} = 740$ thousandths.' },
  { char: 'b', statement: '74 hundredths = \\dots tenths', ans: '7.4', explanation: '74 hundredths $= \\frac{74}{100} = \\frac{7.4}{10} = 7.4$ tenths.' },
  { char: 'c', statement: '68 hundredths = \\dots units', ans: '0.68', explanation: '68 hundredths $= \\frac{68}{100} = 0.68$ units.' },
  { char: 'd', statement: '53 hundredths = \\dots tens', ans: '0.053', explanation: '53 hundredths $= \\frac{53}{100} = 0.53$ units $= \\frac{0.53}{10} = 0.053$ tens.' },
  { char: 'e', statement: '42 hundredths = \\dots hundreds', ans: '0.0042', explanation: '42 hundredths $= \\frac{42}{100} = 0.42$ units $= \\frac{0.42}{100} = 0.0042$ hundreds.' },
  { char: 'f', statement: '35 hundredths = \\dots thousands', ans: '0.00035', explanation: '35 hundredths $= \\frac{35}{100} = 0.35$ units $= \\frac{0.35}{1000} = 0.00035$ thousands.' }
];

q11SubData.forEach(sq => {
  allQuestions.push({
    chapterId: 'y7-8',
    topicId: 'y7-8a',
    topicCode: '8A',
    topicTitle: 'Decimals and Place Value',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: false,
    isActive: true,
    question: `Complete the statement to make it mathematically true: $${sq.statement}$.`,
    options: [],
    answer: sq.ans,
    solution: `<div style="text-align: left;">
      <p>Let's convert the hundredths place to the target place value:</p>
      <p>${sq.explanation}</p>
      <p>Therefore, the blank should be filled with <strong>$${sq.ans}$</strong>.</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

// Q12: Complete statements for 723 thousandths (a to f)
const q12SubData = [
  { char: 'a', statement: '815 thousandths = \\dots hundredths', ans: '81.5', explanation: '815 thousandths $= \\frac{815}{1000} = \\frac{81.5}{100} = 81.5$ hundredths.' },
  { char: 'b', statement: '815 thousandths = \\dots tenths', ans: '8.15', explanation: '815 thousandths $= \\frac{815}{1000} = \\frac{8.15}{10} = 8.15$ tenths.' },
  { char: 'c', statement: '642 thousandths = \\dots units', ans: '0.642', explanation: '642 thousandths $= \\frac{642}{1000} = 0.642$ units.' },
  { char: 'd', statement: '519 thousandths = \\dots tens', ans: '0.0519', explanation: '519 thousandths $= \\frac{519}{1000} = 0.519$ units $= \\frac{0.519}{10} = 0.0519$ tens.' },
  { char: 'e', statement: '428 thousandths = \\dots hundreds', ans: '0.00428', explanation: '428 thousandths $= \\frac{428}{1000} = 0.428$ units $= \\frac{0.428}{100} = 0.00428$ hundreds.' },
  { char: 'f', statement: '317 thousandths = \\dots thousands', ans: '0.000317', explanation: '317 thousandths $= \\frac{317}{1000} = 0.317$ units $= \\frac{0.317}{1000} = 0.000317$ thousands.' }
];

q12SubData.forEach(sq => {
  allQuestions.push({
    chapterId: 'y7-8',
    topicId: 'y7-8a',
    topicCode: '8A',
    topicTitle: 'Decimals and Place Value',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'hard',
    isManual: false,
    isActive: true,
    question: `Complete the statement to make it mathematically true: $${sq.statement}$.`,
    options: [],
    answer: sq.ans,
    solution: `<div style="text-align: left;">
      <p>Let's convert the thousandths place to the target place value:</p>
      <p>${sq.explanation}</p>
      <p>Therefore, the blank should be filled with <strong>$${sq.ans}$</strong>.</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

const outputFile = path.join(__dirname, '../src/scripts/importYear7Ch8A.js');

const codeContent = `import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = ${JSON.stringify(allQuestions, null, 2)};

export const importYear7Ch8A = async (forceReset = false) => {
  console.log('[Ch8A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting existing Y7 Ch8A questions...');
      const existingSnap = await getDocs(query(qRef, where('topicId', '==', 'y7-8a')));
      for (const doc of existingSnap.docs) {
        await deleteDoc(doc.ref);
      }
      console.log(\`Deleted \${existingSnap.size} existing questions.\`);
    }

    const existingSnap = await getDocs(query(qRef, where('topicId', '==', 'y7-8a')));
    const existingQuestions = new Set(existingSnap.docs.map(doc => doc.data().question.trim()));
    
    for (const q of allQuestions) {
      if (!existingQuestions.has(q.question.trim())) {
        await addDoc(collection(db, 'questions'), q);
        importedCount++;
      }
    }
    console.log(\`[Ch8A Year 7 Import] SUCCESS! \${importedCount} new questions imported.\`);
    return importedCount;
  } catch (error) {
    console.error('[Ch8A Year 7 Import] ERROR:', error);
    return 0;
  }
};
`;

fs.writeFileSync(outputFile, codeContent, 'utf8');
console.log('Successfully generated ' + outputFile + ' with ' + allQuestions.length + ' questions.');
