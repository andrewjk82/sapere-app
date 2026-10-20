// One-off (2026-10-20): add the chapter 2 and chapter 6 appendix topics (2X, 6X) to curriculum/Year_12_Extension 2 with their worksheets,
// and bump sync_meta/curriculum so devices reload the curriculum. Safe to re-run: topics already there are left alone.
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'fs';
const dir = '/Users/andrewkim/Downloads/';
initializeApp({ credential: cert(JSON.parse(readFileSync(dir + readdirSync(dir).find((n) => /^sapere-fe23e-firebase-adminsdk.*\.json$/.test(n)), 'utf8'))) });
const db = getFirestore();
const DRIVE_IDS = JSON.parse(readFileSync(new URL('./ext2DriveIds.json', import.meta.url), 'utf8'));
const url = (file) => `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(`https://drive.google.com/uc?export=download&id=${DRIVE_IDS[file]}`)}`;
const ADD = [
  { chapter: 'y12e2-2', id: 'y12e2-2X', code: '2X', title: 'Appendix: The Fundamental Theorem of Arithmetic', file: 'E2 Ch2X Appendix.pdf' },
  { chapter: 'y12e2-6', id: 'y12e2-6X', code: '6X', title: 'Appendix: A Short Table of Integrals', file: 'E2 Ch6X Appendix.pdf' },
];
const ref = db.collection('curriculum').doc('Year_12_Extension 2');
const doc = (await ref.get()).data();
mkdirSync('/Users/andrewkim/backups/ext2-appendices-2026-10-20', { recursive: true });
writeFileSync('/Users/andrewkim/backups/ext2-appendices-2026-10-20/curriculum.json', JSON.stringify(doc, null, 2));
for (const a of ADD) {
  if (!DRIVE_IDS[a.file]) throw new Error(`no Drive file for ${a.file}`);
  const ch = doc.chapters.find((c) => c.id === a.chapter);
  if (ch.topics.some((t) => t.id === a.id)) { console.log(a.id, 'already there'); continue; }
  const review = ch.topics.findIndex((t) => t.id === `${a.chapter}R`);
  ch.topics.splice(review < 0 ? ch.topics.length : review, 0, { id: a.id, code: a.code, title: a.title, homeworkPdfUrl: url(a.file) });
  ch.modules = ch.topics.length;
  console.log('added', a.id, 'to', a.chapter);
}
await ref.set({ ...doc, updatedAt: new Date().toISOString() });
await db.collection('sync_meta').doc('curriculum').set({ version: Date.now(), updatedAt: FieldValue.serverTimestamp() }, { merge: true });
console.log('chapters:', doc.chapters.map((c) => `${c.id}:${c.topics.length}`).join(' '));
process.exit(0);
