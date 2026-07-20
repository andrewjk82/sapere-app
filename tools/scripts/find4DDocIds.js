import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  const snap = await db.collection('questions').where('topicId', '==', 'y7-4d').get();
  const docs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  console.log('Total 4D questions in DB:', docs.length);

  const targetQuestions = [
    "Which fraction is strictly between $\\frac{1}{3}$ and $\\frac{2}{3}$?",
    "Which fraction is equivalent to $\\frac{2}{3}$, but has a denominator strictly greater than $60$?",
    "Which fraction lies strictly between the integers $4$ and $5$?",
    "Which fraction is larger than $\\frac{3}{5}$ but smaller than $\\frac{7}{8}$?",
    "Which mixed number is larger than $3$, but closer to $3$ than $2\\frac{9}{10}$?",
    "Order the unit fractions $\\frac{1}{3}, \\frac{1}{8}, \\frac{1}{5}, \\frac{1}{12}, \\frac{1}{2}$ from smallest to largest.",
    "Order these fractions from smallest to largest: $\\frac{2}{3}, \\frac{2}{9}, \\frac{1}{9}, \\frac{1}{3}, \\frac{10}{9}$.",
    "Order these fractions from smallest to largest: $\\frac{1}{4}, \\frac{3}{8}, \\frac{5}{8}, \\frac{2}{4}, \\frac{3}{4}.",
    "Order these fractions from smallest to largest: $\\frac{1}{20}, \\frac{14}{15}, \\frac{10}{20}, \\frac{15}{16}, \\frac{3}{12}$.",
    "Order these fractions from smallest to largest: $\\frac{5}{6}, \\frac{3}{4}, \\frac{4}{5}, \\frac{2}{3}, \\frac{2}{9}$."
  ];

  targetQuestions.forEach((t, index) => {
    // Tolerant check due to potential punctuation difference or minor LaTeX differences
    const match = docs.find(d => {
      const dbQ = d.question ? d.question.trim().replace(/\\dfrac/g, '\\frac') : '';
      const targetQ = t.trim().replace(/\\dfrac/g, '\\frac');
      return dbQ === targetQ || dbQ.includes(t.substring(0, 30));
    });
    if (match) {
      console.log(`Q${index+2} Match -> ID: ${match.id}`);
    } else {
      console.log(`Q${index+2} Match -> NOT FOUND`);
    }
  });

  process.exit(0);
})();
