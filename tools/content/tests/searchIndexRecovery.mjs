import assert from 'node:assert/strict';

const calls = [];
const oldManifest = { allIds: 'all-ids.old12345.json' };
const newManifest = { allIds: 'all-ids.new12345.json' };
globalThis.fetch = async (input, init = {}) => {
  const url = String(input);
  calls.push({ url, cache: init.cache });
  if (url === '/content/manifest.json') return Response.json(oldManifest);
  if (url.startsWith('/content/manifest.json?')) return Response.json(newManifest);
  if (url === '/content/all-ids.old12345.json') return new Response('missing', { status: 404 });
  if (url === '/content/all-ids.new12345.json') return Response.json([
    ['y11a-8-excel-introlog-q1', 'y11a-8', 'y11a-8C'],
    ['another-question', 'y11a-1', 'y11a-1A'],
  ]);
  return new Response('unexpected URL: ' + url, { status: 500 });
};

const { searchIds } = await import('../../../src/services/contentLoader.js?recovery-test');
const hits = await searchIds('y11a-8-excel-');
assert.deepEqual(hits.map((hit) => hit.id), ['y11a-8-excel-introlog-q1']);
assert.equal(calls.some(({ url }) => url === '/content/all-ids.old12345.json'), true);
assert.equal(calls.some(({ url }) => url.startsWith('/content/manifest.json?')), true);
assert.equal(calls.some(({ url }) => url === '/content/all-ids.new12345.json'), true);
console.log('PASS stale all-ids manifest is refreshed and the prefix search retries');
