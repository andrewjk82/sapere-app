/**
 * Secret-Note clear bonus XP (low Firebase cost).
 *
 * Timing (per product rule):
 *  - NOT awarded the moment notes become empty.
 *  - Settled after that local calendar day's midnight ("저녁 12시").
 *  - On the next day, when the student opens the app, we check whether the
 *    notebook is still empty and award for YESTERDAY (once).
 *
 * Eligibility (important):
 *  - Empty notes alone are NOT enough — "didn't practice → 0 notes" must NOT award.
 *  - Daily bonus requires Daily Practice completed that day.
 *  - Calc bonus requires Basic Calculation completed that day.
 *  - Abandoned / never started → no bonus for that kind.
 *
 * Amounts:
 *  - Daily-only (calculationEnabled === false): +10 if daily notebook empty + daily done
 *  - With calculation: +5 if daily empty + daily done, +5 if calc empty + calc done
 *
 * Traffic:
 *  - Note counts + activity stamps: localStorage (0 reads common path)
 *  - Missing stamp only: 0–2 point-reads of daily_stats / calc_stats for YESTERDAY
 *    (by doc id — never collection scans). Result cached locally.
 *  - Award path: 1 transaction (user + leaderboard)
 */

import {
  doc, getDoc, runTransaction, serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { getNoteCount } from '../utils/secretNote';

/** Feature go-live (local date). Award days before this never get the bonus. */
export const SECRET_NOTE_BONUS_START = '2026-07-14';

const localDateKey = (date = new Date()) => date.toLocaleDateString('en-CA');

/** Calendar day that just ended (local) — the day we may settle at/after midnight. */
export const yesterdayDateKey = () => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return localDateKey(d);
};

const localWatermarkKey = (uid, dateKey) => `sapere:sn-clear-bonus:${uid || 'anon'}:${dateKey}`;

const readLocalWatermark = (uid, dateKey) => {
  try {
    const raw = localStorage.getItem(localWatermarkKey(uid, dateKey));
    if (!raw) return { daily: false, calc: false, dailyOnly: false };
    const p = JSON.parse(raw);
    return {
      daily: !!p.daily,
      calc: !!p.calc,
      dailyOnly: !!p.dailyOnly,
    };
  } catch {
    return { daily: false, calc: false, dailyOnly: false };
  }
};

const writeLocalWatermark = (uid, dateKey, stamp) => {
  try {
    localStorage.setItem(localWatermarkKey(uid, dateKey), JSON.stringify(stamp));
  } catch { /* ignore */ }
};

// ── Challenge completion stamps (local) ────────────────────────────────────
// Survives midnight so we can settle YESTERDAY without scanning history.
// Values: true = completed, false = known not completed, undefined = unknown.
const activityKey = (uid, dateKey) => `sapere:challenge-done:${uid || 'anon'}:${dateKey}`;

const readLocalActivity = (uid, dateKey) => {
  try {
    const raw = localStorage.getItem(activityKey(uid, dateKey));
    if (!raw) return {};
    const p = JSON.parse(raw);
    return {
      daily: typeof p.daily === 'boolean' ? p.daily : undefined,
      calc: typeof p.calc === 'boolean' ? p.calc : undefined,
    };
  } catch {
    return {};
  }
};

const writeLocalActivity = (uid, dateKey, patch) => {
  if (!uid || !dateKey || !patch) return;
  try {
    const prev = readLocalActivity(uid, dateKey);
    const next = {
      daily: typeof patch.daily === 'boolean' ? patch.daily : prev.daily,
      calc: typeof patch.calc === 'boolean' ? patch.calc : prev.calc,
      updatedAt: Date.now(),
    };
    localStorage.setItem(activityKey(uid, dateKey), JSON.stringify(next));
  } catch { /* ignore */ }
};

/**
 * Call when Daily Practice / Basic Calculation is completed (not abandoned).
 * Zero Firebase — stamps the local calendar day for next-day bonus eligibility.
 */
