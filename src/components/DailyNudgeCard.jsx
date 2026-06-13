/* ============================================================================
 * DailyNudgeCard.jsx — time-reactive "you haven't done it yet" nudge card.
 *
 * Drop this file into your dashboard and render <DailyNudgeCards/> right below
 * the journey section. Self-contained: only depends on React. No CSS imports,
 * no icon libraries — styles + keyframes inject themselves once on mount.
 *
 * ── Behaviour ───────────────────────────────────────────────────────────────
 *   • Renders ONE card per UNFINISHED task.
 *   • 2 unfinished  → two cards, side by side (two per row)
 *   • 1 unfinished  → one full-width card
 *   • 0 unfinished  → renders nothing (returns null)
 *   • The mascot, colours and copy escalate from calm pastel-green (before 5pm)
 *     to urgent pastel-red with an angry, shaking face as midnight approaches.
 *   • Updates itself every minute so it keeps escalating without a reload.
 *
 * ── Usage ────────────────────────────────────────────────────────────────────
 *   import { DailyNudgeCards } from './DailyNudgeCard';
 *
 *   <DailyNudgeCards
 *     tasks={[
 *       { id: 'challenge', label: 'Daily Challenge', kind: 'practice', done: dailyDone,  href: '/daily' },
 *       { id: 'sprint',    label: 'Daily Sprint',    kind: 'sprint',   done: sprintDone, href: '/sprint' },
 *     ]}
 *     onOpen={(task) => router.push(task.href)}   // optional; falls back to href
 *   />
 *
 *   A student with only one task simply passes one entry — it renders full-width.
 * ========================================================================== */

import React, { useEffect, useRef, useState } from 'react';

