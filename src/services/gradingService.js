import {
  doc, deleteDoc, getDoc, updateDoc, runTransaction,
  increment, serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase/config';

/**
 * Resolve the stats-document date key from a grading queue item.
 * Priority: item.date → submittedAt timestamp → id prefix.
 */
const resolveStatId = (item) => {
  if (item.date) return item.date;
  if (item.submittedAt) {
    const sAt = item.submittedAt;
    const d = typeof sAt.toDate === 'function' ? sAt.toDate() : new Date(sAt);
    if (!isNaN(d.getTime())) return d.toLocaleDateString('en-CA');
  }
  return item.id.split('_')[0];
};

/**
 * Grade a teacher-review submission.
 *
 * - If approved:
 *   1. Atomically updates user `totalXP`, `points`, and the `leaderboard` doc.
 *   2. Increments `score` / `xpEarned` in the daily_stats or calc_stats sub-doc
 *      and marks the specific answer result as correct.
 * - Removes the item from `grading_queue` LAST, so a failure part-way through
 *   (e.g. quota exhausted) leaves the submission in the queue for a retry
 *   instead of silently losing the student's work.
 *
 * @param {object} item   - Grading queue document data (must include `.id`).
 * @param {boolean} approved
 * @returns {{ xpAwarded: number }}
 */
export const gradeSubmission = async (item, approved) => {
  if (!item || !item.id) {
    throw new Error("Invalid grading item: missing document ID");
  }
  const userId = item.userId;
  if (!userId) {
    throw new Error("Invalid grading item: missing userId");
  }

  if (!approved) {
    await deleteDoc(doc(db, 'grading_queue', item.id));
    return { xpAwarded: 0 };
  }

  const type = item.challengeType || 'daily';

  // Exam prep is unscored practice: approval marks the answer correct for the
  // student's accuracy stats but awards NO XP / points / leaderboard change.
  if (type === 'exam_prep') {
    await deleteDoc(doc(db, 'grading_queue', item.id));
    return { xpAwarded: 0 };
  }
  const colName = type === 'calc' ? 'calc_stats' : 'daily_stats';

  const totalQ = item.totalQuestions || 10;
  const maxXP = type === 'calc' ? 50 : 100;
  const xpPerQuestion = Math.round(maxXP / totalQ);

  // 1. Atomic XP + leaderboard update
  await runTransaction(db, async (transaction) => {
    let userRef = doc(db, 'users', userId);
    let userSnap = await transaction.get(userRef);
    let source = 'registered';

    if (!userSnap.exists()) {
      userRef = doc(db, 'students', userId);
      userSnap = await transaction.get(userRef);
      source = 'manual';
    }

    if (!userSnap.exists()) return;

    const userData = userSnap.data();
    const newXP = (Number(userData.totalXP) || 0) + xpPerQuestion;

    transaction.update(userRef, {
      totalXP: newXP,
      points: increment(10),
      updatedAt: new Date().toISOString(),
    });

    const leaderboardId = source === 'manual' ? `manual-${userId}` : userId;
    const leaderboardRef = doc(db, 'leaderboard', leaderboardId);
    const displayName =
      userData.name ||
      userData.displayName ||
      (userData.firstName ? `${userData.firstName} ${userData.lastName || ''}`.trim() : '') ||
      'Student';
    const avatarUrl =
      userData.avatarUrl ||
      userData.dreamImageUrl ||
      `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(userId)}`;

    transaction.set(leaderboardRef, {
      name: displayName,
      avatarUrl,
      totalXP: newXP,
      lastUpdated: serverTimestamp(),
      role: userData.role || 'student',
      year: userData.year || userData.assignedYear || '',
    }, { merge: true });
  });

  // 2. Update the stats sub-document (daily/calc only — exam_prep returned above).
  const statId = resolveStatId(item);
  const safeStatId = String(statId).replace(/\//g, '-');

  let statRef = doc(db, 'users', userId, colName, safeStatId);
  let statSnap = await getDoc(statRef);
  if (!statSnap.exists()) {
    statRef = doc(db, 'students', userId, colName, safeStatId);
    statSnap = await getDoc(statRef);
  }

  if (statSnap.exists()) {
    const statsData = statSnap.data();
    const updatedResults = [...(statsData.answerResults || [])];
    const qIndex = updatedResults.findIndex((r) => r.questionId === item.questionId);
    if (qIndex !== -1) {
      updatedResults[qIndex].correct = true;
      updatedResults[qIndex].isPending = false;
      updatedResults[qIndex].selectedAnswer = 'Approved';
    }
    await updateDoc(statRef, {
      score: increment(1),
      xpEarned: increment(xpPerQuestion),
      ...(qIndex !== -1 ? { answerResults: updatedResults } : {}),
    });
  }

  // Credit fully applied — now it is safe to remove the queue item.
  await deleteDoc(doc(db, 'grading_queue', item.id));

  return { xpAwarded: xpPerQuestion };
};
