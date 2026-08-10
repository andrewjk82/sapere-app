import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, X, RotateCcw, Play, Pause, Volume2, VolumeX, Sparkles, Ban } from 'lucide-react';
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

// Steps that need the student to tap/answer something before moving on —
// auto-play must PAUSE here rather than racing past on its usual timer.
const INTERACTIVE_BOARD_TYPES = ['checkpoint', 'compassBearing', 'elevationDepression', 'angleCircle', 'similarTriangles', 'reciprocalRatio', 'exactValuesExplorer', 'unknownSideSolver', 'unknownAngleSolver', 'primaryRatioRecap', 'workedTriangleSolver', 'walkerCliffSolver', 'bearingFlightSolver', 'lessonRecapScene', 'trigBoundaryTable', 'reciprocalBreakdown', 'domainBreakdown', 'generalAngleRecap'];
const isInteractiveStep = (step) => (step?.board || []).some(
  (b) => INTERACTIVE_BOARD_TYPES.includes(b.type) || (b.type === 'triangle' && b.quiz),
);

// Minimum time a step must stay on screen during auto-play, estimated from how
// long it takes to read/hear its narration (~2.3 words/sec) — a floor, not a
// target. Guards against advancing "before the lecture is even done": if the
// narration audio errors, is blocked by the browser's autoplay policy, or a
// step's audio file is mismatched/short, auto-play still won't cut away
// before a student could plausibly have finished it.
const minDwellMs = (step) => {
  const words = (step?.speech || step?.narration || '').trim().split(/\s+/).filter(Boolean).length;
  return Math.min(16000, Math.max(3200, Math.round((words / 2.3) * 1000)));
};

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
// `quiz` (optional): { prompt, correctIndex (0=bottom,1=right,2=hyp), explanation }
// makes the three sides clickable — students tap the side being asked about
// and get instant colour feedback, no separate diagram needed.
// `highlightedSides` (optional): array of side indices to highlight in red
const SpecialTriangle = ({ verts, sideLabels, angleLabels, width = 300, height = 260, quiz, highlightedSides }) => {
  const [selected, setSelected] = useState(null);
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
  const sidePairs = [[pA, pB], [pB, pC], [pC, pA]]; // bottom, right, hypotenuse — matches sideLabels order

  const svg = (
    <svg width={width} height={height} style={{ display: 'block', margin: '0 auto', overflow: 'visible' }}>
      <motion.polygon points={polyPts} fill="rgba(124,58,237,0.07)" stroke="#7c3aed" strokeWidth="3" strokeLinejoin="round"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} />
      <motion.polyline points={rmPts} fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinejoin="round"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
      {(quiz || highlightedSides) && sidePairs.map(([P1, P2], i) => {
        const state = selected === i ? (i === quiz?.correctIndex ? 'correct' : 'wrong') : 'idle';
        const isHighlighted = highlightedSides?.includes(i);
        const stroke = state === 'correct' ? '#22c55e' : state === 'wrong' ? '#ef4444' : (isHighlighted ? '#ef4444' : '#7c3aed');
        return (
          <motion.line key={'hit' + i} x1={P1[0]} y1={P1[1]} x2={P2[0]} y2={P2[1]}
            stroke={stroke} strokeWidth={state === 'idle' && !isHighlighted ? 14 : 9} strokeLinecap="round"
            initial={false} animate={{ opacity: (state === 'idle' && !isHighlighted) ? 0.001 : 0.4 }}
            onClick={() => quiz && setSelected(i)} style={{ cursor: quiz ? 'pointer' : 'default' }} />
        );
      })}
      {[[sAB, sideLabels[0]], [sBC, sideLabels[1]], [sCA, sideLabels[2]]].map(([pos, label], i) => (
        <motion.text key={'s' + i} x={pos[0]} y={pos[1]} textAnchor="middle" dominantBaseline="middle"
          fontSize="15" fontWeight="800" fill="#7c3aed" style={{ paintOrder: 'stroke', stroke: '#fff', strokeWidth: 4, pointerEvents: 'none' }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 + i * 0.1 }}>{label}</motion.text>
      ))}
      {[[aPos, angleLabels[0]], [bPos, angleLabels[1]], [cPos, angleLabels[2]]].map(([pos, label], i) => (
        <motion.text key={'a' + i} x={pos[0]} y={pos[1]} textAnchor="middle" dominantBaseline="middle"
          fontSize="13" fontWeight="700" fill="#1e1b4b" style={{ paintOrder: 'stroke', stroke: '#fff', strokeWidth: 4, pointerEvents: 'none' }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 + i * 0.1 }}>{label}</motion.text>
      ))}
    </svg>
  );

  if (!quiz) return svg;
  const answered = selected != null;
  const isCorrect = answered && selected === quiz.correctIndex;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, fontFamily: FONT }}>
      {svg}
      <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#475569', textAlign: 'center', maxWidth: 320 }}>{quiz.prompt}</div>
      <AnimatePresence>
        {answered && (
          <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            style={{ fontSize: '0.84rem', fontWeight: 800, color: isCorrect ? '#15803d' : '#b45309', textAlign: 'center', maxWidth: 320 }}>
            {isCorrect ? '✓ Correct! ' : '✗ Not that one — try another side. '}{(!isCorrect || quiz.explanation) && quiz.explanation}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
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

// ── Interactive trig boundary-angle table ──────────────────────────────────
// Three small unit circles (sin, cos, tan) stacked vertically, each with its
// four boundary points (0°, 90°, 180°, 270°). Clicking a point on a circle —
// or the matching blank in the table below — fills that one cell and shows
// exactly which coordinate on that circle produced the value, via the
// formula (sin θ = y/r etc.) substituted with the actual x, y, r at that
// angle. Nothing is pre-filled: every value is revealed by a click, tying
// the number back to "where it came from" on the diagram.
const TRIG_BOUNDARY_ANGLES = [0, 90, 180, 270];
const TRIG_BOUNDARY_COORDS = { 0: [1, 0], 90: [0, 1], 180: [-1, 0], 270: [0, -1] };
const TRIG_BOUNDARY_VALUES = {
  sin: { 0: '0', 90: '1', 180: '0', 270: '-1' },
  cos: { 0: '1', 90: '0', 180: '-1', 270: '0' },
  tan: { 0: '0', 90: null, 180: '0', 270: null },
};
const TRIG_BOUNDARY_COLORS = { sin: '#7c3aed', cos: '#059669', tan: '#dc2626' };
const TRIG_BOUNDARY_FORMULA = { sin: '\\sin\\theta=\\dfrac{y}{r}', cos: '\\cos\\theta=\\dfrac{x}{r}', tan: '\\tan\\theta=\\dfrac{y}{x}' };

const TrigBoundaryMiniCircle = ({ func, selectedAngle, onPick, size = 108 }) => {
  const cx = size / 2, cy = size / 2, r = size * 0.32;
  const color = TRIG_BOUNDARY_COLORS[func];
  return (
    <svg width={size} height={size} style={{ display: 'block', overflow: 'visible' }}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#ddd6fe" strokeWidth="1.4" />
      <line x1={cx - r - 14} y1={cy} x2={cx + r + 14} y2={cy} stroke="#cbd5e1" strokeWidth="1.1" />
      <line x1={cx} y1={cy - r - 14} x2={cx} y2={cy + r + 14} stroke="#cbd5e1" strokeWidth="1.1" />
      {TRIG_BOUNDARY_ANGLES.map((angle) => {
        const [ux, uy] = TRIG_BOUNDARY_COORDS[angle];
        const px = cx + ux * r, py = cy - uy * r;
        const isSel = selectedAngle === angle;
        return (
          <g key={angle} style={{ cursor: 'pointer' }} onClick={() => onPick(func, angle)}>
            {isSel && func !== 'tan' && (
              <>
                <line x1={px} y1={py} x2={px} y2={cy} stroke={color} strokeDasharray="3 2" strokeWidth="1.2" opacity="0.55" />
                <line x1={px} y1={py} x2={cx} y2={py} stroke={color} strokeDasharray="3 2" strokeWidth="1.2" opacity="0.55" />
              </>
            )}
            {isSel && <line x1={cx} y1={cy} x2={px} y2={py} stroke={color} strokeWidth="2.2" />}
            <circle cx={px} cy={py} r={isSel ? 6 : 3.4} fill={isSel ? color : '#c4b5fd'} stroke="#fff" strokeWidth={isSel ? 1.6 : 0} />
            {/* Generous invisible hit-target — the visible dot is small */}
            <circle cx={px} cy={py} r="11" fill="transparent" />
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r="2.4" fill="#1e1b4b" />
    </svg>
  );
};

const TrigBoundaryTableInteractive = () => {
  const [sel, setSel] = useState(null); // { func, angle }

  const handlePick = (func, angle) => setSel({ func, angle });

  const calcPanel = () => {
    if (!sel) {
      return (
        <div
          key="placeholder"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
            background: '#faf5ff', border: '1.5px dashed #ddd6fe', borderRadius: 14,
            padding: '16px', width: '100%', height: '100%', boxSizing: 'border-box',
            fontSize: '0.85rem', fontWeight: 600, color: '#a78bfa', lineHeight: 1.5,
          }}
        >
          Tap a point on a circle, or a blank in the table, to reveal it
        </div>
      );
    }
    const { func, angle } = sel;
    const [x, y] = TRIG_BOUNDARY_COORDS[angle];
    const color = TRIG_BOUNDARY_COLORS[func];
    const num = func === 'sin' ? y : func === 'cos' ? x : y;
    const den = func === 'tan' ? x : 1;
    const result = TRIG_BOUNDARY_VALUES[func][angle];
    const isUndefined = result === null;
    const stepLabel = { fontSize: '0.72rem', fontWeight: 700, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.03em' };
    return (
      <motion.div
        key={`${func}-${angle}`}
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22 }}
        style={{
          display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: 10,
          background: '#faf5ff', border: `1.5px solid ${color}33`, borderRadius: 14,
          padding: '16px 18px', width: '100%', height: '100%', boxSizing: 'border-box', fontFamily: FONT,
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={stepLabel}>Formula</div>
          <MathView content={`$${TRIG_BOUNDARY_FORMULA[func]}$`} style={{ fontSize: '1.05rem', fontWeight: 800, color }} />
        </div>

        <div style={{ textAlign: 'center', fontSize: '0.8rem', fontWeight: 700, color: '#64748b' }}>
          {`θ = ${angle}°  →  (x, y) = (${x}, ${y}),  r = 1`}
        </div>

        <div style={{ height: 1, background: '#ece9fb', margin: '2px 0' }} />

        <div style={{ textAlign: 'center' }}>
          <div style={stepLabel}>Substitute</div>
          <MathView
            content={`$$\\${func} ${angle}° = \\dfrac{${num}}{${den}}$$`}
            style={{ fontSize: '1.05rem', fontWeight: 800, color: '#1e1b4b' }}
          />
        </div>

        {isUndefined ? (
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            background: '#fee2e2', color: '#b91c1c', borderRadius: 10, padding: '7px 10px',
            fontWeight: 800, fontSize: '0.86rem', textAlign: 'center',
          }}>
            undefined — can't divide by 0
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div style={stepLabel}>Result</div>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color }}>{result}</div>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, fontFamily: FONT }}>
      {/* Calc panel sits to the LEFT of the circles, fixed-size, so revealing
          a value never shifts the graphs or the table below. */}
      <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ width: 250, minHeight: 260 }}>
          <AnimatePresence mode="wait">{calcPanel()}</AnimatePresence>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center' }}>
          {['sin', 'cos', 'tan'].map((func) => (
            <div key={func} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 64, textAlign: 'right' }}>
                <MathView content={`$\\${func}\\,\\theta$`} style={{ fontSize: '0.95rem', fontWeight: 800, color: TRIG_BOUNDARY_COLORS[func] }} />
              </div>
              <TrigBoundaryMiniCircle
                func={func}
                selectedAngle={sel?.func === func ? sel.angle : null}
                onPick={handlePick}
              />
            </div>
          ))}
        </div>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ borderCollapse: 'separate', borderSpacing: 0, borderRadius: '14px', overflow: 'hidden', boxShadow: '0 6px 20px rgba(124,58,237,0.08)' }}>
          <tbody>
            <tr>
              <td style={{ padding: '9px 16px', background: 'linear-gradient(135deg,#a78bfa,#7c3aed)', textAlign: 'center' }}>
                <MathView content="$\\theta$" style={{ fontSize: '1rem', fontWeight: 800, color: '#fff' }} />
              </td>
              {TRIG_BOUNDARY_ANGLES.map((angle) => (
                <td key={angle} style={{ padding: '9px 16px', textAlign: 'center', background: 'linear-gradient(135deg,#a78bfa,#7c3aed)', borderLeft: '1px solid rgba(255,255,255,0.25)' }}>
                  <span style={{ fontSize: '1rem', fontWeight: 800, color: '#fff' }}>{angle}°</span>
                </td>
              ))}
            </tr>
            {['sin', 'cos', 'tan'].map((func) => (
              <tr key={func}>
                <td style={{ padding: '9px 16px', textAlign: 'center', background: '#f5f3ff', borderTop: '1px solid #ece9fb' }}>
                  <MathView content={`$\\${func}\\,\\theta$`} style={{ fontSize: '1rem', fontWeight: 800, color: '#1e1b4b' }} />
                </td>
                {TRIG_BOUNDARY_ANGLES.map((angle) => {
                  const isSel = sel?.func === func && sel?.angle === angle;
                  const revealed = isSel;
                  const val = TRIG_BOUNDARY_VALUES[func][angle];
                  const display = val === null ? 'undefined' : val;
                  return (
                    <td
                      key={angle}
                      onClick={() => handlePick(func, angle)}
                      style={{
                        padding: '9px 16px', textAlign: 'center', cursor: 'pointer', minWidth: 44,
                        borderTop: '1px solid #ece9fb', borderLeft: '1px solid #ece9fb',
                        background: isSel ? `${TRIG_BOUNDARY_COLORS[func]}14` : '#fff',
                        transition: 'background 0.2s',
                      }}
                    >
                      {revealed ? (
                        <span style={{ fontSize: '0.95rem', fontWeight: 800, color: TRIG_BOUNDARY_COLORS[func] }}>{display}</span>
                      ) : (
                        <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#c4b5fd' }}>?</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ── Reciprocal breakdown demo (cot θ = 1/tan θ at boundary angles) ────────────
// Toggle between θ = 0° and θ = 90°. Two cards — tan θ on the left, cot θ on
// the right — connected by a "×1/x" reciprocal arrow. Whichever one hits 0
// stays green; the one on the other side of the reciprocal animates into a
// red "undefined" badge, making the break visible rather than just stated.
const RECIP_BREAKDOWN_DATA = {
  0: { tanUndefined: false, tanVal: '0', cotUndefined: true, cotVal: null },
  90: { tanUndefined: true, tanVal: null, cotUndefined: false, cotVal: '0' },
};

const RecipValueBox = ({ label, isUndefined, value, boxKey }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={boxKey}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        minWidth: 108, padding: '14px 12px', borderRadius: 14,
        background: isUndefined ? '#fee2e2' : '#ecfdf5',
        border: `1.5px solid ${isUndefined ? '#fecaca' : '#a7f3d0'}`,
      }}
    >
      <MathView content={`$${label}$`} style={{ fontSize: '1rem', fontWeight: 800, color: isUndefined ? '#b91c1c' : '#047857' }} />
      {isUndefined ? (
        <motion.div
          initial={{ scale: 0.6, rotate: -6 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 340, damping: 16, delay: 0.1 }}
          style={{ fontSize: '0.82rem', fontWeight: 800, color: '#b91c1c', textAlign: 'center' }}
        >
          undefined
        </motion.div>
      ) : (
        <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#047857' }}>{value}</div>
      )}
    </motion.div>
  </AnimatePresence>
);

const ReciprocalBreakdownDemo = () => {
  const [angle, setAngle] = useState(0);
  const data = RECIP_BREAKDOWN_DATA[angle];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, fontFamily: FONT }}>
      <div style={{ display: 'flex', gap: 8 }}>
        {[0, 90].map((a) => (
          <button
            key={a}
            onClick={() => setAngle(a)}
            style={{
              padding: '6px 20px', borderRadius: 999, cursor: 'pointer', fontFamily: FONT,
              border: `1.5px solid ${angle === a ? '#7c3aed' : '#e2e8f0'}`,
              background: angle === a ? '#7c3aed' : '#fff',
              color: angle === a ? '#fff' : '#475569',
              fontWeight: 800, fontSize: '0.85rem',
            }}
          >
            θ = {a}°
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <RecipValueBox label="\\tan\\theta" isUndefined={data.tanUndefined} value={data.tanVal} boxKey={`tan-${angle}`} />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <ArrowRight size={20} color="#a78bfa" />
          <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#a78bfa', whiteSpace: 'nowrap' }}>reciprocal</span>
          <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#a78bfa' }}>(1/x)</span>
        </div>

        <RecipValueBox label="\\cot\\theta" isUndefined={data.cotUndefined} value={data.cotVal} boxKey={`cot-${angle}`} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`eq-${angle}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <MathView
            content={data.tanUndefined
              ? `$$\\cot ${angle}° = \\dfrac{1}{\\text{undefined}} = 0$$`
              : `$$\\cot ${angle}° = \\dfrac{1}{0} \\;\\rightarrow\\; \\text{undefined}$$`}
            style={{ fontSize: '1rem', fontWeight: 800, color: '#1e1b4b' }}
          />
        </motion.div>
      </AnimatePresence>

      <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 700, color: '#64748b' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Ban size={14} color="#94a3b8" /> Zero has no reciprocal</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Ban size={14} color="#94a3b8" /> Infinity isn't a number</span>
      </div>
    </div>
  );
};

// ── Domain breakdown demo (which functions break, and where) ─────────────────
// One unit circle plus three selector pills — sin/cos (always defined),
// tan/sec (undefined where x = 0), cot/cosec (undefined where y = 0). Picking
// a pill highlights the matching axis on the circle and marks the two
// boundary points on it with an animated ✕, tying "undefined wherever x = 0"
// to an actual axis rather than leaving it as a sentence to memorise.
const DOMAIN_GROUPS = [
  { key: 'always', label: 'sin θ, cos θ', color: '#059669', axis: null, angles: [], desc: 'Defined for every angle — no restrictions.' },
  { key: 'xzero', label: 'tan θ, sec θ', color: '#dc2626', axis: 'y', angles: [90, 270], desc: 'Undefined wherever x = 0.' },
  { key: 'yzero', label: 'cot θ, cosec θ', color: '#ea580c', axis: 'x', angles: [0, 180], desc: 'Undefined wherever y = 0.' },
];

const DomainMiniCircle = ({ group, size = 156 }) => {
  const cx = size / 2, cy = size / 2, r = size * 0.32;
  return (
    <svg width={size} height={size} style={{ display: 'block', overflow: 'visible' }}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#ddd6fe" strokeWidth="1.6" />
      <line x1={cx - r - 18} y1={cy} x2={cx + r + 18} y2={cy} stroke="#cbd5e1" strokeWidth="1.2" />
      <line x1={cx} y1={cy - r - 18} x2={cx} y2={cy + r + 18} stroke="#cbd5e1" strokeWidth="1.2" />
      <AnimatePresence>
        {group.axis === 'y' && (
          <motion.line
            key="hl-y" x1={cx} y1={cy - r - 18} x2={cx} y2={cy + r + 18}
            stroke={group.color} strokeWidth="3.2" strokeLinecap="round"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }}
          />
        )}
        {group.axis === 'x' && (
          <motion.line
            key="hl-x" x1={cx - r - 18} y1={cy} x2={cx + r + 18} y2={cy}
            stroke={group.color} strokeWidth="3.2" strokeLinecap="round"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }}
          />
        )}
      </AnimatePresence>
      {TRIG_BOUNDARY_ANGLES.map((angle) => {
        const [ux, uy] = TRIG_BOUNDARY_COORDS[angle];
        const px = cx + ux * r, py = cy - uy * r;
        const isForbidden = group.angles.includes(angle);
        const labelX = angle === 0 ? px + 16 : angle === 180 ? px - 16 : px;
        const labelY = angle === 90 ? py - 12 : angle === 270 ? py + 16 : py + 4;
        return (
          <g key={angle}>
            {isForbidden ? (
              <motion.g
                key={`x-${group.key}-${angle}`}
                initial={{ scale: 0, rotate: -10 }} animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 340, damping: 16, delay: 0.08 }}
              >
                <line x1={px - 6} y1={py - 6} x2={px + 6} y2={py + 6} stroke={group.color} strokeWidth="2.6" strokeLinecap="round" />
                <line x1={px - 6} y1={py + 6} x2={px + 6} y2={py - 6} stroke={group.color} strokeWidth="2.6" strokeLinecap="round" />
              </motion.g>
            ) : (
              <circle cx={px} cy={py} r="4" fill="#a7f3d0" stroke="#059669" strokeWidth="1.4" />
            )}
            <text x={labelX} y={labelY} fontSize="10.5" fontWeight="700" fill="#94a3b8" textAnchor="middle">{angle}°</text>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r="2.4" fill="#1e1b4b" />
    </svg>
  );
};

const DomainBreakdownDemo = () => {
  const [key, setKey] = useState('always');
  const group = DOMAIN_GROUPS.find((g) => g.key === key);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, fontFamily: FONT }}>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
        {DOMAIN_GROUPS.map((g) => (
          <button
            key={g.key}
            onClick={() => setKey(g.key)}
            style={{
              padding: '6px 16px', borderRadius: 999, cursor: 'pointer', fontFamily: FONT,
              border: `1.5px solid ${key === g.key ? g.color : '#e2e8f0'}`,
              background: key === g.key ? g.color : '#fff',
              color: key === g.key ? '#fff' : '#475569',
              fontWeight: 800, fontSize: '0.8rem',
            }}
          >
            {g.label}
          </button>
        ))}
      </div>

      <DomainMiniCircle group={group} />

      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
        >
          <div style={{ fontSize: '0.92rem', fontWeight: 800, color: group.color, textAlign: 'center' }}>{group.desc}</div>
          {group.angles.length > 0 && (
            <MathView
              content={`$$\\theta \\neq \\ldots, ${group.angles.map((a) => `${a}°`).join(', ')}, \\ldots$$`}
              style={{ fontSize: '1rem', fontWeight: 800, color: '#1e1b4b' }}
            />
          )}
        </motion.div>
      </AnimatePresence>

      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, color: '#64748b' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#a7f3d0', border: '1.5px solid #059669', display: 'inline-block' }} />
          defined here
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <X size={12} color={group.color} /> undefined here
        </span>
      </div>
    </div>
  );
};

// ── Whole-lesson recap (tabbed) ────────────────────────────────────────────
// The final step ties together every idea in the lesson: the (x, y, r)
// definitions, the period of each wave, and where each function breaks down.
// Rather than one dense static line, three tabs each carry one small
// animated visual — the circle from earlier (live-draggable), and two new
// mini wave graphs whose curves draw themselves in on first view.
const buildMiniWavePath = (fn, xMin, xMax, yMin, yMax, sx, sy, step = 0.5) => {
  let d = ''; let pen = false;
  for (let x = xMin; x <= xMax + 1e-9; x += step) {
    let y; try { y = fn(x); } catch { y = NaN; }
    if (!isFinite(y) || y < yMin - 0.4 || y > yMax + 0.4) { pen = false; continue; }
    const X = sx(x), Y = sy(y);
    d += (pen ? ` L${X.toFixed(1)} ${Y.toFixed(1)}` : ` M${X.toFixed(1)} ${Y.toFixed(1)}`);
    pen = true;
  }
  return d.trim();
};

const SinCosMiniGraph = () => {
  const w = 280, h = 90, xMin = 0, xMax = 720, yMin = -1.3, yMax = 1.3;
  const sx = (x) => (x - xMin) / (xMax - xMin) * w;
  const sy = (y) => h - (y - yMin) / (yMax - yMin) * h;
  const toRad = (d) => (d * Math.PI) / 180;
  const sinPath = buildMiniWavePath((x) => Math.sin(toRad(x)), xMin, xMax, yMin, yMax, sx, sy, 2);
  const cosPath = buildMiniWavePath((x) => Math.cos(toRad(x)), xMin, xMax, yMin, yMax, sx, sy, 2);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748b' }}>sin θ, cos θ — period 360°, amplitude 1</div>
      <svg width={w} height={h} style={{ overflow: 'visible' }}>
        <line x1={0} y1={sy(0)} x2={w} y2={sy(0)} stroke="#e2e8f0" strokeWidth="1" />
        {[0, 360, 720].map((x) => (
          <line key={x} x1={sx(x)} y1={0} x2={sx(x)} y2={h} stroke="#ddd6fe" strokeWidth="1" strokeDasharray="3 3" />
        ))}
        <motion.path d={sinPath} fill="none" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.3, ease: 'easeInOut' }} />
        <motion.path d={cosPath} fill="none" stroke="#059669" strokeWidth="2.2" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.3, ease: 'easeInOut', delay: 0.15 }} />
      </svg>
      <div style={{ display: 'flex', gap: 16, fontSize: '0.74rem', fontWeight: 700 }}>
        <span style={{ color: '#7c3aed' }}>— sin θ</span>
        <span style={{ color: '#059669' }}>— cos θ</span>
      </div>
    </div>
  );
};

const TanMiniGraph = () => {
  const w = 280, h = 90, xMin = -90, xMax = 270, yMin = -3, yMax = 3;
  const sx = (x) => (x - xMin) / (xMax - xMin) * w;
  const sy = (y) => h - (y - yMin) / (yMax - yMin) * h;
  const toRad = (d) => (d * Math.PI) / 180;
  const tanPath = buildMiniWavePath((x) => Math.tan(toRad(x)), xMin, xMax, yMin, yMax, sx, sy, 0.5);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748b' }}>tan θ — period 180°</div>
      <svg width={w} height={h} style={{ overflow: 'visible' }}>
        <line x1={0} y1={sy(0)} x2={w} y2={sy(0)} stroke="#e2e8f0" strokeWidth="1" />
        {[-90, 90, 270].map((x) => (
          <line key={x} x1={sx(x)} y1={0} x2={sx(x)} y2={h} stroke="#fecaca" strokeWidth="1.4" strokeDasharray="3 3" />
        ))}
        <motion.path d={tanPath} fill="none" stroke="#dc2626" strokeWidth="2.2" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.1, ease: 'easeInOut' }} />
      </svg>
      <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#dc2626' }}>dashed lines = undefined (asymptotes)</div>
    </div>
  );
};

const RECAP_TABS = [
  { key: 'definitions', label: 'Definitions' },
  { key: 'periods', label: 'Periods' },
  { key: 'domains', label: 'Domains' },
];

const GeneralAngleRecap = () => {
  const [tab, setTab] = useState('definitions');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, fontFamily: FONT }}>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
        {RECAP_TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            style={{
              padding: '6px 18px', borderRadius: 999, cursor: 'pointer', fontFamily: FONT,
              border: `1.5px solid ${tab === t.key ? '#7c3aed' : '#e2e8f0'}`,
              background: tab === t.key ? '#7c3aed' : '#fff',
              color: tab === t.key ? '#fff' : '#475569',
              fontWeight: 800, fontSize: '0.82rem',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
        >
          {tab === 'definitions' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <AngleCircle width={190} height={190} r={62} initialDeg={40} showRatios quickAngles={[0, 90, 180, 270, 360]} />
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#a78bfa' }}>drag the slider or tap a quick angle</div>
            </div>
          )}
          {tab === 'periods' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center' }}>
              <SinCosMiniGraph />
              <TanMiniGraph />
            </div>
          )}
          {tab === 'domains' && <DomainBreakdownDemo />}
        </motion.div>
      </AnimatePresence>
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
// ── Ratio Unitary Chain ────────────────────────────────────────────────────
// Visual unitary method:
//   Phase 1 – bar split into (a+b) equal cells, each showing "?"
//   Phase 2 – divide equation appears, then each cell fills with onePart value
//   Phase 3 – target cells glow, answer equation pops in
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
    : knownSide === 'a' ? knownValue / ratioA : knownValue / ratioB;

  const ansA = ratioA * onePart;
  const ansB = ratioB * onePart;
  const ansTotal = totalParts * onePart;

  // which cells to highlight for the answer
  const highlightStart = findSide === 'b' ? ratioA : 0;
  const highlightCount = findSide === 'a' ? ratioA : findSide === 'b' ? ratioB : totalParts;
  const highlightColor = findSide === 'a' ? colorA : findSide === 'b' ? colorB : '#f59e0b';
  const answerValue = findSide === 'a' ? ansA : findSide === 'b' ? ansB : ansTotal;
  const answerLabel = findSide === 'a' ? labelA : findSide === 'b' ? labelB : 'Total';
  const answerParts = findSide === 'a' ? ratioA : findSide === 'b' ? ratioB : totalParts;

  // known cell range (for highlighting what we already know)
  const knownStart = knownSide === 'b' ? ratioA : 0;
  const knownCount = knownSide === 'a' ? ratioA : knownSide === 'b' ? ratioB : totalParts;

  const CELL_H = 54;

  // phase timings
  const T_BAR   = 0.1;   // bar + cells appear
  const T_DIV   = 1.0;   // divide equation
  const T_FILL  = 1.8;   // cells fill in
  const T_GLOW  = 2.8;   // target cells glow
  const T_ANS   = 3.4;   // answer equation

  const knownEquation = knownSide === 'total'
    ? `${knownValue} ÷ ${totalParts} = ${onePart}`
    : knownSide === 'a'
      ? `${knownValue} ÷ ${ratioA} = ${onePart}`
      : `${knownValue} ÷ ${ratioB} = ${onePart}`;

  const knownLabel = knownSide === 'total'
    ? `Total ${knownValue} ÷ ${totalParts} parts`
    : knownSide === 'a'
      ? `${labelA}: ${ratioA} parts = ${knownValue}`
      : `${labelB}: ${ratioB} parts = ${knownValue}`;

  return (
    <div style={{ fontFamily: FONT, display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center', width: '100%' }}>

      {/* ── Bar: split into equal cells ── */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: T_BAR }}
        style={{ width: '100%' }}>

        {/* label row above */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 800, color: colorA }}>{labelA} ({ratioA} parts)</span>
          <span style={{ fontSize: '0.78rem', fontWeight: 800, color: colorB }}>{labelB} ({ratioB} parts)</span>
        </div>

        {/* cells */}
        <div style={{ display: 'flex', gap: 3, width: '100%' }}>
          {Array.from({ length: totalParts }, (_, i) => {
            const isA = i < ratioA;
            const cellColor = isA ? colorA : colorB;
            const isKnown = i >= knownStart && i < knownStart + knownCount && knownSide !== 'total';
            return (
              <motion.div key={i}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ delay: T_BAR + 0.15 + i * 0.07, type: 'spring', stiffness: 380, damping: 22 }}
                style={{
                  flex: 1, height: CELL_H, borderRadius: 10, position: 'relative', overflow: 'hidden',
                  background: isKnown ? cellColor : `${cellColor}55`,
                  border: `2px solid ${cellColor}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                {/* "?" placeholder */}
                <motion.span
                  initial={{ opacity: 1 }} animate={{ opacity: 0 }}
                  transition={{ delay: T_FILL + i * 0.08, duration: 0.15 }}
                  style={{ position: 'absolute', fontSize: '1.1rem', fontWeight: 900, color: cellColor }}>?</motion.span>
                {/* filled value */}
                <motion.span
                  initial={{ opacity: 0, scale: 0.4 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: T_FILL + i * 0.08, type: 'spring', stiffness: 500, damping: 18 }}
                  style={{ position: 'absolute', fontSize: '1.05rem', fontWeight: 900, color: '#fff' }}>
                  {onePart}
                </motion.span>
                {/* glow overlay for answer cells */}
                {i >= highlightStart && i < highlightStart + highlightCount && (
                  <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    transition={{ delay: T_GLOW + (i - highlightStart) * 0.08 }}
                    style={{ position: 'absolute', inset: 0, background: highlightColor, borderRadius: 8 }}>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.4 }} animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: T_GLOW + 0.1 + (i - highlightStart) * 0.08, type: 'spring', stiffness: 500 }}
                      style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.05rem', fontWeight: 900, color: '#fff' }}>
                      {onePart}
                    </motion.span>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* total known label */}
        {knownSide === 'total' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: T_BAR + 0.5 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginTop: 8 }}>
            <div style={{ flex: 1, height: 1.5, background: '#c4b5fd' }} />
            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#7c3aed', whiteSpace: 'nowrap' }}>Total = {knownValue}</span>
            <div style={{ flex: 1, height: 1.5, background: '#c4b5fd' }} />
          </motion.div>
        )}
      </motion.div>

      {/* ── Step 2: divide equation ── */}
      <motion.div
        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: T_DIV, type: 'spring', stiffness: 260, damping: 24 }}
        style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#f5f3ff', border: '1.5px solid #c4b5fd', borderRadius: 16, padding: '12px 22px' }}>
        <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#6b7280' }}>{knownLabel}</div>
        <div style={{ width: 1.5, height: 28, background: '#ddd6fe' }} />
        <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#7c3aed' }}>1 part = {onePart}</div>
      </motion.div>

      {/* ── Step 3: answer equation ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: T_ANS, type: 'spring', stiffness: 300, damping: 20 }}
        style={{
          display: 'flex', alignItems: 'center', gap: 14,
          background: `linear-gradient(135deg, ${highlightColor}18, ${highlightColor}30)`,
          border: `2px solid ${highlightColor}66`,
          borderRadius: 20, padding: '14px 24px',
          boxShadow: `0 8px 28px ${highlightColor}25`,
        }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#9ca3af' }}>{answerLabel}</span>
          <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#6b7280' }}>{answerParts} × {onePart}</span>
        </div>
        <div style={{ fontSize: '1.5rem', color: '#d1d5db' }}>=</div>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ delay: T_ANS + 0.3, duration: 0.4 }}
          style={{ fontSize: '2.2rem', fontWeight: 900, color: highlightColor, lineHeight: 1 }}>
          {answerValue}
        </motion.div>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ delay: T_ANS + 0.5, type: 'spring', stiffness: 400 }}
          style={{ fontSize: '0.8rem', fontWeight: 900, color: '#fff', background: highlightColor, borderRadius: 20, padding: '4px 12px' }}>
          ✓ answer
        </motion.div>
      </motion.div>
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

// ── Checkpoint quiz ──────────────────────────────────────────────────────────
// A generic multiple-choice "quick check" — students tap an option, get instant
// colour feedback + a short explanation, and can retry. Option/prompt text may
// contain inline `$…$` math (rendered via MathView). Reusable across any lesson.
const Checkpoint = ({ prompt, options = [], explanation = '' }) => {
  const [selected, setSelected] = useState(null);
  const isCorrect = selected != null && !!options[selected]?.correct;
  return (
    <div style={{ fontFamily: FONT, width: '100%', maxWidth: 560, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <span style={{ fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#7c3aed', background: '#f5f3ff', padding: '4px 12px', borderRadius: 999 }}>
          Quick check
        </span>
      </div>
      <MathView content={prompt} style={{ fontSize: '1.02rem', fontWeight: 700, color: '#1e1b4b', textAlign: 'center' }} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
        {options.map((opt, i) => {
          const chosen = selected === i;
          const revealCorrect = selected != null && !chosen && opt.correct;
          const bg = chosen ? (opt.correct ? '#dcfce7' : '#fee2e2') : revealCorrect ? '#f0fdf4' : '#f8fafc';
          const border = chosen ? (opt.correct ? '#22c55e' : '#ef4444') : revealCorrect ? '#86efac' : '#e2e8f0';
          const color = chosen ? (opt.correct ? '#15803d' : '#b91c1c') : '#1e293b';
          return (
            <motion.button key={i} whileTap={{ scale: 0.94 }} onClick={() => setSelected(i)}
              style={{ padding: '10px 18px', borderRadius: 14, border: `2px solid ${border}`, background: bg, color, fontWeight: 800, cursor: 'pointer', fontFamily: FONT, fontSize: '0.9rem' }}>
              <MathView content={opt.text} style={{ fontSize: '0.9rem', fontWeight: 800, color: 'inherit' }} />
            </motion.button>
          );
        })}
      </div>
      <AnimatePresence>
        {selected != null && (
          <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            style={{ textAlign: 'center', fontSize: '0.85rem', fontWeight: 700, color: isCorrect ? '#15803d' : '#b45309' }}>
            {isCorrect ? '✓ Correct! ' : '✗ Not quite — try another option. '}{explanation}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ── Elevation / depression diagram ──────────────────────────────────────────
// Click-toggle between the two matching textbook diagrams: an observer sighting
// UP to an object above the horizontal (elevation) vs sighting DOWN from a
// height to an object below it (depression). Same shape, mirrored, so the
// toggle visibly shows how the horizontal line is what both angles are
// measured from.
const ElevationDepressionDiagram = ({ width = 420, height = 260 }) => {
  const [mode, setMode] = useState('elevation');
  const isElev = mode === 'elevation';
  const angleDeg = isElev ? 38 : 32;
  const sign = isElev ? -1 : 1;
  const toRad = (d) => (d * Math.PI) / 180;
  // Elevation: observer bottom-left, horizontal line right, sight line up-right to object.
  // Depression: observer top-left (on a height), horizontal line right, sight line down-right to object.
  const obs = isElev ? [70, height - 60] : [70, 60];
  // The object sits at the END of a line drawn AT angleDeg — it used to be
  // placed at independent fixed coordinates (width-70, 60/height-60), which
  // actually drew a ~28° line while the arc and label still claimed 38°/32°.
  // That mismatch is what put the arc off the real line and the label off
  // the arc. Building the object's position from angleDeg makes that
  // mismatch impossible.
  const sightLen = 200;
  const obj = [obs[0] + sightLen * Math.cos(toRad(angleDeg)), obs[1] + sign * sightLen * Math.sin(toRad(angleDeg))];
  const horizEnd = [width - 40, obs[1]];
  const arcR = 34;
  const arcEnd = [obs[0] + arcR * Math.cos(toRad(angleDeg)), obs[1] + sign * arcR * Math.sin(toRad(angleDeg))];
  const largeArc = 0, sweep = isElev ? 0 : 1;
  // Degree label sits on the arc's own bisector, just outside its radius —
  // beside the arc, not off toward the sight line.
  const labelR = arcR + 15;
  const labelPos = [obs[0] + labelR * Math.cos(toRad(angleDeg / 2)), obs[1] + sign * labelR * Math.sin(toRad(angleDeg / 2))];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, fontFamily: FONT }}>
      <div style={{ display: 'flex', gap: 8 }}>
        {['elevation', 'depression'].map((m) => (
          <button key={m} onClick={() => setMode(m)}
            style={{ padding: '6px 16px', borderRadius: 999, border: '2px solid #7c3aed', background: mode === m ? '#7c3aed' : '#fff', color: mode === m ? '#fff' : '#7c3aed', fontWeight: 800, cursor: 'pointer', fontFamily: FONT, fontSize: '0.8rem', textTransform: 'capitalize' }}>
            angle of {m}
          </button>
        ))}
      </div>
      <svg width={width} height={height} style={{ display: 'block', overflow: 'visible' }}>
        <motion.line x1={obs[0]} y1={obs[1]} x2={horizEnd[0]} y2={horizEnd[1]} stroke="#94a3b8" strokeWidth="1.6" strokeDasharray="5 4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} />
        <motion.line key={mode + '-sight'} x1={obs[0]} y1={obs[1]} x2={obj[0]} y2={obj[1]} stroke="#7c3aed" strokeWidth="2.4"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }} />
        <path d={`M ${obs[0] + arcR} ${obs[1]} A ${arcR} ${arcR} 0 ${largeArc} ${sweep} ${arcEnd[0]} ${arcEnd[1]}`} fill="none" stroke="#f59e0b" strokeWidth="2" />
        <text x={labelPos[0]} y={labelPos[1]} textAnchor="middle" dominantBaseline="middle" fontSize="13" fontWeight="800" fill="#b45309" style={{ paintOrder: 'stroke', stroke: '#fff', strokeWidth: 4 }}>{angleDeg}°</text>
        <circle cx={obs[0]} cy={obs[1]} r="5" fill="#1e1b4b" />
        <circle cx={obj[0]} cy={obj[1]} r="5" fill="#7c3aed" />
        <text x={obs[0]} y={obs[1] + (isElev ? 22 : -12)} textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#1e293b">Observer</text>
        <text x={obj[0]} y={obj[1] + (isElev ? -12 : 22)} textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#1e293b">{isElev ? 'Sun' : 'Boat'}</text>
      </svg>
      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569', textAlign: 'center', maxWidth: 340 }}>
        {isElev
          ? 'The angle of elevation is measured UP from the horizontal to an object above it.'
          : 'The angle of depression is measured DOWN from the horizontal to an object below it.'}
      </div>
    </div>
  );
};

// ── Compass bearing diagram ─────────────────────────────────────────────────
// A compass rose with one or more rays; click-toggle relabels every ray between
// compass notation (e.g. "S45°W") and true-bearing notation (e.g. "225°T") —
// same physical direction, two ways of writing it.
const CompassBearingDiagram = ({ rays = [], width = 300, height = 300 }) => {
  const [mode, setMode] = useState('compass');
  const cx = width / 2, cy = height / 2, R = Math.min(width, height) / 2 - 46;
  const toXY = (deg) => {
    const rad = (deg * Math.PI) / 180;
    return [cx + R * Math.sin(rad), cy - R * Math.cos(rad)];
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, fontFamily: FONT }}>
      <div style={{ display: 'flex', gap: 8 }}>
        {[['compass', 'Compass bearing'], ['true', 'True bearing']].map(([m, l]) => (
          <button key={m} onClick={() => setMode(m)}
            style={{ padding: '6px 14px', borderRadius: 999, border: '2px solid #7c3aed', background: mode === m ? '#7c3aed' : '#fff', color: mode === m ? '#fff' : '#7c3aed', fontWeight: 800, cursor: 'pointer', fontFamily: FONT, fontSize: '0.76rem' }}>
            {l}
          </button>
        ))}
      </div>
      <svg width={width} height={height} style={{ display: 'block' }}>
        <line x1={cx} y1={16} x2={cx} y2={height - 16} stroke="#cbd5e1" strokeWidth="1.4" strokeDasharray="4 4" />
        <line x1={16} y1={cy} x2={width - 16} y2={cy} stroke="#cbd5e1" strokeWidth="1.4" strokeDasharray="4 4" />
        <text x={cx} y={13} textAnchor="middle" fontSize="13" fontWeight="800" fill="#475569">N</text>
        <text x={cx} y={height - 4} textAnchor="middle" fontSize="13" fontWeight="800" fill="#475569">S</text>
        <text x={width - 6} y={cy + 4} textAnchor="end" fontSize="13" fontWeight="800" fill="#475569">E</text>
        <text x={6} y={cy + 4} textAnchor="start" fontSize="13" fontWeight="800" fill="#475569">W</text>
        <circle cx={cx} cy={cy} r="4" fill="#1e1b4b" />
        {rays.map((r, i) => {
          const [x, y] = toXY(r.deg);
          const label = mode === 'compass' ? r.compassLabel : r.trueLabel;
          const col = r.color || '#7c3aed';
          return (
            <g key={i}>
              <motion.line x1={cx} y1={cy} x2={x} y2={y} stroke={col} strokeWidth="2.4"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.55, delay: 0.15 * i }} />
              <circle cx={x} cy={y} r="4" fill={col} />
              <motion.text key={mode + i} x={x + (x > cx ? 8 : -8)} y={y + (y > cy ? 15 : -8)} textAnchor={x > cx ? 'start' : 'end'}
                fontSize="12.5" fontWeight="800" fill={col} style={{ paintOrder: 'stroke', stroke: '#fff', strokeWidth: 4 }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}>{label}</motion.text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

// ── Lesson-opener scene: elevation/depression + a bearing, drawn not stated ──
// The opening step of the bearings/elevation lesson used to be two floating
// phrases with no picture at all — "elevation / depression" and "compass &
// true bearings" as pure text. This draws both ideas as one small animated
// scene instead: a cliff-top observer sighting a plane (elevation) and a boat
// (depression) from the SAME point — so the "measured from the horizontal"
// idea is visible on one shared horizon rather than two separate claims —
// plus a compass rose with one ray labelled both ways (N60°E = 060°T), tying
// the two notations together before the lesson explains either in detail.
// Elevation and depression are picked as explicit angles and the sight lines
// are BUILT from them (point = observer + length·(cos,sin)) — the reverse of
// deriving an angle from arbitrary coordinates, which once produced a real
// bug here: two placeholder points happened to be only 15° apart, so the
// angle arcs rendered as near-invisible slivers. Building forward from the
// angle guarantees a legible arc by construction.
const IntroTrigScene = ({ width = 640, height = 280 }) => {
  const obs = [90, height / 2];
  const amber = '#f59e0b';
  const purple = '#7c3aed';
  const sightLen = 210;
  const elevDeg = 30, depDeg = 24;
  const toRad = (d) => (d * Math.PI) / 180;
  const plane = [obs[0] + sightLen * Math.cos(toRad(elevDeg)), obs[1] - sightLen * Math.sin(toRad(elevDeg))];
  const boat = [obs[0] + sightLen * Math.cos(toRad(depDeg)), obs[1] + sightLen * Math.sin(toRad(depDeg))];
  const horizEndL = [obs[0] - 30, obs[1]];
  const horizEndR = [Math.max(plane[0], boat[0]) + 50, obs[1]];
  const arcR = 30;
  const elevArcEnd = [obs[0] + arcR * Math.cos(toRad(elevDeg)), obs[1] - arcR * Math.sin(toRad(elevDeg))];
  const depArcEnd = [obs[0] + arcR * Math.cos(toRad(depDeg)), obs[1] + arcR * Math.sin(toRad(depDeg))];
  // Degree labels sit on the arc's own bisector, just outside its radius —
  // beside the arc, not floating off toward the sight line. The "angle of
  // elevation/depression" captions sit further out along each sight line,
  // offset clear of the stroke, so neither label ever collides with the
  // Plane/Boat name at the line's end.
  const labelR = arcR + 16;
  const elevLabelPos = [obs[0] + labelR * Math.cos(toRad(elevDeg / 2)), obs[1] - labelR * Math.sin(toRad(elevDeg / 2))];
  const depLabelPos = [obs[0] + labelR * Math.cos(toRad(depDeg / 2)), obs[1] + labelR * Math.sin(toRad(depDeg / 2))];
  const capT = 0.42 * sightLen;
  const elevCapPos = [obs[0] + capT * Math.cos(toRad(elevDeg)), obs[1] - capT * Math.sin(toRad(elevDeg)) - 12];
  const depCapPos = [obs[0] + capT * Math.cos(toRad(depDeg)), obs[1] + capT * Math.sin(toRad(depDeg)) + 16];

  // Compass rose, right-hand third of the scene. Every label (N/S/E/W, plus
  // the bearing notation) is placed at a position that's within [0, width] x
  // [0, height] for ANY bearingDeg — the notation caption in particular sits
  // at a FIXED spot below the rose rather than "near the ray tip", which is
  // what let it drift off the right edge and get clipped by the svg's default
  // overflow:hidden when the ray happened to point up-and-out.
  const cx = width * 0.8, cy = height / 2, R = Math.min(width * 0.11, height / 2 - 50);
  const bearingDeg = 60; // N60°E
  const toXY = (deg) => { const r = toRad(deg); return [cx + R * Math.sin(r), cy - R * Math.cos(r)]; };
  const [rx, ry] = toXY(bearingDeg);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', fontFamily: FONT }}>
      <svg width={width} height={height} style={{ display: 'block', maxWidth: '100%', height: 'auto', overflow: 'visible' }} viewBox={`0 0 ${width} ${height}`}>
        {/* Horizon through the observer */}
        <motion.line x1={horizEndL[0]} y1={horizEndL[1]} x2={horizEndR[0]} y2={horizEndR[1]} stroke="#94a3b8" strokeWidth="1.6" strokeDasharray="5 4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} />

        {/* Sight line up to the plane (elevation) */}
        <motion.line x1={obs[0]} y1={obs[1]} x2={plane[0]} y2={plane[1]} stroke={purple} strokeWidth="2.4"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.3 }} />
        <motion.path d={`M ${obs[0] + arcR} ${obs[1]} A ${arcR} ${arcR} 0 0 0 ${elevArcEnd[0]} ${elevArcEnd[1]}`} fill="none" stroke={amber} strokeWidth="2"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.7 }} />
        <motion.text x={elevLabelPos[0]} y={elevLabelPos[1]} textAnchor="middle" dominantBaseline="middle" fontSize="12.5" fontWeight="800" fill="#b45309"
          style={{ paintOrder: 'stroke', stroke: '#fff', strokeWidth: 4 }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.85 }}>{elevDeg}°</motion.text>
        <motion.text x={elevCapPos[0]} y={elevCapPos[1]} textAnchor="middle" fontSize="11" fontWeight="700" fill="#475569" fontStyle="italic"
          style={{ paintOrder: 'stroke', stroke: '#fbfaff', strokeWidth: 4 }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 1 }}>angle of elevation</motion.text>
        <motion.text x={plane[0]} y={plane[1] - 12} textAnchor="middle" fontSize="12" fontWeight="700" fill="#1e293b"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.85 }}>Plane</motion.text>

        {/* Sight line down to the boat (depression) */}
        <motion.line x1={obs[0]} y1={obs[1]} x2={boat[0]} y2={boat[1]} stroke={purple} strokeWidth="2.4"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 1.1 }} />
        <motion.path d={`M ${obs[0] + arcR} ${obs[1]} A ${arcR} ${arcR} 0 0 1 ${depArcEnd[0]} ${depArcEnd[1]}`} fill="none" stroke={amber} strokeWidth="2"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 1.5 }} />
        <motion.text x={depLabelPos[0]} y={depLabelPos[1]} textAnchor="middle" dominantBaseline="middle" fontSize="12.5" fontWeight="800" fill="#b45309"
          style={{ paintOrder: 'stroke', stroke: '#fff', strokeWidth: 4 }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 1.65 }}>{depDeg}°</motion.text>
        <motion.text x={depCapPos[0]} y={depCapPos[1]} textAnchor="middle" fontSize="11" fontWeight="700" fill="#475569" fontStyle="italic"
          style={{ paintOrder: 'stroke', stroke: '#fbfaff', strokeWidth: 4 }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 1.8 }}>angle of depression</motion.text>
        <motion.text x={boat[0]} y={boat[1] + 18} textAnchor="middle" fontSize="12" fontWeight="700" fill="#1e293b"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 1.65 }}>Boat</motion.text>

        <circle cx={obs[0]} cy={obs[1]} r="5" fill="#1e1b4b" />
        <text x={obs[0]} y={obs[1] + 4} textAnchor="end" dx={-10} fontSize="12" fontWeight="700" fill="#1e293b">You</text>

        {/* Compass rose + one bearing, both notations at once */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 1.9 }}>
          <line x1={cx} y1={cy - R - 14} x2={cx} y2={cy + R + 14} stroke="#cbd5e1" strokeWidth="1.4" strokeDasharray="4 4" />
          <line x1={cx - R - 14} y1={cy} x2={cx + R + 14} y2={cy} stroke="#cbd5e1" strokeWidth="1.4" strokeDasharray="4 4" />
          <text x={cx} y={cy - R - 18} textAnchor="middle" fontSize="12" fontWeight="800" fill="#475569">N</text>
          <text x={cx} y={cy + R + 26} textAnchor="middle" fontSize="12" fontWeight="800" fill="#475569">S</text>
          <text x={cx + R + 20} y={cy + 4} textAnchor="middle" fontSize="12" fontWeight="800" fill="#475569">E</text>
          <text x={cx - R - 20} y={cy + 4} textAnchor="middle" fontSize="12" fontWeight="800" fill="#475569">W</text>
          <circle cx={cx} cy={cy} r="4" fill="#1e1b4b" />
        </motion.g>
        <motion.line x1={cx} y1={cy} x2={rx} y2={ry} stroke="#059669" strokeWidth="2.4"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.45, delay: 2.1 }} />
        <motion.text x={cx} y={cy + R + 46} textAnchor="middle" fontSize="12" fontWeight="800" fill="#059669"
          style={{ paintOrder: 'stroke', stroke: '#fff', strokeWidth: 4 }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 2.4 }}>N{bearingDeg}°E = 0{bearingDeg}°T</motion.text>
      </svg>
    </div>
  );
};

