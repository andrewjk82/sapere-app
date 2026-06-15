import {
  arrayUnion,
  arrayRemove,
  collection,
  doc,
  documentId,
  getDoc,
  getDocs,
  limit,
  query,
  serverTimestamp,
  setDoc,
  deleteDoc,
  where,
} from "firebase/firestore";
import { readChapterIndex } from "./questionIndexService";
import { db } from "../firebase/config";
import { CURRICULUM_DATA } from "../constants/curriculumData";
import {
  DEFAULT_DIFFICULTY_MIX,
  getQuestionBlueprint,
  getQuestionTargets,
  generateQuestion,
} from "./questionGenerator";
import { localCache } from "./localCacheService";
import {
  getYearNumber,
  normalizeYearLabel,
  getValidChapterIdsForYears,
} from "../utils/challengeUtils";

const DEFAULT_YEAR = "Year 1";
const DEFAULT_CHAPTER_ID = "y1-number";
const DEFAULT_BLUEPRINT = getQuestionBlueprint(DEFAULT_YEAR, DEFAULT_CHAPTER_ID);
const ASSIGNMENT_CACHE_VERSION = 1;

const getDateKey = (date = new Date()) => date.toLocaleDateString("en-CA");

// Recursively strips `undefined` values — Firestore's setDoc/updateDoc reject
// them ("Unsupported field value: undefined"). Generated questions sometimes
// carry undefined optional fields (hint/extras/etc.).
const stripUndefined = (value) => {
  if (Array.isArray(value)) {
    return value.map((item) => stripUndefined(item));
  }
  // Only recurse into plain objects — leave Firestore FieldValue sentinels
  // (e.g. serverTimestamp()), Dates and class instances untouched.
  if (value && typeof value === "object" && value.constructor === Object) {
    const out = {};
    Object.keys(value).forEach((key) => {
      const cleaned = stripUndefined(value[key]);
      if (cleaned !== undefined) out[key] = cleaned;
    });
    return out;
  }
  return value;
};

export const getAssignedChapters = (profile, assignedYear) => {
  if (Array.isArray(profile?.assignedChapters) && profile.assignedChapters.length > 0) {
    return profile.assignedChapters;
  }
  return assignedYear === DEFAULT_YEAR ? [DEFAULT_CHAPTER_ID] : [];
};

// Map every curriculum chapter id → its year label, so a chapter-only daily
// practice selection can still resolve the correct year.
const CHAPTER_YEAR_MAP = (() => {
  const map = {};
  Object.entries(CURRICULUM_DATA).forEach(([yearLabel, yearData]) => {
    const lists = Array.isArray(yearData) ? [yearData] : Object.values(yearData || {});
    lists.forEach((list) => {
      if (Array.isArray(list)) {
        list.forEach((chapter) => { if (chapter?.id) map[chapter.id] = yearLabel; });
      }
    });
  });
  return map;
})();

// Builds a stable signature of the inputs that drive Daily Practice question
// generation — i.e. the teacher's Daily Practice Settings (dailyPracticeConfig)
// plus the enrolled-year fallback. When any of these change, the signature
// changes and a previously-generated daily assignment is regenerated.
// NOTE: the Curriculum tab's progress tracking (assignedChapters/assignedTopics)
// is intentionally excluded — it does not affect daily practice.
export const getCurriculumSignature = (studentProfile = {}) => {
  const rawYear = studentProfile.assignedYear || studentProfile.year || DEFAULT_YEAR;
  const years = (Array.isArray(rawYear)
    ? rawYear
    : String(rawYear).split(",").map((y) => y.trim()).filter(Boolean))
    .map(normalizeYearLabel).filter(Boolean).sort();
  const courses = (Array.isArray(studentProfile.assignedCourse)
    ? studentProfile.assignedCourse
    : [studentProfile.assignedCourse || "Advanced"]).slice().sort();
  const config = studentProfile.dailyPracticeConfig || {};
  const cfgYears = (Array.isArray(config.years) ? config.years : []).map(normalizeYearLabel).filter(Boolean).sort();
  const cfgChapters = (Array.isArray(config.chapters) ? config.chapters : []).slice().sort();
  return JSON.stringify({ years, courses, cfgYears, cfgChapters });
};

