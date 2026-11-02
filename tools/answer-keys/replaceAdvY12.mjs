// Replace the Year 12 Advanced answer keys (answer_keys/y12a-*) with the ones cut from the 2026 textbook
// (tools/answer-keys/cambridge_adv12_2026.py).
//   node tools/answer-keys/replaceAdvY12.mjs <dir with mapping.json>            → dry run
//   node tools/answer-keys/replaceAdvY12.mjs <dir with mapping.json> --apply    → backs up, deletes stale keys, uploads the new ones
// New topic ids reuse old ones with different meanings (old 2A = The sign of a function, new 2A = Increasing, decreasing…),
// so the old keys of every Year 12 Advanced topic are replaced as a set: the ones the new book has are overwritten, the
// rest are deleted.
// Reads only the candidate ids (point reads) — never a collection scan.
import admin from 'firebase-admin';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, isAbsolute } from 'path';
import { OLD_TO_NEW_TOPIC, RETIRED } from '../../src/utils/advY12Renumber.js';

const [dir, ...flags] = process.argv.slice(2);
const APPLY = flags.includes('--apply');
if (!dir) { console.error('usage: replaceAdvY12.mjs <dir> [--apply]'); process.exit(1); }
admin.initializeApp({ credential: admin.credential.cert(JSON.parse(readFileSync('/Users/andrewkim/Desktop/sapere1/.secrets/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'))) });
const db = admin.firestore();
const mapping = JSON.parse(readFileSync(join(dir, 'mapping.json'), 'utf8'));
const toDataUrl = (p) => `data:image/webp;base64,${readFileSync(isAbsolute(p) ? p : join(dir, p)).toString('base64')}`;

// Old topic ids: the ones that moved or were retired, plus the unchanged ones (1A–1I, 6B–6E, 8A–8E, 10A–10F).
const unchanged = ['1A', '1B', '1C', '1D', '1E', '1F', '1G', '1H', '1I', '6B', '6C', '6D', '6E', '8A', '8B', '8C', '8D', '8E',
  '10A', '10B', '10C', '10D', '10E', '10F'].map((c) => `y12a-${c}`);
const oldIds = [...unchanged, ...Object.keys(OLD_TO_NEW_TOPIC), ...RETIRED.filter((id) => /[A-Za-z]$/.test(id))];
const candidates = [...new Set([...oldIds, ...Object.keys(mapping)])];
const snaps = await db.getAll(...candidates.map((id) => db.collection('answer_keys').doc(id)));
const existing = snaps.filter((s) => s.exists);
const stale = existing.filter((s) => !mapping[s.id]).map((s) => s.id);
console.log(`existing Year 12 Advanced answer keys: ${existing.length} → ${existing.map((s) => s.id).join(' ')}`);
console.log(`to overwrite with the new book: ${Object.keys(mapping).length} topics`);
console.log(`to delete (not in the new book): ${stale.join(' ') || 'none'}`);
if (!APPLY) { console.log('DRY RUN — nothing written. Re-run with --apply.'); process.exit(0); }

const backupDir = `/Users/andrewkim/backups/advy12-answer-keys-${new Date().toISOString().slice(0, 10)}`;
mkdirSync(backupDir, { recursive: true });
writeFileSync(join(backupDir, 'answer_keys.json'), JSON.stringify(Object.fromEntries(existing.map((s) => [s.id, s.data()]))));
console.log('backup →', backupDir);
for (const id of stale) await db.collection('answer_keys').doc(id).delete();
const ids = Object.keys(mapping);
for (let i = 0; i < ids.length; i += 10) {
  const batch = db.batch();
  for (const topicId of ids.slice(i, i + 10)) {
    batch.set(db.collection('answer_keys').doc(topicId), {
      topicId, book: 'CambridgeMATHS NSW Stage 6 Mathematics Advanced Year 12, 2nd edition (2026)',
      sections: mapping[topicId].map((s) => ({ key: s.key, title: s.title, labels: s.labels, images: s.images.map(toDataUrl) })),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });
  }
  await batch.commit();
  console.log(`written ${Math.min(i + 10, ids.length)}/${ids.length}`);
}
process.exit(0);
