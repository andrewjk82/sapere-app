// One-off (2026-11-23): link every curriculum/Year_6 topic to its worksheet on Drive ('Y6 Ch<code>.pdf', ids in y6DriveIds.json).
import admin from 'firebase-admin';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
admin.initializeApp({ credential: admin.credential.cert(JSON.parse(readFileSync('.secrets/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'))) });
const db = admin.firestore();
const IDS = JSON.parse(readFileSync(new URL('./y6DriveIds.json', import.meta.url), 'utf8'));
const url = (id) => `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(`https://drive.google.com/uc?export=download&id=${id}`)}`;
const ref = db.collection('curriculum').doc('Year_6');
const doc = (await ref.get()).data();
mkdirSync('/Users/andrewkim/backups/y6-worksheets-2026-11-23', { recursive: true });
writeFileSync('/Users/andrewkim/backups/y6-worksheets-2026-11-23/curriculum.json', JSON.stringify(doc, null, 2));
let n = 0;
for (const c of doc.chapters) for (const t of c.topics) {
  const id = IDS[`Y6 Ch${t.code}.pdf`];
  if (!id) { console.log('no file for', t.code); continue; }
  t.homeworkPdfUrl = url(id); n++;
}
await ref.set({ ...doc, updatedAt: new Date().toISOString() });
await db.collection('sync_meta').doc('curriculum').set({ version: Date.now(), updatedAt: admin.firestore.FieldValue.serverTimestamp() }, { merge: true });
console.log('linked', n);
process.exit(0);
