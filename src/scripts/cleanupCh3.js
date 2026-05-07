import { db } from '../firebase/config.js';
import { collection, getDocs, query, where, deleteDoc, doc } from 'firebase/firestore';

export const cleanupYear10Ch3 = async () => {
  console.log('Cleaning up Year 10 Chapter 3 questions...');
  const qRef = collection(db, 'questions');
  const q = query(qRef, where('chapterId', '==', 'y10-3'));
  const snap = await getDocs(q);
  
  let count = 0;
  for (const d of snap.docs) {
    await deleteDoc(doc(db, 'questions', d.id));
    count++;
  }
  
  console.log(`Successfully deleted ${count} questions.`);
  return count;
};
