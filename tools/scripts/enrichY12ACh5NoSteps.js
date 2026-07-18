/**
 * Generate solutionSteps for Y12 Adv Ch5 questions that have none.
 * Also repairs common LaTeX typos (bare `int` → `\int`).
 *
 *   node tools/scripts/enrichY12ACh5NoSteps.js
 *   node tools/scripts/enrichY12ACh5NoSteps.js --write
 *   node tools/scripts/enrichY12ACh5NoSteps.js --write --push
 */
import { writeFileSync, readFileSync } from 'fs';
import { pathToFileURL, fileURLToPath } from 'url';
import path from 'path';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const loadSeed = async (rel) => import(pathToFileURL(path.join(root, rel)).href);

const WRITE = process.argv.includes('--write');
const PUSH = process.argv.includes('--push');

const S = (explanation, workingOut) => {
  let w = workingOut;
  if (typeof w === 'string' && w.trim() && !/\\\(|\\\[|\$/.test(w)) {
    w = `\\(${w}\\)`;
  }
  return { explanation, workingOut: w };
};

const fixLatex = (text) => {
  if (!text || typeof text !== 'string') return text;
  return text
    // bare "int" as the integral symbol (not the word "integral"): int_ / int^ / int e
    .replace(/\\int/g, '\u0000INT\u0000')
    .replace(/(^|[^\\a-zA-Z])int(?=[_^]|\s+e\^|\s*\\?[,])/g, '$1\\int')
    .replace(/(^|[^\\a-zA-Z])int(?=\s*e\^)/g, '$1\\int')
    .replace(/\u0000INT\u0000/g, '\\int')
    .replace(/\\intt/g, '\\int')
    .replace(/\\integral/g, 'integral');
};

const ansTex = (a) => {
  const s = String(a ?? '').trim();
  if (!s) return '';
  if (/\\\(|\\\[|\$/.test(s)) return s;
  // already has latex commands
  if (/\\frac|\\log|\\ln|e\^|\\text/.test(s)) return `\\(${s}\\)`;
  return `\\(${s}\\)`;
};

/** Extract first definite integral limits and integrand from text if possible. */
function parseIntegral(q) {
  const t = String(q);
  // \int_a^b f  or \int_{a}^{b} f
  let m = t.match(/\\int_\{([^}]+)\}\^\{([^}]+)\}\s*([^\\n$]+?)(?:\\,?\s*dx|dx|$)/);
  if (m) return { lo: m[1].trim(), hi: m[2].trim(), f: m[3].trim().replace(/\\,?\s*$/, '') };
  m = t.match(/\\int_([^\s^]+)\^([^\s{]+)\s*([^\\n$]+?)(?:\\,?\s*dx|dx|$)/);
  if (m) return { lo: m[1].trim(), hi: m[2].trim(), f: m[3].trim().replace(/\\,?\s*$/, '') };
  m = t.match(/\\int\s+([^\\n$]+?)(?:\\,?\s*dx|dx)/);
  if (m) return { lo: null, hi: null, f: m[1].trim() };
  return null;
}

function parseLogDiff(q) {
  // y = \log_e(ax+b) or \ln(...)
  const m = String(q).match(/y\s*=\s*\\(?:log_e|ln)\s*\{?\(?([^)}]+)\)?\}?/);
  if (m) return m[1].trim();
  const m2 = String(q).match(/\\(?:log_e|ln)\s*\(([^)]+)\)/);
  if (m2) return m2[1].trim();
  const m3 = String(q).match(/\\(?:log_e|ln)\s*\{([^}]+)\}/);
  if (m3) return m3[1].trim();
  return null;
}

