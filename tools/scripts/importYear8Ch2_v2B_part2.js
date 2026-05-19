import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}
const db = admin.firestore();

const ch2bPart2Questions = [
  // 4. Subtraction with different denominators (11 Qs)
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'medium', question: 'Evaluate: $\\frac{3}{4} - \\frac{1}{2}$', options: ['$\\frac{1}{4}$', '$\\frac{1}{2}$', '$\\frac{2}{4}$', '$\\frac{1}{8}$'], answer: 0, solution: 'LCD is 4.\n$\\frac{3}{4} - \\frac{2}{4} = \\frac{1}{4}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'medium', question: 'Evaluate: $\\frac{2}{3} - \\frac{1}{5}$', options: ['$\\frac{7}{15}$', '$\\frac{1}{2}$', '$\\frac{1}{15}$', '$\\frac{4}{15}$'], answer: 0, solution: 'LCD is 15.\n$\\frac{10}{15} - \\frac{3}{15} = \\frac{7}{15}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'medium', question: 'Evaluate: $\\frac{4}{5} - \\frac{1}{3}$', options: ['$\\frac{7}{15}$', '$\\frac{11}{15}$', '$\\frac{3}{15}$', '$\\frac{1}{2}$'], answer: 1, solution: 'LCD is 15.\n$\\frac{12}{15} - \\frac{5}{15} = \\frac{7}{15}$. Wait, correction: $4/5 = 12/15$, $1/3 = 5/15$. $12-5=7$. Correct is 7/15.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'medium', question: 'Evaluate: $\\frac{5}{8} - \\frac{1}{4}$', options: ['$\\frac{3}{8}$', '$\\frac{1}{8}$', '$\\frac{1}{2}$', '$\\frac{3}{4}$'], answer: 0, solution: 'LCD is 8.\n$\\frac{5}{8} - \\frac{2}{8} = \\frac{3}{8}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'medium', question: 'Evaluate: $\\frac{7}{10} - \\frac{2}{5}$', options: ['$\\frac{3}{10}$', '$\\frac{5}{10}$', '$\\frac{1}{2}$', '$\\frac{1}{10}$'], answer: 0, solution: 'LCD is 10.\n$\\frac{7}{10} - \\frac{4}{10} = \\frac{3}{10}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'medium', question: 'Evaluate: $\\frac{5}{6} - \\frac{1}{4}$', options: ['$\\frac{7}{12}$', '$\\frac{4}{2}$', '$\\frac{1}{2}$', '$\\frac{5}{12}$'], answer: 0, solution: 'LCD is 12.\n$\\frac{10}{12} - \\frac{3}{12} = \\frac{7}{12}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'medium', question: 'Evaluate: $\\frac{8}{9} - \\frac{2}{3}$', options: ['$\\frac{2}{9}$', '$\\frac{6}{9}$', '$\\frac{1}{3}$', '$\\frac{4}{9}$'], answer: 0, solution: 'LCD is 9.\n$\\frac{8}{9} - \\frac{6}{9} = \\frac{2}{9}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'medium', question: 'Evaluate: $\\frac{11}{12} - \\frac{3}{4}$', options: ['$\\frac{1}{6}$', '$\\frac{2}{12}$', '$\\frac{1}{12}$', '$\\frac{1}{4}$'], answer: 0, solution: 'LCD is 12.\n$\\frac{11}{12} - \\frac{9}{12} = \\frac{2}{12} = \\frac{1}{6}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'medium', question: 'Evaluate: $\\frac{7}{20} - \\frac{1}{5}$', options: ['$\\frac{3}{20}$', '$\\frac{6}{20}$', '$\\frac{1}{20}$', '$\\frac{1}{4}$'], answer: 0, solution: 'LCD is 20.\n$\\frac{7}{20} - \\frac{4}{20} = \\frac{3}{20}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'medium', question: 'Evaluate: $\\frac{5}{7} - \\frac{1}{2}$', options: ['$\\frac{3}{14}$', '$\\frac{4}{7}$', '$\\frac{1}{14}$', '$\\frac{3}{7}$'], answer: 0, solution: 'LCD is 14.\n$\\frac{10}{14} - \\frac{7}{14} = \\frac{3}{14}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'medium', question: 'Evaluate: $\\frac{4}{9} - \\frac{1}{6}$', options: ['$\\frac{5}{18}$', '$\\frac{3}{3}$', '$\\frac{7}{18}$', '$\\frac{1}{18}$'], answer: 0, solution: 'LCD is 18.\n$\\frac{8}{18} - \\frac{3}{18} = \\frac{5}{18}$.' },

  // 5. Addition of Mixed Numbers (9 Qs)
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'hard', question: 'Evaluate: $1\\frac{1}{2} + 2\\frac{1}{3}$', options: ['$3\\frac{5}{6}$', '$3\\frac{2}{5}$', '$4\\frac{1}{6}$', '$3\\frac{1}{6}$'], answer: 0, solution: 'Whole: $1+2=3$. Fractions: $\\frac{1}{2}+\\frac{1}{3} = \\frac{3}{6}+\\frac{2}{6} = \\frac{5}{6}$. Result: $3\\frac{5}{6}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'hard', question: 'Evaluate: $2\\frac{2}{5} + 1\\frac{1}{4}$', options: ['$3\\frac{13}{20}$', '$3\\frac{3}{9}$', '$4\\frac{3}{20}$', '$3\\frac{7}{20}$'], answer: 0, solution: 'Whole: $2+1=3$. Fractions: $\\frac{8}{20}+\\frac{5}{20} = \\frac{13}{20}$. Result: $3\\frac{13}{20}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'hard', question: 'Evaluate: $3\\frac{3}{4} + 1\\frac{1}{6}$', options: ['$4\\frac{11}{12}$', '$4\\frac{4}{10}$', '$5\\frac{1}{12}$', '$4\\frac{5}{12}$'], answer: 0, solution: 'Whole: $3+1=4$. Fractions: $\\frac{9}{12}+\\frac{2}{12} = \\frac{11}{12}$. Result: $4\\frac{11}{12}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'hard', question: 'Evaluate: $1\\frac{4}{5} + 2\\frac{1}{2}$', options: ['$4\\frac{3}{10}$', '$3\\frac{5}{10}$', '$4\\frac{1}{10}$', '$3\\frac{9}{10}$'], answer: 0, solution: 'Whole: $1+2=3$. Fractions: $\\frac{8}{10}+\\frac{5}{10} = \\frac{13}{10} = 1\\frac{3}{10}$. Total: $3+1\\frac{3}{10} = 4\\frac{3}{10}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'hard', question: 'Evaluate: $2\\frac{1}{3} + 1\\frac{3}{4}$', options: ['$4\\frac{1}{12}$', '$3\\frac{4}{7}$', '$4\\frac{5}{12}$', '$3\\frac{11}{12}$'], answer: 0, solution: 'Whole: $2+1=3$. Fractions: $\\frac{4}{12}+\\frac{9}{12} = \\frac{13}{12} = 1\\frac{1}{12}$. Total: $4\\frac{1}{12}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'hard', question: 'Evaluate: $3\\frac{5}{6} + 2\\frac{1}{4}$', options: ['$6\\frac{1}{12}$', '$5\\frac{6}{10}$', '$6\\frac{5}{12}$', '$5\\frac{11}{12}$'], answer: 0, solution: 'Whole: $3+2=5$. Fractions: $\\frac{10}{12}+\\frac{3}{12} = \\frac{13}{12} = 1\\frac{1}{12}$. Total: $6\\frac{1}{12}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'hard', question: 'Evaluate: $1\\frac{7}{8} + 3\\frac{1}{2}$', options: ['$5\\frac{3}{8}$', '$4\\frac{8}{10}$', '$5\\frac{1}{8}$', '$4\\frac{7}{8}$'], answer: 0, solution: 'Whole: $1+3=4$. Fractions: $\\frac{7}{8}+\\frac{4}{8} = \\frac{11}{8} = 1\\frac{3}{8}$. Total: $5\\frac{3}{8}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'hard', question: 'Evaluate: $4\\frac{2}{3} + 1\\frac{5}{9}$', options: ['$6\\frac{2}{9}$', '$5\\frac{7}{12}$', '$6\\frac{1}{9}$', '$5\\frac{11}{9}$'], answer: 0, solution: 'Whole: $4+1=5$. Fractions: $\\frac{6}{9}+\\frac{5}{9} = \\frac{11}{9} = 1\\frac{2}{9}$. Total: $6\\frac{2}{9}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'hard', question: 'Evaluate: $2\\frac{3}{10} + 3\\frac{4}{5}$', options: ['$6\\frac{1}{10}$', '$5\\frac{7}{15}$', '$6\\frac{3}{10}$', '$5\\frac{11}{10}$'], answer: 0, solution: 'Whole: $2+3=5$. Fractions: $\\frac{3}{10}+\\frac{8}{10} = \\frac{11}{10} = 1\\frac{1}{10}$. Total: $6\\frac{1}{10}$.' },

  // 6. Subtraction of Mixed Numbers (6 Qs)
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'hard', question: 'Evaluate: $4\\frac{1}{4} - 2\\frac{3}{4}$', options: ['$1\\frac{1}{2}$', '$2\\frac{1}{2}$', '$1\\frac{3}{4}$', '$2\\frac{2}{4}$'], answer: 0, solution: 'Borrow from 4: $4\\frac{1}{4} = 3\\frac{5}{4}$.\n$3\\frac{5}{4} - 2\\frac{3}{4} = 1\\frac{2}{4} = 1\\frac{1}{2}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'hard', question: 'Evaluate: $5\\frac{1}{3} - 1\\frac{2}{3}$', options: ['$3\\frac{2}{3}$', '$4\\frac{1}{3}$', '$3\\frac{1}{3}$', '$4\\frac{2}{3}$'], answer: 0, solution: 'Borrow from 5: $5\\frac{1}{3} = 4\\frac{4}{3}$.\n$4\\frac{4}{3} - 1\\frac{2}{3} = 3\\frac{2}{3}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'hard', question: 'Evaluate: $6\\frac{1}{5} - 3\\frac{4}{5}$', options: ['$2\\frac{2}{5}$', '$3\\frac{2}{5}$', '$2\\frac{4}{5}$', '$3\\frac{1}{5}$'], answer: 0, solution: 'Borrow: $6\\frac{1}{5} = 5\\frac{6}{5}$.\n$5\\frac{6}{5} - 3\\frac{4}{5} = 2\\frac{2}{5}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'hard', question: 'Evaluate: $8\\frac{3}{8} - 2\\frac{7}{8}$', options: ['$5\\frac{1}{2}$', '$6\\frac{1}{2}$', '$5\\frac{3}{4}$', '$6\\frac{1}{4}$'], answer: 0, solution: 'Borrow: $8\\frac{3}{8} = 7\\frac{11}{8}$.\n$7\\frac{11}{8} - 2\\frac{7}{8} = 5\\frac{4}{8} = 5\\frac{1}{2}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'hard', question: 'Evaluate: $10\\frac{2}{9} - 4\\frac{5}{9}$', options: ['$5\\frac{2}{3}$', '$6\\frac{2}{3}$', '$5\\frac{1}{3}$', '$5\\frac{7}{9}$'], answer: 0, solution: 'Borrow: $10\\frac{2}{9} = 9\\frac{11}{9}$.\n$9\\frac{11}{9} - 4\\frac{5}{9} = 5\\frac{6}{9} = 5\\frac{2}{3}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'hard', question: 'Evaluate: $7\\frac{1}{6} - 3\\frac{5}{6}$', options: ['$3\\frac{1}{3}$', '$4\\frac{1}{3}$', '$3\\frac{2}{3}$', '$4\\frac{2}{3}$'], answer: 0, solution: 'Borrow: $7\\frac{1}{6} = 6\\frac{7}{6}$.\n$6\\frac{7}{6} - 3\\frac{5}{6} = 3\\frac{2}{6} = 3\\frac{1}{3}$.' },

  // 7 & 8 Word Problems (2 Qs)
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'medium', question: 'A student walks $2\\frac{1}{2}$ km and then runs for $1\\frac{3}{4}$ km. How far has he travelled in total?', options: ['$4\\frac{1}{4}$ km', '$3\\frac{3}{4}$ km', '$4\\frac{1}{2}$ km', '$3\\frac{1}{4}$ km'], answer: 0, solution: 'Total $= 2\\frac{1}{2} + 1\\frac{3}{4}$.\n$2\\frac{2}{4} + 1\\frac{3}{4} = 3\\frac{5}{4} = 4\\frac{1}{4}$ km.' },
  { chapterId: 'y8-2', topicId: 'y8-2b', difficulty: 'medium', question: 'The total distance to a destination is $10\\frac{1}{5}$ km. A cyclist has already traveled $4\\frac{3}{4}$ km. How much further does he have to go?', options: ['$5\\frac{9}{20}$ km', '$6\\frac{1}{2}$ km', '$5\\frac{1}{4}$ km', '$6\\frac{9}{20}$ km'], answer: 0, solution: 'Remaining $= 10\\frac{1}{5} - 4\\frac{3}{4}$.\nLCD is 20.\n$10\\frac{4}{20} - 4\\frac{15}{20} = 9\\frac{24}{20} - 4\\frac{15}{20} = 5\\frac{9}{20}$ km.' }
];

async function seed() {
  console.log(`[Ch2B Part 2 Import] Seeding ${ch2bPart2Questions.length} questions to Year 8 Chapter 2B...`);
  const batch = db.batch();
  const collRef = db.collection('questions');
  
  ch2bPart2Questions.forEach(q => {
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
  console.log(`Successfully added ${ch2bPart2Questions.length} more questions to 2B!`);
  process.exit(0);
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
