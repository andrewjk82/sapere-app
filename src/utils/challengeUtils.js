import { 
  doc, getDoc, setDoc, updateDoc, collection, getDocs, 
  query, where, serverTimestamp, deleteDoc 
} from 'firebase/firestore';
import { db, ADMIN_EMAIL, ADMIN_UID } from '../firebase/config';
import { DEFAULT_DIFFICULTY_MIX, getQuestionBlueprint } from '../services/questionGenerator';
import { CURRICULUM_DATA } from '../constants/curriculumData';
import { toDisplayText } from '../components/MathView';
import { localCache } from '../services/localCacheService';

// ── Constants ────────────────────────────────────────────────────────────────
export const CHALLENGE_YEAR = 11;
export const CHALLENGE_CHAPTER_ID = 'y11a-1';
export const CHALLENGE_BLUEPRINT = getQuestionBlueprint(CHALLENGE_YEAR, CHALLENGE_CHAPTER_ID);
export const MAX_HISTORY_PER_TYPE = 7;
export const CALC_ENGINE_VERSION = 'calc-local-2026-05-13-v1';
export const CHALLENGE_BOOT_CACHE_VERSION = 1;

export const MATH_SYMBOLS = ['√', '²', '³', '^', 'π', 'θ', 'α', 'β', 'δ', '°', '°C', 'x', 'y', 'z', '+', '-', '×', '÷', '/', '.', '=', '<', '>', '≤', '≥', '(', ')'];

// ── Pure Utility Functions ───────────────────────────────────────────────────

export const normalizeEmail = (email) => (email || '').trim().toLowerCase();

export const normalizeSubjectLabel = (value = '') => String(value).replace(/\bmaths\b/gi, 'Maths');

export const getYearNumber = (value) => {
  const parsed = parseInt(String(value || '').replace(/\D/g, ''), 10);
  return Number.isFinite(parsed) ? parsed : null;
};

export const normalizeYearLabel = (value) => {
  const yearNumber = getYearNumber(value);
  return yearNumber === null ? String(value || '').trim() : `Year ${yearNumber}`;
};

export const getValidChapterIdsForYears = (years, courses) => {
  const ids = new Set();
  years.forEach(year => {
    const yearData = CURRICULUM_DATA[normalizeYearLabel(year)];
    if (!yearData) return;
    let chapters = Array.isArray(yearData)
      ? yearData
      : courses.flatMap(course => yearData[course] || []);
    if (!Array.isArray(yearData) && chapters.length === 0) {
      chapters = yearData.Advanced || Object.values(yearData)[0] || [];
    }
    chapters.forEach(chapter => ids.add(chapter.id));
  });
  return ids;
};

export const normalizeText = (value) => String(value ?? '')
  .replace(/\$\$/g, '')
  .replace(/[−–—]/g, '-')
  .replace(/×/g, 'x')
  .trim();

export const getAnswerText = (option) => toDisplayText(option).trim();

export const deriveSimpleMathAnswer = (questionText) => {
  const text = normalizeText(questionText).replace(/\s+/g, ' ');
  const binary = text.match(/^(-?\d+(?:\.\d+)?)\s*([+\-x*÷/])\s*(-?\d+(?:\.\d+)?)\s*=\s*\?$/i);
  if (!binary) return null;

  const left = Number(binary[1]);
  const right = Number(binary[3]);
  if (!Number.isFinite(left) || !Number.isFinite(right)) return null;

  const op = binary[2].toLowerCase();
  let result = null;
  if (op === '+') result = left + right;
  if (op === '-') result = left - right;
  if (op === 'x' || op === '*') result = left * right;
  if ((op === '÷' || op === '/') && right !== 0) result = left / right;

  return result === null ? null : String(Number.isInteger(result) ? result : Number(result.toFixed(4)));
};

export const getOptions = (question) => {
  return Array.isArray(question?.options) ? question.options : [];
};

export const correctQuestionAnswer = (question) => {
  const expectedAnswer = deriveSimpleMathAnswer(question?.question);
  if (expectedAnswer === null) return question;

  const options = getOptions(question);
  const matchingOptionIndex = options.findIndex(option => getAnswerText(option) === expectedAnswer);
  const repaired = {
    ...question,
    solution: question.solution || `${normalizeText(question.question).replace(/\?$/, expectedAnswer)}`,
  };

  if (question?.isManual) {
    if (matchingOptionIndex >= 0) {
      return { ...repaired, answer: String(matchingOptionIndex) };
    }

    return {
      ...repaired,
      isManual: false,
      answer: expectedAnswer,
      options: options.length ? [expectedAnswer, ...options.filter(option => getAnswerText(option) !== expectedAnswer)].slice(0, 4) : options,
    };
  }

  if (!options.length || options.some(option => getAnswerText(option) === expectedAnswer)) {
    return { ...repaired, answer: expectedAnswer };
  }

  return {
    ...repaired,
    answer: expectedAnswer,
    options: [expectedAnswer, ...options.filter(option => getAnswerText(option) !== expectedAnswer)].slice(0, 4),
  };
};

