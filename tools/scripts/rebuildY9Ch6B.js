/**
 * Rebuild Year 9 Ch6B — Changing the subject of a formula
 *
 *  - multiple_choice throughout
 *  - SVG diagrams (geometry + visual algebra steps)
 *  - problem-specific solutionSteps (4+) with correct math
 *
 * Usage:
 *   node tools/scripts/rebuildY9Ch6B.js              # seed + Firestore + indexes
 *   node tools/scripts/rebuildY9Ch6B.js --seed-only   # write seed file only
 */
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const SEED_ONLY = process.argv.includes('--seed-only');

// ─── SVG helpers ─────────────────────────────────────────────────────────────
const SVG_STYLE =
  'max-width:440px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:0.5rem;';

function svgWrap(w, h, body) {
  return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="auto" style="${SVG_STYLE}" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;
}

const fill = '#dbeafe';
const fill2 = '#fef3c7';
const stroke = '#475569';
const accent = '#3b82f6';
const accent2 = '#10b981';
const textFill = '#1e293b';
const muted = '#64748b';

function label(x, y, t, opts = {}) {
  const anchor = opts.anchor || 'middle';
  const size = opts.size || 13;
  const weight = opts.weight || 600;
  const col = opts.color || textFill;
  return `<text x="${x}" y="${y}" font-family="system-ui,-apple-system,sans-serif" font-size="${size}" font-weight="${weight}" fill="${col}" text-anchor="${anchor}" dominant-baseline="central">${t}</text>`;
}

function poly(pts, opts = {}) {
  const f = opts.fill || fill;
  const op = opts.opacity ?? 0.55;
  const sw = opts.sw || 2;
  const d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ') + ' Z';
  return `<path d="${d}" fill="${f}" fill-opacity="${op}" stroke="${stroke}" stroke-width="${sw}" stroke-linejoin="round"/>`;
}

function line(x1, y1, x2, y2, col = stroke, sw = 2, dash = '') {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="${sw}" stroke-linecap="round"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
}

function rightAngle(x, y, dx, dy, size = 10) {
  return `<path d="M ${x + dx * size},${y} L ${x + dx * size},${y + dy * size} L ${x},${y + dy * size}" fill="none" stroke="${accent}" stroke-width="1.5"/>`;
}

function arrow(x1, y1, x2, y2, col = accent) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const px = -uy;
  const py = ux;
  const bx = x2 - ux * 10;
  const by = y2 - uy * 10;
  return [
    line(x1, y1, x2, y2, col, 2),
    `<polygon points="${x2},${y2} ${bx + px * 5},${by + py * 5} ${bx - px * 5},${by - py * 5}" fill="${col}"/>`,
  ].join('');
}

function pill(x, y, w, h, text, bg = fill, tc = textFill) {
  const r = h / 2;
  return [
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" ry="${r}" fill="${bg}" stroke="${stroke}" stroke-width="1.5"/>`,
    label(x + w / 2, y + h / 2, text, { size: 12, weight: 700, color: tc }),
  ].join('');
}

/** Visual algebra step cards: left formula → op → right formula */
function algebraFlow(steps) {
  // steps: [{text, highlight?}, {op}, {text}, ...] alternating text/op ending with text
  const cards = steps.filter((s) => s.text != null);
  const ops = steps.filter((s) => s.op != null);
  const n = cards.length;
  const cardW = Math.min(150, Math.floor(380 / n) - 10);
  const gap = 36;
  const totalW = n * cardW + (n - 1) * gap;
  const startX = (420 - totalW) / 2;
  const y = 48;
  const h = 44;
  const parts = [];
  cards.forEach((c, i) => {
    const x = startX + i * (cardW + gap);
    const bg = c.highlight ? '#bbf7d0' : fill;
    parts.push(pill(x, y, cardW, h, c.text, bg));
    if (i < ops.length) {
      const ox = x + cardW + 4;
      parts.push(arrow(ox, y + h / 2, ox + gap - 8, y + h / 2, accent));
      parts.push(label(ox + (gap - 8) / 2, y + h / 2 - 14, ops[i].op, { size: 11, color: accent }));
    }
  });
  parts.push(label(210, 18, 'Rearranging the formula', { size: 12, color: muted, weight: 500 }));
  return svgWrap(420, 120, parts.join(''));
}

function balanceScale(left, right, note) {
  // Simple balance showing both sides equal
  const cx = 200;
  const parts = [
    line(40, 90, 360, 90, stroke, 2.5),
    line(cx, 90, cx, 140, stroke, 2.5),
    poly([[cx - 18, 140], [cx + 18, 140], [cx + 28, 165], [cx - 28, 165]], { fill: '#e2e8f0', opacity: 0.9 }),
    pill(50, 40, 120, 36, left, fill),
    pill(230, 40, 120, 36, right, fill2),
    label(cx, 78, '=', { size: 18, color: accent }),
  ];
  if (note) parts.push(label(cx, 185, note, { size: 11, color: muted, weight: 500 }));
  return svgWrap(400, 205, parts.join(''));
}

