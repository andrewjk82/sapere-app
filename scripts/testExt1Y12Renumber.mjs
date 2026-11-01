/** Year 12 Extension 1 renumbering (2026 textbook): ids and device-local data. Run via npm run test:homework. */
import assert from 'node:assert';
import { readFileSync, readdirSync } from 'node:fs';
import { OLD_TO_NEW_TOPIC, OLD_TO_NEW_CHAPTER, QUESTION_TOPIC, RETIRED, migrateStudentIds, planProgressMoves, planNoteMoves } from '../src/utils/ext1Y12Renumber.js';
import { CURRICULUM_DATA } from '../src/constants/curriculumData.js';

let passed = 0;
const test = async (name, fn) => { await fn(); passed += 1; console.log(`  ✓ ${name}`); };

const topicIds = new Set(['Year 11', 'Year 12'].flatMap((y) => CURRICULUM_DATA[y]['Extension 1'].flatMap((c) => c.topics.map((t) => t.id))));
const chapterIds = new Set(CURRICULUM_DATA['Year 12']['Extension 1'].map((c) => c.id));

await test('the new layout is the 2nd edition: 18 chapters, a review topic each', () => {
  const chs = CURRICULUM_DATA['Year 12']['Extension 1'];
  assert.equal(chs.length, 18);
  chs.forEach((c, i) => assert.equal(c.topics[c.topics.length - 1].id, `y12e1-${i + 1}R`));
});

await test('every old topic and every by-content placement lands on a topic that exists', () => {
  for (const [o, n] of Object.entries(OLD_TO_NEW_TOPIC)) assert.ok(topicIds.has(n), `${o} → ${n} is not a topic`);
  for (const [q, n] of Object.entries(QUESTION_TOPIC)) assert.ok(topicIds.has(n), `${q} → ${n} is not a topic`);
  for (const ns of Object.values(OLD_TO_NEW_CHAPTER)) ns.forEach((n) => assert.ok(chapterIds.has(n), `${n} is not a chapter`));
});

await test('every old chapter is either mapped or retired (chapter ids are reused, none may pass through)', () => {
  for (let n = 1; n <= 17; n += 1) {
    const id = `y12e1-${n}`;
    assert.ok(OLD_TO_NEW_CHAPTER[id] || RETIRED.includes(id), `${id} is neither mapped nor retired`);
  }
});

await test('a student\'s ids follow the new book; dropped chapters go; unchanged topics pass through', () => {
  assert.deepEqual(
    migrateStudentIds(['y12e1-1', 'y12e1-3', 'y12e1-4', 'y12e1-6', 'y12e1-12', 'y12e1-1A', 'y12e1-13D', 'y11e1-2']),
    ['y12e1-1', 'y12e1-3', 'y12e1-5', 'y12e1-6', 'y12e1-11', 'y12e1-12', 'y12e1-1A', 'y12e1-14D', 'y11e1-2'],
  );
  assert.deepEqual(migrateStudentIds(['y12e1-11', 'y12e1-15', 'y12e1-3F']), []);
});

await test('progress keys move to the new chapter and topic — across years for the dropped chapters', () => {
  const store = new Map([
    ['sapere:tp:u1:y12e1-13:y12e1-13D', '["a"]'],                  // old logistic DE → 14D
    ['sapere:tp:u1:y12e1-4:y12e1-4A', '["b"]'],                    // old curve sketching 4A → 3A
    ['sapere:tp:u1:y12e1-3:y12e1-3A', '["c"]'],                    // old sign of a function → Year 11 6B
    ['sapere:tp:u1:y12e1-11:y12e1-11B:meta', '{"progress":40}'],   // old auxiliary angle → Year 11 16E
    ['sapere:tp:u1:y12e1-1:y12e1-1-1j', '["r"]'],                  // old review id → 1R
    ['sapere:tp:u1:y12e1-1:y12e1-1A', '["same"]'],
    ['sapere:tp:u1:y12e1-15:y12e1-15A', '["data"]'],               // retired
  ]);
  const plan = planProgressMoves('u1', [...store.keys()], (k) => store.get(k));
  const set = Object.fromEntries(plan.set);
  assert.equal(set['sapere:tp:u1:y12e1-14:y12e1-14D'], '["a"]');
  assert.equal(set['sapere:tp:u1:y12e1-3:y12e1-3A'], '["b"]');
  assert.equal(set['sapere:tp:u1:y11e1-6:y11e1-6B'], '["c"]');
  assert.equal(set['sapere:tp:u1:y11e1-16:y11e1-16E:meta'], '{"progress":40}');
  assert.equal(set['sapere:tp:u1:y12e1-1:y12e1-1R'], '["r"]');
  assert.equal(Object.keys(set).length, 5);
  assert.ok(!plan.remove.includes('sapere:tp:u1:y12e1-1:y12e1-1A'));
  assert.ok(plan.remove.includes('sapere:tp:u1:y12e1-15:y12e1-15A'));
});

await test('notes follow their topic; the old 3A note does not overwrite the new 3A', () => {
  const plan = planNoteMoves([
    ['topic:y12e1-3A', { pages: 'old sign of a function', updatedAt: 5 }],
    ['topic:y12e1-4A', { pages: 'old increasing/decreasing', updatedAt: 1 }],
    ['topic:y12e1-2A', { pages: 'same', updatedAt: 1 }],
  ]);
  const set = Object.fromEntries(plan.set);
  assert.equal(set['topic:y12e1-3A'].pages, 'old increasing/decreasing');
  assert.equal(set['topic:y11e1-6B'].pages, 'old sign of a function');
  assert.deepEqual(plan.remove.sort(), ['topic:y12e1-3A', 'topic:y12e1-4A']);
});

await test('content files: every Year 12 Extension 1 question sits in a topic of the new layout', () => {
  const dir = new URL('../content/chapters/', import.meta.url);
  for (const f of readdirSync(dir).filter((n) => /^y1[12]e1-\d+\.json$/.test(n))) {
    const d = JSON.parse(readFileSync(new URL(f, dir), 'utf8'));
    for (const t of d.topics) assert.ok(topicIds.has(t.topicId), `${f}: ${t.topicId} is not a topic`);
  }
});

console.log(`\next1 y12 renumber: ${passed} passed`);
