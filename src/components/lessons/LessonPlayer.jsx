import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, X, RotateCcw, Play, Pause, Volume2, VolumeX, Sparkles } from 'lucide-react';
import MathView from '../MathView';
import { clockSvg } from '../../utils/clockSvg';

const FONT = '"Outfit", -apple-system, "Segoe UI", Roboto, sans-serif';

// Wrap any glossary term found in the narration HTML in a clickable chip so the
// student can tap it for a definition. Longest terms first (so "turning point"
// wins over "point"); first occurrence of each term only.
const wrapGlossary = (html, glossary) => {
  if (!glossary || !html) return html;
  let out = html;
  Object.keys(glossary).sort((a, b) => b.length - a.length).forEach((term) => {
    const esc = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`\\b(${esc})\\b`, 'i');
    if (re.test(out) && !out.includes(`data-term="${term}"`)) {
      out = out.replace(re, `<span class="lp-term" data-term="${term}">$1</span>`);
    }
  });
  return out;
};

// Narration may contain inline `$…$` math plus glossary chips. We render each
// `$…$` to KaTeX HTML **synchronously** (via the CDN-loaded window.katex) so it
// never depends on auto-render timing; glossary chips wrap only the text parts.
// If KaTeX isn't loaded yet, the `$…$` is left for the ref-callback fallback.
const renderNarration = (html, glossary) => {
  if (!html) return '';
  return html.split(/(\$[^$]+\$)/g).map((p) => {
    if (p.length > 2 && p.startsWith('$') && p.endsWith('$')) {
      const tex = p.slice(1, -1);
      if (typeof window !== 'undefined' && window.katex) {
        try { return window.katex.renderToString(tex, { throwOnError: false, displayMode: false }); }
        catch { return p; }
      }
      return p;
    }
    return wrapGlossary(p, glossary);
  }).join('');
};

// ── Board primitives ───────────────────────────────────────────────────────
const fmt = (n) => n.toLocaleString('en-US').replace(/,/g, ' ');

const PlaceValueTable = ({ columns }) => (
  <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', fontFamily: FONT }}>
    {columns.map((c, i) => (
      <motion.div key={i}
        animate={{ y: c.active ? -5 : 0, scale: c.active ? 1.03 : 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        style={{
          minWidth: '96px', borderRadius: '16px', overflow: 'hidden',
          border: `2px solid ${c.active ? '#7c3aed' : '#ece9fb'}`,
          boxShadow: c.active ? '0 14px 30px rgba(124,58,237,0.26)' : '0 2px 8px rgba(15,23,42,0.04)',
          background: '#fff',
        }}>
        <div style={{
          fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.03em', textAlign: 'center', padding: '8px 4px',
          background: c.active ? 'linear-gradient(135deg,#a78bfa,#7c3aed)' : '#f6f3fe',
          color: c.active ? '#fff' : '#7c3aed',
        }}>{c.name}</div>
        <div style={{ fontSize: '2.1rem', fontWeight: 800, textAlign: 'center', padding: '12px 4px 4px', color: '#1e1b4b', lineHeight: 1 }}>
          {c.showDigit ? c.digit : ''}
        </div>
        <div style={{ textAlign: 'center', fontSize: '0.78rem', fontWeight: 800, color: '#7c3aed', padding: '2px 4px 8px', minHeight: '20px' }}>
          {c.showValue ? (c.digit ? fmt(c.value) : '0') : ''}
        </div>
        <div style={{ textAlign: 'center', fontSize: '0.66rem', fontWeight: 700, color: '#a78bfa', padding: '0 4px 9px', minHeight: '14px' }}>
          {c.showPower ? (c.power > 0 ? `${c.digit}×10^${c.power}` : `${c.digit}`) : ''}
        </div>
      </motion.div>
    ))}
  </div>
);

// A dot that travels ALONG the curve to demonstrate a limit/behaviour in sync
// with the narration (e.g. "as x → ∞, y → ∞"). Loops while shown. `approach`
// draws a shrinking dashed gap to the axis it is approaching ('x' or 'y').
const Tracer = ({ fn, from, to, dur = 2600, label, approach, sx, sy, x0, y0, yMin, yMax }) => {
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf, t0;
    const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
    const PAUSE = 750;
    const loop = (ts) => {
      if (!t0) t0 = ts;
      const cyc = (ts - t0) % (dur + PAUSE);
      setP(ease(Math.min(1, cyc / dur)));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [fn, from, to, dur]);

  const x = from + (to - from) * p;
  let y; try { y = fn(x); } catch { y = NaN; }
  if (!isFinite(y)) return null;
  const yClamped = Math.max(yMin, Math.min(yMax, y));
  const X = sx(x), Y = sy(yClamped);
  const labelAbove = yClamped > (yMin + yMax) / 2;
  return (
    <g>
      {approach === 'x' && <line x1={X} y1={Y} x2={X} y2={y0} stroke="#f59e0b" strokeWidth="1.6" strokeDasharray="3 3" />}
      {approach === 'y' && <line x1={X} y1={Y} x2={x0} y2={Y} stroke="#f59e0b" strokeWidth="1.6" strokeDasharray="3 3" />}
      <circle cx={X} cy={Y} r="9" fill="#f59e0b" opacity="0.18" />
      <circle cx={X} cy={Y} r="6" fill="#f59e0b" stroke="#fff" strokeWidth="2" />
      {label && <text x={X} y={Y + (labelAbove ? -14 : 20)} fontSize="12.5" fontWeight="800" fill="#b45309" textAnchor="middle" style={{ paintOrder: 'stroke', stroke: '#fff', strokeWidth: 3 }}>{label}</text>}
    </g>
  );
};

// Dedicated right-triangle SVG — auto-computes all label positions from geometry.
const SpecialTriangle = ({ verts, sideLabels, angleLabels, width = 300, height = 260 }) => {
  const pad = 48;
  const [A, B, C] = verts; // A=bottom-left (acute), B=bottom-right (right angle), C=top-right (acute)

  // Scale triangle to fill the SVG
  const xs = verts.map(v => v[0]), ys = verts.map(v => v[1]);
  const minX = Math.min(...xs), maxX = Math.max(...xs);
  const minY = Math.min(...ys), maxY = Math.max(...ys);
  const scale = Math.min((width - 2 * pad) / (maxX - minX), (height - 2 * pad) / (maxY - minY));
  const sx = x => pad + (x - minX) * scale;
  const sy = y => height - pad - (y - minY) * scale;
  const pt = ([x, y]) => [sx(x), sy(y)];
  const [pA, pB, pC] = [A, B, C].map(pt);

  // Centroid in SVG space
  const G = [(pA[0] + pB[0] + pC[0]) / 3, (pA[1] + pB[1] + pC[1]) / 3];

  // Angle label: move each vertex 30% toward centroid
  const toward = ([px, py], frac) => [px + (G[0] - px) * frac, py + (G[1] - py) * frac];
  const aPos = toward(pA, 0.30);
  const bPos = toward(pB, 0.28);
  const cPos = toward(pC, 0.32);

  // Side label: midpoint of each side + perpendicular offset away from interior
  const sidePos = ([P1, P2], d = 20) => {
    const mid = [(P1[0] + P2[0]) / 2, (P1[1] + P2[1]) / 2];
    const dx = P2[0] - P1[0], dy = P2[1] - P1[1], len = Math.hypot(dx, dy) || 1;
    let nx = -dy / len, ny = dx / len;
    // flip if pointing toward centroid
    if (nx * (G[0] - mid[0]) + ny * (G[1] - mid[1]) > 0) { nx = -nx; ny = -ny; }
    return [mid[0] + nx * d, mid[1] + ny * d];
  };
  const sAB = sidePos([pA, pB]); // bottom
  const sBC = sidePos([pB, pC]); // right
  const sCA = sidePos([pC, pA]); // hypotenuse

  // Right-angle marker at B — small square inside the triangle
  const rm = 10;
  const rmPts = `${pB[0] - rm},${pB[1]} ${pB[0] - rm},${pB[1] - rm} ${pB[0]},${pB[1] - rm}`;
  const polyPts = [pA, pB, pC].map(([x, y]) => `${x},${y}`).join(' ');

  return (
    <svg width={width} height={height} style={{ display: 'block', margin: '0 auto', overflow: 'visible' }}>
      <motion.polygon points={polyPts} fill="rgba(124,58,237,0.07)" stroke="#7c3aed" strokeWidth="3" strokeLinejoin="round"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} />
      <motion.polyline points={rmPts} fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinejoin="round"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
      {[[sAB, sideLabels[0]], [sBC, sideLabels[1]], [sCA, sideLabels[2]]].map(([pos, label], i) => (
        <motion.text key={'s' + i} x={pos[0]} y={pos[1]} textAnchor="middle" dominantBaseline="middle"
          fontSize="15" fontWeight="800" fill="#7c3aed"
          style={{ paintOrder: 'stroke', stroke: '#fff', strokeWidth: 4 }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 + i * 0.1 }}>{label}</motion.text>
      ))}
      {[[aPos, angleLabels[0]], [bPos, angleLabels[1]], [cPos, angleLabels[2]]].map(([pos, label], i) => (
        <motion.text key={'a' + i} x={pos[0]} y={pos[1]} textAnchor="middle" dominantBaseline="middle"
          fontSize="13" fontWeight="700" fill="#1e1b4b"
          style={{ paintOrder: 'stroke', stroke: '#fff', strokeWidth: 4 }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 + i * 0.1 }}>{label}</motion.text>
      ))}
    </svg>
  );
};

