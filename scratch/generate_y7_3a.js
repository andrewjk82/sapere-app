const fs = require('fs');

const qList = [];

// Helper to escape backslashes
const esc = str => str.replace(/\\/g, '\\\\');

// Q1
qList.push({
  question: 'Sarah has a box that contains $y$ markers. She finds $5$ more markers. Which expression shows the total number of markers Sarah has?',
  options: ['$y + 5$', '$5y$', '$y - 5$', '$\\frac{y}{5}$'],
  answer: 0,
  solution: '<div style="text-align: left;"><p><strong>Step 1: Identify the operation</strong><br>Finding "more" implies addition.</p><p><strong>Step 2: Write the expression</strong><br>Starting with $y$ markers and adding $5$ gives the expression $y + 5$.</p></div>',
  difficulty: 'easy'
});

// Q2
const q2 = [
  { q: 'Adding $8$ to the number $m$', ans: 'm + 8', bad1: '8m', bad2: 'm - 8', bad3: '\\frac{m}{8}', op: 'adding' },
  { q: 'The sum of $k$ and $7$', ans: 'k + 7', bad1: '7k', bad2: 'k - 7', bad3: '7 - k', op: 'sum' },
  { q: 'Subtracting $5$ from $w$', ans: 'w - 5', bad1: '5 - w', bad2: '5w', bad3: 'w + 5', op: 'subtracting from' },
  { q: 'Subtracting $9$ from $z$', ans: 'z - 9', bad1: '9 - z', bad2: '9z', bad3: 'z + 9', op: 'subtracting from' },
  { q: 'The difference of $p$ and $6$ (where $p > 6$)', ans: 'p - 6', bad1: '6 - p', bad2: '6p', bad3: 'p + 6', op: 'difference' },
  { q: '$12$ less than $h$', ans: 'h - 12', bad1: '12 - h', bad2: '12h', bad3: 'h + 12', op: 'less than' },
  { q: 'The sum of $u$ and $v$', ans: 'u + v', bad1: 'uv', bad2: 'u - v', bad3: '\\frac{u}{v}', op: 'sum' },
  { q: 'The sum of $a$, $4$, and $b$', ans: 'a + b + 4', bad1: '4ab', bad2: 'a - b + 4', bad3: 'a + 4b', op: 'sum of multiple terms' },
  { q: 'The sum of $x$, $y$ and $z$', ans: 'x + y + z', bad1: 'xyz', bad2: 'xy + z', bad3: 'x + yz', op: 'sum of multiple terms' }
];

q2.forEach(item => {
  qList.push({
    question: `Write an algebraic expression for the following: ${item.q}`,
    options: [`$${item.ans}$`, `$${item.bad1}$`, `$${item.bad2}$`, `$${item.bad3}$`],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Translate the words to symbols</strong><br>Phrases like "sum", "adding", or "more than" mean addition ($+$). Phrases like "subtracting from", "difference", or "less than" mean subtraction ($-$).</p><p><strong>Step 2: Form the expression</strong><br>The correct mathematical translation is $${item.ans}$.</p></div>`,
    difficulty: 'easy'
  });
});

// Q3
const q3 = [
  { q: 'The product of $8$ and $y$', ans: '8y', bad1: '8 + y', bad2: 'y - 8', bad3: '\\frac{y}{8}' },
  { q: 'The product of $m$ and $n$', ans: 'mn', bad1: 'm + n', bad2: 'm - n', bad3: '\\frac{m}{n}' },
  { q: '$k$ is multiplied by $7$', ans: '7k', bad1: 'k + 7', bad2: 'k - 7', bad3: '\\frac{k}{7}' },
  { q: 'The quotient when $a$ is divided by $b$', ans: '\\frac{a}{b}', bad1: '\\frac{b}{a}', bad2: 'a - b', bad3: 'ab' }
];

q3.forEach(item => {
  qList.push({
    question: `Write an algebraic expression for the following: ${item.q}`,
    options: [`$${item.ans}$`, `$${item.bad1}$`, `$${item.bad2}$`, `$${item.bad3}$`],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Translate the operation</strong><br>"Product" and "multiplied by" indicate multiplication, which in algebra is written by placing the number and variable side by side (e.g., $2x$). "Quotient" indicates division, written as a fraction.</p><p><strong>Step 2: Write the expression</strong><br>The correct expression is $${item.ans}$.</p></div>`,
    difficulty: 'easy'
  });
});

