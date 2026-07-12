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
 *   shadedPolygons: [ { points: ["A","B","C",...], color?, opacity? } ]
 *                  Shaded filled regions. List multiple polygons in one entry
 *                  to shade between them (uses SVG evenodd fill rule so the
 *                  inner polygon is cut out — useful for donut/frame regions).
 *                  color defaults to "#94a3b8", opacity defaults to 0.35.
 *   circles:     [ { center: "O", through: "A", radius?, color?, dashed?, filled?, fillOpacity? } ]
 *                  Draws a circle centered at `center`. Radius is determined by the distance to `through` or explicitly via `radius` in data units.
 */

const formatLabel = (str) => {
  if (typeof str !== 'string') return str;
  return str
    .replace(/\^\\circ/g, '°')
    .replace(/\\circ/g, '°')
    .replace(/\\alpha/g, 'α')
    .replace(/\\beta/g, 'β')
    .replace(/\\gamma/g, 'γ')
    .replace(/\\theta/g, 'θ')
    .replace(/\\pi/g, 'π')
    .replace(/\^2/g, '²')
    .replace(/\^3/g, '³')
    .replace(/\\sqrt/g, '√')
    .replace(/√\{([^}]+)\}/g, '√$1')
    .replace(/\\/g, '') // remove trailing backslashes if any
    .replace(/\$+/g, '');
};

