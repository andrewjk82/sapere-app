/**
 * Fix q17a–j: proper LaTeX fractions (dfrac), no slash/decimal forms,
 * detailed rewrite→differentiate steps. Also fix broken e^{1/x} dfracs.
 *
 * Usage: node tools/scripts/fixY12ACh5B_q17_latex.cjs [--write] [--push]
 */
const fs = require('fs');
const path = require('path');

const WRITE = process.argv.includes('--write');
const PUSH = process.argv.includes('--push');
const seedPath = path.join(__dirname, '../../src/constants/seedYear12Ch5BQuestions.js');

const S = (explanation, workingOut) => ({
  explanation,
  workingOut: workingOut.startsWith('\\(') ? workingOut : `\\(${workingOut}\\)`,
  graphData: null,
});

const UPDATES = {
  'y12a-5b-q17a': {
    a: 2,
    answer: '2',
    opts: [
      '\\(\\dfrac{3}{2}e^{3x}\\)',
      '\\(-\\dfrac{3}{2}e^{\\frac{3}{2}x}\\)',
      '\\(\\dfrac{3}{2}e^{\\frac{3}{2}x}\\)',
      '\\(e^{\\frac{3}{2}x}\\)',
    ],
    solution:
      'Rewrite the square root as a power: ' +
      '\\(y=\\sqrt{e^{3x}}=(e^{3x})^{\\frac{1}{2}}=e^{\\frac{3x}{2}}\\). ' +
      'Chain rule: \\(y\'=\\dfrac{3}{2}e^{\\frac{3}{2}x}\\).',
    solutionSteps: [
      S(
        'Rewrite the root as an exponential power. ' +
          '\\(\\sqrt{e^{3x}}=(e^{3x})^{\\frac{1}{2}}\\). Using \\((e^{u})^{v}=e^{uv}\\), this becomes \\(e^{\\frac{3x}{2}}\\).',
        'y=\\sqrt{e^{3x}}=e^{\\frac{3x}{2}}'
      ),
      S(
        'Differentiate with the chain rule: \\(\\dfrac{d}{dx}e^{u}=e^{u}u\'\\) where \\(u=\\dfrac{3}{2}x\\), so \\(u\'=\\dfrac{3}{2}\\).',
        "y'=\\dfrac{3}{2}e^{\\frac{3}{2}x}"
      ),
      S(
        'Therefore \\(y\'=\\dfrac{3}{2}e^{\\frac{3}{2}x}\\). Common errors: writing the coefficient as a decimal \\(1.5\\), forgetting the chain-rule factor, or leaving the exponent as \\(3x\\) instead of \\(\\dfrac{3}{2}x\\).',
        "y'=\\dfrac{3}{2}e^{\\frac{3}{2}x}"
      ),
    ],
    hint: 'Rewrite as \\(e^{\\frac{3x}{2}}\\), then multiply by the chain-rule factor \\(\\dfrac{3}{2}\\).',
  },

  'y12a-5b-q17b': {
    a: 1,
    answer: '1',
    opts: [
      '\\(-\\dfrac{2}{3}e^{\\frac{2x}{3}}\\)',
      '\\(\\dfrac{2}{3}e^{\\frac{2x}{3}}\\)',
      '\\(\\dfrac{2}{3}e^{2x}\\)',
      '\\(2e^{\\frac{2x}{3}}\\)',
    ],
    solution:
      'Rewrite the cube root: ' +
      '\\(y=\\sqrt[3]{e^{2x}}=(e^{2x})^{\\frac{1}{3}}=e^{\\frac{2x}{3}}\\). ' +
      'Chain rule: \\(y\'=\\dfrac{2}{3}e^{\\frac{2x}{3}}\\).',
    solutionSteps: [
      S(
        'Rewrite the cube root as a power. ' +
          '\\(\\sqrt[3]{e^{2x}}=(e^{2x})^{\\frac{1}{3}}\\). Using \\((e^{u})^{v}=e^{uv}\\) gives \\(y=e^{\\frac{2x}{3}}\\).',
        'y=\\sqrt[3]{e^{2x}}=e^{\\frac{2x}{3}}'
      ),
      S(
        'Differentiate: let \\(u=\\dfrac{2x}{3}\\), so \\(u\'=\\dfrac{2}{3}\\). ' +
          'Then \\(y\'=e^{u}\\cdot u\'=\\dfrac{2}{3}e^{\\frac{2x}{3}}\\).',
        "y'=\\dfrac{2}{3}e^{\\frac{2x}{3}}"
      ),
      S(
        'You may also write the answer as \\(\\dfrac{2}{3}\\sqrt[3]{e^{2x}}\\), since \\(e^{\\frac{2x}{3}}=\\sqrt[3]{e^{2x}}\\). Both forms are equivalent.',
        "y'=\\dfrac{2}{3}e^{\\frac{2x}{3}}=\\dfrac{2}{3}\\sqrt[3]{e^{2x}}"
      ),
      S(
        'Common errors: writing the coefficient as the slash form \\((2/3)\\) without LaTeX, forgetting the minus when it belongs, or leaving the exponent as \\(2x\\) instead of \\(\\dfrac{2x}{3}\\).',
        "y'=\\dfrac{2}{3}e^{\\frac{2x}{3}}"
      ),
    ],
    hint: 'Rewrite as \\(e^{\\frac{2x}{3}}\\), then the derivative coefficient is \\(\\dfrac{2}{3}\\).',
  },

  'y12a-5b-q17c': {
    a: 0,
    answer: '0',
    opts: [
      '\\(-\\dfrac{1}{2}e^{-\\frac{x}{2}}\\)',
      '\\(\\dfrac{1}{2}e^{-\\frac{x}{2}}\\)',
      '\\(-\\dfrac{1}{2}e^{-x}\\)',
      '\\(-e^{-\\frac{x}{2}}\\)',
    ],
    solution:
      'Rewrite: \\(y=\\dfrac{1}{\\sqrt{e^{x}}}=(e^{x})^{-\\frac{1}{2}}=e^{-\\frac{x}{2}}\\). ' +
      'Chain rule: \\(y\'=-\\dfrac{1}{2}e^{-\\frac{x}{2}}\\).',
    solutionSteps: [
      S(
        'Rewrite the reciprocal square root as a negative power of \\(e\\): ' +
          '\\(y=\\dfrac{1}{\\sqrt{e^{x}}}=(e^{x})^{-\\frac{1}{2}}=e^{-\\frac{x}{2}}\\).',
        'y=e^{-\\frac{x}{2}}'
      ),
      S(
        'Chain rule with \\(u=-\\dfrac{x}{2}\\), so \\(u\'=-\\dfrac{1}{2}\\). ' +
          'Then \\(y\'=e^{u}\\cdot u\'=-\\dfrac{1}{2}e^{-\\frac{x}{2}}\\).',
        "y'=-\\dfrac{1}{2}e^{-\\frac{x}{2}}"
      ),
      S(
        'Do not leave the answer as a decimal \\(-0.5e^{-0.5x}\\). Use exact fractions: \\(-\\dfrac{1}{2}e^{-\\frac{x}{2}}\\).',
        "y'=-\\dfrac{1}{2}e^{-\\frac{x}{2}}"
      ),
    ],
    hint: 'Rewrite as \\(e^{-\\frac{x}{2}}\\), then multiply by \\(-\\dfrac{1}{2}\\).',
  },

  'y12a-5b-q17d': {
    a: 3,
    answer: '3',
    opts: [
      '\\(\\dfrac{1}{3}e^{-\\frac{x}{3}}\\)',
      '\\(-\\dfrac{1}{3}e^{-x}\\)',
      '\\(-e^{-\\frac{x}{3}}\\)',
      '\\(-\\dfrac{1}{3}e^{-\\frac{x}{3}}\\)',
    ],
    solution:
      'Rewrite: \\(y=\\dfrac{1}{\\sqrt[3]{e^{x}}}=(e^{x})^{-\\frac{1}{3}}=e^{-\\frac{x}{3}}\\). ' +
      'Chain rule: \\(y\'=-\\dfrac{1}{3}e^{-\\frac{x}{3}}\\).',
    solutionSteps: [
      S(
        'Rewrite the reciprocal cube root: ' +
          '\\(y=\\dfrac{1}{\\sqrt[3]{e^{x}}}=(e^{x})^{-\\frac{1}{3}}=e^{-\\frac{x}{3}}\\).',
        'y=e^{-\\frac{x}{3}}'
      ),
      S(
        'Chain rule with \\(u=-\\dfrac{x}{3}\\), so \\(u\'=-\\dfrac{1}{3}\\). ' +
          'Then \\(y\'=-\\dfrac{1}{3}e^{-\\frac{x}{3}}\\).',
        "y'=-\\dfrac{1}{3}e^{-\\frac{x}{3}}"
      ),
      S(
        'Equivalently, \\(y\'=-\\dfrac{1}{3}\\cdot\\dfrac{1}{\\sqrt[3]{e^{x}}}\\). Prefer the exponential form with LaTeX fractions, not slash notation like \\((1/3)\\).',
        "y'=-\\dfrac{1}{3}e^{-\\frac{x}{3}}"
      ),
    ],
    hint: 'Rewrite as \\(e^{-\\frac{x}{3}}\\), then the chain-rule factor is \\(-\\dfrac{1}{3}\\).',
  },

  'y12a-5b-q17e': {
    a: 0,
    answer: '0',
    opts: [
      '\\(\\dfrac{e^{\\sqrt{x}}}{2\\sqrt{x}}\\)',
      '\\(-\\dfrac{e^{\\sqrt{x}}}{2\\sqrt{x}}\\)',
      '\\(\\dfrac{e^{\\sqrt{x}}}{\\sqrt{x}}\\)',
      '\\(e^{\\sqrt{x}}\\)',
    ],
    solution:
      'Chain rule: \\(y=e^{\\sqrt{x}}\\), so \\(y\'=e^{\\sqrt{x}}\\cdot\\dfrac{d}{dx}(\\sqrt{x})=' +
      'e^{\\sqrt{x}}\\cdot\\dfrac{1}{2\\sqrt{x}}=\\dfrac{e^{\\sqrt{x}}}{2\\sqrt{x}}\\).',
    solutionSteps: [
      S(
        'Outer function is exponential of an inner function. Set \\(u=\\sqrt{x}=x^{\\frac{1}{2}}\\), so \\(y=e^{u}\\).',
        'u=\\sqrt{x},\\quad y=e^{u}'
      ),
      S(
        'Differentiate the inner function: \\(u\'=\\dfrac{1}{2}x^{-\\frac{1}{2}}=\\dfrac{1}{2\\sqrt{x}}\\).',
        "u'=\\dfrac{1}{2\\sqrt{x}}"
      ),
      S(
        'Chain rule: \\(y\'=e^{u}\\cdot u\'=e^{\\sqrt{x}}\\cdot\\dfrac{1}{2\\sqrt{x}}=\\dfrac{e^{\\sqrt{x}}}{2\\sqrt{x}}\\).',
        "y'=\\dfrac{e^{\\sqrt{x}}}{2\\sqrt{x}}"
      ),
      S(
        'Write the quotient with \\(\\dfrac{\\cdots}{\\cdots}\\), not a slash like \\(e^{\\sqrt{x}}/(2\\sqrt{x})\\).',
        "y'=\\dfrac{e^{\\sqrt{x}}}{2\\sqrt{x}}"
      ),
    ],
    hint: 'Multiply \\(e^{\\sqrt{x}}\\) by the derivative of \\(\\sqrt{x}\\), which is \\(\\dfrac{1}{2\\sqrt{x}}\\).',
  },

  'y12a-5b-q17f': {
    a: 1,
    answer: '1',
    opts: [
      '\\(\\dfrac{e^{-\\sqrt{x}}}{2\\sqrt{x}}\\)',
      '\\(-\\dfrac{e^{-\\sqrt{x}}}{2\\sqrt{x}}\\)',
      '\\(-\\dfrac{e^{-\\sqrt{x}}}{\\sqrt{x}}\\)',
      '\\(e^{-\\sqrt{x}}\\)',
    ],
    solution:
      'Chain rule: \\(y=e^{-\\sqrt{x}}\\), ' +
      '\\(y\'=e^{-\\sqrt{x}}\\cdot\\left(-\\dfrac{1}{2\\sqrt{x}}\\right)=-\\dfrac{e^{-\\sqrt{x}}}{2\\sqrt{x}}\\).',
    solutionSteps: [
      S(
        'Set \\(u=-\\sqrt{x}\\), so \\(y=e^{u}\\).',
        'u=-\\sqrt{x},\\quad y=e^{u}'
      ),
      S(
        'Inner derivative: \\(u\'=-\\dfrac{1}{2\\sqrt{x}}\\).',
        "u'=-\\dfrac{1}{2\\sqrt{x}}"
      ),
      S(
        'Chain rule: \\(y\'=e^{u}\\cdot u\'=e^{-\\sqrt{x}}\\cdot\\left(-\\dfrac{1}{2\\sqrt{x}}\\right)=-\\dfrac{e^{-\\sqrt{x}}}{2\\sqrt{x}}\\).',
        "y'=-\\dfrac{e^{-\\sqrt{x}}}{2\\sqrt{x}}"
      ),
      S(
        'Keep the overall minus sign. Write the answer with \\(\\dfrac{\\cdots}{\\cdots}\\), not slash notation.',
        "y'=-\\dfrac{e^{-\\sqrt{x}}}{2\\sqrt{x}}"
      ),
    ],
    hint: 'The inner derivative of \\(-\\sqrt{x}\\) is \\(-\\dfrac{1}{2\\sqrt{x}}\\).',
  },

  'y12a-5b-q17g': {
    a: 2,
    answer: '2',
    opts: [
      '\\(\\dfrac{1}{x^{2}}e^{\\frac{1}{x}}\\)',
      '\\(-\\dfrac{1}{x}e^{\\frac{1}{x}}\\)',
      '\\(-\\dfrac{1}{x^{2}}e^{\\frac{1}{x}}\\)',
      '\\(e^{\\frac{1}{x}}\\)',
    ],
    solution:
      'Chain rule: \\(y=e^{\\frac{1}{x}}\\), ' +
      '\\(u=\\dfrac{1}{x}\\), \\(u\'=-\\dfrac{1}{x^{2}}\\), so ' +
      '\\(y\'=-\\dfrac{1}{x^{2}}e^{\\frac{1}{x}}\\).',
    solutionSteps: [
      S(
        'Set the exponent as the inner function: \\(u=\\dfrac{1}{x}=x^{-1}\\), so \\(y=e^{u}\\).',
        'u=\\dfrac{1}{x},\\quad y=e^{u}'
      ),
      S(
        'Differentiate the inner function: \\(u\'=-x^{-2}=-\\dfrac{1}{x^{2}}\\).',
        "u'=-\\dfrac{1}{x^{2}}"
      ),
      S(
        'Chain rule: \\(y\'=e^{u}\\cdot u\'=e^{\\frac{1}{x}}\\cdot\\left(-\\dfrac{1}{x^{2}}\\right)=-\\dfrac{1}{x^{2}}e^{\\frac{1}{x}}\\).',
        "y'=-\\dfrac{1}{x^{2}}e^{\\frac{1}{x}}"
      ),
      S(
        'Therefore \\(y\'=-\\dfrac{1}{x^{2}}e^{\\frac{1}{x}}\\). Equivalent form: \\(-\\dfrac{e^{\\frac{1}{x}}}{x^{2}}\\). Common errors: dropping the minus, or using \\(\\dfrac{1}{x}\\) instead of \\(\\dfrac{1}{x^{2}}\\) as the chain-rule factor.',
        "y'=-\\dfrac{1}{x^{2}}e^{\\frac{1}{x}}"
      ),
    ],
    hint: 'Differentiate the exponent \\(\\dfrac{1}{x}\\) to get \\(-\\dfrac{1}{x^{2}}\\), then multiply by \\(e^{\\frac{1}{x}}\\).',
  },

  'y12a-5b-q17h': {
    a: 3,
    answer: '3',
    opts: [
      '\\(-\\dfrac{2}{x^{2}}e^{-\\frac{2}{x}}\\)',
      '\\(\\dfrac{1}{x^{2}}e^{-\\frac{2}{x}}\\)',
      '\\(\\dfrac{2}{x}e^{-\\frac{2}{x}}\\)',
      '\\(\\dfrac{2}{x^{2}}e^{-\\frac{2}{x}}\\)',
    ],
    solution:
      'Chain rule: \\(y=e^{-\\frac{2}{x}}\\), ' +
      '\\(u=-\\dfrac{2}{x}\\), \\(u\'=\\dfrac{2}{x^{2}}\\), so ' +
      '\\(y\'=\\dfrac{2}{x^{2}}e^{-\\frac{2}{x}}\\).',
    solutionSteps: [
      S(
        'Set \\(u=-\\dfrac{2}{x}=-2x^{-1}\\), so \\(y=e^{u}\\).',
        'u=-\\dfrac{2}{x},\\quad y=e^{u}'
      ),
      S(
        'Inner derivative: \\(u\'=(-2)(-1)x^{-2}=\\dfrac{2}{x^{2}}\\).',
        "u'=\\dfrac{2}{x^{2}}"
      ),
      S(
        'Chain rule: \\(y\'=e^{u}\\cdot u\'=e^{-\\frac{2}{x}}\\cdot\\dfrac{2}{x^{2}}=\\dfrac{2}{x^{2}}e^{-\\frac{2}{x}}\\).',
        "y'=\\dfrac{2}{x^{2}}e^{-\\frac{2}{x}}"
      ),
      S(
        'The two minuses (from the constant \\(-2\\) and the power rule on \\(x^{-1}\\)) make the coefficient positive. Use proper LaTeX: \\(\\dfrac{2}{x^{2}}e^{-\\frac{2}{x}}\\).',
        "y'=\\dfrac{2}{x^{2}}e^{-\\frac{2}{x}}"
      ),
    ],
    hint: 'Differentiate \\(-\\dfrac{2}{x}\\) to get \\(\\dfrac{2}{x^{2}}\\), then multiply by the exponential.',
  },

  'y12a-5b-q17i': {
    a: 0,
    answer: '0',
    opts: [
      '\\(\\left(1+\\dfrac{1}{x^{2}}\\right)e^{x-\\frac{1}{x}}\\)',
      '\\(\\left(1-\\dfrac{1}{x^{2}}\\right)e^{x-\\frac{1}{x}}\\)',
      '\\(\\left(1+\\dfrac{1}{x^{2}}\\right)e^{x}\\)',
      '\\(e^{x-\\frac{1}{x}}\\)',
    ],
    solution:
      'Chain rule: \\(y=e^{x-\\frac{1}{x}}\\), ' +
      '\\(u=x-\\dfrac{1}{x}\\), \\(u\'=1+\\dfrac{1}{x^{2}}\\), so ' +
      '\\(y\'=\\left(1+\\dfrac{1}{x^{2}}\\right)e^{x-\\frac{1}{x}}\\).',
    solutionSteps: [
      S(
        'Set the exponent as the inner function: \\(u=x-\\dfrac{1}{x}\\), so \\(y=e^{u}\\).',
        'u=x-\\dfrac{1}{x},\\quad y=e^{u}'
      ),
      S(
        'Differentiate the exponent term by term: \\(\\dfrac{d}{dx}(x)=1\\) and ' +
          '\\(\\dfrac{d}{dx}\\left(-\\dfrac{1}{x}\\right)=\\dfrac{1}{x^{2}}\\). So \\(u\'=1+\\dfrac{1}{x^{2}}\\).',
        "u'=1+\\dfrac{1}{x^{2}}"
      ),
      S(
        'Chain rule: \\(y\'=e^{u}\\cdot u\'=\\left(1+\\dfrac{1}{x^{2}}\\right)e^{x-\\frac{1}{x}}\\).',
        "y'=\\left(1+\\dfrac{1}{x^{2}}\\right)e^{x-\\frac{1}{x}}"
      ),
      S(
        'Write fractions with \\(\\dfrac{1}{x^{2}}\\) and \\(\\dfrac{1}{x}\\), not slash forms like \\(1/x^{2}\\) or \\(1/x\\) inside the exponent when you can avoid it.',
        "y'=\\left(1+\\dfrac{1}{x^{2}}\\right)e^{x-\\frac{1}{x}}"
      ),
    ],
    hint: 'The derivative of the exponent \\(x-\\dfrac{1}{x}\\) is \\(1+\\dfrac{1}{x^{2}}\\).',
  },

  'y12a-5b-q17j': {
    a: 1,
    answer: '1',
    opts: [
      '\\(-e^{x}e^{e^{x}}\\)',
      '\\(e^{x}e^{e^{x}}\\)',
      '\\(e^{e^{x}}\\)',
      '\\(e^{x}\\)',
    ],
    solution:
      'Chain rule: \\(y=e^{e^{x}}\\), \\(u=e^{x}\\), \\(u\'=e^{x}\\), so ' +
      '\\(y\'=e^{e^{x}}\\cdot e^{x}=e^{x}e^{e^{x}}\\).',
    solutionSteps: [
      S(
        'This is a nested exponential. Set the inner function \\(u=e^{x}\\), so \\(y=e^{u}=e^{e^{x}}\\).',
        'u=e^{x},\\quad y=e^{u}'
      ),
      S(
        'Inner derivative: \\(u\'=e^{x}\\) (the exponential is its own derivative).',
        "u'=e^{x}"
      ),
      S(
        'Chain rule: \\(y\'=e^{u}\\cdot u\'=e^{e^{x}}\\cdot e^{x}=e^{x}e^{e^{x}}\\). ' +
          'You may also write this as \\(e^{x+e^{x}}\\).',
        "y'=e^{x}e^{e^{x}}"
      ),
      S(
        'Common error: differentiating only the outer exponential and forgetting to multiply by \\(e^{x}\\).',
        "y'=e^{x}e^{e^{x}}"
      ),
    ],
    hint: 'Multiply the outer exponential by the derivative of the inner exponent \\(e^{x}\\).',
  },
};