// Function graph (SVG) with drawn-on animations: axes fade in, curves draw
// themselves, asymptotes sweep, points pop, and tracers demonstrate limits.
const FunctionGraph = ({ xMin = -3, xMax = 3, yMin = -1, yMax = 9, curves = [], asymptotes = [], points = [], traces = [], segments = [], bands = [], axisBars = [], circles = [], lines = [], texts = [], polygons = [], showAxes = true, width = 480, height = 340 }) => {
  const pad = 38;
  const sx = (x) => pad + (x - xMin) / (xMax - xMin) * (width - 2 * pad);
  const sy = (y) => height - pad - (y - yMin) / (yMax - yMin) * (height - 2 * pad);
  const x0 = sx(0), y0 = sy(0);
  const pxX = (width - 2 * pad) / (xMax - xMin);
  const pxY = (height - 2 * pad) / (yMax - yMin);

  // `slideIn: { dxUnits, dyUnits, steps, delay, dur }` → motion props that start a
  // shape at its UN-shifted position and slide it, one grid step at a time, into
  // its true (drawn) position. Shared by curves and circles. Right is +x screen,
  // UP is −y screen, so a START offset is (−dxUnits·pxX, +dyUnits·pxY).
  const slideInProps = ({ dxUnits = 0, dyUnits = 0, steps = 1, delay = 3.2, dur = 3.4 }) => {
    const xStart = -dxUnits * pxX, yStart = dyUnits * pxY;
    const n = Math.max(1, steps);
    const xk = [xStart], yk = [yStart], tk = [0];
    const hop = 1 / (n + 0.5);
    let t = 0;
    for (let k = 1; k <= n; k++) {
      const rest = (n - k) / n;
      t += hop * 0.6; xk.push(xStart * rest); yk.push(yStart * rest); tk.push(Math.min(1, t));
      t += hop * 0.4; xk.push(xStart * rest); yk.push(yStart * rest); tk.push(Math.min(1, t));
    }
    tk[tk.length - 1] = 1;
    return { initial: { x: xStart, y: yStart }, animate: { x: xk, y: yk }, transition: { duration: dur, times: tk, ease: 'easeInOut', delay } };
  };

  // `slidePath: { legs:[{dxUnits,dyUnits}...], delay, legDur, hold }` → a shape
  // travels through its legs IN ORDER (with a pause at each corner), starting from
  // its un-shifted position and ending where it is drawn. Used to show that the
  // order of two perpendicular translations doesn't change the destination.
  const slidePathProps = ({ legs = [], delay = 1.0, legDur = 1.2, hold = 0.35 }) => {
    let tdx = 0, tdy = 0;
    legs.forEach((l) => { tdx += (l.dxUnits || 0); tdy += (l.dyUnits || 0); });
    const wp = []; let cdx = 0, cdy = 0;
    wp.push([(cdx - tdx) * pxX, (tdy - cdy) * pxY]);
    legs.forEach((l) => { cdx += (l.dxUnits || 0); cdy += (l.dyUnits || 0); wp.push([(cdx - tdx) * pxX, (tdy - cdy) * pxY]); });
    const n = legs.length;
    const xk = [wp[0][0]], yk = [wp[0][1]], tk = [0];
    let tt = 0;
    for (let k = 1; k <= n; k++) {
      tt += legDur; xk.push(wp[k][0]); yk.push(wp[k][1]); tk.push(tt);
      if (k < n) { tt += hold; xk.push(wp[k][0]); yk.push(wp[k][1]); tk.push(tt); }
    }
    const dur = tt || 1;
    return { initial: { x: wp[0][0], y: wp[0][1] }, animate: { x: xk, y: yk }, transition: { duration: dur, times: tk.map((t) => t / dur), ease: 'easeInOut', delay } };
  };

  const buildPath = (fn, step = 0.02, from = xMin, to = xMax) => {
    let d = ''; let pen = false;
    for (let x = from; x <= to + 1e-9; x += step) {
      let y; try { y = fn(x); } catch { y = NaN; }
      if (!isFinite(y) || y < yMin - 0.6 || y > yMax + 0.6) { pen = false; continue; }
      const X = sx(x), Y = sy(y);
      d += (pen ? ` L${X.toFixed(1)} ${Y.toFixed(1)}` : ` M${X.toFixed(1)} ${Y.toFixed(1)}`); pen = true;
    }
    return d.trim();
  };

  // Pick a "nice" tick spacing so labels never crowd (range 48 → step 10, etc.)
  const niceStep = (range, target = 7) => {
    const raw = Math.abs(range) / target;
    const pow = Math.pow(10, Math.floor(Math.log10(raw || 1)));
    return ([1, 2, 2.5, 5, 10].map((m) => m * pow).find((c) => c >= raw)) || pow * 10;
  };
  const xStep = niceStep(xMax - xMin);
  const yStep = niceStep(yMax - yMin);
  const tickFmt = (t) => (Number.isInteger(t) ? t : Number(t.toFixed(2)));
  const xticks = [], yticks = [];
  for (let t = Math.ceil(xMin / xStep) * xStep; t <= xMax + 1e-9; t += xStep) if (Math.abs(t) > 1e-9) xticks.push(t);
  for (let t = Math.ceil(yMin / yStep) * yStep; t <= yMax + 1e-9; t += yStep) if (Math.abs(t) > 1e-9) yticks.push(t);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', maxWidth: `${width}px`, background: 'linear-gradient(180deg,#ffffff,#fbfaff)', borderRadius: '18px', border: '1px solid #ece9fb', boxShadow: '0 10px 30px rgba(124,58,237,0.07)' }}>
      <defs>
        <linearGradient id="lpCurve" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a78bfa" /><stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>

      {/* faint grid */}
      {showAxes && xticks.map((t) => <line key={'gx' + t} x1={sx(t)} x2={sx(t)} y1={pad} y2={height - pad} stroke="#f1edfb" strokeWidth="1" />)}
      {showAxes && yticks.map((t) => <line key={'gy' + t} x1={pad} x2={width - pad} y1={sy(t)} y2={sy(t)} stroke="#f1edfb" strokeWidth="1" />)}

      {/* shaded bands (e.g. the range region y > 0) */}
      {bands.map((b, i) => {
        if (b.axis === 'y') {
          const yTop = sy(Math.min(yMax, b.to)), yBot = sy(Math.max(yMin, b.from));
          return <motion.rect key={'bd' + i} x={pad} y={yTop} width={width - 2 * pad} height={Math.max(0, yBot - yTop)} fill={b.color} initial={{ opacity: 0 }} animate={{ opacity: 0.1 }} transition={{ duration: 0.6, delay: 0.9 }} />;
        }
        const xL = sx(Math.max(xMin, b.from)), xR = sx(Math.min(xMax, b.to));
        return <motion.rect key={'bd' + i} x={xL} y={pad} width={Math.max(0, xR - xL)} height={height - 2 * pad} fill={b.color} initial={{ opacity: 0 }} animate={{ opacity: 0.1 }} transition={{ duration: 0.6, delay: 0.9 }} />;
      })}

      {/* asymptotes (sweep in) — always dashed, with an optional equation label */}
      {asymptotes.map((a, i) => {
        const hot = !!a.color; const col = a.color || '#94a3b8';
        const common = { stroke: col, strokeWidth: hot ? 2.6 : 1.8, strokeDasharray: '9 7', strokeLinecap: 'round', initial: { pathLength: 0, opacity: 0 }, animate: { pathLength: 1, opacity: 1 }, transition: { duration: 0.7, delay: a.delay ?? 0.5 } };
        const line = a.type === 'h'
          ? <motion.line x1={pad} x2={width - pad} y1={sy(a.y)} y2={sy(a.y)} {...common} />
          : <motion.line y1={pad} y2={height - pad} x1={sx(a.x)} x2={sx(a.x)} {...common} />;
        const lx = a.type === 'h' ? width - pad - 4 : sx(a.x) + 6;
        const ly = a.type === 'h' ? sy(a.y) - 7 : pad + 12;
        return (
          <g key={i}>
            {line}
            {a.label && (
              <motion.text x={lx} y={ly} fontSize="12.5" fontWeight="800" fill={col}
                textAnchor={a.type === 'h' ? 'end' : 'start'}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: (a.delay ?? 0.5) + 0.5 }}
                style={{ paintOrder: 'stroke', stroke: '#fff', strokeWidth: 4 }}>{a.label}</motion.text>
            )}
          </g>
        );
      })}

      {/* axes (hidden for pure geometry diagrams via showAxes={false}) */}
      {showAxes && (<>
        {yMin <= 0 && yMax >= 0 && <line x1={pad} x2={width - pad} y1={y0} y2={y0} stroke="#475569" strokeWidth="1.7" />}
        {xMin <= 0 && xMax >= 0 && <line x1={x0} x2={x0} y1={pad} y2={height - pad} stroke="#475569" strokeWidth="1.7" />}
        {xMin <= 0 && xMax >= 0 && <polygon points={`${width - pad + 1},${y0} ${width - pad - 7},${y0 - 4} ${width - pad - 7},${y0 + 4}`} fill="#475569" />}
        {yMin <= 0 && yMax >= 0 && <polygon points={`${x0},${pad - 1} ${x0 - 4},${pad + 7} ${x0 + 4},${pad + 7}`} fill="#475569" />}
        <text x={width - pad + 2} y={y0 + 16} fontSize="12" fontStyle="italic" fill="#475569">x</text>
        <text x={x0 + 7} y={pad + 2} fontSize="12" fontStyle="italic" fill="#475569">y</text>
        {xticks.map((t) => <text key={'x' + t} x={sx(t)} y={y0 + 15} fontSize="10.5" textAnchor="middle" fill="#94a3b8" fontWeight="600">{tickFmt(t)}</text>)}
        {yticks.map((t) => <text key={'y' + t} x={x0 - 9} y={sy(t) + 3.5} fontSize="10.5" textAnchor="end" fill="#94a3b8" fontWeight="600">{tickFmt(t)}</text>)}
      </>)}

      {/* filled polygons — highlight faces with semi-transparent colour */}
      {polygons.map((pg, i) => {
        const pts = pg.vertices.map(([x, y]) => `${sx(x).toFixed(1)},${sy(y).toFixed(1)}`).join(' ');
        return (
          <motion.polygon key={'pg' + i} points={pts}
            fill={pg.color || 'rgba(16,185,129,0.18)'} stroke={pg.stroke || 'none'} strokeWidth={pg.strokeWidth || 0}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: pg.delay ?? 0.5 }} />
        );
      })}

      {/* line segments — radii, triangle sides, chords … (with optional label) */}
      {lines.map((ln, i) => {
        const X1 = sx(ln.from[0]), Y1 = sy(ln.from[1]), X2 = sx(ln.to[0]), Y2 = sy(ln.to[1]);
        const lp = ln.labelAt ? [sx(ln.labelAt[0]), sy(ln.labelAt[1])] : [(X1 + X2) / 2, (Y1 + Y2) / 2];
        return (
          <g key={'ln' + i}>
            <motion.line x1={X1} y1={Y1} x2={X2} y2={Y2} stroke={ln.color || '#475569'} strokeWidth={ln.width || 2.6} strokeLinecap="round" strokeDasharray={ln.dashed ? '6 5' : undefined}
              initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.7, delay: ln.delay ?? 0.5 }} />
            {ln.arrow && (() => {
              const ang = Math.atan2(Y2 - Y1, X2 - X1), s = 10;
              const ax1 = X2 + s * Math.cos(ang + Math.PI - 0.45), ay1 = Y2 + s * Math.sin(ang + Math.PI - 0.45);
              const ax2 = X2 + s * Math.cos(ang + Math.PI + 0.45), ay2 = Y2 + s * Math.sin(ang + Math.PI + 0.45);
              return <motion.polygon points={`${X2},${Y2} ${ax1},${ay1} ${ax2},${ay2}`} fill={ln.color || '#475569'}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: (ln.delay ?? 0.5) + 0.55 }} />;
            })()}
            {ln.label && <motion.text x={lp[0]} y={lp[1]} fontSize="15" fontWeight="800" fill={ln.color || '#475569'} textAnchor="middle"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: (ln.delay ?? 0.5) + 0.5 }} style={{ paintOrder: 'stroke', stroke: '#fff', strokeWidth: 4 }}>{ln.label}</motion.text>}
          </g>
        );
      })}

      {/* free-floating labels (angle marks, annotations) */}
      {texts.map((t, i) => (
        <motion.text key={'tx' + i} x={sx(t.x)} y={sy(t.y)} fontSize={t.size || 13} fontWeight="700" fill={t.color || '#1e1b4b'} textAnchor="middle"
          initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: t.delay ?? 0.8 }} style={{ paintOrder: 'stroke', stroke: '#fff', strokeWidth: 4 }}>{t.text}</motion.text>
      ))}

      {/* curves (draw themselves) */}
      {curves.map((c, i) => {
        const path = (
          <motion.path key={i} d={buildPath(c.fn, c.step)} fill="none" stroke={c.color || 'url(#lpCurve)'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.1, ease: 'easeInOut' }} />
        );
        // `slidePath` → travels through ordered legs (down→left, etc.).
        if (c.slidePath) return <motion.g key={i} {...slidePathProps(c.slidePath)}>{path}</motion.g>;
        // `slideIn` → the curve slides from its un-shifted spot into place.
        if (c.slideIn) return <motion.g key={i} {...slideInProps(c.slideIn)}>{path}</motion.g>;
        // `slide: true` → the curve slides up → down → left → right in a loop,
        // demonstrating a translation in time with the narration.
        if (!c.slide) return path;
        const A = c.slideUnits || 2;
        const dx = A * pxX, dy = A * pxY;
        return (
          <motion.g key={i}
            animate={{ x: [0, 0, 0, 0, 0, -dx, 0, dx, 0], y: [0, -dy, 0, dy, 0, 0, 0, 0, 0] }}
            transition={{ duration: c.slideDur || 7.2, times: [0, 0.12, 0.24, 0.36, 0.48, 0.6, 0.72, 0.84, 1], repeat: Infinity, ease: 'easeInOut', delay: 1.0 }}>
            {path}
          </motion.g>
        );
      })}

      {/* circles / arcs — drawn parametrically so they close perfectly.
          from/to in degrees (default a full circle 0→360). */}
      {circles.map((c, i) => {
        const cx = c.cx || 0, cy = c.cy || 0, r = c.r;
        const a0 = (c.from ?? 0) * Math.PI / 180, a1 = (c.to ?? 360) * Math.PI / 180;
        const n = Math.max(16, Math.round(Math.abs(a1 - a0) / (Math.PI / 90)));
        let d = '';
        for (let k = 0; k <= n; k++) {
          const a = a0 + (a1 - a0) * k / n;
          const X = sx(cx + r * Math.cos(a)), Y = sy(cy + r * Math.sin(a));
          d += (k ? ` L${X.toFixed(1)} ${Y.toFixed(1)}` : `M${X.toFixed(1)} ${Y.toFixed(1)}`);
        }
        const cpath = <motion.path d={d} fill="none" stroke={c.color || 'url(#lpCurve)'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, ease: 'easeInOut' }} />;
        if (c.slideIn) return <motion.g key={'circ' + i} {...slideInProps(c.slideIn)}>{cpath}</motion.g>;
        return <g key={'circ' + i}>{cpath}</g>;
      })}

      {/* coloured segments — highlight a portion of a curve (e.g. positive part
          green, negative part red), drawn on top with a synced label */}
      {segments.map((s, i) => {
        const fn = s.fn || curves[0]?.fn;
        if (!fn) return null;
        return <motion.path key={'seg' + i} d={buildPath(fn, 0.02, s.from, s.to)} fill="none" stroke={s.color} strokeWidth={s.width || 4.5} strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.9, delay: s.delay ?? 1.2 }} />;
      })}
      {segments.map((s, i) => {
        if (!s.label) return null;
        const fn = s.fn || curves[0]?.fn;
        const midX = (s.from + s.to) / 2;
        const midY = fn ? fn(midX) : 0;
        const at = s.labelAt || [midX, midY];
        const yOffset = s.labelYOffset ?? (at[1] >= 0 ? 1.8 : -1.8);
        return <motion.text key={'segl' + i} x={sx(at[0])} y={sy(at[1] + yOffset)} fontSize="16" fontWeight="900" fill={s.color} textAnchor="middle"
          initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: (s.delay ?? 1.2) + 0.7, type: 'spring', stiffness: 300 }}
          style={{ paintOrder: 'stroke', stroke: '#fff', strokeWidth: 4 }}>{s.label}</motion.text>;
      })}

      {/* points (pop in after curve; `pulse` keeps gesturing at it) */}
      {points.map((p, i) => (
        <g key={i}>
          {p.guide && (<>
            <motion.line x1={sx(p.x)} y1={sy(p.y)} x2={sx(p.x)} y2={y0} stroke="#c4b5fd" strokeWidth="1.2" strokeDasharray="3 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 1.0 }} />
            <motion.line x1={sx(p.x)} y1={sy(p.y)} x2={x0} y2={sy(p.y)} stroke="#c4b5fd" strokeWidth="1.2" strokeDasharray="3 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 1.1 }} />
          </>)}
          {p.pulse && (
            <motion.circle cx={sx(p.x)} cy={sy(p.y)} r="6" fill="none" stroke="#7c3aed" strokeWidth="2"
              animate={{ scale: [1, 2.4], opacity: [0.6, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut', delay: 1.2 }}
              style={{ transformOrigin: `${sx(p.x)}px ${sy(p.y)}px` }} />
          )}
          <motion.circle cx={sx(p.x)} cy={sy(p.y)} r="5.5" fill="#7c3aed" stroke="#fff" strokeWidth="2.2"
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 500, damping: 16, delay: 1.15 }} style={{ transformOrigin: `${sx(p.x)}px ${sy(p.y)}px` }} />
          {p.label && <motion.text x={sx(p.x) + 10} y={sy(p.y) - 9} fontSize="12.5" fontWeight="800" fill="#5b21b6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} style={{ paintOrder: 'stroke', stroke: '#fff', strokeWidth: 3 }}>{p.label}</motion.text>}
        </g>
      ))}

      {/* tracers — a dot that travels along the curve to demonstrate a limit */}
      {traces.map((t, i) => {
        const fn = t.fn || curves[0]?.fn;
        if (!fn) return null;
        return <Tracer key={i} {...t} fn={fn} sx={sx} sy={sy} x0={x0} y0={y0} yMin={yMin} yMax={yMax} />;
      })}

      {/* axis bars — show a domain (along x) or range (along y) with arrowheads
          for open/infinite ends and a colour-matched label */}
      {axisBars.map((b, i) => {
        const col = b.color || '#6366f1';
        const arrows = b.arrows || 'both';
        const a1 = arrows === 'both' || arrows === 'start';
        const a2 = arrows === 'both' || arrows === 'end';
        const lineProps = { stroke: col, strokeWidth: 3.5, strokeLinecap: 'round', initial: { pathLength: 0, opacity: 0 }, animate: { pathLength: 1, opacity: 1 }, transition: { duration: 0.7, delay: 1.1 } };
        const lbl = (lx, ly, anchor) => b.label && (
          <motion.text x={lx} y={ly} fontSize="12.5" fontWeight="800" fill={col} textAnchor={anchor}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }}
            style={{ paintOrder: 'stroke', stroke: '#fff', strokeWidth: 3.5 }}>{b.label}</motion.text>
        );
        if (b.axis === 'x') {
          const y = y0 + 18; const X1 = sx(b.from), X2 = sx(b.to);
          return (
            <g key={'ab' + i}>
              <motion.line x1={X1 + (a1 ? 7 : 0)} x2={X2 - (a2 ? 7 : 0)} y1={y} y2={y} {...lineProps} />
              {a1 && <polygon points={`${X1},${y} ${X1 + 8},${y - 4} ${X1 + 8},${y + 4}`} fill={col} />}
              {a2 && <polygon points={`${X2},${y} ${X2 - 8},${y - 4} ${X2 - 8},${y + 4}`} fill={col} />}
              {lbl((X1 + X2) / 2, y + 16, 'middle')}
            </g>
          );
        }
        const x = x0 - 18; const Y1 = sy(b.from), Y2 = sy(b.to); // from(bottom) → to(top)
        return (
          <g key={'ab' + i}>
            <motion.line x1={x} x2={x} y1={Y1 - (a1 ? 7 : 0)} y2={Y2 + (a2 ? 7 : 0)} {...lineProps} />
            {a1 && <polygon points={`${x},${Y1} ${x - 4},${Y1 - 8} ${x + 4},${Y1 - 8}`} fill={col} />}
            {a2 && <polygon points={`${x},${Y2} ${x - 4},${Y2 + 8} ${x + 4},${Y2 + 8}`} fill={col} />}
            {lbl(x0 + 8, Y2 + 4, 'start')}
          </g>
        );
      })}
    </svg>
  );
};

