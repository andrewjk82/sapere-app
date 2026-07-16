/**
 * Attach model SVG graphs to Year 12 Adv Ch2 teacher_review sketch solutions.
 * Stem graphData is always cleared (sketch prompts must not show the answer).
 *
 *   node tools/scripts/addY12ACh2SketchSvgs.js
 */
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const sa = JSON.parse(
  readFileSync(
    process.env.GOOGLE_APPLICATION_CREDENTIALS ||
      '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
    'utf8'
  )
);
if (!getApps().length) initializeApp({ credential: cert(sa) });
const db = getFirestore();

const SVG_STYLE =
  'display:block;margin:0 auto;background:#fafafa;border:1px solid #e2e8f0;border-radius:8px;';

function plane(xmin, xmax, ymin, ymax, W = 320, H = 260) {
  const padL = 40, padR = 20, padT = 24, padB = 30;
  const sx = (x) => padL + ((x - xmin) / (xmax - xmin)) * (W - padL - padR);
  const sy = (y) => padT + ((ymax - y) / (ymax - ymin)) * (H - padT - padB);
  let axes = '';
  if (ymin <= 0 && ymax >= 0) {
    const oy = sy(0);
    axes += `<line x1="${padL}" y1="${oy.toFixed(1)}" x2="${W - padR}" y2="${oy.toFixed(1)}" stroke="#64748b" stroke-width="1.5"/>`;
    axes += `<text x="${W - padR - 2}" y="${(oy + 14).toFixed(1)}" font-size="12" fill="#64748b" font-weight="bold">x</text>`;
  }
  if (xmin <= 0 && xmax >= 0) {
    const ox = sx(0);
    axes += `<line x1="${ox.toFixed(1)}" y1="${padT}" x2="${ox.toFixed(1)}" y2="${H - padB}" stroke="#64748b" stroke-width="1.5"/>`;
    axes += `<text x="${(ox + 6).toFixed(1)}" y="${padT + 4}" font-size="12" fill="#64748b" font-weight="bold">y</text>`;
  }
  return { sx, sy, W, H, axes };
}

/**
 * Sample a curve across [x0,x1]. Points outside the y-window are clipped to the
 * edge (not dropped mid-segment) so arms run cleanly to the frame instead of
 * ending in mid-air. Segments that leave and re-enter start a new subpath.
 */
function samplePath(fn, x0, x1, sx, sy, ymin, ymax, n = 100) {
  let d = '';
  let pen = false;
  let prev = null; // {x,y,inside}
  for (let i = 0; i <= n; i++) {
    const x = x0 + ((x1 - x0) * i) / n;
    let y = fn(x);
    if (!Number.isFinite(y)) {
      pen = false;
      prev = null;
      continue;
    }
    const inside = y >= ymin && y <= ymax;
    const yDraw = Math.max(ymin, Math.min(ymax, y));
    if (inside) {
      if (!pen && prev && !prev.inside) {
        // re-enter: draw from clipped edge of previous to this point
        d += `M${sx(prev.x).toFixed(1)},${sy(Math.max(ymin, Math.min(ymax, prev.y))).toFixed(1)} `;
        d += `L${sx(x).toFixed(1)},${sy(yDraw).toFixed(1)} `;
      } else {
        d += `${pen ? 'L' : 'M'}${sx(x).toFixed(1)},${sy(yDraw).toFixed(1)} `;
      }
      pen = true;
    } else {
      if (pen && prev && prev.inside) {
        // leave: draw out to the clipped edge
        d += `L${sx(x).toFixed(1)},${sy(yDraw).toFixed(1)} `;
      }
      pen = false;
    }
    prev = { x, y, inside };
  }
  return d.trim();
}

function mark(sx, sy, x, y, label, color = '#ef4444', dx = 6, dy = -7) {
  let s = `<circle cx="${sx(x).toFixed(1)}" cy="${sy(y).toFixed(1)}" r="3.2" fill="${color}"/>`;
  if (label) {
    s += `<text x="${(sx(x) + dx).toFixed(1)}" y="${(sy(y) + dy).toFixed(1)}" font-size="10" fill="${color}" font-weight="bold">${label}</text>`;
  }
  return s;
}

