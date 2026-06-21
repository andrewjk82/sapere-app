import {
  doc, deleteDoc, getDoc, updateDoc, runTransaction,
  increment, serverTimestamp, arrayUnion, collection, addDoc,
} from 'firebase/firestore';
import { db } from '../firebase/config';

/**
 * Persist every manually-graded submission as a card in the student's Feedback
 * page store (users/{uid}/saved_feedback) and bump the unread badge counter.
 * Manual submissions live only in grading_queue (not in the student's stat
 * answerResults), so without this card the student never sees the result.
 * @param {import('firebase/firestore').DocumentReference} userRef users/{uid} or students/{uid}
 */
const writeFeedbackCard = async (userRef, item, correct, feedback, annotation) => {
  try {
    await addDoc(collection(userRef, 'saved_feedback'), {
      questionId: item.questionId || '',
      questionText: item.questionText || '',
      teacherFeedback: feedback || '',
      teacherAnnotation: annotation || null,
      correct: !!correct,
      challengeType: item.challengeType || 'daily',
      topicTitle: item.topicTitle || '',
      chapterTitle: item.chapterTitle || '',
      gradedAt: new Date().toISOString(),
      savedAt: serverTimestamp(),
      source: 'teacher',
      read: false,
    });
    await updateDoc(userRef, { unreadFeedbackCount: increment(1) });
  } catch (err) {
    console.warn('[grading] feedback card write failed (non-fatal):', err?.message || err);
  }
};

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
 * Mark the pending answer in the student's stat doc as definitively graded
 * (correct=false on rejection) so it stops showing as "Teacher marking".
 * Score / XP are untouched.
 */
const finalizeStatAnswer = async (item, correct, feedback = null, annotation = null) => {
  const colName = (item.challengeType === 'calc') ? 'calc_stats' : 'daily_stats';
  const safeStatId = String(resolveStatId(item)).replace(/\//g, '-');

  let statRef = doc(db, 'users', item.userId, colName, safeStatId);
  let statSnap = await getDoc(statRef);
  if (!statSnap.exists()) {
    statRef = doc(db, 'students', item.userId, colName, safeStatId);
    statSnap = await getDoc(statRef);
  }
  if (!statSnap.exists()) return;

  const statsData = statSnap.data();
  const updatedResults = [...(statsData.answerResults || [])];
  const qIndex = updatedResults.findIndex((r) => r.questionId === item.questionId);
  if (qIndex === -1) return;

  updatedResults[qIndex] = {
    ...updatedResults[qIndex],
    correct,
    isPending: false,
    gradedAt: new Date().toISOString(),
  };
  await updateDoc(statRef, { answerResults: updatedResults });
};

/**
 * Resolve the student's root user document (users/{uid} preferred,
 * students/{uid} for manual students).
 */
const resolveUserRef = async (userId) => {
  const usersRef = doc(db, 'users', userId);
  if ((await getDoc(usersRef)).exists()) return usersRef;
  const studentsRef = doc(db, 'students', userId);
  if ((await getDoc(studentsRef)).exists()) return studentsRef;
  return usersRef; // default
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
export const gradeSubmission = async (item, approved, feedback = null, annotation = null) => {
  if (!item || !item.id) {
    throw new Error("Invalid grading item: missing document ID");
  }
  const userId = item.userId;
  if (!userId) {
    throw new Error("Invalid grading item: missing userId");
  }

  const type = item.challengeType || 'daily';

  if (!approved) {
    // Rejection finalises the answer as incorrect so it never lingers as
    // "Teacher marking" on the student's side. No score/XP changes — pending
    // answers were never counted as correct.
    if (type === 'exam_prep') {
      await updateDoc(doc(db, 'users', userId), {
        examPrepRejections: arrayUnion({
          questionId: item.questionId || '',
          topicId: item.topicId || '',
          topicTitle: item.topicTitle || '',
          rejectedAt: new Date().toISOString(),
          ...(feedback ? { teacherFeedback: feedback } : {}),
        }),
      }).catch(() => {});
    } else {
      await finalizeStatAnswer(item, false, feedback, annotation).catch(() => {});
    }
    // Always record the graded result as a Feedback card so the student can see it.
    await writeFeedbackCard(await resolveUserRef(userId), item, false, feedback, annotation);
    await deleteDoc(doc(db, 'grading_queue', item.id));
    return { xpAwarded: 0 };
  }

  // Exam prep is unscored practice: approval marks the answer correct for the
  // student's accuracy stats but awards NO XP / points / leaderboard change.
  // The approval is queued on the student's user doc; their app applies it to
  // the local exam-prep stats on next load (see examPrepService.applyTeacherApprovals).
  if (type === 'exam_prep') {
    await updateDoc(doc(db, 'users', userId), {
      examPrepApprovals: arrayUnion({
        questionId: item.questionId || '',
        topicId: item.topicId || '',
        topicTitle: item.topicTitle || '',
        approvedAt: new Date().toISOString(),
        ...(feedback ? { teacherFeedback: feedback } : {}),
      }),
    });
    await writeFeedbackCard(await resolveUserRef(userId), item, true, feedback, annotation);
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

  // Always record the graded result as a Feedback card so the student can see it.
  await writeFeedbackCard(statRef.parent.parent, item, true, feedback, annotation);

  // Credit fully applied — now it is safe to remove the queue item.
  await deleteDoc(doc(db, 'grading_queue', item.id));

  return { xpAwarded: xpPerQuestion };
};
