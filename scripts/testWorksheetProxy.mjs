/**
 * /api/worksheet proxy core: only curriculum-registered Drive ids are served,
 * only real PDFs under the size cap, with CDN cache headers on success and
 * no-store on errors. Fake fetch / allowlist — no network.
 * Usage: node scripts/testWorksheetProxy.mjs
 */
import assert from 'node:assert';
import { createWorksheetHandler, MAX_WORKSHEET_BYTES } from '../api/_lib/worksheetProxy.js';

const PDF = Buffer.concat([Buffer.from('%PDF-1.7\n'), Buffer.alloc(100, 0x20)]);
const HTML = Buffer.from('<html>quota exceeded</html>');

const mockRes = () => {
  const r = { statusCode: 200, headers: {}, body: undefined };
  r.status = (c) => { r.statusCode = c; return r; };
  r.setHeader = (k, v) => { r.headers[k.toLowerCase()] = v; return r; };
  r.json = (b) => { r.body = b; return r; };
  r.send = (b) => { r.body = b; return r; };
  r.end = () => r;
  return r;
};

const upstream = (buf, { status = 200, length } = {}) => ({
  ok: status >= 200 && status < 300,
  status,
  headers: { get: (k) => (k.toLowerCase() === 'content-length' ? String(length ?? buf.length) : null) },
  arrayBuffer: async () => buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength),
});

let passed = 0;
const test = async (name, fn) => { await fn(); passed += 1; console.log(`  ✓ ${name}`); };
const ALLOWED = 'AllowedFileId_123';

const make = ({ fetched = [], body = PDF, upstreamOpts, allow = [ALLOWED], refreshes } = {}) =>
  createWorksheetHandler({
    getAllowedIds: async ({ refresh } = {}) => { if (refreshes) refreshes.push(!!refresh); return new Set(allow); },
    fetchImpl: async (url) => { fetched.push(url); return upstream(body, upstreamOpts); },
  });

console.log('worksheet proxy');

await test('serves an allowed PDF with CDN cache headers', async () => {
  const fetched = [];
  const res = mockRes();
  await make({ fetched })({ method: 'GET', query: { id: ALLOWED } }, res);
  assert.equal(res.statusCode, 200);
  assert.equal(res.headers['content-type'], 'application/pdf');
  assert.match(res.headers['cache-control'], /s-maxage=\d+/);
  assert.ok(Buffer.isBuffer(res.body) && res.body.equals(PDF));
  assert.deepEqual(fetched, [`https://drive.usercontent.google.com/download?id=${ALLOWED}&export=download`]);
});

await test('rejects malformed ids without fetching', async () => {
  for (const id of ['', 'short', '../../etc/passwd', 'a'.repeat(200), 'abc def ghi jkl', 'https://evil.example/x']) {
    const fetched = [];
    const res = mockRes();
    await make({ fetched })({ method: 'GET', query: { id } }, res);
    assert.equal(res.statusCode, 400, id);
    assert.equal(fetched.length, 0);
    assert.equal(res.headers['cache-control'], 'no-store');
  }
});

await test('refuses ids not registered in the curriculum (after one refresh)', async () => {
  const fetched = [];
  const refreshes = [];
  const res = mockRes();
  await make({ fetched, refreshes })({ method: 'GET', query: { id: 'SomeoneElsesFile_999' } }, res);
  assert.equal(res.statusCode, 404);
  assert.equal(fetched.length, 0);
  assert.deepEqual(refreshes, [false, true]);
});

await test('rejects non-PDF upstream bodies', async () => {
  const res = mockRes();
  await make({ body: HTML })({ method: 'GET', query: { id: ALLOWED } }, res);
  assert.equal(res.statusCode, 502);
  assert.equal(res.headers['cache-control'], 'no-store');
});

await test('passes on upstream failures as 502', async () => {
  const res = mockRes();
  await make({ upstreamOpts: { status: 403 } })({ method: 'GET', query: { id: ALLOWED } }, res);
  assert.equal(res.statusCode, 502);
});

await test('refuses files over the size cap (by header and by body)', async () => {
  const r1 = mockRes();
  await make({ upstreamOpts: { length: MAX_WORKSHEET_BYTES + 1 } })({ method: 'GET', query: { id: ALLOWED } }, r1);
  assert.equal(r1.statusCode, 413);
  const big = Buffer.concat([Buffer.from('%PDF-'), Buffer.alloc(MAX_WORKSHEET_BYTES)]);
  const r2 = mockRes();
  await make({ body: big, upstreamOpts: { length: 0 } })({ method: 'GET', query: { id: ALLOWED } }, r2);
  assert.equal(r2.statusCode, 413);
});

await test('only GET', async () => {
  const res = mockRes();
  await make()({ method: 'POST', query: { id: ALLOWED } }, res);
  assert.equal(res.statusCode, 405);
});

console.log(`\n${passed} passed`);
