import { db } from '../firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const performAutoSync = async (showToast) => {
  console.log('Starting Intelligent Auto-Sync Audit...');
  
  const syncConfigs = [
    { 
      chapterId: 'y10-1', 
      name: 'Consumer Arithmetic (Ch 1)',
      getScript: () => import('../scripts/importYear10Ch1_Ultimate.js')
    },
    { 
      chapterId: 'y10-2', 
      name: 'Surds (Ch 2)',
      getScript: () => import('../scripts/importYear10Ch2_Ultimate.js')
    },
    { 
      chapterId: 'y10-3', 
      name: 'Algebra (Ch 3)',
      getScript: () => import('../scripts/importYear10Ch3.js')
    }
  ];

  let syncNeeded = false;

  for (const config of syncConfigs) {
    try {
      // 1. Get DB count
      const qRef = collection(db, 'questions');
      const q = query(qRef, where('chapterId', '==', config.chapterId));
      const snap = await getDocs(q);
      const dbCount = snap.size;

      // 2. Get Local count
      const script = await config.getScript();
      const localCount = script.allQuestions?.length || 0;

      console.log(`${config.name}: DB=${dbCount}, Local=${localCount}`);

      // 3. Sync if local has more
      if (localCount > dbCount) {
        if (!syncNeeded) {
          showToast(`Updating curriculum for ${config.name}...`, 'info');
          syncNeeded = true;
        }
        
        // Use the import function from the script
        // The script names might vary, so we check for common patterns
        const importFn = script[`importYear10Ch${config.chapterId.split('-')[1]}`] || 
                         script.importYear10Ch3 || 
                         script.importQuestions || 
                         script.importSurds;
                         
        if (importFn) {
          await importFn();
          console.log(`Auto-synced ${config.name}`);
        }
      }
    } catch (err) {
      console.error(`Auto-sync failed for ${config.name}:`, err);
    }
  }

  if (syncNeeded) {
    showToast('Curriculum is now up to date!', 'success');
  } else {
    console.log('All curriculum chapters are already synchronized.');
  }
};
