import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  const snap = await db.collection('questions').where('topicId', '==', 'y7-4e').get();
  const docs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  console.log('Total 4E questions in DB:', docs.length);

  const targetQuestions = [
    "Find the next four terms in the sequence: $\\frac{1}{8}, \\frac{1}{4}, \\frac{3}{8}, \\frac{1}{2}, \\dots$",
    "Evaluate the sum: $\\frac{2}{9} + \\frac{5}{9}$",
    "Evaluate the sum: $\\frac{5}{12} + \\frac{2}{12}$",
    "Evaluate the sum in simplest form: $\\frac{3}{10} + \\frac{3}{10}$",
    "Evaluate the sum: $\\frac{3}{5} + \\frac{7}{5}$",
    "Evaluate the sum in simplest form: $\\frac{5}{8} + \\frac{5}{8}$",
    "Evaluate the sum in simplest form: $\\frac{11}{14} + \\frac{5}{14}$",
    "Evaluate the sum in simplest form: $\\frac{3}{10} + \\frac{2}{5}$",
    "Evaluate the sum: $\\frac{5}{16} + \\frac{3}{8}$",
    "Evaluate the sum: $\\frac{7}{9} + \\frac{2}{3}$"
  ];

  targetQuestions.forEach((t, index) => {
    const match = docs.find(d => {
      const dbQ = d.question ? d.question.trim().replace(/\\dfrac/g, '\\frac') : '';
      const targetQ = t.trim().replace(/\\dfrac/g, '\\frac');
      return dbQ === targetQ || dbQ.includes(t.substring(0, 30));
    });
    if (match) {
      console.log(`Q${index+3} Match -> ID: ${match.id}`);
    } else {
      console.log(`Q${index+3} Match -> NOT FOUND`);
    }
  });

  process.exit(0);
})();
