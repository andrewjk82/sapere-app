// Keeps a question report under Firestore's 1 MiB document limit.
//
// A report from the Review screen used to carry the student's whole working
// out: sketchDataUrl (a copy of page 1) plus every page as a PNG data URL. A
// few pages of retina PNGs go past 1 MiB, the server rejects the write only
// after the whole payload has uploaded, and the student just sees a spinner.

// Characters of base64 image data allowed in one report (~0.5 MiB of the 1 MiB
// document, leaving room for the question text, options and answers).
export const REPORT_IMAGE_BUDGET = 520_000;
const RECOMPRESS_WIDTH = 1000;
const RECOMPRESS_QUALITY = 0.6;

const total = (images) => images.reduce((sum, src) => sum + String(src).length, 0);

/** Pages when there are any, otherwise the single sketch — never both. */
export const collectReportImages = (single, pages) => {
  const list = Array.isArray(pages) ? pages.filter(Boolean) : [];
  if (list.length > 0) return list;
  return single ? [single] : [];
};

/**
 * Returns images whose combined size fits `budget`: unchanged when they already
 * do, else re-encoded with `recompress`, else trailing pages dropped (page 1 is
 * always kept). `dropped` counts the pages left out.
 */
export const fitReportImages = async (images, budget = REPORT_IMAGE_BUDGET, recompress = recompressImage) => {
  let list = images.slice();
  if (total(list) <= budget) return { images: list, dropped: 0 };
  const smaller = [];
  for (const src of list) {
    try { smaller.push(await recompress(src)); } catch { smaller.push(src); }
  }
  list = smaller;
  let dropped = 0;
  while (list.length > 1 && total(list) > budget) { list.pop(); dropped += 1; }
  return { images: list, dropped };
};

/** Browser only: re-encode a data URL as a smaller JPEG. */
export const recompressImage = (dataUrl) => new Promise((resolve, reject) => {
  const img = new Image();
  img.onload = () => {
    const scale = Math.min(1, RECOMPRESS_WIDTH / img.width);
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(img.width * scale));
    canvas.height = Math.max(1, Math.round(img.height * scale));
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    resolve(canvas.toDataURL('image/jpeg', RECOMPRESS_QUALITY));
  };
  img.onerror = () => reject(new Error('image decode failed'));
  img.src = dataUrl;
});

/** Rejects with an Error whose `.code` is 'timeout' if `promise` takes longer than `ms`. */
export const withTimeout = (promise, ms) => new Promise((resolve, reject) => {
  const timer = setTimeout(() => {
    const err = new Error(`timed out after ${ms}ms`);
    err.code = 'timeout';
    reject(err);
  }, ms);
  promise.then(
    (value) => { clearTimeout(timer); resolve(value); },
    (err) => { clearTimeout(timer); reject(err); },
  );
});