const GeometryFigure = ({

  points = {},
  segments = [],
  angles = [],
  sideLabels = [],
  freeLabels = [],
  shadedPolygons = [],
  circles = [],
  showPointLabels = true,
  width = 300,
  fontSize = 14,
  labelOffsets = {},
  style,
}) => {
  const names = Object.keys(points);
  if (names.length === 0) return null;

  // Detect 3D mode: any point has 3 coordinates
  const is3D = names.some((n) => Array.isArray(points[n]) && points[n].length >= 3);

  // Isometric projection: [x,y,z] → [isoX, isoY] (2D flat coords)
  // x=right, y=up, z=depth(toward viewer)
  const ISO_COS = Math.cos(Math.PI / 6); // √3/2
  const ISO_SIN = Math.sin(Math.PI / 6); // 0.5
  const toIso = (p) => {
    const [x, y, z = 0] = p;
    return [(x - z) * ISO_COS, y + (x + z) * ISO_SIN];
  };

  // Flat 2D coords for each point (iso-projected if 3D, passthrough if 2D)
  const flat = {};
  names.forEach((n) => {
    const p = points[n] || [0, 0];
    flat[n] = is3D ? toIso(p) : [p[0], p[1]];
  });

  const xs = names.map((n) => flat[n][0]);
  const ys = names.map((n) => flat[n][1]);
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

  // flat coords → svg coords (y flipped)
  const P = (n) => {
    const [fx, fy] = flat[n] || [0, 0];
    return [(fx - minX) * scale + pad, (maxY - fy) * scale + pad];
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

  // --- Shaded polygons --------------------------------------------------
  // Each entry in shadedPolygons can contain multiple polygon rings.
  // Using SVG evenodd fill rule cuts inner rings out (donut effect).
  shadedPolygons.forEach((sp) => {
    const rings = Array.isArray(sp.polygons) 
      ? sp.polygons.map(r => typeof r === 'string' ? r.split(',') : r) 
      : [typeof sp.points === 'string' ? sp.points.split(',') : sp.points].filter(Boolean);
    if (rings.length === 0) return;
    const d = rings.map((ring) => {
      if (!Array.isArray(ring) || ring.length < 2) return '';
      const coords = ring.map((name) => {
        const [sx, sy] = P(name);
        return `${sx},${sy}`;
      });
      return `M ${coords.join(' L ')} Z`;
    }).join(' ');
    if (!d.trim()) return;
    els.push(
      <path
        key={`sh${key++}`}
        d={d}
        fill={sp.color || '#94a3b8'}
        fillOpacity={sp.opacity ?? 0.35}
        fillRule="evenodd"
        stroke="none"
      />
    );
  });

  // --- Circles ----------------------------------------------------------
  circles.forEach((circ) => {
    const [cx_svg, cy_svg] = P(circ.center);
    let r_svg = 0;
    if (circ.through) {
      const [tx_svg, ty_svg] = P(circ.through);
      r_svg = Math.hypot(tx_svg - cx_svg, ty_svg - cy_svg);
    } else if (circ.radius) {
      r_svg = circ.radius * scale;
    }
    
    if (r_svg > 0) {
      els.push(
        <circle
          key={`c${key++}`}
          cx={cx_svg} cy={cy_svg} r={r_svg}
          stroke={circ.color || "#000000"} strokeWidth="1.2"
          strokeDasharray={circ.dashed ? '6 4' : undefined}
          fill={circ.filled ? (circ.color || "#000000") : "none"}
          fillOpacity={circ.filled ? (circ.fillOpacity ?? 0.1) : undefined}
        />
      );
    }
  });

  // --- Segments ---------------------------------------------------------
  segments.forEach((seg) => {
    const [ax, ay] = P(seg.from);
    const [bx, by] = P(seg.to);
    els.push(
      <line
        key={`s${key++}`}
        x1={ax} y1={ay} x2={bx} y2={by}
        stroke="#000000" strokeWidth="1.2"
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
            stroke="#000000" strokeWidth="1.2"
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
            fill="none" stroke="#000000" strokeWidth="1.2"
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
          fill="none" stroke="#000000" strokeWidth="1.2"
        />
      );
    }
  });

  // --- Angle marks / labels --------------------------------------------
  angles.forEach((ang) => {
    const [vx, vy] = P(ang.at);
    const [defdx, defdy] = norm(cx - vx, cy - vy);   // toward interior

    // Draggable position
    const rx = ang.labelPos ? ((ang.labelPos[0] - minX) * scale + pad) : (vx + defdx * 26);
    const ry = ang.labelPos ? ((maxY - ang.labelPos[1]) * scale + pad) : (vy + defdy * 26);

    // Calculate rotation vector from vertex to labelPos
    let [dx, dy] = norm(rx - vx, ry - vy);
    if (Math.abs(dx) < 1e-3 && Math.abs(dy) < 1e-3) {
      dx = defdx;
      dy = defdy;
    }

    if (ang.right) {
      const sz = 12;
      const sqrt2 = Math.sqrt(2);
      // Anchor always at vx, vy
      const bx1 = vx + ((dx + dy) / sqrt2) * sz;
      const by1 = vy + ((dy - dx) / sqrt2) * sz;
      const bx2 = vx + sqrt2 * dx * sz;
      const by2 = vy + sqrt2 * dy * sz;
      const bx3 = vx + ((dx - dy) / sqrt2) * sz;
      const by3 = vy + ((dy + dx) / sqrt2) * sz;
      els.push(
        <polyline
          key={`ar${key++}`}
          points={`${bx1},${by1} ${bx2},${by2} ${bx3},${by3}`}
          fill="none" stroke="#000000" strokeWidth="1.0"
        />
      );
    }

    if (ang.label) {
      els.push(
        <text
          key={`al${key++}`}
          x={rx} y={ry + 5}
          textAnchor="middle" fill="#000000"
          fontSize={fontSize} fontStyle="italic"
          fontFamily='"KaTeX_Main", "Times New Roman", serif'
          stroke="#ffffff" strokeWidth={3.5} paintOrder="stroke" strokeLinejoin="round"
        >
          {formatLabel(ang.label)}
        </text>
      );
    }
  });

  // --- Side labels ------------------------------------------------------
  // Defensive de-duplication: figure editing/regeneration can leave duplicate
  // side labels (same text on the same segment), which render as overlapping
  // text like "12 cmcm". Keep only the first occurrence of each.
  const seenSide = new Set();
  const uniqueSideLabels = sideLabels.filter((sl) => {
    const sig = `${(sl.text ?? '').toString().trim()}|${Array.isArray(sl.between) ? sl.between.join('-') : ''}|${Array.isArray(sl.labelPos) ? sl.labelPos.join(',') : ''}`;
    if (seenSide.has(sig)) return false;
    seenSide.add(sig);
    return true;
  });
  uniqueSideLabels.forEach((sl) => {
    let tx, ty;
    if (sl.labelPos) {
      tx = ((Number(sl.labelPos[0]) || 0) - minX) * scale + pad;
      ty = (maxY - (Number(sl.labelPos[1]) || 0)) * scale + pad;
    } else {
      const [ax, ay] = P(sl.between[0]);
      const [bx, by] = P(sl.between[1]);
      const mx = (ax + bx) / 2;
      const my = (ay + by) / 2;
      const [ux, uy] = norm(bx - ax, by - ay);
      let [px, py] = [-uy, ux];
      const towardOut = (mx + px - cx) ** 2 + (my + py - cy) ** 2;
      const towardIn = (mx - px - cx) ** 2 + (my - py - cy) ** 2;
      const outward = sl.side === 'in' ? towardOut < towardIn : towardOut > towardIn;
      if (!outward) { px = -px; py = -py; }
      tx = mx + px * 16; ty = my + py * 16;
    }
    els.push(
      <text
        key={`sl${key++}`}
        x={tx} y={ty + 5}
        textAnchor="middle" fill="#000000" fontSize={fontSize}
        fontFamily='"KaTeX_Main", "Times New Roman", serif'
        stroke="#ffffff" strokeWidth={3.5} paintOrder="stroke" strokeLinejoin="round"
      >
        {formatLabel(sl.text)}
      </text>
    );
  });

  const seenFree = new Set();
  freeLabels.filter((label) => {
    const pt = label.at && points[label.at] ? points[label.at] : (Array.isArray(label.point) ? label.point : [label.x, label.y]);
    const sig = `${(label.text ?? '').toString().trim()}|${(Number(pt?.[0]) || 0).toFixed(2)},${(Number(pt?.[1]) || 0).toFixed(2)}`;
    if (seenFree.has(sig)) return false;
    seenFree.add(sig);
    return true;
  }).forEach((label) => {
    const pt = label.at && points[label.at] ? points[label.at] : (Array.isArray(label.point) ? label.point : [label.x, label.y]);
    const x = ((Number(pt[0]) || 0) - minX) * scale + pad;
    const y = (maxY - (Number(pt[1]) || 0)) * scale + pad;
    els.push(
      <text
        key={`fl${key++}`}
        x={x} y={y}
        textAnchor="middle"
        fill="#000000"
        fontSize={fontSize}
        fontStyle={label.italic === false ? 'normal' : 'italic'}
        fontFamily='"KaTeX_Main", "Times New Roman", serif'
        stroke="#ffffff" strokeWidth={3.5} paintOrder="stroke" strokeLinejoin="round"
      >
        {formatLabel(label.text)}
      </text>
    );
  });

  // --- Vertex name labels (drawn last, on top) -------------------------
  names.forEach((n) => {
    const [vx, vy] = P(n);
    if (showPointLabels !== false && !n.startsWith('_')) {
      let lx, ly;
      if (labelOffsets[n]) {
        lx = vx + labelOffsets[n][0];
        ly = vy + labelOffsets[n][1] + 5;
      } else {
        let [dx, dy] = norm(vx - cx, vy - cy);
        if (Math.abs(dx) < 1e-3 && Math.abs(dy) < 1e-3) { dx = 0; dy = -1; }
        lx = vx + dx * 16;
        ly = vy + dy * 16 + 5;
      }
      els.push(
        <text
          key={`v${key++}`}
          x={lx} y={ly}
          textAnchor="middle" fill="#000000"
          fontSize={fontSize} fontStyle="italic" fontWeight="600"
          fontFamily='"KaTeX_Main", "Times New Roman", serif'
          stroke="#ffffff" strokeWidth={3.5} paintOrder="stroke" strokeLinejoin="round"
        >
          {n}
        </text>
      );
    }
    if (showPointLabels !== false && !n.startsWith('_')) {
      els.push(
        <circle key={`vd${key++}`} cx={vx} cy={vy} r="1.0" fill="#000000" />
      );
    }
  });

  return (
    <div
      style={{
        display: 'flex', justifyContent: 'center',
        padding: '12px', background: '#fff',
        borderRadius: '14px', border: '1px solid #e2e8f0',
        marginTop: '8px', height: `${drawH}px`, ...style,
      }}
    >
      <svg width={drawW} height={drawH} viewBox={`0 0 ${drawW} ${drawH}`}
        style={{ overflow: 'visible', width: drawW, height: drawH, maxWidth: '100%' }}>
        {els}
      </svg>
    </div>
  );
};

export default GeometryFigure;
