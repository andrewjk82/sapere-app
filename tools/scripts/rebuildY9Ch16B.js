/**
 * Rebuild Year 9 Ch16B — Review of surface area of a prism
 *
 * Replaces broken jsxGraph (points-only) with clear SVG diagrams and
 * problem-specific solution steps.
 *
 * Usage:
 *   node tools/scripts/rebuildY9Ch16B.js
 *   node tools/scripts/rebuildY9Ch16B.js --seed-only
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
const fill3 = '#e0e7ff';
const fillOpen = '#f1f5f9';
const stroke = '#475569';
const accent = '#3b82f6';
const textFill = '#1e293b';
const muted = '#64748b';

function label(x, y, t, opts = {}) {
  const anchor = opts.anchor || 'middle';
  const size = opts.size || 12;
  const weight = opts.weight || 600;
  const col = opts.color || textFill;
  return `<text x="${x}" y="${y}" font-family="system-ui,-apple-system,sans-serif" font-size="${size}" font-weight="${weight}" fill="${col}" text-anchor="${anchor}" dominant-baseline="central">${t}</text>`;
}

function poly(pts, f = fill, op = 0.55, sw = 2) {
  const d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ') + ' Z';
  return `<path d="${d}" fill="${f}" fill-opacity="${op}" stroke="${stroke}" stroke-width="${sw}" stroke-linejoin="round"/>`;
}

function line(x1, y1, x2, y2, col = stroke, sw = 2, dash = '') {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="${sw}" stroke-linecap="round"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
}

/** Dimension arrow between two points with midpoint label */
function dimArrow(x1, y1, x2, y2, text, opts = {}) {
  const col = opts.color || accent;
  const off = opts.offset || 0;
  // perpendicular offset for label
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const px = (-dy / len) * off;
  const py = (dx / len) * off;
  const ax = x1 + px;
  const ay = y1 + py;
  const bx = x2 + px;
  const by = y2 + py;
  const mx = (ax + bx) / 2;
  const my = (ay + by) / 2;
  // small ticks at ends
  const tx = (-dy / len) * 5;
  const ty = (dx / len) * 5;
  return [
    line(ax, ay, bx, by, col, 1.4),
    line(ax - tx, ay - ty, ax + tx, ay + ty, col, 1.4),
    line(bx - tx, by - ty, bx + tx, by + ty, col, 1.4),
    label(mx + (opts.lx || 0), my + (opts.ly || 0), text, { size: opts.size || 12, color: col }),
  ].join('');
}

/**
 * Isometric rectangular prism / cube.
 * For openTop: draw hollow open box looking into the interior (floor + 4 walls, no lid).
 * proportions: pass l, w, h as relative numbers for visual scale.
 */
function rectPrism({ lLab, wLab, hLab, openTop = false, scale = 1, l = 1, w = 1, h = 1 }) {
  // Normalise proportions so longest base edge ~ 120px
  const maxBase = Math.max(l, w, 0.01);
  const unit = (120 * scale) / maxBase;
  const L = l * unit; // along +x (right)
  const H = Math.max(h * unit * 0.95, 40); // vertical
  const D = w * unit * 0.55; // isometric depth (up-right)
  const depthY = D * 0.55;

  const ox = openTop ? 55 : 60;
  const oy = openTop ? 195 : 175;

  // Outer corners (closed prism style)
  // Front-bottom-left A, front-bottom-right B, front-top-right C, front-top-left D
  // Back: E F G H (H = back-top-left)
  const A = [ox, oy];
  const B = [ox + L, oy];
  const C = [ox + L, oy - H];
  const Dd = [ox, oy - H];
  const E = [ox + D, oy - depthY];
  const F = [ox + L + D, oy - depthY];
  const G = [ox + L + D, oy - H - depthY];
  const Hh = [ox + D, oy - H - depthY];

  if (!openTop) {
    return svgWrap(320, 230, [
      poly([A, Dd, Hh, E], fill3, 0.5),
      poly([Dd, C, G, Hh], fill2, 0.55),
      poly([A, B, C, Dd], fill, 0.6),
      line(E[0], E[1], F[0], F[1], muted, 1.2, '4 3'),
      line(F[0], F[1], G[0], G[1], muted, 1.2, '4 3'),
      line(E[0], E[1], A[0], A[1], muted, 1.2, '4 3'),
      line(B[0], B[1], F[0], F[1], stroke, 2),
      line(F[0], F[1], G[0], G[1], stroke, 2),
      line(C[0], C[1], G[0], G[1], stroke, 2),
      label((A[0] + B[0]) / 2, oy + 16, lLab),
      label(B[0] + 20, (B[1] + C[1]) / 2, hLab),
      label((B[0] + F[0]) / 2 + 16, (B[1] + F[1]) / 2 + 6, wLab),
    ].join(''));
  }

  // ── Open-top box: look down into interior ────────────────────────────────
  // Draw outer shell + visible interior floor (no top face)
  // Outer bottom front A-B, outer top rim D-C-G-H, interior floor slightly inset
  const inset = Math.min(L, D) * 0.08 + 4;
  // Interior top rim (same as outer top) — open
  // Interior floor corners (visible through open top)
  const iA = [ox + inset, oy - inset * 0.35]; // front-left floor
  const iB = [ox + L - inset, oy - inset * 0.35];
  const iE = [ox + D + inset * 0.3, oy - depthY + inset * 0.5];
  const iF = [ox + L + D - inset * 0.5, oy - depthY + inset * 0.5];

  // Wall thickness at top rim: outer top D,C,G,H vs inner top slightly inset
  const t = 7;
  const iDd = [Dd[0] + t, Dd[1] + t * 0.3];
  const iC = [C[0] - t, C[1] + t * 0.3];
  const iG = [G[0] - t * 0.5, G[1] + t * 0.6];
  const iHh = [Hh[0] + t * 0.5, Hh[1] + t * 0.6];

  // Interior floor projected under the open top (farther down from rim)
  const floorDrop = H * 0.72;
  const fA = [iDd[0] + (iA[0] - iDd[0]) * 0.15, iDd[1] + floorDrop * 0.15 + 8];
  // Better: floor is parallelogram parallel to base at bottom interior
  const fFL = [ox + t + 2, oy - t * 0.2]; // front-left floor near outer bottom but inside
  const fFR = [ox + L - t - 2, oy - t * 0.2];
  const fBR = [ox + L + D - t * 0.8 - 4, oy - depthY + t * 0.4];
  const fBL = [ox + D + t * 0.4 + 2, oy - depthY + t * 0.4];
  // Raise floor visually? No - floor is at bottom. For open box looking from above-front,
  // floor should be the bottom parallelogram inside walls.

  // Actually classic open-box isometric:
  // 1. Outer vertical walls
  // 2. Top rim (thick)
  // 3. Interior faces of far walls
  // 4. Interior floor

  const parts = [];

  // Outer left wall (outer face)
  parts.push(poly([A, Dd, Hh, E], '#93c5fd', 0.55));
  // Outer right/back-ish depth face (right outer)
  parts.push(poly([B, C, G, F], '#bfdbfe', 0.5));
  // Outer front face
  parts.push(poly([A, B, C, Dd], '#dbeafe', 0.65));

  // Interior floor (bottom of box) — slightly lighter brown/yellow to read as base
  parts.push(poly([
    [ox + 8, oy - 6],
    [ox + L - 8, oy - 6],
    [ox + L + D - 10, oy - depthY + 4],
    [ox + D + 6, oy - depthY + 4],
  ], '#fde68a', 0.75));

  // Interior back wall (inside, visible through opening)
  parts.push(poly([
    [ox + D + 6, oy - depthY + 4],
    [ox + L + D - 10, oy - depthY + 4],
    [ox + L + D - 10, oy - H - depthY + 14],
    [ox + D + 6, oy - H - depthY + 14],
  ], '#fef3c7', 0.7));

  // Interior left wall (inside)
  parts.push(poly([
    [ox + 8, oy - 6],
    [ox + D + 6, oy - depthY + 4],
    [ox + D + 6, oy - H - depthY + 14],
    [ox + 8, oy - H + 10],
  ], '#fef9c3', 0.55));

  // Top rim (open) — four thin parallelograms around the opening
  // Front rim
  parts.push(poly([Dd, C, [C[0] - 6, C[1] + 10], [Dd[0] + 6, Dd[1] + 10]], '#64748b', 0.35));
  // Right rim
  parts.push(poly([C, G, [G[0] - 8, G[1] + 10], [C[0] - 6, C[1] + 10]], '#475569', 0.3));
  // Back rim
  parts.push(poly([G, Hh, [Hh[0] + 6, Hh[1] + 10], [G[0] - 8, G[1] + 10]], '#64748b', 0.25));
  // Left rim
  parts.push(poly([Hh, Dd, [Dd[0] + 6, Dd[1] + 10], [Hh[0] + 6, Hh[1] + 10]], '#475569', 0.3));

  // Outline edges (crisp)
  parts.push(line(A[0], A[1], B[0], B[1], stroke, 2.2));
  parts.push(line(B[0], B[1], C[0], C[1], stroke, 2.2));
  parts.push(line(C[0], C[1], Dd[0], Dd[1], stroke, 2.2));
  parts.push(line(Dd[0], Dd[1], A[0], A[1], stroke, 2.2));
  parts.push(line(B[0], B[1], F[0], F[1], stroke, 2.2));
  parts.push(line(F[0], F[1], G[0], G[1], stroke, 2.2));
  parts.push(line(C[0], C[1], G[0], G[1], stroke, 2.2));
  parts.push(line(A[0], A[1], E[0], E[1], stroke, 2.2));
  parts.push(line(E[0], E[1], Hh[0], Hh[1], stroke, 2.2));
  parts.push(line(Dd[0], Dd[1], Hh[0], Hh[1], stroke, 2.2));
  parts.push(line(E[0], E[1], F[0], F[1], stroke, 2.2));
  // open top inner edges (dashed) to emphasise hollow
  parts.push(line(Dd[0] + 6, Dd[1] + 10, C[0] - 6, C[1] + 10, muted, 1.5, '5 3'));
  parts.push(line(C[0] - 6, C[1] + 10, G[0] - 8, G[1] + 10, muted, 1.5, '5 3'));
  parts.push(line(G[0] - 8, G[1] + 10, Hh[0] + 6, Hh[1] + 10, muted, 1.5, '5 3'));
  parts.push(line(Hh[0] + 6, Hh[1] + 10, Dd[0] + 6, Dd[1] + 10, muted, 1.5, '5 3'));

  // Labels
  parts.push(label((A[0] + B[0]) / 2, oy + 18, lLab, { size: 13 }));
  parts.push(label(B[0] + 22, (B[1] + C[1]) / 2, hLab, { size: 13 }));
  parts.push(label((B[0] + F[0]) / 2 + 18, (B[1] + F[1]) / 2 + 8, wLab, { size: 13 }));
  parts.push(label((Dd[0] + G[0]) / 2, (Dd[1] + G[1]) / 2 - 4, 'OPEN TOP', {
    size: 12,
    color: '#dc2626',
    weight: 700,
  }));

  return svgWrap(340, 250, parts.join(''));
}

