import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    console.log('[Repair LaTeX] Correcting 2 mismatched LaTeX workingOut strings in topic y7-4l...');

    // 1. XACIRaDjfCLQckBoYG1X (Step 2)
    const ref1 = db.collection('questions').doc('XACIRaDjfCLQckBoYG1X');
    const doc1 = await ref1.get();
    if (doc1.exists) {
      const data = doc1.data();
      data.solutionSteps[1].workingOut = "\\(\\dfrac{2 \\times 4}{3 \\times 4} = \\dfrac{8}{12},\\; \\dfrac{5 \\times 2}{6 \\times 2} = \\dfrac{10}{12},\\; \\dfrac{1 \\times 3}{4 \\times 3} = \\dfrac{3}{12}\\)";
      await ref1.update({ solutionSteps: data.solutionSteps });
      console.log('  [FIXED] XACIRaDjfCLQckBoYG1X');
    }

    // 2. oaBKW1x9E57PewsIl8jP (Step 2)
    const ref2 = db.collection('questions').doc('oaBKW1x9E57PewsIl8jP');
    const doc2 = await ref2.get();
    if (doc2.exists) {
      const data = doc2.data();
      data.solutionSteps[1].workingOut = "\\(\\dfrac{2 \\times 4}{5 \\times 4} = \\dfrac{8}{20},\\; \\dfrac{3 \\times 2}{10 \\times 2} = \\dfrac{6}{20},\\; \\dfrac{1 \\times 5}{4 \\times 5} = \\dfrac{5}{20}\\)";
      await ref2.update({ solutionSteps: data.solutionSteps });
      console.log('  [FIXED] oaBKW1x9E57PewsIl8jP');
    }

    console.log('\nAll LaTeX repair procedures for 4L completed.');
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during LaTeX repair:', err);
    process.exit(1);
  }
})();
