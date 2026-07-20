import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  const snap = await db.collection('questions').where('topicId', '==', 'y7-4b').get();
  const docs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  
  const targetQuestions = [
    "Which option lists two fractions that are BOTH equivalent to $\\frac{6}{12}$?",
    "Which option lists two fractions that are BOTH equivalent to $\\frac{5}{20}$?",
    "Which option lists two fractions that are BOTH equivalent to $\\frac{18}{48}$?",
    "Which option lists two fractions that are BOTH equivalent to $\\frac{4}{5}$?",
    "Which option lists two fractions that are BOTH equivalent to $\\frac{9}{10}$?",
    "Which option lists two fractions that are BOTH equivalent to $\\frac{7}{9}$?",
    "Which option lists two mixed numbers or fractions that are BOTH equivalent to $2\\frac{1}{3}$?",
    "Which option lists two mixed numbers or fractions that are BOTH equivalent to $3\\frac{1}{4}$?",
    "Which option lists two mixed numbers or fractions that are BOTH equivalent to $2\\frac{4}{5}$?",
    "Which option lists two fractions that are BOTH equivalent to $\\frac{5}{18}$?"
  ];

  targetQuestions.forEach((t, index) => {
    const match = docs.find(d => d.question && d.question.trim() === t.trim());
    if (match) {
      console.log(`Q${index+1} Match -> ID: ${match.id}, isNew: ${match.isNew}`);
    } else {
      console.log(`Q${index+1} Match -> NOT FOUND`);
    }
  });

  process.exit(0);
})();