/* ---- colour helpers ------------------------------------------------------ */
const hexToRgb = (h) => { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
const rgbToHex = (r) => '#' + r.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('');
const mix = (a, b, t) => { const A = hexToRgb(a), B = hexToRgb(b); return rgbToHex(A.map((v, i) => v + (B[i] - v) * t)); };
const rgba = (h, a) => { const [r, g, b] = hexToRgb(h); return `rgba(${r},${g},${b},${a})`; };
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

const STOPS = [
  { bg1: '#e3f9ec', bg2: '#c6f0d6', border: '#8fe0b2', ink: '#0f6b39', accent: '#16a34a' }, // calm green
  { bg1: '#fff5dd', bg2: '#fde9b6', border: '#f6cd6a', ink: '#a65b09', accent: '#ea9612' }, // amber
  { bg1: '#ffe2e2', bg2: '#ffc6c6', border: '#f59595', ink: '#c41f1f', accent: '#e23b3b' }, // urgent red
];
const rampMix = (t, key) => (t <= 0.5
  ? mix(STOPS[0][key], STOPS[1][key], t / 0.5)
  : mix(STOPS[1][key], STOPS[2][key], (t - 0.5) / 0.5));

/* Urgency 0→1. Calm until 17:00, peaks at midnight. Tune CALM_UNTIL / DEADLINE. */
const CALM_UNTIL = 17; // 5 PM
const DEADLINE = 24;   // midnight
function urgencyFor(hour) { return clamp((hour - CALM_UNTIL) / (DEADLINE - CALM_UNTIL), 0, 1); }

/* ---- staged copy --------------------------------------------------------- */
const COPY = {
  practice: [
    { msg: "Let's knock this out — quick and easy today!", sub: "Start now and you'll be done in no time. You've got this! 😊" },
    { msg: "Time's ticking — shall we get started?",        sub: 'Finishing before evening just feels better.' },
    { msg: "Whoa, it's evening already — let's go! 😟",     sub: 'Still not done today. The longer you wait, the harder it gets.' },
    { msg: "Hurry — it's almost midnight! 😠",              sub: 'Finish before the day ends, or your streak breaks.' },
  ],
  sprint: [
    { msg: "Let's clear the sprint too — easy does it!", sub: '4 questions · about 3 minutes.' },
    { msg: 'Perfect timing for your sprint!',            sub: 'Just 4 quick questions to go.' },
    { msg: "Your sprint's still waiting — hurry!",       sub: 'Only 3 minutes. You can do it right now.' },
    { msg: "The sprint STILL isn't done! 😤",            sub: 'Last chance… solve it right now!' },
  ],
};
const WATCH = [null, null, 'Your tutor is keeping an eye 👀', 'Your tutor is watching you 👁️'];
const stageIndex = (t) => (t < 0.2 ? 0 : t < 0.5 ? 1 : t < 0.78 ? 2 : 3);

/* ---- one-time stylesheet injection -------------------------------------- */
const STYLE_ID = 'daily-nudge-styles';
const KEYFRAMES = `
.dn-rise { animation: dn-rise .5s cubic-bezier(.22,1,.36,1) both; }
@keyframes dn-rise { from { transform: translateY(14px) scale(.98); } to { transform: none; } }
@keyframes dn-bob { 0%,100% { transform: translateY(0) rotate(0); } 50% { transform: translateY(-5px) rotate(-1.5deg); } }
@keyframes dn-shake {
  0%,100% { transform: translate(0,0) rotate(0); }
  15% { transform: translate(calc(var(--dn-amp) * -1px),1px) rotate(calc(var(--dn-amp) * -1.1deg)); }
  30% { transform: translate(calc(var(--dn-amp) * 1px),-1px) rotate(calc(var(--dn-amp) * 1.1deg)); }
  45% { transform: translate(calc(var(--dn-amp) * -1px),0) rotate(calc(var(--dn-amp) * -.9deg)); }
  60% { transform: translate(calc(var(--dn-amp) * 1px),1px) rotate(calc(var(--dn-amp) * .9deg)); }
  75% { transform: translate(calc(var(--dn-amp) * -.6px),0) rotate(0); }
}
.dn-face--calm   { animation: dn-bob 2.6s ease-in-out infinite; }
.dn-face--urgent { animation: dn-shake var(--dn-shakedur,.6s) ease-in-out infinite; }
@keyframes dn-twinkle { 0%,100% { opacity:0; transform:scale(.5); } 50% { opacity:1; transform:scale(1); } }
@keyframes dn-steam { 0% { opacity:0; transform:translateY(2px) scale(.7); } 40% { opacity:.8; } 100% { opacity:0; transform:translateY(-14px) scale(1.2); } }
@keyframes dn-eyeblink { 0%,92%,100% { opacity:1; } 95% { opacity:.25; } }
.dn-go:hover { transform: translateX(3px); }
@media (prefers-reduced-motion: reduce) {
  .dn-rise, .dn-face--calm, .dn-face--urgent { animation: none !important; }
}`;
function useInjectedStyles() {
  useEffect(() => {
    if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
    const s = document.createElement('style');
    s.id = STYLE_ID; s.textContent = KEYFRAMES;
    document.head.appendChild(s);
  }, []);
}

/* ---- live clock (re-renders each minute unless `now` is pinned) ---------- */
function useHour(now, previewHour) {
  const [, force] = useState(0);
  useEffect(() => {
    if (now != null || previewHour != null) return;
    const id = setInterval(() => force((n) => n + 1), 60 * 1000);
    return () => clearInterval(id);
  }, [now, previewHour]);
  if (typeof previewHour === 'number') return previewHour;
  const d = now instanceof Date ? now : new Date();
  return d.getHours() + d.getMinutes() / 60;
}

/* ---- animated mascot face ----------------------------------------------- */
function MoodFace({ t, size = 66 }) {
  const tt = clamp(t, 0, 1);
  const faceFill = mix('#fffdf7', '#ffe9e4', tt);
  const faceStroke = rampMix(tt, 'accent');
  const ink = '#3a2f2a';
  const mEndY = lerp(60, 65, tt), mCtrlY = lerp(75, 55, tt), mHalf = lerp(13, 11, tt);
  const mouth = `M ${50 - mHalf} ${mEndY} Q 50 ${mCtrlY} ${50 + mHalf} ${mEndY}`;
  const eyeRy = lerp(6.2, 3.6, tt), eyeY = lerp(45, 46, tt);
  const browO = clamp((tt - 0.1) / 0.5, 0, 1), browDrop = lerp(-2, 3, tt), browY = lerp(33, 35, tt);
  const blushO = clamp(1 - tt * 1.6, 0, 1), sweatO = clamp((tt - 0.45) / 0.3, 0, 1);
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block', overflow: 'visible' }}>
      <circle cx="50" cy="50" r="34" fill={faceFill} stroke={faceStroke} strokeWidth="3" />
      <ellipse cx="33" cy="56" rx="6" ry="3.6" fill="#ff9eb0" opacity={blushO} />
      <ellipse cx="67" cy="56" rx="6" ry="3.6" fill="#ff9eb0" opacity={blushO} />
      <ellipse cx="39" cy={eyeY} rx="4.4" ry={eyeRy} fill={ink} />
      <ellipse cx="61" cy={eyeY} rx="4.4" ry={eyeRy} fill={ink} />
      <circle cx="40.6" cy={eyeY - 2} r="1.5" fill="#fff" opacity={1 - tt} />
      <circle cx="62.6" cy={eyeY - 2} r="1.5" fill="#fff" opacity={1 - tt} />
      <line x1="32" y1={browY} x2="44" y2={browY + browDrop} stroke={ink} strokeWidth="3" strokeLinecap="round" opacity={browO} />
      <line x1="68" y1={browY} x2="56" y2={browY + browDrop} stroke={ink} strokeWidth="3" strokeLinecap="round" opacity={browO} />
      <path d={mouth} fill="none" stroke={ink} strokeWidth="3" strokeLinecap="round" />
      <path d="M 78 34 q 4 6 0 9 a 4.5 4.5 0 1 1 0 -9 z" fill="#7ec8f0" opacity={sweatO} />
    </svg>
  );
}