// ── Angle circle — the general-angle definition, live and draggable ────────
// A circle of radius r with a ray to P(x, y); students drag the slider (or tap
// a quick-angle chip) to sweep θ through any value, positive or negative, past
// 360° — and watch sin θ = y/r, cos θ = x/r, tan θ = y/x update live. This is
// the one diagram behind the whole "general angle" idea, made touchable.
const AngleCircle = ({
  width = 320, height = 320, r = 100, initialDeg = 40, quickAngles = [0, 30, 90, 180, 270, 360, -90], showRatios = true,
  sliderMin = -360, sliderMax = 720, coterminalWith = null,
}) => {
  const [deg, setDeg] = useState(initialDeg);
  const cx = width / 2, cy = height / 2;
  const rad = (deg * Math.PI) / 180;
  const x = r * Math.cos(rad), y = r * Math.sin(rad);
  const px = cx + x, py = cy - y;
  const arSteps = 28;
  const ar = r * 0.32;
  const arcPts = Array.from({ length: arSteps + 1 }, (_, i) => {
    const t = (deg * i) / arSteps;
    const tr = (t * Math.PI) / 180;
    return [cx + ar * Math.cos(tr), cy - ar * Math.sin(tr)];
  });
  const arcD = arcPts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ');
  const sinT = y / r, cosT = x / r, tanT = Math.abs(cosT) < 0.001 ? null : y / x;
  const transStyle = { transition: 'cx 0.35s ease, cy 0.35s ease, x2 0.35s ease, y2 0.35s ease' };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, fontFamily: FONT }}>
      {/* overflow:visible — the P(x, y) label now prints live numeric values
          (was a fixed 6-char "P(x, y)"), long enough in some quadrants to
          cross the svg's own edge, which defaults to clipping it. */}
      <svg width={width} height={height} style={{ display: 'block', overflow: 'visible' }}>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#ddd6fe" strokeWidth="1.6" />
        <line x1={cx - r - 20} y1={cy} x2={cx + r + 20} y2={cy} stroke="#94a3b8" strokeWidth="1.4" />
        <line x1={cx} y1={cy - r - 20} x2={cx} y2={cy + r + 20} stroke="#94a3b8" strokeWidth="1.4" />
        <text x={cx + r + 22} y={cy + 4} fontSize="12" fontStyle="italic" fill="#64748b">x</text>
        <text x={cx + 6} y={cy - r - 22} fontSize="12" fontStyle="italic" fill="#64748b">y</text>
        <line x1={px} y1={py} x2={px} y2={cy} stroke="#94a3b8" strokeDasharray="4 3" strokeWidth="1.3" style={transStyle} />
        <line x1={px} y1={py} x2={cx} y2={py} stroke="#94a3b8" strokeDasharray="4 3" strokeWidth="1.3" style={transStyle} />
        <path d={arcD} fill="none" stroke="#f59e0b" strokeWidth="2" />
        <line x1={cx} y1={cy} x2={px} y2={py} stroke="#7c3aed" strokeWidth="2.6" style={transStyle} />
        <circle cx={px} cy={py} r="6" fill="#7c3aed" stroke="#fff" strokeWidth="2" style={transStyle} />
        <circle cx={cx} cy={cy} r="3.5" fill="#1e1b4b" />
        <text x={cx - 14} y={cy + 16} fontSize="12" fontWeight="700" fill="#1e1b4b">O</text>
        {/* The two dashed guide segments ARE x and y — label each with its
            live value (not just the axis letter) so "x moves, y moves" is
            something read off the picture as θ changes, not taken on faith. */}
        <text x={(px + cx) / 2} y={py + (y >= 0 ? -8 : 18)} fontSize="11.5" fontWeight="700" fill="#64748b" textAnchor="middle"
          style={{ paintOrder: 'stroke', stroke: '#fbfaff', strokeWidth: 4, ...transStyle }}>x = {x.toFixed(1)}</text>
        <text x={px + (x >= 0 ? 8 : -8)} y={(py + cy) / 2} fontSize="11.5" fontWeight="700" fill="#64748b" textAnchor={x >= 0 ? 'start' : 'end'} dominantBaseline="middle"
          style={{ paintOrder: 'stroke', stroke: '#fbfaff', strokeWidth: 4, ...transStyle }}>y = {y.toFixed(1)}</text>
        <text x={px + (x >= 0 ? 10 : -74)} y={py + (y >= 0 ? -22 : 34)} fontSize="12.5" fontWeight="800" fill="#7c3aed"
          style={{ paintOrder: 'stroke', stroke: '#fff', strokeWidth: 4, ...transStyle }}>P({x.toFixed(1)}, {y.toFixed(1)})</text>
      </svg>
      <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#7c3aed' }}>θ = {Math.round(deg)}°</div>
      <input type="range" min={sliderMin} max={sliderMax} step={1} value={deg} onChange={(e) => setDeg(Number(e.target.value))}
        style={{ width: Math.min(280, width - 20), accentColor: '#7c3aed' }} />
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center', maxWidth: width }}>
        {quickAngles.map((a) => (
          <button key={a} onClick={() => setDeg(a)}
            style={{ padding: '4px 11px', borderRadius: 999, border: `1.5px solid ${deg === a ? '#7c3aed' : '#e2e8f0'}`, background: deg === a ? '#7c3aed' : '#fff', color: deg === a ? '#fff' : '#475569', fontWeight: 700, fontSize: '0.74rem', cursor: 'pointer', fontFamily: FONT }}>
            {a}°
          </button>
        ))}
      </div>
      {/* Co-terminal badge: same ray, different θ. Computed live from the
          current slider value (not just at the quick-angle presets), so
          dragging through it shows the ✓ turn on and off exactly at each
          multiple of 360° away from the base — the "same ray" claim caught
          in the act, not just demonstrated at three fixed stops. */}
      {coterminalWith != null && (() => {
        const turns = (deg - coterminalWith) / 360;
        const isCoterminal = Math.abs(turns - Math.round(turns)) < 0.02;
        const k = Math.round(turns);
        return (
          <div style={{
            fontSize: '0.82rem', fontWeight: 800, borderRadius: 10, padding: '5px 12px',
            color: isCoterminal ? '#15803d' : '#94a3b8', background: isCoterminal ? '#f0fdf4' : 'transparent',
            border: `1.5px solid ${isCoterminal ? '#bbf7d0' : 'transparent'}`, transition: 'color 0.2s ease, background 0.2s ease, border-color 0.2s ease',
          }}>
            {isCoterminal
              ? `✓ Same ray as ${coterminalWith}°  (${coterminalWith}° ${k >= 0 ? '+' : '−'} ${Math.abs(k)}×360°)`
              : `not on the ${coterminalWith}° ray`}
          </div>
        );
      })()}
      {showRatios && (
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center', fontSize: '0.86rem', fontWeight: 700, color: '#1e293b' }}>
          <span>sin θ = {sinT.toFixed(2)}</span>
          <span>cos θ = {cosT.toFixed(2)}</span>
          <span>tan θ = {tanT == null ? 'undefined' : tanT.toFixed(2)}</span>
        </div>
      )}
    </div>
  );
};

