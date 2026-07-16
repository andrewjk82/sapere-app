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

function plane(xmin, xmax, ymin, ymax, W = 320, H = 260, opts = {}) {
  const padL = opts.padL ?? 40;
  const padR = opts.padR ?? 20;
  const padT = opts.padT ?? 24;
  const padB = opts.padB ?? 30;
  const ox0 = opts.offsetX ?? 0;
  const oy0 = opts.offsetY ?? 0;
  const sx = (x) => ox0 + padL + ((x - xmin) / (xmax - xmin)) * (W - padL - padR);
  const sy = (y) => oy0 + padT + ((ymax - y) / (ymax - ymin)) * (H - padT - padB);
  let axes = '';
  // Always draw both axes when 0 is in range; otherwise draw a frame baseline
  // so temperature-style graphs (all y > 0) still read as coordinate planes.
  if (ymin <= 0 && ymax >= 0) {
    const oy = sy(0);
    axes += `<line x1="${(ox0 + padL).toFixed(1)}" y1="${oy.toFixed(1)}" x2="${(ox0 + W - padR).toFixed(1)}" y2="${oy.toFixed(1)}" stroke="#64748b" stroke-width="1.5"/>`;
    axes += `<text x="${(ox0 + W - padR - 2).toFixed(1)}" y="${(oy + 14).toFixed(1)}" font-size="12" fill="#64748b" font-weight="bold">x</text>`;
  } else {
    const oy = sy(ymin);
    axes += `<line x1="${(ox0 + padL).toFixed(1)}" y1="${oy.toFixed(1)}" x2="${(ox0 + W - padR).toFixed(1)}" y2="${oy.toFixed(1)}" stroke="#94a3b8" stroke-width="1"/>`;
    axes += `<text x="${(ox0 + W - padR - 2).toFixed(1)}" y="${(oy - 4).toFixed(1)}" font-size="11" fill="#64748b" font-weight="bold">x</text>`;
  }
  if (xmin <= 0 && xmax >= 0) {
    const ox = sx(0);
    axes += `<line x1="${ox.toFixed(1)}" y1="${(oy0 + padT).toFixed(1)}" x2="${ox.toFixed(1)}" y2="${(oy0 + H - padB).toFixed(1)}" stroke="#64748b" stroke-width="1.5"/>`;
    axes += `<text x="${(ox + 6).toFixed(1)}" y="${(oy0 + padT + 4).toFixed(1)}" font-size="12" fill="#64748b" font-weight="bold">y</text>`;
  } else {
    const ox = sx(xmin);
    axes += `<line x1="${ox.toFixed(1)}" y1="${(oy0 + padT).toFixed(1)}" x2="${ox.toFixed(1)}" y2="${(oy0 + H - padB).toFixed(1)}" stroke="#94a3b8" stroke-width="1"/>`;
    axes += `<text x="${(ox + 6).toFixed(1)}" y="${(oy0 + padT + 4).toFixed(1)}" font-size="11" fill="#64748b" font-weight="bold">y</text>`;
  }
  return { sx, sy, W, H, axes, padL, padR, padT, padB, ox0, oy0 };
}

/**
 * Sample a curve across [x0,x1]. Only keeps points inside the y-window; when
 * the curve exits, the path stops (no horizontal plateau along the frame edge).
 * Re-entry starts a new subpath so arms never look "cut then flat".
 */