function stepsFor5E(q) {
  const text = q.question || '';
  const a = String(q.a ?? '');
  if (/count(ing)? squares|Approximation by counting/i.test(text) || /counting squares/i.test(a)) {
    return [
      S(
        'The graph is drawn on a square grid. Use the given scale (10 divisions = 1 unit, so 100 little squares = 1 square unit) to estimate area by counting squares under the curve on the stated interval.',
        '\\text{count squares under the curve}'
      ),
      S(
        'Convert the square count to area units using the scale, then compare with the exact integral from the previous part if required.',
        ansTex(a.includes('Approximation') ? '\\text{area}\\approx\\dfrac{\\text{\\# squares}}{100}' : a)
      ),
    ];
  }
  if (/total area under the curve to the left|estimate the total area/i.test(text)) {
    return [
      S(
        'Continue counting squares further left of the previous bound, using the same scale conversion.',
        '\\text{extend the square count}'
      ),
      S(
        'The total estimated area under \\(y=e^x\\) to the left approaches the exact value of the improper integral (here the answer key records the square-count estimate).',
        ansTex(a)
      ),
    ];
  }

  const integ = parseIntegral(fixLatex(text));
  // Area between y=e^{kx} and x-axis
  if (/area between|area of the region|bounded by/i.test(text)) {
    const fMatch = text.match(/y\s*=\s*([^,\n\\]+(?:\\frac\{[^}]+\}[^,\n]*)?)/);
    const f = fMatch ? fMatch[1].trim() : (integ?.f || 'e^{kx}');
    return [
      S(
        'Area between a positive curve and the \\(x\\)-axis on \\([a,b]\\) is the definite integral of the function.',
        `A=\\displaystyle\\int_a^b (${f})\\,dx`
      ),
      S(
        'Find an antiderivative of the integrand (for \\(e^{kx}\\) use \\(\\frac{1}{k}e^{kx}\\) when \\(k\\neq 0\\); for \\(e^x\\) the antiderivative is \\(e^x\\)).',
        '\\text{antiderivative }F(x)'
      ),
      S(
        'Evaluate \\(F(b)-F(a)\\) and simplify. If a decimal approximation is required, use a calculator.',
        ansTex(a)
      ),
    ];
  }

  // Standard definite integral of e^x
  if (/standard form|\\int.*e\^x|int e\^x/i.test(text) || integ) {
    const lo = integ?.lo ?? 'a';
    const hi = integ?.hi ?? 'b';
    return [
      S(
        'Use the standard antiderivative \\(\\displaystyle\\int e^x\\,dx = e^x + C\\) (or the chain-rule form for \\(e^{kx}\\)).',
        '\\int e^{kx}\\,dx = \\dfrac{1}{k}e^{kx}+C\\ (k\\neq 0)'
      ),
      S(
        `Evaluate the definite integral from \\(${lo}\\) to \\(${hi}\\) by substituting the limits into the antiderivative.`,
        `[F(x)]_{${lo}}^{${hi}} = F(${hi})-F(${lo})`
      ),
      S(
        'Simplify exactly, then approximate to the required accuracy if asked.',
        ansTex(a)
      ),
    ];
  }

  return [
    S('Set up the required definite integral for the stated region or quantity.', '\\text{set up }\\int'),
    S('Find an antiderivative and evaluate at the endpoints.', '\\text{evaluate }F(b)-F(a)'),
    S('Simplify to the final answer.', ansTex(a)),
  ];
}

function stepsFor5F(q) {
  const text = q.question || '';
  const a = String(q.a ?? '');
  // calculator ln
  if (/calculator|ln button|four significant|significant figures/i.test(text)) {
    const expr = (text.match(/\\(?:log_e|ln)\s*\{?([^}\n]+)\}?/) || text.match(/(log_e|ln)\s+([0-9.]+)/) || [])[0]
      || 'expression';
    return [
      S(
        'Enter the natural logarithm of the given number on a calculator (\\(\\ln\\) or \\(\\log_e\\)).',
        `\\text{evaluate }${typeof expr === 'string' ? expr.replace(/\\\\/g, '\\') : '\\ln(\\ldots)'}`
      ),
      S(
        'Round the display to four significant figures as required.',
        ansTex(a)
      ),
    ];
  }
  if (/change of base|log_a|convert/i.test(text)) {
    return [
      S('Use a logarithm law or the change-of-base formula as required by the question.', '\\log_a b=\\dfrac{\\ln b}{\\ln a}'),
      S('Simplify and state the exact or approximate value.', ansTex(a)),
    ];
  }
  if (/solve|equation/i.test(text)) {
    return [
      S('Isolate the logarithmic or exponential term.', '\\text{rearrange}'),
      S('Exponentiate or take logarithms of both sides to solve for the unknown.', '\\text{apply }e^{(\\cdot)}\\text{ or }\\ln'),
      S('Simplify to the final solution.', ansTex(a)),
    ];
  }
  return [
    S('Apply the relevant logarithm law or definition.', '\\text{log law / definition}'),
    S('Simplify to the required form.', ansTex(a)),
  ];
}

