/** OC / Selective sitting dates from a student's school year. Run via npm run test:homework. */
import assert from 'node:assert';
import { nextSitting, scholarshipSitting, yearNumberOf, daysUntil, ddayLabel, PLACEMENT_TESTS } from '../src/utils/examDates.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };
const on = (iso) => { const [y, m, d] = iso.split('-').map(Number); return new Date(y, m - 1, d, 12); };

test('profiles store the school year in many shapes', () => {
  assert.equal(yearNumberOf({ year: 'Year 9', level: 'Year 9' }), 9);
  assert.equal(yearNumberOf({ year: '10 ' }), 10);
  assert.equal(yearNumberOf({ level: '07' }), 7);
  assert.equal(yearNumberOf({ year: 'Y3' }), 3);
  assert.equal(yearNumberOf({ year: 'Year1' }), 1);
  assert.equal(yearNumberOf({ year: 'Year6', level: 'Year6' }), 6);
  assert.equal(yearNumberOf({}), null);
  assert.equal(yearNumberOf({ year: 'Kindergarten' }), null);
  assert.equal(yearNumberOf({ year: '99' }), null);
});

test('a Year 5 student sits Selective next year, on the published 2027 dates', () => {
  const s = nextSitting('sch-selective', { year: 'Year 5' }, on('2026-10-31'));
  assert.equal(s.status, 'upcoming');
  assert.equal(s.testYear, 2027);
  assert.equal(s.sitting.start, '2027-05-13');
  assert.equal(s.daysLeft, daysUntil('2027-05-13', on('2026-10-31')));
  assert.deepEqual(s.milestones.map((m) => m.key), ['applyOpen', 'applyClose', 'test', 'makeup']);
});

test('a Year 2 student sits OC in Year 4 — two years away, dates not published yet', () => {
  const s = nextSitting('sch-oc', { year: '2' }, on('2026-10-31'));
  assert.equal(s.status, 'unannounced');
  assert.equal(s.testYear, 2028);
  assert.equal(s.yearsAway, 2);
});

test('a Year 4 student sits OC next May (2027), Year 6 sits Selective next May', () => {
  assert.equal(nextSitting('sch-oc', { year: 'Year 4' }, on('2027-01-20')).sitting.start, '2027-05-11');
  assert.equal(nextSitting('sch-selective', { year: 'Year 6' }, on('2027-01-20')).sitting.start, '2027-05-13');
});

test('the same school year gives the same test every calendar year (Year 3 → OC the year after)', () => {
  const s = nextSitting('sch-oc', { year: 'Year 3' }, on('2026-10-31'));
  assert.equal(s.testYear, 2027);
  assert.equal(s.status, 'upcoming');
});

test('past the test year, or no year, is said plainly', () => {
  assert.equal(nextSitting('sch-oc', { year: 'Year 5' }, on('2026-10-31')).status, 'notApplicable');
  assert.equal(nextSitting('sch-selective', { year: 'Year 9' }, on('2026-10-31')).status, 'notApplicable');
  assert.equal(nextSitting('sch-oc', {}, on('2026-10-31')).status, 'noYear');
  assert.equal(nextSitting('sch-acer', { year: '5' }, on('2026-10-31')), null);
});

test('applications first, then the test: milestones drop off as they pass', () => {
  const s = nextSitting('sch-oc', { year: 'Year 4' }, on('2027-03-01'));
  assert.deepEqual(s.milestones.map((m) => m.key), ['test', 'makeup']);
  assert.equal(s.status, 'upcoming');
});

test('the test day itself is D-Day; afterwards only the make-up is left', () => {
  assert.equal(nextSitting('sch-oc', { year: 'Year 4' }, on('2027-05-11')).daysLeft, 0);
  assert.equal(ddayLabel(0), 'D-Day');
  assert.equal(nextSitting('sch-oc', { year: 'Year 4' }, on('2027-05-12')).status, 'upcoming');   // second day still on
  const after = nextSitting('sch-oc', { year: 'Year 4' }, on('2027-05-20'));
  assert.equal(after.status, 'passed');
  assert.equal(after.sitting.makeupLeft, true);
  assert.deepEqual(after.milestones.map((m) => m.key), ['makeup']);
  assert.equal(nextSitting('sch-oc', { year: 'Year 4' }, on('2027-06-20')).sitting.makeupLeft, false);
});

test('a Year 4 student in late 2026 has already been through this year\'s OC test', () => {
  const s = nextSitting('sch-oc', { year: 'Year 4' }, on('2026-10-31'));
  assert.equal(s.status, 'passed');
  assert.equal(s.sitting, null);
  assert.equal(nextSitting('sch-selective', { year: 'Year 6' }, on('2026-10-31')).status, 'passed');
  // before May of a year we hold no dates for, it is simply not announced yet
  assert.equal(nextSitting('sch-oc', { year: 'Year 4' }, on('2028-02-10')).status, 'unannounced');
});

test('Scholarship (ACER) uses the date the teacher typed, with the school as its name', () => {
  const s = scholarshipSitting({ scholarshipTestDate: '2027-03-06', scholarshipTestLabel: ' Sydney Grammar ' }, on('2026-10-31'));
  assert.equal(s.status, 'upcoming');
  assert.equal(s.test.name, 'Sydney Grammar');
  assert.equal(s.daysLeft, daysUntil('2027-03-06', on('2026-10-31')));
  assert.deepEqual(s.milestones.map((m) => m.key), ['test']);
  assert.equal(scholarshipSitting({ scholarshipTestDate: '2027-03-06' }, on('2026-10-31')).test.name, 'Scholarship test');
  assert.equal(scholarshipSitting({ scholarshipTestDate: '2027-03-06' }, on('2027-03-06')).daysLeft, 0);
  assert.equal(scholarshipSitting({ scholarshipTestDate: '2027-03-06' }, on('2027-03-07')).status, 'passed');
  ['', undefined, 'soon', '2027-13-45', '06/03/2027'].forEach((v) => assert.equal(scholarshipSitting({ scholarshipTestDate: v }, on('2026-10-31')).status, 'noDate', String(v)));
});

test('labels', () => {
  assert.equal(ddayLabel(193), 'D-193');
  assert.equal(ddayLabel(-3), 'D+3');
});

test('every published sitting is internally ordered', () => {
  Object.values(PLACEMENT_TESTS).forEach((t) => Object.values(t.dates).forEach((d) => {
    assert.ok(d.applyOpen < d.applyClose && d.applyClose < d.start && d.start <= d.end && d.end < d.makeup);
  }));
});

console.log(`\nexam dates: ${passed} passed`);
