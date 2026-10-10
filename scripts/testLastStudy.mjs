/**
 * "Continue studying" storage helpers. Run via npm run test:last-study.
 */
import assert from 'node:assert';
import { loadLastStudy, saveLastStudy, mergeLastStudy, shortChapterLabel, continueCaption, requestContinueStudy, peekContinueStudy, consumeContinueStudy } from '../src/utils/lastStudy.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };

const memory = () => {
  const data = new Map();
  return { getItem: (k) => (data.has(k) ? data.get(k) : null), setItem: (k, v) => data.set(k, String(v)), removeItem: (k) => data.delete(k), data };
};
const visit = { trackKey: 'Year 7', chapterId: 'y7-5', chapterTitle: 'Chapter 5: Fractions' };

test('nothing stored → null; no uid → null', () => {
  assert.equal(loadLastStudy('u1', memory()), null);
  assert.equal(loadLastStudy('', memory()), null);
});

test('save then load round-trips, keyed per student', () => {
  const s = memory();
  saveLastStudy('u1', visit, s, 1000);
  assert.deepEqual(loadLastStudy('u1', s), { ...visit, topicId: '', topicCode: '', topicTitle: '', pdfUrl: '', at: 1000 });
  assert.equal(loadLastStudy('u2', s), null);
});

test('opening a worksheet PDF is remembered; a later chapter visit replaces it', () => {
  const s = memory();
  saveLastStudy('u1', { ...visit, topicId: 'y7-5b', topicCode: '5B', topicTitle: 'Adding', pdfUrl: 'https://x/pdf' }, s, 1);
  assert.equal(loadLastStudy('u1', s).pdfUrl, 'https://x/pdf');
  assert.equal(loadLastStudy('u1', s).topicCode, '5B');
  saveLastStudy('u1', visit, s, 2);
  assert.equal(loadLastStudy('u1', s).pdfUrl, '');
});

test('opening a topic adds it; reopening the same chapter keeps it', () => {
  const s = memory();
  saveLastStudy('u1', visit, s, 1);
  saveLastStudy('u1', { ...visit, topicId: 'y7-5b', topicCode: '5B', topicTitle: 'Adding' }, s, 2);
  assert.equal(loadLastStudy('u1', s).topicId, 'y7-5b');
  saveLastStudy('u1', visit, s, 3);
  const r = loadLastStudy('u1', s);
  assert.equal(r.topicId, 'y7-5b');
  assert.equal(r.topicCode, '5B');
  assert.equal(r.at, 3);
});

test('a different chapter or track forgets the old topic', () => {
  const s = memory();
  saveLastStudy('u1', { ...visit, topicId: 'y7-5b', topicCode: '5B', topicTitle: 'Adding' }, s, 1);
  saveLastStudy('u1', { ...visit, chapterId: 'y7-6', chapterTitle: 'Chapter 6' }, s, 2);
  assert.equal(loadLastStudy('u1', s).topicId, '');
  saveLastStudy('u1', { ...visit, topicId: 'y7-5b', topicCode: '5B', topicTitle: 'Adding' }, s, 3);
  saveLastStudy('u1', { ...visit, trackKey: 'Year 10' }, s, 4);
  assert.equal(loadLastStudy('u1', s).topicId, '');
});

test('corrupt or incomplete data is ignored; storage errors do not throw', () => {
  const s = memory();
  s.setItem('sapere:lastStudy:v1:u1', '{not json');
  assert.equal(loadLastStudy('u1', s), null);
  s.setItem('sapere:lastStudy:v1:u1', JSON.stringify({ trackKey: 'Year 7' }));
  assert.equal(loadLastStudy('u1', s), null);
  const broken = { getItem: () => { throw new Error('denied'); }, setItem: () => { throw new Error('full'); } };
  assert.equal(loadLastStudy('u1', broken), null);
  assert.doesNotThrow(() => saveLastStudy('u1', visit, broken));
  assert.equal(saveLastStudy('u1', { chapterId: 'x' }, memory()), null);
});

test('merge keeps the title when a visit has none', () => {
  const prev = { ...visit, topicId: '', topicCode: '', topicTitle: '', at: 1 };
  assert.equal(mergeLastStudy(prev, { trackKey: 'Year 7', chapterId: 'y7-5' }, 2).chapterTitle, 'Chapter 5: Fractions');
});

test('short chapter label', () => {
  assert.equal(shortChapterLabel('Chapter 5: Fractions and decimals'), 'Chapter 5');
  assert.equal(shortChapterLabel('Complex Numbers I'), 'Complex Numbers I');
  assert.equal(shortChapterLabel(''), '');
  assert.equal(shortChapterLabel('Factors, multiples, primes and divisibility'), 'Factors, multiples…');
  assert.equal(shortChapterLabel('Chapter 10: Differentiation'), 'Chapter 10');
});

test('dashboard caption: topic code, else short chapter, else none', () => {
  assert.equal(continueCaption({ ...visit, topicCode: '20D' }), '20D');
  assert.equal(continueCaption({ ...visit, topicCode: '' }), 'Chapter 5');
  assert.equal(continueCaption(null), '');
});

test('continue flag: one shot, survives a peek, safe without storage', () => {
  const store = memory();
  assert.equal(peekContinueStudy(store), false);
  requestContinueStudy(store);
  assert.equal(peekContinueStudy(store), true);
  assert.equal(peekContinueStudy(store), true);
  assert.equal(consumeContinueStudy(store), true);
  assert.equal(consumeContinueStudy(store), false);
  const broken = { getItem: () => { throw new Error('x'); }, setItem: () => { throw new Error('x'); }, removeItem: () => { throw new Error('x'); } };
  assert.doesNotThrow(() => requestContinueStudy(broken));
  assert.equal(consumeContinueStudy(broken), false);
});

console.log(`\nlast study: ${passed} passed`);