// ─── Diagrams ────────────────────────────────────────────────────────────────
const diagrams = {
  rect_lw: (lLab = 'l', wLab = 'w') => {
    const ox = 50, oy = 40, w = 200, h = 110;
    return svgWrap(300, 190, [
      poly([[ox, oy + h], [ox + w, oy + h], [ox + w, oy], [ox, oy]]),
      label(ox + w / 2, oy + h + 18, lLab),
      label(ox + w + 22, oy + h / 2, wLab),
      label(ox + w / 2, oy + h / 2, 'A = l w', { size: 14, color: accent }),
    ].join(''));
  },

  triangle_bh: (bLab = 'b', hLab = 'h') => {
    const A = [40, 160], B = [240, 160], C = [140, 40];
    const H = [140, 160];
    return svgWrap(300, 200, [
      poly([A, B, C]),
      line(C[0], C[1], H[0], H[1], accent, 1.5, '5 4'),
      rightAngle(H[0], H[1], -1, -1, 12),
      label(140, 178, bLab),
      label(158, 105, hLab),
      label(140, 120, 'A = ½bh', { size: 13, color: accent }),
    ].join(''));
  },

  circle_r: (rLab = 'r') => {
    const cx = 140, cy = 110, r = 70;
    return svgWrap(280, 220, [
      `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" fill-opacity="0.55" stroke="${stroke}" stroke-width="2"/>`,
      line(cx, cy, cx + r, cy, accent, 2),
      `<circle cx="${cx}" cy="${cy}" r="3" fill="${accent}"/>`,
      label(cx + r / 2, cy - 14, rLab),
      label(cx, cy + r + 20, 'A = πr²', { size: 13, color: accent }),
    ].join(''));
  },

  circle_circum: (rLab = 'r') => {
    const cx = 140, cy = 110, r = 70;
    return svgWrap(280, 220, [
      `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${stroke}" stroke-width="2.5"/>`,
      line(cx, cy, cx + r, cy, accent, 2),
      `<circle cx="${cx}" cy="${cy}" r="3" fill="${accent}"/>`,
      label(cx + r / 2, cy - 14, rLab),
      label(cx, cy + r + 20, 'C = 2πr', { size: 13, color: accent }),
    ].join(''));
  },

  cylinder: (rLab = 'r', hLab = 'h') => {
    // isometric-ish cylinder
    const cx = 140, topY = 50, botY = 150, rx = 55, ry = 18;
    return svgWrap(280, 220, [
      `<ellipse cx="${cx}" cy="${topY}" rx="${rx}" ry="${ry}" fill="${fill}" fill-opacity="0.7" stroke="${stroke}" stroke-width="2"/>`,
      `<path d="M${cx - rx},${topY} L${cx - rx},${botY} A${rx},${ry} 0 0 0 ${cx + rx},${botY} L${cx + rx},${topY}" fill="${fill}" fill-opacity="0.4" stroke="${stroke}" stroke-width="2"/>`,
      `<ellipse cx="${cx}" cy="${botY}" rx="${rx}" ry="${ry}" fill="none" stroke="${stroke}" stroke-width="2"/>`,
      line(cx, topY, cx + rx, topY, accent, 1.5),
      label(cx + rx / 2 + 8, topY - 14, rLab),
      line(cx + rx + 18, topY, cx + rx + 18, botY, accent, 1.5, '5 4'),
      label(cx + rx + 32, (topY + botY) / 2, hLab),
      label(cx, botY + ry + 22, 'V = πr²h', { size: 13, color: accent }),
    ].join(''));
  },

  cone: (rLab = 'r', hLab = 'h') => {
    const apex = [140, 30], bl = [70, 160], br = [210, 160];
    const baseCy = 160, rx = 70, ry = 18;
    return svgWrap(280, 220, [
      `<ellipse cx="140" cy="${baseCy}" rx="${rx}" ry="${ry}" fill="${fill}" fill-opacity="0.45" stroke="${stroke}" stroke-width="2"/>`,
      line(apex[0], apex[1], bl[0], bl[1], stroke, 2),
      line(apex[0], apex[1], br[0], br[1], stroke, 2),
      line(140, 30, 140, 160, accent, 1.5, '5 4'),
      label(155, 95, hLab),
      line(140, 160, 210, 160, accent, 1.5),
      label(175, 148, rLab),
      label(140, 200, 'V = ⅓πr²h', { size: 13, color: accent }),
    ].join(''));
  },

  trapezium: (aLab = 'a', bLab = 'b', hLab = 'h') => {
    const A = [40, 160], B = [240, 160], C = [200, 50], D = [80, 50];
    return svgWrap(300, 200, [
      poly([A, B, C, D]),
      line(D[0], D[1], D[0], A[1], accent, 1.5, '5 4'),
      rightAngle(D[0], A[1], 1, -1, 12),
      label(140, 178, bLab),
      label(140, 35, aLab),
      label(D[0] - 18, 105, hLab),
      label(150, 110, 'A = ½(a+b)h', { size: 12, color: accent }),
    ].join(''));
  },

  rect_perimeter: (lLab = 'l', wLab = 'w') => {
    const ox = 50, oy = 40, w = 200, h = 100;
    return svgWrap(300, 190, [
      poly([[ox, oy + h], [ox + w, oy + h], [ox + w, oy], [ox, oy]], { fill: '#f1f5f9', opacity: 0.8 }),
      label(ox + w / 2, oy + h + 18, lLab),
      label(ox + w + 22, oy + h / 2, wLab),
      label(ox + w / 2, oy + h / 2, 'P = 2(l + w)', { size: 13, color: accent }),
    ].join(''));
  },

  right_triangle: (aLab = 'a', bLab = 'b', cLab = 'c') => {
    const A = [50, 160], B = [230, 160], C = [50, 50];
    return svgWrap(280, 200, [
      poly([A, B, C]),
      rightAngle(A[0], A[1], 1, -1, 14),
      label(140, 178, aLab),
      label(32, 105, bLab),
      label(155, 95, cLab, { color: accent }),
      label(160, 50, 'c² = a² + b²', { size: 12, color: accent }),
    ].join(''));
  },

  thermometer: () => {
    // Simple C ↔ F conversion visual
    return svgWrap(360, 160, [
      // C scale
      `<rect x="60" y="30" width="28" height="100" rx="14" fill="#fee2e2" stroke="${stroke}" stroke-width="1.5"/>`,
      `<rect x="66" y="80" width="16" height="42" rx="8" fill="#ef4444"/>`,
      label(74, 20, '°C', { size: 12, color: muted }),
      label(100, 80, 'C', { size: 13 }),
      // arrow
      arrow(130, 80, 190, 80, accent),
      label(160, 60, 'F = ⁹⁄₅C + 32', { size: 11, color: accent }),
      // F scale
      `<rect x="220" y="30" width="28" height="100" rx="14" fill="#dbeafe" stroke="${stroke}" stroke-width="1.5"/>`,
      `<rect x="226" y="55" width="16" height="67" rx="8" fill="#3b82f6"/>`,
      label(234, 20, '°F', { size: 12, color: muted }),
      label(260, 80, 'F', { size: 13 }),
    ].join(''));
  },

  motion: () => {
    // particle moving along a line
    return svgWrap(360, 140, [
      line(40, 70, 320, 70, stroke, 2),
      arrow(40, 70, 320, 70, muted),
      `<circle cx="80" cy="70" r="10" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`,
      label(80, 48, 'u', { size: 13, color: accent }),
      `<circle cx="240" cy="70" r="10" fill="#bbf7d0" stroke="${stroke}" stroke-width="2"/>`,
      label(240, 48, 'v', { size: 13, color: accent2 }),
      label(160, 100, 'a, t', { size: 12, color: muted }),
      label(180, 20, 'v = u + at', { size: 13, color: accent }),
    ].join(''));
  },

  cliff: () => {
    // cliff + falling stone for s = ut + ½at²
    return svgWrap(320, 200, [
      poly([[40, 50], [140, 50], [140, 170], [40, 170]], { fill: '#cbd5e1', opacity: 0.7 }),
      label(90, 110, 'cliff', { size: 11, color: muted, weight: 500 }),
      line(140, 50, 140, 170, accent, 1.5, '5 4'),
      label(160, 110, 's', { size: 14, color: accent }),
      `<circle cx="200" cy="80" r="8" fill="#fbbf24" stroke="${stroke}" stroke-width="1.5"/>`,
      arrow(200, 95, 200, 150, '#ef4444'),
      label(220, 120, 'u, a', { size: 12, color: muted }),
      label(160, 20, 's = ut + ½at²', { size: 12, color: accent }),
    ].join(''));
  },

  pendulum: () => {
    const cx = 160, cy = 30;
    return svgWrap(320, 200, [
      line(cx, cy, 100, 150, stroke, 2),
      `<circle cx="100" cy="150" r="14" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`,
      line(cx, cy, cx, 150, accent, 1.5, '5 4'),
      label(175, 95, 'l', { size: 14, color: accent }),
      label(160, 20, 'T = 2π√(l/g)', { size: 12, color: accent }),
      label(100, 180, 'bob', { size: 11, color: muted, weight: 500 }),
    ].join(''));
  },

  average: () => {
    // number line with m, n, average a
    return svgWrap(360, 120, [
      line(40, 60, 320, 60, stroke, 2),
      `<circle cx="80" cy="60" r="6" fill="${accent}"/>`,
      `<circle cx="280" cy="60" r="6" fill="${accent}"/>`,
      `<circle cx="180" cy="60" r="7" fill="${accent2}"/>`,
      label(80, 85, 'n', { size: 13 }),
      label(280, 85, 'm', { size: 13 }),
      label(180, 40, 'a = (m+n)/2', { size: 12, color: accent2 }),
    ].join(''));
  },

  lens: () => {
    // thin lens diagram for 1/f = 1/u + 1/v
    return svgWrap(360, 160, [
      // lens
      `<ellipse cx="180" cy="80" rx="10" ry="50" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`,
      line(40, 80, 320, 80, muted, 1, '4 3'),
      // object
      line(70, 80, 70, 40, accent, 2),
      label(70, 28, 'object', { size: 10, color: muted, weight: 500 }),
      label(110, 100, 'u', { size: 13, color: accent }),
      line(70, 95, 170, 95, accent, 1.5),
      // image
      line(280, 80, 280, 120, accent2, 2),
      label(280, 135, 'image', { size: 10, color: muted, weight: 500 }),
      label(230, 100, 'v', { size: 13, color: accent2 }),
      line(190, 95, 280, 95, accent2, 1.5),
      label(180, 20, '1/f = 1/u + 1/v', { size: 12, color: accent }),
    ].join(''));
  },

  interest: () => {
    return svgWrap(340, 130, [
      pill(30, 40, 70, 40, 'P', fill),
      label(115, 45, '×', { size: 16, color: muted }),
      pill(130, 40, 50, 40, 'R', fill2),
      label(195, 45, '×', { size: 16, color: muted }),
      pill(210, 40, 50, 40, 'T', fill),
      label(275, 45, '÷100', { size: 12, color: muted }),
      arrow(30, 100, 260, 100, accent),
      label(145, 115, 'I = PRT/100', { size: 13, color: accent }),
    ].join(''));
  },

  kinetic: () => {
    return svgWrap(300, 140, [
      // mass with velocity arrow
      `<rect x="60" y="50" width="50" height="40" rx="6" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`,
      label(85, 70, 'm', { size: 14 }),
      arrow(120, 70, 220, 70, accent),
      label(170, 50, 'v', { size: 14, color: accent }),
      label(150, 115, 'E = ½mv²', { size: 13, color: accent }),
    ].join(''));
  },

  surface_box: () => {
    // rectangular prism wireframe for S = 2(lw+lh+hw)
    const o = [80, 140];
    const dx = 100, dy = -50, dz = -70;
    // front face
    const A = [o[0], o[1]], B = [o[0] + dx, o[1]], C = [o[0] + dx, o[1] + dz], D = [o[0], o[1] + dz];
    const E = [A[0] + 40, A[1] + dy], F = [B[0] + 40, B[1] + dy], G = [C[0] + 40, C[1] + dy], H = [D[0] + 40, D[1] + dy];
    return svgWrap(300, 200, [
      poly([A, B, C, D], { fill: fill, opacity: 0.5 }),
      poly([D, C, G, H], { fill: fill2, opacity: 0.45 }),
      poly([B, F, G, C], { fill: '#e0e7ff', opacity: 0.5 }),
      line(A[0], A[1], E[0], E[1], stroke, 1.5, '4 3'),
      line(E[0], E[1], F[0], F[1], stroke, 1.5, '4 3'),
      line(E[0], E[1], H[0], H[1], stroke, 1.5, '4 3'),
      label(o[0] + dx / 2, o[1] + 16, 'l', { size: 13 }),
      label(o[0] + dx + 18, o[1] + dz / 2, 'h', { size: 13 }),
      label(o[0] + dx + 30, o[1] + dy / 2 + 10, 'w', { size: 13 }),
      label(150, 20, 'S = 2(lw + lh + hw)', { size: 12, color: accent }),
    ].join(''));
  },

  // Generic step highlight for pure algebra (used in solution steps)
  stepHighlight: (before, op, after) => algebraFlow([
    { text: before },
    { op },
    { text: after, highlight: true },
  ]),
};

// ─── Question builder ────────────────────────────────────────────────────────
function mc({
  id,
  difficulty = 'easy',
  timeLimit = 90,
  question,
  opts,
  correct,
  hint,
  solution,
  svg = null,
  steps,
}) {
  const a = opts.indexOf(correct);
  if (a < 0) throw new Error(`${id}: correct option not in opts: ${correct}`);
  const solutionSteps = steps.map((s, i) => ({
    explanation: s.e,
    workingOut: s.w,
    graphData: s.svg ? { svg: s.svg } : null,
  }));
  return {
    id,
    topicId: 'y9-6b',
    chapterId: 'y9-6',
    c: '6B',
    t: 'Changing the subject of a formula',
    type: 'multiple_choice',
    difficulty,
    timeLimit,
    question,
    opts,
    a,
    answer: String(a),
    hint,
    solution,
    solutionSteps,
    graphData: svg ? { svg } : null,
    isNew: true,
    requiresManualGrading: false,
  };
}

function steps4(arr) {
  if (arr.length < 4) throw new Error('need 4+ steps');
  return arr;
}

// ─── Questions ───────────────────────────────────────────────────────────────
const questions = [];

// ═══════════════════════════════════════════════════════════════════════════
// Q1 — One-step rearrangements (add/subtract/multiply/divide)
// ═══════════════════════════════════════════════════════════════════════════