export const toDate = (value) => {
  if (!value) return null;
  if (value instanceof Date) return value;
  if (typeof value?.toDate === 'function') return value.toDate();
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
};

export const formatHistoryDate = (item) => {
  if (item?.dateLabel) return item.dateLabel;
  const date = toDate(item?.timestamp || item?.completedAt || item?.createdAt || item?.id);
  return date ? date.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' }) : 'Completed test';
};

export const getWorkingOutPages = (result) => {
  if (Array.isArray(result?.workingOutPages) && result.workingOutPages.length > 0) {
    return result.workingOutPages.filter(Boolean);
  }
  return result?.workingOut ? [result.workingOut] : [];
};

export const getHistorySortTime = (item) => {
  const value = item?.timestamp || item?.completedAt || item?.createdAt || item?.date || item?.id;
  if (!value) return 0;
  if (typeof value?.toDate === 'function') return value.toDate().getTime();
  if (value instanceof Date) return value.getTime();
  if (typeof value === 'number') return value;
  if (/^\d+$/.test(String(value))) return Number(value);
  const parsed = new Date(value).getTime();
  return Number.isNaN(parsed) ? 0 : parsed;
};

export const createSessionSeed = () => {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
};

export const getChallengeBootCacheKey = (uid) => `challenge-boot:v${CHALLENGE_BOOT_CACHE_VERSION}:${uid}`;
export const getChallengeBootMetaId = (uid, date) => `challenge_boot_${uid}_${date}`;

export const getManualQuestionCacheKey = (targetChapterIds) =>
  `manual-questions:v1:${[...targetChapterIds].sort().join('|') || 'fallback'}`;

export const applyChallengeStatus = (status = {}) => ({
  todayCompleted: status.daily === 'completed',
  abandonedToday: status.daily === 'abandoned',
  calcCompletedToday: status.calc === 'completed',
  calcAbandonedToday: status.calc === 'abandoned',
});

export const getChallengeStatusState = (status = {}, type) => {
  const key = type === 'calc' ? 'calc' : 'daily';
  return status[key] || null;
};

export const getTodayChallengeStatus = (snap) => {
  if (!snap?.exists?.()) return null;
  const data = snap.data();
  if (data.completed === true) return 'completed';
  return 'abandoned';
};

export const getChallengeMaxXp = (type, hasCalculationTest = true) => {
  if (type === 'calc') return 50;
  return hasCalculationTest ? 50 : 100;
};

export const getEarnedXp = (earnedScore, total, type, hasCalculationTest = true) => {
  const safeTotal = Number(total) || 0;
  if (safeTotal <= 0) return 0;
  return Math.round((Number(earnedScore) || 0) / safeTotal * getChallengeMaxXp(type, hasCalculationTest));
};

export const getOptionText = (option) => toDisplayText(option);

export const getOptionImage = (option) => {
  if (!option || typeof option !== 'object') return '';
  return option.imageUrl || option.image || '';
};

export const normalizeMix = (mix) => {
  const safeMix = mix || DEFAULT_DIFFICULTY_MIX;
  const bounded = {
    easy: Math.max(0.1, safeMix.easy ?? DEFAULT_DIFFICULTY_MIX.easy),
    medium: Math.max(0.1, safeMix.medium ?? DEFAULT_DIFFICULTY_MIX.medium),
    hard: Math.max(0.05, safeMix.hard ?? DEFAULT_DIFFICULTY_MIX.hard),
  };
  const total = bounded.easy + bounded.medium + bounded.hard;
  return {
    easy: Number((bounded.easy / total).toFixed(2)),
    medium: Number((bounded.medium / total).toFixed(2)),
    hard: Number((bounded.hard / total).toFixed(2)),
  };
};

export const pickWeightedDifficulty = (mix) => {
  const normalized = normalizeMix(mix);
  const roll = Math.random();
  if (roll < normalized.easy) return 'easy';
  if (roll < normalized.easy + normalized.medium) return 'medium';
  return 'hard';
};

