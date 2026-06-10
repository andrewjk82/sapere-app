/**
 * ── Analogue clock SVG builder ─────────────────────────────────────────────
 *
 * Returns an inline-SVG string for an analogue clock face showing `hour:minute`.
 * Used by the Basic Calculation clock-reading generator (questions + MCQ
 * options) and the clock-reading lessons. MathView already injects raw <svg>
 * markup via innerHTML, so the string can be embedded directly in question
 * text or option text — no image assets, no new render protocol.
 */

const polar = (cx, cy, r, deg) => {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
};

const f = (n) => Number(n.toFixed(2));

/**
 * Build an analogue clock SVG string.
 * @param {number} hour    0-23 (only hour % 12 is drawn)
 * @param {number} minute  0-59
 * @param {object} opts    { size?: number }  rendered px size (default 150)
 */
export const clockSvg = (hour, minute, opts = {}) => {
  const size = opts.size || 150;
  const c = 100; // internal coordinate centre (viewBox 0 0 200 200)
  const h12 = ((hour % 12) + 12) % 12;
  const m = ((minute % 60) + 60) % 60;

  const minuteAngle = m * 6;
  const hourAngle = h12 * 30 + m * 0.5;

  let parts = '';

  // Face
  parts += `<circle cx="${c}" cy="${c}" r="92" fill="#ffffff" stroke="#94a3b8" stroke-width="6"/>`;
  parts += `<circle cx="${c}" cy="${c}" r="84" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>`;

  // Minute ticks (small) + hour ticks (bold)
  for (let i = 0; i < 60; i++) {
    const isHour = i % 5 === 0;
    const a = i * 6;
    const [x1, y1] = polar(c, c, isHour ? 74 : 78, a);
    const [x2, y2] = polar(c, c, 82, a);
    parts += `<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" stroke="${isHour ? '#475569' : '#cbd5e1'}" stroke-width="${isHour ? 3 : 1.5}"/>`;
  }

  // Numbers 1-12
  for (let n = 1; n <= 12; n++) {
    const [x, y] = polar(c, c, 62, n * 30);
    parts += `<text x="${f(x)}" y="${f(y)}" font-size="17" font-weight="700" fill="#1e293b" text-anchor="middle" dominant-baseline="central" font-family="Arial, sans-serif">${n}</text>`;
  }

  // Hour hand (short, thick)
  {
    const [x2, y2] = polar(c, c, 42, hourAngle);
    parts += `<line x1="${c}" y1="${c}" x2="${f(x2)}" y2="${f(y2)}" stroke="#1e293b" stroke-width="7" stroke-linecap="round"/>`;
  }
  // Minute hand (long, thinner)
  {
    const [x2, y2] = polar(c, c, 62, minuteAngle);
    parts += `<line x1="${c}" y1="${c}" x2="${f(x2)}" y2="${f(y2)}" stroke="#334155" stroke-width="4.5" stroke-linecap="round"/>`;
  }

  // Centre pin
  parts += `<circle cx="${c}" cy="${c}" r="5.5" fill="#1e293b"/>`;

  return `<svg viewBox="0 0 200 200" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" style="display:block;margin:8px auto;" role="img" aria-label="analogue clock">${parts}</svg>`;
};

/** Digital "h:mm" string (12-hour, no am/pm). */
export const digital12 = (hour, minute) => {
  const h = ((hour % 12) + 12) % 12 || 12;
  return `${h}:${String(minute).padStart(2, '0')}`;
};

/** 24-hour "HH:MM" string. */
export const digital24 = (hour, minute) =>
  `${String(((hour % 24) + 24) % 24).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;

/** English time phrase: "o'clock / half past / quarter past / quarter to / X past / X to". */
export const timePhrase = (hour, minute) => {
  const h12 = ((hour % 12) + 12) % 12 || 12;
  const nextH = (h12 % 12) + 1;
  const m = minute % 60;
  if (m === 0) return `${h12} o'clock`;
  if (m === 15) return `quarter past ${h12}`;
  if (m === 30) return `half past ${h12}`;
  if (m === 45) return `quarter to ${nextH}`;
  if (m < 30) return `${m} minutes past ${h12}`;
  return `${60 - m} minutes to ${nextH}`;
};
