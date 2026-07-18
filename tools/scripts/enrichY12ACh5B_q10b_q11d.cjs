/**
 * Detailed FOIL / chain-rule steps for y12a-5b-q10b..f and q11a..d.
 * Usage: node tools/scripts/enrichY12ACh5B_q10b_q11d.cjs [--write] [--push]
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
  'y12a-5b-q10b': {
    solution:
      'Expand first with FOIL: ' +
      '\\((e^{3x}+1)(e^{3x}-2)=e^{6x}-2e^{3x}+e^{3x}-2=e^{6x}-e^{3x}-2\\). ' +
      'Differentiate term by term: ' +
      '\\(y\'=6e^{6x}-3e^{3x}\\).',
    solutionSteps: [
      S(
        'The question asks you to expand first, then differentiate. Expanding turns the product into a sum of simple exponential terms that are easy to differentiate with the chain rule.',
        'y=(e^{3x}+1)(e^{3x}-2)'
      ),
      S(
        'Expand using FOIL (distributive law):\n' +
          '\\(e^{3x}\\cdot e^{3x}=e^{6x}\\) (add exponents: \\(3x+3x=6x\\)),\n' +
          '\\(e^{3x}\\cdot(-2)=-2e^{3x}\\),\n' +
          '\\(1\\cdot e^{3x}=e^{3x}\\),\n' +
          '\\(1\\cdot(-2)=-2\\).',
        'y=e^{6x}-2e^{3x}+e^{3x}-2'
      ),
      S(
        'Combine like terms: the two middle terms are both multiples of \\(e^{3x}\\), so \\(-2e^{3x}+e^{3x}=-e^{3x}\\). The expanded simplified form is \\(y=e^{6x}-e^{3x}-2\\).',
        'y=e^{6x}-e^{3x}-2'
      ),
      S(
        'Differentiate term by term.\n' +
          '\\(\\bullet\\) \\(\\dfrac{d}{dx}e^{6x}=6e^{6x}\\) (chain rule: factor 6 from the exponent),\n' +
          '\\(\\bullet\\) \\(\\dfrac{d}{dx}(-e^{3x})=-3e^{3x}\\) (factor 3 from the exponent, keep the minus),\n' +
          '\\(\\bullet\\) \\(\\dfrac{d}{dx}(-2)=0\\) (constant vanishes).',
        "y'=6e^{6x}-3e^{3x}"
      ),
      S(
        'Therefore \\(y\'=6e^{6x}-3e^{3x}\\). Common errors: forgetting the chain-rule factor 6 on \\(e^{6x}\\), or combining the middle terms incorrectly as \\(-2e^{3x}\\) instead of \\(-e^{3x}\\) before differentiating.',
        "y'=6e^{6x}-3e^{3x}"
      ),
    ],
  },

  'y12a-5b-q10c': {
    solution:
      'Expand first: ' +
      '\\((e^{-x}+3)(e^{-x}+2)=e^{-2x}+5e^{-x}+6\\). ' +
      'Differentiate: ' +
      '\\(y\'=-2e^{-2x}-5e^{-x}\\).',
    solutionSteps: [
      S(
        'Expand first, then differentiate. Do not leave the product unexpanded — FOIL gives simple exponential terms.',
        'y=(e^{-x}+3)(e^{-x}+2)'
      ),
      S(
        'Expand with FOIL:\n' +
          '\\(e^{-x}\\cdot e^{-x}=e^{-2x}\\) (add exponents: \\(-x+(-x)=-2x\\)),\n' +
          '\\(e^{-x}\\cdot 2=2e^{-x}\\),\n' +
          '\\(3\\cdot e^{-x}=3e^{-x}\\),\n' +
          '\\(3\\cdot 2=6\\).',
        'y=e^{-2x}+2e^{-x}+3e^{-x}+6'
      ),
      S(
        'Combine like terms: \\(2e^{-x}+3e^{-x}=5e^{-x}\\). The expanded form is \\(y=e^{-2x}+5e^{-x}+6\\).',
        'y=e^{-2x}+5e^{-x}+6'
      ),
      S(
        'Differentiate term by term. For each negative exponent, the chain rule contributes a minus:\n' +
          '\\(\\bullet\\) \\(\\dfrac{d}{dx}e^{-2x}=-2e^{-2x}\\),\n' +
          '\\(\\bullet\\) \\(\\dfrac{d}{dx}(5e^{-x})=5(-e^{-x})=-5e^{-x}\\),\n' +
          '\\(\\bullet\\) \\(\\dfrac{d}{dx}(6)=0\\).',
        "y'=-2e^{-2x}-5e^{-x}"
      ),
      S(
        'Therefore \\(y\'=-2e^{-2x}-5e^{-x}\\). Common errors: dropping a chain-rule minus (which can produce the wrong option \\(2e^{-2x}-5e^{-x}\\)), or forgetting that both exponential terms get a negative factor from the chain rule.',
        "y'=-2e^{-2x}-5e^{-x}"
      ),
    ],
  },

  'y12a-5b-q10d': {
    solution:
      'Expand first: ' +
      '\\((e^{-2x}-1)(e^{-2x}-3)=e^{-4x}-4e^{-2x}+3\\). ' +
      'Differentiate: ' +
      '\\(y\'=-4e^{-4x}+8e^{-2x}\\).',
    solutionSteps: [
      S(
        'Expand first, then differentiate. The product becomes a sum of exponential terms after FOIL.',
        'y=(e^{-2x}-1)(e^{-2x}-3)'
      ),
      S(
        'Expand with FOIL:\n' +
          '\\(e^{-2x}\\cdot e^{-2x}=e^{-4x}\\),\n' +
          '\\(e^{-2x}\\cdot(-3)=-3e^{-2x}\\),\n' +
          '\\((-1)\\cdot e^{-2x}=-e^{-2x}\\),\n' +
          '\\((-1)\\cdot(-3)=+3\\).',
        'y=e^{-4x}-3e^{-2x}-e^{-2x}+3'
      ),
      S(
        'Combine like terms: \\(-3e^{-2x}-e^{-2x}=-4e^{-2x}\\). The expanded form is \\(y=e^{-4x}-4e^{-2x}+3\\).',
        'y=e^{-4x}-4e^{-2x}+3'
      ),
      S(
        'Differentiate term by term:\n' +
          '\\(\\bullet\\) \\(\\dfrac{d}{dx}e^{-4x}=-4e^{-4x}\\),\n' +
          '\\(\\bullet\\) \\(\\dfrac{d}{dx}(-4e^{-2x})=-4\\cdot(-2e^{-2x})=+8e^{-2x}\\) (two minuses: the coefficient and the chain-rule factor),\n' +
          '\\(\\bullet\\) \\(\\dfrac{d}{dx}(3)=0\\).',
        "y'=-4e^{-4x}+8e^{-2x}"
      ),
      S(
        'Therefore \\(y\'=-4e^{-4x}+8e^{-2x}\\). Watch the double negative when differentiating \\(-4e^{-2x}\\): the chain rule multiplies by \\(-2\\), so the middle term becomes positive \\(+8e^{-2x}\\).',
        "y'=-4e^{-4x}+8e^{-2x}"
      ),
    ],
  },

  'y12a-5b-q10e': {
    solution:
      'Expand first: ' +
      '\\((e^{3x}+1)(e^{x}+2)=e^{4x}+2e^{3x}+e^{x}+2\\). ' +
      'Differentiate: ' +
      '\\(y\'=4e^{4x}+6e^{3x}+e^{x}\\).',
    solutionSteps: [
      S(
        'Expand first, then differentiate. Note that the exponents on the two factors are different (\\(3x\\) and \\(x\\)), so FOIL produces several distinct exponential terms.',
        'y=(e^{3x}+1)(e^{x}+2)'
      ),
      S(
        'Expand with FOIL:\n' +
          '\\(e^{3x}\\cdot e^{x}=e^{4x}\\) (add exponents: \\(3x+x=4x\\)),\n' +
          '\\(e^{3x}\\cdot 2=2e^{3x}\\),\n' +
          '\\(1\\cdot e^{x}=e^{x}\\),\n' +
          '\\(1\\cdot 2=2\\).',
        'y=e^{4x}+2e^{3x}+e^{x}+2'
      ),
      S(
        'There are no like terms to combine here — each exponential has a different exponent. The expanded form is already simplified: \\(y=e^{4x}+2e^{3x}+e^{x}+2\\).',
        'y=e^{4x}+2e^{3x}+e^{x}+2'
      ),
      S(
        'Differentiate term by term:\n' +
          '\\(\\bullet\\) \\(\\dfrac{d}{dx}e^{4x}=4e^{4x}\\),\n' +
          '\\(\\bullet\\) \\(\\dfrac{d}{dx}(2e^{3x})=2\\cdot 3e^{3x}=6e^{3x}\\),\n' +
          '\\(\\bullet\\) \\(\\dfrac{d}{dx}e^{x}=e^{x}\\),\n' +
          '\\(\\bullet\\) \\(\\dfrac{d}{dx}(2)=0\\).',
        "y'=4e^{4x}+6e^{3x}+e^{x}"
      ),
      S(
        'Therefore \\(y\'=4e^{4x}+6e^{3x}+e^{x}\\). Common errors: writing \\(e^{3x}\\cdot e^{x}=e^{3x}\\) instead of \\(e^{4x}\\), or forgetting the factor 3 when differentiating \\(2e^{3x}\\) (which would give \\(2e^{3x}\\) instead of \\(6e^{3x}\\)).',
        "y'=4e^{4x}+6e^{3x}+e^{x}"
      ),
    ],
  },

  'y12a-5b-q10f': {
    solution:
      'Expand first: ' +
      '\\((e^{2x}-2)(e^{-x}+1)=e^{x}+e^{2x}-2e^{-x}-2\\). ' +
      'Differentiate: ' +
      '\\(y\'=e^{x}+2e^{2x}+2e^{-x}\\).',
    solutionSteps: [
      S(
        'Expand first, then differentiate. Positive and negative exponents appear together — add them carefully when multiplying.',
        'y=(e^{2x}-2)(e^{-x}+1)'
      ),
      S(
        'Expand with FOIL:\n' +
          '\\(e^{2x}\\cdot e^{-x}=e^{x}\\) (add exponents: \\(2x+(-x)=x\\)),\n' +
          '\\(e^{2x}\\cdot 1=e^{2x}\\),\n' +
          '\\((-2)\\cdot e^{-x}=-2e^{-x}\\),\n' +
          '\\((-2)\\cdot 1=-2\\).',
        'y=e^{x}+e^{2x}-2e^{-x}-2'
      ),
      S(
        'No like terms to combine (exponents \\(x\\), \\(2x\\), and \\(-x\\) are all different). The expanded form is \\(y=e^{x}+e^{2x}-2e^{-x}-2\\).',
        'y=e^{x}+e^{2x}-2e^{-x}-2'
      ),
      S(
        'Differentiate term by term:\n' +
          '\\(\\bullet\\) \\(\\dfrac{d}{dx}e^{x}=e^{x}\\),\n' +
          '\\(\\bullet\\) \\(\\dfrac{d}{dx}e^{2x}=2e^{2x}\\),\n' +
          '\\(\\bullet\\) \\(\\dfrac{d}{dx}(-2e^{-x})=-2\\cdot(-e^{-x})=+2e^{-x}\\) (minus times chain-rule minus),\n' +
          '\\(\\bullet\\) \\(\\dfrac{d}{dx}(-2)=0\\).',
        "y'=e^{x}+2e^{2x}+2e^{-x}"
      ),
      S(
        'Therefore \\(y\'=e^{x}+2e^{2x}+2e^{-x}\\). The sign flip on the \\(e^{-x}\\) term is important: differentiating \\(-2e^{-x}\\) gives \\(+2e^{-x}\\), not \\(-2e^{-x}\\).',
        "y'=e^{x}+2e^{2x}+2e^{-x}"
      ),
    ],
  },

  'y12a-5b-q11a': {
    solution:
      'Let \\(u=1-e^{x}\\), so \\(y=u^{4}\\). Then \\(u\'=-e^{x}\\) and ' +
      '\\(y\'=4u^{3}\\cdot(-e^{x})=-4e^{x}(1-e^{x})^{3}\\).',
    solutionSteps: [
      S(
        'This is a composite function: outer power 4, inner function \\(1-e^{x}\\). Set \\(u=1-e^{x}\\) so that \\(y=u^{4}\\).',
        'u=1-e^{x},\\quad y=u^{4}'
      ),
      S(
        'Differentiate the outer power with respect to \\(u\\): \\(\\dfrac{dy}{du}=4u^{3}\\).',
        '\\dfrac{dy}{du}=4u^{3}'
      ),
      S(
        'Differentiate the inner function carefully. The constant 1 has derivative 0. For \\(-e^{x}\\), the derivative is \\(-e^{x}\\) (since \\(\\dfrac{d}{dx}e^{x}=e^{x}\\)). So \\(u\'=-e^{x}\\).',
        "u'=-e^{x}"
      ),
      S(
        'Chain rule: \\(\\dfrac{dy}{dx}=4u^{3}\\cdot u\'=4u^{3}\\cdot(-e^{x})=-4e^{x}u^{3}\\). Substitute \\(u=1-e^{x}\\) back in.',
        "y'=-4e^{x}(1-e^{x})^{3}"
      ),
      S(
        'Therefore \\(y\'=-4e^{x}(1-e^{x})^{3}\\). Common errors: forgetting the minus from \\(u\'\\) (which produces the wrong positive option \\(4e^{x}(1-e^{x})^{3}\\)), or reducing the outer power incorrectly (using 3 instead of 4 as the coefficient).',
        "y'=-4e^{x}(1-e^{x})^{3}"
      ),
    ],
  },

  'y12a-5b-q11b': {
    solution:
      'Let \\(u=e^{3x}-4\\), so \\(y=u^{5}\\). Then \\(u\'=3e^{3x}\\) and ' +
      '\\(y\'=5u^{4}\\cdot 3e^{3x}=15e^{3x}(e^{3x}-4)^{4}\\).',
    solutionSteps: [
      S(
        'Composite function: outer power 5, inner function \\(e^{3x}-4\\). Set \\(u=e^{3x}-4\\) so that \\(y=u^{5}\\).',
        'u=e^{3x}-4,\\quad y=u^{5}'
      ),
      S(
        'Differentiate the outer power: \\(\\dfrac{dy}{du}=5u^{4}\\). The power drops by 1 (from 5 to 4) and the coefficient is 5.',
        '\\dfrac{dy}{du}=5u^{4}'
      ),
      S(
        'Differentiate the inner function. The constant \\(-4\\) vanishes. For \\(e^{3x}\\) use the chain rule: the exponent contributes a factor of 3, so \\(u\'=3e^{3x}\\).',
        "u'=3e^{3x}"
      ),
      S(
        'Multiply outer derivative by inner derivative: \\(\\dfrac{dy}{dx}=5u^{4}\\cdot 3e^{3x}=15e^{3x}u^{4}\\). Then replace \\(u\\) with \\(e^{3x}-4\\).',
        "y'=15e^{3x}(e^{3x}-4)^{4}"
      ),
      S(
        'Therefore \\(y\'=15e^{3x}(e^{3x}-4)^{4}\\). Common errors: forgetting the chain-rule factor 3 (which would give \\(5e^{3x}(e^{3x}-4)^{4}\\) instead of 15), or writing the outer power as 5 instead of 4 after differentiating.',
        "y'=15e^{3x}(e^{3x}-4)^{4}"
      ),
    ],
  },

  'y12a-5b-q11c': {
    solution:
      'Rewrite as \\(y=(e^{x}-2)^{-1}\\). Chain rule: ' +
      '\\(y\'=(-1)(e^{x}-2)^{-2}\\cdot e^{x}=-\\dfrac{e^{x}}{(e^{x}-2)^{2}}\\).',
    solutionSteps: [
      S(
        'Rewrite the reciprocal as a negative power so the power chain rule applies cleanly: \\(y=(e^{x}-2)^{-1}\\).',
        'y=(e^{x}-2)^{-1}'
      ),
      S(
        'Set the inner function \\(u=e^{x}-2\\), so \\(y=u^{-1}\\). Differentiate the outer power: \\(\\dfrac{dy}{du}=-1\\cdot u^{-2}=-u^{-2}=-\\dfrac{1}{u^{2}}\\).',
        'u=e^{x}-2,\\quad \\dfrac{dy}{du}=-u^{-2}'
      ),
      S(
        'Differentiate the inner function: \\(u\'=e^{x}\\) (the constant \\(-2\\) has derivative 0).',
        "u'=e^{x}"
      ),
      S(
        'Chain rule: \\(y\'=-u^{-2}\\cdot e^{x}=-\\dfrac{e^{x}}{u^{2}}\\). Substitute \\(u=e^{x}-2\\) back in.',
        "y'=-\\dfrac{e^{x}}{(e^{x}-2)^{2}}"
      ),
      S(
        'Therefore \\(y\'=-\\dfrac{e^{x}}{(e^{x}-2)^{2}}\\). Common errors: dropping the minus from the outer power rule (positive fraction option), or forgetting to multiply by the inner derivative \\(e^{x}\\) (which would give \\(-\\dfrac{1}{(e^{x}-2)^{2}}\\)).',
        "y'=-\\dfrac{e^{x}}{(e^{x}-2)^{2}}"
      ),
    ],
  },

  'y12a-5b-q11d': {
    solution:
      'Rewrite as \\(y=(e^{2x}+3)^{-3}\\). Let \\(u=e^{2x}+3\\), so \\(u\'=2e^{2x}\\) and ' +
      '\\(y\'=-3u^{-4}\\cdot 2e^{2x}=-\\dfrac{6e^{2x}}{(e^{2x}+3)^{4}}\\).',
    solutionSteps: [
      S(
        'Rewrite the fraction as a negative power: \\(\\dfrac{1}{(e^{2x}+3)^{3}}=(e^{2x}+3)^{-3}\\). This makes the power chain rule direct.',
        'y=(e^{2x}+3)^{-3}'
      ),
      S(
        'Set the inner function \\(u=e^{2x}+3\\), so \\(y=u^{-3}\\). Outer derivative: \\(\\dfrac{dy}{du}=-3u^{-4}=-\\dfrac{3}{u^{4}}\\).',
        'u=e^{2x}+3,\\quad \\dfrac{dy}{du}=-3u^{-4}'
      ),
      S(
        'Differentiate the inner function. Constant 3 vanishes. For \\(e^{2x}\\) the chain rule gives factor 2: \\(u\'=2e^{2x}\\).',
        "u'=2e^{2x}"
      ),
      S(
        'Chain rule: \\(y\'=(-3u^{-4})\\cdot(2e^{2x})=-6e^{2x}u^{-4}=-\\dfrac{6e^{2x}}{u^{4}}\\). Substitute \\(u=e^{2x}+3\\).',
        "y'=-\\dfrac{6e^{2x}}{(e^{2x}+3)^{4}}"
      ),
      S(
        'Therefore \\(y\'=-\\dfrac{6e^{2x}}{(e^{2x}+3)^{4}}\\). Common errors: forgetting the factor 2 from \\(u\'\\) (which would give 3 instead of 6 in the numerator), dropping the overall minus, or reducing the outer power from \\(-3\\) to \\(-2\\) instead of \\(-4\\).',
        "y'=-\\dfrac{6e^{2x}}{(e^{2x}+3)^{4}}"
      ),
    ],
  },
};

function updateSeed() {
  let src = fs.readFileSync(seedPath, 'utf8');
  let n = 0;

  for (const [id, u] of Object.entries(UPDATES)) {
    const idMarker = `"id": "${id}"`;
    const idIdx = src.indexOf(idMarker);
    if (idIdx < 0) {
      console.error('ID not found in seed file:', id);
      continue;
    }
    const solKey = '"solution":';
    const solStart = src.indexOf(solKey, idIdx);
    const stepsKey = '"solutionSteps":';
    const stepsStart = src.indexOf(stepsKey, idIdx);
    if (solStart < 0 || stepsStart < 0 || solStart > stepsStart) {
      console.error('Could not locate solution/solutionSteps for', id);
      continue;
    }
    const arrStart = src.indexOf('[', stepsStart);
    let depth = 0;
    let arrEnd = -1;
    for (let i = arrStart; i < src.length; i++) {
      const ch = src[i];
      if (ch === '[') depth++;
      else if (ch === ']') {
        depth--;
        if (depth === 0) {
          arrEnd = i;
          break;
        }
      }
    }
    if (arrEnd < 0) {
      console.error('Could not find end of solutionSteps for', id);
      continue;
    }

    const newSolution = JSON.stringify(u.solution);
    const newSteps = JSON.stringify(u.solutionSteps, null, 2)
      .split('\n')
      .map((line, i) => (i === 0 ? line : '    ' + line))
      .join('\n');

    const replacement =
      `"solution": ${newSolution},\n` +
      `    "solutionSteps": ${newSteps}`;

    src = src.slice(0, solStart) + replacement + src.slice(arrEnd + 1);
    n++;
    console.log('rewrote seed text for', id, 'steps=', u.solutionSteps.length);
  }

  if (n !== Object.keys(UPDATES).length) {
    console.warn('WARNING: expected', Object.keys(UPDATES).length, 'got', n);
  }

  if (WRITE) {
    fs.writeFileSync(seedPath, src);
    console.log('Wrote', seedPath);
  } else {
    console.log('Dry-run only (pass --write to save seed file)');
  }
  return n;
}

async function pushFirestore() {
  const admin = require('firebase-admin');
  const credCandidates = [
    path.join(process.env.HOME, 'Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-81866b8996.json'),
    path.join(process.env.HOME, 'Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json'),
    path.join(process.env.HOME, 'Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-dffb22a1c2.json'),
  ];
  const credPath = credCandidates.find((p) => fs.existsSync(p));
  if (!credPath) throw new Error('No Firebase admin credentials found in ~/Downloads');

  if (!admin.apps.length) {
    admin.initializeApp({ credential: admin.credential.cert(require(credPath)) });
  }
  const db = admin.firestore();

  const batch = db.batch();
  let count = 0;
  for (const [id, u] of Object.entries(UPDATES)) {
    const ref = db.collection('questions').doc(id);
    batch.set(
      ref,
      {
        solution: u.solution,
        solutionSteps: u.solutionSteps,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    count++;
    console.log('queued push:', id);
  }
  await batch.commit();
  console.log('Firestore batch committed for', count, 'docs');

  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    {
      version: ver,
      membershipVersion: ver,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    },
    { merge: true }
  );
  console.log('Bumped sync_meta/questions version to', ver);
}

(async () => {
  updateSeed();
  if (PUSH) {
    await pushFirestore();
  } else {
    console.log('Skip Firestore (pass --push to write)');
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
