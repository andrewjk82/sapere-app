import { db } from '../firebase/config';
import { collection, writeBatch, doc, getDoc, setDoc, serverTimestamp, query, where, getDocs, getDocsFromServer } from 'firebase/firestore';
import { recountIds } from './questionCountsService';
import { applySeedToIndexes } from './questionIndexService';

// djb2-style hash of sorted question IDs — fast, zero-dependency, no Firestore reads.
const hashSeedIds = (seed) => {
  if (!Array.isArray(seed) || seed.length === 0) return '0';
  const str = seed.map((q) => q.id || '').sort().join(',');
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
};

const SEED_HASHES_REF = () => doc(db, 'sync_meta', 'seed_hashes');
// Session guard: only run auto-sync once per admin browser session.
const AUTO_SYNC_SESSION_KEY = 'sapere:seeds:autoSynced';

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
    // Provenance tag: questions written by the seeder are 'seed'. Teacher-added
    // questions are tagged 'teacher' (see QuestionBankModal) and the seeder's
    // clear step never deletes them, so manual additions survive re-seeding.
    origin: 'seed',
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
  // Fast path (≥2nd seed): read question_topic_index/{topicId} — 1 doc read —
  // to get existing question IDs, then delete by ID directly (no per-doc reads).
  // This avoids the previous getDocsFromServer scan (1 read per question).
  //
  // Fallback (first-ever seed for this topic, or orphaned docs before the
  // topic-index existed): fall back to the original getDocsFromServer query.
  const affectedChapterIds = new Set([chapter.chapterId]);
  const affectedTopicIds = new Set([chapter.topicId]);
  const indexRemoved = {}; // { [chapterId]: [questionId, ...] }
  const indexAdded = {};

  // The IDs the new seed will (over)write. Reconciliation deletes only the
  // STALE seed questions — prior seed IDs that are no longer in the seed file.
  // Questions never written by the seeder (teacher-added, origin:'teacher') are
  // never in this set and are never deleted.
  const newSeedIds = new Set(seed.map((raw) => raw.id).filter(Boolean));

  const topicIndexSnap = await getDoc(doc(db, 'question_topic_index', chapter.topicId));
  const topicIndexIds = topicIndexSnap.exists() ? (topicIndexSnap.data().ids || []) : null;

  let toDelete;
  if (topicIndexIds !== null) {
    // Fast path: question_topic_index holds ONLY prior seed IDs (teacher-added
    // questions are never written there). Delete prior seed IDs dropped from
    // the seed file; keep everything else.
    toDelete = topicIndexIds.filter((id) => !newSeedIds.has(id));
  } else {
    // Fallback (first-ever seed for this topic, or pre-index orphans): full
    // query. Delete only NON-teacher questions that aren't in the new seed, so
    // any manually-added question on this topic is preserved.
    const snap = await getDocsFromServer(
      query(collRef, where('topicId', '==', chapter.topicId))
    );
    toDelete = [];
    snap.docs.forEach((d) => {
      const data = d.data();
      if (data.chapterId) affectedChapterIds.add(data.chapterId);
      if (data.topicId) affectedTopicIds.add(data.topicId);
      if (data.origin !== 'teacher' && !newSeedIds.has(d.id)) toDelete.push(d.id);
    });
  }

  if (toDelete.length > 0) {
    (indexRemoved[chapter.chapterId] = indexRemoved[chapter.chapterId] || []).push(...toDelete);
    const CHUNK = 400;
    for (let i = 0; i < toDelete.length; i += CHUNK) {
      const clearBatch = writeBatch(db);
      toDelete.slice(i, i + CHUNK).forEach(id => clearBatch.delete(doc(collRef, id)));
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
      const mapped = mapSeedQuestion(raw, chapter);
      if (mapped.topicId) affectedTopicIds.add(mapped.topicId);
      const docRef = raw.id ? doc(collRef, raw.id) : doc(collRef);
      if (mapped.chapterId) {
        affectedChapterIds.add(mapped.chapterId);
        (indexAdded[mapped.chapterId] = indexAdded[mapped.chapterId] || []).push(docRef.id);
      }
      batch.set(docRef, mapped, { merge: false });
    });
    await batch.commit();
  }
  // Update the per-chapter sampling indexes incrementally (zero reads) and
  // stamp BOTH sync_meta/questions.version and question_index/_meta.
  // builtVersion with the same value — this is what prevents the next admin
  // session from running ensureQuestionIndexFresh's full questions scan
  // (~1 read per question in the whole bank).
  const seedVersion = Date.now();

  // Write the topic-level index so future re-seeds can use the fast path.
  // This is the doc we read at the top: question_topic_index/{topicId}.
  const newTopicIds = (indexAdded[chapter.chapterId] || []);
  try {
    await setDoc(doc(db, 'question_topic_index', chapter.topicId), {
      ids: newTopicIds,
      chapterId: chapter.chapterId,
      updatedAt: serverTimestamp(),
    });
  } catch (err) {
    console.warn('question_topic_index write failed (non-fatal):', err?.code || err);
  }

  try {
    await applySeedToIndexes({ added: indexAdded, removed: indexRemoved, version: seedVersion });
  } catch (err) {
    console.warn('question index update after seed failed (non-fatal):', err);
    // Fall back to the plain version bump so chapter-card counts still refresh.
    try {
      await setDoc(doc(db, 'sync_meta', 'questions'), {
        version: seedVersion,
        updatedAt: serverTimestamp(),
      }, { merge: true });
    } catch (err2) {
      console.warn('sync_meta bump after seed failed (non-fatal):', err2);
    }
  }
  // Re-count ONLY the touched ids into the aggregate counts doc (a few dozen
  // aggregation queries) and stamp it with the same version, so admin clients
  // read 1 doc instead of rebuilding ~1,600 counts after every seed.
  try {
    await recountIds({
      chapterIds: [...affectedChapterIds],
      topicIds: [...affectedTopicIds],
      version: seedVersion,
    });
  } catch (err) {
    console.warn('question_counts recount after seed failed (non-fatal):', err);
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

/**
 * Auto-sync: compare local seed hashes with the last-synced hashes stored in
 * sync_meta/seed_hashes (1 Firestore read). For each topic whose hash changed,
 * run seedChapterQuestions. Updates seed_hashes after syncing.
 *
 * Cost when nothing changed: 1 read.
 * Cost when N topics changed: 1 read + batch writes for those N topics only.
 *
 * Called once per admin browser session (guarded by sessionStorage flag).
 */
export const autoSyncSeedsIfChanged = async () => {
  try {
    const alreadyRan = sessionStorage.getItem(AUTO_SYNC_SESSION_KEY);
    if (alreadyRan) return { synced: 0, skipped: true };
  } catch (_) { /* private mode — proceed */ }

  try {
    const { CHAPTER_SEED_REGISTRY } = await import('../constants/curriculumSeeds.js');
    if (!Array.isArray(CHAPTER_SEED_REGISTRY) || CHAPTER_SEED_REGISTRY.length === 0) return { synced: 0 };

    // 1 read: fetch stored hashes
    const hashSnap = await getDoc(SEED_HASHES_REF());
    const storedHashes = hashSnap.exists() ? (hashSnap.data() || {}) : {};

    // Compute current hashes client-side (zero reads)
    const currentHashes = {};
    CHAPTER_SEED_REGISTRY.forEach((entry) => {
      if (entry.topicId) currentHashes[entry.topicId] = hashSeedIds(entry.seed);
    });

    const changedEntries = CHAPTER_SEED_REGISTRY.filter(
      (entry) => entry.topicId && currentHashes[entry.topicId] !== storedHashes[entry.topicId]
    );

    if (changedEntries.length === 0) {
      try { sessionStorage.setItem(AUTO_SYNC_SESSION_KEY, '1'); } catch (_) {}
      console.info('[autoSyncSeeds] all seeds up-to-date — no sync needed');
      return { synced: 0 };
    }

    console.info(`[autoSyncSeeds] ${changedEntries.length} topic(s) changed — syncing...`);
    let synced = 0;
    for (const entry of changedEntries) {
      try {
        const count = await seedChapterQuestions(entry);
        console.info(`  ✓ ${entry.topicId} (${count} questions)`);
        synced++;
      } catch (err) {
        console.warn(`  ✗ ${entry.topicId} seed failed:`, err?.code || err);
      }
    }

    // Persist updated hashes (merge so unrelated topics are preserved)
    await setDoc(SEED_HASHES_REF(), { ...currentHashes, _updatedAt: Date.now() }, { merge: true });
    try { sessionStorage.setItem(AUTO_SYNC_SESSION_KEY, '1'); } catch (_) {}
    console.info(`[autoSyncSeeds] done — synced ${synced}/${changedEntries.length} topic(s)`);
    return { synced };
  } catch (err) {
    console.warn('[autoSyncSeeds] failed (non-fatal):', err?.code || err);
    return { synced: 0, error: err };
  }
};