export function markLocalChallengeCompleted(uid, dateKey, kind) {
  if (!uid || !dateKey) return;
  if (kind === 'calc') writeLocalActivity(uid, dateKey, { calc: true });
  else if (kind === 'daily') writeLocalActivity(uid, dateKey, { daily: true });
}

/**
 * Optional: record known incomplete (abandoned / missing stats) so we don't
 * re-point-read the same day.
 */
export function markLocalChallengeNotCompleted(uid, dateKey, kind) {
  if (!uid || !dateKey) return;
  if (kind === 'calc') writeLocalActivity(uid, dateKey, { calc: false });
  else if (kind === 'daily') writeLocalActivity(uid, dateKey, { daily: false });
}

// ── Celebration modal (local only — zero Firebase) ─────────────────────────
const celebrationKey = (uid) => `sapere:sn-clear-celebration:${uid || 'anon'}`;

export function queueSecretNoteClearCelebration(uid, payload) {
  if (!uid || !payload) return;
  try {
    localStorage.setItem(celebrationKey(uid), JSON.stringify({
      xp: Number(payload.xp) || 0,
      dateKey: payload.dateKey || '',
      dailyOnly: !!payload.dailyOnly,
      claimDaily: !!payload.claimDaily,
      claimCalc: !!payload.claimCalc,
      queuedAt: Date.now(),
    }));
  } catch { /* ignore */ }
  try {
    window.dispatchEvent(new CustomEvent('sapere:sn-clear-celebration', {
      detail: { uid, ...(payload || {}) },
    }));
  } catch { /* ignore */ }
}

export function peekSecretNoteClearCelebration(uid) {
  if (!uid) return null;
  try {
    const raw = localStorage.getItem(celebrationKey(uid));
    if (!raw) return null;
    const p = JSON.parse(raw);
    if (!p || !(Number(p.xp) > 0)) return null;
    return p;
  } catch {
    return null;
  }
}

export function dismissSecretNoteClearCelebration(uid) {
  if (!uid) return;
  try { localStorage.removeItem(celebrationKey(uid)); } catch { /* ignore */ }
}

/** Teacher/admin design QA — open celebration modal without awarding XP. */
export const SN_CLEAR_PREVIEW_EVENT = 'sapere:sn-clear-preview';

export function buildSecretNoteClearPreviewPayload(overrides = {}) {
  return {
    xp: Number(overrides.xp) > 0 ? Number(overrides.xp) : 10,
    dateKey: overrides.dateKey || new Date().toLocaleDateString('en-CA'),
    dailyOnly: overrides.dailyOnly !== false,
    claimDaily: overrides.claimDaily !== false,
    claimCalc: !!overrides.claimCalc,
    _previewAt: Date.now(),
  };
}

export function requestSecretNoteClearModalPreview(overrides = {}) {
  const sample = buildSecretNoteClearPreviewPayload(overrides);
  try {
    window.dispatchEvent(new CustomEvent(SN_CLEAR_PREVIEW_EVENT, { detail: sample }));
  } catch { /* ignore */ }
  return sample;
}

/**
 * Build award plan from note emptiness + claimed flags + activity stamps.
 * @param {{ daily?: boolean, calc?: boolean }} done  true only when completed that day
 */
