import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  const snap = await db.collection('questions').where('chapterId', '==', 'y7-4').get();
  console.log('Total questions in y7-4:', snap.size);

  const searchPhrases = [
    "three DIFFERENT fractions",
    "difference that is strictly a little more",
    "difference of exactly",
    "Oliver collects",
    "When Liam took",
    "4/7",
    "3/8",
    "5/9",
    "2/9"
  ];

  snap.docs.forEach(doc => {
    const data = doc.data();
    const q = data.question || '';
    
    // Check if question contains any of searchPhrases
    searchPhrases.forEach(phrase => {
      if (q.toLowerCase().includes(phrase.toLowerCase())) {
        console.log(`MATCH -> ID: ${doc.id}, topicId: ${data.topicId}, q: "${q.substring(0, 70)}..."`);
      }
    });
  });

  process.exit(0);
})();
