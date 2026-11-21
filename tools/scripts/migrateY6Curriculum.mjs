// One-off: curriculum/Year_6 document → new ICE-EM layout (from CURRICULUM_DATA). Backs the old doc up first.
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { CURRICULUM_DATA } from '../../src/constants/curriculumData.js';
initializeApp({ credential: cert(JSON.parse(readFileSync(new URL('../../.secrets/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', import.meta.url), 'utf8'))) });
const db = getFirestore();
const ref = db.collection('curriculum').doc('Year_6');
const live = (await ref.get()).data();
const dir = `/Users/andrewkim/backups/y6-renumber-${new Date().toISOString().slice(0, 10)}`;
mkdirSync(dir, { recursive: true }); writeFileSync(`${dir}/curriculum_Year_6.json`, JSON.stringify(live, null, 2));
const chapters = CURRICULUM_DATA['Year 6'].map((c) => ({ id: c.id, title: c.title, modules: c.modules, topics: c.topics.map((t) => ({ id: t.id, code: t.code, title: t.title, page: t.page })) }));
await ref.set({ ...live, chapters, updatedAt: new Date().toISOString() });
await db.collection('sync_meta').doc('curriculum').set({ version: Date.now() }, { merge: true });
console.log(`${chapters.length} chapters written; backup → ${dir}`);
process.exit(0);
