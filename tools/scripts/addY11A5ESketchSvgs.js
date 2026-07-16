/**
 * Attach Ch5D-style inline SVG graphs to Year 11 Adv 5E teacher_review
 * sketch / number-line questions (solutionSteps[].graphData.svg).
 *
 * Usage:
 *   node tools/scripts/addY11A5ESketchSvgs.js --seed-only
 *   node tools/scripts/addY11A5ESketchSvgs.js --firestore
 */
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '../..');
const SEED_PATH = resolve(ROOT, 'src/constants/seedYear11Ch5Questions.js');
const DO_FIRESTORE = process.argv.includes('--firestore');

// ── SVG primitives (Ch5D style) ─────────────────────────────────────────────

const SVG_STYLE =
  'display: block; margin: 0 auto; background: #fafafa; border: 1px solid #e2e8f0; border-radius: 8px;';

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/** Cartesian plane with V-shaped absolute value graph y = a*|m*(x-h)| + k */
function absValueSvg({
  h = 0,
  k = 0,
  a = 1,
  m = 1,
  label = 'y = |x|',
  marks = [], // {x,y,label,color?}
  xMin = null,
  xMax = null,
  yMin = null,
  yMax = null,
  W = 300,
  H = 240,
}) {
  // auto domain
  const half = 6 / Math.max(Math.abs(m), 0.25);
  let xmin = xMin ?? h - half;
  let xmax = xMax ?? h + half;
  let ymin = yMin;
  let ymax = yMax;
  if (ymin == null || ymax == null) {
    const samples = [];
    for (let i = 0; i <= 20; i++) {
      const x = xmin + ((xmax - xmin) * i) / 20;
      samples.push(a * Math.abs(m * (x - h)) + k);
    }
    const pad = 1.5;
    ymin = ymin ?? Math.min(0, ...samples) - pad;
    ymax = ymax ?? Math.max(0, ...samples) + pad;
  }
  // ensure origin visible-ish
  if (xmin > 0) xmin = -0.5;
  if (xmax < 0) xmax = 0.5;
  if (ymin > 0) ymin = -0.5;
  if (ymax < 0) ymax = 0.5;

  const padL = 28;
  const padR = 18;
  const padT = 18;
  const padB = 24;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const sx = (x) => padL + ((x - xmin) / (xmax - xmin)) * plotW;
  const sy = (y) => padT + ((ymax - y) / (ymax - ymin)) * plotH;

  const ox = sx(0);
  const oy = sy(0);

  // V path: left ray, vertex, right ray within domain
  const yAt = (x) => a * Math.abs(m * (x - h)) + k;
  const xL = xmin;
  const xR = xmax;
  const pts = [
    [xL, yAt(xL)],
    [h, k],
    [xR, yAt(xR)],
  ];
  // if vertex outside domain, just sample ends
  if (h < xmin || h > xmax) {
    pts.splice(1, 1);
  }
  const pathD = pts
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${sx(p[0]).toFixed(1)},${sy(p[1]).toFixed(1)}`)
    .join(' ');

  // light grid every 1 unit if scale allows
  const gridLines = [];
  const xStep = xmax - xmin > 14 ? 2 : 1;
  const yStep = ymax - ymin > 14 ? 2 : 1;
  for (let x = Math.ceil(xmin); x <= Math.floor(xmax); x += xStep) {
    if (x === 0) continue;
    gridLines.push(
      `<line x1="${sx(x).toFixed(1)}" y1="${padT}" x2="${sx(x).toFixed(1)}" y2="${(H - padB).toFixed(1)}" stroke="#f1f5f9" stroke-width="1"/>`
    );
  }
  for (let y = Math.ceil(ymin); y <= Math.floor(ymax); y += yStep) {
    if (y === 0) continue;
    gridLines.push(
      `<line x1="${padL}" y1="${sy(y).toFixed(1)}" x2="${(W - padR).toFixed(1)}" y2="${sy(y).toFixed(1)}" stroke="#f1f5f9" stroke-width="1"/>`
    );
  }

  // tick labels at integers near axes
  const ticks = [];
  for (let x = Math.ceil(xmin); x <= Math.floor(xmax); x += xStep) {
    if (x === 0) continue;
    ticks.push(
      `<text x="${sx(x).toFixed(1)}" y="${(oy + 12).toFixed(1)}" font-size="9" fill="#94a3b8" text-anchor="middle">${x}</text>`
    );
  }
  for (let y = Math.ceil(ymin); y <= Math.floor(ymax); y += yStep) {
    if (y === 0) continue;
    ticks.push(
      `<text x="${(ox - 6).toFixed(1)}" y="${(sy(y) + 3).toFixed(1)}" font-size="9" fill="#94a3b8" text-anchor="end">${y}</text>`
    );
  }

  const markEls = marks
    .map((mk) => {
      const color = mk.color || '#ef4444';
      const px = sx(mk.x);
      const py = sy(mk.y);
      const lx = mk.lx != null ? mk.lx : px + 8;
      const ly = mk.ly != null ? mk.ly : py - 8;
      return (
        `<circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="3.5" fill="${color}"/>` +
        (mk.label
          ? `<text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" font-size="10" fill="${color}" font-weight="bold">${esc(mk.label)}</text>`
          : '')
      );
    })
    .join('\n  ');

  // label position near right tip
  const labX = Math.min(W - 10, sx(Math.min(xmax, h + half * 0.7)) + 4);
  const labY = Math.max(14, sy(yAt(Math.min(xmax, h + half * 0.7))) - 6);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="${SVG_STYLE}">
  ${gridLines.join('\n  ')}
  <line x1="${padL}" y1="${oy.toFixed(1)}" x2="${(W - padR).toFixed(1)}" y2="${oy.toFixed(1)}" stroke="#64748b" stroke-width="1.5"/>
  <line x1="${ox.toFixed(1)}" y1="${padT}" x2="${ox.toFixed(1)}" y2="${(H - padB).toFixed(1)}" stroke="#64748b" stroke-width="1.5"/>
  <text x="${(W - padR + 2).toFixed(1)}" y="${(oy + 14).toFixed(1)}" font-size="12" fill="#64748b" font-weight="bold">x</text>
  <text x="${(ox + 6).toFixed(1)}" y="${(padT + 4).toFixed(1)}" font-size="12" fill="#64748b" font-weight="bold">y</text>
  ${ticks.join('\n  ')}
  <path d="${pathD}" fill="none" stroke="#6366f1" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
  <text x="${labX.toFixed(1)}" y="${labY.toFixed(1)}" font-size="10" fill="#6366f1" font-weight="bold">${esc(label)}</text>
  ${markEls}
