import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    console.log('[Audit] Checking LaTeX consistency in topic y7-4f...');
    const snap = await db.collection('questions').where('topicId', '==', 'y7-4f').get();
    
    for (const doc of snap.docs) {
      const data = doc.data();
      let isModified = false;

      if (data.solutionSteps) {
        data.solutionSteps.forEach((step, idx) => {
          if (step.workingOut) {
            // Find mismatch cases
            const openCount = (step.workingOut.match(/\\\(/g) || []).length;
            const closeCount = (step.workingOut.match(/\\\)/g) || []).length;

            if (openCount !== closeCount || step.workingOut.includes('\\);')) {
              console.log(`  [FOUND MISMATCH] ID: ${doc.id}, Step: ${idx+1}`);
              console.log(`    Before: "${step.workingOut}"`);

              // Clean up broken delimiters and convert to a clean single math block
              let cleaned = step.workingOut;
              cleaned = cleaned.replace(/\\\)/g, ''); // strip closing tags
              cleaned = cleaned.replace(/\\\(/g, ''); // strip opening tags
              cleaned = cleaned.trim();
              
              // Normalize separators
              cleaned = cleaned.replace(/;\\;\\dfrac/g, ',\\;\\dfrac');
              cleaned = cleaned.replace(/;\\;\\text/g, ',\\;\\text');
              cleaned = cleaned.replace(/;\s*\\;\\dfrac/g, ',\\;\\dfrac');

              step.workingOut = `\\(${cleaned}\\)`;
              console.log(`    After:  "${step.workingOut}"`);
              isModified = true;
            }
          }
        });

        if (isModified) {
          await doc.ref.update({
            solutionSteps: data.solutionSteps
          });
          console.log(`  [REPAIRED] Doc ID: ${doc.id} -> Saved successfully.\n`);
        }
      }
    }

    console.log('LaTeX repair sweep completed.');
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during LaTeX repair:', err);
    process.exit(1);
  }
})();