export function buildSecretNoteClearBonusPlan(uid, profile, done = {}, awardDate = yesterdayDateKey()) {
  if (!uid) return null;
  if (awardDate < SECRET_NOTE_BONUS_START) return null;

  const hasCalc = profile?.calculationEnabled !== false;
  const dailyEmpty = getNoteCount('daily', uid) === 0;
  const calcEmpty = getNoteCount('calc', uid) === 0;
  const dailyDone = done.daily === true;
  const calcDone = done.calc === true;

  const remote = profile?.secretNoteClearBonus;
  const remoteSameDay = remote && String(remote.date) === awardDate;
  const claimed = {
    daily: remoteSameDay ? !!remote.daily : false,
    calc: remoteSameDay ? !!remote.calc : false,
    dailyOnly: remoteSameDay ? !!remote.dailyOnly : false,
  };
  const local = readLocalWatermark(uid, awardDate);
  claimed.daily = claimed.daily || local.daily;
  claimed.calc = claimed.calc || local.calc;
  claimed.dailyOnly = claimed.dailyOnly || local.dailyOnly;

  if (!hasCalc) {
    // Must have finished Daily Practice that day — empty alone (skipped day) is not enough.
    if (!dailyEmpty || !dailyDone || claimed.dailyOnly || claimed.daily) return null;
    return {
      xp: 10,
      claimDaily: true,
      claimCalc: false,
      claimDailyOnly: true,
      hasCalc: false,
      dateKey: awardDate,
    };
  }

  const claimDaily = dailyEmpty && dailyDone && !claimed.daily;
  const claimCalc = calcEmpty && calcDone && !claimed.calc;
  if (!claimDaily && !claimCalc) return null;
  return {
    xp: (claimDaily ? 5 : 0) + (claimCalc ? 5 : 0),
    claimDaily,
    claimCalc,
    claimDailyOnly: false,
    hasCalc: true,
    dateKey: awardDate,
  };
}

/**
 * Sync local-only compute (uses stamps already on device).
 * Prefer tryAwardSecretNoteClearBonus for full eligibility (may point-read once).
 */
export function computeSecretNoteClearBonus(uid, profile) {
  if (!uid) return null;
  const awardDate = yesterdayDateKey();
  if (awardDate < SECRET_NOTE_BONUS_START) return null;
  return buildSecretNoteClearBonusPlan(uid, profile, readLocalActivity(uid, awardDate), awardDate);
}

/**
 * Resolve whether student completed daily/calc on awardDate.
 * Uses local stamps first; only point-reads missing kinds (max 2 gets).
 */
async function resolveActivityForDate(uid, awardDate, { needDaily, needCalc }) {
  const local = readLocalActivity(uid, awardDate);
  let daily = local.daily;
  let calc = local.calc;

  const reads = [];
  if (needDaily && daily !== true && daily !== false) {
    reads.push(
      getDoc(doc(db, 'users', uid, 'daily_stats', awardDate))
        .then((snap) => {
          daily = !!(snap.exists() && snap.data()?.completed === true);
          writeLocalActivity(uid, awardDate, { daily });
        })
        .catch(() => {
          // Leave unknown → treat as not done for safety (no free XP).
          daily = false;
          writeLocalActivity(uid, awardDate, { daily: false });
        }),
    );
  }
  if (needCalc && calc !== true && calc !== false) {
    reads.push(
      getDoc(doc(db, 'users', uid, 'calc_stats', awardDate))
        .then((snap) => {
          calc = !!(snap.exists() && snap.data()?.completed === true);
          writeLocalActivity(uid, awardDate, { calc });
        })
        .catch(() => {
          calc = false;
          writeLocalActivity(uid, awardDate, { calc: false });
        }),
    );
  }
  if (reads.length) await Promise.all(reads);

  return {
    daily: daily === true,
    calc: calc === true,
  };
}

/**
 * Award pending clear-bonus for yesterday if eligible.
 * Safe to call often — no-ops until after midnight + empty notes + completed practice.
 */