function stepsFor5G(q) {
  const text = q.question || '';
  const a = String(q.a ?? '');
  const inner = parseLogDiff(text);
  if (inner || /standard form.*log_e|differentiate/i.test(text)) {
    const arg = inner || 'ax+b';
    // try parse a from ax+b
    let aCoef = 'a';
    const am = arg.match(/^(-?\d+)x/);
    if (am) aCoef = am[1];
    else if (/^x/.test(arg)) aCoef = '1';
    else if (/^-x/.test(arg)) aCoef = '-1';
    return [
      S(
        `Identify the linear argument of the logarithm: \\(${arg}\\). Use \\(\\dfrac{d}{dx}\\log_e(ax+b)=\\dfrac{a}{ax+b}\\).`,
        `\\dfrac{d}{dx}\\log_e(${arg})`
      ),
      S(
        `Differentiate: the numerator is the derivative of the inside (here coefficient of \\(x\\) is \\(${aCoef}\\)).`,
        ansTex(a)
      ),
    ];
  }
  if (/product rule|quotient rule|chain rule/i.test(text)) {
    return [
      S('Choose the appropriate rule (product, quotient or chain) for the given function.', '\\text{select rule}'),
      S('Differentiate each factor and combine.', '\\text{expand / simplify}'),
      S('Write the simplified derivative.', ansTex(a)),
    ];
  }
  return [
    S('Differentiate using the standard form for \\(\\log_e\\) of a linear function, or the chain rule for a composite.', '\\dfrac{f\'}{f}'),
    S('Simplify the derivative to match the required form.', ansTex(a)),
  ];
}

function stepsFor5H(q) {
  const text = q.question || '';
  const a = String(q.a ?? '');
  const parts = [];
  if (/gradient of the tangent|Find the gradient/i.test(text)) {
    parts.push(S(
      'Differentiate the given curve to obtain \\(\\dfrac{dy}{dx}\\), then substitute the given \\(x\\)-coordinate to find the tangent gradient.',
      'm_{\\text{tan}}=y\'(x_0)'
    ));
  }
  if (/equation of the tangent/i.test(text)) {
    parts.push(S(
      'Use point–gradient form \\(y-y_0=m(x-x_0)\\) with the gradient from (a) and the given point on the curve.',
      'y-y_0=m(x-x_0)'
    ));
  }
  if (/normal/i.test(text)) {
    parts.push(S(
      'The normal gradient is the negative reciprocal of the tangent gradient. Form the normal equation similarly.',
      'm_{\\text{norm}}=-1/m_{\\text{tan}}'
    ));
  }
  if (/passes through|prove that/i.test(text)) {
    parts.push(S(
      'Substitute the claimed point into the line equation (or rearrange) to verify it lies on the line.',
      '\\text{verify point on line}'
    ));
  }
  if (/area of the triangle/i.test(text)) {
    parts.push(S(
      'Find the intercepts of the tangent and normal with the axes, then compute the triangular area \\(\\frac12\\times\\text{base}\\times\\text{height}\\).',
      'A=\\dfrac12 bh'
    ));
  }
  parts.push(S('State the final required result(s).', ansTex(a)));
  return parts.length >= 2 ? parts : [
    S('Differentiate and evaluate gradients as required by each part.', 'y\'(x)'),
    S('Form tangent/normal equations and complete the geometric result.', ansTex(a)),
  ];
}