const getOptions = (question) => {
  if (!question) return [];
  if (Array.isArray(question.options)) return question.options;
  if (Array.isArray(question.choices)) return question.choices;
  return [];
};

const toAnswerText = (option) => {
  if (option === null || option === undefined) return "";
  if (typeof option === "string" || typeof option === "number") return String(option).trim();
  return String(option.text ?? option.label ?? option.value ?? "").trim();
};

const normalizeText = (value) => String(value ?? "")
  .replace(/\$\$/g, "")
  .replace(/[−–—]/g, "-")
  .replace(/×/g, "x")
  .trim();

const deriveSimpleMathAnswer = (questionText) => {
  const text = normalizeText(questionText).replace(/\s+/g, " ");
  const binary = text.match(/^(-?\d+(?:\.\d+)?)\s*([+\-x*÷/])\s*(-?\d+(?:\.\d+)?)\s*=\s*\?$/i);
  if (!binary) return null;

  const left = Number(binary[1]);
  const right = Number(binary[3]);
  if (!Number.isFinite(left) || !Number.isFinite(right)) return null;

  const op = binary[2].toLowerCase();
  let result = null;
  if (op === "+") result = left + right;
  if (op === "-") result = left - right;
  if (op === "x" || op === "*") result = left * right;
  if ((op === "÷" || op === "/") && right !== 0) result = left / right;

  return result === null ? null : String(Number.isInteger(result) ? result : Number(result.toFixed(4)));
};

const correctQuestionAnswer = (question) => {
  const expectedAnswer = deriveSimpleMathAnswer(question?.question);
  if (expectedAnswer === null) return question;

  const options = getOptions(question);
  const matchingOptionIndex = options.findIndex((option) => toAnswerText(option) === expectedAnswer);
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
      options: options.length
        ? [expectedAnswer, ...options.filter((option) => toAnswerText(option) !== expectedAnswer)].slice(0, 4)
        : options,
    };
  }

  if (!options.length || options.some((option) => toAnswerText(option) === expectedAnswer)) {
    return { ...repaired, answer: expectedAnswer };
  }

  return {
    ...repaired,
    answer: expectedAnswer,
    options: [expectedAnswer, ...options.filter((option) => toAnswerText(option) !== expectedAnswer)].slice(0, 4),
  };
};

const removeDataUrl = (value) =>
  typeof value === "string" && value.startsWith("data:") && !value.startsWith("data:image/svg+xml")
    ? ""
    : value;

const slimQuestion = (data) => ({
  id: data.id,
  type: data.type || "manual",
  question: data.question || "",
  questionImage: removeDataUrl(data.questionImage || data.imageUrl || ""),
  options: getOptions(data).map((option) => (
    (typeof option === "object" && option !== null)
      ? { ...option, imageUrl: removeDataUrl(option.imageUrl || option.image || "") }
      : String(option)
  )),
  answer: data.answer,
  solution: data.solution || "",
  solutionSteps: Array.isArray(data.solutionSteps) ? data.solutionSteps : [],
  hint: data.hint || "",
  timeLimit: data.timeLimit || 60,
  difficulty: data.difficulty || "manual",
  year: data.year || "",
  chapterId: data.chapterId || "",
  chapterTitle: data.chapterTitle || "",
  topicId: data.topicId || "",
  topicCode: data.topicCode || "",
  topicTitle: data.topicTitle || "",
  topicGroup: data.topicGroup || "",
  graphData: data.graphData || (data.diagram ? { diagram: data.diagram } : null),
  subQuestions: Array.isArray(data.subQuestions) ? data.subQuestions : [],
  // fill_blank questions carry their per-blank metadata (label + answer)
  // in `blanks`; without this they'd render as a single short-answer.
  blanks: Array.isArray(data.blanks) ? data.blanks : [],
  requiresManualGrading: data.requiresManualGrading === true,
  isManual: data.isManual !== false,
});

