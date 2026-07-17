/**
 * Patch live `questions` docs for the seed key fixes in
 * tools/audit-state/mc-key-fixes-applied.json.
 *
 * The doc's option ORDER may differ from the seed (the old seeder shuffled at
 * write time), so the new answer index is derived from the DOC's own options
 * by matching the suggested option TEXT — never copied from the seed.
 * origin:'teacher' docs are skipped per contract.
 */
import { readFileSync } from 'node:fs';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

const sa = process.env.GOOGLE_APPLICATION_CREDENTIALS
  || '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json';
initializeApp({ credential: cert(JSON.parse(readFileSync(sa, 'utf8'))) });
const db = getFirestore();

const APPLY = process.argv.includes('--apply');
const { appliedIds } = JSON.parse(readFileSync('tools/audit-state/mc-key-fixes-applied.json', 'utf8'));

const optText = (o) => (typeof o === 'object' && o !== null ? o.text : o);
const norm = (s) => String(s || '').replace(/\\\\/g, '\\').replace(/\s+/g, ' ').trim();

const run = async () => {
  let patched = 0, skippedTeacher = 0, missing = 0, unmatched = 0, alreadyRight = 0;
  const unmatchedIds = [];
  for (let i = 0; i < appliedIds.length; i += 100) {
    const chunk = appliedIds.slice(i, i + 100);
    const snaps = await db.getAll(...chunk.map((r) => db.doc(`questions/${r.id}`)));
    for (let j = 0; j < snaps.length; j++) {
      const snap = snaps[j]; const fix = chunk[j];
      if (!snap.exists) { missing += 1; continue; }
      const d = snap.data();
      if (d.origin === 'teacher') { skippedTeacher += 1; continue; }
      const opts = (d.options || []).map(optText);
      const target = norm(fix.suggestedOption);
      const idx = opts.findIndex((o) => norm(o) === target);
      if (idx < 0) { unmatched += 1; unmatchedIds.push(fix.id); continue; }
      if (String(d.answer).trim() === String(idx)) { alreadyRight += 1; continue; }
      if (APPLY) {
        await snap.ref.update({ answer: String(idx), isNew: true, updatedAt: FieldValue.serverTimestamp() });
      }
      patched += 1;
    }
  }
  if (APPLY && patched > 0) {
    await db.doc('sync_meta/questions').set({ version: Date.now(), updatedAt: FieldValue.serverTimestamp() }, { merge: true });
  }
  console.log(`${APPLY ? '[APPLY]' : '[dry-run]'} patched=${patched} alreadyRight=${alreadyRight} teacherSkipped=${skippedTeacher} missing=${missing} unmatchedOption=${unmatched}`);
  if (unmatchedIds.length) console.log('unmatched (fix by hand):', unmatchedIds.join(', '));
};
run().catch((e) => { console.error(e); process.exit(1); });
