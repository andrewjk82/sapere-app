/**
 * POST /api/content — teacher edits to the question bank, committed to git.
 *
 * Body: { op: 'upsert', doc: <legacy question>, chapterId, topicId }   full save from the editor
 *       { op: 'patch',  id, fields: { isActive?, reviewStatus?, timeLimit?, ... } }   partial legacy fields
 *
 * Flow: verify Firebase ID token (admin only) → load content/chapters/<chapter>.json from GitHub →
 * merge (legacy view → fromLegacy, keeping fields the form doesn't carry) → validate (zod schema +
 * KaTeX with the renderer's own preprocessing; only NEW math errors are rejected) → commit the
 * chapter file (and any new inline SVG as content/figures/<sha>.svg) → Vercel rebuilds → /content/.
 *
 * Zero Firestore. Concurrency: GitHub sha (optimistic lock), one retry on conflict.
 */
import admin from 'firebase-admin';
import crypto from 'node:crypto';
import katex from 'katex';
import { Question } from '../content/schema.js';
import { toLegacy, fromLegacy } from '../content/legacy.js';
import { validateLatexValue } from '../src/utils/latexValidate.js';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'andrewjk82@gmail.com';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = process.env.GITHUB_REPO || 'andrewjk82/sapere-app';
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main';

// ---------- auth
function adminApp() {
  if (admin.apps.length) return admin.apps[0];
  const projectId = process.env.FIREBASE_PROJECT_ID, clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');
  if (!projectId || !clientEmail || !privateKey) throw new Error('Missing Firebase admin credentials');
  return admin.initializeApp({ credential: admin.credential.cert({ projectId, clientEmail, privateKey }) });
}
async function verifyAdmin(req) {
  const token = (req.headers.authorization || '').replace('Bearer ', '').trim();
  if (!token) return null;
  try { const d = await admin.auth(adminApp()).verifyIdToken(token); return d.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase() ? d : null; } catch { return null; }
}

// ---------- github
async function gh(path, options = {}) {
  const res = await fetch(`https://api.github.com${path}`, { ...options, headers: { Authorization: `Bearer ${GITHUB_TOKEN}`, 'User-Agent': 'sapere-content', Accept: 'application/vnd.github.v3+json', 'Content-Type': 'application/json', ...(options.headers || {}) } });
  const data = res.status === 204 ? null : await res.json().catch(() => null);
  if (!res.ok) { const e = new Error(data?.message || `GitHub ${res.status}`); e.status = res.status; throw e; }
  return data;
}
const fileOf = (chapterId) => `content/chapters/${chapterId.replace(/[^a-z0-9:_-]/gi, '_')}.json`;
/**
 * The Contents API omits `content` (encoding:'none', content:'') for files over 1MB — 11 of our 228
 * chapter files already cross that (y11a-1, y11a-5, y7-1, ...), so this was hit on the very first
 * real save and must never regress: it's the exact input tools/content/tests/apiEdit.mjs's
 * "large file" case exercises. Fall back to the Git Data Blobs API (works up to 100MB) by sha.
 */
export async function readFile(path) {
  try {
    const d = await gh(`/repos/${GITHUB_REPO}/contents/${encodeURIComponent(path).replace(/%2F/g, '/')}?ref=${GITHUB_BRANCH}`);
    if (d.content) return { sha: d.sha, text: Buffer.from(d.content, 'base64').toString('utf8') };
    const blob = await gh(`/repos/${GITHUB_REPO}/git/blobs/${d.sha}`);
    return { sha: d.sha, text: Buffer.from(blob.content, 'base64').toString('utf8') };
  } catch (e) { if (e.status === 404) return null; throw e; }
}
async function writeFile(path, text, sha, message) {
  return gh(`/repos/${GITHUB_REPO}/contents/${encodeURIComponent(path).replace(/%2F/g, '/')}`, { method: 'PUT', body: JSON.stringify({ message, content: Buffer.from(text, 'utf8').toString('base64'), branch: GITHUB_BRANCH, ...(sha ? { sha } : {}) }) });
}

// ---------- figures: inline <svg> from the editor → content/figures/<sha>.svg + "fig:" ref
async function externaliseFigures(q, log, { readFile, writeFile }) {
  const visit = async (fig) => {
    if (!fig || typeof fig.svg !== 'string' || !/^\s*<svg/.test(fig.svg)) return;
    const svg = fig.svg; const sha = crypto.createHash('sha1').update(svg).digest('hex').slice(0, 10);
    const path = `content/figures/${sha}.svg`;
    if (!(await readFile(path))) { await writeFile(path, svg, null, `content: figure ${sha} (${q.id})`); log.push(path); }
    fig.svg = `fig:${sha}`;
  };
  await visit(q.figure);
  for (const s of q.steps || []) await visit(s.figure);
  for (const o of q.options || []) if (o && typeof o === 'object') await visit(o.figure);
  for (const p of q.parts || []) await externaliseFigures(p, log, { readFile, writeFile });
}