// ── Similar triangles demo ──────────────────────────────────────────────────
// A faint fixed "reference" right triangle plus a live one the student grows
// or shrinks with a slider — the shape (and every angle) never changes, only
// its size, making "similar = same angles, sides in ratio" a felt thing rather
// than a sentence. When showRatios is on, it also prints sin/cos/tan alongside
// the changing side lengths, so students can watch the ratio stay put while
// the sides themselves visibly grow.
const SimilarTrianglesDemo = ({ width = 420, height = 250, ratioMode = 'none' }) => {
  const [k, setK] = useState(1.6);
  const unit = 22;
  // R is the right-angle vertex AND the fixed anchor: both legs (R–T along
  // the adjacent direction, R–P along the opposite direction) hang off it, so
  // scaling k stretches both legs from the same fixed corner and the
  // hypotenuse T–P is what visibly grows. This is what makes R genuinely the
  // 90° vertex (previously the marker and the right angle disagreed).
  const ox = width - 100, oy = height - 40;
  const adj0 = 4, opp0 = 3, hyp0 = 5; // a 3-4-5 triangle for clean numbers
  const refT = [ox - adj0 * unit, oy];
  const refP = [ox, oy - opp0 * unit];
  const T = [ox - adj0 * unit * k, oy];
  const P = [ox, oy - opp0 * unit * k];
  const trans = { transition: 'cx 0.35s ease, cy 0.35s ease, x1 0.35s ease, y1 0.35s ease, x2 0.35s ease, y2 0.35s ease, x 0.35s ease, y 0.35s ease' };
  const sinT = opp0 / hyp0, cosT = adj0 / hyp0, tanT = opp0 / adj0; // constant — the whole point
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, fontFamily: FONT }}>
      <svg width={width} height={height} style={{ display: 'block' }}>
        <polygon points={`${ox},${oy} ${refT[0]},${refT[1]} ${refP[0]},${refP[1]}`} fill="rgba(124,58,237,0.06)" stroke="#c4b5fd" strokeWidth="1.6" strokeDasharray="5 4" />
        <text x={(ox + refT[0]) / 2} y={oy + 16} fontSize="10.5" fontWeight="700" fill="#a78bfa" textAnchor="middle">reference (k = 1)</text>
        <line x1={ox} y1={oy} x2={T[0]} y2={T[1]} stroke="#7c3aed" strokeWidth="2.6" style={trans} />
        <line x1={T[0]} y1={T[1]} x2={P[0]} y2={P[1]} stroke="#7c3aed" strokeWidth="2.6" style={trans} />
        <line x1={P[0]} y1={P[1]} x2={ox} y2={oy} stroke="#7c3aed" strokeWidth="2.6" style={trans} />
        <polyline points={`${ox - 10},${oy} ${ox - 10},${oy - 10} ${ox},${oy - 10}`} fill="none" stroke="#7c3aed" strokeWidth="1.6" />
        <circle cx={ox} cy={oy} r="4" fill="#7c3aed" style={trans} />
        <circle cx={T[0]} cy={T[1]} r="4" fill="#7c3aed" style={trans} />
        <circle cx={P[0]} cy={P[1]} r="4" fill="#7c3aed" style={trans} />
        <text x={T[0] - 6} y={T[1] + 20} fontSize="13" fontWeight="800" fill="#7c3aed" textAnchor="middle"
          style={{ paintOrder: 'stroke', stroke: '#fff', strokeWidth: 4, ...trans }}>θ</text>
        <text x={(ox + T[0]) / 2} y={oy + 32} fontSize="12" fontWeight="700" fill="#1e293b" textAnchor="middle" style={trans}>{`adj = ${(adj0 * k).toFixed(1)}`}</text>
        <text x={ox - 12} y={(oy + P[1]) / 2} fontSize="12" fontWeight="700" fill="#1e293b" textAnchor="end" style={trans}>{`opp = ${(opp0 * k).toFixed(1)}`}</text>
        <text x={(T[0] + P[0]) / 2 - 8} y={(T[1] + P[1]) / 2 - 6} fontSize="12" fontWeight="700" fill="#1e293b" textAnchor="end" style={trans}>{`hyp = ${(hyp0 * k).toFixed(1)}`}</text>
      </svg>
      <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#7c3aed' }}>scale factor k = {k.toFixed(1)}×</div>
      <input type="range" min={0.5} max={2.5} step={0.1} value={k} onChange={(e) => setK(Number(e.target.value))}
        style={{ width: Math.min(280, width - 20), accentColor: '#7c3aed' }} />
      {ratioMode === 'sides' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, fontSize: '0.86rem', fontWeight: 700, color: '#1e293b' }}>
          <span>{`adj/${adj0} = opp/${opp0} = hyp/${hyp0} = ${k.toFixed(1)}`}</span>
          <span style={{ color: '#059669' }}>every side scales by the same ratio, k</span>
        </div>
      )}
      {ratioMode === 'trig' && (
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center', fontSize: '0.86rem', fontWeight: 700, color: '#1e293b' }}>
          <span>sin θ = {sinT.toFixed(2)}</span>
          <span>cos θ = {cosT.toFixed(2)}</span>
          <span>tan θ = {tanT.toFixed(2)}</span>
          <span style={{ color: '#059669' }}>— unchanged as k varies!</span>
        </div>
      )}
    </div>
  );
};

