/**
 * Fix y12a-8a-q12 silo/troughs:
 *  - deactivate empty parent
 *  - rewrite all children as MC with real AP steps
 *  - attach clean SVG diagram (silo + T1,T2,T3 with 8 m / 4 m)
 *
 *   node tools/scripts/fixY12A8A_q12.cjs
 */
'use strict';

const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const sa = JSON.parse(
  readFileSync(
    '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
    'utf8'
  )
);
if (!getApps().length) initializeApp({ credential: cert(sa) });
const db = getFirestore();

const SEED = path.join(process.cwd(), 'src/constants/seedYear12Ch8Questions.js');

const META = {
  topicId: 'y12a-8A',
  chapterId: 'y12a-8',
  c: '8A',
  t: 'Applications of APs and GPs',
  year: 'Year 12',
  origin: 'seed',
  isNew: true,
  isActive: true,
  isManual: true,
  requiresManualGrading: false,
  graphData: null,
  subQuestions: [],
  blanks: [],
  examPaper: '',
};

/** Clean silo + troughs diagram matching textbook layout */
function buildSiloSvg() {
  // Coordinates (viewBox 0 0 520 220)
  // Silo base at x=70; ground y=150
  // T1 at x=210 (8m gap), T2 at x=310 (4m), T3 at x=410 (4m)
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220" width="520" height="220" role="img" aria-label="Silo and feed troughs diagram">
  <rect width="520" height="220" fill="#ffffff"/>
  <!-- ground line -->
  <line x1="40" y1="150" x2="480" y2="150" stroke="#1e293b" stroke-width="2"/>
  <!-- SILO -->
  <rect x="50" y="55" width="44" height="95" fill="#f1f5f9" stroke="#0f172a" stroke-width="2"/>
  <text x="72" y="48" text-anchor="middle" font-family="Georgia, serif" font-size="14" font-weight="700" fill="#0f172a">SILO</text>
  <!-- trough helper: V shape -->
  <!-- T1 -->
  <path d="M198 150 L210 128 L222 150" fill="none" stroke="#0f172a" stroke-width="2" stroke-linejoin="round"/>
  <text x="210" y="172" text-anchor="middle" font-family="Georgia, serif" font-size="13" font-weight="700" fill="#0f172a">T1</text>
  <!-- T2 -->
  <path d="M298 150 L310 128 L322 150" fill="none" stroke="#0f172a" stroke-width="2" stroke-linejoin="round"/>
  <text x="310" y="172" text-anchor="middle" font-family="Georgia, serif" font-size="13" font-weight="700" fill="#0f172a">T2</text>
  <!-- T3 -->
  <path d="M398 150 L410 128 L422 150" fill="none" stroke="#0f172a" stroke-width="2" stroke-linejoin="round"/>
  <text x="410" y="172" text-anchor="middle" font-family="Georgia, serif" font-size="13" font-weight="700" fill="#0f172a">T3</text>
  <!-- dimension: silo right edge (94) to T1 (210) = 8 m -->
  <line x1="94" y1="188" x2="210" y2="188" stroke="#334155" stroke-width="1.2"/>
  <line x1="94" y1="182" x2="94" y2="194" stroke="#334155" stroke-width="1.2"/>
  <line x1="210" y1="182" x2="210" y2="194" stroke="#334155" stroke-width="1.2"/>
  <text x="152" y="206" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" fill="#0f172a">8 m</text>
  <!-- dimension: T1 to T2 = 4 m -->
  <line x1="210" y1="188" x2="310" y2="188" stroke="#334155" stroke-width="1.2"/>
  <line x1="310" y1="182" x2="310" y2="194" stroke="#334155" stroke-width="1.2"/>
  <text x="260" y="206" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" fill="#0f172a">4 m</text>
  <!-- dimension: T2 to T3 = 4 m -->
  <line x1="310" y1="188" x2="410" y2="188" stroke="#334155" stroke-width="1.2"/>
  <line x1="410" y1="182" x2="410" y2="194" stroke="#334155" stroke-width="1.2"/>
  <text x="360" y="206" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" fill="#0f172a">4 m</text>
</svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

const DIAGRAM = buildSiloSvg();

function S(explanation, workingOut) {
  return { explanation, workingOut, graphData: null };
}

function checkLatex(id, text) {
  const s = String(text ?? '');
  if (s.includes('\x0c')) throw new Error(`${id}: formfeed`);
  if (/\\\\\\[a-zA-Z]/.test(s)) throw new Error(`${id}: triple bs`);
  const open = (s.match(/\\\(/g) || []).length;
  const close = (s.match(/\\\)/g) || []).length;
  if (open !== close) throw new Error(`${id}: unbalanced ${open}/${close}: ${s.slice(0, 120)}`);
}

function mc(id, question, opts, a, steps, extra = {}) {
  if (opts.length !== 4) throw new Error(`${id}: 4 opts`);
  if (!(Number.isInteger(a) && a >= 0 && a <= 3)) throw new Error(`${id}: a`);
  if (new Set(opts).size !== 4) throw new Error(`${id}: dupe`);
  checkLatex(id + '.q', question);
  opts.forEach((o, i) => checkLatex(id + '.o' + i, o));
  steps.forEach((st, i) => {
    checkLatex(id + '.e' + i, st.explanation);
    checkLatex(id + '.w' + i, st.workingOut);
  });
  if (steps.length < 3) throw new Error(`${id}: thin`);
  const correct = opts[a];
  return {
    id,
    ...META,
    type: 'multiple_choice',
    difficulty: extra.difficulty || 'medium',
    timeLimit: extra.timeLimit || 120,
    title: question.replace(/\\\(|\\\)/g, '').replace(/\s+/g, ' ').slice(0, 72),
    question,
    opts,
    options: opts.map((text) => ({ text, imageUrl: null })),
    a,
    answer: String(a),
    hint: extra.hint || '',
    solution: `The correct answer is ${correct}.`,
    solutionSteps: steps,
    questionImage: DIAGRAM,
  };
}

const STEM =
  'A farmhand fills a row of feed troughs from a silo. The distance from the silo to the first trough is \\(8\\) m, and adjacent troughs are \\(4\\) m apart. He carries enough grain for one trough at a time and returns to the silo after each trough.';

// Math:
// one-way to nth trough: 8 + 4(n-1) = 4n+4
// round trip: 2(4n+4) = 8n+8
// n=1:16, n=2:24, n=3:32
// 8n+8=72 → n=8
// S_8 = 8/2*(16+72)=352

const Q = [];

Q.push(
  mc(
    'y12a-8a-q12ai',
    STEM + '\nHow far does he walk to fill the 1st trough and return to the silo?',
    ['\\(8\\ \\text{m}\\)', '\\(12\\ \\text{m}\\)', '\\(16\\ \\text{m}\\)', '\\(20\\ \\text{m}\\)'],
    2,
    [
      S(
        'Given: silo to first trough is \\(8\\) m; he returns to the silo after filling. Why a round trip? He walks out with grain and back empty (or for the next load), so the distance for one trough is twice the one-way distance. Strategy: compute one-way to T1, then double it. A common slip is reporting only the one-way distance \\(8\\) m.',
        '\\(\\text{one-way to T1} = 8\\ \\text{m}\\)'
      ),
      S(
        'What we compute: round-trip distance\\[D_1 = 2 \\times 8 = 16\\ \\text{m}.\\]The diagram shows the silo-to-T1 segment labelled \\(8\\) m; both legs of the journey use that same path.',
        '\\(D_1 = 2 \\times 8 = 16\\)'
      ),
      S(
        'Final answer: \\(16\\) m. Context: this is the walking distance for filling trough 1 only, and it will be the first term of the arithmetic sequence of round-trip distances.',
        '\\(16\\ \\text{m}\\)'
      ),
    ],
    {
      difficulty: 'easy',
      timeLimit: 60,
      hint: 'Round trip: twice the distance from silo to T1.',
    }
  )
);

Q.push(
  mc(
    'y12a-8a-q12aii',
    STEM + '\nHow far does he walk to fill the 2nd trough and return to the silo?',
    ['\\(16\\ \\text{m}\\)', '\\(20\\ \\text{m}\\)', '\\(24\\ \\text{m}\\)', '\\(28\\ \\text{m}\\)'],
    2,
    [
      S(
        'Given: silo to T1 is \\(8\\) m and troughs are \\(4\\) m apart. Why add one more gap for T2? To reach the second trough he walks past T1 and on another \\(4\\) m. Strategy: one-way distance to T2, then double for the return. A common slip is using \\(8 + 4 + 4\\) (as if going to T3) or forgetting to double.',
        '\\(\\text{one-way to T2} = 8 + 4\\)'
      ),
      S(
        'One-way: \\(8 + 4 = 12\\) m. Round trip:\\[D_2 = 2 \\times 12 = 24\\ \\text{m}.\\]Check the pattern: \\(D_1 = 16\\), \\(D_2 = 24\\), so the round trips increase by \\(8\\) m each time (twice the trough spacing).',
        '\\(D_2 = 2 \\times 12 = 24\\)'
      ),
      S(
        'Final answer: \\(24\\) m. Context: walking out to T2 and back to the silo once.',
        '\\(24\\ \\text{m}\\)'
      ),
    ],
    {
      difficulty: 'easy',
      timeLimit: 90,
      hint: 'One-way is \\(8+4=12\\) m; double for return.',
    }
  )
);

Q.push(
  mc(
    'y12a-8a-q12aiii',
    STEM + '\nHow far does he walk to fill the 3rd trough and return to the silo?',
    ['\\(24\\ \\text{m}\\)', '\\(28\\ \\text{m}\\)', '\\(32\\ \\text{m}\\)', '\\(36\\ \\text{m}\\)'],
    2,
    [
      S(
        'Given: silo–T1 is \\(8\\) m and each further trough adds \\(4\\) m. For T3 there are two gaps after T1. Strategy: one-way \\(= 8 + 4 + 4\\), then double. A common slip is counting only one gap after T1.',
        '\\(\\text{one-way to T3} = 8 + 4 + 4\\)'
      ),
      S(
        'One-way: \\(8 + 4 + 4 = 16\\) m. Round trip:\\[D_3 = 2 \\times 16 = 32\\ \\text{m}.\\]Sequence so far: \\(16,\\ 24,\\ 32\\) — an AP with common difference \\(8\\).',
        '\\(D_3 = 2 \\times 16 = 32\\)'
      ),
      S(
        'Final answer: \\(32\\) m. Context: one complete silo–T3–silo journey.',
        '\\(32\\ \\text{m}\\)'
      ),
    ],
    {
      difficulty: 'easy',
      timeLimit: 90,
      hint: 'One-way is \\(8+4+4=16\\) m; double for return.',
    }
  )
);

Q.push(
  mc(
    'y12a-8a-q12b',
    STEM +
      '\nHow far will the farmhand walk to fill the \\(n\\)th trough and return to the silo? Give a simplified expression in terms of \\(n\\).',
    [
      '\\(4n + 4\\)',
      '\\(8n + 8\\)',
      '\\(8n - 8\\)',
      '\\(4n + 8\\)',
    ],
    1,
    [
      S(
        'Given: silo to T1 is \\(8\\) m; adjacent troughs are \\(4\\) m apart; each fill is a round trip. Why a formula in \\(n\\)? Parts (a) suggest the distances form a pattern; generalising gives every trough at once. Strategy: write one-way distance to the \\(n\\)th trough as an AP term, then double. A common slip is forgetting the factor of 2 for the return trip (that yields \\(4n+4\\), a frequent wrong option).',
        '\\(\\text{one-way to trough } n = 8 + 4(n-1)\\)'
      ),
      S(
        'Simplify the one-way distance:\\[8 + 4(n-1) = 8 + 4n - 4 = 4n + 4.\\]This is the AP with first term 8 and common difference 4. It matches \\(n=1 \\rightarrow 8\\), \\(n=2 \\rightarrow 12\\), \\(n=3 \\rightarrow 16\\).',
        '\\(\\text{one-way} = 4n + 4\\)'
      ),
      S(
        'Round trip doubles the one-way path:\\[D_n = 2(4n + 4) = 8n + 8.\\]Check: \\(n=1 \\rightarrow 16\\), \\(n=2 \\rightarrow 24\\), \\(n=3 \\rightarrow 32\\), matching part (a).',
        '\\(D_n = 8n + 8\\)'
      ),
      S(
        'Final answer: \\(8n + 8\\) (metres). Context: walking distance for a single silo–\\(n\\)th trough–silo trip. Equivalent form \\(8(n+1)\\) is the same value, but the options use \\(8n+8\\).',
        '\\(8n + 8\\)'
      ),
    ],
    {
      difficulty: 'medium',
      timeLimit: 150,
      hint: 'One-way: \\(8+4(n-1)\\). Round trip: multiply by 2.',
    }
  )
);

Q.push(
  mc(
    'y12a-8a-q12ci',
    STEM +
      '\nThe round-trip distance to fill the furthest trough is \\(72\\) m. Using \\(D_n = 8n + 8\\), how many feed troughs are there?',
    ['\\(6\\)', '\\(7\\)', '\\(8\\)', '\\(9\\)'],
    2,
    [
      S(
        'Given: furthest trough has round-trip distance \\(72\\) m, and from part (b) \\(D_n = 8n + 8\\). Why set equal to 72? The furthest trough is trough number \\(n\\) (total number of troughs), so its round trip is the last term of the sequence. Strategy: solve \\(8n + 8 = 72\\) for positive integer \\(n\\). A common slip is solving \\(8n = 72\\) and getting \\(n = 9\\) (forgetting the \\(+8\\)).',
        '\\(8n + 8 = 72\\)'
      ),
      S(
        'Subtract 8: \\(8n = 64\\). Divide by 8: \\(n = 8\\). So there are 8 troughs. Check: \\(D_8 = 8\\times 8 + 8 = 64 + 8 = 72\\) m, as required.',
        '\\(8n = 64 \\;\\Rightarrow\\; n = 8\\)'
      ),
      S(
        'Final answer: \\(8\\) troughs. Context: the row has eight feed troughs if the longest single round trip is 72 m.',
        '\\(8\\)'
      ),
    ],
    {
      difficulty: 'medium',
      timeLimit: 120,
      hint: 'Solve \\(8n+8=72\\) for \\(n\\).',
    }
  )
);

Q.push(
  mc(
    'y12a-8a-q12cii',
    STEM +
      '\nThere are \\(8\\) troughs and the round-trip distances form the AP \\(16,\\ 24,\\ 32,\\ \\dots,\\ 72\\). What is the total distance he walks to fill all the troughs?',
    ['\\(288\\ \\text{m}\\)', '\\(320\\ \\text{m}\\)', '\\(352\\ \\text{m}\\)', '\\(400\\ \\text{m}\\)'],
    2,
    [
      S(
        'Given: eight round trips forming an AP with first term \\(a = 16\\), last term \\(l = 72\\), and \\(n = 8\\) terms. Why a sum? Total walking distance is the sum of every individual trough trip (he fills each trough once and returns each time). Strategy: use the AP sum formula \\(S_n = \\dfrac{1}{2}n(a+l)\\). A common slip is multiplying only the last trip by 8, or summing one-way distances instead of round trips.',
        '\\(a = 16,\\quad l = 72,\\quad n = 8\\)'
      ),
      S(
        'Apply the sum formula:\\[S_8 = \\dfrac{1}{2}\\times 8\\times(16 + 72) = 4 \\times 88.\\]Why this form? When first and last terms are known, \\(\\dfrac{1}{2}n(a+l)\\) is the quickest exact sum.',
        '\\(S_8 = 4 \\times 88\\)'
      ),
      S(
        'Compute \\(4 \\times 88 = 352\\). Alternative check: sum of \\(D_k = 8k + 8\\) for \\(k = 1\\) to \\(8\\):\\[S_8 = 8\\sum_{k=1}^{8} k + 8\\times 8 = 8\\times\\dfrac{8\\times 9}{2} + 64 = 8\\times 36 + 64 = 288 + 64 = 352.\\]',
        '\\(S_8 = 352\\)'
      ),
      S(
        'Final answer: \\(352\\) m. Context: total distance walked to fill all eight troughs, one load at a time with returns to the silo.',
        '\\(352\\ \\text{m}\\)'
      ),
    ],
    {
      difficulty: 'hard',
      timeLimit: 180,
      hint: 'Use \\(S_n=\\frac12 n(a+l)\\) with a=16, l=72, n=8.',
    }
  )
);

function loadSeed() {
  const src = readFileSync(SEED, 'utf8');
  const tmp = '/tmp/ch8_q12_seed.cjs';
  writeFileSync(tmp, src.replace(/^export const Y12_CH8_QUESTIONS\s*=\s*/, 'module.exports = '));
  delete require.cache[require.resolve(tmp)];
  return require(tmp);
}

function lean(p) {
  return {
    id: p.id,
    topicId: p.topicId,
    c: p.c,
    t: p.t,
    type: p.type,
    difficulty: p.difficulty,
    timeLimit: p.timeLimit,
    question: p.question,
    hint: p.hint || '',
    solution: p.solution,
    solutionSteps: p.solutionSteps,
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
    opts: p.opts,
    options: p.options,
    a: p.a,
    answer: p.answer,
    questionImage: p.questionImage,
  };
}

(async () => {
  console.log('SVG length', DIAGRAM.length);

  const seed = loadSeed();
  const byId = new Map(Q.map((q) => [q.id, q]));
  let n = 0;
  for (let i = 0; i < seed.length; i++) {
    const p = byId.get(seed[i].id);
    if (!p) continue;
    seed[i] = lean(p);
    n++;
  }
  for (const q of Q) {
    if (!seed.find((s) => s.id === q.id)) {
      seed.push(lean(q));
      n++;
    }
  }
  writeFileSync(SEED, 'export const Y12_CH8_QUESTIONS = ' + JSON.stringify(seed, null, 2) + ';\n');
  console.log('seed updated', n);

  await db.collection('questions').doc('y12a-8a-q12').set(
    {
      isActive: false,
      type: 'subquestions',
      subQuestions: [],
      question: '',
      solutionSteps: [],
      questionImage: '',
      isNew: true,
      requiresManualGrading: false,
      origin: 'seed',
      topicId: 'y12a-8A',
      chapterId: 'y12a-8',
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );
  console.log('deactivated parent y12a-8a-q12');

  for (const q of Q) {
    await db.collection('questions').doc(q.id).set(
      { ...q, updatedAt: FieldValue.serverTimestamp() },
      { merge: true }
    );
    console.log('wrote', q.id, 'a=' + q.a, '→', q.opts[q.a]);
  }

  await db.collection('sync_meta').doc('questions').set(
    {
      version: Date.now(),
      updatedAt: FieldValue.serverTimestamp(),
      source: 'fixY12A8A_q12',
    },
    { merge: true }
  );

  const {
    prepareShuffledMcOptions,
    gradeMcSelection,
    isDisplayedOptionCorrect,
    resolveCorrectOptionText,
  } = await import('./src/utils/mcOptionShuffle.js');
  let fail = 0;
  for (const raw of Q) {
    const q = { ...raw, isManual: true };
    const display = prepareShuffledMcOptions(q);
    const idx = display.findIndex((_, j) => isDisplayedOptionCorrect(q, display, j));
    const ok = gradeMcSelection(q, display[idx], idx, display);
    const bad = gradeMcSelection(q, display[(idx + 1) % 4], (idx + 1) % 4, display);
    console.log(raw.id, resolveCorrectOptionText(q), ok && !bad ? 'PASS' : 'FAIL');
    if (!ok || bad) fail++;
  }
  if (fail) process.exit(1);

  // write a preview SVG file for visual check
  const previewPath = path.join(process.cwd(), 'tools/scripts/_preview_y12a8a_q12.svg');
  writeFileSync(
    previewPath,
    decodeURIComponent(DIAGRAM.replace(/^data:image\/svg\+xml;charset=utf-8,/, ''))
  );
  console.log('preview', previewPath);

  const r = spawnSync('node', ['tools/scripts/rebuildQuestionIndexes.js', 'y12a-8'], {
    encoding: 'utf8',
    timeout: 120000,
  });
  console.log(r.stdout || '');
  if (r.status !== 0) {
    console.error(r.stderr);
    process.exit(r.status || 1);
  }
  console.log('DONE q12');
  process.exit(0);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