function samplePath(fn, x0, x1, sx, sy, ymin, ymax, n = 120) {
  let d = '';
  let pen = false;
  let prev = null; // {x,y}
  for (let i = 0; i <= n; i++) {
    const x = x0 + ((x1 - x0) * i) / n;
    const y = fn(x);
    if (!Number.isFinite(y)) {
      pen = false;
      prev = null;
      continue;
    }
    const inside = y >= ymin && y <= ymax;
    if (inside) {
      if (!pen && prev) {
        // linear interpolate to the frame edge so the arm meets the border
        const yEdge = prev.y > ymax ? ymax : prev.y < ymin ? ymin : null;
        if (yEdge != null && prev.y !== y) {
          const t = (yEdge - prev.y) / (y - prev.y);
          const xEdge = prev.x + t * (x - prev.x);
          d += `M${sx(xEdge).toFixed(1)},${sy(yEdge).toFixed(1)} `;
          d += `L${sx(x).toFixed(1)},${sy(y).toFixed(1)} `;
        } else {
          d += `M${sx(x).toFixed(1)},${sy(y).toFixed(1)} `;
        }
      } else {
        d += `${pen ? 'L' : 'M'}${sx(x).toFixed(1)},${sy(y).toFixed(1)} `;
      }
      pen = true;
    } else if (pen && prev) {
      const yEdge = y > ymax ? ymax : ymin;
      if (prev.y !== y) {
        const t = (yEdge - prev.y) / (y - prev.y);
        const xEdge = prev.x + t * (x - prev.x);
        d += `L${sx(xEdge).toFixed(1)},${sy(yEdge).toFixed(1)} `;
      }
      pen = false;
    }
    prev = { x, y };
  }
  return d.trim();
}

/** Auto y-window from samples of fn on [x0,x1], always including 0 if near. */
function autoY(fn, x0, x1, n = 80, padFrac = 0.12) {
  const ys = [];
  for (let i = 0; i <= n; i++) {
    const y = fn(x0 + ((x1 - x0) * i) / n);
    if (Number.isFinite(y)) ys.push(y);
  }
  if (!ys.length) return { ymin: -1, ymax: 1 };
  let ymin = Math.min(...ys);
  let ymax = Math.max(...ys);
  // include a little air, and the axis if we are close
  if (ymin > 0) ymin = 0;
  if (ymax < 0) ymax = 0;
  const span = Math.max(1e-6, ymax - ymin);
  const pad = span * padFrac;
  return { ymin: ymin - pad, ymax: ymax + pad };
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
  // f=2x-2x² vertex (1/2,1/2); intersects g=x-1 at x=-1/2 and x=1.
  // y-window sized so both the full parabola arms and the line stay on-screen
  // (no flat plateau where a line was previously y-clamped).
  const xmin = -1.5;
  const xmax = 2.4;
  const f = (x) => 2 * x - 2 * x * x;
  const g = (x) => x - 1;
  const yf = autoY(f, xmin, xmax, 80, 0.1);
  const yg = autoY(g, xmin, xmax, 20, 0.1);
  const ymin = Math.min(yf.ymin, yg.ymin, -2.5);
  const ymax = Math.max(yf.ymax, yg.ymax, 1.2);
  const { sx, sy, W, H, axes } = plane(xmin, xmax, ymin, ymax, 340, 280);
  let body = axes;
  body += `<path d="${samplePath(f, xmin, xmax, sx, sy, ymin, ymax, 140)}" fill="none" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round"/>`;
  body += `<path d="${samplePath(g, xmin, xmax, sx, sy, ymin, ymax, 40)}" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round"/>`;
  body += mark(sx, sy, 0, 0, '(0,0)', '#6366f1', 8, 14);
  body += mark(sx, sy, 1, 0, '(1,0)', '#6366f1', 10, 14);
  body += mark(sx, sy, 0.5, 0.5, 'V(1/2, 1/2)', '#ef4444', 8, -10);
  body += mark(sx, sy, 0, -1, '(0,-1)', '#22c55e', 8, 14);
  body += mark(sx, sy, -0.5, -1.5, '(-1/2, -3/2)', '#f59e0b', -70, -6);
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
  // Domain [1,12]; force y-window to include the mean and both extrema so the
  // full sine wave is visible with x and y frame axes.
  const xmin = 0;
  const xmax = 13;
  const ymin = C - A - 2;
  const ymax = C + A + 2;
  const { sx, sy, W, H, axes } = plane(xmin, xmax, ymin, ymax, 360, 260);
  const fn = (x) => A * Math.sin((Math.PI / 6) * x + phase) + C;
  let body = axes;
  body += `<path d="${samplePath(fn, 1, 12, sx, sy, ymin, ymax, 140)}" fill="none" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round"/>`;
  // Mark every extremum in [1,12]
  for (let k = -4; k <= 8; k++) {
    const arg = Math.PI / 2 + k * Math.PI;
    const x = ((arg - phase) * 6) / Math.PI;
    if (x < 1 - 1e-6 || x > 12 + 1e-6) continue;
    const y = fn(x);
    const isMax = Math.sin(arg) > 0;
    const xl = Number.isInteger(x) ? String(x) : x.toFixed(1);
    body += mark(
      sx,
      sy,
      x,
      y,
      `(${xl},${y.toFixed(0)})`,
      isMax ? '#22c55e' : '#ef4444',
      6,
      isMax ? -8 : 14
    );
  }
  body += `<text x="44" y="28" font-size="11" fill="#6366f1" font-weight="bold">${label}</text>`;
  body += `<text x="44" y="44" font-size="10" fill="#64748b">A=${A}, mean=${C}, period=12</text>`;
  return wrapSvg(body, W, H);
}

