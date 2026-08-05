/**
 * Rebuild Year 9 Ch16A (Review of area):
 *  - all multiple_choice
 *  - SVG diagrams for figure questions
 *  - detailed problem-specific solutionSteps (4+)
 *  - corrected answer keys
 *
 * Usage: node tools/scripts/rebuildY9Ch16A.js
 * Then:  node tools/scripts/rebuildQuestionIndexes.js y9-16
 */
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');

const sa = JSON.parse(
  fs.readFileSync(
    '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
    'utf8'
  )
);
initializeApp({ credential: cert(sa) });
const db = getFirestore();

// ─── SVG helpers ─────────────────────────────────────────────────────────────
const SVG_STYLE =
  'max-width:440px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:0.5rem;';

function svgWrap(w, h, body) {
  return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="auto" style="${SVG_STYLE}" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;
}

const fill = '#dbeafe';
const stroke = '#475569';
const accent = '#3b82f6';
const textFill = '#1e293b';

function label(x, y, t, opts = {}) {
  const anchor = opts.anchor || 'middle';
  const size = opts.size || 13;
  const weight = opts.weight || 600;
  return `<text x="${x}" y="${y}" font-family="system-ui,-apple-system,sans-serif" font-size="${size}" font-weight="${weight}" fill="${textFill}" text-anchor="${anchor}" dominant-baseline="central">${t}</text>`;
}

function rectPoly(pts, extra = '') {
  const d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ') + ' Z';
  return `<path d="${d}" fill="${fill}" fill-opacity="0.55" stroke="${stroke}" stroke-width="2" stroke-linejoin="round" ${extra}/>`;
}

function dashedLine(x1, y1, x2, y2) {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${accent}" stroke-width="1.5" stroke-dasharray="5 4"/>`;
}

function solidLine(x1, y1, x2, y2, col = stroke) {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="2" stroke-linecap="round"/>`;
}

function rightAngleMark(x, y, dx, dy, size = 10) {
  // at (x,y), open along +dx and +dy unit directions
  return `<path d="M ${x + dx * size},${y} L ${x + dx * size},${y + dy * size} L ${x},${y + dy * size}" fill="none" stroke="${accent}" stroke-width="1.5"/>`;
}

// ─── Diagrams ────────────────────────────────────────────────────────────────
const diagrams = {
  rectangle_6x4: () => {
    // 6 by 4 scaled
    const ox = 50, oy = 40, w = 180, h = 120;
    return svgWrap(280, 200, [
      rectPoly([[ox, oy + h], [ox + w, oy + h], [ox + w, oy], [ox, oy]]),
      label(ox + w / 2, oy + h + 18, '6 cm'),
      label(ox + w + 22, oy + h / 2, '4 cm'),
    ].join(''));
  },

  parallelogram_6x8: () => {
    // base 6, height 8, skew 2
    const A = [40, 170], B = [160, 170], C = [200, 40], D = [80, 40];
    const H = [80, 170];
    return svgWrap(260, 220, [
      rectPoly([A, B, C, D]),
      dashedLine(D[0], D[1], H[0], H[1]),
      rightAngleMark(H[0], H[1], 1, -1, 12),
      label((A[0] + B[0]) / 2, 188, '6 cm'),
      label(H[0] - 22, 105, '8 cm'),
    ].join(''));
  },

  triangle_8x6: () => {
    const A = [40, 170], B = [220, 170], C = [130, 50];
    const H = [130, 170];
    return svgWrap(280, 220, [
      rectPoly([A, B, C]),
      dashedLine(C[0], C[1], H[0], H[1]),
      rightAngleMark(H[0], H[1], -1, -1, 12),
      label(130, 188, '8 cm'),
      label(148, 115, '6 cm'),
    ].join(''));
  },

  obtuse_triangle_6x5: () => {
    // obtuse at A, base AB=6, height from C outside
    const A = [100, 160], B = [220, 160], C = [60, 50];
    const H = [60, 160];
    return svgWrap(280, 220, [
      rectPoly([A, B, C]),
      dashedLine(C[0], C[1], H[0], H[1]),
      dashedLine(H[0], H[1], A[0], A[1]),
      rightAngleMark(H[0], H[1], 1, -1, 12),
      label(160, 178, '6 cm'),
      label(48, 105, '5 cm'),
    ].join(''));
  },

  trapezium_5_9_h4: () => {
    // parallel top 5, bottom 9, height 4
    const A = [40, 170], B = [220, 170], C = [180, 50], D = [80, 50];
    return svgWrap(280, 220, [
      rectPoly([A, B, C, D]),
      dashedLine(D[0], D[1], D[0], A[1]),
      rightAngleMark(D[0], A[1], 1, -1, 12),
      label(130, 188, '9 m'),
      label(130, 35, '5 m'),
      label(D[0] - 22, 110, '4 m'),
    ].join(''));
  },

  right_trapezium_6_8_h5: () => {
    // parallel 6 and 8, height 5, right angles on left
    const A = [50, 170], B = [210, 170], C = [170, 50], D = [50, 50];
    return svgWrap(280, 220, [
      rectPoly([A, B, C, D]),
      rightAngleMark(A[0], A[1], 1, -1, 12),
      rightAngleMark(D[0], D[1], 1, 1, 12),
      label(130, 188, '8 cm'),
      label(110, 35, '6 cm'),
      label(A[0] - 22, 110, '5 cm'),
    ].join(''));
  },

  right_trapezium_3_6_h4: () => {
    const A = [50, 170], B = [200, 170], C = [140, 60], D = [50, 60];
    return svgWrap(260, 220, [
      rectPoly([A, B, C, D]),
      rightAngleMark(A[0], A[1], 1, -1, 12),
      rightAngleMark(D[0], D[1], 1, 1, 12),
      label(125, 188, '6 cm'),
      label(95, 45, '3 cm'),
      label(A[0] - 22, 115, '4 cm'),
    ].join(''));
  },

  circle_r5: () => {
    const cx = 140, cy = 110, r = 70;
    return svgWrap(280, 220, [
      `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" fill-opacity="0.55" stroke="${stroke}" stroke-width="2"/>`,
      solidLine(cx, cy, cx + r, cy, accent),
      `<circle cx="${cx}" cy="${cy}" r="3" fill="${accent}"/>`,
      label(cx + r / 2, cy - 12, '5 cm'),
    ].join(''));
  },

  circle_d10: () => {
    const cx = 140, cy = 110, r = 70;
    return svgWrap(280, 220, [
      `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" fill-opacity="0.55" stroke="${stroke}" stroke-width="2"/>`,
      solidLine(cx - r, cy, cx + r, cy, accent),
      `<circle cx="${cx}" cy="${cy}" r="3" fill="${accent}"/>`,
      label(cx, cy - 12, '10 cm'),
    ].join(''));
  },

  parallelogram_5x3: () => {
    const A = [50, 150], B = [170, 150], C = [200, 60], D = [80, 60];
    const H = [80, 150];
    return svgWrap(260, 200, [
      rectPoly([A, B, C, D]),
      dashedLine(D[0], D[1], H[0], H[1]),
      rightAngleMark(H[0], H[1], 1, -1, 10),
      label(110, 168, '5 cm'),
      label(H[0] - 22, 105, '3 cm'),
    ].join(''));
  },

  rhombus_d8_d6: () => {
    // diagonals 8 and 6
    const O = [140, 110];
    const A = [140, 50], B = [200, 110], C = [140, 170], D = [80, 110]; // d1 vertical 6, d2 horizontal 8 scaled
    return svgWrap(280, 220, [
      rectPoly([A, B, C, D]),
      solidLine(A[0], A[1], C[0], C[1], accent),
      solidLine(D[0], D[1], B[0], B[1], accent),
      label(210, 110, '8 cm'),
      label(155, 55, '6 cm'),
    ].join(''));
  },

  kite_d18_d14: () => {
    // long diagonal vertical-ish 18, cross 14
    const A = [140, 30], B = [210, 100], C = [140, 190], D = [70, 100];
    return svgWrap(280, 230, [
      rectPoly([A, B, C, D]),
      solidLine(A[0], A[1], C[0], C[1], accent),
      solidLine(D[0], D[1], B[0], B[1], accent),
      label(155, 110, '18 cm'),
      label(140, 215, ''),
      label(140, 12, ''),
      label(225, 100, '14 cm'),
    ].join(''));
  },

  kite_d4_d16: () => {
    const A = [140, 40], B = [170, 110], C = [140, 180], D = [110, 110];
    return svgWrap(280, 230, [
      rectPoly([A, B, C, D]),
      solidLine(A[0], A[1], C[0], C[1], accent),
      solidLine(D[0], D[1], B[0], B[1], accent),
      label(155, 110, '16 m'),
      label(185, 100, '4 m'),
    ].join(''));
  },

  rhombus_d16_d24: () => {
    const A = [140, 40], B = [220, 110], C = [140, 180], D = [60, 110];
    return svgWrap(280, 230, [
      rectPoly([A, B, C, D]),
      solidLine(A[0], A[1], C[0], C[1], accent),
      solidLine(D[0], D[1], B[0], B[1], accent),
      label(230, 110, '24 mm'),
      label(155, 55, '16 mm'),
    ].join(''));
  },

  trapezium_derive: () => {
    // ABCD trapezium + dashed copy forming parallelogram
    const A = [40, 160], B = [160, 160], C = [130, 70], D = [70, 70];
    // flipped copy to the right
    const A2 = [160, 160], B2 = [280, 160], C2 = [250, 70], D2 = [190, 70];
    // actually flip: place inverted next to first
    // First: top short, bottom long. Copy rotated 180: attach so bases form one long base
    const E = [160, 160], F = [220, 160], G = [250, 70], H = [190, 70];
    // Better: original left, copy flipped right sharing side
    // Original: D--C top, A--B bottom. Copy upside down: attach C-B side
    const pts1 = [[50, 170], [170, 170], [150, 80], [90, 80]];
    // flipped copy next to it forming parallelogram
    const pts2 = [[170, 170], [290, 170], [270, 80], [150, 80]];
    return svgWrap(340, 220, [
      rectPoly(pts1),
      `<path d="M${pts2.map((p,i)=>`${i===0?'M':'L'}${p[0]},${p[1]}`).join(' ')} Z" fill="#fef3c7" fill-opacity="0.55" stroke="${stroke}" stroke-width="2" stroke-linejoin="round" stroke-dasharray="6 4"/>`,
      label(120, 195, 'b₁ + b₂'),
      label(40, 125, 'h'),
      label(110, 60, 'b₁'),
      label(110, 185, 'b₂'),
    ].join(''));
  },

  kite_derive: () => {
    // kite inside rectangle
    const A = [140, 40], B = [230, 110], C = [140, 180], D = [50, 110];
    const R = [[50, 40], [230, 40], [230, 180], [50, 180]];
    return svgWrap(300, 230, [
      `<path d="M${R.map((p,i)=>`${i===0?'M':'L'}${p[0]},${p[1]}`).join(' ')} Z" fill="#f1f5f9" stroke="${stroke}" stroke-width="1.5" stroke-dasharray="5 4"/>`,
      rectPoly([A, B, C, D]),
      solidLine(A[0], A[1], C[0], C[1], accent),
      solidLine(D[0], D[1], B[0], B[1], accent),
      label(240, 110, 'd₂'),
      label(155, 30, 'd₁'),
    ].join(''));
  },

  circle_r6: () => {
    const cx = 140, cy = 110, r = 75;
    return svgWrap(280, 220, [
      `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" fill-opacity="0.55" stroke="${stroke}" stroke-width="2"/>`,
      solidLine(cx, cy, cx + r, cy, accent),
      `<circle cx="${cx}" cy="${cy}" r="3" fill="${accent}"/>`,
      label(cx + r / 2, cy - 12, '6 cm'),
    ].join(''));
  },

  semicircle_r8: () => {
    const cx = 140, cy = 150, r = 90;
    return svgWrap(280, 200, [
      `<path d="M ${cx - r},${cy} A ${r},${r} 0 0,1 ${cx + r},${cy} Z" fill="${fill}" fill-opacity="0.55" stroke="${stroke}" stroke-width="2"/>`,
      solidLine(cx, cy, cx, cy - r, accent),
      `<circle cx="${cx}" cy="${cy}" r="3" fill="${accent}"/>`,
      label(cx + 12, cy - r / 2, '8 cm'),
    ].join(''));
  },

  quadrant_r12: () => {
    const cx = 50, cy = 180, r = 130;
    return svgWrap(220, 220, [
      `<path d="M ${cx},${cy} L ${cx + r},${cy} A ${r},${r} 0 0,0 ${cx},${cy - r} Z" fill="${fill}" fill-opacity="0.55" stroke="${stroke}" stroke-width="2"/>`,
      solidLine(cx, cy, cx + r, cy, accent),
      label(cx + r / 2, cy + 16, '12 cm'),
      rightAngleMark(cx, cy, 1, -1, 14),
    ].join(''));
  },

  sector: (rLabel, deg) => {
    // draw sector with given angle from east, counterclockwise
    const cx = 140, cy = 120, r = 80;
    const rad = (deg * Math.PI) / 180;
    const x2 = cx + r * Math.cos(-rad); // SVG y down, so negative for CCW visual from east going up
    const y2 = cy + r * Math.sin(-rad);
    const large = deg > 180 ? 1 : 0;
    // For major sector 270, arc goes the long way
    return svgWrap(280, 240, [
      `<path d="M ${cx},${cy} L ${cx + r},${cy} A ${r},${r} 0 ${large},0 ${x2},${y2} Z" fill="${fill}" fill-opacity="0.55" stroke="${stroke}" stroke-width="2"/>`,
      `<circle cx="${cx}" cy="${cy}" r="3" fill="${accent}"/>`,
      label(cx + r / 2 + 8, cy + 14, rLabel),
      // angle arc
      (() => {
        const ar = 28;
        const ax = cx + ar;
        const ay = cy;
        const bx = cx + ar * Math.cos(-rad);
        const by = cy + ar * Math.sin(-rad);
        return `<path d="M ${ax},${ay} A ${ar},${ar} 0 ${large},0 ${bx},${by}" fill="none" stroke="${accent}" stroke-width="1.5"/>`;
      })(),
      label(cx + 42 * Math.cos(-rad / 2), cy + 42 * Math.sin(-rad / 2), `${deg}°`),
    ].join(''));
  },

  annulus_4_6: () => {
    const cx = 140, cy = 120, R = 80, r = 52;
    return svgWrap(280, 240, [
      `<circle cx="${cx}" cy="${cy}" r="${R}" fill="${fill}" fill-opacity="0.55" stroke="${stroke}" stroke-width="2"/>`,
      `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#f8fafc" stroke="${stroke}" stroke-width="2"/>`,
      solidLine(cx, cy, cx + R, cy, accent),
      solidLine(cx, cy, cx, cy - r, '#10b981'),
      label(cx + R / 2 + 10, cy + 14, '6 cm'),
      label(cx + 14, cy - r / 2, '4 cm'),
    ].join(''));
  },

  L_shape: () => {
    // total 12x10, top arm 6, right notch height 4 → cutout top-right 6x4
    // Outer: (0,0)-(12,0)-(12,6)-(6,6)-(6,10)-(0,10) in math coords; SVG flip
    const s = 12; // scale
    const pts = [
      [40, 40 + 10 * s], // bottom-left
      [40 + 12 * s, 40 + 10 * s], // bottom-right
      [40 + 12 * s, 40 + 4 * s], // up right vertical 4 from bottom? wait
    ];
    // Re-read dimensions:
    // Total width 12, total height 10, top horizontal side 6, right vertical side 4
    // L: full height left 10, full width bottom 12, cutout is top-right with width 6 height 6? 
    // Solution: left rect 6x10 + right rect 6x6 (10-4=6). So right arm height is 6 from bottom, meaning top-right cutout height is 4.
    // Shape outline (origin bottom-left math):
    // (0,0)-(12,0)-(12,6)-(6,6)-(6,10)-(0,10)
    const ox = 40, oy = 30, sc = 14;
    const toSvg = (x, y) => [ox + x * sc, oy + (10 - y) * sc];
    const shape = [
      [0, 0], [12, 0], [12, 6], [6, 6], [6, 10], [0, 10],
    ].map(([x, y]) => toSvg(x, y));
    return svgWrap(260, 200, [
      rectPoly(shape),
      label(ox + 6 * sc, oy + 10 * sc + 16, '12 cm'),
      label(ox - 22, oy + 5 * sc, '10 cm'),
      label(ox + 3 * sc, oy - 8, '6 cm'),
      label(ox + 12 * sc + 18, oy + 7 * sc, '6 cm'),
    ].join(''));
  },

  U_shape: () => {
    // outer 18x15, legs 4 each, cutout height 10 → cutout width 10
    // outline bottom-left origin:
    // (0,0)-(18,0)-(18,15)-(14,15)-(14,5)-(4,5)-(4,15)-(0,15)
    const ox = 30, oy = 25, sc = 10;
    const H = 15;
    const toSvg = (x, y) => [ox + x * sc, oy + (H - y) * sc];
    const shape = [
      [0, 0], [18, 0], [18, 15], [14, 15], [14, 5], [4, 5], [4, 15], [0, 15],
    ].map(([x, y]) => toSvg(x, y));
    return svgWrap(250, 200, [
      rectPoly(shape),
      label(ox + 9 * sc, oy + H * sc + 14, '18 cm'),
      label(ox - 22, oy + 7.5 * sc, '15 cm'),
      label(ox + 2 * sc, oy + H * sc - 18, '4 cm'),
      label(ox + 16 * sc, oy + H * sc - 18, '4 cm'),
      label(ox + 9 * sc, oy + (H - 5) * sc - 12, '10 cm'),
    ].join(''));
  },

  house: () => {
    // rect 6x4, triangle roof height 3, total height 7
    const ox = 60, oy = 30, sc = 18;
    const toSvg = (x, y) => [ox + x * sc, oy + (7 - y) * sc];
    const shape = [
      [0, 0], [6, 0], [6, 4], [3, 7], [0, 4],
    ].map(([x, y]) => toSvg(x, y));
    return svgWrap(240, 200, [
      rectPoly(shape),
      solidLine(...toSvg(0, 4), ...toSvg(6, 4), accent),
      label(ox + 3 * sc, oy + 7 * sc + 14, '6 cm'),
      label(ox - 22, oy + 5 * sc, '4 cm'),
      label(ox + 6 * sc + 16, oy + 1.5 * sc, '3 cm'),
    ].join(''));
  },

  rect_semicircle: () => {
    // rect 6x3, semicircle on top diameter 6
    const ox = 50, oy = 100, sc = 22;
    const w = 6 * sc, h = 3 * sc, r = 3 * sc;
    return svgWrap(250, 220, [
      `<path d="M ${ox},${oy} L ${ox + w},${oy} L ${ox + w},${oy - h} A ${r},${r} 0 0,0 ${ox},${oy - h} Z" fill="${fill}" fill-opacity="0.55" stroke="${stroke}" stroke-width="2"/>`,
      label(ox + w / 2, oy + 16, '6 cm'),
      label(ox - 22, oy - h / 2, '3 cm'),
    ].join(''));
  },

  stadium: () => {
    // rect 15x10 with semicircles on ends
    const ox = 50, oy = 40, sc = 10;
    const L = 15 * sc, W = 10 * sc, r = 5 * sc;
    return svgWrap(320, 180, [
      `<path d="M ${ox},${oy} L ${ox + L},${oy} A ${r},${r} 0 0,1 ${ox + L},${oy + W} L ${ox},${oy + W} A ${r},${r} 0 0,1 ${ox},${oy} Z" fill="${fill}" fill-opacity="0.55" stroke="${stroke}" stroke-width="2"/>`,
      label(ox + L / 2, oy + W + 16, '15 m'),
      label(ox + L / 2, oy - 12, '10 m'),
    ].join(''));
  },

  rect_quadrant: () => {
    // rectangle 5x7 with quadrant of r=5 on the right
    // Solution says rect 5x7 + quadrant r=5. Shape: left rect, right quarter circle
    const ox = 40, oy = 30, sc = 16;
    const w = 5 * sc, h = 7 * sc, r = 5 * sc;
    // rectangle from (ox, oy) to (ox+w, oy+h), quadrant attached on right from bottom-right going up-right
    // Actually: base width 5, left height 7 — quadrant radius 5 on the right of the base?
    // Solution: rectangle 5x7 + quadrant r=5. Total base might be 5+5=10 if quadrant on side.
    // "square/rectangle on the left and quadrant on the right" with base width 5 and left height 7
    // Interpreting: left part is 5 wide and 7 tall; quadrant has r=5 attached to right of bottom portion
    return svgWrap(280, 200, [
      `<path d="M ${ox},${oy + h} L ${ox},${oy} L ${ox + w},${oy} L ${ox + w},${oy + h - r} A ${r},${r} 0 0,1 ${ox + w + r},${oy + h} Z" fill="${fill}" fill-opacity="0.55" stroke="${stroke}" stroke-width="2"/>`,
      label(ox + w / 2, oy + h + 14, '5 m'),
      label(ox - 18, oy + h / 2, '7 m'),
      label(ox + w + r / 2, oy + h + 14, '5 m'),
    ].join(''));
  },

  step_shape: () => {
    // bottom 24, left height 12, step down 2 → right height 10
    // solution: left 12x12 + right 12x10
    const ox = 30, oy = 30, sc = 8;
    const toSvg = (x, y) => [ox + x * sc, oy + (12 - y) * sc];
    const shape = [
      [0, 0], [24, 0], [24, 10], [12, 10], [12, 12], [0, 12],
    ].map(([x, y]) => toSvg(x, y));
    return svgWrap(260, 160, [
      rectPoly(shape),
      label(ox + 12 * sc, oy + 12 * sc + 14, '24 cm'),
      label(ox - 18, oy + 6 * sc, '12 cm'),
      label(ox + 18 * sc, oy + 1 * sc, '10 cm'),
    ].join(''));
  },

  composite_10h: () => {
    // rect 14x6, semicircle d=10 on top, triangle height 5 below
    const ox = 50, oy = 100, sc = 12;
    const rw = 14 * sc, rh = 6 * sc;
    const r = 5 * sc; // semicircle radius
    const th = 5 * sc;
    // rect: (ox, oy) bottom-left to (ox+rw, oy-rh)
    // semicircle on top of rect, centered (diameter 10 on top edge of width 14)
    const scx = ox + rw / 2;
    const scy = oy - rh;
    // triangle below: base 14, height 5
    return svgWrap(280, 280, [
      // triangle bottom
      `<path d="M ${ox},${oy} L ${ox + rw},${oy} L ${ox + rw / 2},${oy + th} Z" fill="${fill}" fill-opacity="0.55" stroke="${stroke}" stroke-width="2"/>`,
      // rectangle
      `<rect x="${ox}" y="${oy - rh}" width="${rw}" height="${rh}" fill="${fill}" fill-opacity="0.55" stroke="${stroke}" stroke-width="2"/>`,
      // semicircle on top (diameter 10 centered)
      `<path d="M ${scx - r},${scy} A ${r},${r} 0 0,1 ${scx + r},${scy}" fill="${fill}" fill-opacity="0.55" stroke="${stroke}" stroke-width="2"/>`,
      label(ox + rw / 2, oy + th + 14, '14 cm'),
      label(ox - 22, oy - rh / 2, '6 cm'),
      label(scx, scy - r - 10, '10 cm'),
      label(ox + rw + 16, oy + th / 2, '5 cm'),
    ].join(''));
  },
};

