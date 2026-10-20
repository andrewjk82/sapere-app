// One-off: re-lay out Year 12 Extension 2 to match the 2026 textbook (CambridgeMATHS NSW Stage 6 Extension 2).
//   node tools/scripts/migrateExt2Curriculum.mjs            → dry run (prints what would change, writes nothing)
//   node tools/scripts/migrateExt2Curriculum.mjs --apply    → writes (a JSON backup of everything touched goes first)
// Touches only: curriculum/Year_12_Extension 2 and, in users/ + students/, the id fields that mention y12e2-.
// Never touches `questions`. Idempotent: a marker on each migrated document stops a second run from shifting ids twice
// (new ids reuse old ones, so a second pass would corrupt them).
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'fs';
import { OLD_TO_NEW_TOPIC, OLD_TO_NEW_CHAPTER, migrateStudentIds } from '../../src/utils/ext2Renumber.js';
import { CURRICULUM_DATA } from '../../src/constants/curriculumData.js';

const APPLY = process.argv.includes('--apply');
const MARK = 'cms6-2026';
const dir = '/Users/andrewkim/Downloads/';
const keyFile = readdirSync(dir).find((n) => /^sapere-fe23e-firebase-adminsdk.*\.json$/.test(n));
initializeApp({ credential: cert(JSON.parse(readFileSync(dir + keyFile, 'utf8'))) });
const db = getFirestore();
const backupDir = `/Users/andrewkim/backups/ext2-renumber-${new Date().toISOString().slice(0, 10)}`;
const backups = {};

// ── 1. the curriculum document ────────────────────────────────────────────────
const ref = db.collection('curriculum').doc('Year_12_Extension 2');
const snap = await ref.get();
const live = snap.data();
if (live.layout === MARK) { console.log('curriculum doc already migrated — nothing to do there'); }
else {
  backups['curriculum__Year_12_Extension 2'] = live;
  const oldTopics = new Map();
  const oldChapters = new Map();
  for (const ch of live.chapters) { oldChapters.set(ch.id, ch); for (const t of ch.topics || []) oldTopics.set(t.id, t); }
  const inverseTopic = {};
  for (const [o, n] of Object.entries(OLD_TO_NEW_TOPIC)) (inverseTopic[n] ||= []).push(o);
  // identity topics (1A–1F, 2A) keep their own old record
  for (const id of ['1A', '1B', '1C', '1D', '1E', '1F', '2A']) inverseTopic[`y12e2-${id}`] = [`y12e2-${id}`];
  const inverseChapter = {};
  for (const [o, ns] of Object.entries(OLD_TO_NEW_CHAPTER)) for (const n of ns) inverseChapter[n] ||= o;
  for (const n of ['y12e2-1', 'y12e2-2', 'y12e2-3']) inverseChapter[n] = n;

  const chapters = CURRICULUM_DATA['Year 12']['Extension 2'].map((c) => {
    const old = oldChapters.get(inverseChapter[c.id]);
    const out = { id: c.id, title: c.title, modules: c.topics.length };
    if (old?.cheatSheets) out.cheatSheets = old.cheatSheets;
    out.topics = c.topics.map((t) => {
      const sources = (inverseTopic[t.id] || []).map((o) => oldTopics.get(o)).filter(Boolean);
      const url = sources.map((s) => s.homeworkPdfUrl).find(Boolean);
      return { id: t.id, code: t.code, title: t.title, ...(url ? { homeworkPdfUrl: url } : {}) };
    });
    return out;
  });
  console.log('\nCURRICULUM DOC — new layout');
  for (const c of chapters) {
    console.log(` ${c.id} ${c.title}  (cheat sheets: ${c.cheatSheets?.length || 0})`);
    for (const t of c.topics) console.log(`    ${t.id.padEnd(10)} ${t.title}${t.homeworkPdfUrl ? '   [worksheet kept]' : ''}`);
  }
  if (APPLY) await ref.set({ ...live, chapters, layout: MARK, updatedAt: new Date().toISOString() });
}

// ── 2. students (users + students collections): id fields that mention y12e2- ──
const ID_LIST_FIELDS = ['assignedChapters', 'completedChapters'];
let touched = 0;
for (const col of ['users', 'students']) {
  const docs = await db.collection(col).get();
  for (const d of docs.docs) {
    const data = d.data();
    if (data.ext2Layout === MARK) continue;
    const update = {};
    for (const f of ID_LIST_FIELDS) {
      if (!Array.isArray(data[f]) || !data[f].some((x) => String(x).startsWith('y12e2-'))) continue;
      const next = migrateStudentIds(data[f]);
      // Chapter 5 (Trigonometric Identities) is new: a student who had the whole old course gets it too.
      if (['y12e2-1', 'y12e2-2', 'y12e2-3', 'y12e2-4', 'y12e2-5', 'y12e2-6'].every((id) => data[f].includes(id)) && !next.includes('y12e2-5')) next.push('y12e2-5');
      update[f] = next;
    }
    if (data.chapterDates && typeof data.chapterDates === 'object' && Object.keys(data.chapterDates).some((k) => k.startsWith('y12e2-'))) {
      const next = {};
      for (const [k, v] of Object.entries(data.chapterDates)) {
        if (!k.startsWith('y12e2-')) { next[k] = v; continue; }
        for (const nk of migrateStudentIds([k])) next[nk] ??= v;
      }
      update.chapterDates = next;
    }
    const sel = data.examPrepSelection;
    if (sel && Array.isArray(sel.chapters) && sel.chapters.some((x) => String(x).startsWith('y12e2-'))) update.examPrepSelection = { ...sel, chapters: migrateStudentIds(sel.chapters) };
    if (!Object.keys(update).length) continue;
    const changed = Object.keys(update).some((k) => JSON.stringify(update[k]) !== JSON.stringify(data[k]));
    touched += 1;
    backups[`${col}__${d.id}`] = Object.fromEntries(Object.keys(update).map((k) => [k, data[k] ?? null]));
    console.log(`\n${col}/${d.id}  ${data.firstName || data.name || data.email || ''}`);
    if (!changed) console.log('   (ids unchanged — only marked as migrated)');
    for (const k of Object.keys(update)) if (JSON.stringify(update[k]) !== JSON.stringify(data[k])) console.log(`   ${k}: ${JSON.stringify(data[k].filter?.((x) => String(x).startsWith('y12e2-')) ?? data[k])}\n     → ${JSON.stringify(update[k].filter?.((x) => String(x).startsWith('y12e2-')) ?? update[k])}`);
    if (APPLY) await d.ref.update({ ...update, ext2Layout: MARK });
  }
}
console.log(`\n${touched} student record(s) ${APPLY ? 'updated' : 'would be updated'}.`);
if (APPLY) { mkdirSync(backupDir, { recursive: true }); writeFileSync(`${backupDir}/backup.json`, JSON.stringify(backups, null, 2)); console.log('backup →', backupDir); }
else console.log('DRY RUN — nothing was written. Re-run with --apply.');
process.exit(0);
