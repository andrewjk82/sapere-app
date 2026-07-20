import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  const snap = await db.collection('questions').where('topicId', '==', 'y7-4f').get();
  const docs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  console.log('Total 4F questions in DB:', docs.length);

  const targetQuestions = [
    "Which of the following shows three DIFFERENT fractions that sum to exactly $\\frac{7}{8}$?",
    "Which pair of fractions has a difference that is strictly a little more than $\\frac{1}{2}$?",
    "Which of the following shows three DIFFERENT fractions that sum to exactly $\\frac{1}{2}$?",
    "Which pair of fractions has a difference of exactly $\\frac{2}{3}$?",
    "Oliver collects $\\frac{3}{4}$ of a bucket of berries, Sophia collects $1\\frac{1}{2}$ buckets, and Noah collects $\\frac{1}{8}$ of a bucket. How many buckets of berries did they collect in total?",
    "When Liam took $\\frac{4}{5}$ of the chocolates in a box, there were $6$ chocolates left. How many chocolates did Liam take?",
    "Evaluate in simplest form: $\\frac{4}{7} \\times \\frac{7}{8}$",
    "Evaluate in simplest form: $\\frac{3}{8} \\times \\frac{4}{5}$",
    "Evaluate in simplest form: $\\frac{5}{9} \\times \\frac{3}{5}$",
    "Evaluate in simplest form: $\\frac{2}{9} \\times \\frac{3}{4}$"
  ];

  targetQuestions.forEach((t, index) => {
    const match = docs.find(d => {
      const dbQ = d.question ? d.question.trim().replace(/\\dfrac/g, '\\frac') : '';
      const targetQ = t.trim().replace(/\\dfrac/g, '\\frac');
      return dbQ === targetQ || dbQ.includes(t.substring(0, 30));
    });
    if (match) {
      console.log(`Q${index+1} Match -> ID: ${match.id}`);
    } else {
      console.log(`Q${index+1} Match -> NOT FOUND`);
    }
  });

  process.exit(0);
})();
