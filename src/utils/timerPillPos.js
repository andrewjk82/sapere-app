// Where the floating study-timer pill sits, remembered per account on this device only.
// Stored as fractions of the viewport — { fx: pill centre x, fy: pill top } — so it stays sensible when the
// iPad rotates or the window resizes; clampPillPos keeps it fully on screen.
export const DEFAULT_PILL_POS = { fx: 0.5, fy: 0 };       // top centre
const KEY = (uid) => `sapere:timerPill:v1:${uid || 'anon'}`;
// Notch / status-bar inset (iPad home-screen app): read once through a probe element, since CSS env() is
// not readable from JS directly.
let safeTopCache = null;
const safeTop = () => {
  if (safeTopCache !== null) return safeTopCache;
  try {
    const probe = document.createElement('div');
    probe.style.cssText = 'position:fixed;visibility:hidden;pointer-events:none;padding-top:env(safe-area-inset-top, 0px)';
    document.body.appendChild(probe);
    safeTopCache = Number.parseFloat(getComputedStyle(probe).paddingTop) || 0;
    probe.remove();
  } catch { safeTopCache = 0; }
  return safeTopCache;
};

const isFrac = (n) => Number.isFinite(n) && n >= -0.5 && n <= 1.5;

export const loadPillPos = (uid, storage = globalThis.localStorage) => {
  try {
    const raw = JSON.parse(storage?.getItem(KEY(uid)) || 'null');
    if (raw && isFrac(raw.fx) && isFrac(raw.fy)) return { fx: raw.fx, fy: raw.fy };
  } catch { /* unavailable / corrupt */ }
  return DEFAULT_PILL_POS;
};

// null clears the saved spot (back to the default).
export const savePillPos = (uid, pos, storage = globalThis.localStorage) => {
  try {
    if (!pos) storage?.removeItem(KEY(uid));
    else storage?.setItem(KEY(uid), JSON.stringify({ fx: Math.round(pos.fx * 10000) / 10000, fy: Math.round(pos.fy * 10000) / 10000 }));
  } catch { /* ignore */ }
};

// Pixel position (top-left) of the pill, kept inside the viewport with `margin` around it.
export const clampPillPos = (pos, viewport, size, margin = 8) => {
  const minTop = margin + safeTop();
  const maxLeft = Math.max(margin, viewport.w - size.w - margin);
  const maxTop = Math.max(minTop, viewport.h - size.h - margin);
  const left = Math.min(maxLeft, Math.max(margin, pos.fx * viewport.w - size.w / 2));
  const top = Math.min(maxTop, Math.max(minTop, pos.fy * viewport.h));
  return { left: Math.round(left), top: Math.round(top) };
};