// ── Reciprocal ratio highlighter ────────────────────────────────────────────
// One triangle, three tabs — cosec/sec/cot. Tapping a tab highlights the TWO
// sides that function actually uses in that function's own colour, greys out
// the unused third side, and shows the matching formula — so "hyp and opp"
// etc. is something students see change, not just read.
const ReciprocalRatioDemo = ({ width = 340, height = 260 }) => {
  const [fn, setFn] = useState('cosec');
  const pad = 46;
  const A = [pad, height - pad]; // θ vertex, bottom-left
  const B = [width - pad, height - pad]; // right-angle vertex, bottom-right
  const C = [width - pad, pad]; // top vertex
  const COLORS = { cosec: '#db2777', sec: '#0891b2', cot: '#ea580c' };
  const SIDES = { cosec: ['hyp', 'opp'], sec: ['hyp', 'adj'], cot: ['adj', 'opp'] };
  const FORMULA = {
    cosec: '\\operatorname{cosec}\\theta = \\dfrac{\\text{hyp}}{\\text{opp}}',
    sec: '\\sec\\theta = \\dfrac{\\text{hyp}}{\\text{adj}}',
    cot: '\\cot\\theta = \\dfrac{\\text{adj}}{\\text{opp}}',
  };
  const active = COLORS[fn];
  const used = (side) => SIDES[fn].includes(side);
  const trans = { transition: 'stroke 0.3s ease, stroke-width 0.3s ease, opacity 0.3s ease' };
  const sideStyle = (side) => ({ stroke: used(side) ? active : '#cbd5e1', strokeWidth: used(side) ? 4 : 2.4, ...trans });
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, fontFamily: FONT }}>
      <svg width={width} height={height} style={{ display: 'block' }}>
        <polygon points={`${A[0]},${A[1]} ${B[0]},${B[1]} ${C[0]},${C[1]}`} fill="rgba(124,58,237,0.05)" />
        <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} style={sideStyle('adj')} />
        <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} style={sideStyle('opp')} />
        <line x1={C[0]} y1={C[1]} x2={A[0]} y2={A[1]} style={sideStyle('hyp')} />
        <polyline points={`${B[0] - 10},${B[1]} ${B[0] - 10},${B[1] - 10} ${B[0]},${B[1] - 10}`} fill="none" stroke="#7c3aed" strokeWidth="1.6" />
        <text x={A[0] - 6} y={A[1] + 6} fontSize="13" fontWeight="700" fill="#1e293b" textAnchor="end">θ</text>
        <text x={B[0] + 4} y={B[1] + 6} fontSize="11.5" fontWeight="700" fill="#1e293b" textAnchor="start">90°</text>
        <text x={(A[0] + B[0]) / 2} y={B[1] + 20} fontSize="13" fontWeight="800" textAnchor="middle" style={{ fill: used('adj') ? active : '#94a3b8', ...trans }}>adj</text>
        <text x={B[0] + 14} y={(B[1] + C[1]) / 2} fontSize="13" fontWeight="800" textAnchor="start" style={{ fill: used('opp') ? active : '#94a3b8', ...trans }}>opp</text>
        <text x={(A[0] + C[0]) / 2 - 14} y={(A[1] + C[1]) / 2 - 8} fontSize="13" fontWeight="800" textAnchor="end" style={{ fill: used('hyp') ? active : '#94a3b8', ...trans }}>hyp</text>
      </svg>
      <div style={{ display: 'flex', gap: 8 }}>
        {['cosec', 'sec', 'cot'].map((f) => (
          <button key={f} onClick={() => setFn(f)}
            style={{ padding: '7px 15px', borderRadius: 999, border: `2px solid ${COLORS[f]}`, background: fn === f ? COLORS[f] : '#fff', color: fn === f ? '#fff' : COLORS[f], fontWeight: 800, cursor: 'pointer', fontFamily: FONT, fontSize: '0.85rem' }}>
            {f === 'cosec' ? 'cosec θ' : f === 'sec' ? 'sec θ' : 'cot θ'}
          </button>
        ))}
      </div>
      <MathView content={`$$${FORMULA[fn]}$$`} style={{ fontSize: '1.2rem', fontWeight: 800, color: active }} />
    </div>
  );
};

