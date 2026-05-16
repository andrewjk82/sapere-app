const fs = require('fs');

const generateOptions = (ans) => {
  return [
    `$${ans}$`,
    `$${ans - 10}$`,
    `$${ans + 10}$`,
    `$${ans - 2}$`
  ];
};

const qList = [];

// 1. Calculate mentally
const q1 = [
  { a: 17, b: 3 }, { a: 6, b: 34 }, { a: 14, b: 16 }, { a: 63, b: 7 },
  { a: 8, b: 42 }, { a: 9, b: 51 }, { a: 7, b: 78 }, { a: 43, b: 8 },
  { a: 46, b: 28 }, { a: 53, b: 29 }, { a: 38, b: 45 }, { a: 68, b: 74 }
];
q1.forEach((q, i) => {
  const ans = q.a + q.b;
  qList.push({
    question: `Calculate mentally: $${q.a} + ${q.b}$`,
    options: generateOptions(ans),
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Understand the addition</strong><br>We need to add $${q.a}$ and $${q.b}$.</p><p><strong>Step 2: Mental strategy</strong><br>We can split $${q.b}$ into tens and units, or complete the nearest ten. For example: $${q.a} + ${q.b} = ${ans}$.</p></div>`,
    difficulty: 'easy'
  });
});

// 2. Carry out additions
const q2 = [
  { a: 2, b: 8, c: 45 }, { a: 3, b: 47, c: 6 }, { a: 38, b: 4, c: 2 }, { a: 25, b: 15, c: 8 },
  { a: 52, b: 8, c: 36 }, { a: 7, b: 33, c: 45 }, { a: 28, b: 44, c: 19 }, { a: 64, b: 27, c: 38 }
];
q2.forEach(q => {
  const ans = q.a + q.b + q.c;
  qList.push({
    question: `Calculate: $${q.a} + ${q.b} + ${q.c}$`,
    options: generateOptions(ans),
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Find friendly numbers</strong><br>Look for numbers that add up to a multiple of $10$ to make the mental math easier.</p><p><strong>Step 2: Add step-by-step</strong><br>Adding them together: $${q.a} + ${q.b} + ${q.c} = ${ans}$.</p></div>`,
    difficulty: 'easy'
  });
});

// 3. Techniques introduced so far
const q3 = [
  { a: 31, b: 24, c: 19, d: 26 }, { a: 23, b: 27, c: 65, d: 85 }, { a: 14, b: 36, c: 58, d: 2 },
  { a: 35, b: 42, c: 25, d: 18 }, { a: 25, b: 43, c: 37, d: 45 }, { a: 14, b: 21, c: 16, d: 9 }
];
q3.forEach(q => {
  const ans = q.a + q.b + q.c + q.d;
  qList.push({
    question: `Calculate: $${q.a} + ${q.b} + ${q.c} + ${q.d}$`,
    options: generateOptions(ans),
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Group friendly numbers</strong><br>Group the numbers that easily sum to multiples of $10$.</p><p><strong>Step 2: Add the pairs</strong><br>We can pair $(${q.a} + ${q.c}) + (${q.b} + ${q.d})$ or similar combinations to get $${q.a + q.c} + ${q.b + q.d} = ${ans}$.</p></div>`,
    difficulty: 'medium'
  });
});

// 4. Carry out additions (larger numbers)
const q4 = [
  { a: 352, b: 48 }, { a: 674, b: 26 }, { a: 415, b: 35 }, { a: 853, b: 47 },
  { a: 542, b: 38 }, { a: 841, b: 69 }, { a: 375, b: 625 }, { a: 452, b: 339 }
];
q4.forEach(q => {
  const ans = q.a + q.b;
  qList.push({
    question: `Calculate: $${q.a} + ${q.b}$`,
    options: generateOptions(ans),
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Set up column addition</strong><br>Align the numbers by their place values.</p><p><strong>Step 2: Add step-by-step</strong><br>Starting from the units column and moving left, carrying over if necessary: $${q.a} + ${q.b} = ${ans}$.</p></div>`,
    difficulty: 'medium'
  });
});

// 5-11 Word problems
qList.push({
  question: 'Three cows produced $32$ litres, $54$ litres, and $28$ litres of milk in one day. How much milk did they produce in total?',
  options: ['$114$ litres', '$104$ litres', '$124$ litres', '$110$ litres'], answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Identify the values</strong><br>The cows produced $32$, $54$, and $28$ litres.</p><p><strong>Step 2: Add the amounts</strong><br>$32 + 54 + 28 = 114$.</p><p><strong>Result</strong>: $114$ litres.</p></div>',
  difficulty: 'easy'
});

qList.push({
  question: 'A tiler laid $345$ tiles in the kitchen, $30$ tiles in the laundry, and $125$ tiles in the bathroom. How many tiles did they lay in total?',
  options: ['$500$', '$490$', '$510$', '$480$'], answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Identify the values</strong><br>Tiles laid: $345$, $30$, and $125$.</p><p><strong>Step 2: Add the amounts</strong><br>$345 + 125 = 470$<br>$470 + 30 = 500$.</p><p><strong>Result</strong>: $500$ tiles.</p></div>',
  difficulty: 'medium'
});

