import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { splitMarkdownTables, hasMarkdownTable } from '../src/utils/markdownTables.js';

const text = 'Intro line.\n\n| n | ways | by |\n|---|---|---|\n| 1 | 1 | 1 |\n| 2 | 2 | \\(1 \\times 2\\) |\n\nHow many?';
const segs = splitMarkdownTables(text);
assert.deepEqual(segs.map((s) => s.type), ['text', 'table', 'text']);
assert.deepEqual(segs[1].headers, ['n', 'ways', 'by']);
assert.equal(segs[1].rows.length, 2);
assert.equal(segs[1].rows[1][2], '\\(1 \\times 2\\)');
assert.equal(hasMarkdownTable('a | b'), false);
assert.equal(hasMarkdownTable('x \\neq y'), false);

// The real ACER question from the report.
const ch = JSON.parse(readFileSync('content/chapters/sch-acer.json', 'utf8'));
const find = (o) => (o && typeof o === 'object' ? (typeof o.stem === 'string' && o.stem.includes('line up only one way') ? o : Object.values(o).map(find).find(Boolean)) : null);
const q = find(ch);
assert.ok(q, 'ACER question found');
const t = splitMarkdownTables(q.stem).find((s) => s.type === 'table');
assert.ok(t, 'table parsed');
assert.equal(t.headers.length, 3);
console.log('markdown tables: passed', t.rows.length, 'rows');

// Scanned-figure SVGs print as a plain <img> with an absolute URL.
globalThis.window = { location: { origin: 'https://sapere-app.vercel.app' } };
const { diagramHtml } = await import('../src/utils/exportPdf.js');
assert.equal(
  diagramHtml('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 593" width="100%" height="auto"><image href="/acer/m-q1.jpg" x="0" y="0" width="1200" height="593"/></svg>'),
  '<img class="diagram-img" src="https://sapere-app.vercel.app/acer/m-q1.jpg" alt="">',
);
assert.ok(diagramHtml('<svg viewBox="0 0 10 10"><line x1="0" y1="0" x2="1" y2="1"/></svg>').startsWith('<svg'));
console.log('diagram images: passed');
