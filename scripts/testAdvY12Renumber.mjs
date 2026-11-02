/** Year 12 Advanced renumbering (2026 textbook): ids and device-local data. Run via npm run test:homework. */
import assert from 'node:assert';
import { readFileSync, readdirSync } from 'node:fs';
import { OLD_TO_NEW_TOPIC, OLD_TO_NEW_CHAPTER, QUESTION_TOPIC, RETIRED, migrateStudentIds, planProgressMoves, planNoteMoves } from '../src/utils/advY12Renumber.js';
import { CURRICULUM_DATA } from '../src/constants/curriculumData.js';

let passed = 0;
const test = async (name, fn) => { await fn(); passed += 1; console.log(`  ✓ ${name}`); };

const topicIds = new Set(['Year 11', 'Year 12'].flatMap((y) => CURRICULUM_DATA[y].Advanced.flatMap((c) => c.topics.map((t) => t.id))));
const chapterIds = new Set(CURRICULUM_DATA['Year 12'].Advanced.map((c) => c.id));

await test('the new layout is the 2nd edition: 10 chapters, a review topic each', () => {
  const chs = CURRICULUM_DATA['Year 12'].Advanced;
  assert.equal(chs.length, 10);
  chs.forEach((c, i) => assert.equal(c.topics[c.topics.length - 1].id, `y12a-${i + 1}R`));
  assert.equal(chs[8].title, 'Chapter 9: Discrete probability distributions');
});

await test('every old topic and every by-content placement lands on a topic that exists', () => {
  for (const [o, n] of Object.entries(OLD_TO_NEW_TOPIC)) assert.ok(topicIds.has(n), `${o} → ${n} is not a topic`);
  for (const [q, n] of Object.entries(QUESTION_TOPIC)) assert.ok(topicIds.has(n), `${q} → ${n} is not a topic`);
  for (const ns of Object.values(OLD_TO_NEW_CHAPTER)) ns.forEach((n) => assert.ok(chapterIds.has(n), `${n} is not a chapter`));
});

await test('every old chapter is either mapped or retired (chapter ids are reused, none may pass through)', () => {
  for (let n = 1; n <= 10; n += 1) {
    const id = `y12a-${n}`;
    assert.ok(OLD_TO_NEW_CHAPTER[id] || RETIRED.includes(id), `${id} is neither mapped nor retired`);
  }
});

await test('a student\'s ids follow the new book; dropped chapters go; unchanged topics pass through', () => {
  assert.deepEqual(
    migrateStudentIds(['y12a-1', 'y12a-3', 'y12a-5', 'y12a-10', 'y12a-3A', 'y12a-6B', 'y11a-2']),
    ['y12a-1', 'y12a-2', 'y12a-4', 'y12a-5', 'y12a-9', 'y12a-10', 'y12a-2A', 'y12a-6B', 'y11a-2'],
  );
  assert.deepEqual(migrateStudentIds(['y12a-2', 'y12a-9', 'y12a-2-2j']), []);
});

await test('progress keys move to the new chapter and topic — across years for the dropped chapters', () => {
  const store = new Map([
    ['sapere:tp:u1:y12a-3:y12a-3A', '["a"]'],                    // old increasing/decreasing → 2A
    ['sapere:tp:u1:y12a-2:y12a-2H', '["b"]'],                    // old combined transformations → Year 11 5G
    ['sapere:tp:u1:y12a-8:y12a-8F:meta', '{"progress":40}'],     // old finance review → 8R (new 8F is the annuity)
    ['sapere:tp:u1:y12a-1:y12a-1a', '["m"]'],                    // lower-case misc topic → 1A
    ['sapere:tp:u1:y12a-1:y12a-1A', '["same"]'],
    ['sapere:tp:u1:y12a-9:y12a-9-9g', '["gone"]'],               // retired
  ]);
  const plan = planProgressMoves('u1', [...store.keys()], (k) => store.get(k));
  const set = Object.fromEntries(plan.set);
  assert.equal(set['sapere:tp:u1:y12a-2:y12a-2A'], '["a"]');
  assert.equal(set['sapere:tp:u1:y11a-5:y11a-5G'], '["b"]');
  assert.equal(set['sapere:tp:u1:y12a-8:y12a-8R:meta'], '{"progress":40}');
  assert.equal(set['sapere:tp:u1:y12a-1:y12a-1A'], '["m"]');
  assert.equal(Object.keys(set).length, 4);
  assert.ok(!plan.remove.includes('sapere:tp:u1:y12a-1:y12a-1A'));
  assert.ok(plan.remove.includes('sapere:tp:u1:y12a-9:y12a-9-9g'));
});

await test('notes follow their topic; the old 2A note does not overwrite the new 2A', () => {
  const plan = planNoteMoves([
    ['topic:y12a-2A', { pages: 'old sign of a function', updatedAt: 5 }],
    ['topic:y12a-3A', { pages: 'old increasing/decreasing', updatedAt: 1 }],
    ['topic:y12a-6B', { pages: 'same', updatedAt: 1 }],
  ]);
  const set = Object.fromEntries(plan.set);
  assert.equal(set['topic:y12a-2A'].pages, 'old increasing/decreasing');
  assert.equal(set['topic:y11a-4B'].pages, 'old sign of a function');
  assert.deepEqual(plan.remove.sort(), ['topic:y12a-2A', 'topic:y12a-3A']);
});

await test('content files: every Advanced question sits in a topic of the new layout', () => {
  const dir = new URL('../content/chapters/', import.meta.url);
  const synthetic = new Set(CURRICULUM_DATA['Year 11'].Advanced.map((c) => c.id));   // chapter-level "synthetic" topics
  for (const f of readdirSync(dir).filter((n) => /^y1[12]a-\d+\.json$/.test(n))) {
    const d = JSON.parse(readFileSync(new URL(f, dir), 'utf8'));
    for (const t of d.topics) assert.ok(topicIds.has(t.topicId) || (t.synthetic && synthetic.has(t.topicId)), `${f}: ${t.topicId} is not a topic`);
  }
});

console.log(`\nadvanced y12 renumber: ${passed} passed`);
