#!/usr/bin/env node
/**
 * Add the 72 Danebank 2020 (y12a-exam-dane) questions that exist in the seed
 * file but were deleted from Firestore back in deleteDanebank2020BlankQuestions.js
 * (deleted because `question` was blank at the time — see c383d58 incident).
 * The seed file's question/hint text has since been restored from git history
 * (see pushY12PastPaperTextToFirestore.mjs), so it's now safe to re-create
 * these docs.
 *
 * Mirrors mapSeedQuestion() in src/services/chapterSeeder.js exactly (same
 * field shape, same MC-answer resolution, same "never guess" refusal, same
 * LaTeX validation gate) so these docs are indistinguishable from a normal
 * client-side seed. Uses admin SDK .set() to CREATE new docs only — never
 * touches existing ones.
 *
 * Run tools/scripts/rebuildQuestionIndexes.js exam:dane-2020 after this.
 */
import { readFileSync } from 'fs';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import katex from 'katex';
import { CHAPTER_SEED_REGISTRY } from '../../src/constants/curriculumSeeds.js';
import { validateSeedQuestion } from '../../src/utils/latexValidate.js';
import { answersMatch } from '../../src/utils/answerMatching.js';

const DRY_RUN = process.argv.includes('--dry-run');
const renderToString = (tex, opts) => katex.renderToString(tex, opts);

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const chapter = CHAPTER_SEED_REGISTRY.find((c) => c.chapterId === 'exam:dane-2020');
if (!chapter) { console.error('exam:dane-2020 not found in CHAPTER_SEED_REGISTRY'); process.exit(1); }

// ── ported verbatim from src/services/chapterSeeder.js ──────────────────────
const rawOptionText = (opt) => (typeof opt === 'object' && opt !== null ? opt.text : opt);

const resolveSeedCorrectIndex = (rawOpts, rawCorrect) => {
  if (rawCorrect === undefined || rawCorrect === null) return -1;
  const s = String(rawCorrect).trim();
  const exact = rawOpts.findIndex((opt) => String(rawOptionText(opt)).trim() === s);
  if (exact >= 0) return exact;
  if (/^\d+$/.test(s) || typeof rawCorrect === 'number') {
    const idx = parseInt(s, 10);
    if (Number.isInteger(idx) && idx >= 0 && idx < rawOpts.length) return idx;
  }
  return -1;
};

const MANUAL_GRADE_KEYWORDS = /(draw|sketch|construct|show that|prove|justify|explain why)/i;

const mapSeedQuestion = (raw) => {
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
      throw new Error(`[seed] unresolvable MC answer for ${raw.id || '(no id)'} — refusing to write a guessed answer`);
    }
    options = rawOpts.map((opt) => (
      typeof opt === 'object' && opt !== null
        ? { text: String(opt.text || ''), imageUrl: opt.imageUrl || '' }
        : { text: String(opt), imageUrl: '' }
    ));
    answer = String(correctIndex);
  }

  const resolvedTopicId = raw.topicId || chapter.topicId;
  const resolvedTopicCode = raw.c || raw.topicCode || chapter.topicCode || '';
  const resolvedTopicTitle = raw.t || raw.topicTitle || chapter.topicTitle || '';
  const resolvedChapterId = raw.chapterId
    || (resolvedTopicId !== chapter.topicId ? resolvedTopicId.replace(/[A-Z]+$/, '') : chapter.chapterId);

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
    subQuestions: [],
    blanks: Array.isArray(raw.blanks) ? raw.blanks : [],
    graphData: raw.graphData || null,
    examPaper: raw.examPaper || chapter.examPaper || '',
    isNew: raw.isNew || false,
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
  };
};

const mcAnswerErrors = (raw) => {
  if (raw.type !== 'multiple_choice') return [];
  const rawOpts = raw.opts || raw.options || [];
  if (rawOpts.length === 0) return [];
  const rawCorrect = raw.a ?? raw.answer ?? raw.solution;
  const idx = resolveSeedCorrectIndex(rawOpts, rawCorrect);
  if (idx < 0) {
    return [`correct answer ${JSON.stringify(rawCorrect)} matches none of the options ${JSON.stringify(rawOpts.map(rawOptionText))}`];
  }
  const correctText = rawOptionText(rawOpts[idx]);
  if (!answersMatch(correctText, correctText)) {
    return [`correct option text ${JSON.stringify(correctText)} is not self-matching (empty/unanswerable)`];
  }
  return [];
};

async function run() {
  const existingSnap = await db.collection('questions').where('topicId', '==', 'y12a-exam-dane').get();
  const existingIds = new Set(existingSnap.docs.map((d) => d.id));
  const toAdd = chapter.seed.filter((raw) => raw.id && !existingIds.has(raw.id));

  console.log(`Chapter exam:dane-2020 — ${chapter.seed.length} in seed, ${existingIds.size} already in Firestore, ${toAdd.length} to add.${DRY_RUN ? ' [DRY RUN]' : ''}`);

  let added = 0;
  let skippedLatex = 0;
  let skippedAnswer = 0;
  const skippedIds = [];

  const writeOps = [];
  for (const raw of toAdd) {
    const latexErrors = validateSeedQuestion(raw, renderToString);
    if (latexErrors.length > 0) {
      skippedLatex++;
      skippedIds.push({ id: raw.id, reason: 'latex', errors: latexErrors });
      continue;
    }
    const ansErrors = mcAnswerErrors(raw);
    if (ansErrors.length > 0) {
      skippedAnswer++;
      skippedIds.push({ id: raw.id, reason: 'answer', errors: ansErrors });
      continue;
    }
    const mapped = mapSeedQuestion(raw);
    writeOps.push({ id: raw.id, mapped });
    added++;
  }

  console.log(`Will add: ${added}, skip (broken LaTeX): ${skippedLatex}, skip (bad answer): ${skippedAnswer}`);
  if (skippedIds.length) console.log('Skipped:', JSON.stringify(skippedIds, null, 2));

  if (!DRY_RUN && writeOps.length > 0) {
    const BATCH_SIZE = 450;
    for (let i = 0; i < writeOps.length; i += BATCH_SIZE) {
      const batch = db.batch();
      writeOps.slice(i, i + BATCH_SIZE).forEach(({ id, mapped }) => {
        batch.set(db.collection('questions').doc(id), mapped, { merge: false });
      });
      await batch.commit();
    }
    console.log(`✅ Added ${writeOps.length} docs to Firestore.`);
    console.log('NEXT: node tools/scripts/rebuildQuestionIndexes.js exam:dane-2020');
  } else if (DRY_RUN) {
    console.log('[DRY RUN] No writes made.');
  }
  process.exit(0);
}

run().catch((err) => { console.error(err); process.exit(1); });
