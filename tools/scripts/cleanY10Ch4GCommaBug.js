import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    const snap = await db.collection('questions').where('topicId', '==', 'y10-4g').get();
    console.log('Scanning 4G questions for option format bugs...');

    for (const doc of snap.docs) {
      const data = doc.data();
      let changed = false;

      // 1. Check main options (opts / options)
      let newOpts = null;
      if (data.opts && Array.isArray(data.opts)) {
        newOpts = data.opts.map(opt => {
          if (typeof opt === 'string' && (opt.includes(',\\;') || opt.includes(',\\,') || opt.includes(',;'))) {
            changed = true;
            // Clean up to simple comma with space
            return opt.replace(/,\\;/g, ', ').replace(/,\\,/g, ', ').replace(/,;/g, ', ');
          }
          return opt;
        });
      }

      // 2. Check solutionSteps workingOut fields
      let newSteps = null;
      if (data.solutionSteps && Array.isArray(data.solutionSteps)) {
        newSteps = data.solutionSteps.map(step => {
          if (step.workingOut && (step.workingOut.includes(',\\;') || step.workingOut.includes(',\\,') || step.workingOut.includes(',;'))) {
            changed = true;
            return {
              ...step,
              workingOut: step.workingOut.replace(/,\\;/g, ', ').replace(/,\\,/g, ', ').replace(/,;/g, ', ')
            };
          }
          return step;
        });
      }

      if (changed) {
        const updateData = {};
        if (newOpts) {
          updateData.opts = newOpts;
          updateData.options = newOpts;
        }
        if (newSteps) {
          updateData.solutionSteps = newSteps;
        }
        await db.collection('questions').doc(doc.id).update(updateData);
        console.log(`  [CLEANED] ${doc.id}`);
      }
    }
    console.log('Cleanup complete.');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