// Fisher-Yates — the old `sort(() => Math.random() - 0.5)` is biased and
// leaves much of the input order intact, which (combined with Firestore's
// deterministic default doc-ID ordering) made low-ID questions repeat.
const shuffle = (items) => {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const buildDailyTargets = (studentProfile = {}) => {
  const config = studentProfile.dailyPracticeConfig || {};
  const hasConfigYears = Array.isArray(config.years) && config.years.length > 0;
  const hasConfigChapters = Array.isArray(config.chapters) && config.chapters.length > 0;

  // Curriculum-tab chapter assignment — used as fallback when no dailyPracticeConfig is set.
  const curriculumChapters = Array.isArray(studentProfile.assignedChapters) && studentProfile.assignedChapters.length > 0
    ? studentProfile.assignedChapters
    : [];
  const hasCurriculumChapters = curriculumChapters.length > 0;

  let assignedYears;
  if (hasConfigYears) {
    assignedYears = config.years.map(normalizeYearLabel).filter(Boolean);
  } else if (hasConfigChapters) {
    assignedYears = [...new Set(
      config.chapters.map((chapterId) => CHAPTER_YEAR_MAP[chapterId]).filter(Boolean),
    )].map(normalizeYearLabel).filter(Boolean);
  } else if (hasCurriculumChapters) {
    // No dailyPracticeConfig set — fall back to curriculum-tab chapter assignment.
    assignedYears = [...new Set(
      curriculumChapters.map((chapterId) => CHAPTER_YEAR_MAP[chapterId]).filter(Boolean),
    )].map(normalizeYearLabel).filter(Boolean);
  }
  if (!assignedYears || assignedYears.length === 0) {
    const rawYear = studentProfile.assignedYear || studentProfile.year || DEFAULT_YEAR;
    assignedYears = (Array.isArray(rawYear)
      ? rawYear
      : String(rawYear).split(",").map((year) => year.trim()).filter(Boolean))
      .map(normalizeYearLabel).filter(Boolean);
  }
  if (assignedYears.length === 0) assignedYears = [DEFAULT_YEAR];

  // Priority: dailyPracticeConfig.chapters → curriculum assignedChapters → all chapters of year.
  let assignedChapters = hasConfigChapters
    ? config.chapters.slice()
    : hasCurriculumChapters
      ? curriculumChapters.slice()
      : [];

  const assignedTopics = [];

  // Derive courses: include all courses that contain the assigned chapters.
  const assignedCourses = (() => {
    const profileCourses = Array.isArray(studentProfile.assignedCourse)
      ? studentProfile.assignedCourse
      : [studentProfile.assignedCourse || "Advanced"];
    if (assignedChapters.length === 0) return profileCourses;
    // Find which courses in curriculum contain these chapter IDs.
    const chapterSet = new Set(assignedChapters);
    const found = new Set();
    assignedYears.forEach((yr) => {
      const yearData = CURRICULUM_DATA[yr];
      if (!yearData) return;
      if (Array.isArray(yearData)) {
        yearData.forEach((ch) => { if (chapterSet.has(ch.id)) found.add("Standard"); });
      } else {
        Object.entries(yearData).forEach(([course, chapters]) => {
          if (Array.isArray(chapters)) {
            chapters.forEach((ch) => { if (chapterSet.has(ch.id)) found.add(course); });
          }
        });
      }
    });
    return found.size > 0 ? [...found] : profileCourses;
  })();

  const validChapterIds = getValidChapterIdsForYears(assignedYears, assignedCourses);
  assignedChapters = assignedChapters.filter((chapterId) => validChapterIds.has(chapterId));

  const targetPool = getQuestionTargets({
    year: assignedYears,
    course: assignedCourses,
    assignedChapters,
    assignedTopics,
  });
  const targetChapterIds = new Set(targetPool.map((target) => target.chapterId));
  if (targetPool.length === 0) {
    throw new Error("No valid curriculum targets found for this student.");
  }

  return {
    assignedYears,
    assignedCourses,
    assignedChapters,
    assignedTopics,
    targetPool,
    targetChapterIds,
    validChapterIds,
  };
};

const filterManualQuestion = (question, targets) => {
  const qYearNum = getYearNumber(question.year);
  const yearMatches = qYearNum !== null
    && targets.assignedYears.some((year) => getYearNumber(year) === qYearNum);

  const hasAssignedChapters = targets.assignedChapters && targets.assignedChapters.length > 0;
  const hasChapterMetadata = Boolean(question.chapterId);
  const chapterIsValidForYear = hasChapterMetadata && targets.validChapterIds.has(question.chapterId);
  const chapterMatches = hasAssignedChapters
    ? hasChapterMetadata && targets.targetChapterIds.has(question.chapterId)
    : chapterIsValidForYear;

  return yearMatches && chapterMatches;
};

const pickBalancedManualQuestions = (manualQuestions, questionCount) => {
  const manualByChapter = shuffle(manualQuestions).reduce((acc, question) => {
    const chapterId = question.chapterId || "unknown";
    if (!acc[chapterId]) acc[chapterId] = [];
    acc[chapterId].push(question);
    return acc;
  }, {});

  Object.keys(manualByChapter).forEach((chapterId) => {
    manualByChapter[chapterId] = shuffle(manualByChapter[chapterId]);
  });

  const selected = [];
  const chapterIds = shuffle(Object.keys(manualByChapter));
  let hasMore = true;
  let roundIdx = 0;

  while (selected.length < questionCount && hasMore) {
    hasMore = false;
    for (const chapterId of chapterIds) {
      if (manualByChapter[chapterId][roundIdx]) {
        selected.push(manualByChapter[chapterId][roundIdx]);
        hasMore = true;
        if (selected.length >= questionCount) break;
      }
    }
    roundIdx += 1;
  }

  return selected;
};

// Chapters the assignment will draw from today.
// All assigned chapters are considered so that questions can be found
// even if they are heavily clustered in only a few chapters.
const pickChaptersToQuery = (targets) => {
  const chaptersByYear = {};
  Array.from(targets.targetChapterIds).forEach((chapterId) => {
    const yr = CHAPTER_YEAR_MAP[chapterId] || "unknown";
    if (!chaptersByYear[yr]) chaptersByYear[yr] = [];
    chaptersByYear[yr].push(chapterId);
  });
  return Object.values(chaptersByYear).flatMap((ids) =>
    shuffle([...ids])
  );
};

// Legacy path for chapters that have no question_index doc yet: random-window
// query so even unindexed chapters rotate through their pool instead of
// always returning the deterministic first 100 docs.
const fetchChapterQuestionsLegacy = async (chapterId, fetchLimit = 100) => {
  const qRef = collection(db, "questions");
  const randomKey = doc(qRef).id; // random auto-ID = uniform random start point
  const snap = await getDocs(query(
    qRef,
    where("chapterId", "==", chapterId),
    where(documentId(), ">=", randomKey),
    limit(fetchLimit),
  ));
  let docs = snap.docs.map((item) => ({ id: item.id, ...item.data() }));
  if (docs.length < fetchLimit) {
    // Wrap around to the start of the ID range for the remainder.
    const wrapSnap = await getDocs(query(
      qRef,
      where("chapterId", "==", chapterId),
      where(documentId(), "<", randomKey),
      limit(fetchLimit - docs.length),
    ));
    docs = docs.concat(wrapSnap.docs.map((item) => ({ id: item.id, ...item.data() })));
  }
  return docs;
};

// Fetch specific questions by ID (Firestore `in` allows 30 IDs per query).
export const fetchQuestionsByIds = async (ids) => {
  const qRef = collection(db, "questions");
  const batches = [];
  for (let i = 0; i < ids.length; i += 30) {
    batches.push(ids.slice(i, i + 30));
  }
  const snaps = await Promise.all(
    batches.map((batch) => getDocs(query(qRef, where(documentId(), "in", batch)))),
  );
  return snaps.flatMap((snap) => snap.docs.map((item) => ({ id: item.id, ...item.data() })));
};

/**
 * Uniform-random, seen-aware question selection.
 *
 * Per chapter: read the ID index (1 doc), drop IDs the student has already
 * seen, and shuffle the remainder. If a chapter's pool is exhausted the
 * chapter recycles — every ID becomes available again and its seen entries
 * are queued for pruning so the seen doc stays bounded.
 *
 * Candidate IDs are then drawn round-robin across chapters (balanced spread,
 * like the old pickBalancedManualQuestions) with a small over-sample buffer,
 * and only those candidates are fetched from Firestore.
 */
const fetchManualQuestions = async (targets, { questionCount = 10, recentlySeen = new Set() } = {}) => {
  const chaptersToQuery = pickChaptersToQuery(targets);
  const pruneIds = [];

  const chapterPools = await Promise.all(chaptersToQuery.map(async (chapterId) => {
    const index = await readChapterIndex(chapterId);
    if (!index) return { chapterId, ids: null }; // no index yet → legacy
    const all = index.ids;
    let unseen = all.filter((id) => !recentlySeen.has(String(id)));
    if (unseen.length === 0 && all.length > 0) {
      // Whole chapter completed — start a new cycle and prune its seen IDs.
      unseen = all;
      pruneIds.push(...all.filter((id) => recentlySeen.has(String(id))));
    }
    return { chapterId, ids: shuffle(unseen) };
  }));

  // Round-robin draw across chapters with ~50% over-sample so that questions
  // failing the year/chapter filter below can be replaced without re-reading.
  const sampleTarget = Math.min(
    chapterPools.reduce((sum, p) => sum + (p.ids ? p.ids.length : 0), 0),
    Math.ceil(questionCount * 1.5) + 2,
  );
  const candidateIds = [];
  let round = 0;
  let drained = false;
  while (candidateIds.length < sampleTarget && !drained) {
    drained = true;
    for (const pool of shuffle(chapterPools)) {
      if (pool.ids && pool.ids[round]) {
        candidateIds.push(pool.ids[round]);
        drained = false;
        if (candidateIds.length >= sampleTarget) break;
      }
    }
    round += 1;
  }

  // Indexed chapters: fetch only the sampled IDs.
  const indexedDocs = candidateIds.length ? await fetchQuestionsByIds(candidateIds) : [];
  // Preserve the balanced round-robin order of the sample.
  const orderById = new Map(candidateIds.map((id, i) => [String(id), i]));
  indexedDocs.sort((a, b) => (orderById.get(String(a.id)) ?? 0) - (orderById.get(String(b.id)) ?? 0));

  // Unindexed chapters: legacy random-window fallback.
  const legacyChapters = chapterPools.filter((p) => p.ids === null).map((p) => p.chapterId);
  // Cap legacy queries to 6 chapters to prevent burning read quota if indexes are missing
  const cappedLegacyChapters = shuffle(legacyChapters).slice(0, 6);
  const legacyDocs = (await Promise.all(
    cappedLegacyChapters.map((chapterId) => fetchChapterQuestionsLegacy(chapterId)),
  )).flat();

  const questions = [...indexedDocs, ...legacyDocs]
    .filter((data) => data.isActive !== false)
    .map(slimQuestion)
    .filter((question) => filterManualQuestion(question, targets));

  return { questions, pruneIds };
};

const seenQuestionsRef = (uid) => doc(db, "users", uid, "seen_questions", "current_week");

// Returns the Set of question IDs the student has seen (1 Firestore read).
// Cumulative — entries are pruned per chapter only when that chapter's whole
// pool has been exhausted and recycles, so a student keeps getting NEW
// questions until they've genuinely run out.
const fetchRecentlySeenQuestionIds = async (uid) => {
  const seen = new Set();
  if (!uid) return seen;
  try {
    const snap = await getDoc(seenQuestionsRef(uid));
    if (!snap.exists()) return seen;
    (snap.data().questionIds || []).forEach((id) => seen.add(String(id)));
  } catch {
    // permission denied or network error — skip silently
  }
  return seen;
};

// Call this after each quiz completion to record which questions were seen.
export const updateSeenQuestions = async (uid, questionIds) => {
  if (!uid || !Array.isArray(questionIds) || questionIds.length === 0) return;
  const ids = questionIds.filter(Boolean).map(String);
  if (ids.length === 0) return;
  try {
    await setDoc(seenQuestionsRef(uid), {
      questionIds: arrayUnion(...ids),
      updatedAt: serverTimestamp(),
    }, { merge: true });
  } catch (err) {
    console.warn("updateSeenQuestions failed (non-critical):", err?.code || err);
  }
};

// Removes recycled chapters' IDs so the seen doc stays bounded by the number
// of active questions the student is currently assigned.
const pruneSeenQuestions = async (uid, ids) => {
  if (!uid || !Array.isArray(ids) || ids.length === 0) return;
  try {
    await setDoc(seenQuestionsRef(uid), {
      questionIds: arrayRemove(...ids.map(String)),
      updatedAt: serverTimestamp(),
    }, { merge: true });
  } catch (err) {
    console.warn("pruneSeenQuestions failed (non-critical):", err?.code || err);
  }
};

// Stable content hash for generated questions so they get an ID — enabling
// seen-tracking and within-quiz de-duplication for the procedural pool too.
const hashGeneratedQuestion = (question) => {
  const text = `${question?.question || ""}|${question?.answer ?? ""}`;
  let h = 5381;
  for (let i = 0; i < text.length; i += 1) {
    h = ((h << 5) + h + text.charCodeAt(i)) | 0; // djb2
  }
  return `gen-${(h >>> 0).toString(36)}`;
};

const buildQuestionsForStudent = async (studentProfile, questionCount, uid) => {
  const { ensurePracticePool, selectDailyQuestions } = await import("./practicePoolService");

  // 1. 풀 초기화 / 커리큘럼 변경 감지 (이미 최신이면 1 read만 발생)
  await ensurePracticePool(uid, studentProfile);

  // 2. 풀에서 균등+약점 보충 알고리즘으로 ID 선택 (1 read)
  const { selectedIds, chapterBreakdown } = await selectDailyQuestions(uid, questionCount);

  // 3. 선택된 ID로 실제 문제 내용 fetch (~2 reads)
  const rawDocs = selectedIds.length ? await fetchQuestionsByIds(selectedIds) : [];

  // ID 순서 보존 (selectDailyQuestions가 이미 셔플 완료)
  const orderById = new Map(selectedIds.map((id, i) => [String(id), i]));
  rawDocs.sort((a, b) => (orderById.get(String(a.id)) ?? 0) - (orderById.get(String(b.id)) ?? 0));

  const questions = rawDocs
    .filter((d) => d.isActive !== false)
    .map(slimQuestion)
    .map(correctQuestionAnswer);

  const targets = buildDailyTargets(studentProfile);

  // Top up the shortfall with procedurally-generated questions for the lower
  // years (Year 1-6), which rely on generation rather than seeded questions.
  // Year 7-12 stays seed-only (see commit c99114b), so we restrict generation
  // to the targeted years below 7.
  const generationYears = targets.assignedYears.filter((y) => getYearNumber(y) < 7);
  let generatedCount = 0;
  if (generationYears.length > 0 && questions.length < questionCount) {
    const need = questionCount - questions.length;
    const usedIds = new Set(questions.map((q) => String(q.id)));
    const difficulties = ["easy", "medium", "hard"];
    const maxAttempts = need * 6 + 6;
    for (let attempt = 0; attempt < maxAttempts && generatedCount < need; attempt += 1) {
      let generated;
      try {
        generated = generateQuestion({
          year: generationYears,
          course: targets.assignedCourses,
          assignedChapters: targets.assignedChapters,
          assignedTopics: targets.assignedTopics,
        }, difficulties[generatedCount % difficulties.length]);
      } catch (err) {
        console.warn("Daily question generation failed:", err?.message || err);
        break;
      }
      const withId = correctQuestionAnswer({ ...generated, id: hashGeneratedQuestion(generated) });
      if (usedIds.has(String(withId.id))) continue; // skip duplicates
      usedIds.add(String(withId.id));
      questions.push(withId);
      generatedCount += 1;
    }
  }

  return {
    questions,
    source: {
      years: targets.assignedYears,
      courses: targets.assignedCourses,
      chapters: Object.keys(chapterBreakdown),
      assignedChapters: targets.assignedChapters,
      assignedTopics: targets.assignedTopics,
      manualQuestionCount: questions.length - generatedCount,
      generatedQuestionCount: generatedCount,
    },
  };
};

export const getDailyAssignmentCacheKey = (uid, dateKey = getDateKey()) =>
  `daily-assignment:v${ASSIGNMENT_CACHE_VERSION}:${uid}:${dateKey}`;

export const createDailyAssignment = async ({
  uid,
  studentProfile,
  dateKey = getDateKey(),
  questionCount,
  generatedBy = "system",
  forceVersion = Date.now(),
}) => {
  if (!uid) throw new Error("Daily assignment requires a user id.");
  const resolvedQuestionCount = Math.max(1, Math.min(50, Number(questionCount || studentProfile?.dailyQuestionCount || 10)));
  const { questions, source } = await buildQuestionsForStudent(studentProfile, resolvedQuestionCount, uid);

  // Record the current question-bank version so we can detect future edits.
  const syncMetaSnap = await getDoc(doc(db, "sync_meta", "questions")).catch(() => null);
  const questionsVersion = syncMetaSnap?.exists() ? (syncMetaSnap.data().version || 0) : 0;

  const assignment = {
    date: dateKey,
    status: "open",
    version: forceVersion,
    questionCount: questions.length,
    requestedQuestionCount: resolvedQuestionCount,
    curriculumSignature: getCurriculumSignature(studentProfile),
    questionsVersion,
    questionIds: questions.map((question) => question.id).filter(Boolean),
    questions,
    source,
    generatedBy,
    generatedAt: new Date().toISOString(),
    updatedAt: serverTimestamp(),
  };

  await setDoc(doc(db, "users", uid, "daily_assignments", dateKey), stripUndefined(assignment), { merge: false });
  const cacheValue = { ...assignment, updatedAt: null, savedAt: Date.now() };
  localCache.set(getDailyAssignmentCacheKey(uid, dateKey), cacheValue);
  return cacheValue;
};

export const prepareNextDailyAssignment = async ({
  uid,
  studentProfile,
  questionCount,
}) => {
  if (!uid) throw new Error("Daily assignment prep requires a user id.");
  const resolvedQuestionCount = Math.max(1, Math.min(50, Number(questionCount || studentProfile?.dailyQuestionCount || 10)));
  const { questions, source } = await buildQuestionsForStudent(studentProfile, resolvedQuestionCount, uid);

  const prepAssignment = {
    date: "next_prep",
    status: "prepared",
    version: Date.now(),
    questionCount: questions.length,
    requestedQuestionCount: resolvedQuestionCount,
    curriculumSignature: getCurriculumSignature(studentProfile),
    questionIds: questions.map((question) => question.id).filter(Boolean),
    questions,
    source,
    generatedBy: "proactive-prep",
    generatedAt: new Date().toISOString(),
    updatedAt: serverTimestamp(),
  };

  // Save to Firestore as 'next_prep'
  await setDoc(doc(db, "users", uid, "daily_assignments", "next_prep"), stripUndefined(prepAssignment), { merge: false });
  
  // Save to Local Cache (use prefix to distinguish from normal cache)
  const cacheValue = { ...prepAssignment, updatedAt: null, savedAt: Date.now() };
  localCache.set(`next-daily-assignment:${uid}`, cacheValue);
  
  return cacheValue;
};

export const fetchOrCreateDailyAssignment = async ({
  uid,
  studentProfile,
  dateKey = getDateKey(),
  questionCount,
}) => {
  if (!uid) throw new Error("Daily assignment requires a user id.");
  const expectedQuestionCount = Math.max(1, Math.min(50, Number(questionCount || studentProfile?.dailyQuestionCount || 10)));
  const expectedSignature = getCurriculumSignature(studentProfile);
  const cacheKey = getDailyAssignmentCacheKey(uid, dateKey);
  const cached = localCache.get(cacheKey);

  // Fetch the latest question-bank version so we can detect edits.
  const [assignmentSnap, syncMetaSnap] = await Promise.all([
    getDoc(doc(db, "users", uid, "daily_assignments", dateKey)),
    getDoc(doc(db, "sync_meta", "questions")),
  ]);
  const latestQuestionsVersion = syncMetaSnap.exists() ? (syncMetaSnap.data().version || 0) : 0;

  if (assignmentSnap.exists()) {
    const assignment = { id: assignmentSnap.id, ...assignmentSnap.data() };
    const hasQuestions = Array.isArray(assignment.questions) && assignment.questions.length > 0;
    const countMatches = Number(assignment.requestedQuestionCount || assignment.questionCount || 0) === expectedQuestionCount;
    const signatureMatches = assignment.curriculumSignature === expectedSignature;
    // Never overwrite a started or completed assignment.
    const isLocked = assignment.status === "started" || assignment.status === "completed";
    // For open assignments: also regenerate if questions were edited after this
    // assignment was generated (e.g. teacher changed type from fill_blank → MC).
    const questionsStale = !isLocked
      && latestQuestionsVersion > 0
      && latestQuestionsVersion > (assignment.questionsVersion || 0);

    if (isLocked || (hasQuestions && countMatches && signatureMatches && !questionsStale)) {
      const value = { ...assignment, savedAt: Date.now() };
      localCache.set(cacheKey, value);
      return value;
    }
  }

  if (
    cached?.status === "open"
    && Array.isArray(cached.questions)
    && cached.questions.length > 0
    && Number(cached.requestedQuestionCount || cached.questionCount || 0) === expectedQuestionCount
    && cached.curriculumSignature === expectedSignature
  ) {
    return cached;
  }

  // --- NEW: PROACTIVE PREP CHECK ---
  const prepCacheKey = `next-daily-assignment:${uid}`;
  let prepAssignment = localCache.get(prepCacheKey);
  
  if (!prepAssignment) {
    const prepSnap = await getDoc(doc(db, "users", uid, "daily_assignments", "next_prep"));
    if (prepSnap.exists()) {
      prepAssignment = { id: prepSnap.id, ...prepSnap.data() };
    }
  }

  if (
    prepAssignment
    && prepAssignment.status === "prepared"
    && Array.isArray(prepAssignment.questions)
    && prepAssignment.questions.length > 0
    && Number(prepAssignment.requestedQuestionCount || prepAssignment.questionCount || 0) === expectedQuestionCount
    && prepAssignment.curriculumSignature === expectedSignature
  ) {
    // Stamp the pre-generated assignment with today's date
    const stampedAssignment = {
      ...prepAssignment,
      id: dateKey,
      date: dateKey,
      status: "open",
      version: Date.now(),
      updatedAt: serverTimestamp(),
    };
    
    // Save to today's dateKey
    await setDoc(doc(db, "users", uid, "daily_assignments", dateKey), stripUndefined(stampedAssignment), { merge: false });
    
    // Cleanup the prep data
    await deleteDoc(doc(db, "users", uid, "daily_assignments", "next_prep")).catch(() => {});
    localCache.remove(prepCacheKey);
    
    // Cache the active assignment
    const cacheValue = { ...stampedAssignment, updatedAt: null, savedAt: Date.now() };
    localCache.set(cacheKey, cacheValue);
    
    return cacheValue;
  }

  // Fallback to synchronous generation
  return createDailyAssignment({
    uid,
    studentProfile,
    dateKey,
    questionCount: expectedQuestionCount,
    generatedBy: assignmentSnap.exists() ? "profile-change" : "missing-assignment",
  });
};

export const markDailyAssignmentStarted = async (uid, dateKey = getDateKey()) => {
  if (!uid) return;
  await setDoc(doc(db, "users", uid, "daily_assignments", dateKey), {
    status: "started",
    startedAt: new Date().toISOString(),
    updatedAt: serverTimestamp(),
  }, { merge: true });
  const cacheKey = getDailyAssignmentCacheKey(uid, dateKey);
  const cached = localCache.get(cacheKey);
  if (cached) localCache.set(cacheKey, { ...cached, status: "started", startedAt: new Date().toISOString() });
};

export const markDailyAssignmentCompleted = async (uid, dateKey = getDateKey()) => {
  if (!uid) return;
  await setDoc(doc(db, "users", uid, "daily_assignments", dateKey), {
    status: "completed",
    completedAt: new Date().toISOString(),
    updatedAt: serverTimestamp(),
  }, { merge: true });
  const cacheKey = getDailyAssignmentCacheKey(uid, dateKey);
  const cached = localCache.get(cacheKey);
  if (cached) localCache.set(cacheKey, { ...cached, status: "completed", completedAt: new Date().toISOString() });
};

export const getDefaultDailyBlueprint = () => DEFAULT_BLUEPRINT;
