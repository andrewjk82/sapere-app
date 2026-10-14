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

  const from = Math.max(1, startIdx);
  for (let i = from; i < pts.length; i++) {
    const p0 = pts[i - 1];
    const p1 = pts[i];
    const fromX = i === 1 ? p0[0] : (pts[i - 2][0] + p0[0]) / 2;
    const fromY = i === 1 ? p0[1] : (pts[i - 2][1] + p0[1]) / 2;
    const toX = (p0[0] + p1[0]) / 2;
    const toY = (p0[1] + p1[1]) / 2;
    ctx.lineWidth = Math.max(0.4, p0[2]) * dpr;
    ctx.beginPath();
    ctx.moveTo(fromX * dpr, fromY * dpr);
    ctx.quadraticCurveTo(p0[0] * dpr, p0[1] * dpr, toX * dpr, toY * dpr);
    ctx.stroke();
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
  ctx.lineTo(b[0] * dpr, b[1] * dpr);
  for (let i = 0; i < predicted.length; i++) {
    ctx.lineTo(predicted[i][0] * dpr, predicted[i][1] * dpr);
  }
  ctx.stroke();
  ctx.restore();
}
