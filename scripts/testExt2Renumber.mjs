/** Extension 2 renumbering: ids and device-local data. Run via npm run test:homework. */
import assert from 'node:assert';
import { OLD_TO_NEW_TOPIC, chapterOfTopic, migrateStudentIds, planProgressMoves, planNoteMoves } from '../src/utils/ext2Renumber.js';

let passed = 0;
const test = async (name, fn) => { await fn(); passed += 1; console.log(`  ✓ ${name}`); };

await test('chapter of a topic id', () => { assert.equal(chapterOfTopic('y12e2-6D'), 'y12e2-6'); assert.equal(chapterOfTopic('y9-1a'), ''); });

await test('a student\'s ids follow the new book; unknown ids and unchanged topics pass through; retired ones are dropped', () => {
  assert.deepEqual(migrateStudentIds(['y12e2-4', 'y12e2-5C', 'y12e2-3D', 'y12e2-1A', 'y12e2-1', 'y9-1']), ['y12e2-6', 'y12e2-4F', 'y12e2-1A', 'y12e2-1', 'y9-1']);
  assert.deepEqual(migrateStudentIds(['y12e2-1G', 'y12e2-4D']), ['y12e2-3A', 'y12e2-6D']);
  assert.deepEqual(migrateStudentIds(null), []);
});

await test('progress keys: old topic keys move out first, so reused ids never mix', () => {
  const store = new Map([
    ['sapere:tp:u1:y12e2-4:y12e2-4D', '["a","b"]'],                 // old Partial Fractions
    ['sapere:tp:u1:y12e2-4:y12e2-4D:meta', '{"progress":50}'],
    ['sapere:tp:u1:y12e2-5:y12e2-5F', '["c"]'],                      // old Vector equation of a line → 4A
    ['sapere:tp:u1:y12e2-1:y12e2-1A', '["z"]'],                      // unchanged
    ['sapere:tp:u1:y12e2-3:y12e2-3D', '["gone"]'],                   // Euler form: retired
    ['sapere:tp:other:y12e2-4:y12e2-4D', '["not mine"]'],
    ['unrelated', '1'],
  ]);
  const plan = planProgressMoves('u1', [...store.keys()], (k) => store.get(k));
  assert.deepEqual(plan.remove.sort(), ['sapere:tp:u1:y12e2-3:y12e2-3D', 'sapere:tp:u1:y12e2-4:y12e2-4D', 'sapere:tp:u1:y12e2-4:y12e2-4D:meta', 'sapere:tp:u1:y12e2-5:y12e2-5F']);
  const set = Object.fromEntries(plan.set);
  assert.equal(set['sapere:tp:u1:y12e2-6:y12e2-6D'], '["a","b"]');
  assert.equal(set['sapere:tp:u1:y12e2-6:y12e2-6D:meta'], '{"progress":50}');
  assert.equal(set['sapere:tp:u1:y12e2-4:y12e2-4A'], '["c"]');
  assert.equal(Object.keys(set).length, 3);
});

await test('two old topics merging into one (5C + 5D → 4F) union their mastered questions', () => {
  const store = new Map([['sapere:tp:u1:y12e2-5:y12e2-5C', '["q1","q2"]'], ['sapere:tp:u1:y12e2-5:y12e2-5D', '["q2","q3"]']]);
  const plan = planProgressMoves('u1', [...store.keys()], (k) => store.get(k));
  assert.deepEqual(JSON.parse(Object.fromEntries(plan.set)['sapere:tp:u1:y12e2-4:y12e2-4F']).sort(), ['q1', 'q2', 'q3']);
});

await test('notes: moved to the new topic key, the newer note wins a merge, retired ones go', () => {
  const plan = planNoteMoves([
    ['topic:y12e2-5C', { pages: 'old', updatedAt: 1 }],
    ['topic:y12e2-5D', { pages: 'newer', updatedAt: 9 }],
    ['topic:y12e2-4D', { pages: 'pf', updatedAt: 3 }],
    ['topic:y12e2-1B', { pages: 'same', updatedAt: 2 }],
    ['topic:y12e2-3E', { pages: 'euler', updatedAt: 2 }],
    ['topic:y9-1a', { pages: 'other', updatedAt: 2 }],
  ]);
  assert.deepEqual(plan.remove.sort(), ['topic:y12e2-3E', 'topic:y12e2-4D', 'topic:y12e2-5C', 'topic:y12e2-5D']);
  const set = Object.fromEntries(plan.set);
  assert.equal(set['topic:y12e2-4F'].pages, 'newer');
  assert.equal(set['topic:y12e2-6D'].pages, 'pf');
});

await test('every old topic maps to a topic that exists in the new curriculum', async () => {
  const { CURRICULUM_DATA } = await import('../src/constants/curriculumData.js');
  const ids = new Set(CURRICULUM_DATA['Year 12']['Extension 2'].flatMap((c) => c.topics.map((t) => t.id)));
  for (const [o, n] of Object.entries(OLD_TO_NEW_TOPIC)) assert.ok(ids.has(n), `${o} → ${n} is not a topic`);
});

console.log(`\next2 renumber: ${passed} passed`);