function stepsFor5I(q) {
  const text = q.question || '';
  const a = String(q.a ?? '');
  const integ = parseIntegral(fixLatex(text));
  // 1/x style
  if (/1\/x|\\frac\{1\}\{x\}|dx\/x|\\dfrac\{dx\}\{x\}|\\frac\{dx\}/i.test(text) || /\\int.*dx\/|\\int.*\\frac\{1\}/i.test(text)) {
    return [
      S(
        'Recall \\(\\displaystyle\\int \\dfrac{1}{x}\\,dx = \\log_e|x|+C\\) and more generally \\(\\displaystyle\\int \\dfrac{f\'(x)}{f(x)}\\,dx = \\log_e|f(x)|+C\\).',
        '\\int\\dfrac{1}{ax+b}\\,dx=\\dfrac{1}{a}\\log_e|ax+b|+C'
      ),
      S(
        'Evaluate the definite integral at the given limits (exact form first).',
        integ ? `[F(x)]_{${integ.lo}}^{${integ.hi}}` : '[F(x)]_a^b'
      ),
      S(
        /significant|approximate|calculator|decimal|four/i.test(text)
          ? 'If required, convert the exact value to a decimal approximation with the stated accuracy.'
          : 'Simplify the exact value using log laws where possible.',
        ansTex(a)
      ),
    ];
  }
  return [
    S('Identify the integrand as a reciprocal (log-giving) form and write the antiderivative.', '\\log_e|f(x)|'),
    S('Evaluate between the limits and simplify.', ansTex(a)),
  ];
}

function generateSteps(q, topic) {
  switch (topic) {
    case '5E': return stepsFor5E(q);
    case '5F': return stepsFor5F(q);
    case '5G': return stepsFor5G(q);
    case '5H': return stepsFor5H(q);
    case '5I': return stepsFor5I(q);
    default:
      return [
        S('Work through the required calculation systematically.', '\\text{working}'),
        S('State the final answer.', ansTex(q.a)),
      ];
  }
}

function buildSolution(steps) {
  return steps.map((s) => s.workingOut).join(' ; ');
}

const FILE_MAP = [
  ['src/constants/seedYear12Ch5EQuestions.js', 'Y12A_CH5E_QUESTIONS', '5E'],
  ['src/constants/seedYear12Ch5FQuestions.js', 'Y12A_CH5F_QUESTIONS', '5F'],
  ['src/constants/seedYear12Ch5GQuestions.js', 'Y12A_CH5G_QUESTIONS', '5G'],
  ['src/constants/seedYear12Ch5HQuestions.js', 'Y12A_CH5H_QUESTIONS', '5H'],
  ['src/constants/seedYear12Ch5IQuestions.js', 'Y12A_CH5I_QUESTIONS', '5I'],
];

async function main() {
  let generated = 0;
  let latexFixed = 0;
  const allForPush = [];

  for (const [file, exportName, topic] of FILE_MAP) {
    const mod = await loadSeed(file);
    const arr = mod[exportName];
    for (const q of arr) {
      const beforeQ = q.question;
      q.question = fixLatex(q.question);
      q.hint = fixLatex(q.hint || '');
      if (typeof q.a === 'string') q.a = fixLatex(q.a);
      if (q.solution) q.solution = fixLatex(q.solution);
      if (beforeQ !== q.question) latexFixed++;

      if (!(q.solutionSteps && q.solutionSteps.length)) {
        q.solutionSteps = generateSteps(q, topic);
        q.solution = buildSolution(q.solutionSteps);
        if (!q.hint) {
          if (topic === '5G') q.hint = 'Use $\\dfrac{d}{dx}\\log_e(ax+b)=\\dfrac{a}{ax+b}$.';
          else if (topic === '5I') q.hint = 'Antiderivative involves $\\log_e|\\ldots|$.';
          else if (topic === '5E') q.hint = 'Area under $y=e^{kx}$ is a definite integral; use $\\int e^{kx}\\,dx=\\frac1k e^{kx}$.';
          else if (topic === '5F') q.hint = 'Use the $\\ln$ key and round to the required accuracy.';
        }
        generated++;
      } else {
        for (const s of q.solutionSteps) {
          s.explanation = fixLatex(s.explanation);
          s.workingOut = fixLatex(s.workingOut);
        }
      }
      allForPush.push({ ...q, _topic: topic, _file: file });
    }

    if (WRITE) {
      writeFileSync(path.join(root, file), `export const ${exportName} = ${JSON.stringify(arr, null, 2)};\n`);
      console.log('wrote', file, 'n=', arr.length);
    } else {
      console.log('[dry-run]', file, 'would generate for', arr.filter((q) => !(q.solutionSteps && q.solutionSteps.length)).length, 'empty + polish rest');
    }
  }

  console.log({ generated, latexFixed, write: WRITE, push: PUSH });

  if (PUSH) {
    if (!WRITE) {
      console.error('Refuse --push without --write (push uses on-disk seeds).');
      process.exit(1);
    }
    await pushCh5ToFirestore();
  }
}

