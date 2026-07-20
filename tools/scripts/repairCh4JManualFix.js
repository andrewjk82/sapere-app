import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    console.log('[Manual Fix] Restoring exact mixed numbers to 2nd step workingOut in topic y7-4j...');

    // 1. 9WhE6gdh5vwMOiAKSJPI
    const ref1 = db.collection('questions').doc('9WhE6gdh5vwMOiAKSJPI');
    const doc1 = await ref1.get();
    if (doc1.exists) {
      const data = doc1.data();
      data.solutionSteps[1].workingOut = "\\(1\\dfrac{1}{3} = \\dfrac{4}{3},\\; 2\\dfrac{2}{5} = \\dfrac{12}{5}\\)";
      await ref1.update({ solutionSteps: data.solutionSteps });
      console.log('  [RESTORED] 9WhE6gdh5vwMOiAKSJPI');
    }

    // 2. VyUHo6sv0r1cYsUdFhaM
    const ref2 = db.collection('questions').doc('VyUHo6sv0r1cYsUdFhaM');
    const doc2 = await ref2.get();
    if (doc2.exists) {
      const data = doc2.data();
      data.solutionSteps[1].workingOut = "\\(1\\dfrac{3}{5} = \\dfrac{8}{5},\\; 2\\dfrac{1}{12} = \\dfrac{25}{12}\\)";
      await ref2.update({ solutionSteps: data.solutionSteps });
      console.log('  [RESTORED] VyUHo6sv0r1cYsUdFhaM');
    }

    // 3. j2k2QhPP7P2q9P4r72VP
    const ref3 = db.collection('questions').doc('j2k2QhPP7P2q9P4r72VP');
    const doc3 = await ref3.get();
    if (doc3.exists) {
      const data = doc3.data();
      data.solutionSteps[1].workingOut = "\\(2\\dfrac{2}{5} = \\dfrac{12}{5},\\; 1\\dfrac{7}{8} = \\dfrac{15}{8}\\)";
      await ref3.update({ solutionSteps: data.solutionSteps });
      console.log('  [RESTORED] j2k2QhPP7P2q9P4r72VP');
    }

    // 4. uwh1erZNgeBmGLWIF6Uv
    const ref4 = db.collection('questions').doc('uwh1erZNgeBmGLWIF6Uv');
    const doc4 = await ref4.get();
    if (doc4.exists) {
      const data = doc4.data();
      data.solutionSteps[1].workingOut = "\\(2\\dfrac{1}{4} = \\dfrac{9}{4},\\; 1\\dfrac{1}{8} = \\dfrac{9}{8}\\)";
      await ref4.update({ solutionSteps: data.solutionSteps });
      console.log('  [RESTORED] uwh1erZNgeBmGLWIF6Uv');
    }

    console.log('Manual restoration completed.');
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during restoration:', err);
    process.exit(1);
  }
})();