// ── Recap: sin/cos/tan, one triangle ────────────────────────────────────────
// The final recap used to be one static line of three formulas — a student who
// couldn't already tell opp/adj/hyp apart on a triangle from the word alone got
// no help from it. This puts them back on a triangle: the SAME 3-4-5 triangle
// used two steps earlier, so the ratio isn't just a formula, it's "4 over 5",
// a real number computed on real sides they already met. It auto-cycles once
// (sin -> cos -> tan) so the pattern is seen even by a student who never taps
// anything, then stays wherever they leave it.
const PrimaryRatioRecap = ({ width = 320, height = 240, opp = 4, adj = 3, hyp = 5 }) => {
  const [fn, setFn] = useState('sin');
  const [playing, setPlaying] = useState(true);
  const ORDER = ['sin', 'cos', 'tan'];
  const COLORS = { sin: '#2563eb', cos: '#7c3aed', tan: '#ea580c' };
  const SIDES = { sin: ['opp', 'hyp'], cos: ['adj', 'hyp'], tan: ['opp', 'adj'] };
  const VALUES = { opp, adj, hyp };
  const FORMULA = {
    sin: `\\sin\\theta = \\dfrac{\\text{opp}}{\\text{hyp}} = \\dfrac{${opp}}{${hyp}}`,
    cos: `\\cos\\theta = \\dfrac{\\text{adj}}{\\text{hyp}} = \\dfrac{${adj}}{${hyp}}`,
    tan: `\\tan\\theta = \\dfrac{\\text{opp}}{\\text{adj}} = \\dfrac{${opp}}{${adj}}`,
  };

  useEffect(() => {
    if (!playing) return undefined;
    const t = setTimeout(() => {
      setFn((cur) => {
        const next = ORDER[(ORDER.indexOf(cur) + 1) % ORDER.length];
        if (next === 'sin') setPlaying(false); // one full lap, then hand control to the student
        return next;
      });
    }, 2200);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, fn]);

  const pad = 42;
  const oppLen = height - 2 * pad;
  const adjLen = (oppLen * adj) / opp;
  const baseX = Math.round((width - adjLen) / 2);
  const A = [baseX, height - pad];
  const B = [Math.round(baseX + adjLen), height - pad];
  const C = [Math.round(baseX + adjLen), pad];
  const active = COLORS[fn];
  const used = (side) => SIDES[fn].includes(side);
  const trans = { transition: 'stroke 0.3s ease, stroke-width 0.3s ease, fill 0.3s ease' };
  const sideStyle = (side) => ({ stroke: used(side) ? active : '#cbd5e1', strokeWidth: used(side) ? 4 : 2.4, ...trans });

  const pick = (f) => { setPlaying(false); setFn(f); };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 24, fontFamily: FONT }}>
      <svg width={width} height={height} style={{ display: 'block', flex: 'none' }}>
        <polygon points={`${A[0]},${A[1]} ${B[0]},${B[1]} ${C[0]},${C[1]}`} fill="rgba(124,58,237,0.05)" />
        <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} style={sideStyle('adj')} />
        <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} style={sideStyle('opp')} />
        <line x1={C[0]} y1={C[1]} x2={A[0]} y2={A[1]} style={sideStyle('hyp')} />
        <polyline points={`${B[0] - 9},${B[1]} ${B[0] - 9},${B[1] - 9} ${B[0]},${B[1] - 9}`} fill="none" stroke="#7c3aed" strokeWidth="1.6" />
        <text x={A[0] - 6} y={A[1] + 6} fontSize="13" fontWeight="700" fill="#1e293b" textAnchor="end">θ</text>
        <text x={(A[0] + B[0]) / 2} y={B[1] + 20} fontSize="13" fontWeight="800" textAnchor="middle" style={{ fill: used('adj') ? active : '#94a3b8', ...trans }}>{used('adj') ? adj : 'adj'}</text>
        <text x={B[0] + 14} y={(B[1] + C[1]) / 2} fontSize="13" fontWeight="800" textAnchor="start" style={{ fill: used('opp') ? active : '#94a3b8', ...trans }}>{used('opp') ? opp : 'opp'}</text>
        <text x={(A[0] + C[0]) / 2 - 14} y={(A[1] + C[1]) / 2 - 8} fontSize="13" fontWeight="800" textAnchor="end" style={{ fill: used('hyp') ? active : '#94a3b8', ...trans }}>{used('hyp') ? hyp : 'hyp'}</text>
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <div style={{ display: 'flex', gap: 8 }}>
          {ORDER.map((f) => (
            <button key={f} type="button" onClick={() => pick(f)} aria-pressed={fn === f}
              style={{ padding: '7px 15px', borderRadius: 999, border: `2px solid ${COLORS[f]}`, background: fn === f ? COLORS[f] : '#fff', color: fn === f ? '#fff' : COLORS[f], fontWeight: 800, cursor: 'pointer', fontFamily: FONT, fontSize: '0.85rem', transition: 'background 0.3s ease, color 0.3s ease' }}>
              {f} θ
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={fn} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
            <MathView content={`$$${FORMULA[fn]} = ${(VALUES[SIDES[fn][0]] / VALUES[SIDES[fn][1]]).toFixed(2)}$$`} style={{ fontSize: '1.05rem', fontWeight: 800, color: active }} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

// ── Exact-values explorer ────────────────────────────────────────────────────
// The two special triangles, plus a table where every cell starts hidden — tap
// one to test yourself (derive it from the triangles above) before checking.
// A "Reveal all" escape hatch for when a student just wants to see the table.
const EXACT_VALUE_CELLS = {
  sin: { label: '\\sin\\theta', 30: '\\frac{1}{2}', 45: '\\frac{1}{\\sqrt2}', 60: '\\frac{\\sqrt3}{2}' },
  cos: { label: '\\cos\\theta', 30: '\\frac{\\sqrt3}{2}', 45: '\\frac{1}{\\sqrt2}', 60: '\\frac{1}{2}' },
  tan: { label: '\\tan\\theta', 30: '\\frac{1}{\\sqrt3}', 45: '1', 60: '\\sqrt3' },
};
const ExactValuesExplorer = () => {
  const [revealed, setRevealed] = useState(new Set());
  const [highlighted, setHighlighted] = useState(null); // "fn-angle" string
  const angles = [30, 45, 60];
  const fns = ['sin', 'cos', 'tan'];

  // Map fn-angle combo to which sides are used in each triangle (0=bottom, 1=right, 2=hyp)
  const getSidesForCell = (fn, angle) => {
    // For 45-45-90 triangle: sides are [1, 1, √2] for bottom, right, hyp at both 45° angles
    // For 30-60-90 triangle:
    //   at 30° (vertex C): adj=√3(right), opp=1(bottom), hyp=2
    //   at 60° (vertex A): adj=1(bottom), opp=√3(right), hyp=2

    if (angle === 45) {
      // 45-45-90 triangle, using either 45° angle (same sides both ways)
      const adjIndex = 0, oppIndex = 1, hypIndex = 2;
      if (fn === 'sin') return [oppIndex, hypIndex]; // opp/hyp = 1/√2
      if (fn === 'cos') return [adjIndex, hypIndex]; // adj/hyp = 1/√2
      if (fn === 'tan') return [oppIndex, adjIndex]; // opp/adj = 1/1
    }

    if (angle === 30) {
      // 30-60-90 triangle at 30° (vertex C): adj=√3, opp=1, hyp=2
      const adjIndex = 1, oppIndex = 0, hypIndex = 2;
      if (fn === 'sin') return [oppIndex, hypIndex]; // opp/hyp = 1/2
      if (fn === 'cos') return [adjIndex, hypIndex]; // adj/hyp = √3/2
      if (fn === 'tan') return [oppIndex, adjIndex]; // opp/adj = 1/√3
    }

    if (angle === 60) {
      // 30-60-90 triangle at 60° (vertex A): adj=1, opp=√3, hyp=2
      const adjIndex = 0, oppIndex = 1, hypIndex = 2;
      if (fn === 'sin') return [oppIndex, hypIndex]; // opp/hyp = √3/2
      if (fn === 'cos') return [adjIndex, hypIndex]; // adj/hyp = 1/2
      if (fn === 'tan') return [oppIndex, adjIndex]; // opp/adj = √3/1
    }
    return [];
  };

  // Determine which triangle to highlight based on angle
  const getTriangleHighlight = (fn, angle) => {
    if (angle === 45) return { tri45: getSidesForCell(fn, angle), tri30_60: null };
    if (angle === 30 || angle === 60) return { tri45: null, tri30_60: getSidesForCell(fn, angle) };
  };

  const toggle = (fn, angle) => {
    const key = `${fn}-${angle}`;
    if (highlighted === key) {
      setHighlighted(null);
    } else {
      setHighlighted(key);
    }
    setRevealed((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };
  const allShown = revealed.size === fns.length * angles.length;

  const tri45Highlight = highlighted ? (() => {
    const [fn, angle] = highlighted.split('-');
    return getTriangleHighlight(fn, parseInt(angle)).tri45;
  })() : null;

  const tri30_60Highlight = highlighted ? (() => {
    const [fn, angle] = highlighted.split('-');
    return getTriangleHighlight(fn, parseInt(angle)).tri30_60;
  })() : null;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, fontFamily: FONT }}>
      <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'nowrap', overflowX: 'auto' }}>
        <SpecialTriangle verts={[[0, 0], [1, 0], [1, 1]]} sideLabels={['1', '1', '√2']} angleLabels={['45°', '90°', '45°']} width={308} height={280} highlightedSides={tri45Highlight} />
        <SpecialTriangle verts={[[0, 0], [1, 0], [1, Math.sqrt(3)]]} sideLabels={['1', '√3', '2']} angleLabels={['60°', '90°', '30°']} width={308} height={280} highlightedSides={tri30_60Highlight} />
      </div>
      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#7c3aed', textAlign: 'center' }}>
        Work each value out from the triangles above, then tap a cell to check yourself.
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', overflowX: 'auto' }}>
        <table style={{ borderCollapse: 'separate', borderSpacing: 0, borderRadius: 14, overflow: 'hidden', boxShadow: '0 6px 20px rgba(124,58,237,0.08)' }}>
          <tbody>
            <tr>
              <td style={{ padding: '9px 16px', background: 'linear-gradient(135deg,#a78bfa,#7c3aed)' }}><MathView content="$\\theta$" style={{ color: '#fff', fontWeight: 800 }} /></td>
              {angles.map((a) => (
                <td key={a} style={{ padding: '9px 16px', textAlign: 'center', background: 'linear-gradient(135deg,#a78bfa,#7c3aed)', color: '#fff', fontWeight: 800 }}>{a}°</td>
              ))}
            </tr>
            {fns.map((fn) => (
              <tr key={fn}>
                <td style={{ padding: '9px 16px', background: 'linear-gradient(135deg,#a78bfa,#7c3aed)' }}><MathView content={`$${EXACT_VALUE_CELLS[fn].label}$`} style={{ color: '#fff', fontWeight: 800 }} /></td>
                {angles.map((a) => {
                  const key = `${fn}-${a}`;
                  const shown = revealed.has(key);
                  const isHighlighted = highlighted === key;
                  return (
                    <td key={a} onClick={() => toggle(fn, a)}
                      style={{ padding: '9px 16px', textAlign: 'center', cursor: 'pointer', borderBottom: '1px solid #ece9fb', borderRight: '1px solid #ece9fb', background: isHighlighted ? '#fee2e2' : (shown ? '#f5f3ff' : '#fff'), minWidth: 60, transition: 'background 0.2s' }}>
                      {shown
                        ? <MathView content={`$${EXACT_VALUE_CELLS[fn][a]}$`} style={{ fontWeight: 700, color: '#1e1b4b' }} />
                        : <span style={{ color: '#c4b5fd', fontWeight: 800, fontSize: '1.1rem' }}>?</span>}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={() => setRevealed(allShown ? new Set() : new Set(fns.flatMap((fn) => angles.map((a) => `${fn}-${a}`))))}
        style={{ background: 'none', border: 'none', color: '#7c3aed', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', textDecoration: 'underline' }}>
        {allShown ? 'Hide all' : 'Reveal all'}
      </button>
    </div>
  );
};

// ── Unknown-side solver — animated walkthrough ──────────────────────────────
// Steps through the "known + unknown → ratio → solve" method on one concrete
// triangle (θ = 60°, the same numbers as the worked Example that follows this
// step), so the general method is seen animated before it's seen written out.
// Known parts of the triangle light up green, the unknown side lights up
// orange, and the matching entry in the sin/cos/tan finder lights up purple as
// the method picks it.
//
// One walkthrough per ratio: the sin/cos/tan chips are tabs, so a student can
// run the SAME method on the case where the missing side is the opposite
// (sine), the adjacent (cosine), or where the hypotenuse isn't involved at all
// (tangent) — which pair of sides you have is the whole decision being taught.
const UNKNOWN_SIDE_VARIANTS = {
  sin: {
    knownSide: 'hyp', unknownSide: 'opp', knownLabel: '5',
    steps: [
      { tag: 'Look at the triangle', known: false, unknown: false, mnem: null, unknownLabel: 'x',
        formula: '\\sin\\theta = \\dfrac{\\text{opp}}{\\text{hyp}}',
        text: 'This triangle has one known angle, one known side, and one side we don’t know yet — that’s x.' },
      { tag: 'Mark what’s known', known: true, unknown: false, mnem: null, unknownLabel: 'x',
        formula: '\\sin\\theta = \\dfrac{\\text{opp}}{\\text{hyp}}',
        text: 'The angle 60° and the hypotenuse 5 are given — those are known.' },
      { tag: 'Mark what’s missing', known: true, unknown: true, mnem: null, unknownLabel: 'x',
        formula: '\\sin\\theta = \\dfrac{\\text{opp}}{\\text{hyp}}',
        text: 'x is the side opposite the 60° angle — that’s the one we’re solving for.' },
      { tag: 'Choose the ratio', known: true, unknown: true, mnem: 'sin', unknownLabel: 'x',
        formula: '\\sin\\theta = \\dfrac{\\text{opp}}{\\text{hyp}}',
        text: 'Known side = hypotenuse, unknown side = opposite — the ratio that uses both is sine.' },
      { tag: 'Substitute', known: true, unknown: true, mnem: 'sin', unknownLabel: 'x',
        formula: '\\sin 60° = \\dfrac{x}{5}',
        text: 'Put θ = 60° and hyp = 5 into the ratio, in place of θ and hyp.' },
      { tag: 'Rearrange', known: true, unknown: true, mnem: 'sin', unknownLabel: 'x',
        formula: 'x = 5\\sin 60°',
        text: 'x is divided by 5, so multiply both sides by 5 to get x on its own.' },
      { tag: 'Solve', known: true, unknown: true, mnem: 'sin', answer: true, unknownLabel: '4.33',
        formula: 'x \\approx 4.33',
        text: 'Evaluate on a calculator: x = 5 sin 60° ≈ 4.33.' },
    ],
  },
  cos: {
    knownSide: 'hyp', unknownSide: 'adj', knownLabel: '5',
    steps: [
      { tag: 'Look at the triangle', known: false, unknown: false, mnem: null, unknownLabel: 'x',
        formula: '\\cos\\theta = \\dfrac{\\text{adj}}{\\text{hyp}}',
        text: 'Same triangle, different missing side — this time x is the side along the bottom.' },
      { tag: 'Mark what’s known', known: true, unknown: false, mnem: null, unknownLabel: 'x',
        formula: '\\cos\\theta = \\dfrac{\\text{adj}}{\\text{hyp}}',
        text: 'The angle 60° and the hypotenuse 5 are given — those are known.' },
      { tag: 'Mark what’s missing', known: true, unknown: true, mnem: null, unknownLabel: 'x',
        formula: '\\cos\\theta = \\dfrac{\\text{adj}}{\\text{hyp}}',
        text: 'x is the side next to the 60° angle that isn’t the hypotenuse — the adjacent side.' },
      { tag: 'Choose the ratio', known: true, unknown: true, mnem: 'cos', unknownLabel: 'x',
        formula: '\\cos\\theta = \\dfrac{\\text{adj}}{\\text{hyp}}',
        text: 'Known side = hypotenuse, unknown side = adjacent — the ratio that uses both is cosine.' },
      { tag: 'Substitute', known: true, unknown: true, mnem: 'cos', unknownLabel: 'x',
        formula: '\\cos 60° = \\dfrac{x}{5}',
        text: 'Put θ = 60° and hyp = 5 into the ratio, in place of θ and hyp.' },
      { tag: 'Rearrange', known: true, unknown: true, mnem: 'cos', unknownLabel: 'x',
        formula: 'x = 5\\cos 60°',
        text: 'x is divided by 5, so multiply both sides by 5 to get x on its own.' },
      { tag: 'Solve', known: true, unknown: true, mnem: 'cos', answer: true, unknownLabel: '2.5',
        formula: 'x = 2.5',
        text: 'Evaluate on a calculator: x = 5 cos 60° = 2.5.' },
    ],
  },
  tan: {
    knownSide: 'adj', unknownSide: 'opp', knownLabel: '4',
    steps: [
      { tag: 'Look at the triangle', known: false, unknown: false, mnem: null, unknownLabel: 'x',
        formula: '\\tan\\theta = \\dfrac{\\text{opp}}{\\text{adj}}',
        text: 'Here the hypotenuse isn’t given at all — the known side is the one along the bottom.' },
      { tag: 'Mark what’s known', known: true, unknown: false, mnem: null, unknownLabel: 'x',
        formula: '\\tan\\theta = \\dfrac{\\text{opp}}{\\text{adj}}',
        text: 'The angle 60° and the adjacent side 4 are given — those are known.' },
      { tag: 'Mark what’s missing', known: true, unknown: true, mnem: null, unknownLabel: 'x',
        formula: '\\tan\\theta = \\dfrac{\\text{opp}}{\\text{adj}}',
        text: 'x is the side opposite the 60° angle — that’s the one we’re solving for.' },
      { tag: 'Choose the ratio', known: true, unknown: true, mnem: 'tan', unknownLabel: 'x',
        formula: '\\tan\\theta = \\dfrac{\\text{opp}}{\\text{adj}}',
        text: 'No hypotenuse in sight: opposite and adjacent are the two sides — that ratio is tangent.' },
      { tag: 'Substitute', known: true, unknown: true, mnem: 'tan', unknownLabel: 'x',
        formula: '\\tan 60° = \\dfrac{x}{4}',
        text: 'Put θ = 60° and adj = 4 into the ratio, in place of θ and adj.' },
      { tag: 'Rearrange', known: true, unknown: true, mnem: 'tan', unknownLabel: 'x',
        formula: 'x = 4\\tan 60°',
        text: 'x is divided by 4, so multiply both sides by 4 to get x on its own.' },
      { tag: 'Solve', known: true, unknown: true, mnem: 'tan', answer: true, unknownLabel: '6.93',
        formula: 'x \\approx 6.93',
        text: 'Evaluate on a calculator: x = 4 tan 60° ≈ 6.93.' },
    ],
  },
};
const MNEM_RATIOS = [
  { key: 'sin', label: '\\sin\\theta', parts: 'opp / hyp' },
  { key: 'cos', label: '\\cos\\theta', parts: 'adj / hyp' },
  { key: 'tan', label: '\\tan\\theta', parts: 'opp / adj' },
];

const UnknownSideSolver = ({ width = 320, height = 260 }) => {
  const [ratio, setRatio] = useState('sin');
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const v = UNKNOWN_SIDE_VARIANTS[ratio];
  const total = v.steps.length;
  const s = v.steps[step];

  useEffect(() => {
    if (!playing) return undefined;
    if (step >= total - 1) { setPlaying(false); return undefined; }
    const t = setTimeout(() => setStep((v) => v + 1), 2200);
    return () => clearTimeout(t);
  }, [playing, step, total]);

  const pad = 46;
  // The triangle is BUILT from the labelled angle, so the drawing can never
  // disagree with the "60°" on it (it used to be drawn at ~36° while claiming
  // 60°, which is what pushed the angle arc off the hypotenuse).
  const ANGLE_DEG = 60;
  const theta = (ANGLE_DEG * Math.PI) / 180;
  const oppLen = height - 2 * pad;
  const adjLen = oppLen / Math.tan(theta);
  const baseX = Math.round((width - adjLen) / 2);
  const A = [baseX, height - pad]; // θ vertex, bottom-left
  const B = [Math.round(baseX + adjLen), height - pad]; // right-angle vertex, bottom-right
  const C = [Math.round(baseX + adjLen), pad]; // top vertex, above B
  const known = '#0f9d68';
  const unknown = '#ea580c';
  const neutral = '#94a3b8';
  const trans = { transition: 'stroke 0.4s ease, fill 0.4s ease' };

  // Angle mark, derived from the same θ — arc lands exactly on the hypotenuse,
  // label sits on the bisector so it never touches either arm.
  const arcR = 30;
  const arcFrom = [A[0] + arcR, A[1]];
  const arcTo = [A[0] + arcR * Math.cos(theta), A[1] - arcR * Math.sin(theta)];
  const labelR = arcR + 20;
  const angLabel = [A[0] + labelR * Math.cos(theta / 2), A[1] - labelR * Math.sin(theta / 2)];

  // Which side is given and which is missing depends on the ratio being walked
  // through, so both the strokes and the side labels are driven by the variant
  // rather than pinned to one side each.
  const SIDES = ['adj', 'opp', 'hyp'];
  const SIDE_ENDS = { adj: [A, B], opp: [B, C], hyp: [A, C] };
  const SIDE_LABEL = {
    adj: { x: (A[0] + B[0]) / 2, y: B[1] + 20, anchor: 'middle', baseline: 'auto' },
    opp: { x: B[0] + 14, y: (B[1] + C[1]) / 2, anchor: 'start', baseline: 'middle' },
    hyp: { x: (A[0] + C[0]) / 2 - 16, y: (A[1] + C[1]) / 2 - 6, anchor: 'end', baseline: 'auto' },
  };
  const isLit = (side) => (side === v.knownSide ? s.known : side === v.unknownSide ? s.unknown : false);
  const colorOf = (side) => (side === v.knownSide && s.known ? known : side === v.unknownSide && s.unknown ? unknown : neutral);
  const textOf = (side) => (side === v.knownSide ? v.knownLabel : side === v.unknownSide ? s.unknownLabel : side);

  const goTo = (n) => { setPlaying(false); setStep(Math.max(0, Math.min(total - 1, n))); };
  const togglePlay = () => { if (!playing && step === total - 1) setStep(0); setPlaying((p) => !p); };
  const pickRatio = (key) => { setPlaying(false); setStep(0); setRatio(key); };

  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 28,
      fontFamily: FONT, background: '#fbfaff', border: '1px solid #ece9fb', borderRadius: 18, padding: '20px 26px',
    }}>
      <svg width={width} height={height} style={{ display: 'block', flex: 'none' }}>
        <polygon points={`${A[0]},${A[1]} ${B[0]},${B[1]} ${C[0]},${C[1]}`} fill="rgba(124,58,237,0.05)" />
        {SIDES.map((side) => {
          const [P, Q] = SIDE_ENDS[side];
          const pulse = side === v.unknownSide && s.answer;
          return (
            <motion.line key={side} x1={P[0]} y1={P[1]} x2={Q[0]} y2={Q[1]} stroke={colorOf(side)} strokeWidth={isLit(side) ? 4 : 2.2} style={trans}
              animate={pulse ? { strokeWidth: [4, 5.5, 4] } : {}} transition={{ duration: 1, repeat: pulse ? Infinity : 0 }} />
          );
        })}
        <polyline points={`${B[0] - 10},${B[1]} ${B[0] - 10},${B[1] - 10} ${B[0]},${B[1] - 10}`} fill="none" stroke={neutral} strokeWidth="1.6" />
        <path d={`M ${arcFrom[0]} ${arcFrom[1]} A ${arcR} ${arcR} 0 0 0 ${arcTo[0]} ${arcTo[1]}`} fill="none" stroke={s.known ? known : neutral} strokeWidth="1.8" style={trans} />
        <text x={angLabel[0]} y={angLabel[1]} fontSize="13" fontWeight="800" fill={s.known ? known : '#475569'} textAnchor="middle" dominantBaseline="middle"
          style={{ ...trans, paintOrder: 'stroke', stroke: '#fbfaff', strokeWidth: 3.5 }}>60°</text>
        {SIDES.map((side) => {
          const pos = SIDE_LABEL[side];
          const lit = isLit(side);
          const common = {
            x: pos.x, y: pos.y, textAnchor: pos.anchor, dominantBaseline: pos.baseline,
            fontSize: lit ? 14.5 : 12.5, fontWeight: lit ? 800 : 700, fill: colorOf(side),
          };
          const halo = { paintOrder: 'stroke', stroke: '#fbfaff', strokeWidth: 4 };
          // Only the unknown side's label changes mid-walkthrough (x → the answer),
          // so it's the only one that needs the swap animation. framer-motion `y`
          // is a transform, not the SVG y attribute — keep the offset relative.
          if (side !== v.unknownSide) {
            return <text key={side} {...common} style={{ ...trans, ...halo }}>{textOf(side)}</text>;
          }
          return (
            <AnimatePresence mode="wait" key={side}>
              <motion.text key={`${ratio}-${s.unknownLabel}`} {...common}
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
                style={{ ...trans, ...halo }}>{textOf(side)}</motion.text>
            </AnimatePresence>
          );
        })}
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, width: 300, flex: 'none' }}>
        <div style={{ background: '#f2effc', border: '1px solid #ece9fb', borderRadius: 12, padding: '8px 18px', width: '100%', textAlign: 'center', boxSizing: 'border-box' }}>
          <AnimatePresence mode="wait">
            <motion.div key={s.formula} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              <MathView content={`$$${s.formula}$$`} style={{ fontSize: '1.08rem', fontWeight: 700, color: '#5b4b9c' }} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tabs: pick a ratio to run the same method on that case. The purple FILL
            still only arrives at the "Choose the ratio" step (that reveal is the
            point of the animation); the border marks which walkthrough you're in. */}
        <div style={{ display: 'flex', gap: 8 }}>
          {MNEM_RATIOS.map((r) => {
            const picked = s.mnem === r.key;
            const selected = ratio === r.key;
            return (
              <button key={r.key} type="button" onClick={() => pickRatio(r.key)}
                aria-pressed={selected} title={`Walk through a ${r.key} example`}
                style={{
                  padding: '5px 10px', borderRadius: 10, textAlign: 'center', minWidth: 58, cursor: 'pointer', fontFamily: FONT,
                  border: `1.5px solid ${selected ? '#7c3aed' : '#e2e8f0'}`,
                  background: picked ? '#f5f3ff' : '#fff',
                  boxShadow: picked ? '0 0 0 3px rgba(124,58,237,0.12)' : 'none',
                  transition: 'border-color 0.3s ease, background 0.4s ease, box-shadow 0.4s ease',
                }}>
                <MathView content={`$${r.label}$`} style={{ fontSize: '0.8rem', fontWeight: 800, color: selected ? '#7c3aed' : '#64748b' }} />
                <div style={{ fontSize: '0.62rem', fontWeight: 600, color: '#94a3b8', marginTop: 2 }}>{r.parts}</div>
              </button>
            );
          })}
        </div>
        <div style={{ fontSize: '0.68rem', fontWeight: 600, color: '#94a3b8', marginTop: -6 }}>Tap a ratio to try that case</div>

        <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#475569', textAlign: 'center', minHeight: '2.4em' }}>
          <span style={{ fontWeight: 800, color: '#7c3aed' }}>{s.tag}. </span>{s.text}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button onClick={() => goTo(step - 1)} disabled={step === 0} aria-label="Previous step"
            style={{ border: '1.5px solid #e2e8f0', background: '#fff', borderRadius: 8, padding: '5px 9px', cursor: step === 0 ? 'default' : 'pointer', opacity: step === 0 ? 0.4 : 1 }}>
            <ArrowLeft size={14} color="#475569" />
          </button>
          <div style={{ display: 'flex', gap: 4 }}>
            {v.steps.map((_, i) => (
              <div key={i} onClick={() => goTo(i)} style={{
                width: 6, height: 6, borderRadius: '50%', cursor: 'pointer',
                background: i === step ? '#7c3aed' : '#e2e8f0', transition: 'background 0.2s ease',
              }} />
            ))}
          </div>
          <button onClick={togglePlay} style={{ border: 'none', background: '#7c3aed', color: '#fff', borderRadius: 999, padding: '6px 14px', fontWeight: 700, fontSize: '0.78rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5, fontFamily: FONT }}>
            {playing ? <Pause size={13} /> : <Play size={13} />}{playing ? 'Pause' : (step === total - 1 ? 'Replay' : 'Play')}
          </button>
          <button onClick={() => goTo(step + 1)} disabled={step === total - 1} aria-label="Next step"
            style={{ border: '1.5px solid #e2e8f0', background: '#fff', borderRadius: 8, padding: '5px 9px', cursor: step === total - 1 ? 'default' : 'pointer', opacity: step === total - 1 ? 0.4 : 1 }}>
            <ArrowRight size={14} color="#475569" />
          </button>
        </div>
      </div>
    </div>
  );
};

// ── Unknown-ANGLE solver — animated walkthrough ─────────────────────────────
// The mirror image of UnknownSideSolver: there the angle was given and a side
// was missing; here two sides are given and the ANGLE is missing, so the last
// move is an inverse function.
//
// The steps are BUILT from the two side lengths (and so is the triangle), so one
// component covers both uses in the lesson: the 3-4-5 explainer, where all three
// ratios are offered and all three land on the same 53°8′, and the worked
// example (opp 12, adj 7), where only tan applies. Nothing about the numbers is
// written twice, so the figure, the working and the answer cannot disagree.
const ANGLE_RATIO_META = {
  sin: { sides: ['opp', 'hyp'], fn: '\\sin', inv: '\\sin^{-1}', name: 'sine', invName: 'sin⁻¹' },
  cos: { sides: ['adj', 'hyp'], fn: '\\cos', inv: '\\cos^{-1}', name: 'cosine', invName: 'cos⁻¹' },
  tan: { sides: ['opp', 'adj'], fn: '\\tan', inv: '\\tan^{-1}', name: 'tangent', invName: 'tan⁻¹' },
};
const SIDE_WORD = { opp: 'opposite side', adj: 'adjacent side', hyp: 'hypotenuse' };
const toDms = (deg) => {
  const d = Math.floor(deg);
  const m = Math.round((deg - d) * 60);
  return m === 60 ? `${d + 1}°0′` : `${d}°${m}′`;
};
const buildAngleSteps = (ratio, values, degrees, closing) => {
  const m = ANGLE_RATIO_META[ratio];
  const [num, den] = m.sides;
  const ratioTex = `${m.fn}\\theta = \\dfrac{\\text{${num}}}{\\text{${den}}}`;
  const frac = `\\dfrac{${values[num]}}{${values[den]}}`;
  const plain = `${values[num]}/${values[den]}`;
  const dms = toDms(degrees);
  const base = { known: true, unknown: true, mnem: ratio, angleLabel: 'θ' };
  return [
    { ...base, tag: 'Look at the triangle', known: false, unknown: false, mnem: null, formula: ratioTex,
      text: 'Two sides are given and the angle is the thing we don’t know — that’s θ.' },
    { ...base, tag: 'Mark what’s known', unknown: false, mnem: null, formula: ratioTex,
      text: `The ${SIDE_WORD[num]} ${values[num]} and the ${SIDE_WORD[den]} ${values[den]} are given — those are known.` },
    { ...base, tag: 'Mark what’s missing', mnem: null, formula: ratioTex,
      text: 'θ is the angle marked at the bottom-left corner — that’s what we’re solving for.' },
    { ...base, tag: 'Choose the ratio', formula: ratioTex,
      text: ratio === 'tan'
        ? 'No hypotenuse in sight: opposite and adjacent are the pair — that ratio is tangent.'
        : `Known sides = ${SIDE_WORD[num].replace(' side', '')} and ${SIDE_WORD[den].replace(' side', '')} — the ratio that uses both is ${m.name}.` },
    { ...base, tag: 'Substitute', formula: `${m.fn}\\theta = ${frac}`,
      text: `Put the two side lengths in. Now θ is the angle whose ${m.name} is ${plain}.` },
    { ...base, tag: `Undo the ${m.name}`, formula: `\\theta = ${m.inv}\\!\\left(${frac}\\right)`,
      text: `${m.name[0].toUpperCase()}${m.name.slice(1)} turns an angle into a ratio; ${m.invName} is its inverse — it turns the ratio back into the angle.` },
    { ...base, tag: 'Solve', answer: true, angleLabel: dms, formula: `\\theta \\approx ${dms}`,
      text: `On a calculator (in degrees): ${m.invName}(${plain}) ≈ ${degrees.toFixed(2)}° = ${dms}.${closing ? ` ${closing}` : ''}` },
  ];
};

// `opp`/`adj` are the two short side lengths — they set the shape of the drawing
// AND the numbers in the working. `hyp` is the third label: pass it when the
// hypotenuse is a given length (3-4-5), leave it out when it isn't part of the
// question. `ratios` is which cases the student may run.
const UnknownAngleSolver = ({
  width = 320, height = 260, opp = 4, adj = 3, hyp, ratios = ['sin', 'cos', 'tan'], closing,
}) => {
  const [ratio, setRatio] = useState(ratios[0]);
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);

  const degrees = (Math.atan2(opp, adj) * 180) / Math.PI;
  const values = { opp: String(opp), adj: String(adj), hyp: hyp == null ? 'hyp' : String(hyp) };
  const knownSides = ANGLE_RATIO_META[ratio].sides;
  const steps = buildAngleSteps(ratio, values, degrees, closing);
  const total = steps.length;
  const s = steps[step];

  useEffect(() => {
    if (!playing) return undefined;
    if (step >= total - 1) { setPlaying(false); return undefined; }
    const t = setTimeout(() => setStep((n) => n + 1), 2400);
    return () => clearTimeout(t);
  }, [playing, step, total]);

  // Drawn to scale from opp : adj, so the angle the student reads off the
  // picture really is the one the walkthrough ends on.
  const pad = 46;
  const oppLen = height - 2 * pad;
  const adjLen = (oppLen * adj) / opp;
  const theta = Math.atan2(oppLen, adjLen);
  const baseX = Math.round((width - adjLen) / 2);
  const A = [baseX, height - pad]; // θ vertex, bottom-left
  const B = [Math.round(baseX + adjLen), height - pad]; // right angle
  const C = [Math.round(baseX + adjLen), pad]; // top
  const known = '#0f9d68';
  const unknown = '#ea580c';
  const neutral = '#94a3b8';
  const trans = { transition: 'stroke 0.4s ease, fill 0.4s ease' };

  const arcR = 32;
  const arcFrom = [A[0] + arcR, A[1]];
  const arcTo = [A[0] + arcR * Math.cos(theta), A[1] - arcR * Math.sin(theta)];
  const labelR = arcR + 26;
  const angLabel = [A[0] + labelR * Math.cos(theta / 2), A[1] - labelR * Math.sin(theta / 2)];

  const SIDES = ['adj', 'opp', 'hyp'];
  const SIDE_ENDS = { adj: [A, B], opp: [B, C], hyp: [A, C] };
  const SIDE_LABEL = {
    adj: { x: (A[0] + B[0]) / 2, y: B[1] + 20, anchor: 'middle', baseline: 'auto' },
    opp: { x: B[0] + 14, y: (B[1] + C[1]) / 2, anchor: 'start', baseline: 'middle' },
    hyp: { x: (A[0] + C[0]) / 2 - 16, y: (A[1] + C[1]) / 2 - 6, anchor: 'end', baseline: 'auto' },
  };
  const isKnownSide = (side) => knownSides.includes(side);
  const isLit = (side) => isKnownSide(side) && s.known;
  const colorOf = (side) => (isLit(side) ? known : neutral);
  const textOf = (side) => (isKnownSide(side) ? values[side] : values[side] || side);
  const angleColor = s.unknown ? unknown : '#475569';

  const goTo = (n) => { setPlaying(false); setStep(Math.max(0, Math.min(total - 1, n))); };
  const togglePlay = () => { if (!playing && step === total - 1) setStep(0); setPlaying((p) => !p); };
  const pickRatio = (key) => { setPlaying(false); setStep(0); setRatio(key); };

  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 28,
      fontFamily: FONT, background: '#fbfaff', border: '1px solid #ece9fb', borderRadius: 18, padding: '20px 26px',
    }}>
      <svg width={width} height={height} style={{ display: 'block', flex: 'none' }}>
        <polygon points={`${A[0]},${A[1]} ${B[0]},${B[1]} ${C[0]},${C[1]}`} fill="rgba(124,58,237,0.05)" />
        {SIDES.map((side) => {
          const [P, Q] = SIDE_ENDS[side];
          return <line key={side} x1={P[0]} y1={P[1]} x2={Q[0]} y2={Q[1]} stroke={colorOf(side)} strokeWidth={isLit(side) ? 4 : 2.2} style={trans} />;
        })}
        <polyline points={`${B[0] - 10},${B[1]} ${B[0] - 10},${B[1] - 10} ${B[0]},${B[1] - 10}`} fill="none" stroke={neutral} strokeWidth="1.6" />
        {/* The angle is the unknown here, so the arc is what pulses on the answer. */}
        <motion.path d={`M ${arcFrom[0]} ${arcFrom[1]} A ${arcR} ${arcR} 0 0 0 ${arcTo[0]} ${arcTo[1]}`} fill="none"
          stroke={angleColor} strokeWidth={s.unknown ? 3 : 1.8} style={trans}
          animate={s.answer ? { strokeWidth: [3, 4.5, 3] } : {}} transition={{ duration: 1, repeat: s.answer ? Infinity : 0 }} />
        {SIDES.map((side) => {
          const pos = SIDE_LABEL[side];
          const lit = isLit(side);
          return (
            <text key={side} x={pos.x} y={pos.y} textAnchor={pos.anchor} dominantBaseline={pos.baseline}
              fontSize={lit ? 14.5 : 12.5} fontWeight={lit ? 800 : 700} fill={colorOf(side)}
              style={{ ...trans, paintOrder: 'stroke', stroke: '#fbfaff', strokeWidth: 4 }}>{textOf(side)}</text>
          );
        })}
        <AnimatePresence mode="wait">
          <motion.text key={`${ratio}-${s.angleLabel}`} x={angLabel[0]} y={angLabel[1]} textAnchor="middle" dominantBaseline="middle"
            fontSize={s.answer ? 13.5 : 15} fontWeight="800" fill={angleColor}
            initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
            style={{ ...trans, paintOrder: 'stroke', stroke: '#fbfaff', strokeWidth: 4 }}>{s.angleLabel}</motion.text>
        </AnimatePresence>
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, width: 300, flex: 'none' }}>
        <div style={{ background: '#f2effc', border: '1px solid #ece9fb', borderRadius: 12, padding: '8px 18px', width: '100%', textAlign: 'center', boxSizing: 'border-box' }}>
          <AnimatePresence mode="wait">
            <motion.div key={s.formula} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              <MathView content={`$$${s.formula}$$`} style={{ fontSize: '1.08rem', fontWeight: 700, color: '#5b4b9c' }} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* All three ratios always show — watching the method reject two of them is
            the lesson. They're only tappable when the step offers more than one
            case (the worked example is about its own numbers, not a choice). */}
        <div style={{ display: 'flex', gap: 8 }}>
          {MNEM_RATIOS.map((r) => {
            const picked = s.mnem === r.key;
            const selected = ratio === r.key;
            const tappable = ratios.length > 1 && ratios.includes(r.key);
            return (
              <button key={r.key} type="button" onClick={tappable ? () => pickRatio(r.key) : undefined}
                disabled={!tappable} aria-pressed={selected}
                title={tappable ? `Find the angle from ${ANGLE_RATIO_META[r.key].sides.join(' + ')}` : undefined}
                style={{
                  padding: '5px 10px', borderRadius: 10, textAlign: 'center', minWidth: 58, fontFamily: FONT,
                  cursor: tappable ? 'pointer' : 'default',
                  border: `1.5px solid ${selected ? '#7c3aed' : '#e2e8f0'}`,
                  background: picked ? '#f5f3ff' : '#fff',
                  boxShadow: picked ? '0 0 0 3px rgba(124,58,237,0.12)' : 'none',
                  transition: 'border-color 0.3s ease, background 0.4s ease, box-shadow 0.4s ease',
                }}>
                <MathView content={`$${r.label}$`} style={{ fontSize: '0.8rem', fontWeight: 800, color: selected ? '#7c3aed' : '#64748b' }} />
                <div style={{ fontSize: '0.62rem', fontWeight: 600, color: '#94a3b8', marginTop: 2 }}>{r.parts}</div>
              </button>
            );
          })}
        </div>
        {ratios.length > 1 && (
          <div style={{ fontSize: '0.68rem', fontWeight: 600, color: '#94a3b8', marginTop: -6 }}>Tap the pair of sides you’re given</div>
        )}

        <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#475569', textAlign: 'center', minHeight: '2.4em' }}>
          <span style={{ fontWeight: 800, color: '#7c3aed' }}>{s.tag}. </span>{s.text}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button onClick={() => goTo(step - 1)} disabled={step === 0} aria-label="Previous step"
            style={{ border: '1.5px solid #e2e8f0', background: '#fff', borderRadius: 8, padding: '5px 9px', cursor: step === 0 ? 'default' : 'pointer', opacity: step === 0 ? 0.4 : 1 }}>
            <ArrowLeft size={14} color="#475569" />
          </button>
          <div style={{ display: 'flex', gap: 4 }}>
            {steps.map((_, i) => (
              <div key={i} onClick={() => goTo(i)} style={{
                width: 6, height: 6, borderRadius: '50%', cursor: 'pointer',
                background: i === step ? '#7c3aed' : '#e2e8f0', transition: 'background 0.2s ease',
              }} />
            ))}
          </div>
          <button onClick={togglePlay} style={{ border: 'none', background: '#7c3aed', color: '#fff', borderRadius: 999, padding: '6px 14px', fontWeight: 700, fontSize: '0.78rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5, fontFamily: FONT }}>
            {playing ? <Pause size={13} /> : <Play size={13} />}{playing ? 'Pause' : (step === total - 1 ? 'Replay' : 'Play')}
          </button>
          <button onClick={() => goTo(step + 1)} disabled={step === total - 1} aria-label="Next step"
            style={{ border: '1.5px solid #e2e8f0', background: '#fff', borderRadius: 8, padding: '5px 9px', cursor: step === total - 1 ? 'default' : 'pointer', opacity: step === total - 1 ? 0.4 : 1 }}>
            <ArrowRight size={14} color="#475569" />
          </button>
        </div>
      </div>
    </div>
  );
};

// ── Worked example — a real problem, walked through on ONE persistent figure ─
// A concrete word problem ("plane sights a church at 35° depression, find the
// ground distance then the line-of-sight distance") used to be split across
// three separate lesson steps: a static to-scale triangle with a tap-a-side
// quiz, then two purely-algebra steps with NO picture at all — exactly where
// the picture matters most, watching which side lights up as "known" and
// which as "the one we're solving for". This puts both parts (a, then b) on
// the SAME triangle, animated the same way as UnknownSideSolver, so the
// figure never disappears mid-explanation. The angle (55°) is fixed; GC and
// PC are the two things solved for in turn — one tab each, same pattern as
// every other tabbed solver in this file.
const WORKED_EXAMPLE_META = {
  a: { unknownSide: 'opp', unknownName: 'GC', ratio: 'tan', label: 'a  Find GC' },
  b: { unknownSide: 'hyp', unknownName: 'PC', ratio: 'cos', label: 'b  Find PC' },
};
const buildWorkedSteps = (part) => {
  const m = WORKED_EXAMPLE_META[part];
  const base = { known: true, unknown: true, mnem: m.ratio };
  if (part === 'a') {
    return [
      { ...base, tag: 'Look at the triangle', known: false, unknown: false, mnem: null,
        formula: '\\tan\\theta = \\dfrac{\\text{opp}}{\\text{adj}}',
        text: 'One known angle (55°), one known side (9000 m) — GC, the ground distance, is what we find first.' },
      { ...base, tag: 'Mark what’s known', unknown: false, mnem: null,
        formula: '\\tan\\theta = \\dfrac{\\text{opp}}{\\text{adj}}',
        text: 'The angle 55° and the adjacent side 9000 m are given — those are known.' },
      { ...base, tag: 'Mark what’s missing', mnem: null,
        formula: '\\tan\\theta = \\dfrac{\\text{opp}}{\\text{adj}}',
        text: 'GC is opposite the 55° angle — that’s the side we’re solving for.' },
      { ...base, tag: 'Choose the ratio',
        formula: '\\tan\\theta = \\dfrac{\\text{opp}}{\\text{adj}}',
        text: 'Known side = adjacent, unknown side = opposite — the ratio that uses both is tangent.' },
      { ...base, tag: 'Substitute',
        formula: '\\tan 55° = \\dfrac{GC}{9000}',
        text: 'Put θ = 55° and adj = 9000 into the ratio, in place of θ and adj.' },
      { ...base, tag: 'Rearrange',
        formula: 'GC = 9000\\tan 55°',
        text: 'GC is divided by 9000, so multiply both sides by 9000 to get GC on its own.' },
      { ...base, tag: 'Solve', answer: true, unknownLabel: '12 900 m',
        formula: 'GC \\approx 12\\,900\\text{ m}',
        text: 'Evaluate on a calculator: GC = 9000 tan 55° ≈ 12 900 m.' },
    ];
  }
  return [
    { ...base, tag: 'Look at the triangle', known: false, unknown: false, mnem: null,
      formula: '\\cos\\theta = \\dfrac{\\text{adj}}{\\text{hyp}}',
      text: 'Now for PC, the line-of-sight distance — the hypotenuse of the same triangle.' },
    { ...base, tag: 'Mark what’s known', unknown: false, mnem: null,
      formula: '\\cos\\theta = \\dfrac{\\text{adj}}{\\text{hyp}}',
      text: 'The angle 55° and the adjacent side 9000 m are given — those are known.' },
    { ...base, tag: 'Mark what’s missing', mnem: null,
      formula: '\\cos\\theta = \\dfrac{\\text{adj}}{\\text{hyp}}',
      text: 'PC is the hypotenuse — the side we’re solving for this time.' },
    { ...base, tag: 'Choose the ratio',
      formula: '\\cos\\theta = \\dfrac{\\text{adj}}{\\text{hyp}}',
      text: 'Known side = adjacent, unknown side = hypotenuse — the ratio that uses both is cosine.' },
    { ...base, tag: 'Substitute',
      formula: '\\cos 55° = \\dfrac{9000}{PC}',
      text: 'Put θ = 55° and adj = 9000 in — this time PC is in the denominator, not the numerator.' },
    { ...base, tag: 'Rearrange',
      formula: 'PC = \\dfrac{9000}{\\cos 55°}',
      text: 'Cross-multiply, then divide by cos 55°, to get PC on its own.' },
    { ...base, tag: 'Solve', answer: true, unknownLabel: '15 700 m',
      formula: 'PC \\approx 15\\,700\\text{ m}',
      text: 'Evaluate on a calculator: PC = 9000 ÷ cos 55° ≈ 15 700 m.' },
  ];
};

const WorkedTriangleSolver = ({ width = 340, height = 260, angleDeg = 55 }) => {
  const [part, setPart] = useState('a');
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const steps = buildWorkedSteps(part);
  const total = steps.length;
  const s = steps[step];
  const m = WORKED_EXAMPLE_META[part];

  useEffect(() => {
    if (!playing) return undefined;
    if (step >= total - 1) { setPlaying(false); return undefined; }
    const t = setTimeout(() => setStep((n) => n + 1), 2400);
    return () => clearTimeout(t);
  }, [playing, step, total]);

  // Triangle built FROM the 55° angle (never picked independently and
  // re-labelled) — the same construction as UnknownSideSolver/
  // UnknownAngleSolver, which is what keeps the figure and the "55°" label
  // from ever disagreeing.
  const pad = 46;
  const theta = (angleDeg * Math.PI) / 180;
  const oppLen = height - 2 * pad;
  const adjLen = oppLen / Math.tan(theta);
  const baseX = Math.round((width - adjLen) / 2);
  const A = [baseX, height - pad]; // 55° vertex
  const B = [Math.round(baseX + adjLen), height - pad]; // right angle
  const C = [Math.round(baseX + adjLen), pad]; // top (35°)
  const known = '#0f9d68', unknown = '#ea580c', neutral = '#94a3b8';
  const trans = { transition: 'stroke 0.4s ease, fill 0.4s ease' };

  const arcR = 30;
  const arcTo = [A[0] + arcR * Math.cos(theta), A[1] - arcR * Math.sin(theta)];
  const labelR = arcR + 20;
  const angLabel = [A[0] + labelR * Math.cos(theta / 2), A[1] - labelR * Math.sin(theta / 2)];

  const SIDES = ['adj', 'opp', 'hyp'];
  const SIDE_ENDS = { adj: [A, B], opp: [B, C], hyp: [A, C] };
  const SIDE_LABEL = {
    adj: { x: (A[0] + B[0]) / 2, y: B[1] + 20, anchor: 'middle', baseline: 'auto' },
    opp: { x: B[0] + 14, y: (B[1] + C[1]) / 2, anchor: 'start', baseline: 'middle' },
    hyp: { x: (A[0] + C[0]) / 2 - 16, y: (A[1] + C[1]) / 2 - 6, anchor: 'end', baseline: 'auto' },
  };
  const NAME = { adj: '9000', opp: 'GC', hyp: 'PC' };
  const isLit = (side) => (side === 'adj' ? s.known : side === m.unknownSide ? s.unknown : false);
  const colorOf = (side) => (isLit(side) ? (side === 'adj' ? known : unknown) : neutral);
  const textOf = (side) => (side === 'adj' ? '9000' : side === m.unknownSide ? (s.unknownLabel || NAME[side]) : NAME[side]);

  const goTo = (n) => { setPlaying(false); setStep(Math.max(0, Math.min(total - 1, n))); };
  const togglePlay = () => { if (!playing && step === total - 1) setStep(0); setPlaying((p) => !p); };
  const pickPart = (key) => { setPlaying(false); setStep(0); setPart(key); };

  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 28,
      fontFamily: FONT, background: '#fbfaff', border: '1px solid #ece9fb', borderRadius: 18, padding: '20px 26px',
    }}>
      <svg width={width} height={height} style={{ display: 'block', flex: 'none', overflow: 'visible' }}>
        <polygon points={`${A[0]},${A[1]} ${B[0]},${B[1]} ${C[0]},${C[1]}`} fill="rgba(124,58,237,0.05)" />
        {SIDES.map((side) => {
          const [P, Q] = SIDE_ENDS[side];
          const pulse = side === m.unknownSide && s.answer;
          return (
            <motion.line key={side} x1={P[0]} y1={P[1]} x2={Q[0]} y2={Q[1]} stroke={colorOf(side)} strokeWidth={isLit(side) ? 4 : 2.2} style={trans}
              animate={pulse ? { strokeWidth: [4, 5.5, 4] } : {}} transition={{ duration: 1, repeat: pulse ? Infinity : 0 }} />
          );
        })}
        <polyline points={`${B[0] - 10},${B[1]} ${B[0] - 10},${B[1] - 10} ${B[0]},${B[1] - 10}`} fill="none" stroke={neutral} strokeWidth="1.6" />
        <path d={`M ${A[0] + arcR} ${A[1]} A ${arcR} ${arcR} 0 0 0 ${arcTo[0]} ${arcTo[1]}`} fill="none" stroke={s.known ? known : neutral} strokeWidth="1.8" style={trans} />
        <text x={angLabel[0]} y={angLabel[1]} fontSize="13" fontWeight="800" fill={s.known ? known : '#475569'} textAnchor="middle" dominantBaseline="middle"
          style={{ ...trans, paintOrder: 'stroke', stroke: '#fbfaff', strokeWidth: 3.5 }}>{angleDeg}°</text>
        <text x={C[0] - 8} y={C[1] + 20} fontSize="11.5" fontWeight="700" fill={neutral} textAnchor="end">35°</text>
        {SIDES.map((side) => {
          const pos = SIDE_LABEL[side];
          const lit = isLit(side);
          const common = {
            x: pos.x, y: pos.y, textAnchor: pos.anchor, dominantBaseline: pos.baseline,
            fontSize: lit ? 14.5 : 12.5, fontWeight: lit ? 800 : 700, fill: colorOf(side),
          };
          const halo = { paintOrder: 'stroke', stroke: '#fbfaff', strokeWidth: 4 };
          if (side !== m.unknownSide) return <text key={side} {...common} style={{ ...trans, ...halo }}>{textOf(side)}</text>;
          return (
            <AnimatePresence mode="wait" key={side}>
              <motion.text key={`${part}-${s.unknownLabel || 'q'}`} {...common}
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
                style={{ ...trans, ...halo }}>{textOf(side)}</motion.text>
            </AnimatePresence>
          );
        })}
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, width: 300, flex: 'none' }}>
        <div style={{ background: '#f2effc', border: '1px solid #ece9fb', borderRadius: 12, padding: '8px 18px', width: '100%', textAlign: 'center', boxSizing: 'border-box' }}>
          <AnimatePresence mode="wait">
            <motion.div key={s.formula} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              <MathView content={`$$${s.formula}$$`} style={{ fontSize: '1.08rem', fontWeight: 700, color: '#5b4b9c' }} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
          {['a', 'b'].map((key) => (
            <button key={key} type="button" onClick={() => pickPart(key)} aria-pressed={part === key}
              style={{
                padding: '6px 14px', borderRadius: 10, fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer', fontFamily: FONT,
                border: `1.5px solid ${part === key ? '#7c3aed' : '#e2e8f0'}`,
                background: part === key ? '#f5f3ff' : '#fff', color: part === key ? '#7c3aed' : '#64748b',
                transition: 'border-color 0.3s ease, background 0.4s ease',
              }}>{WORKED_EXAMPLE_META[key].label}</button>
          ))}
        </div>

        <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#475569', textAlign: 'center', minHeight: '2.4em' }}>
          <span style={{ fontWeight: 800, color: '#7c3aed' }}>{s.tag}. </span>{s.text}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button onClick={() => goTo(step - 1)} disabled={step === 0} aria-label="Previous step"
            style={{ border: '1.5px solid #e2e8f0', background: '#fff', borderRadius: 8, padding: '5px 9px', cursor: step === 0 ? 'default' : 'pointer', opacity: step === 0 ? 0.4 : 1 }}>
            <ArrowLeft size={14} color="#475569" />
          </button>
          <div style={{ display: 'flex', gap: 4 }}>
            {steps.map((_, i) => (
              <div key={i} onClick={() => goTo(i)} style={{
                width: 6, height: 6, borderRadius: '50%', cursor: 'pointer',
                background: i === step ? '#7c3aed' : '#e2e8f0', transition: 'background 0.2s ease',
              }} />
            ))}
          </div>
          <button onClick={togglePlay} style={{ border: 'none', background: '#7c3aed', color: '#fff', borderRadius: 999, padding: '6px 14px', fontWeight: 700, fontSize: '0.78rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5, fontFamily: FONT }}>
            {playing ? <Pause size={13} /> : <Play size={13} />}{playing ? 'Pause' : (step === total - 1 ? 'Replay' : 'Play')}
          </button>
          <button onClick={() => goTo(step + 1)} disabled={step === total - 1} aria-label="Next step"
            style={{ border: '1.5px solid #e2e8f0', background: '#fff', borderRadius: 8, padding: '5px 9px', cursor: step === total - 1 ? 'default' : 'pointer', opacity: step === total - 1 ? 0.4 : 1 }}>
            <ArrowRight size={14} color="#475569" />
          </button>
        </div>
      </div>
    </div>
  );
};

