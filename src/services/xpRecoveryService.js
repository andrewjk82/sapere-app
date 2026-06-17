/**
 * XP Recovery Service
 *
 * When a student completes a challenge but the Firestore read quota is
 * exhausted, the runTransaction() that updates totalXP fails silently and
 * stamps `progressSyncFailed: true` on the stat doc.
 *
 * This service runs once per app session (after sign-in) and:
 *   1. Probes the last PROBE_DAYS days of daily_stats + calc_stats by direct
 *      doc ID — no collection scans, no quota waste.
 *   2. For each doc with progressSyncFailed: true, re-applies the missing XP
 *      atomically via runTransaction.
 *   3. Clears the flag so the recovery only runs once per failure.
 */

import {
  doc, getDoc, updateDoc, runTransaction, serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase/config';

const PROBE_DAYS = 7;

const probeDates = () => {
  const dates = [];
  for (let i = 0; i < PROBE_DAYS; i++) {
    dates.push(new Date(Date.now() - i * 86400000).toLocaleDateString('en-CA'));
  }
  return dates;
};

const applyMissingXP = async (uid, xpToAdd, statRef, dateLabel) => {
  const userRef = doc(db, 'users', uid);
  await runTransaction(db, async (tx) => {
    const userSnap = await tx.get(userRef);
    if (!userSnap.exists()) return;

    const currentXP = Number(userSnap.data().totalXP) || 0;
    const newXP = currentXP + xpToAdd;

    tx.update(userRef, {
      totalXP: newXP,
      updatedAt: new Date().toISOString(),
    });

    // Keep leaderboard in sync
    const userData = userSnap.data();
    const leaderboardRef = doc(db, 'leaderboard', uid);
    const displayName =
      userData.name ||
      userData.displayName ||
      (userData.firstName
        ? `${userData.firstName} ${userData.lastName || ''}`.trim()
        : '') ||
      'Student';
    const avatarUrl =
      userData.dreamImageUrl ||
      userData.avatarUrl ||
      `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(uid)}`;

    tx.set(leaderboardRef, {
      name: displayName,
      avatarUrl,
      totalXP: newXP,
      lastUpdated: serverTimestamp(),
      role: userData.role || 'student',
      year: userData.assignedYear || userData.year || '',
    }, { merge: true });
  });

  // Clear the failure flag so this never re-runs for this stat
  await updateDoc(statRef, {
    progressSyncFailed: false,
    progressSyncError: null,
    progressSyncRecoveredAt: new Date().toISOString(),
  });

  console.log(`[xpRecovery] Recovered ${xpToAdd} XP from ${dateLabel}`);
};

/**
 * Call once per session after sign-in.
 * Probes last PROBE_DAYS days of stat docs by direct document ID.
 * Safe to call even when quota is low — each probe is a single doc read.
 */
export const recoverMissingXP = async (uid) => {
  if (!uid) return;

  const dates = probeDates();
  let totalRecovered = 0;

  for (const date of dates) {
    for (const colName of ['daily_stats', 'calc_stats']) {
      try {
        const statRef = doc(db, 'users', uid, colName, date);
        const statSnap = await getDoc(statRef);

        if (!statSnap.exists()) continue;
        const data = statSnap.data();
        if (!data.progressSyncFailed) continue;

        const xpToAdd = Number(data.xpEarned) || 0;
        if (xpToAdd <= 0) {
          // Flag is set but no XP to recover — just clear it
          await updateDoc(statRef, {
            progressSyncFailed: false,
            progressSyncError: null,
            progressSyncRecoveredAt: new Date().toISOString(),
          }).catch(() => {});
          continue;
        }

        await applyMissingXP(uid, xpToAdd, statRef, `${colName}/${date}`);
        totalRecovered += xpToAdd;
      } catch (err) {
        // Still quota-exhausted or offline — silently skip; will retry next session
        if (err?.code === 'resource-exhausted') {
          console.warn(`[xpRecovery] Quota still exhausted — will retry next session`);
          return;
        }
        console.warn(`[xpRecovery] Skipped ${colName}/${date}:`, err?.code || err?.message);
      }
    }
  }

  if (totalRecovered > 0) {
    console.log(`[xpRecovery] Total recovered: ${totalRecovered} XP`);
  }
};
