import { db } from '../firebase/config';
import { collection, getDocs, query, where, addDoc } from 'firebase/firestore';

const syncConfigs = [
  {
    chapterId: 'y10-1',
    name: 'Consumer Arithmetic (Ch 1)',
    getScript: () => import('../scripts/importYear10Ch1_Ultimate.js'),
    importFnName: 'importAllYear10Extra',
  },
  {
    chapterId: 'y10-2',
    name: 'Surds (Ch 2)',
    getScript: () => import('../scripts/importYear10Ch2_Ultimate.js'),
    importFnName: 'importYear10Ch2Ultimate',
  },
  {
    chapterId: 'y10-3',
    name: 'Algebra (Ch 3)',
    getScript: () => import('../scripts/importYear10Ch3.js'),
    importFnName: 'importYear10Ch3',
  },
];

export const performAutoSync = async (showToast) => {
  console.log('[AutoSync] Starting Intelligent Curriculum Audit...');
  
  let totalAdded = 0;
  let activeSyncs = [];

  for (const config of syncConfigs) {
    try {
      // 1. Get DB count
      const qRef = collection(db, 'questions');
      const q = query(qRef, where('chapterId', '==', config.chapterId));
      const snap = await getDocs(q);
      const dbCount = snap.size;

      // 2. Get Local count
      const script = await config.getScript();
      const localQuestions = script.allQuestions || [];
      const localCount = localQuestions.length;

      console.log(`[AutoSync] ${config.name}: DB=${dbCount}, Local=${localCount}`);

      if (localCount > dbCount) {
        console.log(`[AutoSync] Discrepancy found in ${config.name}. Syncing...`);
        activeSyncs.push(config.name);
        
        const importFn = script[config.importFnName];
        if (typeof importFn === 'function') {
          const added = await importFn();
          totalAdded += added;
        } else {
          // Manual fallback if function not found
          const existingQuestions = new Set(snap.docs.map(d => d.data().question));
          for (const qData of localQuestions) {
            if (!existingQuestions.has(qData.question)) {
              await addDoc(collection(db, 'questions'), qData);
              totalAdded++;
            }
          }
        }
      }
    } catch (err) {
      console.error(`[AutoSync] Error syncing ${config.name}:`, err);
    }
  }

  if (totalAdded > 0) {
    showToast(`Curriculum updated! Added ${totalAdded} new questions across ${activeSyncs.join(', ')}.`, 'success');
    console.log(`[AutoSync] Sync complete. Added ${totalAdded} questions.`);
  } else {
    console.log('[AutoSync] All chapters are already up to date.');
  }
};