function replaceObject(src, id, fields) {
  const idMarker = `"id": "${id}"`;
  const idIdx = src.indexOf(idMarker);
  if (idIdx < 0) {
    console.error('missing', id);
    return src;
  }
  const objStart = src.lastIndexOf('{', idIdx);
  let depth = 0;
  let objEnd = -1;
  for (let i = objStart; i < src.length; i++) {
    if (src[i] === '{') depth++;
    else if (src[i] === '}') {
      depth--;
      if (depth === 0) {
        objEnd = i;
        break;
      }
    }
  }
  let obj = src.slice(objStart, objEnd + 1);

  const setStr = (key, val) => {
    const re = new RegExp(`"${key}":\\s*"(?:\\\\.|[^"\\\\])*"`);
    if (re.test(obj)) obj = obj.replace(re, `"${key}": ${JSON.stringify(val)}`);
  };
  const setNum = (key, val) => {
    const re = new RegExp(`"${key}":\\s*(?:"(?:\\\\.|[^"\\\\])*"|-?\\d+)`);
    if (re.test(obj)) obj = obj.replace(re, `"${key}": ${typeof val === 'number' ? val : JSON.stringify(val)}`);
  };

  setNum('a', fields.a);
  setStr('solution', fields.solution);
  setStr('hint', fields.hint);
  setStr('answer', fields.answer);

  // solutionSteps
  const sk = '"solutionSteps":';
  const si = obj.indexOf(sk);
  if (si >= 0) {
    const as = obj.indexOf('[', si);
    let d = 0;
    let ae = -1;
    for (let i = as; i < obj.length; i++) {
      if (obj[i] === '[') d++;
      else if (obj[i] === ']') {
        d--;
        if (d === 0) {
          ae = i;
          break;
        }
      }
    }
    const newSteps = JSON.stringify(fields.solutionSteps, null, 2)
      .split('\n')
      .map((l, i) => (i === 0 ? l : '    ' + l))
      .join('\n');
    obj = obj.slice(0, si) + `"solutionSteps": ${newSteps}` + obj.slice(ae + 1);
  }

  // opts
  const ok = '"opts":';
  const oi = obj.indexOf(ok);
  if (oi >= 0) {
    const as = obj.indexOf('[', oi);
    let d = 0;
    let ae = -1;
    for (let i = as; i < obj.length; i++) {
      if (obj[i] === '[') d++;
      else if (obj[i] === ']') {
        d--;
        if (d === 0) {
          ae = i;
          break;
        }
      }
    }
    const newOpts = JSON.stringify(fields.opts, null, 2)
      .split('\n')
      .map((l, i) => (i === 0 ? l : '    ' + l))
      .join('\n');
    obj = obj.slice(0, oi) + `"opts": ${newOpts}` + obj.slice(ae + 1);
  }

  return src.slice(0, objStart) + obj + src.slice(objEnd + 1);
}