const Sparkles = ({ show }) => !show ? null : (
  [{ top: -6, left: 4, s: 11, d: '0s' }, { top: 10, left: -8, s: 8, d: '.7s' }, { top: 60, left: 78, s: 9, d: '.35s' }, { top: -2, left: 70, s: 7, d: '1.1s' }]
    .map((p, i) => (
      <svg key={i} width={p.s} height={p.s} viewBox="0 0 24 24"
        style={{ position: 'absolute', top: p.top, left: p.left, color: 'var(--dn-accent)', animation: `dn-twinkle 2.2s ease-in-out ${p.d} infinite` }}>
        <path d="M12 0 L14 9 L24 12 L14 15 L12 24 L10 15 L0 12 L10 9 Z" fill="currentColor" />
      </svg>
    ))
);

const Steam = ({ show, accent }) => !show ? null : (
  [{ left: 14, s: 8, d: '0s' }, { left: 30, s: 11, d: '.5s' }, { left: 48, s: 7, d: '.9s' }]
    .map((p, i) => (
      <span key={i} style={{ position: 'absolute', top: 2, left: p.left, width: p.s, height: p.s, borderRadius: '50%', background: accent, opacity: 0, animation: `dn-steam 1.4s ease-out ${p.d} infinite` }} />
    ))
);

