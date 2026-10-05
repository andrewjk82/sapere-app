import assert from 'node:assert/strict';
import { collectReportImages, fitReportImages, withTimeout } from '../src/utils/reportImages.js';

const img = (n) => 'x'.repeat(n);
const shrink = async (s) => s.slice(0, Math.floor(s.length / 4));

// no duplicate of page 1
assert.deepEqual(collectReportImages('A', ['A', 'B']), ['A', 'B']);
assert.deepEqual(collectReportImages('A', []), ['A']);
assert.deepEqual(collectReportImages(null, null), []);

// under budget: untouched, recompress never called
let called = 0;
let r = await fitReportImages([img(100), img(100)], 1000, async (s) => { called += 1; return s; });
assert.equal(r.images.length, 2); assert.equal(r.dropped, 0); assert.equal(called, 0);

// over budget: recompressed
r = await fitReportImages([img(400), img(400), img(400)], 1000, shrink);
assert.deepEqual(r.images.map((s) => s.length), [100, 100, 100]); assert.equal(r.dropped, 0);

// still over budget: trailing pages dropped, page 1 kept
r = await fitReportImages([img(4000), img(4000), img(4000)], 150, shrink);
assert.equal(r.images.length, 1); assert.equal(r.dropped, 2);

// a failing recompress keeps the original rather than throwing
r = await fitReportImages([img(300), img(300)], 400, async () => { throw new Error('no canvas'); });
assert.equal(r.images.length, 1);

// timeout
await assert.rejects(withTimeout(new Promise(() => {}), 20), (e) => e.code === 'timeout');
assert.equal(await withTimeout(Promise.resolve(7), 50), 7);
console.log('reportImages tests passed');
