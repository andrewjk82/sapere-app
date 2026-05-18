const fs = require('fs');

const qList = [];
const esc = str => str.replace(/\\/g, '\\\\');

// Helper function to generate an HTML grid inline
const createGridHtml = (cols, shadedCount, rows = 1) => {
  const totalCells = cols * rows;
  let cellsHtml = '';
  for (let i = 0; i < totalCells; i++) {
    const isShaded = i < shadedCount;
    const bg = isShaded ? '#93c5fd' : '#ffffff'; // blue-300 for shaded
    cellsHtml += `<div style="background: ${bg}; width: 14px; height: 14px;"></div>`;
  }
  
  return `<div style="display: inline-grid; grid-template-columns: repeat(${cols}, 14px); grid-template-rows: repeat(${rows}, 14px); gap: 1px; background: #94a3b8; border: 1px solid #94a3b8; padding: 1px; vertical-align: middle;">${cellsHtml}</div>`;
};

// Image 3, Q9b: 8/7 if the whole is a 1x7 grid
qList.push({
  question: `Choose the diagram that correctly shows $\\frac{8}{7}$ if the whole is ${createGridHtml(7, 0)}.`,
  options: [
    // Option A: one 1x6 grid (shading doesn't matter, shape is wrong)
    createGridHtml(6, 6),
    // Option B: two 1x7 grids, top fully shaded, bottom has 1 shaded
    `<div style="display: flex; flex-direction: column; gap: 4px; align-items: flex-start;">${createGridHtml(7, 7)}${createGridHtml(7, 1)}</div>`,
    // Option C: one 1x8 grid, 7 shaded
    createGridHtml(8, 7),
    // Option D (Extra distractor): one 1x7 grid, 7 shaded
    createGridHtml(7, 7)
  ],
  answer: 1, // Option B is correct
  solution: \`<div style="text-align: left;"><p><strong>Step 1: Understand the whole</strong><br>The whole is represented by a grid of $7$ blocks. This means $1$ whole = $\\frac{7}{7}$.</p><p><strong>Step 2: Determine what $\\frac{8}{7}$ means</strong><br>$\\frac{8}{7} = \\frac{7}{7} + \\frac{1}{7} = 1 \\frac{1}{7}$.</p><p><strong>Step 3: Select the correct visual</strong><br>You need one full whole ($7$ blocks shaded) plus an additional $\\frac{1}{7}$ ($1$ block shaded in a second whole). The diagram with two $7$-block grids where $8$ blocks are shaded in total is the correct one.</p></div>\`,
  difficulty: 'medium'
});

// Image 3, Q9a (adapted): 1/4 if the whole is 1 square
qList.push({
  question: `Choose the diagram that correctly shows $\\frac{1}{4}$ if the whole is ${createGridHtml(1, 0)}.`,
  options: [
    // Option A: 1 whole and 1/4 of another? No, let's make it 1 square divided into 4 with 1 shaded
    `<div style="display: inline-grid; grid-template-columns: repeat(2, 14px); grid-template-rows: repeat(2, 14px); gap: 1px; background: #94a3b8; border: 1px solid #94a3b8; padding: 1px; vertical-align: middle;"><div style="background: #93c5fd; width: 14px; height: 14px;"></div><div style="background: #ffffff; width: 14px; height: 14px;"></div><div style="background: #ffffff; width: 14px; height: 14px;"></div><div style="background: #ffffff; width: 14px; height: 14px;"></div></div>`,
    // Option B: 4 wholes
    `<div style="display: flex; gap: 4px;">${createGridHtml(1, 1)}${createGridHtml(1, 1)}${createGridHtml(1, 1)}${createGridHtml(1, 1)}</div>`,
    // Option C: 1 whole shaded (just 1)
    createGridHtml(1, 1),
    // Option D: A 1x3 grid
    createGridHtml(3, 1)
  ],
  answer: 0, // Option A is correct
  solution: \`<div style="text-align: left;"><p><strong>Step 1: Understand the whole</strong><br>The whole is a single square block.</p><p><strong>Step 2: Understand the fraction</strong><br>To show $\\frac{1}{4}$, the whole must be divided into $4$ equal parts, and $1$ of those parts must be shaded.</p><p><strong>Step 3: Match the diagram</strong><br>The diagram showing a square divided into four smaller squares with one shaded correctly represents $\\frac{1}{4}$.</p></div>\`,
  difficulty: 'easy'
});

let fileContent = \`import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const visualQuestions = [\n\`;

qList.forEach(q => {
  fileContent += \`  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: '\${q.difficulty}',
    isManual: true,
    isActive: true,
    question: \`\${esc(q.question)}\`,
    options: \${JSON.stringify(q.options)},
    answer: \${q.answer},
    solution: \`\${esc(q.solution)}\`,
    createdAt: new Date().toISOString()
  },\n\`;
});

fileContent += \`];

export const appendVisualQuestions = async () => {
  console.log('[Ch4A Visuals] STARTING...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    // We only add, we don't force reset here, to preserve the 22 previous questions
    const existingSnap = await getDocs(query(qRef, where('topicId', '==', 'y7-4a')));
    const existingQuestions = new Set(existingSnap.docs.map(doc => doc.data().question.trim()));
    
    for (const q of visualQuestions) {
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
\`;

fs.writeFileSync('src/scripts/importYear7Ch4A_visual.js', fileContent);
console.log('Generated visual questions script.');

const runnerScript = \`import { appendVisualQuestions } from './importYear7Ch4A_visual.js';

const run = async () => {
  try {
    const added = await appendVisualQuestions();
    console.log(\\\`Successfully APPENDED \\\${added} visual questions for Year 7 Ch 4A.\\\`);
    process.exit(0);
  } catch (err) {
    console.error('Error running import:', err);
    process.exit(1);
  }
};

run();
\`;

fs.writeFileSync('src/scripts/runImportYear7Ch4A_visual.js', runnerScript);