/**
 * Square-base prism for the ice-cream container (q2).
 * Problem text already says "open at the top" — draw a plain closed
 * square prism so the figure stays simple; no open-top styling.
 */
function squareBasePrism({ sideLab, hLab }) {
  return rectPrism({
    lLab: sideLab,
    wLab: sideLab,
    hLab,
    openTop: false,
    l: 12,
    w: 12,
    h: 8,
    scale: 1.05,
  });
}

/** Open rectangular shoe box with true proportion 30×20×10.5 */
function openShoeBox({ lLab, wLab, hLab }) {
  return rectPrism({
    lLab,
    wLab,
    hLab,
    openTop: true,
    l: 30,
    w: 20,
    h: 10.5,
    scale: 1.0,
  });
}

function cube(sideLab) {
  return rectPrism({ lLab: sideLab, wLab: sideLab, hLab: sideLab, scale: 0.85, l: 1, w: 1, h: 1 });
}

function triangularPrism({ aLab, bLab, cLab, lenLab }) {
  // right triangle cross-section extruded to the right
  const A = [50, 170], B = [150, 170], C = [50, 70]; // 6-8-10 style right triangle
  const L = 90;
  const A2 = [A[0] + L, A[1] - 30], B2 = [B[0] + L, B[1] - 30], C2 = [C[0] + L, C[1] - 30];
  return svgWrap(320, 220, [
    poly([A, B, B2, A2], fill3, 0.5), // bottom
    poly([B, C, C2, B2], fill2, 0.5), // hypotenuse face
    poly([A, B, C], fill, 0.65), // front triangle
    line(A[0], A[1], A2[0], A2[1], stroke, 2),
    line(C[0], C[1], C2[0], C2[1], stroke, 2),
    line(A2[0], A2[1], B2[0], B2[1], stroke, 2),
    line(B2[0], B2[1], C2[0], C2[1], stroke, 2),
    line(A2[0], A2[1], C2[0], C2[1], stroke, 2),
    label((A[0] + B[0]) / 2, 188, aLab),
    label(A[0] - 18, (A[1] + C[1]) / 2, bLab),
    label((B[0] + C[0]) / 2 + 18, (B[1] + C[1]) / 2, cLab),
    label((A[0] + A2[0]) / 2, A[1] + 8, lenLab, { size: 11 }),
  ].join(''));
}

function isosTriangularPrism({ baseLab, sideLab, hLab, lenLab }) {
  const A = [40, 170], B = [180, 170], C = [110, 80];
  const L = 70;
  const A2 = [A[0] + L, A[1] - 25], B2 = [B[0] + L, B[1] - 25], C2 = [C[0] + L, C[1] - 25];
  return svgWrap(320, 220, [
    poly([A, B, B2, A2], fill3, 0.5),
    poly([B, C, C2, B2], fill2, 0.5),
    poly([A, B, C], fill, 0.65),
    line(A[0], A[1], A2[0], A2[1], stroke, 2),
    line(C[0], C[1], C2[0], C2[1], stroke, 2),
    line(A2[0], A2[1], B2[0], B2[1], stroke, 2),
    line(B2[0], B2[1], C2[0], C2[1], stroke, 2),
    line(A2[0], A2[1], C2[0], C2[1], stroke, 2),
    // height dashed
    line(C[0], C[1], C[0], A[1], accent, 1.5, '4 3'),
    label((A[0] + B[0]) / 2, 188, baseLab),
    label((A[0] + C[0]) / 2 - 14, (A[1] + C[1]) / 2, sideLab),
    label(C[0] + 14, (C[1] + A[1]) / 2, hLab, { size: 11, color: accent }),
    label((B[0] + B2[0]) / 2 + 10, (B[1] + B2[1]) / 2 + 10, lenLab, { size: 11 }),
  ].join(''));
}

function trapezoidalPrism({ topLab, botLab, hLab, slantLab, lenLab, rightVertLab }) {
  // front trapezium
  const A = [50, 170], B = [210, 170], C = [180, 70], D = [80, 70];
  const L = 55;
  const shift = (p) => [p[0] + L, p[1] - 22];
  const [A2, B2, C2, D2] = [A, B, C, D].map(shift);
  return svgWrap(320, 220, [
    poly([A, B, B2, A2], fill3, 0.45),
    poly([B, C, C2, B2], fill2, 0.5),
    poly([A, B, C, D], fill, 0.6),
    line(A[0], A[1], A2[0], A2[1], stroke, 2),
    line(D[0], D[1], D2[0], D2[1], stroke, 2),
    line(C[0], C[1], C2[0], C2[1], stroke, 2),
    line(A2[0], A2[1], B2[0], B2[1], stroke, 2),
    line(B2[0], B2[1], C2[0], C2[1], stroke, 2),
    line(C2[0], C2[1], D2[0], D2[1], stroke, 2),
    line(D2[0], D2[1], A2[0], A2[1], stroke, 2),
    // height mark
    line(D[0], D[1], D[0], A[1], accent, 1.5, '4 3'),
    label((A[0] + B[0]) / 2, 188, botLab),
    label((D[0] + C[0]) / 2, 55, topLab),
    label(D[0] - 16, (D[1] + A[1]) / 2, hLab || rightVertLab, { size: 11, color: accent }),
    label((B[0] + C[0]) / 2 + 16, (B[1] + C[1]) / 2, slantLab, { size: 11 }),
    label((B[0] + B2[0]) / 2 + 12, (B[1] + B2[1]) / 2 + 8, lenLab, { size: 11 }),
  ].join(''));
}

