/**
 * 1) Convert y12a-5b-q18 → subquestions (a)(b)(c) with detailed proof steps
 * 2) Enrich detailed steps for q19ai, q19aii, q19ci, q19cii, q20a, q20b
 *    (q19b already detailed)
 *
 * Usage: node tools/scripts/enrichY12ACh5B_q18_q20.cjs [--write] [--push]
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

const Q18 = {
  id: 'y12a-5b-q18',
  topicId: 'y12a-5B',
  c: '5B',
  t: 'Differentiation of exponential functions',
  type: 'subquestions',
  difficulty: 'hard',
  timeLimit: 240,
  question:
    'Hyperbolic functions. Define\n' +
    '\\( \\cosh x = \\dfrac{e^{x} + e^{-x}}{2} \\) and ' +
    '\\( \\sinh x = \\dfrac{e^{x} - e^{-x}}{2} \\).',
  a: 'See parts (a)–(c).',
  answer: 'See parts (a)–(c).',
  solution: 'See sub-question solutions.',
  solutionSteps: [],
  hint: 'Start from the exponential definitions. Differentiate term by term, then expand products carefully for part (c).',
  graphData: null,
  isNew: true,
  subQuestions: [
    {
      id: 'y12a-5b-q18a',
      type: 'teacher_review',
      difficulty: 'hard',
      question:
        'Show that \\(\\dfrac{d}{dx}\\cosh x = \\sinh x\\) and \\(\\dfrac{d}{dx}\\sinh x = \\cosh x\\).',
      a:
        '\\(\\dfrac{d}{dx}\\cosh x = \\sinh x,\\quad \\dfrac{d}{dx}\\sinh x = \\cosh x.\\)',
      answer:
        '\\(\\dfrac{d}{dx}\\cosh x = \\sinh x,\\quad \\dfrac{d}{dx}\\sinh x = \\cosh x.\\)',
      solution:
        'Differentiate the exponential definitions term by term to obtain the hyperbolic identities for the first derivatives.',
      solutionSteps: [
        S(
          'Start from the definition of cosh: ' +
            '\\(\\cosh x = \\dfrac{e^{x}+e^{-x}}{2}=\\dfrac{1}{2}e^{x}+\\dfrac{1}{2}e^{-x}\\).',
          '\\cosh x = \\dfrac{1}{2}e^{x}+\\dfrac{1}{2}e^{-x}'
        ),
        S(
          'Differentiate term by term: ' +
            '\\(\\dfrac{d}{dx}\\left(\\dfrac{1}{2}e^{x}\\right)=\\dfrac{1}{2}e^{x}\\) and ' +
            '\\(\\dfrac{d}{dx}\\left(\\dfrac{1}{2}e^{-x}\\right)=\\dfrac{1}{2}(-e^{-x})=-\\dfrac{1}{2}e^{-x}\\).',
          '\\dfrac{d}{dx}\\cosh x = \\dfrac{1}{2}e^{x}-\\dfrac{1}{2}e^{-x}'
        ),
        S(
          'Factor: \\(\\dfrac{1}{2}e^{x}-\\dfrac{1}{2}e^{-x}=\\dfrac{e^{x}-e^{-x}}{2}=\\sinh x\\). ' +
            'Therefore \\(\\dfrac{d}{dx}\\cosh x = \\sinh x\\).',
          '\\dfrac{d}{dx}\\cosh x = \\sinh x'
        ),
        S(
          'Now start from the definition of sinh: ' +
            '\\(\\sinh x = \\dfrac{e^{x}-e^{-x}}{2}=\\dfrac{1}{2}e^{x}-\\dfrac{1}{2}e^{-x}\\).',
          '\\sinh x = \\dfrac{1}{2}e^{x}-\\dfrac{1}{2}e^{-x}'
        ),
        S(
          'Differentiate: ' +
            '\\(\\dfrac{d}{dx}\\sinh x = \\dfrac{1}{2}e^{x}-\\dfrac{1}{2}(-e^{-x})=\\dfrac{1}{2}e^{x}+\\dfrac{1}{2}e^{-x}=\\dfrac{e^{x}+e^{-x}}{2}=\\cosh x\\).',
          '\\dfrac{d}{dx}\\sinh x = \\cosh x'
        ),
      ],
      hint: 'Write each hyperbolic function as a sum of two exponentials, then differentiate each term.',
    },
    {
      id: 'y12a-5b-q18b',
      type: 'teacher_review',
      difficulty: 'hard',
      question:
        'Find the second derivative of each function, and show that both satisfy \\(y\'\' = y\\).',
      a:
        '\\(\\dfrac{d^{2}}{dx^{2}}\\cosh x = \\cosh x,\\quad \\dfrac{d^{2}}{dx^{2}}\\sinh x = \\sinh x.\\) Both satisfy \\(y\'\'=y\\).',
      answer:
        '\\(\\dfrac{d^{2}}{dx^{2}}\\cosh x = \\cosh x,\\quad \\dfrac{d^{2}}{dx^{2}}\\sinh x = \\sinh x.\\) Both satisfy \\(y\'\'=y\\).',
      solution:
        'Differentiate part (a) results once more: the second derivatives return the original functions.',
      solutionSteps: [
        S(
          'From part (a), \\(\\dfrac{d}{dx}\\cosh x = \\sinh x\\). Differentiate again: ' +
            '\\(\\dfrac{d^{2}}{dx^{2}}\\cosh x = \\dfrac{d}{dx}(\\sinh x)=\\cosh x\\) (using part (a) again).',
          '\\dfrac{d^{2}}{dx^{2}}\\cosh x = \\cosh x'
        ),
        S(
          'So if \\(y=\\cosh x\\), then \\(y\'\'=\\cosh x=y\\). That is, cosh satisfies \\(y\'\'=y\\).',
          'y=\\cosh x \\implies y\'\'=y'
        ),
        S(
          'Similarly, \\(\\dfrac{d}{dx}\\sinh x = \\cosh x\\), so ' +
            '\\(\\dfrac{d^{2}}{dx^{2}}\\sinh x = \\dfrac{d}{dx}(\\cosh x)=\\sinh x\\).',
          '\\dfrac{d^{2}}{dx^{2}}\\sinh x = \\sinh x'
        ),
        S(
          'If \\(y=\\sinh x\\), then \\(y\'\'=\\sinh x=y\\). Both hyperbolic functions satisfy the differential equation \\(y\'\'=y\\).',
          'y=\\sinh x \\implies y\'\'=y'
        ),
      ],
      hint: 'Use the first-derivative results from (a) and differentiate once more.',
    },
    {
      id: 'y12a-5b-q18c',
      type: 'teacher_review',
      difficulty: 'hard',
      question: 'Show that \\(\\cosh^{2} x - \\sinh^{2} x = 1\\).',
      a: '\\(\\cosh^{2} x - \\sinh^{2} x = 1.\\)',
      answer: '\\(\\cosh^{2} x - \\sinh^{2} x = 1.\\)',
      solution:
        'Expand the product of the exponential definitions; cross terms cancel and you are left with 1.',
      solutionSteps: [
        S(
          'Write both functions from their definitions: ' +
            '\\(\\cosh x = \\dfrac{e^{x}+e^{-x}}{2}\\) and \\(\\sinh x = \\dfrac{e^{x}-e^{-x}}{2}\\).',
          '\\cosh x = \\dfrac{e^{x}+e^{-x}}{2},\\quad \\sinh x = \\dfrac{e^{x}-e^{-x}}{2}'
        ),
        S(
          'Form the difference of squares: ' +
            '\\(\\cosh^{2} x - \\sinh^{2} x = \\left(\\dfrac{e^{x}+e^{-x}}{2}\\right)^{2}-\\left(\\dfrac{e^{x}-e^{-x}}{2}\\right)^{2}\\).',
          '\\cosh^{2} x - \\sinh^{2} x = \\dfrac{(e^{x}+e^{-x})^{2}-(e^{x}-e^{-x})^{2}}{4}'
        ),
        S(
          'Expand the numerator. ' +
            '\\((e^{x}+e^{-x})^{2}=e^{2x}+2+e^{-2x}\\) and ' +
            '\\((e^{x}-e^{-x})^{2}=e^{2x}-2+e^{-2x}\\).',
          '(e^{x}+e^{-x})^{2}=e^{2x}+2+e^{-2x},\\quad (e^{x}-e^{-x})^{2}=e^{2x}-2+e^{-2x}'
        ),
        S(
          'Subtract: ' +
            '\\((e^{2x}+2+e^{-2x})-(e^{2x}-2+e^{-2x})=e^{2x}+2+e^{-2x}-e^{2x}+2-e^{-2x}=4\\).',
          '(e^{x}+e^{-x})^{2}-(e^{x}-e^{-x})^{2}=4'
        ),
        S(
          'Therefore \\(\\cosh^{2} x - \\sinh^{2} x = \\dfrac{4}{4}=1\\).',
          '\\cosh^{2} x - \\sinh^{2} x = 1'
        ),
      ],
      hint: 'Expand both squares using \\((A\\pm B)^{2}=A^{2}\\pm 2AB+B^{2}\\) and simplify.',
    },
  ],
};

const ENRICH = {
  'y12a-5b-q19ai': {
    a: '\\(y\'=12e^{4x}=4(3e^{4x})=4y.\\)',
    answer: '\\(y\'=12e^{4x}=4(3e^{4x})=4y.\\)',
    solution:
      'Given \\(y=3e^{4x}\\). Differentiate: \\(y\'=12e^{4x}\\). ' +
      'Right-hand side: \\(4y=4\\cdot 3e^{4x}=12e^{4x}\\). Both sides match.',
    solutionSteps: [
      S(
        'We must show that \\(y=3e^{4x}\\) satisfies \\(y\'=4y\\). Evaluate both sides separately.',
        'y=3e^{4x}'
      ),
      S(
        'Left-hand side: differentiate using the chain rule. ' +
          '\\(\\dfrac{d}{dx}(3e^{4x})=3\\cdot 4e^{4x}=12e^{4x}\\). So \\(y\'=12e^{4x}\\).',
        "y'=12e^{4x}"
      ),
      S(
        'Right-hand side: substitute the given function into \\(4y\\). ' +
          '\\(4y=4\\cdot 3e^{4x}=12e^{4x}\\).',
        '4y=12e^{4x}'
      ),
      S(
        'Both sides equal \\(12e^{4x}\\). Therefore \\(y\'=4y\\), and \\(y=3e^{4x}\\) is a solution.',
        "y'=4y=12e^{4x}"
      ),
    ],
    hint: 'Find \\(y\'\\) and compare it with \\(4y\\).',
  },

  'y12a-5b-q19aii': {
    a: '\\(y\'\'=48e^{4x}.\\quad y\'\'-16y=48e^{4x}-48e^{4x}=0.\\)',
    answer: '\\(y\'\'=48e^{4x}.\\quad y\'\'-16y=48e^{4x}-48e^{4x}=0.\\)',
    solution:
      'Given \\(y=3e^{4x}\\). Then \\(y\'=12e^{4x}\\) and \\(y\'\'=48e^{4x}\\). ' +
      '\\(y\'\'-16y=48e^{4x}-16\\cdot 3e^{4x}=0\\).',
    solutionSteps: [
      S(
        'We must show that \\(y=3e^{4x}\\) satisfies \\(y\'\'-16y=0\\). First find \\(y\'\\) and \\(y\'\'\\).',
        'y=3e^{4x}'
      ),
      S(
        'First derivative: \\(y\'=3\\cdot 4e^{4x}=12e^{4x}\\).',
        "y'=12e^{4x}"
      ),
      S(
        'Second derivative: differentiate again. \\(y\'\'=12\\cdot 4e^{4x}=48e^{4x}\\).',
        "y''=48e^{4x}"
      ),
      S(
        'Substitute into the left-hand side of the DE: ' +
          '\\(y\'\'-16y=48e^{4x}-16(3e^{4x})=48e^{4x}-48e^{4x}=0\\).',
        "y''-16y=0"
      ),
      S(
        'Therefore the DE is satisfied. Note that \\(16=4^{2}\\): for \\(y=Ae^{kx}\\) one has \\(y\'\'=k^{2}y\\), so \\(y\'\'-k^{2}y=0\\).',
        "y''-16y=0"
      ),
    ],
    hint: 'Find \\(y\'\'\\) and check that it equals \\(16y\\).',
  },

  'y12a-5b-q19ci': {
    a: '\\(y\'=-2e^{-2x},\\; y\'\'=4e^{-2x}.\\quad y\'\'+4y\'+4y=0.\\)',
    answer: '\\(y\'=-2e^{-2x},\\; y\'\'=4e^{-2x}.\\quad y\'\'+4y\'+4y=0.\\)',
    solution:
      'For \\(y=e^{-2x}\\): \\(y\'=-2e^{-2x}\\), \\(y\'\'=4e^{-2x}\\). ' +
      'Then \\(y\'\'+4y\'+4y=e^{-2x}(4-8+4)=0\\).',
    solutionSteps: [
      S(
        'Given \\(y=e^{-2x}\\). We must show that \\(y\'\'+4y\'+4y=0\\).',
        'y=e^{-2x}'
      ),
      S(
        'First derivative (chain rule, factor \\(-2\\)): \\(y\'=-2e^{-2x}\\).',
        "y'=-2e^{-2x}"
      ),
      S(
        'Second derivative: multiply by another factor of \\(-2\\): ' +
          '\\(y\'\'=(-2)(-2)e^{-2x}=4e^{-2x}\\).',
        "y''=4e^{-2x}"
      ),
      S(
        'Substitute into the DE: ' +
          '\\(y\'\'+4y\'+4y=4e^{-2x}+4(-2e^{-2x})+4(e^{-2x})\\).',
        "y''+4y'+4y=4e^{-2x}-8e^{-2x}+4e^{-2x}"
      ),
      S(
        'Factor out \\(e^{-2x}\\): ' +
          '\\(e^{-2x}(4-8+4)=e^{-2x}\\cdot 0=0\\). ' +
          'Therefore \\(y=e^{-2x}\\) is a solution.',
        "y''+4y'+4y=0"
      ),
    ],
    hint: 'Find \\(y\'\\) and \\(y\'\'\\), substitute, and factor out \\(e^{-2x}\\).',
  },

  'y12a-5b-q19cii': {
    a: '\\(y\'=e^{-2x}(1-2x),\\; y\'\'=e^{-2x}(4x-4).\\quad y\'\'+4y\'+4y=0.\\)',
    answer: '\\(y\'=e^{-2x}(1-2x),\\; y\'\'=e^{-2x}(4x-4).\\quad y\'\'+4y\'+4y=0.\\)',
    solution:
      'Product rule for \\(y=xe^{-2x}\\) gives \\(y\'=e^{-2x}(1-2x)\\) and ' +
      '\\(y\'\'=e^{-2x}(4x-4)\\). Substituting into the DE yields 0.',
    solutionSteps: [
      S(
        'Given \\(y=x e^{-2x}\\) (a product). Use the product rule for both derivatives.',
        'y=x e^{-2x}'
      ),
      S(
        'Let \\(u=x\\), \\(v=e^{-2x}\\). Then \\(u\'=1\\), \\(v\'=-2e^{-2x}\\). ' +
          '\\(y\'=u\'v+uv\'=e^{-2x}+x(-2e^{-2x})=e^{-2x}(1-2x)\\).',
        "y'=e^{-2x}(1-2x)"
      ),
      S(
        'Differentiate again with the product rule on \\(e^{-2x}(1-2x)\\): ' +
          '\\(y\'\'=(-2e^{-2x})(1-2x)+e^{-2x}(-2)=e^{-2x}\\bigl[-2(1-2x)-2\\bigr]=e^{-2x}(4x-4)\\).',
        "y''=e^{-2x}(4x-4)"
      ),
      S(
        'Substitute into the DE: ' +
          '\\(y\'\'+4y\'+4y=e^{-2x}(4x-4)+4e^{-2x}(1-2x)+4(xe^{-2x})\\).',
        "y''+4y'+4y=e^{-2x}\\bigl[(4x-4)+4(1-2x)+4x\\bigr]"
      ),
      S(
        'Simplify the bracket: \\((4x-4)+4-8x+4x=4x-4+4-8x+4x=0\\). ' +
          'Therefore the whole expression is 0, and \\(y=xe^{-2x}\\) is a solution.',
        "y''+4y'+4y=0"
      ),
    ],
    hint: 'Use the product rule carefully for \\(y\'\\) and \\(y\'\'\\), then collect coefficients of \\(e^{-2x}\\).',
  },

  'y12a-5b-q20a': {
    type: 'multiple_choice',
    question:
      'Find the values of \\(\\lambda\\) that make \\(y=e^{\\lambda x}\\) a solution of ' +
      '\\(y\'\'+2y\'-8y=0\\).',
    a: 1,
    answer: '1',
    opts: [
      '\\(\\lambda=-2\\text{ or }4\\)',
      '\\(\\lambda=-4\\text{ or }2\\)',
      '\\(\\lambda=2\\text{ or }4\\)',
      '\\(\\lambda=-4\\text{ or }-2\\)',
    ],
    solution:
      'Substitute \\(y=e^{\\lambda x}\\): \\((\\lambda^{2}+2\\lambda-8)e^{\\lambda x}=0\\). ' +
      'Characteristic equation \\(\\lambda^{2}+2\\lambda-8=0\\) factors as ' +
      '\\((\\lambda+4)(\\lambda-2)=0\\), so \\(\\lambda=-4\\) or \\(\\lambda=2\\).',
    solutionSteps: [
      S(
        'Assume a solution of the form \\(y=e^{\\lambda x}\\). Differentiate twice: ' +
          '\\(y\'=\\lambda e^{\\lambda x}\\) and \\(y\'\'=\\lambda^{2}e^{\\lambda x}\\).',
        "y=e^{\\lambda x},\\quad y'=\\lambda e^{\\lambda x},\\quad y''=\\lambda^{2}e^{\\lambda x}"
      ),
      S(
        'Substitute into the DE \\(y\'\'+2y\'-8y=0\\): ' +
          '\\(\\lambda^{2}e^{\\lambda x}+2\\lambda e^{\\lambda x}-8e^{\\lambda x}=0\\).',
        '(\\lambda^{2}+2\\lambda-8)e^{\\lambda x}=0'
      ),
      S(
        'Since \\(e^{\\lambda x}\\neq 0\\) for all real \\(x\\), the characteristic equation is ' +
          '\\(\\lambda^{2}+2\\lambda-8=0\\).',
        '\\lambda^{2}+2\\lambda-8=0'
      ),
      S(
        'Factor: \\(\\lambda^{2}+2\\lambda-8=(\\lambda+4)(\\lambda-2)=0\\). ' +
          'Therefore \\(\\lambda=-4\\) or \\(\\lambda=2\\).',
        '\\lambda=-4\\text{ or }\\lambda=2'
      ),
    ],
    hint: 'Form the characteristic quadratic \\(\\lambda^{2}+2\\lambda-8=0\\) and solve.',
  },

  'y12a-5b-q20b': {
    type: 'multiple_choice',
    question:
      'Find the values of \\(\\lambda\\) that make \\(y=e^{\\lambda x}\\) a solution of ' +
      '\\(y\'\'-5y\'+6y=0\\).',
    a: 2,
    answer: '2',
    opts: [
      '\\(\\lambda=-2\\text{ or }-3\\)',
      '\\(\\lambda=1\\text{ or }6\\)',
      '\\(\\lambda=2\\text{ or }3\\)',
      '\\(\\lambda=-3\\text{ or }2\\)',
    ],
    solution:
      'Substitute \\(y=e^{\\lambda x}\\): \\((\\lambda^{2}-5\\lambda+6)e^{\\lambda x}=0\\). ' +
      'Characteristic equation \\(\\lambda^{2}-5\\lambda+6=0\\) factors as ' +
      '\\((\\lambda-2)(\\lambda-3)=0\\), so \\(\\lambda=2\\) or \\(\\lambda=3\\).',
    solutionSteps: [
      S(
        'Assume \\(y=e^{\\lambda x}\\). Then \\(y\'=\\lambda e^{\\lambda x}\\) and \\(y\'\'=\\lambda^{2}e^{\\lambda x}\\).',
        "y=e^{\\lambda x},\\quad y'=\\lambda e^{\\lambda x},\\quad y''=\\lambda^{2}e^{\\lambda x}"
      ),
      S(
        'Substitute into \\(y\'\'-5y\'+6y=0\\): ' +
          '\\(\\lambda^{2}e^{\\lambda x}-5\\lambda e^{\\lambda x}+6e^{\\lambda x}=0\\).',
        '(\\lambda^{2}-5\\lambda+6)e^{\\lambda x}=0'
      ),
      S(
        'Since the exponential never vanishes, solve the characteristic equation ' +
          '\\(\\lambda^{2}-5\\lambda+6=0\\).',
        '\\lambda^{2}-5\\lambda+6=0'
      ),
      S(
        'Factor: \\(\\lambda^{2}-5\\lambda+6=(\\lambda-2)(\\lambda-3)=0\\). ' +
          'Therefore \\(\\lambda=2\\) or \\(\\lambda=3\\).',
        '\\lambda=2\\text{ or }\\lambda=3'
      ),
    ],
    hint: 'Solve the characteristic equation \\(\\lambda^{2}-5\\lambda+6=0\\).',
  },
};

function findObjectBounds(src, id) {
  const idIdx = src.indexOf(`"id": "${id}"`);
  if (idIdx < 0) return null;
  const objStart = src.lastIndexOf('{', idIdx);
  let depth = 0;
  for (let i = objStart; i < src.length; i++) {
    if (src[i] === '{') depth++;
    else if (src[i] === '}') {
      depth--;
      if (depth === 0) return { start: objStart, end: i };
    }
  }
  return null;
}

function formatObject(obj, indent = 2) {
  // Pretty JSON-like with 2-space indent matching seed style
  return JSON.stringify(obj, null, 2)
    .split('\n')
    .map((line, i) => (i === 0 ? line : ' '.repeat(indent) + line))
    .join('\n')
    .replace(/"([a-zA-Z0-9_]+)":/g, '"$1":'); // keep quoted keys
}

function updateSeed() {
  let src = fs.readFileSync(seedPath, 'utf8');

  // Replace q18 entirely
  const b18 = findObjectBounds(src, 'y12a-5b-q18');
  if (!b18) throw new Error('q18 not found');
  const q18Text = formatObject(Q18, 2);
  src = src.slice(0, b18.start) + q18Text + src.slice(b18.end + 1);
  console.log('replaced q18 with subquestions, parts=', Q18.subQuestions.length);

  // Enrich others by field replacement within object
  for (const [id, fields] of Object.entries(ENRICH)) {
    const b = findObjectBounds(src, id);
    if (!b) {
      console.error('missing', id);
      continue;
    }
    let obj = src.slice(b.start, b.end + 1);

    const setStr = (key, val) => {
      const re = new RegExp(`"${key}":\\s*"(?:\\\\.|[^"\\\\])*"`);
      if (re.test(obj)) obj = obj.replace(re, `"${key}": ${JSON.stringify(val)}`);
      else {
        // insert after type or a
        obj = obj.replace(/("id":\s*"[^"]+",)/, `$1\n    "${key}": ${JSON.stringify(val)},`);
      }
    };
    const setNum = (key, val) => {
      const re = new RegExp(`"${key}":\\s*(?:"(?:\\\\.|[^"\\\\])*"|-?\\d+)`);
      const lit = typeof val === 'number' ? String(val) : JSON.stringify(val);
      if (re.test(obj)) obj = obj.replace(re, `"${key}": ${lit}`);
    };

    if (fields.type) setStr('type', fields.type);
    if (fields.question) setStr('question', fields.question);
    if (fields.a != null) setNum('a', fields.a);
    if (fields.answer != null) setStr('answer', fields.answer);
    if (fields.solution) setStr('solution', fields.solution);
    if (fields.hint) setStr('hint', fields.hint);

    // solutionSteps
    const si = obj.indexOf('"solutionSteps":');
    if (si >= 0) {
      const as = obj.indexOf('[', si);
      let d = 0, ae = -1;
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

    // opts for MC
    if (fields.opts) {
      const newOpts = JSON.stringify(fields.opts, null, 2)
        .split('\n')
        .map((l, i) => (i === 0 ? l : '    ' + l))
        .join('\n');
      if (/"opts":/.test(obj)) {
        const oi = obj.indexOf('"opts":');
        const as = obj.indexOf('[', oi);
        let d = 0, ae = -1;
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
        obj = obj.slice(0, oi) + `"opts": ${newOpts}` + obj.slice(ae + 1);
      } else {
        obj = obj.slice(0, -1) + `,\n    "opts": ${newOpts},\n    "isNew": true\n  }`;
      }
    }

    src = src.slice(0, b.start) + obj + src.slice(b.end + 1);
    console.log('enriched', id, 'steps=', fields.solutionSteps.length, fields.type || '');
  }

  if (WRITE) {
    fs.writeFileSync(seedPath, src);
    console.log('Wrote seed');
  } else console.log('Dry-run');
  return src;
}

function mapSubForFS(sq) {
  const isMC = sq.type === 'multiple_choice';
  let options = [];
  let answer = sq.a ?? sq.answer ?? '';
  if (isMC) {
    options = (sq.opts || []).map((t) => ({ text: t }));
    answer = String(sq.a);
  }
  return {
    id: sq.id,
    type: sq.type,
    question: sq.question,
    options,
    answer: String(answer),
    solution: sq.solution || '',
    solutionSteps: sq.solutionSteps || [],
    hint: sq.hint || '',
    graphData: null,
  };
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

  // q18 parent
  batch.set(
    db.collection('questions').doc(Q18.id),
    {
      type: 'subquestions',
      question: Q18.question,
      answer: Q18.answer,
      a: Q18.a,
      solution: Q18.solution,
      solutionSteps: [],
      hint: Q18.hint,
      subQuestions: Q18.subQuestions.map(mapSubForFS),
      requiresManualGrading: true,
      options: [],
      timeLimit: Q18.timeLimit,
      difficulty: Q18.difficulty,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    },
    { merge: true }
  );
  console.log('queued q18 parent +', Q18.subQuestions.length, 'subs');

  for (const [id, u] of Object.entries(ENRICH)) {
    const payload = {
      solution: u.solution,
      solutionSteps: u.solutionSteps,
      hint: u.hint,
      a: u.a,
      answer: u.answer != null ? String(u.answer) : String(u.a),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    };
    if (u.type) payload.type = u.type;
    if (u.question) payload.question = u.question;
    if (u.opts) {
      payload.options = u.opts.map((text) => ({ text }));
      payload.answer = String(u.a);
      payload.requiresManualGrading = false;
    }
    batch.set(db.collection('questions').doc(id), payload, { merge: true });
    console.log('queued', id);
  }

  await batch.commit();
  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    {
      version: ver,
      membershipVersion: ver,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    },
    { merge: true }
  );
  console.log('Pushed, version', ver);
}

(async () => {
  updateSeed();
  if (PUSH) await push();
  else console.log('Skip push');
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
