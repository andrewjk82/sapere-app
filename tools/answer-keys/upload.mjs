// Uploads per-topic textbook answer keys to Firestore answer_keys/{topicId}
// (teacher-only, see firestore.rules). Input: a mapping.json produced by the
// answer-key split pipeline — { topicId: [{ key, title, labels, images: [webpPath] }] }.
// Usage: node tools/answer-keys/upload.mjs <dir-with-mapping.json> "<book name>"
import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { join, isAbsolute } from 'path';

const [dir, book = ''] = process.argv.slice(2);
if (!dir) { console.error('usage: upload.mjs <dir> "<book>"'); process.exit(1); }
const sa = JSON.parse(readFileSync('/Users/andrewkim/Desktop/sapere1/.secrets/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
admin.initializeApp({ credential: admin.credential.cert(sa) });
const db = admin.firestore();

const mapping = JSON.parse(readFileSync(join(dir, 'mapping.json'), 'utf8'));
const toDataUrl = (p) => `data:image/webp;base64,${readFileSync(isAbsolute(p) ? p : join(dir, p)).toString('base64')}`;

const ids = Object.keys(mapping);
let written = 0;
for (let i = 0; i < ids.length; i += 10) {
  const batch = db.batch();
  for (const topicId of ids.slice(i, i + 10)) {
    batch.set(db.collection('answer_keys').doc(topicId), {
      topicId,
      book,
      sections: mapping[topicId].map((s) => ({
        key: s.key, title: s.title, labels: s.labels, images: s.images.map(toDataUrl),
      })),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });
  }
  await batch.commit();
  written += Math.min(10, ids.length - i);
  console.log(`written ${written}/${ids.length}`);
}