export const summarizeResults = (results) => {
  return (results || []).reduce((summary, result) => {
    if (!result?.difficulty || result.difficulty === 'manual') return summary;
    const current = summary[result.difficulty] || { correct: 0, total: 0 };
    return {
      ...summary,
      [result.difficulty]: {
        correct: current.correct + (result.correct ? 1 : 0),
        total: current.total + 1,
      },
    };
  }, {});
};

export const summarizeByKey = (results, key, labelKey, codeKey) => {
  return (results || []).reduce((summary, result) => {
    const id = result?.[key];
    if (!id) return summary;
    const rawTitle = result?.[labelKey] || '';
    const code = codeKey ? (result?.[codeKey] || '') : '';
    // Prefer "Code Title" > "Title" > "Code" > id (raw ID as last resort)
    const label = rawTitle
      ? (code ? `${code} ${rawTitle}` : rawTitle)
      : (code || id);
    const current = summary[id] || { id, label, correct: 0, total: 0 };
    return {
      ...summary,
      [id]: {
        ...current,
        correct: current.correct + (result.correct ? 1 : 0),
        total: current.total + 1,
      },
    };
  }, {});
};

export const accuracyFor = (stats, difficulty) => {
  const item = stats[difficulty];
  if (!item?.total) return null;
  return item.correct / item.total;
};

export const adjustDifficultyMix = (currentMix, resultStats) => {
  const next = { ...normalizeMix(currentMix) };
  const easyAccuracy = accuracyFor(resultStats, 'easy');
  const mediumAccuracy = accuracyFor(resultStats, 'medium');
  const hardAccuracy = accuracyFor(resultStats, 'hard');

  if (hardAccuracy !== null && hardAccuracy < 0.6) {
    next.easy += 0.1;
    next.hard -= 0.1;
  } else if (mediumAccuracy !== null && mediumAccuracy < 0.55) {
    next.easy += 0.05;
    next.medium -= 0.05;
  } else if (
    easyAccuracy !== null && easyAccuracy >= 0.85 &&
    (mediumAccuracy === null || mediumAccuracy >= 0.7)
  ) {
    next.easy -= 0.1;
    next.medium += 0.05;
    next.hard += 0.05;
  }

  return normalizeMix(next);
};

// ── Database Helper Functions ────────────────────────────────────────────────

export const notifyTeacherChallengeCompleted = async ({
  studentId,
  studentName,
  challengeType,
  score,
  total,
  xpEarned,
  completedAt,
  reviewCount = 0,
  reportCount = 0,
}) => {
  if (!ADMIN_UID || studentId === ADMIN_UID) return;
  const label = challengeType === 'calc' ? 'Daily Calculation' : 'Daily Challenge';
  const displayName = studentName || 'A student';
  const attentionLines = [
    reviewCount > 0 ? `Review required: ${reviewCount} answer(s).` : '',
    reportCount > 0 ? `Reports submitted: ${reportCount} issue(s).` : '',
  ].filter(Boolean);
  const body = [
    `${displayName} finished ${label}: ${score}/${total}.`,
    xpEarned ? `XP earned: ${xpEarned}.` : '',
    ...attentionLines,
  ].filter(Boolean).join('\n');

  const response = await fetch('/api/send-notif', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      studentId: ADMIN_UID,
      email: ADMIN_EMAIL,
      subject: `Challenge completed: ${displayName}`,
      text: body,
      metadata: {
        type: 'challenge_completed',
        studentId,
        studentName: studentName || 'Student',
        challengeType,
        score,
        total,
        xpEarned,
        reviewCount,
        reportCount,
        completedAt,
      },
    }),
  });
  if (!response.ok) throw new Error(`send-notif failed: ${response.status}`);
};

