import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Fisher-Yates shuffle algorithm
function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

async function run() {
  // We want to shuffle options for both y8-2a and y8-2b topics
  const topics = ['y8-2a', 'y8-2b'];
  let totalCount = 0;

  for (const topicId of topics) {
    const snap = await db.collection('questions')
      .where('topicId', '==', topicId)
      .get();

    const batch = db.batch();
    let topicCount = 0;

    snap.forEach(doc => {
      const q = doc.data();
      if (q.type === 'multiple_choice' && q.options && q.options.length > 0) {
        const originalOptions = [...q.options];
        const correctText = originalOptions[q.answer];

        // Create pairs of {text, isCorrect} to shuffle safely
        const paired = originalOptions.map((opt, index) => ({
          text: opt,
          isCorrect: index === q.answer
        }));

        // Shuffle
        shuffle(paired);

        // Map back to options array and find the new index of correct answer
        const shuffledOptions = paired.map(p => p.text);
        const newAnswerIndex = paired.findIndex(p => p.isCorrect);

        const ref = db.collection('questions').doc(doc.id);
        batch.update(ref, {
          options: shuffledOptions,
          answer: newAnswerIndex
        });
        topicCount++;
      }
    });

    if (topicCount > 0) {
      await batch.commit();
      console.log(`✅ Shuffled options and randomized answers for ${topicCount} questions in ${topicId}!`);
      totalCount += topicCount;
    }
  }

  console.log(`\n🎉 Completed shuffles. Shuffled ${totalCount} questions total across y8-2a and y8-2b!`);
}

run().catch(console.error);