// ─── Question builder ────────────────────────────────────────────────────────
function mc({
  id,
  difficulty = 'easy',
  timeLimit,
  question,
  opts,
  correct, // correct option text OR index
  hint,
  solution,
  steps,
  svg = null,
}) {
  const tl = timeLimit ?? (difficulty === 'easy' ? 60 : difficulty === 'medium' ? 90 : 120);
  let a;
  if (typeof correct === 'number') {
    a = correct;
  } else {
    a = opts.findIndex((o) => o === correct);
    if (a < 0) throw new Error(`correct option not found for ${id}: ${correct}`);
  }
  const graphData = svg ? { svg } : null;
  // Put diagram on first step too for worked solution context when present
  const solutionSteps = steps.map((s, i) => ({
    explanation: s.explanation,
    workingOut: s.workingOut,
    graphData: i === 0 && svg ? { svg } : null,
  }));
  return {
    id,
    topicId: 'y9-16a',
    chapterId: 'y9-16',
    c: '16A',
    t: 'Review of area',
    type: 'multiple_choice',
    difficulty,
    timeLimit: tl,
    question,
    opts,
    a,
    answer: String(a),
    hint,
    solution,
    solutionSteps,
    graphData,
    isNew: true,
    requiresManualGrading: false,
  };
}

function steps4(parts) {
  // parts: array of {e, w}
  return parts.map((p) => ({ explanation: p.e, workingOut: p.w }));
}

// ─── Build all questions ─────────────────────────────────────────────────────
const questions = [];

