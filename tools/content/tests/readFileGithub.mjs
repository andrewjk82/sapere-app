#!/usr/bin/env node
/**
 * Unit test for api/content.js's REAL `readFile` against a mocked GitHub API — this is what the
 * end-to-end apiEdit.mjs suite CANNOT cover, since that suite injects its own in-memory readFile
 * and never touches the actual GitHub-calling implementation.
 *
 * Regression: 2026-09-16, the first real production save crashed with "Unexpected end of JSON
 * input". Root cause: GitHub's Contents API omits `content` (returns "" with encoding:'none') for
 * any file over 1MB — 11 of our 228 chapter files already exceed that — and readFile() decoded that
 * empty string straight into JSON.parse() upstream. Fixed by falling back to the Git Data Blobs API
 * (by sha) when Contents omits the body. This test drives readFile() itself against a fake fetch
 * that reproduces GitHub's real two-response shape, so a regression fails here — not in production.
 */
process.env.GITHUB_TOKEN = 'test-token';
const { readFile } = await import('../../../api/content.js');

let pass = 0, fail = 0;
const check = (name, cond, info = '') => { if (cond) { pass++; console.log('  ✓', name); } else { fail++; console.log('  ✗', name, info); } };

const b64 = (s) => Buffer.from(s, 'utf8').toString('base64');
const SHA = 'deadbeef';

// ---- case 1: small file — Contents API returns content inline, no blob call needed
{
  let blobCalled = false;
  globalThis.fetch = async (url) => {
    if (String(url).includes('/git/blobs/')) { blobCalled = true; return { ok: true, status: 200, json: async () => ({}) }; }
    return { ok: true, status: 200, json: async () => ({ sha: SHA, size: 20, encoding: 'base64', content: b64('{"chapterId":"y1-1"}') }) };
  };
  const f = await readFile('content/chapters/y1-1.json');
  check('small file: text decoded from Contents response directly', f?.text === '{"chapterId":"y1-1"}');
  check('small file: blob endpoint NOT called (no wasted request)', !blobCalled);
}

// ---- case 2: large file (>1MB) — Contents API omits content; must fall back to the blob endpoint
{
  const fullText = JSON.stringify({ chapterId: 'y11a-1', topics: [{ topicId: 'y11a-1A', questions: [] }] });
  let blobRequested = null;
  globalThis.fetch = async (url) => {
    if (String(url).includes('/git/blobs/')) { blobRequested = url; return { ok: true, status: 200, json: async () => ({ sha: SHA, size: fullText.length, encoding: 'base64', content: b64(fullText) }) }; }
    return { ok: true, status: 200, json: async () => ({ sha: SHA, size: 1_600_000, encoding: 'none', content: '' }) };   // GitHub's REAL shape for a >1MB file
  };
  const f = await readFile('content/chapters/y11a-1.json');
  check('large file: falls back to git/blobs/<sha>', blobRequested?.includes(`/git/blobs/${SHA}`), String(blobRequested));
  check('large file: full text recovered, valid JSON, not empty', f?.text === fullText && JSON.parse(f.text).chapterId === 'y11a-1');
  check('large file: sha still comes from the Contents response (used for the write-time lock)', f?.sha === SHA);
}

// ---- case 3: 404 — file genuinely does not exist → null, not a thrown error
{
  globalThis.fetch = async () => ({ ok: false, status: 404, json: async () => ({ message: 'Not Found' }) });
  const f = await readFile('content/chapters/does-not-exist.json');
  check('404: returns null (caller treats as "chapter file not found")', f === null);
}

// ---- case 4: transient GitHub error — must propagate (not silently return null / empty text)
{
  globalThis.fetch = async () => ({ ok: false, status: 502, json: async () => ({ message: 'Bad Gateway' }) });
  let threw = null;
  try { await readFile('content/chapters/y1-1.json'); } catch (e) { threw = e; }
  check('502: throws (caller retries / surfaces a real error) rather than returning bad data', threw?.message === 'Bad Gateway');
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
