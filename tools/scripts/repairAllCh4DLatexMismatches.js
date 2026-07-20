import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    console.log('[Repair LaTeX] Correcting 6 mismatched LaTeX workingOut strings in topic y7-4d...');

    // 1. KJKL4PaAMBMvq8uxZnBb (Step 2)
    const ref1 = db.collection('questions').doc('KJKL4PaAMBMvq8uxZnBb');
    const doc1 = await ref1.get();
    if (doc1.exists) {
      const data = doc1.data();
      data.solutionSteps[1].workingOut = "\\(\\dfrac{10}{20} = \\dfrac{1}{2},\\; \\dfrac{3}{12} = \\dfrac{1}{4}\\)";
      await ref1.update({ solutionSteps: data.solutionSteps });
      console.log('  [FIXED] KJKL4PaAMBMvq8uxZnBb');
    }

    // 2. MFQPirScLfUEAW1QxXCy (Step 2)
    const ref2 = db.collection('questions').doc('MFQPirScLfUEAW1QxXCy');
    const doc2 = await ref2.get();
    if (doc2.exists) {
      const data = doc2.data();
      data.solutionSteps[1].workingOut = "\\(\\dfrac{1}{3} = \\dfrac{2}{6},\\; \\dfrac{2}{3} = \\dfrac{4}{6}\\)";
      await ref2.update({ solutionSteps: data.solutionSteps });
      console.log('  [FIXED] MFQPirScLfUEAW1QxXCy');
    }

    // 3. QjMm0UBHcRHuvWiV5jG5 (Step 2)
    const ref3 = db.collection('questions').doc('QjMm0UBHcRHuvWiV5jG5');
    const doc3 = await ref3.get();
    if (doc3.exists) {
      const data = doc3.data();
      data.solutionSteps[1].workingOut = "\\(\\dfrac{2}{9} \\approx 0.222,\\; \\dfrac{2}{3} \\approx 0.667,\\; \\dfrac{3}{4} = 0.750,\\; \\dfrac{4}{5} = 0.800,\\; \\dfrac{5}{6} \\approx 0.833\\)";
      await ref3.update({ solutionSteps: data.solutionSteps });
      console.log('  [FIXED] QjMm0UBHcRHuvWiV5jG5');
    }

    // 4. qOQCsqrTUeZQdJgomShG (Step 2 & Step 3)
    const ref4 = db.collection('questions').doc('qOQCsqrTUeZQdJgomShG');
    const doc4 = await ref4.get();
    if (doc4.exists) {
      const data = doc4.data();
      data.solutionSteps[1].workingOut = "\\(\\text{Distance for } \\dfrac{7}{8} = 0.125,\\; \\text{Distance for } \\dfrac{4}{5} = 0.20\\)";
      data.solutionSteps[2].workingOut = "\\(\\text{Distance for } \\dfrac{11}{12} \\approx 0.0833,\\; \\text{Distance for } \\dfrac{5}{6} \\approx 0.1667\\)";
      await ref4.update({ solutionSteps: data.solutionSteps });
      console.log('  [FIXED] qOQCsqrTUeZQdJgomShG');
    }

    // 5. u6erMuLpP3tYX8jhAfHo (Step 2)
    const ref5 = db.collection('questions').doc('u6erMuLpP3tYX8jhAfHo');
    const doc5 = await ref5.get();
    if (doc5.exists) {
      const data = doc5.data();
      data.solutionSteps[1].workingOut = "\\(\\dfrac{3}{5} = 0.60,\\; \\dfrac{7}{8} = 0.875\\)";
      await ref5.update({ solutionSteps: data.solutionSteps });
      console.log('  [FIXED] u6erMuLpP3tYX8jhAfHo');
    }

    console.log('\nAll LaTeX repair procedures completed.');
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during LaTeX repair:', err);
    process.exit(1);
  }
})();
//
