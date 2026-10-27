#!/usr/bin/env node
/**
 * Build sync_meta/hsc_past_paper_pool — the flat id pool that
 * dailyAssignmentService.js draws from when a student has
 * hscPastPaperEnabled:true, so Daily Challenge can mix in HSC trial-paper
 * questions without needing per-question curriculum chapter mapping.
 *
 * Unions the question ids of every `content/chapters/exam:*.json` chapter.
 *
 * It used to union `question_index/{chapterId}.ids` over the chapters listed in
 * curriculumSeeds.js. Both of those are gone: question content lives in
 * content/chapters/*.json (git) and nothing has maintained question_index since
 * the 2026-09 migration, so the old version was unioning a frozen index. Reading
 * the content files costs nothing and is the same source students are served.
 *
 * Usage: node tools/scripts/rebuildHscPastPaperPool.mjs
 */
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

const KEY = new URL('../../.secrets/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', import.meta.url).pathname;
const DIR = new URL('../../content/chapters/', import.meta.url).pathname;

/** Every question id in the file, at any depth (topics, exam sections, parts). */
const collectIds = (node, out) => {
  if (Array.isArray(node)) { node.forEach((n) => collectIds(n, out)); return out; }
  if (!node || typeof node !== 'object') return out;
  if (typeof node.id === 'string' && (node.stem !== undefined || node.options !== undefined)) out.add(node.id);
  for (const v of Object.values(node)) collectIds(v, out);
  return out;
};

const files = readdirSync(DIR).filter((f) => f.startsWith('exam:') && f.endsWith('.json')).sort();
const byChapter = {};
const idSet = new Set();
for (const f of files) {
  const chapterId = f.slice(0, -5);                 // drop ".json"
  const ids = collectIds(JSON.parse(readFileSync(join(DIR, f), 'utf8')), new Set());
  byChapter[chapterId] = ids.size;
  ids.forEach((id) => idSet.add(id));
}
const ids = [...idSet];
const sourceChapterIds = Object.keys(byChapter);

console.log(`Found ${sourceChapterIds.length} exam chapters.`);
console.log('Per-chapter counts:', byChapter);
console.log(`Total unique ids: ${ids.length}`);

if (process.argv.includes('--dry-run')) {
  console.log('\n--dry-run: nothing written.');
  process.exit(0);
}

initializeApp({ credential: cert(JSON.parse(readFileSync(KEY, 'utf8'))) });
await getFirestore().collection('sync_meta').doc('hsc_past_paper_pool').set({
  ids,
  count: ids.length,
  sourceChapterIds,
  updatedAt: FieldValue.serverTimestamp(),
});
console.log('✅ sync_meta/hsc_past_paper_pool written.');
process.exit(0);
