#!/usr/bin/env node
/**
 * Guard: every MC option shuffle / grade must go through mcOptionShuffle.js.
 *
 * Why this exists
 * ───────────────
 * The helper and its unit tests only protect the code that CALLS them. The
 * 2026-07 incident was not a bug inside the helper — it was four screens that
 * each re-implemented the shuffle themselves:
 *
 *   const correctIdx = Number(q.answer);
 *   const newAnswer  = Number.isInteger(correctIdx) ? order.indexOf(correctIdx) : q.answer;
 *
 * That assumes any integer answer is a 0-based index. For a question whose
 * answer is the literal value ("2" meaning two) it tracks the option sitting at
 * position 2 instead: the wrong option lights up green AND the student who
 * picked correctly is marked wrong. Same class of bug, four separate copies —
 * so the rule has to be enforced at the repo level, not per file.
 *
 * This scans src/ for the exact idioms that caused it. Run: npm run test:mc-guard
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const SRC = join(ROOT, 'src');

// The helper is allowed to do all of this — it is the thing being delegated to.
const ALLOWED_FILES = new Set(['src/utils/mcOptionShuffle.js']);

const RULES = [
  {
    id: 'answer-index-remap',
    // `order.indexOf(correctIdx)` / `shuffledOpts.indexOf(qData.a)` — recomputing
    // an answer index from a shuffle order. The argument must look like an answer:
    // `order.indexOf(currentStepId)` reorders lesson steps and is none of our
    // business.
    re: /\b(order|shuffled[A-Za-z]*)\s*\.indexOf\s*\(\s*([A-Za-z_$][\w$]*\s*\.\s*(a|answer)\b|correct(Idx|Index|Answer)\b)/,
    msg: 'Remaps an answer index onto a shuffled list. An index answers "which option did the author mean?" — resolve it to TEXT with prepareShuffledMcOptions() instead of re-pointing it at a new position.',
  },
  {
    id: 'raw-answer-as-index',
    // `q.options[Number(q.answer)]` — indexing a (possibly shuffled) list with
    // the raw seed answer.
    re: /\boptions\s*(\?\.)?\s*\[\s*Number\s*\(\s*[A-Za-z_$][\w$]*\s*\.\s*(answer|a)\b/,
    msg: 'Indexes an options array with the raw answer. Use resolveCorrectOptionText(q) — the raw answer may be a literal value, and after a shuffle its index means nothing.',
  },
  {
    id: 'display-index-vs-answer',
    // `String(i) === String(q.answer)` — comparing a display position to the
    // seed answer to decide the green highlight.
    re: /String\s*\(\s*[a-z][\w$]*\s*\)\s*===\s*String\s*\(\s*[A-Za-z_$][\w$]*\s*\.\s*answer\b/,
    msg: 'Decides correctness by comparing a display position to the seed answer. Use isDisplayedOptionCorrect(q, displayOptions, i) / gradeMcSelection().',
  },
  {
    id: 'number-answer-as-index',
    // `const correctIdx = Number(q.answer)` / `oIdx === Number(sqAnswer)` —
    // "any number is an index". A value answer ("3" meaning three) then marks
    // the wrong option correct. Found in QuestionBankPage + exportPdf 2026-07.
    re: /correct(Idx|Index|Mc|Option|Opt)\w*\s*=.*Number\s*\(\s*[\w$.]*answer|\b(?:i|oi|idx|oIdx|index|optIdx|displayIndex)\s*===?\s*Number\s*\(\s*[\w$.]*answer/i,
    msg: 'Treats Number(answer) as an option index. A numeric answer may be the literal option value — use resolveCorrectOptionIndex(q, options) / resolveCorrectOptionText(q).',
  },
];

// A file that reorders MC options must delegate to the helper.
const SHUFFLES_OPTIONS = /const\s+shuffle[A-Za-z]*Options?[A-Za-z]*\s*=/;
const IMPORTS_HELPER = /from\s+['"][^'"]*mcOptionShuffle(\.js)?['"]/;

const walk = (dir) => readdirSync(dir).flatMap((name) => {
  const full = join(dir, name);
  return statSync(full).isDirectory() ? walk(full) : [full];
});

const files = walk(SRC).filter((f) => /\.(js|jsx)$/.test(f));
const violations = [];

for (const file of files) {
  const rel = relative(ROOT, file);
  if (ALLOWED_FILES.has(rel)) continue;

  const source = readFileSync(file, 'utf8');
  const lines = source.split('\n');

  lines.forEach((line, i) => {
    if (line.trim().startsWith('*') || line.trim().startsWith('//')) return; // comments
    for (const rule of RULES) {
      if (rule.re.test(line)) {
        violations.push({ rel, line: i + 1, id: rule.id, msg: rule.msg, code: line.trim() });
      }
    }
  });

  if (SHUFFLES_OPTIONS.test(source) && !IMPORTS_HELPER.test(source)) {
    const idx = lines.findIndex((l) => SHUFFLES_OPTIONS.test(l));
    violations.push({
      rel,
      line: idx + 1,
      id: 'shuffle-without-helper',
      msg: 'Defines its own MC option shuffle without importing src/utils/mcOptionShuffle.js.',
      code: lines[idx]?.trim() ?? '',
    });
  }
}

console.log('\nMC shuffle usage guard\n');

if (violations.length === 0) {
  console.log(`  ok  ${files.length} files scanned — all MC shuffling goes through mcOptionShuffle.js\n`);
  process.exit(0);
}

for (const v of violations) {
  console.error(`  ✗ ${v.rel}:${v.line}  [${v.id}]`);
  console.error(`      ${v.code}`);
  console.error(`      ${v.msg}\n`);
}
console.error(`${violations.length} violation(s). See src/utils/mcOptionShuffle.js and CLAUDE.md.\n`);
process.exit(1);
