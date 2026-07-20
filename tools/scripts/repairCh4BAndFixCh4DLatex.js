import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    // 1. Audit and Fix y7-4b Remaining unconverted questions
    console.log('[Audit] Checking for any unconverted questions in topic y7-4b...');
    const snapB = await db.collection('questions').where('topicId', '==', 'y7-4b').get();
    let unconvertedB = 0;
    
    for (const doc of snapB.docs) {
      const data = doc.data();
      if (data.type !== 'multiple_choice' || !data.opts) {
        console.log(`  [FOUND UNCONVERTED 4B] Doc ID: ${doc.id} (${data.question.substring(0, 50)}...)`);
        unconvertedB++;
      }
    }
    console.log(`Found ${unconvertedB} unconverted questions in y7-4b.`);

    // 2. Fix LaTeX broken strings in Chapter 4D docs
    console.log('\n[LaTeX Fix] Repairing broken workingOut strings in y7-4d questions...');
    
    // Doc 1: 8FDHNcWlMs3JPOi5rgIk (Order fractions starting 2/3, 2/9...)
    const refD1 = db.collection('questions').doc('8FDHNcWlMs3JPOi5rgIk');
    const docD1 = await refD1.get();
    if (docD1.exists) {
      const data = docD1.data();
      if (data.solutionSteps && data.solutionSteps[1]) {
        // Change double formulas separated by \; into single formula
        data.solutionSteps[1].workingOut = "\\(\\dfrac{2}{3} = \\dfrac{6}{9},\\; \\dfrac{1}{3} = \\dfrac{3}{9}\\)";
        await refD1.update({
          solutionSteps: data.solutionSteps
        });
        console.log('  [FIXED LaTeX] Doc ID: 8FDHNcWlMs3JPOi5rgIk');
      }
    }

    // Doc 2: hVhaqApjUjz4gdqLM9Ou (Order fractions starting 1/4, 3/8...)
    const refD2 = db.collection('questions').doc('hVhaqApjUjz4gdqLM9Ou');
    const docD2 = await refD2.get();
    if (docD2.exists) {
      const data = docD2.data();
      if (data.solutionSteps && data.solutionSteps[1]) {
        data.solutionSteps[1].workingOut = "\\(\\dfrac{1}{4} = \\dfrac{2}{8},\\; \\dfrac{2}{4} = \\dfrac{4}{8},\\; \\dfrac{3}{4} = \\dfrac{6}{8}\\)";
        await refD2.update({
          solutionSteps: data.solutionSteps
        });
        console.log('  [FIXED LaTeX] Doc ID: hVhaqApjUjz4gdqLM9Ou');
      }
    }

    // 3. Final parenthesis validation check across the entire y7-4d topic
    console.log('\n[Validation] Auditing parenthesis consistency in topic y7-4d...');
    const snapD = await db.collection('questions').where('topicId', '==', 'y7-4d').get();
    let invalidCount = 0;
    
    for (const doc of snapD.docs) {
      const data = doc.data();
      if (data.solutionSteps) {
        data.solutionSteps.forEach((step, idx) => {
          if (step.workingOut) {
            const openCount = (step.workingOut.match(/\\\(/g) || []).length;
            const closeCount = (step.workingOut.match(/\\\)/g) || []).length;
            if (openCount !== closeCount) {
              console.log(`  [MISMATCH] Doc ID: ${doc.id}, Step ${idx+1} -> open: ${openCount}, close: ${closeCount}`);
              console.log(`    Value: "${step.workingOut}"`);
              invalidCount++;
            }
          }
        });
      }
    }

    console.log(`Parenthesis validation complete. Invalid counts: ${invalidCount}`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during repair/audit:', err);
    process.exit(1);
  }
})();
//
