/* ==========================================================================
   Secret Notebook (비밀 노트) — local-only mistake review queue
   --------------------------------------------------------------------------
   Two independent notebooks, one per test type:
     • kind === 'daily' → Daily Challenge mistakes
     • kind === 'calc'  → Basic Calculation mistakes

   All question data lives in localStorage only. Nothing here writes to
   Firestore — the teacher-facing count/tag summary is piggy-backed onto the
   existing end-of-test save in DailyChallenge.finishQuiz (see getSyncSnapshot).
   ========================================================================== */
import { generateCalculationQuestion } from '../services/calculationGenerator';

// Forgetting-curve stages: review immediately, then +1 day, +7 days, +30 days.
const STAGE_DELAYS_MS = [
  0,
  24 * 60 * 60 * 1000,
  7 * 24 * 60 * 60 * 1000,
  30 * 24 * 60 * 60 * 1000,
];

const keyFor = (kind, uid) => `sapere_secret_note_${kind}_${uid || 'anon'}`;

// ── Mistake tags (idea 3) ─────────────────────────────────────────────────
export const MISTAKE_TAGS = [
  { id: 'mistake', emoji: '🎨', label: 'Simple mistake', labelKo: '단순 실수' },
  { id: 'concept', emoji: '🌀', label: 'Concept gap', labelKo: '개념 부족' },
  { id: 'time', emoji: '⏰', label: 'Ran out of time', labelKo: '시간 부족' },
  { id: 'comprehension', emoji: '🧩', label: "Didn't understand", labelKo: '문제 이해 못함' },
];

