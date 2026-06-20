import { db } from '../firebase/config';
import { collection, writeBatch, doc, getDoc, setDoc, serverTimestamp, query, where, getDocs, getDocsFromServer } from 'firebase/firestore';
import { recountIds } from './questionCountsService';
import { applySeedToIndexes } from './questionIndexService';
import { validateSeedQuestion } from '../utils/latexValidate';

// Write-time LaTeX gate: a question whose rendered math KaTeX cannot parse must
// not reach Firestore (it shows as a broken/red box or raw source to students).
// Uses the SAME preprocessing the renderer applies. Skipped only if KaTeX is
// not loaded in this context (the build-time `npm run validate-seeds` then
// remains the backstop).
const validateRawQuestion = (raw) => {
  const katexRender = typeof window !== 'undefined' && window.katex
    ? (tex, opts) => window.katex.renderToString(tex, opts)
    : null;
  if (!katexRender) return []; // KaTeX unavailable -- let build-time gate catch it
  try {
    return validateSeedQuestion(raw, katexRender);
  } catch (_) {
    return []; // never let the validator itself break a seed run
  }
};

// djb2-style hash -- fast, zero-dependency.
const djb2 = (str) => {
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
};

// Per-question content fingerprint (stable, deterministic).
// Covers every field that changes what a student sees.
const questionFingerprint = (q) => {
  if (!q || typeof q !== 'object') return String(q);
  const opts = (q.opts || q.options || [])
    .map((o) => (typeof o === 'object' && o !== null ? `${o.text || ''}|${o.imageUrl || ''}` : String(o)))
    .join('~');
  const steps = Array.isArray(q.solutionSteps)
    ? q.solutionSteps.map((s) => `${s?.explanation || ''}=>${s?.workingOut || ''}`).join('~')
    : '';
  return djb2([
    q.id || '',
    q.q ?? q.question ?? '',
    q.a ?? q.answer ?? q.solution ?? '',
    q.h ?? q.hint ?? '',
    q.s ?? q.solution ?? '',
    q.type || '',
    opts,
    steps,
  ].join(''));
};

// Topic-level hash (fast pre-filter: if unchanged, skip per-question work).
const hashSeedIds = (seed) => {
  if (!Array.isArray(seed) || seed.length === 0) return '0';
  return djb2(seed.map(questionFingerprint).sort().join(''));
};

// Per-question hash map for a seed array: { [questionId]: hash }
const perQuestionHashes = (seed) => {
  const map = {};
  if (!Array.isArray(seed)) return map;
  seed.forEach((q) => { if (q?.id) map[q.id] = questionFingerprint(q); });
  return map;
};

const SEED_HASHES_REF = () => doc(db, 'sync_meta', 'seed_hashes');

// Session guard: auto-sync runs at most once per browser tab session.
// Uses sessionStorage (persists across page refreshes within the same tab)
// so a hard refresh doesn't re-read seed_hashes unnecessarily.
const SYNC_SESSION_KEY = 'sapere:seedSync:ranAt';
let _syncRanThisSession = false;

/**
 * Generic chapter question seeder.
 *
 * KEY CHANGE: per-question diff instead of full topic clear+rewrite.
 *   - Only writes questions whose content fingerprint changed.
 *   - Only deletes questions removed from the seed file.
 *   - Result: editing 1 question in a 100-question topic costs 1 write, not 100.
 */

const MANUAL_GRADE_KEYWORDS = /(draw|sketch|construct|show that|prove|justify|explain why)/i;

const mapSeedQuestion = (raw, chapter) => {
  const isMC = raw.type === 'multiple_choice';
  const questionText = raw.q || raw.question || '';
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

  const resolvedTopicId = raw.topicId || chapter.topicId;
  const resolvedTopicCode = raw.c || raw.topicCode || chapter.topicCode || '';
  const resolvedTopicTitle = raw.t || raw.topicTitle || chapter.topicTitle || '';

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
    examPaper: raw.examPaper || chapter.examPaper || '',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };
};

