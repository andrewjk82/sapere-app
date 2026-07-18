/**
 * Patch live `questions` docs so every multiple_choice sub-question carries
 * `isManual: true` — matches what chapterSeeder now writes for NEW/re-synced
 * docs (see src/services/chapterSeeder.js). Existing docs predate that fix and
 * keep the old shape until patched here.
 *
 * Why this matters: mcOptionShuffle's isOptionIndexAnswer() refuses to treat
 * a digit-shaped answer as an index whenever ANY option's own text also reads
 * as that digit (e.g. answer index "0" colliding with an unrelated option
 * literally reading "0"), UNLESS `isManual: true` tells it to trust the index
 * unconditionally. Without the flag, 33 real sub-questions across 22 parent
 * docs are silently ungradeable (audit:sub-mc-ambiguity — every affected id
 * comes from tools/audit-state/sub-mc-ambiguity.json).
 *
 * Docs with origin:'teacher' are skipped per contract. This only ADDS a flag
 * to existing MC sub-question objects — it never touches question/options/
 * answer content, so it does not change chapterId/topicId/counts and needs no
 * index rebuild (that contract is for question ADD/DELETE, not field patches).
 *
 * Usage:
 *   node tools/scripts/patchSubQuestionIsManual.js          # dry run
 *   node tools/scripts/patchSubQuestionIsManual.js --apply  # execute
 */
import { readFileSync } from 'node:fs';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

const sa = process.env.GOOGLE_APPLICATION_CREDENTIALS
  || '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json';
initializeApp({ credential: cert(JSON.parse(readFileSync(sa, 'utf8'))) });
const db = getFirestore();

const APPLY = process.argv.includes('--apply');
const { affected } = JSON.parse(readFileSync('tools/audit-state/sub-mc-ambiguity.json', 'utf8'));
const parentIds = [...new Set(affected.map((a) => a.parentId))];

const run = async () => {
  let patched = 0, alreadyOk = 0, skippedTeacher = 0, missing = 0, noSubs = 0;
  const patchedIds = [];

  for (let i = 0; i < parentIds.length; i += 100) {
    const chunk = parentIds.slice(i, i + 100);
    const snaps = await db.getAll(...chunk.map((id) => db.doc(`questions/${id}`)));
    for (const snap of snaps) {
      if (!snap.exists) { missing += 1; console.log(`  ${snap.ref.id}: not in Firestore (never seeded / already removed)`); continue; }
      const d = snap.data();
      if (d.origin === 'teacher') { skippedTeacher += 1; console.log(`  ${snap.ref.id}: origin=teacher — SKIPPED (contract)`); continue; }
      if (!Array.isArray(d.subQuestions) || d.subQuestions.length === 0) { noSubs += 1; continue; }

      let changed = false;
      const nextSubs = d.subQuestions.map((sq) => {
        if (sq?.type !== 'multiple_choice' || sq.isManual === true) return sq;
        changed = true;
        return { ...sq, isManual: true };
      });
      if (!changed) { alreadyOk += 1; continue; }

      console.log(`  ${snap.ref.id}: will stamp isManual:true on ${nextSubs.filter((s, i2) => s.isManual === true && d.subQuestions[i2]?.isManual !== true).length} MC sub-question(s)`);
      if (APPLY) {
        await snap.ref.update({ subQuestions: nextSubs, isNew: true, updatedAt: FieldValue.serverTimestamp() });
      }
      patched += 1;
      patchedIds.push(snap.ref.id);
    }
  }

  if (APPLY && patched > 0) {
    await db.doc('sync_meta/questions').set({ version: Date.now(), updatedAt: FieldValue.serverTimestamp() }, { merge: true });
  }

  console.log(`\n${APPLY ? '[APPLY]' : '[dry-run]'} patched=${patched} alreadyOk=${alreadyOk} teacherSkipped=${skippedTeacher} missing=${missing} noSubQuestions=${noSubs}`);
  if (!APPLY && patched > 0) console.log('Re-run with --apply to execute.');
};
run().catch((e) => { console.error(e); process.exit(1); });