</svg>`;
}

/** Two functions on same axes */
function dualAbsSvg(cfgA, cfgB, extraMarks = []) {
  // reuse absValueSvg domain logic by computing envelope
  const h = (cfgA.h + cfgB.h) / 2;
  const base = absValueSvg({
    ...cfgA,
    marks: [...(cfgA.marks || []), ...extraMarks],
  });
  // inject second path by rebuilding fully
  const {
    h: h1 = 0,
    k: k1 = 0,
    a: a1 = 1,
    m: m1 = 1,
    label: l1 = '',
  } = cfgA;
  const {
    h: h2 = 0,
    k: k2 = 0,
    a: a2 = 1,
    m: m2 = 1,
    label: l2 = '',
  } = cfgB;
  const W = 300;
  const H = 240;
  let xmin = Math.min(h1, h2) - 6;
  let xmax = Math.max(h1, h2) + 6;
  const yAt1 = (x) => a1 * Math.abs(m1 * (x - h1)) + k1;
  const yAt2 = (x) => a2 * Math.abs(m2 * (x - h2)) + k2;
  const samples = [];
  for (let i = 0; i <= 40; i++) {
    const x = xmin + ((xmax - xmin) * i) / 40;
    samples.push(yAt1(x), yAt2(x));
  }
  let ymin = Math.min(0, ...samples) - 1.5;
  let ymax = Math.max(0, ...samples) + 1.5;
  if (xmin > 0) xmin = -0.5;
  if (xmax < 0) xmax = 0.5;
  const padL = 28;
  const padR = 18;
  const padT = 18;
  const padB = 24;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const sx = (x) => padL + ((x - xmin) / (xmax - xmin)) * plotW;
  const sy = (y) => padT + ((ymax - y) / (ymax - ymin)) * plotH;
  const ox = sx(0);
  const oy = sy(0);
  const path = (yAt, hx) => {
    const pts = [
      [xmin, yAt(xmin)],
      [hx, yAt(hx)],
      [xmax, yAt(xmax)],
    ];
    return pts
      .map((p, i) => `${i === 0 ? 'M' : 'L'} ${sx(p[0]).toFixed(1)},${sy(p[1]).toFixed(1)}`)
      .join(' ');
  };
  const markEls = (extraMarks || [])
    .map((mk) => {
      const color = mk.color || '#ef4444';
      return `<circle cx="${sx(mk.x).toFixed(1)}" cy="${sy(mk.y).toFixed(1)}" r="3.5" fill="${color}"/>
  <text x="${(sx(mk.x) + 6).toFixed(1)}" y="${(sy(mk.y) - 6).toFixed(1)}" font-size="10" fill="${color}" font-weight="bold">${esc(mk.label || '')}</text>`;
    })
    .join('\n  ');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="${SVG_STYLE}">
  <line x1="${padL}" y1="${oy.toFixed(1)}" x2="${(W - padR).toFixed(1)}" y2="${oy.toFixed(1)}" stroke="#64748b" stroke-width="1.5"/>
  <line x1="${ox.toFixed(1)}" y1="${padT}" x2="${ox.toFixed(1)}" y2="${(H - padB).toFixed(1)}" stroke="#64748b" stroke-width="1.5"/>
  <text x="${(W - padR).toFixed(1)}" y="${(oy + 14).toFixed(1)}" font-size="12" fill="#64748b" font-weight="bold">x</text>
  <text x="${(ox + 6).toFixed(1)}" y="${(padT + 4).toFixed(1)}" font-size="12" fill="#64748b" font-weight="bold">y</text>
  <path d="${path(yAt1, h1)}" fill="none" stroke="#6366f1" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="${path(yAt2, h2)}" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="5 3" stroke-linejoin="round"/>
  <text x="${(sx(h1 + 2)).toFixed(1)}" y="${(sy(yAt1(h1 + 2)) - 6).toFixed(1)}" font-size="10" fill="#6366f1" font-weight="bold">${esc(l1)}</text>
  <text x="${(sx(h2 + 2)).toFixed(1)}" y="${(sy(yAt2(h2 + 2)) + 14).toFixed(1)}" font-size="10" fill="#ef4444" font-weight="bold">${esc(l2)}</text>
  ${markEls}
</svg>`;
}