function housePrism() {
  // rectangle 5×6 + right triangle roof 3-4-5
  // front: bottom 5, height 6, roof legs 3 and 4
  const A = [60, 170], B = [160, 170], C = [160, 90], D = [60, 90];
  // roof peak: right angle triangle with base CB top = 5, legs 3 vertical? 
  // Solution: perimeter 5+6+6+3+4=24, triangle on top of width 5 with sides 3,4,5
  // Place peak so left roof=4, right roof=3 (or vice versa)
  const peak = [100, 40]; // apex above top of rectangle
  // Actually for 3-4-5 with base 5: height = 3*4/5 = 2.4... place peak at 60+9=69? 
  // If hypotenuse is base along top of rectangle from D to C (100 units wide in SVG = 5cm)
  // Right angle at peak? Or right angle at one corner?
  // "topped by a right-angled triangle with side lengths 3 and 4 (hypotenuse = 5)"
  // So the roof is 3-4-5 with hyp on the top of the rectangle.
  // height of roof = 12/5 = 2.4 scaled
  const topW = 100;
  const roofH = (3 * 4) / 5 * (topW / 5); // ≈ 48
  const peakX = 60 + (9 / 5) * 20; // right angle offset: from left, foot of altitude at 9/5 * ...
  // For right triangle with hyp as base: altitude to hyp from right angle vertex is ab/c
  // Position of foot from vertex adjacent to side a: a^2/c from that vertex
  // From left (side 4): 16/5 = 3.2 of 5 → 64% of topW
  // Wait sides 3 and 4: foot from side-4 end is 16/5, from side-3 end is 9/5
  const footFromLeft = (16 / 5) * (topW / 5); // if left leg is 4
  const Pk = [60 + footFromLeft, 90 - roofH];
  const L = 70;
  const shift = (p) => [p[0] + L, p[1] - 28];
  const [A2, B2, C2, D2, Pk2] = [A, B, C, D, Pk].map(shift);
  return svgWrap(320, 240, [
    poly([A, B, B2, A2], fill3, 0.45),
    poly([B, C, C2, B2], fill2, 0.5),
    poly([C, Pk, Pk2, C2], fill2, 0.45),
    poly([A, B, C, D], fill, 0.6),
    poly([D, C, Pk], fill, 0.7),
    line(A[0], A[1], A2[0], A2[1], stroke, 2),
    line(D[0], D[1], D2[0], D2[1], stroke, 2),
    line(Pk[0], Pk[1], Pk2[0], Pk2[1], stroke, 2),
    line(C[0], C[1], C2[0], C2[1], stroke, 2),
    line(A2[0], A2[1], B2[0], B2[1], stroke, 2),
    line(B2[0], B2[1], C2[0], C2[1], stroke, 2),
    line(C2[0], C2[1], Pk2[0], Pk2[1], stroke, 2),
    line(Pk2[0], Pk2[1], D2[0], D2[1], stroke, 2),
    line(D2[0], D2[1], A2[0], A2[1], stroke, 2),
    label((A[0] + B[0]) / 2, 188, '5 cm'),
    label(A[0] - 20, (A[1] + D[1]) / 2, '6 cm'),
    label((D[0] + Pk[0]) / 2 - 10, (D[1] + Pk[1]) / 2, '4 cm', { size: 11 }),
    label((C[0] + Pk[0]) / 2 + 12, (C[1] + Pk[1]) / 2, '3 cm', { size: 11 }),
    label((B[0] + B2[0]) / 2 + 14, (B[1] + B2[1]) / 2 + 6, '10 cm', { size: 11 }),
  ].join(''));
}

function lPrism() {
  // L front face: bottom 10, left 8, top 6, step 4×4
  // coords scaled: 10→100, 8→80
  const s = 10;
  // outer path clockwise from bottom-left
  const pts = [
    [40, 180], // BL
    [140, 180], // BR bottom
    [140, 140], // up right short (4)
    [100, 140], // left inner (4)
    [100, 100], // up remaining (4) to top of left? left height 8 total = 80px
    // wait left height 8: from y=180 to y=100 is 80. Top of left arm at y=100, width 6 = 60px so x from 40 to 100
    [40, 100], // top-left
  ];
  // Actually L:
  // #######  top 6
  // #######
  // ####
  // ####  bottom total width 10, right stub height 4
  // ####
  // Left column width 6 height 8, right extension width 4 height 4 at bottom
  const BL = [50, 180], BR = [150, 180], BR2 = [150, 140], mid = [110, 140], midTop = [110, 100], TL = [50, 100];
  const L = 50;
  const sh = (p) => [p[0] + L, p[1] - 20];
  const front = [BL, BR, BR2, mid, midTop, TL];
  const back = front.map(sh);
  return svgWrap(320, 230, [
    // side faces simplified - show front + extrusion edges
    poly([BL, BR, sh(BR), sh(BL)], fill3, 0.4),
    poly([BR, BR2, sh(BR2), sh(BR)], fill2, 0.45),
    poly([BR2, mid, sh(mid), sh(BR2)], fill2, 0.4),
    poly([mid, midTop, sh(midTop), sh(mid)], fill3, 0.4),
    poly([midTop, TL, sh(TL), sh(midTop)], fill2, 0.45),
    poly(front, fill, 0.65),
    // back outline
    ...back.map((p, i) => {
      const n = back[(i + 1) % back.length];
      return line(p[0], p[1], n[0], n[1], stroke, 1.5);
    }),
    ...front.map((p, i) => line(p[0], p[1], back[i][0], back[i][1], stroke, 1.5)),
    label(100, 196, '10 cm'),
    label(38, 140, '8 cm', { size: 11 }),
    label(80, 88, '6 cm', { size: 11 }),
    label(160, 160, '4 cm', { size: 11 }),
    label((BR[0] + sh(BR)[0]) / 2 + 10, (BR[1] + sh(BR)[1]) / 2 + 10, '5 cm', { size: 11 }),
  ].join(''));
}

/**
 * Room interior view for painting questions.
 * Proportions: length 4.0, width 3.5, height 3.0
 * withCeiling=false → only 4 walls painted (highlighted); floor/ceiling grey dashed "not painted"
 * withCeiling=true  → walls + ceiling painted; floor not painted
 */
function roomWalls({ withCeiling = false }) {
  // Scale: length 4 → 140px, width 3.5 → depth, height 3 → 105px
  const L = 140; // length (front edge)
  const H = 105; // height
  const D = 70; // isometric depth for width 3.5
  const depthY = 42;
  const ox = 50;
  const oy = 200;

  // Room corner: floor A-B-F-E, walls, optional ceiling
  const A = [ox, oy]; // front-left floor
  const B = [ox + L, oy]; // front-right floor
  const E = [ox + D, oy - depthY]; // back-left floor
  const F = [ox + L + D, oy - depthY]; // back-right floor
  const Dtl = [ox, oy - H]; // front-left ceiling corner
  const C = [ox + L, oy - H]; // front-right ceiling
  const Hh = [ox + D, oy - H - depthY]; // back-left ceiling
  const G = [ox + L + D, oy - H - depthY]; // back-right ceiling

  const wallFill = '#93c5fd'; // painted blue
  const wallFill2 = '#60a5fa';
  const wallFill3 = '#3b82f6';
  const notPaint = '#e2e8f0';
  const ceilingPaint = '#86efac';

  const parts = [];

  // Floor — always NOT painted for these questions
  parts.push(poly([A, B, F, E], notPaint, 0.85));
  parts.push(
    // floor hatch
    line(A[0] + 15, A[1] - 5, E[0] + 15, E[1] - 5, '#cbd5e1', 1, '3 3') +
    line(A[0] + 40, A[1] - 5, E[0] + 40, E[1] - 5, '#cbd5e1', 1, '3 3') +
    line(A[0] + 70, A[1] - 5, E[0] + 70, E[1] - 5, '#cbd5e1', 1, '3 3') +
    line(A[0] + 100, A[1] - 5, E[0] + 100, E[1] - 5, '#cbd5e1', 1, '3 3')
  );

  // Back wall (painted)
  parts.push(poly([E, F, G, Hh], wallFill2, 0.75));
  // Left wall (painted)
  parts.push(poly([A, Dtl, Hh, E], wallFill, 0.8));
  // Right wall (painted)
  parts.push(poly([B, C, G, F], wallFill3, 0.55));
  // Front wall — draw as thin rim only so we "look into" the room; still counts as a wall
  // Show front wall as translucent strip along front floor/ceiling? Better: dashed outline for front opening
  // Represent 4th wall as a label + semi-transparent front plane
  parts.push(poly([A, B, C, Dtl], wallFill, 0.18));

  // Ceiling
  if (withCeiling) {
    parts.push(poly([Dtl, C, G, Hh], ceilingPaint, 0.65));
    parts.push(label((Dtl[0] + G[0]) / 2, (Dtl[1] + G[1]) / 2, 'ceiling (paint)', {
      size: 12,
      color: '#166534',
      weight: 700,
    }));
  } else {
    // dashed ceiling outline — not painted
    parts.push(
      line(Dtl[0], Dtl[1], C[0], C[1], muted, 1.6, '6 4') +
      line(C[0], C[1], G[0], G[1], muted, 1.6, '6 4') +
      line(G[0], G[1], Hh[0], Hh[1], muted, 1.6, '6 4') +
      line(Hh[0], Hh[1], Dtl[0], Dtl[1], muted, 1.6, '6 4')
    );
    parts.push(label((Dtl[0] + G[0]) / 2, (Dtl[1] + G[1]) / 2 - 6, 'ceiling (not painted)', {
      size: 11,
      color: muted,
      weight: 600,
    }));
  }

  // Solid wall edges
  parts.push(line(A[0], A[1], B[0], B[1], stroke, 2));
  parts.push(line(B[0], B[1], F[0], F[1], stroke, 2));
  parts.push(line(F[0], F[1], E[0], E[1], stroke, 2));
  parts.push(line(E[0], E[1], A[0], A[1], stroke, 2));
  parts.push(line(A[0], A[1], Dtl[0], Dtl[1], stroke, 2.2));
  parts.push(line(B[0], B[1], C[0], C[1], stroke, 2.2));
  parts.push(line(E[0], E[1], Hh[0], Hh[1], stroke, 2.2));
  parts.push(line(F[0], F[1], G[0], G[1], stroke, 2.2));
  parts.push(line(Dtl[0], Dtl[1], Hh[0], Hh[1], stroke, 2));
  parts.push(line(C[0], C[1], G[0], G[1], stroke, 2));
  parts.push(line(Dtl[0], Dtl[1], C[0], C[1], withCeiling ? stroke : muted, withCeiling ? 2 : 1.5, withCeiling ? '' : '6 4'));
  parts.push(line(Hh[0], Hh[1], G[0], G[1], withCeiling ? stroke : muted, withCeiling ? 2 : 1.5, withCeiling ? '' : '6 4'));

  // Dimension labels matching the problem
  parts.push(label((A[0] + B[0]) / 2, oy + 16, 'length 4.0 m', { size: 12 }));
  parts.push(label(B[0] + 28, (B[1] + C[1]) / 2, 'height 3.0 m', { size: 12 }));
  parts.push(label((B[0] + F[0]) / 2 + 22, (B[1] + F[1]) / 2 + 10, 'width 3.5 m', { size: 12 }));

  // Floor label
  parts.push(label((A[0] + F[0]) / 2 - 10, (A[1] + F[1]) / 2 + 8, 'floor (not painted)', {
    size: 11,
    color: muted,
    weight: 600,
  }));

  // Legend
  parts.push(`<rect x="40" y="18" width="14" height="14" rx="3" fill="${wallFill2}" stroke="${stroke}" stroke-width="1"/>`);
  parts.push(label(120, 25, withCeiling ? 'paint: 4 walls + ceiling' : 'paint: 4 walls only', {
    size: 12,
    color: textFill,
    weight: 700,
    anchor: 'start',
  }));

  return svgWrap(340, 250, parts.join(''));
}

