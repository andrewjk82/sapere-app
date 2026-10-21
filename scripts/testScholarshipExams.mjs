/** Scholarship exam switches. Run via npm run test:homework. */
import assert from 'node:assert';
import { enabledScholarshipExams, toggleScholarshipExam } from '../src/utils/scholarshipExams.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };
const ALL = ['sch-acer', 'sch-selective'];

test('no list = every exam (students switched on before exams could be chosen keep both)', () => {
  assert.deepEqual(enabledScholarshipExams(ALL, {}), ALL);
  assert.deepEqual(enabledScholarshipExams(ALL, null), ALL);
});
test('a list narrows it, in curriculum order, ignoring unknown ids', () => {
  assert.deepEqual(enabledScholarshipExams(ALL, { scholarshipExams: ['sch-selective', 'nope'] }), ['sch-selective']);
});
test('ticking and unticking', () => {
  assert.deepEqual(toggleScholarshipExam(ALL, { scholarshipExams: ['sch-acer'] }, 'sch-selective'), ALL);
  assert.deepEqual(toggleScholarshipExam(ALL, {}, 'sch-acer'), ['sch-selective']);
});
test('the last exam cannot be unticked', () => {
  assert.deepEqual(toggleScholarshipExam(ALL, { scholarshipExams: ['sch-acer'] }, 'sch-acer'), ['sch-acer']);
});

console.log(`\nscholarship exams: ${passed} passed`);
