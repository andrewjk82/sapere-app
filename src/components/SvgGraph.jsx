/**
 * SvgGraph – Premium SVG graph renderer.
 *
 * Replaces JsxGraphDiagram / GeometryRenderer with a zero-dependency,
 * pure-SVG renderer that reads the same graphData.jsxGraph format.
 *
 * Supported element types parsed from `script`:
 *   functiongraph, curve, arrow, axis, point, text, line, segment,
 *   polygon (filled region), integral (shade under a functiongraph)
 *
 * Supported element types from `elements` array:
 *   point (with coords, name, color, label)
 */

import React, { useMemo, useId } from 'react';

/* ═══════════════════════════════════════════════════════════════════
   Premium colour palette
   ═══════════════════════════════════════════════════════════════════ */
const C = {
  bg:         '#fafbfd',
  grid:       '#f1f5f9',
  gridMajor:  '#e2e8f0',
  axis:       '#94a3b8',
  axisLabel:  '#64748b',
  origin:     '#94a3b8',
  label:      '#1e293b',
  // Points
  blue:   '#6366f1',
  red:    '#f43f5e',
  green:  '#10b981',
  orange: '#f59e0b',
  purple: '#8b5cf6',
  slate:  '#64748b',
};

const HEX_RE = /^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i;

/** Expand #rgb → #rrggbb for consistent matching. */
const normalizeHex = (s) => {
  if (!HEX_RE.test(s)) return s;
  if (s.length === 4) {
    return `#${s[1]}${s[1]}${s[2]}${s[2]}${s[3]}${s[3]}`.toLowerCase();
  }
  return s.toLowerCase();
};

const mapColor = (raw) => {
  if (!raw) return C.blue;
  const s = normalizeHex(String(raw).toLowerCase().trim());
  if (s === 'blue'   || s === '#3b82f6' || s === '#1d4ed8' || s === '#2563eb' || s === '#6366f1') return s.startsWith('#') ? s : C.blue;
  if (s === 'red'    || s === '#ef4444' || s === '#f43f5e' || s === '#dc2626') return s.startsWith('#') ? s : C.red;
  if (s === 'green'  || s === '#10b981' || s === '#22c55e' || s === '#15803d' || s === '#16a34a') return s.startsWith('#') ? s : C.green;
  if (s === 'orange' || s === '#f59e0b' || s === '#d97706') return s.startsWith('#') ? s : C.orange;
  if (s === 'purple' || s === '#8b5cf6' || s === '#7c3aed') return s.startsWith('#') ? s : C.purple;
  if (s === 'slate'  || s === 'gray' || s === 'grey' || s === '#64748b' || s === '#94a3b8') return C.slate;
  if (s === 'black'  || s === '#000'  || s === '#000000') return C.axis;
  // Preserve any other hex / named CSS color as-is (do not force blue).
  return raw;
};

const CURVE_PALETTES = {
  blue:   ['#6366f1', '#8b5cf6', '#a78bfa'],
  red:    ['#f43f5e', '#fb7185', '#fda4af'],
  green:  ['#10b981', '#34d399', '#6ee7b7'],
  orange: ['#f59e0b', '#fbbf24', '#fcd34d'],
  purple: ['#8b5cf6', '#a78bfa', '#c4b5fd'],
};

/** Build a 3-stop gradient from a single hex (mid = base, ends slightly lightened via same). */
const solidGradient = (hex) => {
  const c = mapColor(hex);
  return [c, c, c];
};

/**
 * Map strokeColor (name or hex) → gradient stops.
 * Named colours use the premium palette; arbitrary hex is preserved so
 * multi-curve scripts (e.g. blue sin + green tan) stay distinguishable.
 */
