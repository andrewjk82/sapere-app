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
 * @param {object} opts
 *   size?:       number  rendered px size (default 150)
 *   highlights?: [{ hand: 'hour'|'minute', begin: number, label?: string }]
 *     SMIL animation that colours + pulses the hand (and fades in a label)
 *     `begin` seconds after the SVG is inserted — used by lessons to sync
 *     with the narration audio, which starts at the same moment.
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

  // Hand highlight animations (colour change + width pulse + fading-in label),
  // timed via SMIL `begin` so they line up with the lesson narration.
  const highlights = Array.isArray(opts.highlights) ? opts.highlights : [];
  const handAnim = (hand) => {
    const hl = highlights.find((x) => x.hand === hand);
    if (!hl) return '';
    const w = hand === 'hour' ? 7 : 4.5;
    return (
      `<animate attributeName="stroke" to="#7c3aed" begin="${hl.begin}s" dur="0.25s" fill="freeze"/>` +
      `<animate attributeName="stroke-width" values="${w};${f(w * 1.8)};${w};${f(w * 1.8)};${w}" begin="${hl.begin}s" dur="1.4s"/>`
    );
  };
  const handLabel = (hand, angle, r) => {
    const hl = highlights.find((x) => x.hand === hand);
    if (!hl || !hl.label) return '';
    // Sit the label beside the middle of the hand (perpendicular offset) so it
    // never collides with the numbers around the rim.
    const [mx, my] = polar(c, c, r * 0.62, angle);
    const rad = ((angle - 90) * Math.PI) / 180;
    const lx = mx - Math.sin(rad) * 20;
    const ly = my + Math.cos(rad) * 20;
    return `<text x="${f(lx)}" y="${f(ly)}" font-size="13.5" font-weight="800" fill="#7c3aed" text-anchor="middle" dominant-baseline="central" font-family="Arial, sans-serif" opacity="0" style="paint-order:stroke;stroke:#ffffff;stroke-width:4px">${hl.label}<animate attributeName="opacity" to="1" begin="${hl.begin}s" dur="0.35s" fill="freeze"/></text>`;
  };

  // Hour hand (short, thick)
  {
    const [x2, y2] = polar(c, c, 42, hourAngle);
    parts += `<line x1="${c}" y1="${c}" x2="${f(x2)}" y2="${f(y2)}" stroke="#1e293b" stroke-width="7" stroke-linecap="round">${handAnim('hour')}</line>`;
  }
  // Minute hand (long, thinner)
  {
    const [x2, y2] = polar(c, c, 62, minuteAngle);
    parts += `<line x1="${c}" y1="${c}" x2="${f(x2)}" y2="${f(y2)}" stroke="#334155" stroke-width="4.5" stroke-linecap="round">${handAnim('minute')}</line>`;
  }
  // Labels drawn after both hands so they sit on top
  parts += handLabel('hour', hourAngle, 42);
  parts += handLabel('minute', minuteAngle, 62);

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