function poolSide() {
  // side profile trapezoid: shallow 1m, deep 2.5m, length 25m
  const A = [40, 80], B = [40, 140]; // shallow end (depth 1 → 40px)
  // shallow surface to deep
  // scale: length 25 → 220px, depth 2.5 → 100px, shallow 1 → 40px
  const shallowTop = [40, 80], shallowBot = [40, 120];
  const deepTop = [260, 80], deepBot = [260, 180];
  // sloping floor from shallowBot to deepBot
  return svgWrap(320, 220, [
    poly([shallowTop, deepTop, deepBot, shallowBot], fill, 0.5),
    line(shallowBot[0], shallowBot[1], deepBot[0], deepBot[1], accent, 2.5),
    label(150, 60, '25 m'),
    label(28, 100, '1 m', { size: 11 }),
    label(278, 130, '2.5 m', { size: 11 }),
    label(160, 165, 'EH (slope)', { size: 12, color: accent }),
    // width note
    label(160, 200, 'width = 12 m (into page)', { size: 11, color: muted, weight: 500 }),
    // drop mark
    line(250, 120, 250, 180, muted, 1.5, '4 3'),
    label(232, 150, '1.5 m', { size: 10, color: muted }),
  ].join(''));
}

function netCube(sideLab) {
  // simple cross net of cube
  const s = 36;
  const ox = 110, oy = 70;
  const sq = (x, y, f = fill) => poly([[x, y], [x + s, y], [x + s, y + s], [x, y + s]], f, 0.55);
  return svgWrap(280, 200, [
    sq(ox, oy),
    sq(ox, oy + s),
    sq(ox, oy + 2 * s),
    sq(ox - s, oy + s, fill2),
    sq(ox + s, oy + s, fill2),
    sq(ox + 2 * s, oy + s, fill3),
    label(ox + s / 2, oy + 3 * s + 14, `each face ${sideLab} × ${sideLab}`, { size: 11, color: muted }),
  ].join(''));
}

// ─── Question builder ────────────────────────────────────────────────────────
function mc({ id, difficulty = 'medium', timeLimit = 90, question, opts, correct, hint, solution, svg, steps }) {
  const a = opts.indexOf(correct);
  if (a < 0) throw new Error(`${id}: correct not in opts: ${correct}`);
  return {
    id,
    topicId: 'y9-16b',
    chapterId: 'y9-16',
    c: '16B',
    t: 'Review of surface area of a prism',
    type: 'multiple_choice',
    difficulty,
    timeLimit,
    question,
    opts,
    a,
    answer: String(a),
    hint,
    solution,
    solutionSteps: steps.map((s) => ({
      explanation: s.e,
      workingOut: s.w,
      graphData: s.svg ? { svg: s.svg } : null,
    })),
    graphData: svg ? { svg } : null,
    isNew: true,
    requiresManualGrading: false,
  };
}

function steps4(arr) {
  if (arr.length < 4) throw new Error('need 4+ steps, got ' + arr.length);
  return arr;
}

const questions = [];

