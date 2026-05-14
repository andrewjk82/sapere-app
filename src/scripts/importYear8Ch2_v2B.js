import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}
const db = admin.firestore();

const ch2bQuestions = [
  // 1. Same Denominator Addition (6 Qs)
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'easy', question: 'Find the value of: $\\frac{2}{5} + \\frac{4}{5}$', options: ['$1\\frac{1}{5}$', '$\\frac{6}{10}$', '$\\frac{5}{5}$', '$1\\frac{2}{5}$'], answer: 0, solution: '1. Add numerators: $2 + 4 = 6$.\n2. Denominator remains 5: $\\frac{6}{5}$.\n3. Convert to mixed number: $1\\frac{1}{5}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'easy', question: 'Find the value of: $\\frac{1}{7} + \\frac{3}{7} + \\frac{5}{7}$', options: ['$1\\frac{2}{7}$', '$\\frac{9}{21}$', '$1\\frac{1}{7}$', '$\\frac{8}{7}$'], answer: 0, solution: 'Sum $= \\frac{1+3+5}{7} = \\frac{9}{7} = 1\\frac{2}{7}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'easy', question: 'Find the value of: $\\frac{5}{9} + \\frac{7}{9}$', options: ['$1\\frac{1}{3}$', '$1\\frac{2}{9}$', '$\\frac{12}{18}$', '$1\\frac{4}{9}$'], answer: 0, solution: 'Sum $= \\frac{12}{9}$. Simplify: $\\frac{4}{3} = 1\\frac{1}{3}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'easy', question: 'Find the value of: $\\frac{4}{11} + \\frac{3}{11} + \\frac{5}{11}$', options: ['$1\\frac{1}{11}$', '$\\frac{12}{11}$', '$1\\frac{2}{11}$', '$\\frac{12}{33}$'], answer: 0, solution: 'Sum $= \\frac{4+3+5}{11} = \\frac{12}{11} = 1\\frac{1}{11}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'easy', question: 'Find the value of: $\\frac{7}{13} + \\frac{8}{13}$', options: ['$1\\frac{2}{13}$', '$1\\frac{1}{13}$', '$\\frac{15}{26}$', '$\\frac{14}{13}$'], answer: 0, solution: 'Sum $= \\frac{15}{13} = 1\\frac{2}{13}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'easy', question: 'Find the value of: $\\frac{3}{8} + \\frac{7}{8}$', options: ['$1\\frac{1}{4}$', '$1\\frac{3}{8}$', '$\\frac{10}{16}$', '$1\\frac{1}{2}$'], answer: 0, solution: 'Sum $= \\frac{10}{8}$. Simplify: $\\frac{5}{4} = 1\\frac{1}{4}$.' },

  // 2. Subtraction and Mixed Numbers (6 Qs)
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'medium', question: 'Evaluate: $\\frac{5}{6} - \\frac{1}{6}$', options: ['$\\frac{2}{3}$', '$\\frac{4}{12}$', '$\\frac{1}{2}$', '$\\frac{3}{6}$'], answer: 0, solution: '$\\frac{5-1}{6} = \\frac{4}{6}$. Simplify by 2: $\\frac{2}{3}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'medium', question: 'Evaluate: $\\frac{11}{12} - \\frac{5}{12}$', options: ['$\\frac{1}{2}$', '$\\frac{6}{24}$', '$\\frac{1}{3}$', '$\\frac{5}{12}$'], answer: 0, solution: '$\\frac{11-5}{12} = \\frac{6}{12} = \\frac{1}{2}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'medium', question: 'Evaluate: $3\\frac{3}{7} - 1\\frac{1}{7}$', options: ['$2\\frac{2}{7}$', '$2\\frac{1}{7}$', '$1\\frac{2}{7}$', '$2\\frac{3}{7}$'], answer: 0, solution: 'Whole numbers: $3 - 1 = 2$.\nFractions: $\\frac{3}{7} - \\frac{1}{7} = \\frac{2}{7}$.\nResult: $2\\frac{2}{7}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'medium', question: 'Evaluate: $1\\frac{8}{15} - \\frac{4}{15}$', options: ['$1\\frac{4}{15}$', '$1\\frac{1}{15}$', '$\\frac{19}{15}$', '$\\frac{4}{15}$'], answer: 0, solution: '$1 + (\\frac{8-4}{15}) = 1\\frac{4}{15}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'medium', question: 'Evaluate: $2\\frac{5}{8} - 1\\frac{3}{8}$', options: ['$1\\frac{1}{4}$', '$1\\frac{1}{2}$', '$\\frac{2}{8}$', '$1\\frac{3}{8}$'], answer: 0, solution: 'Whole: $2-1=1$. Fractions: $\\frac{5-3}{8} = \\frac{2}{8} = \\frac{1}{4}$. Result: $1\\frac{1}{4}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'medium', question: 'Evaluate: $4\\frac{7}{10} - 2\\frac{3}{10}$', options: ['$2\\frac{2}{5}$', '$2\\frac{4}{10}$', '$2\\frac{1}{2}$', '$1\\frac{2}{5}$'], answer: 0, solution: 'Whole: $4-2=2$. Fractions: $\\frac{4}{10} = \\frac{2}{5}$. Result: $2\\frac{2}{5}$.' },

  // 3. Different Denominators (11 Qs)
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'medium', question: 'Evaluate: $\\frac{1}{2} + \\frac{2}{5}$', options: ['$\\frac{9}{10}$', '$\\frac{3}{7}$', '$\\frac{4}{5}$', '$\\frac{7}{10}$'], answer: 0, solution: 'LCD is 10.\n$\\frac{1 \\times 5}{2 \\times 5} = \\frac{5}{10}$\n$\\frac{2 \\times 2}{5 \\times 2} = \\frac{4}{10}$\nSum: $\\frac{5+4}{10} = \\frac{9}{10}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'medium', question: 'Evaluate: $\\frac{3}{4} + \\frac{1}{6}$', options: ['$\\frac{11}{12}$', '$\\frac{4}{10}$', '$\\frac{2}{3}$', '$\\frac{5}{6}$'], answer: 0, solution: 'LCD of 4 and 6 is 12.\n$\\frac{3 \\times 3}{4 \\times 3} = \\frac{9}{12}$\n$\\frac{1 \\times 2}{6 \\times 2} = \\frac{2}{12}$\nSum: $\\frac{11}{12}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'medium', question: 'Evaluate: $\\frac{2}{7} + \\frac{1}{3}$', options: ['$\\frac{13}{21}$', '$\\frac{3}{10}$', '$\\frac{11}{21}$', '$\\frac{5}{21}$'], answer: 0, solution: 'LCD is 21.\n$\\frac{2 \\times 3}{7 \\times 3} = \\frac{6}{21}$\n$\\frac{1 \\times 7}{3 \\times 7} = \\frac{7}{21}$\nSum: $\\frac{13}{21}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'medium', question: 'Evaluate: $\\frac{4}{9} + \\frac{1}{2}$', options: ['$\\frac{17}{18}$', '$\\frac{5}{11}$', '$\\frac{15}{18}$', '$\\frac{8}{9}$'], answer: 0, solution: 'LCD is 18.\n$\\frac{8}{18} + \\frac{9}{18} = \\frac{17}{18}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'medium', question: 'Evaluate: $\\frac{2}{5} + \\frac{3}{8}$', options: ['$\\frac{31}{40}$', '$\\frac{5}{13}$', '$\\frac{29}{40}$', '$\\frac{3}{4}$'], answer: 0, solution: 'LCD is 40.\n$\\frac{16}{40} + \\frac{15}{40} = \\frac{31}{40}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'medium', question: 'Evaluate: $\\frac{5}{12} + \\frac{1}{4}$', options: ['$\\frac{2}{3}$', '$\\frac{8}{12}$', '$\\frac{3}{4}$', '$\\frac{7}{12}$'], answer: 0, solution: 'LCD is 12.\n$\\frac{5}{12} + \\frac{3}{12} = \\frac{8}{12} = \\frac{2}{3}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'medium', question: 'Evaluate: $\\frac{7}{10} + \\frac{1}{4}$', options: ['$\\frac{19}{20}$', '$\\frac{8}{14}$', '$\\frac{17}{20}$', '$\\frac{3}{4}$'], answer: 0, solution: 'LCD is 20.\n$\\frac{14}{20} + \\frac{5}{20} = \\frac{19}{20}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'medium', question: 'Evaluate: $\\frac{3}{8} + \\frac{1}{6}$', options: ['$\\frac{13}{24}$', '$\\frac{4}{14}$', '$\\frac{11}{24}$', '$\\frac{5}{24}$'], answer: 0, solution: 'LCD is 24.\n$\\frac{9}{24} + \\frac{4}{24} = \\frac{13}{24}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'medium', question: 'Evaluate: $\\frac{4}{15} + \\frac{1}{10}$', options: ['$\\frac{11}{30}$', '$\\frac{5}{25}$', '$\\frac{9}{30}$', '$\\frac{1}{3}$'], answer: 0, solution: 'LCD is 30.\n$\\frac{8}{30} + \\frac{3}{30} = \\frac{11}{30}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'medium', question: 'Evaluate: $\\frac{5}{6} + \\frac{3}{8}$', options: ['$1\\frac{5}{24}$', '$\\frac{8}{14}$', '$1\\frac{1}{24}$', '$1\\frac{7}{24}$'], answer: 0, solution: 'LCD is 24.\n$\\frac{20}{24} + \\frac{9}{24} = \\frac{29}{24} = 1\\frac{5}{24}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'medium', question: 'Evaluate: $\\frac{1}{3} + \\frac{5}{12}$', options: ['$\\frac{3}{4}$', '$\\frac{6}{15}$', '$\\frac{9}{12}$', '$\\frac{2}{3}$'], answer: 0, solution: 'LCD is 12.\n$\\frac{4}{12} + \\frac{5}{12} = \\frac{9}{12} = \\frac{3}{4}$.' }
];

async function seed() {
  console.log(`[Ch2B Import] Seeding ${ch2bQuestions.length} questions to Year 8 Chapter 2B...`);
  const batch = db.batch();
  const collRef = db.collection('questions');
  
  ch2bQuestions.forEach(q => {
    const docRef = collRef.doc();
    batch.set(docRef, {
      ...q,
      chapterTitle: 'Chapter 2: Fractions and decimals',
      topicCode: '2B',
      topicTitle: 'Adding and subtracting fractions',
      year: 'Year 8',
      type: 'multiple_choice',
      isManual: true,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
  });

  await batch.commit();
  console.log(`Successfully added ${ch2bQuestions.length} questions to 2B!`);
  process.exit(0);
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
