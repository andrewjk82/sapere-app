import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const TOPIC_MAP = {
  'Place value and comparison of decimals': { topicId: 'y7-7a', topicCode: '7A', topicTitle: 'Place value and comparison of decimals' },
  'Converting decimals to fractions and fractions to decimals': { topicId: 'y7-7b', topicCode: '7B', topicTitle: 'Converting decimals to fractions and fractions to decimals' },
  'Addition and subtraction of decimals': { topicId: 'y7-7c', topicCode: '7C', topicTitle: 'Addition and subtraction of decimals' },
  'Multiplication and division by powers of 10': { topicId: 'y7-7d', topicCode: '7D', topicTitle: 'Multiplication and division by powers of 10' },
  'Multiplication of one decimal by another': { topicId: 'y7-7e', topicCode: '7E', topicTitle: 'Multiplication of one decimal by another' },
  'Division of decimals': { topicId: 'y7-7f', topicCode: '7F', topicTitle: 'Division of decimals' },
  'Recurring decimals': { topicId: 'y7-7g', topicCode: '7G', topicTitle: 'Recurring decimals' },
  'Rounding of decimals': { topicId: 'y7-7h', topicCode: '7H', topicTitle: 'Rounding of decimals' },
};

const sa = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
if (!admin.apps.length) admin.initializeApp({ credential: admin.credential.cert(sa) });
const db = admin.firestore();

const run = async () => {
  const snap = await db.collection('questions').where('chapterId', '==', 'y7-7').get();
  console.log(`Found ${snap.size} y7-7 questions to patch.`);

  let patched = 0;
  const CHUNK = 400;
  const docs = snap.docs;

  for (let i = 0; i < docs.length; i += CHUNK) {
    const batch = db.batch();
    const chunk = docs.slice(i, i + CHUNK);
    
    chunk.forEach(doc => {
      const data = doc.data();
      const topicTitle = data.t || '';
      
      // Find matching topic
      const topicInfo = TOPIC_MAP[topicTitle] || null;
      
      if (topicInfo && (!data.topicId || !data.topicCode)) {
        batch.update(doc.ref, {
          topicId: topicInfo.topicId,
          topicCode: topicInfo.topicCode,
          topicTitle: topicInfo.topicTitle,
          chapterTitle: 'Chapter 7: Decimals',
          year: 'Year 7',
          isActive: true,
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        });
        patched++;
      }
    });
    
    await batch.commit();
    console.log(`Processed ${Math.min(i + CHUNK, docs.length)}/${docs.length}...`);
  }

  console.log(`Patched ${patched} questions with correct topicId/topicCode.`);
  process.exit(0);
};

run().catch(e => { console.error(e); process.exit(1); });
