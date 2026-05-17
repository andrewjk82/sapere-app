const fs = require('fs');

const qList = [];
const esc = str => str.replace(/\\/g, '\\\\');

// Q1, Q2, Q3: Number line concepts (converted to MCQs)
qList.push({
  question: 'Where are the points $A = \\frac{3}{5}$, $B = \\frac{9}{5}$, and $C = \\frac{15}{5}$ located on a number line?',
  options: [
    '$A$ is between $0$ and $1$; $B$ is between $1$ and $2$; $C$ is exactly at $3$.',
    '$A$ is exactly at $1$; $B$ is between $1$ and $2$; $C$ is between $2$ and $3$.',
    '$A$ is between $0$ and $1$; $B$ is exactly at $2$; $C$ is between $3$ and $4$.',
    '$A$ is between $1$ and $2$; $B$ is between $2$ and $3$; $C$ is exactly at $5$.'
  ],
  answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Convert to mixed numbers</strong><br>$A = \\frac{3}{5} = 0 \\frac{3}{5}$ (between $0$ and $1$).<br>$B = \\frac{9}{5} = 1 \\frac{4}{5}$ (between $1$ and $2$).<br>$C = \\frac{15}{5} = 3$ (exactly on the integer $3$).</p></div>',
  difficulty: 'easy'
});

qList.push({
  question: 'Which list correctly identifies the integers that the fractions $\\frac{2}{7}$, $\\frac{11}{7}$, and $\\frac{20}{7}$ lie between?',
  options: [
    'Between $0$ and $1$, between $1$ and $2$, between $2$ and $3$',
    'Between $0$ and $1$, between $1$ and $2$, between $3$ and $4$',
    'Between $1$ and $2$, between $2$ and $3$, between $3$ and $4$',
    'Between $0$ and $1$, between $2$ and $3$, between $3$ and $4$'
  ],
  answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Divide by 7</strong><br>$\\frac{2}{7}$ is less than $1$ (between $0$ and $1$).<br>$\\frac{11}{7} = 1 \\frac{4}{7}$ (between $1$ and $2$).<br>$\\frac{20}{7} = 2 \\frac{6}{7}$ (between $2$ and $3$).</p></div>',
  difficulty: 'medium'
});

qList.push({
  question: 'Consider the fractions $\\frac{5}{9}$, $\\frac{8}{9}$, and $\\frac{13}{9}$. Which of these fractions is greater than $1$?',
  options: [
    'Only $\\frac{13}{9}$',
    '$\\frac{8}{9}$ and $\\frac{13}{9}$',
    'All of them',
    'None of them'
  ],
  answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Understand proper vs improper fractions</strong><br>A fraction is greater than $1$ if its numerator is strictly greater than its denominator.</p><p><strong>Step 2: Compare</strong><br>$5 < 9$ and $8 < 9$, so they are less than $1$. However, $13 > 9$, so $\\frac{13}{9}$ is greater than $1$.</p></div>',
  difficulty: 'easy'
});

// Q4: Reading a number line
qList.push({
  question: 'A number line is marked with whole numbers ($0, 1, 2, \\dots$). The space between each whole number is divided into $4$ equal parts. A star is placed on the $3$rd tick mark after the number $5$. What fraction represents the star?',
  options: ['$\\frac{23}{4}$', '$\\frac{15}{4}$', '$\\frac{21}{4}$', '$\\frac{53}{4}$'],
  answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Identify the denominator</strong><br>Since the space is divided into $4$ parts, we are working with quarters (fourths).</p><p><strong>Step 2: Determine the whole number and fraction</strong><br>The star is past $5$, specifically at $5 \\frac{3}{4}$.</p><p><strong>Step 3: Convert to an improper fraction</strong><br>$5 \\times 4 + 3 = 23$. The fraction is $\\frac{23}{4}$.</p></div>',
  difficulty: 'medium'
});

qList.push({
  question: 'A number line is divided into thirds (3 equal spaces between each whole number). A triangle is placed on the $1$st tick mark after the number $8$. What fraction represents the triangle?',
  options: ['$\\frac{25}{3}$', '$\\frac{8}{3}$', '$\\frac{11}{3}$', '$\\frac{23}{3}$'],
  answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Determine the mixed number</strong><br>The triangle is $1$ third past the number $8$, which is $8 \\frac{1}{3}$.</p><p><strong>Step 2: Convert</strong><br>$8 \\times 3 + 1 = 25$. The fraction is $\\frac{25}{3}$.</p></div>',
  difficulty: 'medium'
});