// Cells render through MathView so LaTeX renders properly — e.g. '\frac{1}{2}'
// shows as a real stacked fraction, 'x' as italic math, '-2' as a number.
const SIGN_BG = { '-': 'rgba(239,68,68,0.12)', '+': 'rgba(16,185,129,0.12)', '0': 'rgba(148,163,184,0.12)' };
const SIGN_COLOR = { '-': '#dc2626', '+': '#059669', '0': '#64748b' };

const ValueTable = ({ rows = [] }) => {
  const signRowIndex = rows.findIndex(r => String(r[0]).toLowerCase() === 'sign');
  return (
    <div style={{ display: 'flex', justifyContent: 'center', overflowX: 'auto', fontFamily: FONT }}>
      <table style={{ borderCollapse: 'separate', borderSpacing: 0, borderRadius: '14px', overflow: 'hidden', boxShadow: '0 6px 20px rgba(124,58,237,0.08)' }}>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri}>
              {r.map((c, ci) => {
                const header = ci === 0;
                const isSignRow = ri === signRowIndex && !header;
                const signVal = isSignRow ? String(c) : null;
                const signBg = isSignRow ? (SIGN_BG[signVal] || '#fff') : undefined;
                const signClr = isSignRow ? (SIGN_COLOR[signVal] || '#1e1b4b') : undefined;
                return (
                  <td key={ci} style={{ borderBottom: ri < rows.length - 1 ? '1px solid #ece9fb' : 'none', borderRight: ci < r.length - 1 ? '1px solid #ece9fb' : 'none', padding: '9px 16px', textAlign: 'center', background: header ? 'linear-gradient(135deg,#a78bfa,#7c3aed)' : (signBg || '#fff'), whiteSpace: 'nowrap' }}>
                    {(c !== '' && c != null) && (
                      <MathView content={`$${c}$`} style={{ display: 'inline-block', fontSize: '1rem', fontWeight: header ? 800 : (isSignRow ? 900 : 600), color: header ? '#fff' : (signClr || '#1e1b4b') }} />
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// ── Interactive Percent Table ─────────────────────────────────────────────────
// Clickable fraction/percent table linked to a live PercentGrid below.
// Clicking a column highlights it and re-animates the grid to that count.
const PercentTableInteractive = ({ pairs = [], defaultIndex = 0, cellSize = 24, gap = 3 }) => {
  const [sel, setSel] = useState(defaultIndex);
  const [gridKey, setGridKey] = useState(0);
  const { fraction, percent, count, label, color: pairColor } = pairs[sel] || {};
  const color = pairColor || '#7c3aed';
  const shaded = Math.round(Math.min(100, Math.max(0, count ?? 0)));

  const [hinted, setHinted] = useState(false);

  const handleSelect = (idx) => {
    if (!hinted) setHinted(true);
    if (idx === sel) return;
    setSel(idx);
    setGridKey(k => k + 1);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, fontFamily: FONT }}>
      {/* Tap-hint banner — bounces until the student taps once */}
      <AnimatePresence>
        {!hinted && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: [0, -5, 0, -5, 0] }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.6, ease: 'easeInOut' }}
            style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'linear-gradient(90deg,#f5f3ff,#ede9fe)', border: '1.5px solid #a78bfa', borderRadius: 12, padding: '7px 16px', fontSize: '0.88rem', fontWeight: 700, color: '#6d28d9', userSelect: 'none', pointerEvents: 'none' }}>
            <span style={{ fontSize: '1.1rem' }}>👆</span> Tap any fraction in the table above to see it on the grid!
          </motion.div>
        )}
      </AnimatePresence>
      {/* Table */}
      <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
        <table style={{ borderCollapse: 'separate', borderSpacing: 0, borderRadius: 14, overflow: 'hidden', boxShadow: '0 6px 20px rgba(124,58,237,0.08)' }}>
          <tbody>
            {/* Fraction row */}
            <tr>
              <td style={{ padding: '9px 16px', background: 'linear-gradient(135deg,#a78bfa,#7c3aed)', textAlign: 'center', whiteSpace: 'nowrap' }}>
                <MathView content="$\\textit{Fraction}$" style={{ fontSize: '1rem', fontWeight: 800, color: '#fff' }} />
              </td>
              {pairs.map((p, i) => (
                <td key={i} onClick={() => handleSelect(i)}
                  style={{ padding: '9px 14px', textAlign: 'center', borderBottom: '1px solid #ece9fb', borderRight: i < pairs.length - 1 ? '1px solid #ece9fb' : 'none', cursor: 'pointer', background: i === sel ? `${p.color || '#7c3aed'}14` : '#fff', transition: 'background 0.2s', position: 'relative' }}>
                  {i === sel && <motion.div layoutId="sel-pill" style={{ position: 'absolute', inset: 0, background: `${p.color || '#7c3aed'}18`, borderBottom: `3px solid ${p.color || '#7c3aed'}`, borderRadius: 0 }} />}
                  <MathView content={`$${p.fraction}$`} style={{ fontSize: '1rem', fontWeight: 600, color: i === sel ? (p.color || '#7c3aed') : '#1e1b4b', position: 'relative' }} />
                </td>
              ))}
            </tr>
            {/* % row */}
            <tr>
              <td style={{ padding: '9px 16px', background: 'linear-gradient(135deg,#a78bfa,#7c3aed)', textAlign: 'center' }}>
                <MathView content="$\\%$" style={{ fontSize: '1rem', fontWeight: 800, color: '#fff' }} />
              </td>
              {pairs.map((p, i) => (
                <td key={i} onClick={() => handleSelect(i)}
                  style={{ padding: '9px 14px', textAlign: 'center', cursor: 'pointer', background: i === sel ? `${p.color || '#7c3aed'}14` : '#fff', transition: 'background 0.2s', position: 'relative' }}>
                  <MathView content={`$${p.percent}$`} style={{ fontSize: '1rem', fontWeight: i === sel ? 800 : 600, color: i === sel ? (p.color || '#7c3aed') : '#1e1b4b' }} />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Live grid — re-key on selection change to replay animation */}
      <div key={gridKey} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(10, ${cellSize}px)`, gap: `${gap}px` }}>
          {Array.from({ length: 100 }, (_, i) => {
            const filled = i < shaded;
            const row = Math.floor(i / 10);
            return (
              <motion.div key={i}
                initial={{ background: '#ede9fe', scale: 0.7, opacity: 0 }}
                animate={{ background: filled ? color : '#ede9fe', scale: 1, opacity: 1 }}
                transition={{
                  scale:      { delay: 0.04 + row * 0.04, duration: 0.12, type: 'spring', stiffness: 480 },
                  opacity:    { delay: 0.04 + row * 0.04, duration: 0.12 },
                  background: { delay: filled ? 0.55 + i * 0.016 : 0, duration: 0.15 },
                }}
                style={{ width: cellSize, height: cellSize, borderRadius: 4 }}
              />
            );
          })}
        </div>
        {label && (
          <motion.div key={`lbl-${gridKey}`} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 + shaded * 0.016 + 0.2, duration: 0.3 }}
            style={{ fontSize: '0.9rem', fontWeight: 700, color, textAlign: 'center' }}>
            {label}
          </motion.div>
        )}
      </div>
    </div>
  );
};

// ── Number Line ─────────────────────────────────────────────────────────────
// marks   — array of numbers OR objects { n, label?, labelPos?('above'|'below'),
//            color?, delay?, pulse? }
// connector — { from, to, label?, color?, delay? } — animated arc arrow between two points
// boundaries — [{ n, color?, delay?, label? }] — dashed vertical lines (excluded endpoints)
// sweepRight — { from, label?, color?, delay? } — animated arrow sweeping right from a point
// highlightRange — { from, to } — fills dots in range with dim colour
// arrowLeft — draw left-facing arrow
// label — caption below
const NumberLineBoard = ({
  min = 0, max = 7,
  marks = [],
  connector,
  boundaries = [],
  sweepRight,
  highlightRange,
  arrowLeft,
  label,
}) => {
  const W = 560, H = 150;
  const PAD = 48;
  const usableW = W - PAD * 2;
  const colW = usableW / (max - min);
  const toX = (n) => PAD + (n - min) * colW;

  const axisY = 90;
  const tickY1 = 82, tickY2 = 98;
  const dotR = 7;
  const C_PURPLE = '#7c3aed', C_RED = '#ef4444', C_GREEN = '#10b981';

  const ticks = [];
  for (let n = min; n <= max; n++) ticks.push(n);

  // normalise marks → objects
  const normMarks = marks.map((m, i) =>
    typeof m === 'number' ? { n: m, delay: i * 0.12 } : { delay: i * 0.12, ...m }
  );

  // range highlight dots (dim)
  const hlPts = highlightRange
    ? ticks.filter((n) => n > highlightRange.from && n < highlightRange.to)
    : [];

  // connector arc (bezier above axis)
  let connEl = null;
  if (connector) {
    const x1 = toX(connector.from), x2 = toX(connector.to);
    const midX = (x1 + x2) / 2;
    const arcH = Math.min(46, Math.abs(x2 - x1) * 0.38 + 18);
    const cpY = axisY - dotR - arcH;
    const d = `M ${x1} ${axisY - dotR - 1} Q ${midX} ${cpY} ${x2} ${axisY - dotR - 1}`;
    // tangent direction at t=1 of quadratic bezier: 2*(end - ctrl)
    const tx = x2 - midX, ty = (axisY - dotR - 1) - cpY;
    const tLen = Math.sqrt(tx * tx + ty * ty);
    const nx = tx / tLen, ny = ty / tLen;
    const AS = 9;
    const ax = x2, ay = axisY - dotR - 1;
    const p1x = ax - AS * (nx - ny * 0.45), p1y = ay - AS * (ny + nx * 0.45);
    const p2x = ax - AS * (nx + ny * 0.45), p2y = ay - AS * (ny - nx * 0.45);
    const col = connector.color || C_PURPLE;
    const d0 = connector.delay ?? 0.7;
    connEl = (
      <g>
        <motion.path d={d} fill="none" stroke={col} strokeWidth={2.2}
          initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.65, delay: d0, ease: 'easeInOut' }} />
        <motion.polygon points={`${ax},${ay} ${p1x},${p1y} ${p2x},${p2y}`} fill={col}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: d0 + 0.6 }} />
        {connector.label && (
          <motion.text x={midX} y={cpY - 9} textAnchor="middle" fontSize={11.5} fontWeight={800}
            fontFamily={FONT} fill={col}
            initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: d0 + 0.35 }}
          >{connector.label}</motion.text>
        )}
      </g>
    );
  }

  // sweepRight: animated arrow that grows right from a point
  let sweepEl = null;
  if (sweepRight) {
    const sx = toX(sweepRight.from);
    const ex = toX(max) + 12;
    const col = sweepRight.color || C_GREEN;
    const d0 = sweepRight.delay ?? 0.5;
    sweepEl = (
      <g>
        <motion.line x1={sx} y1={axisY} x2={ex} y2={axisY}
          stroke={col} strokeWidth={4} strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: d0 }} />
        <motion.polygon
          points={`${ex + 2},${axisY} ${ex - 7},${axisY - 5} ${ex - 7},${axisY + 5}`}
          fill={col}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: d0 + 0.75 }} />
        {sweepRight.label && (
          <motion.text x={(sx + ex) / 2} y={axisY - 14} textAnchor="middle"
            fontSize={11} fontWeight={800} fontFamily={FONT} fill={col}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: d0 + 0.5 }}
          >{sweepRight.label}</motion.text>
        )}
      </g>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: W, overflow: 'visible' }}>
        {/* axis line */}
        <line x1={PAD - 4} y1={axisY} x2={W - PAD + 12} y2={axisY} stroke="#475569" strokeWidth={2} />
        <polygon points={`${W - PAD + 12},${axisY} ${W - PAD + 4},${axisY - 5} ${W - PAD + 4},${axisY + 5}`} fill="#475569" />
        {arrowLeft && <polygon points={`${PAD - 4},${axisY} ${PAD + 4},${axisY - 5} ${PAD + 4},${axisY + 5}`} fill="#475569" />}
        {/* ticks */}
        {ticks.map((n) => (
          <g key={n}>
            <line x1={toX(n)} y1={tickY1} x2={toX(n)} y2={tickY2} stroke="#475569" strokeWidth={1.5} />
            <text x={toX(n)} y={tickY2 + 16} textAnchor="middle" fontSize={13} fontFamily={FONT} fontWeight={600} fill="#334155">{n}</text>
          </g>
        ))}
        {/* sweep arrow */}
        {sweepEl}
        {/* connector arc */}
        {connEl}
        {/* range highlight dots */}
        {hlPts.map((n) => (
          <motion.circle key={`hl-${n}`} cx={toX(n)} cy={axisY} r={dotR}
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20, delay: ticks.indexOf(n) * 0.08 }}
            fill={C_PURPLE} opacity={0.22} />
        ))}
        {/* boundary dashed lines */}
        {boundaries.map((b, i) => {
          const bx = toX(b.n);
          const col = b.color || C_RED;
          return (
            <g key={`bd-${i}`}>
              <motion.line x1={bx} y1={axisY - 22} x2={bx} y2={axisY + 22}
                stroke={col} strokeWidth={2} strokeDasharray="5 4"
                initial={{ scaleY: 0, opacity: 0 }} animate={{ scaleY: 1, opacity: 1 }}
                style={{ transformOrigin: `${bx}px ${axisY}px` }}
                transition={{ duration: 0.3, delay: b.delay ?? 0.3 }} />
              {b.label && (
                <motion.text x={bx} y={axisY - 28} textAnchor="middle"
                  fontSize={10.5} fontWeight={800} fontFamily={FONT} fill={col}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={{ delay: (b.delay ?? 0.3) + 0.2 }}
                >{b.label}</motion.text>
              )}
            </g>
          );
        })}
        {/* marks */}
        {normMarks.map((m) => {
          const cx = toX(m.n);
          const col = m.color || C_PURPLE;
          const above = m.labelPos !== 'below';
          return (
            <g key={`m-${m.n}-${m.color}`}>
              {m.pulse && (
                <motion.circle cx={cx} cy={axisY} r={dotR + 6}
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: [1, 1.45, 1], opacity: [0.28, 0.1, 0.28] }}
                  transition={{ delay: m.delay ?? 0, duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                  fill={col} />
              )}
              <motion.circle cx={cx} cy={axisY} r={dotR}
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 340, damping: 18, delay: m.delay ?? 0 }}
                fill={col} stroke="#fff" strokeWidth={2} />
              {m.label && (
                <motion.text x={cx} y={above ? axisY - dotR - 10 : axisY + dotR + 18}
                  textAnchor="middle" fontSize={11.5} fontWeight={800} fontFamily={FONT} fill={col}
                  initial={{ opacity: 0, y: above ? 6 : -6 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (m.delay ?? 0) + 0.22 }}
                >{m.label}</motion.text>
              )}
            </g>
          );
        })}
      </svg>
      {label && <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#64748b', fontFamily: FONT, textAlign: 'center' }}>{label}</div>}
    </div>
  );
};

// ── Working-out steps ─────────────────────────────────────────────────────
// Renders a maths "working out" — lines of equations that appear one by one,
// each optionally annotated with a small side-note (e.g. "÷5 both sides").
// `align: 'left' | 'center'` (default 'left') controls equation alignment.
const WorkingOut = ({ lines = [], align = 'left' }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: align === 'center' ? 'center' : 'flex-start', padding: '8px 20px', fontFamily: FONT }}>
    {lines.map((line, i) => (
      <motion.div key={i}
        initial={{ opacity: 0, x: align === 'center' ? 0 : -14 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: line.delay ?? i * 0.65, duration: 0.35, ease: 'easeOut' }}
        style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        {line.math && <MathView content={line.math} style={{ fontSize: '1.35rem', fontWeight: 600, color: line.color || '#1e1b4b' }} />}
        {line.note && (
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: (line.delay ?? i * 0.65) + 0.28, type: 'spring', stiffness: 320, damping: 22 }}
            style={{ fontSize: '0.8rem', fontWeight: 800, color: '#b45309', background: 'rgba(245,158,11,0.12)', padding: '4px 11px', borderRadius: 8, border: '1.5px solid #fcd34d', whiteSpace: 'nowrap' }}>
            {line.note}
          </motion.span>
        )}
        {line.result && (() => {
          const c = line.color || '#059669';
          return (
            <motion.span
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: (line.delay ?? i * 0.65) + 0.28, type: 'spring', stiffness: 320, damping: 22 }}
              style={{ fontSize: '0.8rem', fontWeight: 800, color: c, background: `${c}18`, padding: '4px 11px', borderRadius: 8, border: `1.5px solid ${c}70`, whiteSpace: 'nowrap' }}>
              {line.result}
            </motion.span>
          );
        })()}
      </motion.div>
    ))}
  </div>
);

// ── Percent Flow ──────────────────────────────────────────────────────────
// Shows ONE concrete example flowing through the formula:
//   [ people bar ] → part/whole → ×100% → result%
// Each token appears in sync with the narration so the abstract formula
// and the real numbers are always on screen together.
const PercentFlow = ({ part, whole, color = '#7c3aed', label }) => {
  const pct = Math.round((part / whole) * 100);
  const PRP = '#7c3aed', GRN = '#059669', AMB = '#f59e0b';

  // Dot grid: `whole` dots, first `part` coloured
  const COLS = 10;
  const dots = Array.from({ length: whole }, (_, i) => i < part);

  const Token = ({ children, bg, border, delay: d, style: s = {} }) => (
    <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: d, type: 'spring', stiffness: 320, damping: 22 }}
      style={{ background: bg, border: `2px solid ${border}`, borderRadius: 12, padding: '8px 16px', textAlign: 'center', ...s }}>
      {children}
    </motion.div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, fontFamily: FONT, padding: '0 8px' }}>

      {/* ① People dot grid */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
          style={{ fontSize: '0.78rem', fontWeight: 700, color: '#6b7280' }}>
          {label || `${whole} people total — ${part} go to squad`}
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${COLS}, 22px)`, gap: 4 }}>
          {dots.map((filled, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.4, background: '#ede9fe' }}
              animate={{ opacity: 1, scale: 1, background: filled ? color : '#ede9fe' }}
              transition={{
                opacity:    { delay: 0.15 + i * 0.02, duration: 0.14 },
                scale:      { delay: 0.15 + i * 0.02, type: 'spring', stiffness: 400, damping: 18 },
                background: { delay: filled ? 0.15 + whole * 0.02 + 0.3 + i * 0.02 : 0, duration: 0.16 },
              }}
              style={{ width: 22, height: 22, borderRadius: '50%' }}
            />
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 + whole * 0.02 + 0.1 }}
          style={{ display: 'flex', gap: 16, fontSize: '0.75rem', fontWeight: 700 }}>
          <span style={{ color }}> {part} shaded = part</span>
          <span style={{ color: '#9ca3af' }}>◻ {whole - part} unshaded</span>
        </motion.div>
      </div>

      {/* ② Formula flow: part/whole → ×100% → =pct% */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, flexWrap: 'wrap' }}>

        {/* percentage = */}
        <Token bg="#f5f3ff" border="#c4b5fd" delay={0.8}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#9ca3af', marginBottom: 2 }}>percentage</div>
          <div style={{ fontSize: '1rem', fontWeight: 800, color: PRP }}>=</div>
        </Token>

        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}
          style={{ fontSize: '1.3rem', color: '#c4b5fd' }}>→</motion.span>

        {/* part/whole fraction */}
        <Token bg="#f5f3ff" border={color} delay={1.1}>
          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#9ca3af', marginBottom: 2 }}>part ÷ whole</div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1.1 }}>
            <span style={{ fontSize: '1.1rem', fontWeight: 900, color }}>{part}</span>
            <div style={{ width: 28, height: 2, background: color, margin: '2px 0' }} />
            <span style={{ fontSize: '1.1rem', fontWeight: 900, color }}>{whole}</span>
          </div>
        </Token>

        {/* ×100% */}
        <Token bg="#f0fdf4" border={GRN} delay={1.55}>
          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#9ca3af', marginBottom: 2 }}>multiply</div>
          <div style={{ fontSize: '1.05rem', fontWeight: 900, color: GRN }}>× 100%</div>
        </Token>

        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }}
          style={{ fontSize: '1.3rem', color: '#86efac' }}>→</motion.span>

        {/* result */}
        <Token bg={`${color}10`} border={color} delay={2.05}
          style={{ minWidth: 72, boxShadow: `0 4px 16px ${color}30` }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#9ca3af', marginBottom: 4 }}>answer</div>
          <div style={{ fontSize: '1.6rem', fontWeight: 900, color }}>{pct}%</div>
        </Token>
      </div>

      {/* ③ Result bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.3 }}
          style={{ fontSize: '0.82rem', fontWeight: 700, color, whiteSpace: 'nowrap', width: 36 }}>{pct}%</motion.div>
        <div style={{ flex: 1, height: 22, background: '#ede9fe', borderRadius: 6, overflow: 'hidden' }}>
          <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }}
            transition={{ delay: 2.4, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ height: '100%', background: `linear-gradient(90deg, ${color}99, ${color})`, borderRadius: 6 }} />
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
          style={{ fontSize: '0.75rem', color: '#9ca3af' }}>out of 100</motion.div>
      </div>

    </div>
  );
};

// ── Step Cards ────────────────────────────────────────────────────────────
// Numbered flow cards (①→②→③) for recipe/process explanations.
const StepCards = ({ cards = [] }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, flexWrap: 'wrap', fontFamily: FONT }}>
    {cards.map((c, i) => (
      <React.Fragment key={i}>
        <motion.div
          initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: c.delay ?? i * 0.45, type: 'spring', stiffness: 260, damping: 22 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 18, padding: '18px 22px', boxShadow: `0 6px 24px ${c.color || '#7c3aed'}22`, border: `2px solid ${c.color || '#7c3aed'}33`, minWidth: 140 }}>
          <div style={{ width: 38, height: 38, borderRadius: '50%', background: `linear-gradient(135deg, ${c.color || '#7c3aed'}cc, ${c.color || '#7c3aed'})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.15rem', fontWeight: 900, color: '#fff', boxShadow: `0 3px 10px ${c.color || '#7c3aed'}55` }}>
            {i + 1}
          </div>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#374151', textAlign: 'center', lineHeight: 1.35 }}>{c.title}</div>
          {c.math && <MathView content={c.math} style={{ fontSize: '1.15rem', fontWeight: 700, color: c.color || '#7c3aed', textAlign: 'center' }} />}
        </motion.div>
        {i < cards.length - 1 && (
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: (c.delay ?? i * 0.45) + 0.3, type: 'spring', stiffness: 400 }}
            style={{ fontSize: '1.6rem', color: '#c4b5fd', lineHeight: 1 }}>→</motion.div>
        )}
      </React.Fragment>
    ))}
  </div>
);

// ── Part-Whole Bar ─────────────────────────────────────────────────────────
// Shows "part out of whole" as a coloured bar, then scales it to /100 so
// students can see WHY we multiply by 100% — it just rescales the bar.
const PartWholeBar = ({ part, whole, color = '#7c3aed', delay = 0.2 }) => {
  const pct = Math.round((part / whole) * 100);
  const scaleFactor = 100 / whole;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18, fontFamily: FONT, padding: '0 12px' }}>
      {/* Row 1: part out of whole */}
      <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.35, ease: 'easeOut' }}
        style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ width: 56, textAlign: 'right', fontSize: '0.85rem', fontWeight: 700, color: '#6b7280', whiteSpace: 'nowrap' }}>
          {part} / {whole}
        </div>
        <div style={{ flex: 1, height: 28, background: '#ede9fe', borderRadius: 8, overflow: 'hidden', position: 'relative' }}>
          <motion.div initial={{ width: 0 }} animate={{ width: `${(part / whole) * 100}%` }}
            transition={{ delay: delay + 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ height: '100%', background: `linear-gradient(90deg, ${color}bb, ${color})`, borderRadius: 8, position: 'absolute' }} />
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: delay + 1.1 }}
            style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af' }}>
            {whole} total
          </motion.span>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: delay + 1.0 }}
          style={{ width: 50, fontSize: '0.85rem', fontWeight: 800, color }}>
          {part}/{whole}
        </motion.div>
      </motion.div>

      {/* Scale arrow */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: delay + 1.3 }}
        style={{ display: 'flex', alignItems: 'center', gap: 8, paddingLeft: 70 }}>
        <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#9333ea', background: '#f5f3ff', border: '1.5px solid #c4b5fd', borderRadius: 8, padding: '3px 10px', whiteSpace: 'nowrap' }}>
          × {scaleFactor} to make /100
        </div>
        <span style={{ fontSize: '1rem', color: '#c4b5fd' }}>↓</span>
      </motion.div>

      {/* Row 2: scaled to /100 */}
      <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
        transition={{ delay: delay + 1.5, duration: 0.35, ease: 'easeOut' }}
        style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ width: 56, textAlign: 'right', fontSize: '0.85rem', fontWeight: 700, color, whiteSpace: 'nowrap' }}>
          {pct} / 100
        </div>
        <div style={{ flex: 1, height: 28, background: '#ede9fe', borderRadius: 8, overflow: 'hidden', position: 'relative' }}>
          <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }}
            transition={{ delay: delay + 1.7, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ height: '100%', background: `linear-gradient(90deg, ${color}bb, ${color})`, borderRadius: 8, position: 'absolute' }} />
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: delay + 2.6 }}
            style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af' }}>
            100 total
          </motion.span>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 2.5, type: 'spring', stiffness: 320 }}
          style={{ width: 50, fontSize: '1.05rem', fontWeight: 900, color, background: `${color}14`, border: `2px solid ${color}55`, borderRadius: 8, padding: '2px 6px', textAlign: 'center' }}>
          {pct}%
        </motion.div>
      </motion.div>
    </div>
  );
};

