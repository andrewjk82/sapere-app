/** Curriculum note keys. Run via npm run test:homework. */
import assert from 'node:assert';
import { noteKeyForTopic, isLegacyNoteKeyFor } from '../src/utils/curriculumLocalNotes.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };

test('one stable key per topic', () => {
  assert.equal(noteKeyForTopic('y10-3a'), 'topic:y10-3a');
});

test('old keys (track:topic:worksheet URL) are recognised for their topic only', () => {
  const old = 'Year 10|Advanced:y10-3a:https://drive.google.com/file/d/ABC123/view?usp=sharing';
  assert.ok(isLegacyNoteKeyFor(old, 'y10-3a'));
  assert.ok(isLegacyNoteKeyFor('Year 7:y10-3a:https://drive.google.com/file/d/X/view', 'y10-3a')); // a track-less key
  assert.ok(!isLegacyNoteKeyFor(old, 'y10-3'));            // a different topic id is not a prefix match
  assert.ok(!isLegacyNoteKeyFor(old, 'y10-3b'));
  assert.ok(!isLegacyNoteKeyFor('topic:y10-3a', 'y10-3a')); // the current key is not "legacy"
  assert.ok(!isLegacyNoteKeyFor(undefined, 'y10-3a'));
});

console.log(`\ncurriculum note keys: ${passed} passed`);
