import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';
import { resolveCorrectOptionIndex } from '../../src/utils/mcOptionShuffle.js';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    const snap = await db.collection('questions')
      .where('topicId', '==', 'y7-12a')
      .get();
    console.log(`Auditing ${snap.size} docs in y7-12a (Angles in triangles):`);

    let badCount = 0;
    snap.docs.forEach((doc) => {
      const data = doc.data();
      if (data.type !== 'multiple_choice') return;
      const options = data.options || [];
      if (!options.length) return;

      // Old hand-rolled QuestionBankModal.jsx logic (pre-fix), to see which
      // docs would have shown "no answer selected" when a teacher opened them.
      const oldIdx = ['0', '1', '2', '3'].includes(data.answer)
        ? parseInt(data.answer)
        : options.findIndex(opt => (typeof opt === 'string' ? opt : opt.text) === data.answer);

      const newIdx = resolveCorrectOptionIndex(data, options);

      if (oldIdx === -1 || oldIdx == null) {
        badCount++;
        console.log(`\n[BAD] ID: ${doc.id}  origin=${data.origin || '(none)'} isManual=${data.isManual}`);
        console.log(`  question: "${(data.question || '').slice(0, 80)}"`);
        console.log(`  answer field: ${JSON.stringify(data.answer)}`);
        console.log(`  options: ${JSON.stringify(options.map(o => typeof o === 'string' ? o : o.text))}`);
        console.log(`  old (hand-rolled) resolved idx: ${oldIdx}  -> ${oldIdx === -1 ? 'NONE (answer would vanish in edit form)' : oldIdx}`);
        console.log(`  new (resolveCorrectOptionIndex) resolved idx: ${newIdx}  -> ${newIdx >= 0 ? options[newIdx] : 'NONE'}`);
      }
    });

    console.log(`\nDone. ${badCount} / ${snap.size} multiple_choice docs had a broken answer lookup under the old logic.`);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
