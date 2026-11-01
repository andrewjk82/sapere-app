// Re-lay out content/chapters/y12e1-*.json to the 2026 textbook (CambridgeMATHS NSW Stage 6 Mathematics Extension 1
// Year 12, 2nd edition, 18 chapters). Question ids and bodies are untouched — each question just moves to its new topic
// (src/utils/ext1Y12Renumber.js: QUESTION_TOPIC first, then OLD_TO_NEW_TOPIC, else the same id). Questions of the dropped
// chapters go to their Year 11 Extension 1 topics, added to those files.
//
//   node tools/content/ext1y12-renumber.mjs            → dry run: prints where every question goes
//   node tools/content/ext1y12-renumber.mjs --apply    → rewrites the files
//
// Run it ONCE on old-layout files (new ids reuse old ones, so a second pass would scramble them); it refuses to run
// when y12e1-18.json already exists.
import { readFileSync, writeFileSync, readdirSync, existsSync, unlinkSync } from 'fs';
import { join } from 'path';
import { OLD_TO_NEW_TOPIC, QUESTION_TOPIC, RETIRED } from '../../src/utils/ext1Y12Renumber.js';
import { chapterOfTopic } from '../../src/utils/topicRenumber.js';
import { CURRICULUM_DATA } from '../../src/constants/curriculumData.js';

const APPLY = process.argv.includes('--apply');
const DIR = new URL('../../content/chapters/', import.meta.url).pathname;
if (existsSync(join(DIR, 'y12e1-18.json'))) { console.error('y12e1-18.json already exists: the layout looks migrated already. Nothing done.'); process.exit(1); }

// Every topic a question may land in, with its chapter (from the curriculum, so titles match the app).
const topicInfo = new Map();
const chapterInfo = new Map();
for (const [year, course] of [['Year 12', 'Extension 1'], ['Year 11', 'Extension 1']]) {
  CURRICULUM_DATA[year][course].forEach((ch, order) => {
    chapterInfo.set(ch.id, { year, title: ch.title, order: ch.topics.map((t) => t.id) });
    ch.topics.forEach((t) => topicInfo.set(t.id, { code: t.code, title: t.title }));
  });
}

const oldFiles = readdirSync(DIR).filter((f) => /^y12e1-\d+\.json$/.test(f));
const placed = new Map();   // new topic id → [question]
let moved = 0;
for (const f of oldFiles) {
  const d = JSON.parse(readFileSync(join(DIR, f), 'utf8'));
  for (const t of d.topics) {
    for (const q of t.questions || []) {
      const target = QUESTION_TOPIC[q.id] || OLD_TO_NEW_TOPIC[t.topicId] || (RETIRED.includes(t.topicId) ? null : t.topicId);
      if (!target || !topicInfo.has(target)) throw new Error(`${q.id} (${t.topicId}) has no place: ${target}`);
      if (!placed.has(target)) placed.set(target, []);
      placed.get(target).push(q);
      console.log(`${t.topicId.padEnd(14)} → ${target.padEnd(11)} ${q.id}${QUESTION_TOPIC[q.id] ? '   (by content)' : ''}`);
      moved += 1;
    }
  }
}

// Group by chapter; a Year 11 chapter file keeps what it already has and gets the new questions appended to its topic.
const byChapter = new Map();
for (const [topicId, qs] of placed) {
  const ch = chapterOfTopic(topicId);
  if (!byChapter.has(ch)) byChapter.set(ch, new Map());
  byChapter.get(ch).set(topicId, qs);
}
const writes = [];
for (const [ch, topics] of byChapter) {
  const info = chapterInfo.get(ch);
  const isOld = ch.startsWith('y12e1-');
  const path = join(DIR, `${ch}.json`);
  const base = !isOld && existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : { chapterId: ch, title: info.title, year: info.year, topics: [] };
  const existing = new Map(base.topics.map((t) => [t.topicId, t]));
  for (const [topicId, qs] of topics) {
    const have = existing.get(topicId);
    const ids = new Set((have?.questions || []).map((q) => q.id));
    const add = qs.filter((q) => !ids.has(q.id));
    if (have) have.questions.push(...add);
    else existing.set(topicId, { topicId, code: topicInfo.get(topicId).code, title: topicInfo.get(topicId).title, questions: add });
  }
  base.topics = [...existing.values()].sort((a, b) => info.order.indexOf(a.topicId) - info.order.indexOf(b.topicId));
  writes.push([path, base]);
}

const newFiles = new Set(writes.map(([p]) => p));
const stale = oldFiles.map((f) => join(DIR, f)).filter((p) => !newFiles.has(p));
console.log(`\n${moved} questions → ${writes.length} chapter files: ${writes.map(([p]) => p.split('/').pop()).join(' ')}`);
console.log(`old files with nothing left (removed): ${stale.map((p) => p.split('/').pop()).join(' ') || 'none'}`);
if (!APPLY) { console.log('DRY RUN — nothing written. Re-run with --apply.'); process.exit(0); }
for (const p of stale) unlinkSync(p);
for (const [p, data] of writes) writeFileSync(p, `${JSON.stringify(data, null, 2)}\n`);
console.log('written.');