// ── Worked example — walker + cliff, angle THEN Pythagoras on one triangle ──
// A second worked example with the same "picture disappears exactly when the
// algebra starts" problem: a static to-scale triangle, then a text-only step
// with both answers and no picture. This merges them the same way as
// WorkedTriangleSolver, but part (b) here is genuinely different — CW is
// found by PYTHAGORAS, not a trig ratio, since both legs are already known.
// Part (a) reuses buildAngleSteps (the exact machinery UnknownAngleSolver
// runs on) rather than duplicating it — same angle-finding method, real
// numbers (opp 300, adj 1000) instead of the teaching triangle's 3-4-5.
const buildPythagorasSteps = (oppVal, adjVal, hypName) => {
  const oppSq = oppVal * oppVal, adjSq = adjVal * adjVal, sumSq = oppSq + adjSq;
  const hypVal = Math.sqrt(sumSq);
  const hypRounded = Math.round(hypVal);
  // Plain (space-separated) for the SVG diagram label / narration text; a
  // thin-space (\,) form for the KaTeX panel — reusing the wrong one for the
  // wrong target is exactly the bug fixed in WorkedTriangleSolver.
  const texNum = (n) => Math.round(n).toLocaleString('en-US').replace(/,/g, '\\,');
  const base = { known: true, unknown: true };
  return [
    { ...base, tag: 'Look at the triangle', known: false, unknown: false,
      formula: `${hypName}^2 = \\text{opp}^2 + \\text{adj}^2`,
      text: `This time both legs are known — ${fmt(adjVal)} m and ${fmt(oppVal)} m — so Pythagoras' theorem finds ${hypName} directly, no ratio needed.` },
    { ...base, tag: 'Mark what’s known', unknown: false,
      formula: `${hypName}^2 = \\text{opp}^2 + \\text{adj}^2`,
      text: `The adjacent side ${fmt(adjVal)} m and the opposite side ${fmt(oppVal)} m are both given — those are known.` },
    { ...base, tag: 'Mark what’s missing',
      formula: `${hypName}^2 = \\text{opp}^2 + \\text{adj}^2`,
      text: `${hypName} is the hypotenuse — the side we’re solving for.` },
    { ...base, tag: 'Apply Pythagoras',
      formula: `${hypName}^2 = ${texNum(adjVal)}^2 + ${texNum(oppVal)}^2`,
      text: 'Square both legs and add them — the hypotenuse squared equals the sum of the other two squares.' },
    { ...base, tag: 'Add the squares',
      formula: `${hypName}^2 = ${texNum(adjSq)} + ${texNum(oppSq)} = ${texNum(sumSq)}`,
      text: `${fmt(adjVal)}² = ${fmt(adjSq)} and ${fmt(oppVal)}² = ${fmt(oppSq)} — add them together.` },
    { ...base, tag: 'Square root',
      formula: `${hypName} = \\sqrt{${texNum(sumSq)}}`,
      text: `${hypName}² is now a single number — take the square root to undo the square.` },
    { ...base, tag: 'Solve', answer: true, unknownLabel: `${fmt(hypRounded)} m`,
      formula: `${hypName} \\approx ${texNum(hypRounded)}\\text{ m}`,
      text: `Evaluate on a calculator: ${hypName} = √${fmt(sumSq)} ≈ ${fmt(hypRounded)} m.` },
  ];
};

