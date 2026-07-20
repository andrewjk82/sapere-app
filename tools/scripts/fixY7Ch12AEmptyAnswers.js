import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Correct answers backfilled from each doc's own solutionSteps (see audit),
// matched against that doc's actual options array by text.
const FIXES = {
  'BmFlqtV1lBNkiBkN5jx4': { correctText: '127' }, // beta = 90+37 = 127
  'BmWgY4amhfBrSUDvUnyS': { correctText: '90' },  // angle AVB = 180-(35+55)=90
  'E5kjSyYBbwY55C35QJ29': { correctText: '90' },  // angle AVB = 180-(15+75)=90
  'I3epSHZJkQD4hBLmTuOk': { correctText: '86' },  // angle AVB = 180-(34+60)=86
  'fhEHMxyAdhVA5fkZNhpO': { correctText: '44' },  // beta = 20+24 = 44
  'gDYsW7NkPNHbFXbFFRsu': { correctText: '90' },  // theta = 180-41-49 = 90 (vert. opp.)
};

const numFromOptionText = (text) => {
  const m = String(text).match(/(\d+(\.\d+)?)/);
  return m ? m[1] : null;
};

(async () => {
  try {
    for (const [id, { correctText }] of Object.entries(FIXES)) {
      const ref = db.collection('questions').doc(id);
      const snap = await ref.get();
      const data = snap.data();
      if (!data) { console.error(`MISSING: ${id}`); continue; }
      if (data.answer !== '') {
        console.error(`SKIP ${id}: answer is no longer empty ("${data.answer}") — was it already fixed or edited since audit?`);
        continue;
      }
      const idx = (data.options || []).findIndex(o => numFromOptionText(o.text ?? o) === correctText);
      if (idx === -1) {
        console.error(`SKIP ${id}: could not find option matching "${correctText}" in ${JSON.stringify(data.options)}`);
        continue;
      }
      await ref.update({
        answer: String(idx),
        requiresManualGrading: false,
      });
      console.log(`FIXED ${id}: answer -> "${idx}" (${JSON.stringify(data.options[idx])}), requiresManualGrading -> false`);
    }
    console.log('\nDone.');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