function legend(items) {
  const w = Math.min(160, 70 + Math.max(...items.map((i) => i.text.length)) * 6);
  let s = `<rect x="38" y="12" width="${w}" height="${12 + items.length * 14}" rx="6" fill="#fff" fill-opacity="0.92" stroke="#e2e8f0"/>`;
  items.forEach((it, i) => {
    const y = 26 + i * 14;
    s += `<line x1="46" y1="${y - 3}" x2="60" y2="${y - 3}" stroke="${it.color}" stroke-width="2.5"/>`;
    s += `<text x="64" y="${y}" font-size="10" fill="${it.color}" font-weight="700">${it.text}</text>`;
  });
  return s;
}

function wrapSvg(body, W, H) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="${SVG_STYLE}">${body}</svg>`;
}

function svgBaulko13ai() {
  // Full view so both arms of the downward parabola and the line run to the
  // frame edges (no mid-air cut-offs). f=2x(1-x) vertex (1/2,1/2); intersects
  // g=x-1 at x=-1/2 and x=1.
  const xmin = -1.4;
  const xmax = 2.6;
  const ymin = -2.8;
  const ymax = 1.4;
  const { sx, sy, W, H, axes } = plane(xmin, xmax, ymin, ymax, 340, 280);
  const f = (x) => 2 * x - 2 * x * x;
  const g = (x) => x - 1;
  let body = axes;
  // Draw across the full plot window so curves reach the border cleanly.
  body += `<path d="${samplePath(f, xmin, xmax, sx, sy, ymin, ymax, 140)}" fill="none" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round"/>`;
  body += `<path d="${samplePath(g, xmin, xmax, sx, sy, ymin, ymax, 40)}" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round"/>`;
  // intercepts / vertex / intersections
  body += mark(sx, sy, 0, 0, '(0,0)', '#6366f1', 8, 14);
  body += mark(sx, sy, 1, 0, '(1,0)', '#6366f1', 10, 14);
  body += mark(sx, sy, 0.5, 0.5, 'V(1/2, 1/2)', '#ef4444', 8, -10);
  body += mark(sx, sy, 0, -1, '(0,-1)', '#22c55e', 8, 14);
  body += mark(sx, sy, -0.5, -1.5, '(-1/2, -3/2)', '#f59e0b', -70, -6);
  // second intersection is also (1,0) — mark with dual colour ring via larger note
  body += mark(sx, sy, 1, 0, '', '#f59e0b');
  body += legend([
    { color: '#6366f1', text: 'f(x)=2x-2x²' },
    { color: '#22c55e', text: 'g(x)=x-1' },
  ]);
  return wrapSvg(body, W, H);
}

function svgCosAbs(label = 'y=cos(pix)') {
  const xmin = -3.2, xmax = 3.2, ymin = -1.5, ymax = 1.5;
  const { sx, sy, W, H, axes } = plane(xmin, xmax, ymin, ymax);
  let body = axes;
  body += `<path d="${samplePath((x) => Math.cos(Math.PI * x), xmin, xmax, sx, sy, ymin, ymax, 120)}" fill="none" stroke="#6366f1" stroke-width="2.3"/>`;
  body += `<path d="M${sx(-3).toFixed(1)},${sy(-2).toFixed(1)} L${sx(0).toFixed(1)},${sy(1).toFixed(1)} L${sx(3).toFixed(1)},${sy(-2).toFixed(1)}" fill="none" stroke="#f59e0b" stroke-width="2.3"/>`;
  body += mark(sx, sy, 0, 1, '(0,1)', '#f59e0b', 8, -8);
  body += mark(sx, sy, 1, 0, '(1,0)', '#f59e0b', 6, 14);
  body += mark(sx, sy, -1, 0, '(-1,0)', '#f59e0b', -42, 14);
  body += legend([
    { color: '#6366f1', text: label },
    { color: '#f59e0b', text: 'y=1-|x|' },
  ]);
  return wrapSvg(body, W, H);
}

