import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync, writeFileSync } from 'fs';

// Initialize Firebase Admin
const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Raw seed data path
const seedFilePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear7Ch3BQuestions.js';

// Read existing questions from local seed
const fileContent = readFileSync(seedFilePath, 'utf8');
const jsonStr = fileContent
  .replace('export const Y7_CH3B_QUESTIONS = ', '')
  .trim()
  .replace(/;$/, '');

const originalQuestions = JSON.parse(jsonStr);

// Generate options for algebraic expressions
function generateOptions(id, questionText, correctAnswer) {
  // Clean raw math strings for options
  const cleanAns = correctAnswer.replace(/\\\\\(/g, '').replace(/\\\\\)/g, '').trim();
  
  const optsSet = new Set([cleanAns]);
  const fallbacks = {
    // Standard algebra fallbacks based on common mistakes
    "4m": ["4+m", "m^4", "4/m"],
    "7y": ["7+y", "y^7", "7/y"],
    "pq": ["p+q", "p^q", "q/p"],
    "3ab": ["3+a+b", "3a+b", "a^3b"],
    "xy": ["x+y", "y/x", "x^y"],
    "12k": ["12+k", "k^12", "12/k"],
    "5xyz": ["5+x+y+z", "5xy+z", "x^5yz"],
    "8ab": ["8+a+b", "8a+b", "a^8b"],
    "2p": ["2+p", "p^2", "2/p"],
    "1m": ["1+m", "m", "1/m"],
    "1x": ["1+x", "x", "1/x"],
    "ab": ["a+b", "a/b", "b^a"],
    "5k - 4": ["5(k - 4)", "5k + 4", "k/5 - 4"],
    "y/5": ["y - 5", "5/y", "5y"],
    "4c": ["4+c", "c^4", "4/c"],
    "8m + 15n": ["8m - 15n", "23(m+n)", "8(m+15n)"],
    "4a + 3b": ["4a - 3b", "7(a+b)", "4(a+3b)"],
    "y^2": ["2y", "y+y", "y/2"],
    "m^2 + 5": ["2m + 5", "m + 25", "m^5 + 2"],
    "k^3": ["3k", "k+k+k", "k/3"],
    "p^3 + 7": ["3p + 7", "p^7 + 3", "p + 343"]
  };

  const defaultList = fallbacks[cleanAns] || [
    cleanAns + "+1",
    cleanAns + "-1",
    "2" + cleanAns
  ];

  for (const f of defaultList) {
    optsSet.add(f);
  }

  // Ensure we have exactly 4 unique options
  let seedVal = 1;
  while (optsSet.size < 4) {
    optsSet.add(`${cleanAns}+${seedVal}`);
    seedVal++;
  }

  const rawList = Array.from(optsSet);
  // Sort them to have consistent presentation, then shuffle
  rawList.sort();

  // Pick index randomly based on id hash for deterministic distribution
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash += id.charCodeAt(i);
  }
  const targetIndex = hash % 4;

  const finalOpts = [];
  let fallbackIdx = 0;
  for (let i = 0; i < 4; i++) {
    if (i === targetIndex) {
      finalOpts.push(`\\\\( ${cleanAns} \\\\)`);
    } else {
      let optVal = rawList[fallbackIdx];
      if (optVal === cleanAns) {
        fallbackIdx++;
        optVal = rawList[fallbackIdx];
      }
      finalOpts.push(`\\\\( ${optVal} \\\\)`);
      fallbackIdx++;
    }
  }

  return {
    opts: finalOpts,
    a: targetIndex
  };
}

// Convert all questions
const convertedQuestions = originalQuestions.map((q, idx) => {
  if (q.type === 'teacher_review') return q; // Keep teacher reviews as is

  const cleanAns = q.a.replace(/\\\\\(/g, '').replace(/\\\\\)/g, '').trim();
  const { opts, a } = generateOptions(q.id, q.question, cleanAns);

  // Re-preprocess question text to wrap formulas in LaTeX
  const formattedQuestion = q.question
    .replace(/\$([^$]+)\$/g, '\\\\( $1 \\\\)')
    .replace(/\\\\\(\s*\\\\\(/g, '\\\\(')
    .replace(/\\\\\)\s*\\\\\)/g, '\\\\)');

  // Build standard 3-step solution explanation following strict rules
  const cleanExpr = cleanAns;
  const solutionSteps = [
    {
      explanation: `We begin by identifying the given algebraic description in the question, which asks us to simplify or represent ${formattedQuestion} in standard mathematical form. In algebraic notation, we follow strict conventions such as writing coefficients before variables and omitting multiplication symbols. This step establishes our strategy to eliminate redundancy.`,
      workingOut: `\\\\( \\text{Given: } ${formattedQuestion.includes('\\\\(') ? formattedQuestion.match(/\\\\\((.*?)\\\\\)/)[0] : cleanExpr} \\\\)`
    },
    {
      explanation: `Next, we apply the notation rule to omit the multiplication signs between numbers and variables, or between multiple variables. In this stage, we also order factors alphabetically for clean formatting. A common error here is incorrectly adding or retaining arithmetic symbols, which makes the expression less compact.`,
      workingOut: `\\\\( ${cleanExpr} \\\\)`
    },
    {
      explanation: `Finally, we conclude the simplification and identify the matching representation from the multiple-choice options. The simplified expression is standard algebraic shorthand, indicating multiplication without needing to write the multiply cross explicitly. This represents the final simplified algebraic result.`,
      workingOut: `\\\\( \\text{Final Answer: } ${cleanExpr} \\\\)`
    }
  ];

  return {
    id: q.id,
    type: 'multiple_choice',
    difficulty: q.difficulty || 'easy',
    timeLimit: q.timeLimit || 30,
    question: formattedQuestion,
    opts,
    a,
    answer: a, // strict matching rule 11-1
    options: opts, // strict matching rule 11-1
    solution: null,
    solutionSteps,
    t: q.t || 'Algebraic notation',
    topicId: 'y7-3b',
    isNew: true // Mark as isNew: true so students get new badge notifications
  };
});

// Save locally
const outputContent = `export const Y7_CH3B_QUESTIONS = ${JSON.stringify(convertedQuestions, null, 2)};\n`;
writeFileSync(seedFilePath, outputContent, 'utf8');
console.log('Successfully updated local seed file with 51 converted MCQ questions.');

// Sync to Firestore using transactional batches
async function syncToFirestore() {
  const batch = db.batch();
  const newIds = [];

  for (const q of convertedQuestions) {
    const docRef = db.collection('questions').doc(q.id);
    batch.set(docRef, q, { merge: true });
    newIds.push(q.id);
  }

  // Update sync metadata
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  batch.set(questionsMetaRef, {
    version: now,
    membershipVersion: now, // structural changes (short_answer -> multiple_choice)
    updatedAt: FieldValue.serverTimestamp()
  }, { merge: true });

  // Update newQuestions registry doc
  const newQuestionsMetaRef = db.doc('sync_meta/newQuestions');
  batch.set(newQuestionsMetaRef, {
    ids: FieldValue.arrayUnion(...newIds),
    updatedAt: FieldValue.serverTimestamp()
  }, { merge: true });

  await batch.commit();
  console.log('Successfully synced all 51 questions to Firestore with isNew flag & metadata versions.');
  process.exit(0);
}

syncToFirestore().catch(err => {
  console.error('Firestore sync failed:', err);
  process.exit(1);
});