// ---------- validation
const texErrors = (q) => {
  const out = [];
  const check = (v, where) => { if (!v) return; for (const { tex, error } of validateLatexValue(String(v), (t, o) => katex.renderToString(t, { ...o, strict: 'ignore' }))) out.push(`${where}: ${error.split('\n')[0]} :: ${tex.slice(0, 60)}`); };
  check(q.stem, 'question'); check(q.hint, 'hint'); check(q.solution, 'solution');
  (q.options || []).forEach((o, i) => check(typeof o === 'string' ? o : o.text, `option ${i + 1}`));
  (q.steps || []).forEach((s, i) => { check(s.explain, `step ${i + 1}`); check(s.work, `step ${i + 1} working`); });
  (q.parts || []).forEach((p) => texErrors(p).forEach((e) => out.push(`${p.id} ${e}`)));
  return out;
};

// ---------- locate a question's chapter file when the caller doesn't already know it -----------
// Deliberately does NOT self-fetch the live site (https://sapere-app.vercel.app/content/...) from
// inside this function — that self-referential HTTP round-trip was unreliable in production
// (intermittent empty responses inside the Vercel Node runtime, not reproducible from an external
// client) and is untestable without a live deployment. GitHub's code-search API is what
// api/sync-seed.js already used for the same kind of lookup, and it's what readFile/writeFile talk
// to anyway, so this has no new dependency and IS covered by the adapter-injected test.
async function findViaGithubSearch(id, readFile) {
  let results;
  try { results = await gh(`/search/code?q=${encodeURIComponent(`"${id}"`)}+repo:${GITHUB_REPO}+path:content/chapters&type=code`); }
  catch { return null; }   // search index lag / rate limit — caller falls back to "not found"
  for (const item of results.items || []) {
    const f = await readFile(item.path);
    if (!f) continue;
    try {
      const ch = JSON.parse(f.text);
      if (ch.topics?.some((t) => t.questions.some((q) => q.id === id))) return ch.chapterId;
    } catch { /* not a chapter file we can parse — skip */ }
  }
  return null;
}
/** Does chapterId's own file actually contain this id right now? Cheap, no search. */
async function chapterHasQuestion(chapterId, id, readFile) {
  const f = await readFile(fileOf(chapterId));
  if (!f) return false;
  try { return JSON.parse(f.text).topics?.some((t) => t.questions.some((q) => q.id === id)) === true; }
  catch { return false; }
}
const findInChapter = (ch, id) => { for (const t of ch.topics) { const i = t.questions.findIndex((q) => q.id === id); if (i >= 0) return { t, i }; } return null; };
const newId = (topicId) => `${topicId}-t${Date.now().toString(36)}${Math.random().toString(36).slice(2, 5)}`;

/**
 * Core edit logic over injected adapters — the Vercel handler passes GitHub-backed `readFile` /
 * `writeFile` and the manifest-backed `locate`; tests pass in-memory ones over content/.
 * Returns { status, body }.
 */
