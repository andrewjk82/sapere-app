// Freehand ink rendering shared by the notepad (WorkingOutCanvas) and the PDF pen (PdfViewer).
// A point is [x, y, width] in the caller's units; `dpr` scales those units to canvas pixels.
//
// Draw pen segments [startIdx .. end) using quadratic-midpoint smoothing with
// per-segment variable width. Segment i connects points[i-1] → points[i].
export function drawPenSegments(ctx, pts, startIdx, color, dpr, includeTip) {
  if (!ctx || !pts || pts.length === 0) return;
  ctx.save();
  ctx.globalCompositeOperation = 'source-over';
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  if (pts.length === 1) {
    const p = pts[0];
    ctx.beginPath();
    ctx.arc(p[0] * dpr, p[1] * dpr, Math.max(0.6, p[2] / 2) * dpr, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    return;
  }

  // Each piece is the quadratic from the previous midpoint, through p0, to the next midpoint. Its width runs smoothly
  // from the width at the start midpoint to the width at the end midpoint (sub-divided only when the width changes),
  // so pressure changes taper along the line instead of stepping at every sample.
  const from = Math.max(1, startIdx);
  for (let i = from; i < pts.length; i++) {
    const p0 = pts[i - 1];
    const p1 = pts[i];
    const pm = i === 1 ? null : pts[i - 2];
    const fromX = pm ? (pm[0] + p0[0]) / 2 : p0[0];
    const fromY = pm ? (pm[1] + p0[1]) / 2 : p0[1];
    const toX = (p0[0] + p1[0]) / 2;
    const toY = (p0[1] + p1[1]) / 2;
    const w0 = Math.max(0.4, pm ? (pm[2] + p0[2]) / 2 : p0[2]);
    const w1 = Math.max(0.4, (p0[2] + p1[2]) / 2);
    const len = Math.hypot(toX - fromX, toY - fromY);
    const n = Math.abs(w1 - w0) * dpr < 0.15 ? 1 : Math.max(1, Math.min(6, Math.ceil(len / 1.5)));
    if (n === 1) {
      ctx.lineWidth = ((w0 + w1) / 2) * dpr;
      ctx.beginPath();
      ctx.moveTo(fromX * dpr, fromY * dpr);
      ctx.quadraticCurveTo(p0[0] * dpr, p0[1] * dpr, toX * dpr, toY * dpr);
      ctx.stroke();
      continue;
    }
    let px = fromX, py = fromY;
    for (let k = 1; k <= n; k++) {
      const t = k / n, u = 1 - t;
      const x = u * u * fromX + 2 * u * t * p0[0] + t * t * toX;
      const y = u * u * fromY + 2 * u * t * p0[1] + t * t * toY;
      ctx.lineWidth = (w0 + (w1 - w0) * (k - 0.5) / n) * dpr;
      ctx.beginPath();
      ctx.moveTo(px * dpr, py * dpr);
      ctx.lineTo(x * dpr, y * dpr);
      ctx.stroke();
      px = x; py = y;
    }
  }

  if (includeTip && pts.length >= 2) {
    const a = pts[pts.length - 2];
    const b = pts[pts.length - 1];
    ctx.lineWidth = Math.max(0.4, b[2]) * dpr;
    ctx.beginPath();
    ctx.moveTo(((a[0] + b[0]) / 2) * dpr, ((a[1] + b[1]) / 2) * dpr);
    ctx.lineTo(b[0] * dpr, b[1] * dpr);
    ctx.stroke();
  }

  ctx.restore();
}

// Draw the live leading tip: from the last settled midpoint, through the last
// real point, then on through predicted points. Lives on its own canvas that
// is fully cleared every frame, so prediction overshoot self-corrects.
export function drawTip(ctx, stroke, dpr, predicted) {
  if (!ctx || !stroke) return;
  const pts = stroke.points;
  if (pts.length === 0) return;
  ctx.save();
  ctx.globalCompositeOperation = 'source-over';
  ctx.strokeStyle = stroke.color;
  ctx.fillStyle = stroke.color;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  if (pts.length === 1) {
    const p = pts[0];
    ctx.beginPath();
    ctx.arc(p[0] * dpr, p[1] * dpr, Math.max(0.6, p[2] / 2) * dpr, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    return;
  }

  const n = pts.length - 1;
  const a = pts[n - 1];
  const b = pts[n];
  ctx.lineWidth = Math.max(0.4, b[2]) * dpr;
  ctx.beginPath();
  ctx.moveTo(((a[0] + b[0]) / 2) * dpr, ((a[1] + b[1]) / 2) * dpr);
  // Curve through the real nib point and on through the predicted ones (midpoint smoothing, like the settled ink).
  const ahead = [b, ...predicted];
  for (let i = 0; i < ahead.length - 1; i++) {
    const c = ahead[i], d = ahead[i + 1];
    ctx.quadraticCurveTo(c[0] * dpr, c[1] * dpr, ((c[0] + d[0]) / 2) * dpr, ((c[1] + d[1]) / 2) * dpr);
  }
  const end = ahead[ahead.length - 1];
  ctx.lineTo(end[0] * dpr, end[1] * dpr);
  ctx.stroke();
  ctx.restore();
}

// A highlighter stroke is one path, stroked once, at one width. The pen's segment-by-segment drawing cannot be used
// here: with a translucent colour every overlapping segment adds another layer, so a 0.48 pastel built up to almost
// solid paint. 'multiply' keeps whatever is already on the canvas showing through, however many times it is marked.
export function drawHighlighterStroke(ctx, pts, color, dpr, predicted = []) {
  if (!ctx || !pts || pts.length === 0) return;
  const width = Math.max(0.4, pts[0][2]) * dpr;
  ctx.save();
  ctx.globalCompositeOperation = 'multiply';
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.lineWidth = width;
  ctx.beginPath();
  if (pts.length === 1 && predicted.length === 0) {
    ctx.arc(pts[0][0] * dpr, pts[0][1] * dpr, width / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    return;
  }
  ctx.moveTo(pts[0][0] * dpr, pts[0][1] * dpr);
  for (let i = 1; i < pts.length - 1; i++) {
    const midX = (pts[i][0] + pts[i + 1][0]) / 2;
    const midY = (pts[i][1] + pts[i + 1][1]) / 2;
    ctx.quadraticCurveTo(pts[i][0] * dpr, pts[i][1] * dpr, midX * dpr, midY * dpr);
  }
  const last = pts[pts.length - 1];
  ctx.lineTo(last[0] * dpr, last[1] * dpr);
  predicted.forEach((p) => ctx.lineTo(p[0] * dpr, p[1] * dpr));
  ctx.stroke();
  ctx.restore();
}
