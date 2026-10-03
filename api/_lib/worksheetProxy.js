// Serves topic worksheet PDFs from Google Drive through our own origin.
// Browsers can't fetch Drive file bytes directly (Drive answers cross-site
// requests — Sec-Fetch-Site: cross-site — with 403), so pdf.js had nothing to
// render and every worksheet fell back to Drive's slow page-by-page viewer.
// Only Drive ids registered as a curriculum topic's homeworkPdfUrl are served,
// so this can't be used as a general proxy.

export const MAX_WORKSHEET_BYTES = 4 * 1024 * 1024; // Vercel function responses cap at 4.5MB
const ID_RE = /^[A-Za-z0-9_-]{10,128}$/;

const fail = (res, status, error) => {
  res.setHeader('Cache-Control', 'no-store');
  return res.status(status).json({ error });
};

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
      upstream = await fetchImpl(`https://drive.usercontent.google.com/download?id=${id}&export=download`, { redirect: 'follow' });
    } catch (err) {
      console.error('[worksheet] drive fetch failed:', err?.message || err);
      return fail(res, 502, 'drive unavailable');
    }
    if (!upstream.ok) return fail(res, 502, `drive responded ${upstream.status}`);
    if (Number(upstream.headers.get('content-length') || 0) > MAX_WORKSHEET_BYTES) return fail(res, 413, 'too large');

    const body = Buffer.from(await upstream.arrayBuffer());
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
