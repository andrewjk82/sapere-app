#!/usr/bin/env node
/**
 * Local-only viewer server for the question corpus DB.
 *
 * Binds to 127.0.0.1 only — this can serve original copyrighted past-paper
 * text (source='original' rows), so it must never be reachable from outside
 * this machine and must never be deployed.
 *
 * Usage: npm run corpus:viewer   (then open http://127.0.0.1:5391)
 */
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { extname, join, dirname, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { listTopics, listTypes, listYears, listPapers, listQuestions, getQuestion, summary, approveQuestion, unapproveQuestion, corpusApproveQuestion, rejectQuestion } from './lib/query.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..', '..');
const PORT = 5391;
const HOST = '127.0.0.1';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.svg': 'image/svg+xml',
};

// Static file mounts: URL prefix -> real directory on disk.
const STATIC_MOUNTS = [
  { prefix: '/vendor/katex/', dir: join(PROJECT_ROOT, 'node_modules', 'katex', 'dist') },
  { prefix: '/vendor/', dir: join(PROJECT_ROOT, 'src', 'utils') },
  { prefix: '/', dir: join(__dirname, 'viewer') },
];

async function serveStatic(res, urlPath) {
  for (const mount of STATIC_MOUNTS) {
    if (!urlPath.startsWith(mount.prefix)) continue;
    const rel = urlPath.slice(mount.prefix.length) || 'index.html';
    const full = normalize(join(mount.dir, rel));
    // Prevent path traversal outside the mounted directory.
    if (!full.startsWith(normalize(mount.dir))) continue;
    if (!existsSync(full)) continue;
    try {
      const data = await readFile(full);
      const ext = extname(full);
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
      res.end(data);
      return true;
    } catch {
      continue;
    }
  }
  return false;
}

function sendJson(res, status, body) {
  const data = JSON.stringify(body);
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(data);
}

async function handleApi(req, res, url) {
  const parts = url.pathname.split('/').filter(Boolean); // ['api', ...]

  if (url.pathname === '/api/summary') {
    return sendJson(res, 200, summary());
  }
  if (url.pathname === '/api/topics') {
    return sendJson(res, 200, listTopics());
  }
  if (url.pathname === '/api/years') {
    return sendJson(res, 200, listYears());
  }
  if (url.pathname === '/api/types') {
    return sendJson(res, 200, listTypes(url.searchParams.get('topicId') || undefined));
  }
  if (url.pathname === '/api/papers') {
    return sendJson(res, 200, listPapers());
  }
  if (url.pathname === '/api/questions') {
    const filters = Object.fromEntries(url.searchParams.entries());
    return sendJson(res, 200, listQuestions(filters));
  }
  if (parts[0] === 'api' && parts[1] === 'question' && parts[2]) {
    const q = getQuestion(decodeURIComponent(parts[2]));
    if (!q) return sendJson(res, 404, { error: 'Not found' });
    return sendJson(res, 200, q);
  }
  if (req.method === 'POST' && parts[0] === 'api' && parts[1] === 'approve' && parts[2]) {
    return sendJson(res, 200, approveQuestion(decodeURIComponent(parts[2])));
  }
  if (req.method === 'POST' && parts[0] === 'api' && parts[1] === 'unapprove' && parts[2]) {
    return sendJson(res, 200, unapproveQuestion(decodeURIComponent(parts[2])));
  }
  if (req.method === 'POST' && parts[0] === 'api' && parts[1] === 'corpus-approve' && parts[2]) {
    return sendJson(res, 200, corpusApproveQuestion(decodeURIComponent(parts[2])));
  }
  if (req.method === 'POST' && parts[0] === 'api' && parts[1] === 'reject' && parts[2]) {
    return sendJson(res, 200, rejectQuestion(decodeURIComponent(parts[2])));
  }
  return sendJson(res, 404, { error: 'Unknown API route' });
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://${HOST}`);
  try {
    if (url.pathname.startsWith('/api/')) {
      await handleApi(req, res, url);
      return;
    }
    const served = await serveStatic(res, url.pathname);
    if (!served) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
    }
  } catch (err) {
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal error');
  }
});

server.listen(PORT, HOST, () => {
  console.log(`\nQuestion corpus viewer running at http://${HOST}:${PORT}\n(localhost only — never expose this port)`);
});