// INTERACTIVE GRID QUESTIONS
qList.push({
  type: 'interactive_grid',
  gridConfig: { type: 'rect', rows: 4, cols: 4 },
  question: 'The square below is divided into 16 regions of equal area. Tap the panels to shade exactly $\\frac{1}{4}$ of the total area.',
  answer: 4,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Understand the total</strong><br>There are $16$ squares in total.</p><p><strong>Step 2: Calculate the required amount</strong><br>To shade $\\frac{1}{4}$ of the area, you need to shade $\\frac{1}{4} \\times 16 = 4$ squares.</p></div>',
  difficulty: 'medium'
});

qList.push({
  type: 'interactive_grid',
  gridConfig: { type: 'rect', rows: 4, cols: 4 },
  question: 'Tap the panels to shade exactly $\\frac{3}{8}$ of the $4 \\times 4$ grid.',
  answer: 6,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Find equivalent fraction</strong><br>The grid has $16$ cells. We need an equivalent fraction for $\\frac{3}{8}$ with a denominator of $16$.</p><p><strong>Step 2: Calculate</strong><br>$\\frac{3 \\times 2}{8 \\times 2} = \\frac{6}{16}$. You must shade $6$ panels.</p></div>',
  difficulty: 'medium'
});

qList.push({
  type: 'interactive_grid',
  gridConfig: { type: 'rect', rows: 4, cols: 4 },
  question: 'Tap the panels to shade exactly $\\frac{5}{16}$ of the grid.',
  answer: 5,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Count total cells</strong><br>The grid is $4 \\times 4 = 16$ cells.</p><p><strong>Step 2: Shade</strong><br>Since the denominator is $16$, the numerator tells us directly to shade $5$ panels.</p></div>',
  difficulty: 'easy'
});

qList.push({
  type: 'interactive_grid',
  gridConfig: { type: 'triangle_split', rows: 2, cols: 2 },
  question: 'This $2 \\times 2$ grid has each square split diagonally into $2$ triangles. Tap the panels to shade exactly $\\frac{5}{8}$ of the whole area.',
  answer: 5,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Count total sections</strong><br>There are $4$ squares, each split into $2$ triangles, giving $8$ triangles in total.</p><p><strong>Step 2: Shade</strong><br>To shade $\\frac{5}{8}$, simply tap and shade exactly $5$ triangles.</p></div>',
  difficulty: 'medium'
});

qList.push({
  type: 'interactive_grid',
  gridConfig: { type: 'triangle_split', rows: 2, cols: 2 },
  question: 'Tap the panels to shade exactly $\\frac{1}{2}$ of the whole area.',
  answer: 4,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Count total sections</strong><br>There are $8$ triangles in the grid.</p><p><strong>Step 2: Calculate half</strong><br>Half of $8$ is $4$. You need to shade any $4$ triangles.</p></div>',
  difficulty: 'easy'
});

// Q7: Interpreting shaded areas (Text-based equivalent)
qList.push({
  question: 'A $4 \\times 4$ square grid has $10$ of its small squares shaded. What fraction of the large square is shaded, in its simplest form?',
  options: ['$\\frac{5}{8}$', '$\\frac{10}{16}$', '$\\frac{5}{16}$', '$\\frac{3}{4}$'],
  answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Write the fraction</strong><br>Total squares = $16$. Shaded = $10$. Fraction = $\\frac{10}{16}$.</p><p><strong>Step 2: Simplify</strong><br>Divide numerator and denominator by $2$: $\\frac{10 \\div 2}{16 \\div 2} = \\frac{5}{8}$.</p></div>',
  difficulty: 'medium'
});

qList.push({
  question: 'A rectangular wall is painted with $3$ equally sized vertical stripes. If $2$ of the stripes are painted blue, what fraction of the wall is blue?',
  options: ['$\\frac{2}{3}$', '$\\frac{1}{3}$', '$\\frac{3}{2}$', '$\\frac{1}{2}$'],
  answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Identify parts</strong><br>Total equal parts = $3$. Parts painted blue = $2$.</p><p><strong>Step 2: Write fraction</strong><br>The fraction is $\\frac{2}{3}$.</p></div>',
  difficulty: 'easy'
});

