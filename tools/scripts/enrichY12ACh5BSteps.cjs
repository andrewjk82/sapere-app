/**
 * Rebuild detailed multi-step solutions for Y12 Adv Ch5B.
 * Usage: node tools/scripts/enrichY12ACh5BSteps.cjs [--write] [--push]
 */
const fs = require('fs');
const path = require('path');

const WRITE = process.argv.includes('--write');
const PUSH = process.argv.includes('--push');
const seedPath = path.join(__dirname, '../../src/constants/seedYear12Ch5BQuestions.js');
const { Y12A_CH5B_QUESTIONS } = require(seedPath);

const S = (explanation, workingOut) => ({
  explanation,
  workingOut: workingOut.startsWith('\\(') ? workingOut : `\\(${workingOut}\\)`,
  graphData: null,
});

function stripMath(s) {
  return String(s || '')
    .replace(/\\dfrac\{([^{}]+)\}\{([^{}]+)\}/g, '($1)/($2)')
    .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '($1)/($2)')
    .replace(/\\left|\\right/g, '')
    .replace(/\\,/g, '')
    .replace(/\\ /g, ' ')
    .trim();
}

function extractY(question) {
  const q = question || '';
  // \( y = ... \) possibly multi-line
  let m = q.match(/\\\(\s*y\s*=\s*([\s\S]*?)\\\)/);
  if (m) return m[1].replace(/\n/g, ' ').trim();
  m = q.match(/y\s*=\s*([^\n]+)/);
  if (m) return m[1].replace(/\\\(|\\\)/g, '').trim();
  // Differentiate ... \( expr \)
  m = q.match(/Differentiat[^\n]*\\+\(([\s\S]*?)\\+\)/i);
  if (m) return m[1].replace(/\n/g, ' ').trim();
  return null;
}

function correctText(q) {
  if (q.type === 'multiple_choice' && Array.isArray(q.opts) && q.opts[q.a] != null) {
    return String(q.opts[q.a]).replace(/^\\\(|\\\)$/g, '');
  }
  return String(q.a || q.answer || '').replace(/^\$|\$$/g, '').replace(/^\\\(|\\\)$/g, '');
}

/** e^{kx}, c e^{kx}, -e^{kx} */
function stepsSimpleExp(yExpr, ans) {
  const steps = [];
  steps.push(S(
    `We are asked to differentiate \\(${yExpr}\\). Recall the chain rule for the natural exponential: if the exponent is a linear function of \\(x\\), write \\(\\dfrac{d}{dx}e^{u(x)}=e^{u(x)}\\cdot u'(x)\\). For the basic case \\(e^{kx}\\) this is simply \\(k e^{kx}\\).`,
    `\\dfrac{d}{dx}e^{u}=e^{u}\\,u'`
  ));

  // try parse c * e^{...}
  const m = yExpr.match(/^(-?\d*(?:\/\d+)?(?:\\frac\{[^}]+\}\{[^}]+\})?)?\s*e\^\{([^}]+)\}$/)
    || yExpr.match(/^(-?\d*)\s*e\^\{([^}]+)\}$/)
    || yExpr.match(/^(-?)e\^\{([^}]+)\}$/)
    || yExpr.match(/^(-?\d*)e\^([0-9a-zA-Z+\-\\\/]+)$/);

  if (m) {
    let coef = m[1];
    if (coef === undefined || coef === '') coef = '1';
    if (coef === '-') coef = '-1';
    const exp = m[2];
    steps.push(S(
      `Identify the exponent (the inner function). Here the exponent is \\(${exp}\\). Differentiate that exponent with respect to \\(x\\) — this factor multiplies the exponential after differentiation.`,
      `u=${exp},\\quad u'=\\text{(derivative of exponent)}`
    ));
    steps.push(S(
      `Apply the rule: the derivative of \\(e^{u}\\) is \\(e^{u}\\cdot u'\\). Then apply the constant-multiple rule if there is a coefficient in front of the exponential. Multiply the coefficient carefully (watch the sign).`,
      ans
    ));
    steps.push(S(
      `So the derivative is \\(${ans}\\). Check the answer against common errors: forgetting the chain-rule factor from the exponent, or dropping a leading constant.`,
      ans
    ));
    return steps;
  }

  // fallback
  steps.push(S(
    `Differentiate term by term (or with the chain rule) until every exponential and power has been handled.`,
    ans
  ));
  steps.push(S(`The simplified derivative is \\(${ans}\\).`, ans));
  return steps;
}

