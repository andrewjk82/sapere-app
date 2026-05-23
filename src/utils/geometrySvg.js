const SVG_NS = 'http://www.w3.org/2000/svg';

const escapeText = (value) => String(value ?? '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

const norm = (dx, dy) => {
  const len = Math.hypot(dx, dy) || 1;
  return [dx / len, dy / len];
};

const svgLine = (attrs) => `<line ${attrs} />`;
const svgText = (attrs, text) => `<text ${attrs}>${escapeText(text)}</text>`;

export const encodeSvgDataUrl = (svg) =>
  `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

export const isSvgDataUrl = (value) =>
  typeof value === 'string' && /^data:image\/svg\+xml/i.test(value.trim());

export const isRasterDataUrl = (value) =>
  typeof value === 'string' && /^data:image\/(?!svg\+xml)/i.test(value.trim());

export const geometryToSvgMarkup = ({
  points = {},
  segments = [],
  angles = [],
  sideLabels = [],
  freeLabels = [],
  showPointLabels = true,
  width = 300,
} = {}) => {
  const names = Object.keys(points);
  if (names.length === 0) return '';

  const xs = names.map((name) => Number(points[name]?.[0]) || 0);
  const ys = names.map((name) => Number(points[name]?.[1]) || 0);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const spanX = maxX - minX || 1;
  const spanY = maxY - minY || 1;

  const pad = 48;
  const inner = Math.max(120, width - pad * 2);
  const scale = inner / Math.max(spanX, spanY);
  const drawW = spanX * scale + pad * 2;
  const drawH = spanY * scale + pad * 2;

  const P = (name) => {
    const point = points[name];
    if (!point) return [0, 0];
    return [
      ((Number(point[0]) || 0) - minX) * scale + pad,
      (maxY - (Number(point[1]) || 0)) * scale + pad,
    ];
  };

  const cx = names.reduce((sum, name) => sum + P(name)[0], 0) / names.length;
  const cy = names.reduce((sum, name) => sum + P(name)[1], 0) / names.length;
  const els = [];

  segments.forEach((seg) => {
    if (!points[seg.from] || !points[seg.to]) return;
    const [ax, ay] = P(seg.from);
    const [bx, by] = P(seg.to);
    els.push(svgLine(`x1="${ax}" y1="${ay}" x2="${bx}" y2="${by}" stroke="#1e3a5f" stroke-width="2.2" stroke-linecap="round"${seg.dashed ? ' stroke-dasharray="6 4"' : ''}`));

    const [ux, uy] = norm(bx - ax, by - ay);
    const [px, py] = [-uy, ux];
    const mx = (ax + bx) / 2;
    const my = (ay + by) / 2;

    if (seg.ticks) {
      for (let i = 0; i < seg.ticks; i += 1) {
        const off = (i - (seg.ticks - 1) / 2) * 6;
        const tx = mx + ux * off;
        const ty = my + uy * off;
        els.push(svgLine(`x1="${tx + px * 6}" y1="${ty + py * 6}" x2="${tx - px * 6}" y2="${ty - py * 6}" stroke="#1e3a5f" stroke-width="2"`));
      }
    }

    if (seg.marks) {
      for (let i = 0; i < seg.marks; i += 1) {
        const off = (i - (seg.marks - 1) / 2) * 7;
        const tipx = mx + ux * (off + 4);
        const tipy = my + uy * (off + 4);
        const bx1 = mx + ux * (off - 4) + px * 5;
        const by1 = my + uy * (off - 4) + py * 5;
        const bx2 = mx + ux * (off - 4) - px * 5;
        const by2 = my + uy * (off - 4) - py * 5;
        els.push(`<polyline points="${bx1},${by1} ${tipx},${tipy} ${bx2},${by2}" fill="none" stroke="#1e3a5f" stroke-width="2" />`);
      }
    }

    if (seg.arrow) {
      const a1x = bx - ux * 11 + px * 6;
      const a1y = by - uy * 11 + py * 6;
      const a2x = bx - ux * 11 - px * 6;
      const a2y = by - uy * 11 - py * 6;
      els.push(`<polyline points="${a1x},${a1y} ${bx},${by} ${a2x},${a2y}" fill="none" stroke="#1e3a5f" stroke-width="2.2" />`);
    }
  });

  angles.forEach((angle) => {
    if (!points[angle.at]) return;
    const [vx, vy] = P(angle.at);
    const [defdx, defdy] = norm(cx - vx, cy - vy);

    const rx = angle.labelPos ? (((Number(angle.labelPos[0]) || 0) - minX) * scale + pad) : (vx + defdx * 26);
    const ry = angle.labelPos ? ((maxY - (Number(angle.labelPos[1]) || 0)) * scale + pad) : (vy + defdy * 26);

    let [dx, dy] = norm(rx - vx, ry - vy);
    if (Math.abs(dx) < 1e-3 && Math.abs(dy) < 1e-3) {
      dx = defdx;
      dy = defdy;
    }

    if (angle.right) {
      const sz = 12;
      const sqrt2 = Math.sqrt(2);
      // Anchor always at vx, vy
      const bx1 = vx + ((dx + dy) / sqrt2) * sz;
      const by1 = vy + ((dy - dx) / sqrt2) * sz;
      const bx2 = vx + sqrt2 * dx * sz;
      const by2 = vy + sqrt2 * dy * sz;
      const bx3 = vx + ((dx - dy) / sqrt2) * sz;
      const by3 = vy + ((dy + dx) / sqrt2) * sz;
      els.push(`<polyline points="${bx1},${by1} ${bx2},${by2} ${bx3},${by3}" fill="none" stroke="#1e3a5f" stroke-width="1.5" />`);
    }

    if (angle.label) {
      els.push(svgText(`x="${rx}" y="${ry + 5}" text-anchor="middle" fill="#1e3a5f" font-size="15" font-style="italic"`, angle.label));
    }
  });

  sideLabels.forEach((label) => {
    if (!points[label.between?.[0]] || !points[label.between?.[1]]) return;
    const [ax, ay] = P(label.between[0]);
    const [bx, by] = P(label.between[1]);
    const mx = (ax + bx) / 2;
    const my = (ay + by) / 2;
    const [ux, uy] = norm(bx - ax, by - ay);
    let [px, py] = [-uy, ux];
    const towardOut = (mx + px - cx) ** 2 + (my + py - cy) ** 2;
    const towardIn = (mx - px - cx) ** 2 + (my - py - cy) ** 2;
    const outward = label.side === 'in' ? towardOut < towardIn : towardOut > towardIn;
    if (!outward) { px = -px; py = -py; }
    els.push(svgText(`x="${mx + px * 16}" y="${my + py * 16 + 5}" text-anchor="middle" fill="#1e3a5f" font-size="14"`, label.text));
  });

  freeLabels.forEach((label) => {
    const pt = Array.isArray(label.point) ? label.point : [label.x, label.y];
    const [x, y] = [
      ((Number(pt[0]) || 0) - minX) * scale + pad,
      (maxY - (Number(pt[1]) || 0)) * scale + pad,
    ];
    els.push(svgText(`x="${x}" y="${y}" text-anchor="middle" fill="${label.color || '#0369a1'}" font-size="${label.fontSize || 15}" font-style="${label.italic === false ? 'normal' : 'italic'}"`, label.text));
  });

  names.forEach((name) => {
    const [vx, vy] = P(name);
    if (showPointLabels !== false) {
      let [dx, dy] = norm(vx - cx, vy - cy);
      if (Math.abs(dx) < 1e-3 && Math.abs(dy) < 1e-3) {
        dx = 0;
        dy = -1;
      }
      els.push(svgText(`x="${vx + dx * 16}" y="${vy + dy * 16 + 5}" text-anchor="middle" fill="#475569" font-size="14" font-style="italic" font-weight="600"`, name));
    }
    els.push(`<circle cx="${vx}" cy="${vy}" r="2.6" fill="#1e3a5f" />`);
  });

  return `<svg xmlns="${SVG_NS}" width="${drawW}" height="${drawH}" viewBox="0 0 ${drawW} ${drawH}" role="img" aria-label="Geometry diagram">${els.join('')}</svg>`;
};

export const geometryToSvgDataUrl = (geometry) => {
  const svg = geometryToSvgMarkup(geometry);
  return svg ? encodeSvgDataUrl(svg) : '';
};
