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
    "Reduce the fraction to its simplest form: $\\frac{28}{112}$",
    "Reduce the fraction to its simplest form: $\\frac{56}{120}$",
    "Reduce the fraction to its simplest form: $\\frac{400}{150}$",
    "Reduce the fraction to its simplest form: $\\frac{384}{96}$",
    "Reduce the fraction to its simplest form: $\\frac{180}{168}$"
  ];

  targetQuestions.forEach((t, index) => {
    const match = docs.find(d => d.question && d.question.trim() === t.trim());
    if (match) {
      console.log(`Q${index+21} Match -> ID: ${match.id}`);
    } else {
      console.log(`Q${index+21} Match -> NOT FOUND`);
    }
  });

  process.exit(0);
})();
