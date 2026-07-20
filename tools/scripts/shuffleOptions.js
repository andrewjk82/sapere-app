import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Helper to shuffle array
function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

async function run() {
  const backup = JSON.parse(readFileSync('/Users/andrewkim/.gemini/antigravity-ide/brain/a055def1-1288-4a20-a812-87f14859d7ad/scratch/y11a_4A_questions.json', 'utf8'));
  
  console.log('Shuffling option orders and mapping answer indices in y11a-4A...');
  
  const snap = await db.collection('questions')
    .where('topicId', '==', 'y11a-4A')
    .get();

  let updatedCount = 0;
  const batch = db.batch();

  snap.forEach(d => {
    const data = d.data();
    
    // 1. Handle normal multiple choice questions
    if (data.type === 'multiple_choice' && data.options) {
      const backupQ = backup.find(item => item.id === d.id);
      if (!backupQ || !backupQ.options) return;

      const originalCorrectText = typeof backupQ.options[0] === 'object' 
        ? backupQ.options[0].text 
        : String(backupQ.options[0]);

      // Shuffle options currently in Firestore (so we don't lose generated graphs!)
      const shuffledOptions = shuffleArray(data.options);
      const newAnswerIdx = shuffledOptions.findIndex(opt => {
        const text = typeof opt === 'object' ? opt.text : String(opt);
        return String(text).trim() === String(originalCorrectText).trim();
      });

      if (newAnswerIdx >= 0) {
        console.log(`Shuffled normal question ${d.id}: Answer Index ${newAnswerIdx}`);
        batch.update(d.ref, {
          options: shuffledOptions,
          answer: String(newAnswerIdx) // Set updated index as string
        });
        updatedCount++;
      }
    }

    // 2. Handle subquestions structure
    if (data.type === 'subquestions' && data.subQuestions) {
      let subQuestionsChanged = false;
      const newSubQuestions = data.subQuestions.map(sq => {
        if (sq.type !== 'multiple_choice' || !sq.options) return sq;

        // The first option is the correct one in our restructuring definitions
        const originalCorrectText = typeof sq.options[0] === 'object'
          ? sq.options[0].text
          : String(sq.options[0]);

        const shuffledOptions = shuffleArray(sq.options);
        const newAnswerIdx = shuffledOptions.findIndex(opt => {
          const text = typeof opt === 'object' ? opt.text : String(opt);
          return String(text).trim() === String(originalCorrectText).trim();
        });

        if (newAnswerIdx >= 0) {
          subQuestionsChanged = true;
          return {
            ...sq,
            options: shuffledOptions,
            answer: String(newAnswerIdx) // Set updated index as string
          };
        }
        return sq;
      });

      if (subQuestionsChanged) {
        console.log(`Shuffled subquestions for question ${d.id}`);
        batch.update(d.ref, {
          subQuestions: newSubQuestions
        });
        updatedCount++;
      }
    }
  });

  if (updatedCount > 0) {
    const questionsMetaRef = db.doc('sync_meta/questions');
    const now = Date.now();
    batch.update(questionsMetaRef, {
      version: now,
      membershipVersion: now,
      updatedAt: FieldValue.serverTimestamp()
    });

    await batch.commit();
    console.log(`Successfully completed shuffling for ${updatedCount} questions!`);
  } else {
    console.log('No questions updated.');
  }
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
