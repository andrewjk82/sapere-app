import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    console.log('[Cleanup] Fetching all questions from chapter y7-4 to clean index details...');
    const snap = await db.collection('questions').where('chapterId', '==', 'y7-4').get();
    console.log(`Found ${snap.size} questions in Chapter 4.`);

    let cleanedCount = 0;

    for (const doc of snap.docs) {
      const data = doc.data();
      let updatedSteps = null;

      if (data.solutionSteps && Array.isArray(data.solutionSteps)) {
        let isModified = false;
        
        updatedSteps = data.solutionSteps.map(step => {
          if (step.workingOut) {
            let newWorkingOut = step.workingOut;
            
            // Comprehensive RegExp to match option/index references with various spaces and styles
            const regexPatterns = [
              /\s*\\;\s*\\Rightarrow\s*\\;\s*\\text\{\s*Correct\s+Option:\s*Index\s*\d\s*\}/i,
              /\s*\\;\s*\\Rightarrow\s*\\;\s*\\text\{\s*Correct\s+Option:\s*[A-D]\s*\}/i,
              /\s*\\;\s*\\Rightarrow\s*\\;\s*\\text\{\s*Index\s*\d\s*\}/i,
              /\s*\\;\s*\\Rightarrow\s*\\;\s*\\text\{\s*Option\s*[A-D]\s*\}/i,
              /\s*\\;\s*\\Rightarrow\s*\\;\s*\\text\{\s*정답:\s*[A-D]번\s*\(index\s*\d\)\s*\}/i,
              /\s*\\;\s*\\Rightarrow\s*\\;\s*\\text\{\s*정답:\s*[A-D]번\s*\}/i,
              /\\;\\Rightarrow\\;\\s*\\text\{Correct Option:\s*Index\s*\d\}/gi,
              /\\;\\Rightarrow\\;\\s*\\text\{Correct Option:\s*Index\s*[A-D]\}/gi,
              /\\;\\Rightarrow\\;\\s*\\text\{Correct Option:\s*[A-D]\}/gi,
              /\\;\\Rightarrow\\;\\s*\\text\{Index\s*\d\}/gi,
              /\\;\\Rightarrow\\;\\s*\\text\{Correct Option\s*\d\}/gi,
              /\\;\\Rightarrow\\;\\s*\\text\{Option\s*[A-D]\}/gi
            ];

            for (const pattern of regexPatterns) {
              newWorkingOut = newWorkingOut.replace(pattern, "");
            }
            
            if (newWorkingOut !== step.workingOut) {
              isModified = true;
              return {
                ...step,
                workingOut: newWorkingOut
              };
            }
          }
          return step;
        });

        if (isModified) {
          await doc.ref.update({
            solutionSteps: updatedSteps
          });
          const lastStep = updatedSteps[updatedSteps.length - 1];
          console.log(`  [CLEANED] ID: ${doc.id}`);
          console.log(`    Before: "${data.solutionSteps[data.solutionSteps.length - 1].workingOut}"`);
          console.log(`    After:  "${lastStep.workingOut}"`);
          cleanedCount++;
        }
      }
    }

    console.log(`\nSuccessfully cleaned index details from ${cleanedCount} questions.`);
    process.exit(0);
  } catch (err) {
    console.error('Error during cleanup:', err);
    process.exit(1);
  }
})();