/**
 * Seed one topic's questions using per-question diff.
 *
 * Cost:
 *   - 1 read (question_topic_index)
 *   - Writes only for new/changed questions (not the entire topic)
 *   - Deletes only stale seed IDs removed from the seed file
 *   - Teacher-added questions (origin:'teacher') are never touched
 *
 * @param {object} chapter  registry entry
 * @param {object} storedQHashes  { [questionId]: hash } from sync_meta/seed_hashes
 * @returns {Promise<object>} { topicId, added, removed, updated, skipped, total, newQHashes }
 */
export const seedChapterQuestions = async (chapter, storedQHashes = {}) => {
  const seed = Array.isArray(chapter?.seed) ? chapter.seed : [];
  if (seed.length === 0) return { topicId: chapter.topicId, added: 0, removed: 0, updated: 0, skipped: 0, total: 0, newQHashes: {} };
  const collRef = collection(db, 'questions');

  const affectedChapterIds = new Set([chapter.chapterId]);
  const affectedTopicIds = new Set([chapter.topicId]);
  const indexRemoved = {};
  const indexAdded = {};

  const newSeedIds = new Set(seed.map((raw) => raw.id).filter(Boolean));

  // 1 read: get existing seed question IDs for this topic
  const topicIndexSnap = await getDoc(doc(db, 'question_topic_index', chapter.topicId));
  const topicIndexIds = topicIndexSnap.exists() ? (topicIndexSnap.data().ids || []) : null;

  let toDelete;
  const priorSeedIds = new Set();
  if (topicIndexIds !== null) {
    topicIndexIds.forEach((id) => priorSeedIds.add(String(id)));
    toDelete = topicIndexIds.filter((id) => !newSeedIds.has(id));
  } else {
    // First-ever seed for this topic: fallback scan
    const snap = await getDocsFromServer(
      query(collRef, where('topicId', '==', chapter.topicId))
    );
    toDelete = [];
    snap.docs.forEach((d) => {
      const data = d.data();
      if (data.chapterId) affectedChapterIds.add(data.chapterId);
      if (data.topicId) affectedTopicIds.add(data.topicId);
      if (data.origin !== 'teacher') priorSeedIds.add(String(d.id));
      if (data.origin !== 'teacher' && !newSeedIds.has(d.id)) toDelete.push(d.id);
    });
  }

  // Delete stale seed questions (removed from seed file)
  if (toDelete.length > 0) {
    (indexRemoved[chapter.chapterId] = indexRemoved[chapter.chapterId] || []).push(...toDelete);
    const CHUNK = 400;
    for (let i = 0; i < toDelete.length; i += CHUNK) {
      const clearBatch = writeBatch(db);
      toDelete.slice(i, i + CHUNK).forEach(id => clearBatch.delete(doc(collRef, id)));
      await clearBatch.commit();
    }
  }

  // Validate and filter bad LaTeX
  const invalid = [];
  const writable = seed.filter((raw) => {
    const errs = validateRawQuestion(raw);
    if (errs.length === 0) return true;
    errs.forEach((e) => invalid.push({ id: raw.id || '(no id)', field: e.field, error: e.error }));
    console.warn(`[seed] skipping invalid LaTeX in ${chapter.topicId} id=${raw.id || '?'}:`, errs.map((e) => `${e.field}: ${e.error}`).join('; '));
    return false;
  });

  // PER-QUESTION DIFF: only write questions that are new or have changed content.
  const currentQHashes = perQuestionHashes(seed);
  const toWrite = writable.filter((raw) => {
    if (!raw.id) return true; // no ID -- always write (can't diff)
    const stored = storedQHashes[raw.id];
    return stored === undefined || stored !== currentQHashes[raw.id];
  });

  const addedCount = toWrite.filter((raw) => !priorSeedIds.has(String(raw.id))).length;
  const updatedCount = toWrite.length - addedCount;
  const removedCount = toDelete.length;

  if (toWrite.length > 0) {
    const CHUNK = 400;
    for (let i = 0; i < toWrite.length; i += CHUNK) {
      const batch = writeBatch(db);
      toWrite.slice(i, i + CHUNK).forEach((raw) => {
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
  }

  const seedVersion = Date.now();

  // Update the topic-level index (IDs of all seed questions in this topic)
  const allSeedIds = writable.map((raw) => raw.id).filter(Boolean);
  try {
    await setDoc(doc(db, 'question_topic_index', chapter.topicId), {
      ids: allSeedIds,
      chapterId: chapter.chapterId,
      updatedAt: serverTimestamp(),
    });
  } catch (err) {
    console.warn('question_topic_index write failed (non-fatal):', err?.code || err);
  }

  // Only update question_index and counts if membership actually changed
  // (adds or deletes), not for pure content edits.
  if (addedCount > 0 || removedCount > 0) {
    try {
      await applySeedToIndexes({ added: indexAdded, removed: indexRemoved, version: seedVersion });
    } catch (err) {
      console.warn('question index update after seed failed (non-fatal):', err);
      try {
        await setDoc(doc(db, 'sync_meta', 'questions'), {
          version: seedVersion,
          updatedAt: serverTimestamp(),
        }, { merge: true });
      } catch (err2) {
        console.warn('sync_meta bump after seed failed (non-fatal):', err2);
      }
    }
    try {
      await recountIds({
        chapterIds: [...affectedChapterIds],
        topicIds: [...affectedTopicIds],
        version: seedVersion,
      });
    } catch (err) {
      console.warn('question_counts recount after seed failed (non-fatal):', err);
    }
  } else if (toWrite.length > 0) {
    // Content-only edits: bump version so students see updated content, but
    // do NOT bump membershipVersion -- practice pools don't need to rebuild.
    try {
      await setDoc(doc(db, 'sync_meta', 'questions'), {
        version: seedVersion,
        updatedAt: serverTimestamp(),
      }, { merge: true });
    } catch (err) {
      console.warn('sync_meta version bump failed (non-fatal):', err);
    }
  }

  // Invalidate ExamPrep pool caches in localStorage
  try {
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('examPrep:') && key.endsWith(':pool')) keysToRemove.push(key);
    }
    keysToRemove.forEach((k) => localStorage.removeItem(k));
  } catch (_) {}

  return {
    topicId: chapter.topicId,
    label: chapter.label || chapter.topicTitle || chapter.topicId,
    total: seed.length,
    added: addedCount,
    removed: removedCount,
    updated: updatedCount,
    skipped: invalid.length,
    invalid,
    newQHashes: currentQHashes, // caller merges into seed_hashes
  };
};

/**
 * Auto-sync on admin login.
 *
 * Traffic model:
 *   Nothing changed : 1 read (seed_hashes)
 *   N questions changed: 1 read + N writes (only changed questions)
 *   M questions added/removed: + index/count writes
 *
 * Previously: topic hash changed -> rewrite ENTIRE topic. Now: per-question diff.
 */
export const autoSyncSeedsIfChanged = async () => {
  if (_syncRanThisSession) {
    console.info('[autoSyncSeeds] already ran this session (memory) -- skipping');
    return { synced: 0 };
  }
  try {
    const ranAt = sessionStorage.getItem(SYNC_SESSION_KEY);
    if (ranAt && Date.now() - Number(ranAt) < 30 * 60 * 1000) {
      _syncRanThisSession = true;
      console.info('[autoSyncSeeds] already ran this session (sessionStorage) -- skipping');
      return { synced: 0 };
    }
  } catch (_) { /* private mode / unavailable */ }

  try {
    const { CHAPTER_SEED_REGISTRY } = await import('../constants/curriculumSeeds.js');
    if (!Array.isArray(CHAPTER_SEED_REGISTRY) || CHAPTER_SEED_REGISTRY.length === 0) return { synced: 0 };

    // 1 read: fetch stored hashes (both topic-level and per-question)
    const hashSnap = await getDoc(SEED_HASHES_REF());
    const stored = hashSnap.exists() ? (hashSnap.data() || {}) : {};

    // stored structure (new format):
    //   _topicHashes: { [topicId]: hash }  -- fast pre-filter
    //   _qHashes: { [questionId]: hash }   -- per-question diff
    //
    // Migration from old flat format { [topicId]: hash }:
    // If _topicHashes is absent but other keys exist, treat the flat keys as
    // topic hashes so previously-synced topics don't all re-sync unnecessarily.
    let storedTopicHashes = stored._topicHashes || {};
    const storedQHashes = stored._qHashes || {};
    if (!stored._topicHashes) {
      // Old flat format -- lift any non-internal key into storedTopicHashes
      Object.entries(stored).forEach(([k, v]) => {
        if (!k.startsWith('_') && typeof v === 'string') storedTopicHashes[k] = v;
      });
    }

    // Compute current topic hashes client-side (zero reads)
    const currentTopicHashes = {};
    CHAPTER_SEED_REGISTRY.forEach((entry) => {
      if (entry.topicId) currentTopicHashes[entry.topicId] = hashSeedIds(entry.seed);
    });

    const changedEntries = CHAPTER_SEED_REGISTRY.filter(
      (entry) => entry.topicId && currentTopicHashes[entry.topicId] !== storedTopicHashes[entry.topicId]
    );

    if (changedEntries.length === 0) {
      console.info('[autoSyncSeeds] all seeds up-to-date -- no sync needed');
      _syncRanThisSession = true;
      try { sessionStorage.setItem(SYNC_SESSION_KEY, String(Date.now())); } catch (_) {}
      return { synced: 0 };
    }

    console.info(`[autoSyncSeeds] ${changedEntries.length} topic(s) changed -- syncing (per-question diff)...`);
    const report = [];
    const failed = [];
    const newTopicHashes = { ...storedTopicHashes };
    const newQHashes = { ...storedQHashes };

    for (const entry of changedEntries) {
      try {
        // Downgrade guard: if Firestore already holds MORE seed questions than
        // the local file, the local file is almost certainly an older (stale)
        // version — a reversion would silently delete questions. Skip the topic
        // and surface a warning instead of overwriting.
        const topicIndexSnap = await getDoc(doc(db, 'question_topic_index', entry.topicId));
        if (topicIndexSnap.exists()) {
          const firestoreCount = (topicIndexSnap.data().ids || []).length;
          const localCount = Array.isArray(entry.seed) ? entry.seed.length : 0;
          if (firestoreCount > localCount) {
            const msg = `local seed (${localCount}) < Firestore (${firestoreCount}) — skipped to prevent downgrade`;
            console.warn(`[autoSyncSeeds] [${entry.topicId}] SKIP: ${msg}`);
            failed.push({ topicId: entry.topicId, label: entry.label || entry.topicId, error: msg });
            continue;
          }
        }

        const res = await seedChapterQuestions(entry, storedQHashes);
        const skipNote = res.skipped ? ` (${res.skipped} skipped bad LaTeX)` : '';
        console.info(`  [${entry.topicId}] +${res.added} new / ~${res.updated} updated / -${res.removed} removed${skipNote}`);
        report.push(res);
        newTopicHashes[entry.topicId] = currentTopicHashes[entry.topicId];
        Object.assign(newQHashes, res.newQHashes);
      } catch (err) {
        console.warn(`  [${entry.topicId}] seed failed:`, err?.code || err);
        failed.push({ topicId: entry.topicId, label: entry.label || entry.topicId, error: String(err?.code || err?.message || err) });
      }
    }

    // Persist updated hashes (1 write).
    // Separate _topicHashes and _qHashes so both levels are maintained.
    await setDoc(SEED_HASHES_REF(), {
      _topicHashes: newTopicHashes,
      _qHashes: newQHashes,
      _updatedAt: Date.now(),
    }, { merge: false });

    _syncRanThisSession = true;
    try { sessionStorage.setItem(SYNC_SESSION_KEY, String(Date.now())); } catch (_) {}
    console.info(`[autoSyncSeeds] done -- synced ${report.length}/${changedEntries.length} topic(s)`);

    const totals = report.reduce((a, r) => ({
      added: a.added + r.added,
      removed: a.removed + r.removed,
      updated: a.updated + r.updated,
      skipped: a.skipped + (r.skipped || 0),
    }), { added: 0, removed: 0, updated: 0, skipped: 0 });

    return { synced: report.length, report, failed, totals };
  } catch (err) {
    console.warn('[autoSyncSeeds] failed (non-fatal):', err?.code || err);
    return { synced: 0, error: err };
  }
};
