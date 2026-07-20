import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Helper to clean description text from options
function cleanOptionText(text) {
  if (!text) return '';

  // If there's a semicolon, it splits the math formula and the description (e.g., "x >= 3; Solid circle at 3, arrow right")
  if (text.includes(';')) {
    return text.split(';')[0].trim();
  }

  const lower = text.toLowerCase().trim();
  // If the text is purely a description of circles, segments, or arrows, clear it
  if (
    lower.includes('circle') ||
    lower.includes('segment') ||
    lower.includes('arrow') ||
    lower.includes('line connecting') ||
    lower.includes('point') ||
    lower.includes('closed') ||
    lower.includes('open')
  ) {
    return '';
  }

  return text;
}

async function run() {
  const snap = await db.collection('questions')
    .where('topicId', '==', 'y11a-4A')
    .get();

  console.log('Cleaning description text from MCQ options in Year 11 Advanced Chapter 4A...');
  let updatedCount = 0;
  const batch = db.batch();

  snap.forEach(d => {
    const data = d.data();
    if (data.type !== 'multiple_choice' || !data.options) return;

    let optionsChanged = false;
    const newOptions = data.options.map(opt => {
      const optObj = typeof opt === 'object' ? opt : { text: opt, imageUrl: '' };
      const cleanedText = cleanOptionText(optObj.text);

      if (cleanedText !== optObj.text) {
        optionsChanged = true;
        return {
          ...optObj,
          text: cleanedText
        };
      }
      return optObj;
    });

    if (optionsChanged) {
      console.log('Cleaned text for question options: ' + d.id);
      batch.update(d.ref, {
        options: newOptions
      });
      updatedCount++;
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
    console.log('Successfully cleaned option texts for ' + updatedCount + ' questions!');
  } else {
    console.log('No option texts needed cleaning.');
  }
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
