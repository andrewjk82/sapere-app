/**
 * Mode Review — lightweight index of Challenge / Extreme sessions.
 *
 * Pointers live in `mode_review/{studentId}_{statCollection}_{statDocId}` and
 * only store IDs + summary fields. Detail (questions, answers, working-out)
 * is always loaded on demand from the existing daily_stats / calc_stats tree
 * so we never re-upload snapshots or images.
 */
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  runTransaction,
  serverTimestamp,
  setDoc,
  updateDoc,
  writeBatch,
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { getModeBonusXp, getChallengeMode } from '../constants/challengeModes';
import { getEarnedXp } from '../utils/challengeUtils';

const COLLECTION = 'mode_review';
const LIST_LIMIT = 80;

/** Default copy shown on the student penalty modal. */
export const DEFAULT_MODE_BONUS_PENALTY_MESSAGE =
  'Your teacher removed the Challenge / Extreme mode bonus for this session because your working out was incomplete or not done properly.\n\nFrom next week, write full working out on every question — not empty boards or quick dots only. Your base practice XP is kept; only the mode bonus was removed.';

/** Stable pointer id so one student + day + type overwrites (no duplicates). */
export const modeReviewDocId = (studentId, statCollection, statDocId) =>
  `${studentId}_${statCollection}_${statDocId}`;

/**
 * Write/update a Mode Review pointer after a Challenge/Extreme finish.
 * Best-effort — never throw into the quiz completion path.
 */
