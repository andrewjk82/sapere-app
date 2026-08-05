/**
 * convertLegacyToSeedFormat.js
 *
 * Converts legacy-format import files (importYear7Ch*.js) to modern seed format
 * (seedYear7Ch*Questions.js) compatible with the full audit pipeline.
 *
 * Usage:
 *   node tools/scripts/convertLegacyToSeedFormat.js \
 *     --input tools/scripts/importYear7Ch7A.js \
 *     --outdir src/constants \
 *     --prefix seedYear7Ch7
 */

import fs from 'fs';
import path from 'path';

// ─── Helpers ────────────────────────────────────────────────────────────────

function fixLatex(str) {
  if (typeof str !== 'string') return str;
  // $...$ → \(...\)  (avoid double-converting already modern syntax)
  return str.replace(/(?<!\\)\$([^\$\n]+?)\$/g, '\\($1\\)');
}

function stripHtml(html) {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Parse a raw HTML solution blob into structured solutionSteps.
 * Strategy: Split on <p> or <li> tags and extract text. Wrap math.
 */
function htmlToSolutionSteps(html, topicCode) {
  const PROFILE_HINTS = {
    '7A': 'Remember: The decimal point separates units from tenths. Compare decimals from the highest place value column downwards.',
    '7B': 'To convert: count decimal places → use that power of 10 as the denominator, OR use short division if converting a fraction.',
    '7C': 'Always align the decimal points before adding or subtracting. Pad shorter decimals with trailing zeros if needed.',
    '7D': 'Multiplying by 10, 100, 1000… moves the decimal point right. Dividing moves it left by the same number of places.',
    '7E': 'Ignore the decimal points, multiply as whole numbers, then insert the decimal point so the answer has the total number of decimal places of both factors.',
    '7F': 'To divide by a decimal, multiply both the divisor and dividend by a power of 10 to convert the divisor to a whole number first.',
    '7G': 'Fractions that do not terminate produce a repeating cycle. Use dot notation (·) above the first and last repeating digit.',
    '7H': 'Identify the required place, look at the next digit to the right: ≥5 rounds up; ≤4 stays the same. Drop all subsequent digits.',
  };

  const hint = PROFILE_HINTS[topicCode] || '';

  // Extract paragraph/list content
  const chunks = [];
  const tagRegex = /<(?:p|li|strong)[^>]*>([\s\S]*?)<\/(?:p|li|strong)>/gi;
  let match;
  while ((match = tagRegex.exec(html)) !== null) {
    const text = stripHtml(match[1]).trim();
    if (text && text.length > 4 && !text.toLowerCase().startsWith('step-by-step')) {
      chunks.push(fixLatex(text));
    }
  }

  // De-duplicate consecutive identical chunks
  const unique = chunks.filter((c, i) => c !== chunks[i - 1]);

  if (unique.length === 0) {
    // fallback
    const plain = fixLatex(stripHtml(html));
    return [
      { explanation: hint || 'Identify what the question is asking.', workingOut: plain.slice(0, 120), graphData: null },
      { explanation: 'Carry out the calculation step by step.', workingOut: plain, graphData: null },
      { explanation: 'State the final simplified answer.', workingOut: '', graphData: null },
    ];
  }

  // Build steps
  const steps = [];

  // Step 0: Pedagogical hint from textbook profile
  if (hint) {
    steps.push({
      explanation: hint,
      workingOut: '',
      graphData: null,
    });
  }

  // Remaining chunks become steps
  for (let i = 0; i < unique.length && steps.length < 5; i++) {
    const text = unique[i];
    // Decide if it looks like working-out (has numbers/operators) or an explanation
    const isMath = /[0-9=+\-×÷\\]/.test(text) && text.length < 180;
    steps.push({
      explanation: isMath ? 'Perform the next calculation step carefully.' : text,
      workingOut: isMath ? text : '',
      graphData: null,
    });
  }

  // Ensure at least 3 steps
  while (steps.length < 3) {
    steps.push({ explanation: 'State the final simplified answer.', workingOut: '', graphData: null });
  }

  return steps.slice(0, 5);
}

// ─── Topic code → export name & filename ────────────────────────────────────

function topicCodeToExportName(prefix, topicCode) {
  // e.g. prefix="Y7_CH7", topicCode="7A" → "Y7_CH7A_QUESTIONS"
  const letter = topicCode.replace(/\d/g, '').toUpperCase();
  return `${prefix}${letter}_QUESTIONS`;
}

function topicCodeToFilename(outdir, filenamePrefix, topicCode) {
  const letter = topicCode.replace(/\d/g, '').toUpperCase();
  return path.join(outdir, `${filenamePrefix}${letter}Questions.js`);
}

// ─── Main ────────────────────────────────────────────────────────────────────

function convert({ inputFile, outdir, filenamePrefix, exportPrefix }) {
  console.log(`Reading ${inputFile}...`);
  const content = fs.readFileSync(inputFile, 'utf8');

  // Extract questions array
  const startIdx = content.indexOf('export const allQuestions =');
  if (startIdx === -1) throw new Error('Could not find allQuestions export');
  let arrayContent = content.substring(startIdx + 'export const allQuestions ='.length).trim();
  if (arrayContent.endsWith(';')) arrayContent = arrayContent.slice(0, -1);

  const legacyQuestions = eval(`(${arrayContent})`);
  console.log(`Loaded ${legacyQuestions.length} questions.`);

  // Group by topicCode
  const byTopic = {};
  for (const q of legacyQuestions) {
    const code = q.topicCode || 'X';
    if (!byTopic[code]) byTopic[code] = [];
    byTopic[code].push(q);
  }

  let totalConverted = 0;

  for (const [topicCode, qs] of Object.entries(byTopic)) {
    const exportName = topicCodeToExportName(exportPrefix, topicCode);
    const outFile = topicCodeToFilename(outdir, filenamePrefix, topicCode);

    console.log(`Converting ${qs.length} questions for topic ${topicCode} → ${path.basename(outFile)}`);

    const modern = qs.map((q, idx) => {
      // Fix options
      const rawOptions = Array.isArray(q.options) ? q.options : [];
      const modernOptions = rawOptions.map(o => {
        const text = typeof o === 'string' ? fixLatex(o) : fixLatex(String(o.text || ''));
        return { text, imageUrl: '' };
      });

      // Fix answer index
      const answerIdx = typeof q.answer === 'number' ? q.answer : Number(q.answer ?? 0);

      // Build solutionSteps from HTML solution
      const solutionSteps = htmlToSolutionSteps(q.solution || '', topicCode);

      // Generate a clean ID
      const topicLetter = topicCode.replace(/\d/g, '').toLowerCase();
      const id = `y7-7${topicLetter}-q${idx + 1}`;

      return {
        id,
        t: q.topicTitle || '',
        type: 'multiple_choice',
        difficulty: q.difficulty || 'easy',
        timeLimit: 60,
        question: fixLatex(q.question || ''),
        a: answerIdx,
        answer: String(answerIdx),
        hint: '',
        solution: '',
        solutionSteps,
        graphData: null,
        isNew: true,
        options: modernOptions,
      };
    });

    const fileContent = `export const ${exportName} = ${JSON.stringify(modern, null, 2)};\n`;
    fs.writeFileSync(outFile, fileContent, 'utf8');
    console.log(`  ✓ Written ${modern.length} questions to ${path.basename(outFile)}`);
    totalConverted += modern.length;
  }

  console.log(`\nDone! Converted ${totalConverted} questions total across ${Object.keys(byTopic).length} topics.`);
  return Object.keys(byTopic);
}

// ─── CLI entry ────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const get = (flag) => { const i = args.indexOf(flag); return i >= 0 ? args[i + 1] : null; };

const inputFile = get('--input') || 'tools/scripts/importYear7Ch7A.js';
const outdir    = get('--outdir') || 'src/constants';
const filenamePrefix = get('--prefix') || 'seedYear7Ch7';
const exportPrefix   = get('--export-prefix') || 'Y7_CH7';

convert({
  inputFile: path.resolve(process.cwd(), inputFile),
  outdir: path.resolve(process.cwd(), outdir),
  filenamePrefix,
  exportPrefix,
});