function svgSinAbs() {
  const xmin = -3.2, xmax = 3.2, ymin = -1.5, ymax = 1.5;
  const { sx, sy, W, H, axes } = plane(xmin, xmax, ymin, ymax);
  let body = axes;
  body += `<path d="${samplePath((x) => Math.sin(Math.PI * x), xmin, xmax, sx, sy, ymin, ymax, 120)}" fill="none" stroke="#6366f1" stroke-width="2.3"/>`;
  body += `<path d="M${sx(-3).toFixed(1)},${sy(-2).toFixed(1)} L${sx(0).toFixed(1)},${sy(1).toFixed(1)} L${sx(3).toFixed(1)},${sy(-2).toFixed(1)}" fill="none" stroke="#f59e0b" stroke-width="2.3"/>`;
  body += mark(sx, sy, 0, 1, '(0,1)', '#f59e0b', 8, -8);
  body += mark(sx, sy, 1, 0, '(+/-1,0)', '#f59e0b', 6, 14);
  body += mark(sx, sy, -1, 0, '', '#f59e0b');
  body += legend([
    { color: '#6366f1', text: 'y=sin(pix)' },
    { color: '#f59e0b', text: 'y=1-|x|' },
  ]);
  return wrapSvg(body, W, H);
}

function svgTemp(A, phase, C, label) {
  const xmin = 0, xmax = 13, ymin = C - A - 2, ymax = C + A + 2;
  const { sx, sy, W, H, axes } = plane(xmin, xmax, ymin, ymax, 340, 240);
  const fn = (x) => A * Math.sin((Math.PI / 6) * x + phase) + C;
  let body = axes;
  body += `<path d="${samplePath(fn, 1, 12, sx, sy, ymin, ymax, 100)}" fill="none" stroke="#6366f1" stroke-width="2.4"/>`;
  for (let k = -2; k <= 6; k++) {
    const arg = Math.PI / 2 + k * Math.PI;
    const x = ((arg - phase) * 6) / Math.PI;
    if (x < 1 || x > 12) continue;
    const y = fn(x);
    const isMax = Math.sin(arg) > 0;
    body += mark(sx, sy, x, y, `(${x.toFixed(1)},${y.toFixed(0)})`, isMax ? '#22c55e' : '#ef4444', 6, isMax ? -8 : 14);
  }
  body += `<text x="44" y="28" font-size="11" fill="#6366f1" font-weight="bold">${label}</text>`;
  body += `<text x="44" y="44" font-size="10" fill="#64748b">A=${A}, mean=${C}, period=12</text>`;
  return wrapSvg(body, W, H);
}

function svgAsc22() {
  const xmin = -8, xmax = 4, ymin = -8, ymax = 6;
  const { sx, sy, W, H, axes } = plane(xmin, xmax, ymin, ymax, 340, 260);
  const f = (x) => (x + 1) ** 2 + 3;
  const fNeg2 = (x) => -2 * f(x);
  const fDil = (x) => f(x / 2 + 2);
  let body = axes;
  body += `<path d="${samplePath(fNeg2, -3.5, 1.5, sx, sy, ymin, ymax)}" fill="none" stroke="#6366f1" stroke-width="2.3"/>`;
  body += `<path d="${samplePath(fDil, -8, 2, sx, sy, ymin, ymax)}" fill="none" stroke="#f59e0b" stroke-width="2.3"/>`;
  body += mark(sx, sy, -1, -6, '(-1,-6)', '#6366f1', 8, 14);
  body += mark(sx, sy, -6, 3, '(-6,3)', '#f59e0b', 8, -8);
  body += legend([
    { color: '#6366f1', text: 'y=-2f(x)' },
    { color: '#f59e0b', text: 'y=f(x/2+2)' },
  ]);
  return wrapSvg(body, W, H);
}

