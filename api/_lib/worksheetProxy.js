// Serves topic worksheet PDFs from Google Drive through our own origin.
// Browsers can't fetch Drive file bytes directly (Drive answers cross-site
// requests — Sec-Fetch-Site: cross-site — with 403), so pdf.js had nothing to
// render and every worksheet fell back to Drive's slow page-by-page viewer.
// Only Drive ids registered as a curriculum topic's homeworkPdfUrl are served,
// so this can't be used as a general proxy.

export const MAX_WORKSHEET_BYTES = 4 * 1024 * 1024; // buffered responses cap at 4.5MB on Vercel; bigger files are streamed
export const MAX_STREAM_BYTES = 80 * 1024 * 1024;   // streamed responses have no 4.5MB cap
const UPSTREAM_TIMEOUT_MS = 20000;
const ID_RE = /^[A-Za-z0-9_-]{10,128}$/;

const fail = (res, status, error) => {
  res.setHeader('Cache-Control', 'no-store');
  return res.status(status).json({ error });
};

async function streamPdf(res, upstream, declared) {
  const reader = upstream.body.getReader();
  let first;
  try {
    first = await reader.read();
  } catch (err) {
    console.error('[worksheet] drive stream failed:', err?.message || err);
    return fail(res, 504, 'drive timed out');
  }
  const head = first.value ? Buffer.from(first.value.subarray(0, 5)).toString('latin1') : '';
  if (head !== '%PDF-') { reader.cancel().catch(() => {}); return fail(res, 502, 'not a pdf'); }
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Length', String(declared));
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.status(200);
  try {
    let chunk = first;
    let sent = 0;
    while (chunk && !chunk.done) {
      sent += chunk.value.length;
      if (sent > MAX_STREAM_BYTES) throw new Error('too large');
      res.write(Buffer.from(chunk.value));
      chunk = await reader.read();
    }
  } catch (err) {
    console.error('[worksheet] drive stream broke:', err?.message || err);
    reader.cancel().catch(() => {});
    return res.destroy ? res.destroy(err) : res.end();
  }
  return res.end();
}

export function createWorksheetHandler({ getAllowedIds, fetchImpl = fetch }) {
  return async function worksheetHandler(req, res) {
    if (req.method !== 'GET') {
      res.setHeader('Allow', 'GET');
      return fail(res, 405, 'method not allowed');
    }
    const id = String(req.query?.id || '');
    if (!ID_RE.test(id)) return fail(res, 400, 'bad id');

    try {
      let allowed = await getAllowedIds();
      // A PDF the teacher just added may not be in the cached allowlist yet.
      if (!allowed.has(id)) allowed = await getAllowedIds({ refresh: true });
      if (!allowed.has(id)) return fail(res, 404, 'not a registered worksheet');
    } catch (err) {
      console.error('[worksheet] allowlist load failed:', err?.message || err);
      return fail(res, 503, 'allowlist unavailable');
    }

    let upstream;
    try {
      // Drive sometimes accepts the connection and then never sends the body; without a limit the student's
      // "Loading worksheet…" waited the function's full 60s before falling back to Drive's viewer.
      const signal = typeof AbortSignal?.timeout === 'function' ? AbortSignal.timeout(UPSTREAM_TIMEOUT_MS) : undefined;
      upstream = await fetchImpl(`https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t`, { redirect: 'follow', signal });
    } catch (err) {
      console.error('[worksheet] drive fetch failed:', err?.message || err);
      return fail(res, 502, 'drive unavailable');
    }
    if (!upstream.ok) return fail(res, 502, `drive responded ${upstream.status}`);
    const declared = Number(upstream.headers.get('content-length') || 0);
    if (declared > MAX_STREAM_BYTES) return fail(res, 413, 'too large');
    // Over the buffered cap: stream it through instead of sending the student to Drive's slow page-by-page viewer.
    if (declared > MAX_WORKSHEET_BYTES && typeof upstream.body?.getReader === 'function') return streamPdf(res, upstream, declared);

    let body;
    try {
      body = Buffer.from(await upstream.arrayBuffer());
    } catch (err) {
      console.error('[worksheet] drive body read failed:', err?.message || err);
      return fail(res, 504, 'drive timed out');
    }
    if (body.length > MAX_WORKSHEET_BYTES) return fail(res, 413, 'too large');
    // Unshared/quota-limited files come back as an HTML page, not a PDF.
    if (body.subarray(0, 5).toString('latin1') !== '%PDF-') return fail(res, 502, 'not a pdf');

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Length', String(body.length));
    // Vercel's CDN keeps it for a day (stale for another while it refreshes),
    // so a worksheet hits Drive about once a day however many students open it.
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400');
    return res.status(200).send(body);
  };
}

// Allowlist of Drive ids from every curriculum doc's topics, cached per warm
// function instance. `refresh` re-reads at most every 30s.
export function createAllowlistLoader({ readCurriculumDocs, extractId, ttlMs = 10 * 60 * 1000, minRefreshMs = 30 * 1000 }) {
  let cache = null;
  let loadedAt = 0;
  return async ({ refresh = false } = {}) => {
    const age = Date.now() - loadedAt;
    if (cache && age < ttlMs && !(refresh && age > minRefreshMs)) return cache;
    const docs = await readCurriculumDocs();
    const ids = new Set();
    docs.forEach((d) => (d?.chapters || []).forEach((ch) => (ch?.topics || []).forEach((t) => {
      const fileId = extractId(t?.homeworkPdfUrl);
      if (fileId) ids.add(fileId);
    })));
    cache = ids;
    loadedAt = Date.now();
    return cache;
  };
}