/**
 * ASC 2020 Q22: "On separate axes, sketch y=-2f(x) and y=f(x/2+2)"
 * given f is a U-parabola through (-1,3). Model f with vertex there:
 *   f(x) = (x+1)^2 + 3
 * Then:
 *   y = -2f(x)      = -2(x+1)^2 - 6   → inverted, vertex (-1,-6)
 *   y = f(x/2+2)    = (x/2+3)^2 + 3    → wider U, vertex (-6,3)
 * Drawn as two side-by-side panels so neither curve is clipped or overlaid.
 */
function svgAsc22() {
  const f = (x) => (x + 1) ** 2 + 3;
  const fNeg2 = (x) => -2 * f(x); // -2(x+1)^2 - 6
  const fDil = (x) => f(x / 2 + 2); // (x/2 + 3)^2 + 3

  const panelW = 300;
  const panelH = 260;
  const gap = 16;
  const totalW = panelW * 2 + gap;
  const totalH = panelH + 8;

  // ── panel A: y = -2f(x) ──────────────────────────────────
  // Vertex (-1,-6). Keep arms until y ≈ -14 so the inverted U is clear.
  const aXmin = -3.2;
  const aXmax = 1.2;
  const aY = autoY(fNeg2, aXmin, aXmax, 80, 0.1);
  // force x-axis visible and a little headroom above 0
  const aYmin = Math.min(aY.ymin, -14);
  const aYmax = Math.max(aY.ymax, 2);
  const A = plane(aXmin, aXmax, aYmin, aYmax, panelW, panelH, {
    offsetX: 0,
    offsetY: 0,
    padT: 36,
  });

  // ── panel B: y = f(x/2+2) ────────────────────────────────
  // Vertex (-6,3). Wider arms; show until y ≈ 12.
  const bXmin = -12;
  const bXmax = 0;
  const bY = autoY(fDil, bXmin, bXmax, 80, 0.1);
  const bYmin = Math.min(bY.ymin, -1);
  const bYmax = Math.max(bY.ymax, 12);
  const B = plane(bXmin, bXmax, bYmin, bYmax, panelW, panelH, {
    offsetX: panelW + gap,
    offsetY: 0,
    padT: 36,
  });

  let body = '';
  // panel backgrounds
  body += `<rect x="0" y="0" width="${panelW}" height="${panelH}" rx="8" fill="#fafafa" stroke="#e2e8f0"/>`;
  body += `<rect x="${panelW + gap}" y="0" width="${panelW}" height="${panelH}" rx="8" fill="#fafafa" stroke="#e2e8f0"/>`;

  body += A.axes;
  body += B.axes;

  body += `<path d="${samplePath(fNeg2, aXmin, aXmax, A.sx, A.sy, aYmin, aYmax, 140)}" fill="none" stroke="#6366f1" stroke-width="2.6" stroke-linecap="round"/>`;
  body += `<path d="${samplePath(fDil, bXmin, bXmax, B.sx, B.sy, bYmin, bYmax, 140)}" fill="none" stroke="#f59e0b" stroke-width="2.6" stroke-linecap="round"/>`;

  // key points
  body += mark(A.sx, A.sy, -1, -6, '(-1, -6)', '#ef4444', 10, -8);
  body += mark(B.sx, B.sy, -6, 3, '(-6, 3)', '#ef4444', 10, -8);

  // panel titles
  body += `<text x="12" y="22" font-size="12" fill="#6366f1" font-weight="700">y = −2f(x)</text>`;
  body += `<text x="12" y="36" font-size="10" fill="#64748b">reflect + vertical ×2</text>`;
  body += `<text x="${panelW + gap + 12}" y="22" font-size="12" fill="#f59e0b" font-weight="700">y = f(x/2 + 2)</text>`;
  body += `<text x="${panelW + gap + 12}" y="36" font-size="10" fill="#64748b">horizontal ×2, then left 4</text>`;

  return wrapSvg(body, totalW, totalH);
}