const curveGradient = (raw) => {
  const s = normalizeHex(String(raw || '').toLowerCase().trim());
  if (!s) return CURVE_PALETTES.blue;
  if (s === 'red'    || s === '#ef4444' || s === '#f43f5e' || s === '#dc2626') return CURVE_PALETTES.red;
  if (s === 'green'  || s === '#10b981' || s === '#22c55e' || s === '#15803d' || s === '#16a34a') return CURVE_PALETTES.green;
  if (s === 'orange' || s === '#f59e0b' || s === '#d97706') return CURVE_PALETTES.orange;
  if (s === 'purple' || s === '#8b5cf6' || s === '#7c3aed') return CURVE_PALETTES.purple;
  if (s === 'blue'   || s === '#3b82f6' || s === '#1d4ed8' || s === '#2563eb' || s === '#6366f1') return CURVE_PALETTES.blue;
  if (HEX_RE.test(s)) return solidGradient(s);
  // unknown named colour → try as CSS color solid
  return solidGradient(raw);
};

/** Map a simple superscript body (digits/signs/letters) to unicode superscripts. */
const toSuper = (body) => {
  const map = {
    '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
    '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
    '+': '⁺', '-': '⁻', '−': '⁻', 'x': 'ˣ', 'y': 'ʸ', 'n': 'ⁿ',
    'i': 'ⁱ', 'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'e': 'ᵉ',
  };
  return String(body).split('').map((ch) => map[ch] || ch).join('');
};

/** Common vulgar fractions for axis/point labels (SVG text cannot render KaTeX). */
const VULGAR = {
  '1/2': '½',
  '1/3': '⅓',
  '2/3': '⅔',
  '1/4': '¼',
  '3/4': '¾',
  '1/5': '⅕',
  '2/5': '⅖',
  '3/5': '⅗',
  '4/5': '⅘',
  '1/6': '⅙',
  '5/6': '⅚',
  '1/8': '⅛',
  '3/8': '⅜',
  '5/8': '⅝',
  '7/8': '⅞',
};

const toVulgarFraction = (num, den, neg = false) => {
  const key = `${num}/${den}`;
  const body = VULGAR[key] || `${num}/${den}`;
  // Unicode minus looks better next to vulgar fractions than ASCII hyphen
  return (neg ? '−' : '') + body;
};

/**
 * Detect labels that should render as a stacked fraction (exam style \frac{\pi}{6}).
 * Returns { neg, num, den } in display characters, or null.
 * Parsed in PIXEL space so the bar spacing matches KaTeX, not graph y-units.
 */
const parseStackedFraction = (raw) => {
  if (typeof raw !== 'string') return null;
  let s = raw.trim()
    .replace(/\\\(|\\\)|\\\[|\\\]/g, '')
    .replace(/\\pi/gi, 'π')
    .replace(/\$/g, '')
    .trim();
  // Normalize vulgar×π back to π/n so we always stack as π over n
  const vulgarToDen = {
    '½': '2', '⅓': '3', '¼': '4', '⅕': '5', '⅙': '6', '⅛': '8',
    '⅔': '3', '¾': '4', '⅖': '5', '⅗': '5', '⅘': '5', '⅚': '6',
  };
  s = s.replace(/(-?)([½⅓¼⅕⅙⅛⅔¾⅖⅗⅘⅚])π/g, (_, sign, v) => {
    const den = vulgarToDen[v];
    if (!den) return _;
    // ⅔π means 2π/3
    if (v === '⅔') return `${sign}2π/3`;
    if (v === '¾') return `${sign}3π/4`;
    return `${sign}π/${den}`;
  });
  // \frac{\pi}{6} / \dfrac{3\pi}{2} / broken \rac{\pi}{2}
  let m = s.match(/^(-?)\\?[bd]?frac\{(-?)(\d*)π\}\{(\d+)\}$/i)
    || s.match(/^(-?)\\?rac\{(-?)(\d*)π\}\{(\d+)\}$/i);
  if (m) {
    const neg = m[1] === '-' || m[2] === '-';
    const coef = m[3] === '' ? '' : m[3];
    return { neg, num: coef === '' || coef === '1' ? 'π' : `${coef}π`, den: m[4] };
  }
  // π/6, -π/2, 3π/2, 2π/3
  m = s.match(/^(-?)(\d*)π\/(\d+)$/);
  if (m) {
    const neg = m[1] === '-';
    const coef = m[2];
    return { neg, num: !coef || coef === '1' ? 'π' : `${coef}π`, den: m[3] };
  }
  // plain 1/2, -3/4 (digits only) — stack too
  m = s.match(/^(-?)(\d+)\/(\d+)$/);
  if (m) {
    return { neg: m[1] === '-', num: m[2], den: m[3] };
  }
  return null;
};