/** Number line with solid dots at solution values */
function numberLineSvg(points, { min = null, max = null, label = '' } = {}) {
  const vals = points.slice().sort((a, b) => a - b);
  let lo = min ?? vals[0] - 2;
  let hi = max ?? vals[vals.length - 1] + 2;
  if (lo > 0) lo = -1;
  if (hi < 0) hi = 1;
  const W = 320;
  const H = 90;
  const padL = 24;
  const padR = 24;
  const y = 48;
  const sx = (x) => padL + ((x - lo) / (hi - lo)) * (W - padL - padR);
  const ticks = [];
  for (let x = Math.ceil(lo); x <= Math.floor(hi); x++) {
    ticks.push(
      `<line x1="${sx(x).toFixed(1)}" y1="${y - 6}" x2="${sx(x).toFixed(1)}" y2="${y + 6}" stroke="#64748b" stroke-width="1.5"/>` +
        `<text x="${sx(x).toFixed(1)}" y="${y + 20}" font-size="11" fill="#475569" text-anchor="middle">${x}</text>`
    );
  }
  const dots = vals
    .map(
      (v) =>
        `<circle cx="${sx(v).toFixed(1)}" cy="${y}" r="5" fill="#6366f1" stroke="#312e81" stroke-width="1.5"/>` +
        `<text x="${sx(v).toFixed(1)}" y="${y - 12}" font-size="11" fill="#4f46e5" font-weight="bold" text-anchor="middle">${v}</text>`
    )
    .join('\n  ');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="${SVG_STYLE}">
  <line x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}" stroke="#64748b" stroke-width="2"/>
  <polygon points="${W - padR},${y} ${W - padR - 8},${y - 4} ${W - padR - 8},${y + 4}" fill="#64748b"/>
  ${ticks.join('\n  ')}
  ${dots}
  ${label ? `<text x="${W / 2}" y="16" font-size="11" fill="#6366f1" font-weight="bold" text-anchor="middle">${esc(label)}</text>` : ''}
</svg>`;
}

/** Horizontal step graph y = sign(x) = |x|/x */
function signGraphSvg() {
  const W = 300;
  const H = 200;
  const ox = 150;
  const oy = 100;
  const u = 28;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="${SVG_STYLE}">
  <line x1="20" y1="${oy}" x2="280" y2="${oy}" stroke="#64748b" stroke-width="1.5"/>
  <line x1="${ox}" y1="20" x2="${ox}" y2="180" stroke="#64748b" stroke-width="1.5"/>
  <text x="275" y="${oy + 14}" font-size="12" fill="#64748b" font-weight="bold">x</text>
  <text x="${ox + 6}" y="18" font-size="12" fill="#64748b" font-weight="bold">y</text>
  <!-- y=1 for x>0 -->
  <line x1="${ox + 4}" y1="${oy - u}" x2="270" y2="${oy - u}" stroke="#6366f1" stroke-width="2.5"/>
  <circle cx="${ox + 4}" cy="${oy - u}" r="4" fill="#fff" stroke="#6366f1" stroke-width="2"/>
  <!-- y=-1 for x<0 -->
  <line x1="30" y1="${oy + u}" x2="${ox - 4}" y2="${oy + u}" stroke="#6366f1" stroke-width="2.5"/>
  <circle cx="${ox - 4}" cy="${oy + u}" r="4" fill="#fff" stroke="#6366f1" stroke-width="2"/>
  <!-- hole at origin -->
  <circle cx="${ox}" cy="${oy}" r="4" fill="#fff" stroke="#ef4444" stroke-width="2"/>
  <text x="200" y="${oy - u - 8}" font-size="10" fill="#6366f1" font-weight="bold">y = 1 (x &gt; 0)</text>
  <text x="40" y="${oy + u + 16}" font-size="10" fill="#6366f1" font-weight="bold">y = -1 (x &lt; 0)</text>
  <text x="${ox + 8}" y="${oy + 14}" font-size="9" fill="#ef4444">undefined at 0</text>
</svg>`;
}