// Q8: Word problems describing fractions
const wordFractions = [
  { q: '$7$ errors on a $25$-question spelling test', ans: '\\frac{7}{25}', bad1: '\\frac{25}{7}', bad2: '\\frac{18}{25}', bad3: '\\frac{7}{18}' },
  { q: '$1$ leg of a rectangular table is broken (the table has $4$ legs)', ans: '\\frac{1}{4}', bad1: '\\frac{1}{3}', bad2: '\\frac{3}{4}', bad3: '\\frac{4}{1}' },
  { q: '$5$ days out of $1$ week', ans: '\\frac{5}{7}', bad1: '\\frac{5}{10}', bad2: '\\frac{2}{7}', bad3: '\\frac{7}{5}' },
  { q: '$2$ tyres need replacing on a car', ans: '\\frac{2}{4}', bad1: '\\frac{1}{2}', bad2: '\\frac{2}{5}', bad3: '\\frac{4}{2}', simplifyNote: 'Note: The options might not be simplified, choose the direct fraction.' }, // Let's use 1/2 as correct answer if we want it simplified. Actually let's make the options unambiguous.
  { q: 'A $12$-day holiday in November', ans: '\\frac{12}{30}', bad1: '\\frac{12}{31}', bad2: '\\frac{18}{30}', bad3: '\\frac{30}{12}' },
  { q: '$5$ broken eggs in a dozen', ans: '\\frac{5}{12}', bad1: '\\frac{5}{10}', bad2: '\\frac{7}{12}', bad3: '\\frac{12}{5}' },
  { q: '$37$ minutes taken to complete an exam for which $1$ hour was allocated', ans: '\\frac{37}{60}', bad1: '\\frac{37}{100}', bad2: '\\frac{23}{60}', bad3: '\\frac{60}{37}' },
  { q: '$4$ players injured out of a soccer team of $11$', ans: '\\frac{4}{11}', bad1: '\\frac{4}{10}', bad2: '\\frac{7}{11}', bad3: '\\frac{11}{4}' },
  { q: '$1$ digit in a $10$-digit phone number is incorrect', ans: '\\frac{1}{10}', bad1: '\\frac{1}{9}', bad2: '\\frac{9}{10}', bad3: '\\frac{10}{1}' },
  { q: 'Out of $28$ competitors, $21$ finish the race', ans: '\\frac{21}{28}', bad1: '\\frac{7}{28}', bad2: '\\frac{28}{21}', bad3: '\\frac{21}{100}' }
];

wordFractions.forEach((item, index) => {
  // Fix the 2/4 vs 1/2 thing by updating the item
  let correct = item.ans;
  if (index === 3) correct = '\\frac{1}{2}'; // For the car tyres (2/4 = 1/2)
  if (index === 4) correct = '\\frac{2}{5}'; // 12/30 = 2/5
  if (index === 9) correct = '\\frac{3}{4}'; // 21/28 = 3/4

  let qText = `Write the fraction, in its simplest form, that describes the following: ${item.q}`;

  qList.push({
    question: qText,
    options: [`$${correct}$`, `$${item.bad1}$`, `$${item.bad2}$`, `$${item.bad3}$`],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Write the initial fraction</strong><br>The numerator is the part mentioned, and the denominator is the total whole.</p><p><strong>Step 2: Simplify if necessary</strong><br>Find the greatest common divisor and divide both top and bottom to get $${correct}$.</p></div>`,
    difficulty: 'medium'
  });
});

let fileContent = `import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = [
`;

qList.forEach(q => {
  if (q.type === 'interactive_grid') {
    fileContent += `  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'interactive_grid',
    gridConfig: ${JSON.stringify(q.gridConfig)},
    difficulty: '${q.difficulty}',
    isManual: true,
    isActive: true,
    question: \`${esc(q.question)}\`,
    answer: ${q.answer},
    solution: \`${esc(q.solution)}\`,
    createdAt: new Date().toISOString()
  },
`;
  } else {
    fileContent += `  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: '${q.difficulty}',
    isManual: true,
    isActive: true,
    question: \`${esc(q.question)}\`,
    options: ${JSON.stringify(q.options)},
    answer: ${q.answer},
    solution: \`${esc(q.solution)}\`,
    createdAt: new Date().toISOString()
  },
`;
  }
});

fileContent += `];

export const importYear7Ch4A = async (forceReset = false) => {
  console.log('[Ch4A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    if (forceReset) {
      const oldSnap = await getDocs(query(qRef, where('topicId', '==', 'y7-4a')));
      for (const d of oldSnap.docs) { await deleteDoc(d.ref); }
    }
    const existingSnap = await getDocs(query(qRef, where('topicId', '==', 'y7-4a')));
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

fs.writeFileSync('src/scripts/importYear7Ch4A.js', fileContent);
console.log('Generated src/scripts/importYear7Ch4A.js with ' + qList.length + ' questions.');

const runnerScript = `import { importYear7Ch4A } from './importYear7Ch4A.js';

const run = async () => {
  try {
    const added = await importYear7Ch4A(true);
    console.log(\`Successfully added \${added} questions for Year 7 Ch 4A.\`);
    process.exit(0);
  } catch (err) {
    console.error('Error running import:', err);
    process.exit(1);
  }
};

run();
`;

fs.writeFileSync('src/scripts/runImportYear7Ch4A.js', runnerScript);
console.log('Runner script created.');