function stepsSum(yExpr, ans) {
  return [
    S(
      `The function is a sum (or difference) of exponential terms: \\(${yExpr}\\). Differentiation is linear, so differentiate each term separately and add the results.`,
      yExpr
    ),
    S(
      `For each term of the form \\(c\\,e^{u(x)}\\), use \\(\\dfrac{d}{dx}[c e^{u}]=c e^{u}u'\\). If a term is simply \\(e^{x}\\), its derivative is itself. For \\(e^{-x}\\), the chain rule gives \\(-e^{-x}\\) (or carefully track signs if there is already a minus in front).`,
      `\\dfrac{d}{dx}e^{u}=e^{u}u'`
    ),
    S(
      `Write every term's derivative, then combine like terms if possible. Do not cancel factors that are not identical.`,
      ans
    ),
    S(
      `Therefore \\(\\dfrac{dy}{dx}=${ans}\\).`,
      ans
    ),
  ];
}

function stepsSimplifyThenDiff(question, yExpr, ans) {
  // try to get simplified form from solution or first step
  return [
    S(
      `First simplify the given expression to a single power of \\(e\\) using index laws (product → add exponents, quotient → subtract, power of a power → multiply). Do not differentiate yet — simplifying first avoids messy product/quotient work.`,
      yExpr || '\\text{simplify first}'
    ),
    S(
      `After simplification you should have a pure form \\(y=e^{kx}\\) or \\(y=c e^{kx}\\). Check the exponent carefully (a common slip is adding instead of multiplying when using a power of a power).`,
      '\\text{single power of }e'
    ),
    S(
      `Now differentiate the simplified exponential with the standard rule \\(\\dfrac{d}{dx}e^{kx}=k e^{kx}\\) (and multiply by any constant coefficient).`,
      ans
    ),
    S(
      `The derivative is \\(${ans}\\).`,
      ans
    ),
  ];
}

function stepsExpandThenDiff(yExpr, ans) {
  return [
    S(
      `The function is written as a product with brackets: \\(${yExpr}\\). Expand the product first using distributive law so each term is a simple exponential (or a constant times one).`,
      yExpr
    ),
    S(
      `After expanding, collect like terms if needed. You should have a sum of terms of the form \\(c e^{kx}\\).`,
      '\\text{expanded form}'
    ),
    S(
      `Differentiate term by term: \\(\\dfrac{d}{dx}[c e^{kx}]=c k e^{kx}\\). Watch signs on negative exponents.`,
      ans
    ),
    S(
      `The derivative is \\(${ans}\\).`,
      ans
    ),
  ];
}

function stepsFrac(yExpr, ans) {
  return [
    S(
      `The function involves a fraction: \\(${yExpr}\\). Either rewrite each term as a constant times an exponential (for example \\(\\dfrac{e^{kx}}{k}=\\dfrac{1}{k}e^{kx}\\)), or use the quotient rule. Rewriting is usually cleaner for pure exponentials.`,
      yExpr
    ),
    S(
      `Rewrite the expression so every term is ready to differentiate. Constants factor out of the derivative.`,
      '\\text{rewrite as }c\\,e^{u(x)}'
    ),
    S(
      `Differentiate each rewritten term with the chain rule, then recombine.`,
      ans
    ),
    S(
      `The derivative is \\(${ans}\\).`,
      ans
    ),
  ];
}

function stepsProduct(yExpr, ans) {
  return [
    S(
      `This is a product of factors: \\(${yExpr}\\). Use the product rule \\((uv)'=u'v+uv'\\), or expand first if both factors are simple exponentials.`,
      yExpr
    ),
    S(
      `Identify \\(u\\) and \\(v\\), differentiate each factor (chain rule for any exponential with non-linear exponent), then form \\(u'v+uv'\\).`,
      `(uv)'=u'v+uv'`
    ),
    S(
      `Expand and simplify the result. Factor common exponentials if that matches the options.`,
      ans
    ),
    S(
      `So \\(\\dfrac{dy}{dx}=${ans}\\).`,
      ans
    ),
  ];
}

function stepsChainPower(yExpr, ans) {
  // (e^x + x)^4 style
  return [
    S(
      `The outer structure is a power of an inner expression: \\(${yExpr}\\). Set \\(u\\) equal to the inside, so the outside is a power of \\(u\\).`,
      `y=u^{n},\\quad u=\\text{(inner)}`
    ),
    S(
      `Differentiate the inner function carefully (each term separately). This \\(u'\\) is the chain-rule factor that multiplies the outer derivative.`,
      `u'=\\text{(derivative of inner)}`
    ),
    S(
      `Chain rule: \\(\\dfrac{dy}{dx}=n u^{n-1}\\cdot u'\\). Substitute the inner expression back for \\(u\\).`,
      ans
    ),
    S(
      `The derivative is \\(${ans}\\). Common errors: forgetting to multiply by \\(u'\\), or using the wrong outer power \\(n-1\\).`,
      ans
    ),
  ];
}

