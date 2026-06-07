import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, X, RotateCcw, Play, Pause, Volume2, VolumeX, Sparkles } from 'lucide-react';
import MathView from '../MathView';

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

      {/* asymptotes (sweep in) */}
      {asymptotes.map((a, i) => {
        const hot = !!a.color; const col = a.color || '#cbd5e1';
        const common = { stroke: col, strokeWidth: hot ? 2.6 : 1.4, strokeDasharray: '7 6', initial: { pathLength: 0, opacity: 0 }, animate: { pathLength: 1, opacity: 1 }, transition: { duration: 0.7, delay: 0.5 } };
        return a.type === 'h'
          ? <motion.line key={i} x1={pad} x2={width - pad} y1={sy(a.y)} y2={sy(a.y)} {...common} />
          : <motion.line key={i} y1={pad} y2={height - pad} x1={sx(a.x)} x2={sx(a.x)} {...common} />;
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
      {curves.map((c, i) => (
        <motion.path key={i} d={buildPath(c.fn, c.step)} fill="none" stroke={c.color || 'url(#lpCurve)'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.1, ease: 'easeInOut' }} />
      ))}

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
        return <motion.path key={'circ' + i} d={d} fill="none" stroke={c.color || 'url(#lpCurve)'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, ease: 'easeInOut' }} />;
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

// ── Number Line ─────────────────────────────────────────────────────────────
// Props:
//   min, max        — integers shown on the line (e.g. 0, 7)
//   marks           — array of numbers to show as filled dots
//   highlightRange  — { from, to } exclusive range drawn in a highlight colour
//   arrowLeft       — draw left-facing arrow (for lines that extend both ways)
//   label           — optional caption below the diagram
const NumberLineBoard = ({ min = 0, max = 7, marks = [], highlightRange, arrowLeft, label }) => {
  const W = 560, H = 80;
  const PAD = 44;
  const usableW = W - PAD * 2;
  const step = usableW / (max - min);
  const toX = (n) => PAD + (n - min) * step;

  const tickY1 = 36, tickY2 = 52, axisY = 44;
  const dotR = 6;

  const ticks = [];
  for (let n = min; n <= max; n++) ticks.push(n);

  const hlPts = highlightRange
    ? ticks.filter((n) => n > highlightRange.from && n < highlightRange.to)
    : [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: W, overflow: 'visible' }}>
        {/* axis line */}
        <line x1={PAD - 4} y1={axisY} x2={W - PAD + 12} y2={axisY} stroke="#475569" strokeWidth={2} />
        {/* right arrow */}
        <polygon points={`${W - PAD + 12},${axisY} ${W - PAD + 4},${axisY - 5} ${W - PAD + 4},${axisY + 5}`} fill="#475569" />
        {/* left arrow */}
        {arrowLeft && <polygon points={`${PAD - 4},${axisY} ${PAD + 4},${axisY - 5} ${PAD + 4},${axisY + 5}`} fill="#475569" />}
        {/* ticks and labels */}
        {ticks.map((n) => (
          <g key={n}>
            <line x1={toX(n)} y1={tickY1} x2={toX(n)} y2={tickY2} stroke="#475569" strokeWidth={1.5} />
            <text x={toX(n)} y={tickY2 + 14} textAnchor="middle" fontSize={13} fontFamily={FONT} fontWeight={600} fill="#334155">{n}</text>
          </g>
        ))}
        {/* highlight dots (light colour — numbers in the range) */}
        {hlPts.map((n) => (
          <motion.circle key={`hl-${n}`} cx={toX(n)} cy={axisY} r={dotR}
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 320, damping: 20 }}
            fill="#7c3aed" opacity={0.25} />
        ))}
        {/* explicit marks (filled dots) */}
        {marks.map((n) => (
          <motion.circle key={`m-${n}`} cx={toX(n)} cy={axisY} r={dotR}
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 320, damping: 20 }}
            fill="#7c3aed" stroke="#fff" strokeWidth={1.5} />
        ))}
      </svg>
      {label && <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#64748b', fontFamily: FONT }}>{label}</div>}
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
    <div style={{
      padding: item.emphasis ? '18px 22px' : '8px', borderRadius: '16px',
      background: item.highlightColor ? item.highlightColor : (item.emphasis ? 'linear-gradient(135deg,#faf5ff,#f3f0ff)' : 'transparent'),
      border: item.emphasis || item.highlightColor ? '1px solid #e9e2fb' : 'none', textAlign: 'center',
      boxShadow: item.emphasis || item.highlightColor ? '0 6px 18px rgba(124,58,237,0.06)' : 'none',
    }}>
      <MathView content={item.content} style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1e1b4b' }} />
    </div>
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
                  position: 'relative', display: 'flex', flexDirection: 'column', gap: '18px',
                  background: 'rgba(255,255,255,0.96)', borderRadius: '26px', padding: '28px 26px',
                  border: '1px solid rgba(167,139,250,0.18)',
                  boxShadow: '0 40px 90px -28px rgba(124,58,237,0.4), 0 0 0 6px rgba(167,139,250,0.05)',
                }}>
                {(step.board || []).map((item, i) => <BoardItem key={i} item={item} />)}
              </motion.div>

              {/* AI tutor chat bubble */}
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-end' }}>
                <div style={{ position: 'relative', flexShrink: 0, width: '46px', height: '46px', borderRadius: '50%', background: 'linear-gradient(135deg,#a78bfa,#7c3aed)', color: '#fff', display: 'grid', placeItems: 'center', boxShadow: '0 10px 24px rgba(124,58,237,0.4)' }}>
                  <Sparkles size={20} fill="#fff" />
                  {(speaking || hdLoading) && <span style={{ position: 'absolute', inset: '-5px', borderRadius: '50%', border: '2px solid #a78bfa', animation: 'lp-pulse 1.1s ease-out infinite' }} />}
                </div>
                <motion.div key={`bub-${idx}`} initial={{ opacity: 0, y: 8, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                  style={{ position: 'relative', flex: 1, background: '#fff', borderRadius: '20px 20px 20px 6px', padding: '16px 20px', boxShadow: '0 16px 40px -10px rgba(124,58,237,0.22)', border: '1px solid rgba(167,139,250,0.16)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.66rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7c3aed' }}>AI Tutor</span>
                    {(speaking || hdLoading) && (
                      <span style={{ display: 'inline-flex', gap: '3px', alignItems: 'center' }}>
                        {[0, 1, 2].map((d) => <span key={d} style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#a78bfa', display: 'inline-block', animation: `lp-bounce 1s ${d * 0.15}s infinite ease-in-out` }} />)}
                      </span>
                    )}
                  </div>
                  <div className="lp-narr" ref={renderMathIn} onClick={onTermClick} style={{ fontSize: '1.08rem', lineHeight: 1.7, fontWeight: 500, color: '#2e2553' }}
                       dangerouslySetInnerHTML={{ __html: renderNarration(step.narration || '', glossary) }} />
                  {Object.keys(glossary).length > 0 && (
                    <div style={{ marginTop: '8px', fontSize: '0.72rem', fontWeight: 700, color: '#a78bfa' }}>
                      💡 Tap the <span style={{ borderBottom: '2px dotted #a78bfa' }}>underlined</span> words for a definition.
                    </div>
                  )}
                  {hdLoading && (
                    <div style={{ marginTop: '8px', fontSize: '0.78rem', fontWeight: 700, color: '#7c3aed', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ width: '12px', height: '12px', border: '2px solid #c4b5fd', borderTopColor: '#7c3aed', borderRadius: '50%', display: 'inline-block', animation: 'lp-spin 0.8s linear infinite' }} />
                      Preparing natural voice… (one-time download)
                    </div>
                  )}
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
