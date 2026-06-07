import { db } from '../firebase/config';
import { collection, writeBatch, doc, setDoc, serverTimestamp, query, where, getDocs, getDocsFromServer } from 'firebase/firestore';

/**
 * Generic chapter question seeder.
 *
 * Replaces the per-chapter handleSeedY9ChX copy-paste functions with one
 * routine. It normalises any of the seed formats used across the seed files
 * (q/question, a/answer/solution, opts/options, h/hint, s/solution, t/topic,
 * graphData, type incl. "teacher_review") onto the app's question schema.
 *
 * To add a new chapter: create its seed file and add one entry to the
 * CHAPTER_SEED_REGISTRY (see Curriculum.jsx) — no new handler needed.
 */

// Normalise one raw seed question → the app's question document.
// Open tasks that genuinely need a teacher to grade — drawing, proof and
// construction. A "Find x, giving reasons" question has a definite answer
// and is auto-graded, so it must NOT be flagged for manual review.
const MANUAL_GRADE_KEYWORDS = /(draw|sketch|construct|show that|prove|justify|explain why)/i;

const mapSeedQuestion = (raw, chapter) => {
  const isMC = raw.type === 'multiple_choice';
  const questionText = raw.q || raw.question || '';
  // requiresManualGrading is set ONLY for true open/construction/proof tasks,
  // regardless of whether the seed labelled the question "teacher_review".
  const isOpenReview = (raw.requiresManualGrading === true)
    || (raw.type === 'teacher_review' && MANUAL_GRADE_KEYWORDS.test(questionText));

  let options = [];
  let answer = raw.a ?? raw.answer ?? raw.solution ?? '';

  if (isMC) {
    const rawOpts = raw.opts || raw.options || [];
    const correct = raw.a ?? raw.answer ?? raw.solution;
    const shuffled = [...rawOpts].sort(() => Math.random() - 0.5);
    const correctIndex = shuffled.findIndex((opt) => {
      const text = typeof opt === 'object' && opt !== null ? opt.text : opt;
      return String(text).trim() === String(correct).trim();
    });
    options = shuffled.map((opt) => (
      typeof opt === 'object' && opt !== null
        ? { text: String(opt.text || ''), imageUrl: opt.imageUrl || '' }
        : { text: String(opt), imageUrl: '' }
    ));
    answer = String(correctIndex >= 0 ? correctIndex : 0);
  }

  // Per-question overrides (e.g. exam papers that span multiple topics)
  const resolvedTopicId = raw.topicId || chapter.topicId;
  const resolvedTopicCode = raw.c || raw.topicCode || chapter.topicCode || '';
  const resolvedTopicTitle = raw.t || raw.topicTitle || chapter.topicTitle || '';

  // Derive the real chapter ID from topicId (e.g. 'y12a-3D' → 'y12a-3').
  // Exam-paper questions are stored under their curriculum chapters so they
  // appear in topic practice and Daily Challenge. The examPaper field lets
  // the exam paper view filter them separately.
  const resolvedChapterId = raw.chapterId
    || (resolvedTopicId !== chapter.topicId
      ? resolvedTopicId.replace(/[A-Z]+$/, '')
      : chapter.chapterId);

  return {
    chapterId: resolvedChapterId,
    chapterTitle: chapter.chapterTitle,
    topicId: resolvedTopicId,
    topicCode: resolvedTopicCode,
    topicTitle: resolvedTopicTitle,
    year: chapter.year,
    isManual: true,
    title: `${questionText.replace(/\$/g, '').slice(0, 30)}...`,
    question: questionText,
    difficulty: raw.difficulty || 'medium',
    timeLimit: raw.timeLimit || 120,
    // "teacher_review" open prompts are not a UI-renderable type — store them
    // as short-answer + manual grading so the challenge shows a text input.
    type: isMC ? 'multiple_choice' : 'short_answer',
    requiresManualGrading: isOpenReview,
    options,
    answer,
    hint: raw.h || raw.hint || '',
    solution: raw.s || raw.solution || raw.a || '',
    solutionSteps: Array.isArray(raw.solutionSteps) ? raw.solutionSteps : [],
    questionImage: raw.questionImage || raw.imageUrl || '',
    subQuestions: Array.isArray(raw.subQuestions) ? raw.subQuestions : [],
    blanks: Array.isArray(raw.blanks) ? raw.blanks : [],
    graphData: raw.graphData || null,
    // Exam-paper provenance — lets teachers filter "HSC trial only" in Exam
    // Prep without disconnecting the question from its real curriculum chapter.
    examPaper: raw.examPaper || chapter.examPaper || '',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };
};

/**
 * Seed one chapter's questions. Clears existing questions for the topic,
 * then writes the mapped seed questions (chunked for the 500-op batch cap).
 * @param {object} chapter  registry entry with { chapterId, chapterTitle,
 *   topicId, topicCode, topicTitle, year, seed: [] }
 * @returns {Promise<number>} number of questions written
 */
export const seedChapterQuestions = async (chapter) => {
  const seed = Array.isArray(chapter?.seed) ? chapter.seed : [];
  if (seed.length === 0) return 0;
  const collRef = collection(db, 'questions');

  // CLEAR EXISTING QUESTIONS FOR THIS TOPIC
  // Use getDocsFromServer (not getDocs) to bypass IndexedDB offline cache — otherwise
  // stale cached results could silently skip deleting documents that actually exist in Firestore.
  const q = query(collRef, where('topicId', '==', chapter.topicId));
  const snap = await getDocsFromServer(q);
  if (!snap.empty) {
    const CHUNK = 400;
    for (let i = 0; i < snap.docs.length; i += CHUNK) {
      const clearBatch = writeBatch(db);
      snap.docs.slice(i, i + CHUNK).forEach(d => clearBatch.delete(d.ref));
      await clearBatch.commit();
    }
  }

  // WRITE NEW SEED QUESTIONS
  // FULL OVERWRITE: questions are written by their stable `id` with
  // set({ merge: false }) — a full REPLACE. This ensures stale fields
  // (e.g. old geometry data on jsxGraph questions) are completely removed
  // when re-seeding. New questions are upserted and existing ones are fully
  // replaced with the latest seed data. (Every seed question must carry a unique `id`.)
  const CHUNK = 400; // Firestore writeBatch caps at 500 operations.
  for (let i = 0; i < seed.length; i += CHUNK) {
    const batch = writeBatch(db);
    seed.slice(i, i + CHUNK).forEach((raw) => {
      const docRef = raw.id ? doc(collRef, raw.id) : doc(collRef);
      batch.set(docRef, mapSeedQuestion(raw, chapter), { merge: false });
    });
    await batch.commit();
  }
  // Bump the questions sync_meta so the Curriculum chapter cards know to
  // refetch their per-chapter counts on next mount; without this the cached
  // "N questions" pill stays at its pre-seed value.
  try {
    await setDoc(doc(db, 'sync_meta', 'questions'), {
      version: Date.now(),
      updatedAt: serverTimestamp(),
    }, { merge: true });
  } catch (err) {
    console.warn('sync_meta bump after seed failed (non-fatal):', err);
  }
  // Invalidate all ExamPrep pool caches in localStorage so every student
  // picks up the freshly-seeded questions on their next session start.
  try {
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('examPrep:') && key.endsWith(':pool')) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach((k) => localStorage.removeItem(k));
    if (keysToRemove.length > 0) {
      console.log(`Invalidated ${keysToRemove.length} ExamPrep pool cache(s) after seed.`);
    }
  } catch (err) {
    console.warn('ExamPrep cache invalidation after seed failed (non-fatal):', err);
  }
  return seed.length;
};