/** Compact KaTeX-like stacked fraction in screen pixels. */
const StackedFracLabel = ({ x, y, neg, num, den, color, fontSize = 12 }) => {
  const fs = fontSize;
  // Width of bar ≈ max glyph width; π is wide
  const barW = Math.max(fs * (String(num).includes('π') ? 0.95 : 0.75), 9);
  return (
    <g transform={`translate(${x}, ${y})`} style={{ pointerEvents: 'none' }}>
      {neg && (
        <text
          x={-barW / 2 - 3}
          y={fs * 0.2}
          textAnchor="end"
          fill={color}
          fontSize={fs}
          fontWeight={600}
          fontFamily={FONT}
        >
          −
        </text>
      )}
      <text
        x={0}
        y={-fs * 0.42}
        textAnchor="middle"
        fill={color}
        fontSize={fs}
        fontWeight={600}
        fontFamily={FONT}
      >
        {num}
      </text>
      <line
        x1={-barW / 2}
        y1={fs * 0.02}
        x2={barW / 2}
        y2={fs * 0.02}
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap="round"
      />
      <text
        x={0}
        y={fs * 0.95}
        textAnchor="middle"
        fill={color}
        fontSize={fs}
        fontWeight={600}
        fontFamily={FONT}
      >
        {den}
      </text>
    </g>
  );
};

const formatLabel = (str) => {
  if (typeof str !== 'string') return str;
  // If the whole label is a stackable fraction, leave raw for StackedFracLabel
  if (parseStackedFraction(str)) return str;
  return str
    .replace(/\^\\circ/g, '°')
    .replace(/\\circ/g, '°')
    .replace(/\\alpha/g, 'α')
    .replace(/\\beta/g, 'β')
    .replace(/\\gamma/g, 'γ')
    .replace(/\\theta/g, 'θ')
    .replace(/\\pi/g, 'π')
    // Strip math delimiters early so inner tokens convert cleanly
    .replace(/\\\(|\\\)|\\\[|\\\]/g, '')
    // LaTeX fractions with digit num/den: \frac{1}{2}, \dfrac{-1}{2}
    .replace(/-?\\[bd]?frac\{-?(\d+)\}\{(\d+)\}/g, (m, a, b) =>
      toVulgarFraction(a, b, /^-|\\-/.test(m) || m.includes('{-'))
    )
    // Plain ASCII fractions: -1/2, 1/2 (inline, not full-label stack)
    .replace(/(^|[^0-9π])(-?)(\d+)\/(\d+)(?![0-9])/g, (_, pre, sign, a, b) =>
      pre + toVulgarFraction(a, b, sign === '-')
    )
    // ASCII hyphen before π / vulgar fractions
    .replace(/-(?=[½⅓⅔¼¾⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞π\d])/g, '−')
    // ^{...} then bare ^token (e.g. e^x, e^{-x})
    .replace(/\^\{([^}]+)\}/g, (_, body) => toSuper(body))
    .replace(/\^(-?\d+)/g, (_, body) => toSuper(body))
    .replace(/\^([A-Za-z])/g, (_, body) => toSuper(body))
    .replace(/\^2/g, '²')
    .replace(/\^3/g, '³')
    .replace(/\\sqrt/g, '√')
    .replace(/√\{([^}]+)\}/g, '√$1')
    .replace(/\\ln\b/g, 'ln')
    .replace(/\\log\b/g, 'log')
    .replace(/\\/g, '') // remove leftover backslashes
    .replace(/\$+/g, '')
    .replace(/[{}]/g, '');
};