const WalkerCliffSolver = ({ width = 640, height = 230, oppVal = 300, adjVal = 1000 }) => {
  const [part, setPart] = useState('a');
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const degrees = (Math.atan2(oppVal, adjVal) * 180) / Math.PI;
  const steps = part === 'a'
    ? buildAngleSteps('tan', { opp: fmt(oppVal), adj: fmt(adjVal), hyp: 'CW' }, degrees)
    : buildPythagorasSteps(oppVal, adjVal, 'CW');
  const total = steps.length;
  const s = steps[step];

  useEffect(() => {
    if (!playing) return undefined;
    if (step >= total - 1) { setPlaying(false); return undefined; }
    const t = setTimeout(() => setStep((n) => n + 1), 2400);
    return () => clearTimeout(t);
  }, [playing, step, total]);

  // Built from the REAL opp:adj ratio (300:1000), same "angle first, then
  // coordinates" principle as every other solver here — a shallow, wide
  // triangle is the correct shape for this problem, not a cosmetic choice.
  const pad = 46;
  const oppLen = height - 2 * pad;
  const adjLen = (oppLen * adjVal) / oppVal;
  const A = [pad, height - pad]; // θ vertex, bottom-left
  const B = [Math.round(pad + adjLen), height - pad]; // right angle
  const C = [Math.round(pad + adjLen), pad]; // top
  const known = '#0f9d68', unknown = '#ea580c', neutral = '#94a3b8';
  const trans = { transition: 'stroke 0.4s ease, fill 0.4s ease' };
  const theta = (degrees * Math.PI) / 180;

  const arcR = 30;
  const arcTo = [A[0] + arcR * Math.cos(theta), A[1] - arcR * Math.sin(theta)];
  const labelR = arcR + 20;
  const angLabel = [A[0] + labelR * Math.cos(theta / 2), A[1] - labelR * Math.sin(theta / 2)];
  const angleIsFocus = part === 'a';

  const SIDES = ['adj', 'opp', 'hyp'];
  const SIDE_ENDS = { adj: [A, B], opp: [B, C], hyp: [A, C] };
  const SIDE_LABEL = {
    adj: { x: (A[0] + B[0]) / 2, y: B[1] + 20, anchor: 'middle', baseline: 'auto' },
    opp: { x: B[0] + 14, y: (B[1] + C[1]) / 2, anchor: 'start', baseline: 'middle' },
    hyp: { x: (A[0] + C[0]) / 2 - 16, y: (A[1] + C[1]) / 2 - 6, anchor: 'end', baseline: 'auto' },
  };
  const unknownSide = part === 'a' ? null : 'hyp'; // part a solves for θ, not a side
  const isKnownSide = (side) => side === 'adj' || side === 'opp';
  const isLit = (side) => (isKnownSide(side) ? s.known : side === unknownSide ? s.unknown : false);
  const colorOf = (side) => (isLit(side) ? (isKnownSide(side) ? known : unknown) : neutral);
  const textOf = (side) => {
    if (side === 'adj') return fmt(adjVal);
    if (side === 'opp') return fmt(oppVal);
    return side === unknownSide ? (s.unknownLabel || 'CW') : 'CW';
  };

  const goTo = (n) => { setPlaying(false); setStep(Math.max(0, Math.min(total - 1, n))); };
  const togglePlay = () => { if (!playing && step === total - 1) setStep(0); setPlaying((p) => !p); };
  const pickPart = (key) => { setPlaying(false); setStep(0); setPart(key); };

  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 28,
      fontFamily: FONT, background: '#fbfaff', border: '1px solid #ece9fb', borderRadius: 18, padding: '20px 26px',
    }}>
      <svg width={width} height={height} style={{ display: 'block', flex: 'none', overflow: 'visible' }}>
        <polygon points={`${A[0]},${A[1]} ${B[0]},${B[1]} ${C[0]},${C[1]}`} fill="rgba(124,58,237,0.05)" />
        {SIDES.map((side) => {
          const [P, Q] = SIDE_ENDS[side];
          const pulse = side === unknownSide && s.answer;
          return (
            <motion.line key={side} x1={P[0]} y1={P[1]} x2={Q[0]} y2={Q[1]} stroke={colorOf(side)} strokeWidth={isLit(side) ? 4 : 2.2} style={trans}
              animate={pulse ? { strokeWidth: [4, 5.5, 4] } : {}} transition={{ duration: 1, repeat: pulse ? Infinity : 0 }} />
          );
        })}
        <polyline points={`${B[0] - 10},${B[1]} ${B[0] - 10},${B[1] - 10} ${B[0]},${B[1] - 10}`} fill="none" stroke={neutral} strokeWidth="1.6" />
        <path d={`M ${A[0] + arcR} ${A[1]} A ${arcR} ${arcR} 0 0 0 ${arcTo[0]} ${arcTo[1]}`} fill="none" stroke={angleIsFocus && s.known ? known : neutral} strokeWidth="1.8" style={trans} />
        <motion.text x={angLabel[0]} y={angLabel[1]} fontSize="13" fontWeight="800"
          fill={angleIsFocus ? (s.unknown ? unknown : (s.known ? known : '#475569')) : '#475569'}
          textAnchor="middle" dominantBaseline="middle" style={{ ...trans, paintOrder: 'stroke', stroke: '#fbfaff', strokeWidth: 3.5 }}>
          {angleIsFocus ? (s.angleLabel || 'θ') : 'θ'}
        </motion.text>
        {SIDES.map((side) => {
          const pos = SIDE_LABEL[side];
          const lit = isLit(side);
          const common = {
            x: pos.x, y: pos.y, textAnchor: pos.anchor, dominantBaseline: pos.baseline,
            fontSize: lit ? 14.5 : 12.5, fontWeight: lit ? 800 : 700, fill: colorOf(side),
          };
          const halo = { paintOrder: 'stroke', stroke: '#fbfaff', strokeWidth: 4 };
          if (side !== unknownSide) return <text key={side} {...common} style={{ ...trans, ...halo }}>{textOf(side)}</text>;
          return (
            <AnimatePresence mode="wait" key={side}>
              <motion.text key={`${part}-${s.unknownLabel || 'q'}`} {...common}
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
                style={{ ...trans, ...halo }}>{textOf(side)}</motion.text>
            </AnimatePresence>
          );
        })}
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, width: 300, flex: 'none' }}>
        <div style={{ background: '#f2effc', border: '1px solid #ece9fb', borderRadius: 12, padding: '8px 18px', width: '100%', textAlign: 'center', boxSizing: 'border-box' }}>
          <AnimatePresence mode="wait">
            <motion.div key={s.formula} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              <MathView content={`$$${s.formula}$$`} style={{ fontSize: '1.05rem', fontWeight: 700, color: '#5b4b9c' }} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
          {[['a', 'a  Find θ'], ['b', 'b  Find CW']].map(([key, label]) => (
            <button key={key} type="button" onClick={() => pickPart(key)} aria-pressed={part === key}
              style={{
                padding: '6px 14px', borderRadius: 10, fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer', fontFamily: FONT,
                border: `1.5px solid ${part === key ? '#7c3aed' : '#e2e8f0'}`,
                background: part === key ? '#f5f3ff' : '#fff', color: part === key ? '#7c3aed' : '#64748b',
                transition: 'border-color 0.3s ease, background 0.4s ease',
              }}>{label}</button>
          ))}
        </div>

        <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#475569', textAlign: 'center', minHeight: '2.4em' }}>
          <span style={{ fontWeight: 800, color: '#7c3aed' }}>{s.tag}. </span>{s.text}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button onClick={() => goTo(step - 1)} disabled={step === 0} aria-label="Previous step"
            style={{ border: '1.5px solid #e2e8f0', background: '#fff', borderRadius: 8, padding: '5px 9px', cursor: step === 0 ? 'default' : 'pointer', opacity: step === 0 ? 0.4 : 1 }}>
            <ArrowLeft size={14} color="#475569" />
          </button>
          <div style={{ display: 'flex', gap: 4 }}>
            {steps.map((_, i) => (
              <div key={i} onClick={() => goTo(i)} style={{
                width: 6, height: 6, borderRadius: '50%', cursor: 'pointer',
                background: i === step ? '#7c3aed' : '#e2e8f0', transition: 'background 0.2s ease',
              }} />
            ))}
          </div>
          <button onClick={togglePlay} style={{ border: 'none', background: '#7c3aed', color: '#fff', borderRadius: 999, padding: '6px 14px', fontWeight: 700, fontSize: '0.78rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5, fontFamily: FONT }}>
            {playing ? <Pause size={13} /> : <Play size={13} />}{playing ? 'Pause' : (step === total - 1 ? 'Replay' : 'Play')}
          </button>
          <button onClick={() => goTo(step + 1)} disabled={step === total - 1} aria-label="Next step"
            style={{ border: '1.5px solid #e2e8f0', background: '#fff', borderRadius: 8, padding: '5px 9px', cursor: step === total - 1 ? 'default' : 'pointer', opacity: step === total - 1 ? 0.4 : 1 }}>
            <ArrowRight size={14} color="#475569" />
          </button>
        </div>
      </div>
    </div>
  );
};

// ── Worked example — a bearings flight, two nested triangles, one persistent
// scene ───────────────────────────────────────────────────────────────────
// The third worked example had the same split as the previous two — a static
// diagram, then two picture-less algebra steps — PLUS its own bug: the "30°"
// and "100 km" labels sat 5px apart and visibly overlapped. It's also a
// genuinely two-STAGE problem (not one triangle with two questions): leg 1
// (A→B, bearing S30°E, 100 km) forms right triangle P-A-B; leg 2 (B→C, due
// east, 200 km) extends the baseline so P-A-C is a second, bigger right
// triangle sharing the same P and A. Part (a) solves triangle PAB for both
// legs (PB via sin, AP via cos); part (b) uses AP (carried over from a) and
// PC = PB + BC to find the bearing of C via tan. Every length and angle is
// computed from the three real givens (AB, the 30° bearing, BC) — nothing
// is picked independently and re-labelled, which is what caused the label
// mismatches fixed earlier in this file.
const BearingFlightSolver = ({ width = 560, height = 240, ab = 100, bearingDeg1 = 30, bc = 200 }) => {
  const [part, setPart] = useState('a');
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const toRad = (d) => (d * Math.PI) / 180;

  // The three givens; everything else (PB, AP, PC, the angle at A in
  // triangle PAC, and the resulting bearing) is derived from them.
  const pb = ab * Math.sin(toRad(bearingDeg1));
  const ap = ab * Math.cos(toRad(bearingDeg1));
  const pc = pb + bc;
  const angle2Deg = (Math.atan2(pc, ap) * 180) / Math.PI;
  const bearing2Deg = 180 - angle2Deg;

  const STEPS_A = [
    { tag: 'Look at the triangle', known: false,
      formula: `AB = ${fmt(ab)}\\text{ km},\\ \\angle A = ${bearingDeg1}°`,
      text: `The plane flies A→B on a bearing of S${bearingDeg1}°E for ${fmt(ab)} km. Drop a perpendicular from A to the baseline — that point is P — and you get a right triangle.` },
    { tag: 'Mark what’s known', known: true,
      formula: `AB = ${fmt(ab)}\\text{ km},\\ \\angle A = ${bearingDeg1}°`,
      text: `The angle ${bearingDeg1}° and the hypotenuse AB = ${fmt(ab)} km are given — those are known.` },
    { tag: 'Find PB — choose the ratio', known: true, focus: 'pb',
      formula: `\\sin ${bearingDeg1}° = \\dfrac{PB}{AB}`,
      text: `PB is opposite the ${bearingDeg1}° angle, AB is the hypotenuse — the ratio that uses both is sine.` },
    { tag: 'Find PB — solve', known: true, focus: 'pb', answer: 'pb',
      formula: `PB = ${fmt(ab)}\\sin ${bearingDeg1}° = ${fmt(pb)}\\text{ km (east)}`,
      text: `Evaluate: PB = ${fmt(ab)} sin ${bearingDeg1}° = ${fmt(pb)} km — that's how far east of A the point B is.` },
    { tag: 'Find AP — choose the ratio', known: true, focus: 'ap',
      formula: `\\cos ${bearingDeg1}° = \\dfrac{AP}{AB}`,
      text: `AP is adjacent to the ${bearingDeg1}° angle, AB is the hypotenuse — the ratio that uses both is cosine.` },
    { tag: 'Find AP — solve', known: true, focus: 'ap', answer: 'ap',
      formula: `AP = ${fmt(ab)}\\cos ${bearingDeg1}° = 50\\sqrt3\\text{ km (south)}`,
      text: `Evaluate: AP = ${fmt(ab)} cos ${bearingDeg1}° = 50√3 ≈ ${ap.toFixed(1)} km — that's how far south of A the point B is.` },
  ];
  const STEPS_B = [
    { tag: 'Look at the triangle', known: false,
      formula: '\\angle PAC = \\;?',
      text: 'C is further along the same baseline — PC = PB + BC. Triangle PAC has both legs known now; the bearing of C from A is what’s missing.' },
    { tag: 'Mark what’s known', known: true,
      formula: `PC = ${fmt(pb)} + ${fmt(bc)} = ${fmt(pc)}\\text{ km}`,
      text: `AP = 50√3 km (from part a) and PC = PB + BC = ${fmt(pb)} + ${fmt(bc)} = ${fmt(pc)} km — both legs of triangle PAC are now known.` },
    { tag: 'Choose the ratio', known: true,
      formula: '\\tan\\angle PAC = \\dfrac{PC}{AP}',
      text: 'PC is opposite ∠PAC, AP is adjacent to it — the ratio that uses both is tangent.' },
    { tag: 'Substitute', known: true,
      formula: `\\tan\\angle PAC = \\dfrac{${fmt(pc)}}{50\\sqrt3} = \\dfrac{5}{\\sqrt3}`,
      text: 'Put PC and AP into the ratio — it simplifies to 5 over root 3.' },
    { tag: 'Undo the tangent', known: true,
      formula: '\\angle PAC = \\tan^{-1}\\!\\left(\\dfrac{5}{\\sqrt3}\\right)',
      text: 'tan⁻¹ turns that ratio back into the angle.' },
    { tag: 'Solve, then convert to a bearing', known: true, answer: 'angle',
      formula: `\\angle PAC \\approx ${Math.round(angle2Deg)}° \\;\\Rightarrow\\; \\text{bearing} \\approx ${Math.round(bearing2Deg)}°\\text{T}`,
      text: `∠PAC ≈ ${Math.round(angle2Deg)}°. AP points due south from A, so the true bearing of C is measured back toward north: 180° − ${Math.round(angle2Deg)}° ≈ ${Math.round(bearing2Deg)}°T.` },
  ];
  const steps = part === 'a' ? STEPS_A : STEPS_B;
  const total = steps.length;
  const s = steps[step];

  useEffect(() => {
    if (!playing) return undefined;
    if (step >= total - 1) { setPlaying(false); return undefined; }
    const t = setTimeout(() => setStep((n) => n + 1), 2400);
    return () => clearTimeout(t);
  }, [playing, step, total]);

  // Geometry, scaled from the real km values (never the reverse) — the whole
  // scene auto-fits width x height the same way SpecialTriangle does.
  const pad = 50;
  const scale = Math.min((width - 2 * pad) / pc, (height - 2 * pad) / ap);
  const P = [pad, height - pad];
  const A = [pad, height - pad - ap * scale];
  const B = [pad + pb * scale, height - pad];
  const C = [pad + pc * scale, height - pad];
  const known = '#0f9d68', unknown = '#ea580c', neutral = '#94a3b8';
  const trans = { transition: 'stroke 0.4s ease, fill 0.4s ease, opacity 0.4s ease' };

  // Two concentric angle arcs at A: the small "given" 30° (always shown) and
  // the larger ∠PAC (shown only while solving part b) — both swept from the
  // SAME "straight down toward P" reference direction, so they visibly nest.
  const arcPts = (r, toDeg, n = 16) => Array.from({ length: n + 1 }, (_, i) => {
    const t = toRad((toDeg * i) / n);
    return [A[0] + r * Math.sin(t), A[1] + r * Math.cos(t)];
  });
  const arcPath = (pts) => pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ');
  const smallArc = arcPath(arcPts(26, bearingDeg1));
  const bigArc = arcPath(arcPts(46, angle2Deg));
  const smallLabelT = toRad(bearingDeg1 / 2);
  const smallLabelPos = [A[0] + 40 * Math.sin(smallLabelT), A[1] + 40 * Math.cos(smallLabelT)];
  const bigLabelT = toRad(angle2Deg / 2);
  const bigLabelPos = [A[0] + 62 * Math.sin(bigLabelT), A[1] + 62 * Math.cos(bigLabelT)];

  const inPartB = part === 'b';
  // Step indices within STEPS_A: 0 Look, 1 Mark known, 2/3 find PB (choose
  // ratio / solve), 4/5 find AP (choose ratio / solve). Each side turns
  // orange — the "this is what we're solving for" colour used everywhere
  // else in this file — as soon as its own find begins, and STAYS that way
  // for the rest of part a instead of fading back to neutral once attention
  // moves to the other side (the bug this replaced: PB went grey again the
  // moment AP's turn started). In part b both are simply "known" (green),
  // since by then they're established facts feeding the new unknown angle.
  const pbFocused = part === 'a' && step >= 2;
  const pbSolved = inPartB || step >= 3;
  const apFocused = part === 'a' && step >= 4;
  const apSolved = inPartB || step >= 5;
  const pbColor = inPartB ? known : (pbFocused ? unknown : neutral);
  const apColor = inPartB ? known : (apFocused ? unknown : neutral);
  const abColor = known; // given from the very first step, never in question
  const angleColor = s.answer === 'angle' ? known : unknown;

  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 24,
      fontFamily: FONT, background: '#fbfaff', border: '1px solid #ece9fb', borderRadius: 18, padding: '20px 24px',
    }}>
      <svg width={width} height={height} style={{ display: 'block', flex: 'none', overflow: 'visible' }}>
        {/* Baseline: P->B->C, always drawn; colour reflects what's known */}
        <motion.line x1={P[0]} y1={P[1]} x2={B[0]} y2={B[1]} stroke={pbColor} strokeWidth={pbColor === neutral ? 2 : 3.2} style={trans}
          animate={s.answer === 'pb' ? { strokeWidth: [3.2, 4.6, 3.2] } : {}} transition={{ duration: 1, repeat: s.answer === 'pb' ? Infinity : 0 }} />
        <motion.line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} stroke={inPartB ? known : neutral} strokeWidth={inPartB ? 3.2 : 2} style={trans} />
        {/* AP: the south leg */}
        <motion.line x1={P[0]} y1={P[1]} x2={A[0]} y2={A[1]} stroke={apColor} strokeWidth={apColor === neutral ? 2 : 3.2} style={trans}
          animate={s.answer === 'ap' ? { strokeWidth: [3.2, 4.6, 3.2] } : {}} transition={{ duration: 1, repeat: s.answer === 'ap' ? Infinity : 0 }} />
        {/* AB: the first flight leg (given, always known) */}
        <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke={abColor} strokeWidth="3.2" style={trans} />
        {/* AC: the straight-line path — a light reference only */}
        <line x1={A[0]} y1={A[1]} x2={C[0]} y2={C[1]} stroke={neutral} strokeWidth="1.4" strokeDasharray="5 4" />

        <circle cx={A[0]} cy={A[1]} r="4" fill="#1e1b4b" /><text x={A[0] - 10} y={A[1] - 6} fontSize="13" fontWeight="800" fill="#1e1b4b" textAnchor="end">A</text>
        <circle cx={P[0]} cy={P[1]} r="4" fill="#1e1b4b" /><text x={P[0] - 10} y={P[1] + 4} fontSize="12.5" fontWeight="700" fill={neutral} textAnchor="end">P</text>
        <circle cx={B[0]} cy={B[1]} r="4" fill="#1e1b4b" /><text x={B[0]} y={B[1] + 34} fontSize="12.5" fontWeight="700" fill="#1e1b4b" textAnchor="middle">B</text>
        <circle cx={C[0]} cy={C[1]} r="4" fill="#1e1b4b" /><text x={C[0]} y={C[1] + 34} fontSize="12.5" fontWeight="700" fill="#1e1b4b" textAnchor="middle">C</text>

        <path d={smallArc} fill="none" stroke={known} strokeWidth="1.8" />
        <text x={smallLabelPos[0]} y={smallLabelPos[1]} fontSize="12" fontWeight="800" fill={known} textAnchor="middle" dominantBaseline="middle"
          style={{ paintOrder: 'stroke', stroke: '#fbfaff', strokeWidth: 3.5 }}>{bearingDeg1}°</text>
        {inPartB && (
          <>
            <path d={bigArc} fill="none" stroke={angleColor} strokeWidth="1.8" style={trans} />
            <motion.text x={bigLabelPos[0]} y={bigLabelPos[1]} fontSize="12.5" fontWeight="800" fill={angleColor} textAnchor="middle" dominantBaseline="middle"
              style={{ ...trans, paintOrder: 'stroke', stroke: '#fbfaff', strokeWidth: 3.5 }}
              animate={s.answer === 'angle' ? { scale: [1, 1.15, 1] } : {}} transition={{ duration: 1, repeat: s.answer === 'angle' ? Infinity : 0 }}>
              {s.answer === 'angle' ? `${Math.round(angle2Deg)}°` : '∠PAC'}
            </motion.text>
          </>
        )}

        <AnimatePresence mode="wait">
          <motion.text key={`ab-${part}-${step}`} x={(A[0] + B[0]) / 2 + 10} y={(A[1] + B[1]) / 2 - 4} fontSize="12" fontWeight="700" fill={abColor}
            textAnchor="start" initial={{ opacity: 0.7 }} animate={{ opacity: 1 }}
            style={{ paintOrder: 'stroke', stroke: '#fbfaff', strokeWidth: 4 }}>{fmt(ab)} km</motion.text>
        </AnimatePresence>
        <text x={(P[0] + A[0]) / 2 - 10} y={(P[1] + A[1]) / 2} fontSize="12" fontWeight="700" fill={apColor} textAnchor="end" dominantBaseline="middle"
          style={{ ...trans, paintOrder: 'stroke', stroke: '#fbfaff', strokeWidth: 4 }}>{apSolved ? '50√3 km' : 'AP'}</text>
        <AnimatePresence mode="wait">
          <motion.text key={`pb-${part}-${pbSolved}`} x={(P[0] + B[0]) / 2} y={P[1] + 20} fontSize="12" fontWeight="700" fill={pbColor} textAnchor="middle"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}
            style={{ paintOrder: 'stroke', stroke: '#fbfaff', strokeWidth: 4 }}>{pbSolved ? `${fmt(pb)} km` : 'PB'}</motion.text>
        </AnimatePresence>
        {inPartB && (
          <text x={(B[0] + C[0]) / 2} y={P[1] + 20} fontSize="12" fontWeight="700" fill={known} textAnchor="middle"
            style={{ paintOrder: 'stroke', stroke: '#fbfaff', strokeWidth: 4 }}>{fmt(bc)} km</text>
        )}
        {inPartB && (
          <text x={(P[0] + C[0]) / 2} y={P[1] + 42} fontSize="12.5" fontWeight="800" fill={known} textAnchor="middle"
            style={{ paintOrder: 'stroke', stroke: '#fbfaff', strokeWidth: 4 }}>PC = {fmt(pc)} km</text>
        )}
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, width: 300, flex: 'none' }}>
        <div style={{ background: '#f2effc', border: '1px solid #ece9fb', borderRadius: 12, padding: '8px 18px', width: '100%', textAlign: 'center', boxSizing: 'border-box' }}>
          <AnimatePresence mode="wait">
            <motion.div key={s.formula} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              <MathView content={`$$${s.formula}$$`} style={{ fontSize: '1.0rem', fontWeight: 700, color: '#5b4b9c' }} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
          {[['a', 'a  Find PB, AP'], ['b', 'b  Find the bearing']].map(([key, label]) => (
            <button key={key} type="button" onClick={() => { setPlaying(false); setStep(0); setPart(key); }} aria-pressed={part === key}
              style={{
                padding: '6px 12px', borderRadius: 10, fontWeight: 800, fontSize: '0.76rem', cursor: 'pointer', fontFamily: FONT,
                border: `1.5px solid ${part === key ? '#7c3aed' : '#e2e8f0'}`,
                background: part === key ? '#f5f3ff' : '#fff', color: part === key ? '#7c3aed' : '#64748b',
                transition: 'border-color 0.3s ease, background 0.4s ease',
              }}>{label}</button>
          ))}
        </div>

        <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#475569', textAlign: 'center', minHeight: '2.6em' }}>
          <span style={{ fontWeight: 800, color: '#7c3aed' }}>{s.tag}. </span>{s.text}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button onClick={() => { setPlaying(false); setStep(Math.max(0, step - 1)); }} disabled={step === 0} aria-label="Previous step"
            style={{ border: '1.5px solid #e2e8f0', background: '#fff', borderRadius: 8, padding: '5px 9px', cursor: step === 0 ? 'default' : 'pointer', opacity: step === 0 ? 0.4 : 1 }}>
            <ArrowLeft size={14} color="#475569" />
          </button>
          <div style={{ display: 'flex', gap: 4 }}>
            {steps.map((_, i) => (
              <div key={i} onClick={() => { setPlaying(false); setStep(i); }} style={{
                width: 6, height: 6, borderRadius: '50%', cursor: 'pointer',
                background: i === step ? '#7c3aed' : '#e2e8f0', transition: 'background 0.2s ease',
              }} />
            ))}
          </div>
          <button onClick={() => { if (!playing && step === total - 1) setStep(0); setPlaying((p) => !p); }}
            style={{ border: 'none', background: '#7c3aed', color: '#fff', borderRadius: 999, padding: '6px 14px', fontWeight: 700, fontSize: '0.78rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5, fontFamily: FONT }}>
            {playing ? <Pause size={13} /> : <Play size={13} />}{playing ? 'Pause' : (step === total - 1 ? 'Replay' : 'Play')}
          </button>
          <button onClick={() => { setPlaying(false); setStep(Math.min(total - 1, step + 1)); }} disabled={step === total - 1} aria-label="Next step"
            style={{ border: '1.5px solid #e2e8f0', background: '#fff', borderRadius: 8, padding: '5px 9px', cursor: step === total - 1 ? 'default' : 'pointer', opacity: step === total - 1 ? 0.4 : 1 }}>
            <ArrowRight size={14} color="#475569" />
          </button>
        </div>
      </div>
    </div>
  );
};