/** Piecewise linear: segments [{x1,y1,x2,y2}] */
function piecewiseSvg(segments, marks = [], label = '') {
  const W = 300;
  const H = 240;
  const xs = segments.flatMap((s) => [s.x1, s.x2]);
  const ys = segments.flatMap((s) => [s.y1, s.y2]);
  let xmin = Math.min(...xs, 0) - 1;
  let xmax = Math.max(...xs, 0) + 1;
  let ymin = Math.min(...ys, 0) - 1.5;
  let ymax = Math.max(...ys, 0) + 1.5;
  const padL = 28;
  const padR = 18;
  const padT = 18;
  const padB = 24;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const sx = (x) => padL + ((x - xmin) / (xmax - xmin)) * plotW;
  const sy = (y) => padT + ((ymax - y) / (ymax - ymin)) * plotH;
  const ox = sx(0);
  const oy = sy(0);
  const paths = segments
    .map(
      (s) =>
        `<line x1="${sx(s.x1).toFixed(1)}" y1="${sy(s.y1).toFixed(1)}" x2="${sx(s.x2).toFixed(1)}" y2="${sy(s.y2).toFixed(1)}" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round"/>`
    )
    .join('\n  ');
  const markEls = marks
    .map((mk) => {
      const color = mk.color || '#ef4444';
      return `<circle cx="${sx(mk.x).toFixed(1)}" cy="${sy(mk.y).toFixed(1)}" r="3.5" fill="${color}"/>
  <text x="${(sx(mk.x) + 6).toFixed(1)}" y="${(sy(mk.y) - 6).toFixed(1)}" font-size="10" fill="${color}" font-weight="bold">${esc(mk.label || '')}</text>`;
    })
    .join('\n  ');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="${SVG_STYLE}">
  <line x1="${padL}" y1="${oy.toFixed(1)}" x2="${(W - padR).toFixed(1)}" y2="${oy.toFixed(1)}" stroke="#64748b" stroke-width="1.5"/>
  <line x1="${ox.toFixed(1)}" y1="${padT}" x2="${ox.toFixed(1)}" y2="${(H - padB).toFixed(1)}" stroke="#64748b" stroke-width="1.5"/>
  <text x="${(W - padR).toFixed(1)}" y="${(oy + 14).toFixed(1)}" font-size="12" fill="#64748b" font-weight="bold">x</text>
  <text x="${(ox + 6).toFixed(1)}" y="${(padT + 4).toFixed(1)}" font-size="12" fill="#64748b" font-weight="bold">y</text>
  ${paths}
  ${markEls}
  ${label ? `<text x="40" y="28" font-size="11" fill="#6366f1" font-weight="bold">${esc(label)}</text>` : ''}
</svg>`;
}

function parabolaAbsSvg() {
  // y = x^2 - |4x| : for x>=0 y=x^2-4x=(x-2)^2-4; for x<0 y=x^2+4x=(x+2)^2-4
  const W = 300;
  const H = 240;
  const xmin = -5;
  const xmax = 5;
  const ymin = -5;
  const ymax = 6;
  const padL = 28;
  const padR = 18;
  const padT = 18;
  const padB = 24;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const sx = (x) => padL + ((x - xmin) / (xmax - xmin)) * plotW;
  const sy = (y) => padT + ((ymax - y) / (ymax - ymin)) * plotH;
  const ox = sx(0);
  const oy = sy(0);
  const yAt = (x) => x * x - 4 * Math.abs(x);
  let dL = '';
  let dR = '';
  for (let i = 0; i <= 40; i++) {
    const x = xmin + ((0 - xmin) * i) / 40;
    const cmd = i === 0 ? 'M' : 'L';
    dL += `${cmd}${sx(x).toFixed(1)},${sy(yAt(x)).toFixed(1)} `;
  }
  for (let i = 0; i <= 40; i++) {
    const x = 0 + ((xmax - 0) * i) / 40;
    const cmd = i === 0 ? 'M' : 'L';
    dR += `${cmd}${sx(x).toFixed(1)},${sy(yAt(x)).toFixed(1)} `;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="${SVG_STYLE}">
  <line x1="${padL}" y1="${oy.toFixed(1)}" x2="${(W - padR).toFixed(1)}" y2="${oy.toFixed(1)}" stroke="#64748b" stroke-width="1.5"/>
  <line x1="${ox.toFixed(1)}" y1="${padT}" x2="${ox.toFixed(1)}" y2="${(H - padB).toFixed(1)}" stroke="#64748b" stroke-width="1.5"/>
  <path d="${dL.trim()}" fill="none" stroke="#6366f1" stroke-width="2.5"/>
  <path d="${dR.trim()}" fill="none" stroke="#6366f1" stroke-width="2.5"/>
  <circle cx="${sx(-2).toFixed(1)}" cy="${sy(-4).toFixed(1)}" r="3.5" fill="#ef4444"/>
  <circle cx="${sx(2).toFixed(1)}" cy="${sy(-4).toFixed(1)}" r="3.5" fill="#ef4444"/>
  <text x="${sx(2) + 6}" y="${sy(-4) - 6}" font-size="10" fill="#ef4444" font-weight="bold">(±2,-4)</text>
  <text x="40" y="28" font-size="11" fill="#6366f1" font-weight="bold">y = x² − |4x|</text>
</svg>`;
}