function svgFortst10g(variant = 'a') {
  // Model curve with the documented x-intercepts and a local min, drawn as ONE
  // continuous path (previous cubic re-entered the frame after a tall local max
  // and looked "cut" into two pieces).
  let r1, r2, minX, minY, labels;
  if (variant === 'a') {
    r1 = -0.75;
    r2 = 1.25;
    minX = -0.25;
    minY = -27;
    labels = { r1: '(-3/4,0)', r2: '(5/4,0)', min: '(-1/4,-27)' };
  } else {
    r1 = -1.25;
    r2 = 0.75;
    minX = -0.75;
    minY = -27;
    labels = { r1: '(-5/4,0)', r2: '(3/4,0)', min: '(-3/4,-27)' };
  }

  // Choose third root s so y'=0 at minX (stationary point), then scale so y(minX)=minY.
  // log-derivative: 1/(minX-r1)+1/(minX-r2)+1/(minX-s)=0
  // ⇒ 1/(minX-s) = -sum ⇒ s = minX + 1/sum
  const sum = 1 / (minX - r1) + 1 / (minX - r2);
  const s = minX + 1 / sum;
  const rawMin = (minX - r1) * (minX - r2) * (minX - s);
  const a = minY / (rawMin || 1);
  const fn = (x) => a * (x - r1) * (x - r2) * (x - s);

  // Auto y-bounds from samples so the whole continuous arc stays on-screen
  // (no path break from clipping a tall local max).
  const xLo = r1 - 0.55;
  const xHi = r2 + 0.55;
  const ys = [0, minY];
  for (let i = 0; i <= 60; i++) {
    const x = xLo + ((xHi - xLo) * i) / 60;
    const y = fn(x);
    if (Number.isFinite(y)) ys.push(y);
  }
  let ymin = Math.min(...ys);
  let ymax = Math.max(...ys);
  const pad = Math.max(2, (ymax - ymin) * 0.08);
  ymin -= pad;
  ymax += pad;
  if (ymin > -1) ymin = -1;
  if (ymax < 1) ymax = 1;

  const xmin = xLo - 0.15;
  const xmax = xHi + 0.15;
  const { sx, sy, W, H, axes } = plane(xmin, xmax, ymin, ymax, 340, 280);
  let body = axes;
  // Dense continuous sample across full window — do not break the path.
  body += `<path d="${samplePath(fn, xmin, xmax, sx, sy, ymin - 1, ymax + 1, 160)}" fill="none" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`;
  body += mark(sx, sy, r1, 0, labels.r1, '#f59e0b', -48, 14);
  body += mark(sx, sy, r2, 0, labels.r2, '#f59e0b', 8, 14);
  body += mark(sx, sy, minX, minY, labels.min, '#ef4444', 8, -10);
  body += `<text x="44" y="28" font-size="11" fill="#6366f1" font-weight="bold">y=f(2(x−1/4))</text>`;
  body += `<text x="44" y="44" font-size="10" fill="#64748b">h-dilate ½, then right ¼</text>`;
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