// Q1a rectangle
questions.push(mc({
  id: 'y9-16a-q1a',
  difficulty: 'easy',
  question: 'Calculate the area of the rectangle shown in the diagram.\n\n- Length = \\(6\\text{ cm}\\)\n- Width = \\(4\\text{ cm}\\)',
  opts: [
    '\\(12\\text{ cm}^2\\)',
    '\\(24\\text{ cm}^2\\)',
    '\\(20\\text{ cm}^2\\)',
    '\\(10\\text{ cm}^2\\)',
  ],
  correct: '\\(24\\text{ cm}^2\\)',
  hint: 'Area of a rectangle = length \\(\\times\\) width.',
  solution: 'Area = \\(6 \\times 4 = 24\\text{ cm}^2\\).',
  svg: diagrams.rectangle_6x4(),
  steps: steps4([
    { e: 'Identify the shape and the two given dimensions from the diagram: a rectangle with length \\(6\\text{ cm}\\) and width \\(4\\text{ cm}\\).', w: '\\(\\text{Length} = 6\\text{ cm},\\quad \\text{Width} = 4\\text{ cm}\\)' },
    { e: 'Recall the area formula for a rectangle. Area is the product of the two perpendicular side lengths.', w: '\\(A = \\text{length} \\times \\text{width}\\)' },
    { e: 'Substitute the known values into the formula.', w: '\\(A = 6 \\times 4\\)' },
    { e: 'Multiply carefully and include the square unit. Check that the result matches one of the options.', w: '\\(A = 24\\text{ cm}^2\\)' },
  ]),
}));

// Q1b parallelogram
questions.push(mc({
  id: 'y9-16a-q1b',
  difficulty: 'easy',
  question: 'Calculate the area of the parallelogram shown in the diagram.\n\n- Base = \\(6\\text{ cm}\\)\n- Perpendicular height = \\(8\\text{ cm}\\)',
  opts: [
    '\\(48\\text{ cm}^2\\)',
    '\\(14\\text{ cm}^2\\)',
    '\\(24\\text{ cm}^2\\)',
    '\\(28\\text{ cm}^2\\)',
  ],
  correct: '\\(48\\text{ cm}^2\\)',
  hint: 'Area of a parallelogram = base \\(\\times\\) perpendicular height (not a slanted side).',
  solution: 'Area = \\(6 \\times 8 = 48\\text{ cm}^2\\).',
  svg: diagrams.parallelogram_6x8(),
  steps: steps4([
    { e: 'From the diagram, the base is \\(6\\text{ cm}\\) and the perpendicular height is the dashed altitude of \\(8\\text{ cm}\\). Do not use a slanted side as the height.', w: '\\(b = 6\\text{ cm},\\quad h = 8\\text{ cm}\\)' },
    { e: 'The area of a parallelogram is base times perpendicular height — the same idea as a rectangle after “pushing” the slanted sides upright.', w: '\\(A = b \\times h\\)' },
    { e: 'Substitute the values.', w: '\\(A = 6 \\times 8\\)' },
    { e: 'Evaluate and write the answer with square centimetres.', w: '\\(A = 48\\text{ cm}^2\\)' },
  ]),
}));

// Q1c triangle
questions.push(mc({
  id: 'y9-16a-q1c',
  difficulty: 'easy',
  question: 'Calculate the area of the triangle shown in the diagram.\n\n- Base = \\(8\\text{ cm}\\)\n- Height = \\(6\\text{ cm}\\)',
  opts: [
    '\\(14\\text{ cm}^2\\)',
    '\\(16\\text{ cm}^2\\)',
    '\\(48\\text{ cm}^2\\)',
    '\\(24\\text{ cm}^2\\)',
  ],
  correct: '\\(24\\text{ cm}^2\\)',
  hint: 'Area of a triangle = \\(\\dfrac{1}{2} \\times\\) base \\(\\times\\) height.',
  solution: 'Area = \\(\\dfrac{1}{2} \\times 8 \\times 6 = 24\\text{ cm}^2\\).',
  svg: diagrams.triangle_8x6(),
  steps: steps4([
    { e: 'Read the base and the perpendicular height from the diagram. The height meets the base at right angles.', w: '\\(b = 8\\text{ cm},\\quad h = 6\\text{ cm}\\)' },
    { e: 'A triangle is half of a parallelogram (or rectangle) with the same base and height, so the formula includes the factor \\(\\tfrac{1}{2}\\).', w: '\\(A = \\dfrac{1}{2}bh\\)' },
    { e: 'Substitute and multiply base by height first.', w: '\\(A = \\dfrac{1}{2} \\times 8 \\times 6 = \\dfrac{1}{2} \\times 48\\)' },
    { e: 'Halve to finish, and attach the correct unit.', w: '\\(A = 24\\text{ cm}^2\\)' },
  ]),
}));

// Q1d obtuse triangle
questions.push(mc({
  id: 'y9-16a-q1d',
  difficulty: 'easy',
  question: 'Calculate the area of the obtuse-angled triangle shown in the diagram.\n\n- Base = \\(6\\text{ cm}\\)\n- Height = \\(5\\text{ cm}\\)',
  opts: [
    '\\(30\\text{ cm}^2\\)',
    '\\(15\\text{ cm}^2\\)',
    '\\(20\\text{ cm}^2\\)',
    '\\(11\\text{ cm}^2\\)',
  ],
  correct: '\\(15\\text{ cm}^2\\)',
  hint: 'Even when the height falls outside the triangle, area is still \\(\\dfrac{1}{2}bh\\).',
  solution: 'Area = \\(\\dfrac{1}{2} \\times 6 \\times 5 = 15\\text{ cm}^2\\).',
  svg: diagrams.obtuse_triangle_6x5(),
  steps: steps4([
    { e: 'The triangle is obtuse, so the perpendicular height from the opposite vertex lands outside the base. The diagram still labels base \\(6\\text{ cm}\\) and height \\(5\\text{ cm}\\).', w: '\\(b = 6\\text{ cm},\\quad h = 5\\text{ cm}\\)' },
    { e: 'The area formula does not change for obtuse triangles — still half base times perpendicular height.', w: '\\(A = \\dfrac{1}{2}bh\\)' },
    { e: 'Substitute the values.', w: '\\(A = \\dfrac{1}{2} \\times 6 \\times 5 = \\dfrac{1}{2} \\times 30\\)' },
    { e: 'Simplify to the final area.', w: '\\(A = 15\\text{ cm}^2\\)' },
  ]),
}));

// Q1e trapezium
questions.push(mc({
  id: 'y9-16a-q1e',
  difficulty: 'easy',
  question: 'Calculate the area of the trapezium shown in the diagram.\n\n- Parallel sides = \\(5\\text{ m}\\) and \\(9\\text{ m}\\)\n- Height = \\(4\\text{ m}\\)',
  opts: [
    '\\(28\\text{ m}^2\\)',
    '\\(14\\text{ m}^2\\)',
    '\\(36\\text{ m}^2\\)',
    '\\(56\\text{ m}^2\\)',
  ],
  correct: '\\(28\\text{ m}^2\\)',
  hint: 'Area of a trapezium = \\(\\dfrac{1}{2}(a + b)h\\), where \\(a\\) and \\(b\\) are the parallel sides.',
  solution: 'Area = \\(\\dfrac{1}{2}(5 + 9) \\times 4 = 28\\text{ m}^2\\).',
  svg: diagrams.trapezium_5_9_h4(),
  steps: steps4([
    { e: 'A trapezium has one pair of parallel sides. Here those lengths are \\(a = 5\\text{ m}\\) and \\(b = 9\\text{ m}\\), with perpendicular height \\(h = 4\\text{ m}\\).', w: '\\(a = 5,\\; b = 9,\\; h = 4\\) (all in m)' },
    { e: 'Use the trapezium area formula: average the two parallel sides, then multiply by the height.', w: '\\(A = \\dfrac{1}{2}(a + b)h\\)' },
    { e: 'Add the parallel sides, then multiply by the height.', w: '\\(A = \\dfrac{1}{2}(5 + 9) \\times 4 = \\dfrac{1}{2} \\times 14 \\times 4\\)' },
    { e: 'Compute \\(\\tfrac{1}{2} \\times 14 = 7\\), then \\(7 \\times 4 = 28\\).', w: '\\(A = 28\\text{ m}^2\\)' },
  ]),
}));

// Q1f right trapezium
questions.push(mc({
  id: 'y9-16a-q1f',
  difficulty: 'easy',
  question: 'Calculate the area of the right-angled trapezium shown in the diagram.\n\n- Height = \\(5\\text{ cm}\\)\n- Parallel sides = \\(6\\text{ cm}\\) and \\(8\\text{ cm}\\)',
  opts: [
    '\\(30\\text{ cm}^2\\)',
    '\\(35\\text{ cm}^2\\)',
    '\\(70\\text{ cm}^2\\)',
    '\\(40\\text{ cm}^2\\)',
  ],
  correct: '\\(35\\text{ cm}^2\\)',
  hint: 'Right angles mark the perpendicular height. Still use \\(\\dfrac{1}{2}(a + b)h\\).',
  solution: 'Area = \\(\\dfrac{1}{2}(6 + 8) \\times 5 = 35\\text{ cm}^2\\).',
  svg: diagrams.right_trapezium_6_8_h5(),
  steps: steps4([
    { e: 'The right angles show that the vertical side is the perpendicular height \\(h = 5\\text{ cm}\\). The two parallel sides are \\(6\\text{ cm}\\) and \\(8\\text{ cm}\\).', w: '\\(a = 6,\\; b = 8,\\; h = 5\\) (cm)' },
    { e: 'Apply the trapezium formula.', w: '\\(A = \\dfrac{1}{2}(a + b)h\\)' },
    { e: 'Substitute and simplify the sum of the parallel sides.', w: '\\(A = \\dfrac{1}{2}(6 + 8) \\times 5 = \\dfrac{1}{2} \\times 14 \\times 5\\)' },
    { e: 'Evaluate: \\(\\tfrac{1}{2} \\times 14 = 7\\), then \\(7 \\times 5 = 35\\).', w: '\\(A = 35\\text{ cm}^2\\)' },
  ]),
}));

// Q1g circle r=5 — FIX answer to 25π
questions.push(mc({
  id: 'y9-16a-q1g',
  difficulty: 'easy',
  question: 'Calculate the area of the circle with radius \\(5\\text{ cm}\\). Give the answer in exact form and correct to two decimal places.',
  opts: [
    '\\(100\\pi\\text{ cm}^2\\) (approx. \\(314.16\\text{ cm}^2\\))',
    '\\(25\\pi\\text{ cm}^2\\) (approx. \\(78.54\\text{ cm}^2\\))',
    '\\(10\\pi\\text{ cm}^2\\) (approx. \\(31.42\\text{ cm}^2\\))',
    '\\(5\\pi\\text{ cm}^2\\) (approx. \\(15.71\\text{ cm}^2\\))',
  ],
  correct: '\\(25\\pi\\text{ cm}^2\\) (approx. \\(78.54\\text{ cm}^2\\))',
  hint: 'Area of a circle = \\(\\pi r^2\\). Square the radius, then multiply by \\(\\pi\\).',
  solution: 'Area = \\(\\pi \\times 5^2 = 25\\pi\\text{ cm}^2 \\approx 78.54\\text{ cm}^2\\).',
  svg: diagrams.circle_r5(),
  steps: steps4([
    { e: 'The radius is given as \\(r = 5\\text{ cm}\\).', w: '\\(r = 5\\text{ cm}\\)' },
    { e: 'Use the circle area formula \\(A = \\pi r^2\\).', w: '\\(A = \\pi r^2\\)' },
    { e: 'Square the radius: \\(5^2 = 25\\). The exact area is therefore \\(25\\pi\\).', w: '\\(A = \\pi \\times 5^2 = 25\\pi\\text{ cm}^2\\)' },
    { e: 'For a two-decimal approximation use \\(\\pi \\approx 3.1416\\): \\(25 \\times 3.1416 \\approx 78.54\\).', w: '\\(A \\approx 78.54\\text{ cm}^2\\)' },
  ]),
}));

// Q1h circle d=10 — FIX answer to 25π
questions.push(mc({
  id: 'y9-16a-q1h',
  difficulty: 'easy',
  question: 'Calculate the area of a circle with a diameter of \\(10\\text{ cm}\\). Give the answer in exact form and correct to two decimal places.',
  opts: [
    '\\(50\\pi\\text{ cm}^2\\) (approx. \\(157.08\\text{ cm}^2\\))',
    '\\(20\\pi\\text{ cm}^2\\) (approx. \\(62.83\\text{ cm}^2\\))',
    '\\(100\\pi\\text{ cm}^2\\) (approx. \\(314.16\\text{ cm}^2\\))',
    '\\(25\\pi\\text{ cm}^2\\) (approx. \\(78.54\\text{ cm}^2\\))',
  ],
  correct: '\\(25\\pi\\text{ cm}^2\\) (approx. \\(78.54\\text{ cm}^2\\))',
  hint: 'First find the radius: \\(r = d/2\\). Then use \\(A = \\pi r^2\\).',
  solution: 'Radius \\(r = 5\\text{ cm}\\). Area = \\(25\\pi\\text{ cm}^2 \\approx 78.54\\text{ cm}^2\\).',
  svg: diagrams.circle_d10(),
  steps: steps4([
    { e: 'The diameter is \\(10\\text{ cm}\\). Radius is half the diameter.', w: '\\(r = \\dfrac{d}{2} = \\dfrac{10}{2} = 5\\text{ cm}\\)' },
    { e: 'Write the circle area formula.', w: '\\(A = \\pi r^2\\)' },
    { e: 'Substitute \\(r = 5\\) to get the exact area.', w: '\\(A = \\pi \\times 5^2 = 25\\pi\\text{ cm}^2\\)' },
    { e: 'Approximate: \\(25\\pi \\approx 78.54\\text{ cm}^2\\) (2 d.p.).', w: '\\(A \\approx 78.54\\text{ cm}^2\\)' },
  ]),
}));

