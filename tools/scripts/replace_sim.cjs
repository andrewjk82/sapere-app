const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const questionsToFix = ['y10-8e-q6a', 'y10-8e-q6b', 'y10-8e-q6c', 'y10-8e-q7a', 'y10-8e-q7b'];
  let updatedAny = false;

  for (const qid of questionsToFix) {
    const docRef = db.collection('questions').doc(qid);
    const docSnap = await docRef.get();
    
    if (docSnap.exists) {
      let data = docSnap.data();
      let changed = false;

      // Fix options
      if (data.options) {
        const newOptions = data.options.map(opt => {
          if (opt.text.includes('\\sim')) {
            changed = true;
            return { ...opt, text: opt.text.replace(/\\sim/g, '|||') };
          }
          return opt;
        });
        if (changed) {
          data.options = newOptions;
        }
      }

      // Fix solution steps
      if (data.solutionSteps) {
        const newSteps = data.solutionSteps.map(step => {
          let updatedStep = { ...step };
          if (step.workingOut && step.workingOut.includes('\\sim')) {
            changed = true;
            updatedStep.workingOut = step.workingOut.replace(/\\sim/g, '|||');
          }
          return updatedStep;
        });
        if (changed) {
          data.solutionSteps = newSteps;
        }
      }

      if (changed) {
        await docRef.update({
          options: data.options,
          solutionSteps: data.solutionSteps,
          updatedAt: FieldValue.serverTimestamp()
        });
        console.log('Updated ' + qid);
        updatedAny = true;
      }
    }
  }

  if (updatedAny) {
    console.log('Syncing chapter index for y10-8...');
    await touchChapterIndex(db, 'y10-8');
    console.log('Sync complete.');
  }

  console.log('Done!');
  process.exit(0);
}

run().catch(console.error);
