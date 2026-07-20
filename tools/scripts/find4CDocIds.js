import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  const snap = await db.collection('questions').where('topicId', '==', 'y7-4c').get();
  const docs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  console.log('Total 4C questions in DB:', docs.length);

  const targetQuestions = [
    "Convert the improper fraction $\\frac{19}{6}$ to a mixed numeral.",
    "Convert the improper fraction $\\frac{23}{5}$ to a mixed numeral.",
    "Convert the improper fraction $\\frac{52}{48}$ to a mixed numeral in its simplest form.",
    "Convert the improper fraction $\\frac{150}{120}$ to a mixed numeral in its simplest form.",
    "Convert the improper fraction $\\frac{99}{32}$ to a mixed numeral."
  ];

  targetQuestions.forEach((t, index) => {
    const match = docs.find(d => d.question && d.question.trim() === t.trim());
    if (match) {
      console.log(`Q${index+2} Match -> ID: ${match.id}`);
    } else {
      console.log(`Q${index+2} Match -> NOT FOUND`);
    }
  });

  process.exit(0);
})();