// ── Q1 cubes & rectangular prisms ────────────────────────────────────────────
questions.push(mc({
  id: 'y9-16b-q1a',
  difficulty: 'easy',
  timeLimit: 60,
  question: 'Calculate the total surface area of a cube with side length \\(8\\text{ cm}\\).',
  opts: ['\\(320\\text{ cm}^2\\)', '\\(384\\text{ cm}^2\\)', '\\(512\\text{ cm}^2\\)', '\\(256\\text{ cm}^2\\)'],
  correct: '\\(384\\text{ cm}^2\\)',
  hint: 'A cube has 6 identical square faces. SA = \\(6s^{2}\\).',
  solution: 'Each face: \\(8 \\times 8 = 64\\text{ cm}^{2}\\). Total: \\(6 \\times 64 = 384\\text{ cm}^{2}\\).',
  svg: cube('8 cm'),
  steps: steps4([
    { e: 'A cube has 6 congruent square faces. Side length \\(s = 8\\text{ cm}\\).', w: '\\(s = 8\\text{ cm}\\)', svg: cube('8 cm') },
    { e: 'Area of one face.', w: '\\(A_{\\text{face}} = 8 \\times 8 = 64\\text{ cm}^{2}\\)', svg: netCube('8') },
    { e: 'Multiply by 6 faces.', w: '\\(\\text{SA} = 6 \\times 64\\)' },
    { e: 'Total surface area.', w: '\\(\\text{SA} = 384\\text{ cm}^{2}\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-16b-q1b',
  difficulty: 'easy',
  timeLimit: 60,
  question: 'Calculate the total surface area of a cube with side length \\(6\\text{ cm}\\).',
  opts: ['\\(288\\text{ cm}^2\\)', '\\(180\\text{ cm}^2\\)', '\\(144\\text{ cm}^2\\)', '\\(216\\text{ cm}^2\\)'],
  correct: '\\(216\\text{ cm}^2\\)',
  hint: 'SA = \\(6s^{2}\\).',
  solution: 'Each face: \\(36\\text{ cm}^{2}\\). Total: \\(6 \\times 36 = 216\\text{ cm}^{2}\\).',
  svg: cube('6 cm'),
  steps: steps4([
    { e: 'Cube with side \\(s = 6\\text{ cm}\\). Six identical square faces.', w: '\\(s = 6\\text{ cm}\\)', svg: cube('6 cm') },
    { e: 'Area of one face.', w: '\\(A_{\\text{face}} = 6 \\times 6 = 36\\text{ cm}^{2}\\)', svg: netCube('6') },
    { e: 'Six faces.', w: '\\(\\text{SA} = 6 \\times 36\\)' },
    { e: 'Total surface area.', w: '\\(\\text{SA} = 216\\text{ cm}^{2}\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-16b-q1c',
  difficulty: 'medium',
  timeLimit: 90,
  question: 'Calculate the total surface area of a rectangular prism with dimensions:\n- Length = \\(14\\text{ cm}\\)\n- Width = \\(11\\text{ cm}\\)\n- Height = \\(4\\text{ cm}\\)',
  opts: ['\\(480\\text{ cm}^2\\)', '\\(520\\text{ cm}^2\\)', '\\(508\\text{ cm}^2\\)', '\\(254\\text{ cm}^2\\)'],
  correct: '\\(508\\text{ cm}^2\\)',
  hint: 'SA = \\(2(lw + wh + lh)\\).',
  solution: '\\(2(14\\times11 + 11\\times4 + 14\\times4) = 2(154+44+56) = 508\\text{ cm}^{2}\\).',
  svg: rectPrism({ lLab: '14 cm', wLab: '11 cm', hLab: '4 cm', l: 14, w: 11, h: 4 }),
  steps: steps4([
    { e: 'Closed rectangular prism. Use SA = \\(2(lw + wh + lh)\\) with \\(l=14\\), \\(w=11\\), \\(h=4\\).', w: '\\(\\text{SA} = 2(lw + wh + lh)\\)', svg: rectPrism({ lLab: '14 cm', wLab: '11 cm', hLab: '4 cm', l: 14, w: 11, h: 4 }) },
    { e: 'Compute each pair of face areas (one of each pair).', w: '\\(lw = 14 \\times 11 = 154,\\quad wh = 11 \\times 4 = 44,\\quad lh = 14 \\times 4 = 56\\)' },
    { e: 'Add the three face types.', w: '\\(lw + wh + lh = 154 + 44 + 56 = 254\\)' },
    { e: 'Double for front and back of each pair.', w: '\\(\\text{SA} = 2 \\times 254 = 508\\text{ cm}^{2}\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-16b-q1d',
  difficulty: 'medium',
  timeLimit: 90,
  question: 'Calculate the total surface area of a rectangular prism with dimensions:\n- Length = \\(4\\text{ cm}\\)\n- Width = \\(8\\text{ cm}\\)\n- Height = \\(15\\text{ cm}\\)',
  opts: ['\\(380\\text{ cm}^2\\)', '\\(212\\text{ cm}^2\\)', '\\(480\\text{ cm}^2\\)', '\\(424\\text{ cm}^2\\)'],
  correct: '\\(424\\text{ cm}^2\\)',
  hint: 'SA = \\(2(lw + wh + lh)\\).',
  solution: '\\(2(32 + 120 + 60) = 424\\text{ cm}^{2}\\).',
  svg: rectPrism({ lLab: '4 cm', wLab: '8 cm', hLab: '15 cm', scale: 0.9, l: 4, w: 8, h: 15 }),
  steps: steps4([
    { e: 'Use SA = \\(2(lw + wh + lh)\\) with \\(l=4\\), \\(w=8\\), \\(h=15\\).', w: '\\(\\text{SA} = 2(lw + wh + lh)\\)', svg: rectPrism({ lLab: '4 cm', wLab: '8 cm', hLab: '15 cm', scale: 0.9, l: 4, w: 8, h: 15 }) },
    { e: 'Compute each product.', w: '\\(lw = 32,\\quad wh = 120,\\quad lh = 60\\)' },
    { e: 'Sum the three face types.', w: '\\(32 + 120 + 60 = 212\\)' },
    { e: 'Double for both faces of each pair.', w: '\\(\\text{SA} = 2 \\times 212 = 424\\text{ cm}^{2}\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-16b-q1e',
  difficulty: 'medium',
  timeLimit: 90,
  question: 'Calculate the total surface area of a rectangular prism with dimensions:\n- Length = \\(9.2\\text{ cm}\\)\n- Width = \\(2.5\\text{ cm}\\)\n- Height = \\(5.0\\text{ cm}\\)',
  opts: ['\\(182\\text{ cm}^2\\)', '\\(145\\text{ cm}^2\\)', '\\(81.5\\text{ cm}^2\\)', '\\(163\\text{ cm}^2\\)'],
  correct: '\\(163\\text{ cm}^2\\)',
  hint: 'SA = \\(2(lw + wh + lh)\\).',
  solution: '\\(2(23.0 + 12.5 + 46.0) = 163\\text{ cm}^{2}\\).',
  svg: rectPrism({ lLab: '9.2 cm', wLab: '2.5 cm', hLab: '5.0 cm', l: 9.2, w: 2.5, h: 5 }),
  steps: steps4([
    { e: 'Rectangular prism: \\(l = 9.2\\), \\(w = 2.5\\), \\(h = 5.0\\).', w: '\\(\\text{SA} = 2(lw + wh + lh)\\)', svg: rectPrism({ lLab: '9.2 cm', wLab: '2.5 cm', hLab: '5.0 cm', l: 9.2, w: 2.5, h: 5 }) },
    { e: 'Compute each face type area.', w: '\\(lw = 9.2 \\times 2.5 = 23.0\\)\\n\\(wh = 2.5 \\times 5.0 = 12.5\\)\\n\\(lh = 9.2 \\times 5.0 = 46.0\\)' },
    { e: 'Add them.', w: '\\(23.0 + 12.5 + 46.0 = 81.5\\)' },
    { e: 'Double for both faces of each pair.', w: '\\(\\text{SA} = 2 \\times 81.5 = 163\\text{ cm}^{2}\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-16b-q1f',
  difficulty: 'medium',
  timeLimit: 90,
  question: 'Calculate the total surface area of a rectangular prism with dimensions:\n- Length = \\(8.0\\text{ cm}\\)\n- Width = \\(1.6\\text{ cm}\\)\n- Height = \\(7.5\\text{ cm}\\)',
  opts: ['\\(192.8\\text{ cm}^2\\)', '\\(156.4\\text{ cm}^2\\)', '\\(169.6\\text{ cm}^2\\)', '\\(84.8\\text{ cm}^2\\)'],
  correct: '\\(169.6\\text{ cm}^2\\)',
  hint: 'SA = \\(2(lw + wh + lh)\\).',
  solution: '\\(2(12.8 + 12.0 + 60.0) = 169.6\\text{ cm}^{2}\\).',
  svg: rectPrism({ lLab: '8.0 cm', wLab: '1.6 cm', hLab: '7.5 cm', l: 8, w: 1.6, h: 7.5 }),
  steps: steps4([
    { e: 'Rectangular prism: \\(l = 8.0\\), \\(w = 1.6\\), \\(h = 7.5\\).', w: '\\(\\text{SA} = 2(lw + wh + lh)\\)', svg: rectPrism({ lLab: '8.0 cm', wLab: '1.6 cm', hLab: '7.5 cm', l: 8, w: 1.6, h: 7.5 }) },
    { e: 'Compute each product carefully with decimals.', w: '\\(lw = 8.0 \\times 1.6 = 12.8\\)\\n\\(wh = 1.6 \\times 7.5 = 12.0\\)\\n\\(lh = 8.0 \\times 7.5 = 60.0\\)' },
    { e: 'Sum the three face types.', w: '\\(12.8 + 12.0 + 60.0 = 84.8\\)' },
    { e: 'Double for both faces of each pair.', w: '\\(\\text{SA} = 2 \\times 84.8 = 169.6\\text{ cm}^{2}\\)' },
  ]),
}));

// ── Q2 open square container ─────────────────────────────────────────────────
questions.push(mc({
  id: 'y9-16b-q2',
  difficulty: 'medium',
  timeLimit: 100,
  question: 'An ice-cream container has a square base and is open at the top. Its dimensions are:\n- Base side length = \\(12\\text{ cm}\\)\n- Height = \\(8\\text{ cm}\\)\n\nFind the surface area of the outside of the container.',
  opts: ['\\(384\\text{ cm}^2\\)', '\\(672\\text{ cm}^2\\)', '\\(528\\text{ cm}^2\\)', '\\(480\\text{ cm}^2\\)'],
  correct: '\\(528\\text{ cm}^2\\)',
  hint: 'Open top: bottom + 4 side faces only (no lid).',
  solution: 'Bottom \\(144\\) + four sides \\(384\\) = \\(528\\text{ cm}^{2}\\).',
  svg: squareBasePrism({ sideLab: '12 cm', hLab: '8 cm' }),
  steps: steps4([
    { e: 'Square-base container: base side 12 cm, height 8 cm. The top is open, so outside SA = bottom + 4 sides only (no lid).', w: '\\(\\text{faces} = \\text{bottom} + 4\\text{ sides}\\)', svg: squareBasePrism({ sideLab: '12 cm', hLab: '8 cm' }) },
    { e: 'Bottom square area.', w: '\\(A_{\\text{bottom}} = 12 \\times 12 = 144\\text{ cm}^{2}\\)' },
    { e: 'Four identical side rectangles, each 12 cm by 8 cm.', w: '\\(A_{\\text{sides}} = 4 \\times (12 \\times 8) = 4 \\times 96 = 384\\text{ cm}^{2}\\)' },
    { e: 'Add for the outside surface area (exclude the open top).', w: '\\(\\text{SA} = 144 + 384 = 528\\text{ cm}^{2}\\)' },
  ]),
}));

// ── Q3 open shoe box ─────────────────────────────────────────────────────────
questions.push(mc({
  id: 'y9-16b-q3',
  difficulty: 'medium',
  timeLimit: 100,
  question: 'A shoe box, open at the top, has dimensions:\n- Length = \\(30\\text{ cm}\\)\n- Width = \\(20\\text{ cm}\\)\n- Height = \\(10.5\\text{ cm}\\)\n\nFind the total outside surface area of the box.',
  opts: ['\\(1350\\text{ cm}^2\\)', '\\(1650\\text{ cm}^2\\)', '\\(1050\\text{ cm}^2\\)', '\\(2250\\text{ cm}^2\\)'],
  correct: '\\(1650\\text{ cm}^2\\)',
  hint: 'Open top: bottom + two length sides + two width sides.',
  solution: '\\(600 + 420 + 630 = 1650\\text{ cm}^{2}\\).',
  svg: openShoeBox({ lLab: '30 cm (length)', wLab: '20 cm (width)', hLab: '10.5 cm' }),
  steps: steps4([
    { e: 'Open shoe box: length 30 cm, width 20 cm, height 10.5 cm. Outside SA = bottom + four walls (no lid).', w: '\\(l=30,\\ w=20,\\ h=10.5\\)', svg: openShoeBox({ lLab: '30 cm (length)', wLab: '20 cm (width)', hLab: '10.5 cm' }) },
    { e: 'Bottom rectangle.', w: '\\(A_{\\text{bottom}} = 30 \\times 20 = 600\\text{ cm}^{2}\\)' },
    { e: 'Two width walls and two length walls.', w: '\\(2(20 \\times 10.5) = 420\\)\\n\\(2(30 \\times 10.5) = 630\\)' },
    { e: 'Total outside surface area.', w: '\\(\\text{SA} = 600 + 420 + 630 = 1650\\text{ cm}^{2}\\)' },
  ]),
}));

// ── Q4 room painting ─────────────────────────────────────────────────────────
questions.push(mc({
  id: 'y9-16b-q4a',
  difficulty: 'medium',
  timeLimit: 90,
  question: 'Dianne is painting her room. The dimensions are:\n- Height = \\(3.0\\text{ m}\\)\n- Length = \\(4.0\\text{ m}\\)\n- Width = \\(3.5\\text{ m}\\)\n\nWhat area must she paint if she paints only the walls?',
  opts: ['\\(59\\text{ m}^2\\)', '\\(35\\text{ m}^2\\)', '\\(90\\text{ m}^2\\)', '\\(45\\text{ m}^2\\)'],
  correct: '\\(45\\text{ m}^2\\)',
  hint: 'Four walls: \\(2(lh + wh)\\). No floor or ceiling.',
  solution: '\\(2(4.0\\times3.0 + 3.5\\times3.0) = 45\\text{ m}^{2}\\).',
  svg: roomWalls({ withCeiling: false }),
  steps: steps4([
    { e: 'Only the four walls — no floor and no ceiling.', w: '\\(A_{\\text{walls}} = 2(lh + wh)\\)', svg: roomWalls({ withCeiling: false }) },
    { e: 'Substitute \\(l=4.0\\), \\(w=3.5\\), \\(h=3.0\\).', w: '\\(A = 2(4.0 \\times 3.0 + 3.5 \\times 3.0)\\)' },
    { e: 'Simplify inside.', w: '\\(A = 2(12.0 + 10.5) = 2 \\times 22.5\\)' },
    { e: 'Wall area.', w: '\\(A = 45\\text{ m}^{2}\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-16b-q4b',
  difficulty: 'medium',
  timeLimit: 90,
  question: 'Dianne is painting her room. The dimensions are:\n- Height = \\(3.0\\text{ m}\\)\n- Length = \\(4.0\\text{ m}\\)\n- Width = \\(3.5\\text{ m}\\)\n\nWhat area must she paint if she paints the walls and the ceiling?',
  opts: ['\\(65\\text{ m}^2\\)', '\\(59\\text{ m}^2\\)', '\\(73\\text{ m}^2\\)', '\\(45\\text{ m}^2\\)'],
  correct: '\\(59\\text{ m}^2\\)',
  hint: 'Walls (from 4a) plus ceiling \\(l \\times w\\).',
  solution: 'Walls \\(45\\) + ceiling \\(14\\) = \\(59\\text{ m}^{2}\\).',
  svg: roomWalls({ withCeiling: true }),
  steps: steps4([
    { e: 'Walls + ceiling (still no floor).', w: '\\(A = A_{\\text{walls}} + A_{\\text{ceiling}}\\)', svg: roomWalls({ withCeiling: true }) },
    { e: 'Walls from the previous calculation.', w: '\\(A_{\\text{walls}} = 45\\text{ m}^{2}\\)' },
    { e: 'Ceiling is the top rectangle.', w: '\\(A_{\\text{ceiling}} = 4.0 \\times 3.5 = 14\\text{ m}^{2}\\)' },
    { e: 'Total painted area.', w: '\\(A = 45 + 14 = 59\\text{ m}^{2}\\)' },
  ]),
}));

// ── Q5 special prisms ────────────────────────────────────────────────────────
questions.push(mc({
  id: 'y9-16b-q5a',
  difficulty: 'hard',
  timeLimit: 120,
  question: 'Calculate the total surface area of a right-angled triangular prism:\n- Cross-section legs = \\(6\\text{ cm}\\) and \\(8\\text{ cm}\\) (hypotenuse = \\(10\\text{ cm}\\))\n- Length of the prism = \\(20\\text{ cm}\\)',
  opts: ['\\(456\\text{ cm}^2\\)', '\\(528\\text{ cm}^2\\)', '\\(480\\text{ cm}^2\\)', '\\(576\\text{ cm}^2\\)'],
  correct: '\\(528\\text{ cm}^2\\)',
  hint: '2 triangular ends + 3 rectangular sides (using all three edges of the triangle).',
  solution: 'Ends \\(48\\) + rectangles \\(120+160+200 = 480\\) → total \\(528\\text{ cm}^{2}\\).',
  svg: triangularPrism({ aLab: '6 cm', bLab: '8 cm', cLab: '10 cm', lenLab: '20 cm' }),
  steps: steps4([
    { e: 'Two congruent right-triangular ends plus three rectangular lateral faces.', w: '\\(\\text{SA} = 2A_{\\triangle} + (6+8+10)\\times 20\\)', svg: triangularPrism({ aLab: '6 cm', bLab: '8 cm', cLab: '10 cm', lenLab: '20 cm' }) },
    { e: 'Area of one right triangle, then both ends.', w: '\\(A_{\\triangle} = \\tfrac{1}{2}\\times 6\\times 8 = 24\\)\\n\\(2A_{\\triangle} = 48\\text{ cm}^{2}\\)' },
    { e: 'Three lateral rectangles.', w: '\\(6\\times20 = 120,\\quad 8\\times20 = 160,\\quad 10\\times20 = 200\\)\\n\\(A_{\\text{sides}} = 480\\text{ cm}^{2}\\)' },
    { e: 'Add ends and sides.', w: '\\(\\text{SA} = 48 + 480 = 528\\text{ cm}^{2}\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-16b-q5b',
  difficulty: 'hard',
  timeLimit: 120,
  question: 'Calculate the total surface area of a trapezoidal prism. The front face is a trapezium with:\n- Height = \\(8\\text{ cm}\\)\n- Top parallel side = \\(9\\text{ cm}\\)\n- Bottom parallel side = \\(15\\text{ cm}\\)\n- One non-parallel side is vertical (\\(8\\text{ cm}\\)); the other is slanted (\\(10\\text{ cm}\\))\n- Length of the prism = \\(5\\text{ cm}\\)',
  opts: ['\\(340\\text{ cm}^2\\)', '\\(424\\text{ cm}^2\\)', '\\(402\\text{ cm}^2\\)', '\\(380\\text{ cm}^2\\)'],
  correct: '\\(402\\text{ cm}^2\\)',
  hint: '2 trapezium ends + perimeter of trapezium × length.',
  solution: 'Ends \\(192\\) + sides \\(210\\) = \\(402\\text{ cm}^{2}\\).',
  svg: trapezoidalPrism({ topLab: '9 cm', botLab: '15 cm', hLab: '8 cm', slantLab: '10 cm', lenLab: '5 cm' }),
  steps: steps4([
    { e: 'Two trapezium ends + four lateral rectangles (perimeter × length).', w: '\\(\\text{SA} = 2A_{\\text{trap}} + P \\times L\\)', svg: trapezoidalPrism({ topLab: '9 cm', botLab: '15 cm', hLab: '8 cm', slantLab: '10 cm', lenLab: '5 cm' }) },
    { e: 'Trapezium area: average of parallels × height.', w: '\\(A_{\\text{trap}} = \\dfrac{9+15}{2}\\times 8 = 96\\)\\n\\(2A_{\\text{trap}} = 192\\text{ cm}^{2}\\)' },
    { e: 'Perimeter of the trapezium cross-section.', w: '\\(P = 9 + 15 + 8 + 10 = 42\\text{ cm}\\)\\n\\(A_{\\text{sides}} = 42 \\times 5 = 210\\text{ cm}^{2}\\)' },
    { e: 'Total surface area.', w: '\\(\\text{SA} = 192 + 210 = 402\\text{ cm}^{2}\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-16b-q5c',
  difficulty: 'hard',
  timeLimit: 120,
  question: 'Calculate the total surface area of a symmetrical trapezoidal prism:\n- Parallel bases = \\(6\\text{ cm}\\) and \\(14\\text{ cm}\\)\n- Height of trapezium = \\(3\\text{ cm}\\)\n- Slanted sides = \\(5\\text{ cm}\\) each\n- Length of the prism = \\(8\\text{ cm}\\)',
  opts: ['\\(320\\text{ cm}^2\\)', '\\(300\\text{ cm}^2\\)', '\\(280\\text{ cm}^2\\)', '\\(240\\text{ cm}^2\\)'],
  correct: '\\(300\\text{ cm}^2\\)',
  hint: '2 trapezium ends + perimeter × length. Perimeter uses the slant lengths, not the height.',
  solution: 'Ends \\(60\\) + sides \\(240\\) = \\(300\\text{ cm}^{2}\\).',
  svg: trapezoidalPrism({ topLab: '6 cm', botLab: '14 cm', hLab: '3 cm', slantLab: '5 cm', lenLab: '8 cm' }),
  steps: steps4([
    { e: 'Symmetrical trapezoidal prism: two ends + lateral area = perimeter × length.', w: '\\(\\text{SA} = 2A_{\\text{trap}} + P \\times 8\\)', svg: trapezoidalPrism({ topLab: '6 cm', botLab: '14 cm', hLab: '3 cm', slantLab: '5 cm', lenLab: '8 cm' }) },
    { e: 'Trapezium end area (use height 3, not slant).', w: '\\(A_{\\text{trap}} = \\dfrac{6+14}{2}\\times 3 = 30\\)\\n\\(2A = 60\\text{ cm}^{2}\\)' },
    { e: 'Perimeter uses both slants and both parallels.', w: '\\(P = 6 + 14 + 5 + 5 = 30\\text{ cm}\\)\\n\\(A_{\\text{sides}} = 30 \\times 8 = 240\\text{ cm}^{2}\\)' },
    { e: 'Total surface area.', w: '\\(\\text{SA} = 60 + 240 = 300\\text{ cm}^{2}\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-16b-q5d',
  difficulty: 'hard',
  timeLimit: 120,
  question: 'Calculate the total surface area of an isosceles triangular prism:\n- Base of triangle = \\(8\\text{ cm}\\), height = \\(3\\text{ cm}\\), equal sides = \\(5\\text{ cm}\\) each\n- Length of the prism = \\(12\\text{ cm}\\)',
  opts: ['\\(240\\text{ cm}^2\\)', '\\(192\\text{ cm}^2\\)', '\\(216\\text{ cm}^2\\)', '\\(264\\text{ cm}^2\\)'],
  correct: '\\(240\\text{ cm}^2\\)',
  hint: '2 triangular ends + three rectangles using sides 8, 5 and 5.',
  solution: 'Ends \\(24\\) + sides \\(216\\) = \\(240\\text{ cm}^{2}\\).',
  svg: isosTriangularPrism({ baseLab: '8 cm', sideLab: '5 cm', hLab: '3 cm', lenLab: '12 cm' }),
  steps: steps4([
    { e: 'Two isosceles triangular ends + three rectangular sides.', w: '\\(\\text{SA} = 2A_{\\triangle} + P \\times 12\\)', svg: isosTriangularPrism({ baseLab: '8 cm', sideLab: '5 cm', hLab: '3 cm', lenLab: '12 cm' }) },
    { e: 'Triangle area uses base and perpendicular height.', w: '\\(A_{\\triangle} = \\tfrac{1}{2}\\times 8\\times 3 = 12\\)\\n\\(2A = 24\\text{ cm}^{2}\\)' },
    { e: 'Perimeter of the triangular cross-section (use slant sides, not height).', w: '\\(P = 8 + 5 + 5 = 18\\text{ cm}\\)\\n\\(A_{\\text{sides}} = 18 \\times 12 = 216\\text{ cm}^{2}\\)' },
    { e: 'Total surface area.', w: '\\(\\text{SA} = 24 + 216 = 240\\text{ cm}^{2}\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-16b-q5e',
  difficulty: 'hard',
  timeLimit: 140,
  question: 'Calculate the total surface area of a house-shaped pentagonal prism. The front face is a rectangle of width \\(5\\text{ cm}\\) and height \\(6\\text{ cm}\\), topped by a right-angled triangle with legs \\(3\\text{ cm}\\) and \\(4\\text{ cm}\\) (hypotenuse \\(5\\text{ cm}\\) along the top of the rectangle). The length of the prism is \\(10\\text{ cm}\\).',
  opts: ['\\(272\\text{ cm}^2\\)', '\\(360\\text{ cm}^2\\)', '\\(290\\text{ cm}^2\\)', '\\(312\\text{ cm}^2\\)'],
  correct: '\\(312\\text{ cm}^2\\)',
  hint: 'Pentagon area = rectangle + triangle. Lateral area = outer perimeter × length.',
  solution: 'Ends \\(72\\) + sides \\(240\\) = \\(312\\text{ cm}^{2}\\).',
  svg: housePrism(),
  steps: steps4([
    { e: 'House-shaped cross-section: rectangle plus right triangle on top. Prism length 10 cm.', w: '\\(\\text{SA} = 2A_{\\text{pent}} + P \\times 10\\)', svg: housePrism() },
    { e: 'Cross-section area = rectangle + triangle.', w: '\\(A_{\\text{rect}} = 5 \\times 6 = 30\\)\\n\\(A_{\\triangle} = \\tfrac{1}{2}\\times 3\\times 4 = 6\\)\\n\\(A_{\\text{pent}} = 36\\text{ cm}^{2}\\)\\n\\(2A = 72\\text{ cm}^{2}\\)' },
    { e: 'Outer perimeter of the pentagon (do not count the internal base of the roof).', w: '\\(P = 5 + 6 + 6 + 3 + 4 = 24\\text{ cm}\\)\\n\\(A_{\\text{sides}} = 24 \\times 10 = 240\\text{ cm}^{2}\\)' },
    { e: 'Total surface area.', w: '\\(\\text{SA} = 72 + 240 = 312\\text{ cm}^{2}\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-16b-q5f',
  difficulty: 'hard',
  timeLimit: 140,
  question: 'Calculate the total surface area of an L-shaped prism. The front L-shape has dimensions:\n- Bottom width = \\(10\\text{ cm}\\)\n- Left height = \\(8\\text{ cm}\\)\n- Top horizontal = \\(6\\text{ cm}\\)\n- Step size = \\(4\\text{ cm}\\) by \\(4\\text{ cm}\\)\n- Length of the prism = \\(5\\text{ cm}\\)',
  opts: ['\\(308\\text{ cm}^2\\)', '\\(344\\text{ cm}^2\\)', '\\(256\\text{ cm}^2\\)', '\\(280\\text{ cm}^2\\)'],
  correct: '\\(308\\text{ cm}^2\\)',
  hint: 'Split the L into two rectangles for the end area; perimeter × length for the sides.',
  solution: 'Ends \\(128\\) + sides \\(180\\) = \\(308\\text{ cm}^{2}\\).',
  svg: lPrism(),
  steps: steps4([
    { e: 'L-prism: two L-shaped ends + lateral faces = outer perimeter × length.', w: '\\(\\text{SA} = 2A_{L} + P \\times 5\\)', svg: lPrism() },
    { e: 'Split L into left rectangle \\(6\\times8\\) and bottom-right rectangle \\(4\\times4\\).', w: '\\(A_{L} = 6\\times8 + 4\\times4 = 48 + 16 = 64\\text{ cm}^{2}\\)\\n\\(2A_{L} = 128\\text{ cm}^{2}\\)' },
    { e: 'Walk the outer edge: 10 + 4 + 4 + 4 + 6 + 8.', w: '\\(P = 10 + 4 + 4 + 4 + 6 + 8 = 36\\text{ cm}\\)\\n\\(A_{\\text{sides}} = 36 \\times 5 = 180\\text{ cm}^{2}\\)' },
    { e: 'Total surface area.', w: '\\(\\text{SA} = 128 + 180 = 308\\text{ cm}^{2}\\)' },
  ]),
}));

// ── Q6 pool ──────────────────────────────────────────────────────────────────
questions.push(mc({
  id: 'y9-16b-q6a',
  difficulty: 'hard',
  timeLimit: 120,
  question: 'A swimming pool has dimensions:\n- Width = \\(12\\text{ m}\\)\n- Length = \\(25\\text{ m}\\)\n- Shallow end depth = \\(1\\text{ m}\\)\n- Deep end depth = \\(2.5\\text{ m}\\)\n\nFind the length of the sloping bottom floor \\(EH\\), correct to the nearest millimetre.',
  opts: ['\\(25.075\\text{ m}\\)', '\\(25.000\\text{ m}\\)', '\\(25.125\\text{ m}\\)', '\\(25.045\\text{ m}\\)'],
  correct: '\\(25.045\\text{ m}\\)',
  hint: 'Use Pythagoras on the side profile: horizontal 25 m, vertical drop 1.5 m.',
  solution: '\\(EH = \\sqrt{25^{2} + 1.5^{2}} = \\sqrt{627.25} \\approx 25.045\\text{ m}\\).',
  svg: poolSide(),
  steps: steps4([
    { e: 'Side view is a trapezium. The sloping floor is the hypotenuse of a right triangle with base 25 m and height drop 1.5 m.', w: '\\(\\text{drop} = 2.5 - 1.0 = 1.5\\text{ m}\\)', svg: poolSide() },
    { e: 'Apply Pythagoras.', w: '\\(EH = \\sqrt{25^{2} + 1.5^{2}}\\)' },
    { e: 'Compute under the square root.', w: '\\(EH = \\sqrt{625 + 2.25} = \\sqrt{627.25}\\)' },
    { e: 'Square root and round to the nearest millimetre (3 d.p. in metres).', w: '\\(EH \\approx 25.04496\\ldots = 25.045\\text{ m}\\)' },
  ]),
}));

questions.push(mc({
  id: 'y9-16b-q6b',
  difficulty: 'hard',
  timeLimit: 180,
  question: 'A swimming pool has dimensions:\n- Width = \\(12\\text{ m}\\)\n- Length = \\(25\\text{ m}\\)\n- Shallow end depth = \\(1\\text{ m}\\)\n- Deep end depth = \\(2.5\\text{ m}\\)\n- Bottom sloping length \\(EH \\approx 25.045\\text{ m}\\)\n\nFind the approximate number of tiles, each \\(15\\text{ cm} \\times 15\\text{ cm}\\), needed to tile the sides and bottom of the pool (tiles may be cut and pieced).',
  opts: ['\\(20450\\)', '\\(19840\\)', '\\(18600\\)', '\\(19113\\)'],
  correct: '\\(19113\\)',
  hint: 'Tile five inside faces (no top). Convert tile size to m², then divide total area by tile area.',
  solution: 'Inside SA ≈ 430.04 m²; tile area 0.0225 m² → about 19113 tiles.',
  svg: poolSide(),
  steps: steps4([
    { e: 'Five inside faces: sloping floor, two long side walls (trapezia), shallow end, deep end.', w: '\\(A = A_{\\text{floor}} + 2A_{\\text{side}} + A_{\\text{shallow}} + A_{\\text{deep}}\\)', svg: poolSide() },
    { e: 'Compute each face (metres).', w: '\\(A_{\\text{floor}} = 12 \\times 25.045 \\approx 300.54\\text{ m}^{2}\\)\\n\\(2A_{\\text{side}} = 2 \\times \\dfrac{1+2.5}{2}\\times 25 = 87.5\\text{ m}^{2}\\)\\n\\(A_{\\text{shallow}} = 12 \\times 1 = 12\\text{ m}^{2}\\)\\n\\(A_{\\text{deep}} = 12 \\times 2.5 = 30\\text{ m}^{2}\\)' },
    { e: 'Total inside surface area.', w: '\\(A \\approx 300.54 + 87.5 + 12 + 30 = 430.04\\text{ m}^{2}\\)' },
    { e: 'Each tile is \\(0.15 \\times 0.15 = 0.0225\\text{ m}^{2}\\). Divide and round up for partial tiles if needed; the option matching the calculation is 19113.', w: '\\(n = \\dfrac{430.04}{0.0225} \\approx 19112.9 \\approx 19113\\)' },
  ]),
}));

// ─── Validate ────────────────────────────────────────────────────────────────
console.log('Built', questions.length, 'questions');
const ids = new Set();
for (const q of questions) {
  if (ids.has(q.id)) throw new Error('dup ' + q.id);
  ids.add(q.id);
  if (!q.graphData?.svg) throw new Error('no svg ' + q.id);
  if (q.solutionSteps.length < 4) throw new Error('steps ' + q.id);
  if (q.a < 0 || q.a > 3) throw new Error('a ' + q.id);
}

// numeric checks
const near = (a, b, e = 1e-6) => Math.abs(a - b) < e;
if (!near(6 * 64, 384)) throw new Error('1a');
if (!near(6 * 36, 216)) throw new Error('1b');
if (!near(2 * (154 + 44 + 56), 508)) throw new Error('1c');
if (!near(2 * (32 + 120 + 60), 424)) throw new Error('1d');
if (!near(2 * (23 + 12.5 + 46), 163)) throw new Error('1e');
if (!near(2 * (12.8 + 12 + 60), 169.6)) throw new Error('1f');
if (!near(144 + 384, 528)) throw new Error('2');
if (!near(600 + 420 + 630, 1650)) throw new Error('3');
if (!near(45 + 14, 59)) throw new Error('4b');
if (!near(48 + 120 + 160 + 200, 528)) throw new Error('5a');
if (!near(192 + 210, 402)) throw new Error('5b');
if (!near(60 + 240, 300)) throw new Error('5c');
if (!near(24 + 216, 240)) throw new Error('5d');
if (!near(72 + 240, 312)) throw new Error('5e');
if (!near(128 + 180, 308)) throw new Error('5f');
if (!near(Math.sqrt(627.25), 25.045, 0.001)) throw new Error('6a');
if (!near(430.04 / 0.0225, 19113, 1)) throw new Error('6b');

// ─── Write seed ──────────────────────────────────────────────────────────────
const seedPath = path.join(ROOT, 'src/constants/seedYear9Ch16BQuestions.js');
const fileBody =
  'export const Y9_CH16B_QUESTIONS = ' +
  JSON.stringify(questions, null, 2) +
  ';\n\nexport default Y9_CH16B_QUESTIONS;\n';
fs.writeFileSync(seedPath, fileBody);
console.log('Wrote', seedPath, '(' + (fileBody.length / 1024).toFixed(1) + ' KB)');

if (SEED_ONLY) {
  console.log('Seed-only — skip Firestore');
  process.exit(0);
}

const sa = JSON.parse(
  fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8')
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
      { merge: false } // full replace so old jsxGraph is gone
    );
    ops++;
    n++;
    if (ops >= 400) {
      await batch.commit();
      batch = db.batch();
      ops = 0;
    }
  }
  if (ops) await batch.commit();
  console.log('Firestore updated', n, 'docs');

  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    { version: ver, membershipVersion: ver, updatedAt: FieldValue.serverTimestamp() },
    { merge: true }
  );

  const idx = spawnSync('node', ['tools/scripts/rebuildQuestionIndexes.js', 'y9-16'], {
    encoding: 'utf8',
    timeout: 180000,
    cwd: ROOT,
  });
  console.log(idx.stdout || '');
  if (idx.stderr) console.error(idx.stderr);

  for (const id of ['y9-16b-q1f', 'y9-16b-q2', 'y9-16b-q5a', 'y9-16b-q6a']) {
    const d = (await db.collection('questions').doc(id).get()).data();
    console.log(id, {
      hasSvg: !!(d?.graphData?.svg && String(d.graphData.svg).includes('<svg')),
      noJsx: !d?.graphData?.jsxGraph,
      steps: d?.solutionSteps?.length,
      stepSvg: d?.solutionSteps?.filter((s) => s.graphData?.svg).length,
      a: d?.a,
      opt: d?.opts?.[d?.a],
    });
  }
}

await push();
console.log('Done.');
