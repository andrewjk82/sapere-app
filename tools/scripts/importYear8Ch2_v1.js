import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}
const db = admin.firestore();

const ch2Questions = [
  // 1. Simplest Form (16 Qs)
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'easy', question: 'Write $\\frac{12}{18}$ in simplest form.', options: ['$\\frac{2}{3}$', '$\\frac{3}{4}$', '$\\frac{1}{2}$', '$\\frac{4}{6}$'], answer: 0, solution: 'HCF of 12 and 18 is 6.\n$12 \\div 6 = 2$, $18 \\div 6 = 3$. Result: $\\frac{2}{3}$' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'easy', question: 'Write $\\frac{15}{25}$ in simplest form.', options: ['$\\frac{3}{5}$', '$\\frac{2}{5}$', '$\\frac{3}{4}$', '$\\frac{5}{7}$'], answer: 0, solution: 'HCF of 15 and 25 is 5.\n$15 \\div 5 = 3$, $25 \\div 5 = 5$. Result: $\\frac{3}{5}$' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'easy', question: 'Write $\\frac{14}{21}$ in simplest form.', options: ['$\\frac{2}{3}$', '$\\frac{1}{3}$', '$\\frac{3}{7}$', '$\\frac{2}{7}$'], answer: 0, solution: 'HCF of 14 and 21 is 7.\n$14 \\div 7 = 2$, $21 \\div 7 = 3$. Result: $\\frac{2}{3}$' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'easy', question: 'Write $\\frac{24}{32}$ in simplest form.', options: ['$\\frac{3}{4}$', '$\\frac{2}{3}$', '$\\frac{5}{8}$', '$\\frac{7}{8}$'], answer: 0, solution: 'HCF of 24 and 32 is 8.\n$24 \\div 8 = 3$, $32 \\div 8 = 4$. Result: $\\frac{3}{4}$' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'easy', question: 'Write $\\frac{20}{30}$ in simplest form.', options: ['$\\frac{2}{3}$', '$\\frac{1}{3}$', '$\\frac{2}{5}$', '$\\frac{3}{5}$'], answer: 0, solution: 'Divide by 10: $\\frac{2}{3}$' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'easy', question: 'Write $\\frac{18}{24}$ in simplest form.', options: ['$\\frac{3}{4}$', '$\\frac{2}{3}$', '$\\frac{5}{6}$', '$\\frac{1}{2}$'], answer: 0, solution: 'HCF is 6: $18 \\div 6 = 3$, $24 \\div 6 = 4$. Result: $\\frac{3}{4}$' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'easy', question: 'Write $\\frac{45}{60}$ in simplest form.', options: ['$\\frac{3}{4}$', '$\\frac{2}{3}$', '$\\frac{4}{5}$', '$\\frac{1}{2}$'], answer: 0, solution: 'HCF is 15: $45 \\div 15 = 3$, $60 \\div 15 = 4$. Result: $\\frac{3}{4}$' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'easy', question: 'Write $\\frac{56}{72}$ in simplest form.', options: ['$\\frac{7}{9}$', '$\\frac{5}{9}$', '$\\frac{7}{8}$', '$\\frac{2}{3}$'], answer: 0, solution: 'HCF is 8: $56 \\div 8 = 7$, $72 \\div 8 = 9$. Result: $\\frac{7}{9}$' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'easy', question: 'Write $\\frac{100}{150}$ in simplest form.', options: ['$\\frac{2}{3}$', '$\\frac{1}{2}$', '$\\frac{3}{4}$', '$\\frac{2}{5}$'], answer: 0, solution: 'Divide by 50: $\\frac{2}{3}$' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'easy', question: 'Write $\\frac{48}{64}$ in simplest form.', options: ['$\\frac{3}{4}$', '$\\frac{5}{8}$', '$\\frac{2}{3}$', '$\\frac{1}{2}$'], answer: 0, solution: 'HCF is 16: $48 \\div 16 = 3$, $64 \\div 16 = 4$. Result: $\\frac{3}{4}$' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'easy', question: 'Write $\\frac{21}{28}$ in simplest form.', options: ['$\\frac{3}{4}$', '$\\frac{2}{3}$', '$\\frac{1}{4}$', '$\\frac{5}{7}$'], answer: 0, solution: 'HCF is 7: $21 \\div 7 = 3$, $28 \\div 7 = 4$. Result: $\\frac{3}{4}$' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'easy', question: 'Write $\\frac{35}{49}$ in simplest form.', options: ['$\\frac{5}{7}$', '$\\frac{4}{7}$', '$\\frac{3}{7}$', '$\\frac{2}{7}$'], answer: 0, solution: 'HCF is 7: $35 \\div 7 = 5$, $49 \\div 7 = 7$. Result: $\\frac{5}{7}$' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'easy', question: 'Write $\\frac{81}{90}$ in simplest form.', options: ['$\\frac{9}{10}$', '$\\frac{8}{9}$', '$\\frac{7}{10}$', '$\\frac{4}{5}$'], answer: 0, solution: 'HCF is 9: $81 \\div 9 = 9$, $90 \\div 9 = 10$. Result: $\\frac{9}{10}$' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'easy', question: 'Write $\\frac{63}{81}$ in simplest form.', options: ['$\\frac{7}{9}$', '$\\frac{6}{9}$', '$\\frac{5}{7}$', '$\\frac{3}{4}$'], answer: 0, solution: 'HCF is 9: $63 \\div 9 = 7$, $81 \\div 9 = 9$. Result: $\\frac{7}{9}$' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'easy', question: 'Write $\\frac{120}{160}$ in simplest form.', options: ['$\\frac{3}{4}$', '$\\frac{2}{3}$', '$\\frac{1}{2}$', '$\\frac{4}{5}$'], answer: 0, solution: 'Divide by 40: $\\frac{3}{4}$' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'easy', question: 'Write $\\frac{25}{75}$ in simplest form.', options: ['$\\frac{1}{3}$', '$\\frac{1}{4}$', '$\\frac{2}{3}$', '$\\frac{1}{5}$'], answer: 0, solution: 'Divide by 25: $\\frac{1}{3}$' },

  // 2. Equivalent Pairs (6 Qs)
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'easy', question: 'Are $\\frac{2}{3}$ and $\\frac{10}{15}$ equivalent?', options: ['Yes', 'No'], answer: 0, solution: '$\\frac{2 \\times 5}{3 \\times 5} = \\frac{10}{15}$. Yes.' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'easy', question: 'Are $\\frac{3}{4}$ and $\\frac{9}{12}$ equivalent?', options: ['Yes', 'No'], answer: 0, solution: '$\\frac{3 \\times 3}{4 \\times 3} = \\frac{9}{12}$. Yes.' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'easy', question: 'Are $\\frac{5}{6}$ and $\\frac{20}{24}$ equivalent?', options: ['Yes', 'No'], answer: 0, solution: '$\\frac{5 \\times 4}{6 \\times 4} = \\frac{20}{24}$. Yes.' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'easy', question: 'Are $\\frac{7}{8}$ and $\\frac{49}{64}$ equivalent?', options: ['Yes', 'No'], answer: 1, solution: '$\\frac{7 \\times 8}{8 \\times 8} = \\frac{56}{64}$. So $\\frac{49}{64}$ is NOT equivalent to $\\frac{7}{8}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'easy', question: 'Are $\\frac{4}{9}$ and $\\frac{12}{27}$ equivalent?', options: ['Yes', 'No'], answer: 0, solution: '$\\frac{4 \\times 3}{9 \\times 3} = \\frac{12}{27}$. Yes.' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'easy', question: 'Are $\\frac{2}{5}$ and $\\frac{8}{25}$ equivalent?', options: ['Yes', 'No'], answer: 1, solution: '$\\frac{2 \\times 5}{5 \\times 5} = \\frac{10}{25}$. So $\\frac{8}{25}$ is NOT equivalent.' },

  // 3. Common Denominator & Ordering (2 Qs)
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'medium', question: 'Order $\\frac{1}{2}, \\frac{2}{3}, \\frac{3}{4}$ from smallest to largest.', options: ['$\\frac{1}{2}, \\frac{2}{3}, \\frac{3}{4}$', '$\\frac{3}{4}, \\frac{2}{3}, \\frac{1}{2}$', '$\\frac{1}{2}, \\frac{3}{4}, \\frac{2}{3}$', '$\\frac{2}{3}, \\frac{1}{2}, \\frac{3}{4}$'], answer: 0, solution: 'LCD of 2, 3, 4 is 12.\n$\\frac{1}{2} = \\frac{6}{12}$\n$\\frac{2}{3} = \\frac{8}{12}$\n$\\frac{3}{4} = \\frac{9}{12}$\nOrder: $6 < 8 < 9$.' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'medium', question: 'Order $\\frac{5}{6}, \\frac{7}{8}, \\frac{3}{4}$ from smallest to largest.', options: ['$\\frac{3}{4}, \\frac{5}{6}, \\frac{7}{8}$', '$\\frac{5}{6}, \\frac{3}{4}, \\frac{7}{8}$', '$\\frac{7}{8}, \\frac{5}{6}, \\frac{3}{4}$', '$\\frac{3}{4}, \\frac{7}{8}, \\frac{5}{6}$'], answer: 0, solution: 'LCD of 6, 8, 4 is 24.\n$\\frac{5}{6} = \\frac{20}{24}$\n$\\frac{7}{8} = \\frac{21}{24}$\n$\\frac{3}{4} = \\frac{18}{24}$\nOrder: $18 < 20 < 21$.' },

  // 4. Target Denominator (9 Qs)
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'easy', question: 'Write $\\frac{1}{2}$ with denominator $60$.', options: ['$\\frac{30}{60}$', '$\\frac{20}{60}$', '$\\frac{40}{60}$', '$\\frac{15}{60}$'], answer: 0, solution: '$60 \\div 2 = 30$. So $\\frac{1 \\times 30}{2 \\times 30} = \\frac{30}{60}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'easy', question: 'Write $\\frac{3}{4}$ with denominator $60$.', options: ['$\\frac{45}{60}$', '$\\frac{15}{60}$', '$\\frac{30}{60}$', '$\\frac{40}{60}$'], answer: 0, solution: '$60 \\div 4 = 15$. So $3 \\times 15 = 45$.' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'easy', question: 'Write $\\frac{2}{5}$ with denominator $60$.', options: ['$\\frac{24}{60}$', '$\\frac{12}{60}$', '$\\frac{20}{60}$', '$\\frac{30}{60}$'], answer: 0, solution: '$60 \\div 5 = 12$. So $2 \\times 12 = 24$.' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'easy', question: 'Write $\\frac{5}{6}$ with denominator $60$.', options: ['$\\frac{50}{60}$', '$\\frac{10}{60}$', '$\\frac{45}{60}$', '$\\frac{55}{60}$'], answer: 0, solution: '$60 \\div 6 = 10$. So $5 \\times 10 = 50$.' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'easy', question: 'Write $\\frac{7}{10}$ with denominator $60$.', options: ['$\\frac{42}{60}$', '$\\frac{7}{60}$', '$\\frac{17}{60}$', '$\\frac{37}{60}$'], answer: 0, solution: '$60 \\div 10 = 6$. So $7 \\times 6 = 42$.' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'easy', question: 'Write $\\frac{1}{3}$ with denominator $60$.', options: ['$\\frac{20}{60}$', '$\\frac{10}{60}$', '$\\frac{30}{60}$', '$\\frac{40}{60}$'], answer: 0, solution: '$60 \\div 3 = 20$. So $1 \\times 20 = 20$.' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'easy', question: 'Write $\\frac{4}{15}$ with denominator $60$.', options: ['$\\frac{16}{60}$', '$\\frac{4}{60}$', '$\\frac{12}{60}$', '$\\frac{8}{60}$'], answer: 0, solution: '$60 \\div 15 = 4$. So $4 \\times 4 = 16$.' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'easy', question: 'Write $\\frac{11}{20}$ with denominator $60$.', options: ['$\\frac{33}{60}$', '$\\frac{11}{60}$', '$\\frac{22}{60}$', '$\\frac{44}{60}$'], answer: 0, solution: '$60 \\div 20 = 3$. So $11 \\times 3 = 33$.' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'easy', question: 'Write $\\frac{13}{30}$ with denominator $60$.', options: ['$\\frac{26}{60}$', '$\\frac{13}{60}$', '$\\frac{39}{60}$', '$\\frac{20}{60}$'], answer: 0, solution: '$60 \\div 30 = 2$. So $13 \\times 2 = 26$.' },

  // 5. Ordering (6 Qs)
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'medium', question: 'Arrange from smallest to largest: $\\frac{1}{2}, \\frac{1}{3}, \\frac{1}{4}$', options: ['$\\frac{1}{4}, \\frac{1}{3}, \\frac{1}{2}$', '$\\frac{1}{2}, \\frac{1}{3}, \\frac{1}{4}$', '$\\frac{1}{3}, \\frac{1}{4}, \\frac{1}{2}$', '$\\frac{1}{4}, \\frac{1}{2}, \\frac{1}{3}$'], answer: 0, solution: 'Same numerator: larger denominator = smaller fraction.\nSo $\\frac{1}{4} < \\frac{1}{3} < \\frac{1}{2}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'medium', question: 'Arrange from smallest to largest: $\\frac{2}{5}, \\frac{1}{2}, \\frac{3}{10}$', options: ['$\\frac{3}{10}, \\frac{2}{5}, \\frac{1}{2}$', '$\\frac{2}{5}, \\frac{1}{2}, \\frac{3}{10}$', '$\\frac{1}{2}, \\frac{3}{10}, \\frac{2}{5}$', '$\\frac{3}{10}, \\frac{1}{2}, \\frac{2}{5}$'], answer: 0, solution: 'LCD = 10.\n$\\frac{2}{5} = \\frac{4}{10}$\n$\\frac{1}{2} = \\frac{5}{10}$\n$\\frac{3}{10} = \\frac{3}{10}$\nOrder: $3 < 4 < 5$.' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'medium', question: 'Arrange from smallest to largest: $\\frac{5}{8}, \\frac{3}{4}, \\frac{1}{2}$', options: ['$\\frac{1}{2}, \\frac{5}{8}, \\frac{3}{4}$', '$\\frac{3}{4}, \\frac{5}{8}, \\frac{1}{2}$', '$\\frac{1}{2}, \\frac{3}{4}, \\frac{5}{8}$', '$\\frac{5}{8}, \\frac{1}{2}, \\frac{3}{4}$'], answer: 0, solution: 'LCD = 8.\n$\\frac{3}{4} = \\frac{6}{8}$\n$\\frac{1}{2} = \\frac{4}{8}$\n$\\frac{5}{8} = \\frac{5}{8}$\nOrder: $4 < 5 < 6$.' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'medium', question: 'Arrange from smallest to largest: $\\frac{7}{12}, \\frac{2}{3}, \\frac{5}{6}$', options: ['$\\frac{7}{12}, \\frac{2}{3}, \\frac{5}{6}$', '$\\frac{2}{3}, \\frac{7}{12}, \\frac{5}{6}$', '$\\frac{5}{6}, \\frac{2}{3}, \\frac{7}{12}$', '$\\frac{7}{12}, \\frac{5}{6}, \\frac{2}{3}$'], answer: 0, solution: 'LCD = 12.\n$\\frac{2}{3} = \\frac{8}{12}$\n$\\frac{5}{6} = \\frac{10}{12}$\n$\\frac{7}{12} = \\frac{7}{12}$\nOrder: $7 < 8 < 10$.' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'medium', question: 'Arrange from smallest to largest: $\\frac{3}{5}, \\frac{7}{10}, \\frac{1}{2}$', options: ['$\\frac{1}{2}, \\frac{3}{5}, \\frac{7}{10}$', '$\\frac{3}{5}, \\frac{1}{2}, \\frac{7}{10}$', '$\\frac{7}{10}, \\frac{3}{5}, \\frac{1}{2}$', '$\\frac{1}{2}, \\frac{7}{10}, \\frac{3}{5}$'], answer: 0, solution: 'LCD = 10.\n$\\frac{3}{5} = \\frac{6}{10}$\n$\\frac{1}{2} = \\frac{5}{10}$\n$\\frac{7}{10} = \\frac{7}{10}$\nOrder: $5 < 6 < 7$.' },
  { chapterId: 'y8-2', topicId: 'y8-2a', difficulty: 'medium', question: 'Arrange from smallest to largest: $\\frac{4}{9}, \\frac{1}{3}, \\frac{5}{18}$', options: ['$\\frac{5}{18}, \\frac{1}{3}, \\frac{4}{9}$', '$\\frac{1}{3}, \\frac{5}{18}, \\frac{4}{9}$', '$\\frac{4}{9}, \\frac{1}{3}, \\frac{5}{18}$', '$\\frac{5}{18}, \\frac{4}{9}, \\frac{1}{3}$'], answer: 0, solution: 'LCD = 18.\n$\\frac{4}{9} = \\frac{8}{18}$\n$\\frac{1}{3} = \\frac{6}{18}$\n$\\frac{5}{18} = \\frac{5}{18}$\nOrder: $5 < 6 < 8$.' }
];

async function seed() {
  console.log(`[Ch2 Import] Seeding ${ch2Questions.length} questions to Year 8 Chapter 2A...`);
  const batch = db.batch();
  const collRef = db.collection('questions');
  
  ch2Questions.forEach(q => {
    const docRef = collRef.doc();
    batch.set(docRef, {
      ...q,
      chapterTitle: 'Chapter 2: Fractions and decimals',
      topicCode: '2A',
      topicTitle: 'Equivalent fractions and simplest form',
      year: 'Year 8',
      type: 'multiple_choice',
      isManual: true,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
  });

  await batch.commit();
  console.log(`Successfully added ${ch2Questions.length} questions!`);
  process.exit(0);
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