// ── Low-level storage ─────────────────────────────────────────────────────
function read(kind, uid) {
  try {
    const raw = localStorage.getItem(keyFor(kind, uid));
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function write(kind, uid, items) {
  try {
    localStorage.setItem(keyFor(kind, uid), JSON.stringify(items));
  } catch (e) {
    console.warn('secretNote write failed (non-fatal):', e);
  }
}

// Keep only what's needed to re-render & re-grade a question.
function slimQuestion(q) {
  return {
    id: q.id || q.question || q.text,
    question: q.question || q.text || '',
    type: q.type || 'short_answer',
    answer: q.answer,
    options: Array.isArray(q.options) ? q.options : null,
    isManual: !!q.isManual,
    hint: q.hint || null,
    solution: q.solution || null,
    solutionSteps: Array.isArray(q.solutionSteps) ? q.solutionSteps : null,
    chapterTitle: q.chapterTitle || '',
    topicId: q.topicId || '',
    topicCode: q.topicCode || '',
    topicTitle: q.topicTitle || '',
    year: q.year || '',
    generatorType: q.generatorType || '',
    graphData: q.graphData || null,
  };
}

// Only multiple-choice / short-answer questions can be auto-graded locally.
export function canGrade(q) {
  if (!q) return false;
  if (q.type === 'graph_sketch') return false;
  if (Array.isArray(q.subQuestions) && q.subQuestions.length > 0) return false;
  if (q.requiresManualGrading) return false;
  return q.type === 'short_answer' || q.type === 'multiple_choice' || Array.isArray(q.options);
}

// Procedural questions can spawn an instant "twin" with new numbers.
export function canTwin(q) {
  return !!q && (q.generatorType === 'calculation' || /^calc-/.test(q.topicId || ''));
}

// Generate a twin (same topic, fresh numbers). Returns null when not possible.
export function generateTwin(q) {
  if (canTwin(q)) {
    const twin = generateCalculationQuestion(q.topicId || 'calc-1-core');
    return { ...twin, _isTwin: true, _twinOf: q.id };
  }
  return null;
}

// ── Reads ─────────────────────────────────────────────────────────────────
export function getNote(kind, uid) {
  const items = read(kind, uid);
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

export function getNoteCount(kind, uid) {
  return read(kind, uid).length;
}

// Items whose nextReviewAt has arrived (forgetting-curve due today).
export function getDueCount(kind, uid) {
  const now = Date.now();
  return read(kind, uid).filter((it) => (it.nextReviewAt || 0) <= now).length;
}

export function getTagCounts(kind, uid) {
  const counts = { mistake: 0, concept: 0, time: 0, comprehension: 0 };
  read(kind, uid).forEach((it) => {
    if (it.mistakeTag && counts[it.mistakeTag] != null) counts[it.mistakeTag] += 1;
  });
  return counts;
}

// ── Writes ────────────────────────────────────────────────────────────────
// Add freshly-wrong questions. De-dupes by question id. Returns count added.
export function addMistakes(kind, uid, wrongQuestions) {
  const items = read(kind, uid);
  const seen = new Set(items.map((it) => String(it.question?.id)));
  let added = 0;
  (wrongQuestions || []).forEach((q) => {
    const questionId = q?.id || q?.question || q?.text;
    if (!q || !questionId || !canGrade(q)) return;
    if (seen.has(String(questionId))) return;
    items.push({
      question: { ...slimQuestion(q), id: questionId },
      addedAt: Date.now(),
      sourceDate: new Date().toLocaleDateString('en-CA'),
      stage: 0,
      nextReviewAt: Date.now(),
      correctStreak: 0,
      twinPassed: false,
      mistakeTag: null,
    });
    seen.add(String(questionId));
    added += 1;
  });
  if (added) write(kind, uid, items);
  return added;
}

/**
 * Record the result of re-solving the ORIGINAL mistake.
 * Returns one of:
 *   'graduated' — removed from the notebook
 *   'needTwin'  — procedural question: solve a twin next to graduate
 *   'kept'      — stays in the notebook (manual: needs 2-in-a-row)
 */
export function recordResult(kind, uid, questionId, correct) {
  const items = read(kind, uid);
  const idx = items.findIndex((it) => String(it.question?.id) === String(questionId));
  if (idx < 0) return 'missing';
  const it = items[idx];
  const procedural = canTwin(it.question);

  if (!correct) {
    it.correctStreak = 0;
    it.stage = 0;
    it.nextReviewAt = Date.now();
    write(kind, uid, items);
    return 'kept';
  }

  it.correctStreak = (it.correctStreak || 0) + 1;

  if (procedural) {
    // Procedural: original correct → must also pass a twin to graduate.
    write(kind, uid, items);
    return 'needTwin';
  }

  // Manual: graduate after two correct re-solves in a row.
  if (it.correctStreak >= 2) {
    items.splice(idx, 1);
    write(kind, uid, items);
    return 'graduated';
  }
  it.stage = Math.min((it.stage || 0) + 1, STAGE_DELAYS_MS.length - 1);
  it.nextReviewAt = Date.now() + STAGE_DELAYS_MS[it.stage];
  write(kind, uid, items);
  return 'kept';
}

/**
 * Record the result of the twin question (procedural only).
 * Twin correct → graduate. Twin wrong → reset & keep.
 */
export function recordTwinResult(kind, uid, questionId, correct) {
  const items = read(kind, uid);
  const idx = items.findIndex((it) => String(it.question?.id) === String(questionId));
  if (idx < 0) return 'missing';
  const it = items[idx];

  if (correct) {
    items.splice(idx, 1);
    write(kind, uid, items);
    return 'graduated';
  }
  it.correctStreak = 0;
  it.stage = 0;
  it.nextReviewAt = Date.now();
  it.twinPassed = false;
  write(kind, uid, items);
  return 'kept';
}

export function setMistakeTag(kind, uid, questionId, tagId) {
  const items = read(kind, uid);
  const it = items.find((i) => String(i.question?.id) === String(questionId));
  if (it) {
    it.mistakeTag = tagId;
    write(kind, uid, items);
  }
  return items;
}

export function removeQuestion(kind, uid, questionId) {
  const items = read(kind, uid).filter(
    (i) => String(i.question?.id) !== String(questionId),
  );
  write(kind, uid, items);
  return items;
}

// Compact summary for piggy-backing onto the end-of-test Firestore save.
export function getSyncSnapshot(uid) {
  return {
    secretNoteCount: {
      daily: getNoteCount('daily', uid),
      calc: getNoteCount('calc', uid),
    },
    mistakeTags: {
      daily: getTagCounts('daily', uid),
      calc: getTagCounts('calc', uid),
    },
  };
}
