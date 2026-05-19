import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}
const db = admin.firestore();

const ch2bPart3Questions = [
  // 9. Water in jug
  {
    chapterId: 'y8-2',
    topicId: 'y8-2b',
    difficulty: 'hard',
    question: 'Jacinta has $\\frac{3}{5}$ of a litre of water in a jug and then pours in $\\frac{1}{6}$ of a litre. How much water is in the jug now?',
    options: ['$\\frac{23}{30}$ L', '$\\frac{4}{11}$ L', '$\\frac{7}{10}$ L', '$\\frac{13}{30}$ L'],
    answer: 0,
    solution: '1. Addition: $\\frac{3}{5} + \\frac{1}{6}$.\n2. LCD of 5 and 6 is 30.\n3. $\\frac{18}{30} + \\frac{5}{30} = \\frac{23}{30}$ L.'
  },
  // 10. Candies
  {
    chapterId: 'y8-2',
    topicId: 'y8-2b',
    difficulty: 'hard',
    question: 'A box of candies has 30 pieces. Marie ate $\\frac{1}{3}$ of the box on Monday and $\\frac{2}{5}$ of the same box on Tuesday. What fraction of the box did she eat in total?',
    options: ['$\\frac{11}{15}$', '$\\frac{3}{8}$', '$\\frac{3}{15}$', '$\\frac{4}{5}$'],
    answer: 0,
    solution: '1. Total fraction $= \\frac{1}{3} + \\frac{2}{5}$.\n2. LCD is 15.\n3. $\\frac{5}{15} + \\frac{6}{15} = \\frac{11}{15}$.'
  },
  // 11. Rope left
  {
    chapterId: 'y8-2',
    topicId: 'y8-2b',
    difficulty: 'hard',
    question: 'I have a length of rope and cut off $\\frac{4}{9}$ of it. What fraction of the rope do I have left?',
    options: ['$\\frac{5}{9}$', '$\\frac{4}{9}$', '$\\frac{1}{2}$', '$\\frac{2}{3}$'],
    answer: 0,
    solution: '1. Total rope is represented by 1.\n2. Left $= 1 - \\frac{4}{9} = \\frac{9}{9} - \\frac{4}{9} = \\frac{5}{9}$.'
  },
  // 12. Study time
  {
    chapterId: 'y8-2',
    topicId: 'y8-2b',
    difficulty: 'hard',
    question: 'Dimitri spends $\\frac{1}{4}$ of the day on schoolwork and $\\frac{1}{12}$ of the day playing games. As a fraction of the day, how much more time is spent on schoolwork than on games?',
    options: ['$\\frac{1}{6}$', '$\\frac{1}{4}$', '$\\frac{1}{8}$', '$\\frac{1}{3}$'],
    answer: 0,
    solution: '1. Difference $= \\frac{1}{4} - \\frac{1}{12}$.\n2. LCD is 12.\n3. $\\frac{3}{12} - \\frac{1}{12} = \\frac{2}{12} = \\frac{1}{6}$.'
  },
  // 13. Travel
  {
    chapterId: 'y8-2',
    topicId: 'y8-2b',
    difficulty: 'hard',
    question: 'A family travelling cover $\\frac{2}{5}$ of the journey in the morning and a further $\\frac{1}{3}$ in the afternoon. What fraction of the journey have they travelled in total?',
    options: ['$\\frac{11}{15}$', '$\\frac{3}{8}$', '$\\frac{7}{15}$', '$\\frac{4}{15}$'],
    answer: 0,
    solution: 'Sum $= \\frac{2}{5} + \\frac{1}{3} = \\frac{6}{15} + \\frac{5}{15} = \\frac{11}{15}$.'
  },
  // 14. Grid
  {
    chapterId: 'y8-2',
    topicId: 'y8-2b',
    difficulty: 'hard',
    question: 'A large square is subdivided into 64 small squares. 13 of these squares are painted blue and the remainder are white. What fraction of the large square is blue?',
    options: ['$\\frac{13}{64}$', '$\\frac{1}{4}$', '$\\frac{51}{64}$', '$\\frac{13}{51}$'],
    answer: 0,
    solution: 'Total squares $= 64$, blue squares $= 13$. Fraction $= \\frac{13}{64}$.'
  },
  // 15. Blocks
  {
    chapterId: 'y8-2',
    topicId: 'y8-2b',
    difficulty: 'hard',
    question: 'A rectangular block is broken into 32 equal pieces. Samantha takes 9 pieces and Jacob takes 11. What fraction of the original block is left?',
    options: ['$\\frac{3}{8}$', '$\\frac{5}{8}$', '$\\frac{20}{32}$', '$\\frac{12}{20}$'],
    answer: 0,
    solution: '1. Total pieces used $= 9 + 11 = 20$.\n2. Pieces left $= 32 - 20 = 12$.\n3. Fraction left $= \\frac{12}{32}$. Simplify by 4: $\\frac{3}{8}$.'
  },
  // 16. Marbles
  {
    chapterId: 'y8-2',
    topicId: 'y8-2b',
    difficulty: 'hard',
    question: 'In a bag of marbles, $\\frac{1}{4}$ are green, $\\frac{1}{6}$ are yellow and $\\frac{1}{3}$ are blue. What fraction are either green or yellow?',
    options: ['$\\frac{5}{12}$', '$\\frac{2}{10}$', '$\\frac{1}{5}$', '$\\frac{1}{2}$'],
    answer: 0,
    solution: '$\\frac{1}{4} + \\frac{1}{6} = \\frac{3}{12} + \\frac{2}{12} = \\frac{5}{12}$.'
  },
  {
    chapterId: 'y8-2',
    topicId: 'y8-2b',
    difficulty: 'hard',
    question: 'In the same bag ($\\frac{1}{4}$ green, $\\frac{1}{6}$ yellow, $\\frac{1}{3}$ blue), what fraction are green or blue?',
    options: ['$\\frac{7}{12}$', '$\\frac{2}{7}$', '$\\frac{1}{2}$', '$\\frac{5}{12}$'],
    answer: 0,
    solution: '$\\frac{1}{4} + \\frac{1}{3} = \\frac{3}{12} + \\frac{4}{12} = \\frac{7}{12}$.'
  },
  {
    chapterId: 'y8-2',
    topicId: 'y8-2b',
    difficulty: 'hard',
    question: 'In the same bag, what fraction are green, yellow or blue?',
    options: ['$\\frac{3}{4}$', '$\\frac{5}{6}$', '$\\frac{2}{3}$', '$\\frac{11}{12}$'],
    answer: 0,
    solution: 'LCD for 4, 6, 3 is 12.\n$\\frac{3}{12} + \\frac{2}{12} + \\frac{4}{12} = \\frac{9}{12} = \\frac{3}{4}$.'
  },
  {
    chapterId: 'y8-2',
    topicId: 'y8-2b',
    difficulty: 'hard',
    question: 'In the same bag, what fraction are NOT green, yellow or blue?',
    options: ['$\\frac{1}{4}$', '$\\frac{1}{3}$', '$\\frac{1}{12}$', '$\\frac{1}{6}$'],
    answer: 0,
    solution: '1. Sum of green, yellow, blue $= \\frac{3}{4}$.\n2. NOT $= 1 - \\frac{3}{4} = \\frac{1}{4}$.'
  }
];

async function seed() {
  console.log(`[Ch2B Part 3 Import] Seeding ${ch2bPart3Questions.length} word problems to Year 8 Chapter 2B...`);
  const batch = db.batch();
  const collRef = db.collection('questions');
  
  ch2bPart3Questions.forEach(q => {
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
  console.log(`Successfully added ${ch2bPart3Questions.length} word problems to 2B!`);
  process.exit(0);
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