// Q4
const q4 = [
  { q: 'The product of $9$ and $p$', ans: '9p', bad1: '9 + p', bad2: 'p - 9', bad3: '\\frac{p}{9}' },
  { q: 'The product of $u$ and $v$', ans: 'uv', bad1: 'u + v', bad2: '\\frac{u}{v}', bad3: 'u - v' },
  { q: 'The difference of $m$ and $10$ (where $m > 10$)', ans: 'm - 10', bad1: '10 - m', bad2: '10m', bad3: 'm + 10' },
  { q: '$y$ is multiplied by $5$, and $2$ is added to the result', ans: '5y + 2', bad1: '5(y + 2)', bad2: '2y + 5', bad3: '5 + 2y' },
  { q: '$k$ is multiplied by $6$, and $4$ is subtracted from the result', ans: '6k - 4', bad1: '4k - 6', bad2: '6(k - 4)', bad3: 'k - 10' },
  { q: '$7$ is multiplied by $w$, and $5$ is added to the result', ans: '7w + 5', bad1: '5w + 7', bad2: '7(w + 5)', bad3: '12w' }
];

q4.forEach(item => {
  qList.push({
    question: `Write an algebraic expression for the following: ${item.q}`,
    options: [`$${item.ans}$`, `$${item.bad1}$`, `$${item.bad2}$`, `$${item.bad3}$`],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Perform operations in order</strong><br>Follow the sequence described in the sentence. Multiplication comes first, then addition or subtraction.</p><p><strong>Step 2: Combine terms</strong><br>The final algebraic expression is $${item.ans}$.</p></div>`,
    difficulty: 'medium'
  });
});

// Q5
const q5 = [
  { q: '$p$ is divided by $4$, and $3$ is added to it', ans: '\\frac{p}{4} + 3', bad1: '\\frac{p+3}{4}', bad2: '4p + 3', bad3: '\\frac{4}{p} + 3' },
  { q: '$m$ is divided by $5$, and $7$ is subtracted from it', ans: '\\frac{m}{5} - 7', bad1: '\\frac{m-7}{5}', bad2: '5m - 7', bad3: '\\frac{5}{m} - 7' },
  { q: '$a$, $b$ and $c$ are added together', ans: 'a + b + c', bad1: 'abc', bad2: 'ab + c', bad3: 'a + bc' },
  { q: 'The product of $r$, $s$ and $t$', ans: 'rst', bad1: 'r + s + t', bad2: 'rs + t', bad3: 'r + st' }
];

q5.forEach(item => {
  qList.push({
    question: `Write an algebraic expression for the following: ${item.q}`,
    options: [`$${item.ans}$`, `$${item.bad1}$`, `$${item.bad2}$`, `$${item.bad3}$`],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Translate the operations</strong><br>Division is written as a fraction. Addition is written with $+$. Product is written by placing variables next to each other.</p><p><strong>Step 2: Combine correctly</strong><br>The correct expression is $${item.ans}$.</p></div>`,
    difficulty: 'medium'
  });
});