function stepsGeneric(yExpr, ans, question) {
  return [
    S(
      `Read the function carefully: ${yExpr ? `\\(${yExpr}\\)` : 'the given expression'}. Decide which rules apply (constant multiple, chain rule for \\(e^{u}\\), sum rule, product/quotient if needed).`,
      yExpr || '\\text{given }y'
    ),
    S(
      `Carry out the differentiation step by step. Do not skip the chain-rule factor on any composite exponential, and keep track of constant coefficients and signs.`,
      '\\text{apply rules term by term}'
    ),
    S(
      `Simplify the expression until it matches a clean form comparable with the options.`,
      ans
    ),
    S(
      `Therefore the derivative is \\(${ans}\\).`,
      ans
    ),
  ];
}

function buildSteps(q) {
  const question = q.question || q.q || '';
  const yExpr = extractY(question);
  const ans = correctText(q);
  if (!ans) return q.solutionSteps || [];

  // chain power like (e^x+x)^4
  if (/\^\{?\d\}?/.test(yExpr || '') && /\(.*e.*\)\^|\\left\(/.test(question + (yExpr || ''))) {
    if (/\([^)]*e\^[^)]+\)\^|\\left\(/.test(question) || /\([^\)]+\)\^\{?\d/.test(yExpr || '')) {
      return stepsChainPower(yExpr || 'u^{n}', ans);
    }
  }
  if (/Expand the brackets/i.test(question)) {
    return stepsExpandThenDiff(yExpr || 'product', ans);
  }
  if (/Simplify the expression as a single power/i.test(question)) {
    return stepsSimplifyThenDiff(question, yExpr, ans);
  }
  if (/\\frac|\\dfrac/.test(yExpr || question) && /Differentiat/i.test(question)) {
    return stepsFrac(yExpr || 'fraction', ans);
  }
  if (/\(/.test(yExpr || '') && /e\^/.test(yExpr || '') && /Differentiat/i.test(question) && !/Expand/i.test(question)) {
    // product without expand instruction
    if (/\w\s*\\?\(/.test(yExpr) || /e\^\{[^}]+\}\\?\(/.test(yExpr || '')) {
      return stepsProduct(yExpr, ans);
    }
  }
  // sum of terms
  if (yExpr && /[+-]/.test(yExpr.replace(/e\^\{[^}]+\}/g, 'E').replace(/e\^[a-z0-9-]+/gi, 'E'))) {
    const stripped = yExpr.replace(/e\^\{[^}]+\}/g, 'E').replace(/e\^[a-zA-Z0-9\\-]+/g, 'E');
    if (/[+-]/.test(stripped)) return stepsSum(yExpr, ans);
  }
  if (/Differentiat/i.test(question)) {
    return stepsSimpleExp(yExpr || 'e^{kx}', ans);
  }

  // keep existing if already long enough and 3+ steps
  const existing = q.solutionSteps || [];
  const chars = existing.reduce((s, st) => s + (st.explanation || '').length, 0);
  if (existing.length >= 3 && chars >= 200) {
    return existing.map((s) => ({
      explanation: s.explanation,
      workingOut: String(s.workingOut || '').replace(/,?\s+quad\s+/g, ',\\quad '),
      graphData: s.graphData ?? null,
    }));
  }

  return stepsGeneric(yExpr, ans, question);
}