export async function recordModeReviewSession({
  studentId,
  studentName,
  challengeType,
  challengeMode,
  statCollection,
  statDocId,
  score,
  total,
  hasWorkingOut = false,
  modeBonusXp = 0,
  xpEarned = 0,
  timestamp,
} = {}) {
  if (!studentId || !statCollection || !statDocId) return null;
  const mode = String(challengeMode || '').toLowerCase();
  if (mode !== 'challenge' && mode !== 'extreme') return null;

  const id = modeReviewDocId(studentId, statCollection, statDocId);
  const payload = {
    studentId,
    studentName: studentName || 'Student',
    challengeType: challengeType === 'calc' ? 'calc' : 'daily',
    challengeMode: mode,
    statCollection,
    statDocId,
    score: Number(score) || 0,
    total: Number(total) || 0,
    hasWorkingOut: Boolean(hasWorkingOut),
    modeBonusXp: Math.max(0, Number(modeBonusXp) || 0),
    xpEarned: Math.max(0, Number(xpEarned) || 0),
    modeBonusRevoked: false,
    // Fresh finish always counts as new for the teacher badge.
    reviewed: false,
    reviewedAt: null,
    timestamp: timestamp || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  await setDoc(doc(db, COLLECTION, id), payload, { merge: true });
  return { id, ...payload };
}

/** True when the teacher has not opened / cleared this session yet. */
export function isModeReviewUnreviewed(session) {
  return session?.reviewed !== true;
}

export function countUnreviewedModeSessions(sessions = []) {
  return sessions.filter(isModeReviewUnreviewed).length;
}

/** Mark a Mode Review pointer as reviewed (badge count drops). */
export async function markModeReviewReviewed(id) {
  if (!id) return;
  const nowIso = new Date().toISOString();
  await updateDoc(doc(db, COLLECTION, id), {
    reviewed: true,
    reviewedAt: nowIso,
    updatedAt: nowIso,
  });
}

/** Remove a single Mode Review pointer (student history stays intact). */
export async function deleteModeReviewSession(id) {
  if (!id) return;
  await deleteDoc(doc(db, COLLECTION, id));
}

/**
 * Delete all pointers already marked reviewed.
 * Only removes the teacher index — never touches daily_stats / working_out.
 */
export async function deleteReviewedModeReviewSessions(sessions = []) {
  const ids = sessions
    .filter((s) => s?.reviewed === true && s?.id)
    .map((s) => s.id);
  if (ids.length === 0) return 0;

  // Firestore batch limit 500.
  for (let i = 0; i < ids.length; i += 450) {
    const chunk = ids.slice(i, i + 450);
    const batch = writeBatch(db);
    chunk.forEach((id) => batch.delete(doc(db, COLLECTION, id)));
    await batch.commit();
  }
  return ids.length;
}

/**
 * Resolve how much mode bonus XP is still on this session (0 if already revoked).
 */
export function resolveModeBonusXp(pointer = {}, statData = null) {
  if (pointer.modeBonusRevoked || statData?.modeBonusRevoked) return 0;
  const fromStat = Number(statData?.modeBonusXp);
  if (fromStat > 0) return fromStat;
  const fromPtr = Number(pointer.modeBonusXp);
  if (fromPtr > 0) return fromPtr;

  // Recompute from score if older pointers lack modeBonusXp.
  const modeId = pointer.challengeMode || statData?.challengeMode;
  if (modeId !== 'challenge' && modeId !== 'extreme') return 0;
  const score = Number(statData?.score ?? pointer.score) || 0;
  const total = Number(statData?.total ?? pointer.total) || 0;
  const type = (pointer.challengeType || statData?.challengeType) === 'calc' ? 'calc' : 'daily';
  // hasCalculationTest unknown in review — use true (50 XP daily max); bonus % still matches.
  const baseXp = getEarnedXp(score, total, type, true);
  return getModeBonusXp(modeId, { abandoned: false, baseXp });
}

/**
 * Teacher action: strip mode bonus XP from the student, zero it on the stat
 * + mode_review pointer, and queue a student-facing penalty notice modal.
 */
export async function revokeModeBonus(pointer, {
  message = DEFAULT_MODE_BONUS_PENALTY_MESSAGE,
  teacherNote = '',
} = {}) {
  if (!pointer?.studentId || !pointer?.statCollection || !pointer?.statDocId) {
    throw new Error('Missing session pointer');
  }
  if (pointer.modeBonusRevoked) {
    throw new Error('Bonus already removed');
  }

  const { studentId, statCollection, statDocId } = pointer;
  const pointerId = pointer.id || modeReviewDocId(studentId, statCollection, statDocId);
  const userRef = doc(db, 'users', studentId);
  const statRef = doc(db, 'users', studentId, statCollection, statDocId);
  const pointerRef = doc(db, COLLECTION, pointerId);
  const leaderboardRef = doc(db, 'leaderboard', studentId);

  const result = await runTransaction(db, async (tx) => {
    // Sequential reads required by Firestore transactions.
    const userSnap = await tx.get(userRef);
    const statSnap = await tx.get(statRef);
    const pointerSnap = await tx.get(pointerRef);

    const statData = statSnap.exists() ? statSnap.data() : null;
    const ptrData = pointerSnap.exists() ? { id: pointerSnap.id, ...pointerSnap.data() } : pointer;
    const merged = { ...ptrData, ...pointer };

    if (merged.modeBonusRevoked || statData?.modeBonusRevoked) {
      throw new Error('Bonus already removed');
    }

    const bonus = resolveModeBonusXp(merged, statData);
    if (bonus <= 0) {
      throw new Error('No mode bonus XP found on this session');
    }

    const userData = userSnap.exists() ? userSnap.data() : {};
    const currentXP = Number(userData.totalXP) || 0;
    const newXP = Math.max(0, currentXP - bonus);
    const nowIso = new Date().toISOString();
    const modeId = merged.challengeMode || statData?.challengeMode || 'challenge';
    const modeLabel = getChallengeMode(modeId).label;
    const challengeType = (merged.challengeType || statData?.challengeType) === 'calc' ? 'calc' : 'daily';
    const typeLabel = challengeType === 'calc' ? 'Calculation' : 'Daily Practice';

    const notice = {
      amount: bonus,
      challengeMode: modeId,
      modeLabel,
      challengeType,
      typeLabel,
      date: statDocId,
      statCollection,
      message: String(message || DEFAULT_MODE_BONUS_PENALTY_MESSAGE).trim(),
      teacherNote: String(teacherNote || '').trim(),
      studentName: merged.studentName || userData.name || userData.displayName || 'Student',
      createdAt: nowIso,
      xpBefore: currentXP,
      xpAfter: newXP,
    };

    tx.set(userRef, {
      totalXP: newXP,
      modeBonusPenaltyNotice: notice,
      lastActive: nowIso,
    }, { merge: true });

    tx.set(leaderboardRef, {
      totalXP: newXP,
      lastUpdated: serverTimestamp(),
    }, { merge: true });

    if (statSnap.exists()) {
      const prevEarned = Number(statData.xpEarned);
      const nextEarned = Number.isFinite(prevEarned)
        ? Math.max(0, prevEarned - bonus)
        : undefined;
      tx.set(statRef, {
        modeBonusXp: 0,
        modeBonusRevoked: true,
        modeBonusRevokedAt: nowIso,
        modeBonusRevokedAmount: bonus,
        ...(nextEarned !== undefined ? { xpEarned: nextEarned } : {}),
      }, { merge: true });
    }

    tx.set(pointerRef, {
      modeBonusXp: 0,
      modeBonusRevoked: true,
      modeBonusRevokedAt: nowIso,
      modeBonusRevokedAmount: bonus,
      reviewed: true,
      reviewedAt: nowIso,
      updatedAt: nowIso,
    }, { merge: true });

    return { bonus, newXP, previousXP: currentXP, notice };
  });

  // Non-transactional notification (best-effort inbox entry).
  try {
    const notifRef = doc(collection(db, 'users', studentId, 'notifications'));
    await setDoc(notifRef, {
      type: 'mode_bonus_revoked',
      title: 'Mode bonus removed',
      body: `−${result.bonus} XP mode bonus · write full working out next time`,
      message: result.notice.message,
      read: false,
      timestamp: serverTimestamp(),
      metadata: {
        type: 'mode_bonus_revoked',
        amount: result.bonus,
        date: statDocId,
        challengeMode: pointer.challengeMode,
        challengeType: pointer.challengeType,
      },
    });
  } catch (err) {
    console.warn('[modeReview] penalty notification failed (non-fatal):', err?.code || err);
  }

  return result;
}

/** Student dismisses the penalty modal after reading it. */
export async function clearModeBonusPenaltyNotice(uid) {
  if (!uid) return;
  await updateDoc(doc(db, 'users', uid), {
    modeBonusPenaltyNotice: null,
  });
}

/**
 * List recent Mode Review pointers (newest first).
 * Client-side filters keep us free of composite indexes for day-1 traffic.
 */
export async function fetchModeReviewSessions({ max = LIST_LIMIT } = {}) {
  const q = query(
    collection(db, COLLECTION),
    orderBy('timestamp', 'desc'),
    limit(Math.min(200, Math.max(1, max))),
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

/**
 * Point-read the stats doc + optional detail_snapshot for a pointer.
 * Returns a shape compatible with ChallengeDetailModal / StudentDetail.
 */
export async function loadModeReviewDetail(pointer) {
  if (!pointer?.studentId || !pointer?.statCollection || !pointer?.statDocId) {
    return null;
  }

  const { studentId, statCollection, statDocId } = pointer;
  const statRef = doc(db, 'users', studentId, statCollection, statDocId);
  const statSnap = await getDoc(statRef);

  const base = statSnap.exists()
    ? { id: statDocId, ...statSnap.data() }
    : {
        id: statDocId,
        score: pointer.score,
        total: pointer.total,
        challengeType: pointer.challengeType,
        challengeMode: pointer.challengeMode,
        hasDetailSnapshot: true,
        hasWorkingOut: pointer.hasWorkingOut,
        timestamp: pointer.timestamp,
      };

  const challenge = {
    ...base,
    id: statDocId,
    studentId,
    studentName: pointer.studentName,
    statCollection,
    challengeType:
      base.challengeType ||
      pointer.challengeType ||
      (statCollection === 'calc_stats' ? 'calc' : 'daily'),
    challengeMode: base.challengeMode || pointer.challengeMode,
    hasDetailSnapshot: base.hasDetailSnapshot !== false,
    detailSnapshotLoaded: false,
    questions: Array.isArray(base.questions) ? base.questions : [],
    userAnswers: Array.isArray(base.userAnswers) ? base.userAnswers : [],
    answerResults: Array.isArray(base.answerResults) ? base.answerResults : [],
  };

  // Prefer detail_snapshot when present (normal post-v9 path).
  if (!challenge.questions.length || challenge.hasDetailSnapshot) {
    try {
      const detailRef = doc(
        db,
        'users',
        studentId,
        statCollection,
        statDocId,
        'detail_snapshot',
        'main',
      );
      const detailSnap = await getDoc(detailRef);
      if (detailSnap.exists()) {
        const data = detailSnap.data();
        challenge.questions = data.questions || challenge.questions || [];
        challenge.userAnswers = data.userAnswers || challenge.userAnswers || [];
        challenge.answerResults = data.answerResults || challenge.answerResults || [];
        if (Array.isArray(data.questionComments)) {
          challenge.questionComments = data.questionComments;
        }
      }
    } catch (err) {
      console.warn('[modeReview] detail_snapshot load failed:', err?.code || err);
    }
  }

  challenge.detailSnapshotLoaded = true;
  return challenge;
}

/**
 * Lazy-load working_out/{idx} docs for results that only have hasWorkingOut.
 * Mutates/returns a new answerResults array with images filled in.
 */
export async function loadModeReviewWorkingOut(pointer, answerResults) {
  if (!pointer?.studentId || !pointer?.statCollection || !pointer?.statDocId) {
    return answerResults || [];
  }
  const results = Array.isArray(answerResults) ? [...answerResults] : [];
  const missing = results
    .map((result, idx) => ({ result, idx }))
    .filter(
      ({ result }) =>
        result?.hasWorkingOut &&
        !result.workingOut &&
        !(Array.isArray(result.workingOutPages) && result.workingOutPages.length > 0),
    );

  if (missing.length === 0) return results;

  const { studentId, statCollection, statDocId } = pointer;
  await Promise.all(
    missing.map(async ({ idx }) => {
      try {
        const snap = await getDoc(
          doc(db, 'users', studentId, statCollection, statDocId, 'working_out', String(idx)),
        );
        if (!snap.exists()) return;
        const data = snap.data();
        results[idx] = {
          ...(results[idx] || {}),
          workingOut: data.workingOut || null,
          workingOutPages: data.workingOutPages || [],
        };
      } catch (err) {
        console.warn(`[modeReview] working_out[${idx}] failed:`, err?.code || err);
      }
    }),
  );

  return results;
}
