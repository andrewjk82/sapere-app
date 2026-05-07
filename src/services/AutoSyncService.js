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

  let anyUpdated = false;

  for (const config of syncConfigs) {
    try {
      // 1. Count questions in the DB for this chapter
      const qRef = collection(db, 'questions');
      const q = query(qRef, where('chapterId', '==', config.chapterId));
      const snap = await getDocs(q);
      const dbCount = snap.size;

      // 2. Load the local script and count its questions
      const script = await config.getScript();
      const localQuestions = script.allQuestions || [];
      const localCount = localQuestions.length;

      console.log(`[AutoSync] ${config.name}: DB=${dbCount}, Local=${localCount}`);

      // 3. If local has more, run the import function from that script
      if (localCount > dbCount) {
        console.log(`[AutoSync] Syncing ${config.name}...`);
        if (!anyUpdated) {
          showToast(`Updating curriculum...`, 'info');
        }
        anyUpdated = true;

        const importFn = script[config.importFnName];
        if (typeof importFn === 'function') {
          await importFn();
          console.log(`[AutoSync] ${config.name} synced successfully.`);
        } else {
          // Fallback: manually deduplicate & insert
          console.warn(`[AutoSync] importFn '${config.importFnName}' not found, running manual insert.`);
          const existingQuestions = new Set(snap.docs.map(d => d.data().question));
          let added = 0;
          for (const q of localQuestions) {
            if (!existingQuestions.has(q.question)) {
              await addDoc(collection(db, 'questions'), q);
              added++;
            }
          }
          console.log(`[AutoSync] Manually inserted ${added} questions for ${config.name}`);
        }
      }
    } catch (err) {
      console.error(`[AutoSync] Failed for ${config.name}:`, err);
    }
  }

  if (anyUpdated) {
    showToast('Curriculum is now up to date!', 'success');
  } else {
    console.log('[AutoSync] All chapters are already synchronized.');
  }
};
