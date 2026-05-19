import { db } from '../firebase/config.js';
import { collection, getDocs, query, where } from 'firebase/firestore';

(async () => {
  try {
    console.log('--- FIRESTORE QUESTION COUNT CHECK ---');
    const qRef = collection(db, 'questions');
    
    // Check Chapter 5
    const ch5Snap = await getDocs(query(qRef, where('chapterId', '==', 'y7-5')));
    console.log(`Firestore questions for chapterId 'y7-5': ${ch5Snap.size}`);
    
    const topic5Counts = {};
    ch5Snap.docs.forEach(doc => {
      const topicId = doc.data().topicId || 'unknown';
      topic5Counts[topicId] = (topic5Counts[topicId] || 0) + 1;
    });
    console.log('Chapter 5 Topic breakdown in DB:', topic5Counts);

    // Check Chapter 7
    const ch7Snap = await getDocs(query(qRef, where('chapterId', '==', 'y7-7')));
    console.log(`Firestore questions for chapterId 'y7-7': ${ch7Snap.size}`);
    
    const topic7Counts = {};
    ch7Snap.docs.forEach(doc => {
      const topicId = doc.data().topicId || 'unknown';
      topic7Counts[topicId] = (topic7Counts[topicId] || 0) + 1;
    });
    console.log('Chapter 7 Topic breakdown in DB:', topic7Counts);

    process.exit(0);
  } catch (error) {
    console.error('Error fetching from Firestore:', error);
    process.exit(1);
  }
})();
