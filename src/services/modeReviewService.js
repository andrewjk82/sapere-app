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
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  setDoc,
} from 'firebase/firestore';
import { db } from '../firebase/config';

const COLLECTION = 'mode_review';
const LIST_LIMIT = 80;

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
    timestamp: timestamp || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  await setDoc(doc(db, COLLECTION, id), payload, { merge: true });
  return { id, ...payload };
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