// Q1i right trapezium 3,6 h=4
questions.push(mc({
  id: 'y9-16a-q1i',
  difficulty: 'easy',
  question: 'Calculate the area of the right-angled trapezium shown in the diagram.\n\n- Height = \\(4\\text{ cm}\\)\n- Parallel sides = \\(3\\text{ cm}\\) and \\(6\\text{ cm}\\)',
  opts: [
    '\\(12\\text{ cm}^2\\)',
    '\\(36\\text{ cm}^2\\)',
    '\\(18\\text{ cm}^2\\)',
    '\\(15\\text{ cm}^2\\)',
  ],
  correct: '\\(18\\text{ cm}^2\\)',
  hint: 'Area = \\(\\dfrac{1}{2}(a + b)h\\).',
  solution: 'Area = \\(\\dfrac{1}{2}(3 + 6) \\times 4 = 18\\text{ cm}^2\\).',
  svg: diagrams.right_trapezium_3_6_h4(),
  steps: steps4([
    { e: 'Parallel sides are \\(3\\text{ cm}\\) and \\(6\\text{ cm}\\); the perpendicular height is \\(4\\text{ cm}\\).', w: '\\(a = 3,\\; b = 6,\\; h = 4\\)' },
    { e: 'Use the trapezium area formula.', w: '\\(A = \\dfrac{1}{2}(a + b)h\\)' },
    { e: 'Add the parallel sides, then multiply by height.', w: '\\(A = \\dfrac{1}{2}(3 + 6) \\times 4 = \\dfrac{1}{2} \\times 9 \\times 4\\)' },
    { e: 'Simplify: \\(\\tfrac{1}{2} \\times 9 = 4.5\\), then \\(4.5 \\times 4 = 18\\).', w: '\\(A = 18\\text{ cm}^2\\)' },
  ]),
}));

// Q1j parallelogram 5x3
questions.push(mc({
  id: 'y9-16a-q1j',
  difficulty: 'easy',
  question: 'Calculate the area of the parallelogram shown in the diagram.\n\n- Base = \\(5\\text{ cm}\\)\n- Height = \\(3\\text{ cm}\\)',
  opts: [
    '\\(10\\text{ cm}^2\\)',
    '\\(8\\text{ cm}^2\\)',
    '\\(15\\text{ cm}^2\\)',
    '\\(7.5\\text{ cm}^2\\)',
  ],
  correct: '\\(15\\text{ cm}^2\\)',
  hint: 'Area = base \\(\\times\\) height.',
  solution: 'Area = \\(5 \\times 3 = 15\\text{ cm}^2\\).',
  svg: diagrams.parallelogram_5x3(),
  steps: steps4([
    { e: 'Base \\(b = 5\\text{ cm}\\) and perpendicular height \\(h = 3\\text{ cm}\\) are marked on the diagram.', w: '\\(b = 5\\text{ cm},\\quad h = 3\\text{ cm}\\)' },
    { e: 'Parallelogram area formula: product of base and perpendicular height.', w: '\\(A = bh\\)' },
    { e: 'Substitute.', w: '\\(A = 5 \\times 3\\)' },
    { e: 'Multiply to obtain the area.', w: '\\(A = 15\\text{ cm}^2\\)' },
  ]),
}));

// Q2a rhombus
questions.push(mc({
  id: 'y9-16a-q2a',
  difficulty: 'easy',
  question: 'Calculate the area of the rhombus with diagonals of length \\(8\\text{ cm}\\) and \\(6\\text{ cm}\\).',
  opts: [
    '\\(14\\text{ cm}^2\\)',
    '\\(12\\text{ cm}^2\\)',
    '\\(24\\text{ cm}^2\\)',
    '\\(48\\text{ cm}^2\\)',
  ],
  correct: '\\(24\\text{ cm}^2\\)',
  hint: 'Area of a rhombus = \\(\\dfrac{1}{2} \\times d_1 \\times d_2\\).',
  solution: 'Area = \\(\\dfrac{1}{2} \\times 8 \\times 6 = 24\\text{ cm}^2\\).',
  svg: diagrams.rhombus_d8_d6(),
  steps: steps4([
    { e: 'A rhombus has perpendicular diagonals. Here \\(d_1 = 8\\text{ cm}\\) and \\(d_2 = 6\\text{ cm}\\).', w: '\\(d_1 = 8\\text{ cm},\\quad d_2 = 6\\text{ cm}\\)' },
    { e: 'The area formula using diagonals is half their product (the diagonals split the rhombus into four right triangles).', w: '\\(A = \\dfrac{1}{2}d_1 d_2\\)' },
    { e: 'Substitute the diagonal lengths.', w: '\\(A = \\dfrac{1}{2} \\times 8 \\times 6 = \\dfrac{1}{2} \\times 48\\)' },
    { e: 'Halve to finish.', w: '\\(A = 24\\text{ cm}^2\\)' },
  ]),
}));

// Q2b kite
questions.push(mc({
  id: 'y9-16a-q2b',
  difficulty: 'easy',
  question: 'Calculate the area of the kite with diagonals of length \\(18\\text{ cm}\\) and \\(14\\text{ cm}\\).',
  opts: [
    '\\(252\\text{ cm}^2\\)',
    '\\(126\\text{ cm}^2\\)',
    '\\(32\\text{ cm}^2\\)',
    '\\(63\\text{ cm}^2\\)',
  ],
  correct: '\\(126\\text{ cm}^2\\)',
  hint: 'Area of a kite = \\(\\dfrac{1}{2} \\times d_1 \\times d_2\\).',
  solution: 'Area = \\(\\dfrac{1}{2} \\times 18 \\times 14 = 126\\text{ cm}^2\\).',
  svg: diagrams.kite_d18_d14(),
  steps: steps4([
    { e: 'The diagonals of a kite are perpendicular. Given lengths: \\(18\\text{ cm}\\) and \\(14\\text{ cm}\\).', w: '\\(d_1 = 18\\text{ cm},\\quad d_2 = 14\\text{ cm}\\)' },
    { e: 'Use the diagonal formula for a kite.', w: '\\(A = \\dfrac{1}{2}d_1 d_2\\)' },
    { e: 'Multiply the diagonals: \\(18 \\times 14 = 252\\).', w: '\\(A = \\dfrac{1}{2} \\times 18 \\times 14 = \\dfrac{1}{2} \\times 252\\)' },
    { e: 'Halve \\(252\\) to get the area.', w: '\\(A = 126\\text{ cm}^2\\)' },
  ]),
}));

// Q2c kite
questions.push(mc({
  id: 'y9-16a-q2c',
  difficulty: 'easy',
  question: 'Calculate the area of the kite with diagonals of length \\(4\\text{ m}\\) and \\(16\\text{ m}\\).',
  opts: [
    '\\(64\\text{ m}^2\\)',
    '\\(20\\text{ m}^2\\)',
    '\\(32\\text{ m}^2\\)',
    '\\(16\\text{ m}^2\\)',
  ],
  correct: '\\(32\\text{ m}^2\\)',
  hint: 'Area = \\(\\dfrac{1}{2}d_1 d_2\\).',
  solution: 'Area = \\(\\dfrac{1}{2} \\times 4 \\times 16 = 32\\text{ m}^2\\).',
  svg: diagrams.kite_d4_d16(),
  steps: steps4([
    { e: 'Diagonals: \\(d_1 = 4\\text{ m}\\), \\(d_2 = 16\\text{ m}\\).', w: '\\(d_1 = 4\\text{ m},\\quad d_2 = 16\\text{ m}\\)' },
    { e: 'Kite area formula with diagonals.', w: '\\(A = \\dfrac{1}{2}d_1 d_2\\)' },
    { e: 'Substitute.', w: '\\(A = \\dfrac{1}{2} \\times 4 \\times 16 = 2 \\times 16\\)' },
    { e: 'Simplify.', w: '\\(A = 32\\text{ m}^2\\)' },
  ]),
}));

// Q2d rhombus
questions.push(mc({
  id: 'y9-16a-q2d',
  difficulty: 'easy',
  question: 'Calculate the area of the rhombus with diagonals of length \\(16\\text{ mm}\\) and \\(24\\text{ mm}\\).',
  opts: [
    '\\(192\\text{ mm}^2\\)',
    '\\(96\\text{ mm}^2\\)',
    '\\(384\\text{ mm}^2\\)',
    '\\(40\\text{ mm}^2\\)',
  ],
  correct: '\\(192\\text{ mm}^2\\)',
  hint: 'Area = \\(\\dfrac{1}{2}d_1 d_2\\).',
  solution: 'Area = \\(\\dfrac{1}{2} \\times 16 \\times 24 = 192\\text{ mm}^2\\).',
  svg: diagrams.rhombus_d16_d24(),
  steps: steps4([
    { e: 'Diagonals of the rhombus: \\(16\\text{ mm}\\) and \\(24\\text{ mm}\\).', w: '\\(d_1 = 16\\text{ mm},\\quad d_2 = 24\\text{ mm}\\)' },
    { e: 'Apply \\(A = \\tfrac{1}{2}d_1 d_2\\).', w: '\\(A = \\dfrac{1}{2}d_1 d_2\\)' },
    { e: 'Compute half of 16 first to simplify: \\(\\tfrac{1}{2} \\times 16 = 8\\).', w: '\\(A = 8 \\times 24\\)' },
    { e: 'Multiply: \\(8 \\times 24 = 192\\).', w: '\\(A = 192\\text{ mm}^2\\)' },
  ]),
}));

