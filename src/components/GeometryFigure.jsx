/**
 * Declarative geometry renderer.
 *
 * Instead of hand-written JSXGraph scripts (error-prone, hard for an LLM to
 * get right), a figure is described as plain JSON data: a set of named points
 * with coordinates, plus the segments / angle marks / tick marks to draw on
 * them. This renderer turns that data into a deterministic SVG.
 *
 * Schema (all under graphData.geometry):
 *   points:      { "P": [x, y], "Q": [x, y], ... }   // any math coords
 *   segments:    [ { from, to, ticks?, marks?, dashed?, arrow? } ]
 *                  ticks  = N short cross-strokes (equal-length notation)
 *                  marks  = N chevrons along the line (parallel notation)
 *                  arrow  = true → arrowhead at `to`
 *   angles:      [ { at, label } ]                    // label drawn just
 *                  inside the figure at vertex `at`
 *   sideLabels:  [ { between: [a, b], text, side? } ] // text on a segment;
 *                  side "out" (default) or "in"
 */
const GeometryFigure = ({
  points = {},
  segments = [],
  angles = [],
  sideLabels = [],
  freeLabels = [],
  showPointLabels = true,
  width = 300,
  style,
}) => {
  const names = Object.keys(points);
  if (names.length === 0) return null;

  const xs = names.map((n) => points[n][0]);
  const ys = names.map((n) => points[n][1]);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const spanX = maxX - minX || 1;
  const spanY = maxY - minY || 1;

  const pad = 48;
  const inner = width - pad * 2;
  const scale = inner / Math.max(spanX, spanY);
  const drawW = spanX * scale + pad * 2;
  const drawH = spanY * scale + pad * 2;

  // math coords → svg coords (y flipped)
  const P = (n) => {
    const p = points[n];
    if (!p) return [0, 0];
    return [(p[0] - minX) * scale + pad, (maxY - p[1]) * scale + pad];
  };

  // centroid in svg space — used to push labels inward/outward
  const cx = names.reduce((s, n) => s + P(n)[0], 0) / names.length;
  const cy = names.reduce((s, n) => s + P(n)[1], 0) / names.length;

  const norm = (dx, dy) => {
    const len = Math.hypot(dx, dy) || 1;
    return [dx / len, dy / len];
  };

  const els = [];
  let key = 0;

  // --- Segments ---------------------------------------------------------
  segments.forEach((seg) => {
    const [ax, ay] = P(seg.from);
    const [bx, by] = P(seg.to);
    els.push(
      <line
        key={`s${key++}`}
        x1={ax} y1={ay} x2={bx} y2={by}
        stroke="#1e3a5f" strokeWidth="2.2"
        strokeDasharray={seg.dashed ? '6 4' : undefined}
        strokeLinecap="round"
      />
    );

    const [ux, uy] = norm(bx - ax, by - ay);   // along
    const [px, py] = [-uy, ux];                // perpendicular
    const mx = (ax + bx) / 2;
    const my = (ay + by) / 2;

    // equal-length tick marks
    if (seg.ticks) {
      const n = seg.ticks;
      for (let i = 0; i < n; i++) {
        const off = (i - (n - 1) / 2) * 6;
        const tx = mx + ux * off;
        const ty = my + uy * off;
        els.push(
          <line
            key={`t${key++}`}
            x1={tx + px * 6} y1={ty + py * 6}
            x2={tx - px * 6} y2={ty - py * 6}
            stroke="#1e3a5f" strokeWidth="2"
          />
        );
      }
    }

    // parallel chevron marks
    if (seg.marks) {
      const n = seg.marks;
      for (let i = 0; i < n; i++) {
        const off = (i - (n - 1) / 2) * 7;
        const tipx = mx + ux * (off + 4);
        const tipy = my + uy * (off + 4);
        const bx1 = mx + ux * (off - 4) + px * 5;
        const by1 = my + uy * (off - 4) + py * 5;
        const bx2 = mx + ux * (off - 4) - px * 5;
        const by2 = my + uy * (off - 4) - py * 5;
        els.push(
          <polyline
            key={`m${key++}`}
            points={`${bx1},${by1} ${tipx},${tipy} ${bx2},${by2}`}
            fill="none" stroke="#1e3a5f" strokeWidth="2"
          />
        );
      }
    }

    // arrowhead at `to`
    if (seg.arrow) {
      const hx = bx;
      const hy = by;
      const a1x = hx - ux * 11 + px * 6;
      const a1y = hy - uy * 11 + py * 6;
      const a2x = hx - ux * 11 - px * 6;
      const a2y = hy - uy * 11 - py * 6;
      els.push(
        <polyline
          key={`a${key++}`}
          points={`${a1x},${a1y} ${hx},${hy} ${a2x},${a2y}`}
          fill="none" stroke="#1e3a5f" strokeWidth="2.2"
        />
      );
    }
  });

  // --- Angle marks / labels --------------------------------------------
  angles.forEach((ang) => {
    const [vx, vy] = P(ang.at);
    const [dx, dy] = norm(cx - vx, cy - vy);   // toward interior
    if (ang.label) {
      els.push(
        <text
          key={`al${key++}`}
          x={vx + dx * 26} y={vy + dy * 26 + 5}
          textAnchor="middle" fill="#1e3a5f"
          fontSize="15" fontStyle="italic"
        >
          {ang.label}
        </text>
      );
    }
  });

  // --- Side labels ------------------------------------------------------
  sideLabels.forEach((sl) => {
    const [ax, ay] = P(sl.between[0]);
    const [bx, by] = P(sl.between[1]);
    const mx = (ax + bx) / 2;
    const my = (ay + by) / 2;
    const [ux, uy] = norm(bx - ax, by - ay);
    let [px, py] = [-uy, ux];
    // default: push label to the OUTSIDE of the figure
    const towardOut = (mx + px - cx) ** 2 + (my + py - cy) ** 2;
    const towardIn = (mx - px - cx) ** 2 + (my - py - cy) ** 2;
    const outward = sl.side === 'in' ? towardOut < towardIn : towardOut > towardIn;
    if (!outward) { px = -px; py = -py; }
    els.push(
      <text
        key={`sl${key++}`}
        x={mx + px * 16} y={my + py * 16 + 5}
        textAnchor="middle" fill="#1e3a5f" fontSize="14"
      >
        {sl.text}
      </text>
    );
  });

  freeLabels.forEach((label) => {
    const pt = Array.isArray(label.point) ? label.point : [label.x, label.y];
    const x = ((Number(pt[0]) || 0) - minX) * scale + pad;
    const y = (maxY - (Number(pt[1]) || 0)) * scale + pad;
    els.push(
      <text
        key={`fl${key++}`}
        x={x} y={y}
        textAnchor="middle"
        fill={label.color || '#0369a1'}
        fontSize={label.fontSize || 15}
        fontStyle={label.italic === false ? 'normal' : 'italic'}
      >
        {label.text}
      </text>
    );
  });

  // --- Vertex name labels (drawn last, on top) -------------------------
  names.forEach((n) => {
    const [vx, vy] = P(n);
    if (showPointLabels !== false) {
      const [dx, dy] = norm(vx - cx, vy - cy);   // outward
      els.push(
        <text
          key={`v${key++}`}
          x={vx + dx * 16} y={vy + dy * 16 + 5}
          textAnchor="middle" fill="#475569"
          fontSize="14" fontStyle="italic" fontWeight="600"
        >
          {n}
        </text>
      );
    }
    els.push(
      <circle key={`vd${key++}`} cx={vx} cy={vy} r="2.6" fill="#1e3a5f" />
    );
  });

  return (
    <div
      style={{
        display: 'flex', justifyContent: 'center',
        padding: '12px', background: '#fff',
        borderRadius: '14px', border: '1px solid #e2e8f0',
        marginTop: '8px', ...style,
      }}
    >
      <svg width={drawW} height={drawH} viewBox={`0 0 ${drawW} ${drawH}`}
        style={{ overflow: 'visible' }}>
        {els}
      </svg>
    </div>
  );
};

export default GeometryFigure;
