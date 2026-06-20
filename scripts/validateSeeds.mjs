/**
 * Seed LaTeX validator.
 *
 * Iterates every question in CHAPTER_SEED_REGISTRY, runs the renderer's exact
 * preprocessing (toDisplayText) and asks KaTeX to parse each math segment with
 * throwOnError:true. Any failure is reported with enough context to find and
 * fix it. Exits 1 if anything is broken so it can gate CI / pre-commit.
 *
 * Usage: npm run validate-seeds
 */
import katex from 'katex';
import { CHAPTER_SEED_REGISTRY } from '../src/constants/curriculumSeeds.js';
import { validateSeedQuestion } from '../src/utils/latexValidate.js';

const renderToString = (tex, opts) => katex.renderToString(tex, opts);

let totalQuestions = 0;
let brokenQuestions = 0;
let totalErrors = 0;
const reportByTopic = [];

for (const entry of CHAPTER_SEED_REGISTRY) {
  if (!entry || !Array.isArray(entry.seed)) continue;
  const topicErrors = [];
  entry.seed.forEach((raw, idx) => {
    totalQuestions++;
    const errs = validateSeedQuestion(raw, renderToString);
    if (errs.length > 0) {
      brokenQuestions++;
      totalErrors += errs.length;
      topicErrors.push({ idx, id: raw?.id || '(no id)', errs });
    }
  });
  if (topicErrors.length > 0) {
    reportByTopic.push({
      topicId: entry.topicId,
      label: entry.label || entry.topicTitle || entry.topicId,
      questions: topicErrors,
    });
  }
}

if (reportByTopic.length === 0) {
  console.log(`✓ All seed LaTeX valid — ${totalQuestions} questions checked across ${CHAPTER_SEED_REGISTRY.length} topics.`);
  process.exit(0);
}

console.error(`\n✗ Broken LaTeX found: ${totalErrors} error(s) in ${brokenQuestions}/${totalQuestions} question(s).\n`);
for (const topic of reportByTopic) {
  console.error(`── ${topic.label}  [${topic.topicId}]`);
  for (const q of topic.questions) {
    console.error(`   • question #${q.idx}  id=${q.id}`);
    for (const e of q.errs) {
      console.error(`       ${e.field}: ${e.error}`);
      console.error(`         tex: ${e.tex}`);
    }
  }
  console.error('');
}
console.error(`Summary: ${totalErrors} error(s) in ${brokenQuestions} question(s) across ${reportByTopic.length} topic(s).`);
process.exit(1);
