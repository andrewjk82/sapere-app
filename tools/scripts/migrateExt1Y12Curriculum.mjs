// One-off: re-lay out Year 12 Extension 1 to match the 2026 textbook (CambridgeMATHS NSW Stage 6 Mathematics Extension 1
// Year 12, 2nd edition, 18 chapters).
//   node tools/scripts/migrateExt1Y12Curriculum.mjs            → dry run (prints what would change, writes nothing)
//   node tools/scripts/migrateExt1Y12Curriculum.mjs --apply    → writes (a JSON backup of everything touched goes first)
// Touches only: curriculum/Year_12_Extension 1 (new layout + new worksheets), curriculum/Year_11_Extension 1 (cheat sheets of
// the dropped chapters are appended to the chapters their content moved to) and, in users/ + students/, the id fields that
// mention y12e1-. Never touches `questions`. Idempotent: a marker on each migrated document stops a second run from
// shifting ids twice (new ids reuse old ones, so a second pass would corrupt them).
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { OLD_TO_NEW_CHAPTER, migrateStudentIds } from '../../src/utils/ext1Y12Renumber.js';
import { CURRICULUM_DATA } from '../../src/constants/curriculumData.js';

// The per-topic worksheets cut from the new book (tools/hw-pdf/split_cambridge_ext1_y12.py), uploaded to Drive as
// 'E1Y12 Ch<code>.pdf' / 'E1Y12 Ch<n>R Review.pdf'.
const DRIVE_IDS = JSON.parse(readFileSync(new URL('./ext1y12DriveIds.json', import.meta.url), 'utf8'));
const worksheetFile = (code) => (code.endsWith('R') ? `E1Y12 Ch${code} Review.pdf` : `E1Y12 Ch${code}.pdf`);
const worksheetUrl = (code) => {
  const id = DRIVE_IDS[worksheetFile(code)];
  return id ? `https://drive.google.com/file/d/${id}/preview` : null;
};

// Where each old chapter's cheat sheets go: the new chapter(s) its content moved to. Dropped chapters → Year 11.
const CHEAT_SHEETS_TO = {
  ...Object.fromEntries(Object.entries(OLD_TO_NEW_CHAPTER).map(([o, ns]) => [o, [ns[0]]])),
  'y12e1-6': ['y12e1-5', 'y12e1-6'], 'y12e1-12': ['y12e1-12'], 'y12e1-16': ['y12e1-17'],
  'y12e1-3': ['y11e1-6'], 'y12e1-11': ['y11e1-16'], 'y12e1-15': ['y11e1-15'],
};

const APPLY = process.argv.includes('--apply');
const MARK = 'cms6-ext1-y12-2ed';
initializeApp({ credential: cert(JSON.parse(readFileSync(new URL('../../.secrets/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', import.meta.url), 'utf8'))) });
const db = getFirestore();
const backupDir = `/Users/andrewkim/backups/ext1y12-renumber-${new Date().toISOString().slice(0, 10)}`;
const backups = {};
// The backup is saved before every write, so a run that stops half-way still has everything it changed.
const saveBackup = () => { mkdirSync(backupDir, { recursive: true }); writeFileSync(`${backupDir}/backup.json`, JSON.stringify(backups, null, 2)); };

const missing = CURRICULUM_DATA['Year 12']['Extension 1'].flatMap((c) => c.topics.map((t) => t.code)).filter((code) => !worksheetUrl(code));
if (missing.length) console.log(`⚠ no worksheet on Drive for: ${missing.join(' ')}`);