// ── Per-question SVG map ────────────────────────────────────────────────────

function v(h, k, opts = {}) {
  return absValueSvg({
    h,
    k,
    a: opts.a ?? 1,
    m: opts.m ?? 1,
    label: opts.label,
    marks: opts.marks ?? [{ x: h, y: k, label: opts.vLabel ?? `(${h}, ${k})` }],
    xMin: opts.xMin,
    xMax: opts.xMax,
    yMin: opts.yMin,
    yMax: opts.yMax,
  });
}

const SVG_BY_ID = {
  // Basic translations
  'y11a-5-8a': () => v(0, -5, { label: 'y = |x| − 5', yMin: -7, yMax: 4 }),
  'y11a-5-8b': () => v(6, 0, { label: 'y = |x − 6|', xMin: -1, xMax: 12, yMin: -1, yMax: 7 }),
  'y11a-5-8c': () => v(-4, 0, { label: 'y = |x + 4|', xMin: -10, xMax: 4, yMin: -1, yMax: 7 }),
  'y11a-5-8d': () => v(0, 7, { label: 'y = |x| + 7', yMin: -1, yMax: 12 }),

  // With intercepts: y = |mx+c| form → h = -c/m, m_slope = |m|
  'y11a-5-9a': () =>
    v(-3, 0, {
      m: 4,
      label: 'y = |4x + 12|',
      marks: [
        { x: -3, y: 0, label: 'x-int (−3,0)' },
        { x: 0, y: 12, label: 'y-int (0,12)', color: '#f59e0b' },
      ],
      xMin: -6,
      xMax: 2,
      yMin: -1,
      yMax: 16,
    }),
  'y11a-5-9b': () =>
    v(5, 0, {
      a: -1,
      m: 2,
      label: 'y = −|2x − 10|',
      marks: [
        { x: 5, y: 0, label: 'x-int (5,0)' },
        { x: 0, y: -10, label: 'y-int (0,−10)', color: '#f59e0b' },
      ],
      xMin: -1,
      xMax: 10,
      yMin: -14,
      yMax: 2,
    }),
  'y11a-5-9c': () =>
    v(-3, 0, {
      m: 5,
      label: 'y = |5x + 15|',
      marks: [
        { x: -3, y: 0, label: 'x-int (−3,0)' },
        { x: 0, y: 15, label: 'y-int (0,15)', color: '#f59e0b' },
      ],
      xMin: -6,
      xMax: 2,
      yMin: -1,
      yMax: 18,
    }),
  'y11a-5-19d': () =>
    v(4, 0, {
      m: 2,
      label: 'y = |2x − 8|',
      marks: [
        { x: 4, y: 0, label: 'V(4,0)' },
        { x: 0, y: 8, label: 'y-int (0,8)', color: '#f59e0b' },
      ],
      xMin: -1,
      xMax: 9,
      yMin: -1,
      yMax: 12,
    }),

  // Number lines (eq solutions)
  'y11a-5E-new-3a': () => numberLineSvg([-2, 2], { label: '|x| = 2' }),
  'y11a-5E-new-3b': () => numberLineSvg([-5, 5], { label: '|x| = 5' }),
  'y11a-5E-new-3c': () => numberLineSvg([-4, 4], { label: '|3x| = 12 → x = ±4' }),
  'y11a-5E-new-3d': () => numberLineSvg([-5, 5], { label: '|4x| = 20 → x = ±5' }),
  'y11a-5E-new-3e': () => numberLineSvg([-3, 3], { label: '|5x| = 15 → x = ±3' }),
  'y11a-5E-new-3f': () => numberLineSvg([-4, 4], { label: '|6x| = 24 → x = ±4' }),
  'y11a-5E-new-4a': () => numberLineSvg([3, 7], { min: 0, max: 10, label: '|x − 5| = 2' }),
  'y11a-5E-new-4b': () => numberLineSvg([-2, 10], { label: '|x − 4| = 6' }),
  'y11a-5E-new-4c': () => numberLineSvg([-2, 6], { label: '|x − 2| = 4' }),
  'y11a-5E-new-4d': () => numberLineSvg([5, 11], { min: 2, max: 13, label: '|x − 8| = 3' }),
  'y11a-5E-new-4e': () => numberLineSvg([-9, -3], { label: '|x + 6| = 3' }),
  'y11a-5E-new-4f': () => numberLineSvg([-7, 1], { label: '|x + 3| = 4' }),
  'y11a-5E-new-4g': () => numberLineSvg([-9, 5], { label: '|x + 2| = 7' }),
  'y11a-5E-new-4h': () => numberLineSvg([-6, -2], { label: '|x + 4| = 2' }),

  // Dual / shifts
  'y11a-5E-new-5': () =>
    dualAbsSvg(
      { h: 2, k: 0, label: 'y = |x − 2|' },
      { h: 0, k: -2, label: 'y = |x| − 2' },
      [
        { x: 2, y: 0, label: '(2,0)' },
        { x: 0, y: -2, label: '(0,−2)', color: '#f59e0b' },
      ]
    ),
  'y11a-5E-new-10a': () => v(0, 0, { label: 'y = |x|', marks: [{ x: 0, y: 0, label: 'V(0,0)' }] }),
  'y11a-5E-new-10b-i': () => v(4, 0, { label: 'y = |x − 4|', xMin: -1, xMax: 10 }),
  'y11a-5E-new-10b-ii': () => v(-3, 0, { label: 'y = |x + 3|', xMin: -9, xMax: 4 }),
  'y11a-5E-new-10b-iii': () => v(0, -4, { label: 'y = |x| − 4', yMin: -6, yMax: 4 }),
  'y11a-5E-new-10b-iv': () => v(0, 2, { label: 'y = |x| + 2', yMin: -1, yMax: 8 }),
  'y11a-5E-new-10b-v': () => v(3, -2, { label: 'y = |x − 3| − 2', xMin: -2, xMax: 9, yMin: -4, yMax: 5 }),
  'y11a-5E-new-10b-vi': () => v(-2, -3, { label: 'y = |x + 2| − 3', xMin: -8, xMax: 5, yMin: -5, yMax: 4 }),

  // dilations y=|3x| steeper, y=|x/3| flatter
  'y11a-5E-new-11a-i': () => v(0, 0, { m: 3, label: 'y = |3x|', xMin: -3, xMax: 3, yMin: -1, yMax: 8 }),
  'y11a-5E-new-11a-ii': () =>
    v(0, 0, { m: 1 / 3, label: 'y = |x/3|', xMin: -9, xMax: 9, yMin: -1, yMax: 5 }),
  'y11a-5E-new-11b-i': () => v(0, 0, { m: 3, label: 'y = |3x| (vert. dil. ×3)', xMin: -3, xMax: 3, yMin: -1, yMax: 8 }),
  'y11a-5E-new-11b-ii': () =>
    v(0, 0, { m: 1 / 3, label: 'y = |x/3| (vert. dil. ×1/3)', xMin: -9, xMax: 9, yMin: -1, yMax: 5 }),

  'y11a-5E-new-12a': () =>
    v(2, 0, {
      m: 3,
      label: 'y = |3x − 6|',
      marks: [
        { x: 2, y: 0, label: 'x-int (2,0)' },
        { x: 0, y: 6, label: 'y-int (0,6)', color: '#f59e0b' },
      ],
      xMin: -1,
      xMax: 5,
      yMin: -1,
      yMax: 10,
    }),
  'y11a-5E-new-12b': () =>
    v(4, 0, {
      m: 2,
      label: 'y = |8 − 2x|',
      marks: [
        { x: 4, y: 0, label: 'x-int (4,0)' },
        { x: 0, y: 8, label: 'y-int (0,8)', color: '#f59e0b' },
      ],
      xMin: -1,
      xMax: 9,
      yMin: -1,
      yMax: 12,
    }),
  'y11a-5E-new-12c': () =>
    v(-2, 0, {
      m: 4,
      label: 'y = |4x + 8|',
      marks: [
        { x: -2, y: 0, label: 'x-int (−2,0)' },
        { x: 0, y: 8, label: 'y-int (0,8)', color: '#f59e0b' },
      ],
      xMin: -5,
      xMax: 2,
      yMin: -1,
      yMax: 12,
    }),

  'y11a-5E-new-13a': () =>
    v(0, 0, { a: -1, m: 3, label: 'y = −|3x|', xMin: -3, xMax: 3, yMin: -8, yMax: 1 }),
  'y11a-5E-new-13b': () =>
    v(-3, 0, { m: 2, label: 'y = |2x + 6|', xMin: -8, xMax: 3, yMin: -1, yMax: 12 }),
  'y11a-5E-new-13c': () =>
    v(-5, 0, { a: -1, label: 'y = −|x + 5|', xMin: -10, xMax: 2, yMin: -8, yMax: 1 }),

  'y11a-5E-new-14a': () =>
    v(2, 0, { m: 2, label: 'y = |2x − 4|', xMin: -1, xMax: 6, yMin: -1, yMax: 8 }),
  'y11a-5E-new-14b': () =>
    v(-2, 0, { m: 2, label: 'y = |2x + 4|', xMin: -6, xMax: 3, yMin: -1, yMax: 10 }),
  'y11a-5E-new-14c': () =>
    v(4, 0, { m: 0.5, label: 'y = |x/2 − 2|', xMin: -2, xMax: 12, yMin: -1, yMax: 6 }),

  'y11a-5E-new-16': () => v(0, 0, { label: 'f(x) = |x|', marks: [{ x: 0, y: 0, label: 'V(0,0)' }] }),
  'y11a-5E-new-17b': () => signGraphSvg(),

  // piecewise branches
  'y11a-5E-new-19a': () =>
    piecewiseSvg(
      [
        { x1: -5, y1: 0, x2: 0, y2: 0 },
        { x1: 0, y1: 0, x2: 5, y2: 10 },
      ],
      [{ x: 0, y: 0, label: '(0,0)' }],
      'y = |x| + x'
    ),
  'y11a-5E-new-19b': () =>
    piecewiseSvg(
      [
        { x1: -5, y1: 10, x2: 0, y2: 0 },
        { x1: 0, y1: 0, x2: 5, y2: 0 },
      ],
      [{ x: 0, y: 0, label: '(0,0)' }],
      'y = |x| − x'
    ),
  'y11a-5E-new-19c': () =>
    piecewiseSvg(
      [
        { x1: -2, y1: -12, x2: 2, y2: 0 }, // 3x-6 for x<2: at x=-2 → -12; at x=2 → 0
        { x1: 2, y1: 0, x2: 6, y2: 4 }, // x-2 for x>=2
      ],
      [{ x: 2, y: 0, label: '(2,0)' }],
      'y = 2(x−2) − |x−2|'
    ),
  'y11a-5E-new-19d': () => parabolaAbsSvg(),
};

