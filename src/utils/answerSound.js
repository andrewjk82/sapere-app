// "Ding-dong" for a right answer and a low "dang" for a wrong one. Synthesised with
// Web Audio (no audio files, no network), played from the tap that submitted the
// answer so iOS Safari allows it. The student can turn it off (Settings); the choice
// lives only in this browser.

const KEY = 'sapere:answerSound:v1';
let ctx = null;

export const isAnswerSoundOn = (storage = globalThis.localStorage) => {
  try { return storage.getItem(KEY) !== 'off'; } catch { return true; }
};

export const setAnswerSoundOn = (on, storage = globalThis.localStorage) => {
  try { storage.setItem(KEY, on ? 'on' : 'off'); } catch { /* private mode: not remembered */ }
};

const getCtx = () => {
  if (ctx) return ctx;
  const AC = typeof window !== 'undefined' && (window.AudioContext || window.webkitAudioContext);
  if (!AC) return null;
  try { ctx = new AC(); } catch { ctx = null; }
  return ctx;
};

// One bell-like note: a sine plus a quiet octave overtone, fast attack, exponential decay.
const note = (c, freq, start, dur, peak, type = 'sine', overtone = 2) => {
  const t0 = c.currentTime + start;
  const out = c.createGain();
  out.gain.setValueAtTime(0.0001, t0);
  out.gain.exponentialRampToValueAtTime(peak, t0 + 0.012);
  out.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  out.connect(c.destination);
  [[1, 1], [overtone, 0.22]].forEach(([mult, amp]) => {
    const osc = c.createOscillator();
    const g = c.createGain();
    osc.type = type;
    osc.frequency.value = freq * mult;
    g.gain.value = amp;
    osc.connect(g).connect(out);
    osc.start(t0);
    osc.stop(t0 + dur + 0.05);
  });
};

const play = (build) => {
  if (!isAnswerSoundOn()) return;
  const c = getCtx();
  if (!c) return;
  try {
    if (c.state === 'suspended') c.resume().catch(() => {});
    build(c);
  } catch { /* sound is never worth breaking a quiz for */ }
};

// Ding (E6) … dong (A6): bright and rising.
export const playCorrect = () => play((c) => {
  note(c, 1318.5, 0, 0.45, 0.16);
  note(c, 1760, 0.16, 0.6, 0.16);
});

// Two close low notes, slightly sour and short: "dang".
export const playWrong = () => play((c) => {
  note(c, 196, 0, 0.42, 0.18, 'triangle', 1.5);
  note(c, 207.7, 0, 0.42, 0.14, 'triangle', 1.5);
});

// For grading code that only knows right/wrong/pending: true → ding-dong, false → dang,
// anything else (null/undefined = waiting for the teacher) → silent.
export const playAnswerResult = (correct) => {
  if (correct === true) playCorrect();
  else if (correct === false) playWrong();
};
