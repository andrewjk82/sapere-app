/* ==========================================================================
   Weekly Times Table Sprint — XP settlement
   --------------------------------------------------------------------------
   Runs server-side (admin SDK) from api/cron-unified.js once a week has
   finished. The client never grants sprint XP: it only records times, so a
   tampered client can at most publish a fake time, never mint XP.

   Idempotency is load-bearing — the cron is pinged hourly and the settlement
   window spans several hours, so the same week WILL be processed more than
   once. `awardedUids` on timestable_sprint_settlement/{weekId} is the
   processed set; a uid already in it is skipped, so no student is ever paid
   twice.

   Week ids come from src/utils/sprintWeek.js so the browser and this job can
   never disagree about which week a run belonged to. (Same cross-tree import
   precedent as weeklyReport.js importing src/constants/curriculumData.js —
   the module is dependency-free plain ESM.)
   ========================================================================== */

import { getPreviousSprintWeekId } from '../../src/utils/sprintWeek.js';

export const RESULTS_COLLECTION = 'timestable_sprint_results';
export const SETTLEMENT_COLLECTION = 'timestable_sprint_settlement';

export const SPRINT_XP_TIERS = [100, 50, 20];
export const SPRINT_XP_PARTICIPATION = 5;

const ADMIN_UID = 'MeohP8s0LkPWSTWgEbzc7uaWVEG2';

export const xpForRank = (rank) => SPRINT_XP_TIERS[rank - 1] ?? SPRINT_XP_PARTICIPATION;

/**
 * Rank the week's participants: fastest first, and where two students share
 * a time the one who reached it first is placed higher.
 */
const rankParticipants = (docs) => docs
  .map((d) => ({ id: d.id, ...d.data() }))
  .filter((r) => r.userId && r.userId !== ADMIN_UID && Number.isFinite(Number(r.bestTimeMs)))
  .sort((a, b) => (
    Number(a.bestTimeMs) - Number(b.bestTimeMs)
    || String(a.bestAchievedAt || '').localeCompare(String(b.bestAchievedAt || ''))
  ));

/**
 * Settle one week.
 *
 * @param {FirebaseFirestore.Firestore} db
 * @param {object} admin — the firebase-admin namespace (for FieldValue)
 * @param {object} [options]
 * @param {string} [options.weekId] — defaults to the week just ended
 * @returns {Promise<{ weekId, awarded, skipped, participants, logs }>}
 */
export async function settleSprintWeek(db, admin, { weekId, now = new Date() } = {}) {
  const targetWeek = weekId || getPreviousSprintWeekId(now);
  const logs = [];

  const settlementRef = db.collection(SETTLEMENT_COLLECTION).doc(targetWeek);
  const settlementSnap = await settlementRef.get();
  const settlement = settlementSnap.exists ? settlementSnap.data() : {};

  if (settlement.status === 'complete') {
    logs.push(`[Sprint] Week ${targetWeek} already settled.`);
    return { weekId: targetWeek, awarded: 0, skipped: 0, participants: 0, logs };
  }

  const resultsSnap = await db.collection(RESULTS_COLLECTION)
    .where('weekId', '==', targetWeek)
    .orderBy('bestTimeMs', 'asc')
    .get();

  const ranked = rankParticipants(resultsSnap.docs);
  if (ranked.length === 0) {
    await settlementRef.set({
      weekId: targetWeek,
      status: 'complete',
      participantCount: 0,
      awardedUids: [],
      lastRunAt: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });
    logs.push(`[Sprint] Week ${targetWeek}: nobody played.`);
    return { weekId: targetWeek, awarded: 0, skipped: 0, participants: 0, logs };
  }

  const alreadyAwarded = new Set(settlement.awardedUids || []);
  const podium = [];
  let awarded = 0;
  let skipped = 0;

  for (let i = 0; i < ranked.length; i++) {
    const entry = ranked[i];
    const rank = i + 1;
    const xp = xpForRank(rank);

    if (rank <= 3) {
      podium.push({ rank, userId: entry.userId, name: entry.name || 'Student', bestTimeMs: Number(entry.bestTimeMs), xp });
    }

    if (alreadyAwarded.has(entry.userId)) { skipped++; continue; }

    try {
      const userRef = db.collection('users').doc(entry.userId);
      const leaderboardRef = db.collection('leaderboard').doc(entry.userId);

      await db.runTransaction(async (tx) => {
        const userSnap = await tx.get(userRef);
        if (!userSnap.exists) throw new Error('user doc missing');
        const data = userSnap.data();
        const newXP = (Number(data.totalXP) || 0) + xp;

        tx.update(userRef, { totalXP: newXP, updatedAt: new Date().toISOString() });
        // Mirror doc the app's global leaderboard reads from.
        tx.set(leaderboardRef, {
          totalXP: newXP,
          lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
        }, { merge: true });
      });

      // Stamp the result doc so the payout is auditable from the record itself.
      await db.collection(RESULTS_COLLECTION).doc(entry.id).set({
        settledRank: rank,
        settledXp: xp,
        settledAt: admin.firestore.FieldValue.serverTimestamp(),
      }, { merge: true });

      alreadyAwarded.add(entry.userId);
      awarded++;
    } catch (e) {
      logs.push(`[Sprint] ${entry.userId} award failed: ${e.message}`);
    }

    // Record progress as we go: a timeout mid-loop must not replay payouts.
    await settlementRef.set({
      weekId: targetWeek,
      status: 'partial',
      awardedUids: [...alreadyAwarded],
      participantCount: ranked.length,
      lastRunAt: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });
  }

  const complete = ranked.every((r) => alreadyAwarded.has(r.userId));
  await settlementRef.set({
    weekId: targetWeek,
    status: complete ? 'complete' : 'partial',
    awardedUids: [...alreadyAwarded],
    participantCount: ranked.length,
    podium,
    lastRunAt: admin.firestore.FieldValue.serverTimestamp(),
  }, { merge: true });

  logs.push(
    `[Sprint] Week ${targetWeek}: ${ranked.length} participant(s), ${awarded} awarded, ${skipped} already paid.`
    + (podium[0] ? ` Winner: ${podium[0].name} (${podium[0].bestTimeMs}ms).` : ''),
  );

  return { weekId: targetWeek, awarded, skipped, participants: ranked.length, logs };
}