// Fix y11a-5E-new-15 properly: abs graph + horizontal y=2
SVG_BY_ID['y11a-5E-new-15'] = () => {
  const W = 300;
  const H = 240;
  const xmin = -1;
  const xmax = 10;
  const ymin = -1;
  const ymax = 7;
  const padL = 28;
  const padR = 18;
  const padT = 18;
  const padB = 24;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const sx = (x) => padL + ((x - xmin) / (xmax - xmin)) * plotW;
  const sy = (y) => padT + ((ymax - y) / (ymax - ymin)) * plotH;
  const ox = sx(0);
  const oy = sy(0);
  const h = 4;
  const yAt = (x) => Math.abs(x - h);
  const pathD = [
    [xmin, yAt(xmin)],
    [h, 0],
    [xmax, yAt(xmax)],
  ]
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${sx(p[0]).toFixed(1)},${sy(p[1]).toFixed(1)}`)
    .join(' ');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="${SVG_STYLE}">
  <line x1="${padL}" y1="${oy.toFixed(1)}" x2="${(W - padR).toFixed(1)}" y2="${oy.toFixed(1)}" stroke="#64748b" stroke-width="1.5"/>
  <line x1="${ox.toFixed(1)}" y1="${padT}" x2="${ox.toFixed(1)}" y2="${(H - padB).toFixed(1)}" stroke="#64748b" stroke-width="1.5"/>
  <path d="${pathD}" fill="none" stroke="#6366f1" stroke-width="2.5" stroke-linejoin="round"/>
  <line x1="${padL}" y1="${sy(2).toFixed(1)}" x2="${(W - padR).toFixed(1)}" y2="${sy(2).toFixed(1)}" stroke="#ef4444" stroke-width="2" stroke-dasharray="5 3"/>
  <circle cx="${sx(2).toFixed(1)}" cy="${sy(2).toFixed(1)}" r="3.5" fill="#ef4444"/>
  <circle cx="${sx(6).toFixed(1)}" cy="${sy(2).toFixed(1)}" r="3.5" fill="#ef4444"/>
  <text x="${sx(2) + 6}" y="${sy(2) - 8}" font-size="10" fill="#ef4444" font-weight="bold">(2,2)</text>
  <text x="${sx(6) + 6}" y="${sy(2) - 8}" font-size="10" fill="#ef4444" font-weight="bold">(6,2)</text>
  <text x="160" y="36" font-size="10" fill="#6366f1" font-weight="bold">y = |x − 4|</text>
  <text x="200" y="${sy(2) - 6}" font-size="10" fill="#ef4444" font-weight="bold">y = 2</text>
</svg>`;
};