/* ---- single nudge card --------------------------------------------------- */
function NudgeCard({ task, t, onOpen }) {
  const stage = stageIndex(t);
  const kind = task.kind === 'sprint' ? 'sprint' : 'practice';
  const { msg, sub } = COPY[kind][stage];
  const watch = WATCH[stage];
  const accent = rampMix(t, 'accent');
  // Card chrome stays on-theme (light + indigo); only the mascot tile escalates.
  const THEME = '#6366f1';
  const heading = '#1e1b4b';
  const muted = '#64748b';
  const urgent = t >= 0.5;
  const amp = (1.2 + t * 4.5).toFixed(2);
  const shakeDur = (0.85 - t * 0.45).toFixed(2);

  const open = () => { if (onOpen) onOpen(task); else if (task.href) window.location.assign(task.href); };

  return (
    <div className="dn-rise" style={{
      '--dn-accent': accent, position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center', gap: 16, padding: '16px 18px',
      borderRadius: 24, border: '1px solid #eceaf6', background: '#fff',
      boxShadow: '0 12px 30px rgba(99,102,241,0.10)',
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    }}>
      {/* avatar tile — the part whose colour escalates as the deadline nears */}
      <div style={{ position: 'relative', width: 68, height: 68, flexShrink: 0, display: 'grid', placeItems: 'center' }}>
        <div style={{
          position: 'absolute', inset: 0, borderRadius: 18,
          background: `linear-gradient(135deg, ${rampMix(t, 'bg1')}, ${rampMix(t, 'bg2')})`,
          border: `1px solid ${rampMix(t, 'border')}`,
          boxShadow: `0 6px 14px ${rgba(accent, 0.22)}`,
          transition: 'background .9s ease, border-color .9s ease, box-shadow .9s ease',
        }} />
        <Sparkles show={t < 0.2} />
        <Steam show={t >= 0.78} accent={accent} />
        <div className={urgent ? 'dn-face--urgent' : 'dn-face--calm'}
          style={{ position: 'relative', transformOrigin: '50% 70%', '--dn-amp': amp, '--dn-shakedur': shakeDur + 's' }}>
          <MoodFace t={t} size={46} />
        </div>
      </div>

      {/* body */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase', color: muted, marginBottom: 4 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: accent, boxShadow: `0 0 0 3px ${rgba(accent, 0.18)}`, transition: 'background .9s ease' }} />
          {task.label} · Not done yet
        </div>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: '0.98rem', lineHeight: 1.25, letterSpacing: '-0.01em', color: heading, margin: 0, textWrap: 'pretty' }}>{msg}</p>
        <p style={{ fontSize: '0.76rem', fontWeight: 600, color: muted, margin: '4px 0 0' }}>{sub}</p>
        {watch && (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 8, padding: '4px 10px', borderRadius: 999, background: '#f5f3ff', border: '1px solid #ece9fb', fontSize: '0.68rem', fontWeight: 800, color: THEME }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'dn-eyeblink 3.4s steps(1) infinite' }}>
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" />
            </svg>
            {watch}
          </span>
        )}
      </div>

      {/* action */}
      <button className="dn-go" onClick={open} aria-label={`Open ${task.label}`}
        style={{ flexShrink: 0, width: 44, height: 44, borderRadius: 14, border: 'none', cursor: 'pointer', display: 'grid', placeItems: 'center', color: '#fff', background: THEME, boxShadow: '0 8px 18px rgba(99,102,241,0.28)', transition: 'transform .2s' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
        </svg>
      </button>
    </div>
  );
}

/* ---- container ----------------------------------------------------------- */
export function DailyNudgeCards({ tasks = [], now, previewHour, onOpen, style }) {
  useInjectedStyles();
  const hour = useHour(now, previewHour);
  const t = urgencyFor(hour);

  const pending = tasks.filter((task) => !task.done);
  if (pending.length === 0) return null;

  return (
    <div style={{ display: 'grid', gap: 22, gridTemplateColumns: pending.length === 1 ? '1fr' : 'repeat(2, 1fr)', ...style }}>
      {pending.map((task) => (
        <NudgeCard key={task.id ?? task.label} task={task} t={t} onOpen={onOpen} />
      ))}
    </div>
  );
}

export default DailyNudgeCards;