// Q3a–f (no diagrams required, but add simple SVGs for shapes)
questions.push(mc({
  id: 'y9-16a-q3a',
  difficulty: 'easy',
  question: 'Find the area of a rectangle with side lengths \\(4\\text{ m}\\) and \\(7\\text{ m}\\).',
  opts: ['\\(22\\text{ m}^2\\)', '\\(11\\text{ m}^2\\)', '\\(28\\text{ m}^2\\)', '\\(14\\text{ m}^2\\)'],
  correct: '\\(28\\text{ m}^2\\)',
  hint: 'Area = length \\(\\times\\) width.',
  solution: 'Area = \\(4 \\times 7 = 28\\text{ m}^2\\).',
  svg: (() => {
    const ox = 50, oy = 50, w = 160, h = 90;
    return svgWrap(260, 190, [
      rectPoly([[ox, oy + h], [ox + w, oy + h], [ox + w, oy], [ox, oy]]),
      label(ox + w / 2, oy + h + 16, '7 m'),
      label(ox + w + 18, oy + h / 2, '4 m'),
    ].join(''));
  })(),
  steps: steps4([
    { e: 'A rectangle has sides \\(4\\text{ m}\\) and \\(7\\text{ m}\\).', w: '\\(\\ell = 7\\text{ m},\\quad w = 4\\text{ m}\\)' },
    { e: 'Area formula for a rectangle.', w: '\\(A = \\ell \\times w\\)' },
    { e: 'Substitute.', w: '\\(A = 7 \\times 4\\)' },
    { e: 'Multiply.', w: '\\(A = 28\\text{ m}^2\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-16a-q3b',
  difficulty: 'easy',
  question: 'Find the area of a square with side length \\(8\\text{ cm}\\).',
  opts: ['\\(80\\text{ cm}^2\\)', '\\(16\\text{ cm}^2\\)', '\\(64\\text{ cm}^2\\)', '\\(32\\text{ cm}^2\\)'],
  correct: '\\(64\\text{ cm}^2\\)',
  hint: 'Area of a square = side\\(^2\\).',
  solution: 'Area = \\(8^2 = 64\\text{ cm}^2\\).',
  svg: (() => {
    const ox = 70, oy = 40, s = 120;
    return svgWrap(260, 200, [
      rectPoly([[ox, oy + s], [ox + s, oy + s], [ox + s, oy], [ox, oy]]),
      label(ox + s / 2, oy + s + 16, '8 cm'),
      label(ox + s + 18, oy + s / 2, '8 cm'),
    ].join(''));
  })(),
  steps: steps4([
    { e: 'A square has all sides equal; each side is \\(8\\text{ cm}\\).', w: '\\(s = 8\\text{ cm}\\)' },
    { e: 'Area of a square is the side length squared.', w: '\\(A = s^2\\)' },
    { e: 'Square 8.', w: '\\(A = 8 \\times 8 = 64\\)' },
    { e: 'Include the square unit.', w: '\\(A = 64\\text{ cm}^2\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-16a-q3c',
  difficulty: 'easy',
  question: 'Find the area of a circle with a diameter of \\(10\\text{ m}\\). Give the answer in exact form.',
  opts: ['\\(5\\pi\\text{ m}^2\\)', '\\(50\\pi\\text{ m}^2\\)', '\\(100\\pi\\text{ m}^2\\)', '\\(25\\pi\\text{ m}^2\\)'],
  correct: '\\(25\\pi\\text{ m}^2\\)',
  hint: 'First find \\(r = d/2\\), then \\(A = \\pi r^2\\).',
  solution: 'Radius \\(r = 5\\text{ m}\\). Area = \\(25\\pi\\text{ m}^2\\).',
  svg: diagrams.circle_d10().replace(/10 cm/g, '10 m').replace(/5 cm/g, '5 m'),
  steps: steps4([
    { e: 'Diameter is \\(10\\text{ m}\\), so the radius is half of that.', w: '\\(r = \\dfrac{10}{2} = 5\\text{ m}\\)' },
    { e: 'Circle area formula.', w: '\\(A = \\pi r^2\\)' },
    { e: 'Substitute \\(r = 5\\).', w: '\\(A = \\pi \\times 5^2 = 25\\pi\\)' },
    { e: 'Leave the answer in exact form with the correct unit.', w: '\\(A = 25\\pi\\text{ m}^2\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-16a-q3d',
  difficulty: 'easy',
  question: 'Find the area of a rhombus with diagonals \\(8\\text{ cm}\\) and \\(5\\text{ cm}\\).',
  opts: ['\\(40\\text{ cm}^2\\)', '\\(20\\text{ cm}^2\\)', '\\(13\\text{ cm}^2\\)', '\\(10\\text{ cm}^2\\)'],
  correct: '\\(20\\text{ cm}^2\\)',
  hint: 'Area = \\(\\dfrac{1}{2}d_1 d_2\\).',
  solution: 'Area = \\(\\dfrac{1}{2} \\times 8 \\times 5 = 20\\text{ cm}^2\\).',
  svg: diagrams.rhombus_d8_d6().replace('8 cm', '8 cm').replace('6 cm', '5 cm'),
  steps: steps4([
    { e: 'Diagonals: \\(8\\text{ cm}\\) and \\(5\\text{ cm}\\).', w: '\\(d_1 = 8,\\; d_2 = 5\\)' },
    { e: 'Rhombus area using diagonals.', w: '\\(A = \\dfrac{1}{2}d_1 d_2\\)' },
    { e: 'Substitute.', w: '\\(A = \\dfrac{1}{2} \\times 8 \\times 5 = 4 \\times 5\\)' },
    { e: 'Multiply.', w: '\\(A = 20\\text{ cm}^2\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-16a-q3e',
  difficulty: 'easy',
  question: 'Find the area of a kite with diagonals \\(4\\text{ m}\\) and \\(3\\text{ m}\\).',
  opts: ['\\(7\\text{ m}^2\\)', '\\(3.5\\text{ m}^2\\)', '\\(6\\text{ m}^2\\)', '\\(12\\text{ m}^2\\)'],
  correct: '\\(6\\text{ m}^2\\)',
  hint: 'Area = \\(\\dfrac{1}{2}d_1 d_2\\).',
  solution: 'Area = \\(\\dfrac{1}{2} \\times 4 \\times 3 = 6\\text{ m}^2\\).',
  svg: diagrams.kite_d4_d16().replace('16 m', '3 m').replace('4 m', '4 m'),
  steps: steps4([
    { e: 'Diagonals of the kite are \\(4\\text{ m}\\) and \\(3\\text{ m}\\).', w: '\\(d_1 = 4\\text{ m},\\; d_2 = 3\\text{ m}\\)' },
    { e: 'Use the kite diagonal formula.', w: '\\(A = \\dfrac{1}{2}d_1 d_2\\)' },
    { e: 'Substitute.', w: '\\(A = \\dfrac{1}{2} \\times 4 \\times 3 = 2 \\times 3\\)' },
    { e: 'Simplify.', w: '\\(A = 6\\text{ m}^2\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-16a-q3f',
  difficulty: 'medium',
  question: 'Find the area of a square with a diagonal of length \\(8\\text{ cm}\\).',
  opts: ['\\(32\\text{ cm}^2\\)', '\\(8\\text{ cm}^2\\)', '\\(16\\text{ cm}^2\\)', '\\(64\\text{ cm}^2\\)'],
  correct: '\\(32\\text{ cm}^2\\)',
  hint: 'A square is a rhombus with equal diagonals: \\(A = \\dfrac{1}{2}d^2\\).',
  solution: 'Area = \\(\\dfrac{1}{2} \\times 8^2 = 32\\text{ cm}^2\\).',
  svg: (() => {
    const A = [140, 40], B = [220, 120], C = [140, 200], D = [60, 120];
    return svgWrap(280, 240, [
      rectPoly([A, B, C, D]),
      solidLine(A[0], A[1], C[0], C[1], accent),
      label(155, 120, '8 cm'),
    ].join(''));
  })(),
  steps: steps4([
    { e: 'In a square both diagonals are equal and perpendicular, each of length \\(d = 8\\text{ cm}\\).', w: '\\(d_1 = d_2 = 8\\text{ cm}\\)' },
    { e: 'Treat the square as a rhombus and use the diagonal area formula.', w: '\\(A = \\dfrac{1}{2}d_1 d_2 = \\dfrac{1}{2}d^2\\)' },
    { e: 'Square the diagonal: \\(8^2 = 64\\).', w: '\\(A = \\dfrac{1}{2} \\times 64\\)' },
    { e: 'Halve to obtain the area of the square.', w: '\\(A = 32\\text{ cm}^2\\)' },
  ]),
}));

// Q4 derive trapezium — convert to MC
questions.push(mc({
  id: 'y9-16a-q4',
  difficulty: 'medium',
  timeLimit: 90,
  question: 'A trapezium has parallel sides of lengths \\(b_1\\) and \\(b_2\\) and perpendicular height \\(h\\). By placing a second identical copy upside down next to the first, a parallelogram is formed. What is the correct derivation of the trapezium area formula?',
  opts: [
    '\\(A = (b_1 + b_2)h\\) because the parallelogram has base \\(b_1 + b_2\\) and height \\(h\\)',
    '\\(A = b_1 b_2 h\\) by multiplying all three given lengths',
    '\\(A = \\dfrac{1}{2}(b_1 + b_2)h\\), since the parallelogram of area \\((b_1 + b_2)h\\) is made of two identical trapeziums',
    '\\(A = \\dfrac{1}{2}b_1 b_2\\), treating the parallel sides like diagonals of a kite',
  ],
  correct: '\\(A = \\dfrac{1}{2}(b_1 + b_2)h\\), since the parallelogram of area \\((b_1 + b_2)h\\) is made of two identical trapeziums',
  hint: 'Two copies make a parallelogram of base \\(b_1 + b_2\\) and height \\(h\\); one trapezium is half of that.',
  solution: 'Two copies form a parallelogram of area \\((b_1 + b_2)h\\). One trapezium is half: \\(A = \\dfrac{1}{2}(b_1 + b_2)h\\).',
  svg: diagrams.trapezium_derive(),
  steps: steps4([
    { e: 'Start with trapezium \\(ABCD\\) having parallel sides \\(b_1\\) and \\(b_2\\) and height \\(h\\). Make a second identical copy and rotate it \\(180^\\circ\\) so the two non-parallel sides join.', w: '\\(\\text{Two congruent trapeziums}\\)' },
    { e: 'The combined figure is a parallelogram whose base is the sum of the two parallel sides and whose height is still \\(h\\).', w: '\\(A_{\\text{parallelogram}} = (b_1 + b_2)h\\)' },
    { e: 'The parallelogram is made of two identical trapeziums, so each has half the parallelogram’s area.', w: '\\(A_{\\text{trapezium}} = \\dfrac{1}{2}(b_1 + b_2)h\\)' },
    { e: 'This is the standard trapezium formula. Choose the option that states both the parallelogram area and the final half-factor.', w: '\\(A = \\dfrac{1}{2}(b_1 + b_2)h\\)' },
  ]),
}));

// Q5 derive kite — convert to MC
questions.push(mc({
  id: 'y9-16a-q5',
  difficulty: 'medium',
  timeLimit: 90,
  question: 'A kite has perpendicular diagonals of lengths \\(d_1\\) and \\(d_2\\). It is enclosed in a rectangle of dimensions \\(d_1 \\times d_2\\). Which statement correctly derives the kite’s area?',
  opts: [
    '\\(A = d_1 d_2\\) because the kite fills the whole rectangle',
    '\\(A = 2d_1 d_2\\) because four triangles make two rectangles',
    '\\(A = \\dfrac{1}{4}d_1 d_2\\) because only one of the four right triangles is shaded',
    '\\(A = \\dfrac{1}{2}d_1 d_2\\) because the kite occupies exactly half of the enclosing rectangle',
  ],
  correct: '\\(A = \\dfrac{1}{2}d_1 d_2\\) because the kite occupies exactly half of the enclosing rectangle',
  hint: 'The kite’s four right triangles match the four corner triangles left outside it — so the kite is half the rectangle.',
  solution: 'Rectangle area = \\(d_1 d_2\\). The kite is half of that rectangle: \\(A = \\dfrac{1}{2}d_1 d_2\\).',
  svg: diagrams.kite_derive(),
  steps: steps4([
    { e: 'Enclose the kite in a rectangle whose sides are parallel to the diagonals, so the rectangle measures \\(d_1\\) by \\(d_2\\).', w: '\\(A_{\\text{rectangle}} = d_1 d_2\\)' },
    { e: 'The diagonals divide the rectangle into four smaller rectangles, each split by a kite side into two congruent right triangles — one inside the kite and one outside.', w: '\\(\\text{4 inner triangles} = \\text{4 outer triangles}\\)' },
    { e: 'Therefore the kite’s area equals the total of the outer corner regions, which is half the rectangle.', w: '\\(A_{\\text{kite}} = \\dfrac{1}{2}A_{\\text{rectangle}}\\)' },
    { e: 'Substitute the rectangle area to obtain the standard formula.', w: '\\(A = \\dfrac{1}{2}d_1 d_2\\)' },
  ]),
}));

// Q6a circle r=6
questions.push(mc({
  id: 'y9-16a-q6a',
  difficulty: 'easy',
  question: 'Find the area of the circle with radius \\(6\\text{ cm}\\). Give the answer in exact form.',
  opts: ['\\(12\\pi\\text{ cm}^2\\)', '\\(6\\pi\\text{ cm}^2\\)', '\\(18\\pi\\text{ cm}^2\\)', '\\(36\\pi\\text{ cm}^2\\)'],
  correct: '\\(36\\pi\\text{ cm}^2\\)',
  hint: 'Area = \\(\\pi r^2\\).',
  solution: 'Area = \\(\\pi \\times 6^2 = 36\\pi\\text{ cm}^2\\).',
  svg: diagrams.circle_r6(),
  steps: steps4([
    { e: 'Radius is \\(r = 6\\text{ cm}\\).', w: '\\(r = 6\\text{ cm}\\)' },
    { e: 'Circle area formula.', w: '\\(A = \\pi r^2\\)' },
    { e: 'Square the radius: \\(6^2 = 36\\).', w: '\\(A = \\pi \\times 36\\)' },
    { e: 'Write the exact area.', w: '\\(A = 36\\pi\\text{ cm}^2\\)' },
  ]),
}));

// Q6bi semicircle
questions.push(mc({
  id: 'y9-16a-q6bi',
  difficulty: 'easy',
  question: 'Calculate the area of the semicircle with radius \\(8\\text{ cm}\\). Give the answer in exact form.',
  opts: ['\\(64\\pi\\text{ cm}^2\\)', '\\(16\\pi\\text{ cm}^2\\)', '\\(32\\pi\\text{ cm}^2\\)', '\\(8\\pi\\text{ cm}^2\\)'],
  correct: '\\(32\\pi\\text{ cm}^2\\)',
  hint: 'Semicircle area = half of \\(\\pi r^2\\).',
  solution: 'Area = \\(\\dfrac{1}{2}\\pi \\times 8^2 = 32\\pi\\text{ cm}^2\\).',
  svg: diagrams.semicircle_r8(),
  steps: steps4([
    { e: 'A semicircle is half a full circle of the same radius \\(r = 8\\text{ cm}\\).', w: '\\(r = 8\\text{ cm}\\)' },
    { e: 'Full circle area would be \\(\\pi r^2\\); take half of that.', w: '\\(A = \\dfrac{1}{2}\\pi r^2\\)' },
    { e: 'Compute \\(r^2 = 64\\), so full circle is \\(64\\pi\\).', w: '\\(A = \\dfrac{1}{2} \\times 64\\pi\\)' },
    { e: 'Halve to get the semicircle area.', w: '\\(A = 32\\pi\\text{ cm}^2\\)' },
  ]),
}));

// Q6bii quadrant
questions.push(mc({
  id: 'y9-16a-q6bii',
  difficulty: 'easy',
  question: 'Calculate the area of the quadrant (quarter circle) with radius \\(12\\text{ cm}\\). Give the answer in exact form.',
  opts: ['\\(36\\pi\\text{ cm}^2\\)', '\\(144\\pi\\text{ cm}^2\\)', '\\(72\\pi\\text{ cm}^2\\)', '\\(24\\pi\\text{ cm}^2\\)'],
  correct: '\\(36\\pi\\text{ cm}^2\\)',
  hint: 'Quadrant area = one quarter of \\(\\pi r^2\\).',
  solution: 'Area = \\(\\dfrac{1}{4}\\pi \\times 12^2 = 36\\pi\\text{ cm}^2\\).',
  svg: diagrams.quadrant_r12(),
  steps: steps4([
    { e: 'A quadrant is one quarter of a full circle with radius \\(r = 12\\text{ cm}\\).', w: '\\(r = 12\\text{ cm}\\)' },
    { e: 'Write the quadrant formula.', w: '\\(A = \\dfrac{1}{4}\\pi r^2\\)' },
    { e: 'Square the radius: \\(12^2 = 144\\). Full circle area is \\(144\\pi\\).', w: '\\(A = \\dfrac{1}{4} \\times 144\\pi\\)' },
    { e: 'Divide by 4.', w: '\\(A = 36\\pi\\text{ cm}^2\\)' },
  ]),
}));

// Q6biii sector 120°
questions.push(mc({
  id: 'y9-16a-q6biii',
  difficulty: 'medium',
  question: 'Calculate the area of the sector with radius \\(9\\text{ cm}\\) and central angle \\(120^\\circ\\). Give the answer in exact form.',
  opts: ['\\(9\\pi\\text{ cm}^2\\)', '\\(81\\pi\\text{ cm}^2\\)', '\\(27\\pi\\text{ cm}^2\\)', '\\(54\\pi\\text{ cm}^2\\)'],
  correct: '\\(27\\pi\\text{ cm}^2\\)',
  hint: 'Sector area = \\(\\dfrac{\\theta}{360}\\pi r^2\\).',
  solution: 'Area = \\(\\dfrac{120}{360}\\pi \\times 9^2 = 27\\pi\\text{ cm}^2\\).',
  svg: diagrams.sector('9 cm', 120),
  steps: steps4([
    { e: 'Sector of radius \\(r = 9\\text{ cm}\\) and central angle \\(\\theta = 120^\\circ\\).', w: '\\(r = 9,\\; \\theta = 120^\\circ\\)' },
    { e: 'A sector is the fraction \\(\\theta/360\\) of the full circle area \\(\\pi r^2\\).', w: '\\(A = \\dfrac{\\theta}{360}\\pi r^2\\)' },
    { e: 'Simplify the fraction: \\(\\dfrac{120}{360} = \\dfrac{1}{3}\\). Also \\(r^2 = 81\\).', w: '\\(A = \\dfrac{1}{3}\\pi \\times 81\\)' },
    { e: 'Compute \\(\\dfrac{81}{3} = 27\\).', w: '\\(A = 27\\pi\\text{ cm}^2\\)' },
  ]),
}));

// Q6biv major sector 270°
questions.push(mc({
  id: 'y9-16a-q6biv',
  difficulty: 'medium',
  question: 'Calculate the area of the major sector with radius \\(8\\text{ cm}\\) and central angle \\(270^\\circ\\). Give the answer in exact form.',
  opts: ['\\(16\\pi\\text{ cm}^2\\)', '\\(64\\pi\\text{ cm}^2\\)', '\\(32\\pi\\text{ cm}^2\\)', '\\(48\\pi\\text{ cm}^2\\)'],
  correct: '\\(48\\pi\\text{ cm}^2\\)',
  hint: 'Major sector still uses \\(\\dfrac{\\theta}{360}\\pi r^2\\) with \\(\\theta = 270^\\circ\\).',
  solution: 'Area = \\(\\dfrac{270}{360}\\pi \\times 8^2 = 48\\pi\\text{ cm}^2\\).',
  svg: diagrams.sector('8 cm', 270),
  steps: steps4([
    { e: 'Major sector: radius \\(8\\text{ cm}\\), central angle \\(270^\\circ\\) (three-quarters of a full turn).', w: '\\(r = 8,\\; \\theta = 270^\\circ\\)' },
    { e: 'Use the sector formula with the given angle (already the major angle).', w: '\\(A = \\dfrac{270}{360}\\pi r^2\\)' },
    { e: 'Simplify: \\(\\dfrac{270}{360} = \\dfrac{3}{4}\\) and \\(r^2 = 64\\).', w: '\\(A = \\dfrac{3}{4} \\times 64\\pi\\)' },
    { e: 'Compute \\(\\dfrac{3}{4} \\times 64 = 48\\).', w: '\\(A = 48\\pi\\text{ cm}^2\\)' },
  ]),
}));

// Q6bv sector 30°
questions.push(mc({
  id: 'y9-16a-q6bv',
  difficulty: 'medium',
  question: 'Calculate the area of the sector with radius \\(12\\text{ cm}\\) and central angle \\(30^\\circ\\). Give the answer in exact form.',
  opts: ['\\(12\\pi\\text{ cm}^2\\)', '\\(36\\pi\\text{ cm}^2\\)', '\\(144\\pi\\text{ cm}^2\\)', '\\(24\\pi\\text{ cm}^2\\)'],
  correct: '\\(12\\pi\\text{ cm}^2\\)',
  hint: 'Sector area = \\(\\dfrac{\\theta}{360}\\pi r^2\\).',
  solution: 'Area = \\(\\dfrac{30}{360}\\pi \\times 12^2 = 12\\pi\\text{ cm}^2\\).',
  svg: diagrams.sector('12 cm', 30),
  steps: steps4([
    { e: 'Radius \\(r = 12\\text{ cm}\\), angle \\(\\theta = 30^\\circ\\).', w: '\\(r = 12,\\; \\theta = 30^\\circ\\)' },
    { e: 'Sector formula.', w: '\\(A = \\dfrac{30}{360}\\pi r^2\\)' },
    { e: 'Simplify fraction: \\(\\dfrac{30}{360} = \\dfrac{1}{12}\\). Also \\(r^2 = 144\\).', w: '\\(A = \\dfrac{1}{12} \\times 144\\pi\\)' },
    { e: 'Compute \\(\\dfrac{144}{12} = 12\\).', w: '\\(A = 12\\pi\\text{ cm}^2\\)' },
  ]),
}));

// Q6bvi sector 45°
questions.push(mc({
  id: 'y9-16a-q6bvi',
  difficulty: 'medium',
  question: 'Calculate the area of the sector with radius \\(8\\text{ cm}\\) and central angle \\(45^\\circ\\). Give the answer in exact form.',
  opts: ['\\(16\\pi\\text{ cm}^2\\)', '\\(4\\pi\\text{ cm}^2\\)', '\\(8\\pi\\text{ cm}^2\\)', '\\(64\\pi\\text{ cm}^2\\)'],
  correct: '\\(8\\pi\\text{ cm}^2\\)',
  hint: 'Sector area = \\(\\dfrac{\\theta}{360}\\pi r^2\\).',
  solution: 'Area = \\(\\dfrac{45}{360}\\pi \\times 8^2 = 8\\pi\\text{ cm}^2\\).',
  svg: diagrams.sector('8 cm', 45),
  steps: steps4([
    { e: 'Radius \\(r = 8\\text{ cm}\\), angle \\(\\theta = 45^\\circ\\).', w: '\\(r = 8,\\; \\theta = 45^\\circ\\)' },
    { e: 'Sector formula.', w: '\\(A = \\dfrac{45}{360}\\pi r^2\\)' },
    { e: 'Simplify: \\(\\dfrac{45}{360} = \\dfrac{1}{8}\\) and \\(r^2 = 64\\).', w: '\\(A = \\dfrac{1}{8} \\times 64\\pi\\)' },
    { e: 'Compute \\(\\dfrac{64}{8} = 8\\).', w: '\\(A = 8\\pi\\text{ cm}^2\\)' },
  ]),
}));

// Q6c formula — FIX answer
questions.push(mc({
  id: 'y9-16a-q6c',
  difficulty: 'easy',
  question: 'Choose the correct algebraic expression for the area \\(A\\) of a sector with radius \\(r\\) and central angle \\(\\theta^\\circ\\).',
  opts: [
    '\\(A = \\dfrac{\\theta}{360}(2\\pi r)\\)',
    '\\(A = \\dfrac{\\theta}{180}\\pi r^2\\)',
    '\\(A = \\theta \\pi r^2\\)',
    '\\(A = \\dfrac{\\theta}{360}\\pi r^2\\)',
  ],
  correct: '\\(A = \\dfrac{\\theta}{360}\\pi r^2\\)',
  hint: 'A sector is the fraction \\(\\theta/360\\) of the full circle area \\(\\pi r^2\\).',
  solution: 'Full circle area is \\(\\pi r^2\\). Fraction of the circle is \\(\\dfrac{\\theta}{360}\\), so \\(A = \\dfrac{\\theta}{360}\\pi r^2\\).',
  svg: diagrams.sector('r', 80),
  steps: steps4([
    { e: 'A full circle corresponds to a central angle of \\(360^\\circ\\) and has area \\(\\pi r^2\\).', w: '\\(A_{\\text{circle}} = \\pi r^2\\)' },
    { e: 'A sector with central angle \\(\\theta^\\circ\\) is the fraction \\(\\dfrac{\\theta}{360}\\) of the full circle.', w: '\\(\\text{fraction} = \\dfrac{\\theta}{360}\\)' },
    { e: 'Multiply the full-circle area by that fraction. Do not use circumference \\(2\\pi r\\) — that would give arc length, not area.', w: '\\(A = \\dfrac{\\theta}{360} \\times \\pi r^2\\)' },
    { e: 'The correct formula is therefore \\(A = \\dfrac{\\theta}{360}\\pi r^2\\).', w: '\\(A = \\dfrac{\\theta}{360}\\pi r^2\\)' },
  ]),
}));

// Q7a radius from area 15 — FIX to 2.19
questions.push(mc({
  id: 'y9-16a-q7a',
  difficulty: 'medium',
  question: 'Calculate the radius of the circle with an area of \\(15\\text{ mm}^2\\). Correct to two decimal places.',
  opts: ['\\(1.54\\text{ mm}\\)', '\\(4.77\\text{ mm}\\)', '\\(3.18\\text{ mm}\\)', '\\(2.19\\text{ mm}\\)'],
  correct: '\\(2.19\\text{ mm}\\)',
  hint: 'Rearrange \\(A = \\pi r^2\\) to get \\(r = \\sqrt{A/\\pi}\\).',
  solution: '\\(r = \\sqrt{15/\\pi} \\approx 2.19\\text{ mm}\\).',
  steps: steps4([
    { e: 'Start from the area formula with \\(A = 15\\text{ mm}^2\\).', w: '\\(\\pi r^2 = 15\\)' },
    { e: 'Divide both sides by \\(\\pi\\) to isolate \\(r^2\\).', w: '\\(r^2 = \\dfrac{15}{\\pi} \\approx 4.7746\\)' },
    { e: 'Take the positive square root (length cannot be negative).', w: '\\(r = \\sqrt{\\dfrac{15}{\\pi}} \\approx \\sqrt{4.7746}\\)' },
    { e: 'Evaluate and round to two decimal places.', w: '\\(r \\approx 2.19\\text{ mm}\\)' },
  ]),
}));

// Q7b — FIX to 5.05
questions.push(mc({
  id: 'y9-16a-q7b',
  difficulty: 'medium',
  question: 'Calculate the radius of the circle with an area of \\(80\\text{ cm}^2\\). Correct to two decimal places.',
  opts: ['\\(5.05\\text{ cm}\\)', '\\(25.46\\text{ cm}\\)', '\\(5.64\\text{ cm}\\)', '\\(10.09\\text{ cm}\\)'],
  correct: '\\(5.05\\text{ cm}\\)',
  hint: 'Use \\(r = \\sqrt{A/\\pi}\\).',
  solution: '\\(r = \\sqrt{80/\\pi} \\approx 5.05\\text{ cm}\\).',
  steps: steps4([
    { e: 'Given area \\(A = 80\\text{ cm}^2\\).', w: '\\(\\pi r^2 = 80\\)' },
    { e: 'Solve for \\(r^2\\).', w: '\\(r^2 = \\dfrac{80}{\\pi} \\approx 25.4648\\)' },
    { e: 'Take the square root.', w: '\\(r = \\sqrt{\\dfrac{80}{\\pi}} \\approx \\sqrt{25.4648}\\)' },
    { e: 'Round to two decimal places. (Note: \\(10.09\\) would be the diameter, not the radius.)', w: '\\(r \\approx 5.05\\text{ cm}\\)' },
  ]),
}));

// Q7c
questions.push(mc({
  id: 'y9-16a-q7c',
  difficulty: 'easy',
  question: 'Calculate the radius of a circle with an area of \\(16\\pi\\text{ m}^2\\).',
  opts: ['\\(2\\text{ m}\\)', '\\(4\\text{ m}\\)', '\\(16\\text{ m}\\)', '\\(8\\text{ m}\\)'],
  correct: '\\(4\\text{ m}\\)',
  hint: 'Cancel \\(\\pi\\) from both sides of \\(\\pi r^2 = 16\\pi\\).',
  solution: '\\(\\pi r^2 = 16\\pi \\Rightarrow r^2 = 16 \\Rightarrow r = 4\\text{ m}\\).',
  steps: steps4([
    { e: 'Write the equation with the given exact area.', w: '\\(\\pi r^2 = 16\\pi\\)' },
    { e: 'Divide both sides by \\(\\pi\\) (since \\(\\pi \\neq 0\\)).', w: '\\(r^2 = 16\\)' },
    { e: 'Take the positive square root.', w: '\\(r = \\sqrt{16} = 4\\)' },
    { e: 'State the radius with its unit.', w: '\\(r = 4\\text{ m}\\)' },
  ]),
}));

// Q7d — FIX to 6
questions.push(mc({
  id: 'y9-16a-q7d',
  difficulty: 'easy',
  question: 'Calculate the radius of a circle with an area of \\(36\\pi\\text{ cm}^2\\).',
  opts: ['\\(6\\text{ cm}\\)', '\\(9\\text{ cm}\\)', '\\(12\\text{ cm}\\)', '\\(18\\text{ cm}\\)'],
  correct: '\\(6\\text{ cm}\\)',
  hint: 'From \\(\\pi r^2 = 36\\pi\\), cancel \\(\\pi\\) and take the square root.',
  solution: '\\(r^2 = 36 \\Rightarrow r = 6\\text{ cm}\\).',
  steps: steps4([
    { e: 'Set up the area equation.', w: '\\(\\pi r^2 = 36\\pi\\)' },
    { e: 'Cancel \\(\\pi\\) from both sides.', w: '\\(r^2 = 36\\)' },
    { e: 'Take the positive square root.', w: '\\(r = \\sqrt{36} = 6\\)' },
    { e: 'Include the unit. (\\(12\\text{ cm}\\) would be the diameter.)', w: '\\(r = 6\\text{ cm}\\)' },
  ]),
}));

// Q8 annulus — FIX to 20π
questions.push(mc({
  id: 'y9-16a-q8',
  difficulty: 'medium',
  question: 'Find the area of the shaded ring (annulus) with an inner radius of \\(4\\text{ cm}\\) and an outer radius of \\(6\\text{ cm}\\). Give the answer in exact form and correct to two decimal places.',
  opts: [
    '\\(20\\pi\\text{ cm}^2\\) (approx. \\(62.83\\text{ cm}^2\\))',
    '\\(16\\pi\\text{ cm}^2\\) (approx. \\(50.27\\text{ cm}^2\\))',
    '\\(52\\pi\\text{ cm}^2\\) (approx. \\(163.36\\text{ cm}^2\\))',
    '\\(10\\pi\\text{ cm}^2\\) (approx. \\(31.42\\text{ cm}^2\\))',
  ],
  correct: '\\(20\\pi\\text{ cm}^2\\) (approx. \\(62.83\\text{ cm}^2\\))',
  hint: 'Annulus area = outer circle − inner circle = \\(\\pi(R^2 - r^2)\\).',
  solution: 'Area = \\(\\pi(6^2 - 4^2) = 20\\pi \\approx 62.83\\text{ cm}^2\\).',
  svg: diagrams.annulus_4_6(),
  steps: steps4([
    { e: 'An annulus is the region between two concentric circles. Outer radius \\(R = 6\\text{ cm}\\), inner radius \\(r = 4\\text{ cm}\\).', w: '\\(R = 6,\\; r = 4\\)' },
    { e: 'Subtract the inner area from the outer area: \\(A = \\pi R^2 - \\pi r^2 = \\pi(R^2 - r^2)\\).', w: '\\(A = \\pi(R^2 - r^2)\\)' },
    { e: 'Compute the difference of squares: \\(6^2 - 4^2 = 36 - 16 = 20\\).', w: '\\(A = \\pi \\times 20 = 20\\pi\\text{ cm}^2\\)' },
    { e: 'Approximate: \\(20\\pi \\approx 62.83\\text{ cm}^2\\) (2 d.p.).', w: '\\(A \\approx 62.83\\text{ cm}^2\\)' },
  ]),
}));

// Q9 half area radius — FIX to 5.66
questions.push(mc({
  id: 'y9-16a-q9',
  difficulty: 'medium',
  question: 'Calculate the radius of a circle whose area is half that of a circle with a radius of \\(8\\text{ cm}\\). Correct to two decimal places.',
  opts: ['\\(5.66\\text{ cm}\\)', '\\(2.83\\text{ cm}\\)', '\\(8.00\\text{ cm}\\)', '\\(4.00\\text{ cm}\\)'],
  correct: '\\(5.66\\text{ cm}\\)',
  hint: 'Halving the area multiplies the radius by \\(\\sqrt{1/2}\\), not by \\(1/2\\).',
  solution: 'Larger area \\(64\\pi\\). Half is \\(32\\pi\\). \\(r = \\sqrt{32} \\approx 5.66\\text{ cm}\\).',
  steps: steps4([
    { e: 'Area of the larger circle with radius 8 cm.', w: '\\(A_1 = \\pi \\times 8^2 = 64\\pi\\text{ cm}^2\\)' },
    { e: 'The smaller circle has half that area.', w: '\\(A_2 = \\dfrac{1}{2} \\times 64\\pi = 32\\pi\\text{ cm}^2\\)' },
    { e: 'Solve \\(\\pi r^2 = 32\\pi\\) for \\(r\\).', w: '\\(r^2 = 32 \\Rightarrow r = \\sqrt{32} = 4\\sqrt{2}\\)' },
    { e: 'Decimal approximation: \\(4\\sqrt{2} \\approx 5.66\\text{ cm}\\). (Halving the radius would wrongly give area one quarter.)', w: '\\(r \\approx 5.66\\text{ cm}\\)' },
  ]),
}));

// Q10a L-shape
questions.push(mc({
  id: 'y9-16a-q10a',
  difficulty: 'medium',
  question: 'Calculate the area of the composite L-shaped region with the following dimensions:\n- Total width = \\(12\\text{ cm}\\)\n- Total height = \\(10\\text{ cm}\\)\n- Top horizontal side = \\(6\\text{ cm}\\)\n- Right vertical side of the upper step = \\(4\\text{ cm}\\) (so the lower right arm has height \\(6\\text{ cm}\\))',
  opts: ['\\(108\\text{ cm}^2\\)', '\\(84\\text{ cm}^2\\)', '\\(96\\text{ cm}^2\\)', '\\(120\\text{ cm}^2\\)'],
  correct: '\\(96\\text{ cm}^2\\)',
  hint: 'Split the L into two rectangles.',
  solution: 'Left rectangle \\(6 \\times 10 = 60\\). Right rectangle \\(6 \\times 6 = 36\\). Total \\(96\\text{ cm}^2\\).',
  svg: diagrams.L_shape(),
  steps: steps4([
    { e: 'Split the L-shape into a tall left rectangle and a shorter right rectangle. Left width equals the top side: \\(6\\text{ cm}\\); left height is the full \\(10\\text{ cm}\\).', w: '\\(A_{\\text{left}} = 6 \\times 10 = 60\\text{ cm}^2\\)' },
    { e: 'Right rectangle width is the remaining base: \\(12 - 6 = 6\\text{ cm}\\). Its height is \\(10 - 4 = 6\\text{ cm}\\).', w: '\\(A_{\\text{right}} = 6 \\times 6 = 36\\text{ cm}^2\\)' },
    { e: 'Add the two rectangular areas.', w: '\\(A = 60 + 36\\)' },
    { e: 'Total area of the L-shape.', w: '\\(A = 96\\text{ cm}^2\\)' },
  ]),
}));

// Q10b U-shape
questions.push(mc({
  id: 'y9-16a-q10b',
  difficulty: 'medium',
  question: 'Calculate the area of the composite U-shaped region with the following dimensions:\n- Total width = \\(18\\text{ cm}\\)\n- Total height = \\(15\\text{ cm}\\)\n- Bottom widths of the legs = \\(4\\text{ cm}\\) each\n- Height of the inner cutout = \\(10\\text{ cm}\\)',
  opts: ['\\(190\\text{ cm}^2\\)', '\\(170\\text{ cm}^2\\)', '\\(270\\text{ cm}^2\\)', '\\(210\\text{ cm}^2\\)'],
  correct: '\\(170\\text{ cm}^2\\)',
  hint: 'Outer rectangle minus the inner rectangular cutout.',
  solution: 'Outer \\(18 \\times 15 = 270\\). Cutout \\(10 \\times 10 = 100\\). Area \\(170\\text{ cm}^2\\).',
  svg: diagrams.U_shape(),
  steps: steps4([
    { e: 'Compute the area of the outer bounding rectangle.', w: '\\(A_{\\text{outer}} = 18 \\times 15 = 270\\text{ cm}^2\\)' },
    { e: 'Inner cutout width = total width minus both legs: \\(18 - 4 - 4 = 10\\text{ cm}\\). Cutout height is given as \\(10\\text{ cm}\\).', w: '\\(A_{\\text{cutout}} = 10 \\times 10 = 100\\text{ cm}^2\\)' },
    { e: 'Subtract the cutout from the outer rectangle.', w: '\\(A = 270 - 100\\)' },
    { e: 'U-shaped region area.', w: '\\(A = 170\\text{ cm}^2\\)' },
  ]),
}));

// Q10c house
questions.push(mc({
  id: 'y9-16a-q10c',
  difficulty: 'medium',
  question: 'Calculate the area of the house-shaped composite region consisting of a rectangle and a triangular roof with:\n- Rectangle base = \\(6\\text{ cm}\\)\n- Rectangle side height = \\(4\\text{ cm}\\)\n- Total height from base to the apex of the roof = \\(7\\text{ cm}\\)',
  opts: ['\\(36\\text{ cm}^2\\)', '\\(42\\text{ cm}^2\\)', '\\(24\\text{ cm}^2\\)', '\\(33\\text{ cm}^2\\)'],
  correct: '\\(33\\text{ cm}^2\\)',
  hint: 'Rectangle + triangle. Triangle height = \\(7 - 4 = 3\\).',
  solution: 'Rectangle \\(24\\). Triangle \\(9\\). Total \\(33\\text{ cm}^2\\).',
  svg: diagrams.house(),
  steps: steps4([
    { e: 'Split into a rectangle of base 6 cm and height 4 cm, plus a triangular roof.', w: '\\(A_{\\text{rect}} = 6 \\times 4 = 24\\text{ cm}^2\\)' },
    { e: 'Roof triangle has the same base 6 cm. Its height is total height minus rectangle height: \\(7 - 4 = 3\\text{ cm}\\).', w: '\\(A_{\\text{tri}} = \\dfrac{1}{2} \\times 6 \\times 3 = 9\\text{ cm}^2\\)' },
    { e: 'Add the two parts.', w: '\\(A = 24 + 9\\)' },
    { e: 'Total house-shaped area.', w: '\\(A = 33\\text{ cm}^2\\)' },
  ]),
}));

// Q10d rect + semicircle
questions.push(mc({
  id: 'y9-16a-q10d',
  difficulty: 'medium',
  question: 'Calculate the area of the composite shape consisting of a rectangle with a semicircle on top of it:\n- Rectangle width = \\(6\\text{ cm}\\)\n- Rectangle height = \\(3\\text{ cm}\\)\n\nRound the final answer to two decimal places.',
  opts: ['\\(46.27\\text{ cm}^2\\)', '\\(24.50\\text{ cm}^2\\)', '\\(36.14\\text{ cm}^2\\)', '\\(32.14\\text{ cm}^2\\)'],
  correct: '\\(32.14\\text{ cm}^2\\)',
  hint: 'Semicircle diameter equals the rectangle width 6 cm, so radius is 3 cm.',
  solution: 'Rectangle 18 + semicircle \\(4.5\\pi \\approx 14.14\\) → total \\(\\approx 32.14\\text{ cm}^2\\).',
  svg: diagrams.rect_semicircle(),
  steps: steps4([
    { e: 'Rectangle area first.', w: '\\(A_{\\text{rect}} = 6 \\times 3 = 18\\text{ cm}^2\\)' },
    { e: 'Semicircle sits on the width 6 cm, so diameter is 6 cm and radius is 3 cm.', w: '\\(r = 3\\text{ cm}\\)' },
    { e: 'Semicircle area = half of \\(\\pi r^2\\).', w: '\\(A_{\\text{semi}} = \\dfrac{1}{2}\\pi \\times 3^2 = 4.5\\pi \\approx 14.14\\text{ cm}^2\\)' },
    { e: 'Add both parts and round to 2 d.p.', w: '\\(A \\approx 18 + 14.14 = 32.14\\text{ cm}^2\\)' },
  ]),
}));

// Q10e stadium — FIX to 228.54
questions.push(mc({
  id: 'y9-16a-q10e',
  difficulty: 'medium',
  question: 'Calculate the area of a stadium track made from a central rectangle and two semicircles at each end:\n- Rectangle length = \\(15\\text{ m}\\)\n- Rectangle width = \\(10\\text{ m}\\)\n\nRound the final answer to two decimal places.',
  opts: ['\\(207.08\\text{ m}^2\\)', '\\(228.54\\text{ m}^2\\)', '\\(150.00\\text{ m}^2\\)', '\\(307.08\\text{ m}^2\\)'],
  correct: '\\(228.54\\text{ m}^2\\)',
  hint: 'Two semicircles make one full circle of diameter 10 m. Add that to the rectangle.',
  solution: 'Rectangle 150 + circle \\(25\\pi \\approx 78.54\\) → total \\(\\approx 228.54\\text{ m}^2\\).',
  svg: diagrams.stadium(),
  steps: steps4([
    { e: 'Central rectangle: length 15 m, width 10 m.', w: '\\(A_{\\text{rect}} = 15 \\times 10 = 150\\text{ m}^2\\)' },
    { e: 'The two end semicircles together make one full circle whose diameter equals the rectangle width 10 m, so radius is 5 m.', w: '\\(r = 5\\text{ m}\\)' },
    { e: 'Full circle area.', w: '\\(A_{\\text{circle}} = \\pi \\times 5^2 = 25\\pi \\approx 78.54\\text{ m}^2\\)' },
    { e: 'Add rectangle and circle. Do not stop at 150 — that ignores the rounded ends.', w: '\\(A \\approx 150 + 78.54 = 228.54\\text{ m}^2\\)' },
  ]),
}));

// Q10f rect + quadrant — FIX to 54.63
questions.push(mc({
  id: 'y9-16a-q10f',
  difficulty: 'medium',
  question: 'Calculate the area of the composite shape consisting of a rectangle on the left and a quadrant (quarter circle) on the right, with:\n- Rectangle width = \\(5\\text{ m}\\)\n- Rectangle height = \\(7\\text{ m}\\)\n- Quadrant radius = \\(5\\text{ m}\\) (attached along the right side of the base)\n\nRound to two decimal places if needed.',
  opts: ['\\(35.00\\text{ m}^2\\)', '\\(74.63\\text{ m}^2\\)', '\\(44.63\\text{ m}^2\\)', '\\(54.63\\text{ m}^2\\)'],
  correct: '\\(54.63\\text{ m}^2\\)',
  hint: 'Add rectangle area \\(5 \\times 7\\) and quadrant area \\(\\tfrac{1}{4}\\pi 5^2\\).',
  solution: 'Rectangle 35 + quadrant \\(6.25\\pi \\approx 19.63\\) → total \\(\\approx 54.63\\text{ m}^2\\).',
  svg: diagrams.rect_quadrant(),
  steps: steps4([
    { e: 'Rectangle part: width 5 m, height 7 m.', w: '\\(A_{\\text{rect}} = 5 \\times 7 = 35\\text{ m}^2\\)' },
    { e: 'Quadrant has radius equal to the rectangle width: \\(r = 5\\text{ m}\\).', w: '\\(A_{\\text{quad}} = \\dfrac{1}{4}\\pi r^2 = \\dfrac{1}{4}\\pi \\times 25 = 6.25\\pi\\)' },
    { e: 'Approximate the quadrant: \\(6.25\\pi \\approx 19.63\\text{ m}^2\\).', w: '\\(A_{\\text{quad}} \\approx 19.63\\text{ m}^2\\)' },
    { e: 'Add both parts. Stopping at 35 would ignore the quarter circle.', w: '\\(A \\approx 35 + 19.63 = 54.63\\text{ m}^2\\)' },
  ]),
}));

// Q10g step
questions.push(mc({
  id: 'y9-16a-q10g',
  difficulty: 'medium',
  question: 'Calculate the area of the composite step-like shape with the following dimensions:\n- Total bottom length = \\(24\\text{ cm}\\)\n- Left vertical height = \\(12\\text{ cm}\\)\n- Vertical step down = \\(2\\text{ cm}\\) (so the right section has height \\(10\\text{ cm}\\))\n- The step is in the middle (each section width \\(12\\text{ cm}\\))',
  opts: ['\\(288\\text{ cm}^2\\)', '\\(240\\text{ cm}^2\\)', '\\(264\\text{ cm}^2\\)', '\\(192\\text{ cm}^2\\)'],
  correct: '\\(264\\text{ cm}^2\\)',
  hint: 'Split into two rectangles: \\(12 \\times 12\\) and \\(12 \\times 10\\).',
  solution: 'Left 144 + right 120 = 264 cm².',
  svg: diagrams.step_shape(),
  steps: steps4([
    { e: 'Split at the vertical step into left and right rectangles, each of width 12 cm.', w: '\\(\\text{Left: }12 \\times 12,\\quad \\text{Right: }12 \\times 10\\)' },
    { e: 'Left rectangle area (full height 12 cm).', w: '\\(A_{\\text{left}} = 12 \\times 12 = 144\\text{ cm}^2\\)' },
    { e: 'Right rectangle height is \\(12 - 2 = 10\\text{ cm}\\).', w: '\\(A_{\\text{right}} = 12 \\times 10 = 120\\text{ cm}^2\\)' },
    { e: 'Add the two sections.', w: '\\(A = 144 + 120 = 264\\text{ cm}^2\\)' },
  ]),
}));

// Q10h composite
questions.push(mc({
  id: 'y9-16a-q10h',
  difficulty: 'hard',
  timeLimit: 120,
  question: 'Calculate the area of the composite shape consisting of a central rectangle, a top semicircle, and a bottom triangle:\n- Rectangle dimensions = \\(14\\text{ cm} \\times 6\\text{ cm}\\)\n- Semicircle diameter = \\(10\\text{ cm}\\)\n- Bottom triangle height = \\(5\\text{ cm}\\) (base equals the rectangle width \\(14\\text{ cm}\\))\n\nRound to two decimal places.',
  opts: ['\\(135.50\\text{ cm}^2\\)', '\\(183.27\\text{ cm}^2\\)', '\\(158.27\\text{ cm}^2\\)', '\\(119.00\\text{ cm}^2\\)'],
  correct: '\\(158.27\\text{ cm}^2\\)',
  hint: 'Add rectangle + semicircle (r = 5) + triangle (base 14, height 5).',
  solution: '84 + 12.5π + 35 ≈ 84 + 39.27 + 35 = 158.27 cm².',
  svg: diagrams.composite_10h(),
  steps: steps4([
    { e: 'Rectangle area.', w: '\\(A_{\\text{rect}} = 14 \\times 6 = 84\\text{ cm}^2\\)' },
    { e: 'Semicircle has diameter 10 cm, so radius 5 cm. Area is half of \\(\\pi r^2\\).', w: '\\(A_{\\text{semi}} = \\dfrac{1}{2}\\pi \\times 5^2 = 12.5\\pi \\approx 39.27\\text{ cm}^2\\)' },
    { e: 'Bottom triangle: base 14 cm, height 5 cm.', w: '\\(A_{\\text{tri}} = \\dfrac{1}{2} \\times 14 \\times 5 = 35\\text{ cm}^2\\)' },
    { e: 'Sum all three parts and round to 2 d.p.', w: '\\(A \\approx 84 + 39.27 + 35 = 158.27\\text{ cm}^2\\)' },
  ]),
}));

// ─── Validate ────────────────────────────────────────────────────────────────
console.log('Built', questions.length, 'questions');
const ids = new Set();
for (const q of questions) {
  if (ids.has(q.id)) throw new Error('duplicate id ' + q.id);
  ids.add(q.id);
  if (q.type !== 'multiple_choice') throw new Error(q.id + ' not MC');
  if (!q.opts || q.opts.length !== 4) throw new Error(q.id + ' needs 4 opts');
  if (q.a < 0 || q.a > 3) throw new Error(q.id + ' bad a');
  if (q.solutionSteps.length < 4) throw new Error(q.id + ' needs 4+ steps');
  // LaTeX sanity: no bare $
  const blob = JSON.stringify(q);
  if (blob.includes('$') && !blob.includes('\\$')) {
    // allow only if no $ at all preferred
  }
  if (/(?<!\\)\$/.test(q.question + q.hint + q.solution)) {
    console.warn('WARN dollar in', q.id);
  }
}

// ─── Write seed file ─────────────────────────────────────────────────────────
const seedPath = path.join(ROOT, 'src/constants/seedYear9Ch16Questions.js');
const fileBody =
  'export const Y9_CH16_QUESTIONS = ' +
  JSON.stringify(questions, null, 2) +
  ';\n\nexport default Y9_CH16_QUESTIONS;\n';
fs.writeFileSync(seedPath, fileBody);
console.log('Wrote', seedPath, '(' + (fileBody.length / 1024).toFixed(1) + ' KB)');

// ─── Push to Firestore ───────────────────────────────────────────────────────
async function push() {
  let batch = db.batch();
  let ops = 0;
  let n = 0;
  for (const q of questions) {
    const ref = db.collection('questions').doc(q.id);
    // Map to firestore shape similar to chapterSeeder
    const options = q.opts.map((text, i) => ({
      text,
      imageUrl: '',
      isCorrect: i === q.a,
    }));
    batch.set(
      ref,
      {
        id: q.id,
        topicId: q.topicId,
        chapterId: q.chapterId,
        topicCode: q.c,
        topicTitle: q.t,
        c: q.c,
        t: q.t,
        type: 'multiple_choice',
        difficulty: q.difficulty,
        timeLimit: q.timeLimit,
        question: q.question,
        opts: q.opts,
        options,
        a: q.a,
        answer: String(q.a),
        hint: q.hint,
        solution: q.solution,
        solutionSteps: q.solutionSteps,
        graphData: q.graphData,
        requiresManualGrading: false,
        isManual: false,
        isNew: true,
        origin: 'seed',
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    ops++;
    n++;
    if (ops >= 400) {
      await batch.commit();
      batch = db.batch();
      ops = 0;
      console.log('committed…', n);
    }
  }
  if (ops) await batch.commit();
  console.log('Firestore updated', n, 'docs');

  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    {
      version: ver,
      membershipVersion: ver,
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );
  console.log('sync_meta version', ver);

  // rebuild indexes
  const idx = spawnSync(
    'node',
    ['tools/scripts/rebuildQuestionIndexes.js', 'y9-16'],
    { encoding: 'utf8', timeout: 180000, cwd: ROOT }
  );
  console.log(idx.stdout || '');
  if (idx.stderr) console.error(idx.stderr);
  if (idx.status !== 0) console.warn('index rebuild exit', idx.status);

  // sample verify
  for (const id of ['y9-16a-q1a', 'y9-16a-q1g', 'y9-16a-q4', 'y9-16a-q6c', 'y9-16a-q8', 'y9-16a-q10e']) {
    const d = (await db.collection('questions').doc(id).get()).data();
    console.log(
      id,
      'type=', d?.type,
      'a=', d?.a,
      'opts[a]=', d?.opts?.[d.a] || d?.options?.[d.a]?.text,
      'svg=', !!(d?.graphData?.svg),
      'steps=', d?.solutionSteps?.length
    );
  }
}

await push();
console.log('Done.');