// ── Seed + Firestore ────────────────────────────────────────────────────────

function loadSeed() {
  const src = readFileSync(SEED_PATH, 'utf8');
  const start = src.indexOf('export const CH5_QUESTIONS_Y11A = ');
  const end = src.indexOf('export const Y11_CH5_QUESTIONS');
  const chunk = src
    .slice(start, end)
    .replace('export const CH5_QUESTIONS_Y11A = ', 'const CH5_QUESTIONS_Y11A = ')
    .replace(/;\s*$/, '');
  const arr = new Function(`${chunk}; return CH5_QUESTIONS_Y11A;`)();
  return { arr, rest: src.slice(end), src };
}

function attachSvgToQuestion(q, svg) {
  const steps = Array.isArray(q.solutionSteps) ? q.solutionSteps.map((s) => ({ ...s })) : [];
  if (steps.length === 0) {
    steps.push({
      explanation:
        'The model graph below shows the key features students should include in their sketch for teacher review.',
      workingOut: '\\(\\text{See graph}\\)',
      graphData: { svg },
    });
  } else {
    // Prefer last step for final graph; clear svg from earlier steps to avoid clutter
    const last = steps.length - 1;
    steps[last] = {
      ...steps[last],
      graphData: { svg },
    };
    // If last step explanation is thin, enrich slightly
    if (!steps[last].explanation || steps[last].explanation.length < 40) {
      steps[last].explanation =
        (steps[last].explanation ? steps[last].explanation + ' ' : '') +
        'Compare your sketch with the model graph: vertex position, orientation, and intercepts should match.';
    }
  }
  return { ...q, solutionSteps: steps, isNew: true };
}

