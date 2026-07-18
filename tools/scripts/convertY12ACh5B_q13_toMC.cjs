/**
 * Convert y12a-5b-q13a..d short_answer → multiple_choice with detailed steps.
 * Usage: node tools/scripts/convertY12ACh5B_q13_toMC.cjs [--write] [--push]
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
  'y12a-5b-q13a': {
    type: 'multiple_choice',
    question:
      'For the function \\( f(x) = e^{3x+1} \\), evaluate both the first derivative and the second derivative at \\( x = 0 \\).',
    a: 2,
    answer: '2',
    opts: [
      "\\(f'(0) = 3,\\; f''(0) = 9\\)",
      "\\(f'(0) = 3e,\\; f''(0) = 3e\\)",
      "\\(f'(0) = 3e,\\; f''(0) = 9e\\)",
      "\\(f'(0) = e,\\; f''(0) = 9e\\)",
    ],
    solution:
      "\\(f(x)=e^{3x+1}\\). Chain rule: \\(f'(x)=3e^{3x+1}\\), \\(f''(x)=9e^{3x+1}\\). " +
      "At \\(x=0\\): \\(f'(0)=3e^{1}=3e\\), \\(f''(0)=9e\\).",
    solutionSteps: [
      S(
        'Given \\(f(x)=e^{3x+1}\\). The exponent is linear: use the chain rule \\(\\dfrac{d}{dx}e^{u}=e^{u}u\'\\) with \\(u=3x+1\\).',
        'f(x)=e^{3x+1},\\quad u=3x+1'
      ),
      S(
        'First derivative: \\(u\'=3\\), so \\(f\'(x)=3e^{3x+1}\\). Differentiate again: the same chain-rule factor 3 multiplies once more, giving \\(f\'\'(x)=9e^{3x+1}\\).',
        "f'(x)=3e^{3x+1},\\quad f''(x)=9e^{3x+1}"
      ),
      S(
        'Substitute \\(x=0\\). Note that \\(e^{3(0)+1}=e^{1}=e\\):\\n' +
          '\\(f\'(0)=3e\\),\\n' +
          '\\(f\'\'(0)=9e\\).',
        "f'(0)=3e,\\quad f''(0)=9e"
      ),
      S(
        'Common errors: forgetting the constant in the exponent and writing \\(e^{0}=1\\) (which gives the wrong option \\(3,\\;9\\)), or reusing the factor 3 only once on the second derivative (\\(3e\\) instead of \\(9e\\)).',
        "f'(0)=3e,\\; f''(0)=9e"
      ),
    ],
    hint: 'Differentiate twice with the chain rule, then substitute x = 0. Remember e^{3(0)+1} = e.',
  },

  'y12a-5b-q13b': {
    type: 'multiple_choice',
    question:
      'For the function \\( f(x) = e^{-2x} \\), evaluate both the first derivative and the second derivative at \\( x = 1 \\).',
    a: 0,
    answer: '0',
    opts: [
      "\\(f'(1) = -2e^{-2},\\; f''(1) = 4e^{-2}\\)",
      "\\(f'(1) = 2e^{-2},\\; f''(1) = 4e^{-2}\\)",
      "\\(f'(1) = -2e^{-2},\\; f''(1) = -4e^{-2}\\)",
      "\\(f'(1) = -2e,\\; f''(1) = 4e\\)",
    ],
    solution:
      "\\(f(x)=e^{-2x}\\). Then \\(f'(x)=-2e^{-2x}\\), \\(f''(x)=4e^{-2x}\\). " +
      "At \\(x=1\\): \\(f'(1)=-2e^{-2}\\), \\(f''(1)=4e^{-2}\\).",
    solutionSteps: [
      S(
        'Given \\(f(x)=e^{-2x}\\). Chain rule with exponent \\(u=-2x\\): \\(u\'=-2\\).',
        'f(x)=e^{-2x}'
      ),
      S(
        'First derivative: \\(f\'(x)=-2e^{-2x}\\). Differentiate again: the chain-rule factor is still \\(-2\\), so ' +
          '\\(f\'\'(x)=(-2)(-2)e^{-2x}=4e^{-2x}\\).',
        "f'(x)=-2e^{-2x},\\quad f''(x)=4e^{-2x}"
      ),
      S(
        'Substitute \\(x=1\\):\\n' +
          '\\(f\'(1)=-2e^{-2}\\),\\n' +
          '\\(f\'\'(1)=4e^{-2}\\).',
        "f'(1)=-2e^{-2},\\quad f''(1)=4e^{-2}"
      ),
      S(
        'Common errors: dropping the minus on \\(f\'\\) (option \\(2e^{-2}\\)), keeping a minus on \\(f\'\'\\) (option \\(-4e^{-2}\\)), or evaluating the exponential as \\(e\\) instead of \\(e^{-2}\\).',
        "f'(1)=-2e^{-2},\\; f''(1)=4e^{-2}"
      ),
    ],
    hint: 'Chain rule twice. At x = 1 the exponential becomes e^{-2}, not e.',
  },

  'y12a-5b-q13c': {
    type: 'multiple_choice',
    question:
      'For the function \\( f(x) = x e^{-2x} \\), evaluate both the first derivative and the second derivative at \\( x = 1 \\).',
    a: 3,
    answer: '3',
    opts: [
      "\\(f'(1) = -e^{-2},\\; f''(1) = 4e^{-2}\\)",
      "\\(f'(1) = -2e^{-2},\\; f''(1) = 0\\)",
      "\\(f'(1) = e^{-2},\\; f''(1) = 0\\)",
      "\\(f'(1) = -e^{-2},\\; f''(1) = 0\\)",
    ],
    solution:
      "Product rule: \\(f'(x)=e^{-2x}(1-2x)\\). At \\(x=1\\): \\(f'(1)=-e^{-2}\\). " +
      "Second derivative: \\(f''(x)=e^{-2x}(4x-4)\\). At \\(x=1\\): \\(f''(1)=0\\).",
    solutionSteps: [
      S(
        'This is a product: \\(f(x)=x\\cdot e^{-2x}\\). Use the product rule \\((uv)\'=u\'v+uv\'\\) with \\(u=x\\), \\(v=e^{-2x}\\).',
        'u=x,\\quad v=e^{-2x}'
      ),
      S(
        '\\(u\'=1\\) and \\(v\'=-2e^{-2x}\\). So\\n' +
          '\\(f\'(x)=1\\cdot e^{-2x}+x(-2e^{-2x})=e^{-2x}-2x e^{-2x}=e^{-2x}(1-2x)\\).',
        "f'(x)=e^{-2x}(1-2x)"
      ),
      S(
        'At \\(x=1\\): \\(f\'(1)=e^{-2}(1-2)=-e^{-2}\\).',
        "f'(1)=-e^{-2}"
      ),
      S(
        'Differentiate again with the product rule on \\(e^{-2x}(1-2x)\\):\\n' +
          '\\(f\'\'(x)=(-2e^{-2x})(1-2x)+e^{-2x}(-2)=e^{-2x}\\bigl[-2(1-2x)-2\\bigr]=e^{-2x}(4x-4)\\).\\n' +
          'At \\(x=1\\): \\(f\'\'(1)=e^{-2}(4-4)=0\\).',
        "f''(1)=0"
      ),
      S(
        'Therefore \\(f\'(1)=-e^{-2}\\) and \\(f\'\'(1)=0\\). Common errors: treating it as pure exponential (missing product rule), or mis-evaluating \\(f\'\'(1)\\) as nonzero.',
        "f'(1)=-e^{-2},\\; f''(1)=0"
      ),
    ],
    hint: 'Use the product rule for both derivatives. f\'\'(1) simplifies to 0.',
  },

  'y12a-5b-q13d': {
    type: 'multiple_choice',
    question:
      'For the function \\( f(x) = e^{-3x^{2}} \\), evaluate both the first derivative and the second derivative at \\( x = 0 \\).',
    a: 1,
    answer: '1',
    opts: [
      "\\(f'(0) = 0,\\; f''(0) = 6\\)",
      "\\(f'(0) = 0,\\; f''(0) = -6\\)",
      "\\(f'(0) = -6,\\; f''(0) = -6\\)",
      "\\(f'(0) = 0,\\; f''(0) = 0\\)",
    ],
    solution:
      "Chain rule: \\(f'(x)=-6x e^{-3x^{2}}\\), so \\(f'(0)=0\\). " +
      "Product rule on \\(f'\\): \\(f''(x)=-6e^{-3x^{2}}(1-6x^{2})\\), so \\(f''(0)=-6\\).",
    solutionSteps: [
      S(
        'Given \\(f(x)=e^{-3x^{2}}\\). Chain rule with inner function \\(u=-3x^{2}\\): \\(u\'=-6x\\).',
        'f(x)=e^{-3x^{2}},\\quad u=-3x^{2}'
      ),
      S(
        'First derivative: \\(f\'(x)=e^{-3x^{2}}\\cdot(-6x)=-6x e^{-3x^{2}}\\). At \\(x=0\\) the factor of \\(x\\) forces \\(f\'(0)=0\\).',
        "f'(x)=-6x e^{-3x^{2}},\\quad f'(0)=0"
      ),
      S(
        'Second derivative: apply the product rule to \\(-6x\\cdot e^{-3x^{2}}\\).\\n' +
          '\\(f\'\'(x)=-6\\bigl[e^{-3x^{2}}+x\\cdot(-6x)e^{-3x^{2}}\\bigr]=-6e^{-3x^{2}}(1-6x^{2})\\).',
        "f''(x)=-6e^{-3x^{2}}(1-6x^{2})"
      ),
      S(
        'At \\(x=0\\): \\(f\'\'(0)=-6e^{0}(1-0)=-6\\).',
        "f''(0)=-6"
      ),
      S(
        'Therefore \\(f\'(0)=0\\) and \\(f\'\'(0)=-6\\). Common errors: flipping the sign of \\(f\'\'(0)\\) to \\(+6\\), or claiming both derivatives are zero.',
        "f'(0)=0,\\; f''(0)=-6"
      ),
    ],
    hint: 'f\' has a factor of x so f\'(0)=0. Use the product rule for f\'\'.',
  },
};

function replaceObjectFields(src, id, fields) {
  const idMarker = `"id": "${id}"`;
  const idIdx = src.indexOf(idMarker);
  if (idIdx < 0) {
    console.error('ID not found:', id);
    return src;
  }
  let objStart = src.lastIndexOf('{', idIdx);
  // walk back to the object that contains this id (should be fine)
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
  if (objEnd < 0) return src;

  let obj = src.slice(objStart, objEnd + 1);

  const setStr = (key, val) => {
    const re = new RegExp(`"${key}":\\s*"(?:\\\\.|[^"\\\\])*"`);
    if (re.test(obj)) {
      obj = obj.replace(re, `"${key}": ${JSON.stringify(val)}`);
    } else {
      // insert after type or id
      obj = obj.replace(/("id":\s*"[^"]+",)/, `$1\n    "${key}": ${JSON.stringify(val)},`);
    }
  };
  const setNumOrStr = (key, val) => {
    const re = new RegExp(`"${key}":\\s*(?:"(?:\\\\.|[^"\\\\])*"|[0-9]+|true|false)`);
    const lit = typeof val === 'number' ? String(val) : JSON.stringify(val);
    if (re.test(obj)) {
      obj = obj.replace(re, `"${key}": ${lit}`);
    } else {
      obj = obj.replace(/("id":\s*"[^"]+",)/, `$1\n    "${key}": ${lit},`);
    }
  };

  setStr('type', fields.type);
  setStr('question', fields.question);
  setNumOrStr('a', fields.a);
  setStr('solution', fields.solution);
  setStr('hint', fields.hint);

  // solutionSteps
  const stepsKey = '"solutionSteps":';
  const si = obj.indexOf(stepsKey);
  if (si >= 0) {
    const arrStart = obj.indexOf('[', si);
    let d = 0;
    let arrEnd = -1;
    for (let i = arrStart; i < obj.length; i++) {
      if (obj[i] === '[') d++;
      else if (obj[i] === ']') {
        d--;
        if (d === 0) {
          arrEnd = i;
          break;
        }
      }
    }
    if (arrEnd >= 0) {
      const newSteps = JSON.stringify(fields.solutionSteps, null, 2)
        .split('\n')
        .map((line, i) => (i === 0 ? line : '    ' + line))
        .join('\n');
      obj = obj.slice(0, si) + `"solutionSteps": ${newSteps}` + obj.slice(arrEnd + 1);
    }
  }

  // opts / answer / isNew
  const optsJson = JSON.stringify(fields.opts, null, 2)
    .split('\n')
    .map((line, i) => (i === 0 ? line : '    ' + line))
    .join('\n');

  if (/"opts":/.test(obj)) {
    const oi = obj.indexOf('"opts":');
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
    if (ae >= 0) obj = obj.slice(0, oi) + `"opts": ${optsJson}` + obj.slice(ae + 1);
  } else {
    // insert before closing
    obj = obj.slice(0, -1) + `,\n    "opts": ${optsJson},\n    "answer": ${JSON.stringify(fields.answer)},\n    "isNew": true\n  }`;
  }

  if (/"answer":/.test(obj)) {
    obj = obj.replace(/"answer":\s*"(?:\\.|[^"\\])*"/, `"answer": ${JSON.stringify(fields.answer)}`);
  } else if (!obj.includes('"answer"')) {
    obj = obj.slice(0, -1) + `,\n    "answer": ${JSON.stringify(fields.answer)}\n  }`;
  }

  if (!/"isNew":/.test(obj)) {
    obj = obj.slice(0, -1) + `,\n    "isNew": true\n  }`;
  }

  return src.slice(0, objStart) + obj + src.slice(objEnd + 1);
}

function updateSeed() {
  let src = fs.readFileSync(seedPath, 'utf8');
  for (const [id, fields] of Object.entries(UPDATES)) {
    src = replaceObjectFields(src, id, fields);
    console.log('updated', id, 'a=', fields.a, 'opts=', fields.opts.length);
  }
  if (WRITE) {
    fs.writeFileSync(seedPath, src);
    console.log('Wrote', seedPath);
  } else console.log('Dry-run (pass --write)');
}

async function pushFirestore() {
  const admin = require('firebase-admin');
  const credCandidates = [
    path.join(process.env.HOME, 'Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-81866b8996.json'),
    path.join(process.env.HOME, 'Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json'),
    path.join(process.env.HOME, 'Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-dffb22a1c2.json'),
  ];
  const credPath = credCandidates.find((p) => fs.existsSync(p));
  if (!credPath) throw new Error('No credentials');
  if (!admin.apps.length) {
    admin.initializeApp({ credential: admin.credential.cert(require(credPath)) });
  }
  const db = admin.firestore();
  const batch = db.batch();

  for (const [id, u] of Object.entries(UPDATES)) {
    // Firestore shape: options array of {text}, answer is index string
    const options = u.opts.map((text) => ({ text }));
    batch.set(
      db.collection('questions').doc(id),
      {
        type: 'multiple_choice',
        question: u.question,
        options,
        answer: String(u.a),
        a: u.a,
        solution: u.solution,
        solutionSteps: u.solutionSteps,
        hint: u.hint,
        requiresManualGrading: false,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    console.log('queued', id, 'correct idx', u.a, '→', u.opts[u.a]);
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
  console.log('Pushed 4 docs; version', ver);
}

(async () => {
  updateSeed();
  if (PUSH) await pushFirestore();
  else console.log('Skip push');
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