// ── Lesson recap — the two "same fact, two viewpoints" ideas, live ─────────
// The final recap was two formula lines with no picture: "elevation =
// depression (alternate angles)" and "SθE = (180°−θ°)T". Both are the SAME
// shape of fact — one physical thing, measured from two different reference
// lines, related by a fixed rule — so this puts them on two small live
// diagrams driven by ONE shared angle chip-picker: a Z-shaped alternate-
// angles diagram (the sight line is the transversal between two parallel
// horizontals) and a compass rose (one ray, read as a compass bearing from
// south AND as a true bearing from north). Changing θ moves both at once,
// so the "these always match, for any angle" claim is something a student
// sees happen, not just a formula to accept. Positions transition via plain
// CSS (like AngleCircle/SimilarTrianglesDemo), not framer-motion opacity —
// the reliable choice for a value that changes many times, not just once.
const RECAP_ANGLE_PRESETS = [30, 40, 55];
const LessonRecapScene = () => {
  const [deg, setDeg] = useState(40);
  const rad = (deg * Math.PI) / 180;
  const trans = { transition: 'cx 0.4s ease, cy 0.4s ease, x1 0.4s ease, y1 0.4s ease, x2 0.4s ease, y2 0.4s ease, d 0.4s ease' };
  const purple = '#7c3aed', green = '#059669', neutral = '#94a3b8';

  // Left: alternate-angles ("Z") diagram. Two parallel horizontals a fixed
  // gap apart; the sight line is the transversal. The angle at the bottom
  // (elevation) and the angle at the top (depression), marked on opposite
  // sides of the transversal, are alternate angles — hence always equal.
  const lw = 380, lh = 220, lpad = 40, gap = lh - 2 * lpad;
  const obs = [50, lh - lpad];
  const L = gap / Math.sin(rad);
  const obj = [obs[0] + L * Math.cos(rad), lpad];
  const arcR = 28;
  const botArcTo = [obs[0] + arcR * Math.cos(rad), obs[1] - arcR * Math.sin(rad)];
  const topArcTo = [obj[0] - arcR * Math.cos(rad), obj[1] + arcR * Math.sin(rad)];
  const botLabel = [obs[0] + (arcR + 16) * Math.cos(rad / 2), obs[1] - (arcR + 16) * Math.sin(rad / 2)];
  const topLabel = [obj[0] - (arcR + 16) * Math.cos(rad / 2), obj[1] + (arcR + 16) * Math.sin(rad / 2)];

  // Right: compass rose, one ray at bearing SθE — read from the south (green
  // arc, matches the "S…E" notation) and from the north (purple arc, the
  // true-bearing convention, clockwise from north).
  const cw = 250, ch = 250, cx = cw / 2, cy = ch / 2, R = 84;
  const trueDeg = 180 - deg;
  const toXY = (d) => { const r = (d * Math.PI) / 180; return [cx + R * Math.sin(r), cy - R * Math.cos(r)]; };
  const [rx, ry] = toXY(trueDeg);
  // Arc points at radius r (deliberately smaller than R, the ray's own
  // radius) so the arc reads as an angle marker, not another spoke.
  const compassArc = (fromD, toD, r) => {
    const n = 20;
    return Array.from({ length: n + 1 }, (_, i) => {
      const d = fromD + ((toD - fromD) * i) / n;
      const rr = (d * Math.PI) / 180;
      return [cx + r * Math.sin(rr), cy - r * Math.cos(rr)];
    });
  };
  const pathFrom = (pts) => pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ');
  const southArcPath = pathFrom(compassArc(180, trueDeg, 30));
  const northArcPath = pathFrom(compassArc(0, trueDeg, 50));
  const southLabelPos = toXY(180 - deg / 2).map((v, k) => (k === 0 ? cx + (v - cx) * (44 / R) : cy + (v - cy) * (44 / R)));
  const northLabelPos = toXY(trueDeg / 2).map((v, k) => (k === 0 ? cx + (v - cx) * (64 / R) : cy + (v - cy) * (64 / R)));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, fontFamily: FONT }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start', gap: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <svg width={lw} height={lh} style={{ display: 'block', overflow: 'visible' }}>
            <line x1={obs[0] - 26} y1={obs[1]} x2={lw - 10} y2={obs[1]} stroke={neutral} strokeWidth="1.6" strokeDasharray="5 4" />
            <line x1={10} y1={obj[1]} x2={obj[0] + 26} y2={obj[1]} stroke={neutral} strokeWidth="1.6" strokeDasharray="5 4" />
            <line x1={obs[0]} y1={obs[1]} x2={obj[0]} y2={obj[1]} stroke={purple} strokeWidth="2.6" style={trans} />
            <path d={`M ${obs[0] + arcR} ${obs[1]} A ${arcR} ${arcR} 0 0 0 ${botArcTo[0]} ${botArcTo[1]}`} fill="none" stroke={green} strokeWidth="2" style={trans} />
            <path d={`M ${obj[0] - arcR} ${obj[1]} A ${arcR} ${arcR} 0 0 0 ${topArcTo[0]} ${topArcTo[1]}`} fill="none" stroke={green} strokeWidth="2" style={trans} />
            <text x={botLabel[0]} y={botLabel[1]} fontSize="13" fontWeight="800" fill={green} textAnchor="middle" dominantBaseline="middle" style={{ ...trans, paintOrder: 'stroke', stroke: '#fff', strokeWidth: 4 }}>{deg}°</text>
            <text x={topLabel[0]} y={topLabel[1]} fontSize="13" fontWeight="800" fill={green} textAnchor="middle" dominantBaseline="middle" style={{ ...trans, paintOrder: 'stroke', stroke: '#fff', strokeWidth: 4 }}>{deg}°</text>
            <circle cx={obs[0]} cy={obs[1]} r="4" fill="#1e1b4b" style={trans} /><text x={obs[0]} y={obs[1] + 18} fontSize="12" fontWeight="700" fill="#1e293b" textAnchor="middle">You</text>
            <circle cx={obj[0]} cy={obj[1]} r="4" fill="#1e1b4b" style={trans} /><text x={obj[0]} y={obj[1] - 10} fontSize="12" fontWeight="700" fill="#1e293b" textAnchor="middle" style={trans}>Plane</text>
          </svg>
          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: green, textAlign: 'center' }}>elevation = depression (alternate angles)</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <svg width={cw} height={ch} style={{ display: 'block', overflow: 'visible' }}>
            <line x1={cx} y1={cy - R - 14} x2={cx} y2={cy + R + 14} stroke="#cbd5e1" strokeWidth="1.4" strokeDasharray="4 4" />
            <line x1={cx - R - 14} y1={cy} x2={cx + R + 14} y2={cy} stroke="#cbd5e1" strokeWidth="1.4" strokeDasharray="4 4" />
            <text x={cx} y={cy - R - 18} textAnchor="middle" fontSize="12" fontWeight="800" fill="#475569">N</text>
            <text x={cx} y={cy + R + 26} textAnchor="middle" fontSize="12" fontWeight="800" fill="#475569">S</text>
            <text x={cx + R + 20} y={cy + 4} textAnchor="middle" fontSize="12" fontWeight="800" fill="#475569">E</text>
            <text x={cx - R - 20} y={cy + 4} textAnchor="middle" fontSize="12" fontWeight="800" fill="#475569">W</text>
            <path d={northArcPath} fill="none" stroke={purple} strokeWidth="2" />
            <path d={southArcPath} fill="none" stroke={green} strokeWidth="2" />
            <line x1={cx} y1={cy} x2={rx} y2={ry} stroke="#1e1b4b" strokeWidth="2.6" style={trans} />
            <circle cx={cx} cy={cy} r="4" fill="#1e1b4b" />
            <text x={northLabelPos[0]} y={northLabelPos[1]} fontSize="12" fontWeight="800" fill={purple} textAnchor="middle" dominantBaseline="middle" style={{ ...trans, paintOrder: 'stroke', stroke: '#fff', strokeWidth: 4 }}>{trueDeg}°</text>
            <text x={southLabelPos[0]} y={southLabelPos[1]} fontSize="12" fontWeight="800" fill={green} textAnchor="middle" dominantBaseline="middle" style={{ ...trans, paintOrder: 'stroke', stroke: '#fff', strokeWidth: 4 }}>{deg}°</text>
          </svg>
          <div style={{ fontSize: '0.78rem', fontWeight: 700, textAlign: 'center' }}>
            <span style={{ color: green }}>S{deg}°E</span> <span style={{ color: '#475569' }}>=</span> <span style={{ color: purple }}>{trueDeg}°T</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        {RECAP_ANGLE_PRESETS.map((a) => (
          <button key={a} type="button" onClick={() => setDeg(a)} aria-pressed={deg === a}
            style={{
              padding: '6px 16px', borderRadius: 999, fontWeight: 800, fontSize: '0.82rem', cursor: 'pointer', fontFamily: FONT,
              border: `2px solid ${deg === a ? '#7c3aed' : '#e2e8f0'}`,
              background: deg === a ? '#7c3aed' : '#fff', color: deg === a ? '#fff' : '#64748b',
              transition: 'background 0.3s ease, color 0.3s ease, border-color 0.3s ease',
            }}>θ = {a}°</button>
        ))}
      </div>
    </div>
  );
};

// ── Lesson opener: acute-only triangle → any-angle circle, animated ────────
// The general-angle lesson used to open on a bare "acute angles only -> ANY
// angle" arrow — no picture of either side of that claim. This shows both:
// a small fixed acute-angle triangle (what 6A could do) beside a circle
// whose ray auto-cycles through one example in each quadrant — 40° (acute),
// 130° (obtuse), 220° (reflex), 320° (equivalent to a negative angle) — so
// "any angle" is something seen sweeping all the way round, not just read.
// It's deliberately NOT the draggable version (that's the very next step);
// this is the trailer, not the tool.
const GENERAL_ANGLE_PREVIEWS = [
  { deg: 40, quadrant: 'I — acute' },
  { deg: 130, quadrant: 'II — obtuse' },
  { deg: 220, quadrant: 'III — reflex' },
  { deg: 320, quadrant: 'IV (= −40°)' },
];
const GeneralAngleIntroScene = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % GENERAL_ANGLE_PREVIEWS.length), 2000);
    return () => clearInterval(t);
  }, []);
  const { deg, quadrant } = GENERAL_ANGLE_PREVIEWS[i];
  const rad = (deg * Math.PI) / 180;

  // Left: the fixed acute triangle 6A could handle — built from a chosen
  // 35° so the arc/label can never disagree with the drawn shape, same
  // "angle first, coordinates second" rule used throughout this file.
  const tw = 150, th = 150, tpad = 30;
  const tA = [tpad, th - tpad];
  const tArcR = 22;
  const acuteDeg = 35;
  const acuteRad = (acuteDeg * Math.PI) / 180;
  const tAdj = th - 2 * tpad;
  const tOpp = tAdj * Math.tan(acuteRad);
  const tB2 = [tpad + tAdj, th - tpad];
  const tC2 = [tpad + tAdj, th - tpad - tOpp];
  const tArcTo = [tA[0] + tArcR * Math.cos(acuteRad), tA[1] - tArcR * Math.sin(acuteRad)];

  // Right: circle with a ray that eases (via CSS transition, not a one-shot
  // fade) from one preview angle to the next — reliable for a value that
  // changes repeatedly, the same reasoning as AngleCircle.
  const cw = 220, ch = 220, cx = cw / 2, cy = ch / 2, R = 78;
  const px = cx + R * Math.cos(rad), py = cy - R * Math.sin(rad);
  const transStyle = { transition: 'cx 0.6s ease, cy 0.6s ease, x2 0.6s ease, y2 0.6s ease, d 0.6s ease' };
  const arcN = 24;
  const arcSweep = deg >= 0 ? deg : deg + 360;
  const arcPts = Array.from({ length: arcN + 1 }, (_, k) => {
    const t = (arcSweep * k) / arcN;
    const tr = (t * Math.PI) / 180;
    return [cx + 26 * Math.cos(tr), cy - 26 * Math.sin(tr)];
  });
  const arcPath = arcPts.map((p, k) => `${k === 0 ? 'M' : 'L'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, fontFamily: FONT }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <svg width={tw} height={th} style={{ display: 'block' }}>
            <polygon points={`${tA[0]},${tA[1]} ${tB2[0]},${tB2[1]} ${tC2[0]},${tC2[1]}`} fill="rgba(148,163,184,0.12)" stroke="#94a3b8" strokeWidth="2" />
            <polyline points={`${tB2[0] - 9},${tB2[1]} ${tB2[0] - 9},${tB2[1] - 9} ${tB2[0]},${tB2[1] - 9}`} fill="none" stroke="#94a3b8" strokeWidth="1.4" />
            <path d={`M ${tA[0] + tArcR} ${tA[1]} A ${tArcR} ${tArcR} 0 0 0 ${tArcTo[0]} ${tArcTo[1]}`} fill="none" stroke="#64748b" strokeWidth="1.8" />
            <text x={tA[0] + 30} y={tA[1] - 8} fontSize="12" fontWeight="800" fill="#475569">{acuteDeg}°</text>
          </svg>
          <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#64748b' }}>6A: acute angles only</div>
        </div>

        <div style={{ fontSize: '1.6rem', color: '#c4b5fd', fontWeight: 300 }}>→</div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <svg width={cw} height={ch} style={{ display: 'block' }}>
            <circle cx={cx} cy={cy} r={R} fill="none" stroke="#ddd6fe" strokeWidth="1.6" />
            <line x1={cx - R - 14} y1={cy} x2={cx + R + 14} y2={cy} stroke="#94a3b8" strokeWidth="1.2" />
            <line x1={cx} y1={cy - R - 14} x2={cx} y2={cy + R + 14} stroke="#94a3b8" strokeWidth="1.2" />
            <path d={arcPath} fill="none" stroke="#f59e0b" strokeWidth="2" />
            <line x1={cx} y1={cy} x2={px} y2={py} stroke="#7c3aed" strokeWidth="2.6" style={transStyle} />
            <circle cx={px} cy={py} r="5" fill="#7c3aed" style={transStyle} />
            <circle cx={cx} cy={cy} r="3.5" fill="#1e1b4b" />
          </svg>
          <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#7c3aed' }}>θ = {deg}°</div>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94a3b8' }}>Quadrant {quadrant}</div>
        </div>
      </div>
      <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#7c3aed' }}>6C: ANY angle, any direction</div>
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
  if (item.type === 'row') inner = <div style={{ display: 'flex', gap: 20, flexWrap: 'nowrap', overflowX: 'auto', justifyContent: 'center', alignItems: 'flex-start' }}>{(item.items || []).map((sub, i) => <BoardItem key={i} item={sub} />)}</div>;
  else if (item.type === 'placeValueTable') inner = <PlaceValueTable columns={item.columns} />;
  else if (item.type === 'triangle') inner = <SpecialTriangle {...item} />;
  else if (item.type === 'graph') inner = <div style={{ display: 'flex', justifyContent: 'center' }}><FunctionGraph {...item} /></div>;
  else if (item.type === 'valueTable') inner = <ValueTable rows={item.rows} />;
  else if (item.type === 'trigBoundaryTable') inner = <TrigBoundaryTableInteractive />;
  else if (item.type === 'reciprocalBreakdown') inner = <ReciprocalBreakdownDemo />;
  else if (item.type === 'domainBreakdown') inner = <DomainBreakdownDemo />;
  else if (item.type === 'generalAngleRecap') inner = <GeneralAngleRecap />;
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
  else if (item.type === 'checkpoint') inner = <Checkpoint {...item} />;
  else if (item.type === 'elevationDepression') inner = <ElevationDepressionDiagram {...item} />;
  else if (item.type === 'compassBearing') inner = <CompassBearingDiagram {...item} />;
  else if (item.type === 'angleCircle') inner = <AngleCircle {...item} />;
  else if (item.type === 'similarTriangles') inner = <SimilarTrianglesDemo {...item} />;
  else if (item.type === 'reciprocalRatio') inner = <ReciprocalRatioDemo {...item} />;
  else if (item.type === 'exactValuesExplorer') inner = <ExactValuesExplorer {...item} />;
  else if (item.type === 'unknownSideSolver') inner = <UnknownSideSolver {...item} />;
  else if (item.type === 'unknownAngleSolver') inner = <UnknownAngleSolver {...item} />;
  else if (item.type === 'workedTriangleSolver') inner = <WorkedTriangleSolver {...item} />;
  else if (item.type === 'walkerCliffSolver') inner = <WalkerCliffSolver {...item} />;
  else if (item.type === 'bearingFlightSolver') inner = <BearingFlightSolver {...item} />;
  else if (item.type === 'lessonRecapScene') inner = <LessonRecapScene {...item} />;
  else if (item.type === 'generalAngleIntroScene') inner = <GeneralAngleIntroScene {...item} />;
  else if (item.type === 'primaryRatioRecap') inner = <PrimaryRatioRecap {...item} />;
  else if (item.type === 'introTrigScene') inner = <IntroTrigScene {...item} />;
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
    const stepStart = Date.now();
    const minMs = minDwellMs(stepObj);
    // However narration ends (audio finished, errored, blocked by the
    // browser's autoplay policy, or simply absent), never advance sooner
    // than minMs after the step first appeared.
    const proceed = () => {
      if (!autoRef.current || tokenRef.current !== myToken) return;
      if (isInteractiveStep(stepObj)) { setAuto(false); return; }
      const remaining = minMs - (Date.now() - stepStart);
      advTimer.current = setTimeout(nextOrStop, Math.max(650, remaining));
    };
    const fixedDelay = () => {
      if (!autoRef.current) return;
      if (isInteractiveStep(stepObj)) { setAuto(false); return; }
      const remaining = minMs - (Date.now() - stepStart);
      advTimer.current = setTimeout(nextOrStop, Math.max(3600, remaining));
    };

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
