// Shrinks the inline base64 dreamImageUrl (users/{uid}, students/{id}) and the copy in leaderboard/{id}.avatarUrl
// to <= 400px / ~45KB. These strings were up to 140KB and ride along on every read/listener update of the doc.
// Dry run by default; pass --apply to write. Only touches the image fields; lists docs by id (no content scan).
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';
import sharp from 'sharp';

const apply = process.argv.includes('--apply');
const sa = JSON.parse(readFileSync('/Users/andrewkim/Desktop/sapere1/.secrets/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

const MAX_CHARS = 60000;
const isBigData = (v) => typeof v === 'string' && v.startsWith('data:image/') && v.length > MAX_CHARS;

async function shrink(dataUrl) {
  const buf = Buffer.from(dataUrl.split(',')[1], 'base64');
  for (const q of [70, 60, 50, 40, 30]) {
    const out = await sharp(buf).rotate().resize(400, 400, { fit: 'inside', withoutEnlargement: true }).flatten({ background: '#fff' }).jpeg({ quality: q }).toBuffer();
    const url = `data:image/jpeg;base64,${out.toString('base64')}`;
    if (url.length <= MAX_CHARS) return url;
  }
  return null;
}

let before = 0, after = 0, changed = 0;
for (const [col, field] of [['users', 'dreamImageUrl'], ['students', 'dreamImageUrl'], ['leaderboard', 'avatarUrl']]) {
  const refs = await db.collection(col).listDocuments();
  for (const ref of refs) {
    const snap = await ref.get();
    const v = snap.exists ? snap.get(field) : null;
    if (!isBigData(v)) continue;
    const small = await shrink(v);
    if (!small) { console.log(`${col}/${ref.id}: could not get under limit, skipped`); continue; }
    before += v.length; after += small.length; changed += 1;
    console.log(`${col}/${ref.id}.${field}: ${(v.length / 1024).toFixed(0)}KB -> ${(small.length / 1024).toFixed(0)}KB`);
    if (apply) await ref.update({ [field]: small });
  }
}
console.log(`${apply ? 'APPLIED' : 'DRY RUN'}: ${changed} fields, ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`);