function svgFortst10g(variant = 'a') {
  const xmin = -2, xmax = 2.5, ymin = -30, ymax = 8;
  const { sx, sy, W, H, axes } = plane(xmin, xmax, ymin, ymax, 340, 260);
  let r1, r2, minX, minY, labels;
  if (variant === 'a') {
    r1 = -0.75; r2 = 1.25; minX = -0.25; minY = -27;
    labels = { r1: '(-3/4,0)', r2: '(5/4,0)', min: '(-1/4,-27)' };
  } else {
    r1 = -1.25; r2 = 0.75; minX = -0.75; minY = -27;
    labels = { r1: '(-5/4,0)', r2: '(3/4,0)', min: '(-3/4,-27)' };
  }
  const mid = (r1 + r2) / 2;
  const rawMin = (minX - r1) * (minX - r2) * (minX - mid);
  const fn = (x) => (minY / (rawMin || 1)) * (x - r1) * (x - r2) * (x - mid);
  let body = axes;
  body += `<path d="${samplePath(fn, r1 - 0.4, r2 + 0.4, sx, sy, ymin, ymax, 100)}" fill="none" stroke="#6366f1" stroke-width="2.4"/>`;
  body += mark(sx, sy, r1, 0, labels.r1, '#f59e0b', -40, 14);
  body += mark(sx, sy, r2, 0, labels.r2, '#f59e0b', 6, 14);
  body += mark(sx, sy, minX, fn(minX), labels.min, '#ef4444', 8, -8);
  body += `<text x="44" y="28" font-size="11" fill="#6366f1" font-weight="bold">y=f(2(x-1/4))</text>`;
  return wrapSvg(body, W, H);
}

const PATCHES = {
  'baulko2020-q13ai': { svg: svgBaulko13ai() },
  'dane2020-q32a': { svg: svgCosAbs('y=cos(pix)') },
  'dane2020s-q32a': { svg: svgCosAbs('y=cos(pix)') },
  'car2020-q33': { svg: svgCosAbs('y=cos(pix)') },
  'car2020s-q33': { svg: svgSinAbs() },
  'fortst2020-q18d': { svg: svgTemp(7, 1.5, 13, 'T=7sin(pix/6+1.5)+13') },
  'fortst2020s-q18d': { svg: svgTemp(8, 1, 15, 'T=8sin(pix/6+1)+15') },
  'asc2020-q22': { svg: svgAsc22() },
  'fortst2020-q10g': { svg: svgFortst10g('a') },
  'fortst2020s-q10g': { svg: svgFortst10g('b') },
};

async function main() {
  for (const [id, patch] of Object.entries(PATCHES)) {
    const ref = db.collection('questions').doc(id);
    const snap = await ref.get();
    if (!snap.exists) { console.log('missing', id); continue; }
    const data = snap.data();
    if (data.origin === 'teacher') { console.log('skip teacher', id); continue; }
    let steps = (data.solutionSteps || []).map((s) => ({ ...s }));
    if (!steps.length) {
      steps = [
        { explanation: 'Identify key features of each graph.', workingOut: '\\(\\text{features}\\)', graphData: null },
        { explanation: 'Plot intercepts, vertices and other required points.', workingOut: '\\(\\text{key points}\\)', graphData: null },
        { explanation: 'Sketch the curves and label intersections.', workingOut: '\\(\\text{sketch}\\)', graphData: null },
      ];
    }
    steps = steps.map((s, i) => ({
      explanation: s.explanation,
      workingOut: s.workingOut || '\\(\\text{(see solution)}\\)',
      graphData: i === steps.length - 1 ? { svg: patch.svg } : null,
    }));
    await ref.set({
      solutionSteps: steps,
      graphData: FieldValue.delete(),
      isNew: true,
      updatedAt: FieldValue.serverTimestamp(),
    }, { merge: true });
    console.log('patched', id, 'svgLen', patch.svg.length);
  }
  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set({
    version: ver, membershipVersion: ver, updatedAt: FieldValue.serverTimestamp(),
  }, { merge: true });
  console.log('done version', ver);
}

main().catch((e) => { console.error(e); process.exit(1); });
