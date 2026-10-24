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