export async function applyEdit({ readFile, writeFile }, body, user) {
  const { op } = body;
  if (!['upsert', 'patch'].includes(op)) return { status: 400, body: { error: `unknown op ${op}` } };
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      // 1. which chapter file? Trust the caller's chapterId first (every current UI call site
      // supplies it) and only fall back to a GitHub search when the id isn't where expected.
      const id = op === 'upsert' ? (body.doc?.id || '') : body.id;
      let chapterId = body.chapterId || (op === 'upsert' ? body.doc?.chapterId : null);
      let currentChapter = null;
      if (id) {
        if (chapterId && await chapterHasQuestion(chapterId, id, readFile)) currentChapter = chapterId;
        else currentChapter = await findViaGithubSearch(id, readFile);
      }
      const isMove = !!(currentChapter && chapterId && currentChapter !== chapterId);
      if (!chapterId) chapterId = currentChapter;
      if (!chapterId) return { status: 400, body: { error: `cannot determine chapter for ${id || '(new)'}` } };

      // 2. load + merge
      const srcFile = fileOf(currentChapter || chapterId);
      const src = await readFile(srcFile);
      if (!src) return { status: 404, body: { error: `${srcFile} not found` } };
      const ch = JSON.parse(src.text);
      const loc = id ? findInChapter(ch, id) : null;
      const prev = loc ? loc.t.questions[loc.i] : null;
      const ctx = loc ? { topicId: loc.t.topicId, synthetic: loc.t.synthetic === true, code: loc.t.code, title: loc.t.title, chapterId: ch.chapterId, chapterTitle: ch.title, year: ch.year } : {};
      const prevLegacy = prev ? toLegacy(prev, ctx) : null;
      let legacy;
      if (op === 'upsert') legacy = { ...(prevLegacy || {}), ...body.doc, id: id || newId(body.topicId || 'q') };
      else { if (!prevLegacy) return { status: 404, body: { error: `${id} not found` } }; legacy = { ...prevLegacy, ...body.fields }; }
      if (!prev && op === 'upsert' && legacy.isActive === undefined) { legacy.isActive = false; legacy.reviewStatus = legacy.reviewStatus || 'pending'; }
      legacy.origin = 'teacher';
      let q;
      try { q = fromLegacy(legacy, prev); } catch (e) { return { status: 400, body: { error: e.message } }; }

      // 3. validate
      const parsed = Question.safeParse(q);
      if (!parsed.success) return { status: 400, body: { error: 'schema', issues: parsed.error.issues.slice(0, 5).map((i) => `${i.path.join('.')}: ${i.message}`) } };
      const before = new Set(prev ? texErrors(prev) : []);
      const newTex = texErrors(q).filter((e) => !before.has(e));
      if (newTex.length) return { status: 400, body: { error: 'latex', issues: newTex.slice(0, 5) } };

      // 4. figures (inline svg → files)
      const figLog = []; await externaliseFigures(q, figLog, { readFile, writeFile });

      // 5. place + commit
      const topicId = body.topicId || legacy.topicId || ctx.topicId || chapterId;
      const commitMsg = `content: ${prev ? (isMove ? 'move' : 'edit') : 'add'} ${q.id} via Question Bank (${user?.email || 'admin'})`;
      if (loc && !isMove) {
        if (loc.t.topicId === topicId) loc.t.questions[loc.i] = q;
        else { loc.t.questions.splice(loc.i, 1); let t = ch.topics.find((x) => x.topicId === topicId); if (!t) { t = { topicId, code: legacy.topicCode || '', title: legacy.topicTitle || '', questions: [] }; ch.topics.push(t); } t.questions.push(q); }
        ch.topics = ch.topics.filter((t) => t.questions.length);
        const r = await writeFile(srcFile, JSON.stringify(ch, null, 2), src.sha, commitMsg);
        const tNow = ch.topics.find((x) => x.questions.some((qq) => qq.id === q.id));
        return { status: 200, body: { ok: true, id: q.id, commit: r?.commit?.sha, figures: figLog, doc: toLegacy(q, { topicId: tNow.topicId, synthetic: tNow.synthetic === true, code: tNow.code, title: tNow.title, chapterId: ch.chapterId, chapterTitle: ch.title, year: ch.year }) } };
      }
      if (loc && isMove) { loc.t.questions.splice(loc.i, 1); ch.topics = ch.topics.filter((t) => t.questions.length); await writeFile(srcFile, JSON.stringify(ch, null, 2), src.sha, `${commitMsg} (remove from ${ch.chapterId})`); }
      const dstFile = fileOf(chapterId);
      const dst = await readFile(dstFile);
      const dch = dst ? JSON.parse(dst.text) : { chapterId, title: legacy.chapterTitle || '', year: legacy.year || '', topics: [] };
      let t = dch.topics.find((x) => x.topicId === topicId);
      if (!t) { t = { topicId, ...(topicId === chapterId ? { synthetic: true } : {}), code: legacy.topicCode || '', title: legacy.topicTitle || '', questions: [] }; dch.topics.push(t); dch.topics.sort((a, b) => a.topicId.localeCompare(b.topicId, undefined, { numeric: true })); }
      t.questions.push(q);
      const r = await writeFile(dstFile, JSON.stringify(dch, null, 2), dst?.sha, commitMsg);
      return { status: 200, body: { ok: true, id: q.id, commit: r?.commit?.sha, figures: figLog, doc: toLegacy(q, { topicId, synthetic: t.synthetic === true, code: t.code, title: t.title, chapterId, chapterTitle: dch.title, year: dch.year }) } };
    } catch (e) {
      if ((e.status === 409 || e.status === 422) && attempt === 0) continue;   // sha conflict → reload and retry once
      console.error('[content]', e);
      return { status: 500, body: { error: e.message } };
    }
  }
  return { status: 500, body: { error: 'retry exhausted' } };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });
  if (!GITHUB_TOKEN) return res.status(500).json({ error: 'GITHUB_TOKEN not configured' });
  const user = await verifyAdmin(req);
  if (!user) return res.status(403).json({ error: 'admin only' });
  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  const { status, body: out } = await applyEdit({ readFile, writeFile }, body, user);
  return res.status(status).json(out);
}