qList.push({
  question: 'On the first day of a road trip, a family travelled $120\\text{ km}$ from their home to City A, then $485\\text{ km}$ from City A to City B. The next day, they travelled $315\\text{ km}$ from City B to City C. How many kilometres did they travel in the first two days of their trip?',
  options: ['$920\\text{ km}$', '$910\\text{ km}$', '$930\\text{ km}$', '$900\\text{ km}$'], answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Sum the distances</strong><br>Day 1: $120 + 485 = 605\\text{ km}$.<br>Day 2: $315\\text{ km}$.</p><p><strong>Step 2: Total distance</strong><br>$605 + 315 = 920$.</p><p><strong>Result</strong>: $920\\text{ km}$.</p></div>',
  difficulty: 'medium'
});

qList.push({
  question: 'A street performer collected $\\$15.00$, $\\$22.00$, $\\$9.00$, and $\\$18.00$ over four days. How much did they earn in total?',
  options: ['$\\$64$', '$\\$54$', '$\\$74$', '$\\$60$'], answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: List the earnings</strong><br>$\\$15, \\$22, \\$9, \\$18$.</p><p><strong>Step 2: Add them up</strong><br>$(15 + 9) + (22 + 18) = 24 + 40 = 64$.</p><p><strong>Result</strong>: $\\$64$.</p></div>',
  difficulty: 'easy'
});

qList.push({
  question: 'In three Year 8 classes, $28$ students, $32$ students, and $25$ students attended roll call one morning. How many students were present in total?',
  options: ['$85$', '$75$', '$95$', '$80$'], answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Group friendly numbers</strong><br>$28 + 32 = 60$.</p><p><strong>Step 2: Add the remaining class</strong><br>$60 + 25 = 85$.</p><p><strong>Result</strong>: $85$ students.</p></div>',
  difficulty: 'easy'
});

qList.push({
  question: 'A gardener picked $14$ apples from an orchard on Monday, $8$ on Tuesday, $26$ on Wednesday, $12$ on Thursday, and $15$ on Friday. How many apples did they pick over the five days?',
  options: ['$75$', '$65$', '$85$', '$70$'], answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: List the amounts</strong><br>$14, 8, 26, 12, 15$.</p><p><strong>Step 2: Add systematically</strong><br>$(14 + 26) + (8 + 12) + 15$<br>$= 40 + 20 + 15 = 75$.</p><p><strong>Result</strong>: $75$ apples.</p></div>',
  difficulty: 'medium'
});

qList.push({
  question: 'In one month, Alex read four books. The first book had $245$ pages, the second $185$ pages, the third $55$ pages, and the fourth $115$ pages. How many pages did Alex read in total?',
  options: ['$600$', '$590$', '$610$', '$580$'], answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Find pairs that sum nicely</strong><br>Notice that $245 + 55 = 300$, and $185 + 115 = 300$.</p><p><strong>Step 2: Add the pairs</strong><br>$300 + 300 = 600$.</p><p><strong>Result</strong>: $600$ pages.</p></div>',
  difficulty: 'medium'
});

// 12a, 12b
qList.push({
  question: 'By appropriately pairing numbers, calculate the sum of the first $10$ whole numbers starting from $1$: $1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10$.',
  options: ['$55$', '$45$', '$65$', '$50$'], answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Pair from the outside in</strong><br>$(1 + 10) = 11$<br>$(2 + 9) = 11$<br>$(3 + 8) = 11$<br>$(4 + 7) = 11$<br>$(5 + 6) = 11$</p><p><strong>Step 2: Multiply by the number of pairs</strong><br>There are $5$ pairs of $11$, so $5 \\times 11 = 55$.</p></div>',
  difficulty: 'medium'
});

qList.push({
  question: 'Use the pairing strategy to find the sum of all integers from $1$ to $50$ inclusive.',
  options: ['$1275$', '$1225$', '$1300$', '$1250$'], answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Form pairs</strong><br>We pair the smallest and largest numbers: $(1 + 50) = 51$, $(2 + 49) = 51$, and so on.</p><p><strong>Step 2: Count the pairs</strong><br>There are $50$ numbers in total, which means there are $50 \\div 2 = 25$ pairs.</p><p><strong>Step 3: Calculate the total sum</strong><br>Multiply the value of each pair by the number of pairs: $25 \\times 51$.<br>$25 \\times 50 = 1250$, and $25 \\times 1 = 25$.<br>$1250 + 25 = 1275$.</p></div>',
  difficulty: 'hard'
});


let fileContent = `import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = [
`;

qList.forEach(q => {
  fileContent += `  {
    chapterId: 'y8-1',
    topicId: 'y8-1b',
    topicCode: '1B',
    topicTitle: 'Addition of whole numbers',
    year: 'Year 8',
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

export const importYear8Ch1B = async (forceReset = false) => {
  console.log('[Ch1B Year 8 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    if (forceReset) {
      const oldSnap = await getDocs(query(qRef, where('topicId', '==', 'y8-1b')));
      for (const d of oldSnap.docs) { await deleteDoc(d.ref); }
    }
    const existingSnap = await getDocs(query(qRef, where('topicId', '==', 'y8-1b')));
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

fs.writeFileSync('src/scripts/importYear8Ch1B.js', fileContent);
console.log('Successfully generated src/scripts/importYear8Ch1B.js with ' + qList.length + ' questions.');

// Now generate the runner script
const runnerScript = `import { importYear8Ch1B } from './importYear8Ch1B.js';

const run = async () => {
  try {
    const added = await importYear8Ch1B(true);
    console.log(\`Successfully added \${added} questions for Year 8 Ch 1B.\`);
    process.exit(0);
  } catch (err) {
    console.error('Error running import:', err);
    process.exit(1);
  }
};

run();
`;

fs.writeFileSync('src/scripts/runImportYear8Ch1B.js', runnerScript);
console.log('Runner script created.');
