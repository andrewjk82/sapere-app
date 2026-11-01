/** Scholarship exam switches. Run via npm run test:homework. */
import assert from 'node:assert';
import { enabledScholarshipExams, toggleScholarshipExam, enabledExamSubjects, toggleExamSubject } from '../src/utils/scholarshipExams.js';

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

const OC = { id: 'sch-oc', topics: [{ id: 'sch-oc-english' }, { id: 'sch-oc-maths' }, { id: 'sch-oc-thinking' }] };
const ALL_OC = ['sch-oc-english', 'sch-oc-maths', 'sch-oc-thinking'];
test('subjects: no choice = every subject; a choice narrows it in curriculum order', () => {
  assert.deepEqual(enabledExamSubjects(OC, {}), ALL_OC);
  assert.deepEqual(enabledExamSubjects(OC, { scholarshipSubjects: { 'sch-oc': ['sch-oc-thinking', 'sch-oc-english'] } }), ['sch-oc-english', 'sch-oc-thinking']);
  assert.deepEqual(enabledExamSubjects(OC, { scholarshipSubjects: { 'sch-oc': ['gone'] } }), ALL_OC);   // never an empty page
});
test('subjects: ticking and unticking keeps the other exams and the last subject', () => {
  const other = { 'sch-acer': ['sch-acer-maths'] };
  assert.deepEqual(toggleExamSubject(OC, { scholarshipSubjects: other }, 'sch-oc-english'), { ...other, 'sch-oc': ['sch-oc-maths', 'sch-oc-thinking'] });
  assert.deepEqual(toggleExamSubject(OC, { scholarshipSubjects: { 'sch-oc': ['sch-oc-maths'] } }, 'sch-oc-english'), { 'sch-oc': ['sch-oc-english', 'sch-oc-maths'] });
  assert.deepEqual(toggleExamSubject(OC, { scholarshipSubjects: { 'sch-oc': ['sch-oc-maths'] } }, 'sch-oc-maths'), { 'sch-oc': ['sch-oc-maths'] });
});

console.log(`\nscholarship exams: ${passed} passed`);
