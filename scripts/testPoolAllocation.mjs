/** Daily question share per chapter. Run via npm run test:homework. */
import assert from 'node:assert';
import { allocateQuotas, chapterWeight } from '../src/utils/poolAllocation.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };
// small seeded generator (mulberry32) so the averages below do not flake
const seeded = (seed) => () => { seed = (seed + 0x6D2B79F5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
const sum = (o) => Object.values(o).reduce((s, v) => s + v, 0);

test('the shares always add up to the number of questions asked for', () => {
  const rng = seeded(1);
  for (let n = 1; n <= 40; n += 1) {
    const q = allocateQuotas({ chapterIds: ['a', 'b', 'c', 'd'], sizes: { a: 4, b: 1656, c: 52, d: 130 }, count: n, rng });
    assert.equal(sum(q), n);
  }
});

test('chapters of the same size share equally (±1)', () => {
  const ids = ['a', 'b', 'c', 'd', 'e'];
  const q = allocateQuotas({ chapterIds: ids, sizes: Object.fromEntries(ids.map((i) => [i, 50])), count: 20, rng: seeded(2) });
  assert.deepEqual(Object.values(q), [4, 4, 4, 4, 4]);
  const q7 = allocateQuotas({ chapterIds: ids, sizes: Object.fromEntries(ids.map((i) => [i, 50])), count: 7, rng: seeded(3) });
  assert.ok(Object.values(q7).every((v) => v === 1 || v === 2));
});

test('a 4-question chapter turns up far less often than a 1,600-question one, but still turns up', () => {
  const rng = seeded(4);
  const days = 3000;
  const tot = { small: 0, big: 0, mid: 0 };
  for (let d = 0; d < days; d += 1) {
    const q = allocateQuotas({ chapterIds: ['small', 'mid', 'big'], sizes: { small: 4, mid: 100, big: 1600 }, count: 20, rng });
    for (const k of Object.keys(tot)) tot[k] += q[k];
  }
  const perDay = Object.fromEntries(Object.entries(tot).map(([k, v]) => [k, v / days]));
  assert.ok(perDay.small < perDay.mid && perDay.mid < perDay.big, JSON.stringify(perDay));
  assert.ok(perDay.small > 0.5, `small chapter should still show up (${perDay.small})`);
  // expected share is the square-root share: 2 : 10 : 40 of 52 → 0.77 : 3.85 : 15.4
  assert.ok(Math.abs(perDay.small - 0.77) < 0.08 && Math.abs(perDay.big - 15.38) < 0.15, JSON.stringify(perDay));
});

test('empty chapters get nothing; no questions anywhere gives nothing', () => {
  assert.deepEqual(allocateQuotas({ chapterIds: ['a', 'b'], sizes: { a: 0, b: 10 }, count: 5, rng: seeded(5) }), { a: 0, b: 5 });
  assert.deepEqual(allocateQuotas({ chapterIds: ['a'], sizes: { a: 0 }, count: 5 }), { a: 0 });
  assert.deepEqual(allocateQuotas({ chapterIds: [], sizes: {}, count: 5 }), {});
});

test('weaker chapters get a bigger share, stronger ones a smaller share', () => {
  assert.ok(chapterWeight(100, { correct: 0, total: 10 }) > chapterWeight(100, undefined));
  assert.ok(chapterWeight(100, { correct: 10, total: 10 }) < chapterWeight(100, undefined));
  assert.equal(chapterWeight(100, undefined), 10);
});

console.log(`\npool allocation: ${passed} passed`);
