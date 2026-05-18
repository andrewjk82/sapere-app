import admin from 'firebase-admin';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const projectId = process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY;

admin.initializeApp({
  projectId,
  credential: admin.credential.cert({
    projectId,
    clientEmail,
    privateKey: privateKey.replace(/\\n/g, '\n'),
  }),
});

const db = admin.firestore();

const createGridHtml = (cols, shadedCount, rows = 1) => {
  const totalCells = cols * rows;
  let cellsHtml = '';
  for (let i = 0; i < totalCells; i++) {
    const isShaded = i < shadedCount;
    const bg = isShaded ? '#93c5fd' : '#ffffff';
    cellsHtml += `<div style="background: ${bg}; width: 14px; height: 14px;"></div>`;
  }
  return `<div style="display: inline-grid; grid-template-columns: repeat(${cols}, 14px); grid-template-rows: repeat(${rows}, 14px); gap: 1px; background: #94a3b8; border: 1px solid #94a3b8; padding: 1px; vertical-align: middle;">${cellsHtml}</div>`;
};

const visualQuestions = [
  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Choose the diagram that correctly shows $\\frac{8}{7}$ if the whole is ${createGridHtml(7, 0)}.`,
    options: [
      createGridHtml(6, 6),
      `<div style="display: flex; flex-direction: column; gap: 4px; align-items: flex-start;">${createGridHtml(7, 7)}${createGridHtml(7, 1)}</div>`,
      createGridHtml(8, 7),
      createGridHtml(7, 7)
    ],
    answer: 1,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Understand the whole</strong><br>The whole is represented by a grid of $7$ blocks. This means $1$ whole = $\\frac{7}{7}$.</p><p><strong>Step 2: Determine what $\\frac{8}{7}$ means</strong><br>$\\frac{8}{7} = \\frac{7}{7} + \\frac{1}{7} = 1 \\frac{1}{7}$.</p><p><strong>Step 3: Select the correct visual</strong><br>You need one full whole ($7$ blocks shaded) plus an additional $\\frac{1}{7}$ ($1$ block shaded in a second whole). The diagram with two $7$-block grids where $8$ blocks are shaded in total is the correct one.</p></div>`,
    createdAt: admin.firestore.FieldValue.serverTimestamp()
  },
  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: `Choose the diagram that correctly shows $\\frac{1}{4}$ if the whole is ${createGridHtml(1, 0)}.`,
    options: [
      `<div style="display: inline-grid; grid-template-columns: repeat(2, 14px); grid-template-rows: repeat(2, 14px); gap: 1px; background: #94a3b8; border: 1px solid #94a3b8; padding: 1px; vertical-align: middle;"><div style="background: #93c5fd; width: 14px; height: 14px;"></div><div style="background: #ffffff; width: 14px; height: 14px;"></div><div style="background: #ffffff; width: 14px; height: 14px;"></div><div style="background: #ffffff; width: 14px; height: 14px;"></div></div>`,
      `<div style="display: flex; gap: 4px;">${createGridHtml(1, 1)}${createGridHtml(1, 1)}${createGridHtml(1, 1)}${createGridHtml(1, 1)}</div>`,
      createGridHtml(1, 1),
      createGridHtml(3, 1)
    ],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Understand the whole</strong><br>The whole is a single square block.</p><p><strong>Step 2: Understand the fraction</strong><br>To show $\\frac{1}{4}$, the whole must be divided into $4$ equal parts, and $1$ of those parts must be shaded.</p><p><strong>Step 3: Match the diagram</strong><br>The diagram showing a square divided into four smaller squares with one shaded correctly represents $\\frac{1}{4}$.</p></div>`,
    createdAt: admin.firestore.FieldValue.serverTimestamp()
  }
];

async function run() {
  let count = 0;
  for (const q of visualQuestions) {
    const snap = await db.collection('questions').where('topicId', '==', 'y7-4a').where('question', '==', q.question).get();
    if (snap.empty) {
      await db.collection('questions').add(q);
      count++;
    }
  }
  
  // Bump cache key
  await db.collection('sync_meta').doc('questions').set({
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    version: Date.now()
  }, { merge: true });

  console.log(`Successfully appended ${count} visual questions to y7-4a.`);
  process.exit(0);
}

run();