async function pushCh5ToFirestore() {
  const sa = JSON.parse(
    readFileSync(
      process.env.GOOGLE_APPLICATION_CREDENTIALS ||
        '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
      'utf8'
    )
  );
  if (!getApps().length) initializeApp({ credential: cert(sa) });
  const db = getFirestore();

  const topicMeta = {
    '5A': { chapterId: 'y12a-5', chapterTitle: 'Chapter 5: The exponential and logarithmic functions', topicId: 'y12a-5A', topicCode: '5A', topicTitle: 'Review of exponential functions base e' },
    '5B': { chapterId: 'y12a-5', chapterTitle: 'Chapter 5: The exponential and logarithmic functions', topicId: 'y12a-5B', topicCode: '5B', topicTitle: 'Differentiation of exponential functions' },
    '5C': { chapterId: 'y12a-5', chapterTitle: 'Chapter 5: The exponential and logarithmic functions', topicId: 'y12a-5C', topicCode: '5C', topicTitle: 'Applications of differentiation' },
    '5D': { chapterId: 'y12a-5', chapterTitle: 'Chapter 5: The exponential and logarithmic functions', topicId: 'y12a-5D', topicCode: '5D', topicTitle: 'Integration of exponential functions' },
    '5E': { chapterId: 'y12a-5', chapterTitle: 'Chapter 5: The exponential and logarithmic functions', topicId: 'y12a-5E', topicCode: '5E', topicTitle: 'Applications of integration' },
    '5F': { chapterId: 'y12a-5', chapterTitle: 'Chapter 5: The exponential and logarithmic functions', topicId: 'y12a-5F', topicCode: '5F', topicTitle: 'Review of logarithmic functions' },
    '5G': { chapterId: 'y12a-5', chapterTitle: 'Chapter 5: The exponential and logarithmic functions', topicId: 'y12a-5G', topicCode: '5G', topicTitle: 'Differentiation of logarithmic functions' },
    '5H': { chapterId: 'y12a-5', chapterTitle: 'Chapter 5: The exponential and logarithmic functions', topicId: 'y12a-5H', topicCode: '5H', topicTitle: 'Applications of differentiation' },
    '5I': { chapterId: 'y12a-5', chapterTitle: 'Chapter 5: The exponential and logarithmic functions', topicId: 'y12a-5I', topicCode: '5I', topicTitle: 'Integration giving logarithms' },
    '5J': { chapterId: 'y12a-5', chapterTitle: 'Chapter 5: The exponential and logarithmic functions', topicId: 'y12a-5J', topicCode: '5J', topicTitle: 'Areas and the logarithmic function' },
    '5K': { chapterId: 'y12a-5', chapterTitle: 'Chapter 5: The exponential and logarithmic functions', topicId: 'y12a-5K', topicCode: '5K', topicTitle: 'Calculus with other bases' },
    '5L': { chapterId: 'y12a-5', chapterTitle: 'Chapter 5: The exponential and logarithmic functions', topicId: 'y12a-5L', topicCode: '5L', topicTitle: 'Chapter 5 Revision' },
  };

  // Load ALL ch5 seeds for full push
  const allFiles = [
    ['src/constants/seedYear12Ch5Questions.js', 'Y12A_CH5A_QUESTIONS', '5A'],
    ['src/constants/seedYear12Ch5BQuestions.js', 'Y12A_CH5B_QUESTIONS', '5B'],
    ['src/constants/seedYear12Ch5CQuestions.js', 'Y12A_CH5C_QUESTIONS', '5C'],
    ['src/constants/seedYear12Ch5DQuestions.js', 'Y12A_CH5D_QUESTIONS', '5D'],
    ['src/constants/seedYear12Ch5EQuestions.js', 'Y12A_CH5E_QUESTIONS', '5E'],
    ['src/constants/seedYear12Ch5FQuestions.js', 'Y12A_CH5F_QUESTIONS', '5F'],
    ['src/constants/seedYear12Ch5GQuestions.js', 'Y12A_CH5G_QUESTIONS', '5G'],
    ['src/constants/seedYear12Ch5HQuestions.js', 'Y12A_CH5H_QUESTIONS', '5H'],
    ['src/constants/seedYear12Ch5IQuestions.js', 'Y12A_CH5I_QUESTIONS', '5I'],
    ['src/constants/seedYear12Ch5JQuestions.js', 'Y12A_CH5J_QUESTIONS', '5J'],
    ['src/constants/seedYear12Ch5KQuestions.js', 'Y12A_CH5K_QUESTIONS', '5K'],
    ['src/constants/seedYear12Ch5LQuestions.js', 'Y12A_CH5L_QUESTIONS', '5L'],
  ];

  let ok = 0;
  let skip = 0;
  const batchSize = 400;
  let batch = db.batch();
  let inBatch = 0;

  const flush = async () => {
    if (inBatch === 0) return;
    await batch.commit();
    batch = db.batch();
    inBatch = 0;
  };

  for (const [file, exportName, code] of allFiles) {
    const mod = await loadSeed(file);
    const arr = mod[exportName];
    const meta = topicMeta[code];
    console.log('pushing', code, arr.length);
    for (const raw of arr) {
      const ref = db.collection('questions').doc(raw.id);
      const snap = await ref.get();
      if (snap.exists && snap.data()?.origin === 'teacher') {
        skip++;
        continue;
      }
      const isMC = raw.type === 'multiple_choice';
      let options = [];
      let answer = raw.a ?? raw.answer ?? '';
      if (isMC) {
        const rawOpts = raw.opts || raw.options || [];
        options = rawOpts.map((opt) =>
          typeof opt === 'object' && opt !== null
            ? { text: String(opt.text || ''), imageUrl: opt.imageUrl || '' }
            : { text: String(opt), imageUrl: '' }
        );
        // Prefer storing authored answer as-is if already index; else leave text for resolveCorrectOptionText
        answer = String(answer);
      }
      const payload = {
        ...meta,
        year: 'Year 12',
        isManual: true,
        origin: 'seed',
        title: String(raw.question || '').replace(/\$/g, '').slice(0, 40) + '...',
        question: raw.question || raw.q || '',
        difficulty: raw.difficulty || 'medium',
        timeLimit: raw.timeLimit || 120,
        type: raw.type || 'short_answer',
        requiresManualGrading: raw.type === 'teacher_review' || raw.requiresManualGrading === true,
        options,
        answer: String(answer ?? ''),
        hint: raw.hint || raw.h || '',
        solution: raw.solution || raw.s || '',
        solutionSteps: Array.isArray(raw.solutionSteps) ? raw.solutionSteps : [],
        graphData: raw.graphData || null,
        isNew: true,
        updatedAt: FieldValue.serverTimestamp(),
      };
      if (!snap.exists) payload.createdAt = FieldValue.serverTimestamp();
      batch.set(ref, payload, { merge: true });
      inBatch++;
      ok++;
      if (inBatch >= batchSize) await flush();
    }
  }
  await flush();

  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    { version: ver, membershipVersion: ver, updatedAt: FieldValue.serverTimestamp() },
    { merge: true }
  );
  // Rebuild is required for indexes after mass write — stamp note; admin rebuild script may be separate
  console.log({ ok, skip, version: ver });
  console.log('NOTE: run rebuildQuestionIndexes for y12a-5 topics if question bank counts look stale.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