/* ═══════════════════════════════════════════════════════════════════
   Component
   ═══════════════════════════════════════════════════════════════════ */
const SvgGraph = ({ data }) => {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');

  /* ── Bounding box & transforms ── */
  const bbox = data.boundingbox || [-6, 6, 6, -6];
  const [xMin, yMax, xMax, yMin] = bbox;
  // Size the canvas from the data aspect ratio so wide/short plots (e.g. bell
  // curves) are not forced into a tall square with huge empty bands.
  const bbW = Math.max(Math.abs(xMax - xMin), 1e-6);
  const bbH = Math.max(Math.abs(yMax - yMin), 1e-6);
  const aspect = bbW / bbH;
  const explicitW = Number(data.width);
  const explicitH = Number(data.height);
  let W = Number.isFinite(explicitW) && explicitW > 0 ? explicitW : 340;
  let H = Number.isFinite(explicitH) && explicitH > 0 ? explicitH : 340;
  if (!(Number.isFinite(explicitW) && explicitW > 0 && Number.isFinite(explicitH) && explicitH > 0)) {
    // Match canvas aspect to the data box so wide plots (bell curves, etc.)
    // are not forced into a tall square with empty bands.
    if (!(Number.isFinite(explicitW) && explicitW > 0)) W = 360;
    if (!(Number.isFinite(explicitH) && explicitH > 0)) {
      // Prefer data aspect; clamp only enough to keep labels usable.
      const rawH = W / aspect;
      H = Math.round(Math.min(260, Math.max(140, rawH)));
    }
    if (!(Number.isFinite(explicitW) && explicitW > 0) && aspect < 0.85) {
      W = Math.round(Math.min(320, Math.max(160, H * aspect)));
    }
  }
  const pad = 22;

  const toX = (x) => pad + ((x - xMin) / (xMax - xMin)) * (W - 2 * pad);
  const toY = (y) => pad + ((yMax - y) / (yMax - yMin)) * (H - 2 * pad);

  /* ── Collect drawable items from script + elements ── */
  const items = useMemo(() => {
    const list = [];

    // 1. Execute script with a mock board
      if (typeof data.script === 'string' && data.script.trim()) {
        const board = {
          // Support both JSXGraph styles:
          //   create('text', [x, y, 'label'], attrs)
          //   create('text', [x, y], 'label', attrs)   ← common in our seeds
          create: (type, parents, attrs = {}, maybeAttrs) => {
            const t = String(type).toLowerCase();
            let p = Array.isArray(parents) ? parents.slice() : parents || [];
            let a = attrs;
            if (
              (t === 'text' || t === 'point') &&
              typeof attrs === 'string' &&
              Array.isArray(p)
            ) {
              // create('text', [x,y], 'label', {…}) or create('point', [x,y], 'name', {…})
              if (t === 'text' && p.length === 2) {
                p = [p[0], p[1], attrs];
              } else if (t === 'point' && p.length >= 2) {
                a = { ...(typeof maybeAttrs === 'object' && maybeAttrs ? maybeAttrs : {}), name: attrs };
                // keep parents as [x,y]
              }
              if (t === 'text') {
                a = typeof maybeAttrs === 'object' && maybeAttrs ? maybeAttrs : {};
              }
            } else if (typeof attrs !== 'object' || attrs === null) {
              a = {};
            }
            const entry = { src: 'script', type: t, parents: p || [], attrs: a || {} };
            list.push(entry);
            const mock = { _type: t, _explicit: true, _entry: entry };
            if (t === 'point' && Array.isArray(p)) {
              mock.X = () => p[0];
              mock.Y = () => p[1];
              mock.coords = { usrCoords: [1, p[0], p[1]] };
            }
            if (t === 'functiongraph' || t === 'curve') {
              mock._fn = typeof p?.[0] === 'function' ? p[0] : null;
              mock._dMin = p?.[1];
              mock._dMax = p?.[2];
            }
            return mock;
          },
          suspendUpdate() {},
          unsuspendUpdate() {},
          options: { point: {} },
          objects: {},
        };
        try {
          // Simply run the script as a function without double backslash preprocessing
          // which can eat math backslashes and corrupt LaTeX expressions.
          const executeScript = new Function('board', 'JXG', data.script);
          executeScript(board, { Math });
        } catch (e) {
          console.warn('[SvgGraph] script error:', e);
        }
      }

    // 2. Elements array (typically points with labels)
    if (Array.isArray(data.elements)) {
      data.elements.forEach(el => {
        if (el) list.push({ src: 'elements', ...el });
      });
    }
    return list;
  }, [data.script, data.elements]);

  /* ── Categorise ── */
  const arrows   = [];
  const curves   = [];
  const lines    = [];
  const sPoints  = [];   // script points
  const sTexts   = [];   // script texts
  const ePoints  = [];   // element points
  const polygons = [];   // filled regions
  const integrals = [];  // shade under curve: parents [[a,b], curveRef]

  // Resolve mock refs created in script (functiongraph returns mock object)
  const mockCurves = [];

  items.forEach(it => {
    if (it.src === 'elements') { if (it.type === 'point') ePoints.push(it); return; }
    switch (it.type) {
      case 'functiongraph': case 'curve': curves.push(it); break;
      case 'arrow': case 'axis':         arrows.push(it); break;
      case 'line': case 'segment':       lines.push(it);  break;
      case 'point':                      sPoints.push(it); break;
      case 'text':                       sTexts.push(it);  break;
      case 'polygon':                    polygons.push(it); break;
      case 'integral':                   integrals.push(it); break;
      default: break;
    }
  });

  /* ── Axis detection ── */
  const isXAxis = (a) => {
    const p = a.parents;
    return p[0] && p[1] && Math.abs(p[0][1]) < 0.01 && Math.abs(p[1][1]) < 0.01;
  };
  const isYAxis = (a) => {
    const p = a.parents;
    return p[0] && p[1] && Math.abs(p[0][0]) < 0.01 && Math.abs(p[1][0]) < 0.01;
  };
  const hasX = arrows.some(isXAxis);
  const hasY = arrows.some(isYAxis);
  const dy = yMax - yMin;
  const showLabels = data.showAxisLabels !== false && dy >= 3;
  // Explicit showGrid wins; otherwise only draw grid when axes are present
  // (function plots). Geometry-only diagrams (segments, no arrows) stay clean.
  const showGrid = data.showGrid != null ? !!data.showGrid : (hasX || hasY);

  /* ── Curve paths ── */
  const curvePaths = curves.map((c, idx) => {
    if (c.type === 'functiongraph' && typeof c.parents[0] === 'function') {
      const fn    = c.parents[0];
      const dMin  = c.parents[1] ?? xMin;
      const dMax  = c.parents[2] ?? xMax;
      const N     = 400;
      const step  = (dMax - dMin) / N;
      let d = '', prev = false;

      for (let i = 0; i <= N; i++) {
        const x  = dMin + i * step;
        const y  = fn(x);
        const sx = toX(x);
        const sy = toY(y);
        const ok = sy >= -30 && sy <= H + 30;
        if (ok) {
          d += prev
            ? ` L${sx.toFixed(1)},${sy.toFixed(1)}`
            : ` M${sx.toFixed(1)},${sy.toFixed(1)}`;
          prev = true;
        } else {
          prev = false;
        }
      }
      return {
        d: d.trim(),
        grad: curveGradient(c.attrs.strokeColor),
        w: Math.min(c.attrs.strokeWidth || 2.5, 3),
        dash: c.attrs.dash ? '6 4' : undefined,
        idx,
      };
    }
    return null;
  }).filter(Boolean);

  /* ── Filled polygons: parents = [[x,y], ...] or array of point coords ── */
  const polyPaths = polygons.map((p, idx) => {
    const pts = (p.parents || []).map((pt) => {
      if (Array.isArray(pt) && pt.length >= 2) return [pt[0], pt[1]];
      if (pt && typeof pt.X === 'function') return [pt.X(), pt.Y()];
      return null;
    }).filter(Boolean);
    if (pts.length < 3) return null;
    const d = pts.map((pt, i) => `${i === 0 ? 'M' : 'L'}${toX(pt[0]).toFixed(1)},${toY(pt[1]).toFixed(1)}`).join(' ') + ' Z';
    const fill = mapColor(p.attrs.fillColor || p.attrs.color || '#93c5fd');
    const opacity = p.attrs.fillOpacity != null ? Number(p.attrs.fillOpacity) : 0.35;
    return { d, fill, opacity, idx };
  }).filter(Boolean);

  /* ── Integral shade under a function: parents [[a,b], curveMock] ── */
  const integralPaths = integrals.map((it, idx) => {
    const lim = it.parents?.[0];
    const curveRef = it.parents?.[1];
    if (!Array.isArray(lim) || lim.length < 2) return null;
    const a = Number(lim[0]);
    const b = Number(lim[1]);
    let fn = null;
    if (curveRef && typeof curveRef._fn === 'function') fn = curveRef._fn;
    else if (typeof curveRef === 'function') fn = curveRef;
    else if (curves[0] && typeof curves[0].parents?.[0] === 'function') fn = curves[0].parents[0];
    if (!fn || !Number.isFinite(a) || !Number.isFinite(b)) return null;
    const N = 120;
    const step = (b - a) / N;
    let d = `M${toX(a).toFixed(1)},${toY(0).toFixed(1)}`;
    for (let i = 0; i <= N; i++) {
      const x = a + i * step;
      let y = 0;
      try { y = fn(x); } catch { y = 0; }
      if (!Number.isFinite(y)) y = 0;
      d += ` L${toX(x).toFixed(1)},${toY(y).toFixed(1)}`;
    }
    d += ` L${toX(b).toFixed(1)},${toY(0).toFixed(1)} Z`;
    const fill = mapColor(it.attrs.fillColor || '#93c5fd');
    const opacity = it.attrs.fillOpacity != null ? Number(it.attrs.fillOpacity) : 0.4;
    return { d, fill, opacity, idx };
  }).filter(Boolean);

  /* ═══════════════════════════════════════════════════════════════════
     Render
     ═══════════════════════════════════════════════════════════════════ */
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '4px 0', lineHeight: 0 }}>
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}
        style={{
          borderRadius: 12,
          background: C.bg,
          overflow: 'hidden',
          maxWidth: '100%',
          height: 'auto',
          display: 'block',
        }}>

        {/* ── Defs ── */}
        <defs>
          {curvePaths.map(cp => (
            <linearGradient key={`g${cp.idx}`} id={`cg${uid}${cp.idx}`}
              x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"  stopColor={cp.grad[0]} />
              <stop offset="50%" stopColor={cp.grad[1]} />
              <stop offset="100%" stopColor={cp.grad[2]} />
            </linearGradient>
          ))}
          <marker id={`ae${uid}`} markerWidth="8" markerHeight="6"
            refX="7" refY="3" orient="auto">
            <polygon points="0 0,8 3,0 6" fill={C.axis} />
          </marker>
          <marker id={`as${uid}`} markerWidth="8" markerHeight="6"
            refX="1" refY="3" orient="auto-start-reverse">
            <polygon points="8 0,0 3,8 6" fill={C.axis} />
          </marker>
        </defs>

        {/* ── Grid ── */}
        {showGrid && range(Math.ceil(xMin), Math.floor(xMax)).map(x => (
          <line key={`gx${x}`} x1={toX(x)} y1={pad} x2={toX(x)} y2={H - pad}
            stroke={x === 0 ? C.gridMajor : C.grid} strokeWidth={0.8} />
        ))}
        {showGrid && range(Math.ceil(yMin), Math.floor(yMax)).map(y => (
          <line key={`gy${y}`} x1={pad} y1={toY(y)} x2={W - pad} y2={toY(y)}
            stroke={y === 0 ? C.gridMajor : C.grid} strokeWidth={0.8} />
        ))}

        {/* ── Axes (double-headed arrows spanning bounding box) ── */}
        {hasX && (
          <line x1={pad - 2} y1={toY(0)} x2={W - pad + 4} y2={toY(0)}
            stroke={C.axis} strokeWidth={1.4}
            markerStart={`url(#as${uid})`} markerEnd={`url(#ae${uid})`} />
        )}
        {hasY && (
          <line x1={toX(0)} y1={H - pad + 2} x2={toX(0)} y2={pad - 4}
            stroke={C.axis} strokeWidth={1.4}
            markerStart={`url(#as${uid})`} markerEnd={`url(#ae${uid})`} />
        )}

        {/* ── Tick marks ── */}
        {hasX && range(Math.ceil(xMin), Math.floor(xMax)).filter(x => x !== 0).map(x => (
          <line key={`tx${x}`} x1={toX(x)} y1={toY(0) - 3} x2={toX(x)} y2={toY(0) + 3}
            stroke={C.axis} strokeWidth={0.8} />
        ))}
        {hasY && range(Math.ceil(yMin), Math.floor(yMax)).filter(y => y !== 0).map(y => (
          <line key={`ty${y}`} x1={toX(0) - 3} y1={toY(y)} x2={toX(0) + 3} y2={toY(y)}
            stroke={C.axis} strokeWidth={0.8} />
        ))}

        {/* ── Axis labels ── */}
        {showLabels && hasX && (
          <text x={W - pad + 2} y={toY(0) + 16} fill={C.axisLabel}
            fontSize={12} fontWeight={600} fontFamily={FONT}>x</text>
        )}
        {showLabels && hasY && (
          <text x={toX(0) - 14} y={pad - 4} fill={C.axisLabel}
            fontSize={12} fontWeight={600} fontFamily={FONT}>y</text>
        )}
        {showLabels && (hasX || hasY) && (
          <text x={toX(0) - 13} y={toY(0) + 15} fill={C.origin}
            fontSize={11} fontWeight={600} fontFamily={FONT}>O</text>
        )}

        {/* ── Lines / Segments ── */}
        {lines.map((ln, i) => {
          const p = ln.parents;
          if (!p[0] || !p[1]) return null;
          return (
            <line key={`ln${i}`}
              x1={toX(p[0][0])} y1={toY(p[0][1])}
              x2={toX(p[1][0])} y2={toY(p[1][1])}
              stroke={mapColor(ln.attrs.strokeColor)}
              strokeWidth={ln.attrs.strokeWidth || 1.5}
              strokeDasharray={ln.attrs.dash ? '6 3' : undefined} />
          );
        })}

        {/* ── Shaded regions (under curves / polygons) — draw before strokes ── */}
        {polyPaths.map((pp) => (
          <path key={`poly${pp.idx}`} d={pp.d}
            fill={pp.fill} fillOpacity={pp.opacity}
            stroke="none" />
        ))}
        {integralPaths.map((ip) => (
          <path key={`int${ip.idx}`} d={ip.d}
            fill={ip.fill} fillOpacity={ip.opacity}
            stroke="none" />
        ))}

        {/* ── Curves (glow + gradient) ── */}
        {curvePaths.map(cp => (
          <g key={`c${cp.idx}`}>
            <path d={cp.d} fill="none" stroke={cp.grad[1]}
              strokeWidth={cp.w * 3} strokeOpacity={0.12}
              strokeLinecap="round" strokeLinejoin="round"
              strokeDasharray={cp.dash} />
            <path d={cp.d} fill="none" stroke={`url(#cg${uid}${cp.idx})`}
              strokeWidth={cp.w} strokeLinecap="round" strokeLinejoin="round"
              strokeDasharray={cp.dash} />
          </g>
        ))}

        {/* ── Script texts ── */}
        {sTexts.map((t, i) => {
          const p = t.parents;
          // Prefer parents [x,y,label]; fall back to attrs.text / attrs.name
          const label =
            (p && p.length >= 3 && p[2] != null && p[2] !== '')
              ? String(p[2])
              : (t.attrs?.text ?? t.attrs?.name ?? '');
          if (!p || p.length < 2 || !label) return null;
          const color = mapColor(t.attrs.strokeColor || t.attrs.color || t.attrs.fillColor);
          const fontSize = t.attrs.fontSize || 12;
          const sx = toX(p[0]);
          const sy = toY(p[1]);
          // Stacked exam-style fraction (π over 6), tight pixel spacing like KaTeX
          const stacked = parseStackedFraction(String(label));
          if (stacked) {
            return (
              <StackedFracLabel
                key={`st${i}`}
                x={sx}
                y={sy}
                neg={stacked.neg}
                num={stacked.num}
                den={stacked.den}
                color={color}
                fontSize={fontSize}
              />
            );
          }
          return (
            <text key={`st${i}`} x={sx} y={sy}
              fill={color}
              fontSize={fontSize} fontWeight={t.attrs.fontWeight || 500}
              fontFamily={FONT}>{formatLabel(String(label))}</text>
          );
        })}

        {/* ── Element points (labelled intercepts etc.) ── */}
        {ePoints.map((pt, i) => {
          const [px, py] = pt.coords || [0, 0];
          const sx = toX(px), sy = toY(py);
          const isYInt = Math.abs(px) < 0.01 && Math.abs(py) > 0.01;
          const color = isYInt ? C.red : mapColor(pt.color);
          const off = pt.label?.offset || [10, 8];

          return (
            <g key={`ep${i}`}>
              <circle cx={sx} cy={sy} r={9} fill={color} fillOpacity={0.12} />
              <circle cx={sx} cy={sy} r={4.5} fill={color} stroke="#fff" strokeWidth={2} />
              {pt.name && (
                <text x={sx + off[0]} y={sy - off[1]}
                  fill={isYInt ? '#be123c' : C.label}
                  fontSize={13} fontWeight={700} fontFamily={FONT}
                  textAnchor={off[0] < 0 ? 'end' : 'start'}>
                  {formatLabel(pt.name)}
                </text>
              )}
            </g>
          );
        })}

        {/* ── Script points ── */}
        {sPoints.filter(p => p.attrs.visible !== false).map((pt, i) => {
          const p = pt.parents;
          if (!p || p.length < 2) return null;
          const sx = toX(p[0]), sy = toY(p[1]);
          const color = mapColor(pt.attrs.strokeColor || pt.attrs.color || pt.attrs.fillColor);
          return (
            <g key={`sp${i}`}>
              <circle cx={sx} cy={sy} r={8} fill={color} fillOpacity={0.12} />
              <circle cx={sx} cy={sy} r={4} fill={color} stroke="#fff" strokeWidth={2} />
              {pt.attrs.name && (
                <text x={sx + 10} y={sy - 8} fill={C.label}
                  fontSize={12} fontWeight={600} fontFamily={FONT}>
                  {formatLabel(pt.attrs.name)}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

/* ── Helpers ── */
const FONT = '"Outfit","Inter",sans-serif';
const range = (from, to) => {
  const arr = [];
  for (let i = from; i <= to; i++) arr.push(i);
  return arr;
};

export default SvgGraph;