async function main() {
  const ids = Object.keys(SVG_BY_ID);
  console.log(`SVG specs: ${ids.length}`);

  // Validate SVGs
  const svgMap = {};
  for (const id of ids) {
    const svg = SVG_BY_ID[id]();
    if (!svg.startsWith('<svg') || !svg.includes('</svg>')) {
      throw new Error(`Bad SVG for ${id}`);
    }
    svgMap[id] = svg;
  }

  const { arr, rest } = loadSeed();
  let updated = 0;
  const converted = {};
  const newArr = arr.map((q) => {
    if (q.c !== '5E') return q;
    if (!svgMap[q.id]) return q;
    const next = attachSvgToQuestion(q, svgMap[q.id]);
    converted[q.id] = next;
    updated += 1;
    return next;
  });

  console.log(`Seed questions updated: ${updated}`);
  if (updated !== ids.length) {
    const missing = ids.filter((id) => !converted[id]);
    console.warn('IDs not found in seed:', missing);
  }

  writeFileSync(
    SEED_PATH,
    `export const CH5_QUESTIONS_Y11A = ${JSON.stringify(newArr, null, 2)};\n\n` + rest,
    'utf8'
  );
  console.log('Seed written.');

  if (!DO_FIRESTORE) {
    console.log('Seed only. Re-run with --firestore to upsert.');
    return;
  }

  const sa = JSON.parse(
    readFileSync(
      process.env.GOOGLE_APPLICATION_CREDENTIALS ||
        '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
      'utf8'
    )
  );
  if (!getApps().length) initializeApp({ credential: cert(sa) });
  const db = getFirestore();

  const writeIds = Object.keys(converted);
  let written = 0;
  for (let i = 0; i < writeIds.length; i += 400) {
    const slice = writeIds.slice(i, i + 400);
    const batch = db.batch();
    for (const id of slice) {
      const q = converted[id];
      batch.set(
        db.collection('questions').doc(id),
        {
          solutionSteps: q.solutionSteps,
          isNew: true,
          type: 'teacher_review',
          updatedAt: FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
      written += 1;
    }
    await batch.commit();
  }
  console.log(`Firestore merge-updated solutionSteps for ${written} docs.`);

  // Spot-check
  const check = await db.collection('questions').doc('y11a-5-8a').get();
  const steps = check.data()?.solutionSteps || [];
  const last = steps[steps.length - 1];
  console.log('y11a-5-8a last step has svg:', !!last?.graphData?.svg, 'len', last?.graphData?.svg?.length);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
