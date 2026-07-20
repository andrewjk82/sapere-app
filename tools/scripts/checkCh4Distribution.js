import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const snapshot = await db.collection('questions').get();
  const allMatches = {};
  
  snapshot.forEach(doc => {
    const data = doc.data();
    const id = doc.id;
    const chapterId = data.chapterId || '';
    const topicId = data.topicId || '';
    
    if (id.includes('y9-4') || chapterId.includes('y9-4') || topicId.includes('y9-4')) {
      allMatches[id] = { chapterId, topicId, title: data.title };
    }
  });
  
  console.log('Total matches found:', Object.keys(allMatches).length);
  
  const topicIdCounts = {};
  const chapterIdCounts = {};
  
  for (const [id, meta] of Object.entries(allMatches)) {
    const tid = meta.topicId || 'empty';
    topicIdCounts[tid] = (topicIdCounts[tid] || 0) + 1;
    
    const cid = meta.chapterId || 'empty';
    chapterIdCounts[cid] = (chapterIdCounts[cid] || 0) + 1;
  }
  
  console.log('Topic ID counts from 82 matches:', topicIdCounts);
  console.log('Chapter ID counts from 82 matches:', chapterIdCounts);
  
  // Print some samples from topicId = 'y9-4a' vs other topicIds
  const samples = Object.entries(allMatches).slice(0, 10).map(([id, meta]) => ({ id, ...meta }));
  console.log('Samples:', JSON.stringify(samples, null, 2));
  
  process.exit(0);
}

run();