export async function tryAwardSecretNoteClearBonus(uid, profile) {
  if (!uid) return { awarded: false, reason: 'ineligible' };

  const awardDate = yesterdayDateKey();
  if (awardDate < SECRET_NOTE_BONUS_START) {
    return { awarded: false, reason: 'ineligible' };
  }

  const hasCalc = profile?.calculationEnabled !== false;
  const dailyEmpty = getNoteCount('daily', uid) === 0;
  const calcEmpty = getNoteCount('calc', uid) === 0;

  // Nothing empty → cannot award; zero network.
  if (!hasCalc && !dailyEmpty) return { awarded: false, reason: 'ineligible' };
  if (hasCalc && !dailyEmpty && !calcEmpty) return { awarded: false, reason: 'ineligible' };

  // Only resolve activity for kinds that are empty (and thus could claim).
  const done = await resolveActivityForDate(uid, awardDate, {
    needDaily: dailyEmpty,
    needCalc: hasCalc && calcEmpty,
  });

  const plan = buildSecretNoteClearBonusPlan(uid, profile, done, awardDate);
  if (!plan || plan.xp <= 0) {
    return { awarded: false, reason: 'ineligible' };
  }

  const userRef = doc(db, 'users', uid);
  let awardedXp = 0;

  try {
    await runTransaction(db, async (tx) => {
      const snap = await tx.get(userRef);
      if (!snap.exists()) return;
      const data = snap.data() || {};
      const dateKey = plan.dateKey;
      const remote = data.secretNoteClearBonus;
      const sameDay = remote && String(remote.date) === dateKey;

      let claimDaily = plan.claimDaily;
      let claimCalc = plan.claimCalc;
      let claimDailyOnly = plan.claimDailyOnly;

      if (sameDay) {
        if (remote.dailyOnly || remote.daily) {
          claimDaily = false;
          claimDailyOnly = false;
        }
        if (remote.calc) claimCalc = false;
      }

      const remoteHasCalc = data.calculationEnabled !== false;
      let xp = 0;
      if (!remoteHasCalc) {
        if (!claimDailyOnly && !claimDaily) return;
        if (sameDay && (remote.dailyOnly || remote.daily)) return;
        xp = 10;
        claimDailyOnly = true;
        claimDaily = true;
        claimCalc = false;
      } else {
        xp = (claimDaily ? 5 : 0) + (claimCalc ? 5 : 0);
        if (xp <= 0) return;
      }

      const currentXP = Number(data.totalXP) || 0;
      const newXP = currentXP + xp;
      awardedXp = xp;

      const nextBonus = {
        date: dateKey,
        daily: !!(sameDay && remote?.daily) || claimDaily || claimDailyOnly,
        calc: !!(sameDay && remote?.calc) || claimCalc,
        dailyOnly: !!(sameDay && remote?.dailyOnly) || claimDailyOnly,
        xp: (sameDay ? Number(remote?.xp) || 0 : 0) + xp,
        settledAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      tx.set(userRef, {
        totalXP: newXP,
        secretNoteClearBonus: nextBonus,
        updatedAt: new Date().toISOString(),
      }, { merge: true });

      const displayName =
        data.name ||
        data.displayName ||
        (data.firstName ? `${data.firstName} ${data.lastName || ''}`.trim() : '') ||
        'Student';
      const avatarUrl =
        data.dreamImageUrl ||
        data.avatarUrl ||
        `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(uid)}`;

      tx.set(doc(db, 'leaderboard', uid), {
        name: displayName,
        avatarUrl,
        totalXP: newXP,
        lastUpdated: serverTimestamp(),
        role: data.role || 'student',
        year: data.assignedYear || data.year || '',
      }, { merge: true });
    });
  } catch (err) {
    console.warn('[secretNoteBonus] award failed:', err?.code || err?.message || err);
    return { awarded: false, reason: err?.code || 'transaction_failed' };
  }

  if (awardedXp > 0) {
    const stamp = readLocalWatermark(uid, plan.dateKey);
    writeLocalWatermark(uid, plan.dateKey, {
      daily: stamp.daily || plan.claimDaily || plan.claimDailyOnly,
      calc: stamp.calc || plan.claimCalc,
      dailyOnly: stamp.dailyOnly || plan.claimDailyOnly,
    });
    queueSecretNoteClearCelebration(uid, {
      xp: awardedXp,
      dateKey: plan.dateKey,
      dailyOnly: plan.claimDailyOnly,
      claimDaily: plan.claimDaily,
      claimCalc: plan.claimCalc,
    });
    return { awarded: true, xp: awardedXp, dateKey: plan.dateKey };
  }

  writeLocalWatermark(uid, plan.dateKey, {
    daily: plan.claimDaily || plan.claimDailyOnly,
    calc: plan.claimCalc,
    dailyOnly: plan.claimDailyOnly,
  });
  return { awarded: false, reason: 'already_claimed' };
}
