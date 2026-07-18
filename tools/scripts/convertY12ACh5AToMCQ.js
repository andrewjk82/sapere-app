/**
 * Convert Year 12 Adv Ch5A short_answer → multiple_choice (4 opts).
 * teacher_review (sketch/prove/describe multiparts) left unchanged.
 *
 *   node tools/scripts/convertY12ACh5AToMCQ.js           # dry-run summary
 *   node tools/scripts/convertY12ACh5AToMCQ.js --write    # write seed file
 *   node tools/scripts/convertY12ACh5AToMCQ.js --write --push
 */
import { writeFileSync, readFileSync } from 'fs';
import { pathToFileURL, fileURLToPath } from 'url';
import path from 'path';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

const WRITE = process.argv.includes('--write');
const PUSH = process.argv.includes('--push');
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

const S = (explanation, workingOut, graphData = null) => {
  let w = workingOut;
  if (typeof w === 'string' && w.trim() && !/\\\(|\\\[|\$/.test(w)) {
    w = `\\(${w}\\)`;
  }
  return { explanation, workingOut: w, graphData };
};

const wrapOpt = (t) => {
  const s = String(t).trim();
  if (/^\\\(|^\\\[|^\$/.test(s)) return s;
  return `\\(${s}\\)`;
};

/** Build MC: natural order opts, a = index of correct. */
function mc({ id, question, correct, distractors, steps, difficulty = 'easy', hint = '' }) {
  const optsRaw = [correct, ...distractors].map((x) => String(x).trim());
  // natural sort: try numeric then lexicographic of latex-free text
  const score = (s) => {
    const n = Number(String(s).replace(/[^\d.eE+-]/g, ''));
    return Number.isFinite(n) ? n : null;
  };
  const sorted = [...optsRaw].sort((A, B) => {
    const na = score(A);
    const nb = score(B);
    if (na != null && nb != null && na !== nb) return na - nb;
    return String(A).localeCompare(String(B));
  });
  // unique by string
  const seen = new Set();
  const opts = [];
  for (const o of sorted) {
    const w = wrapOpt(o);
    if (seen.has(w)) continue;
    seen.add(w);
    opts.push(w);
  }
  while (opts.length < 4) {
    // should not happen if distractors good
    opts.push(wrapOpt(`\\text{option ${opts.length}}`));
  }
  const correctW = wrapOpt(correct);
  let a = opts.indexOf(correctW);
  if (a < 0) {
    // fallback: match unwrapped
    a = opts.findIndex((o) => o.includes(String(correct).replace(/^\\\(|\\\)$/g, '')));
  }
  if (a < 0 || a > 3) {
    throw new Error(`[${id}] correct not in opts: ${correct} vs ${JSON.stringify(opts)}`);
  }
  // verify
  if (opts[a] !== correctW && !opts[a].includes(String(correct).replace(/^\(|\)$/g, ''))) {
    // ensure exact
    opts[a] = correctW;
  }
  // final uniqueness check
  if (new Set(opts).size !== 4) {
    throw new Error(`[${id}] duplicate opts: ${JSON.stringify(opts)}`);
  }
  return {
    id,
    topicId: 'y12a-5A',
    c: '5A',
    t: 'Review of exponential functions base e',
    topic: '5A',
    type: 'multiple_choice',
    difficulty,
    timeLimit: 90,
    question,
    opts: opts.slice(0, 4),
    a, // integer index
    solutionSteps: steps,
    hint,
    graphData: null,
    isNew: true,
  };
}

// ─── MC conversions for all 30 short_answer items ─────────────────────

const MC = [];

// q1 index laws
MC.push(mc({
  id: 'y12a-5a-q1a',
  question: 'Simplify using the index laws:\n\\(3^{2}\\times 3^{5}\\)',
  correct: '3^{7}',
  distractors: ['3^{10}', '3^{3}', '9^{7}'],
  difficulty: 'easy',
  hint: 'Same base: multiply by adding exponents.',
  steps: [
    S(
      'We are given a product of two powers of the same base, 3. The goal is to write this as a single power of 3. The index law for multiplication states that \\(a^{m}\\times a^{n}=a^{m+n}\\). A common slip is to multiply the bases or the exponents incorrectly — keep the base 3 fixed and only add the powers. The simplified single power will be the answer we match against the options.',
      '3^{2}\\times 3^{5}=3^{2+5}'
    ),
    S(
      'Add the exponents carefully: \\(2+5=7\\). Students sometimes write \\(3^{2}\\times 3^{5}=9^{7}\\) by multiplying bases, or \\(3^{10}\\) by multiplying exponents — both are wrong. The correct single power is \\(3^{7}\\), which we will check against the options.',
      '3^{2+5}=3^{7}'
    ),
    S(
      'The simplified form is \\(3^{7}\\). This is the unique power-of-3 form matching the product, so it is the correct choice among the options.',
      '3^{7}'
    ),
  ],
}));

MC.push(mc({
  id: 'y12a-5a-q1b',
  question: 'Simplify using the index laws:\n\\(e^{5}\\times e^{4}\\)',
  correct: 'e^{9}',
  distractors: ['e^{20}', 'e^{1}', 'e^{54}'],
  difficulty: 'easy',
  hint: 'For base \\(e\\), multiply by adding exponents.',
  steps: [
    S(
      'The factors share base \\(e\\). Multiplication of powers with the same base adds the exponents: \\(e^{m}\\times e^{n}=e^{m+n}\\). Do not multiply the exponents (that would give \\(e^{20}\\)). The sum of the exponents is the simplified form we need.',
      'e^{5}\\times e^{4}=e^{5+4}'
    ),
    S(
      'Compute \\(5+4=9\\). The product collapses to the single exponential \\(e^{9}\\).',
      'e^{5+4}=e^{9}'
    ),
    S(
      'So the simplified expression is \\(e^{9}\\), which is the correct option.',
      'e^{9}'
    ),
  ],
}));

MC.push(mc({
  id: 'y12a-5a-q1c',
  question: 'Simplify using the index laws:\n\\(5^{8}\\div 5^{3}\\)',
  correct: '5^{5}',
  distractors: ['5^{11}', '5^{24}', '5^{\\frac{8}{3}}'],
  difficulty: 'easy',
  hint: 'Same base: divide by subtracting exponents.',
  steps: [
    S(
      'Division of powers with the same base uses \\(a^{m}\\div a^{n}=a^{m-n}\\). Keep base 5 and subtract exponents. A frequent error is adding exponents (as in multiplication) or writing a fractional exponent \\(\\frac{8}{3}\\).',
      '5^{8}\\div 5^{3}=5^{8-3}'
    ),
    S(
      'Subtract: \\(8-3=5\\). Hence the quotient is \\(5^{5}\\).',
      '5^{8-3}=5^{5}'
    ),
    S(
      'The simplified answer is \\(5^{5}\\).',
      '5^{5}'
    ),
  ],
}));

MC.push(mc({
  id: 'y12a-5a-q1d',
  question: 'Simplify using the index laws:\n\\(e^{9}\\div e^{4}\\)',
  correct: 'e^{5}',
  distractors: ['e^{13}', 'e^{36}', 'e^{\\frac{9}{4}}'],
  difficulty: 'easy',
  hint: 'Subtract exponents when dividing powers of \\(e\\).',
  steps: [
    S(
      'Apply \\(e^{m}\\div e^{n}=e^{m-n}\\). Do not add exponents or form a quotient of exponents as a single fraction power.',
      'e^{9}\\div e^{4}=e^{9-4}'
    ),
    S(
      'Evaluate \\(9-4=5\\) to obtain \\(e^{5}\\).',
      'e^{9-4}=e^{5}'
    ),
    S(
      'The simplified form is \\(e^{5}\\).',
      'e^{5}'
    ),
  ],
}));

MC.push(mc({
  id: 'y12a-5a-q1e',
  question: 'Simplify using the index laws:\n\\((7^{2})^{5}\\)',
  correct: '7^{10}',
  distractors: ['7^{7}', '7^{25}', '7^{3}'],
  difficulty: 'easy',
  hint: 'Power of a power: multiply the exponents.',
  steps: [
    S(
      'A power raised to a power multiplies the exponents: \\((a^{m})^{n}=a^{mn}\\). Here the base stays 7. Students often add (\\(2+5=7\\)) or leave \\(7^{25}\\) by multiplying base and exponent incorrectly.',
      '(7^{2})^{5}=7^{2\\times 5}'
    ),
    S(
      'Multiply: \\(2\\times 5=10\\), so the expression is \\(7^{10}\\).',
      '7^{2\\times 5}=7^{10}'
    ),
    S(
      'Therefore the simplified answer is \\(7^{10}\\).',
      '7^{10}'
    ),
  ],
}));

MC.push(mc({
  id: 'y12a-5a-q1f',
  question: 'Simplify using the index laws:\n\\((e^{4})^{8}\\)',
  correct: 'e^{32}',
  distractors: ['e^{12}', 'e^{4}', 'e^{48}'],
  difficulty: 'easy',
  hint: 'Multiply exponents for a power of a power.',
  steps: [
    S(
      'Use \\((e^{m})^{n}=e^{mn}\\). Multiply 4 by 8 rather than adding them.',
      '(e^{4})^{8}=e^{4\\times 8}'
    ),
    S(
      'Compute \\(4\\times 8=32\\) to get \\(e^{32}\\).',
      'e^{4\\times 8}=e^{32}'
    ),
    S(
      'The simplified form is \\(e^{32}\\).',
      'e^{32}'
    ),
  ],
}));

// q2 with x in exponent
MC.push(mc({
  id: 'y12a-5a-q2a',
  question: 'Simplify using the index laws:\n\\(e^{3x}\\times e^{4x}\\)',
  correct: 'e^{7x}',
  distractors: ['e^{12x}', 'e^{x}', 'e^{7}'],
  difficulty: 'easy',
  hint: 'Add the coefficients of \\(x\\) in the exponents.',
  steps: [
    S(
      'The bases are both \\(e\\), so multiply by adding exponents: \\(e^{3x}\\times e^{4x}=e^{3x+4x}\\). Treat the exponents as algebraic expressions in \\(x\\). A common error is multiplying the coefficients (\\(3\\times 4=12\\)) or dropping \\(x\\).',
      'e^{3x}\\times e^{4x}=e^{3x+4x}'
    ),
    S(
      'Combine like terms in the exponent: \\(3x+4x=7x\\).',
      'e^{3x+4x}=e^{7x}'
    ),
    S(
      'So the product simplifies to \\(e^{7x}\\).',
      'e^{7x}'
    ),
  ],
}));

MC.push(mc({
  id: 'y12a-5a-q2b',
  question: 'Simplify using the index laws:\n\\(e^{12x}\\div e^{9x}\\)',
  correct: 'e^{3x}',
  distractors: ['e^{21x}', 'e^{\\frac{4}{3}x}', 'e^{108x}'],
  difficulty: 'easy',
  hint: 'Subtract exponents when dividing.',
  steps: [
    S(
      'Division subtracts exponents: \\(e^{12x}\\div e^{9x}=e^{12x-9x}\\). Keep the variable \\(x\\) in the result.',
      'e^{12x}\\div e^{9x}=e^{12x-9x}'
    ),
    S(
      'Simplify the exponent: \\(12x-9x=3x\\).',
      'e^{12x-9x}=e^{3x}'
    ),
    S(
      'The simplified expression is \\(e^{3x}\\).',
      'e^{3x}'
    ),
  ],
}));

MC.push(mc({
  id: 'y12a-5a-q2c',
  question: 'Simplify using the index laws:\n\\((e^{3x})^{4}\\)',
  correct: 'e^{12x}',
  distractors: ['e^{7x}', 'e^{3x+4}', 'e^{81x}'],
  difficulty: 'easy',
  hint: 'Multiply the outer power through the exponent.',
  steps: [
    S(
      'Power of a power multiplies: \\((e^{3x})^{4}=e^{3x\\times 4}\\). Distribute the 4 onto the whole exponent \\(3x\\).',
      '(e^{3x})^{4}=e^{3x\\times 4}'
    ),
    S(
      'Compute \\(3x\\times 4=12x\\) to obtain \\(e^{12x}\\).',
      'e^{3x\\times 4}=e^{12x}'
    ),
    S(
      'Therefore the answer is \\(e^{12x}\\).',
      'e^{12x}'
    ),
  ],
}));

MC.push(mc({
  id: 'y12a-5a-q2d',
  question: 'Simplify using the index laws:\n\\(e^{4x}\\times e^{-9x}\\)',
  correct: 'e^{-5x}',
  distractors: ['e^{-36x}', 'e^{5x}', 'e^{-13x}'],
  difficulty: 'easy',
  hint: 'Add the exponents, including the negative one.',
  steps: [
    S(
      'Add exponents: \\(e^{4x}\\times e^{-9x}=e^{4x+(-9x)}\\). Watch the sign on \\(-9x\\); adding a negative is subtraction of coefficients.',
      'e^{4x}\\times e^{-9x}=e^{4x-9x}'
    ),
    S(
      'Combine: \\(4x-9x=-5x\\).',
      'e^{4x-9x}=e^{-5x}'
    ),
    S(
      'The product simplifies to \\(e^{-5x}\\).',
      'e^{-5x}'
    ),
  ],
}));

MC.push(mc({
  id: 'y12a-5a-q2e',
  question: 'Simplify using the index laws:\n\\(e^{x}\\div e^{-5x}\\)',
  correct: 'e^{6x}',
  distractors: ['e^{-4x}', 'e^{-5x^{2}}', 'e^{-6x}'],
  difficulty: 'easy',
  hint: 'Subtracting a negative exponent becomes addition.',
  steps: [
    S(
      'Division: \\(e^{x}\\div e^{-5x}=e^{x-(-5x)}\\). Subtracting a negative exponent flips to addition — a very common place for sign errors.',
      'e^{x}\\div e^{-5x}=e^{x-(-5x)}'
    ),
    S(
      'Simplify: \\(x-(-5x)=x+5x=6x\\).',
      'e^{x+5x}=e^{6x}'
    ),
    S(
      'So the simplified form is \\(e^{6x}\\).',
      'e^{6x}'
    ),
  ],
}));

MC.push(mc({
  id: 'y12a-5a-q2f',
  question: 'Simplify using the index laws:\n\\((e^{-4x})^{3}\\)',
  correct: 'e^{-12x}',
  distractors: ['e^{-4x+3}', 'e^{-x}', 'e^{12x}'],
  difficulty: 'easy',
  hint: 'Multiply the outer power through the exponent, keeping the negative sign.',
  steps: [
    S(
      'Use \\((e^{-4x})^{3}=e^{(-4x)\\times 3}\\). The negative sign rides with the 4 when multiplying by 3.',
      '(e^{-4x})^{3}=e^{(-4x)\\times 3}'
    ),
    S(
      'Compute \\((-4x)\\times 3=-12x\\).',
      'e^{-12x}'
    ),
    S(
      'The simplified expression is \\(e^{-12x}\\).',
      'e^{-12x}'
    ),
  ],
}));

// q3 approximate e powers — need full questions from seed
async function loadOriginal() {
  const mod = await import(pathToFileURL(path.join(root, 'src/constants/seedYear12Ch5Questions.js')).href);
  return mod.Y12A_CH5A_QUESTIONS;
}

function approxMc(id, question, correct, distractors, exactForm, stepsExtra) {
  return mc({
    id,
    question,
    correct: String(correct),
    distractors: distractors.map(String),
    difficulty: 'medium',
    hint: 'Rewrite as a pure power of \\(e\\), then use a calculator.',
    steps: stepsExtra,
  });
}

// Will fill q3, q10, q11, q14 after loading originals for full question text

function buildAll(originals) {
  const byId = Object.fromEntries(originals.map((q) => [q.id, q]));
  const out = [];

  // Already built MC list for q1-q2
  const built = Object.fromEntries(MC.map((q) => [q.id, q]));

  // q3 series — options must be "power of e ≈ 4 s.f.", not bare decimals
  // (stem: "Write the expression as a power of e, then approximate…")
  const q3 = [
    {
      id: 'y12a-5a-q3a',
      correct: 'e^{3}\\approx 20.09',
      distractors: ['e^{-3}\\approx 0.04979', 'e^{1}\\approx 2.718', 'e^{2}\\approx 7.389'],
      hint: 'Write as \\(e^{k}\\), then approximate that power to four significant figures (e.g. \\(e^{3}\\approx 20.09\\)).',
      steps: () => [
        S('The expression is already a single power of \\(e\\): \\(e^{3}\\). No further index-law rewriting is needed.', 'e^{3}'),
        S('Evaluate \\(e^{3}\\) on a calculator. To four significant figures this is 20.09. Check that you used the natural base \\(e\\), not base 10.', 'e^{3}\\approx 20.0855\\ldots'),
        S('The full answer is the power together with its four-significant-figure approximation: \\(e^{3}\\approx 20.09\\).', 'e^{3}\\approx 20.09'),
      ],
    },
    {
      id: 'y12a-5a-q3b',
      correct: 'e^{-2}\\approx 0.1353',
      distractors: ['e^{-2}\\approx 0.135', 'e^{-1}\\approx 0.3679', 'e^{2}\\approx 7.389'],
      hint: 'Write as \\(e^{k}\\), then approximate that power to four significant figures (e.g. \\(e^{-2}\\approx 0.1353\\)).',
      steps: () => [
        S('The expression is already a pure power of \\(e\\). Negative exponents mean reciprocal powers: \\(e^{-2}=\\frac{1}{e^{2}}\\).', 'e^{-2}'),
        S('Calculator value of \\(e^{-2}\\) to four significant figures is 0.1353. Do not confuse with \\(e^{-1}\\approx 0.3679\\), and keep four significant figures (not three-figure 0.135).', 'e^{-2}\\approx 0.135335\\ldots'),
        S('The full answer is the power with its approximation: \\(e^{-2}\\approx 0.1353\\).', 'e^{-2}\\approx 0.1353'),
      ],
    },
    {
      id: 'y12a-5a-q3c',
      correct: 'e^{1}\\approx 2.718',
      distractors: ['e^{1/2}\\approx 1.649', '\\pi\\approx 3.142', 'e^{2}\\approx 7.389'],
      hint: 'Write as \\(e^{k}\\), then approximate that power to four significant figures (e.g. \\(e^{1}\\approx 2.718\\)).',
      steps: () => [
        S('Write \\(e\\) as a pure power of the base: \\(e=e^{1}\\).', 'e^{1}'),
        S('To four significant figures, \\(e\\approx 2.718\\). Note this is not \\(\\pi\\approx 3.142\\).', 'e^{1}\\approx 2.71828\\ldots'),
        S('The full answer is \\(e^{1}\\approx 2.718\\).', 'e^{1}\\approx 2.718'),
      ],
    },
    {
      id: 'y12a-5a-q3d',
      correct: 'e^{-1}\\approx 0.3679',
      distractors: ['e^{-2}\\approx 0.1353', 'e^{1/2}\\approx 1.649', 'e^{1}\\approx 2.718'],
      hint: 'First rewrite as a power of \\(e\\) (here \\(e^{-1}\\)), then approximate to four significant figures.',
      steps: () => [
        S('Rewrite \\(\\frac{1}{e}\\) as a pure power of \\(e\\) using a negative index: \\(\\frac{1}{e}=e^{-1}\\).', 'e^{-1}'),
        S('Calculator: \\(e^{-1}\\approx 0.3679\\) to four significant figures.', 'e^{-1}\\approx 0.367879\\ldots'),
        S('The full answer is the rewritten power with its approximation: \\(e^{-1}\\approx 0.3679\\).', 'e^{-1}\\approx 0.3679'),
      ],
    },
    {
      id: 'y12a-5a-q3e',
      correct: 'e^{1/2}\\approx 1.649',
      distractors: ['e^{-1/2}\\approx 0.6065', '\\sqrt{2}\\approx 1.414', 'e^{1}\\approx 2.718'],
      hint: 'First rewrite as a power of \\(e\\) (here \\(e^{1/2}\\)), then approximate to four significant figures.',
      steps: () => [
        S('Rewrite the square root as a fractional power of \\(e\\): \\(\\sqrt{e}=e^{1/2}\\).', 'e^{1/2}'),
        S('Evaluate \\(e^{1/2}\\) (or \\(\\sqrt{e}\\)) to four significant figures: about 1.649. Do not confuse with \\(\\sqrt{2}\\approx 1.414\\).', 'e^{1/2}\\approx 1.64872\\ldots'),
        S('The full answer is \\(e^{1/2}\\approx 1.649\\).', 'e^{1/2}\\approx 1.649'),
      ],
    },
    {
      id: 'y12a-5a-q3f',
      correct: 'e^{-1/2}\\approx 0.6065',
      distractors: ['e^{-2}\\approx 0.1353', 'e^{-1}\\approx 0.3679', 'e^{1/2}\\approx 1.649'],
      hint: 'First rewrite as a power of \\(e\\) (here \\(e^{-1/2}\\)), then approximate to four significant figures.',
      steps: () => [
        S('Rewrite as a pure power of \\(e\\): \\(\\frac{1}{\\sqrt{e}}=e^{-1/2}\\).', 'e^{-1/2}'),
        S('Calculator: \\(e^{-1/2}\\approx 0.6065\\) to four significant figures.', 'e^{-1/2}\\approx 0.606530\\ldots'),
        S('The full answer is \\(e^{-1/2}\\approx 0.6065\\).', 'e^{-1/2}\\approx 0.6065'),
      ],
    },
  ];

  for (const item of q3) {
    const orig = byId[item.id];
    const qText = (orig?.question || '').replace(/\$/g, '') || `Write as a power of \\(e\\), then approximate to four significant figures.`;
    out.push(mc({
      id: item.id,
      question: qText.includes('\\(') ? qText : qText,
      correct: item.correct,
      distractors: item.distractors,
      difficulty: 'medium',
      hint: item.hint,
      steps: item.steps(),
    }));
  }

  // q10 expand
  const q10 = [
    {
      id: 'y12a-5a-q10a',
      correct: 'e^{2x}-4',
      distractors: ['e^{2x}+4', 'e^{x}-4', 'e^{2x}-2'],
      steps: [
        S(
          'The product is a difference of squares pattern: \\((A+B)(A-B)=A^{2}-B^{2}\\) with \\(A=e^{x}\\) and \\(B=2\\). Recognising the pattern avoids messy expansion errors.',
          '(e^{x}+2)(e^{x}-2)=(e^{x})^{2}-2^{2}'
        ),
        S(
          'Square each piece: \\((e^{x})^{2}=e^{2x}\\) and \\(2^{2}=4\\).',
          'e^{2x}-4'
        ),
        S(
          'The expanded simplified form is \\(e^{2x}-4\\).',
          'e^{2x}-4'
        ),
      ],
    },
    {
      id: 'y12a-5a-q10b',
      correct: 'e^{4x}+4e^{3x}+2e^{x}+8',
      distractors: ['e^{4x}+6e^{2x}+8', 'e^{3x}+8', 'e^{4x}+4e^{3x}+8'],
      steps: [
        S(
          'Expand the product by distributing each term of the first bracket across the second: FOIL (or distributive law). Keep bases of \\(e\\) so that you can later combine like powers.',
          '(e^{3x}+2)(e^{x}+4)=e^{3x}\\cdot e^{x}+e^{3x}\\cdot 4+2\\cdot e^{x}+2\\cdot 4'
        ),
        S(
          'Multiply powers: \\(e^{3x}\\cdot e^{x}=e^{4x}\\). The cross terms are \\(4e^{3x}\\) and \\(2e^{x}\\), and the constant is 8.',
          'e^{4x}+4e^{3x}+2e^{x}+8'
        ),
        S(
          'There are no further like terms to combine, so the expanded form is \\(e^{4x}+4e^{3x}+2e^{x}+8\\).',
          'e^{4x}+4e^{3x}+2e^{x}+8'
        ),
      ],
    },
    {
      id: 'y12a-5a-q10c',
      correct: '1-3e^{2x}',
      distractors: ['e^{-2x}-3', '1-3e^{-2x}', 'e^{0}-3e^{2x}-3'],
      steps: [
        S(
          'Distribute \\(e^{2x}\\) across the bracket: \\((e^{-2x}-3)e^{2x}=e^{-2x}\\cdot e^{2x}-3e^{2x}\\).',
          'e^{-2x}\\cdot e^{2x}-3e^{2x}'
        ),
        S(
          'Add exponents on the first term: \\(e^{-2x+2x}=e^{0}=1\\). The second term stays \\(-3e^{2x}\\).',
          '1-3e^{2x}'
        ),
        S(
          'The simplified expansion is \\(1-3e^{2x}\\).',
          '1-3e^{2x}'
        ),
      ],
    },
    {
      id: 'y12a-5a-q10d',
      correct: 'e^{-2x}+2+e^{2x}',
      distractors: ['e^{-2x}+e^{2x}', 'e^{0}+2', '2e^{0}+2'],
      steps: [
        S(
          'Square the binomial: \\((e^{-x}+e^{x})^{2}=e^{-2x}+2e^{-x}e^{x}+e^{2x}\\). Remember the middle cross term is twice the product.',
          'e^{-2x}+2e^{-x}e^{x}+e^{2x}'
        ),
        S(
          'The middle term simplifies: \\(e^{-x}e^{x}=e^{0}=1\\), so \\(2e^{-x}e^{x}=2\\).',
          'e^{-2x}+2+e^{2x}'
        ),
        S(
          'The expanded form is \\(e^{-2x}+2+e^{2x}\\) (sometimes written as \\(2\\cosh 2x\\) in later work, but here leave it in exponential form).',
          'e^{-2x}+2+e^{2x}'
        ),
      ],
    },
  ];

  for (const item of q10) {
    const orig = byId[item.id];
    out.push(mc({
      id: item.id,
      question: orig.question,
      correct: item.correct,
      distractors: item.distractors,
      difficulty: 'medium',
      hint: 'Expand carefully and use index laws to combine powers of \\(e\\).',
      steps: item.steps,
    }));
  }

  // q11 algebraic fractions
  const q11 = [
    {
      id: 'y12a-5a-q11a',
      correct: 'e^{2x}+e^{x}',
      distractors: ['e^{8x}+e^{7x}', 'e^{2x}+e^{4x}', '2e^{x}'],
      steps: [
        S(
          'Split the fraction into two separate terms: \\(\\dfrac{e^{5x}+e^{4x}}{e^{3x}}=\\dfrac{e^{5x}}{e^{3x}}+\\dfrac{e^{4x}}{e^{3x}}\\). Dividing powers of the same base subtracts exponents.',
          '\\dfrac{e^{5x}}{e^{3x}}+\\dfrac{e^{4x}}{e^{3x}}'
        ),
        S(
          'Simplify each term: \\(e^{5x-3x}=e^{2x}\\) and \\(e^{4x-3x}=e^{x}\\).',
          'e^{2x}+e^{x}'
        ),
        S(
          'The sum of powers is \\(e^{2x}+e^{x}\\).',
          'e^{2x}+e^{x}'
        ),
      ],
    },
    {
      id: 'y12a-5a-q11b',
      correct: 'e^{-2x}-e^{-3x}',
      distractors: ['e^{-2x}+e^{-3x}', 'e^{8x}-e^{7x}', '1-e^{-x}'],
      steps: [
        S(
          'Split the fraction: \\(\\dfrac{e^{3x}-e^{2x}}{e^{5x}}=\\dfrac{e^{3x}}{e^{5x}}-\\dfrac{e^{2x}}{e^{5x}}\\).',
          '\\dfrac{e^{3x}}{e^{5x}}-\\dfrac{e^{2x}}{e^{5x}}'
        ),
        S(
          'Subtract exponents: \\(e^{3x-5x}=e^{-2x}\\) and \\(e^{2x-5x}=e^{-3x}\\).',
          'e^{-2x}-e^{-3x}'
        ),
        S(
          'The simplified sum is \\(e^{-2x}-e^{-3x}\\).',
          'e^{-2x}-e^{-3x}'
        ),
      ],
    },
    {
      id: 'y12a-5a-q11c',
      correct: 'e^{16x}+3e^{24x}',
      distractors: ['e^{8x}+3e^{16x}', '1+3e^{8x}', 'e^{-8x}+3e^{0}'],
      steps: [
        S(
          'From the original fraction, divide each term in the numerator by the denominator power of \\(e\\), subtracting exponents term by term.',
          '\\dfrac{e^{8x}}{e^{-8x}}+\\dfrac{3e^{16x}}{e^{-8x}}'
        ),
        S(
          'Subtracting a negative exponent adds: \\(e^{8x-(-8x)}=e^{16x}\\) and \\(3e^{16x-(-8x)}=3e^{24x}\\).',
          'e^{16x}+3e^{24x}'
        ),
        S(
          'The result is \\(e^{16x}+3e^{24x}\\).',
          'e^{16x}+3e^{24x}'
        ),
      ],
    },
    {
      id: 'y12a-5a-q11d',
      correct: '2e^{-3x}+3e^{-4x}',
      distractors: ['2e^{-x}+3e^{-2x}', '2e^{x}+3e^{0}', '8e^{-3x}+12e^{-4x}'],
      steps: [
        S(
          'Factor constants if helpful, then divide each exponential term by the denominator, subtracting exponents. Also simplify numerical coefficients.',
          '\\dfrac{8e^{-x}}{4e^{2x}}+\\dfrac{12e^{-2x}}{4e^{2x}}'
        ),
        S(
          'Coefficients: \\(\\frac{8}{4}=2\\) and \\(\\frac{12}{4}=3\\). Exponents: \\(-x-2x=-3x\\) and \\(-2x-2x=-4x\\).',
          '2e^{-3x}+3e^{-4x}'
        ),
        S(
          'The simplified expression is \\(2e^{-3x}+3e^{-4x}\\).',
          '2e^{-3x}+3e^{-4x}'
        ),
      ],
    },
  ];

  for (const item of q11) {
    const orig = byId[item.id];
    out.push(mc({
      id: item.id,
      question: orig.question,
      correct: item.correct,
      distractors: item.distractors,
      difficulty: 'medium',
      hint: 'Split the fraction and subtract exponents term by term.',
      steps: item.steps,
    }));
  }

  // q14 angles — gradient of e^x is e^x, angle = arctan(m)
  const q14 = [
    {
      id: 'y12a-5a-q14a',
      x: 0,
      correct: '45^{\\circ}',
      distractors: ['0^{\\circ}', '30^{\\circ}', '60^{\\circ}'],
      m: '1',
      angleWork: '\\tan^{-1}(1)=45^{\\circ}',
    },
    {
      id: 'y12a-5a-q14b',
      x: 1,
      correct: '69^{\\circ}47\'',
      distractors: ['45^{\\circ}', '63^{\\circ}26\'', '75^{\\circ}'],
      m: 'e',
      angleWork: '\\tan^{-1}(e)\\approx 69^{\\circ}47\'',
    },
    {
      id: 'y12a-5a-q14c',
      x: -1,
      correct: '20^{\\circ}11\'',
      distractors: ['45^{\\circ}', '30^{\\circ}', '15^{\\circ}'],
      m: 'e^{-1}',
      angleWork: '\\tan^{-1}(e^{-1})\\approx 20^{\\circ}11\'',
    },
    {
      id: 'y12a-5a-q14d',
      x: 2,
      correct: '82^{\\circ}17\'',
      distractors: ['63^{\\circ}26\'', '75^{\\circ}', '90^{\\circ}'],
      m: 'e^{2}',
      angleWork: '\\tan^{-1}(e^{2})\\approx 82^{\\circ}17\'',
    },
  ];

  for (const item of q14) {
    const orig = byId[item.id];
    out.push(mc({
      id: item.id,
      question: orig.question,
      correct: item.correct,
      distractors: item.distractors,
      difficulty: 'medium',
      hint: 'Gradient is \\(e^{x}\\) at the point; inclination satisfies \\(\\tan\\theta=m\\).',
      steps: [
        S(
          'For \\(y=e^{x}\\), the derivative is \\(y\'=e^{x}\\). The gradient of the tangent at a given \\(x\\) is therefore the value of \\(e^{x}\\) there. The angle of inclination \\(\\theta\\) of a line with gradient \\(m\\) satisfies \\(\\tan\\theta=m\\) with \\(0^{\\circ}\\le\\theta<90^{\\circ}\\) for positive gradients.',
          `m=y'(${item.x})=e^{${item.x}}=${item.m}`
        ),
        S(
          `Compute \\(\\theta=\\tan^{-1}(m)\\) with \\(m=${item.m}\\). Use a calculator in degree mode and convert the decimal degree part to minutes if required.`,
          item.angleWork
        ),
        S(
          `The inclination of the tangent at \\(x=${item.x}\\) is ${item.correct.replace(/\\\\/g, '\\')}, matching the correct option.`,
          item.correct
        ),
      ],
    }));
  }

  // Merge: built q1-q2 + out q3/10/11/14
  const allMc = [...MC, ...out];
  const mcIds = new Set(allMc.map((q) => q.id));

  // Final array: replace short_answer with MC, keep teacher_review
  const final = originals.map((q) => {
    if (mcIds.has(q.id)) {
      return allMc.find((m) => m.id === q.id);
    }
    // keep teacher_review with topic field
    return {
      ...q,
      topic: '5A',
      // ensure no $ in fields if any
      question: String(q.question || '').replace(/\$/g, (m, i, s) => {
        // leave alone if already \( 
        return m;
      }),
    };
  });

  // sanitize teacher_review: replace $...$ with \(...\) lightly
  for (const q of final) {
    if (q.type === 'teacher_review') {
      q.topic = '5A';
      if (typeof q.a === 'string' && !q.answer) {
        // keep a as answer text for teacher review; also set answer for schema
        q.answer = q.a;
      }
    }
    // ensure integer a for MC
    if (q.type === 'multiple_choice') {
      q.a = Number(q.a);
      if (!Number.isInteger(q.a) || q.a < 0 || q.a > 3) {
        throw new Error(`bad a for ${q.id}: ${q.a}`);
      }
      if (q.opts[q.a] == null) throw new Error(`opts[a] missing ${q.id}`);
    }
  }

  return final;
}

async function main() {
  const originals = await loadOriginal();
  const final = buildAll(originals);

  const mcCount = final.filter((q) => q.type === 'multiple_choice').length;
  const trCount = final.filter((q) => q.type === 'teacher_review').length;
  console.log({ total: final.length, mc: mcCount, teacher_review: trCount });

  // self-check each MC
  for (const q of final) {
    if (q.type !== 'multiple_choice') continue;
    if (!Array.isArray(q.opts) || q.opts.length !== 4) throw new Error(`${q.id} opts`);
    if (new Set(q.opts).size !== 4) throw new Error(`${q.id} dup opts ${JSON.stringify(q.opts)}`);
    // latex paren balance
    const blob = [q.question, ...q.opts, ...(q.solutionSteps || []).flatMap((s) => [s.explanation, s.workingOut])].join('\n');
    const open = (blob.match(/\\\(/g) || []).length;
    const close = (blob.match(/\\\)/g) || []).length;
    if (open !== close) throw new Error(`${q.id} LaTeX paren mismatch ${open} vs ${close}`);
    if (/\x0c|\\\frac|\\\text|\\\sqrt/.test(blob)) {
      // check form feed and triple-backslash patterns in raw - careful with how we test
    }
    // form feed
    if (blob.includes('\f')) throw new Error(`${q.id} form feed`);
    if (q.solutionSteps.length < 3) throw new Error(`${q.id} need >=3 steps`);
  }
  console.log('self-check OK');

  if (WRITE) {
    const file = path.join(root, 'src/constants/seedYear12Ch5Questions.js');
    writeFileSync(file, `export const Y12A_CH5A_QUESTIONS = ${JSON.stringify(final, null, 2)};\n`);
    console.log('wrote', file);
  }

  if (PUSH) {
    if (!WRITE) {
      console.error('Need --write with --push');
      process.exit(1);
    }
    await push(final);
  }
}

async function push(final) {
  const sa = JSON.parse(
    readFileSync(
      process.env.GOOGLE_APPLICATION_CREDENTIALS ||
        '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
      'utf8'
    )
  );
  if (!getApps().length) initializeApp({ credential: cert(sa) });
  const db = getFirestore();

  // safety: never delete; merge upsert only. Warn if DB has extra ids.
  const existing = await db.collection('questions').where('topicId', '==', 'y12a-5A').get();
  const seedIds = new Set(final.map((q) => q.id));
  const extras = existing.docs.filter((d) => !seedIds.has(d.id)).map((d) => d.id);
  console.log('existing y12a-5A docs', existing.size, 'seed', final.length);
  if (extras.length) {
    console.log('WARN: Firestore has extra topic docs not in seed (left untouched):', extras.join(', '));
  }

  let ok = 0;
  let skip = 0;
  let batch = db.batch();
  let n = 0;
  const flush = async () => {
    if (n === 0) return;
    await batch.commit();
    batch = db.batch();
    n = 0;
  };

  for (const raw of final) {
    const ref = db.collection('questions').doc(raw.id);
    const snap = await ref.get();
    if (snap.exists && snap.data()?.origin === 'teacher') {
      skip++;
      continue;
    }
    const isMC = raw.type === 'multiple_choice';
    const payload = {
      chapterId: 'y12a-5',
      chapterTitle: 'Chapter 5: The exponential and logarithmic functions',
      topicId: 'y12a-5A',
      topicCode: '5A',
      topicTitle: 'Review of exponential functions base e',
      year: 'Year 12',
      isManual: true,
      origin: 'seed',
      title: String(raw.question || '').replace(/\\[\(\)\[\]]/g, '').slice(0, 40) + '...',
      question: raw.question,
      difficulty: raw.difficulty || 'medium',
      timeLimit: raw.timeLimit || 90,
      type: raw.type,
      requiresManualGrading: raw.type === 'teacher_review',
      options: isMC
        ? raw.opts.map((t) => ({ text: t, imageUrl: '' }))
        : [],
      answer: isMC ? String(raw.a) : String(raw.answer ?? raw.a ?? ''),
      hint: raw.hint || '',
      solution: raw.solution || '',
      solutionSteps: raw.solutionSteps || [],
      graphData: raw.graphData ?? null,
      isNew: isMC ? true : (raw.isNew === true),
      updatedAt: FieldValue.serverTimestamp(),
    };
    if (!snap.exists) payload.createdAt = FieldValue.serverTimestamp();
    batch.set(ref, payload, { merge: true });
    n++;
    ok++;
    if (n >= 400) await flush();
  }
  await flush();

  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    { version: ver, membershipVersion: ver, updatedAt: FieldValue.serverTimestamp() },
    { merge: true }
  );
  console.log({ ok, skip, version: ver });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
