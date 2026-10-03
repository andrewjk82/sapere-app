/**
 * Sprint question generators, board ids and XP tiers — pure modules.
 * Usage: npm run test:sprint
 */
import assert from 'node:assert';
import { SPRINT_TYPES, getSprintType, sprintBoardId } from '../src/utils/sprintTypes.js';
import { SPRINT_XP_TIERS, SPRINT_XP_PARTICIPATION, xpForRank } from '../src/constants/sprintXp.js';
import {
  SPRINT_QUESTION_COUNT, getFactorRangeForYear, describeSprint, generateSprintQuestions,
} from '../src/utils/sprintQuestions.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };

// Deterministic PRNG so failures are reproducible.
const seeded = (seed) => () => {
  seed = (seed * 1664525 + 1013904223) % 4294967296;
  return seed / 4294967296;
};

// Independent checker: what the prompt says must equal the stored answer.
const MINUS = '−';
const solve = (typeId, q) => {
  const p = q.prompt.replaceAll(MINUS, '-');
  if (typeId === 'alg') {
    let m = p.match(/^x \+ (\d+) = (\d+)$/); if (m) return Number(m[2]) - Number(m[1]);
    m = p.match(/^x - (\d+) = (\d+)$/); if (m) return Number(m[2]) + Number(m[1]);
    m = p.match(/^(\d+)x = (\d+)$/); if (m) return Number(m[2]) / Number(m[1]);
    m = p.match(/^(\d+)x \+ (\d+) = (\d+)$/); if (m) return (Number(m[3]) - Number(m[2])) / Number(m[1]);
    m = p.match(/^(\d+)x - (\d+) = (\d+)$/); if (m) return (Number(m[3]) + Number(m[2])) / Number(m[1]);
    throw new Error(`unparseable algebra prompt: ${q.prompt}`);
  }
  const m = p.match(/^(\d+) ([+\-×÷]) (\d+)$/);
  if (!m) throw new Error(`unparseable prompt: ${q.prompt}`);
  const [a, op, b] = [Number(m[1]), m[2], Number(m[3])];
  return { '+': a + b, '-': a - b, '×': a * b, '÷': a / b }[op];
};

console.log('sprint modules');

test('five sprint types in display order', () => {
  assert.deepEqual(SPRINT_TYPES.map((t) => t.id), ['add', 'sub', 'times', 'div', 'alg']);
  assert.equal(getSprintType('div').name, 'Division');
  assert.equal(getSprintType('nope'), null);
});

test('board ids: times keeps the bare week id, others are prefixed', () => {
  assert.equal(sprintBoardId('times', '2026-09-28'), '2026-09-28');
  assert.equal(sprintBoardId('add', '2026-09-28'), 'add:2026-09-28');
  assert.equal(sprintBoardId('alg', '2026-09-28'), 'alg:2026-09-28');
});

test('XP tiers 10 / 5 / 2 / 1', () => {
  assert.deepEqual(SPRINT_XP_TIERS, [10, 5, 2]);
  assert.equal(SPRINT_XP_PARTICIPATION, 1);
  assert.deepEqual([1, 2, 3, 4, 17].map(xpForRank), [10, 5, 2, 1, 1]);
});

test('factor range by year (unknown year → upper band)', () => {
  assert.deepEqual(getFactorRangeForYear('Year 2'), { min: 2, max: 9 });
  assert.deepEqual(getFactorRangeForYear('Year 8'), { min: 2, max: 12 });
  assert.deepEqual(getFactorRangeForYear(''), { min: 2, max: 12 });
});

const YEARS = ['Year 1', 'Year 3', 'Year 4', 'Year 6', 'Year 7', 'Year 12', ''];
for (const { id } of SPRINT_TYPES) {
  test(`${id}: 20 unique, correct, in-range questions for every year band`, () => {
    for (const year of YEARS) {
      for (let seed = 1; seed <= 25; seed++) {
        const qs = generateSprintQuestions(id, year, { rng: seeded(seed) });
        assert.equal(qs.length, SPRINT_QUESTION_COUNT, `${id} ${year} seed ${seed}: count`);
        assert.equal(new Set(qs.map((q) => q.key)).size, qs.length, `${id} ${year}: duplicate keys`);
        assert.equal(new Set(qs.map((q) => q.prompt)).size, qs.length, `${id} ${year}: duplicate prompts`);
        for (const q of qs) {
          assert.ok(Number.isInteger(q.answer) && q.answer >= 1 && q.answer <= 999, `${q.prompt} answer ${q.answer}`);
          assert.equal(solve(id, q), q.answer, `${q.prompt} should equal ${q.answer}`);
        }
      }
    }
  });
}

test('year bands drive difficulty', () => {
  const rng = seeded(7);
  const lowAdd = generateSprintQuestions('add', 'Year 2', { rng });
  assert.ok(lowAdd.every((q) => q.answer <= 40));
  const highAdd = generateSprintQuestions('add', 'Year 5', { rng });
  assert.ok(highAdd.every((q) => q.answer >= 20));
  const lowDiv = generateSprintQuestions('div', 'Year 3', { rng });
  assert.ok(lowDiv.every((q) => q.answer >= 2 && q.answer <= 9));
  const oneStep = generateSprintQuestions('alg', 'Year 5', { rng });
  assert.ok(oneStep.every((q) => /^(x [+−] \d+|\d+x) = \d+$/.test(q.prompt)), oneStep.map((q) => q.prompt).join(' | '));
  const twoStep = generateSprintQuestions('alg', 'Year 9', { rng });
  assert.ok(twoStep.every((q) => /^\d+x [+−] \d+ = \d+$/.test(q.prompt)), twoStep.map((q) => q.prompt).join(' | '));
  assert.ok(twoStep.every((q) => q.answer <= 12 && q.subPrompt === 'x = ?'));
});

test('describeSprint gives a phrase for every type', () => {
  for (const { id } of SPRINT_TYPES) {
    assert.ok(describeSprint(id, 'Year 2').length > 5);
    assert.ok(describeSprint(id, 'Year 9').length > 5);
  }
  assert.equal(describeSprint('times', 'Year 2'), '2× to 9× tables');
});

test('unknown type throws', () => {
  assert.throws(() => generateSprintQuestions('nope', 'Year 5'));
});

console.log(`\n${passed} passed`);
