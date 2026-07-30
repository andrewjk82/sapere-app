/**
 * Maps a corpus question's raw seed-dialect object to the exact Firestore
 * document shape src/services/chapterSeeder.js's mapSeedQuestion() produces —
 * mirrored the same way tools/scripts/addMissingDanebankQuestions.mjs mirrors
 * it for admin-SDK writes (that file's client-SDK imports, serverTimestamp()
 * from 'firebase/firestore', can't run in a Node admin script, so there is no
 * single importable function — every admin script that writes `questions`
 * duplicates this mapping on purpose; see that file's comment).
 *
 * Unlike chapterSeeder's version, this does NOT take a `chapter` fallback
 * object — every corpus-generated question already carries its own
 * chapterId/topicId/topicCode/topicTitle (required by
 * QUESTION_BANK_EXPANSION.md's schema, since generated questions blend into
 * a topic's normal practice pool rather than one shared placeholder topic).
 *
 * MC answer resolution (index vs. option-text) uses the SAME
 * resolveSeedCorrectIndex rule as chapterSeeder.js: text match wins over
 * index, an unresolvable answer THROWS rather than silently guessing index 0
 * (CLAUDE.md: "Never guess an answer at write time").
 */
import { FieldValue } from 'firebase-admin/firestore';

const MANUAL_GRADE_KEYWORDS = /(draw|sketch|construct|show that|prove|justify|explain why)/i;

const rawOptionText = (opt) => (typeof opt === 'object' && opt !== null ? opt.text : opt);

export function resolveSeedCorrectIndex(rawOpts, rawCorrect) {
  if (rawCorrect === undefined || rawCorrect === null) return -1;
  const s = String(rawCorrect).trim();
  const exact = rawOpts.findIndex((opt) => String(rawOptionText(opt)).trim() === s);
  if (exact >= 0) return exact;
  if (/^\d+$/.test(s) || typeof rawCorrect === 'number') {
    const idx = parseInt(s, 10);
    if (Number.isInteger(idx) && idx >= 0 && idx < rawOpts.length) return idx;
  }
  return -1;
}

function mapOptions(rawOpts) {
  return rawOpts.map((opt) => (
    typeof opt === 'object' && opt !== null
      ? { text: String(opt.text || ''), imageUrl: opt.imageUrl || '' }
      : { text: String(opt), imageUrl: '' }
  ));
}

function mapSubQuestions(raw) {
  if (!Array.isArray(raw.subQuestions)) return [];
  return raw.subQuestions.map((sq) => {
    const isSqMC = sq.type === 'multiple_choice';
    let sqOptions = [];
    let sqAnswer = sq.a ?? sq.answer ?? sq.solution ?? '';
    if (isSqMC) {
      const rawOpts = sq.opts || sq.options || [];
      const correctIndex = resolveSeedCorrectIndex(rawOpts, sq.a ?? sq.answer ?? sq.solution);
      if (correctIndex < 0) {
        throw new Error(`unresolvable MC answer for sub-question ${sq.id || '(no id)'} — refusing to write a guessed answer`);
      }
      sqOptions = mapOptions(rawOpts);
      sqAnswer = String(correctIndex);
    }
    return {
      id: sq.id,
      type: sq.type || 'short_answer',
      question: sq.question || sq.q || '',
      options: sqOptions,
      answer: sqAnswer,
      isManual: true,
      solutionSteps: Array.isArray(sq.solutionSteps) ? sq.solutionSteps : [],
      graphData: sq.graphData || null,
    };
  });
}

/**
 * Throws if the question cannot be safely mapped (unresolvable MC answer).
 * Callers should treat a throw the same as a validation failure — skip and
 * report, never catch-and-guess.
 */
export function mapToFirestoreDoc(raw) {
  const isMC = raw.type === 'multiple_choice';
  const questionText = raw.q || raw.question || '';
  const isOpenReview = (raw.requiresManualGrading === true)
    || (raw.type === 'teacher_review' && MANUAL_GRADE_KEYWORDS.test(questionText));

  let options = [];
  let answer = raw.a ?? raw.answer ?? raw.solution ?? '';

  if (isMC) {
    const rawOpts = raw.opts || raw.options || [];
    const correctIndex = resolveSeedCorrectIndex(rawOpts, raw.a ?? raw.answer ?? raw.solution);
    if (correctIndex < 0) {
      throw new Error(`unresolvable MC answer for ${raw.id || '(no id)'} — refusing to write a guessed answer`);
    }
    options = mapOptions(rawOpts);
    answer = String(correctIndex);
  }

  if (!raw.chapterId || !raw.topicId) {
    throw new Error(`missing chapterId/topicId for ${raw.id || '(no id)'} — generated questions must carry real granular topic mapping`);
  }

  return {
    chapterId: raw.chapterId,
    chapterTitle: raw.chapterTitle || '',
    topicId: raw.topicId,
    topicCode: raw.topicCode || raw.c || '',
    topicTitle: raw.t || raw.topicTitle || '',
    year: raw.year || '',
    isManual: true,
    origin: 'seed',
    // New questions from the corpus pipeline go through the SAME in-app
    // teacher review gate as a question a teacher types directly into the
    // Question Bank editor (see QuestionBankModal.jsx's handleSave and the
    // new PendingReviewPanel.jsx) — invisible to students until approved.
    isActive: false,
    reviewStatus: 'pending',
    title: `${questionText.replace(/\$/g, '').slice(0, 30)}...`,
    question: questionText,
    difficulty: raw.difficulty || 'medium',
    timeLimit: raw.timeLimit || 120,
    type: isMC ? 'multiple_choice' : (raw.type || 'short_answer'),
    requiresManualGrading: isOpenReview,
    options,
    answer,
    hint: raw.h || raw.hint || '',
    solution: raw.s || raw.solution || raw.a || '',
    solutionSteps: Array.isArray(raw.solutionSteps) ? raw.solutionSteps : [],
    questionImage: raw.questionImage || raw.imageUrl || '',
    subQuestions: mapSubQuestions(raw),
    blanks: Array.isArray(raw.blanks) ? raw.blanks : [],
    graphData: raw.graphData || null,
    examPaper: raw.examPaper || '',
    isNew: raw.isNew || false,
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
  };
}
