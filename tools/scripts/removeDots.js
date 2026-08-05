import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const saPath = '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json';
const sa = JSON.parse(fs.readFileSync(saPath, 'utf8'));

initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function removeDots() {
  const snapshot = await db.collection('questions')
    .where('topicId', '==', 'y9-7a')
    .get();
  
  const batch = db.batch();
  let count = 0;
  
  snapshot.forEach(doc => {
    const data = doc.data();
    if (data && data.question) {
      let originalSvg = data.question;
      // The circles are generated like:
      // <circle cx="..." cy="..." r="3" fill="#3b82f6" stroke="#ffffff" stroke-width="1.5" />
      // We will remove all <circle ... /> tags from the question string.
      const newSvg = originalSvg.replace(/<circle[^>]*\/>/g, '');
      
      if (originalSvg !== newSvg) {
        batch.update(doc.ref, { question: newSvg });
        count++;
      }
    }
  });
  
  if (count > 0) {
    await batch.commit();
    console.log(`Successfully removed dots from ${count} questions!`);
  } else {
    console.log('No questions found with dots to remove.');
  }
}

removeDots().catch(console.error);