questions.push(mc({
  id: 'y9-6b-q1a',
  difficulty: 'easy',
  timeLimit: 60,
  question: 'Make \\(x\\) the subject of the formula:\n\\[y = x + 5\\]',
  opts: [
    '\\(x = y + 5\\)',
    '\\(x = 5 - y\\)',
    '\\(x = y - 5\\)',
    '\\(x = 5y\\)',
  ],
  correct: '\\(x = y - 5\\)',
  hint: 'Undo addition: subtract 5 from both sides.',
  solution: 'Subtract 5 from both sides: \\(x = y - 5\\).',
  svg: balanceScale('y', 'x + 5', 'Both sides are equal'),
  steps: steps4([
    { e: 'Start with the given formula. The subject we want is \\(x\\), currently on the right with \\(+5\\).', w: '\\(y = x + 5\\)', svg: balanceScale('y', 'x + 5') },
    { e: 'Subtract 5 from both sides to undo the addition. Whatever you do to one side you must do to the other.', w: '\\(y - 5 = x + 5 - 5\\)', svg: diagrams.stepHighlight('y = x + 5', '− 5', 'y − 5 = x') },
    { e: 'Simplify the right-hand side.', w: '\\(y - 5 = x\\)' },
    { e: 'Write with \\(x\\) as the subject (swap sides if you prefer).', w: '\\(x = y - 5\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-6b-q1b',
  difficulty: 'easy',
  timeLimit: 60,
  question: 'Make \\(x\\) the subject of the formula:\n\\[y = x - 3\\]',
  opts: [
    '\\(x = y - 3\\)',
    '\\(x = y + 3\\)',
    '\\(x = 3 - y\\)',
    '\\(x = 3y\\)',
  ],
  correct: '\\(x = y + 3\\)',
  hint: 'Undo subtraction: add 3 to both sides.',
  solution: 'Add 3 to both sides: \\(x = y + 3\\).',
  svg: balanceScale('y', 'x − 3'),
  steps: steps4([
    { e: 'Given formula. \\(x\\) has 3 subtracted from it.', w: '\\(y = x - 3\\)' },
    { e: 'Add 3 to both sides to undo the subtraction.', w: '\\(y + 3 = x - 3 + 3\\)', svg: diagrams.stepHighlight('y = x − 3', '+ 3', 'y + 3 = x') },
    { e: 'Simplify.', w: '\\(y + 3 = x\\)' },
    { e: 'Write with \\(x\\) as the subject.', w: '\\(x = y + 3\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-6b-q1c',
  difficulty: 'easy',
  timeLimit: 60,
  question: 'Make \\(x\\) the subject of the formula:\n\\[y = 4x\\]',
  opts: [
    '\\(x = 4y\\)',
    '\\(x = y - 4\\)',
    '\\(x = \\dfrac{y}{4}\\)',
    '\\(x = \\dfrac{4}{y}\\)',
  ],
  correct: '\\(x = \\dfrac{y}{4}\\)',
  hint: 'Undo multiplication: divide both sides by 4.',
  solution: 'Divide both sides by 4: \\(x = \\dfrac{y}{4}\\).',
  svg: balanceScale('y', '4x'),
  steps: steps4([
    { e: 'Given formula. \\(x\\) is multiplied by 4.', w: '\\(y = 4x\\)' },
    { e: 'Divide both sides by 4 to isolate \\(x\\).', w: '\\(\\dfrac{y}{4} = \\dfrac{4x}{4}\\)', svg: diagrams.stepHighlight('y = 4x', '÷ 4', 'y/4 = x') },
    { e: 'Simplify the right-hand side.', w: '\\(\\dfrac{y}{4} = x\\)' },
    { e: 'Write with \\(x\\) as the subject.', w: '\\(x = \\dfrac{y}{4}\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-6b-q1d',
  difficulty: 'easy',
  timeLimit: 60,
  question: 'Make \\(x\\) the subject of the formula:\n\\[y = \\dfrac{x}{6}\\]',
  opts: [
    '\\(x = \\dfrac{y}{6}\\)',
    '\\(x = 6y\\)',
    '\\(x = y - 6\\)',
    '\\(x = \\dfrac{6}{y}\\)',
  ],
  correct: '\\(x = 6y\\)',
  hint: 'Undo division: multiply both sides by 6.',
  solution: 'Multiply both sides by 6: \\(x = 6y\\).',
  svg: balanceScale('y', 'x/6'),
  steps: steps4([
    { e: 'Given formula. \\(x\\) is divided by 6.', w: '\\(y = \\dfrac{x}{6}\\)' },
    { e: 'Multiply both sides by 6.', w: '\\(6y = x\\)', svg: diagrams.stepHighlight('y = x/6', '× 6', '6y = x') },
    { e: 'The right-hand side is now just \\(x\\).', w: '\\(6y = x\\)' },
    { e: 'Write with \\(x\\) as the subject.', w: '\\(x = 6y\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-6b-q1e',
  difficulty: 'easy',
  timeLimit: 60,
  question: 'Make \\(q\\) the subject of the formula:\n\\[p = q - r\\]',
  opts: [
    '\\(q = p - r\\)',
    '\\(q = r - p\\)',
    '\\(q = p + r\\)',
    '\\(q = pr\\)',
  ],
  correct: '\\(q = p + r\\)',
  hint: 'Add \\(r\\) to both sides.',
  solution: 'Add \\(r\\) to both sides: \\(q = p + r\\).',
  svg: balanceScale('p', 'q − r'),
  steps: steps4([
    { e: 'Given formula. We want \\(q\\) alone.', w: '\\(p = q - r\\)' },
    { e: 'Add \\(r\\) to both sides to cancel \\(-r\\).', w: '\\(p + r = q - r + r\\)', svg: diagrams.stepHighlight('p = q − r', '+ r', 'p + r = q') },
    { e: 'Simplify.', w: '\\(p + r = q\\)' },
    { e: 'Write with \\(q\\) as the subject.', w: '\\(q = p + r\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-6b-q1f',
  difficulty: 'easy',
  timeLimit: 60,
  question: 'Make \\(n\\) the subject of the formula:\n\\[m = n + k\\]',
  opts: [
    '\\(n = m + k\\)',
    '\\(n = m - k\\)',
    '\\(n = k - m\\)',
    '\\(n = mk\\)',
  ],
  correct: '\\(n = m - k\\)',
  hint: 'Subtract \\(k\\) from both sides.',
  solution: 'Subtract \\(k\\) from both sides: \\(n = m - k\\).',
  svg: balanceScale('m', 'n + k'),
  steps: steps4([
    { e: 'Given formula.', w: '\\(m = n + k\\)' },
    { e: 'Subtract \\(k\\) from both sides.', w: '\\(m - k = n + k - k\\)', svg: diagrams.stepHighlight('m = n + k', '− k', 'm − k = n') },
    { e: 'Simplify.', w: '\\(m - k = n\\)' },
    { e: 'Write with \\(n\\) as the subject.', w: '\\(n = m - k\\)' },
  ]),
}));

// ═══════════════════════════════════════════════════════════════════════════
// Q2 — Two-step linear rearrangements
// ═══════════════════════════════════════════════════════════════════════════

questions.push(mc({
  id: 'y9-6b-q2a',
  difficulty: 'easy',
  timeLimit: 75,
  question: 'Make \\(x\\) the subject of the formula:\n\\[y = 2x + 7\\]',
  opts: [
    '\\(x = 2y + 7\\)',
    '\\(x = \\dfrac{y + 7}{2}\\)',
    '\\(x = \\dfrac{y - 7}{2}\\)',
    '\\(x = \\dfrac{y}{2} - 7\\)',
  ],
  correct: '\\(x = \\dfrac{y - 7}{2}\\)',
  hint: 'First subtract 7, then divide by 2.',
  solution: '\\(y - 7 = 2x\\), so \\(x = \\dfrac{y - 7}{2}\\).',
  svg: algebraFlow([{ text: 'y = 2x + 7' }, { op: '− 7' }, { text: 'y − 7 = 2x' }, { op: '÷ 2' }, { text: 'x = (y−7)/2', highlight: true }]),
  steps: steps4([
    { e: 'Given formula. Undo operations in reverse order (opposite of BODMAS).', w: '\\(y = 2x + 7\\)' },
    { e: 'First subtract 7 from both sides.', w: '\\(y - 7 = 2x\\)', svg: diagrams.stepHighlight('y = 2x + 7', '− 7', 'y − 7 = 2x') },
    { e: 'Then divide both sides by 2.', w: '\\(\\dfrac{y - 7}{2} = x\\)', svg: diagrams.stepHighlight('y − 7 = 2x', '÷ 2', 'x = (y−7)/2') },
    { e: 'Write with \\(x\\) as the subject.', w: '\\(x = \\dfrac{y - 7}{2}\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-6b-q2b',
  difficulty: 'easy',
  timeLimit: 75,
  question: 'Make \\(x\\) the subject of the formula:\n\\[y = 5x - 3\\]',
  opts: [
    '\\(x = \\dfrac{y - 3}{5}\\)',
    '\\(x = \\dfrac{y + 3}{5}\\)',
    '\\(x = 5y + 3\\)',
    '\\(x = \\dfrac{y}{5} + 3\\)',
  ],
  correct: '\\(x = \\dfrac{y + 3}{5}\\)',
  hint: 'Add 3 first, then divide by 5.',
  solution: '\\(y + 3 = 5x\\), so \\(x = \\dfrac{y + 3}{5}\\).',
  svg: algebraFlow([{ text: 'y = 5x − 3' }, { op: '+ 3' }, { text: 'y + 3 = 5x' }, { op: '÷ 5' }, { text: 'x = (y+3)/5', highlight: true }]),
  steps: steps4([
    { e: 'Given formula.', w: '\\(y = 5x - 3\\)' },
    { e: 'Add 3 to both sides.', w: '\\(y + 3 = 5x\\)', svg: diagrams.stepHighlight('y = 5x − 3', '+ 3', 'y + 3 = 5x') },
    { e: 'Divide both sides by 5.', w: '\\(\\dfrac{y + 3}{5} = x\\)' },
    { e: 'Write with \\(x\\) as the subject.', w: '\\(x = \\dfrac{y + 3}{5}\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-6b-q2c',
  difficulty: 'medium',
  timeLimit: 90,
  question: 'Make \\(x\\) the subject of the formula:\n\\[y = 3(x + 4)\\]',
  opts: [
    '\\(x = \\dfrac{y}{3} + 4\\)',
    '\\(x = \\dfrac{y + 4}{3}\\)',
    '\\(x = \\dfrac{y}{3} - 4\\)',
    '\\(x = 3y - 4\\)',
  ],
  correct: '\\(x = \\dfrac{y}{3} - 4\\)',
  hint: 'Divide by 3 first (to remove the brackets), then subtract 4.',
  solution: '\\(\\dfrac{y}{3} = x + 4\\), so \\(x = \\dfrac{y}{3} - 4\\).',
  svg: algebraFlow([{ text: 'y = 3(x+4)' }, { op: '÷ 3' }, { text: 'y/3 = x+4' }, { op: '− 4' }, { text: 'x = y/3 − 4', highlight: true }]),
  steps: steps4([
    { e: 'Given formula. The brackets mean everything inside is multiplied by 3.', w: '\\(y = 3(x + 4)\\)' },
    { e: 'Divide both sides by 3.', w: '\\(\\dfrac{y}{3} = x + 4\\)', svg: diagrams.stepHighlight('y = 3(x+4)', '÷ 3', 'y/3 = x+4') },
    { e: 'Subtract 4 from both sides.', w: '\\(\\dfrac{y}{3} - 4 = x\\)' },
    { e: 'Write with \\(x\\) as the subject.', w: '\\(x = \\dfrac{y}{3} - 4\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-6b-q2d',
  difficulty: 'medium',
  timeLimit: 90,
  question: 'Make \\(x\\) the subject of the formula:\n\\[y = 4(x - 2) + 1\\]',
  opts: [
    '\\(x = \\dfrac{y - 1}{4} + 2\\)',
    '\\(x = \\dfrac{y + 1}{4} - 2\\)',
    '\\(x = \\dfrac{y - 1}{4} - 2\\)',
    '\\(x = 4(y - 1) + 2\\)',
  ],
  correct: '\\(x = \\dfrac{y - 1}{4} + 2\\)',
  hint: 'Subtract 1, divide by 4, then add 2.',
  solution: '\\(y - 1 = 4(x - 2)\\) \\(\\Rightarrow\\) \\(\\dfrac{y-1}{4} = x - 2\\) \\(\\Rightarrow\\) \\(x = \\dfrac{y-1}{4} + 2\\).',
  svg: algebraFlow([{ text: 'y = 4(x−2)+1' }, { op: '− 1' }, { text: 'y−1 = 4(x−2)' }, { op: '÷ 4, +2' }, { text: 'x = (y−1)/4 + 2', highlight: true }]),
  steps: steps4([
    { e: 'Given formula.', w: '\\(y = 4(x - 2) + 1\\)', svg: algebraFlow([{ text: 'y = 4(x−2)+1' }, { op: '− 1' }, { text: 'y−1 = 4(x−2)' }]) },
    { e: 'Subtract 1 from both sides.', w: '\\(y - 1 = 4(x - 2)\\)', svg: diagrams.stepHighlight('y = 4(x−2)+1', '− 1', 'y−1 = 4(x−2)') },
    { e: 'Divide both sides by 4.', w: '\\(\\dfrac{y - 1}{4} = x - 2\\)', svg: diagrams.stepHighlight('y−1 = 4(x−2)', '÷ 4', '(y−1)/4 = x−2') },
    { e: 'Add 2 to both sides to isolate \\(x\\).', w: '\\(x = \\dfrac{y - 1}{4} + 2\\)', svg: diagrams.stepHighlight('(y−1)/4 = x−2', '+ 2', 'x = (y−1)/4 + 2') },
  ]),
}));

questions.push(mc({
  id: 'y9-6b-q2e',
  difficulty: 'medium',
  timeLimit: 90,
  question: 'Make \\(t\\) the subject of the formula:\n\\[v = u + at\\]',
  opts: [
    '\\(t = v - u - a\\)',
    '\\(t = \\dfrac{v + u}{a}\\)',
    '\\(t = \\dfrac{v - u}{a}\\)',
    '\\(t = a(v - u)\\)',
  ],
  correct: '\\(t = \\dfrac{v - u}{a}\\)',
  hint: 'Subtract \\(u\\), then divide by \\(a\\).',
  solution: '\\(v - u = at\\), so \\(t = \\dfrac{v - u}{a}\\).',
  svg: diagrams.motion(),
  steps: steps4([
    { e: 'This is the linear motion formula relating final velocity \\(v\\), initial velocity \\(u\\), acceleration \\(a\\) and time \\(t\\).', w: '\\(v = u + at\\)', svg: diagrams.motion() },
    { e: 'Subtract \\(u\\) from both sides.', w: '\\(v - u = at\\)', svg: diagrams.stepHighlight('v = u + at', '− u', 'v − u = at') },
    { e: 'Divide both sides by \\(a\\) (assuming \\(a \\neq 0\\)).', w: '\\(\\dfrac{v - u}{a} = t\\)' },
    { e: 'Write with \\(t\\) as the subject.', w: '\\(t = \\dfrac{v - u}{a}\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-6b-q2f',
  difficulty: 'medium',
  timeLimit: 90,
  question: 'Make \\(u\\) the subject of the formula:\n\\[v = u + at\\]',
  opts: [
    '\\(u = v + at\\)',
    '\\(u = v - at\\)',
    '\\(u = at - v\\)',
    '\\(u = \\dfrac{v}{at}\\)',
  ],
  correct: '\\(u = v - at\\)',
  hint: 'Subtract \\(at\\) from both sides.',
  solution: 'Subtract \\(at\\): \\(u = v - at\\).',
  svg: diagrams.motion(),
  steps: steps4([
    { e: 'Given the motion formula, isolate initial velocity \\(u\\).', w: '\\(v = u + at\\)', svg: diagrams.motion() },
    { e: 'Subtract \\(at\\) from both sides.', w: '\\(v - at = u\\)', svg: diagrams.stepHighlight('v = u + at', '− at', 'v − at = u') },
    { e: 'The right-hand side is now just \\(u\\).', w: '\\(v - at = u\\)' },
    { e: 'Write with \\(u\\) as the subject.', w: '\\(u = v - at\\)' },
  ]),
}));

// ═══════════════════════════════════════════════════════════════════════════
// Q3 — Fractions and averages
// ═══════════════════════════════════════════════════════════════════════════

questions.push(mc({
  id: 'y9-6b-q3a',
  difficulty: 'medium',
  timeLimit: 90,
  question: 'Make \\(x\\) the subject of the formula:\n\\[y = \\dfrac{x}{a} + b\\]',
  opts: [
    '\\(x = a(y + b)\\)',
    '\\(x = a(y - b)\\)',
    '\\(x = \\dfrac{y - b}{a}\\)',
    '\\(x = ay - b\\)',
  ],
  correct: '\\(x = a(y - b)\\)',
  hint: 'Subtract \\(b\\), then multiply by \\(a\\).',
  solution: '\\(y - b = \\dfrac{x}{a}\\) \\(\\Rightarrow\\) \\(x = a(y - b)\\).',
  svg: algebraFlow([{ text: 'y = x/a + b' }, { op: '− b' }, { text: 'y−b = x/a' }, { op: '× a' }, { text: 'x = a(y−b)', highlight: true }]),
  steps: steps4([
    { e: 'Given formula.', w: '\\(y = \\dfrac{x}{a} + b\\)', svg: algebraFlow([{ text: 'y = x/a + b' }, { op: '− b' }, { text: 'y−b = x/a' }]) },
    { e: 'Subtract \\(b\\) from both sides.', w: '\\(y - b = \\dfrac{x}{a}\\)', svg: diagrams.stepHighlight('y = x/a + b', '− b', 'y−b = x/a') },
    { e: 'Multiply both sides by \\(a\\).', w: '\\(a(y - b) = x\\)', svg: diagrams.stepHighlight('y−b = x/a', '× a', 'a(y−b) = x') },
    { e: 'Write with \\(x\\) as the subject.', w: '\\(x = a(y - b)\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-6b-q3b',
  difficulty: 'medium',
  timeLimit: 90,
  question: 'The average of two numbers \\(m\\) and \\(n\\) is given by\n\\[a = \\dfrac{m + n}{2}\\]\nMake \\(m\\) the subject.',
  opts: [
    '\\(m = 2a + n\\)',
    '\\(m = 2a - n\\)',
    '\\(m = \\dfrac{a - n}{2}\\)',
    '\\(m = a - 2n\\)',
  ],
  correct: '\\(m = 2a - n\\)',
  hint: 'Multiply by 2, then subtract \\(n\\).',
  solution: '\\(2a = m + n\\) \\(\\Rightarrow\\) \\(m = 2a - n\\).',
  svg: diagrams.average(),
  steps: steps4([
    { e: 'The average sits halfway between \\(m\\) and \\(n\\) on the number line.', w: '\\(a = \\dfrac{m + n}{2}\\)', svg: diagrams.average() },
    { e: 'Multiply both sides by 2 to clear the fraction.', w: '\\(2a = m + n\\)', svg: diagrams.stepHighlight('a = (m+n)/2', '× 2', '2a = m + n') },
    { e: 'Subtract \\(n\\) from both sides.', w: '\\(2a - n = m\\)' },
    { e: 'Write with \\(m\\) as the subject.', w: '\\(m = 2a - n\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-6b-q3c',
  difficulty: 'medium',
  timeLimit: 90,
  question: 'Make \\(u\\) the subject of the formula:\n\\[v = \\dfrac{u}{t}\\]',
  opts: [
    '\\(u = \\dfrac{v}{t}\\)',
    '\\(u = vt\\)',
    '\\(u = v - t\\)',
    '\\(u = \\dfrac{t}{v}\\)',
  ],
  correct: '\\(u = vt\\)',
  hint: 'Multiply both sides by \\(t\\).',
  solution: 'Multiply by \\(t\\): \\(u = vt\\).',
  svg: balanceScale('v', 'u/t', 'speed = distance / time'),
  steps: steps4([
    { e: 'This is the speed formula \\(v = \\dfrac{u}{t}\\) (distance over time).', w: '\\(v = \\dfrac{u}{t}\\)' },
    { e: 'Multiply both sides by \\(t\\).', w: '\\(vt = u\\)', svg: diagrams.stepHighlight('v = u/t', '× t', 'vt = u') },
    { e: 'The right-hand side is \\(u\\).', w: '\\(vt = u\\)' },
    { e: 'Write with \\(u\\) as the subject.', w: '\\(u = vt\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-6b-q3d',
  difficulty: 'hard',
  timeLimit: 120,
  question: 'The thin-lens formula is\n\\[\\dfrac{1}{f} = \\dfrac{1}{u} + \\dfrac{1}{v}\\]\nMake \\(f\\) the subject.',
  opts: [
    '\\(f = u + v\\)',
    '\\(f = \\dfrac{1}{u} + \\dfrac{1}{v}\\)',
    '\\(f = \\dfrac{uv}{u + v}\\)',
    '\\(f = \\dfrac{u + v}{uv}\\)',
  ],
  correct: '\\(f = \\dfrac{uv}{u + v}\\)',
  hint: 'Combine the right-hand side over a common denominator, then take the reciprocal.',
  solution: '\\(\\dfrac{1}{f} = \\dfrac{v + u}{uv}\\) \\(\\Rightarrow\\) \\(f = \\dfrac{uv}{u + v}\\).',
  svg: diagrams.lens(),
  steps: steps4([
    { e: 'Given the thin-lens formula. \\(f\\) is focal length, \\(u\\) object distance, \\(v\\) image distance.', w: '\\(\\dfrac{1}{f} = \\dfrac{1}{u} + \\dfrac{1}{v}\\)', svg: diagrams.lens() },
    { e: 'Combine the right-hand side with common denominator \\(uv\\).', w: '\\(\\dfrac{1}{f} = \\dfrac{v + u}{uv}\\)' },
    { e: 'Take the reciprocal of both sides (flip both fractions).', w: '\\(f = \\dfrac{uv}{u + v}\\)' },
    { e: 'So the focal length is the product of the distances over their sum.', w: '\\(f = \\dfrac{uv}{u + v}\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-6b-q3e',
  difficulty: 'hard',
  timeLimit: 120,
  question: 'Given\n\\[\\dfrac{1}{f} = \\dfrac{1}{u} + \\dfrac{1}{v}\\]\nMake \\(u\\) the subject.',
  opts: [
    '\\(u = f + v\\)',
    '\\(u = \\dfrac{fv}{v - f}\\)',
    '\\(u = \\dfrac{fv}{f - v}\\)',
    '\\(u = \\dfrac{f + v}{fv}\\)',
  ],
  correct: '\\(u = \\dfrac{fv}{v - f}\\)',
  hint: 'Isolate \\(\\dfrac{1}{u}\\), then take the reciprocal.',
  solution: '\\(\\dfrac{1}{u} = \\dfrac{1}{f} - \\dfrac{1}{v} = \\dfrac{v - f}{fv}\\) \\(\\Rightarrow\\) \\(u = \\dfrac{fv}{v - f}\\).',
  svg: diagrams.lens(),
  steps: steps4([
    { e: 'Start from the thin-lens formula and isolate the term with \\(u\\).', w: '\\(\\dfrac{1}{f} = \\dfrac{1}{u} + \\dfrac{1}{v}\\)', svg: diagrams.lens() },
    { e: 'Subtract \\(\\dfrac{1}{v}\\) from both sides.', w: '\\(\\dfrac{1}{u} = \\dfrac{1}{f} - \\dfrac{1}{v}\\)' },
    { e: 'Combine over common denominator \\(fv\\).', w: '\\(\\dfrac{1}{u} = \\dfrac{v - f}{fv}\\)' },
    { e: 'Take the reciprocal of both sides.', w: '\\(u = \\dfrac{fv}{v - f}\\)' },
  ]),
}));

// ═══════════════════════════════════════════════════════════════════════════
// Q4 — Geometric formulas (with SVG shapes)
// ═══════════════════════════════════════════════════════════════════════════

questions.push(mc({
  id: 'y9-6b-q4a',
  difficulty: 'easy',
  timeLimit: 75,
  question: 'The area of a rectangle is \\(A = lw\\).\nMake \\(l\\) the subject.',
  opts: [
    '\\(l = A + w\\)',
    '\\(l = Aw\\)',
    '\\(l = \\dfrac{A}{w}\\)',
    '\\(l = \\dfrac{w}{A}\\)',
  ],
  correct: '\\(l = \\dfrac{A}{w}\\)',
  hint: 'Divide both sides by the width \\(w\\).',
  solution: 'Divide by \\(w\\): \\(l = \\dfrac{A}{w}\\).',
  svg: diagrams.rect_lw(),
  steps: steps4([
    { e: 'Area of a rectangle equals length times width.', w: '\\(A = lw\\)', svg: diagrams.rect_lw() },
    { e: 'Divide both sides by \\(w\\) (assuming \\(w \\neq 0\\)).', w: '\\(\\dfrac{A}{w} = l\\)', svg: diagrams.stepHighlight('A = lw', '÷ w', 'A/w = l') },
    { e: 'The right-hand side is the length.', w: '\\(\\dfrac{A}{w} = l\\)' },
    { e: 'Write with \\(l\\) as the subject.', w: '\\(l = \\dfrac{A}{w}\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-6b-q4b',
  difficulty: 'easy',
  timeLimit: 75,
  question: 'The area of a triangle is \\(A = \\dfrac{1}{2}bh\\).\nMake \\(h\\) the subject.',
  opts: [
    '\\(h = \\dfrac{A}{2b}\\)',
    '\\(h = \\dfrac{2A}{b}\\)',
    '\\(h = 2Ab\\)',
    '\\(h = \\dfrac{b}{2A}\\)',
  ],
  correct: '\\(h = \\dfrac{2A}{b}\\)',
  hint: 'Multiply by 2, then divide by \\(b\\).',
  solution: '\\(2A = bh\\) \\(\\Rightarrow\\) \\(h = \\dfrac{2A}{b}\\).',
  svg: diagrams.triangle_bh(),
  steps: steps4([
    { e: 'Area of a triangle is half base times height.', w: '\\(A = \\dfrac{1}{2}bh\\)', svg: diagrams.triangle_bh() },
    { e: 'Multiply both sides by 2 to clear the fraction.', w: '\\(2A = bh\\)', svg: diagrams.stepHighlight('A = ½bh', '× 2', '2A = bh') },
    { e: 'Divide both sides by the base \\(b\\).', w: '\\(\\dfrac{2A}{b} = h\\)' },
    { e: 'Write with \\(h\\) as the subject.', w: '\\(h = \\dfrac{2A}{b}\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-6b-q4c',
  difficulty: 'medium',
  timeLimit: 90,
  question: 'The area of a circle is \\(A = \\pi r^{2}\\).\nMake \\(r\\) the subject (take the positive root).',
  opts: [
    '\\(r = \\dfrac{A}{\\pi}\\)',
    '\\(r = \\sqrt{A\\pi}\\)',
    '\\(r = \\sqrt{\\dfrac{A}{\\pi}}\\)',
    '\\(r = \\pi\\sqrt{A}\\)',
  ],
  correct: '\\(r = \\sqrt{\\dfrac{A}{\\pi}}\\)',
  hint: 'Divide by \\(\\pi\\), then take the square root.',
  solution: '\\(\\dfrac{A}{\\pi} = r^{2}\\) \\(\\Rightarrow\\) \\(r = \\sqrt{\\dfrac{A}{\\pi}}\\).',
  svg: diagrams.circle_r(),
  steps: steps4([
    { e: 'Area of a circle with radius \\(r\\).', w: '\\(A = \\pi r^{2}\\)', svg: diagrams.circle_r() },
    { e: 'Divide both sides by \\(\\pi\\).', w: '\\(\\dfrac{A}{\\pi} = r^{2}\\)', svg: diagrams.stepHighlight('A = πr²', '÷ π', 'A/π = r²') },
    { e: 'Take the positive square root of both sides (radius is positive).', w: '\\(r = \\sqrt{\\dfrac{A}{\\pi}}\\)' },
    { e: 'Final form with \\(r\\) as the subject.', w: '\\(r = \\sqrt{\\dfrac{A}{\\pi}}\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-6b-q4d',
  difficulty: 'easy',
  timeLimit: 75,
  question: 'The circumference of a circle is \\(C = 2\\pi r\\).\nMake \\(r\\) the subject.',
  opts: [
    '\\(r = 2\\pi C\\)',
    '\\(r = \\dfrac{C}{2\\pi}\\)',
    '\\(r = \\dfrac{2\\pi}{C}\\)',
    '\\(r = C - 2\\pi\\)',
  ],
  correct: '\\(r = \\dfrac{C}{2\\pi}\\)',
  hint: 'Divide both sides by \\(2\\pi\\).',
  solution: '\\(r = \\dfrac{C}{2\\pi}\\).',
  svg: diagrams.circle_circum(),
  steps: steps4([
    { e: 'Circumference equals \\(2\\pi\\) times the radius.', w: '\\(C = 2\\pi r\\)', svg: diagrams.circle_circum() },
    { e: 'Divide both sides by \\(2\\pi\\).', w: '\\(\\dfrac{C}{2\\pi} = r\\)', svg: diagrams.stepHighlight('C = 2πr', '÷ 2π', 'C/(2π) = r') },
    { e: 'The right-hand side is \\(r\\).', w: '\\(\\dfrac{C}{2\\pi} = r\\)' },
    { e: 'Write with \\(r\\) as the subject.', w: '\\(r = \\dfrac{C}{2\\pi}\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-6b-q4e',
  difficulty: 'medium',
  timeLimit: 90,
  question: 'The volume of a cylinder is \\(V = \\pi r^{2} h\\).\nMake \\(h\\) the subject.',
  opts: [
    '\\(h = V\\pi r^{2}\\)',
    '\\(h = \\dfrac{V}{\\pi r^{2}}\\)',
    '\\(h = \\dfrac{\\pi r^{2}}{V}\\)',
    '\\(h = V - \\pi r^{2}\\)',
  ],
  correct: '\\(h = \\dfrac{V}{\\pi r^{2}}\\)',
  hint: 'Divide both sides by the base area \\(\\pi r^{2}\\).',
  solution: '\\(h = \\dfrac{V}{\\pi r^{2}}\\).',
  svg: diagrams.cylinder(),
  steps: steps4([
    { e: 'Volume of a cylinder = base area \\(\\times\\) height.', w: '\\(V = \\pi r^{2} h\\)', svg: diagrams.cylinder() },
    { e: 'Divide both sides by \\(\\pi r^{2}\\).', w: '\\(\\dfrac{V}{\\pi r^{2}} = h\\)', svg: diagrams.stepHighlight('V = πr²h', '÷ πr²', 'V/(πr²) = h') },
    { e: 'The right-hand side is the height.', w: '\\(\\dfrac{V}{\\pi r^{2}} = h\\)' },
    { e: 'Write with \\(h\\) as the subject.', w: '\\(h = \\dfrac{V}{\\pi r^{2}}\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-6b-q4f',
  difficulty: 'hard',
  timeLimit: 120,
  question: 'The volume of a cone is \\(V = \\dfrac{1}{3}\\pi r^{2} h\\).\nMake \\(r\\) the subject (take the positive root).',
  opts: [
    '\\(r = \\sqrt{\\dfrac{3V}{\\pi h}}\\)',
    '\\(r = \\sqrt{\\dfrac{V}{3\\pi h}}\\)',
    '\\(r = \\dfrac{3V}{\\pi h}\\)',
    '\\(r = \\sqrt{3V\\pi h}\\)',
  ],
  correct: '\\(r = \\sqrt{\\dfrac{3V}{\\pi h}}\\)',
  hint: 'Multiply by 3, divide by \\(\\pi h\\), then take the square root.',
  solution: '\\(3V = \\pi r^{2} h\\) \\(\\Rightarrow\\) \\(r^{2} = \\dfrac{3V}{\\pi h}\\) \\(\\Rightarrow\\) \\(r = \\sqrt{\\dfrac{3V}{\\pi h}}\\).',
  svg: diagrams.cone(),
  steps: steps4([
    { e: 'Volume of a cone is one-third the volume of the enclosing cylinder.', w: '\\(V = \\dfrac{1}{3}\\pi r^{2} h\\)', svg: diagrams.cone() },
    { e: 'Multiply both sides by 3.', w: '\\(3V = \\pi r^{2} h\\)' },
    { e: 'Divide both sides by \\(\\pi h\\).', w: '\\(r^{2} = \\dfrac{3V}{\\pi h}\\)' },
    { e: 'Take the positive square root.', w: '\\(r = \\sqrt{\\dfrac{3V}{\\pi h}}\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-6b-q4g',
  difficulty: 'medium',
  timeLimit: 90,
  question: 'The area of a trapezium is \\(A = \\dfrac{1}{2}(a + b)h\\).\nMake \\(h\\) the subject.',
  opts: [
    '\\(h = \\dfrac{A}{a + b}\\)',
    '\\(h = \\dfrac{2A}{a + b}\\)',
    '\\(h = 2A(a + b)\\)',
    '\\(h = \\dfrac{a + b}{2A}\\)',
  ],
  correct: '\\(h = \\dfrac{2A}{a + b}\\)',
  hint: 'Multiply by 2, then divide by \\((a + b)\\).',
  solution: '\\(2A = (a + b)h\\) \\(\\Rightarrow\\) \\(h = \\dfrac{2A}{a + b}\\).',
  svg: diagrams.trapezium(),
  steps: steps4([
    { e: 'Trapezium area uses the average of the parallel sides times the height.', w: '\\(A = \\dfrac{1}{2}(a + b)h\\)', svg: diagrams.trapezium() },
    { e: 'Multiply both sides by 2.', w: '\\(2A = (a + b)h\\)', svg: diagrams.stepHighlight('A = ½(a+b)h', '× 2', '2A = (a+b)h') },
    { e: 'Divide both sides by \\((a + b)\\).', w: '\\(\\dfrac{2A}{a + b} = h\\)' },
    { e: 'Write with \\(h\\) as the subject.', w: '\\(h = \\dfrac{2A}{a + b}\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-6b-q4h',
  difficulty: 'easy',
  timeLimit: 75,
  question: 'The perimeter of a rectangle is \\(P = 2(l + w)\\).\nMake \\(w\\) the subject.',
  opts: [
    '\\(w = \\dfrac{P}{2} - l\\)',
    '\\(w = \\dfrac{P - l}{2}\\)',
    '\\(w = 2P - l\\)',
    '\\(w = P - 2l\\)',
  ],
  correct: '\\(w = \\dfrac{P}{2} - l\\)',
  hint: 'Divide by 2, then subtract \\(l\\). (Equivalent form: \\(w = \\dfrac{P - 2l}{2}\\).)',
  solution: '\\(\\dfrac{P}{2} = l + w\\) \\(\\Rightarrow\\) \\(w = \\dfrac{P}{2} - l\\).',
  svg: diagrams.rect_perimeter(),
  steps: steps4([
    { e: 'Perimeter is twice the sum of length and width.', w: '\\(P = 2(l + w)\\)', svg: diagrams.rect_perimeter() },
    { e: 'Divide both sides by 2.', w: '\\(\\dfrac{P}{2} = l + w\\)', svg: diagrams.stepHighlight('P = 2(l+w)', '÷ 2', 'P/2 = l+w') },
    { e: 'Subtract \\(l\\) from both sides.', w: '\\(\\dfrac{P}{2} - l = w\\)' },
    { e: 'Write with \\(w\\) as the subject.', w: '\\(w = \\dfrac{P}{2} - l\\)' },
  ]),
}));

// ═══════════════════════════════════════════════════════════════════════════
// Q5 — Science / multi-step applications
// ═══════════════════════════════════════════════════════════════════════════

questions.push(mc({
  id: 'y9-6b-q5a',
  difficulty: 'hard',
  timeLimit: 120,
  question: 'A stone is thrown from a cliff. The distance fallen is\n\\[s = ut + \\dfrac{1}{2}at^{2}\\]\nMake \\(u\\) the subject.',
  opts: [
    '\\(u = s - \\dfrac{1}{2}at^{2}\\)',
    '\\(u = \\dfrac{s}{t} - \\dfrac{1}{2}at\\)',
    '\\(u = st - \\dfrac{1}{2}at^{2}\\)',
    '\\(u = \\dfrac{s}{t} + \\dfrac{1}{2}at\\)',
  ],
  correct: '\\(u = \\dfrac{s}{t} - \\dfrac{1}{2}at\\)',
  hint: 'Subtract \\(\\tfrac{1}{2}at^{2}\\), then divide by \\(t\\). Simplify \\(\\dfrac{\\tfrac{1}{2}at^{2}}{t} = \\tfrac{1}{2}at\\).',
  solution: '\\(s - \\tfrac{1}{2}at^{2} = ut\\) \\(\\Rightarrow\\) \\(u = \\dfrac{s}{t} - \\dfrac{1}{2}at\\).',
  svg: diagrams.cliff(),
  steps: steps4([
    { e: 'Displacement formula with initial speed \\(u\\) and constant acceleration \\(a\\).', w: '\\(s = ut + \\dfrac{1}{2}at^{2}\\)', svg: diagrams.cliff() },
    { e: 'Subtract \\(\\dfrac{1}{2}at^{2}\\) from both sides to isolate the \\(ut\\) term.', w: '\\(s - \\dfrac{1}{2}at^{2} = ut\\)' },
    { e: 'Divide both sides by \\(t\\).', w: '\\(u = \\dfrac{s - \\tfrac{1}{2}at^{2}}{t}\\)' },
    { e: 'Split the fraction: \\(\\dfrac{s}{t} - \\dfrac{\\tfrac{1}{2}at^{2}}{t} = \\dfrac{s}{t} - \\dfrac{1}{2}at\\).', w: '\\(u = \\dfrac{s}{t} - \\dfrac{1}{2}at\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-6b-q5b',
  difficulty: 'hard',
  timeLimit: 120,
  question: 'Given the formula\n\\[v^{2} = u^{2} + 2as\\]\nMake \\(a\\) the subject.',
  opts: [
    '\\(a = v^{2} - u^{2} - 2s\\)',
    '\\(a = \\dfrac{v^{2} - u^{2}}{2s}\\)',
    '\\(a = \\dfrac{v^{2} + u^{2}}{2s}\\)',
    '\\(a = 2s(v^{2} - u^{2})\\)',
  ],
  correct: '\\(a = \\dfrac{v^{2} - u^{2}}{2s}\\)',
  hint: 'Subtract \\(u^{2}\\), then divide by \\(2s\\).',
  solution: '\\(v^{2} - u^{2} = 2as\\) \\(\\Rightarrow\\) \\(a = \\dfrac{v^{2} - u^{2}}{2s}\\).',
  svg: diagrams.motion(),
  steps: steps4([
    { e: 'This motion formula links speeds and displacement without time.', w: '\\(v^{2} = u^{2} + 2as\\)', svg: diagrams.motion() },
    { e: 'Subtract \\(u^{2}\\) from both sides.', w: '\\(v^{2} - u^{2} = 2as\\)', svg: diagrams.stepHighlight('v² = u² + 2as', '− u²', 'v² − u² = 2as') },
    { e: 'Divide both sides by \\(2s\\) (assuming \\(s \\neq 0\\)).', w: '\\(\\dfrac{v^{2} - u^{2}}{2s} = a\\)' },
    { e: 'Write with \\(a\\) as the subject.', w: '\\(a = \\dfrac{v^{2} - u^{2}}{2s}\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-6b-q5c',
  difficulty: 'medium',
  timeLimit: 90,
  question: 'The Fahrenheit–Celsius conversion is\n\\[F = \\dfrac{9}{5}C + 32\\]\nMake \\(C\\) the subject.',
  opts: [
    '\\(C = \\dfrac{5}{9}(F + 32)\\)',
    '\\(C = \\dfrac{5}{9}(F - 32)\\)',
    '\\(C = \\dfrac{9}{5}(F - 32)\\)',
    '\\(C = \\dfrac{5F}{9} - 32\\)',
  ],
  correct: '\\(C = \\dfrac{5}{9}(F - 32)\\)',
  hint: 'Subtract 32, then multiply by \\(\\dfrac{5}{9}\\).',
  solution: '\\(F - 32 = \\dfrac{9}{5}C\\) \\(\\Rightarrow\\) \\(C = \\dfrac{5}{9}(F - 32)\\).',
  svg: diagrams.thermometer(),
  steps: steps4([
    { e: 'Temperature conversion formula from Celsius to Fahrenheit.', w: '\\(F = \\dfrac{9}{5}C + 32\\)', svg: diagrams.thermometer() },
    { e: 'Subtract 32 from both sides.', w: '\\(F - 32 = \\dfrac{9}{5}C\\)', svg: diagrams.stepHighlight('F = ⁹⁄₅C + 32', '− 32', 'F − 32 = ⁹⁄₅C') },
    { e: 'Multiply both sides by \\(\\dfrac{5}{9}\\) (the reciprocal of \\(\\dfrac{9}{5}\\)).', w: '\\(\\dfrac{5}{9}(F - 32) = C\\)' },
    { e: 'Write with \\(C\\) as the subject.', w: '\\(C = \\dfrac{5}{9}(F - 32)\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-6b-q5d',
  difficulty: 'hard',
  timeLimit: 120,
  question: 'Kinetic energy is given by\n\\[E = \\dfrac{1}{2}mv^{2}\\]\nMake \\(v\\) the subject (take the positive root).',
  opts: [
    '\\(v = \\sqrt{\\dfrac{2E}{m}}\\)',
    '\\(v = \\sqrt{\\dfrac{E}{2m}}\\)',
    '\\(v = \\dfrac{2E}{m}\\)',
    '\\(v = \\sqrt{2Em}\\)',
  ],
  correct: '\\(v = \\sqrt{\\dfrac{2E}{m}}\\)',
  hint: 'Multiply by 2, divide by \\(m\\), then take the square root.',
  solution: '\\(2E = mv^{2}\\) \\(\\Rightarrow\\) \\(v^{2} = \\dfrac{2E}{m}\\) \\(\\Rightarrow\\) \\(v = \\sqrt{\\dfrac{2E}{m}}\\).',
  svg: diagrams.kinetic(),
  steps: steps4([
    { e: 'Kinetic energy of a mass \\(m\\) moving at speed \\(v\\).', w: '\\(E = \\dfrac{1}{2}mv^{2}\\)', svg: diagrams.kinetic() },
    { e: 'Multiply both sides by 2.', w: '\\(2E = mv^{2}\\)' },
    { e: 'Divide both sides by \\(m\\).', w: '\\(v^{2} = \\dfrac{2E}{m}\\)' },
    { e: 'Take the positive square root (speed is non-negative).', w: '\\(v = \\sqrt{\\dfrac{2E}{m}}\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-6b-q5e',
  difficulty: 'medium',
  timeLimit: 90,
  question: 'Simple interest is given by\n\\[I = \\dfrac{PRT}{100}\\]\nMake \\(T\\) the subject.',
  opts: [
    '\\(T = \\dfrac{100I}{PR}\\)',
    '\\(T = \\dfrac{I}{100PR}\\)',
    '\\(T = 100I - PR\\)',
    '\\(T = \\dfrac{PR}{100I}\\)',
  ],
  correct: '\\(T = \\dfrac{100I}{PR}\\)',
  hint: 'Multiply by 100, then divide by \\(PR\\).',
  solution: '\\(100I = PRT\\) \\(\\Rightarrow\\) \\(T = \\dfrac{100I}{PR}\\).',
  svg: diagrams.interest(),
  steps: steps4([
    { e: 'Simple interest \\(I\\) depends on principal \\(P\\), rate \\(R\\)% and time \\(T\\).', w: '\\(I = \\dfrac{PRT}{100}\\)', svg: diagrams.interest() },
    { e: 'Multiply both sides by 100.', w: '\\(100I = PRT\\)', svg: diagrams.stepHighlight('I = PRT/100', '× 100', '100I = PRT') },
    { e: 'Divide both sides by \\(PR\\).', w: '\\(\\dfrac{100I}{PR} = T\\)' },
    { e: 'Write with \\(T\\) as the subject.', w: '\\(T = \\dfrac{100I}{PR}\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-6b-q5f',
  difficulty: 'hard',
  timeLimit: 120,
  question: 'The surface area of a rectangular prism is\n\\[S = 2(lw + lh + hw)\\]\nMake \\(h\\) the subject.',
  opts: [
    '\\(h = \\dfrac{S - 2lw}{2(l + w)}\\)',
    '\\(h = \\dfrac{S}{2(l + w)} - lw\\)',
    '\\(h = \\dfrac{S - lw}{l + w}\\)',
    '\\(h = \\dfrac{S}{2lw} - l - w\\)',
  ],
  correct: '\\(h = \\dfrac{S - 2lw}{2(l + w)}\\)',
  hint: 'Expand, isolate terms with \\(h\\), then factor \\(h\\).',
  solution: '\\(\\dfrac{S}{2} = lw + h(l + w)\\) \\(\\Rightarrow\\) \\(h(l + w) = \\dfrac{S}{2} - lw\\) \\(\\Rightarrow\\) \\(h = \\dfrac{S - 2lw}{2(l + w)}\\).',
  svg: diagrams.surface_box(),
  steps: steps4([
    { e: 'Total surface area of a rectangular box with dimensions \\(l\\), \\(w\\), \\(h\\).', w: '\\(S = 2(lw + lh + hw)\\)', svg: diagrams.surface_box() },
    { e: 'Divide by 2, then expand and group the terms that contain \\(h\\).', w: '\\(\\dfrac{S}{2} = lw + h(l + w)\\)' },
    { e: 'Subtract \\(lw\\) from both sides.', w: '\\(\\dfrac{S}{2} - lw = h(l + w)\\)' },
    { e: 'Divide by \\((l + w)\\) and rewrite the left side with common denominator 2: \\(\\dfrac{S - 2lw}{2(l + w)}\\).', w: '\\(h = \\dfrac{S - 2lw}{2(l + w)}\\)' },
  ]),
}));

// ═══════════════════════════════════════════════════════════════════════════
// Q6 — Powers, roots, Pythagoras, pendulum
// ═══════════════════════════════════════════════════════════════════════════

questions.push(mc({
  id: 'y9-6b-q6a',
  difficulty: 'medium',
  timeLimit: 90,
  question: 'Make \\(x\\) the subject of the formula:\n\\[y = \\sqrt{\\dfrac{x}{a}}\\]',
  opts: [
    '\\(x = ay\\)',
    '\\(x = ay^{2}\\)',
    '\\(x = \\dfrac{y^{2}}{a}\\)',
    '\\(x = a^{2}y\\)',
  ],
  correct: '\\(x = ay^{2}\\)',
  hint: 'Square both sides, then multiply by \\(a\\).',
  solution: '\\(y^{2} = \\dfrac{x}{a}\\) \\(\\Rightarrow\\) \\(x = ay^{2}\\).',
  svg: algebraFlow([{ text: 'y = √(x/a)' }, { op: 'square' }, { text: 'y² = x/a' }, { op: '× a' }, { text: 'x = ay²', highlight: true }]),
  steps: steps4([
    { e: 'Given formula with a square root.', w: '\\(y = \\sqrt{\\dfrac{x}{a}}\\)' },
    { e: 'Square both sides to remove the square root.', w: '\\(y^{2} = \\dfrac{x}{a}\\)', svg: diagrams.stepHighlight('y = √(x/a)', 'square', 'y² = x/a') },
    { e: 'Multiply both sides by \\(a\\).', w: '\\(ay^{2} = x\\)' },
    { e: 'Write with \\(x\\) as the subject.', w: '\\(x = ay^{2}\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-6b-q6b',
  difficulty: 'medium',
  timeLimit: 90,
  question: 'By Pythagoras,\n\\[c^{2} = a^{2} + b^{2}\\]\nMake \\(a\\) the subject (take the positive root).',
  opts: [
    '\\(a = c - b\\)',
    '\\(a = \\sqrt{c^{2} + b^{2}}\\)',
    '\\(a = \\sqrt{c^{2} - b^{2}}\\)',
    '\\(a = c^{2} - b^{2}\\)',
  ],
  correct: '\\(a = \\sqrt{c^{2} - b^{2}}\\)',
  hint: 'Subtract \\(b^{2}\\), then take the square root.',
  solution: '\\(a^{2} = c^{2} - b^{2}\\) \\(\\Rightarrow\\) \\(a = \\sqrt{c^{2} - b^{2}}\\).',
  svg: diagrams.right_triangle(),
  steps: steps4([
    { e: 'In a right-angled triangle, the square of the hypotenuse equals the sum of the squares of the other two sides.', w: '\\(c^{2} = a^{2} + b^{2}\\)', svg: diagrams.right_triangle() },
    { e: 'Subtract \\(b^{2}\\) from both sides.', w: '\\(c^{2} - b^{2} = a^{2}\\)', svg: diagrams.stepHighlight('c² = a² + b²', '− b²', 'c² − b² = a²') },
    { e: 'Take the positive square root (length is positive).', w: '\\(a = \\sqrt{c^{2} - b^{2}}\\)' },
    { e: 'Final form with \\(a\\) as the subject.', w: '\\(a = \\sqrt{c^{2} - b^{2}}\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-6b-q6c',
  difficulty: 'hard',
  timeLimit: 120,
  question: 'The period of a simple pendulum is\n\\[T = 2\\pi\\sqrt{\\dfrac{l}{g}}\\]\nMake \\(l\\) the subject.',
  opts: [
    '\\(l = \\dfrac{Tg}{2\\pi}\\)',
    '\\(l = \\dfrac{T^{2}g}{4\\pi^{2}}\\)',
    '\\(l = \\dfrac{T^{2}g}{2\\pi}\\)',
    '\\(l = 4\\pi^{2}T^{2}g\\)',
  ],
  correct: '\\(l = \\dfrac{T^{2}g}{4\\pi^{2}}\\)',
  hint: 'Divide by \\(2\\pi\\), square both sides, then multiply by \\(g\\).',
  solution: '\\(\\dfrac{T}{2\\pi} = \\sqrt{\\dfrac{l}{g}}\\) \\(\\Rightarrow\\) \\(\\dfrac{T^{2}}{4\\pi^{2}} = \\dfrac{l}{g}\\) \\(\\Rightarrow\\) \\(l = \\dfrac{T^{2}g}{4\\pi^{2}}\\).',
  svg: diagrams.pendulum(),
  steps: steps4([
    { e: 'Period \\(T\\) depends on length \\(l\\) and gravity \\(g\\).', w: '\\(T = 2\\pi\\sqrt{\\dfrac{l}{g}}\\)', svg: diagrams.pendulum() },
    { e: 'Divide both sides by \\(2\\pi\\).', w: '\\(\\dfrac{T}{2\\pi} = \\sqrt{\\dfrac{l}{g}}\\)' },
    { e: 'Square both sides.', w: '\\(\\dfrac{T^{2}}{4\\pi^{2}} = \\dfrac{l}{g}\\)' },
    { e: 'Multiply both sides by \\(g\\).', w: '\\(l = \\dfrac{T^{2}g}{4\\pi^{2}}\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-6b-q6d',
  difficulty: 'hard',
  timeLimit: 120,
  question: 'Make \\(x\\) the subject of the formula:\n\\[y = \\dfrac{ax + b}{cx + d}\\]',
  opts: [
    '\\(x = \\dfrac{b - dy}{cy - a}\\)',
    '\\(x = \\dfrac{dy - b}{a - cy}\\)',
    '\\(x = \\dfrac{b - dy}{a - cy}\\)',
    '\\(x = \\dfrac{ay - b}{c - dy}\\)',
  ],
  correct: '\\(x = \\dfrac{dy - b}{a - cy}\\)',
  hint: 'Cross-multiply, collect terms with \\(x\\) on one side, then factor.',
  solution: '\\(y(cx + d) = ax + b\\) \\(\\Rightarrow\\) \\(cxy - ax = b - dy\\) \\(\\Rightarrow\\) \\(x(cy - a) = b - dy\\) \\(\\Rightarrow\\) \\(x = \\dfrac{dy - b}{a - cy}\\).',
  svg: algebraFlow([{ text: 'y = (ax+b)/(cx+d)' }, { op: '× (cx+d)' }, { text: 'y(cx+d) = ax+b' }, { op: 'collect x' }, { text: 'x = (dy−b)/(a−cy)', highlight: true }]),
  steps: steps4([
    { e: 'Start with a linear fractional formula. Multiply both sides by the denominator.', w: '\\(y(cx + d) = ax + b\\)', svg: diagrams.stepHighlight('y = (ax+b)/(cx+d)', '× (cx+d)', 'y(cx+d) = ax+b') },
    { e: 'Expand the left-hand side.', w: '\\(cxy + dy = ax + b\\)' },
    { e: 'Collect terms with \\(x\\) on the left and constants on the right: subtract \\(ax\\) and subtract \\(dy\\).', w: '\\(cxy - ax = b - dy\\)\\n\\(x(cy - a) = b - dy\\)', svg: diagrams.stepHighlight('cxy + dy = ax + b', 'collect x', 'x(cy−a) = b−dy') },
    { e: 'Divide by \\((cy - a)\\). Multiplying numerator and denominator by \\(-1\\) gives the equivalent form \\(\\dfrac{dy - b}{a - cy}\\).', w: '\\(x = \\dfrac{dy - b}{a - cy}\\)', svg: diagrams.stepHighlight('x(cy−a) = b−dy', '÷ (cy−a)', 'x = (dy−b)/(a−cy)') },
  ]),
}));

// ═══════════════════════════════════════════════════════════════════════════
// Q7 — Apply rearranged formula with numbers (check understanding)
// ═══════════════════════════════════════════════════════════════════════════

questions.push(mc({
  id: 'y9-6b-q7a',
  difficulty: 'medium',
  timeLimit: 100,
  question: 'The area of a circle is \\(A = \\pi r^{2}\\).\nRearrange to make \\(r\\) the subject, then find \\(r\\) when \\(A = 50\\) (use \\(\\pi = 3.14\\), correct to 2 decimal places).',
  opts: [
    '\\(r = 3.99\\)',
    '\\(r = 4.00\\)',
    '\\(r = 7.98\\)',
    '\\(r = 15.92\\)',
  ],
  correct: '\\(r = 3.99\\)',
  hint: '\\(r = \\sqrt{A/\\pi} = \\sqrt{50/3.14}\\).',
  solution: '\\(r = \\sqrt{\\dfrac{50}{3.14}} = \\sqrt{15.9236\\ldots} \\approx 3.99\\).',
  svg: diagrams.circle_r('r = ?'),
  steps: steps4([
    { e: 'Rearrange: divide by \\(\\pi\\) and take the positive square root.', w: '\\(r = \\sqrt{\\dfrac{A}{\\pi}}\\)', svg: diagrams.circle_r() },
    { e: 'Substitute \\(A = 50\\) and \\(\\pi = 3.14\\).', w: '\\(r = \\sqrt{\\dfrac{50}{3.14}}\\)' },
    { e: 'Compute the quotient first.', w: '\\(\\dfrac{50}{3.14} \\approx 15.9236\\)' },
    { e: 'Take the square root and round to 2 decimal places.', w: '\\(r \\approx \\sqrt{15.9236} \\approx 3.99\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-6b-q7b',
  difficulty: 'medium',
  timeLimit: 100,
  question: 'Using \\(v = u + at\\), make \\(t\\) the subject and find \\(t\\) when \\(v = 30\\), \\(u = 10\\), \\(a = 4\\).',
  opts: [
    '\\(t = 5\\)',
    '\\(t = 10\\)',
    '\\(t = 2.5\\)',
    '\\(t = 40\\)',
  ],
  correct: '\\(t = 5\\)',
  hint: '\\(t = \\dfrac{v - u}{a} = \\dfrac{30 - 10}{4}\\).',
  solution: '\\(t = \\dfrac{30 - 10}{4} = \\dfrac{20}{4} = 5\\).',
  svg: diagrams.motion(),
  steps: steps4([
    { e: 'Rearrange for time: subtract \\(u\\), divide by \\(a\\).', w: '\\(t = \\dfrac{v - u}{a}\\)', svg: diagrams.motion() },
    { e: 'Substitute the given values.', w: '\\(t = \\dfrac{30 - 10}{4}\\)' },
    { e: 'Simplify the numerator.', w: '\\(t = \\dfrac{20}{4}\\)' },
    { e: 'Divide.', w: '\\(t = 5\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-6b-q7c',
  difficulty: 'medium',
  timeLimit: 100,
  question: 'Using \\(F = \\dfrac{9}{5}C + 32\\), make \\(C\\) the subject and convert \\(F = 86\\) to Celsius.',
  opts: [
    '\\(C = 30\\)',
    '\\(C = 48.9\\)',
    '\\(C = 186.8\\)',
    '\\(C = 20\\)',
  ],
  correct: '\\(C = 30\\)',
  hint: '\\(C = \\dfrac{5}{9}(F - 32) = \\dfrac{5}{9}(86 - 32)\\).',
  solution: '\\(C = \\dfrac{5}{9}(86 - 32) = \\dfrac{5}{9} \\times 54 = 30\\).',
  svg: diagrams.thermometer(),
  steps: steps4([
    { e: 'Rearranged conversion formula.', w: '\\(C = \\dfrac{5}{9}(F - 32)\\)', svg: diagrams.thermometer() },
    { e: 'Substitute \\(F = 86\\).', w: '\\(C = \\dfrac{5}{9}(86 - 32)\\)' },
    { e: 'Simplify inside the brackets.', w: '\\(C = \\dfrac{5}{9} \\times 54\\)' },
    { e: 'Multiply: \\(5 \\times 6 = 30\\) (since \\(54/9 = 6\\)).', w: '\\(C = 30\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-6b-q7d',
  difficulty: 'hard',
  timeLimit: 120,
  question: 'A triangle has area \\(A = 48\\text{ cm}^{2}\\) and base \\(b = 12\\text{ cm}\\).\nUsing \\(A = \\dfrac{1}{2}bh\\), find the height \\(h\\).',
  opts: [
    '\\(h = 4\\text{ cm}\\)',
    '\\(h = 8\\text{ cm}\\)',
    '\\(h = 6\\text{ cm}\\)',
    '\\(h = 2\\text{ cm}\\)',
  ],
  correct: '\\(h = 8\\text{ cm}\\)',
  hint: '\\(h = \\dfrac{2A}{b} = \\dfrac{2 \\times 48}{12}\\).',
  solution: '\\(h = \\dfrac{2 \\times 48}{12} = \\dfrac{96}{12} = 8\\text{ cm}\\).',
  svg: diagrams.triangle_bh('12 cm', 'h'),
  steps: steps4([
    { e: 'Rearrange the triangle area formula for height.', w: '\\(h = \\dfrac{2A}{b}\\)', svg: diagrams.triangle_bh('12 cm', 'h') },
    { e: 'Substitute \\(A = 48\\) and \\(b = 12\\).', w: '\\(h = \\dfrac{2 \\times 48}{12}\\)' },
    { e: 'Compute the numerator.', w: '\\(h = \\dfrac{96}{12}\\)' },
    { e: 'Divide to find the height.', w: '\\(h = 8\\text{ cm}\\)' },
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
  if (!q.graphData?.svg) console.warn('WARN no main svg', q.id);
  const withStepSvg = q.solutionSteps.filter((s) => s.graphData?.svg).length;
  if (withStepSvg < 1) console.warn('WARN no step svg', q.id);
}

// Spot-check numeric answers
function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}
assert(Math.abs(Math.sqrt(50 / 3.14) - 3.99) < 0.01, '7a radius');
assert((30 - 10) / 4 === 5, '7b time');
assert((5 / 9) * (86 - 32) === 30, '7c C');
assert((2 * 48) / 12 === 8, '7d h');

// ─── Write seed file ─────────────────────────────────────────────────────────
const seedPath = path.join(ROOT, 'src/constants/seedYear9Ch6BQuestions.js');
const fileBody =
  'export const Y9_CH6B_QUESTIONS = ' +
  JSON.stringify(questions, null, 2) +
  ';\n\nexport default Y9_CH6B_QUESTIONS;\n';
fs.writeFileSync(seedPath, fileBody);
console.log('Wrote', seedPath, '(' + (fileBody.length / 1024).toFixed(1) + ' KB)');

if (SEED_ONLY) {
  console.log('Seed-only mode — skipping Firestore.');
  process.exit(0);
}

// ─── Push to Firestore ───────────────────────────────────────────────────────
const sa = JSON.parse(
  fs.readFileSync(
    '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
    'utf8'
  )
);
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function push() {
  let batch = db.batch();
  let ops = 0;
  let n = 0;
  for (const q of questions) {
    const ref = db.collection('questions').doc(q.id);
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

  const idx = spawnSync(
    'node',
    ['tools/scripts/rebuildQuestionIndexes.js', 'y9-6'],
    { encoding: 'utf8', timeout: 180000, cwd: ROOT }
  );
  console.log(idx.stdout || '');
  if (idx.stderr) console.error(idx.stderr);
  if (idx.status !== 0) console.warn('index rebuild exit', idx.status);

  for (const id of ['y9-6b-q1a', 'y9-6b-q4c', 'y9-6b-q5c', 'y9-6b-q6b', 'y9-6b-q7a']) {
    const d = (await db.collection('questions').doc(id).get()).data();
    console.log(
      id,
      'type=', d?.type,
      'a=', d?.a,
      'opts[a]=', d?.opts?.[d.a],
      'svg=', !!(d?.graphData?.svg),
      'steps=', d?.solutionSteps?.length,
      'stepSvg=', d?.solutionSteps?.filter((s) => s.graphData?.svg).length
    );
  }
}

await push();
console.log('Done.');
