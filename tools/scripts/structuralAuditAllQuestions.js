/**
 * structuralAuditAllQuestions.js
 * ─────────────────────────────────────────────────────────────────────────
 * Read-only structural census over EVERY doc in the live `questions`
 * collection (not just seed-file-backed ones — some chapters, e.g. y7-4,
 * exist only in Firestore). Cheap, deterministic checks only — no LLM calls:
 *
 *   - LaTeX validity (real KaTeX parse, reusing src/utils/latexValidate.js —
 *     the same gate used by `npm run validate-seeds` and chapterSeeder.js)
 *   - answer-index vs solution-text mismatch (same heuristic as above)
 *   - duplicate MCQ options (exact and whitespace/case-normalized)
 *   - answer index out of bounds / missing answer
 *   - empty question text / empty options array for multiple_choice
 *
 * Writes nothing. Outputs a JSON report + console summary grouped by
 * chapterId/topicId, with origin:'teacher' docs flagged separately (never
 * auto-fix those per CLAUDE.md).
 *
 * Usage: node tools/scripts/structuralAuditAllQuestions.js [outputPath]
 */
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync, writeFileSync } from 'fs';
import katex from 'katex';
import { validateSeedQuestion } from '../../src/utils/latexValidate.js';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const renderToString = (tex, opts) => katex.renderToString(tex, opts);

const normalizeOptText = (opt) => {
  const text = typeof opt === 'object' && opt !== null ? opt.text : opt;
  return String(text ?? '').trim().replace(/\s+/g, ' ').toLowerCase();
};

const checkDuplicateOptions = (doc) => {
  if (doc.type !== 'multiple_choice' || !Array.isArray(doc.options)) return [];
  const seen = new Map();
  const errors = [];
  doc.options.forEach((opt, i) => {
    const norm = normalizeOptText(opt);
    if (norm === '') return;
    if (seen.has(norm)) {
      errors.push({ field: 'options', tex: '', error: `Duplicate option at index ${i} (same as index ${seen.get(norm)})` });
    } else {
      seen.set(norm, i);
    }
  });
  return errors;
};

const checkBasicShape = (doc) => {
  const errors = [];
  const qText = doc.q ?? doc.question ?? '';
  if (!qText || !String(qText).trim()) {
    errors.push({ field: 'question', tex: '', error: 'Empty question text' });
  }
  if (doc.type === 'multiple_choice') {
    const opts = doc.opts || doc.options || [];
    if (!Array.isArray(opts) || opts.length < 2) {
      errors.push({ field: 'options', tex: '', error: `multiple_choice has ${Array.isArray(opts) ? opts.length : 0} option(s)` });
    }
  }
  return errors;
};

async function main() {
  console.log('Fetching all questions from Firestore...');
  const snap = await db.collection('questions').get();
  console.log(`Fetched ${snap.size} docs. Running structural checks...`);

  let checked = 0;
  let withErrors = 0;
  let teacherOriginWithErrors = 0;
  const byChapter = {};

  for (const d of snap.docs) {
    const data = d.data();
    checked++;
    const errs = [
      ...validateSeedQuestion(data, renderToString),
      ...checkDuplicateOptions(data),
      ...checkBasicShape(data),
    ];
    if (errs.length === 0) continue;

    withErrors++;
    const isTeacher = data.origin === 'teacher';
    if (isTeacher) teacherOriginWithErrors++;

    const chapterId = data.chapterId || '(unknown chapter)';
    const topicId = data.topicId || '(unknown topic)';
    if (!byChapter[chapterId]) byChapter[chapterId] = {};
    if (!byChapter[chapterId][topicId]) byChapter[chapterId][topicId] = [];
    byChapter[chapterId][topicId].push({
      id: d.id,
      origin: data.origin || null,
      isActive: data.isActive !== false,
      question: String(data.question || data.q || '').slice(0, 80),
      errors: errs,
    });
  }

  const report = {
    generatedAt: new Date().toISOString(),
    totalChecked: checked,
    totalWithErrors: withErrors,
    teacherOriginWithErrors,
    byChapter,
  };

  const outPath = process.argv[2] || '/private/tmp/claude-501/-Users-andrewkim-Desktop-sapere1/2091ab3e-e938-4ba3-9128-dd1b9704abe8/scratchpad/structural-audit-report.json';
  writeFileSync(outPath, JSON.stringify(report, null, 2));

  console.log(`\n=== Structural Audit Summary ===`);
  console.log(`Total checked: ${checked}`);
  console.log(`Questions with >=1 issue: ${withErrors} (${((withErrors / checked) * 100).toFixed(2)}%)`);
  console.log(`  of which origin='teacher': ${teacherOriginWithErrors} (never auto-fix these)`);
  console.log(`Chapters with issues: ${Object.keys(byChapter).length}`);
  console.log(`Full report written to: ${outPath}`);
  process.exit(0);
}

main().catch((err) => {
  console.error('FATAL:', err);
  process.exit(1);
});