// Special richer templates for well-known simple ids
function specialSteps(q) {
  const id = q.id;
  const ans = correctText(q);

  if (id === 'y12a-5b-q1a') {
    return [
      S('The standard rule is \\(\\dfrac{d}{dx}e^{ax+b}=a e^{ax+b}\\). Here the function is \\(y=e^{6x}\\), so the exponent is \\(6x\\) (that is \\(a=6\\), \\(b=0\\)).', 'y=e^{6x}'),
      S('Differentiate the exponent: \\(\\dfrac{d}{dx}(6x)=6\\). By the chain rule the exponential is multiplied by this factor 6.', 'u=6x,\\quad u\'=6'),
      S('Therefore \\(\\dfrac{dy}{dx}=6e^{6x}\\). (If you forget the chain-rule factor you would wrongly write just \\(e^{6x}\\).)', '6e^{6x}'),
    ];
  }
  if (id === 'y12a-5b-q1b') {
    return [
      S('Write \\(y=3e^{4x}\\) as a constant times an exponential. The constant 3 factors out of the derivative by the constant-multiple rule.', 'y=3\\cdot e^{4x}'),
      S('Differentiate the exponential factor with the chain rule: exponent \\(4x\\) has derivative 4, so \\(\\dfrac{d}{dx}e^{4x}=4e^{4x}\\).', '\\dfrac{d}{dx}e^{4x}=4e^{4x}'),
      S('Multiply by the leading coefficient 3: \\(3\\cdot 4e^{4x}=12e^{4x}\\).', '3\\cdot 4e^{4x}=12e^{4x}'),
      S('So \\(y\'=12e^{4x}\\).', '12e^{4x}'),
    ];
  }
  if (id === 'y12a-5b-q1c') {
    return [
      S('The function is \\(y=-e^{6x}\\). Treat this as the constant \\(-1\\) times \\(e^{6x}\\).', 'y=(-1)\\cdot e^{6x}'),
      S('First differentiate \\(e^{6x}\\): chain rule gives \\(6e^{6x}\\).', '\\dfrac{d}{dx}e^{6x}=6e^{6x}'),
      S('Multiply by the constant \\(-1\\): \\(y\'=-6e^{6x}\\). The minus sign stays with the answer.', 'y\'=-6e^{6x}'),
    ];
  }
  if (id === 'y12a-5b-q2b') {
    return [
      S('For \\(y=e^{4x+3}\\) the exponent is the linear expression \\(u=4x+3\\). Use \\(\\dfrac{d}{dx}e^{u}=e^{u}u\'\\).', 'u=4x+3'),
      S('Differentiate the exponent: \\(u\'=4\\). (The constant 3 disappears.)', 'u\'=4'),
      S('Therefore \\(y\'=e^{4x+3}\\cdot 4=4e^{4x+3}\\).', '4e^{4x+3}'),
    ];
  }
  if (id === 'y12a-5b-q3a') {
    return [
      S('The function is a sum: \\(y=e^{x}-e^{-x}\\). Differentiate each term separately.', 'y=e^{x}-e^{-x}'),
      S('First term: \\(\\dfrac{d}{dx}e^{x}=e^{x}\\).', 'e^{x}'),
      S('Second term: write \\(-e^{-x}\\). Chain rule on \\(e^{-x}\\) gives \\(-e^{-x}\\), then the outer minus makes \\(-(-e^{-x})=+e^{-x}\\). Equivalently, \\(\\dfrac{d}{dx}[-e^{-x}]=e^{-x}\\).', '\\dfrac{d}{dx}(-e^{-x})=e^{-x}'),
      S('Add the two derivatives: \\(y\'=e^{x}+e^{-x}\\).', 'e^{x}+e^{-x}'),
    ];
  }

  return null;
}

let enriched = 0;
const out = Y12A_CH5B_QUESTIONS.map((q) => {
  // skip pure teacher_review multiparts with already long proofs? still enrich if thin
  const special = specialSteps(q);
  const steps = special || buildSteps(q);
  if (!steps || !steps.length) return q;
  enriched++;
  return {
    ...q,
    solutionSteps: steps,
    // keep solution string in sync briefly
    solution: steps.map((s) => s.explanation).join(' '),
  };
});

console.log('Enriched', enriched, '/', Y12A_CH5B_QUESTIONS.length);
// show samples
for (const id of ['y12a-5b-q1a', 'y12a-5b-q1b', 'y12a-5b-q1c', 'y12a-5b-q2b', 'y12a-5b-q3a', 'y12a-5b-q4a', 'y12a-5b-q6a']) {
  const q = out.find((x) => x.id === id);
  console.log('\n====', id, 'steps', q.solutionSteps.length);
  q.solutionSteps.forEach((s, i) => console.log(i + 1, s.explanation.slice(0, 110)));
}

if (WRITE) {
  fs.writeFileSync(seedPath, `export const Y12A_CH5B_QUESTIONS = ${JSON.stringify(out, null, 2)};\n`);
  console.log('Wrote', seedPath);
}

if (PUSH) {
  const admin = require('firebase-admin');
  const sa = require(path.join(process.env.HOME, 'Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-81866b8996.json'));
  if (!admin.apps.length) admin.initializeApp({ credential: admin.credential.cert(sa) });
  const db = admin.firestore();
  const bump = Date.now();
  (async () => {
    let batch = db.batch();
    let ops = 0;
    let n = 0;
    const flush = async () => {
      if (!ops) return;
      await batch.commit();
      batch = db.batch();
      ops = 0;
    };
    for (const q of out) {
      batch.set(db.collection('questions').doc(q.id), {
        solutionSteps: q.solutionSteps,
        solution: q.solution || '',
        contentBump: bump,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      }, { merge: true });
      ops++;
      n++;
      if (ops >= 400) await flush();
    }
    await flush();
    // also enrich exam 5B items
    for (const id of ['asc2020-q13', 'asc2020-q13v']) {
      // already detailed enough; leave
    }
    await db.doc('sync_meta/questions').set({
      version: bump,
      membershipVersion: bump,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });
    console.log('Pushed steps for', n, 'docs; version', bump);
  })().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
