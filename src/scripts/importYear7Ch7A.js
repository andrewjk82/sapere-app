import { db } from '../firebase/config.js';
import { collection, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = [];

export const importYear7Ch7A = async (forceReset = false) => {
  console.log('[Ch7A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting ALL existing Y7 Ch7 questions...');
      const existingSnap = await getDocs(query(qRef, where('chapterId', '==', 'y7-7')));
      for (const doc of existingSnap.docs) {
        await deleteDoc(doc.ref);
      }
      console.log(`Deleted ${existingSnap.size} existing Ch7 questions.`);
    }

    console.log(`[Ch7A Year 7 Import] Done. ${importedCount} new questions added.`);
    return importedCount;
  } catch (error) {
    console.error('[Ch7A Year 7 Import] ERROR:', error);
    return 0;
  }
};
