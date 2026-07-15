/**
 * Daily Practice / Calculation difficulty modes.
 * Time is scaled from each question's base timeLimit.
 * Bonus XP = share of base session XP on successful completion (not abandoned).
 *   Challenge → 5% of earned XP
 *   Extreme   → 10% of earned XP
 */
export const CHALLENGE_MODES = {
  normal: {
    id: 'normal',
    label: 'Normal',
    tagline: 'Classic pace',
    timeScale: 1,
    bonusPercent: 0,
    icon: 'shield',
    color: '#3b82f6',
    glow: 'rgba(59, 130, 246, 0.45)',
    gradient: 'linear-gradient(145deg, #60a5fa 0%, #2563eb 55%, #1d4ed8 100%)',
    speech:
      "Normal mode — same timers you know. Great for learning carefully and checking your working out. Let's go steady!",
  },
  challenge: {
    id: 'challenge',
    label: 'Challenge',
    tagline: '30% less time',
    timeScale: 0.7,
    bonusPercent: 0.05,
    icon: 'zap',
    color: '#f59e0b',
    glow: 'rgba(245, 158, 11, 0.5)',
    gradient: 'linear-gradient(145deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
    speech:
      "Challenge mode! Clocks run 30% faster. Stay sharp — finish the set and I'll add 5% extra XP on what you earn. You've got this!",
  },
  extreme: {
    id: 'extreme',
    label: 'Extreme',
    tagline: '50% less time',
    timeScale: 0.5,
    bonusPercent: 0.1,
    icon: 'flame',
    color: '#ef4444',
    glow: 'rgba(239, 68, 68, 0.55)',
    gradient: 'linear-gradient(145deg, #f87171 0%, #ef4444 45%, #b91c1c 100%)',
    speech:
      "Extreme mode — half the time! Only pick this if you're ready to fly. Clear the challenge and bank 10% extra XP on your score. No pressure… okay, a little pressure!",
  },
};

export const CHALLENGE_MODE_LIST = [
  CHALLENGE_MODES.normal,
  CHALLENGE_MODES.challenge,
  CHALLENGE_MODES.extreme,
];

export const getChallengeMode = (id) =>
  CHALLENGE_MODES[id] || CHALLENGE_MODES.normal;

/** Scale per-question timeLimit (min 5s so timers never vanish). */
export const applyModeTimeScale = (questions, modeId) => {
  const mode = getChallengeMode(modeId);
  const scale = Number(mode.timeScale) || 1;
  if (scale === 1) return questions;
  return (questions || []).map((q) => {
    const base = Math.max(5, Number(q?.timeLimit) || 30);
    return {
      ...q,
      timeLimit: Math.max(5, Math.round(base * scale)),
      _baseTimeLimit: base,
      _challengeMode: mode.id,
    };
  });
};

/**
 * Bonus XP as a percent of base session XP (from accuracy).
 * Challenge = 5%, Extreme = 10%, Normal = 0. Rounded to nearest integer.
 */
export const getModeBonusXp = (modeId, { abandoned = false, baseXp = 0 } = {}) => {
  if (abandoned) return 0;
  const pct = Number(getChallengeMode(modeId).bonusPercent) || 0;
  if (pct <= 0) return 0;
  const base = Math.max(0, Number(baseXp) || 0);
  return Math.round(base * pct);
};

export const formatModeBonusLabel = (modeId) => {
  const pct = Number(getChallengeMode(modeId).bonusPercent) || 0;
  if (pct <= 0) return 'No bonus XP';
  return `+${Math.round(pct * 100)}% of XP`;
};
