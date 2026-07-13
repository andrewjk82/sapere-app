/**
 * Secret-Note clear bonus XP (low Firebase cost).
 *
 * Rules (local calendar day, en-CA — same as Daily Challenge):
 *  - Daily-only students (calculationEnabled === false):
 *      empty daily notebook → +10 XP once per day
 *  - Students with calculation test:
 *      empty daily notebook → +5 XP once per day
 *      empty calc notebook  → +5 XP once per day
 *
 * Traffic:
 *  - Note counts: localStorage only (0 reads)
 *  - Idempotency: local watermark + users/{uid}.secretNoteClearBonus on profile
 *    (already in shared ProfileContext — no extra get for the common path)
 *  - Award path: 1 transaction (user + leaderboard merge) — no collection scans
 */

import {
  doc, runTransaction, serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { getNoteCount } from '../utils/secretNote';

/** Feature go-live (local date). Days before this never get the bonus. */
export const SECRET_NOTE_BONUS_START = '2026-07-14';

const localDateKey = () => new Date().toLocaleDateString('en-CA');

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

/**
 * Compute pending bonus from local note counts + already-claimed flags.
 * @returns {{ xp: number, claimDaily: boolean, claimCalc: boolean, claimDailyOnly: boolean, hasCalc: boolean, dateKey: string } | null}
 */
export function computeSecretNoteClearBonus(uid, profile) {
  if (!uid) return null;
  const dateKey = localDateKey();
  if (dateKey < SECRET_NOTE_BONUS_START) return null;

  const hasCalc = profile?.calculationEnabled !== false;
  const dailyEmpty = getNoteCount('daily', uid) === 0;
  const calcEmpty = getNoteCount('calc', uid) === 0;

  const remote = profile?.secretNoteClearBonus;
  const remoteSameDay = remote && String(remote.date) === dateKey;
  const claimed = {
    daily: remoteSameDay ? !!remote.daily : false,
    calc: remoteSameDay ? !!remote.calc : false,
    dailyOnly: remoteSameDay ? !!remote.dailyOnly : false,
  };
  // Local watermark also blocks re-award if profile snapshot is briefly stale.
  const local = readLocalWatermark(uid, dateKey);
  claimed.daily = claimed.daily || local.daily;
  claimed.calc = claimed.calc || local.calc;
  claimed.dailyOnly = claimed.dailyOnly || local.dailyOnly;

  if (!hasCalc) {
    // Daily-only: single 10 XP when daily notebook empty.
    if (!dailyEmpty || claimed.dailyOnly || claimed.daily) {
      return null;
    }
    return {
      xp: 10,
      claimDaily: true,
      claimCalc: false,
      claimDailyOnly: true,
      hasCalc: false,
      dateKey,
    };
  }

  // Calc-enabled: 5 each for empty daily / empty calc notebooks.
  const claimDaily = dailyEmpty && !claimed.daily;
  const claimCalc = calcEmpty && !claimed.calc;
  if (!claimDaily && !claimCalc) return null;
  const xp = (claimDaily ? 5 : 0) + (claimCalc ? 5 : 0);
  return {
    xp,
    claimDaily,
    claimCalc,
    claimDailyOnly: false,
    hasCalc: true,
    dateKey,
  };
}

/**
 * Award pending clear-bonus if eligible. Safe to call often (no-ops cheaply).
 * @returns {Promise<{ awarded: boolean, xp?: number, reason?: string }>}
 */
export async function tryAwardSecretNoteClearBonus(uid, profile) {
  const plan = computeSecretNoteClearBonus(uid, profile);
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

      const hasCalc = data.calculationEnabled !== false;
      let xp = 0;
      if (!hasCalc) {
        if (!claimDailyOnly && !claimDaily) return;
        // Re-check: only award daily-only package once
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
    return { awarded: true, xp: awardedXp, dateKey: plan.dateKey };
  }

  // Lost race / already claimed in transaction
  writeLocalWatermark(uid, plan.dateKey, {
    daily: plan.claimDaily || plan.claimDailyOnly,
    calc: plan.claimCalc,
    dailyOnly: plan.claimDailyOnly,
  });
  return { awarded: false, reason: 'already_claimed' };
}