// Q6 - Q15 Word Problems
const wordProblems = [
  {
    q: 'An apple tree has $k$ apples on it. How many are left on the tree if $15$ apples fall off?',
    ans: 'k - 15', bad1: '15 - k', bad2: '15k', bad3: 'k + 15'
  },
  {
    q: 'There are $8$ bags, each containing $m$ candies. What is the total number of candies?',
    ans: '8m', bad1: '8 + m', bad2: 'm - 8', bad3: '\\frac{m}{8}'
  },
  {
    q: 'There are $p$ cookies to be divided equally among $4$ children. How many cookies does each child receive?',
    ans: '\\frac{p}{4}', bad1: '4p', bad2: 'p - 4', bad3: '\\frac{4}{p}'
  },
  {
    q: 'Emma has $\\$d$ in her savings account. She deposits $\\$500$ into the account. How much does she have in total now?',
    ans: 'd + 500', bad1: '500d', bad2: 'd - 500', bad3: '\\frac{d}{500}'
  },
  {
    q: 'Leo is $7$ years older than Mia, who is $y$ years old. How old is Leo?',
    ans: 'y + 7', bad1: '7y', bad2: 'y - 7', bad3: '\\frac{y}{7}'
  },
  {
    q: 'The perimeter of a regular pentagon ($5$ equal sides) is $p$ cm. How long is each side?',
    ans: '\\frac{p}{5}', bad1: '5p', bad2: 'p - 5', bad3: 'p + 5'
  },
  {
    q: 'If $w$ cartons each contain $12$ eggs, how many eggs are there in total?',
    ans: '12w', bad1: 'w + 12', bad2: 'w - 12', bad3: '\\frac{w}{12}'
  },
  {
    q: 'The sum of two whole numbers is $25$. If one of the numbers is $k$, what is the other number?',
    ans: '25 - k', bad1: 'k - 25', bad2: '25k', bad3: 'k + 25'
  },
  {
    q: 'Noah has $c$ stamps and collects $35$ more. How many stamps does Noah have now?',
    ans: 'c + 35', bad1: '35c', bad2: 'c - 35', bad3: '\\frac{c}{35}'
  },
  {
    q: 'A square has $4$ sides of equal length. The sum of the lengths of the sides of the square is $L$ cm. What is the length of each side?',
    ans: '\\frac{L}{4}', bad1: '4L', bad2: 'L - 4', bad3: 'L + 4'
  }
];

wordProblems.forEach(item => {
  qList.push({
    question: item.q,
    options: [`$${item.ans}$`, `$${item.bad1}$`, `$${item.bad2}$`, `$${item.bad3}$`],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Identify the relationship</strong><br>Determine whether the problem describes addition, subtraction, multiplication, or division.</p><p><strong>Step 2: Construct the expression</strong><br>The correct algebraic representation of the situation is $${item.ans}$.</p></div>`,
    difficulty: 'medium'
  });
});


let fileContent = `import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = [
`;

qList.forEach(q => {
  fileContent += `  {
    chapterId: 'y7-3',
    topicId: 'y7-3a',
    topicCode: '3A',
    topicTitle: 'Using algebra',
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
});

fileContent += `];

export const importYear7Ch3A = async (forceReset = false) => {
  console.log('[Ch3A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    if (forceReset) {
      const oldSnap = await getDocs(query(qRef, where('topicId', '==', 'y7-3a')));
      for (const d of oldSnap.docs) { await deleteDoc(d.ref); }
    }
    const existingSnap = await getDocs(query(qRef, where('topicId', '==', 'y7-3a')));
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

fs.writeFileSync('src/scripts/importYear7Ch3A.js', fileContent);
console.log('Generated src/scripts/importYear7Ch3A.js with ' + qList.length + ' questions.');

const runnerScript = `import { importYear7Ch3A } from './importYear7Ch3A.js';

const run = async () => {
  try {
    const added = await importYear7Ch3A(true);
    console.log(\`Successfully added \${added} questions for Year 7 Ch 3A.\`);
    process.exit(0);
  } catch (err) {
    console.error('Error running import:', err);
    process.exit(1);
  }
};

run();
`;

fs.writeFileSync('src/scripts/runImportYear7Ch3A.js', runnerScript);
console.log('Runner script created.');
