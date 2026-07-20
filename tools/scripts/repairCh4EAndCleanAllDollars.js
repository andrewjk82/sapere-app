import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    console.log('[LaTeX Repair] Correcting question 4ZXJepgAwvzpoEfC0ujL...');
    const ref = db.collection('questions').doc('4ZXJepgAwvzpoEfC0ujL');
    const doc = await ref.get();
    
    if (doc.exists) {
      const data = doc.data();

      const cleanOpts = [
        "\\(3,\\; 3\\dfrac{3}{5},\\; 4\\dfrac{1}{5},\\; 4\\dfrac{4}{5}\\)",
        "\\(2\\dfrac{4}{5},\\; 3,\\; 3\\dfrac{1}{5},\\; 3\\dfrac{2}{5}\\)",
        "\\(3,\\; 3.2,\\; 3.4,\\; 3.6\\)",
        "\\(3,\\; 3\\dfrac{2}{5},\\; 3\\dfrac{4}{5},\\; 4\\dfrac{1}{5}\\)"
      ];

      const cleanSteps = [
        {
          explanation: "We need to find the next four terms of the given sequence. Our strategy is to determine the common difference between consecutive terms by subtracting the first term from the second.",
          workingOut: "\\(\\text{Sequence: } \\dfrac{3}{5},\\; 1\\dfrac{1}{5} = \\dfrac{6}{5},\\; 1\\dfrac{4}{5} = \\dfrac{9}{5},\\; 2\\dfrac{2}{5} = \\dfrac{12}{5}\\)",
          graphData: null
        },
        {
          explanation: "Subtracting the first term (3/5) from the second term (6/5) gives a common difference of 3/5. We verify this by checking that each subsequent term increases by exactly 3/5.",
          workingOut: "\\(\\text{Difference} = \\dfrac{6}{5} - \\dfrac{3}{5} = \\dfrac{3}{5}\\)",
          graphData: null
        },
        {
          explanation: "To find the next term (5th term), we add 3/5 to the 4th term (12/5). This yields 15/5, which simplifies to the whole number 3. We then add 3/5 to 3 to get the 6th term, which is 3 and 3/5.",
          workingOut: "\\(\\text{5th Term} = \\dfrac{12}{5} + \\dfrac{3}{5} = \\dfrac{15}{5} = 3,\\; \\text{6th Term} = 3 + \\dfrac{3}{5} = 3\\dfrac{3}{5}\\)",
          graphData: null
        },
        {
          explanation: "To find the 7th and 8th terms, we continue adding 3/5. Adding 3/5 to 3 and 3/5 gives 3 and 6/5, which we rewrite as the mixed number 4 and 1/5. Adding 3/5 to this gives 4 and 4/5.",
          workingOut: "\\(\\text{7th Term} = 3\\dfrac{3}{5} + \\dfrac{3}{5} = 3\\dfrac{6}{5} = 4\\dfrac{1}{5},\\; \\text{8th Term} = 4\\dfrac{1}{5} + \\dfrac{3}{5} = 4\\dfrac{4}{5}\\)",
          graphData: null
        }
      ];

      await ref.update({
        opts: cleanOpts,
        options: cleanOpts,
        solutionSteps: cleanSteps
      });
      console.log('  [UPDATED] Successfully repaired doc 4ZXJepgAwvzpoEfC0ujL.');
    }

    console.log('\n[Sweep] Auditing all questions in y7-4 for remaining dollar signs ($)...');
    const snap = await db.collection('questions').where('chapterId', '==', 'y7-4').get();
    let dirtyCount = 0;

    for (const d of snap.docs) {
      const qData = d.data();
      let modified = false;
      const updatePayload = {};

      // Clean dollar signs in opts/options
      if (qData.opts && Array.isArray(qData.opts)) {
        const cleanedOpts = qData.opts.map(opt => {
          if (opt.includes('$')) {
            modified = true;
            let clean = opt.replace(/\$(.*?)\$/g, '\\($1\\)');
            clean = clean.replace(/\$/g, ''); // strip single dollars
            return clean;
          }
          return opt;
        });

        if (modified) {
          updatePayload.opts = cleanedOpts;
          updatePayload.options = cleanedOpts;
        }
      }

      // Clean dollar signs in question text
      if (qData.question && qData.question.includes('$')) {
        let cleanQ = qData.question.replace(/\$(.*?)\$/g, '\\($1\\)');
        cleanQ = cleanQ.replace(/\$/g, '');
        updatePayload.question = cleanQ;
        modified = true;
      }

      if (modified) {
        await d.ref.update(updatePayload);
        console.log(`  [CLEANED DOLLARS] Doc ID: ${d.id}`);
        dirtyCount++;
      }
    }

    console.log(`\nSweep complete. Cleared residual dollars in ${dirtyCount} questions.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during repair/sweep:', err);
    process.exit(1);
  }
})();
//
