/**
 * Resize / recompress a data-URL image for cheaper Gemini + smaller Firestore docs.
 * Keeps aspect ratio; paints on white (pen strokes stay readable).
 * Falls back to the original URL on any failure.
 */
export function resizeDataUrlImage(dataUrl, {
  maxWidth = 960,
  maxHeight = 960,
  quality = 0.72,
  mimeType = 'image/jpeg',
} = {}) {
  if (!dataUrl || typeof dataUrl !== 'string') return Promise.resolve(dataUrl);
  if (!dataUrl.startsWith('data:image/')) return Promise.resolve(dataUrl);
  // Leave SVGs alone (rare, and canvas re-encode can break them).
  if (dataUrl.startsWith('data:image/svg')) return Promise.resolve(dataUrl);

  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      try {
        const srcW = img.naturalWidth || img.width || 1;
        const srcH = img.naturalHeight || img.height || 1;
        const scale = Math.min(1, maxWidth / srcW, maxHeight / srcH);
        const w = Math.max(1, Math.round(srcW * scale));
        const h = Math.max(1, Math.round(srcH * scale));

        // Already small enough and not a huge base64 — still recompress PNG→JPEG
        // when mime is jpeg to cut tokens; skip only if tiny jpeg.
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(dataUrl);
          return;
        }
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, w, h);
        ctx.drawImage(img, 0, 0, w, h);

        const out = mimeType === 'image/jpeg' || mimeType === 'image/webp'
          ? canvas.toDataURL(mimeType, quality)
          : canvas.toDataURL(mimeType);

        // If somehow larger (unlikely), keep original.
        if (out && out.length < dataUrl.length * 1.05) resolve(out);
        else resolve(out || dataUrl);
      } catch {
        resolve(dataUrl);
      }
    };
    img.onerror = () => resolve(dataUrl);
    img.src = dataUrl;
  });
}

/** Resize a list of data-URLs in parallel; drops empty results. */
export async function resizeDataUrlImages(urls, opts) {
  const list = Array.isArray(urls) ? urls.filter((u) => u && u.length > 100) : [];
  if (list.length === 0) return [];
  return Promise.all(list.map((u) => resizeDataUrlImage(u, opts)));
}