// ── 1. the curriculum documents ───────────────────────────────────────────────
const ref = db.collection('curriculum').doc('Year_12_Extension 1');
const y11Ref = db.collection('curriculum').doc('Year_11_Extension 1');
const [snap, y11Snap] = await db.getAll(ref, y11Ref);
const live = snap.data();
if (live.layout === MARK) { console.log('curriculum doc already migrated — nothing to do there'); }
else {
  backups['curriculum__Year_12_Extension 1'] = live;
  const sheetsFor = new Map();   // new chapter id → cheat sheets
  for (const ch of live.chapters) {
    const sheets = Array.isArray(ch.cheatSheets) ? ch.cheatSheets : (ch.cheatSheetUrl ? [{ id: `${ch.id}-cs-legacy`, label: 'Cheat Sheet', url: ch.cheatSheetUrl }] : []);
    for (const to of CHEAT_SHEETS_TO[ch.id] || []) {
      const list = sheetsFor.get(to) || [];
      for (const s of sheets) if (!list.some((x) => x.url === s.url)) list.push(s);
      sheetsFor.set(to, list);
    }
  }
  const chapters = CURRICULUM_DATA['Year 12']['Extension 1'].map((c) => {
    const out = { id: c.id, title: c.title, modules: c.modules };
    if (sheetsFor.get(c.id)?.length) out.cheatSheets = sheetsFor.get(c.id);
    out.topics = c.topics.map((t) => {
      const url = worksheetUrl(t.code);
      return { id: t.id, code: t.code, title: t.title, ...(url ? { homeworkPdfUrl: url } : {}) };
    });
    return out;
  });
  console.log('\nCURRICULUM DOC — new layout');
  for (const c of chapters) {
    console.log(` ${c.id.padEnd(9)} ${c.title}  (cheat sheets: ${c.cheatSheets?.length || 0}, worksheets: ${c.topics.filter((t) => t.homeworkPdfUrl).length}/${c.topics.length})`);
  }
  if (APPLY) { saveBackup(); await ref.set({ ...live, chapters, layout: MARK, updatedAt: new Date().toISOString() }); }

  // Year 11 Extension 1: append the dropped chapters' cheat sheets (nothing else changes).
  const y11 = y11Snap.data();
  if (y11 && y11.ext1y12Sheets !== MARK) {
    const y11Chapters = (y11.chapters || []).map((ch) => {
      const add = (sheetsFor.get(ch.id) || []).filter((s) => !(ch.cheatSheets || []).some((x) => x.url === s.url));
      if (!add.length) return ch;
      console.log(` Year 11 ${ch.id}: + ${add.length} cheat sheet(s) from the dropped Year 12 chapter`);
      return { ...ch, cheatSheets: [...(ch.cheatSheets || []), ...add] };
    });
    backups['curriculum__Year_11_Extension 1'] = y11;
    if (APPLY) { saveBackup(); await y11Ref.set({ ...y11, chapters: y11Chapters, ext1y12Sheets: MARK, updatedAt: new Date().toISOString() }); }
  } else if (!y11) console.log(' (no curriculum/Year_11_Extension 1 doc — its cheat sheets are not carried)');
  if (APPLY) await db.collection('sync_meta').doc('curriculum').set({ version: Date.now() }, { merge: true });
}

// ── 2. students (users + students collections): id fields that mention y12e1- ──
const ID_LIST_FIELDS = ['assignedChapters', 'completedChapters'];
const mentions = (list) => Array.isArray(list) && list.some((x) => String(x).startsWith('y12e1-'));
let touched = 0;
for (const col of ['users', 'students']) {
  const docs = await db.collection(col).get();
  for (const d of docs.docs) {
    const data = d.data();
    if (data.ext1y12Layout === MARK) continue;
    const update = {};
    for (const f of ID_LIST_FIELDS) if (mentions(data[f])) update[f] = migrateStudentIds(data[f]);
    if (data.chapterDates && typeof data.chapterDates === 'object' && Object.keys(data.chapterDates).some((k) => k.startsWith('y12e1-'))) {
      const next = {};
      for (const [k, v] of Object.entries(data.chapterDates)) {
        if (!k.startsWith('y12e1-')) { next[k] = v; continue; }
        for (const nk of migrateStudentIds([k])) next[nk] ??= v;
      }
      update.chapterDates = next;
    }
    for (const f of ['examPrepSelection', 'dailyPracticeConfig']) {
      const sel = data[f];
      if (sel && mentions(sel.chapters)) update[f] = { ...sel, chapters: migrateStudentIds(sel.chapters) };
    }
    if (!Object.keys(update).length) continue;
    touched += 1;
    backups[`${col}__${d.id}`] = Object.fromEntries(Object.keys(update).map((k) => [k, data[k] ?? null]));
    console.log(`\n${col}/${d.id}  ${data.firstName || data.name || data.email || ''}`);
    const ext1 = (v) => (Array.isArray(v) ? v.filter((x) => String(x).startsWith('y12e1-')) : Array.isArray(v?.chapters) ? v.chapters.filter((x) => String(x).startsWith('y12e1-')) : Object.keys(v || {}).filter((x) => x.startsWith('y12e1-')));
    for (const k of Object.keys(update)) console.log(`   ${k}: ${JSON.stringify(ext1(data[k]))}\n     → ${JSON.stringify(ext1(update[k]))}`);
    if (APPLY) { saveBackup(); await d.ref.update({ ...update, ext1y12Layout: MARK }); }
  }
}
console.log(`\n${touched} student record(s) ${APPLY ? 'updated' : 'would be updated'}.`);
if (APPLY) console.log('backup →', backupDir);
else console.log('DRY RUN — nothing was written. Re-run with --apply.');
process.exit(0);
