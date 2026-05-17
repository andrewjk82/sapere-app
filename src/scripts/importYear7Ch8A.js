import { db } from '../firebase/config.js';
import { collection, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = [];

export const importYear7Ch8A = async (forceReset = false) => {
  console.log('[Ch8A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting only Y7 Ch8A (y7-8a) questions...');
      const existingSnap = await getDocs(query(qRef, where('topicId', '==', 'y7-8a')));
      for (const doc of existingSnap.docs) {
        await deleteDoc(doc.ref);
      }
      console.log(`Deleted ${existingSnap.size} existing Ch8A questions.`);
    }

    console.log(`[Ch8A Year 7 Import] Done. ${importedCount} new questions added.`);
    return importedCount;
  } catch (error) {
    console.error('[Ch8A Year 7 Import] ERROR:', error);
    return 0;
  }
};