// Notify the teacher whenever a student submits an answer that requires manual marking.
// Called immediately after writing to grading_queue — never blocks the student flow.
export const notifyTeacherPendingReview = async ({
  studentId,
  studentName,
  studentEmail,
  questionText,
  challengeType,
  topicTitle,
  chapterTitle,
}) => {
  if (!ADMIN_UID || studentId === ADMIN_UID) return;
  const source = challengeType === 'curriculum' ? 'Curriculum'
    : challengeType === 'exam_prep'             ? 'Exam Prep'
    : challengeType === 'calc'                  ? 'Daily Calculation'
    :                                             'Daily Challenge';
  const context = [topicTitle, chapterTitle].filter(Boolean).join(' · ');
  const preview = questionText ? questionText.replace(/<[^>]+>/g, '').slice(0, 120) : '(no preview)';
  const body = [
    `${studentName || 'A student'} submitted a question for teacher marking.`,
    context ? `Topic: ${context}` : '',
    `Source: ${source}`,
    `Question: ${preview}`,
    '',
    'Open the Grading Queue to mark it.',
  ].filter(s => s !== undefined).join('\n');

  try {
    const response = await fetch('/api/send-notif', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        studentId: ADMIN_UID,
        email: ADMIN_EMAIL,
        skipEmail: true,
        subject: `📝 Marking needed: ${studentName || 'Student'}`,
        text: body,
        metadata: {
          type: 'pending_review',
          studentId,
          studentName: studentName || 'Student',
          studentEmail: studentEmail || '',
          challengeType,
          topicTitle,
          chapterTitle,
          questionPreview: preview,
        },
      }),
    });
    if (!response.ok) console.warn('[notifyTeacherPendingReview] send-notif returned', response.status);
  } catch (err) {
    console.warn('[notifyTeacherPendingReview] non-critical error:', err.message);
  }
};

export const pruneOldChallengeStats = async (userId, statCollection, keep = MAX_HISTORY_PER_TYPE) => {
  if (!userId) return;
  const snap = await getDocs(collection(db, 'users', userId, statCollection));
  const staleDocs = snap.docs
    .map(statDoc => ({ ref: statDoc.ref, id: statDoc.id, ...statDoc.data() }))
    .sort((a, b) => getHistorySortTime(b) - getHistorySortTime(a))
    .slice(keep);

  if (staleDocs.length === 0) return;
  await Promise.all(staleDocs.map(item => deleteDoc(item.ref)));
};

export const updateAdminDailySummary = async ({
  userId,
  date,
  challengeType,
  score,
  total,
  xpEarned,
  studentProfile,
  user,
  status = 'completed',
}) => {
  if (!userId || !date) return;
  const displayName = studentProfile?.name || studentProfile?.displayName ||
    (studentProfile?.firstName ? `${studentProfile.firstName} ${studentProfile.lastName || ''}`.trim() : '') ||
    user?.displayName || user?.email || 'Student';
  const isCalc = challengeType === 'calc';
  const isCompleted = status === 'completed';
  await setDoc(doc(db, 'admin_daily_summary', date), {
    date,
    updatedAt: serverTimestamp(),
    students: {
      [userId]: {
        studentId: userId,
        name: displayName,
        email: studentProfile?.email || user?.email || '',
        done: isCompleted,
        [isCalc ? 'calcDone' : 'dailyDone']: isCompleted,
        [isCalc ? 'calcEnded' : 'dailyEnded']: !isCompleted,
        [isCalc ? 'calcScore' : 'dailyScore']: score,
        [isCalc ? 'calcTotal' : 'dailyTotal']: total,
        [isCalc ? 'calcXp' : 'dailyXp']: xpEarned,
        [isCalc ? 'calcStatus' : 'dailyStatus']: status,
        lastChallengeType: challengeType,
        lastUpdatedAt: new Date().toISOString(),
        ...(isCompleted ? { lastCompletedAt: new Date().toISOString() } : {}),
      },
    },
  }, { merge: true });
};

export const writeChallengeStatusMeta = async (uid, date, challengeType, state) => {
  if (!uid || !date) return;
  // IMPORTANT: setDoc + merge:true does NOT support dot-notation nested field updates.
  // Using { status: { daily: state } } with merge:true would overwrite the ENTIRE status
  // object, wiping out the other challenge type's status (e.g., clearing calc when
  // updating daily). We split into two writes:
  //   1. setDoc to create/update top-level metadata fields.
  //   2. updateDoc with dot-notation to update only the specific nested status field.
  const ref = doc(db, 'sync_meta', getChallengeBootMetaId(uid, date));
  const statusField = challengeType === 'calc' ? 'calc' : 'daily';

  await setDoc(ref, {
    version: Date.now(),
    statusVersion: Date.now(),
    updatedAt: serverTimestamp(),
  }, { merge: true });

  // updateDoc correctly interprets dot-notation as a nested path,
  // so status.daily and status.calc can be updated independently.
  await updateDoc(ref, {
    [`status.${statusField}`]: state,
  });
};

export const mergeChallengeBootCache = (uid, patch) => {
  if (!uid) return;
  const cacheKey = getChallengeBootCacheKey(uid);
  const current = localCache.get(cacheKey) || {};
  localCache.set(cacheKey, {
    ...current,
    ...patch,
    savedAt: Date.now(),
  });
};
