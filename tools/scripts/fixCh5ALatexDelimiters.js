import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const targetIds = [
  'TOcXsCu6R4KpoDDh6uXX', // index 20
  'UrKUM2wQdZkKycFEvJQn', // index 21
  'VCcijcXSIiwaeC6kAXa1', // index 22
  'X6xwgJKI23CQZ771Xg6R', // index 23
  'XOvPPPTbY5AzWhBOwEqD', // index 24
  'YZa93YWfcqpobERQ87Hm', // index 25
  'YweS5ffVJ4eHcq9a4bAC', // index 26
  'Zj5pzO7b33sQ7n7sD0Ot', // index 27
  'buRlolE2dh6oaZMIpRcG', // index 28
  'cFWooF7i9L47uPvKkiiS'  // index 29 (already has custom subQuestions but we'll add main solutionSteps)
];

async function run() {
  const snap = await db.collection('questions')
    .where('topicId', '==', 'y7-5a')
    .get();

  const batch = db.batch();
  let count = 0;

  const fixDelimiters = (str) => {
    if (typeof str !== 'string') return str;
    // We want to replace '\\\\(' with '\\(' and '\\\\' with '\\' safely.
    // If we use string replace instead of regex it is safer.
    let res = str;
    while (res.includes('\\\\(')) {
      res = res.replace('\\\\(', '\\(');
    }
    while (res.includes('\\\\)')) {
      res = res.replace('\\\\)', '\\)');
    }
    while (res.includes('\\\\[')) {
      res = res.replace('\\\\[', '\\[');
    }
    while (res.includes('\\\\]')) {
      res = res.replace('\\\\]', '\\]');
    }
    return res;
  };

  snap.forEach(doc => {
    const data = doc.data();
    let changed = false;

    // Fix main solutionSteps
    if (Array.isArray(data.solutionSteps)) {
      data.solutionSteps = data.solutionSteps.map(step => {
        const newExp = fixDelimiters(step.explanation);
        const newWrk = fixDelimiters(step.workingOut);
        if (newExp !== step.explanation || newWrk !== step.workingOut) {
          changed = true;
        }
        return {
          ...step,
          explanation: newExp,
          workingOut: newWrk
        };
      });
    }

    // Fix subQuestions
    if (Array.isArray(data.subQuestions)) {
      data.subQuestions = data.subQuestions.map(sq => {
        let sqChanged = false;
        // Fix options/opts
        let opts = sq.opts || sq.options || [];
        const newOpts = opts.map(opt => {
          const fixed = fixDelimiters(opt);
          if (fixed !== opt) {
            sqChanged = true;
            changed = true;
          }
          return fixed;
        });

        let steps = sq.solutionSteps;
        if (Array.isArray(steps)) {
          steps = steps.map(step => {
            const newExp = fixDelimiters(step.explanation);
            const newWrk = fixDelimiters(step.workingOut);
            if (newExp !== step.explanation || newWrk !== step.workingOut) {
              sqChanged = true;
              changed = true;
            }
            return {
              ...step,
              explanation: newExp,
              workingOut: newWrk
            };
          });
        }

        const newSq = { ...sq };
        if (sq.opts) newSq.opts = newOpts;
        if (sq.options) newSq.options = newOpts;
        if (steps) newSq.solutionSteps = steps;

        return newSq;
      });
    }

    // Fix main options/opts
    let mainOpts = data.opts || data.options || [];
    const newMainOpts = mainOpts.map(opt => {
      const fixed = fixDelimiters(opt);
      if (fixed !== opt) {
        changed = true;
      }
      return fixed;
    });

    if (changed) {
      const updateData = {};
      if (data.solutionSteps) updateData.solutionSteps = data.solutionSteps;
      if (data.subQuestions) updateData.subQuestions = data.subQuestions;
      if (data.opts) updateData.opts = newMainOpts;
      if (data.options) updateData.options = newMainOpts;
      updateData.isNew = true;

      batch.update(doc.ref, updateData);
      count++;
    }
  });

  if (count > 0) {
    // Update sync version
    const questionsMetaRef = db.doc('sync_meta/questions');
    const now = Date.now();
    batch.update(questionsMetaRef, {
      version: now,
      membershipVersion: now,
      updatedAt: FieldValue.serverTimestamp()
    });

    await batch.commit();
    console.log(`Successfully fixed LaTeX delimiters in ${count} questions!`);
  } else {
    console.log('No questions needed fixing.');
  }

  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