function updateSeed() {
  let src = fs.readFileSync(seedPath, 'utf8');
  for (const [id, f] of Object.entries(UPDATES)) {
    src = replaceObject(src, id, f);
    console.log(id, 'a=', f.a, '→', f.opts[f.a]);
  }
  if (WRITE) {
    fs.writeFileSync(seedPath, src);
    console.log('Wrote seed');
  } else console.log('Dry-run');
}

async function push() {
  const admin = require('firebase-admin');
  const creds = [
    path.join(process.env.HOME, 'Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-81866b8996.json'),
    path.join(process.env.HOME, 'Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json'),
    path.join(process.env.HOME, 'Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-dffb22a1c2.json'),
  ].find((p) => fs.existsSync(p));
  if (!admin.apps.length) admin.initializeApp({ credential: admin.credential.cert(require(creds)) });
  const db = admin.firestore();
  const batch = db.batch();
  for (const [id, u] of Object.entries(UPDATES)) {
    batch.set(
      db.collection('questions').doc(id),
      {
        options: u.opts.map((text) => ({ text })),
        answer: String(u.a),
        a: u.a,
        solution: u.solution,
        solutionSteps: u.solutionSteps,
        hint: u.hint,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  }
  await batch.commit();
  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    { version: ver, membershipVersion: ver, updatedAt: admin.firestore.FieldValue.serverTimestamp() },
    { merge: true }
  );
  console.log('Pushed', Object.keys(UPDATES).length, 'ver', ver);
}

(async () => {
  updateSeed();
  if (PUSH) await push();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