// ── Conversion Triangle ───────────────────────────────────────────────────
// Beautiful animated diagram showing % ↔ Fraction ↔ Decimal conversions.
const ConversionTriangle = () => {
  const NODE = { w: 148, h: 54, r: 16 };
  const W = 520, H = 230;
  // Node centres
  const pct  = { x: W / 2,       y: 44 };
  const frac = { x: 78,          y: H - 40 };
  const dec  = { x: W - 78,      y: H - 40 };

  // Arrow helper: returns SVG path from edge of source box to edge of target box
  const edge = (from, to, offX = 0, offY = 0) => {
    const dx = to.x - from.x, dy = to.y - from.y;
    const len = Math.sqrt(dx * dx + dy * dy);
    const ux = dx / len, uy = dy / len;
    const hx = NODE.w / 2, hy = NODE.h / 2;
    const tScaleX = Math.abs(ux) > 0.001 ? hx / Math.abs(ux) : Infinity;
    const tScaleY = Math.abs(uy) > 0.001 ? hy / Math.abs(uy) : Infinity;
    const t0 = Math.min(tScaleX, tScaleY) + 6;
    const x1 = from.x + ux * t0 + offX, y1 = from.y + uy * t0 + offY;
    const x2 = to.x   - ux * t0 + offX, y2 = to.y   - uy * t0 + offY;
    return `M${x1},${y1} L${x2},${y2}`;
  };

  const nodes = [
    { id: 'pct',  cx: pct.x,  cy: pct.y,  label: '%',        bg: 'linear-gradient(135deg,#a78bfa,#7c3aed)', shadow: 'rgba(124,58,237,0.35)', delay: 0   },
    { id: 'frac', cx: frac.x, cy: frac.y, label: 'Fraction', bg: 'linear-gradient(135deg,#34d399,#059669)', shadow: 'rgba(5,150,105,0.30)',  delay: 0.2 },
    { id: 'dec',  cx: dec.x,  cy: dec.y,  label: 'Decimal',  bg: 'linear-gradient(135deg,#f87171,#ef4444)', shadow: 'rgba(239,68,68,0.30)',  delay: 0.2 },
  ];

  // Label pill helper — renders a rounded rect + centred text (no overlap with arrow)
  const Pill = ({ x, y, text, color, delay }) => {
    const pw = text.length * 7.4 + 20, ph = 22;
    return (
      <motion.g initial={{ opacity: 0, scale: 0.75 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, type: 'spring', stiffness: 300, damping: 22 }}
        style={{ transformOrigin: `${x}px ${y}px` }}>
        <rect x={x - pw/2} y={y - ph/2} width={pw} height={ph} rx={ph/2}
          fill="#fff" stroke={color} strokeWidth="1.8" />
        <text x={x} y={y + 4.5} textAnchor="middle"
          fill={color} fontSize="11" fontWeight="800" fontFamily={FONT}>{text}</text>
      </motion.g>
    );
  };

  const arrows = [
    { path: edge(pct, frac),  color: '#059669', markerKey: 'grn', label: '÷ 100, simplify', lx: 126, ly: 130, delay: 0.55 },
    { path: edge(pct, dec),   color: '#ef4444', markerKey: 'red', label: '÷ 100',            lx: 394, ly: 130, delay: 0.8  },
    { path: edge(frac, dec),  color: '#7c3aed', markerKey: 'prp', label: '× 100%',           lx: W/2, ly: H + 2, delay: 1.05 },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', fontFamily: FONT }}>
      <svg width={W} height={H + 20} viewBox={`0 0 ${W} ${H + 20}`} style={{ overflow: 'visible' }}>
        <defs>
          {[['grn','#059669'],['red','#ef4444'],['prp','#7c3aed']].map(([id, fill]) => (
            <marker key={id} id={`arr-${id}`} markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto">
              <path d="M0,0 L0,7 L9,3.5 z" fill={fill} />
            </marker>
          ))}
        </defs>

        {/* Arrows */}
        {arrows.map((a, i) => (
          <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: a.delay, duration: 0.35 }}>
            <path d={a.path} fill="none" stroke={a.color} strokeWidth={2.8}
              markerEnd={`url(#arr-${a.markerKey})`} strokeLinecap="round" />
          </motion.g>
        ))}
        {/* Arrow labels as pills — rendered after arrows so they sit on top */}
        {arrows.map((a, i) => (
          <Pill key={`lbl-${i}`} x={a.lx} y={a.ly} text={a.label} color={a.color} delay={a.delay + 0.1} />
        ))}

        {/* Node boxes */}
        {nodes.map((n) => (
          <motion.g key={n.id}
            initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: n.delay, type: 'spring', stiffness: 320, damping: 22 }}
            style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}>
            <defs>
              <filter id={`sh-${n.id}`} x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor={n.shadow} floodOpacity="0.6" />
              </filter>
              <linearGradient id={`g-${n.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                {n.id === 'pct'  && <><stop offset="0%" stopColor="#a78bfa"/><stop offset="100%" stopColor="#7c3aed"/></>}
                {n.id === 'frac' && <><stop offset="0%" stopColor="#34d399"/><stop offset="100%" stopColor="#059669"/></>}
                {n.id === 'dec'  && <><stop offset="0%" stopColor="#f87171"/><stop offset="100%" stopColor="#ef4444"/></>}
              </linearGradient>
            </defs>
            <rect x={n.cx - NODE.w/2} y={n.cy - NODE.h/2} width={NODE.w} height={NODE.h}
              rx={NODE.r} fill={`url(#g-${n.id})`} filter={`url(#sh-${n.id})`} />
            <text x={n.cx} y={n.cy + 5.5} textAnchor="middle"
              fill="#fff" fontSize={n.id === 'pct' ? 22 : 15} fontWeight="800" fontFamily={FONT}
              letterSpacing={n.id === 'pct' ? 1 : 0.3}>
              {n.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
};

// ── Percentage Grid Row ────────────────────────────────────────────────────
// Shows multiple 10×10 grids side-by-side. Each grid fills sequentially
// (controlled by `fillDelay`), and the equation under each appears only
// after that grid's fill animation completes — so explanation and visual
// are always in sync.
const PercentGridRow = ({ grids = [], cellSize = 17, gap = 2 }) => (
  <div style={{ display: 'flex', gap: 24, justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap', fontFamily: FONT }}>
    {grids.map((g, gi) => {
      const shaded = Math.round(Math.min(100, Math.max(0, g.count)));
      const color   = g.color || '#7c3aed';
      const fd      = g.fillDelay ?? (gi * 2.2 + 0.85);
      const eqDelay = fd + shaded * 0.02 + 0.35;
      return (
        <div key={gi} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          {/* 10 × 10 grid */}
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(10, ${cellSize}px)`, gap: `${gap}px` }}>
            {Array.from({ length: 100 }, (_, i) => {
              const filled = i < shaded;
              const row    = Math.floor(i / 10);
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, scale: 0.5, background: '#ede9fe' }}
                  animate={{ opacity: 1, scale: 1, background: filled ? color : '#ede9fe' }}
                  transition={{
                    opacity:    { delay: 0.08 + row * 0.06, duration: 0.14 },
                    scale:      { delay: 0.08 + row * 0.06, duration: 0.14, type: 'spring', stiffness: 420 },
                    background: { delay: filled ? fd + i * 0.02 : 0, duration: 0.18 },
                  }}
                  style={{ width: cellSize, height: cellSize, borderRadius: 2 }}
                />
              );
            })}
          </div>
          {/* Equation — appears after grid fill finishes */}
          {g.equation && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: eqDelay, duration: 0.35, ease: 'easeOut' }}
              style={{ textAlign: 'center' }}>
              <MathView content={g.equation} style={{ fontSize: '0.95rem', fontWeight: 700, color }} />
            </motion.div>
          )}
          {/* Optional note chip below equation */}
          {g.note && (
            <motion.span initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: eqDelay + 0.2, type: 'spring', stiffness: 300, damping: 22 }}
              style={{ fontSize: '0.75rem', fontWeight: 800, color, background: 'rgba(245,158,11,0.08)', padding: '3px 10px', borderRadius: 7, border: `1.5px solid ${color}` }}>
              {g.note}
            </motion.span>
          )}
        </div>
      );
    })}
  </div>
);

// ── Percentage-of-Quantity Bar ────────────────────────────────────────────
// Shows a proportional bar: the shaded portion = percent% of the whole.
// Labels both the part value and whole value so students see the real numbers.
const PercentOfBar = ({ percent = 25, whole = 100, color = '#7c3aed', label }) => {
  const pct   = Math.min(150, Math.max(0, percent));
  const part  = Math.round((pct / 100) * whole);
  // For >100% we allow the bar to overflow; cap display width at 100% visually
  const fillW = Math.min(100, pct);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18, fontFamily: FONT, width: '100%', maxWidth: 480, margin: '0 auto' }}>
      {label && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          style={{ textAlign: 'center', fontSize: '0.95rem', fontWeight: 700, color: '#374151' }}>
          {label}
        </motion.div>
      )}
      {/* Whole bar */}
      <div style={{ position: 'relative', height: 52, background: '#ede9fe', borderRadius: 10, overflow: 'hidden' }}>
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: `${fillW}%` }}
          transition={{ delay: 0.5, duration: 0.9, ease: 'easeOut' }}
          style={{ position: 'absolute', left: 0, top: 0, height: '100%', background: color, borderRadius: 10 }}
        />
        {/* Part label inside bar */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          style={{ position: 'absolute', left: `${fillW / 2}%`, top: '50%', transform: 'translate(-50%,-50%)',
            fontWeight: 800, fontSize: '1.05rem', color: '#fff', whiteSpace: 'nowrap', textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>
          {part.toLocaleString()}
        </motion.div>
        {/* Rest label */}
        {pct < 95 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }}
            style={{ position: 'absolute', left: `${fillW + (100 - fillW) / 2}%`, top: '50%',
              transform: 'translate(-50%,-50%)', fontWeight: 700, fontSize: '0.85rem', color: '#a78bfa', whiteSpace: 'nowrap' }}>
            {(whole - part).toLocaleString()}
          </motion.div>
        )}
      </div>
      {/* Axis labels */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
          <div style={{ width: 2, height: 8, background: color, margin: '0 0 2px 0' }} />
          <span style={{ fontSize: '0.8rem', fontWeight: 800, color }}>{pct}%</span>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#6b7280' }}>{part.toLocaleString()}</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.7 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
          <div style={{ width: 2, height: 8, background: '#a78bfa', margin: '0 0 2px 0' }} />
          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#6d28d9' }}>100%</span>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#6b7280' }}>{whole.toLocaleString()}</span>
        </motion.div>
      </div>
    </div>
  );
};

// ── Ratio Bar ─────────────────────────────────────────────────────────────
// Proportional split bar showing A : B. Animates in two phases:
// Phase 1: full bar expands. Phase 2: dividing line + labels appear.
const RatioBar = ({ a = 1, b = 1, labelA = 'A', labelB = 'B', colorA = '#7c3aed', colorB = '#059669', note }) => {
  const total = a + b;
  const pctA = (a / total) * 100;
  const pctB = (b / total) * 100;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontFamily: FONT, width: '100%', maxWidth: 500, margin: '0 auto' }}>
      {note && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          style={{ textAlign: 'center', fontSize: '0.88rem', color: '#6b7280', fontWeight: 600 }}>
          {note}
        </motion.div>
      )}
      {/* Bar */}
      <div style={{ display: 'flex', height: 52, borderRadius: 10, overflow: 'hidden', gap: 2 }}>
        <motion.div initial={{ width: 0 }} animate={{ width: `${pctA}%` }}
          transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
          style={{ background: colorA, display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 0 }}>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
            style={{ color: '#fff', fontWeight: 800, fontSize: '1rem', whiteSpace: 'nowrap' }}>{a}</motion.span>
        </motion.div>
        <motion.div initial={{ width: 0 }} animate={{ width: `${pctB}%` }}
          transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
          style={{ background: colorB, display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 0 }}>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
            style={{ color: '#fff', fontWeight: 800, fontSize: '1rem', whiteSpace: 'nowrap' }}>{b}</motion.span>
        </motion.div>
      </div>
      {/* Labels */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <motion.span initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }}
          style={{ fontSize: '0.82rem', fontWeight: 800, color: colorA }}>{labelA}</motion.span>
        <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.5, type: 'spring', stiffness: 300 }}
          style={{ fontSize: '1.05rem', fontWeight: 900, color: '#374151', letterSpacing: 2 }}>{a} : {b}</motion.span>
        <motion.span initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }}
          style={{ fontSize: '0.82rem', fontWeight: 800, color: colorB }}>{labelB}</motion.span>
      </div>
    </div>
  );
};

// ── Ratio Family Interactive ───────────────────────────────────────────────
// Three buttons (a/b/c) each showing a different ratio of the same group.
// Bar + label update live on click.
const RatioFamilyInteractive = ({ males = 3, females = 7, colorM = '#7c3aed', colorF = '#ec4899' }) => {
  const total = males + females;
  const options = [
    { key: 'a', label: `a) males : females`, a: males, b: females, la: 'males', lb: 'females', ca: colorM, cb: colorF },
    { key: 'b', label: `b) females : males`, a: females, b: males, la: 'females', lb: 'males', ca: colorF, cb: colorM },
    { key: 'c', label: `c) females : total`, a: females, b: total, la: 'females', lb: 'total', ca: colorF, cb: '#6b7280' },
  ];
  const [sel, setSel] = useState('a');
  const [barKey, setBarKey] = useState(0);
  const cur = options.find(o => o.key === sel);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontFamily: FONT, width: '100%', maxWidth: 500, margin: '0 auto' }}>
      {/* Buttons */}
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
        {options.map(o => (
          <motion.button key={o.key} onClick={() => { setSel(o.key); setBarKey(k => k + 1); }}
            whileTap={{ scale: 0.93 }}
            style={{ padding: '8px 18px', borderRadius: 20, border: `2px solid ${sel === o.key ? cur.ca : '#e5e7eb'}`,
              background: sel === o.key ? cur.ca : '#f9fafb', color: sel === o.key ? '#fff' : '#6b7280',
              fontWeight: 800, fontSize: '0.88rem', cursor: 'pointer', transition: 'all 0.2s', fontFamily: FONT }}>
            {o.key}
          </motion.button>
        ))}
      </div>
      {/* Question label */}
      <motion.div key={`lbl-${sel}`} initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: 'center', fontSize: '0.9rem', fontWeight: 700, color: '#374151' }}>
        {cur.label}
      </motion.div>
      {/* Bar */}
      <div key={barKey} style={{ display: 'flex', height: 52, borderRadius: 10, overflow: 'hidden', gap: 2 }}>
        {[{ v: cur.a, c: cur.ca }, { v: cur.b, c: cur.cb }].map(({ v, c }, i) => {
          const pct = (v / (cur.a + cur.b)) * 100;
          return (
            <motion.div key={i} initial={{ width: 0 }} animate={{ width: `${pct}%` }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: 'easeOut' }}
              style={{ background: c, display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 0 }}>
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 + i * 0.1 }}
                style={{ color: '#fff', fontWeight: 800, fontSize: '1rem' }}>{v}</motion.span>
            </motion.div>
          );
        })}
      </div>
      {/* Ratio label */}
      <motion.div key={`ratio-${barKey}`} initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, type: 'spring', stiffness: 280 }}
        style={{ textAlign: 'center', fontSize: '1.3rem', fontWeight: 900, color: '#374151', letterSpacing: 3 }}>
        {cur.a} <span style={{ color: '#9ca3af' }}>:</span> {cur.b}
      </motion.div>
      <div style={{ textAlign: 'center', fontSize: '0.75rem', color: '#9ca3af', fontWeight: 600 }}>
        Tap a · b · c to switch
      </div>
    </div>
  );
};

// ── Ratio Simplifier (Interactive) ────────────────────────────────────────
// Shows a ratio and lets students click divisor buttons to simplify step
// by step. Each click records the step in a history trail.
const RatioSimplifier = ({ a: initA = 625, b: initB = 575, colorA = '#7c3aed', colorB = '#059669', labelA = 'A', labelB = 'B' }) => {
  const [steps, setSteps] = useState([{ a: initA, b: initB }]);
  const cur = steps[steps.length - 1];
  const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));
  const g = gcd(cur.a, cur.b);
  const divisors = [2, 3, 5, 7, 11, 13].filter(f => cur.a % f === 0 && cur.b % f === 0);
  const done = g === 1;
  const divide = (f) => setSteps(s => [...s, { a: s[s.length - 1].a / f, b: s[s.length - 1].b / f }]);
  const reset = () => setSteps([{ a: initA, b: initB }]);
  const total = cur.a + cur.b;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontFamily: FONT, width: '100%', maxWidth: 500, margin: '0 auto' }}>
      {/* Current bar */}
      <div style={{ display: 'flex', height: 48, borderRadius: 10, overflow: 'hidden', gap: 2 }}>
        {[{ v: cur.a, c: colorA, l: labelA }, { v: cur.b, c: colorB, l: labelB }].map(({ v, c, l }, i) => (
          <motion.div key={`${v}-${i}`} layout
            style={{ width: `${(v / total) * 100}%`, background: c, display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}>
            <span style={{ color: '#fff', fontWeight: 800, fontSize: '0.95rem', whiteSpace: 'nowrap' }}>{v}</span>
          </motion.div>
        ))}
      </div>
      {/* Current ratio */}
      <div style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 900, color: done ? '#059669' : '#374151', letterSpacing: 4, transition: 'color 0.3s' }}>
        {cur.a} <span style={{ color: '#9ca3af' }}>:</span> {cur.b}
        {done && <span style={{ fontSize: '0.85rem', marginLeft: 10, color: '#059669' }}>Simplest form ✓</span>}
      </div>
      {/* Divisor buttons */}
      {!done && (
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: 600, alignSelf: 'center' }}>Divide both by:</span>
          {divisors.map(f => (
            <motion.button key={f} onClick={() => divide(f)} whileTap={{ scale: 0.9 }}
              style={{ padding: '7px 18px', borderRadius: 20, border: '2px solid #7c3aed', background: '#f5f3ff',
                color: '#7c3aed', fontWeight: 800, fontSize: '0.95rem', cursor: 'pointer', fontFamily: FONT }}>
              ÷ {f}
            </motion.button>
          ))}
          {divisors.length === 0 && (
            <span style={{ color: '#6b7280', fontSize: '0.85rem' }}>No simple factors — already in simplest form!</span>
          )}
        </div>
      )}
      {/* Step history */}
      {steps.length > 1 && (
        <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: 10, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ fontSize: '0.82rem', color: i === steps.length - 1 ? '#059669' : '#9ca3af',
              fontWeight: i === steps.length - 1 ? 800 : 600, textAlign: 'center', letterSpacing: 2 }}>
              {i === 0 ? `Start: ${s.a} : ${s.b}` : `÷${steps[i - 1].a / s.a}  →  ${s.a} : ${s.b}`}
            </div>
          ))}
        </div>
      )}
      {steps.length > 1 && (
        <button onClick={reset} style={{ alignSelf: 'center', background: 'none', border: 'none', color: '#9ca3af', fontSize: '0.78rem', cursor: 'pointer', textDecoration: 'underline' }}>
          Reset
        </button>
      )}
    </div>
  );
};

// ── Ratio → Fraction Visual ────────────────────────────────────────────────
// Animated block diagram: a blocks (colorA) + b blocks (colorB), then
// highlights b-blocks and derives the fraction b/(a+b).
const RatioFractionVisual = ({
  a = 2, b = 7,
  labelA = 'A', labelB = 'B',
  colorA = '#7c3aed', colorB = '#059669',
  example = null, // optional: { a, b, fraction, label }
}) => {
  const total = a + b;
  const BLOCK = 38, GAP = 5, MAX_BLOCKS = 12;
  const displayA = Math.min(a, MAX_BLOCKS);
  const displayB = Math.min(b, MAX_BLOCKS);
  const displayTotal = displayA + displayB;

  return (
    <div style={{ fontFamily: FONT, display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center', width: '100%' }}>

      {/* Rule label */}
      <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9ca3af' }}>
        Ratio → Fraction
      </motion.div>

      {/* Block strip */}
      <div style={{ display: 'flex', gap: GAP, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
        {Array.from({ length: displayA }, (_, i) => (
          <motion.div key={`a-${i}`}
            initial={{ opacity: 0, scale: 0.4, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.07, type: 'spring', stiffness: 380, damping: 20 }}
            style={{ width: BLOCK, height: BLOCK, borderRadius: 8, background: colorA,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontWeight: 900, fontSize: '0.8rem',
              boxShadow: `0 3px 12px ${colorA}55` }} >
            {labelA[0]}
          </motion.div>
        ))}
        {/* divider */}
        <motion.div initial={{ opacity: 0, scaleY: 0 }} animate={{ opacity: 1, scaleY: 1 }}
          transition={{ delay: 0.2 + displayA * 0.07 + 0.1 }}
          style={{ width: 2, height: BLOCK + 8, background: '#e5e7eb', borderRadius: 2, margin: '0 4px' }} />
        {Array.from({ length: displayB }, (_, i) => (
          <motion.div key={`b-${i}`}
            initial={{ opacity: 0, scale: 0.4, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3 + displayA * 0.07 + i * 0.07, type: 'spring', stiffness: 380, damping: 20 }}
            style={{ width: BLOCK, height: BLOCK, borderRadius: 8, background: colorB,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontWeight: 900, fontSize: '0.8rem',
              boxShadow: `0 3px 12px ${colorB}55` }} >
            {labelB[0]}
          </motion.div>
        ))}
      </div>

      {/* Labels under blocks */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 0.3 + displayTotal * 0.07 }}
        style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.1rem', fontWeight: 900, color: colorA }}>{a}</div>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#9ca3af' }}>{labelA} parts</div>
        </div>
        <div style={{ fontSize: '1.3rem', color: '#d1d5db', fontWeight: 300 }}>+</div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.1rem', fontWeight: 900, color: colorB }}>{b}</div>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#9ca3af' }}>{labelB} parts</div>
        </div>
        <div style={{ fontSize: '1.3rem', color: '#d1d5db', fontWeight: 300 }}>=</div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#374151' }}>{total}</div>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#9ca3af' }}>total parts</div>
        </div>
      </motion.div>

      {/* Arrow + fraction reveal */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 + displayTotal * 0.07 + 0.2, type: 'spring', stiffness: 260, damping: 22 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <div style={{ fontSize: '1.6rem', color: '#c4b5fd' }}>↓</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, background: `linear-gradient(135deg, ${colorB}11, ${colorB}22)`,
          border: `2px solid ${colorB}55`, borderRadius: 18, padding: '14px 28px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#9ca3af', marginBottom: 4 }}>fraction of {labelB}</div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 900, color: colorB, lineHeight: 1.1 }}>{b}</div>
              <div style={{ width: 40, height: 2.5, background: colorB, borderRadius: 2 }} />
              <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#374151', lineHeight: 1.1 }}>{total}</div>
            </div>
          </div>
          {example && (
            <>
              <div style={{ fontSize: '1rem', color: '#d1d5db' }}>→</div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#9ca3af', marginBottom: 4 }}>{example.label}</div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 900, color: colorB, lineHeight: 1.1 }}>{example.b}</div>
                  <div style={{ width: 40, height: 2.5, background: colorB, borderRadius: 2 }} />
                  <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#374151', lineHeight: 1.1 }}>{example.a + example.b}</div>
                </div>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

// ── Ratio Simplify Steps ───────────────────────────────────────────────────
// Shows a chain: 625:575 → (÷5) → 125:115 → (÷5) → 25:23
// with animated pill steps and HCF note.
const RatioSimplifySteps = ({
  start = [625, 575],
  divisors: divSteps = [5, 5],
  hcf = 25,
  colorA = '#7c3aed', colorB = '#f59e0b',
  labelA = 'males', labelB = 'females',
}) => {
  // Build all steps
  const chain = [start];
  divSteps.forEach(d => {
    const last = chain[chain.length - 1];
    chain.push([last[0] / d, last[1] / d]);
  });

  return (
    <div style={{ fontFamily: FONT, display: 'flex', flexDirection: 'column', gap: 18, alignItems: 'center', width: '100%' }}>

      {/* Header */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
        style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9ca3af' }}>
        Simplify to lowest terms
      </motion.div>

      {/* Chain of ratio pills */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
        {chain.map((step, i) => {
          const isLast = i === chain.length - 1;
          return (
            <React.Fragment key={i}>
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.55, type: 'spring', stiffness: 300, damping: 22 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  background: isLast ? 'linear-gradient(135deg,#f0fdf4,#dcfce7)' : 'linear-gradient(135deg,#faf5ff,#f3f0ff)',
                  border: `2px solid ${isLast ? '#86efac' : '#e9e2fb'}`,
                  borderRadius: 18, padding: '12px 20px',
                  boxShadow: isLast ? '0 6px 24px rgba(34,197,94,0.18)' : '0 4px 16px rgba(124,58,237,0.1)',
                }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#9ca3af', marginBottom: 2 }}>{labelA}</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 900, color: colorA }}>{step[0]}</div>
                </div>
                <div style={{ fontSize: '1.2rem', fontWeight: 300, color: '#c4b5fd' }}>:</div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#9ca3af', marginBottom: 2 }}>{labelB}</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 900, color: colorB }}>{step[1]}</div>
                </div>
                {isLast && (
                  <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.55 + 0.3, type: 'spring', stiffness: 400 }}
                    style={{ fontSize: '0.75rem', fontWeight: 900, color: '#16a34a', background: '#bbf7d0', borderRadius: 20, padding: '3px 10px', marginLeft: 4 }}>
                    ✓ simplest
                  </motion.div>
                )}
              </motion.div>

              {i < chain.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.55 + 0.25 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#7c3aed', background: '#ede9fe', borderRadius: 20, padding: '3px 10px' }}>÷{divSteps[i]}</div>
                  <div style={{ fontSize: '1.1rem', color: '#c4b5fd' }}>→</div>
                </motion.div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* HCF shortcut note */}
      <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: chain.length * 0.55 }}
        style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#fffbeb', border: '1.5px solid #fde68a', borderRadius: 14, padding: '10px 18px' }}>
        <div style={{ fontSize: '1.1rem' }}>💡</div>
        <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#92400e' }}>
          HCF of {start[0]} and {start[1]} = <strong>{hcf}</strong> — you can divide directly by {hcf} in one step!
        </div>
      </motion.div>

      {/* Visual bar shrinking */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: chain.length * 0.55 + 0.2 }}
        style={{ width: '100%', maxWidth: 400 }}>
        <div style={{ height: 32, borderRadius: 8, overflow: 'hidden', display: 'flex', gap: 2 }}>
          {chain.map((step, i) => {
            if (i !== chain.length - 1) return null;
            const total = step[0] + step[1];
            return (
              <React.Fragment key={i}>
                <motion.div initial={{ flex: 0 }} animate={{ flex: step[0] }}
                  transition={{ delay: i * 0.55 + 0.1, duration: 0.6, ease: 'easeOut' }}
                  style={{ background: colorA, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#fff', fontWeight: 800, fontSize: '0.8rem' }}>{step[0]}</span>
                </motion.div>
                <motion.div initial={{ flex: 0 }} animate={{ flex: step[1] }}
                  transition={{ delay: i * 0.55 + 0.2, duration: 0.6, ease: 'easeOut' }}
                  style={{ background: colorB, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#fff', fontWeight: 800, fontSize: '0.8rem' }}>{step[1]}</span>
                </motion.div>
              </React.Fragment>
            );
          })}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: colorA }}>{labelA}</span>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: colorB }}>{labelB}</span>
        </div>
      </motion.div>
    </div>
  );
};

// ── Ratio Parts Count ──────────────────────────────────────────────────────
// Child-friendly animation: shows "3 : 5 → 3 + 5 = 8 parts"
// Blocks pop in one-by-one, then the total bounces in with a highlight.
const RatioPartsCount = ({
  a = 3, b = 5,
  labelA = '', labelB = '',
  colorA = '#7c3aed', colorB = '#3b82f6',
  note = '',
  startDelay = 0,  // seconds to wait before the whole animation fires
}) => {
  const total = a + b;
  const BLOCK = 42;
  const d = startDelay; // shorthand

  return (
    <div style={{ fontFamily: FONT, display: 'flex', flexDirection: 'column', gap: 22, alignItems: 'center', width: '100%' }}>

      {/* Step 1 — ratio notation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: d + 0.1, type: 'spring', stiffness: 260, damping: 22 }}
        style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <div style={{ fontSize: '2.6rem', fontWeight: 900, color: colorA, lineHeight: 1 }}>{a}</div>
          {labelA && <div style={{ fontSize: '0.72rem', fontWeight: 700, color: colorA, opacity: 0.8 }}>{labelA}</div>}
        </div>
        <div style={{ fontSize: '2rem', fontWeight: 300, color: '#c4b5fd', lineHeight: 1 }}>:</div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <div style={{ fontSize: '2.6rem', fontWeight: 900, color: colorB, lineHeight: 1 }}>{b}</div>
          {labelB && <div style={{ fontSize: '0.72rem', fontWeight: 700, color: colorB, opacity: 0.8 }}>{labelB}</div>}
        </div>
      </motion.div>

      {/* Step 2 — blocks pop in, grouped by a then b */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
        {Array.from({ length: a }, (_, i) => (
          <motion.div key={`a${i}`}
            initial={{ opacity: 0, scale: 0, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: d + 0.4 + i * 0.12, type: 'spring', stiffness: 500, damping: 18 }}
            style={{
              width: BLOCK, height: BLOCK, borderRadius: 10, background: colorA,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontWeight: 900, fontSize: '1rem',
              boxShadow: `0 4px 14px ${colorA}55`,
            }}>
            {i + 1}
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: d + 0.4 + a * 0.12 + 0.1, type: 'spring', stiffness: 400 }}
          style={{ fontSize: '1.8rem', fontWeight: 900, color: '#9ca3af', margin: '0 4px' }}>
          +
        </motion.div>

        {Array.from({ length: b }, (_, i) => (
          <motion.div key={`b${i}`}
            initial={{ opacity: 0, scale: 0, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: d + 0.55 + a * 0.12 + i * 0.12, type: 'spring', stiffness: 500, damping: 18 }}
            style={{
              width: BLOCK, height: BLOCK, borderRadius: 10, background: colorB,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontWeight: 900, fontSize: '1rem',
              boxShadow: `0 4px 14px ${colorB}55`,
            }}>
            {a + i + 1}
          </motion.div>
        ))}
      </div>

      {/* Step 3 — total bounces in */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: d + 0.6 + (a + b) * 0.12, type: 'spring', stiffness: 340, damping: 16 }}
        style={{
          display: 'flex', alignItems: 'center', gap: 14,
          background: 'linear-gradient(135deg, #f5f0ff, #ede9fe)',
          border: '2px solid #c4b5fd',
          borderRadius: 20, padding: '14px 28px',
          boxShadow: '0 8px 28px rgba(124,58,237,0.18)',
        }}>
        <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#7c3aed' }}>
          {a} <span style={{ color: '#9ca3af' }}>+</span> {b} <span style={{ color: '#9ca3af', margin: '0 4px' }}>=</span>
        </div>
        <motion.div
          animate={{ scale: [1, 1.18, 1] }}
          transition={{ delay: d + 0.75 + (a + b) * 0.12, duration: 0.45, ease: 'easeOut' }}
          style={{ fontSize: '2.2rem', fontWeight: 900, color: '#7c3aed', lineHeight: 1 }}>
          {total}
        </motion.div>
        <div style={{ fontSize: '1rem', fontWeight: 800, color: '#5b21b6' }}>parts total</div>
      </motion.div>

      {note && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: d + 0.8 + (a + b) * 0.12 }}
          style={{ fontSize: '0.8rem', fontWeight: 700, color: '#9ca3af', textAlign: 'center' }}>
          {note}
        </motion.div>
      )}
    </div>
  );
};

// ── Ratio Unitary Method Chain ─────────────────────────────────────────────
// Animates the 4-step "language of parts" method:
//   ratio bar → total parts → 1 part value → target quantity
// Props:
//   ratioA / ratioB  — the ratio numbers
//   labelA / labelB  — names
//   colorA / colorB
//   knownSide        — 'total' | 'a' | 'b'  (what we know)
//   knownValue       — the number we know (total or one side)
//   findSide         — 'a' | 'b' | 'total'  (what we want to find)
const RatioUnitaryChain = ({
  ratioA = 3, ratioB = 5,
  labelA = 'Red', labelB = 'Blue',
  colorA = '#ef4444', colorB = '#3b82f6',
  knownSide = 'total', knownValue = 48,
  findSide = 'b',
}) => {
  const totalParts = ratioA + ratioB;
  const onePart = knownSide === 'total'
    ? knownValue / totalParts
    : knownSide === 'a'
      ? knownValue / ratioA
      : knownValue / ratioB;

  const ansA = ratioA * onePart;
  const ansB = ratioB * onePart;
  const ansTotal = totalParts * onePart;

  const steps = [
    {
      label: 'Ratio bar',
      content: null, // rendered as bar
      delay: 0.1,
    },
    {
      label: 'Total parts',
      math: `${ratioA} + ${ratioB} = ${totalParts} \\text{ parts}`,
      color: '#7c3aed',
      delay: 0.55,
    },
    {
      label: knownSide === 'total'
        ? `${totalParts} parts = ${knownValue}`
        : knownSide === 'a'
          ? `${ratioA} parts = ${knownValue} ${labelA}`
          : `${ratioB} parts = ${knownValue} ${labelB}`,
      math: `1 \\text{ part} = ${onePart}`,
      color: '#059669',
      delay: 1.1,
    },
    {
      label: findSide === 'a'
        ? `${labelA}: ${ratioA} parts`
        : findSide === 'b'
          ? `${labelB}: ${ratioB} parts`
          : 'Total',
      math: findSide === 'a'
        ? `${ratioA} \\times ${onePart} = ${ansA}`
        : findSide === 'b'
          ? `${ratioB} \\times ${onePart} = ${ansB}`
          : `${totalParts} \\times ${onePart} = ${ansTotal}`,
      color: findSide === 'a' ? colorA : findSide === 'b' ? colorB : '#f59e0b',
      delay: 1.65,
      highlight: true,
    },
  ];

  return (
    <div style={{ fontFamily: FONT, display: 'flex', flexDirection: 'column', gap: 14, width: '100%', maxWidth: 480, margin: '0 auto' }}>

      {/* Ratio bar */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
        <div style={{ height: 52, borderRadius: 12, overflow: 'hidden', display: 'flex', gap: 3 }}>
          <motion.div initial={{ flex: 0 }} animate={{ flex: ratioA }}
            transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
            style={{ background: colorA, display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 0 }}>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
              style={{ color: '#fff', fontWeight: 900, fontSize: '1rem' }}>{ratioA}</motion.span>
          </motion.div>
          <motion.div initial={{ flex: 0 }} animate={{ flex: ratioB }}
            transition={{ delay: 0.35, duration: 0.6, ease: 'easeOut' }}
            style={{ background: colorB, display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 0 }}>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}
              style={{ color: '#fff', fontWeight: 900, fontSize: '1rem' }}>{ratioB}</motion.span>
          </motion.div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 800, color: colorA }}>{labelA}</span>
          <span style={{ fontSize: '0.82rem', fontWeight: 900, color: '#374151', letterSpacing: 3 }}>{ratioA} : {ratioB}</span>
          <span style={{ fontSize: '0.78rem', fontWeight: 800, color: colorB }}>{labelB}</span>
        </div>
      </motion.div>

      {/* Step chain */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {steps.slice(1).map((step, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: step.delay, type: 'spring', stiffness: 280, damping: 24 }}
            style={{
              display: 'flex', alignItems: 'center', gap: 14,
              background: step.highlight
                ? `linear-gradient(135deg, ${step.color}18, ${step.color}28)`
                : '#f8fafc',
              border: `1.5px solid ${step.highlight ? step.color + '55' : '#e2e8f0'}`,
              borderRadius: 14, padding: '11px 16px',
              boxShadow: step.highlight ? `0 6px 20px ${step.color}22` : 'none',
            }}>
            <div style={{
              width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
              background: step.highlight
                ? `linear-gradient(135deg, ${step.color}cc, ${step.color})`
                : `linear-gradient(135deg, #7c3aedcc, #7c3aed)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontWeight: 900, fontSize: '0.75rem',
              boxShadow: `0 3px 10px ${step.color || '#7c3aed'}44`,
            }}>
              {i + 2}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#9ca3af', marginBottom: 2 }}>{step.label}</div>
              <MathView content={`$${step.math}$`} style={{ fontSize: step.highlight ? '1.2rem' : '1rem', fontWeight: step.highlight ? 900 : 700, color: step.color || '#1e1b4b' }} />
            </div>
            {step.highlight && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                transition={{ delay: step.delay + 0.3, type: 'spring', stiffness: 400 }}
                style={{ fontSize: '1.3rem' }}>✓</motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// ── Percentage Grid ────────────────────────────────────────────────────────
// 10×10 grid of 100 squares. The first `count` squares fill in left-to-right,
// top-to-bottom so students can literally watch "X out of 100" being coloured.
// Phase 1 (0.08–0.78s): all rows pop in sequentially as empty (light purple).
// Phase 2 (0.85s+):     the first `count` squares change to `color`, staggered.
const PercentGrid = ({ count = 50, color = '#7c3aed', label, cellSize = 25, gap = 3 }) => {
  const shaded = Math.round(Math.min(100, Math.max(0, count)));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, fontFamily: FONT }}>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(10, ${cellSize}px)`, gap: `${gap}px` }}>
        {Array.from({ length: 100 }, (_, i) => {
          const filled = i < shaded;
          const row = Math.floor(i / 10);
          return (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.5, background: '#ede9fe' }}
              animate={{ opacity: 1, scale: 1, background: filled ? color : '#ede9fe' }}
              transition={{
                opacity:    { delay: 0.08 + row * 0.07, duration: 0.16 },
                scale:      { delay: 0.08 + row * 0.07, duration: 0.16, type: 'spring', stiffness: 420 },
                background: { delay: filled ? 0.85 + i * 0.022 : 0, duration: 0.16 },
              }}
              style={{ width: cellSize, height: cellSize, borderRadius: 3 }}
            />
          );
        })}
      </div>
      {label && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.85 + shaded * 0.022 + 0.25 }}
          style={{ fontSize: '0.88rem', fontWeight: 700, color: '#5b21b6', textAlign: 'center', fontFamily: FONT }}>
          {label}
        </motion.div>
      )}
    </div>
  );
};

// Each board item animates in, with a stagger handled by the parent.
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 24 } },
};

const BoardItem = ({ item }) => {
  let inner = null;
  if (item.type === 'placeValueTable') inner = <PlaceValueTable columns={item.columns} />;
  else if (item.type === 'triangle') inner = <SpecialTriangle {...item} />;
  else if (item.type === 'graph') inner = <div style={{ display: 'flex', justifyContent: 'center' }}><FunctionGraph {...item} /></div>;
  else if (item.type === 'valueTable') inner = <ValueTable rows={item.rows} />;
  else if (item.type === 'math') inner = (
    <motion.div
      initial={{ opacity: 0, scale: 0.93, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
      style={{
        padding: item.emphasis ? '22px 28px' : '10px', borderRadius: '20px',
        background: item.highlightColor ? item.highlightColor : (item.emphasis ? 'linear-gradient(135deg,#faf5ff,#f0ebff)' : 'transparent'),
        border: item.emphasis || item.highlightColor ? '1.5px solid rgba(167,139,250,0.3)' : 'none', textAlign: 'center',
        boxShadow: item.emphasis || item.highlightColor ? '0 8px 32px rgba(124,58,237,0.12), inset 0 1px 0 rgba(255,255,255,0.8)' : 'none',
      }}>
      <MathView content={item.content} style={{ fontSize: item.emphasis ? '1.5rem' : '1.3rem', fontWeight: 700, color: item.textColor || '#1e1b4b' }} />
    </motion.div>
  );
  else if (item.type === 'mathRow') inner = (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', alignItems: 'center' }}>
      {item.formulas.map((f, fi) => (
        <motion.div key={fi}
          initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 280, damping: 22, delay: f.delay ?? fi * 0.25 }}
          style={{ padding: '12px 18px', borderRadius: '14px', background: f.highlightColor || 'linear-gradient(135deg,#faf5ff,#f3f0ff)', border: '1.5px solid', borderColor: f.borderColor || '#e9e2fb', boxShadow: '0 4px 14px rgba(0,0,0,0.06)', textAlign: 'center' }}>
          <MathView content={f.content} style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1e1b4b' }} />
        </motion.div>
      ))}
    </div>
  );
  else if (item.type === 'numberLine') inner = <NumberLineBoard {...item} />;
  else if (item.type === 'conversionTriangle') inner = <ConversionTriangle />;
  else if (item.type === 'percentFlow') inner = <PercentFlow {...item} />;
  else if (item.type === 'stepCards') inner = <StepCards {...item} />;
  else if (item.type === 'partWholeBar') inner = <PartWholeBar {...item} />;
  else if (item.type === 'percentGrid') inner = <PercentGrid {...item} />;
  else if (item.type === 'percentOfBar') inner = <PercentOfBar {...item} />;
  else if (item.type === 'ratioBar') inner = <RatioBar {...item} />;
  else if (item.type === 'ratioFamilyInteractive') inner = <RatioFamilyInteractive {...item} />;
  else if (item.type === 'ratioSimplifier') inner = <RatioSimplifier {...item} />;
  else if (item.type === 'ratioFractionVisual') inner = <RatioFractionVisual {...item} />;
  else if (item.type === 'ratioUnitaryChain') inner = <RatioUnitaryChain {...item} />;
  else if (item.type === 'ratioPartsCount') inner = <RatioPartsCount {...item} />;
  else if (item.type === 'ratioSimplifySteps') inner = <RatioSimplifySteps {...item} />;
  else if (item.type === 'percentGridRow') inner = <PercentGridRow {...item} />;
  else if (item.type === 'percentTableInteractive') inner = <PercentTableInteractive {...item} />;
  else if (item.type === 'workingOut') inner = <WorkingOut {...item} />;
  else if (item.type === 'clock') inner = (
    <div style={{ textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
        {(item.times || [{ hour: item.hour, minute: item.minute }]).map((t, ti) => (
          <motion.div key={ti}
            initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22, delay: ti * 0.25 }}>
            <div dangerouslySetInnerHTML={{ __html: clockSvg(t.hour, t.minute, {
              size: item.size || 170,
              highlights: t.highlights || item.highlights,
              sweep: t.sweep || item.sweep,
              countNumbers: t.countNumbers || item.countNumbers,
            }) }} />
            {t.label && <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#7c3aed', fontFamily: FONT, marginTop: '4px' }}>{t.label}</div>}
          </motion.div>
        ))}
      </div>
      {item.label && <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748b', fontFamily: FONT, marginTop: '6px' }}>{item.label}</div>}
    </div>
  );
  else if (item.type === 'text') inner = <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#475569', textAlign: 'center', fontFamily: FONT }}>{item.content}</div>;
  else return null;
  return <motion.div variants={itemVariants}>{inner}</motion.div>;
};

// ── Voice (Web Speech API) — free, client-side, no storage ──────────────────
// Prefer the highest-quality voices the device offers: modern OSes ship
// "Natural"/"Neural" neural voices (Edge/Windows, recent macOS/iOS) and Chrome
// ships "Google" voices — all far better than the legacy robotic default.
const pickVoice = () => {
  const vs = window.speechSynthesis ? speechSynthesis.getVoices() : [];
  const en = vs.filter(v => /^en/i.test(v.lang));
  const score = (v) => {
    let s = 0;
    if (/natural|neural/i.test(v.name)) s += 100;       // MS/Apple neural
    if (/google/i.test(v.name)) s += 60;                // Chrome online voices
    if (/(en[-_]?GB|en[-_]?AU)/i.test(v.lang)) s += 20; // UK/AU accent
    if (/female|samantha|karen|libby|sonia|aria|jenny|natasha/i.test(v.name)) s += 15;
    if (!v.localService) s += 10;                       // online voices usually better
    return s;
  };
  return en.sort((a, b) => score(b) - score(a))[0] || vs[0] || null;
};

/**
 * LessonPlayer — renders a lesson spec (from the registry) as a full-screen
 * step-by-step lesson with optional voice narration.
 *
 * Props: lesson (spec), onClose()
 */
const LessonPlayer = ({ lesson, onClose }) => {
  const [idx, setIdx] = useState(0);
  // Only auto-enable voice when the lesson has pre-generated audio files.
  // Without mp3s the player falls back to browser TTS which prompts a download.
  const hasPregen = (lesson?.steps || []).length > 0 && (lesson.steps[0]?.audioUrl != null);
  const [voiceOn, setVoiceOn] = useState(hasPregen);
  const [hd, setHd] = useState(false);        // HD (Kokoro neural) voice opt-in
  const [hdLoading, setHdLoading] = useState(false);
  const [auto, setAuto] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [termPopup, setTermPopup] = useState(null); // { term, def, x, y }
  const steps = lesson?.steps || [];
  const step = steps[idx];
  // When every step has a pre-generated audio file, voice is already HD —
  // the in-browser "HD voice" toggle (model download) isn't needed.
  const hasPregenAudio = steps.length > 0 && steps.every((s) => s.audioUrl);
  // Glossary: lesson-wide terms plus any step-specific ones.
  const glossary = { ...(lesson?.glossary || {}), ...(step?.glossary || {}) };

  // Clicking a highlighted term shows its definition in a popover.
  const onTermClick = (e) => {
    const el = e.target.closest?.('.lp-term');
    if (!el) return;
    const key = el.getAttribute('data-term');
    const def = glossary[key];
    if (!def) return;
    const r = el.getBoundingClientRect();
    setTermPopup({ term: el.textContent, def, x: r.left + r.width / 2, y: r.top });
  };

  // Refs so the async audio callbacks read fresh values without re-subscribing.
  const autoRef = useRef(auto); useEffect(() => { autoRef.current = auto; }, [auto]);
  const voiceRef = useRef(voiceOn); useEffect(() => { voiceRef.current = voiceOn; }, [voiceOn]);
  const hdRef = useRef(hd); useEffect(() => { hdRef.current = hd; }, [hd]);
  const advTimer = useRef(null);
  const audioRef = useRef(null);              // current HD <audio> element
  const tokenRef = useRef(0);                 // guards against stale async playback

  const clearAdvance = () => { if (advTimer.current) { clearTimeout(advTimer.current); advTimer.current = null; } };
  const stopAudio = () => {
    if (window.speechSynthesis) speechSynthesis.cancel();
    if (audioRef.current) { try { audioRef.current.pause(); } catch {} audioRef.current = null; }
  };
  const stopSpeak = useCallback(() => {
    tokenRef.current++;
    stopAudio();
    clearAdvance();
    setSpeaking(false);
    setHdLoading(false);
  }, []);

  const nextOrStop = useCallback(() => {
    setIdx((i) => { if (i >= steps.length - 1) { setAuto(false); return i; } return i + 1; });
  }, [steps.length]);

  // Play the current step's narration. In auto-play, advance to the NEXT step
  // only AFTER the narration finishes — so voices never overlap.
  const speakStep = useCallback(async (stepObj) => {
    const text = stepObj?.speech;
    tokenRef.current++;
    const myToken = tokenRef.current;
    stopAudio();
    clearAdvance();
    const proceed = () => { if (autoRef.current && tokenRef.current === myToken) advTimer.current = setTimeout(nextOrStop, 650); };
    const fixedDelay = () => { if (autoRef.current) advTimer.current = setTimeout(nextOrStop, 3600); };

    if (!voiceRef.current) { setSpeaking(false); fixedDelay(); return; }

    // ── Best path: pre-generated audio file (small, instant, no model) ──
    const fileUrl = stepObj?.audioUrl;
    if (fileUrl) {
      try {
        const audio = new Audio(fileUrl);
        audioRef.current = audio;
        audio.onplay = () => setSpeaking(true);
        audio.onended = () => { setSpeaking(false); proceed(); };
        audio.onerror = () => { setSpeaking(false); proceed(); };
        await audio.play();   // rejects if the file is missing → caught below
        return;
      } catch (e) {
        if (tokenRef.current !== myToken) return;
        // fall through to generated voice
      }
    }

    if (!text) { setSpeaking(false); fixedDelay(); return; }

    // ── HD path: Kokoro neural voice generated in-browser (lazy, cached) ──
    if (hdRef.current) {
      try {
        const { synthKokoro } = await import('../../lessons/kokoroVoice');
        setHdLoading(true);
        const url = await synthKokoro(text);
        if (tokenRef.current !== myToken) return;       // step changed while generating
        setHdLoading(false);
        const audio = new Audio(url);
        audioRef.current = audio;
        audio.onplay = () => setSpeaking(true);
        audio.onended = () => { setSpeaking(false); proceed(); };
        audio.onerror = () => { setSpeaking(false); proceed(); };
        await audio.play();
        return;
      } catch (e) {
        // Fall back to the built-in voice on any failure.
        if (tokenRef.current !== myToken) return;
        setHdLoading(false);
        console.warn('[LessonPlayer] HD voice failed, using standard voice:', e?.message || e);
      }
    }

    // ── Standard path: Web Speech API (instant) ──
    if (window.speechSynthesis) {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-GB'; u.rate = 0.95; u.pitch = 1.0;
      const v = pickVoice(); if (v) { u.voice = v; u.lang = v.lang; }
      u.onstart = () => setSpeaking(true);
      u.onend = () => { setSpeaking(false); proceed(); };
      u.onerror = () => { setSpeaking(false); proceed(); };
      speechSynthesis.speak(u);
    } else { setSpeaking(false); fixedDelay(); }
  }, [nextOrStop]);

  // Re-run whenever the step, auto, voice, or HD toggle changes.
  useEffect(() => { setTermPopup(null); speakStep(step); return clearAdvance;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, auto, voiceOn, hd]);

  // Ref callback on the narration div: render its inline `$…$` math via KaTeX
  // auto-render the moment the node mounts (handles AnimatePresence timing).
  const renderMathIn = useCallback((el) => {
    if (!el) return;
    const run = (tries = 0) => {
      if (window.renderMathInElement) {
        try { window.renderMathInElement(el, { delimiters: [{ left: '$', right: '$', display: false }], throwOnError: false }); } catch {}
      } else if (tries < 25) { setTimeout(() => run(tries + 1), 120); }
    };
    run();
  }, []);

  // Clean up on unmount.
  useEffect(() => () => stopSpeak(), [stopSpeak]);

  if (!lesson || !step) return null;

  const go = (n) => { setAuto(false); stopSpeak(); setIdx(Math.max(0, Math.min(steps.length - 1, n))); };

  const toggleHd = () => {
    const next = !hd;
    setHd(next);
    if (next) { import('../../lessons/kokoroVoice').then(m => m.preloadKokoro()).catch(() => {}); }
  };

  const progress = ((idx + 1) / steps.length) * 100;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1300, background: '#f8f7ff', display: 'flex', flexDirection: 'column', overflow: 'hidden', fontFamily: FONT }}>
      {/* Ambient purple glow */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(900px 500px at 50% 8%, rgba(167,139,250,0.18), transparent 60%), radial-gradient(700px 500px at 85% 90%, rgba(124,58,237,0.10), transparent 60%)' }} />
      {/* Top progress bar */}
      <div style={{ height: '4px', background: '#ece9fb', flexShrink: 0 }}>
        <motion.div animate={{ width: `${progress}%` }} transition={{ type: 'spring', stiffness: 120, damping: 22 }}
          style={{ height: '100%', background: 'linear-gradient(90deg,#a78bfa,#7c3aed)', borderRadius: '0 4px 4px 0' }} />
      </div>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #ece9fb', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '11px', background: 'linear-gradient(135deg,#a78bfa,#7c3aed)', display: 'grid', placeItems: 'center', fontSize: '1.1rem', boxShadow: '0 6px 16px rgba(124,58,237,0.28)' }}>{lesson.emoji || '🔢'}</div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#a78bfa' }}>Step-by-step lesson</div>
            <div style={{ fontWeight: 800, color: '#1e1b4b', fontSize: '1.02rem', lineHeight: 1.15, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{lesson.title}</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#8b7aa7' }}>{idx + 1} <span style={{ color: '#cbbbe6' }}>/ {steps.length}</span></div>
          <button onClick={() => { stopSpeak(); onClose?.(); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 14px', borderRadius: '12px', border: '1px solid #eee', background: '#fff', color: '#64748b', fontWeight: 800, fontSize: '0.82rem', cursor: 'pointer', fontFamily: FONT }}>
            <X size={15} /> Close
          </button>
        </div>
      </div>

      {/* Body */}
      <div style={{ position: 'relative', flex: 1, minHeight: 0, overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '26px 16px' }}>
        <div style={{ width: '100%', maxWidth: '900px' }}>
          <AnimatePresence mode="wait">
            <motion.div key={idx}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>

              {/* Board — a glowing card; children build up in sequence */}
              <motion.div
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.22, delayChildren: 0.08 } } }}
                initial="hidden" animate="show"
                style={{
                  position: 'relative', display: 'flex', flexDirection: 'column', gap: '20px',
                  background: 'linear-gradient(160deg, rgba(255,255,255,0.98) 0%, rgba(248,245,255,0.97) 100%)',
                  borderRadius: '28px', padding: '32px 28px',
                  border: '1.5px solid rgba(167,139,250,0.22)',
                  boxShadow: '0 50px 100px -30px rgba(124,58,237,0.35), 0 0 0 8px rgba(167,139,250,0.06), inset 0 1px 0 rgba(255,255,255,0.9)',
                }}>
                {/* subtle top accent line */}
                <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '2px', borderRadius: '0 0 4px 4px', background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.6), rgba(124,58,237,0.8), rgba(167,139,250,0.6), transparent)' }} />
                {(step.board || []).map((item, i) => <BoardItem key={i} item={item} />)}
              </motion.div>

              {/* AI tutor chat bubble */}
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                {/* Avatar */}
                <div style={{ position: 'relative', flexShrink: 0, width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg,#c4b5fd,#7c3aed,#4f46e5)', color: '#fff', display: 'grid', placeItems: 'center', boxShadow: '0 12px 28px rgba(124,58,237,0.45), 0 0 0 3px rgba(167,139,250,0.25)', marginTop: '2px' }}>
                  <Sparkles size={20} fill="#fff" />
                  {(speaking || hdLoading) && <span style={{ position: 'absolute', inset: '-6px', borderRadius: '50%', border: '2px solid rgba(167,139,250,0.7)', animation: 'lp-pulse 1.1s ease-out infinite' }} />}
                </div>
                {/* Bubble */}
                <motion.div key={`bub-${idx}`} initial={{ opacity: 0, y: 10, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 300, damping: 24, delay: 0.1 }}
                  style={{ position: 'relative', flex: 1, background: 'linear-gradient(135deg, #ffffff 0%, #fdfbff 100%)', borderRadius: '22px 22px 22px 6px', padding: '18px 22px', boxShadow: '0 20px 50px -12px rgba(124,58,237,0.2), 0 4px 16px rgba(0,0,0,0.04)', border: '1.5px solid rgba(167,139,250,0.2)' }}>
                  {/* Header badge */}
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', marginBottom: '10px', background: 'linear-gradient(135deg,#f5f0ff,#ede9fe)', borderRadius: '999px', padding: '4px 12px 4px 8px', border: '1px solid rgba(167,139,250,0.3)' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'linear-gradient(135deg,#a78bfa,#7c3aed)', display: 'grid', placeItems: 'center' }}>
                      <Sparkles size={10} fill="#fff" />
                    </div>
                    <span style={{ fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7c3aed' }}>AI Tutor</span>
                    {(speaking || hdLoading) && (
                      <span style={{ display: 'inline-flex', gap: '3px', alignItems: 'center', marginLeft: '2px' }}>
                        {[0, 1, 2].map((d) => <span key={d} style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#a78bfa', display: 'inline-block', animation: `lp-bounce 1s ${d * 0.15}s infinite ease-in-out` }} />)}
                      </span>
                    )}
                  </div>
                  {/* Narration text */}
                  <div className="lp-narr" ref={renderMathIn} onClick={onTermClick}
                    style={{ fontSize: '1.05rem', lineHeight: 1.78, fontWeight: 500, color: '#1e1b4b', letterSpacing: '0.01em' }}
                    dangerouslySetInnerHTML={{ __html: renderNarration(step.narration || '', glossary) }} />
                  {Object.keys(glossary).length > 0 && (
                    <div style={{ marginTop: '10px', fontSize: '0.74rem', fontWeight: 700, color: '#9b72f5', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <span style={{ background: '#f0ebff', borderRadius: '6px', padding: '2px 8px', border: '1px solid rgba(167,139,250,0.3)' }}>
                        💡 Tap <span style={{ borderBottom: '2px dotted #a78bfa' }}>underlined</span> words for a definition
                      </span>
                    </div>
                  )}
                  {hdLoading && (
                    <div style={{ marginTop: '10px', fontSize: '0.78rem', fontWeight: 700, color: '#7c3aed', display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#f5f0ff', borderRadius: '8px', padding: '6px 10px' }}>
                      <span style={{ width: '12px', height: '12px', border: '2px solid #c4b5fd', borderTopColor: '#7c3aed', borderRadius: '50%', display: 'inline-block', animation: 'lp-spin 0.8s linear infinite' }} />
                      Preparing natural voice… (one-time download)
                    </div>
                  )}
                  {/* tail */}
                  <div style={{ position: 'absolute', left: '-8px', top: '18px', width: 0, height: 0, borderTop: '8px solid transparent', borderBottom: '8px solid transparent', borderRight: '8px solid rgba(167,139,250,0.2)' }} />
                  <div style={{ position: 'absolute', left: '-6px', top: '19px', width: 0, height: 0, borderTop: '7px solid transparent', borderBottom: '7px solid transparent', borderRight: '7px solid #fdfbff' }} />
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', padding: '14px 16px 18px', background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(8px)', borderTop: '1px solid #ece9fb', flexShrink: 0 }}>
        <button onClick={() => go(idx - 1)} disabled={idx === 0} style={btn('ghost', idx === 0)}><ArrowLeft size={15} /> Back</button>
        <button onClick={() => { if (idx >= steps.length - 1) setIdx(0); setAuto(a => !a); }} style={btn(auto ? 'accent' : 'ghost')}>
          {auto ? <><Pause size={15} /> Pause</> : <><Play size={15} /> Auto-play</>}
        </button>
        <button onClick={() => go(idx + 1)} disabled={idx === steps.length - 1} style={btn('primary', idx === steps.length - 1)}>Next <ArrowRight size={15} /></button>
        <button onClick={() => go(0)} style={btn('ghost')} title="Restart"><RotateCcw size={15} /></button>
        <button onClick={() => setVoiceOn(v => !v)} style={btn(voiceOn ? 'on' : 'off')}>
          {voiceOn ? <Volume2 size={15} /> : <VolumeX size={15} />}
        </button>
        {!hasPregenAudio && (
          <button onClick={toggleHd} disabled={!voiceOn} style={btn(hd ? 'hd' : 'ghost', !voiceOn)} title="Higher-quality neural voice (downloads once)">
            ✨ HD: {hd ? 'on' : 'off'}
          </button>
        )}
      </div>

      {/* Glossary term popover */}
      <AnimatePresence>
        {termPopup && (() => {
          const vw = typeof window !== 'undefined' ? window.innerWidth : 800;
          const boxW = Math.min(300, vw * 0.86);
          const left = Math.min(Math.max(termPopup.x - boxW / 2, 8), vw - boxW - 8);
          const tailLeft = Math.min(Math.max(termPopup.x - left - 9, 16), boxW - 34); // tail points at the word
          return (
            <>
              <div onClick={() => setTermPopup(null)} style={{ position: 'fixed', inset: 0, zIndex: 1390 }} />
              {/* Outer div owns the POSITION (translateY -100% lifts it above the
                  word). The inner motion.div only animates opacity/scale, so its
                  transform can't clobber the positioning transform. */}
              <div style={{ position: 'fixed', left, top: termPopup.y - 12, width: boxW, zIndex: 1400, transform: 'translateY(-100%)' }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ type: 'spring', stiffness: 340, damping: 24 }}
                  style={{ transformOrigin: `${tailLeft + 9}px bottom` }}>
                  <div style={{ position: 'relative', background: 'linear-gradient(135deg,#7c3aed,#6d28d9)', color: '#fff', borderRadius: '16px', padding: '13px 16px', boxShadow: '0 18px 40px rgba(124,58,237,0.42)', fontFamily: FONT }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '5px' }}>
                      <span style={{ fontWeight: 900, fontSize: '0.95rem', textTransform: 'capitalize' }}>{termPopup.term}</span>
                      <button onClick={() => setTermPopup(null)} style={{ border: 'none', background: 'rgba(255,255,255,0.2)', color: '#fff', width: '22px', height: '22px', borderRadius: '50%', cursor: 'pointer', display: 'grid', placeItems: 'center', flexShrink: 0 }}><X size={13} /></button>
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 500, lineHeight: 1.55, color: 'rgba(255,255,255,0.96)' }}>{termPopup.def}</div>
                    {/* tail — points down at the clicked word */}
                    <div style={{ position: 'absolute', bottom: '-8px', left: `${tailLeft}px`, width: 0, height: 0, borderLeft: '9px solid transparent', borderRight: '9px solid transparent', borderTop: '9px solid #6d28d9' }} />
                  </div>
                </motion.div>
              </div>
            </>
          );
        })()}
      </AnimatePresence>

      <style>{`@keyframes lp-pulse{0%{opacity:.7;transform:scale(1)}100%{opacity:0;transform:scale(1.3)}}@keyframes lp-spin{to{transform:rotate(360deg)}}@keyframes lp-bounce{0%,80%,100%{transform:translateY(0);opacity:.5}40%{transform:translateY(-4px);opacity:1}}.lp-term{color:#7c3aed;font-weight:800;border-bottom:2px dotted #a78bfa;cursor:pointer;padding:0 1px;border-radius:3px;transition:background .15s}.lp-term:hover{background:#ede9fe}`}</style>
    </div>
  );
};

const btn = (variant, disabled) => {
  const base = { display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '11px 17px', borderRadius: '13px', fontWeight: 800, fontSize: '0.86rem', cursor: disabled ? 'default' : 'pointer', border: 'none', opacity: disabled ? 0.4 : 1, fontFamily: FONT, transition: 'transform 0.1s' };
  if (variant === 'primary') return { ...base, background: 'linear-gradient(135deg,#a78bfa,#7c3aed)', color: '#fff', boxShadow: disabled ? 'none' : '0 8px 20px rgba(124,58,237,0.3)' };
  if (variant === 'accent') return { ...base, background: 'linear-gradient(135deg,#fbbf24,#f59e0b)', color: '#fff', boxShadow: '0 8px 18px rgba(245,158,11,0.3)' };
  if (variant === 'on') return { ...base, background: '#ecfdf5', color: '#059669', border: '1px solid #a7f3d0' };
  if (variant === 'off') return { ...base, background: '#f1f5f9', color: '#94a3b8', border: '1px solid #e2e8f0' };
  if (variant === 'hd') return { ...base, background: 'linear-gradient(135deg,#fce7f3,#ede9fe)', color: '#9333ea', border: '1px solid #e9d5ff' };
  return { ...base, background: '#fff', color: '#7c3aed', border: '1px solid #e6e1fb' };
};

export default LessonPlayer;
